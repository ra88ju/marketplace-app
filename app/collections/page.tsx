import React from 'react';
import Link from 'next/link';

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-[32px] font-bold mb-4 font-fahkwang">Explore Curated Collections</h1>
      <p className="text-gray-600 mb-12 font-heebo">
        Explore custom curated collections by our community to find and support businesses that more personally resonate with you.
      </p>
      
      {/* Featured Collections - Top Two */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Black-Owned Businesses Collection */}
        <div className="border-2 border-[#FF1493] rounded-[20px] p-8">
          <h2 className="text-[28px] font-bold text-[#FF1493] mb-3 font-fahkwang">Black-Owned Businesses</h2>
          <p className="text-gray-600 mb-6 font-heebo">
            Supporting and celebrating exceptional Black entrepreneurs in our community.
          </p>
          <Link 
            href="/collections/black-owned-businesses"
            className="inline-block bg-[#FF1493] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors font-heebo"
          >
            Explore Collection
          </Link>
        </div>

        {/* Women-Led Startups Collection */}
        <div className="border-2 border-[#00A3A3] rounded-[20px] p-8">
          <h2 className="text-[28px] font-bold text-[#00A3A3] mb-3 font-fahkwang">Women-Led Startups</h2>
          <p className="text-gray-600 mb-6 font-heebo">
            Discover innovative businesses founded and led by inspiring women.
          </p>
          <Link 
            href="/collections/women-led-startups"
            className="inline-block bg-[#00A3A3] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors font-heebo"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      {/* Regular Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sustainable Brands Collection */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-[22px] font-bold text-[#0095FF] font-fahkwang">Sustainable Brands</h2>
              <svg className="w-5 h-5 text-[#0095FF]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
              </svg>
            </div>
            <p className="text-[#6B7280] font-heebo text-[15px] mb-4">
              Eco-friendly businesses making a positive impact
            </p>
            <Link 
              href="/collections/sustainable-brands"
              className="flex items-center text-[#0C090A] hover:text-[#0095FF] transition-colors font-heebo text-[15px]"
            >
              View Collection
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Tech Innovators Collection */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-[22px] font-bold text-[#0095FF] font-fahkwang">Tech Innovators</h2>
              <svg className="w-5 h-5 text-[#0095FF]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3 0-5.44-2.44-5.44-5.44 0-1.81.89-3.41 2.26-4.4-.44-.06-.9-.1-1.36-.1zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
              </svg>
            </div>
            <p className="text-[#6B7280] font-heebo text-[15px] mb-4">
              Leading-edge technology companies and startups
            </p>
            <Link 
              href="/collections/tech-innovators"
              className="flex items-center text-[#0C090A] hover:text-[#0095FF] transition-colors font-heebo text-[15px]"
            >
              View Collection
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Artisan Crafts Collection */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-[22px] font-bold text-[#0095FF] font-fahkwang">Artisan Crafts</h2>
              <svg className="w-5 h-5 text-[#0095FF]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/>
              </svg>
            </div>
            <p className="text-[#6B7280] font-heebo text-[15px] mb-4">
              Handmade products and traditional craftsmanship
            </p>
            <Link 
              href="/collections/artisan-crafts"
              className="flex items-center text-[#0C090A] hover:text-[#0095FF] transition-colors font-heebo text-[15px]"
            >
              View Collection
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Food & Beverage Collection */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-[22px] font-bold text-[#0095FF] font-fahkwang">Food & Beverage</h2>
              <svg className="w-5 h-5 text-[#0095FF]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
              </svg>
            </div>
            <p className="text-[#6B7280] font-heebo text-[15px] mb-4">
              Local restaurants, cafes, and food producers
            </p>
            <Link 
              href="/collections/food-and-beverage"
              className="flex items-center text-[#0C090A] hover:text-[#0095FF] transition-colors font-heebo text-[15px]"
            >
              View Collection
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 