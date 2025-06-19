
import React from 'react';
import { Language, TocItem as TocItemType } from '../types';
import InformationIcon from './InformationIcon'; 

interface TableOfContentsSectionProps {
  tocItems: TocItemType[];
  language: Language;
  id: string; 
}

const TableOfContentsSection: React.FC<TableOfContentsSectionProps> = ({ tocItems, language, id }) => {
  const sectionTitleText = language === 'es' ? 'ÍNDICE DEL CASO DE ESTUDIO' : 'CASE STUDY INDEX';

  return (
    <div 
      id={id} 
      className="bg-white dark:bg-spectrum-background-primary-dark 
                 p-spectrum-300 md:p-spectrum-400 rounded-spectrum-200 shadow-spectrum-100 
                 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark"
      aria-labelledby="case-study-index-title"
    >
      <h2 
        id="case-study-index-title"
        className="text-spectrum-700 font-spectrum-bold uppercase tracking-wide
                   text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark 
                   pb-spectrum-100 mb-spectrum-300
                   border-b border-spectrum-border-default-light dark:border-spectrum-border-default-dark
                   flex items-center" 
      >
        <InformationIcon className="w-6 h-6 mr-spectrum-100 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark" /> 
        {sectionTitleText}
      </h2>
      <ul className="space-y-spectrum-300">
        {tocItems.map((item) => (
          <li key={item.id}>
            <p 
              className="text-spectrum-400 font-spectrum-medium 
                         text-spectrum-text-accent-default-light dark:text-spectrum-text-accent-default-dark
                         mb-spectrum-100" // This will now use the grayscale primary text color as accent
            >
              {item.title}
            </p>
            {item.subHeadings && item.subHeadings.length > 0 && (
              <div className="ml-spectrum-200 mt-spectrum-75 space-y-spectrum-50"> 
                {item.subHeadings.map((subHeading, index) => (
                  <p 
                    key={`${item.id}-sub-${index}`} 
                    className="text-spectrum-100 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark" 
                  >
                    {subHeading}
                  </p>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContentsSection;