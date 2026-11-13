/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});

test('shows onboarding title and primary action', async () => {
  let component: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(async () => {
    component = ReactTestRenderer.create(<App />);
  });

  const titles = component!.root.findAllByProps({testID: 'onboarding-title'});
  expect(titles.some(item => item.props.children === 'College life')).toBeTruthy();
  expect(component!.root.findByProps({testID: 'onboarding-cta'})).toBeTruthy();
});
