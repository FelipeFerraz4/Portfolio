import React from 'react';
import { Activity } from '../../i18n/activities';
import { Language, translations } from '../../i18n/translations';

interface ActivityModalProps {
  activity: Activity | null;
  onClose: () => void;
  darkMode: boolean;
  language: Language;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({ activity, onClose, darkMode, language }) => {
  if (!activity) return null;

  const t = translations[language];

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

        <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
        <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{activity.details}</p>

        <div className="mt-4 space-y-4">
          {activity.link && (
            <a
              href={activity.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-block text-sm font-semibold transition-colors duration-200 ${
                darkMode ? 'text-white hover:text-gray-300' : 'text-blue-600 hover:text-blue-800'
              }`}
            >
              {t.seeMore}
            </a>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
            }`}
          >
            {activity.language}
          </span>
        </div>

        <p className={`text-sm mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {t.lastUpdate} {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};
