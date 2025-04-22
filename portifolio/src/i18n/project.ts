export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    videoUrl: string;
    skills: string[];
    date: string; // ou Date
  }
  
  export interface Skill {
    name: string;
    projectCount: number;
  }
  
  const data = {
    pt: {
      skills: [
        { name: 'React', projectCount: 3 },
        { name: 'Node.js', projectCount: 2 },
        { name: 'Tailwind CSS', projectCount: 1 },
      ],
      projects: [
        {
          id: '1',
          title: 'Projeto 1',
          description: 'Descrição do projeto 1',
          image: '/images/projeto1.jpg',
          videoUrl: '/videos/projeto1.mp4',
          skills: ['React', 'Node.js'],
          date: '2025-04-20',
        },
        {
          id: '2',
          title: 'Projeto 2',
          description: 'Descrição do projeto 2',
          image: '/images/projeto2.jpg',
          videoUrl: '/videos/projeto2.mp4',
          skills: ['React'],
          date: '2025-04-19',
        },
        {
            id: '3',
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            image: '/images/projeto2.jpg',
            videoUrl: '/videos/projeto2.mp4',
            skills: ['React'],
            date: '2025-04-19',
            },
            {
            id: '4',
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            image: '/images/projeto2.jpg',
            videoUrl: '/videos/projeto2.mp4',
            skills: ['React'],
            date: '2025-04-19',
            },
            {
                id: '5',
                title: 'Proyecto 2',
                description: 'Descripción del proyecto 2',
                image: '/images/projeto2.jpg',
                videoUrl: '/videos/projeto2.mp4',
                skills: ['React'],
                date: '2025-04-19',
            },
      ],
    },
    en: {
      skills: [
        { name: 'React', projectCount: 3 },
        { name: 'Node.js', projectCount: 2 },
        { name: 'Tailwind CSS', projectCount: 1 },
      ],
      projects: [
        {
          id: '1',
          title: 'Project 1',
          description: 'Description of project 1',
          image: '/images/projeto1.jpg',
          videoUrl: '/videos/projeto1.mp4',
          skills: ['React', 'Node.js'],
          date: '2025-04-20',
        },
        {
          id: '2',
          title: 'Project 2',
          description: 'Description of project 2',
          image: '/images/projeto2.jpg',
          videoUrl: '/videos/projeto2.mp4',
          skills: ['React'],
          date: '2025-04-19',
        },
        {
            id: '3',
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            image: '/images/projeto2.jpg',
            videoUrl: '/videos/projeto2.mp4',
            skills: ['React'],
            date: '2025-04-19',
            },
            {
            id: '4',
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            image: '/images/projeto2.jpg',
            videoUrl: '/videos/projeto2.mp4',
            skills: ['React'],
            date: '2025-04-19',
            },
            {
                id: '5',
                title: 'Proyecto 2',
                description: 'Descripción del proyecto 2',
                image: '/images/projeto2.jpg',
                videoUrl: '/videos/projeto2.mp4',
                skills: ['React'],
                date: '2025-04-19',
            },
      ],
    },
    es: {
      skills: [
        { name: 'React', projectCount: 3 },
        { name: 'Node.js', projectCount: 2 },
        { name: 'Tailwind CSS', projectCount: 1 },
      ],
      projects: [
        {
          id: '1',
          title: 'Proyecto 1',
          description: 'Descripción del proyecto 1',
          image: '/images/projeto1.jpg',
          videoUrl: '/videos/projeto1.mp4',
          skills: ['React', 'Node.js'],
          date: '2025-04-20',
        },
        {
          id: '2',
          title: 'Proyecto 2',
          description: 'Descripción del proyecto 2',
          image: '/images/projeto2.jpg',
          videoUrl: '/videos/projeto2.mp4',
          skills: ['React'],
          date: '2025-04-19',
        },
        {
            id: '3',
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            image: '/images/projeto2.jpg',
            videoUrl: '/videos/projeto2.mp4',
            skills: ['React'],
            date: '2025-04-19',
            },
            {
            id: '4',
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            image: '/images/projeto2.jpg',
            videoUrl: '/videos/projeto2.mp4',
            skills: ['React'],
            date: '2025-04-19',
            },
            {
                id: '5',
                title: 'Proyecto 2',
                description: 'Descripción del proyecto 2',
                image: '/images/projeto2.jpg',
                videoUrl: '/videos/projeto2.mp4',
                skills: ['React'],
                date: '2025-04-19',
            },
      ],
    },
  };
  
  export const getSkillsByLanguage = (lang: string): Skill[] => {
    return data[lang as keyof typeof data]?.skills || data.pt.skills;
  };
  
  export const getProjectsByLanguage = (lang: string): Project[] => {
    return data[lang as keyof typeof data]?.projects || data.pt.projects;
  };
  