const presets = ["@babel/preset-env", "@babel/preset-react"];

const plugins = [
  [
    "babel-plugin-styled-components",
    {
      displayName: process.env["NODE_ENV"] !== "production",
      transpileTemplateLiterals: true
    }
  ],
];

module.exports = {
  presets,
  plugins
};
