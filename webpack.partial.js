const webpack = require('webpack')

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            PWA_BASE_PATH: JSON.stringify(process.env.PWA_BASE_PATH || ''),
        }),
    ],
}
