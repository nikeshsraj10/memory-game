import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import classes from './Header.module.css';

const Header = (props) => (
    <div id="appHeader" className={["d-flex", "flex-column", "flex-md-row", "align-items-center", "p-3", "border-bottom", "shadow-sm", classes.background, classes['font-color']].join(' ')}>
        <h5 className="my-0 mr-md-auto font-weight-normal">Memory Game</h5>
        <nav className={["my-2", "my-md-0", "mr-md-3", classes['font-color']].join(' ')}>
            <a className="p-2" href="#">New Game</a>
            <a className="p-2" href="#">Instructions</a>
            <a className="p-2" href="#">Difficulty</a>
        </nav>
  </div>
);

export default Header;