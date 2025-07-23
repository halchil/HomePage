const express = require('express');
const path = require('path');
const fs = require('fs');

// const videosPath = path.join(__dirname, 'data', 'videos.json');
// const videos = JSON.parse(fs.readFileSync(videosPath, 'utf-8'));

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
/*
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    message: 'About Page'
  });
});
*/

// /Podcast ページ
app.get('/podcast', (req, res) => {
  res.render('podcast', {
    title: 'Podcast',
    message: 'Podcast Page'
  });
});

// /seminar ページ
app.get('/seminar', (req, res) => {
  const seminarsPath = path.join(__dirname, 'data', 'seminars.json');
  fs.readFile(seminarsPath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading seminars');
    }

    const seminars = JSON.parse(data);

    res.render('seminar', {
      title: 'Seminar',
      message: 'Seminar Page',
      seminars: seminars
    });
  });
});

// /report ページ
app.get('/report', (req, res) => {
  const reportsPath = path.join(__dirname, 'data', 'reports.json');
  fs.readFile(reportsPath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading reports');
    }

    const reports = JSON.parse(data);

    res.render('report', {
      title: 'Report',
      message: 'Report Page',
      reports: reports
    });
  });
});

// /music ページ
app.get('/music', (req, res) => {
  const videosPath = path.join(__dirname, 'data', 'videos.json');
  fs.readFile(videosPath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading videos');
    }

    const videos = JSON.parse(data);

    res.render('music', {
      title: 'Music',
      message: 'Music Page',
      videos: videos
    });
  });
});


// advice ページ
/*
app.get('/advice', (req, res) => {
  const advicePath = path.join(__dirname, 'data', 'advice.json');
  fs.readFile(advicePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading advice data');
    }
    let adviceList = JSON.parse(data);
    res.render('advice', {
      title: 'Advice',
      adviceList
    });
  });
});
*/


// ブログ一覧ページ

// /blog 一覧ページ（jsonで管理）

app.get('/blog', (req, res) => {
  const blogPath = path.join(__dirname, 'data', 'blog.json');
  fs.readFile(blogPath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading blog');
    }

    let posts = JSON.parse(data);
    const tagFilter = req.query.tag;

    // タグでフィルタリング
    if (tagFilter) {
      posts = posts.filter(post => post.tags && post.tags.includes(tagFilter));
    }

    // 全タグ＋件数を集計
    const tagCounts = {};
    JSON.parse(data).forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
      }
    });

    res.render('blog', {
      title: 'Blog',
      posts,
      tagCounts,
      currentTag: tagFilter || null
    });
  });
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});