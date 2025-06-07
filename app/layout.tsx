// import '../globals.css';
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export const metadata = {
//   title: 'Prof. Abdullahi Artan Ahmed',
//   description: 'Portfolio website for professor and consultant',
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main className="max-w-5xl mx-auto px-4">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import '../globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Prof. Abdullahi Artan Ahmed',
  description: 'Portfolio website for professor and consultant',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
