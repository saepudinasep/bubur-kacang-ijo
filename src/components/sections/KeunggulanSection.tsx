"use client";

import { motion } from "framer-motion";
import { Leaf, Clock, ShieldCheck, Wallet } from "lucide-react";

const features = [
  {
    Icon: Leaf,
    title: "Bahan Premium",
    description: "Kacang ijo pilihan terbaik yang diseleksi langsung dari petani lokal untuk memastikan kualitas dan nutrisi optimal.",
    color: "from-green-400 to-emerald-600",
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-100 dark:border-green-900/30",
    iconBg: "bg-gradient-to-br from-green-400 to-emerald-600",
  },
  {
    Icon: Clock,
    title: "Fresh Setiap Hari",
    description: "Dimasak segar setiap hari tanpa sisa kemarin. Kami memastikan setiap porsi selalu hangat dan lezat.",
    color: "from-blue-400 to-cyan-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-100 dark:border-blue-900/30",
    iconBg: "bg-gradient-to-br from-blue-400 to-cyan-600",
  },
  {
    Icon: ShieldCheck,
    title: "Tanpa Pengawet",
    description: "100% alami tanpa bahan pengawet, pewarna buatan, atau MSG berlebih. Aman untuk seluruh anggota keluarga.",
    color: "from-purple-400 to-violet-600",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-100 dark:border-purple-900/30",
    iconBg: "bg-gradient-to-br from-purple-400 to-violet-600",
  },
  {
    Icon: Wallet,
    title: "Harga Terjangkau",
    description: "Nikmati bubur kacang ijo premium berkualitas tinggi dengan harga yang ramah di kantong mulai Rp10.000.",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-100 dark:border-amber-900/30",
    iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function KeunggulanSection() {
  return (
    <section id="keunggulan" className="section-padding bg-white dark:bg-gray-950">
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
            🌿 Kenapa Kami?
          </span>
          <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Kenapa Memilih{" "}
            <span className="text-gradient">Kami?</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-body max-w-xl mx-auto text-base md:text-lg">
            Kami berkomitmen menghadirkan pengalaman kuliner terbaik dengan standar kualitas premium yang konsisten.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative group p-6 md:p-8 rounded-3xl ${feat.bg} border ${feat.border} shadow-sm hover:shadow-xl hover:shadow-green-900/10 transition-all duration-300 cursor-default overflow-hidden`}
            >
              {/* Decorative bg circle */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${feat.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feat.iconBg} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feat.Icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                {feat.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-body leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
