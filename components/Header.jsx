'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import WebsiteLogo from './WebsiteLogo';
import NavLink from './NavLink';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='py-4 px-6 md:px-12 lg:px-16 bg-[#FAF8F3] sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <WebsiteLogo />
          <button
            className='md:hidden text-gray-800 hover:text-gray-600'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle Menu'>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <nav
            className={`
              md:flex items-center gap-8
              ${menuOpen ? 'block' : 'hidden'}
              absolute md:static top-[70px] left-0 w-full md:w-auto
              bg-[#FAF8F3] md:bg-transparent
              px-4 py-4 md:p-0
              z-50
            `}>
            <NavLink href='/' onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink href='/features' onClick={() => setMenuOpen(false)}>
              Features
            </NavLink>
            <NavLink href='/about' onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink href='/pricing' onClick={() => setMenuOpen(false)}>
              Pricing
            </NavLink>
            <NavLink href='/contact' onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
            <Link
              href='https://app.outreachclerk.com/register'
              passHref
              rel='nofollow noopener noreferrer'
              target='_blank'
              onClick={() => setMenuOpen(false)}
              className='block md:inline-block'>
              <Button className='bg-indigo-600 hover:bg-slate-700 text-xs md:text-sm lg:text-base text-slate-50 font-bold py-4 md:py-2 px-6 rounded-3xl transition-colors'>
                Get Started for Free!
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
