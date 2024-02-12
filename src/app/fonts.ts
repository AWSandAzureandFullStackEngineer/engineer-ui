// app/fonts.ts
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})
const preloadRubikFont = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = 'https://www.engineershubcentral.net/_next/static/media/c22ccc5eb58b83e1-s.p.woff2';
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

preloadRubikFont();

export const fonts = {
  rubik,
}