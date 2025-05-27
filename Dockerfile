# ベースイメージとしてNode.jsを使用
FROM node:14

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピー
COPY package.json ./

# 依存関係をインストール
RUN npm install

# Tailwind CSSの設定ファイルを生成（初回のみ必要）
# RUN npx tailwindcss init

# アプリケーションコードをコピー
COPY . .

# Tailwind CSSをビルド
#RUN npm run build:css
# 必ず public/css ディレクトリを作る
RUN mkdir -p ./public/css && npm run build:css

# アプリケーションを起動する
CMD ["node", "app.js"]

# アプリケーションがリッスンするポートを公開
EXPOSE 3000
