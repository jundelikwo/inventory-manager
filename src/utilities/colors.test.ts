/**
 * @format
 */

import 'react-native';
import colors from './colors';

describe('Colors', () => {
  it('formatNumberInput return correctly', () => {
    expect(Object.keys(colors).length).toBeGreaterThan(0);
  });
});
