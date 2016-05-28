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
    ],

    module: {
        loaders: [
            {
                test: /\.(tag|js)?$/,
                exclude: /node_modules/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'stage-2'],
                    plugins: [
                        'transform-flow-strip-types',
                        'transform-es2015-destructuring',
                        'syntax-object-rest-spread',
                        'transform-object-rest-spread'
                    ]
                }
            }
        ]
    }
}
