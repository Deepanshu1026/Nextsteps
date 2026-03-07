"use client";
import Image from "next/image";

const timeline = [
    {
        era: "1995 – 2001",
        title: "Foundation",
        desc: "We began as a Commercial registration business under the name of Star Visa Service Co., Ltd.",
    },
    {
        era: "2001 – Present",
        title: "Expansion",
        desc: "We registered a partnership limited under the name of Star Visa Service Par., Ltd. and expanded our service portfolio.",
    },
    {
        era: "2018 – Present",
        title: "Pioneer",
        desc: "Registered under the name Star Visa Service Co., Ltd. and became Thailand's pioneer visa consultancy.",
    },
];

export default function PioneerSection() {
    return (
        <section className="py-24 section-bg-gradient relative overflow-hidden">
            <div className="glow-orb w-[400px] h-[400px] bg-purple-600/15 top-0 right-0 absolute" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div className="reveal order-2 lg:order-1" data-reveal>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/team_consultants.png"
                                alt="Star Visa Service team of consultants"
                                width={600}
                                height={450}
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1E]/70 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        Our staff is experienced, knowledgeable, and committed to provide the clients
                                        with attentive and professional services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="reveal order-1 lg:order-2" data-reveal>
                        <p className="text-purple-400 font-semibold tracking-widest uppercase text-sm mb-4">
                            Our Story
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
                            We are{" "}
                            <span className="block gradient-text">Pioneer of</span>
                            Visa Consultant
                        </h2>
                        <div className="w-14 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mt-4 mb-6" />
                        <p className="text-white/65 text-base leading-relaxed mb-10">
                            Your trusted partner in navigating the complexities of international travel. Over
                            the years, our Visa Consultant advisors have solved and transformed to meet the
                            new-emerging demands of global travel, particularly in Thailand.
                        </p>

                        {/* Timeline */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {timeline.map((t, i) => (
                                <div
                                    key={t.era}
                                    id={`timeline-${i}`}
                                    className="timeline-item"
                                >
                                    <div className="text-orange-400 font-bold text-sm mb-2">{t.era}</div>
                                    <h4 className="text-white font-bold text-base mb-2">{t.title}</h4>
                                    <p className="text-white/55 text-xs leading-relaxed">{t.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
