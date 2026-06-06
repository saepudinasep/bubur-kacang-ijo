import { Leaf, Instagram, Facebook, MessageCircle, Mail, MapPin, Phone, Clock } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Lokasi", href: "#lokasi" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-800 via-secondary-300 to-accent-300" />

      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-900/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-700 to-secondary-400 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">The Burjo</div>
                <div className="text-[10px] text-green-400/70 tracking-wider uppercase">Kang Alik</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-body mb-4">
              Menyajikan bubur kacang ijo premium dengan cita rasa tradisional autentik yang sudah dipercaya ribuan pelanggan.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/buburkacangijo" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-primary-800 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/buburkacangijo" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-primary-800 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-primary-800 flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">Menu Cepat</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-300 transition-colors font-body flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-600 group-hover:bg-primary-300 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <a href="tel:+6283898217064" className="hover:text-primary-300 transition-colors">+62 838-9821-7064</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <a href="mailto:info@buburkacangijo.com" className="hover:text-primary-300 transition-colors break-all">info@buburkacangijo.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span>Jl. Nurul Hidayah No.4, RT.4/RW.3, Kp. Tengah, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13540, Indonesia</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span>Setiap Hari: 06.00 – 14.00 WIB</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">Pesan Sekarang</h4>
            <p className="text-sm text-gray-400 mb-4 font-body">
              Pesan langsung via WhatsApp dan dapatkan bubur kacang ijo hangat favoritmu!
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-700 to-primary-600 text-white text-sm font-semibold hover:from-primary-600 hover:to-primary-500 transition-all shadow-lg shadow-green-900/30 font-body"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Kami
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 font-body">
            © 2026 The Burjo Kang Alik. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 font-body">
            {/* Dibuat dengan ❤️ untuk pelanggan setia kami */}
            Dibuat oleh Asep Saepudin Founder of Warung Coding.
          </p>
        </div>
      </div>
    </footer>
  );
}
