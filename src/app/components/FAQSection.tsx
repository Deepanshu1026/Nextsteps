"use client";
import { useState } from "react";

const FAQS = [
    {
        q: "What types of Thai visas do you assist with?",
        a: "We assist with all major Thai visa categories including Tourist Visa, Non-Immigrant Visa (B, O, ED), Retirement Visa, Marriage Visa, LTR (Long-Term Resident) Visa, and the Thailand Privilege Card (Elite Visa).",
    },
    {
        q: "How long does the visa application process typically take?",
        a: "Timelines vary by visa type. A Tourist Visa can be processed in 3–5 business days, while a Retirement or LTR Visa takes 2–6 weeks. We provide a precise timeline during your initial consultation.",
    },
    {
        q: "Do you assist with visa renewals and extensions?",
        a: "Yes — we provide complete renewal and extension services for all visa types. We proactively track expiry dates and reach out before your status lapses.",
    },
    {
        q: "What is the Thailand Privilege Card (Elite Visa)?",
        a: "The Thailand Privilege Card is a long-stay programme offering 5–20 year visas with exclusive privileges including airport VIP services, health check-ups, and concierge services. We are an authorised distributor.",
    },
    {
        q: "Do you offer certified translation services?",
        a: "Absolutely. Our certified translators handle Thai–English and English–Thai translations for immigration, legal, and business documents. All translations are court-accepted and officially notarised.",
    },
    {
        q: "How do I get started?",
        a: "Simply fill out our contact form below or call us directly. We offer a free 30-minute initial consultation to assess your situation and recommend the best visa pathway.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #060D1B 0%, #080F1E 100%)" }}>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-5 reveal" data-reveal>
                        <div className="h-px w-12 bg-amber-400" />
                        <p className="section-label">FAQ</p>
                        <div className="h-px w-12 bg-amber-400" />
                    </div>
                    <h2 className="display-lg text-white reveal" data-reveal
                        style={{ fontFamily: "'Cormorant Garamond',serif" }}>
                        Common <span className="text-gold">Questions</span>
                    </h2>
                    <p className="text-white/45 text-base mt-5 max-w-xl mx-auto reveal" data-reveal>
                        Everything you need to know before beginning your Thai visa journey.
                    </p>
                </div>

                <div className="reveal" data-reveal>
                    {FAQS.map((faq, i) => (
                        <div key={i} id={`faq-${i}`} className={`faq-modern ${open === i ? "open" : ""}`}>
                            <button className="faq-trigger" onClick={() => setOpen(open === i ? null : i)}>
                                <span>{faq.q}</span>
                                <span className="faq-icon flex-shrink-0">+</span>
                            </button>
                            <div className="faq-body">
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
