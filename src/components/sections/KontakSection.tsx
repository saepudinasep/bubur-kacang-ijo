"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, Facebook, Phone, Send } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const contactItems = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 857-2148-5664",
    href: WHATSAPP_URL,
    color: "from-green-400 to-emerald-600",
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-100 dark:border-green-900/30",
    btnLabel: "Kirim Pesan",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@buburkacangijo.com",
    href: "mailto:info@buburkacangijo.com",
    color: "from-blue-400 to-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-100 dark:border-blue-900/30",
    btnLabel: "Kirim Email",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    value: "@buburkacangijo",
    href: "https://instagram.com/buburkacangijo",
    color: "from-pink-400 to-purple-600",
    bg: "bg-pink-50 dark:bg-pink-950/30",
    border: "border-pink-100 dark:border-pink-900/30",
    btnLabel: "Follow Kami",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    value: "The Burjo Kang Alik",
    href: "https://facebook.com/buburkacangijo",
    color: "from-blue-500 to-blue-700",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    border: "border-indigo-100 dark:border-indigo-900/30",
    btnLabel: "Kunjungi Halaman",
  },
];

export default function KontakSection() {
  return (
    <section id="kontak" className="section-padding bg-white dark:bg-gray-950 overflow-hidden relative">
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
            📞 Kontak
          </span>
          <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hubungi{" "}
            <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-body max-w-xl mx-auto">
            Ada pertanyaan, saran, atau ingin memesan? Kami siap membantu Anda melalui berbagai saluran komunikasi.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-3xl ${item.bg} border ${item.border} shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/20 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4`}>
                <item.Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-body uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-body text-gray-800 dark:text-gray-200 font-medium text-sm mb-4 line-clamp-1">{item.value}</p>
              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r ${item.color} text-white text-xs font-semibold shadow-md font-body transition-all`}
              >
                <Send className="w-3 h-3" />
                {item.btnLabel}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-[#25D366] to-[#128C7E] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shrink-0">
              💬
            </div>
            <div className="text-white">
              <h3 className="font-display font-bold text-xl md:text-2xl mb-1">Chat Langsung via WhatsApp</h3>
              <p className="font-body text-green-100/80 text-sm md:text-base">
                Respons cepat! Kami siap melayani pesanan & pertanyaan Anda setiap hari pukul 08.00–14.00.
              </p>
            </div>
          </div>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-[#128C7E] font-bold text-base shadow-xl font-body transition-all shrink-0"
          >
            <Phone className="w-5 h-5" />
            Mulai Chat
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
