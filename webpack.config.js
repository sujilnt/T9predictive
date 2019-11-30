const path = require("path");
const webpack = require("webpack");
const webPackmerge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const NpmInstallPlugin = require("npm-install-webpack-plugin");
/**
 *  server mode Config 
 * default : production
 */
const serverModeConfig = (env = "prod") => require(`./webpack/webpack.server.${env}.js`)(env);
/**
 *  client mode Config 
 * default : production
 */
const clientModeConfig = (env = "prod") => require(`./webpack/webpack.client.${env}.js`)(env);
/**
 *  Seperate configuration for server and client projects .
 *  default configuration will be for sever production (webpack.server.prod.js)
 *  
 */
module.exports = ({ mode, project } = { mode: "prod", project: "server" }) => {
    if (project === "server") {
        // server side configuration 
        return webPackmerge({
            entry: path.resolve("./src/server/index.js"),
            target: "node",
            externals: [nodeExternals()],
            watch: true,
            resolve: {
                alias: {
                    src: path.resolve(__dirname, "./src/")
                },
            },
            node: {
                // Need this when working with express, otherwise the build fails
                __dirname: false, // if you don't put this is, __dirname
                __filename: false, // and __filename return blank or /
                fs: "empty",
            },
            output: {
                filename: "server.bundle.js",
                path: path.join(__dirname, "dist"),
            },
        },
            serverModeConfig(mode) //Server configuaration from webpack.server.(dev|prod).js
        )
    } else {
        // client side configuration 
        return webPackmerge({
            entry: path.resolve("./src/client/index.js"),
            watch: true,
            output: {
                filename: "client.bundle.js",
                path: path.join(__dirname, "dist"),
            },
        }, clientModeConfig(mode) // client configuaration from webpack.client.(dev|prod).js
        )
    }
};