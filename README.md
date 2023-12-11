# prefiks-ts 

> Fork of [prefiks](https://github.com/leny/prefiks) package by [Leny](https://github.com/leny) for TypeScript

[//]: # (![NPM version]&#40;http://img.shields.io/npm/v/prefiks-ts.svg&#41; ![Build Status]&#40;http://img.shields.io/travis/leny/prefiks.svg&#41; ![Dependency Status]&#40;https://david-dm.org/leny/prefiks.svg&#41; ![Downloads counter]&#40;http://img.shields.io/npm/dm/prefiks.svg&#41;)

> Get the vendors prefixes of a css properties, according to [caniuse](http://caniuse.com) data.

* * * 

## Getting Started

Install the module with: `npm install prefiks-ts`

Include it in your scripts with: `prefiksTs = require( "prefiks-ts" );` or `import * as prefiksTs from "prefiks-ts";`

## Documentation

The `prefixTs` function returns an array with the prefixes to use for the given browser(s) versions (it always returns an array, even empty).  
The prefixes are reverse-ordered by length (longest prefix first).

The **prefiks-ts** module exposes a function that can be called by two different options types. 
```ts
  type PrefiksTs = (options: SingleBrowserOptions | MultipleBrowserOptions) => string[];
```

### Single browser options
```ts
  type SingleBrowserOptions = {
    feature: string;
    browser: string;
    version_range?: string;
  };
```
    
* `feature` is the name of the feature on [caniuse website](http://caniuse.com) (look at the *feat* hash value in the URL).
* `browser` is the name of the browser (or it's alias) to examine.
* `version_range` is a [semver version range](https://github.com/isaacs/node-semver#ranges) to examine. Default to `'*'`.

### Multiple browsers options
```ts
  type MultipleBrowserOptions = {
    feature: string;
    browsers: Record<string, string>;
  };
```
    
* `feature` is the name of the feature on [caniuse website](http://caniuse.com) (look at the *feat* hash value in the URL).
* `browsers` is an object of browsers/version to examine, like :

```ts
   const browsers = {
    "Internet Explorer": 9,
    "chrome": "<=30",
    "firefox": ">28",
    "opera": "*"
    }
```

### `browser`'s aliases

The supported values for `browser` argument are listed bellow. These are **case insensitive**.

* `ie`, `internet explorer`, `internet-explorer`, `internet_explorer`, `internetexplorer`
* `firefox`, `ff`
* `chrome`
* `safari`
* `opera`
* `ios_saf`, `ios`, `ios-safari`
* `op_mini`, `opera-mini`, `opera_mini`, `operamini`
* `android`, `android-browser`
* `op_mob`, `opera-mobile`, `operamobile`, `opera_mobile`
* `bb`, `blackberry`, `blackberry-browser`
* `and_chr`, `android-chrome`, `android_chrome`, `androidchrome`
* `and_ff`, `android-firefox`, `android_firefox`, `androidfirefox`
* `ie_mob`, `ie-mobile`, `ie_mobile`, `iemobile`

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

### TODO

- [ ] Add more browsers aliases
- [ ] Add more test cases
- [ ] AMD implementation

## Install packages locally

To install `@proliance-ai/prefix-ts` package locally, rename the file `.npmrc-local` to `.npmrc.`. Paste there your GitHub personal access token ([info](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)).

## Release History
### prefix-ts
* **1.0.0**: Typescript support (*07/12/2023*)
  - Replaced `CoffeeScript` with `TypeScript`
  - Replaced `babel` bundling with `vite`
  - Replaced deprecated `nodeunit` testing library with `vitest`
  - Updated dependencies to latest versions
  - Removed `lodash` dependency
### prefix
* **0.3.0**: Sorting prefixes by length (*14/07/14*)
* **0.2.0**: Multiple browser form (*14/07/14*)
* **0.1.0**: Initial release (*11/07/14*)

## License
Copyright (c) 2014 Leny  
Licensed under the MIT license.
]()
