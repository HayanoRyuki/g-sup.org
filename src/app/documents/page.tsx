import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "資料一覧 | Growth Supporters Alliance",
  description: "グロサプのサービス資料や導入事例などの資料をダウンロードいただけます。",
};

const documents = [
  {
    title: "グロサプ サービス資料",
    description: "Growth Supporters Allianceの概要、支援サービス、ご利用の流れをまとめた資料です。",
    type: "PDF",
    pages: "12ページ",
  },
  {
    title: "導入事例集",
    description: "これまでに支援させていただいた企業様の事例をご紹介しています。",
    type: "PDF",
    pages: "8ページ",
  },
  {
    title: "支援メニュー詳細",
    description: "各支援ジャンルの詳細内容と料金目安をまとめた資料です。",
    type: "PDF",
    pages: "16ページ",
  },
];

export default function DocumentsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          資料一覧
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          グロサプのサービス資料や導入事例などの資料をダウンロードいただけます。
        </p>

        <div className="space-y-6 mb-12">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <svg
                      className="w-8 h-8 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8.5 18v-1h2v-3h-2v-1h3v4h2v1h-5z" />
                    </svg>
                    <h2 className="text-xl font-bold text-gray-900">
                      {doc.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-2">{doc.description}</p>
                  <p className="text-sm text-gray-500">
                    {doc.type} / {doc.pages}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                >
                  資料請求
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-600 text-sm">
            ※資料のダウンロードにはお問い合わせフォームからの資料請求が必要です。
            <br />
            ご記入いただいたメールアドレス宛に資料をお送りいたします。
          </p>
        </div>
      </div>
    </div>
  );
}
