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





