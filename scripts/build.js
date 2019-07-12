/* eslint-disable no-console */
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const { rollupConfig } = require('./utils/rollupConfig.js');
const { output, ...config } = rollupConfig({
  output: {
    entryFileNames: 'main-es5.js'
  },
  plugins: [
    babel({
      babelrc: false,
      comments: true,
      sourceMap: true,
      presets: [
        ['@babel/preset-env', {
          modules: false,
          loose: true
        }]
      ],
      exclude: 'node_modules/**'
    })
  ]
});

rollup(config)
  .then((bundle) => bundle.write(output))
  .finally(() => {
    console.log('Build correct');
  }).catch((error) => console.log(error));
