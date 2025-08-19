import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Language, translations } from "../../i18n/translations";

interface AboutMeProps {
  language: Language;
}

export function AboutMe({ language }: AboutMeProps) {
  const t = translations[language];

  return (
    <section id="about" className="py-12 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.aboutMeTitle}</h2>
          <p className="text-md leading-relaxed text-justify whitespace-pre-line">
            {t.aboutMeText}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 lg:w-80 w-full">
          <span className="text-xl font-semibold text-center">{t.socialTitle}</span>

          <div className="grid grid-cols-2 gap-6 w-full text-center">
            <div>
              <a href="https://github.com/FelipeFerraz4" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub className="text-6xl mx-auto hover:text-blue-500 transition" />
                <p className="mt-2 text-sm">GitHub<br />FelipeFerraz4</p>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/felipeferraz4/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin className="text-6xl mx-auto hover:text-blue-600 transition" />
                <p className="mt-2 text-sm">LinkedIn<br />Felipe Ferraz</p>
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/@AlgoritmosSpace" target="_blank" rel="noopener noreferrer" title="YouTube">
                <FaYoutube className="text-6xl mx-auto hover:text-red-500 transition" />
                <p className="mt-2 text-sm">YouTube<br />@AlgoritmosSpace</p>
              </a>
            </div>
            <div>
              <a href="https://algoritmos.space" target="_blank" rel="noopener noreferrer" title="Algoritmos.space">
                <FaGlobe className="text-6xl mx-auto hover:text-yellow-500 transition" />
                <p className="mt-2 text-sm">Algoritmos.space<br />@algoritmos_space</p>
              </a>
            </div>
            <div className="col-span-2">
              <a href="mailto:algoritmos.space@gmail.com" title="Email">
                <FaEnvelope className="text-6xl mx-auto hover:text-green-600 transition" />
                <p className="mt-2 text-sm">Email<br />algoritmos.space@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
