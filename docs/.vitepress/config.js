const path = require('path')

module.exports = {
    title: 'Stellar UI',
    description: 'Just playing around.',
    base: '/stellar-ui/',
    themeConfig: {
        repo: 'https://github.com/ManukMinasyan/stellar-ui',
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    {text: 'What is Stellar UI?', link: '/'},
                    {text: 'Getting Started', link: '/guide/'},
                ],
            },
            {
                text: 'Elements',
                items: [
                    {text: 'Avatar', link: '/elements/avatar'},
                    {text: 'Badge', link: '/elements/badge'},
                    {text: 'Button', link: '/elements/button'},
                    {text: 'Dropdown', link: '/elements/dropdown'},
                    {text: 'Accordion', link: '/elements/accordion'},
                    {text: 'Icon', link: '/elements/icon'},
                    {text: 'Kbd', link: '/elements/kbd'},
                ],
            },
            {
                text: 'Forms',
                items: [
                    {text: 'Input', link: '/forms/input'},
                    {text: 'Textarea', link: '/forms/textarea'},
                    {text: 'Select', link: '/forms/select'},
                    {text: 'Select Menu', link: '/forms/select-menu'},
                ],
            }
        ],
    },
    vite: {
        resolve: {
            alias: {
                'stellar-ui': path.resolve(__dirname, '../../src'),
            },
            dedupe: ['vue', /@popperjs\/.+/], // avoid error when using dependencies that also use Vue
        }
    }
}
