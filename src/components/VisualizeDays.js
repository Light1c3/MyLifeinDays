import React from 'react';
/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 */
class VisualizeDays extends React.Component {
  renderVisuals() {
    if (this.props.dateDifference > 0) {
      return Array(this.props.dateDifference + 1).join("O ").toString()
    }
  }
  render() {
    return <div>
      {this.renderVisuals()}
    </div>
  }
}

export default VisualizeDays;
