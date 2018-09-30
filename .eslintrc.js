module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  plugins: ["prettier"],
  "env": {
    "browser": true
  },
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: true,
        semi: true,
        printWidth: 100,
      },
    ],
    "react/forbid-prop-types": 0
  }
};
