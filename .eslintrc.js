module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    'env': {
        'browser': true,
        'amd': true,
        'node': true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    'plugins': ['@typescript-eslint', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
        react: {
            version: 'detect',
        },
    },
};
