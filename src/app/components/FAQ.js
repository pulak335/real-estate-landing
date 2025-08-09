'use client';

import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What types of properties do you offer?",
      answer: "We offer a wide range of properties including single-family homes, condos, townhouses, and commercial properties. Our listings are updated daily.",
    },
    {
      question: "How can I schedule a viewing?",
      answer: "You can schedule a viewing directly from the property listing page by clicking the 'Schedule a Tour' button, or by contacting our agents.",
    },
    {
      question: "Do you provide financing options?",
      answer: "While we don't directly provide financing, we can connect you with trusted mortgage lenders and financial advisors who can assist you.",
    },
    {
      question: "What is the process for selling a property?",
      answer: "Our selling process involves a free home valuation, professional photography, extensive marketing, and expert negotiation to ensure you get the best price.",
    },
    {
      question: "How do I find a reliable real estate agent?",
      answer: "Our platform features a curated list of experienced and highly-rated real estate agents. You can browse their profiles, read reviews, and contact them directly.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h3>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;