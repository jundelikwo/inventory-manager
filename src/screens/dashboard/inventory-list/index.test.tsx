/**
 * @format
 */

import 'react-native';
import React from 'react';
import InventoryList from './index';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import {navigationObj} from 'src/utilities/types';
import {Text, TouchableOpacity} from 'react-native';
import {
  initialInventoryContext,
  InventoryContext,
  ItemType,
  UserContextType,
} from 'src/context/inventory';
import {AuthContext, initialAuthContext} from 'src/context/auth';

const items: ItemType[] = [
  {
    name: '1',
    totalStock: '1',
    price: '1',
    description: '1',
    uuid: '1',
    user: '1',
  },
  {
    name: '2',
    totalStock: '2',
    price: '2',
    description: '2',
    uuid: '2',
    user: '2',
  },
];

describe('InventoryList', () => {
  function renderInventoryListWithContxt(
    value: UserContextType,
    navigation = navigationObj,
  ) {
    return (
      <InventoryContext.Provider value={value}>
        <InventoryList navigation={navigation} />
      </InventoryContext.Provider>
    );
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(<InventoryList navigation={navigationObj} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('navigates to AddInventory screen on add button press', async () => {
    let screen = '';
    const navigation = {
      ...navigationObj,
      navigate: (route: string) => {
        screen = route;
      },
    };

    const tree = renderer.create(
      <InventoryList navigation={navigation} />,
    ).root;

    const addBtn = tree
      .findAllByType(TouchableOpacity)
      .filter(el => el.props.testID === 'add-btn');

    expect(addBtn.length).toBe(1);

    await act(async () => {
      await addBtn[0].props.onPress();
      expect(screen).toBe('AddInventory');
    });
  });

  it('renders empty text when inventory is empty', async () => {
    const tree = renderer.create(
      renderInventoryListWithContxt({...initialInventoryContext, items: []}),
    ).root;

    const emptyText = tree
      .findAllByType(Text)
      .filter(el => el.props.testID === 'empty');
    const itemBtn = tree
      .findAllByType(TouchableOpacity)
      .filter(el => el.props.testID?.includes('item-btn-'));

    expect(emptyText.length).toBe(1);
    expect(itemBtn.length).toBe(0);
  });

  it('renders inventory items', async () => {
    const tree = renderer.create(
      renderInventoryListWithContxt({
        ...initialInventoryContext,
        items,
      }),
    ).root;

    const emptyText = tree
      .findAllByType(Text)
      .filter(el => el.props.testID === 'empty');
    const itemBtn = tree
      .findAllByType(TouchableOpacity)
      .filter(el => el.props.testID?.includes('item-btn-'));

    expect(emptyText.length).toBe(0);
    expect(itemBtn.length).toBe(2);
  });

  it('navigates to EditInventory screen on item press', async () => {
    let screen = '';
    const navigation = {
      ...navigationObj,
      navigate: (route: string) => {
        screen = route;
      },
    };

    const tree = renderer.create(
      renderInventoryListWithContxt(
        {
          ...initialInventoryContext,
          items,
        },
        navigation,
      ),
    ).root;

    const itemBtn = tree
      .findAllByType(TouchableOpacity)
      .filter(el => el.props.testID?.includes('item-btn-'));

    await act(async () => {
      await itemBtn[0].props.onPress();
      expect(screen).toBe('EditInventory');
    });
  });

  it('logouts on logout press', async () => {
    let hasLogout = false;
    let hasClearItems = false;

    const tree = renderer.create(
      <AuthContext.Provider
        value={{
          ...initialAuthContext,
          logout: () => {
            hasLogout = true;
          },
        }}>
        {renderInventoryListWithContxt({
          ...initialInventoryContext,
          clearItems: () => {
            hasClearItems = true;
          },
        })}
      </AuthContext.Provider>,
    ).root;

    const logoutBtn = tree
      .findAllByType(TouchableOpacity)
      .filter(el => el.props.testID === 'logout-btn');

    await act(async () => {
      await logoutBtn[0].props.onPress();
      expect(hasLogout).toBeTruthy();
      expect(hasClearItems).toBeTruthy();
    });
  });
});
