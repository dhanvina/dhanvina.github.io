import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface CybriskProject {
    id: string;
    name: string;
    category: string;
    gradient: string;
    url?: string;
    description: string;
    role: string;
    highlights: string[];
    tech: string[];
}

const PROJECTS: CybriskProject[] = [
    {
        id: 'ctrlfake',
        name: 'CtrlFake',
        category: 'AI / Computer Vision',
        gradient: 'from-red-950 via-rose-900 to-pink-950',
        url: 'https://ctrlfake.com',
        description: 'Enterprise deepfake and synthetic media detection platform using Computer Vision. Analyses videos and images in real time to flag AI-generated or manipulated content.',
        role: 'Built the full AI pipeline and deployed the production platform.',
        highlights: [
            'ResNeXt + Transformer architecture for video and image analysis.',
            '>90% accuracy on diverse synthetic media benchmarks.',
            'INT8/FP16 post-training quantization deployed on AWS — 35% latency reduction.',
            'Real-time inference via FastAPI microservices.',
        ],
        tech: ['PyTorch', 'ResNeXt', 'Transformers', 'FastAPI', 'AWS', 'Docker'],
    },
    {
        id: 'ctrlthreats',
        name: 'CtrlThreats',
        category: 'AI / Cybersecurity',
        gradient: 'from-orange-950 via-amber-900 to-yellow-950',
        url: 'https://ctrlthreats.com',
        description: 'NLP and ML-powered phishing URL detection system that flags malicious links in real time — reducing manual security review effort by 60%.',
        role: 'Built the full ML pipeline and production API.',
        highlights: [
            'XGBoost classifier with 30+ engineered features across URL structure, metadata, and behavioural signals.',
            '89% precision in production with FastAPI real-time inference.',
            'Reduced manual security review workload by 60%.',
            'MLOps pipeline with DVC, Docker, and CI/CD.',
        ],
        tech: ['XGBoost', 'Python', 'FastAPI', 'DVC', 'Docker', 'NLP'],
    },
    {
        id: 'cybrisk-website',
        name: 'Cybrisk Website',
        category: 'Web Development',
        gradient: 'from-violet-950 via-purple-900 to-indigo-950',
        url: 'https://cybrisktech.com',
        description: 'Official corporate website for F9 Cybrisk Tech showcasing AI and cybersecurity services, case studies, and client solutions.',
        role: 'Designed and developed the full company website from scratch.',
        highlights: [
            'Full corporate site with service pages, case studies, and contact integration.',
            'SEO-optimised and performance-tuned for fast load times.',
            'Responsive design across all device sizes.',
        ],
        tech: ['React', 'Tailwind CSS', 'Vercel'],
    },
    {
        id: 'saantra',
        name: 'Saantra Website',
        category: 'Web Development',
        gradient: 'from-teal-950 via-emerald-900 to-cyan-950',
        description: 'Client-facing website for Saantra, designed to communicate brand identity and drive lead generation.',
        role: 'End-to-end design and development of the client website.',
        highlights: [
            'Clean, conversion-focused landing pages.',
            'Integrated contact forms and CRM connectors.',
            'Optimised for mobile-first experience.',
        ],
        tech: ['React', 'Tailwind CSS', 'Figma'],
    },
    {
        id: 'prebicon',
        name: 'Prebicon Website',
        category: 'Web Development',
        gradient: 'from-blue-950 via-sky-900 to-cyan-950',
        description: 'Corporate website for Prebicon, built to establish online presence and communicate core business offerings.',
        role: 'Designed and delivered the full website.',
        highlights: [
            'Corporate pages with service showcases and team sections.',
            'Responsive, accessible, and fast.',
            'Deployed and maintained on cloud infrastructure.',
        ],
        tech: ['React', 'Tailwind CSS', 'Vercel'],
    },
    {
        id: 'brewkspace',
        name: 'Brewkspace Website',
        category: 'Web Development',
        gradient: 'from-amber-950 via-yellow-900 to-orange-950',
        description: 'Website for Brewkspace — a co-working and creative workspace brand — designed to reflect the community-driven, modern atmosphere of the space.',
        role: 'Built the full website from design to deployment.',
        highlights: [
            'Vibrant landing pages reflecting the brand identity.',
            'Membership and booking information architecture.',
            'Optimised for discoverability and local SEO.',
        ],
        tech: ['React', 'Tailwind CSS', 'Figma'],
    },
    {
        id: 'brewkforge',
        name: 'Brewkforge Website',
        category: 'Web Development',
        gradient: 'from-stone-900 via-zinc-800 to-neutral-950',
        description: 'Website for Brewkforge — a maker space and innovation hub — communicating its programs, events, and community to prospective members.',
        role: 'Designed and developed the website with event and program showcases.',
        highlights: [
            'Program and event listing pages with clear CTAs.',
            'Community-focused design language.',
            'Fast, responsive, and SEO-optimised.',
        ],
        tech: ['React', 'Tailwind CSS', 'Vercel'],
    },
    {
        id: 'real-estate',
        name: 'Real Estate PropTech Intelligence',
        category: 'AI / PropTech',
        gradient: 'from-green-950 via-emerald-900 to-teal-950',
        description: 'AI-powered real estate intelligence platform that analyses property data, market trends, and investment signals using LLMs and structured data pipelines.',
        role: 'Architected and built the full AI intelligence layer.',
        highlights: [
            'LLM-powered property analysis and investment scoring.',
            'Automated data pipelines ingesting listings, pricing, and location data.',
            'Structured output generation for investor-ready property reports.',
            'FastAPI backend with vector search for similar property retrieval.',
        ],
        tech: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Qdrant', 'OpenAI'],
    },
    {
        id: 'legal-agent',
        name: 'Legal Agent',
        category: 'Agentic AI / LegalTech',
        gradient: 'from-slate-950 via-blue-950 to-indigo-950',
        description: 'Autonomous AI agent for legal document processing — reviewing contracts, flagging clauses, and generating structured legal summaries using LangGraph multi-agent orchestration.',
        role: 'Designed and built the full agentic pipeline.',
        highlights: [
            'LangGraph supervisor with specialised agents: Clause Extractor, Risk Assessor, and Summary Generator.',
            'RAG over legal precedents for grounded, source-cited analysis.',
            'Structured JSON output for integration with case management systems.',
            'Human-in-the-loop review gates before final output delivery.',
        ],
        tech: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'RAG', 'LangSmith'],
    },
    {
        id: 'land-reviewer',
        name: 'Land Reviewer Tool',
        category: 'AI / PropTech',
        gradient: 'from-lime-950 via-green-900 to-emerald-950',
        description: 'AI tool for reviewing land and property documents — parsing survey records, title deeds, and encumbrance certificates to surface risks and key information instantly.',
        role: 'Built the document intelligence pipeline and review interface.',
        highlights: [
            'PDF ingestion and intelligent chunking of legal property documents.',
            'LLM extraction of key fields: owner history, encumbrances, survey numbers.',
            'Risk flagging for incomplete titles, disputes, or missing records.',
            'FastAPI service with structured JSON output for downstream use.',
        ],
        tech: ['Python', 'LangChain', 'FastAPI', 'PyMuPDF', 'OpenAI', 'PostgreSQL'],
    },
];

interface ProjectModalProps {
    project: CybriskProject | null;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    useEffect(() => {
        if (!project) return;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', onKey);
        };
    }, [project, onClose]);

    return createPortal(
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.96, opacity: 0, y: 24 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.96, opacity: 0, y: 24 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-2xl bg-black border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
                    >
                        {/* Colour bar at top */}
                        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 px-8 pt-7 pb-5 border-b border-white/10">
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                                    {project.category} · F9 Cybrisk Tech
                                </span>
                                <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight tracking-tight">
                                    {project.name}
                                </h2>
                            </div>
                            <div className="flex items-center gap-3 shrink-0 mt-1">
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-all"
                                    >
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-all"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable body */}
                        <div className="overflow-y-auto flex-1 px-8 py-7 space-y-7" data-lenis-prevent>
                            {/* Description */}
                            <p className="text-white/70 text-base leading-relaxed">
                                {project.description}
                            </p>

                            {/* Role */}
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2">My Role</span>
                                <p className="text-white text-sm leading-relaxed">{project.role}</p>
                            </div>

                            {/* Highlights */}
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-3">What I Built</span>
                                <ul className="space-y-2.5">
                                    {project.highlights.map((h, i) => (
                                        <li key={i} className="relative pl-5 text-sm text-white/70 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2.5 before:h-px before:bg-white/30">
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech */}
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-3">Stack</span>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono uppercase tracking-widest text-white/60">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export const CybriskCarousel = () => {
    const [selected, setSelected] = useState<CybriskProject | null>(null);
    const doubled = [...PROJECTS, ...PROJECTS];

    return (
        <>
            <style>{`
                @keyframes carousel-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .carousel-track {
                    animation: carousel-scroll 40s linear infinite;
                }
                .carousel-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="overflow-hidden">
                <div className="carousel-track flex gap-4 w-max py-1">
                    {doubled.map((project, i) => (
                        <button
                            key={`${project.id}-${i}`}
                            onClick={() => setSelected(project)}
                            className="group flex-shrink-0 w-[180px] md:w-[200px] text-left focus:outline-none"
                        >
                            {/* Image / placeholder */}
                            <div className={`relative w-full h-[120px] md:h-[130px] rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} mb-3`}>
                                {/* Grid texture overlay */}
                                <div className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
                                        backgroundSize: '20px 20px',
                                    }}
                                />
                                {/* Project initial */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-display font-black text-5xl text-white/15 uppercase leading-none select-none">
                                        {project.name.charAt(0)}
                                    </span>
                                </div>
                                {/* Category badge */}
                                <div className="absolute bottom-2 left-2">
                                    <span className="font-mono text-[8px] uppercase tracking-widest text-white/50 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                                        {project.category.split(' / ')[0]}
                                    </span>
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-xl" />
                            </div>

                            {/* Name */}
                            <p className="font-mono text-[11px] uppercase tracking-widest text-fg-secondary group-hover:text-fg-primary transition-colors duration-200 leading-snug">
                                {project.name}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </>
    );
};
