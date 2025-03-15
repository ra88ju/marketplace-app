import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_4px_12px_-2px_rgba(0,0,0,0.12)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold">MKT</span>
            <span className="text-sm ml-1">by Rita</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link href="/discover" className="text-gray-600 hover:text-gray-900">
              Discover
            </Link>
            <Link href="/collections" className="text-gray-600 hover:text-gray-900">
              Collections
            </Link>
            <Link href="/events" className="text-gray-600 hover:text-gray-900">
              Events
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#0095FF] text-white px-4 py-2 rounded-lg hover:bg-[#0084e3] transition-colors"
            >
              Biz/Org Registration
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 