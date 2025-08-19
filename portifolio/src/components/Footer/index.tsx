import { Github, Globe, LinkedinIcon, Mail, Youtube } from "lucide-react";
import { Language, translations } from "../../i18n/translations";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const t = translations[language].footerTexts;

  return (
    <footer className="text-center text-sm py-6 border-t mt-8 px-4">
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://github.com/FelipeFerraz4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/felipeferraz4/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition"
        >
          <LinkedinIcon size={20} />
        </a>
        <a
          href="mailto:algoritmos.space@gmail.com"
          className="hover:opacity-75 transition"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://www.youtube.com/@AlgoritmosSpace"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition"
        >
          <Youtube size={20} />
        </a>
        <a
          href="https://algoritmos.space"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition"
        >
          <Globe size={20} />
        </a>
      </div>
      <p className="mb-1">{t.mentions}</p>
      <p>{t.copyright}</p>
    </footer>
  );
}
