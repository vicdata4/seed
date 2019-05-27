import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';

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
            targets: ['src/assets', './index.html'],
            outputFolder: 'build'
        }),
        serve({
            open: true,
            contentBase: 'build',
            host: ['127.0.0.1'],
            port: 3700
        })
    ]
}