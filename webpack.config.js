var path = require('path'),
    CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        app: './src/app.js',
        components: './src/components/components.bundle.js'
    },

    output: {
        path: 'build',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new CommonsChunkPlugin({
            filename: 'commons.js',
            name: 'commons'
        })
    ]
}
