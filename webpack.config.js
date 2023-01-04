module.exports = {
  // entryポイント：何をコンパイルするか
  entry: {
    // bundle：どこをバンドルするか
    bundle: "./src/index.ts",
  },
  // output：どこに出力するか
  output: {
    // path：パスの指定 __dirnameはルートディレクトリ
    path: `${__dirname}/dist`,
    // filename：出力するファイル名 nameでbundleのファイル名になる
    filename: "[name].js",
  },
  // mode：developmentで開発モード productionでファイルが軽い形でコンパイルされる
  // mode: "development",
  mode: "production",
  resolve: {
    // 拡張子を判断してくれる
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    // 自動的にブラウザを立ち上げる
    open: true,
  },
  module: {
    rules: [
      {
        // 拡張子.tsをコンパイルするというルール
        test: /\.ts$/,
        // ts-loaderでコンパイルする
        loader: "ts-loader",
      },
    ],
  },
};