// const express = require('express');
// const path = require('path');
// require('dotenv').config(); // Load environment variables

// const quoteRoutes = require('./routes/quotes'); // Import quote routes

// const app = express();
// const PORT = process.env.PORT || 3000; // Use port from .env or default to 3000

// // Middleware to parse JSON requests (not strictly needed for this app, but good practice)
// app.use(express.json());

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, '../public')));

// // API Routes
// app.use('/api/quotes', quoteRoutes);

// // Catch-all route to serve the main HTML file for any other requests (SPA-like behavior)
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const path = require('path');
const quotesRoutes = require('./routes/quotes');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api/quotes', quotesRoutes);

// Serve the frontend - FIXED ROUTE
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

