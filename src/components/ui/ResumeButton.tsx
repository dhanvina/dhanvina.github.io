import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

interface ResumeButtonProps {
    className?: string;
    onClick?: () => void;
}

const AnimatedEye = () => (
    <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-6 md:h-6"
    >
        {/* Open eye outline */}
        <motion.path
            d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.3 }}
        />
        {/* Closed lid */}
        <motion.path
            d="M2 12C2 12 5 16 12 16C19 16 22 12 22 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={{ initial: { opacity: 1 }, hover: { opacity: 0 } }}
            transition={{ duration: 0.2 }}
        />
        {/* Lashes */}
        <motion.g
            variants={{ initial: { opacity: 1 }, hover: { opacity: 0 } }}
            transition={{ duration: 0.2 }}
        >
            <line x1="6" y1="14.5" x2="5" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="9" y1="16" x2="8.5" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="16.5" x2="12" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="15" y1="16" x2="15.5" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="14.5" x2="19" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
        {/* Iris */}
        <motion.circle
            cx="12" cy="12" r="3"
            stroke="currentColor" strokeWidth="1.5" fill="none"
            variants={{ initial: { scale: 0, opacity: 0 }, hover: { scale: 1, opacity: 1 } }}
            transition={{ duration: 0.3, delay: 0.1 }}
        />
        {/* Pupil */}
        <motion.circle
            cx="12" cy="12" r="1.5"
            fill="currentColor"
            variants={{ initial: { scale: 0, opacity: 0 }, hover: { scale: 1, opacity: 1 } }}
            transition={{ duration: 0.3, delay: 0.15 }}
        />
    </motion.svg>
);

export const ResumeButton = ({ className = "", onClick }: ResumeButtonProps) => {
    const handleClick = (e?: React.MouseEvent) => {
        if (onClick) {
            e?.preventDefault();
            onClick();
        }
    };

    return (
        <MagneticButton onClick={handleClick}>
            <motion.a
                href="https://drive.google.com/file/d/1izp4u2wqtKNfSSXFTvX_VBnAe6vKKoT4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial="initial"
                whileHover="hover"
                animate="initial"
                className={`group relative flex items-center rounded-full border border-fg-primary/30 bg-gradient-to-br from-fg-primary/[0.18] via-fg-primary/[0.10] to-fg-primary/[0.04] backdrop-blur-2xl backdrop-saturate-150 shadow-[0_10px_30px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(0,0,0,0.12)] overflow-hidden transition-shadow duration-500 hover:border-fg-primary/50 hover:shadow-[0_14px_40px_rgba(0,0,0,0.28),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(0,0,0,0.15)] ${className}`}
            >
                {/* Top gleam */}
                <span className="pointer-events-none absolute inset-x-1 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-fg-primary/[0.18] to-transparent z-10" />

                {/* Slide-up fill on hover */}
                <div className="absolute inset-0 bg-fg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                {/* Icon — always visible, circle-sized */}
                <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center shrink-0 text-fg-primary group-hover:text-bg-primary transition-colors duration-500">
                    <AnimatedEye />
                </div>

                {/* Expanding label */}
                <span className="relative z-10 max-w-0 overflow-hidden group-hover:max-w-[5rem] pr-0 group-hover:pr-5 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] whitespace-nowrap font-mono text-xs uppercase tracking-widest text-fg-primary group-hover:text-bg-primary">
                    Resume
                </span>
            </motion.a>
        </MagneticButton>
    );
};
