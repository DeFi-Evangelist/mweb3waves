const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const fs = require('fs');
const path = require('path');

const { version } = require('./package.json');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';

const checkDir = dir => !fs.existsSync(dir) && fs.mkdirSync(dir);

const createFolders = folders =>
    folders.forEach(folder => checkDir(path.resolve(__dirname, folder)));

const unlinkFiles = folders =>
    folders.forEach((p) => {
        fs.readdirSync(path.resolve(__dirname, p)).forEach((f) => {
            if (f === '.gitkeep') return;
            fs.unlinkSync(`${p}/${f}`);
        });
    });

const build = async () => {
    createFolders(['public', 'public/build', 'public/build/js']);
    unlinkFiles(['public/build/js']);

    const plugins = [
        /**
         * Dev plugins
         */
        isDevelopment && new webpack.NamedModulesPlugin(),
        /**
         * Common plugins
         */
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(true),
                DEV: isDevelopment,
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template/index.html',
        }),
    ].filter(x => x !== false);

    const entry = ['@babel/polyfill', './src/index.jsx'];

    const config = {
        devServer: {
            historyApiFallback: true,
            hot: true,
        },
        devtool: isDevelopment ? 'inline-source-map' : false,
        entry,
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    test: /\.(js|jsx)$/,
                },
                {
                    loader: 'file-loader?name=[path][name].[ext]',
                    test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                },
                {
                    loader: 'file-loader?name=[path][name].[ext]',
                    test: /\.(png)?$/,
                },
                {
                    loader: 'svg-inline-loader',
                    test: /\.svg$/,
                },
            ],
        },
        optimization: {
            minimize: !isDevelopment,
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'all',
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                    },
                },
            },
        },
        output: {
            chunkFilename: 'build/js/[name].[chunkhash].js',
            filename: `build/js/bundle${isDevelopment ? '' : `.v.${version}`}.js`,
            path: path.resolve(__dirname, 'public/'),
            publicPath: '/',
        },
        plugins,
        resolve: {
            alias: {
                'react-dom': isDevelopment ? '@hot-loader/react-dom' : 'react-dom',
            },
            extensions: ['.js', '.jsx', '.json'],
        },
    };

    return config;
};

module.exports = build();
