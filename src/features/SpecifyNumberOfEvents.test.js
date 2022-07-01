import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;
  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("the user is on main page", () => {
      AppWrapper = mount(<App />);
    });

    when(
      "the user did not specify the number of events to be displayed",
      () => {}
    );

    then(/^the default number of events is (\d+)$/, (arg0) => {
      expect(AppWrapper.state("numberOfEvents")).toBe(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("the user is on main page", () => {
      AppWrapper = mount(<App />);
    });

    when("the user types the number of events", () => {
      AppWrapper.find(".number").simulate("change", { target: { value: 12 } });
    });

    then("the given number of events to be displayed", () => {
      expect(AppWrapper.state("numberOfEvents")).toEqual(12);
    });
  });
});
