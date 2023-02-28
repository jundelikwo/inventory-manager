/**
 * @format
 */

import 'react-native';
import React from 'react';
import Navigation from './navigation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Navigation', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
