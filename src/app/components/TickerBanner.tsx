"use client";

const TICKERS = [
    "Thai Visa",
    "LTR Visa",
    "Thailand Privilege Card",
    "Legal Services",
    "Document Translation",
    "Business Visa",
    "Retirement Visa",
    "Marriage Visa",
];

export default function TickerBanner() {
    const items = [...TICKERS, ...TICKERS]; // duplicate for seamless loop

    return (
        <div className="ticker-wrap overflow-hidden" style={{ background: "#C9A85C" }}>
            <div className="ticker-inner">
                {[...items, ...items].map((t, i) => (
                    <span key={i} className="ticker-item">
                        <span className="ticker-dot" />
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}
