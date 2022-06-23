import React, { Component } from "react";

class Event extends Component {
  state = {
    hidden: true,
  };

  handleChangeOnBtnClick = () => {
    this.state.hidden
      ? this.setState({ hidden: false })
      : this.setState({ hidden: true });
  };

  BtnTextOnClick = () => {
    if (this.state.hidden) {
      return "Show Details";
    } else {
      return "Hide Details";
    }
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h2 className="title">{event.summary}</h2>
        <p className="event-date--time">{event.start.dateTime}</p>
        <p className="event-location">{event.location}</p>
        {!this.state.hidden && <h5 className="about">About Event</h5>}
        {!this.state.hidden && (
          <a href={event.htmlLink} className="event-link">
            More Info Here
          </a>
        )}
        {!this.state.hidden && (
          <p className="description">{event.description}</p>
        )}
        <button className="event-button" onClick={this.handleChangeOnBtnClick}>
          {this.BtnTextOnClick()}
        </button>
      </div>
    );
  }
}

export default Event;
