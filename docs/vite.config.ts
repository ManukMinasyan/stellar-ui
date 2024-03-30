import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'
import UnoCSS from 'unocss/vite'

export default defineConfig({
    resolve: {
        alias: {
            '@': `${resolve(__dirname, '../packages/stellar/src')}`,
            'stellar-ui': `${resolve(__dirname, '../packages/stellar/src')}`,
        },
        dedupe: ['vue'], // avoid error when using dependencies that also use Vue
    },
    optimizeDeps: {
        exclude: [
            'vue-demi',
            '@vueuse/shared',
            '@vueuse/core',
        ],
    },
    server: {
        hmr: {
            overlay: false,
        },
    },
    plugins: [
        Components({
            dirs: [
                './.vitepress/theme/components',
                './.vitepress/components',
                '../packages/stellar/src/components',
            ],
            extensions: ['vue', 'md'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            resolvers: [
                IconsResolver({
                    prefix: '',
                }),
            ],
        }),
        Icons({
            defaultStyle: 'display: inline-block;',
        }),
        Inspect(),
        UnoCSS(),
        {
            name: 'code-block-escape',
            enforce: 'post',
            transform(code, id) {
                if (!id.endsWith('.md'))
                    return
                return code.replace(/\/\/```/mg, '```')
            },
        },
    ],
    css: {
        postcss: {
            plugins: [
                require("tailwindcss")({
                    config: "../packages/stellar-ui/tailwind.config.ts",
                }),
                require("autoprefixer"),
            ],
        },
    },
})