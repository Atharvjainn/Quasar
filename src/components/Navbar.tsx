import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (href: string) => {
    // If it's an in-page hash like '#about'
    if (href.startsWith("#")) {
      // If we're not on the home page, navigate there first, then scroll
      if (location.pathname !== "/") {
        navigate("/");
        // give router a tick to render the home sections
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/")) {
      // route navigation
      navigate(href);
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16 md:h-20 ">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl md:text-2xl font-bold flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/logo.png" alt="Quasar x AI" className="w-15 h-12 md:w-15 md:h-20" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isAbout = link.href === "#about";
              const isOnPS = location.pathname.startsWith("/problem-statements");
              const target = isAbout && isOnPS ? "/" : link.href;
              const label = isAbout && isOnPS ? "Home" : link.label;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(target)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {label}
                </button>
              );
            })}
            {!location.pathname.startsWith("/problem-statements") && (
              <NavLink to="/problem-statements" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Problem Statements
              </NavLink>
            )}
            <Button
              onClick={() => window.open("https://unstop.com/o/gyGNF78?utm_medium=Share&utm_source=houseofg77083&utm_campaign=Online_coding_challenge", "_blank")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-border"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass rounded-lg mt-2 p-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isAbout = link.href === "#about";
                const isOnPS = location.pathname.startsWith("/problem-statements");
                const target = isAbout && isOnPS ? "/" : link.href;
                const label = isAbout && isOnPS ? "Home" : link.label;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(target)}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
                  >
                    {label}
                  </button>
                );
              })}
              {!location.pathname.startsWith("/problem-statements") && (
                <NavLink to="/problem-statements" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2">
                  Problem Statements
                </NavLink>
              )}
              <Button
                onClick={() => window.open("https://unstop.com/o/gyGNF78?utm_medium=Share&utm_source=houseofg77083&utm_campaign=Online_coding_challenge", "_blank")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
