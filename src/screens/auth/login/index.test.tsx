/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {navigationObj} from 'src/utilities/types';

describe('Login', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Login navigation={navigationObj} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
