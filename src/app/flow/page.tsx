import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用の流れ | Growth Supporters Alliance",
  description:
    "グロサプのご相談から支援開始までの流れをご説明します。まずは無料相談からお気軽にどうぞ。",
};

const steps = [
  {
    number: "01",
    title: "相談申込み",
    description:
      "まずはお問い合わせフォームからご連絡ください。現在お困りのことや、支援を受けたい領域などを簡単にお書きください。匿名でのご相談も可能です。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "ヒアリングと整理",
    description:
      "主宰者がZoom等で状況を丁寧にヒアリングします。お話を伺いながら、課題の整理と最適な支援の方向性を一緒に考えます。この段階で費用は一切かかりません。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "必要に応じてご紹介",
    description:
      "ご予算や課題に応じた支援者をご紹介します。アライアンス内の専門家から、最適なパートナーをマッチングします。紹介料等は発生しません。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "支援スタート",
    description:
      "合意のもとで、支援者と実務フェーズに進みます。支援内容・期間・費用等は、支援者との直接のやり取りで決定します。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export default function FlowPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          利用の流れ
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          グロサプのご相談から支援開始までの流れをご説明します。
        </p>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex gap-6 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 top-16 w-0.5 h-full bg-gray-200" />
              )}

              {/* Step number */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary-600">{step.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-blue-50 rounded-xl p-6 mb-12">
          <p className="text-gray-700">
            <span className="font-medium">※</span>{" "}
            しつこい営業・無理な提案は一切ありません。お気軽にご相談ください。
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg"
          >
            今すぐ無料で相談する
          </Link>
        </div>
      </div>
    </div>
  );
}
