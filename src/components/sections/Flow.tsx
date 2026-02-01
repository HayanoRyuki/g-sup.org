const steps = [
  {
    number: "01",
    title: "相談申込み",
    description: "フォームから気軽にご相談ください。匿名もOKです。",
  },
  {
    number: "02",
    title: "ヒアリングと整理",
    description: "主宰者がZoom等で状況を丁寧にヒアリングします。",
  },
  {
    number: "03",
    title: "必要に応じてご紹介",
    description: "ご予算や課題に応じた支援者をご紹介します。",
  },
  {
    number: "04",
    title: "支援スタート",
    description: "合意のもとで、支援者と実務フェーズに進みます。",
  },
];

export default function Flow() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ご相談から支援までの流れ
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 relative"
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-primary-600 text-center mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          ※しつこい営業・無理な提案は一切ありません。
        </p>
      </div>
    </section>
  );
}
