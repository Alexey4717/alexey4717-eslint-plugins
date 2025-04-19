import pluginJs from "@eslint/js";
import pluginNode from "eslint-plugin-node";
import eslintPlugin from "eslint-plugin-eslint-plugin";

export default [
    pluginJs.configs.recommended,
    ...pluginNode.configs["flat/mixed-esm-and-cjs"],
    eslintPlugin.configs["flat/recommended"],

    // Добавляем env, если необходимо для Node.js
    {
        env: {
            node: true,
        },
    },

    // Добавляем overrides, если нужны специфичные настройки для файлов, например, для тестов
    {
        files: ["tests/**/*.js"],
        env: { mocha: true },
    },
];
