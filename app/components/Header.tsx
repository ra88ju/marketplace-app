import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-gray-100 bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.25)] z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[28px] font-bold tracking-tight text-black">MKT</span>
            <span className="text-base ml-2 text-black">by Rita</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link href="/discover" className="text-[17px] text-gray-900 hover:text-gray-600">
              Discover
            </Link>
            <Link href="/collections" className="text-[17px] text-gray-900 hover:text-gray-600">
              Collections
            </Link>
            <Link href="/events" className="text-[17px] text-gray-900 hover:text-gray-600">
              Events
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-[17px] text-gray-900 hover:text-gray-600">
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#0095FF] text-white px-8 py-2.5 rounded-full hover:bg-[#0084e3] transition-colors text-[17px]"
            >
              Biz/Org Registration
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 