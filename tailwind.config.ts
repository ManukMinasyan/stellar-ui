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
        ...generateSafelist(['primary', 'blue', 'red', 'green'])
    ],
    content: {
        files: [
            './docs/**/*.{vue,mjs,ts}',
            './src/**/*.{vue,mjs,ts}',
            './src/*.{mjs,js,ts}'
        ]
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                primary: colors.indigo
            },
            gridRow: {
                'span-8': 'span 8 / span 8'
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