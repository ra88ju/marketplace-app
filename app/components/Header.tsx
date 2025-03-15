import Link from 'next/link';
import Head from 'next/head';

export default function Header() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="fixed top-0 left-0 right-0 border-b border-gray-100 bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.25)] z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[72px]">
            <div className="flex items-center space-x-6">
              {/* Logo */}
              <Link href="/" className="flex items-center mr-8">
                <span className="text-[28px] font-bold tracking-tight text-[#0C090A] font-heebo">MKT</span>
                <span className="text-base ml-2 text-[#0C090A] font-heebo">by Rita</span>
              </Link>

              {/* Navigation */}
              <nav className="flex items-center space-x-6">
                <Link href="/discover" className="text-[17px] text-[#0C090A] hover:text-gray-600 font-heebo">
                  Discover
                </Link>
                <Link href="/collections" className="text-[17px] text-[#0C090A] hover:text-gray-600 font-heebo">
                  Collections
                </Link>
                <Link href="/events" className="text-[17px] text-[#0C090A] hover:text-gray-600 font-heebo">
                  Events
                </Link>
              </nav>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Link href="/login" className="text-[17px] text-[#0C090A] hover:text-gray-600 font-heebo">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#0095FF] text-white px-4 py-2 rounded-full hover:bg-[#0084e3] transition-colors text-[17px] font-heebo"
              >
                Biz/Org Registration
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}