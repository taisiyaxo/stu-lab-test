import React, { useState, useEffect } from 'react';
import classes from './Card.module.scss';
import likeEmpty from '../../assets/notLikedIcon.svg';
import likeFilled from '../../assets/likedIcon.svg'

interface CardProps {
  quote: string;
  author: string;
  category: string; 
}

const Card: React.FC<CardProps> = ({ quote, author, category }) => {
  const [isLiked, setIsLiked] = useState(false); 

  useEffect(() => {
    const liked = localStorage.getItem('liked_' + quote); 
    if (liked === 'true') {
      setIsLiked(true);
    }
  }, [quote]);

  const handleLike = () => {
    setIsLiked(prevLiked => {
      const newLiked = !prevLiked;
      localStorage.setItem('liked_' + quote, newLiked.toString());
      return newLiked;
    });
  };

  return (
    <div className={classes.card}>
      <p>{quote}</p>
      <p>- {author}</p>
      <div className={classes.card_like}>
      <button className={classes.like_button} onClick={handleLike}>
        <img src={isLiked ? likeFilled : likeEmpty} alt="Like" />
      </button>
      <p>Category: {category}</p> 
      </div>
    </div>
  );
}

export default Card;
