import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ニュース一覧 | Growth Supporters Alliance",
  description: "グロサプの最新ニュース、お知らせ、実績紹介などをご覧いただけます。",
};

const newsItems = [
  {
    date: "2025.05.01",
    category: "記事公開",
    title: "事業成長に効く「導入事例」の作り方とは？",
    slug: "case-study-guide",
    excerpt:
      "導入事例は、見込み顧客の信頼を獲得し、成約率を高める強力なコンテンツです。本記事では、効果的な導入事例の作り方をご紹介します。",
  },
  {
    date: "2025.05.01",
    category: "実績紹介",
    title: "A社との共同支援プロジェクトが完了しました",
    slug: "project-a-complete",
    excerpt:
      "BtoB SaaS企業A社様の営業体制構築支援プロジェクトが完了しました。6ヶ月間の支援を通じて、営業プロセスの標準化と成約率向上を実現しました。",
  },
  {
    date: "2025.05.01",
    category: "告知",
    title: "「支援企業のための診断会」5月開催決定！",
    slug: "may-workshop",
    excerpt:
      "スタートアップ・中小企業の経営者様向けに、無料の診断会を開催します。現在の課題を整理し、最適な支援の方向性を一緒に考えます。",
  },
  {
    date: "2025.04.15",
    category: "お知らせ",
    title: "新パートナー企業が参画しました",
    slug: "new-partner",
    excerpt:
      "この度、人材・組織設計分野の専門企業が新たにアライアンスに参画しました。より幅広い支援が可能になります。",
  },
  {
    date: "2025.04.01",
    category: "実績紹介",
    title: "B社のWebマーケティング支援事例",
    slug: "project-b-marketing",
    excerpt:
      "EC事業を展開するB社様のWebマーケティング支援事例をご紹介。広告運用の最適化とSEO施策により、売上150%増を達成しました。",
  },
];

export default function NewsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          ニュース一覧
        </h1>

        <div className="space-y-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="border-b border-gray-200 pb-8 last:border-0"
            >
              <div className="flex items-center gap-4 mb-3">
                <time className="text-gray-500 text-sm">{item.date}</time>
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <Link href={`/news/${item.slug}`} className="group">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 line-clamp-2">{item.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
