type Language = 'en' | 'pt' | 'es';

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
        id: '1',
        title: 'Beecrowd',
        data: '2025-05-20',
        description: 'Platform to train algorithms and programming challenges.',
        details: 'Completed over 250 challenges using Python.',
        stats: '258 Algorithms',
        language: ['Python', 'C++'],
        link: 'https://judge.beecrowd.com/pt/profile/872408',
        imageLink: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/beecrowd.webp'
      },
      {
        id: '2',
        title: 'LeetCode',
        data: '2025-05-20',
        description: 'Enhance technical skills and prepare for interviews.',
        details: 'Solved problems in JavaScript.',
        stats: '4 Algorithms',
        language: ['JavaScript'],
        link: 'https://judge.beecrowd.com/pt/profile/872408',
        imageLink: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/LeetCode.webp'
      },
      {
        id: '3',
        title: 'Calang.io',
        data: '2025-05-20',
        description: 'Software company from UFCA Computer Science course.',
        details: 'Worked as Director in software projects.',
        stats: 'Position: Director',
        language: ['Node.js', 'Java'],
        link: 'https://judge.beecrowd.com/pt/profile/872408',
        imageLink: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/calangio.webp'
      }
    ],
    pt: [
      {
        id: '1',
        title: 'Beecrowd',
        data: '2025-05-20',
        description: 'Plataforma para treinar algoritmos e desafios de programação.',
        details: 'Resolvi mais de 250 desafios usando Python.',
        stats: '258 Algoritmos',
        language: ['Python', 'C++'],
        link: 'https://judge.beecrowd.com/pt/profile/872408',
        imageLink: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/beecrowd.webp'
      },
      {
        id: '2',
        title: 'LeetCode',
        data: '2025-05-20',
        description: 'Aprimore habilidades técnicas e prepare-se para entrevistas.',
        details: 'Resolvi problemas usando JavaScript.',
        stats: '4 Algoritmos',
        language: ['JavaScript'],
        link: 'https://judge.beecrowd.com/pt/profile/872408',
        imageLink: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/LeetCode.webp'
      },
      {
        id: '3',
        title: 'Calang.io',
        data: '2025-05-20',
        description: 'Empresa júnior do curso de Ciência da Computação da UFCA.',
        details: 'Atuei como Diretor em projetos de software.',
        stats: 'Cargo: Diretor',
        language: ['Node.js', 'Java'],
        link: 'https://judge.beecrowd.com/pt/profile/872408',
        imageLink: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/calangio.webp'
      }
    ],
    es: [
      {
        id: '1',
        title: 'Beecrowd',
        data: '2025-05-20',
        description: 'Plataforma para entrenar algoritmos y desafíos de programación.',
        details: 'Resolví más de 250 desafíos usando Python.',
        stats: '258 Algoritmos',
        language: ['Python', 'C++'],
        link: 'https://judge.beecrowd.com/pt/profile/872408',
        imageLink: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/beecrowd.webp'
      },
      {
        id: '2',
        title: 'LeetCode',
        data: '2025-05-20',
        description: 'Mejora habilidades técnicas y prepárate para entrevistas.',
        details: 'Resolví problemas usando JavaScript.',
        stats: '4 Algoritmos',
        language: ['JavaScript'],
        link: 'https://judge.beecrowd.com/pt/profile/872408',
        imageLink: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/LeetCode.webp'
      },
      {
        id: '3',
        title: 'Calang.io',
        data: '2025-05-20',
        description: 'Empresa júnior del curso de Ciencias de la Computación de la UFCA.',
        details: 'Actué como Director en proyectos de software.',
        stats: 'Cargo: Director',
        language: ['Node.js', 'Java'],
        link: 'https://judge.beecrowd.com/pt/profile/872408',
        imageLink: 'https://orange-barracuda-883216.hostingersite.com/wp-content/uploads/2025/05/calangio.webp'
      }
    ]
  };
  