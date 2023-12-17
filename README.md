## プロジェクトのタイトル

Manga Study

https://manga-kousatu-net.vercel.app/

## プロジェクトの概要説明

Manga Study では、漫画の考察などを自由に投稿・閲覧できる web サイトです。

2022 年の 6 月頃から制作を始めました。

実装した機能としては、記事投稿・編集・削除機能と会員登録・編集・削除機能を実装しています。

## 使用言語、環境

### フロント

- [Next.js](https://nextjs.org/blog/next-13) 14
- [React](https://ja.reactjs.org/) 18.0.26
- [typescript](https://www.typescriptlang.org/) 4.9.4
- [Storybook](https://storybook.js.org/)

### バックエンド

-[Cloud Firestore](https://firebase.google.com/docs/firestore)

### ホスティング

- Vercel
- AWS

### 認証

- Firebase Authentication

### テスト関連

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/ja/)

## 使い方

git clone

npm install

npm run dev

## デプロイ方法

git add .
git commit -m " "
git push origin main

### こだわりポイント

・firestore でクラッド処理を行なっている点

・ユーザーの名前変更やプロフ画像の変更

### 今後の計画

・全ファイルを TypeScript 化する

・投稿の個別ページの作成

・投稿検索機能実装
