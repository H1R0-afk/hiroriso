const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Dynamic content
const projects = [
  { name: "Portfolio Site", description: "Built with Node.js and EJS" },
  { name: "Task App", description: "A simple task manager" }
];
const blogs = [
  { title: "Learning Node.js", content: "Started working with Express.js!" },
  { title: "Frontend Tips", content: "CSS Grid and Flexbox are amazing!" }
];

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/projects', (req, res) => res.render('projects', { projects }));
app.get('/blog', (req, res) => res.render('blog', { blogs }));
app.get('/contact', (req, res) => res.render('contact'));

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New message from ${name} (${email}): ${message}`);
  res.render('contact-success', { name });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Portfolio server running on ${PORT}`));
