import React from 'react';

const CookiePolicyPage = () => {
  return (
    <div className='max-w-5xl mx-auto p-16 bg-zinc-50'>
      <h1 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-emerald-800 mb-6'>
        Cookie Policy
      </h1>
      <p className='text-gray-600'>Effective Date: January 26, 2025</p>

      <p>
        OutreachClerk.com (“we,” “our,” or “us”) uses cookies and similar
        tracking technologies to enhance your browsing experience, analyze
        website performance, and provide personalized content. This Cookie
        Policy explains what cookies are, how we use them, and your choices
        regarding their use. By using our website, you agree to the use of
        cookies as described in this policy.
      </p>

      <h2 className='text-xl font-semibold mt-6'>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device (computer, tablet,
        smartphone) when you visit a website. They help websites recognize your
        device, remember preferences, and enhance user experience. Cookies may
        also be used for analytics, marketing, and security purposes.
      </p>

      <h2 className='text-xl font-semibold mt-6'>2. Types of Cookies We Use</h2>

      <h3 className='text-lg font-medium mt-4'>2.1 Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function properly.
        Examples include:
      </p>
      <ul className='list-disc pl-6'>
        <li>Authentication cookies to verify user identity</li>
        <li>Security cookies to prevent fraudulent activities</li>
        <li>Load balancing cookies to distribute website traffic</li>
      </ul>

      <h3 className='text-lg font-medium mt-4'>
        2.2 Performance and Analytics Cookies
      </h3>
      <p>
        These cookies collect information on website usage, helping us improve
        performance. Examples include:
      </p>
      <ul className='list-disc pl-6'>
        <li>Google Analytics</li>
        <li>Page load speed tracking cookies</li>
        <li>Session tracking cookies</li>
      </ul>

      <h3 className='text-lg font-medium mt-4'>2.3 Functionality Cookies</h3>
      <p>
        These cookies remember user preferences for a personalized experience.
        Examples include:
      </p>
      <ul className='list-disc pl-6'>
        <li>Remembering preferred invoice templates</li>
        <li>Saving session preferences</li>
        <li>Providing localized content</li>
      </ul>

      <h3 className='text-lg font-medium mt-4'>
        2.4 Advertising and Targeting Cookies
      </h3>
      <p>
        These cookies deliver relevant ads based on browsing behavior. Examples
        include:
      </p>
      <ul className='list-disc pl-6'>
        <li>Facebook Pixel</li>
        <li>Google Ads tracking cookies</li>
        <li>Retargeting cookies</li>
      </ul>

      <h3 className='text-lg font-medium mt-4'>2.5 Social Media Cookies</h3>
      <p>
        These enable social media features such as sharing content. Examples
        include:
      </p>
      <ul className='list-disc pl-6'>
        <li>Social media login cookies</li>
        <li>Share button tracking cookies</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6'>3. How We Use Cookies</h2>
      <p>We use cookies to:</p>
      <ul className='list-disc pl-6'>
        <li>Improve website functionality and performance</li>
        <li>Analyze traffic and user behavior</li>
        <li>Enhance security and fraud prevention</li>
        <li>Provide targeted advertising</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6'>4. Third-Party Cookies</h2>
      <p>
        Some cookies are placed by third-party services for analytics,
        advertising, and social media integrations, including:
      </p>
      <ul className='list-disc pl-6'>
        <li>Google Analytics</li>
        <li>Google Ads Conversion Tracking</li>
        <li>Facebook Pixel</li>
        <li>LinkedIn Ads</li>
        <li>Stripe/PayPal for payment processing</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6'>5. Your Cookie Choices</h2>
      <p>You can manage cookies by:</p>
      <ul className='list-disc pl-6'>
        <li>Adjusting browser settings</li>
        <li>
          Using our cookie consent banner to accept or reject non-essential
          cookies
        </li>
      </ul>

      <h2 className='text-xl font-semibold mt-6'>
        6. Data Collected Through Cookies
      </h2>
      <p>Cookies may collect:</p>
      <ul className='list-disc pl-6'>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Time zone settings</li>
        <li>Clickstream data</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6'>
        7. Data Retention Period for Cookies
      </h2>
      <p>Cookies are stored as:</p>
      <ul className='list-disc pl-6'>
        <li>Session Cookies: Expire when you close the browser.</li>
        <li>
          Persistent Cookies: Stored for a set period (6 months to 2 years) or
          until manually deleted.
        </li>
      </ul>

      <h2 className='text-xl font-semibold mt-6'>8. Cookie Security</h2>
      <p>We ensure cookie security by:</p>
      <ul className='list-disc pl-6'>
        <li>Using encryption for sensitive data</li>
        <li>Implementing secure access controls</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6'>
        9. Changes to This Cookie Policy
      </h2>
      <p>
        We may update this policy periodically. Any changes will be posted here.
      </p>

      <h2 className='text-xl font-semibold mt-6'>10. Contact Us</h2>
      <p>If you have any questions, contact us at:</p>
      <ul className='list-disc pl-6'>
        <li>📧 Email: support@outreachclerk.com</li>
        <li>
          🌐 Website:{' '}
          <a
            href='https://outreachclerk.com'
            className='text-blue-600 underline'>
            https://outreachclerk.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CookiePolicyPage;
