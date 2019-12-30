import React, {Component, Fragment} from 'react';
import Toolbar from '../Header/Toolbar/Toolbar';
import Sidebar from '../Header/Sidebar/Sidebar';
import MemoryGame from '../../containers/MemoryGame/MemoryGame';
class Layout extends Component {
    
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
            <Toolbar clicked={this.sidebarToggleHandler}/>
            <Sidebar open={this.state.showSideDrawer} closed={this.sidebarCloseHandler}/>
            <MemoryGame/>
        </Fragment>
        );
    }
};

export default Layout;