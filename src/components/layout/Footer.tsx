import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "グロサプについて" },
  { href: "/flow", label: "相談の流れ" },
  { href: "/privacy-policy", label: "プライバシーポリシー" },
  { href: "/documents", label: "資料一覧" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Growth Supporters Alliance. All rights reserved.</p>
          <p className="mt-1">運営：株式会社メディア・コンフィデンス</p>
        </div>
      </div>
    </footer>
  );
}
