/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

it('renders correctly', async () => {
  let tree: renderer.ReactTestRenderer;
  await act(() => {
    tree = renderer.create(<App />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
