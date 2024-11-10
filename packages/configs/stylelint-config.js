/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard',
        "@stylistic/stylelint-config"
    ],
    plugins: [
        '@stylistic/stylelint-plugin'
    ],
}
