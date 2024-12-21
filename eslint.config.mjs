import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const styleLintConfig = stylistic.configs.customize({
  indent: 2,
  quotes: "double",
  semi: true,
  jsx: true,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  styleLintConfig,
];

export default eslintConfig;