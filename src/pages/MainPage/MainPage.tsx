import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import classes from './MainPage.module.scss';
interface Quote {
  _id: string;
  author: string;
  content: string;  
  tags: string[]; 
}

const MainPage: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quotable.io/quotes/random?limit=10');
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error('No data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.mainPage}>
      {quotes.map((quote) => (
        <Card
          key={quote._id}
          quote={quote.content}
          author={quote.author}
          category={quote.tags[0]} 
        />
      ))}
    </div>
  );
};

export default MainPage;
