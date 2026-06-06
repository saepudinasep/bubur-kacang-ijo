"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink, MessageCircle, Navigation } from "lucide-react";
import { WHATSAPP_URL, GMAPS_URL } from "@/lib/utils";

export default function LokasiSection() {
  return (
    <section id="lokasi" className="section-padding bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
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
            📍 Lokasi Kami
          </span>
          <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Temukan{" "}
            <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-body max-w-xl mx-auto">
            Kunjungi outlet kami dan nikmati Bubur Kacang Ijo hangat langsung dari dapur kami.
          </p>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 h-[350px] md:h-[450px] bg-gray-200 dark:bg-gray-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126.95!2d106.8672113!3d-6.2833684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f35126a10c0f%3A0x23a7428364447120!2sThe%20Burjo%20(Bubur%20Kacang%20Ijo)%20Kang%20Alik!5e0!3m2!1sid!2sid!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi The Burjo Kang Alik, Jakarta Timur"
            />
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card rounded-3xl p-6 md:p-8 shadow-xl border border-white/40 dark:border-gray-700/40 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-1">
                The Burjo Kang Alik
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-body text-sm font-medium">Outlet Utama Jakarta Timur</p>
            </div>

            {/* Info list */}
            <div className="flex flex-col gap-4">
              {[
                {
                  Icon: MapPin,
                  label: "Alamat",
                  value: "Jl. Nurul Hidayah No.4, RT.4/RW.3, Kp. Tengah, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13540, Indonesia",
                  color: "text-red-500",
                },
                {
                  Icon: Phone,
                  label: "Telepon",
                  value: "+62 838-9821-7064",
                  color: "text-green-500",
                },
                {
                  Icon: Clock,
                  label: "Jam Buka",
                  value: "Setiap Hari: 06.00 – 14.00 WIB",
                  color: "text-blue-500",
                },
                // {
                //   Icon: Car,
                //   label: "Parkir",
                //   value: "Area Parkir Luas Tersedia",
                //   color: "text-amber-500",
                // },
              ].map(({ Icon, label, value, color }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-body uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-gray-700 dark:text-gray-200 font-body text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.a
                href={GMAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-primary-700 to-primary-600 text-white font-semibold text-sm shadow-lg shadow-green-900/20 font-body transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Buka Google Maps
              </motion.a>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-lg font-body transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Hubungi WhatsApp
              </motion.a>
            </div>
            <motion.a
              href="https://www.google.com/maps/dir/?api=1&destination=-6.2833684,106.8672113&destination_place_id=0x2e69f35126a10c0f:0x23a7428364447120"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 font-semibold text-sm font-body transition-all hover:bg-primary-50 dark:hover:bg-primary-950/30"
            >
              <Navigation className="w-4 h-4" />
              Rute ke Lokasi
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
