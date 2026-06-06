export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  emoji: string;
  badge?: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix: string;
}
