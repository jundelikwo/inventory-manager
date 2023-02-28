/**
 * @format
 */

import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from './index';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import {EyeIcon} from '../icons';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders text when text is set', () => {
    const tree = renderer.create(<Button text="Hello" />).root;
    expect(tree.findAllByType(Text).length).toBe(1);
  });

  it('does not render text when text is empty', () => {
    const tree = renderer.create(<Button />).root;
    expect(tree.findAllByType(Text).length).toBe(0);
  });

  it('renders icon when icon is set', () => {
    const tree = renderer.create(<Button icon={<EyeIcon />} />).root;
    expect(tree.findAllByType(EyeIcon).length).toBe(1);
  });

  it('calls onPress function on button press', async () => {
    let res = 'Hello';
    const tree = renderer.create(
      <Button onPress={() => (res = 'World')} />,
    ).root;

    await act(async () => {
      await tree.findAllByType(TouchableOpacity)[0].props.onPress();
      expect(res).toBe('World');
    });
  });
});
