/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  bracketSpacing: true,
  printWidth: 90,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
