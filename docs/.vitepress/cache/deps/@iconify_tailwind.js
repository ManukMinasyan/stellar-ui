import {
  require_plugin
} from "./chunk-DCEQBAEZ.js";
import {
  __commonJS,
  __require
} from "./chunk-CQXHTUV2.js";

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/@iconify/tailwind/dist/plugin.js
var require_plugin2 = __commonJS({
  "node_modules/@iconify/tailwind/dist/plugin.js"(exports) {
    var plugin = require_plugin();
    var fs = require_fs();
    var defaultIconDimensions = Object.freeze(
      {
        left: 0,
        top: 0,
        width: 16,
        height: 16
      }
    );
    var defaultIconTransformations = Object.freeze({
      rotate: 0,
      vFlip: false,
      hFlip: false
    });
    var defaultIconProps = Object.freeze({
      ...defaultIconDimensions,
      ...defaultIconTransformations
    });
    var defaultExtendedIconProps = Object.freeze({
      ...defaultIconProps,
      body: "",
      hidden: false
    });
    function mergeIconTransformations(obj1, obj2) {
      const result = {};
      if (!obj1.hFlip !== !obj2.hFlip) {
        result.hFlip = true;
      }
      if (!obj1.vFlip !== !obj2.vFlip) {
        result.vFlip = true;
      }
      const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
      if (rotate) {
        result.rotate = rotate;
      }
      return result;
    }
    function mergeIconData(parent, child) {
      const result = mergeIconTransformations(parent, child);
      for (const key in defaultExtendedIconProps) {
        if (key in defaultIconTransformations) {
          if (key in parent && !(key in result)) {
            result[key] = defaultIconTransformations[key];
          }
        } else if (key in child) {
          result[key] = child[key];
        } else if (key in parent) {
          result[key] = parent[key];
        }
      }
      return result;
    }
    function getIconsTree(data, names) {
      const icons = data.icons;
      const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
      const resolved = /* @__PURE__ */ Object.create(null);
      function resolve(name) {
        if (icons[name]) {
          return resolved[name] = [];
        }
        if (!(name in resolved)) {
          resolved[name] = null;
          const parent = aliases[name] && aliases[name].parent;
          const value = parent && resolve(parent);
          if (value) {
            resolved[name] = [parent].concat(value);
          }
        }
        return resolved[name];
      }
      (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
      return resolved;
    }
    function internalGetIconData(data, name, tree) {
      const icons = data.icons;
      const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
      let currentProps = {};
      function parse(name2) {
        currentProps = mergeIconData(
          icons[name2] || aliases[name2],
          currentProps
        );
      }
      parse(name);
      tree.forEach(parse);
      return mergeIconData(data, currentProps);
    }
    function getIconData(data, name) {
      if (data.icons[name]) {
        return internalGetIconData(data, name, []);
      }
      const tree = getIconsTree(data, [name])[name];
      return tree ? internalGetIconData(data, name, tree) : null;
    }
    function iconToHTML(body, attributes) {
      let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
      for (const attr in attributes) {
        renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
      }
      return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
    }
    var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
    var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
    function calculateSize(size, ratio, precision) {
      if (ratio === 1) {
        return size;
      }
      precision = precision || 100;
      if (typeof size === "number") {
        return Math.ceil(size * ratio * precision) / precision;
      }
      if (typeof size !== "string") {
        return size;
      }
      const oldParts = size.split(unitsSplit);
      if (oldParts === null || !oldParts.length) {
        return size;
      }
      const newParts = [];
      let code = oldParts.shift();
      let isNumber = unitsTest.test(code);
      while (true) {
        if (isNumber) {
          const num = parseFloat(code);
          if (isNaN(num)) {
            newParts.push(code);
          } else {
            newParts.push(Math.ceil(num * ratio * precision) / precision);
          }
        } else {
          newParts.push(code);
        }
        code = oldParts.shift();
        if (code === void 0) {
          return newParts.join("");
        }
        isNumber = !isNumber;
      }
    }
    function encodeSVGforURL(svg) {
      return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
    }
    function svgToData(svg) {
      return "data:image/svg+xml," + encodeSVGforURL(svg);
    }
    function svgToURL(svg) {
      return 'url("' + svgToData(svg) + '")';
    }
    function getCommonCSSRules(options) {
      const result = {
        display: "inline-block",
        width: "1em",
        height: "1em"
      };
      const varName = options.varName;
      if (options.pseudoSelector) {
        result["content"] = "''";
      }
      switch (options.mode) {
        case "background":
          if (varName) {
            result["background-image"] = "var(--" + varName + ")";
          }
          result["background-repeat"] = "no-repeat";
          result["background-size"] = "100% 100%";
          break;
        case "mask":
          result["background-color"] = "currentColor";
          if (varName) {
            result["mask-image"] = result["-webkit-mask-image"] = "var(--" + varName + ")";
          }
          result["mask-repeat"] = result["-webkit-mask-repeat"] = "no-repeat";
          result["mask-size"] = result["-webkit-mask-size"] = "100% 100%";
          break;
      }
      return result;
    }
    function generateItemCSSRules(icon, options) {
      const result = {};
      const varName = options.varName;
      if (!options.forceSquare && icon.width !== icon.height) {
        result["width"] = calculateSize("1em", icon.width / icon.height);
      }
      const svg = iconToHTML(
        icon.body.replace(/currentColor/g, options.color || "black"),
        {
          viewBox: `${icon.left} ${icon.top} ${icon.width} ${icon.height}`,
          width: icon.width.toString(),
          height: icon.height.toString()
        }
      );
      const url = svgToURL(svg);
      if (varName) {
        result["--" + varName] = url;
      } else {
        switch (options.mode) {
          case "background":
            result["background-image"] = url;
            break;
          case "mask":
            result["mask-image"] = result["-webkit-mask-image"] = url;
            break;
        }
      }
      return result;
    }
    var commonSelector = ".icon--{prefix}";
    var iconSelector = ".icon--{prefix}--{name}";
    var defaultSelectors = {
      commonSelector,
      iconSelector,
      overrideSelector: commonSelector + iconSelector
    };
    function getIconsCSSData(iconSet, names, options = {}) {
      var _a;
      const css = [];
      const errors = [];
      const palette = options.color ? true : (_a = iconSet.info) == null ? void 0 : _a.palette;
      let mode = options.mode || typeof palette === "boolean" && (palette ? "background" : "mask");
      if (!mode) {
        for (let i = 0; i < names.length; i++) {
          const icon = getIconData(iconSet, names[i]);
          if (icon) {
            mode = icon.body.includes("currentColor") ? "mask" : "background";
            break;
          }
        }
        if (!mode) {
          mode = "mask";
          errors.push(
            "/* cannot detect icon mode: not set in options and icon set is missing info, rendering as " + mode + " */"
          );
        }
      }
      let varName = options.varName;
      if (varName === void 0 && mode === "mask") {
        varName = "svg";
      }
      const newOptions = {
        ...options,
        // Override mode and varName
        mode,
        varName
      };
      const { commonSelector: commonSelector2, iconSelector: iconSelector2, overrideSelector } = newOptions.iconSelector ? newOptions : defaultSelectors;
      const iconSelectorWithPrefix = iconSelector2.replace(
        /{prefix}/g,
        iconSet.prefix
      );
      const commonRules = getCommonCSSRules(newOptions);
      const hasCommonRules = commonSelector2 && commonSelector2 !== iconSelector2;
      const commonSelectors = /* @__PURE__ */ new Set();
      if (hasCommonRules) {
        css.push({
          selector: commonSelector2.replace(/{prefix}/g, iconSet.prefix),
          rules: commonRules
        });
      }
      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const iconData = getIconData(iconSet, name);
        if (!iconData) {
          errors.push("/* Could not find icon: " + name + " */");
          continue;
        }
        const rules = generateItemCSSRules(
          { ...defaultIconProps, ...iconData },
          newOptions
        );
        let requiresOverride = false;
        if (hasCommonRules && overrideSelector) {
          for (const key in rules) {
            if (key in commonRules) {
              requiresOverride = true;
            }
          }
        }
        const selector = (requiresOverride && overrideSelector ? overrideSelector.replace(/{prefix}/g, iconSet.prefix) : iconSelectorWithPrefix).replace(/{name}/g, name);
        css.push({
          selector,
          rules
        });
        if (!hasCommonRules) {
          commonSelectors.add(selector);
        }
      }
      const result = {
        css,
        errors
      };
      if (!hasCommonRules && commonSelectors.size) {
        const selector = Array.from(commonSelectors).join(
          newOptions.format === "compressed" ? "," : ", "
        );
        result.common = {
          selector,
          rules: commonRules
        };
      }
      return result;
    }
    function locateIconSet(prefix) {
      try {
        const main = __require.resolve(`@iconify-json/${prefix}/icons.json`);
        const info = __require.resolve(`@iconify-json/${prefix}/info.json`);
        return {
          main,
          info
        };
      } catch {
      }
      try {
        const main = __require.resolve(`@iconify/json/json/${prefix}.json`);
        return {
          main
        };
      } catch {
      }
    }
    var cache = /* @__PURE__ */ Object.create(null);
    function loadIconSet(prefix, options) {
      var _a;
      let filename;
      const customIconSet = (_a = options.iconSets) == null ? void 0 : _a[prefix];
      if (customIconSet) {
        switch (typeof customIconSet) {
          case "function": {
            const result = customIconSet();
            options.iconSets[prefix] = result;
            return result;
          }
          case "string": {
            filename = {
              main: customIconSet
            };
            break;
          }
          default:
            return customIconSet;
        }
      } else {
        filename = locateIconSet(prefix);
      }
      if (!filename) {
        return;
      }
      const main = typeof filename === "string" ? filename : filename.main;
      if (cache[main]) {
        return cache[main];
      }
      try {
        const result = JSON.parse(fs.readFileSync(main, "utf8"));
        if (!result.info && typeof filename === "object" && filename.info) {
          result.info = JSON.parse(fs.readFileSync(filename.info, "utf8"));
        }
        cache[main] = result;
        return result;
      } catch {
      }
    }
    var matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
    function getIconNames(icons) {
      const prefixes = /* @__PURE__ */ Object.create(null);
      const add = (prefix, name) => {
        if (typeof prefix === "string" && prefix.match(matchIconName) && typeof name === "string" && name.match(matchIconName)) {
          (prefixes[prefix] || (prefixes[prefix] = /* @__PURE__ */ new Set())).add(name);
        }
      };
      let iconNames;
      if (typeof icons === "string") {
        iconNames = icons.split(/[\s,.]/);
      } else if (icons instanceof Array) {
        iconNames = [];
        icons.forEach((item) => {
          item.split(/[\s,.]/).forEach((name) => iconNames.push(name));
        });
      } else {
        return;
      }
      if (iconNames == null ? void 0 : iconNames.length) {
        iconNames.forEach((icon) => {
          if (!icon.trim()) {
            return;
          }
          const nameParts = icon.split(":");
          if (nameParts.length === 2) {
            add(nameParts[0], nameParts[1]);
            return;
          }
          const classParts = icon.split("--");
          if (classParts[0].match(/^\.?icon$/)) {
            if (classParts.length === 3) {
              add(classParts[1], classParts[2]);
              return;
            }
            if (classParts.length === 2) {
              return;
            }
          }
          throw new Error(`Cannot resolve icon: "${icon}"`);
        });
      } else {
        return;
      }
      return prefixes;
    }
    function getCSSRulesForIcons(icons, options = {}) {
      const rules = /* @__PURE__ */ Object.create(null);
      const prefixes = getIconNames(icons);
      for (const prefix in prefixes) {
        const iconSet = loadIconSet(prefix, options);
        if (!iconSet) {
          throw new Error(`Cannot load icon set for "${prefix}". Install "@iconify-json/${prefix}" as dev dependency?`);
        }
        const generated = getIconsCSSData(iconSet, Array.from(prefixes[prefix]), options);
        const result = generated.common ? [generated.common, ...generated.css] : generated.css;
        result.forEach((item) => {
          const selector = item.selector instanceof Array ? item.selector.join(", ") : item.selector;
          rules[selector] = item.rules;
        });
      }
      return rules;
    }
    function getDynamicCSSRules(icon, options = {}) {
      var _a;
      const nameParts = icon.split(/--|\:/);
      if (nameParts.length !== 2) {
        throw new Error(`Invalid icon name: "${icon}"`);
      }
      const [prefix, name] = nameParts;
      if (!(prefix.match(matchIconName) && name.match(matchIconName))) {
        throw new Error(`Invalid icon name: "${icon}"`);
      }
      const iconSet = loadIconSet(prefix, options);
      if (!iconSet) {
        throw new Error(`Cannot load icon set for "${prefix}". Install "@iconify-json/${prefix}" as dev dependency?`);
      }
      const generated = getIconsCSSData(iconSet, [name], {
        iconSelector: ".icon"
      });
      if (generated.css.length !== 1) {
        throw new Error(`Cannot find "${icon}". Bad icon name?`);
      }
      return {
        // Common rules
        ...options.overrideOnly || !((_a = generated.common) == null ? void 0 : _a.rules) ? {} : generated.common.rules,
        // Icon rules
        ...generated.css[0].rules
      };
    }
    function addDynamicIconSelectors(options) {
      const prefix = (options == null ? void 0 : options.prefix) || "icon";
      return plugin(({ matchComponents }) => {
        matchComponents({
          [prefix]: (icon) => getDynamicCSSRules(icon, options)
        });
      });
    }
    function addCleanIconSelectors(icons, options) {
      const rules = getCSSRulesForIcons(icons, options);
      return plugin(({ addUtilities }) => {
        addUtilities(rules);
      });
    }
    exports.addCleanIconSelectors = addCleanIconSelectors;
    exports.addDynamicIconSelectors = addDynamicIconSelectors;
  }
});
export default require_plugin2();
/*! Bundled license information:

@iconify/tailwind/dist/plugin.js:
  (**
  * (c) Iconify for Tailwind CSS
  *
  * For the full copyright and license information, please view the license.txt
  * files at https://github.com/iconify/iconify
  *
  * Licensed under MIT.
  *
  * @license MIT
  * @version 0.1.3
  *)
*/
//# sourceMappingURL=@iconify_tailwind.js.map
