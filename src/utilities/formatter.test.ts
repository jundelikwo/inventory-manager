/**
 * @format
 */

import 'react-native';
import {formatNumberInput, formatToMoney, moneyToNumber} from './formatter';

describe('Formatter', () => {
  it('formatNumberInput return correctly', () => {
    expect(formatNumberInput('500')).toBe('NGN 500');
    expect(formatNumberInput('0')).toBe('');
    expect(formatNumberInput('2500')).toBe('NGN 2,500');
    expect(formatNumberInput('2500', null, true)).toBe('2,500');
  });

  it('formatToMoney return correctly', () => {
    expect(formatToMoney(500)).toBe('500');
    expect(formatToMoney(0)).toBe('0');
    expect(formatToMoney(2500)).toBe('2,500');
    expect(formatToMoney(50000)).toBe('50,000');
  });

  it('moneyToNumber return correctly', () => {
    expect(moneyToNumber('NGN 500')).toBe(500);
    expect(moneyToNumber('NGN 2,500')).toBe(2500);
    expect(moneyToNumber('NGN 50,000')).toBe(50000);
  });
});
