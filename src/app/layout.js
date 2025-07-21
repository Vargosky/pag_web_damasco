import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from 'next/font/google';
import "./globals.css";
import Navbar from "../components/navbar/Navbar";

import { metadata } from "../../src/data/seo.config";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Pastelería Damasco", 
//   keywords: "pastelería, repostería, tortas, pasteles, dulces, Cerro Placeres",
//   description: "Repostería artesanal desde Cerro Placeres. Tortas, pasteles y dulces con sabor a hogar.",
//   authors: [{ name: "Leandro", url: "einsoft.cl" }],
//   creator: "Leandro",
//   publisher: "Leandro",
//   other: {
//     "msvalidate.01": "DC8B98D872378FDCB24B26EF9103DC7B",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} ${playfair.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
