'use client';

import { useState } from 'react';
import Header from './components/Header';
import BusinessCard from './components/BusinessCard';
import CollectionCard from './components/CollectionCard';
import CategoryDropdown from './components/CategoryDropdown';
import LocationDropdown from './components/LocationDropdown';
import { businesses, categories, locations } from './data/businesses';

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  // Filter businesses based on selected category and location
  const filteredBusinesses = businesses.filter(business => {
    const categoryMatch = selectedCategory === 'All Categories' || business.category === selectedCategory;
    const locationMatch = selectedLocation === 'All Locations' || business.location === selectedLocation;
    return categoryMatch && locationMatch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredBusinesses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedBusinesses = filteredBusinesses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-[#FFFBF7]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <h1 className="text-[40px] font-medium mb-4">
            A Marketplace for Diverse<br />Small Businesses
          </h1>
          <p className="text-gray-600 mb-8">
            Discover and support unique artisans and small business<br />owners in your community
          </p>
          
          {/* Search Filters */}
          <div className="flex justify-center gap-4 max-w-xl mx-auto">
            <CategoryDropdown />
            <LocationDropdown />
          </div>
        </section>

        {/* Business Cards Grid */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BusinessCard
              category="Handmade"
              title="Crafted Stories"
              description="Handcrafted pottery and ceramic pieces made with love"
              location="New York, NY"
              imageUrl="/images/crafted-stories.jpg"
            />
            <BusinessCard
              category="Food & Beverage"
              title="Sweet & Simple Bakery"
              description="Artisanal breads and pastries baked fresh daily"
              location="Chicago, IL"
              imageUrl="/images/sweet-simple-bakery.jpg"
            />
            <BusinessCard
              category="Art & Design"
              title="Canvas & Color"
              description="Contemporary art and custom framing services"
              location="Los Angeles, CA"
              imageUrl="/images/canvas-color.jpg"
            />
            <BusinessCard
              category="Fashion"
              title="Vintage Vibes"
              description="Curated collection of vintage and sustainable fashion"
              location="Portland, OR"
              imageUrl="/images/vintage-vibes.jpg"
            />
            <BusinessCard
              category="Beauty"
              title="Natural Glow"
              description="Handmade organic skincare and wellness products"
              location="Austin, TX"
              imageUrl="/images/natural-glow.jpg"
            />
            <BusinessCard
              category="Home & Garden"
              title="Urban Jungle"
              description="Rare and exotic plants for your indoor paradise"
              location="Seattle, WA"
              imageUrl="/images/urban-jungle.jpg"
            />
          </div>
        </section>

        {/* Collection Cards */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CollectionCard
              title="Black-Owned Businesses"
              description="Supporting and celebrating exceptional Black entrepreneurs in our community."
              buttonText="Visit Collection"
              buttonColor="pink"
              href="/collections/black-owned"
            />
            <CollectionCard
              title="Women-Led Startups"
              description="Discover innovative businesses founded and led by inspiring women."
              buttonText="Explore Collection"
              buttonColor="teal"
              href="/collections/women-led"
            />
          </div>
        </section>

        {/* More Business Cards */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BusinessCard
              category="Jewelry"
              title="Silver & Stone"
              description="Handcrafted jewelry with natural gemstones"
              location="Denver, CO"
              imageUrl="/images/silver-stone.jpg"
            />
            <BusinessCard
              category="Food & Beverage"
              title="Morning Brew Co."
              description="Small-batch coffee roasting and specialty drinks"
              location="San Francisco, CA"
              imageUrl="/images/morning-brew.jpg"
            />
            <BusinessCard
              category="Books & Music"
              title="Chapter One"
              description="Independent bookstore with rare and used books"
              location="Boston, MA"
              imageUrl="/images/chapter-one.jpg"
            />
            <BusinessCard
              category="Jewelry"
              title="Silver & Stone"
              description="Handcrafted jewelry with natural gemstones"
              location="Denver, CO"
              imageUrl="/images/silver-stone.jpg"
            />
            <BusinessCard
              category="Food & Beverage"
              title="Morning Brew Co."
              description="Small-batch coffee roasting and specialty drinks"
              location="San Francisco, CA"
              imageUrl="/images/morning-brew.jpg"
            />
            <BusinessCard
              category="Books & Music"
              title="Chapter One"
              description="Independent bookstore with rare and used books"
              location="Boston, MA"
              imageUrl="/images/chapter-one.jpg"
            />
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-16">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={`w-8 h-8 rounded-full ${
                currentPage === i + 1
                  ? 'bg-black text-white'
                  : 'text-gray-500'
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
