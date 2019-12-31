import React from 'react';
import classes from './Toolbar.module.css';
import Navigation from '../../Navigation/Navigation';
import Constants from '../../../constants';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.mobileOnly} onClick={props.clicked}>Menu</div>
        <div style={{width: '40%'}}>
            <nav className={classes.desktopDisplay}>
                <Navigation controls={Constants.appControls}></Navigation>
            </nav>
        </div>
        <div style={{width:'100%',}}><h1 style={{padding: '0 5%', textAlign: 'left'}}>Memory Game</h1></div>
        </header>
)

export default toolbar;