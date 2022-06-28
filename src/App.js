import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  updateEvents = (location=this.state.currentLocation, eventCount=this.state.eventsLength) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);

      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0,eventCount), 
          eventsLength: eventCount,
          currentLocation: location,
          numberOfEvents: eventCount,
        });
      }
      
    });
  };

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({ numberOfEvents });
    this.updateEvents(this.state.locations, numberOfEvents);
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {locations, numberOfEvents} = this.state;

    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          // numberOfEvents={this.state.numberOfEvents}
          // updateNumberOfEvents={this.updateNumberOfEvents}
          updateEvents={this.updateEvents}
          events={this.state.events}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
