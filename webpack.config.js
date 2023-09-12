const path = require("path");

module.exports = {
  //エントリーポイント
  entry: "./src/index.js",

  //ファイルの出力設定
  output: {
    //出力先のパスを設定
    path: path.join(__dirname, "dist"),
    //出力ファイル名
    filename: "bundle.js",
  },
  mode: "development",

  //ローカルサーバーの設定
  devServer: {
    static: "dist",
    open: true,
  },

  module: {
    rules: [
    {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
    },
    ],
   },


};

