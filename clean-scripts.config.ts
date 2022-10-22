import * as fs from 'fs'
import generateBadgeSvg from './src'

const tsFiles = `"src/**/*.ts"`

export default {
  build: [
    'rimraf dist/',
    {
      back: [
        'tsc -p src/tsconfig.nodejs.json',
        'api-extractor run --local',
        () => fs.writeFileSync('spec/test.svg', generateBadgeSvg('test', '1.2.3')),
        () => fs.writeFileSync('spec/test2.svg', generateBadgeSvg('test again', '99%'))
      ],
      front: [
        'tsc -p src/tsconfig.browser.json',
        'rollup --config rollup.config.mjs'
      ]
    }
  ],
  lint: {
    ts: `eslint --ext .js,.ts ${tsFiles}`,
    export: `no-unused-export ${tsFiles} --strict --need-module tslib`,
    markdown: `markdownlint README.md`,
    typeCoverage: 'type-coverage -p src/tsconfig.nodejs.json --strict',
    typeCoverageBrowser: 'type-coverage -p src/tsconfig.browser.json --strict'
  },
  test: 'ava --timeout=30s',
  fix: `eslint --ext .js,.ts ${tsFiles} --fix`
}
