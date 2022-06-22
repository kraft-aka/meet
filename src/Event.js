import React, { Component } from "react";

class Event extends Component {
  state = {
    event: '',
  }
  render() {
    return (
      <div className="event">
        <h2 className="title"></h2>
        <p className="description"></p>
        <button className="event-button"></button>
      </div>
    )
  }
    
      
}

export default Event;