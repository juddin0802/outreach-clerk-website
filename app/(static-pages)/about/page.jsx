import BackgroundSVG from '@/components/BackgroundSVG';
import Image from 'next/image';

export default function About() {
  return (
    <main className='relative py-20 px-6 md:px-12 lg:px-16'>
      {/* Background SVG */}
      <div className='absolute inset-0 pointer-events-none'>
        <BackgroundSVG />
      </div>

      <div className='relative container mx-auto px-4'>
        <h1 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-emerald-800 text-center mb-12'>
          About Outreach Clerk
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <Image
              src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
              alt='Outreach Clerk Team'
              width={600}
              height={400}
              className='rounded-lg shadow-md'
            />
          </div>
          <div>
            <h2 className='text-2xl font-semibold text-emerald-900 mb-4 text-brand-teal'>
              Our Mission
            </h2>
            <p className='text-gray-600 mb-6'>
              At Outreach Clerk, we're on a mission to revolutionize email
              outreach and link building. We believe that effective
              communication is the key to success in the digital world, and
              we're here to empower businesses and individuals to reach their
              full potential.
            </p>
            <h2 className='text-2xl font-semibold text-emerald-900 mb-4 text-brand-teal'>
              Our Story
            </h2>
            <p className='text-gray-600 mb-6'>
              Founded in 2018 by a team of digital marketing experts, Outreach
              Clerk was born out of the frustration of dealing with inefficient
              outreach tools. We set out to create a comprehensive solution that
              addresses the challenges of email deliverability, cold outreach,
              and link building.
            </p>
            <h2 className='text-2xl font-semibold text-emerald-900 mb-4 text-brand-teal'>
              Our Values
            </h2>
            <ul className='list-none text-gray-600'>
              <li>
                <strong>Innovation:</strong> We're always pushing the boundaries
                of what's possible in outreach technology.
              </li>
              <li>
                <strong>Integrity:</strong> We believe in ethical outreach
                practices and helping our users build genuine relationships.
              </li>
              <li>
                <strong>Customer Success:</strong> Your success is our success.
                We're committed to providing top-notch support and guidance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
