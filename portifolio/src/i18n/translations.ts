export const translations = {
  en: {
    greeting: "Hello, I'm",
    job: "Back-End Developer",
    intro: "Welcome to my portfolio. Here you will find my projects, skills, and contact information.",
    aboutMeTitle: "About Me",
    socialTitle: "My social links",
    aboutMeText: `I’m a Computer Science student at UFCA, focused on backend development with Java and Node.js, and increasingly interested in Data Engineering. I have experience with technologies like Spring Boot, Express, Postman, React.js, PostgreSQL, MongoDB, and Git.

I’ve worked on blockchain projects during the Compass UOL training program and contributed to the restructuring of my university’s junior company, Calang.io. I'm also a founding member of LACCA, where we prepare teams for programming competitions. Recently, I earned the AWS Cloud Practitioner certification and aim to build robust and innovative software solutions.`,
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    seeMore: "See more",
    footerTexts: {
      copyright: "© 2025 Blue Fox. All rights reserved.",
      mentions: "Creator of the channel Programador na Prática and the site algoritmos.space.",
    },
    languageNames: {
      pt: "Portuguese",
      en: "English",
      es: "Spanish",
    },
  },
  pt: {
    greeting: "Olá, eu sou",
    job: "Desenvolvedor Back-End",
    intro: "Bem-vindo ao meu portfólio. Aqui você encontrará meus projetos, habilidades e formas de contato.",
    aboutMeTitle: "Sobre Mim",
    socialTitle: "Minhas redes",
    aboutMeText: `Sou estudante de Ciência da Computação na UFCA, com foco em desenvolvimento backend utilizando Java e Node.js, e com interesse crescente em Engenharia de Dados. Tenho experiência com tecnologias como Spring Boot, Express, Postman, React.js, PostgreSQL, MongoDB e Git.

Trabalhei em projetos de blockchain durante o programa de formação da Compass UOL e atuei na reestruturação da empresa júnior da universidade, a Calang.io. Também sou membro fundador da LACCA, onde preparamos equipes para competições de programação. Recentemente, conquistei a certificação AWS Cloud Practitioner e busco desenvolver soluções de software robustas e inovadoras.`,
    skillsTitle: "Habilidades",
    projectsTitle: "Projetos",
    seeMore: "Ver mais",
    footerTexts: {
      copyright: "© 2025 Blue Fox. Todos os direitos reservados.",
      mentions: "Criador do canal Programador na Prática e do site algoritmos.space.",
    },
    languageNames: {
      pt: "Português",
      en: "Inglês",
      es: "Espanhol",
    },
  },
  es: {
    greeting: "Hola, soy",
    job: "Desarrollador Back-End",
    intro: "Bienvenido a mi portafolio. Aquí encontrarás mis proyectos, habilidades e información de contacto.",
    aboutMeTitle: "Sobre Mí",
    socialTitle: "Mis redes",
    aboutMeText: `Soy estudiante de Ciencias de la Computación en la UFCA, enfocado en el desarrollo backend con Java y Node.js, y con un interés creciente en Ingeniería de Datos. Tengo experiencia con tecnologías como Spring Boot, Express, Postman, React.js, PostgreSQL, MongoDB y Git.

Participé en proyectos de blockchain durante el programa de formación de Compass UOL y contribuí en la reestructuración de la empresa júnior de mi universidad, Calang.io. También soy miembro fundador de LACCA, donde preparamos equipos para competiciones de programación. Recientemente obtuve la certificación AWS Cloud Practitioner y busco crear soluciones de software robustas e innovadoras.`,
    skillsTitle: "Habilidades",
    projectsTitle: "Proyectos",
    seeMore: "Ver más",
    footerTexts: {
      copyright: "© 2025 Blue Fox. Todos los derechos reservados.",
      mentions: "Creador del canal Programador na Prática y del sitio algoritmos.space.",
    },
    languageNames: {
      pt: "Portugués",
      en: "Inglés",
      es: "Español",
    },
  },
};

export type Language = keyof typeof translations;
