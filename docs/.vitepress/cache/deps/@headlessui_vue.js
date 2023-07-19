import {
  Fragment,
  Teleport,
  cloneVNode,
  computed,
  defineComponent,
  h,
  inject,
  nextTick,
  normalizeClass,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  shallowRef,
  toRaw,
  unref,
  watch,
  watchEffect
} from "./chunk-V634PGSD.js";
import "./chunk-CQXHTUV2.js";

// node_modules/@headlessui/vue/dist/utils/match.js
function u(r4, n6, ...a7) {
  if (r4 in n6) {
    let e4 = n6[r4];
    return typeof e4 == "function" ? e4(...a7) : e4;
  }
  let t6 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e4) => `"${e4}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t6, u), t6;
}

// node_modules/@headlessui/vue/dist/utils/render.js
var N = ((o4) => (o4[o4.None = 0] = "None", o4[o4.RenderStrategy = 1] = "RenderStrategy", o4[o4.Static = 2] = "Static", o4))(N || {});
var S = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(S || {});
function H({ visible: r4 = true, features: t6 = 0, ourProps: e4, theirProps: o4, ...i4 }) {
  var a7;
  let n6 = j(o4, e4), l4 = Object.assign(i4, { props: n6 });
  if (r4 || t6 & 2 && n6.static)
    return y(l4);
  if (t6 & 1) {
    let d8 = (a7 = n6.unmount) == null || a7 ? 0 : 1;
    return u(d8, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i4, props: { ...n6, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l4);
}
function y({ props: r4, attrs: t6, slots: e4, slot: o4, name: i4 }) {
  var m5, h4;
  let { as: n6, ...l4 } = T(r4, ["unmount", "static"]), a7 = (m5 = e4.default) == null ? void 0 : m5.call(e4, o4), d8 = {};
  if (o4) {
    let u6 = false, c5 = [];
    for (let [p9, f5] of Object.entries(o4))
      typeof f5 == "boolean" && (u6 = true), f5 === true && c5.push(p9);
    u6 && (d8["data-headlessui-state"] = c5.join(" "));
  }
  if (n6 === "template") {
    if (a7 = b(a7 != null ? a7 : []), Object.keys(l4).length > 0 || Object.keys(t6).length > 0) {
      let [u6, ...c5] = a7 != null ? a7 : [];
      if (!v(u6) || c5.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i4} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l4).concat(Object.keys(t6)).map((s3) => s3.trim()).filter((s3, g5, R2) => R2.indexOf(s3) === g5).sort((s3, g5) => s3.localeCompare(g5)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p9 = j((h4 = u6.props) != null ? h4 : {}, l4), f5 = cloneVNode(u6, p9);
      for (let s3 in p9)
        s3.startsWith("on") && (f5.props || (f5.props = {}), f5.props[s3] = p9[s3]);
      return f5;
    }
    return Array.isArray(a7) && a7.length === 1 ? a7[0] : a7;
  }
  return h(n6, Object.assign({}, l4, d8), { default: () => a7 });
}
function b(r4) {
  return r4.flatMap((t6) => t6.type === Fragment ? b(t6.children) : [t6]);
}
function j(...r4) {
  var o4;
  if (r4.length === 0)
    return {};
  if (r4.length === 1)
    return r4[0];
  let t6 = {}, e4 = {};
  for (let i4 of r4)
    for (let n6 in i4)
      n6.startsWith("on") && typeof i4[n6] == "function" ? ((o4 = e4[n6]) != null || (e4[n6] = []), e4[n6].push(i4[n6])) : t6[n6] = i4[n6];
  if (t6.disabled || t6["aria-disabled"])
    return Object.assign(t6, Object.fromEntries(Object.keys(e4).map((i4) => [i4, void 0])));
  for (let i4 in e4)
    Object.assign(t6, { [i4](n6, ...l4) {
      let a7 = e4[i4];
      for (let d8 of a7) {
        if (n6 instanceof Event && n6.defaultPrevented)
          return;
        d8(n6, ...l4);
      }
    } });
  return t6;
}
function K(r4) {
  let t6 = Object.assign({}, r4);
  for (let e4 in t6)
    t6[e4] === void 0 && delete t6[e4];
  return t6;
}
function T(r4, t6 = []) {
  let e4 = Object.assign({}, r4);
  for (let o4 of t6)
    o4 in e4 && delete e4[o4];
  return e4;
}
function v(r4) {
  return r4 == null ? false : typeof r4.type == "string" || typeof r4.type == "object" || typeof r4.type == "function";
}

// node_modules/@headlessui/vue/dist/hooks/use-id.js
var e = 0;
function n() {
  return ++e;
}
function t() {
  return n();
}

// node_modules/@headlessui/vue/dist/keyboard.js
var o = ((r4) => (r4.Space = " ", r4.Enter = "Enter", r4.Escape = "Escape", r4.Backspace = "Backspace", r4.Delete = "Delete", r4.ArrowLeft = "ArrowLeft", r4.ArrowUp = "ArrowUp", r4.ArrowRight = "ArrowRight", r4.ArrowDown = "ArrowDown", r4.Home = "Home", r4.End = "End", r4.PageUp = "PageUp", r4.PageDown = "PageDown", r4.Tab = "Tab", r4))(o || {});

// node_modules/@headlessui/vue/dist/utils/calculate-active-index.js
function f(r4) {
  throw new Error("Unexpected object: " + r4);
}
var a = ((e4) => (e4[e4.First = 0] = "First", e4[e4.Previous = 1] = "Previous", e4[e4.Next = 2] = "Next", e4[e4.Last = 3] = "Last", e4[e4.Specific = 4] = "Specific", e4[e4.Nothing = 5] = "Nothing", e4))(a || {});
function x(r4, n6) {
  let t6 = n6.resolveItems();
  if (t6.length <= 0)
    return null;
  let l4 = n6.resolveActiveIndex(), s3 = l4 != null ? l4 : -1, d8 = (() => {
    switch (r4.focus) {
      case 0:
        return t6.findIndex((e4) => !n6.resolveDisabled(e4));
      case 1: {
        let e4 = t6.slice().reverse().findIndex((i4, c5, u6) => s3 !== -1 && u6.length - c5 - 1 >= s3 ? false : !n6.resolveDisabled(i4));
        return e4 === -1 ? e4 : t6.length - 1 - e4;
      }
      case 2:
        return t6.findIndex((e4, i4) => i4 <= s3 ? false : !n6.resolveDisabled(e4));
      case 3: {
        let e4 = t6.slice().reverse().findIndex((i4) => !n6.resolveDisabled(i4));
        return e4 === -1 ? e4 : t6.length - 1 - e4;
      }
      case 4:
        return t6.findIndex((e4) => n6.resolveId(e4) === r4.id);
      case 5:
        return null;
      default:
        f(r4);
    }
  })();
  return d8 === -1 ? l4 : d8;
}

// node_modules/@headlessui/vue/dist/utils/dom.js
function o2(n6) {
  var l4;
  return n6 == null || n6.value == null ? null : (l4 = n6.value.$el) != null ? l4 : n6.value;
}

// node_modules/@headlessui/vue/dist/internal/open-closed.js
var n2 = Symbol("Context");
var l = ((e4) => (e4[e4.Open = 1] = "Open", e4[e4.Closed = 2] = "Closed", e4[e4.Closing = 4] = "Closing", e4[e4.Opening = 8] = "Opening", e4))(l || {});
function C() {
  return p() !== null;
}
function p() {
  return inject(n2, null);
}
function c(o4) {
  provide(n2, o4);
}

// node_modules/@headlessui/vue/dist/hooks/use-resolve-button-type.js
function r(t6, e4) {
  if (t6)
    return t6;
  let n6 = e4 != null ? e4 : "button";
  if (typeof n6 == "string" && n6.toLowerCase() === "button")
    return "button";
}
function b2(t6, e4) {
  let n6 = ref(r(t6.value.type, t6.value.as));
  return onMounted(() => {
    n6.value = r(t6.value.type, t6.value.as);
  }), watchEffect(() => {
    var o4;
    n6.value || o2(e4) && o2(e4) instanceof HTMLButtonElement && !((o4 = o2(e4)) != null && o4.hasAttribute("type")) && (n6.value = "button");
  }), n6;
}

// node_modules/@headlessui/vue/dist/utils/env.js
var i = Object.defineProperty;
var d = (t6, e4, r4) => e4 in t6 ? i(t6, e4, { enumerable: true, configurable: true, writable: true, value: r4 }) : t6[e4] = r4;
var n3 = (t6, e4, r4) => (d(t6, typeof e4 != "symbol" ? e4 + "" : e4, r4), r4);
var s = class {
  constructor() {
    n3(this, "current", this.detect());
    n3(this, "currentId", 0);
  }
  set(e4) {
    this.current !== e4 && (this.currentId = 0, this.current = e4);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
};
var c2 = new s();

// node_modules/@headlessui/vue/dist/utils/owner.js
function m(r4) {
  if (c2.isServer)
    return null;
  if (r4 instanceof Node)
    return r4.ownerDocument;
  if (r4 != null && r4.hasOwnProperty("value")) {
    let n6 = o2(r4);
    if (n6)
      return n6.ownerDocument;
  }
  return document;
}

// node_modules/@headlessui/vue/dist/hooks/use-tree-walker.js
function p2({ container: e4, accept: t6, walk: d8, enabled: o4 }) {
  watchEffect(() => {
    let r4 = e4.value;
    if (!r4 || o4 !== void 0 && !o4.value)
      return;
    let l4 = m(e4);
    if (!l4)
      return;
    let c5 = Object.assign((f5) => t6(f5), { acceptNode: t6 }), n6 = l4.createTreeWalker(r4, NodeFilter.SHOW_ELEMENT, c5, false);
    for (; n6.nextNode(); )
      d8(n6.currentNode);
  });
}

// node_modules/@headlessui/vue/dist/utils/focus-management.js
var c3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e4) => `${e4}:not([tabindex='-1'])`).join(",");
var N2 = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(N2 || {});
var T2 = ((o4) => (o4[o4.Error = 0] = "Error", o4[o4.Overflow = 1] = "Overflow", o4[o4.Success = 2] = "Success", o4[o4.Underflow = 3] = "Underflow", o4))(T2 || {});
var F = ((t6) => (t6[t6.Previous = -1] = "Previous", t6[t6.Next = 1] = "Next", t6))(F || {});
function E(e4 = document.body) {
  return e4 == null ? [] : Array.from(e4.querySelectorAll(c3)).sort((r4, t6) => Math.sign((r4.tabIndex || Number.MAX_SAFE_INTEGER) - (t6.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h2 = ((t6) => (t6[t6.Strict = 0] = "Strict", t6[t6.Loose = 1] = "Loose", t6))(h2 || {});
function w(e4, r4 = 0) {
  var t6;
  return e4 === ((t6 = m(e4)) == null ? void 0 : t6.body) ? false : u(r4, { [0]() {
    return e4.matches(c3);
  }, [1]() {
    let l4 = e4;
    for (; l4 !== null; ) {
      if (l4.matches(c3))
        return true;
      l4 = l4.parentElement;
    }
    return false;
  } });
}
function _(e4) {
  let r4 = m(e4);
  nextTick(() => {
    r4 && !w(r4.activeElement, 0) && S2(e4);
  });
}
var y2 = ((t6) => (t6[t6.Keyboard = 0] = "Keyboard", t6[t6.Mouse = 1] = "Mouse", t6))(y2 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e4) => {
  e4.metaKey || e4.altKey || e4.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e4) => {
  e4.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e4.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function S2(e4) {
  e4 == null || e4.focus({ preventScroll: true });
}
var H2 = ["textarea", "input"].join(",");
function I(e4) {
  var r4, t6;
  return (t6 = (r4 = e4 == null ? void 0 : e4.matches) == null ? void 0 : r4.call(e4, H2)) != null ? t6 : false;
}
function O(e4, r4 = (t6) => t6) {
  return e4.slice().sort((t6, l4) => {
    let o4 = r4(t6), i4 = r4(l4);
    if (o4 === null || i4 === null)
      return 0;
    let n6 = o4.compareDocumentPosition(i4);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v2(e4, r4) {
  return P(E(), r4, { relativeTo: e4 });
}
function P(e4, r4, { sorted: t6 = true, relativeTo: l4 = null, skipElements: o4 = [] } = {}) {
  var m5;
  let i4 = (m5 = Array.isArray(e4) ? e4.length > 0 ? e4[0].ownerDocument : document : e4 == null ? void 0 : e4.ownerDocument) != null ? m5 : document, n6 = Array.isArray(e4) ? t6 ? O(e4) : e4 : E(e4);
  o4.length > 0 && n6.length > 1 && (n6 = n6.filter((s3) => !o4.includes(s3))), l4 = l4 != null ? l4 : i4.activeElement;
  let x4 = (() => {
    if (r4 & 5)
      return 1;
    if (r4 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p9 = (() => {
    if (r4 & 1)
      return 0;
    if (r4 & 2)
      return Math.max(0, n6.indexOf(l4)) - 1;
    if (r4 & 4)
      return Math.max(0, n6.indexOf(l4)) + 1;
    if (r4 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L4 = r4 & 32 ? { preventScroll: true } : {}, a7 = 0, d8 = n6.length, u6;
  do {
    if (a7 >= d8 || a7 + d8 <= 0)
      return 0;
    let s3 = p9 + a7;
    if (r4 & 16)
      s3 = (s3 + d8) % d8;
    else {
      if (s3 < 0)
        return 3;
      if (s3 >= d8)
        return 1;
    }
    u6 = n6[s3], u6 == null || u6.focus(L4), a7 += x4;
  } while (u6 !== i4.activeElement);
  return r4 & 6 && I(u6) && u6.select(), 2;
}

// node_modules/@headlessui/vue/dist/hooks/use-document-event.js
function u2(e4, t6, n6) {
  c2.isServer || watchEffect((o4) => {
    document.addEventListener(e4, t6, n6), o4(() => document.removeEventListener(e4, t6, n6));
  });
}

// node_modules/@headlessui/vue/dist/hooks/use-window-event.js
function w2(e4, n6, t6) {
  c2.isServer || watchEffect((o4) => {
    window.addEventListener(e4, n6, t6), o4(() => window.removeEventListener(e4, n6, t6));
  });
}

// node_modules/@headlessui/vue/dist/hooks/use-outside-click.js
function F2(f5, m5, l4 = computed(() => true)) {
  function i4(e4, u6) {
    if (!l4.value || e4.defaultPrevented)
      return;
    let n6 = u6(e4);
    if (n6 === null || !n6.getRootNode().contains(n6))
      return;
    let c5 = function o4(t6) {
      return typeof t6 == "function" ? o4(t6()) : Array.isArray(t6) || t6 instanceof Set ? t6 : [t6];
    }(f5);
    for (let o4 of c5) {
      if (o4 === null)
        continue;
      let t6 = o4 instanceof HTMLElement ? o4 : o2(o4);
      if (t6 != null && t6.contains(n6) || e4.composed && e4.composedPath().includes(t6))
        return;
    }
    return !w(n6, h2.Loose) && n6.tabIndex !== -1 && e4.preventDefault(), m5(e4, n6);
  }
  let r4 = ref(null);
  u2("mousedown", (e4) => {
    var u6, n6;
    l4.value && (r4.value = ((n6 = (u6 = e4.composedPath) == null ? void 0 : u6.call(e4)) == null ? void 0 : n6[0]) || e4.target);
  }, true), u2("click", (e4) => {
    r4.value && (i4(e4, () => r4.value), r4.value = null);
  }, true), w2("blur", (e4) => i4(e4, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/vue/dist/internal/hidden.js
var a2 = ((e4) => (e4[e4.None = 1] = "None", e4[e4.Focusable = 2] = "Focusable", e4[e4.Hidden = 4] = "Hidden", e4))(a2 || {});
var f2 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r4, { slots: t6, attrs: d8 }) {
  return () => {
    let { features: e4, ...o4 } = r4, n6 = { "aria-hidden": (e4 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e4 & 4) === 4 && (e4 & 2) !== 2 && { display: "none" } } };
    return H({ ourProps: n6, theirProps: o4, slot: {}, attrs: d8, slots: t6, name: "Hidden" });
  };
} });

// node_modules/@headlessui/vue/dist/utils/form.js
function e2(n6 = {}, r4 = null, t6 = []) {
  for (let [i4, o4] of Object.entries(n6))
    f3(t6, s2(r4, i4), o4);
  return t6;
}
function s2(n6, r4) {
  return n6 ? n6 + "[" + r4 + "]" : r4;
}
function f3(n6, r4, t6) {
  if (Array.isArray(t6))
    for (let [i4, o4] of t6.entries())
      f3(n6, s2(r4, i4.toString()), o4);
  else
    t6 instanceof Date ? n6.push([r4, t6.toISOString()]) : typeof t6 == "boolean" ? n6.push([r4, t6 ? "1" : "0"]) : typeof t6 == "string" ? n6.push([r4, t6]) : typeof t6 == "number" ? n6.push([r4, `${t6}`]) : t6 == null ? n6.push([r4, ""]) : e2(t6, r4, n6);
}
function p3(n6) {
  var t6;
  let r4 = (t6 = n6 == null ? void 0 : n6.form) != null ? t6 : n6.closest("form");
  if (r4) {
    for (let i4 of r4.elements)
      if (i4.tagName === "INPUT" && i4.type === "submit" || i4.tagName === "BUTTON" && i4.type === "submit" || i4.nodeName === "INPUT" && i4.type === "image") {
        i4.click();
        return;
      }
  }
}

// node_modules/@headlessui/vue/dist/hooks/use-controllable.js
function d2(u6, e4, r4) {
  let i4 = ref(r4 == null ? void 0 : r4.value), f5 = computed(() => u6.value !== void 0);
  return [computed(() => f5.value ? u6.value : i4.value), function(t6) {
    return f5.value || (i4.value = t6), e4 == null ? void 0 : e4(t6);
  }];
}

// node_modules/@headlessui/vue/dist/hooks/use-tracked-pointer.js
function r2(e4) {
  return [e4.screenX, e4.screenY];
}
function u3() {
  let e4 = ref([-1, -1]);
  return { wasMoved(n6) {
    let t6 = r2(n6);
    return e4.value[0] === t6[0] && e4.value[1] === t6[1] ? false : (e4.value = t6, true);
  }, update(n6) {
    e4.value = r2(n6);
  } };
}

// node_modules/@headlessui/vue/dist/utils/platform.js
function t2() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i2() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n4() {
  return t2() || i2();
}

// node_modules/@headlessui/vue/dist/utils/disposables.js
function r3() {
  let n6 = [], s3 = { addEventListener(e4, t6, i4, a7) {
    return e4.addEventListener(t6, i4, a7), s3.add(() => e4.removeEventListener(t6, i4, a7));
  }, requestAnimationFrame(...e4) {
    let t6 = requestAnimationFrame(...e4);
    s3.add(() => cancelAnimationFrame(t6));
  }, nextFrame(...e4) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e4);
    });
  }, setTimeout(...e4) {
    let t6 = setTimeout(...e4);
    s3.add(() => clearTimeout(t6));
  }, style(e4, t6, i4) {
    let a7 = e4.style.getPropertyValue(t6);
    return Object.assign(e4.style, { [t6]: i4 }), this.add(() => {
      Object.assign(e4.style, { [t6]: a7 });
    });
  }, group(e4) {
    let t6 = r3();
    return e4(t6), this.add(() => t6.dispose());
  }, add(e4) {
    return n6.push(e4), () => {
      let t6 = n6.indexOf(e4);
      if (t6 >= 0)
        for (let i4 of n6.splice(t6, 1))
          i4();
    };
  }, dispose() {
    for (let e4 of n6.splice(0))
      e4();
  } };
  return s3;
}

// node_modules/@headlessui/vue/dist/components/combobox/combobox.js
function ve(l4, g5) {
  return l4 === g5;
}
var ce = ((s3) => (s3[s3.Open = 0] = "Open", s3[s3.Closed = 1] = "Closed", s3))(ce || {});
var me = ((s3) => (s3[s3.Single = 0] = "Single", s3[s3.Multi = 1] = "Multi", s3))(me || {});
var xe = ((s3) => (s3[s3.Pointer = 0] = "Pointer", s3[s3.Other = 1] = "Other", s3))(xe || {});
var G = Symbol("ComboboxContext");
function H3(l4) {
  let g5 = inject(G, null);
  if (g5 === null) {
    let s3 = new Error(`<${l4} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s3, H3), s3;
  }
  return g5;
}
var Ke = defineComponent({ name: "Combobox", emits: { "update:modelValue": (l4) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => ve }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(l4, { slots: g5, attrs: s3, emit: P3 }) {
  let e4 = ref(1), t6 = ref(null), p9 = ref(null), T4 = ref(null), r4 = ref(null), b4 = ref({ static: false, hold: false }), x4 = ref([]), C3 = ref(null), y3 = ref(1), h4 = ref(false);
  function k2(a7 = (i4) => i4) {
    let i4 = C3.value !== null ? x4.value[C3.value] : null, d8 = O(a7(x4.value.slice()), (f5) => o2(f5.dataRef.domRef)), n6 = i4 ? d8.indexOf(i4) : null;
    return n6 === -1 && (n6 = null), { options: d8, activeOptionIndex: n6 };
  }
  let w3 = computed(() => l4.multiple ? 1 : 0), o4 = computed(() => l4.nullable), [v4, c5] = d2(computed(() => l4.modelValue === void 0 ? u(w3.value, { [1]: [], [0]: void 0 }) : l4.modelValue), (a7) => P3("update:modelValue", a7), computed(() => l4.defaultValue)), u6 = { comboboxState: e4, value: v4, mode: w3, compare(a7, i4) {
    if (typeof l4.by == "string") {
      let d8 = l4.by;
      return (a7 == null ? void 0 : a7[d8]) === (i4 == null ? void 0 : i4[d8]);
    }
    return l4.by(a7, i4);
  }, defaultValue: computed(() => l4.defaultValue), nullable: o4, inputRef: p9, labelRef: t6, buttonRef: T4, optionsRef: r4, disabled: computed(() => l4.disabled), options: x4, change(a7) {
    c5(a7);
  }, activeOptionIndex: computed(() => {
    if (h4.value && C3.value === null && x4.value.length > 0) {
      let a7 = x4.value.findIndex((i4) => !i4.dataRef.disabled);
      a7 !== -1 && (C3.value = a7);
    }
    return C3.value;
  }), activationTrigger: y3, optionsPropsRef: b4, closeCombobox() {
    h4.value = false, !l4.disabled && e4.value !== 1 && (e4.value = 1, C3.value = null);
  }, openCombobox() {
    if (h4.value = true, l4.disabled || e4.value === 0)
      return;
    let a7 = x4.value.findIndex((i4) => {
      let d8 = toRaw(i4.dataRef.value);
      return u(w3.value, { [0]: () => u6.compare(toRaw(u6.value.value), toRaw(d8)), [1]: () => toRaw(u6.value.value).some((f5) => u6.compare(toRaw(f5), toRaw(d8))) });
    });
    a7 !== -1 && (C3.value = a7), e4.value = 0;
  }, goToOption(a7, i4, d8) {
    if (h4.value = false, l4.disabled || r4.value && !b4.value.static && e4.value === 1)
      return;
    let n6 = k2();
    if (n6.activeOptionIndex === null) {
      let S5 = n6.options.findIndex((F5) => !F5.dataRef.disabled);
      S5 !== -1 && (n6.activeOptionIndex = S5);
    }
    let f5 = x(a7 === a.Specific ? { focus: a.Specific, id: i4 } : { focus: a7 }, { resolveItems: () => n6.options, resolveActiveIndex: () => n6.activeOptionIndex, resolveId: (S5) => S5.id, resolveDisabled: (S5) => S5.dataRef.disabled });
    C3.value = f5, y3.value = d8 != null ? d8 : 1, x4.value = n6.options;
  }, selectOption(a7) {
    let i4 = x4.value.find((n6) => n6.id === a7);
    if (!i4)
      return;
    let { dataRef: d8 } = i4;
    c5(u(w3.value, { [0]: () => d8.value, [1]: () => {
      let n6 = toRaw(u6.value.value).slice(), f5 = toRaw(d8.value), S5 = n6.findIndex((F5) => u6.compare(f5, toRaw(F5)));
      return S5 === -1 ? n6.push(f5) : n6.splice(S5, 1), n6;
    } }));
  }, selectActiveOption() {
    if (u6.activeOptionIndex.value === null)
      return;
    let { dataRef: a7, id: i4 } = x4.value[u6.activeOptionIndex.value];
    c5(u(w3.value, { [0]: () => a7.value, [1]: () => {
      let d8 = toRaw(u6.value.value).slice(), n6 = toRaw(a7.value), f5 = d8.findIndex((S5) => u6.compare(n6, toRaw(S5)));
      return f5 === -1 ? d8.push(n6) : d8.splice(f5, 1), d8;
    } })), u6.goToOption(a.Specific, i4);
  }, registerOption(a7, i4) {
    let d8 = { id: a7, dataRef: i4 }, n6 = k2((f5) => [...f5, d8]);
    if (C3.value === null) {
      let f5 = i4.value.value;
      u(w3.value, { [0]: () => u6.compare(toRaw(u6.value.value), toRaw(f5)), [1]: () => toRaw(u6.value.value).some((F5) => u6.compare(toRaw(F5), toRaw(f5))) }) && (n6.activeOptionIndex = n6.options.indexOf(d8));
    }
    x4.value = n6.options, C3.value = n6.activeOptionIndex, y3.value = 1, n6.options.some((f5) => !o2(f5.dataRef.domRef)) && requestAnimationFrame(() => {
      let f5 = k2();
      x4.value = f5.options, C3.value = f5.activeOptionIndex;
    });
  }, unregisterOption(a7) {
    var d8;
    u6.activeOptionIndex.value !== null && ((d8 = u6.options.value[u6.activeOptionIndex.value]) == null ? void 0 : d8.id) === a7 && (h4.value = true);
    let i4 = k2((n6) => {
      let f5 = n6.findIndex((S5) => S5.id === a7);
      return f5 !== -1 && n6.splice(f5, 1), n6;
    });
    x4.value = i4.options, C3.value = i4.activeOptionIndex, y3.value = 1;
  } };
  F2([p9, T4, r4], () => u6.closeCombobox(), computed(() => e4.value === 0)), provide(G, u6), c(computed(() => u(e4.value, { [0]: l.Open, [1]: l.Closed })));
  let D = computed(() => u6.activeOptionIndex.value === null ? null : x4.value[u6.activeOptionIndex.value].dataRef.value), E6 = computed(() => {
    var a7;
    return (a7 = o2(p9)) == null ? void 0 : a7.closest("form");
  });
  return onMounted(() => {
    watch([E6], () => {
      if (!E6.value || l4.defaultValue === void 0)
        return;
      function a7() {
        u6.change(l4.defaultValue);
      }
      return E6.value.addEventListener("reset", a7), () => {
        var i4;
        (i4 = E6.value) == null || i4.removeEventListener("reset", a7);
      };
    }, { immediate: true });
  }), () => {
    let { name: a7, disabled: i4, form: d8, ...n6 } = l4, f5 = { open: e4.value === 0, disabled: i4, activeIndex: u6.activeOptionIndex.value, activeOption: D.value, value: v4.value };
    return h(Fragment, [...a7 != null && v4.value != null ? e2({ [a7]: v4.value }).map(([S5, F5]) => h(f2, K({ features: a2.Hidden, key: S5, as: "input", type: "hidden", hidden: true, readOnly: true, form: d8, name: S5, value: F5 }))) : [], H({ theirProps: { ...s3, ...T(n6, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: f5, slots: g5, attrs: s3, name: "Combobox" })]);
  };
} });
var $e = defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${t()}` } }, setup(l4, { attrs: g5, slots: s3 }) {
  let P3 = H3("ComboboxLabel");
  function e4() {
    var t6;
    (t6 = o2(P3.inputRef)) == null || t6.focus({ preventScroll: true });
  }
  return () => {
    let t6 = { open: P3.comboboxState.value === 0, disabled: P3.disabled.value }, { id: p9, ...T4 } = l4, r4 = { id: p9, ref: P3.labelRef, onClick: e4 };
    return H({ ourProps: r4, theirProps: T4, slot: t6, attrs: g5, slots: s3, name: "ComboboxLabel" });
  };
} });
var Ue = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${t()}` } }, setup(l4, { attrs: g5, slots: s3, expose: P3 }) {
  let e4 = H3("ComboboxButton");
  P3({ el: e4.buttonRef, $el: e4.buttonRef });
  function t6(r4) {
    e4.disabled.value || (e4.comboboxState.value === 0 ? e4.closeCombobox() : (r4.preventDefault(), e4.openCombobox()), nextTick(() => {
      var b4;
      return (b4 = o2(e4.inputRef)) == null ? void 0 : b4.focus({ preventScroll: true });
    }));
  }
  function p9(r4) {
    switch (r4.key) {
      case o.ArrowDown:
        r4.preventDefault(), r4.stopPropagation(), e4.comboboxState.value === 1 && e4.openCombobox(), nextTick(() => {
          var b4;
          return (b4 = e4.inputRef.value) == null ? void 0 : b4.focus({ preventScroll: true });
        });
        return;
      case o.ArrowUp:
        r4.preventDefault(), r4.stopPropagation(), e4.comboboxState.value === 1 && (e4.openCombobox(), nextTick(() => {
          e4.value.value || e4.goToOption(a.Last);
        })), nextTick(() => {
          var b4;
          return (b4 = e4.inputRef.value) == null ? void 0 : b4.focus({ preventScroll: true });
        });
        return;
      case o.Escape:
        if (e4.comboboxState.value !== 0)
          return;
        r4.preventDefault(), e4.optionsRef.value && !e4.optionsPropsRef.value.static && r4.stopPropagation(), e4.closeCombobox(), nextTick(() => {
          var b4;
          return (b4 = e4.inputRef.value) == null ? void 0 : b4.focus({ preventScroll: true });
        });
        return;
    }
  }
  let T4 = b2(computed(() => ({ as: l4.as, type: g5.type })), e4.buttonRef);
  return () => {
    var y3, h4;
    let r4 = { open: e4.comboboxState.value === 0, disabled: e4.disabled.value, value: e4.value.value }, { id: b4, ...x4 } = l4, C3 = { ref: e4.buttonRef, id: b4, type: T4.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (y3 = o2(e4.optionsRef)) == null ? void 0 : y3.id, "aria-expanded": e4.disabled.value ? void 0 : e4.comboboxState.value === 0, "aria-labelledby": e4.labelRef.value ? [(h4 = o2(e4.labelRef)) == null ? void 0 : h4.id, b4].join(" ") : void 0, disabled: e4.disabled.value === true ? true : void 0, onKeydown: p9, onClick: t6 };
    return H({ ourProps: C3, theirProps: x4, slot: r4, attrs: g5, slots: s3, name: "ComboboxButton" });
  };
} });
var _e = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${t()}` } }, emits: { change: (l4) => true }, setup(l4, { emit: g5, attrs: s3, slots: P3, expose: e4 }) {
  let t6 = H3("ComboboxInput"), p9 = { value: false };
  e4({ el: t6.inputRef, $el: t6.inputRef });
  let T4 = computed(() => {
    var v4;
    let o4 = t6.value.value;
    return o2(t6.inputRef) ? typeof l4.displayValue != "undefined" && o4 !== void 0 ? (v4 = l4.displayValue(o4)) != null ? v4 : "" : typeof o4 == "string" ? o4 : "" : "";
  });
  onMounted(() => {
    watch([T4, t6.comboboxState], ([o4, v4], [c5, u6]) => {
      if (p9.value)
        return;
      let D = o2(t6.inputRef);
      D && (u6 === 0 && v4 === 1 || o4 !== c5) && (D.value = o4);
    }, { immediate: true }), watch([t6.comboboxState], ([o4], [v4]) => {
      if (o4 === 0 && v4 === 1) {
        let c5 = o2(t6.inputRef);
        if (!c5)
          return;
        let u6 = c5.value, { selectionStart: D, selectionEnd: E6, selectionDirection: a7 } = c5;
        c5.value = "", c5.value = u6, a7 !== null ? c5.setSelectionRange(D, E6, a7) : c5.setSelectionRange(D, E6);
      }
    });
  });
  let r4 = ref(false), b4 = ref(null);
  function x4() {
    r4.value = true;
  }
  function C3() {
    r3().nextFrame(() => {
      r4.value = false, b4.value && (t6.openCombobox(), g5("change", b4.value), b4.value = null);
    });
  }
  function y3(o4) {
    switch (p9.value = true, o4.key) {
      case o.Backspace:
      case o.Delete:
        if (t6.mode.value !== 0 || !t6.nullable.value)
          return;
        let v4 = o4.currentTarget;
        requestAnimationFrame(() => {
          if (v4.value === "") {
            t6.change(null);
            let c5 = o2(t6.optionsRef);
            c5 && (c5.scrollTop = 0), t6.goToOption(a.Nothing);
          }
        });
        break;
      case o.Enter:
        if (p9.value = false, t6.comboboxState.value !== 0 || r4.value)
          return;
        if (o4.preventDefault(), o4.stopPropagation(), t6.activeOptionIndex.value === null) {
          t6.closeCombobox();
          return;
        }
        t6.selectActiveOption(), t6.mode.value === 0 && t6.closeCombobox();
        break;
      case o.ArrowDown:
        return p9.value = false, o4.preventDefault(), o4.stopPropagation(), u(t6.comboboxState.value, { [0]: () => t6.goToOption(a.Next), [1]: () => t6.openCombobox() });
      case o.ArrowUp:
        return p9.value = false, o4.preventDefault(), o4.stopPropagation(), u(t6.comboboxState.value, { [0]: () => t6.goToOption(a.Previous), [1]: () => {
          t6.openCombobox(), nextTick(() => {
            t6.value.value || t6.goToOption(a.Last);
          });
        } });
      case o.Home:
        if (o4.shiftKey)
          break;
        return p9.value = false, o4.preventDefault(), o4.stopPropagation(), t6.goToOption(a.First);
      case o.PageUp:
        return p9.value = false, o4.preventDefault(), o4.stopPropagation(), t6.goToOption(a.First);
      case o.End:
        if (o4.shiftKey)
          break;
        return p9.value = false, o4.preventDefault(), o4.stopPropagation(), t6.goToOption(a.Last);
      case o.PageDown:
        return p9.value = false, o4.preventDefault(), o4.stopPropagation(), t6.goToOption(a.Last);
      case o.Escape:
        if (p9.value = false, t6.comboboxState.value !== 0)
          return;
        o4.preventDefault(), t6.optionsRef.value && !t6.optionsPropsRef.value.static && o4.stopPropagation(), t6.closeCombobox();
        break;
      case o.Tab:
        if (p9.value = false, t6.comboboxState.value !== 0)
          return;
        t6.mode.value === 0 && t6.selectActiveOption(), t6.closeCombobox();
        break;
    }
  }
  function h4(o4) {
    if (r4.value) {
      b4.value = o4;
      return;
    }
    t6.openCombobox(), g5("change", o4);
  }
  function k2() {
    p9.value = false;
  }
  let w3 = computed(() => {
    var o4, v4, c5, u6;
    return (u6 = (c5 = (v4 = l4.defaultValue) != null ? v4 : t6.defaultValue.value !== void 0 ? (o4 = l4.displayValue) == null ? void 0 : o4.call(l4, t6.defaultValue.value) : null) != null ? c5 : t6.defaultValue.value) != null ? u6 : "";
  });
  return () => {
    var a7, i4, d8, n6, f5, S5;
    let o4 = { open: t6.comboboxState.value === 0 }, { id: v4, displayValue: c5, onChange: u6, ...D } = l4, E6 = { "aria-controls": (a7 = t6.optionsRef.value) == null ? void 0 : a7.id, "aria-expanded": t6.disabled.value ? void 0 : t6.comboboxState.value === 0, "aria-activedescendant": t6.activeOptionIndex.value === null || (i4 = t6.options.value[t6.activeOptionIndex.value]) == null ? void 0 : i4.id, "aria-labelledby": (f5 = (d8 = o2(t6.labelRef)) == null ? void 0 : d8.id) != null ? f5 : (n6 = o2(t6.buttonRef)) == null ? void 0 : n6.id, "aria-autocomplete": "list", id: v4, onCompositionstart: x4, onCompositionend: C3, onKeydown: y3, onInput: h4, onBlur: k2, role: "combobox", type: (S5 = s3.type) != null ? S5 : "text", tabIndex: 0, ref: t6.inputRef, defaultValue: w3.value, disabled: t6.disabled.value === true ? true : void 0 };
    return H({ ourProps: E6, theirProps: D, slot: o4, attrs: s3, slots: P3, features: N.RenderStrategy | N.Static, name: "ComboboxInput" });
  };
} });
var qe = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(l4, { attrs: g5, slots: s3, expose: P3 }) {
  let e4 = H3("ComboboxOptions"), t6 = `headlessui-combobox-options-${t()}`;
  P3({ el: e4.optionsRef, $el: e4.optionsRef }), watchEffect(() => {
    e4.optionsPropsRef.value.static = l4.static;
  }), watchEffect(() => {
    e4.optionsPropsRef.value.hold = l4.hold;
  });
  let p9 = p(), T4 = computed(() => p9 !== null ? (p9.value & l.Open) === l.Open : e4.comboboxState.value === 0);
  return p2({ container: computed(() => o2(e4.optionsRef)), enabled: computed(() => e4.comboboxState.value === 0), accept(r4) {
    return r4.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : r4.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(r4) {
    r4.setAttribute("role", "none");
  } }), () => {
    var C3, y3, h4;
    let r4 = { open: e4.comboboxState.value === 0 }, b4 = { "aria-labelledby": (h4 = (C3 = o2(e4.labelRef)) == null ? void 0 : C3.id) != null ? h4 : (y3 = o2(e4.buttonRef)) == null ? void 0 : y3.id, id: t6, ref: e4.optionsRef, role: "listbox", "aria-multiselectable": e4.mode.value === 1 ? true : void 0 }, x4 = T(l4, ["hold"]);
    return H({ ourProps: b4, theirProps: x4, slot: r4, attrs: g5, slots: s3, features: N.RenderStrategy | N.Static, visible: T4.value, name: "ComboboxOptions" });
  };
} });
var Je = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(l4, { slots: g5, attrs: s3, expose: P3 }) {
  let e4 = H3("ComboboxOption"), t6 = `headlessui-combobox-option-${t()}`, p9 = ref(null);
  P3({ el: p9, $el: p9 });
  let T4 = computed(() => e4.activeOptionIndex.value !== null ? e4.options.value[e4.activeOptionIndex.value].id === t6 : false), r4 = computed(() => u(e4.mode.value, { [0]: () => e4.compare(toRaw(e4.value.value), toRaw(l4.value)), [1]: () => toRaw(e4.value.value).some((o4) => e4.compare(toRaw(o4), toRaw(l4.value))) })), b4 = computed(() => ({ disabled: l4.disabled, value: l4.value, domRef: p9 }));
  onMounted(() => e4.registerOption(t6, b4)), onUnmounted(() => e4.unregisterOption(t6)), watchEffect(() => {
    e4.comboboxState.value === 0 && T4.value && e4.activationTrigger.value !== 0 && nextTick(() => {
      var o4, v4;
      return (v4 = (o4 = o2(p9)) == null ? void 0 : o4.scrollIntoView) == null ? void 0 : v4.call(o4, { block: "nearest" });
    });
  });
  function x4(o4) {
    if (l4.disabled)
      return o4.preventDefault();
    e4.selectOption(t6), e4.mode.value === 0 && e4.closeCombobox(), n4() || requestAnimationFrame(() => {
      var v4;
      return (v4 = o2(e4.inputRef)) == null ? void 0 : v4.focus();
    });
  }
  function C3() {
    if (l4.disabled)
      return e4.goToOption(a.Nothing);
    e4.goToOption(a.Specific, t6);
  }
  let y3 = u3();
  function h4(o4) {
    y3.update(o4);
  }
  function k2(o4) {
    y3.wasMoved(o4) && (l4.disabled || T4.value || e4.goToOption(a.Specific, t6, 0));
  }
  function w3(o4) {
    y3.wasMoved(o4) && (l4.disabled || T4.value && (e4.optionsPropsRef.value.hold || e4.goToOption(a.Nothing)));
  }
  return () => {
    let { disabled: o4 } = l4, v4 = { active: T4.value, selected: r4.value, disabled: o4 }, c5 = { id: t6, ref: p9, role: "option", tabIndex: o4 === true ? void 0 : -1, "aria-disabled": o4 === true ? true : void 0, "aria-selected": r4.value, disabled: void 0, onClick: x4, onFocus: C3, onPointerenter: h4, onMouseenter: h4, onPointermove: k2, onMousemove: k2, onPointerleave: w3, onMouseleave: w3 };
    return H({ ourProps: c5, theirProps: l4, slot: v4, attrs: s3, slots: g5, name: "ComboboxOption" });
  };
} });

// node_modules/@headlessui/vue/dist/hooks/use-tab-direction.js
var d3 = ((r4) => (r4[r4.Forwards = 0] = "Forwards", r4[r4.Backwards = 1] = "Backwards", r4))(d3 || {});
function n5() {
  let o4 = ref(0);
  return w2("keydown", (e4) => {
    e4.key === "Tab" && (o4.value = e4.shiftKey ? 1 : 0);
  }), o4;
}

// node_modules/@headlessui/vue/dist/hooks/use-event-listener.js
function E2(n6, e4, o4, r4) {
  c2.isServer || watchEffect((t6) => {
    n6 = n6 != null ? n6 : window, n6.addEventListener(e4, o4, r4), t6(() => n6.removeEventListener(e4, o4, r4));
  });
}

// node_modules/@headlessui/vue/dist/utils/micro-task.js
function t3(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((o4) => setTimeout(() => {
    throw o4;
  }));
}

// node_modules/@headlessui/vue/dist/utils/document-ready.js
function t4(n6) {
  function e4() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e4));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e4), e4());
}

// node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js
function B(e4) {
  if (!e4)
    return /* @__PURE__ */ new Set();
  if (typeof e4 == "function")
    return new Set(e4());
  let t6 = /* @__PURE__ */ new Set();
  for (let l4 of e4.value) {
    let o4 = o2(l4);
    o4 instanceof HTMLElement && t6.add(o4);
  }
  return t6;
}
var A = ((n6) => (n6[n6.None = 1] = "None", n6[n6.InitialFocus = 2] = "InitialFocus", n6[n6.TabLock = 4] = "TabLock", n6[n6.FocusLock = 8] = "FocusLock", n6[n6.RestoreFocus = 16] = "RestoreFocus", n6[n6.All = 30] = "All", n6))(A || {});
var ce2 = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e4, { attrs: t6, slots: l4, expose: o4 }) {
  let r4 = ref(null);
  o4({ el: r4, $el: r4 });
  let i4 = computed(() => m(r4)), n6 = ref(false);
  onMounted(() => n6.value = true), onUnmounted(() => n6.value = false), z({ ownerDocument: i4 }, computed(() => n6.value && Boolean(e4.features & 16)));
  let m5 = J({ ownerDocument: i4, container: r4, initialFocus: computed(() => e4.initialFocus) }, computed(() => n6.value && Boolean(e4.features & 2)));
  Q({ ownerDocument: i4, container: r4, containers: e4.containers, previousActiveElement: m5 }, computed(() => n6.value && Boolean(e4.features & 8)));
  let c5 = n5();
  function u6(a7) {
    let d8 = o2(r4);
    if (!d8)
      return;
    ((g5) => g5())(() => {
      u(c5.value, { [d3.Forwards]: () => {
        P(d8, N2.First, { skipElements: [a7.relatedTarget] });
      }, [d3.Backwards]: () => {
        P(d8, N2.Last, { skipElements: [a7.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function H5(a7) {
    a7.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function M3(a7) {
    if (!n6.value)
      return;
    let d8 = B(e4.containers);
    o2(r4) instanceof HTMLElement && d8.add(o2(r4));
    let E6 = a7.relatedTarget;
    E6 instanceof HTMLElement && E6.dataset.headlessuiFocusGuard !== "true" && (N3(d8, E6) || (s3.value ? P(o2(r4), u(c5.value, { [d3.Forwards]: () => N2.Next, [d3.Backwards]: () => N2.Previous }) | N2.WrapAround, { relativeTo: a7.target }) : a7.target instanceof HTMLElement && S2(a7.target)));
  }
  return () => {
    let a7 = {}, d8 = { ref: r4, onKeydown: H5, onFocusout: M3 }, { features: E6, initialFocus: g5, containers: X2, ...O3 } = e4;
    return h(Fragment, [Boolean(E6 & 4) && h(f2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u6, features: a2.Focusable }), H({ ourProps: d8, theirProps: { ...t6, ...O3 }, slot: a7, attrs: t6, slots: l4, name: "FocusTrap" }), Boolean(E6 & 4) && h(f2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u6, features: a2.Focusable })]);
  };
} }), { features: A });
var L = [];
t4(() => {
  function e4(t6) {
    t6.target instanceof HTMLElement && t6.target !== document.body && L[0] !== t6.target && (L.unshift(t6.target), L = L.filter((l4) => l4 != null && l4.isConnected), L.splice(10));
  }
  window.addEventListener("click", e4, { capture: true }), window.addEventListener("mousedown", e4, { capture: true }), window.addEventListener("focus", e4, { capture: true }), document.body.addEventListener("click", e4, { capture: true }), document.body.addEventListener("mousedown", e4, { capture: true }), document.body.addEventListener("focus", e4, { capture: true });
});
function x2(e4) {
  let t6 = ref(L.slice());
  return watch([e4], ([l4], [o4]) => {
    o4 === true && l4 === false ? t3(() => {
      t6.value.splice(0);
    }) : o4 === false && l4 === true && (t6.value = L.slice());
  }, { flush: "post" }), () => {
    var l4;
    return (l4 = t6.value.find((o4) => o4 != null && o4.isConnected)) != null ? l4 : null;
  };
}
function z({ ownerDocument: e4 }, t6) {
  let l4 = x2(t6);
  onMounted(() => {
    watchEffect(() => {
      var o4, r4;
      t6.value || ((o4 = e4.value) == null ? void 0 : o4.activeElement) === ((r4 = e4.value) == null ? void 0 : r4.body) && S2(l4());
    }, { flush: "post" });
  }), onUnmounted(() => {
    t6.value && S2(l4());
  });
}
function J({ ownerDocument: e4, container: t6, initialFocus: l4 }, o4) {
  let r4 = ref(null), i4 = ref(false);
  return onMounted(() => i4.value = true), onUnmounted(() => i4.value = false), onMounted(() => {
    watch([t6, l4, o4], (n6, m5) => {
      if (n6.every((u6, s3) => (m5 == null ? void 0 : m5[s3]) === u6) || !o4.value)
        return;
      let c5 = o2(t6);
      c5 && t3(() => {
        var H5, M3;
        if (!i4.value)
          return;
        let u6 = o2(l4), s3 = (H5 = e4.value) == null ? void 0 : H5.activeElement;
        if (u6) {
          if (u6 === s3) {
            r4.value = s3;
            return;
          }
        } else if (c5.contains(s3)) {
          r4.value = s3;
          return;
        }
        u6 ? S2(u6) : P(c5, N2.First | N2.NoScroll) === T2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r4.value = (M3 = e4.value) == null ? void 0 : M3.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), r4;
}
function Q({ ownerDocument: e4, container: t6, containers: l4, previousActiveElement: o4 }, r4) {
  var i4;
  E2((i4 = e4.value) == null ? void 0 : i4.defaultView, "focus", (n6) => {
    if (!r4.value)
      return;
    let m5 = B(l4);
    o2(t6) instanceof HTMLElement && m5.add(o2(t6));
    let c5 = o4.value;
    if (!c5)
      return;
    let u6 = n6.target;
    u6 && u6 instanceof HTMLElement ? N3(m5, u6) ? (o4.value = u6, S2(u6)) : (n6.preventDefault(), n6.stopPropagation(), S2(c5)) : S2(o4.value);
  }, true);
}
function N3(e4, t6) {
  for (let l4 of e4)
    if (l4.contains(t6))
      return true;
  return false;
}

// node_modules/@headlessui/vue/dist/hooks/use-inert.js
var i3 = /* @__PURE__ */ new Map();
var t5 = /* @__PURE__ */ new Map();
function E3(d8, f5 = ref(true)) {
  watchEffect((o4) => {
    var a7;
    if (!f5.value)
      return;
    let e4 = o2(d8);
    if (!e4)
      return;
    o4(function() {
      var u6;
      if (!e4)
        return;
      let r4 = (u6 = t5.get(e4)) != null ? u6 : 1;
      if (r4 === 1 ? t5.delete(e4) : t5.set(e4, r4 - 1), r4 !== 1)
        return;
      let n6 = i3.get(e4);
      n6 && (n6["aria-hidden"] === null ? e4.removeAttribute("aria-hidden") : e4.setAttribute("aria-hidden", n6["aria-hidden"]), e4.inert = n6.inert, i3.delete(e4));
    });
    let l4 = (a7 = t5.get(e4)) != null ? a7 : 0;
    t5.set(e4, l4 + 1), l4 === 0 && (i3.set(e4, { "aria-hidden": e4.getAttribute("aria-hidden"), inert: e4.inert }), e4.setAttribute("aria-hidden", "true"), e4.inert = true);
  });
}

// node_modules/@headlessui/vue/dist/internal/portal-force-root.js
var e3 = Symbol("ForcePortalRootContext");
function u4() {
  return inject(e3, false);
}
var P2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o4, { slots: t6, attrs: r4 }) {
  return provide(e3, o4.force), () => {
    let { force: f5, ...n6 } = o4;
    return H({ theirProps: n6, ourProps: {}, slot: {}, slots: t6, attrs: r4, name: "ForcePortalRoot" });
  };
} });

// node_modules/@headlessui/vue/dist/components/portal/portal.js
function E4(t6) {
  let e4 = m(t6);
  if (!e4) {
    if (t6 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t6}`);
  }
  let u6 = e4.getElementById("headlessui-portal-root");
  if (u6)
    return u6;
  let r4 = e4.createElement("div");
  return r4.setAttribute("id", "headlessui-portal-root"), e4.body.appendChild(r4);
}
var U = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t6, { slots: e4, attrs: u6 }) {
  let r4 = ref(null), i4 = computed(() => m(r4)), l4 = u4(), n6 = inject(h3, null), o4 = ref(l4 === true || n6 == null ? E4(r4.value) : n6.resolveTarget());
  watchEffect(() => {
    l4 || n6 != null && (o4.value = n6.resolveTarget());
  });
  let d8 = inject(f4, null);
  return onMounted(() => {
    let a7 = o2(r4);
    a7 && d8 && onUnmounted(d8.register(a7));
  }), onUnmounted(() => {
    var v4, P3;
    let a7 = (v4 = i4.value) == null ? void 0 : v4.getElementById("headlessui-portal-root");
    a7 && o4.value === a7 && o4.value.children.length <= 0 && ((P3 = o4.value.parentElement) == null || P3.removeChild(o4.value));
  }), () => {
    if (o4.value === null)
      return null;
    let a7 = { ref: r4, "data-headlessui-portal": "" };
    return h(Teleport, { to: o4.value }, H({ ourProps: a7, theirProps: t6, slot: {}, attrs: u6, slots: e4, name: "Portal" }));
  };
} });
var f4 = Symbol("PortalParentContext");
function V() {
  let t6 = inject(f4, null), e4 = ref([]);
  function u6(l4) {
    return e4.value.push(l4), t6 && t6.register(l4), () => r4(l4);
  }
  function r4(l4) {
    let n6 = e4.value.indexOf(l4);
    n6 !== -1 && e4.value.splice(n6, 1), t6 && t6.unregister(l4);
  }
  let i4 = { register: u6, unregister: r4, portals: e4 };
  return [e4, defineComponent({ name: "PortalWrapper", setup(l4, { slots: n6 }) {
    return provide(f4, i4), () => {
      var o4;
      return (o4 = n6.default) == null ? void 0 : o4.call(n6);
    };
  } })];
}
var h3 = Symbol("PortalGroupContext");
var _2 = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t6, { attrs: e4, slots: u6 }) {
  let r4 = reactive({ resolveTarget() {
    return t6.target;
  } });
  return provide(h3, r4), () => {
    let { target: i4, ...l4 } = t6;
    return H({ theirProps: l4, ourProps: {}, slot: {}, attrs: e4, slots: u6, name: "PortalGroup" });
  };
} });

// node_modules/@headlessui/vue/dist/internal/stack-context.js
var u5 = Symbol("StackContext");
var p4 = ((e4) => (e4[e4.Add = 0] = "Add", e4[e4.Remove = 1] = "Remove", e4))(p4 || {});
function v3() {
  return inject(u5, () => {
  });
}
function S3({ type: o4, enabled: r4, element: e4, onUpdate: i4 }) {
  let a7 = v3();
  function t6(...n6) {
    i4 == null || i4(...n6), a7(...n6);
  }
  onMounted(() => {
    watch(r4, (n6, d8) => {
      n6 ? t6(0, o4, e4) : d8 === true && t6(1, o4, e4);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r4.value && t6(1, o4, e4);
  }), provide(u5, t6);
}

// node_modules/@headlessui/vue/dist/components/description/description.js
var p5 = Symbol("DescriptionContext");
function b3() {
  let t6 = inject(p5, null);
  if (t6 === null)
    throw new Error("Missing parent");
  return t6;
}
function M({ slot: t6 = ref({}), name: i4 = "Description", props: o4 = {} } = {}) {
  let e4 = ref([]);
  function s3(n6) {
    return e4.value.push(n6), () => {
      let r4 = e4.value.indexOf(n6);
      r4 !== -1 && e4.value.splice(r4, 1);
    };
  }
  return provide(p5, { register: s3, slot: t6, name: i4, props: o4 }), computed(() => e4.value.length > 0 ? e4.value.join(" ") : void 0);
}
var E5 = defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t()}` } }, setup(t6, { attrs: i4, slots: o4 }) {
  let e4 = b3();
  return onMounted(() => onUnmounted(e4.register(t6.id))), () => {
    let { name: s3 = "Description", slot: n6 = ref({}), props: r4 = {} } = e4, { id: d8, ...l4 } = t6, c5 = { ...Object.entries(r4).reduce((f5, [a7, g5]) => Object.assign(f5, { [a7]: unref(g5) }), {}), id: d8 };
    return H({ ourProps: c5, theirProps: l4, slot: n6.value, attrs: i4, slots: o4, name: s3 });
  };
} });

// node_modules/@headlessui/vue/dist/hooks/use-store.js
function m2(t6) {
  let e4 = shallowRef(t6.getSnapshot());
  return onUnmounted(t6.subscribe(() => {
    e4.value = t6.getSnapshot();
  })), e4;
}

// node_modules/@headlessui/vue/dist/utils/store.js
function a3(o4, r4) {
  let t6 = o4(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t6;
  }, subscribe(e4) {
    return n6.add(e4), () => n6.delete(e4);
  }, dispatch(e4, ...s3) {
    let i4 = r4[e4].call(t6, ...s3);
    i4 && (t6 = i4, n6.forEach((c5) => c5()));
  } };
}

// node_modules/@headlessui/vue/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c4() {
  let o4;
  return { before({ doc: e4 }) {
    var l4;
    let n6 = e4.documentElement;
    o4 = ((l4 = e4.defaultView) != null ? l4 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e4, d: n6 }) {
    let t6 = e4.documentElement, l4 = t6.clientWidth - t6.offsetWidth, r4 = o4 - l4;
    n6.style(t6, "paddingRight", `${r4}px`);
  } };
}

// node_modules/@headlessui/vue/dist/hooks/document-overflow/handle-ios-locking.js
function p6() {
  if (!t2())
    return {};
  let o4;
  return { before() {
    o4 = window.pageYOffset;
  }, after({ doc: r4, d: l4, meta: s3 }) {
    function i4(e4) {
      return s3.containers.flatMap((t6) => t6()).some((t6) => t6.contains(e4));
    }
    l4.style(r4.body, "marginTop", `-${o4}px`), window.scrollTo(0, 0);
    let n6 = null;
    l4.addEventListener(r4, "click", (e4) => {
      if (e4.target instanceof HTMLElement)
        try {
          let t6 = e4.target.closest("a");
          if (!t6)
            return;
          let { hash: c5 } = new URL(t6.href), a7 = r4.querySelector(c5);
          a7 && !i4(a7) && (n6 = a7);
        } catch {
        }
    }, true), l4.addEventListener(r4, "touchmove", (e4) => {
      e4.target instanceof HTMLElement && !i4(e4.target) && e4.preventDefault();
    }, { passive: false }), l4.add(() => {
      window.scrollTo(0, window.pageYOffset + o4), n6 && n6.isConnected && (n6.scrollIntoView({ block: "nearest" }), n6 = null);
    });
  } };
}

// node_modules/@headlessui/vue/dist/hooks/document-overflow/prevent-scroll.js
function l2() {
  return { before({ doc: e4, d: o4 }) {
    o4.style(e4.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/vue/dist/hooks/document-overflow/overflow-store.js
function m3(e4) {
  let n6 = {};
  for (let t6 of e4)
    Object.assign(n6, t6(n6));
  return n6;
}
var a4 = a3(() => /* @__PURE__ */ new Map(), { PUSH(e4, n6) {
  var o4;
  let t6 = (o4 = this.get(e4)) != null ? o4 : { doc: e4, count: 0, d: r3(), meta: /* @__PURE__ */ new Set() };
  return t6.count++, t6.meta.add(n6), this.set(e4, t6), this;
}, POP(e4, n6) {
  let t6 = this.get(e4);
  return t6 && (t6.count--, t6.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e4, d: n6, meta: t6 }) {
  let o4 = { doc: e4, d: n6, meta: m3(t6) }, c5 = [p6(), c4(), l2()];
  c5.forEach(({ before: r4 }) => r4 == null ? void 0 : r4(o4)), c5.forEach(({ after: r4 }) => r4 == null ? void 0 : r4(o4));
}, SCROLL_ALLOW({ d: e4 }) {
  e4.dispose();
}, TEARDOWN({ doc: e4 }) {
  this.delete(e4);
} });
a4.subscribe(() => {
  let e4 = a4.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t6] of e4)
    n6.set(t6, t6.documentElement.style.overflow);
  for (let t6 of e4.values()) {
    let o4 = n6.get(t6.doc) === "hidden", c5 = t6.count !== 0;
    (c5 && !o4 || !c5 && o4) && a4.dispatch(t6.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t6), t6.count === 0 && a4.dispatch("TEARDOWN", t6);
  }
});

// node_modules/@headlessui/vue/dist/hooks/document-overflow/use-document-overflow.js
function d4(t6, a7, n6) {
  let i4 = m2(a4), l4 = computed(() => {
    let e4 = t6.value ? i4.value.get(t6.value) : void 0;
    return e4 ? e4.count > 0 : false;
  });
  return watch([t6, a7], ([e4, m5], [r4], o4) => {
    if (!e4 || !m5)
      return;
    a4.dispatch("PUSH", e4, n6);
    let f5 = false;
    o4(() => {
      f5 || (a4.dispatch("POP", r4 != null ? r4 : e4, n6), f5 = true);
    });
  }, { immediate: true }), l4;
}

// node_modules/@headlessui/vue/dist/hooks/use-root-containers.js
function p7({ defaultContainers: r4 = [], portals: t6 } = {}) {
  let o4 = ref(null), l4 = m(o4);
  function u6() {
    var i4;
    let n6 = [];
    for (let e4 of r4)
      e4 !== null && (e4 instanceof HTMLElement ? n6.push(e4) : "value" in e4 && e4.value instanceof HTMLElement && n6.push(e4.value));
    if (t6 != null && t6.value)
      for (let e4 of t6.value)
        n6.push(e4);
    for (let e4 of (i4 = l4 == null ? void 0 : l4.querySelectorAll("html > *, body > *")) != null ? i4 : [])
      e4 !== document.body && e4 !== document.head && e4 instanceof HTMLElement && e4.id !== "headlessui-portal-root" && (e4.contains(o2(o4)) || n6.some((f5) => e4.contains(f5)) || n6.push(e4));
    return n6;
  }
  return { resolveContainers: u6, contains(n6) {
    return u6().some((i4) => i4.contains(n6));
  }, mainTreeNodeRef: o4, MainTreeNode() {
    return h(f2, { features: a2.Hidden, ref: o4 });
  } };
}

// node_modules/@headlessui/vue/dist/components/dialog/dialog.js
var Oe = ((t6) => (t6[t6.Open = 0] = "Open", t6[t6.Closed = 1] = "Closed", t6))(Oe || {});
var F3 = Symbol("DialogContext");
function C2(o4) {
  let n6 = inject(F3, null);
  if (n6 === null) {
    let t6 = new Error(`<${o4} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t6, C2), t6;
  }
  return n6;
}
var M2 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
var Ue2 = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: M2 }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${t()}` } }, emits: { close: (o4) => true }, setup(o4, { emit: n6, attrs: t6, slots: u6, expose: i4 }) {
  var N5;
  let r4 = ref(false);
  onMounted(() => {
    r4.value = true;
  });
  let s3 = ref(0), p9 = p(), m5 = computed(() => o4.open === M2 && p9 !== null ? (p9.value & l.Open) === l.Open : o4.open), v4 = ref(null), T4 = computed(() => m(v4));
  if (i4({ el: v4, $el: v4 }), !(o4.open !== M2 || p9 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof m5.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m5.value === M2 ? void 0 : o4.open}`);
  let c5 = computed(() => r4.value && m5.value ? 0 : 1), R2 = computed(() => c5.value === 0), E6 = computed(() => s3.value > 1), $2 = inject(F3, null) !== null, [G2, V3] = V(), { resolveContainers: x4, mainTreeNodeRef: j6, MainTreeNode: W2 } = p7({ portals: G2, defaultContainers: [computed(() => {
    var e4;
    return (e4 = y3.panelRef.value) != null ? e4 : v4.value;
  })] }), J2 = computed(() => E6.value ? "parent" : "leaf"), H5 = computed(() => p9 !== null ? (p9.value & l.Closing) === l.Closing : false), Q4 = computed(() => $2 || H5.value ? false : R2.value), X2 = computed(() => {
    var e4, l4, f5;
    return (f5 = Array.from((l4 = (e4 = T4.value) == null ? void 0 : e4.querySelectorAll("body > *")) != null ? l4 : []).find((d8) => d8.id === "headlessui-portal-root" ? false : d8.contains(o2(j6)) && d8 instanceof HTMLElement)) != null ? f5 : null;
  });
  E3(X2, Q4);
  let Z2 = computed(() => E6.value ? true : R2.value), ee2 = computed(() => {
    var e4, l4, f5;
    return (f5 = Array.from((l4 = (e4 = T4.value) == null ? void 0 : e4.querySelectorAll("[data-headlessui-portal]")) != null ? l4 : []).find((d8) => d8.contains(o2(j6)) && d8 instanceof HTMLElement)) != null ? f5 : null;
  });
  E3(ee2, Z2), S3({ type: "Dialog", enabled: computed(() => c5.value === 0), element: v4, onUpdate: (e4, l4) => {
    if (l4 === "Dialog")
      return u(e4, { [p4.Add]: () => s3.value += 1, [p4.Remove]: () => s3.value -= 1 });
  } });
  let te2 = M({ name: "DialogDescription", slot: computed(() => ({ open: m5.value })) }), k2 = ref(null), y3 = { titleId: k2, panelRef: ref(null), dialogState: c5, setTitleId(e4) {
    k2.value !== e4 && (k2.value = e4);
  }, close() {
    n6("close", false);
  } };
  provide(F3, y3);
  let le3 = computed(() => !(!R2.value || E6.value));
  F2(x4, (e4, l4) => {
    y3.close(), nextTick(() => l4 == null ? void 0 : l4.focus());
  }, le3);
  let oe = computed(() => !(E6.value || c5.value !== 0));
  E2((N5 = T4.value) == null ? void 0 : N5.defaultView, "keydown", (e4) => {
    oe.value && (e4.defaultPrevented || e4.key === o.Escape && (e4.preventDefault(), e4.stopPropagation(), y3.close()));
  });
  let re3 = computed(() => !(H5.value || c5.value !== 0 || $2));
  return d4(T4, re3, (e4) => {
    var l4;
    return { containers: [...(l4 = e4.containers) != null ? l4 : [], x4] };
  }), watchEffect((e4) => {
    if (c5.value !== 0)
      return;
    let l4 = o2(v4);
    if (!l4)
      return;
    let f5 = new ResizeObserver((d8) => {
      for (let A4 of d8) {
        let D = A4.target.getBoundingClientRect();
        D.x === 0 && D.y === 0 && D.width === 0 && D.height === 0 && y3.close();
      }
    });
    f5.observe(l4), e4(() => f5.disconnect());
  }), () => {
    let { id: e4, open: l4, initialFocus: f5, ...d8 } = o4, A4 = { ...t6, ref: v4, id: e4, role: "dialog", "aria-modal": c5.value === 0 ? true : void 0, "aria-labelledby": k2.value, "aria-describedby": te2.value }, D = { open: c5.value === 0 };
    return h(P2, { force: true }, () => [h(U, () => h(_2, { target: v4.value }, () => h(P2, { force: false }, () => h(ce2, { initialFocus: f5, containers: x4, features: R2.value ? u(J2.value, { parent: ce2.features.RestoreFocus, leaf: ce2.features.All & ~ce2.features.FocusLock }) : ce2.features.None }, () => h(V3, {}, () => H({ ourProps: A4, theirProps: { ...d8, ...t6 }, slot: D, attrs: t6, slots: u6, visible: c5.value === 0, features: N.RenderStrategy | N.Static, name: "Dialog" })))))), h(W2)]);
  };
} });
var Ye = defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${t()}` } }, setup(o4, { attrs: n6, slots: t6 }) {
  let u6 = C2("DialogOverlay");
  function i4(r4) {
    r4.target === r4.currentTarget && (r4.preventDefault(), r4.stopPropagation(), u6.close());
  }
  return () => {
    let { id: r4, ...s3 } = o4;
    return H({ ourProps: { id: r4, "aria-hidden": true, onClick: i4 }, theirProps: s3, slot: { open: u6.dialogState.value === 0 }, attrs: n6, slots: t6, name: "DialogOverlay" });
  };
} });
var ze = defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${t()}` } }, inheritAttrs: false, setup(o4, { attrs: n6, slots: t6, expose: u6 }) {
  let i4 = C2("DialogBackdrop"), r4 = ref(null);
  return u6({ el: r4, $el: r4 }), onMounted(() => {
    if (i4.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s3, ...p9 } = o4, m5 = { id: s3, ref: r4, "aria-hidden": true };
    return h(P2, { force: true }, () => h(U, () => H({ ourProps: m5, theirProps: { ...n6, ...p9 }, slot: { open: i4.dialogState.value === 0 }, attrs: n6, slots: t6, name: "DialogBackdrop" })));
  };
} });
var Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${t()}` } }, setup(o4, { attrs: n6, slots: t6, expose: u6 }) {
  let i4 = C2("DialogPanel");
  u6({ el: i4.panelRef, $el: i4.panelRef });
  function r4(s3) {
    s3.stopPropagation();
  }
  return () => {
    let { id: s3, ...p9 } = o4, m5 = { id: s3, ref: i4.panelRef, onClick: r4 };
    return H({ ourProps: m5, theirProps: p9, slot: { open: i4.dialogState.value === 0 }, attrs: n6, slots: t6, name: "DialogPanel" });
  };
} });
var Ve = defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${t()}` } }, setup(o4, { attrs: n6, slots: t6 }) {
  let u6 = C2("DialogTitle");
  return onMounted(() => {
    u6.setTitleId(o4.id), onUnmounted(() => u6.setTitleId(null));
  }), () => {
    let { id: i4, ...r4 } = o4;
    return H({ ourProps: { id: i4 }, theirProps: r4, slot: { open: u6.dialogState.value === 0 }, attrs: n6, slots: t6, name: "DialogTitle" });
  };
} });
var We = E5;

// node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js
var j2 = ((o4) => (o4[o4.Open = 0] = "Open", o4[o4.Closed = 1] = "Closed", o4))(j2 || {});
var x3 = Symbol("DisclosureContext");
function g(t6) {
  let r4 = inject(x3, null);
  if (r4 === null) {
    let o4 = new Error(`<${t6} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, g), o4;
  }
  return r4;
}
var B2 = Symbol("DisclosurePanelContext");
function $() {
  return inject(B2, null);
}
var Q2 = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t6, { slots: r4, attrs: o4 }) {
  let u6 = ref(t6.defaultOpen ? 0 : 1), e4 = ref(null), i4 = ref(null), s3 = { buttonId: ref(null), panelId: ref(null), disclosureState: u6, panel: e4, button: i4, toggleDisclosure() {
    u6.value = u(u6.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    u6.value !== 1 && (u6.value = 1);
  }, close(l4) {
    s3.closeDisclosure();
    let a7 = (() => l4 ? l4 instanceof HTMLElement ? l4 : l4.value instanceof HTMLElement ? o2(l4) : o2(s3.button) : o2(s3.button))();
    a7 == null || a7.focus();
  } };
  return provide(x3, s3), c(computed(() => u(u6.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let { defaultOpen: l4, ...a7 } = t6, c5 = { open: u6.value === 0, close: s3.close };
    return H({ theirProps: a7, ourProps: {}, slot: c5, slots: r4, attrs: o4, name: "Disclosure" });
  };
} });
var V2 = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-disclosure-button-${t()}` } }, setup(t6, { attrs: r4, slots: o4, expose: u6 }) {
  let e4 = g("DisclosureButton");
  onMounted(() => {
    e4.buttonId.value = t6.id;
  }), onUnmounted(() => {
    e4.buttonId.value = null;
  });
  let i4 = $(), s3 = computed(() => i4 === null ? false : i4.value === e4.panelId.value), l4 = ref(null);
  u6({ el: l4, $el: l4 }), s3.value || watchEffect(() => {
    e4.button.value = l4.value;
  });
  let a7 = b2(computed(() => ({ as: t6.as, type: r4.type })), l4);
  function c5() {
    var n6;
    t6.disabled || (s3.value ? (e4.toggleDisclosure(), (n6 = o2(e4.button)) == null || n6.focus()) : e4.toggleDisclosure());
  }
  function D(n6) {
    var S5;
    if (!t6.disabled)
      if (s3.value)
        switch (n6.key) {
          case o.Space:
          case o.Enter:
            n6.preventDefault(), n6.stopPropagation(), e4.toggleDisclosure(), (S5 = o2(e4.button)) == null || S5.focus();
            break;
        }
      else
        switch (n6.key) {
          case o.Space:
          case o.Enter:
            n6.preventDefault(), n6.stopPropagation(), e4.toggleDisclosure();
            break;
        }
  }
  function T4(n6) {
    switch (n6.key) {
      case o.Space:
        n6.preventDefault();
        break;
    }
  }
  return () => {
    let n6 = { open: e4.disclosureState.value === 0 }, { id: S5, ...k2 } = t6, K3 = s3.value ? { ref: l4, type: a7.value, onClick: c5, onKeydown: D } : { id: S5, ref: l4, type: a7.value, "aria-expanded": t6.disabled ? void 0 : e4.disclosureState.value === 0, "aria-controls": o2(e4.panel) ? e4.panelId.value : void 0, disabled: t6.disabled ? true : void 0, onClick: c5, onKeydown: D, onKeyup: T4 };
    return H({ ourProps: K3, theirProps: k2, slot: n6, attrs: r4, slots: o4, name: "DisclosureButton" });
  };
} });
var X = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-disclosure-panel-${t()}` } }, setup(t6, { attrs: r4, slots: o4, expose: u6 }) {
  let e4 = g("DisclosurePanel");
  onMounted(() => {
    e4.panelId.value = t6.id;
  }), onUnmounted(() => {
    e4.panelId.value = null;
  }), u6({ el: e4.panel, $el: e4.panel }), provide(B2, e4.panelId);
  let i4 = p(), s3 = computed(() => i4 !== null ? (i4.value & l.Open) === l.Open : e4.disclosureState.value === 0);
  return () => {
    let l4 = { open: e4.disclosureState.value === 0, close: e4.close }, { id: a7, ...c5 } = t6, D = { id: a7, ref: e4.panel };
    return H({ ourProps: D, theirProps: c5, slot: l4, attrs: r4, slots: o4, features: N.RenderStrategy | N.Static, visible: s3.value, name: "DisclosurePanel" });
  };
} });

// node_modules/@headlessui/vue/dist/utils/get-text-value.js
var a5 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o3(e4) {
  var r4, i4;
  let n6 = (r4 = e4.innerText) != null ? r4 : "", t6 = e4.cloneNode(true);
  if (!(t6 instanceof HTMLElement))
    return n6;
  let u6 = false;
  for (let f5 of t6.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f5.remove(), u6 = true;
  let l4 = u6 ? (i4 = t6.innerText) != null ? i4 : "" : n6;
  return a5.test(l4) && (l4 = l4.replace(a5, "")), l4;
}
function g2(e4) {
  let n6 = e4.getAttribute("aria-label");
  if (typeof n6 == "string")
    return n6.trim();
  let t6 = e4.getAttribute("aria-labelledby");
  if (t6) {
    let u6 = t6.split(" ").map((l4) => {
      let r4 = document.getElementById(l4);
      if (r4) {
        let i4 = r4.getAttribute("aria-label");
        return typeof i4 == "string" ? i4.trim() : o3(r4).trim();
      }
      return null;
    }).filter(Boolean);
    if (u6.length > 0)
      return u6.join(", ");
  }
  return o3(e4).trim();
}

// node_modules/@headlessui/vue/dist/hooks/use-text-value.js
function p8(a7) {
  let t6 = ref(""), r4 = ref("");
  return () => {
    let e4 = o2(a7);
    if (!e4)
      return "";
    let l4 = e4.innerText;
    if (t6.value === l4)
      return r4.value;
    let u6 = g2(e4).trim().toLowerCase();
    return t6.value = l4, r4.value = u6, u6;
  };
}

// node_modules/@headlessui/vue/dist/components/listbox/listbox.js
function fe(t6, v4) {
  return t6 === v4;
}
var pe = ((u6) => (u6[u6.Open = 0] = "Open", u6[u6.Closed = 1] = "Closed", u6))(pe || {});
var ce3 = ((u6) => (u6[u6.Single = 0] = "Single", u6[u6.Multi = 1] = "Multi", u6))(ce3 || {});
var ve2 = ((u6) => (u6[u6.Pointer = 0] = "Pointer", u6[u6.Other = 1] = "Other", u6))(ve2 || {});
function be(t6) {
  requestAnimationFrame(() => requestAnimationFrame(t6));
}
var U2 = Symbol("ListboxContext");
function j3(t6) {
  let v4 = inject(U2, null);
  if (v4 === null) {
    let u6 = new Error(`<${t6} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u6, j3), u6;
  }
  return v4;
}
var Fe = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t6) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => fe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t6, { slots: v4, attrs: u6, emit: L4 }) {
  let e4 = ref(1), s3 = ref(null), b4 = ref(null), m5 = ref(null), f5 = ref([]), o4 = ref(""), a7 = ref(null), w3 = ref(1);
  function k2(i4 = (n6) => n6) {
    let n6 = a7.value !== null ? f5.value[a7.value] : null, l4 = O(i4(f5.value.slice()), (x4) => o2(x4.dataRef.domRef)), d8 = n6 ? l4.indexOf(n6) : null;
    return d8 === -1 && (d8 = null), { options: l4, activeOptionIndex: d8 };
  }
  let g5 = computed(() => t6.multiple ? 1 : 0), [y3, M3] = d2(computed(() => t6.modelValue === void 0 ? u(g5.value, { [1]: [], [0]: void 0 }) : t6.modelValue), (i4) => L4("update:modelValue", i4), computed(() => t6.defaultValue)), h4 = { listboxState: e4, value: y3, mode: g5, compare(i4, n6) {
    if (typeof t6.by == "string") {
      let l4 = t6.by;
      return (i4 == null ? void 0 : i4[l4]) === (n6 == null ? void 0 : n6[l4]);
    }
    return t6.by(i4, n6);
  }, orientation: computed(() => t6.horizontal ? "horizontal" : "vertical"), labelRef: s3, buttonRef: b4, optionsRef: m5, disabled: computed(() => t6.disabled), options: f5, searchQuery: o4, activeOptionIndex: a7, activationTrigger: w3, closeListbox() {
    t6.disabled || e4.value !== 1 && (e4.value = 1, a7.value = null);
  }, openListbox() {
    t6.disabled || e4.value !== 0 && (e4.value = 0);
  }, goToOption(i4, n6, l4) {
    if (t6.disabled || e4.value === 1)
      return;
    let d8 = k2(), x4 = x(i4 === a.Specific ? { focus: a.Specific, id: n6 } : { focus: i4 }, { resolveItems: () => d8.options, resolveActiveIndex: () => d8.activeOptionIndex, resolveId: (R2) => R2.id, resolveDisabled: (R2) => R2.dataRef.disabled });
    o4.value = "", a7.value = x4, w3.value = l4 != null ? l4 : 1, f5.value = d8.options;
  }, search(i4) {
    if (t6.disabled || e4.value === 1)
      return;
    let l4 = o4.value !== "" ? 0 : 1;
    o4.value += i4.toLowerCase();
    let x4 = (a7.value !== null ? f5.value.slice(a7.value + l4).concat(f5.value.slice(0, a7.value + l4)) : f5.value).find((V3) => V3.dataRef.textValue.startsWith(o4.value) && !V3.dataRef.disabled), R2 = x4 ? f5.value.indexOf(x4) : -1;
    R2 === -1 || R2 === a7.value || (a7.value = R2, w3.value = 1);
  }, clearSearch() {
    t6.disabled || e4.value !== 1 && o4.value !== "" && (o4.value = "");
  }, registerOption(i4, n6) {
    let l4 = k2((d8) => [...d8, { id: i4, dataRef: n6 }]);
    f5.value = l4.options, a7.value = l4.activeOptionIndex;
  }, unregisterOption(i4) {
    let n6 = k2((l4) => {
      let d8 = l4.findIndex((x4) => x4.id === i4);
      return d8 !== -1 && l4.splice(d8, 1), l4;
    });
    f5.value = n6.options, a7.value = n6.activeOptionIndex, w3.value = 1;
  }, select(i4) {
    t6.disabled || M3(u(g5.value, { [0]: () => i4, [1]: () => {
      let n6 = toRaw(h4.value.value).slice(), l4 = toRaw(i4), d8 = n6.findIndex((x4) => h4.compare(l4, toRaw(x4)));
      return d8 === -1 ? n6.push(l4) : n6.splice(d8, 1), n6;
    } }));
  } };
  F2([b4, m5], (i4, n6) => {
    var l4;
    h4.closeListbox(), w(n6, h2.Loose) || (i4.preventDefault(), (l4 = o2(b4)) == null || l4.focus());
  }, computed(() => e4.value === 0)), provide(U2, h4), c(computed(() => u(e4.value, { [0]: l.Open, [1]: l.Closed })));
  let r4 = computed(() => {
    var i4;
    return (i4 = o2(b4)) == null ? void 0 : i4.closest("form");
  });
  return onMounted(() => {
    watch([r4], () => {
      if (!r4.value || t6.defaultValue === void 0)
        return;
      function i4() {
        h4.select(t6.defaultValue);
      }
      return r4.value.addEventListener("reset", i4), () => {
        var n6;
        (n6 = r4.value) == null || n6.removeEventListener("reset", i4);
      };
    }, { immediate: true });
  }), () => {
    let { name: i4, modelValue: n6, disabled: l4, form: d8, ...x4 } = t6, R2 = { open: e4.value === 0, disabled: l4, value: y3.value };
    return h(Fragment, [...i4 != null && y3.value != null ? e2({ [i4]: y3.value }).map(([V3, $2]) => h(f2, K({ features: a2.Hidden, key: V3, as: "input", type: "hidden", hidden: true, readOnly: true, form: d8, name: V3, value: $2 }))) : [], H({ ourProps: {}, theirProps: { ...u6, ...T(x4, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: R2, slots: v4, attrs: u6, name: "Listbox" })]);
  };
} });
var Be = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${t()}` } }, setup(t6, { attrs: v4, slots: u6 }) {
  let L4 = j3("ListboxLabel");
  function e4() {
    var s3;
    (s3 = o2(L4.buttonRef)) == null || s3.focus({ preventScroll: true });
  }
  return () => {
    let s3 = { open: L4.listboxState.value === 0, disabled: L4.disabled.value }, { id: b4, ...m5 } = t6, f5 = { id: b4, ref: L4.labelRef, onClick: e4 };
    return H({ ourProps: f5, theirProps: m5, slot: s3, attrs: v4, slots: u6, name: "ListboxLabel" });
  };
} });
var Ke2 = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${t()}` } }, setup(t6, { attrs: v4, slots: u6, expose: L4 }) {
  let e4 = j3("ListboxButton");
  L4({ el: e4.buttonRef, $el: e4.buttonRef });
  function s3(o4) {
    switch (o4.key) {
      case o.Space:
      case o.Enter:
      case o.ArrowDown:
        o4.preventDefault(), e4.openListbox(), nextTick(() => {
          var a7;
          (a7 = o2(e4.optionsRef)) == null || a7.focus({ preventScroll: true }), e4.value.value || e4.goToOption(a.First);
        });
        break;
      case o.ArrowUp:
        o4.preventDefault(), e4.openListbox(), nextTick(() => {
          var a7;
          (a7 = o2(e4.optionsRef)) == null || a7.focus({ preventScroll: true }), e4.value.value || e4.goToOption(a.Last);
        });
        break;
    }
  }
  function b4(o4) {
    switch (o4.key) {
      case o.Space:
        o4.preventDefault();
        break;
    }
  }
  function m5(o4) {
    e4.disabled.value || (e4.listboxState.value === 0 ? (e4.closeListbox(), nextTick(() => {
      var a7;
      return (a7 = o2(e4.buttonRef)) == null ? void 0 : a7.focus({ preventScroll: true });
    })) : (o4.preventDefault(), e4.openListbox(), be(() => {
      var a7;
      return (a7 = o2(e4.optionsRef)) == null ? void 0 : a7.focus({ preventScroll: true });
    })));
  }
  let f5 = b2(computed(() => ({ as: t6.as, type: v4.type })), e4.buttonRef);
  return () => {
    var g5, y3;
    let o4 = { open: e4.listboxState.value === 0, disabled: e4.disabled.value, value: e4.value.value }, { id: a7, ...w3 } = t6, k2 = { ref: e4.buttonRef, id: a7, type: f5.value, "aria-haspopup": "listbox", "aria-controls": (g5 = o2(e4.optionsRef)) == null ? void 0 : g5.id, "aria-expanded": e4.disabled.value ? void 0 : e4.listboxState.value === 0, "aria-labelledby": e4.labelRef.value ? [(y3 = o2(e4.labelRef)) == null ? void 0 : y3.id, a7].join(" ") : void 0, disabled: e4.disabled.value === true ? true : void 0, onKeydown: s3, onKeyup: b4, onClick: m5 };
    return H({ ourProps: k2, theirProps: w3, slot: o4, attrs: v4, slots: u6, name: "ListboxButton" });
  };
} });
var Ne = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-listbox-options-${t()}` } }, setup(t6, { attrs: v4, slots: u6, expose: L4 }) {
  let e4 = j3("ListboxOptions"), s3 = ref(null);
  L4({ el: e4.optionsRef, $el: e4.optionsRef });
  function b4(o4) {
    switch (s3.value && clearTimeout(s3.value), o4.key) {
      case o.Space:
        if (e4.searchQuery.value !== "")
          return o4.preventDefault(), o4.stopPropagation(), e4.search(o4.key);
      case o.Enter:
        if (o4.preventDefault(), o4.stopPropagation(), e4.activeOptionIndex.value !== null) {
          let a7 = e4.options.value[e4.activeOptionIndex.value];
          e4.select(a7.dataRef.value);
        }
        e4.mode.value === 0 && (e4.closeListbox(), nextTick(() => {
          var a7;
          return (a7 = o2(e4.buttonRef)) == null ? void 0 : a7.focus({ preventScroll: true });
        }));
        break;
      case u(e4.orientation.value, { vertical: o.ArrowDown, horizontal: o.ArrowRight }):
        return o4.preventDefault(), o4.stopPropagation(), e4.goToOption(a.Next);
      case u(e4.orientation.value, { vertical: o.ArrowUp, horizontal: o.ArrowLeft }):
        return o4.preventDefault(), o4.stopPropagation(), e4.goToOption(a.Previous);
      case o.Home:
      case o.PageUp:
        return o4.preventDefault(), o4.stopPropagation(), e4.goToOption(a.First);
      case o.End:
      case o.PageDown:
        return o4.preventDefault(), o4.stopPropagation(), e4.goToOption(a.Last);
      case o.Escape:
        o4.preventDefault(), o4.stopPropagation(), e4.closeListbox(), nextTick(() => {
          var a7;
          return (a7 = o2(e4.buttonRef)) == null ? void 0 : a7.focus({ preventScroll: true });
        });
        break;
      case o.Tab:
        o4.preventDefault(), o4.stopPropagation();
        break;
      default:
        o4.key.length === 1 && (e4.search(o4.key), s3.value = setTimeout(() => e4.clearSearch(), 350));
        break;
    }
  }
  let m5 = p(), f5 = computed(() => m5 !== null ? (m5.value & l.Open) === l.Open : e4.listboxState.value === 0);
  return () => {
    var g5, y3, M3, h4;
    let o4 = { open: e4.listboxState.value === 0 }, { id: a7, ...w3 } = t6, k2 = { "aria-activedescendant": e4.activeOptionIndex.value === null || (g5 = e4.options.value[e4.activeOptionIndex.value]) == null ? void 0 : g5.id, "aria-multiselectable": e4.mode.value === 1 ? true : void 0, "aria-labelledby": (h4 = (y3 = o2(e4.labelRef)) == null ? void 0 : y3.id) != null ? h4 : (M3 = o2(e4.buttonRef)) == null ? void 0 : M3.id, "aria-orientation": e4.orientation.value, id: a7, onKeydown: b4, role: "listbox", tabIndex: 0, ref: e4.optionsRef };
    return H({ ourProps: k2, theirProps: w3, slot: o4, attrs: v4, slots: u6, features: N.RenderStrategy | N.Static, visible: f5.value, name: "ListboxOptions" });
  };
} });
var He = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-listbox.option-${t()}` } }, setup(t6, { slots: v4, attrs: u6, expose: L4 }) {
  let e4 = j3("ListboxOption"), s3 = ref(null);
  L4({ el: s3, $el: s3 });
  let b4 = computed(() => e4.activeOptionIndex.value !== null ? e4.options.value[e4.activeOptionIndex.value].id === t6.id : false), m5 = computed(() => u(e4.mode.value, { [0]: () => e4.compare(toRaw(e4.value.value), toRaw(t6.value)), [1]: () => toRaw(e4.value.value).some((r4) => e4.compare(toRaw(r4), toRaw(t6.value))) })), f5 = computed(() => u(e4.mode.value, { [1]: () => {
    var i4;
    let r4 = toRaw(e4.value.value);
    return ((i4 = e4.options.value.find((n6) => r4.some((l4) => e4.compare(toRaw(l4), toRaw(n6.dataRef.value))))) == null ? void 0 : i4.id) === t6.id;
  }, [0]: () => m5.value })), o4 = p8(s3), a7 = computed(() => ({ disabled: t6.disabled, value: t6.value, get textValue() {
    return o4();
  }, domRef: s3 }));
  onMounted(() => e4.registerOption(t6.id, a7)), onUnmounted(() => e4.unregisterOption(t6.id)), onMounted(() => {
    watch([e4.listboxState, m5], () => {
      e4.listboxState.value === 0 && m5.value && u(e4.mode.value, { [1]: () => {
        f5.value && e4.goToOption(a.Specific, t6.id);
      }, [0]: () => {
        e4.goToOption(a.Specific, t6.id);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e4.listboxState.value === 0 && b4.value && e4.activationTrigger.value !== 0 && nextTick(() => {
      var r4, i4;
      return (i4 = (r4 = o2(s3)) == null ? void 0 : r4.scrollIntoView) == null ? void 0 : i4.call(r4, { block: "nearest" });
    });
  });
  function w3(r4) {
    if (t6.disabled)
      return r4.preventDefault();
    e4.select(t6.value), e4.mode.value === 0 && (e4.closeListbox(), nextTick(() => {
      var i4;
      return (i4 = o2(e4.buttonRef)) == null ? void 0 : i4.focus({ preventScroll: true });
    }));
  }
  function k2() {
    if (t6.disabled)
      return e4.goToOption(a.Nothing);
    e4.goToOption(a.Specific, t6.id);
  }
  let g5 = u3();
  function y3(r4) {
    g5.update(r4);
  }
  function M3(r4) {
    g5.wasMoved(r4) && (t6.disabled || b4.value || e4.goToOption(a.Specific, t6.id, 0));
  }
  function h4(r4) {
    g5.wasMoved(r4) && (t6.disabled || b4.value && e4.goToOption(a.Nothing));
  }
  return () => {
    let { disabled: r4 } = t6, i4 = { active: b4.value, selected: m5.value, disabled: r4 }, { id: n6, value: l4, disabled: d8, ...x4 } = t6, R2 = { id: n6, ref: s3, role: "option", tabIndex: r4 === true ? void 0 : -1, "aria-disabled": r4 === true ? true : void 0, "aria-selected": m5.value, disabled: void 0, onClick: w3, onFocus: k2, onPointerenter: y3, onMouseenter: y3, onPointermove: M3, onMousemove: M3, onPointerleave: h4, onMouseleave: h4 };
    return H({ ourProps: R2, theirProps: x4, slot: i4, attrs: u6, slots: v4, name: "ListboxOption" });
  };
} });

// node_modules/@headlessui/vue/dist/components/menu/menu.js
var Y = ((l4) => (l4[l4.Open = 0] = "Open", l4[l4.Closed = 1] = "Closed", l4))(Y || {});
var Z = ((l4) => (l4[l4.Pointer = 0] = "Pointer", l4[l4.Other = 1] = "Other", l4))(Z || {});
function ee(a7) {
  requestAnimationFrame(() => requestAnimationFrame(a7));
}
var A2 = Symbol("MenuContext");
function O2(a7) {
  let b4 = inject(A2, null);
  if (b4 === null) {
    let l4 = new Error(`<${a7} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l4, O2), l4;
  }
  return b4;
}
var Me = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(a7, { slots: b4, attrs: l4 }) {
  let I2 = ref(1), e4 = ref(null), f5 = ref(null), s3 = ref([]), g5 = ref(""), d8 = ref(null), o4 = ref(1);
  function t6(u6 = (i4) => i4) {
    let i4 = d8.value !== null ? s3.value[d8.value] : null, r4 = O(u6(s3.value.slice()), (v4) => o2(v4.dataRef.domRef)), n6 = i4 ? r4.indexOf(i4) : null;
    return n6 === -1 && (n6 = null), { items: r4, activeItemIndex: n6 };
  }
  let p9 = { menuState: I2, buttonRef: e4, itemsRef: f5, items: s3, searchQuery: g5, activeItemIndex: d8, activationTrigger: o4, closeMenu: () => {
    I2.value = 1, d8.value = null;
  }, openMenu: () => I2.value = 0, goToItem(u6, i4, r4) {
    let n6 = t6(), v4 = x(u6 === a.Specific ? { focus: a.Specific, id: i4 } : { focus: u6 }, { resolveItems: () => n6.items, resolveActiveIndex: () => n6.activeItemIndex, resolveId: (M3) => M3.id, resolveDisabled: (M3) => M3.dataRef.disabled });
    g5.value = "", d8.value = v4, o4.value = r4 != null ? r4 : 1, s3.value = n6.items;
  }, search(u6) {
    let r4 = g5.value !== "" ? 0 : 1;
    g5.value += u6.toLowerCase();
    let v4 = (d8.value !== null ? s3.value.slice(d8.value + r4).concat(s3.value.slice(0, d8.value + r4)) : s3.value).find((x4) => x4.dataRef.textValue.startsWith(g5.value) && !x4.dataRef.disabled), M3 = v4 ? s3.value.indexOf(v4) : -1;
    M3 === -1 || M3 === d8.value || (d8.value = M3, o4.value = 1);
  }, clearSearch() {
    g5.value = "";
  }, registerItem(u6, i4) {
    let r4 = t6((n6) => [...n6, { id: u6, dataRef: i4 }]);
    s3.value = r4.items, d8.value = r4.activeItemIndex, o4.value = 1;
  }, unregisterItem(u6) {
    let i4 = t6((r4) => {
      let n6 = r4.findIndex((v4) => v4.id === u6);
      return n6 !== -1 && r4.splice(n6, 1), r4;
    });
    s3.value = i4.items, d8.value = i4.activeItemIndex, o4.value = 1;
  } };
  return F2([e4, f5], (u6, i4) => {
    var r4;
    p9.closeMenu(), w(i4, h2.Loose) || (u6.preventDefault(), (r4 = o2(e4)) == null || r4.focus());
  }, computed(() => I2.value === 0)), provide(A2, p9), c(computed(() => u(I2.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let u6 = { open: I2.value === 0, close: p9.closeMenu };
    return H({ ourProps: {}, theirProps: a7, slot: u6, slots: b4, attrs: l4, name: "Menu" });
  };
} });
var Re = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${t()}` } }, setup(a7, { attrs: b4, slots: l4, expose: I2 }) {
  let e4 = O2("MenuButton");
  I2({ el: e4.buttonRef, $el: e4.buttonRef });
  function f5(o4) {
    switch (o4.key) {
      case o.Space:
      case o.Enter:
      case o.ArrowDown:
        o4.preventDefault(), o4.stopPropagation(), e4.openMenu(), nextTick(() => {
          var t6;
          (t6 = o2(e4.itemsRef)) == null || t6.focus({ preventScroll: true }), e4.goToItem(a.First);
        });
        break;
      case o.ArrowUp:
        o4.preventDefault(), o4.stopPropagation(), e4.openMenu(), nextTick(() => {
          var t6;
          (t6 = o2(e4.itemsRef)) == null || t6.focus({ preventScroll: true }), e4.goToItem(a.Last);
        });
        break;
    }
  }
  function s3(o4) {
    switch (o4.key) {
      case o.Space:
        o4.preventDefault();
        break;
    }
  }
  function g5(o4) {
    a7.disabled || (e4.menuState.value === 0 ? (e4.closeMenu(), nextTick(() => {
      var t6;
      return (t6 = o2(e4.buttonRef)) == null ? void 0 : t6.focus({ preventScroll: true });
    })) : (o4.preventDefault(), e4.openMenu(), ee(() => {
      var t6;
      return (t6 = o2(e4.itemsRef)) == null ? void 0 : t6.focus({ preventScroll: true });
    })));
  }
  let d8 = b2(computed(() => ({ as: a7.as, type: b4.type })), e4.buttonRef);
  return () => {
    var i4;
    let o4 = { open: e4.menuState.value === 0 }, { id: t6, ...p9 } = a7, u6 = { ref: e4.buttonRef, id: t6, type: d8.value, "aria-haspopup": "menu", "aria-controls": (i4 = o2(e4.itemsRef)) == null ? void 0 : i4.id, "aria-expanded": a7.disabled ? void 0 : e4.menuState.value === 0, onKeydown: f5, onKeyup: s3, onClick: g5 };
    return H({ ourProps: u6, theirProps: p9, slot: o4, attrs: b4, slots: l4, name: "MenuButton" });
  };
} });
var he = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-menu-items-${t()}` } }, setup(a7, { attrs: b4, slots: l4, expose: I2 }) {
  let e4 = O2("MenuItems"), f5 = ref(null);
  I2({ el: e4.itemsRef, $el: e4.itemsRef }), p2({ container: computed(() => o2(e4.itemsRef)), enabled: computed(() => e4.menuState.value === 0), accept(t6) {
    return t6.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t6) {
    t6.setAttribute("role", "none");
  } });
  function s3(t6) {
    var p9;
    switch (f5.value && clearTimeout(f5.value), t6.key) {
      case o.Space:
        if (e4.searchQuery.value !== "")
          return t6.preventDefault(), t6.stopPropagation(), e4.search(t6.key);
      case o.Enter:
        if (t6.preventDefault(), t6.stopPropagation(), e4.activeItemIndex.value !== null) {
          let i4 = e4.items.value[e4.activeItemIndex.value];
          (p9 = o2(i4.dataRef.domRef)) == null || p9.click();
        }
        e4.closeMenu(), _(o2(e4.buttonRef));
        break;
      case o.ArrowDown:
        return t6.preventDefault(), t6.stopPropagation(), e4.goToItem(a.Next);
      case o.ArrowUp:
        return t6.preventDefault(), t6.stopPropagation(), e4.goToItem(a.Previous);
      case o.Home:
      case o.PageUp:
        return t6.preventDefault(), t6.stopPropagation(), e4.goToItem(a.First);
      case o.End:
      case o.PageDown:
        return t6.preventDefault(), t6.stopPropagation(), e4.goToItem(a.Last);
      case o.Escape:
        t6.preventDefault(), t6.stopPropagation(), e4.closeMenu(), nextTick(() => {
          var u6;
          return (u6 = o2(e4.buttonRef)) == null ? void 0 : u6.focus({ preventScroll: true });
        });
        break;
      case o.Tab:
        t6.preventDefault(), t6.stopPropagation(), e4.closeMenu(), nextTick(() => v2(o2(e4.buttonRef), t6.shiftKey ? N2.Previous : N2.Next));
        break;
      default:
        t6.key.length === 1 && (e4.search(t6.key), f5.value = setTimeout(() => e4.clearSearch(), 350));
        break;
    }
  }
  function g5(t6) {
    switch (t6.key) {
      case o.Space:
        t6.preventDefault();
        break;
    }
  }
  let d8 = p(), o4 = computed(() => d8 !== null ? (d8.value & l.Open) === l.Open : e4.menuState.value === 0);
  return () => {
    var r4, n6;
    let t6 = { open: e4.menuState.value === 0 }, { id: p9, ...u6 } = a7, i4 = { "aria-activedescendant": e4.activeItemIndex.value === null || (r4 = e4.items.value[e4.activeItemIndex.value]) == null ? void 0 : r4.id, "aria-labelledby": (n6 = o2(e4.buttonRef)) == null ? void 0 : n6.id, id: p9, onKeydown: s3, onKeyup: g5, role: "menu", tabIndex: 0, ref: e4.itemsRef };
    return H({ ourProps: i4, theirProps: u6, slot: t6, attrs: b4, slots: l4, features: N.RenderStrategy | N.Static, visible: o4.value, name: "MenuItems" });
  };
} });
var ye = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-menu-item-${t()}` } }, setup(a7, { slots: b4, attrs: l4, expose: I2 }) {
  let e4 = O2("MenuItem"), f5 = ref(null);
  I2({ el: f5, $el: f5 });
  let s3 = computed(() => e4.activeItemIndex.value !== null ? e4.items.value[e4.activeItemIndex.value].id === a7.id : false), g5 = p8(f5), d8 = computed(() => ({ disabled: a7.disabled, get textValue() {
    return g5();
  }, domRef: f5 }));
  onMounted(() => e4.registerItem(a7.id, d8)), onUnmounted(() => e4.unregisterItem(a7.id)), watchEffect(() => {
    e4.menuState.value === 0 && s3.value && e4.activationTrigger.value !== 0 && nextTick(() => {
      var n6, v4;
      return (v4 = (n6 = o2(f5)) == null ? void 0 : n6.scrollIntoView) == null ? void 0 : v4.call(n6, { block: "nearest" });
    });
  });
  function o4(n6) {
    if (a7.disabled)
      return n6.preventDefault();
    e4.closeMenu(), _(o2(e4.buttonRef));
  }
  function t6() {
    if (a7.disabled)
      return e4.goToItem(a.Nothing);
    e4.goToItem(a.Specific, a7.id);
  }
  let p9 = u3();
  function u6(n6) {
    p9.update(n6);
  }
  function i4(n6) {
    p9.wasMoved(n6) && (a7.disabled || s3.value || e4.goToItem(a.Specific, a7.id, 0));
  }
  function r4(n6) {
    p9.wasMoved(n6) && (a7.disabled || s3.value && e4.goToItem(a.Nothing));
  }
  return () => {
    let { disabled: n6 } = a7, v4 = { active: s3.value, disabled: n6, close: e4.closeMenu }, { id: M3, ...x4 } = a7;
    return H({ ourProps: { id: M3, ref: f5, role: "menuitem", tabIndex: n6 === true ? void 0 : -1, "aria-disabled": n6 === true ? true : void 0, disabled: void 0, onClick: o4, onFocus: t6, onPointerenter: u6, onMouseenter: u6, onPointermove: i4, onMousemove: i4, onPointerleave: r4, onMouseleave: r4 }, theirProps: { ...l4, ...x4 }, slot: v4, attrs: l4, slots: b4, name: "MenuItem" });
  };
} });

// node_modules/@headlessui/vue/dist/components/popover/popover.js
var be2 = ((p9) => (p9[p9.Open = 0] = "Open", p9[p9.Closed = 1] = "Closed", p9))(be2 || {});
var re = Symbol("PopoverContext");
function A3(d8) {
  let S5 = inject(re, null);
  if (S5 === null) {
    let p9 = new Error(`<${d8} /> is missing a parent <${ge.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(p9, A3), p9;
  }
  return S5;
}
var le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
var ue = Symbol("PopoverPanelContext");
function Se() {
  return inject(ue, null);
}
var ge = defineComponent({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(d8, { slots: S5, attrs: p9, expose: h4 }) {
  var v4;
  let t6 = ref(null);
  h4({ el: t6, $el: t6 });
  let e4 = ref(1), c5 = ref(null), P3 = ref(null), F5 = ref(null), f5 = ref(null), g5 = computed(() => m(t6)), m5 = computed(() => {
    var X2, Y2;
    if (!o2(c5) || !o2(f5))
      return false;
    for (let k2 of document.querySelectorAll("body > *"))
      if (Number(k2 == null ? void 0 : k2.contains(o2(c5))) ^ Number(k2 == null ? void 0 : k2.contains(o2(f5))))
        return true;
    let o4 = E(), l4 = o4.indexOf(o2(c5)), b4 = (l4 + o4.length - 1) % o4.length, E6 = (l4 + 1) % o4.length, K3 = o4[b4], j6 = o4[E6];
    return !((X2 = o2(f5)) != null && X2.contains(K3)) && !((Y2 = o2(f5)) != null && Y2.contains(j6));
  }), a7 = { popoverState: e4, buttonId: ref(null), panelId: ref(null), panel: f5, button: c5, isPortalled: m5, beforePanelSentinel: P3, afterPanelSentinel: F5, togglePopover() {
    e4.value = u(e4.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    e4.value !== 1 && (e4.value = 1);
  }, close(o4) {
    a7.closePopover();
    let l4 = (() => o4 ? o4 instanceof HTMLElement ? o4 : o4.value instanceof HTMLElement ? o2(o4) : o2(a7.button) : o2(a7.button))();
    l4 == null || l4.focus();
  } };
  provide(re, a7), c(computed(() => u(e4.value, { [0]: l.Open, [1]: l.Closed })));
  let w3 = { buttonId: a7.buttonId, panelId: a7.panelId, close() {
    a7.closePopover();
  } }, y3 = ae(), O3 = y3 == null ? void 0 : y3.registerPopover, [u6, i4] = V(), s3 = p7({ portals: u6, defaultContainers: [c5, f5] });
  function n6() {
    var o4, l4, b4, E6;
    return (E6 = y3 == null ? void 0 : y3.isFocusWithinPopoverGroup()) != null ? E6 : ((o4 = g5.value) == null ? void 0 : o4.activeElement) && (((l4 = o2(c5)) == null ? void 0 : l4.contains(g5.value.activeElement)) || ((b4 = o2(f5)) == null ? void 0 : b4.contains(g5.value.activeElement)));
  }
  return watchEffect(() => O3 == null ? void 0 : O3(w3)), E2((v4 = g5.value) == null ? void 0 : v4.defaultView, "focus", (o4) => {
    var l4, b4;
    o4.target !== window && o4.target instanceof HTMLElement && e4.value === 0 && (n6() || c5 && f5 && (s3.contains(o4.target) || (l4 = o2(a7.beforePanelSentinel)) != null && l4.contains(o4.target) || (b4 = o2(a7.afterPanelSentinel)) != null && b4.contains(o4.target) || a7.closePopover()));
  }, true), F2(s3.resolveContainers, (o4, l4) => {
    var b4;
    a7.closePopover(), w(l4, h2.Loose) || (o4.preventDefault(), (b4 = o2(c5)) == null || b4.focus());
  }, computed(() => e4.value === 0)), () => {
    let o4 = { open: e4.value === 0, close: a7.close };
    return h(i4, {}, () => H({ theirProps: { ...d8, ...p9 }, ourProps: { ref: t6 }, slot: o4, slots: S5, attrs: p9, name: "Popover" }));
  };
} });
var je = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-popover-button-${t()}` } }, inheritAttrs: false, setup(d8, { attrs: S5, slots: p9, expose: h4 }) {
  let t6 = A3("PopoverButton"), e4 = computed(() => m(t6.button));
  h4({ el: t6.button, $el: t6.button }), onMounted(() => {
    t6.buttonId.value = d8.id;
  }), onUnmounted(() => {
    t6.buttonId.value = null;
  });
  let c5 = ae(), P3 = c5 == null ? void 0 : c5.closeOthers, F5 = Se(), f5 = computed(() => F5 === null ? false : F5.value === t6.panelId.value), g5 = ref(null), m5 = `headlessui-focus-sentinel-${t()}`;
  f5.value || watchEffect(() => {
    t6.button.value = g5.value;
  });
  let a7 = b2(computed(() => ({ as: d8.as, type: S5.type })), g5);
  function w3(n6) {
    var v4, o4, l4, b4, E6;
    if (f5.value) {
      if (t6.popoverState.value === 1)
        return;
      switch (n6.key) {
        case o.Space:
        case o.Enter:
          n6.preventDefault(), (o4 = (v4 = n6.target).click) == null || o4.call(v4), t6.closePopover(), (l4 = o2(t6.button)) == null || l4.focus();
          break;
      }
    } else
      switch (n6.key) {
        case o.Space:
        case o.Enter:
          n6.preventDefault(), n6.stopPropagation(), t6.popoverState.value === 1 && (P3 == null || P3(t6.buttonId.value)), t6.togglePopover();
          break;
        case o.Escape:
          if (t6.popoverState.value !== 0)
            return P3 == null ? void 0 : P3(t6.buttonId.value);
          if (!o2(t6.button) || (b4 = e4.value) != null && b4.activeElement && !((E6 = o2(t6.button)) != null && E6.contains(e4.value.activeElement)))
            return;
          n6.preventDefault(), n6.stopPropagation(), t6.closePopover();
          break;
      }
  }
  function y3(n6) {
    f5.value || n6.key === o.Space && n6.preventDefault();
  }
  function O3(n6) {
    var v4, o4;
    d8.disabled || (f5.value ? (t6.closePopover(), (v4 = o2(t6.button)) == null || v4.focus()) : (n6.preventDefault(), n6.stopPropagation(), t6.popoverState.value === 1 && (P3 == null || P3(t6.buttonId.value)), t6.togglePopover(), (o4 = o2(t6.button)) == null || o4.focus()));
  }
  function u6(n6) {
    n6.preventDefault(), n6.stopPropagation();
  }
  let i4 = n5();
  function s3() {
    let n6 = o2(t6.panel);
    if (!n6)
      return;
    function v4() {
      u(i4.value, { [d3.Forwards]: () => P(n6, N2.First), [d3.Backwards]: () => P(n6, N2.Last) }) === T2.Error && P(E().filter((l4) => l4.dataset.headlessuiFocusGuard !== "true"), u(i4.value, { [d3.Forwards]: N2.Next, [d3.Backwards]: N2.Previous }), { relativeTo: o2(t6.button) });
    }
    v4();
  }
  return () => {
    let n6 = t6.popoverState.value === 0, v4 = { open: n6 }, { id: o4, ...l4 } = d8, b4 = f5.value ? { ref: g5, type: a7.value, onKeydown: w3, onClick: O3 } : { ref: g5, id: o4, type: a7.value, "aria-expanded": d8.disabled ? void 0 : t6.popoverState.value === 0, "aria-controls": o2(t6.panel) ? t6.panelId.value : void 0, disabled: d8.disabled ? true : void 0, onKeydown: w3, onKeyup: y3, onClick: O3, onMousedown: u6 };
    return h(Fragment, [H({ ourProps: b4, theirProps: { ...S5, ...l4 }, slot: v4, attrs: S5, slots: p9, name: "PopoverButton" }), n6 && !f5.value && t6.isPortalled.value && h(f2, { id: m5, features: a2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: s3 })]);
  };
} });
var Ne2 = defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(d8, { attrs: S5, slots: p9 }) {
  let h4 = A3("PopoverOverlay"), t6 = `headlessui-popover-overlay-${t()}`, e4 = p(), c5 = computed(() => e4 !== null ? (e4.value & l.Open) === l.Open : h4.popoverState.value === 0);
  function P3() {
    h4.closePopover();
  }
  return () => {
    let F5 = { open: h4.popoverState.value === 0 };
    return H({ ourProps: { id: t6, "aria-hidden": true, onClick: P3 }, theirProps: d8, slot: F5, attrs: S5, slots: p9, features: N.RenderStrategy | N.Static, visible: c5.value, name: "PopoverOverlay" });
  };
} });
var We2 = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-popover-panel-${t()}` } }, inheritAttrs: false, setup(d8, { attrs: S5, slots: p9, expose: h4 }) {
  let { focus: t6 } = d8, e4 = A3("PopoverPanel"), c5 = computed(() => m(e4.panel)), P3 = `headlessui-focus-sentinel-before-${t()}`, F5 = `headlessui-focus-sentinel-after-${t()}`;
  h4({ el: e4.panel, $el: e4.panel }), onMounted(() => {
    e4.panelId.value = d8.id;
  }), onUnmounted(() => {
    e4.panelId.value = null;
  }), provide(ue, e4.panelId), watchEffect(() => {
    var i4, s3;
    if (!t6 || e4.popoverState.value !== 0 || !e4.panel)
      return;
    let u6 = (i4 = c5.value) == null ? void 0 : i4.activeElement;
    (s3 = o2(e4.panel)) != null && s3.contains(u6) || P(o2(e4.panel), N2.First);
  });
  let f5 = p(), g5 = computed(() => f5 !== null ? (f5.value & l.Open) === l.Open : e4.popoverState.value === 0);
  function m5(u6) {
    var i4, s3;
    switch (u6.key) {
      case o.Escape:
        if (e4.popoverState.value !== 0 || !o2(e4.panel) || c5.value && !((i4 = o2(e4.panel)) != null && i4.contains(c5.value.activeElement)))
          return;
        u6.preventDefault(), u6.stopPropagation(), e4.closePopover(), (s3 = o2(e4.button)) == null || s3.focus();
        break;
    }
  }
  function a7(u6) {
    var s3, n6, v4, o4, l4;
    let i4 = u6.relatedTarget;
    i4 && o2(e4.panel) && ((s3 = o2(e4.panel)) != null && s3.contains(i4) || (e4.closePopover(), ((v4 = (n6 = o2(e4.beforePanelSentinel)) == null ? void 0 : n6.contains) != null && v4.call(n6, i4) || (l4 = (o4 = o2(e4.afterPanelSentinel)) == null ? void 0 : o4.contains) != null && l4.call(o4, i4)) && i4.focus({ preventScroll: true })));
  }
  let w3 = n5();
  function y3() {
    let u6 = o2(e4.panel);
    if (!u6)
      return;
    function i4() {
      u(w3.value, { [d3.Forwards]: () => {
        var n6;
        P(u6, N2.First) === T2.Error && ((n6 = o2(e4.afterPanelSentinel)) == null || n6.focus());
      }, [d3.Backwards]: () => {
        var s3;
        (s3 = o2(e4.button)) == null || s3.focus({ preventScroll: true });
      } });
    }
    i4();
  }
  function O3() {
    let u6 = o2(e4.panel);
    if (!u6)
      return;
    function i4() {
      u(w3.value, { [d3.Forwards]: () => {
        let s3 = o2(e4.button), n6 = o2(e4.panel);
        if (!s3)
          return;
        let v4 = E(), o4 = v4.indexOf(s3), l4 = v4.slice(0, o4 + 1), E6 = [...v4.slice(o4 + 1), ...l4];
        for (let K3 of E6.slice())
          if (K3.dataset.headlessuiFocusGuard === "true" || n6 != null && n6.contains(K3)) {
            let j6 = E6.indexOf(K3);
            j6 !== -1 && E6.splice(j6, 1);
          }
        P(E6, N2.First, { sorted: false });
      }, [d3.Backwards]: () => {
        var n6;
        P(u6, N2.Previous) === T2.Error && ((n6 = o2(e4.button)) == null || n6.focus());
      } });
    }
    i4();
  }
  return () => {
    let u6 = { open: e4.popoverState.value === 0, close: e4.close }, { id: i4, focus: s3, ...n6 } = d8, v4 = { ref: e4.panel, id: i4, onKeydown: m5, onFocusout: t6 && e4.popoverState.value === 0 ? a7 : void 0, tabIndex: -1 };
    return H({ ourProps: v4, theirProps: { ...S5, ...n6 }, attrs: S5, slot: u6, slots: { ...p9, default: (...o4) => {
      var l4;
      return [h(Fragment, [g5.value && e4.isPortalled.value && h(f2, { id: P3, ref: e4.beforePanelSentinel, features: a2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: y3 }), (l4 = p9.default) == null ? void 0 : l4.call(p9, ...o4), g5.value && e4.isPortalled.value && h(f2, { id: F5, ref: e4.afterPanelSentinel, features: a2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: O3 })])];
    } }, features: N.RenderStrategy | N.Static, visible: g5.value, name: "PopoverPanel" });
  };
} });
var Ae = defineComponent({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(d8, { attrs: S5, slots: p9, expose: h4 }) {
  let t6 = ref(null), e4 = shallowRef([]), c5 = computed(() => m(t6));
  h4({ el: t6, $el: t6 });
  function P3(m5) {
    let a7 = e4.value.indexOf(m5);
    a7 !== -1 && e4.value.splice(a7, 1);
  }
  function F5(m5) {
    return e4.value.push(m5), () => {
      P3(m5);
    };
  }
  function f5() {
    var w3;
    let m5 = c5.value;
    if (!m5)
      return false;
    let a7 = m5.activeElement;
    return (w3 = o2(t6)) != null && w3.contains(a7) ? true : e4.value.some((y3) => {
      var O3, u6;
      return ((O3 = m5.getElementById(y3.buttonId.value)) == null ? void 0 : O3.contains(a7)) || ((u6 = m5.getElementById(y3.panelId.value)) == null ? void 0 : u6.contains(a7));
    });
  }
  function g5(m5) {
    for (let a7 of e4.value)
      a7.buttonId.value !== m5 && a7.close();
  }
  return provide(le, { registerPopover: F5, unregisterPopover: P3, isFocusWithinPopoverGroup: f5, closeOthers: g5 }), () => H({ ourProps: { ref: t6 }, theirProps: d8, slot: {}, attrs: S5, slots: p9, name: "PopoverGroup" });
} });

// node_modules/@headlessui/vue/dist/components/label/label.js
var a6 = Symbol("LabelContext");
function d5() {
  let t6 = inject(a6, null);
  if (t6 === null) {
    let n6 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n6, d5), n6;
  }
  return t6;
}
function K2({ slot: t6 = {}, name: n6 = "Label", props: i4 = {} } = {}) {
  let e4 = ref([]);
  function l4(r4) {
    return e4.value.push(r4), () => {
      let o4 = e4.value.indexOf(r4);
      o4 !== -1 && e4.value.splice(o4, 1);
    };
  }
  return provide(a6, { register: l4, slot: t6, name: n6, props: i4 }), computed(() => e4.value.length > 0 ? e4.value.join(" ") : void 0);
}
var T3 = defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-label-${t()}` } }, setup(t6, { slots: n6, attrs: i4 }) {
  let e4 = d5();
  return onMounted(() => onUnmounted(e4.register(t6.id))), () => {
    let { name: l4 = "Label", slot: r4 = {}, props: o4 = {} } = e4, { id: p9, passive: c5, ...u6 } = t6, s3 = { ...Object.entries(o4).reduce((f5, [b4, g5]) => Object.assign(f5, { [b4]: unref(g5) }), {}), id: p9 };
    return c5 && (delete s3.onClick, delete s3.htmlFor, delete u6.onClick), H({ ourProps: s3, theirProps: u6, slot: r4, attrs: i4, slots: n6, name: l4 });
  };
} });

// node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js
function re2(t6, c5) {
  return t6 === c5;
}
var j4 = Symbol("RadioGroupContext");
function H4(t6) {
  let c5 = inject(j4, null);
  if (c5 === null) {
    let u6 = new Error(`<${t6} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u6, H4), u6;
  }
  return c5;
}
var ke = defineComponent({ name: "RadioGroup", emits: { "update:modelValue": (t6) => true }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => re2 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, id: { type: String, default: () => `headlessui-radiogroup-${t()}` } }, inheritAttrs: false, setup(t6, { emit: c5, attrs: u6, slots: E6, expose: d8 }) {
  let s3 = ref(null), i4 = ref([]), R2 = K2({ name: "RadioGroupLabel" }), w3 = M({ name: "RadioGroupDescription" });
  d8({ el: s3, $el: s3 });
  let [f5, S5] = d2(computed(() => t6.modelValue), (e4) => c5("update:modelValue", e4), computed(() => t6.defaultValue)), p9 = { options: i4, value: f5, disabled: computed(() => t6.disabled), firstOption: computed(() => i4.value.find((e4) => !e4.propsRef.disabled)), containsCheckedOption: computed(() => i4.value.some((e4) => p9.compare(toRaw(e4.propsRef.value), toRaw(t6.modelValue)))), compare(e4, a7) {
    if (typeof t6.by == "string") {
      let n6 = t6.by;
      return (e4 == null ? void 0 : e4[n6]) === (a7 == null ? void 0 : a7[n6]);
    }
    return t6.by(e4, a7);
  }, change(e4) {
    var n6;
    if (t6.disabled || p9.compare(toRaw(f5.value), toRaw(e4)))
      return false;
    let a7 = (n6 = i4.value.find((l4) => p9.compare(toRaw(l4.propsRef.value), toRaw(e4)))) == null ? void 0 : n6.propsRef;
    return a7 != null && a7.disabled ? false : (S5(e4), true);
  }, registerOption(e4) {
    i4.value.push(e4), i4.value = O(i4.value, (a7) => a7.element);
  }, unregisterOption(e4) {
    let a7 = i4.value.findIndex((n6) => n6.id === e4);
    a7 !== -1 && i4.value.splice(a7, 1);
  } };
  provide(j4, p9), p2({ container: computed(() => o2(s3)), accept(e4) {
    return e4.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e4.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e4) {
    e4.setAttribute("role", "none");
  } });
  function m5(e4) {
    if (!s3.value || !s3.value.contains(e4.target))
      return;
    let a7 = i4.value.filter((n6) => n6.propsRef.disabled === false).map((n6) => n6.element);
    switch (e4.key) {
      case o.Enter:
        p3(e4.currentTarget);
        break;
      case o.ArrowLeft:
      case o.ArrowUp:
        if (e4.preventDefault(), e4.stopPropagation(), P(a7, N2.Previous | N2.WrapAround) === T2.Success) {
          let l4 = i4.value.find((r4) => {
            var b4;
            return r4.element === ((b4 = m(s3)) == null ? void 0 : b4.activeElement);
          });
          l4 && p9.change(l4.propsRef.value);
        }
        break;
      case o.ArrowRight:
      case o.ArrowDown:
        if (e4.preventDefault(), e4.stopPropagation(), P(a7, N2.Next | N2.WrapAround) === T2.Success) {
          let l4 = i4.value.find((r4) => {
            var b4;
            return r4.element === ((b4 = m(r4.element)) == null ? void 0 : b4.activeElement);
          });
          l4 && p9.change(l4.propsRef.value);
        }
        break;
      case o.Space:
        {
          e4.preventDefault(), e4.stopPropagation();
          let n6 = i4.value.find((l4) => {
            var r4;
            return l4.element === ((r4 = m(l4.element)) == null ? void 0 : r4.activeElement);
          });
          n6 && p9.change(n6.propsRef.value);
        }
        break;
    }
  }
  let v4 = computed(() => {
    var e4;
    return (e4 = o2(s3)) == null ? void 0 : e4.closest("form");
  });
  return onMounted(() => {
    watch([v4], () => {
      if (!v4.value || t6.defaultValue === void 0)
        return;
      function e4() {
        p9.change(t6.defaultValue);
      }
      return v4.value.addEventListener("reset", e4), () => {
        var a7;
        (a7 = v4.value) == null || a7.removeEventListener("reset", e4);
      };
    }, { immediate: true });
  }), () => {
    let { disabled: e4, name: a7, id: n6, form: l4, ...r4 } = t6, b4 = { ref: s3, id: n6, role: "radiogroup", "aria-labelledby": R2.value, "aria-describedby": w3.value, onKeydown: m5 };
    return h(Fragment, [...a7 != null && f5.value != null ? e2({ [a7]: f5.value }).map(([T4, G2]) => h(f2, K({ features: a2.Hidden, key: T4, as: "input", type: "hidden", hidden: true, readOnly: true, form: l4, name: T4, value: G2 }))) : [], H({ ourProps: b4, theirProps: { ...u6, ...T(r4, ["modelValue", "defaultValue", "by"]) }, slot: {}, attrs: u6, slots: E6, name: "RadioGroup" })]);
  };
} });
var ie = ((u6) => (u6[u6.Empty = 1] = "Empty", u6[u6.Active = 2] = "Active", u6))(ie || {});
var Ee = defineComponent({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-radiogroup-option-${t()}` } }, setup(t6, { attrs: c5, slots: u6, expose: E6 }) {
  let d8 = H4("RadioGroupOption"), s3 = K2({ name: "RadioGroupLabel" }), i4 = M({ name: "RadioGroupDescription" }), R2 = ref(null), w3 = computed(() => ({ value: t6.value, disabled: t6.disabled })), f5 = ref(1);
  E6({ el: R2, $el: R2 });
  let S5 = computed(() => o2(R2));
  onMounted(() => d8.registerOption({ id: t6.id, element: S5, propsRef: w3 })), onUnmounted(() => d8.unregisterOption(t6.id));
  let p9 = computed(() => {
    var r4;
    return ((r4 = d8.firstOption.value) == null ? void 0 : r4.id) === t6.id;
  }), m5 = computed(() => d8.disabled.value || t6.disabled), v4 = computed(() => d8.compare(toRaw(d8.value.value), toRaw(t6.value))), e4 = computed(() => m5.value ? -1 : v4.value || !d8.containsCheckedOption.value && p9.value ? 0 : -1);
  function a7() {
    var r4;
    d8.change(t6.value) && (f5.value |= 2, (r4 = o2(R2)) == null || r4.focus());
  }
  function n6() {
    f5.value |= 2;
  }
  function l4() {
    f5.value &= -3;
  }
  return () => {
    let { id: r4, value: b4, disabled: T4, ...G2 } = t6, N5 = { checked: v4.value, disabled: m5.value, active: Boolean(f5.value & 2) }, K3 = { id: r4, ref: R2, role: "radio", "aria-checked": v4.value ? "true" : "false", "aria-labelledby": s3.value, "aria-describedby": i4.value, "aria-disabled": m5.value ? true : void 0, tabIndex: e4.value, onClick: m5.value ? void 0 : a7, onFocus: m5.value ? void 0 : n6, onBlur: m5.value ? void 0 : l4 };
    return H({ ourProps: K3, theirProps: G2, slot: N5, attrs: c5, slots: u6, name: "RadioGroupOption" });
  };
} });
var we = T3;
var Se2 = E5;

// node_modules/@headlessui/vue/dist/components/switch/switch.js
var S4 = Symbol("GroupContext");
var ae2 = defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l4, { slots: p9, attrs: a7 }) {
  let o4 = ref(null), f5 = K2({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var r4;
    return (r4 = o4.value) == null ? void 0 : r4.id;
  }), onClick(r4) {
    o4.value && (r4.currentTarget.tagName === "LABEL" && r4.preventDefault(), o4.value.click(), o4.value.focus({ preventScroll: true }));
  } } }), t6 = M({ name: "SwitchDescription" });
  return provide(S4, { switchRef: o4, labelledby: f5, describedby: t6 }), () => H({ theirProps: l4, ourProps: {}, slot: {}, slots: p9, attrs: a7, name: "SwitchGroup" });
} });
var ue2 = defineComponent({ name: "Switch", emits: { "update:modelValue": (l4) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: () => `headlessui-switch-${t()}` } }, inheritAttrs: false, setup(l4, { emit: p9, attrs: a7, slots: o4, expose: f5 }) {
  let t6 = inject(S4, null), [i4, r4] = d2(computed(() => l4.modelValue), (e4) => p9("update:modelValue", e4), computed(() => l4.defaultChecked));
  function s3() {
    r4(!i4.value);
  }
  let w3 = ref(null), u6 = t6 === null ? w3 : t6.switchRef, g5 = b2(computed(() => ({ as: l4.as, type: a7.type })), u6);
  f5({ el: u6, $el: u6 });
  function k2(e4) {
    e4.preventDefault(), s3();
  }
  function C3(e4) {
    e4.key === o.Space ? (e4.preventDefault(), s3()) : e4.key === o.Enter && p3(e4.currentTarget);
  }
  function E6(e4) {
    e4.preventDefault();
  }
  let c5 = computed(() => {
    var e4, n6;
    return (n6 = (e4 = o2(u6)) == null ? void 0 : e4.closest) == null ? void 0 : n6.call(e4, "form");
  });
  return onMounted(() => {
    watch([c5], () => {
      if (!c5.value || l4.defaultChecked === void 0)
        return;
      function e4() {
        r4(l4.defaultChecked);
      }
      return c5.value.addEventListener("reset", e4), () => {
        var n6;
        (n6 = c5.value) == null || n6.removeEventListener("reset", e4);
      };
    }, { immediate: true });
  }), () => {
    let { id: e4, name: n6, value: L4, form: D, ...R2 } = l4, K3 = { checked: i4.value }, x4 = { id: e4, ref: u6, role: "switch", type: g5.value, tabIndex: 0, "aria-checked": i4.value, "aria-labelledby": t6 == null ? void 0 : t6.labelledby.value, "aria-describedby": t6 == null ? void 0 : t6.describedby.value, onClick: k2, onKeyup: C3, onKeypress: E6 };
    return h(Fragment, [n6 != null && i4.value != null ? h(f2, K({ features: a2.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: i4.value, form: D, name: n6, value: L4 })) : null, H({ ourProps: x4, theirProps: { ...a7, ...T(R2, ["modelValue", "defaultChecked"]) }, slot: K3, attrs: a7, slots: o4, name: "Switch" })]);
  };
} });
var de = T3;
var ce4 = E5;

// node_modules/@headlessui/vue/dist/internal/focus-sentinel.js
var d6 = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t6) {
  let n6 = ref(true);
  return () => n6.value ? h(f2, { as: "button", type: "button", features: a2.Focusable, onFocus(o4) {
    o4.preventDefault();
    let e4, a7 = 50;
    function r4() {
      var u6;
      if (a7-- <= 0) {
        e4 && cancelAnimationFrame(e4);
        return;
      }
      if ((u6 = t6.onFocus) != null && u6.call(t6)) {
        n6.value = false, cancelAnimationFrame(e4);
        return;
      }
      e4 = requestAnimationFrame(r4);
    }
    e4 = requestAnimationFrame(r4);
  } }) : null;
} });

// node_modules/@headlessui/vue/dist/components/tabs/tabs.js
var te = ((i4) => (i4[i4.Forwards = 0] = "Forwards", i4[i4.Backwards = 1] = "Backwards", i4))(te || {});
var le2 = ((s3) => (s3[s3.Less = -1] = "Less", s3[s3.Equal = 0] = "Equal", s3[s3.Greater = 1] = "Greater", s3))(le2 || {});
var U3 = Symbol("TabsContext");
function k(a7) {
  let v4 = inject(U3, null);
  if (v4 === null) {
    let i4 = new Error(`<${a7} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i4, k), i4;
  }
  return v4;
}
var j5 = Symbol("TabsSSRContext");
var xe2 = defineComponent({ name: "TabGroup", emits: { change: (a7) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a7, { slots: v4, attrs: i4, emit: s3 }) {
  var h4;
  let l4 = ref((h4 = a7.selectedIndex) != null ? h4 : a7.defaultIndex), n6 = ref([]), o4 = ref([]), T4 = computed(() => a7.selectedIndex !== null), b4 = computed(() => T4.value ? a7.selectedIndex : l4.value);
  function m5(t6) {
    var S5;
    let e4 = O(r4.tabs.value, o2), u6 = O(r4.panels.value, o2), f5 = e4.filter((p9) => {
      var E6;
      return !((E6 = o2(p9)) != null && E6.hasAttribute("disabled"));
    });
    if (t6 < 0 || t6 > e4.length - 1) {
      let p9 = u(l4.value === null ? 0 : Math.sign(t6 - l4.value), { [-1]: () => 1, [0]: () => u(Math.sign(t6), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
      l4.value = u(p9, { [0]: () => e4.indexOf(f5[0]), [1]: () => e4.indexOf(f5[f5.length - 1]) }), r4.tabs.value = e4, r4.panels.value = u6;
    } else {
      let p9 = e4.slice(0, t6), G2 = [...e4.slice(t6), ...p9].find((W2) => f5.includes(W2));
      if (!G2)
        return;
      let B3 = (S5 = e4.indexOf(G2)) != null ? S5 : r4.selectedIndex.value;
      B3 === -1 && (B3 = r4.selectedIndex.value), l4.value = B3, r4.tabs.value = e4, r4.panels.value = u6;
    }
  }
  let r4 = { selectedIndex: computed(() => {
    var t6, e4;
    return (e4 = (t6 = l4.value) != null ? t6 : a7.defaultIndex) != null ? e4 : null;
  }), orientation: computed(() => a7.vertical ? "vertical" : "horizontal"), activation: computed(() => a7.manual ? "manual" : "auto"), tabs: n6, panels: o4, setSelectedIndex(t6) {
    b4.value !== t6 && s3("change", t6), T4.value || m5(t6);
  }, registerTab(t6) {
    var f5;
    if (n6.value.includes(t6))
      return;
    let e4 = n6.value[l4.value];
    n6.value.push(t6), n6.value = O(n6.value, o2);
    let u6 = (f5 = n6.value.indexOf(e4)) != null ? f5 : l4.value;
    u6 !== -1 && (l4.value = u6);
  }, unregisterTab(t6) {
    let e4 = n6.value.indexOf(t6);
    e4 !== -1 && n6.value.splice(e4, 1);
  }, registerPanel(t6) {
    o4.value.includes(t6) || (o4.value.push(t6), o4.value = O(o4.value, o2));
  }, unregisterPanel(t6) {
    let e4 = o4.value.indexOf(t6);
    e4 !== -1 && o4.value.splice(e4, 1);
  } };
  provide(U3, r4);
  let R2 = ref({ tabs: [], panels: [] }), y3 = ref(false);
  onMounted(() => {
    y3.value = true;
  }), provide(j5, computed(() => y3.value ? null : R2.value));
  let w3 = computed(() => a7.selectedIndex);
  return onMounted(() => {
    watch([w3], () => {
      var t6;
      return m5((t6 = a7.selectedIndex) != null ? t6 : a7.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!T4.value || b4.value == null || r4.tabs.value.length <= 0)
      return;
    let t6 = O(r4.tabs.value, o2);
    t6.some((u6, f5) => o2(r4.tabs.value[f5]) !== o2(u6)) && r4.setSelectedIndex(t6.findIndex((u6) => o2(u6) === o2(r4.tabs.value[b4.value])));
  }), () => {
    let t6 = { selectedIndex: l4.value };
    return h(Fragment, [n6.value.length <= 0 && h(d6, { onFocus: () => {
      for (let e4 of n6.value) {
        let u6 = o2(e4);
        if ((u6 == null ? void 0 : u6.tabIndex) === 0)
          return u6.focus(), true;
      }
      return false;
    } }), H({ theirProps: { ...i4, ...T(a7, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t6, slots: v4, attrs: i4, name: "TabGroup" })]);
  };
} });
var Ie = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a7, { attrs: v4, slots: i4 }) {
  let s3 = k("TabList");
  return () => {
    let l4 = { selectedIndex: s3.selectedIndex.value }, n6 = { role: "tablist", "aria-orientation": s3.orientation.value };
    return H({ ourProps: n6, theirProps: a7, slot: l4, attrs: v4, slots: i4, name: "TabList" });
  };
} });
var ye2 = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-tabs-tab-${t()}` } }, setup(a7, { attrs: v4, slots: i4, expose: s3 }) {
  let l4 = k("Tab"), n6 = ref(null);
  s3({ el: n6, $el: n6 }), onMounted(() => l4.registerTab(n6)), onUnmounted(() => l4.unregisterTab(n6));
  let o4 = inject(j5), T4 = computed(() => {
    if (o4.value) {
      let e4 = o4.value.tabs.indexOf(a7.id);
      return e4 === -1 ? o4.value.tabs.push(a7.id) - 1 : e4;
    }
    return -1;
  }), b4 = computed(() => {
    let e4 = l4.tabs.value.indexOf(n6);
    return e4 === -1 ? T4.value : e4;
  }), m5 = computed(() => b4.value === l4.selectedIndex.value);
  function r4(e4) {
    var f5;
    let u6 = e4();
    if (u6 === T2.Success && l4.activation.value === "auto") {
      let S5 = (f5 = m(n6)) == null ? void 0 : f5.activeElement, p9 = l4.tabs.value.findIndex((E6) => o2(E6) === S5);
      p9 !== -1 && l4.setSelectedIndex(p9);
    }
    return u6;
  }
  function R2(e4) {
    let u6 = l4.tabs.value.map((S5) => o2(S5)).filter(Boolean);
    if (e4.key === o.Space || e4.key === o.Enter) {
      e4.preventDefault(), e4.stopPropagation(), l4.setSelectedIndex(b4.value);
      return;
    }
    switch (e4.key) {
      case o.Home:
      case o.PageUp:
        return e4.preventDefault(), e4.stopPropagation(), r4(() => P(u6, N2.First));
      case o.End:
      case o.PageDown:
        return e4.preventDefault(), e4.stopPropagation(), r4(() => P(u6, N2.Last));
    }
    if (r4(() => u(l4.orientation.value, { vertical() {
      return e4.key === o.ArrowUp ? P(u6, N2.Previous | N2.WrapAround) : e4.key === o.ArrowDown ? P(u6, N2.Next | N2.WrapAround) : T2.Error;
    }, horizontal() {
      return e4.key === o.ArrowLeft ? P(u6, N2.Previous | N2.WrapAround) : e4.key === o.ArrowRight ? P(u6, N2.Next | N2.WrapAround) : T2.Error;
    } })) === T2.Success)
      return e4.preventDefault();
  }
  let y3 = ref(false);
  function w3() {
    var e4;
    y3.value || (y3.value = true, !a7.disabled && ((e4 = o2(n6)) == null || e4.focus(), l4.setSelectedIndex(b4.value), t3(() => {
      y3.value = false;
    })));
  }
  function h4(e4) {
    e4.preventDefault();
  }
  let t6 = b2(computed(() => ({ as: a7.as, type: v4.type })), n6);
  return () => {
    var p9;
    let e4 = { selected: m5.value }, { id: u6, ...f5 } = a7, S5 = { ref: n6, onKeydown: R2, onMousedown: h4, onClick: w3, id: u6, role: "tab", type: t6.value, "aria-controls": (p9 = o2(l4.panels.value[b4.value])) == null ? void 0 : p9.id, "aria-selected": m5.value, tabIndex: m5.value ? 0 : -1, disabled: a7.disabled ? true : void 0 };
    return H({ ourProps: S5, theirProps: f5, slot: e4, attrs: v4, slots: i4, name: "Tab" });
  };
} });
var Se3 = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a7, { slots: v4, attrs: i4 }) {
  let s3 = k("TabPanels");
  return () => {
    let l4 = { selectedIndex: s3.selectedIndex.value };
    return H({ theirProps: a7, ourProps: {}, slot: l4, attrs: i4, slots: v4, name: "TabPanels" });
  };
} });
var ge2 = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-tabs-panel-${t()}` }, tabIndex: { type: Number, default: 0 } }, setup(a7, { attrs: v4, slots: i4, expose: s3 }) {
  let l4 = k("TabPanel"), n6 = ref(null);
  s3({ el: n6, $el: n6 }), onMounted(() => l4.registerPanel(n6)), onUnmounted(() => l4.unregisterPanel(n6));
  let o4 = inject(j5), T4 = computed(() => {
    if (o4.value) {
      let r4 = o4.value.panels.indexOf(a7.id);
      return r4 === -1 ? o4.value.panels.push(a7.id) - 1 : r4;
    }
    return -1;
  }), b4 = computed(() => {
    let r4 = l4.panels.value.indexOf(n6);
    return r4 === -1 ? T4.value : r4;
  }), m5 = computed(() => b4.value === l4.selectedIndex.value);
  return () => {
    var t6;
    let r4 = { selected: m5.value }, { id: R2, tabIndex: y3, ...w3 } = a7, h4 = { ref: n6, id: R2, role: "tabpanel", "aria-labelledby": (t6 = o2(l4.tabs.value[b4.value])) == null ? void 0 : t6.id, tabIndex: m5.value ? y3 : -1 };
    return !m5.value && a7.unmount && !a7.static ? h(f2, { as: "span", ...h4 }) : H({ ourProps: h4, theirProps: w3, slot: r4, attrs: v4, slots: i4, features: N.Static | N.RenderStrategy, visible: m5.value, name: "TabPanel" });
  };
} });

// node_modules/@headlessui/vue/dist/utils/once.js
function l3(r4) {
  let e4 = { called: false };
  return (...t6) => {
    if (!e4.called)
      return e4.called = true, r4(...t6);
  };
}

// node_modules/@headlessui/vue/dist/components/transitions/utils/transition.js
function m4(e4, ...t6) {
  e4 && t6.length > 0 && e4.classList.add(...t6);
}
function d7(e4, ...t6) {
  e4 && t6.length > 0 && e4.classList.remove(...t6);
}
var g3 = ((i4) => (i4.Finished = "finished", i4.Cancelled = "cancelled", i4))(g3 || {});
function F4(e4, t6) {
  let i4 = r3();
  if (!e4)
    return i4.dispose;
  let { transitionDuration: n6, transitionDelay: a7 } = getComputedStyle(e4), [l4, s3] = [n6, a7].map((o4) => {
    let [u6 = 0] = o4.split(",").filter(Boolean).map((r4) => r4.includes("ms") ? parseFloat(r4) : parseFloat(r4) * 1e3).sort((r4, c5) => c5 - r4);
    return u6;
  });
  return l4 !== 0 ? i4.setTimeout(() => t6("finished"), l4 + s3) : t6("finished"), i4.add(() => t6("cancelled")), i4.dispose;
}
function L2(e4, t6, i4, n6, a7, l4) {
  let s3 = r3(), o4 = l4 !== void 0 ? l3(l4) : () => {
  };
  return d7(e4, ...a7), m4(e4, ...t6, ...i4), s3.nextFrame(() => {
    d7(e4, ...i4), m4(e4, ...n6), s3.add(F4(e4, (u6) => (d7(e4, ...n6, ...t6), m4(e4, ...a7), o4(u6))));
  }), s3.add(() => d7(e4, ...t6, ...i4, ...n6, ...a7)), s3.add(() => o4("cancelled")), s3.dispose;
}

// node_modules/@headlessui/vue/dist/components/transitions/transition.js
function g4(e4 = "") {
  return e4.split(" ").filter((t6) => t6.trim().length > 1);
}
var R = Symbol("TransitionContext");
var pe2 = ((a7) => (a7.Visible = "visible", a7.Hidden = "hidden", a7))(pe2 || {});
function me2() {
  return inject(R, null) !== null;
}
function Te() {
  let e4 = inject(R, null);
  if (e4 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e4;
}
function ge3() {
  let e4 = inject(N4, null);
  if (e4 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e4;
}
var N4 = Symbol("NestingContext");
function L3(e4) {
  return "children" in e4 ? L3(e4.children) : e4.value.filter(({ state: t6 }) => t6 === "visible").length > 0;
}
function Q3(e4) {
  let t6 = ref([]), a7 = ref(false);
  onMounted(() => a7.value = true), onUnmounted(() => a7.value = false);
  function s3(n6, r4 = S.Hidden) {
    let l4 = t6.value.findIndex(({ id: f5 }) => f5 === n6);
    l4 !== -1 && (u(r4, { [S.Unmount]() {
      t6.value.splice(l4, 1);
    }, [S.Hidden]() {
      t6.value[l4].state = "hidden";
    } }), !L3(t6) && a7.value && (e4 == null || e4()));
  }
  function h4(n6) {
    let r4 = t6.value.find(({ id: l4 }) => l4 === n6);
    return r4 ? r4.state !== "visible" && (r4.state = "visible") : t6.value.push({ id: n6, state: "visible" }), () => s3(n6, S.Unmount);
  }
  return { children: t6, register: h4, unregister: s3 };
}
var W = N.RenderStrategy;
var he2 = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e4, { emit: t6, attrs: a7, slots: s3, expose: h4 }) {
  let n6 = ref(0);
  function r4() {
    n6.value |= l.Opening, t6("beforeEnter");
  }
  function l4() {
    n6.value &= ~l.Opening, t6("afterEnter");
  }
  function f5() {
    n6.value |= l.Closing, t6("beforeLeave");
  }
  function S5() {
    n6.value &= ~l.Closing, t6("afterLeave");
  }
  if (!me2() && C())
    return () => h(Se4, { ...e4, onBeforeEnter: r4, onAfterEnter: l4, onBeforeLeave: f5, onAfterLeave: S5 }, s3);
  let d8 = ref(null), b4 = computed(() => e4.unmount ? S.Unmount : S.Hidden);
  h4({ el: d8, $el: d8 });
  let { show: v4, appear: A4 } = Te(), { register: D, unregister: H5 } = ge3(), i4 = ref(v4.value ? "visible" : "hidden"), I2 = { value: true }, c5 = t(), y3 = { value: false }, P3 = Q3(() => {
    !y3.value && i4.value !== "hidden" && (i4.value = "hidden", H5(c5), S5());
  });
  onMounted(() => {
    let o4 = D(c5);
    onUnmounted(o4);
  }), watchEffect(() => {
    if (b4.value === S.Hidden && c5) {
      if (v4.value && i4.value !== "visible") {
        i4.value = "visible";
        return;
      }
      u(i4.value, { ["hidden"]: () => H5(c5), ["visible"]: () => D(c5) });
    }
  });
  let j6 = g4(e4.enter), M3 = g4(e4.enterFrom), X2 = g4(e4.enterTo), _3 = g4(e4.entered), Y2 = g4(e4.leave), Z2 = g4(e4.leaveFrom), ee2 = g4(e4.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i4.value === "visible") {
        let o4 = o2(d8);
        if (o4 instanceof Comment && o4.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te2(o4) {
    let E6 = I2.value && !A4.value, p9 = o2(d8);
    !p9 || !(p9 instanceof HTMLElement) || E6 || (y3.value = true, v4.value && r4(), v4.value || f5(), o4(v4.value ? L2(p9, j6, M3, X2, _3, (V3) => {
      y3.value = false, V3 === g3.Finished && l4();
    }) : L2(p9, Y2, Z2, ee2, _3, (V3) => {
      y3.value = false, V3 === g3.Finished && (L3(P3) || (i4.value = "hidden", H5(c5), S5()));
    })));
  }
  return onMounted(() => {
    watch([v4], (o4, E6, p9) => {
      te2(p9), I2.value = false;
    }, { immediate: true });
  }), provide(N4, P3), c(computed(() => u(i4.value, { ["visible"]: l.Open, ["hidden"]: l.Closed }) | n6.value)), () => {
    let { appear: o4, show: E6, enter: p9, enterFrom: V3, enterTo: Ce, entered: be3, leave: ye3, leaveFrom: Ee2, leaveTo: Ve2, ...U4 } = e4, ne = { ref: d8 }, re3 = { ...U4, ...A4.value && v4.value && c2.isServer ? { class: normalizeClass([a7.class, U4.class, ...j6, ...M3]) } : {} };
    return H({ theirProps: re3, ourProps: ne, slot: {}, slots: s3, attrs: a7, features: W, visible: i4.value === "visible", name: "TransitionChild" });
  };
} });
var ce5 = he2;
var Se4 = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e4, { emit: t6, attrs: a7, slots: s3 }) {
  let h4 = p(), n6 = computed(() => e4.show === null && h4 !== null ? (h4.value & l.Open) === l.Open : e4.show);
  watchEffect(() => {
    if (![true, false].includes(n6.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r4 = ref(n6.value ? "visible" : "hidden"), l4 = Q3(() => {
    r4.value = "hidden";
  }), f5 = ref(true), S5 = { show: n6, appear: computed(() => e4.appear || !f5.value) };
  return onMounted(() => {
    watchEffect(() => {
      f5.value = false, n6.value ? r4.value = "visible" : L3(l4) || (r4.value = "hidden");
    });
  }), provide(N4, l4), provide(R, S5), () => {
    let d8 = T(e4, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b4 = { unmount: e4.unmount };
    return H({ ourProps: { ...b4, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h(ce5, { onBeforeEnter: () => t6("beforeEnter"), onAfterEnter: () => t6("afterEnter"), onBeforeLeave: () => t6("beforeLeave"), onAfterLeave: () => t6("afterLeave"), ...a7, ...b4, ...d8 }, s3.default)] }, attrs: {}, features: W, visible: r4.value === "visible", name: "Transition" });
  };
} });
export {
  Ke as Combobox,
  Ue as ComboboxButton,
  _e as ComboboxInput,
  $e as ComboboxLabel,
  Je as ComboboxOption,
  qe as ComboboxOptions,
  Ue2 as Dialog,
  ze as DialogBackdrop,
  We as DialogDescription,
  Ye as DialogOverlay,
  Ge as DialogPanel,
  Ve as DialogTitle,
  Q2 as Disclosure,
  V2 as DisclosureButton,
  X as DisclosurePanel,
  ce2 as FocusTrap,
  Fe as Listbox,
  Ke2 as ListboxButton,
  Be as ListboxLabel,
  He as ListboxOption,
  Ne as ListboxOptions,
  Me as Menu,
  Re as MenuButton,
  ye as MenuItem,
  he as MenuItems,
  ge as Popover,
  je as PopoverButton,
  Ae as PopoverGroup,
  Ne2 as PopoverOverlay,
  We2 as PopoverPanel,
  U as Portal,
  _2 as PortalGroup,
  ke as RadioGroup,
  Se2 as RadioGroupDescription,
  we as RadioGroupLabel,
  Ee as RadioGroupOption,
  ue2 as Switch,
  ce4 as SwitchDescription,
  ae2 as SwitchGroup,
  de as SwitchLabel,
  ye2 as Tab,
  xe2 as TabGroup,
  Ie as TabList,
  ge2 as TabPanel,
  Se3 as TabPanels,
  he2 as TransitionChild,
  Se4 as TransitionRoot
};
//# sourceMappingURL=@headlessui_vue.js.map
