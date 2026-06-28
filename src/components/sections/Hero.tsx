import { motion, type Variants } from 'framer-motion';
import { Github, Twitter, Linkedin, Calendar } from 'lucide-react';
import { Container } from '../ui/Container';
import { SocialButton } from '../ui/SocialButton';
import { ResumeButton } from '../ui/ResumeButton';
import { SideBranding } from '../ui/SideBranding';
import { ClientLogoStrip } from '../ui/ClientLogoStrip';


const LETTERS = ['D', 'H', 'A', 'N', 'V', 'I', 'N', 'A'];

const titleContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.3,
        },
    },
};

const titleLetterVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.01 },
    },
};

interface HeroProps {
    theme?: 'light' | 'dark';
    onResumeClick?: () => void;
}

export const Hero = ({ theme = 'dark', onResumeClick }: HeroProps) => {
    return (
        <section id="hero" className="min-h-[100dvh] lg:min-h-[90vh] relative flex flex-col pb-0 overflow-visible">
            {/* Split Background — glassy panels */}
            <div className="absolute inset-0 z-0 flex flex-col pointer-events-none">
                {/* TOP half — frosted glass panel */}
                <div
                    className={`relative h-[58%] lg:h-[44%] w-full overflow-hidden ${
                        theme === 'dark' ? 'bg-[#ededed]' : 'bg-black'
                    }`}
                >
                    {/* Vertical depth gradient — slight lightness shift bottom-to-top */}
                    <div
                        className={`absolute inset-0 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-b from-white via-white/95 to-zinc-100'
                                : 'bg-gradient-to-b from-black via-black/95 to-zinc-950'
                        }`}
                    />
                    {/* Specular top reflection — strong highlight along the upper edge */}
                    <div
                        className={`absolute inset-x-0 top-0 h-1/3 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-b from-white via-white/40 to-transparent'
                                : 'bg-gradient-to-b from-zinc-700/60 via-zinc-800/30 to-transparent'
                        }`}
                    />
                    {/* Diagonal sheen — subtle light streak across the surface */}
                    <div
                        className={`absolute inset-0 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-tr from-transparent via-white/15 to-transparent'
                                : 'bg-gradient-to-tr from-transparent via-zinc-700/20 to-transparent'
                        }`}
                    />
                    {/* Bottom edge — soft shadow where it meets the dark half */}
                    <div
                        className={`absolute inset-x-0 bottom-0 h-12 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-t from-zinc-200/50 to-transparent'
                                : 'bg-gradient-to-t from-zinc-900/40 to-transparent'
                        }`}
                    />
                </div>

                {/* BOTTOM half — dark glass panel */}
                <div className="relative h-[42%] lg:h-[56%] w-full overflow-hidden bg-bg-primary">
                    {/* Top edge highlight — thin specular line at the seam */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fg-primary/30 to-transparent" />
                    {/* Soft top fade — light bleeding down from the bright half */}
                    <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-fg-primary/[0.05] to-transparent" />
                    {/* Centered radial highlight — gives the dark surface a sense of depth */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]" />
                </div>
            </div>

            {/* Side branding — anchored to the split inside Hero */}
            <SideBranding />

            {/* Client logo strip — far right edge */}
            <div className="hidden lg:flex absolute right-4 xl:right-6 inset-y-0 z-20 items-center pointer-events-none">
                <ClientLogoStrip />
            </div>

            <Container className="relative z-10 min-h-[100dvh] lg:h-full flex flex-col pt-4 lg:pt-8 pb-24 lg:pb-10 overflow-visible">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end lg:items-start overflow-visible"
                >
                    {/* Left Column: Image */}
                    <div className="order-1 lg:order-1 lg:row-start-1 lg:col-start-1 lg:col-span-5 hidden lg:flex justify-start items-end z-10 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-full h-full flex items-end justify-start"
                        >
                            <motion.img
                                src="/Pic/Hero.png"
                                alt="Dhanvina - AI Engineer"
                                loading="eager"
                                fetchPriority="high"
                                initial={false}
                                animate={{
                                    filter: theme === 'dark'
                                        ? 'grayscale(5%) contrast(115%) brightness(1.05)'
                                        : 'grayscale(10%) contrast(110%) brightness(0.95)',
                                }}
                                transition={{ duration: 0.8 }}
                                style={{
                                    willChange: 'filter',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                                    maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                                }}
                                className="w-full max-h-[85vh] object-contain object-bottom drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Text */}
                    <div className="order-2 lg:order-2 lg:row-start-1 lg:col-start-6 lg:col-span-7 relative z-30 pt-16 sm:pt-20 lg:pt-24 h-full flex flex-col pointer-events-none">
                        {/* Huge Heading */}
                        <div className="-translate-y-[25%] lg:translate-y-0 -mb-24 lg:-mb-0 lg:-ml-52 xl:-ml-64">
                            <h1 className={`font-display font-black text-[13vw] md:text-[11vw] lg:text-8xl xl:text-[8.5rem] leading-[0.8] lg:leading-[0.85] tracking-tighter uppercase mb-4 lg:mb-6 lg:mix-blend-difference ${theme === 'light' ? 'text-white' : 'text-black'}`}>
                                <motion.span
                                    variants={titleContainerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="inline"
                                >
                                    {LETTERS.map((letter, i) => (
                                        <motion.span key={i} variants={titleLetterVariants} className="inline-block" style={{ backgroundColor: '#cccccc', lineHeight: 1 }}>
                                            {letter}
                                        </motion.span>
                                    ))}
                                    <span className="dhanvina-cursor">_</span>
                                </motion.span>
                            </h1>
                        </div>

                        {/* Description & Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="w-full mt-auto mb-6 lg:mb-36 pointer-events-auto"
                        >
                            <p className="hero-intro-text max-w-xl text-sm md:text-xl lg:text-2xl text-white/80 leading-relaxed font-medium mb-4 lg:mb-6">
                                <strong className="text-white font-bold">Agentic AI</strong> that reasons, executes, and ships — not just demos.<br />
                                LangGraph · RAG · Multi-agent systems · Springer &amp; IEEE published.
                            </p>

                            {/* Stats bar */}
                            <div className="flex flex-wrap items-center gap-x-[5vw] gap-y-[2vw] md:gap-x-7 md:gap-y-2 mb-4 lg:mb-10">
                                {[
                                    { value: '4', label: 'Publications' },
                                    { value: '2+', label: 'Yrs Prod AI' },
                                    { value: '3/4', label: 'POCs Shipped' },
                                    { value: '53+', label: 'VS Code Installs' },
                                ].map(stat => (
                                    <div key={stat.label} className="flex items-baseline gap-[1.5vw] md:gap-1.5">
                                        <span className="font-display font-black text-[6vw] md:text-2xl text-white leading-none">{stat.value}</span>
                                        <span className="font-mono text-[2vw] md:text-[10px] uppercase tracking-widest text-white/50">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-3 md:gap-4 relative z-50">
                                <SocialButton href="https://github.com/dhanvina" icon={Github} label="GitHub Profile" />
                                <SocialButton href="https://x.com/ndhanvina" icon={Twitter} label="X Profile" />
                                <SocialButton href="https://www.linkedin.com/in/ndhanvina/" icon={Linkedin} label="LinkedIn Profile" />
                                <SocialButton href="https://cal.com/dhanvina" icon={Calendar} label="Book a Call" />
                                <ResumeButton onClick={onResumeClick} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};
