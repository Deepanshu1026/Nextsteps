import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StarVisa Service – Gateway to Thailand | Expert Visa Consultancy",
  description:
    "Thailand's most trusted visa consultancy since 1995. Expert assistance with Thai Visa, LTR Visa, Thailand Privilege Card, Legal Services & Translation.",
  keywords: "Thailand visa, Thai visa, LTR visa, Thailand Privilege Card, visa consultancy",
  openGraph: {
    title: "StarVisa Service – Gateway to Thailand",
    description: "Expert visa & legal services for Thailand. Trusted by thousands worldwide.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https:; media-src 'self' https://videos.pexels.com https://www.pexels.com; connect-src 'self';"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ cursor: "none" }}>{children}</body>
    </html>
  );
}
