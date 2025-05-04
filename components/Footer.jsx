import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import WebsiteLogo from './WebsiteLogo';
import FooterLink from './FooterLink';

export default function Footer() {
  return (
    <footer className='bg-[#FAF8F3] py-16 px-6 md:px-12 lg:px-16'>
      <div className='container mx-auto px-4'>
        {/* Footer Menus */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12 mx-auto'>
          {/* Brand Section */}
          <div>
            <WebsiteLogo />
            <p className='font-inter text-[17px] leading-[27px] text-slate-600 mt-4'>
              Your trusted partner for email outreach and link building
              campaigns.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className='text-indigo-600 font-bold mb-4 text-[18px]'>
              Quick links
            </h4>
            <ul className='space-y-1'>
              <li>
                <FooterLink href='/features'>Email Warmup</FooterLink>
              </li>
              <li>
                <FooterLink href='/features'>Cold Outreach</FooterLink>
              </li>
              <li>
                <FooterLink href='/features'>Link Building</FooterLink>
              </li>
            </ul>
          </div>

          {/* Company Policies */}
          <div>
            <h4 className='text-indigo-600 font-bold mb-4 text-[18px]'>
              Company
            </h4>
            <ul className='space-y-1'>
              <li>
                <FooterLink href='/privacy-policy'>Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink href='/cookie-policy'>Cookie Policy</FooterLink>
              </li>
              <li>
                <FooterLink href='/california-consumer-privacy-act'>
                  CCPA Compliance
                </FooterLink>
              </li>
              <li>
                <FooterLink href='/general-data-protection-regulation'>
                  GDPR Compliance
                </FooterLink>
              </li>
              <li>
                <FooterLink href='/refund-policy'>Refund Policy</FooterLink>
              </li>
              <li>
                <FooterLink href='/terms-of-use'>Terms of Use</FooterLink>
              </li>
            </ul>
          </div>

          {/* Support Menus */}
          <div>
            <h4 className='text-indigo-600 font-bold mb-4 text-[18px]'>
              Support
            </h4>
            <ul className='space-y-1'>
              <li>
                <FooterLink href='https://roadmap.outreachclerk.com/t/roadmap'>
                  Road Map
                </FooterLink>
              </li>
              <li>
                <FooterLink href='https://roadmap.outreachclerk.com/'>
                  Knowledge Base
                </FooterLink>
              </li>
              <li>
                <FooterLink href='/Facebook-Group'>Facebook Group</FooterLink>
              </li>
              <li>
                <FooterLink href='/youtube'>Youtube Channel</FooterLink>
              </li>
              <li>
                <FooterLink href='/contact'>Contact Support</FooterLink>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='text-indigo-600 font-bold mb-4 text-[18px]'>
              Social Links
            </h4>
            <div className='flex space-x-4'>
              <FooterLink
                href='https://www.facebook.com/OutreachClerk'
                target='_blank'
                rel='noopener noreferrer'>
                <Facebook className='size-6 hover:text-indigo-500' />
              </FooterLink>
              <FooterLink
                href='https://twitter.com/OutreachClerk/'
                target='_blank'
                rel='noopener noreferrer'>
                <Twitter className='size-6 hover:text-indigo-500' />
              </FooterLink>
              <FooterLink
                href='https://www.instagram.com/outreachclerk/'
                target='_blank'
                rel='noopener noreferrer'>
                <Instagram className='size-6 hover:text-indigo-500' />
              </FooterLink>
              <FooterLink
                href='https://www.linkedin.com/company/outreachclerk/'
                target='_blank'
                rel='noopener noreferrer'>
                <Linkedin className='size-6 hover:text-indigo-500' />
              </FooterLink>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className='text-center font-inter text-[18px] leading-[27px] text-indigo-600'>
          © {new Date().getFullYear()} Outreach Clerk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
