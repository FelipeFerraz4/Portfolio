import React, { useState } from 'react';
import { getProjectsByLanguage, getSkillsByLanguage, Project } from '../../i18n/project';
import { Language, translations } from '../../i18n/translations';
import ProjectModal from '../ProjectModal';

interface SkillsSectionProps {
    language: Language;
    darkMode: boolean;
  }


  export const SkillsSection: React.FC<SkillsSectionProps> = ({ language, darkMode }) => {
    const skills = getSkillsByLanguage(language);
    const projects = getProjectsByLanguage(language);
    const t = translations[language];
  
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
    const projectsPerPage = 4;
    const filteredProjects = selectedSkill
      ? projects.filter((project) => project.skills.includes(selectedSkill))
      : projects;
  
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const displayedProjects = filteredProjects.slice(
      (currentPage - 1) * projectsPerPage,
      currentPage * projectsPerPage
    );
  
    const handleSkillClick = (skill: string) => {
      setSelectedSkill(skill === selectedSkill ? null : skill);
      setCurrentPage(1);
    };
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    return (
      <section id="skills" className="py-12 px-6 max-w-6xl mx-auto">
        {/* Habilidades */}
        <div className="w-full mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">{t.skillsTitle}</h2>
            <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-[80vw]">
                {skills
                .sort((a, b) => b.projectCount - a.projectCount)
                .map((skill) => (
                    <div
                    key={skill.name}
                    onClick={() => handleSkillClick(skill.name)}
                    className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                        ${selectedSkill === skill.name
                          ? 'bg-blue-400 border border-blue-500 shadow-lg'
                          : darkMode
                            ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 shadow-md'
                            : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-300 shadow-lg'}`}
                    >
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className={`px-3 py-1 text-sm rounded-full font-bold
                        ${darkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
                        {skill.projectCount}
                    </span>
                    </div>
                ))}
            </div>
        </div>
  
        {/* Projetos */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">{t.projectsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-lg shadow-md p-4 transition-all ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black border'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="mt-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                    {project.description}
                  </p>
                </div>
                <button
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => setSelectedProject(project)}
                >
                  {t.seeMore}
                </button>
              </div>
            ))}
          </div>
  
          {/* Paginação */}
          <div className="mt-6 flex justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Próximo
            </button>
          </div>
        </div>
  
        {/* Modal */}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} darkMode={darkMode} />
        )}
      </section>
    );
  };
  