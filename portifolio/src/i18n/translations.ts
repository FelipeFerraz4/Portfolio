export const translations = {
    en: {
      greeting: "Hello, I'm",
      job: "Full-Stack Developer",
      intro: "Welcome to my portfolio. Here you will find my projects, skills, and contact information.",
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
      job: "Desenvolvedor Full-Stack",
      intro: "Bem-vindo ao meu portfólio. Aqui você encontrará meus projetos, habilidades e formas de contato.",
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
      job: "Desarrollador Full-Stack",
      intro: "Bienvenido a mi portafolio. Aquí encontrarás mis proyectos, habilidades e información de contacto.",
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
  