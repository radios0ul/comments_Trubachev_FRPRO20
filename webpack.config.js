const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   mode: 'production',
   entry: './src/index.ts',
   devtool: 'inline-source-map',
   performance: {
      hints: false,
      maxEntrypointSize: 1000000,
      maxAssetSize: 1000000
   },

   devServer: {
      port: 9000,
      compress: true,
      hot: true,
      static: {
         directory: path.join(__dirname, 'dist')
      }
   },

   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(png|svg|jpg|jpeg)$/i,
            type: 'asset/resource'
         }

      ],
   },


   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
   },
   output: {
      filename: 'script.js',
      path: path.resolve(__dirname, 'dist'),
   },
   plugins: [
      new htmlWebpackPlugin({
         title: 'Comments',
         template: './src/index.html'

      })
   ]

};
