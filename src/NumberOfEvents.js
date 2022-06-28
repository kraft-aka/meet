import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleEventNumberChanged = (e) => {
    const newNumberOfEvent = e.target.value;
    if (isNaN (newNumberOfEvent) || newNumberOfEvent > 32 ) {
      return this.state.numberOfEvents;
    } else {
      this.setState({ numberOfEvents: newNumberOfEvent });
    }
  };

  render() {
    return (
      <div className="number-box">
        <label className="number-events--label">Number of Events</label>
        <input
          type="text"
          className="number"
          value={this.state.numberOfEvents}
          onChange={this.handleEventNumberChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
