import { Globe, Moon, Sun } from "lucide-react";
import { Language } from "../../i18n/translations";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Header({ darkMode, setDarkMode, language, setLanguage }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4 shadow">
      <div className="flex items-center gap-2">
        <Globe />
        <select
          className="bg-transparent border rounded px-2 py-1"
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-1 px-3 py-1 border rounded"
      >
        {darkMode ? <Sun /> : <Moon />} {darkMode ? "Light" : "Dark"}
      </button>
    </header>
  );
}
