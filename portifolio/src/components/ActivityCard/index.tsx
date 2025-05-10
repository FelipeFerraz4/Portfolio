import React from 'react';
import { Activity } from '../../i18n/activities';

interface Props {
  activity: Activity;
  onClick: () => void;
  darkMode: boolean;
}

export const ActivityCard: React.FC<Props> = ({ activity, onClick, darkMode }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer rounded-xl shadow-md p-4 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
  >
    <div
      className="w-24 h-24 rounded bg-cover bg-center"
      style={{ backgroundImage: `url(${activity.imageLink})` }}
    />
    <div>
      <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{activity.title}</h4>
      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{activity.description}</p>
      <p className="mt-1 text-sm text-blue-500">{activity.stats}</p>
    </div>
  </div>
);
