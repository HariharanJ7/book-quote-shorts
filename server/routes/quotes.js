const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the database connection pool

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, quote_text, author, book_title FROM quotes ORDER BY id');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching quotes:', error);
        res.status(500).json({ message: 'Error fetching quotes', error: error.message });
    }
});

module.exports = router;

