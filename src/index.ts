import caniuseData from 'caniuse-db/data.json';
import semver from 'semver';
import { getBrowser } from './getBrowser.ts';
import { versionToSemver } from './versionToSemver.ts';
import { CaniuseData } from './typings.ts';

const prefixTs = (feature: string, browsers: string | Record<string, string | number>, givenVersion: string = '*' ) => {
  const featureData = (caniuseData as unknown as CaniuseData).data[feature];
  if (!featureData) {
    throw new Error(`Unknown feature "${feature}"!`);
  }
  const browsersHash: Record<string, string | number> = typeof browsers === 'string'
    ? {[browsers]: givenVersion}
    : browsers;
  const prefixes = [];

  for (const browser in browsersHash) {
    const givenVersionValue = browsersHash[browser];
    const browserData = getBrowser(browser);
    if (!browserData) {
      throw new Error(`Unknown browser "${browser}"!`);
    }
    const givenVersionRange = semver.validRange(givenVersionValue.toString());
    const browserFeatureImplementations = featureData.stats[browserData.name];
    if (!browserFeatureImplementations) {
      continue;
    }
    for (const interval in browserFeatureImplementations) {
      const implementation = browserFeatureImplementations[interval];
      for (const version of interval.split('-')) {
        if (givenVersionRange && semver.satisfies(versionToSemver(version), givenVersionRange)) {
          if (implementation && implementation.indexOf('x') !== -1) {
            let useDefaultPrefix = true;
            if (browserData.prefix_exceptions) {
              for (const prefixExceptionVersion in browserData.prefix_exceptions) {
                const exceptionPrefix = browserData.prefix_exceptions[prefixExceptionVersion];
                if (!semver.satisfies(versionToSemver(prefixExceptionVersion), givenVersionRange)) {
                  continue;
                }
                useDefaultPrefix = false;
                prefixes.push(exceptionPrefix);
              }
            }
            if (useDefaultPrefix || givenVersionRange === '*') {
              prefixes.push(browserData.prefix);
            }
          }
        }
      }
    }
  } // TODO refactor ladder to hell
  return [...new Set(prefixes)]
    .sort((a: string = '', b: string = ''): number => b.length - a.length);
};

export default prefixTs;
