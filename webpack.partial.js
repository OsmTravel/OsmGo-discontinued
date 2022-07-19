const webpack = require('webpack')

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            URL_BASE_PATH: JSON.stringify(process.env.URL_BASE_PATH || ''),
        }),
    ],
}
