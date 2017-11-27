var path=require("path")
var webpack=require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
  entry:path.join(__dirname,"src/index.js"),
  output:{
    path:path.join(__dirname,"dist"),
    filename:"bundle.js"
  },
  //配置loader
  module:{
    //这数组里面放的一系列的规则
    rules:[
      { 
        //test:指的就是正则表达式，
        test:/\.css$/,
        use:["style-loader","css-loader"]
      },
      {
        test:/\.less$/,
        use:["style-loader","css-loader","less-loader"]
      },
      {
        test:/\.sass$/,
        use:["style-loader","css-loader","sass-loader"]
      },
      {
        test:/\.(jpg|png|gif|jpeg|svg|bmp)$/,
        use:[{ 
          loader:"url-loader",
          // options:{
          //   limit: 50*1024
          // }
        }]
      },
      {
        test:/\.(woff|woff2|eot|ttf)$/,
        use:["url-loader"]
      },
      {
        test:/\.js$/,
        // exclude:/node_modules/,
        use:["babel-loader"]
      }
    ]
  },
  devServer:{
    port:9999,
    hot:true,
    contentBase:path.join(__dirname,"src")
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:path.join(__dirname,"src/index.html")
    })
  ]
}