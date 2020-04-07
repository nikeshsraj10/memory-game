import React, {PureComponent, Fragment} from 'react';
import Header from '../Header/Header';
import MemoryGame from '../../containers/MemoryGame/MemoryGame';
class Layout extends PureComponent {
    
    state = {
        showSideDrawer: false
    }
    sidebarCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sidebarToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
 
    render(){
        return (
        <Fragment>
            <Header/>
            <MemoryGame/>
        </Fragment>
        );
    }
};

export default Layout;