import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";


describe('<Event /> component', ()=> {
  let EventWrapper;
  beforeAll(()=> EventWrapper = shallow(<Event event={mockData}/>));

  test('render event', ()=> {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })

  test('render a title', ()=> {
    expect(EventWrapper.find('.title')).toHaveLength(1);
  })

  test('render short overview aboout event',()=> {
    expect(EventWrapper.find('.description')).toHaveLength(1);
  })

  test('render a button of event', ()=> {
    expect(EventWrapper.find('.event-button')).toHaveLength(1);
  })



} )
