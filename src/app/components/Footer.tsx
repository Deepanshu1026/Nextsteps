"use client";

const LINKS = {
    Services: ["Thai Visa", "LTR Visa", "Privilege Card", "Legal Services", "Translation"],
    Company: ["About Us", "Our Story", "Testimonials", "Careers"],
    Support: ["FAQ", "Contact Us", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
    const go = (id: string) =>
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <footer className="footer-modern">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16"
                    style={{ borderBottom: "1px solid rgba(201,168,92,0.12)" }}>

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <button onClick={() => go("#home")}
                            className="flex items-center gap-3 mb-6 bg-transparent border-none cursor-pointer">
                            <span className="w-10 h-10 rounded-sm bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                        stroke="#060D1B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <div>
                                <p className="font-serif text-xl font-bold leading-none">
                                    <span className="text-gold">Star</span>
                                    <span className="text-white">Visa</span>
                                </p>
                                <p className="text-[9px] tracking-[0.3em] text-amber-400/60 uppercase font-medium">Service</p>
                            </div>
                        </button>
                        <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xs">
                            Thailand&apos;s most trusted visa consultancy since 1995. Expert help at every step of your journey.
                        </p>
                        {/* Social */}
                        <div className="flex gap-3">
                            {["FB", "IG", "TW", "LN"].map(s => (
                                <button key={s}
                                    className="w-9 h-9 rounded-lg text-[10px] font-bold text-white/30
                    hover:text-amber-400 transition-colors bg-transparent cursor-pointer"
                                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(LINKS).map(([heading, items]) => (
                        <div key={heading}>
                            <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-6">{heading}</p>
                            <ul className="space-y-3.5">
                                {items.map(item => (
                                    <li key={item}>
                                        <button onClick={() => go("#contact")}
                                            className="text-white/35 hover:text-amber-300 text-sm transition-colors
                        bg-transparent border-none cursor-pointer p-0 text-left">
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
                    <p className="text-white/20 text-xs">
                        © 2024 StarVisa Service Co., Ltd. — All rights reserved.
                    </p>
                    <div className="flex items-center gap-1">
                        {["Privacy", "Terms", "Sitemap"].map((l, i) => (
                            <span key={l} className="flex items-center gap-1">
                                {i > 0 && <span className="text-white/10 text-xs mx-1">·</span>}
                                <button className="text-white/20 hover:text-amber-400/70 text-xs transition-colors bg-transparent border-none cursor-pointer">
                                    {l}
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Back to top */}
            <button id="back-to-top"
                onClick={() => go("#home")}
                className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center
          rounded-full shadow-2xl cursor-pointer border-none z-50 transition-all hover:scale-110"
                style={{ background: "linear-gradient(135deg, #C9A85C, #A07840)", boxShadow: "0 8px 30px rgba(201,168,92,0.4)" }}
                aria-label="Back to top">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 19V5M5 12l7-7 7 7" stroke="#060D1B" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            </button>
        </footer>
    );
}
