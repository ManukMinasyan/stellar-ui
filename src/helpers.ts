import defaultColors from "tailwindcss/colors.js"
import { generateSafelist as generateSafelistColors, excludeColors } from "./constants/colors"

export const generateSafelist = function (themeColors = {}, safelistColors = ["primary"]) {
    const globalColors = {
        ...(themeColors || defaultColors),
    }

    // console.log({ globalColors })

    // @ts-ignore
    globalColors.primary = {
        50: "rgb(var(--color-primary-50) / <alpha-value>)",
        100: "rgb(var(--color-primary-100) / <alpha-value>)",
        200: "rgb(var(--color-primary-200) / <alpha-value>)",
        300: "rgb(var(--color-primary-300) / <alpha-value>)",
        400: "rgb(var(--color-primary-400) / <alpha-value>)",
        500: "rgb(var(--color-primary-500) / <alpha-value>)",
        600: "rgb(var(--color-primary-600) / <alpha-value>)",
        700: "rgb(var(--color-primary-700) / <alpha-value>)",
        800: "rgb(var(--color-primary-800) / <alpha-value>)",
        900: "rgb(var(--color-primary-900) / <alpha-value>)",
        950: "rgb(var(--color-primary-950) / <alpha-value>)",
        DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)",
    }

    // @ts-ignore
    if (globalColors.gray) {
        // @ts-ignore
        globalColors.cool = defaultColors.gray
    }

    // @ts-ignore
    globalColors.gray = {
        50: "rgb(var(--color-gray-50) / <alpha-value>)",
        100: "rgb(var(--color-gray-100) / <alpha-value>)",
        200: "rgb(var(--color-gray-200) / <alpha-value>)",
        300: "rgb(var(--color-gray-300) / <alpha-value>)",
        400: "rgb(var(--color-gray-400) / <alpha-value>)",
        500: "rgb(var(--color-gray-500) / <alpha-value>)",
        600: "rgb(var(--color-gray-600) / <alpha-value>)",
        700: "rgb(var(--color-gray-700) / <alpha-value>)",
        800: "rgb(var(--color-gray-800) / <alpha-value>)",
        900: "rgb(var(--color-gray-900) / <alpha-value>)",
        950: "rgb(var(--color-gray-950) / <alpha-value>)",
    }

    const colors = excludeColors(globalColors)

    return generateSafelistColors(safelistColors || [])
}
