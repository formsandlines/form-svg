const PATHS = require('./webpack-paths.js');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        ['form-svg']: PATHS.src
    },
    output: {
        path: PATHS.prod,
        filename: '[name].min.js',
        library: 'form-svg',
        libraryExport: 'default',
        libraryTarget: 'umd'
    }
};