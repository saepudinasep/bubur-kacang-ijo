"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, MapPin, ArrowUp } from "lucide-react";
import { WHATSAPP_URL, GMAPS_URL } from "@/lib/utils";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Google Maps */}
      <motion.a
        href={GMAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-primary-700 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all"
        aria-label="Open Google Maps"
      >
        <MapPin className="w-5 h-5" />
        {/* Bounce pulse */}
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-500 animate-ping-slow" />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center gap-2 pl-3 pr-4 h-[52px] rounded-2xl bg-[#25D366] shadow-xl shadow-green-500/30 text-white font-semibold text-sm font-body transition-all hover:shadow-green-500/50"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="hidden sm:block">Pesan</span>
        {/* Ping indicator */}
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500">
          <span className="absolute inset-0 rounded-full bg-red-400 animate-ping" />
        </span>
      </motion.a>
    </div>
  );
}
