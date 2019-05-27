# RollUp_Proyect


## RollUp installation


npm install -g rollup

npm install --save-dev rollup

Create main file manually

main.js file 

Then run

rollup main.js --o bundle.js -f cjs (bundle.js will be generated (output))

## RollUp Plugins

npm i -S -D rollup-plugin-json

npm i -S -D rollup-plugin-node-resolve

npm i -S -D rollup-plugin-commonjs


## RollUp config file

import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/main.js',
    output: {
        file:'bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        commonJS({
            includes: 'node_modules/**'
        }),
        json(),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify(),
        copy({
            tarjets: ['src/assets', './index.html'],
            outputFolder: 'build'
        })
    ]
}

## Babel installation

Run: npm install @babel/core @babel/preset-env rollup-plugin-babel


## Code minification

npm install rollup-plugin-uglify --save-dev

## Static files

npm i rollup-plugin-copy --save-dev

## Dev server

npm install rollup-plugin-serve --save-dev







