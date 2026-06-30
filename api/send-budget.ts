import { Resend } from "resend";

type BudgetPayload = {
  nome?: string;
  telefone?: string;
  email?: string;
  servico?: string;
  mensagem?: string;
};

type ApiRequest = {
  method?: string;
  body?: BudgetPayload | string;
};

type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => {
    json: (body: Record<string, unknown>) => void;
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

function sanitize(value: unknown) {
  return String(value ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseBody(body: ApiRequest["body"]): BudgetPayload {
  if (typeof body === "string") {
    return JSON.parse(body) as BudgetPayload;
  }

  return body ?? {};
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).json({});
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo nao permitido." });
  }

  if (!process.env.RESEND_API_KEY || !process.env.TO_EMAIL) {
    return res.status(500).json({ error: "Envio de e-mail nao configurado." });
  }

  let body: BudgetPayload;
  try {
    body = parseBody(req.body);
  } catch {
    return res.status(400).json({ error: "Pedido invalido." });
  }

  const nome = sanitize(body.nome);
  const telefone = sanitize(body.telefone);
  const email = sanitize(body.email);
  const servico = sanitize(body.servico);
  const mensagem = sanitize(body.mensagem);

  if (!nome || !telefone || !email || !mensagem) {
    return res.status(400).json({ error: "Preencha os campos obrigatorios." });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6">
      <h2 style="margin:0 0 16px">Novo pedido de orcamento</h2>
      <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Servico:</strong> ${escapeHtml(servico)}</p>
      <p><strong>Mensagem:</strong></p>
      <div style="padding:14px;background:#f3f4f6;border-left:4px solid #6d28d9">
        ${escapeHtml(mensagem).replace(/\n/g, "<br />")}
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? "Loco Tracos <onboarding@resend.dev>",
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Novo pedido de orcamento - ${servico || nome}`,
      html,
      text: [
        "Novo pedido de orcamento",
        `Nome: ${nome}`,
        `Telefone: ${telefone}`,
        `E-mail: ${email}`,
        `Servico: ${servico}`,
        `Mensagem: ${mensagem}`,
      ].join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(502).json({ error: "Nao foi possivel enviar o e-mail." });
  }
}
