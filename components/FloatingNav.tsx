
import React from 'react';
import { Theme } from '../App';
import { Language, TocItem, SocialLinkItem } from '../types'; // Added SocialLinkItem
import Tooltip from './Tooltip'; // Assuming Tooltip component exists and works
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';

interface FloatingNavProps {
  theme: Theme;
  language: Language;
  tocItems: TocItem[];
  activeSectionId: string;
  isCollapsed: boolean;
  toggleCollapse: () => void;
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
  scrollToTop: () => void;
  scrollToBottom: () => void; 
  actualHeaderHeight: number; 
  isTabletLayout: boolean;
  socialLinks: SocialLinkItem[]; // Added socialLinks prop
}

const FloatingNav: React.FC<FloatingNavProps> = ({
  theme,
  language,
  tocItems,
  activeSectionId,
  isCollapsed,
  toggleCollapse,
  isScrolled,
  scrollToSection,
  scrollToTop,
  scrollToBottom,
  actualHeaderHeight,
  isTabletLayout,
  socialLinks, // Destructured socialLinks
}) => {
  const sidebarWidthClass = isCollapsed ? 'w-16' : 'w-64';
  const genericIconClass = "w-6 h-6 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark";

  const getScrollUtilityButtonClasses = () => {
    let baseStyle = `border-2 transition-colors duration-150 ease-in-out `;
    let lightModeStyle = `bg-scroll-top-bg-light text-spectrum-text-primary-light border-sidebar-scroll-button-border-light hover:bg-scroll-top-hover-bg-light`;
    let darkModeStyle = `bg-scroll-top-bg-dark text-scroll-top-text-dark border-transparent hover:bg-scroll-top-hover-bg-dark dark:hover:border-white dark:hover:border-2`;
    
    let layoutStyle = isCollapsed 
        ? `flex items-center justify-center h-12 rounded-spectrum-100`
        : `flex items-center justify-start h-12 px-spectrum-100 rounded-spectrum-100`;

    return `${baseStyle} ${layoutStyle} ${theme === 'light' ? lightModeStyle : darkModeStyle}`;
  };
  
  const getNavLinkClasses = (itemId: string) => {
    const isActive = activeSectionId === itemId;
    let baseClasses = `flex items-center w-full h-12 rounded-spectrum-100 group transition-all duration-150 ease-in-out
                       focus:outline-none focus:ring-1 focus:ring-offset-1 dark:focus:ring-offset-spectrum-background-primary-dark`;
    
    if (isActive) {
      baseClasses += ` bg-custom-interactive-bg-light text-custom-interactive-text-light dark:bg-custom-interactive-bg-dark dark:text-custom-interactive-text-dark font-spectrum-semibold shadow-sm`;
      baseClasses += ` focus:ring-custom-interactive-bg-dark`;
    } else {
      baseClasses += ` text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark 
                       hover:bg-hover-nav-link-bg-light hover:text-hover-nav-link-text-light 
                       dark:hover:bg-sidebar-nav-item-hover-bg-dark dark:hover:text-sidebar-nav-item-hover-text-dark`;
      baseClasses += ` focus:ring-spectrum-border-focus-light dark:focus:ring-spectrum-border-focus-dark`;
    }

    if (isCollapsed) {
      baseClasses += ' justify-center pl-1'; 
    } else {
      baseClasses += ' px-spectrum-200 space-x-spectrum-200';
    }
    return baseClasses;
  };

  const expandedLinkTextClasses = `text-sm font-spectrum-medium group-hover:underline group-focus:underline group-focus:outline group-focus:outline-2 group-focus:outline-white dark:group-focus:outline-gray-900 group-focus:outline-offset-1`;
  const activeExpandedLinkTextClasses = `text-sm font-spectrum-semibold`;

  // Align the top of the "Go to Top" button (or toggle if not scrolled) 32px below the bottom of the header.
  const topControlsPaddingTop = actualHeaderHeight + 32;


  const toggleButtonTooltip = isCollapsed 
    ? (language === 'es' ? 'Expandir menú' : 'Expand menu') 
    : (language === 'es' ? 'Colapsar menú' : 'Collapse menu');

  // TODO: Implement rendering of socialLinks at the bottom of the sidebar
  // For now, just ensuring the prop is accepted to fix the type error.

  return (
    <aside
      className={`fixed left-0 top-0 h-screen z-30 hidden md:flex flex-col
                  bg-transparent dark:bg-spectrum-background-primary-dark
                  transition-all duration-300 ease-in-out ${sidebarWidthClass} group/sidebar
                  will-change-transform`}
      aria-label={language === 'es' ? 'Navegación principal del caso de estudio' : 'Main case study navigation'}
    >
      <div 
        className="flex-shrink-0 px-spectrum-100 pb-spectrum-100"
        style={{ paddingTop: `${topControlsPaddingTop}px` }}
      >
        {isScrolled && (
          <Tooltip text={language === 'es' ? 'Ir arriba' : 'Go to Top'} position="right" instant={isCollapsed}>
            <button
              onClick={scrollToTop}
              className={`w-full ${getScrollUtilityButtonClasses()}`}
              title={language === 'es' ? 'Ir arriba' : 'Go to Top'}
            >
              <span className={`font-spectrum-bold text-xl ${isCollapsed ? '' : 'mr-spectrum-100'}`}>↑</span>
              {!isCollapsed && <span className="text-spectrum-75 font-spectrum-semibold">{language === 'es' ? 'Ir arriba' : 'Go to Top'}</span>}
            </button>
          </Tooltip>
        )}
        
        <Tooltip text={toggleButtonTooltip} position="right" instant={isCollapsed}>
            <button
            onClick={toggleCollapse}
            className={`w-full h-10 flex items-center justify-center rounded-spectrum-100
                        text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark
                        hover:bg-hover-nav-link-bg-light hover:text-hover-nav-link-text-light 
                        dark:hover:bg-sidebar-nav-item-hover-bg-dark dark:hover:text-sidebar-nav-item-hover-text-dark
                        focus:outline-none focus:ring-1 focus:ring-spectrum-border-focus-light dark:focus:ring-spectrum-border-focus-dark 
                        focus:ring-offset-1 dark:focus:ring-offset-spectrum-background-primary-dark
                        ${isScrolled ? 'mt-spectrum-100' : ''}`} 
            aria-expanded={!isCollapsed}
            aria-controls="sidebar-nav-list"
            title={toggleButtonTooltip}
            >
            {isCollapsed ? <ChevronRightIcon className="w-5 h-5" /> : <ChevronLeftIcon className="w-5 h-5" />}
            </button>
        </Tooltip>
      </div>

      <nav 
        className={`flex-grow overflow-y-auto overflow-x-hidden p-spectrum-100 
                   ${isCollapsed ? 'my-spectrum-100' : ''}`}
        id="sidebar-nav-list"
      >
        <ul className="space-y-spectrum-50">
          {tocItems.map((item, index) => { 
            const itemNumber = item.itemNumber || index + 1; 
            const linkContent = (
              <>
                {isCollapsed && item.itemNumber && ( // Only show number if itemNumber is present
                    <span className="text-sm font-spectrum-medium mr-1">
                        {itemNumber}.
                    </span>
                )}
                {item.icon ? (
                  <item.icon className={`${genericIconClass} flex-shrink-0 ${activeSectionId === item.id ? 'text-custom-interactive-text-light dark:text-custom-interactive-text-dark' : ''}`} />
                ) : item.emoji ? (
                  <span className={`text-xl flex-shrink-0 ${isCollapsed ? '' : 'mr-0'}`} aria-hidden="true">{item.emoji}</span>
                ) : (
                  // If no icon and no emoji, but we have a number and are collapsed, we need some space.
                  // Otherwise, if expanded and no icon/emoji, it will use the default spacing.
                  isCollapsed && item.itemNumber ? null : <span className="w-6 h-6 flex-shrink-0" /> 
                )}
                {!isCollapsed && (
                  <span 
                    className={`truncate ${activeSectionId === item.id ? activeExpandedLinkTextClasses : expandedLinkTextClasses}`}
                  >
                    {item.title}
                  </span>
                )}
              </>
            );

            return (
              <li key={item.id}>
                {isCollapsed ? (
                  <Tooltip text={item.title} position="right" instant>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={getNavLinkClasses(item.id)}
                      aria-current={activeSectionId === item.id ? 'page' : undefined}
                      title={item.title} 
                    >
                      {linkContent}
                    </a>
                  </Tooltip>
                ) : (
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                    className={getNavLinkClasses(item.id)}
                    aria-current={activeSectionId === item.id ? 'page' : undefined}
                  >
                    {linkContent}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex-shrink-0 p-spectrum-100">
        {/* Placeholder for social links - to be implemented */}
        {/* For now, this space will show the scroll to bottom button */}
        {isScrolled && ( 
          <Tooltip text={language === 'es' ? 'Ir abajo' : 'Go to Bottom'} position="right" instant={isCollapsed}>
            <button
              onClick={scrollToBottom}
              className={`w-full ${getScrollUtilityButtonClasses()}`} 
              title={language === 'es' ? 'Ir abajo' : 'Go to Bottom'}
            >
              <span className={`font-spectrum-bold text-xl ${isCollapsed ? '' : 'mr-spectrum-100'}`}>↓</span>
              {!isCollapsed && <span className="text-spectrum-75 font-spectrum-semibold">{language === 'es' ? 'Ir abajo' : 'Go to Bottom'}</span>}
            </button>
          </Tooltip>
        )}
      </div>
    </aside>
  );
};

export default FloatingNav;
