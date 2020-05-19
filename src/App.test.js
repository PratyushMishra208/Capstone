import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import App from './App';

configure({ adapter: new Adapter() });
it ("should render number", () => {
  const wrapper = shallow (<App />)
  const span = wrapper.find("h1");
  const result = span.text();
  expect (result).toBe("Capstone")
})