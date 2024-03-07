// pages/contact.js
import ContactForm from '@/components/ContactForm';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;