import {
  require_plugin
} from "./chunk-DCEQBAEZ.js";
import {
  __commonJS
} from "./chunk-CQXHTUV2.js";

// node_modules/@tailwindcss/aspect-ratio/src/index.js
var require_src = __commonJS({
  "node_modules/@tailwindcss/aspect-ratio/src/index.js"(exports, module) {
    var plugin = require_plugin();
    var baseStyles = {
      position: "relative",
      paddingBottom: `calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)`
    };
    var childStyles = {
      position: "absolute",
      height: "100%",
      width: "100%",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0"
    };
    var noneComponent = {
      ".aspect-none": {
        position: "static",
        paddingBottom: "0"
      },
      ".aspect-none > *": {
        position: "static",
        height: "auto",
        width: "auto",
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      }
    };
    var aspectRatio = plugin(
      function({ addComponents, matchComponents, theme, variants, e }) {
        const values = theme("aspectRatio");
        if (matchComponents) {
          matchComponents(
            {
              "aspect-w": (value) => [
                {
                  ...baseStyles,
                  "--tw-aspect-w": value
                },
                {
                  "> *": childStyles
                }
              ],
              "aspect-h": (value) => ({ "--tw-aspect-h": value })
            },
            { values }
          );
          addComponents(noneComponent);
          return;
        }
        const baseSelectors = Object.entries(values).map(([key, value]) => {
          return `.${e(`aspect-w-${key}`)}`;
        }).join(",\n");
        const childSelectors = Object.entries(values).map(([key, value]) => {
          return `.${e(`aspect-w-${key}`)} > *`;
        }).join(",\n");
        addComponents(
          [
            {
              [baseSelectors]: baseStyles,
              [childSelectors]: childStyles
            },
            noneComponent,
            Object.entries(values).map(([key, value]) => {
              return {
                [`.${e(`aspect-w-${key}`)}`]: {
                  "--tw-aspect-w": value
                }
              };
            }),
            Object.entries(values).map(([key, value]) => {
              return {
                [`.${e(`aspect-h-${key}`)}`]: {
                  "--tw-aspect-h": value
                }
              };
            })
          ],
          variants("aspectRatio")
        );
      },
      {
        theme: {
          aspectRatio: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13",
            14: "14",
            15: "15",
            16: "16"
          }
        },
        variants: {
          aspectRatio: ["responsive"]
        }
      }
    );
    module.exports = aspectRatio;
  }
});
export default require_src();
//# sourceMappingURL=@tailwindcss_aspect-ratio.js.map
