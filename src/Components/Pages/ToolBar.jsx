import React from 'react';
import { AppBar, Toolbar, IconButton, Input, Drawer, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Cancel from "../../assests/img/cancel.svg";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ViewStream from '@material-ui/icons/ViewStream';
import ViewQuilt from '@material-ui/icons/ViewQuilt';
import Tooltip from '@material-ui/core/Tooltip';
import Sidebar from '../Pages/SideBar';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    drawer: {
        marginTop: '64px',
        backgroundColor: "Red",
        width:250
    }
};


class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideViewStream: true,
            left: false
        }
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    render() {
        return (
            <div style={{ position: "relative" }}>
                <AppBar style={{ backgroundColor: '#fb0' }}>
                    <Toolbar>
                        <Tooltip title="menu">
                            <IconButton style={{ position: "absolute", left: 0 }} onClick={this.toggleDrawer('left', true)}>
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>

                        <div className="drawer-top">

                            <Drawer  open={this.state.left} onClose={this.toggleDrawer('left', false)}> 
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.toggleDrawer('left', false)}
                                    onKeyDown={this.toggleDrawer('left', false)}
                                >

                                    {/* <div style={{backgroundColor:"yellow",marginTop:"64px",width:'250px'}}> */}
                                        <Sidebar style={styles}/>
                                    {/* </div> */}
                                </div>
                            </Drawer>
                        </div>
                        <div className="fundoonotesText">
                            <div className="fundooWrd">
                                Fundoo
                        </div>
                            <div className="noteWord">
                                Notes
                        </div>
                        </div>
                        <div className="search">
                            <div className="common-align-Center searchBar">
                                <Tooltip title="search">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </Tooltip>
                                <Input
                                    placeholder="Search…"
                                    disableUnderline
                                    className="searchDiv"
                                />
                                <div>
                                    <IconButton>
                                        <img src={Cancel} alt="cancel" />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="gridListView">
                                <Tooltip title="ListView">
                                    <IconButton>
                                        <ViewStream />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="GridView">
                                    <IconButton>
                                        <ViewQuilt />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <div>
                            <Tooltip title="Google Account">
                                <IconButton className="accountcircle" style={{ position: "absolute", right: 0, marginTop: -24 }}>
                                    <AccountCircle />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default withStyles(styles) (ToolBar);