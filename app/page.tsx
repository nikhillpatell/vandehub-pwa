'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#005F73] via-[#0A9396]/5 to-sand">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12">
        {/* Left: Text */}
        <div className="flex-1 text-left space-y-4 md:max-w-xl">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase">
            Quality you trust. Service you remember.
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal leading-tight">
            Trusted essentials for every Indian home.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            VandeHub delivers pure, fresh, and reliable essentials — from water
            to dry fruits — made for homes that care about quality.
          </p>
          <button
            onClick={() => {
              const section = document.getElementById('featured-products');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-white font-medium rounded-md px-6 py-3 hover:bg-[#004b5c] transition-all duration-200 mt-4"
          >
            Shop Essentials
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-12 flex justify-center">
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="720" viewBox="0 0 900 720">
      <rect width="100%" height="100%" fill="#E9D8A6"/>
      <g fill="#005F73" font-family="Poppins, sans-serif" font-weight="600">
        <text x="50" y="120" font-size="36">VandeHub</text>
      </g>
      <g fill="#001219" font-family="Inter, sans-serif">
        <text x="50" y="200" font-size="28">Trusted essentials for every Indian home.</text>
        <text x="50" y="250" font-size="18" fill="#444">Family-first · Pure · Reliable</text>
      </g>
      <rect x="50" y="300" rx="12" ry="12" width="260" height="160" fill="#ffffff" stroke="#005F73" />
      <text x="75" y="375" font-size="16" fill="#005F73">[Hero image placeholder]</text>
    </svg>
  `)}`}
            alt="Hero placeholder"
            className="rounded-lg shadow-md object-cover w-[500px] h-[400px]"
          />
        </div>
      </section>
      {/* Featured Product Section */}
      <section
        id="featured-products"
        className="bg-sand py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Left: Product Images */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0">
            <img
              src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80"
              alt="VandeNeer Water Bottle 1"
              className="rounded-md shadow-md object-cover w-60 h-80"
            />
            <img
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=400&q=80"
              alt="VandeNeer Water Bottle 2"
              className="rounded-md shadow-md object-cover w-60 h-80"
            />
            <img
              src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
              alt="VandeNeer Water Bottle 3"
              className="rounded-md shadow-md object-cover w-60 h-80"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-3">
            VandeNeer — Pure. Fresh. Trusted.
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            VandeNeer brings you crystal-clear, mineral-balanced drinking water
            that’s as pure as nature intended — tested, trusted, and delivered
            fresh to your home.
          </p>
          <button className="bg-primary text-white font-medium rounded-md px-6 py-3 hover:bg-[#004b5c] transition-all duration-200">
            Order Now
          </button>
        </div>
      </section>
      ;{/* Information Strip */}
      <section className="bg-sand py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* 1️⃣ Fast Delivery */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-primary text-5xl">🚚</span>
            <h3 className="text-lg font-semibold text-charcoal">
              Fast & Reliable Delivery
            </h3>
            <p className="text-sm text-gray-700 max-w-xs">
              Your essentials delivered fresh and on time, every single day.
            </p>
          </div>

          {/* 2️⃣ Pure Quality */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-primary text-5xl">💧</span>
            <h3 className="text-lg font-semibold text-charcoal">
              Pure, Certified Quality
            </h3>
            <p className="text-sm text-gray-700 max-w-xs">
              Every VandeHub product meets strict purity and safety standards.
            </p>
          </div>

          {/* 3️⃣ Customer Care */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-primary text-5xl">💬</span>
            <h3 className="text-lg font-semibold text-charcoal">
              24×7 Customer Care
            </h3>
            <p className="text-sm text-gray-700 max-w-xs">
              Always here to help you — before, during, and after your order.
            </p>
          </div>
        </div>
      </section>
      {/* Promo Section */}
      <section className="bg-accent text-white text-center py-10 px-6 rounded-lg shadow-md my-12 mx-4 md:mx-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          This Week Only — 10% Off on VandeNeer 20L Jars!
        </h2>
        <p className="text-base md:text-lg mb-6">
          Stay hydrated with purity you can trust. Offer valid till Sunday.
        </p>
        <button
          onClick={() => {
            const section = document.getElementById('featured-products');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-white text-accent font-medium px-6 py-3 rounded-md hover:bg-sand transition-all duration-200"
        >
          Book Now
        </button>
      </section>
    </main>
  );
}
