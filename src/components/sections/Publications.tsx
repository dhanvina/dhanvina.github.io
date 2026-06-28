import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';

interface Publication {
    title: string;
    authors: string;
    venue: string;
    year: string;
    publisher: 'Springer' | 'IEEE' | 'Journal';
    url?: string;
    tags: string[];
}

const PUBLICATIONS: Publication[] = [
    {
        title: 'Investigation of Machine Learning Algorithms in Detecting Chronic Kidney Disorder',
        authors: 'Manoj Ishwar Hegde, N. Dhanvina, N. Dharshan, Snigdha Sen',
        venue: 'Machine Learning for Disease Detection, Prediction, and Diagnosis',
        year: '2025',
        publisher: 'Springer',
        url: 'https://link.springer.com/chapter/10.1007/978-981-96-4241-0_11',
        tags: ['Machine Learning', 'Healthcare AI', 'Classification'],
    },
    {
        title: 'AI Powered Resource Management System',
        authors: 'Yashaswini K, Jyothi S, Prajwal Gowda G, N Dhanvina, Nishanth M S',
        venue: 'IEEE International Conference on Blockchain and Distributed Systems Security (ICBDS)',
        year: '2024',
        publisher: 'IEEE',
        url: 'https://ieeexplore.ieee.org/document/10837375',
        tags: ['AI Systems', 'Resource Management', 'Distributed Systems'],
    },
    {
        title: 'Speech-enabled ML-based Automated Attendance Monitoring System through Face Recognition',
        authors: 'Dhanvina N, Mahesh N D, Snigdha Sen',
        venue: 'IEEE International Conference on Contemporary Computing and Communications (InC4)',
        year: '2023',
        publisher: 'IEEE',
        url: 'https://ieeexplore.ieee.org/document/10263205',
        tags: ['Computer Vision', 'Face Recognition', 'Speech Recognition'],
    },
    {
        title: 'Survey of Regression-Driven Stock Market Price Predictors',
        authors: 'N. Dhanvina et al.',
        venue: 'International Journal of Scientific Research in Science, Engineering and Technology (IJSRSET)',
        year: '2022',
        publisher: 'Journal',
        tags: ['Machine Learning', 'Finance', 'Regression'],
    },
];

const publisherColor: Record<string, string> = {
    Springer: '#FF6B35',
    IEEE: '#00629B',
    Journal: '#6B7280',
};

export const Publications = () => {
    return (
        <section id="publications" className="py-[16vw] md:py-24 bg-bg-primary relative">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-mono text-[2.5vw] md:text-base uppercase tracking-widest text-fg-secondary mb-[4vw] md:mb-6"
                >
                    <span className="text-fg-primary/30">02 /</span> Research & Publications
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[4vw] md:text-xl text-fg-secondary leading-relaxed mb-[12vw] md:mb-16 max-w-2xl"
                >
                    Peer-reviewed research published in Springer and IEEE conferences — spanning ML for healthcare, AI systems, computer vision, and market prediction.
                </motion.p>

                <div className="divide-y divide-border-primary">
                    {PUBLICATIONS.map((pub, i) => (
                        <motion.div
                            key={pub.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="py-[6vw] md:py-8 first:pt-0 last:pb-0 group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-[3vw] md:gap-8">
                                {/* Index + publisher badge */}
                                <div className="flex md:flex-col items-center md:items-start gap-[3vw] md:gap-2 shrink-0 md:w-[120px]">
                                    <span className="font-mono text-[2.3vw] md:text-xs text-fg-secondary/40 tabular-nums">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span
                                        className="font-mono text-[2.2vw] md:text-[10px] uppercase tracking-widest px-[2.5vw] md:px-2.5 py-[0.8vw] md:py-1 rounded-full border text-white"
                                        style={{
                                            backgroundColor: publisherColor[pub.publisher],
                                            borderColor: publisherColor[pub.publisher],
                                        }}
                                    >
                                        {pub.publisher}
                                    </span>
                                    <span className="font-mono text-[2.2vw] md:text-[10px] uppercase tracking-widest text-fg-secondary/50">
                                        {pub.year}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="font-display font-bold text-[4.5vw] md:text-xl leading-snug tracking-tight text-fg-primary group-hover:text-fg-primary transition-colors mb-[2vw] md:mb-2 pr-4">
                                            {pub.title}
                                        </h3>
                                        {pub.url && (
                                            <a
                                                href={pub.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="shrink-0 p-[2vw] md:p-2 rounded-full border border-border-primary hover:bg-fg-primary hover:text-bg-primary transition-all duration-300 mt-0.5"
                                                aria-label="Open publication"
                                            >
                                                <ExternalLink className="w-[3.5vw] h-[3.5vw] md:w-3.5 md:h-3.5" />
                                            </a>
                                        )}
                                    </div>

                                    <p className="font-mono text-[2.8vw] md:text-xs text-fg-secondary uppercase tracking-widest mb-[1.5vw] md:mb-2">
                                        {pub.venue}
                                    </p>

                                    <p className="text-[3vw] md:text-sm text-fg-secondary/60 mb-[3vw] md:mb-4 leading-relaxed">
                                        {pub.authors}
                                    </p>

                                    <div className="flex flex-wrap gap-[1.5vw] md:gap-2">
                                        {pub.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="font-mono text-[2.2vw] md:text-[10px] uppercase tracking-widest px-[2.5vw] md:px-2.5 py-[0.8vw] md:py-0.5 rounded-full border border-border-primary text-fg-secondary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
