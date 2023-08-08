/* eslint-disable */
export default {
  displayName: 'csr-example',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': [
      'babel-jest', { 
        presets: [
          [
            "@nrwl/react/babel",
            {
              "runtime": "automatic",
              "importSource": "react",
              "useBuiltIns": "usage",
              "decorators": {
                "decoratorsBeforeExport": true,
                // "legacy": true
              },
              "classProperties": {
                "loose": false
              }
            }
          ]
        ],
        "plugins": [
          [
            "@babel/plugin-proposal-decorators",
            {
              "version": "2022-03"
            }
          ],
          '@babel/plugin-transform-class-static-block'
        ]
      }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/csr-example',
};
