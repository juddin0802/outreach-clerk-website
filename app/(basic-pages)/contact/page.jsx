'use client';
import { useState } from 'react';
import BackgroundSVG from '@/components/bg-svgs/BackgroundSVG';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { MapPin, Mail, Phone } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Contact() {
  const [senderFirstName, setSenderFirstName] = useState('');
  const [senderLastName, setSenderLastName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendContactSupportEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('/api/send-contact-support-email', {
        senderFirstName,
        senderLastName,
        senderEmail,
        emailSubject,
        emailMessage
      });
      const result = response.data;

      if (result.success) {
        toast.success(
          <div className='text-sm placeholder:text-xs font-medium text-muted-foreground'>
            Hi{' '}
            <span className='text-sm font-bold text-rose-500'>
              {senderFirstName}
            </span>
            ,<br />
            We have received your message and one of our support team members
            will contact you at{' '}
            <span className='text-sm font-bold text-rose-500'>
              {senderEmail}
            </span>{' '}
            shortly!
          </div>,
          { position: 'bottom-right' }
        );
        // Reset form fields after successful submission
        setSenderFirstName('');
        setSenderLastName('');
        setSenderEmail('');
        setEmailSubject('');
        setEmailMessage('');
      } else {
        toast.error('Failed to send your email!', {
          position: 'bottom-right'
        });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        position: 'bottom-right'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='relative py-20 px-6 md:px-12 xl:px-16'>
      {/* Background SVG */}
      <div className='absolute inset-0 pointer-events-none'>
        <BackgroundSVG />
      </div>

      <div className='relative container mx-auto px-4'>
        <h1 className='text-3xl lg:text-5xl xl:text-6xl xxl:text-[64px] leading-[1.2] lg:leading-[77px] font-urbanist font-extrabold text-slate-800 text-center mb-12'>
          Contact Us
        </h1>

        {/* Contact Form */}
        <div className='bg-[#FAF8F3] p-8 rounded-lg shadow-md mb-12 w-full max-w-[700px] mx-auto'>
          <h2 className='text-2xl font-bold text-indigo-600 mb-6 text-brand-teal'>
            Send us a Message
          </h2>
          <form className='space-y-6' onSubmit={sendContactSupportEmail}>
            <div className='flex space-x-4'>
              <div className='w-1/2'>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-slate-700 mb-1'>
                  First Name
                </label>
                <Input
                  type='text'
                  id='firstName'
                  name='firstName'
                  required
                  value={senderFirstName}
                  onChange={(e) => setSenderFirstName(e.target.value)}
                  className='focus:!ring-indigo-600'
                />
              </div>
              <div className='w-1/2'>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-slate-700 mb-1'>
                  Last Name
                </label>
                <Input
                  type='text'
                  id='lastName'
                  name='lastName'
                  required
                  value={senderLastName}
                  onChange={(e) => setSenderLastName(e.target.value)}
                  className='focus:!ring-indigo-600'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-slate-700 mb-1'>
                Email
              </label>
              <Input
                type='email'
                id='email'
                name='email'
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className='focus:!ring-indigo-600'
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-slate-700 mb-1'>
                Subject
              </label>
              <Input
                type='text'
                id='subject'
                name='subject'
                required
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className='focus:!ring-indigo-600'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-slate-700 mb-1'>
                Message
              </label>
              <Textarea
                id='message'
                name='message'
                rows={5}
                required
                value={emailMessage}
                onChange={(e) => setEmailMessage(e.target.value)}
                className='focus:!ring-indigo-600'
              />
            </div>
            {/* Align Button to the Right */}
            <div className='flex justify-end'>
              <Button
                variant='outline'
                type='submit'
                className='bg-indigo-600 hover:bg-slate-700 text-white hover:text-slate-50 font-semibold text-lg py-5 px-10'
                disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>

        {/* Office Locations */}
        <div className='flex flex-col md:flex-row items-stretch justify-center mx-auto gap-14 mb-10 w-full'>
          <div className='bg-[#FAF8F3] p-6 rounded-lg shadow-md w-[320px] h-[250px] flex flex-col justify-between'>
            <h2 className='text-2xl font-bold text-indigo-600 mb-4 text-brand-teal'>
              Dhaka Office
            </h2>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <MapPin className='size-6 text-indigo-600 mr-2 mt-1' />
                <p className='text-slate-600'>
                  Flat A-1, House 9, Road 3,
                  <br />
                  Turag City, Mirpur-1,
                  <br />
                  Dhaka-1216, Bangladesh
                </p>
              </div>
              <div className='flex items-center'>
                <Mail className='size-6 text-indigo-600 mr-2' />
                <a
                  href='mailto:support@outreachclerk.com'
                  className='text-slate-600 hover:text-brand-teal'>
                  support@outreachclerk.com
                </a>
              </div>
              <div className='flex items-center'>
                <Phone className='size-6 text-indigo-600 mr-2' />
                <a
                  href='tel:+8801869970899'
                  className='text-slate-600 hover:text-brand-teal'>
                  +8801869970899
                </a>
              </div>
            </div>
          </div>

          <div className='bg-[#FAF8F3] p-6 rounded-lg shadow-md w-[320px] h-[250px] flex flex-col justify-between'>
            <h2 className='text-2xl font-bold text-indigo-600 mb-4 text-brand-teal'>
              London Office
            </h2>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <MapPin className='size-6 text-indigo-600 mr-2 mt-1' />
                <p className='text-slate-600'>
                  189 Whitechappel road,
                  <br />
                  E1 1DN, London, UK
                </p>
              </div>
              <div className='flex items-center'>
                <Mail className='size-6 text-indigo-600 mr-2' />
                <a
                  href='mailto:support@outreachclerk.com'
                  className='text-slate-600 hover:text-brand-teal'>
                  support@outreachclerk.com
                </a>
              </div>
              <div className='flex items-center'>
                <Phone className='size-6 text-indigo-600 mr-2' />
                <a
                  href='tel:+447441446089'
                  className='text-slate-600 hover:text-brand-teal'>
                  +447441446089
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
