import './globals.css';
import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'MKT by Rita',
  description: 'A marketplace for diverse small businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-[52px] bg-[#fffaf0]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
