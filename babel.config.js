module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@babel/preset-typescript"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx"],
          alias: {
            "@assets": "./assets",
            "@screens": "./src/views/screens",
            "@navigators": "./src/views/navigators",
            "@state": "./src/state",
            "@utilities": "./src/utilities",
            "@components": "./src/components",
          },
        },
      ],
    ],
  };
};
