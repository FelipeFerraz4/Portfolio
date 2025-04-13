import { useState } from "react";
import { Footer } from '../../components/Footer';
import { Header } from "../../components/Header";
import { Language, translations } from "../../i18n/translations";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>("pt");

  const t = translations[language];

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />

      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold mb-2">
          {t.greeting} <span className="text-blue-500">Blue Fox</span>
        </h1>
        <p className="text-xl mb-4">{t.job}</p>
        <p className="max-w-xl mx-auto">{t.intro}</p>
      </main>

      <Footer language={language} />
    </div>
  );
}
