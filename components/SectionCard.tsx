
import React from 'react';

interface SectionCardProps {
  id: string;
  title: string;
  emoji?: string;
  content: React.ReactNode;
  imageUrl?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ id, title, emoji, content, imageUrl }) => {
  return (
    <section 
      id={id} 
      className="scroll-mt-header bg-white dark:bg-spectrum-background-primary-dark 
                 p-spectrum-300 md:p-spectrum-400 rounded-spectrum-200 shadow-spectrum-100 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark"
    >
      <div className="flex flex-col md:flex-row gap-spectrum-300 md:gap-spectrum-400">
        <div className={`flex-1 ${imageUrl ? 'md:w-2/3' : 'w-full'}`}>
          <h2 className="text-spectrum-600 font-spectrum-bold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-200 flex items-center">
            {emoji && <span className="mr-spectrum-100 text-3xl md:text-4xl">{emoji}</span>}
            {title}
          </h2>
          {/* Apply prose styles for content within the card, ensuring they pick up Spectrum defaults */}
          <div className="prose dark:prose-invert max-w-none 
                          text-spectrum-200 
                          dark:text-spectrum-200 
                          prose-headings:font-spectrum-bold
                          prose-h3:text-spectrum-400 prose-h3:text-spectrum-text-primary-light dark:prose-h3:text-spectrum-text-primary-dark
                          prose-h4:text-spectrum-300 prose-h4:text-spectrum-text-primary-light dark:prose-h4:text-spectrum-text-primary-dark
                          prose-p:text-spectrum-text-secondary-light dark:prose-p:text-spectrum-text-secondary-dark
                          prose-strong:font-spectrum-bold prose-strong:text-spectrum-text-primary-light dark:prose-strong:text-spectrum-text-primary-dark
                          prose-a:text-spectrum-text-accent-default-light dark:prose-a:text-spectrum-text-accent-default-dark
                          prose-bullets:text-spectrum-text-secondary-light dark:prose-bullets:text-spectrum-text-secondary-dark
                          prose-counters:text-spectrum-text-secondary-light dark:prose-counters:text-spectrum-text-secondary-dark
                          prose-blockquote:border-spectrum-border-default-light dark:prose-blockquote:border-spectrum-border-default-dark
                          prose-blockquote:text-spectrum-text-secondary-light dark:prose-blockquote:text-spectrum-text-secondary-dark
                          prose-hr:border-spectrum-border-default-light dark:prose-hr:border-spectrum-border-default-dark
                          ">
            {content}
          </div>
        </div>
        {imageUrl && (
          <div className="flex-1 md:w-1/3 mt-spectrum-300 md:mt-0">
            <img
              src={imageUrl}
              alt={`${title} illustration`}
              className="w-full h-auto max-h-[350px] md:max-h-[450px] object-contain rounded-spectrum-100" // Spectrum uses smaller radii generally
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionCard;