import React from 'react';
import SideBar from './SideBar';
import Toolbar from './ToolBar';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Toolbar/>
                {/* <SideBar/> */}
            </div>
        );
    }
}
export default Home;