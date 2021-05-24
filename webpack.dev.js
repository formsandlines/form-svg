const PATHS = require('./webpack-paths.js');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        ['form-svg']: PATHS.src
    },
    output: {
        path: PATHS.dev,
        filename: '[name].js',
        library: 'form-svg',
        libraryExport: 'default',
        libraryTarget: 'umd'
    }
};