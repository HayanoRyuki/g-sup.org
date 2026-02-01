"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "営業が属人化していたが仕組み化できた",
    company: "BtoB SaaS",
    role: "Aさん",
  },
  {
    quote: "プロと繋がって初期戦略が明確に",
    company: "C社",
    role: "経営企画",
  },
  {
    quote: "チーム全体の理解が深まった",
    company: "D社",
    role: "人材責任者",
  },
  {
    quote: "補助金採択に繋がったのが大きい",
    company: "E社",
    role: "CFO",
  },
  {
    quote: "Webマーケの知見が社内に蓄積された",
    company: "F社",
    role: "マーケ部長",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 4)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
                >
                  <div className="bg-gray-50 rounded-xl p-6 h-full">
                    <p className="text-gray-800 font-medium mb-4">
                      「{testimonial.quote}」
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-primary-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          {testimonial.company} {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary-600" : "bg-gray-300"
                }`}
                aria-label={`スライド ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
