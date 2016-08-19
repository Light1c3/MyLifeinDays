import React from 'react';
import Toggle from 'material-ui/Toggle'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var Style =
{
  palette:
    {
      primary1Color: '#00BCD5',
    }
};

class AppBarComp extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(Style)};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title="Time Visualizer"
          iconElementRight={
            <Toggle
              labelStyle={{color:'white'}}
              style={{marginTop:'.75em'}}
              label="Compare"
            />
          }/>

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

AppBarComp.childContextTypes ={
  muiTheme: React.PropTypes.object,
};
export default AppBarComp;
