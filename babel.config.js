const babelConfig = {
  presets: [["@babel/preset-react", {
    useBuiltIns: "entry",
    corejs: 2
  }], "@babel/preset-env"],
  plugins: ["@babel/plugin-syntax-dynamic-import",'@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
}

module.exports = babelConfig