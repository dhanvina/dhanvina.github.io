import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';
import { Container } from '../ui/Container';
import { MagneticButton } from '../ui/MagneticButton';
import { ResumeButton } from '../ui/ResumeButton';

interface FooterProps {
    theme: 'light' | 'dark';
    onResumeClick?: () => void;
}

export const Footer = ({ theme: _theme, onResumeClick }: FooterProps) => {

    return (
        <footer id="contact" className="min-h-[80vh] flex flex-col justify-between pt-[2vw] md:pt-4 relative">
            <Container>
                <div className="flex flex-col gap-[12vw] md:gap-12">
                    {/* Top Row: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="font-mono text-[2.5vw] md:text-base uppercase tracking-widest text-fg-secondary block mb-[3vw] md:mb-4">
                            <span className="text-fg-primary/30">07 /</span> Contact
                        </span>
                        <h2 className="font-display font-black text-[16vw] md:text-9xl lg:text-[12rem] leading-[0.75] tracking-tighter uppercase">
                            Let's<br />Talk.
                        </h2>
                        <p className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary mt-[4vw] md:mt-6">
                            3 IEEE &amp; Springer publications &nbsp;·&nbsp; Pinnacle Performer 2024 &nbsp;·&nbsp; 3/4 POCs → Production
                        </p>
                    </motion.div>

                    {/* Bottom Row: Actions (Single Line) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap md:flex-nowrap gap-[3vw] md:gap-3 items-center justify-center w-full"
                    >
                        {[
                            { href: "mailto:ndhanvina07@gmail.com", icon: <Mail className="w-[4.5vw] h-[4.5vw] md:w-5 md:h-5" />, label: "ndhanvina07@gmail.com", className: "bg-fg-primary text-bg-primary" },
                            { href: "https://cal.com/dhanvina", icon: <Calendar className="w-[4.5vw] h-[4.5vw] md:w-5 md:h-5" />, label: "Book a call", className: "border border-border-primary hover:bg-bg-secondary" }
                        ].map((btn, i) => (
                            <MagneticButton key={i}>
                                <a
                                    href={btn.href}
                                    target={btn.href.startsWith('http') ? "_blank" : undefined}
                                    rel={btn.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className={`px-[6vw] md:px-8 py-[3vw] md:py-4 rounded-full font-bold font-mono text-[2.5vw] md:text-base uppercase transition-all flex items-center gap-[2vw] md:gap-3 whitespace-nowrap ${btn.className}`}
                                >
                                    {btn.icon} {btn.label}
                                </a>
                            </MagneticButton>
                        ))}
                        <ResumeButton
                            className="font-bold border border-border-primary hover:bg-bg-secondary"
                            onClick={onResumeClick}
                        />
                    </motion.div>
                </div>
            </Container>

            <Container className="flex justify-between items-end text-[3vw] md:text-sm pt-[3vw] md:pt-6 font-mono uppercase text-fg-secondary">
                <span>© 2026 Dhanvina</span>
                <div className="flex gap-[6vw] md:gap-4">
                    <a href="https://github.com/Dhanvina" target="_blank" rel="noopener noreferrer" className="hover:text-fg-primary transition-colors">GitHub</a>
                    <a href="https://x.com/ndhanvina" target="_blank" rel="noopener noreferrer" className="hover:text-fg-primary transition-colors">X</a>
                    <a href="https://www.linkedin.com/in/ndhanvina/" target="_blank" rel="noopener noreferrer" className="hover:text-fg-primary transition-colors">LinkedIn</a>
                </div>
            </Container>

            {/* Bottom Watermark - Separate & Faded - keeping vw for decorative scaling */}
            <div className="w-full flex justify-center items-end mt-[12vw] md:mt-4 overflow-hidden pointer-events-none select-none">
                    <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 0.3, y: 16 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="font-display font-black text-[24vw] md:text-[20.5vw] leading-[0.7] bg-gradient-to-b from-fg-primary to-transparent bg-clip-text text-transparent tracking-tighter uppercase whitespace-nowrap transform"
                >
                    Dhanvina
                </motion.h1>
            </div>
        </footer>
    );
};
