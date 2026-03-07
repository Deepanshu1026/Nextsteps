"use client";
import { useState, useEffect } from "react";

const NAV = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (href: string) => {
        setOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* ── NAV BAR ── */}
            <nav id="navbar" className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

                    {/* Logo */}
                    <button onClick={() => go("#home")} className="flex items-center gap-3 text-left bg-transparent border-none cursor-pointer">
                        <span className="w-9 h-9 rounded-sm bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                    stroke="#060D1B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <div>
                            <p className="font-serif text-lg font-bold leading-none tracking-wide">
                                <span className="text-gold">Star</span>
                                <span className="text-white">Visa</span>
                            </p>
                            <p className="text-[9px] tracking-[0.3em] text-amber-400/70 uppercase font-medium">Service</p>
                        </div>
                    </button>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV.map(l => (
                            <button key={l.label} onClick={() => go(l.href)}
                                className="nav-link" style={{ fontFamily: "'Inter',sans-serif" }}>
                                {l.label}
                            </button>
                        ))}
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-5">
                        <button onClick={() => go("#contact")}
                            id="nav-cta"
                            className="btn-gold hidden sm:inline-flex text-[11px] py-3 px-7"
                            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>
                            <span style={{ position: "relative", zIndex: 1 }}>Get Started</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ position: "relative", zIndex: 1 }}>
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Hamburger */}
                        <button id="hamburger" onClick={() => setOpen(!open)}
                            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 bg-transparent border-none cursor-pointer"
                            aria-label="Menu">
                            {[0, 1, 2].map(i => (
                                <span key={i} className="block h-px bg-white transition-all duration-300"
                                    style={{
                                        width: i === 1 ? "70%" : "100%",
                                        opacity: open && i === 1 ? 0 : 1,
                                        transform: open
                                            ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                                                : i === 2 ? "rotate(-45deg) translate(4px, -4px)" : ""
                                            : ""
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── OVERLAY ── */}
            <div className={`menu-overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)} />

            {/* ── DRAWER ── */}
            <div className={`mobile-drawer hide-scroll ${open ? "open" : ""}`}>
                <button onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 text-white/40 hover:text-white bg-transparent border-none cursor-pointer transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                </button>

                <div className="mb-10">
                    <p className="font-serif text-2xl font-bold">
                        <span className="text-gold">Star</span><span>Visa</span>
                    </p>
                    <p className="text-[10px] tracking-[0.3em] text-amber-400/60 uppercase mt-1">Gateway to Thailand</p>
                </div>

                <div className="flex flex-col gap-1">
                    {NAV.map(l => (
                        <button key={l.label} onClick={() => go(l.href)}
                            className="text-left py-4 border-b text-base font-medium text-white/70 hover:text-amber-300 bg-transparent border-white/06 cursor-pointer transition-colors">
                            {l.label}
                        </button>
                    ))}
                </div>
                <button onClick={() => go("#contact")} className="btn-gold w-full mt-8 justify-center">
                    <span style={{ position: "relative", zIndex: 1 }}>Contact Us</span>
                </button>
            </div>
        </>
    );
}
