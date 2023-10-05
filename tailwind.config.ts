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
        ]
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                primary: colors.indigo,
                green: {
                    50: '#EFFDF5',
                    100: '#D9FBE8',
                    200: '#B3F5D1',
                    300: '#75EDAE',
                    400: '#00DC82',
                    500: '#00C16A',
                    600: '#00A155',
                    700: '#007F45',
                    800: '#016538',
                    900: '#0A5331',
                    950: '#052e16'
                }
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