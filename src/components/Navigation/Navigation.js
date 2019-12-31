import React from 'react';
import classes from './Navigation.module.css';

const navigation = (props) => (
    <ul className={classes.Navigation}>
        {props.controls.map((control) => (
            <li key={control.key}
             style={{cursor: 'pointer', padding: '0 2px'}}
             onClick={()=> window.location.reload()} active={control.isActive}
             className={control.isActive === 'true' ? classes.active : null}
             > 
                        {control.name}               
            </li>
        ))}
    </ul>
);

export default navigation;