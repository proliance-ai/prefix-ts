import { AgentType } from './typings.ts';

export const browsers: Record<AgentType, string[]> = {
  ie: [
    'ie',
    'internet explorer',
    'internet-explorer',
    'internet_explorer',
    'internetexplorer',
  ],
  firefox: [
    'firefox',
    'ff'
  ],
  chrome: ['chrome'],
  safari: ['safari'],
  opera: ['opera'],
  ios_saf: [
    'ios_saf',
    'ios',
    'ios-safari'
  ],
  op_mini: [
    'op_mini',
    'opera-mini',
    'opera_mini',
    'operamini'
  ],
  android: [
    'android',
    'android-browser'
  ],
  op_mob: [
    'op_mob',
    'opera-mobile',
    'opera_mobile',
    'operamobile'
  ],
  bb: [
    'bb',
    'blackberry',
    'blackberry-browser'
  ],
  and_chr: [
    'and_chr',
    'android-chrome',
    'android_chrome',
    'androidchrome'
  ],
  and_ff: [
    'and_ff',
    'android-firefox',
    'android_firefox',
    'androidfirefox'
  ],
  ie_mob: [
    'ie_mob',
    'ie-mobile',
    'ie_mobile',
    'iemobile'
  ]
};
