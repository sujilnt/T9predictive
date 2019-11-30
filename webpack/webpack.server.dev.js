const webpack = require("webpack");
const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
module.exports = () => ({
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    // A babel-loader  transpiles  es6 to es5 javascript code 
                    "babel-loader",
                    {
                        // eslint-loader : A loader for setting eslint (conde linter tools )
                        loader: "eslint-loader",
                        options: {
                            emitWarning: true,
                        },
                    }
                ],
            },
        ],
    },
    plugins: [
        new NodemonPlugin({
            watch: path.resolve("./dist"),
            verbose: true,
            ext: 'js,njk,json',
        })]
});