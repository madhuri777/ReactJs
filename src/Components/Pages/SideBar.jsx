import React from 'react';
import {SwipeableDrawer,Button} from '@material-ui/core';


class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            left: false
        };
    }
    render(){
        const{classes}=this.props;
        console.log("propertis if sidebar ",this.props.style.drawer);
        return(
            <div style={this.props.style.drawer}>
              Madhuri
            </div>
        );
    }
}
export default SideBar;