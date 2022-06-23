import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    defaultNumber: 32,
  };

  handleEventNumberChanged = (e) => {
    const newNumberOfEvent = e.target.value;
    this.setState({ defaultNumber: newNumberOfEvent });
  };

  render() {
    return (
      <div className="number-box">
        <label className="number-events--label">Number of Events</label>
        <input
          type="text"
          className="number"
          value={this.state.defaultNumber}
          onChange={this.handleEventNumberChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
