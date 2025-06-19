
import React from 'react';
import { Language, LocalizedString } from '../types';
import { Theme } from '../App'; // Assuming Theme is exported from App.tsx
import { placeholderBgLightHex, placeholderTextLightHex, placeholderBgDarkHex, placeholderTextDarkHex } from '../constants';


interface CaseStudyCardProps {
  title: LocalizedString;
  subtitle: LocalizedString;
  tags: string[];
  href: string;
  imagePlaceholderText: LocalizedString;
  language: Language;
  theme: Theme;
  onClick?: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  subtitle,
  tags,
  href,
  imagePlaceholderText,
  language,
  theme,
  onClick
}) => {
  const currentBgHex = theme === 'dark' ? placeholderBgDarkHex : placeholderBgLightHex;
  const currentTextHex = theme === 'dark' ? placeholderTextDarkHex : placeholderTextLightHex;
  const placeholderUrl = `https://placehold.co/400x225/${currentBgHex}/${currentTextHex}?text=${encodeURIComponent(imagePlaceholderText[language])}&font=inter`;

  const tagBaseClasses = `px-3 py-1 rounded-full text-sm font-spectrum-semibold`;
  
  const lightThemeTagClasses = `bg-white border border-spectrum-border-default-light text-spectrum-text-secondary-light`;
  const darkThemeTagClasses = `bg-gray-700 text-gray-100`; 
  const tagClasses = theme === 'light' ? `${tagBaseClasses} ${lightThemeTagClasses}` : `${tagBaseClasses} ${darkThemeTagClasses}`;

  return (
    <a
      href={href}
      onClick={onClick}
      className={`block overflow-hidden bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark 
                 hover:bg-card-hover-bg-light dark:hover:bg-card-hover-bg-dark
                 rounded-[24px] p-spectrum-200 shadow-spectrum-100 
                 hover:shadow-spectrum-200 
                 transition-all duration-200 ease-in-out no-underline group
                 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark
                 active:border-black dark:active:border-white
                 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white
                 `}
      aria-label={`${title[language]}: ${subtitle[language]}`}
    >
      <div className="flex flex-col h-full">
        <div className="aspect-video bg-transparent rounded-xl mb-spectrum-300 overflow-hidden border border-spectrum-border-default-light dark:border-spectrum-border-default-dark">
          <img 
            src={placeholderUrl} 
            alt={imagePlaceholderText[language]} 
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
        </div>
        
        <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark tracking-tight leading-snug group-hover:text-custom-interactive-text-light dark:group-hover:text-custom-interactive-text-dark transition-colors text-left mb-spectrum-200">
          {title[language]}
        </h4>

        <p className="text-spectrum-100 font-spectrum-medium text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark leading-normal mb-spectrum-200 flex-grow text-left">
          {subtitle[language]}
        </p>
        <div className="flex flex-wrap gap-spectrum-100 justify-start mt-0">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={tagClasses}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default CaseStudyCard;