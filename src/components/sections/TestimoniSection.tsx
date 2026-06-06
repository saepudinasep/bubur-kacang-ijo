"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimoniSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.95 }),
  };

  return (
    <section id="testimoni" className="section-padding bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200 dark:via-primary-800 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 text-sm font-semibold font-body mb-4 border border-primary-100 dark:border-primary-900/30">
            💬 Testimoni
          </span>
          <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Apa Kata{" "}
            <span className="text-gradient">Pelanggan Kami?</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-body max-w-xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Inilah cerita nyata dari pelanggan setia kami.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Main card */}
          <div className="relative h-64 md:h-56 overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-10 flex flex-col justify-between"
              >
                {/* Quote mark */}
                <div className="text-5xl text-primary-200 dark:text-primary-800 font-serif leading-none absolute top-4 left-8">
                  "
                </div>

                <div className="relative z-10">
                  <StarRow count={testimonials[active].rating} />
                  <p className="text-gray-700 dark:text-gray-200 font-body text-base md:text-lg leading-relaxed mt-3 line-clamp-3">
                    {testimonials[active].text}
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-300 flex items-center justify-center text-white font-bold font-display text-lg shadow-md">
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold text-gray-900 dark:text-white">
                      {testimonials[active].name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-body flex items-center gap-1">
                      📍 {testimonials[active].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-300 hover:border-primary-200 dark:hover:border-primary-700 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? "w-6 h-2.5 bg-primary-600"
                      : "w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary-300"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-300 hover:border-primary-200 dark:hover:border-primary-700 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Background testimonials (desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden xl:grid grid-cols-5 gap-4 mt-12"
        >
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                i === active
                  ? "bg-white dark:bg-gray-800 border-primary-200 dark:border-primary-700 shadow-lg scale-105"
                  : "bg-white/50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md"
              }`}
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-body line-clamp-2 mb-2">{t.text}</p>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 font-body">{t.name}</p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
