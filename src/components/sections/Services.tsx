import Image from "next/image";

const services = [
  {
    title: "営業・セールス",
    description: "AI商談分析／リードスコアリング／提案書自動生成",
    image: "/images/genre1.jpg",
  },
  {
    title: "マーケティング",
    description: "AIコンテンツ生成／広告最適化／パーソナライズ配信",
    image: "/images/genre2.jpg",
  },
  {
    title: "カスタマーサポート",
    description: "AIチャットボット／FAQ自動化／VOC分析",
    image: "/images/genre3.jpg",
  },
  {
    title: "人事・採用",
    description: "AI採用スクリーニング／1on1サポート／離職予測",
    image: "/images/genre4.jpg",
  },
  {
    title: "経理・財務",
    description: "AI経費精算／請求書処理自動化／予実管理",
    image: "/images/genre5.jpg",
  },
  {
    title: "法務・総務",
    description: "AI契約書レビュー／社内規程検索／議事録生成",
    image: "/images/genre6.jpg",
  },
  {
    title: "開発・IT",
    description: "AIコード生成／テスト自動化／ドキュメント生成",
    image: "/images/genre7.jpg",
  },
  {
    title: "経営企画",
    description: "AI経営ダッシュボード／市場分析／意思決定支援",
    image: "/images/genre8.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-medium mb-2">AI Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            部署別AIソリューション
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            各部署の業務に最適化されたAIソリューションを専門家チームが導入支援します
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image with overlay */}
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Title on image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>
              {/* Description */}
              <div className="p-4">
                <div className="w-10 h-1 bg-primary-600 rounded mb-3" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
