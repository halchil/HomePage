const express = require('express');
const path = require('path');
const fs = require('fs');

const videosPath = path.join(__dirname, 'data', 'videos.json');
const videos = JSON.parse(fs.readFileSync(videosPath, 'utf-8'));

//const marked = require('marked');
const { marked } = require('marked');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// ルートハンドラ

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', message: 'Welcome to my website!' });
});

// /Engineering ページ
app.get('/engineering', (req, res) => {
  res.render('engineering', {
    title: 'Engineering',
    message: 'Engineering Page'
  });
});

// /about ページ
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    message: 'About Page'
  });
});

// /music ページ
app.get('/music', (req, res) => {

  // JSONファイル読み込み
  const videosPath = path.join(__dirname, 'data', 'videos.json');
  const videos = JSON.parse(fs.readFileSync(videosPath, 'utf-8'));

  res.render('music', {
    title: 'Music',
    message: 'Music Page',
    videos: videos
  });
});

// ブログ一覧ページ

app.get('/blog', (req, res) => {
  const postsDir = path.join(__dirname, 'content');
  fs.readdir(postsDir, (err, files) => {
    if (err) {
      return res.status(500).send('Error reading posts directory');
    }

    const posts = files.map(file => {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const htmlContent = marked.parse(content); // 修正: marked.parse を使用

      return { title: file.replace('.md', ''), content: htmlContent };

    });

    res.render('blog', { posts });
  });
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});