import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Globe2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { ExperienceModal } from '../ui/ExperienceModal';
import { CybriskCarousel } from '../ui/CybriskCarousel';
import { CaseStudyModal, CaseStudyData } from '../ui/CaseStudyModal';

interface Metric { value: string; label: string; }

interface ExperienceEntry {
    id: string;
    period: string;
    year: string;
    company: string;
    companyUrl?: string;
    location: string;
    role: string;
    tag?: string;
    subtitle?: string;
    description: string;
    bullets: string[];
    chips: string[];
    metrics?: Metric[];
    featured?: boolean;
    caseStudy?: CaseStudyData;
}

const EXPERIENCES: ExperienceEntry[] = [
    {
        id: 'cybrisk',
        period: 'Sep 2024 – Present',
        year: '2024',
        company: 'F9 CYBRISK Tech',
        companyUrl: 'https://cybrisktech.com',
        location: 'Bangalore',
        role: 'AI Engineer',
        tag: 'Current',
        description: 'Building production-grade Agentic AI systems and LLM pipelines for enterprise cybersecurity. Products: CtrlFake (deepfake detection) and CtrlThreats (phishing detection).',
        bullets: [
            'Architected enterprise Agentic RAG using LangChain/LangGraph — 92% accuracy, source-cited, zero hallucinations in production.',
            'Built CtrlFake (ctrlfake.com): deepfake detection using ResNeXt + Transformer on AWS with INT8/FP16 quantization, >90% accuracy on video and image.',
            'Built CtrlThreats (ctrlthreats.com): NLP/ML phishing detection — reduced manual security review by 60%.',
            'Integrated GPT, Claude, and Gemini with Few-Shot, CoT, function calling — 40% inference latency reduction.',
            'Established MLOps: DVC, Docker, MLflow, LangSmith observability, CI/CD pipelines across all AI products.',
            'Led team, drove client POCs with 3/4 production conversion. Awarded Pinnacle Performer of the Year 2024.',
        ],
        chips: ['Python', 'LangChain', 'LangGraph', 'LangSmith', 'PyTorch', 'XGBoost', 'FastAPI', 'AWS', 'DVC', 'Docker'],
        metrics: [
            { value: '92%', label: 'RAG Accuracy' },
            { value: '94%', label: 'Detection Accuracy' },
            { value: '40%', label: 'Latency Reduction' },
            { value: '3/4', label: 'POCs Converted' },
        ],
        featured: true,
    },
    {
        id: 'geekonomy-ai',
        period: 'Jul 2024 – Sep 2024',
        year: '2024',
        company: 'The Geekonomy',
        location: 'Bangalore',
        role: 'AI Engineer',
        description: 'Built conversational AI features and automated workflows for client products.',
        bullets: [
            'Built and integrated conversational AI features into client products using LLM APIs.',
            'Designed automated workflows that reduced manual processes across client pipelines.',
        ],
        chips: ['Python', 'LLM APIs', 'Automation'],
        caseStudy: {
            company: 'The Geekonomy',
            role: 'AI Engineer',
            period: 'Jul 2024 – Sep 2024',
            overview: 'Joined The Geekonomy as an AI Engineer to embed LLM capabilities into existing client products and automate manual business workflows — delivering measurable reduction in operational overhead within a 3-month engagement.',
            sections: [
                {
                    title: 'LLM Feature Integration',
                    bullets: [
                        'Integrated LLM API endpoints (OpenAI GPT series) into existing product backends for conversational AI features.',
                        'Designed prompt templates and context management strategies to ensure consistent, on-brand AI responses across all client products.',
                        'Built streaming chat interfaces with proper session management and response caching.',
                    ],
                },
                {
                    title: 'Workflow Automation',
                    bullets: [
                        'Designed and implemented end-to-end automated workflows that replaced manual client processes.',
                        'Connected disparate systems via API orchestration, eliminating repetitive manual handoffs between teams.',
                        'Delivered measurable reduction in operational overhead across the targeted client pipelines.',
                    ],
                },
            ],
            tech: ['Python', 'OpenAI API', 'FastAPI', 'Automation', 'Prompt Engineering'],
        },
    },
    {
        id: 'geekonomy-app',
        period: 'Apr 2024 – Jun 2024',
        year: '2024',
        company: 'The Geekonomy',
        location: 'Bangalore',
        role: 'App Developer',
        description: 'Cross-platform app development and API integration for law enforcement systems.',
        bullets: [
            'Designed a cross-platform criminal profiling dashboard in Flutter.',
            'Integrated 20+ APIs for automated workflows — reduced manual data entry by 80%.',
            'Optimised real-time data pipelines between law enforcement systems.',
        ],
        chips: ['Flutter', 'Dart', 'REST APIs'],
        caseStudy: {
            company: 'The Geekonomy',
            role: 'App Developer',
            period: 'Apr 2024 – Jun 2024',
            overview: 'Built a cross-platform criminal profiling dashboard for a law enforcement client, integrating 20+ real-time data sources and optimising inter-system pipelines to eliminate 80% of manual data entry.',
            sections: [
                {
                    title: 'Cross-Platform Dashboard',
                    bullets: [
                        'Designed and developed a Flutter-based criminal profiling dashboard targeting iOS and Android.',
                        'Built real-time data visualisations and case management views with clean, functional UI.',
                        'Implemented role-based screens for different law enforcement tiers and access levels.',
                    ],
                },
                {
                    title: 'API Integration',
                    bullets: [
                        'Integrated 20+ external APIs for automated data ingestion from law enforcement databases and third-party sources.',
                        'Reduced manual data entry by 80% through automated field population, sync, and validation logic.',
                        'Built robust error handling and retry mechanisms for unstable data source connections.',
                    ],
                },
                {
                    title: 'Data Pipeline Optimisation',
                    bullets: [
                        'Optimised real-time data pipelines between law enforcement systems for low-latency live updates.',
                        'Implemented incremental sync and client-side caching to reduce API call volume and improve perceived performance.',
                    ],
                },
            ],
            metrics: [
                { value: '20+', label: 'APIs Integrated' },
                { value: '80%', label: 'Manual Entry Reduced' },
            ],
            tech: ['Flutter', 'Dart', 'REST APIs', 'Real-time Sync', 'State Management'],
        },
    },
    {
        id: 'gat',
        period: 'Jun 2023 – Jan 2024',
        year: '2023',
        company: 'Global Academy of Technology — Incubation Centre',
        location: 'Bangalore',
        role: 'Team Lead and Backend Developer',
        description: 'Led a team to build an inventory and asset management platform within the university incubation timeline.',
        bullets: [
            'Led a team building an inventory and asset management system using Django.',
            'Implemented role-based access control (RBAC) and JWT authentication for secure user permissions.',
            'Managed task allocation and team coordination, delivering the project on schedule.',
        ],
        chips: ['Django', 'Python', 'JWT', 'RBAC', 'PostgreSQL'],
        caseStudy: {
            company: 'Global Academy of Technology — Incubation Centre',
            role: 'Team Lead and Backend Developer',
            period: 'Jun 2023 – Jan 2024',
            overview: 'Led a team within GAT\'s incubation centre to design and deliver a full inventory and asset management platform used across the institution for tracking software and hardware assets, from requirements to production deployment.',
            sections: [
                {
                    title: 'System Architecture',
                    bullets: [
                        'Built an inventory and asset management platform in Django for tracking software and hardware assets across departments.',
                        'Designed relational data models for asset categories, assignment records, and lifecycle states.',
                        'RESTful API backend with a clean admin-facing interface and staff dashboard.',
                    ],
                },
                {
                    title: 'Security and Access Control',
                    bullets: [
                        'Implemented Role-Based Access Control (RBAC) for fine-grained user permissions across departments and access tiers.',
                        'JWT-based stateless authentication for secure session management without server-side session overhead.',
                        'Input validation and audit logging for all asset mutations.',
                    ],
                },
                {
                    title: 'Team Leadership',
                    bullets: [
                        'Led a multi-member team: task allocation, sprint planning, daily standups, code reviews, and delivery tracking.',
                        'Coordinated between incubation centre mentors and the development team to manage scope and timeline.',
                        'Delivered the full project within the incubation programme timeline and budget.',
                    ],
                },
            ],
            tech: ['Django', 'Python', 'PostgreSQL', 'JWT', 'RBAC', 'REST API'],
        },
    },
    {
        id: 'dezynation',
        period: 'Mar 2023 – Apr 2023',
        year: '2023',
        company: 'DezyNation',
        location: 'Remote',
        role: 'App Developer',
        description: 'Finance app development with multi-factor authentication and extensive API integration.',
        bullets: [
            'Integrated 25+ APIs into a Flutter-based finance money transfer app with robust data validation.',
            'Implemented OTP and MPIN-based authentication, improving security and user trust.',
        ],
        chips: ['Flutter', 'API Integration', 'FinTech'],
        caseStudy: {
            company: 'DezyNation',
            role: 'App Developer',
            period: 'Mar 2023 – Apr 2023',
            overview: 'Two-month engagement building a cross-platform Flutter finance app for money transfers, integrating 25+ payment and banking APIs with multi-factor authentication designed for high-trust financial transactions.',
            sections: [
                {
                    title: 'Finance App Development',
                    bullets: [
                        'Built a cross-platform money transfer application in Flutter with intuitive, flow-based UI for financial transactions.',
                        'Integrated 25+ APIs covering payment gateways, KYC verification, and banking data providers with full data validation at every boundary.',
                        'Implemented robust error handling and transaction state management to ensure consistency across failed or partial transfers.',
                    ],
                },
                {
                    title: 'Authentication and Security',
                    bullets: [
                        'OTP-based authentication for account access and transaction initiation — integrated with SMS gateway.',
                        'MPIN-based secondary authentication gate for high-value transfer confirmation, improving security posture and user trust.',
                        'Secure token storage and session lifecycle management following FinTech best practices.',
                    ],
                },
            ],
            metrics: [
                { value: '25+', label: 'APIs Integrated' },
            ],
            tech: ['Flutter', 'Dart', 'Payment APIs', 'KYC APIs', 'OTP Auth', 'MPIN'],
        },
    },
    {
        id: 'varuth',
        period: 'Oct 2022 – Nov 2022',
        year: '2022',
        company: 'Varuth',
        location: 'Bangalore',
        role: 'Web Developer',
        description: 'Redesigned company website based on user research, driving significant international traffic growth.',
        bullets: [
            'Redesigned the company website using Figma, attracting 500+ international visitors from Germany and Australia.',
            'Iterated on design based on user research and analytics to improve engagement.',
        ],
        chips: ['Figma', 'Web Design', 'UI/UX'],
        caseStudy: {
            company: 'Varuth',
            role: 'Web Developer',
            period: 'Oct 2022 – Nov 2022',
            overview: 'Redesigned Varuth\'s company website using a user-research-led process. Within weeks of launch, the redesign attracted over 500 international visitors from Germany and Australia, demonstrating a significant uplift in global discoverability.',
            sections: [
                {
                    title: 'User Research and Design',
                    bullets: [
                        'Conducted user research and analytics review to identify drop-off points and pain points in the existing site.',
                        'Redesigned the full website in Figma: information architecture, visual hierarchy, and fully responsive layouts.',
                        'Iterative design process with client feedback cycles and A/B consideration before final handoff.',
                    ],
                },
                {
                    title: 'Outcomes',
                    bullets: [
                        'Attracted 500+ international visitors from Germany and Australia within weeks of the redesign going live.',
                        'Improved user engagement through clearer information hierarchy, stronger CTAs, and faster page structure.',
                        'Delivered measurable improvement in dwell time and bounce reduction on key landing pages.',
                    ],
                },
            ],
            metrics: [
                { value: '500+', label: 'International Visitors' },
            ],
            tech: ['Figma', 'UI/UX Design', 'User Research', 'Web Design', 'HTML/CSS'],
        },
    },
    {
        id: 'education',
        period: '2019 – 2023',
        year: '2019',
        company: 'Global Academy of Technology',
        companyUrl: 'https://gat.ac.in',
        location: 'Bangalore',
        role: 'B.Tech — Computer Science & Engineering',
        tag: 'Education',
        description: 'Graduated with a focus on AI/ML, data structures, and software engineering. Research published during final year; won multiple college-level hackathons.',
        bullets: [
            'B.Tech in Computer Science & Engineering — Global Academy of Technology, VTU.',
            'Published research in IEEE and IJSRSET during final year.',
            'Won HackBites 2.0 (college hackathon) and PHASE SHIFT 2021 (code-a-thon).',
            'Competitively selected for Amazon ML Summer School 2022.',
        ],
        chips: ['Python', 'ML', 'Data Structures', 'Algorithms', 'Research'],
    },
    {
        id: 'amazon',
        period: 'Jul 2022',
        year: '2022',
        company: 'Amazon',
        location: 'Remote',
        role: 'ML Summer School',
        tag: 'Program',
        description: 'Amazon ML Summer School covering advanced machine learning and AI topics.',
        bullets: [
            'Supervised Learning, Deep Neural Networks, Dimensionality Reduction.',
            'Unsupervised Learning, Probabilistic Graphical Models, Sequential Learning.',
            'Causal Inference and Reinforcement Learning.',
        ],
        chips: ['ML', 'Deep Learning', 'Reinforcement Learning', 'Probabilistic Models'],
        caseStudy: {
            company: 'Amazon',
            role: 'ML Summer School Participant',
            period: 'Jul 2022',
            overview: 'Competitively selected for Amazon\'s ML Summer School 2022 — an intensive programme covering the full breadth of modern machine learning, from classical methods to deep learning, reinforcement learning, and causal inference.',
            sections: [
                {
                    title: 'Programme Curriculum',
                    bullets: [
                        'Supervised Learning: regression, classification, SVMs, ensemble methods, and generalisation theory.',
                        'Deep Neural Networks: architecture design, backpropagation, regularisation, and optimisation.',
                        'Dimensionality Reduction: PCA, autoencoders, and manifold learning techniques.',
                        'Unsupervised Learning: clustering algorithms, GMMs, and density estimation.',
                        'Probabilistic Graphical Models: Bayesian networks, HMMs, and exact and approximate inference.',
                        'Sequential Learning: RNNs, LSTMs, and time-series modelling approaches.',
                        'Causal Inference: do-calculus, counterfactual reasoning, and instrumental variable methods.',
                        'Reinforcement Learning: Markov Decision Processes, Q-learning, and policy gradient methods.',
                    ],
                },
                {
                    title: 'Takeaways',
                    bullets: [
                        'Built a strong theoretical foundation across the full ML spectrum that underpins all subsequent work in production AI.',
                        'Exposure to Amazon-scale thinking around ML systems design, data pipelines, and model lifecycle management.',
                        'Accelerated transition from academic ML to applied engineering with industry-grade framing.',
                    ],
                },
            ],
            tech: ['Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'Probabilistic Graphical Models', 'Causal Inference'],
        },
    },
];

export const Experience = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [clickedId, setClickedId] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyData | null>(null);
    let lastYear = '';

    return (
        <section id="experience" className="inverted bg-bg-primary text-fg-primary py-[16vw] md:py-24 relative">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-mono text-[2.5vw] md:text-base uppercase tracking-widest text-fg-secondary mb-[6vw] md:mb-16"
                >
                    <span className="text-fg-primary/30">01 /</span> Experience
                </motion.h2>

                <div className="relative">
                    {/* Vertical timeline line — desktop only */}
                    <div className="hidden md:block absolute left-[72px] top-3 bottom-3 w-px bg-border-primary" />

                    <div className="space-y-[3vw] md:space-y-2">
                        {EXPERIENCES.map((exp, i) => {
                            const showYear = exp.year !== lastYear;
                            if (showYear) lastYear = exp.year;
                            const isHovered = hoveredId === exp.id || clickedId === exp.id;

                            return (
                                <div key={exp.id}>
                                <motion.div
                                    key={`entry-${exp.id}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-5%' }}
                                    transition={{ duration: 0.5, delay: i * 0.04 }}
                                    className="relative md:pl-[100px]"
                                    onMouseEnter={() => setHoveredId(exp.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Year label — desktop */}
                                    <div className="hidden md:flex absolute left-0 top-5 w-[60px] justify-end pr-4">
                                        {showYear && (
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-fg-secondary/60">
                                                {exp.year}
                                            </span>
                                        )}
                                    </div>

                                    {/* Timeline dot — desktop */}
                                    <div className="hidden md:block absolute left-[69px] top-[22px]">
                                        <motion.div
                                            animate={{
                                                scale: isHovered ? 1.6 : 1,
                                                backgroundColor: isHovered ? 'var(--fg-primary)' : 'var(--bg-primary)',
                                            }}
                                            transition={{ duration: 0.2 }}
                                            className="w-[7px] h-[7px] rounded-full border border-fg-primary/50"
                                        />
                                    </div>

                                    {/* Card */}
                                    <div
                                        onClick={() => setClickedId(prev => prev === exp.id ? null : exp.id)}
                                        className={`border rounded-2xl transition-all duration-300 cursor-pointer bg-[#d9c9b6] ${
                                            exp.featured
                                                ? 'border-border-primary'
                                                : 'border-transparent hover:border-border-primary'
                                        }`}
                                    >
                                        {/* Always-visible header */}
                                        <div className="flex items-start justify-between gap-4 p-[5vw] md:px-7 md:pt-5 md:pb-4">
                                            <div className="min-w-0">
                                                <div className="flex flex-wrap items-center gap-[2vw] md:gap-2 mb-[1vw] md:mb-1">
                                                    <h3 className="font-display font-bold text-[5vw] md:text-xl lg:text-2xl uppercase tracking-tight leading-tight">
                                                        {exp.role}
                                                    </h3>
                                                    {exp.tag && (
                                                        <span className="font-mono text-[2vw] md:text-[10px] uppercase tracking-widest px-[2.5vw] md:px-2.5 py-[0.8vw] md:py-0.5 rounded-full border border-border-primary text-fg-secondary">
                                                            {exp.tag}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary">
                                                    {exp.company} · {exp.location}
                                                </p>
                                                {exp.subtitle && (
                                                    <p className="font-mono text-[2.2vw] md:text-[10px] uppercase tracking-widest text-fg-secondary/60 mt-[0.5vw] md:mt-0.5">
                                                        {exp.subtitle}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-[2vw] md:gap-3 shrink-0">
                                                <span className="font-mono text-[2.2vw] md:text-[10px] uppercase tracking-widest text-fg-secondary hidden sm:block">
                                                    {exp.period}
                                                </span>
                                                {exp.companyUrl && (
                                                    <a
                                                        href={exp.companyUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={e => e.stopPropagation()}
                                                        className="w-[8vw] h-[8vw] md:w-8 md:h-8 rounded-full border border-border-primary flex items-center justify-center hover:bg-fg-primary hover:text-bg-primary transition-all duration-300 shrink-0"
                                                    >
                                                        <Globe2 className="w-[4vw] h-[4vw] md:w-3.5 md:h-3.5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Expandable content */}
                                        <AnimatePresence initial={false}>
                                            {isHovered && (
                                                <motion.div
                                                    key="expanded"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                    style={{ overflow: 'hidden' }}
                                                >
                                                    <div className="px-[5vw] md:px-7 pb-[5vw] md:pb-6">
                                                        <div className="h-px w-full bg-border-primary mb-[4vw] md:mb-5" />

                                                        {/* Description */}
                                                        <p className="text-[3.2vw] md:text-sm text-fg-secondary leading-relaxed mb-[4vw] md:mb-5 max-w-3xl">
                                                            {exp.description}
                                                        </p>

                                                        {/* Metrics strip — Cybrisk only */}
                                                        {exp.metrics && (
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-[2vw] md:gap-3 mb-[4vw] md:mb-5">
                                                                {exp.metrics.map(m => (
                                                                    <div
                                                                        key={m.label}
                                                                        className="p-[3vw] md:p-4 rounded-xl border border-border-primary bg-fg-primary/[0.03]"
                                                                    >
                                                                        <div className="font-display font-black text-[6vw] md:text-2xl leading-none mb-[0.5vw] md:mb-1">
                                                                            {m.value}
                                                                        </div>
                                                                        <div className="font-mono text-[2vw] md:text-[10px] uppercase tracking-widest text-fg-secondary">
                                                                            {m.label}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {/* Bullets */}
                                                        <ul className="space-y-[2vw] md:space-y-2.5 mb-[4vw] md:mb-5 max-w-3xl">
                                                            {exp.bullets.map((b, bi) => (
                                                                <li
                                                                    key={bi}
                                                                    className="relative pl-[5vw] md:pl-6 text-[3vw] md:text-sm text-fg-secondary leading-relaxed before:content-[''] before:absolute before:left-[1vw] md:before:left-1.5 before:top-[2vw] md:before:top-[0.55rem] before:w-[2vw] md:before:w-2 before:h-px before:bg-fg-primary/40"
                                                                >
                                                                    {b}
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        {/* Tech chips */}
                                                        <div className="flex flex-wrap gap-[1.5vw] md:gap-2 mb-[3vw] md:mb-4">
                                                            {exp.chips.map(chip => (
                                                                <span
                                                                    key={chip}
                                                                    className="px-[2.5vw] md:px-3 py-[0.8vw] md:py-0.5 rounded-full border border-border-primary text-[2.2vw] md:text-[10px] font-mono uppercase tracking-widest text-fg-secondary"
                                                                >
                                                                    {chip}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {/* Case study CTA — all entries */}
                                                        {(exp.featured || exp.caseStudy) && (
                                                            <button
                                                                onClick={() => exp.featured ? setIsModalOpen(true) : setActiveCaseStudy(exp.caseStudy!)}
                                                                className="flex items-center gap-[1.5vw] md:gap-2 font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-primary hover:opacity-70 transition-opacity"
                                                            >
                                                                View case study
                                                                <ArrowUpRight className="w-[3vw] h-[3vw] md:w-3.5 md:h-3.5" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>

                                {/* Cybrisk projects carousel — rendered right after Cybrisk entry */}
                                {exp.featured && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.15 }}
                                        className="md:pl-[100px] mt-3 mb-2"
                                    >
                                        <p className="font-mono text-[2vw] md:text-[10px] uppercase tracking-widest text-fg-secondary/50 mb-3">
                                            Projects at Cybrisk
                                        </p>
                                        <CybriskCarousel />
                                    </motion.div>
                                )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>

            <ExperienceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <CaseStudyModal
                data={activeCaseStudy}
                onClose={() => setActiveCaseStudy(null)}
            />
        </section>
    );
};
