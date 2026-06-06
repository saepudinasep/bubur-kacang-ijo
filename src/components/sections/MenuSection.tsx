"use client";

import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";
import { menuItems } from "@/lib/data";
import { formatPrice, WHATSAPP_NUMBER } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
          }`}
        />
      ))}
      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1 font-body">({rating})</span>
    </div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200 dark:via-primary-800 to-transparent" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 text-sm font-semibold font-body mb-4 border border-primary-100 dark:border-primary-900/30">
            🍵 Menu Pilihan
          </span>
          <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Menu{" "}
            <span className="text-gradient">Favorit</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-body max-w-xl mx-auto text-base md:text-lg">
            Pilih bubur kacang ijo favoritmu dari berbagai varian yang kami sediakan, dari yang klasik hingga kreasi modern.
          </p>
        </motion.div>

        {/* Menu Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-900/15 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 card-glow"
            >
              {/* Badge */}
              {item.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold font-body text-white shadow-lg
                    ${item.badge === "Best Seller" ? "bg-gradient-to-r from-orange-500 to-red-500" :
                      item.badge === "New" ? "bg-gradient-to-r from-blue-500 to-purple-500" :
                      item.badge === "Favorit" ? "bg-gradient-to-r from-yellow-500 to-amber-500" :
                      "bg-gradient-to-r from-primary-600 to-primary-700"}`}>
                    {item.badge}
                  </span>
                </div>
              )}

              {/* Card top - colorful gradient with emoji */}
              <div className={`h-40 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-7xl drop-shadow-lg select-none"
                >
                  {item.emoji}
                </motion.div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-1.5 leading-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-body mb-3 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <StarRating rating={item.rating} />

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-display font-bold text-xl text-primary-700 dark:text-primary-400">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <motion.a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20saya%20ingin%20memesan%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-700 to-primary-600 text-white text-sm font-semibold shadow-md shadow-green-900/20 hover:shadow-green-900/30 transition-all font-body"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Pesan
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
