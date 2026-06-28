import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

const SERVICES = [
    {
        tag: 'Most requested',
        heading: 'AI Agents & Automation',
        description:
            'Enterprise multi-agent pipelines, RAG systems, and LangGraph workflows. Supervisor-orchestrated agents with reflection loops, LangSmith observability, and zero hallucinations in production.',
        chips: ['LangChain', 'LangGraph', 'RAG', 'Python', 'FastAPI', 'LangSmith'],
    },
    {
        tag: 'Speciality',
        heading: 'LLM Engineering',
        description:
            'Production LLM integration across GPT, Claude, and Gemini with Few-Shot prompting, Chain-of-Thought, function calling, and structured outputs. 40% latency reduction achieved on a live enterprise RAG system.',
        chips: ['OpenAI', 'Claude', 'Gemini', 'Groq', 'Prompt Engineering'],
    },
    {
        tag: 'Deep expertise',
        heading: 'ML & Cybersecurity AI',
        description:
            'Custom ML pipelines for threat detection: XGBoost phishing classifiers, ResNeXt + Transformer deepfake detection deployed on AWS with INT8 quantization, and full MLOps with DVC, Docker, and CI/CD.',
        chips: ['PyTorch', 'XGBoost', 'AWS', 'DVC', 'Docker', 'FastAPI'],
    },
];

export const Services = () => {
    return (
        <section
            id="services"
            className="py-[16vw] md:py-24 bg-fg-primary text-bg-primary relative overflow-hidden"
        >
            <Container className="relative z-10">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-[2.5vw] md:text-base uppercase tracking-widest text-bg-primary/50 text-center block mb-[3vw] md:mb-4"
                >
                    06 / Services
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display font-black text-[10vw] md:text-7xl lg:text-8xl mb-[4vw] md:mb-6 text-center uppercase leading-[0.9] md:leading-none"
                >
                    What I Build
                </motion.h2>


                {/* Service cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw] md:gap-5 mb-[8vw] md:mb-10">
                    {SERVICES.map((service, i) => (
                        <motion.div
                            key={service.heading}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-5%' }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex flex-col p-[6vw] md:p-7 border border-bg-primary/20 rounded-3xl bg-[#bfbfbf] backdrop-blur-sm"
                        >
                            {/* Tag */}
                            <span className="self-start font-mono text-[2.2vw] md:text-[10px] uppercase tracking-widest bg-bg-primary/10 border border-bg-primary/20 rounded-full px-[3vw] md:px-3 py-[1vw] md:py-1 mb-[5vw] md:mb-6">
                                {service.tag}
                            </span>

                            <h3 className="font-display font-bold text-[6vw] md:text-2xl mb-[3vw] md:mb-4 tracking-tight leading-tight">
                                {service.heading}
                            </h3>

                            <p className="text-[3.3vw] md:text-sm leading-relaxed opacity-75 mb-[5vw] md:mb-6 flex-1">
                                {service.description}
                            </p>

                            {/* Tech chips */}
                            <div className="flex flex-wrap gap-[2vw] md:gap-2 mb-[5vw] md:mb-6">
                                {service.chips.map(chip => (
                                    <span
                                        key={chip}
                                        className="font-mono text-[2.2vw] md:text-[10px] uppercase tracking-widest border border-bg-primary/20 rounded-full px-[2.5vw] md:px-2.5 py-[1vw] md:py-0.5 opacity-70"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <a
                                href="https://cal.com/dhanvina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="self-start font-mono text-[2.8vw] md:text-sm uppercase tracking-widest font-bold opacity-80 hover:opacity-100 transition-opacity"
                            >
                                Let's build →
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Process steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-[8vw] md:mb-10"
                >
                    <p className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-bg-primary/50 mb-[5vw] md:mb-7">
                        How I build
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[4vw] md:gap-0">
                        {[
                            { step: '01', title: 'Problem Discovery', body: 'Define the real problem, map data sources, set success metrics before writing a line.' },
                            { step: '02', title: 'System Design', body: 'Architect the agent graph, RAG pipeline, or ML pipeline — choosing tools for production, not demos.' },
                            { step: '03', title: 'Build & Ship', body: 'Iterative builds with LangSmith tracing, structured outputs, and human-in-the-loop gates.' },
                            { step: '04', title: 'Observe & Improve', body: 'Monitor latency, accuracy, and drift in production. Tune until it earns trust.' },
                        ].map((s, i, arr) => (
                            <div
                                key={s.step}
                                className={`p-[4vw] md:p-6 ${i < arr.length - 1 ? 'md:border-r border-bg-primary/20' : ''}`}
                            >
                                <span className="font-mono text-[2.2vw] md:text-[10px] uppercase tracking-widest text-bg-primary/40 block mb-[2vw] md:mb-3">
                                    {s.step}
                                </span>
                                <h4 className="font-display font-bold text-[4vw] md:text-lg mb-[2vw] md:mb-2 leading-tight">
                                    {s.title}
                                </h4>
                                <p className="text-[3vw] md:text-sm opacity-60 leading-relaxed">
                                    {s.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-[4vw] md:gap-0 border-t border-bg-primary/20 pt-[6vw] md:pt-8"
                >
                    <span className="font-mono text-[2.8vw] md:text-sm text-bg-primary/60 uppercase tracking-widest">
                        Open to AI roles &amp; consulting
                    </span>

                    <a
                        href="https://cal.com/dhanvina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-[6vw] md:px-8 py-[3vw] md:py-4 rounded-full font-bold font-mono text-[2.5vw] md:text-base uppercase bg-bg-primary text-fg-primary transition-opacity hover:opacity-90 whitespace-nowrap"
                    >
                        Book a free call
                    </a>
                </motion.div>
            </Container>
        </section>
    );
};
