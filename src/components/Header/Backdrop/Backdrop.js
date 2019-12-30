import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
    let backdropClasses = [classes.Backdrop];
    if(props.message)
        backdropClasses.push(classes.message);
    return  (props.show ? <div className={backdropClasses.join(' ')} onClick={props.clicked}>
        {props.message ? <h1>{props.message}</h1>: null}
    </div> : null)
};

export default backdrop;