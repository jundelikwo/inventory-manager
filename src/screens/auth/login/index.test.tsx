/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Login', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
