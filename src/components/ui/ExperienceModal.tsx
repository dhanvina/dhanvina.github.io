import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { CopyButton } from './CopyButton';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface PerfWin {
    metric: string;
    desc: string;
}

interface Section {
    title: string;
    body?: string;
    bullets?: string[];
}

const SECTIONS: Section[] = [
    {
        title: 'Agentic RAG System',
        bullets: [
            'Architected enterprise Agentic RAG using LangChain/LangGraph, orchestrating specialized AI agents over vector databases with semantic chunking and multi-query routing.',
            'Achieved 92% accuracy with fully grounded, source-cited answers with zero hallucinations in production.',
            'Integrated GPT, Claude, and Gemini with Few-Shot prompting, Chain-of-Thought, function calling, and structured outputs.',
            'Reduced inference latency by 40% in production RAG pipelines through prompt optimization and provider-level tuning.',
        ],
    },
    {
        title: 'Synthetic Media Detection',
        bullets: [
            'Built and deployed CtrlFake (ctrlfake.com), a deepfake detection platform using Computer Vision achieving over 90% accuracy on both video and image analysis.',
            'Built a ResNeXt + Transformer architecture in PyTorch; deployed on AWS with post-training quantization (INT8/FP16) achieving 94% accuracy.',
            'Reduced inference latency by 35% through quantization and serving optimizations.',
            'Fine-tuned YOLOv8/v11, Faster R-CNN, and U-Net on custom datasets with end-to-end data annotation, training, and hyperparameter optimization.',
            'Designed a real-time AI verification system using YOLO and Faster R-CNN for object detection and container seal validation in secure logistics.',
        ],
    },
    {
        title: 'Phishing Detection Pipeline',
        bullets: [
            'Developed CtrlThreats (ctrlthreats.com), an NLP/ML-powered phishing detection system that reduced manual security review by 60%.',
            'Built XGBoost classifier for phishing URL detection with 30+ engineered features across URL structure, metadata, and behavioral signals.',
            'Achieved 89% precision in production with FastAPI microservices handling real-time inference at scale.',
        ],
    },
    {
        title: 'MLOps & Infrastructure',
        bullets: [
            'Established MLOps practices with DVC for dataset versioning and experiment reproducibility.',
            'Built production MLOps pipelines with Docker, MLflow, and CI/CD for model training, versioning, and deployment.',
            'Instrumented with LangSmith for full LLM observability and tracing.',
            'Led a team of engineers across AI product development, sprint planning, and code reviews.',
            'Drove client-facing demos and solution pitches; 3 out of 4 POCs converted to production contracts.',
            'Awarded Pinnacle Performer of the Year 2024 at F9 Cybrisk Tech.',
        ],
    },
    {
        title: 'Publications & Research',
        bullets: [
            'Investigation of Machine Learning Algorithms in Detecting Chronic Kidney Disorder — Springer, Machine Learning for Disease Detection, Prediction, and Diagnosis (2025)',
            'AI Powered Resource Management System — IEEE ICBDS (2024)',
            'Speech-enabled ML-based Automated Attendance Monitoring System through Face Recognition — IEEE InC4 (2023)',
            'Survey of Regression-Driven Stock Market Price Predictors — IJSRSET (2022)',
        ],
    },
    {
        title: 'Achievements & Certifications',
        bullets: [
            'Pinnacle Performer of the Year 2024 — F9 Cybrisk Tech',
            'HackBites 2.0 — Winner (College Hackathon)',
            'PHASE SHIFT 2021 — Winner (College Code-A-Thon)',
            'Data Science for Engineers — NPTEL Certification',
        ],
    },
];

const HEADLINE_METRICS = [
    { value: '92%', label: 'RAG Accuracy' },
    { value: '94%', label: 'Detection Accuracy' },
    { value: '40%', label: 'Latency Reduction' },
    { value: '3/4', label: 'POCs → Production' },
];

const PERF_WINS: PerfWin[] = [
    { metric: '92%', desc: 'Accuracy on enterprise Agentic RAG with source-cited, grounded answers.' },
    { metric: '94%', desc: 'Deepfake/synthetic media detection accuracy via ResNeXt + Transformer on AWS.' },
    { metric: '−40%', desc: 'Inference latency reduction in production RAG pipelines through prompt and provider tuning.' },
    { metric: '−35%', desc: 'Latency reduction on the detection model via INT8/FP16 post-training quantization.' },
    { metric: '89%', desc: 'Phishing detection precision using XGBoost with 30+ engineered URL and metadata features.' },
    { metric: '3/4', desc: 'Client POCs converted to production contracts after solution demos and stakeholder presentations.' },
];

const TECH_STACK = [
    'Python', 'LangChain', 'LangGraph', 'LangSmith', 'PyTorch',
    'ResNeXt', 'XGBoost', 'FastAPI', 'AWS', 'DVC', 'Docker', 'CI/CD', 'INT8/FP16 Quantization',
];

export const ExperienceModal = ({ isOpen, onClose }: ExperienceModalProps) => {
    useEffect(() => {
        if (!isOpen) return;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen, onClose]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-[3vw] md:p-[2vw]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
                    />
                    <motion.div
                        initial={{ scale: 0.97, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.97, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-[1100px] bg-bg-primary border border-border-primary rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
                    >
                        {/* Sticky header */}
                        <div className="flex justify-between items-start gap-4 px-[6vw] md:px-10 py-[5vw] md:py-6 border-b border-border-primary bg-bg-primary/80 backdrop-blur-md z-10">
                            <div className="min-w-0">
                                <span className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary block mb-[1vw] md:mb-2">
                                    Case study · F9 Cybrisk Tech · Sep 2024 – Present
                                </span>
                                <h2 className="font-display font-black text-[6vw] md:text-3xl lg:text-4xl leading-tight tracking-tight">
                                    AI Engineer
                                </h2>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <CopyButton contentId="experience-modal-content" className="flex" />
                                <button
                                    onClick={onClose}
                                    aria-label="Close case study"
                                    className="p-[2vw] md:p-2 rounded-full border border-transparent hover:border-border-primary hover:bg-bg-secondary transition-colors"
                                >
                                    <X className="w-[5vw] h-[5vw] md:w-5 md:h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable content */}
                        <div
                            id="experience-modal-content"
                            className="overflow-y-auto flex-1 overscroll-contain"
                            data-lenis-prevent
                        >
                            <div className="px-[6vw] md:px-10 py-[8vw] md:py-12">
                                {/* Hero block */}
                                <div className="mb-[10vw] md:mb-14 max-w-3xl">
                                    <div className="flex flex-wrap gap-[2vw] md:gap-2 mb-[4vw] md:mb-6">
                                        {['Bangalore, India', 'Cybersecurity AI', 'LLM Engineering · Agentic AI · MLOps'].map(tag => (
                                            <span key={tag} className="px-[3vw] md:px-3 py-[1vw] md:py-1 rounded-full border border-border-primary text-[2.5vw] md:text-xs font-mono uppercase tracking-widest text-fg-secondary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-[4vw] md:text-xl text-fg-secondary leading-relaxed">
                                        Building production-grade Agentic AI and LLM systems for enterprise cybersecurity.
                                        From a 92%-accurate RAG platform and synthetic media detection to phishing defence
                                        and full MLOps infrastructure. Led client POCs with a 3/4 production conversion rate.
                                    </p>
                                </div>

                                {/* Metric strip */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-[3vw] md:gap-4 mb-[12vw] md:mb-16">
                                    {HEADLINE_METRICS.map((m) => (
                                        <div key={m.label} className="p-[4vw] md:p-5 rounded-xl border border-border-primary">
                                            <div className="font-display font-black text-[8vw] md:text-4xl leading-none mb-[1vw] md:mb-2">{m.value}</div>
                                            <div className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary">{m.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Sections */}
                                <div className="space-y-[14vw] md:space-y-20">
                                    {SECTIONS.map((section, i) => (
                                        <section key={section.title}>
                                            <div className="flex items-baseline gap-[3vw] md:gap-4 mb-[4vw] md:mb-6">
                                                <span className="font-mono text-[2.5vw] md:text-xs text-fg-secondary tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                                                <div className="h-px flex-1 bg-border-primary" />
                                                <h3 className="font-display font-bold text-[5.5vw] md:text-2xl uppercase tracking-tight">{section.title}</h3>
                                            </div>
                                            {section.body && (
                                                <p className="text-[3.8vw] md:text-lg text-fg-secondary leading-relaxed mb-[5vw] md:mb-8 max-w-3xl">{section.body}</p>
                                            )}
                                            {section.bullets && (
                                                <ul className="space-y-[3vw] md:space-y-4 max-w-3xl">
                                                    {section.bullets.map((b, bi) => (
                                                        <li key={bi} className="relative pl-[6vw] md:pl-8 text-[3.5vw] md:text-base leading-relaxed text-fg-secondary before:content-[''] before:absolute before:left-[1vw] md:before:left-2 before:top-[2vw] md:before:top-3 before:w-[2vw] md:before:w-2 before:h-px before:bg-fg-primary/40">
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </section>
                                    ))}

                                    {/* Performance wins */}
                                    <section>
                                        <div className="flex items-baseline gap-[3vw] md:gap-4 mb-[4vw] md:mb-6">
                                            <span className="font-mono text-[2.5vw] md:text-xs text-fg-secondary tabular-nums">08</span>
                                            <div className="h-px flex-1 bg-border-primary" />
                                            <h3 className="font-display font-bold text-[5.5vw] md:text-2xl uppercase tracking-tight">Performance Wins</h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vw] md:gap-4">
                                            {PERF_WINS.map((w) => (
                                                <div key={w.metric + w.desc} className="p-[4vw] md:p-6 rounded-xl border border-border-primary bg-bg-secondary/40 flex gap-[3vw] md:gap-5 items-start">
                                                    <div className="font-display font-black text-[7vw] md:text-3xl leading-none shrink-0 min-w-[20vw] md:min-w-[90px]">{w.metric}</div>
                                                    <p className="text-[3.2vw] md:text-sm leading-relaxed text-fg-secondary">{w.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* Tech stack */}
                                <div className="mt-[14vw] md:mt-20 pt-[6vw] md:pt-8 border-t border-border-primary">
                                    <span className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary block mb-[3vw] md:mb-4">Stack</span>
                                    <div className="flex flex-wrap gap-[2vw] md:gap-2">
                                        {TECH_STACK.map((t) => (
                                            <span key={t} className="px-[3vw] md:px-3 py-[1vw] md:py-1 rounded-full border border-border-primary text-[2.5vw] md:text-xs font-mono bg-bg-secondary/40 text-fg-secondary">{t}</span>
                                        ))}
                                    </div>
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
