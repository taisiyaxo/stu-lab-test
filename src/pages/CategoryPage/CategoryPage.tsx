import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import classes from './CategoryPage.module.scss'

interface Quote {
  _id: string;
  author: string;
  content: string;
  tags: string[];
}

const CategoryPage: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const { tag } = useParams<{ tag: string }>();

  useEffect(() => {
    fetch(`https://api.quotable.io/quotes?tags=${tag}`)
      .then(response => response.json())
      .then((data: { results: Quote[] }) => setQuotes(data.results))
      .catch(error => console.error('Error fetching quotes:', error));
  }, [tag]);

  return (
    <div className={classes.categoryPage}>
      <h1>Quotes in Category {tag}</h1>
      <div className={classes.categoryPage_list}>
        {quotes.map(quote => (
          <Card key={quote._id} quote={quote.content} author={quote.author} category={quote.tags[0]}  />
        ))}
      </div>
    </div>
  );
}
export default CategoryPage;
