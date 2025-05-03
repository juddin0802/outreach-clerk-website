'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WebsiteLogo = () => {
  return (
    <div>
      <Link href='/'>
        <div className='hover:opacity-75 transition flex items-center gap-x-1'>
          <Image
            src='/outreach-clerk-logo.png' // Default logo path
            alt='Outreach Clerk Logo'
            height={50}
            width={40}
            unoptimized
            className='rounded-sm object-cover'
          />
          <p className='text-xs md:text-sm lg:text-base xl:text-lg text-indigo-600 font-bold dark:text-foreground'>
            Outreach Clerk
          </p>
        </div>
      </Link>
    </div>
  );
};

export default WebsiteLogo;
