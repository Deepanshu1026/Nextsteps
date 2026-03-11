"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const SERVICES_OPT = [
    { value: "thai-visa", label: "Thai Visa" },
    { value: "privilege-card", label: "Thailand Privilege Card" },
    { value: "ltr-visa", label: "LTR Visa" },
    { value: "legal", label: "Legal Services" },
    { value: "translation", label: "Translation" },
    { value: "other", label: "Other / Not sure yet" },
];

const CONTACT_INFO = [
    {
        label: "Phone",
        value: "+66 XX XXX XXXX",
        icon: (
            <Phone size={20} color="#C9A85C" strokeWidth={1.5} />
        ),
    },
    {
        label: "Email",
        value: "info@starvisa.com",
        icon: (
            <Mail size={20} color="#C9A85C" strokeWidth={1.5} />
        ),
    },
    {
        label: "Office",
        value: "Bangkok, Thailand",
        icon: (
            <MapPin size={20} color="#C9A85C" strokeWidth={1.5} />
        ),
    },
];

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [done, setDone] = useState(false);

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setDone(true);
        setTimeout(() => { setDone(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }, 5000);
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden"
            style={{ background: "#080F1E" }}>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
                    style={{ background: "radial-gradient(circle, #C9A85C 0%, transparent 70%)", bottom: "-10%", right: "-5%" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-5 reveal" data-reveal>
                    <div className="h-px w-12 bg-amber-400" />
                    <p className="section-label">Get in Touch</p>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
                    <h2 className="display-lg text-white reveal" data-reveal
                        style={{ fontFamily: "'Cormorant Garamond',serif" }}>
                        Let&apos;s Start Your<br />
                        <span className="text-gold">Thailand Journey</span>
                    </h2>
                    <p className="text-white/45 text-base max-w-xs leading-relaxed reveal from-right" data-reveal>
                        Our team responds to every enquiry within 24 hours, 6 days a week.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left info */}
                    <div className="lg:col-span-2 reveal" data-reveal>
                        <div className="space-y-8 mb-12">
                            {CONTACT_INFO.map(c => (
                                <div key={c.label} className="flex items-start gap-5">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: "rgba(201,168,92,0.08)", border: "1px solid rgba(201,168,92,0.2)" }}>
                                        {c.icon}
                                    </div>
                                    <div>
                                        <p className="text-white/35 text-[10px] tracking-widest uppercase font-semibold mb-1">{c.label}</p>
                                        <p className="text-white font-medium text-sm">{c.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Accreditation markers */}
                        <div className="py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                            <p className="text-white/30 text-[10px] tracking-widest uppercase font-semibold mb-5">Accredited With</p>
                            <div className="flex flex-wrap gap-3">
                                {["Thai Elite", "ITIS", "BOI", "Tourism Authority"].map(b => (
                                    <span key={b} className="px-3 py-1.5 text-[10px] font-bold tracking-wider text-amber-400/70 rounded"
                                        style={{ background: "rgba(201,168,92,0.07)", border: "1px solid rgba(201,168,92,0.2)" }}>
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3 reveal from-right" data-reveal>
                        {done ? (
                            <div className="flex flex-col items-center justify-center py-24 text-center">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-4xl animate-pulse-gold"
                                    style={{ background: "rgba(201,168,92,0.1)", border: "2px solid rgba(201,168,92,0.4)" }}>
                                    ✓
                                </div>
                                <h3 className="font-serif text-3xl font-bold text-white mb-2">Message Sent</h3>
                                <p className="text-white/50 text-base">We&apos;ll be in touch within 24 hours.</p>
                            </div>
                        ) : (
                            <form id="contact-form" onSubmit={submit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                                    {/* Name */}
                                    <div className="form-field-modern">
                                        <input id="f-name" name="name" type="text" required
                                            className="form-input-modern" placeholder="x"
                                            value={form.name} onChange={change} />
                                        <label className="form-label-modern" htmlFor="f-name">Full Name</label>
                                        <div className="form-line" />
                                    </div>

                                    {/* Email */}
                                    <div className="form-field-modern">
                                        <input id="f-email" name="email" type="email" required
                                            className="form-input-modern" placeholder="x"
                                            value={form.email} onChange={change} />
                                        <label className="form-label-modern" htmlFor="f-email">Email Address</label>
                                        <div className="form-line" />
                                    </div>

                                    {/* Phone */}
                                    <div className="form-field-modern">
                                        <input id="f-phone" name="phone" type="tel"
                                            className="form-input-modern" placeholder="x"
                                            value={form.phone} onChange={change} />
                                        <label className="form-label-modern" htmlFor="f-phone">Phone Number</label>
                                        <div className="form-line" />
                                    </div>

                                    {/* Service select — full-width styled */}
                                    <div className="form-field-modern">
                                        <select id="f-service" name="service" required
                                            value={form.service} onChange={change}
                                            className="form-input-modern w-full"
                                            style={{ WebkitAppearance: "none", color: form.service ? "#fff" : "transparent" }}>
                                            <option value="" disabled />
                                            {SERVICES_OPT.map(o => (
                                                <option key={o.value} value={o.value} style={{ background: "#080F1E", color: "#fff" }}>
                                                    {o.label}
                                                </option>
                                            ))}
                                        </select>
                                        <label className="form-label-modern" htmlFor="f-service"
                                            style={{ top: form.service ? "-4px" : "16px", fontSize: form.service ? "10px" : "13px", color: form.service ? "#C9A85C" : undefined }}>
                                            Service Required
                                        </label>
                                        <div className="form-line" />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="form-field-modern mt-4">
                                    <textarea id="f-message" name="message" required rows={5}
                                        className="form-input-modern w-full" placeholder="x"
                                        value={form.message} onChange={change}
                                        style={{ resize: "none" }} />
                                    <label className="form-label-modern" htmlFor="f-message">Your Message</label>
                                    <div className="form-line" />
                                </div>

                                <div className="flex items-center justify-between mt-10 gap-6 flex-wrap">
                                    <p className="text-white/25 text-xs max-w-xs leading-relaxed">
                                        We respect your privacy. Your information is never shared with third parties.
                                    </p>
                                    <button type="submit" id="contact-submit" className="btn-gold">
                                        <span style={{ position: "relative", zIndex: 1 }}>Send Message</span>
                                        <Send size={16} strokeWidth={2} style={{ position: "relative", zIndex: 1 }} />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
