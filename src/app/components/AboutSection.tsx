"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const STATS = [
    { val: "5,000+", label: "Happy Clients" },
    { val: "15+", label: "Years Experience" },
    { val: "98%", label: "Success Rate" },
    { val: "25+", label: "Visa Programmes" },
];

export default function AboutSection() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if (!bgRef.current) return;
            const rect = bgRef.current.closest("section")!.getBoundingClientRect();
            const ratio = -rect.top / window.innerHeight;
            bgRef.current.style.transform = `translateY(${ratio * 120}px)`;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section id="about" className="relative overflow-hidden"
            style={{ background: "#060D1B" }}>

            {/* ── Parallax Image Band ── */}
            <div className="parallax-section" style={{ minHeight: "480px" }}>
                <div ref={bgRef} className="parallax-section-bg"
                    style={{ backgroundImage: "url('/about_parallax.png')" }} />
                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(105deg, rgba(6,13,27,0.93) 0%, rgba(6,13,27,0.75) 60%, rgba(6,13,27,0.4) 100%)" }} />
                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, #060D1B 0%, transparent 60%)" }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6 reveal" data-reveal>
                            <div className="h-px w-12 bg-amber-400" />
                            <p className="section-label">Our Story</p>
                        </div>
                        <h2 className="display-lg text-white mb-6 reveal" data-reveal
                            style={{ fontFamily: "'Cormorant Garamond',serif" }}>
                            A Glimpse of<br />
                            <span className="text-gold">Star Visa Service</span>
                        </h2>
                        <p className="text-white/60 text-base leading-relaxed mb-4 reveal" data-reveal>
                            Discover our comprehensive Thailand Visa Service — your dedicated ally for
                            navigating the complexities of visa acquisition for travel, work, study, or
                            residency in Thailand.
                        </p>
                        <p className="text-white/60 text-base leading-relaxed reveal" data-reveal>
                            With our seasoned expertise, tailored guidance, and meticulous attention to detail,
                            we ensure a smooth process that prioritises your peace of mind.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Stats Row ── */}
            <div className="border-y reveal" data-reveal
                style={{ borderColor: "rgba(201,168,92,0.15)" }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {STATS.map((s, i) => (
                            <div key={s.label} id={`stat-${i}`} className="stat-modern py-12">
                                <p className="font-serif text-5xl font-bold text-gold mb-2">{s.val}</p>
                                <p className="text-white/40 text-xs tracking-widest uppercase font-medium">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Two-col Detail ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: text */}
                    <div>
                        <div className="flex items-center gap-4 mb-6 reveal" data-reveal>
                            <div className="h-px w-12 bg-amber-400" />
                            <p className="section-label">Accreditations</p>
                        </div>
                        <h3 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 reveal" data-reveal>
                            Certified Across<br />
                            <span className="text-gold">Every Category</span>
                        </h3>
                        <p className="text-white/55 text-base leading-relaxed mb-10 reveal" data-reveal>
                            Our business is accredited as STV Visa, Elite Star, BOI New Business Visa &amp; Work Permit,
                            Marriage Registration in Thailand, Translation, Education Advice and more.
                        </p>

                        {/* Hours */}
                        <div className="space-y-4 reveal" data-reveal>
                            {[
                                { day: "Monday – Friday", hrs: "08:30 – 17:30" },
                                { day: "Saturday", hrs: "08:30 – 15:30" },
                            ].map(h => (
                                <div key={h.day} className="flex justify-between items-center py-4"
                                    style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                                    <span className="text-white/50 text-sm">{h.day}</span>
                                    <span className="font-serif text-xl font-bold text-gold">{h.hrs}</span>
                                </div>
                            ))}
                        </div>

                        <button className="btn-gold mt-10 reveal" data-reveal
                            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                            <span style={{ position: "relative", zIndex: 1 }}>Contact Our Team</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: "relative", zIndex: 1 }}>
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Right: image + badge */}
                    <div className="relative reveal from-right" data-reveal>
                        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,168,92,0.2)" }}>
                            <Image
                                src="/visa_doc.png"
                                alt="Visa documents and passport on marble"
                                width={600}
                                height={450}
                                className="w-full object-cover"
                                style={{ height: "420px" }}
                            />
                            <div className="absolute inset-0 rounded-2xl"
                                style={{ background: "linear-gradient(to top, rgba(6,13,27,0.7) 0%, transparent 50%)" }} />
                        </div>

                        {/* Floating absolute badge */}
                        <div className="absolute -bottom-6 -left-6 rounded-2xl p-5 floating-badge"
                            style={{ background: "#0C1A30", border: "1px solid rgba(201,168,92,0.3)" }}>
                            <p className="font-serif text-4xl font-bold text-gold leading-none">1995</p>
                            <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Est. Bangkok</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
