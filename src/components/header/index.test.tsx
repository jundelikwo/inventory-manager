/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from './index';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import {BackIcon, EyeIcon} from '../icons';
import {TouchableOpacity} from 'react-native';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header title="Hello" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders back button when back is set', () => {
    const tree = renderer.create(<Header back title="Hello" />).root;
    expect(tree.findAllByType(BackIcon).length).toBe(1);
    expect(tree.findAllByType(TouchableOpacity).length).toBe(1);
  });

  it('calls onBackPress function on back press', async () => {
    let res = 'Hello';
    const tree = renderer.create(
      <Header back title="Hello" onBackPress={() => (res = 'World')} />,
    ).root;

    await act(async () => {
      await tree.findAllByType(TouchableOpacity)[0].props.onPress();
      expect(res).toBe('World');
    });
  });

  it('renders right prop when right is set', () => {
    const tree = renderer.create(
      <Header title="Hello" right={<EyeIcon />} />,
    ).root;
    expect(tree.findAllByType(EyeIcon).length).toBe(1);
  });
});
