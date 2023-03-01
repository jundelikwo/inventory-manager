/**
 * @format
 */

import React from 'react';
import {BackIcon, EyeIcon, EyeOffIcon, PlusIcon} from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Icons', () => {
  it('EyeIcon renders correctly', () => {
    const tree = renderer.create(<EyeIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('EyeOffIcon renders correctly', () => {
    const tree = renderer.create(<EyeOffIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('BackIcon renders correctly', () => {
    const tree = renderer.create(<BackIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('PlusIcon renders correctly', () => {
    const tree = renderer.create(<PlusIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
