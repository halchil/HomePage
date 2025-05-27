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
docker compose up
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
