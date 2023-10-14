const path = require('path')

module.exports = {
    title: 'Stellar UI',
    description: 'Just playing around.',
    base: '/stellar-ui/',
    themeConfig: {
        repo: 'https://github.com/ManukMinasyan/stellar-ui',
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    {text: 'Introduction', link: '/'},
                    {text: 'Installation', link: '/getting-started/installation'},
                    {text: 'Theming', link: '/getting-started/theming'},
                ],
            },
            {
                text: 'Elements',
                items: [
                    {text: 'Accordion', link: '/elements/accordion'},
                    {text: 'Avatar', link: '/elements/avatar'},
                    {text: 'Badge', link: '/elements/badge'},
                    {text: 'Button', link: '/elements/button'},
                    {text: 'Dropdown', link: '/elements/dropdown'},
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
                    {text: 'Checkbox', link: '/forms/checkbox'},
                    {text: 'Radio', link: '/forms/radio'},
                    {text: 'Toggle', link: '/forms/toggle'},
                    {text: 'Form Group', link: '/forms/form-group'},
                ],
            },
            {
                text: 'Data',
                items: [
                    {text: 'Table', link: '/data/table'},
                ],
            },
            {
                text: 'Overlays',
                items: [
                    {text: 'Modal', link: '/overlays/modal'},
                    {text: 'Popover', link: '/overlays/popover'},
                    {text: 'Notification', link: '/overlays/notification'},
                ],
            },
            {
                text: 'Layout',
                items: [
                    {text: 'Card', link: '/layout/card'}
                ],
            }
        ],
    },
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../../src'),
                '#constants': path.resolve(__dirname, '../../src/constants'),
                'stellar-ui': path.resolve(__dirname, '../../src'),
            },
            dedupe: ['vue'], // avoid error when using dependencies that also use Vue
        }
    }
}
