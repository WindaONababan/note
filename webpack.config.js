const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app.js", // File utama aplikasi
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development", // Hanya deklarasikan satu kali

  module: {
    rules: [
      {
        test: /\.js$/, // Untuk semua file JavaScript
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Pastikan file ini ada di root proyek
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css.styles.css", // Simpan di dist/
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 5500,
    open: true, // Membuka browser otomatis saat server berjalan
  },
};
