import siteData from '@siteData';
import { readonly, shallowRef } from 'vue';
// site data is a singleton
export const siteDataRef = shallowRef((import.meta.env.PROD ? siteData : readonly(siteData)));
// hmr
if (import.meta.hot) {
    import.meta.hot.accept('/@siteData', (m) => {
        if (m) {
            siteDataRef.value = m.default;
        }
    });
}
// per-app data
