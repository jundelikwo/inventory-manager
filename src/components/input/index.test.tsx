/**
 * @format
 */

import {Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Input from './index';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import {EyeIcon, EyeOffIcon} from '../icons';

describe('Input', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders label and TextInput', () => {
    const tree = renderer.create(<Input label="Hello" />).root;
    expect(tree.findAllByType(Text).length).toBe(1);
    expect(tree.findAllByType(TextInput).length).toBe(1);
  });

  it('does not render label when label is empty', () => {
    const tree = renderer.create(<Input label="" />).root;
    expect(tree.findAllByType(Text).length).toBe(0);
  });

  it('renders visibility button when secureTextEntry & toggleVisibility are true', async () => {
    const tree = renderer.create(
      <Input label="" secureTextEntry toggleVisibility />,
    ).root;
    expect(tree.findAllByType(EyeIcon).length).toBe(1);
    expect(tree.findAllByType(EyeOffIcon).length).toBe(0);
    expect(tree.findAllByType(TouchableOpacity).length).toBe(1);

    await act(async () => {
      await tree.findAllByType(TouchableOpacity)[0].props.onPress();
      expect(tree.findAllByType(EyeIcon).length).toBe(0);
      expect(tree.findAllByType(EyeOffIcon).length).toBe(1);
    });
  });
});
