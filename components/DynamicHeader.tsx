

import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Theme } from '../App';
import { Language, LocalizedString } from '../types';
import Logo from './Logo';
import CloseIcon from './CloseIcon';
import LinkedInIcon from './LinkedInIcon';
import TikTokIcon from './TikTokIcon';
import YouTubeIcon from './YouTubeIcon';
import InstagramIcon from './InstagramIcon';
import XTwitterIcon from './XTwitterIcon';
import GithubIcon from './GithubIcon';
import BehanceIcon from './BehanceIcon';
import DribbleIcon from './DribbleIcon';
import MediumIcon from './MediumIcon';
import SubstackIcon from './SubstackIcon';
import WhatsAppIcon from './WhatsAppIcon'; 
import TelegramIcon from './TelegramIcon'; 
import EmailIcon from './EmailIcon';     
import Tooltip from './Tooltip';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
import TranslateIcon from './TranslateIcon';
import ChevronDownIcon from './ChevronDownIcon';
import ChevronRightIcon from './ChevronRightIcon';
import ChevronLeftIcon from './ChevronLeftIcon';
import DownloadIcon from './DownloadIcon';
import CaseStudyCard from './CaseStudyCard';
import GlobeIcon from './GlobeIcon';
import PersonIcon from './PersonIcon';
import HamburgerIcon from './HamburgerIcon';
import CheckIcon from './CheckIcon'; // Added CheckIcon import


// Import existing software icons
import FigmaIcon from './FigmaIcon';
import NotionIcon from './NotionIcon';
import NotebookLMIcon from './NotebookLMIcon';
import GoogleAiStudioIcon from './GoogleAiStudioIcon';
import CopilotIcon from './CopilotIcon';
import ChatGptIcon from './ChatGptIcon';
import DeepseekIcon from './DeepseekIcon';
import GrokIcon from './GrokIcon';
import GithubCopilotIcon from './GithubCopilotIcon';
import ClaudeIcon from './ClaudeIcon';
import GoogleCloudConsoleIcon from './GoogleCloudConsoleIcon';
import VertexAiIcon from './VertexAiIcon';
import MazeIcon from './MazeIcon';
import UserberryIcon from './UserberryIcon';
import GoogleFormIcon from './GoogleFormIcon';
import SurveyMonkeyIcon from './SurveyMonkeyIcon';
import FigjamIcon from './FigjamIcon';
import MiroIcon from './MiroIcon';
import MuralIcon from './MuralIcon';
import UxTweakIcon from './UxTweakIcon';
import OptimalWorkshopIcon from './OptimalWorkshopIcon';
import OneCalendarIcon from './OneCalendarIcon';
import GoogleCalendarIcon from './GoogleCalendarIcon';
import NotionCalendarIcon from './NotionCalendarIcon';
import ImageFxIcon from './ImageFxIcon';
import WhiskIcon from './WhiskIcon';

// Import NEW software icons
import GeminiIcon from './GeminiIcon';
import GoogleDriveIcon from './GoogleDriveIcon';
import DropboxIcon from './DropboxIcon';
import Microsoft365Icon from './Microsoft365Icon';
import MonicaIcon from './MonicaIcon';
import GoogleMeetIcon from './GoogleMeetIcon';
import ZoomIcon from './ZoomIcon';
import TactiqIcon from './TactiqIcon';
import ReadAiIcon from './ReadAiIcon';


interface CaseStudyPopoverItem {
  name: LocalizedString;
  subtitle: LocalizedString;
  tags: string[];
  href: string;
  imagePlaceholderText: LocalizedString;
}

const FICTITIOUS_PORTFOLIOS: CaseStudyPopoverItem[] = [
  {
    name: { es: 'Rediseño App Financiera "NovaBank"', en: '"NovaBank" Finance App Redesign' },
    subtitle: { es: 'Problema con el proceso de registro.', en: 'Issue with the registration process.'},
    tags: ['Fintech', 'UX Research', 'Métricas', 'Metodologías cuantitativas y cualitativas'],
    href: '#novabank',
    imagePlaceholderText: { es: 'Placeholder NovaBank', en: 'NovaBank Placeholder'},
  },
  {
    name: { es: 'Rediseño del sitio web LearnSphere', en: 'LearnSphere Website Redesign' },
    subtitle: { es: 'Problemas de usabilidad y accesibilidad', en: 'Usability and accessibility issues'},
    tags: ['Ed-Tech', 'UX/UI', 'UI KIT', 'Design System', 'Design Thinking'],
    href: '#learnsphere',
    imagePlaceholderText: { es: 'Placeholder LearnSphere', en: 'LearnSphere Placeholder'},
  },
  {
    name: { es: 'E-commerce de Moda "EcoThreads"', en: '"EcoThreads" Fashion E-commerce' },
    subtitle: { es: 'Innovación en la experiencia del usuario', en: 'Innovation in user experience'},
    tags: ['E-commerce', 'Service Design', 'Customer Experience', 'Experience mapping'],
    href: '#ecothreads',
    imagePlaceholderText: { es: 'Placeholder EcoThreads', en: 'EcoThreads Placeholder'},
  },
  {
    name: { es: 'Rediseño de la app E-commerce "Moda hoy"', en: '"Moda hoy" E-commerce App Redesign' },
    subtitle: { es: 'Optimización de la conversión y experiencia de usuario.', en: 'Conversion and user experience optimization.'},
    tags: ['E-commerce', 'Product Designer', 'Start up', 'Métricas', 'Discovery', 'Delivery'],
    href: '#introduccion',
    imagePlaceholderText: { es: 'Vista Previa Rediseño Moda hoy', en: 'Moda hoy Redesign Preview'},
  }
];

const LINKEDIN_URL = "https://www.linkedin.com/in/yourusername";
const WHATSAPP_URL = "https://wa.me/1234567890"; // Replace with actual number
const TELEGRAM_URL = "https://t.me/yourusername"; // Replace with actual username
const EMAIL_URL = "mailto:email@example.com"; // Replace with actual email

interface ContactLinkItem {
  type: 'link' | 'divider';
  href?: string;
  IconComponent?: React.FC<{ className?: string }>;
  label: LocalizedString;
  brandColorClass?: string;
}

const directContactItemsForAboutMe: ContactLinkItem[] = [ 
  { type: 'link', href: WHATSAPP_URL, IconComponent: WhatsAppIcon, label: { es: 'WhatsApp', en: 'WhatsApp' }, brandColorClass: 'text-green-500' },
  { type: 'link', href: TELEGRAM_URL, IconComponent: TelegramIcon, label: { es: 'Telegram', en: 'Telegram' }, brandColorClass: 'text-blue-500' },
  { type: 'link', href: EMAIL_URL, IconComponent: EmailIcon, label: { es: 'Email', en: 'Email' }, brandColorClass: 'text-gray-500' },
];

const socialMediaItemsForAboutMe: ContactLinkItem[] = [ 
  { type: 'link', href: LINKEDIN_URL, IconComponent: LinkedInIcon, label: { es: 'LinkedIn', en: 'LinkedIn' }, brandColorClass: 'text-brand-linkedin' },
  { type: 'link', href: "#youtube", IconComponent: YouTubeIcon, label: { es: 'YouTube', en: 'YouTube' }, brandColorClass: 'text-brand-youtube' },
  { type: 'link', href: "#tiktok", IconComponent: TikTokIcon, label: { es: 'TikTok', en: 'TikTok' }, brandColorClass: 'text-brand-tiktok-light dark:text-brand-tiktok-dark' },
  { type: 'link', href: "#instagram", IconComponent: InstagramIcon, label: { es: 'Instagram', en: 'Instagram' }, brandColorClass: 'text-brand-instagram' },
  { type: 'link', href: "#xtwitter", IconComponent: XTwitterIcon, label: { es: 'X (Twitter)', en: 'X (Twitter)' }, brandColorClass: 'text-brand-xtwitter-light dark:text-brand-xtwitter-dark' },
  { type: 'divider', label: {es:'', en:''} },
  { type: 'link', href: "#github", IconComponent: GithubIcon, label: { es: 'Github', en: 'Github' }, brandColorClass: 'text-brand-github-light dark:text-brand-github-dark' },
  { type: 'link', href: "#behance", IconComponent: BehanceIcon, label: { es: 'Behance', en: 'Behance' }, brandColorClass: 'text-brand-behance' },
  { type: 'link', href: "#dribble", IconComponent: DribbleIcon, label: { es: 'Dribble', en: 'Dribble' }, brandColorClass: 'text-brand-dribble' },
  { type: 'divider', label: {es:'', en:''} },
  { type: 'link', href: "#substack", IconComponent: SubstackIcon, label: { es: 'Substack', en: 'Substack' }, brandColorClass: 'text-brand-substack-light dark:text-brand-substack-dark' },
  { type: 'link', href: "#medium", IconComponent: MediumIcon, label: { es: 'Medium', en: 'Medium' }, brandColorClass: 'text-brand-medium-light dark:text-brand-medium-dark' },
];

const socialMediaItemsForHeaderDropdown: ContactLinkItem[] = [
  { type: 'link', href: WHATSAPP_URL, IconComponent: WhatsAppIcon, label: { es: 'WhatsApp', en: 'WhatsApp' }, brandColorClass: 'text-green-500' },
  { type: 'link', href: TELEGRAM_URL, IconComponent: TelegramIcon, label: { es: 'Telegram', en: 'Telegram' }, brandColorClass: 'text-blue-500' },
  { type: 'link', href: EMAIL_URL, IconComponent: EmailIcon, label: { es: 'Email', en: 'Email' }, brandColorClass: 'text-gray-500' },
  { type: 'divider', label: {es:'', en:''} },
  ...socialMediaItemsForAboutMe 
];


interface SoftwareToolWithLabel {
  name: LocalizedString;
  IconComponent: React.FC<{ className?: string }>;
  href?: string;
}

interface SoftwareCategory {
  title: LocalizedString;
  tools: SoftwareToolWithLabel[];
}

const categorizedSoftwareToolsList: SoftwareCategory[] = [
  {
    title: { es: "Inteligencias artificiales", en: "Artificial Intelligence" },
    tools: [
      { name: { es: 'Google AI Studio', en: 'Google AI Studio' }, IconComponent: GoogleAiStudioIcon },
      { name: { es: 'NotebookLM', en: 'NotebookLM' }, IconComponent: NotebookLMIcon },
      { name: { es: 'Gemini', en: 'Gemini' }, IconComponent: GeminiIcon },
      { name: { es: 'Google Cloud', en: 'Google Cloud' }, IconComponent: GoogleCloudConsoleIcon },
      { name: { es: 'MS Copilot', en: 'MS Copilot' }, IconComponent: CopilotIcon },
      { name: { es: 'Chat GPT', en: 'Chat GPT' }, IconComponent: ChatGptIcon },
      { name: { es: 'Deepseek', en: 'Deepseek' }, IconComponent: DeepseekIcon },
      { name: { es: 'Grok', en: 'Grok' }, IconComponent: GrokIcon },
      { name: { es: 'Github Copilot', en: 'Github Copilot' }, IconComponent: GithubCopilotIcon },
      { name: { es: 'Claude', en: 'Claude' }, IconComponent: ClaudeIcon },
      { name: { es: 'Monica', en: 'Monica' }, IconComponent: MonicaIcon },
    ]
  },
  {
    title: { es: "Herramientas para UX/UI", en: "UX/UI Tools" },
    tools: [
      { name: { es: 'Figma', en: 'Figma' }, IconComponent: FigmaIcon },
      { name: { es: 'Figjam', en: 'Figjam' }, IconComponent: FigjamIcon },
      { name: { es: 'Miro', en: 'Miro' }, IconComponent: MiroIcon },
      { name: { es: 'Mural', en: 'Mural' }, IconComponent: MuralIcon },
      { name: { es: 'Maze', en: 'Maze' }, IconComponent: MazeIcon },
      { name: { es: 'Userberry', en: 'Userberry' }, IconComponent: UserberryIcon },
      { name: { es: 'Google Form', en: 'Google Form' }, IconComponent: GoogleFormIcon },
      { name: { es: 'Survey Monkey', en: 'Survey Monkey' }, IconComponent: SurveyMonkeyIcon },
      { name: { es: 'UX Tweak', en: 'UX Tweak' }, IconComponent: UxTweakIcon },
      { name: { es: 'Optimal Workshop', en: 'Optimal Workshop' }, IconComponent: OptimalWorkshopIcon },
      { name: { es: 'Whisk', en: 'Whisk' }, IconComponent: WhiskIcon },
      { name: { es: 'Vertex AI', en: 'Vertex AI' }, IconComponent: VertexAiIcon },
      { name: { es: 'Image FX', en: 'Image FX' }, IconComponent: ImageFxIcon },
      { name: { es: 'Google Meet', en: 'Google Meet' }, IconComponent: GoogleMeetIcon },
      { name: { es: 'Zoom', en: 'Zoom' }, IconComponent: ZoomIcon },
      { name: { es: 'Tactiq', en: 'Tactiq' }, IconComponent: TactiqIcon },
      { name: { es: 'Read AI', en: 'Read AI' }, IconComponent: ReadAiIcon },
    ]
  },
  {
    title: { es: "Gestión y productividad", en: "Management & Productivity" },
    tools: [
      { name: { es: 'Notion', en: 'Notion' }, IconComponent: NotionIcon },
      { name: { es: 'One Calendar', en: 'One Calendar' }, IconComponent: OneCalendarIcon },
      { name: { es: 'Google Calendar', en: 'Google Calendar' }, IconComponent: GoogleCalendarIcon },
      { name: { es: 'Notion Calendar', en: 'Notion Calendar' }, IconComponent: NotionCalendarIcon },
      { name: { es: 'Google Drive', en: 'Google Drive' }, IconComponent: GoogleDriveIcon },
      { name: { es: 'Dropbox', en: 'Dropbox' }, IconComponent: DropboxIcon },
      { name: { es: 'Microsoft 365', en: 'Microsoft 365' }, IconComponent: Microsoft365Icon },
    ]
  }
];

const appLocalizedStrings = {
    videoImagePlaceholder: { es: 'Espacio para Video/Imagen (16:9)', en: 'Video/Image Placeholder (16:9)' },
    virusFree: { es: 'Libre de virus', en: 'Virus Free' }, 
};

type MobileSubPopoverType = 'caseStudies' | 'aboutMe' | 'softwares';
type TabletSubPopoverType = 'caseStudies' | 'aboutMe' | 'softwares';


interface DynamicHeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  selectLanguage: (lang: Language) => void;
  style?: React.CSSProperties;
  isDesktopLayout: boolean;
  isTabletLayout: boolean;
  isMobileView: boolean; // Added isMobileView prop
  showLeftSidebar: boolean;
  actualHeaderHeight: number;
}

const PopoverCloseButton: React.FC<{ onClick: () => void; language: Language; className?: string }> = ({ onClick, language, className }) => {
  const tooltipText = language === 'es' ? 'Cerrar' : 'Close';
  return (
    <Tooltip text={tooltipText} position="bottom">
      <button
        type="button"
        aria-label={tooltipText}
        onClick={onClick}
        className={`group w-11 h-11 flex items-center justify-center rounded-full
                    bg-gray-50 dark:bg-gray-800
                    border border-spectrum-border-default-light dark:border-spectrum-border-default-dark
                    hover:bg-hover-nav-link-bg-light dark:hover:bg-sidebar-nav-item-hover-bg-dark
                    focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-spectrum-border-focus-light dark:focus:ring-spectrum-border-focus-dark dark:focus:ring-offset-spectrum-background-secondary-dark
                    transition-colors duration-150 ease-in-out
                    ${className || ''}`}
      >
        <CloseIcon className="w-6 h-6 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-hover-nav-link-text-light dark:group-hover:text-sidebar-nav-item-hover-text-dark transition-colors" />
      </button>
    </Tooltip>
  );
};

const SubPopoverBackButton: React.FC<{ onClick: () => void; language: Language; labelOverride?: LocalizedString, className?: string }> = ({ onClick, language, labelOverride, className }) => {
  const defaultLabel: LocalizedString = { es: 'Volver', en: 'Back' };
  const currentLabel = labelOverride ? labelOverride[language] : defaultLabel[language];
  return (
    <Tooltip text={currentLabel} position="bottom">
        <button
          type="button"
          aria-label={currentLabel}
          onClick={onClick}
          className={`group w-11 h-11 flex items-center justify-center rounded-full
                      bg-gray-50 dark:bg-gray-800
                      border border-spectrum-border-default-light dark:border-spectrum-border-default-dark
                      hover:bg-hover-nav-link-bg-light dark:hover:bg-sidebar-nav-item-hover-bg-dark
                      focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-spectrum-border-focus-light dark:focus:ring-spectrum-border-focus-dark dark:focus:ring-offset-spectrum-background-secondary-dark
                      transition-colors duration-150 ease-in-out
                      ${className || ''}`}
        >
          <ChevronLeftIcon className="w-5 h-5 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-hover-nav-link-text-light dark:group-hover:text-sidebar-nav-item-hover-text-dark transition-colors" />
        </button>
    </Tooltip>
  );
};


const ThemeToggleButton = forwardRef<HTMLButtonElement, Pick<DynamicHeaderProps, 'theme' | 'toggleTheme' | 'language'>>(({ theme, toggleTheme, language }, ref) => {
  const isDark = theme === 'dark';
  const tooltipText = isDark
    ? (language === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode')
    : (language === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode');

  const iconBaseColor = 'text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark';
  const iconHoverColor = 'group-hover:text-hover-nav-link-text-light dark:group-hover:text-sidebar-nav-item-hover-text-dark';
  const bgHover = 'hover:bg-hover-nav-link-bg-light dark:hover:bg-sidebar-nav-item-hover-bg-dark';

  return (
    <Tooltip text={tooltipText} position="bottom">
      <button
        ref={ref}
        type="button"
        aria-label={tooltipText}
        onClick={toggleTheme}
        className={`group w-11 h-11 flex items-center justify-center rounded-full bg-transparent
                    transition-colors duration-150 ease-in-out
                    focus:outline-none focus:ring-1 focus:ring-spectrum-border-focus-light dark:focus:ring-spectrum-border-focus-dark focus:ring-offset-1 dark:focus:ring-offset-spectrum-background-primary-dark
                    ${bgHover}`}
      >
        {isDark ? <SunIcon className={`w-6 h-6 ${iconBaseColor} ${iconHoverColor} transition-colors`} /> : <MoonIcon className={`w-6 h-6 ${iconBaseColor} ${iconHoverColor} transition-colors`} />}
      </button>
    </Tooltip>
  );
});
ThemeToggleButton.displayName = 'ThemeToggleButton';

const LanguageToggleButton = forwardRef<HTMLButtonElement, Pick<DynamicHeaderProps, 'language'> & { onClick: () => void; isOpen: boolean }>(
  ({ language, onClick, isOpen }, ref) => {
    const tooltipText = language === 'es' ? 'Traducir idioma' : 'Translate language';
    const iconBaseColor = 'text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark';

    return (
      <Tooltip text={tooltipText} position="bottom">
        <button
          ref={ref}
          type="button"
          aria-label={tooltipText}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={onClick}
          className={`group w-11 h-11 flex items-center justify-start pl-spectrum-75 rounded-full bg-transparent
                      transition-colors duration-150 ease-in-out
                      focus:outline-none focus:ring-1 focus:ring-spectrum-border-focus-light dark:focus:ring-spectrum-border-focus-dark focus:ring-offset-1 dark:focus:ring-offset-spectrum-background-primary-dark
                      hover:bg-hover-nav-link-bg-light dark:hover:bg-sidebar-nav-item-hover-bg-dark
                      `}
        >
          <TranslateIcon className={`w-5 h-5 ${iconBaseColor} group-hover:text-hover-nav-link-text-light dark:group-hover:text-sidebar-nav-item-hover-text-dark transition-colors`} />
          <ChevronDownIcon className={`w-4 h-4 ml-spectrum-25 ${iconBaseColor} group-hover:text-hover-nav-link-text-light dark:group-hover:text-sidebar-nav-item-hover-text-dark transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
      </Tooltip>
    );
  }
);
LanguageToggleButton.displayName = 'LanguageToggleButton';

const SocialToggleButton = forwardRef<HTMLButtonElement, Pick<DynamicHeaderProps, 'language'> & { onClick: () => void; isOpen: boolean }>(
  ({ language, onClick, isOpen }, ref) => {
    const tooltipText = language === 'es' ? 'Redes Sociales' : 'Social Media';
    const iconBaseColor = 'text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark';

    return (
      <Tooltip text={tooltipText} position="bottom">
        <button
          ref={ref}
          type="button"
          aria-label={tooltipText}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={onClick}
          className={`group w-11 h-11 flex items-center justify-start pl-spectrum-75 rounded-full bg-transparent
                      transition-colors duration-150 ease-in-out
                      focus:outline-none focus:ring-1 focus:ring-spectrum-border-focus-light dark:focus:ring-spectrum-border-focus-dark focus:ring-offset-1 dark:focus:ring-offset-spectrum-background-primary-dark
                      hover:bg-hover-nav-link-bg-light dark:hover:bg-sidebar-nav-item-hover-bg-dark
                      `}
        >
          <LinkedInIcon className={`w-5 h-5 ${iconBaseColor} group-hover:text-hover-nav-link-text-light dark:group-hover:text-sidebar-nav-item-hover-text-dark transition-colors`} />
          <ChevronDownIcon className={`w-4 h-4 ml-spectrum-25 ${iconBaseColor} group-hover:text-hover-nav-link-text-light dark:group-hover:text-sidebar-nav-item-hover-text-dark transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
      </Tooltip>
    );
  }
);
SocialToggleButton.displayName = 'SocialToggleButton';


const popoverSectionTitleClasses = 'text-spectrum-400 font-spectrum-bold text-spectrum-text-primary-light dark:text-footer-title-main-dark';
const softwareCategoryTitleStyle = `text-spectrum-200 font-spectrum-semibold text-near-black dark:text-near-white`;

const RenderSoftwareGrid: React.FC<{ categories: SoftwareCategory[]; language: Language }> = ({ categories, language }) => (
  <div className="space-y-spectrum-200">
    {categories.map((category, catIndex) => (
      <div key={category.title.en}>
        {catIndex > 0 && (
          <hr className="my-spectrum-200 border-spectrum-border-default-light dark:border-spectrum-border-default-dark" />
        )}
        <h4 className={`${softwareCategoryTitleStyle} mb-spectrum-200`}>
          {category.title[language]}
        </h4>
        <div className="grid grid-cols-adaptive gap-x-spectrum-100 gap-y-spectrum-100 justify-items-center">
          {category.tools.map((tool) => (
            <div
              key={tool.name.en}
              className="flex flex-col items-center text-center w-[68px]"
              aria-label={tool.name[language]}
            >
              <tool.IconComponent className="w-6 h-6 text-black dark:text-white mb-spectrum-50" />
              <span className="text-xs text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark line-clamp-2 leading-tight">
                {tool.name[language]}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);


export const DynamicHeader = forwardRef<HTMLElement, DynamicHeaderProps>(({
    theme, toggleTheme, language, selectLanguage, style, isDesktopLayout, isTabletLayout, isMobileView, showLeftSidebar, actualHeaderHeight
}, ref) => {
  const [isCaseStudiesPopoverOpen, setIsCaseStudiesPopoverOpen] = useState(false);
  const [isLanguagePopoverOpen, setIsLanguagePopoverOpen] = useState(false);
  const [isAboutMePopoverOpen, setIsAboutMePopoverOpen] = useState(false);
  const [isSoftwaresPopoverOpen, setIsSoftwaresPopoverOpen] = useState(false);
  const [isSocialPopoverOpen, setIsSocialPopoverOpen] = useState(false);

  const [isMobileMenuPopoverOpen, setIsMobileMenuPopoverOpen] = useState(false);
  const [mobileSubPopoverType, setMobileSubPopoverType] = useState<null | MobileSubPopoverType>(null);

  const [isTabletMenuPopoverOpen, setIsTabletMenuPopoverOpen] = useState(false);
  const [tabletMenuSubPopoverType, setTabletMenuSubPopoverType] = useState<null | TabletSubPopoverType>(null);


  const [currentHeaderRect, setCurrentHeaderRect] = useState<DOMRect | null>(null);

  const caseStudiesPopoverRef = useRef<HTMLDivElement>(null);
  const languagePopoverRef = useRef<HTMLDivElement>(null);
  const aboutMePopoverRef = useRef<HTMLDivElement>(null);
  const softwaresPopoverRef = useRef<HTMLDivElement>(null);
  const socialPopoverRef = useRef<HTMLDivElement>(null);

  const languageToggleRef = useRef<HTMLButtonElement>(null);
  const socialToggleRef = useRef<HTMLButtonElement>(null);
  const rightControlsGroupRef = useRef<HTMLDivElement>(null);

  const aboutMeToggleRef = useRef<HTMLButtonElement>(null);
  const caseStudiesToggleRef = useRef<HTMLButtonElement>(null);
  const softwaresToggleRef = useRef<HTMLButtonElement>(null);
  const pillHeaderRef = useRef<HTMLDivElement>(null);
  
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuPopoverRef = useRef<HTMLDivElement>(null);
  const mobileCaseStudiesSubPopoverRef = useRef<HTMLDivElement>(null);
  const mobileAboutMeSubPopoverRef = useRef<HTMLDivElement>(null);
  const mobileSoftwaresSubPopoverRef = useRef<HTMLDivElement>(null);

  const tabletMenuPopoverRef = useRef<HTMLDivElement>(null);
  const tabletCaseStudiesSubPopoverRef = useRef<HTMLDivElement>(null);
  const tabletAboutMeSubPopoverRef = useRef<HTMLDivElement>(null);
  const tabletSoftwaresSubPopoverRef = useRef<HTMLDivElement>(null);

  const [nonDesktopLogoStyle, setNonDesktopLogoStyle] = useState<React.CSSProperties>({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '0px', // Initial placeholder, will be calculated
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out, left 0.2s ease-in-out',
  });


  const forwardedHeaderRef = ref as React.RefObject<HTMLElement>;

  useEffect(() => {
    if (!isDesktopLayout && mobileMenuButtonRef.current) {
        const buttonEl = mobileMenuButtonRef.current;
        const logoLeftPosition = buttonEl.offsetLeft + buttonEl.offsetWidth + 8;
        setNonDesktopLogoStyle(prev => ({
            ...prev,
            left: `${logoLeftPosition}px`,
            opacity: 1,
        }));
    } else if (isDesktopLayout) {
        setNonDesktopLogoStyle(prev => ({ ...prev, opacity: 0, left: '0px' }));
    }
  }, [isDesktopLayout, language, theme, showLeftSidebar, actualHeaderHeight, isMobileView, isTabletLayout]); // Added isMobileView & isTabletLayout

  const updateHeaderRect = () => {
    if (forwardedHeaderRef.current) {
      setCurrentHeaderRect(forwardedHeaderRef.current.getBoundingClientRect());
    }
  };

  const closeAllPopovers = (excludeMobileMain: boolean = false, excludeMobileSub: boolean = false, excludeTabletMain: boolean = false, excludeTabletSub: boolean = false) => {
    setIsAboutMePopoverOpen(false);
    setIsCaseStudiesPopoverOpen(false);
    setIsSoftwaresPopoverOpen(false);
    setIsLanguagePopoverOpen(false);
    setIsSocialPopoverOpen(false);
    if (!excludeMobileMain) setIsMobileMenuPopoverOpen(false);
    if (!excludeMobileSub) setMobileSubPopoverType(null);
    if (!excludeTabletMain) setIsTabletMenuPopoverOpen(false);
    if (!excludeTabletSub) setTabletMenuSubPopoverType(null);
  }

  useEffect(() => {
    const body = document.body;
    const anyDesktopPopoverOpen = isCaseStudiesPopoverOpen || isAboutMePopoverOpen || isSoftwaresPopoverOpen || isLanguagePopoverOpen || isSocialPopoverOpen;
    const anyMobilePopoverOpen = isMobileMenuPopoverOpen || !!mobileSubPopoverType;
    const anyTabletPopoverOpen = isTabletMenuPopoverOpen || !!tabletMenuSubPopoverType;
    
    const anyPopoverIsOpen = anyDesktopPopoverOpen || anyMobilePopoverOpen || anyTabletPopoverOpen;

    if (anyPopoverIsOpen) {
      body.classList.add('no-page-scroll');
    } else {
      body.classList.remove('no-page-scroll');
    }

    return () => {
      body.classList.remove('no-page-scroll');
    };
  }, [isCaseStudiesPopoverOpen, isAboutMePopoverOpen, isSoftwaresPopoverOpen, isLanguagePopoverOpen, isSocialPopoverOpen, isMobileMenuPopoverOpen, mobileSubPopoverType, isTabletMenuPopoverOpen, tabletMenuSubPopoverType]);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (caseStudiesPopoverRef.current && !caseStudiesPopoverRef.current.contains(target) && caseStudiesToggleRef.current && !caseStudiesToggleRef.current.contains(target)) setIsCaseStudiesPopoverOpen(false);
      if (aboutMePopoverRef.current && !aboutMePopoverRef.current.contains(target) && aboutMeToggleRef.current && !aboutMeToggleRef.current.contains(target)) setIsAboutMePopoverOpen(false);
      if (softwaresPopoverRef.current && !softwaresPopoverRef.current.contains(target) && softwaresToggleRef.current && !softwaresToggleRef.current.contains(target)) setIsSoftwaresPopoverOpen(false);
      if (languagePopoverRef.current && !languagePopoverRef.current.contains(target) && languageToggleRef.current && !languageToggleRef.current.contains(target)) setIsLanguagePopoverOpen(false);
      if (socialPopoverRef.current && !socialPopoverRef.current.contains(target) && socialToggleRef.current && !socialToggleRef.current.contains(target)) setIsSocialPopoverOpen(false);

      const isClickInsideMobileButton = mobileMenuButtonRef.current && mobileMenuButtonRef.current.contains(target);

      if (!isClickInsideMobileButton) {
        if (tabletMenuSubPopoverType) {
            let subPopoverRef = null;
            if (tabletMenuSubPopoverType === 'caseStudies') subPopoverRef = tabletCaseStudiesSubPopoverRef;
            else if (tabletMenuSubPopoverType === 'aboutMe') subPopoverRef = tabletAboutMeSubPopoverRef;
            else if (tabletMenuSubPopoverType === 'softwares') subPopoverRef = tabletSoftwaresSubPopoverRef;
            if (subPopoverRef && subPopoverRef.current && !subPopoverRef.current.contains(target)) {
                 // Handled by close button or escape
            }
        } else if (isTabletMenuPopoverOpen && tabletMenuPopoverRef.current && !tabletMenuPopoverRef.current.contains(target)) {
            setIsTabletMenuPopoverOpen(false);
        } else if (mobileSubPopoverType) {
          let subPopoverRef = null;
          if (mobileSubPopoverType === 'caseStudies') subPopoverRef = mobileCaseStudiesSubPopoverRef;
          else if (mobileSubPopoverType === 'aboutMe') subPopoverRef = mobileAboutMeSubPopoverRef;
          else if (mobileSubPopoverType === 'softwares') subPopoverRef = mobileSoftwaresSubPopoverRef;
          if (subPopoverRef && subPopoverRef.current && !subPopoverRef.current.contains(target)) {
            // Handled by close button or escape
          }
        } else if (isMobileMenuPopoverOpen && mobileMenuPopoverRef.current && !mobileMenuPopoverRef.current.contains(target)) {
           setIsMobileMenuPopoverOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuPopoverOpen, mobileSubPopoverType, isTabletMenuPopoverOpen, tabletMenuSubPopoverType]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (tabletMenuSubPopoverType) {
          setTabletMenuSubPopoverType(null);
          setIsTabletMenuPopoverOpen(true); 
        } else if (isTabletMenuPopoverOpen) {
          setIsTabletMenuPopoverOpen(false);
        } else if (mobileSubPopoverType) {
          setMobileSubPopoverType(null); 
        } else if (isMobileMenuPopoverOpen) {
          setIsMobileMenuPopoverOpen(false);
        } else {
          closeAllPopovers(); 
        }
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuPopoverOpen, mobileSubPopoverType, isTabletMenuPopoverOpen, tabletMenuSubPopoverType, isCaseStudiesPopoverOpen, isAboutMePopoverOpen, isSoftwaresPopoverOpen, isLanguagePopoverOpen, isSocialPopoverOpen]);


  const toggleMainPopover = (setter: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean) => {
    const wasOpen = isOpen;
    closeAllPopovers(true, true, true, true); 
    
    if (!wasOpen) { 
      setter(true);
      updateHeaderRect();
    }
  };

  const toggleCaseStudiesPopover = () => toggleMainPopover(setIsCaseStudiesPopoverOpen, isCaseStudiesPopoverOpen);
  const toggleAboutMePopover = () => toggleMainPopover(setIsAboutMePopoverOpen, isAboutMePopoverOpen);
  const toggleSoftwaresPopover = () => toggleMainPopover(setIsSoftwaresPopoverOpen, isSoftwaresPopoverOpen);

  const toggleLanguagePopover = () => {
    const wasOpen = isLanguagePopoverOpen;
    if (!wasOpen) {
        closeAllPopovers(true, true, true, true); 
        setIsLanguagePopoverOpen(true); 
        updateHeaderRect();
    } else {
        setIsLanguagePopoverOpen(false); 
    }
  };
  
  const toggleSocialPopover = () => {
    const wasOpen = isSocialPopoverOpen;
    if (!wasOpen) {
        closeAllPopovers(true, true, true, true);
        setIsSocialPopoverOpen(true);
        updateHeaderRect();
    } else {
        setIsSocialPopoverOpen(false);
    }
  };

  const handleLanguageSelect = (newLang: Language) => {
    selectLanguage(newLang);
    setIsLanguagePopoverOpen(false);
  };
  
  const handleSocialLinkClick = () => {
    setIsSocialPopoverOpen(false); 
  };

  const handleNonDesktopHeaderButtonClick = () => {
    if (isTabletLayout && showLeftSidebar) { 
        if (tabletMenuSubPopoverType) {
            setTabletMenuSubPopoverType(null); 
            setIsTabletMenuPopoverOpen(true);
        } else if (isTabletMenuPopoverOpen) {
            setIsTabletMenuPopoverOpen(false); 
        } else {
            closeAllPopovers(true, true, true, true);
            updateHeaderRect();
            setIsTabletMenuPopoverOpen(true); 
        }
    } else { 
        if (mobileSubPopoverType) {
            setMobileSubPopoverType(null); 
        } else if (isMobileMenuPopoverOpen) {
            setIsMobileMenuPopoverOpen(false); 
        } else {
            closeAllPopovers(false, true, true, true); 
            updateHeaderRect();
            setIsMobileMenuPopoverOpen(true); 
        }
    }
  };
  
  const openMobileSubPopover = (type: MobileSubPopoverType) => { 
    updateHeaderRect();
    setMobileSubPopoverType(type);
  };

  const openTabletSubPopover = (type: TabletSubPopoverType) => {
    updateHeaderRect();
    setTabletMenuSubPopoverType(type);
    setIsTabletMenuPopoverOpen(false); 
  };


  const navButtonBaseClasses = `
    h-11 px-spectrum-200 rounded-full font-spectrum-medium text-spectrum-100 flex items-center justify-center
    transition-all duration-150 ease-in-out
    focus:outline-none focus:ring-1 focus:ring-offset-1 dark:focus:ring-offset-spectrum-background-primary-dark
  `;
  const navButtonInactiveClasses = `
    bg-transparent text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark
    hover:bg-hover-nav-link-bg-light hover:text-hover-nav-link-text-light
    dark:hover:bg-sidebar-nav-item-hover-bg-dark dark:hover:text-sidebar-nav-item-hover-text-dark
    focus:ring-spectrum-border-focus-light dark:focus:ring-spectrum-border-focus-dark
    active:bg-popover-button-active-bg-light active:text-popover-button-active-text-light
    dark:active:bg-popover-button-active-bg-dark dark:active:text-popover-button-active-text-dark
    active:ring-0
  `;
  const navButtonActiveClasses = `
    bg-custom-interactive-bg-light text-custom-interactive-text-light
    dark:bg-custom-interactive-bg-dark dark:text-custom-interactive-text-dark
    focus:ring-custom-interactive-bg-dark dark:focus:ring-custom-interactive-text-dark
  `;

  const getNavButtonClasses = (isActive: boolean) => {
    return `${navButtonBaseClasses} ${isActive ? navButtonActiveClasses : navButtonInactiveClasses}`;
  };

  const getDropdownItemClasses = (currentLang: Language, itemLang: Language) => {
    const base = `flex items-center justify-between w-full px-spectrum-200 py-3 text-left
                  text-spectrum-100 font-spectrum-regular transition-colors duration-150
                  rounded-spectrum-100
                  focus:outline-none focus:ring-1 focus:ring-inset`;
    if (currentLang === itemLang) {
      return `${base} bg-footer-link-blue-hover-bg-light text-footer-link-blue-hover-text-light
                  dark:bg-footer-link-blue-hover-bg-dark dark:text-footer-link-blue-hover-text-dark
                  focus:ring-footer-link-blue-hover-text-light dark:focus:ring-footer-link-blue-hover-text-dark`;
    }
    return `${base} text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark
                  hover:bg-custom-interactive-bg-light dark:hover:bg-custom-interactive-bg-dark
                  hover:text-custom-interactive-text-light dark:hover:text-custom-interactive-text-dark
                  focus:ring-black dark:focus:ring-white`;
  };

  const popoverBaseClasses = "fixed z-[60] bg-spectrum-background-secondary-light dark:bg-spectrum-background-secondary-dark shadow-dropdown-light dark:shadow-dropdown-dark rounded-spectrum-300 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark box-border";
  const popoverAnimationClasses = "animate-scaleUp origin-top";
  const popoverRightAnimationClasses = "animate-scaleUp origin-top-right";
  
  const stickyPopoverHeaderClasses = `sticky top-0 z-10 bg-sticky-header-bg-light dark:bg-sticky-header-bg-dark 
                                      rounded-t-spectrum-300 border-b border-white dark:border-white 
                                      shadow-sticky-header-light dark:shadow-none`;


  const getNonDesktopContentPopoverStyles = (isForMobileStyleMenuSystem: boolean = false): React.CSSProperties => {
    if (!currentHeaderRect) return { display: 'none' };

    let popoverLeft: string | number = currentHeaderRect.left;
    let popoverWidth: string | number = currentHeaderRect.width;

    if (isForMobileStyleMenuSystem) {
      if (isMobileView) { 
        popoverLeft = currentHeaderRect.left;
        popoverWidth = currentHeaderRect.width;
      } else if (isTabletLayout && !showLeftSidebar) { 
        popoverLeft = 0;
        popoverWidth = '100vw';
      }
    }

    return {
      top: `${currentHeaderRect.bottom}px`,
      left: typeof popoverLeft === 'number' ? `${popoverLeft}px` : popoverLeft,
      width: typeof popoverWidth === 'number' ? `${popoverWidth}px` : popoverWidth,
      maxHeight: `calc(100vh - ${currentHeaderRect.bottom + 16}px)`, 
      overflowY: 'auto',
      boxSizing: 'border-box',
    };
  };


  const getRightAnchoredPopoverStyles = (buttonRef: React.RefObject<HTMLButtonElement>): React.CSSProperties => {
    if (!buttonRef.current || !currentHeaderRect) return { display: 'none' };

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const popoverVerticalOffset = 17; 
    const popoverRightAlignToViewport = window.innerWidth - currentHeaderRect.right;
    
    return {
      top: `${buttonRect.bottom + popoverVerticalOffset}px`,
      right: `${popoverRightAlignToViewport}px`, 
      left: 'auto', 
      width: 'auto', 
      minWidth: '200px', 
      maxHeight: `calc(100vh - ${buttonRect.bottom + popoverVerticalOffset + 16}px)`, 
      overflowY: 'auto',
      boxSizing: 'border-box',
      transform: 'none', 
    };
  };


  const renderDesktopCaseStudiesPopover = () => (
    <div
      ref={caseStudiesPopoverRef}
      className={`${popoverBaseClasses} ${popoverAnimationClasses}`}
      style={getNonDesktopContentPopoverStyles()} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-studies-popover-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-200 pt-spectrum-200 pb-spectrum-100`}>
        <div className="flex justify-between items-center">
          <h3 id="case-studies-popover-title" className={popoverSectionTitleClasses}>{language === 'es' ? 'Casos de Estudio' : 'Case Studies'}</h3>
        </div>
      </div>
      <div className="p-spectrum-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-spectrum-200">
          {FICTITIOUS_PORTFOLIOS.map((item) => (
            <CaseStudyCard
              key={item.name.en}
              title={item.name}
              subtitle={item.subtitle}
              tags={item.tags}
              href={item.href}
              imagePlaceholderText={item.imagePlaceholderText}
              language={language}
              theme={theme}
              onClick={() => closeAllPopovers()}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderDesktopAboutMePopover = () => (
    <div
        ref={aboutMePopoverRef}
        className={`${popoverBaseClasses} ${popoverAnimationClasses}`}
        style={getNonDesktopContentPopoverStyles()} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-me-popover-title"
    >
        <div className={`${stickyPopoverHeaderClasses} px-spectrum-300 pt-spectrum-300 pb-spectrum-200`}>
            <div className="flex justify-between items-center">
                <h3 id="about-me-popover-title" className={popoverSectionTitleClasses}>{language === 'es' ? 'Acerca de Mí y Contacto' : 'About Me & Contact'}</h3>
            </div>
        </div>
        <div className="p-spectrum-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-spectrum-400">
                <div>
                    <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-200">{language === 'es' ? 'Acerca de Mí' : 'About Me'}</h4>
                    <a
                      href="#acerca-de-mi"
                      onClick={() => closeAllPopovers()}
                      className="block p-spectrum-200 rounded-spectrum-200 hover:bg-footer-link-green-hover-bg-light dark:hover:bg-footer-link-green-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white"
                    >
                        <div className="flex items-start">
                            <PersonIcon className="w-8 h-8 mr-spectrum-200 text-footer-link-green-hover-text-light dark:text-footer-link-green-hover-text-dark flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-spectrum-medium text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark mb-spectrum-50">{language === 'es' ? 'Conoce mi historia' : 'Know my story'}</p>
                                <p className="text-spectrum-100 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">
                                    {language === 'es' ? 'Descubre mi trayectoria profesional y los valores que guían mi trabajo en el diseño de experiencias.' : 'Discover my professional journey and the values that guide my work in experience design.'}
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                      href="cv.pdf" target="_blank" rel="noopener noreferrer" onClick={() => closeAllPopovers()}
                      className="mt-spectrum-200 block p-spectrum-200 rounded-spectrum-200 hover:bg-footer-link-green-hover-bg-light dark:hover:bg-footer-link-green-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white"
                    >
                        <div className="flex items-start">
                            <DownloadIcon className="w-8 h-8 mr-spectrum-200 text-footer-link-green-hover-text-light dark:text-footer-link-green-hover-text-dark flex-shrink-0 mt-1" />
                            <div>
                                <div className="flex items-center mb-spectrum-50">
                                    <p className="font-spectrum-medium text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">
                                        {language === 'es' ? 'Descargar CV' : 'Download CV'}
                                    </p>
                                    <CheckIcon className="w-4 h-4 ml-spectrum-100 text-tag-accessibilityGreen-text-light dark:text-tag-accessibilityGreen-text-dark" />
                                    <span className="ml-spectrum-50 px-2 py-0.5 rounded-full text-xs font-spectrum-medium bg-tag-accessibilityGreen-bg-light text-tag-accessibilityGreen-text-light dark:bg-tag-accessibilityGreen-bg-dark dark:text-tag-accessibilityGreen-text-dark">
                                        {appLocalizedStrings.virusFree[language]}
                                    </span>
                                </div>
                                <p className="text-spectrum-100 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">
                                    {language === 'es' ? 'Obtén mi currículum completo en formato PDF para conocer más detalles sobre mi experiencia y habilidades.' : 'Get my full resume in PDF format to learn more details about my experience and skills.'}
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="mt-spectrum-300 relative pt-[56.25%] border border-spectrum-border-default-light dark:border-spectrum-border-default-dark rounded-spectrum-100 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark">
                      <div className="absolute inset-0 flex items-center justify-center p-spectrum-100">
                        <span className="text-spectrum-text-placeholder-light dark:text-spectrum-text-placeholder-dark text-center text-spectrum-75">
                          {appLocalizedStrings.videoImagePlaceholder[language]}
                        </span>
                      </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-200">{language === 'es' ? 'Contacto' : 'Contact'}</h4>
                    <ul className="space-y-spectrum-50">
                        {directContactItemsForAboutMe.map((link) => ( 
                            <li key={link.label.en}>
                                <a
                                  href={link.href}
                                  target="_blank" rel="noopener noreferrer"
                                  onClick={() => closeAllPopovers()}
                                  className="flex items-center p-spectrum-100 rounded-spectrum-100 hover:bg-footer-link-green-hover-bg-light dark:hover:bg-footer-link-green-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-500"
                                >
                                    {link.IconComponent && <link.IconComponent className={`w-5 h-5 mr-spectrum-100 ${link.brandColorClass || 'text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark'} group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark`} />}
                                    <span className="text-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">{link.label[language]}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <hr className="my-spectrum-200 border-spectrum-border-default-light dark:border-spectrum-border-default-dark"/>
                    <h5 className="text-spectrum-200 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-100 mt-spectrum-200">
                        {language === 'es' ? 'Redes Sociales' : 'Social Networks'}
                    </h5>
                    <ul className="space-y-spectrum-50">
                        {socialMediaItemsForAboutMe.map((link, index) => { 
                            if (link.type === 'divider') {
                                return <li key={`social-media-divider-${index}`}><hr className="my-spectrum-50 border-spectrum-border-default-light dark:border-spectrum-border-default-dark"/></li>;
                            }
                            if (link.href && link.IconComponent) {
                                return (
                                    <li key={link.label.en}>
                                        <a
                                          href={link.href}
                                          target="_blank" rel="noopener noreferrer"
                                          onClick={() => closeAllPopovers()}
                                          className="flex items-center p-spectrum-100 rounded-spectrum-100 hover:bg-footer-link-yellow-hover-bg-light dark:hover:bg-footer-link-yellow-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-1 focus:ring-inset focus:ring-yellow-500"
                                        >
                                            <link.IconComponent className={`w-5 h-5 mr-spectrum-100 ${link.brandColorClass || 'text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark'} group-hover:text-footer-link-yellow-hover-text-light dark:group-hover:text-footer-link-yellow-hover-text-dark`} />
                                            <span className="text-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-yellow-hover-text-light dark:group-hover:text-footer-link-yellow-hover-text-dark">{link.label[language]}</span>
                                        </a>
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );

  const renderDesktopSoftwaresPopover = () => (
    <div
        ref={softwaresPopoverRef}
        className={`${popoverBaseClasses} ${popoverAnimationClasses}`}
        style={getNonDesktopContentPopoverStyles()} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="softwares-popover-title"
    >
        <div className={`${stickyPopoverHeaderClasses} px-spectrum-300 pt-spectrum-300 pb-spectrum-200`}>
            <div className="flex justify-between items-center">
                <h3 id="softwares-popover-title" className={popoverSectionTitleClasses}>{language === 'es' ? 'Softwares y Herramientas' : 'Software & Tools'}</h3>
            </div>
        </div>
        <div className="p-spectrum-300">
            <RenderSoftwareGrid categories={categorizedSoftwareToolsList} language={language} />
        </div>
    </div>
  );

  const renderLanguagePopover = () => (
    <div
      ref={languagePopoverRef}
      className={`${popoverBaseClasses} ${popoverRightAnimationClasses} z-[70]`} 
      style={getRightAnchoredPopoverStyles(languageToggleRef)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-select-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-200 pt-spectrum-200 pb-spectrum-100`}>
        <h3 id="language-select-title" className="sr-only">{language === 'es' ? 'Seleccionar idioma' : 'Select language'}</h3>
         <h4 className={`${popoverSectionTitleClasses} text-center`}>{language === 'es' ? 'Idioma' : 'Language'}</h4>
      </div>
      <div>
        <ul className="space-y-1 p-spectrum-50"> {/* Added small padding for list items if needed */}
          <li>
            <button onClick={() => handleLanguageSelect('es')} className={getDropdownItemClasses(language, 'es')}>
              Español {language === 'es' && <CheckIcon className="w-4 h-4 text-footer-link-blue-hover-text-light dark:text-footer-link-blue-hover-text-dark" />}
            </button>
          </li>
          <li>
            <button onClick={() => handleLanguageSelect('en')} className={getDropdownItemClasses(language, 'en')}>
              English {language === 'en' && <CheckIcon className="w-4 h-4 text-footer-link-blue-hover-text-light dark:text-footer-link-blue-hover-text-dark" />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
  
  const renderSocialPopover = () => ( 
    <div
      ref={socialPopoverRef}
      className={`${popoverBaseClasses} ${popoverRightAnimationClasses} z-[70]`}
      style={getRightAnchoredPopoverStyles(socialToggleRef)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="social-select-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-200 pt-spectrum-200 pb-spectrum-100`}>
        <h3 id="social-select-title" className={popoverSectionTitleClasses}>{language === 'es' ? 'Redes Sociales' : 'Social Media'}</h3>
      </div>
      <div className="p-spectrum-200 max-h-[calc(100vh-200px)] overflow-y-auto"> {/* Added max-h and overflow for scroll */}
        <ul className="space-y-spectrum-50">
          {socialMediaItemsForHeaderDropdown.map((link, index) => {
            if (link.type === 'divider') {
              return <li key={`social-popover-div-${index}`}><hr className="my-spectrum-50 border-spectrum-border-default-light dark:border-spectrum-border-default-dark"/></li>;
            }
            if (link.href && link.IconComponent) {
              const isDirectContact = ['WhatsApp', 'Telegram', 'Email'].includes(link.label.en);
              const hoverBgClass = isDirectContact
                ? 'hover:bg-footer-link-green-hover-bg-light dark:hover:bg-footer-link-green-hover-bg-dark'
                : 'hover:bg-footer-link-yellow-hover-bg-light dark:hover:bg-footer-link-yellow-hover-bg-dark';
              const hoverTextClass = isDirectContact
                ? 'group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark'
                : 'group-hover:text-footer-link-yellow-hover-text-light dark:group-hover:text-footer-link-yellow-hover-text-dark';

              return (
                <li key={`social-popover-${link.label.en}`}>
                  <a
                    href={link.href}
                    target="_blank" rel="noopener noreferrer"
                    onClick={handleSocialLinkClick}
                    className={`flex items-center p-spectrum-100 rounded-spectrum-100 ${hoverBgClass} transition-colors no-underline group focus:outline-none focus:ring-1 focus:ring-inset ${isDirectContact ? 'focus:ring-green-500' : 'focus:ring-yellow-500'}`}
                  >
                    <link.IconComponent className={`w-5 h-5 mr-spectrum-100 ${link.brandColorClass || 'text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark'} ${hoverTextClass}`} />
                    <span className={`text-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark ${hoverTextClass}`}>{link.label[language]}</span>
                  </a>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );

  const renderMobileMainMenuPopover = () => (
    <div
      ref={mobileMenuPopoverRef}
      className={`${popoverBaseClasses} ${popoverAnimationClasses} md:hidden`}
      style={getNonDesktopContentPopoverStyles(true)} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-200 pt-spectrum-200 pb-spectrum-100`}>
        <div className="flex justify-between items-center">
            <h3 id="mobile-menu-title" className={popoverSectionTitleClasses}>{language === 'es' ? 'Menú Principal' : 'Main Menu'}</h3>
        </div>
      </div>
      <div className="p-spectrum-200">
        <ul className="space-y-spectrum-100">
          {[
            { label: language === 'es' ? 'Casos de Estudio' : 'Case Studies', action: () => openMobileSubPopover('caseStudies') },
            { label: language === 'es' ? 'Acerca de Mí y Contacto' : 'About Me & Contact', action: () => openMobileSubPopover('aboutMe') },
            { label: language === 'es' ? 'Softwares y Herramientas' : 'Software & Tools', action: () => openMobileSubPopover('softwares') },
          ].map(item => (
            <li key={item.label}>
              <button
                onClick={item.action}
                className="flex items-center justify-between w-full px-spectrum-200 py-3 text-left text-spectrum-100 font-spectrum-medium text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark rounded-spectrum-100 hover:bg-hover-nav-link-bg-light dark:hover:bg-sidebar-nav-item-hover-bg-dark transition-colors focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black dark:focus:ring-white"
              >
                {item.label}
                <ChevronRightIcon className="w-5 h-5 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderMobileCaseStudiesSubPopover = () => (
    <div
      ref={mobileCaseStudiesSubPopoverRef}
      className={`${popoverBaseClasses} ${popoverAnimationClasses} md:hidden`}
      style={getNonDesktopContentPopoverStyles(true)} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-case-studies-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-200 pt-spectrum-200 pb-spectrum-100`}>
        <div className="flex justify-between items-center">
          <SubPopoverBackButton onClick={() => setMobileSubPopoverType(null)} language={language} />
          <h3 id="mobile-case-studies-title" className={`${popoverSectionTitleClasses} text-center flex-grow`}>{language === 'es' ? 'Casos de Estudio' : 'Case Studies'}</h3>
           <div className="w-11"></div> {/* Spacer for balance */}
        </div>
      </div>
      <div className="p-spectrum-200">
        <div className="grid grid-cols-1 gap-spectrum-200">
          {FICTITIOUS_PORTFOLIOS.map((item) => (
            <CaseStudyCard
              key={item.name.en}
              title={item.name}
              subtitle={item.subtitle}
              tags={item.tags}
              href={item.href}
              imagePlaceholderText={item.imagePlaceholderText}
              language={language}
              theme={theme}
              onClick={handleNonDesktopHeaderButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderMobileAboutMeSubPopover = () => (
     <div
      ref={mobileAboutMeSubPopoverRef}
      className={`${popoverBaseClasses} ${popoverAnimationClasses} md:hidden`}
      style={getNonDesktopContentPopoverStyles(true)} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-about-me-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-200 pt-spectrum-200 pb-spectrum-100`}>
        <div className="flex justify-between items-center">
          <SubPopoverBackButton onClick={() => setMobileSubPopoverType(null)} language={language} />
          <h3 id="mobile-about-me-title" className={`${popoverSectionTitleClasses} text-center flex-grow`}>{language === 'es' ? 'Acerca de Mí y Contacto' : 'About Me & Contact'}</h3>
           <div className="w-11"></div> {/* Spacer for balance */}
        </div>
      </div>
      <div className="p-spectrum-200">
        <div className="space-y-spectrum-300">
          <div>
            <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-100">{language === 'es' ? 'Acerca de Mí' : 'About Me'}</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-spectrum-200">
                <a
                  href="#acerca-de-mi"
                  onClick={handleNonDesktopHeaderButtonClick}
                  className="block p-spectrum-200 rounded-spectrum-200 hover:bg-footer-link-green-hover-bg-light dark:hover:bg-footer-link-green-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white"
                >
                  <div className="flex items-start">
                    <PersonIcon className="w-7 h-7 mr-spectrum-100 text-footer-link-green-hover-text-light dark:text-footer-link-green-hover-text-dark flex-shrink-0 mt-px" />
                    <div>
                      <p className="font-spectrum-medium text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark mb-spectrum-25">
                        {language === 'es' ? 'Conoce mi historia' : 'Know my story'}
                      </p>
                      <p className="text-spectrum-75 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">
                        {language === 'es' ? 'Descubre mi trayectoria profesional y valores.' : 'Discover my professional journey and values.'}
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="cv.pdf" target="_blank" rel="noopener noreferrer"
                  onClick={handleNonDesktopHeaderButtonClick}
                  className="block p-spectrum-200 rounded-spectrum-200 hover:bg-footer-link-green-hover-bg-light dark:hover:bg-footer-link-green-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white"
                >
                  <div className="flex items-start">
                    <DownloadIcon className="w-7 h-7 mr-spectrum-100 text-footer-link-green-hover-text-light dark:text-footer-link-green-hover-text-dark flex-shrink-0 mt-px" />
                    <div>
                      <div className="flex items-center mb-spectrum-25">
                          <p className="font-spectrum-medium text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">
                              {language === 'es' ? 'Descargar CV' : 'Download CV'}
                          </p>
                          <CheckIcon className="w-4 h-4 ml-spectrum-100 text-tag-accessibilityGreen-text-light dark:text-tag-accessibilityGreen-text-dark" />
                          <span className="ml-spectrum-50 px-2 py-0.5 rounded-full text-xs font-spectrum-medium bg-tag-accessibilityGreen-bg-light text-tag-accessibilityGreen-text-light dark:bg-tag-accessibilityGreen-bg-dark dark:text-tag-accessibilityGreen-text-dark">
                              {appLocalizedStrings.virusFree[language]}
                          </span>
                      </div>
                      <p className="text-spectrum-75 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">
                        {language === 'es' ? 'Obtén mi currículum completo en PDF.' : 'Get my full resume in PDF.'}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-spectrum-300 relative pt-[56.25%] border border-spectrum-border-default-light dark:border-spectrum-border-default-dark rounded-spectrum-100 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark">
                <div className="absolute inset-0 flex items-center justify-center p-spectrum-100">
                  <span className="text-spectrum-text-placeholder-light dark:text-spectrum-text-placeholder-dark text-center text-spectrum-75">
                    {appLocalizedStrings.videoImagePlaceholder[language]}
                  </span>
                </div>
              </div>
          </div>
          <div> 
              <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-100">{language === 'es' ? 'Contacto' : 'Contact'}</h4>
              <ul className="space-y-spectrum-50">
                  {directContactItemsForAboutMe.map((link) => ( 
                      <li key={`mobile-contact-${link.label.en}`}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={handleNonDesktopHeaderButtonClick} className="flex items-center p-spectrum-50 rounded-spectrum-100 hover:bg-footer-link-green-hover-bg-light dark:hover:bg-footer-link-green-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-500">
                          {link.IconComponent && <link.IconComponent className={`w-5 h-5 mr-spectrum-100 ${link.brandColorClass || 'text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark'} group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark`} />}
                          <span className="text-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">{link.label[language]}</span>
                          </a>
                      </li>
                  ))}
              </ul>
              <hr className="my-spectrum-200 border-spectrum-border-default-light dark:border-spectrum-border-default-dark"/>
              <h5 className="text-spectrum-200 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-100 mt-spectrum-200">
                  {language === 'es' ? 'Redes Sociales' : 'Social Networks'}
              </h5>
              <ul className="space-y-spectrum-50">
              {socialMediaItemsForAboutMe.map((link, index) => { 
                if (link.type === 'divider') return <li key={`mobile-about-social-div-${index}`}><hr className="my-spectrum-50 border-spectrum-border-default-light dark:border-spectrum-border-default-dark"/></li>;
                if (link.href && link.IconComponent) {
                  return (
                    <li key={`mobile-about-social-${link.label.en}`}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={handleNonDesktopHeaderButtonClick} className="flex items-center p-spectrum-50 rounded-spectrum-100 hover:bg-footer-link-yellow-hover-bg-light dark:hover:bg-footer-link-yellow-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-1 focus:ring-inset focus:ring-yellow-500">
                        <link.IconComponent className={`w-5 h-5 mr-spectrum-100 ${link.brandColorClass || ''} group-hover:text-footer-link-yellow-hover-text-light dark:group-hover:text-footer-link-yellow-hover-text-dark`} />
                        <span className="text-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-yellow-hover-text-light dark:group-hover:text-footer-link-yellow-hover-text-dark">{link.label[language]}</span>
                      </a>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileSoftwaresSubPopover = () => (
    <div
      ref={mobileSoftwaresSubPopoverRef}
      className={`${popoverBaseClasses} ${popoverAnimationClasses} md:hidden`}
      style={getNonDesktopContentPopoverStyles(true)} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-softwares-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-200 pt-spectrum-200 pb-spectrum-100`}>
        <div className="flex justify-between items-center">
          <SubPopoverBackButton onClick={() => setMobileSubPopoverType(null)} language={language} />
          <h3 id="mobile-softwares-title" className={`${popoverSectionTitleClasses} text-center flex-grow`}>{language === 'es' ? 'Softwares y Herramientas' : 'Software & Tools'}</h3>
           <div className="w-11"></div> {/* Spacer for balance */}
        </div>
      </div>
      <div className="p-spectrum-200">
        <RenderSoftwareGrid categories={categorizedSoftwareToolsList} language={language} />
      </div>
    </div>
  );

  const tabletMenuBackLabel: LocalizedString = { es: 'Volver al Menú', en: 'Back to Menu'};
  const renderTabletMenuPopover = () => (
    <div
      ref={tabletMenuPopoverRef}
      className={`${popoverBaseClasses} ${popoverAnimationClasses}`}
      style={getNonDesktopContentPopoverStyles()} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="tablet-menu-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-200 pt-spectrum-200 pb-spectrum-100`}>
        <div className="flex justify-between items-center">
            <h3 id="tablet-menu-title" className={popoverSectionTitleClasses}>{language === 'es' ? 'Menú Principal' : 'Main Menu'}</h3>
        </div>
      </div>
      <div className="p-spectrum-200">
        <ul className="space-y-spectrum-100">
          {[
            { label: language === 'es' ? 'Casos de Estudio' : 'Case Studies', action: () => openTabletSubPopover('caseStudies') },
            { label: language === 'es' ? 'Acerca de Mí y Contacto' : 'About Me & Contact', action: () => openTabletSubPopover('aboutMe') },
            { label: language === 'es' ? 'Softwares y Herramientas' : 'Software & Tools', action: () => openTabletSubPopover('softwares') },
          ].map(item => (
            <li key={`tablet-menu-${item.label}`}>
              <button
                onClick={item.action}
                className="flex items-center justify-between w-full px-spectrum-200 py-3 text-left text-spectrum-100 font-spectrum-medium text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark rounded-spectrum-100 hover:bg-hover-nav-link-bg-light dark:hover:bg-sidebar-nav-item-hover-bg-dark transition-colors focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black dark:focus:ring-white"
              >
                {item.label}
                <ChevronRightIcon className="w-5 h-5 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderTabletCaseStudiesSubPopover = () => (
    <div
      ref={tabletCaseStudiesSubPopoverRef}
      className={`${popoverBaseClasses} ${popoverAnimationClasses}`}
      style={getNonDesktopContentPopoverStyles()} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="tablet-case-studies-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-200 pt-spectrum-200 pb-spectrum-100`}>
        <div className="flex justify-between items-center">
            <SubPopoverBackButton onClick={() => { setTabletMenuSubPopoverType(null); setIsTabletMenuPopoverOpen(true); }} language={language} labelOverride={tabletMenuBackLabel} />
            <h3 id="tablet-case-studies-title" className={`${popoverSectionTitleClasses} text-center flex-grow`}>{language === 'es' ? 'Casos de Estudio' : 'Case Studies'}</h3>
             <div className="w-11"></div> {/* Spacer for balance */}
        </div>
      </div>
      <div className="p-spectrum-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-spectrum-200">
          {FICTITIOUS_PORTFOLIOS.map((item) => (
            <CaseStudyCard
              key={item.name.en}
              title={item.name}
              subtitle={item.subtitle}
              tags={item.tags}
              href={item.href}
              imagePlaceholderText={item.imagePlaceholderText}
              language={language}
              theme={theme}
              onClick={handleNonDesktopHeaderButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderTabletAboutMeSubPopover = () => (
     <div
      ref={tabletAboutMeSubPopoverRef}
      className={`${popoverBaseClasses} ${popoverAnimationClasses}`}
      style={getNonDesktopContentPopoverStyles()} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="tablet-about-me-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-300 pt-spectrum-300 pb-spectrum-200`}>
        <div className="flex justify-between items-center">
            <SubPopoverBackButton onClick={() => { setTabletMenuSubPopoverType(null); setIsTabletMenuPopoverOpen(true); }} language={language} labelOverride={tabletMenuBackLabel}/>
            <h3 id="tablet-about-me-title" className={`${popoverSectionTitleClasses} text-center flex-grow`}>{language === 'es' ? 'Acerca de Mí y Contacto' : 'About Me & Contact'}</h3>
            <div className="w-11"></div> {/* Spacer for balance */}
        </div>
      </div>
      <div className="p-spectrum-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-spectrum-400">
              <div>
                  <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-200">{language === 'es' ? 'Acerca de Mí' : 'About Me'}</h4>
                  <a
                    href="#acerca-de-mi"
                    onClick={handleNonDesktopHeaderButtonClick}
                    className="block p-spectrum-200 rounded-spectrum-200 hover:bg-footer-link-green-hover-bg-light dark:hover:bg-footer-link-green-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white"
                  >
                      <div className="flex items-start">
                          <PersonIcon className="w-8 h-8 mr-spectrum-200 text-footer-link-green-hover-text-light dark:text-footer-link-green-hover-text-dark flex-shrink-0 mt-1" />
                          <div>
                              <p className="font-spectrum-medium text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark mb-spectrum-50">{language === 'es' ? 'Conoce mi historia' : 'Know my story'}</p>
                              <p className="text-spectrum-100 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">
                                  {language === 'es' ? 'Descubre mi trayectoria profesional y los valores que guían mi trabajo en el diseño de experiencias.' : 'Discover my professional journey and the values that guide my work in experience design.'}
                              </p>
                          </div>
                      </div>
                  </a>
                  <a
                    href="cv.pdf" target="_blank" rel="noopener noreferrer" onClick={handleNonDesktopHeaderButtonClick}
                    className="mt-spectrum-200 block p-spectrum-200 rounded-spectrum-200 hover:bg-footer-link-green-hover-bg-light dark:hover:bg-footer-link-green-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white"
                  >
                      <div className="flex items-start">
                          <DownloadIcon className="w-8 h-8 mr-spectrum-200 text-footer-link-green-hover-text-light dark:text-footer-link-green-hover-text-dark flex-shrink-0 mt-1" />
                          <div>
                               <div className="flex items-center mb-spectrum-50">
                                  <p className="font-spectrum-medium text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">
                                      {language === 'es' ? 'Descargar CV' : 'Download CV'}
                                  </p>
                                  <CheckIcon className="w-4 h-4 ml-spectrum-100 text-tag-accessibilityGreen-text-light dark:text-tag-accessibilityGreen-text-dark" />
                                  <span className="ml-spectrum-50 px-2 py-0.5 rounded-full text-xs font-spectrum-medium bg-tag-accessibilityGreen-bg-light text-tag-accessibilityGreen-text-light dark:bg-tag-accessibilityGreen-bg-dark dark:text-tag-accessibilityGreen-text-dark">
                                      {appLocalizedStrings.virusFree[language]}
                                  </span>
                              </div>
                              <p className="text-spectrum-100 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">
                                  {language === 'es' ? 'Obtén mi currículum completo en formato PDF para conocer más detalles sobre mi experiencia y habilidades.' : 'Get my full resume in PDF format to learn more details about my experience and skills.'}
                              </p>
                          </div>
                      </div>
                  </a>
                  <div className="mt-spectrum-300 relative pt-[56.25%] border border-spectrum-border-default-light dark:border-spectrum-border-default-dark rounded-spectrum-100 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark">
                    <div className="absolute inset-0 flex items-center justify-center p-spectrum-100">
                      <span className="text-spectrum-text-placeholder-light dark:text-spectrum-text-placeholder-dark text-center text-spectrum-75">
                        {appLocalizedStrings.videoImagePlaceholder[language]}
                      </span>
                    </div>
                  </div>
              </div>
              <div>
                  <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-200">{language === 'es' ? 'Contacto' : 'Contact'}</h4>
                  <ul className="space-y-spectrum-50">
                      {directContactItemsForAboutMe.map((link) => ( 
                          <li key={`tablet-contact-${link.label.en}`}>
                              <a
                                href={link.href}
                                target="_blank" rel="noopener noreferrer"
                                onClick={handleNonDesktopHeaderButtonClick}
                                className="flex items-center p-spectrum-100 rounded-spectrum-100 hover:bg-footer-link-green-hover-bg-light dark:hover:bg-footer-link-green-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-500"
                              >
                                  {link.IconComponent && <link.IconComponent className={`w-5 h-5 mr-spectrum-100 ${link.brandColorClass || 'text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark'} group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark`} />}
                                  <span className="text-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-green-hover-text-light dark:group-hover:text-footer-link-green-hover-text-dark">{link.label[language]}</span>
                              </a>
                          </li>
                      ))}
                  </ul>
                  <hr className="my-spectrum-200 border-spectrum-border-default-light dark:border-spectrum-border-default-dark"/>
                  <h5 className="text-spectrum-200 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-100 mt-spectrum-200">
                      {language === 'es' ? 'Redes Sociales' : 'Social Networks'}
                  </h5>
                  <ul className="space-y-spectrum-50">
                      {socialMediaItemsForAboutMe.map((link, index) => { 
                          if (link.type === 'divider') {
                              return <li key={`tablet-social-media-divider-${index}`}><hr className="my-spectrum-50 border-spectrum-border-default-light dark:border-spectrum-border-default-dark"/></li>;
                          }
                          if (link.href && link.IconComponent) {
                              return (
                                  <li key={`tablet-social-${link.label.en}`}>
                                      <a
                                        href={link.href}
                                        target="_blank" rel="noopener noreferrer"
                                        onClick={handleNonDesktopHeaderButtonClick}
                                        className="flex items-center p-spectrum-100 rounded-spectrum-100 hover:bg-footer-link-yellow-hover-bg-light dark:hover:bg-footer-link-yellow-hover-bg-dark transition-colors no-underline group focus:outline-none focus:ring-1 focus:ring-inset focus:ring-yellow-500"
                                      >
                                          <link.IconComponent className={`w-5 h-5 mr-spectrum-100 ${link.brandColorClass || 'text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark'} group-hover:text-footer-link-yellow-hover-text-light dark:group-hover:text-footer-link-yellow-hover-text-dark`} />
                                          <span className="text-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark group-hover:text-footer-link-yellow-hover-text-light dark:group-hover:text-footer-link-yellow-hover-text-dark">{link.label[language]}</span>
                                      </a>
                                  </li>
                              );
                          }
                          return null;
                      })}
                  </ul>
              </div>
          </div>
        </div>
    </div>
  );

  const renderTabletSoftwaresSubPopover = () => (
    <div
      ref={tabletSoftwaresSubPopoverRef}
      className={`${popoverBaseClasses} ${popoverAnimationClasses}`}
      style={getNonDesktopContentPopoverStyles()} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="tablet-softwares-title"
    >
      <div className={`${stickyPopoverHeaderClasses} px-spectrum-300 pt-spectrum-300 pb-spectrum-200`}>
        <div className="flex justify-between items-center">
            <SubPopoverBackButton onClick={() => { setTabletMenuSubPopoverType(null); setIsTabletMenuPopoverOpen(true); }} language={language} labelOverride={tabletMenuBackLabel} />
            <h3 id="tablet-softwares-title" className={`${popoverSectionTitleClasses} text-center flex-grow`}>{language === 'es' ? 'Softwares y Herramientas' : 'Software & Tools'}</h3>
            <div className="w-11"></div> {/* Spacer for balance */}
        </div>
      </div>
      <div className="p-spectrum-300">
        <RenderSoftwareGrid categories={categorizedSoftwareToolsList} language={language} />
      </div>
    </div>
  );


  let showCloseForNonDesktopHeader = false;
  let nonDesktopHeaderButtonTooltip = language === 'es' ? 'Menú principal' : 'Main menu';
  let nonDesktopHeaderButtonAriaLabel = language === 'es' ? 'Abrir menú principal' : 'Open main menu';

  if (isTabletLayout && showLeftSidebar) {
    showCloseForNonDesktopHeader = isTabletMenuPopoverOpen || !!tabletMenuSubPopoverType;
    if (showCloseForNonDesktopHeader) {
      nonDesktopHeaderButtonTooltip = language === 'es' ? 'Cerrar' : 'Close';
      nonDesktopHeaderButtonAriaLabel = language === 'es' ? 'Cerrar menú' : 'Close menu';
    }
  } else { 
    showCloseForNonDesktopHeader = isMobileMenuPopoverOpen || !!mobileSubPopoverType;
     if (showCloseForNonDesktopHeader) {
      nonDesktopHeaderButtonTooltip = language === 'es' ? 'Cerrar' : 'Close';
      nonDesktopHeaderButtonAriaLabel = language === 'es' ? 'Cerrar menú' : 'Close menu';
    }
  }


  const desktopPillHeader = (
    <div ref={pillHeaderRef} className="flex items-center space-x-spectrum-50 bg-spectrum-background-primary-light dark:bg-spectrum-background-primary-dark p-1 rounded-full">
      <button
        ref={caseStudiesToggleRef}
        type="button"
        className={getNavButtonClasses(isCaseStudiesPopoverOpen)}
        onClick={toggleCaseStudiesPopover}
        aria-expanded={isCaseStudiesPopoverOpen}
        aria-controls={isCaseStudiesPopoverOpen ? "case-studies-popover" : undefined}
      >
        {language === 'es' ? 'Casos de Estudio' : 'Case Studies'}
        <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${isCaseStudiesPopoverOpen ? 'rotate-180' : ''}`} />
      </button>
      <button
        ref={aboutMeToggleRef}
        type="button"
        className={getNavButtonClasses(isAboutMePopoverOpen)}
        onClick={toggleAboutMePopover}
        aria-expanded={isAboutMePopoverOpen}
        aria-controls={isAboutMePopoverOpen ? "about-me-popover" : undefined}
      >
        {language === 'es' ? 'Acerca de Mí' : 'About Me'}
        <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${isAboutMePopoverOpen ? 'rotate-180' : ''}`} />
      </button>
      <button
        ref={softwaresToggleRef}
        type="button"
        className={getNavButtonClasses(isSoftwaresPopoverOpen)}
        onClick={toggleSoftwaresPopover}
        aria-expanded={isSoftwaresPopoverOpen}
        aria-controls={isSoftwaresPopoverOpen ? "softwares-popover" : undefined}
      >
        {language === 'es' ? 'Softwares' : 'Softwares'}
        <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${isSoftwaresPopoverOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );

  const nonDesktopHeaderControls = (
    <div className="flex items-center justify-between w-full h-full relative"> {/* Added relative for logo positioning */}
      <div className="flex-shrink-0"> {/* Hamburger Button */}
        <Tooltip text={nonDesktopHeaderButtonTooltip} position="bottom">
          <button
            ref={mobileMenuButtonRef} 
            type="button"
            onClick={handleNonDesktopHeaderButtonClick}
            aria-label={nonDesktopHeaderButtonAriaLabel}
            aria-expanded={showCloseForNonDesktopHeader}
            aria-haspopup={!showCloseForNonDesktopHeader} 
            className="p-2 rounded-full hover:bg-hover-nav-link-bg-light dark:hover:bg-sidebar-nav-item-hover-bg-dark focus:outline-none focus:ring-1 focus:ring-spectrum-border-focus-light dark:focus:ring-spectrum-border-focus-dark"
          >
            {showCloseForNonDesktopHeader ?
              <CloseIcon className="w-7 h-7 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark" /> :
              <HamburgerIcon className="w-7 h-7 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark" />
            }
          </button>
        </Tooltip>
      </div>
      
      {/* Dynamically positioned logo for non-desktop */}
      <div style={nonDesktopLogoStyle}>
        <Logo theme={theme} className="h-7" />
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-spectrum-100 flex-shrink-0">
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} language={language} />
        <LanguageToggleButton ref={languageToggleRef} language={language} onClick={toggleLanguagePopover} isOpen={isLanguagePopoverOpen} />
        <SocialToggleButton ref={socialToggleRef} language={language} onClick={toggleSocialPopover} isOpen={isSocialPopoverOpen} />
      </div>
    </div>
  );

  return (
    <>
      <header
        ref={ref}
        style={style} 
        className={`fixed top-0 z-50
                    h-[70px]
                    bg-spectrum-background-primary-light dark:bg-spectrum-background-primary-dark
                    border-b border-spectrum-border-default-light dark:border-spectrum-border-default-dark
                    rounded-bl-spectrum-300 rounded-br-spectrum-300
                    transition-all duration-300 ease-in-out
                  `}
      >
        <div className={`
          w-full h-full flex items-center justify-between px-spectrum-200
          ${isDesktopLayout ? 'max-w-[1440px] mx-auto' : ''}
        `}>
          {isDesktopLayout ? (
            <>
              <div className="flex-shrink-0">
                <Logo theme={theme} className="h-7" />
              </div>
              {desktopPillHeader}
              <div ref={rightControlsGroupRef} className="flex items-center space-x-spectrum-50"> 
                <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} language={language} />
                <LanguageToggleButton ref={languageToggleRef} language={language} onClick={toggleLanguagePopover} isOpen={isLanguagePopoverOpen}/>
                <SocialToggleButton ref={socialToggleRef} language={language} onClick={toggleSocialPopover} isOpen={isSocialPopoverOpen} />
              </div>
            </>
          ) : (
            nonDesktopHeaderControls
          )}
        </div>
      </header>

      {isDesktopLayout && isCaseStudiesPopoverOpen && renderDesktopCaseStudiesPopover()}
      {isDesktopLayout && isAboutMePopoverOpen && renderDesktopAboutMePopover()}
      {isDesktopLayout && isSoftwaresPopoverOpen && renderDesktopSoftwaresPopover()}
      
      {isLanguagePopoverOpen && renderLanguagePopover()}
      {isSocialPopoverOpen && renderSocialPopover()}

      {isTabletLayout && showLeftSidebar && isTabletMenuPopoverOpen && !tabletMenuSubPopoverType && renderTabletMenuPopover()}
      {isTabletLayout && showLeftSidebar && tabletMenuSubPopoverType === 'caseStudies' && renderTabletCaseStudiesSubPopover()}
      {isTabletLayout && showLeftSidebar && tabletMenuSubPopoverType === 'aboutMe' && renderTabletAboutMeSubPopover()}
      {isTabletLayout && showLeftSidebar && tabletMenuSubPopoverType === 'softwares' && renderTabletSoftwaresSubPopover()}

      {!isDesktopLayout && !(isTabletLayout && showLeftSidebar) && (
        <>
          {isMobileMenuPopoverOpen && !mobileSubPopoverType && renderMobileMainMenuPopover()}
          {mobileSubPopoverType === 'caseStudies' && renderMobileCaseStudiesSubPopover()}
          {mobileSubPopoverType === 'aboutMe' && renderMobileAboutMeSubPopover()}
          {mobileSubPopoverType === 'softwares' && renderMobileSoftwaresSubPopover()}
        </>
      )}

    </>
  );
});
DynamicHeader.displayName = 'DynamicHeader';