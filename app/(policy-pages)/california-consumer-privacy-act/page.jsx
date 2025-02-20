import React from 'react';

const CCPAPage = () => {
  return (
    <div className='max-w-5xl mx-auto p-16 bg-zinc-50'>
      <h1 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-emerald-800 mb-6'>
        California Consumer Privacy Act (CCPA)
      </h1>
      <p className='mb-4'>Effective Date: January 26, 2026</p>
      <p className='mb-4'>
        At OutreachClerk.com, we respect your privacy rights and are committed
        to complying with the California Consumer Privacy Act (CCPA). This page
        explains your rights under CCPA, how we collect, use, and share your
        personal information, and how you can exercise your rights.
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>
        1. Your Rights Under CCPA
      </h2>
      <p className='mb-4'>
        As a California resident, you have the following rights under the CCPA:
      </p>

      <h3 className='font-semibold mt-4'>1.1 Right to Know</h3>
      <ul className='list-disc pl-6 mb-4'>
        <li>The categories of personal information collected</li>
        <li>The sources of the collected information</li>
        <li>The purposes for collecting or sharing your information</li>
        <li>
          The categories of third parties with whom we share personal data
        </li>
        <li>Specific pieces of personal data we have collected about you</li>
      </ul>

      <h3 className='font-semibold mt-4'>1.2 Right to Delete</h3>
      <p className='mb-4'>
        You have the right to request that we delete your personal data, subject
        to certain exceptions, such as when data is required for:
      </p>
      <ul className='list-disc pl-6 mb-4'>
        <li>Completing transactions or providing services</li>
        <li>Detecting security incidents or fraudulent activity</li>
        <li>Complying with legal obligations</li>
      </ul>

      <h3 className='font-semibold mt-4'>
        1.3 Right to Opt-Out of Sale of Personal Information
      </h3>
      <p className='mb-4'>
        We do not sell your personal information. However, you have the right to
        opt-out if our practices change in the future.
      </p>

      <h3 className='font-semibold mt-4'>1.4 Right to Non-Discrimination</h3>
      <p className='mb-4'>
        You have the right not to be discriminated against for exercising your
        CCPA rights. We will not:
      </p>
      <ul className='list-disc pl-6 mb-4'>
        <li>Deny you services</li>
        <li>Charge different prices or rates</li>
        <li>Provide a different level or quality of services</li>
      </ul>

      <h3 className='font-semibold mt-4'>
        1.5 Right to Correct Personal Information
      </h3>
      <p className='mb-4'>
        You may request corrections to any inaccurate personal information we
        maintain about you.
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>
        2. Categories of Personal Information We Collect
      </h2>
      <p className='mb-4'>
        In the past 12 months, we may have collected the following categories of
        personal information from users:
      </p>

      <h3 className='font-semibold mt-4'>Identifiers</h3>
      <p className='mb-4'>
        Examples: Name, email, IP address, account credentials
      </p>

      <h3 className='font-semibold mt-4'>Commercial Information</h3>
      <p className='mb-4'>
        Examples: Website listings, services offered, transaction history
      </p>

      <h3 className='font-semibold mt-4'>Internet Activity</h3>
      <p className='mb-4'>
        Examples: Browsing behavior, usage data, referring URLs
      </p>

      <h3 className='font-semibold mt-4'>Geolocation Data</h3>
      <p className='mb-4'>Examples: IP-based location</p>

      <h3 className='font-semibold mt-4'>Professional Data</h3>
      <p className='mb-4'>
        Examples: Business details (website URL, services provided)
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>
        3. How We Collect Personal Information
      </h2>
      <p className='mb-4'>
        We collect personal information through various means, including:
      </p>
      <ul className='list-disc pl-6 mb-4'>
        <li>
          Directly from you when you sign up, add your website, or contact us
        </li>
        <li>Automatically through cookies and tracking technologies</li>
        <li>Through third-party integrations like Google Analytics</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6 mb-2'>
        4. How We Use Your Personal Information
      </h2>
      <p className='mb-4'>We use your personal data to:</p>
      <ul className='list-disc pl-6 mb-4'>
        <li>Provide and improve our services</li>
        <li>Facilitate communication between buyers and sellers</li>
        <li>Conduct marketing and promotional activities</li>
        <li>Enhance security and detect fraudulent activity</li>
        <li>Comply with legal and regulatory obligations</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6 mb-2'>
        5. How We Share Personal Information
      </h2>
      <p className='mb-4'>We may share your personal information with:</p>
      <ul className='list-disc pl-6 mb-4'>
        <li>Service providers for hosting, analytics, and communications</li>
        <li>Buyers if you list a website on our platform</li>
        <li>Legal authorities when required by law</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6 mb-2'>
        6. Exercising Your CCPA Rights
      </h2>
      <p className='mb-4'>
        If you are a California resident, you can exercise your rights by
        emailing us at:
      </p>
      <p className='font-semibold'>📧 Email: support@outreachclerk.com</p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>7. Contact Us</h2>
      <p className='mb-4'>
        For any questions regarding this policy or your rights, you can contact
        us at:
      </p>
      <p className='font-semibold'>
        🌐 Website:{' '}
        <a href='https://outreachclerk.com' className='text-blue-500 underline'>
          https://outreachclerk.com
        </a>
      </p>
    </div>
  );
};

export default CCPAPage;
