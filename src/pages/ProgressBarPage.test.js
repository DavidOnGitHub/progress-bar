import React from 'react';
import ProgressBarPage from './ProgressBarPage';
import { shallow, mount } from 'enzyme';

describe('Progress bar page', () => {
  let wrapper;
  const progressData = {
    buttons: [12, 50, -24, -30],
    bars: [21, 42],
    limit: 100,
  };
  beforeEach(() => {
    wrapper = shallow(<ProgressBarPage progressData={progressData} />);
  });

  it('should render correct number of progress bars', () => {
    expect(wrapper.find('ProgressBar').length).toBe(2);
  });

  it('should render progress bars with default values', () => {
    const progressBars = wrapper.find('ProgressBar');
    expect(progressBars.at(0).props().value).toBe(21);
    expect(progressBars.at(1).props().value).toBe(42);
  });

  it('should render correct number of control buttons', () => {
    wrapper = mount(<ProgressBarPage progressData={progressData} />);
    const buttons = wrapper.find('button');
    expect(buttons.length).toBe(4);
    expect(buttons.at(0).text()).toEqual('+12');
    expect(buttons.at(1).text()).toEqual('+50');
    expect(buttons.at(2).text()).toEqual('-24');
    expect(buttons.at(3).text()).toEqual('-30');
  });

  it('should be able to change progress bar values', () => {
    wrapper = mount(<ProgressBarPage progressData={progressData} />);
    const buttons = wrapper.find('button');
    buttons.at(0).simulate('click');
    expect(wrapper.find('ProgressBar').at(0).props().value).toBe(33);
    buttons.at(2).simulate('click');
    expect(wrapper.find('ProgressBar').at(0).props().value).toBe(9);
  });

  it('should be able to change selected progress bar values', () => {
    wrapper = mount(<ProgressBarPage progressData={progressData} />);
    wrapper.find('select').simulate('change', { target: { value: 1 } });
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('ProgressBar').at(1).props().value).toBe(54);
  });

  it('should not decrease values to lower than 0', () => {
    wrapper = mount(<ProgressBarPage progressData={progressData} />);
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.find('ProgressBar').at(0).props().value).toBe(0);
  });

  it('should be able to increase values to greater than 100%', () => {
    wrapper = mount(<ProgressBarPage progressData={progressData} />);
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('ProgressBar').at(0).props().value).toBe(121);
  });
});
