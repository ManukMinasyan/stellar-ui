import {
  require_log,
  require_picocolors_browser
} from "./chunk-MLQ4NW6D.js";
import {
  __commonJS
} from "./chunk-CQXHTUV2.js";

// node_modules/tailwindcss/lib/featureFlags.js
var require_featureFlags = __commonJS({
  "node_modules/tailwindcss/lib/featureFlags.js"(exports) {
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
      flagEnabled: function() {
        return flagEnabled;
      },
      issueFlagNotices: function() {
        return issueFlagNotices;
      },
      default: function() {
        return _default;
      }
    });
    var _picocolors = _interop_require_default(require_picocolors_browser());
    var _log = _interop_require_default(require_log());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var defaults = {
      optimizeUniversalDefaults: false,
      generalizedModifiers: true,
      get disableColorOpacityUtilitiesByDefault() {
        return false;
      },
      get relativeContentPathsByDefault() {
        return false;
      }
    };
    var featureFlags = {
      future: [
        "hoverOnlyWhenSupported",
        "respectDefaultRingColorOpacity",
        "disableColorOpacityUtilitiesByDefault",
        "relativeContentPathsByDefault"
      ],
      experimental: [
        "optimizeUniversalDefaults",
        "generalizedModifiers"
      ]
    };
    function flagEnabled(config, flag) {
      if (featureFlags.future.includes(flag)) {
        var _config_future;
        var _config_future_flag, _ref;
        return config.future === "all" || ((_ref = (_config_future_flag = config === null || config === void 0 ? void 0 : (_config_future = config.future) === null || _config_future === void 0 ? void 0 : _config_future[flag]) !== null && _config_future_flag !== void 0 ? _config_future_flag : defaults[flag]) !== null && _ref !== void 0 ? _ref : false);
      }
      if (featureFlags.experimental.includes(flag)) {
        var _config_experimental;
        var _config_experimental_flag, _ref1;
        return config.experimental === "all" || ((_ref1 = (_config_experimental_flag = config === null || config === void 0 ? void 0 : (_config_experimental = config.experimental) === null || _config_experimental === void 0 ? void 0 : _config_experimental[flag]) !== null && _config_experimental_flag !== void 0 ? _config_experimental_flag : defaults[flag]) !== null && _ref1 !== void 0 ? _ref1 : false);
      }
      return false;
    }
    function experimentalFlagsEnabled(config) {
      if (config.experimental === "all") {
        return featureFlags.experimental;
      }
      var _config_experimental;
      return Object.keys((_config_experimental = config === null || config === void 0 ? void 0 : config.experimental) !== null && _config_experimental !== void 0 ? _config_experimental : {}).filter((flag) => featureFlags.experimental.includes(flag) && config.experimental[flag]);
    }
    function issueFlagNotices(config) {
      if (process.env.JEST_WORKER_ID !== void 0) {
        return;
      }
      if (experimentalFlagsEnabled(config).length > 0) {
        let changes = experimentalFlagsEnabled(config).map((s) => _picocolors.default.yellow(s)).join(", ");
        _log.default.warn("experimental-flags-enabled", [
          `You have enabled experimental features: ${changes}`,
          "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
        ]);
      }
    }
    var _default = featureFlags;
  }
});

// node_modules/tailwindcss/lib/lib/regex.js
var require_regex = __commonJS({
  "node_modules/tailwindcss/lib/lib/regex.js"(exports) {
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
      pattern: function() {
        return pattern;
      },
      withoutCapturing: function() {
        return withoutCapturing;
      },
      any: function() {
        return any;
      },
      optional: function() {
        return optional;
      },
      zeroOrMore: function() {
        return zeroOrMore;
      },
      nestedBrackets: function() {
        return nestedBrackets;
      },
      escape: function() {
        return escape;
      }
    });
    var REGEX_SPECIAL = /[\\^$.*+?()[\]{}|]/g;
    var REGEX_HAS_SPECIAL = RegExp(REGEX_SPECIAL.source);
    function toSource(source) {
      source = Array.isArray(source) ? source : [
        source
      ];
      source = source.map((item) => item instanceof RegExp ? item.source : item);
      return source.join("");
    }
    function pattern(source) {
      return new RegExp(toSource(source), "g");
    }
    function withoutCapturing(source) {
      return new RegExp(`(?:${toSource(source)})`, "g");
    }
    function any(sources) {
      return `(?:${sources.map(toSource).join("|")})`;
    }
    function optional(source) {
      return `(?:${toSource(source)})?`;
    }
    function zeroOrMore(source) {
      return `(?:${toSource(source)})*`;
    }
    function nestedBrackets(open, close, depth = 1) {
      return withoutCapturing([
        escape(open),
        /[^\s]*/,
        depth === 1 ? `[^${escape(open)}${escape(close)}s]*` : any([
          `[^${escape(open)}${escape(close)}s]*`,
          nestedBrackets(open, close, depth - 1)
        ]),
        /[^\s]*/,
        escape(close)
      ]);
    }
    function escape(string) {
      return string && REGEX_HAS_SPECIAL.test(string) ? string.replace(REGEX_SPECIAL, "\\$&") : string || "";
    }
  }
});

// node_modules/tailwindcss/lib/lib/defaultExtractor.js
var require_defaultExtractor = __commonJS({
  "node_modules/tailwindcss/lib/lib/defaultExtractor.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "defaultExtractor", {
      enumerable: true,
      get: function() {
        return defaultExtractor;
      }
    });
    var _featureFlags = require_featureFlags();
    var _regex = _interop_require_wildcard(require_regex());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
          default: obj
        };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function defaultExtractor(context) {
      let patterns = Array.from(buildRegExps(context));
      return (content) => {
        let results = [];
        for (let pattern of patterns) {
          var _content_match;
          results = [
            ...results,
            ...(_content_match = content.match(pattern)) !== null && _content_match !== void 0 ? _content_match : []
          ];
        }
        return results.filter((v) => v !== void 0).map(clipAtBalancedParens);
      };
    }
    function* buildRegExps(context) {
      let separator = context.tailwindConfig.separator;
      let variantGroupingEnabled = (0, _featureFlags.flagEnabled)(context.tailwindConfig, "variantGrouping");
      let prefix = context.tailwindConfig.prefix !== "" ? _regex.optional(_regex.pattern([
        /-?/,
        _regex.escape(context.tailwindConfig.prefix)
      ])) : "";
      let utility = _regex.any([
        // Arbitrary properties (without square brackets)
        /\[[^\s:'"`]+:[^\s\[\]]+\]/,
        // Arbitrary properties with balanced square brackets
        // This is a targeted fix to continue to allow theme()
        // with square brackets to work in arbitrary properties
        // while fixing a problem with the regex matching too much
        /\[[^\s:'"`]+:[^\s]+?\[[^\s]+\][^\s]+?\]/,
        // Utilities
        _regex.pattern([
          // Utility Name / Group Name
          /-?(?:\w+)/,
          // Normal/Arbitrary values
          _regex.optional(_regex.any([
            _regex.pattern([
              // Arbitrary values
              /-(?:\w+-)*\[[^\s:]+\]/,
              // Not immediately followed by an `{[(`
              /(?![{([]])/,
              // optionally followed by an opacity modifier
              /(?:\/[^\s'"`\\><$]*)?/
            ]),
            _regex.pattern([
              // Arbitrary values
              /-(?:\w+-)*\[[^\s]+\]/,
              // Not immediately followed by an `{[(`
              /(?![{([]])/,
              // optionally followed by an opacity modifier
              /(?:\/[^\s'"`\\$]*)?/
            ]),
            // Normal values w/o quotes — may include an opacity modifier
            /[-\/][^\s'"`\\$={><]*/
          ]))
        ])
      ]);
      let variantPatterns = [
        // Without quotes
        _regex.any([
          // This is here to provide special support for the `@` variant
          _regex.pattern([
            /@\[[^\s"'`]+\](\/[^\s"'`]+)?/,
            separator
          ]),
          _regex.pattern([
            /([^\s"'`\[\\]+-)?\[[^\s"'`]+\]/,
            separator
          ]),
          _regex.pattern([
            /[^\s"'`\[\\]+/,
            separator
          ])
        ]),
        // With quotes allowed
        _regex.any([
          _regex.pattern([
            /([^\s"'`\[\\]+-)?\[[^\s`]+\]/,
            separator
          ]),
          _regex.pattern([
            /[^\s`\[\\]+/,
            separator
          ])
        ])
      ];
      for (const variantPattern of variantPatterns) {
        yield _regex.pattern([
          // Variants
          "((?=((",
          variantPattern,
          ")+))\\2)?",
          // Important (optional)
          /!?/,
          prefix,
          variantGroupingEnabled ? _regex.any([
            // Or any of those things but grouped separated by commas
            _regex.pattern([
              /\(/,
              utility,
              _regex.zeroOrMore([
                /,/,
                utility
              ]),
              /\)/
            ]),
            // Arbitrary properties, constrained utilities, arbitrary values, etc…
            utility
          ]) : utility
        ]);
      }
      yield /[^<>"'`\s.(){}[\]#=%$]*[^<>"'`\s.(){}[\]#=%:$]/g;
    }
    var SPECIALS = /([\[\]'"`])([^\[\]'"`])?/g;
    var ALLOWED_CLASS_CHARACTERS = /[^"'`\s<>\]]+/;
    function clipAtBalancedParens(input) {
      if (!input.includes("-[")) {
        return input;
      }
      let depth = 0;
      let openStringTypes = [];
      let matches = input.matchAll(SPECIALS);
      matches = Array.from(matches).flatMap((match) => {
        const [, ...groups] = match;
        return groups.map((group, idx) => Object.assign([], match, {
          index: match.index + idx,
          0: group
        }));
      });
      for (let match of matches) {
        let char = match[0];
        let inStringType = openStringTypes[openStringTypes.length - 1];
        if (char === inStringType) {
          openStringTypes.pop();
        } else if (char === "'" || char === '"' || char === "`") {
          openStringTypes.push(char);
        }
        if (inStringType) {
          continue;
        } else if (char === "[") {
          depth++;
          continue;
        } else if (char === "]") {
          depth--;
          continue;
        }
        if (depth < 0) {
          return input.substring(0, match.index - 1);
        }
        if (depth === 0 && !ALLOWED_CLASS_CHARACTERS.test(char)) {
          return input.substring(0, match.index);
        }
      }
      return input;
    }
  }
});
export default require_defaultExtractor();
//# sourceMappingURL=tailwindcss_lib_lib_defaultExtractor__js.js.map
