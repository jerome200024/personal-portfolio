import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 ${isScrolled ? 'glass-strong py-2' : 'bg-transparent py-3'} z-50 transition-all duration-300`}>
      <nav className="container mx-auto px-6 flex items-center justify-between ">
        <a href="home" className="text-xl font-bold tracking-tight hover:text-primary">
          Jerome<span>.</span>
        </a>

        {/*Desktop Menu*/}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-3 py-1 rounded-full text-muted-foreground font-bold hover:bg-surface transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/*Button*/}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>
        {/*Mobile Menu Button*/}

        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/*Mobile Menu*/}
      {isMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in ">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-3 py-1 rounded-full text-muted-foreground font-medium hover:bg-surface transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
