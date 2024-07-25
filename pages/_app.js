import './styles.css';
import "7.css/dist/7.css";
import "@code-hike/mdx/dist/index.css"
import { Inter } from 'next/font/google';

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}