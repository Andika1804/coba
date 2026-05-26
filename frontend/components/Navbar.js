import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition">
              <span className="text-2xl">🛍️</span>
              <span className="font-bold text-xl">E-Commerce</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/">
              <span className="hover:text-blue-400 transition cursor-pointer">Home</span>
            </Link>
            <Link href="/products">
              <span className="hover:text-blue-400 transition cursor-pointer">Products</span>
            </Link>
            <Link href="/clock">
              <span className="hover:text-blue-400 transition cursor-pointer">⏰ Clock</span>
            </Link>
            <Link href="/cart">
              <span className="hover:text-blue-400 transition cursor-pointer">🛒 Cart</span>
            </Link>
            <Link href="/orders">
              <span className="hover:text-blue-400 transition cursor-pointer">📦 Orders</span>
            </Link>
            <Link href="/profile">
              <span className="hover:text-blue-400 transition cursor-pointer">👤 Profile</span>
            </Link>
            <Link href="/login">
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/">
              <span className="block hover:text-blue-400 transition cursor-pointer py-2">
                Home
              </span>
            </Link>
            <Link href="/products">
              <span className="block hover:text-blue-400 transition cursor-pointer py-2">
                Products
              </span>
            </Link>
            <Link href="/clock">
              <span className="block hover:text-blue-400 transition cursor-pointer py-2">
                ⏰ Clock
              </span>
            </Link>
            <Link href="/cart">
              <span className="block hover:text-blue-400 transition cursor-pointer py-2">
                🛒 Cart
              </span>
            </Link>
            <Link href="/orders">
              <span className="block hover:text-blue-400 transition cursor-pointer py-2">
                📦 Orders
              </span>
            </Link>
            <Link href="/profile">
              <span className="block hover:text-blue-400 transition cursor-pointer py-2">
                👤 Profile
              </span>
            </Link>
            <Link href="/login">
              <button className="w-full bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition text-left">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
