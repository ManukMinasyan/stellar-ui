import colors from './colors.config'
import * as ui from '@/ui.config'

export default {
    ui: {
        strategy: 'override',
        ...ui,
        colors
    }
}