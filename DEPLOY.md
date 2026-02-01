# g-sup.org デプロイ・ドメイン移行手順書

## 概要

このドキュメントでは、Next.jsで構築したg-supサイトをVercelにデプロイし、
既存のWordPressサイト（g-sup.org）からドメインを移行する手順を説明します。

---

## 1. 事前準備

### 1.1 必要なアカウント
- GitHub アカウント
- Vercel アカウント（GitHubと連携推奨）

### 1.2 依存関係のインストール

```bash
cd /path/to/g-sup
npm install
```

### 1.3 ローカルで動作確認

```bash
npm run dev
```

http://localhost:3000 にアクセスして動作確認

---

## 2. GitHubリポジトリの作成

### 2.1 新規リポジトリ作成

1. GitHubで新規リポジトリを作成（例: `g-sup-nextjs`）
2. プライベートリポジトリ推奨

### 2.2 コードをプッシュ

```bash
cd /path/to/g-sup
git init
git add .
git commit -m "Initial commit: Next.js migration"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/g-sup-nextjs.git
git push -u origin main
```

---

## 3. Vercelへのデプロイ

### 3.1 Vercelプロジェクト作成

1. [Vercel](https://vercel.com) にログイン
2. 「Add New...」→「Project」をクリック
3. GitHubリポジトリを選択してインポート
4. プロジェクト設定:
   - Framework Preset: Next.js
   - Root Directory: ./（デフォルト）
   - Build Command: `npm run build`
   - Output Directory: .next（デフォルト）
5. 「Deploy」をクリック

### 3.2 初回デプロイ確認

デプロイ完了後、Vercelが自動生成するURLで動作確認
（例: `g-sup-nextjs.vercel.app`）

---

## 4. ドメイン設定

### 4.1 Vercelでカスタムドメイン追加

1. Vercelプロジェクトの「Settings」→「Domains」
2. 「Add」をクリックし、`g-sup.org` を入力
3. 「Add」で追加

### 4.2 DNSレコード設定

Vercelの指示に従って、ドメイン管理画面でDNSレコードを設定します。

#### Aレコードの場合:
```
タイプ: A
名前: @
値: 76.76.21.21
```

#### CNAMEレコードの場合（www対応）:
```
タイプ: CNAME
名前: www
値: cname.vercel-dns.com
```

### 4.3 DNS設定の反映待ち

DNS設定の反映には最大48時間かかる場合があります。
Vercelダッシュボードでステータスを確認してください。

---

## 5. 移行前チェックリスト

### 5.1 コンテンツ確認
- [ ] トップページの表示確認
- [ ] 各ページ（About, Contact, Flow, Documents, Privacy Policy, News）の確認
- [ ] レスポンシブデザインの確認（モバイル、タブレット）
- [ ] リンク切れの確認

### 5.2 SEO確認
- [ ] metaタグの設定確認
- [ ] OGP画像の設定（必要に応じて追加）
- [ ] robots.txtの確認

### 5.3 機能確認
- [ ] お問い合わせフォームの動作確認
- [ ] ナビゲーションの動作確認

---

## 6. WordPressからの完全移行

### 6.1 移行タイミング

1. Vercelでの新サイトが問題なく動作することを確認
2. DNS設定を変更（VercelのIPへ向ける）
3. DNS反映後、旧WordPressサーバーを停止

### 6.2 リダイレクト設定（必要な場合）

旧URLと新URLでパスが異なる場合、`next.config.mjs` でリダイレクトを設定:

```javascript
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
}
```

---

## 7. お問い合わせフォームの実装

現在のお問い合わせフォームはフロントエンドのみです。
以下のいずれかで送信機能を実装してください:

### オプション1: Vercel + Resend（推奨）

```bash
npm install resend
```

API Routeを作成して、フォーム送信を処理。

### オプション2: 外部フォームサービス

- Formspree
- Google Forms
- HubSpot Forms

### オプション3: 既存のWordPress APIを利用

移行期間中、WordPressのREST APIを利用してフォーム送信を処理。

---

## 8. 追加で検討すべき事項

### 8.1 アナリティクス

```bash
npm install @vercel/analytics
```

### 8.2 画像最適化

実際の画像を追加する際は、Next.js の `Image` コンポーネントを使用。

### 8.3 お問い合わせフォームのバックエンド

フォーム送信機能の実装が必要です。

---

## サポート

問題が発生した場合は、以下をご確認ください:
- [Next.js ドキュメント](https://nextjs.org/docs)
- [Vercel ドキュメント](https://vercel.com/docs)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)
