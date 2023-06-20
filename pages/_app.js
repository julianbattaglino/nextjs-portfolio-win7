import './styles.css';
import "7.css/dist/7.css";
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    weight: ['300', '400', '500', '600', '700', '800', '900' ],
    style: ['normal'],
    subsets: ['latin'],
  }); 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}