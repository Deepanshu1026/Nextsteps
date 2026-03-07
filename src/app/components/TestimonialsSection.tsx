"use client";
import { useState } from "react";

const TESTIMONIALS = [
    {
        id: "t1",
        name: "James Mitchell",
        role: "Retired Expat",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "Client since 2018",
        quote:
            "StarVisa transformed what I imagined to be an overwhelming process into something genuinely effortless. Approved in under two weeks — remarkable.",
        rating: 5,
    },
    {
        id: "t2",
        name: "Priya Sharma",
        role: "Digital Nomad",
        country: "India",
        flag: "🇮🇳",
        years: "Client since 2022",
        quote:
            "The LTR Visa application seemed impossible until StarVisa stepped in. Every document, every deadline — handled flawlessly. I couldn't recommend them more highly.",
        rating: 5,
    },
    {
        id: "t3",
        name: "Thomas Weber",
        role: "Business Owner",
        country: "Germany",
        flag: "🇩🇪",
        years: "Client since 2019",
        quote:
            "Their legal team handled my BOI application and work permits with absolute precision. A true one-stop partner for anyone building a life in Thailand.",
        rating: 5,
    },
    {
        id: "t4",
        name: "Yuki Tanaka",
        role: "University Student",
        country: "Japan",
        flag: "🇯🇵",
        years: "Client since 2023",
        quote:
            "Fast, accurate, professionally certified translations. The team was incredibly easy to work with and delivered ahead of schedule every time.",
        rating: 5,
    },
];

const Stars = () => (
    <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(i => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A85C">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
);

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);
    const t = TESTIMONIALS[active];

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden"
            style={{ background: "#060D1B" }}>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-[600px] h-[600px] rounded-full opacity-5"
                    style={{ background: "radial-gradient(circle, #C9A85C 0%, transparent 70%)", top: "20%", left: "-10%" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-5 reveal" data-reveal>
                    <div className="h-px w-12 bg-amber-400" />
                    <p className="section-label">Client Stories</p>
                </div>
                <h2 className="display-lg text-white mb-20 reveal" data-reveal
                    style={{ fontFamily: "'Cormorant Garamond',serif" }}>
                    What Our <span className="text-gold">Clients Say</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Featured quote */}
                    <div className="lg:col-span-3 reveal" data-reveal>
                        <div className="testimonial-modern active relative" style={{ minHeight: "280px" }}>
                            <span className="quote-mark">&ldquo;</span>
                            <div className="relative z-10">
                                <Stars />
                                <blockquote className="font-serif text-2xl lg:text-3xl text-white leading-snug mt-6 mb-8 italic">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl"
                                        style={{ background: "rgba(201,168,92,0.1)", border: "1px solid rgba(201,168,92,0.3)" }}>
                                        {t.flag}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white text-base">{t.name}</p>
                                        <p className="text-amber-400/70 text-xs tracking-widest uppercase mt-0.5">
                                            {t.role} · {t.country}
                                        </p>
                                        <p className="text-white/30 text-xs mt-0.5">{t.years}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dot nav */}
                        <div className="flex gap-3 mt-6">
                            {TESTIMONIALS.map((_, i) => (
                                <button key={i} id={`tdot-${i}`}
                                    onClick={() => setActive(i)}
                                    className="rounded-full transition-all duration-300 border-none cursor-pointer"
                                    style={{
                                        width: active === i ? "32px" : "8px",
                                        height: "8px",
                                        background: active === i ? "#C9A85C" : "rgba(255,255,255,0.2)",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Client list */}
                    <div className="lg:col-span-2 flex flex-col gap-3 reveal from-right" data-reveal>
                        {TESTIMONIALS.map((t2, i) => (
                            <button key={t2.id} id={`tclient-${i}`}
                                onClick={() => setActive(i)}
                                className={`testimonial-modern text-left cursor-pointer border-none w-full transition-all ${active === i ? "active" : ""}`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                        {t2.flag}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`font-semibold text-sm ${active === i ? "text-amber-300" : "text-white"}`}>{t2.name}</p>
                                        <p className="text-white/40 text-xs tracking-wide mt-0.5 truncate">{t2.role} · {t2.country}</p>
                                    </div>
                                    {active === i && (
                                        <div className="w-1.5 h-8 rounded-full flex-shrink-0"
                                            style={{ background: "linear-gradient(to bottom, #E8C97A, #A07840)" }} />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
