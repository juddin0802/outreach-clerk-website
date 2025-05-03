'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        'block md:inline-block font-inter text-[18px] leading-[27px] font-semibold text-indigo-600 transition-colors mb-2 md:mb-0',
        {
          '!text-white bg-indigo-600 px-3 py-1.5 rounded-3xl': isActive,
          'hover:bg-indigo-600 hover:text-white hover:px-3 hover:py-1.5 hover:rounded-3xl':
            !isActive
        }
      )}>
      {children}
    </Link>
  );
};

export default NavLink;
