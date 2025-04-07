const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Matrix", year: 1999 }
];

let reviews = [];

app.get('/', (req, res) => res.render('index', { movies }));

app.get('/review/:movieId', (req, res) => {
  const movie = movies.find(m => m.id == req.params.movieId);
  res.render('review', { movie });
});

app.post('/submit-review', (req, res) => {
  const { movieId, reviewer, content } = req.body;
  reviews.push({ movieId: parseInt(movieId), reviewer, content });
  res.redirect('/reviews');
});

app.get('/reviews', (req, res) => {
  res.render('reviews', { reviews, movies });
});

app.listen(3000, () => console.log('Movie Review App running on port 3000'));

