export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    videoUrl: string;
    skills: string[];
    date: string;
    githubUrl: string;
  }
  
  export interface Skill {
    name: string;
    projectCount: number;
    auxSkills: boolean;
  }

  const skills = [
    { name: 'Node.js', projectCount: 1, auxSkills: false },
    { name: 'Python', projectCount: 1, auxSkills: false },
    { name: 'Java', projectCount: 1, auxSkills: false },
    { name: 'C++', projectCount: 0, auxSkills: false },
    { name: 'C', projectCount: 0, auxSkills: false },
    { name: 'MySQL', projectCount: 0, auxSkills: false },
    { name: 'PostgreSQL', projectCount: 0, auxSkills: false },
    { name: 'MongoDB', projectCount: 1, auxSkills: false },
    { name: 'Express', projectCount: 1, auxSkills: false },
    { name: 'Spring Boot', projectCount: 0, auxSkills: false },
    { name: 'TypeScript', projectCount: 0, auxSkills: false },
    { name: 'Postman', projectCount: 1, auxSkills: true },
    { name: 'HTML', projectCount: 0, auxSkills: false },
    { name: 'CSS', projectCount: 1, auxSkills: false },
    { name: 'JavaFX', projectCount: 0, auxSkills: true },
    { name: 'Swing', projectCount: 0, auxSkills: true },
    { name: 'JavaScript', projectCount: 1, auxSkills: false },
    { name: 'React', projectCount: 1, auxSkills: false },
    { name: 'React Native', projectCount: 0, auxSkills: false },
    { name: 'Docker', projectCount: 0, auxSkills: false },
    { name: 'Assembly', projectCount: 0, auxSkills: false },
    { name: 'Git e GitHub', projectCount: 3, auxSkills: true },
    { name: 'Git and GitHub', projectCount: 3, auxSkills: true },
    { name: 'Git y GitHub', projectCount: 3, auxSkills: true },
    { name: 'Tailwind CSS', projectCount: 0, auxSkills: true },
    { name: 'Bootstrap', projectCount: 1, auxSkills: true },
    { name: 'Arduino', projectCount: 0, auxSkills: true },
    { name: 'Pygame', projectCount: 1, auxSkills: true },
    { name: 'Arquitetura em Camadas', projectCount: 1, auxSkills: true },
    { name: 'Layered Architecture', projectCount: 1, auxSkills: true },
    { name: 'Arquitectura en Capas', projectCount: 1, auxSkills: true },
    { name: 'Arquitetura MVC', projectCount: 1, auxSkills: true },
    { name: 'MVC Architecture', projectCount: 1, auxSkills: true },
    { name: 'Arquitectura MVC', projectCount: 1, auxSkills: true },
    { name: 'Padrão Fachada', projectCount: 1, auxSkills: true },
    { name: 'Facade Pattern', projectCount: 1, auxSkills: true },
    { name: 'Patrón Fachada', projectCount: 1, auxSkills: true },
    { name: 'API REST', projectCount: 1, auxSkills: true },
    { name: 'REST API', projectCount: 1, auxSkills: true },
    { name: 'API RESTful', projectCount: 0, auxSkills: true },
    { name: 'RESTful API', projectCount: 0, auxSkills: true },
  ];
  

  const data = {
    pt: {
      skills: skills,
      projects: [
        {
          id: '1',
          title: 'WorkHub',
          description: 'Sistema de gerenciamento de tarefas para equipes, com foco em produtividade e visualização de dados.',
          image: '/src/assets/images/workhub.png',
          videoUrl: '/src/assets/videos/workhub.mp4',
          skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Postman', 'JavaScript', 'Git e GitHub', 'Bootstrap', 'CSS', 'Arquitetura MVC', 'API REST'],
          date: '2025-04-23',
          githubUrl: 'https://github.com/FelipeFerraz4/task-management-system',
        },
        {
          id: '2',
          title: 'Defesa da Via Láctea',
          description: 'Defesa da Via Láctea é um jogo onde você é um piloto da frota de defesa terrestre, encarregado de proteger a órbita da Terra contra forças inimigas misteriosas.',
          image: '/src/assets/images/milky-way-defense.jpg',
          videoUrl: '/src/assets/videos/milky-way-defense.mp4',
          skills: ['Python', 'Pygame', 'Git e GitHub'],
          date: '2025-04-07',
          githubUrl: 'https://github.com/FelipeFerraz4/milky-way-defense',
        },
        {
          id: '3',
          title: 'Sistema de Pousadas',
          description: 'Sistema para gerenciar clientes, reservas e gastos de pousadas com facilidade e organização.',
          image: '/src/assets/images/pousadas.jpg',
          videoUrl: '/src/assets/videos/pousadas.mp4',
          skills: ['Java', 'Git e GitHub', 'Arquitetura em Camadas', 'Padrão Fachada'],
          date: '2023-03-28',
          githubUrl: 'https://github.com/FelipeFerraz4/Projeto-pousada',
        },
        // {
        //   id: '3',
        //   title: 'Jogo Genius com Arduino',
        //   description: 'Jogo estilo Genius com LEDs, botões, buzzer e modo secreto musical. Inclui display de 7 segmentos para pontuação.',
        //   image: '/images/genius.jpg',
        //   videoUrl: '/videos/genius.mp4',
        //   skills: ['Arduino'],
        //   date: '2025-04-07',
        // },
        // {
        //   id: '4',
        //   title: 'Paint com OpenGL',
        //   description: 'Editor gráfico simples com OpenGL em C++, com suporte a criação, transformação e seleção de formas.',
        //   image: '/images/paint.jpg',
        //   videoUrl: '/videos/paint.mp4',
        //   skills: ['C++'],
        //   date: '2025-03-30',
        // },
        // {
        //   id: '5',
        //   title: 'Blockchain com Node.js',
        //   description: 'Implementação de uma blockchain do zero utilizando Node.js, com funcionalidades básicas e verificação de integridade.',
        //   image: '/images/blockchain.jpg',
        //   videoUrl: '/videos/blockchain.mp4',
        //   skills: ['Node.js'],
        //   date: '2024-11-01',
        // },
        // {
        //   id: '6',
        //   title: 'Portfólio Pessoal com React',
        //   description: 'Novo portfólio multilíngue com suporte a modo claro/escuro, desenvolvido em React, TypeScript e Tailwind CSS.',
        //   image: '/images/portfolio.jpg',
        //   videoUrl: '/videos/portfolio.mp4',
        //   skills: ['React', 'Tailwind CSS'],
        //   date: '2025-04-15',
        // },
      ],
    },
    en: {
      skills: skills,
      projects: [
        {
          id: '1',
          title: 'WorkHub',
          description: 'Task management system for teams, focusing on productivity and data visualization.',
          image: '/src/assets/images/workhub.png',
          videoUrl: '/src/assets/videos/workhub.mp4',
          skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Postman', 'JavaScript', 'Git and GitHub', 'Bootstrap', 'CSS', 'MVC Architecture', 'REST API'],
          date: '2025-04-10',
          githubUrl: 'https://github.com/FelipeFerraz4/task-management-system',
        },
        {
          id: '2',
          title: 'Milky Way Defense',
          description: 'Milky Way Defense is a game where you are a pilot from Earth’s defense fleet, tasked with protecting Earth’s orbit from mysterious enemy forces.',
          image: '/src/assets/images/milky-way-defense.jpg',
          videoUrl: '/src/assets/videos/milky-way-defense.mp4',
          skills: ['Python', 'Pygame', 'Git and GitHub'],
          date: '2025-04-07',
          githubUrl: 'https://github.com/FelipeFerraz4/milky-way-defense',
        },
        {
          id: '3',
          title: 'Inn Management System',
          description: 'System to manage guests, bookings, and expenses for inns with ease and organization.',
          image: '/src/assets/images/pousadas.jpg',
          videoUrl: '/src/assets/videos/pousadas.mp4',
          skills: ['Java', 'Git and GitHub', 'Layered Architecture', 'Facade Pattern'],
          date: '2023-03-28',
          githubUrl: 'https://github.com/FelipeFerraz4/Projeto-pousada',
        },
        // {
        //   id: '3',
        //   title: 'Genius Game with Arduino',
        //   description: 'Memory game with LEDs, buttons, buzzer, and hidden musical mode. Includes a 7-segment display for score.',
        //   image: '/images/genius.jpg',
        //   videoUrl: '/videos/genius.mp4',
        //   skills: ['Arduino'],
        //   date: '2025-04-07',
        // },
        // {
        //   id: '4',
        //   title: 'Simple Paint with OpenGL',
        //   description: 'Basic paint editor with OpenGL in C++, supporting shape creation, transformation, and selection.',
        //   image: '/images/paint.jpg',
        //   videoUrl: '/videos/paint.mp4',
        //   skills: ['C++'],
        //   date: '2025-03-30',
        // },
        // {
        //   id: '5',
        //   title: 'Blockchain in Node.js',
        //   description: 'Basic blockchain built from scratch in Node.js with block creation, linking, and integrity verification.',
        //   image: '/images/blockchain.jpg',
        //   videoUrl: '/videos/blockchain.mp4',
        //   skills: ['Node.js'],
        //   date: '2024-11-01',
        // },
        // {
        //   id: '6',
        //   title: 'Personal Portfolio with React',
        //   description: 'Multilingual portfolio with dark/light mode, built with React, TypeScript, and Tailwind CSS.',
        //   image: '/images/portfolio.jpg',
        //   videoUrl: '/videos/portfolio.mp4',
        //   skills: ['React', 'Tailwind CSS'],
        //   date: '2025-04-15',
        // },
      ],
    },
    es: {
      skills: skills,
      projects: [
        {
          id: '1',
          title: 'WorkHub',
          description: 'Sistema de gestión de tareas para equipos, centrado en la productividad y la visualización de datos.',
          image: '/src/assets/images/workhub.png',
          videoUrl: '/src/assets/videos/workhub.mp4',
          skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Postman', 'JavaScript', 'Git y GitHub', 'Bootstrap', 'CSS', 'Arquitectura MVC', 'API REST'],
          date: '2025-04-10',
          githubUrl: 'https://github.com/FelipeFerraz4/task-management-system',
        },
        {
          id: '2',
          title: 'Defensa de la Vía Láctea',
          description: 'Defensa de la Vía Láctea es un juego en el que eres un piloto de la flota de defensa terrestre, encargado de proteger la órbita de la Tierra contra fuerzas enemigas misteriosas.',
          image: '/src/assets/images/milky-way-defense.jpg',
          videoUrl: '/src/assets/videos/milky-way-defense.mp4',
          skills: ['Python', 'Pygame', 'Git y GitHub'],
          date: '2025-04-07',
          githubUrl: 'https://github.com/FelipeFerraz4/milky-way-defense',
        },
        {
          id: '3',
          title: 'Sistema de Pousadas',
          description: 'Sistema para gestionar clientes, reservas y gastos de posadas con facilidad y organización.',
          image: '/src/assets/images/pousadas.jpg',
          videoUrl: '/src/assets/videos/pousadas.mp4',
          skills: ['Java', 'Git y GitHub', 'Arquitectura en Capas', 'Patrón Fachada'],
          date: '2023-03-28',
          githubUrl: 'https://github.com/FelipeFerraz4/Projeto-pousada',
        },
        // {
        //   id: '3',
        //   title: 'Juego Genius con Arduino',
        //   description: 'Juego de memoria con LEDs, botones, zumbador y modo musical secreto. Incluye display de 7 segmentos.',
        //   image: '/images/genius.jpg',
        //   videoUrl: '/videos/genius.mp4',
        //   skills: ['Arduino'],
        //   date: '2025-04-07',
        // },
        // {
        //   id: '4',
        //   title: 'Paint con OpenGL',
        //   description: 'Editor gráfico simple con OpenGL en C++, con soporte para crear, transformar y seleccionar formas.',
        //   image: '/images/paint.jpg',
        //   videoUrl: '/videos/paint.mp4',
        //   skills: ['C++'],
        //   date: '2025-03-30',
        // },
        // {
        //   id: '5',
        //   title: 'Blockchain con Node.js',
        //   description: 'Implementación básica de blockchain desde cero usando Node.js, con verificación de integridad.',
        //   image: '/images/blockchain.jpg',
        //   videoUrl: '/videos/blockchain.mp4',
        //   skills: ['Node.js'],
        //   date: '2024-11-01',
        // },
        // {
        //   id: '6',
        //   title: 'Portafolio Personal con React',
        //   description: 'Portafolio multilingüe con modo claro/oscuro, hecho con React, TypeScript y Tailwind CSS.',
        //   image: '/images/portfolio.jpg',
        //   videoUrl: '/videos/portfolio.mp4',
        //   skills: ['React', 'Tailwind CSS'],
        //   date: '2025-04-15',
        // },
      ],
    },
  };
  
  
  export const getSkillsByLanguage = (lang: string): Skill[] => {
    const skills = data[lang as keyof typeof data]?.skills || data.pt.skills;
    return skills.filter(skill => !skill.auxSkills && skill.projectCount > 0);
  };
  
  
  export const getProjectsByLanguage = (lang: string): Project[] => {
    return data[lang as keyof typeof data]?.projects || data.pt.projects;
  };
  