const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
    entry: './src/bootstrap.js',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3007,
    },
    output: {
        publicPath: 'http://localhost:3007/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app1",
            library: { type: "var", name: "app1" },
            filename: "remoteEntry.js",
            exposes: {
                Empty: "./src/empty.js",
            },
            shared: {
                "lodash": "lodash",
            },
        }),
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./index-template.html",
        }),
        // new BundleAnalyzerPlugin(),
    ],
};