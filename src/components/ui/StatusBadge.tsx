import { motion } from 'framer-motion';

export const StatusBadge = () => {
    return (
        <motion.a
            href="mailto:ndhanvina07@gmail.com"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border-primary bg-bg-primary/90 backdrop-blur-md shadow-lg hover:scale-105 transition-transform cursor-pointer select-none"
        >
            <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-fg-primary whitespace-nowrap">
                Open to AI roles & consulting
            </span>
        </motion.a>
    );
};
