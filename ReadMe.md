# 立ち上げ方

リポジトリよりソースコードをダウンロードし、ディレクトリに移動
```
$ git clone https://github.com/halchil/HomePage.git
$ cd HomePage
```

コンテナを立ち上げる。

```
$ docker compose build --no-cache
```

```bash
docker compose up -d
```

対象のIPアドレス・ポートへアクセス
例
```
http://xxx.xxx.xxx.xxx:3000
```

コンテナを閉じる。
```bash
docker compose down
```

コンテナ内にて、npxを使ってcssを作成する。(これは自動化したい)
```
$ npx tailwindcss -i ./src/styles.css -o ./public/css/styles.css --verbose
```
# ディレクトリ構成
app.js

# Other

[TailwindCSS](https://tailwindcss.com/docs/installation/using-vite)

Dockerfile参考
https://github.com/Hayao0819/hayao0819.com/blob/master/Dockerfile

```
docker build -t my-homepage-image .
```

参考 Docker プロキシ設定
https://zenn.dev/wsuzume/articles/f9935b47ce0b55


package.jsonを同じディレクトリに入れる。
`package.json`は、Node.jsプロジェクトにおける重要なファイルで、プロジェクトのメタデータや依存関係を管理するために使用される。
docker ネットワークの設定

# 動画公開後の手順

新しい動画を公開する際は、以下の手順でデータを追加してください：

## セミナーページの場合
1. `data/seminars.json` に新しいセミナーデータを追加
```json
{
  "id": "YouTube動画ID",
  "title": "セミナータイトル",
  "description": "セミナーの説明",
  "date": "公開日",
  "startTime": "開始時間（秒）"
}
```


## ブログページの場合
1. `data/blog.json` に新しいブログ記事データを追加
```json
{
  "title": "記事タイトル",
  "content": "記事内容",
  "date": "公開日",
  "tags": ["タグ1", "タグ2"]
}
```

追加後は、アプリケーションを再起動する必要はありません。ページをリロードすると新しいコンテンツが表示されます。

## レポートページの場合
1. `data/reports.json` に新しいレポートデータを追加
```json
{
  "id": "レポートID",
  "title": "レポートタイトル",
  "description": "レポートの説明",
  "date": "公開日",
  "filename": "ファイル名.pdf",
  "category": "カテゴリ",
  "tags": ["タグ1", "タグ2"]
}
```
2. `public/reports/` ディレクトリにPDFファイルを配置

**タグ機能**: 各レポートに複数のタグを設定できます。タグは配列形式で指定し、ページ上で丸いバッジとして表示されます。
