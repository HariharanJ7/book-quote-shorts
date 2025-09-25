document.addEventListener('DOMContentLoaded', () => {
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-author');
    const bookTitleElement = document.getElementById('book-title');
    const quoteContainer = document.getElementById('quote-container');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const likeButton = document.querySelector('.like-button');
    const shareButton = document.querySelector('.share-button');

    let quotes = [];
    let currentIndex = 0;
    let autoPlayInterval;
    const transitionDuration = 400; // Match CSS transition duration

    async function fetchQuotes() {
        try {
            const response = await fetch('/api/quotes');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            quotes = await response.json();
            if (quotes.length > 0) {
                displayQuote(currentIndex);
                // startAutoPlay(); // Uncomment to enable auto-play
            } else {
                quoteTextElement.textContent = 'No quotes available.';
                quoteAuthorElement.textContent = '';
                bookTitleElement.textContent = '';
            }
        } catch (error) {
            console.error('Error fetching quotes:', error);
            quoteTextElement.textContent = 'Failed to load quotes. Please try again later.';
            quoteAuthorElement.textContent = '';
            bookTitleElement.textContent = '';
        }
    }

    /**
     * Displays a quote with a smooth transition effect.
     * @param {number} index The index of the quote to display.
     */
    function displayQuote(index) {
        if (quotes.length === 0) return;

        // Ensure index wraps around
        currentIndex = (index + quotes.length) % quotes.length;
        const currentQuote = quotes[currentIndex];

        // Apply fade-out and slide-up effect
        quoteContainer.classList.add('fade-out');

        setTimeout(() => {
            // Update content after fade-out
            quoteTextElement.textContent = `"${currentQuote.quote_text}"`;
            quoteAuthorElement.textContent = `- ${currentQuote.author}`;
            bookTitleElement.textContent = `"${currentQuote.book_title}"`;

            // Remove fade-out and apply fade-in (slide-down)
            quoteContainer.classList.remove('fade-out');
            quoteContainer.classList.add('fade-in');

            setTimeout(() => {
                // Remove fade-in after transition completes to reset for next transition
                quoteContainer.classList.remove('fade-in');
            }, transitionDuration);
        }, transitionDuration); // Duration of the fade-out
    }

    /**
     * Navigates to the next quote.
     */
    function nextQuote() {
        // clearInterval(autoPlayInterval); // Stop autoplay on manual navigation
        displayQuote(currentIndex + 1);
        // startAutoPlay(); // Restart autoplay
    }

    /**
     * Navigates to the previous quote.
     */
    function prevQuote() {
        // clearInterval(autoPlayInterval); // Stop autoplay on manual navigation
        displayQuote(currentIndex - 1);
        // startAutoPlay(); // Restart autoplay
    }

    /**
     * Starts the auto-play functionality.
     */
    function startAutoPlay() {
        // Clear any existing interval to prevent multiple intervals running
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextQuote, 8000); // Change quote every 8 seconds
    }

    /**
     * Event handler for the like button.
     * (Basic functionality: just logs to console for this MVP)
     */
    function handleLike() {
        const currentQuote = quotes[currentIndex];
        if (currentQuote) {
            console.log(`Liked quote: "${currentQuote.quote_text}" by ${currentQuote.author}`);
            // In a real app, you'd send this to a backend API
            alert('You liked this quote! (Functionality not fully implemented)');
        }
    }

    /**
     * Event handler for the share button.
     * (Basic functionality: just logs to console or uses Web Share API)
     */
    function handleShare() {
        const currentQuote = quotes[currentIndex];
        if (currentQuote) {
            const shareText = `"${currentQuote.quote_text}" - ${currentQuote.author} (${currentQuote.book_title})`;
            const shareUrl = window.location.href; // Share the current page URL

            if (navigator.share) {
                // Use Web Share API if available
                navigator.share({
                    title: 'Book Quote Shorts',
                    text: shareText,
                    url: shareUrl
                }).then(() => {
                    console.log('Quote shared successfully!');
                }).catch((error) => {
                    console.error('Error sharing:', error);
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                alert(`Share this quote:\n${shareText}\nLink: ${shareUrl}\n(Copied to clipboard - manually paste)`);
                navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
                    console.log('Quote and URL copied to clipboard!');
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
        }
    }

    // Add event listeners
    nextButton.addEventListener('click', nextQuote);
    prevButton.addEventListener('click', prevQuote);
    likeButton.addEventListener('click', handleLike);
    shareButton.addEventListener('click', handleShare);

    // Initial fetch of quotes
    fetchQuotes();
});
