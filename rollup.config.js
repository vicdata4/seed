import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

export default {
    input: 'src/main.js',
    output: {
        file:'bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        commonJS({
            includes: 'node_modules/xx'
        }),
        json()
    ]
}