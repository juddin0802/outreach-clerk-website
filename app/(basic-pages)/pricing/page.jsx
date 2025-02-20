import BackgroundSVG from '@/components/BackgroundSVG';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Check, CircleCheckBig } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

const plans = [
  {
    name: 'Free Forever',
    price: '$0',
    features: [
      '1 Workspace',
      '1 Email Warmup',
      '1 Email Accounts',
      '100 Emails Months',
      '100 Uploaded Contacts',
      '100 Backlink Site Downloads',
      '100 Link-Building Outreach',
      'Unlimited Email Templates',
      'Standard Support'
    ]
  },
  {
    name: 'Starter Plan',
    price: '$29',
    features: [
      '1 Workspace',
      'Unlimited Email Warmup',
      'Unlimited Email Accounts',
      '15 000 Emails Months',
      '5 000 Uploaded Contacts',
      'Unlimited Backlink Site Downloads',
      'Unlimited Link-Building Outreach',
      'Unlimited Email Templates',
      'Priority Support'
    ]
  },
  {
    name: 'Pro Plan',
    price: '$89',
    features: [
      '3 Workspaces',
      'Unlimited Email Warmup',
      'Unlimited Email Accounts',
      '125 000 Emails Months',
      '50 000 Uploaded Contacts',
      'Unlimited Backlink Site Downloads',
      'Unlimited Link-Building Outreach',
      'Unlimited Email Templates',
      'Priority Support'
    ]
  },
  {
    name: 'Advance Plan',
    price: '$199',
    features: [
      '10 Workspaces',
      'Unlimited Email Warmup',
      'Unlimited Email Accounts',
      '300 000 Emails Months',
      '150 000 Uploaded Contacts',
      'Unlimited Backlink Site Downloads',
      'Unlimited Link-Building Outreach',
      'Unlimited Email Templates',
      'Priority Support'
    ]
  }
];

export default function Pricing() {
  return (
    <main className='relative py-20 px-16 bg-gray-50'>
      {/* Background SVG */}
      <div className='absolute inset-0 pointer-events-none'>
        <BackgroundSVG />
      </div>

      <div className='relative container mx-auto px-4'>
        <h1 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-emerald-800 text-center mb-4'>
          Effortless Pricing for Every Business
        </h1>
        <p className='text-xl text-center text-gray-600 font-urbanist mb-12'>
          Flexible plans designed to fit companies of every size – always
          transparent and predictable.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className='bg-zinc-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <h2 className='text-2xl font-bold mb-4 text-emerald-800'>
                {plan.name}
                <hr />
              </h2>
              <p className='text-3xl font-bold mb-6 text-emerald-800'>
                {plan.price}
                <span className='text-lg font-normal text-gray-500'>
                  /month
                </span>
              </p>
              <ul className='mb-8'>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center mb-2'>
                    <FaCheck className='size-4 text-emerald-900 mr-2' />
                    <span className='text-gray-600 text-sm font-urbanist'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href='https://app.outreachclerk.com/register'
                target='_blank'
                rel='noopener noreferrer'>
                <Button
                  variant='outline'
                  className='bg-emerald-800 hover:bg-emerald-900 w-full text-white hover:text-slate-100 font-semibold text-sm'>
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 bg-emerald-800 p-4 md:p-8 rounded-lg items-center'>
          <h2 className='text-2xl lg:text-4xl xl:text-5xl lg:leading-[77px] font-urbanist font-extrabold text-white mb-4 col-span-3 leading-[1.3]'>
            Looking for a custom plan or advanced capabilities?
          </h2>

          <span className='col-span-1'></span>
          <button className='bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold col-span-1'>
            Book a Demo
          </button>
        </div>
      </div>
    </main>
  );
}
