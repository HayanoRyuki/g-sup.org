"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "AIチャットボット導入で問い合わせ対応が80%削減できた",
    company: "IT企業",
    role: "代表取締役",
  },
  {
    quote: "生成AIで営業資料作成が1/3の時間に短縮",
    company: "人材会社",
    role: "営業部長",
  },
  {
    quote: "社内ナレッジをAI化して属人化を解消できた",
    company: "製造業",
    role: "DX推進室長",
  },
  {
    quote: "AI活用で月40時間の業務効率化を実現",
    company: "コンサル会社",
    role: "COO",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20
                transform transition-all duration-500 ease-out
                hover:-translate-y-2 hover:bg-white/20 hover:shadow-xl
                ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote icon with pulse */}
              <svg
                className="w-8 h-8 text-white/40 mb-3 animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white font-medium mb-4 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium">
                    {testimonial.company}
                  </p>
                  <p className="text-white/60 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
