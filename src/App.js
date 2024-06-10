import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [selectedButton, setSelectedButton] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
    setSelectedButton('fetch');
  };

  const saveQuote = () => {
    if (quote && !savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
    setSelectedButton('save');
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    
      
      <div className="App">
      
      <h1>Ron Swanson Quotes</h1>
      <div className="quote-card">
        <p>{quote}</p>
        <button
          style={{ backgroundColor: selectedButton === 'save' ? '#831f4d' : '#281743' }}
          onClick={saveQuote}
        >
          Save to List
        </button>
        <button
          style={{ backgroundColor: selectedButton === 'fetch' ? '#831f4d' : '#281743' }}
          onClick={fetchQuote}
        >
          Get New Quote
        </button>
      </div>
      <h2>Saved Quotes</h2>
      <div className="saved-quotes">
        {savedQuotes.map((q, index) => (
          <div key={index} className="quote-card">
            <p>{q}</p>
          </div>
        ))}
      </div>
    </div>
    
    
  );
}

export default App;


