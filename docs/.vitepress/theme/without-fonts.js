import './styles/vars.css';
import './styles/base.css';
import './styles/utils.css';
import './styles/components/custom-block.css';
import './styles/components/vp-code.css';
import './styles/components/vp-code-group.css';
import './styles/components/vp-doc.css';
import './styles/components/vp-sponsor.css';
import VPBadge from './components/VPBadge.vue';
import Layout from './Layout.vue';
import Logo from "../components/Logo.vue";
import HomePageDemo from "../components/HomePageDemo.vue";
import DemoContainer from "../components/DemoContainer.vue";
import Placeholder from "../components/content/Placeholder.vue";
import StellarUI from 'stellar-ui'
// Note: if we add more optional components here, i.e. components that are not
// used in the theme by default unless the user imports them, make sure to update
// the `lazyDefaultThemeComponentsRE` regex in src/node/build/bundle.ts.
export { default as VPImage } from './components/VPImage.vue';
export { default as VPButton } from './components/VPButton.vue';
export { default as VPHomeHero } from './components/VPHomeHero.vue';
export { default as VPHomeFeatures } from './components/VPHomeFeatures.vue';
export { default as VPHomeSponsors } from './components/VPHomeSponsors.vue';
export { default as VPDocAsideSponsors } from './components/VPDocAsideSponsors.vue';
export { default as VPSponsors } from './components/VPSponsors.vue';
export { default as VPTeamPage } from './components/VPTeamPage.vue';
export { default as VPTeamPageTitle } from './components/VPTeamPageTitle.vue';
export { default as VPTeamPageSection } from './components/VPTeamPageSection.vue';
export { default as VPTeamMembers } from './components/VPTeamMembers.vue';
export { useSidebar } from './composables/sidebar';
const theme = {
    Layout,
    enhanceApp: ({ app }) => {
        app.use(StellarUI)
        app.component('Logo', Logo);
        app.component('Badge', VPBadge);
        app.component('HomePageDemo', HomePageDemo)
        app.component('DemoContainer', DemoContainer)
        app.component('Placeholder', Placeholder)
    }
};
export default theme;
