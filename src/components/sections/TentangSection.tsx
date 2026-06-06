"use client";

import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { stats } from "@/lib/data";
import { CheckCircle } from "lucide-react";

function CounterItem({ stat }: { stat: { value: string; label: string; suffix: string } }) {
  const numericValue = parseFloat(stat.value.replace(",", "."));
  const isDecimal = stat.value.includes(".");
  const { count, ref } = useCounter(isDecimal ? numericValue * 10 : numericValue, 2000);
  const displayValue = isDecimal
    ? (count / 10).toFixed(1)
    : count.toLocaleString("id-ID");

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-4xl md:text-5xl text-white mb-1">
        {displayValue}{stat.suffix}
      </div>
      <div className="text-sm text-green-200/80 font-body">{stat.label}</div>
    </div>
  );
}

const highlights = [
  "Resep tradisional turun-temurun yang autentik",
  "Bahan kacang ijo dipilih langsung dari petani",
  "Dimasak fresh setiap hari tanpa sisa",
  "Santan segar dari kelapa pilihan",
  "Proses higienis dan berstandar keamanan pangan",
];

export default function TentangSection() {
  return (
    <section id="tentang" className="section-padding bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main visual card */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden shadow-2xl shadow-green-900/30 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-[5rem] mb-4">👨‍🍳</div>
                  <p className="font-display text-2xl font-bold mb-2">Dengan Penuh Cinta</p>
                  <p className="font-body text-green-200/80 text-sm">Setiap porsi dimasak dengan resep keluarga yang telah teruji selama bertahun-tahun</p>
                </div>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "30px 30px"
                  }}
                />
              </div>

              {/* Floating card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-6 -right-6 glass-card rounded-2xl px-5 py-4 shadow-xl border border-white/40 dark:border-gray-700/40"
                style={{ animation: "float 5s ease-in-out infinite" }}
              >
                <div className="text-2xl mb-1">🏆</div>
                <div className="font-display font-bold text-gray-900 dark:text-white text-sm">Terpercaya</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-body">Sejak 2019</div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-5 py-4 shadow-xl border border-white/40 dark:border-gray-700/40"
                style={{ animation: "float 6s ease-in-out infinite 1s" }}
              >
                <div className="text-2xl mb-1">❤️</div>
                <div className="font-display font-bold text-gray-900 dark:text-white text-sm">1.500+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-body">Pelanggan Setia</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 text-sm font-semibold font-body border border-primary-100 dark:border-primary-900/30">
              🌿 Tentang Kami
            </span>

            <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Cita Rasa Tradisional{" "}
              <span className="text-gradient">Sejak Generasi</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 font-body leading-relaxed text-base md:text-lg">
              Kami menghadirkan bubur kacang ijo berkualitas dengan bahan pilihan terbaik yang dimasak setiap hari untuk menjaga cita rasa dan kesegaran. Warisan resep tradisional Indonesia yang kami jaga dengan sepenuh hati.
            </p>

            <ul className="flex flex-col gap-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300 font-body text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary-800 to-primary-700 shadow-2xl shadow-green-900/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "30px 30px"
            }}
          />
          {stats.map((stat, i) => (
            <div key={i} className="relative z-10">
              <CounterItem stat={stat} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
