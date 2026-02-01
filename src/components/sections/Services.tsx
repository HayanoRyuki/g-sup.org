import Image from "next/image";

const services = [
  {
    title: "営業支援",
    description: "セールススクリプト／営業資料／SFA活用",
    image: "/images/genre1.jpg",
  },
  {
    title: "広報・PR",
    description: "メディア対応、プレスリリース、採用広報",
    image: "/images/genre2.jpg",
  },
  {
    title: "ブランディング",
    description: "理念・世界観・タグライン整理／CI再構築",
    image: "/images/genre3.jpg",
  },
  {
    title: "制作・クリエイティブ",
    description: "サイト・資料・LPの刷新と改善",
    image: "/images/genre4.jpg",
  },
  {
    title: "Webマーケティング",
    description: "集客設計／広告運用／SNS運用",
    image: "/images/genre5.jpg",
  },
  {
    title: "CRM／業務改善",
    description: "顧客管理／業務フローの可視化と自動化",
    image: "/images/genre6.jpg",
  },
  {
    title: "人材・組織設計",
    description: "採用設計／組織体制／育成・定着支援",
    image: "/images/genre7.jpg",
  },
  {
    title: "資金調達・補助金",
    description: "補助金申請／融資支援／助成制度活用",
    image: "/images/genre8.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            支援ジャンル
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            各分野の専門家が、あなたの事業課題に合わせた最適なソリューションを提供します
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-40">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
