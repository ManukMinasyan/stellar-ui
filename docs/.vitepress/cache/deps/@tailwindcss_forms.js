import {
  require_plugin
} from "./chunk-2M6RBOOV.js";
import {
  require_defaultTheme
} from "./chunk-N6DXZ52Q.js";
import {
  require_colors
} from "./chunk-7RNVGW4Q.js";
import "./chunk-LEUC3CDR.js";
import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/mini-svg-data-uri/shorter-css-color-names.js
var require_shorter_css_color_names = __commonJS({
  "node_modules/mini-svg-data-uri/shorter-css-color-names.js"(exports, module) {
    module.exports = {
      aqua: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
      azure: /#f0ffff(ff)?(?!\w)/gi,
      beige: /#f5f5dc(ff)?(?!\w)/gi,
      bisque: /#ffe4c4(ff)?(?!\w)/gi,
      black: /#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,
      blue: /#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,
      brown: /#a52a2a(ff)?(?!\w)/gi,
      coral: /#ff7f50(ff)?(?!\w)/gi,
      cornsilk: /#fff8dc(ff)?(?!\w)/gi,
      crimson: /#dc143c(ff)?(?!\w)/gi,
      cyan: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
      darkblue: /#00008b(ff)?(?!\w)/gi,
      darkcyan: /#008b8b(ff)?(?!\w)/gi,
      darkgrey: /#a9a9a9(ff)?(?!\w)/gi,
      darkred: /#8b0000(ff)?(?!\w)/gi,
      deeppink: /#ff1493(ff)?(?!\w)/gi,
      dimgrey: /#696969(ff)?(?!\w)/gi,
      gold: /#ffd700(ff)?(?!\w)/gi,
      green: /#008000(ff)?(?!\w)/gi,
      grey: /#808080(ff)?(?!\w)/gi,
      honeydew: /#f0fff0(ff)?(?!\w)/gi,
      hotpink: /#ff69b4(ff)?(?!\w)/gi,
      indigo: /#4b0082(ff)?(?!\w)/gi,
      ivory: /#fffff0(ff)?(?!\w)/gi,
      khaki: /#f0e68c(ff)?(?!\w)/gi,
      lavender: /#e6e6fa(ff)?(?!\w)/gi,
      lime: /#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,
      linen: /#faf0e6(ff)?(?!\w)/gi,
      maroon: /#800000(ff)?(?!\w)/gi,
      moccasin: /#ffe4b5(ff)?(?!\w)/gi,
      navy: /#000080(ff)?(?!\w)/gi,
      oldlace: /#fdf5e6(ff)?(?!\w)/gi,
      olive: /#808000(ff)?(?!\w)/gi,
      orange: /#ffa500(ff)?(?!\w)/gi,
      orchid: /#da70d6(ff)?(?!\w)/gi,
      peru: /#cd853f(ff)?(?!\w)/gi,
      pink: /#ffc0cb(ff)?(?!\w)/gi,
      plum: /#dda0dd(ff)?(?!\w)/gi,
      purple: /#800080(ff)?(?!\w)/gi,
      red: /#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,
      salmon: /#fa8072(ff)?(?!\w)/gi,
      seagreen: /#2e8b57(ff)?(?!\w)/gi,
      seashell: /#fff5ee(ff)?(?!\w)/gi,
      sienna: /#a0522d(ff)?(?!\w)/gi,
      silver: /#c0c0c0(ff)?(?!\w)/gi,
      skyblue: /#87ceeb(ff)?(?!\w)/gi,
      snow: /#fffafa(ff)?(?!\w)/gi,
      tan: /#d2b48c(ff)?(?!\w)/gi,
      teal: /#008080(ff)?(?!\w)/gi,
      thistle: /#d8bfd8(ff)?(?!\w)/gi,
      tomato: /#ff6347(ff)?(?!\w)/gi,
      violet: /#ee82ee(ff)?(?!\w)/gi,
      wheat: /#f5deb3(ff)?(?!\w)/gi,
      white: /#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi
    };
  }
});

// node_modules/mini-svg-data-uri/index.js
var require_mini_svg_data_uri = __commonJS({
  "node_modules/mini-svg-data-uri/index.js"(exports, module) {
    var shorterNames = require_shorter_css_color_names();
    var REGEX = {
      whitespace: /\s+/g,
      urlHexPairs: /%[\dA-F]{2}/g,
      quotes: /"/g
    };
    function collapseWhitespace(str) {
      return str.trim().replace(REGEX.whitespace, " ");
    }
    function dataURIPayload(string) {
      return encodeURIComponent(string).replace(REGEX.urlHexPairs, specialHexEncode);
    }
    function colorCodeToShorterNames(string) {
      Object.keys(shorterNames).forEach(function(key) {
        if (shorterNames[key].test(string)) {
          string = string.replace(shorterNames[key], key);
        }
      });
      return string;
    }
    function specialHexEncode(match) {
      switch (match) {
        case "%20":
          return " ";
        case "%3D":
          return "=";
        case "%3A":
          return ":";
        case "%2F":
          return "/";
        default:
          return match.toLowerCase();
      }
    }
    function svgToTinyDataUri(svgString) {
      if (typeof svgString !== "string") {
        throw new TypeError("Expected a string, but received " + typeof svgString);
      }
      if (svgString.charCodeAt(0) === 65279) {
        svgString = svgString.slice(1);
      }
      var body = colorCodeToShorterNames(collapseWhitespace(svgString)).replace(REGEX.quotes, "'");
      return "data:image/svg+xml," + dataURIPayload(body);
    }
    svgToTinyDataUri.toSrcset = function toSrcset(svgString) {
      return svgToTinyDataUri(svgString).replace(/ /g, "%20");
    };
    module.exports = svgToTinyDataUri;
  }
});

// node_modules/@tailwindcss/forms/src/index.js
var require_src = __commonJS({
  "node_modules/@tailwindcss/forms/src/index.js"(exports, module) {
    var svgToDataUri = require_mini_svg_data_uri();
    var plugin = require_plugin();
    var defaultTheme = require_defaultTheme();
    var colors = require_colors();
    var [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme.fontSize.base;
    var { spacing, borderWidth, borderRadius } = defaultTheme;
    var forms = plugin.withOptions(function(options = { strategy: void 0 }) {
      return function({ addBase, addComponents, theme }) {
        const strategy = options.strategy === void 0 ? ["base", "class"] : [options.strategy];
        const rules = [
          {
            base: [
              "[type='text']",
              "[type='email']",
              "[type='url']",
              "[type='password']",
              "[type='number']",
              "[type='date']",
              "[type='datetime-local']",
              "[type='month']",
              "[type='search']",
              "[type='tel']",
              "[type='time']",
              "[type='week']",
              "[multiple]",
              "textarea",
              "select"
            ],
            class: [".form-input", ".form-textarea", ".form-select", ".form-multiselect"],
            styles: {
              appearance: "none",
              "background-color": "#fff",
              "border-color": theme("colors.gray.500", colors.gray[500]),
              "border-width": borderWidth["DEFAULT"],
              "border-radius": borderRadius.none,
              "padding-top": spacing[2],
              "padding-right": spacing[3],
              "padding-bottom": spacing[2],
              "padding-left": spacing[3],
              "font-size": baseFontSize,
              "line-height": baseLineHeight,
              "--tw-shadow": "0 0 #0000",
              "&:focus": {
                outline: "2px solid transparent",
                "outline-offset": "2px",
                "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                "--tw-ring-offset-width": "0px",
                "--tw-ring-offset-color": "#fff",
                "--tw-ring-color": theme("colors.blue.600", colors.blue[600]),
                "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                "box-shadow": `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
                "border-color": theme("colors.blue.600", colors.blue[600])
              }
            }
          },
          {
            base: ["input::placeholder", "textarea::placeholder"],
            class: [".form-input::placeholder", ".form-textarea::placeholder"],
            styles: {
              color: theme("colors.gray.500", colors.gray[500]),
              opacity: "1"
            }
          },
          {
            base: ["::-webkit-datetime-edit-fields-wrapper"],
            class: [".form-input::-webkit-datetime-edit-fields-wrapper"],
            styles: {
              padding: "0"
            }
          },
          {
            // Unfortunate hack until https://bugs.webkit.org/show_bug.cgi?id=198959 is fixed.
            // This sucks because users can't change line-height with a utility on date inputs now.
            // Reference: https://github.com/twbs/bootstrap/pull/31993
            base: ["::-webkit-date-and-time-value"],
            class: [".form-input::-webkit-date-and-time-value"],
            styles: {
              "min-height": "1.5em"
            }
          },
          {
            // In Safari on macOS date time inputs are 4px taller than normal inputs
            // This is because there is extra padding on the datetime-edit and datetime-edit-{part}-field pseudo elements
            // See https://github.com/tailwindlabs/tailwindcss-forms/issues/95
            base: [
              "::-webkit-datetime-edit",
              "::-webkit-datetime-edit-year-field",
              "::-webkit-datetime-edit-month-field",
              "::-webkit-datetime-edit-day-field",
              "::-webkit-datetime-edit-hour-field",
              "::-webkit-datetime-edit-minute-field",
              "::-webkit-datetime-edit-second-field",
              "::-webkit-datetime-edit-millisecond-field",
              "::-webkit-datetime-edit-meridiem-field"
            ],
            class: [
              ".form-input::-webkit-datetime-edit",
              ".form-input::-webkit-datetime-edit-year-field",
              ".form-input::-webkit-datetime-edit-month-field",
              ".form-input::-webkit-datetime-edit-day-field",
              ".form-input::-webkit-datetime-edit-hour-field",
              ".form-input::-webkit-datetime-edit-minute-field",
              ".form-input::-webkit-datetime-edit-second-field",
              ".form-input::-webkit-datetime-edit-millisecond-field",
              ".form-input::-webkit-datetime-edit-meridiem-field"
            ],
            styles: {
              "padding-top": 0,
              "padding-bottom": 0
            }
          },
          {
            base: ["select"],
            class: [".form-select"],
            styles: {
              "background-image": `url("${svgToDataUri(
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${theme(
                  "colors.gray.500",
                  colors.gray[500]
                )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
              )}")`,
              "background-position": `right ${spacing[2]} center`,
              "background-repeat": `no-repeat`,
              "background-size": `1.5em 1.5em`,
              "padding-right": spacing[10],
              "print-color-adjust": `exact`
            }
          },
          {
            base: ["[multiple]"],
            class: null,
            styles: {
              "background-image": "initial",
              "background-position": "initial",
              "background-repeat": "unset",
              "background-size": "initial",
              "padding-right": spacing[3],
              "print-color-adjust": "unset"
            }
          },
          {
            base: [`[type='checkbox']`, `[type='radio']`],
            class: [".form-checkbox", ".form-radio"],
            styles: {
              appearance: "none",
              padding: "0",
              "print-color-adjust": "exact",
              display: "inline-block",
              "vertical-align": "middle",
              "background-origin": "border-box",
              "user-select": "none",
              "flex-shrink": "0",
              height: spacing[4],
              width: spacing[4],
              color: theme("colors.blue.600", colors.blue[600]),
              "background-color": "#fff",
              "border-color": theme("colors.gray.500", colors.gray[500]),
              "border-width": borderWidth["DEFAULT"],
              "--tw-shadow": "0 0 #0000"
            }
          },
          {
            base: [`[type='checkbox']`],
            class: [".form-checkbox"],
            styles: {
              "border-radius": borderRadius["none"]
            }
          },
          {
            base: [`[type='radio']`],
            class: [".form-radio"],
            styles: {
              "border-radius": "100%"
            }
          },
          {
            base: [`[type='checkbox']:focus`, `[type='radio']:focus`],
            class: [".form-checkbox:focus", ".form-radio:focus"],
            styles: {
              outline: "2px solid transparent",
              "outline-offset": "2px",
              "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
              "--tw-ring-offset-width": "2px",
              "--tw-ring-offset-color": "#fff",
              "--tw-ring-color": theme("colors.blue.600", colors.blue[600]),
              "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
              "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
              "box-shadow": `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`
            }
          },
          {
            base: [`[type='checkbox']:checked`, `[type='radio']:checked`],
            class: [".form-checkbox:checked", ".form-radio:checked"],
            styles: {
              "border-color": `transparent`,
              "background-color": `currentColor`,
              "background-size": `100% 100%`,
              "background-position": `center`,
              "background-repeat": `no-repeat`
            }
          },
          {
            base: [`[type='checkbox']:checked`],
            class: [".form-checkbox:checked"],
            styles: {
              "background-image": `url("${svgToDataUri(
                `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
              )}")`
            }
          },
          {
            base: [`[type='radio']:checked`],
            class: [".form-radio:checked"],
            styles: {
              "background-image": `url("${svgToDataUri(
                `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
              )}")`
            }
          },
          {
            base: [
              `[type='checkbox']:checked:hover`,
              `[type='checkbox']:checked:focus`,
              `[type='radio']:checked:hover`,
              `[type='radio']:checked:focus`
            ],
            class: [
              ".form-checkbox:checked:hover",
              ".form-checkbox:checked:focus",
              ".form-radio:checked:hover",
              ".form-radio:checked:focus"
            ],
            styles: {
              "border-color": "transparent",
              "background-color": "currentColor"
            }
          },
          {
            base: [`[type='checkbox']:indeterminate`],
            class: [".form-checkbox:indeterminate"],
            styles: {
              "background-image": `url("${svgToDataUri(
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`
              )}")`,
              "border-color": `transparent`,
              "background-color": `currentColor`,
              "background-size": `100% 100%`,
              "background-position": `center`,
              "background-repeat": `no-repeat`
            }
          },
          {
            base: [`[type='checkbox']:indeterminate:hover`, `[type='checkbox']:indeterminate:focus`],
            class: [".form-checkbox:indeterminate:hover", ".form-checkbox:indeterminate:focus"],
            styles: {
              "border-color": "transparent",
              "background-color": "currentColor"
            }
          },
          {
            base: [`[type='file']`],
            class: null,
            styles: {
              background: "unset",
              "border-color": "inherit",
              "border-width": "0",
              "border-radius": "0",
              padding: "0",
              "font-size": "unset",
              "line-height": "inherit"
            }
          },
          {
            base: [`[type='file']:focus`],
            class: null,
            styles: {
              outline: [
                `1px solid ButtonText`,
                `1px auto -webkit-focus-ring-color`
              ]
            }
          }
        ];
        const getStrategyRules = (strategy2) => rules.map((rule) => {
          if (rule[strategy2] === null)
            return null;
          return { [rule[strategy2]]: rule.styles };
        }).filter(Boolean);
        if (strategy.includes("base")) {
          addBase(getStrategyRules("base"));
        }
        if (strategy.includes("class")) {
          addComponents(getStrategyRules("class"));
        }
      };
    });
    module.exports = forms;
  }
});
export default require_src();
//# sourceMappingURL=@tailwindcss_forms.js.map
