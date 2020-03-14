/* eslint-disable no-console */
const { rollup } = require('rollup');

const { rollupConfig } = require('./utils/rollupConfig.js');
const { terser } = require('rollup-plugin-terser');

const { output, ...config } = rollupConfig({
  output: {
    entryFileNames: 'main.js'
  },
  plugins: [
    terser({
      module: true,
      safari10: true,
    }),
  ],
  config: {
    treeshake: true
  }
});

rollup(config)
  .then((bundle) => bundle.write(output))
  .finally(() => {
    console.log('Build correct');
  }).catch((error) => console.log(error));
