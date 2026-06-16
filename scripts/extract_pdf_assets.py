from __future__ import annotations

import argparse
import pathlib
import re
import zlib


STREAM_RE = re.compile(
    rb"(?P<num>\d+)\s+(?P<gen>\d+)\s+obj(?P<dict>.*?)stream\r?\n(?P<data>.*?)\r?\nendstream",
    re.S,
)


def clean_stream(raw: bytes) -> bytes:
    if raw.endswith(b"\r"):
        return raw[:-1]
    return raw


def decode_flate(stream: bytes) -> bytes | None:
    try:
        return zlib.decompress(stream)
    except zlib.error:
        return None


def decode_pdf_string(value: bytes) -> str:
    out = bytearray()
    i = 0
    while i < len(value):
        c = value[i]
        if c == 92 and i + 1 < len(value):
            i += 1
            esc = value[i]
            if esc in b"nrtbf":
                out.append({ord("n"): 10, ord("r"): 13, ord("t"): 9, ord("b"): 8, ord("f"): 12}[esc])
            elif esc in b"()\\":
                out.append(esc)
            elif 48 <= esc <= 55:
                octal = bytes([esc])
                for _ in range(2):
                    if i + 1 < len(value) and 48 <= value[i + 1] <= 55:
                        i += 1
                        octal += bytes([value[i]])
                out.append(int(octal, 8) & 0xFF)
            else:
                out.append(esc)
        else:
            out.append(c)
        i += 1

    data = bytes(out)
    for encoding in ("utf-16-be", "utf-8", "latin-1"):
        try:
            text = data.decode(encoding)
            if text.strip():
                return text
        except UnicodeDecodeError:
            pass
    return ""


def extract_text(decoded_stream: bytes) -> list[str]:
    chunks: list[str] = []
    for match in re.finditer(rb"\((?:\\.|[^\\)])*\)", decoded_stream, re.S):
        text = decode_pdf_string(match.group(0)[1:-1]).strip()
        if len(text) > 1:
            chunks.append(text)

    for match in re.finditer(rb"<([0-9A-Fa-f\s]{4,})>", decoded_stream):
        compact = re.sub(rb"\s+", b"", match.group(1))
        if len(compact) % 2:
            continue
        try:
            data = bytes.fromhex(compact.decode("ascii"))
        except ValueError:
            continue
        for encoding in ("utf-16-be", "utf-8", "latin-1"):
            try:
                text = data.decode(encoding).strip()
            except UnicodeDecodeError:
                continue
            if len(text) > 1 and any(ch.isalpha() for ch in text):
                chunks.append(text)
                break
    return chunks


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", type=pathlib.Path)
    parser.add_argument("out", type=pathlib.Path)
    args = parser.parse_args()

    args.out.mkdir(parents=True, exist_ok=True)
    data = args.pdf.read_bytes()
    text_lines: list[str] = []
    image_index = 1
    stream_count = 0

    for match in STREAM_RE.finditer(data):
        stream_count += 1
        obj_num = match.group("num").decode("ascii")
        meta = match.group("dict")
        stream = clean_stream(match.group("data"))

        if b"/Subtype" in meta and b"/Image" in meta and b"/DCTDecode" in meta:
            target = args.out / f"pdf-image-{image_index:03d}-obj-{obj_num}.jpg"
            target.write_bytes(stream)
            image_index += 1

        decoded = decode_flate(stream) if b"/FlateDecode" in meta else None
        if decoded:
            text_lines.extend(extract_text(decoded))

    text_path = args.out / "extracted-text-raw.txt"
    text_path.write_text("\n".join(text_lines), encoding="utf-8")
    print(f"streams={stream_count}")
    print(f"jpeg_images={image_index - 1}")
    print(f"text_lines={len(text_lines)}")
    print(f"text={text_path}")


if __name__ == "__main__":
    main()
