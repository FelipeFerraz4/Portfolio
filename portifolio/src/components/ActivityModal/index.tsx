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
  const textColor = darkMode ? 'text-gray-300' : 'text-gray-700';
  const badgeColor = darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700';

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div
        className={`relative w-full max-w-3xl rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-3 right-4 text-2xl font-bold focus:outline-none ${
            darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
          }`}
        >
          ×
        </button>

        {/* Left: Small image */}
        {activity.imageLink && (
          <div className="w-full md:w-1/3 h-48 md:h-auto">
            <img
              src={activity.imageLink}
              alt={activity.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Right: Content */}
        <div className="w-full md:w-2/3 p-6">
          <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
          <p className={`${textColor} mb-3`}>{activity.description}</p>
          <p className={`${textColor} mb-3`}>{activity.details}</p>

          {activity.stats && (
            <p className={`${textColor} text-sm italic mb-3`}>{activity.stats}</p>
          )}

          {/* Language badge */}
          {activity.language && activity.language.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activity.language.map((lang, index) => (
                <span
                  key={index}
                  className={`inline-block px-3 py-1 rounded-full text-sm ${badgeColor}`}
                >
                  {lang}
                </span>
              ))}
            </div>
          )}

          {/* External link */}
          {activity.link && (
            <div>
              <a
                href={activity.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold transition-colors duration-200 ${
                  darkMode ? 'text-blue-300 hover:text-white' : 'text-blue-600 hover:text-blue-800'
                }`}
              >
                🔗 {t.seeMore}
              </a>
            </div>
          )}

          {/* Date */}
          <p className={`text-xs mt-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            {t.lastUpdate} {new Date(activity.data).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
