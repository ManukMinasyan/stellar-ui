import {
  __commonJS
} from "./chunk-7FP5O474.js";

// node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.browser.js
var require_picocolors_browser = __commonJS({
  "node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.browser.js"(exports, module) {
    var x = String;
    var create = function() {
      return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
    };
    module.exports = create();
    module.exports.createColors = create;
  }
});

// node_modules/.pnpm/tailwindcss@3.3.2/node_modules/tailwindcss/lib/util/log.js
var require_log = __commonJS({
  "node_modules/.pnpm/tailwindcss@3.3.2/node_modules/tailwindcss/lib/util/log.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      dim: function() {
        return dim;
      },
      default: function() {
        return _default;
      }
    });
    var _picocolors = _interop_require_default(require_picocolors_browser());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var alreadyShown = /* @__PURE__ */ new Set();
    function log(type, messages, key) {
      if (typeof process !== "undefined" && process.env.JEST_WORKER_ID)
        return;
      if (key && alreadyShown.has(key))
        return;
      if (key)
        alreadyShown.add(key);
      console.warn("");
      messages.forEach((message) => console.warn(type, "-", message));
    }
    function dim(input) {
      return _picocolors.default.dim(input);
    }
    var _default = {
      info(key, messages) {
        log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
          key
        ] : [
          messages,
          key
        ]);
      },
      warn(key, messages) {
        log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
          key
        ] : [
          messages,
          key
        ]);
      },
      risk(key, messages) {
        log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
          key
        ] : [
          messages,
          key
        ]);
      }
    };
  }
});

export {
  require_picocolors_browser,
  require_log
};
//# sourceMappingURL=chunk-N5DV4BYN.js.map
