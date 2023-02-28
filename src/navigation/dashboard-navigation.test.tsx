/**
 * @format
 */

import 'react-native';
import React from 'react';
import DashboardNavigation from './dashboard-navigation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';

describe('DashboardNavigation', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <DashboardNavigation />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
