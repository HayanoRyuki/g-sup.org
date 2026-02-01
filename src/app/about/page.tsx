import { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | Growth Supporters Alliance",
  description:
    "株式会社メディア・コンフィデンスは、AIを業務に根付かせる「仕組み」を提供。実証済みのコードを中心に自社設計した基盤で、確かな土台をお約束します。",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary-600 font-semibold mb-2">COMPANY</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          会社概要
        </h1>

        {/* 会社情報 */}
        <section className="bg-gray-50 rounded-xl p-8 mb-16">
          <dl className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:gap-4 py-3 border-b border-gray-200">
              <dt className="font-medium text-gray-500 sm:w-32 flex-shrink-0">会社名</dt>
              <dd className="text-gray-900">
                株式会社メディア・コンフィデンス
                <span className="block text-sm text-gray-500 mt-1">Media-Confidence Inc.</span>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4 py-3 border-b border-gray-200">
              <dt className="font-medium text-gray-500 sm:w-32 flex-shrink-0">所在地</dt>
              <dd className="text-gray-900">
                〒150-0043<br />
                東京都渋谷区道玄坂1丁目10番8号<br />
                渋谷道玄坂東急ビル2F-C
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4 py-3 border-b border-gray-200">
              <dt className="font-medium text-gray-500 sm:w-32 flex-shrink-0">設立</dt>
              <dd className="text-gray-900">2015年9月14日</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4 py-3 border-b border-gray-200">
              <dt className="font-medium text-gray-500 sm:w-32 flex-shrink-0">代表者</dt>
              <dd className="text-gray-900">代表取締役　早野 龍輝</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4 py-3 border-b border-gray-200">
              <dt className="font-medium text-gray-500 sm:w-32 flex-shrink-0">事業内容</dt>
              <dd className="text-gray-900">
                <ul className="space-y-1">
                  <li>AIシステム基盤の設計・開発・提供</li>
                  <li>クラウド（AWS）を用いた業務システム開発</li>
                  <li>Webサービス・プロダクトの企画・運用</li>
                </ul>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4 py-3">
              <dt className="font-medium text-gray-500 sm:w-32 flex-shrink-0">取引銀行</dt>
              <dd className="text-gray-900">みずほ銀行 銀座中央支店</dd>
            </div>
          </dl>
        </section>

        {/* 私たちについて */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">私たちについて</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              メディア・コンフィデンスは、AIを一時的な「試行」で終わらせないために、
              業務や事業の中に深く根を張り、使い続けられる<strong className="text-gray-900">「仕組み」</strong>を提供しています。
            </p>
            <p>
              私たちが提供する基盤は、すべて実証済みのコードを中心に自社設計されています。
              理想論ではなく、実際に現場で「動くこと」を前提とした、確かな土台をお約束します。
            </p>
          </div>
        </section>

        {/* 事業の背景 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">事業の背景</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              AIを業務に活用したいというニーズが広まる一方で、多くの現場では
              「導入はしたが、使いこなせていない」「属人化して運用が止まってしまった」
              という課題に直面しています。
            </p>
            <p>
              私たちは、AIの性能そのもの以上に、それを支える<strong className="text-gray-900">「運用と改善のサイクル」</strong>こそが
              ビジネスの成果を決めると考えています。
            </p>
            <p>
              複雑なものをシンプルに整理し、誰もが迷わず使い続けられる状態へ。
              それが、私たちがAIシステム基盤にこだわり続ける理由です。
            </p>
          </div>
        </section>

        {/* 提供しているもの */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">提供しているもの</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              メディア・コンフィデンスが提供するのは、流行のツールではありません。
            </p>
            <p>
              AWSを主軸とした強固な設計のもと、貴社の業務に最適化された<strong className="text-gray-900">「専用のAIシステム基盤」</strong>を、
              管理・運用まで含めたサブスクリプション形式で提供しています。
            </p>
            <p>
              技術の進化やモデルの更新はすべて私たちが基盤側で吸収します。
              お客様は技術的な不安から解放され、本来の業務の発展に集中することができます。
            </p>
          </div>
        </section>

        {/* 私たちの姿勢 */}
        <section className="bg-primary-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">私たちの姿勢</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              AIは急速に進化しています。しかし、私たちは「最新」を追いかけることを目的にしていません。
            </p>
            <p>
              重視しているのは、今日導入した仕組みが、明日も、来年も、変わらず動き続けること。
              そして、組織の成長に合わせて自然に拡張できること。
            </p>
            <p className="text-gray-900 font-medium">
              派手さはなくとも、着実に、確かに機能し続ける。
              そんな「静かなインフラ」を、私たちは目指しています。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
