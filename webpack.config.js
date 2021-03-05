const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    // Extracts css to a file
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader'
                ],
            },
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};
