import React from 'react';
import classes from './Footer.module.scss'
const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
        <ul>
          <li>
            Home
          </li>
          <li>
            Quotes of the Day
          </li>
          <li>
            Authors
          </li>
          <li>
            Topics
          </li>
        </ul>
    </footer>
  );
}

export default Footer;
