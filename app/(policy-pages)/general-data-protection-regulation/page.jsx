import React from 'react';

const GDPRPage = () => {
  return (
    <div className='max-w-5xl mx-auto p-16 bg-zinc-50'>
      {/* Main Heading */}
      <h1 className='text-4xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-emerald-800 mb-6'>
        General Data Protection Regulation (GDPR) Compliance
      </h1>

      {/* Effective Date */}
      <p className='mb-4'>
        <strong>Effective Date:</strong> January 26, 2025
      </p>

      {/* Intro Paragraph */}
      <p className='mb-4'>
        OutreachClerk.com is committed to protecting your personal data and
        ensuring compliance with the General Data Protection Regulation (GDPR).
        This page outlines how we collect, process, and protect your personal
        information and informs you of your rights under the GDPR. If you are a
        resident of the European Economic Area (EEA), you have specific rights
        regarding your personal data, as outlined below.
      </p>

      {/* 1. Your Rights Under GDPR */}
      <h2 className='text-xl font-bold mt-8 mb-2'>1. Your Rights Under GDPR</h2>
      <p className='mb-4'>
        As a data subject under GDPR, you have the following rights regarding
        your personal data:
      </p>
      <ol className='list-decimal list-inside mb-4 space-y-2 pl-4'>
        <li>
          <strong>Right to Access</strong>
          <p className='ml-4'>
            You have the right to request access to the personal data we hold
            about you, including:
          </p>
          <ul className='list-disc list-inside ml-8 space-y-1 mt-1'>
            <li>Categories of data collected</li>
            <li>Purpose of processing</li>
            <li>Third parties with whom we have shared your data</li>
          </ul>
        </li>

        <li>
          <strong>Right to Rectification</strong>
          <p className='ml-4'>
            If your personal data is inaccurate or incomplete, you have the
            right to request correction.
          </p>
        </li>

        <li>
          <strong>Right to Erasure (Right to be Forgotten)</strong>
          <p className='ml-4'>
            You can request the deletion of your personal data when:
          </p>
          <ul className='list-disc list-inside ml-8 space-y-1 mt-1'>
            <li>
              The data is no longer necessary for the purpose it was collected
            </li>
            <li>You withdraw your consent</li>
            <li>
              You object to processing, and there is no overriding legitimate
              interest
            </li>
          </ul>
        </li>

        <li>
          <strong>Right to Restrict Processing</strong>
          <p className='ml-4'>
            You can request us to restrict processing your personal data if:
          </p>
          <ul className='list-disc list-inside ml-8 space-y-1 mt-1'>
            <li>The data is inaccurate</li>
            <li>
              Processing is unlawful, but you prefer restriction instead of
              deletion
            </li>
          </ul>
        </li>

        <li>
          <strong>Right to Data Portability</strong>
          <p className='ml-4'>
            You have the right to receive your data in a structured, commonly
            used, and machine-readable format and transfer it to another
            controller.
          </p>
        </li>

        <li>
          <strong>Right to Object</strong>
          <p className='ml-4'>
            You can object to the processing of your personal data for direct
            marketing, legitimate interest, or statistical purposes.
          </p>
        </li>

        <li>
          <strong>Right to Withdraw Consent</strong>
          <p className='ml-4'>
            If you have given consent to process your personal data, you have
            the right to withdraw it at any time.
          </p>
        </li>

        <li>
          <strong>Right to Lodge a Complaint</strong>
          <p className='ml-4'>
            If you believe your rights have been violated, you have the right to
            lodge a complaint with your local data protection authority.
          </p>
        </li>
      </ol>

      {/* 2. What Data We Collect */}
      <h2 className='text-xl font-bold mt-8 mb-2'>2. What Data We Collect</h2>
      <p className='mb-4'>
        We may collect the following categories of personal data:
      </p>
      <div className='overflow-x-auto mb-6'>
        <table className='min-w-full border-collapse border border-gray-300'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-4 py-2 border border-gray-300'>
                Data Category
              </th>
              <th className='px-4 py-2 border border-gray-300'>Examples</th>
              <th className='px-4 py-2 border border-gray-300'>
                Purpose of Collection
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='px-4 py-2 border border-gray-300'>Identifiers</td>
              <td className='px-4 py-2 border border-gray-300'>
                Name, email address, IP address
              </td>
              <td className='px-4 py-2 border border-gray-300'>
                Account creation, communication, security
              </td>
            </tr>
            <tr className='border-b'>
              <td className='px-4 py-2 border border-gray-300'>
                Account Information
              </td>
              <td className='px-4 py-2 border border-gray-300'>
                Login credentials, profile details
              </td>
              <td className='px-4 py-2 border border-gray-300'>
                Service access, user identification
              </td>
            </tr>
            <tr className='border-b'>
              <td className='px-4 py-2 border border-gray-300'>Website Data</td>
              <td className='px-4 py-2 border border-gray-300'>
                Websites added, traffic data, services offered
              </td>
              <td className='px-4 py-2 border border-gray-300'>
                Service listings and promotion
              </td>
            </tr>
            <tr className='border-b'>
              <td className='px-4 py-2 border border-gray-300'>
                Payment Information
              </td>
              <td className='px-4 py-2 border border-gray-300'>
                Billing details, transaction history
              </td>
              <td className='px-4 py-2 border border-gray-300'>
                Payment processing, fraud prevention
              </td>
            </tr>
            <tr>
              <td className='px-4 py-2 border border-gray-300'>Usage Data</td>
              <td className='px-4 py-2 border border-gray-300'>
                Log files, cookies, browsing history
              </td>
              <td className='px-4 py-2 border border-gray-300'>
                Analytics, marketing, product improvements
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. How We Collect Your Data */}
      <h2 className='text-xl font-bold mt-8 mb-2'>
        3. How We Collect Your Data
      </h2>
      <p className='mb-4'>
        We collect personal data through various methods, including:
      </p>
      <ul className='list-disc list-inside ml-4 mb-4 space-y-1'>
        <li>
          <strong>Directly from you:</strong> When you register, list a website,
          or contact us.
        </li>
        <li>
          <strong>Automatically:</strong> Through cookies, analytics tools, and
          tracking technologies.
        </li>
        <li>
          <strong>Third-party services:</strong> If you integrate services such
          as Google Analytics.
        </li>
      </ul>

      {/* 4. Legal Basis for Processing */}
      <h2 className='text-xl font-bold mt-8 mb-2'>
        4. Legal Basis for Processing
      </h2>
      <p className='mb-4'>
        Under GDPR, we rely on the following legal bases to process your
        personal data:
      </p>
      <ul className='list-disc list-inside ml-4 mb-4 space-y-1'>
        <li>
          <strong>Performance of Contract:</strong> Processing necessary to
          provide our services.
        </li>
        <li>
          <strong>Legitimate Interests:</strong> Enhancing security, fraud
          prevention, and improving our platform.
        </li>
        <li>
          <strong>Consent:</strong> When you provide explicit consent, such as
          for marketing emails.
        </li>
        <li>
          <strong>Legal Obligations:</strong> Compliance with applicable laws
          and regulations.
        </li>
      </ul>

      {/* 5. How We Use Your Data */}
      <h2 className='text-xl font-bold mt-8 mb-2'>5. How We Use Your Data</h2>
      <p className='mb-4'>
        We use your personal data for the following purposes:
      </p>
      <ul className='list-disc list-inside ml-4 mb-4 space-y-1'>
        <li>Providing and improving our services</li>
        <li>Facilitating communication between buyers and sellers</li>
        <li>Sending important updates and service notifications</li>
        <li>Complying with legal obligations</li>
        <li>Analyzing website performance and usage trends</li>
      </ul>

      {/* 6. Sharing and Disclosure of Data */}
      <h2 className='text-xl font-bold mt-8 mb-2'>
        6. Sharing and Disclosure of Data
      </h2>
      <p className='mb-4'>We may share your data with:</p>
      <ul className='list-disc list-inside ml-4 mb-4 space-y-1'>
        <li>
          <strong>Service Providers:</strong> Hosting, analytics, payment
          processors, and email providers.
        </li>
        <li>
          <strong>Buyers:</strong> If you list your website, your contact
          details may be shared with potential buyers.
        </li>
        <li>
          <strong>Legal Authorities:</strong> When required by law or legal
          process.
        </li>
      </ul>
      <p className='mb-4'>We do not sell your personal data.</p>

      {/* 7. International Data Transfers */}
      <h2 className='text-xl font-bold mt-8 mb-2'>
        7. International Data Transfers
      </h2>
      <p className='mb-4'>
        OutreachClerk.com is based in [Your Country], and your data may be
        processed in countries outside the European Economic Area (EEA). When
        transferring data internationally, we ensure appropriate safeguards,
        such as:
      </p>
      <ul className='list-disc list-inside ml-4 mb-4 space-y-1'>
        <li>Standard Contractual Clauses (SCCs)</li>
        <li>Data Protection Agreements (DPAs)</li>
        <li>Adequacy decisions by the European Commission</li>
      </ul>

      {/* 8. Data Retention */}
      <h2 className='text-xl font-bold mt-8 mb-2'>8. Data Retention</h2>
      <p className='mb-4'>
        We retain your personal data only for as long as necessary to fulfill
        the purposes outlined in this policy, including compliance with legal,
        tax, and reporting requirements. When data is no longer needed, it will
        be securely deleted or anonymized.
      </p>

      {/* 9. Data Security */}
      <h2 className='text-xl font-bold mt-8 mb-2'>9. Data Security</h2>
      <p className='mb-4'>
        We implement industry-standard security measures to protect your
        personal data, including:
      </p>
      <ul className='list-disc list-inside ml-4 mb-4 space-y-1'>
        <li>Encryption (in transit and at rest)</li>
        <li>Secure access controls and authentication</li>
        <li>Regular security audits and updates</li>
      </ul>
      <p className='mb-4'>
        However, no system is completely secure, and we cannot guarantee
        absolute protection against unauthorized access.
      </p>

      {/* 10. Cookies and Tracking Technologies */}
      <h2 className='text-xl font-bold mt-8 mb-2'>
        10. Cookies and Tracking Technologies
      </h2>
      <p className='mb-4'>
        We use cookies and similar tracking technologies to:
      </p>
      <ul className='list-disc list-inside ml-4 mb-4 space-y-1'>
        <li>Analyze website usage and improve user experience</li>
        <li>Store session preferences and login information</li>
        <li>Deliver personalized content and ads</li>
      </ul>
      <p className='mb-4'>
        You can manage your cookie preferences through your browser settings.
        For more information, please review our Cookie Policy.
      </p>

      {/* 11. Third-Party Links */}
      <h2 className='text-xl font-bold mt-8 mb-2'>11. Third-Party Links</h2>
      <p className='mb-4'>
        Our website may contain links to third-party sites. We are not
        responsible for the privacy practices of such sites, and we encourage
        you to review their privacy policies.
      </p>

      {/* 12. Children’s Privacy */}
      <h2 className='text-xl font-bold mt-8 mb-2'>12. Children’s Privacy</h2>
      <p className='mb-4'>
        Our services are not intended for individuals under the age of 18, and
        we do not knowingly collect data from minors. If we become aware that
        data has been collected, it will be promptly deleted.
      </p>

      {/* 13. Exercising Your GDPR Rights */}
      <h2 className='text-xl font-bold mt-8 mb-2'>
        13. Exercising Your GDPR Rights
      </h2>
      <p className='mb-4'>
        To exercise your GDPR rights, please contact us at:
      </p>
      <ul className='list-disc list-inside ml-4 mb-4 space-y-1'>
        <li>
          <strong>Email:</strong> support@outreachclerk.com
        </li>
      </ul>
      <p className='mb-4'>When making a request, please provide:</p>
      <ul className='list-disc list-inside ml-4 mb-4 space-y-1'>
        <li>Your full name</li>
        <li>Your registered email</li>
        <li>A description of your request</li>
      </ul>
      <p className='mb-4'>
        We will respond within 30 days, with an option to extend the response
        time if necessary.
      </p>

      {/* 14. Updates to This GDPR Policy */}
      <h2 className='text-xl font-bold mt-8 mb-2'>
        14. Updates to This GDPR Policy
      </h2>
      <p className='mb-4'>
        We may update this GDPR compliance page to reflect changes in our data
        practices or legal requirements. The revised version will be effective
        upon posting.
      </p>
      <p className='mb-4'>
        <strong>Last Updated:</strong> January 26, 2025
      </p>

      {/* 15. Contact Us */}
      <h2 className='text-xl font-bold mt-8 mb-2'>15. Contact Us</h2>
      <p className='mb-4'>
        If you have any questions regarding this GDPR compliance page or our
        privacy practices, please reach out to us:
      </p>
      <ul className='list-disc list-inside ml-4 space-y-1'>
        <li>
          <strong>Email:</strong> support@outreachclerk.com
        </li>
        <li>
          <strong>Website:</strong>{' '}
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

export default GDPRPage;
