const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // For form data

// Sample data
const projects = [
  { name: "Portfolio Site", description: "Built with Node.js and EJS" },
  { name: "Task App", description: "A simple task manager" }
];

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/projects', (req, res) => res.render('projects', { projects }));

// Form handling
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New message from ${name} (${email}): ${message}`);
  res.render('contact-success', { name });
});

const CUSTOM_PORT = process.env.PORT || 3000;
app.listen(CUSTOM_PORT, '0.0.0.0', () => {
  console.log(`Server is running on ${CUSTOM_PORT}`);
});
