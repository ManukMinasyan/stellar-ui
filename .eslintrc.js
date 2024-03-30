// .eslintrc.js
module.exports = {
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.vue', '.ts', '.d.ts'],
            },
            alias: {
                extensions: ['.vue', '.js', '.ts', '.scss', '.d.ts'],
                map: [
                    ['@', './packages/stellar/src'],
                    ['@/constants', './packages/stellar/src/constants'],
                    ['@/components', './packages/stellar/src/components'],
                    ['@/pages', './packages/stellar/src/pages'],
                    ['@/router', './packages/stellar/src/router'],
                    ['@/store', './packages/stellar/src/store'],
                    ['@/styles', './packages/stellar/src/styles'],
                    ['@/types', './packages/stellar/src/types'],
                    ['@/utils', './packages/stellar/src/utils'],
                ],
            },
        },
    },
};