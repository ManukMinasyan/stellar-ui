import { copy, remove } from 'fs-extra'

async function main() {
    await remove('../.vitepress/stellar-ui')
    await copy('../../node_modules/stellar-ui', '../.vitepress/stellar-ui', { dereference: true })
}

main()