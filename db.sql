CREATE DATABASE IF NOT EXISTS book_shorts;

USE book_shorts;

DROP TABLE IF EXISTS quotes;

CREATE TABLE quotes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quote_text TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    book_title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO quotes (quote_text, author, book_title) VALUES
('The only way to do great work is to love what you do.', 'Steve Jobs', 'Steve Jobs'),
('It is our choices, Harry, that show what we truly are, far more than our abilities.', 'J.K. Rowling', 'Harry Potter and the Chamber of Secrets'),
('To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', 'Ralph Waldo Emerson', 'Self-Reliance'),
('The unexamined life is not worth living.', 'Socrates', 'Apology'),
('The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt', 'You Learn by Living: Eleven Keys for a More Fulfilling Life'),
('All that is gold does not glitter, not all those who wander are lost; the old that is strong does not wither, deep roots are not frozen.', 'J.R.R. Tolkien', 'The Fellowship of the Ring'),
('Two things are infinite: the universe and human stupidity; and I''m not sure about the universe.', 'Albert Einstein', 'Relativity: The Special and the General Theory'),
('The mind is everything. What you think you become.', 'Buddha', 'Dhammapada'),
('Be the change that you wish to see in the world.', 'Mahatma Gandhi', 'An Autobiography: The Story of My Experiments with Truth'),
('There is no greater agony than bearing an untold story inside you.', 'Maya Angelou', 'I Know Why the Caged Bird Sings');