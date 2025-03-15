export default function CollectionsPage() {
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Page Title and Description */}
        <div className="mb-12">
          <h1 className="text-4xl font-medium mb-4">Explore Curated Collections</h1>
          <p className="text-gray-600 text-lg">
            Explore custom curated collections by our community to find and support businesses that more personally resonate with you.
          </p>
        </div>
  
        {/* Featured Collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Black-Owned Businesses */}
          <div className="rounded-3xl border-2 border-[#E91E63] p-8">
            <h2 className="text-[#E91E63] text-3xl font-medium mb-4">
              Black-Owned Businesses
            </h2>
            <p className="text-[#E91E63] text-lg mb-6">
              Supporting and celebrating exceptional Black entrepreneurs in our community.
            </p>
            <a
              href="/collections/black-owned"
              className="inline-block bg-[#E91E63] text-white px-6 py-2.5 rounded-full hover:bg-[#D81B60] transition-colors"
            >
              Explore Collection
            </a>
          </div>
  
          {/* Women-Led Startups */}
          <div className="rounded-3xl border-2 border-[#009688] p-8">
            <h2 className="text-[#009688] text-3xl font-medium mb-4">
              Women-Led Startups
            </h2>
            <p className="text-[#009688] text-lg mb-6">
              Discover innovative businesses founded and led by inspiring women.
            </p>
            <a
              href="/collections/women-led"
              className="inline-block bg-[#009688] text-white px-6 py-2.5 rounded-full hover:bg-[#00897B] transition-colors"
            >
              Explore Collection
            </a>
          </div>
        </div>
  
        {/* Other Collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sustainable Brands */}
          <div className="rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Sustainable Brands</h3>
                <p className="text-gray-600 mb-4">Eco-friendly businesses making a positive impact</p>
                <a href="/collections/sustainable" className="text-blue-500 hover:text-blue-600 inline-flex items-center">
                  View Collection
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <span className="text-[#00BFA5] text-2xl">🌱</span>
            </div>
          </div>
  
          {/* Tech Innovators */}
          <div className="rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Tech Innovators</h3>
                <p className="text-gray-600 mb-4">Leading-edge technology companies and startups</p>
                <a href="/collections/tech" className="text-blue-500 hover:text-blue-600 inline-flex items-center">
                  View Collection
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <span className="text-2xl">⚡</span>
            </div>
          </div>
  
          {/* Artisan Crafts */}
          <div className="rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Artisan Crafts</h3>
                <p className="text-gray-600 mb-4">Handmade products and traditional craftsmanship</p>
                <a href="/collections/artisan" className="text-blue-500 hover:text-blue-600 inline-flex items-center">
                  View Collection
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <span className="text-2xl">🎨</span>
            </div>
          </div>
  
          {/* Food & Beverage */}
          <div className="rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Food & Beverage</h3>
                <p className="text-gray-600 mb-4">Local restaurants, cafes, and food producers</p>
                <a href="/collections/food" className="text-blue-500 hover:text-blue-600 inline-flex items-center">
                  View Collection
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <span className="text-2xl">🍽️</span>
            </div>
          </div>
        </div>
      </div>
    );
  }