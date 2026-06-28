import { useState, useEffect, lazy, Suspense } from 'react';
import { Hero } from './components/sections/Hero';
import { Grain } from './components/ui/Grain';
import { Preloader } from './components/ui/Preloader';
import { StatusBadge } from './components/ui/StatusBadge';
import { AnimatePresence, motion } from 'framer-motion';


import { useLenis } from './hooks/useLenis';
import type { Project } from './components/sections/Work';
// Lazy load sections and modals
const Experience = lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })));
const Publications = lazy(() => import('./components/sections/Publications').then(m => ({ default: m.Publications })));
const Work = lazy(() => import('./components/sections/Work').then(m => ({ default: m.Work })));
const MoreProjects = lazy(() => import('./components/sections/MoreProjects').then(m => ({ default: m.MoreProjects })));
const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })));
const Services = lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })));
const Footer = lazy(() => import('./components/sections/Footer').then(m => ({ default: m.Footer })));
const ProjectModal = lazy(() => import('./components/ui/ProjectModal').then(m => ({ default: m.ProjectModal })));
const ResumeModal = lazy(() => import('./components/ui/ResumeModal').then(m => ({ default: m.ResumeModal })));


export default function App() {
   const [theme] = useState<'light' | 'dark'>('dark');
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
   const [isNavInverted, setIsNavInverted] = useState(false);
   const [activeSection, setActiveSection] = useState('');
   const [isLoading, setIsLoading] = useState(true);
   const [isTransitioning] = useState(false);
   const [clickPos] = useState({ x: 0, y: 0 });

   // Initialize Lenis smooth scrolling
   useLenis();

   // Track active section for nav highlight
   useEffect(() => {
      const sectionIds = ['experience', 'publications', 'projects', 'skills', 'services', 'contact'];
      const observers: IntersectionObserver[] = [];

      sectionIds.forEach(id => {
         const el = document.getElementById(id);
         if (!el) return;
         const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
            { threshold: 0.3 }
         );
         obs.observe(el);
         observers.push(obs);
      });

      return () => observers.forEach(obs => obs.disconnect());
   }, [isLoading]);

   const resumeUrl = "https://drive.google.com/file/d/1POEF8V6en3SGv3xAh90YnYv0W-0N709V/view?usp=drivesdk";

   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
   }, [theme]);

   // Detect what's behind the bottom nav so it can flip its color scheme
   // when crossing inverted-bg sections (Experience, MoreProjects, OssImpact).
   useEffect(() => {
      const NAV_INVERTED_SECTION_IDS = ['experience', 'more-projects', 'services'];
      let rafId: number | null = null;

      const check = () => {
         rafId = null;
         // Nav sits at bottom-6 (24px from bottom) with ~50px height — sample its center.
         const navCenterY = window.innerHeight - 50;
         const overlaps = NAV_INVERTED_SECTION_IDS.some(id => {
            const el = document.getElementById(id);
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top <= navCenterY && rect.bottom >= navCenterY;
         });
         setIsNavInverted(overlaps);
      };

      const onScroll = () => {
         if (rafId === null) rafId = requestAnimationFrame(check);
      };

      check();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      return () => {
         window.removeEventListener('scroll', onScroll);
         window.removeEventListener('resize', onScroll);
         if (rafId !== null) cancelAnimationFrame(rafId);
      };
   }, []);




   const openModal = (project: Project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
   };

   const openResumeModal = () => {
      setIsResumeModalOpen(true);
   };

   const projects: Project[] = [
      {
         title: 'Seovate',
         category: 'Autonomous Agents / SEO',
         description: 'Enterprise multi-agent AI platform that autonomously crawls, audits, and remediates websites, replacing traditional SEO workflows with agentic intelligence.',
         summary: 'Autonomous SEO command center. A LangGraph supervisor orchestrates specialized agents that crawl sites, surface issues, generate fixes, and track performance end-to-end without human intervention.',
         details: [
            {
               title: 'Architecture',
               body: 'LangGraph supervisor orchestration with specialized sub-agents: a Crawler Agent for site ingestion, an Audit Agent for issue detection, a Remediation Agent for generating fixes, and a Reporting Agent for structured output. Each agent has its own tool set and memory.',
            },
            {
               title: 'LLM pipeline',
               bullets: [
                  'Groq-powered LLM inference with Pydantic/JSON structured outputs, eliminates hallucinations',
                  'LLM critic and self-reflection loops for iterative output refinement',
                  'LangSmith tracing for full observability across every agent call',
               ],
            },
         ],
         highlights: [
            'Supervisor-orchestrated multi-agent pipeline: crawl, audit, remediate autonomously',
            'Zero hallucinations via grounded structured outputs and critic loops',
            'Full LangSmith observability across every agent step',
         ],
         tech: ['Python', 'LangGraph', 'LangChain', 'Groq', 'FastAPI', 'LangSmith', 'Pydantic'],
         thumbnailUrl: '/covers/seovate.png',
         videoUrl: '',
      },
      {
         title: 'HireWise',
         category: 'Autonomous Agents / HR',
         description: 'End-to-end Agentic AI HR platform using LangGraph with specialized agents covering the full employee lifecycle: recruiting, screening, onboarding, and offboarding.',
         summary: 'AI-native HR operating system. Autonomous LangGraph agents handle the full employee lifecycle, from sourcing and screening to onboarding and offboarding, powered by RAG over HR policy documents and candidate data.',
         details: [
            {
               title: 'Agent architecture',
               bullets: [
                  'Recruiting Agent: sources and ranks candidates against job descriptions',
                  'Screening Agent: resume analysis and candidate-job matching via semantic similarity',
                  'Onboarding Agent: policy retrieval and onboarding flow coordination',
                  'Lifecycle and Offboarding Agents: employee record management through exit',
               ],
            },
            {
               title: 'RAG & observability',
               bullets: [
                  'LangChain RAG pipeline over HR policy documents with FastAPI serving',
                  'Grounded answers with source citations, no hallucinated policies',
                  'LangSmith instrumented for tracing, evaluation, and regression testing',
               ],
            },
         ],
         highlights: [
            'Full lifecycle coverage from recruiting to offboarding in one agentic platform',
            'RAG over HR policies for grounded, source-cited answers',
            'LangSmith instrumentation for observability and evaluation',
         ],
         tech: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'RAG', 'LangSmith', 'PostgreSQL'],
         thumbnailUrl: '/covers/hirewise.png',
         videoUrl: '',
      },
      {
         title: 'PostPilot AI',
         category: 'Autonomous Agents / Social Media',
         description: 'Autonomous multi-agent social media management platform with supervisor orchestration, self-critique loops, multi-provider LLM routing, and human-in-the-loop review gates.',
         summary: 'Autonomous social media content engine. A LangGraph supervisor coordinates specialist agents for research, writing, and critique, with automatic LLM failover across GPT/Gemini/Groq, Stable Diffusion XL for visuals, and human-in-the-loop gates before publish.',
         details: [
            {
               title: 'Multi-agent system',
               body: 'Supervisor pattern with specialized agents: Research Agent (trend analysis), Writer Agent (content generation), Critic Agent (self-critique and scoring), and Publisher Agent (scheduling and posting). Reflection loops iterate until quality thresholds are met.',
            },
            {
               title: 'LLM routing & media',
               bullets: [
                  'Multi-provider routing across OpenAI GPT, Gemini, and Groq with automatic failover',
                  'Stable Diffusion XL integration for AI-generated social visuals',
                  'Human-in-the-loop review gates before content goes live',
               ],
            },
         ],
         highlights: [
            'Supervisor with reflection loops: content self-critiques until it passes quality gates',
            'Multi-provider LLM routing (GPT / Gemini / Groq) with automatic failover',
            'Stable Diffusion XL for on-brand AI-generated visuals',
         ],
         tech: ['Python', 'LangGraph', 'LangChain', 'OpenAI', 'Gemini', 'Groq', 'Stable Diffusion XL', 'FastAPI'],
         thumbnailUrl: '/covers/postpilot.png',
         videoUrl: '',
      },
   ];

   // Nav bg is "light" when (theme is light) XOR (over an inverted section).
   // Drives the glass + text colors so the nav is always readable.
   const navIsOverLightBg = (theme === 'light') !== isNavInverted;

   return (
      <div className="min-h-screen bg-bg-primary text-fg-primary selection:bg-fg-primary selection:text-bg-primary font-body relative">
         <AnimatePresence mode="wait">
            {isLoading && (
               <Preloader key="preloader" theme={theme} finishLoading={() => setIsLoading(false)} />
            )}
         </AnimatePresence>

         <AnimatePresence mode="wait">
            {isTransitioning && (
               <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
                  <motion.div
                     initial={{ opacity: 0, scale: 0 }}
                     animate={{
                        opacity: [0, 1, 0.5, 0],
                        scale: [0, 1, 5],
                     }}
                     transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                     className="absolute"
                     style={{
                        left: clickPos.x,
                        top: clickPos.y,
                        width: '100vw',
                        height: '100vw',
                        marginLeft: '-50vw',
                        marginTop: '-50vw',
                        borderRadius: '50%',
                        border: theme === 'dark' ? '2px solid rgba(255, 255, 255, 0.1)' : '2px solid rgba(0, 0, 0, 0.1)',
                        background: theme === 'dark'
                           ? 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)'
                           : 'radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.05) 50%, transparent 70%)',
                        boxShadow: theme === 'dark'
                           ? '0 0 60px rgba(255, 255, 255, 0.1)'
                           : '0 0 60px rgba(0, 0, 0, 0.1)',
                        transform: 'translateZ(0)',
                        willChange: 'transform, opacity',
                     }}
                  />
                  {[...Array(8)].map((_, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, height: 0, rotate: i * 45, width: 2 }}
                        animate={{
                           opacity: [0, 0.6, 0],
                           height: ['0px', `${150 + Math.random() * 400}px`],
                           width: [2, 3, 1],
                        }}
                        transition={{
                           duration: 1.0,
                           ease: "easeOut",
                           delay: Math.random() * 0.1
                        }}
                        className="absolute origin-top"
                        style={{
                           left: clickPos.x,
                           top: clickPos.y,
                           background: theme === 'dark'
                              ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)'
                              : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent)',
                           transform: 'translateZ(0)', // Force GPU
                        }}
                     />
                  ))}
               </div>
            )}
         </AnimatePresence>

         <Grain />

         <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div
               className={`
                  backdrop-blur-2xl backdrop-saturate-150 border rounded-full px-5 md:px-8 py-4 md:py-5 flex items-center gap-4 md:gap-8 w-full md:w-auto justify-between md:justify-center transition-colors duration-300 pointer-events-auto
                  ${navIsOverLightBg
                     ? 'bg-white/70 border-black/10 text-black shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)]'
                     : 'bg-zinc-900/60 border-white/15 text-white shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.12)]'}
               `}
            >
               <span className="font-mono text-sm md:text-base uppercase tracking-widest font-black shrink-0">
                  Dhanvina
               </span>
               <div className="flex items-center gap-4 md:gap-6">
                  {/* Mobile section links */}
                  <div className="flex lg:hidden items-center gap-3 pr-3 border-r border-current/10">
                     {([
                        { href: 'experience', label: 'Exp' },
                        { href: 'projects', label: 'Work' },
                        { href: 'skills', label: 'Skills' },
                        { href: 'contact', label: 'Contact' },
                     ] as const).map(({ href, label }) => (
                        <a
                           key={href}
                           href={`#${href}`}
                           className={`text-[10px] font-mono uppercase tracking-widest transition-all duration-200 relative
                              ${activeSection === href
                                 ? 'opacity-100 after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-px after:bg-current'
                                 : 'opacity-50 hover:opacity-80'
                              }`}
                        >
                           {label}
                        </a>
                     ))}
                  </div>
                  {([
                     { href: 'experience', label: 'Experience' },
                     { href: 'publications', label: 'Research' },
                     { href: 'projects', label: 'Work' },
                     { href: 'skills', label: 'Skills' },
                     { href: 'services', label: 'Services' },
                     { href: 'contact', label: 'Contact' },
                  ] as const).map(({ href, label }) => (
                     <a
                        key={href}
                        href={`#${href}`}
                        className={`hidden lg:block text-sm md:text-base font-mono uppercase tracking-widest transition-all duration-200 relative
                           ${activeSection === href
                              ? 'opacity-100 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px after:bg-current'
                              : 'opacity-60 hover:opacity-100'
                           }`}
                     >
                        {label}
                     </a>
                  ))}
                  {/* Theme toggle removed */}
               </div>
            </div>
         </nav >

         <StatusBadge />

         {/* Stacked Sticky Sections - Each overlaps the previous */}

         {/* Hero Section - Fixed behind everything */}
         <div className="fixed top-0 left-0 right-0 h-screen z-10">
            <Hero theme={theme} onResumeClick={openResumeModal} />
         </div>

         {/* Spacer to push content below the Hero - pointer-events-none to allow interaction with hero */}
         <div className="h-screen pointer-events-none relative z-0" />

         {/* All scrollable content - overlaps the fixed Hero */}
         <div className="relative z-20 bg-bg-primary">
            <Suspense fallback={<div className="h-96" />}>
               <Experience />
               <Publications />
               <Work projects={projects} openModal={openModal} />
               <MoreProjects />
               <Skills />
               <Services />
               <Footer theme={theme} onResumeClick={openResumeModal} />
            </Suspense>
         </div>

         <Suspense fallback={null}>
            <ProjectModal
               isOpen={isModalOpen}
               onClose={() => setIsModalOpen(false)}
               project={selectedProject}
            />

            <ResumeModal
               isOpen={isResumeModalOpen}
               onClose={() => setIsResumeModalOpen(false)}
               resumeUrl={resumeUrl}
            />
         </Suspense>
      </div >
   );
}
