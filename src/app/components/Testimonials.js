'use client';

import { useState, useEffect } from 'react';

const testimonialsData = [
  {
    quote: "RealEstateCo. made finding our dream home a breeze! Their agents were incredibly helpful and guided us every step of the way.",
    author: "- Sarah P.",
  },
  {
    quote: "Selling our property was so easy with RealEstateCo. They handled everything efficiently and got us a great price.",
    author: "- John D.",
  },
  {
    quote: "The best real estate experience we've ever had. Professional, responsive, and truly dedicated to their clients.",
    author: "- Emily R.",
  },
  {
    quote: "Their expertise in the market is unmatched. We found our perfect investment property thanks to RealEstateCo.",
    author: "- Michael B.",
  },
  {
    quote: "Highly recommend! The team was always available to answer our questions and made the buying process stress-free.",
    author: "- Jessica L.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          What Our Clients Say
        </h3>
        <div className="relative max-w-3xl mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 bg-gray-50 p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 italic mb-6 text-center">
                  "{testimonial.quote}"
                </p>
                <p className="text-blue-600 font-bold text-lg text-center">{testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg focus:outline-none z-10"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg focus:outline-none z-10"
          >
            &#10095;
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'} focus:outline-none`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;