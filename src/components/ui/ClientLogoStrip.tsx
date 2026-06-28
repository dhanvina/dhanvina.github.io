import { useState, useEffect, useRef } from 'react';

interface Client {
    id: string;
    name: string;
    file: string;
}

const CLIENTS: Client[] = [
    { id: 'cybrisk',         name: 'Cybrisk',         file: 'cybrisk-removebg-preview.png' },
    { id: 'hindustan-power', name: 'Hindustan Power', file: 'hindustan-power-removebg-preview.png' },
    { id: 'ctrlfake',        name: 'CtrlFake',        file: 'ctrlfake-removebg-preview.png' },
    { id: 'leadspotting',    name: 'Leadspotting',    file: 'leadspotting-removebg-preview.png' },
];

const ITEM_H = 136;       // logo height + gap (px)
const LOGO_SIZE = 110;    // logo square size (px)
const MAX_SCALE = 1.4;    // scale at center
const MIN_SCALE = 0.55;   // scale at edges
const MIN_X = Math.ceil((LOGO_SIZE * (MAX_SCALE - 1)) / 2) + 2;
const MAX_X = 52;          // rightmost position (top & bottom of C)
const SPEED = 0.5;         // scroll speed (px per frame)

const LogoItem = ({ client }: { client: Client }) => {
    const [imgFailed, setImgFailed] = useState(false);
    return (
        <div className="w-full h-full flex items-center justify-center">
            {!imgFailed ? (
                <img
                    src={`/clients/${client.file}`}
                    alt={client.name}
                    title={client.name}
                    onError={() => setImgFailed(true)}
                    className="w-full h-full object-contain"
                />
            ) : (
                <span className="font-mono text-[9px] uppercase tracking-widest text-fg-primary/30 text-center leading-tight">
                    {client.name.slice(0, 3)}
                </span>
            )}
        </div>
    );
};

export const ClientLogoStrip = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const offsetRef = useRef(0);
    const pausedRef = useRef(false);

    // Duplicate list for seamless looping
    const items = [...CLIENTS, ...CLIENTS];
    const TOTAL = CLIENTS.length * ITEM_H;

    useEffect(() => {
        let raf: number;

        const tick = () => {
            if (!pausedRef.current) {
                offsetRef.current = (offsetRef.current + SPEED) % TOTAL;
            }

            const containerH = containerRef.current?.clientHeight ?? 480;

            itemRefs.current.forEach((el, i) => {
                if (!el) return;
                // Each item's Y, wrapped so they tile seamlessly
                const rawY = ((i * ITEM_H - offsetRef.current) % TOTAL + TOTAL) % TOTAL;

                // Clamp: items that scroll past the bottom wrap back to top
                // We render 2× items so the second set fills the gap
                const y = rawY;

                // Normalize position within visible container (0=top, 1=bottom)
                const norm = Math.max(0, Math.min(1, y / containerH));
                const sineVal = Math.sin(norm * Math.PI);

                // C-shape: right at top & bottom (x=MAX_X), left at middle (x=MIN_X)
                // MIN_X prevents the scaled logo from clipping the left edge
                const x = MIN_X + (MAX_X - MIN_X) * (1 - sineVal);

                // Scale: largest at middle, smallest at edges
                const scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * sineVal;

                el.style.transform = `translate(${x}px, ${y}px) scale(${scale.toFixed(3)})`;
                el.style.transformOrigin = 'center center';
                el.style.opacity = y > containerH ? '0' : '1';
            });

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [TOTAL]);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{ height: '560px', width: `${Math.ceil(LOGO_SIZE * MAX_SCALE) + MAX_X + 4}px` }}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
        >
            {items.map((client, i) => (
                <div
                    key={`${client.id}-${i}`}
                    ref={el => { itemRefs.current[i] = el; }}
                    className="absolute top-0 left-0"
                    style={{
                        width: `${LOGO_SIZE}px`,
                        height: `${LOGO_SIZE}px`,
                        willChange: 'transform, opacity',
                        zIndex: Math.round(i),
                    }}
                >
                    <LogoItem client={client} />
                </div>
            ))}
        </div>
    );
};
