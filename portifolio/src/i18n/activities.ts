type Language = "en" | "pt" | "es";

export interface Activity {
  id: string;
  title: string;
  description: string;
  details: string;
  stats: string;
  language: Array<string>;
  link?: string;
  imageLink: string;
  data: string;
}

export const activities: Record<Language, Activity[]> = {
  en: [
    {
      id: "1",
      title: "Beecrowd",
      data: "2025-05-20",
      description:
        "Platform for algorithm training and programming challenges.",
      details:
        "Solved over 635 challenges focused on algorithms and data structures, mainly using Python and C++.",
      stats: "638 Solved Algorithms",
      language: ["Python", "C++"],
      link: "https://github.com/FelipeFerraz4/Beecrowd",
      imageLink: "/assets/images/beecrowd.webp",
    },
    {
      id: "2",
      title: "LeetCode",
      data: "2025-05-20",
      description:
        "Platform to improve technical skills and prepare for coding interviews.",
      details:
        "Solved logical, algorithmic, and data structure problems using JavaScript.",
      stats: "10 solved algorithms",
      language: ["JavaScript"],
      link: "https://github.com/FelipeFerraz4/LeetCode",
      imageLink: "/assets/images/LeetCode.webp",
    },
    {
      id: "3",
      title: "Calang.io",
      data: "2025-05-20",
      description:
        "Junior software company from UFCA’s Computer Science course.",
      details:
        "Currently serving as Project Advisor. Previously held the roles of President and Administrative Director, leading software teams and project development.",
      stats: "Current Role: Project Advisor",
      language: ["Node.js", "Java"],
      link: "https://www.instagram.com/calang.io_ej/",
      imageLink: "/assets/images/calangio.webp",
    },
    {
      id: "4",
      title: "LACCA",
      data: "2025-05-25",
      description:
        "Academic League of Competitive Programming and Algorithms focused on algorithm studies and competitive programming.",
      details:
        "Active participation in study groups, problem-solving sessions, and organization of academic events.",
      stats: "Role: Member",
      language: ["Python", "C++"],
      link: "https://www.instagram.com/lacca_ufca/",
      imageLink: "/assets/images/lacca.webp",
    },
  ],
  pt: [
    {
      id: "1",
      title: "Beecrowd",
      data: "2025-05-20",
      description:
        "Plataforma para treinar algoritmos e desafios de programação.",
      details:
        "Resolvi mais de 635 desafios, com foco em algoritmos e estruturas de dados. Utilizei principalmente Python e C++.",
      stats: "638 Algoritmos resolvidos",
      language: ["Python", "C++"],
      link: "https://github.com/FelipeFerraz4/Beecrowd",
      imageLink: "/assets/images/beecrowd.webp",
    },
    {
      id: "2",
      title: "LeetCode",
      data: "2025-05-20",
      description:
        "Plataforma para aprimorar habilidades técnicas e se preparar para entrevistas técnicas.",
      details:
        "Resolvi problemas de lógica, algoritmos e estrutura de dados usando JavaScript.",
      stats: "10 algoritmos resolvidos",
      language: ["JavaScript"],
      link: "https://github.com/FelipeFerraz4/LeetCode",
      imageLink: "/assets/images/LeetCode.webp",
    },
    {
      id: "3",
      title: "Calang.io",
      data: "2025-05-20",
      description: "Empresa júnior do curso de Ciência da Computação da UFCA.",
      details:
        "Atualmente atuo como Conselheiro de Projetos. Já fui Diretor Presidente e Diretor Administrativo, liderando equipes e conduzindo projetos de software.",
      stats: "Cargo atual: Conselheiro de Projetos",
      language: ["Node.js", "Java"],
      link: "https://www.instagram.com/calang.io_ej/",
      imageLink: "/assets/images/calangio.webp",
    },
    {
      id: "4",
      title: "LACCA",
      data: "2025-05-25",
      description:
        "Liga Acadêmica de Computação Competitiva e Algoritmos voltada ao estudo de algoritmos e programação competitiva.",
      details:
        "Atuação como membro ativo em grupos de estudo, resoluções de problemas e organização de eventos acadêmicos.",
      stats: "Cargo: Membro",
      language: ["Python", "C++"],
      link: "https://www.instagram.com/lacca_ufca/",
      imageLink: "/assets/images/lacca.webp",
    },
  ],
  es: [
    {
      id: "1",
      title: "Beecrowd",
      data: "2025-05-20",
      description:
        "Plataforma para entrenar algoritmos y desafíos de programación.",
      details:
        "Resolví más de 635 desafíos, centrado en algoritmos y estructuras de datos. Usé principalmente Python y C++.",
      stats: "638 algoritmos resueltos",
      language: ["Python", "C++"],
      link: "https://github.com/FelipeFerraz7/Beecrowd",
      imageLink: "/assets/images/beecrowd.webp",
    },
    {
      id: "2",
      title: "LeetCode",
      data: "2025-05-20",
      description:
        "Plataforma para mejorar habilidades técnicas y prepararse para entrevistas.",
      details:
        "Resolví problemas de lógica, algoritmos y estructuras de datos utilizando JavaScript.",
      stats: "10 algoritmos resueltos",
      language: ["JavaScript"],
      link: "https://github.com/FelipeFerraz4/LeetCode",
      imageLink: "/assets/images/LeetCode.webp",
    },
    {
      id: "3",
      title: "Calang.io",
      data: "2025-05-20",
      description:
        "Empresa júnior del curso de Ciencias de la Computación de la UFCA.",
      details:
        "Actualmente actúo como Consejero de Proyectos. Anteriormente fui Director Presidente y Director Administrativo, liderando equipos y proyectos de software.",
      stats: "Cargo actual: Consejero de Proyectos",
      language: ["Node.js", "Java"],
      link: "https://www.instagram.com/calang.io_ej/",
      imageLink: "/assets/images/calangio.webp",
    },
    {
      id: "4",
      title: "LACCA",
      data: "2025-05-25",
      description:
        "Liga Académica de Computación Competitiva y Algoritmos enfocada en el estudio de algoritmos y programación competitiva.",
      details:
        "Participación como miembro activo en grupos de estudio, resolución de problemas y organización de eventos académicos.",
      stats: "Rol: Miembro",
      language: ["Python", "C++"],
      link: "https://www.instagram.com/lacca_ufca/",
      imageLink: "/assets/images/lacca.webp",
    },
  ],
};
