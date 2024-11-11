import { inBrowser, sanitizeFileName } from '../shared';
export { inBrowser } from '../shared';
/**
 * Converts a url path to the corresponding js chunk filename.
 */
export function pathToFile(path) {
    let pagePath = path.replace(/\.html$/, '');
    pagePath = decodeURIComponent(pagePath);
    pagePath = pagePath.replace(/\/$/, '/index'); // /foo/ -> /foo/index
    if (import.meta.env.DEV) {
        // always force re-fetch content in dev
        pagePath += `.md?t=${Date.now()}`;
    }
    else {
        // in production, each .md file is built into a .md.js file following
        // the path conversion scheme.
        // /foo/bar.html -> ./foo_bar.md
        if (inBrowser) {
            const base = import.meta.env.BASE_URL;
            pagePath =
                sanitizeFileName(pagePath.slice(base.length).replace(/\//g, '_') || 'index') + '.md';
            // client production build needs to account for page hash, which is
            // injected directly in the page's html
            let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
            if (!pageHash) {
                pagePath = pagePath.endsWith('_index.md')
                    ? pagePath.slice(0, -9) + '.md'
                    : pagePath.slice(0, -3) + '_index.md';
                pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
            }
            if (!pageHash)
                return null;
            pagePath = `${base}${__ASSETS_DIR__}/${pagePath}.${pageHash}.js`;
        }
        else {
            // ssr build uses much simpler name mapping
            pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, '_'))}.md.js`;
        }
    }
    return pagePath;
}
export let contentUpdatedCallbacks = [];
