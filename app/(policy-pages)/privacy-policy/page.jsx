import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className='max-w-5xl mx-auto p-16 bg-zinc-50'>
      <h1 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-emerald-800 mb-6'>
        Privacy Policy
      </h1>
      <p className='text-gray-700'>Last Updated: January 26, 2025</p>

      <p className='mt-4'>
        Welcome to <strong>OutreachClerk.com</strong> (hereinafter referred to
        as “we,” “us,” “our,” or the “Platform”). We are committed to protecting
        your privacy and ensuring the security of your personal information.
        This Privacy Policy outlines how we collect, use, disclose, and
        safeguard your data when you use our website, application, and services
        (collectively, the “Services”).
      </p>

      <p>
        By accessing or using our Services, you agree to the terms of this
        Privacy Policy. If you do not agree with these terms, please do not use
        our Services.
      </p>

      <h2 className='text-2xl font-semibold mt-6'>1. Information We Collect</h2>

      <h3 className='text-xl font-semibold mt-4'>1.1 Personal Information</h3>
      <p>
        When you sign up, use our Services, or communicate with us, we may
        collect:
      </p>
      <ul className='list-disc pl-6 mt-2'>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Billing information (if applicable)</li>
        <li>Website URLs</li>
        <li>Google Analytics data (for website owners)</li>
        <li>Communication preferences</li>
      </ul>

      <h3 className='text-xl font-semibold mt-4'>
        1.2 Non-Personal Information
      </h3>
      <p>We may automatically collect:</p>
      <ul className='list-disc pl-6 mt-2'>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device information (e.g., operating system, device type)</li>
        <li>Usage data (e.g., pages visited, time spent on the Platform)</li>
        <li>Cookies and tracking technologies (see Section 5 for details)</li>
      </ul>

      <h3 className='text-xl font-semibold mt-4'>
        1.3 Information from Third Parties
      </h3>
      <p>We may receive information from third-party services, such as:</p>
      <ul className='list-disc pl-6 mt-2'>
        <li>Google Analytics (for website traffic data)</li>
        <li>Payment processors (for transaction details)</li>
        <li>Social media platforms (if you connect your accounts)</li>
      </ul>

      <h2 className='text-2xl font-semibold mt-6'>
        2. How We Use Your Information
      </h2>
      <p>We use your information for the following purposes:</p>
      <ul className='list-disc pl-6 mt-2'>
        <li>To provide and improve our Services.</li>
        <li>To facilitate communication between buyers and sellers.</li>
        <li>To process transactions and manage accounts.</li>
        <li>To analyze usage trends and optimize the Platform.</li>
        <li>To send promotional emails (with your consent).</li>
        <li>To comply with legal obligations and enforce our terms.</li>
      </ul>

      <h2 className='text-2xl font-semibold mt-6'>
        3. How We Share Your Information
      </h2>

      <h3 className='text-xl font-semibold mt-4'>3.1 With Your Consent</h3>
      <p>
        We will share your information with third parties if you explicitly
        consent to such sharing.
      </p>

      <h3 className='text-xl font-semibold mt-4'>3.2 With Service Providers</h3>
      <p>
        We may share data with trusted third-party service providers who assist
        us in:
      </p>
      <ul className='list-disc pl-6 mt-2'>
        <li>Hosting and maintaining the Platform.</li>
        <li>Processing payments.</li>
        <li>Analyzing data.</li>
        <li>Marketing and advertising.</li>
      </ul>

      <h3 className='text-xl font-semibold mt-4'>3.3 For Legal Reasons</h3>
      <p>
        We may disclose your information if required by law, to protect our
        rights, or to comply with legal processes.
      </p>

      <h3 className='text-xl font-semibold mt-4'>3.4 Business Transfers</h3>
      <p>
        In the event of a merger, acquisition, or sale of assets, your
        information may be transferred to the new owner.
      </p>

      <h2 className='text-2xl font-semibold mt-6'>4. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your
        information, including:
      </p>
      <ul className='list-disc pl-6 mt-2'>
        <li>Encryption of sensitive data.</li>
        <li>Secure servers and firewalls.</li>
        <li>Regular security audits.</li>
      </ul>
      <p>
        However, no method of transmission over the internet or electronic
        storage is 100% secure. While we strive to protect your data, we cannot
        guarantee absolute security.
      </p>

      <h2 className='text-2xl font-semibold mt-6'>
        5. Cookies and Tracking Technologies
      </h2>
      <p>We use cookies and similar technologies to:</p>
      <ul className='list-disc pl-6 mt-2'>
        <li>Enhance user experience.</li>
        <li>Analyze usage patterns.</li>
        <li>Deliver targeted advertisements.</li>
      </ul>
      <p>
        You can manage your cookie preferences through your browser settings.
        However, disabling cookies may affect the functionality of the Platform.
      </p>

      <h2 className='text-2xl font-semibold mt-6'>
        6. Your Rights and Choices
      </h2>
      <p>Depending on your location, you may have the following rights:</p>
      <ul className='list-disc pl-6 mt-2'>
        <li>Access your personal information.</li>
        <li>Correct inaccurate or incomplete data.</li>
        <li>Delete your information (subject to legal requirements).</li>
        <li>Opt out of marketing communications.</li>
        <li>Withdraw consent for data processing.</li>
        <li>Object to processing of your data under certain circumstances.</li>
      </ul>
      <p>
        To exercise these rights, please contact us at{' '}
        <a href='mailto:support@outreachclerk.com' className='text-blue-500'>
          support@outreachclerk.com
        </a>
        .
      </p>

      <h2 className='text-2xl font-semibold mt-6'>17. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or our data practices, please contact us at:
      </p>
      <p className='font-semibold'>
        Email:{' '}
        <a href='mailto:support@outreachclerk.com' className='text-blue-500'>
          support@outreachclerk.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
