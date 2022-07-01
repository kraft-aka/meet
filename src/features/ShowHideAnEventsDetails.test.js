import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;
    given("user has started the app", () => {
      AppWrapper = mount(<App />);
    });

    when("the user doesn't click any event", () => {});

    then("the event details will be collapsed", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".description")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the user has started the app", () => {
      AppWrapper = mount(<App />);
    });

    when("the user clicks on an event", () => {
      AppWrapper.update();
      AppWrapper.find(".event-button").at(0).simulate("click");
    });

    then("the chosen event's details will be expanded", () => {
      const EventDetailsWrapper = AppWrapper.find(Event);
      expect(EventDetailsWrapper.find(".description").text()).toEqual(
        mockData[0].description
      );
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let EventWrapper;
    given("user expanded detail of event", () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ hidden: false });
    });

    when("the user click on the event's detail", () => {
      EventWrapper.update();
      EventWrapper.find(".event-button").simulate("click");
    });

    then("the event details will be collapsed", () => {
      expect(EventWrapper.state("hidden")).toBe(true);
      expect(EventWrapper.find(".description")).toHaveLength(0);
    });
  });
});
