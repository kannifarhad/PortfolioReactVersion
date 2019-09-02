
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry : './index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public', 'assets'),
    },
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 3000,
                            name:'./images/[name].[ext]'
                        }
                    }
                ]
                
            },
            {
                test: /\.ttf$/,
                use: [
                  {
                    loader: 'ttf-loader',
                    options: {
                      name: './font/[hash].[ext]',
                    }
                  },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    plugins: [
        // other plugins,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
    devServer: {
        port:8080,
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/assets/',
        historyApiFallback: true
    }

};
