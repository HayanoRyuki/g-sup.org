import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "グロサプ【Growth Supporters Alliance】",
  description:
    "スタートアップ・中小企業の「事業成長」を支援する専門家ネットワーク。Webマーケティング、CRM/業務改善、人材・組織設計、資金調達・補助金など、幅広い分野の専門家が支援します。",
  keywords: [
    "スタートアップ支援",
    "中小企業支援",
    "事業成長",
    "Webマーケティング",
    "CRM",
    "業務改善",
    "人材",
    "組織設計",
    "資金調達",
    "補助金",
  ],
  openGraph: {
    title: "グロサプ【Growth Supporters Alliance】",
    description:
      "スタートアップ・中小企業の「事業成長」を支援する専門家ネットワーク",
    url: "https://g-sup.org",
    siteName: "グロサプ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "グロサプ【Growth Supporters Alliance】",
    description:
      "スタートアップ・中小企業の「事業成長」を支援する専門家ネットワーク",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
