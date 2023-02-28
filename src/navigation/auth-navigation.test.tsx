/**
 * @format
 */

import 'react-native';
import React from 'react';
import AuthNavigation from './auth-navigation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';

describe('AuthNavigation', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <AuthNavigation />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
