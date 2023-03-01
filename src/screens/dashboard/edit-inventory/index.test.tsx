/**
 * @format
 */

import 'react-native';
import React from 'react';
import EditInventory from './index';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import {navigationObj} from 'src/utilities/types';
import {Alert, TouchableOpacity} from 'react-native';

jest.spyOn(Alert, 'alert');

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

  it('renders confirmation alert', async () => {
    const tree = renderer.create(
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
    ).root;

    const deleteBtn = tree
      .findAllByType(TouchableOpacity)
      .filter(el => el.props.testID === 'delete-btn');

    expect(deleteBtn.length).toBe(1);

    await act(async () => {
      await deleteBtn[0].props.onPress();
      expect(Alert.alert).toHaveBeenCalled();
    });
  });
});
