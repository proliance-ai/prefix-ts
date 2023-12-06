export const versionToSemver = (version: string = '') => {
  const array: string[] = version.split('.');
  while (array.length < 3) {
    array.push('0');
  }
  return array.join('.');
};
