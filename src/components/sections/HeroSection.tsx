"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ChevronDown, Sparkles, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const floatingElements = [
  { emoji: "🌿", top: "15%", left: "8%", delay: 0, size: "text-3xl" },
  { emoji: "⭐", top: "25%", right: "10%", delay: 1, size: "text-2xl" },
  { emoji: "🥥", bottom: "30%", left: "6%", delay: 2, size: "text-3xl" },
  { emoji: "✨", top: "60%", right: "8%", delay: 0.5, size: "text-xl" },
  { emoji: "🌾", bottom: "20%", right: "12%", delay: 1.5, size: "text-2xl" },
];

export default function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary-300/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-700/10 blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating emoji decorations */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: el.delay + 0.5, duration: 0.6 }}
          className={`absolute ${el.size} opacity-60 select-none pointer-events-none hidden md:block`}
          style={{
            top: el.top,
            left: el.left,
            right: (el as Record<string, string>).right,
            bottom: el.bottom,
            animation: `float ${6 + i}s ease-in-out infinite ${el.delay}s`,
          }}
        >
          {el.emoji}
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen lg:min-h-0 lg:py-28">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full glass border border-white/30 text-sm font-body font-medium"
            >
              <Sparkles className="w-4 h-4 text-accent-300" />
              <span>Premium Quality Since 2019</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent-300 text-accent-300" />
                ))}
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
            >
              Bubur Kacang Ijo{" "}
              <span className="relative">
                <span className="text-accent-300">Hangat,</span>
              </span>{" "}
              Lezat, dan{" "}
              <span className="text-secondary-300">Bergizi</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-green-100/80 font-body leading-relaxed max-w-lg"
            >
              Dibuat dari kacang ijo pilihan dengan resep tradisional yang autentik dan cita rasa khas Indonesia. Dimasak segar setiap hari untuk kesehatan keluarga Anda.
            </motion.p>

            {/* Stats mini row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 flex-wrap"
            >
              {[
                { val: "5.000+", label: "Porsi Terjual" },
                { val: "4.9★", label: "Rating" },
                { val: "6+ Tahun", label: "Pengalaman" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display font-bold text-xl text-accent-300">{s.val}</span>
                  <span className="text-xs text-green-200/70 font-body">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] text-white font-semibold shadow-xl font-body text-base transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                Pesan via WhatsApp
              </motion.a>
              <motion.button
                onClick={scrollToMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl glass border border-white/30 text-white font-semibold font-body text-base transition-all hover:bg-white/20"
              >
                Lihat Menu
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Glowing blob behind bowl */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 hero-blob bg-gradient-to-br from-secondary-300/40 to-accent-300/30 blur-2xl" />

            {/* Bowl emoji centerpiece */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 text-[10rem] md:text-[13rem] drop-shadow-2xl select-none"
            >
              🍵
            </motion.div>

            {/* Orbiting decorations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-white/10"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">🌿</div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-2xl">🌾</div>
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 text-2xl">✨</div>
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 text-2xl">⭐</div>
            </motion.div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 md:right-0 glass-card rounded-2xl px-4 py-3 shadow-xl border border-white/30 dark:border-gray-700/30 backdrop-blur-md"
              style={{ animation: "float 5s ease-in-out infinite 1s" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div>
                  <div className="font-display font-bold text-primary-800 dark:text-primary-300 text-sm">4.9/5.0</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-body">Rating</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -left-4 md:left-0 glass-card rounded-2xl px-4 py-3 shadow-xl border border-white/30 dark:border-gray-700/30 backdrop-blur-md"
              style={{ animation: "float 6s ease-in-out infinite 2s" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <div>
                  <div className="font-display font-bold text-primary-800 dark:text-primary-300 text-sm">100% Alami</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-body">Tanpa Pengawet</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById("keunggulan")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { duration: 1.5, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block dark:hidden">
          <path d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full hidden dark:block">
          <path d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#030712"/>
        </svg>
      </div>
    </section>
  );
}
