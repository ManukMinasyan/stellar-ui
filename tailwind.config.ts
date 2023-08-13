import type {Config} from 'tailwindcss'
import { defaultExtractor as createDefaultExtractor } from 'tailwindcss/lib/lib/defaultExtractor.js'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from "tailwindcss/colors";
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'
import { customSafelistExtractor, generateSafelist } from './src/constants/colors'
import { addDynamicIconSelectors } from '@iconify/tailwind';

const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
    darkMode: 'class',
    safelist:[
        ...generateSafelist(['primary'])
    ],
    content: {
        files: [
            './docs/**/*.{vue,mjs,ts}',
            './src/**/*.{vue,mjs,ts}',
            './src/*.{mjs,js,ts}'
        ],
        transform: {
            vue: (content) => {
                return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
        },
        extract: {
            vue: (content) => {
                return [
                    ...defaultExtractor(content),
                    // TODO Change colors to tailwind config actual colors
                    ...customSafelistExtractor(
                        'S',
                        content, 
                        ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchisa', 'pink', 'rose'], 
                        ['primary', 'red']
                        )
                ]
            }
        }
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            },
            maxWidth: {
                '8xl': '90rem'
            },
            colors: {
                primary: colors.indigo,
            }
        }
    },
    plugins: [
        forms({strategy: 'class'}),
        aspectRatio,
        typography,
        containerQueries,
        // Iconify plugin
        addDynamicIconSelectors(),
    ],
}