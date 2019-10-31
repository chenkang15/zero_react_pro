// webpack.base.conf.js
const path = require('path');
const APP_PATH = path.resolve(__dirname, './src');
const ROOT_PATH = path.resolve(__dirname, './');
const DIST_PATH = path.resolve(__dirname, './dist');

const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
module.exports = {
    entry: {
        app: './src/index.tsx',
        framework: ['react','react-dom'],
    },
    output: {
        filename: 'js/bundle.js',
        path: DIST_PATH
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.less', '.json', '.md'],
        modules: [
            path.resolve(__dirname, 'src'),
            // path.resolve(__dirname, 'tests'),
            path.resolve(__dirname, 'public'),
            NODE_MODULES_PATH
        ],
        alias: {
            '@antd': path.resolve(NODE_MODULES_PATH, 'antd/es'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'awesome-typescript-loader',
                },
                exclude: NODE_MODULES_PATH,
                include: APP_PATH
            },
            {
                test: /\.js[x]?$/,
                exclude: NODE_MODULES_PATH,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader?cacheDirectory=true',
                },
                exclude: NODE_MODULES_PATH,
                include: APP_PATH
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                framework: {
                    test: "framework",
                    name: "framework",
                    enforce: true
                }
            }
        }
    }
};
