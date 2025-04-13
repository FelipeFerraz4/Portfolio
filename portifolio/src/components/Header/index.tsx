import { Globe, Moon, Sun } from "lucide-react";
import { Language, translations } from "../../i18n/translations";

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
          aria-label="Select language"
          className={`bg-transparent border rounded px-2 py-1 ${darkMode ? 'text-white' : 'text-black'} focus:outline-none`}
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
        >
          {Object.entries(translations[language].languageNames).map(([key, name]) => (
            <option 
              key={key} 
              value={key} 
              className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
            >
              {name}
            </option>
          ))}
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
