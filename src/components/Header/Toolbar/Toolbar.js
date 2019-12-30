import React from 'react';
import classes from './Toolbar.module.css';
import Navigation from '../../Navigation/Navigation';
import Constants from '../../../constants';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.mobileOnly} onClick={props.clicked}>Menu</div>
        <nav className={classes.desktopDisplay}>
            <Navigation controls={Constants.appControls}></Navigation>
        </nav>
        </header>
)

export default toolbar;