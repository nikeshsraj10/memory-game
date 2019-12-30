import React from 'react';
import classes from './Navigation.module.css';

const navigation = (props) => (
    <ul className={classes.Navigation}>
        {props.controls.map((control) => (
            <li key={control.key}>
                <a href={control.link} active={control.isActive}
                    className={control.isActive === 'true' ? classes.active : null}>
                        {control.name}
                </a>
            </li>
        ))}
    </ul>
);

export default navigation;