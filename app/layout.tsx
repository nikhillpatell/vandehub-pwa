import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'VandeHub',
  description: 'Trusted essentials for every Indian home.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#005F73" />
      </head>

      <body className="font-body bg-sand text-charcoal">
        {/* ✅ Navbar (visible on desktop) */}
        <nav className="hidden md:flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-sm fixed top-0 left-0 w-full z-50">
          {/* Left: Logo */}
          <a
            href="/"
            className="text-primary font-heading font-semibold text-xl cursor-pointer"
          >
            VandeHub
          </a>

          {/* Right: Nav Links */}
          <div className="flex items-center gap-6 text-charcoal font-body">
            <a href="#" className="hover:text-primary transition">
              Categories
            </a>
            <a href="/order-status" className="hover:text-primary transition">
              Order Status
            </a>
            <a href="#" className="relative hover:opacity-80 transition">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-2 bg-accent text-white text-xs rounded-full px-[5px] py-[1px]">
                2
              </span>
            </a>
          </div>
        </nav>

        {/* Spacer for fixed navbar height */}
        <div className="h-[72px]" />

        {/* ✅ Main Page Content */}
        <main>{children}</main>

        {/* ✅ Mobile Bottom Navbar */}
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-sm flex justify-around items-center py-3 md:hidden z-50">
          <a href="/" className="flex flex-col items-center text-primary">
            <span className="text-lg">🏠</span>
            <span className="text-xs font-medium">Home</span>
          </a>

          <a href="#" className="flex flex-col items-center text-charcoal">
            <span className="text-lg">🗂️</span>
            <span className="text-xs font-medium">Categories</span>
          </a>

          <a
            href="/order-status"
            className="flex flex-col items-center text-charcoal hover:text-primary transition"
          >
            <span className="text-lg">📦</span>
            <span className="text-xs font-medium">Orders</span>
          </a>

          <a
            href="#"
            className="flex flex-col items-center text-charcoal relative"
          >
            <span className="text-lg">🛒</span>
            <span className="text-xs font-medium">Cart</span>
            <span className="absolute top-0 right-3 bg-accent text-white text-[10px] rounded-full px-[4px] py-[1px]">
              2
            </span>
          </a>
        </nav>

        {/* ✅ Footer (shared across all pages) */}
        <footer className="bg-charcoal text-white py-12 px-6 md:px-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">VandeHub</h3>
              <p className="text-sand mb-4">
                Quality you trust. Service you remember.
              </p>
              <a href="#" className="text-accent hover:underline text-sm">
                Share our app ↗
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sand">
                <li>
                  <a href="/" className="hover:text-accent">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/order-status" className="hover:text-accent">
                    Order Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent text-2xl">
                  📷
                </a>
                <a href="#" className="hover:text-accent text-2xl">
                  🐦
                </a>
                <a href="#" className="hover:text-accent text-2xl">
                  💼
                </a>
                <a href="#" className="hover:text-accent text-2xl">
                  💬
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 text-center text-sand text-sm pt-4">
            © 2025 VandeHub · Made in India with ❤️
          </div>
        </footer>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW registration failed:', err));
      });
    }
  `,
          }}
        />
      </body>
    </html>
  );
}
