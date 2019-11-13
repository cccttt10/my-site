module.exports = {
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'plugins': ['simple-import-sort', 'react', '@typescript-eslint'],
    'env': {
        'node': true,
        'es6': true,
        'browser': true
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        // 'project': 'tsconfig.json',
        'ecmaVersion': 9,
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'rules': {
        'no-var': 'error',
        'require-await': 'error',
        'no-trailing-spaces': 'error',
        'eqeqeq': 'error',
        'no-console': 'error',
        'camelcase': 'error',
        'no-unused-vars': [
            'error',
            {
                'varsIgnorePattern': 'React',
                'argsIgnorePattern': '^(resource|props)$'
            }
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/jsx-key': 'warn',
        'react/prop-types': 'off',
        'simple-import-sort/sort': 'error',
        'sort-imports': 'off',
        'import/order': 'off'
    },
    'settings': {
        'react': {
            'createClass': 'createReactClass',
            'pragma': 'React',
            'version': 'detect',
            'flowVersion': '0.53'
        },
        'propWrapperFunctions': [
            'forbidExtraProps',
            { 'property': 'freeze', 'object': 'Object' },
            { 'property': 'myFavoriteWrapper' }
        ],
        'linkComponents': ['Hyperlink', { 'name': 'Link', 'linkAttribute': 'to' }]
    }
};
