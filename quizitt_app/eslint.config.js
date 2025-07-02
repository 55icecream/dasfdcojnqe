// const { defineConfig } = require("eslint/config");
// const expoConfig = require("eslint-config-expo/flat");

// module.exports = defineConfig([
//   expoConfig,
//   {
//     ignores: ["dist/*"],

//     plugins: {
//       "react-native": require("eslint-plugin-react-native"),
//     },

//     rules: {
//       "react-native/no-raw-text": [
//         "error",
//         {
//           skip: ["StyledText", "Trans"],
//         },
//       ],
//       "react/jsx-no-literals": [
//         "warn",
//         {
//           noStrings: true,
//           skipProps: true,
//           allowedStrings: ["OK", "Cancel"],
//         },
//       ],
//     },
//   },
// ]);

// eslint.config.js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    plugins: {
      "react-native": require("eslint-plugin-react-native"),
    },
    rules: {
      "react/jsx-no-literals": [
        "warn", // 1st element: boolean severity or string level
        {
          noStrings: true,
          allowedStrings: ["OK", "Cancel"],
          // ignoreProps must be under `options.elementOverrides` in some versions,
          // but in many plugin versions it’s actually `ignoreProps`.
          // To avoid the boolean error, nest your options object properly:
        },
      ],
    },
  },
]);
