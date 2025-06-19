
import React from 'react';
import { SectionData, TocItem, LocalizedString, Language, LocalizedGalleryImage, SocialLinkItem } from './types'; // Added SocialLinkItem
import LinkedInIcon from './components/LinkedInIcon';
import TikTokIcon from './components/TikTokIcon';
import YouTubeIcon from './components/YouTubeIcon';
import InstagramIcon from './components/InstagramIcon';
import XTwitterIcon from './components/XTwitterIcon';
import GithubIcon from './components/GithubIcon';
import BehanceIcon from './components/BehanceIcon';
import DribbleIcon from './components/DribbleIcon';
import MediumIcon from './components/MediumIcon';
import SubstackIcon from './components/SubstackIcon';


export const LINKEDIN_URL = "https://www.linkedin.com/in/yourusername"; 
export const TABLE_OF_CONTENTS_ID = 'case-study-index';

interface CTAButtonProps {
  text: LocalizedString;
  lang: Language;
  href: string;
  className?: string;
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  icon?: React.FC<{ className?: string }>; 
}

export const CTAButton: React.FC<CTAButtonProps> = ({ text, lang, href, className = "", buttonType = 'primary', icon: IconComponent }) => {
  let buttonClasses = `font-spectrum-bold transition-colors duration-150 ease-in-out inline-flex items-center justify-center 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-spectrum-background-primary-dark focus:ring-offset-spectrum-background-primary-light
                       overflow-hidden`; 

  switch (buttonType) {
    case 'primary': 
      buttonClasses += ` py-3 px-6 rounded-full whitespace-nowrap text-center 
                         bg-hover-nav-link-bg-light text-hover-nav-link-text-light
                         dark:bg-sidebar-nav-item-hover-bg-dark dark:text-sidebar-nav-item-hover-text-dark
                         hover:bg-custom-interactive-bg-light hover:text-custom-interactive-text-light
                         dark:hover:bg-custom-interactive-bg-dark dark:hover:text-custom-interactive-text-dark
                         focus:ring-custom-interactive-text-light dark:focus:ring-custom-interactive-text-dark`;
      break;
    case 'secondary': 
      buttonClasses += ` py-3 px-6 rounded-full whitespace-nowrap text-center font-spectrum-bold
                         bg-transparent text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark
                         hover:bg-hover-nav-link-bg-light hover:text-hover-nav-link-text-light 
                         dark:hover:bg-sidebar-nav-item-hover-bg-dark dark:hover:text-sidebar-nav-item-hover-text-dark 
                         focus:ring-custom-interactive-text-light dark:focus:ring-custom-interactive-text-dark`; 
      break;
    case 'tertiary': 
       buttonClasses += ` py-spectrum-100 px-spectrum-400 rounded-spectrum-100 text-spectrum-200
                          bg-transparent text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark 
                          hover:bg-spectrum-fill-tertiary-light dark:hover:bg-spectrum-fill-tertiary-dark 
                          focus:ring-spectrum-border-focus-light dark:focus:ring-spectrum-border-focus-dark`;
       break;
    default: 
      buttonClasses += ` py-3 px-6 rounded-full whitespace-nowrap text-center 
                         bg-hover-nav-link-bg-light text-hover-nav-link-text-light
                         dark:bg-sidebar-nav-item-hover-bg-dark dark:text-sidebar-nav-item-hover-text-dark
                         hover:bg-custom-interactive-bg-light hover:text-custom-interactive-text-light
                         dark:hover:bg-custom-interactive-bg-dark dark:hover:text-custom-interactive-text-dark
                         focus:ring-custom-interactive-text-light dark:focus:ring-custom-interactive-text-dark`;
  }
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonClasses} ${className}`}
    >
      {IconComponent && <IconComponent className="w-4 h-4 mr-spectrum-100" />}
      {text[lang]}
    </a>
  );
};

export const placeholderBgLightHex = 'E0E0E0'; 
export const placeholderTextLightHex = '0A0A0A'; 
export const placeholderBgDarkHex = '2A2A2A';   
export const placeholderTextDarkHex = 'FAFAFA';  

const galleryImages: LocalizedGalleryImage[] = [
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=Sketches+Conceptuales&font=inter`, alt: { en: "Conceptual Sketches", es: "Bocetos y Sketches Conceptuales" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=Wireframes+Digitales&font=inter`, alt: { en: "Digital Wireframes", es: "Wireframes Digitales de Baja Fidelidad" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=User+Flows&font=inter`, alt: { en: "Detailed User Flows", es: "Diagramas de User Flows" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=Mapas+Afinidad&font=inter`, alt: { en: "Affinity Maps", es: "Mapas de Afinidad de Investigación" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=User+Personas&font=inter`, alt: { en: "Detailed User Personas", es: "User Personas Detalladas" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=Journey+Maps&font=inter`, alt: { en: "Customer Journey Maps", es: "Customer Journey Maps" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=Pruebas+Usabilidad&font=inter`, alt: { en: "Usability Testing", es: "Ejecución de Pruebas de Usabilidad" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=UI+Kit&font=inter`, alt: { en: "UI Kit / Design System Components", es: "Componentes del UI Kit / Design System" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=Mockups+Fidelidad&font=inter`, alt: { en: "High-Fidelity Mockups", es: "Mockups de Alta Fidelidad" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=User+Journey+Map&font=inter`, alt: {en: "Detailed User Journey Map", es: "User Journey Map Detallado" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=Análisis+Competitivo&font=inter`, alt: {en: "Competitive Analysis Matrix", es: "Matriz de Análisis Competitivo" } },
  { src: `https://placehold.co/600x600/${placeholderBgLightHex}/${placeholderTextLightHex}?text=Auditoría+Accesibilidad&font=inter`, alt: {en: "Accessibility Audit Report", es: "Informe de Auditoría de Accesibilidad" } },
];

interface ProblemDetailCardData {
  emoji: string;
  title: LocalizedString;
  imgTextLight: LocalizedString;
  imgTextDark: LocalizedString;
  altText: LocalizedString;
  content: (lang: Language) => React.ReactNode;
}

const problemDetailsCards: ProblemDetailCardData[] = [
  {
    emoji: '📉',
    title: { es: 'Métrica Crítica', en: 'Critical Metric' },
    imgTextLight: { es: 'Métrica+Crítica', en: 'Critical+Metric' },
    imgTextDark: { es: 'Métrica+Crítica', en: 'Critical+Metric' },
    altText: { es: "Ilustración para Métrica Crítica del Problema", en: "Illustration for Problem's Critical Metric" },
    content: (lang: Language) => lang === 'es'
        ? <>La tasa de abandono del 85% en el proceso de compra es la métrica más preocupante.</>
        : <>The checkout process has an 85% abandonment rate, which is the most concerning metric.</>
  },
  {
    emoji: '😵‍💫',
    title: { es: 'Principal Síntoma', en: 'Main Symptom' },
    imgTextLight: { es: 'P.+Síntoma', en: 'Main+Symptom' }, 
    imgTextDark: { es: 'P.+Síntoma', en: 'Main+Symptom' }, 
    altText: { es: "Ilustración para Principal Síntoma del Problema", en: "Illustration for Problem's Main Symptom" },
    content: (lang: Language) => lang === 'es'
        ? <>El checkout es percibido como confuso y poco intuitivo por los usuarios.</>
        : <>The checkout is perceived by users as confusing and unintuitive.</>
  },
  {
    emoji: '🚧',
    title: { es: 'Punto de Fricción', en: 'Friction Point' },
    imgTextLight: { es: 'P.+Fricción', en: 'Friction+Pt.' }, 
    imgTextDark: { es: 'P.+Fricción', en: 'Friction+Pt.' }, 
    altText: { es: "Ilustración para Punto de Fricción del Problema", en: "Illustration for Problem's Friction Point" },
    content: (lang: Language) => lang === 'es'
        ? <>Se identificó el registro obligatorio antes del pago como una barrera principal.</>
        : <> Mandatory registration before payment was identified as a key barrier.</>
  },
  {
    emoji: '💸',
    title: { es: 'Consecuencia', en: 'Consequence' },
    imgTextLight: { es: 'Consecuencia', en: 'Consequence' },
    imgTextDark: { es: 'Consecuencia', en: 'Consequence' },
    altText: { es: "Ilustración para Consecuencia del Problema", en: "Illustration for Problem's Consequence" },
    content: (lang: Language) => lang === 'es'
        ? <>Esto se traduce directamente en pérdida de ventas y menor confianza del usuario.</>
        : <>This directly translates to lost sales and reduced user trust.</>
  }
];

const conclusionCardTitles: LocalizedString[] = [
  { es: "Generé un impacto medible y directo en el negocio", en: "Generated a measurable and direct business impact" },
  { es: "Elevé la satisfacción y confianza del cliente", en: "Elevated customer satisfaction and trust" },
  { es: "Fortalecí la colaboración interdepartamental efectiva", en: "Strengthened effective interdepartmental collaboration" },
  { es: "Apliqué un proceso de diseño iterativo y basado en datos", en: "Applied an iterative, data-driven design process" },
  { es: "Demostré el valor estratégico del UX en la consecución de objetivos", en: "Demonstrated the strategic value of UX in achieving objectives" }
];


export const SECTIONS_DATA: SectionData[] = [
  {
    id: 'introduccion',
    title: { en: '1. Introduction', es: '1. Introducción' },
    emoji: '🚀',
    tocSubheadings: [
        { en: 'Project Context', es: 'Contexto del proyecto' },
        { en: 'My Role and Responsibilities', es: 'Mi Rol y Responsabilidades' },
        { en: 'Key Project Details', es: 'Detalles Clave del Proyecto' }
    ],
    content: (lang: Language) => (
      <>
        <p className="text-spectrum-200 leading-relaxed mb-6">
          {lang === 'es' 
            ? <>Este caso de estudio detalla el rediseño integral de la experiencia de checkout de la aplicación de e-commerce "ModaHoy", un proyecto enfocado en optimizar la conversión y robustecer la confianza del usuario a través de un diseño UX/UI estratégico y centrado en el usuario.</>
            : <>This case study details the comprehensive redesign of the checkout experience for the "ModaHoy" e-commerce application, a project focused on optimizing conversion and strengthening user trust through strategic, user-centered UX/UI design.</>
          }
        </p>
        
        <h3 className="text-spectrum-400 !mt-spectrum-300 !mb-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Contexto del Proyecto' : 'Project Context'}</h3>
        <p className="text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
          {lang === 'es'
            ? <>ModaHoy enfrentaba una alta tasa de abandono de carritos, atribuida a un flujo de checkout percibido como confuso, largo y poco fiable. El objetivo era transformar esta etapa crítica en una experiencia fluida, intuitiva y segura.</>
            : <>ModaHoy faced a high cart abandonment rate, attributed to a checkout flow perceived as confusing, lengthy, and unreliable. The goal was to transform this critical stage into a smooth, intuitive, and secure experience.</>
          }
        </p>

        <h3 className="text-spectrum-400 !mt-spectrum-400 !mb-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Mi Rol y Responsabilidades' : 'My Role and Responsibilities'}</h3>
        <p className="text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
          {lang === 'es'
            ? <>Como Diseñador UX/UI Principal, lideré el proceso de diseño de extremo a extremo, incluyendo:</>
            : <>As the Lead UX/UI Designer, I led the end-to-end design process, including:</>
          }
        </p>
        <ul className="list-disc list-inside space-y-spectrum-50 mt-spectrum-100 mb-spectrum-300 text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
          <li>{lang === 'es' ? 'Investigación exhaustiva de usuarios y análisis de la competencia.' : 'Exhaustive user research and competitive analysis.'}</li>
          <li>{lang === 'es' ? 'Definición del problema y alineación de objetivos.' : 'Problem definition and objective alignment.'}</li>
          <li>{lang === 'es' ? 'Ideación y conceptualización de soluciones (User Flows, Wireframes).' : 'Ideation and solution conceptualization (User Flows, Wireframes).'}</li>
          <li>{lang === 'es' ? 'Diseño de prototipos interactivos (Baja y Alta Fidelidad).' : 'Design of interactive prototypes (Low and High Fidelity).'}</li>
          <li>{lang === 'es' ? 'Planificación y ejecución de pruebas de usabilidad.' : 'Planning and execution of usability tests.'}</li>
          <li>{lang === 'es' ? 'Diseño final de la interfaz y creación de especificaciones para desarrollo.' : 'Final interface design and creation of development specifications.'}</li>
          <li>{lang === 'es' ? 'Colaboración continua con Product Management y Desarrollo.' : 'Continuous collaboration with Product Management and Development.'}</li>
        </ul>

        <h3 className="text-spectrum-400 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-200 mt-spectrum-400">{lang === 'es' ? 'Detalles Clave del Proyecto' : 'Key Project Details'}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-spectrum-200">
          {[
            {emoji: '⏱️', title: lang === 'es' ? 'Duración' : 'Duration', value: lang === 'es' ? '8 Semanas' : '8 Weeks'},
            {emoji: '🧑‍💻', title: lang === 'es' ? 'Mi Rol' : 'My Role', value: lang === 'es' ? 'Diseñador UX/UI Principal' : 'Lead UX/UI Designer'},
            {emoji: '🤝', title: lang === 'es' ? 'Equipo Clave' : 'Key Team', value: lang === 'es' ? '1 PM, 2 Devs' : '1 PM, 2 Devs'},
            {emoji: '🛠️', title: lang === 'es' ? 'Herramientas' : 'Tools', value: lang === 'es' ? 'Figma, FigJam, Maze, Notion, Analytics' : 'Figma, FigJam, Maze, Notion, Analytics'}
          ].map(item => (
            <div key={item.title} className="bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark p-spectrum-200 rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark">
              <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-50 flex items-center">
                <span className="text-xl mr-spectrum-100" aria-hidden="true">{item.emoji}</span>{item.title}
              </h4>
              <p className="text-spectrum-100 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'problema-desafio',
    title: { en: '2. Problem / Challenge', es: '2. Problema / Desafío' },
    emoji: '⚠️',
    tocSubheadings: [
        { en: 'General Problem Context', es: 'Contexto General del Problema' },
        { en: 'Identifying the Main Problem', es: 'Identificación del Problema Principal' },
        { en: 'Impact on Users and Business', es: 'Impacto en Usuarios y Negocio' },
        { en: 'Key Problem Details', es: 'Detalles Clave del Problema' }
    ],
    content: (lang: Language) => (
      <>
        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
            <p className="text-spectrum-200 leading-relaxed mb-6">
            {lang === 'es' 
                ? <>La plataforma de e-commerce "ModaHoy" se enfrentaba a un desafío crítico: una tasa de abandono del carrito de compras alarmantemente alta (85%), muy por encima de la media del sector. Este problema no solo mermaba las conversiones directas, sino que también erosionaba la confianza y la satisfacción del usuario.</>
                : <>The "ModaHoy" e-commerce platform faced a critical challenge: an alarmingly high shopping cart abandonment rate (85%), far above the industry average. This issue not only diminished direct conversions but also eroded user trust and satisfaction.</>
            }
            </p>

            <h3 className="text-spectrum-400 !mt-spectrum-300 !mb-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Identificación del Problema Principal' : 'Identifying the Main Problem'}</h3>
            <p>
            {lang === 'es'
                ? <>Tras un análisis inicial de datos y feedback de clientes, el problema principal se centró en un proceso de checkout percibido como confuso, excesivamente largo y poco fiable. Los usuarios manifestaban desconfianza al introducir datos de pago y frustración por la falta de transparencia en los costos finales.</>
                : <>After an initial analysis of data and customer feedback, the main problem centered on a checkout process perceived as confusing, excessively long, and unreliable. Users expressed distrust when entering payment details and frustration due to the lack of transparency in final costs.</>
            }
            </p>

            <h3 className="text-spectrum-400 !mt-spectrum-400 !mb-spectrum-100 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Impacto en Usuarios y Negocio' : 'Impact on Users and Business'}</h3>
            <ul className="list-disc list-inside space-y-spectrum-50 mt-spectrum-100 mb-spectrum-300">
                <li><strong className="font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Usuarios' : 'Users'}:</strong> {lang === 'es' ? 'Experimentaban frustración, pérdida de tiempo y una percepción negativa de la marca. La falta de confianza los llevaba a abandonar la compra.' : 'Experienced frustration, wasted time, and a negative brand perception. Lack of trust led them to abandon purchases.'}</li>
                <li><strong className="font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Negocio' : 'Business'}:</strong> {lang === 'es' ? 'Pérdida significativa de ingresos potenciales, baja tasa de conversión, y un posible daño a la reputación de la marca a largo plazo.' : 'Significant loss of potential revenue, low conversion rates, and potential long-term damage to brand reputation.'}</li>
            </ul>
        </div>
        
        <h3 className="text-spectrum-400 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-200 mt-spectrum-500">{lang === 'es' ? 'Detalles Clave del Problema' : 'Key Problem Details'}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-spectrum-200">
          {problemDetailsCards.map(card => (
            <div 
              key={card.title.es} 
              className="flex flex-col p-spectrum-200 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark hover:shadow-spectrum-100 transition-shadow duration-200"
            >
              <img 
                src={`https://placehold.co/400x150/${document.documentElement.classList.contains('dark') ? placeholderBgDarkHex : placeholderBgLightHex}/${document.documentElement.classList.contains('dark') ? placeholderTextDarkHex : placeholderTextLightHex}?text=${encodeURIComponent(document.documentElement.classList.contains('dark') ? card.imgTextDark[lang] : card.imgTextLight[lang])}&font=inter`} 
                alt={card.altText[lang]} 
                className="w-full h-32 object-cover rounded-spectrum-100 mb-spectrum-100" 
              />
              <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-75 flex items-center !mt-0">
                <span className="text-xl mr-spectrum-100" aria-hidden="true">{card.emoji}</span>
                {card.title[lang]}
              </h4>
              <p className="text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark leading-relaxed">
                {card.content(lang)}
              </p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'objetivos',
    title: { en: '3. Objectives', es: '3. Objetivos' },
    emoji: '🎯',
    tocSubheadings: [
        { en: 'Business Goals', es: 'Metas de negocio' },
        { en: 'UX Objectives', es: 'Objetivos de UX' },
        { en: 'Success Criteria', es: 'Criterios de éxito' }
    ],
    content: (lang: Language) => (
      <>
        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark mb-spectrum-300">
            <p>{lang === 'es' ? 'Para abordar el desafío, establecimos objetivos claros y medibles que alineaban las necesidades del negocio con las de nuestros usuarios:' : 'To address the challenge, we established clear and measurable objectives that aligned business needs with those of our users:'}</p>
        </div>
        <div className="mt-spectrum-300 grid grid-cols-1 md:grid-cols-3 gap-spectrum-200">
          {[
            {emoji:'📈', title: lang==='es' ? 'Objetivo de Negocio:' : 'Business Goal:', text: lang==='es' ? <>Reducir la tasa de abandono del carrito en un 20% en los primeros 3 meses tras el lanzamiento.</> : <>Reduce cart abandonment rate by 20% within the first 3 months post-launch.</>, imgTextLight: {es:'Meta+Negocio', en:'Business+Goal'}, imgTextDark: {es:'Meta+Negocio', en:'Business+Goal'}},
            {emoji:'🎨', title: lang==='es' ? 'Objetivo de UX:' : 'UX Objective:', text: lang==='es' ? <>Disminuir el tiempo promedio para completar el proceso de checkout en un 30%.</> : <>Decrease the average time to complete the checkout process by 30%.</>, imgTextLight: {es:'Meta+UX', en:'UX+Goal'}, imgTextDark: {es:'Meta+UX', en:'UX+Goal'}},
            {emoji:'🧑‍💻', title: lang==='es' ? 'Objetivo de Usuario:' : 'User Goal:', text: lang==='es' ? <>Aumentar la puntuación de satisfacción del usuario (CSAT) relacionada con el proceso de compra de 2.5 a 4 (sobre 5).</> : <>Increase the user satisfaction score (CSAT) related to the checkout process from 2.5 to 4 (out of 5).</>, imgTextLight: {es:'Meta+Usuario', en:'User+Goal'}, imgTextDark: {es:'Meta+Usuario', en:'User+Goal'}},
          ].map(card => (
            <div key={card.title} className="flex flex-col p-spectrum-200 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark hover:shadow-spectrum-100 transition-shadow duration-200">
              <img src={`https://placehold.co/400x150/${document.documentElement.classList.contains('dark') ? placeholderBgDarkHex : placeholderBgLightHex}/${document.documentElement.classList.contains('dark') ? placeholderTextDarkHex : placeholderTextLightHex}?text=${encodeURIComponent(document.documentElement.classList.contains('dark') ? card.imgTextDark[lang] : card.imgTextLight[lang])}&font=inter`} alt={card.title} className="w-full h-32 object-cover rounded-spectrum-100 mb-spectrum-100"/>
              <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-75 flex items-center !mt-0">{card.emoji} {card.title}</h4>
              <p className="text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark leading-relaxed">
                  {card.text}
              </p>
            </div>
          ))}
        </div>
      </>
    ),
  },
    {
    id: 'investigacion',
    title: { en: '4. Research', es: '4. Investigación (Research)' },
    emoji: '🔍',
    tocSubheadings: [
        { en: 'Metrics Analysis', es: 'Análisis de Métricas' },
        { en: 'User Interviews', es: 'Entrevistas con Usuarios' },
        { en: 'Competitive Analysis', es: 'Análisis Competitivo' },
        { en: 'Online Surveys', es: 'Encuestas Online' },
        { en: 'Key Insights', es: 'Insights Clave' },
        { en: 'User Personas', es: 'User Personas' }
    ],
    content: (lang: Language) => (
      <div className="space-y-spectrum-500">
        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
             <p>{lang === 'es' ? 'Para comprender a fondo el problema, llevamos a cabo una fase de investigación mixta que combinó métodos cualitativos y cuantitativos, enfocándonos en la experiencia del usuario y las oportunidades de mejora:' : 'To thoroughly understand the problem, we conducted a mixed research phase combining qualitative and quantitative methods, focusing on user experience and improvement opportunities:'}</p>
        </div>

        {[
            { title: {es: 'Análisis de Métricas', en: 'Metrics Analysis'}, text: lang === 'es' ? <>Revisamos los embudos de conversión en Google Analytics para identificar con precisión los puntos exactos donde los usuarios abandonaban el proceso de compra. Esto nos proporcionó datos cuantitativos cruciales sobre la magnitud del problema en cada paso del checkout.</> : <>We reviewed conversion funnels in Google Analytics to precisely identify the exact points where users abandoned the checkout process. This provided us with crucial quantitative data on the magnitude of the problem at each step of the checkout.</>, visuText: lang === 'es' ? 'Diagrama de Embudo' : 'Funnel Diagram', reverse: false },
            { title: {es: 'Entrevistas con Usuarios', en: 'User Interviews'}, text: lang === 'es' ? <>Realizamos 8 entrevistas semi-estructuradas con una combinación de clientes recurrentes y usuarios que habían abandonado carritos recientemente. El objetivo fue profundizar en sus motivaciones, frustraciones y expectativas respecto al proceso de pago.</> : <>We conducted 8 semi-structured interviews with a combination of recurring customers and users who had recently abandoned carts. The goal was to delve into their motivations, frustrations, and expectations regarding the payment process.</>, visuText: lang === 'es' ? 'Citas Clave' : 'Key Quotes', reverse: true },
            { title: {es: 'Análisis Competitivo', en: 'Competitive Analysis'}, text: lang === 'es' ? <>Evaluamos los flujos de checkout de 5 competidores directos e indirectos para identificar patrones, mejores prácticas de la industria y posibles áreas de diferenciación para ModaHoy.</> : <>We evaluated the checkout flows of 5 direct and indirect competitors to identify patterns, industry best practices, and potential areas of differentiation for ModaHoy.</>, visuText: lang === 'es' ? 'Comparativa Features' : 'Feature Comparison', reverse: false },
            { title: {es: 'Encuestas Online', en: 'Online Surveys'}, text: lang === 'es' ? <>Lanzamos una encuesta en el sitio web, dirigida a usuarios que llegaban al carrito, para obtener datos cuantitativos adicionales sobre los principales puntos de dolor y las características más deseadas en un proceso de checkout ideal.</> : <>We launched an online survey on the website, targeting users who reached the cart, to obtain additional quantitative data on major pain points and the most desired features in an ideal checkout process.</>, visuText: lang === 'es' ? 'Gráfico Resultados' : 'Results Chart', reverse: true },
        ].map(item => (
            <div key={item.title.es} className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-spectrum-300 md:gap-spectrum-400 p-spectrum-200 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark`}>
              <div className="md:w-1/2 w-full">
                <div className={`aspect-[16/9] border border-spectrum-border-default-light dark:border-spectrum-border-default-dark rounded-spectrum-100 flex items-center justify-center p-spectrum-200 bg-transparent`}>
                  <span className="text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark text-spectrum-100 text-center">{item.visuText}</span>
                </div>
              </div>
              <div className="md:w-1/2 prose dark:prose-invert text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark max-w-none">
                <h4 className="text-spectrum-300 font-spectrum-semibold mb-spectrum-100 !mt-0 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{item.title[lang]}</h4>
                <div className="leading-relaxed">{item.text}</div>
              </div>
            </div>
        ))}

        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
            <h3 className="text-spectrum-500 font-spectrum-regular mt-spectrum-500 mb-spectrum-200 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Insights Clave (Descubrimientos)' : 'Key Insights (Discoveries)'}</h3>
            <ol className="list-decimal list-inside space-y-spectrum-50">
            <li><strong className="font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Falta de transparencia:' : 'Lack of transparency:'}</strong> {lang === 'es' ? <>Los usuarios se sentían frustrados por los costos inesperados (envío, impuestos) que aparecían al final del proceso.</> : <>Users were frustrated by unexpected costs (shipping, taxes) appearing at the end of the process.</>}</li>
            <li><strong className="font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Proceso largo y tedioso:' : 'Long and tedious process:'}</strong> {lang === 'es' ? <>El requisito de crear una cuenta antes de pagar era una barrera importante y un motivo frecuente de abandono.</> : <>The requirement to create an account before paying was a significant barrier and a frequent reason for abandonment.</>}</li>
            <li><strong className="font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Inseguridad en el pago:' : 'Payment insecurity:'}</strong> {lang === 'es' ? <>El diseño de la página de pago no transmitía la suficiente confianza para introducir datos de tarjetas de crédito.</> : <>The payment page design did not inspire enough confidence to enter credit card details.</>}</li>
            </ol>
        </div>
        
        <div>
          <h3 className="text-spectrum-500 font-spectrum-regular text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mt-spectrum-500 mb-spectrum-200">{lang === 'es' ? 'Perfiles de Usuario (User Personas)' : 'User Personas'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-spectrum-200 items-stretch">
            <div className="flex flex-col h-full bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark p-spectrum-200 rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark">
              <div className="flex flex-col flex-grow prose-sm max-w-none dark:prose-invert text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
                <h4 className="font-spectrum-semibold text-spectrum-300 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-100 !mt-0"> 
                  <span className="transform-none inline-block mr-spectrum-100 text-xl">👩</span>{lang === 'es' ? 'Ana, la Compradora Ocupada' : 'Ana, the Busy Shopper'}
                </h4>
                <p className="leading-relaxed flex-grow"> 
                  {lang === 'es' 
                    ? <>Basado en los insights, creamos a "Ana, la Compradora Ocupada", una profesional de 32 años que valora la eficiencia y la transparencia en sus compras online. Ana suele abandonar carritos si el proceso es largo, si se siente insegura o si hay costos sorpresa al final. Representa el arquetipo de usuario más afectado por los problemas identificados. Este texto usa mark global.</>
                    : <>Based on insights, we created "Ana, the Busy Shopper," a 32-year-old professional who values efficiency and transparency in her online purchases. Ana often abandons carts if the process is long, if she feels insecure, or if there are surprise costs at the end. She represents the user archetype most affected by the identified problems. This text uses global mark.</>
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col h-full bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark p-spectrum-200 rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark">
              <div className="flex flex-col flex-grow prose-sm max-w-none dark:prose-invert text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
                <h4 className="font-spectrum-semibold text-spectrum-300 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-100 !mt-0">
                  <span className="transform-none inline-block mr-spectrum-100 text-xl">👨</span>{lang === 'es' ? 'David, el Comprador Exigente' : 'David, the Discerning Shopper'}
                </h4>
                <p className="leading-relaxed flex-grow">
                  {lang === 'es' 
                    ? <>Basado en los insights, también definimos a "David, el Comprador Exigente", un analista de datos de 38 años. David es meticuloso y valora la seguridad y la transparencia por encima de todo. Abandona las compras si percibe falta de profesionalismo en el checkout, si los costos no son claros desde el inicio o si el proceso de pago le parece engorroso o inseguro. Para él, un flujo de compra eficiente y que inspire confianza es fundamental para completar una transacción.</>
                    : <>Based on insights, we also defined "David, the Discerning Shopper," a 38-year-old data analyst. David is meticulous and values security and transparency above all. He abandons purchases if he perceives a lack of professionalism in the checkout, if costs are not clear from the start, or if the payment process seems cumbersome or insecure. For him, an efficient and trust-inspiring purchase flow is essential to complete a transaction.</>
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
   {
    id: 'definicion-problema',
    title: { en: '5. Problem Definition', es: '5. Definición del Problema' },
    emoji: '💬', 
    tocSubheadings: [
        { en: 'User-Centered Statements', es: 'Declaraciones centradas en el usuario' }
    ],
    content: (lang: Language) => (
      <>
        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
          <h3 className="text-spectrum-400 font-spectrum-semibold mb-spectrum-200 !mt-0 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Declaraciones Centradas en el Usuario:' : 'User-Centered Statements:'}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-spectrum-200">
            <div className="bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark p-spectrum-200 rounded-spectrum-200 flex items-start border border-spectrum-border-default-light dark:border-spectrum-border-default-dark">
                <span className="text-2xl mr-spectrum-100 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark transform-none">👩</span>
                <div className="prose-sm dark:prose-invert text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark flex-grow">
                    <p className="leading-relaxed !m-0"> 
                        {lang === 'es' 
                            ? <>"Ana, una compradora online frecuente con poco tiempo, necesita un proceso de pago que sea transparente y rápido porque los flujos largos y con costos ocultos le generan desconfianza y la llevan a abandonar su compra, aunque le interese el producto."</>
                            : <>"Ana, a frequent online shopper with little time, needs a payment process that is transparent and fast because long flows with hidden costs generate distrust and lead her to abandon her purchase, even if she is interested in the product."</>
                        }
                    </p>
                </div>
            </div>
            <div className="bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark p-spectrum-200 rounded-spectrum-200 flex items-start border border-spectrum-border-default-light dark:border-spectrum-border-default-dark">
                <span className="text-2xl mr-spectrum-100 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark transform-none">👨</span> 
                <div className="prose-sm dark:prose-invert text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark flex-grow">
                    <p className="leading-relaxed !m-0"> 
                         {lang === 'es' 
                            ? <>"David, un comprador online experimentado, espera un proceso de pago seguro y claro. Si la web no inspira confianza o los costos no son transparentes desde el inicio, prefiere buscar en otro sitio, incluso si el producto le interesa."</>
                            : <>"David, an experienced online shopper, expects a secure and clear payment process. If the website does not inspire confidence or costs are not transparent from the start, he prefers to look elsewhere, even if the product interests him."</>
                        }
                    </p>
                </div>
            </div>
        </div>
      </>
    ),
  },
  {
    id: 'proceso-diseno',
    title: { en: '6. Design Process', es: '6. Proceso de Diseño' },
    emoji: '💭',
    tocSubheadings: [
        { en: 'Strategy and Vision', es: 'Estrategia y Visión' },
        { en: 'Research and Definition', es: 'Investigación y Definición' },
        { en: 'Ideation and User Flows', es: 'Ideación y User Flows' },
        { en: 'Prototypes (Low & High Fidelity)', es: 'Prototipos (Baja y Alta Fidelidad)' },
        { en: 'Usability Testing', es: 'Pruebas de Usabilidad' },
        { en: 'UI, Design Systems & Accessibility', es: 'UI, Design Systems y Accesibilidad' },
        { en: 'Info. Architecture & UX Content', es: 'Arquitectura de Info. y Contenido UX' },
        { en: 'Product Marketing & GTM', es: 'Marketing de Producto y GTM' },
        { en: 'Growth & Continuous Analytics', es: 'Crecimiento y Analítica Continua' },
        { en: 'Process Gallery', es: 'Galería del Proceso' }
    ],
    content: (lang: Language) => (
      <>
        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark mb-spectrum-300">
            <p>{lang === 'es' ? 'Con una definición clara del problema y los objetivos establecidos, nuestro proceso de diseño se enfocó en un ciclo iterativo de investigación, ideación, prototipado, prueba y refinamiento, abarcando todo el espectro de un Product Designer.' : 'With a clear problem definition and established objectives, our design process focused on an iterative cycle of research, ideation, prototyping, testing, and refinement, covering the full spectrum of a Product Designer.'}</p>
        </div>
        <div className="mt-spectrum-300 grid grid-cols-1 gap-spectrum-200">
            {[
                {imgTextLight: {es: 'Estrategia', en: 'Strategy'}, imgTextDark: {es: 'Estrategia', en: 'Strategy'}, titleText: {es: 'Estrategia de Producto y Visión de Negocio', en: 'Product Strategy and Business Vision'}, emoji: '📊', contentText: {es: <>Definición de la visión del producto, alineación con objetivos de negocio (OKRs), y North Star Metric. Análisis de modelos de negocio, monetización, y Product Market Fit.</>, en: <>Defining the product vision, alignment with business objectives (OKRs), and North Star Metric. Analysis of business models, monetization, and Product Market Fit.</>}},
                {imgTextLight: {es: 'Investigación', en: 'Research'}, imgTextDark: {es: 'Investigación', en: 'Research'}, titleText: {es: 'Investigación Profunda y Definición', en: 'Deep Research and Definition'}, emoji: '🎯', contentText: {es: <>Ejecución de Design Research (cualitativo y cuantitativo). Creación de Jobs To Be Done (JTBD), User Stories, y Brief/PRD detallados. Planteamiento de hipótesis y roadmap inicial.</>, en: <>Execution of Design Research (qualitative and quantitative). Creation of Jobs To Be Done (JTBD), User Stories, and detailed Brief/PRD. Hypothesis formulation and initial roadmap.</>}},
                {imgTextLight: {es: 'User+Flow', en: 'User+Flow'}, imgTextDark: {es: 'User+Flow', en: 'User+Flow'}, titleText: {es: 'Ideación y User Flows', en: 'Ideation and User Flows'}, emoji: '🌪️', contentText: {es: <>Comenzamos con una sesión de brainstorming (Crazy 8's) para generar múltiples soluciones. Seleccionamos las más prometedoras y las plasmamos en un nuevo User Flow optimizado que incluía una opción de "checkout como invitado" y un resumen de costos visible en todo momento.</>, en: <>We started with a brainstorming session (Crazy 8's) to generate multiple solutions. We selected the most promising ones and translated them into a new optimized User Flow that included a "guest checkout" option and a cost summary visible at all times.</>}},
                {imgTextLight: {es: 'Prototipos', en: 'Prototypes'}, imgTextDark: {es: 'Prototipos', en: 'Prototypes'}, titleText: {es: 'Prototipos (Baja y Alta Fidelidad)', en: 'Prototypes (Low & High Fidelity)'}, emoji: '📱', contentText: {es: <><ul className="list-disc list-inside space-y-spectrum-25 !pl-0"><li className="!mt-0"><strong className="font-spectrum-bold">Baja Fidelidad:</strong> Creamos bocetos y wireframes digitales para validar la estructura.</li><li><strong className="font-spectrum-bold">Alta Fidelidad:</strong> Desarrollamos prototipos en Figma, aplicando el Design System.</li></ul></>, en: <><ul className="list-disc list-inside space-y-spectrum-25 !pl-0"><li className="!mt-0"><strong className="font-spectrum-bold">Low Fidelity:</strong> We created sketches and digital wireframes to validate structure.</li><li><strong className="font-spectrum-bold">High Fidelity:</strong> Developed prototypes in Figma, applying the Design System.</li></ul></>}},
                {imgTextLight: {es: 'Pruebas', en: 'Testing'}, imgTextDark: {es: 'Pruebas', en: 'Testing'}, titleText: {es: 'Pruebas de Usabilidad e Iteraciones', en: 'Usability Testing & Iterations'}, emoji: '🧪', contentText: {es: <>Realizamos dos rondas de pruebas con 5 usuarios cada una. Descubrimos un problema con un botón de descuento, iteramos, y en la segunda ronda, el 100% de los usuarios lo encontraron.</>, en: <>We conducted two rounds of tests with 5 users each. Found an issue with a discount button, iterated, and in the second round, 100% of users found it.</>}},
                {imgTextLight: {es: 'UI+DS', en: 'UI+DS'}, imgTextDark: {es: 'UI+DS', en: 'UI+DS'}, titleText: {es: 'Diseño UI, Sistemas de Diseño y Accesibilidad', en: 'UI Design, Design Systems & Accessibility'}, emoji: '✨', contentText: {es: <>Creación de guías de estilo, Design Systems y UI Kits. Diseño visual, microinteracciones, e iconografía. Asegurando accesibilidad (WCAG).</>, en: <>Creation of style guides, Design Systems, and UI Kits. Visual design, microinteractions, and iconography. Ensuring accessibility (WCAG).</>}},
                {imgTextLight: {es: 'IA+Contenido', en: 'IA+Content'}, imgTextDark: {es: 'IA+Contenido', en: 'IA+Content'}, titleText: {es: 'Arquitectura de Información y Contenido UX', en: 'Information Architecture & UX Content'}, emoji: '✍️', contentText: {es: <>Diseño de Arquitectura de Información. Card Sorting, Tree Testing. Desarrollo de UX Writing, manual de voz y tono, e inventarios de contenido.</>, en: <>Design of Information Architecture. Card Sorting, Tree Testing. Development of UX Writing, voice and tone manual, and content inventories.</>}},
                {imgTextLight: {es: 'Marketing', en: 'Marketing'}, imgTextDark: {es: 'Marketing', en: 'Marketing'}, titleText: {es: 'Marketing de Producto y Go-To-Market (GTM)', en: 'Product Marketing & Go-To-Market (GTM)'}, emoji: '🚀', contentText: {es: <>Colaboración en Product Marketing, definición de buyer personas, y Marketing Funnel. Planificación y ejecución de estrategias Go-To-Market (GTM).</>, en: <>Collaboration in Product Marketing, definition of buyer personas, and Marketing Funnel. Planning and execution of Go-To-Market (GTM) strategies.</>}},
                {imgTextLight: {es: 'Crecimiento', en: 'Growth'}, imgTextDark: {es: 'Crecimiento', en: 'Growth'}, titleText: {es: 'Crecimiento de Producto y Analítica Continua', en: 'Product Growth & Continuous Analytics'}, emoji: '📈', contentText: {es: <>Implementación de estrategias de Product Growth (AARRR funnel). Diseño de experimentos (A/B testing). Seguimiento de métricas para la mejora continua.</>, en: <>Implementation of Product Growth strategies (AARRR funnel). Design of experiments (A/B testing). Tracking of metrics for continuous improvement.</>}},
            ].map(card => (
                 <div key={card.titleText.es} className="flex flex-col bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark overflow-hidden hover:shadow-spectrum-100 transition-shadow duration-200">
                    <img src={`https://placehold.co/600x280/${document.documentElement.classList.contains('dark') ? placeholderBgDarkHex : placeholderBgLightHex}/${document.documentElement.classList.contains('dark') ? placeholderTextDarkHex : placeholderTextLightHex}?text=${encodeURIComponent(document.documentElement.classList.contains('dark') ? card.imgTextDark[lang] : card.imgTextLight[lang])}&font=inter`} alt={card.titleText[lang]} className="w-full h-40 object-cover"/>
                    <div className="p-spectrum-200 prose-sm dark:prose-invert text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark max-w-none flex-grow flex flex-col">
                        <h4 className="text-spectrum-300 font-spectrum-semibold mb-spectrum-75 !mt-0 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{card.emoji} {card.titleText[lang]}</h4>
                        <div className="leading-relaxed flex-grow">{card.contentText[lang]}</div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
          <h3 className="text-spectrum-500 font-spectrum-regular mt-spectrum-500 mb-spectrum-300 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">🖼️ {lang === 'es' ? 'Galería del Proceso de Diseño' : 'Design Process Gallery'}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-spectrum-200">
          {galleryImages.slice(0, 6).map((image, index) => (
            <div 
              key={index} 
              className="bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark p-spectrum-50 rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark aspect-square"
            >
              <img
                src={image.src.replace(/\s/g, '+').replace(/([0-9A-Fa-f]{6})\/([0-9A-Fa-f]{6})/, `${document.documentElement.classList.contains('dark') ? placeholderBgDarkHex : placeholderBgLightHex}/${document.documentElement.classList.contains('dark') ? placeholderTextDarkHex : placeholderTextLightHex}`)}
                alt={image.alt[lang]}
                className="rounded-spectrum-100 object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'solucion-final',
    title: { en: '7. Final Solution', es: '7. Solución Final' },
    emoji: '🎁',
    tocSubheadings: [
        { en: 'Implemented Features', es: 'Características implementadas' },
        { en: 'How it Addresses Insights', es: 'Cómo aborda los insights' }
    ],
    content: (lang: Language) => (
      <>
        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark mb-spectrum-300">
            <p>{lang === 'es' ? <>La solución final es un flujo de checkout rediseñado en 3 pasos clave que aborda directamente los insights de la investigación:</> : <>The final solution is a redesigned checkout flow in 3 key steps that directly addresses the research insights:</>}</p>
        </div>
        <div className="mt-spectrum-300 grid grid-cols-1 gap-spectrum-200">
           {[
            {emoji:'🛒', title: {es: 'Checkout como Invitado', en: 'Guest Checkout'}, text: lang==='es' ? <>Se implementó una opción prominente para comprar sin crear una cuenta, eliminando la principal barrera de entrada. Los usuarios pueden crear una cuenta opcionalmente después de la compra.</> : <>A prominent option to purchase without creating an account was implemented, eliminating the main entry barrier. Users can optionally create an account after purchase.</>, imgTextLight: {es:'Checkout+Invitado', en:'Guest+Checkout'}, imgTextDark: {es:'Checkout+Invitado', en:'Guest+Checkout'}},
            {emoji:'📄', title: {es: 'Resumen de Pedido Persistente', en: 'Persistent Order Summary'}, text: lang==='es' ? <>Un módulo de resumen de pedido permanece visible durante todo el proceso, mostrando el desglose de costos (productos, envío, impuestos) para garantizar total transparencia. Actualizaciones en tiempo real al aplicar descuentos.</> : <>An order summary module remains visible throughout the process, showing the cost breakdown (products, shipping, taxes) to ensure full transparency. Real-time updates when applying discounts.</>, imgTextLight: {es:'Resumen+Visible', en:'Visible+Summary'}, imgTextDark: {es:'Resumen+Visible', en:'Visible+Summary'}},
            {emoji:'🔒', title: {es: 'Diseño de Confianza', en: 'Trustworthy Design'}, text: lang==='es' ? <>Se rediseñó la página de pago con sellos de seguridad visibles (SSL, pasarelas de pago), múltiples opciones de pago claras y un layout limpio y profesional para aumentar la percepción de seguridad. Indicadores de progreso claros en cada paso.</> : <>The payment page was redesigned with visible security seals (SSL, payment gateways), multiple clear payment options, and a clean, professional layout to increase the perception of security. Clear progress indicators at each step.</>, imgTextLight: {es:'Diseño+Confianza', en:'Trust+Design'}, imgTextDark: {es:'Diseño+Confianza', en:'Trust+Design'}},
          ].map(card => (
            <div key={card.title.es} className="flex flex-col p-spectrum-200 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark hover:shadow-spectrum-100 transition-shadow duration-200">
                <img src={`https://placehold.co/400x150/${document.documentElement.classList.contains('dark') ? placeholderBgDarkHex : placeholderBgLightHex}/${document.documentElement.classList.contains('dark') ? placeholderTextDarkHex : placeholderTextLightHex}?text=${encodeURIComponent(document.documentElement.classList.contains('dark') ? card.imgTextDark[lang] : card.imgTextLight[lang])}&font=inter`} alt={card.title[lang]} className="w-full h-32 object-cover rounded-spectrum-100 mb-spectrum-100"/>
                <div className="prose-sm dark:prose-invert text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark max-w-none">
                    <h4 className="text-spectrum-300 font-spectrum-semibold mb-spectrum-75 flex items-center !mt-0 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">
                    {card.emoji} {card.title[lang]}
                    </h4>
                    <p className="leading-relaxed">
                        {card.text}
                    </p>
                </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'resultados-impacto',
    title: { en: '8. Results and Impact', es: '8. Resultados e Impacto' },
    emoji: '📊',
    tocSubheadings: [
        { en: 'Quantitative Metrics', es: 'Métricas cuantitativas' },
        { en: 'Qualitative Feedback', es: 'Feedback cualitativo' }
    ],
    content: (lang: Language) => (
      <>
        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark mb-spectrum-300">
            <p>{lang === 'es' ? <>Tras el lanzamiento del nuevo diseño, monitorizamos de cerca las métricas clave durante los siguientes tres meses, con resultados muy positivos:</> : <>After the launch of the new design, we closely monitored key metrics for the following three months, with very positive results:</>}</p>
        </div>
        <div className="mt-spectrum-300 grid grid-cols-1 md:grid-cols-3 gap-spectrum-200">
          {[
            {value: '27%', title: {es: 'Reducción de Abandono', en: 'Abandonment Reduction'}, text: lang==='es' ? <>La tasa de abandono del carrito se redujo en un 27% (de 85% a 62%), superando nuestro objetivo del 20%.</> : <>The cart abandonment rate was reduced by 27% (from 85% to 62%), exceeding our 20% target.</>, ariaLabel: lang === 'es' ? "Reducción de tasa de abandono del 27%" : "27% reduction in abandonment rate", bgClass: 'bg-metric-circle-bg-light dark:bg-metric-circle-bg-dark', ringClass: 'ring-metric-circle-ring-light dark:ring-metric-circle-ring-dark', textClass: 'text-metric-circle-text-light dark:text-metric-circle-text-dark'},
            {value: '40%', title: {es: 'Checkout Más Rápido', en: 'Faster Checkout'}, text: lang==='es' ? <>El tiempo promedio de checkout disminuyó de 2.5 minutos a 1.5 minutos, una reducción del 40%.</> : <>The average checkout time decreased from 2.5 minutes to 1.5 minutes, a 40% reduction.</>, ariaLabel: lang === 'es' ? "Disminución del tiempo de checkout del 40%" : "40% decrease in checkout time", bgClass: 'bg-metric-circle-bg-light dark:bg-metric-circle-bg-dark', ringClass: 'ring-metric-circle-ring-light dark:ring-metric-circle-ring-dark', textClass: 'text-metric-circle-text-light dark:text-metric-circle-text-dark'},
            {value: '4.2/5', title: {es: 'Aumento de CSAT', en: 'CSAT Increase'}, text: lang==='es' ? <>La puntuación de satisfacción del cliente (CSAT) aumentó de 2.5 a 4.2 sobre 5.</> : <>The customer satisfaction score (CSAT) increased from 2.5 to 4.2 out of 5.</>, ariaLabel: lang === 'es' ? "Aumento del CSAT a 4.2 sobre 5" : "CSAT increase to 4.2 out of 5", bgClass: 'bg-metric-circle-bg-light dark:bg-metric-circle-bg-dark', ringClass: 'ring-metric-circle-ring-light dark:ring-metric-circle-ring-dark', textClass: 'text-metric-circle-text-light dark:text-metric-circle-text-dark'},
          ].map(metric => (
            <div 
                key={metric.title.es}
                className="flex flex-col items-center p-spectrum-200 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark hover:shadow-spectrum-100 transition-shadow duration-200"
                role="figure"
                aria-labelledby={`metric-${metric.title.en.toLowerCase().replace(/\s+/g, '-')}-title`}>
                <div 
                    className={`w-24 h-24 rounded-spectrum-full flex items-center justify-center mb-spectrum-200 ring-[3px] ring-opacity-70 ${metric.bgClass} ${metric.ringClass}`}
                    aria-label={metric.ariaLabel}>
                <span className={`text-spectrum-700 font-spectrum-medium ${metric.textClass}`}>{metric.value}</span>
                </div>
                <div className="w-full text-left prose-sm dark:prose-invert text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark max-w-none">
                    <h4 id={`metric-${metric.title.en.toLowerCase().replace(/\s+/g, '-')}-title`} className="text-spectrum-300 font-spectrum-semibold mb-spectrum-75 !mt-0 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{metric.title[lang]}</h4>
                    <p className="leading-relaxed">
                        {metric.text}
                    </p>
                </div>
            </div>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark mt-spectrum-500">
            <h3 className="text-spectrum-400 font-spectrum-semibold mb-spectrum-200 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark">{lang === 'es' ? 'Feedback Cualitativo:' : 'Qualitative Feedback:'}</h3>
            <blockquote className="border-l-4 border-spectrum-border-default-light dark:border-spectrum-border-default-dark pl-spectrum-200 py-spectrum-100 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark rounded-r-spectrum-100">
                <div className="flex items-start">
                    <span className="text-xl mr-spectrum-100 transform-none text-spectrum-text-placeholder-light dark:text-spectrum-text-placeholder-dark">👩‍💼</span>
                    <p className="text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark leading-relaxed !m-0">
                        {lang === 'es' ? `"¡Mucho más rápido! Me encantó poder ver el costo final desde el principio. Antes era un lío y nunca sabía cuánto iba a pagar."` : `"Much faster! I loved being able to see the final cost from the beginning. It used to be a mess, and I never knew how much I was going to pay."`}
                    </p>
                </div>
            </blockquote>
            <blockquote className="mt-spectrum-100 border-l-4 border-spectrum-border-default-light dark:border-spectrum-border-default-dark pl-spectrum-200 py-spectrum-100 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark rounded-r-spectrum-100">
                <div className="flex items-start">
                     <span className="text-xl mr-spectrum-100 transform-none text-spectrum-text-placeholder-light dark:text-spectrum-text-placeholder-dark">👨‍💼</span>
                    <p className="text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark leading-relaxed !m-0">
                        {lang === 'es' ? `"El nuevo diseño se ve mucho más profesional y seguro. Me sentí cómodo poniendo mis datos esta vez."` : `"The new design looks much more professional and secure. I felt comfortable entering my details this time."`}
                    </p>
                </div>
            </blockquote>
        </div>
      </>
    ),
  },
  {
    id: 'aprendizajes-retos',
    title: { en: '9. Learnings and Challenges', es: '9. Aprendizajes y Retos' },
    emoji: '📘',
    tocSubheadings: [
        { en: 'Main Challenge', es: 'Reto Principal' },
        { en: 'Main Learning', es: 'Principal Aprendizaje' },
        { en: 'What I Would Do Differently', es: 'Qué Haría Diferente' }
    ],
    content: (lang: Language) => (
      <>
        <div className="prose dark:prose-invert max-w-none text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark mb-spectrum-300">
            <p>{lang === 'es' ? 'Este proyecto fue una experiencia de aprendizaje fundamental, con desafíos que impulsaron soluciones creativas y lecciones valiosas:' : 'This project was a fundamental learning experience, with challenges that spurred creative solutions and valuable lessons:'}</p>
        </div>
        <div className="mt-spectrum-300 grid grid-cols-1 gap-spectrum-200">
          {[
            {emoji:'🧗', title: {es: 'Reto Principal:', en: 'Main Challenge:'}, text: lang==='es' ? <>Uno de los mayores desafíos fue alinear las expectativas del equipo de marketing, que quería capturar más datos del usuario, con la necesidad de un checkout sin fricciones. Lo superamos presentando datos de la investigación que demostraban cómo el registro obligatorio afectaba negativamente a la conversión y proponiendo la creación de cuenta opcional post-compra.</> : <>One of the biggest challenges was aligning the marketing team's expectations, who wanted to capture more user data, with the need for a frictionless checkout. We overcame this by presenting research data demonstrating how mandatory registration negatively affected conversion and proposing optional post-purchase account creation.</>, imgTextLight:{es:'Desafío', en:'Challenge'}, imgTextDark:{es:'Desafío', en:'Challenge'}},
            {emoji:'💡', title: {es: 'Principal Aprendizaje:', en: 'Main Learning:'}, text: lang==='es' ? <>Aprendí la importancia de involucrar al equipo de desarrollo desde las primeras fases de ideación. Sus aportes sobre la viabilidad técnica nos ayudaron a descartar ideas complejas y enfocarnos en soluciones más eficientes desde el principio.</> : <>I learned the importance of involving the development team from the earliest ideation phases. Their input on technical feasibility helped us discard complex ideas and focus on more efficient solutions from the outset.</>, imgTextLight:{es:'Lección', en:'Learning'}, imgTextDark:{es:'Lección', en:'Learning'}},
            {emoji:'🧭', title: {es: 'Qué Haría Diferente:', en: 'What I Would Do Differently:'}, text: lang==='es' ? <>La próxima vez, realizaría pruebas de usabilidad aún más temprano, directamente con los wireframes en baja fidelidad, para validar la estructura antes de invertir tiempo en el diseño visual. Esto podría haber ahorrado tiempo en iteraciones posteriores de alta fidelidad.</> : <>Next time, I would conduct usability tests even earlier, directly with low-fidelity wireframes, to validate the structure before investing time in visual design. This could have saved time in later high-fidelity iterations.</>, imgTextLight:{es:'Adelante', en:'Ahead'}, imgTextDark:{es:'Adelante', en:'Ahead'}},
          ].map(card => (
            <div key={card.title.es} className="flex flex-col h-full p-spectrum-200 bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark hover:shadow-spectrum-100 transition-shadow duration-200">
                <img src={`https://placehold.co/400x150/${document.documentElement.classList.contains('dark') ? placeholderBgDarkHex : placeholderBgLightHex}/${document.documentElement.classList.contains('dark') ? placeholderTextDarkHex : placeholderTextLightHex}?text=${encodeURIComponent(document.documentElement.classList.contains('dark') ? card.imgTextDark[lang] : card.imgTextLight[lang])}&font=inter`} alt={card.title[lang]} className="w-full h-32 object-cover rounded-spectrum-100 mb-spectrum-100"/>
                <div className="prose-sm dark:prose-invert text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark max-w-none flex-grow flex flex-col">
                    <h4 className="text-spectrum-300 font-spectrum-semibold text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-75 flex items-center !mt-0">
                    {card.emoji} {card.title[lang]}
                    </h4>
                    <p className="leading-relaxed flex-grow">
                        {card.text}
                    </p>
                </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'conclusion',
    title: { en: '10. Conclusion', es: '10. Conclusión' },
    emoji: '✏️',
    tocSubheadings: conclusionCardTitles,
    content: (lang: Language) => (
       <>
        <p className="mb-spectrum-300 text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
          {lang === 'es' ? 'Este rediseño del checkout de "ModaHoy" demuestra cómo un proceso de UX riguroso, que parte de un problema de negocio claro y se centra en las necesidades reales del usuario, puede generar un impacto medible y positivo.' : 'This "ModaHoy" checkout redesign demonstrates how a rigorous UX process, starting from a clear business problem and focusing on real user needs, can generate a measurable and positive impact.'}
        </p>
        <div className="my-spectrum-300 grid grid-cols-1 gap-spectrum-200">
          {[
            { 
              title: conclusionCardTitles[0], 
              text: { es: <>Al reducir la tasa de abandono del carrito en un 27% y disminuir el tiempo de checkout en un 40%, superamos los objetivos iniciales. Esto se tradujo directamente en un aumento de conversiones e ingresos para ModaHoy, demostrando el ROI del diseño centrado en el usuario.</>, en: <>By reducing the cart abandonment rate by 27% and decreasing checkout time by 40%, we surpassed initial goals. This directly translated into increased conversions and revenue for ModaHoy, demonstrating the ROI of user-centered design.</>}
            },
            {
              title: conclusionCardTitles[1],
              text: { es: <>El aumento del CSAT de 2.5 a 4.2 sobre 5 y el feedback cualitativo positivo indican una mejora sustancial en la percepción del usuario. Un proceso más transparente, rápido y seguro fortaleció la relación entre la marca y sus clientes.</>, en: <>The CSAT increase from 2.5 to 4.2 out of 5 and positive qualitative feedback indicate a substantial improvement in user perception. A more transparent, fast, and secure process strengthened the brand-customer relationship.</>}
            },
            {
              title: conclusionCardTitles[2],
              text: { es: <>Alinear las metas de marketing, desarrollo y UX fue crucial. La presentación de datos de investigación y la co-creación de soluciones facilitaron un entendimiento común y un enfoque unificado hacia los objetivos del proyecto.</>, en: <>Aligning marketing, development, and UX goals was crucial. Presenting research data and co-creating solutions facilitated a common understanding and a unified approach to project objectives.</>}
            },
            {
              title: conclusionCardTitles[3],
              text: { es: <>Desde la investigación inicial hasta las pruebas de usabilidad y los ajustes finales, cada decisión de diseño se fundamentó en insights de usuarios y métricas de comportamiento. Este enfoque iterativo fue clave para identificar y resolver los puntos de fricción más críticos de manera eficiente.</>, en: <>From initial research to usability testing and final adjustments, every design decision was based on user insights and behavioral metrics. This iterative approach was key to efficiently identifying and resolving the most critical friction points.</>}
            },
            {
              title: conclusionCardTitles[4],
              text: { es: <>Este proyecto sirvió como un caso de éxito interno, evidenciando cómo una inversión en UX no es solo un costo, sino un motor estratégico que impulsa el crecimiento del negocio, mejora la experiencia del cliente y optimiza los recursos.</>, en: <>This project served as an internal success story, showing how an investment in UX is not just a cost, but a strategic driver that boosts business growth, improves customer experience, and optimizes resources.</>}
            }
          ].map(item => (
            <div key={item.title.es} className="flex flex-col h-full bg-spectrum-background-tertiary-light dark:bg-spectrum-background-tertiary-dark p-spectrum-200 rounded-spectrum-200 border border-spectrum-border-default-light dark:border-spectrum-border-default-dark hover:shadow-spectrum-100 transition-shadow duration-200">
              <div className="prose-sm dark:prose-invert text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark max-w-none flex-grow flex flex-col">
                  <h4 className="font-spectrum-semibold text-spectrum-300 text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark mb-spectrum-75 !mt-0">{item.title[lang]}</h4>
                  <p className="leading-relaxed flex-grow">
                    {item.text[lang]}
                  </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-spectrum-300 text-spectrum-200 text-spectrum-text-secondary-light dark:text-spectrum-text-secondary-dark">
            {lang === 'es' ? 'En resumen, este proyecto no solo resolvió los puntos de fricción identificados, sino que también creó una experiencia de compra más confiable y satisfactoria, fortaleciendo la relación entre la marca y sus clientes y sentando las bases para futuras optimizaciones.' : 'In summary, this project not only resolved the identified friction points but also created a more reliable and satisfying shopping experience, strengthening the relationship between the brand and its customers and laying the groundwork for future optimizations.'}
        </p>
      </>
    ),
  },
];

export const getLocalizedTocItems = (lang: Language): Omit<TocItem, 'icon'>[] => {
  return SECTIONS_DATA.map(section => ({
    id: section.id,
    title: section.title[lang], 
    subHeadings: section.tocSubheadings?.map(subH => subH[lang]),
  }));
};

export const SIDEBAR_SOCIAL_LINKS: SocialLinkItem[] = [
  { type: 'link', href: LINKEDIN_URL, IconComponent: LinkedInIcon, tooltipText: { es: 'LinkedIn', en: 'LinkedIn' }, ariaLabel: { es: 'Visitar perfil de LinkedIn', en: 'Visit LinkedIn profile' }, brandColorClass: 'text-brand-linkedin' },
  { type: 'link', href: "#youtube", IconComponent: YouTubeIcon, tooltipText: { es: 'YouTube', en: 'YouTube' }, ariaLabel: { es: 'Visitar canal de YouTube', en: 'Visit YouTube channel' }, brandColorClass: 'text-brand-youtube' },
  { type: 'link', href: "#tiktok", IconComponent: TikTokIcon, tooltipText: { es: 'TikTok', en: 'TikTok' }, ariaLabel: { es: 'Visitar perfil de TikTok', en: 'Visit TikTok profile' }, brandColorClass: 'text-brand-tiktok-light dark:text-brand-tiktok-dark' },
  { type: 'link', href: "#instagram", IconComponent: InstagramIcon, tooltipText: { es: 'Instagram', en: 'Instagram' }, ariaLabel: { es: 'Visitar perfil de Instagram', en: 'Visit Instagram profile' }, brandColorClass: 'text-brand-instagram' },
  { type: 'link', href: "#xtwitter", IconComponent: XTwitterIcon, tooltipText: { es: 'X (Twitter)', en: 'X (Twitter)' }, ariaLabel: { es: 'Visitar perfil de X (Twitter)', en: 'Visit X (Twitter) profile' }, brandColorClass: 'text-brand-xtwitter-light dark:text-brand-xtwitter-dark' },
  { type: 'divider', tooltipText: {es:'', en:''}, ariaLabel: {es:'Divisor', en:'Divider'} },
  { type: 'link', href: "#github", IconComponent: GithubIcon, tooltipText: { es: 'Github', en: 'Github' }, ariaLabel: { es: 'Visitar perfil de Github', en: 'Visit Github profile' }, brandColorClass: 'text-brand-github-light dark:text-brand-github-dark' },
  { type: 'link', href: "#behance", IconComponent: BehanceIcon, tooltipText: { es: 'Behance', en: 'Behance' }, ariaLabel: { es: 'Visitar perfil de Behance', en: 'Visit Behance profile' }, brandColorClass: 'text-brand-behance' },
  { type: 'link', href: "#dribble", IconComponent: DribbleIcon, tooltipText: { es: 'Dribble', en: 'Dribble' }, ariaLabel: { es: 'Visitar perfil de Dribble', en: 'Visit Dribble profile' }, brandColorClass: 'text-brand-dribble' },
  { type: 'divider', tooltipText: {es:'', en:''}, ariaLabel: {es:'Divisor', en:'Divider'} },
  { type: 'link', href: "#substack", IconComponent: SubstackIcon, tooltipText: { es: 'Substack', en: 'Substack' }, ariaLabel: { es: 'Visitar perfil de Substack', en: 'Visit Substack profile' }, brandColorClass: 'text-brand-substack-light dark:text-brand-substack-dark' },
  { type: 'link', href: "#medium", IconComponent: MediumIcon, tooltipText: { es: 'Medium', en: 'Medium' }, ariaLabel: { es: 'Visitar perfil de Medium', en: 'Visit Medium profile' }, brandColorClass: 'text-brand-medium-light dark:text-brand-medium-dark' },
];
