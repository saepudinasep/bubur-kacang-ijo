"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] bg-cta-gradient overflow-hidden p-10 md:p-16 lg:p-20 text-center shadow-2xl shadow-green-900/30"
        >
          {/* Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Glowing orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-300/20 rounded-full blur-3xl pointer-events-none" />

          {/* Floating emojis */}
          <div className="absolute top-6 left-8 text-3xl opacity-60 select-none pointer-events-none hidden md:block" style={{ animation: "float 5s ease-in-out infinite" }}>🌿</div>
          <div className="absolute top-8 right-10 text-2xl opacity-60 select-none pointer-events-none hidden md:block" style={{ animation: "float 7s ease-in-out infinite 1s" }}>⭐</div>
          <div className="absolute bottom-8 left-12 text-2xl opacity-60 select-none pointer-events-none hidden md:block" style={{ animation: "float 6s ease-in-out infinite 2s" }}>✨</div>
          <div className="absolute bottom-6 right-8 text-3xl opacity-60 select-none pointer-events-none hidden md:block" style={{ animation: "float 8s ease-in-out infinite 0.5s" }}>🥥</div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold font-body backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-accent-300" />
              Pesan Sekarang & Dapatkan Yang Terbaik
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight max-w-2xl"
            >
              Siap Menikmati Bubur Kacang Ijo Terbaik Hari Ini?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-green-100/80 font-body text-base md:text-lg max-w-xl"
            >
              Pesan sekarang dan nikmati kelezatan bubur kacang ijo hangat favorit keluarga. Diantar langsung ke tangan Anda!
            </motion.p>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.06, boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-primary-800 font-bold text-base md:text-lg shadow-xl font-body transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              Pesan Sekarang via WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
