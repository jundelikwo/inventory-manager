/**
 * @format
 */

import 'react-native';
import {rEmail} from './regex';

describe('Regex', () => {
  it('rEmail correctly matches valid email', () => {
    expect('hello@hello.com'.match(rEmail)).toBeTruthy();
    expect('com@com.com'.match(rEmail)).toBeTruthy();
  });

  it('rEmail correctly ignores invalid email', () => {
    expect(''.match(rEmail)).toBeFalsy();
    expect('com'.match(rEmail)).toBeFalsy();
    expect('com@com'.match(rEmail)).toBeFalsy();
    expect('com@com.'.match(rEmail)).toBeFalsy();
  });
});
