import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  fullName: string;
  subject: string;
  email: string;
  body: string;
}

interface Errors {
  fullName: string;
  subject: string;
  email: string;
  body: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });

  const [errors, setErrors] = useState<Errors>({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let errorMessage = '';

    switch (name) {
      case 'fullName':
      case 'subject':
      case 'body':
        errorMessage = value.length < 3 ? 'Minimum 3 characters required' : '';
        break;
      case 'email':
        errorMessage = /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address';
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    setIsSubmitted(true);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-md mx-auto">
      {isSubmitted ? (
        <p className="text-green-500 text-sm mb-4">Message has been sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="body" className="block text-sm font-medium text-gray-600">
              Body:
            </label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            ></textarea>
            {errors.body && <p className="text-red-500 text-sm mt-1">{errors.body}</p>}
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
