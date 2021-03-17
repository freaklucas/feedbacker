module.exports = {
    root: true,
    env: {
        browser: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    extends: [
        'airbnb-base',
        'plugin:vue/vue3-essential',
        'prettier/vue',
        '@vue/standard',
        'plugin:prettier/recommended'
    ],
    rules: {
        'comma-dangle': 'off',
        'class-methods-use-this': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'implicit-arrow-linebreak': 'off',
        'import/prefer-default-export': 'off',
        "vue/component-name-in-template-casing": ["error", "kebab-case", {
            "ignores": []
        }],
        'prettier/prettier': ['error', {
            'singleQuote': true,
            'endOfLine': 'auto'
        }]
    },
    overrides: [
        {
            files: [
                '**/*.spec.js'
            ],
            env: {
                jest:true
            }
        }
    ]
};