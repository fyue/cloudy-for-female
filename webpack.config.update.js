const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
const webpack = require('webpack'); // eslint-disable-line
const IS_DEV = process.env.NODE_ENV !== 'production';
const path = require('path'); // eslint-disable-line
const srcPath = path.resolve('./src');

/*const xx = {
  context: 'D:\\Sinx\\project\\yunhuojia1.0女士',
  entry: {index: 'D:\\Sinx\\project\\yunhuojia1.0女士\\src/index.js'},
  output: {
    path: 'D:\\Sinx\\project\\yunhuojia1.0女士\\build',
    filename: '[name].min.js',
    chunkFilename: 'chunks/[name]/[chunkhash].js',
    publicPath: '',
    pathinfo: false
  },
  module: {rules: [[Object], [Object], [Object]]},
  plugins: [ProvidePlugin {definitions: [Object]},
    HtmlWebpackPlugin {options: [Object]},
    DefinePlugin {definitions: [Object]},
    CaseSensitivePathsPlugin {options: {}, pathCache: {}, fsOperations: 0, primed: false},
    WatchMissingNodeModulesPlugin {
      nodeModulesPath: 'D:\\Sinx\\project\\yunhuojia1.0女士\\node_modules'
    },
    ExtractTextPlugin {filename: '[name].min.css', id: 1, options: [Object]},
    UglifyJsPlugin {options: [Object]},
    OptimizeCssAssetsPlugin {options: [Object], lastCallInstance: [Object]}],
  resolve: {extensions: ['.js', '.json', '.jsx']}
};*/

module.exports = (config) => {
  const { module, resolve } = config;

  const updatedConfig =  {
    ...config,
    module: {
      ...module,
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }, {
          test: /\.css/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader'],
          }),
        },
        {
          test: /\.mp3$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          query: {
            // CSS图片目录
            name: IS_DEV ? '[path][name].[ext]' : 'assets/mp3/[hash].[ext]',
          }
        },
        {
          test: /\.(mp4|mov)/,
          exclude: /node_modules/,
          loader: 'file-loader',
          query: {
            // CSS图片目录
            name: IS_DEV ? '[path][name].[ext]' : 'assets/video/[hash].[ext]',
          }
        }, {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            // CSS图片目录
            name: IS_DEV ? '[path][name].[ext]' : 'assets/[path][name].[ext]',
          }
        }, {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  localIdentName: '[sx][hash:base64:8]',
                  modules: true,
                  camelCase: true,
                  sourceMap: IS_DEV
                }
              }, {
                loader: 'px2rem-loader',
                options: {
                  remUnit: 108,
                  remPrecision: 8,
                }
              }, {
                loader: 'less-loader',
                options: {
                  sourceMap: IS_DEV
                }
              }],
          }),
        },
      ]
    },
    resolve: {
      ...resolve,
      alias: {
        components: srcPath + '/components',
      }
    }
  };
  updatedConfig.plugins.push(
    new ExtractTextPlugin({filename: '[name].min.css', allChunks: true})
  );
  return updatedConfig;
};

/*updatedConfig = {
  context: 'D:\\Sinx\\project\\yunhuojia1.0女士',
  entry: {index: 'D:\\Sinx\\project\\yunhuojia1.0女士\\src/index.js'},
  output: {
    path: 'D:\\Sinx\\project\\yunhuojia1.0女士\\build',
    filename: '[name].min.js',
    chunkFilename: 'chunks/[name]/[chunkhash].js',
    publicPath: '',
    pathinfo: false
  },
  module: {rules: [[Object], [Object], [Object], [Object], [Object], [Object]]},
  plugins: [ProvidePlugin {definitions: [Object]},
    HtmlWebpackPlugin {options: [Object]},
    DefinePlugin {definitions: [Object]},
    CaseSensitivePathsPlugin {options: {}, pathCache: {}, fsOperations: 0, primed: false},
    WatchMissingNodeModulesPlugin {
      nodeModulesPath: 'D:\\Sinx\\project\\yunhuojia1.0女士\\node_modules'
    },
    ExtractTextPlugin {filename: '[name].min.css', id: 1, options: [Object]},
    UglifyJsPlugin {options: [Object]},
    OptimizeCssAssetsPlugin {options: [Object], lastCallInstance: [Object]},
    ExtractTextPlugin {filename: '[name].min.css', id: 1, options: [Object]}],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {components: 'D:\\Sinx\\project\\yunhuojia1.0女士\\src/components'}
  }
};*/
