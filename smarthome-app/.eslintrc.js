module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "plugin:vue/vue3-essential",
      "eslint:recommended",
      "plugin:prettier/recommended", // Verwendet die empfohlene Prettier-Konfiguration
    ],
    parserOptions: {
      parser: "@babel/eslint-parser",
      requireConfigFile: false,
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
  };
  