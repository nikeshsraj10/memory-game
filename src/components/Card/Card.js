import React from 'react';
import logo from '../../logo.svg';
import classes from './Card.module.css';

const card = (props) => {
    return (
        <div key={props.card.id}
             className={props.card.isFlipped ? [classes.Card, classes.isFlipped].join(' '): classes.Card}
             onClick={() => props.clicked(props.card.id, props.card.isFlipped)}>
                <div className={classes.card_face}>
                    <img className={classes.img}  src={logo} alt="Front Face" />
                </div>
                <div  style={{backgroundColor: props.card.color}} className={classes.back}>
                    <div><h3>{props.card.value}</h3></div>
                </div>
        </div>
    );
}

export default card;