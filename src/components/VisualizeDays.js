import React from 'react';
import './VisualizeDays.css';

class VisualizeDays extends React.Component {
  renderVisuals() {
    if (this.props.dateDifference > 0) {
      return Array(this.props.dateDifference + 1).join("O ").toString()
    }
  }
  render() {
    return <div className="circleVisuals">
      {this.renderVisuals()}
    </div>
  }
}

export default VisualizeDays;
