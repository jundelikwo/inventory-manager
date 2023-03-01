/**
 * @format
 */

import 'react-native';
import React from 'react';
import EditInventory from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {navigationObj} from 'src/utilities/types';

describe('EditInventory', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <EditInventory
          navigation={navigationObj}
          route={{
            params: {
              name: '',
              totalStock: '',
              price: '',
              description: '',
              uuid: '',
              user: '',
            },
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
