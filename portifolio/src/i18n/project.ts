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
    { name: 'Java', projectCount: 3, auxSkills: false },
    { name: 'C++', projectCount: 0, auxSkills: false },
    { name: 'C', projectCount: 1, auxSkills: false },
    { name: 'MySQL', projectCount: 0, auxSkills: false },
    { name: 'PostgreSQL', projectCount: 0, auxSkills: false },
    { name: 'MongoDB', projectCount: 1, auxSkills: false },
    { name: 'Express', projectCount: 1, auxSkills: false },
    { name: 'Spring Boot', projectCount: 1, auxSkills: false },
    { name: 'TypeScript', projectCount: 1, auxSkills: false },
    { name: 'Postman', projectCount: 1, auxSkills: true },
    { name: 'HTML', projectCount: 0, auxSkills: false },
    { name: 'CSS', projectCount: 1, auxSkills: false },
    { name: 'JavaFX', projectCount: 0, auxSkills: true },
    { name: 'Swing', projectCount: 1, auxSkills: true },
    { name: 'JavaScript', projectCount: 1, auxSkills: false },
    { name: 'React', projectCount: 2, auxSkills: false },
    { name: 'React Native', projectCount: 0, auxSkills: false },
    { name: 'Docker', projectCount: 0, auxSkills: false },
    { name: 'Assembly', projectCount: 0, auxSkills: false },
    { name: 'Git e GitHub', projectCount: 6, auxSkills: true },
    { name: 'Git and GitHub', projectCount: 6, auxSkills: true },
    { name: 'Git y GitHub', projectCount: 6, auxSkills: true },
    { name: 'Tailwind CSS', projectCount: 1, auxSkills: false },
    { name: 'Bootstrap', projectCount: 1, auxSkills: true },
    { name: 'Arduino', projectCount: 0, auxSkills: true },
    { name: 'Pygame', projectCount: 1, auxSkills: true },
    { name: 'Arquitetura em Camadas', projectCount: 3, auxSkills: true },
    { name: 'Layered Architecture', projectCount: 3, auxSkills: true },
    { name: 'Arquitectura en Capas', projectCount: 3, auxSkills: true },
    { name: 'Arquitetura MVC', projectCount: 3, auxSkills: true },
    { name: 'MVC Architecture', projectCount: 3, auxSkills: true },
    { name: 'Arquitectura MVC', projectCount: 3, auxSkills: true },
    { name: 'Padrão Fachada', projectCount: 1, auxSkills: true },
    { name: 'Facade Pattern', projectCount: 1, auxSkills: true },
    { name: 'Patrón Fachada', projectCount: 1, auxSkills: true },
    { name: 'API REST', projectCount: 2, auxSkills: true },
    { name: 'REST API', projectCount: 2, auxSkills: true },
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
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/workhub2-1.webp',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/workhub.mp4',
          skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Postman', 'JavaScript', 'Git e GitHub', 'Bootstrap', 'CSS', 'Arquitetura MVC', 'API REST'],
          date: '2025-04-23',
          githubUrl: 'https://github.com/FelipeFerraz4/task-management-system',
        },
        {
          id: '2',
          title: 'Defesa da Via Láctea',
          description: 'Defesa da Via Láctea é um jogo onde você é um piloto da frota de defesa terrestre, encarregado de proteger a órbita da Terra contra forças inimigas misteriosas.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/milky-way-defense.webp',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/milky-way-defense.mp4',
          skills: ['Python', 'Pygame', 'Git e GitHub'],
          date: '2025-04-07',
          githubUrl: 'https://github.com/FelipeFerraz4/milky-way-defense',
        },
        {
          id: '3',
          title: 'Sistema de Pousadas',
          description: 'Sistema para gerenciar clientes, reservas e gastos de pousadas com facilidade e organização.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/pousadas.jpg',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/pousadas.mp4',
          skills: ['Java', 'Git e GitHub', 'Arquitetura em Camadas', 'Padrão Fachada'],
          date: '2023-03-28',
          githubUrl: 'https://github.com/FelipeFerraz4/Projeto-pousada',
        },
        {
          id: '4',
          title: 'Jogo dos 5 Símbolos',
          description: 'Jogo de estratégia para dois jogadores. Vença ao alinhar 5 símbolos ou bloquear o movimento do adversário.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/Jogo-dos-5-simbolos.png',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/jogo-dos-5-simbolos.mp4',
          skills: ['C', 'Git e GitHub'],
          date: '2022-10-15',
          githubUrl: 'https://github.com/FelipeFerraz4/Jogo-dos-5-simbolos',
        },
        {
          id: "5",
          title: "Sistema de Supermercado",
          description: "Sistema desktop feito em Java para simular operações de supermercado. Possui interface gráfica com Swing, segue a arquitetura MVC com organização em camadas e repositórios em memória.",
          image: "https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/supermercado.webp",
          videoUrl: "https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/supermercado.webm",
          skills: ["Java", "Swing", "Arquitetura em Camadas", "Arquitetura MVC", "Git e GitHub"],
          date: "2025-05-10",
          githubUrl: "https://github.com/FelipeFerraz4/supermarket-desktop"
        },
        {
          id: '6',
          title: 'Pizzeria',
          description: 'MVP de um sistema de pizzaria que permite o gerenciamento de usuários, pizzas e pedidos por meio de uma API REST desenvolvida em Java com Spring.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/06/Captura-de-tela-2025-06-05-002429.webp',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/06/pizzeria_api.webm',
          skills: ['Java', 'Spring Boot', 'API REST', 'Arquitetura MVC', 'Arquitetura em Camadas', 'Git e GitHub'],
          date: '2025-06-05',
          githubUrl: 'https://github.com/FelipeFerraz4/pizzeria.git'
        },
        {
          id: '7',
          title: 'Portfólio',
          description: 'Meu portfólio pessoal, desenvolvido para apresentar projetos, experiências e habilidades de forma clara e organizada.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/08/Captura-de-tela-2025-08-19-205415.png',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/08/portifolio.mp4',
          skills: ['React', 'Git e GitHub', 'TypeScript', 'Tailwind CSS'],
          date: '2025-08-19',
          githubUrl: 'https://github.com/FelipeFerraz4/Portfolio'
        }
      ],
    },
    en: {
      skills: skills,
      projects: [
        {
          id: '1',
          title: 'WorkHub',
          description: 'Task management system for teams, focusing on productivity and data visualization.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/workhub2-1.webp',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/workhub.mp4',
          skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Postman', 'CScript', 'Git and GitHub', 'Bootstrap', 'CSS', 'MVC Architecture', 'REST API'],
          date: '2025-04-10',
          githubUrl: 'https://github.com/FelipeFerraz4/task-management-system',
        },
        {
          id: '2',
          title: 'Milky Way Defense',
          description: 'Milky Way Defense is a game where you are a pilot from Earth’s defense fleet, tasked with protecting Earth’s orbit from mysterious enemy forces.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/milky-way-defense.webp',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/milky-way-defense.mp4',
          skills: ['Python', 'Pygame', 'Git and GitHub'],
          date: '2025-04-07',
          githubUrl: 'https://github.com/FelipeFerraz4/milky-way-defense',
        },
        {
          id: '3',
          title: 'Inn Management System',
          description: 'System to manage guests, bookings, and expenses for inns with ease and organization.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/pousadas.jpg',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/pousadas.mp4',
          skills: ['C', 'Git and GitHub', 'Layered Architecture', 'Facade Pattern'],
          date: '2023-03-28',
          githubUrl: 'https://github.com/FelipeFerraz4/Projeto-pousada',
        },
        {
          id: '4',
          title: '5 Symbols Game',
          description: 'Strategy game for two players. Win by aligning 5 symbols or blocking the opponent’s moves.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/Jogo-dos-5-simbolos.png',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/jogo-dos-5-simbolos.mp4',
          skills: ['C', 'Git and GitHub'],
          date: '2022-10-15',
          githubUrl: 'https://github.com/FelipeFerraz4/Jogo-dos-5-simbolos',
        },
        {
          id: "5",
          title: "Supermarket System",
          description: "Desktop system built with Java to simulate supermarket operations. Features GUI with Swing and follows MVC architecture with layered organization and in-memory repositories.",
          image: "https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/supermercado.webp",
          videoUrl: "https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/supermercado.webm",
          skills: ["Java", "Swing", "Layered Architecture", "MVC Architecture", "Git and GitHub"],
          date: "2025-05-10",
          githubUrl: "https://github.com/FelipeFerraz4/supermarket-desktop"
        },
        {
          id: '6',
          title: 'Pizzeria',
          description: 'MVP of a pizzeria management system that handles users, pizzas, and orders through a REST API built with Java and Spring.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/06/Captura-de-tela-2025-06-05-002429.webp',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/06/pizzeria_api.webm',
          skills: ['Java', 'Spring Boot', 'REST API', 'MVC Architecture', 'Layered Architecture', 'Git and GitHub'],
          date: '2025-06-05',
          githubUrl: 'https://github.com/FelipeFerraz4/pizzeria.git'
        },
        {
          id: '7',
          title: 'Portfolio',
          description: 'My personal portfolio, developed to showcase projects, experiences, and skills in a clear and organised way.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/08/Captura-de-tela-2025-08-19-205415.png',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/08/portifolio.mp4',
          skills: ['React', 'Git and GitHub', 'TypeScript', 'Tailwind CSS'],
          date: '2025-08-19',
          githubUrl: 'https://github.com/FelipeFerraz4/Portfolio'
        }
      ],
    },
    es: {
      skills: skills,
      projects: [
        {
          id: '1',
          title: 'WorkHub',
          description: 'Sistema de gestión de tareas para equipos, centrado en la productividad y la visualización de datos.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/workhub2-1.webp',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/workhub.mp4',
          skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Postman', 'CScript', 'Git y GitHub', 'Bootstrap', 'CSS', 'Arquitectura MVC', 'API REST'],
          date: '2025-04-10',
          githubUrl: 'https://github.com/FelipeFerraz4/task-management-system',
        },
        {
          id: '2',
          title: 'Defensa de la Vía Láctea',
          description: 'Defensa de la Vía Láctea es un juego en el que eres un piloto de la flota de defensa terrestre, encargado de proteger la órbita de la Tierra contra fuerzas enemigas misteriosas.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/milky-way-defense.webp',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/milky-way-defense.mp4',
          skills: ['Python', 'Pygame', 'Git y GitHub'],
          date: '2025-04-07',
          githubUrl: 'https://github.com/FelipeFerraz4/milky-way-defense',
        },
        {
          id: '3',
          title: 'Sistema de Pousadas',
          description: 'Sistema para gestionar clientes, reservas y gastos de posadas con facilidad y organización.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/pousadas.jpg',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/pousadas.mp4',
          skills: ['C', 'Git y GitHub', 'Arquitectura en Capas', 'Patrón Fachada'],
          date: '2023-03-28',
          githubUrl: 'https://github.com/FelipeFerraz4/Projeto-pousada',
        },
        {
          id: '4',
          title: 'Juego de los 5 Símbolos',
          description: 'Juego de estrategia para dos jugadores. Gana alineando 5 símbolos o bloqueando los movimientos del oponente.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/Jogo-dos-5-simbolos.png',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/04/jogo-dos-5-simbolos.mp4',
          skills: ['C', 'Git y GitHub'],
          date: '2022-10-15',
          githubUrl: 'https://github.com/FelipeFerraz4/Jogo-dos-5-simbolos',
        },
        {
          id: "5",
          title: "Sistema de Supermercado",
          description: "Sistema de escritorio desarrollado en Java para simular operaciones de supermercado. Cuenta con interfaz gráfica con Swing, arquitectura MVC en capas y repositorios en memoria.",
          image: "https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/supermercado.webp",
          videoUrl: "https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/supermercado.webm",
          skills: ["Java", "Swing", "Arquitectura en Capas", "Arquitectura MVC", "Git y GitHub"],
          date: "2025-05-10",
          githubUrl: "https://github.com/FelipeFerraz4/supermarket-desktop"
        },
        {
          id: '6',
          title: 'Pizzería',
          description: 'MVP de un sistema de gestión de pizzería que permite administrar usuarios, pizzas y pedidos mediante una API REST desarrollada en Java con Spring.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/06/Captura-de-tela-2025-06-05-002429.webp',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/06/pizzeria_api.webm',
          skills: ['Java', 'Spring Boot', 'API REST', 'Arquitectura MVC', 'Arquitectura en Capas', 'Git y GitHub'],
          date: '2025-06-05',
          githubUrl: 'https://github.com/FelipeFerraz4/pizzeria.git'
        },
        {
          id: '7',
          title: 'Portafolio',
          description: 'Mi portafolio personal, desarrollado para mostrar proyectos, experiencias y habilidades de manera clara y organizada.',
          image: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/08/Captura-de-tela-2025-08-19-205415.png',
          videoUrl: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/08/portifolio.mp4',
          skills: ['React', 'Git y GitHub', 'TypeScript', 'Tailwind CSS'],
          date: '2025-08-19',
          githubUrl: 'https://github.com/FelipeFerraz4/Portfolio'
        }
      ],
    },
  };
  
  
  export const getSkillsByLanguage = (lang: string): Skill[] => {
    const skills = data[lang as keyof typeof data]?.skills || data.pt.skills;
    return skills.filter(skill => !skill.auxSkills && skill.projectCount > 0);
  };
  
  
  export const getProjectsByLanguage = (lang: string): Project[] => {
    const projects = data[lang as keyof typeof data]?.projects || data.pt.projects;
    
    return [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };
  
  