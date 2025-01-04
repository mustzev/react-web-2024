import stylistic from '@stylistic/eslint-plugin'

export default [
    {
        rules: {
            "@typescript-eslint/no-unused-vars": "warn"
        }
    },
    stylistic.configs.customize({
        quotes: 'single',
        jsxQuotes: 'prefer-double'
    })
]
