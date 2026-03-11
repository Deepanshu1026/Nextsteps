"use client";
import { ArrowRight, MessageSquare, ClipboardCheck, Send, Target } from "lucide-react";
const STEPS = [
    {
        n: "01",
        title: "Free Consultation",
        desc: "Schedule a complimentary 30-minute session with our visa experts to assess your unique situation and eligibility.",
        icon: <MessageSquare size={32} className="text-amber-400" strokeWidth={1.5} />,
    },
    {
        n: "02",
        title: "Document Review",
        desc: "We create a personalised document checklist and guide you through compiling every requirement — nothing missed.",
        icon: <ClipboardCheck size={32} className="text-amber-400" strokeWidth={1.5} />,
    },
    {
        n: "03",
        title: "Application Filing",
        desc: "Our immigration specialists submit your application and liaise directly with Thai authorities on your behalf.",
        icon: <Send size={32} className="text-amber-400" strokeWidth={1.5} />,
    },
    {
        n: "04",
        title: "Approval & Beyond",
        desc: "We celebrate your approval and provide ongoing support for renewals, extensions, and any future needs.",
        icon: <Target size={32} className="text-amber-400" strokeWidth={1.5} />,
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="py-32 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #060D1B 0%, #0C1A30 100%)" }}>

            {/* diagonal gold line decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-px h-[600px] rotate-[20deg] opacity-10"
                    style={{ background: "linear-gradient(to bottom, transparent, #C9A85C, transparent)", top: "5%", left: "20%" }} />
                <div className="absolute w-px h-[400px] rotate-[20deg] opacity-10"
                    style={{ background: "linear-gradient(to bottom, transparent, #C9A85C, transparent)", top: "20%", right: "15%" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-4 mb-5 reveal" data-reveal>
                        <div className="h-px w-12 bg-amber-400" />
                        <p className="section-label">Simple Process</p>
                        <div className="h-px w-12 bg-amber-400" />
                    </div>
                    <h2 className="display-lg text-white reveal" data-reveal
                        style={{ fontFamily: "'Cormorant Garamond',serif" }}>
                        How It <span className="text-gold">Works</span>
                    </h2>
                    <p className="text-white/45 text-base leading-relaxed mt-5 max-w-lg mx-auto reveal" data-reveal>
                        Our proven four-step process removes every obstacle between you and your visa approval.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {STEPS.map((s, i) => (
                        <div key={s.n} id={`step-${i}`}
                            className={`process-step-modern reveal reveal-d${Math.min(i + 1, 4)}`}
                            data-reveal>
                            <div className="step-circle">
                                {s.n}
                                {/* connector */}
                                {i < STEPS.length - 1 && (
                                    <div className="process-line hidden lg:block" />
                                )}
                            </div>
                            <span className="mb-6 block">{s.icon}</span>
                            <h3 className="font-serif text-xl font-bold text-white mb-3">{s.title}</h3>
                            <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* LTR Banner */}
                <div className="rounded-2xl overflow-hidden relative reveal" data-reveal
                    style={{ background: "linear-gradient(135deg, #0C1A30 0%, #112240 100%)", border: "1px solid rgba(201,168,92,0.25)" }}>

                    {/* Gold pattern */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(circle at 80% 50%, #C9A85C 0%, transparent 60%)",
                        }}
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-14">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-bold tracking-widest"
                                style={{ background: "rgba(201,168,92,0.15)", border: "1px solid rgba(201,168,92,0.3)", color: "#E8C97A" }}>
                                🆕 NEWLY LAUNCHED
                            </div>
                            <h3 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-3">
                                LTR Visa —<br />
                                <span className="text-gold">Long Term Resident</span>
                            </h3>
                            <p className="text-white/55 text-base leading-relaxed">
                                Live in Thailand for up to 10 years with tax incentives, fast-track immigration lanes,
                                and a premium, hassle-free lifestyle. The future of Thai residency is here.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full lg:w-auto">
                            <button id="ltr-cta" className="btn-gold w-full lg:w-auto justify-center"
                                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                                <span style={{ position: "relative", zIndex: 1 }}>Apply for LTR Visa</span>
                                <ArrowRight size={16} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
