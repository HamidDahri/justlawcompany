import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Just Law Company",
  description: "Trust is just a beginning",
};

const menuItems = [
  {
    label: "Home",
    href: "/home",
  },
  { label: "Lawyers", href: "/lawyers" },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Careers",
    href: "/careers",
  },

  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        href="images/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="images/favicon/favicon.svg" />
      <link rel="shortcut icon" href="images/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="images/favicon/apple-touch-icon.png"
      />
      <link rel="manifest" href="images/favicon/site.webmanifest" />
      <body className={`${workSans.variable} antialiased`}>
        <Header menuItems={menuItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
