import Link from "next/link";

// 静的なニュースデータ（後でCMS連携も可能）
const newsItems = [
  {
    date: "2025.05.01",
    category: "記事公開",
    title: "事業成長に効く「導入事例」の作り方とは？",
    slug: "case-study-guide",
  },
  {
    date: "2025.05.01",
    category: "実績紹介",
    title: "A社との共同支援プロジェクトが完了しました",
    slug: "project-a-complete",
  },
  {
    date: "2025.05.01",
    category: "告知",
    title: "「支援企業のための診断会」5月開催決定！",
    slug: "may-workshop",
  },
];

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          最新のお知らせ
        </h2>

        <div className="space-y-0 divide-y divide-gray-200">
          {newsItems.map((item, index) => (
            <article key={index} className="py-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <time className="text-gray-500 text-sm whitespace-nowrap">
                  {item.date}
                </time>
                <div className="flex-1">
                  <Link
                    href={`/news/${item.slug}`}
                    className="group"
                  >
                    <span className="text-sm text-primary-600 mr-2">
                      【{item.category}】
                    </span>
                    <span className="text-gray-800 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-right mt-8">
          <Link
            href="/news"
            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
          >
            ニュース一覧を見る
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
