'use client';
import "./globals.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAgentDashboard = pathname.startsWith('/agent/dashboard');

  return (
    <html lang="en">
      <body className={poppins.className}>
        {!isAgentDashboard && <Header />}
        <Provider store={store}>
          {children}
        </Provider>
        {!isAgentDashboard && <Footer />}
      </body>
    </html>
  );
}
