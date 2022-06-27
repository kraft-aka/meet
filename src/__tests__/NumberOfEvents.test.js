import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper = shallow(<NumberOfEvents />);

  test("render a container for text box", () => {
    expect(NumberOfEventsWrapper.find(".number-box")).toHaveLength(1);
  });

  test("render a title of the number events", () => {
    expect(NumberOfEventsWrapper.find(".number-events--label")).toHaveLength(1);
  });

  test("render a text area for event number", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });

  test("render a defualt number of events", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(
      numberOfEvents
    );
  });

  test("render change the number of events when the input number changed", () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 5 });
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(10);
  });
});


