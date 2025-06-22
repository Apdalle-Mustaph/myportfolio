import '../globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Head>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  integrity="sha512-1zc++pJAEz8YzmlKvqOnYv7HmgN56UMn7WnC5+iPv3piCr4r3qQh8Y6mkZtxh/1dzp7LQ2ECGRatUgNlTz6ZAw=="
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-yM9c0AyI/4+zLb3u3EtW3KlHp5QeYeL8npLC2iygrjJ6o5NlLsVHgBg3HZRHyobEJxNoZwv2EIlq8d41uZZaug=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />

<link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet"
  />

        </Head>
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
