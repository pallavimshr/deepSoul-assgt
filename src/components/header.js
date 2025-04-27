import { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { Sun, Moon, Menu, X } from "lucide-react";


const navItems = ["Features", "Therapy", "Self Help", "Community", "Resources"];

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 px-4 sm:px-8 md:px-12 lg:px-64 py-4 border-b border-gray-200 flex items-center justify-between transition-colors duration-300">

      
      
      <h1 className=" font-semibold flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-2xl">
      <img src="/images/deepsoul.png" alt="DeepSoul Logo" className="w-8 h-8 rounded-full" />
      DeepSoul</h1>

      
      <div className="flex items-center gap-6 ml-auto">
        
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-300 text-gray-500 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:block text-gray-900 dark:text-white px-2.5 py-2 border-2 rounded-2xl border-blue-500 dark:border-white transition-all duration-300"
        >
          {darkMode ? (
            <Sun size={20} stroke="white" />
          ) : (
            <Moon size={20} stroke="black" />
          )}
        </button>

        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="block md:hidden"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md mt-2 rounded-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-3">
            {navItems.map((item, index) => (
              <li key={index} className="text-gray-900 dark:text-white hover:text-blue-500">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
