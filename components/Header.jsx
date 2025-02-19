'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
// You can use any icon library or your own SVG for the hamburger icon
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='py-4 px-6 md:px-12 lg:px-16 bg-[#FAF8F3]'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/outreach-clerk-logo.png'
              alt='Outreach Clerk Logo'
              width={180}
              height={50}
              className='h-10 w-auto'
            />
          </Link>

          {/* Hamburger Icon (visible on mobile only) */}
          <button
            className='md:hidden text-gray-800 hover:text-gray-600'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle Menu'>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Links */}
          <nav
            className={`
              md:flex items-center gap-8
              ${menuOpen ? 'block' : 'hidden'}
              absolute md:static top-[70px] left-0 w-full md:w-auto
              bg-[#FAF8F3] md:bg-transparent
              px-4 py-4 md:p-0
              z-50
            `}>
            <Link
              href='/'
              className='block md:inline-block font-inter text-[18px] leading-[27px] font-semibold text-[rgba(0,0,0,0.7)] hover:text-[#08442E] transition-colors mb-2 md:mb-0'
              onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link
              href='/features'
              className='block md:inline-block font-inter text-[18px] leading-[27px] font-semibold text-[rgba(0,0,0,0.7)] hover:text-[#08442E] transition-colors mb-2 md:mb-0'
              onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link
              href='/about'
              className='block md:inline-block font-inter text-[18px] leading-[27px] font-semibold text-[rgba(0,0,0,0.7)] hover:text-[#08442E] transition-colors mb-2 md:mb-0'
              onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link
              href='/pricing'
              className='block md:inline-block font-inter text-[18px] leading-[27px] font-semibold text-[rgba(0,0,0,0.7)] hover:text-[#08442E] transition-colors mb-2 md:mb-0'
              onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
            <Link
              href='/contact'
              className='block md:inline-block font-inter text-[18px] leading-[27px] font-semibold text-[rgba(0,0,0,0.7)] hover:text-[#08442E] transition-colors mb-4 md:mb-0'
              onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link
              href='https://app.outreachclerk.com/register'
              passHref
              rel='nofollow noopener noreferrer'
              target='_blank'
              onClick={() => setMenuOpen(false)}
              className='block md:inline-block'>
              <Button className='bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-4 md:py-2 px-6'>
                Get Started for Free!
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
