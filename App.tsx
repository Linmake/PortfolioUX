

import React, { useState, useEffect, useRef } from 'react';
import { SECTIONS_DATA, CTAButton, LINKEDIN_URL, getLocalizedTocItems, placeholderBgLightHex, placeholderTextLightHex, placeholderBgDarkHex, placeholderTextDarkHex, TABLE_OF_CONTENTS_ID, SIDEBAR_SOCIAL_LINKS } from './constants'; // Added SIDEBAR_SOCIAL_LINKS
import SectionCard from './components/SectionCard';
import FloatingNav from './components/FloatingNav';
import { DynamicHeader } from './components/DynamicHeader'; 
import TableOfContentsSection from './components/TableOfContentsSection';
import InformationIcon from './components/InformationIcon';
import LinkedInIcon from './components/LinkedInIcon';
import DownloadIcon from './components/DownloadIcon';
import TikTokIcon from './components/TikTokIcon';
import YouTubeIcon from './components/YouTubeIcon';
import InstagramIcon from './components/InstagramIcon';
import XTwitterIcon from './components/XTwitterIcon';
import GithubIcon from './components/GithubIcon';
import BehanceIcon from './components/BehanceIcon';
import DribbleIcon from './components/DribbleIcon';
import MediumIcon from './components/MediumIcon';
import SubstackIcon from './components/SubstackIcon';
import GlobeIcon from './components/GlobeIcon';
import PersonIcon from './components/PersonIcon'; 
import HamburgerIcon from './components/HamburgerIcon';
import WhatsAppIcon from './components/WhatsAppIcon';
import TelegramIcon from './components/TelegramIcon';
import EmailIcon from './components/EmailIcon';
import SecurityShieldIcon from './components/SecurityShieldIcon'; 

import { Language, LocalizedString as AppLocalizedString, TocItem, SectionData, SocialLinkItem } from './types'; 

// Import existing software icons for footer
import FigmaIcon from './components/FigmaIcon';
import NotionIcon from './components/NotionIcon';
import MiroIcon from './components/MiroIcon';
import MazeIcon from './components/MazeIcon';
import OptimalWorkshopIcon from './components/OptimalWorkshopIcon';

// Import NEW software icons for footer
import ProjectManagementIcon from './components/ProjectManagementIcon';
import HotjarIcon from './components/HotjarIcon';
import LookbackIcon from './components/LookbackIcon';


export type Theme = 'light' | 'dark';
type KeywordCategory = 
  | 'neutral' 
  | 'metricsOrange' 
  | 'accessibilityGreen' 
  | 'designYellow' 
  | 'toolsMagenta' 
  | 'skillsBlue';

interface KeywordEntry {
  text: string;
  category: KeywordCategory;
}

interface PageTitleLocalizedString {
  part1: string;
  part2: string;
  part3: React.ReactNode;
}

interface FooterSocialLinkItem { 
  type: 'link' | 'divider';
  href?: string;
  IconComponent?: React.FC<{ className?: string }>;
  text?: AppLocalizedString;
  title?: string;
}

interface FooterSoftwareItem {
  name: AppLocalizedString;
  IconComponent: React.FC<{ className?: string }>;
  href: string; 
}


const App: React.FC = () => {
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  
  const headerRef = useRef<HTMLElement>(null);
  const [actualHeaderHeight, setActualHeaderHeight] = useState(70); 

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isTabletLayout, setIsTabletLayout] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const [isDesktopLayout, setIsDesktopLayout] = useState(window.innerWidth >= 1024);


  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme) return storedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language') as Language | null;
      if (storedLang) return storedLang;
      const browserLang = navigator.language.split('-')[0];
      return browserLang === 'es' ? 'es' : 'en';
    }
    return 'es';
  });

  useEffect(() => {
    const updateLayoutStatus = () => {
      const width = window.innerWidth;
      const newIsMobileView = width < 768;
      const newIsTabletLayout = width >= 768 && width < 1024;
      const newIsDesktopLayout = width >= 1024;

      if (newIsMobileView !== isMobileView) setIsMobileView(newIsMobileView);
      if (newIsTabletLayout !== isTabletLayout) setIsTabletLayout(newIsTabletLayout);
      if (newIsDesktopLayout !== isDesktopLayout) setIsDesktopLayout(newIsDesktopLayout);
    };
    updateLayoutStatus(); 
    window.addEventListener('resize', updateLayoutStatus);
    return () => window.removeEventListener('resize', updateLayoutStatus);
  }, [isMobileView, isTabletLayout, isDesktopLayout]); 

  const tocItemsForContentDisplay = getLocalizedTocItems(language);

  const tocItemsForSidebar: TocItem[] = [
    {
      id: TABLE_OF_CONTENTS_ID,
      title: language === 'es' ? 'Índice General' : 'Case Study Index',
      icon: InformationIcon,
    },
    ...SECTIONS_DATA.map((section, index) => ({ 
      id: section.id,
      title: section.title[language],
      icon: undefined, 
      emoji: section.emoji,
      itemNumber: index + 1 
    }))
  ];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    if (!headerRef.current) return;
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const newHeight = entry.target.getBoundingClientRect().height;
        if (newHeight > 0) { 
          setActualHeaderHeight(newHeight);
          document.documentElement.style.setProperty('--header-height', `${newHeight}px`);
        }
      }
    });
    observer.observe(headerRef.current);
    const initialHeight = headerRef.current.getBoundingClientRect().height;
    if (initialHeight > 0) {
        setActualHeaderHeight(initialHeight);
        document.documentElement.style.setProperty('--header-height', `${initialHeight}px`);
    }
    return () => observer.disconnect();
  }, []); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200); 
      
      let currentSectionId = '';
      const scrollPositionWithOffset = window.scrollY + actualHeaderHeight + 40; 

      const sectionsAndToc = [
        document.getElementById(TABLE_OF_CONTENTS_ID),
        ...SECTIONS_DATA.map(s => document.getElementById(s.id))
      ].filter(el => el !== null) as HTMLElement[];

      for (const sectionEl of sectionsAndToc) {
        if (sectionEl.offsetTop <= scrollPositionWithOffset) {
          currentSectionId = sectionEl.id;
        } else {
          break; 
        }
      }
      if (activeSectionId !== currentSectionId) {
        setActiveSectionId(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [actualHeaderHeight, language, activeSectionId]);

  const toggleTheme = () => setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  const selectLanguage = (newLang: Language) => setLanguage(newLang);

  const toggleLeftSidebar = () => {
    setIsLeftSidebarCollapsed(prev => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = actualHeaderHeight + 16; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const pageTitle: { [key in Language]: PageTitleLocalizedString } = {
    en: {
      part1: "E-commerce app redesign",
      part2: "\"MODAHOY\"",
      part3: <>TO <span className="font-spectrum-bold">INCREASE CONVERSION</span></>
    },
    es: {
      part1: "Rediseño de la app de e-commerce",
      part2: "\"MODAHOY\"",
      part3: <>PARA <span className="font-spectrum-bold">INCREMENTAR LA CONVERSIÓN</span></>
    }
  };

const keywordsData: { [key in Language]: KeywordEntry[] } = {
    en: [
      { text: "E-commerce", category: "neutral" },
      { text: "Checkout Flow Optimization", category: "neutral" },
      { text: "Conversion Rate Optimization", category: "neutral" },
      { text: "Metrics", category: "metricsOrange" },
      { text: "Business", category: "metricsOrange" },
      { text: "Accessibility", category: "accessibilityGreen" },
      { text: "UI/UX Design", category: "designYellow" },
      { text: "UX Research & Strategy", category: "designYellow" },
      { text: "Behavioral & Cognitive Design", category: "designYellow" },
      { text: "Figma", category: "toolsMagenta" },
      { text: "Chat GPT", category: "toolsMagenta" },
      { text: "Google Ai studio", category: "toolsMagenta" },
      { text: "+5 tools", category: "toolsMagenta" },
      { text: "User Flows & Journey Mapping", category: "skillsBlue" },
      { text: "Wireframing / Lo-Fi prototyping", category: "skillsBlue" },
      { text: "Heuristic Evaluation (Nielsen principles)", category: "skillsBlue" },
      { text: "User Interviews & Testing", category: "skillsBlue" },
      { text: "Personas & Empathy Maps", category: "skillsBlue" },
      { text: "Information Architecture", category: "skillsBlue" },
      { text: "Jobs to be Done (JTBD) framework", category: "skillsBlue" },
      { text: "Scrum", category: "skillsBlue" },
      { text: "Design Systems", category: "skillsBlue" }, 
    ],
    es: [
      { text: "E-commerce", category: "neutral" },
      { text: "Optimización de flujo de checkout", category: "neutral" },
      { text: "Optimización de la conversión", category: "neutral" },
      { text: "Métricas", category: "metricsOrange" },
      { text: "Negocio", category: "metricsOrange" },
      { text: "Accesibilidad", category: "accessibilityGreen" },
      { text: "Diseño UI/UX", category: "designYellow" },
      { text: "UX Research & Strategy", category: "designYellow" },
      { text: "Behavioral & Cognitive Design", category: "designYellow" },
      { text: "Figma", category: "toolsMagenta" },
      { text: "Chat GPT", category: "toolsMagenta" },
      { text: "Google Ai studio", category: "toolsMagenta" },
      { text: "+5 tools", category: "toolsMagenta" },
      { text: "User Flows & Journey Mapping", category: "skillsBlue" },
      { text: "Wireframing / Lo-Fi prototyping", category: "skillsBlue" },
      { text: "Heuristic Evaluation (principios de Nielsen)", category: "skillsBlue" },
      { text: "User Interviews & Testing", category: "skillsBlue" },
      { text: "Personas & Empathy Maps", category: "skillsBlue" },
      { text: "Information Architecture", category: "skillsBlue" },
      { text: "Jobs to be Done (JTBD) framework", category: "skillsBlue" },
      { text: "Scrum", category: "skillsBlue" },
      { text: "Sistemas de Diseño", category: "skillsBlue" }, 
    ]
  };
  
  const getTagClasses = (category: KeywordCategory, currentTheme: Theme): string => {
    const themeSuffix = currentTheme === 'light' ? 'light' : 'dark';
    switch (category) {
      case 'neutral':
        return `bg-tag-neutral-bg-${themeSuffix} text-tag-neutral-text-${themeSuffix}`;
      case 'metricsOrange':
        return `bg-tag-metricsOrange-bg-${themeSuffix} text-tag-metricsOrange-text-${themeSuffix}`;
      case 'accessibilityGreen':
        return `bg-tag-accessibilityGreen-bg-${themeSuffix} text-tag-accessibilityGreen-text-${themeSuffix}`;
      case 'designYellow':
        return `bg-tag-designYellow-bg-${themeSuffix} text-tag-designYellow-text-${themeSuffix}`;
      case 'toolsMagenta':
        return `bg-tag-toolsMagenta-bg-${themeSuffix} text-tag-toolsMagenta-text-${themeSuffix}`;
      case 'skillsBlue':
        return `bg-tag-skillsBlue-bg-${themeSuffix} text-tag-skillsBlue-text-${themeSuffix}`;
      default: 
        return `bg-tag-neutral-bg-${themeSuffix} text-tag-neutral-text-${themeSuffix}`;
    }
  };

  const ctaButtonContactMe: AppLocalizedString = { en: "Contact me", es: "Contáctame" };
  const ctaButtonViewPortfolio: AppLocalizedString = { en: "View Portfolio", es: "Ver portfolio" };
  const interestedTitle: AppLocalizedString = { en: "Interested in collaborating?", es: "¿Interesado en colaborar?" };

  const footerCaseStudiesTitle: AppLocalizedString = { en: "Case Studies", es: "Casos de estudio" };
  const footerAboutMeTitle: AppLocalizedString = { en: "About Me", es: "Acerca de Mí" };
  const footerContactTitle: AppLocalizedString = { en: "Contact", es: "Contacto" }; 
  const footerSocialNetworksTitle: AppLocalizedString = { en: "Social Networks", es: "Redes Sociales" };
  const footerKnowMyStoryLink: AppLocalizedString = { en: "About me", es: "Acerca de mí" };
  const footerDownloadCVLink: AppLocalizedString = { en: "Download CV", es: "Descargar CV" };
  const footerTermsLink: AppLocalizedString = { en: "Terms and Conditions", es: "Términos y Condiciones" };
  const footerPrivacyLink: AppLocalizedString = { en: "Privacy Policy", es: "Política de Privacidad" };
  const footerCopyrightText: AppLocalizedString = { en: "All rights reserved.", es: "Todos los derechos reservados." };
  
  const footerLinkedInLink: AppLocalizedString = { en: "LinkedIn", es: "LinkedIn" };
  const footerYouTubeLink: AppLocalizedString = { en: "YouTube", es: "YouTube" };
  const footerTikTokLink: AppLocalizedString = { en: "TikTok", es: "TikTok" };
  const footerInstagramLink: AppLocalizedString = { en: "Instagram", es: "Instagram" };
  const footerXTwitterLink: AppLocalizedString = { en: "X (Twitter)", es: "X (Twitter)" };
  const footerGithubLink: AppLocalizedString = { en: "Github", es: "Github" };
  const footerBehanceLink: AppLocalizedString = { en: "Behance", es: "Behance" };
  const footerDribbleLink: AppLocalizedString = { en: "Dribble", es: "Dribble" };
  const footerSubstackLink: AppLocalizedString = { en: "Substack", es: "Substack" };
  const footerMediumLink: AppLocalizedString = { en: "Medium", es: "Medium" };

  const footerWhatsappLink: AppLocalizedString = { en: "Whatsapp", es: "Whatsapp" };
  const footerTelegramLink: AppLocalizedString = { en: "Telegram", es: "Telegram" };
  const footerEmailLink: AppLocalizedString = { en: "Email", es: "Email" };

  
  const footerSoftwaresTitle: AppLocalizedString = { en: "Softwares", es: "Softwares" };
  const footerFigmaTool: AppLocalizedString = { en: "Figma", es: "Figma" };
  const footerPMTools: AppLocalizedString = { en: "Jira / Trello / Linear", es: "Jira / Trello / Linear" };
  const footerNotionTool: AppLocalizedString = { en: "Notion", es: "Notion" };
  const footerCollabTools: AppLocalizedString = { es: "Miro / FigJam", en: "Miro / FigJam" }; 
  const footerMazeTool: AppLocalizedString = { en: "Maze", es: "Maze" };
  const footerHotjarTool: AppLocalizedString = { en: "Hotjar", es: "Hotjar" };
  const footerLookbackTool: AppLocalizedString = { en: "Lookback", es: "Lookback" };
  const footerOptimalWorkshopTool: AppLocalizedString = { en: "Optimal Workshop", es: "Optimal Workshop" };

  const footerSoftwareList: FooterSoftwareItem[] = [
    { name: footerFigmaTool, IconComponent: FigmaIcon, href: "#" },
    { name: footerPMTools, IconComponent: ProjectManagementIcon, href: "#" },
    { name: footerNotionTool, IconComponent: NotionIcon, href: "#" },
    { name: footerCollabTools, IconComponent: MiroIcon, href: "#" }, 
    { name: footerMazeTool, IconComponent: MazeIcon, href: "#" },
    { name: footerHotjarTool, IconComponent: HotjarIcon, href: "#" },
    { name: footerLookbackTool, IconComponent: LookbackIcon, href: "#" },
    { name: footerOptimalWorkshopTool, IconComponent: OptimalWorkshopIcon, href: "#" },
  ];

  const FICTITIOUS_PORTFOLIOS_FOOTER: { name: AppLocalizedString; href: string, colorTheme: 'green' | 'blue' | 'yellow' }[] = [
    { name: { en: '"NovaBank" Finance App Redesign', es: 'Rediseño App Financiera "NovaBank"' }, href: '#novabank', colorTheme: 'green' },
    { name: { en: '"LearnSphere" Educational Platform', es: 'Plataforma Educativa "LearnSphere"' }, href: '#learnsphere', colorTheme: 'blue' },
    { name: { en: '"EcoThreads" Fashion E-commerce', es: 'E-commerce de Moda "EcoThreads"' }, href: '#ecothreads', colorTheme: 'yellow' },
    { 
      name: { 
        en: 'E-commerce app redesign "MODAHOY" to increase conversion', 
        es: 'Rediseño de la app de e-commerce "MODAHOY" para incrementar la conversión'
      },
      href: '#introduccion',
      colorTheme: 'yellow' 
    },
  ];

  const heroBgColorLight = 'bg-spectrum-background-primary-light';
  const heroTextColorLight = 'text-spectrum-text-primary-light';
  const heroBgColorDark = 'dark:bg-spectrum-background-primary-dark'; 
  const heroTextColorDark = 'dark:text-h1-text-dark'; 

  const footerLinkBaseClasses = `flex items-center justify-start text-spectrum-200 no-underline px-spectrum-100 py-spectrum-75 rounded-spectrum-100 w-full
                                 transition-colors duration-150 
                                 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark`;
  
  const getFooterLinkClasses = (colorTheme: 'green' | 'blue' | 'yellow' | 'magenta' | 'default') => {
    switch (colorTheme) {
      case 'green':
        return `hover:bg-footer-link-green-hover-bg-light hover:text-footer-link-green-hover-text-light dark:hover:bg-footer-link-green-hover-bg-dark dark:hover:text-footer-link-green-hover-text-dark`;
      case 'blue':
        return `hover:bg-footer-link-blue-hover-bg-light hover:text-footer-link-blue-hover-text-light dark:hover:bg-footer-link-blue-hover-bg-dark dark:hover:text-footer-link-blue-hover-text-dark`;
      case 'yellow':
        return `hover:bg-footer-link-yellow-hover-bg-light hover:text-footer-link-yellow-hover-text-light dark:hover:bg-footer-link-yellow-hover-bg-dark dark:hover:text-footer-link-yellow-hover-text-dark`;
      case 'magenta':
        return `hover:bg-tag-toolsMagenta-bg-light hover:text-tag-toolsMagenta-text-light dark:hover:bg-tag-toolsMagenta-bg-dark dark:hover:text-tag-toolsMagenta-text-dark`;
      default: 
        return `hover:bg-hover-nav-link-bg-light hover:text-hover-nav-link-text-light dark:hover:bg-hover-nav-link-bg-dark dark:hover:text-hover-nav-link-text-dark`;
    }
  };

  const getFooterTitleClasses = (_section: 'main' | 'about' | 'contact' | 'legal' | 'softwares' | 'social') => {
    const colorClass = 'text-footer-title-main-light dark:text-footer-title-main-dark'; 
    return `text-spectrum-300 font-spectrum-semibold mb-spectrum-100 ${colorClass}`;
  };

  const ghostButtonBaseClasses = `
    font-spectrum-bold transition-colors duration-150 ease-in-out inline-flex items-center justify-center 
    focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-spectrum-background-primary-dark
    bg-transparent 
    text-button-ghost-text-light dark:text-button-ghost-text-dark
    border border-button-ghost-border-light dark:border-button-ghost-border-dark
    hover:bg-button-ghost-hover-bg-light hover:text-button-ghost-hover-text-light
    dark:hover:bg-button-ghost-hover-bg-dark dark:hover:text-button-ghost-hover-text-dark
    focus:ring-button-ghost-border-light dark:focus:ring-button-ghost-border-dark
  `;

  const viewPortfolioButtonClasses = `
    ${ghostButtonBaseClasses}
    py-3 px-6 rounded-full whitespace-nowrap text-center w-full
  `;

  const leftSidebarCurrentWidth = isLeftSidebarCollapsed ? '4rem' : '16rem'; 
  const headerHorizontalGap = '24px'; 

  const showLeftSidebar = isDesktopLayout || isTabletLayout;


  let headerStyle: React.CSSProperties;
  const baseTransition = 'left 0.3s ease-in-out, right 0.3s ease-in-out, width 0.3s ease-in-out, top 0.2s linear, max-width 0.3s ease-in-out';

  if (isDesktopLayout) {
    headerStyle = {
      maxWidth: '1440px',
      width: `calc(100% - 2 * ${headerHorizontalGap})`, 
      left: '50%',
      transform: 'translateX(-50%)',
      transition: baseTransition,
    };
  } else { 
    headerStyle = {
      left: showLeftSidebar ? `calc(${leftSidebarCurrentWidth} + ${headerHorizontalGap})` : headerHorizontalGap,
      right: headerHorizontalGap, 
      width: showLeftSidebar 
            ? `calc(100% - (${leftSidebarCurrentWidth} + ${headerHorizontalGap}) - ${headerHorizontalGap})` 
            : `calc(100% - 2 * ${headerHorizontalGap})`, 
      transition: baseTransition,
    };
  }
  
  const mainContentStyle: React.CSSProperties = {
    paddingTop: `${actualHeaderHeight}px`,
    marginLeft: showLeftSidebar ? leftSidebarCurrentWidth : '0',
    transition: 'margin-left 0.3s ease-in-out, padding-top 0.3s ease-in-out', 
    paddingBottom: '0', 
  };

  const footerSocialLinks: FooterSocialLinkItem[] = [
    { type: 'link', href: LINKEDIN_URL, IconComponent: LinkedInIcon, text: footerLinkedInLink, title: "LinkedIn" },
    { type: 'link', href: "#youtube", IconComponent: YouTubeIcon, text: footerYouTubeLink, title: "YouTube" },
    { type: 'link', href: "#tiktok", IconComponent: TikTokIcon, text: footerTikTokLink, title: "TikTok" },
    { type: 'link', href: "#instagram", IconComponent: InstagramIcon, text: footerInstagramLink, title: "Instagram" },
    { type: 'link', href: "#xtwitter", IconComponent: XTwitterIcon, text: footerXTwitterLink, title: "X (Twitter)" },
    { type: 'divider', text: {en: '', es: ''} },
    { type: 'link', href: "#github", IconComponent: GithubIcon, text: footerGithubLink, title: "Github" },
    { type: 'link', href: "#behance", IconComponent: BehanceIcon, text: footerBehanceLink, title: "Behance" },
    { type: 'link', href: "#dribble", IconComponent: DribbleIcon, text: footerDribbleLink, title: "Dribble" },
    { type: 'divider', text: {en: '', es: ''} },
    { type: 'link', href: "#substack", IconComponent: SubstackIcon, text: footerSubstackLink, title: "Substack" },
    { type: 'link', href: "#medium", IconComponent: MediumIcon, text: footerMediumLink, title: "Medium" },
  ];

  const WHATSAPP_URL_FOOTER = "https://wa.me/1234567890"; 
  const TELEGRAM_URL_FOOTER = "https://t.me/yourusername"; 
  const EMAIL_URL_FOOTER = "mailto:email@example.com"; 

  return (
    <>
      <DynamicHeader
        ref={headerRef}
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        selectLanguage={selectLanguage}
        style={headerStyle} 
        isDesktopLayout={isDesktopLayout}
        isTabletLayout={isTabletLayout}
        isMobileView={isMobileView}
        showLeftSidebar={showLeftSidebar} 
        actualHeaderHeight={actualHeaderHeight}
      />
      {showLeftSidebar && (
          <FloatingNav
            theme={theme}
            language={language}
            tocItems={tocItemsForSidebar}
            activeSectionId={activeSectionId}
            isCollapsed={isLeftSidebarCollapsed}
            toggleCollapse={toggleLeftSidebar}
            isScrolled={isScrolled}
            scrollToSection={scrollToSection}
            scrollToTop={scrollToTop}
            scrollToBottom={scrollToBottom}
            actualHeaderHeight={actualHeaderHeight}
            isTabletLayout={isTabletLayout} 
            socialLinks={SIDEBAR_SOCIAL_LINKS} 
          />
      )}

      <div
        className={`min-h-screen font-sans 
                   bg-spectrum-background-primary-light dark:bg-spectrum-background-primary-dark
                   text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark`}
        style={mainContentStyle}
      >
        <header
          className={`pb-0 flex flex-col justify-center pt-spectrum-400
                     ${heroBgColorLight}
                     ${heroBgColorDark}`}
        >
          <div 
            className="container mx-auto px-spectrum-75 max-w-4xl"
          >
            <h1 className={`text-spectrum-800 sm:text-4xl md:text-5xl font-spectrum-bold text-center leading-relaxed ${heroTextColorLight} ${heroTextColorDark} mb-0`}>
              <span className="block">{pageTitle[language].part1}</span>
              <span className={`block text-4xl sm:text-5xl md:text-6xl font-spectrum-extrabold mt-spectrum-100 md:mt-spectrum-200 mb-spectrum-100 md:mb-spectrum-200 ${heroTextColorLight} ${heroTextColorDark}`}>{pageTitle[language].part2}</span>
              <span className="block">{pageTitle[language].part3}</span>
            </h1>
            
            <hr className="mt-spectrum-600 mb-spectrum-200 border-spectrum-border-default-light dark:border-spectrum-border-default-dark" />
            
            <div className="flex flex-wrap gap-spectrum-100 justify-center">
              {keywordsData[language].map((keyword, index) => (
                <span
                  key={index}
                  className={`text-spectrum-75 font-spectrum-medium px-3 py-1.5 rounded-spectrum-100 tracking-tight
                             ${getTagClasses(keyword.category, theme)}`}
                >
                  {keyword.text}
                </span>
              ))}
            </div>

            <hr className="my-spectrum-200 border-spectrum-border-default-light dark:border-spectrum-border-default-dark" />

          </div>
        </header>

        <main className="container mx-auto px-spectrum-200 md:px-spectrum-300 pt-0 pb-spectrum-400 md:pb-spectrum-500 max-w-4xl">
          <div className="mb-spectrum-500 md:mb-spectrum-600">
            <img
              src={`https://placehold.co/1200x450/${theme === 'light' ? placeholderBgLightHex : placeholderBgDarkHex}/${theme === 'light' ? placeholderTextLightHex : placeholderTextDarkHex}?text=${encodeURIComponent(language==='es' ? 'ModaHoy Reimaginada' : 'ModaHoy Reimagined')}&font=inter`}
              alt={language === 'es' ? "Hero image para caso de estudio ModaHoy, mostrando experiencia de checkout fluida." : "Hero image for ModaHoy e-commerce app redesign case study, showcasing a reimagined, fluid checkout experience."}
              className="w-full h-auto max-h-[400px] object-cover rounded-spectrum-200 shadow-spectrum-100"
            />
          </div>

          <div className="my-spectrum-500 md:my-spectrum-600 max-w-4xl mx-auto px-0">
            <div className={`aspect-[21/9] flex items-center justify-center shadow-spectrum-100 rounded-spectrum-200 overflow-hidden border border-spectrum-border-default-light dark:border-spectrum-border-default-dark bg-transparent`}>
                <p className="text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark text-spectrum-200">
                    {language === 'es' ? 'Espacio para Imagen Hero (21:9)' : 'Hero Image Placeholder (21:9)'}
                </p>
            </div>
          </div>

          <div className="mt-spectrum-500 md:mt-spectrum-600 mb-spectrum-500 md:mb-spectrum-600">
              <div className={`rounded-spectrum-200 shadow-spectrum-100 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark bg-transparent`}>
                  <div className="aspect-[16/9] flex items-center justify-center">
                      <p className="text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark text-spectrum-200">{language === 'es' ? 'Espacio para Video (16:9)' : 'Video Embed Placeholder (16:9)'}</p>
                  </div>
              </div>
          </div>

          <div className="my-spectrum-400 md:my-spectrum-500">
            <TableOfContentsSection
              id={TABLE_OF_CONTENTS_ID}
              tocItems={tocItemsForContentDisplay}
              language={language}
            />
          </div>

          <div className="space-y-spectrum-400 md:space-y-spectrum-500">
            {SECTIONS_DATA.map(section => (
              <SectionCard
                key={section.id}
                id={section.id}
                title={section.title[language]}
                emoji={section.emoji}
                content={section.content(language)}
                imageUrl={section.imageUrl}
              />
            ))}
          </div>

          <div className="text-center mt-spectrum-600 md:mt-24 py-spectrum-500 md:py-spectrum-500 border-t border-spectrum-border-default-light dark:border-spectrum-border-default-dark">
            <h3 className="text-spectrum-600 font-spectrum-bold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-300">{interestedTitle[language]}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-spectrum-200 max-w-sm mx-auto">
              <a
                href="#more-case-studies" 
                className={viewPortfolioButtonClasses} 
              >
                <GlobeIcon className="w-5 h-5 mr-spectrum-100 stroke-current" />
                {ctaButtonViewPortfolio[language]}
              </a>
              <CTAButton
                text={ctaButtonContactMe}
                lang={language}
                href={LINKEDIN_URL}
                className="w-full"
                icon={LinkedInIcon}
              />
            </div>
          </div>
        </main>

        <div className="bg-spectrum-background-primary-light dark:bg-spectrum-background-primary-dark border-t border-spectrum-border-default-light dark:border-spectrum-border-default-dark text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">
          <div className="container mx-auto px-spectrum-200 md:px-spectrum-300 py-spectrum-500 md:py-spectrum-500 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-spectrum-400"> 
              <div>
                <h3 className={getFooterTitleClasses('main')}>{footerCaseStudiesTitle[language]}</h3>
                <ul className="space-y-spectrum-75">
                  {FICTITIOUS_PORTFOLIOS_FOOTER.map(item => (
                    <li key={item.name.es}>
                      <a
                        href={item.href}
                        className={`${footerLinkBaseClasses} ${getFooterLinkClasses(item.colorTheme)}`}
                      >
                        {item.name[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={getFooterTitleClasses('about')}>{footerAboutMeTitle[language]}</h3>
                <ul className="space-y-spectrum-75">
                  <li>
                    <a
                      href="#acerca-de-mi"
                      className={`${footerLinkBaseClasses} ${getFooterLinkClasses('green')}`}
                    >
                      <PersonIcon className="w-5 h-5 mr-spectrum-100 stroke-current" />
                      {footerKnowMyStoryLink[language]}
                    </a>
                  </li>
                  <li>
                    <a
                      href="cv.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${footerLinkBaseClasses} ${getFooterLinkClasses('green')} border border-current flex items-center justify-between w-full`}
                    >
                      <span className="flex items-center">
                        <DownloadIcon className="w-5 h-5 mr-spectrum-100 fill-current" />
                        {footerDownloadCVLink[language]}
                      </span>
                      <SecurityShieldIcon className="w-5 h-5 ml-spectrum-100 text-tag-accessibilityGreen-text-light dark:text-tag-accessibilityGreen-text-dark" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#more-case-studies"
                       className={`${footerLinkBaseClasses} ${getFooterLinkClasses('green')}`}
                    >
                       <GlobeIcon className="w-5 h-5 mr-spectrum-100 stroke-current" />
                       {ctaButtonViewPortfolio[language]}
                    </a>
                  </li>
                </ul>
                <div className="mt-spectrum-300"> 
                  <h3 className={getFooterTitleClasses('contact')}>{footerSocialNetworksTitle[language]}</h3>
                  <ul className="space-y-spectrum-75">
                    <li>
                      <a href={WHATSAPP_URL_FOOTER} target="_blank" rel="noopener noreferrer" className={`${footerLinkBaseClasses} ${getFooterLinkClasses('green')}`}>
                        {footerWhatsappLink[language]}
                      </a>
                    </li>
                    <li>
                      <a href={TELEGRAM_URL_FOOTER} target="_blank" rel="noopener noreferrer" className={`${footerLinkBaseClasses} ${getFooterLinkClasses('green')}`}>
                        {footerTelegramLink[language]}
                      </a>
                    </li>
                    <li>
                      <a href={EMAIL_URL_FOOTER} className={`${footerLinkBaseClasses} ${getFooterLinkClasses('green')}`}>
                        {footerEmailLink[language]}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className={getFooterTitleClasses('social')}>{footerSocialNetworksTitle[language]}</h3>
                 <ul className="space-y-spectrum-75">
                  {footerSocialLinks.map((social, index) => {
                    if (social.type === 'divider') {
                      return <li key={`divider-${index}`}><hr className="my-spectrum-100 border-spectrum-border-default-light dark:border-spectrum-border-default-dark" /></li>;
                    }
                    if (social.type === 'link' && social.IconComponent && social.text && social.title) {
                        return (
                        <li key={social.title}>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${footerLinkBaseClasses} ${getFooterLinkClasses('yellow')}`}
                            title={social.title}
                          >
                            <social.IconComponent className="w-5 h-5 fill-current" />
                            <span className="ml-spectrum-100">{social.text[language]}</span>
                          </a>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
              <div>
                <h3 className={getFooterTitleClasses('softwares')}>{footerSoftwaresTitle[language]}</h3>
                <ul className="space-y-spectrum-75">
                  {footerSoftwareList.map(item => (
                    <li key={item.name.es}>
                      <a
                        href={item.href}
                        className={`${footerLinkBaseClasses} ${getFooterLinkClasses('magenta')}`}
                        title={item.name[language]}
                      >
                        <item.IconComponent className="w-5 h-5 fill-current mr-spectrum-100" />
                        {item.name[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer className="py-spectrum-200 text-spectrum-100 font-spectrum-regular bg-spectrum-background-primary-light dark:bg-spectrum-background-primary-dark text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark border-t border-spectrum-border-default-light dark:border-spectrum-border-default-dark">
          <div className="container mx-auto px-spectrum-200 md:px-spectrum-300 flex flex-col sm:flex-row justify-between items-center sm:items-baseline">
            <p className="mb-spectrum-100 sm:mb-0">&copy; {new Date().getFullYear()} Axel Hunger. {footerCopyrightText[language]}</p>
            <div className="flex space-x-spectrum-200">
              <a
                href="#terms-and-conditions"
                className={`${footerLinkBaseClasses} ${getFooterLinkClasses('blue')}`}
              >
                {footerTermsLink[language]}
              </a>
              <a
                href="#privacy-policy"
                className={`${footerLinkBaseClasses} ${getFooterLinkClasses('blue')}`}
              >
                {footerPrivacyLink[language]}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default App;