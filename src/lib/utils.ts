import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export const WHATSAPP_NUMBER = "6283898217064";
export const WHATSAPP_MESSAGE = "Halo%20saya%20ingin%20memesan%20Bubur%20Kacang%20Ijo";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
export const GMAPS_URL = "https://maps.app.goo.gl/qAfqg36phTcjkdiq6";
