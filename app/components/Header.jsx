"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-blue-400">
          <Link href="/">نسمات الجنوب</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 space-x-reverse">
            <li><Link href="/" className="hover:text-blue-400 transition duration-300">الرئيسية</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition duration-300">من نحن</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition duration-300">خدماتنا</Link></li>
            <li><Link href="/portfolio" className="hover:text-blue-400 transition duration-300">مشاريعنا</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition duration-300 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">اتصل بنا</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="القائمة"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <ul className="flex flex-col p-4 space-y-4 text-center">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 transition duration-300">الرئيسية</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 transition duration-300">من نحن</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 transition duration-300">خدماتنا</Link></li>
            <li><Link href="/portfolio" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 transition duration-300">مشاريعنا</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 transition duration-300 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 mx-auto w-fit">اتصل بنا</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}