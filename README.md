# Color Challenge Game

A fun and interactive web-based game that tests your ability to match colors using hex values. The game challenges players to identify colors based on their hexadecimal codes.

## How to Play

1. Start the game and wait for the 3-second countdown
2. You'll see three color swatches and a target hex value
3. Click on the swatch that you think matches the target hex value
4. After your guess:
   - The correct answer will be highlighted
   - All hex values will be revealed
   - You can start a new round with the "Play Again" button

## Features

- Three random color swatches
- Target hex value display
- Immediate feedback on guesses
- Hex value reveal after answering
- Countdown before showing colors
- Hover effects and animations
- Correct swatch highlighting
- Responsive design

## Technical Details

The game is built using:
- React.js
- CSS3 with animations
- Modern JavaScript (ES6+)

## AI Reflection

### Prompts I Asked AI
1. "How can I implement a countdown timer in React that shows a message before starting the game?"
2. "What's the best way to highlight the correct swatch after a wrong guess?"
3. "How can I improve the visual feedback and animations for better user experience?"

### How AI Helped
The AI was particularly helpful in debugging the countdown implementation and suggesting the animation patterns for visual feedback. It also helped optimize the state management for tracking selected colors and game results.

### What I Figured Out
I independently implemented the hex value generation logic and the color comparison system, which helped me better understand how hexadecimal color codes work and how to manipulate them in JavaScript.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to play the game 