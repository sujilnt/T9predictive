const webpack = require("webpack");
module.exports = () => ({
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: ["babel-loader"],
            },
        ],
    },
});