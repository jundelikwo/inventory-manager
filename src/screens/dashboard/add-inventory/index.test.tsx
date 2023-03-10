/**
 * @format
 */

import 'react-native';
import React from 'react';
import AddInventory from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {navigationObj} from 'src/utilities/types';

describe('AddInventory', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AddInventory navigation={navigationObj} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
