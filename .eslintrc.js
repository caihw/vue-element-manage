module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
    'comma-dangle': [2, 'always-multiline'],
  }
};
