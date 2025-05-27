const express = require('express');
const path = require('path');
const fs = require('fs');
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