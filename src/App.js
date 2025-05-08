import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState('');
  const [result, setResult] = useState('');
  const [showHex, setShowHex] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [selectedColor, setSelectedColor] = useState(null);

  // Generate random hex color
  const generateRandomColor = () => {
    const randomHex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${randomHex()}${randomHex()}${randomHex()}`;
  };

  // Generate new game
  const generateNewGame = () => {
    const newColors = Array(3).fill().map(() => generateRandomColor());
    setColors(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * 3)]);
    setResult('');
    setShowHex(false);
    setCountdown(3);
    setSelectedColor(null);
  };

  // Handle color click
  const handleColorClick = (clickedColor) => {
    if (result) return; // Don't allow clicks after a guess
    
    setSelectedColor(clickedColor);
    
    if (clickedColor === targetColor) {
      setResult('Correct!');
    } else {
      setResult('Incorrect!');
    }
    setShowHex(true);
  };

  // Initialize game
  useEffect(() => {
    generateNewGame();
  }, []);

  // Countdown effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="App">
      <h1>Color Challenge</h1>
      
      {countdown > 0 ? (
        <div className="countdown">
          <h2>Get Ready!</h2>
          <p>{countdown}</p>
        </div>
      ) : (
        <>
          <div className="color-display">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-swatch ${
                  showHex && color === targetColor ? 'correct-swatch' : ''
                } ${selectedColor === color ? 'selected-swatch' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              >
                {showHex && <span className="hex-value">{color}</span>}
              </div>
            ))}
          </div>

          <div className="target-color">
            <h2>Find this color:</h2>
            <div className="target-swatch">
              <span className="hex-value">{targetColor}</span>
            </div>
          </div>

          {result && (
            <div className={`result ${result.toLowerCase().includes('correct') ? 'correct' : 'incorrect'}`}>
              {result}
            </div>
          )}

          <button className="reset-button" onClick={generateNewGame}>
            Play Again
          </button>
        </>
      )}
    </div>
  );
}

export default App;
