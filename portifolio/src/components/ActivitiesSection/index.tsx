import React, { useState } from 'react';
import { activities, Activity } from '../../i18n/activities';
import { Language, translations } from '../../i18n/translations';
import { ActivityCard } from '../ActivityCard';
import { ActivityModal } from '../ActivityModal';

interface Props {
  lang: Language;
  darkMode: boolean;
}

export const ActivitiesSection: React.FC<Props> = ({ lang, darkMode }) => {
  const [selected, setSelected] = useState<Activity | null>(null);
  const t = translations[lang];

  return (
    <section
      id="activities"
      className={`container mx-auto px-4 py-12 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-center text-3xl font-bold mb-8">
        {t.activitiesTitle}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {activities[lang].map((act) => (
          <ActivityCard key={act.id} activity={act} onClick={() => setSelected(act)} darkMode={darkMode} />
        ))}
      </div>

      <ActivityModal darkMode={darkMode} activity={selected} onClose={() => setSelected(null)} language={lang} />
    </section>
  );
};
