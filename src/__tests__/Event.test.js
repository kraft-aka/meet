import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => (EventWrapper = shallow(<Event event={mockData[0]} />)));

  test("render event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render a title", () => {
    expect(EventWrapper.find(".title")).toHaveLength(1);
  });

  test("render the location of the event", () => {
    expect(EventWrapper.find(".event-location")).toHaveLength(1);
  });

  test("render a button of event", () => {
    expect(EventWrapper.find(".event-button")).toHaveLength(1);
  });

  test("render a date and time of event", () => {
    expect(EventWrapper.find(".event-date--time")).toHaveLength(1);
  });

  test("event is collapsed by default", () => {
    expect(EventWrapper.state("hidden")).toBe(true);
  });

  test("event is expanded when button clicked", () => {
    EventWrapper.setState({ hidden: true });
    EventWrapper.find(".event-button").simulate("click");
    expect(EventWrapper.state("hidden")).toBe(false);
  });

  test("on click change the text of button to Show Details", () => {
    EventWrapper.setState({ hidden: true });
    expect(EventWrapper.find(".event-button").text()).toEqual("Show Details");
  });

  test("on click change the text of button to Hide Details", () => {
    EventWrapper.setState({ hidden: false });
    expect(EventWrapper.find(".event-button").text()).toEqual("Hide Details");
  });

  test("render correct event title", () => {
    expect(EventWrapper.find(".title").text()).toEqual(mockData[0].summary);
  });

  test("render correct start time of event", () => {
    expect(EventWrapper.find(".event-date--time").text()).toEqual(
      mockData[0].start.dateTime
    );
  });

  test("render exact event location", () => {
    expect(EventWrapper.find(".event-location").text()).toEqual(
      mockData[0].location
    );
  });

  test("render text about event", () => {
    EventWrapper.setState({ hidden: false });
    expect(EventWrapper.find(".about").text()).toEqual("About Event");
  });

  test("if collapsed render no text about event", () => {
    EventWrapper.setState({ hidden: true });
    expect(EventWrapper.find(".about")).toHaveLength(0);
  });

  test("render a link of event", () => {
    EventWrapper.setState({ hidden: false });
    expect(EventWrapper.find(".event-link").prop("href")).toBe(
      mockData[0].htmlLink
    );
  });

  test("if collapsed render no link of event", () => {
    EventWrapper.setState({ hidden: true });
    expect(EventWrapper.find(".event-link")).toHaveLength(0);
  });

  test("render description text of the event when button clicked", () => {
    EventWrapper.setState({ hidden: false });
    expect(EventWrapper.find(".description").text()).toEqual(
      mockData[0].description
    );
  });

  test("if collapsed render no description test of event", () => {
    EventWrapper.setState({ hidden: true });
    expect(EventWrapper.find(".description")).toHaveLength(0);
  });
});
