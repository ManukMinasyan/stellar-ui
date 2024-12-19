export type * from './types'

export interface ModuleOptions {
    /**
     * Prefix for components
     * @defaultValue `U`
     * @link https://ui3.nuxt.dev/getting-started/installation/nuxt#prefix
     */
    prefix?: string

    /**
     * Enable or disable `@nuxt/fonts` module
     * @defaultValue `true`
     * @link https://ui3.nuxt.dev/getting-started/installation/nuxt#fonts
     */
    fonts?: boolean

    /**
     * Enable or disable `@nuxtjs/color-mode` module
     * @defaultValue `true`
     * @link https://ui3.nuxt.dev/getting-started/installation/nuxt#colormode
     */
    colorMode?: boolean

    /**
     * Customize how the theme is generated
     * @link https://ui3.nuxt.dev/getting-started/theme
     */
    theme?: {
        /**
         * Define the color aliases available for components
         * @defaultValue `['primary', 'secondary', 'success', 'info', 'warning', 'error']`
         * @link https://ui3.nuxt.dev/getting-started/installation/nuxt#themecolors
         */
        colors?: string[]

        /**
         * Enable or disable transitions on components
         * @defaultValue `true`
         * @link https://ui3.nuxt.dev/getting-started/installation/nuxt#themetransitions
         */
        transitions?: boolean
    }

    /**
     * Configuration for the Nuxt UI devtools.
     */
    devtools?: {
        /**
         * Enable or disable Nuxt UI devtools.
         * @defaultValue `true`
         */
        enabled?: boolean
    }
}