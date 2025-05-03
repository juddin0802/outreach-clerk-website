import Link from 'next/link';

const FooterLink = ({ href, children, target, rel }) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className='font-inter text-[17px] leading-[27px] text-slate-600 hover:underline decoration-indigo-700 transition-colors'>
      {children}
    </Link>
  );
};

export default FooterLink;
