module.exports = {
    extends: [
        'airbnb-base',
        'plugin:vue/essential',
    ],
    rules: {
        'no-param-reassign': ['error', {'props': false}],
        'comma-dangle': ['error', 'never'],
        'indent': ['error', 4, {'SwitchCase': 1, 'ignoredNodes': ['Program']}],
        'no-console': ['error', { 'allow': ['warn', 'error']}],
        'no-new': 'off',
        'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
        'no-restricted-properties': 'off',
        'no-alert': 'off'
    }
};