import React from 'react';
import ProgressBar from './ProgressBar';
import { mount } from 'enzyme';
import { colors } from '../../config/app';

describe('Progress bar component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ProgressBar value={21} limit={200} />);
  });
  it('should show percentage', () => {
    expect(wrapper.find('p#progress-bar-percentage').text()).toEqual('10.50%');
  });

  it('should indicate percentage with indicator', () => {
    expect(wrapper.find('div#progress-bar-indicator')).toHaveStyleRule(
      'right',
      'calc(100% - 10.5%)'
    );
    wrapper = mount(<ProgressBar value={60} limit={200} />);
    expect(wrapper.find('div#progress-bar-indicator')).toHaveStyleRule(
      'right',
      'calc(100% - 30%)'
    );
  });

  it('should have blue color indicator when percentage is not greater than 100%', () => {
    expect(wrapper.find('div#progress-bar-indicator')).toHaveStyleRule(
      'background-color',
      colors.progressBlue
    );
  });

  it('should have red color indicator when percentage is greater than 100%', () => {
    wrapper = mount(<ProgressBar value={210} limit={200} />);
    expect(wrapper.find('div#progress-bar-indicator')).toHaveStyleRule(
      'background-color',
      colors.progressRed
    );
  });
});
