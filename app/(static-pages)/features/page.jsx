import Image from 'next/image';
import {
  Mail,
  LinkIcon,
  BarChart,
  Users,
  Zap,
  MessageSquare
} from 'lucide-react';
import BackgroundSVG from '@/components/BackgroundSVG';

const features = [
  {
    icon: <Mail className='h-12 w-12 text-brand-teal' />,
    name: 'Email Warmup',
    description:
      'Our intelligent email warmup process gradually increases your email sending reputation. This helps improve deliverability and ensures your important messages land in the inbox, not the spam folder. With our advanced algorithms, we simulate natural email activity, building trust with email providers and increasing your sender score over time.',
    image:
      'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    icon: <MessageSquare className='h-12 w-12 text-brand-teal' />,
    name: 'Cold Email Outreach',
    description:
      'Supercharge your cold email campaigns with our powerful outreach tools. Create highly personalized email sequences that resonate with your prospects. Our platform allows you to automate follow-ups, track engagement, and optimize your messaging for maximum impact. With advanced targeting and segmentation features, you can ensure your cold emails reach the right people at the right time.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    icon: <LinkIcon className='h-12 w-12 text-brand-teal' />,
    name: 'Link Building Outreach',
    description:
      'Take your SEO efforts to the next level with our comprehensive link building tools. Identify high-quality link opportunities, manage your outreach campaigns, and track your success all in one place. Our platform helps you create compelling pitches, automate follow-ups, and build relationships with website owners and editors. Monitor your backlink profile and measure the impact of your link building efforts with our detailed analytics.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    icon: <Users className='h-12 w-12 text-brand-teal' />,
    name: 'Multi Workspace',
    description:
      'Efficiently manage multiple organizations and teams from a single, intuitive dashboard. Our multi-workspace feature allows you to switch between different projects or clients seamlessly, maintaining separate data, settings, and team members for each. This powerful functionality enables agencies and large organizations to keep their work organized and streamlined, improving productivity and collaboration across various campaigns and initiatives.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    icon: <Zap className='h-12 w-12 text-brand-teal' />,
    name: 'White Label (Coming Soon)',
    description:
      'Brand our powerful platform as your own with our comprehensive white-label capabilities. Customize the look and feel of the interface with your logo, colors, and branding elements. This feature is perfect for agencies and resellers who want to offer our robust outreach tools under their own brand. Provide a seamless experience for your clients while leveraging our cutting-edge technology.',
    image:
      'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    icon: <BarChart className='h-12 w-12 text-brand-teal' />,
    name: 'Advanced Analytics',
    description:
      'Gain deep insights into your outreach campaigns with our advanced analytics tools. Track key metrics such as open rates, click-through rates, and conversion rates. Visualize your data with intuitive charts and graphs, making it easy to identify trends and opportunities. Our analytics suite helps you make data-driven decisions to continuously improve your outreach strategies and maximize your ROI.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  }
];

export default function Features() {
  return (
    <main className='relative py-20 px-6 md:px-12 lg:px-16'>
      {/* Background SVG */}
      <div className='absolute inset-0 pointer-events-none'>
        <BackgroundSVG />
      </div>

      <div className='relative container mx-auto px-4'>
        <h1 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-emerald-800 text-center mb-12'>
          Our Powerful Features
        </h1>
        <div className='space-y-20'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}>
              <div className='w-full md:w-1/2'>
                <Image
                  src={feature.image || '/placeholder.svg'}
                  alt={feature.name}
                  width={600}
                  height={400}
                  className='rounded-lg shadow-md object-cover w-full h-[400px]'
                />
              </div>
              <div className='w-full md:w-1/2'>
                <div className='flex items-center mb-4'>
                  <span className='text-emerald-900'>{feature.icon}</span>
                  <h2 className='text-2xl font-bold text-emerald-900 ml-4 text-brand-red'>
                    {feature.name}
                  </h2>
                </div>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
