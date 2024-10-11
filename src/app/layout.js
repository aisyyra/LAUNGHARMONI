import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter, usePathname } from "next/navigation";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Mustard = localFont({
  src: [
    {
      path: '../../public/fonts/Mustard/Mustard_Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Mustard/Mustard_Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-Mustard",
})

export const metadata = {
  title: "Laung Harmoni",
  description: "Undangan pernikahan digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body className={Mustard.className}>
       <Header />
        {children}

      </body>
    </html>
  );
}
