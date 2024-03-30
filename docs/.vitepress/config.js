const path = require('path')

module.exports = {
    title: 'Stellar UI',
    description: 'Fully styled and customizable components for Vue 3',
    base: '/stellar-ui/',
    head: [
        ['link', { rel: 'icon', href: '/stellar-ui/favicon.ico' }],
        ['meta', { property: 'og:image', content: '/stellar-ui/og-image.png' }]
    ],
    themeConfig: {
        repo: 'https://github.com/ManukMinasyan/stellar-ui',
        logo: { light: '/logo-light.svg', dark: '/logo-dark.svg', alt: 'Stellar UI Logo' },
        siteTitle: '',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/ManukMinasyan/stellar-ui'}
        ],
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: 'Getting Started',
                collapsed: false,
                items: [
                    {text: 'Introduction', link: '/getting-started/introduction'},
                    {text: 'Installation', link: '/getting-started/installation'},
                    {text: 'Theming', link: '/getting-started/theming'},
                    {text: 'Shortcuts', link: '/getting-started/shortcuts'},
                ],
            },
            {
                text: 'Elements',
                collapsed: false,
                items: [
                    {text: 'Accordion', link: '/elements/accordion'},
                    {text: 'Alert', link: '/elements/alert'},
                    {text: 'Avatar', link: '/elements/avatar'},
                    {text: 'Badge', link: '/elements/badge'},
                    {text: 'Button', link: '/elements/button'},
                    {text: 'Dropdown', link: '/elements/dropdown'},
                    {text: 'Icon', link: '/elements/icon'},
                    {text: 'Kbd', link: '/elements/kbd'},
                    {text: 'Progress', link: '/elements/progress'},
                    {text: 'Meter', link: '/elements/meter'},
                    {text: 'Chip', link: '/elements/chip'},
                ],
            },
            {
                text: 'Forms',
                collapsed: false,
                items: [
                    {text: 'Input', link: '/forms/input'},
                    {text: 'InputMenu', link: '/forms/input-menu'},
                    {text: 'Textarea', link: '/forms/textarea'},
                    {text: 'Select', link: '/forms/select'},
                    {text: 'Select Menu', link: '/forms/select-menu'},
                    {text: 'Checkbox', link: '/forms/checkbox'},
                    {text: 'Radio', link: '/forms/radio'},
                    {text: 'Toggle', link: '/forms/toggle'},
                    {text: 'Range', link: '/forms/range'},
                    {text: 'Form Group', link: '/forms/form-group'},
                    {text: 'Form', link: '/forms/form'},
                ],
            },
            {
                text: 'Data',
                collapsed: false,
                items: [
                    {text: 'Table', link: '/data/table'},
                ],
            },
            {
                text: 'Navigation',
                collapsed: false,
                items: [
                    {text: 'Tabs', link: '/navigation/tabs'},
                    {text: 'Pagination', link: '/navigation/pagination'},
                    {text: 'CommandPalette', link: '/navigation/command-palette'},
                    {text: 'Breadcrumb', link: '/navigation/breadcrumb'},
                ],
            },
            {
                text: 'Overlays',
                collapsed: false,
                items: [
                    {text: 'Modal', link: '/overlays/modal'},
                    {text: 'Popover', link: '/overlays/popover'},
                    {text: 'Tooltip', link: '/overlays/tooltip'},
                    {text: 'Notification', link: '/overlays/notification'},
                    {text: 'Slideover', link: '/overlays/slideover'},
                ],
            },
            {
                text: 'Layout',
                collapsed: false,
                items: [
                    {text: 'Card', link: '/layout/card'},
                    {text: 'Container', link: '/layout/container'},
                    {text: 'Divider', link: '/layout/divider'},
                    {text: 'Skeleton', link: '/layout/skeleton'}
                ],
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Manuk Minasyan',
        }
    }
}
