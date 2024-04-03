import {resolve} from "path";
import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue';

const config = {
    stellar: {
        plugins: [
            vue()
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
        server: {
            fs: {
                allow: [".."],
            },
        },
        build: {
            lib: {
                entry: resolve(__dirname, 'src/index.ts'),
                name: 'stellar-ui',
                formats: ['es'], // adding 'umd' requires globals set to every external module
                fileName: (format) => `stellar-ui.${format}.js`,
            },
            rollupOptions: {
                // external modules won't be bundled into your library
                external: ['vue', /@popperjs\/.+/], // not every external has a global
                output: {
                    preserveModules: true,
                    inlineDynamicImports: false,
                    // disable warning on src/index.ts using both default and named export
                    exports: 'named',
                    // Provide global variables to use in the UMD build
                    // for externalized deps (not useful if 'umd' is not in lib.formats)
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
            emptyOutDir: false,
        },
    },
    // **
    // Helpers
    // **
    helpers: {
        plugins: [
            vue()
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
        server: {
            fs: {
                allow: [".."],
            },
        },
        build: {
            lib: {
                entry: resolve(__dirname, "./src/helpers.ts"),
                name: 'helpers',
                formats: ['es', "cjs"],
                fileName: (format) => `helpers.${format}.js`,
            },
            rollupOptions: {
                // external modules won't be bundled into your library
                external: ['vue', /@popperjs\/.+/], // not every external has a global
                output: {
                    preserveModules: true,
                    inlineDynamicImports: false,
                    // disable warning on src/index.ts using both default and named export
                    exports: 'named',
                    // Provide global variables to use in the UMD build
                    // for externalized deps (not useful if 'umd' is not in lib.formats)
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
            emptyOutDir: false,
        },
    },
};
console.log(`LIB_NAME: ${process.env.LIB_NAME}`);

const currentConfig = config[process.env.LIB_NAME];
if (currentConfig === undefined) {
    throw new Error('LIB_NAME is not defined or is not valid');
}
export default defineConfig({
    ...currentConfig
});