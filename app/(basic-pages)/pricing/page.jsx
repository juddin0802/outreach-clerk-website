import BackgroundSVG from '@/components/BackgroundSVG';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free Forever',
    price: '$0',
    features: [
      'Email warmup for 1 account',
      'Up to 500 cold emails per month',
      'Basic link building tools',
      'Email templates',
      'Standard support'
    ]
  },
  {
    name: 'Starter',
    price: '$29',
    features: [
      'Email warmup for 1 account',
      'Up to 500 cold emails per month',
      'Basic link building tools',
      'Email templates',
      'Standard support'
    ]
  },
  {
    name: 'Pro',
    price: '$59',
    features: [
      'Email warmup for 3 accounts',
      'Up to 2,000 cold emails per month',
      'Advanced link building tools',
      'Custom email templates',
      'Priority support',
      'API access'
    ]
  },
  {
    name: 'Advance',
    price: '$119',
    features: [
      'Email warmup for unlimited accounts',
      'Unlimited cold emails',
      'Advanced link building suite',
      'Custom integrations',
      'Dedicated account manager',
      'Custom API solutions'
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
        <p className='text-lg text-center mb-12'>
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
                    <Check className='h-5 w-5 text-emerald-900 mr-2' />
                    <span className='text-gray-600'>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant='outline'
                className='bg-emerald-800 hover:bg-emerald-900 w-full text-white hover:text-slate-100 font-semibold text-sm'>
                Get Started
              </Button>
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
