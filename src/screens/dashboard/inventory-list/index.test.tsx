/**
 * @format
 */

import 'react-native';
import React from 'react';
import InventoryList from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {navigationObj} from 'src/utilities/types';

describe('InventoryList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<InventoryList navigation={navigationObj} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
