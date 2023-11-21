import colors from './colors.config'

export default {
    ui: {
        strategy: 'override',
        colors,
        ...STELLAR_UI_APP_CONFIG.ui ?? {},
    }
}