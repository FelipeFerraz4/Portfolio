import { getSkillsByNameEn, SkillsData } from "./skills-data";

export interface ProjectData {
  id: string;
  title: string[];
  description: string[];
  image: string;
  videoUrl: string;
  skills: SkillsData[];
  date: string;
  githubUrl: string;
}

export function getProjectById(id: string): ProjectData {
  const project = projectData.find((project) => project.id === id);
  if (!project) {
    throw new Error(`Project with id ${id} not found`);
  }
  return project;
}

export const projectData: ProjectData[] = [
  {
    id: "1",
    title: ["Blue Fox Aquarismo", "Blue Fox Aquariums", "Acuarios Blue Fox"],
    description: [
      "A Blue Fox Aquarismo é uma plataforma educacional criada para compartilhar conhecimento real e acessível sobre aquários, peixes, plantas aquáticas e manutenção responsável.",
      "Blue Fox Aquariums is an educational platform created to share real and accessible knowledge about aquariums, fish, aquatic plants, and responsible maintenance.",
      "Acuarios Blue Fox es una plataforma educativa creada para compartir conocimientos reales y accesibles sobre acuarios, peces, plantas acuáticas y mantenimiento responsable.",
    ],
    image: "/assets/images/blue_fox_aquariums.webp",
    videoUrl: "/assets/videos/blue_fox_aquariums.mp4",
    skills: getSkillsByNameEn([
      "Git and GitHub",
      "GitHub Actions",
      "Continuous Integration (CI)",
      "Angular",
      "HTML",
      "SCSS",
      "TypeScript",
      "Jest",
      "Java",
      "Spring",
      "REST API",
      "Docker",
      "Nginx",
      "MVC Architecture",
      "Microservices",
    ]),
    date: "2026-05-21",
    githubUrl: "https://github.com/FelipeFerraz4/blue-fox-aquarismo",
  },
  {
    id: "2",
    title: ["Corrida das Teclas", "Keyboard Race", "Carrera de Teclados"],
    description: [
      "A Corrida das Teclas é um jogo de habilidade e velocidade onde os jogadores competem para digitar textos o mais rápido possível.",
      "Keyboard Race is a skill and speed game where players compete to type texts as quickly as possible.",
      "Carrera de Teclados es un juego de habilidad y velocidad donde los jugadores co  mpiten para escribir textos lo más rápido posible.",
    ],
    image: "/assets/images/keyboard_race.webp",
    videoUrl: "/assets/videos/keyboard_race.mp4",
    skills: getSkillsByNameEn([
      "Git and GitHub",
      "Angular",
      "HTML",
      "SCSS",
      "TypeScript",
      "Python",
      "Flask",
      "WebSockets",
      "gRPC",
      "PostgreSQL",
      "Docker",
      "Rest API",
      "Microservices",
    ]),
    date: "2026-03-11",
    githubUrl: "https://github.com/FelipeFerraz4/multiplayer-typing-race",
  },
];
