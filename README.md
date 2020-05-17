# badge-svg

A library to generate badge svg

[![Dependency Status](https://david-dm.org/plantain-00/badge-svg.svg)](https://david-dm.org/plantain-00/badge-svg)
[![devDependency Status](https://david-dm.org/plantain-00/badge-svg/dev-status.svg)](https://david-dm.org/plantain-00/badge-svg#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/badge-svg.svg?branch=master)](https://travis-ci.org/plantain-00/badge-svg)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/badge-svg?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/badge-svg/branch/master)
[![npm version](https://badge.fury.io/js/badge-svg.svg)](https://badge.fury.io/js/badge-svg)
[![Downloads](https://img.shields.io/npm/dm/badge-svg.svg)](https://www.npmjs.com/package/badge-svg)
[![gzip size](https://img.badgesize.io/https://unpkg.com/badge-svg?compression=gzip)](https://unpkg.com/badge-svg)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Fbadge-svg%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/badge-svg)

## install

`yarn add badge-svg`

## usage

```ts
import generateBadgeSvg from "badge-svg";
// <script src="./node_modules/badge-svg/badge-svg.min.js"></script>

generateBadgeSvg('test', '1.2.3')
generateBadgeSvg('test again', '99%')
```

![test](./spec/test.svg)
![test](./spec/test2.svg)
