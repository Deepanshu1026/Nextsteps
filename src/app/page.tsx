"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TickerBanner from "./components/TickerBanner";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  /* ── Scroll Reveal ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ── Custom cursor — faster ring ── */
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let rx = 0, ry = 0;
    let mx = 0, my = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const raf = () => {
      rx += (mx - rx) * 0.28;   // was 0.15 — now snappier
      ry += (my - ry) * 0.28;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ── Mouse-parallax on hero floating layers ── */
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const onMove = (e: MouseEvent) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2; // -1 → 1
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      // background layer — subtle shift
      const bg = hero.querySelector<HTMLElement>(".parallax-bg");
      if (bg) {
        bg.style.transform = `translateY(${window.scrollY * 0.45}px) translate(${cx * 14}px, ${cy * 8}px)`;
      }
      // floating badge — counter-movement for depth
      const badge = hero.querySelector<HTMLElement>(".floating-badge");
      if (badge) {
        badge.style.transform = `translate(${cx * -18}px, ${cy * -12}px)`;
      }
      // gold orb — drifts with mouse
      const orb1 = hero.querySelector<HTMLElement>(".hero-orb-1");
      if (orb1) {
        orb1.style.transform = `translate(${cx * 28}px, ${cy * 20}px)`;
      }
      // blue orb — counter-drifts for extra depth
      const orb2 = hero.querySelector<HTMLElement>(".hero-orb-2");
      if (orb2) {
        orb2.style.transform = `translate(${cx * -20}px, ${cy * -16}px)`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ── Text shuffle on hero headline ── */
  useEffect(() => {
    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const scramble = (el: HTMLElement) => {
      const original = el.dataset.text || el.innerText;
      el.dataset.text = original;
      let iter = 0;
      const total = original.length * 3;
      const id = setInterval(() => {
        el.innerText = original
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < iter / 3) return original[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        iter++;
        if (iter > total) clearInterval(id);
      }, 28);
    };
    // Run on every element with [data-shuffle]
    const run = () =>
      document.querySelectorAll<HTMLElement>("[data-shuffle]").forEach(el => scramble(el));
    // Small delay so the page has rendered
    const t = setTimeout(run, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Custom cursor elements */}
      <div id="cursor-dot" className="cursor-dot  hidden lg:block" />
      <div id="cursor-ring" className="cursor-ring hidden lg:block" />

      <main>
        <Navbar />
        <HeroSection />
        <TickerBanner />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
