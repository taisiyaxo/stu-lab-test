import classes from "./ThemesPage.module.scss";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

interface Tag {
  _id: string;
  name: string;
}

const ThemesPage: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    fetch('https://api.quotable.io/tags')
      .then(response => response.json())
      .then((data: Tag[]) => setTags(data))
      .catch(error => console.error('Error fetching tags:', error));
  }, []);

  return (
    <div className={classes.tagList}>
      <h1>All Tags</h1>
      <div className={classes.tagList_tags}>
        {tags.map(tag => (
          <div key={tag._id} className={classes.tag}>
            <Link to={`/category/${tag.name}`}>{tag.name}</Link> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemesPage;
