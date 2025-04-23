import React from 'react';
import { Project } from '../../i18n/project';

interface ProjectModalProps {
    project?: Project;
    onClose: () => void;
    darkMode: boolean;
  }
  

  const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
    if (!project) return null;
  
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
        <div
          className={`rounded-lg max-w-2xl w-full shadow-lg p-6 relative
            ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
        >
          <button
            onClick={onClose}
            className={`absolute top-3 right-4 text-xl font-bold ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            ×
          </button>
  
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{project.description}</p>
  
          <div className="mt-4 space-y-4">
            {project.videoUrl && (
              <video controls className="w-full h-64 rounded">
                <source src={project.videoUrl} />
                Seu navegador não suporta a tag de vídeo.
              </video>
            )}
  
            {/* {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded object-cover"
              />
            )} */}
          </div>
  
          <div className="mt-6 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1 text-sm rounded-full ${
                  darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
  
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={
            `flex items-center gap-2 mt-4 text-sm font-semibold transition-colors duration-200 ${
              darkMode ? 'text-white hover:text-gray-300' : 'text-blue-600 hover:text-blue-800'}`}>
            GitHub do Projeto
          </a>
          <p className={`text-sm mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Data da última atualização: {new Date(project.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    );
  };
  
  export default ProjectModal;
  