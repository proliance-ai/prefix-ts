import caniuseData from 'caniuse-db/data.json';
import semver from 'semver';
import { getBrowser } from './getBrowser.ts';
import { versionToSemver } from './versionToSemver.ts';
import { prefixSorter } from './prefixSorter.ts';

const prefix = (feature: string, browsers: string | Record<string, string | number>, givenVersion: string = "*" ) => {
  const featureData = caniuseData.data[feature];
  if (!featureData) {
    throw new Error(`Unknown feature "${feature}"!`);
  }
  let browsersHash: Record<string, string | number>;
  if (typeof browsers === 'string') {
    browsersHash = {};
    browsersHash[browsers] = givenVersion;
  } else {
    browsersHash = browsers;
  }
  const prefixes = [];

  for (const browser in browsersHash) {
    const givenVersionValue = browsersHash[browser];
    const browserData = getBrowser(browser);
    if (!browserData) {
      throw new Error(`Unknown browser '${browser}' !`);
    }
    const givenVersionRange = semver.validRange(givenVersionValue.toString());
    const browserFeatureImplementations = featureData.stats[browserData.name];
    if (!browserFeatureImplementations) {
      continue;
    }
    for (const interval in browserFeatureImplementations) {
      const implementation = browserFeatureImplementations[interval];
      for (const version of interval.split('-')) {
        if (semver.satisfies(versionToSemver(version), givenVersionRange)) {
          if (implementation && implementation.indexOf('x') !== -1) {
            let useDefaulfPrefix = true;
            if (browserData.prefix_exceptions) {
              for (const prefixExceptionVersion in browserData.prefix_exceptions) {
                const exceptionPrefix = browserData.prefix_exceptions[prefixExceptionVersion];
                if (!semver.satisfies(versionToSemver(prefixExceptionVersion), givenVersionRange)) {
                  continue;
                }
                useDefaulfPrefix = false;
                prefixes.push(exceptionPrefix);
              }
            }
            if (useDefaulfPrefix || givenVersionRange === '*') {
              prefixes.push(browserData.prefix);
            }
          }
        }
      }
    }
  }
  return prefixes.sort(prefixSorter);
};

export default prefix;
