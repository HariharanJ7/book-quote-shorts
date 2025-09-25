# Book Quote Shorts

A responsive web application that displays short quotes from books in an engaging social media "shorts" format. Users can browse quotes with smooth transitions, like their favorites, and share inspiring passages.

![Book Quote Shorts Preview](https://via.placeholder.com/800x400?text=Book+Quote+Shorts+Preview)

## 🌟 Features

- **Interactive Quote Display**: Elegant card-based UI for browsing book quotes
- **Smooth Transitions**: Polished animations between quotes for a seamless experience
- **Multiple Navigation Methods**:
  - Button controls
  - Keyboard arrow keys
  - Touch swiping on mobile devices
- **Interactive Elements**:
  - Like button with counter
  - Share functionality
- **Autoplay Mode**: Hands-free viewing experience
- **Responsive Design**: Works beautifully on all devices
- **Clean Architecture**: Structured for maintainability and scalability

## 🚀 Live Demo

Check out the live application: [Book Quote Shorts Live Demo](https://book-quote-shorts.onrender.com)

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js with Express
- **Database**: SQLite (file-based database)
- **Deployment**: Render (free tier)

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## 🔧 Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/book-quote-shorts.git
cd book-quote-shorts
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The application will be available at http://localhost:3000

## 📁 Project Structure

```
book-quote-shorts/
│
├── server/               # Backend code
│   ├── server.js         # Main server file
│   ├── db.js             # Database connection and initialization
│   └── routes/           # API routes
│       └── quotes.js     # Quote-related endpoints
│
├── public/               # Frontend code
│   ├── index.html        # Main HTML file
│   ├── css/              # CSS styles
│   │   └── style.css     # Main stylesheet
│   ├── js/               # JavaScript files
│   │   ├── main.js       # Main application logic
│   │   └── api.js        # API client functions
│   └── assets/           # Static assets
│       └── images/       # Images
│
├── data/                 # SQLite database files
│   └── book_quotes.sqlite # Database file
│
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## 📚 Database

The application uses SQLite, a file-based database, for data storage. This simplifies deployment as it doesn't require a separate database server.

### Database Schema

```sql
-- Quotes table
CREATE TABLE IF NOT EXISTS quotes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  quote_text TEXT NOT NULL,
  author TEXT NOT NULL,
  book_title TEXT NOT NULL,
  background_color TEXT DEFAULT '#ffffff',
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User likes table (for future expansion)
CREATE TABLE IF NOT EXISTS user_likes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  quote_id INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(quote_id, user_id)
);
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/quotes | Get all quotes |
| GET    | /api/quotes/:id | Get a specific quote by ID |
| POST   | /api/quotes/:id/like | Increment the like count for a quote |

## 🧩 Core Components

### Quote Cards

Each quote is displayed in a card format with:
- The quote text
- Author name
- Book title
- Like button with counter
- Share button

### Navigation

Users can navigate between quotes using:
- Previous/Next buttons
- Keyboard arrow keys
- Touch swipe gestures on mobile
- Pagination indicators

### Autoplay

Toggle autoplay mode to automatically cycle through quotes at a comfortable reading pace.

## 🚢 Deployment

The application is deployed on [Render](https://render.com/), which offers a free tier for web services.

### Deployment Steps

1. Create a [Render](https://render.com/) account
2. Connect your GitHub repository
3. Create a new Web Service
   - Build Command: `npm install`
   - Start Command: `node server/server.js`
4. Deploy

## 🛣️ Roadmap

Future enhancements planned for the application:

- [ ] User authentication
- [ ] User-submitted quotes
- [ ] Categories and tags for quotes
- [ ] Dark mode support
- [ ] Advanced filtering options
- [ ] Favorite/bookmark functionality
- [ ] Quote image generation for easier sharing
- [ ] PWA support for offline access

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- Quote content sourced from classic and contemporary literature
- Design inspiration from modern social media platforms
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography

---

Built with ❤️ by [Your Name](https://github.com/your-username)

## 📞 Contact

If you have any questions or suggestions, feel free to reach out:

- Email: your-email@example.com
- GitHub: [@your-username](https://github.com/your-username)
- Twitter: [@your-handle](https://twitter.com/your-handle)