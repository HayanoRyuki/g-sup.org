import { Metadata } from "next";

export const metadata: Metadata = {
  title: "グロサプについて | Growth Supporters Alliance",
  description:
    "Growth Supportersは、スタートアップや中小企業の成長を支援する複数の専門企業が集い、実務レベルで連携するアライアンスです。",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          About
        </h1>

        {/* 組織概要 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-primary-600 mb-4">組織概要</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            支援会社による実践的なアライアンス
          </h3>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Growth
              Supportersは、スタートアップや中小企業の成長を支援する複数の専門企業が集い、実務レベルで連携するアライアンスです。
            </p>
            <p>
              各社が自社の得意領域に責任を持ちながら、協力体制を築くことで、単独では難しい課題にも多角的なアプローチが可能になります。
            </p>
          </div>
        </section>

        {/* 提供主体として関わる */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            各社が「提供主体」として関わる
          </h3>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              私たちは単なる紹介・仲介ではなく、
              <strong className="text-gray-900">
                それぞれが直接的な提供主体
              </strong>
              として企業支援にあたります。
            </p>
            <p>
              パートナー企業がもつ現場経験や知見を活かし、実行力のある支援を重視しています。
            </p>
          </div>
        </section>

        {/* 共創によって高い支援水準へ */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            共創によって、より高い支援水準へ
          </h3>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              アライアンス内で知見を共有し合い、クライアントの成功事例や失敗から得た学びを循環させています。
            </p>
            <p>
              特定の会社や個人に依存せず、複数の視点から支援の質を高めていきます。
            </p>
          </div>
        </section>

        {/* こんな方にご利用いただいています */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            こんな方にご利用いただいています
          </h3>
          <ul className="space-y-3">
            {[
              "事業フェーズに合った専門家と出会いたい方",
              "営業・マーケ・組織など複数の課題を抱えている経営者",
              "「誰に相談すればいいか分からない」という状態の方",
              "外部支援を検討しているが、信頼できる相手を探している方",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 運営会社 */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">運営会社</h3>
          <dl className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-medium text-gray-500 sm:w-32">会社名</dt>
              <dd className="text-gray-900">株式会社メディア・コンフィデンス</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-medium text-gray-500 sm:w-32">所在地</dt>
              <dd className="text-gray-900">東京都</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-medium text-gray-500 sm:w-32">事業内容</dt>
              <dd className="text-gray-900">
                企業支援事業、メディア事業
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
