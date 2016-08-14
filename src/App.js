import React, { Component } from 'react';
import moment from 'moment';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VisualizeDays from './components/VisualizeDays';
import DatePicker from './components/DatePicker';
import AppBar from './components/AppBar';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

injectTapEventPlugin();

class App extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment(),
      dateDiff: 0
    };
  }

  _handleChage(date) {
    var daySelected = moment(date);
    this.setState({
      startDate: daySelected,
      dateDiff: parseInt(daySelected.diff(moment().startOf('day'), 'days') * -1, 10)
    });
  }

  render() {
    console.log(this.state.startDate.fromNow());
    return (
      <div className="App">
        <AppBar />
        <div className="DatePicker">
          <MuiThemeProvider>
            <DatePicker handleChange={this._handleChage.bind(this)}/>
          </MuiThemeProvider>
        </div>
        <div>
          <h2 className="DayCount">
            {this.state.dateDiff} Days
          </h2>
          <h3>
            <VisualizeDays dateDifference={this.state.dateDiff}/>
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
