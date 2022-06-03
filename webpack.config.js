const path = require(`path`);

module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `main.js`,
    },
    devServer: {
        static: {
          directory: path.join(__dirname, './'),
        },
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    watch: true,
}