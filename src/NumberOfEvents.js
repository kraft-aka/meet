import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleEventNumberChanged = (e) => {
    const newNumberOfEvent = e.target.value;

    if (newNumberOfEvent <= 0 || typeof newNumberOfEvent === "number") {
      this.setState({ numberOfEvents: newNumberOfEvent });
    } else if (newNumberOfEvent > 0 && newNumberOfEvent < 32) {
      this.setState({ numberOfEvents: newNumberOfEvent });
    }
    this.props.updateEvents(undefined, newNumberOfEvent);
  };

  render() {
    const { events, updateEvents } = this.props;
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
