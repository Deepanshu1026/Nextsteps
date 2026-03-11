"use client";
import { ArrowRight, Map, Crown, Building2, Scale, Languages } from "lucide-react";
const SERVICES = [
    {
        id: "thai-visa",
        num: "01",
        icon: <Map size={40} className="text-amber-400" strokeWidth={1.5} />,
        title: "Thai Visa",
        subtitle: "Retirement · Student · Dependent · Work",
        desc: "Comprehensive assistance for all Thai visa categories. We handle every form, follow-up, and filing on your behalf.",
        tags: ["Tourist", "Non-Imm", "OA"],
    },
    {
        id: "privilege-card",
        num: "02",
        icon: <Crown size={40} className="text-amber-400" strokeWidth={1.5} />,
        title: "Thailand Privilege Card",
        subtitle: "Elite Long-Stay Programme",
        desc: "Exclusive 5–20 year visas with VIP airport privileges, health check-ups, golf rounds, and concierge services.",
        tags: ["5 Year", "20 Year", "Elite"],
    },
    {
        id: "ltr-visa",
        num: "03",
        icon: <Building2 size={40} className="text-amber-400" strokeWidth={1.5} />,
        title: "LTR Visa",
        subtitle: "Long Term Resident · Up to 10 Years",
        desc: "Thailand's game-changing visa for wealthy pensioners, remote workers, and highly-skilled professionals.",
        tags: ["10 Year", "Tax Benefits", "Fast-Track"],
        badge: "New",
    },
    {
        id: "legal-services",
        num: "04",
        icon: <Scale size={40} className="text-amber-400" strokeWidth={1.5} />,
        title: "Legal Services",
        subtitle: "Business & Immigration Law",
        desc: "BOI applications, company registration, work permits, and full immigration legal representation.",
        tags: ["BOI", "Work Permit", "Company"],
    },
    {
        id: "translation",
        num: "05",
        icon: <Languages size={40} className="text-amber-400" strokeWidth={1.5} />,
        title: "Translation",
        subtitle: "Certified & Notarised Documents",
        desc: "Official Thai–English translation for immigration, legal, and business documents. Certified and court-accepted.",
        tags: ["Certified", "Notarised", "Express"],
    },
];

export default function ServicesSection() {
    const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section id="services" className="py-32 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #060D1B 0%, #0C1A30 100%)" }}>

            {/* Subtle grid bg */}
            <div className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: "linear-gradient(rgba(201,168,92,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,92,1) 1px, transparent 1px)",
                    backgroundSize: "80px 80px"
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="reveal" data-reveal>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="h-px w-12 bg-amber-400" />
                            <p className="section-label">Our Expertise</p>
                        </div>
                        <h2 className="display-lg text-white" style={{ fontFamily: "'Cormorant Garamond',serif" }}>
                            What We<br />
                            <span className="text-gold">Do Best</span>
                        </h2>
                    </div>
                    <p className="text-white/50 text-base leading-relaxed max-w-sm reveal from-right" data-reveal>
                        Five specialisations, one mission — to make your life in Thailand as seamless as possible.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SERVICES.map((s, i) => (
                        <div
                            key={s.id}
                            id={`svc-${s.id}`}
                            className={`service-card-modern rounded-2xl p-8 reveal reveal-d${Math.min(i + 1, 5)}`}
                            data-reveal
                            onClick={() => go("#contact")}
                        >
                            {/* Ghost number */}
                            <span className="service-num">{s.num}</span>

                            {/* Badge */}
                            {s.badge && (
                                <span className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                                    style={{ background: "rgba(201,168,92,0.15)", border: "1px solid rgba(201,168,92,0.4)", color: "#E8C97A" }}>
                                    {s.badge}
                                </span>
                            )}

                            {/* Icon */}
                            <div className="mb-6">{s.icon}</div>

                            <h3 className="font-serif text-2xl font-bold text-white mb-1">{s.title}</h3>
                            <p className="text-amber-400/70 text-xs tracking-wider uppercase mb-4 font-medium">{s.subtitle}</p>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {s.tags.map(t => (
                                    <span key={t} className="px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider text-white/40"
                                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* CTA arrow */}
                            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-wider uppercase group">
                                <span>Learn More</span>
                                <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-px"
                                style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,92,0.4), transparent)" }} />
                        </div>
                    ))}

                    {/* Wide CTA Card */}
                    <div className="lg:col-span-2 service-card-modern rounded-2xl p-8 flex flex-col justify-between reveal reveal-d5"
                        data-reveal
                        style={{
                            background: "linear-gradient(135deg, rgba(201,168,92,0.08) 0%, rgba(201,168,92,0.02) 100%)",
                            border: "1px solid rgba(201,168,92,0.25)"
                        }}>
                        <div>
                            <p className="section-label mb-4">Start Today</p>
                            <h3 className="font-serif text-4xl font-bold text-white mb-4">
                                Not Sure Which<br />
                                <span className="text-gold">Visa is Right?</span>
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                                Book a free 30-minute consultation with our experts and we&apos;ll find the perfect pathway for your situation.
                            </p>
                        </div>
                        <button onClick={() => go("#contact")} id="svc-cta" className="btn-gold mt-8 self-start">
                            <span style={{ position: "relative", zIndex: 1 }}>Free Consultation</span>
                            <ArrowRight size={16} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
