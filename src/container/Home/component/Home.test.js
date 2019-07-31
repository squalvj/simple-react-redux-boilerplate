import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './Home'

describe('basic render Check', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Home/>)
  });
  
  test('it renders a home', () => {
    expect(wrapper.find('.wrapper-home').length).toBe(1); // This passes which indicates the wrapper is able to render
  });
});

describe('first service call on didmount ', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Home/>)
  });
 
  it('call handlePagination on didmount', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handlePagination');
    instance.componentDidMount();
    expect(instance.handlePagination).toHaveBeenCalledTimes(1);
  });

  it('mpunt onScrollFunc on didmount', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onScrollFunc');
    instance.componentDidMount();
    expect(instance.onScrollFunc).toHaveBeenCalledTimes(1);
  });
});

describe('Render Trending', () => {
  it('trending wrapper render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.wrapper-trending').length).toBe(1);
  });

  it('init trending gif render 15 times', () => {
    const wrapper = mount(<Home />);
    const data = require('mocks/Gif/trending.json')
    wrapper.setState({ trendings: data });
    expect(wrapper.find('.wrapper-gif-player').length).toBe(15);
  });
})

describe('Form Testing ', () => {
  it('Change input in form', () => {
    const wrapper = shallow(<Home />);
    wrapper.find('.search-input').simulate('change', {target: {value: 'change the form'} });
    expect(wrapper.state('search')).toBe('change the form');
  });

  it('Trigger onSubmit Form', () => {
    const wrapper = mount(<Home />);
    const onSubmit = jest.spyOn(wrapper.instance(), "handleSubmit");
    wrapper.update()
    wrapper.instance().forceUpdate()
    const form = wrapper.find('.wrapper-form')
    form.find('button').at(0).simulate('submit')
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
  
  it('Trigger Surprise Me Submit', () => {
    const wrapper = mount(<Home />);
    const onClick = jest.spyOn(wrapper.instance(), "handleSurprise");
    wrapper.update()
    wrapper.instance().forceUpdate()
    const form = wrapper.find('.wrapper-form')
    form.find('button').at(1).simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

