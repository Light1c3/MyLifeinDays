import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppBarComp extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title="How long have you been alive?"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Settings</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>About</MenuItem>
        </Drawer>
      </div>
  </MuiThemeProvider>
  }
}
export default AppBarComp;
