import {
  Zen_Maru_Gothic,
  Noto_Sans_JP,
  Klee_One,
  BIZ_UDMincho,
  Shippori_Mincho,
  M_PLUS_1,
  Sawarabi_Gothic,
  Zen_Old_Mincho,
} from 'next/font/google';

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
});

const kleeOne = Klee_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
});

const bizUdMincho = BIZ_UDMincho({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
});

const shipporiMincho = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
});

const mPlusOne = M_PLUS_1({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
});

const sawarabiGothic = Sawarabi_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
});

const zenOldMincho = Zen_Old_Mincho({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
});

export const modalFonts = [
  { name: 'Zen Maru Gothic', font: zenMaruGothic },
  { name: 'Noto Sans JP', font: notoSansJP },
  { name: 'Klee One', font: kleeOne },
  { name: 'BIZ UDMincho', font: bizUdMincho },
  { name: 'Shippori Mincho', font: shipporiMincho },
  { name: 'M PLUS 1', font: mPlusOne },
  { name: 'Sawarabi Gothic', font: sawarabiGothic },
  { name: 'Zen Old Mincho', font: zenOldMincho },
];
