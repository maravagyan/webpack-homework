const path = require ('path')

module.exports = {
    mode: 'production',
    entry: {
        app:'./src/index.js',
        main:'./src/index.js',
    },
    output: {
        clean:true,
        filename: '[name].[contenthash].js',
        path: path.resolve( __dirname, 'dist')
    }
}