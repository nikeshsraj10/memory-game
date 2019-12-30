import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Constants from '../../../constants';
import classes from './Sidebar.module.css';
import Backdrop from '../Backdrop/Backdrop';

const sidebar = (props) => {
    let sidebarClasses = [classes.Sidebar, classes.Open];
    if(!props.open){
        sidebarClasses = [classes.Sidebar, classes.Close];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={sidebarClasses.join(' ')}>
                <nav>
                    <Navigation controls={Constants.appControls}></Navigation>
                    </nav>
            </div>
        </React.Fragment>
    );
};

export default sidebar;
