import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import classes from './RandomPage.module.scss';
interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[]; 
}

const RandomPage: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data: Quote = await response.json();
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      setQuote(data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleRefresh = () => {
    fetchQuote();
  };

  return (
    <div className={classes.randomPage}>
      {quote && (
        <Card
          key={quote._id}
          quote={quote.content}
          author={quote.author}
          category={quote.tags[0]}
        />
      )}
      <button className={classes.randomPage_button} onClick={handleRefresh}>Refresh</button>
    </div>
  );
}

export default RandomPage;
