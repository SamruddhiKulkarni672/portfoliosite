import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNightMode } from "../components/useNightMode";

interface MenuItem {
  name: string;
  id: string;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { isNightMode } = useNightMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections: string[] = ["home", "skills", "about", "projects", "contact"];

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  const menuItems: MenuItem[] = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const iconColor = isNightMode ? 'white' : 'rgb(17, 24, 39)';

  return (
    <nav
      className={`flex justify-between items-center px-8 py-5 sticky top-0 z-50 transition-all duration-500 ${
        isNightMode 
          ? "bg-[#653bb1] text-white" 
          : "bg-[#FFD24D] text-gray-900"
      } ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className={`text-2xl font-bold transition-colors duration-500 ${
        isNightMode ? "text-white" : "text-gray-900"
      }`}>
        Samruddhi Kulkarni
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
              activeSection === item.id
                ? isNightMode
                  ? "text-white underline underline-offset-4 font-bold"
                  : "text-black underline underline-offset-4 font-bold"
                : isNightMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-800 hover:text-gray-900"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <X 
            className="w-7 h-7 transition-colors duration-500" 
            style={{ color: iconColor }}
            onClick={() => setMenuOpen(false)} 
          />
        ) : (
          <Menu 
            className="w-7 h-7 transition-colors duration-500" 
            style={{ color: iconColor }}
            onClick={() => setMenuOpen(true)} 
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-4 shadow-md md:hidden transition-colors duration-500 ${
          isNightMode ? "bg-gray-900" : "bg-[#FFD24D]"
        }`}>
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
                activeSection === item.id
                  ? isNightMode
                    ? "text-white underline font-bold"
                    : "text-black underline font-bold"
                  : isNightMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-800 hover:text-gray-900"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}