export type AtmosphereMood = 'lavender' | 'gardenia';

export interface ScentProfile {
  id: string;
  name: string;
  subheading: string;
  badge: string;
  themeColor: string;
  accentBg: string;
  image: string;
  description: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  bestFor: string[];
  intensity: number; // 1-5
  mood: AtmosphereMood;
  liquidPrice: number;
  gelPrice: number;
}

export interface HardwareLayer {
  id: number;
  name: string;
  category: string;
  description: string;
  spec: string;
  top: string; // percentage for hotspot positioning
  left: string;
}

export interface CartItem {
  id: string;
  name: string;
  type: 'diffuser' | 'liquid' | 'gel';
  fragrance?: 'lavender' | 'gardenia';
  price: number;
  quantity: number;
}
