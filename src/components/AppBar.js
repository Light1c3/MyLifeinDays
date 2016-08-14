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
          onLeftIconButtonClick={this.handleToggle}
          title="How long have you been alive?"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item 1</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
  </MuiThemeProvider>
  }
}
export default AppBarComp;
