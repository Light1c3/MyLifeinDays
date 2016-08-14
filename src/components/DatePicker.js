import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import './DatePicker.css';


/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 */
class DatePickerComp extends React.Component {

  render() {
    return (
      <DatePicker
      className="DatePicker"
      onChange={(event, x) => {this.props.handleChange(x);}}
      hintText="Enter Your Birthday" />
    );
  }
}

export default DatePickerComp;
