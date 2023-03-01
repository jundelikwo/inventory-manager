/**
 * @format
 */

import 'react-native';
import React from 'react';
import Navigation from './navigation';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';

describe('Navigation', () => {
  it('renders correctly', async () => {
    let tree: renderer.ReactTestRenderer;
    await act(() => {
      tree = renderer.create(
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>,
      );
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
