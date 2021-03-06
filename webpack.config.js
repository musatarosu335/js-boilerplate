const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const publicDir = path.join(__dirname, '/public');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';

  return {
    entry: ['./src/index.jsx'],
    output: {
      path: publicDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: [/\.js$/, /\.jsx$/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publicDir,
    },
    devtool: IS_DEVELOPMENT ? 'inline-source-map' : '',
    // console.log()の削除
    optimization: {
      minimizer: IS_DEVELOPMENT
        ? []
        : [
            new UglifyJSPlugin({
              uglifyOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ],
    },
  };
};
