import {
  require_fs
} from "./chunk-F6HTLDYI.js";
import {
  require_plugin
} from "./chunk-EA2WWJ7B.js";
import {
  __commonJS,
  __toESM
} from "./chunk-WNKWOKNR.js";

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug3(...args) {
          if (!debug3.enabled) {
            return;
          }
          const self = debug3;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format2) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format2];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug3.namespace = namespace;
        debug3.useColors = createDebug.useColors();
        debug3.color = createDebug.selectColor(namespace);
        debug3.extend = extend;
        debug3.destroy = createDebug.destroy;
        Object.defineProperty(debug3, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug3);
        }
        return debug3;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:module
var require_module = __commonJS({
  "browser-external:module"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "module" has been externalized for browser compatibility. Cannot access "module.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/@egoist/tailwindcss-icons/dist/index.mjs
var import_plugin = __toESM(require_plugin(), 1);

// node_modules/@iconify/utils/lib/icon/defaults.mjs
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

// node_modules/@iconify/utils/lib/customisations/defaults.mjs
var defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
var defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

// node_modules/@iconify/utils/lib/icon/transformations.mjs
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

// node_modules/@iconify/utils/lib/icon/merge.mjs
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

// node_modules/@iconify/utils/lib/icon-set/tree.mjs
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

// node_modules/@iconify/utils/lib/icon-set/get-icon.mjs
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

// node_modules/@iconify/utils/lib/icon-set/parse.mjs
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}

// node_modules/@iconify/utils/lib/icon-set/validate-basic.mjs
var optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};

// node_modules/@iconify/utils/lib/icon-set/get-icons.mjs
var propsToCopy = Object.keys(defaultIconDimensions).concat([
  "provider"
]);

// node_modules/@iconify/utils/lib/svg/size.mjs
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

// node_modules/@iconify/utils/lib/svg/id.mjs
var randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);

// node_modules/@iconify/utils/lib/svg/url.mjs
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}

// node_modules/@iconify/utils/lib/svg/html.mjs
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}

// node_modules/@iconify/utils/lib/colors/keywords.mjs
var colorKeywords = {
  transparent: {
    type: "transparent"
  },
  none: {
    type: "none"
  },
  currentcolor: {
    type: "current"
  }
};
function add(keyword, colors) {
  const type = "rgb";
  const r = colors[0];
  const length = colors.length;
  colorKeywords[keyword] = {
    type,
    r,
    g: length > 1 ? colors[1] : r,
    b: length > 2 ? colors[2] : r,
    alpha: length > 3 ? colors[3] : 1
  };
}
add("silver", [192]);
add("gray", [128]);
add("white", [255]);
add("maroon", [128, 0, 0]);
add("red", [255, 0, 0]);
add("purple", [128, 0]);
add("fuchsia", [255, 0]);
add("green", [0, 128]);
add("lime", [0, 255]);
add("olive", [128, 128, 0]);
add("yellow", [255, 255, 0]);
add("navy", [0, 0, 128]);
add("blue", [0, 0, 255]);
add("teal", [0, 128, 128]);
add("aqua", [0, 255, 255]);
add("aliceblue", [240, 248, 255]);
add("antiquewhite", [250, 235, 215]);
add("aqua", [0, 255, 255]);
add("aquamarine", [127, 255, 212]);
add("azure", [240, 255, 255]);
add("beige", [245, 245, 220]);
add("bisque", [255, 228, 196]);
add("black", [0]);
add("blanchedalmond", [255, 235, 205]);
add("blue", [0, 0, 255]);
add("blueviolet", [138, 43, 226]);
add("brown", [165, 42, 42]);
add("burlywood", [222, 184, 135]);
add("cadetblue", [95, 158, 160]);
add("chartreuse", [127, 255, 0]);
add("chocolate", [210, 105, 30]);
add("coral", [255, 127, 80]);
add("cornflowerblue", [100, 149, 237]);
add("cornsilk", [255, 248, 220]);
add("crimson", [220, 20, 60]);
add("cyan", [0, 255, 255]);
add("darkblue", [0, 0, 139]);
add("darkcyan", [0, 139, 139]);
add("darkgoldenrod", [184, 134, 11]);
add("darkgray", [169]);
add("darkgreen", [0, 100]);
add("darkgrey", [169]);
add("darkkhaki", [189, 183, 107]);
add("darkmagenta", [139, 0]);
add("darkolivegreen", [85, 107, 47]);
add("darkorange", [255, 140, 0]);
add("darkorchid", [153, 50, 204]);
add("darkred", [139, 0, 0]);
add("darksalmon", [233, 150, 122]);
add("darkseagreen", [143, 188]);
add("darkslateblue", [72, 61, 139]);
add("darkslategray", [47, 79, 79]);
add("darkslategrey", [47, 79, 79]);
add("darkturquoise", [0, 206, 209]);
add("darkviolet", [148, 0, 211]);
add("deeppink", [255, 20, 147]);
add("deepskyblue", [0, 191, 255]);
add("dimgray", [105]);
add("dimgrey", [105]);
add("dodgerblue", [30, 144, 255]);
add("firebrick", [178, 34, 34]);
add("floralwhite", [255, 250, 240]);
add("forestgreen", [34, 139]);
add("fuchsia", [255, 0]);
add("gainsboro", [220]);
add("ghostwhite", [248, 248, 255]);
add("gold", [255, 215, 0]);
add("goldenrod", [218, 165, 32]);
add("gray", [128]);
add("green", [0, 128]);
add("greenyellow", [173, 255, 47]);
add("grey", [128]);
add("honeydew", [240, 255]);
add("hotpink", [255, 105, 180]);
add("indianred", [205, 92, 92]);
add("indigo", [75, 0, 130]);
add("ivory", [255, 255, 240]);
add("khaki", [240, 230, 140]);
add("lavender", [230, 230, 250]);
add("lavenderblush", [255, 240, 245]);
add("lawngreen", [124, 252, 0]);
add("lemonchiffon", [255, 250, 205]);
add("lightblue", [173, 216, 230]);
add("lightcoral", [240, 128, 128]);
add("lightcyan", [224, 255, 255]);
add("lightgoldenrodyellow", [250, 250, 210]);
add("lightgray", [211]);
add("lightgreen", [144, 238]);
add("lightgrey", [211]);
add("lightpink", [255, 182, 193]);
add("lightsalmon", [255, 160, 122]);
add("lightseagreen", [32, 178, 170]);
add("lightskyblue", [135, 206, 250]);
add("lightslategray", [119, 136, 153]);
add("lightslategrey", [119, 136, 153]);
add("lightsteelblue", [176, 196, 222]);
add("lightyellow", [255, 255, 224]);
add("lime", [0, 255]);
add("limegreen", [50, 205]);
add("linen", [250, 240, 230]);
add("magenta", [255, 0]);
add("maroon", [128, 0, 0]);
add("mediumaquamarine", [102, 205, 170]);
add("mediumblue", [0, 0, 205]);
add("mediumorchid", [186, 85, 211]);
add("mediumpurple", [147, 112, 219]);
add("mediumseagreen", [60, 179, 113]);
add("mediumslateblue", [123, 104, 238]);
add("mediumspringgreen", [0, 250, 154]);
add("mediumturquoise", [72, 209, 204]);
add("mediumvioletred", [199, 21, 133]);
add("midnightblue", [25, 25, 112]);
add("mintcream", [245, 255, 250]);
add("mistyrose", [255, 228, 225]);
add("moccasin", [255, 228, 181]);
add("navajowhite", [255, 222, 173]);
add("navy", [0, 0, 128]);
add("oldlace", [253, 245, 230]);
add("olive", [128, 128, 0]);
add("olivedrab", [107, 142, 35]);
add("orange", [255, 165, 0]);
add("orangered", [255, 69, 0]);
add("orchid", [218, 112, 214]);
add("palegoldenrod", [238, 232, 170]);
add("palegreen", [152, 251]);
add("paleturquoise", [175, 238, 238]);
add("palevioletred", [219, 112, 147]);
add("papayawhip", [255, 239, 213]);
add("peachpuff", [255, 218, 185]);
add("peru", [205, 133, 63]);
add("pink", [255, 192, 203]);
add("plum", [221, 160]);
add("powderblue", [176, 224, 230]);
add("purple", [128, 0]);
add("rebeccapurple", [102, 51, 153]);
add("red", [255, 0, 0]);
add("rosybrown", [188, 143, 143]);
add("royalblue", [65, 105, 225]);
add("saddlebrown", [139, 69, 19]);
add("salmon", [250, 128, 114]);
add("sandybrown", [244, 164, 96]);
add("seagreen", [46, 139, 87]);
add("seashell", [255, 245, 238]);
add("sienna", [160, 82, 45]);
add("silver", [192]);
add("skyblue", [135, 206, 235]);
add("slateblue", [106, 90, 205]);
add("slategray", [112, 128, 144]);
add("slategrey", [112, 128, 144]);
add("snow", [255, 250, 250]);
add("springgreen", [0, 255, 127]);
add("steelblue", [70, 130, 180]);
add("tan", [210, 180, 140]);
add("teal", [0, 128, 128]);
add("thistle", [216, 191]);
add("tomato", [255, 99, 71]);
add("turquoise", [64, 224, 208]);
add("violet", [238, 130]);
add("wheat", [245, 222, 179]);
add("white", [255]);
add("whitesmoke", [245]);
add("yellow", [255, 255, 0]);
add("yellowgreen", [154, 205, 50]);

// node_modules/@iconify/utils/lib/css/common.mjs
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

// node_modules/@iconify/utils/lib/css/format.mjs
var format = {
  selectorStart: {
    compressed: "{",
    compact: " {",
    expanded: " {"
  },
  selectorEnd: {
    compressed: "}",
    compact: "; }\n",
    expanded: ";\n}\n"
  },
  rule: {
    compressed: "{key}:",
    compact: " {key}: ",
    expanded: "\n  {key}: "
  }
};
function formatCSS(data, mode = "expanded") {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const { selector, rules } = data[i];
    const fullSelector = selector instanceof Array ? selector.join(mode === "compressed" ? "," : ", ") : selector;
    let entry = fullSelector + format.selectorStart[mode];
    let firstRule = true;
    for (const key in rules) {
      if (!firstRule) {
        entry += ";";
      }
      entry += format.rule[mode].replace("{key}", key) + rules[key];
      firstRule = false;
    }
    entry += format.selectorEnd[mode];
    results.push(entry);
  }
  return results.join(mode === "compressed" ? "" : "\n");
}

// node_modules/@iconify/utils/lib/css/icon.mjs
function getIconCSS(icon, options = {}) {
  const mode = options.mode || (options.color || !icon.body.includes("currentColor") ? "background" : "mask");
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
  if (mode === "background") {
    delete newOptions.varName;
  }
  const rules = {
    ...getCommonCSSRules(newOptions),
    ...generateItemCSSRules({ ...defaultIconProps, ...icon }, newOptions)
  };
  const selector = options.iconSelector || ".icon";
  return formatCSS(
    [
      {
        selector,
        rules
      }
    ],
    newOptions.format
  );
}

// node_modules/@iconify/utils/lib/css/icons.mjs
var commonSelector = ".icon--{prefix}";
var iconSelector = ".icon--{prefix}--{name}";
var defaultSelectors = {
  commonSelector,
  iconSelector,
  overrideSelector: commonSelector + iconSelector
};

// node_modules/@iconify/utils/lib/loader/custom.mjs
var import_debug = __toESM(require_browser(), 1);
var debug = (0, import_debug.default)("@iconify-loader:custom");

// node_modules/@iconify/utils/lib/loader/modern.mjs
var import_debug2 = __toESM(require_browser(), 1);
var debug2 = (0, import_debug2.default)("@iconify-loader:icon");

// node_modules/@iconify/utils/lib/loader/loader.mjs
var import_debug3 = __toESM(require_browser(), 1);

// node_modules/@iconify/utils/lib/emoji/format.mjs
var defaultUnicodeOptions = {
  prefix: "",
  separator: "",
  case: "lower",
  format: "utf-32",
  add0: false,
  throwOnError: true
};
var defaultSequenceOptions = {
  ...defaultUnicodeOptions,
  separator: "-"
};

// node_modules/@iconify/utils/lib/index.mjs
var import_debug4 = __toESM(require_browser(), 1);

// node_modules/@egoist/tailwindcss-icons/dist/index.mjs
var import_path = __toESM(require_path(), 1);
var import_fs = __toESM(require_fs(), 1);
var import_module = __toESM(require_module(), 1);
function callsites() {
  const _prepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = (_, stack2) => stack2;
  const stack = new Error().stack.slice(1);
  Error.prepareStackTrace = _prepareStackTrace;
  return stack;
}
function callerCallsite({ depth = 0 } = {}) {
  const callers = [];
  const callerFileSet = /* @__PURE__ */ new Set();
  for (const callsite of callsites()) {
    const fileName = callsite.getFileName();
    const hasReceiver = callsite.getTypeName() !== null && fileName !== null;
    if (!callerFileSet.has(fileName)) {
      callerFileSet.add(fileName);
      callers.unshift(callsite);
    }
    if (hasReceiver) {
      return callers[depth];
    }
  }
}
function callerpath({ depth = 0 } = {}) {
  const callsite = callerCallsite({ depth });
  return callsite && callsite.getFileName();
}
var req = false ? __require : (0, import_module.createRequire)(import.meta.url);
var localResolve = (cwd, id) => {
  try {
    const resolved = req.resolve(id, { paths: [cwd] });
    return resolved;
  } catch {
    return null;
  }
};
var getIconCollections = (include = "all") => {
  let cwd = process.cwd();
  if (cwd === "/") {
    const p = callerpath();
    if (p) {
      cwd = import_path.default.dirname(p);
    }
  }
  const pkgPath = localResolve(cwd, "@iconify/json/package.json");
  if (!pkgPath) {
    if (Array.isArray(include)) {
      return include.reduce((result, name) => {
        const jsonPath = localResolve(cwd, `@iconify-json/${name}/icons.json`);
        if (!jsonPath) {
          throw new Error(
            `Icon collection "${name}" not found. Please install @iconify-json/${name} or @iconify/json`
          );
        }
        return {
          ...result,
          [name]: req(jsonPath)
        };
      }, {});
    }
    return {};
  }
  const pkgDir = import_path.default.dirname(pkgPath);
  const files = import_fs.default.readdirSync(import_path.default.join(pkgDir, "json"));
  const collections = {};
  for (const file of files) {
    if (include === "all" || include.includes(file.replace(".json", ""))) {
      const json = req(import_path.default.join(pkgDir, "json", file));
      collections[json.prefix] = json;
    }
  }
  return collections;
};
var generateIconComponent = (data) => {
  const css = getIconCSS(data, {});
  const rules = {};
  css.replace(/^\s+([^:]+):\s*([^;]+);/gm, (_, prop, value) => {
    rules[prop] = value;
    return "";
  });
  return rules;
};
var iconsPlugin = ({
  collections
}) => {
  const components = {};
  for (const prefix of Object.keys(collections)) {
    const collection = collections[prefix];
    parseIconSet(collection, (name, data) => {
      if (!data)
        return;
      components[`${prefix}-${name}`] = generateIconComponent(data);
    });
  }
  return (0, import_plugin.default)(({ matchComponents }) => {
    matchComponents(
      {
        i: (value) => {
          if (typeof value === "string")
            return components[value];
          return value;
        }
      },
      {
        values: components
      }
    );
  });
};
export {
  getIconCollections,
  iconsPlugin
};
//# sourceMappingURL=@egoist_tailwindcss-icons.js.map
