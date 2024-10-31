import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Sidebar from "@/components/sidebar/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "UltraGym",
  description: "Software para gestionar la asistencia de los usuarios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />
        {children}{" "}
      </body>
    </html>
  );
}
