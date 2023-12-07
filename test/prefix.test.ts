import { describe, expect, test } from 'vitest';
import { default as prefixTs } from '../src/index';

describe('Errors', (): void => {
  const browserHash  = {
    "nothing": 9,
    "chrome": "<=35",
    "firefox": ">28",
    "opera": "*"
  };
  test(
    'Should throws for unknown browsers (browsers is string)',
    () => expect(() => prefixTs(
      'css-filters',
      "nothing",
      '2'
    ))
      .toThrowError('Unknown browser "nothing"!')
  );
  test(
    'Should throws for unknown browsers (browsers is object)',
    () => expect(() => prefixTs(
      'css-filters',
      browserHash,
      '2'
    ))
      .toThrowError('Unknown browser "nothing"!')
  );
  test(
    'Should throws for unknown features',
    () => expect(() => prefixTs(
      'nothing',
      'ie',
      '2'
    ))
      .toThrowError('Unknown feature "nothing"!')
  );
});

describe('Browsers aliases', (): void => {
  // TODO use browsers data to generate tests
  // IE aliases
  test(
    'Should work with "IE" alias',
    () => expect(prefixTs(
      'css-filters',
      'IE',
      '2'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with "Internet Explorer" alias',
    () => expect(prefixTs(
      'css-filters',
      'Internet Explorer',
      '2'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with "InternetExplorer" alias',
    () => expect(prefixTs(
      'css-filters',
      'InternetExplorer',
      '2'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with "Internet-Explorer" alias',
    () => expect(prefixTs(
      'css-filters',
      'Internet-Explorer',
      '2'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with "Internet_Explorer" alias',
    () => expect(prefixTs(
      'css-filters',
      'Internet_Explorer',
      '2'
    ))
      .toStrictEqual([])
  );
  // FF aliases
  test(
    'Should work with "FF" alias',
    () => expect(prefixTs(
      'css-filters',
      'FF',
      '2'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with "Firefox" alias',
    () => expect(prefixTs(
      'css-filters',
      'Firefox',
      '2'
    ))
      .toStrictEqual([])
  );
  // IOS Safari Aliases
  test(
    'Should work with "Safari" alias',
    () => expect(prefixTs(
      'css-filters',
      'Safari',
      '2'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with "iOS" alias',
    () => expect(prefixTs(
      'css-filters',
      'iOS',
      '2'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with "iOS_saf" alias',
    () => expect(prefixTs(
      'css-filters',
      'iOS_saf',
      '2'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with "iOS-Safari" alias',
    () => expect(prefixTs(
      'css-filters',
      'ios-Safari',
      '2'
    ))
      .toStrictEqual([])
  );
  // TODO: there's many more aliases to add & test
});


describe('No version given', (): void => {
  test(
    'Should work with for "IE"',
    () => expect(prefixTs(
      'transforms2d',
      'IE'
    ))
      .toStrictEqual(['ms'])
  );
  test(
    'Should work with for "Firefox"',
    () => expect(prefixTs(
      'transforms2d',
      'Firefox'
    ))
      .toStrictEqual(['moz'])
  );
  test(
    'Should work with for "Chrome"',
    () => expect(prefixTs(
      'transforms2d',
      'Chrome'
    ))
      .toStrictEqual(['webkit'])
  );
  test(
    'Should work with for "Safari"',
    () => expect(prefixTs(
      'transforms2d',
      'Safari'
    ))
      .toStrictEqual(['webkit'])
  );
  test(
    'Should work with for "Opera"',
    () => expect(prefixTs(
      'transforms2d',
      'Opera'
    ))
      .toStrictEqual(['webkit', 'o'])
  );
  test(
    'Should work with for "iOS_saf"',
    () => expect(prefixTs(
      'transforms2d',
      'iOS_saf'
    ))
      .toStrictEqual(['webkit'])
  );
  test(
    'Should work with for "op_mini"',
    () => expect(prefixTs(
      'transforms2d',
      'op_mini'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with for "android"',
    () => expect(prefixTs(
      'transforms2d',
      'android'
    ))
      .toStrictEqual(['webkit'])
  );
  test(
    'Should work with for "bb"',
    () => expect(prefixTs(
      'transforms2d',
      'bb'
    ))
      .toStrictEqual(['webkit'])
  );
  test(
    'Should work with for "op_mob"',
    () => expect(prefixTs(
      'css-color-adjust',
      'op_mob'
    ))
      .toStrictEqual(['webkit', 'o'])
  );
  test(
    'Should work with for "and_chr"',
    () => expect(prefixTs(
      'transforms2d',
      'and_chr'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with for "and_ff"',
    () => expect(prefixTs(
      'transforms2d',
      'and_ff'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with for "ie_mob"',
    () => expect(prefixTs(
      'transforms2d',
      'ie_mob'
    ))
      .toStrictEqual([])
  );
});


describe('Numeric version given', (): void => {
  test(
    'Should work with for "ie <9"',
    () => expect(prefixTs(
      'transforms2d',
      'ie',
      '<9'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with for "ie >9"',
    () => expect(prefixTs(
      'transforms2d',
      'ie',
      '>9'
    ))
      .toStrictEqual([])
  );
  test(
    'Should work with for "ie >=9"',
    () => expect(prefixTs(
      'transforms2d',
      'ie',
      '>=9'
    ))
      .toStrictEqual(['ms'])
  );
});
describe('Multiple browsers hash given', (): void => {
  const browserHash = {
    "Internet Explorer": 9,
    "chrome": "<=35",
    "firefox": ">28",
    "opera": "*"
  };
  test(
    'Should work with multiple browsers hash given',
    () => expect(prefixTs(
      'transforms2d',
      browserHash
    ))
      .toStrictEqual(['webkit', 'ms', 'o'])
  );
});
