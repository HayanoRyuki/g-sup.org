import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[560px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Growth Supporters Alliance"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
            <span className="whitespace-nowrap">スタートアップ・中小企業の</span>
            <br />
            <span className="text-primary-600">「事業成長」</span>を支援する
            <br />
            専門家ネットワーク
          </h1>
          <p className="text-gray-700 text-lg mb-8 max-w-xl">
            各分野の専門家が、あなたの事業課題に合わせた最適なソリューションを提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              今すぐ無料で相談する
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-medium rounded-lg transition-colors bg-white/80 backdrop-blur-sm"
            >
              支援ジャンルを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
