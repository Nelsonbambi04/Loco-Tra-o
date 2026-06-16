import { NavProvider, useNav } from "@/lib/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Services } from "@/pages/Services";
import { Portfolio } from "@/pages/Portfolio";
import { Contact } from "@/pages/Contact";

function CurrentPage() {
  const { page } = useNav();
  switch (page) {
    case "about":
      return <About />;
    case "services":
      return <Services />;
    case "portfolio":
      return <Portfolio />;
    case "contact":
      return <Contact />;
    case "home":
    default:
      return <Home />;
  }
}

export default function App() {
  return (
    <NavProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <CurrentPage />
        </main>
        <Footer />
      </div>
    </NavProvider>
  );
}
