import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Mail,
  LinkIcon,
  BarChart,
  Users,
  Zap,
  MessageSquare,
  UserPlus,
  LayoutDashboard
} from 'lucide-react';
import BackgroundSVG from '@/components/BackgroundSVG';

const features = [
  {
    icon: <Mail className='w-8 h-8' />,
    title: 'Email Warmup',
    description: 'Improve deliverability with intelligent warmup process'
  },
  {
    icon: <MessageSquare className='w-8 h-8' />,
    title: 'Cold Email Outreach',
    description: 'Send personalized emails at scale with automation'
  },
  {
    icon: <LinkIcon className='w-8 h-8' />,
    title: 'Link Building Outreach',
    description: 'Streamline your link building campaigns effectively'
  },
  {
    icon: <BarChart className='w-8 h-8' />,
    title: 'Advanced Analytics',
    description: 'Track and optimize your campaign performance'
  },
  {
    icon: <UserPlus className='w-8 h-8' />,
    title: 'Team Collaboration',
    description: 'Easily invite colleagues and work together in real time'
  },
  {
    icon: <LayoutDashboard className='size-8' />,
    title: 'Multi Workspace',
    description:
      'Manage multiple workspace or project from a single user account'
  }
  // {
  //   icon: <Zap className='w-8 h-8' />,
  //   title: 'White Label',
  //   description: 'Brand the platform as your own solution'
  // }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-white'>
        {/* Background SVG */}
        <div className='absolute inset-0 pointer-events-none'>
          <BackgroundSVG />
        </div>

        <div className='container mx-auto py-20 px-16 relative'>
          <div className='text-center max-w-5xl mx-auto'>
            <h1 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-emerald-800 mb-6'>
              Do Less Outreach Get More Results
            </h1>
            <p className='text-[20px] leading-[30px] text-[rgb(107,122,120)] mb-12 max-w-3xl mx-auto'>
              Boost your email deliverability, automate cold outreach, and
              skyrocket your link building efforts with our comprehensive suite
              of tools.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Link
                href='https://app.outreachclerk.com/register'
                passHref
                rel='nofollow noopener noreferrer'
                target='_blank'>
                <Button className='bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-lg px-8 py-6'>
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-16 bg-[#08442E] relative'>
        <div className='container mx-auto px-4 relative'>
          <h2 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-white text-center mb-12'>
            Powerful Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#00FF84]/50 transition-colors'>
                <div className='text-[#00FF84] mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='text-white/70'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 px-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-center text-emerald-800 mb-12'>
            Why Choose Outreach Clerk?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mx-auto'>
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold text-emerald-900'>
                Automated Email Warmup
              </h3>
              <p className='text-[20px] leading-[30px] text-[rgb(107,122,120)]'>
                Our intelligent system gradually builds your email reputation
                through natural-looking interactions, ensuring your emails land
                in the inbox.
              </p>
            </div>
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold text-emerald-900'>
                Cold Email Outreach
              </h3>
              <p className='text-[20px] leading-[30px] text-[rgb(107,122,120)]'>
                Reach your ideal audience with targeted cold email campaigns.
                Automate follow-ups, personalize messaging at scale, and track
                engagement to optimize your outreach strategy.
              </p>
            </div>
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold text-emerald-900'>
                Smart Link Building
              </h3>
              <p className='text-[20px] leading-[30px] text-[rgb(107,122,120)]'>
                Streamline your outreach process with automated follow-ups and
                personalized templates that get results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-16 bg-[#08442E] relative'>
        <div className='container mx-auto px-4 text-center relative'>
          <h2 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-white mb-8'>
            Ready to Supercharge Your Outreach?
          </h2>
          <Link
            href='https://app.outreachclerk.com/register'
            passHref
            rel='nofollow noopener noreferrer'
            target='_blank'>
            <Button className='bg-emerald-950 hover:bg-emerald-900 text-white font-semibold text-lg px-8 py-6'>
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
