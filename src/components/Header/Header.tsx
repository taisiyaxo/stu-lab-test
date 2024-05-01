import React from 'react';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_main}>
        <div className={classes.header_list}>
          <ul>
            <Link to='/MainPage'><li>Quotes</li></Link>
            <li>News</li>
            <li>Facts</li>
            <li>Tests</li>
          </ul>
        </div>
          <p>Sing Up</p>
      </div>
      <div className={classes.header_search}>
        <div>
        <input
          className={classes.card_input}
          placeholder="Search"
        />
        <button className={classes.button}>Search</button>
        </div>
        
      </div>
      <div className={classes.header_list}>
          <ul>
            <li>+Add</li>
            <Link to='/MainPage'><li>Popular</li></Link>
            <Link to='/RandomPage'><li>Random Quote</li></Link>
            <Link to='/ThemesPage'><li>Themes</li></Link>
          </ul>
        </div>
    </header>
  );
}

export default Header;
