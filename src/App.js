import React, { Component } from 'react';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
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
      compareStatus: false,
      dateDiff1: 0,
      dateDiff2: 0
    };
  }

  _handleChage(date) {
    var daySelected = moment(date);
    this.setState({
      startDate: daySelected,
      dateDiff1: parseInt(daySelected.diff(moment().startOf('day'), 'days') * -1, 10)
    });
  }
  _handleChage2(date) {
    var daySelected = moment(date);
    this.setState({
      startDate: daySelected,
      dateDiff2: parseInt(daySelected.diff(moment().startOf('day'), 'days') * -1, 10)
    });
  }

  _handleToggleViewChange() {
    this.setState({
      compareStatus: !this.state.compareStatus
    })
    console.log(this.state.compareStatus);
  }

  displayDatePicker() {
    if (this.state.compareStatus) {
      return <div>
        <div className="DatePicker1">
          <MuiThemeProvider>
            <DatePicker handleChange={this._handleChage.bind(this)}/>
          </MuiThemeProvider>
          <div>
            <h2 className="DayCount">
              {this.state.dateDiff1} Days
            </h2>
            <h3>
              <VisualizeDays dateDifference={this.state.dateDiff1}/>
            </h3>
          </div>
        </div>
        <div className="DatePicker2">
          <MuiThemeProvider>
            <DatePicker handleChange={this._handleChage2.bind(this)}/>
          </MuiThemeProvider>
          <div>
            <h2 className="DayCount">
              {this.state.dateDiff2} Days
            </h2>
            <h3>
              <VisualizeDays dateDifference={this.state.dateDiff2}/>
            </h3>
          </div>
        </div>
      </div>
    } else {
      return <div>
        <div>
          <MuiThemeProvider>
            <DatePicker handleChange={this._handleChage.bind(this)}/>
          </MuiThemeProvider>
          <div>
            <h2 className="DayCount">
              {this.state.dateDiff1} Days
            </h2>
            <h3>
              <VisualizeDays dateDifference={this.state.dateDiff1}/>
            </h3>
          </div>
        </div>
      </div>
    }
  }
  render() {
    console.log(this.state.startDate.fromNow());
    return (<div className="App">
        <AppBar toggleStatus={this.state.compareStatus} toggleView={this._handleToggleViewChange.bind(this)}/>
        {this.displayDatePicker()}
    </div>
    );
  }
}

export default App;
