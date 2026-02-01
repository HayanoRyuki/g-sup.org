import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Growth Supporters Alliance",
  description: "Growth Supporters Allianceのプライバシーポリシーについてご説明します。",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          プライバシーポリシー
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            株式会社メディア・コンフィデンス（以下「当社」）は、Growth Supporters
            Alliance（以下「グロサプ」）のサービス（AIソリューション導入支援サービスを含む）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第1条（個人情報）
            </h2>
            <p className="text-gray-600">
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第2条（個人情報の収集方法）
            </h2>
            <p className="text-gray-600">
              当社は、ユーザーがサービスを利用する際に、氏名、会社名、メールアドレス、電話番号などの個人情報をお尋ねすることがあります。また、AIソリューションの導入・運用において、業務データの分析を行う場合があります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第3条（個人情報を収集・利用する目的）
            </h2>
            <p className="text-gray-600 mb-4">
              当社が個人情報を収集・利用する目的は、以下のとおりです。
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>当社サービスの提供・運営のため</li>
              <li>AIソリューションの導入支援・カスタマイズのため</li>
              <li>ユーザーからのお問い合わせに回答するため</li>
              <li>ユーザーに有益と思われる情報の提供のため</li>
              <li>サービス品質向上のための分析・改善のため</li>
              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>利用規約に違反したユーザーの特定及びご利用をお断りするため</li>
              <li>上記の利用目的に付随する目的</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第4条（AIサービスにおけるデータの取扱い）
            </h2>
            <p className="text-gray-600 mb-4">
              当社が提供するAIソリューションにおいて、以下のとおりデータを取り扱います。
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>ユーザーが入力したデータは、当該ユーザーへのサービス提供目的にのみ使用し、第三者のAIモデルの学習データとして使用することはありません</li>
              <li>AIによる処理結果は、ユーザーの同意なく外部に共有されることはありません</li>
              <li>業務データの分析においては、個人情報の匿名化・仮名化処理を適切に実施します</li>
              <li>AI処理に使用するクラウドサービスは、適切なセキュリティ認証を取得した事業者のみを利用します</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第5条（利用目的の変更）
            </h2>
            <p className="text-gray-600">
              当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第6条（個人情報の第三者提供）
            </h2>
            <p className="text-gray-600 mb-4">
              当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              <li>AIサービス提供に必要な範囲で、業務委託先に提供する場合（この場合、適切な監督を行います）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第7条（安全管理措置）
            </h2>
            <p className="text-gray-600 mb-4">
              当社は、個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために、以下の措置を講じます。
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>個人情報保護に関する規程の整備・運用</li>
              <li>従業者への定期的な教育・研修の実施</li>
              <li>個人情報を取り扱う区域の入退室管理</li>
              <li>アクセス制御、不正アクセス防止措置の実施</li>
              <li>データの暗号化、通信経路の暗号化</li>
              <li>AIシステムにおけるアクセスログの取得・監視</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第8条（個人情報の開示・訂正・削除）
            </h2>
            <p className="text-gray-600">
              当社は、本人から個人情報の開示、訂正、削除を求められたときは、本人確認を行った上で、遅滞なく対応します。AIサービスにおいて処理されたデータについても、ユーザーの求めに応じて削除いたします。開示等の請求は、お問い合わせフォームよりご連絡ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第9条（プライバシーポリシーの変更）
            </h2>
            <p className="text-gray-600">
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第10条（お問い合わせ窓口）
            </h2>
            <p className="text-gray-600">
              本ポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
            </p>
          </section>

          <p className="text-gray-500 text-sm mt-12">
            制定日：2026年2月1日
            <br />
            最終改定日：2026年2月1日
          </p>
        </div>
      </div>
    </div>
  );
}
