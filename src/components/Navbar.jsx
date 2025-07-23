import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Fixed: should be scrollY, not screenY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/50 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black/60 items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
        <a
          className="flex items-center text-xl font-bold text-primary"
          href="#home"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Shanuka</span> Lakshan
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden space-x-8 md:flex">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="transition-colors duration-300 text-foreground/80 hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="z-50 p-2 md:hidden text-foreground"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile nav */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
