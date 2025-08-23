'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.currentTarget);

    formData.append('access_key', 'a7cb36ac-cf2d-440d-af50-c3e763f12873');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult('✅ Form Submitted Successfully!');
        event.currentTarget.reset();
      } else {
        console.log('Error', data);
        setResult('❌ ' + (data.message || 'Submission failed'));
      }
    } catch (err) {
      setResult('❌ Network error, please try again.');
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-20 
      bg-gradient-to-b from-white via-gray-50 to-gray-100 
      dark:from-[#0a0a0a] dark:via-[#111] dark:to-black"
    >
      {/* Heading */}
      <h4 className="text-center mb-3 text-lg font-Ovo text-gray-700 dark:text-gray-300">
        Connect with me
      </h4>
      <h2 className="text-center text-5xl font-Ovo font-bold text-gray-900 dark:text-white">
        Get in Touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo text-gray-600 dark:text-gray-400">
        I’d love to hear from you! Fill in the form below and I’ll get back to you as soon as possible.
      </p>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto p-8 rounded-2xl 
        shadow-xl border border-gray-200 dark:border-gray-700
        backdrop-blur-lg bg-white/70 dark:bg-white/5"
      >
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-600 
            bg-white/90 dark:bg-black/40 text-gray-900 dark:text-white 
            placeholder-gray-500 dark:placeholder-gray-400 
            focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-600 
            bg-white/90 dark:bg-black/40 text-gray-900 dark:text-white 
            placeholder-gray-500 dark:placeholder-gray-400 
            focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        {/* Message */}
        <textarea
          rows={6}
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 
          bg-white/90 dark:bg-black/40 text-gray-900 dark:text-white 
          placeholder-gray-500 dark:placeholder-gray-400 
          focus:ring-2 focus:ring-indigo-500 outline-none transition mb-6"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="px-8 py-3 rounded-full font-medium text-white 
          bg-gradient-to-r from-indigo-600 to-purple-600 
          hover:from-purple-600 hover:to-indigo-600 
          transition-all duration-300 shadow-md 
          flex items-center gap-2 mx-auto"
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="" className="w-4 h-4" />
        </button>

        {/* Result Message */}
        <p className="text-center mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          {result}
        </p>
      </form>
    </div>
  );
};

export default Contact;
