import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PageId = "home" | "about" | "services" | "portfolio" | "contact";

export const PAGES: PageId[] = [
  "home",
  "about",
  "services",
  "portfolio",
  "contact",
];

const SITE_TITLE = "Loco Tracos | Arquitetura, Engenharia e Construcao em Angola";

function hashToPage(): PageId {
  if (typeof window === "undefined") return "home";
  const raw = window.location.hash.replace(/^#\/?/, "").trim();
  return (PAGES as string[]).includes(raw) ? (raw as PageId) : "home";
}

type NavContextValue = {
  page: PageId;
  navigate: (page: PageId) => void;
};

const NavContext = createContext<NavContextValue>({
  page: "home",
  navigate: () => {},
});

export function NavProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<PageId>(() => hashToPage());

  useEffect(() => {
    const onHashChange = () => {
      const next = hashToPage();
      setPage(next);
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.title = SITE_TITLE;
  }, [page]);

  const navigate = useCallback((next: PageId) => {
    if (next === hashToPage()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = "#/" + next;
  }, []);

  const value = useMemo(() => ({ page, navigate }), [page, navigate]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  return useContext(NavContext);
}
