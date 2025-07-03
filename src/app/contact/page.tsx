// src/app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactFormData } from '@/types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    feedback: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', feedback: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0b472b] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cormorant text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="font-open-sans text-xl text-white max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with us for any inquiries about our luxury timepieces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-[#ffffff] rounded-lg shadow-lg p-8">
            <h2 className="font-cormorant text-3xl font-bold text-jet-500 mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-10">
                <div className="w-12 h-12 bg-[#db6969] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-2">
                    Email
                  </h3>
                  <p className="font-open-sans text-jet-600">
                    info@divittorioelena.com
                  </p>
                  <p className="font-open-sans text-jet-600">
                    support@divittorioelena.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-10">
                <div className="w-12 h-12 bg-[#3c6e71] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-2">
                    Phone
                  </h3>
                  <p className="font-open-sans text-jet-600">
                    +254 711 1234567
                  </p>
                  <p className="font-open-sans text-jet-600">
                    +254 722 9876543
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-10">
                <div className="w-12 h-12 bg-[#A1BE95] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-2">
                    Address
                  </h3>
                  <p className="font-open-sans text-jet-600">
                    123 Luxury Avenue<br />
                    Diamond District<br />
                    Nairobi, 7990-00200<br />
                    Kenya
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-0 p-6 bg-platinum-100 rounded-lg">
              <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 font-open-sans text-jet-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-cormorant text-3xl font-bold text-shadow-black mb-8">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-jet-500 mb-2">
                  Thank You!
                </h3>
                <p className="font-open-sans text-jet-600">
                  Your message has been sent successfully. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-cormorant text-lg font-semibold text-jet-500 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-platinum-400 rounded-lg focus:ring-2 focus:ring-caribbean_current-500 focus:border-transparent transition-colors duration-200 font-open-sans"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-cormorant text-lg font-semibold text-jet-500 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-platinum-400 rounded-lg focus:ring-2 focus:ring-caribbean_current-500 focus:border-transparent transition-colors duration-200 font-open-sans"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Feedback */}
                <div>
                  <label htmlFor="feedback" className="block font-cormorant text-lg font-semibold text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-platinum-400 rounded-lg focus:ring-2 focus:ring-caribbean_current-500 focus:border-transparent transition-colors duration-200 font-open-sans resize-vertical"
                    placeholder="Tell us about your inquiry, feedback, or how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#3c6e71] hover:bg-[#000000] text-white font-cormorant text-lg font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h2 className="font-cormorant text-3xl font-bold text-white mb-6">
            Visit Our Showroom
          </h2>
          <p className="font-open-sans text-lg text-white max-w-3xl mx-auto mb-8">
            Experience our luxury timepieces in person at our flagship showroom in the heart of Nairobi. Our expert consultants are available to help you find the perfect watch for any occasion!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#bbe2d0] rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-float">
              <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-2">
                Expert Consultation
              </h3>
              <p className="font-open-sans text-jet-600">
                Personalized service from certified watch specialists.
              </p>
            </div>
            <div className="bg-[#bbe2d0] rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-float delay-100">
              <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-2">
                Repair Services
              </h3>
              <p className="font-open-sans text-jet-600">
                Professional maintenance and repair for all luxury brands.
              </p>
            </div>
            <div className="bg-[#bbe2d0] rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-float delay-200">
              <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-2">
                Custom Orders
              </h3>
              <p className="font-open-sans text-jet-600">
                Bespoke timepieces crafted to your exact specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;