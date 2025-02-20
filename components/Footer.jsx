import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-emerald-950 py-16 px-6 md:px-12 lg:px-16 border-t border-teal-700'>
      <div className='container mx-auto px-4'>
        {/* Footer Menus */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12 mx-auto'>
          {/* Brand Section */}
          <div>
            <Link href='/' className='block mb-6'>
              <Image
                src='/outreach-clerk-logo.png'
                alt='Outreach Clerk Logo'
                width={180}
                height={50}
                className='h-10 w-auto'
              />
            </Link>
            <p className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)]'>
              Your trusted partner for email outreach and link building
              campaigns.
            </p>
          </div>

          {/* Feature Menus */}
          <div>
            <h4 className='text-white font-bold mb-4 text-[18px]'>
              Quick links
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/features'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Email Warmup
                </Link>
              </li>
              <li>
                <Link
                  href='/features'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Cold Outreach
                </Link>
              </li>
              <li>
                <Link
                  href='/features'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Link Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Policies */}
          <div>
            <h4 className='text-white font-bold mb-4 text-[18px]'>Company</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/privacy-policy'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/cookie-policy'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/california-consumer-privacy-act'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  CCPA Compliance
                </Link>
              </li>
              <li>
                <Link
                  href='/general-data-protection-regulation'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link
                  href='/refund-policy'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms-of-use'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Menus */}
          <div>
            <h4 className='text-white font-bold mb-4 text-[18px]'>Support</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='https://roadmap.outreachclerk.com/t/roadmap'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Road Map
                </Link>
              </li>

              <li>
                <Link
                  href='https://roadmap.outreachclerk.com/'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Knowledge Base
                </Link>
              </li>

              <li>
                <Link
                  href='/Facebook-Group'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Facebook Group
                </Link>
              </li>
              <li>
                <Link
                  href='/youtube'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Youtube Channel
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)] hover:text-white transition-colors'>
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='text-white font-bold mb-4 text-[18px]'>
              Social Links
            </h4>
            <div className='flex space-x-4'>
              <Link
                href='https://www.facebook.com/OutreachClerk'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[rgb(211,211,211)] hover:text-white transition-colors'>
                <Facebook className='h-6 w-6' />
              </Link>
              <Link
                href='https://twitter.com/OutreachClerk/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[rgb(211,211,211)] hover:text-white transition-colors'>
                <Twitter className='h-6 w-6' />
              </Link>
              <Link
                href='https://www.instagram.com/outreachclerk/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[rgb(211,211,211)] hover:text-white transition-colors'>
                <Instagram className='h-6 w-6' />
              </Link>
              <Link
                href='https://www.linkedin.com/company/outreachclerk/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[rgb(211,211,211)] hover:text-white transition-colors'>
                <Linkedin className='h-6 w-6' />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className='text-center font-inter text-[18px] leading-[27px] text-[rgb(211,211,211)]'>
          © {new Date().getFullYear()} Outreach Clerk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
