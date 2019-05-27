const { resolve: resolvePath, join: joinPath } = require('path');

const copy = require('rollup-plugin-copy');
const commonJS = require('rollup-plugin-commonJS');
const resolve = require('rollup-plugin-node-resolve');
const progress = require('rollup-plugin-progress');
const del = require('rollup-plugin-delete');

const folder = {
    build: resolvePath('.', 'build'),
    build_assets: resolvePath('.', 'build', 'assets'),
    src: resolvePath('.', 'src'),
    src_assets: resolvePath('.', 'assets')

}

const files = {
    main: joinPath(folder.src, 'index.js'),
    src_index: resolvePath('.', 'index.html'),
    build_index: joinPath(folder.build, 'index.html')
}

