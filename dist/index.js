import * as ee from "react";
import $e, { useState as ht, useContext as Yt, forwardRef as Qs, createElement as xc, useId as Tv, useEffect as ct, useLayoutEffect as zr, createContext as bi, useRef as qe, useCallback as Qe, useMemo as Rn, cloneElement as qO, useReducer as Ov, Component as KO, useImperativeHandle as GO, Fragment as XO } from "react";
import * as Sv from "react-dom";
import ZO from "react-dom";
import { renderToString as Dv } from "react-dom/server";
import './index.css';var Yi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function el(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bc = { exports: {} }, Ia = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gh;
function JO() {
  if (Gh) return Ia;
  Gh = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var l = null;
    if (o !== void 0 && (l = "" + o), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      o = {};
      for (var u in a)
        u !== "key" && (o[u] = a[u]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: l,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return Ia.Fragment = t, Ia.jsx = n, Ia.jsxs = n, Ia;
}
var Ma = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xh;
function QO() {
  return Xh || (Xh = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === I ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case Z:
          return "Fragment";
        case S:
          return "Portal";
        case ne:
          return "Profiler";
        case J:
          return "StrictMode";
        case R:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case Y:
            return (g.displayName || "Context") + ".Provider";
          case V:
            return (g._context.displayName || "Context") + ".Consumer";
          case te:
            var F = g.render;
            return g = g.displayName, g || (g = F.displayName || F.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case B:
            return F = g.displayName || null, F !== null ? F : e(g.type) || "Memo";
          case U:
            F = g._payload, g = g._init;
            try {
              return e(g(F));
            } catch {
            }
        }
      return null;
    }
    function t(g) {
      return "" + g;
    }
    function n(g) {
      try {
        t(g);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var $ = F.error, H = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return $.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), t(g);
      }
    }
    function r() {
    }
    function a() {
      if (ce === 0) {
        ye = console.log, ge = console.info, be = console.warn, we = console.error, Ce = console.group, _e = console.groupCollapsed, Se = console.groupEnd;
        var g = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: g,
          log: g,
          warn: g,
          error: g,
          group: g,
          groupCollapsed: g,
          groupEnd: g
        });
      }
      ce++;
    }
    function o() {
      if (ce--, ce === 0) {
        var g = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: L({}, g, { value: ye }),
          info: L({}, g, { value: ge }),
          warn: L({}, g, { value: be }),
          error: L({}, g, { value: we }),
          group: L({}, g, { value: Ce }),
          groupCollapsed: L({}, g, { value: _e }),
          groupEnd: L({}, g, { value: Se })
        });
      }
      0 > ce && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function l(g) {
      if (fe === void 0)
        try {
          throw Error();
        } catch ($) {
          var F = $.stack.trim().match(/\n( *(at )?)/);
          fe = F && F[1] || "", Re = -1 < $.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < $.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + fe + g + Re;
    }
    function u(g, F) {
      if (!g || ve) return "";
      var $ = et.get(g);
      if ($ !== void 0) return $;
      ve = !0, $ = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var H = null;
      H = X.H, X.H = null, a();
      try {
        var ae = {
          DetermineComponentFrameRoot: function() {
            try {
              if (F) {
                var pt = function() {
                  throw Error();
                };
                if (Object.defineProperty(pt.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(pt, []);
                  } catch (it) {
                    var Rt = it;
                  }
                  Reflect.construct(g, [], pt);
                } else {
                  try {
                    pt.call();
                  } catch (it) {
                    Rt = it;
                  }
                  g.call(pt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (it) {
                  Rt = it;
                }
                (pt = g()) && typeof pt.catch == "function" && pt.catch(function() {
                });
              }
            } catch (it) {
              if (it && Rt && typeof it.stack == "string")
                return [it.stack, Rt.stack];
            }
            return [null, null];
          }
        };
        ae.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var xe = Object.getOwnPropertyDescriptor(
          ae.DetermineComponentFrameRoot,
          "name"
        );
        xe && xe.configurable && Object.defineProperty(
          ae.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var oe = ae.DetermineComponentFrameRoot(), Ne = oe[0], wt = oe[1];
        if (Ne && wt) {
          var Fe = Ne.split(`
`), mt = wt.split(`
`);
          for (oe = xe = 0; xe < Fe.length && !Fe[xe].includes(
            "DetermineComponentFrameRoot"
          ); )
            xe++;
          for (; oe < mt.length && !mt[oe].includes(
            "DetermineComponentFrameRoot"
          ); )
            oe++;
          if (xe === Fe.length || oe === mt.length)
            for (xe = Fe.length - 1, oe = mt.length - 1; 1 <= xe && 0 <= oe && Fe[xe] !== mt[oe]; )
              oe--;
          for (; 1 <= xe && 0 <= oe; xe--, oe--)
            if (Fe[xe] !== mt[oe]) {
              if (xe !== 1 || oe !== 1)
                do
                  if (xe--, oe--, 0 > oe || Fe[xe] !== mt[oe]) {
                    var At = `
` + Fe[xe].replace(
                      " at new ",
                      " at "
                    );
                    return g.displayName && At.includes("<anonymous>") && (At = At.replace("<anonymous>", g.displayName)), typeof g == "function" && et.set(g, At), At;
                  }
                while (1 <= xe && 0 <= oe);
              break;
            }
        }
      } finally {
        ve = !1, X.H = H, o(), Error.prepareStackTrace = $;
      }
      return Fe = (Fe = g ? g.displayName || g.name : "") ? l(Fe) : "", typeof g == "function" && et.set(g, Fe), Fe;
    }
    function d(g) {
      if (g == null) return "";
      if (typeof g == "function") {
        var F = g.prototype;
        return u(
          g,
          !(!F || !F.isReactComponent)
        );
      }
      if (typeof g == "string") return l(g);
      switch (g) {
        case R:
          return l("Suspense");
        case z:
          return l("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case te:
            return g = u(g.render, !1), g;
          case B:
            return d(g.type);
          case U:
            F = g._payload, g = g._init;
            try {
              return d(g(F));
            } catch {
            }
        }
      return "";
    }
    function p() {
      var g = X.A;
      return g === null ? null : g.getOwner();
    }
    function h(g) {
      if (M.call(g, "key")) {
        var F = Object.getOwnPropertyDescriptor(g, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function m(g, F) {
      function $() {
        Ke || (Ke = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: $,
        configurable: !0
      });
    }
    function x() {
      var g = e(this.type);
      return N[g] || (N[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function w(g, F, $, H, ae, xe) {
      return $ = xe.ref, g = {
        $$typeof: D,
        type: g,
        key: F,
        props: xe,
        _owner: ae
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function O(g, F, $, H, ae, xe) {
      if (typeof g == "string" || typeof g == "function" || g === Z || g === ne || g === J || g === R || g === z || g === K || typeof g == "object" && g !== null && (g.$$typeof === U || g.$$typeof === B || g.$$typeof === Y || g.$$typeof === V || g.$$typeof === te || g.$$typeof === ue || g.getModuleId !== void 0)) {
        var oe = F.children;
        if (oe !== void 0)
          if (H)
            if (he(oe)) {
              for (H = 0; H < oe.length; H++)
                _(oe[H], g);
              Object.freeze && Object.freeze(oe);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else _(oe, g);
      } else
        oe = "", (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), g === null ? H = "null" : he(g) ? H = "array" : g !== void 0 && g.$$typeof === D ? (H = "<" + (e(g.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : H = typeof g, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          H,
          oe
        );
      if (M.call(F, "key")) {
        oe = e(g);
        var Ne = Object.keys(F).filter(function(Fe) {
          return Fe !== "key";
        });
        H = 0 < Ne.length ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}", Q[oe + H] || (Ne = 0 < Ne.length ? "{" + Ne.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          oe,
          Ne,
          oe
        ), Q[oe + H] = !0);
      }
      if (oe = null, $ !== void 0 && (n($), oe = "" + $), h(F) && (n(F.key), oe = "" + F.key), "key" in F) {
        $ = {};
        for (var wt in F)
          wt !== "key" && ($[wt] = F[wt]);
      } else $ = F;
      return oe && m(
        $,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), w(g, oe, xe, ae, p(), $);
    }
    function _(g, F) {
      if (typeof g == "object" && g && g.$$typeof !== rt) {
        if (he(g))
          for (var $ = 0; $ < g.length; $++) {
            var H = g[$];
            b(H) && P(H, F);
          }
        else if (b(g))
          g._store && (g._store.validated = 1);
        else if (g === null || typeof g != "object" ? $ = null : ($ = j && g[j] || g["@@iterator"], $ = typeof $ == "function" ? $ : null), typeof $ == "function" && $ !== g.entries && ($ = $.call(g), $ !== g))
          for (; !(g = $.next()).done; )
            b(g.value) && P(g.value, F);
      }
    }
    function b(g) {
      return typeof g == "object" && g !== null && g.$$typeof === D;
    }
    function P(g, F) {
      if (g._store && !g._store.validated && g.key == null && (g._store.validated = 1, F = C(F), !re[F])) {
        re[F] = !0;
        var $ = "";
        g && g._owner != null && g._owner !== p() && ($ = null, typeof g._owner.tag == "number" ? $ = e(g._owner.type) : typeof g._owner.name == "string" && ($ = g._owner.name), $ = " It was passed a child from " + $ + ".");
        var H = X.getCurrentStack;
        X.getCurrentStack = function() {
          var ae = d(g.type);
          return H && (ae += H() || ""), ae;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          $
        ), X.getCurrentStack = H;
      }
    }
    function C(g) {
      var F = "", $ = p();
      return $ && ($ = e($.type)) && (F = `

Check the render method of \`` + $ + "`."), F || (g = e(g)) && (F = `

Check the top-level render call using <` + g + ">."), F;
    }
    var k = $e, D = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), j = Symbol.iterator, I = Symbol.for("react.client.reference"), X = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, L = Object.assign, ue = Symbol.for("react.client.reference"), he = Array.isArray, ce = 0, ye, ge, be, we, Ce, _e, Se;
    r.__reactDisabledLog = !0;
    var fe, Re, ve = !1, et = new (typeof WeakMap == "function" ? WeakMap : Map)(), rt = Symbol.for("react.client.reference"), Ke, N = {}, Q = {}, re = {};
    Ma.Fragment = Z, Ma.jsx = function(g, F, $, H, ae) {
      return O(g, F, $, !1, H, ae);
    }, Ma.jsxs = function(g, F, $, H, ae) {
      return O(g, F, $, !0, H, ae);
    };
  }()), Ma;
}
process.env.NODE_ENV === "production" ? bc.exports = JO() : bc.exports = QO();
var v = bc.exports;
const Qc = "-", eS = (e) => {
  const t = nS(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const o = a.split(Qc);
      return o[0] === "" && o.length !== 1 && o.shift(), kv(o, t) || tS(a);
    },
    getConflictingClassGroupIds: (a, o) => {
      const l = n[a] || [];
      return o && r[a] ? [...l, ...r[a]] : l;
    }
  };
}, kv = (e, t) => {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), o = a ? kv(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(Qc);
  return (n = t.validators.find(({
    validator: u
  }) => u(l))) == null ? void 0 : n.classGroupId;
}, Zh = /^\[(.+)\]$/, tS = (e) => {
  if (Zh.test(e)) {
    const t = Zh.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, nS = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return iS(Object.entries(e.classGroups), n).forEach(([a, o]) => {
    wc(o, r, a, t);
  }), r;
}, wc = (e, t, n, r) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const o = a === "" ? t : Jh(t, a);
      o.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (rS(a)) {
        wc(a(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([o, l]) => {
      wc(l, Jh(t, o), n, r);
    });
  });
}, Jh = (e, t) => {
  let n = e;
  return t.split(Qc).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, rS = (e) => e.isThemeGetter, iS = (e, t) => t ? e.map(([n, r]) => {
  const a = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([l, u]) => [t + l, u])) : o);
  return [n, a];
}) : e, aS = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const a = (o, l) => {
    n.set(o, l), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let l = n.get(o);
      if (l !== void 0)
        return l;
      if ((l = r.get(o)) !== void 0)
        return a(o, l), l;
    },
    set(o, l) {
      n.has(o) ? n.set(o, l) : a(o, l);
    }
  };
}, Pv = "!", oS = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, a = t[0], o = t.length, l = (u) => {
    const d = [];
    let p = 0, h = 0, m;
    for (let b = 0; b < u.length; b++) {
      let P = u[b];
      if (p === 0) {
        if (P === a && (r || u.slice(b, b + o) === t)) {
          d.push(u.slice(h, b)), h = b + o;
          continue;
        }
        if (P === "/") {
          m = b;
          continue;
        }
      }
      P === "[" ? p++ : P === "]" && p--;
    }
    const x = d.length === 0 ? u : u.substring(h), w = x.startsWith(Pv), O = w ? x.substring(1) : x, _ = m && m > h ? m - h : void 0;
    return {
      modifiers: d,
      hasImportantModifier: w,
      baseClassName: O,
      maybePostfixModifierPosition: _
    };
  };
  return n ? (u) => n({
    className: u,
    parseClassName: l
  }) : l;
}, sS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, lS = (e) => ({
  cache: aS(e.cacheSize),
  parseClassName: oS(e),
  ...eS(e)
}), uS = /\s+/, cS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  } = t, o = [], l = e.trim().split(uS);
  let u = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const p = l[d], {
      modifiers: h,
      hasImportantModifier: m,
      baseClassName: x,
      maybePostfixModifierPosition: w
    } = n(p);
    let O = !!w, _ = r(O ? x.substring(0, w) : x);
    if (!_) {
      if (!O) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (_ = r(x), !_) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      O = !1;
    }
    const b = sS(h).join(":"), P = m ? b + Pv : b, C = P + _;
    if (o.includes(C))
      continue;
    o.push(C);
    const k = a(_, O);
    for (let D = 0; D < k.length; ++D) {
      const S = k[D];
      o.push(P + S);
    }
    u = p + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function dS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Av(t)) && (r && (r += " "), r += n);
  return r;
}
const Av = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Av(e[r])) && (n && (n += " "), n += t);
  return n;
};
function fS(e, ...t) {
  let n, r, a, o = l;
  function l(d) {
    const p = t.reduce((h, m) => m(h), e());
    return n = lS(p), r = n.cache.get, a = n.cache.set, o = u, u(d);
  }
  function u(d) {
    const p = r(d);
    if (p)
      return p;
    const h = cS(d, n);
    return a(d, h), h;
  }
  return function() {
    return o(dS.apply(null, arguments));
  };
}
const Et = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Iv = /^\[(?:([a-z-]+):)?(.+)\]$/i, pS = /^\d+\/\d+$/, hS = /* @__PURE__ */ new Set(["px", "full", "screen"]), mS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, yS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, yr = (e) => qi(e) || hS.has(e) || pS.test(e), jr = (e) => aa(e, "length", SS), qi = (e) => !!e && !Number.isNaN(Number(e)), Nu = (e) => aa(e, "number", qi), Na = (e) => !!e && Number.isInteger(Number(e)), bS = (e) => e.endsWith("%") && qi(e.slice(0, -1)), Be = (e) => Iv.test(e), Rr = (e) => mS.test(e), wS = /* @__PURE__ */ new Set(["length", "size", "percentage"]), _S = (e) => aa(e, wS, Mv), ES = (e) => aa(e, "position", Mv), CS = /* @__PURE__ */ new Set(["image", "url"]), TS = (e) => aa(e, CS, kS), OS = (e) => aa(e, "", DS), ja = () => !0, aa = (e, t, n) => {
  const r = Iv.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, SS = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gS.test(e) && !vS.test(e)
), Mv = () => !1, DS = (e) => yS.test(e), kS = (e) => xS.test(e), PS = () => {
  const e = Et("colors"), t = Et("spacing"), n = Et("blur"), r = Et("brightness"), a = Et("borderColor"), o = Et("borderRadius"), l = Et("borderSpacing"), u = Et("borderWidth"), d = Et("contrast"), p = Et("grayscale"), h = Et("hueRotate"), m = Et("invert"), x = Et("gap"), w = Et("gradientColorStops"), O = Et("gradientColorStopPositions"), _ = Et("inset"), b = Et("margin"), P = Et("opacity"), C = Et("padding"), k = Et("saturate"), D = Et("scale"), S = Et("sepia"), Z = Et("skew"), J = Et("space"), ne = Et("translate"), V = () => ["auto", "contain", "none"], Y = () => ["auto", "hidden", "clip", "visible", "scroll"], te = () => ["auto", Be, t], R = () => [Be, t], z = () => ["", yr, jr], B = () => ["auto", qi, Be], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], j = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", Be], M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [qi, Be];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ja],
      spacing: [yr, jr],
      blur: ["none", "", Rr, Be],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Rr, Be],
      borderSpacing: R(),
      borderWidth: z(),
      contrast: L(),
      grayscale: X(),
      hueRotate: L(),
      invert: X(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [bS, jr],
      inset: te(),
      margin: te(),
      opacity: L(),
      padding: R(),
      saturate: L(),
      scale: L(),
      sepia: X(),
      skew: L(),
      space: R(),
      translate: R()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Be]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Rr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": M()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": M()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...U(), Be]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Y()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Y()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Y()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [_]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [_]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [_]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [_]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [_]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [_]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [_]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [_]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [_]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Na, Be]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: te()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", Be]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Na, Be]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ja]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Na, Be]
        }, Be]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ja]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Na, Be]
        }, Be]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Be]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Be]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [x]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [x]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [x]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...I()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...I(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...I(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [C]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [C]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [C]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [C]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [C]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [C]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [C]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [C]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [C]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [J]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [J]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Be, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Be, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Be, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Rr]
        }, Rr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Be, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Be, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Be, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Be, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Rr, jr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Nu]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ja]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Be]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", qi, Nu]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", yr, Be]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Be]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Be]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [P]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [P]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", yr, jr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", yr, Be]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Be]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Be]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [P]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...U(), ES]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", _S]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, TS]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [w]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [P]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...K(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [u]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [P]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: K()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...K()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [yr, Be]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [yr, jr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: z()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [P]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [yr, jr]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Rr, OS]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ja]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...j(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": j()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Rr, Be]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [h]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [h]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Be]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: L()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Be]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: L()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Be]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [D]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [D]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [D]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Na, Be]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ne]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ne]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Z]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Be]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Be]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Be]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [yr, jr, Nu]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, AS = /* @__PURE__ */ fS(PS);
function Nv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Nv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function IS() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Nv(e)) && (r && (r += " "), r += t);
  return r;
}
const Pe = (...e) => AS(IS(...e)), nn = (...e) => (t) => {
  for (const n of e)
    if (n != null) {
      if (typeof n == "function") {
        n(t);
        continue;
      }
      n.current = t;
    }
}, eo = (e, t) => {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) && (a && o ? n[r] = (...l) => {
      o(...l), a(...l);
    } : a && (n[r] = a)), r === "ref" ? n[r] = nn(a, o) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = Pe(a, o));
  }
  return { ...e, ...n };
}, MS = (...e) => (t) => {
  e.forEach((n) => {
    typeof n == "function" && n(t);
  });
}, Ki = (e, t, n) => {
  const [r, a] = ht(e), o = t !== void 0, l = o ? t : r;
  return [l, (u) => {
    o || a(u), n && n(typeof u == "function" ? u(l) : u);
  }];
};
var Ra = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _c = { exports: {} }, $a = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qh;
function NS() {
  if (Qh) return $a;
  Qh = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var l = null;
    if (o !== void 0 && (l = "" + o), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      o = {};
      for (var u in a)
        u !== "key" && (o[u] = a[u]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: l,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return $a.Fragment = t, $a.jsx = n, $a.jsxs = n, $a;
}
var ts = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var em;
function jS() {
  return em || (em = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === I ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case Z:
          return "Fragment";
        case S:
          return "Portal";
        case ne:
          return "Profiler";
        case J:
          return "StrictMode";
        case R:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case Y:
            return (g.displayName || "Context") + ".Provider";
          case V:
            return (g._context.displayName || "Context") + ".Consumer";
          case te:
            var F = g.render;
            return g = g.displayName, g || (g = F.displayName || F.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case B:
            return F = g.displayName || null, F !== null ? F : e(g.type) || "Memo";
          case U:
            F = g._payload, g = g._init;
            try {
              return e(g(F));
            } catch {
            }
        }
      return null;
    }
    function t(g) {
      return "" + g;
    }
    function n(g) {
      try {
        t(g);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var $ = F.error, H = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return $.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), t(g);
      }
    }
    function r() {
    }
    function a() {
      if (ce === 0) {
        ye = console.log, ge = console.info, be = console.warn, we = console.error, Ce = console.group, _e = console.groupCollapsed, Se = console.groupEnd;
        var g = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: g,
          log: g,
          warn: g,
          error: g,
          group: g,
          groupCollapsed: g,
          groupEnd: g
        });
      }
      ce++;
    }
    function o() {
      if (ce--, ce === 0) {
        var g = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: L({}, g, { value: ye }),
          info: L({}, g, { value: ge }),
          warn: L({}, g, { value: be }),
          error: L({}, g, { value: we }),
          group: L({}, g, { value: Ce }),
          groupCollapsed: L({}, g, { value: _e }),
          groupEnd: L({}, g, { value: Se })
        });
      }
      0 > ce && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function l(g) {
      if (fe === void 0)
        try {
          throw Error();
        } catch ($) {
          var F = $.stack.trim().match(/\n( *(at )?)/);
          fe = F && F[1] || "", Re = -1 < $.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < $.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + fe + g + Re;
    }
    function u(g, F) {
      if (!g || ve) return "";
      var $ = et.get(g);
      if ($ !== void 0) return $;
      ve = !0, $ = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var H = null;
      H = X.H, X.H = null, a();
      try {
        var ae = {
          DetermineComponentFrameRoot: function() {
            try {
              if (F) {
                var pt = function() {
                  throw Error();
                };
                if (Object.defineProperty(pt.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(pt, []);
                  } catch (it) {
                    var Rt = it;
                  }
                  Reflect.construct(g, [], pt);
                } else {
                  try {
                    pt.call();
                  } catch (it) {
                    Rt = it;
                  }
                  g.call(pt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (it) {
                  Rt = it;
                }
                (pt = g()) && typeof pt.catch == "function" && pt.catch(function() {
                });
              }
            } catch (it) {
              if (it && Rt && typeof it.stack == "string")
                return [it.stack, Rt.stack];
            }
            return [null, null];
          }
        };
        ae.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var xe = Object.getOwnPropertyDescriptor(
          ae.DetermineComponentFrameRoot,
          "name"
        );
        xe && xe.configurable && Object.defineProperty(
          ae.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var oe = ae.DetermineComponentFrameRoot(), Ne = oe[0], wt = oe[1];
        if (Ne && wt) {
          var Fe = Ne.split(`
`), mt = wt.split(`
`);
          for (oe = xe = 0; xe < Fe.length && !Fe[xe].includes(
            "DetermineComponentFrameRoot"
          ); )
            xe++;
          for (; oe < mt.length && !mt[oe].includes(
            "DetermineComponentFrameRoot"
          ); )
            oe++;
          if (xe === Fe.length || oe === mt.length)
            for (xe = Fe.length - 1, oe = mt.length - 1; 1 <= xe && 0 <= oe && Fe[xe] !== mt[oe]; )
              oe--;
          for (; 1 <= xe && 0 <= oe; xe--, oe--)
            if (Fe[xe] !== mt[oe]) {
              if (xe !== 1 || oe !== 1)
                do
                  if (xe--, oe--, 0 > oe || Fe[xe] !== mt[oe]) {
                    var At = `
` + Fe[xe].replace(
                      " at new ",
                      " at "
                    );
                    return g.displayName && At.includes("<anonymous>") && (At = At.replace("<anonymous>", g.displayName)), typeof g == "function" && et.set(g, At), At;
                  }
                while (1 <= xe && 0 <= oe);
              break;
            }
        }
      } finally {
        ve = !1, X.H = H, o(), Error.prepareStackTrace = $;
      }
      return Fe = (Fe = g ? g.displayName || g.name : "") ? l(Fe) : "", typeof g == "function" && et.set(g, Fe), Fe;
    }
    function d(g) {
      if (g == null) return "";
      if (typeof g == "function") {
        var F = g.prototype;
        return u(
          g,
          !(!F || !F.isReactComponent)
        );
      }
      if (typeof g == "string") return l(g);
      switch (g) {
        case R:
          return l("Suspense");
        case z:
          return l("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case te:
            return g = u(g.render, !1), g;
          case B:
            return d(g.type);
          case U:
            F = g._payload, g = g._init;
            try {
              return d(g(F));
            } catch {
            }
        }
      return "";
    }
    function p() {
      var g = X.A;
      return g === null ? null : g.getOwner();
    }
    function h(g) {
      if (M.call(g, "key")) {
        var F = Object.getOwnPropertyDescriptor(g, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function m(g, F) {
      function $() {
        Ke || (Ke = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: $,
        configurable: !0
      });
    }
    function x() {
      var g = e(this.type);
      return N[g] || (N[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function w(g, F, $, H, ae, xe) {
      return $ = xe.ref, g = {
        $$typeof: D,
        type: g,
        key: F,
        props: xe,
        _owner: ae
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function O(g, F, $, H, ae, xe) {
      if (typeof g == "string" || typeof g == "function" || g === Z || g === ne || g === J || g === R || g === z || g === K || typeof g == "object" && g !== null && (g.$$typeof === U || g.$$typeof === B || g.$$typeof === Y || g.$$typeof === V || g.$$typeof === te || g.$$typeof === ue || g.getModuleId !== void 0)) {
        var oe = F.children;
        if (oe !== void 0)
          if (H)
            if (he(oe)) {
              for (H = 0; H < oe.length; H++)
                _(oe[H], g);
              Object.freeze && Object.freeze(oe);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else _(oe, g);
      } else
        oe = "", (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), g === null ? H = "null" : he(g) ? H = "array" : g !== void 0 && g.$$typeof === D ? (H = "<" + (e(g.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : H = typeof g, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          H,
          oe
        );
      if (M.call(F, "key")) {
        oe = e(g);
        var Ne = Object.keys(F).filter(function(Fe) {
          return Fe !== "key";
        });
        H = 0 < Ne.length ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}", Q[oe + H] || (Ne = 0 < Ne.length ? "{" + Ne.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          oe,
          Ne,
          oe
        ), Q[oe + H] = !0);
      }
      if (oe = null, $ !== void 0 && (n($), oe = "" + $), h(F) && (n(F.key), oe = "" + F.key), "key" in F) {
        $ = {};
        for (var wt in F)
          wt !== "key" && ($[wt] = F[wt]);
      } else $ = F;
      return oe && m(
        $,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), w(g, oe, xe, ae, p(), $);
    }
    function _(g, F) {
      if (typeof g == "object" && g && g.$$typeof !== rt) {
        if (he(g))
          for (var $ = 0; $ < g.length; $++) {
            var H = g[$];
            b(H) && P(H, F);
          }
        else if (b(g))
          g._store && (g._store.validated = 1);
        else if (g === null || typeof g != "object" ? $ = null : ($ = j && g[j] || g["@@iterator"], $ = typeof $ == "function" ? $ : null), typeof $ == "function" && $ !== g.entries && ($ = $.call(g), $ !== g))
          for (; !(g = $.next()).done; )
            b(g.value) && P(g.value, F);
      }
    }
    function b(g) {
      return typeof g == "object" && g !== null && g.$$typeof === D;
    }
    function P(g, F) {
      if (g._store && !g._store.validated && g.key == null && (g._store.validated = 1, F = C(F), !re[F])) {
        re[F] = !0;
        var $ = "";
        g && g._owner != null && g._owner !== p() && ($ = null, typeof g._owner.tag == "number" ? $ = e(g._owner.type) : typeof g._owner.name == "string" && ($ = g._owner.name), $ = " It was passed a child from " + $ + ".");
        var H = X.getCurrentStack;
        X.getCurrentStack = function() {
          var ae = d(g.type);
          return H && (ae += H() || ""), ae;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          $
        ), X.getCurrentStack = H;
      }
    }
    function C(g) {
      var F = "", $ = p();
      return $ && ($ = e($.type)) && (F = `

Check the render method of \`` + $ + "`."), F || (g = e(g)) && (F = `

Check the top-level render call using <` + g + ">."), F;
    }
    var k = $e, D = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), j = Symbol.iterator, I = Symbol.for("react.client.reference"), X = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, L = Object.assign, ue = Symbol.for("react.client.reference"), he = Array.isArray, ce = 0, ye, ge, be, we, Ce, _e, Se;
    r.__reactDisabledLog = !0;
    var fe, Re, ve = !1, et = new (typeof WeakMap == "function" ? WeakMap : Map)(), rt = Symbol.for("react.client.reference"), Ke, N = {}, Q = {}, re = {};
    ts.Fragment = Z, ts.jsx = function(g, F, $, H, ae) {
      return O(g, F, $, !1, H, ae);
    }, ts.jsxs = function(g, F, $, H, ae) {
      return O(g, F, $, !0, H, ae);
    };
  }()), ts;
}
process.env.NODE_ENV === "production" ? _c.exports = NS() : _c.exports = jS();
var RS = _c.exports, Ss = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ss.exports;
(function(e, t) {
  (function() {
    var n, r = "4.17.21", a = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", p = 500, h = "__lodash_placeholder__", m = 1, x = 2, w = 4, O = 1, _ = 2, b = 1, P = 2, C = 4, k = 8, D = 16, S = 32, Z = 64, J = 128, ne = 256, V = 512, Y = 30, te = "...", R = 800, z = 16, B = 1, U = 2, K = 3, j = 1 / 0, I = 9007199254740991, X = 17976931348623157e292, M = NaN, L = 4294967295, ue = L - 1, he = L >>> 1, ce = [
      ["ary", J],
      ["bind", b],
      ["bindKey", P],
      ["curry", k],
      ["curryRight", D],
      ["flip", V],
      ["partial", S],
      ["partialRight", Z],
      ["rearg", ne]
    ], ye = "[object Arguments]", ge = "[object Array]", be = "[object AsyncFunction]", we = "[object Boolean]", Ce = "[object Date]", _e = "[object DOMException]", Se = "[object Error]", fe = "[object Function]", Re = "[object GeneratorFunction]", ve = "[object Map]", et = "[object Number]", rt = "[object Null]", Ke = "[object Object]", N = "[object Promise]", Q = "[object Proxy]", re = "[object RegExp]", g = "[object Set]", F = "[object String]", $ = "[object Symbol]", H = "[object Undefined]", ae = "[object WeakMap]", xe = "[object WeakSet]", oe = "[object ArrayBuffer]", Ne = "[object DataView]", wt = "[object Float32Array]", Fe = "[object Float64Array]", mt = "[object Int8Array]", At = "[object Int16Array]", pt = "[object Int32Array]", Rt = "[object Uint8Array]", it = "[object Uint8ClampedArray]", Jr = "[object Uint16Array]", Qr = "[object Uint32Array]", ga = /\b__p \+= '';/g, wl = /\b(__p \+=) '' \+/g, gw = /(__e\(.*?\)|\b__t\)) \+\n'';/g, bf = /&(?:amp|lt|gt|quot|#39);/g, wf = /[&<>"']/g, vw = RegExp(bf.source), yw = RegExp(wf.source), xw = /<%-([\s\S]+?)%>/g, bw = /<%([\s\S]+?)%>/g, _f = /<%=([\s\S]+?)%>/g, ww = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _w = /^\w*$/, Ew = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _l = /[\\^$.*+?()[\]{}|]/g, Cw = RegExp(_l.source), El = /^\s+/, Tw = /\s/, Ow = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Sw = /\{\n\/\* \[wrapped with (.+)\] \*/, Dw = /,? & /, kw = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Pw = /[()=,{}\[\]\/\s]/, Aw = /\\(\\)?/g, Iw = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ef = /\w*$/, Mw = /^[-+]0x[0-9a-f]+$/i, Nw = /^0b[01]+$/i, jw = /^\[object .+?Constructor\]$/, Rw = /^0o[0-7]+$/i, $w = /^(?:0|[1-9]\d*)$/, Fw = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, po = /($^)/, Lw = /['\n\r\u2028\u2029\\]/g, ho = "\\ud800-\\udfff", Ww = "\\u0300-\\u036f", Vw = "\\ufe20-\\ufe2f", zw = "\\u20d0-\\u20ff", Cf = Ww + Vw + zw, Tf = "\\u2700-\\u27bf", Of = "a-z\\xdf-\\xf6\\xf8-\\xff", Bw = "\\xac\\xb1\\xd7\\xf7", Hw = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Uw = "\\u2000-\\u206f", Yw = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Sf = "A-Z\\xc0-\\xd6\\xd8-\\xde", Df = "\\ufe0e\\ufe0f", kf = Bw + Hw + Uw + Yw, Cl = "['’]", qw = "[" + ho + "]", Pf = "[" + kf + "]", mo = "[" + Cf + "]", Af = "\\d+", Kw = "[" + Tf + "]", If = "[" + Of + "]", Mf = "[^" + ho + kf + Af + Tf + Of + Sf + "]", Tl = "\\ud83c[\\udffb-\\udfff]", Gw = "(?:" + mo + "|" + Tl + ")", Nf = "[^" + ho + "]", Ol = "(?:\\ud83c[\\udde6-\\uddff]){2}", Sl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Oi = "[" + Sf + "]", jf = "\\u200d", Rf = "(?:" + If + "|" + Mf + ")", Xw = "(?:" + Oi + "|" + Mf + ")", $f = "(?:" + Cl + "(?:d|ll|m|re|s|t|ve))?", Ff = "(?:" + Cl + "(?:D|LL|M|RE|S|T|VE))?", Lf = Gw + "?", Wf = "[" + Df + "]?", Zw = "(?:" + jf + "(?:" + [Nf, Ol, Sl].join("|") + ")" + Wf + Lf + ")*", Jw = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Qw = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Vf = Wf + Lf + Zw, e_ = "(?:" + [Kw, Ol, Sl].join("|") + ")" + Vf, t_ = "(?:" + [Nf + mo + "?", mo, Ol, Sl, qw].join("|") + ")", n_ = RegExp(Cl, "g"), r_ = RegExp(mo, "g"), Dl = RegExp(Tl + "(?=" + Tl + ")|" + t_ + Vf, "g"), i_ = RegExp([
      Oi + "?" + If + "+" + $f + "(?=" + [Pf, Oi, "$"].join("|") + ")",
      Xw + "+" + Ff + "(?=" + [Pf, Oi + Rf, "$"].join("|") + ")",
      Oi + "?" + Rf + "+" + $f,
      Oi + "+" + Ff,
      Qw,
      Jw,
      Af,
      e_
    ].join("|"), "g"), a_ = RegExp("[" + jf + ho + Cf + Df + "]"), o_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, s_ = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], l_ = -1, _t = {};
    _t[wt] = _t[Fe] = _t[mt] = _t[At] = _t[pt] = _t[Rt] = _t[it] = _t[Jr] = _t[Qr] = !0, _t[ye] = _t[ge] = _t[oe] = _t[we] = _t[Ne] = _t[Ce] = _t[Se] = _t[fe] = _t[ve] = _t[et] = _t[Ke] = _t[re] = _t[g] = _t[F] = _t[ae] = !1;
    var xt = {};
    xt[ye] = xt[ge] = xt[oe] = xt[Ne] = xt[we] = xt[Ce] = xt[wt] = xt[Fe] = xt[mt] = xt[At] = xt[pt] = xt[ve] = xt[et] = xt[Ke] = xt[re] = xt[g] = xt[F] = xt[$] = xt[Rt] = xt[it] = xt[Jr] = xt[Qr] = !0, xt[Se] = xt[fe] = xt[ae] = !1;
    var u_ = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, c_ = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, d_ = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, f_ = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, p_ = parseFloat, h_ = parseInt, zf = typeof Ra == "object" && Ra && Ra.Object === Object && Ra, m_ = typeof self == "object" && self && self.Object === Object && self, Bt = zf || m_ || Function("return this")(), kl = t && !t.nodeType && t, ei = kl && !0 && e && !e.nodeType && e, Bf = ei && ei.exports === kl, Pl = Bf && zf.process, Tn = function() {
      try {
        var q = ei && ei.require && ei.require("util").types;
        return q || Pl && Pl.binding && Pl.binding("util");
      } catch {
      }
    }(), Hf = Tn && Tn.isArrayBuffer, Uf = Tn && Tn.isDate, Yf = Tn && Tn.isMap, qf = Tn && Tn.isRegExp, Kf = Tn && Tn.isSet, Gf = Tn && Tn.isTypedArray;
    function gn(q, se, ie) {
      switch (ie.length) {
        case 0:
          return q.call(se);
        case 1:
          return q.call(se, ie[0]);
        case 2:
          return q.call(se, ie[0], ie[1]);
        case 3:
          return q.call(se, ie[0], ie[1], ie[2]);
      }
      return q.apply(se, ie);
    }
    function g_(q, se, ie, Oe) {
      for (var Le = -1, nt = q == null ? 0 : q.length; ++Le < nt; ) {
        var Ft = q[Le];
        se(Oe, Ft, ie(Ft), q);
      }
      return Oe;
    }
    function On(q, se) {
      for (var ie = -1, Oe = q == null ? 0 : q.length; ++ie < Oe && se(q[ie], ie, q) !== !1; )
        ;
      return q;
    }
    function v_(q, se) {
      for (var ie = q == null ? 0 : q.length; ie-- && se(q[ie], ie, q) !== !1; )
        ;
      return q;
    }
    function Xf(q, se) {
      for (var ie = -1, Oe = q == null ? 0 : q.length; ++ie < Oe; )
        if (!se(q[ie], ie, q))
          return !1;
      return !0;
    }
    function Or(q, se) {
      for (var ie = -1, Oe = q == null ? 0 : q.length, Le = 0, nt = []; ++ie < Oe; ) {
        var Ft = q[ie];
        se(Ft, ie, q) && (nt[Le++] = Ft);
      }
      return nt;
    }
    function go(q, se) {
      var ie = q == null ? 0 : q.length;
      return !!ie && Si(q, se, 0) > -1;
    }
    function Al(q, se, ie) {
      for (var Oe = -1, Le = q == null ? 0 : q.length; ++Oe < Le; )
        if (ie(se, q[Oe]))
          return !0;
      return !1;
    }
    function Ot(q, se) {
      for (var ie = -1, Oe = q == null ? 0 : q.length, Le = Array(Oe); ++ie < Oe; )
        Le[ie] = se(q[ie], ie, q);
      return Le;
    }
    function Sr(q, se) {
      for (var ie = -1, Oe = se.length, Le = q.length; ++ie < Oe; )
        q[Le + ie] = se[ie];
      return q;
    }
    function Il(q, se, ie, Oe) {
      var Le = -1, nt = q == null ? 0 : q.length;
      for (Oe && nt && (ie = q[++Le]); ++Le < nt; )
        ie = se(ie, q[Le], Le, q);
      return ie;
    }
    function y_(q, se, ie, Oe) {
      var Le = q == null ? 0 : q.length;
      for (Oe && Le && (ie = q[--Le]); Le--; )
        ie = se(ie, q[Le], Le, q);
      return ie;
    }
    function Ml(q, se) {
      for (var ie = -1, Oe = q == null ? 0 : q.length; ++ie < Oe; )
        if (se(q[ie], ie, q))
          return !0;
      return !1;
    }
    var x_ = Nl("length");
    function b_(q) {
      return q.split("");
    }
    function w_(q) {
      return q.match(kw) || [];
    }
    function Zf(q, se, ie) {
      var Oe;
      return ie(q, function(Le, nt, Ft) {
        if (se(Le, nt, Ft))
          return Oe = nt, !1;
      }), Oe;
    }
    function vo(q, se, ie, Oe) {
      for (var Le = q.length, nt = ie + (Oe ? 1 : -1); Oe ? nt-- : ++nt < Le; )
        if (se(q[nt], nt, q))
          return nt;
      return -1;
    }
    function Si(q, se, ie) {
      return se === se ? M_(q, se, ie) : vo(q, Jf, ie);
    }
    function __(q, se, ie, Oe) {
      for (var Le = ie - 1, nt = q.length; ++Le < nt; )
        if (Oe(q[Le], se))
          return Le;
      return -1;
    }
    function Jf(q) {
      return q !== q;
    }
    function Qf(q, se) {
      var ie = q == null ? 0 : q.length;
      return ie ? Rl(q, se) / ie : M;
    }
    function Nl(q) {
      return function(se) {
        return se == null ? n : se[q];
      };
    }
    function jl(q) {
      return function(se) {
        return q == null ? n : q[se];
      };
    }
    function ep(q, se, ie, Oe, Le) {
      return Le(q, function(nt, Ft, gt) {
        ie = Oe ? (Oe = !1, nt) : se(ie, nt, Ft, gt);
      }), ie;
    }
    function E_(q, se) {
      var ie = q.length;
      for (q.sort(se); ie--; )
        q[ie] = q[ie].value;
      return q;
    }
    function Rl(q, se) {
      for (var ie, Oe = -1, Le = q.length; ++Oe < Le; ) {
        var nt = se(q[Oe]);
        nt !== n && (ie = ie === n ? nt : ie + nt);
      }
      return ie;
    }
    function $l(q, se) {
      for (var ie = -1, Oe = Array(q); ++ie < q; )
        Oe[ie] = se(ie);
      return Oe;
    }
    function C_(q, se) {
      return Ot(se, function(ie) {
        return [ie, q[ie]];
      });
    }
    function tp(q) {
      return q && q.slice(0, ap(q) + 1).replace(El, "");
    }
    function vn(q) {
      return function(se) {
        return q(se);
      };
    }
    function Fl(q, se) {
      return Ot(se, function(ie) {
        return q[ie];
      });
    }
    function va(q, se) {
      return q.has(se);
    }
    function np(q, se) {
      for (var ie = -1, Oe = q.length; ++ie < Oe && Si(se, q[ie], 0) > -1; )
        ;
      return ie;
    }
    function rp(q, se) {
      for (var ie = q.length; ie-- && Si(se, q[ie], 0) > -1; )
        ;
      return ie;
    }
    function T_(q, se) {
      for (var ie = q.length, Oe = 0; ie--; )
        q[ie] === se && ++Oe;
      return Oe;
    }
    var O_ = jl(u_), S_ = jl(c_);
    function D_(q) {
      return "\\" + f_[q];
    }
    function k_(q, se) {
      return q == null ? n : q[se];
    }
    function Di(q) {
      return a_.test(q);
    }
    function P_(q) {
      return o_.test(q);
    }
    function A_(q) {
      for (var se, ie = []; !(se = q.next()).done; )
        ie.push(se.value);
      return ie;
    }
    function Ll(q) {
      var se = -1, ie = Array(q.size);
      return q.forEach(function(Oe, Le) {
        ie[++se] = [Le, Oe];
      }), ie;
    }
    function ip(q, se) {
      return function(ie) {
        return q(se(ie));
      };
    }
    function Dr(q, se) {
      for (var ie = -1, Oe = q.length, Le = 0, nt = []; ++ie < Oe; ) {
        var Ft = q[ie];
        (Ft === se || Ft === h) && (q[ie] = h, nt[Le++] = ie);
      }
      return nt;
    }
    function yo(q) {
      var se = -1, ie = Array(q.size);
      return q.forEach(function(Oe) {
        ie[++se] = Oe;
      }), ie;
    }
    function I_(q) {
      var se = -1, ie = Array(q.size);
      return q.forEach(function(Oe) {
        ie[++se] = [Oe, Oe];
      }), ie;
    }
    function M_(q, se, ie) {
      for (var Oe = ie - 1, Le = q.length; ++Oe < Le; )
        if (q[Oe] === se)
          return Oe;
      return -1;
    }
    function N_(q, se, ie) {
      for (var Oe = ie + 1; Oe--; )
        if (q[Oe] === se)
          return Oe;
      return Oe;
    }
    function ki(q) {
      return Di(q) ? R_(q) : x_(q);
    }
    function Fn(q) {
      return Di(q) ? $_(q) : b_(q);
    }
    function ap(q) {
      for (var se = q.length; se-- && Tw.test(q.charAt(se)); )
        ;
      return se;
    }
    var j_ = jl(d_);
    function R_(q) {
      for (var se = Dl.lastIndex = 0; Dl.test(q); )
        ++se;
      return se;
    }
    function $_(q) {
      return q.match(Dl) || [];
    }
    function F_(q) {
      return q.match(i_) || [];
    }
    var L_ = function q(se) {
      se = se == null ? Bt : Pi.defaults(Bt.Object(), se, Pi.pick(Bt, s_));
      var ie = se.Array, Oe = se.Date, Le = se.Error, nt = se.Function, Ft = se.Math, gt = se.Object, Wl = se.RegExp, W_ = se.String, Sn = se.TypeError, xo = ie.prototype, V_ = nt.prototype, Ai = gt.prototype, bo = se["__core-js_shared__"], wo = V_.toString, dt = Ai.hasOwnProperty, z_ = 0, op = function() {
        var i = /[^.]+$/.exec(bo && bo.keys && bo.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), _o = Ai.toString, B_ = wo.call(gt), H_ = Bt._, U_ = Wl(
        "^" + wo.call(dt).replace(_l, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Eo = Bf ? se.Buffer : n, kr = se.Symbol, Co = se.Uint8Array, sp = Eo ? Eo.allocUnsafe : n, To = ip(gt.getPrototypeOf, gt), lp = gt.create, up = Ai.propertyIsEnumerable, Oo = xo.splice, cp = kr ? kr.isConcatSpreadable : n, ya = kr ? kr.iterator : n, ti = kr ? kr.toStringTag : n, So = function() {
        try {
          var i = oi(gt, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), Y_ = se.clearTimeout !== Bt.clearTimeout && se.clearTimeout, q_ = Oe && Oe.now !== Bt.Date.now && Oe.now, K_ = se.setTimeout !== Bt.setTimeout && se.setTimeout, Do = Ft.ceil, ko = Ft.floor, Vl = gt.getOwnPropertySymbols, G_ = Eo ? Eo.isBuffer : n, dp = se.isFinite, X_ = xo.join, Z_ = ip(gt.keys, gt), Lt = Ft.max, Kt = Ft.min, J_ = Oe.now, Q_ = se.parseInt, fp = Ft.random, e0 = xo.reverse, zl = oi(se, "DataView"), xa = oi(se, "Map"), Bl = oi(se, "Promise"), Ii = oi(se, "Set"), ba = oi(se, "WeakMap"), wa = oi(gt, "create"), Po = ba && new ba(), Mi = {}, t0 = si(zl), n0 = si(xa), r0 = si(Bl), i0 = si(Ii), a0 = si(ba), Ao = kr ? kr.prototype : n, _a = Ao ? Ao.valueOf : n, pp = Ao ? Ao.toString : n;
      function E(i) {
        if (kt(i) && !Ve(i) && !(i instanceof Xe)) {
          if (i instanceof Dn)
            return i;
          if (dt.call(i, "__wrapped__"))
            return hh(i);
        }
        return new Dn(i);
      }
      var Ni = /* @__PURE__ */ function() {
        function i() {
        }
        return function(s) {
          if (!St(s))
            return {};
          if (lp)
            return lp(s);
          i.prototype = s;
          var c = new i();
          return i.prototype = n, c;
        };
      }();
      function Io() {
      }
      function Dn(i, s) {
        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
      }
      E.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: xw,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: bw,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: _f,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: E
        }
      }, E.prototype = Io.prototype, E.prototype.constructor = E, Dn.prototype = Ni(Io.prototype), Dn.prototype.constructor = Dn;
      function Xe(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = L, this.__views__ = [];
      }
      function o0() {
        var i = new Xe(this.__wrapped__);
        return i.__actions__ = an(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = an(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = an(this.__views__), i;
      }
      function s0() {
        if (this.__filtered__) {
          var i = new Xe(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function l0() {
        var i = this.__wrapped__.value(), s = this.__dir__, c = Ve(i), f = s < 0, y = c ? i.length : 0, T = b1(0, y, this.__views__), A = T.start, W = T.end, G = W - A, de = f ? W : A - 1, pe = this.__iteratees__, me = pe.length, Te = 0, De = Kt(G, this.__takeCount__);
        if (!c || !f && y == G && De == G)
          return $p(i, this.__actions__);
        var Ie = [];
        e:
          for (; G-- && Te < De; ) {
            de += s;
            for (var He = -1, Me = i[de]; ++He < me; ) {
              var Ge = pe[He], Je = Ge.iteratee, bn = Ge.type, Qt = Je(Me);
              if (bn == U)
                Me = Qt;
              else if (!Qt) {
                if (bn == B)
                  continue e;
                break e;
              }
            }
            Ie[Te++] = Me;
          }
        return Ie;
      }
      Xe.prototype = Ni(Io.prototype), Xe.prototype.constructor = Xe;
      function ni(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var f = i[s];
          this.set(f[0], f[1]);
        }
      }
      function u0() {
        this.__data__ = wa ? wa(null) : {}, this.size = 0;
      }
      function c0(i) {
        var s = this.has(i) && delete this.__data__[i];
        return this.size -= s ? 1 : 0, s;
      }
      function d0(i) {
        var s = this.__data__;
        if (wa) {
          var c = s[i];
          return c === d ? n : c;
        }
        return dt.call(s, i) ? s[i] : n;
      }
      function f0(i) {
        var s = this.__data__;
        return wa ? s[i] !== n : dt.call(s, i);
      }
      function p0(i, s) {
        var c = this.__data__;
        return this.size += this.has(i) ? 0 : 1, c[i] = wa && s === n ? d : s, this;
      }
      ni.prototype.clear = u0, ni.prototype.delete = c0, ni.prototype.get = d0, ni.prototype.has = f0, ni.prototype.set = p0;
      function ur(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var f = i[s];
          this.set(f[0], f[1]);
        }
      }
      function h0() {
        this.__data__ = [], this.size = 0;
      }
      function m0(i) {
        var s = this.__data__, c = Mo(s, i);
        if (c < 0)
          return !1;
        var f = s.length - 1;
        return c == f ? s.pop() : Oo.call(s, c, 1), --this.size, !0;
      }
      function g0(i) {
        var s = this.__data__, c = Mo(s, i);
        return c < 0 ? n : s[c][1];
      }
      function v0(i) {
        return Mo(this.__data__, i) > -1;
      }
      function y0(i, s) {
        var c = this.__data__, f = Mo(c, i);
        return f < 0 ? (++this.size, c.push([i, s])) : c[f][1] = s, this;
      }
      ur.prototype.clear = h0, ur.prototype.delete = m0, ur.prototype.get = g0, ur.prototype.has = v0, ur.prototype.set = y0;
      function cr(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var f = i[s];
          this.set(f[0], f[1]);
        }
      }
      function x0() {
        this.size = 0, this.__data__ = {
          hash: new ni(),
          map: new (xa || ur)(),
          string: new ni()
        };
      }
      function b0(i) {
        var s = Uo(this, i).delete(i);
        return this.size -= s ? 1 : 0, s;
      }
      function w0(i) {
        return Uo(this, i).get(i);
      }
      function _0(i) {
        return Uo(this, i).has(i);
      }
      function E0(i, s) {
        var c = Uo(this, i), f = c.size;
        return c.set(i, s), this.size += c.size == f ? 0 : 1, this;
      }
      cr.prototype.clear = x0, cr.prototype.delete = b0, cr.prototype.get = w0, cr.prototype.has = _0, cr.prototype.set = E0;
      function ri(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.__data__ = new cr(); ++s < c; )
          this.add(i[s]);
      }
      function C0(i) {
        return this.__data__.set(i, d), this;
      }
      function T0(i) {
        return this.__data__.has(i);
      }
      ri.prototype.add = ri.prototype.push = C0, ri.prototype.has = T0;
      function Ln(i) {
        var s = this.__data__ = new ur(i);
        this.size = s.size;
      }
      function O0() {
        this.__data__ = new ur(), this.size = 0;
      }
      function S0(i) {
        var s = this.__data__, c = s.delete(i);
        return this.size = s.size, c;
      }
      function D0(i) {
        return this.__data__.get(i);
      }
      function k0(i) {
        return this.__data__.has(i);
      }
      function P0(i, s) {
        var c = this.__data__;
        if (c instanceof ur) {
          var f = c.__data__;
          if (!xa || f.length < a - 1)
            return f.push([i, s]), this.size = ++c.size, this;
          c = this.__data__ = new cr(f);
        }
        return c.set(i, s), this.size = c.size, this;
      }
      Ln.prototype.clear = O0, Ln.prototype.delete = S0, Ln.prototype.get = D0, Ln.prototype.has = k0, Ln.prototype.set = P0;
      function hp(i, s) {
        var c = Ve(i), f = !c && li(i), y = !c && !f && Nr(i), T = !c && !f && !y && Fi(i), A = c || f || y || T, W = A ? $l(i.length, W_) : [], G = W.length;
        for (var de in i)
          (s || dt.call(i, de)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
          (de == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (de == "offset" || de == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          T && (de == "buffer" || de == "byteLength" || de == "byteOffset") || // Skip index properties.
          hr(de, G))) && W.push(de);
        return W;
      }
      function mp(i) {
        var s = i.length;
        return s ? i[eu(0, s - 1)] : n;
      }
      function A0(i, s) {
        return Yo(an(i), ii(s, 0, i.length));
      }
      function I0(i) {
        return Yo(an(i));
      }
      function Hl(i, s, c) {
        (c !== n && !Wn(i[s], c) || c === n && !(s in i)) && dr(i, s, c);
      }
      function Ea(i, s, c) {
        var f = i[s];
        (!(dt.call(i, s) && Wn(f, c)) || c === n && !(s in i)) && dr(i, s, c);
      }
      function Mo(i, s) {
        for (var c = i.length; c--; )
          if (Wn(i[c][0], s))
            return c;
        return -1;
      }
      function M0(i, s, c, f) {
        return Pr(i, function(y, T, A) {
          s(f, y, c(y), A);
        }), f;
      }
      function gp(i, s) {
        return i && Xn(s, Vt(s), i);
      }
      function N0(i, s) {
        return i && Xn(s, sn(s), i);
      }
      function dr(i, s, c) {
        s == "__proto__" && So ? So(i, s, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : i[s] = c;
      }
      function Ul(i, s) {
        for (var c = -1, f = s.length, y = ie(f), T = i == null; ++c < f; )
          y[c] = T ? n : Tu(i, s[c]);
        return y;
      }
      function ii(i, s, c) {
        return i === i && (c !== n && (i = i <= c ? i : c), s !== n && (i = i >= s ? i : s)), i;
      }
      function kn(i, s, c, f, y, T) {
        var A, W = s & m, G = s & x, de = s & w;
        if (c && (A = y ? c(i, f, y, T) : c(i)), A !== n)
          return A;
        if (!St(i))
          return i;
        var pe = Ve(i);
        if (pe) {
          if (A = _1(i), !W)
            return an(i, A);
        } else {
          var me = Gt(i), Te = me == fe || me == Re;
          if (Nr(i))
            return Wp(i, W);
          if (me == Ke || me == ye || Te && !y) {
            if (A = G || Te ? {} : ah(i), !W)
              return G ? d1(i, N0(A, i)) : c1(i, gp(A, i));
          } else {
            if (!xt[me])
              return y ? i : {};
            A = E1(i, me, W);
          }
        }
        T || (T = new Ln());
        var De = T.get(i);
        if (De)
          return De;
        T.set(i, A), Nh(i) ? i.forEach(function(Me) {
          A.add(kn(Me, s, c, Me, i, T));
        }) : Ih(i) && i.forEach(function(Me, Ge) {
          A.set(Ge, kn(Me, s, c, Ge, i, T));
        });
        var Ie = de ? G ? du : cu : G ? sn : Vt, He = pe ? n : Ie(i);
        return On(He || i, function(Me, Ge) {
          He && (Ge = Me, Me = i[Ge]), Ea(A, Ge, kn(Me, s, c, Ge, i, T));
        }), A;
      }
      function j0(i) {
        var s = Vt(i);
        return function(c) {
          return vp(c, i, s);
        };
      }
      function vp(i, s, c) {
        var f = c.length;
        if (i == null)
          return !f;
        for (i = gt(i); f--; ) {
          var y = c[f], T = s[y], A = i[y];
          if (A === n && !(y in i) || !T(A))
            return !1;
        }
        return !0;
      }
      function yp(i, s, c) {
        if (typeof i != "function")
          throw new Sn(l);
        return Pa(function() {
          i.apply(n, c);
        }, s);
      }
      function Ca(i, s, c, f) {
        var y = -1, T = go, A = !0, W = i.length, G = [], de = s.length;
        if (!W)
          return G;
        c && (s = Ot(s, vn(c))), f ? (T = Al, A = !1) : s.length >= a && (T = va, A = !1, s = new ri(s));
        e:
          for (; ++y < W; ) {
            var pe = i[y], me = c == null ? pe : c(pe);
            if (pe = f || pe !== 0 ? pe : 0, A && me === me) {
              for (var Te = de; Te--; )
                if (s[Te] === me)
                  continue e;
              G.push(pe);
            } else T(s, me, f) || G.push(pe);
          }
        return G;
      }
      var Pr = Up(Gn), xp = Up(ql, !0);
      function R0(i, s) {
        var c = !0;
        return Pr(i, function(f, y, T) {
          return c = !!s(f, y, T), c;
        }), c;
      }
      function No(i, s, c) {
        for (var f = -1, y = i.length; ++f < y; ) {
          var T = i[f], A = s(T);
          if (A != null && (W === n ? A === A && !xn(A) : c(A, W)))
            var W = A, G = T;
        }
        return G;
      }
      function $0(i, s, c, f) {
        var y = i.length;
        for (c = ze(c), c < 0 && (c = -c > y ? 0 : y + c), f = f === n || f > y ? y : ze(f), f < 0 && (f += y), f = c > f ? 0 : Rh(f); c < f; )
          i[c++] = s;
        return i;
      }
      function bp(i, s) {
        var c = [];
        return Pr(i, function(f, y, T) {
          s(f, y, T) && c.push(f);
        }), c;
      }
      function Ht(i, s, c, f, y) {
        var T = -1, A = i.length;
        for (c || (c = T1), y || (y = []); ++T < A; ) {
          var W = i[T];
          s > 0 && c(W) ? s > 1 ? Ht(W, s - 1, c, f, y) : Sr(y, W) : f || (y[y.length] = W);
        }
        return y;
      }
      var Yl = Yp(), wp = Yp(!0);
      function Gn(i, s) {
        return i && Yl(i, s, Vt);
      }
      function ql(i, s) {
        return i && wp(i, s, Vt);
      }
      function jo(i, s) {
        return Or(s, function(c) {
          return mr(i[c]);
        });
      }
      function ai(i, s) {
        s = Ir(s, i);
        for (var c = 0, f = s.length; i != null && c < f; )
          i = i[Zn(s[c++])];
        return c && c == f ? i : n;
      }
      function _p(i, s, c) {
        var f = s(i);
        return Ve(i) ? f : Sr(f, c(i));
      }
      function Zt(i) {
        return i == null ? i === n ? H : rt : ti && ti in gt(i) ? x1(i) : I1(i);
      }
      function Kl(i, s) {
        return i > s;
      }
      function F0(i, s) {
        return i != null && dt.call(i, s);
      }
      function L0(i, s) {
        return i != null && s in gt(i);
      }
      function W0(i, s, c) {
        return i >= Kt(s, c) && i < Lt(s, c);
      }
      function Gl(i, s, c) {
        for (var f = c ? Al : go, y = i[0].length, T = i.length, A = T, W = ie(T), G = 1 / 0, de = []; A--; ) {
          var pe = i[A];
          A && s && (pe = Ot(pe, vn(s))), G = Kt(pe.length, G), W[A] = !c && (s || y >= 120 && pe.length >= 120) ? new ri(A && pe) : n;
        }
        pe = i[0];
        var me = -1, Te = W[0];
        e:
          for (; ++me < y && de.length < G; ) {
            var De = pe[me], Ie = s ? s(De) : De;
            if (De = c || De !== 0 ? De : 0, !(Te ? va(Te, Ie) : f(de, Ie, c))) {
              for (A = T; --A; ) {
                var He = W[A];
                if (!(He ? va(He, Ie) : f(i[A], Ie, c)))
                  continue e;
              }
              Te && Te.push(Ie), de.push(De);
            }
          }
        return de;
      }
      function V0(i, s, c, f) {
        return Gn(i, function(y, T, A) {
          s(f, c(y), T, A);
        }), f;
      }
      function Ta(i, s, c) {
        s = Ir(s, i), i = uh(i, s);
        var f = i == null ? i : i[Zn(An(s))];
        return f == null ? n : gn(f, i, c);
      }
      function Ep(i) {
        return kt(i) && Zt(i) == ye;
      }
      function z0(i) {
        return kt(i) && Zt(i) == oe;
      }
      function B0(i) {
        return kt(i) && Zt(i) == Ce;
      }
      function Oa(i, s, c, f, y) {
        return i === s ? !0 : i == null || s == null || !kt(i) && !kt(s) ? i !== i && s !== s : H0(i, s, c, f, Oa, y);
      }
      function H0(i, s, c, f, y, T) {
        var A = Ve(i), W = Ve(s), G = A ? ge : Gt(i), de = W ? ge : Gt(s);
        G = G == ye ? Ke : G, de = de == ye ? Ke : de;
        var pe = G == Ke, me = de == Ke, Te = G == de;
        if (Te && Nr(i)) {
          if (!Nr(s))
            return !1;
          A = !0, pe = !1;
        }
        if (Te && !pe)
          return T || (T = new Ln()), A || Fi(i) ? nh(i, s, c, f, y, T) : v1(i, s, G, c, f, y, T);
        if (!(c & O)) {
          var De = pe && dt.call(i, "__wrapped__"), Ie = me && dt.call(s, "__wrapped__");
          if (De || Ie) {
            var He = De ? i.value() : i, Me = Ie ? s.value() : s;
            return T || (T = new Ln()), y(He, Me, c, f, T);
          }
        }
        return Te ? (T || (T = new Ln()), y1(i, s, c, f, y, T)) : !1;
      }
      function U0(i) {
        return kt(i) && Gt(i) == ve;
      }
      function Xl(i, s, c, f) {
        var y = c.length, T = y, A = !f;
        if (i == null)
          return !T;
        for (i = gt(i); y--; ) {
          var W = c[y];
          if (A && W[2] ? W[1] !== i[W[0]] : !(W[0] in i))
            return !1;
        }
        for (; ++y < T; ) {
          W = c[y];
          var G = W[0], de = i[G], pe = W[1];
          if (A && W[2]) {
            if (de === n && !(G in i))
              return !1;
          } else {
            var me = new Ln();
            if (f)
              var Te = f(de, pe, G, i, s, me);
            if (!(Te === n ? Oa(pe, de, O | _, f, me) : Te))
              return !1;
          }
        }
        return !0;
      }
      function Cp(i) {
        if (!St(i) || S1(i))
          return !1;
        var s = mr(i) ? U_ : jw;
        return s.test(si(i));
      }
      function Y0(i) {
        return kt(i) && Zt(i) == re;
      }
      function q0(i) {
        return kt(i) && Gt(i) == g;
      }
      function K0(i) {
        return kt(i) && Jo(i.length) && !!_t[Zt(i)];
      }
      function Tp(i) {
        return typeof i == "function" ? i : i == null ? ln : typeof i == "object" ? Ve(i) ? Dp(i[0], i[1]) : Sp(i) : qh(i);
      }
      function Zl(i) {
        if (!ka(i))
          return Z_(i);
        var s = [];
        for (var c in gt(i))
          dt.call(i, c) && c != "constructor" && s.push(c);
        return s;
      }
      function G0(i) {
        if (!St(i))
          return A1(i);
        var s = ka(i), c = [];
        for (var f in i)
          f == "constructor" && (s || !dt.call(i, f)) || c.push(f);
        return c;
      }
      function Jl(i, s) {
        return i < s;
      }
      function Op(i, s) {
        var c = -1, f = on(i) ? ie(i.length) : [];
        return Pr(i, function(y, T, A) {
          f[++c] = s(y, T, A);
        }), f;
      }
      function Sp(i) {
        var s = pu(i);
        return s.length == 1 && s[0][2] ? sh(s[0][0], s[0][1]) : function(c) {
          return c === i || Xl(c, i, s);
        };
      }
      function Dp(i, s) {
        return mu(i) && oh(s) ? sh(Zn(i), s) : function(c) {
          var f = Tu(c, i);
          return f === n && f === s ? Ou(c, i) : Oa(s, f, O | _);
        };
      }
      function Ro(i, s, c, f, y) {
        i !== s && Yl(s, function(T, A) {
          if (y || (y = new Ln()), St(T))
            X0(i, s, A, c, Ro, f, y);
          else {
            var W = f ? f(vu(i, A), T, A + "", i, s, y) : n;
            W === n && (W = T), Hl(i, A, W);
          }
        }, sn);
      }
      function X0(i, s, c, f, y, T, A) {
        var W = vu(i, c), G = vu(s, c), de = A.get(G);
        if (de) {
          Hl(i, c, de);
          return;
        }
        var pe = T ? T(W, G, c + "", i, s, A) : n, me = pe === n;
        if (me) {
          var Te = Ve(G), De = !Te && Nr(G), Ie = !Te && !De && Fi(G);
          pe = G, Te || De || Ie ? Ve(W) ? pe = W : It(W) ? pe = an(W) : De ? (me = !1, pe = Wp(G, !0)) : Ie ? (me = !1, pe = Vp(G, !0)) : pe = [] : Aa(G) || li(G) ? (pe = W, li(W) ? pe = $h(W) : (!St(W) || mr(W)) && (pe = ah(G))) : me = !1;
        }
        me && (A.set(G, pe), y(pe, G, f, T, A), A.delete(G)), Hl(i, c, pe);
      }
      function kp(i, s) {
        var c = i.length;
        if (c)
          return s += s < 0 ? c : 0, hr(s, c) ? i[s] : n;
      }
      function Pp(i, s, c) {
        s.length ? s = Ot(s, function(T) {
          return Ve(T) ? function(A) {
            return ai(A, T.length === 1 ? T[0] : T);
          } : T;
        }) : s = [ln];
        var f = -1;
        s = Ot(s, vn(Ae()));
        var y = Op(i, function(T, A, W) {
          var G = Ot(s, function(de) {
            return de(T);
          });
          return { criteria: G, index: ++f, value: T };
        });
        return E_(y, function(T, A) {
          return u1(T, A, c);
        });
      }
      function Z0(i, s) {
        return Ap(i, s, function(c, f) {
          return Ou(i, f);
        });
      }
      function Ap(i, s, c) {
        for (var f = -1, y = s.length, T = {}; ++f < y; ) {
          var A = s[f], W = ai(i, A);
          c(W, A) && Sa(T, Ir(A, i), W);
        }
        return T;
      }
      function J0(i) {
        return function(s) {
          return ai(s, i);
        };
      }
      function Ql(i, s, c, f) {
        var y = f ? __ : Si, T = -1, A = s.length, W = i;
        for (i === s && (s = an(s)), c && (W = Ot(i, vn(c))); ++T < A; )
          for (var G = 0, de = s[T], pe = c ? c(de) : de; (G = y(W, pe, G, f)) > -1; )
            W !== i && Oo.call(W, G, 1), Oo.call(i, G, 1);
        return i;
      }
      function Ip(i, s) {
        for (var c = i ? s.length : 0, f = c - 1; c--; ) {
          var y = s[c];
          if (c == f || y !== T) {
            var T = y;
            hr(y) ? Oo.call(i, y, 1) : ru(i, y);
          }
        }
        return i;
      }
      function eu(i, s) {
        return i + ko(fp() * (s - i + 1));
      }
      function Q0(i, s, c, f) {
        for (var y = -1, T = Lt(Do((s - i) / (c || 1)), 0), A = ie(T); T--; )
          A[f ? T : ++y] = i, i += c;
        return A;
      }
      function tu(i, s) {
        var c = "";
        if (!i || s < 1 || s > I)
          return c;
        do
          s % 2 && (c += i), s = ko(s / 2), s && (i += i);
        while (s);
        return c;
      }
      function Ye(i, s) {
        return yu(lh(i, s, ln), i + "");
      }
      function e1(i) {
        return mp(Li(i));
      }
      function t1(i, s) {
        var c = Li(i);
        return Yo(c, ii(s, 0, c.length));
      }
      function Sa(i, s, c, f) {
        if (!St(i))
          return i;
        s = Ir(s, i);
        for (var y = -1, T = s.length, A = T - 1, W = i; W != null && ++y < T; ) {
          var G = Zn(s[y]), de = c;
          if (G === "__proto__" || G === "constructor" || G === "prototype")
            return i;
          if (y != A) {
            var pe = W[G];
            de = f ? f(pe, G, W) : n, de === n && (de = St(pe) ? pe : hr(s[y + 1]) ? [] : {});
          }
          Ea(W, G, de), W = W[G];
        }
        return i;
      }
      var Mp = Po ? function(i, s) {
        return Po.set(i, s), i;
      } : ln, n1 = So ? function(i, s) {
        return So(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Du(s),
          writable: !0
        });
      } : ln;
      function r1(i) {
        return Yo(Li(i));
      }
      function Pn(i, s, c) {
        var f = -1, y = i.length;
        s < 0 && (s = -s > y ? 0 : y + s), c = c > y ? y : c, c < 0 && (c += y), y = s > c ? 0 : c - s >>> 0, s >>>= 0;
        for (var T = ie(y); ++f < y; )
          T[f] = i[f + s];
        return T;
      }
      function i1(i, s) {
        var c;
        return Pr(i, function(f, y, T) {
          return c = s(f, y, T), !c;
        }), !!c;
      }
      function $o(i, s, c) {
        var f = 0, y = i == null ? f : i.length;
        if (typeof s == "number" && s === s && y <= he) {
          for (; f < y; ) {
            var T = f + y >>> 1, A = i[T];
            A !== null && !xn(A) && (c ? A <= s : A < s) ? f = T + 1 : y = T;
          }
          return y;
        }
        return nu(i, s, ln, c);
      }
      function nu(i, s, c, f) {
        var y = 0, T = i == null ? 0 : i.length;
        if (T === 0)
          return 0;
        s = c(s);
        for (var A = s !== s, W = s === null, G = xn(s), de = s === n; y < T; ) {
          var pe = ko((y + T) / 2), me = c(i[pe]), Te = me !== n, De = me === null, Ie = me === me, He = xn(me);
          if (A)
            var Me = f || Ie;
          else de ? Me = Ie && (f || Te) : W ? Me = Ie && Te && (f || !De) : G ? Me = Ie && Te && !De && (f || !He) : De || He ? Me = !1 : Me = f ? me <= s : me < s;
          Me ? y = pe + 1 : T = pe;
        }
        return Kt(T, ue);
      }
      function Np(i, s) {
        for (var c = -1, f = i.length, y = 0, T = []; ++c < f; ) {
          var A = i[c], W = s ? s(A) : A;
          if (!c || !Wn(W, G)) {
            var G = W;
            T[y++] = A === 0 ? 0 : A;
          }
        }
        return T;
      }
      function jp(i) {
        return typeof i == "number" ? i : xn(i) ? M : +i;
      }
      function yn(i) {
        if (typeof i == "string")
          return i;
        if (Ve(i))
          return Ot(i, yn) + "";
        if (xn(i))
          return pp ? pp.call(i) : "";
        var s = i + "";
        return s == "0" && 1 / i == -1 / 0 ? "-0" : s;
      }
      function Ar(i, s, c) {
        var f = -1, y = go, T = i.length, A = !0, W = [], G = W;
        if (c)
          A = !1, y = Al;
        else if (T >= a) {
          var de = s ? null : m1(i);
          if (de)
            return yo(de);
          A = !1, y = va, G = new ri();
        } else
          G = s ? [] : W;
        e:
          for (; ++f < T; ) {
            var pe = i[f], me = s ? s(pe) : pe;
            if (pe = c || pe !== 0 ? pe : 0, A && me === me) {
              for (var Te = G.length; Te--; )
                if (G[Te] === me)
                  continue e;
              s && G.push(me), W.push(pe);
            } else y(G, me, c) || (G !== W && G.push(me), W.push(pe));
          }
        return W;
      }
      function ru(i, s) {
        return s = Ir(s, i), i = uh(i, s), i == null || delete i[Zn(An(s))];
      }
      function Rp(i, s, c, f) {
        return Sa(i, s, c(ai(i, s)), f);
      }
      function Fo(i, s, c, f) {
        for (var y = i.length, T = f ? y : -1; (f ? T-- : ++T < y) && s(i[T], T, i); )
          ;
        return c ? Pn(i, f ? 0 : T, f ? T + 1 : y) : Pn(i, f ? T + 1 : 0, f ? y : T);
      }
      function $p(i, s) {
        var c = i;
        return c instanceof Xe && (c = c.value()), Il(s, function(f, y) {
          return y.func.apply(y.thisArg, Sr([f], y.args));
        }, c);
      }
      function iu(i, s, c) {
        var f = i.length;
        if (f < 2)
          return f ? Ar(i[0]) : [];
        for (var y = -1, T = ie(f); ++y < f; )
          for (var A = i[y], W = -1; ++W < f; )
            W != y && (T[y] = Ca(T[y] || A, i[W], s, c));
        return Ar(Ht(T, 1), s, c);
      }
      function Fp(i, s, c) {
        for (var f = -1, y = i.length, T = s.length, A = {}; ++f < y; ) {
          var W = f < T ? s[f] : n;
          c(A, i[f], W);
        }
        return A;
      }
      function au(i) {
        return It(i) ? i : [];
      }
      function ou(i) {
        return typeof i == "function" ? i : ln;
      }
      function Ir(i, s) {
        return Ve(i) ? i : mu(i, s) ? [i] : ph(at(i));
      }
      var a1 = Ye;
      function Mr(i, s, c) {
        var f = i.length;
        return c = c === n ? f : c, !s && c >= f ? i : Pn(i, s, c);
      }
      var Lp = Y_ || function(i) {
        return Bt.clearTimeout(i);
      };
      function Wp(i, s) {
        if (s)
          return i.slice();
        var c = i.length, f = sp ? sp(c) : new i.constructor(c);
        return i.copy(f), f;
      }
      function su(i) {
        var s = new i.constructor(i.byteLength);
        return new Co(s).set(new Co(i)), s;
      }
      function o1(i, s) {
        var c = s ? su(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.byteLength);
      }
      function s1(i) {
        var s = new i.constructor(i.source, Ef.exec(i));
        return s.lastIndex = i.lastIndex, s;
      }
      function l1(i) {
        return _a ? gt(_a.call(i)) : {};
      }
      function Vp(i, s) {
        var c = s ? su(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.length);
      }
      function zp(i, s) {
        if (i !== s) {
          var c = i !== n, f = i === null, y = i === i, T = xn(i), A = s !== n, W = s === null, G = s === s, de = xn(s);
          if (!W && !de && !T && i > s || T && A && G && !W && !de || f && A && G || !c && G || !y)
            return 1;
          if (!f && !T && !de && i < s || de && c && y && !f && !T || W && c && y || !A && y || !G)
            return -1;
        }
        return 0;
      }
      function u1(i, s, c) {
        for (var f = -1, y = i.criteria, T = s.criteria, A = y.length, W = c.length; ++f < A; ) {
          var G = zp(y[f], T[f]);
          if (G) {
            if (f >= W)
              return G;
            var de = c[f];
            return G * (de == "desc" ? -1 : 1);
          }
        }
        return i.index - s.index;
      }
      function Bp(i, s, c, f) {
        for (var y = -1, T = i.length, A = c.length, W = -1, G = s.length, de = Lt(T - A, 0), pe = ie(G + de), me = !f; ++W < G; )
          pe[W] = s[W];
        for (; ++y < A; )
          (me || y < T) && (pe[c[y]] = i[y]);
        for (; de--; )
          pe[W++] = i[y++];
        return pe;
      }
      function Hp(i, s, c, f) {
        for (var y = -1, T = i.length, A = -1, W = c.length, G = -1, de = s.length, pe = Lt(T - W, 0), me = ie(pe + de), Te = !f; ++y < pe; )
          me[y] = i[y];
        for (var De = y; ++G < de; )
          me[De + G] = s[G];
        for (; ++A < W; )
          (Te || y < T) && (me[De + c[A]] = i[y++]);
        return me;
      }
      function an(i, s) {
        var c = -1, f = i.length;
        for (s || (s = ie(f)); ++c < f; )
          s[c] = i[c];
        return s;
      }
      function Xn(i, s, c, f) {
        var y = !c;
        c || (c = {});
        for (var T = -1, A = s.length; ++T < A; ) {
          var W = s[T], G = f ? f(c[W], i[W], W, c, i) : n;
          G === n && (G = i[W]), y ? dr(c, W, G) : Ea(c, W, G);
        }
        return c;
      }
      function c1(i, s) {
        return Xn(i, hu(i), s);
      }
      function d1(i, s) {
        return Xn(i, rh(i), s);
      }
      function Lo(i, s) {
        return function(c, f) {
          var y = Ve(c) ? g_ : M0, T = s ? s() : {};
          return y(c, i, Ae(f, 2), T);
        };
      }
      function ji(i) {
        return Ye(function(s, c) {
          var f = -1, y = c.length, T = y > 1 ? c[y - 1] : n, A = y > 2 ? c[2] : n;
          for (T = i.length > 3 && typeof T == "function" ? (y--, T) : n, A && Jt(c[0], c[1], A) && (T = y < 3 ? n : T, y = 1), s = gt(s); ++f < y; ) {
            var W = c[f];
            W && i(s, W, f, T);
          }
          return s;
        });
      }
      function Up(i, s) {
        return function(c, f) {
          if (c == null)
            return c;
          if (!on(c))
            return i(c, f);
          for (var y = c.length, T = s ? y : -1, A = gt(c); (s ? T-- : ++T < y) && f(A[T], T, A) !== !1; )
            ;
          return c;
        };
      }
      function Yp(i) {
        return function(s, c, f) {
          for (var y = -1, T = gt(s), A = f(s), W = A.length; W--; ) {
            var G = A[i ? W : ++y];
            if (c(T[G], G, T) === !1)
              break;
          }
          return s;
        };
      }
      function f1(i, s, c) {
        var f = s & b, y = Da(i);
        function T() {
          var A = this && this !== Bt && this instanceof T ? y : i;
          return A.apply(f ? c : this, arguments);
        }
        return T;
      }
      function qp(i) {
        return function(s) {
          s = at(s);
          var c = Di(s) ? Fn(s) : n, f = c ? c[0] : s.charAt(0), y = c ? Mr(c, 1).join("") : s.slice(1);
          return f[i]() + y;
        };
      }
      function Ri(i) {
        return function(s) {
          return Il(Uh(Hh(s).replace(n_, "")), i, "");
        };
      }
      function Da(i) {
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return new i();
            case 1:
              return new i(s[0]);
            case 2:
              return new i(s[0], s[1]);
            case 3:
              return new i(s[0], s[1], s[2]);
            case 4:
              return new i(s[0], s[1], s[2], s[3]);
            case 5:
              return new i(s[0], s[1], s[2], s[3], s[4]);
            case 6:
              return new i(s[0], s[1], s[2], s[3], s[4], s[5]);
            case 7:
              return new i(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
          }
          var c = Ni(i.prototype), f = i.apply(c, s);
          return St(f) ? f : c;
        };
      }
      function p1(i, s, c) {
        var f = Da(i);
        function y() {
          for (var T = arguments.length, A = ie(T), W = T, G = $i(y); W--; )
            A[W] = arguments[W];
          var de = T < 3 && A[0] !== G && A[T - 1] !== G ? [] : Dr(A, G);
          if (T -= de.length, T < c)
            return Jp(
              i,
              s,
              Wo,
              y.placeholder,
              n,
              A,
              de,
              n,
              n,
              c - T
            );
          var pe = this && this !== Bt && this instanceof y ? f : i;
          return gn(pe, this, A);
        }
        return y;
      }
      function Kp(i) {
        return function(s, c, f) {
          var y = gt(s);
          if (!on(s)) {
            var T = Ae(c, 3);
            s = Vt(s), c = function(W) {
              return T(y[W], W, y);
            };
          }
          var A = i(s, c, f);
          return A > -1 ? y[T ? s[A] : A] : n;
        };
      }
      function Gp(i) {
        return pr(function(s) {
          var c = s.length, f = c, y = Dn.prototype.thru;
          for (i && s.reverse(); f--; ) {
            var T = s[f];
            if (typeof T != "function")
              throw new Sn(l);
            if (y && !A && Ho(T) == "wrapper")
              var A = new Dn([], !0);
          }
          for (f = A ? f : c; ++f < c; ) {
            T = s[f];
            var W = Ho(T), G = W == "wrapper" ? fu(T) : n;
            G && gu(G[0]) && G[1] == (J | k | S | ne) && !G[4].length && G[9] == 1 ? A = A[Ho(G[0])].apply(A, G[3]) : A = T.length == 1 && gu(T) ? A[W]() : A.thru(T);
          }
          return function() {
            var de = arguments, pe = de[0];
            if (A && de.length == 1 && Ve(pe))
              return A.plant(pe).value();
            for (var me = 0, Te = c ? s[me].apply(this, de) : pe; ++me < c; )
              Te = s[me].call(this, Te);
            return Te;
          };
        });
      }
      function Wo(i, s, c, f, y, T, A, W, G, de) {
        var pe = s & J, me = s & b, Te = s & P, De = s & (k | D), Ie = s & V, He = Te ? n : Da(i);
        function Me() {
          for (var Ge = arguments.length, Je = ie(Ge), bn = Ge; bn--; )
            Je[bn] = arguments[bn];
          if (De)
            var Qt = $i(Me), wn = T_(Je, Qt);
          if (f && (Je = Bp(Je, f, y, De)), T && (Je = Hp(Je, T, A, De)), Ge -= wn, De && Ge < de) {
            var Mt = Dr(Je, Qt);
            return Jp(
              i,
              s,
              Wo,
              Me.placeholder,
              c,
              Je,
              Mt,
              W,
              G,
              de - Ge
            );
          }
          var Vn = me ? c : this, vr = Te ? Vn[i] : i;
          return Ge = Je.length, W ? Je = M1(Je, W) : Ie && Ge > 1 && Je.reverse(), pe && G < Ge && (Je.length = G), this && this !== Bt && this instanceof Me && (vr = He || Da(vr)), vr.apply(Vn, Je);
        }
        return Me;
      }
      function Xp(i, s) {
        return function(c, f) {
          return V0(c, i, s(f), {});
        };
      }
      function Vo(i, s) {
        return function(c, f) {
          var y;
          if (c === n && f === n)
            return s;
          if (c !== n && (y = c), f !== n) {
            if (y === n)
              return f;
            typeof c == "string" || typeof f == "string" ? (c = yn(c), f = yn(f)) : (c = jp(c), f = jp(f)), y = i(c, f);
          }
          return y;
        };
      }
      function lu(i) {
        return pr(function(s) {
          return s = Ot(s, vn(Ae())), Ye(function(c) {
            var f = this;
            return i(s, function(y) {
              return gn(y, f, c);
            });
          });
        });
      }
      function zo(i, s) {
        s = s === n ? " " : yn(s);
        var c = s.length;
        if (c < 2)
          return c ? tu(s, i) : s;
        var f = tu(s, Do(i / ki(s)));
        return Di(s) ? Mr(Fn(f), 0, i).join("") : f.slice(0, i);
      }
      function h1(i, s, c, f) {
        var y = s & b, T = Da(i);
        function A() {
          for (var W = -1, G = arguments.length, de = -1, pe = f.length, me = ie(pe + G), Te = this && this !== Bt && this instanceof A ? T : i; ++de < pe; )
            me[de] = f[de];
          for (; G--; )
            me[de++] = arguments[++W];
          return gn(Te, y ? c : this, me);
        }
        return A;
      }
      function Zp(i) {
        return function(s, c, f) {
          return f && typeof f != "number" && Jt(s, c, f) && (c = f = n), s = gr(s), c === n ? (c = s, s = 0) : c = gr(c), f = f === n ? s < c ? 1 : -1 : gr(f), Q0(s, c, f, i);
        };
      }
      function Bo(i) {
        return function(s, c) {
          return typeof s == "string" && typeof c == "string" || (s = In(s), c = In(c)), i(s, c);
        };
      }
      function Jp(i, s, c, f, y, T, A, W, G, de) {
        var pe = s & k, me = pe ? A : n, Te = pe ? n : A, De = pe ? T : n, Ie = pe ? n : T;
        s |= pe ? S : Z, s &= ~(pe ? Z : S), s & C || (s &= -4);
        var He = [
          i,
          s,
          y,
          De,
          me,
          Ie,
          Te,
          W,
          G,
          de
        ], Me = c.apply(n, He);
        return gu(i) && ch(Me, He), Me.placeholder = f, dh(Me, i, s);
      }
      function uu(i) {
        var s = Ft[i];
        return function(c, f) {
          if (c = In(c), f = f == null ? 0 : Kt(ze(f), 292), f && dp(c)) {
            var y = (at(c) + "e").split("e"), T = s(y[0] + "e" + (+y[1] + f));
            return y = (at(T) + "e").split("e"), +(y[0] + "e" + (+y[1] - f));
          }
          return s(c);
        };
      }
      var m1 = Ii && 1 / yo(new Ii([, -0]))[1] == j ? function(i) {
        return new Ii(i);
      } : Au;
      function Qp(i) {
        return function(s) {
          var c = Gt(s);
          return c == ve ? Ll(s) : c == g ? I_(s) : C_(s, i(s));
        };
      }
      function fr(i, s, c, f, y, T, A, W) {
        var G = s & P;
        if (!G && typeof i != "function")
          throw new Sn(l);
        var de = f ? f.length : 0;
        if (de || (s &= -97, f = y = n), A = A === n ? A : Lt(ze(A), 0), W = W === n ? W : ze(W), de -= y ? y.length : 0, s & Z) {
          var pe = f, me = y;
          f = y = n;
        }
        var Te = G ? n : fu(i), De = [
          i,
          s,
          c,
          f,
          y,
          pe,
          me,
          T,
          A,
          W
        ];
        if (Te && P1(De, Te), i = De[0], s = De[1], c = De[2], f = De[3], y = De[4], W = De[9] = De[9] === n ? G ? 0 : i.length : Lt(De[9] - de, 0), !W && s & (k | D) && (s &= -25), !s || s == b)
          var Ie = f1(i, s, c);
        else s == k || s == D ? Ie = p1(i, s, W) : (s == S || s == (b | S)) && !y.length ? Ie = h1(i, s, c, f) : Ie = Wo.apply(n, De);
        var He = Te ? Mp : ch;
        return dh(He(Ie, De), i, s);
      }
      function eh(i, s, c, f) {
        return i === n || Wn(i, Ai[c]) && !dt.call(f, c) ? s : i;
      }
      function th(i, s, c, f, y, T) {
        return St(i) && St(s) && (T.set(s, i), Ro(i, s, n, th, T), T.delete(s)), i;
      }
      function g1(i) {
        return Aa(i) ? n : i;
      }
      function nh(i, s, c, f, y, T) {
        var A = c & O, W = i.length, G = s.length;
        if (W != G && !(A && G > W))
          return !1;
        var de = T.get(i), pe = T.get(s);
        if (de && pe)
          return de == s && pe == i;
        var me = -1, Te = !0, De = c & _ ? new ri() : n;
        for (T.set(i, s), T.set(s, i); ++me < W; ) {
          var Ie = i[me], He = s[me];
          if (f)
            var Me = A ? f(He, Ie, me, s, i, T) : f(Ie, He, me, i, s, T);
          if (Me !== n) {
            if (Me)
              continue;
            Te = !1;
            break;
          }
          if (De) {
            if (!Ml(s, function(Ge, Je) {
              if (!va(De, Je) && (Ie === Ge || y(Ie, Ge, c, f, T)))
                return De.push(Je);
            })) {
              Te = !1;
              break;
            }
          } else if (!(Ie === He || y(Ie, He, c, f, T))) {
            Te = !1;
            break;
          }
        }
        return T.delete(i), T.delete(s), Te;
      }
      function v1(i, s, c, f, y, T, A) {
        switch (c) {
          case Ne:
            if (i.byteLength != s.byteLength || i.byteOffset != s.byteOffset)
              return !1;
            i = i.buffer, s = s.buffer;
          case oe:
            return !(i.byteLength != s.byteLength || !T(new Co(i), new Co(s)));
          case we:
          case Ce:
          case et:
            return Wn(+i, +s);
          case Se:
            return i.name == s.name && i.message == s.message;
          case re:
          case F:
            return i == s + "";
          case ve:
            var W = Ll;
          case g:
            var G = f & O;
            if (W || (W = yo), i.size != s.size && !G)
              return !1;
            var de = A.get(i);
            if (de)
              return de == s;
            f |= _, A.set(i, s);
            var pe = nh(W(i), W(s), f, y, T, A);
            return A.delete(i), pe;
          case $:
            if (_a)
              return _a.call(i) == _a.call(s);
        }
        return !1;
      }
      function y1(i, s, c, f, y, T) {
        var A = c & O, W = cu(i), G = W.length, de = cu(s), pe = de.length;
        if (G != pe && !A)
          return !1;
        for (var me = G; me--; ) {
          var Te = W[me];
          if (!(A ? Te in s : dt.call(s, Te)))
            return !1;
        }
        var De = T.get(i), Ie = T.get(s);
        if (De && Ie)
          return De == s && Ie == i;
        var He = !0;
        T.set(i, s), T.set(s, i);
        for (var Me = A; ++me < G; ) {
          Te = W[me];
          var Ge = i[Te], Je = s[Te];
          if (f)
            var bn = A ? f(Je, Ge, Te, s, i, T) : f(Ge, Je, Te, i, s, T);
          if (!(bn === n ? Ge === Je || y(Ge, Je, c, f, T) : bn)) {
            He = !1;
            break;
          }
          Me || (Me = Te == "constructor");
        }
        if (He && !Me) {
          var Qt = i.constructor, wn = s.constructor;
          Qt != wn && "constructor" in i && "constructor" in s && !(typeof Qt == "function" && Qt instanceof Qt && typeof wn == "function" && wn instanceof wn) && (He = !1);
        }
        return T.delete(i), T.delete(s), He;
      }
      function pr(i) {
        return yu(lh(i, n, vh), i + "");
      }
      function cu(i) {
        return _p(i, Vt, hu);
      }
      function du(i) {
        return _p(i, sn, rh);
      }
      var fu = Po ? function(i) {
        return Po.get(i);
      } : Au;
      function Ho(i) {
        for (var s = i.name + "", c = Mi[s], f = dt.call(Mi, s) ? c.length : 0; f--; ) {
          var y = c[f], T = y.func;
          if (T == null || T == i)
            return y.name;
        }
        return s;
      }
      function $i(i) {
        var s = dt.call(E, "placeholder") ? E : i;
        return s.placeholder;
      }
      function Ae() {
        var i = E.iteratee || ku;
        return i = i === ku ? Tp : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Uo(i, s) {
        var c = i.__data__;
        return O1(s) ? c[typeof s == "string" ? "string" : "hash"] : c.map;
      }
      function pu(i) {
        for (var s = Vt(i), c = s.length; c--; ) {
          var f = s[c], y = i[f];
          s[c] = [f, y, oh(y)];
        }
        return s;
      }
      function oi(i, s) {
        var c = k_(i, s);
        return Cp(c) ? c : n;
      }
      function x1(i) {
        var s = dt.call(i, ti), c = i[ti];
        try {
          i[ti] = n;
          var f = !0;
        } catch {
        }
        var y = _o.call(i);
        return f && (s ? i[ti] = c : delete i[ti]), y;
      }
      var hu = Vl ? function(i) {
        return i == null ? [] : (i = gt(i), Or(Vl(i), function(s) {
          return up.call(i, s);
        }));
      } : Iu, rh = Vl ? function(i) {
        for (var s = []; i; )
          Sr(s, hu(i)), i = To(i);
        return s;
      } : Iu, Gt = Zt;
      (zl && Gt(new zl(new ArrayBuffer(1))) != Ne || xa && Gt(new xa()) != ve || Bl && Gt(Bl.resolve()) != N || Ii && Gt(new Ii()) != g || ba && Gt(new ba()) != ae) && (Gt = function(i) {
        var s = Zt(i), c = s == Ke ? i.constructor : n, f = c ? si(c) : "";
        if (f)
          switch (f) {
            case t0:
              return Ne;
            case n0:
              return ve;
            case r0:
              return N;
            case i0:
              return g;
            case a0:
              return ae;
          }
        return s;
      });
      function b1(i, s, c) {
        for (var f = -1, y = c.length; ++f < y; ) {
          var T = c[f], A = T.size;
          switch (T.type) {
            case "drop":
              i += A;
              break;
            case "dropRight":
              s -= A;
              break;
            case "take":
              s = Kt(s, i + A);
              break;
            case "takeRight":
              i = Lt(i, s - A);
              break;
          }
        }
        return { start: i, end: s };
      }
      function w1(i) {
        var s = i.match(Sw);
        return s ? s[1].split(Dw) : [];
      }
      function ih(i, s, c) {
        s = Ir(s, i);
        for (var f = -1, y = s.length, T = !1; ++f < y; ) {
          var A = Zn(s[f]);
          if (!(T = i != null && c(i, A)))
            break;
          i = i[A];
        }
        return T || ++f != y ? T : (y = i == null ? 0 : i.length, !!y && Jo(y) && hr(A, y) && (Ve(i) || li(i)));
      }
      function _1(i) {
        var s = i.length, c = new i.constructor(s);
        return s && typeof i[0] == "string" && dt.call(i, "index") && (c.index = i.index, c.input = i.input), c;
      }
      function ah(i) {
        return typeof i.constructor == "function" && !ka(i) ? Ni(To(i)) : {};
      }
      function E1(i, s, c) {
        var f = i.constructor;
        switch (s) {
          case oe:
            return su(i);
          case we:
          case Ce:
            return new f(+i);
          case Ne:
            return o1(i, c);
          case wt:
          case Fe:
          case mt:
          case At:
          case pt:
          case Rt:
          case it:
          case Jr:
          case Qr:
            return Vp(i, c);
          case ve:
            return new f();
          case et:
          case F:
            return new f(i);
          case re:
            return s1(i);
          case g:
            return new f();
          case $:
            return l1(i);
        }
      }
      function C1(i, s) {
        var c = s.length;
        if (!c)
          return i;
        var f = c - 1;
        return s[f] = (c > 1 ? "& " : "") + s[f], s = s.join(c > 2 ? ", " : " "), i.replace(Ow, `{
/* [wrapped with ` + s + `] */
`);
      }
      function T1(i) {
        return Ve(i) || li(i) || !!(cp && i && i[cp]);
      }
      function hr(i, s) {
        var c = typeof i;
        return s = s ?? I, !!s && (c == "number" || c != "symbol" && $w.test(i)) && i > -1 && i % 1 == 0 && i < s;
      }
      function Jt(i, s, c) {
        if (!St(c))
          return !1;
        var f = typeof s;
        return (f == "number" ? on(c) && hr(s, c.length) : f == "string" && s in c) ? Wn(c[s], i) : !1;
      }
      function mu(i, s) {
        if (Ve(i))
          return !1;
        var c = typeof i;
        return c == "number" || c == "symbol" || c == "boolean" || i == null || xn(i) ? !0 : _w.test(i) || !ww.test(i) || s != null && i in gt(s);
      }
      function O1(i) {
        var s = typeof i;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? i !== "__proto__" : i === null;
      }
      function gu(i) {
        var s = Ho(i), c = E[s];
        if (typeof c != "function" || !(s in Xe.prototype))
          return !1;
        if (i === c)
          return !0;
        var f = fu(c);
        return !!f && i === f[0];
      }
      function S1(i) {
        return !!op && op in i;
      }
      var D1 = bo ? mr : Mu;
      function ka(i) {
        var s = i && i.constructor, c = typeof s == "function" && s.prototype || Ai;
        return i === c;
      }
      function oh(i) {
        return i === i && !St(i);
      }
      function sh(i, s) {
        return function(c) {
          return c == null ? !1 : c[i] === s && (s !== n || i in gt(c));
        };
      }
      function k1(i) {
        var s = Xo(i, function(f) {
          return c.size === p && c.clear(), f;
        }), c = s.cache;
        return s;
      }
      function P1(i, s) {
        var c = i[1], f = s[1], y = c | f, T = y < (b | P | J), A = f == J && c == k || f == J && c == ne && i[7].length <= s[8] || f == (J | ne) && s[7].length <= s[8] && c == k;
        if (!(T || A))
          return i;
        f & b && (i[2] = s[2], y |= c & b ? 0 : C);
        var W = s[3];
        if (W) {
          var G = i[3];
          i[3] = G ? Bp(G, W, s[4]) : W, i[4] = G ? Dr(i[3], h) : s[4];
        }
        return W = s[5], W && (G = i[5], i[5] = G ? Hp(G, W, s[6]) : W, i[6] = G ? Dr(i[5], h) : s[6]), W = s[7], W && (i[7] = W), f & J && (i[8] = i[8] == null ? s[8] : Kt(i[8], s[8])), i[9] == null && (i[9] = s[9]), i[0] = s[0], i[1] = y, i;
      }
      function A1(i) {
        var s = [];
        if (i != null)
          for (var c in gt(i))
            s.push(c);
        return s;
      }
      function I1(i) {
        return _o.call(i);
      }
      function lh(i, s, c) {
        return s = Lt(s === n ? i.length - 1 : s, 0), function() {
          for (var f = arguments, y = -1, T = Lt(f.length - s, 0), A = ie(T); ++y < T; )
            A[y] = f[s + y];
          y = -1;
          for (var W = ie(s + 1); ++y < s; )
            W[y] = f[y];
          return W[s] = c(A), gn(i, this, W);
        };
      }
      function uh(i, s) {
        return s.length < 2 ? i : ai(i, Pn(s, 0, -1));
      }
      function M1(i, s) {
        for (var c = i.length, f = Kt(s.length, c), y = an(i); f--; ) {
          var T = s[f];
          i[f] = hr(T, c) ? y[T] : n;
        }
        return i;
      }
      function vu(i, s) {
        if (!(s === "constructor" && typeof i[s] == "function") && s != "__proto__")
          return i[s];
      }
      var ch = fh(Mp), Pa = K_ || function(i, s) {
        return Bt.setTimeout(i, s);
      }, yu = fh(n1);
      function dh(i, s, c) {
        var f = s + "";
        return yu(i, C1(f, N1(w1(f), c)));
      }
      function fh(i) {
        var s = 0, c = 0;
        return function() {
          var f = J_(), y = z - (f - c);
          if (c = f, y > 0) {
            if (++s >= R)
              return arguments[0];
          } else
            s = 0;
          return i.apply(n, arguments);
        };
      }
      function Yo(i, s) {
        var c = -1, f = i.length, y = f - 1;
        for (s = s === n ? f : s; ++c < s; ) {
          var T = eu(c, y), A = i[T];
          i[T] = i[c], i[c] = A;
        }
        return i.length = s, i;
      }
      var ph = k1(function(i) {
        var s = [];
        return i.charCodeAt(0) === 46 && s.push(""), i.replace(Ew, function(c, f, y, T) {
          s.push(y ? T.replace(Aw, "$1") : f || c);
        }), s;
      });
      function Zn(i) {
        if (typeof i == "string" || xn(i))
          return i;
        var s = i + "";
        return s == "0" && 1 / i == -1 / 0 ? "-0" : s;
      }
      function si(i) {
        if (i != null) {
          try {
            return wo.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function N1(i, s) {
        return On(ce, function(c) {
          var f = "_." + c[0];
          s & c[1] && !go(i, f) && i.push(f);
        }), i.sort();
      }
      function hh(i) {
        if (i instanceof Xe)
          return i.clone();
        var s = new Dn(i.__wrapped__, i.__chain__);
        return s.__actions__ = an(i.__actions__), s.__index__ = i.__index__, s.__values__ = i.__values__, s;
      }
      function j1(i, s, c) {
        (c ? Jt(i, s, c) : s === n) ? s = 1 : s = Lt(ze(s), 0);
        var f = i == null ? 0 : i.length;
        if (!f || s < 1)
          return [];
        for (var y = 0, T = 0, A = ie(Do(f / s)); y < f; )
          A[T++] = Pn(i, y, y += s);
        return A;
      }
      function R1(i) {
        for (var s = -1, c = i == null ? 0 : i.length, f = 0, y = []; ++s < c; ) {
          var T = i[s];
          T && (y[f++] = T);
        }
        return y;
      }
      function $1() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var s = ie(i - 1), c = arguments[0], f = i; f--; )
          s[f - 1] = arguments[f];
        return Sr(Ve(c) ? an(c) : [c], Ht(s, 1));
      }
      var F1 = Ye(function(i, s) {
        return It(i) ? Ca(i, Ht(s, 1, It, !0)) : [];
      }), L1 = Ye(function(i, s) {
        var c = An(s);
        return It(c) && (c = n), It(i) ? Ca(i, Ht(s, 1, It, !0), Ae(c, 2)) : [];
      }), W1 = Ye(function(i, s) {
        var c = An(s);
        return It(c) && (c = n), It(i) ? Ca(i, Ht(s, 1, It, !0), n, c) : [];
      });
      function V1(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (s = c || s === n ? 1 : ze(s), Pn(i, s < 0 ? 0 : s, f)) : [];
      }
      function z1(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (s = c || s === n ? 1 : ze(s), s = f - s, Pn(i, 0, s < 0 ? 0 : s)) : [];
      }
      function B1(i, s) {
        return i && i.length ? Fo(i, Ae(s, 3), !0, !0) : [];
      }
      function H1(i, s) {
        return i && i.length ? Fo(i, Ae(s, 3), !0) : [];
      }
      function U1(i, s, c, f) {
        var y = i == null ? 0 : i.length;
        return y ? (c && typeof c != "number" && Jt(i, s, c) && (c = 0, f = y), $0(i, s, c, f)) : [];
      }
      function mh(i, s, c) {
        var f = i == null ? 0 : i.length;
        if (!f)
          return -1;
        var y = c == null ? 0 : ze(c);
        return y < 0 && (y = Lt(f + y, 0)), vo(i, Ae(s, 3), y);
      }
      function gh(i, s, c) {
        var f = i == null ? 0 : i.length;
        if (!f)
          return -1;
        var y = f - 1;
        return c !== n && (y = ze(c), y = c < 0 ? Lt(f + y, 0) : Kt(y, f - 1)), vo(i, Ae(s, 3), y, !0);
      }
      function vh(i) {
        var s = i == null ? 0 : i.length;
        return s ? Ht(i, 1) : [];
      }
      function Y1(i) {
        var s = i == null ? 0 : i.length;
        return s ? Ht(i, j) : [];
      }
      function q1(i, s) {
        var c = i == null ? 0 : i.length;
        return c ? (s = s === n ? 1 : ze(s), Ht(i, s)) : [];
      }
      function K1(i) {
        for (var s = -1, c = i == null ? 0 : i.length, f = {}; ++s < c; ) {
          var y = i[s];
          f[y[0]] = y[1];
        }
        return f;
      }
      function yh(i) {
        return i && i.length ? i[0] : n;
      }
      function G1(i, s, c) {
        var f = i == null ? 0 : i.length;
        if (!f)
          return -1;
        var y = c == null ? 0 : ze(c);
        return y < 0 && (y = Lt(f + y, 0)), Si(i, s, y);
      }
      function X1(i) {
        var s = i == null ? 0 : i.length;
        return s ? Pn(i, 0, -1) : [];
      }
      var Z1 = Ye(function(i) {
        var s = Ot(i, au);
        return s.length && s[0] === i[0] ? Gl(s) : [];
      }), J1 = Ye(function(i) {
        var s = An(i), c = Ot(i, au);
        return s === An(c) ? s = n : c.pop(), c.length && c[0] === i[0] ? Gl(c, Ae(s, 2)) : [];
      }), Q1 = Ye(function(i) {
        var s = An(i), c = Ot(i, au);
        return s = typeof s == "function" ? s : n, s && c.pop(), c.length && c[0] === i[0] ? Gl(c, n, s) : [];
      });
      function eE(i, s) {
        return i == null ? "" : X_.call(i, s);
      }
      function An(i) {
        var s = i == null ? 0 : i.length;
        return s ? i[s - 1] : n;
      }
      function tE(i, s, c) {
        var f = i == null ? 0 : i.length;
        if (!f)
          return -1;
        var y = f;
        return c !== n && (y = ze(c), y = y < 0 ? Lt(f + y, 0) : Kt(y, f - 1)), s === s ? N_(i, s, y) : vo(i, Jf, y, !0);
      }
      function nE(i, s) {
        return i && i.length ? kp(i, ze(s)) : n;
      }
      var rE = Ye(xh);
      function xh(i, s) {
        return i && i.length && s && s.length ? Ql(i, s) : i;
      }
      function iE(i, s, c) {
        return i && i.length && s && s.length ? Ql(i, s, Ae(c, 2)) : i;
      }
      function aE(i, s, c) {
        return i && i.length && s && s.length ? Ql(i, s, n, c) : i;
      }
      var oE = pr(function(i, s) {
        var c = i == null ? 0 : i.length, f = Ul(i, s);
        return Ip(i, Ot(s, function(y) {
          return hr(y, c) ? +y : y;
        }).sort(zp)), f;
      });
      function sE(i, s) {
        var c = [];
        if (!(i && i.length))
          return c;
        var f = -1, y = [], T = i.length;
        for (s = Ae(s, 3); ++f < T; ) {
          var A = i[f];
          s(A, f, i) && (c.push(A), y.push(f));
        }
        return Ip(i, y), c;
      }
      function xu(i) {
        return i == null ? i : e0.call(i);
      }
      function lE(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (c && typeof c != "number" && Jt(i, s, c) ? (s = 0, c = f) : (s = s == null ? 0 : ze(s), c = c === n ? f : ze(c)), Pn(i, s, c)) : [];
      }
      function uE(i, s) {
        return $o(i, s);
      }
      function cE(i, s, c) {
        return nu(i, s, Ae(c, 2));
      }
      function dE(i, s) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var f = $o(i, s);
          if (f < c && Wn(i[f], s))
            return f;
        }
        return -1;
      }
      function fE(i, s) {
        return $o(i, s, !0);
      }
      function pE(i, s, c) {
        return nu(i, s, Ae(c, 2), !0);
      }
      function hE(i, s) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var f = $o(i, s, !0) - 1;
          if (Wn(i[f], s))
            return f;
        }
        return -1;
      }
      function mE(i) {
        return i && i.length ? Np(i) : [];
      }
      function gE(i, s) {
        return i && i.length ? Np(i, Ae(s, 2)) : [];
      }
      function vE(i) {
        var s = i == null ? 0 : i.length;
        return s ? Pn(i, 1, s) : [];
      }
      function yE(i, s, c) {
        return i && i.length ? (s = c || s === n ? 1 : ze(s), Pn(i, 0, s < 0 ? 0 : s)) : [];
      }
      function xE(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (s = c || s === n ? 1 : ze(s), s = f - s, Pn(i, s < 0 ? 0 : s, f)) : [];
      }
      function bE(i, s) {
        return i && i.length ? Fo(i, Ae(s, 3), !1, !0) : [];
      }
      function wE(i, s) {
        return i && i.length ? Fo(i, Ae(s, 3)) : [];
      }
      var _E = Ye(function(i) {
        return Ar(Ht(i, 1, It, !0));
      }), EE = Ye(function(i) {
        var s = An(i);
        return It(s) && (s = n), Ar(Ht(i, 1, It, !0), Ae(s, 2));
      }), CE = Ye(function(i) {
        var s = An(i);
        return s = typeof s == "function" ? s : n, Ar(Ht(i, 1, It, !0), n, s);
      });
      function TE(i) {
        return i && i.length ? Ar(i) : [];
      }
      function OE(i, s) {
        return i && i.length ? Ar(i, Ae(s, 2)) : [];
      }
      function SE(i, s) {
        return s = typeof s == "function" ? s : n, i && i.length ? Ar(i, n, s) : [];
      }
      function bu(i) {
        if (!(i && i.length))
          return [];
        var s = 0;
        return i = Or(i, function(c) {
          if (It(c))
            return s = Lt(c.length, s), !0;
        }), $l(s, function(c) {
          return Ot(i, Nl(c));
        });
      }
      function bh(i, s) {
        if (!(i && i.length))
          return [];
        var c = bu(i);
        return s == null ? c : Ot(c, function(f) {
          return gn(s, n, f);
        });
      }
      var DE = Ye(function(i, s) {
        return It(i) ? Ca(i, s) : [];
      }), kE = Ye(function(i) {
        return iu(Or(i, It));
      }), PE = Ye(function(i) {
        var s = An(i);
        return It(s) && (s = n), iu(Or(i, It), Ae(s, 2));
      }), AE = Ye(function(i) {
        var s = An(i);
        return s = typeof s == "function" ? s : n, iu(Or(i, It), n, s);
      }), IE = Ye(bu);
      function ME(i, s) {
        return Fp(i || [], s || [], Ea);
      }
      function NE(i, s) {
        return Fp(i || [], s || [], Sa);
      }
      var jE = Ye(function(i) {
        var s = i.length, c = s > 1 ? i[s - 1] : n;
        return c = typeof c == "function" ? (i.pop(), c) : n, bh(i, c);
      });
      function wh(i) {
        var s = E(i);
        return s.__chain__ = !0, s;
      }
      function RE(i, s) {
        return s(i), i;
      }
      function qo(i, s) {
        return s(i);
      }
      var $E = pr(function(i) {
        var s = i.length, c = s ? i[0] : 0, f = this.__wrapped__, y = function(T) {
          return Ul(T, i);
        };
        return s > 1 || this.__actions__.length || !(f instanceof Xe) || !hr(c) ? this.thru(y) : (f = f.slice(c, +c + (s ? 1 : 0)), f.__actions__.push({
          func: qo,
          args: [y],
          thisArg: n
        }), new Dn(f, this.__chain__).thru(function(T) {
          return s && !T.length && T.push(n), T;
        }));
      });
      function FE() {
        return wh(this);
      }
      function LE() {
        return new Dn(this.value(), this.__chain__);
      }
      function WE() {
        this.__values__ === n && (this.__values__ = jh(this.value()));
        var i = this.__index__ >= this.__values__.length, s = i ? n : this.__values__[this.__index__++];
        return { done: i, value: s };
      }
      function VE() {
        return this;
      }
      function zE(i) {
        for (var s, c = this; c instanceof Io; ) {
          var f = hh(c);
          f.__index__ = 0, f.__values__ = n, s ? y.__wrapped__ = f : s = f;
          var y = f;
          c = c.__wrapped__;
        }
        return y.__wrapped__ = i, s;
      }
      function BE() {
        var i = this.__wrapped__;
        if (i instanceof Xe) {
          var s = i;
          return this.__actions__.length && (s = new Xe(this)), s = s.reverse(), s.__actions__.push({
            func: qo,
            args: [xu],
            thisArg: n
          }), new Dn(s, this.__chain__);
        }
        return this.thru(xu);
      }
      function HE() {
        return $p(this.__wrapped__, this.__actions__);
      }
      var UE = Lo(function(i, s, c) {
        dt.call(i, c) ? ++i[c] : dr(i, c, 1);
      });
      function YE(i, s, c) {
        var f = Ve(i) ? Xf : R0;
        return c && Jt(i, s, c) && (s = n), f(i, Ae(s, 3));
      }
      function qE(i, s) {
        var c = Ve(i) ? Or : bp;
        return c(i, Ae(s, 3));
      }
      var KE = Kp(mh), GE = Kp(gh);
      function XE(i, s) {
        return Ht(Ko(i, s), 1);
      }
      function ZE(i, s) {
        return Ht(Ko(i, s), j);
      }
      function JE(i, s, c) {
        return c = c === n ? 1 : ze(c), Ht(Ko(i, s), c);
      }
      function _h(i, s) {
        var c = Ve(i) ? On : Pr;
        return c(i, Ae(s, 3));
      }
      function Eh(i, s) {
        var c = Ve(i) ? v_ : xp;
        return c(i, Ae(s, 3));
      }
      var QE = Lo(function(i, s, c) {
        dt.call(i, c) ? i[c].push(s) : dr(i, c, [s]);
      });
      function eC(i, s, c, f) {
        i = on(i) ? i : Li(i), c = c && !f ? ze(c) : 0;
        var y = i.length;
        return c < 0 && (c = Lt(y + c, 0)), Qo(i) ? c <= y && i.indexOf(s, c) > -1 : !!y && Si(i, s, c) > -1;
      }
      var tC = Ye(function(i, s, c) {
        var f = -1, y = typeof s == "function", T = on(i) ? ie(i.length) : [];
        return Pr(i, function(A) {
          T[++f] = y ? gn(s, A, c) : Ta(A, s, c);
        }), T;
      }), nC = Lo(function(i, s, c) {
        dr(i, c, s);
      });
      function Ko(i, s) {
        var c = Ve(i) ? Ot : Op;
        return c(i, Ae(s, 3));
      }
      function rC(i, s, c, f) {
        return i == null ? [] : (Ve(s) || (s = s == null ? [] : [s]), c = f ? n : c, Ve(c) || (c = c == null ? [] : [c]), Pp(i, s, c));
      }
      var iC = Lo(function(i, s, c) {
        i[c ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function aC(i, s, c) {
        var f = Ve(i) ? Il : ep, y = arguments.length < 3;
        return f(i, Ae(s, 4), c, y, Pr);
      }
      function oC(i, s, c) {
        var f = Ve(i) ? y_ : ep, y = arguments.length < 3;
        return f(i, Ae(s, 4), c, y, xp);
      }
      function sC(i, s) {
        var c = Ve(i) ? Or : bp;
        return c(i, Zo(Ae(s, 3)));
      }
      function lC(i) {
        var s = Ve(i) ? mp : e1;
        return s(i);
      }
      function uC(i, s, c) {
        (c ? Jt(i, s, c) : s === n) ? s = 1 : s = ze(s);
        var f = Ve(i) ? A0 : t1;
        return f(i, s);
      }
      function cC(i) {
        var s = Ve(i) ? I0 : r1;
        return s(i);
      }
      function dC(i) {
        if (i == null)
          return 0;
        if (on(i))
          return Qo(i) ? ki(i) : i.length;
        var s = Gt(i);
        return s == ve || s == g ? i.size : Zl(i).length;
      }
      function fC(i, s, c) {
        var f = Ve(i) ? Ml : i1;
        return c && Jt(i, s, c) && (s = n), f(i, Ae(s, 3));
      }
      var pC = Ye(function(i, s) {
        if (i == null)
          return [];
        var c = s.length;
        return c > 1 && Jt(i, s[0], s[1]) ? s = [] : c > 2 && Jt(s[0], s[1], s[2]) && (s = [s[0]]), Pp(i, Ht(s, 1), []);
      }), Go = q_ || function() {
        return Bt.Date.now();
      };
      function hC(i, s) {
        if (typeof s != "function")
          throw new Sn(l);
        return i = ze(i), function() {
          if (--i < 1)
            return s.apply(this, arguments);
        };
      }
      function Ch(i, s, c) {
        return s = c ? n : s, s = i && s == null ? i.length : s, fr(i, J, n, n, n, n, s);
      }
      function Th(i, s) {
        var c;
        if (typeof s != "function")
          throw new Sn(l);
        return i = ze(i), function() {
          return --i > 0 && (c = s.apply(this, arguments)), i <= 1 && (s = n), c;
        };
      }
      var wu = Ye(function(i, s, c) {
        var f = b;
        if (c.length) {
          var y = Dr(c, $i(wu));
          f |= S;
        }
        return fr(i, f, s, c, y);
      }), Oh = Ye(function(i, s, c) {
        var f = b | P;
        if (c.length) {
          var y = Dr(c, $i(Oh));
          f |= S;
        }
        return fr(s, f, i, c, y);
      });
      function Sh(i, s, c) {
        s = c ? n : s;
        var f = fr(i, k, n, n, n, n, n, s);
        return f.placeholder = Sh.placeholder, f;
      }
      function Dh(i, s, c) {
        s = c ? n : s;
        var f = fr(i, D, n, n, n, n, n, s);
        return f.placeholder = Dh.placeholder, f;
      }
      function kh(i, s, c) {
        var f, y, T, A, W, G, de = 0, pe = !1, me = !1, Te = !0;
        if (typeof i != "function")
          throw new Sn(l);
        s = In(s) || 0, St(c) && (pe = !!c.leading, me = "maxWait" in c, T = me ? Lt(In(c.maxWait) || 0, s) : T, Te = "trailing" in c ? !!c.trailing : Te);
        function De(Mt) {
          var Vn = f, vr = y;
          return f = y = n, de = Mt, A = i.apply(vr, Vn), A;
        }
        function Ie(Mt) {
          return de = Mt, W = Pa(Ge, s), pe ? De(Mt) : A;
        }
        function He(Mt) {
          var Vn = Mt - G, vr = Mt - de, Kh = s - Vn;
          return me ? Kt(Kh, T - vr) : Kh;
        }
        function Me(Mt) {
          var Vn = Mt - G, vr = Mt - de;
          return G === n || Vn >= s || Vn < 0 || me && vr >= T;
        }
        function Ge() {
          var Mt = Go();
          if (Me(Mt))
            return Je(Mt);
          W = Pa(Ge, He(Mt));
        }
        function Je(Mt) {
          return W = n, Te && f ? De(Mt) : (f = y = n, A);
        }
        function bn() {
          W !== n && Lp(W), de = 0, f = G = y = W = n;
        }
        function Qt() {
          return W === n ? A : Je(Go());
        }
        function wn() {
          var Mt = Go(), Vn = Me(Mt);
          if (f = arguments, y = this, G = Mt, Vn) {
            if (W === n)
              return Ie(G);
            if (me)
              return Lp(W), W = Pa(Ge, s), De(G);
          }
          return W === n && (W = Pa(Ge, s)), A;
        }
        return wn.cancel = bn, wn.flush = Qt, wn;
      }
      var mC = Ye(function(i, s) {
        return yp(i, 1, s);
      }), gC = Ye(function(i, s, c) {
        return yp(i, In(s) || 0, c);
      });
      function vC(i) {
        return fr(i, V);
      }
      function Xo(i, s) {
        if (typeof i != "function" || s != null && typeof s != "function")
          throw new Sn(l);
        var c = function() {
          var f = arguments, y = s ? s.apply(this, f) : f[0], T = c.cache;
          if (T.has(y))
            return T.get(y);
          var A = i.apply(this, f);
          return c.cache = T.set(y, A) || T, A;
        };
        return c.cache = new (Xo.Cache || cr)(), c;
      }
      Xo.Cache = cr;
      function Zo(i) {
        if (typeof i != "function")
          throw new Sn(l);
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return !i.call(this);
            case 1:
              return !i.call(this, s[0]);
            case 2:
              return !i.call(this, s[0], s[1]);
            case 3:
              return !i.call(this, s[0], s[1], s[2]);
          }
          return !i.apply(this, s);
        };
      }
      function yC(i) {
        return Th(2, i);
      }
      var xC = a1(function(i, s) {
        s = s.length == 1 && Ve(s[0]) ? Ot(s[0], vn(Ae())) : Ot(Ht(s, 1), vn(Ae()));
        var c = s.length;
        return Ye(function(f) {
          for (var y = -1, T = Kt(f.length, c); ++y < T; )
            f[y] = s[y].call(this, f[y]);
          return gn(i, this, f);
        });
      }), _u = Ye(function(i, s) {
        var c = Dr(s, $i(_u));
        return fr(i, S, n, s, c);
      }), Ph = Ye(function(i, s) {
        var c = Dr(s, $i(Ph));
        return fr(i, Z, n, s, c);
      }), bC = pr(function(i, s) {
        return fr(i, ne, n, n, n, s);
      });
      function wC(i, s) {
        if (typeof i != "function")
          throw new Sn(l);
        return s = s === n ? s : ze(s), Ye(i, s);
      }
      function _C(i, s) {
        if (typeof i != "function")
          throw new Sn(l);
        return s = s == null ? 0 : Lt(ze(s), 0), Ye(function(c) {
          var f = c[s], y = Mr(c, 0, s);
          return f && Sr(y, f), gn(i, this, y);
        });
      }
      function EC(i, s, c) {
        var f = !0, y = !0;
        if (typeof i != "function")
          throw new Sn(l);
        return St(c) && (f = "leading" in c ? !!c.leading : f, y = "trailing" in c ? !!c.trailing : y), kh(i, s, {
          leading: f,
          maxWait: s,
          trailing: y
        });
      }
      function CC(i) {
        return Ch(i, 1);
      }
      function TC(i, s) {
        return _u(ou(s), i);
      }
      function OC() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Ve(i) ? i : [i];
      }
      function SC(i) {
        return kn(i, w);
      }
      function DC(i, s) {
        return s = typeof s == "function" ? s : n, kn(i, w, s);
      }
      function kC(i) {
        return kn(i, m | w);
      }
      function PC(i, s) {
        return s = typeof s == "function" ? s : n, kn(i, m | w, s);
      }
      function AC(i, s) {
        return s == null || vp(i, s, Vt(s));
      }
      function Wn(i, s) {
        return i === s || i !== i && s !== s;
      }
      var IC = Bo(Kl), MC = Bo(function(i, s) {
        return i >= s;
      }), li = Ep(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Ep : function(i) {
        return kt(i) && dt.call(i, "callee") && !up.call(i, "callee");
      }, Ve = ie.isArray, NC = Hf ? vn(Hf) : z0;
      function on(i) {
        return i != null && Jo(i.length) && !mr(i);
      }
      function It(i) {
        return kt(i) && on(i);
      }
      function jC(i) {
        return i === !0 || i === !1 || kt(i) && Zt(i) == we;
      }
      var Nr = G_ || Mu, RC = Uf ? vn(Uf) : B0;
      function $C(i) {
        return kt(i) && i.nodeType === 1 && !Aa(i);
      }
      function FC(i) {
        if (i == null)
          return !0;
        if (on(i) && (Ve(i) || typeof i == "string" || typeof i.splice == "function" || Nr(i) || Fi(i) || li(i)))
          return !i.length;
        var s = Gt(i);
        if (s == ve || s == g)
          return !i.size;
        if (ka(i))
          return !Zl(i).length;
        for (var c in i)
          if (dt.call(i, c))
            return !1;
        return !0;
      }
      function LC(i, s) {
        return Oa(i, s);
      }
      function WC(i, s, c) {
        c = typeof c == "function" ? c : n;
        var f = c ? c(i, s) : n;
        return f === n ? Oa(i, s, n, c) : !!f;
      }
      function Eu(i) {
        if (!kt(i))
          return !1;
        var s = Zt(i);
        return s == Se || s == _e || typeof i.message == "string" && typeof i.name == "string" && !Aa(i);
      }
      function VC(i) {
        return typeof i == "number" && dp(i);
      }
      function mr(i) {
        if (!St(i))
          return !1;
        var s = Zt(i);
        return s == fe || s == Re || s == be || s == Q;
      }
      function Ah(i) {
        return typeof i == "number" && i == ze(i);
      }
      function Jo(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= I;
      }
      function St(i) {
        var s = typeof i;
        return i != null && (s == "object" || s == "function");
      }
      function kt(i) {
        return i != null && typeof i == "object";
      }
      var Ih = Yf ? vn(Yf) : U0;
      function zC(i, s) {
        return i === s || Xl(i, s, pu(s));
      }
      function BC(i, s, c) {
        return c = typeof c == "function" ? c : n, Xl(i, s, pu(s), c);
      }
      function HC(i) {
        return Mh(i) && i != +i;
      }
      function UC(i) {
        if (D1(i))
          throw new Le(o);
        return Cp(i);
      }
      function YC(i) {
        return i === null;
      }
      function qC(i) {
        return i == null;
      }
      function Mh(i) {
        return typeof i == "number" || kt(i) && Zt(i) == et;
      }
      function Aa(i) {
        if (!kt(i) || Zt(i) != Ke)
          return !1;
        var s = To(i);
        if (s === null)
          return !0;
        var c = dt.call(s, "constructor") && s.constructor;
        return typeof c == "function" && c instanceof c && wo.call(c) == B_;
      }
      var Cu = qf ? vn(qf) : Y0;
      function KC(i) {
        return Ah(i) && i >= -9007199254740991 && i <= I;
      }
      var Nh = Kf ? vn(Kf) : q0;
      function Qo(i) {
        return typeof i == "string" || !Ve(i) && kt(i) && Zt(i) == F;
      }
      function xn(i) {
        return typeof i == "symbol" || kt(i) && Zt(i) == $;
      }
      var Fi = Gf ? vn(Gf) : K0;
      function GC(i) {
        return i === n;
      }
      function XC(i) {
        return kt(i) && Gt(i) == ae;
      }
      function ZC(i) {
        return kt(i) && Zt(i) == xe;
      }
      var JC = Bo(Jl), QC = Bo(function(i, s) {
        return i <= s;
      });
      function jh(i) {
        if (!i)
          return [];
        if (on(i))
          return Qo(i) ? Fn(i) : an(i);
        if (ya && i[ya])
          return A_(i[ya]());
        var s = Gt(i), c = s == ve ? Ll : s == g ? yo : Li;
        return c(i);
      }
      function gr(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = In(i), i === j || i === -1 / 0) {
          var s = i < 0 ? -1 : 1;
          return s * X;
        }
        return i === i ? i : 0;
      }
      function ze(i) {
        var s = gr(i), c = s % 1;
        return s === s ? c ? s - c : s : 0;
      }
      function Rh(i) {
        return i ? ii(ze(i), 0, L) : 0;
      }
      function In(i) {
        if (typeof i == "number")
          return i;
        if (xn(i))
          return M;
        if (St(i)) {
          var s = typeof i.valueOf == "function" ? i.valueOf() : i;
          i = St(s) ? s + "" : s;
        }
        if (typeof i != "string")
          return i === 0 ? i : +i;
        i = tp(i);
        var c = Nw.test(i);
        return c || Rw.test(i) ? h_(i.slice(2), c ? 2 : 8) : Mw.test(i) ? M : +i;
      }
      function $h(i) {
        return Xn(i, sn(i));
      }
      function eT(i) {
        return i ? ii(ze(i), -9007199254740991, I) : i === 0 ? i : 0;
      }
      function at(i) {
        return i == null ? "" : yn(i);
      }
      var tT = ji(function(i, s) {
        if (ka(s) || on(s)) {
          Xn(s, Vt(s), i);
          return;
        }
        for (var c in s)
          dt.call(s, c) && Ea(i, c, s[c]);
      }), Fh = ji(function(i, s) {
        Xn(s, sn(s), i);
      }), es = ji(function(i, s, c, f) {
        Xn(s, sn(s), i, f);
      }), nT = ji(function(i, s, c, f) {
        Xn(s, Vt(s), i, f);
      }), rT = pr(Ul);
      function iT(i, s) {
        var c = Ni(i);
        return s == null ? c : gp(c, s);
      }
      var aT = Ye(function(i, s) {
        i = gt(i);
        var c = -1, f = s.length, y = f > 2 ? s[2] : n;
        for (y && Jt(s[0], s[1], y) && (f = 1); ++c < f; )
          for (var T = s[c], A = sn(T), W = -1, G = A.length; ++W < G; ) {
            var de = A[W], pe = i[de];
            (pe === n || Wn(pe, Ai[de]) && !dt.call(i, de)) && (i[de] = T[de]);
          }
        return i;
      }), oT = Ye(function(i) {
        return i.push(n, th), gn(Lh, n, i);
      });
      function sT(i, s) {
        return Zf(i, Ae(s, 3), Gn);
      }
      function lT(i, s) {
        return Zf(i, Ae(s, 3), ql);
      }
      function uT(i, s) {
        return i == null ? i : Yl(i, Ae(s, 3), sn);
      }
      function cT(i, s) {
        return i == null ? i : wp(i, Ae(s, 3), sn);
      }
      function dT(i, s) {
        return i && Gn(i, Ae(s, 3));
      }
      function fT(i, s) {
        return i && ql(i, Ae(s, 3));
      }
      function pT(i) {
        return i == null ? [] : jo(i, Vt(i));
      }
      function hT(i) {
        return i == null ? [] : jo(i, sn(i));
      }
      function Tu(i, s, c) {
        var f = i == null ? n : ai(i, s);
        return f === n ? c : f;
      }
      function mT(i, s) {
        return i != null && ih(i, s, F0);
      }
      function Ou(i, s) {
        return i != null && ih(i, s, L0);
      }
      var gT = Xp(function(i, s, c) {
        s != null && typeof s.toString != "function" && (s = _o.call(s)), i[s] = c;
      }, Du(ln)), vT = Xp(function(i, s, c) {
        s != null && typeof s.toString != "function" && (s = _o.call(s)), dt.call(i, s) ? i[s].push(c) : i[s] = [c];
      }, Ae), yT = Ye(Ta);
      function Vt(i) {
        return on(i) ? hp(i) : Zl(i);
      }
      function sn(i) {
        return on(i) ? hp(i, !0) : G0(i);
      }
      function xT(i, s) {
        var c = {};
        return s = Ae(s, 3), Gn(i, function(f, y, T) {
          dr(c, s(f, y, T), f);
        }), c;
      }
      function bT(i, s) {
        var c = {};
        return s = Ae(s, 3), Gn(i, function(f, y, T) {
          dr(c, y, s(f, y, T));
        }), c;
      }
      var wT = ji(function(i, s, c) {
        Ro(i, s, c);
      }), Lh = ji(function(i, s, c, f) {
        Ro(i, s, c, f);
      }), _T = pr(function(i, s) {
        var c = {};
        if (i == null)
          return c;
        var f = !1;
        s = Ot(s, function(T) {
          return T = Ir(T, i), f || (f = T.length > 1), T;
        }), Xn(i, du(i), c), f && (c = kn(c, m | x | w, g1));
        for (var y = s.length; y--; )
          ru(c, s[y]);
        return c;
      });
      function ET(i, s) {
        return Wh(i, Zo(Ae(s)));
      }
      var CT = pr(function(i, s) {
        return i == null ? {} : Z0(i, s);
      });
      function Wh(i, s) {
        if (i == null)
          return {};
        var c = Ot(du(i), function(f) {
          return [f];
        });
        return s = Ae(s), Ap(i, c, function(f, y) {
          return s(f, y[0]);
        });
      }
      function TT(i, s, c) {
        s = Ir(s, i);
        var f = -1, y = s.length;
        for (y || (y = 1, i = n); ++f < y; ) {
          var T = i == null ? n : i[Zn(s[f])];
          T === n && (f = y, T = c), i = mr(T) ? T.call(i) : T;
        }
        return i;
      }
      function OT(i, s, c) {
        return i == null ? i : Sa(i, s, c);
      }
      function ST(i, s, c, f) {
        return f = typeof f == "function" ? f : n, i == null ? i : Sa(i, s, c, f);
      }
      var Vh = Qp(Vt), zh = Qp(sn);
      function DT(i, s, c) {
        var f = Ve(i), y = f || Nr(i) || Fi(i);
        if (s = Ae(s, 4), c == null) {
          var T = i && i.constructor;
          y ? c = f ? new T() : [] : St(i) ? c = mr(T) ? Ni(To(i)) : {} : c = {};
        }
        return (y ? On : Gn)(i, function(A, W, G) {
          return s(c, A, W, G);
        }), c;
      }
      function kT(i, s) {
        return i == null ? !0 : ru(i, s);
      }
      function PT(i, s, c) {
        return i == null ? i : Rp(i, s, ou(c));
      }
      function AT(i, s, c, f) {
        return f = typeof f == "function" ? f : n, i == null ? i : Rp(i, s, ou(c), f);
      }
      function Li(i) {
        return i == null ? [] : Fl(i, Vt(i));
      }
      function IT(i) {
        return i == null ? [] : Fl(i, sn(i));
      }
      function MT(i, s, c) {
        return c === n && (c = s, s = n), c !== n && (c = In(c), c = c === c ? c : 0), s !== n && (s = In(s), s = s === s ? s : 0), ii(In(i), s, c);
      }
      function NT(i, s, c) {
        return s = gr(s), c === n ? (c = s, s = 0) : c = gr(c), i = In(i), W0(i, s, c);
      }
      function jT(i, s, c) {
        if (c && typeof c != "boolean" && Jt(i, s, c) && (s = c = n), c === n && (typeof s == "boolean" ? (c = s, s = n) : typeof i == "boolean" && (c = i, i = n)), i === n && s === n ? (i = 0, s = 1) : (i = gr(i), s === n ? (s = i, i = 0) : s = gr(s)), i > s) {
          var f = i;
          i = s, s = f;
        }
        if (c || i % 1 || s % 1) {
          var y = fp();
          return Kt(i + y * (s - i + p_("1e-" + ((y + "").length - 1))), s);
        }
        return eu(i, s);
      }
      var RT = Ri(function(i, s, c) {
        return s = s.toLowerCase(), i + (c ? Bh(s) : s);
      });
      function Bh(i) {
        return Su(at(i).toLowerCase());
      }
      function Hh(i) {
        return i = at(i), i && i.replace(Fw, O_).replace(r_, "");
      }
      function $T(i, s, c) {
        i = at(i), s = yn(s);
        var f = i.length;
        c = c === n ? f : ii(ze(c), 0, f);
        var y = c;
        return c -= s.length, c >= 0 && i.slice(c, y) == s;
      }
      function FT(i) {
        return i = at(i), i && yw.test(i) ? i.replace(wf, S_) : i;
      }
      function LT(i) {
        return i = at(i), i && Cw.test(i) ? i.replace(_l, "\\$&") : i;
      }
      var WT = Ri(function(i, s, c) {
        return i + (c ? "-" : "") + s.toLowerCase();
      }), VT = Ri(function(i, s, c) {
        return i + (c ? " " : "") + s.toLowerCase();
      }), zT = qp("toLowerCase");
      function BT(i, s, c) {
        i = at(i), s = ze(s);
        var f = s ? ki(i) : 0;
        if (!s || f >= s)
          return i;
        var y = (s - f) / 2;
        return zo(ko(y), c) + i + zo(Do(y), c);
      }
      function HT(i, s, c) {
        i = at(i), s = ze(s);
        var f = s ? ki(i) : 0;
        return s && f < s ? i + zo(s - f, c) : i;
      }
      function UT(i, s, c) {
        i = at(i), s = ze(s);
        var f = s ? ki(i) : 0;
        return s && f < s ? zo(s - f, c) + i : i;
      }
      function YT(i, s, c) {
        return c || s == null ? s = 0 : s && (s = +s), Q_(at(i).replace(El, ""), s || 0);
      }
      function qT(i, s, c) {
        return (c ? Jt(i, s, c) : s === n) ? s = 1 : s = ze(s), tu(at(i), s);
      }
      function KT() {
        var i = arguments, s = at(i[0]);
        return i.length < 3 ? s : s.replace(i[1], i[2]);
      }
      var GT = Ri(function(i, s, c) {
        return i + (c ? "_" : "") + s.toLowerCase();
      });
      function XT(i, s, c) {
        return c && typeof c != "number" && Jt(i, s, c) && (s = c = n), c = c === n ? L : c >>> 0, c ? (i = at(i), i && (typeof s == "string" || s != null && !Cu(s)) && (s = yn(s), !s && Di(i)) ? Mr(Fn(i), 0, c) : i.split(s, c)) : [];
      }
      var ZT = Ri(function(i, s, c) {
        return i + (c ? " " : "") + Su(s);
      });
      function JT(i, s, c) {
        return i = at(i), c = c == null ? 0 : ii(ze(c), 0, i.length), s = yn(s), i.slice(c, c + s.length) == s;
      }
      function QT(i, s, c) {
        var f = E.templateSettings;
        c && Jt(i, s, c) && (s = n), i = at(i), s = es({}, s, f, eh);
        var y = es({}, s.imports, f.imports, eh), T = Vt(y), A = Fl(y, T), W, G, de = 0, pe = s.interpolate || po, me = "__p += '", Te = Wl(
          (s.escape || po).source + "|" + pe.source + "|" + (pe === _f ? Iw : po).source + "|" + (s.evaluate || po).source + "|$",
          "g"
        ), De = "//# sourceURL=" + (dt.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++l_ + "]") + `
`;
        i.replace(Te, function(Me, Ge, Je, bn, Qt, wn) {
          return Je || (Je = bn), me += i.slice(de, wn).replace(Lw, D_), Ge && (W = !0, me += `' +
__e(` + Ge + `) +
'`), Qt && (G = !0, me += `';
` + Qt + `;
__p += '`), Je && (me += `' +
((__t = (` + Je + `)) == null ? '' : __t) +
'`), de = wn + Me.length, Me;
        }), me += `';
`;
        var Ie = dt.call(s, "variable") && s.variable;
        if (!Ie)
          me = `with (obj) {
` + me + `
}
`;
        else if (Pw.test(Ie))
          throw new Le(u);
        me = (G ? me.replace(ga, "") : me).replace(wl, "$1").replace(gw, "$1;"), me = "function(" + (Ie || "obj") + `) {
` + (Ie ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (W ? ", __e = _.escape" : "") + (G ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + me + `return __p
}`;
        var He = Yh(function() {
          return nt(T, De + "return " + me).apply(n, A);
        });
        if (He.source = me, Eu(He))
          throw He;
        return He;
      }
      function eO(i) {
        return at(i).toLowerCase();
      }
      function tO(i) {
        return at(i).toUpperCase();
      }
      function nO(i, s, c) {
        if (i = at(i), i && (c || s === n))
          return tp(i);
        if (!i || !(s = yn(s)))
          return i;
        var f = Fn(i), y = Fn(s), T = np(f, y), A = rp(f, y) + 1;
        return Mr(f, T, A).join("");
      }
      function rO(i, s, c) {
        if (i = at(i), i && (c || s === n))
          return i.slice(0, ap(i) + 1);
        if (!i || !(s = yn(s)))
          return i;
        var f = Fn(i), y = rp(f, Fn(s)) + 1;
        return Mr(f, 0, y).join("");
      }
      function iO(i, s, c) {
        if (i = at(i), i && (c || s === n))
          return i.replace(El, "");
        if (!i || !(s = yn(s)))
          return i;
        var f = Fn(i), y = np(f, Fn(s));
        return Mr(f, y).join("");
      }
      function aO(i, s) {
        var c = Y, f = te;
        if (St(s)) {
          var y = "separator" in s ? s.separator : y;
          c = "length" in s ? ze(s.length) : c, f = "omission" in s ? yn(s.omission) : f;
        }
        i = at(i);
        var T = i.length;
        if (Di(i)) {
          var A = Fn(i);
          T = A.length;
        }
        if (c >= T)
          return i;
        var W = c - ki(f);
        if (W < 1)
          return f;
        var G = A ? Mr(A, 0, W).join("") : i.slice(0, W);
        if (y === n)
          return G + f;
        if (A && (W += G.length - W), Cu(y)) {
          if (i.slice(W).search(y)) {
            var de, pe = G;
            for (y.global || (y = Wl(y.source, at(Ef.exec(y)) + "g")), y.lastIndex = 0; de = y.exec(pe); )
              var me = de.index;
            G = G.slice(0, me === n ? W : me);
          }
        } else if (i.indexOf(yn(y), W) != W) {
          var Te = G.lastIndexOf(y);
          Te > -1 && (G = G.slice(0, Te));
        }
        return G + f;
      }
      function oO(i) {
        return i = at(i), i && vw.test(i) ? i.replace(bf, j_) : i;
      }
      var sO = Ri(function(i, s, c) {
        return i + (c ? " " : "") + s.toUpperCase();
      }), Su = qp("toUpperCase");
      function Uh(i, s, c) {
        return i = at(i), s = c ? n : s, s === n ? P_(i) ? F_(i) : w_(i) : i.match(s) || [];
      }
      var Yh = Ye(function(i, s) {
        try {
          return gn(i, n, s);
        } catch (c) {
          return Eu(c) ? c : new Le(c);
        }
      }), lO = pr(function(i, s) {
        return On(s, function(c) {
          c = Zn(c), dr(i, c, wu(i[c], i));
        }), i;
      });
      function uO(i) {
        var s = i == null ? 0 : i.length, c = Ae();
        return i = s ? Ot(i, function(f) {
          if (typeof f[1] != "function")
            throw new Sn(l);
          return [c(f[0]), f[1]];
        }) : [], Ye(function(f) {
          for (var y = -1; ++y < s; ) {
            var T = i[y];
            if (gn(T[0], this, f))
              return gn(T[1], this, f);
          }
        });
      }
      function cO(i) {
        return j0(kn(i, m));
      }
      function Du(i) {
        return function() {
          return i;
        };
      }
      function dO(i, s) {
        return i == null || i !== i ? s : i;
      }
      var fO = Gp(), pO = Gp(!0);
      function ln(i) {
        return i;
      }
      function ku(i) {
        return Tp(typeof i == "function" ? i : kn(i, m));
      }
      function hO(i) {
        return Sp(kn(i, m));
      }
      function mO(i, s) {
        return Dp(i, kn(s, m));
      }
      var gO = Ye(function(i, s) {
        return function(c) {
          return Ta(c, i, s);
        };
      }), vO = Ye(function(i, s) {
        return function(c) {
          return Ta(i, c, s);
        };
      });
      function Pu(i, s, c) {
        var f = Vt(s), y = jo(s, f);
        c == null && !(St(s) && (y.length || !f.length)) && (c = s, s = i, i = this, y = jo(s, Vt(s)));
        var T = !(St(c) && "chain" in c) || !!c.chain, A = mr(i);
        return On(y, function(W) {
          var G = s[W];
          i[W] = G, A && (i.prototype[W] = function() {
            var de = this.__chain__;
            if (T || de) {
              var pe = i(this.__wrapped__), me = pe.__actions__ = an(this.__actions__);
              return me.push({ func: G, args: arguments, thisArg: i }), pe.__chain__ = de, pe;
            }
            return G.apply(i, Sr([this.value()], arguments));
          });
        }), i;
      }
      function yO() {
        return Bt._ === this && (Bt._ = H_), this;
      }
      function Au() {
      }
      function xO(i) {
        return i = ze(i), Ye(function(s) {
          return kp(s, i);
        });
      }
      var bO = lu(Ot), wO = lu(Xf), _O = lu(Ml);
      function qh(i) {
        return mu(i) ? Nl(Zn(i)) : J0(i);
      }
      function EO(i) {
        return function(s) {
          return i == null ? n : ai(i, s);
        };
      }
      var CO = Zp(), TO = Zp(!0);
      function Iu() {
        return [];
      }
      function Mu() {
        return !1;
      }
      function OO() {
        return {};
      }
      function SO() {
        return "";
      }
      function DO() {
        return !0;
      }
      function kO(i, s) {
        if (i = ze(i), i < 1 || i > I)
          return [];
        var c = L, f = Kt(i, L);
        s = Ae(s), i -= L;
        for (var y = $l(f, s); ++c < i; )
          s(c);
        return y;
      }
      function PO(i) {
        return Ve(i) ? Ot(i, Zn) : xn(i) ? [i] : an(ph(at(i)));
      }
      function AO(i) {
        var s = ++z_;
        return at(i) + s;
      }
      var IO = Vo(function(i, s) {
        return i + s;
      }, 0), MO = uu("ceil"), NO = Vo(function(i, s) {
        return i / s;
      }, 1), jO = uu("floor");
      function RO(i) {
        return i && i.length ? No(i, ln, Kl) : n;
      }
      function $O(i, s) {
        return i && i.length ? No(i, Ae(s, 2), Kl) : n;
      }
      function FO(i) {
        return Qf(i, ln);
      }
      function LO(i, s) {
        return Qf(i, Ae(s, 2));
      }
      function WO(i) {
        return i && i.length ? No(i, ln, Jl) : n;
      }
      function VO(i, s) {
        return i && i.length ? No(i, Ae(s, 2), Jl) : n;
      }
      var zO = Vo(function(i, s) {
        return i * s;
      }, 1), BO = uu("round"), HO = Vo(function(i, s) {
        return i - s;
      }, 0);
      function UO(i) {
        return i && i.length ? Rl(i, ln) : 0;
      }
      function YO(i, s) {
        return i && i.length ? Rl(i, Ae(s, 2)) : 0;
      }
      return E.after = hC, E.ary = Ch, E.assign = tT, E.assignIn = Fh, E.assignInWith = es, E.assignWith = nT, E.at = rT, E.before = Th, E.bind = wu, E.bindAll = lO, E.bindKey = Oh, E.castArray = OC, E.chain = wh, E.chunk = j1, E.compact = R1, E.concat = $1, E.cond = uO, E.conforms = cO, E.constant = Du, E.countBy = UE, E.create = iT, E.curry = Sh, E.curryRight = Dh, E.debounce = kh, E.defaults = aT, E.defaultsDeep = oT, E.defer = mC, E.delay = gC, E.difference = F1, E.differenceBy = L1, E.differenceWith = W1, E.drop = V1, E.dropRight = z1, E.dropRightWhile = B1, E.dropWhile = H1, E.fill = U1, E.filter = qE, E.flatMap = XE, E.flatMapDeep = ZE, E.flatMapDepth = JE, E.flatten = vh, E.flattenDeep = Y1, E.flattenDepth = q1, E.flip = vC, E.flow = fO, E.flowRight = pO, E.fromPairs = K1, E.functions = pT, E.functionsIn = hT, E.groupBy = QE, E.initial = X1, E.intersection = Z1, E.intersectionBy = J1, E.intersectionWith = Q1, E.invert = gT, E.invertBy = vT, E.invokeMap = tC, E.iteratee = ku, E.keyBy = nC, E.keys = Vt, E.keysIn = sn, E.map = Ko, E.mapKeys = xT, E.mapValues = bT, E.matches = hO, E.matchesProperty = mO, E.memoize = Xo, E.merge = wT, E.mergeWith = Lh, E.method = gO, E.methodOf = vO, E.mixin = Pu, E.negate = Zo, E.nthArg = xO, E.omit = _T, E.omitBy = ET, E.once = yC, E.orderBy = rC, E.over = bO, E.overArgs = xC, E.overEvery = wO, E.overSome = _O, E.partial = _u, E.partialRight = Ph, E.partition = iC, E.pick = CT, E.pickBy = Wh, E.property = qh, E.propertyOf = EO, E.pull = rE, E.pullAll = xh, E.pullAllBy = iE, E.pullAllWith = aE, E.pullAt = oE, E.range = CO, E.rangeRight = TO, E.rearg = bC, E.reject = sC, E.remove = sE, E.rest = wC, E.reverse = xu, E.sampleSize = uC, E.set = OT, E.setWith = ST, E.shuffle = cC, E.slice = lE, E.sortBy = pC, E.sortedUniq = mE, E.sortedUniqBy = gE, E.split = XT, E.spread = _C, E.tail = vE, E.take = yE, E.takeRight = xE, E.takeRightWhile = bE, E.takeWhile = wE, E.tap = RE, E.throttle = EC, E.thru = qo, E.toArray = jh, E.toPairs = Vh, E.toPairsIn = zh, E.toPath = PO, E.toPlainObject = $h, E.transform = DT, E.unary = CC, E.union = _E, E.unionBy = EE, E.unionWith = CE, E.uniq = TE, E.uniqBy = OE, E.uniqWith = SE, E.unset = kT, E.unzip = bu, E.unzipWith = bh, E.update = PT, E.updateWith = AT, E.values = Li, E.valuesIn = IT, E.without = DE, E.words = Uh, E.wrap = TC, E.xor = kE, E.xorBy = PE, E.xorWith = AE, E.zip = IE, E.zipObject = ME, E.zipObjectDeep = NE, E.zipWith = jE, E.entries = Vh, E.entriesIn = zh, E.extend = Fh, E.extendWith = es, Pu(E, E), E.add = IO, E.attempt = Yh, E.camelCase = RT, E.capitalize = Bh, E.ceil = MO, E.clamp = MT, E.clone = SC, E.cloneDeep = kC, E.cloneDeepWith = PC, E.cloneWith = DC, E.conformsTo = AC, E.deburr = Hh, E.defaultTo = dO, E.divide = NO, E.endsWith = $T, E.eq = Wn, E.escape = FT, E.escapeRegExp = LT, E.every = YE, E.find = KE, E.findIndex = mh, E.findKey = sT, E.findLast = GE, E.findLastIndex = gh, E.findLastKey = lT, E.floor = jO, E.forEach = _h, E.forEachRight = Eh, E.forIn = uT, E.forInRight = cT, E.forOwn = dT, E.forOwnRight = fT, E.get = Tu, E.gt = IC, E.gte = MC, E.has = mT, E.hasIn = Ou, E.head = yh, E.identity = ln, E.includes = eC, E.indexOf = G1, E.inRange = NT, E.invoke = yT, E.isArguments = li, E.isArray = Ve, E.isArrayBuffer = NC, E.isArrayLike = on, E.isArrayLikeObject = It, E.isBoolean = jC, E.isBuffer = Nr, E.isDate = RC, E.isElement = $C, E.isEmpty = FC, E.isEqual = LC, E.isEqualWith = WC, E.isError = Eu, E.isFinite = VC, E.isFunction = mr, E.isInteger = Ah, E.isLength = Jo, E.isMap = Ih, E.isMatch = zC, E.isMatchWith = BC, E.isNaN = HC, E.isNative = UC, E.isNil = qC, E.isNull = YC, E.isNumber = Mh, E.isObject = St, E.isObjectLike = kt, E.isPlainObject = Aa, E.isRegExp = Cu, E.isSafeInteger = KC, E.isSet = Nh, E.isString = Qo, E.isSymbol = xn, E.isTypedArray = Fi, E.isUndefined = GC, E.isWeakMap = XC, E.isWeakSet = ZC, E.join = eE, E.kebabCase = WT, E.last = An, E.lastIndexOf = tE, E.lowerCase = VT, E.lowerFirst = zT, E.lt = JC, E.lte = QC, E.max = RO, E.maxBy = $O, E.mean = FO, E.meanBy = LO, E.min = WO, E.minBy = VO, E.stubArray = Iu, E.stubFalse = Mu, E.stubObject = OO, E.stubString = SO, E.stubTrue = DO, E.multiply = zO, E.nth = nE, E.noConflict = yO, E.noop = Au, E.now = Go, E.pad = BT, E.padEnd = HT, E.padStart = UT, E.parseInt = YT, E.random = jT, E.reduce = aC, E.reduceRight = oC, E.repeat = qT, E.replace = KT, E.result = TT, E.round = BO, E.runInContext = q, E.sample = lC, E.size = dC, E.snakeCase = GT, E.some = fC, E.sortedIndex = uE, E.sortedIndexBy = cE, E.sortedIndexOf = dE, E.sortedLastIndex = fE, E.sortedLastIndexBy = pE, E.sortedLastIndexOf = hE, E.startCase = ZT, E.startsWith = JT, E.subtract = HO, E.sum = UO, E.sumBy = YO, E.template = QT, E.times = kO, E.toFinite = gr, E.toInteger = ze, E.toLength = Rh, E.toLower = eO, E.toNumber = In, E.toSafeInteger = eT, E.toString = at, E.toUpper = tO, E.trim = nO, E.trimEnd = rO, E.trimStart = iO, E.truncate = aO, E.unescape = oO, E.uniqueId = AO, E.upperCase = sO, E.upperFirst = Su, E.each = _h, E.eachRight = Eh, E.first = yh, Pu(E, function() {
        var i = {};
        return Gn(E, function(s, c) {
          dt.call(E.prototype, c) || (i[c] = s);
        }), i;
      }(), { chain: !1 }), E.VERSION = r, On(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        E[i].placeholder = E;
      }), On(["drop", "take"], function(i, s) {
        Xe.prototype[i] = function(c) {
          c = c === n ? 1 : Lt(ze(c), 0);
          var f = this.__filtered__ && !s ? new Xe(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = Kt(c, f.__takeCount__) : f.__views__.push({
            size: Kt(c, L),
            type: i + (f.__dir__ < 0 ? "Right" : "")
          }), f;
        }, Xe.prototype[i + "Right"] = function(c) {
          return this.reverse()[i](c).reverse();
        };
      }), On(["filter", "map", "takeWhile"], function(i, s) {
        var c = s + 1, f = c == B || c == K;
        Xe.prototype[i] = function(y) {
          var T = this.clone();
          return T.__iteratees__.push({
            iteratee: Ae(y, 3),
            type: c
          }), T.__filtered__ = T.__filtered__ || f, T;
        };
      }), On(["head", "last"], function(i, s) {
        var c = "take" + (s ? "Right" : "");
        Xe.prototype[i] = function() {
          return this[c](1).value()[0];
        };
      }), On(["initial", "tail"], function(i, s) {
        var c = "drop" + (s ? "" : "Right");
        Xe.prototype[i] = function() {
          return this.__filtered__ ? new Xe(this) : this[c](1);
        };
      }), Xe.prototype.compact = function() {
        return this.filter(ln);
      }, Xe.prototype.find = function(i) {
        return this.filter(i).head();
      }, Xe.prototype.findLast = function(i) {
        return this.reverse().find(i);
      }, Xe.prototype.invokeMap = Ye(function(i, s) {
        return typeof i == "function" ? new Xe(this) : this.map(function(c) {
          return Ta(c, i, s);
        });
      }), Xe.prototype.reject = function(i) {
        return this.filter(Zo(Ae(i)));
      }, Xe.prototype.slice = function(i, s) {
        i = ze(i);
        var c = this;
        return c.__filtered__ && (i > 0 || s < 0) ? new Xe(c) : (i < 0 ? c = c.takeRight(-i) : i && (c = c.drop(i)), s !== n && (s = ze(s), c = s < 0 ? c.dropRight(-s) : c.take(s - i)), c);
      }, Xe.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, Xe.prototype.toArray = function() {
        return this.take(L);
      }, Gn(Xe.prototype, function(i, s) {
        var c = /^(?:filter|find|map|reject)|While$/.test(s), f = /^(?:head|last)$/.test(s), y = E[f ? "take" + (s == "last" ? "Right" : "") : s], T = f || /^find/.test(s);
        y && (E.prototype[s] = function() {
          var A = this.__wrapped__, W = f ? [1] : arguments, G = A instanceof Xe, de = W[0], pe = G || Ve(A), me = function(Ge) {
            var Je = y.apply(E, Sr([Ge], W));
            return f && Te ? Je[0] : Je;
          };
          pe && c && typeof de == "function" && de.length != 1 && (G = pe = !1);
          var Te = this.__chain__, De = !!this.__actions__.length, Ie = T && !Te, He = G && !De;
          if (!T && pe) {
            A = He ? A : new Xe(this);
            var Me = i.apply(A, W);
            return Me.__actions__.push({ func: qo, args: [me], thisArg: n }), new Dn(Me, Te);
          }
          return Ie && He ? i.apply(this, W) : (Me = this.thru(me), Ie ? f ? Me.value()[0] : Me.value() : Me);
        });
      }), On(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var s = xo[i], c = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(i);
        E.prototype[i] = function() {
          var y = arguments;
          if (f && !this.__chain__) {
            var T = this.value();
            return s.apply(Ve(T) ? T : [], y);
          }
          return this[c](function(A) {
            return s.apply(Ve(A) ? A : [], y);
          });
        };
      }), Gn(Xe.prototype, function(i, s) {
        var c = E[s];
        if (c) {
          var f = c.name + "";
          dt.call(Mi, f) || (Mi[f] = []), Mi[f].push({ name: s, func: c });
        }
      }), Mi[Wo(n, P).name] = [{
        name: "wrapper",
        func: n
      }], Xe.prototype.clone = o0, Xe.prototype.reverse = s0, Xe.prototype.value = l0, E.prototype.at = $E, E.prototype.chain = FE, E.prototype.commit = LE, E.prototype.next = WE, E.prototype.plant = zE, E.prototype.reverse = BE, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = HE, E.prototype.first = E.prototype.head, ya && (E.prototype[ya] = VE), E;
    }, Pi = L_();
    ei ? ((ei.exports = Pi)._ = Pi, kl._ = Pi) : Bt._ = Pi;
  }).call(Ra);
})(Ss, Ss.exports);
Ss.exports;
var wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.TokenData = void 0;
wi.parse = td;
wi.compile = VS;
wi.match = HS;
wi.pathToRegexp = Fv;
const jv = "/", ed = (e) => e, $S = new RegExp("^\\p{XID_Continue}$", "u"), za = "https://git.new/pathToRegexpError", FS = {
  "!": "!",
  "@": "@",
  ";": ";",
  ",": ",",
  "*": "*",
  "+": "+",
  "?": "?",
  "{": "{",
  "}": "}"
};
function LS(e) {
  const t = [...e], n = [];
  let r = 0;
  for (; r < t.length; ) {
    const a = t[r], o = FS[a];
    if (o) {
      n.push({ type: o, index: r++, value: a });
      continue;
    }
    if (a === "\\") {
      n.push({ type: "ESCAPED", index: r++, value: t[r++] });
      continue;
    }
    if (a === ":") {
      let l = "";
      for (; $S.test(t[++r]); )
        l += t[r];
      if (!l)
        throw new TypeError(`Missing parameter name at ${r}`);
      n.push({ type: "NAME", index: r, value: l });
      continue;
    }
    if (a === "(") {
      const l = r++;
      let u = 1, d = "";
      if (t[r] === "?")
        throw new TypeError(`Pattern cannot start with "?" at ${r}`);
      for (; r < t.length; ) {
        if (t[r] === "\\") {
          d += t[r++] + t[r++];
          continue;
        }
        if (t[r] === ")") {
          if (u--, u === 0) {
            r++;
            break;
          }
        } else if (t[r] === "(" && (u++, t[r + 1] !== "?"))
          throw new TypeError(`Capturing groups are not allowed at ${r}`);
        d += t[r++];
      }
      if (u)
        throw new TypeError(`Unbalanced pattern at ${l}`);
      if (!d)
        throw new TypeError(`Missing pattern at ${l}`);
      n.push({ type: "PATTERN", index: r, value: d });
      continue;
    }
    n.push({ type: "CHAR", index: r, value: t[r++] });
  }
  return n.push({ type: "END", index: r, value: "" }), new WS(n);
}
class WS {
  constructor(t) {
    this.tokens = t, this.index = 0;
  }
  peek() {
    return this.tokens[this.index];
  }
  tryConsume(t) {
    const n = this.peek();
    if (n.type === t)
      return this.index++, n.value;
  }
  consume(t) {
    const n = this.tryConsume(t);
    if (n !== void 0)
      return n;
    const { type: r, index: a } = this.peek();
    throw new TypeError(`Unexpected ${r} at ${a}, expected ${t}: ${za}`);
  }
  text() {
    let t = "", n;
    for (; n = this.tryConsume("CHAR") || this.tryConsume("ESCAPED"); )
      t += n;
    return t;
  }
  modifier() {
    return this.tryConsume("?") || this.tryConsume("*") || this.tryConsume("+");
  }
}
class tl {
  constructor(t, n) {
    this.tokens = t, this.delimiter = n;
  }
}
wi.TokenData = tl;
function td(e, t = {}) {
  const { encodePath: n = ed, delimiter: r = n(jv) } = t, a = [], o = LS(e);
  let l = 0;
  do {
    const u = o.text();
    u && a.push(n(u));
    const d = o.tryConsume("NAME"), p = o.tryConsume("PATTERN");
    if (d || p) {
      a.push({
        name: d || String(l++),
        pattern: p
      });
      const h = o.peek();
      if (h.type === "*")
        throw new TypeError(`Unexpected * at ${h.index}, you probably want \`/*\` or \`{/:foo}*\`: ${za}`);
      continue;
    }
    if (o.tryConsume("*")) {
      a.push({
        name: String(l++),
        pattern: `(?:(?!${Qi(r)}).)*`,
        modifier: "*",
        separator: r
      });
      continue;
    }
    if (o.tryConsume("{")) {
      const h = o.text(), m = o.tryConsume("NAME"), x = o.tryConsume("PATTERN"), w = o.text(), O = o.tryConsume(";") && o.text();
      o.consume("}");
      const _ = o.modifier();
      a.push({
        name: m || (x ? String(l++) : ""),
        prefix: n(h),
        suffix: n(w),
        pattern: x,
        modifier: _,
        separator: O
      });
      continue;
    }
    o.consume("END");
    break;
  } while (!0);
  return new tl(a, r);
}
function VS(e, t = {}) {
  const n = e instanceof tl ? e : td(e, t);
  return BS(n, t);
}
function zS(e, t) {
  if (typeof e == "string")
    return () => e;
  const n = t || ed, r = e.modifier === "+" || e.modifier === "*", a = e.modifier === "?" || e.modifier === "*", { prefix: o = "", suffix: l = "", separator: u = l + o } = e;
  if (t && r) {
    const p = (m, x) => {
      if (typeof m != "string")
        throw new TypeError(`Expected "${e.name}/${x}" to be a string`);
      return n(m);
    }, h = (m) => {
      if (!Array.isArray(m))
        throw new TypeError(`Expected "${e.name}" to be an array`);
      return m.length === 0 ? "" : o + m.map(p).join(u) + l;
    };
    return a ? (m) => {
      const x = m[e.name];
      return x == null ? "" : x.length ? h(x) : "";
    } : (m) => {
      const x = m[e.name];
      return h(x);
    };
  }
  const d = (p) => {
    if (typeof p != "string")
      throw new TypeError(`Expected "${e.name}" to be a string`);
    return o + n(p) + l;
  };
  return a ? (p) => {
    const h = p[e.name];
    return h == null ? "" : d(h);
  } : (p) => {
    const h = p[e.name];
    return d(h);
  };
}
function BS(e, t) {
  const { encode: n = encodeURIComponent, loose: r = !0, validate: a = !0, strict: o = !1 } = t, l = Rv(t), u = nd(r, e.delimiter), d = $v(e, u, [], l, o), p = e.tokens.map((h, m) => {
    const x = zS(h, n);
    if (!a || typeof h == "string")
      return x;
    const w = new RegExp(`^${d[m]}$`, l);
    return (O) => {
      const _ = x(O);
      if (!w.test(_))
        throw new TypeError(`Invalid value for "${h.name}": ${JSON.stringify(_)}`);
      return _;
    };
  });
  return function(h = {}) {
    let m = "";
    for (const x of p)
      m += x(h);
    return m;
  };
}
function HS(e, t = {}) {
  const { decode: n = decodeURIComponent, loose: r = !0, delimiter: a = jv } = t, o = Fv(e, t), l = nd(r, a), u = o.keys.map((d) => {
    if (n && (d.modifier === "+" || d.modifier === "*")) {
      const { prefix: p = "", suffix: h = "", separator: m = h + p } = d, x = new RegExp(l(m), "g");
      return (w) => w.split(x).map(n);
    }
    return n || ed;
  });
  return function(d) {
    const p = o.exec(d);
    if (!p)
      return !1;
    const { 0: h, index: m } = p, x = /* @__PURE__ */ Object.create(null);
    for (let w = 1; w < p.length; w++) {
      if (p[w] === void 0)
        continue;
      const O = o.keys[w - 1], _ = u[w - 1];
      x[O.name] = _(p[w]);
    }
    return { path: h, index: m, params: x };
  };
}
function Qi(e) {
  return e.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
}
function US(e, t) {
  const n = Qi(e);
  return t ? `(?:${n})+(?!${n})` : n;
}
function nd(e, t) {
  if (!e)
    return Qi;
  const n = new RegExp(`(?:(?!${Qi(t)}).)+|(.)`, "g");
  return (r) => r.replace(n, US);
}
function Rv(e) {
  return e.sensitive ? "" : "i";
}
function tm(e, t, n, r) {
  const a = e instanceof tl ? e : td(e, r), { trailing: o = !0, loose: l = !0, start: u = !0, end: d = !0, strict: p = !1 } = r, h = nd(l, a.delimiter), m = $v(a, h, t, n, p);
  let x = u ? "^" : "";
  return x += m.join(""), o && (x += `(?:${h(a.delimiter)}$)?`), x += d ? "$" : `(?=${Qi(a.delimiter)}|$)`, x;
}
function $v(e, t, n, r, a) {
  const o = `(?:(?!${Qi(e.delimiter)}).)+?`;
  let l = "", u = !0;
  return e.tokens.map((d) => {
    if (typeof d == "string")
      return l = d, t(d);
    const { prefix: p = "", suffix: h = "", separator: m = h + p, modifier: x = "" } = d, w = t(p), O = t(h);
    if (d.name) {
      const _ = d.pattern ? `(?:${d.pattern})` : o, b = YS(_, d.name, r);
      if (u || (u = ju(b, p || l)), !u)
        throw new TypeError(`Ambiguous pattern for "${d.name}": ${za}`);
      if (u = !a || ju(b, h), l = "", n.push(d), x === "+" || x === "*") {
        const P = x === "*" ? "?" : "", C = t(m);
        if (!C)
          throw new TypeError(`Missing separator for "${d.name}": ${za}`);
        if (u || (u = !a || ju(b, m)), !u)
          throw new TypeError(`Ambiguous pattern for "${d.name}" separator: ${za}`);
        return u = !a, `(?:${w}(${_}(?:${C}${_})*)${O})${P}`;
      }
      return `(?:${w}(${_})${O})${x}`;
    }
    return `(?:${w}${O})${x}`;
  });
}
function YS(e, t, n) {
  try {
    return new RegExp(`^${e}$`, n);
  } catch (r) {
    throw new TypeError(`Invalid pattern for "${t}": ${r.message}`);
  }
}
function ju(e, t) {
  return t ? !e.test(t) : !1;
}
function Fv(e, t = {}) {
  const n = [], r = Rv(t);
  if (Array.isArray(e)) {
    const o = e.map((l) => tm(l, n, r, t));
    return Object.assign(new RegExp(o.join("|")), { keys: n });
  }
  const a = tm(e, n, r, t);
  return Object.assign(new RegExp(a), { keys: n });
}
const Lv = ({
  component: e,
  ...t
}) => /* @__PURE__ */ RS.jsx(e, { ...t });
function nm(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Wv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const o = nm(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          typeof o == "function" ? o() : nm(e[a], null);
        }
      };
  };
}
function Kr(...e) {
  return ee.useCallback(Wv(...e), e);
}
var Tt = ee.forwardRef((e, t) => {
  const { children: n, ...r } = e, a = ee.Children.toArray(n), o = a.find(KS);
  if (o) {
    const l = o.props.children, u = a.map((d) => d === o ? ee.Children.count(l) > 1 ? ee.Children.only(null) : ee.isValidElement(l) ? l.props.children : null : d);
    return /* @__PURE__ */ v.jsx(Ec, { ...r, ref: t, children: ee.isValidElement(l) ? ee.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ v.jsx(Ec, { ...r, ref: t, children: n });
});
Tt.displayName = "Slot";
var Ec = ee.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (ee.isValidElement(n)) {
    const a = XS(n);
    return ee.cloneElement(n, {
      ...GS(r, n.props),
      // @ts-ignore
      ref: t ? Wv(t, a) : a
    });
  }
  return ee.Children.count(n) > 1 ? ee.Children.only(null) : null;
});
Ec.displayName = "SlotClone";
var qS = ({ children: e }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: e });
function KS(e) {
  return ee.isValidElement(e) && e.type === qS;
}
function GS(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? a && o ? n[r] = (...u) => {
      o(...u), a(...u);
    } : a && (n[r] = a) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function XS(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const rd = (e) => e.type === "select-multiple", Vv = ee.createContext({}), ZS = ({
  asChild: e,
  className: t,
  disabled: n,
  ref: r,
  variant: a = "input",
  checked: o,
  ...l
}) => {
  const u = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(Vv.Provider, { value: { disabled: n }, children: /* @__PURE__ */ v.jsx(
    u,
    {
      className: Pe(
        "shadow-inner-sm placeholder:text-neutral-400",
        "border border-solid outline-transparent border-neutral-300 bg-white text-sm text-neutral-900 transition-colors duration-200",
        !n && "hover:border-neutral-400",
        !n && "ui-invalid:border-error-500",
        !n && "active:border-neutral-400",
        !n && "focus:!border-theme-500 focus:outline focus:outline-theme-100 focus:outline-3",
        !n && "focus-within:!border-theme-500 focus-within:outline focus-within:outline-theme-100 focus-within:outline-3",
        !n && "group-ui-highlighted:!border-theme-500 group-ui-highlighted:outline group-ui-highlighted:outline-theme-100 group-ui-highlighted:outline-3",
        !n && "ui-state-open:!border-theme-500 ui-state-open:outline ui-state-open:outline-theme-100 ui-state-open:outline-3",
        n && "bg-neutral-100 shadow-none",
        // variants
        a === "input" && "flex w-full rounded",
        a === "checkable" && Pe(
          o && !n && "bg-theme-600 !border-transparent",
          o && n && "bg-neutral-400 border-transparent",
          !n && "group-ui-state-checked:bg-theme-600 group-ui-state-checked:border-transparent",
          n && "group-ui-state-checked:bg-neutral-400"
        ),
        a === "button" && Pe(
          "shadow-sm flex gap-1 justify-between w-full group rounded",
          !n && "hover:bg-neutral-100",
          !n && "active:bg-neutral-200",
          !n && "ui-state-open:bg-neutral-200 ui-state-open:shadow-inner-sm",
          n && "opacity-100 bg-neutral-100 shadow-none"
        ),
        t
      ),
      ref: r,
      ...l
    }
  ) });
}, JS = ({ asChild: e, className: t, variant: n = "hidden", ...r }) => {
  const a = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(
    a,
    {
      className: Pe(
        n === "hidden" && "absolute bottom-0 opacity-0 h-0 w-0 pointer-events-none flex",
        n === "inset" && "absolute inset-0 opacity-0",
        t
      ),
      ...r
    }
  );
}, QS = ({ asChild: e, className: t, ...n }) => {
  const r = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(r, { className: Pe("flex flex-1 rounded overflow-hidden", t), ...n });
}, zv = (e) => {
  const t = [];
  return ee.Children.forEach(e, (n) => {
    ee.isValidElement(n) && n.type === ee.Fragment ? t.push(...zv(n.props.children)) : ee.isValidElement(n) && t.push(n);
  }), t;
}, eD = ({ asChild: e, className: t, children: n, ...r }) => {
  const a = zv(n), { disabled: o } = Yt(Vv);
  if (a.length === 0)
    return null;
  const l = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(
    l,
    {
      className: Pe("flex-none box-content top-0 right-0 flex gap-0.5 items-center p-0.5", t),
      ...r,
      children: a.map((u, d) => /* @__PURE__ */ v.jsxs(ee.Fragment, { children: [
        /* @__PURE__ */ v.jsx(Tt, { disabled: o, children: u }),
        d < a.length - 1 && /* @__PURE__ */ v.jsx("span", { className: "border-r border-solid border-neutral-300 h-4" })
      ] }, d))
    }
  );
}, tD = ({
  asChild: e,
  className: t,
  active: n,
  // variant = 'outline',
  ...r
}) => {
  const a = e ? Tt : "button";
  return /* @__PURE__ */ v.jsx(
    a,
    {
      type: "button",
      className: Pe(
        "flex rounded-sm justify-center items-center h-full box-content w-7 text-sm text-neutral-400 transition-colors duration-200",
        !r.disabled && "hover:text-neutral-600 hover:bg-neutral-100 active:!text-neutral-700 active:!bg-neutral-200",
        n && "!bg-neutral-200 !text-neutral-700",
        t
      ),
      tabIndex: -1,
      ...r
    }
  );
}, nD = (e) => e.type === "checkbox", rD = (e) => {
  if (e.target)
    return rd(e.target) ? Array.from(e.target.selectedOptions, (t) => t.value) : nD(e.target) ? e.target.checked : e.target.value;
}, Xt = (e, t, n) => {
  const [r, a] = Ki(e, t);
  return [r, (l) => {
    a(rD(l)), n == null || n(l);
  }];
}, ke = Object.assign(ZS, {
  Content: QS,
  Controls: eD,
  ControlButton: tD,
  Native: JS
});
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iD = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Bv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var aD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oD = Qs(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: a = "",
    children: o,
    iconNode: l,
    ...u
  }, d) => xc(
    "svg",
    {
      ref: d,
      ...aD,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Bv("lucide", a),
      ...u
    },
    [
      ...l.map(([p, h]) => xc(p, h)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = (e, t) => {
  const n = Qs(
    ({ className: r, ...a }, o) => xc(oD, {
      ref: o,
      iconNode: t,
      className: Bv(`lucide-${iD(e)}`, r),
      ...a
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = qt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hv = qt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sD = qt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lD = qt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uD = qt("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cD = qt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dD = qt("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fD = qt("FileArchive", [
  ["path", { d: "M10 12v-1", key: "v7bkov" }],
  ["path", { d: "M10 18v-2", key: "1cjy8d" }],
  ["path", { d: "M10 7V6", key: "dljcrl" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01", key: "gkbcor" }
  ],
  ["circle", { cx: "10", cy: "20", r: "2", key: "1xzdoj" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pD = qt("FileImage", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
  ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hD = qt("FileSpreadsheet", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ru = qt("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mD = qt("FileVideo", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m10 11 5 3-5 3v-6Z", key: "7ntvm4" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gD = qt("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vD = qt("Loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yD = qt("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xD = qt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _i = qt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), pn = (e, t) => {
  var r;
  const n = (r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")) == null ? void 0 : r.set;
  n == null || n.call(e, t), e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}, Uv = (e, t) => {
  const n = Array.from(e.options);
  Array.isArray(t) ? n.forEach((r) => {
    r.selected = t.includes(r.value);
  }) : n.forEach((r) => {
    r.selected = r.value === t;
  }), e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}, bB = (e) => rd(e) ? Array.from(e.selectedOptions).map((t) => t.value) : e.value, wB = (e, t) => {
  var r;
  const n = (r = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")) == null ? void 0 : r.set;
  n == null || n.call(e, t), e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}, Yv = ({
  className: e,
  inputClassName: t,
  hideClear: n = !1,
  controls: r,
  widgetRef: a,
  ref: o,
  ...l
}) => {
  const u = ee.useRef(null), [d, p] = Xt("", l.value, l.onChange), h = () => {
    var m;
    pn(u.current, ""), (m = u.current) == null || m.focus();
  };
  return /* @__PURE__ */ v.jsxs(ke, { className: e, readOnly: l.readOnly, disabled: l.disabled, ref: a, children: [
    /* @__PURE__ */ v.jsx(ke.Content, { children: /* @__PURE__ */ v.jsx(
      "input",
      {
        ref: nn(u, o),
        className: Pe(
          "px-2 py-1.5 flex-1 min-w-0 bg-transparent placeholder:text-neutral-400",
          t
        ),
        ...l,
        value: d,
        onChange: p
      }
    ) }),
    /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
      r,
      d && !n && /* @__PURE__ */ v.jsx(ke.ControlButton, { onClick: h, children: /* @__PURE__ */ v.jsx(_i, {}) })
    ] })
  ] });
}, Ba = (e) => e != null && e !== !1 && e !== 0, qv = ({ className: e, ...t }) => /* @__PURE__ */ v.jsx("div", { className: Pe("flex flex-col gap-1", e), ...t }), Kv = ({ children: e, className: t, ...n }) => /* @__PURE__ */ v.jsxs("label", { className: Pe("text-sm font-medium", t), ...n, children: [
  e,
  " ",
  n.required && /* @__PURE__ */ v.jsx("span", { className: "text-red-500", children: "*" })
] }), Gv = ({ children: e, className: t, ...n }) => e ? /* @__PURE__ */ v.jsx("p", { className: Pe("text-sm text-error-500 whitespace-pre-line", t), ...n, children: e }) : null, Xv = ({ children: e, className: t, ...n }) => e ? /* @__PURE__ */ v.jsx("p", { className: Pe("text-sm text-neutral-500", t), ...n, children: e }) : null, sr = ({ ref: e, label: t, error: n, helpText: r, widget: a, className: o, ...l }) => {
  const u = Tv(), d = ee.useRef(null);
  return ct(() => {
    d.current && d.current.setCustomValidity(n || "");
  }, [n]), /* @__PURE__ */ v.jsxs(
    qv,
    {
      className: o,
      "data-error": Ba(n) ? n || "" : void 0,
      "data-invalid": Ba(n) ? "" : void 0,
      children: [
        t && /* @__PURE__ */ v.jsx(Kv, { required: l.required, htmlFor: l.id || u, children: t }),
        /* @__PURE__ */ v.jsx(Lv, { component: a || Yv, ...l, ref: nn(d, e), id: l.id || u }),
        Ba(n) ? /* @__PURE__ */ v.jsx(Gv, { children: (n == null ? void 0 : n.message) || n || "" }) : r && /* @__PURE__ */ v.jsx(Xv, { children: r })
      ]
    }
  );
}, ns = Object.assign(qv, {
  Label: Kv,
  Error: Gv,
  HelpText: Xv
}), bD = ({ className: e, indeterminate: t, ...n }) => {
  const r = ee.useRef(null), [a, o] = Xt(!1, n.checked, n.onChange);
  return ct(() => {
    r.current && (r.current.indeterminate = !!t);
  }, [t]), /* @__PURE__ */ v.jsxs(
    ke,
    {
      variant: "checkable",
      disabled: n.disabled,
      checked: a,
      className: Pe("relative flex items-center justify-center w-5 h-5 rounded", e),
      children: [
        /* @__PURE__ */ v.jsx(ke.Native, { asChild: !0, variant: "inset", children: /* @__PURE__ */ v.jsx(
          "input",
          {
            ...n,
            type: "checkbox",
            checked: a,
            onChange: o,
            ref: nn(r, n.ref)
          }
        ) }),
        /* @__PURE__ */ v.jsx(ke.Content, { className: "text-white justify-center items-center", children: t ? /* @__PURE__ */ v.jsx(yD, {}) : a && /* @__PURE__ */ v.jsx(nl, {}) })
      ]
    }
  );
}, _B = ({
  label: e,
  error: t,
  helpText: n,
  className: r,
  widget: a,
  defaultValue: o,
  value: l,
  onChange: u,
  reverse: d,
  ...p
}) => {
  const h = Tv(), m = (x) => {
    u == null || u({
      ...x,
      target: {
        ...x.target,
        value: !!x.target.checked
      }
    });
  };
  return /* @__PURE__ */ v.jsxs(
    ns,
    {
      className: Pe(
        "flex gap-2",
        d ? "flex-row-reverse items-center" : "flex-row  items-start",
        r
      ),
      "data-error": t || void 0,
      "data-invalid": t ? "" : void 0,
      children: [
        /* @__PURE__ */ v.jsx("div", { className: "flex-none", children: /* @__PURE__ */ v.jsx(
          Lv,
          {
            defaultChecked: o,
            checked: l,
            className: Pe(!d && "mt-0.5"),
            component: a || bD,
            onChange: m,
            ...p,
            id: p.id || h
          }
        ) }),
        e || t || n ? /* @__PURE__ */ v.jsxs("div", { className: "flex-1", children: [
          e && /* @__PURE__ */ v.jsx(ns.Label, { required: p.required, htmlFor: p.id || h, children: e }),
          t ? /* @__PURE__ */ v.jsx(ns.Error, { children: (t == null ? void 0 : t.message) || t }) : n && /* @__PURE__ */ v.jsx(ns.HelpText, { children: n })
        ] }) : null
      ]
    }
  );
};
function Vr(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function Zv(e, t = []) {
  let n = [];
  function r(o, l) {
    const u = ee.createContext(l), d = n.length;
    n = [...n, l];
    const p = (m) => {
      var P;
      const { scope: x, children: w, ...O } = m, _ = ((P = x == null ? void 0 : x[e]) == null ? void 0 : P[d]) || u, b = ee.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ v.jsx(_.Provider, { value: b, children: w });
    };
    p.displayName = o + "Provider";
    function h(m, x) {
      var _;
      const w = ((_ = x == null ? void 0 : x[e]) == null ? void 0 : _[d]) || u, O = ee.useContext(w);
      if (O) return O;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${o}\``);
    }
    return [p, h];
  }
  const a = () => {
    const o = n.map((l) => ee.createContext(l));
    return function(u) {
      const d = (u == null ? void 0 : u[e]) || o;
      return ee.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: d } }),
        [u, d]
      );
    };
  };
  return a.scopeName = e, [r, wD(a, ...t)];
}
function wD(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const l = r.reduce((u, { useScope: d, scopeName: p }) => {
        const m = d(o)[`__scope${p}`];
        return { ...u, ...m };
      }, {});
      return ee.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var _D = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Cr = _D.reduce((e, t) => {
  const n = ee.forwardRef((r, a) => {
    const { asChild: o, ...l } = r, u = o ? Tt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(u, { ...l, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function ED(e, t) {
  e && Sv.flushSync(() => e.dispatchEvent(t));
}
function Br(e) {
  const t = ee.useRef(e);
  return ee.useEffect(() => {
    t.current = e;
  }), ee.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function CD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Br(e);
  ee.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var TD = "DismissableLayer", Cc = "dismissableLayer.update", OD = "dismissableLayer.pointerDownOutside", SD = "dismissableLayer.focusOutside", rm, Jv = ee.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Qv = ee.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: l,
      onDismiss: u,
      ...d
    } = e, p = ee.useContext(Jv), [h, m] = ee.useState(null), x = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = ee.useState({}), O = Kr(t, (J) => m(J)), _ = Array.from(p.layers), [b] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), P = _.indexOf(b), C = h ? _.indexOf(h) : -1, k = p.layersWithOutsidePointerEventsDisabled.size > 0, D = C >= P, S = PD((J) => {
      const ne = J.target, V = [...p.branches].some((Y) => Y.contains(ne));
      !D || V || (a == null || a(J), l == null || l(J), J.defaultPrevented || u == null || u());
    }, x), Z = AD((J) => {
      const ne = J.target;
      [...p.branches].some((Y) => Y.contains(ne)) || (o == null || o(J), l == null || l(J), J.defaultPrevented || u == null || u());
    }, x);
    return CD((J) => {
      C === p.layers.size - 1 && (r == null || r(J), !J.defaultPrevented && u && (J.preventDefault(), u()));
    }, x), ee.useEffect(() => {
      if (h)
        return n && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (rm = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(h)), p.layers.add(h), im(), () => {
          n && p.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = rm);
        };
    }, [h, x, n, p]), ee.useEffect(() => () => {
      h && (p.layers.delete(h), p.layersWithOutsidePointerEventsDisabled.delete(h), im());
    }, [h, p]), ee.useEffect(() => {
      const J = () => w({});
      return document.addEventListener(Cc, J), () => document.removeEventListener(Cc, J);
    }, []), /* @__PURE__ */ v.jsx(
      Cr.div,
      {
        ...d,
        ref: O,
        style: {
          pointerEvents: k ? D ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Vr(e.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: Vr(e.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: Vr(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
Qv.displayName = TD;
var DD = "DismissableLayerBranch", kD = ee.forwardRef((e, t) => {
  const n = ee.useContext(Jv), r = ee.useRef(null), a = Kr(t, r);
  return ee.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ v.jsx(Cr.div, { ...e, ref: a });
});
kD.displayName = DD;
function PD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Br(e), r = ee.useRef(!1), a = ee.useRef(() => {
  });
  return ee.useEffect(() => {
    const o = (u) => {
      if (u.target && !r.current) {
        let d = function() {
          ey(
            OD,
            n,
            p,
            { discrete: !0 }
          );
        };
        const p = { originalEvent: u };
        u.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = d, t.addEventListener("click", a.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", a.current);
      r.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", o), t.removeEventListener("click", a.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function AD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Br(e), r = ee.useRef(!1);
  return ee.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && ey(SD, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function im() {
  const e = new CustomEvent(Cc);
  document.dispatchEvent(e);
}
function ey(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? ED(a, o) : a.dispatchEvent(o);
}
var $u = 0;
function ID() {
  ee.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? am()), document.body.insertAdjacentElement("beforeend", e[1] ?? am()), $u++, () => {
      $u === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), $u--;
    };
  }, []);
}
function am() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Fu = "focusScope.autoFocusOnMount", Lu = "focusScope.autoFocusOnUnmount", om = { bubbles: !1, cancelable: !0 }, MD = "FocusScope", ty = ee.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...l
  } = e, [u, d] = ee.useState(null), p = Br(a), h = Br(o), m = ee.useRef(null), x = Kr(t, (_) => d(_)), w = ee.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  ee.useEffect(() => {
    if (r) {
      let _ = function(k) {
        if (w.paused || !u) return;
        const D = k.target;
        u.contains(D) ? m.current = D : Lr(m.current, { select: !0 });
      }, b = function(k) {
        if (w.paused || !u) return;
        const D = k.relatedTarget;
        D !== null && (u.contains(D) || Lr(m.current, { select: !0 }));
      }, P = function(k) {
        if (document.activeElement === document.body)
          for (const S of k)
            S.removedNodes.length > 0 && Lr(u);
      };
      document.addEventListener("focusin", _), document.addEventListener("focusout", b);
      const C = new MutationObserver(P);
      return u && C.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", _), document.removeEventListener("focusout", b), C.disconnect();
      };
    }
  }, [r, u, w.paused]), ee.useEffect(() => {
    if (u) {
      lm.add(w);
      const _ = document.activeElement;
      if (!u.contains(_)) {
        const P = new CustomEvent(Fu, om);
        u.addEventListener(Fu, p), u.dispatchEvent(P), P.defaultPrevented || (ND(LD(ny(u)), { select: !0 }), document.activeElement === _ && Lr(u));
      }
      return () => {
        u.removeEventListener(Fu, p), setTimeout(() => {
          const P = new CustomEvent(Lu, om);
          u.addEventListener(Lu, h), u.dispatchEvent(P), P.defaultPrevented || Lr(_ ?? document.body, { select: !0 }), u.removeEventListener(Lu, h), lm.remove(w);
        }, 0);
      };
    }
  }, [u, p, h, w]);
  const O = ee.useCallback(
    (_) => {
      if (!n && !r || w.paused) return;
      const b = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey, P = document.activeElement;
      if (b && P) {
        const C = _.currentTarget, [k, D] = jD(C);
        k && D ? !_.shiftKey && P === D ? (_.preventDefault(), n && Lr(k, { select: !0 })) : _.shiftKey && P === k && (_.preventDefault(), n && Lr(D, { select: !0 })) : P === C && _.preventDefault();
      }
    },
    [n, r, w.paused]
  );
  return /* @__PURE__ */ v.jsx(Cr.div, { tabIndex: -1, ...l, ref: x, onKeyDown: O });
});
ty.displayName = MD;
function ND(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Lr(r, { select: t }), document.activeElement !== n) return;
}
function jD(e) {
  const t = ny(e), n = sm(t, e), r = sm(t.reverse(), e);
  return [n, r];
}
function ny(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function sm(e, t) {
  for (const n of e)
    if (!RD(n, { upTo: t })) return n;
}
function RD(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function $D(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Lr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && $D(e) && t && e.select();
  }
}
var lm = FD();
function FD() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = um(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = um(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function um(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function LD(e) {
  return e.filter((t) => t.tagName !== "A");
}
var vi = globalThis != null && globalThis.document ? ee.useLayoutEffect : () => {
}, WD = ee.useId || (() => {
}), VD = 0;
function zD(e) {
  const [t, n] = ee.useState(WD());
  return vi(() => {
    e || n((r) => r ?? String(VD++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const BD = ["top", "right", "bottom", "left"], Hr = Math.min, _n = Math.max, Ds = Math.round, rs = Math.floor, ir = (e) => ({
  x: e,
  y: e
}), HD = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, UD = {
  start: "end",
  end: "start"
};
function Tc(e, t, n) {
  return _n(e, Hr(t, n));
}
function _r(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Er(e) {
  return e.split("-")[0];
}
function oa(e) {
  return e.split("-")[1];
}
function id(e) {
  return e === "x" ? "y" : "x";
}
function ad(e) {
  return e === "y" ? "height" : "width";
}
function Ur(e) {
  return ["top", "bottom"].includes(Er(e)) ? "y" : "x";
}
function od(e) {
  return id(Ur(e));
}
function YD(e, t, n) {
  n === void 0 && (n = !1);
  const r = oa(e), a = od(e), o = ad(a);
  let l = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (l = ks(l)), [l, ks(l)];
}
function qD(e) {
  const t = ks(e);
  return [Oc(e), t, Oc(t)];
}
function Oc(e) {
  return e.replace(/start|end/g, (t) => UD[t]);
}
function KD(e, t, n) {
  const r = ["left", "right"], a = ["right", "left"], o = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : r : t ? r : a;
    case "left":
    case "right":
      return t ? o : l;
    default:
      return [];
  }
}
function GD(e, t, n, r) {
  const a = oa(e);
  let o = KD(Er(e), n === "start", r);
  return a && (o = o.map((l) => l + "-" + a), t && (o = o.concat(o.map(Oc)))), o;
}
function ks(e) {
  return e.replace(/left|right|bottom|top/g, (t) => HD[t]);
}
function XD(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ry(e) {
  return typeof e != "number" ? XD(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ps(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: a
  } = e;
  return {
    width: r,
    height: a,
    top: n,
    left: t,
    right: t + r,
    bottom: n + a,
    x: t,
    y: n
  };
}
function cm(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const o = Ur(t), l = od(t), u = ad(l), d = Er(t), p = o === "y", h = r.x + r.width / 2 - a.width / 2, m = r.y + r.height / 2 - a.height / 2, x = r[u] / 2 - a[u] / 2;
  let w;
  switch (d) {
    case "top":
      w = {
        x: h,
        y: r.y - a.height
      };
      break;
    case "bottom":
      w = {
        x: h,
        y: r.y + r.height
      };
      break;
    case "right":
      w = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      w = {
        x: r.x - a.width,
        y: m
      };
      break;
    default:
      w = {
        x: r.x,
        y: r.y
      };
  }
  switch (oa(t)) {
    case "start":
      w[l] -= x * (n && p ? -1 : 1);
      break;
    case "end":
      w[l] += x * (n && p ? -1 : 1);
      break;
  }
  return w;
}
const ZD = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: l
  } = n, u = o.filter(Boolean), d = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let p = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: h,
    y: m
  } = cm(p, r, d), x = r, w = {}, O = 0;
  for (let _ = 0; _ < u.length; _++) {
    const {
      name: b,
      fn: P
    } = u[_], {
      x: C,
      y: k,
      data: D,
      reset: S
    } = await P({
      x: h,
      y: m,
      initialPlacement: r,
      placement: x,
      strategy: a,
      middlewareData: w,
      rects: p,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = C ?? h, m = k ?? m, w = {
      ...w,
      [b]: {
        ...w[b],
        ...D
      }
    }, S && O <= 50 && (O++, typeof S == "object" && (S.placement && (x = S.placement), S.rects && (p = S.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : S.rects), {
      x: h,
      y: m
    } = cm(p, x, d)), _ = -1);
  }
  return {
    x: h,
    y: m,
    placement: x,
    strategy: a,
    middlewareData: w
  };
};
async function Ka(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: o,
    rects: l,
    elements: u,
    strategy: d
  } = e, {
    boundary: p = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: m = "floating",
    altBoundary: x = !1,
    padding: w = 0
  } = _r(t, e), O = ry(w), b = u[x ? m === "floating" ? "reference" : "floating" : m], P = Ps(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(b))) == null || n ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(u.floating)),
    boundary: p,
    rootBoundary: h,
    strategy: d
  })), C = m === "floating" ? {
    x: r,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u.floating)), D = await (o.isElement == null ? void 0 : o.isElement(k)) ? await (o.getScale == null ? void 0 : o.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Ps(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: C,
    offsetParent: k,
    strategy: d
  }) : C);
  return {
    top: (P.top - S.top + O.top) / D.y,
    bottom: (S.bottom - P.bottom + O.bottom) / D.y,
    left: (P.left - S.left + O.left) / D.x,
    right: (S.right - P.right + O.right) / D.x
  };
}
const JD = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: o,
      platform: l,
      elements: u,
      middlewareData: d
    } = t, {
      element: p,
      padding: h = 0
    } = _r(e, t) || {};
    if (p == null)
      return {};
    const m = ry(h), x = {
      x: n,
      y: r
    }, w = od(a), O = ad(w), _ = await l.getDimensions(p), b = w === "y", P = b ? "top" : "left", C = b ? "bottom" : "right", k = b ? "clientHeight" : "clientWidth", D = o.reference[O] + o.reference[w] - x[w] - o.floating[O], S = x[w] - o.reference[w], Z = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(p));
    let J = Z ? Z[k] : 0;
    (!J || !await (l.isElement == null ? void 0 : l.isElement(Z))) && (J = u.floating[k] || o.floating[O]);
    const ne = D / 2 - S / 2, V = J / 2 - _[O] / 2 - 1, Y = Hr(m[P], V), te = Hr(m[C], V), R = Y, z = J - _[O] - te, B = J / 2 - _[O] / 2 + ne, U = Tc(R, B, z), K = !d.arrow && oa(a) != null && B !== U && o.reference[O] / 2 - (B < R ? Y : te) - _[O] / 2 < 0, j = K ? B < R ? B - R : B - z : 0;
    return {
      [w]: x[w] + j,
      data: {
        [w]: U,
        centerOffset: B - U - j,
        ...K && {
          alignmentOffset: j
        }
      },
      reset: K
    };
  }
}), QD = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        middlewareData: o,
        rects: l,
        initialPlacement: u,
        platform: d,
        elements: p
      } = t, {
        mainAxis: h = !0,
        crossAxis: m = !0,
        fallbackPlacements: x,
        fallbackStrategy: w = "bestFit",
        fallbackAxisSideDirection: O = "none",
        flipAlignment: _ = !0,
        ...b
      } = _r(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const P = Er(a), C = Ur(u), k = Er(u) === u, D = await (d.isRTL == null ? void 0 : d.isRTL(p.floating)), S = x || (k || !_ ? [ks(u)] : qD(u)), Z = O !== "none";
      !x && Z && S.push(...GD(u, _, O, D));
      const J = [u, ...S], ne = await Ka(t, b), V = [];
      let Y = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (h && V.push(ne[P]), m) {
        const B = YD(a, l, D);
        V.push(ne[B[0]], ne[B[1]]);
      }
      if (Y = [...Y, {
        placement: a,
        overflows: V
      }], !V.every((B) => B <= 0)) {
        var te, R;
        const B = (((te = o.flip) == null ? void 0 : te.index) || 0) + 1, U = J[B];
        if (U)
          return {
            data: {
              index: B,
              overflows: Y
            },
            reset: {
              placement: U
            }
          };
        let K = (R = Y.filter((j) => j.overflows[0] <= 0).sort((j, I) => j.overflows[1] - I.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!K)
          switch (w) {
            case "bestFit": {
              var z;
              const j = (z = Y.filter((I) => {
                if (Z) {
                  const X = Ur(I.placement);
                  return X === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((X) => X > 0).reduce((X, M) => X + M, 0)]).sort((I, X) => I[1] - X[1])[0]) == null ? void 0 : z[0];
              j && (K = j);
              break;
            }
            case "initialPlacement":
              K = u;
              break;
          }
        if (a !== K)
          return {
            reset: {
              placement: K
            }
          };
      }
      return {};
    }
  };
};
function dm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function fm(e) {
  return BD.some((t) => e[t] >= 0);
}
const ek = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...a
      } = _r(e, t);
      switch (r) {
        case "referenceHidden": {
          const o = await Ka(t, {
            ...a,
            elementContext: "reference"
          }), l = dm(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: fm(l)
            }
          };
        }
        case "escaped": {
          const o = await Ka(t, {
            ...a,
            altBoundary: !0
          }), l = dm(o, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: fm(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function tk(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), l = Er(n), u = oa(n), d = Ur(n) === "y", p = ["left", "top"].includes(l) ? -1 : 1, h = o && d ? -1 : 1, m = _r(t, e);
  let {
    mainAxis: x,
    crossAxis: w,
    alignmentAxis: O
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return u && typeof O == "number" && (w = u === "end" ? O * -1 : O), d ? {
    x: w * h,
    y: x * p
  } : {
    x: x * p,
    y: w * h
  };
}
const nk = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: a,
        y: o,
        placement: l,
        middlewareData: u
      } = t, d = await tk(t, e);
      return l === ((n = u.offset) == null ? void 0 : n.placement) && (r = u.arrow) != null && r.alignmentOffset ? {} : {
        x: a + d.x,
        y: o + d.y,
        data: {
          ...d,
          placement: l
        }
      };
    }
  };
}, rk = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: a
      } = t, {
        mainAxis: o = !0,
        crossAxis: l = !1,
        limiter: u = {
          fn: (b) => {
            let {
              x: P,
              y: C
            } = b;
            return {
              x: P,
              y: C
            };
          }
        },
        ...d
      } = _r(e, t), p = {
        x: n,
        y: r
      }, h = await Ka(t, d), m = Ur(Er(a)), x = id(m);
      let w = p[x], O = p[m];
      if (o) {
        const b = x === "y" ? "top" : "left", P = x === "y" ? "bottom" : "right", C = w + h[b], k = w - h[P];
        w = Tc(C, w, k);
      }
      if (l) {
        const b = m === "y" ? "top" : "left", P = m === "y" ? "bottom" : "right", C = O + h[b], k = O - h[P];
        O = Tc(C, O, k);
      }
      const _ = u.fn({
        ...t,
        [x]: w,
        [m]: O
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - r,
          enabled: {
            [x]: o,
            [m]: l
          }
        }
      };
    }
  };
}, ik = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: a,
        rects: o,
        middlewareData: l
      } = t, {
        offset: u = 0,
        mainAxis: d = !0,
        crossAxis: p = !0
      } = _r(e, t), h = {
        x: n,
        y: r
      }, m = Ur(a), x = id(m);
      let w = h[x], O = h[m];
      const _ = _r(u, t), b = typeof _ == "number" ? {
        mainAxis: _,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ..._
      };
      if (d) {
        const k = x === "y" ? "height" : "width", D = o.reference[x] - o.floating[k] + b.mainAxis, S = o.reference[x] + o.reference[k] - b.mainAxis;
        w < D ? w = D : w > S && (w = S);
      }
      if (p) {
        var P, C;
        const k = x === "y" ? "width" : "height", D = ["top", "left"].includes(Er(a)), S = o.reference[m] - o.floating[k] + (D && ((P = l.offset) == null ? void 0 : P[m]) || 0) + (D ? 0 : b.crossAxis), Z = o.reference[m] + o.reference[k] + (D ? 0 : ((C = l.offset) == null ? void 0 : C[m]) || 0) - (D ? b.crossAxis : 0);
        O < S ? O = S : O > Z && (O = Z);
      }
      return {
        [x]: w,
        [m]: O
      };
    }
  };
}, ak = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        rects: o,
        platform: l,
        elements: u
      } = t, {
        apply: d = () => {
        },
        ...p
      } = _r(e, t), h = await Ka(t, p), m = Er(a), x = oa(a), w = Ur(a) === "y", {
        width: O,
        height: _
      } = o.floating;
      let b, P;
      m === "top" || m === "bottom" ? (b = m, P = x === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (P = m, b = x === "end" ? "top" : "bottom");
      const C = _ - h.top - h.bottom, k = O - h.left - h.right, D = Hr(_ - h[b], C), S = Hr(O - h[P], k), Z = !t.middlewareData.shift;
      let J = D, ne = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (ne = k), (r = t.middlewareData.shift) != null && r.enabled.y && (J = C), Z && !x) {
        const Y = _n(h.left, 0), te = _n(h.right, 0), R = _n(h.top, 0), z = _n(h.bottom, 0);
        w ? ne = O - 2 * (Y !== 0 || te !== 0 ? Y + te : _n(h.left, h.right)) : J = _ - 2 * (R !== 0 || z !== 0 ? R + z : _n(h.top, h.bottom));
      }
      await d({
        ...t,
        availableWidth: ne,
        availableHeight: J
      });
      const V = await l.getDimensions(u.floating);
      return O !== V.width || _ !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function rl() {
  return typeof window < "u";
}
function sa(e) {
  return iy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function En(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function lr(e) {
  var t;
  return (t = (iy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function iy(e) {
  return rl() ? e instanceof Node || e instanceof En(e).Node : !1;
}
function Un(e) {
  return rl() ? e instanceof Element || e instanceof En(e).Element : !1;
}
function ar(e) {
  return rl() ? e instanceof HTMLElement || e instanceof En(e).HTMLElement : !1;
}
function pm(e) {
  return !rl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof En(e).ShadowRoot;
}
function to(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Yn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function ok(e) {
  return ["table", "td", "th"].includes(sa(e));
}
function il(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function sd(e) {
  const t = ld(), n = Un(e) ? Yn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function sk(e) {
  let t = Yr(e);
  for (; ar(t) && !ea(t); ) {
    if (sd(t))
      return t;
    if (il(t))
      return null;
    t = Yr(t);
  }
  return null;
}
function ld() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ea(e) {
  return ["html", "body", "#document"].includes(sa(e));
}
function Yn(e) {
  return En(e).getComputedStyle(e);
}
function al(e) {
  return Un(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Yr(e) {
  if (sa(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    pm(e) && e.host || // Fallback.
    lr(e)
  );
  return pm(t) ? t.host : t;
}
function ay(e) {
  const t = Yr(e);
  return ea(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ar(t) && to(t) ? t : ay(t);
}
function Ga(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = ay(e), o = a === ((r = e.ownerDocument) == null ? void 0 : r.body), l = En(a);
  if (o) {
    const u = Sc(l);
    return t.concat(l, l.visualViewport || [], to(a) ? a : [], u && n ? Ga(u) : []);
  }
  return t.concat(a, Ga(a, [], n));
}
function Sc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function oy(e) {
  const t = Yn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = ar(e), o = a ? e.offsetWidth : n, l = a ? e.offsetHeight : r, u = Ds(n) !== o || Ds(r) !== l;
  return u && (n = o, r = l), {
    width: n,
    height: r,
    $: u
  };
}
function ud(e) {
  return Un(e) ? e : e.contextElement;
}
function Gi(e) {
  const t = ud(e);
  if (!ar(t))
    return ir(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: o
  } = oy(t);
  let l = (o ? Ds(n.width) : n.width) / r, u = (o ? Ds(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const lk = /* @__PURE__ */ ir(0);
function sy(e) {
  const t = En(e);
  return !ld() || !t.visualViewport ? lk : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function uk(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== En(e) ? !1 : t;
}
function yi(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = ud(e);
  let l = ir(1);
  t && (r ? Un(r) && (l = Gi(r)) : l = Gi(e));
  const u = uk(o, n, r) ? sy(o) : ir(0);
  let d = (a.left + u.x) / l.x, p = (a.top + u.y) / l.y, h = a.width / l.x, m = a.height / l.y;
  if (o) {
    const x = En(o), w = r && Un(r) ? En(r) : r;
    let O = x, _ = Sc(O);
    for (; _ && r && w !== O; ) {
      const b = Gi(_), P = _.getBoundingClientRect(), C = Yn(_), k = P.left + (_.clientLeft + parseFloat(C.paddingLeft)) * b.x, D = P.top + (_.clientTop + parseFloat(C.paddingTop)) * b.y;
      d *= b.x, p *= b.y, h *= b.x, m *= b.y, d += k, p += D, O = En(_), _ = Sc(O);
    }
  }
  return Ps({
    width: h,
    height: m,
    x: d,
    y: p
  });
}
function cd(e, t) {
  const n = al(e).scrollLeft;
  return t ? t.left + n : yi(lr(e)).left + n;
}
function ly(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    cd(e, r)
  )), o = r.top + t.scrollTop;
  return {
    x: a,
    y: o
  };
}
function ck(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const o = a === "fixed", l = lr(r), u = t ? il(t.floating) : !1;
  if (r === l || u && o)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = ir(1);
  const h = ir(0), m = ar(r);
  if ((m || !m && !o) && ((sa(r) !== "body" || to(l)) && (d = al(r)), ar(r))) {
    const w = yi(r);
    p = Gi(r), h.x = w.x + r.clientLeft, h.y = w.y + r.clientTop;
  }
  const x = l && !m && !o ? ly(l, d, !0) : ir(0);
  return {
    width: n.width * p.x,
    height: n.height * p.y,
    x: n.x * p.x - d.scrollLeft * p.x + h.x + x.x,
    y: n.y * p.y - d.scrollTop * p.y + h.y + x.y
  };
}
function dk(e) {
  return Array.from(e.getClientRects());
}
function fk(e) {
  const t = lr(e), n = al(e), r = e.ownerDocument.body, a = _n(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = _n(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + cd(e);
  const u = -n.scrollTop;
  return Yn(r).direction === "rtl" && (l += _n(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: o,
    x: l,
    y: u
  };
}
function pk(e, t) {
  const n = En(e), r = lr(e), a = n.visualViewport;
  let o = r.clientWidth, l = r.clientHeight, u = 0, d = 0;
  if (a) {
    o = a.width, l = a.height;
    const p = ld();
    (!p || p && t === "fixed") && (u = a.offsetLeft, d = a.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: u,
    y: d
  };
}
function hk(e, t) {
  const n = yi(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, o = ar(e) ? Gi(e) : ir(1), l = e.clientWidth * o.x, u = e.clientHeight * o.y, d = a * o.x, p = r * o.y;
  return {
    width: l,
    height: u,
    x: d,
    y: p
  };
}
function hm(e, t, n) {
  let r;
  if (t === "viewport")
    r = pk(e, n);
  else if (t === "document")
    r = fk(lr(e));
  else if (Un(t))
    r = hk(t, n);
  else {
    const a = sy(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Ps(r);
}
function uy(e, t) {
  const n = Yr(e);
  return n === t || !Un(n) || ea(n) ? !1 : Yn(n).position === "fixed" || uy(n, t);
}
function mk(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ga(e, [], !1).filter((u) => Un(u) && sa(u) !== "body"), a = null;
  const o = Yn(e).position === "fixed";
  let l = o ? Yr(e) : e;
  for (; Un(l) && !ea(l); ) {
    const u = Yn(l), d = sd(l);
    !d && u.position === "fixed" && (a = null), (o ? !d && !a : !d && u.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || to(l) && !d && uy(e, l)) ? r = r.filter((h) => h !== l) : a = u, l = Yr(l);
  }
  return t.set(e, r), r;
}
function gk(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? il(t) ? [] : mk(t, this._c) : [].concat(n), r], u = l[0], d = l.reduce((p, h) => {
    const m = hm(t, h, a);
    return p.top = _n(m.top, p.top), p.right = Hr(m.right, p.right), p.bottom = Hr(m.bottom, p.bottom), p.left = _n(m.left, p.left), p;
  }, hm(t, u, a));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function vk(e) {
  const {
    width: t,
    height: n
  } = oy(e);
  return {
    width: t,
    height: n
  };
}
function yk(e, t, n) {
  const r = ar(t), a = lr(t), o = n === "fixed", l = yi(e, !0, o, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = ir(0);
  if (r || !r && !o)
    if ((sa(t) !== "body" || to(a)) && (u = al(t)), r) {
      const x = yi(t, !0, o, t);
      d.x = x.x + t.clientLeft, d.y = x.y + t.clientTop;
    } else a && (d.x = cd(a));
  const p = a && !r && !o ? ly(a, u) : ir(0), h = l.left + u.scrollLeft - d.x - p.x, m = l.top + u.scrollTop - d.y - p.y;
  return {
    x: h,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Wu(e) {
  return Yn(e).position === "static";
}
function mm(e, t) {
  if (!ar(e) || Yn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return lr(e) === n && (n = n.ownerDocument.body), n;
}
function cy(e, t) {
  const n = En(e);
  if (il(e))
    return n;
  if (!ar(e)) {
    let a = Yr(e);
    for (; a && !ea(a); ) {
      if (Un(a) && !Wu(a))
        return a;
      a = Yr(a);
    }
    return n;
  }
  let r = mm(e, t);
  for (; r && ok(r) && Wu(r); )
    r = mm(r, t);
  return r && ea(r) && Wu(r) && !sd(r) ? n : r || sk(e) || n;
}
const xk = async function(e) {
  const t = this.getOffsetParent || cy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: yk(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function bk(e) {
  return Yn(e).direction === "rtl";
}
const wk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ck,
  getDocumentElement: lr,
  getClippingRect: gk,
  getOffsetParent: cy,
  getElementRects: xk,
  getClientRects: dk,
  getDimensions: vk,
  getScale: Gi,
  isElement: Un,
  isRTL: bk
};
function dy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function _k(e, t) {
  let n = null, r;
  const a = lr(e);
  function o() {
    var u;
    clearTimeout(r), (u = n) == null || u.disconnect(), n = null;
  }
  function l(u, d) {
    u === void 0 && (u = !1), d === void 0 && (d = 1), o();
    const p = e.getBoundingClientRect(), {
      left: h,
      top: m,
      width: x,
      height: w
    } = p;
    if (u || t(), !x || !w)
      return;
    const O = rs(m), _ = rs(a.clientWidth - (h + x)), b = rs(a.clientHeight - (m + w)), P = rs(h), k = {
      rootMargin: -O + "px " + -_ + "px " + -b + "px " + -P + "px",
      threshold: _n(0, Hr(1, d)) || 1
    };
    let D = !0;
    function S(Z) {
      const J = Z[0].intersectionRatio;
      if (J !== d) {
        if (!D)
          return l();
        J ? l(!1, J) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      J === 1 && !dy(p, e.getBoundingClientRect()) && l(), D = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...k,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, k);
    }
    n.observe(e);
  }
  return l(!0), o;
}
function Ek(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = r, p = ud(e), h = a || o ? [...p ? Ga(p) : [], ...Ga(t)] : [];
  h.forEach((P) => {
    a && P.addEventListener("scroll", n, {
      passive: !0
    }), o && P.addEventListener("resize", n);
  });
  const m = p && u ? _k(p, n) : null;
  let x = -1, w = null;
  l && (w = new ResizeObserver((P) => {
    let [C] = P;
    C && C.target === p && w && (w.unobserve(t), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var k;
      (k = w) == null || k.observe(t);
    })), n();
  }), p && !d && w.observe(p), w.observe(t));
  let O, _ = d ? yi(e) : null;
  d && b();
  function b() {
    const P = yi(e);
    _ && !dy(_, P) && n(), _ = P, O = requestAnimationFrame(b);
  }
  return n(), () => {
    var P;
    h.forEach((C) => {
      a && C.removeEventListener("scroll", n), o && C.removeEventListener("resize", n);
    }), m == null || m(), (P = w) == null || P.disconnect(), w = null, d && cancelAnimationFrame(O);
  };
}
const Ck = nk, Tk = rk, Ok = QD, Sk = ak, Dk = ek, gm = JD, kk = ik, Pk = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: wk,
    ...n
  }, o = {
    ...a.platform,
    _c: r
  };
  return ZD(e, t, {
    ...a,
    platform: o
  });
};
var vs = typeof document < "u" ? zr : ct;
function As(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!As(e[r], t[r]))
          return !1;
      return !0;
    }
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, a[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const o = a[r];
      if (!(o === "_owner" && e.$$typeof) && !As(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function fy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vm(e, t) {
  const n = fy(e);
  return Math.round(t * n) / n;
}
function Vu(e) {
  const t = ee.useRef(e);
  return vs(() => {
    t.current = e;
  }), t;
}
function Ak(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: a,
    elements: {
      reference: o,
      floating: l
    } = {},
    transform: u = !0,
    whileElementsMounted: d,
    open: p
  } = e, [h, m] = ee.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [x, w] = ee.useState(r);
  As(x, r) || w(r);
  const [O, _] = ee.useState(null), [b, P] = ee.useState(null), C = ee.useCallback((I) => {
    I !== Z.current && (Z.current = I, _(I));
  }, []), k = ee.useCallback((I) => {
    I !== J.current && (J.current = I, P(I));
  }, []), D = o || O, S = l || b, Z = ee.useRef(null), J = ee.useRef(null), ne = ee.useRef(h), V = d != null, Y = Vu(d), te = Vu(a), R = Vu(p), z = ee.useCallback(() => {
    if (!Z.current || !J.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: x
    };
    te.current && (I.platform = te.current), Pk(Z.current, J.current, I).then((X) => {
      const M = {
        ...X,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      B.current && !As(ne.current, M) && (ne.current = M, Sv.flushSync(() => {
        m(M);
      }));
    });
  }, [x, t, n, te, R]);
  vs(() => {
    p === !1 && ne.current.isPositioned && (ne.current.isPositioned = !1, m((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [p]);
  const B = ee.useRef(!1);
  vs(() => (B.current = !0, () => {
    B.current = !1;
  }), []), vs(() => {
    if (D && (Z.current = D), S && (J.current = S), D && S) {
      if (Y.current)
        return Y.current(D, S, z);
      z();
    }
  }, [D, S, z, Y, V]);
  const U = ee.useMemo(() => ({
    reference: Z,
    floating: J,
    setReference: C,
    setFloating: k
  }), [C, k]), K = ee.useMemo(() => ({
    reference: D,
    floating: S
  }), [D, S]), j = ee.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!K.floating)
      return I;
    const X = vm(K.floating, h.x), M = vm(K.floating, h.y);
    return u ? {
      ...I,
      transform: "translate(" + X + "px, " + M + "px)",
      ...fy(K.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: X,
      top: M
    };
  }, [n, u, K.floating, h.x, h.y]);
  return ee.useMemo(() => ({
    ...h,
    update: z,
    refs: U,
    elements: K,
    floatingStyles: j
  }), [h, z, U, K, j]);
}
const Ik = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: a
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? gm({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? gm({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, Mk = (e, t) => ({
  ...Ck(e),
  options: [e, t]
}), Nk = (e, t) => ({
  ...Tk(e),
  options: [e, t]
}), jk = (e, t) => ({
  ...kk(e),
  options: [e, t]
}), Rk = (e, t) => ({
  ...Ok(e),
  options: [e, t]
}), $k = (e, t) => ({
  ...Sk(e),
  options: [e, t]
}), Fk = (e, t) => ({
  ...Dk(e),
  options: [e, t]
}), Lk = (e, t) => ({
  ...Ik(e),
  options: [e, t]
});
var Wk = "Arrow", py = ee.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: a = 5, ...o } = e;
  return /* @__PURE__ */ v.jsx(
    Cr.svg,
    {
      ...o,
      ref: t,
      width: r,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ v.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
py.displayName = Wk;
var Vk = py;
function zk(e) {
  const [t, n] = ee.useState(void 0);
  return vi(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const o = a[0];
        let l, u;
        if ("borderBoxSize" in o) {
          const d = o.borderBoxSize, p = Array.isArray(d) ? d[0] : d;
          l = p.inlineSize, u = p.blockSize;
        } else
          l = e.offsetWidth, u = e.offsetHeight;
        n({ width: l, height: u });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var dd = "Popper", [hy, my] = Zv(dd), [Bk, gy] = hy(dd), vy = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = ee.useState(null);
  return /* @__PURE__ */ v.jsx(Bk, { scope: t, anchor: r, onAnchorChange: a, children: n });
};
vy.displayName = dd;
var yy = "PopperAnchor", xy = ee.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...a } = e, o = gy(yy, n), l = ee.useRef(null), u = Kr(t, l);
    return ee.useEffect(() => {
      o.onAnchorChange((r == null ? void 0 : r.current) || l.current);
    }), r ? null : /* @__PURE__ */ v.jsx(Cr.div, { ...a, ref: u });
  }
);
xy.displayName = yy;
var fd = "PopperContent", [Hk, Uk] = hy(fd), by = ee.forwardRef(
  (e, t) => {
    var be, we, Ce, _e, Se, fe;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: a = 0,
      align: o = "center",
      alignOffset: l = 0,
      arrowPadding: u = 0,
      avoidCollisions: d = !0,
      collisionBoundary: p = [],
      collisionPadding: h = 0,
      sticky: m = "partial",
      hideWhenDetached: x = !1,
      updatePositionStrategy: w = "optimized",
      onPlaced: O,
      ..._
    } = e, b = gy(fd, n), [P, C] = ee.useState(null), k = Kr(t, (Re) => C(Re)), [D, S] = ee.useState(null), Z = zk(D), J = (Z == null ? void 0 : Z.width) ?? 0, ne = (Z == null ? void 0 : Z.height) ?? 0, V = r + (o !== "center" ? "-" + o : ""), Y = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, te = Array.isArray(p) ? p : [p], R = te.length > 0, z = {
      padding: Y,
      boundary: te.filter(qk),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: R
    }, { refs: B, floatingStyles: U, placement: K, isPositioned: j, middlewareData: I } = Ak({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: V,
      whileElementsMounted: (...Re) => Ek(...Re, {
        animationFrame: w === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Mk({ mainAxis: a + ne, alignmentAxis: l }),
        d && Nk({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? jk() : void 0,
          ...z
        }),
        d && Rk({ ...z }),
        $k({
          ...z,
          apply: ({ elements: Re, rects: ve, availableWidth: et, availableHeight: rt }) => {
            const { width: Ke, height: N } = ve.reference, Q = Re.floating.style;
            Q.setProperty("--radix-popper-available-width", `${et}px`), Q.setProperty("--radix-popper-available-height", `${rt}px`), Q.setProperty("--radix-popper-anchor-width", `${Ke}px`), Q.setProperty("--radix-popper-anchor-height", `${N}px`);
          }
        }),
        D && Lk({ element: D, padding: u }),
        Kk({ arrowWidth: J, arrowHeight: ne }),
        x && Fk({ strategy: "referenceHidden", ...z })
      ]
    }), [X, M] = Ey(K), L = Br(O);
    vi(() => {
      j && (L == null || L());
    }, [j, L]);
    const ue = (be = I.arrow) == null ? void 0 : be.x, he = (we = I.arrow) == null ? void 0 : we.y, ce = ((Ce = I.arrow) == null ? void 0 : Ce.centerOffset) !== 0, [ye, ge] = ee.useState();
    return vi(() => {
      P && ge(window.getComputedStyle(P).zIndex);
    }, [P]), /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: j ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ye,
          "--radix-popper-transform-origin": [
            (_e = I.transformOrigin) == null ? void 0 : _e.x,
            (Se = I.transformOrigin) == null ? void 0 : Se.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((fe = I.hide) == null ? void 0 : fe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ v.jsx(
          Hk,
          {
            scope: n,
            placedSide: X,
            onArrowChange: S,
            arrowX: ue,
            arrowY: he,
            shouldHideArrow: ce,
            children: /* @__PURE__ */ v.jsx(
              Cr.div,
              {
                "data-side": X,
                "data-align": M,
                ..._,
                ref: k,
                style: {
                  ..._.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: j ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
by.displayName = fd;
var wy = "PopperArrow", Yk = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, _y = ee.forwardRef(function(t, n) {
  const { __scopePopper: r, ...a } = t, o = Uk(wy, r), l = Yk[o.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ v.jsx(
      "span",
      {
        ref: o.onArrowChange,
        style: {
          position: "absolute",
          left: o.arrowX,
          top: o.arrowY,
          [l]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[o.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[o.placedSide],
          visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ v.jsx(
          Vk,
          {
            ...a,
            ref: n,
            style: {
              ...a.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
_y.displayName = wy;
function qk(e) {
  return e !== null;
}
var Kk = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, P, C;
    const { placement: n, rects: r, middlewareData: a } = t, l = ((b = a.arrow) == null ? void 0 : b.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, d = l ? 0 : e.arrowHeight, [p, h] = Ey(n), m = { start: "0%", center: "50%", end: "100%" }[h], x = (((P = a.arrow) == null ? void 0 : P.x) ?? 0) + u / 2, w = (((C = a.arrow) == null ? void 0 : C.y) ?? 0) + d / 2;
    let O = "", _ = "";
    return p === "bottom" ? (O = l ? m : `${x}px`, _ = `${-d}px`) : p === "top" ? (O = l ? m : `${x}px`, _ = `${r.floating.height + d}px`) : p === "right" ? (O = `${-d}px`, _ = l ? m : `${w}px`) : p === "left" && (O = `${r.floating.width + d}px`, _ = l ? m : `${w}px`), { data: { x: O, y: _ } };
  }
});
function Ey(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Gk = vy, Cy = xy, Xk = by, Zk = _y, Jk = "Portal", Ty = ee.forwardRef((e, t) => {
  var u;
  const { container: n, ...r } = e, [a, o] = ee.useState(!1);
  vi(() => o(!0), []);
  const l = n || a && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? ZO.createPortal(/* @__PURE__ */ v.jsx(Cr.div, { ...r, ref: t }), l) : null;
});
Ty.displayName = Jk;
function Qk(e, t) {
  return ee.useReducer((n, r) => t[n][r] ?? n, e);
}
var pd = (e) => {
  const { present: t, children: n } = e, r = eP(t), a = typeof n == "function" ? n({ present: r.isPresent }) : ee.Children.only(n), o = Kr(r.ref, tP(a));
  return typeof n == "function" || r.isPresent ? ee.cloneElement(a, { ref: o }) : null;
};
pd.displayName = "Presence";
function eP(e) {
  const [t, n] = ee.useState(), r = ee.useRef({}), a = ee.useRef(e), o = ee.useRef("none"), l = e ? "mounted" : "unmounted", [u, d] = Qk(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return ee.useEffect(() => {
    const p = is(r.current);
    o.current = u === "mounted" ? p : "none";
  }, [u]), vi(() => {
    const p = r.current, h = a.current;
    if (h !== e) {
      const x = o.current, w = is(p);
      e ? d("MOUNT") : w === "none" || (p == null ? void 0 : p.display) === "none" ? d("UNMOUNT") : d(h && x !== w ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, d]), vi(() => {
    if (t) {
      let p;
      const h = t.ownerDocument.defaultView ?? window, m = (w) => {
        const _ = is(r.current).includes(w.animationName);
        if (w.target === t && _ && (d("ANIMATION_END"), !a.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", p = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, x = (w) => {
        w.target === t && (o.current = is(r.current));
      };
      return t.addEventListener("animationstart", x), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        h.clearTimeout(p), t.removeEventListener("animationstart", x), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: ee.useCallback((p) => {
      p && (r.current = getComputedStyle(p)), n(p);
    }, [])
  };
}
function is(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function tP(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function nP({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, a] = rP({ defaultProp: t, onChange: n }), o = e !== void 0, l = o ? e : r, u = Br(n), d = ee.useCallback(
    (p) => {
      if (o) {
        const m = typeof p == "function" ? p(e) : p;
        m !== e && u(m);
      } else
        a(p);
    },
    [o, e, a, u]
  );
  return [l, d];
}
function rP({
  defaultProp: e,
  onChange: t
}) {
  const n = ee.useState(e), [r] = n, a = ee.useRef(r), o = Br(t);
  return ee.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [r, a, o]), n;
}
var iP = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Wi = /* @__PURE__ */ new WeakMap(), as = /* @__PURE__ */ new WeakMap(), os = {}, zu = 0, Oy = function(e) {
  return e && (e.host || Oy(e.parentNode));
}, aP = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Oy(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, oP = function(e, t, n, r) {
  var a = aP(t, Array.isArray(e) ? e : [e]);
  os[n] || (os[n] = /* @__PURE__ */ new WeakMap());
  var o = os[n], l = [], u = /* @__PURE__ */ new Set(), d = new Set(a), p = function(m) {
    !m || u.has(m) || (u.add(m), p(m.parentNode));
  };
  a.forEach(p);
  var h = function(m) {
    !m || d.has(m) || Array.prototype.forEach.call(m.children, function(x) {
      if (u.has(x))
        h(x);
      else
        try {
          var w = x.getAttribute(r), O = w !== null && w !== "false", _ = (Wi.get(x) || 0) + 1, b = (o.get(x) || 0) + 1;
          Wi.set(x, _), o.set(x, b), l.push(x), _ === 1 && O && as.set(x, !0), b === 1 && x.setAttribute(n, "true"), O || x.setAttribute(r, "true");
        } catch (P) {
          console.error("aria-hidden: cannot operate on ", x, P);
        }
    });
  };
  return h(t), u.clear(), zu++, function() {
    l.forEach(function(m) {
      var x = Wi.get(m) - 1, w = o.get(m) - 1;
      Wi.set(m, x), o.set(m, w), x || (as.has(m) || m.removeAttribute(r), as.delete(m)), w || m.removeAttribute(n);
    }), zu--, zu || (Wi = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap(), as = /* @__PURE__ */ new WeakMap(), os = {});
  };
}, sP = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = iP(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), oP(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, fn = function() {
  return fn = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, fn.apply(this, arguments);
};
function Sy(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Ei(e, t, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function(l) {
      l(o);
    });
  }
  return new (n || (n = Promise))(function(o, l) {
    function u(h) {
      try {
        p(r.next(h));
      } catch (m) {
        l(m);
      }
    }
    function d(h) {
      try {
        p(r.throw(h));
      } catch (m) {
        l(m);
      }
    }
    function p(h) {
      h.done ? o(h.value) : a(h.value).then(u, d);
    }
    p((r = r.apply(e, t || [])).next());
  });
}
function lP(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var ys = "right-scroll-bar-position", xs = "width-before-scroll-bar", uP = "with-scroll-bars-hidden", cP = "--removed-body-scroll-bar-size";
function Bu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function dP(e, t) {
  var n = ht(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var fP = typeof window < "u" ? ee.useLayoutEffect : ee.useEffect, ym = /* @__PURE__ */ new WeakMap();
function pP(e, t) {
  var n = dP(null, function(r) {
    return e.forEach(function(a) {
      return Bu(a, r);
    });
  });
  return fP(function() {
    var r = ym.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), l = n.current;
      a.forEach(function(u) {
        o.has(u) || Bu(u, null);
      }), o.forEach(function(u) {
        a.has(u) || Bu(u, l);
      });
    }
    ym.set(n, e);
  }, [e]), n;
}
function hP(e) {
  return e;
}
function mP(e, t) {
  t === void 0 && (t = hP);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(o) {
      var l = t(o, r);
      return n.push(l), function() {
        n = n.filter(function(u) {
          return u !== l;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (r = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(o);
      }
      n = {
        push: function(u) {
          return o(u);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(o) {
      r = !0;
      var l = [];
      if (n.length) {
        var u = n;
        n = [], u.forEach(o), l = n;
      }
      var d = function() {
        var h = l;
        l = [], h.forEach(o);
      }, p = function() {
        return Promise.resolve().then(d);
      };
      p(), n = {
        push: function(h) {
          l.push(h), p();
        },
        filter: function(h) {
          return l = l.filter(h), n;
        }
      };
    }
  };
  return a;
}
function gP(e) {
  e === void 0 && (e = {});
  var t = mP(null);
  return t.options = fn({ async: !0, ssr: !1 }, e), t;
}
var Dy = function(e) {
  var t = e.sideCar, n = Sy(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return ee.createElement(r, fn({}, n));
};
Dy.isSideCarExport = !0;
function vP(e, t) {
  return e.useMedium(t), Dy;
}
var ky = gP(), Hu = function() {
}, ol = ee.forwardRef(function(e, t) {
  var n = ee.useRef(null), r = ee.useState({
    onScrollCapture: Hu,
    onWheelCapture: Hu,
    onTouchMoveCapture: Hu
  }), a = r[0], o = r[1], l = e.forwardProps, u = e.children, d = e.className, p = e.removeScrollBar, h = e.enabled, m = e.shards, x = e.sideCar, w = e.noIsolation, O = e.inert, _ = e.allowPinchZoom, b = e.as, P = b === void 0 ? "div" : b, C = e.gapMode, k = Sy(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), D = x, S = pP([n, t]), Z = fn(fn({}, k), a);
  return ee.createElement(
    ee.Fragment,
    null,
    h && ee.createElement(D, { sideCar: ky, removeScrollBar: p, shards: m, noIsolation: w, inert: O, setCallbacks: o, allowPinchZoom: !!_, lockRef: n, gapMode: C }),
    l ? ee.cloneElement(ee.Children.only(u), fn(fn({}, Z), { ref: S })) : ee.createElement(P, fn({}, Z, { className: d, ref: S }), u)
  );
});
ol.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ol.classNames = {
  fullWidth: xs,
  zeroRight: ys
};
var yP = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function xP() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = yP();
  return t && e.setAttribute("nonce", t), e;
}
function bP(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function wP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var _P = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = xP()) && (bP(t, n), wP(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, EP = function() {
  var e = _P();
  return function(t, n) {
    ee.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Py = function() {
  var e = EP(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, CP = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Uu = function(e) {
  return parseInt(e || "", 10) || 0;
}, TP = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Uu(n), Uu(r), Uu(a)];
}, OP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return CP;
  var t = TP(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, SP = Py(), Xi = "data-scroll-locked", DP = function(e, t, n, r) {
  var a = e.left, o = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(uP, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(u, "px ").concat(r, `;
  }
  body[`).concat(Xi, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(u, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ys, ` {
    right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(xs, ` {
    margin-right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(ys, " .").concat(ys, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(xs, " .").concat(xs, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Xi, `] {
    `).concat(cP, ": ").concat(u, `px;
  }
`);
}, xm = function() {
  var e = parseInt(document.body.getAttribute(Xi) || "0", 10);
  return isFinite(e) ? e : 0;
}, kP = function() {
  ee.useEffect(function() {
    return document.body.setAttribute(Xi, (xm() + 1).toString()), function() {
      var e = xm() - 1;
      e <= 0 ? document.body.removeAttribute(Xi) : document.body.setAttribute(Xi, e.toString());
    };
  }, []);
}, PP = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  kP();
  var o = ee.useMemo(function() {
    return OP(a);
  }, [a]);
  return ee.createElement(SP, { styles: DP(o, !t, a, n ? "" : "!important") });
}, Dc = !1;
if (typeof window < "u")
  try {
    var ss = Object.defineProperty({}, "passive", {
      get: function() {
        return Dc = !0, !0;
      }
    });
    window.addEventListener("test", ss, ss), window.removeEventListener("test", ss, ss);
  } catch {
    Dc = !1;
  }
var Vi = Dc ? { passive: !1 } : !1, AP = function(e) {
  return e.tagName === "TEXTAREA";
}, Ay = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !AP(e) && n[t] === "visible")
  );
}, IP = function(e) {
  return Ay(e, "overflowY");
}, MP = function(e) {
  return Ay(e, "overflowX");
}, bm = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = Iy(e, r);
    if (a) {
      var o = My(e, r), l = o[1], u = o[2];
      if (l > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, NP = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, jP = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Iy = function(e, t) {
  return e === "v" ? IP(t) : MP(t);
}, My = function(e, t) {
  return e === "v" ? NP(t) : jP(t);
}, RP = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $P = function(e, t, n, r, a) {
  var o = RP(e, window.getComputedStyle(t).direction), l = o * r, u = n.target, d = t.contains(u), p = !1, h = l > 0, m = 0, x = 0;
  do {
    var w = My(e, u), O = w[0], _ = w[1], b = w[2], P = _ - b - o * O;
    (O || P) && Iy(e, u) && (m += P, x += O), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !d && u !== document.body || // self content
    d && (t.contains(u) || t === u)
  );
  return (h && Math.abs(m) < 1 || !h && Math.abs(x) < 1) && (p = !0), p;
}, ls = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, wm = function(e) {
  return [e.deltaX, e.deltaY];
}, _m = function(e) {
  return e && "current" in e ? e.current : e;
}, FP = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, LP = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, WP = 0, zi = [];
function VP(e) {
  var t = ee.useRef([]), n = ee.useRef([0, 0]), r = ee.useRef(), a = ee.useState(WP++)[0], o = ee.useState(Py)[0], l = ee.useRef(e);
  ee.useEffect(function() {
    l.current = e;
  }, [e]), ee.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var _ = lP([e.lockRef.current], (e.shards || []).map(_m), !0).filter(Boolean);
      return _.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), _.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = ee.useCallback(function(_, b) {
    if ("touches" in _ && _.touches.length === 2 || _.type === "wheel" && _.ctrlKey)
      return !l.current.allowPinchZoom;
    var P = ls(_), C = n.current, k = "deltaX" in _ ? _.deltaX : C[0] - P[0], D = "deltaY" in _ ? _.deltaY : C[1] - P[1], S, Z = _.target, J = Math.abs(k) > Math.abs(D) ? "h" : "v";
    if ("touches" in _ && J === "h" && Z.type === "range")
      return !1;
    var ne = bm(J, Z);
    if (!ne)
      return !0;
    if (ne ? S = J : (S = J === "v" ? "h" : "v", ne = bm(J, Z)), !ne)
      return !1;
    if (!r.current && "changedTouches" in _ && (k || D) && (r.current = S), !S)
      return !0;
    var V = r.current || S;
    return $P(V, b, _, V === "h" ? k : D);
  }, []), d = ee.useCallback(function(_) {
    var b = _;
    if (!(!zi.length || zi[zi.length - 1] !== o)) {
      var P = "deltaY" in b ? wm(b) : ls(b), C = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && FP(S.delta, P);
      })[0];
      if (C && C.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!C) {
        var k = (l.current.shards || []).map(_m).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), D = k.length > 0 ? u(b, k[0]) : !l.current.noIsolation;
        D && b.cancelable && b.preventDefault();
      }
    }
  }, []), p = ee.useCallback(function(_, b, P, C) {
    var k = { name: _, delta: b, target: P, should: C, shadowParent: zP(P) };
    t.current.push(k), setTimeout(function() {
      t.current = t.current.filter(function(D) {
        return D !== k;
      });
    }, 1);
  }, []), h = ee.useCallback(function(_) {
    n.current = ls(_), r.current = void 0;
  }, []), m = ee.useCallback(function(_) {
    p(_.type, wm(_), _.target, u(_, e.lockRef.current));
  }, []), x = ee.useCallback(function(_) {
    p(_.type, ls(_), _.target, u(_, e.lockRef.current));
  }, []);
  ee.useEffect(function() {
    return zi.push(o), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: x
    }), document.addEventListener("wheel", d, Vi), document.addEventListener("touchmove", d, Vi), document.addEventListener("touchstart", h, Vi), function() {
      zi = zi.filter(function(_) {
        return _ !== o;
      }), document.removeEventListener("wheel", d, Vi), document.removeEventListener("touchmove", d, Vi), document.removeEventListener("touchstart", h, Vi);
    };
  }, []);
  var w = e.removeScrollBar, O = e.inert;
  return ee.createElement(
    ee.Fragment,
    null,
    O ? ee.createElement(o, { styles: LP(a) }) : null,
    w ? ee.createElement(PP, { gapMode: e.gapMode }) : null
  );
}
function zP(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const BP = vP(ky, VP);
var Ny = ee.forwardRef(function(e, t) {
  return ee.createElement(ol, fn({}, e, { ref: t, sideCar: BP }));
});
Ny.classNames = ol.classNames;
var hd = "Popover", [jy, EB] = Zv(hd, [
  my
]), no = my(), [HP, Gr] = jy(hd), Ry = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: l = !1
  } = e, u = no(t), d = ee.useRef(null), [p, h] = ee.useState(!1), [m = !1, x] = nP({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ v.jsx(Gk, { ...u, children: /* @__PURE__ */ v.jsx(
    HP,
    {
      scope: t,
      contentId: zD(),
      triggerRef: d,
      open: m,
      onOpenChange: x,
      onOpenToggle: ee.useCallback(() => x((w) => !w), [x]),
      hasCustomAnchor: p,
      onCustomAnchorAdd: ee.useCallback(() => h(!0), []),
      onCustomAnchorRemove: ee.useCallback(() => h(!1), []),
      modal: l,
      children: n
    }
  ) });
};
Ry.displayName = hd;
var $y = "PopoverAnchor", Fy = ee.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Gr($y, n), o = no(n), { onCustomAnchorAdd: l, onCustomAnchorRemove: u } = a;
    return ee.useEffect(() => (l(), () => u()), [l, u]), /* @__PURE__ */ v.jsx(Cy, { ...o, ...r, ref: t });
  }
);
Fy.displayName = $y;
var Ly = "PopoverTrigger", Wy = ee.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Gr(Ly, n), o = no(n), l = Kr(t, a.triggerRef), u = /* @__PURE__ */ v.jsx(
      Cr.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": Uy(a.open),
        ...r,
        ref: l,
        onClick: Vr(e.onClick, a.onOpenToggle)
      }
    );
    return a.hasCustomAnchor ? u : /* @__PURE__ */ v.jsx(Cy, { asChild: !0, ...o, children: u });
  }
);
Wy.displayName = Ly;
var md = "PopoverPortal", [UP, YP] = jy(md, {
  forceMount: void 0
}), Vy = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: a } = e, o = Gr(md, t);
  return /* @__PURE__ */ v.jsx(UP, { scope: t, forceMount: n, children: /* @__PURE__ */ v.jsx(pd, { present: n || o.open, children: /* @__PURE__ */ v.jsx(Ty, { asChild: !0, container: a, children: r }) }) });
};
Vy.displayName = md;
var ta = "PopoverContent", zy = ee.forwardRef(
  (e, t) => {
    const n = YP(ta, e.__scopePopover), { forceMount: r = n.forceMount, ...a } = e, o = Gr(ta, e.__scopePopover);
    return /* @__PURE__ */ v.jsx(pd, { present: r || o.open, children: o.modal ? /* @__PURE__ */ v.jsx(qP, { ...a, ref: t }) : /* @__PURE__ */ v.jsx(KP, { ...a, ref: t }) });
  }
);
zy.displayName = ta;
var qP = ee.forwardRef(
  (e, t) => {
    const n = Gr(ta, e.__scopePopover), r = ee.useRef(null), a = Kr(t, r), o = ee.useRef(!1);
    return ee.useEffect(() => {
      const l = r.current;
      if (l) return sP(l);
    }, []), /* @__PURE__ */ v.jsx(Ny, { as: Tt, allowPinchZoom: !0, children: /* @__PURE__ */ v.jsx(
      By,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Vr(e.onCloseAutoFocus, (l) => {
          var u;
          l.preventDefault(), o.current || (u = n.triggerRef.current) == null || u.focus();
        }),
        onPointerDownOutside: Vr(
          e.onPointerDownOutside,
          (l) => {
            const u = l.detail.originalEvent, d = u.button === 0 && u.ctrlKey === !0, p = u.button === 2 || d;
            o.current = p;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Vr(
          e.onFocusOutside,
          (l) => l.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), KP = ee.forwardRef(
  (e, t) => {
    const n = Gr(ta, e.__scopePopover), r = ee.useRef(!1), a = ee.useRef(!1);
    return /* @__PURE__ */ v.jsx(
      By,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var l, u;
          (l = e.onCloseAutoFocus) == null || l.call(e, o), o.defaultPrevented || (r.current || (u = n.triggerRef.current) == null || u.focus(), o.preventDefault()), r.current = !1, a.current = !1;
        },
        onInteractOutside: (o) => {
          var d, p;
          (d = e.onInteractOutside) == null || d.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const l = o.target;
          ((p = n.triggerRef.current) == null ? void 0 : p.contains(l)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
        }
      }
    );
  }
), By = ee.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: a,
      onCloseAutoFocus: o,
      disableOutsidePointerEvents: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: p,
      onInteractOutside: h,
      ...m
    } = e, x = Gr(ta, n), w = no(n);
    return ID(), /* @__PURE__ */ v.jsx(
      ty,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: a,
        onUnmountAutoFocus: o,
        children: /* @__PURE__ */ v.jsx(
          Qv,
          {
            asChild: !0,
            disableOutsidePointerEvents: l,
            onInteractOutside: h,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: p,
            onDismiss: () => x.onOpenChange(!1),
            children: /* @__PURE__ */ v.jsx(
              Xk,
              {
                "data-state": Uy(x.open),
                role: "dialog",
                id: x.contentId,
                ...w,
                ...m,
                ref: t,
                style: {
                  ...m.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Hy = "PopoverClose", GP = ee.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Gr(Hy, n);
    return /* @__PURE__ */ v.jsx(
      Cr.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Vr(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
GP.displayName = Hy;
var XP = "PopoverArrow", ZP = ee.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = no(n);
    return /* @__PURE__ */ v.jsx(Zk, { ...a, ...r, ref: t });
  }
);
ZP.displayName = XP;
function Uy(e) {
  return e ? "open" : "closed";
}
var JP = Ry, QP = Fy, eA = Wy, tA = Vy, nA = zy;
const rA = JP, iA = eA, aA = ({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ref: r,
  forceMount: a,
  container: o,
  disableInteractions: l,
  onKeyDown: u,
  ...d
}) => /* @__PURE__ */ v.jsx(tA, { forceMount: a, container: o || document.querySelector("#root"), children: /* @__PURE__ */ v.jsx("div", { className: Pe(l && "pointer-events-none invisible"), children: /* @__PURE__ */ v.jsx(
  nA,
  {
    ref: r,
    align: t,
    sideOffset: n,
    className: Pe(
      "z-[5000] rounded-lg border border-solid border-neutral-300 bg-white p-4 shadow-md outline-none ui-state-open:animate-in ui-state-closed:animate-out ui-state-closed:fade-out-0 ui-state-open:fade-in-0 ui-state-closed:zoom-out-95 ui-state-open:zoom-in-95 ui-side-bottom:slide-in-from-top-2 ui-side-left:slide-in-from-right-2 ui-side-right:slide-in-from-left-2 ui-side-top:slide-in-from-bottom-2 overflow-auto scrollbar-thin",
      "max-h-[calc(var(--radix-popover-content-available-height)-10px)] min-w-[var(--radix-popover-trigger-width)]",
      e
    ),
    ...d
  }
) }) }), $n = Object.assign(rA, {
  Trigger: iA,
  Content: aA,
  Anchor: QP
});
function tt(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Cn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function en(e, t) {
  const n = tt(e);
  return isNaN(t) ? Cn(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function qn(e, t) {
  const n = tt(e);
  if (isNaN(t)) return Cn(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), a = Cn(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const o = a.getDate();
  return r >= o ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    r
  ), n);
}
const gd = 6048e5, oA = 864e5;
let sA = {};
function ro() {
  return sA;
}
function or(e, t) {
  var u, d, p, h;
  const n = ro(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((h = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ?? 0, a = tt(e), o = a.getDay(), l = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function xi(e) {
  return or(e, { weekStartsOn: 1 });
}
function Yy(e) {
  const t = tt(e), n = t.getFullYear(), r = Cn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = xi(r), o = Cn(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const l = xi(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function na(e) {
  const t = tt(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Is(e) {
  const t = tt(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function nr(e, t) {
  const n = na(e), r = na(t), a = +n - Is(n), o = +r - Is(r);
  return Math.round((a - o) / oA);
}
function lA(e) {
  const t = Yy(e), n = Cn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), xi(n);
}
function kc(e, t) {
  const n = t * 7;
  return en(e, n);
}
function uA(e, t) {
  return qn(e, t * 12);
}
function cA(e) {
  let t;
  return e.forEach(function(n) {
    const r = tt(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function dA(e) {
  let t;
  return e.forEach((n) => {
    const r = tt(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function hn(e, t) {
  const n = na(e), r = na(t);
  return +n == +r;
}
function vd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function fA(e) {
  if (!vd(e) && typeof e != "number")
    return !1;
  const t = tt(e);
  return !isNaN(Number(t));
}
function Xa(e, t) {
  const n = tt(e), r = tt(t), a = n.getFullYear() - r.getFullYear(), o = n.getMonth() - r.getMonth();
  return a * 12 + o;
}
function pA(e, t, n) {
  const r = or(e, n), a = or(t, n), o = +r - Is(r), l = +a - Is(a);
  return Math.round((o - l) / gd);
}
function yd(e) {
  const t = tt(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function mn(e) {
  const t = tt(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function qy(e) {
  const t = tt(e), n = Cn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function xd(e, t) {
  var u, d, p, h;
  const n = ro(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((h = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ?? 0, a = tt(e), o = a.getDay(), l = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + l), a.setHours(23, 59, 59, 999), a;
}
function Ky(e) {
  return xd(e, { weekStartsOn: 1 });
}
const hA = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, mA = (e, t, n) => {
  let r;
  const a = hA[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Zi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const gA = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, vA = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, yA = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, xA = {
  date: Zi({
    formats: gA,
    defaultWidth: "full"
  }),
  time: Zi({
    formats: vA,
    defaultWidth: "full"
  }),
  dateTime: Zi({
    formats: yA,
    defaultWidth: "full"
  })
}, bA = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, wA = (e, t, n, r) => bA[e];
function Qn(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, u = n != null && n.width ? String(n.width) : l;
      a = e.formattingValues[u] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, u = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[u] || e.values[l];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const _A = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, EA = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, CA = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, TA = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, OA = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, SA = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, DA = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, kA = {
  ordinalNumber: DA,
  era: Qn({
    values: _A,
    defaultWidth: "wide"
  }),
  quarter: Qn({
    values: EA,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Qn({
    values: CA,
    defaultWidth: "wide"
  }),
  day: Qn({
    values: TA,
    defaultWidth: "wide"
  }),
  dayPeriod: Qn({
    values: OA,
    defaultWidth: "wide",
    formattingValues: SA,
    defaultFormattingWidth: "wide"
  })
};
function er(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const l = o[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(u) ? AA(u, (m) => m.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      PA(u, (m) => m.test(l))
    );
    let p;
    p = e.valueCallback ? e.valueCallback(d) : d, p = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(p)
    ) : p;
    const h = t.slice(l.length);
    return { value: p, rest: h };
  };
}
function PA(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function AA(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Gy(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let l = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    const u = t.slice(a.length);
    return { value: l, rest: u };
  };
}
const IA = /^(\d+)(th|st|nd|rd)?/i, MA = /\d+/i, NA = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, jA = {
  any: [/^b/i, /^(a|c)/i]
}, RA = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, $A = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, FA = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, LA = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, WA = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, VA = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, zA = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, BA = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, HA = {
  ordinalNumber: Gy({
    matchPattern: IA,
    parsePattern: MA,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: er({
    matchPatterns: NA,
    defaultMatchWidth: "wide",
    parsePatterns: jA,
    defaultParseWidth: "any"
  }),
  quarter: er({
    matchPatterns: RA,
    defaultMatchWidth: "wide",
    parsePatterns: $A,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: er({
    matchPatterns: FA,
    defaultMatchWidth: "wide",
    parsePatterns: LA,
    defaultParseWidth: "any"
  }),
  day: er({
    matchPatterns: WA,
    defaultMatchWidth: "wide",
    parsePatterns: VA,
    defaultParseWidth: "any"
  }),
  dayPeriod: er({
    matchPatterns: zA,
    defaultMatchWidth: "any",
    parsePatterns: BA,
    defaultParseWidth: "any"
  })
}, Xy = {
  code: "en-US",
  formatDistance: mA,
  formatLong: xA,
  formatRelative: wA,
  localize: kA,
  match: HA,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function UA(e) {
  const t = tt(e);
  return nr(t, qy(t)) + 1;
}
function Zy(e) {
  const t = tt(e), n = +xi(t) - +lA(t);
  return Math.round(n / gd) + 1;
}
function Jy(e, t) {
  var h, m, x, w;
  const n = tt(e), r = n.getFullYear(), a = ro(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((w = (x = a.locale) == null ? void 0 : x.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, l = Cn(e, 0);
  l.setFullYear(r + 1, 0, o), l.setHours(0, 0, 0, 0);
  const u = or(l, t), d = Cn(e, 0);
  d.setFullYear(r, 0, o), d.setHours(0, 0, 0, 0);
  const p = or(d, t);
  return n.getTime() >= u.getTime() ? r + 1 : n.getTime() >= p.getTime() ? r : r - 1;
}
function YA(e, t) {
  var u, d, p, h;
  const n = ro(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((h = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, a = Jy(e, t), o = Cn(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), or(o, t);
}
function Qy(e, t) {
  const n = tt(e), r = +or(n, t) - +YA(n, t);
  return Math.round(r / gd) + 1;
}
function ft(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const $r = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ft(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ft(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ft(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ft(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ft(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ft(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ft(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ft(a, t.length);
  }
}, Bi = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Em = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return $r.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = Jy(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const l = o % 100;
      return ft(l, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : ft(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Yy(e);
    return ft(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return ft(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ft(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return ft(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return $r.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return ft(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = Qy(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : ft(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Zy(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ft(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : $r.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = UA(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ft(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(o);
      case "ee":
        return ft(o, 2);
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(o);
      case "cc":
        return ft(o, t.length);
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return ft(a, t.length);
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = Bi.noon : r === 0 ? a = Bi.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = Bi.evening : r >= 12 ? a = Bi.afternoon : r >= 4 ? a = Bi.morning : a = Bi.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return $r.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : $r.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ft(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ft(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : $r.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : $r.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return $r.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Tm(r);
      case "XXXX":
      case "XX":
        return ui(r);
      case "XXXXX":
      case "XXX":
      default:
        return ui(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Tm(r);
      case "xxxx":
      case "xx":
        return ui(r);
      case "xxxxx":
      case "xxx":
      default:
        return ui(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Cm(r, ":");
      case "OOOO":
      default:
        return "GMT" + ui(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Cm(r, ":");
      case "zzzz":
      default:
        return "GMT" + ui(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return ft(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return ft(r, t.length);
  }
};
function Cm(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + ft(o, 2);
}
function Tm(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ft(Math.abs(e) / 60, 2) : ui(e, t);
}
function ui(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = ft(Math.trunc(r / 60), 2), o = ft(r % 60, 2);
  return n + a + t + o;
}
const Om = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, ex = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, qA = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return Om(e, t);
  let o;
  switch (r) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", Om(r, t)).replace("{{time}}", ex(a, t));
}, KA = {
  p: ex,
  P: qA
}, GA = /^D+$/, XA = /^Y+$/, ZA = ["D", "DD", "YY", "YYYY"];
function JA(e) {
  return GA.test(e);
}
function QA(e) {
  return XA.test(e);
}
function eI(e, t, n) {
  const r = tI(e, t, n);
  if (console.warn(r), ZA.includes(e)) throw new RangeError(r);
}
function tI(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const nI = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, rI = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, iI = /^'([^]*?)'?$/, aI = /''/g, oI = /[a-zA-Z]/;
function Ci(e, t, n) {
  var h, m, x, w, O, _, b, P;
  const r = ro(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Xy, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((w = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, l = (n == null ? void 0 : n.weekStartsOn) ?? ((_ = (O = n == null ? void 0 : n.locale) == null ? void 0 : O.options) == null ? void 0 : _.weekStartsOn) ?? r.weekStartsOn ?? ((P = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : P.weekStartsOn) ?? 0, u = tt(e);
  if (!fA(u))
    throw new RangeError("Invalid time value");
  let d = t.match(rI).map((C) => {
    const k = C[0];
    if (k === "p" || k === "P") {
      const D = KA[k];
      return D(C, a.formatLong);
    }
    return C;
  }).join("").match(nI).map((C) => {
    if (C === "''")
      return { isToken: !1, value: "'" };
    const k = C[0];
    if (k === "'")
      return { isToken: !1, value: sI(C) };
    if (Em[k])
      return { isToken: !0, value: C };
    if (k.match(oI))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + k + "`"
      );
    return { isToken: !1, value: C };
  });
  a.localize.preprocessor && (d = a.localize.preprocessor(u, d));
  const p = {
    firstWeekContainsDate: o,
    weekStartsOn: l,
    locale: a
  };
  return d.map((C) => {
    if (!C.isToken) return C.value;
    const k = C.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && QA(k) || !(n != null && n.useAdditionalDayOfYearTokens) && JA(k)) && eI(k, t, String(e));
    const D = Em[k[0]];
    return D(u, k, a.localize, p);
  }).join("");
}
function sI(e) {
  const t = e.match(iI);
  return t ? t[1].replace(aI, "'") : e;
}
function lI(e) {
  const t = tt(e), n = t.getFullYear(), r = t.getMonth(), a = Cn(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function uI(e) {
  return Math.trunc(+tt(e) / 1e3);
}
function cI(e) {
  const t = tt(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function dI(e, t) {
  return pA(
    cI(e),
    mn(e),
    t
  ) + 1;
}
function Pc(e, t) {
  const n = tt(e), r = tt(t);
  return n.getTime() > r.getTime();
}
function tx(e, t) {
  const n = tt(e), r = tt(t);
  return +n < +r;
}
function bd(e, t) {
  const n = tt(e), r = tt(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function fI(e, t) {
  const n = tt(e), r = tt(t);
  return n.getFullYear() === r.getFullYear();
}
function Yu(e, t) {
  return en(e, -t);
}
function qu(e, t) {
  const n = tt(e), r = n.getFullYear(), a = n.getDate(), o = Cn(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const l = lI(o);
  return n.setMonth(t, Math.min(a, l)), n;
}
function Sm(e, t) {
  const n = tt(e);
  return isNaN(+n) ? Cn(e, NaN) : (n.setFullYear(t), n);
}
const Dm = {
  lessThanXSeconds: {
    standalone: {
      one: "weniger als 1 Sekunde",
      other: "weniger als {{count}} Sekunden"
    },
    withPreposition: {
      one: "weniger als 1 Sekunde",
      other: "weniger als {{count}} Sekunden"
    }
  },
  xSeconds: {
    standalone: {
      one: "1 Sekunde",
      other: "{{count}} Sekunden"
    },
    withPreposition: {
      one: "1 Sekunde",
      other: "{{count}} Sekunden"
    }
  },
  halfAMinute: {
    standalone: "eine halbe Minute",
    withPreposition: "einer halben Minute"
  },
  lessThanXMinutes: {
    standalone: {
      one: "weniger als 1 Minute",
      other: "weniger als {{count}} Minuten"
    },
    withPreposition: {
      one: "weniger als 1 Minute",
      other: "weniger als {{count}} Minuten"
    }
  },
  xMinutes: {
    standalone: {
      one: "1 Minute",
      other: "{{count}} Minuten"
    },
    withPreposition: {
      one: "1 Minute",
      other: "{{count}} Minuten"
    }
  },
  aboutXHours: {
    standalone: {
      one: "etwa 1 Stunde",
      other: "etwa {{count}} Stunden"
    },
    withPreposition: {
      one: "etwa 1 Stunde",
      other: "etwa {{count}} Stunden"
    }
  },
  xHours: {
    standalone: {
      one: "1 Stunde",
      other: "{{count}} Stunden"
    },
    withPreposition: {
      one: "1 Stunde",
      other: "{{count}} Stunden"
    }
  },
  xDays: {
    standalone: {
      one: "1 Tag",
      other: "{{count}} Tage"
    },
    withPreposition: {
      one: "1 Tag",
      other: "{{count}} Tagen"
    }
  },
  aboutXWeeks: {
    standalone: {
      one: "etwa 1 Woche",
      other: "etwa {{count}} Wochen"
    },
    withPreposition: {
      one: "etwa 1 Woche",
      other: "etwa {{count}} Wochen"
    }
  },
  xWeeks: {
    standalone: {
      one: "1 Woche",
      other: "{{count}} Wochen"
    },
    withPreposition: {
      one: "1 Woche",
      other: "{{count}} Wochen"
    }
  },
  aboutXMonths: {
    standalone: {
      one: "etwa 1 Monat",
      other: "etwa {{count}} Monate"
    },
    withPreposition: {
      one: "etwa 1 Monat",
      other: "etwa {{count}} Monaten"
    }
  },
  xMonths: {
    standalone: {
      one: "1 Monat",
      other: "{{count}} Monate"
    },
    withPreposition: {
      one: "1 Monat",
      other: "{{count}} Monaten"
    }
  },
  aboutXYears: {
    standalone: {
      one: "etwa 1 Jahr",
      other: "etwa {{count}} Jahre"
    },
    withPreposition: {
      one: "etwa 1 Jahr",
      other: "etwa {{count}} Jahren"
    }
  },
  xYears: {
    standalone: {
      one: "1 Jahr",
      other: "{{count}} Jahre"
    },
    withPreposition: {
      one: "1 Jahr",
      other: "{{count}} Jahren"
    }
  },
  overXYears: {
    standalone: {
      one: "mehr als 1 Jahr",
      other: "mehr als {{count}} Jahre"
    },
    withPreposition: {
      one: "mehr als 1 Jahr",
      other: "mehr als {{count}} Jahren"
    }
  },
  almostXYears: {
    standalone: {
      one: "fast 1 Jahr",
      other: "fast {{count}} Jahre"
    },
    withPreposition: {
      one: "fast 1 Jahr",
      other: "fast {{count}} Jahren"
    }
  }
}, pI = (e, t, n) => {
  let r;
  const a = n != null && n.addSuffix ? Dm[e].withPreposition : Dm[e].standalone;
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", String(t)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : "vor " + r : r;
}, hI = {
  full: "EEEE, do MMMM y",
  // Montag, 7. Januar 2018
  long: "do MMMM y",
  // 7. Januar 2018
  medium: "do MMM y",
  // 7. Jan. 2018
  short: "dd.MM.y"
  // 07.01.2018
}, mI = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, gI = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, vI = {
  date: Zi({
    formats: hI,
    defaultWidth: "full"
  }),
  time: Zi({
    formats: mI,
    defaultWidth: "full"
  }),
  dateTime: Zi({
    formats: gI,
    defaultWidth: "full"
  })
}, yI = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: "P"
}, xI = (e, t, n, r) => yI[e], bI = {
  narrow: ["v.Chr.", "n.Chr."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["vor Christus", "nach Christus"]
}, wI = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
}, Ac = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ],
  wide: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ]
}, _I = {
  narrow: Ac.narrow,
  abbreviated: [
    "Jan.",
    "Feb.",
    "März",
    "Apr.",
    "Mai",
    "Juni",
    "Juli",
    "Aug.",
    "Sep.",
    "Okt.",
    "Nov.",
    "Dez."
  ],
  wide: Ac.wide
}, EI = {
  narrow: ["S", "M", "D", "M", "D", "F", "S"],
  short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
  wide: [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ]
}, CI = {
  narrow: {
    am: "vm.",
    pm: "nm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachm.",
    evening: "Abend",
    night: "Nacht"
  },
  abbreviated: {
    am: "vorm.",
    pm: "nachm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachmittag",
    evening: "Abend",
    night: "Nacht"
  },
  wide: {
    am: "vormittags",
    pm: "nachmittags",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachmittag",
    evening: "Abend",
    night: "Nacht"
  }
}, TI = {
  narrow: {
    am: "vm.",
    pm: "nm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachm.",
    evening: "abends",
    night: "nachts"
  },
  abbreviated: {
    am: "vorm.",
    pm: "nachm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachmittags",
    evening: "abends",
    night: "nachts"
  },
  wide: {
    am: "vormittags",
    pm: "nachmittags",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachmittags",
    evening: "abends",
    night: "nachts"
  }
}, OI = (e) => Number(e) + ".", SI = {
  ordinalNumber: OI,
  era: Qn({
    values: bI,
    defaultWidth: "wide"
  }),
  quarter: Qn({
    values: wI,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Qn({
    values: Ac,
    formattingValues: _I,
    defaultWidth: "wide"
  }),
  day: Qn({
    values: EI,
    defaultWidth: "wide"
  }),
  dayPeriod: Qn({
    values: CI,
    defaultWidth: "wide",
    formattingValues: TI,
    defaultFormattingWidth: "wide"
  })
}, DI = /^(\d+)(\.)?/i, kI = /\d+/i, PI = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
}, AI = {
  any: [/^v/i, /^n/i]
}, II = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
}, MI = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, NI = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
}, jI = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^j[aä]/i,
    /^f/i,
    /^mär/i,
    /^ap/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, RI = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
}, $I = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
}, FI = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
}, LI = {
  any: {
    am: /^v/i,
    pm: /^n/i,
    midnight: /^Mitte/i,
    noon: /^Mitta/i,
    morning: /morgens/i,
    afternoon: /nachmittags/i,
    // will never be matched. Afternoon is matched by `pm`
    evening: /abends/i,
    night: /nachts/i
    // will never be matched. Night is matched by `pm`
  }
}, WI = {
  ordinalNumber: Gy({
    matchPattern: DI,
    parsePattern: kI,
    valueCallback: (e) => parseInt(e)
  }),
  era: er({
    matchPatterns: PI,
    defaultMatchWidth: "wide",
    parsePatterns: AI,
    defaultParseWidth: "any"
  }),
  quarter: er({
    matchPatterns: II,
    defaultMatchWidth: "wide",
    parsePatterns: MI,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: er({
    matchPatterns: NI,
    defaultMatchWidth: "wide",
    parsePatterns: jI,
    defaultParseWidth: "any"
  }),
  day: er({
    matchPatterns: RI,
    defaultMatchWidth: "wide",
    parsePatterns: $I,
    defaultParseWidth: "any"
  }),
  dayPeriod: er({
    matchPatterns: FI,
    defaultMatchWidth: "wide",
    parsePatterns: LI,
    defaultParseWidth: "any"
  })
}, VI = {
  code: "de",
  formatDistance: pI,
  formatLong: vI,
  formatRelative: xI,
  localize: SI,
  match: WI,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
var je = function() {
  return je = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, je.apply(this, arguments);
};
function zI(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function nx(e, t, n) {
  for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function io(e) {
  return e.mode === "multiple";
}
function ao(e) {
  return e.mode === "range";
}
function sl(e) {
  return e.mode === "single";
}
var BI = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function HI(e, t) {
  return Ci(e, "LLLL y", t);
}
function UI(e, t) {
  return Ci(e, "d", t);
}
function YI(e, t) {
  return Ci(e, "LLLL", t);
}
function qI(e) {
  return "".concat(e);
}
function KI(e, t) {
  return Ci(e, "cccccc", t);
}
function GI(e, t) {
  return Ci(e, "yyyy", t);
}
var XI = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: HI,
  formatDay: UI,
  formatMonthCaption: YI,
  formatWeekNumber: qI,
  formatWeekdayName: KI,
  formatYearCaption: GI
}), ZI = function(e, t, n) {
  return Ci(e, "do MMMM (EEEE)", n);
}, JI = function() {
  return "Month: ";
}, QI = function() {
  return "Go to next month";
}, eM = function() {
  return "Go to previous month";
}, tM = function(e, t) {
  return Ci(e, "cccc", t);
}, nM = function(e) {
  return "Week n. ".concat(e);
}, rM = function() {
  return "Year: ";
}, iM = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: ZI,
  labelMonthDropdown: JI,
  labelNext: QI,
  labelPrevious: eM,
  labelWeekNumber: nM,
  labelWeekday: tM,
  labelYearDropdown: rM
});
function aM() {
  var e = "buttons", t = BI, n = Xy, r = {}, a = {}, o = 1, l = {}, u = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: XI,
    labels: iM,
    locale: n,
    modifiersClassNames: r,
    modifiers: a,
    numberOfMonths: o,
    styles: l,
    today: u,
    mode: "default"
  };
}
function oM(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, a = e.toMonth, o = e.fromDate, l = e.toDate;
  return r ? o = mn(r) : t && (o = new Date(t, 0, 1)), a ? l = yd(a) : n && (l = new Date(n, 11, 31)), {
    fromDate: o ? na(o) : void 0,
    toDate: l ? na(l) : void 0
  };
}
var rx = bi(void 0);
function sM(e) {
  var t, n = e.initialProps, r = aM(), a = oM(n), o = a.fromDate, l = a.toDate, u = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  u !== "buttons" && (!o || !l) && (u = "buttons");
  var d;
  (sl(n) || io(n) || ao(n)) && (d = n.onSelect);
  var p = je(je(je({}, r), n), { captionLayout: u, classNames: je(je({}, r.classNames), n.classNames), components: je({}, n.components), formatters: je(je({}, r.formatters), n.formatters), fromDate: o, labels: je(je({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: je(je({}, r.modifiers), n.modifiers), modifiersClassNames: je(je({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: d, styles: je(je({}, r.styles), n.styles), toDate: l });
  return v.jsx(rx.Provider, { value: p, children: e.children });
}
function bt() {
  var e = Yt(rx);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function ix(e) {
  var t = bt(), n = t.locale, r = t.classNames, a = t.styles, o = t.formatters.formatCaption;
  return v.jsx("div", { className: r.caption_label, style: a.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: o(e.displayMonth, { locale: n }) });
}
function lM(e) {
  return v.jsx("svg", je({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: v.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function ax(e) {
  var t, n, r = e.onChange, a = e.value, o = e.children, l = e.caption, u = e.className, d = e.style, p = bt(), h = (n = (t = p.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : lM;
  return v.jsxs("div", { className: u, style: d, children: [v.jsx("span", { className: p.classNames.vhidden, children: e["aria-label"] }), v.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: p.classNames.dropdown, style: p.styles.dropdown, value: a, onChange: r, children: o }), v.jsxs("div", { className: p.classNames.caption_label, style: p.styles.caption_label, "aria-hidden": "true", children: [l, v.jsx(h, { className: p.classNames.dropdown_icon, style: p.styles.dropdown_icon })] })] });
}
function uM(e) {
  var t, n = bt(), r = n.fromDate, a = n.toDate, o = n.styles, l = n.locale, u = n.formatters.formatMonthCaption, d = n.classNames, p = n.components, h = n.labels.labelMonthDropdown;
  if (!r)
    return v.jsx(v.Fragment, {});
  if (!a)
    return v.jsx(v.Fragment, {});
  var m = [];
  if (fI(r, a))
    for (var x = mn(r), w = r.getMonth(); w <= a.getMonth(); w++)
      m.push(qu(x, w));
  else
    for (var x = mn(/* @__PURE__ */ new Date()), w = 0; w <= 11; w++)
      m.push(qu(x, w));
  var O = function(b) {
    var P = Number(b.target.value), C = qu(mn(e.displayMonth), P);
    e.onChange(C);
  }, _ = (t = p == null ? void 0 : p.Dropdown) !== null && t !== void 0 ? t : ax;
  return v.jsx(_, { name: "months", "aria-label": h(), className: d.dropdown_month, style: o.dropdown_month, onChange: O, value: e.displayMonth.getMonth(), caption: u(e.displayMonth, { locale: l }), children: m.map(function(b) {
    return v.jsx("option", { value: b.getMonth(), children: u(b, { locale: l }) }, b.getMonth());
  }) });
}
function cM(e) {
  var t, n = e.displayMonth, r = bt(), a = r.fromDate, o = r.toDate, l = r.locale, u = r.styles, d = r.classNames, p = r.components, h = r.formatters.formatYearCaption, m = r.labels.labelYearDropdown, x = [];
  if (!a)
    return v.jsx(v.Fragment, {});
  if (!o)
    return v.jsx(v.Fragment, {});
  for (var w = a.getFullYear(), O = o.getFullYear(), _ = w; _ <= O; _++)
    x.push(Sm(qy(/* @__PURE__ */ new Date()), _));
  var b = function(C) {
    var k = Sm(mn(n), Number(C.target.value));
    e.onChange(k);
  }, P = (t = p == null ? void 0 : p.Dropdown) !== null && t !== void 0 ? t : ax;
  return v.jsx(P, { name: "years", "aria-label": m(), className: d.dropdown_year, style: u.dropdown_year, onChange: b, value: n.getFullYear(), caption: h(n, { locale: l }), children: x.map(function(C) {
    return v.jsx("option", { value: C.getFullYear(), children: h(C, { locale: l }) }, C.getFullYear());
  }) });
}
function dM(e, t) {
  var n = ht(e), r = n[0], a = n[1], o = t === void 0 ? r : t;
  return [o, a];
}
function fM(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, a = t || n || r || /* @__PURE__ */ new Date(), o = e.toDate, l = e.fromDate, u = e.numberOfMonths, d = u === void 0 ? 1 : u;
  if (o && Xa(o, a) < 0) {
    var p = -1 * (d - 1);
    a = qn(o, p);
  }
  return l && Xa(a, l) < 0 && (a = l), mn(a);
}
function pM() {
  var e = bt(), t = fM(e), n = dM(t, e.month), r = n[0], a = n[1], o = function(l) {
    var u;
    if (!e.disableNavigation) {
      var d = mn(l);
      a(d), (u = e.onMonthChange) === null || u === void 0 || u.call(e, d);
    }
  };
  return [r, o];
}
function hM(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, a = mn(e), o = mn(qn(a, r)), l = Xa(o, a), u = [], d = 0; d < l; d++) {
    var p = qn(a, d);
    u.push(p);
  }
  return n && (u = u.reverse()), u;
}
function mM(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, l = r ? o : 1, u = mn(e);
    if (!n)
      return qn(u, l);
    var d = Xa(n, e);
    if (!(d < o))
      return qn(u, l);
  }
}
function gM(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, l = r ? o : 1, u = mn(e);
    if (!n)
      return qn(u, -l);
    var d = Xa(u, n);
    if (!(d <= 0))
      return qn(u, -l);
  }
}
var ox = bi(void 0);
function vM(e) {
  var t = bt(), n = pM(), r = n[0], a = n[1], o = hM(r, t), l = mM(r, t), u = gM(r, t), d = function(m) {
    return o.some(function(x) {
      return bd(m, x);
    });
  }, p = function(m, x) {
    d(m) || (x && tx(m, x) ? a(qn(m, 1 + t.numberOfMonths * -1)) : a(m));
  }, h = {
    currentMonth: r,
    displayMonths: o,
    goToMonth: a,
    goToDate: p,
    previousMonth: u,
    nextMonth: l,
    isDateDisplayed: d
  };
  return v.jsx(ox.Provider, { value: h, children: e.children });
}
function oo() {
  var e = Yt(ox);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function km(e) {
  var t, n = bt(), r = n.classNames, a = n.styles, o = n.components, l = oo().goToMonth, u = function(h) {
    l(qn(h, e.displayIndex ? -e.displayIndex : 0));
  }, d = (t = o == null ? void 0 : o.CaptionLabel) !== null && t !== void 0 ? t : ix, p = v.jsx(d, { id: e.id, displayMonth: e.displayMonth });
  return v.jsxs("div", { className: r.caption_dropdowns, style: a.caption_dropdowns, children: [v.jsx("div", { className: r.vhidden, children: p }), v.jsx(uM, { onChange: u, displayMonth: e.displayMonth }), v.jsx(cM, { onChange: u, displayMonth: e.displayMonth })] });
}
function yM(e) {
  return v.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: v.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function xM(e) {
  return v.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: v.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Ms = Qs(function(e, t) {
  var n = bt(), r = n.classNames, a = n.styles, o = [r.button_reset, r.button];
  e.className && o.push(e.className);
  var l = o.join(" "), u = je(je({}, a.button_reset), a.button);
  return e.style && Object.assign(u, e.style), v.jsx("button", je({}, e, { ref: t, type: "button", className: l, style: u }));
});
function bM(e) {
  var t, n, r = bt(), a = r.dir, o = r.locale, l = r.classNames, u = r.styles, d = r.labels, p = d.labelPrevious, h = d.labelNext, m = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return v.jsx(v.Fragment, {});
  var x = p(e.previousMonth, { locale: o }), w = [
    l.nav_button,
    l.nav_button_previous
  ].join(" "), O = h(e.nextMonth, { locale: o }), _ = [
    l.nav_button,
    l.nav_button_next
  ].join(" "), b = (t = m == null ? void 0 : m.IconRight) !== null && t !== void 0 ? t : xM, P = (n = m == null ? void 0 : m.IconLeft) !== null && n !== void 0 ? n : yM;
  return v.jsxs("div", { className: l.nav, style: u.nav, children: [!e.hidePrevious && v.jsx(Ms, { name: "previous-month", "aria-label": x, className: w, style: u.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: a === "rtl" ? v.jsx(b, { className: l.nav_icon, style: u.nav_icon }) : v.jsx(P, { className: l.nav_icon, style: u.nav_icon }) }), !e.hideNext && v.jsx(Ms, { name: "next-month", "aria-label": O, className: _, style: u.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: a === "rtl" ? v.jsx(P, { className: l.nav_icon, style: u.nav_icon }) : v.jsx(b, { className: l.nav_icon, style: u.nav_icon }) })] });
}
function Pm(e) {
  var t = bt().numberOfMonths, n = oo(), r = n.previousMonth, a = n.nextMonth, o = n.goToMonth, l = n.displayMonths, u = l.findIndex(function(O) {
    return bd(e.displayMonth, O);
  }), d = u === 0, p = u === l.length - 1, h = t > 1 && (d || !p), m = t > 1 && (p || !d), x = function() {
    r && o(r);
  }, w = function() {
    a && o(a);
  };
  return v.jsx(bM, { displayMonth: e.displayMonth, hideNext: h, hidePrevious: m, nextMonth: a, previousMonth: r, onPreviousClick: x, onNextClick: w });
}
function wM(e) {
  var t, n = bt(), r = n.classNames, a = n.disableNavigation, o = n.styles, l = n.captionLayout, u = n.components, d = (t = u == null ? void 0 : u.CaptionLabel) !== null && t !== void 0 ? t : ix, p;
  return a ? p = v.jsx(d, { id: e.id, displayMonth: e.displayMonth }) : l === "dropdown" ? p = v.jsx(km, { displayMonth: e.displayMonth, id: e.id }) : l === "dropdown-buttons" ? p = v.jsxs(v.Fragment, { children: [v.jsx(km, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), v.jsx(Pm, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : p = v.jsxs(v.Fragment, { children: [v.jsx(d, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), v.jsx(Pm, { displayMonth: e.displayMonth, id: e.id })] }), v.jsx("div", { className: r.caption, style: o.caption, children: p });
}
function _M(e) {
  var t = bt(), n = t.footer, r = t.styles, a = t.classNames.tfoot;
  return n ? v.jsx("tfoot", { className: a, style: r.tfoot, children: v.jsx("tr", { children: v.jsx("td", { colSpan: 8, children: n }) }) }) : v.jsx(v.Fragment, {});
}
function EM(e, t, n) {
  for (var r = n ? xi(/* @__PURE__ */ new Date()) : or(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), a = [], o = 0; o < 7; o++) {
    var l = en(r, o);
    a.push(l);
  }
  return a;
}
function CM() {
  var e = bt(), t = e.classNames, n = e.styles, r = e.showWeekNumber, a = e.locale, o = e.weekStartsOn, l = e.ISOWeek, u = e.formatters.formatWeekdayName, d = e.labels.labelWeekday, p = EM(a, o, l);
  return v.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && v.jsx("td", { style: n.head_cell, className: t.head_cell }), p.map(function(h, m) {
    return v.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": d(h, { locale: a }), children: u(h, { locale: a }) }, m);
  })] });
}
function TM() {
  var e, t = bt(), n = t.classNames, r = t.styles, a = t.components, o = (e = a == null ? void 0 : a.HeadRow) !== null && e !== void 0 ? e : CM;
  return v.jsx("thead", { style: r.head, className: n.head, children: v.jsx(o, {}) });
}
function OM(e) {
  var t = bt(), n = t.locale, r = t.formatters.formatDay;
  return v.jsx(v.Fragment, { children: r(e.date, { locale: n }) });
}
var wd = bi(void 0);
function SM(e) {
  if (!io(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return v.jsx(wd.Provider, { value: t, children: e.children });
  }
  return v.jsx(DM, { initialProps: e.initialProps, children: e.children });
}
function DM(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = t.min, o = t.max, l = function(p, h, m) {
    var x, w;
    (x = t.onDayClick) === null || x === void 0 || x.call(t, p, h, m);
    var O = !!(h.selected && a && (r == null ? void 0 : r.length) === a);
    if (!O) {
      var _ = !!(!h.selected && o && (r == null ? void 0 : r.length) === o);
      if (!_) {
        var b = r ? nx([], r) : [];
        if (h.selected) {
          var P = b.findIndex(function(C) {
            return hn(p, C);
          });
          b.splice(P, 1);
        } else
          b.push(p);
        (w = t.onSelect) === null || w === void 0 || w.call(t, b, p, h, m);
      }
    }
  }, u = {
    disabled: []
  };
  r && u.disabled.push(function(p) {
    var h = o && r.length > o - 1, m = r.some(function(x) {
      return hn(x, p);
    });
    return !!(h && !m);
  });
  var d = {
    selected: r,
    onDayClick: l,
    modifiers: u
  };
  return v.jsx(wd.Provider, { value: d, children: n });
}
function _d() {
  var e = Yt(wd);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function kM(e, t) {
  var n = t || {}, r = n.from, a = n.to;
  return r && a ? hn(a, e) && hn(r, e) ? void 0 : hn(a, e) ? { from: a, to: void 0 } : hn(r, e) ? void 0 : Pc(r, e) ? { from: e, to: a } : { from: r, to: e } : a ? Pc(e, a) ? { from: a, to: e } : { from: e, to: a } : r ? tx(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Ed = bi(void 0);
function PM(e) {
  if (!ao(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return v.jsx(Ed.Provider, { value: t, children: e.children });
  }
  return v.jsx(AM, { initialProps: e.initialProps, children: e.children });
}
function AM(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = r || {}, o = a.from, l = a.to, u = t.min, d = t.max, p = function(w, O, _) {
    var b, P;
    (b = t.onDayClick) === null || b === void 0 || b.call(t, w, O, _);
    var C = kM(w, r);
    (P = t.onSelect) === null || P === void 0 || P.call(t, C, w, O, _);
  }, h = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (o ? (h.range_start = [o], l ? (h.range_end = [l], hn(o, l) || (h.range_middle = [
    {
      after: o,
      before: l
    }
  ])) : h.range_end = [o]) : l && (h.range_start = [l], h.range_end = [l]), u && (o && !l && h.disabled.push({
    after: Yu(o, u - 1),
    before: en(o, u - 1)
  }), o && l && h.disabled.push({
    after: o,
    before: en(o, u - 1)
  }), !o && l && h.disabled.push({
    after: Yu(l, u - 1),
    before: en(l, u - 1)
  })), d) {
    if (o && !l && (h.disabled.push({
      before: en(o, -d + 1)
    }), h.disabled.push({
      after: en(o, d - 1)
    })), o && l) {
      var m = nr(l, o) + 1, x = d - m;
      h.disabled.push({
        before: Yu(o, x)
      }), h.disabled.push({
        after: en(l, x)
      });
    }
    !o && l && (h.disabled.push({
      before: en(l, -d + 1)
    }), h.disabled.push({
      after: en(l, d - 1)
    }));
  }
  return v.jsx(Ed.Provider, { value: { selected: r, onDayClick: p, modifiers: h }, children: n });
}
function Cd() {
  var e = Yt(Ed);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function bs(e) {
  return Array.isArray(e) ? nx([], e) : e !== void 0 ? [e] : [];
}
function IM(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], a = n[1];
    t[r] = bs(a);
  }), t;
}
var Kn;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Kn || (Kn = {}));
var MM = Kn.Selected, xr = Kn.Disabled, NM = Kn.Hidden, jM = Kn.Today, Ku = Kn.RangeEnd, Gu = Kn.RangeMiddle, Xu = Kn.RangeStart, RM = Kn.Outside;
function $M(e, t, n) {
  var r, a = (r = {}, r[MM] = bs(e.selected), r[xr] = bs(e.disabled), r[NM] = bs(e.hidden), r[jM] = [e.today], r[Ku] = [], r[Gu] = [], r[Xu] = [], r[RM] = [], r);
  return e.fromDate && a[xr].push({ before: e.fromDate }), e.toDate && a[xr].push({ after: e.toDate }), io(e) ? a[xr] = a[xr].concat(t.modifiers[xr]) : ao(e) && (a[xr] = a[xr].concat(n.modifiers[xr]), a[Xu] = n.modifiers[Xu], a[Gu] = n.modifiers[Gu], a[Ku] = n.modifiers[Ku]), a;
}
var sx = bi(void 0);
function FM(e) {
  var t = bt(), n = _d(), r = Cd(), a = $M(t, n, r), o = IM(t.modifiers), l = je(je({}, a), o);
  return v.jsx(sx.Provider, { value: l, children: e.children });
}
function lx() {
  var e = Yt(sx);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function LM(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function WM(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function VM(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function zM(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function BM(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function HM(e, t) {
  var n, r = t.from, a = t.to;
  if (r && a) {
    var o = nr(a, r) < 0;
    o && (n = [a, r], r = n[0], a = n[1]);
    var l = nr(e, r) >= 0 && nr(a, e) >= 0;
    return l;
  }
  return a ? hn(a, e) : r ? hn(r, e) : !1;
}
function UM(e) {
  return vd(e);
}
function YM(e) {
  return Array.isArray(e) && e.every(vd);
}
function qM(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (UM(n))
      return hn(e, n);
    if (YM(n))
      return n.includes(e);
    if (WM(n))
      return HM(e, n);
    if (BM(n))
      return n.dayOfWeek.includes(e.getDay());
    if (LM(n)) {
      var r = nr(n.before, e), a = nr(n.after, e), o = r > 0, l = a < 0, u = Pc(n.before, n.after);
      return u ? l && o : o || l;
    }
    return VM(n) ? nr(e, n.after) > 0 : zM(n) ? nr(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Td(e, t, n) {
  var r = Object.keys(t).reduce(function(o, l) {
    var u = t[l];
    return qM(e, u) && o.push(l), o;
  }, []), a = {};
  return r.forEach(function(o) {
    return a[o] = !0;
  }), n && !bd(e, n) && (a.outside = !0), a;
}
function KM(e, t) {
  for (var n = mn(e[0]), r = yd(e[e.length - 1]), a, o, l = n; l <= r; ) {
    var u = Td(l, t), d = !u.disabled && !u.hidden;
    if (!d) {
      l = en(l, 1);
      continue;
    }
    if (u.selected)
      return l;
    u.today && !o && (o = l), a || (a = l), l = en(l, 1);
  }
  return o || a;
}
var GM = 365;
function ux(e, t) {
  var n = t.moveBy, r = t.direction, a = t.context, o = t.modifiers, l = t.retry, u = l === void 0 ? { count: 0, lastFocused: e } : l, d = a.weekStartsOn, p = a.fromDate, h = a.toDate, m = a.locale, x = {
    day: en,
    week: kc,
    month: qn,
    year: uA,
    startOfWeek: function(b) {
      return a.ISOWeek ? xi(b) : or(b, { locale: m, weekStartsOn: d });
    },
    endOfWeek: function(b) {
      return a.ISOWeek ? Ky(b) : xd(b, { locale: m, weekStartsOn: d });
    }
  }, w = x[n](e, r === "after" ? 1 : -1);
  r === "before" && p ? w = cA([p, w]) : r === "after" && h && (w = dA([h, w]));
  var O = !0;
  if (o) {
    var _ = Td(w, o);
    O = !_.disabled && !_.hidden;
  }
  return O ? w : u.count > GM ? u.lastFocused : ux(w, {
    moveBy: n,
    direction: r,
    context: a,
    modifiers: o,
    retry: je(je({}, u), { count: u.count + 1 })
  });
}
var cx = bi(void 0);
function XM(e) {
  var t = oo(), n = lx(), r = ht(), a = r[0], o = r[1], l = ht(), u = l[0], d = l[1], p = KM(t.displayMonths, n), h = a ?? (u && t.isDateDisplayed(u)) ? u : p, m = function() {
    d(a), o(void 0);
  }, x = function(b) {
    o(b);
  }, w = bt(), O = function(b, P) {
    if (a) {
      var C = ux(a, {
        moveBy: b,
        direction: P,
        context: w,
        modifiers: n
      });
      hn(a, C) || (t.goToDate(C, a), x(C));
    }
  }, _ = {
    focusedDay: a,
    focusTarget: h,
    blur: m,
    focus: x,
    focusDayAfter: function() {
      return O("day", "after");
    },
    focusDayBefore: function() {
      return O("day", "before");
    },
    focusWeekAfter: function() {
      return O("week", "after");
    },
    focusWeekBefore: function() {
      return O("week", "before");
    },
    focusMonthBefore: function() {
      return O("month", "before");
    },
    focusMonthAfter: function() {
      return O("month", "after");
    },
    focusYearBefore: function() {
      return O("year", "before");
    },
    focusYearAfter: function() {
      return O("year", "after");
    },
    focusStartOfWeek: function() {
      return O("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return O("endOfWeek", "after");
    }
  };
  return v.jsx(cx.Provider, { value: _, children: e.children });
}
function Od() {
  var e = Yt(cx);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function ZM(e, t) {
  var n = lx(), r = Td(e, n, t);
  return r;
}
var Sd = bi(void 0);
function JM(e) {
  if (!sl(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return v.jsx(Sd.Provider, { value: t, children: e.children });
  }
  return v.jsx(QM, { initialProps: e.initialProps, children: e.children });
}
function QM(e) {
  var t = e.initialProps, n = e.children, r = function(o, l, u) {
    var d, p, h;
    if ((d = t.onDayClick) === null || d === void 0 || d.call(t, o, l, u), l.selected && !t.required) {
      (p = t.onSelect) === null || p === void 0 || p.call(t, void 0, o, l, u);
      return;
    }
    (h = t.onSelect) === null || h === void 0 || h.call(t, o, o, l, u);
  }, a = {
    selected: t.selected,
    onDayClick: r
  };
  return v.jsx(Sd.Provider, { value: a, children: n });
}
function dx() {
  var e = Yt(Sd);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function eN(e, t) {
  var n = bt(), r = dx(), a = _d(), o = Cd(), l = Od(), u = l.focusDayAfter, d = l.focusDayBefore, p = l.focusWeekAfter, h = l.focusWeekBefore, m = l.blur, x = l.focus, w = l.focusMonthBefore, O = l.focusMonthAfter, _ = l.focusYearBefore, b = l.focusYearAfter, P = l.focusStartOfWeek, C = l.focusEndOfWeek, k = function(j) {
    var I, X, M, L;
    sl(n) ? (I = r.onDayClick) === null || I === void 0 || I.call(r, e, t, j) : io(n) ? (X = a.onDayClick) === null || X === void 0 || X.call(a, e, t, j) : ao(n) ? (M = o.onDayClick) === null || M === void 0 || M.call(o, e, t, j) : (L = n.onDayClick) === null || L === void 0 || L.call(n, e, t, j);
  }, D = function(j) {
    var I;
    x(e), (I = n.onDayFocus) === null || I === void 0 || I.call(n, e, t, j);
  }, S = function(j) {
    var I;
    m(), (I = n.onDayBlur) === null || I === void 0 || I.call(n, e, t, j);
  }, Z = function(j) {
    var I;
    (I = n.onDayMouseEnter) === null || I === void 0 || I.call(n, e, t, j);
  }, J = function(j) {
    var I;
    (I = n.onDayMouseLeave) === null || I === void 0 || I.call(n, e, t, j);
  }, ne = function(j) {
    var I;
    (I = n.onDayPointerEnter) === null || I === void 0 || I.call(n, e, t, j);
  }, V = function(j) {
    var I;
    (I = n.onDayPointerLeave) === null || I === void 0 || I.call(n, e, t, j);
  }, Y = function(j) {
    var I;
    (I = n.onDayTouchCancel) === null || I === void 0 || I.call(n, e, t, j);
  }, te = function(j) {
    var I;
    (I = n.onDayTouchEnd) === null || I === void 0 || I.call(n, e, t, j);
  }, R = function(j) {
    var I;
    (I = n.onDayTouchMove) === null || I === void 0 || I.call(n, e, t, j);
  }, z = function(j) {
    var I;
    (I = n.onDayTouchStart) === null || I === void 0 || I.call(n, e, t, j);
  }, B = function(j) {
    var I;
    (I = n.onDayKeyUp) === null || I === void 0 || I.call(n, e, t, j);
  }, U = function(j) {
    var I;
    switch (j.key) {
      case "ArrowLeft":
        j.preventDefault(), j.stopPropagation(), n.dir === "rtl" ? u() : d();
        break;
      case "ArrowRight":
        j.preventDefault(), j.stopPropagation(), n.dir === "rtl" ? d() : u();
        break;
      case "ArrowDown":
        j.preventDefault(), j.stopPropagation(), p();
        break;
      case "ArrowUp":
        j.preventDefault(), j.stopPropagation(), h();
        break;
      case "PageUp":
        j.preventDefault(), j.stopPropagation(), j.shiftKey ? _() : w();
        break;
      case "PageDown":
        j.preventDefault(), j.stopPropagation(), j.shiftKey ? b() : O();
        break;
      case "Home":
        j.preventDefault(), j.stopPropagation(), P();
        break;
      case "End":
        j.preventDefault(), j.stopPropagation(), C();
        break;
    }
    (I = n.onDayKeyDown) === null || I === void 0 || I.call(n, e, t, j);
  }, K = {
    onClick: k,
    onFocus: D,
    onBlur: S,
    onKeyDown: U,
    onKeyUp: B,
    onMouseEnter: Z,
    onMouseLeave: J,
    onPointerEnter: ne,
    onPointerLeave: V,
    onTouchCancel: Y,
    onTouchEnd: te,
    onTouchMove: R,
    onTouchStart: z
  };
  return K;
}
function tN() {
  var e = bt(), t = dx(), n = _d(), r = Cd(), a = sl(e) ? t.selected : io(e) ? n.selected : ao(e) ? r.selected : void 0;
  return a;
}
function nN(e) {
  return Object.values(Kn).includes(e);
}
function rN(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var a = e.modifiersClassNames[r];
    if (a)
      n.push(a);
    else if (nN(r)) {
      var o = e.classNames["day_".concat(r)];
      o && n.push(o);
    }
  }), n;
}
function iN(e, t) {
  var n = je({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var a;
    n = je(je({}, n), (a = e.modifiersStyles) === null || a === void 0 ? void 0 : a[r]);
  }), n;
}
function aN(e, t, n) {
  var r, a, o, l = bt(), u = Od(), d = ZM(e, t), p = eN(e, d), h = tN(), m = !!(l.onDayClick || l.mode !== "default");
  ct(function() {
    var Z;
    d.outside || u.focusedDay && m && hn(u.focusedDay, e) && ((Z = n.current) === null || Z === void 0 || Z.focus());
  }, [
    u.focusedDay,
    e,
    n,
    m,
    d.outside
  ]);
  var x = rN(l, d).join(" "), w = iN(l, d), O = !!(d.outside && !l.showOutsideDays || d.hidden), _ = (o = (a = l.components) === null || a === void 0 ? void 0 : a.DayContent) !== null && o !== void 0 ? o : OM, b = v.jsx(_, { date: e, displayMonth: t, activeModifiers: d }), P = {
    style: w,
    className: x,
    children: b,
    role: "gridcell"
  }, C = u.focusTarget && hn(u.focusTarget, e) && !d.outside, k = u.focusedDay && hn(u.focusedDay, e), D = je(je(je({}, P), (r = { disabled: d.disabled, role: "gridcell" }, r["aria-selected"] = d.selected, r.tabIndex = k || C ? 0 : -1, r)), p), S = {
    isButton: m,
    isHidden: O,
    activeModifiers: d,
    selectedDays: h,
    buttonProps: D,
    divProps: P
  };
  return S;
}
function oN(e) {
  var t = qe(null), n = aN(e.date, e.displayMonth, t);
  return n.isHidden ? v.jsx("div", { role: "gridcell" }) : n.isButton ? v.jsx(Ms, je({ name: "day", ref: t }, n.buttonProps)) : v.jsx("div", je({}, n.divProps));
}
function sN(e) {
  var t = e.number, n = e.dates, r = bt(), a = r.onWeekNumberClick, o = r.styles, l = r.classNames, u = r.locale, d = r.labels.labelWeekNumber, p = r.formatters.formatWeekNumber, h = p(Number(t), { locale: u });
  if (!a)
    return v.jsx("span", { className: l.weeknumber, style: o.weeknumber, children: h });
  var m = d(Number(t), { locale: u }), x = function(w) {
    a(t, n, w);
  };
  return v.jsx(Ms, { name: "week-number", "aria-label": m, className: l.weeknumber, style: o.weeknumber, onClick: x, children: h });
}
function lN(e) {
  var t, n, r = bt(), a = r.styles, o = r.classNames, l = r.showWeekNumber, u = r.components, d = (t = u == null ? void 0 : u.Day) !== null && t !== void 0 ? t : oN, p = (n = u == null ? void 0 : u.WeekNumber) !== null && n !== void 0 ? n : sN, h;
  return l && (h = v.jsx("td", { className: o.cell, style: a.cell, children: v.jsx(p, { number: e.weekNumber, dates: e.dates }) })), v.jsxs("tr", { className: o.row, style: a.row, children: [h, e.dates.map(function(m) {
    return v.jsx("td", { className: o.cell, style: a.cell, role: "presentation", children: v.jsx(d, { displayMonth: e.displayMonth, date: m }) }, uI(m));
  })] });
}
function Am(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Ky(t) : xd(t, n), a = n != null && n.ISOWeek ? xi(e) : or(e, n), o = nr(r, a), l = [], u = 0; u <= o; u++)
    l.push(en(a, u));
  var d = l.reduce(function(p, h) {
    var m = n != null && n.ISOWeek ? Zy(h) : Qy(h, n), x = p.find(function(w) {
      return w.weekNumber === m;
    });
    return x ? (x.dates.push(h), p) : (p.push({
      weekNumber: m,
      dates: [h]
    }), p);
  }, []);
  return d;
}
function uN(e, t) {
  var n = Am(mn(e), yd(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = dI(e, t);
    if (r < 6) {
      var a = n[n.length - 1], o = a.dates[a.dates.length - 1], l = kc(o, 6 - r), u = Am(kc(o, 1), l, t);
      n.push.apply(n, u);
    }
  }
  return n;
}
function cN(e) {
  var t, n, r, a = bt(), o = a.locale, l = a.classNames, u = a.styles, d = a.hideHead, p = a.fixedWeeks, h = a.components, m = a.weekStartsOn, x = a.firstWeekContainsDate, w = a.ISOWeek, O = uN(e.displayMonth, {
    useFixedWeeks: !!p,
    ISOWeek: w,
    locale: o,
    weekStartsOn: m,
    firstWeekContainsDate: x
  }), _ = (t = h == null ? void 0 : h.Head) !== null && t !== void 0 ? t : TM, b = (n = h == null ? void 0 : h.Row) !== null && n !== void 0 ? n : lN, P = (r = h == null ? void 0 : h.Footer) !== null && r !== void 0 ? r : _M;
  return v.jsxs("table", { id: e.id, className: l.table, style: u.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!d && v.jsx(_, {}), v.jsx("tbody", { className: l.tbody, style: u.tbody, children: O.map(function(C) {
    return v.jsx(b, { displayMonth: e.displayMonth, dates: C.dates, weekNumber: C.weekNumber }, C.weekNumber);
  }) }), v.jsx(P, { displayMonth: e.displayMonth })] });
}
function dN() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var fN = dN() ? zr : ct, Zu = !1, pN = 0;
function Im() {
  return "react-day-picker-".concat(++pN);
}
function hN(e) {
  var t, n = e ?? (Zu ? Im() : null), r = ht(n), a = r[0], o = r[1];
  return fN(function() {
    a === null && o(Im());
  }, []), ct(function() {
    Zu === !1 && (Zu = !0);
  }, []), (t = e ?? a) !== null && t !== void 0 ? t : void 0;
}
function mN(e) {
  var t, n, r = bt(), a = r.dir, o = r.classNames, l = r.styles, u = r.components, d = oo().displayMonths, p = hN(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), h = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, m = [o.month], x = l.month, w = e.displayIndex === 0, O = e.displayIndex === d.length - 1, _ = !w && !O;
  a === "rtl" && (t = [w, O], O = t[0], w = t[1]), w && (m.push(o.caption_start), x = je(je({}, x), l.caption_start)), O && (m.push(o.caption_end), x = je(je({}, x), l.caption_end)), _ && (m.push(o.caption_between), x = je(je({}, x), l.caption_between));
  var b = (n = u == null ? void 0 : u.Caption) !== null && n !== void 0 ? n : wM;
  return v.jsxs("div", { className: m.join(" "), style: x, children: [v.jsx(b, { id: p, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), v.jsx(cN, { id: h, "aria-labelledby": p, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function gN(e) {
  var t = bt(), n = t.classNames, r = t.styles;
  return v.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function vN(e) {
  var t, n, r = e.initialProps, a = bt(), o = Od(), l = oo(), u = ht(!1), d = u[0], p = u[1];
  ct(function() {
    a.initialFocus && o.focusTarget && (d || (o.focus(o.focusTarget), p(!0)));
  }, [
    a.initialFocus,
    d,
    o.focus,
    o.focusTarget,
    o
  ]);
  var h = [a.classNames.root, a.className];
  a.numberOfMonths > 1 && h.push(a.classNames.multiple_months), a.showWeekNumber && h.push(a.classNames.with_weeknumber);
  var m = je(je({}, a.styles.root), a.style), x = Object.keys(r).filter(function(O) {
    return O.startsWith("data-");
  }).reduce(function(O, _) {
    var b;
    return je(je({}, O), (b = {}, b[_] = r[_], b));
  }, {}), w = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : gN;
  return v.jsx("div", je({ className: h.join(" "), style: m, dir: a.dir, id: a.id, nonce: r.nonce, title: r.title, lang: r.lang }, x, { children: v.jsx(w, { children: l.displayMonths.map(function(O, _) {
    return v.jsx(mN, { displayIndex: _, displayMonth: O }, _);
  }) }) }));
}
function yN(e) {
  var t = e.children, n = zI(e, ["children"]);
  return v.jsx(sM, { initialProps: n, children: v.jsx(vM, { children: v.jsx(JM, { initialProps: n, children: v.jsx(SM, { initialProps: n, children: v.jsx(PM, { initialProps: n, children: v.jsx(FM, { children: v.jsx(XM, { children: t }) }) }) }) }) }) });
}
function xN(e) {
  return v.jsx(yN, je({}, e, { children: v.jsx(vN, { initialProps: e }) }));
}
function zn(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Ue() {
  return Ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ue.apply(null, arguments);
}
function Ic(e, t) {
  return Ic = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ic(e, t);
}
function bN(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ic(e, t);
}
var Mc = { exports: {} }, us = { exports: {} }, ot = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm;
function wN() {
  if (Mm) return ot;
  Mm = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function k(S) {
    if (typeof S == "object" && S !== null) {
      var Z = S.$$typeof;
      switch (Z) {
        case t:
          switch (S = S.type, S) {
            case d:
            case p:
            case r:
            case o:
            case a:
            case m:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case u:
                case h:
                case O:
                case w:
                case l:
                  return S;
                default:
                  return Z;
              }
          }
        case n:
          return Z;
      }
    }
  }
  function D(S) {
    return k(S) === p;
  }
  return ot.AsyncMode = d, ot.ConcurrentMode = p, ot.ContextConsumer = u, ot.ContextProvider = l, ot.Element = t, ot.ForwardRef = h, ot.Fragment = r, ot.Lazy = O, ot.Memo = w, ot.Portal = n, ot.Profiler = o, ot.StrictMode = a, ot.Suspense = m, ot.isAsyncMode = function(S) {
    return D(S) || k(S) === d;
  }, ot.isConcurrentMode = D, ot.isContextConsumer = function(S) {
    return k(S) === u;
  }, ot.isContextProvider = function(S) {
    return k(S) === l;
  }, ot.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, ot.isForwardRef = function(S) {
    return k(S) === h;
  }, ot.isFragment = function(S) {
    return k(S) === r;
  }, ot.isLazy = function(S) {
    return k(S) === O;
  }, ot.isMemo = function(S) {
    return k(S) === w;
  }, ot.isPortal = function(S) {
    return k(S) === n;
  }, ot.isProfiler = function(S) {
    return k(S) === o;
  }, ot.isStrictMode = function(S) {
    return k(S) === a;
  }, ot.isSuspense = function(S) {
    return k(S) === m;
  }, ot.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === p || S === o || S === a || S === m || S === x || typeof S == "object" && S !== null && (S.$$typeof === O || S.$$typeof === w || S.$$typeof === l || S.$$typeof === u || S.$$typeof === h || S.$$typeof === b || S.$$typeof === P || S.$$typeof === C || S.$$typeof === _);
  }, ot.typeOf = k, ot;
}
var st = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nm;
function _N() {
  return Nm || (Nm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function k(fe) {
      return typeof fe == "string" || typeof fe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      fe === r || fe === p || fe === o || fe === a || fe === m || fe === x || typeof fe == "object" && fe !== null && (fe.$$typeof === O || fe.$$typeof === w || fe.$$typeof === l || fe.$$typeof === u || fe.$$typeof === h || fe.$$typeof === b || fe.$$typeof === P || fe.$$typeof === C || fe.$$typeof === _);
    }
    function D(fe) {
      if (typeof fe == "object" && fe !== null) {
        var Re = fe.$$typeof;
        switch (Re) {
          case t:
            var ve = fe.type;
            switch (ve) {
              case d:
              case p:
              case r:
              case o:
              case a:
              case m:
                return ve;
              default:
                var et = ve && ve.$$typeof;
                switch (et) {
                  case u:
                  case h:
                  case O:
                  case w:
                  case l:
                    return et;
                  default:
                    return Re;
                }
            }
          case n:
            return Re;
        }
      }
    }
    var S = d, Z = p, J = u, ne = l, V = t, Y = h, te = r, R = O, z = w, B = n, U = o, K = a, j = m, I = !1;
    function X(fe) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(fe) || D(fe) === d;
    }
    function M(fe) {
      return D(fe) === p;
    }
    function L(fe) {
      return D(fe) === u;
    }
    function ue(fe) {
      return D(fe) === l;
    }
    function he(fe) {
      return typeof fe == "object" && fe !== null && fe.$$typeof === t;
    }
    function ce(fe) {
      return D(fe) === h;
    }
    function ye(fe) {
      return D(fe) === r;
    }
    function ge(fe) {
      return D(fe) === O;
    }
    function be(fe) {
      return D(fe) === w;
    }
    function we(fe) {
      return D(fe) === n;
    }
    function Ce(fe) {
      return D(fe) === o;
    }
    function _e(fe) {
      return D(fe) === a;
    }
    function Se(fe) {
      return D(fe) === m;
    }
    st.AsyncMode = S, st.ConcurrentMode = Z, st.ContextConsumer = J, st.ContextProvider = ne, st.Element = V, st.ForwardRef = Y, st.Fragment = te, st.Lazy = R, st.Memo = z, st.Portal = B, st.Profiler = U, st.StrictMode = K, st.Suspense = j, st.isAsyncMode = X, st.isConcurrentMode = M, st.isContextConsumer = L, st.isContextProvider = ue, st.isElement = he, st.isForwardRef = ce, st.isFragment = ye, st.isLazy = ge, st.isMemo = be, st.isPortal = we, st.isProfiler = Ce, st.isStrictMode = _e, st.isSuspense = Se, st.isValidElementType = k, st.typeOf = D;
  }()), st;
}
var jm;
function fx() {
  return jm || (jm = 1, process.env.NODE_ENV === "production" ? us.exports = wN() : us.exports = _N()), us.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ju, Rm;
function EN() {
  if (Rm) return Ju;
  Rm = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var l = {}, u = 0; u < 10; u++)
        l["_" + String.fromCharCode(u)] = u;
      var d = Object.getOwnPropertyNames(l).map(function(h) {
        return l[h];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        p[h] = h;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ju = a() ? Object.assign : function(o, l) {
    for (var u, d = r(o), p, h = 1; h < arguments.length; h++) {
      u = Object(arguments[h]);
      for (var m in u)
        t.call(u, m) && (d[m] = u[m]);
      if (e) {
        p = e(u);
        for (var x = 0; x < p.length; x++)
          n.call(u, p[x]) && (d[p[x]] = u[p[x]]);
      }
    }
    return d;
  }, Ju;
}
var Qu, $m;
function Dd() {
  if ($m) return Qu;
  $m = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qu = e, Qu;
}
var ec, Fm;
function px() {
  return Fm || (Fm = 1, ec = Function.call.bind(Object.prototype.hasOwnProperty)), ec;
}
var tc, Lm;
function CN() {
  if (Lm) return tc;
  Lm = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Dd(), n = {}, r = px();
    e = function(o) {
      var l = "Warning: " + o;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function a(o, l, u, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in o)
        if (r(o, h)) {
          var m;
          try {
            if (typeof o[h] != "function") {
              var x = Error(
                (d || "React class") + ": " + u + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            m = o[h](l, h, d, u, null, t);
          } catch (O) {
            m = O;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + u + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var w = p ? p() : "";
            e(
              "Failed " + u + " type: " + m.message + (w ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, tc = a, tc;
}
var nc, Wm;
function TN() {
  if (Wm) return nc;
  Wm = 1;
  var e = fx(), t = EN(), n = Dd(), r = px(), a = CN(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(u) {
    var d = "Warning: " + u;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return nc = function(u, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(M) {
      var L = M && (p && M[p] || M[h]);
      if (typeof L == "function")
        return L;
    }
    var x = "<<anonymous>>", w = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: C(),
      arrayOf: k,
      element: D(),
      elementType: S(),
      instanceOf: Z,
      node: Y(),
      objectOf: ne,
      oneOf: J,
      oneOfType: V,
      shape: R,
      exact: z
    };
    function O(M, L) {
      return M === L ? M !== 0 || 1 / M === 1 / L : M !== M && L !== L;
    }
    function _(M, L) {
      this.message = M, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function b(M) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, ue = 0;
      function he(ye, ge, be, we, Ce, _e, Se) {
        if (we = we || x, _e = _e || be, Se !== n) {
          if (d) {
            var fe = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw fe.name = "Invariant Violation", fe;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = we + ":" + be;
            !L[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            ue < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + _e + "` prop on `" + we + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[Re] = !0, ue++);
          }
        }
        return ge[be] == null ? ye ? ge[be] === null ? new _("The " + Ce + " `" + _e + "` is marked as required " + ("in `" + we + "`, but its value is `null`.")) : new _("The " + Ce + " `" + _e + "` is marked as required in " + ("`" + we + "`, but its value is `undefined`.")) : null : M(ge, be, we, Ce, _e);
      }
      var ce = he.bind(null, !1);
      return ce.isRequired = he.bind(null, !0), ce;
    }
    function P(M) {
      function L(ue, he, ce, ye, ge, be) {
        var we = ue[he], Ce = K(we);
        if (Ce !== M) {
          var _e = j(we);
          return new _(
            "Invalid " + ye + " `" + ge + "` of type " + ("`" + _e + "` supplied to `" + ce + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return b(L);
    }
    function C() {
      return b(l);
    }
    function k(M) {
      function L(ue, he, ce, ye, ge) {
        if (typeof M != "function")
          return new _("Property `" + ge + "` of component `" + ce + "` has invalid PropType notation inside arrayOf.");
        var be = ue[he];
        if (!Array.isArray(be)) {
          var we = K(be);
          return new _("Invalid " + ye + " `" + ge + "` of type " + ("`" + we + "` supplied to `" + ce + "`, expected an array."));
        }
        for (var Ce = 0; Ce < be.length; Ce++) {
          var _e = M(be, Ce, ce, ye, ge + "[" + Ce + "]", n);
          if (_e instanceof Error)
            return _e;
        }
        return null;
      }
      return b(L);
    }
    function D() {
      function M(L, ue, he, ce, ye) {
        var ge = L[ue];
        if (!u(ge)) {
          var be = K(ge);
          return new _("Invalid " + ce + " `" + ye + "` of type " + ("`" + be + "` supplied to `" + he + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(M);
    }
    function S() {
      function M(L, ue, he, ce, ye) {
        var ge = L[ue];
        if (!e.isValidElementType(ge)) {
          var be = K(ge);
          return new _("Invalid " + ce + " `" + ye + "` of type " + ("`" + be + "` supplied to `" + he + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(M);
    }
    function Z(M) {
      function L(ue, he, ce, ye, ge) {
        if (!(ue[he] instanceof M)) {
          var be = M.name || x, we = X(ue[he]);
          return new _("Invalid " + ye + " `" + ge + "` of type " + ("`" + we + "` supplied to `" + ce + "`, expected ") + ("instance of `" + be + "`."));
        }
        return null;
      }
      return b(L);
    }
    function J(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function L(ue, he, ce, ye, ge) {
        for (var be = ue[he], we = 0; we < M.length; we++)
          if (O(be, M[we]))
            return null;
        var Ce = JSON.stringify(M, function(Se, fe) {
          var Re = j(fe);
          return Re === "symbol" ? String(fe) : fe;
        });
        return new _("Invalid " + ye + " `" + ge + "` of value `" + String(be) + "` " + ("supplied to `" + ce + "`, expected one of " + Ce + "."));
      }
      return b(L);
    }
    function ne(M) {
      function L(ue, he, ce, ye, ge) {
        if (typeof M != "function")
          return new _("Property `" + ge + "` of component `" + ce + "` has invalid PropType notation inside objectOf.");
        var be = ue[he], we = K(be);
        if (we !== "object")
          return new _("Invalid " + ye + " `" + ge + "` of type " + ("`" + we + "` supplied to `" + ce + "`, expected an object."));
        for (var Ce in be)
          if (r(be, Ce)) {
            var _e = M(be, Ce, ce, ye, ge + "." + Ce, n);
            if (_e instanceof Error)
              return _e;
          }
        return null;
      }
      return b(L);
    }
    function V(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var L = 0; L < M.length; L++) {
        var ue = M[L];
        if (typeof ue != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + I(ue) + " at index " + L + "."
          ), l;
      }
      function he(ce, ye, ge, be, we) {
        for (var Ce = [], _e = 0; _e < M.length; _e++) {
          var Se = M[_e], fe = Se(ce, ye, ge, be, we, n);
          if (fe == null)
            return null;
          fe.data && r(fe.data, "expectedType") && Ce.push(fe.data.expectedType);
        }
        var Re = Ce.length > 0 ? ", expected one of type [" + Ce.join(", ") + "]" : "";
        return new _("Invalid " + be + " `" + we + "` supplied to " + ("`" + ge + "`" + Re + "."));
      }
      return b(he);
    }
    function Y() {
      function M(L, ue, he, ce, ye) {
        return B(L[ue]) ? null : new _("Invalid " + ce + " `" + ye + "` supplied to " + ("`" + he + "`, expected a ReactNode."));
      }
      return b(M);
    }
    function te(M, L, ue, he, ce) {
      return new _(
        (M || "React class") + ": " + L + " type `" + ue + "." + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ce + "`."
      );
    }
    function R(M) {
      function L(ue, he, ce, ye, ge) {
        var be = ue[he], we = K(be);
        if (we !== "object")
          return new _("Invalid " + ye + " `" + ge + "` of type `" + we + "` " + ("supplied to `" + ce + "`, expected `object`."));
        for (var Ce in M) {
          var _e = M[Ce];
          if (typeof _e != "function")
            return te(ce, ye, ge, Ce, j(_e));
          var Se = _e(be, Ce, ce, ye, ge + "." + Ce, n);
          if (Se)
            return Se;
        }
        return null;
      }
      return b(L);
    }
    function z(M) {
      function L(ue, he, ce, ye, ge) {
        var be = ue[he], we = K(be);
        if (we !== "object")
          return new _("Invalid " + ye + " `" + ge + "` of type `" + we + "` " + ("supplied to `" + ce + "`, expected `object`."));
        var Ce = t({}, ue[he], M);
        for (var _e in Ce) {
          var Se = M[_e];
          if (r(M, _e) && typeof Se != "function")
            return te(ce, ye, ge, _e, j(Se));
          if (!Se)
            return new _(
              "Invalid " + ye + " `" + ge + "` key `" + _e + "` supplied to `" + ce + "`.\nBad object: " + JSON.stringify(ue[he], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var fe = Se(be, _e, ce, ye, ge + "." + _e, n);
          if (fe)
            return fe;
        }
        return null;
      }
      return b(L);
    }
    function B(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(B);
          if (M === null || u(M))
            return !0;
          var L = m(M);
          if (L) {
            var ue = L.call(M), he;
            if (L !== M.entries) {
              for (; !(he = ue.next()).done; )
                if (!B(he.value))
                  return !1;
            } else
              for (; !(he = ue.next()).done; ) {
                var ce = he.value;
                if (ce && !B(ce[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function U(M, L) {
      return M === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function K(M) {
      var L = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : U(L, M) ? "symbol" : L;
    }
    function j(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var L = K(M);
      if (L === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function I(M) {
      var L = j(M);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function X(M) {
      return !M.constructor || !M.constructor.name ? x : M.constructor.name;
    }
    return w.checkPropTypes = a, w.resetWarningCache = a.resetWarningCache, w.PropTypes = w, w;
  }, nc;
}
var rc, Vm;
function ON() {
  if (Vm) return rc;
  Vm = 1;
  var e = Dd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, rc = function() {
    function r(l, u, d, p, h, m) {
      if (m !== e) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, rc;
}
if (process.env.NODE_ENV !== "production") {
  var SN = fx(), DN = !0;
  Mc.exports = TN()(SN.isElement, DN);
} else
  Mc.exports = ON()();
var kN = Mc.exports;
const le = /* @__PURE__ */ el(kN);
var Nc = { exports: {} }, lt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zm;
function PN() {
  if (zm) return lt;
  zm = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function _(b) {
    if (typeof b == "object" && b !== null) {
      var P = b.$$typeof;
      switch (P) {
        case e:
          switch (b = b.type, b) {
            case n:
            case a:
            case r:
            case p:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case u:
                case l:
                case d:
                case x:
                case m:
                case o:
                  return b;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return lt.ContextConsumer = l, lt.ContextProvider = o, lt.Element = e, lt.ForwardRef = d, lt.Fragment = n, lt.Lazy = x, lt.Memo = m, lt.Portal = t, lt.Profiler = a, lt.StrictMode = r, lt.Suspense = p, lt.SuspenseList = h, lt.isAsyncMode = function() {
    return !1;
  }, lt.isConcurrentMode = function() {
    return !1;
  }, lt.isContextConsumer = function(b) {
    return _(b) === l;
  }, lt.isContextProvider = function(b) {
    return _(b) === o;
  }, lt.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, lt.isForwardRef = function(b) {
    return _(b) === d;
  }, lt.isFragment = function(b) {
    return _(b) === n;
  }, lt.isLazy = function(b) {
    return _(b) === x;
  }, lt.isMemo = function(b) {
    return _(b) === m;
  }, lt.isPortal = function(b) {
    return _(b) === t;
  }, lt.isProfiler = function(b) {
    return _(b) === a;
  }, lt.isStrictMode = function(b) {
    return _(b) === r;
  }, lt.isSuspense = function(b) {
    return _(b) === p;
  }, lt.isSuspenseList = function(b) {
    return _(b) === h;
  }, lt.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === a || b === r || b === p || b === h || b === w || typeof b == "object" && b !== null && (b.$$typeof === x || b.$$typeof === m || b.$$typeof === o || b.$$typeof === l || b.$$typeof === d || b.$$typeof === O || b.getModuleId !== void 0);
  }, lt.typeOf = _, lt;
}
var ut = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bm;
function AN() {
  return Bm || (Bm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), O = !1, _ = !1, b = !1, P = !1, C = !1, k;
    k = Symbol.for("react.module.reference");
    function D(ve) {
      return !!(typeof ve == "string" || typeof ve == "function" || ve === n || ve === a || C || ve === r || ve === p || ve === h || P || ve === w || O || _ || b || typeof ve == "object" && ve !== null && (ve.$$typeof === x || ve.$$typeof === m || ve.$$typeof === o || ve.$$typeof === l || ve.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ve.$$typeof === k || ve.getModuleId !== void 0));
    }
    function S(ve) {
      if (typeof ve == "object" && ve !== null) {
        var et = ve.$$typeof;
        switch (et) {
          case e:
            var rt = ve.type;
            switch (rt) {
              case n:
              case a:
              case r:
              case p:
              case h:
                return rt;
              default:
                var Ke = rt && rt.$$typeof;
                switch (Ke) {
                  case u:
                  case l:
                  case d:
                  case x:
                  case m:
                  case o:
                    return Ke;
                  default:
                    return et;
                }
            }
          case t:
            return et;
        }
      }
    }
    var Z = l, J = o, ne = e, V = d, Y = n, te = x, R = m, z = t, B = a, U = r, K = p, j = h, I = !1, X = !1;
    function M(ve) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(ve) {
      return X || (X = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(ve) {
      return S(ve) === l;
    }
    function he(ve) {
      return S(ve) === o;
    }
    function ce(ve) {
      return typeof ve == "object" && ve !== null && ve.$$typeof === e;
    }
    function ye(ve) {
      return S(ve) === d;
    }
    function ge(ve) {
      return S(ve) === n;
    }
    function be(ve) {
      return S(ve) === x;
    }
    function we(ve) {
      return S(ve) === m;
    }
    function Ce(ve) {
      return S(ve) === t;
    }
    function _e(ve) {
      return S(ve) === a;
    }
    function Se(ve) {
      return S(ve) === r;
    }
    function fe(ve) {
      return S(ve) === p;
    }
    function Re(ve) {
      return S(ve) === h;
    }
    ut.ContextConsumer = Z, ut.ContextProvider = J, ut.Element = ne, ut.ForwardRef = V, ut.Fragment = Y, ut.Lazy = te, ut.Memo = R, ut.Portal = z, ut.Profiler = B, ut.StrictMode = U, ut.Suspense = K, ut.SuspenseList = j, ut.isAsyncMode = M, ut.isConcurrentMode = L, ut.isContextConsumer = ue, ut.isContextProvider = he, ut.isElement = ce, ut.isForwardRef = ye, ut.isFragment = ge, ut.isLazy = be, ut.isMemo = we, ut.isPortal = Ce, ut.isProfiler = _e, ut.isStrictMode = Se, ut.isSuspense = fe, ut.isSuspenseList = Re, ut.isValidElementType = D, ut.typeOf = S;
  }()), ut;
}
process.env.NODE_ENV === "production" ? Nc.exports = PN() : Nc.exports = AN();
var Hm = Nc.exports;
const Um = (e) => typeof e == "object" && e != null && e.nodeType === 1, Ym = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", cs = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return Ym(n.overflowY, t) || Ym(n.overflowX, t) || ((r) => {
      const a = ((o) => {
        if (!o.ownerDocument || !o.ownerDocument.defaultView) return null;
        try {
          return o.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(r);
      return !!a && (a.clientHeight < r.scrollHeight || a.clientWidth < r.scrollWidth);
    })(e);
  }
  return !1;
}, ds = (e, t, n, r, a, o, l, u) => o < e && l > t || o > e && l < t ? 0 : o <= e && u <= n || l >= t && u >= n ? o - e - r : l > t && u < n || o < e && u > n ? l - t + a : 0, IN = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, MN = (e, t) => {
  var n, r, a, o;
  if (typeof document > "u") return [];
  const { scrollMode: l, block: u, inline: d, boundary: p, skipOverflowHiddenElements: h } = t, m = typeof p == "function" ? p : (K) => K !== p;
  if (!Um(e)) throw new TypeError("Invalid target");
  const x = document.scrollingElement || document.documentElement, w = [];
  let O = e;
  for (; Um(O) && m(O); ) {
    if (O = IN(O), O === x) {
      w.push(O);
      break;
    }
    O != null && O === document.body && cs(O) && !cs(document.documentElement) || O != null && cs(O, h) && w.push(O);
  }
  const _ = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, b = (o = (a = window.visualViewport) == null ? void 0 : a.height) != null ? o : innerHeight, { scrollX: P, scrollY: C } = window, { height: k, width: D, top: S, right: Z, bottom: J, left: ne } = e.getBoundingClientRect(), { top: V, right: Y, bottom: te, left: R } = ((K) => {
    const j = window.getComputedStyle(K);
    return { top: parseFloat(j.scrollMarginTop) || 0, right: parseFloat(j.scrollMarginRight) || 0, bottom: parseFloat(j.scrollMarginBottom) || 0, left: parseFloat(j.scrollMarginLeft) || 0 };
  })(e);
  let z = u === "start" || u === "nearest" ? S - V : u === "end" ? J + te : S + k / 2 - V + te, B = d === "center" ? ne + D / 2 - R + Y : d === "end" ? Z + Y : ne - R;
  const U = [];
  for (let K = 0; K < w.length; K++) {
    const j = w[K], { height: I, width: X, top: M, right: L, bottom: ue, left: he } = j.getBoundingClientRect();
    if (l === "if-needed" && S >= 0 && ne >= 0 && J <= b && Z <= _ && (j === x && !cs(j) || S >= M && J <= ue && ne >= he && Z <= L)) return U;
    const ce = getComputedStyle(j), ye = parseInt(ce.borderLeftWidth, 10), ge = parseInt(ce.borderTopWidth, 10), be = parseInt(ce.borderRightWidth, 10), we = parseInt(ce.borderBottomWidth, 10);
    let Ce = 0, _e = 0;
    const Se = "offsetWidth" in j ? j.offsetWidth - j.clientWidth - ye - be : 0, fe = "offsetHeight" in j ? j.offsetHeight - j.clientHeight - ge - we : 0, Re = "offsetWidth" in j ? j.offsetWidth === 0 ? 0 : X / j.offsetWidth : 0, ve = "offsetHeight" in j ? j.offsetHeight === 0 ? 0 : I / j.offsetHeight : 0;
    if (x === j) Ce = u === "start" ? z : u === "end" ? z - b : u === "nearest" ? ds(C, C + b, b, ge, we, C + z, C + z + k, k) : z - b / 2, _e = d === "start" ? B : d === "center" ? B - _ / 2 : d === "end" ? B - _ : ds(P, P + _, _, ye, be, P + B, P + B + D, D), Ce = Math.max(0, Ce + C), _e = Math.max(0, _e + P);
    else {
      Ce = u === "start" ? z - M - ge : u === "end" ? z - ue + we + fe : u === "nearest" ? ds(M, ue, I, ge, we + fe, z, z + k, k) : z - (M + I / 2) + fe / 2, _e = d === "start" ? B - he - ye : d === "center" ? B - (he + X / 2) + Se / 2 : d === "end" ? B - L + be + Se : ds(he, L, X, ye, be + Se, B, B + D, D);
      const { scrollLeft: et, scrollTop: rt } = j;
      Ce = ve === 0 ? 0 : Math.max(0, Math.min(rt + Ce / ve, j.scrollHeight - I / ve + fe)), _e = Re === 0 ? 0 : Math.max(0, Math.min(et + _e / Re, j.scrollWidth - X / Re + Se)), z += rt - Ce, B += et - _e;
    }
    U.push({ el: j, top: Ce, left: _e });
  }
  return U;
};
var NN = 0;
function qm(e) {
  return typeof e == "function" ? e : dn;
}
function dn() {
}
function hx(e, t) {
  if (e) {
    var n = MN(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    n.forEach(function(r) {
      var a = r.el, o = r.top, l = r.left;
      a.scrollTop = o, a.scrollLeft = l;
    });
  }
}
function Km(e, t, n) {
  var r = e === t || t instanceof n.Node && e.contains && e.contains(t);
  return r;
}
function ll(e, t) {
  var n;
  function r() {
    n && clearTimeout(n);
  }
  function a() {
    for (var o = arguments.length, l = new Array(o), u = 0; u < o; u++)
      l[u] = arguments[u];
    r(), n = setTimeout(function() {
      n = null, e.apply(void 0, l);
    }, t);
  }
  return a.cancel = r, a;
}
function Pt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
      o[l - 1] = arguments[l];
    return t.some(function(u) {
      return u && u.apply(void 0, [r].concat(o)), r.preventDownshiftDefault || r.hasOwnProperty("nativeEvent") && r.nativeEvent.preventDownshiftDefault;
    });
  };
}
function mi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    t.forEach(function(a) {
      typeof a == "function" ? a(r) : a && (a.current = r);
    });
  };
}
function mx() {
  return String(NN++);
}
function jN(e) {
  var t = e.isOpen, n = e.resultCount, r = e.previousResultCount;
  return t ? n ? n !== r ? n + " result" + (n === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function Gm(e, t) {
  return e = Array.isArray(e) ? (
    /* istanbul ignore next (preact) */
    e[0]
  ) : e, !e && t ? t : e;
}
function gx(e) {
  return typeof e.type == "string";
}
function vx(e) {
  return e.props;
}
function RN(e, t) {
  console.error('The property "' + t + '" is required in "' + e + '"');
}
var $N = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function fs(e) {
  e === void 0 && (e = {});
  var t = {};
  return $N.forEach(function(n) {
    e.hasOwnProperty(n) && (t[n] = e[n]);
  }), t;
}
function Ns(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(n, r) {
    return n[r] = jc(t, r) ? t[r] : e[r], n;
  }, {});
}
function jc(e, t) {
  return e[t] !== void 0;
}
function Za(e) {
  var t = e.key, n = e.keyCode;
  return n >= 37 && n <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function FN(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function pi(e, t, n, r, a) {
  a === void 0 && (a = !1);
  var o = n.length;
  if (o === 0)
    return -1;
  var l = o - 1;
  (typeof e != "number" || e < 0 || e > l) && (e = t > 0 ? -1 : l + 1);
  var u = e + t;
  u < 0 ? u = a ? l : 0 : u > l && (u = a ? 0 : l);
  var d = ra(u, t < 0, n, r, a);
  return d === -1 ? e >= o ? -1 : e : d;
}
function ra(e, t, n, r, a) {
  a === void 0 && (a = !1);
  var o = n.length;
  if (t) {
    for (var l = e; l >= 0; l--)
      if (!r(n[l], l))
        return l;
  } else
    for (var u = e; u < o; u++)
      if (!r(n[u], u))
        return u;
  return a ? ra(t ? o - 1 : 0, t, n, r) : -1;
}
function js(e, t, n, r) {
  return r === void 0 && (r = !0), n && t.some(function(a) {
    return a && (Km(a, e, n) || r && Km(a, n.document.activeElement, n));
  });
}
var kd = dn;
process.env.NODE_ENV !== "production" && (kd = function(t, n, r) {
  var a = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
  Object.keys(t).forEach(function(o) {
    n[o] !== void 0 && r[o] === void 0 ? console.error('downshift: A component has changed the controlled prop "' + o + '" to be uncontrolled. ' + a) : n[o] === void 0 && r[o] !== void 0 && console.error('downshift: A component has changed the uncontrolled prop "' + o + '" to be controlled. ' + a);
  });
});
var LN = ll(function(e) {
  yx(e).textContent = "";
}, 500);
function yx(e) {
  var t = e.getElementById("a11y-status-message");
  return t || (t = e.createElement("div"), t.setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }), e.body.appendChild(t), t);
}
function xx(e, t) {
  if (!(!e || !t)) {
    var n = yx(t);
    n.textContent = e, LN(t);
  }
}
function WN(e) {
  var t = e == null ? void 0 : e.getElementById("a11y-status-message");
  t && t.remove();
}
var bx = process.env.NODE_ENV !== "production" ? "__autocomplete_unknown__" : 0, wx = process.env.NODE_ENV !== "production" ? "__autocomplete_mouseup__" : 1, _x = process.env.NODE_ENV !== "production" ? "__autocomplete_item_mouseenter__" : 2, ws = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_up__" : 3, _s = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_down__" : 4, Ex = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_escape__" : 5, Cx = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_enter__" : 6, Tx = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_home__" : 7, Ox = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_end__" : 8, Sx = process.env.NODE_ENV !== "production" ? "__autocomplete_click_item__" : 9, Dx = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_input__" : 10, kx = process.env.NODE_ENV !== "production" ? "__autocomplete_change_input__" : 11, Px = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_space_button__" : 12, Rc = process.env.NODE_ENV !== "production" ? "__autocomplete_click_button__" : 13, Ax = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_button__" : 14, Ix = process.env.NODE_ENV !== "production" ? "__autocomplete_controlled_prop_updated_selected_item__" : 15, Mx = process.env.NODE_ENV !== "production" ? "__autocomplete_touchend__" : 16, VN = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blurButton: Ax,
  blurInput: Dx,
  changeInput: kx,
  clickButton: Rc,
  clickItem: Sx,
  controlledPropUpdatedSelectedItem: Ix,
  itemMouseEnter: _x,
  keyDownArrowDown: _s,
  keyDownArrowUp: ws,
  keyDownEnd: Ox,
  keyDownEnter: Cx,
  keyDownEscape: Ex,
  keyDownHome: Tx,
  keyDownSpaceButton: Px,
  mouseUp: wx,
  touchEnd: Mx,
  unknown: bx
}), zN = ["refKey", "ref"], BN = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], HN = ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"], UN = ["refKey", "ref"], YN = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], qN = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function n(a) {
      var o;
      o = t.call(this, a) || this, o.id = o.props.id || "downshift-" + mx(), o.menuId = o.props.menuId || o.id + "-menu", o.labelId = o.props.labelId || o.id + "-label", o.inputId = o.props.inputId || o.id + "-input", o.getItemId = o.props.getItemId || function(C) {
        return o.id + "-item-" + C;
      }, o.items = [], o.itemCount = null, o.previousResultCount = 0, o.timeoutIds = [], o.internalSetTimeout = function(C, k) {
        var D = setTimeout(function() {
          o.timeoutIds = o.timeoutIds.filter(function(S) {
            return S !== D;
          }), C();
        }, k);
        o.timeoutIds.push(D);
      }, o.setItemCount = function(C) {
        o.itemCount = C;
      }, o.unsetItemCount = function() {
        o.itemCount = null;
      }, o.isItemDisabled = function(C, k) {
        var D = o.getItemNodeFromIndex(k);
        return D && D.hasAttribute("disabled");
      }, o.setHighlightedIndex = function(C, k) {
        C === void 0 && (C = o.props.defaultHighlightedIndex), k === void 0 && (k = {}), k = fs(k), o.internalSetState(Ue({
          highlightedIndex: C
        }, k));
      }, o.clearSelection = function(C) {
        o.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: o.props.defaultHighlightedIndex,
          isOpen: o.props.defaultIsOpen
        }, C);
      }, o.selectItem = function(C, k, D) {
        k = fs(k), o.internalSetState(Ue({
          isOpen: o.props.defaultIsOpen,
          highlightedIndex: o.props.defaultHighlightedIndex,
          selectedItem: C,
          inputValue: o.props.itemToString(C)
        }, k), D);
      }, o.selectItemAtIndex = function(C, k, D) {
        var S = o.items[C];
        S != null && o.selectItem(S, k, D);
      }, o.selectHighlightedItem = function(C, k) {
        return o.selectItemAtIndex(o.getState().highlightedIndex, C, k);
      }, o.internalSetState = function(C, k) {
        var D, S, Z = {}, J = typeof C == "function";
        return !J && C.hasOwnProperty("inputValue") && o.props.onInputValueChange(C.inputValue, Ue({}, o.getStateAndHelpers(), C)), o.setState(function(ne) {
          var V;
          ne = o.getState(ne);
          var Y = J ? C(ne) : C;
          Y = o.props.stateReducer(ne, Y), D = Y.hasOwnProperty("selectedItem");
          var te = {};
          return D && Y.selectedItem !== ne.selectedItem && (S = Y.selectedItem), (V = Y).type || (V.type = bx), Object.keys(Y).forEach(function(R) {
            ne[R] !== Y[R] && (Z[R] = Y[R]), R !== "type" && (Y[R], jc(o.props, R) || (te[R] = Y[R]));
          }), J && Y.hasOwnProperty("inputValue") && o.props.onInputValueChange(Y.inputValue, Ue({}, o.getStateAndHelpers(), Y)), te;
        }, function() {
          qm(k)();
          var ne = Object.keys(Z).length > 1;
          ne && o.props.onStateChange(Z, o.getStateAndHelpers()), D && o.props.onSelect(C.selectedItem, o.getStateAndHelpers()), S !== void 0 && o.props.onChange(S, o.getStateAndHelpers()), o.props.onUserAction(Z, o.getStateAndHelpers());
        });
      }, o.rootRef = function(C) {
        return o._rootNode = C;
      }, o.getRootProps = function(C, k) {
        var D, S = C === void 0 ? {} : C, Z = S.refKey, J = Z === void 0 ? "ref" : Z, ne = S.ref, V = zn(S, zN), Y = k === void 0 ? {} : k, te = Y.suppressRefError, R = te === void 0 ? !1 : te;
        o.getRootProps.called = !0, o.getRootProps.refKey = J, o.getRootProps.suppressRefError = R;
        var z = o.getState(), B = z.isOpen;
        return Ue((D = {}, D[J] = mi(ne, o.rootRef), D.role = "combobox", D["aria-expanded"] = B, D["aria-haspopup"] = "listbox", D["aria-owns"] = B ? o.menuId : void 0, D["aria-labelledby"] = o.labelId, D), V);
      }, o.keyDownHandlers = {
        ArrowDown: function(k) {
          var D = this;
          if (k.preventDefault(), this.getState().isOpen) {
            var S = k.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(S, {
              type: _s
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: _s
            }, function() {
              var Z = D.getItemCount();
              if (Z > 0) {
                var J = D.getState(), ne = J.highlightedIndex, V = pi(ne, 1, {
                  length: Z
                }, D.isItemDisabled, !0);
                D.setHighlightedIndex(V, {
                  type: _s
                });
              }
            });
        },
        ArrowUp: function(k) {
          var D = this;
          if (k.preventDefault(), this.getState().isOpen) {
            var S = k.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(S, {
              type: ws
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: ws
            }, function() {
              var Z = D.getItemCount();
              if (Z > 0) {
                var J = D.getState(), ne = J.highlightedIndex, V = pi(ne, -1, {
                  length: Z
                }, D.isItemDisabled, !0);
                D.setHighlightedIndex(V, {
                  type: ws
                });
              }
            });
        },
        Enter: function(k) {
          if (k.which !== 229) {
            var D = this.getState(), S = D.isOpen, Z = D.highlightedIndex;
            if (S && Z != null) {
              k.preventDefault();
              var J = this.items[Z], ne = this.getItemNodeFromIndex(Z);
              if (J == null || ne && ne.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: Cx
              });
            }
          }
        },
        Escape: function(k) {
          k.preventDefault(), this.reset(Ue({
            type: Ex
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }
      }, o.buttonKeyDownHandlers = Ue({}, o.keyDownHandlers, {
        " ": function(k) {
          k.preventDefault(), this.toggleMenu({
            type: Px
          });
        }
      }), o.inputKeyDownHandlers = Ue({}, o.keyDownHandlers, {
        Home: function(k) {
          var D = this.getState(), S = D.isOpen;
          if (S) {
            k.preventDefault();
            var Z = this.getItemCount();
            if (!(Z <= 0 || !S)) {
              var J = ra(0, !1, {
                length: Z
              }, this.isItemDisabled);
              this.setHighlightedIndex(J, {
                type: Tx
              });
            }
          }
        },
        End: function(k) {
          var D = this.getState(), S = D.isOpen;
          if (S) {
            k.preventDefault();
            var Z = this.getItemCount();
            if (!(Z <= 0 || !S)) {
              var J = ra(Z - 1, !0, {
                length: Z
              }, this.isItemDisabled);
              this.setHighlightedIndex(J, {
                type: Ox
              });
            }
          }
        }
      }), o.getToggleButtonProps = function(C) {
        var k = C === void 0 ? {} : C, D = k.onClick;
        k.onPress;
        var S = k.onKeyDown, Z = k.onKeyUp, J = k.onBlur, ne = zn(k, BN), V = o.getState(), Y = V.isOpen, te = {
          onClick: Pt(D, o.buttonHandleClick),
          onKeyDown: Pt(S, o.buttonHandleKeyDown),
          onKeyUp: Pt(Z, o.buttonHandleKeyUp),
          onBlur: Pt(J, o.buttonHandleBlur)
        }, R = ne.disabled ? {} : te;
        return Ue({
          type: "button",
          role: "button",
          "aria-label": Y ? "close menu" : "open menu",
          "aria-haspopup": !0,
          "data-toggle": !0
        }, R, ne);
      }, o.buttonHandleKeyUp = function(C) {
        C.preventDefault();
      }, o.buttonHandleKeyDown = function(C) {
        var k = Za(C);
        o.buttonKeyDownHandlers[k] && o.buttonKeyDownHandlers[k].call(o, C);
      }, o.buttonHandleClick = function(C) {
        if (C.preventDefault(), o.props.environment) {
          var k = o.props.environment.document, D = k.body, S = k.activeElement;
          D && D === S && C.target.focus();
        }
        process.env.NODE_ENV === "test" ? o.toggleMenu({
          type: Rc
        }) : o.internalSetTimeout(function() {
          return o.toggleMenu({
            type: Rc
          });
        });
      }, o.buttonHandleBlur = function(C) {
        var k = C.target;
        o.internalSetTimeout(function() {
          if (!(o.isMouseDown || !o.props.environment)) {
            var D = o.props.environment.document.activeElement;
            (D == null || D.id !== o.inputId) && D !== k && o.reset({
              type: Ax
            });
          }
        });
      }, o.getLabelProps = function(C) {
        return Ue({
          htmlFor: o.inputId,
          id: o.labelId
        }, C);
      }, o.getInputProps = function(C) {
        var k = C === void 0 ? {} : C, D = k.onKeyDown, S = k.onBlur, Z = k.onChange, J = k.onInput;
        k.onChangeText;
        var ne = zn(k, HN), V, Y = {};
        V = "onChange";
        var te = o.getState(), R = te.inputValue, z = te.isOpen, B = te.highlightedIndex;
        if (!ne.disabled) {
          var U;
          Y = (U = {}, U[V] = Pt(Z, J, o.inputHandleChange), U.onKeyDown = Pt(D, o.inputHandleKeyDown), U.onBlur = Pt(S, o.inputHandleBlur), U);
        }
        return Ue({
          "aria-autocomplete": "list",
          "aria-activedescendant": z && typeof B == "number" && B >= 0 ? o.getItemId(B) : void 0,
          "aria-controls": z ? o.menuId : void 0,
          "aria-labelledby": ne && ne["aria-label"] ? void 0 : o.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: R,
          id: o.inputId
        }, Y, ne);
      }, o.inputHandleKeyDown = function(C) {
        var k = Za(C);
        k && o.inputKeyDownHandlers[k] && o.inputKeyDownHandlers[k].call(o, C);
      }, o.inputHandleChange = function(C) {
        o.internalSetState({
          type: kx,
          isOpen: !0,
          inputValue: C.target.value,
          highlightedIndex: o.props.defaultHighlightedIndex
        });
      }, o.inputHandleBlur = function() {
        o.internalSetTimeout(function() {
          var C;
          if (!(o.isMouseDown || !o.props.environment)) {
            var k = o.props.environment.document.activeElement, D = (k == null || (C = k.dataset) == null ? void 0 : C.toggle) && o._rootNode && o._rootNode.contains(k);
            D || o.reset({
              type: Dx
            });
          }
        });
      }, o.menuRef = function(C) {
        o._menuNode = C;
      }, o.getMenuProps = function(C, k) {
        var D, S = C === void 0 ? {} : C, Z = S.refKey, J = Z === void 0 ? "ref" : Z, ne = S.ref, V = zn(S, UN), Y = k === void 0 ? {} : k, te = Y.suppressRefError, R = te === void 0 ? !1 : te;
        return o.getMenuProps.called = !0, o.getMenuProps.refKey = J, o.getMenuProps.suppressRefError = R, Ue((D = {}, D[J] = mi(ne, o.menuRef), D.role = "listbox", D["aria-labelledby"] = V && V["aria-label"] ? void 0 : o.labelId, D.id = o.menuId, D), V);
      }, o.getItemProps = function(C) {
        var k, D = C === void 0 ? {} : C, S = D.onMouseMove, Z = D.onMouseDown, J = D.onClick;
        D.onPress;
        var ne = D.index, V = D.item, Y = V === void 0 ? process.env.NODE_ENV === "production" ? (
          /* istanbul ignore next */
          void 0
        ) : RN("getItemProps", "item") : V, te = zn(D, YN);
        ne === void 0 ? (o.items.push(Y), ne = o.items.indexOf(Y)) : o.items[ne] = Y;
        var R = "onClick", z = J, B = (k = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: Pt(S, function() {
            ne !== o.getState().highlightedIndex && (o.setHighlightedIndex(ne, {
              type: _x
            }), o.avoidScrolling = !0, o.internalSetTimeout(function() {
              return o.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: Pt(Z, function(K) {
            K.preventDefault();
          })
        }, k[R] = Pt(z, function() {
          o.selectItemAtIndex(ne, {
            type: Sx
          });
        }), k), U = te.disabled ? {
          onMouseDown: B.onMouseDown
        } : B;
        return Ue({
          id: o.getItemId(ne),
          role: "option",
          "aria-selected": o.getState().highlightedIndex === ne
        }, U, te);
      }, o.clearItems = function() {
        o.items = [];
      }, o.reset = function(C, k) {
        C === void 0 && (C = {}), C = fs(C), o.internalSetState(function(D) {
          var S = D.selectedItem;
          return Ue({
            isOpen: o.props.defaultIsOpen,
            highlightedIndex: o.props.defaultHighlightedIndex,
            inputValue: o.props.itemToString(S)
          }, C);
        }, k);
      }, o.toggleMenu = function(C, k) {
        C === void 0 && (C = {}), C = fs(C), o.internalSetState(function(D) {
          var S = D.isOpen;
          return Ue({
            isOpen: !S
          }, S && {
            highlightedIndex: o.props.defaultHighlightedIndex
          }, C);
        }, function() {
          var D = o.getState(), S = D.isOpen, Z = D.highlightedIndex;
          S && o.getItemCount() > 0 && typeof Z == "number" && o.setHighlightedIndex(Z, C), qm(k)();
        });
      }, o.openMenu = function(C) {
        o.internalSetState({
          isOpen: !0
        }, C);
      }, o.closeMenu = function(C) {
        o.internalSetState({
          isOpen: !1
        }, C);
      }, o.updateStatus = ll(function() {
        var C;
        if ((C = o.props) != null && (C = C.environment) != null && C.document) {
          var k = o.getState(), D = o.items[k.highlightedIndex], S = o.getItemCount(), Z = o.props.getA11yStatusMessage(Ue({
            itemToString: o.props.itemToString,
            previousResultCount: o.previousResultCount,
            resultCount: S,
            highlightedItem: D
          }, k));
          o.previousResultCount = S, xx(Z, o.props.environment.document);
        }
      }, 200);
      var l = o.props, u = l.defaultHighlightedIndex, d = l.initialHighlightedIndex, p = d === void 0 ? u : d, h = l.defaultIsOpen, m = l.initialIsOpen, x = m === void 0 ? h : m, w = l.initialInputValue, O = w === void 0 ? "" : w, _ = l.initialSelectedItem, b = _ === void 0 ? null : _, P = o.getState({
        highlightedIndex: p,
        isOpen: x,
        inputValue: O,
        selectedItem: b
      });
      return P.selectedItem != null && o.props.initialInputValue === void 0 && (P.inputValue = o.props.itemToString(P.selectedItem)), o.state = P, o;
    }
    bN(n, t);
    var r = n.prototype;
    return r.internalClearTimeouts = function() {
      this.timeoutIds.forEach(function(o) {
        clearTimeout(o);
      }), this.timeoutIds = [];
    }, r.getState = function(o) {
      return o === void 0 && (o = this.state), Ns(o, this.props);
    }, r.getItemCount = function() {
      var o = this.items.length;
      return this.itemCount != null ? o = this.itemCount : this.props.itemCount !== void 0 && (o = this.props.itemCount), o;
    }, r.getItemNodeFromIndex = function(o) {
      return this.props.environment ? this.props.environment.document.getElementById(this.getItemId(o)) : null;
    }, r.scrollHighlightedItemIntoView = function() {
      {
        var o = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(o, this._menuNode);
      }
    }, r.moveHighlightedIndex = function(o, l) {
      var u = this.getItemCount(), d = this.getState(), p = d.highlightedIndex;
      if (u > 0) {
        var h = pi(p, o, {
          length: u
        }, this.isItemDisabled, !0);
        this.setHighlightedIndex(h, l);
      }
    }, r.getStateAndHelpers = function() {
      var o = this.getState(), l = o.highlightedIndex, u = o.inputValue, d = o.selectedItem, p = o.isOpen, h = this.props.itemToString, m = this.id, x = this.getRootProps, w = this.getToggleButtonProps, O = this.getLabelProps, _ = this.getMenuProps, b = this.getInputProps, P = this.getItemProps, C = this.openMenu, k = this.closeMenu, D = this.toggleMenu, S = this.selectItem, Z = this.selectItemAtIndex, J = this.selectHighlightedItem, ne = this.setHighlightedIndex, V = this.clearSelection, Y = this.clearItems, te = this.reset, R = this.setItemCount, z = this.unsetItemCount, B = this.internalSetState;
      return {
        // prop getters
        getRootProps: x,
        getToggleButtonProps: w,
        getLabelProps: O,
        getMenuProps: _,
        getInputProps: b,
        getItemProps: P,
        // actions
        reset: te,
        openMenu: C,
        closeMenu: k,
        toggleMenu: D,
        selectItem: S,
        selectItemAtIndex: Z,
        selectHighlightedItem: J,
        setHighlightedIndex: ne,
        clearSelection: V,
        clearItems: Y,
        setItemCount: R,
        unsetItemCount: z,
        setState: B,
        // props
        itemToString: h,
        // derived
        id: m,
        // state
        highlightedIndex: l,
        inputValue: u,
        isOpen: p,
        selectedItem: d
      };
    }, r.componentDidMount = function() {
      var o = this;
      if (process.env.NODE_ENV !== "production" && this.getMenuProps.called && !this.getMenuProps.suppressRefError && Xm(this._menuNode, this.getMenuProps), !this.props.environment)
        this.cleanup = function() {
          o.internalClearTimeouts();
        };
      else {
        var l = function() {
          o.isMouseDown = !0;
        }, u = function(w) {
          o.isMouseDown = !1;
          var O = js(w.target, [o._rootNode, o._menuNode], o.props.environment);
          !O && o.getState().isOpen && o.reset({
            type: wx
          }, function() {
            return o.props.onOuterClick(o.getStateAndHelpers());
          });
        }, d = function() {
          o.isTouchMove = !1;
        }, p = function() {
          o.isTouchMove = !0;
        }, h = function(w) {
          var O = js(w.target, [o._rootNode, o._menuNode], o.props.environment, !1);
          !o.isTouchMove && !O && o.getState().isOpen && o.reset({
            type: Mx
          }, function() {
            return o.props.onOuterClick(o.getStateAndHelpers());
          });
        }, m = this.props.environment;
        m.addEventListener("mousedown", l), m.addEventListener("mouseup", u), m.addEventListener("touchstart", d), m.addEventListener("touchmove", p), m.addEventListener("touchend", h), this.cleanup = function() {
          o.internalClearTimeouts(), o.updateStatus.cancel(), m.removeEventListener("mousedown", l), m.removeEventListener("mouseup", u), m.removeEventListener("touchstart", d), m.removeEventListener("touchmove", p), m.removeEventListener("touchend", h);
        };
      }
    }, r.shouldScroll = function(o, l) {
      var u = this.props.highlightedIndex === void 0 ? this.getState() : this.props, d = u.highlightedIndex, p = l.highlightedIndex === void 0 ? o : l, h = p.highlightedIndex, m = d && this.getState().isOpen && !o.isOpen, x = d !== h;
      return m || x;
    }, r.componentDidUpdate = function(o, l) {
      process.env.NODE_ENV !== "production" && (kd(this.state, o, this.props), this.getMenuProps.called && !this.getMenuProps.suppressRefError && Xm(this._menuNode, this.getMenuProps)), jc(this.props, "selectedItem") && this.props.selectedItemChanged(o.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: Ix,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(l, o) && this.scrollHighlightedItemIntoView(), this.updateStatus();
    }, r.componentWillUnmount = function() {
      this.cleanup();
    }, r.render = function() {
      var o = Gm(this.props.children, dn);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1, this.getInputProps.called = !1;
      var l = Gm(o(this.getStateAndHelpers()));
      if (!l)
        return null;
      if (this.getRootProps.called || this.props.suppressRefError)
        return process.env.NODE_ENV !== "production" && !this.getRootProps.suppressRefError && !this.props.suppressRefError && KN(l, this.getRootProps), l;
      if (gx(l))
        return /* @__PURE__ */ qO(l, this.getRootProps(vx(l)));
      if (process.env.NODE_ENV !== "production")
        throw new Error("downshift: If you return a non-DOM element, you must apply the getRootProps function");
    }, n;
  }(KO);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: jN,
    itemToString: function(n) {
      return n == null ? "" : (process.env.NODE_ENV !== "production" && FN(n) && !n.hasOwnProperty("toString") && console.warn("downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.", "The object that was passed:", n), String(n));
    },
    onStateChange: dn,
    onInputValueChange: dn,
    onUserAction: dn,
    onChange: dn,
    onSelect: dn,
    onOuterClick: dn,
    selectedItemChanged: function(n, r) {
      return n !== r;
    },
    environment: (
      /* istanbul ignore next (ssr) */
      typeof window > "u" ? void 0 : window
    ),
    stateReducer: function(n, r) {
      return r;
    },
    suppressRefError: !1,
    scrollIntoView: hx
  }, e.stateChangeTypes = VN, e;
}();
process.env.NODE_ENV !== "production" && (qN.propTypes = {
  children: le.func,
  defaultHighlightedIndex: le.number,
  defaultIsOpen: le.bool,
  initialHighlightedIndex: le.number,
  initialSelectedItem: le.any,
  initialInputValue: le.string,
  initialIsOpen: le.bool,
  getA11yStatusMessage: le.func,
  itemToString: le.func,
  onChange: le.func,
  onSelect: le.func,
  onStateChange: le.func,
  onInputValueChange: le.func,
  onUserAction: le.func,
  onOuterClick: le.func,
  selectedItemChanged: le.func,
  stateReducer: le.func,
  itemCount: le.number,
  id: le.string,
  environment: le.shape({
    addEventListener: le.func.isRequired,
    removeEventListener: le.func.isRequired,
    document: le.shape({
      createElement: le.func.isRequired,
      getElementById: le.func.isRequired,
      activeElement: le.any.isRequired,
      body: le.any.isRequired
    }).isRequired,
    Node: le.func.isRequired
  }),
  suppressRefError: le.bool,
  scrollIntoView: le.func,
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components
  /* eslint-disable react/no-unused-prop-types */
  selectedItem: le.any,
  isOpen: le.bool,
  inputValue: le.string,
  highlightedIndex: le.number,
  labelId: le.string,
  inputId: le.string,
  menuId: le.string,
  getItemId: le.func
  /* eslint-enable react/no-unused-prop-types */
});
function Xm(e, t) {
  var n = t.refKey;
  e || console.error('downshift: The ref prop "' + n + '" from getMenuProps was not applied correctly on your menu element.');
}
function KN(e, t) {
  var n = t.refKey, r = n !== "ref", a = !gx(e);
  a && !r && !Hm.isForwardRef(e) ? console.error("downshift: You returned a non-DOM element. You must specify a refKey in getRootProps") : !a && r && console.error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' + n + '"'), !Hm.isForwardRef(e) && !vx(e)[n] && console.error('downshift: You must apply the ref prop "' + n + '" from getRootProps onto your root element.');
}
var Nx = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function GN(e, t, n) {
  var r = e.props, a = e.type, o = {};
  Object.keys(t).forEach(function(l) {
    XN(l, e, t, n), n[l] !== t[l] && (o[l] = n[l]);
  }), r.onStateChange && Object.keys(o).length && r.onStateChange(Ue({
    type: a
  }, o));
}
function XN(e, t, n, r) {
  var a = t.props, o = t.type, l = "on" + Pd(e) + "Change";
  a[l] && r[e] !== void 0 && r[e] !== n[e] && a[l](Ue({
    type: o
  }, r));
}
function ZN(e, t) {
  return t.changes;
}
var Zm = ll(function(e, t) {
  xx(e, t);
}, 200), JN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? zr : ct, QN = "useId" in $e ? function(t) {
  var n = t.id, r = t.labelId, a = t.menuId, o = t.getItemId, l = t.toggleButtonId, u = t.inputId, d = "downshift-" + $e.useId();
  n || (n = d);
  var p = qe({
    labelId: r || n + "-label",
    menuId: a || n + "-menu",
    getItemId: o || function(h) {
      return n + "-item-" + h;
    },
    toggleButtonId: l || n + "-toggle-button",
    inputId: u || n + "-input"
  });
  return p.current;
} : function(t) {
  var n = t.id, r = n === void 0 ? "downshift-" + mx() : n, a = t.labelId, o = t.menuId, l = t.getItemId, u = t.toggleButtonId, d = t.inputId, p = qe({
    labelId: a || r + "-label",
    menuId: o || r + "-menu",
    getItemId: l || function(h) {
      return r + "-item-" + h;
    },
    toggleButtonId: u || r + "-toggle-button",
    inputId: d || r + "-input"
  });
  return p.current;
};
function jx(e, t, n, r) {
  var a, o;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(r);
    a = n[t], o = t;
  } else
    o = t === void 0 ? n.indexOf(e) : t, a = e;
  return [a, o];
}
function ej(e) {
  return /^\S{1}$/.test(e);
}
function Pd(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function Ad(e) {
  var t = qe(e);
  return t.current = e, t;
}
function tj(e, t, n, r) {
  var a = qe(), o = qe(), l = Qe(function(w, O) {
    o.current = O, w = Ns(w, O.props);
    var _ = e(w, O), b = O.props.stateReducer(w, Ue({}, O, {
      changes: _
    }));
    return b;
  }, [e]), u = Ov(l, t, n), d = u[0], p = u[1], h = Ad(t), m = Qe(function(w) {
    return p(Ue({
      props: h.current
    }, w));
  }, [h]), x = o.current;
  return ct(function() {
    var w = Ns(a.current, x == null ? void 0 : x.props), O = x && a.current && !r(w, d);
    O && GN(x, w, d), a.current = d;
  }, [d, x, r]), [d, m];
}
function Rx(e, t, n, r) {
  var a = tj(e, t, n, r), o = a[0], l = a[1];
  return [Ns(o, t), l];
}
var Ha = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: ZN,
  scrollIntoView: hx,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function wr(e, t, n) {
  n === void 0 && (n = Nx);
  var r = e["default" + Pd(t)];
  return r !== void 0 ? r : n[t];
}
function Ji(e, t, n) {
  n === void 0 && (n = Nx);
  var r = e[t];
  if (r !== void 0)
    return r;
  var a = e["initial" + Pd(t)];
  return a !== void 0 ? a : wr(e, t, n);
}
function nj(e) {
  var t = Ji(e, "selectedItem"), n = Ji(e, "isOpen"), r = oj(e), a = Ji(e, "inputValue");
  return {
    highlightedIndex: r < 0 && t && n ? e.items.findIndex(function(o) {
      return e.itemToKey(o) === e.itemToKey(t);
    }) : r,
    isOpen: n,
    selectedItem: t,
    inputValue: a
  };
}
function Rs(e, t, n) {
  var r = e.items, a = e.initialHighlightedIndex, o = e.defaultHighlightedIndex, l = e.isItemDisabled, u = e.itemToKey, d = t.selectedItem, p = t.highlightedIndex;
  return r.length === 0 ? -1 : a !== void 0 && p === a && !l(r[a], a) ? a : o !== void 0 && !l(r[o], o) ? o : d ? r.findIndex(function(h) {
    return u(d) === u(h);
  }) : n < 0 && !l(r[r.length - 1], r.length - 1) ? r.length - 1 : n > 0 && !l(r[0], 0) ? 0 : -1;
}
function rj(e, t, n) {
  var r = qe({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return ct(function() {
    if (!e)
      return dn;
    var a = n.map(function(h) {
      return h.current;
    });
    function o() {
      r.current.isTouchEnd = !1, r.current.isMouseDown = !0;
    }
    function l(h) {
      r.current.isMouseDown = !1, js(h.target, a, e) || t();
    }
    function u() {
      r.current.isTouchEnd = !1, r.current.isTouchMove = !1;
    }
    function d() {
      r.current.isTouchMove = !0;
    }
    function p(h) {
      r.current.isTouchEnd = !0, !r.current.isTouchMove && !js(h.target, a, e, !1) && t();
    }
    return e.addEventListener("mousedown", o), e.addEventListener("mouseup", l), e.addEventListener("touchstart", u), e.addEventListener("touchmove", d), e.addEventListener("touchend", p), function() {
      e.removeEventListener("mousedown", o), e.removeEventListener("mouseup", l), e.removeEventListener("touchstart", u), e.removeEventListener("touchmove", d), e.removeEventListener("touchend", p);
    };
  }, [n, e, t]), r.current;
}
var Id = function() {
  return dn;
};
process.env.NODE_ENV !== "production" && (Id = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = qe(n.reduce(function(l, u) {
    return l[u] = {}, l;
  }, {}));
  ct(function() {
    Object.keys(a.current).forEach(function(l) {
      var u = a.current[l];
      if (!Object.keys(u).length) {
        console.error("downshift: You forgot to call the " + l + " getter function on your component / element.");
        return;
      }
      var d = u.suppressRefError, p = u.refKey, h = u.elementRef;
      d || h != null && h.current || console.error('downshift: The ref prop "' + p + '" from ' + l + " was not applied correctly on your element.");
    });
  }, []);
  var o = Qe(function(l, u, d, p) {
    a.current[l] = {
      suppressRefError: u,
      refKey: d,
      elementRef: p
    };
  }, []);
  return o;
});
function $x(e, t, n, r) {
  r === void 0 && (r = {});
  var a = r.document, o = Nd();
  ct(function() {
    if (!(!e || o || !a)) {
      var l = e(t);
      Zm(l, a);
    }
  }, n), ct(function() {
    return function() {
      Zm.cancel(), WN(a);
    };
  }, [a]);
}
function ij(e) {
  var t = e.highlightedIndex, n = e.isOpen, r = e.itemRefs, a = e.getItemNodeFromIndex, o = e.menuElement, l = e.scrollIntoView, u = qe(!0);
  return JN(function() {
    t < 0 || !n || !Object.keys(r.current).length || (u.current === !1 ? u.current = !0 : l(a(t), o));
  }, [t]), u;
}
var Md = dn;
process.env.NODE_ENV !== "production" && (Md = function(t) {
  var n = t.props, r = t.state, a = qe(n), o = Nd();
  ct(function() {
    o || (kd(r, a.current, n), a.current = n);
  }, [r, n, o]);
});
function Jm(e, t, n) {
  var r, a = ((r = e.items) == null ? void 0 : r.length) && t >= 0;
  return Ue({
    isOpen: !1,
    highlightedIndex: -1
  }, a && Ue({
    selectedItem: e.items[t],
    isOpen: wr(e, "isOpen"),
    highlightedIndex: wr(e, "highlightedIndex")
  }, n));
}
function aj(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function Nd() {
  var e = $e.useRef(!0);
  return $e.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
function Fx(e) {
  var t = wr(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
function oj(e) {
  var t = Ji(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
var Es = {
  environment: le.shape({
    addEventListener: le.func.isRequired,
    removeEventListener: le.func.isRequired,
    document: le.shape({
      createElement: le.func.isRequired,
      getElementById: le.func.isRequired,
      activeElement: le.any.isRequired,
      body: le.any.isRequired
    }).isRequired,
    Node: le.func.isRequired
  }),
  itemToString: le.func,
  itemToKey: le.func,
  stateReducer: le.func
}, Lx = Ue({}, Es, {
  getA11yStatusMessage: le.func,
  highlightedIndex: le.number,
  defaultHighlightedIndex: le.number,
  initialHighlightedIndex: le.number,
  isOpen: le.bool,
  defaultIsOpen: le.bool,
  initialIsOpen: le.bool,
  selectedItem: le.any,
  initialSelectedItem: le.any,
  defaultSelectedItem: le.any,
  id: le.string,
  labelId: le.string,
  menuId: le.string,
  getItemId: le.func,
  toggleButtonId: le.string,
  onSelectedItemChange: le.func,
  onHighlightedIndexChange: le.func,
  onStateChange: le.func,
  onIsOpenChange: le.func,
  scrollIntoView: le.func
});
function sj(e, t, n) {
  var r = t.type, a = t.props, o;
  switch (r) {
    case n.ItemMouseMove:
      o = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case n.MenuMouseLeave:
      o = {
        highlightedIndex: -1
      };
      break;
    case n.ToggleButtonClick:
    case n.FunctionToggleMenu:
      o = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Rs(a, e, 0)
      };
      break;
    case n.FunctionOpenMenu:
      o = {
        isOpen: !0,
        highlightedIndex: Rs(a, e, 0)
      };
      break;
    case n.FunctionCloseMenu:
      o = {
        isOpen: !1
      };
      break;
    case n.FunctionSetHighlightedIndex:
      o = {
        highlightedIndex: a.isItemDisabled(a.items[t.highlightedIndex], t.highlightedIndex) ? -1 : t.highlightedIndex
      };
      break;
    case n.FunctionSetInputValue:
      o = {
        inputValue: t.inputValue
      };
      break;
    case n.FunctionReset:
      o = {
        highlightedIndex: Fx(a),
        isOpen: wr(a, "isOpen"),
        selectedItem: wr(a, "selectedItem"),
        inputValue: wr(a, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return Ue({}, e, o);
}
function lj(e) {
  for (var t = e.keysSoFar, n = e.highlightedIndex, r = e.items, a = e.itemToString, o = e.isItemDisabled, l = t.toLowerCase(), u = 0; u < r.length; u++) {
    var d = (u + n + (t.length < 2 ? 1 : 0)) % r.length, p = r[d];
    if (p !== void 0 && a(p).toLowerCase().startsWith(l) && !o(p, d))
      return d;
  }
  return n;
}
var uj = fn(fn({}, Lx), { items: le.array.isRequired, isItemDisabled: le.func }), cj = fn(fn({}, Ha), { isItemDisabled: function() {
  return !1;
} }), Wx = dn;
process.env.NODE_ENV !== "production" && (Wx = function(e, t) {
  le.checkPropTypes(uj, e, "prop", t.name);
});
var Cs = process.env.NODE_ENV !== "production" ? "__togglebutton_click__" : 0, jd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_down__" : 1, Rd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_up__" : 2, $s = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_character__" : 3, $d = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_escape__" : 4, Fd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_home__" : 5, Ld = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_end__" : 6, Wd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_enter__" : 7, Vd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_space_button__" : 8, zd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_page_up__" : 9, Bd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_page_down__" : 10, Fs = process.env.NODE_ENV !== "production" ? "__togglebutton_blur__" : 11, Vx = process.env.NODE_ENV !== "production" ? "__menu_mouse_leave__" : 12, zx = process.env.NODE_ENV !== "production" ? "__item_mouse_move__" : 13, Hd = process.env.NODE_ENV !== "production" ? "__item_click__" : 14, Bx = process.env.NODE_ENV !== "production" ? "__function_toggle_menu__" : 15, Hx = process.env.NODE_ENV !== "production" ? "__function_open_menu__" : 16, Ux = process.env.NODE_ENV !== "production" ? "__function_close_menu__" : 17, Yx = process.env.NODE_ENV !== "production" ? "__function_set_highlighted_index__" : 18, Ud = process.env.NODE_ENV !== "production" ? "__function_select_item__" : 19, $c = process.env.NODE_ENV !== "production" ? "__function_set_input_value__" : 20, qx = process.env.NODE_ENV !== "production" ? "__function_reset__" : 21, Kx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  FunctionCloseMenu: Ux,
  FunctionOpenMenu: Hx,
  FunctionReset: qx,
  FunctionSelectItem: Ud,
  FunctionSetHighlightedIndex: Yx,
  FunctionSetInputValue: $c,
  FunctionToggleMenu: Bx,
  ItemClick: Hd,
  ItemMouseMove: zx,
  MenuMouseLeave: Vx,
  ToggleButtonBlur: Fs,
  ToggleButtonClick: Cs,
  ToggleButtonKeyDownArrowDown: jd,
  ToggleButtonKeyDownArrowUp: Rd,
  ToggleButtonKeyDownCharacter: $s,
  ToggleButtonKeyDownEnd: Ld,
  ToggleButtonKeyDownEnter: Wd,
  ToggleButtonKeyDownEscape: $d,
  ToggleButtonKeyDownHome: Fd,
  ToggleButtonKeyDownPageDown: Bd,
  ToggleButtonKeyDownPageUp: zd,
  ToggleButtonKeyDownSpaceButton: Vd
});
function dj(e, t) {
  var n, r = t.type, a = t.props, o = t.altKey, l;
  switch (r) {
    case Hd:
      l = {
        isOpen: wr(a, "isOpen"),
        highlightedIndex: Fx(a),
        selectedItem: a.items[t.index]
      };
      break;
    case $s:
      {
        var u = t.key, d = "" + e.inputValue + u, p = !e.isOpen && e.selectedItem ? a.items.findIndex(function(w) {
          return a.itemToKey(w) === a.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, h = lj({
          keysSoFar: d,
          highlightedIndex: p,
          items: a.items,
          itemToString: a.itemToString,
          isItemDisabled: a.isItemDisabled
        });
        l = {
          inputValue: d,
          highlightedIndex: h,
          isOpen: !0
        };
      }
      break;
    case jd:
      {
        var m = e.isOpen ? pi(e.highlightedIndex, 1, a.items, a.isItemDisabled) : o && e.selectedItem == null ? -1 : Rs(a, e, 1);
        l = {
          highlightedIndex: m,
          isOpen: !0
        };
      }
      break;
    case Rd:
      if (e.isOpen && o)
        l = Jm(a, e.highlightedIndex, !1);
      else {
        var x = e.isOpen ? pi(e.highlightedIndex, -1, a.items, a.isItemDisabled) : Rs(a, e, -1);
        l = {
          highlightedIndex: x,
          isOpen: !0
        };
      }
      break;
    case Wd:
    case Vd:
      l = Jm(a, e.highlightedIndex, !1);
      break;
    case Fd:
      l = {
        highlightedIndex: ra(0, !1, a.items, a.isItemDisabled),
        isOpen: !0
      };
      break;
    case Ld:
      l = {
        highlightedIndex: ra(a.items.length - 1, !0, a.items, a.isItemDisabled),
        isOpen: !0
      };
      break;
    case zd:
      l = {
        highlightedIndex: pi(e.highlightedIndex, -10, a.items, a.isItemDisabled)
      };
      break;
    case Bd:
      l = {
        highlightedIndex: pi(e.highlightedIndex, 10, a.items, a.isItemDisabled)
      };
      break;
    case $d:
      l = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case Fs:
      l = Ue({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = a.items) == null ? void 0 : n.length) && {
        selectedItem: a.items[e.highlightedIndex]
      });
      break;
    case Ud:
      l = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return sj(e, t, Kx);
  }
  return Ue({}, e, l);
}
var fj = ["onClick"], pj = ["onMouseLeave", "refKey", "ref"], hj = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], mj = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Mn.stateChangeTypes = Kx;
function Mn(e) {
  e === void 0 && (e = {}), Wx(e, Mn);
  var t = Ue({}, cj, e), n = t.scrollIntoView, r = t.environment, a = t.getA11yStatusMessage, o = Rx(dj, t, nj, aj), l = o[0], u = o[1], d = l.isOpen, p = l.highlightedIndex, h = l.selectedItem, m = l.inputValue, x = qe(null), w = qe(null), O = qe({}), _ = qe(null), b = QN(t), P = Ad({
    state: l,
    props: t
  }), C = Qe(function(I) {
    return O.current[b.getItemId(I)];
  }, [b]);
  $x(a, l, [d, p, h, m], r);
  var k = ij({
    menuElement: w.current,
    highlightedIndex: p,
    isOpen: d,
    itemRefs: O,
    scrollIntoView: n,
    getItemNodeFromIndex: C
  });
  ct(function() {
    return _.current = ll(function(I) {
      I({
        type: $c,
        inputValue: ""
      });
    }, 500), function() {
      _.current.cancel();
    };
  }, []), ct(function() {
    m && _.current(u);
  }, [u, m]), Md({
    props: t,
    state: l
  }), ct(function() {
    var I = Ji(t, "isOpen");
    I && x.current && x.current.focus();
  }, []);
  var D = rj(r, Qe(function() {
    P.current.state.isOpen && u({
      type: Fs
    });
  }, [u, P]), Rn(function() {
    return [w, x];
  }, [w.current, x.current])), S = Id("getMenuProps", "getToggleButtonProps");
  ct(function() {
    d || (O.current = {});
  }, [d]);
  var Z = Rn(function() {
    return {
      ArrowDown: function(X) {
        X.preventDefault(), u({
          type: jd,
          altKey: X.altKey
        });
      },
      ArrowUp: function(X) {
        X.preventDefault(), u({
          type: Rd,
          altKey: X.altKey
        });
      },
      Home: function(X) {
        X.preventDefault(), u({
          type: Fd
        });
      },
      End: function(X) {
        X.preventDefault(), u({
          type: Ld
        });
      },
      Escape: function() {
        P.current.state.isOpen && u({
          type: $d
        });
      },
      Enter: function(X) {
        X.preventDefault(), u({
          type: P.current.state.isOpen ? Wd : Cs
        });
      },
      PageUp: function(X) {
        P.current.state.isOpen && (X.preventDefault(), u({
          type: zd
        }));
      },
      PageDown: function(X) {
        P.current.state.isOpen && (X.preventDefault(), u({
          type: Bd
        }));
      },
      " ": function(X) {
        X.preventDefault();
        var M = P.current.state;
        if (!M.isOpen) {
          u({
            type: Cs
          });
          return;
        }
        M.inputValue ? u({
          type: $s,
          key: " "
        }) : u({
          type: Vd
        });
      }
    };
  }, [u, P]), J = Qe(function() {
    u({
      type: Bx
    });
  }, [u]), ne = Qe(function() {
    u({
      type: Ux
    });
  }, [u]), V = Qe(function() {
    u({
      type: Hx
    });
  }, [u]), Y = Qe(function(I) {
    u({
      type: Yx,
      highlightedIndex: I
    });
  }, [u]), te = Qe(function(I) {
    u({
      type: Ud,
      selectedItem: I
    });
  }, [u]), R = Qe(function() {
    u({
      type: qx
    });
  }, [u]), z = Qe(function(I) {
    u({
      type: $c,
      inputValue: I
    });
  }, [u]), B = Qe(function(I) {
    var X = I === void 0 ? {} : I, M = X.onClick, L = zn(X, fj), ue = function() {
      var ce;
      (ce = x.current) == null || ce.focus();
    };
    return Ue({
      id: b.labelId,
      htmlFor: b.toggleButtonId,
      onClick: Pt(M, ue)
    }, L);
  }, [b]), U = Qe(function(I, X) {
    var M, L = I === void 0 ? {} : I, ue = L.onMouseLeave, he = L.refKey, ce = he === void 0 ? "ref" : he, ye = L.ref, ge = zn(L, pj), be = X === void 0 ? {} : X, we = be.suppressRefError, Ce = we === void 0 ? !1 : we, _e = function() {
      u({
        type: Vx
      });
    };
    return S("getMenuProps", Ce, ce, w), Ue((M = {}, M[ce] = mi(ye, function(Se) {
      w.current = Se;
    }), M.id = b.menuId, M.role = "listbox", M["aria-labelledby"] = ge && ge["aria-label"] ? void 0 : "" + b.labelId, M.onMouseLeave = Pt(ue, _e), M), ge);
  }, [u, S, b]), K = Qe(function(I, X) {
    var M, L = I === void 0 ? {} : I, ue = L.onBlur, he = L.onClick;
    L.onPress;
    var ce = L.onKeyDown, ye = L.refKey, ge = ye === void 0 ? "ref" : ye, be = L.ref, we = zn(L, hj), Ce = X === void 0 ? {} : X, _e = Ce.suppressRefError, Se = _e === void 0 ? !1 : _e, fe = P.current.state, Re = function() {
      u({
        type: Cs
      });
    }, ve = function() {
      fe.isOpen && !D.isMouseDown && u({
        type: Fs
      });
    }, et = function(N) {
      var Q = Za(N);
      Q && Z[Q] ? Z[Q](N) : ej(Q) && u({
        type: $s,
        key: Q
      });
    }, rt = Ue((M = {}, M[ge] = mi(be, function(Ke) {
      x.current = Ke;
    }), M["aria-activedescendant"] = fe.isOpen && fe.highlightedIndex > -1 ? b.getItemId(fe.highlightedIndex) : "", M["aria-controls"] = b.menuId, M["aria-expanded"] = P.current.state.isOpen, M["aria-haspopup"] = "listbox", M["aria-labelledby"] = we && we["aria-label"] ? void 0 : "" + b.labelId, M.id = b.toggleButtonId, M.role = "combobox", M.tabIndex = 0, M.onBlur = Pt(ue, ve), M), we);
    return we.disabled || (rt.onClick = Pt(he, Re), rt.onKeyDown = Pt(ce, et)), S("getToggleButtonProps", Se, ge, x), rt;
  }, [u, b, P, D, S, Z]), j = Qe(function(I) {
    var X, M = I === void 0 ? {} : I, L = M.item, ue = M.index, he = M.onMouseMove, ce = M.onClick, ye = M.onMouseDown;
    M.onPress;
    var ge = M.refKey, be = ge === void 0 ? "ref" : ge, we = M.disabled, Ce = M.ref, _e = zn(M, mj);
    we !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var Se = P.current, fe = Se.state, Re = Se.props, ve = jx(L, ue, Re.items, "Pass either item or index to getItemProps!"), et = ve[0], rt = ve[1], Ke = Re.isItemDisabled(et, rt), N = function() {
      D.isTouchEnd || rt === fe.highlightedIndex || (k.current = !1, u({
        type: zx,
        index: rt,
        disabled: Ke
      }));
    }, Q = function() {
      u({
        type: Hd,
        index: rt
      });
    }, re = function($) {
      return $.preventDefault();
    }, g = Ue((X = {}, X[be] = mi(Ce, function(F) {
      F && (O.current[b.getItemId(rt)] = F);
    }), X["aria-disabled"] = Ke, X["aria-selected"] = et === fe.selectedItem, X.id = b.getItemId(rt), X.role = "option", X), _e);
    return Ke || (g.onClick = Pt(ce, Q)), g.onMouseMove = Pt(he, N), g.onMouseDown = Pt(ye, re), g;
  }, [P, b, D, k, u]);
  return {
    // prop getters.
    getToggleButtonProps: K,
    getLabelProps: B,
    getMenuProps: U,
    getItemProps: j,
    // actions.
    toggleMenu: J,
    openMenu: V,
    closeMenu: ne,
    setHighlightedIndex: Y,
    selectItem: te,
    reset: R,
    setInputValue: z,
    // state.
    highlightedIndex: p,
    isOpen: d,
    selectedItem: h,
    inputValue: m
  };
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
Ue({}, Lx, {
  items: le.array.isRequired,
  isItemDisabled: le.func,
  inputValue: le.string,
  defaultInputValue: le.string,
  initialInputValue: le.string,
  inputId: le.string,
  onInputValueChange: le.func
});
process.env.NODE_ENV;
Ue({}, Ha, {
  isItemDisabled: function() {
    return !1;
  }
});
var Gx = {
  activeIndex: -1,
  selectedItems: []
};
function Qm(e, t) {
  return Ji(e, t, Gx);
}
function eg(e, t) {
  return wr(e, t, Gx);
}
function gj(e) {
  var t = Qm(e, "activeIndex"), n = Qm(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: n
  };
}
function tg(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
function vj(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
var yj = {
  stateReducer: Es.stateReducer,
  itemToKey: Es.itemToKey,
  environment: Es.environment,
  selectedItems: le.array,
  initialSelectedItems: le.array,
  defaultSelectedItems: le.array,
  getA11yStatusMessage: le.func,
  activeIndex: le.number,
  initialActiveIndex: le.number,
  defaultActiveIndex: le.number,
  onActiveIndexChange: le.func,
  onSelectedItemsChange: le.func,
  keyNavigationNext: le.string,
  keyNavigationPrevious: le.string
}, xj = {
  itemToKey: Ha.itemToKey,
  stateReducer: Ha.stateReducer,
  environment: Ha.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, Xx = dn;
process.env.NODE_ENV !== "production" && (Xx = function(t, n) {
  le.checkPropTypes(yj, t, "prop", n.name);
});
var Yd = process.env.NODE_ENV !== "production" ? "__selected_item_click__" : 0, qd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_delete__" : 1, Kd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_backspace__" : 2, Gd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_next__" : 3, Xd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_previous__" : 4, Zd = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_navigation_previous__" : 5, Jd = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_backspace__" : 6, Qd = process.env.NODE_ENV !== "production" ? "__dropdown_click__" : 7, ef = process.env.NODE_ENV !== "production" ? "__function_add_selected_item__" : 8, tf = process.env.NODE_ENV !== "production" ? "__function_remove_selected_item__" : 9, nf = process.env.NODE_ENV !== "production" ? "__function_set_selected_items__" : 10, rf = process.env.NODE_ENV !== "production" ? "__function_set_active_index__" : 11, af = process.env.NODE_ENV !== "production" ? "__function_reset__" : 12, bj = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DropdownClick: Qd,
  DropdownKeyDownBackspace: Jd,
  DropdownKeyDownNavigationPrevious: Zd,
  FunctionAddSelectedItem: ef,
  FunctionRemoveSelectedItem: tf,
  FunctionReset: af,
  FunctionSetActiveIndex: rf,
  FunctionSetSelectedItems: nf,
  SelectedItemClick: Yd,
  SelectedItemKeyDownBackspace: Kd,
  SelectedItemKeyDownDelete: qd,
  SelectedItemKeyDownNavigationNext: Gd,
  SelectedItemKeyDownNavigationPrevious: Xd
});
function wj(e, t) {
  var n = t.type, r = t.index, a = t.props, o = t.selectedItem, l = e.activeIndex, u = e.selectedItems, d;
  switch (n) {
    case Yd:
      d = {
        activeIndex: r
      };
      break;
    case Xd:
      d = {
        activeIndex: l - 1 < 0 ? 0 : l - 1
      };
      break;
    case Gd:
      d = {
        activeIndex: l + 1 >= u.length ? -1 : l + 1
      };
      break;
    case Kd:
    case qd: {
      if (l < 0)
        break;
      var p = l;
      u.length === 1 ? p = -1 : l === u.length - 1 && (p = u.length - 2), d = Ue({
        selectedItems: [].concat(u.slice(0, l), u.slice(l + 1))
      }, {
        activeIndex: p
      });
      break;
    }
    case Zd:
      d = {
        activeIndex: u.length - 1
      };
      break;
    case Jd:
      d = {
        selectedItems: u.slice(0, u.length - 1)
      };
      break;
    case ef:
      d = {
        selectedItems: [].concat(u, [o])
      };
      break;
    case Qd:
      d = {
        activeIndex: -1
      };
      break;
    case tf: {
      var h = l, m = u.findIndex(function(O) {
        return a.itemToKey(O) === a.itemToKey(o);
      });
      if (m < 0)
        break;
      u.length === 1 ? h = -1 : m === u.length - 1 && (h = u.length - 2), d = {
        selectedItems: [].concat(u.slice(0, m), u.slice(m + 1)),
        activeIndex: h
      };
      break;
    }
    case nf: {
      var x = t.selectedItems;
      d = {
        selectedItems: x
      };
      break;
    }
    case rf: {
      var w = t.activeIndex;
      d = {
        activeIndex: w
      };
      break;
    }
    case af:
      d = {
        activeIndex: eg(a, "activeIndex"),
        selectedItems: eg(a, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return Ue({}, e, d);
}
var _j = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], Ej = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
di.stateChangeTypes = bj;
function di(e) {
  e === void 0 && (e = {}), Xx(e, di);
  var t = Ue({}, xj, e), n = t.getA11yStatusMessage, r = t.environment, a = t.keyNavigationNext, o = t.keyNavigationPrevious, l = Rx(wj, t, gj, vj), u = l[0], d = l[1], p = u.activeIndex, h = u.selectedItems, m = Nd(), x = qe(null), w = qe();
  w.current = [];
  var O = Ad({
    state: u,
    props: t
  });
  $x(n, u, [p, h], r), ct(function() {
    m || (p === -1 && x.current ? x.current.focus() : w.current[p] && w.current[p].focus());
  }, [p]), Md({
    props: t,
    state: u
  });
  var _ = Id("getDropdownProps"), b = Rn(function() {
    var V;
    return V = {}, V[o] = function() {
      d({
        type: Xd
      });
    }, V[a] = function() {
      d({
        type: Gd
      });
    }, V.Delete = function() {
      d({
        type: qd
      });
    }, V.Backspace = function() {
      d({
        type: Kd
      });
    }, V;
  }, [d, a, o]), P = Rn(function() {
    var V;
    return V = {}, V[o] = function(Y) {
      tg(Y) && d({
        type: Zd
      });
    }, V.Backspace = function(te) {
      tg(te) && d({
        type: Jd
      });
    }, V;
  }, [d, o]), C = Qe(function(V) {
    var Y, te = V === void 0 ? {} : V, R = te.refKey, z = R === void 0 ? "ref" : R, B = te.ref, U = te.onClick, K = te.onKeyDown, j = te.selectedItem, I = te.index, X = zn(te, _j), M = O.current.state, L = jx(j, I, M.selectedItems, "Pass either item or index to getSelectedItemProps!"), ue = L[1], he = ue > -1 && ue === M.activeIndex, ce = function() {
      d({
        type: Yd,
        index: ue
      });
    }, ye = function(be) {
      var we = Za(be);
      we && b[we] && b[we](be);
    };
    return Ue((Y = {}, Y[z] = mi(B, function(ge) {
      ge && w.current.push(ge);
    }), Y.tabIndex = he ? 0 : -1, Y.onClick = Pt(U, ce), Y.onKeyDown = Pt(K, ye), Y), X);
  }, [d, O, b]), k = Qe(function(V, Y) {
    var te, R = V === void 0 ? {} : V, z = R.refKey, B = z === void 0 ? "ref" : z, U = R.ref, K = R.onKeyDown, j = R.onClick, I = R.preventKeyAction, X = I === void 0 ? !1 : I, M = zn(R, Ej), L = Y === void 0 ? {} : Y, ue = L.suppressRefError, he = ue === void 0 ? !1 : ue;
    _("getDropdownProps", he, B, x);
    var ce = function(be) {
      var we = Za(be);
      we && P[we] && P[we](be);
    }, ye = function() {
      d({
        type: Qd
      });
    };
    return Ue((te = {}, te[B] = mi(U, function(ge) {
      ge && (x.current = ge);
    }), te), !X && {
      onKeyDown: Pt(K, ce),
      onClick: Pt(j, ye)
    }, M);
  }, [d, P, _]), D = Qe(function(V) {
    d({
      type: ef,
      selectedItem: V
    });
  }, [d]), S = Qe(function(V) {
    d({
      type: tf,
      selectedItem: V
    });
  }, [d]), Z = Qe(function(V) {
    d({
      type: nf,
      selectedItems: V
    });
  }, [d]), J = Qe(function(V) {
    d({
      type: rf,
      activeIndex: V
    });
  }, [d]), ne = Qe(function() {
    d({
      type: af
    });
  }, [d]);
  return {
    getSelectedItemProps: C,
    getDropdownProps: k,
    addSelectedItem: D,
    removeSelectedItem: S,
    setSelectedItems: Z,
    setActiveIndex: J,
    reset: ne,
    selectedItems: h,
    activeIndex: p
  };
}
function Cj() {
  this.__data__ = [], this.size = 0;
}
var Tj = Cj;
function Oj(e, t) {
  return e === t || e !== e && t !== t;
}
var Zx = Oj, Sj = Zx;
function Dj(e, t) {
  for (var n = e.length; n--; )
    if (Sj(e[n][0], t))
      return n;
  return -1;
}
var ul = Dj, kj = ul, Pj = Array.prototype, Aj = Pj.splice;
function Ij(e) {
  var t = this.__data__, n = kj(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Aj.call(t, n, 1), --this.size, !0;
}
var Mj = Ij, Nj = ul;
function jj(e) {
  var t = this.__data__, n = Nj(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var Rj = jj, $j = ul;
function Fj(e) {
  return $j(this.__data__, e) > -1;
}
var Lj = Fj, Wj = ul;
function Vj(e, t) {
  var n = this.__data__, r = Wj(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var zj = Vj, Bj = Tj, Hj = Mj, Uj = Rj, Yj = Lj, qj = zj;
function la(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
la.prototype.clear = Bj;
la.prototype.delete = Hj;
la.prototype.get = Uj;
la.prototype.has = Yj;
la.prototype.set = qj;
var cl = la, Kj = cl;
function Gj() {
  this.__data__ = new Kj(), this.size = 0;
}
var Xj = Gj;
function Zj(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var Jj = Zj;
function Qj(e) {
  return this.__data__.get(e);
}
var eR = Qj;
function tR(e) {
  return this.__data__.has(e);
}
var nR = tR, rR = typeof Yi == "object" && Yi && Yi.Object === Object && Yi, Jx = rR, iR = Jx, aR = typeof self == "object" && self && self.Object === Object && self, oR = iR || aR || Function("return this")(), Tr = oR, sR = Tr, lR = sR.Symbol, of = lR, ng = of, Qx = Object.prototype, uR = Qx.hasOwnProperty, cR = Qx.toString, Fa = ng ? ng.toStringTag : void 0;
function dR(e) {
  var t = uR.call(e, Fa), n = e[Fa];
  try {
    e[Fa] = void 0;
    var r = !0;
  } catch {
  }
  var a = cR.call(e);
  return r && (t ? e[Fa] = n : delete e[Fa]), a;
}
var fR = dR, pR = Object.prototype, hR = pR.toString;
function mR(e) {
  return hR.call(e);
}
var gR = mR, rg = of, vR = fR, yR = gR, xR = "[object Null]", bR = "[object Undefined]", ig = rg ? rg.toStringTag : void 0;
function wR(e) {
  return e == null ? e === void 0 ? bR : xR : ig && ig in Object(e) ? vR(e) : yR(e);
}
var dl = wR;
function _R(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var eb = _R, ER = dl, CR = eb, TR = "[object AsyncFunction]", OR = "[object Function]", SR = "[object GeneratorFunction]", DR = "[object Proxy]";
function kR(e) {
  if (!CR(e))
    return !1;
  var t = ER(e);
  return t == OR || t == SR || t == TR || t == DR;
}
var tb = kR, PR = Tr, AR = PR["__core-js_shared__"], IR = AR, ic = IR, ag = function() {
  var e = /[^.]+$/.exec(ic && ic.keys && ic.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function MR(e) {
  return !!ag && ag in e;
}
var NR = MR, jR = Function.prototype, RR = jR.toString;
function $R(e) {
  if (e != null) {
    try {
      return RR.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var nb = $R, FR = tb, LR = NR, WR = eb, VR = nb, zR = /[\\^$.*+?()[\]{}|]/g, BR = /^\[object .+?Constructor\]$/, HR = Function.prototype, UR = Object.prototype, YR = HR.toString, qR = UR.hasOwnProperty, KR = RegExp(
  "^" + YR.call(qR).replace(zR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function GR(e) {
  if (!WR(e) || LR(e))
    return !1;
  var t = FR(e) ? KR : BR;
  return t.test(VR(e));
}
var XR = GR;
function ZR(e, t) {
  return e == null ? void 0 : e[t];
}
var JR = ZR, QR = XR, e2 = JR;
function t2(e, t) {
  var n = e2(e, t);
  return QR(n) ? n : void 0;
}
var ua = t2, n2 = ua, r2 = Tr, i2 = n2(r2, "Map"), sf = i2, a2 = ua, o2 = a2(Object, "create"), fl = o2, og = fl;
function s2() {
  this.__data__ = og ? og(null) : {}, this.size = 0;
}
var l2 = s2;
function u2(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var c2 = u2, d2 = fl, f2 = "__lodash_hash_undefined__", p2 = Object.prototype, h2 = p2.hasOwnProperty;
function m2(e) {
  var t = this.__data__;
  if (d2) {
    var n = t[e];
    return n === f2 ? void 0 : n;
  }
  return h2.call(t, e) ? t[e] : void 0;
}
var g2 = m2, v2 = fl, y2 = Object.prototype, x2 = y2.hasOwnProperty;
function b2(e) {
  var t = this.__data__;
  return v2 ? t[e] !== void 0 : x2.call(t, e);
}
var w2 = b2, _2 = fl, E2 = "__lodash_hash_undefined__";
function C2(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = _2 && t === void 0 ? E2 : t, this;
}
var T2 = C2, O2 = l2, S2 = c2, D2 = g2, k2 = w2, P2 = T2;
function ca(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ca.prototype.clear = O2;
ca.prototype.delete = S2;
ca.prototype.get = D2;
ca.prototype.has = k2;
ca.prototype.set = P2;
var A2 = ca, sg = A2, I2 = cl, M2 = sf;
function N2() {
  this.size = 0, this.__data__ = {
    hash: new sg(),
    map: new (M2 || I2)(),
    string: new sg()
  };
}
var j2 = N2;
function R2(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var $2 = R2, F2 = $2;
function L2(e, t) {
  var n = e.__data__;
  return F2(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var pl = L2, W2 = pl;
function V2(e) {
  var t = W2(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var z2 = V2, B2 = pl;
function H2(e) {
  return B2(this, e).get(e);
}
var U2 = H2, Y2 = pl;
function q2(e) {
  return Y2(this, e).has(e);
}
var K2 = q2, G2 = pl;
function X2(e, t) {
  var n = G2(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Z2 = X2, J2 = j2, Q2 = z2, e$ = U2, t$ = K2, n$ = Z2;
function da(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
da.prototype.clear = J2;
da.prototype.delete = Q2;
da.prototype.get = e$;
da.prototype.has = t$;
da.prototype.set = n$;
var rb = da, r$ = cl, i$ = sf, a$ = rb, o$ = 200;
function s$(e, t) {
  var n = this.__data__;
  if (n instanceof r$) {
    var r = n.__data__;
    if (!i$ || r.length < o$ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new a$(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var l$ = s$, u$ = cl, c$ = Xj, d$ = Jj, f$ = eR, p$ = nR, h$ = l$;
function fa(e) {
  var t = this.__data__ = new u$(e);
  this.size = t.size;
}
fa.prototype.clear = c$;
fa.prototype.delete = d$;
fa.prototype.get = f$;
fa.prototype.has = p$;
fa.prototype.set = h$;
var m$ = fa, g$ = "__lodash_hash_undefined__";
function v$(e) {
  return this.__data__.set(e, g$), this;
}
var y$ = v$;
function x$(e) {
  return this.__data__.has(e);
}
var b$ = x$, w$ = rb, _$ = y$, E$ = b$;
function Ls(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new w$(); ++t < n; )
    this.add(e[t]);
}
Ls.prototype.add = Ls.prototype.push = _$;
Ls.prototype.has = E$;
var C$ = Ls;
function T$(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var O$ = T$;
function S$(e, t) {
  return e.has(t);
}
var D$ = S$, k$ = C$, P$ = O$, A$ = D$, I$ = 1, M$ = 2;
function N$(e, t, n, r, a, o) {
  var l = n & I$, u = e.length, d = t.length;
  if (u != d && !(l && d > u))
    return !1;
  var p = o.get(e), h = o.get(t);
  if (p && h)
    return p == t && h == e;
  var m = -1, x = !0, w = n & M$ ? new k$() : void 0;
  for (o.set(e, t), o.set(t, e); ++m < u; ) {
    var O = e[m], _ = t[m];
    if (r)
      var b = l ? r(_, O, m, t, e, o) : r(O, _, m, e, t, o);
    if (b !== void 0) {
      if (b)
        continue;
      x = !1;
      break;
    }
    if (w) {
      if (!P$(t, function(P, C) {
        if (!A$(w, C) && (O === P || a(O, P, n, r, o)))
          return w.push(C);
      })) {
        x = !1;
        break;
      }
    } else if (!(O === _ || a(O, _, n, r, o))) {
      x = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), x;
}
var ib = N$, j$ = Tr, R$ = j$.Uint8Array, $$ = R$;
function F$(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var L$ = F$;
function W$(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var V$ = W$, lg = of, ug = $$, z$ = Zx, B$ = ib, H$ = L$, U$ = V$, Y$ = 1, q$ = 2, K$ = "[object Boolean]", G$ = "[object Date]", X$ = "[object Error]", Z$ = "[object Map]", J$ = "[object Number]", Q$ = "[object RegExp]", eF = "[object Set]", tF = "[object String]", nF = "[object Symbol]", rF = "[object ArrayBuffer]", iF = "[object DataView]", cg = lg ? lg.prototype : void 0, ac = cg ? cg.valueOf : void 0;
function aF(e, t, n, r, a, o, l) {
  switch (n) {
    case iF:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case rF:
      return !(e.byteLength != t.byteLength || !o(new ug(e), new ug(t)));
    case K$:
    case G$:
    case J$:
      return z$(+e, +t);
    case X$:
      return e.name == t.name && e.message == t.message;
    case Q$:
    case tF:
      return e == t + "";
    case Z$:
      var u = H$;
    case eF:
      var d = r & Y$;
      if (u || (u = U$), e.size != t.size && !d)
        return !1;
      var p = l.get(e);
      if (p)
        return p == t;
      r |= q$, l.set(e, t);
      var h = B$(u(e), u(t), r, a, o, l);
      return l.delete(e), h;
    case nF:
      if (ac)
        return ac.call(e) == ac.call(t);
  }
  return !1;
}
var oF = aF;
function sF(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var lF = sF, uF = Array.isArray, lf = uF, cF = lF, dF = lf;
function fF(e, t, n) {
  var r = t(e);
  return dF(e) ? r : cF(r, n(e));
}
var pF = fF;
function hF(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (o[a++] = l);
  }
  return o;
}
var mF = hF;
function gF() {
  return [];
}
var vF = gF, yF = mF, xF = vF, bF = Object.prototype, wF = bF.propertyIsEnumerable, dg = Object.getOwnPropertySymbols, _F = dg ? function(e) {
  return e == null ? [] : (e = Object(e), yF(dg(e), function(t) {
    return wF.call(e, t);
  }));
} : xF, EF = _F;
function CF(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var TF = CF;
function OF(e) {
  return e != null && typeof e == "object";
}
var hl = OF, SF = dl, DF = hl, kF = "[object Arguments]";
function PF(e) {
  return DF(e) && SF(e) == kF;
}
var AF = PF, fg = AF, IF = hl, ab = Object.prototype, MF = ab.hasOwnProperty, NF = ab.propertyIsEnumerable, jF = fg(/* @__PURE__ */ function() {
  return arguments;
}()) ? fg : function(e) {
  return IF(e) && MF.call(e, "callee") && !NF.call(e, "callee");
}, RF = jF, Ws = { exports: {} };
function $F() {
  return !1;
}
var FF = $F;
Ws.exports;
(function(e, t) {
  var n = Tr, r = FF, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, l = o && o.exports === a, u = l ? n.Buffer : void 0, d = u ? u.isBuffer : void 0, p = d || r;
  e.exports = p;
})(Ws, Ws.exports);
var ob = Ws.exports, LF = 9007199254740991, WF = /^(?:0|[1-9]\d*)$/;
function VF(e, t) {
  var n = typeof e;
  return t = t ?? LF, !!t && (n == "number" || n != "symbol" && WF.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var zF = VF, BF = 9007199254740991;
function HF(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= BF;
}
var sb = HF, UF = dl, YF = sb, qF = hl, KF = "[object Arguments]", GF = "[object Array]", XF = "[object Boolean]", ZF = "[object Date]", JF = "[object Error]", QF = "[object Function]", eL = "[object Map]", tL = "[object Number]", nL = "[object Object]", rL = "[object RegExp]", iL = "[object Set]", aL = "[object String]", oL = "[object WeakMap]", sL = "[object ArrayBuffer]", lL = "[object DataView]", uL = "[object Float32Array]", cL = "[object Float64Array]", dL = "[object Int8Array]", fL = "[object Int16Array]", pL = "[object Int32Array]", hL = "[object Uint8Array]", mL = "[object Uint8ClampedArray]", gL = "[object Uint16Array]", vL = "[object Uint32Array]", Ct = {};
Ct[uL] = Ct[cL] = Ct[dL] = Ct[fL] = Ct[pL] = Ct[hL] = Ct[mL] = Ct[gL] = Ct[vL] = !0;
Ct[KF] = Ct[GF] = Ct[sL] = Ct[XF] = Ct[lL] = Ct[ZF] = Ct[JF] = Ct[QF] = Ct[eL] = Ct[tL] = Ct[nL] = Ct[rL] = Ct[iL] = Ct[aL] = Ct[oL] = !1;
function yL(e) {
  return qF(e) && YF(e.length) && !!Ct[UF(e)];
}
var xL = yL;
function bL(e) {
  return function(t) {
    return e(t);
  };
}
var wL = bL, Vs = { exports: {} };
Vs.exports;
(function(e, t) {
  var n = Jx, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, l = o && n.process, u = function() {
    try {
      var d = a && a.require && a.require("util").types;
      return d || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(Vs, Vs.exports);
var _L = Vs.exports, EL = xL, CL = wL, pg = _L, hg = pg && pg.isTypedArray, TL = hg ? CL(hg) : EL, lb = TL, OL = TF, SL = RF, DL = lf, kL = ob, PL = zF, AL = lb, IL = Object.prototype, ML = IL.hasOwnProperty;
function NL(e, t) {
  var n = DL(e), r = !n && SL(e), a = !n && !r && kL(e), o = !n && !r && !a && AL(e), l = n || r || a || o, u = l ? OL(e.length, String) : [], d = u.length;
  for (var p in e)
    (t || ML.call(e, p)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    PL(p, d))) && u.push(p);
  return u;
}
var jL = NL, RL = Object.prototype;
function $L(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || RL;
  return e === n;
}
var FL = $L;
function LL(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var WL = LL, VL = WL, zL = VL(Object.keys, Object), BL = zL, HL = FL, UL = BL, YL = Object.prototype, qL = YL.hasOwnProperty;
function KL(e) {
  if (!HL(e))
    return UL(e);
  var t = [];
  for (var n in Object(e))
    qL.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var GL = KL, XL = tb, ZL = sb;
function JL(e) {
  return e != null && ZL(e.length) && !XL(e);
}
var QL = JL, e4 = jL, t4 = GL, n4 = QL;
function r4(e) {
  return n4(e) ? e4(e) : t4(e);
}
var i4 = r4, a4 = pF, o4 = EF, s4 = i4;
function l4(e) {
  return a4(e, s4, o4);
}
var u4 = l4, mg = u4, c4 = 1, d4 = Object.prototype, f4 = d4.hasOwnProperty;
function p4(e, t, n, r, a, o) {
  var l = n & c4, u = mg(e), d = u.length, p = mg(t), h = p.length;
  if (d != h && !l)
    return !1;
  for (var m = d; m--; ) {
    var x = u[m];
    if (!(l ? x in t : f4.call(t, x)))
      return !1;
  }
  var w = o.get(e), O = o.get(t);
  if (w && O)
    return w == t && O == e;
  var _ = !0;
  o.set(e, t), o.set(t, e);
  for (var b = l; ++m < d; ) {
    x = u[m];
    var P = e[x], C = t[x];
    if (r)
      var k = l ? r(C, P, x, t, e, o) : r(P, C, x, e, t, o);
    if (!(k === void 0 ? P === C || a(P, C, n, r, o) : k)) {
      _ = !1;
      break;
    }
    b || (b = x == "constructor");
  }
  if (_ && !b) {
    var D = e.constructor, S = t.constructor;
    D != S && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof S == "function" && S instanceof S) && (_ = !1);
  }
  return o.delete(e), o.delete(t), _;
}
var h4 = p4, m4 = ua, g4 = Tr, v4 = m4(g4, "DataView"), y4 = v4, x4 = ua, b4 = Tr, w4 = x4(b4, "Promise"), _4 = w4, E4 = ua, C4 = Tr, T4 = E4(C4, "Set"), O4 = T4, S4 = ua, D4 = Tr, k4 = S4(D4, "WeakMap"), P4 = k4, Fc = y4, Lc = sf, Wc = _4, Vc = O4, zc = P4, ub = dl, pa = nb, gg = "[object Map]", A4 = "[object Object]", vg = "[object Promise]", yg = "[object Set]", xg = "[object WeakMap]", bg = "[object DataView]", I4 = pa(Fc), M4 = pa(Lc), N4 = pa(Wc), j4 = pa(Vc), R4 = pa(zc), ci = ub;
(Fc && ci(new Fc(new ArrayBuffer(1))) != bg || Lc && ci(new Lc()) != gg || Wc && ci(Wc.resolve()) != vg || Vc && ci(new Vc()) != yg || zc && ci(new zc()) != xg) && (ci = function(e) {
  var t = ub(e), n = t == A4 ? e.constructor : void 0, r = n ? pa(n) : "";
  if (r)
    switch (r) {
      case I4:
        return bg;
      case M4:
        return gg;
      case N4:
        return vg;
      case j4:
        return yg;
      case R4:
        return xg;
    }
  return t;
});
var $4 = ci, oc = m$, F4 = ib, L4 = oF, W4 = h4, wg = $4, _g = lf, Eg = ob, V4 = lb, z4 = 1, Cg = "[object Arguments]", Tg = "[object Array]", ps = "[object Object]", B4 = Object.prototype, Og = B4.hasOwnProperty;
function H4(e, t, n, r, a, o) {
  var l = _g(e), u = _g(t), d = l ? Tg : wg(e), p = u ? Tg : wg(t);
  d = d == Cg ? ps : d, p = p == Cg ? ps : p;
  var h = d == ps, m = p == ps, x = d == p;
  if (x && Eg(e)) {
    if (!Eg(t))
      return !1;
    l = !0, h = !1;
  }
  if (x && !h)
    return o || (o = new oc()), l || V4(e) ? F4(e, t, n, r, a, o) : L4(e, t, d, n, r, a, o);
  if (!(n & z4)) {
    var w = h && Og.call(e, "__wrapped__"), O = m && Og.call(t, "__wrapped__");
    if (w || O) {
      var _ = w ? e.value() : e, b = O ? t.value() : t;
      return o || (o = new oc()), a(_, b, n, r, o);
    }
  }
  return x ? (o || (o = new oc()), W4(e, t, n, r, a, o)) : !1;
}
var U4 = H4, Y4 = U4, Sg = hl;
function cb(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !Sg(e) && !Sg(t) ? e !== e && t !== t : Y4(e, t, n, r, cb, a);
}
var q4 = cb, K4 = q4;
function G4(e, t) {
  return K4(e, t);
}
var X4 = G4;
const db = /* @__PURE__ */ el(X4), Xr = ee.createContext(void 0), Z4 = ({
  children: e,
  highlightOnMouseOver: t = !1,
  ...n
}) => {
  const {
    filteredOptions: r,
    selected: a,
    selectedOptions: o,
    onSelectedChange: l,
    multiple: u,
    forceMount: d,
    open: p,
    onOpenChange: h,
    search: m,
    onSearchChange: x,
    disabled: w
  } = n, O = qe(null), _ = qe(null), b = r == null ? void 0 : r.findIndex((V) => {
    var Y;
    return V.value === ((Y = o[0]) == null ? void 0 : Y.value);
  }), { getSelectedItemProps: P, getDropdownProps: C } = di({
    selectedItems: o,
    onStateChange({ selectedItems: V, type: Y }) {
      var te;
      switch (Y) {
        case di.stateChangeTypes.SelectedItemKeyDownBackspace:
        case di.stateChangeTypes.SelectedItemKeyDownDelete:
        case di.stateChangeTypes.DropdownKeyDownBackspace:
        case di.stateChangeTypes.FunctionRemoveSelectedItem:
          l(
            u ? (V || []).map((R) => R.value) : (te = V == null ? void 0 : V[0]) == null ? void 0 : te.value
          );
          break;
      }
    }
  }), [k, D] = ht(-1);
  ct(() => {
    D(
      p || d ? k != null && k > -1 ? k : b >= 0 ? b : 0 : -1
    );
  }, [p]);
  const { getToggleButtonProps: S, getMenuProps: Z, getItemProps: J } = Mn({
    onIsOpenChange: ({ isOpen: V, highlightedIndex: Y }) => {
      w || (h(V), V && (D(
        Y != null && Y > -1 ? Y : b >= 0 ? b : 0
      ), setTimeout(() => {
        var te;
        (te = _.current) == null || te.focus();
      }, 10)));
    },
    isOpen: w ? !1 : p,
    items: r,
    // filteredOptions otherwise index doesn't match
    itemToString(V) {
      return V ? V.value : "";
    },
    highlightedIndex: k,
    onHighlightedIndexChange: ({ highlightedIndex: V }) => {
      D(V);
    },
    selectedItem: null,
    isItemDisabled: (V) => V == null ? void 0 : V.disabled,
    stateReducer(V, Y) {
      let { changes: te, type: R, index: z } = Y;
      switch (R) {
        case Mn.stateChangeTypes.ToggleButtonBlur:
          document.activeElement === _.current && (te = {
            ...te,
            highlightedIndex: V.highlightedIndex,
            isOpen: !0
          });
          break;
        case Mn.stateChangeTypes.ToggleButtonClick:
          te = {
            ...te,
            isOpen: !0
          };
          break;
        case Mn.stateChangeTypes.ItemMouseMove:
          te = {
            ...te,
            isOpen: V.isOpen,
            highlightedIndex: t ? te.highlightedIndex : V.highlightedIndex
          };
          break;
        case Mn.stateChangeTypes.MenuMouseLeave:
          te = {
            ...te,
            isOpen: V.isOpen,
            highlightedIndex: t ? te.highlightedIndex : V.highlightedIndex
          };
          break;
        case Mn.stateChangeTypes.ToggleButtonKeyDownEnter:
        case Mn.stateChangeTypes.ItemClick:
          te = {
            ...te,
            isOpen: !!u,
            // keep the dropdown open when selecting multiple items.
            highlightedIndex: z
            // focus selected item
          };
          break;
      }
      return te;
    },
    onStateChange({ type: V, selectedItem: Y }) {
      var te;
      switch (V) {
        case Mn.stateChangeTypes.ToggleButtonClick:
        case Mn.stateChangeTypes.ToggleButtonKeyDownEnter:
        case Mn.stateChangeTypes.ItemClick:
          (te = O.current) == null || te.focus(), Y && (u && Array.isArray(a) ? a != null && a.includes(Y.value) ? l(a == null ? void 0 : a.filter((R) => R !== Y.value)) : l([...a || [], Y.value]) : l(Y.value), x(""));
          break;
      }
    }
  }), ne = (V) => {
    const Y = S();
    return eo({
      ref: _,
      onChange: (R) => {
        D(0), x(R.target.value);
      },
      onKeyDown: (R) => {
        var z;
        (R.key === "ArrowDown" || R.key === "ArrowUp" || R.key === "Enter" || R.key === "Escape") && (R.preventDefault(), (z = Y.onKeyDown) == null || z.call(Y, R));
      },
      value: m
    }, V);
  };
  return /* @__PURE__ */ v.jsx(
    Xr.Provider,
    {
      value: {
        ...n,
        highlightedIndex: k,
        getToggleButtonProps: S,
        getMenuProps: Z,
        getInputProps: ne,
        getItemProps: J,
        getSelectedItemProps: P,
        getDropdownProps: C,
        toggleButtonRef: O
      },
      children: e
    }
  );
}, J4 = (e, t) => {
  var n;
  return ((n = Dv(e.label)) == null ? void 0 : n.toLowerCase().includes(t.toLowerCase())) || e.value.toLowerCase().includes(t.toLowerCase());
}, Q4 = ({
  ref: e,
  asChild: t,
  multiple: n,
  children: r,
  defaultSelected: a,
  selected: o,
  onSelectedChange: l,
  defaultSearch: u,
  search: d,
  onSearchChange: p = () => {
  },
  searchFilter: h = J4,
  forceMount: m,
  defaultOpen: x,
  open: w,
  onOpenChange: O,
  allowAddOption: _,
  onAddOption: b,
  disabled: P,
  required: C,
  // context control props
  highlightOnMouseOver: k,
  ...D
}) => {
  const S = qe(null), Z = a ?? (n ? [] : ""), [J, ne] = Ki(
    Z,
    o,
    l
  );
  if (ct(() => {
    db(J, Z) || ne(J);
  }, [Z, n]), n && !Array.isArray(J))
    throw new Error("SelectRoot: selected must be an array when multiple is true");
  if (!n && Array.isArray(J))
    throw new Error("SelectRoot: selected must be a string when multiple is false");
  const [V, Y] = Ki(
    u ?? "",
    d,
    p
  ), [te, R] = Ki(x ?? !1, w, O), [z, B] = ht([]), [U, K] = ht([]);
  zr(() => {
    (te || m || z.length > 0) && K(z);
  }, [te, z]), zr(() => {
    C && U.length > 0 && J === "" && ne(U[0].value);
  }, [U == null ? void 0 : U.length]);
  const j = (ue, he) => {
    B((ce) => he !== void 0 ? [...ce.slice(0, he), ue, ...ce.slice(he)] : [...ce, ue]);
  }, I = (ue) => {
    B((he) => he.filter((ce) => ce.value !== ue.value));
  }, X = Rn(
    () => h ? U.filter((ue) => h(ue, V || "")) : U,
    [U, h, V]
  ), M = Rn(() => {
    const ue = Array.isArray(J) ? J : J !== void 0 ? [J] : [], he = [], ce = [];
    for (const ye of ue) {
      const ge = U.find((be) => be.value === ye);
      ge ? he.push(ge) : ce.push({ value: ye, label: ye });
    }
    return he.sort((ye, ge) => U.findIndex((be) => be.value === ye.value) - U.findIndex((be) => be.value === ge.value)), he.concat(ce);
  }, [J, U]), L = t ? Tt : "div";
  return /* @__PURE__ */ v.jsx(
    Z4,
    {
      multiple: !!n,
      search: V || "",
      onSearchChange: Y,
      open: te,
      onOpenChange: R,
      allowAddOption: _,
      onAddOption: b,
      selected: J,
      onSelectedChange: ne,
      registerOption: j,
      unregisterOption: I,
      options: U,
      filteredOptions: X,
      selectedOptions: M,
      disabled: P,
      required: C,
      highlightOnMouseOver: k,
      children: /* @__PURE__ */ v.jsx(L, { ...D, ref: S, children: r })
    }
  );
}, eW = ({ asChild: e, ...t }) => {
  const { getInputProps: n } = Yt(Xr), r = n(), a = e ? Tt : "input";
  return /* @__PURE__ */ v.jsx(a, { ...eo(r, t) });
}, tW = ({ asChild: e, ...t }) => {
  const n = qe(null), { open: r, getMenuProps: a } = Yt(Xr), o = a(), l = eo(o, t), u = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(u, { ...l, ref: nn(l.ref, n), "data-state": r ? "open" : "closed" });
}, nW = ({ asChild: e, placeholder: t = "", ...n }) => {
  var d;
  const r = qe(null), { selectedOptions: a } = Yt(Xr), o = a.length > 1 ? (
    // TODO: join doesnt work on formatted values
    a.map((p) => p.label).join(", ")
  ) : (d = a[0]) == null ? void 0 : d.label, l = a.length === 0 || a.length === 1 && a[0].value === "", u = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(u, { ...n, ref: nn(r, n.ref), "data-placeholder": l ? "" : void 0, children: l ? t : o });
}, rW = ({ asChild: e, ...t }) => {
  const { disabled: n, getToggleButtonProps: r, required: a, getDropdownProps: o, open: l, toggleButtonRef: u } = Yt(Xr), d = r(o({ preventKeyAction: l }));
  delete d.tabIndex;
  const p = eo(d, t), h = n || p.disabled, m = e ? Tt : "button";
  return /* @__PURE__ */ v.jsx(
    m,
    {
      type: "button",
      "data-state": l ? "open" : "closed",
      "data-disabled": h ? "" : void 0,
      "aria-required": a,
      ...p,
      ref: nn(u, p.ref),
      disabled: h
    }
  );
}, iW = ({ asChild: e, ...t }) => {
  const n = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(n, { ...t });
}, aW = ({ asChild: e, ...t }) => {
  const n = e ? Tt : "label";
  return /* @__PURE__ */ v.jsx(n, { role: "group", ...t });
}, oW = ({ asChild: e, ...t }) => {
  const n = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(n, { "aria-hidden": "true", role: "separator", ...t });
}, uf = ee.createContext(void 0), sW = ({ asChild: e, value: t, disabled: n, index: r = void 0, ...a }) => {
  const o = qe(null), { filteredOptions: l, selectedOptions: u, getItemProps: d, highlightedIndex: p, registerOption: h, unregisterOption: m } = Yt(Xr), [x, w] = ht(""), O = { ref: o, value: t, label: x, disabled: n };
  zr(() => (h(O, r), () => m(O)), [t, x, n, r]);
  const _ = l == null ? void 0 : l.findIndex((Z) => Z.value === t), b = _ !== void 0 && _ > -1 ? l == null ? void 0 : l[_] : void 0, P = u == null ? void 0 : u.some((Z) => Z.value === t);
  if (!b) return null;
  const C = d({ item: b, index: _ }), k = eo(C, a), D = p === _, S = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(uf.Provider, { value: { isSelected: P, isHighlighted: D, value: t, onTextChange: w }, children: /* @__PURE__ */ v.jsx(
    S,
    {
      ...k,
      ref: nn(o, k.ref),
      role: "option",
      "aria-disabled": n || void 0,
      "data-selected": P ? "" : void 0,
      "data-highlighted": D ? "" : void 0,
      "data-state": P ? "checked" : "unchecked",
      "data-disabled": n ? "" : void 0
    }
  ) });
}, lW = ({ asChild: e, children: t, ...n }) => {
  const { onTextChange: r } = Yt(uf);
  zr(() => {
    r(t);
  }, [t]);
  const a = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(a, { ...n, children: t });
}, uW = ({ asChild: e, ...t }) => {
  const { isSelected: n } = Yt(uf);
  if (!n) return null;
  const r = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(r, { ...t });
}, cf = ({ focusRef: e, onFocus: t, value: n, onChange: r }) => {
  const a = qe(null);
  return {
    onSelectedChange: (u) => {
      db(n, u) || Uv(a == null ? void 0 : a.current, u);
    },
    selectNativeProps: {
      ref: a,
      onFocus: MS(t, (u) => {
        var d;
        (d = e == null ? void 0 : e.current) == null || d.focus();
      }),
      onChange: r
    }
  };
}, cW = ({ ref: e, ...t }) => {
  const n = qe(null), { multiple: r, options: a, selected: o, required: l } = Yt(Xr);
  return /* @__PURE__ */ v.jsxs("select", { ...t, tabIndex: -1, multiple: r, ref: nn(n, e), children: [
    !l && /* @__PURE__ */ v.jsx("option", { value: "", disabled: !1 }),
    o && (Array.isArray(o) ? o : [o]).map((u) => /* @__PURE__ */ v.jsx("option", { value: u, selected: !0, children: u }, u)),
    a == null ? void 0 : a.filter((u) => !o.includes(u.value)).map((u) => {
      const d = typeof u.label == "string" ? u.label : Dv(u.label || "");
      return /* @__PURE__ */ v.jsx("option", { value: u.value, children: d }, u.value);
    })
  ] });
}, Ze = Object.assign(Q4, {
  Search: eW,
  Content: tW,
  Value: nW,
  Trigger: rW,
  Group: iW,
  GroupLabel: aW,
  Separator: oW,
  Option: sW,
  OptionText: lW,
  OptionIndicator: uW,
  Native: cW
}), dW = ({
  value: e,
  label: t,
  disabled: n = !1,
  className: r,
  index: a = void 0,
  hideCheck: o = !1
}) => /* @__PURE__ */ v.jsxs(
  Ze.Option,
  {
    value: e,
    className: Pe(
      "flex items-center gap-1 ui-highlighted:bg-neutral-100 ui-disabled:opacity-50 text-sm px-2 py-1 rounded text-neutral-700 select-none",
      r
    ),
    disabled: n,
    index: a,
    children: [
      !o && /* @__PURE__ */ v.jsx("span", { className: "flex justify-center items-center w-4 h-4 flex-none", children: /* @__PURE__ */ v.jsx(Ze.OptionIndicator, { children: /* @__PURE__ */ v.jsx(nl, {}) }) }),
      /* @__PURE__ */ v.jsx(Ze.OptionText, { children: t || e })
    ]
  }
), sc = ee.memo(dW), fb = ({
  // widget props
  widgetRef: e,
  controls: t,
  // single select props
  options: n,
  defaultOpen: r,
  open: a,
  onOpenChange: o,
  allowAddOption: l,
  onAddOption: u,
  placeholder: d,
  searchPlaceholder: p,
  emptyLabel: h,
  hideSearch: m = !1,
  hideCheck: x = !1,
  hideClear: w = !1,
  // remaining are select props we can pass down
  // the ones mentioned here are the ones we want to override
  className: O,
  value: _,
  onChange: b,
  onFocus: P,
  ...C
}) => {
  const k = ee.useRef(null), D = ee.useRef(null), [S, Z] = ht(!1);
  ct(() => {
    setTimeout(() => {
      Z(!0);
    }, 0);
  }, []);
  const [J, ne] = Xt("", _, b), [V, Y] = ht(!1), [te, R] = ht(""), z = (L) => {
    Y(!!L), L || setTimeout(() => {
      var ue;
      (ue = k.current) == null || ue.focus();
    }, 10);
  }, { onSelectedChange: B, selectNativeProps: U } = cf({
    focusRef: k,
    onFocus: P,
    value: J,
    onChange: ne
  }), K = (L) => {
    Uv(U.ref.current, ""), L.preventDefault(), L.stopPropagation();
  }, j = n == null ? void 0 : n.flatMap((L) => Array.isArray(L) ? L[1].map((ue) => ue.value) : L.value), I = (L) => {
    j.includes(L) ? B(L) : l && (u == null || u(L));
  }, [X, M] = ht(null);
  return ct(() => {
    X && setTimeout(() => {
      var L;
      (L = X == null ? void 0 : X.querySelector("[data-selected]")) == null || L.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 0);
  }, [X]), /* @__PURE__ */ v.jsx($n, { open: V, children: /* @__PURE__ */ v.jsxs(
    Ze,
    {
      search: te,
      onSearchChange: R,
      selected: J,
      onSelectedChange: I,
      open: V,
      forceMount: !S,
      onOpenChange: z,
      allowAddOption: l,
      onAddOption: u,
      required: C.required,
      disabled: C.disabled,
      highlightOnMouseOver: !0,
      children: [
        /* @__PURE__ */ v.jsx($n.Anchor, { children: /* @__PURE__ */ v.jsx(Ze.Trigger, { asChild: !0, children: /* @__PURE__ */ v.jsxs(
          ke,
          {
            variant: "button",
            disabled: C.disabled,
            ref: e,
            className: O,
            children: [
              /* @__PURE__ */ v.jsx(ke.Content, { asChild: !0, children: /* @__PURE__ */ v.jsx(
                "button",
                {
                  ref: k,
                  className: "pl-2 py-1.5 pr-0 cursor-default !outline-none text-left",
                  disabled: C.disabled,
                  type: "button",
                  children: /* @__PURE__ */ v.jsx(
                    Ze.Value,
                    {
                      placeholder: d === void 0 ? h : d,
                      className: "ui-placeholder:text-neutral-400 ui-placeholder:font-normal min-h-5 text-left"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
                J && !w && !C.required ? /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: K, children: /* @__PURE__ */ v.jsx(_i, {}) }) : /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "pointer-events-none -ml-2", children: /* @__PURE__ */ v.jsx(
                  uD,
                  {
                    className: Pe(
                      "text-neutral-400 transition-colors",
                      !C.disabled && "group-hover:text-neutral-700"
                    )
                  }
                ) }),
                t
              ] })
            ]
          }
        ) }) }),
        /* @__PURE__ */ v.jsx(
          $n.Content,
          {
            className: Pe("p-0 min-w-0 overflow-visible flex flex-col", !S && "hidden"),
            onOpenAutoFocus: (L) => {
              L.preventDefault();
            },
            forceMount: !S,
            align: "start",
            onWheel: (L) => {
              L.stopPropagation();
            },
            children: /* @__PURE__ */ v.jsxs(
              Ze.Content,
              {
                ref: M,
                className: "flex flex-col flex-1 min-h-0",
                onKeyDown: (L) => {
                  L.key === "Escape" && L.stopPropagation();
                },
                children: [
                  /* @__PURE__ */ v.jsxs("div", { className: Pe("relative w-full min-w-0 p-2", m && "hidden"), children: [
                    /* @__PURE__ */ v.jsx("span", { className: "absolute top-1/2 left-4 transform -translate-y-1/2 text-neutral-400 text-xl", children: /* @__PURE__ */ v.jsx(xD, { className: "!w-3.5 !h-3.5" }) }),
                    /* @__PURE__ */ v.jsx(ke, { variant: "input", asChild: !0, disabled: C.disabled, children: /* @__PURE__ */ v.jsx(
                      Ze.Search,
                      {
                        className: "rounded px-2 py-1 !pl-7 bg-transparent w-full min-w-0",
                        placeholder: p,
                        ref: D
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ v.jsxs(
                    "div",
                    {
                      className: Pe(
                        "flex flex-col overflow-auto scrollbar-thin flex-1 min-h-0 p-1.5",
                        !m && "pt-0"
                      ),
                      children: [
                        l && /* @__PURE__ */ v.jsx(
                          sc,
                          {
                            index: 0,
                            value: te || "",
                            label: te || "",
                            disabled: !te,
                            className: te ? "" : "hidden",
                            hideCheck: x
                          }
                        ),
                        n.map((L, ue) => {
                          if (Array.isArray(L)) {
                            const [he, ce] = L;
                            return /* @__PURE__ */ v.jsxs(ee.Fragment, { children: [
                              ue !== 0 && /* @__PURE__ */ v.jsx(Ze.Separator, { className: "border-t border-neutral-200 my-2" }),
                              /* @__PURE__ */ v.jsxs(Ze.Group, { className: "flex flex-col", children: [
                                /* @__PURE__ */ v.jsx(Ze.GroupLabel, { className: "font-medium text-sm px-2 py-1 !pl-7", children: he }),
                                ce.map((ye) => /* @__PURE__ */ v.jsx(
                                  sc,
                                  {
                                    ...ye,
                                    hideCheck: x
                                  },
                                  ye.value
                                ))
                              ] })
                            ] }, he);
                          }
                          return /* @__PURE__ */ v.jsx(sc, { ...L, hideCheck: x }, L.value);
                        })
                      ]
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(Ze.Native, { ...C, ...U }) })
      ]
    }
  ) });
}, Dg = (e, t) => Object.keys({ ...e, ...t }).reduce((n, r) => ({
  ...n,
  [r]: Pe(e[r], t[r])
}), {}), pb = ({
  className: e,
  classNames: t = {},
  showOutsideDays: n = !0,
  modifiers: r = {},
  modifiersClassNames: a = {},
  ...o
}) => {
  const l = {
    weekend: { dayOfWeek: [0, 6] }
  }, u = {
    highlighted: "bg-theme-100"
  };
  return /* @__PURE__ */ v.jsx(
    xN,
    {
      locale: VI,
      captionLayout: "dropdown-buttons",
      showOutsideDays: n,
      weekStartsOn: 1,
      modifiersClassNames: Dg(u, a),
      modifiers: { ...l, ...r },
      className: Pe("p-3", e),
      classNames: Dg({
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        caption_dropdowns: "flex items-center shadow-sm gap-1",
        nav: "space-x-1 flex items-center",
        nav_button: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-neutral-300 text-neutral-900 bg-background shadow-sm hover:bg-neutral-100 hover:text-neutral-800 hover:border-neutral-400 h-[2.175rem] w-7 bg-transparent p-0",
        nav_button_previous: "absolute left-0.5",
        nav_button_next: "absolute right-0.5",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-neutral-500 rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-neutral-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: "m-px inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-neutral-100 hover:text-neutral-800 h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        day_selected: "!bg-theme-600 !text-white hover:!bg-theme-600 hover:!text-white focus:!bg-theme-600 focus:!text-white rounded-md",
        day_today: "text-theme-600 rounded-md underline decoration-2 underline-offset-4",
        day_outside: "text-neutral-500 opacity-50",
        day_disabled: "text-neutral-500 opacity-50",
        day_range_start: "aria-selected:bg-theme-600 aria-selected:text-white rounded-l-md",
        day_range_middle: "aria-selected:bg-theme-600 aria-selected:text-white rounded-none",
        day_range_end: "aria-selected:bg-theme-600 aria-selected:text-white rounded-r-md",
        day_hidden: "invisible",
        vhidden: "hidden"
      }, t),
      components: {
        IconLeft: ({ ...d }) => /* @__PURE__ */ v.jsx(sD, { className: "h-4 w-4" }),
        IconRight: ({ ...d }) => /* @__PURE__ */ v.jsx(lD, { className: "h-4 w-4" }),
        Dropdown: ({ ...d }) => {
          const { name: p, onChange: h, value: m } = d;
          return /* @__PURE__ */ v.jsx(
            fb,
            {
              className: Pe(p === "months" && "min-w-[6.75rem]", d.className),
              onChange: h,
              value: m == null ? void 0 : m.toString(),
              name: p,
              options: ee.Children.map(d.children, (x) => {
                var w, O;
                return {
                  value: (w = x.props) == null ? void 0 : w.value.toString(),
                  label: (O = x.props) == null ? void 0 : O.children
                };
              }),
              required: !0,
              hideSearch: !0,
              hideCheck: !0
            }
          );
        }
      },
      ...o
    }
  );
};
var hb = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Yi, function() {
    var n = "month", r = "quarter";
    return function(a, o) {
      var l = o.prototype;
      l.quarter = function(p) {
        return this.$utils().u(p) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (p - 1));
      };
      var u = l.add;
      l.add = function(p, h) {
        return p = Number(p), this.$utils().p(h) === r ? this.add(3 * p, n) : u.bind(this)(p, h);
      };
      var d = l.startOf;
      l.startOf = function(p, h) {
        var m = this.$utils(), x = !!m.u(h) || h;
        if (m.p(p) === r) {
          var w = this.quarter() - 1;
          return x ? this.month(3 * w).startOf(n).startOf("day") : this.month(3 * w + 2).endOf(n).endOf("day");
        }
        return d.bind(this)(p, h);
      };
    };
  });
})(hb);
var fW = hb.exports;
const pW = /* @__PURE__ */ el(fW);
var mb = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Yi, function() {
    var n = 1e3, r = 6e4, a = 36e5, o = "millisecond", l = "second", u = "minute", d = "hour", p = "day", h = "week", m = "month", x = "quarter", w = "year", O = "date", _ = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(B) {
      var U = ["th", "st", "nd", "rd"], K = B % 100;
      return "[" + B + (U[(K - 20) % 10] || U[K] || U[0]) + "]";
    } }, k = function(B, U, K) {
      var j = String(B);
      return !j || j.length >= U ? B : "" + Array(U + 1 - j.length).join(K) + B;
    }, D = { s: k, z: function(B) {
      var U = -B.utcOffset(), K = Math.abs(U), j = Math.floor(K / 60), I = K % 60;
      return (U <= 0 ? "+" : "-") + k(j, 2, "0") + ":" + k(I, 2, "0");
    }, m: function B(U, K) {
      if (U.date() < K.date()) return -B(K, U);
      var j = 12 * (K.year() - U.year()) + (K.month() - U.month()), I = U.clone().add(j, m), X = K - I < 0, M = U.clone().add(j + (X ? -1 : 1), m);
      return +(-(j + (K - I) / (X ? I - M : M - I)) || 0);
    }, a: function(B) {
      return B < 0 ? Math.ceil(B) || 0 : Math.floor(B);
    }, p: function(B) {
      return { M: m, y: w, w: h, d: p, D: O, h: d, m: u, s: l, ms: o, Q: x }[B] || String(B || "").toLowerCase().replace(/s$/, "");
    }, u: function(B) {
      return B === void 0;
    } }, S = "en", Z = {};
    Z[S] = C;
    var J = "$isDayjsObject", ne = function(B) {
      return B instanceof R || !(!B || !B[J]);
    }, V = function B(U, K, j) {
      var I;
      if (!U) return S;
      if (typeof U == "string") {
        var X = U.toLowerCase();
        Z[X] && (I = X), K && (Z[X] = K, I = X);
        var M = U.split("-");
        if (!I && M.length > 1) return B(M[0]);
      } else {
        var L = U.name;
        Z[L] = U, I = L;
      }
      return !j && I && (S = I), I || !j && S;
    }, Y = function(B, U) {
      if (ne(B)) return B.clone();
      var K = typeof U == "object" ? U : {};
      return K.date = B, K.args = arguments, new R(K);
    }, te = D;
    te.l = V, te.i = ne, te.w = function(B, U) {
      return Y(B, { locale: U.$L, utc: U.$u, x: U.$x, $offset: U.$offset });
    };
    var R = function() {
      function B(K) {
        this.$L = V(K.locale, null, !0), this.parse(K), this.$x = this.$x || K.x || {}, this[J] = !0;
      }
      var U = B.prototype;
      return U.parse = function(K) {
        this.$d = function(j) {
          var I = j.date, X = j.utc;
          if (I === null) return /* @__PURE__ */ new Date(NaN);
          if (te.u(I)) return /* @__PURE__ */ new Date();
          if (I instanceof Date) return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var M = I.match(b);
            if (M) {
              var L = M[2] - 1 || 0, ue = (M[7] || "0").substring(0, 3);
              return X ? new Date(Date.UTC(M[1], L, M[3] || 1, M[4] || 0, M[5] || 0, M[6] || 0, ue)) : new Date(M[1], L, M[3] || 1, M[4] || 0, M[5] || 0, M[6] || 0, ue);
            }
          }
          return new Date(I);
        }(K), this.init();
      }, U.init = function() {
        var K = this.$d;
        this.$y = K.getFullYear(), this.$M = K.getMonth(), this.$D = K.getDate(), this.$W = K.getDay(), this.$H = K.getHours(), this.$m = K.getMinutes(), this.$s = K.getSeconds(), this.$ms = K.getMilliseconds();
      }, U.$utils = function() {
        return te;
      }, U.isValid = function() {
        return this.$d.toString() !== _;
      }, U.isSame = function(K, j) {
        var I = Y(K);
        return this.startOf(j) <= I && I <= this.endOf(j);
      }, U.isAfter = function(K, j) {
        return Y(K) < this.startOf(j);
      }, U.isBefore = function(K, j) {
        return this.endOf(j) < Y(K);
      }, U.$g = function(K, j, I) {
        return te.u(K) ? this[j] : this.set(I, K);
      }, U.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, U.valueOf = function() {
        return this.$d.getTime();
      }, U.startOf = function(K, j) {
        var I = this, X = !!te.u(j) || j, M = te.p(K), L = function(Ce, _e) {
          var Se = te.w(I.$u ? Date.UTC(I.$y, _e, Ce) : new Date(I.$y, _e, Ce), I);
          return X ? Se : Se.endOf(p);
        }, ue = function(Ce, _e) {
          return te.w(I.toDate()[Ce].apply(I.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(_e)), I);
        }, he = this.$W, ce = this.$M, ye = this.$D, ge = "set" + (this.$u ? "UTC" : "");
        switch (M) {
          case w:
            return X ? L(1, 0) : L(31, 11);
          case m:
            return X ? L(1, ce) : L(0, ce + 1);
          case h:
            var be = this.$locale().weekStart || 0, we = (he < be ? he + 7 : he) - be;
            return L(X ? ye - we : ye + (6 - we), ce);
          case p:
          case O:
            return ue(ge + "Hours", 0);
          case d:
            return ue(ge + "Minutes", 1);
          case u:
            return ue(ge + "Seconds", 2);
          case l:
            return ue(ge + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, U.endOf = function(K) {
        return this.startOf(K, !1);
      }, U.$set = function(K, j) {
        var I, X = te.p(K), M = "set" + (this.$u ? "UTC" : ""), L = (I = {}, I[p] = M + "Date", I[O] = M + "Date", I[m] = M + "Month", I[w] = M + "FullYear", I[d] = M + "Hours", I[u] = M + "Minutes", I[l] = M + "Seconds", I[o] = M + "Milliseconds", I)[X], ue = X === p ? this.$D + (j - this.$W) : j;
        if (X === m || X === w) {
          var he = this.clone().set(O, 1);
          he.$d[L](ue), he.init(), this.$d = he.set(O, Math.min(this.$D, he.daysInMonth())).$d;
        } else L && this.$d[L](ue);
        return this.init(), this;
      }, U.set = function(K, j) {
        return this.clone().$set(K, j);
      }, U.get = function(K) {
        return this[te.p(K)]();
      }, U.add = function(K, j) {
        var I, X = this;
        K = Number(K);
        var M = te.p(j), L = function(ce) {
          var ye = Y(X);
          return te.w(ye.date(ye.date() + Math.round(ce * K)), X);
        };
        if (M === m) return this.set(m, this.$M + K);
        if (M === w) return this.set(w, this.$y + K);
        if (M === p) return L(1);
        if (M === h) return L(7);
        var ue = (I = {}, I[u] = r, I[d] = a, I[l] = n, I)[M] || 1, he = this.$d.getTime() + K * ue;
        return te.w(he, this);
      }, U.subtract = function(K, j) {
        return this.add(-1 * K, j);
      }, U.format = function(K) {
        var j = this, I = this.$locale();
        if (!this.isValid()) return I.invalidDate || _;
        var X = K || "YYYY-MM-DDTHH:mm:ssZ", M = te.z(this), L = this.$H, ue = this.$m, he = this.$M, ce = I.weekdays, ye = I.months, ge = I.meridiem, be = function(_e, Se, fe, Re) {
          return _e && (_e[Se] || _e(j, X)) || fe[Se].slice(0, Re);
        }, we = function(_e) {
          return te.s(L % 12 || 12, _e, "0");
        }, Ce = ge || function(_e, Se, fe) {
          var Re = _e < 12 ? "AM" : "PM";
          return fe ? Re.toLowerCase() : Re;
        };
        return X.replace(P, function(_e, Se) {
          return Se || function(fe) {
            switch (fe) {
              case "YY":
                return String(j.$y).slice(-2);
              case "YYYY":
                return te.s(j.$y, 4, "0");
              case "M":
                return he + 1;
              case "MM":
                return te.s(he + 1, 2, "0");
              case "MMM":
                return be(I.monthsShort, he, ye, 3);
              case "MMMM":
                return be(ye, he);
              case "D":
                return j.$D;
              case "DD":
                return te.s(j.$D, 2, "0");
              case "d":
                return String(j.$W);
              case "dd":
                return be(I.weekdaysMin, j.$W, ce, 2);
              case "ddd":
                return be(I.weekdaysShort, j.$W, ce, 3);
              case "dddd":
                return ce[j.$W];
              case "H":
                return String(L);
              case "HH":
                return te.s(L, 2, "0");
              case "h":
                return we(1);
              case "hh":
                return we(2);
              case "a":
                return Ce(L, ue, !0);
              case "A":
                return Ce(L, ue, !1);
              case "m":
                return String(ue);
              case "mm":
                return te.s(ue, 2, "0");
              case "s":
                return String(j.$s);
              case "ss":
                return te.s(j.$s, 2, "0");
              case "SSS":
                return te.s(j.$ms, 3, "0");
              case "Z":
                return M;
            }
            return null;
          }(_e) || M.replace(":", "");
        });
      }, U.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, U.diff = function(K, j, I) {
        var X, M = this, L = te.p(j), ue = Y(K), he = (ue.utcOffset() - this.utcOffset()) * r, ce = this - ue, ye = function() {
          return te.m(M, ue);
        };
        switch (L) {
          case w:
            X = ye() / 12;
            break;
          case m:
            X = ye();
            break;
          case x:
            X = ye() / 3;
            break;
          case h:
            X = (ce - he) / 6048e5;
            break;
          case p:
            X = (ce - he) / 864e5;
            break;
          case d:
            X = ce / a;
            break;
          case u:
            X = ce / r;
            break;
          case l:
            X = ce / n;
            break;
          default:
            X = ce;
        }
        return I ? X : te.a(X);
      }, U.daysInMonth = function() {
        return this.endOf(m).$D;
      }, U.$locale = function() {
        return Z[this.$L];
      }, U.locale = function(K, j) {
        if (!K) return this.$L;
        var I = this.clone(), X = V(K, j, !0);
        return X && (I.$L = X), I;
      }, U.clone = function() {
        return te.w(this.$d, this);
      }, U.toDate = function() {
        return new Date(this.valueOf());
      }, U.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, U.toISOString = function() {
        return this.$d.toISOString();
      }, U.toString = function() {
        return this.$d.toUTCString();
      }, B;
    }(), z = R.prototype;
    return Y.prototype = z, [["$ms", o], ["$s", l], ["$m", u], ["$H", d], ["$W", p], ["$M", m], ["$y", w], ["$D", O]].forEach(function(B) {
      z[B[1]] = function(U) {
        return this.$g(U, B[0], B[1]);
      };
    }), Y.extend = function(B, U) {
      return B.$i || (B(U, R, Y), B.$i = !0), Y;
    }, Y.locale = V, Y.isDayjs = ne, Y.unix = function(B) {
      return Y(1e3 * B);
    }, Y.en = Z[S], Y.Ls = Z, Y.p = {}, Y;
  });
})(mb);
var hW = mb.exports;
const Ut = /* @__PURE__ */ el(hW);
var We;
(function(e) {
  e[e.AM = 0] = "AM", e[e.PM = 1] = "PM";
})(We || (We = {}));
var zt;
(function(e) {
  e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY";
})(zt || (zt = {}));
var Nn;
(function(e) {
  e[e.JANUARY = 1] = "JANUARY", e[e.FEBRUARY = 2] = "FEBRUARY", e[e.MARCH = 3] = "MARCH", e[e.APRIL = 4] = "APRIL", e[e.MAY = 5] = "MAY", e[e.JUNE = 6] = "JUNE", e[e.JULY = 7] = "JULY", e[e.AUGUST = 8] = "AUGUST", e[e.SEPTEMBER = 9] = "SEPTEMBER", e[e.OCTOBER = 10] = "OCTOBER", e[e.NOVEMBER = 11] = "NOVEMBER", e[e.DECEMBER = 12] = "DECEMBER";
})(Nn || (Nn = {}));
function kg(e, t) {
  t = t.add(1, "day"), Hn(e, t), qr(e, t);
}
function mW(e, t) {
  t = t.add(1, "day"), Ua(e, t), qr(e, t);
}
function Hn(e, t) {
  e.assign("day", t.date()), e.assign("month", t.month() + 1), e.assign("year", t.year());
}
function gb(e, t) {
  e.assign("hour", t.hour()), e.assign("minute", t.minute()), e.assign("second", t.second()), e.assign("millisecond", t.millisecond()), e.get("hour") < 12 ? e.assign("meridiem", We.AM) : e.assign("meridiem", We.PM);
}
function Ua(e, t) {
  e.imply("day", t.date()), e.imply("month", t.month() + 1), e.imply("year", t.year());
}
function qr(e, t) {
  e.imply("hour", t.hour()), e.imply("minute", t.minute()), e.imply("second", t.second()), e.imply("millisecond", t.millisecond());
}
const gW = {
  ACDT: 630,
  ACST: 570,
  ADT: -180,
  AEDT: 660,
  AEST: 600,
  AFT: 270,
  AKDT: -480,
  AKST: -540,
  ALMT: 360,
  AMST: -180,
  AMT: -240,
  ANAST: 720,
  ANAT: 720,
  AQTT: 300,
  ART: -180,
  AST: -240,
  AWDT: 540,
  AWST: 480,
  AZOST: 0,
  AZOT: -60,
  AZST: 300,
  AZT: 240,
  BNT: 480,
  BOT: -240,
  BRST: -120,
  BRT: -180,
  BST: 60,
  BTT: 360,
  CAST: 480,
  CAT: 120,
  CCT: 390,
  CDT: -300,
  CEST: 120,
  CET: {
    timezoneOffsetDuringDst: 2 * 60,
    timezoneOffsetNonDst: 60,
    dstStart: (e) => Pg(e, Nn.MARCH, zt.SUNDAY, 2),
    dstEnd: (e) => Pg(e, Nn.OCTOBER, zt.SUNDAY, 3)
  },
  CHADT: 825,
  CHAST: 765,
  CKT: -600,
  CLST: -180,
  CLT: -240,
  COT: -300,
  CST: -360,
  CT: {
    timezoneOffsetDuringDst: -5 * 60,
    timezoneOffsetNonDst: -6 * 60,
    dstStart: (e) => Fr(e, Nn.MARCH, zt.SUNDAY, 2, 2),
    dstEnd: (e) => Fr(e, Nn.NOVEMBER, zt.SUNDAY, 1, 2)
  },
  CVT: -60,
  CXT: 420,
  ChST: 600,
  DAVT: 420,
  EASST: -300,
  EAST: -360,
  EAT: 180,
  ECT: -300,
  EDT: -240,
  EEST: 180,
  EET: 120,
  EGST: 0,
  EGT: -60,
  EST: -300,
  ET: {
    timezoneOffsetDuringDst: -4 * 60,
    timezoneOffsetNonDst: -5 * 60,
    dstStart: (e) => Fr(e, Nn.MARCH, zt.SUNDAY, 2, 2),
    dstEnd: (e) => Fr(e, Nn.NOVEMBER, zt.SUNDAY, 1, 2)
  },
  FJST: 780,
  FJT: 720,
  FKST: -180,
  FKT: -240,
  FNT: -120,
  GALT: -360,
  GAMT: -540,
  GET: 240,
  GFT: -180,
  GILT: 720,
  GMT: 0,
  GST: 240,
  GYT: -240,
  HAA: -180,
  HAC: -300,
  HADT: -540,
  HAE: -240,
  HAP: -420,
  HAR: -360,
  HAST: -600,
  HAT: -90,
  HAY: -480,
  HKT: 480,
  HLV: -210,
  HNA: -240,
  HNC: -360,
  HNE: -300,
  HNP: -480,
  HNR: -420,
  HNT: -150,
  HNY: -540,
  HOVT: 420,
  ICT: 420,
  IDT: 180,
  IOT: 360,
  IRDT: 270,
  IRKST: 540,
  IRKT: 540,
  IRST: 210,
  IST: 330,
  JST: 540,
  KGT: 360,
  KRAST: 480,
  KRAT: 480,
  KST: 540,
  KUYT: 240,
  LHDT: 660,
  LHST: 630,
  LINT: 840,
  MAGST: 720,
  MAGT: 720,
  MART: -510,
  MAWT: 300,
  MDT: -360,
  MESZ: 120,
  MEZ: 60,
  MHT: 720,
  MMT: 390,
  MSD: 240,
  MSK: 180,
  MST: -420,
  MT: {
    timezoneOffsetDuringDst: -6 * 60,
    timezoneOffsetNonDst: -7 * 60,
    dstStart: (e) => Fr(e, Nn.MARCH, zt.SUNDAY, 2, 2),
    dstEnd: (e) => Fr(e, Nn.NOVEMBER, zt.SUNDAY, 1, 2)
  },
  MUT: 240,
  MVT: 300,
  MYT: 480,
  NCT: 660,
  NDT: -90,
  NFT: 690,
  NOVST: 420,
  NOVT: 360,
  NPT: 345,
  NST: -150,
  NUT: -660,
  NZDT: 780,
  NZST: 720,
  OMSST: 420,
  OMST: 420,
  PDT: -420,
  PET: -300,
  PETST: 720,
  PETT: 720,
  PGT: 600,
  PHOT: 780,
  PHT: 480,
  PKT: 300,
  PMDT: -120,
  PMST: -180,
  PONT: 660,
  PST: -480,
  PT: {
    timezoneOffsetDuringDst: -7 * 60,
    timezoneOffsetNonDst: -8 * 60,
    dstStart: (e) => Fr(e, Nn.MARCH, zt.SUNDAY, 2, 2),
    dstEnd: (e) => Fr(e, Nn.NOVEMBER, zt.SUNDAY, 1, 2)
  },
  PWT: 540,
  PYST: -180,
  PYT: -240,
  RET: 240,
  SAMT: 240,
  SAST: 120,
  SBT: 660,
  SCT: 240,
  SGT: 480,
  SRT: -180,
  SST: -660,
  TAHT: -600,
  TFT: 300,
  TJT: 300,
  TKT: 780,
  TLT: 540,
  TMT: 300,
  TVT: 720,
  ULAT: 480,
  UTC: 0,
  UYST: -120,
  UYT: -180,
  UZT: 300,
  VET: -210,
  VLAST: 660,
  VLAT: 660,
  VUT: 660,
  WAST: 120,
  WAT: 60,
  WEST: 60,
  WESZ: 60,
  WET: 0,
  WEZ: 0,
  WFT: 720,
  WGST: -120,
  WGT: -180,
  WIB: 420,
  WIT: 540,
  WITA: 480,
  WST: 780,
  WT: 0,
  YAKST: 600,
  YAKT: 600,
  YAPT: 600,
  YEKST: 360,
  YEKT: 360
};
function Fr(e, t, n, r, a = 0) {
  let o = 0, l = 0;
  for (; l < r; )
    o++, new Date(e, t - 1, o).getDay() === n && l++;
  return new Date(e, t - 1, o, a);
}
function Pg(e, t, n, r = 0) {
  const a = n === 0 ? 7 : n, o = new Date(e, t - 1 + 1, 1, 12), l = o.getDay() === 0 ? 7 : o.getDay();
  let u;
  return l === a ? u = 7 : l < a ? u = 7 + l - a : u = l - a, o.setDate(o.getDate() - u), new Date(e, t - 1, o.getDate(), r);
}
function vb(e, t, n = {}) {
  if (e == null)
    return null;
  if (typeof e == "number")
    return e;
  const r = n[e] ?? gW[e];
  return r == null ? null : typeof r == "number" ? r : t == null ? null : Ut(t).isAfter(r.dstStart(t.getFullYear())) && !Ut(t).isAfter(r.dstEnd(t.getFullYear())) ? r.timezoneOffsetDuringDst : r.timezoneOffsetNonDst;
}
Ut.extend(pW);
class df {
  constructor(t) {
    t = t ?? /* @__PURE__ */ new Date(), t instanceof Date ? this.instant = t : (this.instant = t.instant ?? /* @__PURE__ */ new Date(), this.timezoneOffset = vb(t.timezone, this.instant));
  }
  getDateWithAdjustedTimezone() {
    return new Date(this.instant.getTime() + this.getSystemTimezoneAdjustmentMinute(this.instant) * 6e4);
  }
  getSystemTimezoneAdjustmentMinute(t, n) {
    (!t || t.getTime() < 0) && (t = /* @__PURE__ */ new Date());
    const r = -t.getTimezoneOffset(), a = n ?? this.timezoneOffset ?? r;
    return r - a;
  }
}
class yt {
  constructor(t, n) {
    if (this._tags = /* @__PURE__ */ new Set(), this.reference = t, this.knownValues = {}, this.impliedValues = {}, n)
      for (const a in n)
        this.knownValues[a] = n[a];
    const r = Ut(t.instant);
    this.imply("day", r.date()), this.imply("month", r.month() + 1), this.imply("year", r.year()), this.imply("hour", 12), this.imply("minute", 0), this.imply("second", 0), this.imply("millisecond", 0);
  }
  get(t) {
    return t in this.knownValues ? this.knownValues[t] : t in this.impliedValues ? this.impliedValues[t] : null;
  }
  isCertain(t) {
    return t in this.knownValues;
  }
  getCertainComponents() {
    return Object.keys(this.knownValues);
  }
  imply(t, n) {
    return t in this.knownValues ? this : (this.impliedValues[t] = n, this);
  }
  assign(t, n) {
    return this.knownValues[t] = n, delete this.impliedValues[t], this;
  }
  delete(t) {
    delete this.knownValues[t], delete this.impliedValues[t];
  }
  clone() {
    const t = new yt(this.reference);
    t.knownValues = {}, t.impliedValues = {};
    for (const n in this.knownValues)
      t.knownValues[n] = this.knownValues[n];
    for (const n in this.impliedValues)
      t.impliedValues[n] = this.impliedValues[n];
    return t;
  }
  isOnlyDate() {
    return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second");
  }
  isOnlyTime() {
    return !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month") && !this.isCertain("year");
  }
  isOnlyWeekdayComponent() {
    return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
  }
  isDateWithUnknownYear() {
    return this.isCertain("month") && !this.isCertain("year");
  }
  isValidDate() {
    const t = this.dateWithoutTimezoneAdjustment();
    return !(t.getFullYear() !== this.get("year") || t.getMonth() !== this.get("month") - 1 || t.getDate() !== this.get("day") || this.get("hour") != null && t.getHours() != this.get("hour") || this.get("minute") != null && t.getMinutes() != this.get("minute"));
  }
  toString() {
    return `[ParsingComponents {
            tags: ${JSON.stringify(Array.from(this._tags).sort())}, 
            knownValues: ${JSON.stringify(this.knownValues)}, 
            impliedValues: ${JSON.stringify(this.impliedValues)}}, 
            reference: ${JSON.stringify(this.reference)}]`;
  }
  dayjs() {
    return Ut(this.date());
  }
  date() {
    const t = this.dateWithoutTimezoneAdjustment(), n = this.reference.getSystemTimezoneAdjustmentMinute(t, this.get("timezoneOffset"));
    return new Date(t.getTime() + n * 6e4);
  }
  addTag(t) {
    return this._tags.add(t), this;
  }
  addTags(t) {
    for (const n of t)
      this._tags.add(n);
    return this;
  }
  tags() {
    return new Set(this._tags);
  }
  dateWithoutTimezoneAdjustment() {
    const t = new Date(this.get("year"), this.get("month") - 1, this.get("day"), this.get("hour"), this.get("minute"), this.get("second"), this.get("millisecond"));
    return t.setFullYear(this.get("year")), t;
  }
  static createRelativeFromReference(t, n) {
    let r = Ut(t.instant);
    for (const o in n)
      r = r.add(n[o], o);
    const a = new yt(t);
    return n.hour || n.minute || n.second ? (gb(a, r), Hn(a, r), t.timezoneOffset !== null && a.assign("timezoneOffset", -t.instant.getTimezoneOffset())) : (qr(a, r), t.timezoneOffset !== null && a.imply("timezoneOffset", -t.instant.getTimezoneOffset()), n.d ? (a.assign("day", r.date()), a.assign("month", r.month() + 1), a.assign("year", r.year())) : n.week ? (a.assign("day", r.date()), a.assign("month", r.month() + 1), a.assign("year", r.year()), a.imply("weekday", r.day())) : (a.imply("day", r.date()), n.month ? (a.assign("month", r.month() + 1), a.assign("year", r.year())) : (a.imply("month", r.month() + 1), n.year ? a.assign("year", r.year()) : a.imply("year", r.year())))), a;
  }
}
class ha {
  constructor(t, n, r, a, o) {
    this.reference = t, this.refDate = t.instant, this.index = n, this.text = r, this.start = a || new yt(t), this.end = o;
  }
  clone() {
    const t = new ha(this.reference, this.index, this.text);
    return t.start = this.start ? this.start.clone() : null, t.end = this.end ? this.end.clone() : null, t;
  }
  date() {
    return this.start.date();
  }
  tags() {
    const t = new Set(this.start.tags());
    if (this.end)
      for (const n of this.end.tags())
        t.add(n);
    return t;
  }
  toString() {
    const t = Array.from(this.tags()).sort();
    return `[ParsingResult {index: ${this.index}, text: '${this.text}', tags: ${JSON.stringify(t)} ...}]`;
  }
}
function ff(e, t, n = "\\s{0,5},?\\s{0,5}") {
  const r = t.replace(/\((?!\?)/g, "(?:");
  return `${e}${r}(?:${n}${r}){0,10}`;
}
function vW(e) {
  let t;
  return e instanceof Array ? t = [...e] : e instanceof Map ? t = Array.from(e.keys()) : t = Object.keys(e), t;
}
function rn(e) {
  return `(?:${vW(e).sort((n, r) => r.length - n.length).join("|").replace(/\./g, "\\.")})`;
}
function pf(e) {
  return e < 100 && (e > 50 ? e = e + 1900 : e = e + 2e3), e;
}
function so(e, t, n) {
  const r = Ut(e);
  let a = r;
  a = a.month(n - 1), a = a.date(t), a = a.year(r.year());
  const o = a.add(1, "y"), l = a.add(-1, "y");
  return Math.abs(o.diff(r)) < Math.abs(a.diff(r)) ? a = o : Math.abs(l.diff(r)) < Math.abs(a.diff(r)) && (a = l), a.year();
}
const yb = {
  sunday: 0,
  sun: 0,
  "sun.": 0,
  monday: 1,
  mon: 1,
  "mon.": 1,
  tuesday: 2,
  tue: 2,
  "tue.": 2,
  wednesday: 3,
  wed: 3,
  "wed.": 3,
  thursday: 4,
  thurs: 4,
  "thurs.": 4,
  thur: 4,
  "thur.": 4,
  thu: 4,
  "thu.": 4,
  friday: 5,
  fri: 5,
  "fri.": 5,
  saturday: 6,
  sat: 6,
  "sat.": 6
}, xb = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
}, Zr = {
  ...xb,
  jan: 1,
  "jan.": 1,
  feb: 2,
  "feb.": 2,
  mar: 3,
  "mar.": 3,
  apr: 4,
  "apr.": 4,
  jun: 6,
  "jun.": 6,
  jul: 7,
  "jul.": 7,
  aug: 8,
  "aug.": 8,
  sep: 9,
  "sep.": 9,
  sept: 9,
  "sept.": 9,
  oct: 10,
  "oct.": 10,
  nov: 11,
  "nov.": 11,
  dec: 12,
  "dec.": 12
}, Bc = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12
}, Hc = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
  seventh: 7,
  eighth: 8,
  ninth: 9,
  tenth: 10,
  eleventh: 11,
  twelfth: 12,
  thirteenth: 13,
  fourteenth: 14,
  fifteenth: 15,
  sixteenth: 16,
  seventeenth: 17,
  eighteenth: 18,
  nineteenth: 19,
  twentieth: 20,
  "twenty first": 21,
  "twenty-first": 21,
  "twenty second": 22,
  "twenty-second": 22,
  "twenty third": 23,
  "twenty-third": 23,
  "twenty fourth": 24,
  "twenty-fourth": 24,
  "twenty fifth": 25,
  "twenty-fifth": 25,
  "twenty sixth": 26,
  "twenty-sixth": 26,
  "twenty seventh": 27,
  "twenty-seventh": 27,
  "twenty eighth": 28,
  "twenty-eighth": 28,
  "twenty ninth": 29,
  "twenty-ninth": 29,
  thirtieth: 30,
  "thirty first": 31,
  "thirty-first": 31
}, bb = {
  second: "second",
  seconds: "second",
  minute: "minute",
  minutes: "minute",
  hour: "hour",
  hours: "hour",
  day: "d",
  days: "d",
  week: "week",
  weeks: "week",
  month: "month",
  months: "month",
  quarter: "quarter",
  quarters: "quarter",
  year: "year",
  years: "year"
}, ml = {
  s: "second",
  sec: "second",
  second: "second",
  seconds: "second",
  m: "minute",
  min: "minute",
  mins: "minute",
  minute: "minute",
  minutes: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  hour: "hour",
  hours: "hour",
  d: "d",
  day: "d",
  days: "d",
  w: "w",
  week: "week",
  weeks: "week",
  mo: "month",
  mon: "month",
  mos: "month",
  month: "month",
  months: "month",
  qtr: "quarter",
  quarter: "quarter",
  quarters: "quarter",
  y: "year",
  yr: "year",
  year: "year",
  years: "year",
  ...bb
}, wb = `(?:${rn(Bc)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
function yW(e) {
  const t = e.toLowerCase();
  return Bc[t] !== void 0 ? Bc[t] : t === "a" || t === "an" || t == "the" ? 1 : t.match(/few/) ? 3 : t.match(/half/) ? 0.5 : t.match(/couple/) ? 2 : t.match(/several/) ? 7 : parseFloat(t);
}
const zs = `(?:${rn(Hc)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function Bs(e) {
  let t = e.toLowerCase();
  return Hc[t] !== void 0 ? Hc[t] : (t = t.replace(/(?:st|nd|rd|th)$/i, ""), parseInt(t));
}
const gl = "(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])";
function vl(e) {
  if (/BE/i.test(e))
    return e = e.replace(/BE/i, ""), parseInt(e) - 543;
  if (/BCE?/i.test(e))
    return e = e.replace(/BCE?/i, ""), -parseInt(e);
  if (/(AD|CE)/i.test(e))
    return e = e.replace(/(AD|CE)/i, ""), parseInt(e);
  const t = parseInt(e);
  return pf(t);
}
const _b = `(${wb})\\s{0,3}(${rn(ml)})`, Ag = new RegExp(_b, "i"), xW = `(${wb})\\s{0,3}(${rn(bb)})`, Eb = "\\s{0,5},?(?:\\s*and)?\\s{0,5}", lo = ff("(?:(?:about|around)\\s{0,3})?", _b, Eb), yl = ff("(?:(?:about|around)\\s{0,3})?", xW, Eb);
function ma(e) {
  const t = {};
  let n = e, r = Ag.exec(n);
  for (; r; )
    bW(t, r), n = n.substring(r[0].length).trim(), r = Ag.exec(n);
  return Object.keys(t).length == 0 ? null : t;
}
function bW(e, t) {
  if (t[0].match(/^[a-zA-Z]+$/))
    return;
  const n = yW(t[1]), r = ml[t[2].toLowerCase()];
  e[r] = n;
}
class $t {
  constructor() {
    this.cachedInnerPattern = null, this.cachedPattern = null;
  }
  innerPatternHasChange(t, n) {
    return this.innerPattern(t) !== n;
  }
  patternLeftBoundary() {
    return "(\\W|^)";
  }
  pattern(t) {
    return this.cachedInnerPattern && !this.innerPatternHasChange(t, this.cachedInnerPattern) ? this.cachedPattern : (this.cachedInnerPattern = this.innerPattern(t), this.cachedPattern = new RegExp(`${this.patternLeftBoundary()}${this.cachedInnerPattern.source}`, this.cachedInnerPattern.flags), this.cachedPattern);
  }
  extract(t, n) {
    const r = n[1] ?? "";
    n.index = n.index + r.length, n[0] = n[0].substring(r.length);
    for (let a = 2; a < n.length; a++)
      n[a - 1] = n[a];
    return this.innerExtract(t, n);
  }
}
const wW = new RegExp(`(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${lo})(?=\\W|$)`, "i"), _W = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${lo})(?=\\W|$)`, "i"), EW = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${yl})(?=\\W|$)`, "i");
class CW extends $t {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern(t) {
    return this.strictMode ? EW : t.option.forwardDate ? wW : _W;
  }
  innerExtract(t, n) {
    if (n[0].match(/^for\s*the\s*\w+/))
      return null;
    const r = ma(n[1]);
    return r ? yt.createRelativeFromReference(t.reference, r) : null;
  }
}
const TW = new RegExp(`(?:on\\s{0,3})?(${zs})(?:\\s{0,3}(?:to|\\-|\\–|until|through|till)?\\s{0,3}(${zs}))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(${rn(Zr)})(?:(?:-|/|,?\\s{0,3})(${gl}(?!\\w)))?(?=\\W|$)`, "i"), Ig = 1, Mg = 2, OW = 3, Ng = 4;
class SW extends $t {
  innerPattern() {
    return TW;
  }
  innerExtract(t, n) {
    const r = t.createParsingResult(n.index, n[0]), a = Zr[n[OW].toLowerCase()], o = Bs(n[Ig]);
    if (o > 31)
      return n.index = n.index + n[Ig].length, null;
    if (r.start.assign("month", a), r.start.assign("day", o), n[Ng]) {
      const l = vl(n[Ng]);
      r.start.assign("year", l);
    } else {
      const l = so(t.refDate, o, a);
      r.start.imply("year", l);
    }
    if (n[Mg]) {
      const l = Bs(n[Mg]);
      r.end = r.start.clone(), r.end.assign("day", l);
    }
    return r;
  }
}
const DW = new RegExp(`(${rn(Zr)})(?:-|/|\\s*,?\\s*)(${zs})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${zs})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${gl}))?(?=\\W|$)(?!\\:\\d)`, "i"), kW = 1, jg = 2, lc = 3, uc = 4;
class PW extends $t {
  constructor(t) {
    super(), this.shouldSkipYearLikeDate = t;
  }
  innerPattern() {
    return DW;
  }
  innerExtract(t, n) {
    const r = Zr[n[kW].toLowerCase()], a = Bs(n[jg]);
    if (a > 31 || this.shouldSkipYearLikeDate && !n[lc] && !n[uc] && n[jg].match(/^2[0-5]$/))
      return null;
    const o = t.createParsingComponents({
      day: a,
      month: r
    }).addTag("parser/ENMonthNameMiddleEndianParser");
    if (n[uc]) {
      const d = vl(n[uc]);
      o.assign("year", d);
    } else {
      const d = so(t.refDate, a, r);
      o.imply("year", d);
    }
    if (!n[lc])
      return o;
    const l = Bs(n[lc]), u = t.createParsingResult(n.index, n[0]);
    return u.start = o, u.end = o.clone(), u.end.assign("day", l), u;
  }
}
const AW = new RegExp(`((?:in)\\s*)?(${rn(Zr)})\\s*(?:[,-]?\\s*(${gl})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"), IW = 1, MW = 2, Rg = 3;
class NW extends $t {
  innerPattern() {
    return AW;
  }
  innerExtract(t, n) {
    const r = n[MW].toLowerCase();
    if (n[0].length <= 3 && !xb[r])
      return null;
    const a = t.createParsingResult(n.index + (n[IW] || "").length, n.index + n[0].length);
    a.start.imply("day", 1), a.start.addTag("parser/ENMonthNameParser");
    const o = Zr[r];
    if (a.start.assign("month", o), n[Rg]) {
      const l = vl(n[Rg]);
      a.start.assign("year", l);
    } else {
      const l = so(t.refDate, 1, o);
      a.start.imply("year", l);
    }
    return a;
  }
}
const jW = new RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${rn(Zr)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"), RW = 1, $W = 2, $g = 3, FW = 4;
class LW extends $t {
  constructor(t) {
    super(), this.strictMonthDateOrder = t;
  }
  innerPattern() {
    return jW;
  }
  innerExtract(t, n) {
    const r = parseInt(n[RW]);
    let a = parseInt(n[FW]), o = n[$g] ? parseInt(n[$g]) : Zr[n[$W].toLowerCase()];
    if (o < 1 || o > 12) {
      if (this.strictMonthDateOrder)
        return null;
      a >= 1 && a <= 12 && ([o, a] = [a, o]);
    }
    return a < 1 || a > 31 ? null : {
      day: a,
      month: o,
      year: r
    };
  }
}
const WW = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i"), VW = 1, zW = 2;
class BW extends $t {
  innerPattern() {
    return WW;
  }
  innerExtract(t, n) {
    const r = parseInt(n[zW]), a = parseInt(n[VW]);
    return t.createParsingComponents().imply("day", 1).assign("month", a).assign("year", r);
  }
}
function HW(e, t, n, r) {
  return new RegExp(`${e}${t}(\\d{1,4})(?:(?:\\.|:|：)(\\d{1,2})(?:(?::|：)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${n}`, r);
}
function UW(e, t) {
  return new RegExp(`^(${e})(\\d{1,4})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${t}`, "i");
}
const Fg = 2, Hi = 3, hs = 4, ms = 5, La = 6;
class Cb {
  constructor(t = !1) {
    this.cachedPrimaryPrefix = null, this.cachedPrimarySuffix = null, this.cachedPrimaryTimePattern = null, this.cachedFollowingPhase = null, this.cachedFollowingSuffix = null, this.cachedFollowingTimePatten = null, this.strictMode = t;
  }
  patternFlags() {
    return "i";
  }
  primaryPatternLeftBoundary() {
    return "(^|\\s|T|\\b)";
  }
  primarySuffix() {
    return "(?!/)(?=\\W|$)";
  }
  followingSuffix() {
    return "(?!/)(?=\\W|$)";
  }
  pattern(t) {
    return this.getPrimaryTimePatternThroughCache();
  }
  extract(t, n) {
    const r = this.extractPrimaryTimeComponents(t, n);
    if (!r)
      return n[0].match(/^\d{4}/) ? (n.index += 4, null) : (n.index += n[0].length, null);
    const a = n.index + n[1].length, o = n[0].substring(n[1].length), l = t.createParsingResult(a, o, r);
    n.index += n[0].length;
    const u = t.text.substring(n.index), p = this.getFollowingTimePatternThroughCache().exec(u);
    return o.match(/^\d{3,4}/) && p && (p[0].match(/^\s*([+-])\s*\d{2,4}$/) || p[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/)) ? null : !p || p[0].match(/^\s*([+-])\s*\d{3,4}$/) ? this.checkAndReturnWithoutFollowingPattern(l) : (l.end = this.extractFollowingTimeComponents(t, p, l), l.end && (l.text += p[0]), this.checkAndReturnWithFollowingPattern(l));
  }
  extractPrimaryTimeComponents(t, n, r = !1) {
    const a = t.createParsingComponents();
    let o = 0, l = null, u = parseInt(n[Fg]);
    if (u > 100) {
      if (this.strictMode || n[Hi] != null)
        return null;
      o = u % 100, u = Math.floor(u / 100);
    }
    if (u > 24)
      return null;
    if (n[Hi] != null) {
      if (n[Hi].length == 1 && !n[La])
        return null;
      o = parseInt(n[Hi]);
    }
    if (o >= 60)
      return null;
    if (u > 12 && (l = We.PM), n[La] != null) {
      if (u > 12)
        return null;
      const d = n[La][0].toLowerCase();
      d == "a" && (l = We.AM, u == 12 && (u = 0)), d == "p" && (l = We.PM, u != 12 && (u += 12));
    }
    if (a.assign("hour", u), a.assign("minute", o), l !== null ? a.assign("meridiem", l) : u < 12 ? a.imply("meridiem", We.AM) : a.imply("meridiem", We.PM), n[ms] != null) {
      const d = parseInt(n[ms].substring(0, 3));
      if (d >= 1e3)
        return null;
      a.assign("millisecond", d);
    }
    if (n[hs] != null) {
      const d = parseInt(n[hs]);
      if (d >= 60)
        return null;
      a.assign("second", d);
    }
    return a;
  }
  extractFollowingTimeComponents(t, n, r) {
    const a = t.createParsingComponents();
    if (n[ms] != null) {
      const d = parseInt(n[ms].substring(0, 3));
      if (d >= 1e3)
        return null;
      a.assign("millisecond", d);
    }
    if (n[hs] != null) {
      const d = parseInt(n[hs]);
      if (d >= 60)
        return null;
      a.assign("second", d);
    }
    let o = parseInt(n[Fg]), l = 0, u = -1;
    if (n[Hi] != null ? l = parseInt(n[Hi]) : o > 100 && (l = o % 100, o = Math.floor(o / 100)), l >= 60 || o > 24)
      return null;
    if (o >= 12 && (u = We.PM), n[La] != null) {
      if (o > 12)
        return null;
      const d = n[La][0].toLowerCase();
      d == "a" && (u = We.AM, o == 12 && (o = 0, a.isCertain("day") || a.imply("day", a.get("day") + 1))), d == "p" && (u = We.PM, o != 12 && (o += 12)), r.start.isCertain("meridiem") || (u == We.AM ? (r.start.imply("meridiem", We.AM), r.start.get("hour") == 12 && r.start.assign("hour", 0)) : (r.start.imply("meridiem", We.PM), r.start.get("hour") != 12 && r.start.assign("hour", r.start.get("hour") + 12)));
    }
    return a.assign("hour", o), a.assign("minute", l), u >= 0 ? a.assign("meridiem", u) : r.start.isCertain("meridiem") && r.start.get("hour") > 12 ? r.start.get("hour") - 12 > o ? a.imply("meridiem", We.AM) : o <= 12 && (a.assign("hour", o + 12), a.assign("meridiem", We.PM)) : o > 12 ? a.imply("meridiem", We.PM) : o <= 12 && a.imply("meridiem", We.AM), a.date().getTime() < r.start.date().getTime() && a.imply("day", a.get("day") + 1), a;
  }
  checkAndReturnWithoutFollowingPattern(t) {
    if (t.text.match(/^\d$/) || t.text.match(/^\d\d\d+$/) || t.text.match(/\d[apAP]$/))
      return null;
    const n = t.text.match(/[^\d:.](\d[\d.]+)$/);
    if (n) {
      const r = n[1];
      if (this.strictMode || r.includes(".") && !r.match(/\d(\.\d{2})+$/) || parseInt(r) > 24)
        return null;
    }
    return t;
  }
  checkAndReturnWithFollowingPattern(t) {
    if (t.text.match(/^\d+-\d+$/))
      return null;
    const n = t.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
    if (n) {
      if (this.strictMode)
        return null;
      const r = n[1], a = n[2];
      if (a.includes(".") && !a.match(/\d(\.\d{2})+$/))
        return null;
      const o = parseInt(a), l = parseInt(r);
      if (o > 24 || l > 24)
        return null;
    }
    return t;
  }
  getPrimaryTimePatternThroughCache() {
    const t = this.primaryPrefix(), n = this.primarySuffix();
    return this.cachedPrimaryPrefix === t && this.cachedPrimarySuffix === n ? this.cachedPrimaryTimePattern : (this.cachedPrimaryTimePattern = HW(this.primaryPatternLeftBoundary(), t, n, this.patternFlags()), this.cachedPrimaryPrefix = t, this.cachedPrimarySuffix = n, this.cachedPrimaryTimePattern);
  }
  getFollowingTimePatternThroughCache() {
    const t = this.followingPhase(), n = this.followingSuffix();
    return this.cachedFollowingPhase === t && this.cachedFollowingSuffix === n ? this.cachedFollowingTimePatten : (this.cachedFollowingTimePatten = UW(t, n), this.cachedFollowingPhase = t, this.cachedFollowingSuffix = n, this.cachedFollowingTimePatten);
  }
}
class YW extends Cb {
  constructor(t) {
    super(t);
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|to|until|through|till|\\?)\\s*";
  }
  primaryPrefix() {
    return "(?:(?:at|from)\\s*)??";
  }
  primarySuffix() {
    return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
  }
  extractPrimaryTimeComponents(t, n) {
    const r = super.extractPrimaryTimeComponents(t, n);
    if (!r)
      return r;
    if (n[0].endsWith("night")) {
      const a = r.get("hour");
      a >= 6 && a < 12 ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", We.PM)) : a < 6 && r.assign("meridiem", We.AM);
    }
    if (n[0].endsWith("afternoon")) {
      r.assign("meridiem", We.PM);
      const a = r.get("hour");
      a >= 0 && a <= 6 && r.assign("hour", r.get("hour") + 12);
    }
    return n[0].endsWith("morning") && (r.assign("meridiem", We.AM), r.get("hour") < 12 && r.assign("hour", r.get("hour"))), r.addTag("parser/ENTimeExpressionParser");
  }
}
function uo(e) {
  const t = {};
  for (const n in e)
    t[n] = -e[n];
  return t;
}
function Tb(e, t) {
  const n = e.clone();
  let r = e.dayjs();
  for (const a in t)
    r = r.add(t[a], a);
  return ("day" in t || "d" in t || "week" in t || "month" in t || "year" in t) && (n.imply("day", r.date()), n.imply("month", r.month() + 1), n.imply("year", r.year())), ("second" in t || "minute" in t || "hour" in t) && (n.imply("second", r.second()), n.imply("minute", r.minute()), n.imply("hour", r.hour())), n;
}
const qW = new RegExp(`(${lo})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"), KW = new RegExp(`(${yl})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class GW extends $t {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern() {
    return this.strictMode ? KW : qW;
  }
  innerExtract(t, n) {
    const r = ma(n[1]);
    if (!r)
      return null;
    const a = uo(r);
    return yt.createRelativeFromReference(t.reference, a);
  }
}
const XW = new RegExp(`(${lo})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"), ZW = new RegExp(`(${yl})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i"), JW = 1;
class QW extends $t {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern() {
    return this.strictMode ? ZW : XW;
  }
  innerExtract(t, n) {
    const r = ma(n[JW]);
    return r ? yt.createRelativeFromReference(t.reference, r) : null;
  }
}
class e3 {
  refine(t, n) {
    return n.filter((r) => this.isValid(t, r));
  }
}
class co {
  refine(t, n) {
    if (n.length < 2)
      return n;
    const r = [];
    let a = n[0], o = null;
    for (let l = 1; l < n.length; l++) {
      o = n[l];
      const u = t.text.substring(a.index + a.text.length, o.index);
      if (!this.shouldMergeResults(u, a, o, t))
        r.push(a), a = o;
      else {
        const d = a, p = o, h = this.mergeResults(u, d, p, t);
        t.debug(() => {
          console.log(`${this.constructor.name} merged ${d} and ${p} into ${h}`);
        }), a = h;
      }
    }
    return a != null && r.push(a), r;
  }
}
class Ob extends co {
  shouldMergeResults(t, n, r) {
    return !n.end && !r.end && t.match(this.patternBetween()) != null;
  }
  mergeResults(t, n, r) {
    if (!n.start.isOnlyWeekdayComponent() && !r.start.isOnlyWeekdayComponent() && (r.start.getCertainComponents().forEach((o) => {
      n.start.isCertain(o) || n.start.imply(o, r.start.get(o));
    }), n.start.getCertainComponents().forEach((o) => {
      r.start.isCertain(o) || r.start.imply(o, n.start.get(o));
    })), n.start.date().getTime() > r.start.date().getTime()) {
      let o = n.start.dayjs(), l = r.start.dayjs();
      r.start.isOnlyWeekdayComponent() && l.add(7, "days").isAfter(o) ? (l = l.add(7, "days"), r.start.imply("day", l.date()), r.start.imply("month", l.month() + 1), r.start.imply("year", l.year())) : n.start.isOnlyWeekdayComponent() && o.add(-7, "days").isBefore(l) ? (o = o.add(-7, "days"), n.start.imply("day", o.date()), n.start.imply("month", o.month() + 1), n.start.imply("year", o.year())) : r.start.isDateWithUnknownYear() && l.add(1, "years").isAfter(o) ? (l = l.add(1, "years"), r.start.imply("year", l.year())) : n.start.isDateWithUnknownYear() && o.add(-1, "years").isBefore(l) ? (o = o.add(-1, "years"), n.start.imply("year", o.year())) : [r, n] = [n, r];
    }
    const a = n.clone();
    return a.start = n.start, a.end = r.start, a.index = Math.min(n.index, r.index), n.index < r.index ? a.text = n.text + t + r.text : a.text = r.text + t + n.text, a;
  }
}
class t3 extends Ob {
  patternBetween() {
    return /^\s*(to|-|–|until|through|till)\s*$/i;
  }
}
function Lg(e, t) {
  const n = e.clone(), r = e.start, a = t.start;
  if (n.start = Wg(r, a), e.end != null || t.end != null) {
    const o = e.end == null ? e.start : e.end, l = t.end == null ? t.start : t.end, u = Wg(o, l);
    if (e.end == null && u.date().getTime() < n.start.date().getTime()) {
      const d = u.dayjs().add(1, "day");
      u.isCertain("day") ? Hn(u, d) : Ua(u, d);
    }
    n.end = u;
  }
  return n;
}
function Wg(e, t) {
  const n = e.clone();
  return t.isCertain("hour") ? (n.assign("hour", t.get("hour")), n.assign("minute", t.get("minute")), t.isCertain("second") ? (n.assign("second", t.get("second")), t.isCertain("millisecond") ? n.assign("millisecond", t.get("millisecond")) : n.imply("millisecond", t.get("millisecond"))) : (n.imply("second", t.get("second")), n.imply("millisecond", t.get("millisecond")))) : (n.imply("hour", t.get("hour")), n.imply("minute", t.get("minute")), n.imply("second", t.get("second")), n.imply("millisecond", t.get("millisecond"))), t.isCertain("timezoneOffset") && n.assign("timezoneOffset", t.get("timezoneOffset")), t.isCertain("meridiem") ? n.assign("meridiem", t.get("meridiem")) : t.get("meridiem") != null && n.get("meridiem") == null && n.imply("meridiem", t.get("meridiem")), n.get("meridiem") == We.PM && n.get("hour") < 12 && (t.isCertain("hour") ? n.assign("hour", n.get("hour") + 12) : n.imply("hour", n.get("hour") + 12)), n.addTags(e.tags()), n.addTags(t.tags()), n;
}
class Sb extends co {
  shouldMergeResults(t, n, r) {
    return (n.start.isOnlyDate() && r.start.isOnlyTime() || r.start.isOnlyDate() && n.start.isOnlyTime()) && t.match(this.patternBetween()) != null;
  }
  mergeResults(t, n, r) {
    const a = n.start.isOnlyDate() ? Lg(n, r) : Lg(r, n);
    return a.index = n.index, a.text = n.text + t + r.text, a;
  }
}
class Vg extends Sb {
  patternBetween() {
    return new RegExp("^\\s*(T|at|after|before|on|of|,|-|\\.|∙|:)?\\s*$");
  }
}
const n3 = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class r3 {
  constructor(t) {
    this.timezoneOverrides = t;
  }
  refine(t, n) {
    const r = t.option.timezones ?? {};
    return n.forEach((a) => {
      const o = t.text.substring(a.index + a.text.length), l = n3.exec(o);
      if (!l)
        return;
      const u = l[1].toUpperCase(), d = a.start.date() ?? a.refDate ?? /* @__PURE__ */ new Date(), p = { ...this.timezoneOverrides, ...r }, h = vb(u, d, p);
      if (h == null)
        return;
      t.debug(() => {
        console.log(`Extracting timezone: '${u}' into: ${h} for: ${a.start}`);
      });
      const m = a.start.get("timezoneOffset");
      m !== null && h != m && (a.start.isCertain("timezoneOffset") || u != l[1]) || a.start.isOnlyDate() && u != l[1] || (a.text += l[0], a.start.isCertain("timezoneOffset") || a.start.assign("timezoneOffset", h), a.end != null && !a.end.isCertain("timezoneOffset") && a.end.assign("timezoneOffset", h));
    }), n;
  }
}
const i3 = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i"), a3 = 1, o3 = 2, s3 = 3;
class l3 {
  refine(t, n) {
    return n.forEach(function(r) {
      if (r.start.isCertain("timezoneOffset"))
        return;
      const a = t.text.substring(r.index + r.text.length), o = i3.exec(a);
      if (!o)
        return;
      t.debug(() => {
        console.log(`Extracting timezone: '${o[0]}' into : ${r}`);
      });
      const l = parseInt(o[o3]), u = parseInt(o[s3] || "0");
      let d = l * 60 + u;
      d > 14 * 60 || (o[a3] === "-" && (d = -d), r.end != null && r.end.assign("timezoneOffset", d), r.start.assign("timezoneOffset", d), r.text += o[0]);
    }), n;
  }
}
class Uc {
  refine(t, n) {
    if (n.length < 2)
      return n;
    const r = [];
    let a = n[0];
    for (let o = 1; o < n.length; o++) {
      const l = n[o];
      if (l.index >= a.index + a.text.length) {
        r.push(a), a = l;
        continue;
      }
      let u = null, d = null;
      l.text.length > a.text.length ? (u = l, d = a) : (u = a, d = l), t.debug(() => {
        console.log(`${this.constructor.name} remove ${d} by ${u}`);
      }), a = u;
    }
    return a != null && r.push(a), r;
  }
}
class u3 {
  refine(t, n) {
    return t.option.forwardDate && n.forEach((r) => {
      let a = Ut(t.refDate);
      if (r.start.isOnlyTime() && a.isAfter(r.start.dayjs()) && (a = a.add(1, "day"), Ua(r.start, a), r.end && r.end.isOnlyTime() && (Ua(r.end, a), r.start.dayjs().isAfter(r.end.dayjs()) && (a = a.add(1, "day"), Ua(r.end, a))), t.debug(() => {
        console.log(`${this.constructor.name} adjusted ${r} time result (${r.start})`);
      })), r.start.isOnlyWeekdayComponent() && a.isAfter(r.start.dayjs()) && (a.day() >= r.start.get("weekday") ? a = a.day(r.start.get("weekday") + 7) : a = a.day(r.start.get("weekday")), r.start.imply("day", a.date()), r.start.imply("month", a.month() + 1), r.start.imply("year", a.year()), t.debug(() => {
        console.log(`${this.constructor.name} adjusted ${r} weekday (${r.start})`);
      }), r.end && r.end.isOnlyWeekdayComponent() && (a.day() > r.end.get("weekday") ? a = a.day(r.end.get("weekday") + 7) : a = a.day(r.end.get("weekday")), r.end.imply("day", a.date()), r.end.imply("month", a.month() + 1), r.end.imply("year", a.year()), t.debug(() => {
        console.log(`${this.constructor.name} adjusted ${r} weekday (${r.end})`);
      }))), r.start.isDateWithUnknownYear() && a.isAfter(r.start.dayjs()))
        for (let o = 0; o < 3 && a.isAfter(r.start.dayjs()); o++)
          r.start.imply("year", r.start.get("year") + 1), t.debug(() => {
            console.log(`${this.constructor.name} adjusted ${r} year (${r.start})`);
          }), r.end && !r.end.isCertain("year") && (r.end.imply("year", r.end.get("year") + 1), t.debug(() => {
            console.log(`${this.constructor.name} adjusted ${r} month (${r.start})`);
          }));
    }), n;
  }
}
class c3 extends e3 {
  constructor(t) {
    super(), this.strictMode = t;
  }
  isValid(t, n) {
    return n.text.replace(" ", "").match(/^\d*(\.\d*)?$/) ? (t.debug(() => {
      console.log(`Removing unlikely result '${n.text}'`);
    }), !1) : n.start.isValidDate() ? n.end && !n.end.isValidDate() ? (t.debug(() => {
      console.log(`Removing invalid result: ${n} (${n.end})`);
    }), !1) : this.strictMode ? this.isStrictModeValid(t, n) : !0 : (t.debug(() => {
      console.log(`Removing invalid result: ${n} (${n.start})`);
    }), !1);
  }
  isStrictModeValid(t, n) {
    return n.start.isOnlyWeekdayComponent() ? (t.debug(() => {
      console.log(`(Strict) Removing weekday only component: ${n} (${n.end})`);
    }), !1) : n.start.isOnlyTime() && (!n.start.isCertain("hour") || !n.start.isCertain("minute")) ? (t.debug(() => {
      console.log(`(Strict) Removing uncertain time component: ${n} (${n.end})`);
    }), !1) : !0;
  }
}
const d3 = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)", "i"), f3 = 1, p3 = 2, h3 = 3, zg = 4, m3 = 5, Bg = 6, Hg = 7, g3 = 8, Ug = 9, Yg = 10;
class Db extends $t {
  innerPattern() {
    return d3;
  }
  innerExtract(t, n) {
    const r = t.createParsingComponents({
      year: parseInt(n[f3]),
      month: parseInt(n[p3]),
      day: parseInt(n[h3])
    });
    if (n[zg] != null && (r.assign("hour", parseInt(n[zg])), r.assign("minute", parseInt(n[m3])), n[Bg] != null && r.assign("second", parseInt(n[Bg])), n[Hg] != null && r.assign("millisecond", parseInt(n[Hg])), n[g3] != null)) {
      let a = 0;
      if (n[Ug]) {
        const o = parseInt(n[Ug]);
        let l = 0;
        n[Yg] != null && (l = parseInt(n[Yg])), a = o * 60, a < 0 ? a -= l : a += l;
      }
      r.assign("timezoneOffset", a);
    }
    return r.addTag("parser/ISOFormatParser");
  }
}
class v3 extends co {
  mergeResults(t, n, r) {
    const a = r.clone();
    return a.index = n.index, a.text = n.text + t + a.text, a.start.assign("weekday", n.start.get("weekday")), a.end && a.end.assign("weekday", n.start.get("weekday")), a;
  }
  shouldMergeResults(t, n, r) {
    return n.start.isOnlyWeekdayComponent() && !n.start.isCertain("hour") && r.start.isCertain("day") && t.match(/^,?\s*$/) != null;
  }
}
function kb(e, t = !1) {
  return e.parsers.unshift(new Db()), e.refiners.unshift(new v3()), e.refiners.unshift(new l3()), e.refiners.unshift(new Uc()), e.refiners.push(new r3()), e.refiners.push(new Uc()), e.refiners.push(new u3()), e.refiners.push(new c3(t)), e;
}
function Pb(e) {
  const t = Ut(e.instant), n = new yt(e, {});
  return Hn(n, t), gb(n, t), e.timezoneOffset !== null && n.assign("timezoneOffset", t.utcOffset()), n.addTag("casualReference/now"), n;
}
function Ab(e) {
  const t = Ut(e.instant), n = new yt(e, {});
  return Hn(n, t), qr(n, t), n.addTag("casualReference/today"), n;
}
function y3(e) {
  return x3(e).addTag("casualReference/yesterday");
}
function x3(e, t) {
  return Ib(e, -1);
}
function b3(e) {
  return Ib(e, 1).addTag("casualReference/tomorrow");
}
function Ib(e, t) {
  let n = Ut(e.instant);
  const r = new yt(e, {});
  return n = n.add(t, "day"), Hn(r, n), qr(r, n), r;
}
function w3(e, t = 22) {
  const n = Ut(e.instant), r = new yt(e, {});
  return Hn(r, n), r.imply("hour", t), r.imply("meridiem", We.PM), r.addTag("casualReference/tonight"), r;
}
function _3(e, t = 20) {
  const n = new yt(e, {});
  return n.imply("meridiem", We.PM), n.imply("hour", t), n.addTag("casualReference/evening"), n;
}
function E3(e) {
  const t = new yt(e, {}), n = Ut(e.instant);
  return n.hour() > 2 && mW(t, n), t.assign("hour", 0), t.imply("minute", 0), t.imply("second", 0), t.imply("millisecond", 0), t.addTag("casualReference/midnight"), t;
}
function C3(e, t = 6) {
  const n = new yt(e, {});
  return n.imply("meridiem", We.AM), n.imply("hour", t), n.imply("minute", 0), n.imply("second", 0), n.imply("millisecond", 0), n.addTag("casualReference/morning"), n;
}
function T3(e, t = 15) {
  const n = new yt(e, {});
  return n.imply("meridiem", We.PM), n.imply("hour", t), n.imply("minute", 0), n.imply("second", 0), n.imply("millisecond", 0), n.addTag("casualReference/afternoon"), n;
}
function O3(e) {
  const t = new yt(e, {});
  return t.imply("meridiem", We.AM), t.imply("hour", 12), t.imply("minute", 0), t.imply("second", 0), t.imply("millisecond", 0), t.addTag("casualReference/noon"), t;
}
const S3 = /(now|today|tonight|tomorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class D3 extends $t {
  innerPattern(t) {
    return S3;
  }
  innerExtract(t, n) {
    let r = Ut(t.refDate);
    const a = n[0].toLowerCase();
    let o = t.createParsingComponents();
    switch (a) {
      case "now":
        o = Pb(t.reference);
        break;
      case "today":
        o = Ab(t.reference);
        break;
      case "yesterday":
        o = y3(t.reference);
        break;
      case "tomorrow":
      case "tmr":
      case "tmrw":
        o = b3(t.reference);
        break;
      case "tonight":
        o = w3(t.reference);
        break;
      default:
        a.match(/last\s*night/) && (r.hour() > 6 && (r = r.add(-1, "day")), Hn(o, r), o.imply("hour", 0));
        break;
    }
    return o.addTag("parser/ENCasualDateParser"), o;
  }
}
const k3 = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class P3 extends $t {
  innerPattern() {
    return k3;
  }
  innerExtract(t, n) {
    let r = null;
    switch (n[1].toLowerCase()) {
      case "afternoon":
        r = T3(t.reference);
        break;
      case "evening":
      case "night":
        r = _3(t.reference);
        break;
      case "midnight":
        r = E3(t.reference);
        break;
      case "morning":
        r = C3(t.reference);
        break;
      case "noon":
      case "midday":
        r = O3(t.reference);
        break;
    }
    return r && r.addTag("parser/ENCasualTimeParser"), r;
  }
}
function Mb(e, t, n) {
  const r = e.getDateWithAdjustedTimezone(), a = A3(r, t, n);
  let o = new yt(e);
  return o = Tb(o, { day: a }), o.assign("weekday", t), o;
}
function A3(e, t, n) {
  const r = e.getDay();
  switch (n) {
    case "this":
      return Ts(e, t);
    case "last":
      return Nb(e, t);
    case "next":
      return r == zt.SUNDAY ? t == zt.SUNDAY ? 7 : t : r == zt.SATURDAY ? t == zt.SATURDAY ? 7 : t == zt.SUNDAY ? 8 : 1 + t : t < r && t != zt.SUNDAY ? Ts(e, t) : Ts(e, t) + 7;
  }
  return I3(e, t);
}
function I3(e, t) {
  const n = Nb(e, t), r = Ts(e, t);
  return r < -n ? r : n;
}
function Ts(e, t) {
  const n = e.getDay();
  let r = t - n;
  return r < 0 && (r += 7), r;
}
function Nb(e, t) {
  const n = e.getDay();
  let r = t - n;
  return r >= 0 && (r -= 7), r;
}
const M3 = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${rn(yb)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i"), N3 = 1, j3 = 2, R3 = 3;
class $3 extends $t {
  innerPattern() {
    return M3;
  }
  innerExtract(t, n) {
    const r = n[j3].toLowerCase(), a = yb[r], o = n[N3], l = n[R3];
    let u = o || l;
    u = u || "", u = u.toLowerCase();
    let d = null;
    return u == "last" || u == "past" ? d = "last" : u == "next" ? d = "next" : u == "this" && (d = "this"), Mb(t.reference, a, d);
  }
}
const F3 = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${rn(ml)})(?=\\s*)(?=\\W|$)`, "i"), L3 = 1, W3 = 2;
class V3 extends $t {
  innerPattern() {
    return F3;
  }
  innerExtract(t, n) {
    const r = n[L3].toLowerCase(), a = n[W3].toLowerCase(), o = ml[a];
    if (r == "next" || r.startsWith("after")) {
      const d = {};
      return d[o] = 1, yt.createRelativeFromReference(t.reference, d);
    }
    if (r == "last" || r == "past") {
      const d = {};
      return d[o] = -1, yt.createRelativeFromReference(t.reference, d);
    }
    const l = t.createParsingComponents();
    let u = Ut(t.reference.instant);
    return a.match(/week/i) ? (u = u.add(-u.get("d"), "d"), l.imply("day", u.date()), l.imply("month", u.month() + 1), l.imply("year", u.year())) : a.match(/month/i) ? (u = u.add(-u.date() + 1, "d"), l.imply("day", u.date()), l.assign("year", u.year()), l.assign("month", u.month() + 1)) : a.match(/year/i) && (u = u.add(-u.date() + 1, "d"), u = u.add(-u.month(), "month"), l.imply("day", u.date()), l.imply("month", u.month() + 1), l.assign("year", u.year())), l;
  }
}
const z3 = new RegExp("([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)", "i"), B3 = 1, H3 = 5, qg = 2, Kg = 3, cc = 4;
class jb {
  constructor(t) {
    this.groupNumberMonth = t ? Kg : qg, this.groupNumberDay = t ? qg : Kg;
  }
  pattern() {
    return z3;
  }
  extract(t, n) {
    const r = n.index + n[B3].length, a = n.index + n[0].length - n[H3].length;
    if (r > 0 && t.text.substring(0, r).match("\\d/?$") || a < t.text.length && t.text.substring(a).match("^/?\\d"))
      return;
    const o = t.text.substring(r, a);
    if (o.match(/^\d\.\d$/) || o.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/) || !n[cc] && o.indexOf("/") < 0)
      return;
    const l = t.createParsingResult(r, o);
    let u = parseInt(n[this.groupNumberMonth]), d = parseInt(n[this.groupNumberDay]);
    if ((u < 1 || u > 12) && u > 12)
      if (d >= 1 && d <= 12 && u <= 31)
        [d, u] = [u, d];
      else
        return null;
    if (d < 1 || d > 31)
      return null;
    if (l.start.assign("day", d), l.start.assign("month", u), n[cc]) {
      const p = parseInt(n[cc]), h = pf(p);
      l.start.assign("year", h);
    } else {
      const p = so(t.refDate, d, u);
      l.start.imply("year", p);
    }
    return l;
  }
}
const U3 = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${lo})(?=\\W|$)`, "i"), Y3 = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${yl})(?=\\W|$)`, "i");
class q3 extends $t {
  constructor(t = !0) {
    super(), this.allowAbbreviations = t;
  }
  innerPattern() {
    return this.allowAbbreviations ? U3 : Y3;
  }
  innerExtract(t, n) {
    const r = n[1].toLowerCase();
    let a = ma(n[2]);
    if (!a)
      return null;
    switch (r) {
      case "last":
      case "past":
      case "-":
        a = uo(a);
        break;
    }
    return yt.createRelativeFromReference(t.reference, a);
  }
}
function K3(e) {
  return e.text.match(/^[+-]/i) != null;
}
function Gg(e) {
  return e.text.match(/^-/i) != null;
}
class G3 extends co {
  shouldMergeResults(t, n, r) {
    return t.match(/^\s*$/i) ? K3(r) || Gg(r) : !1;
  }
  mergeResults(t, n, r, a) {
    let o = ma(r.text);
    Gg(r) && (o = uo(o));
    const l = yt.createRelativeFromReference(new df(n.start.date()), o);
    return new ha(n.reference, n.index, `${n.text}${t}${r.text}`, l);
  }
}
function Xg(e) {
  return e.text.match(/\s+(before|from)$/i) != null;
}
function X3(e) {
  return e.text.match(/\s+(after|since)$/i) != null;
}
class Z3 extends co {
  patternBetween() {
    return /^\s*$/i;
  }
  shouldMergeResults(t, n, r) {
    return !t.match(this.patternBetween()) || !Xg(n) && !X3(n) ? !1 : !!r.start.get("day") && !!r.start.get("month") && !!r.start.get("year");
  }
  mergeResults(t, n, r) {
    let a = ma(n.text);
    Xg(n) && (a = uo(a));
    const o = yt.createRelativeFromReference(new df(r.start.date()), a);
    return new ha(r.reference, n.index, `${n.text}${t}${r.text}`, o);
  }
}
const J3 = new RegExp(`^\\s*(${gl})`, "i"), Q3 = 1;
class eV {
  refine(t, n) {
    return n.forEach(function(r) {
      if (!r.start.isDateWithUnknownYear())
        return;
      const a = t.text.substring(r.index + r.text.length), o = J3.exec(a);
      if (!o)
        return;
      t.debug(() => {
        console.log(`Extracting year: '${o[0]}' into : ${r}`);
      });
      const l = vl(o[Q3]);
      r.end != null && r.end.assign("year", l), r.start.assign("year", l), r.text += o[0];
    }), n;
  }
}
class tV {
  createCasualConfiguration(t = !1) {
    const n = this.createConfiguration(!1, t);
    return n.parsers.push(new D3()), n.parsers.push(new P3()), n.parsers.push(new NW()), n.parsers.push(new V3()), n.parsers.push(new q3()), n;
  }
  createConfiguration(t = !0, n = !1) {
    const r = kb({
      parsers: [
        new jb(n),
        new CW(t),
        new SW(),
        new PW(n),
        new $3(),
        new BW(),
        new YW(t),
        new GW(t),
        new QW(t)
      ],
      refiners: [new Vg()]
    }, t);
    return r.parsers.unshift(new LW(t)), r.refiners.unshift(new Z3()), r.refiners.unshift(new G3()), r.refiners.unshift(new Uc()), r.refiners.push(new Vg()), r.refiners.push(new eV()), r.refiners.push(new t3()), r;
  }
}
class Ja {
  constructor(t) {
    this.defaultConfig = new tV(), t = t || this.defaultConfig.createCasualConfiguration(), this.parsers = [...t.parsers], this.refiners = [...t.refiners];
  }
  clone() {
    return new Ja({
      parsers: [...this.parsers],
      refiners: [...this.refiners]
    });
  }
  parseDate(t, n, r) {
    const a = this.parse(t, n, r);
    return a.length > 0 ? a[0].start.date() : null;
  }
  parse(t, n, r) {
    const a = new nV(t, n, r);
    let o = [];
    return this.parsers.forEach((l) => {
      const u = Ja.executeParser(a, l);
      o = o.concat(u);
    }), o.sort((l, u) => l.index - u.index), this.refiners.forEach(function(l) {
      o = l.refine(a, o);
    }), o;
  }
  static executeParser(t, n) {
    const r = [], a = n.pattern(t), o = t.text;
    let l = t.text, u = a.exec(l);
    for (; u; ) {
      const d = u.index + o.length - l.length;
      u.index = d;
      const p = n.extract(t, u);
      if (!p) {
        l = o.substring(u.index + 1), u = a.exec(l);
        continue;
      }
      let h = null;
      p instanceof ha ? h = p : p instanceof yt ? (h = t.createParsingResult(u.index, u[0]), h.start = p) : h = t.createParsingResult(u.index, u[0], p);
      const m = h.index, x = h.text;
      t.debug(() => console.log(`${n.constructor.name} extracted (at index=${m}) '${x}'`)), r.push(h), l = o.substring(m + x.length), u = a.exec(l);
    }
    return r;
  }
}
class nV {
  constructor(t, n, r) {
    this.text = t, this.reference = new df(n), this.option = r ?? {}, this.refDate = this.reference.instant;
  }
  createParsingComponents(t) {
    return t instanceof yt ? t : new yt(this.reference, t);
  }
  createParsingResult(t, n, r, a) {
    const o = typeof n == "string" ? n : this.text.substring(t, n), l = r ? this.createParsingComponents(r) : null, u = a ? this.createParsingComponents(a) : null;
    return new ha(this.reference, t, o, l, u);
  }
  debug(t) {
    this.option.debug && (this.option.debug instanceof Function ? this.option.debug(t) : this.option.debug.debug(t));
  }
}
class rV extends Cb {
  primaryPrefix() {
    return "(?:(?:um|von)\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|bis)\\s*";
  }
  extractPrimaryTimeComponents(t, n) {
    return n[0].match(/^\s*\d{4}\s*$/) ? null : super.extractPrimaryTimeComponents(t, n);
  }
}
const Rb = {
  sonntag: 0,
  so: 0,
  montag: 1,
  mo: 1,
  dienstag: 2,
  di: 2,
  mittwoch: 3,
  mi: 3,
  donnerstag: 4,
  do: 4,
  freitag: 5,
  fr: 5,
  samstag: 6,
  sa: 6
}, $b = {
  januar: 1,
  jänner: 1,
  janner: 1,
  jan: 1,
  "jan.": 1,
  februar: 2,
  feber: 2,
  feb: 2,
  "feb.": 2,
  märz: 3,
  maerz: 3,
  mär: 3,
  "mär.": 3,
  mrz: 3,
  "mrz.": 3,
  april: 4,
  apr: 4,
  "apr.": 4,
  mai: 5,
  juni: 6,
  jun: 6,
  "jun.": 6,
  juli: 7,
  jul: 7,
  "jul.": 7,
  august: 8,
  aug: 8,
  "aug.": 8,
  september: 9,
  sep: 9,
  "sep.": 9,
  sept: 9,
  "sept.": 9,
  oktober: 10,
  okt: 10,
  "okt.": 10,
  november: 11,
  nov: 11,
  "nov.": 11,
  dezember: 12,
  dez: 12,
  "dez.": 12
}, Yc = {
  eins: 1,
  eine: 1,
  einem: 1,
  einen: 1,
  einer: 1,
  zwei: 2,
  drei: 3,
  vier: 4,
  fünf: 5,
  fuenf: 5,
  sechs: 6,
  sieben: 7,
  acht: 8,
  neun: 9,
  zehn: 10,
  elf: 11,
  zwölf: 12,
  zwoelf: 12
}, Hs = {
  sek: "second",
  sekunde: "second",
  sekunden: "second",
  min: "minute",
  minute: "minute",
  minuten: "minute",
  h: "hour",
  std: "hour",
  stunde: "hour",
  stunden: "hour",
  tag: "d",
  tage: "d",
  tagen: "d",
  woche: "week",
  wochen: "week",
  monat: "month",
  monate: "month",
  monaten: "month",
  monats: "month",
  quartal: "quarter",
  quartals: "quarter",
  quartale: "quarter",
  quartalen: "quarter",
  a: "year",
  j: "year",
  jr: "year",
  jahr: "year",
  jahre: "year",
  jahren: "year",
  jahres: "year"
}, Fb = `(?:${rn(Yc)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`;
function Lb(e) {
  const t = e.toLowerCase();
  return Yc[t] !== void 0 ? Yc[t] : t === "ein" || t === "einer" || t === "einem" || t === "einen" || t === "eine" ? 1 : t.match(/wenigen/) ? 2 : t.match(/halb/) || t.match(/halben/) ? 0.5 : t.match(/einigen/) ? 3 : t.match(/mehreren/) ? 7 : parseFloat(t);
}
const iV = "(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)";
function aV(e) {
  if (/v/i.test(e))
    return -parseInt(e.replace(/[^0-9]+/gi, ""));
  if (/n/i.test(e))
    return parseInt(e.replace(/[^0-9]+/gi, ""));
  if (/z/i.test(e))
    return parseInt(e.replace(/[^0-9]+/gi, ""));
  const t = parseInt(e);
  return pf(t);
}
const Wb = `(${Fb})\\s{0,5}(${rn(Hs)})\\s{0,5}`, Zg = new RegExp(Wb, "i"), oV = ff("", Wb);
function sV(e) {
  const t = {};
  let n = e, r = Zg.exec(n);
  for (; r; )
    lV(t, r), n = n.substring(r[0].length), r = Zg.exec(n);
  return t;
}
function lV(e, t) {
  const n = Lb(t[1]), r = Hs[t[2].toLowerCase()];
  e[r] = n;
}
const uV = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:ä|ae)chste[mn])\\s*)?(${rn(Rb)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:ä|ae)chste)\\s*woche)?(?=\\W|$)`, "i"), cV = 1, dV = 3, fV = 2;
class pV extends $t {
  innerPattern() {
    return uV;
  }
  innerExtract(t, n) {
    const r = n[fV].toLowerCase(), a = Rb[r], o = n[cV], l = n[dV];
    let u = o || l;
    u = u || "", u = u.toLowerCase();
    let d = null;
    return u.match(/letzte/) ? d = "last" : u.match(/chste/) ? d = "next" : u.match(/diese/) && (d = "this"), Mb(t.reference, a, d);
  }
}
const hV = new RegExp("(^|\\s|T)(?:(?:um|von)\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i"), mV = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|bis(?:\\s+um)?|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i"), gV = 2, Jg = 3, Qg = 4, ev = 5;
class Us {
  pattern(t) {
    return hV;
  }
  extract(t, n) {
    const r = t.createParsingResult(n.index + n[1].length, n[0].substring(n[1].length));
    if (r.text.match(/^\d{4}$/) || (r.start = Us.extractTimeComponent(r.start.clone(), n), !r.start))
      return n.index += n[0].length, null;
    const a = t.text.substring(n.index + n[0].length), o = mV.exec(a);
    return o && (r.end = Us.extractTimeComponent(r.start.clone(), o), r.end && (r.text += o[0])), r;
  }
  static extractTimeComponent(t, n) {
    let r = 0, a = 0, o = null;
    if (r = parseInt(n[gV]), n[Jg] != null && (a = parseInt(n[Jg])), a >= 60 || r > 24)
      return null;
    if (r >= 12 && (o = We.PM), n[ev] != null) {
      if (r > 12)
        return null;
      const l = n[ev].toLowerCase();
      l.match(/morgen|vormittag/) && (o = We.AM, r == 12 && (r = 0)), l.match(/nachmittag|abend/) && (o = We.PM, r != 12 && (r += 12)), l.match(/nacht/) && (r == 12 ? (o = We.AM, r = 0) : r < 6 ? o = We.AM : (o = We.PM, r += 12));
    }
    if (t.assign("hour", r), t.assign("minute", a), o !== null ? t.assign("meridiem", o) : r < 12 ? t.imply("meridiem", We.AM) : t.imply("meridiem", We.PM), n[Qg] != null) {
      const l = parseInt(n[Qg]);
      if (l >= 60)
        return null;
      t.assign("second", l);
    }
    return t;
  }
}
class vV extends Ob {
  patternBetween() {
    return /^\s*(bis(?:\s*(?:am|zum))?|-)\s*$/i;
  }
}
class yV extends Sb {
  patternBetween() {
    return new RegExp("^\\s*(T|um|am|,|-)?\\s*$");
  }
}
class xl extends $t {
  innerPattern(t) {
    return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
  }
  innerExtract(t, n) {
    const r = Ut(t.refDate), a = n[2].toLowerCase(), o = t.createParsingComponents();
    return qr(o, r), xl.extractTimeComponents(o, a);
  }
  static extractTimeComponents(t, n) {
    switch (n) {
      case "morgen":
        t.imply("hour", 6), t.imply("minute", 0), t.imply("second", 0), t.imply("meridiem", We.AM);
        break;
      case "vormittag":
        t.imply("hour", 9), t.imply("minute", 0), t.imply("second", 0), t.imply("meridiem", We.AM);
        break;
      case "mittag":
      case "mittags":
        t.imply("hour", 12), t.imply("minute", 0), t.imply("second", 0), t.imply("meridiem", We.AM);
        break;
      case "nachmittag":
        t.imply("hour", 15), t.imply("minute", 0), t.imply("second", 0), t.imply("meridiem", We.PM);
        break;
      case "abend":
        t.imply("hour", 18), t.imply("minute", 0), t.imply("second", 0), t.imply("meridiem", We.PM);
        break;
      case "nacht":
        t.imply("hour", 22), t.imply("minute", 0), t.imply("second", 0), t.imply("meridiem", We.PM);
        break;
      case "mitternacht":
        t.get("hour") > 1 && (t = Tb(t, { day: 1 })), t.imply("hour", 0), t.imply("minute", 0), t.imply("second", 0), t.imply("meridiem", We.AM);
        break;
    }
    return t;
  }
}
const xV = new RegExp("(jetzt|heute|morgen|übermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)", "i"), bV = 1, wV = 2;
class _V extends $t {
  innerPattern(t) {
    return xV;
  }
  innerExtract(t, n) {
    let r = Ut(t.refDate);
    const a = (n[bV] || "").toLowerCase(), o = (n[wV] || "").toLowerCase();
    let l = t.createParsingComponents();
    switch (a) {
      case "jetzt":
        l = Pb(t.reference);
        break;
      case "heute":
        l = Ab(t.reference);
        break;
      case "morgen":
        kg(l, r);
        break;
      case "übermorgen":
      case "uebermorgen":
        r = r.add(1, "day"), kg(l, r);
        break;
      case "gestern":
        r = r.add(-1, "day"), Hn(l, r), qr(l, r);
        break;
      case "vorgestern":
        r = r.add(-2, "day"), Hn(l, r), qr(l, r);
        break;
      default:
        a.match(/letzte\s*nacht/) && (r.hour() > 6 && (r = r.add(-1, "day")), Hn(l, r), l.imply("hour", 0));
        break;
    }
    return o && (l = xl.extractTimeComponents(l, o)), l;
  }
}
const EV = new RegExp(`(?:am\\s*?)?(?:den\\s*?)?([0-9]{1,2})\\.(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*(${rn($b)})(?:(?:-|/|,?\\s*)(${iV}(?![^\\s]\\d)))?(?=\\W|$)`, "i"), tv = 1, nv = 2, CV = 3, rv = 4;
class TV extends $t {
  innerPattern() {
    return EV;
  }
  innerExtract(t, n) {
    const r = t.createParsingResult(n.index, n[0]), a = $b[n[CV].toLowerCase()], o = parseInt(n[tv]);
    if (o > 31)
      return n.index = n.index + n[tv].length, null;
    if (r.start.assign("month", a), r.start.assign("day", o), n[rv]) {
      const l = aV(n[rv]);
      r.start.assign("year", l);
    } else {
      const l = so(t.refDate, o, a);
      r.start.imply("year", l);
    }
    if (n[nv]) {
      const l = parseInt(n[nv]);
      r.end = r.start.clone(), r.end.assign("day", l);
    }
    return r;
  }
}
class OV extends $t {
  constructor() {
    super();
  }
  innerPattern() {
    return new RegExp(`(?:\\s*((?:nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${Fb})?(?:\\s*(nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${rn(Hs)})`, "i");
  }
  innerExtract(t, n) {
    const r = n[2] ? Lb(n[2]) : 1, a = Hs[n[4].toLowerCase()];
    let o = {};
    o[a] = r;
    let l = n[1] || n[3] || "";
    if (l = l.toLowerCase(), !!l)
      return (/vor/.test(l) || /letzte/.test(l) || /vergangen/.test(l)) && (o = uo(o)), yt.createRelativeFromReference(t.reference, o);
  }
}
class SV extends $t {
  innerPattern() {
    return new RegExp(`(?:in|für|während)\\s*(${oV})(?=\\W|$)`, "i");
  }
  innerExtract(t, n) {
    const r = sV(n[1]);
    return yt.createRelativeFromReference(t.reference, r);
  }
}
const DV = new Ja(kV());
new Ja(zb(!0));
function Vb(e, t, n) {
  return DV.parseDate(e, t, n);
}
function kV(e = !0) {
  const t = zb(!1, e);
  return t.parsers.unshift(new xl()), t.parsers.unshift(new _V()), t.parsers.unshift(new OV()), t;
}
function zb(e = !0, t = !0) {
  return kb({
    parsers: [
      new Db(),
      new jb(t),
      new rV(),
      new Us(),
      new TV(),
      new pV(),
      new SV()
    ],
    refiners: [new vV(), new yV()]
  }, e);
}
const PV = (e) => e instanceof Date ? e : Vb(e), AV = (e) => {
  var r;
  if ((e == null ? void 0 : e.toString()) === "Invalid Date" || e === "") return "";
  const t = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 6e4, n = new Date(new Date(e).getTime() - t).toISOString().slice(0, -1);
  return ((r = n == null ? void 0 : n.split("T")) == null ? void 0 : r[0]) || "";
}, IV = (e) => (e == null ? void 0 : e.toString()) === "Invalid Date" || e === "" ? "" : new Date(e).toLocaleDateString("de-DE", {
  // zero padded
  month: "2-digit",
  day: "2-digit",
  year: "numeric"
}), MV = ({
  ref: e,
  controls: t,
  className: n,
  calendarProps: r,
  placeholder: a,
  emptyButtonLabel: o,
  searchPlaceholder: l,
  hideClear: u,
  disabled: d,
  required: p,
  ...h
}) => {
  const m = qe(null), x = qe(null), w = qe(null), [O, _] = ht(!1), b = (ne) => {
    d || (_(ne), ne || setTimeout(() => {
      var V;
      return (V = m.current) == null ? void 0 : V.focus();
    }, 0));
  }, [P, C] = Xt("", h.value, h.onChange), k = (ne) => {
    var V;
    pn(m.current, ""), ne.preventDefault(), ne.stopPropagation(), (V = m == null ? void 0 : m.current) == null || V.focus();
  }, D = P && PV(P) || void 0, [S, Z] = ht(D || /* @__PURE__ */ new Date());
  ct(() => {
    D && Z(D);
  }, [P]);
  const J = (ne) => {
    var V;
    m.current && (pn(m.current, ne ? AV(ne) : ""), _(!1)), (V = m.current) == null || V.focus();
  };
  return /* @__PURE__ */ v.jsx("div", { className: "relative", children: /* @__PURE__ */ v.jsxs($n, { open: O, onOpenChange: b, children: [
    /* @__PURE__ */ v.jsx($n.Trigger, { asChild: !0, children: /* @__PURE__ */ v.jsxs(ke, { variant: "button", disabled: d, className: n, children: [
      /* @__PURE__ */ v.jsx(
        ke.Content,
        {
          className: "ui-placeholder:text-neutral-400 ui-placeholder:font-normal",
          "data-placeholder": P ? void 0 : "",
          asChild: !0,
          children: /* @__PURE__ */ v.jsx(
            "button",
            {
              ref: x,
              className: "px-2 py-1.5 pr-0 cursor-default !outline-none",
              disabled: d,
              type: "button",
              children: /* @__PURE__ */ v.jsx("span", { className: "min-h-5 block min-w-16", children: P ? IV(P) : a })
            }
          )
        }
      ),
      /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
        P && !u ? /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: k, children: /* @__PURE__ */ v.jsx(_i, {}) }) : /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "pointer-events-none", children: /* @__PURE__ */ v.jsx(
          Hv,
          {
            className: Pe(
              "text-neutral-400 transition-colors",
              !d && "group-hover:text-neutral-700"
            )
          }
        ) }),
        t
      ] }),
      /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(
        "input",
        {
          ref: nn(e, m),
          type: "date",
          ...h,
          value: P,
          onChange: C,
          tabIndex: -1,
          onFocus: () => {
            var ne;
            return (ne = x.current) == null ? void 0 : ne.focus();
          },
          disabled: d,
          required: p
        }
      ) })
    ] }) }),
    /* @__PURE__ */ v.jsx(
      $n.Content,
      {
        className: "w-auto p-4 min-w-min flex flex-col gap-4",
        align: "start",
        ref: w,
        onEscapeKeyDown: (ne) => {
          ne.stopPropagation();
        },
        onOpenAutoFocus: (ne) => {
          ne.preventDefault();
        },
        onCloseAutoFocus: (ne) => {
          ne.preventDefault();
        },
        onFocusOutside: (ne) => {
          ne.preventDefault();
        },
        children: /* @__PURE__ */ v.jsx(
          pb,
          {
            className: "p-0",
            mode: "single",
            month: S,
            onMonthChange: (ne) => Z(ne),
            selected: D,
            onSelect: J,
            fixedWeeks: !0,
            showOutsideDays: !0,
            ...r
          }
        )
      }
    )
  ] }) });
}, CB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: MV, ...e }), NV = /^-?\d*[.,]?\d*$/, jV = /^-?\d*$/, Bb = ({
  className: e,
  inputClassName: t,
  hideClear: n = !1,
  controls: r,
  widgetRef: a,
  ref: o,
  decimalPlaces: l = 2,
  decimalSeparator: u = ".",
  min: d,
  max: p,
  ...h
}) => {
  const m = qe(null), x = qe(null), [w, O] = Xt("", h.value, h.onChange), _ = w != null ? w == null ? void 0 : w.toString() : "", b = (D) => {
    if (D === "" || D === void 0 || D === null)
      return "";
    let S = D.replace(",", ".").replace(".", u);
    S.slice(-1) === u && (S = S.slice(0, -1)), d != null && parseFloat(S) < parseFloat(d.toString()) && (S = d.toString()), p != null && parseFloat(S) > parseFloat(p.toString()) && (S = p.toString());
    const [Z, J = ""] = S.split("."), ne = J.padEnd(l, "0").slice(0, l);
    return l > 0 ? `${Z}${u}${ne}` : Z;
  };
  ct(() => {
    const D = b(_);
    m.current && D !== _ && pn(m.current, D);
  }, [_]);
  const P = () => {
    var D;
    pn(x.current, ""), (D = x.current) == null || D.focus();
  }, C = (D) => {
    var J;
    D.preventDefault();
    const S = D.target.value;
    if ((l > 0 ? NV : jV).test(S)) {
      const ne = S.replace(",", ".").replace(".", u);
      if ((((J = S.split(u)[1]) == null ? void 0 : J.length) || 0) > l || l === 0 && S.slice(-1) === u)
        return;
      m.current && pn(m.current, ne);
    } else {
      const ne = D.target.selectionStart || 0;
      setTimeout(() => {
        var V;
        (V = x.current) == null || V.setSelectionRange(ne - 1, ne - 1);
      }, 0);
    }
  }, k = (D) => {
    var Z;
    const S = b(_);
    m.current && S !== _ && pn(m.current, S), (Z = h.onBlur) == null || Z.call(h, D);
  };
  return /* @__PURE__ */ v.jsxs(ke, { className: e, readOnly: h.readOnly, disabled: h.disabled, ref: a, children: [
    /* @__PURE__ */ v.jsx(ke.Content, { children: /* @__PURE__ */ v.jsx(
      "input",
      {
        ref: x,
        className: Pe(
          "px-2 py-1.5 flex-1 min-w-0 bg-transparent placeholder:text-neutral-400 tabular-nums",
          t
        ),
        ...h,
        onBlur: k,
        value: _,
        onChange: C
      }
    ) }),
    /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
      r,
      w && !n && /* @__PURE__ */ v.jsx(ke.ControlButton, { onClick: P, children: /* @__PURE__ */ v.jsx(_i, {}) })
    ] }),
    /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(
      "input",
      {
        ref: nn(o, m),
        value: _,
        onChange: O,
        tabIndex: -1,
        onFocus: () => {
          var D;
          return (D = x.current) == null ? void 0 : D.focus();
        }
      }
    ) })
  ] });
}, gi = (e) => /* @__PURE__ */ v.jsx(Bb, { ...e, decimalPlaces: 0 }), RV = ({
  ref: e,
  className: t,
  inputClassName: n,
  disabled: r,
  readOnly: a,
  required: o,
  name: l,
  hideSeconds: u,
  ...d
}) => {
  const p = $e.useRef(null), h = $e.useRef(null), m = $e.useRef(null), x = $e.useRef(null), [w, O] = Xt("", d.value, d.onChange), [_, b] = ht("00"), [P, C] = ht("00"), [k, D] = ht("00"), [S, Z] = ht(!1);
  ct(() => {
    if (w && !S) {
      const [z, B, U] = w.toString().split(":");
      b(z || "00"), C(B || "00"), D(U || "00");
    }
  }, [w, S]);
  const J = (z, B) => {
    let U = "";
    const K = u ? "00" : z == "seconds" ? B : k;
    return z === "hours" && B && P && K ? U = `${B.padStart(2, "0")}:${P.padStart(2, "0")}:${K.padStart(2, "0")}` : z === "minutes" && _ && B && K ? U = `${_.padStart(2, "0")}:${B.padStart(2, "0")}:${K.padStart(2, "0")}` : z === "seconds" && _ && P && B && (U = `${_.padStart(2, "0")}:${P.padStart(2, "0")}:${K.padStart(2, "0")}`), U;
  }, ne = (z) => {
    Z(!0), z.target.select();
  }, V = (z, B, U) => (K) => {
    var L, ue;
    const j = K.target.value;
    if (!/^\d*$/.test(j) || z === "hours" && j.length > 2 || z === "minutes" && j.length > 2 || z === "seconds" && j.length > 2) return;
    U(j);
    const I = z === "hours" && j.length === 2 && parseInt(j) <= 23 && parseInt(j) >= 0, X = z === "minutes" && j.length === 2 && parseInt(j) <= 59 && parseInt(j) >= 0, M = z === "seconds" && j.length === 2 && parseInt(j) <= 59 && parseInt(j) >= 0;
    if (z === "hours" && I ? (L = m.current) == null || L.focus() : z === "minutes" && X && !u && ((ue = x.current) == null || ue.focus()), I || X || M) {
      const he = J(z, j);
      pn(p.current, he || "");
    }
  }, Y = (z, B, U) => (K) => {
    var j, I, X, M, L, ue;
    if (K.key === "Backspace") {
      if (B !== "")
        return;
      z === "minutes" ? (K.preventDefault(), (j = h.current) == null || j.focus()) : z === "seconds" && (K.preventDefault(), (I = m.current) == null || I.focus());
    } else K.key === "ArrowLeft" ? z === "minutes" ? (K.preventDefault(), (X = h.current) == null || X.focus()) : z === "seconds" && (K.preventDefault(), (M = m.current) == null || M.focus()) : K.key === "ArrowRight" && (z === "hours" ? (K.preventDefault(), (L = m.current) == null || L.focus()) : z === "minutes" && !u && (K.preventDefault(), (ue = x.current) == null || ue.focus()));
  }, te = (z, B, U) => (K) => {
    var X, M;
    const j = K.target.value, I = K.relatedTarget === h.current || K.relatedTarget === m.current || K.relatedTarget === x.current;
    if (j.length > 0 && j.length < 2) {
      U(j.padStart(2, "0"));
      const L = J(z, j.padStart(2, "0"));
      pn(p.current, L || "");
    }
    I || (((X = p.current) == null ? void 0 : X.value) === "" && (b("00"), C("00"), D("00")), Z(!1), (M = p.current) == null || M.blur());
  }, R = (z, B, U) => ({
    value: B,
    onChange: V(z, B, U),
    onKeyDown: Y(z, B),
    onBlur: te(z, B, U),
    onFocus: ne,
    readOnly: a,
    required: o
  });
  return /* @__PURE__ */ v.jsxs("div", { className: Pe("flex gap-2 items-center relative min-w-0", t), children: [
    /* @__PURE__ */ v.jsx(
      gi,
      {
        ref: h,
        className: Pe("flex-1 min-w-0", n),
        inputClassName: "text-center",
        minLength: 1,
        maxLength: 2,
        min: 0,
        max: 23,
        name: `${l}-hours`,
        placeholder: "HH",
        hideClear: !0,
        ...R("hours", _, b)
      }
    ),
    /* @__PURE__ */ v.jsx("span", { children: ":" }),
    /* @__PURE__ */ v.jsx(
      gi,
      {
        ref: m,
        className: Pe("flex-1 min-w-0", n),
        inputClassName: "text-center",
        minLength: 1,
        maxLength: 2,
        min: 0,
        max: 59,
        name: `${l}-minutes`,
        placeholder: "MM",
        tabIndex: -1,
        hideClear: !0,
        ...R("minutes", P, C)
      }
    ),
    !u && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx("span", { children: ":" }),
      /* @__PURE__ */ v.jsx(
        gi,
        {
          ref: x,
          className: Pe("flex-1 min-w-0", n),
          inputClassName: "text-center",
          minLength: 1,
          maxLength: 2,
          min: 0,
          max: 59,
          name: `${l}-seconds`,
          placeholder: "SS",
          tabIndex: -1,
          hideClear: !0,
          ...R("seconds", k, D)
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx(ke.Native, { asChild: !0, children: /* @__PURE__ */ v.jsx(
      "input",
      {
        ...d,
        value: w,
        onChange: O,
        ref: nn(p, e),
        required: o,
        name: l,
        readOnly: a,
        tabIndex: -1,
        onFocus: () => {
          var z;
          return (z = h.current) == null ? void 0 : z.focus();
        }
      }
    ) })
  ] });
}, $V = ({
  ref: e,
  asChild: t,
  className: n,
  active: r,
  variant: a = "outline",
  loading: o,
  onLoadingChange: l,
  disabled: u,
  onClick: d,
  style: p,
  ...h
}) => {
  const m = ee.useRef(null), [x, w] = Ki(!1, o, l), [O, _] = ht(null), b = (k) => {
    if (d)
      return w(!0), Promise.resolve(d == null ? void 0 : d(k)).finally(() => {
        w(!1);
      }).then((D) => D).catch((D) => {
        console.error(D);
      });
  };
  zr(() => {
    _(null), setTimeout(() => {
      if (!m.current) return;
      const k = m.current.getBoundingClientRect();
      _({
        width: k.width,
        height: k.height
      });
    }, 0);
  }, [h.children]);
  const P = u || x, C = t ? Tt : "button";
  return /* @__PURE__ */ v.jsx(
    C,
    {
      ref: nn(m, e),
      onClick: b,
      disabled: P,
      className: Pe(
        "bg-white text-neutral-800 rounded px-2 py-1.5 font-medium text-sm border border-solid inline-flex items-center justify-center !outline-theme-100 ui-state-open:outline ui-state-open:outline-3 focus:outline focus:outline-3 outline-offset-0 ",
        "hover:bg-neutral-100 transition-all",
        "ui-state-open:border-neutral-400 ui-state-open:bg-neutral-200 ui-state-open:shadow-inner-sm",
        "disabled:pointer-events-none",
        a === "outline" && "disabled:text-neutral-500 bg-white border-neutral-300 shadow-sm hover:border-neutral-400 ui-state-open:border-neutral-400 active:border-neutral-400 active:bg-neutral-200 active:shadow-inner-sm",
        a === "outline" && P && " bg-neutral-100 shadow-none",
        !P && r && a === "outline" && "border-neutral-400 shadow-inner-sm bg-neutral-200",
        a === "ghost" && "bg-transparent border-transparent",
        a === "link" && "bg-transparent border-none p-0 text-indigo-600 disabled:text-neutral-500 hover:bg-transparent hover:text-indigo-800",
        !P && r && "!bg-neutral-200 !border-neutral-400 shadow-inner-sm",
        n
      ),
      ...h,
      style: {
        width: O != null ? `${O.width}px` : void 0,
        height: O != null ? `${O.height}px` : void 0,
        ...p
      },
      children: x ? /* @__PURE__ */ v.jsx("span", { className: "animate-spin-slow block", children: /* @__PURE__ */ v.jsx(vD, {}) }) : h.children
    }
  );
}, FV = (e) => e instanceof Date ? e : Vb(e), dc = (e) => (e == null ? void 0 : e.toString()) === "Invalid Date" || e === "" ? "" : new Date(e).toISOString(), LV = (e) => (e == null ? void 0 : e.toString()) === "Invalid Date" || e === "" ? "" : new Date(e).toLocaleDateString("de-DE", {
  // zero padded
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}), WV = ({
  ref: e,
  controls: t,
  className: n,
  calendarProps: r,
  placeholder: a,
  emptyButtonLabel: o,
  searchPlaceholder: l,
  hideClear: u,
  disabled: d,
  required: p,
  ...h
}) => {
  const m = qe(null), x = qe(null), w = qe(null), O = qe(null), [_, b] = ht(!1), P = (R) => {
    d || (b(R), R || setTimeout(() => {
      var z;
      return (z = m.current) == null ? void 0 : z.focus();
    }, 0));
  }, [C, k] = Xt("", h.value, h.onChange), D = (R) => {
    var z;
    pn(m.current, ""), R.preventDefault(), R.stopPropagation(), (z = m == null ? void 0 : m.current) == null || z.focus();
  }, S = C && FV(C) || void 0, [Z, J] = ht(S || /* @__PURE__ */ new Date());
  ct(() => {
    S && J(S);
  }, [C]);
  const ne = (R) => {
    var z;
    R && S && (R.setHours(S.getHours()), R.setMinutes(S.getMinutes()), R.setSeconds(S.getSeconds())), m.current && pn(m.current, R ? dc(R) : ""), R && ((z = O.current) == null || z.focus());
  }, V = (R) => {
    const z = C ? new Date(C) : /* @__PURE__ */ new Date(), [B, U, K] = R.target.value.split(":");
    z.setHours(parseInt(B)), z.setMinutes(parseInt(U)), z.setSeconds(parseInt(K)), m.current && pn(m.current, z ? dc(z) : "");
  }, Y = () => {
    const R = C ? new Date(C) : /* @__PURE__ */ new Date(), z = /* @__PURE__ */ new Date();
    R.setHours(z.getHours()), R.setMinutes(z.getMinutes()), R.setSeconds(z.getSeconds()), m.current && pn(m.current, R ? dc(R) : "");
  }, te = C ? new Date(C).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "";
  return /* @__PURE__ */ v.jsx("div", { className: "relative", children: /* @__PURE__ */ v.jsxs($n, { open: _, onOpenChange: P, modal: _, children: [
    /* @__PURE__ */ v.jsx($n.Trigger, { asChild: !0, children: /* @__PURE__ */ v.jsxs(ke, { variant: "button", disabled: d, className: n, children: [
      /* @__PURE__ */ v.jsx(
        ke.Content,
        {
          className: "ui-placeholder:text-neutral-400 ui-placeholder:font-normal",
          "data-placeholder": C ? void 0 : "",
          asChild: !0,
          children: /* @__PURE__ */ v.jsx(
            "button",
            {
              ref: x,
              className: "px-2 py-1.5 pr-0 cursor-default !outline-none",
              disabled: d,
              type: "button",
              children: /* @__PURE__ */ v.jsx("span", { className: "min-h-5 block min-w-16", children: C ? LV(C) : a })
            }
          )
        }
      ),
      /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
        C && !u ? /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: D, children: /* @__PURE__ */ v.jsx(_i, {}) }) : /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "pointer-events-none", children: /* @__PURE__ */ v.jsx(
          Hv,
          {
            className: Pe(
              "text-neutral-400 transition-colors",
              !d && "group-hover:text-neutral-700"
            )
          }
        ) }),
        t
      ] }),
      /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(
        "input",
        {
          ref: nn(e, m),
          ...h,
          value: C,
          onChange: k,
          tabIndex: -1,
          disabled: d,
          required: p
        }
      ) })
    ] }) }),
    /* @__PURE__ */ v.jsxs(
      $n.Content,
      {
        className: "w-auto min-w-min flex flex-col gap-4",
        onEscapeKeyDown: (R) => {
          R.stopPropagation();
        },
        onOpenAutoFocus: (R) => {
          R.preventDefault();
        },
        onCloseAutoFocus: (R) => {
          R.preventDefault();
        },
        onFocusOutside: (R) => {
          R.preventDefault();
        },
        align: "start",
        ref: w,
        children: [
          /* @__PURE__ */ v.jsx(
            pb,
            {
              className: "p-0",
              mode: "single",
              month: Z,
              onMonthChange: (R) => J(R),
              selected: S,
              onSelect: ne,
              fixedWeeks: !0,
              showOutsideDays: !0,
              ...r
            }
          ),
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-stretch justify-center gap-1 bg-neutral-50 p-3 rounded", children: [
            /* @__PURE__ */ v.jsx($V, { variant: "ghost", onClick: Y, className: "px-2 !text-theme-500", children: /* @__PURE__ */ v.jsx(cD, {}) }),
            /* @__PURE__ */ v.jsx(
              RV,
              {
                value: te,
                onChange: V,
                name: "time",
                ref: O,
                className: "w-48 px-1.5"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}, TB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: WV, ...e }), VV = /* @__PURE__ */ new Map([
  // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
  ["1km", "application/vnd.1000minds.decision-model+xml"],
  ["3dml", "text/vnd.in3d.3dml"],
  ["3ds", "image/x-3ds"],
  ["3g2", "video/3gpp2"],
  ["3gp", "video/3gp"],
  ["3gpp", "video/3gpp"],
  ["3mf", "model/3mf"],
  ["7z", "application/x-7z-compressed"],
  ["7zip", "application/x-7z-compressed"],
  ["123", "application/vnd.lotus-1-2-3"],
  ["aab", "application/x-authorware-bin"],
  ["aac", "audio/x-acc"],
  ["aam", "application/x-authorware-map"],
  ["aas", "application/x-authorware-seg"],
  ["abw", "application/x-abiword"],
  ["ac", "application/vnd.nokia.n-gage.ac+xml"],
  ["ac3", "audio/ac3"],
  ["acc", "application/vnd.americandynamics.acc"],
  ["ace", "application/x-ace-compressed"],
  ["acu", "application/vnd.acucobol"],
  ["acutc", "application/vnd.acucorp"],
  ["adp", "audio/adpcm"],
  ["aep", "application/vnd.audiograph"],
  ["afm", "application/x-font-type1"],
  ["afp", "application/vnd.ibm.modcap"],
  ["ahead", "application/vnd.ahead.space"],
  ["ai", "application/pdf"],
  ["aif", "audio/x-aiff"],
  ["aifc", "audio/x-aiff"],
  ["aiff", "audio/x-aiff"],
  ["air", "application/vnd.adobe.air-application-installer-package+zip"],
  ["ait", "application/vnd.dvb.ait"],
  ["ami", "application/vnd.amiga.ami"],
  ["amr", "audio/amr"],
  ["apk", "application/vnd.android.package-archive"],
  ["apng", "image/apng"],
  ["appcache", "text/cache-manifest"],
  ["application", "application/x-ms-application"],
  ["apr", "application/vnd.lotus-approach"],
  ["arc", "application/x-freearc"],
  ["arj", "application/x-arj"],
  ["asc", "application/pgp-signature"],
  ["asf", "video/x-ms-asf"],
  ["asm", "text/x-asm"],
  ["aso", "application/vnd.accpac.simply.aso"],
  ["asx", "video/x-ms-asf"],
  ["atc", "application/vnd.acucorp"],
  ["atom", "application/atom+xml"],
  ["atomcat", "application/atomcat+xml"],
  ["atomdeleted", "application/atomdeleted+xml"],
  ["atomsvc", "application/atomsvc+xml"],
  ["atx", "application/vnd.antix.game-component"],
  ["au", "audio/x-au"],
  ["avi", "video/x-msvideo"],
  ["avif", "image/avif"],
  ["aw", "application/applixware"],
  ["azf", "application/vnd.airzip.filesecure.azf"],
  ["azs", "application/vnd.airzip.filesecure.azs"],
  ["azv", "image/vnd.airzip.accelerator.azv"],
  ["azw", "application/vnd.amazon.ebook"],
  ["b16", "image/vnd.pco.b16"],
  ["bat", "application/x-msdownload"],
  ["bcpio", "application/x-bcpio"],
  ["bdf", "application/x-font-bdf"],
  ["bdm", "application/vnd.syncml.dm+wbxml"],
  ["bdoc", "application/x-bdoc"],
  ["bed", "application/vnd.realvnc.bed"],
  ["bh2", "application/vnd.fujitsu.oasysprs"],
  ["bin", "application/octet-stream"],
  ["blb", "application/x-blorb"],
  ["blorb", "application/x-blorb"],
  ["bmi", "application/vnd.bmi"],
  ["bmml", "application/vnd.balsamiq.bmml+xml"],
  ["bmp", "image/bmp"],
  ["book", "application/vnd.framemaker"],
  ["box", "application/vnd.previewsystems.box"],
  ["boz", "application/x-bzip2"],
  ["bpk", "application/octet-stream"],
  ["bpmn", "application/octet-stream"],
  ["bsp", "model/vnd.valve.source.compiled-map"],
  ["btif", "image/prs.btif"],
  ["buffer", "application/octet-stream"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["c", "text/x-c"],
  ["c4d", "application/vnd.clonk.c4group"],
  ["c4f", "application/vnd.clonk.c4group"],
  ["c4g", "application/vnd.clonk.c4group"],
  ["c4p", "application/vnd.clonk.c4group"],
  ["c4u", "application/vnd.clonk.c4group"],
  ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
  ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
  ["cab", "application/vnd.ms-cab-compressed"],
  ["caf", "audio/x-caf"],
  ["cap", "application/vnd.tcpdump.pcap"],
  ["car", "application/vnd.curl.car"],
  ["cat", "application/vnd.ms-pki.seccat"],
  ["cb7", "application/x-cbr"],
  ["cba", "application/x-cbr"],
  ["cbr", "application/x-cbr"],
  ["cbt", "application/x-cbr"],
  ["cbz", "application/x-cbr"],
  ["cc", "text/x-c"],
  ["cco", "application/x-cocoa"],
  ["cct", "application/x-director"],
  ["ccxml", "application/ccxml+xml"],
  ["cdbcmsg", "application/vnd.contact.cmsg"],
  ["cda", "application/x-cdf"],
  ["cdf", "application/x-netcdf"],
  ["cdfx", "application/cdfx+xml"],
  ["cdkey", "application/vnd.mediastation.cdkey"],
  ["cdmia", "application/cdmi-capability"],
  ["cdmic", "application/cdmi-container"],
  ["cdmid", "application/cdmi-domain"],
  ["cdmio", "application/cdmi-object"],
  ["cdmiq", "application/cdmi-queue"],
  ["cdr", "application/cdr"],
  ["cdx", "chemical/x-cdx"],
  ["cdxml", "application/vnd.chemdraw+xml"],
  ["cdy", "application/vnd.cinderella"],
  ["cer", "application/pkix-cert"],
  ["cfs", "application/x-cfs-compressed"],
  ["cgm", "image/cgm"],
  ["chat", "application/x-chat"],
  ["chm", "application/vnd.ms-htmlhelp"],
  ["chrt", "application/vnd.kde.kchart"],
  ["cif", "chemical/x-cif"],
  ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
  ["cil", "application/vnd.ms-artgalry"],
  ["cjs", "application/node"],
  ["cla", "application/vnd.claymore"],
  ["class", "application/octet-stream"],
  ["clkk", "application/vnd.crick.clicker.keyboard"],
  ["clkp", "application/vnd.crick.clicker.palette"],
  ["clkt", "application/vnd.crick.clicker.template"],
  ["clkw", "application/vnd.crick.clicker.wordbank"],
  ["clkx", "application/vnd.crick.clicker"],
  ["clp", "application/x-msclip"],
  ["cmc", "application/vnd.cosmocaller"],
  ["cmdf", "chemical/x-cmdf"],
  ["cml", "chemical/x-cml"],
  ["cmp", "application/vnd.yellowriver-custom-menu"],
  ["cmx", "image/x-cmx"],
  ["cod", "application/vnd.rim.cod"],
  ["coffee", "text/coffeescript"],
  ["com", "application/x-msdownload"],
  ["conf", "text/plain"],
  ["cpio", "application/x-cpio"],
  ["cpp", "text/x-c"],
  ["cpt", "application/mac-compactpro"],
  ["crd", "application/x-mscardfile"],
  ["crl", "application/pkix-crl"],
  ["crt", "application/x-x509-ca-cert"],
  ["crx", "application/x-chrome-extension"],
  ["cryptonote", "application/vnd.rig.cryptonote"],
  ["csh", "application/x-csh"],
  ["csl", "application/vnd.citationstyles.style+xml"],
  ["csml", "chemical/x-csml"],
  ["csp", "application/vnd.commonspace"],
  ["csr", "application/octet-stream"],
  ["css", "text/css"],
  ["cst", "application/x-director"],
  ["csv", "text/csv"],
  ["cu", "application/cu-seeme"],
  ["curl", "text/vnd.curl"],
  ["cww", "application/prs.cww"],
  ["cxt", "application/x-director"],
  ["cxx", "text/x-c"],
  ["dae", "model/vnd.collada+xml"],
  ["daf", "application/vnd.mobius.daf"],
  ["dart", "application/vnd.dart"],
  ["dataless", "application/vnd.fdsn.seed"],
  ["davmount", "application/davmount+xml"],
  ["dbf", "application/vnd.dbf"],
  ["dbk", "application/docbook+xml"],
  ["dcr", "application/x-director"],
  ["dcurl", "text/vnd.curl.dcurl"],
  ["dd2", "application/vnd.oma.dd2+xml"],
  ["ddd", "application/vnd.fujixerox.ddd"],
  ["ddf", "application/vnd.syncml.dmddf+xml"],
  ["dds", "image/vnd.ms-dds"],
  ["deb", "application/x-debian-package"],
  ["def", "text/plain"],
  ["deploy", "application/octet-stream"],
  ["der", "application/x-x509-ca-cert"],
  ["dfac", "application/vnd.dreamfactory"],
  ["dgc", "application/x-dgc-compressed"],
  ["dic", "text/x-c"],
  ["dir", "application/x-director"],
  ["dis", "application/vnd.mobius.dis"],
  ["disposition-notification", "message/disposition-notification"],
  ["dist", "application/octet-stream"],
  ["distz", "application/octet-stream"],
  ["djv", "image/vnd.djvu"],
  ["djvu", "image/vnd.djvu"],
  ["dll", "application/octet-stream"],
  ["dmg", "application/x-apple-diskimage"],
  ["dmn", "application/octet-stream"],
  ["dmp", "application/vnd.tcpdump.pcap"],
  ["dms", "application/octet-stream"],
  ["dna", "application/vnd.dna"],
  ["doc", "application/msword"],
  ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["dot", "application/msword"],
  ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
  ["dp", "application/vnd.osgi.dp"],
  ["dpg", "application/vnd.dpgraph"],
  ["dra", "audio/vnd.dra"],
  ["drle", "image/dicom-rle"],
  ["dsc", "text/prs.lines.tag"],
  ["dssc", "application/dssc+der"],
  ["dtb", "application/x-dtbook+xml"],
  ["dtd", "application/xml-dtd"],
  ["dts", "audio/vnd.dts"],
  ["dtshd", "audio/vnd.dts.hd"],
  ["dump", "application/octet-stream"],
  ["dvb", "video/vnd.dvb.file"],
  ["dvi", "application/x-dvi"],
  ["dwd", "application/atsc-dwd+xml"],
  ["dwf", "model/vnd.dwf"],
  ["dwg", "image/vnd.dwg"],
  ["dxf", "image/vnd.dxf"],
  ["dxp", "application/vnd.spotfire.dxp"],
  ["dxr", "application/x-director"],
  ["ear", "application/java-archive"],
  ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
  ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
  ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
  ["ecma", "application/ecmascript"],
  ["edm", "application/vnd.novadigm.edm"],
  ["edx", "application/vnd.novadigm.edx"],
  ["efif", "application/vnd.picsel"],
  ["ei6", "application/vnd.pg.osasli"],
  ["elc", "application/octet-stream"],
  ["emf", "image/emf"],
  ["eml", "message/rfc822"],
  ["emma", "application/emma+xml"],
  ["emotionml", "application/emotionml+xml"],
  ["emz", "application/x-msmetafile"],
  ["eol", "audio/vnd.digital-winds"],
  ["eot", "application/vnd.ms-fontobject"],
  ["eps", "application/postscript"],
  ["epub", "application/epub+zip"],
  ["es", "application/ecmascript"],
  ["es3", "application/vnd.eszigno3+xml"],
  ["esa", "application/vnd.osgi.subsystem"],
  ["esf", "application/vnd.epson.esf"],
  ["et3", "application/vnd.eszigno3+xml"],
  ["etx", "text/x-setext"],
  ["eva", "application/x-eva"],
  ["evy", "application/x-envoy"],
  ["exe", "application/octet-stream"],
  ["exi", "application/exi"],
  ["exp", "application/express"],
  ["exr", "image/aces"],
  ["ext", "application/vnd.novadigm.ext"],
  ["ez", "application/andrew-inset"],
  ["ez2", "application/vnd.ezpix-album"],
  ["ez3", "application/vnd.ezpix-package"],
  ["f", "text/x-fortran"],
  ["f4v", "video/mp4"],
  ["f77", "text/x-fortran"],
  ["f90", "text/x-fortran"],
  ["fbs", "image/vnd.fastbidsheet"],
  ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
  ["fcs", "application/vnd.isac.fcs"],
  ["fdf", "application/vnd.fdf"],
  ["fdt", "application/fdt+xml"],
  ["fe_launch", "application/vnd.denovo.fcselayout-link"],
  ["fg5", "application/vnd.fujitsu.oasysgp"],
  ["fgd", "application/x-director"],
  ["fh", "image/x-freehand"],
  ["fh4", "image/x-freehand"],
  ["fh5", "image/x-freehand"],
  ["fh7", "image/x-freehand"],
  ["fhc", "image/x-freehand"],
  ["fig", "application/x-xfig"],
  ["fits", "image/fits"],
  ["flac", "audio/x-flac"],
  ["fli", "video/x-fli"],
  ["flo", "application/vnd.micrografx.flo"],
  ["flv", "video/x-flv"],
  ["flw", "application/vnd.kde.kivio"],
  ["flx", "text/vnd.fmi.flexstor"],
  ["fly", "text/vnd.fly"],
  ["fm", "application/vnd.framemaker"],
  ["fnc", "application/vnd.frogans.fnc"],
  ["fo", "application/vnd.software602.filler.form+xml"],
  ["for", "text/x-fortran"],
  ["fpx", "image/vnd.fpx"],
  ["frame", "application/vnd.framemaker"],
  ["fsc", "application/vnd.fsc.weblaunch"],
  ["fst", "image/vnd.fst"],
  ["ftc", "application/vnd.fluxtime.clip"],
  ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
  ["fvt", "video/vnd.fvt"],
  ["fxp", "application/vnd.adobe.fxp"],
  ["fxpl", "application/vnd.adobe.fxp"],
  ["fzs", "application/vnd.fuzzysheet"],
  ["g2w", "application/vnd.geoplan"],
  ["g3", "image/g3fax"],
  ["g3w", "application/vnd.geospace"],
  ["gac", "application/vnd.groove-account"],
  ["gam", "application/x-tads"],
  ["gbr", "application/rpki-ghostbusters"],
  ["gca", "application/x-gca-compressed"],
  ["gdl", "model/vnd.gdl"],
  ["gdoc", "application/vnd.google-apps.document"],
  ["geo", "application/vnd.dynageo"],
  ["geojson", "application/geo+json"],
  ["gex", "application/vnd.geometry-explorer"],
  ["ggb", "application/vnd.geogebra.file"],
  ["ggt", "application/vnd.geogebra.tool"],
  ["ghf", "application/vnd.groove-help"],
  ["gif", "image/gif"],
  ["gim", "application/vnd.groove-identity-message"],
  ["glb", "model/gltf-binary"],
  ["gltf", "model/gltf+json"],
  ["gml", "application/gml+xml"],
  ["gmx", "application/vnd.gmx"],
  ["gnumeric", "application/x-gnumeric"],
  ["gpg", "application/gpg-keys"],
  ["gph", "application/vnd.flographit"],
  ["gpx", "application/gpx+xml"],
  ["gqf", "application/vnd.grafeq"],
  ["gqs", "application/vnd.grafeq"],
  ["gram", "application/srgs"],
  ["gramps", "application/x-gramps-xml"],
  ["gre", "application/vnd.geometry-explorer"],
  ["grv", "application/vnd.groove-injector"],
  ["grxml", "application/srgs+xml"],
  ["gsf", "application/x-font-ghostscript"],
  ["gsheet", "application/vnd.google-apps.spreadsheet"],
  ["gslides", "application/vnd.google-apps.presentation"],
  ["gtar", "application/x-gtar"],
  ["gtm", "application/vnd.groove-tool-message"],
  ["gtw", "model/vnd.gtw"],
  ["gv", "text/vnd.graphviz"],
  ["gxf", "application/gxf"],
  ["gxt", "application/vnd.geonext"],
  ["gz", "application/gzip"],
  ["gzip", "application/gzip"],
  ["h", "text/x-c"],
  ["h261", "video/h261"],
  ["h263", "video/h263"],
  ["h264", "video/h264"],
  ["hal", "application/vnd.hal+xml"],
  ["hbci", "application/vnd.hbci"],
  ["hbs", "text/x-handlebars-template"],
  ["hdd", "application/x-virtualbox-hdd"],
  ["hdf", "application/x-hdf"],
  ["heic", "image/heic"],
  ["heics", "image/heic-sequence"],
  ["heif", "image/heif"],
  ["heifs", "image/heif-sequence"],
  ["hej2", "image/hej2k"],
  ["held", "application/atsc-held+xml"],
  ["hh", "text/x-c"],
  ["hjson", "application/hjson"],
  ["hlp", "application/winhlp"],
  ["hpgl", "application/vnd.hp-hpgl"],
  ["hpid", "application/vnd.hp-hpid"],
  ["hps", "application/vnd.hp-hps"],
  ["hqx", "application/mac-binhex40"],
  ["hsj2", "image/hsj2"],
  ["htc", "text/x-component"],
  ["htke", "application/vnd.kenameaapp"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["hvd", "application/vnd.yamaha.hv-dic"],
  ["hvp", "application/vnd.yamaha.hv-voice"],
  ["hvs", "application/vnd.yamaha.hv-script"],
  ["i2g", "application/vnd.intergeo"],
  ["icc", "application/vnd.iccprofile"],
  ["ice", "x-conference/x-cooltalk"],
  ["icm", "application/vnd.iccprofile"],
  ["ico", "image/x-icon"],
  ["ics", "text/calendar"],
  ["ief", "image/ief"],
  ["ifb", "text/calendar"],
  ["ifm", "application/vnd.shana.informed.formdata"],
  ["iges", "model/iges"],
  ["igl", "application/vnd.igloader"],
  ["igm", "application/vnd.insors.igm"],
  ["igs", "model/iges"],
  ["igx", "application/vnd.micrografx.igx"],
  ["iif", "application/vnd.shana.informed.interchange"],
  ["img", "application/octet-stream"],
  ["imp", "application/vnd.accpac.simply.imp"],
  ["ims", "application/vnd.ms-ims"],
  ["in", "text/plain"],
  ["ini", "text/plain"],
  ["ink", "application/inkml+xml"],
  ["inkml", "application/inkml+xml"],
  ["install", "application/x-install-instructions"],
  ["iota", "application/vnd.astraea-software.iota"],
  ["ipfix", "application/ipfix"],
  ["ipk", "application/vnd.shana.informed.package"],
  ["irm", "application/vnd.ibm.rights-management"],
  ["irp", "application/vnd.irepository.package+xml"],
  ["iso", "application/x-iso9660-image"],
  ["itp", "application/vnd.shana.informed.formtemplate"],
  ["its", "application/its+xml"],
  ["ivp", "application/vnd.immervision-ivp"],
  ["ivu", "application/vnd.immervision-ivu"],
  ["jad", "text/vnd.sun.j2me.app-descriptor"],
  ["jade", "text/jade"],
  ["jam", "application/vnd.jam"],
  ["jar", "application/java-archive"],
  ["jardiff", "application/x-java-archive-diff"],
  ["java", "text/x-java-source"],
  ["jhc", "image/jphc"],
  ["jisp", "application/vnd.jisp"],
  ["jls", "image/jls"],
  ["jlt", "application/vnd.hp-jlyt"],
  ["jng", "image/x-jng"],
  ["jnlp", "application/x-java-jnlp-file"],
  ["joda", "application/vnd.joost.joda-archive"],
  ["jp2", "image/jp2"],
  ["jpe", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["jpf", "image/jpx"],
  ["jpg", "image/jpeg"],
  ["jpg2", "image/jp2"],
  ["jpgm", "video/jpm"],
  ["jpgv", "video/jpeg"],
  ["jph", "image/jph"],
  ["jpm", "video/jpm"],
  ["jpx", "image/jpx"],
  ["js", "application/javascript"],
  ["json", "application/json"],
  ["json5", "application/json5"],
  ["jsonld", "application/ld+json"],
  // https://jsonlines.org/
  ["jsonl", "application/jsonl"],
  ["jsonml", "application/jsonml+json"],
  ["jsx", "text/jsx"],
  ["jxr", "image/jxr"],
  ["jxra", "image/jxra"],
  ["jxrs", "image/jxrs"],
  ["jxs", "image/jxs"],
  ["jxsc", "image/jxsc"],
  ["jxsi", "image/jxsi"],
  ["jxss", "image/jxss"],
  ["kar", "audio/midi"],
  ["karbon", "application/vnd.kde.karbon"],
  ["kdb", "application/octet-stream"],
  ["kdbx", "application/x-keepass2"],
  ["key", "application/x-iwork-keynote-sffkey"],
  ["kfo", "application/vnd.kde.kformula"],
  ["kia", "application/vnd.kidspiration"],
  ["kml", "application/vnd.google-earth.kml+xml"],
  ["kmz", "application/vnd.google-earth.kmz"],
  ["kne", "application/vnd.kinar"],
  ["knp", "application/vnd.kinar"],
  ["kon", "application/vnd.kde.kontour"],
  ["kpr", "application/vnd.kde.kpresenter"],
  ["kpt", "application/vnd.kde.kpresenter"],
  ["kpxx", "application/vnd.ds-keypoint"],
  ["ksp", "application/vnd.kde.kspread"],
  ["ktr", "application/vnd.kahootz"],
  ["ktx", "image/ktx"],
  ["ktx2", "image/ktx2"],
  ["ktz", "application/vnd.kahootz"],
  ["kwd", "application/vnd.kde.kword"],
  ["kwt", "application/vnd.kde.kword"],
  ["lasxml", "application/vnd.las.las+xml"],
  ["latex", "application/x-latex"],
  ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
  ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
  ["les", "application/vnd.hhe.lesson-player"],
  ["less", "text/less"],
  ["lgr", "application/lgr+xml"],
  ["lha", "application/octet-stream"],
  ["link66", "application/vnd.route66.link66+xml"],
  ["list", "text/plain"],
  ["list3820", "application/vnd.ibm.modcap"],
  ["listafp", "application/vnd.ibm.modcap"],
  ["litcoffee", "text/coffeescript"],
  ["lnk", "application/x-ms-shortcut"],
  ["log", "text/plain"],
  ["lostxml", "application/lost+xml"],
  ["lrf", "application/octet-stream"],
  ["lrm", "application/vnd.ms-lrm"],
  ["ltf", "application/vnd.frogans.ltf"],
  ["lua", "text/x-lua"],
  ["luac", "application/x-lua-bytecode"],
  ["lvp", "audio/vnd.lucent.voice"],
  ["lwp", "application/vnd.lotus-wordpro"],
  ["lzh", "application/octet-stream"],
  ["m1v", "video/mpeg"],
  ["m2a", "audio/mpeg"],
  ["m2v", "video/mpeg"],
  ["m3a", "audio/mpeg"],
  ["m3u", "text/plain"],
  ["m3u8", "application/vnd.apple.mpegurl"],
  ["m4a", "audio/x-m4a"],
  ["m4p", "application/mp4"],
  ["m4s", "video/iso.segment"],
  ["m4u", "application/vnd.mpegurl"],
  ["m4v", "video/x-m4v"],
  ["m13", "application/x-msmediaview"],
  ["m14", "application/x-msmediaview"],
  ["m21", "application/mp21"],
  ["ma", "application/mathematica"],
  ["mads", "application/mads+xml"],
  ["maei", "application/mmt-aei+xml"],
  ["mag", "application/vnd.ecowin.chart"],
  ["maker", "application/vnd.framemaker"],
  ["man", "text/troff"],
  ["manifest", "text/cache-manifest"],
  ["map", "application/json"],
  ["mar", "application/octet-stream"],
  ["markdown", "text/markdown"],
  ["mathml", "application/mathml+xml"],
  ["mb", "application/mathematica"],
  ["mbk", "application/vnd.mobius.mbk"],
  ["mbox", "application/mbox"],
  ["mc1", "application/vnd.medcalcdata"],
  ["mcd", "application/vnd.mcd"],
  ["mcurl", "text/vnd.curl.mcurl"],
  ["md", "text/markdown"],
  ["mdb", "application/x-msaccess"],
  ["mdi", "image/vnd.ms-modi"],
  ["mdx", "text/mdx"],
  ["me", "text/troff"],
  ["mesh", "model/mesh"],
  ["meta4", "application/metalink4+xml"],
  ["metalink", "application/metalink+xml"],
  ["mets", "application/mets+xml"],
  ["mfm", "application/vnd.mfmp"],
  ["mft", "application/rpki-manifest"],
  ["mgp", "application/vnd.osgeo.mapguide.package"],
  ["mgz", "application/vnd.proteus.magazine"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mie", "application/x-mie"],
  ["mif", "application/vnd.mif"],
  ["mime", "message/rfc822"],
  ["mj2", "video/mj2"],
  ["mjp2", "video/mj2"],
  ["mjs", "application/javascript"],
  ["mk3d", "video/x-matroska"],
  ["mka", "audio/x-matroska"],
  ["mkd", "text/x-markdown"],
  ["mks", "video/x-matroska"],
  ["mkv", "video/x-matroska"],
  ["mlp", "application/vnd.dolby.mlp"],
  ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
  ["mmf", "application/vnd.smaf"],
  ["mml", "text/mathml"],
  ["mmr", "image/vnd.fujixerox.edmics-mmr"],
  ["mng", "video/x-mng"],
  ["mny", "application/x-msmoney"],
  ["mobi", "application/x-mobipocket-ebook"],
  ["mods", "application/mods+xml"],
  ["mov", "video/quicktime"],
  ["movie", "video/x-sgi-movie"],
  ["mp2", "audio/mpeg"],
  ["mp2a", "audio/mpeg"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mp4a", "audio/mp4"],
  ["mp4s", "application/mp4"],
  ["mp4v", "video/mp4"],
  ["mp21", "application/mp21"],
  ["mpc", "application/vnd.mophun.certificate"],
  ["mpd", "application/dash+xml"],
  ["mpe", "video/mpeg"],
  ["mpeg", "video/mpeg"],
  ["mpg", "video/mpeg"],
  ["mpg4", "video/mp4"],
  ["mpga", "audio/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["mpm", "application/vnd.blueice.multipass"],
  ["mpn", "application/vnd.mophun.application"],
  ["mpp", "application/vnd.ms-project"],
  ["mpt", "application/vnd.ms-project"],
  ["mpy", "application/vnd.ibm.minipay"],
  ["mqy", "application/vnd.mobius.mqy"],
  ["mrc", "application/marc"],
  ["mrcx", "application/marcxml+xml"],
  ["ms", "text/troff"],
  ["mscml", "application/mediaservercontrol+xml"],
  ["mseed", "application/vnd.fdsn.mseed"],
  ["mseq", "application/vnd.mseq"],
  ["msf", "application/vnd.epson.msf"],
  ["msg", "application/vnd.ms-outlook"],
  ["msh", "model/mesh"],
  ["msi", "application/x-msdownload"],
  ["msl", "application/vnd.mobius.msl"],
  ["msm", "application/octet-stream"],
  ["msp", "application/octet-stream"],
  ["msty", "application/vnd.muvee.style"],
  ["mtl", "model/mtl"],
  ["mts", "model/vnd.mts"],
  ["mus", "application/vnd.musician"],
  ["musd", "application/mmt-usd+xml"],
  ["musicxml", "application/vnd.recordare.musicxml+xml"],
  ["mvb", "application/x-msmediaview"],
  ["mvt", "application/vnd.mapbox-vector-tile"],
  ["mwf", "application/vnd.mfer"],
  ["mxf", "application/mxf"],
  ["mxl", "application/vnd.recordare.musicxml"],
  ["mxmf", "audio/mobile-xmf"],
  ["mxml", "application/xv+xml"],
  ["mxs", "application/vnd.triscape.mxs"],
  ["mxu", "video/vnd.mpegurl"],
  ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
  ["n3", "text/n3"],
  ["nb", "application/mathematica"],
  ["nbp", "application/vnd.wolfram.player"],
  ["nc", "application/x-netcdf"],
  ["ncx", "application/x-dtbncx+xml"],
  ["nfo", "text/x-nfo"],
  ["ngdat", "application/vnd.nokia.n-gage.data"],
  ["nitf", "application/vnd.nitf"],
  ["nlu", "application/vnd.neurolanguage.nlu"],
  ["nml", "application/vnd.enliven"],
  ["nnd", "application/vnd.noblenet-directory"],
  ["nns", "application/vnd.noblenet-sealer"],
  ["nnw", "application/vnd.noblenet-web"],
  ["npx", "image/vnd.net-fpx"],
  ["nq", "application/n-quads"],
  ["nsc", "application/x-conference"],
  ["nsf", "application/vnd.lotus-notes"],
  ["nt", "application/n-triples"],
  ["ntf", "application/vnd.nitf"],
  ["numbers", "application/x-iwork-numbers-sffnumbers"],
  ["nzb", "application/x-nzb"],
  ["oa2", "application/vnd.fujitsu.oasys2"],
  ["oa3", "application/vnd.fujitsu.oasys3"],
  ["oas", "application/vnd.fujitsu.oasys"],
  ["obd", "application/x-msbinder"],
  ["obgx", "application/vnd.openblox.game+xml"],
  ["obj", "model/obj"],
  ["oda", "application/oda"],
  ["odb", "application/vnd.oasis.opendocument.database"],
  ["odc", "application/vnd.oasis.opendocument.chart"],
  ["odf", "application/vnd.oasis.opendocument.formula"],
  ["odft", "application/vnd.oasis.opendocument.formula-template"],
  ["odg", "application/vnd.oasis.opendocument.graphics"],
  ["odi", "application/vnd.oasis.opendocument.image"],
  ["odm", "application/vnd.oasis.opendocument.text-master"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogex", "model/vnd.opengex"],
  ["ogg", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["omdoc", "application/omdoc+xml"],
  ["onepkg", "application/onenote"],
  ["onetmp", "application/onenote"],
  ["onetoc", "application/onenote"],
  ["onetoc2", "application/onenote"],
  ["opf", "application/oebps-package+xml"],
  ["opml", "text/x-opml"],
  ["oprc", "application/vnd.palm"],
  ["opus", "audio/ogg"],
  ["org", "text/x-org"],
  ["osf", "application/vnd.yamaha.openscoreformat"],
  ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
  ["osm", "application/vnd.openstreetmap.data+xml"],
  ["otc", "application/vnd.oasis.opendocument.chart-template"],
  ["otf", "font/otf"],
  ["otg", "application/vnd.oasis.opendocument.graphics-template"],
  ["oth", "application/vnd.oasis.opendocument.text-web"],
  ["oti", "application/vnd.oasis.opendocument.image-template"],
  ["otp", "application/vnd.oasis.opendocument.presentation-template"],
  ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
  ["ott", "application/vnd.oasis.opendocument.text-template"],
  ["ova", "application/x-virtualbox-ova"],
  ["ovf", "application/x-virtualbox-ovf"],
  ["owl", "application/rdf+xml"],
  ["oxps", "application/oxps"],
  ["oxt", "application/vnd.openofficeorg.extension"],
  ["p", "text/x-pascal"],
  ["p7a", "application/x-pkcs7-signature"],
  ["p7b", "application/x-pkcs7-certificates"],
  ["p7c", "application/pkcs7-mime"],
  ["p7m", "application/pkcs7-mime"],
  ["p7r", "application/x-pkcs7-certreqresp"],
  ["p7s", "application/pkcs7-signature"],
  ["p8", "application/pkcs8"],
  ["p10", "application/x-pkcs10"],
  ["p12", "application/x-pkcs12"],
  ["pac", "application/x-ns-proxy-autoconfig"],
  ["pages", "application/x-iwork-pages-sffpages"],
  ["pas", "text/x-pascal"],
  ["paw", "application/vnd.pawaafile"],
  ["pbd", "application/vnd.powerbuilder6"],
  ["pbm", "image/x-portable-bitmap"],
  ["pcap", "application/vnd.tcpdump.pcap"],
  ["pcf", "application/x-font-pcf"],
  ["pcl", "application/vnd.hp-pcl"],
  ["pclxl", "application/vnd.hp-pclxl"],
  ["pct", "image/x-pict"],
  ["pcurl", "application/vnd.curl.pcurl"],
  ["pcx", "image/x-pcx"],
  ["pdb", "application/x-pilot"],
  ["pde", "text/x-processing"],
  ["pdf", "application/pdf"],
  ["pem", "application/x-x509-user-cert"],
  ["pfa", "application/x-font-type1"],
  ["pfb", "application/x-font-type1"],
  ["pfm", "application/x-font-type1"],
  ["pfr", "application/font-tdpfr"],
  ["pfx", "application/x-pkcs12"],
  ["pgm", "image/x-portable-graymap"],
  ["pgn", "application/x-chess-pgn"],
  ["pgp", "application/pgp"],
  ["php", "application/x-httpd-php"],
  ["php3", "application/x-httpd-php"],
  ["php4", "application/x-httpd-php"],
  ["phps", "application/x-httpd-php-source"],
  ["phtml", "application/x-httpd-php"],
  ["pic", "image/x-pict"],
  ["pkg", "application/octet-stream"],
  ["pki", "application/pkixcmp"],
  ["pkipath", "application/pkix-pkipath"],
  ["pkpass", "application/vnd.apple.pkpass"],
  ["pl", "application/x-perl"],
  ["plb", "application/vnd.3gpp.pic-bw-large"],
  ["plc", "application/vnd.mobius.plc"],
  ["plf", "application/vnd.pocketlearn"],
  ["pls", "application/pls+xml"],
  ["pm", "application/x-perl"],
  ["pml", "application/vnd.ctc-posml"],
  ["png", "image/png"],
  ["pnm", "image/x-portable-anymap"],
  ["portpkg", "application/vnd.macports.portpkg"],
  ["pot", "application/vnd.ms-powerpoint"],
  ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
  ["ppa", "application/vnd.ms-powerpoint"],
  ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
  ["ppd", "application/vnd.cups-ppd"],
  ["ppm", "image/x-portable-pixmap"],
  ["pps", "application/vnd.ms-powerpoint"],
  ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
  ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
  ["ppt", "application/powerpoint"],
  ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["pqa", "application/vnd.palm"],
  ["prc", "application/x-pilot"],
  ["pre", "application/vnd.lotus-freelance"],
  ["prf", "application/pics-rules"],
  ["provx", "application/provenance+xml"],
  ["ps", "application/postscript"],
  ["psb", "application/vnd.3gpp.pic-bw-small"],
  ["psd", "application/x-photoshop"],
  ["psf", "application/x-font-linux-psf"],
  ["pskcxml", "application/pskc+xml"],
  ["pti", "image/prs.pti"],
  ["ptid", "application/vnd.pvi.ptid1"],
  ["pub", "application/x-mspublisher"],
  ["pvb", "application/vnd.3gpp.pic-bw-var"],
  ["pwn", "application/vnd.3m.post-it-notes"],
  ["pya", "audio/vnd.ms-playready.media.pya"],
  ["pyv", "video/vnd.ms-playready.media.pyv"],
  ["qam", "application/vnd.epson.quickanime"],
  ["qbo", "application/vnd.intu.qbo"],
  ["qfx", "application/vnd.intu.qfx"],
  ["qps", "application/vnd.publishare-delta-tree"],
  ["qt", "video/quicktime"],
  ["qwd", "application/vnd.quark.quarkxpress"],
  ["qwt", "application/vnd.quark.quarkxpress"],
  ["qxb", "application/vnd.quark.quarkxpress"],
  ["qxd", "application/vnd.quark.quarkxpress"],
  ["qxl", "application/vnd.quark.quarkxpress"],
  ["qxt", "application/vnd.quark.quarkxpress"],
  ["ra", "audio/x-realaudio"],
  ["ram", "audio/x-pn-realaudio"],
  ["raml", "application/raml+yaml"],
  ["rapd", "application/route-apd+xml"],
  ["rar", "application/x-rar"],
  ["ras", "image/x-cmu-raster"],
  ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
  ["rdf", "application/rdf+xml"],
  ["rdz", "application/vnd.data-vision.rdz"],
  ["relo", "application/p2p-overlay+xml"],
  ["rep", "application/vnd.businessobjects"],
  ["res", "application/x-dtbresource+xml"],
  ["rgb", "image/x-rgb"],
  ["rif", "application/reginfo+xml"],
  ["rip", "audio/vnd.rip"],
  ["ris", "application/x-research-info-systems"],
  ["rl", "application/resource-lists+xml"],
  ["rlc", "image/vnd.fujixerox.edmics-rlc"],
  ["rld", "application/resource-lists-diff+xml"],
  ["rm", "audio/x-pn-realaudio"],
  ["rmi", "audio/midi"],
  ["rmp", "audio/x-pn-realaudio-plugin"],
  ["rms", "application/vnd.jcp.javame.midlet-rms"],
  ["rmvb", "application/vnd.rn-realmedia-vbr"],
  ["rnc", "application/relax-ng-compact-syntax"],
  ["rng", "application/xml"],
  ["roa", "application/rpki-roa"],
  ["roff", "text/troff"],
  ["rp9", "application/vnd.cloanto.rp9"],
  ["rpm", "audio/x-pn-realaudio-plugin"],
  ["rpss", "application/vnd.nokia.radio-presets"],
  ["rpst", "application/vnd.nokia.radio-preset"],
  ["rq", "application/sparql-query"],
  ["rs", "application/rls-services+xml"],
  ["rsa", "application/x-pkcs7"],
  ["rsat", "application/atsc-rsat+xml"],
  ["rsd", "application/rsd+xml"],
  ["rsheet", "application/urc-ressheet+xml"],
  ["rss", "application/rss+xml"],
  ["rtf", "text/rtf"],
  ["rtx", "text/richtext"],
  ["run", "application/x-makeself"],
  ["rusd", "application/route-usd+xml"],
  ["rv", "video/vnd.rn-realvideo"],
  ["s", "text/x-asm"],
  ["s3m", "audio/s3m"],
  ["saf", "application/vnd.yamaha.smaf-audio"],
  ["sass", "text/x-sass"],
  ["sbml", "application/sbml+xml"],
  ["sc", "application/vnd.ibm.secure-container"],
  ["scd", "application/x-msschedule"],
  ["scm", "application/vnd.lotus-screencam"],
  ["scq", "application/scvp-cv-request"],
  ["scs", "application/scvp-cv-response"],
  ["scss", "text/x-scss"],
  ["scurl", "text/vnd.curl.scurl"],
  ["sda", "application/vnd.stardivision.draw"],
  ["sdc", "application/vnd.stardivision.calc"],
  ["sdd", "application/vnd.stardivision.impress"],
  ["sdkd", "application/vnd.solent.sdkm+xml"],
  ["sdkm", "application/vnd.solent.sdkm+xml"],
  ["sdp", "application/sdp"],
  ["sdw", "application/vnd.stardivision.writer"],
  ["sea", "application/octet-stream"],
  ["see", "application/vnd.seemail"],
  ["seed", "application/vnd.fdsn.seed"],
  ["sema", "application/vnd.sema"],
  ["semd", "application/vnd.semd"],
  ["semf", "application/vnd.semf"],
  ["senmlx", "application/senml+xml"],
  ["sensmlx", "application/sensml+xml"],
  ["ser", "application/java-serialized-object"],
  ["setpay", "application/set-payment-initiation"],
  ["setreg", "application/set-registration-initiation"],
  ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
  ["sfs", "application/vnd.spotfire.sfs"],
  ["sfv", "text/x-sfv"],
  ["sgi", "image/sgi"],
  ["sgl", "application/vnd.stardivision.writer-global"],
  ["sgm", "text/sgml"],
  ["sgml", "text/sgml"],
  ["sh", "application/x-sh"],
  ["shar", "application/x-shar"],
  ["shex", "text/shex"],
  ["shf", "application/shf+xml"],
  ["shtml", "text/html"],
  ["sid", "image/x-mrsid-image"],
  ["sieve", "application/sieve"],
  ["sig", "application/pgp-signature"],
  ["sil", "audio/silk"],
  ["silo", "model/mesh"],
  ["sis", "application/vnd.symbian.install"],
  ["sisx", "application/vnd.symbian.install"],
  ["sit", "application/x-stuffit"],
  ["sitx", "application/x-stuffitx"],
  ["siv", "application/sieve"],
  ["skd", "application/vnd.koan"],
  ["skm", "application/vnd.koan"],
  ["skp", "application/vnd.koan"],
  ["skt", "application/vnd.koan"],
  ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
  ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
  ["slim", "text/slim"],
  ["slm", "text/slim"],
  ["sls", "application/route-s-tsid+xml"],
  ["slt", "application/vnd.epson.salt"],
  ["sm", "application/vnd.stepmania.stepchart"],
  ["smf", "application/vnd.stardivision.math"],
  ["smi", "application/smil"],
  ["smil", "application/smil"],
  ["smv", "video/x-smv"],
  ["smzip", "application/vnd.stepmania.package"],
  ["snd", "audio/basic"],
  ["snf", "application/x-font-snf"],
  ["so", "application/octet-stream"],
  ["spc", "application/x-pkcs7-certificates"],
  ["spdx", "text/spdx"],
  ["spf", "application/vnd.yamaha.smaf-phrase"],
  ["spl", "application/x-futuresplash"],
  ["spot", "text/vnd.in3d.spot"],
  ["spp", "application/scvp-vp-response"],
  ["spq", "application/scvp-vp-request"],
  ["spx", "audio/ogg"],
  ["sql", "application/x-sql"],
  ["src", "application/x-wais-source"],
  ["srt", "application/x-subrip"],
  ["sru", "application/sru+xml"],
  ["srx", "application/sparql-results+xml"],
  ["ssdl", "application/ssdl+xml"],
  ["sse", "application/vnd.kodak-descriptor"],
  ["ssf", "application/vnd.epson.ssf"],
  ["ssml", "application/ssml+xml"],
  ["sst", "application/octet-stream"],
  ["st", "application/vnd.sailingtracker.track"],
  ["stc", "application/vnd.sun.xml.calc.template"],
  ["std", "application/vnd.sun.xml.draw.template"],
  ["stf", "application/vnd.wt.stf"],
  ["sti", "application/vnd.sun.xml.impress.template"],
  ["stk", "application/hyperstudio"],
  ["stl", "model/stl"],
  ["stpx", "model/step+xml"],
  ["stpxz", "model/step-xml+zip"],
  ["stpz", "model/step+zip"],
  ["str", "application/vnd.pg.format"],
  ["stw", "application/vnd.sun.xml.writer.template"],
  ["styl", "text/stylus"],
  ["stylus", "text/stylus"],
  ["sub", "text/vnd.dvb.subtitle"],
  ["sus", "application/vnd.sus-calendar"],
  ["susp", "application/vnd.sus-calendar"],
  ["sv4cpio", "application/x-sv4cpio"],
  ["sv4crc", "application/x-sv4crc"],
  ["svc", "application/vnd.dvb.service"],
  ["svd", "application/vnd.svd"],
  ["svg", "image/svg+xml"],
  ["svgz", "image/svg+xml"],
  ["swa", "application/x-director"],
  ["swf", "application/x-shockwave-flash"],
  ["swi", "application/vnd.aristanetworks.swi"],
  ["swidtag", "application/swid+xml"],
  ["sxc", "application/vnd.sun.xml.calc"],
  ["sxd", "application/vnd.sun.xml.draw"],
  ["sxg", "application/vnd.sun.xml.writer.global"],
  ["sxi", "application/vnd.sun.xml.impress"],
  ["sxm", "application/vnd.sun.xml.math"],
  ["sxw", "application/vnd.sun.xml.writer"],
  ["t", "text/troff"],
  ["t3", "application/x-t3vm-image"],
  ["t38", "image/t38"],
  ["taglet", "application/vnd.mynfc"],
  ["tao", "application/vnd.tao.intent-module-archive"],
  ["tap", "image/vnd.tencent.tap"],
  ["tar", "application/x-tar"],
  ["tcap", "application/vnd.3gpp2.tcap"],
  ["tcl", "application/x-tcl"],
  ["td", "application/urc-targetdesc+xml"],
  ["teacher", "application/vnd.smart.teacher"],
  ["tei", "application/tei+xml"],
  ["teicorpus", "application/tei+xml"],
  ["tex", "application/x-tex"],
  ["texi", "application/x-texinfo"],
  ["texinfo", "application/x-texinfo"],
  ["text", "text/plain"],
  ["tfi", "application/thraud+xml"],
  ["tfm", "application/x-tex-tfm"],
  ["tfx", "image/tiff-fx"],
  ["tga", "image/x-tga"],
  ["tgz", "application/x-tar"],
  ["thmx", "application/vnd.ms-officetheme"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["tk", "application/x-tcl"],
  ["tmo", "application/vnd.tmobile-livetv"],
  ["toml", "application/toml"],
  ["torrent", "application/x-bittorrent"],
  ["tpl", "application/vnd.groove-tool-template"],
  ["tpt", "application/vnd.trid.tpt"],
  ["tr", "text/troff"],
  ["tra", "application/vnd.trueapp"],
  ["trig", "application/trig"],
  ["trm", "application/x-msterminal"],
  ["ts", "video/mp2t"],
  ["tsd", "application/timestamped-data"],
  ["tsv", "text/tab-separated-values"],
  ["ttc", "font/collection"],
  ["ttf", "font/ttf"],
  ["ttl", "text/turtle"],
  ["ttml", "application/ttml+xml"],
  ["twd", "application/vnd.simtech-mindmapper"],
  ["twds", "application/vnd.simtech-mindmapper"],
  ["txd", "application/vnd.genomatix.tuxedo"],
  ["txf", "application/vnd.mobius.txf"],
  ["txt", "text/plain"],
  ["u8dsn", "message/global-delivery-status"],
  ["u8hdr", "message/global-headers"],
  ["u8mdn", "message/global-disposition-notification"],
  ["u8msg", "message/global"],
  ["u32", "application/x-authorware-bin"],
  ["ubj", "application/ubjson"],
  ["udeb", "application/x-debian-package"],
  ["ufd", "application/vnd.ufdl"],
  ["ufdl", "application/vnd.ufdl"],
  ["ulx", "application/x-glulx"],
  ["umj", "application/vnd.umajin"],
  ["unityweb", "application/vnd.unity"],
  ["uoml", "application/vnd.uoml+xml"],
  ["uri", "text/uri-list"],
  ["uris", "text/uri-list"],
  ["urls", "text/uri-list"],
  ["usdz", "model/vnd.usdz+zip"],
  ["ustar", "application/x-ustar"],
  ["utz", "application/vnd.uiq.theme"],
  ["uu", "text/x-uuencode"],
  ["uva", "audio/vnd.dece.audio"],
  ["uvd", "application/vnd.dece.data"],
  ["uvf", "application/vnd.dece.data"],
  ["uvg", "image/vnd.dece.graphic"],
  ["uvh", "video/vnd.dece.hd"],
  ["uvi", "image/vnd.dece.graphic"],
  ["uvm", "video/vnd.dece.mobile"],
  ["uvp", "video/vnd.dece.pd"],
  ["uvs", "video/vnd.dece.sd"],
  ["uvt", "application/vnd.dece.ttml+xml"],
  ["uvu", "video/vnd.uvvu.mp4"],
  ["uvv", "video/vnd.dece.video"],
  ["uvva", "audio/vnd.dece.audio"],
  ["uvvd", "application/vnd.dece.data"],
  ["uvvf", "application/vnd.dece.data"],
  ["uvvg", "image/vnd.dece.graphic"],
  ["uvvh", "video/vnd.dece.hd"],
  ["uvvi", "image/vnd.dece.graphic"],
  ["uvvm", "video/vnd.dece.mobile"],
  ["uvvp", "video/vnd.dece.pd"],
  ["uvvs", "video/vnd.dece.sd"],
  ["uvvt", "application/vnd.dece.ttml+xml"],
  ["uvvu", "video/vnd.uvvu.mp4"],
  ["uvvv", "video/vnd.dece.video"],
  ["uvvx", "application/vnd.dece.unspecified"],
  ["uvvz", "application/vnd.dece.zip"],
  ["uvx", "application/vnd.dece.unspecified"],
  ["uvz", "application/vnd.dece.zip"],
  ["vbox", "application/x-virtualbox-vbox"],
  ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
  ["vcard", "text/vcard"],
  ["vcd", "application/x-cdlink"],
  ["vcf", "text/x-vcard"],
  ["vcg", "application/vnd.groove-vcard"],
  ["vcs", "text/x-vcalendar"],
  ["vcx", "application/vnd.vcx"],
  ["vdi", "application/x-virtualbox-vdi"],
  ["vds", "model/vnd.sap.vds"],
  ["vhd", "application/x-virtualbox-vhd"],
  ["vis", "application/vnd.visionary"],
  ["viv", "video/vnd.vivo"],
  ["vlc", "application/videolan"],
  ["vmdk", "application/x-virtualbox-vmdk"],
  ["vob", "video/x-ms-vob"],
  ["vor", "application/vnd.stardivision.writer"],
  ["vox", "application/x-authorware-bin"],
  ["vrml", "model/vrml"],
  ["vsd", "application/vnd.visio"],
  ["vsf", "application/vnd.vsf"],
  ["vss", "application/vnd.visio"],
  ["vst", "application/vnd.visio"],
  ["vsw", "application/vnd.visio"],
  ["vtf", "image/vnd.valve.source.texture"],
  ["vtt", "text/vtt"],
  ["vtu", "model/vnd.vtu"],
  ["vxml", "application/voicexml+xml"],
  ["w3d", "application/x-director"],
  ["wad", "application/x-doom"],
  ["wadl", "application/vnd.sun.wadl+xml"],
  ["war", "application/java-archive"],
  ["wasm", "application/wasm"],
  ["wav", "audio/x-wav"],
  ["wax", "audio/x-ms-wax"],
  ["wbmp", "image/vnd.wap.wbmp"],
  ["wbs", "application/vnd.criticaltools.wbs+xml"],
  ["wbxml", "application/wbxml"],
  ["wcm", "application/vnd.ms-works"],
  ["wdb", "application/vnd.ms-works"],
  ["wdp", "image/vnd.ms-photo"],
  ["weba", "audio/webm"],
  ["webapp", "application/x-web-app-manifest+json"],
  ["webm", "video/webm"],
  ["webmanifest", "application/manifest+json"],
  ["webp", "image/webp"],
  ["wg", "application/vnd.pmi.widget"],
  ["wgt", "application/widget"],
  ["wks", "application/vnd.ms-works"],
  ["wm", "video/x-ms-wm"],
  ["wma", "audio/x-ms-wma"],
  ["wmd", "application/x-ms-wmd"],
  ["wmf", "image/wmf"],
  ["wml", "text/vnd.wap.wml"],
  ["wmlc", "application/wmlc"],
  ["wmls", "text/vnd.wap.wmlscript"],
  ["wmlsc", "application/vnd.wap.wmlscriptc"],
  ["wmv", "video/x-ms-wmv"],
  ["wmx", "video/x-ms-wmx"],
  ["wmz", "application/x-msmetafile"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["word", "application/msword"],
  ["wpd", "application/vnd.wordperfect"],
  ["wpl", "application/vnd.ms-wpl"],
  ["wps", "application/vnd.ms-works"],
  ["wqd", "application/vnd.wqd"],
  ["wri", "application/x-mswrite"],
  ["wrl", "model/vrml"],
  ["wsc", "message/vnd.wfa.wsc"],
  ["wsdl", "application/wsdl+xml"],
  ["wspolicy", "application/wspolicy+xml"],
  ["wtb", "application/vnd.webturbo"],
  ["wvx", "video/x-ms-wvx"],
  ["x3d", "model/x3d+xml"],
  ["x3db", "model/x3d+fastinfoset"],
  ["x3dbz", "model/x3d+binary"],
  ["x3dv", "model/x3d-vrml"],
  ["x3dvz", "model/x3d+vrml"],
  ["x3dz", "model/x3d+xml"],
  ["x32", "application/x-authorware-bin"],
  ["x_b", "model/vnd.parasolid.transmit.binary"],
  ["x_t", "model/vnd.parasolid.transmit.text"],
  ["xaml", "application/xaml+xml"],
  ["xap", "application/x-silverlight-app"],
  ["xar", "application/vnd.xara"],
  ["xav", "application/xcap-att+xml"],
  ["xbap", "application/x-ms-xbap"],
  ["xbd", "application/vnd.fujixerox.docuworks.binder"],
  ["xbm", "image/x-xbitmap"],
  ["xca", "application/xcap-caps+xml"],
  ["xcs", "application/calendar+xml"],
  ["xdf", "application/xcap-diff+xml"],
  ["xdm", "application/vnd.syncml.dm+xml"],
  ["xdp", "application/vnd.adobe.xdp+xml"],
  ["xdssc", "application/dssc+xml"],
  ["xdw", "application/vnd.fujixerox.docuworks"],
  ["xel", "application/xcap-el+xml"],
  ["xenc", "application/xenc+xml"],
  ["xer", "application/patch-ops-error+xml"],
  ["xfdf", "application/vnd.adobe.xfdf"],
  ["xfdl", "application/vnd.xfdl"],
  ["xht", "application/xhtml+xml"],
  ["xhtml", "application/xhtml+xml"],
  ["xhvml", "application/xv+xml"],
  ["xif", "image/vnd.xiff"],
  ["xl", "application/excel"],
  ["xla", "application/vnd.ms-excel"],
  ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
  ["xlc", "application/vnd.ms-excel"],
  ["xlf", "application/xliff+xml"],
  ["xlm", "application/vnd.ms-excel"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
  ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xlt", "application/vnd.ms-excel"],
  ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
  ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
  ["xlw", "application/vnd.ms-excel"],
  ["xm", "audio/xm"],
  ["xml", "application/xml"],
  ["xns", "application/xcap-ns+xml"],
  ["xo", "application/vnd.olpc-sugar"],
  ["xop", "application/xop+xml"],
  ["xpi", "application/x-xpinstall"],
  ["xpl", "application/xproc+xml"],
  ["xpm", "image/x-xpixmap"],
  ["xpr", "application/vnd.is-xpr"],
  ["xps", "application/vnd.ms-xpsdocument"],
  ["xpw", "application/vnd.intercon.formnet"],
  ["xpx", "application/vnd.intercon.formnet"],
  ["xsd", "application/xml"],
  ["xsl", "application/xml"],
  ["xslt", "application/xslt+xml"],
  ["xsm", "application/vnd.syncml+xml"],
  ["xspf", "application/xspf+xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["xvm", "application/xv+xml"],
  ["xvml", "application/xv+xml"],
  ["xwd", "image/x-xwindowdump"],
  ["xyz", "chemical/x-xyz"],
  ["xz", "application/x-xz"],
  ["yaml", "text/yaml"],
  ["yang", "application/yang"],
  ["yin", "application/yin+xml"],
  ["yml", "text/yaml"],
  ["ymp", "text/x-suse-ymp"],
  ["z", "application/x-compress"],
  ["z1", "application/x-zmachine"],
  ["z2", "application/x-zmachine"],
  ["z3", "application/x-zmachine"],
  ["z4", "application/x-zmachine"],
  ["z5", "application/x-zmachine"],
  ["z6", "application/x-zmachine"],
  ["z7", "application/x-zmachine"],
  ["z8", "application/x-zmachine"],
  ["zaz", "application/vnd.zzazz.deck+xml"],
  ["zip", "application/zip"],
  ["zir", "application/vnd.zul"],
  ["zirz", "application/vnd.zul"],
  ["zmm", "application/vnd.handheld-entertainment+xml"],
  ["zsh", "text/x-scriptzsh"]
]);
function ia(e, t, n) {
  const r = zV(e), { webkitRelativePath: a } = e, o = typeof t == "string" ? t : typeof a == "string" && a.length > 0 ? a : `./${e.name}`;
  return typeof r.path != "string" && iv(r, "path", o), iv(r, "relativePath", o), r;
}
function zV(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), a = VV.get(r);
    a && Object.defineProperty(e, "type", {
      value: a,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function iv(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const BV = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function HV(e) {
  return Ei(this, void 0, void 0, function* () {
    return Ys(e) && UV(e.dataTransfer) ? GV(e.dataTransfer, e.type) : YV(e) ? qV(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? KV(e) : [];
  });
}
function UV(e) {
  return Ys(e);
}
function YV(e) {
  return Ys(e) && Ys(e.target);
}
function Ys(e) {
  return typeof e == "object" && e !== null;
}
function qV(e) {
  return qc(e.target.files).map((t) => ia(t));
}
function KV(e) {
  return Ei(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => ia(n));
  });
}
function GV(e, t) {
  return Ei(this, void 0, void 0, function* () {
    if (e.items) {
      const n = qc(e.items).filter((a) => a.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(XV));
      return av(Hb(r));
    }
    return av(qc(e.files).map((n) => ia(n)));
  });
}
function av(e) {
  return e.filter((t) => BV.indexOf(t.name) === -1);
}
function qc(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function XV(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ov(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Ub(t) : ov(e, t);
}
function Hb(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? Hb(n) : [n]
  ], []);
}
function ov(e, t) {
  return Ei(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const o = yield e.getAsFileSystemHandle();
      if (o === null)
        throw new Error(`${e} is not a File`);
      if (o !== void 0) {
        const l = yield o.getFile();
        return l.handle = o, ia(l);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return ia(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function ZV(e) {
  return Ei(this, void 0, void 0, function* () {
    return e.isDirectory ? Ub(e) : JV(e);
  });
}
function Ub(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const a = [];
    function o() {
      t.readEntries((l) => Ei(this, void 0, void 0, function* () {
        if (l.length) {
          const u = Promise.all(l.map(ZV));
          a.push(u), o();
        } else
          try {
            const u = yield Promise.all(a);
            n(u);
          } catch (u) {
            r(u);
          }
      }), (l) => {
        r(l);
      });
    }
    o();
  });
}
function JV(e) {
  return Ei(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const a = ia(r, e.fullPath);
        t(a);
      }, (r) => {
        n(r);
      });
    });
  });
}
var fc = function(e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(",");
    if (n.length === 0)
      return !0;
    var r = e.name || "", a = (e.type || "").toLowerCase(), o = a.replace(/\/.*$/, "");
    return n.some(function(l) {
      var u = l.trim().toLowerCase();
      return u.charAt(0) === "." ? r.toLowerCase().endsWith(u) : u.endsWith("/*") ? o === u.replace(/\/.*$/, "") : a === u;
    });
  }
  return !0;
};
function sv(e) {
  return tz(e) || ez(e) || qb(e) || QV();
}
function QV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ez(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function tz(e) {
  if (Array.isArray(e)) return Kc(e);
}
function lv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function uv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lv(Object(n), !0).forEach(function(r) {
      Yb(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Yb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Qa(e, t) {
  return iz(e) || rz(e, t) || qb(e, t) || nz();
}
function nz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qb(e, t) {
  if (e) {
    if (typeof e == "string") return Kc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Kc(e, t);
  }
}
function Kc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function rz(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, l, u;
    try {
      for (n = n.call(e); !(a = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); a = !0)
        ;
    } catch (d) {
      o = !0, u = d;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function iz(e) {
  if (Array.isArray(e)) return e;
}
var az = typeof fc == "function" ? fc : fc.default, oz = "file-invalid-type", sz = "file-too-large", lz = "file-too-small", uz = "too-many-files", cz = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: oz,
    message: "File type must be ".concat(r)
  };
}, cv = function(t) {
  return {
    code: sz,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, dv = function(t) {
  return {
    code: lz,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, dz = {
  code: uz,
  message: "Too many files"
};
function Kb(e, t) {
  var n = e.type === "application/x-moz-file" || az(e, t);
  return [n, n ? null : cz(t)];
}
function Gb(e, t, n) {
  if (fi(e.size))
    if (fi(t) && fi(n)) {
      if (e.size > n) return [!1, cv(n)];
      if (e.size < t) return [!1, dv(t)];
    } else {
      if (fi(t) && e.size < t) return [!1, dv(t)];
      if (fi(n) && e.size > n) return [!1, cv(n)];
    }
  return [!0, null];
}
function fi(e) {
  return e != null;
}
function fz(e) {
  var t = e.files, n = e.accept, r = e.minSize, a = e.maxSize, o = e.multiple, l = e.maxFiles, u = e.validator;
  return !o && t.length > 1 || o && l >= 1 && t.length > l ? !1 : t.every(function(d) {
    var p = Kb(d, n), h = Qa(p, 1), m = h[0], x = Gb(d, r, a), w = Qa(x, 1), O = w[0], _ = u ? u(d) : null;
    return m && O && !_;
  });
}
function qs(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function gs(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function fv(e) {
  e.preventDefault();
}
function pz(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function hz(e) {
  return e.indexOf("Edge/") !== -1;
}
function mz() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return pz(e) || hz(e);
}
function Jn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
      o[l - 1] = arguments[l];
    return t.some(function(u) {
      return !qs(r) && u && u.apply(void 0, [r].concat(o)), qs(r);
    });
  };
}
function gz() {
  return "showOpenFilePicker" in window;
}
function vz(e) {
  if (fi(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Qa(n, 2), a = r[0], o = r[1], l = !0;
      return Xb(a) || (console.warn('Skipped "'.concat(a, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), l = !1), (!Array.isArray(o) || !o.every(Zb)) && (console.warn('Skipped "'.concat(a, '" because an invalid file extension was provided.')), l = !1), l;
    }).reduce(function(n, r) {
      var a = Qa(r, 2), o = a[0], l = a[1];
      return uv(uv({}, n), {}, Yb({}, o, l));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function yz(e) {
  if (fi(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Qa(n, 2), a = r[0], o = r[1];
      return [].concat(sv(t), [a], sv(o));
    }, []).filter(function(t) {
      return Xb(t) || Zb(t);
    }).join(",");
}
function xz(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function bz(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Xb(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Zb(e) {
  return /^.*\.[\w]+$/.test(e);
}
var wz = ["children"], _z = ["open"], Ez = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Cz = ["refKey", "onChange", "onClick"];
function Tz(e) {
  return Dz(e) || Sz(e) || Jb(e) || Oz();
}
function Oz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Dz(e) {
  if (Array.isArray(e)) return Gc(e);
}
function pc(e, t) {
  return Az(e) || Pz(e, t) || Jb(e, t) || kz();
}
function kz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jb(e, t) {
  if (e) {
    if (typeof e == "string") return Gc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gc(e, t);
  }
}
function Gc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Pz(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, l, u;
    try {
      for (n = n.call(e); !(a = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); a = !0)
        ;
    } catch (d) {
      o = !0, u = d;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function Az(e) {
  if (Array.isArray(e)) return e;
}
function pv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pv(Object(n), !0).forEach(function(r) {
      Xc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Xc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ks(e, t) {
  if (e == null) return {};
  var n = Iz(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Iz(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var hf = /* @__PURE__ */ Qs(function(e, t) {
  var n = e.children, r = Ks(e, wz), a = ew(r), o = a.open, l = Ks(a, _z);
  return GO(t, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ $e.createElement(XO, null, n(Dt(Dt({}, l), {}, {
    open: o
  })));
});
hf.displayName = "Dropzone";
var Qb = {
  disabled: !1,
  getFilesFromEvent: HV,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1,
  autoFocus: !1
};
hf.defaultProps = Qb;
hf.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: le.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: le.objectOf(le.arrayOf(le.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: le.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: le.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: le.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: le.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: le.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: le.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: le.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: le.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: le.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: le.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: le.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: le.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: le.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: le.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: le.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: le.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: le.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: le.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: le.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: le.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: le.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: le.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: le.func
};
var Zc = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function ew() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Dt(Dt({}, Qb), e), n = t.accept, r = t.disabled, a = t.getFilesFromEvent, o = t.maxSize, l = t.minSize, u = t.multiple, d = t.maxFiles, p = t.onDragEnter, h = t.onDragLeave, m = t.onDragOver, x = t.onDrop, w = t.onDropAccepted, O = t.onDropRejected, _ = t.onFileDialogCancel, b = t.onFileDialogOpen, P = t.useFsAccessApi, C = t.autoFocus, k = t.preventDropOnDocument, D = t.noClick, S = t.noKeyboard, Z = t.noDrag, J = t.noDragEventsBubbling, ne = t.onError, V = t.validator, Y = Rn(function() {
    return yz(n);
  }, [n]), te = Rn(function() {
    return vz(n);
  }, [n]), R = Rn(function() {
    return typeof b == "function" ? b : hv;
  }, [b]), z = Rn(function() {
    return typeof _ == "function" ? _ : hv;
  }, [_]), B = qe(null), U = qe(null), K = Ov(Mz, Zc), j = pc(K, 2), I = j[0], X = j[1], M = I.isFocused, L = I.isFileDialogActive, ue = qe(typeof window < "u" && window.isSecureContext && P && gz()), he = function() {
    !ue.current && L && setTimeout(function() {
      if (U.current) {
        var ae = U.current.files;
        ae.length || (X({
          type: "closeDialog"
        }), z());
      }
    }, 300);
  };
  ct(function() {
    return window.addEventListener("focus", he, !1), function() {
      window.removeEventListener("focus", he, !1);
    };
  }, [U, L, z, ue]);
  var ce = qe([]), ye = function(ae) {
    B.current && B.current.contains(ae.target) || (ae.preventDefault(), ce.current = []);
  };
  ct(function() {
    return k && (document.addEventListener("dragover", fv, !1), document.addEventListener("drop", ye, !1)), function() {
      k && (document.removeEventListener("dragover", fv), document.removeEventListener("drop", ye));
    };
  }, [B, k]), ct(function() {
    return !r && C && B.current && B.current.focus(), function() {
    };
  }, [B, C, r]);
  var ge = Qe(function(H) {
    ne ? ne(H) : console.error(H);
  }, [ne]), be = Qe(function(H) {
    H.preventDefault(), H.persist(), re(H), ce.current = [].concat(Tz(ce.current), [H.target]), gs(H) && Promise.resolve(a(H)).then(function(ae) {
      if (!(qs(H) && !J)) {
        var xe = ae.length, oe = xe > 0 && fz({
          files: ae,
          accept: Y,
          minSize: l,
          maxSize: o,
          multiple: u,
          maxFiles: d,
          validator: V
        }), Ne = xe > 0 && !oe;
        X({
          isDragAccept: oe,
          isDragReject: Ne,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), p && p(H);
      }
    }).catch(function(ae) {
      return ge(ae);
    });
  }, [a, p, ge, J, Y, l, o, u, d, V]), we = Qe(function(H) {
    H.preventDefault(), H.persist(), re(H);
    var ae = gs(H);
    if (ae && H.dataTransfer)
      try {
        H.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return ae && m && m(H), !1;
  }, [m, J]), Ce = Qe(function(H) {
    H.preventDefault(), H.persist(), re(H);
    var ae = ce.current.filter(function(oe) {
      return B.current && B.current.contains(oe);
    }), xe = ae.indexOf(H.target);
    xe !== -1 && ae.splice(xe, 1), ce.current = ae, !(ae.length > 0) && (X({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), gs(H) && h && h(H));
  }, [B, h, J]), _e = Qe(function(H, ae) {
    var xe = [], oe = [];
    H.forEach(function(Ne) {
      var wt = Kb(Ne, Y), Fe = pc(wt, 2), mt = Fe[0], At = Fe[1], pt = Gb(Ne, l, o), Rt = pc(pt, 2), it = Rt[0], Jr = Rt[1], Qr = V ? V(Ne) : null;
      if (mt && it && !Qr)
        xe.push(Ne);
      else {
        var ga = [At, Jr];
        Qr && (ga = ga.concat(Qr)), oe.push({
          file: Ne,
          errors: ga.filter(function(wl) {
            return wl;
          })
        });
      }
    }), (!u && xe.length > 1 || u && d >= 1 && xe.length > d) && (xe.forEach(function(Ne) {
      oe.push({
        file: Ne,
        errors: [dz]
      });
    }), xe.splice(0)), X({
      acceptedFiles: xe,
      fileRejections: oe,
      isDragReject: oe.length > 0,
      type: "setFiles"
    }), x && x(xe, oe, ae), oe.length > 0 && O && O(oe, ae), xe.length > 0 && w && w(xe, ae);
  }, [X, u, Y, l, o, d, x, w, O, V]), Se = Qe(function(H) {
    H.preventDefault(), H.persist(), re(H), ce.current = [], gs(H) && Promise.resolve(a(H)).then(function(ae) {
      qs(H) && !J || _e(ae, H);
    }).catch(function(ae) {
      return ge(ae);
    }), X({
      type: "reset"
    });
  }, [a, _e, ge, J]), fe = Qe(function() {
    if (ue.current) {
      X({
        type: "openDialog"
      }), R();
      var H = {
        multiple: u,
        types: te
      };
      window.showOpenFilePicker(H).then(function(ae) {
        return a(ae);
      }).then(function(ae) {
        _e(ae, null), X({
          type: "closeDialog"
        });
      }).catch(function(ae) {
        xz(ae) ? (z(ae), X({
          type: "closeDialog"
        })) : bz(ae) ? (ue.current = !1, U.current ? (U.current.value = null, U.current.click()) : ge(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : ge(ae);
      });
      return;
    }
    U.current && (X({
      type: "openDialog"
    }), R(), U.current.value = null, U.current.click());
  }, [X, R, z, P, _e, ge, te, u]), Re = Qe(function(H) {
    !B.current || !B.current.isEqualNode(H.target) || (H.key === " " || H.key === "Enter" || H.keyCode === 32 || H.keyCode === 13) && (H.preventDefault(), fe());
  }, [B, fe]), ve = Qe(function() {
    X({
      type: "focus"
    });
  }, []), et = Qe(function() {
    X({
      type: "blur"
    });
  }, []), rt = Qe(function() {
    D || (mz() ? setTimeout(fe, 0) : fe());
  }, [D, fe]), Ke = function(ae) {
    return r ? null : ae;
  }, N = function(ae) {
    return S ? null : Ke(ae);
  }, Q = function(ae) {
    return Z ? null : Ke(ae);
  }, re = function(ae) {
    J && ae.stopPropagation();
  }, g = Rn(function() {
    return function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ae = H.refKey, xe = ae === void 0 ? "ref" : ae, oe = H.role, Ne = H.onKeyDown, wt = H.onFocus, Fe = H.onBlur, mt = H.onClick, At = H.onDragEnter, pt = H.onDragOver, Rt = H.onDragLeave, it = H.onDrop, Jr = Ks(H, Ez);
      return Dt(Dt(Xc({
        onKeyDown: N(Jn(Ne, Re)),
        onFocus: N(Jn(wt, ve)),
        onBlur: N(Jn(Fe, et)),
        onClick: Ke(Jn(mt, rt)),
        onDragEnter: Q(Jn(At, be)),
        onDragOver: Q(Jn(pt, we)),
        onDragLeave: Q(Jn(Rt, Ce)),
        onDrop: Q(Jn(it, Se)),
        role: typeof oe == "string" && oe !== "" ? oe : "presentation"
      }, xe, B), !r && !S ? {
        tabIndex: 0
      } : {}), Jr);
    };
  }, [B, Re, ve, et, rt, be, we, Ce, Se, S, Z, r]), F = Qe(function(H) {
    H.stopPropagation();
  }, []), $ = Rn(function() {
    return function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ae = H.refKey, xe = ae === void 0 ? "ref" : ae, oe = H.onChange, Ne = H.onClick, wt = Ks(H, Cz), Fe = Xc({
        accept: Y,
        multiple: u,
        type: "file",
        style: {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "0 -1px -1px 0",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        },
        onChange: Ke(Jn(oe, Se)),
        onClick: Ke(Jn(Ne, F)),
        tabIndex: -1
      }, xe, U);
      return Dt(Dt({}, Fe), wt);
    };
  }, [U, n, u, Se, r]);
  return Dt(Dt({}, I), {}, {
    isFocused: M && !r,
    getRootProps: g,
    getInputProps: $,
    rootRef: B,
    inputRef: U,
    open: Ke(fe)
  });
}
function Mz(e, t) {
  switch (t.type) {
    case "focus":
      return Dt(Dt({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return Dt(Dt({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return Dt(Dt({}, Zc), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return Dt(Dt({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return Dt(Dt({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return Dt(Dt({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "reset":
      return Dt({}, Zc);
    default:
      return e;
  }
}
function hv() {
}
const Nz = (e) => "Blob" in window && e instanceof Blob, jz = (e) => ["jpg", "jpeg", "png", "gif"].includes(e), Rz = ({ ext: e }) => {
  switch (e) {
    case "pdf":
      return /* @__PURE__ */ v.jsx(Ru, {});
    case "doc":
    case "docx":
      return /* @__PURE__ */ v.jsx(Ru, {});
    case "xls":
    case "xlsx":
      return /* @__PURE__ */ v.jsx(hD, {});
    case "ppt":
    case "pptx":
      return /* @__PURE__ */ v.jsx(mD, {});
    case "zip":
      return /* @__PURE__ */ v.jsx(fD, {});
    case "txt":
      return /* @__PURE__ */ v.jsx(Ru, {});
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return /* @__PURE__ */ v.jsx(pD, {});
    default:
      return /* @__PURE__ */ v.jsx(gD, {});
  }
}, $z = ({ className: e, onRemove: t, file: n, disabled: r, previewImage: a }) => {
  const o = n.name.split(".").pop() || "", l = n.name.split("/").pop() || "", u = n.url || (Nz(n) ? URL.createObjectURL(n) : void 0), [d, p] = ee.useState(null);
  return /* @__PURE__ */ v.jsxs(
    ke,
    {
      className: Pe(
        "flex gap-1 justify-between w-full group rounded hover:border-neutral-300 shadow-sm active:border-neutral-300",
        e
      ),
      disabled: r,
      children: [
        /* @__PURE__ */ v.jsxs(ke.Content, { className: "px-2 py-1.5 pr-0 flex items-center gap-1", children: [
          /* @__PURE__ */ v.jsx("span", { className: Pe("text-neutral-400 flex-none block", a && "mr-1"), children: a && jz(o) ? /* @__PURE__ */ v.jsx("a", { href: r ? void 0 : u, target: "_blank", children: /* @__PURE__ */ v.jsx(
            "img",
            {
              src: u,
              alt: l,
              className: "w-9 h-9 object-cover rounded-sm flex-none",
              onLoad: (h) => p({
                width: h.target.naturalWidth,
                height: h.target.naturalHeight
              })
            }
          ) }) : /* @__PURE__ */ v.jsx(Rz, { ext: o }) }),
          /* @__PURE__ */ v.jsxs("span", { className: "flex flex-col flex-1", children: [
            /* @__PURE__ */ v.jsx("span", { className: "text-sm truncate", children: l }),
            a && d && /* @__PURE__ */ v.jsxs("span", { className: "text-xs text-neutral-400", children: [
              d.width,
              "x",
              d.height
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
          u && /* @__PURE__ */ v.jsx(ke.ControlButton, { asChild: !0, children: /* @__PURE__ */ v.jsx("a", { href: r ? void 0 : u, target: "_blank", children: /* @__PURE__ */ v.jsx(dD, {}) }) }),
          /* @__PURE__ */ v.jsx(ke.ControlButton, { onClick: t, children: /* @__PURE__ */ v.jsx(_i, {}) })
        ] })
      ]
    }
  );
}, Fz = ({
  className: e,
  controls: t,
  onChange: n,
  widgetRef: r,
  placeholder: a,
  previewImage: o = !1,
  ref: l,
  ...u
}) => {
  const d = (k) => {
    n == null || n({
      target: {
        type: "file",
        files: k,
        multiple: u.multiple ? !0 : void 0
      }
    });
  }, p = (k) => {
    var D;
    d(u.multiple ? [...m, ...k] : k), (D = C.current) == null || D.focus();
  }, h = (k) => {
    var D;
    d(m.filter((S, Z) => Z !== k)), (D = C.current) == null || D.focus();
  }, m = u.value && Array.isArray(u.value) ? u.value : u.value ? [u.value] : [], { getRootProps: x, getInputProps: w, isDragActive: O, isDragAccept: _, isDragReject: b, isFileDialogActive: P, rootRef: C } = ew({
    onDropAccepted: p,
    disabled: u.disabled,
    maxFiles: u.maxFiles,
    maxSize: u.maxSize,
    minSize: u.minSize,
    accept: u.accept,
    multiple: u.multiple
  });
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col gap-2", children: [
    (u.multiple || m.length === 0) && /* @__PURE__ */ v.jsx(
      ke,
      {
        disabled: u.disabled,
        ref: r,
        "data-state": P || O ? "active" : _ ? "accept" : b ? "reject" : void 0,
        "data-placeholder": "",
        "data-disabled": u.disabled ? "" : void 0,
        className: Pe(
          "group shadow-none transition-colors min-h-20",
          !u.disabled && "border-dashed bg-neutral-50 hover:bg-neutral-100",
          "focus:border-solid focus-within:border-solid",
          "ui-placeholder:text-neutral-400",
          !u.disabled && "ui-state-active:bg-theme-100 ui-state-active:border-theme-500 ui-state-active:text-neutral-800 ui-state-active:border-solid",
          u.disabled && "pointer-events-none",
          e
        ),
        children: /* @__PURE__ */ v.jsx(ke.Content, { asChild: !0, children: /* @__PURE__ */ v.jsxs(
          "div",
          {
            ...x(),
            className: Pe("px-2 py-1.5 flex flex-1 justify-center items-center"),
            children: [
              /* @__PURE__ */ v.jsx("input", { ...w() }),
              /* @__PURE__ */ v.jsx(
                "span",
                {
                  className: Pe(
                    "text-center cursor-default select-none",
                    u.disabled && "pointer-events-none"
                  ),
                  children: a
                }
              )
            ]
          }
        ) })
      }
    ),
    m.map((k, D) => /* @__PURE__ */ v.jsx(
      $z,
      {
        disabled: u.disabled,
        onRemove: () => h(D),
        file: k,
        previewImage: o
      },
      D
    ))
  ] });
}, OB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Fz, ...e }), Lz = (e) => {
  const [t, n] = Xt("", e.value, e.onChange);
  return /* @__PURE__ */ v.jsx("input", { ...e, type: "hidden", value: t, onChange: n });
}, SB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Lz, ...e }), DB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: gi, ...e }), kB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Bb, ...e }), Wz = ({ children: e, onRemove: t, disabled: n, ...r }) => /* @__PURE__ */ v.jsxs(
  "span",
  {
    className: Pe(
      "rounded bg-neutral-100 px-2 flex items-center gap-1 text-sm cursor-default border border-neutral-300 py-px",
      !n && "pr-1"
    ),
    ...r,
    children: [
      e,
      !n && /* @__PURE__ */ v.jsx(
        "button",
        {
          onClick: t,
          type: "button",
          className: "text-neutral-500 hover:text-neutral-700 cursor-pointer",
          tabIndex: -1,
          children: /* @__PURE__ */ v.jsx(_i, {})
        }
      )
    ]
  }
), Vz = ({ asChild: e, disabled: t, ...n }) => {
  const { selectedOptions: r, selected: a, onSelectedChange: o, getSelectedItemProps: l } = Yt(Xr);
  if (!r.length) return null;
  const u = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(u, { ...n, children: r == null ? void 0 : r.map((d, p) => /* @__PURE__ */ v.jsx(
    Wz,
    {
      onRemove: (h) => {
        h.stopPropagation(), o == null || o(a == null ? void 0 : a.filter((m) => m !== d.value));
      },
      ...l({
        selectedItem: d,
        index: p
      }),
      disabled: t,
      children: d.label
    },
    d.value
  )) });
}, hc = ({ value: e, label: t, disabled: n = !1, checked: r = !1 }) => /* @__PURE__ */ v.jsxs(
  Ze.Option,
  {
    value: e,
    className: Pe(
      "flex items-center gap-2 text-sm px-2 py-1 pl-1 rounded text-neutral-700 cursor-default group",
      "ui-highlighted:bg-neutral-100 ui-disabled:opacity-50 "
    ),
    disabled: n,
    children: [
      /* @__PURE__ */ v.jsx(
        ke,
        {
          variant: "checkable",
          checked: r,
          disabled: n,
          className: Pe(
            "flex justify-center items-center w-5 h-5 rounded text-white",
            "group-ui-state-checked:bg-theme-600 group-ui-state-checked:border-transparent"
          ),
          children: /* @__PURE__ */ v.jsx(Ze.OptionIndicator, { children: /* @__PURE__ */ v.jsx(nl, {}) })
        }
      ),
      /* @__PURE__ */ v.jsx(Ze.OptionText, { children: t || e })
    ]
  }
), zz = ({
  // widget props
  widgetRef: e,
  controls: t,
  // multi select props
  options: n,
  defaultOpen: r = !1,
  open: a,
  onOpenChange: o,
  allowAddOption: l,
  onAddOption: u,
  placeholder: d,
  // remaining are select props we can pass down
  // the ones mentioned here are the ones we want to override
  value: p,
  onChange: h,
  onFocus: m,
  ...x
}) => {
  const w = qe(null), O = qe(null), [_, b] = Ki(r, a, o), [P, C] = ee.useState(""), [k, D] = Xt([], p, h), { onSelectedChange: S, selectNativeProps: Z } = cf({
    focusRef: O,
    onFocus: m,
    value: k,
    onChange: D
  });
  return /* @__PURE__ */ v.jsx($n, { open: _, children: /* @__PURE__ */ v.jsxs(
    Ze,
    {
      ref: w,
      selected: k,
      onSelectedChange: S,
      onOpenChange: b,
      allowAddOption: l,
      onSearchChange: C,
      required: x.required,
      disabled: x.disabled,
      multiple: !0,
      highlightOnMouseOver: !0,
      className: "relative",
      children: [
        /* @__PURE__ */ v.jsx($n.Anchor, { children: /* @__PURE__ */ v.jsx(
          Ze.Trigger,
          {
            onClick: (J) => {
              var ne;
              J.preventDefault(), (ne = O.current) == null || ne.focus();
            },
            disabled: x.disabled,
            asChild: !0,
            children: /* @__PURE__ */ v.jsxs(ke, { ref: e, children: [
              /* @__PURE__ */ v.jsxs(ke.Content, { className: Pe("flex gap-1 p-1 flex-wrap"), children: [
                /* @__PURE__ */ v.jsx(Vz, { className: "flex gap-1 flex-wrap", disabled: x.disabled }),
                /* @__PURE__ */ v.jsxs("div", { className: "flex-auto min-w-0 relative", children: [
                  /* @__PURE__ */ v.jsx("div", { className: "p-1 py-0.5 invisible min-w-20 text-sm whitespace-nowrap", children: P || "&nbsp;" }),
                  /* @__PURE__ */ v.jsx(
                    Ze.Search,
                    {
                      ref: O,
                      className: "!outline-none absolute w-full top-0 left-0 p-1 py-0.5 text-sm placeholder:text-neutral-400 bg-transparent",
                      placeholder: d,
                      disabled: x.disabled
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ v.jsx(ke.Controls, { children: t })
            ] })
          }
        ) }),
        /* @__PURE__ */ v.jsx(
          $n.Content,
          {
            className: Pe("min-w-0 p-0"),
            onOpenAutoFocus: (J) => {
              J.preventDefault();
            },
            align: "start",
            forceMount: !0,
            disableInteractions: !_,
            children: /* @__PURE__ */ v.jsxs(Ze.Content, { className: "flex flex-col p-2", children: [
              l && P && /* @__PURE__ */ v.jsx(hc, { value: P, label: P, disabled: !P }),
              n.map((J) => {
                if (Array.isArray(J)) {
                  const [ne, V] = J;
                  return /* @__PURE__ */ v.jsxs(ee.Fragment, { children: [
                    /* @__PURE__ */ v.jsx(Ze.Separator, { className: "border-t border-neutral-200 my-2" }),
                    /* @__PURE__ */ v.jsxs(Ze.Group, { className: "flex flex-col", children: [
                      /* @__PURE__ */ v.jsx(Ze.GroupLabel, { className: "font-medium text-sm px-2 py-1 pl-8", children: ne }),
                      V.map((Y) => /* @__PURE__ */ v.jsx(
                        hc,
                        {
                          ...Y,
                          checked: k == null ? void 0 : k.includes(Y.value)
                        },
                        Y.value
                      ))
                    ] })
                  ] }, ne);
                }
                return /* @__PURE__ */ v.jsx(
                  hc,
                  {
                    ...J,
                    checked: k == null ? void 0 : k.includes(J.value)
                  },
                  J.value
                );
              })
            ] })
          }
        ),
        /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(Ze.Native, { ...x, ...Z }) })
      ]
    }
  ) });
}, PB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: zz, ...e }), AB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: fb, ...e }), IB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Yv, ...e }), Bz = ({ inputClassName: e, className: t, controls: n, widgetRef: r, ref: a, ...o }) => {
  const [l, u] = Xt("", o.value, o.onChange);
  return /* @__PURE__ */ v.jsxs(ke, { className: t, readOnly: o.readOnly, disabled: o.disabled, ref: r, children: [
    /* @__PURE__ */ v.jsx(ke.Content, { children: /* @__PURE__ */ v.jsx(
      "textarea",
      {
        ref: a,
        className: Pe(
          "px-2 py-1.5 flex-1 min-w-0 min-h-[3lh] bg-transparent",
          o.disabled && "resize-none",
          e
        ),
        ...o,
        value: l,
        onChange: u
      }
    ) }),
    /* @__PURE__ */ v.jsx(ke.Controls, { children: n })
  ] });
}, MB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Bz, ...e });
var fo = (e) => e.type === "checkbox", hi = (e) => e instanceof Date, tn = (e) => e == null;
const tw = (e) => typeof e == "object";
var jt = (e) => !tn(e) && !Array.isArray(e) && tw(e) && !hi(e), nw = (e) => jt(e) && e.target ? fo(e.target) ? e.target.checked : e.target.value : e, Hz = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, rw = (e, t) => e.has(Hz(t)), Uz = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return jt(t) && t.hasOwnProperty("isPrototypeOf");
}, mf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function un(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(mf && (e instanceof Blob || r)) && (n || jt(e)))
    if (t = n ? [] : {}, !n && !Uz(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = un(e[a]));
  else
    return e;
  return t;
}
var bl = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Nt = (e) => e === void 0, Ee = (e, t, n) => {
  if (!t || !jt(e))
    return n;
  const r = bl(t.split(/[,[\].]+?/)).reduce((a, o) => tn(a) ? a : a[o], e);
  return Nt(r) || r === e ? Nt(e[t]) ? n : e[t] : r;
}, jn = (e) => typeof e == "boolean", gf = (e) => /^\w*$/.test(e), iw = (e) => bl(e.replace(/["|']|\]/g, "").split(/\.|\[/)), vt = (e, t, n) => {
  let r = -1;
  const a = gf(t) ? [t] : iw(t), o = a.length, l = o - 1;
  for (; ++r < o; ) {
    const u = a[r];
    let d = n;
    if (r !== l) {
      const p = e[u];
      d = jt(p) || Array.isArray(p) ? p : isNaN(+a[r + 1]) ? {} : [];
    }
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return;
    e[u] = d, e = e[u];
  }
  return e;
};
const Gs = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Bn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, br = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, aw = $e.createContext(null), Ti = () => $e.useContext(aw), Yz = (e) => {
  const { children: t, ...n } = e;
  return $e.createElement(aw.Provider, { value: n }, t);
};
var ow = (e, t, n, r = !0) => {
  const a = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(a, o, {
      get: () => {
        const l = o;
        return t._proxyFormState[l] !== Bn.all && (t._proxyFormState[l] = !r || Bn.all), n && (n[l] = !0), e[l];
      }
    });
  return a;
}, cn = (e) => jt(e) && !Object.keys(e).length, sw = (e, t, n, r) => {
  n(e);
  const { name: a, ...o } = e;
  return cn(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((l) => t[l] === (!r || Bn.all));
}, Ya = (e) => Array.isArray(e) ? e : [e], lw = (e, t, n) => !e || !t || e === t || Ya(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function vf(e) {
  const t = $e.useRef(e);
  t.current = e, $e.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function qz(e) {
  const t = Ti(), { control: n = t.control, disabled: r, name: a, exact: o } = e, [l, u] = $e.useState(n._formState), d = $e.useRef(!0), p = $e.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), h = $e.useRef(a);
  return h.current = a, vf({
    disabled: r,
    next: (m) => d.current && lw(h.current, m.name, o) && sw(m, p.current, n._updateFormState) && u({
      ...n._formState,
      ...m
    }),
    subject: n._subjects.state
  }), $e.useEffect(() => (d.current = !0, p.current.isValid && n._updateValid(!0), () => {
    d.current = !1;
  }), [n]), $e.useMemo(() => ow(l, n, p.current, !1), [l, n]);
}
var rr = (e) => typeof e == "string", uw = (e, t, n, r, a) => rr(e) ? (r && t.watch.add(e), Ee(n, e, a)) : Array.isArray(e) ? e.map((o) => (r && t.watch.add(o), Ee(n, o))) : (r && (t.watchAll = !0), n);
function Kz(e) {
  const t = Ti(), { control: n = t.control, name: r, defaultValue: a, disabled: o, exact: l } = e, u = $e.useRef(r);
  u.current = r, vf({
    disabled: o,
    subject: n._subjects.values,
    next: (h) => {
      lw(u.current, h.name, l) && p(un(uw(u.current, n._names, h.values || n._formValues, !1, a)));
    }
  });
  const [d, p] = $e.useState(n._getWatch(r, a));
  return $e.useEffect(() => n._removeUnmounted()), d;
}
function Gz(e) {
  const t = Ti(), { name: n, disabled: r, control: a = t.control, shouldUnregister: o } = e, l = rw(a._names.array, n), u = Kz({
    control: a,
    name: n,
    defaultValue: Ee(a._formValues, n, Ee(a._defaultValues, n, e.defaultValue)),
    exact: !0
  }), d = qz({
    control: a,
    name: n,
    exact: !0
  }), p = $e.useRef(a.register(n, {
    ...e.rules,
    value: u,
    ...jn(e.disabled) ? { disabled: e.disabled } : {}
  })), h = $e.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Ee(d.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Ee(d.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Ee(d.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Ee(d.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => Ee(d.errors, n)
    }
  }), [d, n]), m = $e.useMemo(() => ({
    name: n,
    value: u,
    ...jn(r) || d.disabled ? { disabled: d.disabled || r } : {},
    onChange: (x) => p.current.onChange({
      target: {
        value: nw(x),
        name: n
      },
      type: Gs.CHANGE
    }),
    onBlur: () => p.current.onBlur({
      target: {
        value: Ee(a._formValues, n),
        name: n
      },
      type: Gs.BLUR
    }),
    ref: (x) => {
      const w = Ee(a._fields, n);
      w && x && (w._f.ref = {
        focus: () => x.focus(),
        select: () => x.select(),
        setCustomValidity: (O) => x.setCustomValidity(O),
        reportValidity: () => x.reportValidity()
      });
    }
  }), [
    n,
    a._formValues,
    r,
    d.disabled,
    u,
    a._fields
  ]);
  return $e.useEffect(() => {
    const x = a._options.shouldUnregister || o, w = (O, _) => {
      const b = Ee(a._fields, O);
      b && b._f && (b._f.mount = _);
    };
    if (w(n, !0), x) {
      const O = un(Ee(a._options.defaultValues, n));
      vt(a._defaultValues, n, O), Nt(Ee(a._formValues, n)) && vt(a._formValues, n, O);
    }
    return !l && a.register(n), () => {
      (l ? x && !a._state.action : x) ? a.unregister(n) : w(n, !1);
    };
  }, [n, a, l, o]), $e.useEffect(() => {
    a._updateDisabledField({
      disabled: r,
      fields: a._fields,
      name: n
    });
  }, [r, n, a]), $e.useMemo(() => ({
    field: m,
    formState: d,
    fieldState: h
  }), [m, d, h]);
}
const Xz = (e) => e.render(Gz(e));
var Zz = (e, t, n, r, a) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: a || !0
  }
} : {}, mv = (e) => ({
  isOnSubmit: !e || e === Bn.onSubmit,
  isOnBlur: e === Bn.onBlur,
  isOnChange: e === Bn.onChange,
  isOnAll: e === Bn.all,
  isOnTouch: e === Bn.onTouched
}), gv = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const qa = (e, t, n, r) => {
  for (const a of n || Object.keys(e)) {
    const o = Ee(e, a);
    if (o) {
      const { _f: l, ...u } = o;
      if (l) {
        if (l.refs && l.refs[0] && t(l.refs[0], a) && !r)
          return !0;
        if (l.ref && t(l.ref, l.name) && !r)
          return !0;
        if (qa(u, t))
          break;
      } else if (jt(u) && qa(u, t))
        break;
    }
  }
};
var Jz = (e, t, n) => {
  const r = Ya(Ee(e, n));
  return vt(r, "root", t[n]), vt(e, n, r), e;
}, yf = (e) => e.type === "file", tr = (e) => typeof e == "function", Xs = (e) => {
  if (!mf)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Os = (e) => rr(e), xf = (e) => e.type === "radio", Zs = (e) => e instanceof RegExp;
const vv = {
  value: !1,
  isValid: !1
}, yv = { value: !0, isValid: !0 };
var cw = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Nt(e[0].attributes.value) ? Nt(e[0].value) || e[0].value === "" ? yv : { value: e[0].value, isValid: !0 } : yv
    ) : vv;
  }
  return vv;
};
const xv = {
  isValid: !1,
  value: null
};
var dw = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, xv) : xv;
function bv(e, t, n = "validate") {
  if (Os(e) || Array.isArray(e) && e.every(Os) || jn(e) && !e)
    return {
      type: n,
      message: Os(e) ? e : "",
      ref: t
    };
}
var Ui = (e) => jt(e) && !Zs(e) ? e : {
  value: e,
  message: ""
}, wv = async (e, t, n, r, a, o) => {
  const { ref: l, refs: u, required: d, maxLength: p, minLength: h, min: m, max: x, pattern: w, validate: O, name: _, valueAsNumber: b, mount: P } = e._f, C = Ee(n, _);
  if (!P || t.has(_))
    return {};
  const k = u ? u[0] : l, D = (R) => {
    a && k.reportValidity && (k.setCustomValidity(jn(R) ? "" : R || ""), k.reportValidity());
  }, S = {}, Z = xf(l), J = fo(l), ne = Z || J, V = (b || yf(l)) && Nt(l.value) && Nt(C) || Xs(l) && l.value === "" || C === "" || Array.isArray(C) && !C.length, Y = Zz.bind(null, _, r, S), te = (R, z, B, U = br.maxLength, K = br.minLength) => {
    const j = R ? z : B;
    S[_] = {
      type: R ? U : K,
      message: j,
      ref: l,
      ...Y(R ? U : K, j)
    };
  };
  if (o ? !Array.isArray(C) || !C.length : d && (!ne && (V || tn(C)) || jn(C) && !C || J && !cw(u).isValid || Z && !dw(u).isValid)) {
    const { value: R, message: z } = Os(d) ? { value: !!d, message: d } : Ui(d);
    if (R && (S[_] = {
      type: br.required,
      message: z,
      ref: k,
      ...Y(br.required, z)
    }, !r))
      return D(z), S;
  }
  if (!V && (!tn(m) || !tn(x))) {
    let R, z;
    const B = Ui(x), U = Ui(m);
    if (!tn(C) && !isNaN(C)) {
      const K = l.valueAsNumber || C && +C;
      tn(B.value) || (R = K > B.value), tn(U.value) || (z = K < U.value);
    } else {
      const K = l.valueAsDate || new Date(C), j = (M) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + M), I = l.type == "time", X = l.type == "week";
      rr(B.value) && C && (R = I ? j(C) > j(B.value) : X ? C > B.value : K > new Date(B.value)), rr(U.value) && C && (z = I ? j(C) < j(U.value) : X ? C < U.value : K < new Date(U.value));
    }
    if ((R || z) && (te(!!R, B.message, U.message, br.max, br.min), !r))
      return D(S[_].message), S;
  }
  if ((p || h) && !V && (rr(C) || o && Array.isArray(C))) {
    const R = Ui(p), z = Ui(h), B = !tn(R.value) && C.length > +R.value, U = !tn(z.value) && C.length < +z.value;
    if ((B || U) && (te(B, R.message, z.message), !r))
      return D(S[_].message), S;
  }
  if (w && !V && rr(C)) {
    const { value: R, message: z } = Ui(w);
    if (Zs(R) && !C.match(R) && (S[_] = {
      type: br.pattern,
      message: z,
      ref: l,
      ...Y(br.pattern, z)
    }, !r))
      return D(z), S;
  }
  if (O) {
    if (tr(O)) {
      const R = await O(C, n), z = bv(R, k);
      if (z && (S[_] = {
        ...z,
        ...Y(br.validate, z.message)
      }, !r))
        return D(z.message), S;
    } else if (jt(O)) {
      let R = {};
      for (const z in O) {
        if (!cn(R) && !r)
          break;
        const B = bv(await O[z](C, n), k, z);
        B && (R = {
          ...B,
          ...Y(z, B.message)
        }, D(B.message), r && (S[_] = R));
      }
      if (!cn(R) && (S[_] = {
        ref: k,
        ...R
      }, !r))
        return S;
    }
  }
  return D(!0), S;
};
function Qz(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Nt(e) ? r++ : e[t[r++]];
  return e;
}
function eB(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Nt(e[t]))
      return !1;
  return !0;
}
function Wt(e, t) {
  const n = Array.isArray(t) ? t : gf(t) ? [t] : iw(t), r = n.length === 1 ? e : Qz(e, n), a = n.length - 1, o = n[a];
  return r && delete r[o], a !== 0 && (jt(r) && cn(r) || Array.isArray(r) && eB(r)) && Wt(e, n.slice(0, -1)), e;
}
var mc = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (a) => {
      for (const o of e)
        o.next && o.next(a);
    },
    subscribe: (a) => (e.push(a), {
      unsubscribe: () => {
        e = e.filter((o) => o !== a);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Jc = (e) => tn(e) || !tw(e);
function Wr(e, t) {
  if (Jc(e) || Jc(t))
    return e === t;
  if (hi(e) && hi(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const a of n) {
    const o = e[a];
    if (!r.includes(a))
      return !1;
    if (a !== "ref") {
      const l = t[a];
      if (hi(o) && hi(l) || jt(o) && jt(l) || Array.isArray(o) && Array.isArray(l) ? !Wr(o, l) : o !== l)
        return !1;
    }
  }
  return !0;
}
var fw = (e) => e.type === "select-multiple", tB = (e) => xf(e) || fo(e), gc = (e) => Xs(e) && e.isConnected, pw = (e) => {
  for (const t in e)
    if (tr(e[t]))
      return !0;
  return !1;
};
function Js(e, t = {}) {
  const n = Array.isArray(e);
  if (jt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || jt(e[r]) && !pw(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Js(e[r], t[r])) : tn(e[r]) || (t[r] = !0);
  return t;
}
function hw(e, t, n) {
  const r = Array.isArray(e);
  if (jt(e) || r)
    for (const a in e)
      Array.isArray(e[a]) || jt(e[a]) && !pw(e[a]) ? Nt(t) || Jc(n[a]) ? n[a] = Array.isArray(e[a]) ? Js(e[a], []) : { ...Js(e[a]) } : hw(e[a], tn(t) ? {} : t[a], n[a]) : n[a] = !Wr(e[a], t[a]);
  return n;
}
var Wa = (e, t) => hw(e, t, Js(t)), mw = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Nt(e) ? e : t ? e === "" ? NaN : e && +e : n && rr(e) ? new Date(e) : r ? r(e) : e;
function vc(e) {
  const t = e.ref;
  return yf(t) ? t.files : xf(t) ? dw(e.refs).value : fw(t) ? [...t.selectedOptions].map(({ value: n }) => n) : fo(t) ? cw(e.refs).value : mw(Nt(t.value) ? e.ref.value : t.value, e);
}
var nB = (e, t, n, r) => {
  const a = {};
  for (const o of e) {
    const l = Ee(t, o);
    l && vt(a, o, l._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: a,
    shouldUseNativeValidation: r
  };
}, Va = (e) => Nt(e) ? e : Zs(e) ? e.source : jt(e) ? Zs(e.value) ? e.value.source : e.value : e;
const _v = "AsyncFunction";
var rB = (e) => !!e && !!e.validate && !!(tr(e.validate) && e.validate.constructor.name === _v || jt(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === _v)), iB = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ev(e, t, n) {
  const r = Ee(e, n);
  if (r || gf(n))
    return {
      error: r,
      name: n
    };
  const a = n.split(".");
  for (; a.length; ) {
    const o = a.join("."), l = Ee(t, o), u = Ee(e, o);
    if (l && !Array.isArray(l) && n !== o)
      return { name: n };
    if (u && u.type)
      return {
        name: o,
        error: u
      };
    a.pop();
  }
  return {
    name: n
  };
}
var aB = (e, t, n, r, a) => a.isOnAll ? !1 : !n && a.isOnTouch ? !(t || e) : (n ? r.isOnBlur : a.isOnBlur) ? !e : (n ? r.isOnChange : a.isOnChange) ? e : !0, oB = (e, t) => !bl(Ee(e, t)).length && Wt(e, t);
const sB = {
  mode: Bn.onSubmit,
  reValidateMode: Bn.onChange,
  shouldFocusError: !0
};
function lB(e = {}) {
  let t = {
    ...sB,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: tr(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, a = jt(t.defaultValues) || jt(t.values) ? un(t.defaultValues || t.values) || {} : {}, o = t.shouldUnregister ? {} : un(a), l = {
    action: !1,
    mount: !1,
    watch: !1
  }, u = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, d, p = 0;
  const h = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, m = {
    values: mc(),
    array: mc(),
    state: mc()
  }, x = mv(t.mode), w = mv(t.reValidateMode), O = t.criteriaMode === Bn.all, _ = (N) => (Q) => {
    clearTimeout(p), p = setTimeout(N, Q);
  }, b = async (N) => {
    if (!t.disabled && (h.isValid || N)) {
      const Q = t.resolver ? cn((await ne()).errors) : await Y(r, !0);
      Q !== n.isValid && m.state.next({
        isValid: Q
      });
    }
  }, P = (N, Q) => {
    !t.disabled && (h.isValidating || h.validatingFields) && ((N || Array.from(u.mount)).forEach((re) => {
      re && (Q ? vt(n.validatingFields, re, Q) : Wt(n.validatingFields, re));
    }), m.state.next({
      validatingFields: n.validatingFields,
      isValidating: !cn(n.validatingFields)
    }));
  }, C = (N, Q = [], re, g, F = !0, $ = !0) => {
    if (g && re && !t.disabled) {
      if (l.action = !0, $ && Array.isArray(Ee(r, N))) {
        const H = re(Ee(r, N), g.argA, g.argB);
        F && vt(r, N, H);
      }
      if ($ && Array.isArray(Ee(n.errors, N))) {
        const H = re(Ee(n.errors, N), g.argA, g.argB);
        F && vt(n.errors, N, H), oB(n.errors, N);
      }
      if (h.touchedFields && $ && Array.isArray(Ee(n.touchedFields, N))) {
        const H = re(Ee(n.touchedFields, N), g.argA, g.argB);
        F && vt(n.touchedFields, N, H);
      }
      h.dirtyFields && (n.dirtyFields = Wa(a, o)), m.state.next({
        name: N,
        isDirty: R(N, Q),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      vt(o, N, Q);
  }, k = (N, Q) => {
    vt(n.errors, N, Q), m.state.next({
      errors: n.errors
    });
  }, D = (N) => {
    n.errors = N, m.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, S = (N, Q, re, g) => {
    const F = Ee(r, N);
    if (F) {
      const $ = Ee(o, N, Nt(re) ? Ee(a, N) : re);
      Nt($) || g && g.defaultChecked || Q ? vt(o, N, Q ? $ : vc(F._f)) : U(N, $), l.mount && b();
    }
  }, Z = (N, Q, re, g, F) => {
    let $ = !1, H = !1;
    const ae = {
      name: N
    };
    if (!t.disabled) {
      const xe = !!(Ee(r, N) && Ee(r, N)._f && Ee(r, N)._f.disabled);
      if (!re || g) {
        h.isDirty && (H = n.isDirty, n.isDirty = ae.isDirty = R(), $ = H !== ae.isDirty);
        const oe = xe || Wr(Ee(a, N), Q);
        H = !!(!xe && Ee(n.dirtyFields, N)), oe || xe ? Wt(n.dirtyFields, N) : vt(n.dirtyFields, N, !0), ae.dirtyFields = n.dirtyFields, $ = $ || h.dirtyFields && H !== !oe;
      }
      if (re) {
        const oe = Ee(n.touchedFields, N);
        oe || (vt(n.touchedFields, N, re), ae.touchedFields = n.touchedFields, $ = $ || h.touchedFields && oe !== re);
      }
      $ && F && m.state.next(ae);
    }
    return $ ? ae : {};
  }, J = (N, Q, re, g) => {
    const F = Ee(n.errors, N), $ = h.isValid && jn(Q) && n.isValid !== Q;
    if (t.delayError && re ? (d = _(() => k(N, re)), d(t.delayError)) : (clearTimeout(p), d = null, re ? vt(n.errors, N, re) : Wt(n.errors, N)), (re ? !Wr(F, re) : F) || !cn(g) || $) {
      const H = {
        ...g,
        ...$ && jn(Q) ? { isValid: Q } : {},
        errors: n.errors,
        name: N
      };
      n = {
        ...n,
        ...H
      }, m.state.next(H);
    }
  }, ne = async (N) => {
    P(N, !0);
    const Q = await t.resolver(o, t.context, nB(N || u.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return P(N), Q;
  }, V = async (N) => {
    const { errors: Q } = await ne(N);
    if (N)
      for (const re of N) {
        const g = Ee(Q, re);
        g ? vt(n.errors, re, g) : Wt(n.errors, re);
      }
    else
      n.errors = Q;
    return Q;
  }, Y = async (N, Q, re = {
    valid: !0
  }) => {
    for (const g in N) {
      const F = N[g];
      if (F) {
        const { _f: $, ...H } = F;
        if ($) {
          const ae = u.array.has($.name), xe = F._f && rB(F._f);
          xe && h.validatingFields && P([g], !0);
          const oe = await wv(F, u.disabled, o, O, t.shouldUseNativeValidation && !Q, ae);
          if (xe && h.validatingFields && P([g]), oe[$.name] && (re.valid = !1, Q))
            break;
          !Q && (Ee(oe, $.name) ? ae ? Jz(n.errors, oe, $.name) : vt(n.errors, $.name, oe[$.name]) : Wt(n.errors, $.name));
        }
        !cn(H) && await Y(H, Q, re);
      }
    }
    return re.valid;
  }, te = () => {
    for (const N of u.unMount) {
      const Q = Ee(r, N);
      Q && (Q._f.refs ? Q._f.refs.every((re) => !gc(re)) : !gc(Q._f.ref)) && ge(N);
    }
    u.unMount = /* @__PURE__ */ new Set();
  }, R = (N, Q) => !t.disabled && (N && Q && vt(o, N, Q), !Wr(L(), a)), z = (N, Q, re) => uw(N, u, {
    ...l.mount ? o : Nt(Q) ? a : rr(N) ? { [N]: Q } : Q
  }, re, Q), B = (N) => bl(Ee(l.mount ? o : a, N, t.shouldUnregister ? Ee(a, N, []) : [])), U = (N, Q, re = {}) => {
    const g = Ee(r, N);
    let F = Q;
    if (g) {
      const $ = g._f;
      $ && (!$.disabled && vt(o, N, mw(Q, $)), F = Xs($.ref) && tn(Q) ? "" : Q, fw($.ref) ? [...$.ref.options].forEach((H) => H.selected = F.includes(H.value)) : $.refs ? fo($.ref) ? $.refs.length > 1 ? $.refs.forEach((H) => (!H.defaultChecked || !H.disabled) && (H.checked = Array.isArray(F) ? !!F.find((ae) => ae === H.value) : F === H.value)) : $.refs[0] && ($.refs[0].checked = !!F) : $.refs.forEach((H) => H.checked = H.value === F) : yf($.ref) ? $.ref.value = "" : ($.ref.value = F, $.ref.type || m.values.next({
        name: N,
        values: { ...o }
      })));
    }
    (re.shouldDirty || re.shouldTouch) && Z(N, F, re.shouldTouch, re.shouldDirty, !0), re.shouldValidate && M(N);
  }, K = (N, Q, re) => {
    for (const g in Q) {
      const F = Q[g], $ = `${N}.${g}`, H = Ee(r, $);
      (u.array.has(N) || jt(F) || H && !H._f) && !hi(F) ? K($, F, re) : U($, F, re);
    }
  }, j = (N, Q, re = {}) => {
    const g = Ee(r, N), F = u.array.has(N), $ = un(Q);
    vt(o, N, $), F ? (m.array.next({
      name: N,
      values: { ...o }
    }), (h.isDirty || h.dirtyFields) && re.shouldDirty && m.state.next({
      name: N,
      dirtyFields: Wa(a, o),
      isDirty: R(N, $)
    })) : g && !g._f && !tn($) ? K(N, $, re) : U(N, $, re), gv(N, u) && m.state.next({ ...n }), m.values.next({
      name: l.mount ? N : void 0,
      values: { ...o }
    });
  }, I = async (N) => {
    l.mount = !0;
    const Q = N.target;
    let re = Q.name, g = !0;
    const F = Ee(r, re), $ = () => Q.type ? vc(F._f) : nw(N), H = (ae) => {
      g = Number.isNaN(ae) || hi(ae) && isNaN(ae.getTime()) || Wr(ae, Ee(o, re, ae));
    };
    if (F) {
      let ae, xe;
      const oe = $(), Ne = N.type === Gs.BLUR || N.type === Gs.FOCUS_OUT, wt = !iB(F._f) && !t.resolver && !Ee(n.errors, re) && !F._f.deps || aB(Ne, Ee(n.touchedFields, re), n.isSubmitted, w, x), Fe = gv(re, u, Ne);
      vt(o, re, oe), Ne ? (F._f.onBlur && F._f.onBlur(N), d && d(0)) : F._f.onChange && F._f.onChange(N);
      const mt = Z(re, oe, Ne, !1), At = !cn(mt) || Fe;
      if (!Ne && m.values.next({
        name: re,
        type: N.type,
        values: { ...o }
      }), wt)
        return h.isValid && (t.mode === "onBlur" && Ne ? b() : Ne || b()), At && m.state.next({ name: re, ...Fe ? {} : mt });
      if (!Ne && Fe && m.state.next({ ...n }), t.resolver) {
        const { errors: pt } = await ne([re]);
        if (H(oe), g) {
          const Rt = Ev(n.errors, r, re), it = Ev(pt, r, Rt.name || re);
          ae = it.error, re = it.name, xe = cn(pt);
        }
      } else
        P([re], !0), ae = (await wv(F, u.disabled, o, O, t.shouldUseNativeValidation))[re], P([re]), H(oe), g && (ae ? xe = !1 : h.isValid && (xe = await Y(r, !0)));
      g && (F._f.deps && M(F._f.deps), J(re, xe, ae, mt));
    }
  }, X = (N, Q) => {
    if (Ee(n.errors, Q) && N.focus)
      return N.focus(), 1;
  }, M = async (N, Q = {}) => {
    let re, g;
    const F = Ya(N);
    if (t.resolver) {
      const $ = await V(Nt(N) ? N : F);
      re = cn($), g = N ? !F.some((H) => Ee($, H)) : re;
    } else N ? (g = (await Promise.all(F.map(async ($) => {
      const H = Ee(r, $);
      return await Y(H && H._f ? { [$]: H } : H);
    }))).every(Boolean), !(!g && !n.isValid) && b()) : g = re = await Y(r);
    return m.state.next({
      ...!rr(N) || h.isValid && re !== n.isValid ? {} : { name: N },
      ...t.resolver || !N ? { isValid: re } : {},
      errors: n.errors
    }), Q.shouldFocus && !g && qa(r, X, N ? F : u.mount), g;
  }, L = (N) => {
    const Q = {
      ...l.mount ? o : a
    };
    return Nt(N) ? Q : rr(N) ? Ee(Q, N) : N.map((re) => Ee(Q, re));
  }, ue = (N, Q) => ({
    invalid: !!Ee((Q || n).errors, N),
    isDirty: !!Ee((Q || n).dirtyFields, N),
    error: Ee((Q || n).errors, N),
    isValidating: !!Ee(n.validatingFields, N),
    isTouched: !!Ee((Q || n).touchedFields, N)
  }), he = (N) => {
    N && Ya(N).forEach((Q) => Wt(n.errors, Q)), m.state.next({
      errors: N ? n.errors : {}
    });
  }, ce = (N, Q, re) => {
    const g = (Ee(r, N, { _f: {} })._f || {}).ref, F = Ee(n.errors, N) || {}, { ref: $, message: H, type: ae, ...xe } = F;
    vt(n.errors, N, {
      ...xe,
      ...Q,
      ref: g
    }), m.state.next({
      name: N,
      errors: n.errors,
      isValid: !1
    }), re && re.shouldFocus && g && g.focus && g.focus();
  }, ye = (N, Q) => tr(N) ? m.values.subscribe({
    next: (re) => N(z(void 0, Q), re)
  }) : z(N, Q, !0), ge = (N, Q = {}) => {
    for (const re of N ? Ya(N) : u.mount)
      u.mount.delete(re), u.array.delete(re), Q.keepValue || (Wt(r, re), Wt(o, re)), !Q.keepError && Wt(n.errors, re), !Q.keepDirty && Wt(n.dirtyFields, re), !Q.keepTouched && Wt(n.touchedFields, re), !Q.keepIsValidating && Wt(n.validatingFields, re), !t.shouldUnregister && !Q.keepDefaultValue && Wt(a, re);
    m.values.next({
      values: { ...o }
    }), m.state.next({
      ...n,
      ...Q.keepDirty ? { isDirty: R() } : {}
    }), !Q.keepIsValid && b();
  }, be = ({ disabled: N, name: Q, field: re, fields: g }) => {
    (jn(N) && l.mount || N || u.disabled.has(Q)) && (N ? u.disabled.add(Q) : u.disabled.delete(Q), Z(Q, vc(re ? re._f : Ee(g, Q)._f), !1, !1, !0));
  }, we = (N, Q = {}) => {
    let re = Ee(r, N);
    const g = jn(Q.disabled) || jn(t.disabled);
    return vt(r, N, {
      ...re || {},
      _f: {
        ...re && re._f ? re._f : { ref: { name: N } },
        name: N,
        mount: !0,
        ...Q
      }
    }), u.mount.add(N), re ? be({
      field: re,
      disabled: jn(Q.disabled) ? Q.disabled : t.disabled,
      name: N
    }) : S(N, !0, Q.value), {
      ...g ? { disabled: Q.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!Q.required,
        min: Va(Q.min),
        max: Va(Q.max),
        minLength: Va(Q.minLength),
        maxLength: Va(Q.maxLength),
        pattern: Va(Q.pattern)
      } : {},
      name: N,
      onChange: I,
      onBlur: I,
      ref: (F) => {
        if (F) {
          we(N, Q), re = Ee(r, N);
          const $ = Nt(F.value) && F.querySelectorAll && F.querySelectorAll("input,select,textarea")[0] || F, H = tB($), ae = re._f.refs || [];
          if (H ? ae.find((xe) => xe === $) : $ === re._f.ref)
            return;
          vt(r, N, {
            _f: {
              ...re._f,
              ...H ? {
                refs: [
                  ...ae.filter(gc),
                  $,
                  ...Array.isArray(Ee(a, N)) ? [{}] : []
                ],
                ref: { type: $.type, name: N }
              } : { ref: $ }
            }
          }), S(N, !1, void 0, $);
        } else
          re = Ee(r, N, {}), re._f && (re._f.mount = !1), (t.shouldUnregister || Q.shouldUnregister) && !(rw(u.array, N) && l.action) && u.unMount.add(N);
      }
    };
  }, Ce = () => t.shouldFocusError && qa(r, X, u.mount), _e = (N) => {
    jn(N) && (m.state.next({ disabled: N }), qa(r, (Q, re) => {
      const g = Ee(r, re);
      g && (Q.disabled = g._f.disabled || N, Array.isArray(g._f.refs) && g._f.refs.forEach((F) => {
        F.disabled = g._f.disabled || N;
      }));
    }, 0, !1));
  }, Se = (N, Q) => async (re) => {
    let g;
    re && (re.preventDefault && re.preventDefault(), re.persist && re.persist());
    let F = un(o);
    if (u.disabled.size)
      for (const $ of u.disabled)
        vt(F, $, void 0);
    if (m.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: $, values: H } = await ne();
      n.errors = $, F = H;
    } else
      await Y(r);
    if (Wt(n.errors, "root"), cn(n.errors)) {
      m.state.next({
        errors: {}
      });
      try {
        await N(F, re);
      } catch ($) {
        g = $;
      }
    } else
      Q && await Q({ ...n.errors }, re), Ce(), setTimeout(Ce);
    if (m.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: cn(n.errors) && !g,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), g)
      throw g;
  }, fe = (N, Q = {}) => {
    Ee(r, N) && (Nt(Q.defaultValue) ? j(N, un(Ee(a, N))) : (j(N, Q.defaultValue), vt(a, N, un(Q.defaultValue))), Q.keepTouched || Wt(n.touchedFields, N), Q.keepDirty || (Wt(n.dirtyFields, N), n.isDirty = Q.defaultValue ? R(N, un(Ee(a, N))) : R()), Q.keepError || (Wt(n.errors, N), h.isValid && b()), m.state.next({ ...n }));
  }, Re = (N, Q = {}) => {
    const re = N ? un(N) : a, g = un(re), F = cn(N), $ = F ? a : g;
    if (Q.keepDefaultValues || (a = re), !Q.keepValues) {
      if (Q.keepDirtyValues) {
        const H = /* @__PURE__ */ new Set([
          ...u.mount,
          ...Object.keys(Wa(a, o))
        ]);
        for (const ae of Array.from(H))
          Ee(n.dirtyFields, ae) ? vt($, ae, Ee(o, ae)) : j(ae, Ee($, ae));
      } else {
        if (mf && Nt(N))
          for (const H of u.mount) {
            const ae = Ee(r, H);
            if (ae && ae._f) {
              const xe = Array.isArray(ae._f.refs) ? ae._f.refs[0] : ae._f.ref;
              if (Xs(xe)) {
                const oe = xe.closest("form");
                if (oe) {
                  oe.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      o = t.shouldUnregister ? Q.keepDefaultValues ? un(a) : {} : un($), m.array.next({
        values: { ...$ }
      }), m.values.next({
        values: { ...$ }
      });
    }
    u = {
      mount: Q.keepDirtyValues ? u.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, l.mount = !h.isValid || !!Q.keepIsValid || !!Q.keepDirtyValues, l.watch = !!t.shouldUnregister, m.state.next({
      submitCount: Q.keepSubmitCount ? n.submitCount : 0,
      isDirty: F ? !1 : Q.keepDirty ? n.isDirty : !!(Q.keepDefaultValues && !Wr(N, a)),
      isSubmitted: Q.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: F ? {} : Q.keepDirtyValues ? Q.keepDefaultValues && o ? Wa(a, o) : n.dirtyFields : Q.keepDefaultValues && N ? Wa(a, N) : Q.keepDirty ? n.dirtyFields : {},
      touchedFields: Q.keepTouched ? n.touchedFields : {},
      errors: Q.keepErrors ? n.errors : {},
      isSubmitSuccessful: Q.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ve = (N, Q) => Re(tr(N) ? N(o) : N, Q);
  return {
    control: {
      register: we,
      unregister: ge,
      getFieldState: ue,
      handleSubmit: Se,
      setError: ce,
      _executeSchema: ne,
      _getWatch: z,
      _getDirty: R,
      _updateValid: b,
      _removeUnmounted: te,
      _updateFieldArray: C,
      _updateDisabledField: be,
      _getFieldArray: B,
      _reset: Re,
      _resetDefaultValues: () => tr(t.defaultValues) && t.defaultValues().then((N) => {
        ve(N, t.resetOptions), m.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (N) => {
        n = {
          ...n,
          ...N
        };
      },
      _disableForm: _e,
      _subjects: m,
      _proxyFormState: h,
      _setErrors: D,
      get _fields() {
        return r;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return l;
      },
      set _state(N) {
        l = N;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return u;
      },
      set _names(N) {
        u = N;
      },
      get _formState() {
        return n;
      },
      set _formState(N) {
        n = N;
      },
      get _options() {
        return t;
      },
      set _options(N) {
        t = {
          ...t,
          ...N
        };
      }
    },
    trigger: M,
    register: we,
    handleSubmit: Se,
    watch: ye,
    setValue: j,
    getValues: L,
    reset: ve,
    resetField: fe,
    clearErrors: he,
    unregister: ge,
    setError: ce,
    setFocus: (N, Q = {}) => {
      const re = Ee(r, N), g = re && re._f;
      if (g) {
        const F = g.refs ? g.refs[0] : g.ref;
        F.focus && (F.focus(), Q.shouldSelect && tr(F.select) && F.select());
      }
    },
    getFieldState: ue
  };
}
function uB(e = {}) {
  const t = $e.useRef(void 0), n = $e.useRef(void 0), [r, a] = $e.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: tr(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: tr(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...lB(e),
    formState: r
  });
  const o = t.current.control;
  return o._options = e, vf({
    subject: o._subjects.state,
    next: (l) => {
      sw(l, o._proxyFormState, o._updateFormState, !0) && a({ ...o._formState });
    }
  }), $e.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), $e.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const l = o._getDirty();
      l !== r.isDirty && o._subjects.state.next({
        isDirty: l
      });
    }
  }, [o, r.isDirty]), $e.useEffect(() => {
    e.values && !Wr(e.values, n.current) ? (o._reset(e.values, o._options.resetOptions), n.current = e.values, a((l) => ({ ...l }))) : o._resetDefaultValues();
  }, [e.values, o]), $e.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), $e.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), $e.useEffect(() => {
    e.shouldUnregister && o._subjects.values.next({
      values: o._getWatch()
    });
  }, [e.shouldUnregister, o]), t.current.formState = ow(r, o), t.current;
}
const cB = ({
  children: e,
  onSubmit: t,
  formMethods: n,
  onIsSubmittingChange: r,
  ...a
}) => {
  const o = n || uB(), l = async (u) => {
    u.preventDefault(), u.stopPropagation(), r == null || r(!0);
    const d = await Promise.resolve(o.handleSubmit(t)(u));
    return r == null || r(!1), d;
  };
  return /* @__PURE__ */ v.jsx(Yz, { ...o, children: /* @__PURE__ */ v.jsx("form", { onSubmit: l, ...a, children: e }) });
}, dB = ({ children: e, ...t }) => {
  const { control: n } = Ti();
  return /* @__PURE__ */ v.jsx(
    Xz,
    {
      ...t,
      control: n,
      render: ({ field: { onChange: r, ...a }, fieldState: o, formState: l }) => {
        const u = (p) => {
          rd(p.target) ? r(Array.from(p.target.selectedOptions, (h) => h.value)) : p.target.type === "file" ? p.target.multiple ? r(Array.from(p.target.files)) : r(p.target.files[0] || null) : r(p);
        }, d = {
          ...a,
          error: o.error,
          // formState,
          onChange: u
        };
        return /* @__PURE__ */ v.jsx(Tt, { ...d, children: e });
      }
    }
  );
}, fB = ({
  asChild: e,
  loading: t,
  ...n
}) => {
  const { formState: r } = Ti(), a = e ? Tt : "button", o = e ? {
    loading: t !== void 0 ? t : r.isSubmitting
  } : {};
  return /* @__PURE__ */ v.jsx(a, { ...o, ...n });
}, pB = ({
  asChild: e,
  name: t = "root",
  ...n
}) => {
  const {
    formState: { errors: r }
  } = Ti(), a = r == null ? void 0 : r[t], o = e ? Tt : "div";
  return Ba(a) ? /* @__PURE__ */ v.jsx(o, { ...n, "data-error": (a == null ? void 0 : a.message) || "" }) : null;
}, hB = ({ name: e = "root" }) => {
  const {
    formState: { errors: t }
  } = Ti(), n = t == null ? void 0 : t[e];
  return Ba(n) ? (n == null ? void 0 : n.message) || "" : null;
}, NB = Object.assign(cB, {
  Field: dB,
  Button: fB,
  Error: pB,
  ErrorMessage: hB
}), Cv = ({ value: e, label: t, disabled: n = !1, checked: r }) => /* @__PURE__ */ v.jsxs(Ze.Option, { value: e, className: "flex items-center gap-2 py-1 text-sm group", disabled: n, children: [
  /* @__PURE__ */ v.jsx(
    ke,
    {
      variant: "checkable",
      disabled: n,
      checked: r,
      className: "relative flex items-center justify-center w-5 h-5 rounded text-white",
      children: /* @__PURE__ */ v.jsx(ke.Content, { className: "items-center justify-center", children: /* @__PURE__ */ v.jsx(Ze.OptionIndicator, { children: /* @__PURE__ */ v.jsx(nl, {}) }) })
    }
  ),
  /* @__PURE__ */ v.jsx(Ze.OptionText, { className: "cursor-default", children: t || e })
] }), jB = ({
  // multi select props
  options: e,
  defaultOpen: t = !1,
  open: n,
  onOpenChange: r,
  allowAddOption: a,
  onAddOption: o,
  placeholder: l,
  // remaining are select props we can pass down
  // the ones mentioned here are the ones we want to override
  value: u,
  onChange: d,
  onFocus: p,
  ...h
}) => {
  const m = $e.useRef(null), [x, w] = ht(!1), [O, _] = Xt([], u, d), { onSelectedChange: b, selectNativeProps: P } = cf({
    focusRef: m,
    onFocus: p,
    value: O,
    onChange: _
  });
  return /* @__PURE__ */ v.jsxs(
    Ze,
    {
      selected: O,
      onSelectedChange: b,
      disabled: h.disabled,
      multiple: !0,
      open: x,
      onOpenChange: w,
      className: "relative",
      children: [
        /* @__PURE__ */ v.jsx(
          Ze.Trigger,
          {
            ref: m,
            className: "!outline-none absolute w-0 h-0",
            onFocus: () => w(!0),
            disabled: h.disabled
          }
        ),
        /* @__PURE__ */ v.jsx(Ze.Content, { className: "flex flex-col items-start", children: e.map((C) => {
          if (Array.isArray(C)) {
            const [k, D] = C;
            return /* @__PURE__ */ v.jsxs($e.Fragment, { children: [
              /* @__PURE__ */ v.jsx(Ze.Separator, { className: "border-t border-neutral-200 my-2 w-full" }),
              /* @__PURE__ */ v.jsxs(Ze.Group, { className: "flex flex-col", children: [
                /* @__PURE__ */ v.jsx(Ze.GroupLabel, { className: "font-medium text-sm px-2 py-1 !pl-7", children: k }),
                D.map((S) => /* @__PURE__ */ v.jsx(
                  Cv,
                  {
                    ...S,
                    disabled: h.disabled,
                    checked: O == null ? void 0 : O.includes(S.value)
                  },
                  S.value
                ))
              ] })
            ] }, k);
          }
          return /* @__PURE__ */ v.jsx(
            Cv,
            {
              ...C,
              disabled: h.disabled,
              checked: O == null ? void 0 : O.includes(C.value)
            },
            C.value
          );
        }) }),
        /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(Ze.Native, { ...h, ...P }) })
      ]
    }
  );
}, mB = (e) => String(new Date(e)) !== "Invalid Date", RB = ({ ref: e, className: t, disabled: n, readOnly: r, required: a, name: o, ...l }) => {
  const u = $e.useRef(null), d = $e.useRef(null), p = $e.useRef(null), h = $e.useRef(null), [m, x] = Xt("", l.value, l.onChange), [w, O] = ht(""), [_, b] = ht(""), [P, C] = ht(""), k = (V, Y) => {
    let te = "";
    return V === "day" && Y && _ && P ? te = `${P.padStart(4, "0")}-${_.padStart(2, "0")}-${Y.padStart(2, "0")}` : V === "month" && w && Y && P ? te = `${P.padStart(4, "0")}-${Y.padStart(2, "0")}-${w.padStart(2, "0")}` : V === "year" && w && _ && Y && (te = `${Y.padStart(4, "0")}-${_.padStart(2, "0")}-${w.padStart(2, "0")}`), te;
  }, D = (V, Y = "start") => {
    var te, R;
    (te = V.current) == null || te.focus(), (R = V.current) == null || R.setSelectionRange(
      // handle start, end and all
      Y === "start" || Y === "all" ? 0 : V.current.value.length,
      Y === "end" || Y === "all" ? V.current.value.length : 0
    );
  }, S = (V, Y, te) => (R) => {
    const z = R.target.value;
    if (!/^\d*$/.test(z) || V === "day" && z.length > 2 || V === "month" && z.length > 2 || V === "year" && z.length > 4) return;
    te(z);
    const B = V === "day" && z.length === 2 && parseInt(z) <= 31 && parseInt(z) >= 1, U = V === "month" && z.length === 2 && parseInt(z) <= 12 && parseInt(z) >= 1;
    V === "day" && B ? D(p, "all") : V === "month" && U && D(h, "all");
    const K = k(V, z);
    pn(u.current, mB(K) ? K : "");
  }, Z = (V, Y, te) => (R) => {
    const z = R.currentTarget.value.length, B = R.currentTarget.selectionStart === 0, U = R.currentTarget.selectionStart === z;
    if (R.key === "Backspace") {
      if (Y !== "")
        return;
      V === "month" ? (R.preventDefault(), D(d, "end")) : V === "year" && (R.preventDefault(), D(p, "end"));
    } else R.key === "ArrowLeft" && B ? V === "month" ? (R.preventDefault(), D(d, "end")) : V === "year" && (R.preventDefault(), D(p, "end")) : R.key === "ArrowRight" && U && (V === "day" ? (R.preventDefault(), D(p)) : V === "month" && (R.preventDefault(), D(h)));
  }, J = (V, Y, te) => (R) => {
    var U;
    const z = R.target.value;
    !(R.relatedTarget === d.current || R.relatedTarget === p.current || R.relatedTarget === h.current) && ((U = u.current) == null ? void 0 : U.value) === "" && (O(""), b(""), C("")), (V === "day" || V === "month") && z.length > 0 && z.length < 2 ? te(z.padStart(2, "0")) : V === "year" && z.length > 0 && z.length < 4 && te(z.padStart(4, "0"));
  }, ne = (V, Y, te) => ({
    value: Y,
    onChange: S(V, Y, te),
    onKeyDown: Z(V, Y),
    onBlur: J(V, Y, te),
    disabled: n,
    readOnly: r,
    required: a
  });
  return /* @__PURE__ */ v.jsxs("div", { className: "flex gap-2 relative", children: [
    /* @__PURE__ */ v.jsx(
      gi,
      {
        ref: d,
        className: Pe("w-11", t),
        inputClassName: "text-center",
        minLength: 1,
        maxLength: 2,
        min: 1,
        max: 31,
        name: `${o}-day`,
        placeholder: "DD",
        hideClear: !0,
        ...ne("day", w, O)
      }
    ),
    /* @__PURE__ */ v.jsx(
      gi,
      {
        ref: p,
        className: Pe("w-11", t),
        inputClassName: "text-center",
        minLength: 1,
        maxLength: 2,
        min: 1,
        max: 12,
        name: `${o}-month`,
        placeholder: "MM",
        tabIndex: -1,
        hideClear: !0,
        ...ne("month", _, b)
      }
    ),
    /* @__PURE__ */ v.jsx(
      gi,
      {
        ref: h,
        className: Pe("w-16", t),
        inputClassName: "text-center",
        minLength: 4,
        maxLength: 4,
        name: `${o}-year`,
        placeholder: "YYYY",
        tabIndex: -1,
        hideClear: !0,
        ...ne("year", P, C)
      }
    ),
    /* @__PURE__ */ v.jsx(ke.Native, { asChild: !0, children: /* @__PURE__ */ v.jsx(
      "input",
      {
        ...l,
        value: m,
        onChange: x,
        ref: nn(u, e),
        required: a,
        name: o,
        readOnly: r,
        tabIndex: -1,
        onFocus: () => {
          var V;
          return (V = d.current) == null ? void 0 : V.focus();
        }
      }
    ) })
  ] });
}, gB = ({ disabled: e, className: t, ...n }) => {
  const [r, a] = Xt(!1, n.checked, n.onChange);
  return /* @__PURE__ */ v.jsxs(
    ke,
    {
      variant: "checkable",
      checked: r,
      disabled: e,
      className: Pe("relative flex items-center justify-center w-5 h-5 rounded-full", t),
      children: [
        /* @__PURE__ */ v.jsx(ke.Native, { asChild: !0, variant: "inset", children: /* @__PURE__ */ v.jsx(
          "input",
          {
            ...n,
            disabled: e,
            type: "radio",
            className: "peer",
            checked: r,
            onChange: a
          }
        ) }),
        /* @__PURE__ */ v.jsx(ke.Content, { className: "hidden peer-checked:flex items-center justify-center", children: /* @__PURE__ */ v.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
      ]
    }
  );
}, yc = ({
  label: e,
  ...t
}) => /* @__PURE__ */ v.jsxs("label", { className: "flex items-center gap-2 py-1 text-sm", children: [
  /* @__PURE__ */ v.jsx(gB, { ...t }),
  /* @__PURE__ */ v.jsx("span", { children: e })
] }), $B = ({
  options: e,
  name: t,
  className: n,
  disabled: r,
  required: a,
  emptyLabel: o,
  ...l
}) => {
  const [u, d] = Xt("", l.value, l.onChange);
  return /* @__PURE__ */ v.jsxs("div", { className: Pe("flex flex-col", n), children: [
    !a && /* @__PURE__ */ v.jsx(
      yc,
      {
        disabled: r,
        required: a,
        value: "",
        checked: !u,
        onChange: d,
        name: t,
        label: o
      }
    ),
    e.map((p) => {
      if (Array.isArray(p)) {
        const [h, m] = p;
        return /* @__PURE__ */ v.jsxs($e.Fragment, { children: [
          /* @__PURE__ */ v.jsx(Ze.Separator, { className: "border-t border-neutral-200 my-2" }),
          /* @__PURE__ */ v.jsxs(Ze.Group, { className: "flex flex-col", children: [
            /* @__PURE__ */ v.jsx(Ze.GroupLabel, { className: "font-medium text-sm px-2 py-1 !pl-7", children: h }),
            m.map((x) => /* @__PURE__ */ v.jsx(
              yc,
              {
                disabled: r,
                required: a,
                ...x,
                checked: u === x.value,
                onChange: d,
                name: t
              },
              x.value
            ))
          ] })
        ] }, h);
      }
      return /* @__PURE__ */ v.jsx(
        yc,
        {
          disabled: r,
          required: a,
          ...p,
          checked: u === p.value,
          onChange: d,
          name: t
        },
        p.value
      );
    })
  ] });
}, FB = ({ className: e, disabled: t, defaultChecked: n = !1, ...r }) => {
  const [a, o] = Xt(!1, r.checked, r.onChange);
  return /* @__PURE__ */ v.jsxs(
    ke,
    {
      variant: "checkable",
      checked: a,
      disabled: t,
      className: Pe(
        "relative flex items-center w-10 h-6 rounded-full",
        !t && !a && "bg-neutral-50",
        e
      ),
      children: [
        /* @__PURE__ */ v.jsx(ke.Native, { asChild: !0, variant: "inset", children: /* @__PURE__ */ v.jsx("input", { ...r, disabled: t, type: "checkbox", checked: a, onChange: o }) }),
        /* @__PURE__ */ v.jsx(ke.Content, { children: /* @__PURE__ */ v.jsx(
          "span",
          {
            className: Pe(
              "bg-white transform transition-all duration-300 ease-in-out inline-block w-5 h-5 rounded-full border shadow-sm pointer-events-none",
              a ? "translate-x-[1.125rem] border-theme-900" : "translate-x-px border-neutral-300",
              t && "shadow-none",
              t && a && "border-neutral-400"
            )
          }
        ) })
      ]
    }
  );
}, LB = ({
  options: e,
  name: t,
  className: n,
  disabled: r,
  required: a,
  ...o
}) => {
  const [l, u] = Xt("", o.value, o.onChange);
  return /* @__PURE__ */ v.jsx("div", { className: Pe("flex gap-1 bg-neutral-100 p-1 rounded-md", n), children: e.map((d) => {
    const p = l === d.value;
    return /* @__PURE__ */ v.jsxs(
      ke,
      {
        variant: "checkable",
        checked: p,
        disabled: r,
        className: Pe(
          "relative flex-auto text-center text-sm py-1 px-2 font-normal rounded",
          !p && "bg-transparent border-transparent shadow-none",
          !r && "hover:border-neutral-300"
        ),
        children: [
          /* @__PURE__ */ v.jsx(ke.Native, { asChild: !0, variant: "inset", children: /* @__PURE__ */ v.jsx(
            "input",
            {
              disabled: r,
              type: "radio",
              checked: p,
              onChange: u,
              name: t,
              required: a,
              value: d.value
            }
          ) }),
          /* @__PURE__ */ v.jsx(
            ke.Content,
            {
              className: Pe(
                "pointer-events-none select-none justify-center items-center text-center",
                p && "text-white"
              ),
              children: d.label
            }
          )
        ]
      },
      d.value
    );
  }) });
};
export {
  _B as BooleanField,
  pb as Calendar,
  bD as Checkbox,
  jB as CheckboxGroup,
  CB as DateField,
  MV as DateInput,
  TB as DateTimeField,
  WV as DateTimeInput,
  kB as DecimalField,
  ns as Field,
  OB as FileField,
  Fz as FileInput,
  NB as Form,
  Yz as FormProvider,
  SB as HiddenField,
  Lz as HiddenInput,
  DB as IntegerField,
  gi as IntegerInput,
  RB as MemorableDateInput,
  zz as MultiSelect,
  PB as MultiSelectField,
  gB as Radio,
  $B as RadioGroup,
  AB as SelectField,
  fb as SingleSelect,
  IB as StringField,
  FB as Switch,
  Bz as TextArea,
  MB as TextField,
  Yv as TextInput,
  RV as TimeInput,
  LB as ToggleButton,
  ke as Widget,
  bB as getNativeSelectValue,
  pn as setNativeInputValue,
  Uv as setNativeSelectValue,
  wB as setNativeTextareaValue,
  Ti as useFormContext,
  Xt as useWidgetState
};
//# sourceMappingURL=index.js.map
