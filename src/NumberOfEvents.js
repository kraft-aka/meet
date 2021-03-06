import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleEventNumberChanged = (e) => {
    const newNumberOfEvent = e.target.value;

    if (
      newNumberOfEvent <= 0 ||
      newNumberOfEvent > 32 ||
      typeof newNumberOfEvent === "number"
    ) {
      this.setState({
        numberOfEvents: newNumberOfEvent,
        infoText: "Select number from 1 to 32",
      });
    } else if (newNumberOfEvent > 0 && newNumberOfEvent < 32) {
      this.setState({ numberOfEvents: newNumberOfEvent, infoText: "" });
    }
    this.props.updateEvents(undefined, newNumberOfEvent);
  };

  render() {
    return (
      <div className="number-box">
        <ErrorAlert text={this.state.infoText} />
        <label className="number-events--label" for="number">Number of Events</label><br />
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
