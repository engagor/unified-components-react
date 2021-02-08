module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "overrides": [
        {
            "files": ["*.js", "*.jsx"],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": "off",
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "version": "17.0.1"
        }
    },
    "plugins": [
        "react",
        "react-hooks",
        "import",
    ],
    "globals": {
    },
    "rules": {
        "strict": 0,
        "no-useless-escape": "off",
        "no-mixed-spaces-and-tabs": "error",
        "react/prop-types": "off",
        "react/display-name": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "keyword-spacing": ["error"],
        "linebreak-style": ["error", "unix"],
        "no-console": ["error", {"allow": ["warn", "error"]}],
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/ban-ts-comment": [
            "error",
            { "ts-expect-error": "allow-with-description" },
        ],
        "@typescript-eslint/camelcase": "off",
        "no-prototype-builtins": "off",
        "no-unused-vars": "error",
    }
};
