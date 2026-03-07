"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // ── True JS Parallax ──
        const onScroll = () => {
            const y = window.scrollY;
            if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.45}px)`;
            if (textRef.current) textRef.current.style.transform = `translateY(${y * 0.2}px)`;
            if (textRef.current) textRef.current.style.opacity = `${1 - y / 600}`;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="parallax-hero">
            {/* Parallax BG */}
            <div
                ref={bgRef}
                className="parallax-bg"
                style={{ backgroundImage: "url('/hero_modern.png')" }}
            />

            {/* Overlays */}
            <div className="parallax-overlay" />
            <div className="parallax-overlay-bottom" />

            {/* Floating noise grain */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }}
            />

            {/* Content */}
            <div ref={textRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
                <div className="max-w-3xl">

                    {/* Label */}
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px w-12 bg-amber-400" />
                        <p className="section-label">Gateway to Thailand</p>
                    </div>

                    {/* Headline */}
                    <h1 className="display-xl text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Your Trusted<br />
                        <em className="text-gold not-italic">Visa Partner</em><br />
                        in Thailand
                    </h1>

                    <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl font-light">
                        Thailand's most trusted visa consultancy since 1995. We handle every complexity
                        so your journey begins with clarity and confidence.
                    </p>

                    {/* CTA Row */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        <button id="hero-cta-primary" onClick={() => go("#contact")} className="btn-gold">
                            <span style={{ position: "relative", zIndex: 1 }}>Begin Your Journey</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: "relative", zIndex: 1 }}>
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        <button id="hero-cta-secondary" onClick={() => go("#services")} className="btn-ghost">
                            Explore Services
                        </button>
                    </div>

                    {/* Trust Stats */}
                    <div className="flex flex-wrap items-center gap-8">
                        {[
                            { val: "25+", label: "Programmes" },
                            { val: "5K+", label: "Happy Clients" },
                            { val: "98%", label: "Success Rate" },
                        ].map(s => (
                            <div key={s.label} className="flex items-baseline gap-2">
                                <span className="font-serif text-3xl font-bold text-gold">{s.val}</span>
                                <span className="text-white/40 text-sm tracking-wider uppercase font-medium">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
                <div className="w-px h-16 relative overflow-hidden bg-white/10">
                    <div className="w-full h-1/2 bg-amber-400 animate-bounce absolute top-0" />
                </div>
                <span className="section-label text-[9px]">Scroll</span>
            </div>

            {/* Floating country badge */}
            <div className="absolute top-32 right-8 lg:right-16 z-20 floating-badge hidden md:block">
                <div className="glass-card rounded-2xl px-5 py-4 text-center"
                    style={{ background: "rgba(6,13,27,0.6)", border: "1px solid rgba(201,168,92,0.25)" }}>
                    <p className="text-amber-400 font-serif text-3xl font-bold">15+</p>
                    <p className="text-white/50 text-xs tracking-widest uppercase mt-0.5">Years of Trust</p>
                </div>
            </div>
        </section>
    );
}
