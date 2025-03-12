import * as te from "react";
import Oe, { useState as He, useContext as At, forwardRef as Sl, createElement as vf, useId as jx, useEffect as Ue, useLayoutEffect as oa, createContext as pa, useRef as Se, useCallback as Be, useMemo as Xe, cloneElement as ak, useReducer as Fx, Component as ik, useImperativeHandle as ok, Fragment as sk } from "react";
import * as Bx from "react-dom";
import uk, { flushSync as lk } from "react-dom";
import { renderToString as Lx } from "react-dom/server";
import './index.css';var Di = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yf = { exports: {} }, Do = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bv;
function ck() {
  if (bv) return Do;
  bv = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var u = null;
    if (o !== void 0 && (u = "" + o), a.key !== void 0 && (u = "" + a.key), "key" in a) {
      o = {};
      for (var l in a)
        l !== "key" && (o[l] = a[l]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: u,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return Do.Fragment = t, Do.jsx = n, Do.jsxs = n, Do;
}
var Eo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xv;
function dk() {
  return xv || (xv = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === B ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case G:
          return "Fragment";
        case S:
          return "Portal";
        case k:
          return "Profiler";
        case Z:
          return "StrictMode";
        case j:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case R:
            return (g.displayName || "Context") + ".Provider";
          case F:
            return (g._context.displayName || "Context") + ".Consumer";
          case I:
            var K = g.render;
            return g = g.displayName, g || (g = K.displayName || K.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case L:
            return K = g.displayName || null, K !== null ? K : e(g.type) || "Memo";
          case H:
            K = g._payload, g = g._init;
            try {
              return e(g(K));
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
        var K = !1;
      } catch {
        K = !0;
      }
      if (K) {
        K = console;
        var Y = K.error, X = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return Y.call(
          K,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(g);
      }
    }
    function r() {
    }
    function a() {
      if (ce === 0) {
        ye = console.log, ge = console.info, $e = console.warn, oe = console.error, xe = console.group, be = console.groupCollapsed, Ce = console.groupEnd;
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
          log: W({}, g, { value: ye }),
          info: W({}, g, { value: ge }),
          warn: W({}, g, { value: $e }),
          error: W({}, g, { value: oe }),
          group: W({}, g, { value: xe }),
          groupCollapsed: W({}, g, { value: be }),
          groupEnd: W({}, g, { value: Ce })
        });
      }
      0 > ce && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function u(g) {
      if (pe === void 0)
        try {
          throw Error();
        } catch (Y) {
          var K = Y.stack.trim().match(/\n( *(at )?)/);
          pe = K && K[1] || "", Fe = -1 < Y.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < Y.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + pe + g + Fe;
    }
    function l(g, K) {
      if (!g || we) return "";
      var Y = rt.get(g);
      if (Y !== void 0) return Y;
      we = !0, Y = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var X = null;
      X = J.H, J.H = null, a();
      try {
        var se = {
          DetermineComponentFrameRoot: function() {
            try {
              if (K) {
                var mt = function() {
                  throw Error();
                };
                if (Object.defineProperty(mt.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(mt, []);
                  } catch (st) {
                    var Vt = st;
                  }
                  Reflect.construct(g, [], mt);
                } else {
                  try {
                    mt.call();
                  } catch (st) {
                    Vt = st;
                  }
                  g.call(mt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (st) {
                  Vt = st;
                }
                (mt = g()) && typeof mt.catch == "function" && mt.catch(function() {
                });
              }
            } catch (st) {
              if (st && Vt && typeof st.stack == "string")
                return [st.stack, Vt.stack];
            }
            return [null, null];
          }
        };
        se.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var De = Object.getOwnPropertyDescriptor(
          se.DetermineComponentFrameRoot,
          "name"
        );
        De && De.configurable && Object.defineProperty(
          se.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var le = se.DetermineComponentFrameRoot(), Re = le[0], $t = le[1];
        if (Re && $t) {
          var Le = Re.split(`
`), gt = $t.split(`
`);
          for (le = De = 0; De < Le.length && !Le[De].includes(
            "DetermineComponentFrameRoot"
          ); )
            De++;
          for (; le < gt.length && !gt[le].includes(
            "DetermineComponentFrameRoot"
          ); )
            le++;
          if (De === Le.length || le === gt.length)
            for (De = Le.length - 1, le = gt.length - 1; 1 <= De && 0 <= le && Le[De] !== gt[le]; )
              le--;
          for (; 1 <= De && 0 <= le; De--, le--)
            if (Le[De] !== gt[le]) {
              if (De !== 1 || le !== 1)
                do
                  if (De--, le--, 0 > le || Le[De] !== gt[le]) {
                    var Nt = `
` + Le[De].replace(
                      " at new ",
                      " at "
                    );
                    return g.displayName && Nt.includes("<anonymous>") && (Nt = Nt.replace("<anonymous>", g.displayName)), typeof g == "function" && rt.set(g, Nt), Nt;
                  }
                while (1 <= De && 0 <= le);
              break;
            }
        }
      } finally {
        we = !1, J.H = X, o(), Error.prepareStackTrace = Y;
      }
      return Le = (Le = g ? g.displayName || g.name : "") ? u(Le) : "", typeof g == "function" && rt.set(g, Le), Le;
    }
    function d(g) {
      if (g == null) return "";
      if (typeof g == "function") {
        var K = g.prototype;
        return l(
          g,
          !(!K || !K.isReactComponent)
        );
      }
      if (typeof g == "string") return u(g);
      switch (g) {
        case j:
          return u("Suspense");
        case E:
          return u("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case I:
            return g = l(g.render, !1), g;
          case L:
            return d(g.type);
          case H:
            K = g._payload, g = g._init;
            try {
              return d(g(K));
            } catch {
            }
        }
      return "";
    }
    function f() {
      var g = J.A;
      return g === null ? null : g.getOwner();
    }
    function p(g) {
      if (A.call(g, "key")) {
        var K = Object.getOwnPropertyDescriptor(g, "key").get;
        if (K && K.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function m(g, K) {
      function Y() {
        Je || (Je = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          K
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: Y,
        configurable: !0
      });
    }
    function v() {
      var g = e(this.type);
      return U[g] || (U[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function $(g, K, Y, X, se, De) {
      return Y = De.ref, g = {
        $$typeof: P,
        type: g,
        key: K,
        props: De,
        _owner: se
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: v
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
    function _(g, K, Y, X, se, De) {
      if (typeof g == "string" || typeof g == "function" || g === G || g === k || g === Z || g === j || g === E || g === z || typeof g == "object" && g !== null && (g.$$typeof === H || g.$$typeof === L || g.$$typeof === R || g.$$typeof === F || g.$$typeof === I || g.$$typeof === re || g.getModuleId !== void 0)) {
        var le = K.children;
        if (le !== void 0)
          if (X)
            if (ue(le)) {
              for (X = 0; X < le.length; X++)
                x(le[X], g);
              Object.freeze && Object.freeze(le);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else x(le, g);
      } else
        le = "", (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), g === null ? X = "null" : ue(g) ? X = "array" : g !== void 0 && g.$$typeof === P ? (X = "<" + (e(g.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : X = typeof g, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          X,
          le
        );
      if (A.call(K, "key")) {
        le = e(g);
        var Re = Object.keys(K).filter(function(Le) {
          return Le !== "key";
        });
        X = 0 < Re.length ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}", ne[le + X] || (Re = 0 < Re.length ? "{" + Re.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          le,
          Re,
          le
        ), ne[le + X] = !0);
      }
      if (le = null, Y !== void 0 && (n(Y), le = "" + Y), p(K) && (n(K.key), le = "" + K.key), "key" in K) {
        Y = {};
        for (var $t in K)
          $t !== "key" && (Y[$t] = K[$t]);
      } else Y = K;
      return le && m(
        Y,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), $(g, le, De, se, f(), Y);
    }
    function x(g, K) {
      if (typeof g == "object" && g && g.$$typeof !== ot) {
        if (ue(g))
          for (var Y = 0; Y < g.length; Y++) {
            var X = g[Y];
            w(X) && M(X, K);
          }
        else if (w(g))
          g._store && (g._store.validated = 1);
        else if (g === null || typeof g != "object" ? Y = null : (Y = N && g[N] || g["@@iterator"], Y = typeof Y == "function" ? Y : null), typeof Y == "function" && Y !== g.entries && (Y = Y.call(g), Y !== g))
          for (; !(g = Y.next()).done; )
            w(g.value) && M(g.value, K);
      }
    }
    function w(g) {
      return typeof g == "object" && g !== null && g.$$typeof === P;
    }
    function M(g, K) {
      if (g._store && !g._store.validated && g.key == null && (g._store.validated = 1, K = D(K), !ae[K])) {
        ae[K] = !0;
        var Y = "";
        g && g._owner != null && g._owner !== f() && (Y = null, typeof g._owner.tag == "number" ? Y = e(g._owner.type) : typeof g._owner.name == "string" && (Y = g._owner.name), Y = " It was passed a child from " + Y + ".");
        var X = J.getCurrentStack;
        J.getCurrentStack = function() {
          var se = d(g.type);
          return X && (se += X() || ""), se;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          K,
          Y
        ), J.getCurrentStack = X;
      }
    }
    function D(g) {
      var K = "", Y = f();
      return Y && (Y = e(Y.type)) && (K = `

Check the render method of \`` + Y + "`."), K || (g = e(g)) && (K = `

Check the top-level render call using <` + g + ">."), K;
    }
    var C = Oe, P = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), N = Symbol.iterator, B = Symbol.for("react.client.reference"), J = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, W = Object.assign, re = Symbol.for("react.client.reference"), ue = Array.isArray, ce = 0, ye, ge, $e, oe, xe, be, Ce;
    r.__reactDisabledLog = !0;
    var pe, Fe, we = !1, rt = new (typeof WeakMap == "function" ? WeakMap : Map)(), ot = Symbol.for("react.client.reference"), Je, U = {}, ne = {}, ae = {};
    Eo.Fragment = G, Eo.jsx = function(g, K, Y, X, se) {
      return _(g, K, Y, !1, X, se);
    }, Eo.jsxs = function(g, K, Y, X, se) {
      return _(g, K, Y, !0, X, se);
    };
  }()), Eo;
}
process.env.NODE_ENV === "production" ? yf.exports = ck() : yf.exports = dk();
var y = yf.exports;
const dp = "-", fk = (e) => {
  const t = hk(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const o = a.split(dp);
      return o[0] === "" && o.length !== 1 && o.shift(), Vx(o, t) || pk(a);
    },
    getConflictingClassGroupIds: (a, o) => {
      const u = n[a] || [];
      return o && r[a] ? [...u, ...r[a]] : u;
    }
  };
}, Vx = (e, t) => {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), o = a ? Vx(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const u = e.join(dp);
  return (n = t.validators.find(({
    validator: l
  }) => l(u))) == null ? void 0 : n.classGroupId;
}, wv = /^\[(.+)\]$/, pk = (e) => {
  if (wv.test(e)) {
    const t = wv.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, hk = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return gk(Object.entries(e.classGroups), n).forEach(([a, o]) => {
    bf(o, r, a, t);
  }), r;
}, bf = (e, t, n, r) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const o = a === "" ? t : $v(t, a);
      o.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (mk(a)) {
        bf(a(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([o, u]) => {
      bf(u, $v(t, o), n, r);
    });
  });
}, $v = (e, t) => {
  let n = e;
  return t.split(dp).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, mk = (e) => e.isThemeGetter, gk = (e, t) => t ? e.map(([n, r]) => {
  const a = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([u, l]) => [t + u, l])) : o);
  return [n, a];
}) : e, vk = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const a = (o, u) => {
    n.set(o, u), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let u = n.get(o);
      if (u !== void 0)
        return u;
      if ((u = r.get(o)) !== void 0)
        return a(o, u), u;
    },
    set(o, u) {
      n.has(o) ? n.set(o, u) : a(o, u);
    }
  };
}, Wx = "!", yk = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, a = t[0], o = t.length, u = (l) => {
    const d = [];
    let f = 0, p = 0, m;
    for (let w = 0; w < l.length; w++) {
      let M = l[w];
      if (f === 0) {
        if (M === a && (r || l.slice(w, w + o) === t)) {
          d.push(l.slice(p, w)), p = w + o;
          continue;
        }
        if (M === "/") {
          m = w;
          continue;
        }
      }
      M === "[" ? f++ : M === "]" && f--;
    }
    const v = d.length === 0 ? l : l.substring(p), $ = v.startsWith(Wx), _ = $ ? v.substring(1) : v, x = m && m > p ? m - p : void 0;
    return {
      modifiers: d,
      hasImportantModifier: $,
      baseClassName: _,
      maybePostfixModifierPosition: x
    };
  };
  return n ? (l) => n({
    className: l,
    parseClassName: u
  }) : u;
}, bk = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, xk = (e) => ({
  cache: vk(e.cacheSize),
  parseClassName: yk(e),
  ...fk(e)
}), wk = /\s+/, $k = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  } = t, o = [], u = e.trim().split(wk);
  let l = "";
  for (let d = u.length - 1; d >= 0; d -= 1) {
    const f = u[d], {
      modifiers: p,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: $
    } = n(f);
    let _ = !!$, x = r(_ ? v.substring(0, $) : v);
    if (!x) {
      if (!_) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (x = r(v), !x) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      _ = !1;
    }
    const w = bk(p).join(":"), M = m ? w + Wx : w, D = M + x;
    if (o.includes(D))
      continue;
    o.push(D);
    const C = a(x, _);
    for (let P = 0; P < C.length; ++P) {
      const S = C[P];
      o.push(M + S);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Dk() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = zx(t)) && (r && (r += " "), r += n);
  return r;
}
const zx = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = zx(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Ek(e, ...t) {
  let n, r, a, o = u;
  function u(d) {
    const f = t.reduce((p, m) => m(p), e());
    return n = xk(f), r = n.cache.get, a = n.cache.set, o = l, l(d);
  }
  function l(d) {
    const f = r(d);
    if (f)
      return f;
    const p = $k(d, n);
    return a(d, p), p;
  }
  return function() {
    return o(Dk.apply(null, arguments));
  };
}
const Et = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ux = /^\[(?:([a-z-]+):)?(.+)\]$/i, _k = /^\d+\/\d+$/, Ck = /* @__PURE__ */ new Set(["px", "full", "screen"]), Tk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Sk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, kk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ok = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pr = (e) => Ti(e) || Ck.has(e) || _k.test(e), Zr = (e) => Ki(e, "length", Bk), Ti = (e) => !!e && !Number.isNaN(Number(e)), md = (e) => Ki(e, "number", Ti), _o = (e) => !!e && Number.isInteger(Number(e)), Ak = (e) => e.endsWith("%") && Ti(e.slice(0, -1)), Ke = (e) => Ux.test(e), Xr = (e) => Tk.test(e), Mk = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ik = (e) => Ki(e, Mk, Hx), Nk = (e) => Ki(e, "position", Hx), Rk = /* @__PURE__ */ new Set(["image", "url"]), jk = (e) => Ki(e, Rk, Vk), Fk = (e) => Ki(e, "", Lk), Co = () => !0, Ki = (e, t, n) => {
  const r = Ux.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Bk = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Sk.test(e) && !Pk.test(e)
), Hx = () => !1, Lk = (e) => kk.test(e), Vk = (e) => Ok.test(e), Wk = () => {
  const e = Et("colors"), t = Et("spacing"), n = Et("blur"), r = Et("brightness"), a = Et("borderColor"), o = Et("borderRadius"), u = Et("borderSpacing"), l = Et("borderWidth"), d = Et("contrast"), f = Et("grayscale"), p = Et("hueRotate"), m = Et("invert"), v = Et("gap"), $ = Et("gradientColorStops"), _ = Et("gradientColorStopPositions"), x = Et("inset"), w = Et("margin"), M = Et("opacity"), D = Et("padding"), C = Et("saturate"), P = Et("scale"), S = Et("sepia"), G = Et("skew"), Z = Et("space"), k = Et("translate"), F = () => ["auto", "contain", "none"], R = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", Ke, t], j = () => [Ke, t], E = () => ["", Pr, Zr], L = () => ["auto", Ti, Ke], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], z = () => ["solid", "dashed", "dotted", "double", "none"], N = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], J = () => ["", "0", Ke], A = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [Ti, Ke];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Co],
      spacing: [Pr, Zr],
      blur: ["none", "", Xr, Ke],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Xr, Ke],
      borderSpacing: j(),
      borderWidth: E(),
      contrast: W(),
      grayscale: J(),
      hueRotate: W(),
      invert: J(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ak, Zr],
      inset: I(),
      margin: I(),
      opacity: W(),
      padding: j(),
      saturate: W(),
      scale: W(),
      sepia: J(),
      skew: W(),
      space: j(),
      translate: j()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ke]
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
        columns: [Xr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": A()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": A()
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
        object: [...H(), Ke]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
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
        z: ["auto", _o, Ke]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: I()
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
        flex: ["1", "auto", "initial", "none", Ke]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: J()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: J()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", _o, Ke]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Co]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", _o, Ke]
        }, Ke]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Co]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [_o, Ke]
        }, Ke]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": ["auto", "min", "max", "fr", Ke]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ke]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...B()]
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
        content: ["normal", ...B(), "baseline"]
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
        "place-content": [...B(), "baseline"]
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
        p: [D]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [D]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [D]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [D]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [D]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [D]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [D]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [D]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [D]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Z]
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
        "space-y": [Z]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ke, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ke, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ke, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Xr]
        }, Xr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ke, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ke, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ke, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ke, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Xr, Zr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", md]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Co]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ke]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ti, md]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Pr, Ke]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ke]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ke]
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
        "placeholder-opacity": [M]
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
        "text-opacity": [M]
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
        decoration: [...z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Pr, Zr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Pr, Ke]
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
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ke]
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
        content: ["none", Ke]
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
        "bg-opacity": [M]
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
        bg: [...H(), Nk]
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
        bg: ["auto", "cover", "contain", Ik]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, jk]
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
        from: [_]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [_]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [$]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [$]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [$]
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
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [M]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...z(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
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
        "divide-y": [l]
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
        "divide-opacity": [M]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: z()
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
        outline: ["", ...z()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Pr, Ke]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Pr, Zr]
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
        ring: E()
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
        "ring-opacity": [M]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Pr, Zr]
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
        shadow: ["", "inner", "none", Xr, Fk]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Co]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [M]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...N(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": N()
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
        "drop-shadow": ["", "none", Xr, Ke]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
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
        saturate: [C]
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
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
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
        "backdrop-opacity": [M]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
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
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ke]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: W()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ke]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: W()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ke]
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
        scale: [P]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [P]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [P]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [_o, Ke]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [G]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [G]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ke]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ke]
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
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
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
        "will-change": ["auto", "scroll", "contents", "transform", Ke]
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
        stroke: [Pr, Zr, md]
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
}, zk = /* @__PURE__ */ Ek(Wk);
function Yx(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Yx(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Uk() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Yx(e)) && (r && (r += " "), r += t);
  return r;
}
const Ae = (...e) => zk(Uk(...e)), dn = (...e) => (t) => {
  for (const n of e)
    if (n != null) {
      if (typeof n == "function") {
        n(t);
        continue;
      }
      n.current = t;
    }
}, rs = (e, t) => {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) && (a && o ? n[r] = (...u) => {
      o(...u), a(...u);
    } : a && (n[r] = a)), r === "ref" ? n[r] = dn(a, o) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = Ae(a, o));
  }
  return { ...e, ...n };
}, Hk = (...e) => (t) => {
  e.forEach((n) => {
    typeof n == "function" && n(t);
  });
}, Si = (e, t, n) => {
  const [r, a] = He(e), o = t !== void 0, u = o ? t : r;
  return [u, (l) => {
    o || a(l), n && n(typeof l == "function" ? l(u) : l);
  }];
};
var To = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xf = { exports: {} }, So = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dv;
function Yk() {
  if (Dv) return So;
  Dv = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var u = null;
    if (o !== void 0 && (u = "" + o), a.key !== void 0 && (u = "" + a.key), "key" in a) {
      o = {};
      for (var l in a)
        l !== "key" && (o[l] = a[l]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: u,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return So.Fragment = t, So.jsx = n, So.jsxs = n, So;
}
var iu = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ev;
function Kk() {
  return Ev || (Ev = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === B ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case G:
          return "Fragment";
        case S:
          return "Portal";
        case k:
          return "Profiler";
        case Z:
          return "StrictMode";
        case j:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case R:
            return (g.displayName || "Context") + ".Provider";
          case F:
            return (g._context.displayName || "Context") + ".Consumer";
          case I:
            var K = g.render;
            return g = g.displayName, g || (g = K.displayName || K.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case L:
            return K = g.displayName || null, K !== null ? K : e(g.type) || "Memo";
          case H:
            K = g._payload, g = g._init;
            try {
              return e(g(K));
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
        var K = !1;
      } catch {
        K = !0;
      }
      if (K) {
        K = console;
        var Y = K.error, X = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return Y.call(
          K,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(g);
      }
    }
    function r() {
    }
    function a() {
      if (ce === 0) {
        ye = console.log, ge = console.info, $e = console.warn, oe = console.error, xe = console.group, be = console.groupCollapsed, Ce = console.groupEnd;
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
          log: W({}, g, { value: ye }),
          info: W({}, g, { value: ge }),
          warn: W({}, g, { value: $e }),
          error: W({}, g, { value: oe }),
          group: W({}, g, { value: xe }),
          groupCollapsed: W({}, g, { value: be }),
          groupEnd: W({}, g, { value: Ce })
        });
      }
      0 > ce && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function u(g) {
      if (pe === void 0)
        try {
          throw Error();
        } catch (Y) {
          var K = Y.stack.trim().match(/\n( *(at )?)/);
          pe = K && K[1] || "", Fe = -1 < Y.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < Y.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + pe + g + Fe;
    }
    function l(g, K) {
      if (!g || we) return "";
      var Y = rt.get(g);
      if (Y !== void 0) return Y;
      we = !0, Y = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var X = null;
      X = J.H, J.H = null, a();
      try {
        var se = {
          DetermineComponentFrameRoot: function() {
            try {
              if (K) {
                var mt = function() {
                  throw Error();
                };
                if (Object.defineProperty(mt.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(mt, []);
                  } catch (st) {
                    var Vt = st;
                  }
                  Reflect.construct(g, [], mt);
                } else {
                  try {
                    mt.call();
                  } catch (st) {
                    Vt = st;
                  }
                  g.call(mt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (st) {
                  Vt = st;
                }
                (mt = g()) && typeof mt.catch == "function" && mt.catch(function() {
                });
              }
            } catch (st) {
              if (st && Vt && typeof st.stack == "string")
                return [st.stack, Vt.stack];
            }
            return [null, null];
          }
        };
        se.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var De = Object.getOwnPropertyDescriptor(
          se.DetermineComponentFrameRoot,
          "name"
        );
        De && De.configurable && Object.defineProperty(
          se.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var le = se.DetermineComponentFrameRoot(), Re = le[0], $t = le[1];
        if (Re && $t) {
          var Le = Re.split(`
`), gt = $t.split(`
`);
          for (le = De = 0; De < Le.length && !Le[De].includes(
            "DetermineComponentFrameRoot"
          ); )
            De++;
          for (; le < gt.length && !gt[le].includes(
            "DetermineComponentFrameRoot"
          ); )
            le++;
          if (De === Le.length || le === gt.length)
            for (De = Le.length - 1, le = gt.length - 1; 1 <= De && 0 <= le && Le[De] !== gt[le]; )
              le--;
          for (; 1 <= De && 0 <= le; De--, le--)
            if (Le[De] !== gt[le]) {
              if (De !== 1 || le !== 1)
                do
                  if (De--, le--, 0 > le || Le[De] !== gt[le]) {
                    var Nt = `
` + Le[De].replace(
                      " at new ",
                      " at "
                    );
                    return g.displayName && Nt.includes("<anonymous>") && (Nt = Nt.replace("<anonymous>", g.displayName)), typeof g == "function" && rt.set(g, Nt), Nt;
                  }
                while (1 <= De && 0 <= le);
              break;
            }
        }
      } finally {
        we = !1, J.H = X, o(), Error.prepareStackTrace = Y;
      }
      return Le = (Le = g ? g.displayName || g.name : "") ? u(Le) : "", typeof g == "function" && rt.set(g, Le), Le;
    }
    function d(g) {
      if (g == null) return "";
      if (typeof g == "function") {
        var K = g.prototype;
        return l(
          g,
          !(!K || !K.isReactComponent)
        );
      }
      if (typeof g == "string") return u(g);
      switch (g) {
        case j:
          return u("Suspense");
        case E:
          return u("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case I:
            return g = l(g.render, !1), g;
          case L:
            return d(g.type);
          case H:
            K = g._payload, g = g._init;
            try {
              return d(g(K));
            } catch {
            }
        }
      return "";
    }
    function f() {
      var g = J.A;
      return g === null ? null : g.getOwner();
    }
    function p(g) {
      if (A.call(g, "key")) {
        var K = Object.getOwnPropertyDescriptor(g, "key").get;
        if (K && K.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function m(g, K) {
      function Y() {
        Je || (Je = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          K
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: Y,
        configurable: !0
      });
    }
    function v() {
      var g = e(this.type);
      return U[g] || (U[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function $(g, K, Y, X, se, De) {
      return Y = De.ref, g = {
        $$typeof: P,
        type: g,
        key: K,
        props: De,
        _owner: se
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: v
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
    function _(g, K, Y, X, se, De) {
      if (typeof g == "string" || typeof g == "function" || g === G || g === k || g === Z || g === j || g === E || g === z || typeof g == "object" && g !== null && (g.$$typeof === H || g.$$typeof === L || g.$$typeof === R || g.$$typeof === F || g.$$typeof === I || g.$$typeof === re || g.getModuleId !== void 0)) {
        var le = K.children;
        if (le !== void 0)
          if (X)
            if (ue(le)) {
              for (X = 0; X < le.length; X++)
                x(le[X], g);
              Object.freeze && Object.freeze(le);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else x(le, g);
      } else
        le = "", (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), g === null ? X = "null" : ue(g) ? X = "array" : g !== void 0 && g.$$typeof === P ? (X = "<" + (e(g.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : X = typeof g, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          X,
          le
        );
      if (A.call(K, "key")) {
        le = e(g);
        var Re = Object.keys(K).filter(function(Le) {
          return Le !== "key";
        });
        X = 0 < Re.length ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}", ne[le + X] || (Re = 0 < Re.length ? "{" + Re.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          le,
          Re,
          le
        ), ne[le + X] = !0);
      }
      if (le = null, Y !== void 0 && (n(Y), le = "" + Y), p(K) && (n(K.key), le = "" + K.key), "key" in K) {
        Y = {};
        for (var $t in K)
          $t !== "key" && (Y[$t] = K[$t]);
      } else Y = K;
      return le && m(
        Y,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), $(g, le, De, se, f(), Y);
    }
    function x(g, K) {
      if (typeof g == "object" && g && g.$$typeof !== ot) {
        if (ue(g))
          for (var Y = 0; Y < g.length; Y++) {
            var X = g[Y];
            w(X) && M(X, K);
          }
        else if (w(g))
          g._store && (g._store.validated = 1);
        else if (g === null || typeof g != "object" ? Y = null : (Y = N && g[N] || g["@@iterator"], Y = typeof Y == "function" ? Y : null), typeof Y == "function" && Y !== g.entries && (Y = Y.call(g), Y !== g))
          for (; !(g = Y.next()).done; )
            w(g.value) && M(g.value, K);
      }
    }
    function w(g) {
      return typeof g == "object" && g !== null && g.$$typeof === P;
    }
    function M(g, K) {
      if (g._store && !g._store.validated && g.key == null && (g._store.validated = 1, K = D(K), !ae[K])) {
        ae[K] = !0;
        var Y = "";
        g && g._owner != null && g._owner !== f() && (Y = null, typeof g._owner.tag == "number" ? Y = e(g._owner.type) : typeof g._owner.name == "string" && (Y = g._owner.name), Y = " It was passed a child from " + Y + ".");
        var X = J.getCurrentStack;
        J.getCurrentStack = function() {
          var se = d(g.type);
          return X && (se += X() || ""), se;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          K,
          Y
        ), J.getCurrentStack = X;
      }
    }
    function D(g) {
      var K = "", Y = f();
      return Y && (Y = e(Y.type)) && (K = `

Check the render method of \`` + Y + "`."), K || (g = e(g)) && (K = `

Check the top-level render call using <` + g + ">."), K;
    }
    var C = Oe, P = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), N = Symbol.iterator, B = Symbol.for("react.client.reference"), J = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, W = Object.assign, re = Symbol.for("react.client.reference"), ue = Array.isArray, ce = 0, ye, ge, $e, oe, xe, be, Ce;
    r.__reactDisabledLog = !0;
    var pe, Fe, we = !1, rt = new (typeof WeakMap == "function" ? WeakMap : Map)(), ot = Symbol.for("react.client.reference"), Je, U = {}, ne = {}, ae = {};
    iu.Fragment = G, iu.jsx = function(g, K, Y, X, se) {
      return _(g, K, Y, !1, X, se);
    }, iu.jsxs = function(g, K, Y, X, se) {
      return _(g, K, Y, !0, X, se);
    };
  }()), iu;
}
process.env.NODE_ENV === "production" ? xf.exports = Yk() : xf.exports = Kk();
var qk = xf.exports, Yu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Yu.exports;
(function(e, t) {
  (function() {
    var n, r = "4.17.21", a = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", l = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", f = 500, p = "__lodash_placeholder__", m = 1, v = 2, $ = 4, _ = 1, x = 2, w = 1, M = 2, D = 4, C = 8, P = 16, S = 32, G = 64, Z = 128, k = 256, F = 512, R = 30, I = "...", j = 800, E = 16, L = 1, H = 2, z = 3, N = 1 / 0, B = 9007199254740991, J = 17976931348623157e292, A = NaN, W = 4294967295, re = W - 1, ue = W >>> 1, ce = [
      ["ary", Z],
      ["bind", w],
      ["bindKey", M],
      ["curry", C],
      ["curryRight", P],
      ["flip", F],
      ["partial", S],
      ["partialRight", G],
      ["rearg", k]
    ], ye = "[object Arguments]", ge = "[object Array]", $e = "[object AsyncFunction]", oe = "[object Boolean]", xe = "[object Date]", be = "[object DOMException]", Ce = "[object Error]", pe = "[object Function]", Fe = "[object GeneratorFunction]", we = "[object Map]", rt = "[object Number]", ot = "[object Null]", Je = "[object Object]", U = "[object Promise]", ne = "[object Proxy]", ae = "[object RegExp]", g = "[object Set]", K = "[object String]", Y = "[object Symbol]", X = "[object Undefined]", se = "[object WeakMap]", De = "[object WeakSet]", le = "[object ArrayBuffer]", Re = "[object DataView]", $t = "[object Float32Array]", Le = "[object Float64Array]", gt = "[object Int8Array]", Nt = "[object Int16Array]", mt = "[object Int32Array]", Vt = "[object Uint8Array]", st = "[object Uint8ClampedArray]", ba = "[object Uint16Array]", xa = "[object Uint32Array]", oo = /\b__p \+= '';/g, nc = /\b(__p \+=) '' \+/g, TE = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Uh = /&(?:amp|lt|gt|quot|#39);/g, Hh = /[&<>"']/g, SE = RegExp(Uh.source), PE = RegExp(Hh.source), kE = /<%-([\s\S]+?)%>/g, OE = /<%([\s\S]+?)%>/g, Yh = /<%=([\s\S]+?)%>/g, AE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ME = /^\w*$/, IE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rc = /[\\^$.*+?()[\]{}|]/g, NE = RegExp(rc.source), ac = /^\s+/, RE = /\s/, jE = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, FE = /\{\n\/\* \[wrapped with (.+)\] \*/, BE = /,? & /, LE = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, VE = /[()=,{}\[\]\/\s]/, WE = /\\(\\)?/g, zE = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Kh = /\w*$/, UE = /^[-+]0x[0-9a-f]+$/i, HE = /^0b[01]+$/i, YE = /^\[object .+?Constructor\]$/, KE = /^0o[0-7]+$/i, qE = /^(?:0|[1-9]\d*)$/, GE = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, vs = /($^)/, ZE = /['\n\r\u2028\u2029\\]/g, ys = "\\ud800-\\udfff", XE = "\\u0300-\\u036f", JE = "\\ufe20-\\ufe2f", QE = "\\u20d0-\\u20ff", qh = XE + JE + QE, Gh = "\\u2700-\\u27bf", Zh = "a-z\\xdf-\\xf6\\xf8-\\xff", e_ = "\\xac\\xb1\\xd7\\xf7", t_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", n_ = "\\u2000-\\u206f", r_ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Xh = "A-Z\\xc0-\\xd6\\xd8-\\xde", Jh = "\\ufe0e\\ufe0f", Qh = e_ + t_ + n_ + r_, ic = "['’]", a_ = "[" + ys + "]", em = "[" + Qh + "]", bs = "[" + qh + "]", tm = "\\d+", i_ = "[" + Gh + "]", nm = "[" + Zh + "]", rm = "[^" + ys + Qh + tm + Gh + Zh + Xh + "]", oc = "\\ud83c[\\udffb-\\udfff]", o_ = "(?:" + bs + "|" + oc + ")", am = "[^" + ys + "]", sc = "(?:\\ud83c[\\udde6-\\uddff]){2}", uc = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qa = "[" + Xh + "]", im = "\\u200d", om = "(?:" + nm + "|" + rm + ")", s_ = "(?:" + Qa + "|" + rm + ")", sm = "(?:" + ic + "(?:d|ll|m|re|s|t|ve))?", um = "(?:" + ic + "(?:D|LL|M|RE|S|T|VE))?", lm = o_ + "?", cm = "[" + Jh + "]?", u_ = "(?:" + im + "(?:" + [am, sc, uc].join("|") + ")" + cm + lm + ")*", l_ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", c_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", dm = cm + lm + u_, d_ = "(?:" + [i_, sc, uc].join("|") + ")" + dm, f_ = "(?:" + [am + bs + "?", bs, sc, uc, a_].join("|") + ")", p_ = RegExp(ic, "g"), h_ = RegExp(bs, "g"), lc = RegExp(oc + "(?=" + oc + ")|" + f_ + dm, "g"), m_ = RegExp([
      Qa + "?" + nm + "+" + sm + "(?=" + [em, Qa, "$"].join("|") + ")",
      s_ + "+" + um + "(?=" + [em, Qa + om, "$"].join("|") + ")",
      Qa + "?" + om + "+" + sm,
      Qa + "+" + um,
      c_,
      l_,
      tm,
      d_
    ].join("|"), "g"), g_ = RegExp("[" + im + ys + qh + Jh + "]"), v_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, y_ = [
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
    ], b_ = -1, Dt = {};
    Dt[$t] = Dt[Le] = Dt[gt] = Dt[Nt] = Dt[mt] = Dt[Vt] = Dt[st] = Dt[ba] = Dt[xa] = !0, Dt[ye] = Dt[ge] = Dt[le] = Dt[oe] = Dt[Re] = Dt[xe] = Dt[Ce] = Dt[pe] = Dt[we] = Dt[rt] = Dt[Je] = Dt[ae] = Dt[g] = Dt[K] = Dt[se] = !1;
    var xt = {};
    xt[ye] = xt[ge] = xt[le] = xt[Re] = xt[oe] = xt[xe] = xt[$t] = xt[Le] = xt[gt] = xt[Nt] = xt[mt] = xt[we] = xt[rt] = xt[Je] = xt[ae] = xt[g] = xt[K] = xt[Y] = xt[Vt] = xt[st] = xt[ba] = xt[xa] = !0, xt[Ce] = xt[pe] = xt[se] = !1;
    var x_ = {
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
    }, w_ = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, $_ = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, D_ = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, E_ = parseFloat, __ = parseInt, fm = typeof To == "object" && To && To.Object === Object && To, C_ = typeof self == "object" && self && self.Object === Object && self, qt = fm || C_ || Function("return this")(), cc = t && !t.nodeType && t, wa = cc && !0 && e && !e.nodeType && e, pm = wa && wa.exports === cc, dc = pm && fm.process, An = function() {
      try {
        var Q = wa && wa.require && wa.require("util").types;
        return Q || dc && dc.binding && dc.binding("util");
      } catch {
      }
    }(), hm = An && An.isArrayBuffer, mm = An && An.isDate, gm = An && An.isMap, vm = An && An.isRegExp, ym = An && An.isSet, bm = An && An.isTypedArray;
    function Dn(Q, de, ie) {
      switch (ie.length) {
        case 0:
          return Q.call(de);
        case 1:
          return Q.call(de, ie[0]);
        case 2:
          return Q.call(de, ie[0], ie[1]);
        case 3:
          return Q.call(de, ie[0], ie[1], ie[2]);
      }
      return Q.apply(de, ie);
    }
    function T_(Q, de, ie, Te) {
      for (var Ve = -1, it = Q == null ? 0 : Q.length; ++Ve < it; ) {
        var zt = Q[Ve];
        de(Te, zt, ie(zt), Q);
      }
      return Te;
    }
    function Mn(Q, de) {
      for (var ie = -1, Te = Q == null ? 0 : Q.length; ++ie < Te && de(Q[ie], ie, Q) !== !1; )
        ;
      return Q;
    }
    function S_(Q, de) {
      for (var ie = Q == null ? 0 : Q.length; ie-- && de(Q[ie], ie, Q) !== !1; )
        ;
      return Q;
    }
    function xm(Q, de) {
      for (var ie = -1, Te = Q == null ? 0 : Q.length; ++ie < Te; )
        if (!de(Q[ie], ie, Q))
          return !1;
      return !0;
    }
    function Vr(Q, de) {
      for (var ie = -1, Te = Q == null ? 0 : Q.length, Ve = 0, it = []; ++ie < Te; ) {
        var zt = Q[ie];
        de(zt, ie, Q) && (it[Ve++] = zt);
      }
      return it;
    }
    function xs(Q, de) {
      var ie = Q == null ? 0 : Q.length;
      return !!ie && ei(Q, de, 0) > -1;
    }
    function fc(Q, de, ie) {
      for (var Te = -1, Ve = Q == null ? 0 : Q.length; ++Te < Ve; )
        if (ie(de, Q[Te]))
          return !0;
      return !1;
    }
    function Tt(Q, de) {
      for (var ie = -1, Te = Q == null ? 0 : Q.length, Ve = Array(Te); ++ie < Te; )
        Ve[ie] = de(Q[ie], ie, Q);
      return Ve;
    }
    function Wr(Q, de) {
      for (var ie = -1, Te = de.length, Ve = Q.length; ++ie < Te; )
        Q[Ve + ie] = de[ie];
      return Q;
    }
    function pc(Q, de, ie, Te) {
      var Ve = -1, it = Q == null ? 0 : Q.length;
      for (Te && it && (ie = Q[++Ve]); ++Ve < it; )
        ie = de(ie, Q[Ve], Ve, Q);
      return ie;
    }
    function P_(Q, de, ie, Te) {
      var Ve = Q == null ? 0 : Q.length;
      for (Te && Ve && (ie = Q[--Ve]); Ve--; )
        ie = de(ie, Q[Ve], Ve, Q);
      return ie;
    }
    function hc(Q, de) {
      for (var ie = -1, Te = Q == null ? 0 : Q.length; ++ie < Te; )
        if (de(Q[ie], ie, Q))
          return !0;
      return !1;
    }
    var k_ = mc("length");
    function O_(Q) {
      return Q.split("");
    }
    function A_(Q) {
      return Q.match(LE) || [];
    }
    function wm(Q, de, ie) {
      var Te;
      return ie(Q, function(Ve, it, zt) {
        if (de(Ve, it, zt))
          return Te = it, !1;
      }), Te;
    }
    function ws(Q, de, ie, Te) {
      for (var Ve = Q.length, it = ie + (Te ? 1 : -1); Te ? it-- : ++it < Ve; )
        if (de(Q[it], it, Q))
          return it;
      return -1;
    }
    function ei(Q, de, ie) {
      return de === de ? U_(Q, de, ie) : ws(Q, $m, ie);
    }
    function M_(Q, de, ie, Te) {
      for (var Ve = ie - 1, it = Q.length; ++Ve < it; )
        if (Te(Q[Ve], de))
          return Ve;
      return -1;
    }
    function $m(Q) {
      return Q !== Q;
    }
    function Dm(Q, de) {
      var ie = Q == null ? 0 : Q.length;
      return ie ? vc(Q, de) / ie : A;
    }
    function mc(Q) {
      return function(de) {
        return de == null ? n : de[Q];
      };
    }
    function gc(Q) {
      return function(de) {
        return Q == null ? n : Q[de];
      };
    }
    function Em(Q, de, ie, Te, Ve) {
      return Ve(Q, function(it, zt, vt) {
        ie = Te ? (Te = !1, it) : de(ie, it, zt, vt);
      }), ie;
    }
    function I_(Q, de) {
      var ie = Q.length;
      for (Q.sort(de); ie--; )
        Q[ie] = Q[ie].value;
      return Q;
    }
    function vc(Q, de) {
      for (var ie, Te = -1, Ve = Q.length; ++Te < Ve; ) {
        var it = de(Q[Te]);
        it !== n && (ie = ie === n ? it : ie + it);
      }
      return ie;
    }
    function yc(Q, de) {
      for (var ie = -1, Te = Array(Q); ++ie < Q; )
        Te[ie] = de(ie);
      return Te;
    }
    function N_(Q, de) {
      return Tt(de, function(ie) {
        return [ie, Q[ie]];
      });
    }
    function _m(Q) {
      return Q && Q.slice(0, Pm(Q) + 1).replace(ac, "");
    }
    function En(Q) {
      return function(de) {
        return Q(de);
      };
    }
    function bc(Q, de) {
      return Tt(de, function(ie) {
        return Q[ie];
      });
    }
    function so(Q, de) {
      return Q.has(de);
    }
    function Cm(Q, de) {
      for (var ie = -1, Te = Q.length; ++ie < Te && ei(de, Q[ie], 0) > -1; )
        ;
      return ie;
    }
    function Tm(Q, de) {
      for (var ie = Q.length; ie-- && ei(de, Q[ie], 0) > -1; )
        ;
      return ie;
    }
    function R_(Q, de) {
      for (var ie = Q.length, Te = 0; ie--; )
        Q[ie] === de && ++Te;
      return Te;
    }
    var j_ = gc(x_), F_ = gc(w_);
    function B_(Q) {
      return "\\" + D_[Q];
    }
    function L_(Q, de) {
      return Q == null ? n : Q[de];
    }
    function ti(Q) {
      return g_.test(Q);
    }
    function V_(Q) {
      return v_.test(Q);
    }
    function W_(Q) {
      for (var de, ie = []; !(de = Q.next()).done; )
        ie.push(de.value);
      return ie;
    }
    function xc(Q) {
      var de = -1, ie = Array(Q.size);
      return Q.forEach(function(Te, Ve) {
        ie[++de] = [Ve, Te];
      }), ie;
    }
    function Sm(Q, de) {
      return function(ie) {
        return Q(de(ie));
      };
    }
    function zr(Q, de) {
      for (var ie = -1, Te = Q.length, Ve = 0, it = []; ++ie < Te; ) {
        var zt = Q[ie];
        (zt === de || zt === p) && (Q[ie] = p, it[Ve++] = ie);
      }
      return it;
    }
    function $s(Q) {
      var de = -1, ie = Array(Q.size);
      return Q.forEach(function(Te) {
        ie[++de] = Te;
      }), ie;
    }
    function z_(Q) {
      var de = -1, ie = Array(Q.size);
      return Q.forEach(function(Te) {
        ie[++de] = [Te, Te];
      }), ie;
    }
    function U_(Q, de, ie) {
      for (var Te = ie - 1, Ve = Q.length; ++Te < Ve; )
        if (Q[Te] === de)
          return Te;
      return -1;
    }
    function H_(Q, de, ie) {
      for (var Te = ie + 1; Te--; )
        if (Q[Te] === de)
          return Te;
      return Te;
    }
    function ni(Q) {
      return ti(Q) ? K_(Q) : k_(Q);
    }
    function Gn(Q) {
      return ti(Q) ? q_(Q) : O_(Q);
    }
    function Pm(Q) {
      for (var de = Q.length; de-- && RE.test(Q.charAt(de)); )
        ;
      return de;
    }
    var Y_ = gc($_);
    function K_(Q) {
      for (var de = lc.lastIndex = 0; lc.test(Q); )
        ++de;
      return de;
    }
    function q_(Q) {
      return Q.match(lc) || [];
    }
    function G_(Q) {
      return Q.match(m_) || [];
    }
    var Z_ = function Q(de) {
      de = de == null ? qt : ri.defaults(qt.Object(), de, ri.pick(qt, y_));
      var ie = de.Array, Te = de.Date, Ve = de.Error, it = de.Function, zt = de.Math, vt = de.Object, wc = de.RegExp, X_ = de.String, In = de.TypeError, Ds = ie.prototype, J_ = it.prototype, ai = vt.prototype, Es = de["__core-js_shared__"], _s = J_.toString, pt = ai.hasOwnProperty, Q_ = 0, km = function() {
        var i = /[^.]+$/.exec(Es && Es.keys && Es.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), Cs = ai.toString, e3 = _s.call(vt), t3 = qt._, n3 = wc(
        "^" + _s.call(pt).replace(rc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ts = pm ? de.Buffer : n, Ur = de.Symbol, Ss = de.Uint8Array, Om = Ts ? Ts.allocUnsafe : n, Ps = Sm(vt.getPrototypeOf, vt), Am = vt.create, Mm = ai.propertyIsEnumerable, ks = Ds.splice, Im = Ur ? Ur.isConcatSpreadable : n, uo = Ur ? Ur.iterator : n, $a = Ur ? Ur.toStringTag : n, Os = function() {
        try {
          var i = Ta(vt, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), r3 = de.clearTimeout !== qt.clearTimeout && de.clearTimeout, a3 = Te && Te.now !== qt.Date.now && Te.now, i3 = de.setTimeout !== qt.setTimeout && de.setTimeout, As = zt.ceil, Ms = zt.floor, $c = vt.getOwnPropertySymbols, o3 = Ts ? Ts.isBuffer : n, Nm = de.isFinite, s3 = Ds.join, u3 = Sm(vt.keys, vt), Ut = zt.max, Jt = zt.min, l3 = Te.now, c3 = de.parseInt, Rm = zt.random, d3 = Ds.reverse, Dc = Ta(de, "DataView"), lo = Ta(de, "Map"), Ec = Ta(de, "Promise"), ii = Ta(de, "Set"), co = Ta(de, "WeakMap"), fo = Ta(vt, "create"), Is = co && new co(), oi = {}, f3 = Sa(Dc), p3 = Sa(lo), h3 = Sa(Ec), m3 = Sa(ii), g3 = Sa(co), Ns = Ur ? Ur.prototype : n, po = Ns ? Ns.valueOf : n, jm = Ns ? Ns.toString : n;
      function T(i) {
        if (Mt(i) && !ze(i) && !(i instanceof et)) {
          if (i instanceof Nn)
            return i;
          if (pt.call(i, "__wrapped__"))
            return Fg(i);
        }
        return new Nn(i);
      }
      var si = /* @__PURE__ */ function() {
        function i() {
        }
        return function(s) {
          if (!Pt(s))
            return {};
          if (Am)
            return Am(s);
          i.prototype = s;
          var c = new i();
          return i.prototype = n, c;
        };
      }();
      function Rs() {
      }
      function Nn(i, s) {
        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
      }
      T.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: kE,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: OE,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Yh,
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
          _: T
        }
      }, T.prototype = Rs.prototype, T.prototype.constructor = T, Nn.prototype = si(Rs.prototype), Nn.prototype.constructor = Nn;
      function et(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = W, this.__views__ = [];
      }
      function v3() {
        var i = new et(this.__wrapped__);
        return i.__actions__ = pn(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = pn(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = pn(this.__views__), i;
      }
      function y3() {
        if (this.__filtered__) {
          var i = new et(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function b3() {
        var i = this.__wrapped__.value(), s = this.__dir__, c = ze(i), h = s < 0, b = c ? i.length : 0, O = O2(0, b, this.__views__), V = O.start, q = O.end, ee = q - V, he = h ? q : V - 1, me = this.__iteratees__, ve = me.length, _e = 0, Pe = Jt(ee, this.__takeCount__);
        if (!c || !h && b == ee && Pe == ee)
          return sg(i, this.__actions__);
        var Ie = [];
        e:
          for (; ee-- && _e < Pe; ) {
            he += s;
            for (var qe = -1, Ne = i[he]; ++qe < ve; ) {
              var Qe = me[qe], nt = Qe.iteratee, Tn = Qe.type, an = nt(Ne);
              if (Tn == H)
                Ne = an;
              else if (!an) {
                if (Tn == L)
                  continue e;
                break e;
              }
            }
            Ie[_e++] = Ne;
          }
        return Ie;
      }
      et.prototype = si(Rs.prototype), et.prototype.constructor = et;
      function Da(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var h = i[s];
          this.set(h[0], h[1]);
        }
      }
      function x3() {
        this.__data__ = fo ? fo(null) : {}, this.size = 0;
      }
      function w3(i) {
        var s = this.has(i) && delete this.__data__[i];
        return this.size -= s ? 1 : 0, s;
      }
      function $3(i) {
        var s = this.__data__;
        if (fo) {
          var c = s[i];
          return c === d ? n : c;
        }
        return pt.call(s, i) ? s[i] : n;
      }
      function D3(i) {
        var s = this.__data__;
        return fo ? s[i] !== n : pt.call(s, i);
      }
      function E3(i, s) {
        var c = this.__data__;
        return this.size += this.has(i) ? 0 : 1, c[i] = fo && s === n ? d : s, this;
      }
      Da.prototype.clear = x3, Da.prototype.delete = w3, Da.prototype.get = $3, Da.prototype.has = D3, Da.prototype.set = E3;
      function xr(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var h = i[s];
          this.set(h[0], h[1]);
        }
      }
      function _3() {
        this.__data__ = [], this.size = 0;
      }
      function C3(i) {
        var s = this.__data__, c = js(s, i);
        if (c < 0)
          return !1;
        var h = s.length - 1;
        return c == h ? s.pop() : ks.call(s, c, 1), --this.size, !0;
      }
      function T3(i) {
        var s = this.__data__, c = js(s, i);
        return c < 0 ? n : s[c][1];
      }
      function S3(i) {
        return js(this.__data__, i) > -1;
      }
      function P3(i, s) {
        var c = this.__data__, h = js(c, i);
        return h < 0 ? (++this.size, c.push([i, s])) : c[h][1] = s, this;
      }
      xr.prototype.clear = _3, xr.prototype.delete = C3, xr.prototype.get = T3, xr.prototype.has = S3, xr.prototype.set = P3;
      function wr(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var h = i[s];
          this.set(h[0], h[1]);
        }
      }
      function k3() {
        this.size = 0, this.__data__ = {
          hash: new Da(),
          map: new (lo || xr)(),
          string: new Da()
        };
      }
      function O3(i) {
        var s = Gs(this, i).delete(i);
        return this.size -= s ? 1 : 0, s;
      }
      function A3(i) {
        return Gs(this, i).get(i);
      }
      function M3(i) {
        return Gs(this, i).has(i);
      }
      function I3(i, s) {
        var c = Gs(this, i), h = c.size;
        return c.set(i, s), this.size += c.size == h ? 0 : 1, this;
      }
      wr.prototype.clear = k3, wr.prototype.delete = O3, wr.prototype.get = A3, wr.prototype.has = M3, wr.prototype.set = I3;
      function Ea(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.__data__ = new wr(); ++s < c; )
          this.add(i[s]);
      }
      function N3(i) {
        return this.__data__.set(i, d), this;
      }
      function R3(i) {
        return this.__data__.has(i);
      }
      Ea.prototype.add = Ea.prototype.push = N3, Ea.prototype.has = R3;
      function Zn(i) {
        var s = this.__data__ = new xr(i);
        this.size = s.size;
      }
      function j3() {
        this.__data__ = new xr(), this.size = 0;
      }
      function F3(i) {
        var s = this.__data__, c = s.delete(i);
        return this.size = s.size, c;
      }
      function B3(i) {
        return this.__data__.get(i);
      }
      function L3(i) {
        return this.__data__.has(i);
      }
      function V3(i, s) {
        var c = this.__data__;
        if (c instanceof xr) {
          var h = c.__data__;
          if (!lo || h.length < a - 1)
            return h.push([i, s]), this.size = ++c.size, this;
          c = this.__data__ = new wr(h);
        }
        return c.set(i, s), this.size = c.size, this;
      }
      Zn.prototype.clear = j3, Zn.prototype.delete = F3, Zn.prototype.get = B3, Zn.prototype.has = L3, Zn.prototype.set = V3;
      function Fm(i, s) {
        var c = ze(i), h = !c && Pa(i), b = !c && !h && Gr(i), O = !c && !h && !b && di(i), V = c || h || b || O, q = V ? yc(i.length, X_) : [], ee = q.length;
        for (var he in i)
          (s || pt.call(i, he)) && !(V && // Safari 9 has enumerable `arguments.length` in strict mode.
          (he == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          b && (he == "offset" || he == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          O && (he == "buffer" || he == "byteLength" || he == "byteOffset") || // Skip index properties.
          _r(he, ee))) && q.push(he);
        return q;
      }
      function Bm(i) {
        var s = i.length;
        return s ? i[Nc(0, s - 1)] : n;
      }
      function W3(i, s) {
        return Zs(pn(i), _a(s, 0, i.length));
      }
      function z3(i) {
        return Zs(pn(i));
      }
      function _c(i, s, c) {
        (c !== n && !Xn(i[s], c) || c === n && !(s in i)) && $r(i, s, c);
      }
      function ho(i, s, c) {
        var h = i[s];
        (!(pt.call(i, s) && Xn(h, c)) || c === n && !(s in i)) && $r(i, s, c);
      }
      function js(i, s) {
        for (var c = i.length; c--; )
          if (Xn(i[c][0], s))
            return c;
        return -1;
      }
      function U3(i, s, c, h) {
        return Hr(i, function(b, O, V) {
          s(h, b, c(b), V);
        }), h;
      }
      function Lm(i, s) {
        return i && sr(s, Yt(s), i);
      }
      function H3(i, s) {
        return i && sr(s, mn(s), i);
      }
      function $r(i, s, c) {
        s == "__proto__" && Os ? Os(i, s, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : i[s] = c;
      }
      function Cc(i, s) {
        for (var c = -1, h = s.length, b = ie(h), O = i == null; ++c < h; )
          b[c] = O ? n : od(i, s[c]);
        return b;
      }
      function _a(i, s, c) {
        return i === i && (c !== n && (i = i <= c ? i : c), s !== n && (i = i >= s ? i : s)), i;
      }
      function Rn(i, s, c, h, b, O) {
        var V, q = s & m, ee = s & v, he = s & $;
        if (c && (V = b ? c(i, h, b, O) : c(i)), V !== n)
          return V;
        if (!Pt(i))
          return i;
        var me = ze(i);
        if (me) {
          if (V = M2(i), !q)
            return pn(i, V);
        } else {
          var ve = Qt(i), _e = ve == pe || ve == Fe;
          if (Gr(i))
            return cg(i, q);
          if (ve == Je || ve == ye || _e && !b) {
            if (V = ee || _e ? {} : Pg(i), !q)
              return ee ? $2(i, H3(V, i)) : w2(i, Lm(V, i));
          } else {
            if (!xt[ve])
              return b ? i : {};
            V = I2(i, ve, q);
          }
        }
        O || (O = new Zn());
        var Pe = O.get(i);
        if (Pe)
          return Pe;
        O.set(i, V), av(i) ? i.forEach(function(Ne) {
          V.add(Rn(Ne, s, c, Ne, i, O));
        }) : nv(i) && i.forEach(function(Ne, Qe) {
          V.set(Qe, Rn(Ne, s, c, Qe, i, O));
        });
        var Ie = he ? ee ? Yc : Hc : ee ? mn : Yt, qe = me ? n : Ie(i);
        return Mn(qe || i, function(Ne, Qe) {
          qe && (Qe = Ne, Ne = i[Qe]), ho(V, Qe, Rn(Ne, s, c, Qe, i, O));
        }), V;
      }
      function Y3(i) {
        var s = Yt(i);
        return function(c) {
          return Vm(c, i, s);
        };
      }
      function Vm(i, s, c) {
        var h = c.length;
        if (i == null)
          return !h;
        for (i = vt(i); h--; ) {
          var b = c[h], O = s[b], V = i[b];
          if (V === n && !(b in i) || !O(V))
            return !1;
        }
        return !0;
      }
      function Wm(i, s, c) {
        if (typeof i != "function")
          throw new In(u);
        return wo(function() {
          i.apply(n, c);
        }, s);
      }
      function mo(i, s, c, h) {
        var b = -1, O = xs, V = !0, q = i.length, ee = [], he = s.length;
        if (!q)
          return ee;
        c && (s = Tt(s, En(c))), h ? (O = fc, V = !1) : s.length >= a && (O = so, V = !1, s = new Ea(s));
        e:
          for (; ++b < q; ) {
            var me = i[b], ve = c == null ? me : c(me);
            if (me = h || me !== 0 ? me : 0, V && ve === ve) {
              for (var _e = he; _e--; )
                if (s[_e] === ve)
                  continue e;
              ee.push(me);
            } else O(s, ve, h) || ee.push(me);
          }
        return ee;
      }
      var Hr = mg(or), zm = mg(Sc, !0);
      function K3(i, s) {
        var c = !0;
        return Hr(i, function(h, b, O) {
          return c = !!s(h, b, O), c;
        }), c;
      }
      function Fs(i, s, c) {
        for (var h = -1, b = i.length; ++h < b; ) {
          var O = i[h], V = s(O);
          if (V != null && (q === n ? V === V && !Cn(V) : c(V, q)))
            var q = V, ee = O;
        }
        return ee;
      }
      function q3(i, s, c, h) {
        var b = i.length;
        for (c = Ye(c), c < 0 && (c = -c > b ? 0 : b + c), h = h === n || h > b ? b : Ye(h), h < 0 && (h += b), h = c > h ? 0 : ov(h); c < h; )
          i[c++] = s;
        return i;
      }
      function Um(i, s) {
        var c = [];
        return Hr(i, function(h, b, O) {
          s(h, b, O) && c.push(h);
        }), c;
      }
      function Gt(i, s, c, h, b) {
        var O = -1, V = i.length;
        for (c || (c = R2), b || (b = []); ++O < V; ) {
          var q = i[O];
          s > 0 && c(q) ? s > 1 ? Gt(q, s - 1, c, h, b) : Wr(b, q) : h || (b[b.length] = q);
        }
        return b;
      }
      var Tc = gg(), Hm = gg(!0);
      function or(i, s) {
        return i && Tc(i, s, Yt);
      }
      function Sc(i, s) {
        return i && Hm(i, s, Yt);
      }
      function Bs(i, s) {
        return Vr(s, function(c) {
          return Cr(i[c]);
        });
      }
      function Ca(i, s) {
        s = Kr(s, i);
        for (var c = 0, h = s.length; i != null && c < h; )
          i = i[ur(s[c++])];
        return c && c == h ? i : n;
      }
      function Ym(i, s, c) {
        var h = s(i);
        return ze(i) ? h : Wr(h, c(i));
      }
      function nn(i) {
        return i == null ? i === n ? X : ot : $a && $a in vt(i) ? k2(i) : z2(i);
      }
      function Pc(i, s) {
        return i > s;
      }
      function G3(i, s) {
        return i != null && pt.call(i, s);
      }
      function Z3(i, s) {
        return i != null && s in vt(i);
      }
      function X3(i, s, c) {
        return i >= Jt(s, c) && i < Ut(s, c);
      }
      function kc(i, s, c) {
        for (var h = c ? fc : xs, b = i[0].length, O = i.length, V = O, q = ie(O), ee = 1 / 0, he = []; V--; ) {
          var me = i[V];
          V && s && (me = Tt(me, En(s))), ee = Jt(me.length, ee), q[V] = !c && (s || b >= 120 && me.length >= 120) ? new Ea(V && me) : n;
        }
        me = i[0];
        var ve = -1, _e = q[0];
        e:
          for (; ++ve < b && he.length < ee; ) {
            var Pe = me[ve], Ie = s ? s(Pe) : Pe;
            if (Pe = c || Pe !== 0 ? Pe : 0, !(_e ? so(_e, Ie) : h(he, Ie, c))) {
              for (V = O; --V; ) {
                var qe = q[V];
                if (!(qe ? so(qe, Ie) : h(i[V], Ie, c)))
                  continue e;
              }
              _e && _e.push(Ie), he.push(Pe);
            }
          }
        return he;
      }
      function J3(i, s, c, h) {
        return or(i, function(b, O, V) {
          s(h, c(b), O, V);
        }), h;
      }
      function go(i, s, c) {
        s = Kr(s, i), i = Mg(i, s);
        var h = i == null ? i : i[ur(Fn(s))];
        return h == null ? n : Dn(h, i, c);
      }
      function Km(i) {
        return Mt(i) && nn(i) == ye;
      }
      function Q3(i) {
        return Mt(i) && nn(i) == le;
      }
      function e2(i) {
        return Mt(i) && nn(i) == xe;
      }
      function vo(i, s, c, h, b) {
        return i === s ? !0 : i == null || s == null || !Mt(i) && !Mt(s) ? i !== i && s !== s : t2(i, s, c, h, vo, b);
      }
      function t2(i, s, c, h, b, O) {
        var V = ze(i), q = ze(s), ee = V ? ge : Qt(i), he = q ? ge : Qt(s);
        ee = ee == ye ? Je : ee, he = he == ye ? Je : he;
        var me = ee == Je, ve = he == Je, _e = ee == he;
        if (_e && Gr(i)) {
          if (!Gr(s))
            return !1;
          V = !0, me = !1;
        }
        if (_e && !me)
          return O || (O = new Zn()), V || di(i) ? Cg(i, s, c, h, b, O) : S2(i, s, ee, c, h, b, O);
        if (!(c & _)) {
          var Pe = me && pt.call(i, "__wrapped__"), Ie = ve && pt.call(s, "__wrapped__");
          if (Pe || Ie) {
            var qe = Pe ? i.value() : i, Ne = Ie ? s.value() : s;
            return O || (O = new Zn()), b(qe, Ne, c, h, O);
          }
        }
        return _e ? (O || (O = new Zn()), P2(i, s, c, h, b, O)) : !1;
      }
      function n2(i) {
        return Mt(i) && Qt(i) == we;
      }
      function Oc(i, s, c, h) {
        var b = c.length, O = b, V = !h;
        if (i == null)
          return !O;
        for (i = vt(i); b--; ) {
          var q = c[b];
          if (V && q[2] ? q[1] !== i[q[0]] : !(q[0] in i))
            return !1;
        }
        for (; ++b < O; ) {
          q = c[b];
          var ee = q[0], he = i[ee], me = q[1];
          if (V && q[2]) {
            if (he === n && !(ee in i))
              return !1;
          } else {
            var ve = new Zn();
            if (h)
              var _e = h(he, me, ee, i, s, ve);
            if (!(_e === n ? vo(me, he, _ | x, h, ve) : _e))
              return !1;
          }
        }
        return !0;
      }
      function qm(i) {
        if (!Pt(i) || F2(i))
          return !1;
        var s = Cr(i) ? n3 : YE;
        return s.test(Sa(i));
      }
      function r2(i) {
        return Mt(i) && nn(i) == ae;
      }
      function a2(i) {
        return Mt(i) && Qt(i) == g;
      }
      function i2(i) {
        return Mt(i) && nu(i.length) && !!Dt[nn(i)];
      }
      function Gm(i) {
        return typeof i == "function" ? i : i == null ? gn : typeof i == "object" ? ze(i) ? Jm(i[0], i[1]) : Xm(i) : vv(i);
      }
      function Ac(i) {
        if (!xo(i))
          return u3(i);
        var s = [];
        for (var c in vt(i))
          pt.call(i, c) && c != "constructor" && s.push(c);
        return s;
      }
      function o2(i) {
        if (!Pt(i))
          return W2(i);
        var s = xo(i), c = [];
        for (var h in i)
          h == "constructor" && (s || !pt.call(i, h)) || c.push(h);
        return c;
      }
      function Mc(i, s) {
        return i < s;
      }
      function Zm(i, s) {
        var c = -1, h = hn(i) ? ie(i.length) : [];
        return Hr(i, function(b, O, V) {
          h[++c] = s(b, O, V);
        }), h;
      }
      function Xm(i) {
        var s = qc(i);
        return s.length == 1 && s[0][2] ? Og(s[0][0], s[0][1]) : function(c) {
          return c === i || Oc(c, i, s);
        };
      }
      function Jm(i, s) {
        return Zc(i) && kg(s) ? Og(ur(i), s) : function(c) {
          var h = od(c, i);
          return h === n && h === s ? sd(c, i) : vo(s, h, _ | x);
        };
      }
      function Ls(i, s, c, h, b) {
        i !== s && Tc(s, function(O, V) {
          if (b || (b = new Zn()), Pt(O))
            s2(i, s, V, c, Ls, h, b);
          else {
            var q = h ? h(Jc(i, V), O, V + "", i, s, b) : n;
            q === n && (q = O), _c(i, V, q);
          }
        }, mn);
      }
      function s2(i, s, c, h, b, O, V) {
        var q = Jc(i, c), ee = Jc(s, c), he = V.get(ee);
        if (he) {
          _c(i, c, he);
          return;
        }
        var me = O ? O(q, ee, c + "", i, s, V) : n, ve = me === n;
        if (ve) {
          var _e = ze(ee), Pe = !_e && Gr(ee), Ie = !_e && !Pe && di(ee);
          me = ee, _e || Pe || Ie ? ze(q) ? me = q : Rt(q) ? me = pn(q) : Pe ? (ve = !1, me = cg(ee, !0)) : Ie ? (ve = !1, me = dg(ee, !0)) : me = [] : $o(ee) || Pa(ee) ? (me = q, Pa(q) ? me = sv(q) : (!Pt(q) || Cr(q)) && (me = Pg(ee))) : ve = !1;
        }
        ve && (V.set(ee, me), b(me, ee, h, O, V), V.delete(ee)), _c(i, c, me);
      }
      function Qm(i, s) {
        var c = i.length;
        if (c)
          return s += s < 0 ? c : 0, _r(s, c) ? i[s] : n;
      }
      function eg(i, s, c) {
        s.length ? s = Tt(s, function(O) {
          return ze(O) ? function(V) {
            return Ca(V, O.length === 1 ? O[0] : O);
          } : O;
        }) : s = [gn];
        var h = -1;
        s = Tt(s, En(Me()));
        var b = Zm(i, function(O, V, q) {
          var ee = Tt(s, function(he) {
            return he(O);
          });
          return { criteria: ee, index: ++h, value: O };
        });
        return I_(b, function(O, V) {
          return x2(O, V, c);
        });
      }
      function u2(i, s) {
        return tg(i, s, function(c, h) {
          return sd(i, h);
        });
      }
      function tg(i, s, c) {
        for (var h = -1, b = s.length, O = {}; ++h < b; ) {
          var V = s[h], q = Ca(i, V);
          c(q, V) && yo(O, Kr(V, i), q);
        }
        return O;
      }
      function l2(i) {
        return function(s) {
          return Ca(s, i);
        };
      }
      function Ic(i, s, c, h) {
        var b = h ? M_ : ei, O = -1, V = s.length, q = i;
        for (i === s && (s = pn(s)), c && (q = Tt(i, En(c))); ++O < V; )
          for (var ee = 0, he = s[O], me = c ? c(he) : he; (ee = b(q, me, ee, h)) > -1; )
            q !== i && ks.call(q, ee, 1), ks.call(i, ee, 1);
        return i;
      }
      function ng(i, s) {
        for (var c = i ? s.length : 0, h = c - 1; c--; ) {
          var b = s[c];
          if (c == h || b !== O) {
            var O = b;
            _r(b) ? ks.call(i, b, 1) : Fc(i, b);
          }
        }
        return i;
      }
      function Nc(i, s) {
        return i + Ms(Rm() * (s - i + 1));
      }
      function c2(i, s, c, h) {
        for (var b = -1, O = Ut(As((s - i) / (c || 1)), 0), V = ie(O); O--; )
          V[h ? O : ++b] = i, i += c;
        return V;
      }
      function Rc(i, s) {
        var c = "";
        if (!i || s < 1 || s > B)
          return c;
        do
          s % 2 && (c += i), s = Ms(s / 2), s && (i += i);
        while (s);
        return c;
      }
      function Ze(i, s) {
        return Qc(Ag(i, s, gn), i + "");
      }
      function d2(i) {
        return Bm(fi(i));
      }
      function f2(i, s) {
        var c = fi(i);
        return Zs(c, _a(s, 0, c.length));
      }
      function yo(i, s, c, h) {
        if (!Pt(i))
          return i;
        s = Kr(s, i);
        for (var b = -1, O = s.length, V = O - 1, q = i; q != null && ++b < O; ) {
          var ee = ur(s[b]), he = c;
          if (ee === "__proto__" || ee === "constructor" || ee === "prototype")
            return i;
          if (b != V) {
            var me = q[ee];
            he = h ? h(me, ee, q) : n, he === n && (he = Pt(me) ? me : _r(s[b + 1]) ? [] : {});
          }
          ho(q, ee, he), q = q[ee];
        }
        return i;
      }
      var rg = Is ? function(i, s) {
        return Is.set(i, s), i;
      } : gn, p2 = Os ? function(i, s) {
        return Os(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ld(s),
          writable: !0
        });
      } : gn;
      function h2(i) {
        return Zs(fi(i));
      }
      function jn(i, s, c) {
        var h = -1, b = i.length;
        s < 0 && (s = -s > b ? 0 : b + s), c = c > b ? b : c, c < 0 && (c += b), b = s > c ? 0 : c - s >>> 0, s >>>= 0;
        for (var O = ie(b); ++h < b; )
          O[h] = i[h + s];
        return O;
      }
      function m2(i, s) {
        var c;
        return Hr(i, function(h, b, O) {
          return c = s(h, b, O), !c;
        }), !!c;
      }
      function Vs(i, s, c) {
        var h = 0, b = i == null ? h : i.length;
        if (typeof s == "number" && s === s && b <= ue) {
          for (; h < b; ) {
            var O = h + b >>> 1, V = i[O];
            V !== null && !Cn(V) && (c ? V <= s : V < s) ? h = O + 1 : b = O;
          }
          return b;
        }
        return jc(i, s, gn, c);
      }
      function jc(i, s, c, h) {
        var b = 0, O = i == null ? 0 : i.length;
        if (O === 0)
          return 0;
        s = c(s);
        for (var V = s !== s, q = s === null, ee = Cn(s), he = s === n; b < O; ) {
          var me = Ms((b + O) / 2), ve = c(i[me]), _e = ve !== n, Pe = ve === null, Ie = ve === ve, qe = Cn(ve);
          if (V)
            var Ne = h || Ie;
          else he ? Ne = Ie && (h || _e) : q ? Ne = Ie && _e && (h || !Pe) : ee ? Ne = Ie && _e && !Pe && (h || !qe) : Pe || qe ? Ne = !1 : Ne = h ? ve <= s : ve < s;
          Ne ? b = me + 1 : O = me;
        }
        return Jt(O, re);
      }
      function ag(i, s) {
        for (var c = -1, h = i.length, b = 0, O = []; ++c < h; ) {
          var V = i[c], q = s ? s(V) : V;
          if (!c || !Xn(q, ee)) {
            var ee = q;
            O[b++] = V === 0 ? 0 : V;
          }
        }
        return O;
      }
      function ig(i) {
        return typeof i == "number" ? i : Cn(i) ? A : +i;
      }
      function _n(i) {
        if (typeof i == "string")
          return i;
        if (ze(i))
          return Tt(i, _n) + "";
        if (Cn(i))
          return jm ? jm.call(i) : "";
        var s = i + "";
        return s == "0" && 1 / i == -1 / 0 ? "-0" : s;
      }
      function Yr(i, s, c) {
        var h = -1, b = xs, O = i.length, V = !0, q = [], ee = q;
        if (c)
          V = !1, b = fc;
        else if (O >= a) {
          var he = s ? null : C2(i);
          if (he)
            return $s(he);
          V = !1, b = so, ee = new Ea();
        } else
          ee = s ? [] : q;
        e:
          for (; ++h < O; ) {
            var me = i[h], ve = s ? s(me) : me;
            if (me = c || me !== 0 ? me : 0, V && ve === ve) {
              for (var _e = ee.length; _e--; )
                if (ee[_e] === ve)
                  continue e;
              s && ee.push(ve), q.push(me);
            } else b(ee, ve, c) || (ee !== q && ee.push(ve), q.push(me));
          }
        return q;
      }
      function Fc(i, s) {
        return s = Kr(s, i), i = Mg(i, s), i == null || delete i[ur(Fn(s))];
      }
      function og(i, s, c, h) {
        return yo(i, s, c(Ca(i, s)), h);
      }
      function Ws(i, s, c, h) {
        for (var b = i.length, O = h ? b : -1; (h ? O-- : ++O < b) && s(i[O], O, i); )
          ;
        return c ? jn(i, h ? 0 : O, h ? O + 1 : b) : jn(i, h ? O + 1 : 0, h ? b : O);
      }
      function sg(i, s) {
        var c = i;
        return c instanceof et && (c = c.value()), pc(s, function(h, b) {
          return b.func.apply(b.thisArg, Wr([h], b.args));
        }, c);
      }
      function Bc(i, s, c) {
        var h = i.length;
        if (h < 2)
          return h ? Yr(i[0]) : [];
        for (var b = -1, O = ie(h); ++b < h; )
          for (var V = i[b], q = -1; ++q < h; )
            q != b && (O[b] = mo(O[b] || V, i[q], s, c));
        return Yr(Gt(O, 1), s, c);
      }
      function ug(i, s, c) {
        for (var h = -1, b = i.length, O = s.length, V = {}; ++h < b; ) {
          var q = h < O ? s[h] : n;
          c(V, i[h], q);
        }
        return V;
      }
      function Lc(i) {
        return Rt(i) ? i : [];
      }
      function Vc(i) {
        return typeof i == "function" ? i : gn;
      }
      function Kr(i, s) {
        return ze(i) ? i : Zc(i, s) ? [i] : jg(ut(i));
      }
      var g2 = Ze;
      function qr(i, s, c) {
        var h = i.length;
        return c = c === n ? h : c, !s && c >= h ? i : jn(i, s, c);
      }
      var lg = r3 || function(i) {
        return qt.clearTimeout(i);
      };
      function cg(i, s) {
        if (s)
          return i.slice();
        var c = i.length, h = Om ? Om(c) : new i.constructor(c);
        return i.copy(h), h;
      }
      function Wc(i) {
        var s = new i.constructor(i.byteLength);
        return new Ss(s).set(new Ss(i)), s;
      }
      function v2(i, s) {
        var c = s ? Wc(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.byteLength);
      }
      function y2(i) {
        var s = new i.constructor(i.source, Kh.exec(i));
        return s.lastIndex = i.lastIndex, s;
      }
      function b2(i) {
        return po ? vt(po.call(i)) : {};
      }
      function dg(i, s) {
        var c = s ? Wc(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.length);
      }
      function fg(i, s) {
        if (i !== s) {
          var c = i !== n, h = i === null, b = i === i, O = Cn(i), V = s !== n, q = s === null, ee = s === s, he = Cn(s);
          if (!q && !he && !O && i > s || O && V && ee && !q && !he || h && V && ee || !c && ee || !b)
            return 1;
          if (!h && !O && !he && i < s || he && c && b && !h && !O || q && c && b || !V && b || !ee)
            return -1;
        }
        return 0;
      }
      function x2(i, s, c) {
        for (var h = -1, b = i.criteria, O = s.criteria, V = b.length, q = c.length; ++h < V; ) {
          var ee = fg(b[h], O[h]);
          if (ee) {
            if (h >= q)
              return ee;
            var he = c[h];
            return ee * (he == "desc" ? -1 : 1);
          }
        }
        return i.index - s.index;
      }
      function pg(i, s, c, h) {
        for (var b = -1, O = i.length, V = c.length, q = -1, ee = s.length, he = Ut(O - V, 0), me = ie(ee + he), ve = !h; ++q < ee; )
          me[q] = s[q];
        for (; ++b < V; )
          (ve || b < O) && (me[c[b]] = i[b]);
        for (; he--; )
          me[q++] = i[b++];
        return me;
      }
      function hg(i, s, c, h) {
        for (var b = -1, O = i.length, V = -1, q = c.length, ee = -1, he = s.length, me = Ut(O - q, 0), ve = ie(me + he), _e = !h; ++b < me; )
          ve[b] = i[b];
        for (var Pe = b; ++ee < he; )
          ve[Pe + ee] = s[ee];
        for (; ++V < q; )
          (_e || b < O) && (ve[Pe + c[V]] = i[b++]);
        return ve;
      }
      function pn(i, s) {
        var c = -1, h = i.length;
        for (s || (s = ie(h)); ++c < h; )
          s[c] = i[c];
        return s;
      }
      function sr(i, s, c, h) {
        var b = !c;
        c || (c = {});
        for (var O = -1, V = s.length; ++O < V; ) {
          var q = s[O], ee = h ? h(c[q], i[q], q, c, i) : n;
          ee === n && (ee = i[q]), b ? $r(c, q, ee) : ho(c, q, ee);
        }
        return c;
      }
      function w2(i, s) {
        return sr(i, Gc(i), s);
      }
      function $2(i, s) {
        return sr(i, Tg(i), s);
      }
      function zs(i, s) {
        return function(c, h) {
          var b = ze(c) ? T_ : U3, O = s ? s() : {};
          return b(c, i, Me(h, 2), O);
        };
      }
      function ui(i) {
        return Ze(function(s, c) {
          var h = -1, b = c.length, O = b > 1 ? c[b - 1] : n, V = b > 2 ? c[2] : n;
          for (O = i.length > 3 && typeof O == "function" ? (b--, O) : n, V && rn(c[0], c[1], V) && (O = b < 3 ? n : O, b = 1), s = vt(s); ++h < b; ) {
            var q = c[h];
            q && i(s, q, h, O);
          }
          return s;
        });
      }
      function mg(i, s) {
        return function(c, h) {
          if (c == null)
            return c;
          if (!hn(c))
            return i(c, h);
          for (var b = c.length, O = s ? b : -1, V = vt(c); (s ? O-- : ++O < b) && h(V[O], O, V) !== !1; )
            ;
          return c;
        };
      }
      function gg(i) {
        return function(s, c, h) {
          for (var b = -1, O = vt(s), V = h(s), q = V.length; q--; ) {
            var ee = V[i ? q : ++b];
            if (c(O[ee], ee, O) === !1)
              break;
          }
          return s;
        };
      }
      function D2(i, s, c) {
        var h = s & w, b = bo(i);
        function O() {
          var V = this && this !== qt && this instanceof O ? b : i;
          return V.apply(h ? c : this, arguments);
        }
        return O;
      }
      function vg(i) {
        return function(s) {
          s = ut(s);
          var c = ti(s) ? Gn(s) : n, h = c ? c[0] : s.charAt(0), b = c ? qr(c, 1).join("") : s.slice(1);
          return h[i]() + b;
        };
      }
      function li(i) {
        return function(s) {
          return pc(mv(hv(s).replace(p_, "")), i, "");
        };
      }
      function bo(i) {
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
          var c = si(i.prototype), h = i.apply(c, s);
          return Pt(h) ? h : c;
        };
      }
      function E2(i, s, c) {
        var h = bo(i);
        function b() {
          for (var O = arguments.length, V = ie(O), q = O, ee = ci(b); q--; )
            V[q] = arguments[q];
          var he = O < 3 && V[0] !== ee && V[O - 1] !== ee ? [] : zr(V, ee);
          if (O -= he.length, O < c)
            return $g(
              i,
              s,
              Us,
              b.placeholder,
              n,
              V,
              he,
              n,
              n,
              c - O
            );
          var me = this && this !== qt && this instanceof b ? h : i;
          return Dn(me, this, V);
        }
        return b;
      }
      function yg(i) {
        return function(s, c, h) {
          var b = vt(s);
          if (!hn(s)) {
            var O = Me(c, 3);
            s = Yt(s), c = function(q) {
              return O(b[q], q, b);
            };
          }
          var V = i(s, c, h);
          return V > -1 ? b[O ? s[V] : V] : n;
        };
      }
      function bg(i) {
        return Er(function(s) {
          var c = s.length, h = c, b = Nn.prototype.thru;
          for (i && s.reverse(); h--; ) {
            var O = s[h];
            if (typeof O != "function")
              throw new In(u);
            if (b && !V && qs(O) == "wrapper")
              var V = new Nn([], !0);
          }
          for (h = V ? h : c; ++h < c; ) {
            O = s[h];
            var q = qs(O), ee = q == "wrapper" ? Kc(O) : n;
            ee && Xc(ee[0]) && ee[1] == (Z | C | S | k) && !ee[4].length && ee[9] == 1 ? V = V[qs(ee[0])].apply(V, ee[3]) : V = O.length == 1 && Xc(O) ? V[q]() : V.thru(O);
          }
          return function() {
            var he = arguments, me = he[0];
            if (V && he.length == 1 && ze(me))
              return V.plant(me).value();
            for (var ve = 0, _e = c ? s[ve].apply(this, he) : me; ++ve < c; )
              _e = s[ve].call(this, _e);
            return _e;
          };
        });
      }
      function Us(i, s, c, h, b, O, V, q, ee, he) {
        var me = s & Z, ve = s & w, _e = s & M, Pe = s & (C | P), Ie = s & F, qe = _e ? n : bo(i);
        function Ne() {
          for (var Qe = arguments.length, nt = ie(Qe), Tn = Qe; Tn--; )
            nt[Tn] = arguments[Tn];
          if (Pe)
            var an = ci(Ne), Sn = R_(nt, an);
          if (h && (nt = pg(nt, h, b, Pe)), O && (nt = hg(nt, O, V, Pe)), Qe -= Sn, Pe && Qe < he) {
            var jt = zr(nt, an);
            return $g(
              i,
              s,
              Us,
              Ne.placeholder,
              c,
              nt,
              jt,
              q,
              ee,
              he - Qe
            );
          }
          var Jn = ve ? c : this, Sr = _e ? Jn[i] : i;
          return Qe = nt.length, q ? nt = U2(nt, q) : Ie && Qe > 1 && nt.reverse(), me && ee < Qe && (nt.length = ee), this && this !== qt && this instanceof Ne && (Sr = qe || bo(Sr)), Sr.apply(Jn, nt);
        }
        return Ne;
      }
      function xg(i, s) {
        return function(c, h) {
          return J3(c, i, s(h), {});
        };
      }
      function Hs(i, s) {
        return function(c, h) {
          var b;
          if (c === n && h === n)
            return s;
          if (c !== n && (b = c), h !== n) {
            if (b === n)
              return h;
            typeof c == "string" || typeof h == "string" ? (c = _n(c), h = _n(h)) : (c = ig(c), h = ig(h)), b = i(c, h);
          }
          return b;
        };
      }
      function zc(i) {
        return Er(function(s) {
          return s = Tt(s, En(Me())), Ze(function(c) {
            var h = this;
            return i(s, function(b) {
              return Dn(b, h, c);
            });
          });
        });
      }
      function Ys(i, s) {
        s = s === n ? " " : _n(s);
        var c = s.length;
        if (c < 2)
          return c ? Rc(s, i) : s;
        var h = Rc(s, As(i / ni(s)));
        return ti(s) ? qr(Gn(h), 0, i).join("") : h.slice(0, i);
      }
      function _2(i, s, c, h) {
        var b = s & w, O = bo(i);
        function V() {
          for (var q = -1, ee = arguments.length, he = -1, me = h.length, ve = ie(me + ee), _e = this && this !== qt && this instanceof V ? O : i; ++he < me; )
            ve[he] = h[he];
          for (; ee--; )
            ve[he++] = arguments[++q];
          return Dn(_e, b ? c : this, ve);
        }
        return V;
      }
      function wg(i) {
        return function(s, c, h) {
          return h && typeof h != "number" && rn(s, c, h) && (c = h = n), s = Tr(s), c === n ? (c = s, s = 0) : c = Tr(c), h = h === n ? s < c ? 1 : -1 : Tr(h), c2(s, c, h, i);
        };
      }
      function Ks(i) {
        return function(s, c) {
          return typeof s == "string" && typeof c == "string" || (s = Bn(s), c = Bn(c)), i(s, c);
        };
      }
      function $g(i, s, c, h, b, O, V, q, ee, he) {
        var me = s & C, ve = me ? V : n, _e = me ? n : V, Pe = me ? O : n, Ie = me ? n : O;
        s |= me ? S : G, s &= ~(me ? G : S), s & D || (s &= -4);
        var qe = [
          i,
          s,
          b,
          Pe,
          ve,
          Ie,
          _e,
          q,
          ee,
          he
        ], Ne = c.apply(n, qe);
        return Xc(i) && Ig(Ne, qe), Ne.placeholder = h, Ng(Ne, i, s);
      }
      function Uc(i) {
        var s = zt[i];
        return function(c, h) {
          if (c = Bn(c), h = h == null ? 0 : Jt(Ye(h), 292), h && Nm(c)) {
            var b = (ut(c) + "e").split("e"), O = s(b[0] + "e" + (+b[1] + h));
            return b = (ut(O) + "e").split("e"), +(b[0] + "e" + (+b[1] - h));
          }
          return s(c);
        };
      }
      var C2 = ii && 1 / $s(new ii([, -0]))[1] == N ? function(i) {
        return new ii(i);
      } : fd;
      function Dg(i) {
        return function(s) {
          var c = Qt(s);
          return c == we ? xc(s) : c == g ? z_(s) : N_(s, i(s));
        };
      }
      function Dr(i, s, c, h, b, O, V, q) {
        var ee = s & M;
        if (!ee && typeof i != "function")
          throw new In(u);
        var he = h ? h.length : 0;
        if (he || (s &= -97, h = b = n), V = V === n ? V : Ut(Ye(V), 0), q = q === n ? q : Ye(q), he -= b ? b.length : 0, s & G) {
          var me = h, ve = b;
          h = b = n;
        }
        var _e = ee ? n : Kc(i), Pe = [
          i,
          s,
          c,
          h,
          b,
          me,
          ve,
          O,
          V,
          q
        ];
        if (_e && V2(Pe, _e), i = Pe[0], s = Pe[1], c = Pe[2], h = Pe[3], b = Pe[4], q = Pe[9] = Pe[9] === n ? ee ? 0 : i.length : Ut(Pe[9] - he, 0), !q && s & (C | P) && (s &= -25), !s || s == w)
          var Ie = D2(i, s, c);
        else s == C || s == P ? Ie = E2(i, s, q) : (s == S || s == (w | S)) && !b.length ? Ie = _2(i, s, c, h) : Ie = Us.apply(n, Pe);
        var qe = _e ? rg : Ig;
        return Ng(qe(Ie, Pe), i, s);
      }
      function Eg(i, s, c, h) {
        return i === n || Xn(i, ai[c]) && !pt.call(h, c) ? s : i;
      }
      function _g(i, s, c, h, b, O) {
        return Pt(i) && Pt(s) && (O.set(s, i), Ls(i, s, n, _g, O), O.delete(s)), i;
      }
      function T2(i) {
        return $o(i) ? n : i;
      }
      function Cg(i, s, c, h, b, O) {
        var V = c & _, q = i.length, ee = s.length;
        if (q != ee && !(V && ee > q))
          return !1;
        var he = O.get(i), me = O.get(s);
        if (he && me)
          return he == s && me == i;
        var ve = -1, _e = !0, Pe = c & x ? new Ea() : n;
        for (O.set(i, s), O.set(s, i); ++ve < q; ) {
          var Ie = i[ve], qe = s[ve];
          if (h)
            var Ne = V ? h(qe, Ie, ve, s, i, O) : h(Ie, qe, ve, i, s, O);
          if (Ne !== n) {
            if (Ne)
              continue;
            _e = !1;
            break;
          }
          if (Pe) {
            if (!hc(s, function(Qe, nt) {
              if (!so(Pe, nt) && (Ie === Qe || b(Ie, Qe, c, h, O)))
                return Pe.push(nt);
            })) {
              _e = !1;
              break;
            }
          } else if (!(Ie === qe || b(Ie, qe, c, h, O))) {
            _e = !1;
            break;
          }
        }
        return O.delete(i), O.delete(s), _e;
      }
      function S2(i, s, c, h, b, O, V) {
        switch (c) {
          case Re:
            if (i.byteLength != s.byteLength || i.byteOffset != s.byteOffset)
              return !1;
            i = i.buffer, s = s.buffer;
          case le:
            return !(i.byteLength != s.byteLength || !O(new Ss(i), new Ss(s)));
          case oe:
          case xe:
          case rt:
            return Xn(+i, +s);
          case Ce:
            return i.name == s.name && i.message == s.message;
          case ae:
          case K:
            return i == s + "";
          case we:
            var q = xc;
          case g:
            var ee = h & _;
            if (q || (q = $s), i.size != s.size && !ee)
              return !1;
            var he = V.get(i);
            if (he)
              return he == s;
            h |= x, V.set(i, s);
            var me = Cg(q(i), q(s), h, b, O, V);
            return V.delete(i), me;
          case Y:
            if (po)
              return po.call(i) == po.call(s);
        }
        return !1;
      }
      function P2(i, s, c, h, b, O) {
        var V = c & _, q = Hc(i), ee = q.length, he = Hc(s), me = he.length;
        if (ee != me && !V)
          return !1;
        for (var ve = ee; ve--; ) {
          var _e = q[ve];
          if (!(V ? _e in s : pt.call(s, _e)))
            return !1;
        }
        var Pe = O.get(i), Ie = O.get(s);
        if (Pe && Ie)
          return Pe == s && Ie == i;
        var qe = !0;
        O.set(i, s), O.set(s, i);
        for (var Ne = V; ++ve < ee; ) {
          _e = q[ve];
          var Qe = i[_e], nt = s[_e];
          if (h)
            var Tn = V ? h(nt, Qe, _e, s, i, O) : h(Qe, nt, _e, i, s, O);
          if (!(Tn === n ? Qe === nt || b(Qe, nt, c, h, O) : Tn)) {
            qe = !1;
            break;
          }
          Ne || (Ne = _e == "constructor");
        }
        if (qe && !Ne) {
          var an = i.constructor, Sn = s.constructor;
          an != Sn && "constructor" in i && "constructor" in s && !(typeof an == "function" && an instanceof an && typeof Sn == "function" && Sn instanceof Sn) && (qe = !1);
        }
        return O.delete(i), O.delete(s), qe;
      }
      function Er(i) {
        return Qc(Ag(i, n, Vg), i + "");
      }
      function Hc(i) {
        return Ym(i, Yt, Gc);
      }
      function Yc(i) {
        return Ym(i, mn, Tg);
      }
      var Kc = Is ? function(i) {
        return Is.get(i);
      } : fd;
      function qs(i) {
        for (var s = i.name + "", c = oi[s], h = pt.call(oi, s) ? c.length : 0; h--; ) {
          var b = c[h], O = b.func;
          if (O == null || O == i)
            return b.name;
        }
        return s;
      }
      function ci(i) {
        var s = pt.call(T, "placeholder") ? T : i;
        return s.placeholder;
      }
      function Me() {
        var i = T.iteratee || cd;
        return i = i === cd ? Gm : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Gs(i, s) {
        var c = i.__data__;
        return j2(s) ? c[typeof s == "string" ? "string" : "hash"] : c.map;
      }
      function qc(i) {
        for (var s = Yt(i), c = s.length; c--; ) {
          var h = s[c], b = i[h];
          s[c] = [h, b, kg(b)];
        }
        return s;
      }
      function Ta(i, s) {
        var c = L_(i, s);
        return qm(c) ? c : n;
      }
      function k2(i) {
        var s = pt.call(i, $a), c = i[$a];
        try {
          i[$a] = n;
          var h = !0;
        } catch {
        }
        var b = Cs.call(i);
        return h && (s ? i[$a] = c : delete i[$a]), b;
      }
      var Gc = $c ? function(i) {
        return i == null ? [] : (i = vt(i), Vr($c(i), function(s) {
          return Mm.call(i, s);
        }));
      } : pd, Tg = $c ? function(i) {
        for (var s = []; i; )
          Wr(s, Gc(i)), i = Ps(i);
        return s;
      } : pd, Qt = nn;
      (Dc && Qt(new Dc(new ArrayBuffer(1))) != Re || lo && Qt(new lo()) != we || Ec && Qt(Ec.resolve()) != U || ii && Qt(new ii()) != g || co && Qt(new co()) != se) && (Qt = function(i) {
        var s = nn(i), c = s == Je ? i.constructor : n, h = c ? Sa(c) : "";
        if (h)
          switch (h) {
            case f3:
              return Re;
            case p3:
              return we;
            case h3:
              return U;
            case m3:
              return g;
            case g3:
              return se;
          }
        return s;
      });
      function O2(i, s, c) {
        for (var h = -1, b = c.length; ++h < b; ) {
          var O = c[h], V = O.size;
          switch (O.type) {
            case "drop":
              i += V;
              break;
            case "dropRight":
              s -= V;
              break;
            case "take":
              s = Jt(s, i + V);
              break;
            case "takeRight":
              i = Ut(i, s - V);
              break;
          }
        }
        return { start: i, end: s };
      }
      function A2(i) {
        var s = i.match(FE);
        return s ? s[1].split(BE) : [];
      }
      function Sg(i, s, c) {
        s = Kr(s, i);
        for (var h = -1, b = s.length, O = !1; ++h < b; ) {
          var V = ur(s[h]);
          if (!(O = i != null && c(i, V)))
            break;
          i = i[V];
        }
        return O || ++h != b ? O : (b = i == null ? 0 : i.length, !!b && nu(b) && _r(V, b) && (ze(i) || Pa(i)));
      }
      function M2(i) {
        var s = i.length, c = new i.constructor(s);
        return s && typeof i[0] == "string" && pt.call(i, "index") && (c.index = i.index, c.input = i.input), c;
      }
      function Pg(i) {
        return typeof i.constructor == "function" && !xo(i) ? si(Ps(i)) : {};
      }
      function I2(i, s, c) {
        var h = i.constructor;
        switch (s) {
          case le:
            return Wc(i);
          case oe:
          case xe:
            return new h(+i);
          case Re:
            return v2(i, c);
          case $t:
          case Le:
          case gt:
          case Nt:
          case mt:
          case Vt:
          case st:
          case ba:
          case xa:
            return dg(i, c);
          case we:
            return new h();
          case rt:
          case K:
            return new h(i);
          case ae:
            return y2(i);
          case g:
            return new h();
          case Y:
            return b2(i);
        }
      }
      function N2(i, s) {
        var c = s.length;
        if (!c)
          return i;
        var h = c - 1;
        return s[h] = (c > 1 ? "& " : "") + s[h], s = s.join(c > 2 ? ", " : " "), i.replace(jE, `{
/* [wrapped with ` + s + `] */
`);
      }
      function R2(i) {
        return ze(i) || Pa(i) || !!(Im && i && i[Im]);
      }
      function _r(i, s) {
        var c = typeof i;
        return s = s ?? B, !!s && (c == "number" || c != "symbol" && qE.test(i)) && i > -1 && i % 1 == 0 && i < s;
      }
      function rn(i, s, c) {
        if (!Pt(c))
          return !1;
        var h = typeof s;
        return (h == "number" ? hn(c) && _r(s, c.length) : h == "string" && s in c) ? Xn(c[s], i) : !1;
      }
      function Zc(i, s) {
        if (ze(i))
          return !1;
        var c = typeof i;
        return c == "number" || c == "symbol" || c == "boolean" || i == null || Cn(i) ? !0 : ME.test(i) || !AE.test(i) || s != null && i in vt(s);
      }
      function j2(i) {
        var s = typeof i;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? i !== "__proto__" : i === null;
      }
      function Xc(i) {
        var s = qs(i), c = T[s];
        if (typeof c != "function" || !(s in et.prototype))
          return !1;
        if (i === c)
          return !0;
        var h = Kc(c);
        return !!h && i === h[0];
      }
      function F2(i) {
        return !!km && km in i;
      }
      var B2 = Es ? Cr : hd;
      function xo(i) {
        var s = i && i.constructor, c = typeof s == "function" && s.prototype || ai;
        return i === c;
      }
      function kg(i) {
        return i === i && !Pt(i);
      }
      function Og(i, s) {
        return function(c) {
          return c == null ? !1 : c[i] === s && (s !== n || i in vt(c));
        };
      }
      function L2(i) {
        var s = eu(i, function(h) {
          return c.size === f && c.clear(), h;
        }), c = s.cache;
        return s;
      }
      function V2(i, s) {
        var c = i[1], h = s[1], b = c | h, O = b < (w | M | Z), V = h == Z && c == C || h == Z && c == k && i[7].length <= s[8] || h == (Z | k) && s[7].length <= s[8] && c == C;
        if (!(O || V))
          return i;
        h & w && (i[2] = s[2], b |= c & w ? 0 : D);
        var q = s[3];
        if (q) {
          var ee = i[3];
          i[3] = ee ? pg(ee, q, s[4]) : q, i[4] = ee ? zr(i[3], p) : s[4];
        }
        return q = s[5], q && (ee = i[5], i[5] = ee ? hg(ee, q, s[6]) : q, i[6] = ee ? zr(i[5], p) : s[6]), q = s[7], q && (i[7] = q), h & Z && (i[8] = i[8] == null ? s[8] : Jt(i[8], s[8])), i[9] == null && (i[9] = s[9]), i[0] = s[0], i[1] = b, i;
      }
      function W2(i) {
        var s = [];
        if (i != null)
          for (var c in vt(i))
            s.push(c);
        return s;
      }
      function z2(i) {
        return Cs.call(i);
      }
      function Ag(i, s, c) {
        return s = Ut(s === n ? i.length - 1 : s, 0), function() {
          for (var h = arguments, b = -1, O = Ut(h.length - s, 0), V = ie(O); ++b < O; )
            V[b] = h[s + b];
          b = -1;
          for (var q = ie(s + 1); ++b < s; )
            q[b] = h[b];
          return q[s] = c(V), Dn(i, this, q);
        };
      }
      function Mg(i, s) {
        return s.length < 2 ? i : Ca(i, jn(s, 0, -1));
      }
      function U2(i, s) {
        for (var c = i.length, h = Jt(s.length, c), b = pn(i); h--; ) {
          var O = s[h];
          i[h] = _r(O, c) ? b[O] : n;
        }
        return i;
      }
      function Jc(i, s) {
        if (!(s === "constructor" && typeof i[s] == "function") && s != "__proto__")
          return i[s];
      }
      var Ig = Rg(rg), wo = i3 || function(i, s) {
        return qt.setTimeout(i, s);
      }, Qc = Rg(p2);
      function Ng(i, s, c) {
        var h = s + "";
        return Qc(i, N2(h, H2(A2(h), c)));
      }
      function Rg(i) {
        var s = 0, c = 0;
        return function() {
          var h = l3(), b = E - (h - c);
          if (c = h, b > 0) {
            if (++s >= j)
              return arguments[0];
          } else
            s = 0;
          return i.apply(n, arguments);
        };
      }
      function Zs(i, s) {
        var c = -1, h = i.length, b = h - 1;
        for (s = s === n ? h : s; ++c < s; ) {
          var O = Nc(c, b), V = i[O];
          i[O] = i[c], i[c] = V;
        }
        return i.length = s, i;
      }
      var jg = L2(function(i) {
        var s = [];
        return i.charCodeAt(0) === 46 && s.push(""), i.replace(IE, function(c, h, b, O) {
          s.push(b ? O.replace(WE, "$1") : h || c);
        }), s;
      });
      function ur(i) {
        if (typeof i == "string" || Cn(i))
          return i;
        var s = i + "";
        return s == "0" && 1 / i == -1 / 0 ? "-0" : s;
      }
      function Sa(i) {
        if (i != null) {
          try {
            return _s.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function H2(i, s) {
        return Mn(ce, function(c) {
          var h = "_." + c[0];
          s & c[1] && !xs(i, h) && i.push(h);
        }), i.sort();
      }
      function Fg(i) {
        if (i instanceof et)
          return i.clone();
        var s = new Nn(i.__wrapped__, i.__chain__);
        return s.__actions__ = pn(i.__actions__), s.__index__ = i.__index__, s.__values__ = i.__values__, s;
      }
      function Y2(i, s, c) {
        (c ? rn(i, s, c) : s === n) ? s = 1 : s = Ut(Ye(s), 0);
        var h = i == null ? 0 : i.length;
        if (!h || s < 1)
          return [];
        for (var b = 0, O = 0, V = ie(As(h / s)); b < h; )
          V[O++] = jn(i, b, b += s);
        return V;
      }
      function K2(i) {
        for (var s = -1, c = i == null ? 0 : i.length, h = 0, b = []; ++s < c; ) {
          var O = i[s];
          O && (b[h++] = O);
        }
        return b;
      }
      function q2() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var s = ie(i - 1), c = arguments[0], h = i; h--; )
          s[h - 1] = arguments[h];
        return Wr(ze(c) ? pn(c) : [c], Gt(s, 1));
      }
      var G2 = Ze(function(i, s) {
        return Rt(i) ? mo(i, Gt(s, 1, Rt, !0)) : [];
      }), Z2 = Ze(function(i, s) {
        var c = Fn(s);
        return Rt(c) && (c = n), Rt(i) ? mo(i, Gt(s, 1, Rt, !0), Me(c, 2)) : [];
      }), X2 = Ze(function(i, s) {
        var c = Fn(s);
        return Rt(c) && (c = n), Rt(i) ? mo(i, Gt(s, 1, Rt, !0), n, c) : [];
      });
      function J2(i, s, c) {
        var h = i == null ? 0 : i.length;
        return h ? (s = c || s === n ? 1 : Ye(s), jn(i, s < 0 ? 0 : s, h)) : [];
      }
      function Q2(i, s, c) {
        var h = i == null ? 0 : i.length;
        return h ? (s = c || s === n ? 1 : Ye(s), s = h - s, jn(i, 0, s < 0 ? 0 : s)) : [];
      }
      function eC(i, s) {
        return i && i.length ? Ws(i, Me(s, 3), !0, !0) : [];
      }
      function tC(i, s) {
        return i && i.length ? Ws(i, Me(s, 3), !0) : [];
      }
      function nC(i, s, c, h) {
        var b = i == null ? 0 : i.length;
        return b ? (c && typeof c != "number" && rn(i, s, c) && (c = 0, h = b), q3(i, s, c, h)) : [];
      }
      function Bg(i, s, c) {
        var h = i == null ? 0 : i.length;
        if (!h)
          return -1;
        var b = c == null ? 0 : Ye(c);
        return b < 0 && (b = Ut(h + b, 0)), ws(i, Me(s, 3), b);
      }
      function Lg(i, s, c) {
        var h = i == null ? 0 : i.length;
        if (!h)
          return -1;
        var b = h - 1;
        return c !== n && (b = Ye(c), b = c < 0 ? Ut(h + b, 0) : Jt(b, h - 1)), ws(i, Me(s, 3), b, !0);
      }
      function Vg(i) {
        var s = i == null ? 0 : i.length;
        return s ? Gt(i, 1) : [];
      }
      function rC(i) {
        var s = i == null ? 0 : i.length;
        return s ? Gt(i, N) : [];
      }
      function aC(i, s) {
        var c = i == null ? 0 : i.length;
        return c ? (s = s === n ? 1 : Ye(s), Gt(i, s)) : [];
      }
      function iC(i) {
        for (var s = -1, c = i == null ? 0 : i.length, h = {}; ++s < c; ) {
          var b = i[s];
          h[b[0]] = b[1];
        }
        return h;
      }
      function Wg(i) {
        return i && i.length ? i[0] : n;
      }
      function oC(i, s, c) {
        var h = i == null ? 0 : i.length;
        if (!h)
          return -1;
        var b = c == null ? 0 : Ye(c);
        return b < 0 && (b = Ut(h + b, 0)), ei(i, s, b);
      }
      function sC(i) {
        var s = i == null ? 0 : i.length;
        return s ? jn(i, 0, -1) : [];
      }
      var uC = Ze(function(i) {
        var s = Tt(i, Lc);
        return s.length && s[0] === i[0] ? kc(s) : [];
      }), lC = Ze(function(i) {
        var s = Fn(i), c = Tt(i, Lc);
        return s === Fn(c) ? s = n : c.pop(), c.length && c[0] === i[0] ? kc(c, Me(s, 2)) : [];
      }), cC = Ze(function(i) {
        var s = Fn(i), c = Tt(i, Lc);
        return s = typeof s == "function" ? s : n, s && c.pop(), c.length && c[0] === i[0] ? kc(c, n, s) : [];
      });
      function dC(i, s) {
        return i == null ? "" : s3.call(i, s);
      }
      function Fn(i) {
        var s = i == null ? 0 : i.length;
        return s ? i[s - 1] : n;
      }
      function fC(i, s, c) {
        var h = i == null ? 0 : i.length;
        if (!h)
          return -1;
        var b = h;
        return c !== n && (b = Ye(c), b = b < 0 ? Ut(h + b, 0) : Jt(b, h - 1)), s === s ? H_(i, s, b) : ws(i, $m, b, !0);
      }
      function pC(i, s) {
        return i && i.length ? Qm(i, Ye(s)) : n;
      }
      var hC = Ze(zg);
      function zg(i, s) {
        return i && i.length && s && s.length ? Ic(i, s) : i;
      }
      function mC(i, s, c) {
        return i && i.length && s && s.length ? Ic(i, s, Me(c, 2)) : i;
      }
      function gC(i, s, c) {
        return i && i.length && s && s.length ? Ic(i, s, n, c) : i;
      }
      var vC = Er(function(i, s) {
        var c = i == null ? 0 : i.length, h = Cc(i, s);
        return ng(i, Tt(s, function(b) {
          return _r(b, c) ? +b : b;
        }).sort(fg)), h;
      });
      function yC(i, s) {
        var c = [];
        if (!(i && i.length))
          return c;
        var h = -1, b = [], O = i.length;
        for (s = Me(s, 3); ++h < O; ) {
          var V = i[h];
          s(V, h, i) && (c.push(V), b.push(h));
        }
        return ng(i, b), c;
      }
      function ed(i) {
        return i == null ? i : d3.call(i);
      }
      function bC(i, s, c) {
        var h = i == null ? 0 : i.length;
        return h ? (c && typeof c != "number" && rn(i, s, c) ? (s = 0, c = h) : (s = s == null ? 0 : Ye(s), c = c === n ? h : Ye(c)), jn(i, s, c)) : [];
      }
      function xC(i, s) {
        return Vs(i, s);
      }
      function wC(i, s, c) {
        return jc(i, s, Me(c, 2));
      }
      function $C(i, s) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var h = Vs(i, s);
          if (h < c && Xn(i[h], s))
            return h;
        }
        return -1;
      }
      function DC(i, s) {
        return Vs(i, s, !0);
      }
      function EC(i, s, c) {
        return jc(i, s, Me(c, 2), !0);
      }
      function _C(i, s) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var h = Vs(i, s, !0) - 1;
          if (Xn(i[h], s))
            return h;
        }
        return -1;
      }
      function CC(i) {
        return i && i.length ? ag(i) : [];
      }
      function TC(i, s) {
        return i && i.length ? ag(i, Me(s, 2)) : [];
      }
      function SC(i) {
        var s = i == null ? 0 : i.length;
        return s ? jn(i, 1, s) : [];
      }
      function PC(i, s, c) {
        return i && i.length ? (s = c || s === n ? 1 : Ye(s), jn(i, 0, s < 0 ? 0 : s)) : [];
      }
      function kC(i, s, c) {
        var h = i == null ? 0 : i.length;
        return h ? (s = c || s === n ? 1 : Ye(s), s = h - s, jn(i, s < 0 ? 0 : s, h)) : [];
      }
      function OC(i, s) {
        return i && i.length ? Ws(i, Me(s, 3), !1, !0) : [];
      }
      function AC(i, s) {
        return i && i.length ? Ws(i, Me(s, 3)) : [];
      }
      var MC = Ze(function(i) {
        return Yr(Gt(i, 1, Rt, !0));
      }), IC = Ze(function(i) {
        var s = Fn(i);
        return Rt(s) && (s = n), Yr(Gt(i, 1, Rt, !0), Me(s, 2));
      }), NC = Ze(function(i) {
        var s = Fn(i);
        return s = typeof s == "function" ? s : n, Yr(Gt(i, 1, Rt, !0), n, s);
      });
      function RC(i) {
        return i && i.length ? Yr(i) : [];
      }
      function jC(i, s) {
        return i && i.length ? Yr(i, Me(s, 2)) : [];
      }
      function FC(i, s) {
        return s = typeof s == "function" ? s : n, i && i.length ? Yr(i, n, s) : [];
      }
      function td(i) {
        if (!(i && i.length))
          return [];
        var s = 0;
        return i = Vr(i, function(c) {
          if (Rt(c))
            return s = Ut(c.length, s), !0;
        }), yc(s, function(c) {
          return Tt(i, mc(c));
        });
      }
      function Ug(i, s) {
        if (!(i && i.length))
          return [];
        var c = td(i);
        return s == null ? c : Tt(c, function(h) {
          return Dn(s, n, h);
        });
      }
      var BC = Ze(function(i, s) {
        return Rt(i) ? mo(i, s) : [];
      }), LC = Ze(function(i) {
        return Bc(Vr(i, Rt));
      }), VC = Ze(function(i) {
        var s = Fn(i);
        return Rt(s) && (s = n), Bc(Vr(i, Rt), Me(s, 2));
      }), WC = Ze(function(i) {
        var s = Fn(i);
        return s = typeof s == "function" ? s : n, Bc(Vr(i, Rt), n, s);
      }), zC = Ze(td);
      function UC(i, s) {
        return ug(i || [], s || [], ho);
      }
      function HC(i, s) {
        return ug(i || [], s || [], yo);
      }
      var YC = Ze(function(i) {
        var s = i.length, c = s > 1 ? i[s - 1] : n;
        return c = typeof c == "function" ? (i.pop(), c) : n, Ug(i, c);
      });
      function Hg(i) {
        var s = T(i);
        return s.__chain__ = !0, s;
      }
      function KC(i, s) {
        return s(i), i;
      }
      function Xs(i, s) {
        return s(i);
      }
      var qC = Er(function(i) {
        var s = i.length, c = s ? i[0] : 0, h = this.__wrapped__, b = function(O) {
          return Cc(O, i);
        };
        return s > 1 || this.__actions__.length || !(h instanceof et) || !_r(c) ? this.thru(b) : (h = h.slice(c, +c + (s ? 1 : 0)), h.__actions__.push({
          func: Xs,
          args: [b],
          thisArg: n
        }), new Nn(h, this.__chain__).thru(function(O) {
          return s && !O.length && O.push(n), O;
        }));
      });
      function GC() {
        return Hg(this);
      }
      function ZC() {
        return new Nn(this.value(), this.__chain__);
      }
      function XC() {
        this.__values__ === n && (this.__values__ = iv(this.value()));
        var i = this.__index__ >= this.__values__.length, s = i ? n : this.__values__[this.__index__++];
        return { done: i, value: s };
      }
      function JC() {
        return this;
      }
      function QC(i) {
        for (var s, c = this; c instanceof Rs; ) {
          var h = Fg(c);
          h.__index__ = 0, h.__values__ = n, s ? b.__wrapped__ = h : s = h;
          var b = h;
          c = c.__wrapped__;
        }
        return b.__wrapped__ = i, s;
      }
      function eT() {
        var i = this.__wrapped__;
        if (i instanceof et) {
          var s = i;
          return this.__actions__.length && (s = new et(this)), s = s.reverse(), s.__actions__.push({
            func: Xs,
            args: [ed],
            thisArg: n
          }), new Nn(s, this.__chain__);
        }
        return this.thru(ed);
      }
      function tT() {
        return sg(this.__wrapped__, this.__actions__);
      }
      var nT = zs(function(i, s, c) {
        pt.call(i, c) ? ++i[c] : $r(i, c, 1);
      });
      function rT(i, s, c) {
        var h = ze(i) ? xm : K3;
        return c && rn(i, s, c) && (s = n), h(i, Me(s, 3));
      }
      function aT(i, s) {
        var c = ze(i) ? Vr : Um;
        return c(i, Me(s, 3));
      }
      var iT = yg(Bg), oT = yg(Lg);
      function sT(i, s) {
        return Gt(Js(i, s), 1);
      }
      function uT(i, s) {
        return Gt(Js(i, s), N);
      }
      function lT(i, s, c) {
        return c = c === n ? 1 : Ye(c), Gt(Js(i, s), c);
      }
      function Yg(i, s) {
        var c = ze(i) ? Mn : Hr;
        return c(i, Me(s, 3));
      }
      function Kg(i, s) {
        var c = ze(i) ? S_ : zm;
        return c(i, Me(s, 3));
      }
      var cT = zs(function(i, s, c) {
        pt.call(i, c) ? i[c].push(s) : $r(i, c, [s]);
      });
      function dT(i, s, c, h) {
        i = hn(i) ? i : fi(i), c = c && !h ? Ye(c) : 0;
        var b = i.length;
        return c < 0 && (c = Ut(b + c, 0)), ru(i) ? c <= b && i.indexOf(s, c) > -1 : !!b && ei(i, s, c) > -1;
      }
      var fT = Ze(function(i, s, c) {
        var h = -1, b = typeof s == "function", O = hn(i) ? ie(i.length) : [];
        return Hr(i, function(V) {
          O[++h] = b ? Dn(s, V, c) : go(V, s, c);
        }), O;
      }), pT = zs(function(i, s, c) {
        $r(i, c, s);
      });
      function Js(i, s) {
        var c = ze(i) ? Tt : Zm;
        return c(i, Me(s, 3));
      }
      function hT(i, s, c, h) {
        return i == null ? [] : (ze(s) || (s = s == null ? [] : [s]), c = h ? n : c, ze(c) || (c = c == null ? [] : [c]), eg(i, s, c));
      }
      var mT = zs(function(i, s, c) {
        i[c ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function gT(i, s, c) {
        var h = ze(i) ? pc : Em, b = arguments.length < 3;
        return h(i, Me(s, 4), c, b, Hr);
      }
      function vT(i, s, c) {
        var h = ze(i) ? P_ : Em, b = arguments.length < 3;
        return h(i, Me(s, 4), c, b, zm);
      }
      function yT(i, s) {
        var c = ze(i) ? Vr : Um;
        return c(i, tu(Me(s, 3)));
      }
      function bT(i) {
        var s = ze(i) ? Bm : d2;
        return s(i);
      }
      function xT(i, s, c) {
        (c ? rn(i, s, c) : s === n) ? s = 1 : s = Ye(s);
        var h = ze(i) ? W3 : f2;
        return h(i, s);
      }
      function wT(i) {
        var s = ze(i) ? z3 : h2;
        return s(i);
      }
      function $T(i) {
        if (i == null)
          return 0;
        if (hn(i))
          return ru(i) ? ni(i) : i.length;
        var s = Qt(i);
        return s == we || s == g ? i.size : Ac(i).length;
      }
      function DT(i, s, c) {
        var h = ze(i) ? hc : m2;
        return c && rn(i, s, c) && (s = n), h(i, Me(s, 3));
      }
      var ET = Ze(function(i, s) {
        if (i == null)
          return [];
        var c = s.length;
        return c > 1 && rn(i, s[0], s[1]) ? s = [] : c > 2 && rn(s[0], s[1], s[2]) && (s = [s[0]]), eg(i, Gt(s, 1), []);
      }), Qs = a3 || function() {
        return qt.Date.now();
      };
      function _T(i, s) {
        if (typeof s != "function")
          throw new In(u);
        return i = Ye(i), function() {
          if (--i < 1)
            return s.apply(this, arguments);
        };
      }
      function qg(i, s, c) {
        return s = c ? n : s, s = i && s == null ? i.length : s, Dr(i, Z, n, n, n, n, s);
      }
      function Gg(i, s) {
        var c;
        if (typeof s != "function")
          throw new In(u);
        return i = Ye(i), function() {
          return --i > 0 && (c = s.apply(this, arguments)), i <= 1 && (s = n), c;
        };
      }
      var nd = Ze(function(i, s, c) {
        var h = w;
        if (c.length) {
          var b = zr(c, ci(nd));
          h |= S;
        }
        return Dr(i, h, s, c, b);
      }), Zg = Ze(function(i, s, c) {
        var h = w | M;
        if (c.length) {
          var b = zr(c, ci(Zg));
          h |= S;
        }
        return Dr(s, h, i, c, b);
      });
      function Xg(i, s, c) {
        s = c ? n : s;
        var h = Dr(i, C, n, n, n, n, n, s);
        return h.placeholder = Xg.placeholder, h;
      }
      function Jg(i, s, c) {
        s = c ? n : s;
        var h = Dr(i, P, n, n, n, n, n, s);
        return h.placeholder = Jg.placeholder, h;
      }
      function Qg(i, s, c) {
        var h, b, O, V, q, ee, he = 0, me = !1, ve = !1, _e = !0;
        if (typeof i != "function")
          throw new In(u);
        s = Bn(s) || 0, Pt(c) && (me = !!c.leading, ve = "maxWait" in c, O = ve ? Ut(Bn(c.maxWait) || 0, s) : O, _e = "trailing" in c ? !!c.trailing : _e);
        function Pe(jt) {
          var Jn = h, Sr = b;
          return h = b = n, he = jt, V = i.apply(Sr, Jn), V;
        }
        function Ie(jt) {
          return he = jt, q = wo(Qe, s), me ? Pe(jt) : V;
        }
        function qe(jt) {
          var Jn = jt - ee, Sr = jt - he, yv = s - Jn;
          return ve ? Jt(yv, O - Sr) : yv;
        }
        function Ne(jt) {
          var Jn = jt - ee, Sr = jt - he;
          return ee === n || Jn >= s || Jn < 0 || ve && Sr >= O;
        }
        function Qe() {
          var jt = Qs();
          if (Ne(jt))
            return nt(jt);
          q = wo(Qe, qe(jt));
        }
        function nt(jt) {
          return q = n, _e && h ? Pe(jt) : (h = b = n, V);
        }
        function Tn() {
          q !== n && lg(q), he = 0, h = ee = b = q = n;
        }
        function an() {
          return q === n ? V : nt(Qs());
        }
        function Sn() {
          var jt = Qs(), Jn = Ne(jt);
          if (h = arguments, b = this, ee = jt, Jn) {
            if (q === n)
              return Ie(ee);
            if (ve)
              return lg(q), q = wo(Qe, s), Pe(ee);
          }
          return q === n && (q = wo(Qe, s)), V;
        }
        return Sn.cancel = Tn, Sn.flush = an, Sn;
      }
      var CT = Ze(function(i, s) {
        return Wm(i, 1, s);
      }), TT = Ze(function(i, s, c) {
        return Wm(i, Bn(s) || 0, c);
      });
      function ST(i) {
        return Dr(i, F);
      }
      function eu(i, s) {
        if (typeof i != "function" || s != null && typeof s != "function")
          throw new In(u);
        var c = function() {
          var h = arguments, b = s ? s.apply(this, h) : h[0], O = c.cache;
          if (O.has(b))
            return O.get(b);
          var V = i.apply(this, h);
          return c.cache = O.set(b, V) || O, V;
        };
        return c.cache = new (eu.Cache || wr)(), c;
      }
      eu.Cache = wr;
      function tu(i) {
        if (typeof i != "function")
          throw new In(u);
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
      function PT(i) {
        return Gg(2, i);
      }
      var kT = g2(function(i, s) {
        s = s.length == 1 && ze(s[0]) ? Tt(s[0], En(Me())) : Tt(Gt(s, 1), En(Me()));
        var c = s.length;
        return Ze(function(h) {
          for (var b = -1, O = Jt(h.length, c); ++b < O; )
            h[b] = s[b].call(this, h[b]);
          return Dn(i, this, h);
        });
      }), rd = Ze(function(i, s) {
        var c = zr(s, ci(rd));
        return Dr(i, S, n, s, c);
      }), ev = Ze(function(i, s) {
        var c = zr(s, ci(ev));
        return Dr(i, G, n, s, c);
      }), OT = Er(function(i, s) {
        return Dr(i, k, n, n, n, s);
      });
      function AT(i, s) {
        if (typeof i != "function")
          throw new In(u);
        return s = s === n ? s : Ye(s), Ze(i, s);
      }
      function MT(i, s) {
        if (typeof i != "function")
          throw new In(u);
        return s = s == null ? 0 : Ut(Ye(s), 0), Ze(function(c) {
          var h = c[s], b = qr(c, 0, s);
          return h && Wr(b, h), Dn(i, this, b);
        });
      }
      function IT(i, s, c) {
        var h = !0, b = !0;
        if (typeof i != "function")
          throw new In(u);
        return Pt(c) && (h = "leading" in c ? !!c.leading : h, b = "trailing" in c ? !!c.trailing : b), Qg(i, s, {
          leading: h,
          maxWait: s,
          trailing: b
        });
      }
      function NT(i) {
        return qg(i, 1);
      }
      function RT(i, s) {
        return rd(Vc(s), i);
      }
      function jT() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return ze(i) ? i : [i];
      }
      function FT(i) {
        return Rn(i, $);
      }
      function BT(i, s) {
        return s = typeof s == "function" ? s : n, Rn(i, $, s);
      }
      function LT(i) {
        return Rn(i, m | $);
      }
      function VT(i, s) {
        return s = typeof s == "function" ? s : n, Rn(i, m | $, s);
      }
      function WT(i, s) {
        return s == null || Vm(i, s, Yt(s));
      }
      function Xn(i, s) {
        return i === s || i !== i && s !== s;
      }
      var zT = Ks(Pc), UT = Ks(function(i, s) {
        return i >= s;
      }), Pa = Km(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Km : function(i) {
        return Mt(i) && pt.call(i, "callee") && !Mm.call(i, "callee");
      }, ze = ie.isArray, HT = hm ? En(hm) : Q3;
      function hn(i) {
        return i != null && nu(i.length) && !Cr(i);
      }
      function Rt(i) {
        return Mt(i) && hn(i);
      }
      function YT(i) {
        return i === !0 || i === !1 || Mt(i) && nn(i) == oe;
      }
      var Gr = o3 || hd, KT = mm ? En(mm) : e2;
      function qT(i) {
        return Mt(i) && i.nodeType === 1 && !$o(i);
      }
      function GT(i) {
        if (i == null)
          return !0;
        if (hn(i) && (ze(i) || typeof i == "string" || typeof i.splice == "function" || Gr(i) || di(i) || Pa(i)))
          return !i.length;
        var s = Qt(i);
        if (s == we || s == g)
          return !i.size;
        if (xo(i))
          return !Ac(i).length;
        for (var c in i)
          if (pt.call(i, c))
            return !1;
        return !0;
      }
      function ZT(i, s) {
        return vo(i, s);
      }
      function XT(i, s, c) {
        c = typeof c == "function" ? c : n;
        var h = c ? c(i, s) : n;
        return h === n ? vo(i, s, n, c) : !!h;
      }
      function ad(i) {
        if (!Mt(i))
          return !1;
        var s = nn(i);
        return s == Ce || s == be || typeof i.message == "string" && typeof i.name == "string" && !$o(i);
      }
      function JT(i) {
        return typeof i == "number" && Nm(i);
      }
      function Cr(i) {
        if (!Pt(i))
          return !1;
        var s = nn(i);
        return s == pe || s == Fe || s == $e || s == ne;
      }
      function tv(i) {
        return typeof i == "number" && i == Ye(i);
      }
      function nu(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= B;
      }
      function Pt(i) {
        var s = typeof i;
        return i != null && (s == "object" || s == "function");
      }
      function Mt(i) {
        return i != null && typeof i == "object";
      }
      var nv = gm ? En(gm) : n2;
      function QT(i, s) {
        return i === s || Oc(i, s, qc(s));
      }
      function eS(i, s, c) {
        return c = typeof c == "function" ? c : n, Oc(i, s, qc(s), c);
      }
      function tS(i) {
        return rv(i) && i != +i;
      }
      function nS(i) {
        if (B2(i))
          throw new Ve(o);
        return qm(i);
      }
      function rS(i) {
        return i === null;
      }
      function aS(i) {
        return i == null;
      }
      function rv(i) {
        return typeof i == "number" || Mt(i) && nn(i) == rt;
      }
      function $o(i) {
        if (!Mt(i) || nn(i) != Je)
          return !1;
        var s = Ps(i);
        if (s === null)
          return !0;
        var c = pt.call(s, "constructor") && s.constructor;
        return typeof c == "function" && c instanceof c && _s.call(c) == e3;
      }
      var id = vm ? En(vm) : r2;
      function iS(i) {
        return tv(i) && i >= -9007199254740991 && i <= B;
      }
      var av = ym ? En(ym) : a2;
      function ru(i) {
        return typeof i == "string" || !ze(i) && Mt(i) && nn(i) == K;
      }
      function Cn(i) {
        return typeof i == "symbol" || Mt(i) && nn(i) == Y;
      }
      var di = bm ? En(bm) : i2;
      function oS(i) {
        return i === n;
      }
      function sS(i) {
        return Mt(i) && Qt(i) == se;
      }
      function uS(i) {
        return Mt(i) && nn(i) == De;
      }
      var lS = Ks(Mc), cS = Ks(function(i, s) {
        return i <= s;
      });
      function iv(i) {
        if (!i)
          return [];
        if (hn(i))
          return ru(i) ? Gn(i) : pn(i);
        if (uo && i[uo])
          return W_(i[uo]());
        var s = Qt(i), c = s == we ? xc : s == g ? $s : fi;
        return c(i);
      }
      function Tr(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = Bn(i), i === N || i === -1 / 0) {
          var s = i < 0 ? -1 : 1;
          return s * J;
        }
        return i === i ? i : 0;
      }
      function Ye(i) {
        var s = Tr(i), c = s % 1;
        return s === s ? c ? s - c : s : 0;
      }
      function ov(i) {
        return i ? _a(Ye(i), 0, W) : 0;
      }
      function Bn(i) {
        if (typeof i == "number")
          return i;
        if (Cn(i))
          return A;
        if (Pt(i)) {
          var s = typeof i.valueOf == "function" ? i.valueOf() : i;
          i = Pt(s) ? s + "" : s;
        }
        if (typeof i != "string")
          return i === 0 ? i : +i;
        i = _m(i);
        var c = HE.test(i);
        return c || KE.test(i) ? __(i.slice(2), c ? 2 : 8) : UE.test(i) ? A : +i;
      }
      function sv(i) {
        return sr(i, mn(i));
      }
      function dS(i) {
        return i ? _a(Ye(i), -9007199254740991, B) : i === 0 ? i : 0;
      }
      function ut(i) {
        return i == null ? "" : _n(i);
      }
      var fS = ui(function(i, s) {
        if (xo(s) || hn(s)) {
          sr(s, Yt(s), i);
          return;
        }
        for (var c in s)
          pt.call(s, c) && ho(i, c, s[c]);
      }), uv = ui(function(i, s) {
        sr(s, mn(s), i);
      }), au = ui(function(i, s, c, h) {
        sr(s, mn(s), i, h);
      }), pS = ui(function(i, s, c, h) {
        sr(s, Yt(s), i, h);
      }), hS = Er(Cc);
      function mS(i, s) {
        var c = si(i);
        return s == null ? c : Lm(c, s);
      }
      var gS = Ze(function(i, s) {
        i = vt(i);
        var c = -1, h = s.length, b = h > 2 ? s[2] : n;
        for (b && rn(s[0], s[1], b) && (h = 1); ++c < h; )
          for (var O = s[c], V = mn(O), q = -1, ee = V.length; ++q < ee; ) {
            var he = V[q], me = i[he];
            (me === n || Xn(me, ai[he]) && !pt.call(i, he)) && (i[he] = O[he]);
          }
        return i;
      }), vS = Ze(function(i) {
        return i.push(n, _g), Dn(lv, n, i);
      });
      function yS(i, s) {
        return wm(i, Me(s, 3), or);
      }
      function bS(i, s) {
        return wm(i, Me(s, 3), Sc);
      }
      function xS(i, s) {
        return i == null ? i : Tc(i, Me(s, 3), mn);
      }
      function wS(i, s) {
        return i == null ? i : Hm(i, Me(s, 3), mn);
      }
      function $S(i, s) {
        return i && or(i, Me(s, 3));
      }
      function DS(i, s) {
        return i && Sc(i, Me(s, 3));
      }
      function ES(i) {
        return i == null ? [] : Bs(i, Yt(i));
      }
      function _S(i) {
        return i == null ? [] : Bs(i, mn(i));
      }
      function od(i, s, c) {
        var h = i == null ? n : Ca(i, s);
        return h === n ? c : h;
      }
      function CS(i, s) {
        return i != null && Sg(i, s, G3);
      }
      function sd(i, s) {
        return i != null && Sg(i, s, Z3);
      }
      var TS = xg(function(i, s, c) {
        s != null && typeof s.toString != "function" && (s = Cs.call(s)), i[s] = c;
      }, ld(gn)), SS = xg(function(i, s, c) {
        s != null && typeof s.toString != "function" && (s = Cs.call(s)), pt.call(i, s) ? i[s].push(c) : i[s] = [c];
      }, Me), PS = Ze(go);
      function Yt(i) {
        return hn(i) ? Fm(i) : Ac(i);
      }
      function mn(i) {
        return hn(i) ? Fm(i, !0) : o2(i);
      }
      function kS(i, s) {
        var c = {};
        return s = Me(s, 3), or(i, function(h, b, O) {
          $r(c, s(h, b, O), h);
        }), c;
      }
      function OS(i, s) {
        var c = {};
        return s = Me(s, 3), or(i, function(h, b, O) {
          $r(c, b, s(h, b, O));
        }), c;
      }
      var AS = ui(function(i, s, c) {
        Ls(i, s, c);
      }), lv = ui(function(i, s, c, h) {
        Ls(i, s, c, h);
      }), MS = Er(function(i, s) {
        var c = {};
        if (i == null)
          return c;
        var h = !1;
        s = Tt(s, function(O) {
          return O = Kr(O, i), h || (h = O.length > 1), O;
        }), sr(i, Yc(i), c), h && (c = Rn(c, m | v | $, T2));
        for (var b = s.length; b--; )
          Fc(c, s[b]);
        return c;
      });
      function IS(i, s) {
        return cv(i, tu(Me(s)));
      }
      var NS = Er(function(i, s) {
        return i == null ? {} : u2(i, s);
      });
      function cv(i, s) {
        if (i == null)
          return {};
        var c = Tt(Yc(i), function(h) {
          return [h];
        });
        return s = Me(s), tg(i, c, function(h, b) {
          return s(h, b[0]);
        });
      }
      function RS(i, s, c) {
        s = Kr(s, i);
        var h = -1, b = s.length;
        for (b || (b = 1, i = n); ++h < b; ) {
          var O = i == null ? n : i[ur(s[h])];
          O === n && (h = b, O = c), i = Cr(O) ? O.call(i) : O;
        }
        return i;
      }
      function jS(i, s, c) {
        return i == null ? i : yo(i, s, c);
      }
      function FS(i, s, c, h) {
        return h = typeof h == "function" ? h : n, i == null ? i : yo(i, s, c, h);
      }
      var dv = Dg(Yt), fv = Dg(mn);
      function BS(i, s, c) {
        var h = ze(i), b = h || Gr(i) || di(i);
        if (s = Me(s, 4), c == null) {
          var O = i && i.constructor;
          b ? c = h ? new O() : [] : Pt(i) ? c = Cr(O) ? si(Ps(i)) : {} : c = {};
        }
        return (b ? Mn : or)(i, function(V, q, ee) {
          return s(c, V, q, ee);
        }), c;
      }
      function LS(i, s) {
        return i == null ? !0 : Fc(i, s);
      }
      function VS(i, s, c) {
        return i == null ? i : og(i, s, Vc(c));
      }
      function WS(i, s, c, h) {
        return h = typeof h == "function" ? h : n, i == null ? i : og(i, s, Vc(c), h);
      }
      function fi(i) {
        return i == null ? [] : bc(i, Yt(i));
      }
      function zS(i) {
        return i == null ? [] : bc(i, mn(i));
      }
      function US(i, s, c) {
        return c === n && (c = s, s = n), c !== n && (c = Bn(c), c = c === c ? c : 0), s !== n && (s = Bn(s), s = s === s ? s : 0), _a(Bn(i), s, c);
      }
      function HS(i, s, c) {
        return s = Tr(s), c === n ? (c = s, s = 0) : c = Tr(c), i = Bn(i), X3(i, s, c);
      }
      function YS(i, s, c) {
        if (c && typeof c != "boolean" && rn(i, s, c) && (s = c = n), c === n && (typeof s == "boolean" ? (c = s, s = n) : typeof i == "boolean" && (c = i, i = n)), i === n && s === n ? (i = 0, s = 1) : (i = Tr(i), s === n ? (s = i, i = 0) : s = Tr(s)), i > s) {
          var h = i;
          i = s, s = h;
        }
        if (c || i % 1 || s % 1) {
          var b = Rm();
          return Jt(i + b * (s - i + E_("1e-" + ((b + "").length - 1))), s);
        }
        return Nc(i, s);
      }
      var KS = li(function(i, s, c) {
        return s = s.toLowerCase(), i + (c ? pv(s) : s);
      });
      function pv(i) {
        return ud(ut(i).toLowerCase());
      }
      function hv(i) {
        return i = ut(i), i && i.replace(GE, j_).replace(h_, "");
      }
      function qS(i, s, c) {
        i = ut(i), s = _n(s);
        var h = i.length;
        c = c === n ? h : _a(Ye(c), 0, h);
        var b = c;
        return c -= s.length, c >= 0 && i.slice(c, b) == s;
      }
      function GS(i) {
        return i = ut(i), i && PE.test(i) ? i.replace(Hh, F_) : i;
      }
      function ZS(i) {
        return i = ut(i), i && NE.test(i) ? i.replace(rc, "\\$&") : i;
      }
      var XS = li(function(i, s, c) {
        return i + (c ? "-" : "") + s.toLowerCase();
      }), JS = li(function(i, s, c) {
        return i + (c ? " " : "") + s.toLowerCase();
      }), QS = vg("toLowerCase");
      function eP(i, s, c) {
        i = ut(i), s = Ye(s);
        var h = s ? ni(i) : 0;
        if (!s || h >= s)
          return i;
        var b = (s - h) / 2;
        return Ys(Ms(b), c) + i + Ys(As(b), c);
      }
      function tP(i, s, c) {
        i = ut(i), s = Ye(s);
        var h = s ? ni(i) : 0;
        return s && h < s ? i + Ys(s - h, c) : i;
      }
      function nP(i, s, c) {
        i = ut(i), s = Ye(s);
        var h = s ? ni(i) : 0;
        return s && h < s ? Ys(s - h, c) + i : i;
      }
      function rP(i, s, c) {
        return c || s == null ? s = 0 : s && (s = +s), c3(ut(i).replace(ac, ""), s || 0);
      }
      function aP(i, s, c) {
        return (c ? rn(i, s, c) : s === n) ? s = 1 : s = Ye(s), Rc(ut(i), s);
      }
      function iP() {
        var i = arguments, s = ut(i[0]);
        return i.length < 3 ? s : s.replace(i[1], i[2]);
      }
      var oP = li(function(i, s, c) {
        return i + (c ? "_" : "") + s.toLowerCase();
      });
      function sP(i, s, c) {
        return c && typeof c != "number" && rn(i, s, c) && (s = c = n), c = c === n ? W : c >>> 0, c ? (i = ut(i), i && (typeof s == "string" || s != null && !id(s)) && (s = _n(s), !s && ti(i)) ? qr(Gn(i), 0, c) : i.split(s, c)) : [];
      }
      var uP = li(function(i, s, c) {
        return i + (c ? " " : "") + ud(s);
      });
      function lP(i, s, c) {
        return i = ut(i), c = c == null ? 0 : _a(Ye(c), 0, i.length), s = _n(s), i.slice(c, c + s.length) == s;
      }
      function cP(i, s, c) {
        var h = T.templateSettings;
        c && rn(i, s, c) && (s = n), i = ut(i), s = au({}, s, h, Eg);
        var b = au({}, s.imports, h.imports, Eg), O = Yt(b), V = bc(b, O), q, ee, he = 0, me = s.interpolate || vs, ve = "__p += '", _e = wc(
          (s.escape || vs).source + "|" + me.source + "|" + (me === Yh ? zE : vs).source + "|" + (s.evaluate || vs).source + "|$",
          "g"
        ), Pe = "//# sourceURL=" + (pt.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++b_ + "]") + `
`;
        i.replace(_e, function(Ne, Qe, nt, Tn, an, Sn) {
          return nt || (nt = Tn), ve += i.slice(he, Sn).replace(ZE, B_), Qe && (q = !0, ve += `' +
__e(` + Qe + `) +
'`), an && (ee = !0, ve += `';
` + an + `;
__p += '`), nt && (ve += `' +
((__t = (` + nt + `)) == null ? '' : __t) +
'`), he = Sn + Ne.length, Ne;
        }), ve += `';
`;
        var Ie = pt.call(s, "variable") && s.variable;
        if (!Ie)
          ve = `with (obj) {
` + ve + `
}
`;
        else if (VE.test(Ie))
          throw new Ve(l);
        ve = (ee ? ve.replace(oo, "") : ve).replace(nc, "$1").replace(TE, "$1;"), ve = "function(" + (Ie || "obj") + `) {
` + (Ie ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (q ? ", __e = _.escape" : "") + (ee ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ve + `return __p
}`;
        var qe = gv(function() {
          return it(O, Pe + "return " + ve).apply(n, V);
        });
        if (qe.source = ve, ad(qe))
          throw qe;
        return qe;
      }
      function dP(i) {
        return ut(i).toLowerCase();
      }
      function fP(i) {
        return ut(i).toUpperCase();
      }
      function pP(i, s, c) {
        if (i = ut(i), i && (c || s === n))
          return _m(i);
        if (!i || !(s = _n(s)))
          return i;
        var h = Gn(i), b = Gn(s), O = Cm(h, b), V = Tm(h, b) + 1;
        return qr(h, O, V).join("");
      }
      function hP(i, s, c) {
        if (i = ut(i), i && (c || s === n))
          return i.slice(0, Pm(i) + 1);
        if (!i || !(s = _n(s)))
          return i;
        var h = Gn(i), b = Tm(h, Gn(s)) + 1;
        return qr(h, 0, b).join("");
      }
      function mP(i, s, c) {
        if (i = ut(i), i && (c || s === n))
          return i.replace(ac, "");
        if (!i || !(s = _n(s)))
          return i;
        var h = Gn(i), b = Cm(h, Gn(s));
        return qr(h, b).join("");
      }
      function gP(i, s) {
        var c = R, h = I;
        if (Pt(s)) {
          var b = "separator" in s ? s.separator : b;
          c = "length" in s ? Ye(s.length) : c, h = "omission" in s ? _n(s.omission) : h;
        }
        i = ut(i);
        var O = i.length;
        if (ti(i)) {
          var V = Gn(i);
          O = V.length;
        }
        if (c >= O)
          return i;
        var q = c - ni(h);
        if (q < 1)
          return h;
        var ee = V ? qr(V, 0, q).join("") : i.slice(0, q);
        if (b === n)
          return ee + h;
        if (V && (q += ee.length - q), id(b)) {
          if (i.slice(q).search(b)) {
            var he, me = ee;
            for (b.global || (b = wc(b.source, ut(Kh.exec(b)) + "g")), b.lastIndex = 0; he = b.exec(me); )
              var ve = he.index;
            ee = ee.slice(0, ve === n ? q : ve);
          }
        } else if (i.indexOf(_n(b), q) != q) {
          var _e = ee.lastIndexOf(b);
          _e > -1 && (ee = ee.slice(0, _e));
        }
        return ee + h;
      }
      function vP(i) {
        return i = ut(i), i && SE.test(i) ? i.replace(Uh, Y_) : i;
      }
      var yP = li(function(i, s, c) {
        return i + (c ? " " : "") + s.toUpperCase();
      }), ud = vg("toUpperCase");
      function mv(i, s, c) {
        return i = ut(i), s = c ? n : s, s === n ? V_(i) ? G_(i) : A_(i) : i.match(s) || [];
      }
      var gv = Ze(function(i, s) {
        try {
          return Dn(i, n, s);
        } catch (c) {
          return ad(c) ? c : new Ve(c);
        }
      }), bP = Er(function(i, s) {
        return Mn(s, function(c) {
          c = ur(c), $r(i, c, nd(i[c], i));
        }), i;
      });
      function xP(i) {
        var s = i == null ? 0 : i.length, c = Me();
        return i = s ? Tt(i, function(h) {
          if (typeof h[1] != "function")
            throw new In(u);
          return [c(h[0]), h[1]];
        }) : [], Ze(function(h) {
          for (var b = -1; ++b < s; ) {
            var O = i[b];
            if (Dn(O[0], this, h))
              return Dn(O[1], this, h);
          }
        });
      }
      function wP(i) {
        return Y3(Rn(i, m));
      }
      function ld(i) {
        return function() {
          return i;
        };
      }
      function $P(i, s) {
        return i == null || i !== i ? s : i;
      }
      var DP = bg(), EP = bg(!0);
      function gn(i) {
        return i;
      }
      function cd(i) {
        return Gm(typeof i == "function" ? i : Rn(i, m));
      }
      function _P(i) {
        return Xm(Rn(i, m));
      }
      function CP(i, s) {
        return Jm(i, Rn(s, m));
      }
      var TP = Ze(function(i, s) {
        return function(c) {
          return go(c, i, s);
        };
      }), SP = Ze(function(i, s) {
        return function(c) {
          return go(i, c, s);
        };
      });
      function dd(i, s, c) {
        var h = Yt(s), b = Bs(s, h);
        c == null && !(Pt(s) && (b.length || !h.length)) && (c = s, s = i, i = this, b = Bs(s, Yt(s)));
        var O = !(Pt(c) && "chain" in c) || !!c.chain, V = Cr(i);
        return Mn(b, function(q) {
          var ee = s[q];
          i[q] = ee, V && (i.prototype[q] = function() {
            var he = this.__chain__;
            if (O || he) {
              var me = i(this.__wrapped__), ve = me.__actions__ = pn(this.__actions__);
              return ve.push({ func: ee, args: arguments, thisArg: i }), me.__chain__ = he, me;
            }
            return ee.apply(i, Wr([this.value()], arguments));
          });
        }), i;
      }
      function PP() {
        return qt._ === this && (qt._ = t3), this;
      }
      function fd() {
      }
      function kP(i) {
        return i = Ye(i), Ze(function(s) {
          return Qm(s, i);
        });
      }
      var OP = zc(Tt), AP = zc(xm), MP = zc(hc);
      function vv(i) {
        return Zc(i) ? mc(ur(i)) : l2(i);
      }
      function IP(i) {
        return function(s) {
          return i == null ? n : Ca(i, s);
        };
      }
      var NP = wg(), RP = wg(!0);
      function pd() {
        return [];
      }
      function hd() {
        return !1;
      }
      function jP() {
        return {};
      }
      function FP() {
        return "";
      }
      function BP() {
        return !0;
      }
      function LP(i, s) {
        if (i = Ye(i), i < 1 || i > B)
          return [];
        var c = W, h = Jt(i, W);
        s = Me(s), i -= W;
        for (var b = yc(h, s); ++c < i; )
          s(c);
        return b;
      }
      function VP(i) {
        return ze(i) ? Tt(i, ur) : Cn(i) ? [i] : pn(jg(ut(i)));
      }
      function WP(i) {
        var s = ++Q_;
        return ut(i) + s;
      }
      var zP = Hs(function(i, s) {
        return i + s;
      }, 0), UP = Uc("ceil"), HP = Hs(function(i, s) {
        return i / s;
      }, 1), YP = Uc("floor");
      function KP(i) {
        return i && i.length ? Fs(i, gn, Pc) : n;
      }
      function qP(i, s) {
        return i && i.length ? Fs(i, Me(s, 2), Pc) : n;
      }
      function GP(i) {
        return Dm(i, gn);
      }
      function ZP(i, s) {
        return Dm(i, Me(s, 2));
      }
      function XP(i) {
        return i && i.length ? Fs(i, gn, Mc) : n;
      }
      function JP(i, s) {
        return i && i.length ? Fs(i, Me(s, 2), Mc) : n;
      }
      var QP = Hs(function(i, s) {
        return i * s;
      }, 1), ek = Uc("round"), tk = Hs(function(i, s) {
        return i - s;
      }, 0);
      function nk(i) {
        return i && i.length ? vc(i, gn) : 0;
      }
      function rk(i, s) {
        return i && i.length ? vc(i, Me(s, 2)) : 0;
      }
      return T.after = _T, T.ary = qg, T.assign = fS, T.assignIn = uv, T.assignInWith = au, T.assignWith = pS, T.at = hS, T.before = Gg, T.bind = nd, T.bindAll = bP, T.bindKey = Zg, T.castArray = jT, T.chain = Hg, T.chunk = Y2, T.compact = K2, T.concat = q2, T.cond = xP, T.conforms = wP, T.constant = ld, T.countBy = nT, T.create = mS, T.curry = Xg, T.curryRight = Jg, T.debounce = Qg, T.defaults = gS, T.defaultsDeep = vS, T.defer = CT, T.delay = TT, T.difference = G2, T.differenceBy = Z2, T.differenceWith = X2, T.drop = J2, T.dropRight = Q2, T.dropRightWhile = eC, T.dropWhile = tC, T.fill = nC, T.filter = aT, T.flatMap = sT, T.flatMapDeep = uT, T.flatMapDepth = lT, T.flatten = Vg, T.flattenDeep = rC, T.flattenDepth = aC, T.flip = ST, T.flow = DP, T.flowRight = EP, T.fromPairs = iC, T.functions = ES, T.functionsIn = _S, T.groupBy = cT, T.initial = sC, T.intersection = uC, T.intersectionBy = lC, T.intersectionWith = cC, T.invert = TS, T.invertBy = SS, T.invokeMap = fT, T.iteratee = cd, T.keyBy = pT, T.keys = Yt, T.keysIn = mn, T.map = Js, T.mapKeys = kS, T.mapValues = OS, T.matches = _P, T.matchesProperty = CP, T.memoize = eu, T.merge = AS, T.mergeWith = lv, T.method = TP, T.methodOf = SP, T.mixin = dd, T.negate = tu, T.nthArg = kP, T.omit = MS, T.omitBy = IS, T.once = PT, T.orderBy = hT, T.over = OP, T.overArgs = kT, T.overEvery = AP, T.overSome = MP, T.partial = rd, T.partialRight = ev, T.partition = mT, T.pick = NS, T.pickBy = cv, T.property = vv, T.propertyOf = IP, T.pull = hC, T.pullAll = zg, T.pullAllBy = mC, T.pullAllWith = gC, T.pullAt = vC, T.range = NP, T.rangeRight = RP, T.rearg = OT, T.reject = yT, T.remove = yC, T.rest = AT, T.reverse = ed, T.sampleSize = xT, T.set = jS, T.setWith = FS, T.shuffle = wT, T.slice = bC, T.sortBy = ET, T.sortedUniq = CC, T.sortedUniqBy = TC, T.split = sP, T.spread = MT, T.tail = SC, T.take = PC, T.takeRight = kC, T.takeRightWhile = OC, T.takeWhile = AC, T.tap = KC, T.throttle = IT, T.thru = Xs, T.toArray = iv, T.toPairs = dv, T.toPairsIn = fv, T.toPath = VP, T.toPlainObject = sv, T.transform = BS, T.unary = NT, T.union = MC, T.unionBy = IC, T.unionWith = NC, T.uniq = RC, T.uniqBy = jC, T.uniqWith = FC, T.unset = LS, T.unzip = td, T.unzipWith = Ug, T.update = VS, T.updateWith = WS, T.values = fi, T.valuesIn = zS, T.without = BC, T.words = mv, T.wrap = RT, T.xor = LC, T.xorBy = VC, T.xorWith = WC, T.zip = zC, T.zipObject = UC, T.zipObjectDeep = HC, T.zipWith = YC, T.entries = dv, T.entriesIn = fv, T.extend = uv, T.extendWith = au, dd(T, T), T.add = zP, T.attempt = gv, T.camelCase = KS, T.capitalize = pv, T.ceil = UP, T.clamp = US, T.clone = FT, T.cloneDeep = LT, T.cloneDeepWith = VT, T.cloneWith = BT, T.conformsTo = WT, T.deburr = hv, T.defaultTo = $P, T.divide = HP, T.endsWith = qS, T.eq = Xn, T.escape = GS, T.escapeRegExp = ZS, T.every = rT, T.find = iT, T.findIndex = Bg, T.findKey = yS, T.findLast = oT, T.findLastIndex = Lg, T.findLastKey = bS, T.floor = YP, T.forEach = Yg, T.forEachRight = Kg, T.forIn = xS, T.forInRight = wS, T.forOwn = $S, T.forOwnRight = DS, T.get = od, T.gt = zT, T.gte = UT, T.has = CS, T.hasIn = sd, T.head = Wg, T.identity = gn, T.includes = dT, T.indexOf = oC, T.inRange = HS, T.invoke = PS, T.isArguments = Pa, T.isArray = ze, T.isArrayBuffer = HT, T.isArrayLike = hn, T.isArrayLikeObject = Rt, T.isBoolean = YT, T.isBuffer = Gr, T.isDate = KT, T.isElement = qT, T.isEmpty = GT, T.isEqual = ZT, T.isEqualWith = XT, T.isError = ad, T.isFinite = JT, T.isFunction = Cr, T.isInteger = tv, T.isLength = nu, T.isMap = nv, T.isMatch = QT, T.isMatchWith = eS, T.isNaN = tS, T.isNative = nS, T.isNil = aS, T.isNull = rS, T.isNumber = rv, T.isObject = Pt, T.isObjectLike = Mt, T.isPlainObject = $o, T.isRegExp = id, T.isSafeInteger = iS, T.isSet = av, T.isString = ru, T.isSymbol = Cn, T.isTypedArray = di, T.isUndefined = oS, T.isWeakMap = sS, T.isWeakSet = uS, T.join = dC, T.kebabCase = XS, T.last = Fn, T.lastIndexOf = fC, T.lowerCase = JS, T.lowerFirst = QS, T.lt = lS, T.lte = cS, T.max = KP, T.maxBy = qP, T.mean = GP, T.meanBy = ZP, T.min = XP, T.minBy = JP, T.stubArray = pd, T.stubFalse = hd, T.stubObject = jP, T.stubString = FP, T.stubTrue = BP, T.multiply = QP, T.nth = pC, T.noConflict = PP, T.noop = fd, T.now = Qs, T.pad = eP, T.padEnd = tP, T.padStart = nP, T.parseInt = rP, T.random = YS, T.reduce = gT, T.reduceRight = vT, T.repeat = aP, T.replace = iP, T.result = RS, T.round = ek, T.runInContext = Q, T.sample = bT, T.size = $T, T.snakeCase = oP, T.some = DT, T.sortedIndex = xC, T.sortedIndexBy = wC, T.sortedIndexOf = $C, T.sortedLastIndex = DC, T.sortedLastIndexBy = EC, T.sortedLastIndexOf = _C, T.startCase = uP, T.startsWith = lP, T.subtract = tk, T.sum = nk, T.sumBy = rk, T.template = cP, T.times = LP, T.toFinite = Tr, T.toInteger = Ye, T.toLength = ov, T.toLower = dP, T.toNumber = Bn, T.toSafeInteger = dS, T.toString = ut, T.toUpper = fP, T.trim = pP, T.trimEnd = hP, T.trimStart = mP, T.truncate = gP, T.unescape = vP, T.uniqueId = WP, T.upperCase = yP, T.upperFirst = ud, T.each = Yg, T.eachRight = Kg, T.first = Wg, dd(T, function() {
        var i = {};
        return or(T, function(s, c) {
          pt.call(T.prototype, c) || (i[c] = s);
        }), i;
      }(), { chain: !1 }), T.VERSION = r, Mn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        T[i].placeholder = T;
      }), Mn(["drop", "take"], function(i, s) {
        et.prototype[i] = function(c) {
          c = c === n ? 1 : Ut(Ye(c), 0);
          var h = this.__filtered__ && !s ? new et(this) : this.clone();
          return h.__filtered__ ? h.__takeCount__ = Jt(c, h.__takeCount__) : h.__views__.push({
            size: Jt(c, W),
            type: i + (h.__dir__ < 0 ? "Right" : "")
          }), h;
        }, et.prototype[i + "Right"] = function(c) {
          return this.reverse()[i](c).reverse();
        };
      }), Mn(["filter", "map", "takeWhile"], function(i, s) {
        var c = s + 1, h = c == L || c == z;
        et.prototype[i] = function(b) {
          var O = this.clone();
          return O.__iteratees__.push({
            iteratee: Me(b, 3),
            type: c
          }), O.__filtered__ = O.__filtered__ || h, O;
        };
      }), Mn(["head", "last"], function(i, s) {
        var c = "take" + (s ? "Right" : "");
        et.prototype[i] = function() {
          return this[c](1).value()[0];
        };
      }), Mn(["initial", "tail"], function(i, s) {
        var c = "drop" + (s ? "" : "Right");
        et.prototype[i] = function() {
          return this.__filtered__ ? new et(this) : this[c](1);
        };
      }), et.prototype.compact = function() {
        return this.filter(gn);
      }, et.prototype.find = function(i) {
        return this.filter(i).head();
      }, et.prototype.findLast = function(i) {
        return this.reverse().find(i);
      }, et.prototype.invokeMap = Ze(function(i, s) {
        return typeof i == "function" ? new et(this) : this.map(function(c) {
          return go(c, i, s);
        });
      }), et.prototype.reject = function(i) {
        return this.filter(tu(Me(i)));
      }, et.prototype.slice = function(i, s) {
        i = Ye(i);
        var c = this;
        return c.__filtered__ && (i > 0 || s < 0) ? new et(c) : (i < 0 ? c = c.takeRight(-i) : i && (c = c.drop(i)), s !== n && (s = Ye(s), c = s < 0 ? c.dropRight(-s) : c.take(s - i)), c);
      }, et.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, et.prototype.toArray = function() {
        return this.take(W);
      }, or(et.prototype, function(i, s) {
        var c = /^(?:filter|find|map|reject)|While$/.test(s), h = /^(?:head|last)$/.test(s), b = T[h ? "take" + (s == "last" ? "Right" : "") : s], O = h || /^find/.test(s);
        b && (T.prototype[s] = function() {
          var V = this.__wrapped__, q = h ? [1] : arguments, ee = V instanceof et, he = q[0], me = ee || ze(V), ve = function(Qe) {
            var nt = b.apply(T, Wr([Qe], q));
            return h && _e ? nt[0] : nt;
          };
          me && c && typeof he == "function" && he.length != 1 && (ee = me = !1);
          var _e = this.__chain__, Pe = !!this.__actions__.length, Ie = O && !_e, qe = ee && !Pe;
          if (!O && me) {
            V = qe ? V : new et(this);
            var Ne = i.apply(V, q);
            return Ne.__actions__.push({ func: Xs, args: [ve], thisArg: n }), new Nn(Ne, _e);
          }
          return Ie && qe ? i.apply(this, q) : (Ne = this.thru(ve), Ie ? h ? Ne.value()[0] : Ne.value() : Ne);
        });
      }), Mn(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var s = Ds[i], c = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", h = /^(?:pop|shift)$/.test(i);
        T.prototype[i] = function() {
          var b = arguments;
          if (h && !this.__chain__) {
            var O = this.value();
            return s.apply(ze(O) ? O : [], b);
          }
          return this[c](function(V) {
            return s.apply(ze(V) ? V : [], b);
          });
        };
      }), or(et.prototype, function(i, s) {
        var c = T[s];
        if (c) {
          var h = c.name + "";
          pt.call(oi, h) || (oi[h] = []), oi[h].push({ name: s, func: c });
        }
      }), oi[Us(n, M).name] = [{
        name: "wrapper",
        func: n
      }], et.prototype.clone = v3, et.prototype.reverse = y3, et.prototype.value = b3, T.prototype.at = qC, T.prototype.chain = GC, T.prototype.commit = ZC, T.prototype.next = XC, T.prototype.plant = QC, T.prototype.reverse = eT, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = tT, T.prototype.first = T.prototype.head, uo && (T.prototype[uo] = JC), T;
    }, ri = Z_();
    wa ? ((wa.exports = ri)._ = ri, cc._ = ri) : qt._ = ri;
  }).call(To);
})(Yu, Yu.exports);
Yu.exports;
var Ka = {};
Object.defineProperty(Ka, "__esModule", { value: !0 });
Ka.TokenData = void 0;
Ka.parse = pp;
Ka.compile = Qk;
Ka.match = n5;
Ka.pathToRegexp = Zx;
const Kx = "/", fp = (e) => e, Gk = new RegExp("^\\p{XID_Continue}$", "u"), Lo = "https://git.new/pathToRegexpError", Zk = {
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
function Xk(e) {
  const t = [...e], n = [];
  let r = 0;
  for (; r < t.length; ) {
    const a = t[r], o = Zk[a];
    if (o) {
      n.push({ type: o, index: r++, value: a });
      continue;
    }
    if (a === "\\") {
      n.push({ type: "ESCAPED", index: r++, value: t[r++] });
      continue;
    }
    if (a === ":") {
      let u = "";
      for (; Gk.test(t[++r]); )
        u += t[r];
      if (!u)
        throw new TypeError(`Missing parameter name at ${r}`);
      n.push({ type: "NAME", index: r, value: u });
      continue;
    }
    if (a === "(") {
      const u = r++;
      let l = 1, d = "";
      if (t[r] === "?")
        throw new TypeError(`Pattern cannot start with "?" at ${r}`);
      for (; r < t.length; ) {
        if (t[r] === "\\") {
          d += t[r++] + t[r++];
          continue;
        }
        if (t[r] === ")") {
          if (l--, l === 0) {
            r++;
            break;
          }
        } else if (t[r] === "(" && (l++, t[r + 1] !== "?"))
          throw new TypeError(`Capturing groups are not allowed at ${r}`);
        d += t[r++];
      }
      if (l)
        throw new TypeError(`Unbalanced pattern at ${u}`);
      if (!d)
        throw new TypeError(`Missing pattern at ${u}`);
      n.push({ type: "PATTERN", index: r, value: d });
      continue;
    }
    n.push({ type: "CHAR", index: r, value: t[r++] });
  }
  return n.push({ type: "END", index: r, value: "" }), new Jk(n);
}
class Jk {
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
    throw new TypeError(`Unexpected ${r} at ${a}, expected ${t}: ${Lo}`);
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
class kl {
  constructor(t, n) {
    this.tokens = t, this.delimiter = n;
  }
}
Ka.TokenData = kl;
function pp(e, t = {}) {
  const { encodePath: n = fp, delimiter: r = n(Kx) } = t, a = [], o = Xk(e);
  let u = 0;
  do {
    const l = o.text();
    l && a.push(n(l));
    const d = o.tryConsume("NAME"), f = o.tryConsume("PATTERN");
    if (d || f) {
      a.push({
        name: d || String(u++),
        pattern: f
      });
      const p = o.peek();
      if (p.type === "*")
        throw new TypeError(`Unexpected * at ${p.index}, you probably want \`/*\` or \`{/:foo}*\`: ${Lo}`);
      continue;
    }
    if (o.tryConsume("*")) {
      a.push({
        name: String(u++),
        pattern: `(?:(?!${ji(r)}).)*`,
        modifier: "*",
        separator: r
      });
      continue;
    }
    if (o.tryConsume("{")) {
      const p = o.text(), m = o.tryConsume("NAME"), v = o.tryConsume("PATTERN"), $ = o.text(), _ = o.tryConsume(";") && o.text();
      o.consume("}");
      const x = o.modifier();
      a.push({
        name: m || (v ? String(u++) : ""),
        prefix: n(p),
        suffix: n($),
        pattern: v,
        modifier: x,
        separator: _
      });
      continue;
    }
    o.consume("END");
    break;
  } while (!0);
  return new kl(a, r);
}
function Qk(e, t = {}) {
  const n = e instanceof kl ? e : pp(e, t);
  return t5(n, t);
}
function e5(e, t) {
  if (typeof e == "string")
    return () => e;
  const n = t || fp, r = e.modifier === "+" || e.modifier === "*", a = e.modifier === "?" || e.modifier === "*", { prefix: o = "", suffix: u = "", separator: l = u + o } = e;
  if (t && r) {
    const f = (m, v) => {
      if (typeof m != "string")
        throw new TypeError(`Expected "${e.name}/${v}" to be a string`);
      return n(m);
    }, p = (m) => {
      if (!Array.isArray(m))
        throw new TypeError(`Expected "${e.name}" to be an array`);
      return m.length === 0 ? "" : o + m.map(f).join(l) + u;
    };
    return a ? (m) => {
      const v = m[e.name];
      return v == null ? "" : v.length ? p(v) : "";
    } : (m) => {
      const v = m[e.name];
      return p(v);
    };
  }
  const d = (f) => {
    if (typeof f != "string")
      throw new TypeError(`Expected "${e.name}" to be a string`);
    return o + n(f) + u;
  };
  return a ? (f) => {
    const p = f[e.name];
    return p == null ? "" : d(p);
  } : (f) => {
    const p = f[e.name];
    return d(p);
  };
}
function t5(e, t) {
  const { encode: n = encodeURIComponent, loose: r = !0, validate: a = !0, strict: o = !1 } = t, u = qx(t), l = hp(r, e.delimiter), d = Gx(e, l, [], u, o), f = e.tokens.map((p, m) => {
    const v = e5(p, n);
    if (!a || typeof p == "string")
      return v;
    const $ = new RegExp(`^${d[m]}$`, u);
    return (_) => {
      const x = v(_);
      if (!$.test(x))
        throw new TypeError(`Invalid value for "${p.name}": ${JSON.stringify(x)}`);
      return x;
    };
  });
  return function(p = {}) {
    let m = "";
    for (const v of f)
      m += v(p);
    return m;
  };
}
function n5(e, t = {}) {
  const { decode: n = decodeURIComponent, loose: r = !0, delimiter: a = Kx } = t, o = Zx(e, t), u = hp(r, a), l = o.keys.map((d) => {
    if (n && (d.modifier === "+" || d.modifier === "*")) {
      const { prefix: f = "", suffix: p = "", separator: m = p + f } = d, v = new RegExp(u(m), "g");
      return ($) => $.split(v).map(n);
    }
    return n || fp;
  });
  return function(d) {
    const f = o.exec(d);
    if (!f)
      return !1;
    const { 0: p, index: m } = f, v = /* @__PURE__ */ Object.create(null);
    for (let $ = 1; $ < f.length; $++) {
      if (f[$] === void 0)
        continue;
      const _ = o.keys[$ - 1], x = l[$ - 1];
      v[_.name] = x(f[$]);
    }
    return { path: p, index: m, params: v };
  };
}
function ji(e) {
  return e.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
}
function r5(e, t) {
  const n = ji(e);
  return t ? `(?:${n})+(?!${n})` : n;
}
function hp(e, t) {
  if (!e)
    return ji;
  const n = new RegExp(`(?:(?!${ji(t)}).)+|(.)`, "g");
  return (r) => r.replace(n, r5);
}
function qx(e) {
  return e.sensitive ? "" : "i";
}
function _v(e, t, n, r) {
  const a = e instanceof kl ? e : pp(e, r), { trailing: o = !0, loose: u = !0, start: l = !0, end: d = !0, strict: f = !1 } = r, p = hp(u, a.delimiter), m = Gx(a, p, t, n, f);
  let v = l ? "^" : "";
  return v += m.join(""), o && (v += `(?:${p(a.delimiter)}$)?`), v += d ? "$" : `(?=${ji(a.delimiter)}|$)`, v;
}
function Gx(e, t, n, r, a) {
  const o = `(?:(?!${ji(e.delimiter)}).)+?`;
  let u = "", l = !0;
  return e.tokens.map((d) => {
    if (typeof d == "string")
      return u = d, t(d);
    const { prefix: f = "", suffix: p = "", separator: m = p + f, modifier: v = "" } = d, $ = t(f), _ = t(p);
    if (d.name) {
      const x = d.pattern ? `(?:${d.pattern})` : o, w = a5(x, d.name, r);
      if (l || (l = gd(w, f || u)), !l)
        throw new TypeError(`Ambiguous pattern for "${d.name}": ${Lo}`);
      if (l = !a || gd(w, p), u = "", n.push(d), v === "+" || v === "*") {
        const M = v === "*" ? "?" : "", D = t(m);
        if (!D)
          throw new TypeError(`Missing separator for "${d.name}": ${Lo}`);
        if (l || (l = !a || gd(w, m)), !l)
          throw new TypeError(`Ambiguous pattern for "${d.name}" separator: ${Lo}`);
        return l = !a, `(?:${$}(${x}(?:${D}${x})*)${_})${M}`;
      }
      return `(?:${$}(${x})${_})${v}`;
    }
    return `(?:${$}${_})${v}`;
  });
}
function a5(e, t, n) {
  try {
    return new RegExp(`^${e}$`, n);
  } catch (r) {
    throw new TypeError(`Invalid pattern for "${t}": ${r.message}`);
  }
}
function gd(e, t) {
  return t ? !e.test(t) : !1;
}
function Zx(e, t = {}) {
  const n = [], r = qx(t);
  if (Array.isArray(e)) {
    const o = e.map((u) => _v(u, n, r, t));
    return Object.assign(new RegExp(o.join("|")), { keys: n });
  }
  const a = _v(e, n, r, t);
  return Object.assign(new RegExp(a), { keys: n });
}
const Xx = ({
  component: e,
  ...t
}) => /* @__PURE__ */ qk.jsx(e, { ...t });
function Cv(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Jx(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const o = Cv(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          typeof o == "function" ? o() : Cv(e[a], null);
        }
      };
  };
}
function ha(...e) {
  return te.useCallback(Jx(...e), e);
}
var Ct = te.forwardRef((e, t) => {
  const { children: n, ...r } = e, a = te.Children.toArray(n), o = a.find(o5);
  if (o) {
    const u = o.props.children, l = a.map((d) => d === o ? te.Children.count(u) > 1 ? te.Children.only(null) : te.isValidElement(u) ? u.props.children : null : d);
    return /* @__PURE__ */ y.jsx(wf, { ...r, ref: t, children: te.isValidElement(u) ? te.cloneElement(u, void 0, l) : null });
  }
  return /* @__PURE__ */ y.jsx(wf, { ...r, ref: t, children: n });
});
Ct.displayName = "Slot";
var wf = te.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (te.isValidElement(n)) {
    const a = u5(n);
    return te.cloneElement(n, {
      ...s5(r, n.props),
      // @ts-ignore
      ref: t ? Jx(t, a) : a
    });
  }
  return te.Children.count(n) > 1 ? te.Children.only(null) : null;
});
wf.displayName = "SlotClone";
var i5 = ({ children: e }) => /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
function o5(e) {
  return te.isValidElement(e) && e.type === i5;
}
function s5(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? a && o ? n[r] = (...l) => {
      o(...l), a(...l);
    } : a && (n[r] = a) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function u5(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const mp = (e) => e.type === "select-multiple", Qx = te.createContext({}), l5 = ({
  asChild: e,
  className: t,
  disabled: n,
  ref: r,
  variant: a = "input",
  checked: o,
  ...u
}) => {
  const l = e ? Ct : "div";
  return /* @__PURE__ */ y.jsx(Qx.Provider, { value: { disabled: n }, children: /* @__PURE__ */ y.jsx(
    l,
    {
      className: Ae(
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
        a === "checkable" && Ae(
          o && !n && "bg-theme-600 !border-transparent",
          o && n && "bg-neutral-400 border-transparent",
          !n && "group-ui-state-checked:bg-theme-600 group-ui-state-checked:border-transparent",
          n && "group-ui-state-checked:bg-neutral-400"
        ),
        a === "button" && Ae(
          "shadow-sm flex gap-1 justify-between w-full group rounded",
          !n && "hover:bg-neutral-100",
          !n && "active:bg-neutral-200",
          !n && "ui-state-open:bg-neutral-200 ui-state-open:shadow-inner-sm",
          n && "opacity-100 bg-neutral-100 shadow-none"
        ),
        t
      ),
      ref: r,
      ...u
    }
  ) });
}, c5 = ({ asChild: e, className: t, variant: n = "hidden", ...r }) => {
  const a = e ? Ct : "div";
  return /* @__PURE__ */ y.jsx(
    a,
    {
      className: Ae(
        n === "hidden" && "absolute bottom-0 opacity-0 h-0 w-0 pointer-events-none flex",
        n === "inset" && "absolute inset-0 opacity-0",
        t
      ),
      ...r
    }
  );
}, d5 = ({ asChild: e, className: t, ...n }) => {
  const r = e ? Ct : "div";
  return /* @__PURE__ */ y.jsx(r, { className: Ae("flex flex-1 rounded overflow-hidden", t), ...n });
}, e0 = (e) => {
  const t = [];
  return te.Children.forEach(e, (n) => {
    te.isValidElement(n) && n.type === te.Fragment ? t.push(...e0(n.props.children)) : te.isValidElement(n) && t.push(n);
  }), t;
}, f5 = ({ asChild: e, className: t, children: n, ...r }) => {
  const a = e0(n), { disabled: o } = At(Qx);
  if (a.length === 0)
    return null;
  const u = e ? Ct : "div";
  return /* @__PURE__ */ y.jsx(
    u,
    {
      className: Ae("flex-none box-content top-0 right-0 flex gap-0.5 items-center p-0.5", t),
      ...r,
      children: a.map((l, d) => /* @__PURE__ */ y.jsxs(te.Fragment, { children: [
        /* @__PURE__ */ y.jsx(Ct, { disabled: o, children: l }),
        d < a.length - 1 && /* @__PURE__ */ y.jsx("span", { className: "border-r border-solid border-neutral-300 h-4" })
      ] }, d))
    }
  );
}, p5 = ({
  asChild: e,
  className: t,
  active: n,
  // variant = 'outline',
  ...r
}) => {
  const a = e ? Ct : "button";
  return /* @__PURE__ */ y.jsx(
    a,
    {
      type: "button",
      className: Ae(
        "flex rounded-sm justify-center items-center h-full box-content w-7 text-sm text-neutral-400 transition-colors duration-200",
        !r.disabled && "hover:text-neutral-600 hover:bg-neutral-100 active:!text-neutral-700 active:!bg-neutral-200",
        n && "!bg-neutral-200 !text-neutral-700",
        t
      ),
      tabIndex: -1,
      ...r
    }
  );
}, h5 = (e) => e.type === "checkbox", m5 = (e) => {
  if (e.target)
    return mp(e.target) ? Array.from(e.target.selectedOptions, (t) => t.value) : h5(e.target) ? e.target.checked : e.target.value;
}, tn = (e, t, n) => {
  const [r, a] = Si(e, t);
  return [r, (u) => {
    a(m5(u)), n == null || n(u);
  }];
}, ke = Object.assign(l5, {
  Content: d5,
  Controls: f5,
  ControlButton: p5,
  Native: c5
});
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g5 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), t0 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var v5 = {
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
const y5 = Sl(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: a = "",
    children: o,
    iconNode: u,
    ...l
  }, d) => vf(
    "svg",
    {
      ref: d,
      ...v5,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: t0("lucide", a),
      ...l
    },
    [
      ...u.map(([f, p]) => vf(f, p)),
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
const Xt = (e, t) => {
  const n = Sl(
    ({ className: r, ...a }, o) => vf(y5, {
      ref: o,
      iconNode: t,
      className: t0(`lucide-${g5(e)}`, r),
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
const Ol = Xt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = Xt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b5 = Xt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x5 = Xt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w5 = Xt("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $5 = Xt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D5 = Xt("ExternalLink", [
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
const E5 = Xt("FileArchive", [
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
const _5 = Xt("FileImage", [
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
const C5 = Xt("FileSpreadsheet", [
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
const vd = Xt("FileText", [
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
const T5 = Xt("FileVideo", [
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
const S5 = Xt("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P5 = Xt("Loader", [
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
const k5 = Xt("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O5 = Xt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qa = Xt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), en = (e, t) => {
  var r;
  const n = (r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")) == null ? void 0 : r.set;
  n == null || n.call(e, t), e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}, r0 = (e, t) => {
  const n = Array.from(e.options);
  Array.isArray(t) ? n.forEach((r) => {
    r.selected = t.includes(r.value);
  }) : n.forEach((r) => {
    r.selected = r.value === t;
  }), e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}, BK = (e) => mp(e) ? Array.from(e.selectedOptions).map((t) => t.value) : e.value, LK = (e, t) => {
  var r;
  const n = (r = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")) == null ? void 0 : r.set;
  n == null || n.call(e, t), e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}, a0 = ({
  className: e,
  inputClassName: t,
  hideClear: n = !1,
  controls: r,
  widgetRef: a,
  ref: o,
  ...u
}) => {
  const l = te.useRef(null), [d, f] = tn("", u.value, u.onChange), p = () => {
    var m;
    en(l.current, ""), (m = l.current) == null || m.focus();
  };
  return /* @__PURE__ */ y.jsxs(ke, { className: e, readOnly: u.readOnly, disabled: u.disabled, ref: a, children: [
    /* @__PURE__ */ y.jsx(ke.Content, { children: /* @__PURE__ */ y.jsx(
      "input",
      {
        ref: dn(l, o),
        className: Ae(
          "px-2 py-1.5 flex-1 min-w-0 bg-transparent placeholder:text-neutral-400",
          t
        ),
        ...u,
        value: d,
        onChange: f
      }
    ) }),
    /* @__PURE__ */ y.jsxs(ke.Controls, { children: [
      r,
      d && !n && /* @__PURE__ */ y.jsx(ke.ControlButton, { onClick: p, children: /* @__PURE__ */ y.jsx(qa, {}) })
    ] })
  ] });
}, Vo = (e) => e != null && e !== !1 && e !== 0, i0 = ({ className: e, ...t }) => /* @__PURE__ */ y.jsx("div", { className: Ae("flex flex-col gap-1", e), ...t }), o0 = ({ children: e, className: t, ...n }) => /* @__PURE__ */ y.jsxs("label", { className: Ae("text-sm font-medium", t), ...n, children: [
  e,
  " ",
  n.required && /* @__PURE__ */ y.jsx("span", { className: "text-red-500", children: "*" })
] }), s0 = ({ children: e, className: t, ...n }) => e ? /* @__PURE__ */ y.jsx("p", { className: Ae("text-sm text-error-500 whitespace-pre-line", t), ...n, children: e }) : null, u0 = ({ children: e, className: t, ...n }) => e ? /* @__PURE__ */ y.jsx("p", { className: Ae("text-sm text-neutral-500", t), ...n, children: e }) : null, yr = ({ ref: e, label: t, error: n, helpText: r, widget: a, className: o, ...u }) => {
  const l = jx(), d = te.useRef(null);
  return Ue(() => {
    d.current && d.current.setCustomValidity(n || "");
  }, [n]), /* @__PURE__ */ y.jsxs(
    i0,
    {
      className: o,
      "data-error": Vo(n) ? n || "" : void 0,
      "data-invalid": Vo(n) ? "" : void 0,
      children: [
        t && /* @__PURE__ */ y.jsx(o0, { required: u.required, htmlFor: u.id || l, children: t }),
        /* @__PURE__ */ y.jsx(Xx, { component: a || a0, ...u, ref: dn(d, e), id: u.id || l }),
        Vo(n) ? /* @__PURE__ */ y.jsx(s0, { children: (n == null ? void 0 : n.message) || n || "" }) : r && /* @__PURE__ */ y.jsx(u0, { children: r })
      ]
    }
  );
}, ou = Object.assign(i0, {
  Label: o0,
  Error: s0,
  HelpText: u0
}), A5 = ({ className: e, indeterminate: t, ...n }) => {
  const r = te.useRef(null), [a, o] = tn(!1, n.checked, n.onChange);
  return Ue(() => {
    r.current && (r.current.indeterminate = !!t);
  }, [t]), /* @__PURE__ */ y.jsxs(
    ke,
    {
      variant: "checkable",
      disabled: n.disabled,
      checked: a,
      className: Ae("relative flex items-center justify-center w-5 h-5 rounded", e),
      children: [
        /* @__PURE__ */ y.jsx(ke.Native, { asChild: !0, variant: "inset", children: /* @__PURE__ */ y.jsx(
          "input",
          {
            ...n,
            type: "checkbox",
            checked: a,
            onChange: o,
            ref: dn(r, n.ref)
          }
        ) }),
        /* @__PURE__ */ y.jsx(ke.Content, { className: "text-white justify-center items-center", children: t ? /* @__PURE__ */ y.jsx(k5, {}) : a && /* @__PURE__ */ y.jsx(Ol, {}) })
      ]
    }
  );
}, VK = ({
  label: e,
  error: t,
  helpText: n,
  className: r,
  widget: a,
  defaultValue: o,
  value: u,
  onChange: l,
  reverse: d,
  ...f
}) => {
  const p = jx(), m = (v) => {
    l == null || l({
      ...v,
      target: {
        ...v.target,
        value: !!v.target.checked
      }
    });
  };
  return /* @__PURE__ */ y.jsxs(
    ou,
    {
      className: Ae(
        "flex gap-2",
        d ? "flex-row-reverse items-center" : "flex-row  items-start",
        r
      ),
      "data-error": t || void 0,
      "data-invalid": t ? "" : void 0,
      children: [
        /* @__PURE__ */ y.jsx("div", { className: "flex-none", children: /* @__PURE__ */ y.jsx(
          Xx,
          {
            defaultChecked: o,
            checked: u,
            className: Ae(!d && "mt-0.5"),
            component: a || A5,
            onChange: m,
            ...f,
            id: f.id || p
          }
        ) }),
        e || t || n ? /* @__PURE__ */ y.jsxs("div", { className: "flex-1", children: [
          e && /* @__PURE__ */ y.jsx(ou.Label, { required: f.required, htmlFor: f.id || p, children: e }),
          t ? /* @__PURE__ */ y.jsx(ou.Error, { children: (t == null ? void 0 : t.message) || t }) : n && /* @__PURE__ */ y.jsx(ou.HelpText, { children: n })
        ] }) : null
      ]
    }
  );
};
function ia(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function l0(e, t = []) {
  let n = [];
  function r(o, u) {
    const l = te.createContext(u), d = n.length;
    n = [...n, u];
    const f = (m) => {
      var M;
      const { scope: v, children: $, ..._ } = m, x = ((M = v == null ? void 0 : v[e]) == null ? void 0 : M[d]) || l, w = te.useMemo(() => _, Object.values(_));
      return /* @__PURE__ */ y.jsx(x.Provider, { value: w, children: $ });
    };
    f.displayName = o + "Provider";
    function p(m, v) {
      var x;
      const $ = ((x = v == null ? void 0 : v[e]) == null ? void 0 : x[d]) || l, _ = te.useContext($);
      if (_) return _;
      if (u !== void 0) return u;
      throw new Error(`\`${m}\` must be used within \`${o}\``);
    }
    return [f, p];
  }
  const a = () => {
    const o = n.map((u) => te.createContext(u));
    return function(l) {
      const d = (l == null ? void 0 : l[e]) || o;
      return te.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: d } }),
        [l, d]
      );
    };
  };
  return a.scopeName = e, [r, M5(a, ...t)];
}
function M5(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const u = r.reduce((l, { useScope: d, scopeName: f }) => {
        const m = d(o)[`__scope${f}`];
        return { ...l, ...m };
      }, {});
      return te.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var I5 = [
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
], Fr = I5.reduce((e, t) => {
  const n = te.forwardRef((r, a) => {
    const { asChild: o, ...u } = r, l = o ? Ct : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ y.jsx(l, { ...u, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function N5(e, t) {
  e && Bx.flushSync(() => e.dispatchEvent(t));
}
function sa(e) {
  const t = te.useRef(e);
  return te.useEffect(() => {
    t.current = e;
  }), te.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function R5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = sa(e);
  te.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var j5 = "DismissableLayer", $f = "dismissableLayer.update", F5 = "dismissableLayer.pointerDownOutside", B5 = "dismissableLayer.focusOutside", Tv, c0 = te.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), d0 = te.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: u,
      onDismiss: l,
      ...d
    } = e, f = te.useContext(c0), [p, m] = te.useState(null), v = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, $] = te.useState({}), _ = ha(t, (Z) => m(Z)), x = Array.from(f.layers), [w] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), M = x.indexOf(w), D = p ? x.indexOf(p) : -1, C = f.layersWithOutsidePointerEventsDisabled.size > 0, P = D >= M, S = W5((Z) => {
      const k = Z.target, F = [...f.branches].some((R) => R.contains(k));
      !P || F || (a == null || a(Z), u == null || u(Z), Z.defaultPrevented || l == null || l());
    }, v), G = z5((Z) => {
      const k = Z.target;
      [...f.branches].some((R) => R.contains(k)) || (o == null || o(Z), u == null || u(Z), Z.defaultPrevented || l == null || l());
    }, v);
    return R5((Z) => {
      D === f.layers.size - 1 && (r == null || r(Z), !Z.defaultPrevented && l && (Z.preventDefault(), l()));
    }, v), te.useEffect(() => {
      if (p)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Tv = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), Sv(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Tv);
        };
    }, [p, v, n, f]), te.useEffect(() => () => {
      p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), Sv());
    }, [p, f]), te.useEffect(() => {
      const Z = () => $({});
      return document.addEventListener($f, Z), () => document.removeEventListener($f, Z);
    }, []), /* @__PURE__ */ y.jsx(
      Fr.div,
      {
        ...d,
        ref: _,
        style: {
          pointerEvents: C ? P ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ia(e.onFocusCapture, G.onFocusCapture),
        onBlurCapture: ia(e.onBlurCapture, G.onBlurCapture),
        onPointerDownCapture: ia(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
d0.displayName = j5;
var L5 = "DismissableLayerBranch", V5 = te.forwardRef((e, t) => {
  const n = te.useContext(c0), r = te.useRef(null), a = ha(t, r);
  return te.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ y.jsx(Fr.div, { ...e, ref: a });
});
V5.displayName = L5;
function W5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = sa(e), r = te.useRef(!1), a = te.useRef(() => {
  });
  return te.useEffect(() => {
    const o = (l) => {
      if (l.target && !r.current) {
        let d = function() {
          f0(
            F5,
            n,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = d, t.addEventListener("click", a.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", a.current);
      r.current = !1;
    }, u = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(u), t.removeEventListener("pointerdown", o), t.removeEventListener("click", a.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function z5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = sa(e), r = te.useRef(!1);
  return te.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && f0(B5, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Sv() {
  const e = new CustomEvent($f);
  document.dispatchEvent(e);
}
function f0(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? N5(a, o) : a.dispatchEvent(o);
}
var yd = 0;
function U5() {
  te.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Pv()), document.body.insertAdjacentElement("beforeend", e[1] ?? Pv()), yd++, () => {
      yd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), yd--;
    };
  }, []);
}
function Pv() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var bd = "focusScope.autoFocusOnMount", xd = "focusScope.autoFocusOnUnmount", kv = { bubbles: !1, cancelable: !0 }, H5 = "FocusScope", p0 = te.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...u
  } = e, [l, d] = te.useState(null), f = sa(a), p = sa(o), m = te.useRef(null), v = ha(t, (x) => d(x)), $ = te.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  te.useEffect(() => {
    if (r) {
      let x = function(C) {
        if ($.paused || !l) return;
        const P = C.target;
        l.contains(P) ? m.current = P : ta(m.current, { select: !0 });
      }, w = function(C) {
        if ($.paused || !l) return;
        const P = C.relatedTarget;
        P !== null && (l.contains(P) || ta(m.current, { select: !0 }));
      }, M = function(C) {
        if (document.activeElement === document.body)
          for (const S of C)
            S.removedNodes.length > 0 && ta(l);
      };
      document.addEventListener("focusin", x), document.addEventListener("focusout", w);
      const D = new MutationObserver(M);
      return l && D.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", x), document.removeEventListener("focusout", w), D.disconnect();
      };
    }
  }, [r, l, $.paused]), te.useEffect(() => {
    if (l) {
      Av.add($);
      const x = document.activeElement;
      if (!l.contains(x)) {
        const M = new CustomEvent(bd, kv);
        l.addEventListener(bd, f), l.dispatchEvent(M), M.defaultPrevented || (Y5(X5(h0(l)), { select: !0 }), document.activeElement === x && ta(l));
      }
      return () => {
        l.removeEventListener(bd, f), setTimeout(() => {
          const M = new CustomEvent(xd, kv);
          l.addEventListener(xd, p), l.dispatchEvent(M), M.defaultPrevented || ta(x ?? document.body, { select: !0 }), l.removeEventListener(xd, p), Av.remove($);
        }, 0);
      };
    }
  }, [l, f, p, $]);
  const _ = te.useCallback(
    (x) => {
      if (!n && !r || $.paused) return;
      const w = x.key === "Tab" && !x.altKey && !x.ctrlKey && !x.metaKey, M = document.activeElement;
      if (w && M) {
        const D = x.currentTarget, [C, P] = K5(D);
        C && P ? !x.shiftKey && M === P ? (x.preventDefault(), n && ta(C, { select: !0 })) : x.shiftKey && M === C && (x.preventDefault(), n && ta(P, { select: !0 })) : M === D && x.preventDefault();
      }
    },
    [n, r, $.paused]
  );
  return /* @__PURE__ */ y.jsx(Fr.div, { tabIndex: -1, ...u, ref: v, onKeyDown: _ });
});
p0.displayName = H5;
function Y5(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ta(r, { select: t }), document.activeElement !== n) return;
}
function K5(e) {
  const t = h0(e), n = Ov(t, e), r = Ov(t.reverse(), e);
  return [n, r];
}
function h0(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ov(e, t) {
  for (const n of e)
    if (!q5(n, { upTo: t })) return n;
}
function q5(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function G5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ta(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && G5(e) && t && e.select();
  }
}
var Av = Z5();
function Z5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Mv(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Mv(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Mv(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function X5(e) {
  return e.filter((t) => t.tagName !== "A");
}
var La = globalThis != null && globalThis.document ? te.useLayoutEffect : () => {
}, J5 = te.useId || (() => {
}), Q5 = 0;
function eO(e) {
  const [t, n] = te.useState(J5());
  return La(() => {
    e || n((r) => r ?? String(Q5++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const tO = ["top", "right", "bottom", "left"], ua = Math.min, Pn = Math.max, Ku = Math.round, su = Math.floor, mr = (e) => ({
  x: e,
  y: e
}), nO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, rO = {
  start: "end",
  end: "start"
};
function Df(e, t, n) {
  return Pn(e, ua(t, n));
}
function Rr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jr(e) {
  return e.split("-")[0];
}
function qi(e) {
  return e.split("-")[1];
}
function gp(e) {
  return e === "x" ? "y" : "x";
}
function vp(e) {
  return e === "y" ? "height" : "width";
}
function la(e) {
  return ["top", "bottom"].includes(jr(e)) ? "y" : "x";
}
function yp(e) {
  return gp(la(e));
}
function aO(e, t, n) {
  n === void 0 && (n = !1);
  const r = qi(e), a = yp(e), o = vp(a);
  let u = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (u = qu(u)), [u, qu(u)];
}
function iO(e) {
  const t = qu(e);
  return [Ef(e), t, Ef(t)];
}
function Ef(e) {
  return e.replace(/start|end/g, (t) => rO[t]);
}
function oO(e, t, n) {
  const r = ["left", "right"], a = ["right", "left"], o = ["top", "bottom"], u = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : r : t ? r : a;
    case "left":
    case "right":
      return t ? o : u;
    default:
      return [];
  }
}
function sO(e, t, n, r) {
  const a = qi(e);
  let o = oO(jr(e), n === "start", r);
  return a && (o = o.map((u) => u + "-" + a), t && (o = o.concat(o.map(Ef)))), o;
}
function qu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nO[t]);
}
function uO(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function m0(e) {
  return typeof e != "number" ? uO(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Gu(e) {
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
function Iv(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const o = la(t), u = yp(t), l = vp(u), d = jr(t), f = o === "y", p = r.x + r.width / 2 - a.width / 2, m = r.y + r.height / 2 - a.height / 2, v = r[l] / 2 - a[l] / 2;
  let $;
  switch (d) {
    case "top":
      $ = {
        x: p,
        y: r.y - a.height
      };
      break;
    case "bottom":
      $ = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      $ = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      $ = {
        x: r.x - a.width,
        y: m
      };
      break;
    default:
      $ = {
        x: r.x,
        y: r.y
      };
  }
  switch (qi(t)) {
    case "start":
      $[u] -= v * (n && f ? -1 : 1);
      break;
    case "end":
      $[u] += v * (n && f ? -1 : 1);
      break;
  }
  return $;
}
const lO = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: u
  } = n, l = o.filter(Boolean), d = await (u.isRTL == null ? void 0 : u.isRTL(t));
  let f = await u.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: p,
    y: m
  } = Iv(f, r, d), v = r, $ = {}, _ = 0;
  for (let x = 0; x < l.length; x++) {
    const {
      name: w,
      fn: M
    } = l[x], {
      x: D,
      y: C,
      data: P,
      reset: S
    } = await M({
      x: p,
      y: m,
      initialPlacement: r,
      placement: v,
      strategy: a,
      middlewareData: $,
      rects: f,
      platform: u,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = D ?? p, m = C ?? m, $ = {
      ...$,
      [w]: {
        ...$[w],
        ...P
      }
    }, S && _ <= 50 && (_++, typeof S == "object" && (S.placement && (v = S.placement), S.rects && (f = S.rects === !0 ? await u.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : S.rects), {
      x: p,
      y: m
    } = Iv(f, v, d)), x = -1);
  }
  return {
    x: p,
    y: m,
    placement: v,
    strategy: a,
    middlewareData: $
  };
};
async function qo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: o,
    rects: u,
    elements: l,
    strategy: d
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: m = "floating",
    altBoundary: v = !1,
    padding: $ = 0
  } = Rr(t, e), _ = m0($), w = l[v ? m === "floating" ? "reference" : "floating" : m], M = Gu(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null || n ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: p,
    strategy: d
  })), D = m === "floating" ? {
    x: r,
    y: a,
    width: u.floating.width,
    height: u.floating.height
  } : u.reference, C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), P = await (o.isElement == null ? void 0 : o.isElement(C)) ? await (o.getScale == null ? void 0 : o.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Gu(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: D,
    offsetParent: C,
    strategy: d
  }) : D);
  return {
    top: (M.top - S.top + _.top) / P.y,
    bottom: (S.bottom - M.bottom + _.bottom) / P.y,
    left: (M.left - S.left + _.left) / P.x,
    right: (S.right - M.right + _.right) / P.x
  };
}
const cO = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: o,
      platform: u,
      elements: l,
      middlewareData: d
    } = t, {
      element: f,
      padding: p = 0
    } = Rr(e, t) || {};
    if (f == null)
      return {};
    const m = m0(p), v = {
      x: n,
      y: r
    }, $ = yp(a), _ = vp($), x = await u.getDimensions(f), w = $ === "y", M = w ? "top" : "left", D = w ? "bottom" : "right", C = w ? "clientHeight" : "clientWidth", P = o.reference[_] + o.reference[$] - v[$] - o.floating[_], S = v[$] - o.reference[$], G = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(f));
    let Z = G ? G[C] : 0;
    (!Z || !await (u.isElement == null ? void 0 : u.isElement(G))) && (Z = l.floating[C] || o.floating[_]);
    const k = P / 2 - S / 2, F = Z / 2 - x[_] / 2 - 1, R = ua(m[M], F), I = ua(m[D], F), j = R, E = Z - x[_] - I, L = Z / 2 - x[_] / 2 + k, H = Df(j, L, E), z = !d.arrow && qi(a) != null && L !== H && o.reference[_] / 2 - (L < j ? R : I) - x[_] / 2 < 0, N = z ? L < j ? L - j : L - E : 0;
    return {
      [$]: v[$] + N,
      data: {
        [$]: H,
        centerOffset: L - H - N,
        ...z && {
          alignmentOffset: N
        }
      },
      reset: z
    };
  }
}), dO = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        middlewareData: o,
        rects: u,
        initialPlacement: l,
        platform: d,
        elements: f
      } = t, {
        mainAxis: p = !0,
        crossAxis: m = !0,
        fallbackPlacements: v,
        fallbackStrategy: $ = "bestFit",
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: x = !0,
        ...w
      } = Rr(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const M = jr(a), D = la(l), C = jr(l) === l, P = await (d.isRTL == null ? void 0 : d.isRTL(f.floating)), S = v || (C || !x ? [qu(l)] : iO(l)), G = _ !== "none";
      !v && G && S.push(...sO(l, x, _, P));
      const Z = [l, ...S], k = await qo(t, w), F = [];
      let R = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (p && F.push(k[M]), m) {
        const L = aO(a, u, P);
        F.push(k[L[0]], k[L[1]]);
      }
      if (R = [...R, {
        placement: a,
        overflows: F
      }], !F.every((L) => L <= 0)) {
        var I, j;
        const L = (((I = o.flip) == null ? void 0 : I.index) || 0) + 1, H = Z[L];
        if (H)
          return {
            data: {
              index: L,
              overflows: R
            },
            reset: {
              placement: H
            }
          };
        let z = (j = R.filter((N) => N.overflows[0] <= 0).sort((N, B) => N.overflows[1] - B.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!z)
          switch ($) {
            case "bestFit": {
              var E;
              const N = (E = R.filter((B) => {
                if (G) {
                  const J = la(B.placement);
                  return J === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  J === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((J) => J > 0).reduce((J, A) => J + A, 0)]).sort((B, J) => B[1] - J[1])[0]) == null ? void 0 : E[0];
              N && (z = N);
              break;
            }
            case "initialPlacement":
              z = l;
              break;
          }
        if (a !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
function Nv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Rv(e) {
  return tO.some((t) => e[t] >= 0);
}
const fO = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...a
      } = Rr(e, t);
      switch (r) {
        case "referenceHidden": {
          const o = await qo(t, {
            ...a,
            elementContext: "reference"
          }), u = Nv(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: u,
              referenceHidden: Rv(u)
            }
          };
        }
        case "escaped": {
          const o = await qo(t, {
            ...a,
            altBoundary: !0
          }), u = Nv(o, n.floating);
          return {
            data: {
              escapedOffsets: u,
              escaped: Rv(u)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function pO(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), u = jr(n), l = qi(n), d = la(n) === "y", f = ["left", "top"].includes(u) ? -1 : 1, p = o && d ? -1 : 1, m = Rr(t, e);
  let {
    mainAxis: v,
    crossAxis: $,
    alignmentAxis: _
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return l && typeof _ == "number" && ($ = l === "end" ? _ * -1 : _), d ? {
    x: $ * p,
    y: v * f
  } : {
    x: v * f,
    y: $ * p
  };
}
const hO = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: a,
        y: o,
        placement: u,
        middlewareData: l
      } = t, d = await pO(t, e);
      return u === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: a + d.x,
        y: o + d.y,
        data: {
          ...d,
          placement: u
        }
      };
    }
  };
}, mO = function(e) {
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
        crossAxis: u = !1,
        limiter: l = {
          fn: (w) => {
            let {
              x: M,
              y: D
            } = w;
            return {
              x: M,
              y: D
            };
          }
        },
        ...d
      } = Rr(e, t), f = {
        x: n,
        y: r
      }, p = await qo(t, d), m = la(jr(a)), v = gp(m);
      let $ = f[v], _ = f[m];
      if (o) {
        const w = v === "y" ? "top" : "left", M = v === "y" ? "bottom" : "right", D = $ + p[w], C = $ - p[M];
        $ = Df(D, $, C);
      }
      if (u) {
        const w = m === "y" ? "top" : "left", M = m === "y" ? "bottom" : "right", D = _ + p[w], C = _ - p[M];
        _ = Df(D, _, C);
      }
      const x = l.fn({
        ...t,
        [v]: $,
        [m]: _
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [v]: o,
            [m]: u
          }
        }
      };
    }
  };
}, gO = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: a,
        rects: o,
        middlewareData: u
      } = t, {
        offset: l = 0,
        mainAxis: d = !0,
        crossAxis: f = !0
      } = Rr(e, t), p = {
        x: n,
        y: r
      }, m = la(a), v = gp(m);
      let $ = p[v], _ = p[m];
      const x = Rr(l, t), w = typeof x == "number" ? {
        mainAxis: x,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...x
      };
      if (d) {
        const C = v === "y" ? "height" : "width", P = o.reference[v] - o.floating[C] + w.mainAxis, S = o.reference[v] + o.reference[C] - w.mainAxis;
        $ < P ? $ = P : $ > S && ($ = S);
      }
      if (f) {
        var M, D;
        const C = v === "y" ? "width" : "height", P = ["top", "left"].includes(jr(a)), S = o.reference[m] - o.floating[C] + (P && ((M = u.offset) == null ? void 0 : M[m]) || 0) + (P ? 0 : w.crossAxis), G = o.reference[m] + o.reference[C] + (P ? 0 : ((D = u.offset) == null ? void 0 : D[m]) || 0) - (P ? w.crossAxis : 0);
        _ < S ? _ = S : _ > G && (_ = G);
      }
      return {
        [v]: $,
        [m]: _
      };
    }
  };
}, vO = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        rects: o,
        platform: u,
        elements: l
      } = t, {
        apply: d = () => {
        },
        ...f
      } = Rr(e, t), p = await qo(t, f), m = jr(a), v = qi(a), $ = la(a) === "y", {
        width: _,
        height: x
      } = o.floating;
      let w, M;
      m === "top" || m === "bottom" ? (w = m, M = v === (await (u.isRTL == null ? void 0 : u.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (M = m, w = v === "end" ? "top" : "bottom");
      const D = x - p.top - p.bottom, C = _ - p.left - p.right, P = ua(x - p[w], D), S = ua(_ - p[M], C), G = !t.middlewareData.shift;
      let Z = P, k = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = C), (r = t.middlewareData.shift) != null && r.enabled.y && (Z = D), G && !v) {
        const R = Pn(p.left, 0), I = Pn(p.right, 0), j = Pn(p.top, 0), E = Pn(p.bottom, 0);
        $ ? k = _ - 2 * (R !== 0 || I !== 0 ? R + I : Pn(p.left, p.right)) : Z = x - 2 * (j !== 0 || E !== 0 ? j + E : Pn(p.top, p.bottom));
      }
      await d({
        ...t,
        availableWidth: k,
        availableHeight: Z
      });
      const F = await u.getDimensions(l.floating);
      return _ !== F.width || x !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Al() {
  return typeof window < "u";
}
function Gi(e) {
  return g0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function br(e) {
  var t;
  return (t = (g0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function g0(e) {
  return Al() ? e instanceof Node || e instanceof kn(e).Node : !1;
}
function nr(e) {
  return Al() ? e instanceof Element || e instanceof kn(e).Element : !1;
}
function gr(e) {
  return Al() ? e instanceof HTMLElement || e instanceof kn(e).HTMLElement : !1;
}
function jv(e) {
  return !Al() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kn(e).ShadowRoot;
}
function as(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = rr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function yO(e) {
  return ["table", "td", "th"].includes(Gi(e));
}
function Ml(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function bp(e) {
  const t = xp(), n = nr(e) ? rr(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function bO(e) {
  let t = ca(e);
  for (; gr(t) && !Fi(t); ) {
    if (bp(t))
      return t;
    if (Ml(t))
      return null;
    t = ca(t);
  }
  return null;
}
function xp() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Fi(e) {
  return ["html", "body", "#document"].includes(Gi(e));
}
function rr(e) {
  return kn(e).getComputedStyle(e);
}
function Il(e) {
  return nr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ca(e) {
  if (Gi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    jv(e) && e.host || // Fallback.
    br(e)
  );
  return jv(t) ? t.host : t;
}
function v0(e) {
  const t = ca(e);
  return Fi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gr(t) && as(t) ? t : v0(t);
}
function Go(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = v0(e), o = a === ((r = e.ownerDocument) == null ? void 0 : r.body), u = kn(a);
  if (o) {
    const l = _f(u);
    return t.concat(u, u.visualViewport || [], as(a) ? a : [], l && n ? Go(l) : []);
  }
  return t.concat(a, Go(a, [], n));
}
function _f(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function y0(e) {
  const t = rr(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = gr(e), o = a ? e.offsetWidth : n, u = a ? e.offsetHeight : r, l = Ku(n) !== o || Ku(r) !== u;
  return l && (n = o, r = u), {
    width: n,
    height: r,
    $: l
  };
}
function wp(e) {
  return nr(e) ? e : e.contextElement;
}
function Pi(e) {
  const t = wp(e);
  if (!gr(t))
    return mr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: o
  } = y0(t);
  let u = (o ? Ku(n.width) : n.width) / r, l = (o ? Ku(n.height) : n.height) / a;
  return (!u || !Number.isFinite(u)) && (u = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: u,
    y: l
  };
}
const xO = /* @__PURE__ */ mr(0);
function b0(e) {
  const t = kn(e);
  return !xp() || !t.visualViewport ? xO : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function wO(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== kn(e) ? !1 : t;
}
function Va(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = wp(e);
  let u = mr(1);
  t && (r ? nr(r) && (u = Pi(r)) : u = Pi(e));
  const l = wO(o, n, r) ? b0(o) : mr(0);
  let d = (a.left + l.x) / u.x, f = (a.top + l.y) / u.y, p = a.width / u.x, m = a.height / u.y;
  if (o) {
    const v = kn(o), $ = r && nr(r) ? kn(r) : r;
    let _ = v, x = _f(_);
    for (; x && r && $ !== _; ) {
      const w = Pi(x), M = x.getBoundingClientRect(), D = rr(x), C = M.left + (x.clientLeft + parseFloat(D.paddingLeft)) * w.x, P = M.top + (x.clientTop + parseFloat(D.paddingTop)) * w.y;
      d *= w.x, f *= w.y, p *= w.x, m *= w.y, d += C, f += P, _ = kn(x), x = _f(_);
    }
  }
  return Gu({
    width: p,
    height: m,
    x: d,
    y: f
  });
}
function $p(e, t) {
  const n = Il(e).scrollLeft;
  return t ? t.left + n : Va(br(e)).left + n;
}
function x0(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    $p(e, r)
  )), o = r.top + t.scrollTop;
  return {
    x: a,
    y: o
  };
}
function $O(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const o = a === "fixed", u = br(r), l = t ? Ml(t.floating) : !1;
  if (r === u || l && o)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = mr(1);
  const p = mr(0), m = gr(r);
  if ((m || !m && !o) && ((Gi(r) !== "body" || as(u)) && (d = Il(r)), gr(r))) {
    const $ = Va(r);
    f = Pi(r), p.x = $.x + r.clientLeft, p.y = $.y + r.clientTop;
  }
  const v = u && !m && !o ? x0(u, d, !0) : mr(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - d.scrollLeft * f.x + p.x + v.x,
    y: n.y * f.y - d.scrollTop * f.y + p.y + v.y
  };
}
function DO(e) {
  return Array.from(e.getClientRects());
}
function EO(e) {
  const t = br(e), n = Il(e), r = e.ownerDocument.body, a = Pn(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = Pn(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let u = -n.scrollLeft + $p(e);
  const l = -n.scrollTop;
  return rr(r).direction === "rtl" && (u += Pn(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: o,
    x: u,
    y: l
  };
}
function _O(e, t) {
  const n = kn(e), r = br(e), a = n.visualViewport;
  let o = r.clientWidth, u = r.clientHeight, l = 0, d = 0;
  if (a) {
    o = a.width, u = a.height;
    const f = xp();
    (!f || f && t === "fixed") && (l = a.offsetLeft, d = a.offsetTop);
  }
  return {
    width: o,
    height: u,
    x: l,
    y: d
  };
}
function CO(e, t) {
  const n = Va(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, o = gr(e) ? Pi(e) : mr(1), u = e.clientWidth * o.x, l = e.clientHeight * o.y, d = a * o.x, f = r * o.y;
  return {
    width: u,
    height: l,
    x: d,
    y: f
  };
}
function Fv(e, t, n) {
  let r;
  if (t === "viewport")
    r = _O(e, n);
  else if (t === "document")
    r = EO(br(e));
  else if (nr(t))
    r = CO(t, n);
  else {
    const a = b0(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Gu(r);
}
function w0(e, t) {
  const n = ca(e);
  return n === t || !nr(n) || Fi(n) ? !1 : rr(n).position === "fixed" || w0(n, t);
}
function TO(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Go(e, [], !1).filter((l) => nr(l) && Gi(l) !== "body"), a = null;
  const o = rr(e).position === "fixed";
  let u = o ? ca(e) : e;
  for (; nr(u) && !Fi(u); ) {
    const l = rr(u), d = bp(u);
    !d && l.position === "fixed" && (a = null), (o ? !d && !a : !d && l.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || as(u) && !d && w0(e, u)) ? r = r.filter((p) => p !== u) : a = l, u = ca(u);
  }
  return t.set(e, r), r;
}
function SO(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const u = [...n === "clippingAncestors" ? Ml(t) ? [] : TO(t, this._c) : [].concat(n), r], l = u[0], d = u.reduce((f, p) => {
    const m = Fv(t, p, a);
    return f.top = Pn(m.top, f.top), f.right = ua(m.right, f.right), f.bottom = ua(m.bottom, f.bottom), f.left = Pn(m.left, f.left), f;
  }, Fv(t, l, a));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function PO(e) {
  const {
    width: t,
    height: n
  } = y0(e);
  return {
    width: t,
    height: n
  };
}
function kO(e, t, n) {
  const r = gr(t), a = br(t), o = n === "fixed", u = Va(e, !0, o, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = mr(0);
  if (r || !r && !o)
    if ((Gi(t) !== "body" || as(a)) && (l = Il(t)), r) {
      const v = Va(t, !0, o, t);
      d.x = v.x + t.clientLeft, d.y = v.y + t.clientTop;
    } else a && (d.x = $p(a));
  const f = a && !r && !o ? x0(a, l) : mr(0), p = u.left + l.scrollLeft - d.x - f.x, m = u.top + l.scrollTop - d.y - f.y;
  return {
    x: p,
    y: m,
    width: u.width,
    height: u.height
  };
}
function wd(e) {
  return rr(e).position === "static";
}
function Bv(e, t) {
  if (!gr(e) || rr(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return br(e) === n && (n = n.ownerDocument.body), n;
}
function $0(e, t) {
  const n = kn(e);
  if (Ml(e))
    return n;
  if (!gr(e)) {
    let a = ca(e);
    for (; a && !Fi(a); ) {
      if (nr(a) && !wd(a))
        return a;
      a = ca(a);
    }
    return n;
  }
  let r = Bv(e, t);
  for (; r && yO(r) && wd(r); )
    r = Bv(r, t);
  return r && Fi(r) && wd(r) && !bp(r) ? n : r || bO(e) || n;
}
const OO = async function(e) {
  const t = this.getOffsetParent || $0, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: kO(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function AO(e) {
  return rr(e).direction === "rtl";
}
const MO = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $O,
  getDocumentElement: br,
  getClippingRect: SO,
  getOffsetParent: $0,
  getElementRects: OO,
  getClientRects: DO,
  getDimensions: PO,
  getScale: Pi,
  isElement: nr,
  isRTL: AO
};
function D0(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function IO(e, t) {
  let n = null, r;
  const a = br(e);
  function o() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function u(l, d) {
    l === void 0 && (l = !1), d === void 0 && (d = 1), o();
    const f = e.getBoundingClientRect(), {
      left: p,
      top: m,
      width: v,
      height: $
    } = f;
    if (l || t(), !v || !$)
      return;
    const _ = su(m), x = su(a.clientWidth - (p + v)), w = su(a.clientHeight - (m + $)), M = su(p), C = {
      rootMargin: -_ + "px " + -x + "px " + -w + "px " + -M + "px",
      threshold: Pn(0, ua(1, d)) || 1
    };
    let P = !0;
    function S(G) {
      const Z = G[0].intersectionRatio;
      if (Z !== d) {
        if (!P)
          return u();
        Z ? u(!1, Z) : r = setTimeout(() => {
          u(!1, 1e-7);
        }, 1e3);
      }
      Z === 1 && !D0(f, e.getBoundingClientRect()) && u(), P = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...C,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, C);
    }
    n.observe(e);
  }
  return u(!0), o;
}
function NO(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = r, f = wp(e), p = a || o ? [...f ? Go(f) : [], ...Go(t)] : [];
  p.forEach((M) => {
    a && M.addEventListener("scroll", n, {
      passive: !0
    }), o && M.addEventListener("resize", n);
  });
  const m = f && l ? IO(f, n) : null;
  let v = -1, $ = null;
  u && ($ = new ResizeObserver((M) => {
    let [D] = M;
    D && D.target === f && $ && ($.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var C;
      (C = $) == null || C.observe(t);
    })), n();
  }), f && !d && $.observe(f), $.observe(t));
  let _, x = d ? Va(e) : null;
  d && w();
  function w() {
    const M = Va(e);
    x && !D0(x, M) && n(), x = M, _ = requestAnimationFrame(w);
  }
  return n(), () => {
    var M;
    p.forEach((D) => {
      a && D.removeEventListener("scroll", n), o && D.removeEventListener("resize", n);
    }), m == null || m(), (M = $) == null || M.disconnect(), $ = null, d && cancelAnimationFrame(_);
  };
}
const RO = hO, jO = mO, FO = dO, BO = vO, LO = fO, Lv = cO, VO = gO, WO = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: MO,
    ...n
  }, o = {
    ...a.platform,
    _c: r
  };
  return lO(e, t, {
    ...a,
    platform: o
  });
};
var ku = typeof document < "u" ? oa : Ue;
function Zu(e, t) {
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
        if (!Zu(e[r], t[r]))
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
      if (!(o === "_owner" && e.$$typeof) && !Zu(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function E0(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vv(e, t) {
  const n = E0(e);
  return Math.round(t * n) / n;
}
function $d(e) {
  const t = te.useRef(e);
  return ku(() => {
    t.current = e;
  }), t;
}
function zO(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: a,
    elements: {
      reference: o,
      floating: u
    } = {},
    transform: l = !0,
    whileElementsMounted: d,
    open: f
  } = e, [p, m] = te.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, $] = te.useState(r);
  Zu(v, r) || $(r);
  const [_, x] = te.useState(null), [w, M] = te.useState(null), D = te.useCallback((B) => {
    B !== G.current && (G.current = B, x(B));
  }, []), C = te.useCallback((B) => {
    B !== Z.current && (Z.current = B, M(B));
  }, []), P = o || _, S = u || w, G = te.useRef(null), Z = te.useRef(null), k = te.useRef(p), F = d != null, R = $d(d), I = $d(a), j = $d(f), E = te.useCallback(() => {
    if (!G.current || !Z.current)
      return;
    const B = {
      placement: t,
      strategy: n,
      middleware: v
    };
    I.current && (B.platform = I.current), WO(G.current, Z.current, B).then((J) => {
      const A = {
        ...J,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: j.current !== !1
      };
      L.current && !Zu(k.current, A) && (k.current = A, Bx.flushSync(() => {
        m(A);
      }));
    });
  }, [v, t, n, I, j]);
  ku(() => {
    f === !1 && k.current.isPositioned && (k.current.isPositioned = !1, m((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [f]);
  const L = te.useRef(!1);
  ku(() => (L.current = !0, () => {
    L.current = !1;
  }), []), ku(() => {
    if (P && (G.current = P), S && (Z.current = S), P && S) {
      if (R.current)
        return R.current(P, S, E);
      E();
    }
  }, [P, S, E, R, F]);
  const H = te.useMemo(() => ({
    reference: G,
    floating: Z,
    setReference: D,
    setFloating: C
  }), [D, C]), z = te.useMemo(() => ({
    reference: P,
    floating: S
  }), [P, S]), N = te.useMemo(() => {
    const B = {
      position: n,
      left: 0,
      top: 0
    };
    if (!z.floating)
      return B;
    const J = Vv(z.floating, p.x), A = Vv(z.floating, p.y);
    return l ? {
      ...B,
      transform: "translate(" + J + "px, " + A + "px)",
      ...E0(z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: J,
      top: A
    };
  }, [n, l, z.floating, p.x, p.y]);
  return te.useMemo(() => ({
    ...p,
    update: E,
    refs: H,
    elements: z,
    floatingStyles: N
  }), [p, E, H, z, N]);
}
const UO = (e) => {
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
      return r && t(r) ? r.current != null ? Lv({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? Lv({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, HO = (e, t) => ({
  ...RO(e),
  options: [e, t]
}), YO = (e, t) => ({
  ...jO(e),
  options: [e, t]
}), KO = (e, t) => ({
  ...VO(e),
  options: [e, t]
}), qO = (e, t) => ({
  ...FO(e),
  options: [e, t]
}), GO = (e, t) => ({
  ...BO(e),
  options: [e, t]
}), ZO = (e, t) => ({
  ...LO(e),
  options: [e, t]
}), XO = (e, t) => ({
  ...UO(e),
  options: [e, t]
});
var JO = "Arrow", _0 = te.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: a = 5, ...o } = e;
  return /* @__PURE__ */ y.jsx(
    Fr.svg,
    {
      ...o,
      ref: t,
      width: r,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ y.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
_0.displayName = JO;
var QO = _0;
function eA(e) {
  const [t, n] = te.useState(void 0);
  return La(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const o = a[0];
        let u, l;
        if ("borderBoxSize" in o) {
          const d = o.borderBoxSize, f = Array.isArray(d) ? d[0] : d;
          u = f.inlineSize, l = f.blockSize;
        } else
          u = e.offsetWidth, l = e.offsetHeight;
        n({ width: u, height: l });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Dp = "Popper", [C0, T0] = l0(Dp), [tA, S0] = C0(Dp), P0 = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = te.useState(null);
  return /* @__PURE__ */ y.jsx(tA, { scope: t, anchor: r, onAnchorChange: a, children: n });
};
P0.displayName = Dp;
var k0 = "PopperAnchor", O0 = te.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...a } = e, o = S0(k0, n), u = te.useRef(null), l = ha(t, u);
    return te.useEffect(() => {
      o.onAnchorChange((r == null ? void 0 : r.current) || u.current);
    }), r ? null : /* @__PURE__ */ y.jsx(Fr.div, { ...a, ref: l });
  }
);
O0.displayName = k0;
var Ep = "PopperContent", [nA, rA] = C0(Ep), A0 = te.forwardRef(
  (e, t) => {
    var $e, oe, xe, be, Ce, pe;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: a = 0,
      align: o = "center",
      alignOffset: u = 0,
      arrowPadding: l = 0,
      avoidCollisions: d = !0,
      collisionBoundary: f = [],
      collisionPadding: p = 0,
      sticky: m = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: $ = "optimized",
      onPlaced: _,
      ...x
    } = e, w = S0(Ep, n), [M, D] = te.useState(null), C = ha(t, (Fe) => D(Fe)), [P, S] = te.useState(null), G = eA(P), Z = (G == null ? void 0 : G.width) ?? 0, k = (G == null ? void 0 : G.height) ?? 0, F = r + (o !== "center" ? "-" + o : ""), R = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, I = Array.isArray(f) ? f : [f], j = I.length > 0, E = {
      padding: R,
      boundary: I.filter(iA),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: j
    }, { refs: L, floatingStyles: H, placement: z, isPositioned: N, middlewareData: B } = zO({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...Fe) => NO(...Fe, {
        animationFrame: $ === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        HO({ mainAxis: a + k, alignmentAxis: u }),
        d && YO({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? KO() : void 0,
          ...E
        }),
        d && qO({ ...E }),
        GO({
          ...E,
          apply: ({ elements: Fe, rects: we, availableWidth: rt, availableHeight: ot }) => {
            const { width: Je, height: U } = we.reference, ne = Fe.floating.style;
            ne.setProperty("--radix-popper-available-width", `${rt}px`), ne.setProperty("--radix-popper-available-height", `${ot}px`), ne.setProperty("--radix-popper-anchor-width", `${Je}px`), ne.setProperty("--radix-popper-anchor-height", `${U}px`);
          }
        }),
        P && XO({ element: P, padding: l }),
        oA({ arrowWidth: Z, arrowHeight: k }),
        v && ZO({ strategy: "referenceHidden", ...E })
      ]
    }), [J, A] = N0(z), W = sa(_);
    La(() => {
      N && (W == null || W());
    }, [N, W]);
    const re = ($e = B.arrow) == null ? void 0 : $e.x, ue = (oe = B.arrow) == null ? void 0 : oe.y, ce = ((xe = B.arrow) == null ? void 0 : xe.centerOffset) !== 0, [ye, ge] = te.useState();
    return La(() => {
      M && ge(window.getComputedStyle(M).zIndex);
    }, [M]), /* @__PURE__ */ y.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: N ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ye,
          "--radix-popper-transform-origin": [
            (be = B.transformOrigin) == null ? void 0 : be.x,
            (Ce = B.transformOrigin) == null ? void 0 : Ce.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((pe = B.hide) == null ? void 0 : pe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ y.jsx(
          nA,
          {
            scope: n,
            placedSide: J,
            onArrowChange: S,
            arrowX: re,
            arrowY: ue,
            shouldHideArrow: ce,
            children: /* @__PURE__ */ y.jsx(
              Fr.div,
              {
                "data-side": J,
                "data-align": A,
                ...x,
                ref: C,
                style: {
                  ...x.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: N ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
A0.displayName = Ep;
var M0 = "PopperArrow", aA = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, I0 = te.forwardRef(function(t, n) {
  const { __scopePopper: r, ...a } = t, o = rA(M0, r), u = aA[o.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ y.jsx(
      "span",
      {
        ref: o.onArrowChange,
        style: {
          position: "absolute",
          left: o.arrowX,
          top: o.arrowY,
          [u]: 0,
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
        children: /* @__PURE__ */ y.jsx(
          QO,
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
I0.displayName = M0;
function iA(e) {
  return e !== null;
}
var oA = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, M, D;
    const { placement: n, rects: r, middlewareData: a } = t, u = ((w = a.arrow) == null ? void 0 : w.centerOffset) !== 0, l = u ? 0 : e.arrowWidth, d = u ? 0 : e.arrowHeight, [f, p] = N0(n), m = { start: "0%", center: "50%", end: "100%" }[p], v = (((M = a.arrow) == null ? void 0 : M.x) ?? 0) + l / 2, $ = (((D = a.arrow) == null ? void 0 : D.y) ?? 0) + d / 2;
    let _ = "", x = "";
    return f === "bottom" ? (_ = u ? m : `${v}px`, x = `${-d}px`) : f === "top" ? (_ = u ? m : `${v}px`, x = `${r.floating.height + d}px`) : f === "right" ? (_ = `${-d}px`, x = u ? m : `${$}px`) : f === "left" && (_ = `${r.floating.width + d}px`, x = u ? m : `${$}px`), { data: { x: _, y: x } };
  }
});
function N0(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var sA = P0, R0 = O0, uA = A0, lA = I0, cA = "Portal", j0 = te.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [a, o] = te.useState(!1);
  La(() => o(!0), []);
  const u = n || a && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return u ? uk.createPortal(/* @__PURE__ */ y.jsx(Fr.div, { ...r, ref: t }), u) : null;
});
j0.displayName = cA;
function dA(e, t) {
  return te.useReducer((n, r) => t[n][r] ?? n, e);
}
var _p = (e) => {
  const { present: t, children: n } = e, r = fA(t), a = typeof n == "function" ? n({ present: r.isPresent }) : te.Children.only(n), o = ha(r.ref, pA(a));
  return typeof n == "function" || r.isPresent ? te.cloneElement(a, { ref: o }) : null;
};
_p.displayName = "Presence";
function fA(e) {
  const [t, n] = te.useState(), r = te.useRef({}), a = te.useRef(e), o = te.useRef("none"), u = e ? "mounted" : "unmounted", [l, d] = dA(u, {
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
  return te.useEffect(() => {
    const f = uu(r.current);
    o.current = l === "mounted" ? f : "none";
  }, [l]), La(() => {
    const f = r.current, p = a.current;
    if (p !== e) {
      const v = o.current, $ = uu(f);
      e ? d("MOUNT") : $ === "none" || (f == null ? void 0 : f.display) === "none" ? d("UNMOUNT") : d(p && v !== $ ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, d]), La(() => {
    if (t) {
      let f;
      const p = t.ownerDocument.defaultView ?? window, m = ($) => {
        const x = uu(r.current).includes($.animationName);
        if ($.target === t && x && (d("ANIMATION_END"), !a.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, v = ($) => {
        $.target === t && (o.current = uu(r.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        p.clearTimeout(f), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: te.useCallback((f) => {
      f && (r.current = getComputedStyle(f)), n(f);
    }, [])
  };
}
function uu(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function pA(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function hA({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, a] = mA({ defaultProp: t, onChange: n }), o = e !== void 0, u = o ? e : r, l = sa(n), d = te.useCallback(
    (f) => {
      if (o) {
        const m = typeof f == "function" ? f(e) : f;
        m !== e && l(m);
      } else
        a(f);
    },
    [o, e, a, l]
  );
  return [u, d];
}
function mA({
  defaultProp: e,
  onChange: t
}) {
  const n = te.useState(e), [r] = n, a = te.useRef(r), o = sa(t);
  return te.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [r, a, o]), n;
}
var gA = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pi = /* @__PURE__ */ new WeakMap(), lu = /* @__PURE__ */ new WeakMap(), cu = {}, Dd = 0, F0 = function(e) {
  return e && (e.host || F0(e.parentNode));
}, vA = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = F0(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, yA = function(e, t, n, r) {
  var a = vA(t, Array.isArray(e) ? e : [e]);
  cu[n] || (cu[n] = /* @__PURE__ */ new WeakMap());
  var o = cu[n], u = [], l = /* @__PURE__ */ new Set(), d = new Set(a), f = function(m) {
    !m || l.has(m) || (l.add(m), f(m.parentNode));
  };
  a.forEach(f);
  var p = function(m) {
    !m || d.has(m) || Array.prototype.forEach.call(m.children, function(v) {
      if (l.has(v))
        p(v);
      else
        try {
          var $ = v.getAttribute(r), _ = $ !== null && $ !== "false", x = (pi.get(v) || 0) + 1, w = (o.get(v) || 0) + 1;
          pi.set(v, x), o.set(v, w), u.push(v), x === 1 && _ && lu.set(v, !0), w === 1 && v.setAttribute(n, "true"), _ || v.setAttribute(r, "true");
        } catch (M) {
          console.error("aria-hidden: cannot operate on ", v, M);
        }
    });
  };
  return p(t), l.clear(), Dd++, function() {
    u.forEach(function(m) {
      var v = pi.get(m) - 1, $ = o.get(m) - 1;
      pi.set(m, v), o.set(m, $), v || (lu.has(m) || m.removeAttribute(r), lu.delete(m)), $ || m.removeAttribute(n);
    }), Dd--, Dd || (pi = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap(), lu = /* @__PURE__ */ new WeakMap(), cu = {});
  };
}, bA = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = gA(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), yA(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, xn = function() {
  return xn = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, xn.apply(this, arguments);
};
function B0(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Ga(e, t, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function(u) {
      u(o);
    });
  }
  return new (n || (n = Promise))(function(o, u) {
    function l(p) {
      try {
        f(r.next(p));
      } catch (m) {
        u(m);
      }
    }
    function d(p) {
      try {
        f(r.throw(p));
      } catch (m) {
        u(m);
      }
    }
    function f(p) {
      p.done ? o(p.value) : a(p.value).then(l, d);
    }
    f((r = r.apply(e, t || [])).next());
  });
}
function xA(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Ou = "right-scroll-bar-position", Au = "width-before-scroll-bar", wA = "with-scroll-bars-hidden", $A = "--removed-body-scroll-bar-size";
function Ed(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function DA(e, t) {
  var n = He(function() {
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
var EA = typeof window < "u" ? te.useLayoutEffect : te.useEffect, Wv = /* @__PURE__ */ new WeakMap();
function _A(e, t) {
  var n = DA(null, function(r) {
    return e.forEach(function(a) {
      return Ed(a, r);
    });
  });
  return EA(function() {
    var r = Wv.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), u = n.current;
      a.forEach(function(l) {
        o.has(l) || Ed(l, null);
      }), o.forEach(function(l) {
        a.has(l) || Ed(l, u);
      });
    }
    Wv.set(n, e);
  }, [e]), n;
}
function CA(e) {
  return e;
}
function TA(e, t) {
  t === void 0 && (t = CA);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(o) {
      var u = t(o, r);
      return n.push(u), function() {
        n = n.filter(function(l) {
          return l !== u;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (r = !0; n.length; ) {
        var u = n;
        n = [], u.forEach(o);
      }
      n = {
        push: function(l) {
          return o(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(o) {
      r = !0;
      var u = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(o), u = n;
      }
      var d = function() {
        var p = u;
        u = [], p.forEach(o);
      }, f = function() {
        return Promise.resolve().then(d);
      };
      f(), n = {
        push: function(p) {
          u.push(p), f();
        },
        filter: function(p) {
          return u = u.filter(p), n;
        }
      };
    }
  };
  return a;
}
function SA(e) {
  e === void 0 && (e = {});
  var t = TA(null);
  return t.options = xn({ async: !0, ssr: !1 }, e), t;
}
var L0 = function(e) {
  var t = e.sideCar, n = B0(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return te.createElement(r, xn({}, n));
};
L0.isSideCarExport = !0;
function PA(e, t) {
  return e.useMedium(t), L0;
}
var V0 = SA(), _d = function() {
}, Nl = te.forwardRef(function(e, t) {
  var n = te.useRef(null), r = te.useState({
    onScrollCapture: _d,
    onWheelCapture: _d,
    onTouchMoveCapture: _d
  }), a = r[0], o = r[1], u = e.forwardProps, l = e.children, d = e.className, f = e.removeScrollBar, p = e.enabled, m = e.shards, v = e.sideCar, $ = e.noIsolation, _ = e.inert, x = e.allowPinchZoom, w = e.as, M = w === void 0 ? "div" : w, D = e.gapMode, C = B0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = v, S = _A([n, t]), G = xn(xn({}, C), a);
  return te.createElement(
    te.Fragment,
    null,
    p && te.createElement(P, { sideCar: V0, removeScrollBar: f, shards: m, noIsolation: $, inert: _, setCallbacks: o, allowPinchZoom: !!x, lockRef: n, gapMode: D }),
    u ? te.cloneElement(te.Children.only(l), xn(xn({}, G), { ref: S })) : te.createElement(M, xn({}, G, { className: d, ref: S }), l)
  );
});
Nl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Nl.classNames = {
  fullWidth: Au,
  zeroRight: Ou
};
var kA = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function OA() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = kA();
  return t && e.setAttribute("nonce", t), e;
}
function AA(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function MA(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var IA = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = OA()) && (AA(t, n), MA(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, NA = function() {
  var e = IA();
  return function(t, n) {
    te.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, W0 = function() {
  var e = NA(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, RA = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Cd = function(e) {
  return parseInt(e || "", 10) || 0;
}, jA = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Cd(n), Cd(r), Cd(a)];
}, FA = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return RA;
  var t = jA(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, BA = W0(), ki = "data-scroll-locked", LA = function(e, t, n, r) {
  var a = e.left, o = e.top, u = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(wA, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(ki, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(u, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ou, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Au, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ou, " .").concat(Ou, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Au, " .").concat(Au, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ki, `] {
    `).concat($A, ": ").concat(l, `px;
  }
`);
}, zv = function() {
  var e = parseInt(document.body.getAttribute(ki) || "0", 10);
  return isFinite(e) ? e : 0;
}, VA = function() {
  te.useEffect(function() {
    return document.body.setAttribute(ki, (zv() + 1).toString()), function() {
      var e = zv() - 1;
      e <= 0 ? document.body.removeAttribute(ki) : document.body.setAttribute(ki, e.toString());
    };
  }, []);
}, WA = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  VA();
  var o = te.useMemo(function() {
    return FA(a);
  }, [a]);
  return te.createElement(BA, { styles: LA(o, !t, a, n ? "" : "!important") });
}, Cf = !1;
if (typeof window < "u")
  try {
    var du = Object.defineProperty({}, "passive", {
      get: function() {
        return Cf = !0, !0;
      }
    });
    window.addEventListener("test", du, du), window.removeEventListener("test", du, du);
  } catch {
    Cf = !1;
  }
var hi = Cf ? { passive: !1 } : !1, zA = function(e) {
  return e.tagName === "TEXTAREA";
}, z0 = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !zA(e) && n[t] === "visible")
  );
}, UA = function(e) {
  return z0(e, "overflowY");
}, HA = function(e) {
  return z0(e, "overflowX");
}, Uv = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = U0(e, r);
    if (a) {
      var o = H0(e, r), u = o[1], l = o[2];
      if (u > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, YA = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, KA = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, U0 = function(e, t) {
  return e === "v" ? UA(t) : HA(t);
}, H0 = function(e, t) {
  return e === "v" ? YA(t) : KA(t);
}, qA = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, GA = function(e, t, n, r, a) {
  var o = qA(e, window.getComputedStyle(t).direction), u = o * r, l = n.target, d = t.contains(l), f = !1, p = u > 0, m = 0, v = 0;
  do {
    var $ = H0(e, l), _ = $[0], x = $[1], w = $[2], M = x - w - o * _;
    (_ || M) && U0(e, l) && (m += M, v += _), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (
    // portaled content
    !d && l !== document.body || // self content
    d && (t.contains(l) || t === l)
  );
  return (p && Math.abs(m) < 1 || !p && Math.abs(v) < 1) && (f = !0), f;
}, fu = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Hv = function(e) {
  return [e.deltaX, e.deltaY];
}, Yv = function(e) {
  return e && "current" in e ? e.current : e;
}, ZA = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, XA = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, JA = 0, mi = [];
function QA(e) {
  var t = te.useRef([]), n = te.useRef([0, 0]), r = te.useRef(), a = te.useState(JA++)[0], o = te.useState(W0)[0], u = te.useRef(e);
  te.useEffect(function() {
    u.current = e;
  }, [e]), te.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var x = xA([e.lockRef.current], (e.shards || []).map(Yv), !0).filter(Boolean);
      return x.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), x.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = te.useCallback(function(x, w) {
    if ("touches" in x && x.touches.length === 2 || x.type === "wheel" && x.ctrlKey)
      return !u.current.allowPinchZoom;
    var M = fu(x), D = n.current, C = "deltaX" in x ? x.deltaX : D[0] - M[0], P = "deltaY" in x ? x.deltaY : D[1] - M[1], S, G = x.target, Z = Math.abs(C) > Math.abs(P) ? "h" : "v";
    if ("touches" in x && Z === "h" && G.type === "range")
      return !1;
    var k = Uv(Z, G);
    if (!k)
      return !0;
    if (k ? S = Z : (S = Z === "v" ? "h" : "v", k = Uv(Z, G)), !k)
      return !1;
    if (!r.current && "changedTouches" in x && (C || P) && (r.current = S), !S)
      return !0;
    var F = r.current || S;
    return GA(F, w, x, F === "h" ? C : P);
  }, []), d = te.useCallback(function(x) {
    var w = x;
    if (!(!mi.length || mi[mi.length - 1] !== o)) {
      var M = "deltaY" in w ? Hv(w) : fu(w), D = t.current.filter(function(S) {
        return S.name === w.type && (S.target === w.target || w.target === S.shadowParent) && ZA(S.delta, M);
      })[0];
      if (D && D.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!D) {
        var C = (u.current.shards || []).map(Yv).filter(Boolean).filter(function(S) {
          return S.contains(w.target);
        }), P = C.length > 0 ? l(w, C[0]) : !u.current.noIsolation;
        P && w.cancelable && w.preventDefault();
      }
    }
  }, []), f = te.useCallback(function(x, w, M, D) {
    var C = { name: x, delta: w, target: M, should: D, shadowParent: e6(M) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(P) {
        return P !== C;
      });
    }, 1);
  }, []), p = te.useCallback(function(x) {
    n.current = fu(x), r.current = void 0;
  }, []), m = te.useCallback(function(x) {
    f(x.type, Hv(x), x.target, l(x, e.lockRef.current));
  }, []), v = te.useCallback(function(x) {
    f(x.type, fu(x), x.target, l(x, e.lockRef.current));
  }, []);
  te.useEffect(function() {
    return mi.push(o), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", d, hi), document.addEventListener("touchmove", d, hi), document.addEventListener("touchstart", p, hi), function() {
      mi = mi.filter(function(x) {
        return x !== o;
      }), document.removeEventListener("wheel", d, hi), document.removeEventListener("touchmove", d, hi), document.removeEventListener("touchstart", p, hi);
    };
  }, []);
  var $ = e.removeScrollBar, _ = e.inert;
  return te.createElement(
    te.Fragment,
    null,
    _ ? te.createElement(o, { styles: XA(a) }) : null,
    $ ? te.createElement(WA, { gapMode: e.gapMode }) : null
  );
}
function e6(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const t6 = PA(V0, QA);
var Y0 = te.forwardRef(function(e, t) {
  return te.createElement(Nl, xn({}, e, { ref: t, sideCar: t6 }));
});
Y0.classNames = Nl.classNames;
var Cp = "Popover", [K0, WK] = l0(Cp, [
  T0
]), is = T0(), [n6, ma] = K0(Cp), q0 = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: u = !1
  } = e, l = is(t), d = te.useRef(null), [f, p] = te.useState(!1), [m = !1, v] = hA({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ y.jsx(sA, { ...l, children: /* @__PURE__ */ y.jsx(
    n6,
    {
      scope: t,
      contentId: eO(),
      triggerRef: d,
      open: m,
      onOpenChange: v,
      onOpenToggle: te.useCallback(() => v(($) => !$), [v]),
      hasCustomAnchor: f,
      onCustomAnchorAdd: te.useCallback(() => p(!0), []),
      onCustomAnchorRemove: te.useCallback(() => p(!1), []),
      modal: u,
      children: n
    }
  ) });
};
q0.displayName = Cp;
var G0 = "PopoverAnchor", Z0 = te.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = ma(G0, n), o = is(n), { onCustomAnchorAdd: u, onCustomAnchorRemove: l } = a;
    return te.useEffect(() => (u(), () => l()), [u, l]), /* @__PURE__ */ y.jsx(R0, { ...o, ...r, ref: t });
  }
);
Z0.displayName = G0;
var X0 = "PopoverTrigger", J0 = te.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = ma(X0, n), o = is(n), u = ha(t, a.triggerRef), l = /* @__PURE__ */ y.jsx(
      Fr.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": r1(a.open),
        ...r,
        ref: u,
        onClick: ia(e.onClick, a.onOpenToggle)
      }
    );
    return a.hasCustomAnchor ? l : /* @__PURE__ */ y.jsx(R0, { asChild: !0, ...o, children: l });
  }
);
J0.displayName = X0;
var Tp = "PopoverPortal", [r6, a6] = K0(Tp, {
  forceMount: void 0
}), Q0 = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: a } = e, o = ma(Tp, t);
  return /* @__PURE__ */ y.jsx(r6, { scope: t, forceMount: n, children: /* @__PURE__ */ y.jsx(_p, { present: n || o.open, children: /* @__PURE__ */ y.jsx(j0, { asChild: !0, container: a, children: r }) }) });
};
Q0.displayName = Tp;
var Bi = "PopoverContent", e1 = te.forwardRef(
  (e, t) => {
    const n = a6(Bi, e.__scopePopover), { forceMount: r = n.forceMount, ...a } = e, o = ma(Bi, e.__scopePopover);
    return /* @__PURE__ */ y.jsx(_p, { present: r || o.open, children: o.modal ? /* @__PURE__ */ y.jsx(i6, { ...a, ref: t }) : /* @__PURE__ */ y.jsx(o6, { ...a, ref: t }) });
  }
);
e1.displayName = Bi;
var i6 = te.forwardRef(
  (e, t) => {
    const n = ma(Bi, e.__scopePopover), r = te.useRef(null), a = ha(t, r), o = te.useRef(!1);
    return te.useEffect(() => {
      const u = r.current;
      if (u) return bA(u);
    }, []), /* @__PURE__ */ y.jsx(Y0, { as: Ct, allowPinchZoom: !0, children: /* @__PURE__ */ y.jsx(
      t1,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ia(e.onCloseAutoFocus, (u) => {
          var l;
          u.preventDefault(), o.current || (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: ia(
          e.onPointerDownOutside,
          (u) => {
            const l = u.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || d;
            o.current = f;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: ia(
          e.onFocusOutside,
          (u) => u.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), o6 = te.forwardRef(
  (e, t) => {
    const n = ma(Bi, e.__scopePopover), r = te.useRef(!1), a = te.useRef(!1);
    return /* @__PURE__ */ y.jsx(
      t1,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var u, l;
          (u = e.onCloseAutoFocus) == null || u.call(e, o), o.defaultPrevented || (r.current || (l = n.triggerRef.current) == null || l.focus(), o.preventDefault()), r.current = !1, a.current = !1;
        },
        onInteractOutside: (o) => {
          var d, f;
          (d = e.onInteractOutside) == null || d.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const u = o.target;
          ((f = n.triggerRef.current) == null ? void 0 : f.contains(u)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
        }
      }
    );
  }
), t1 = te.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: a,
      onCloseAutoFocus: o,
      disableOutsidePointerEvents: u,
      onEscapeKeyDown: l,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: p,
      ...m
    } = e, v = ma(Bi, n), $ = is(n);
    return U5(), /* @__PURE__ */ y.jsx(
      p0,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: a,
        onUnmountAutoFocus: o,
        children: /* @__PURE__ */ y.jsx(
          d0,
          {
            asChild: !0,
            disableOutsidePointerEvents: u,
            onInteractOutside: p,
            onEscapeKeyDown: l,
            onPointerDownOutside: d,
            onFocusOutside: f,
            onDismiss: () => v.onOpenChange(!1),
            children: /* @__PURE__ */ y.jsx(
              uA,
              {
                "data-state": r1(v.open),
                role: "dialog",
                id: v.contentId,
                ...$,
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
), n1 = "PopoverClose", s6 = te.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = ma(n1, n);
    return /* @__PURE__ */ y.jsx(
      Fr.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ia(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
s6.displayName = n1;
var u6 = "PopoverArrow", l6 = te.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = is(n);
    return /* @__PURE__ */ y.jsx(lA, { ...a, ...r, ref: t });
  }
);
l6.displayName = u6;
function r1(e) {
  return e ? "open" : "closed";
}
var c6 = q0, d6 = Z0, f6 = J0, p6 = Q0, h6 = e1;
const m6 = c6, g6 = f6, v6 = ({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ref: r,
  forceMount: a,
  container: o,
  disableInteractions: u,
  onKeyDown: l,
  ...d
}) => /* @__PURE__ */ y.jsx(p6, { forceMount: a, container: o || document.querySelector("#root"), children: /* @__PURE__ */ y.jsx("div", { className: Ae(u && "pointer-events-none invisible"), children: /* @__PURE__ */ y.jsx(
  h6,
  {
    ref: r,
    align: t,
    sideOffset: n,
    className: Ae(
      "z-[5000] rounded-lg border border-solid border-neutral-300 bg-white p-4 shadow-md outline-none ui-state-open:animate-in ui-state-closed:animate-out ui-state-closed:fade-out-0 ui-state-open:fade-in-0 ui-state-closed:zoom-out-95 ui-state-open:zoom-in-95 ui-side-bottom:slide-in-from-top-2 ui-side-left:slide-in-from-right-2 ui-side-right:slide-in-from-left-2 ui-side-top:slide-in-from-bottom-2 overflow-auto scrollbar-thin",
      "max-h-[calc(var(--radix-popover-content-available-height)-10px)] min-w-[var(--radix-popover-trigger-width)]",
      e
    ),
    ...d
  }
) }) }), Kn = Object.assign(m6, {
  Trigger: g6,
  Content: v6,
  Anchor: d6
});
function at(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function On(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function on(e, t) {
  const n = at(e);
  return isNaN(t) ? On(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function ar(e, t) {
  const n = at(e);
  if (isNaN(t)) return On(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), a = On(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const o = a.getDate();
  return r >= o ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    r
  ), n);
}
const Sp = 6048e5, y6 = 864e5;
let b6 = {};
function os() {
  return b6;
}
function vr(e, t) {
  var l, d, f, p;
  const n = os(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((p = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : p.weekStartsOn) ?? 0, a = at(e), o = a.getDay(), u = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - u), a.setHours(0, 0, 0, 0), a;
}
function Wa(e) {
  return vr(e, { weekStartsOn: 1 });
}
function a1(e) {
  const t = at(e), n = t.getFullYear(), r = On(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = Wa(r), o = On(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const u = Wa(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1;
}
function Li(e) {
  const t = at(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Xu(e) {
  const t = at(e), n = new Date(
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
function pr(e, t) {
  const n = Li(e), r = Li(t), a = +n - Xu(n), o = +r - Xu(r);
  return Math.round((a - o) / y6);
}
function x6(e) {
  const t = a1(e), n = On(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Wa(n);
}
function Tf(e, t) {
  const n = t * 7;
  return on(e, n);
}
function w6(e, t) {
  return ar(e, t * 12);
}
function $6(e) {
  let t;
  return e.forEach(function(n) {
    const r = at(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function D6(e) {
  let t;
  return e.forEach((n) => {
    const r = at(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function wn(e, t) {
  const n = Li(e), r = Li(t);
  return +n == +r;
}
function Pp(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function E6(e) {
  if (!Pp(e) && typeof e != "number")
    return !1;
  const t = at(e);
  return !isNaN(Number(t));
}
function Zo(e, t) {
  const n = at(e), r = at(t), a = n.getFullYear() - r.getFullYear(), o = n.getMonth() - r.getMonth();
  return a * 12 + o;
}
function _6(e, t, n) {
  const r = vr(e, n), a = vr(t, n), o = +r - Xu(r), u = +a - Xu(a);
  return Math.round((o - u) / Sp);
}
function kp(e) {
  const t = at(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function $n(e) {
  const t = at(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function i1(e) {
  const t = at(e), n = On(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Op(e, t) {
  var l, d, f, p;
  const n = os(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((p = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : p.weekStartsOn) ?? 0, a = at(e), o = a.getDay(), u = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + u), a.setHours(23, 59, 59, 999), a;
}
function o1(e) {
  return Op(e, { weekStartsOn: 1 });
}
const C6 = {
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
}, T6 = (e, t, n) => {
  let r;
  const a = C6[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Oi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const S6 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, P6 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, k6 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, O6 = {
  date: Oi({
    formats: S6,
    defaultWidth: "full"
  }),
  time: Oi({
    formats: P6,
    defaultWidth: "full"
  }),
  dateTime: Oi({
    formats: k6,
    defaultWidth: "full"
  })
}, A6 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, M6 = (e, t, n, r) => A6[e];
function cr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const u = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : u;
      a = e.formattingValues[l] || e.formattingValues[u];
    } else {
      const u = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[l] || e.values[u];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const I6 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, N6 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, R6 = {
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
}, j6 = {
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
}, F6 = {
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
}, B6 = {
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
}, L6 = (e, t) => {
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
}, V6 = {
  ordinalNumber: L6,
  era: cr({
    values: I6,
    defaultWidth: "wide"
  }),
  quarter: cr({
    values: N6,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: cr({
    values: R6,
    defaultWidth: "wide"
  }),
  day: cr({
    values: j6,
    defaultWidth: "wide"
  }),
  dayPeriod: cr({
    values: F6,
    defaultWidth: "wide",
    formattingValues: B6,
    defaultFormattingWidth: "wide"
  })
};
function dr(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const u = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(l) ? z6(l, (m) => m.test(u)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      W6(l, (m) => m.test(u))
    );
    let f;
    f = e.valueCallback ? e.valueCallback(d) : d, f = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(f)
    ) : f;
    const p = t.slice(u.length);
    return { value: f, rest: p };
  };
}
function W6(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function z6(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function s1(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let u = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    u = n.valueCallback ? n.valueCallback(u) : u;
    const l = t.slice(a.length);
    return { value: u, rest: l };
  };
}
const U6 = /^(\d+)(th|st|nd|rd)?/i, H6 = /\d+/i, Y6 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, K6 = {
  any: [/^b/i, /^(a|c)/i]
}, q6 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, G6 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Z6 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, X6 = {
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
}, J6 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Q6 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, eM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, tM = {
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
}, nM = {
  ordinalNumber: s1({
    matchPattern: U6,
    parsePattern: H6,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: dr({
    matchPatterns: Y6,
    defaultMatchWidth: "wide",
    parsePatterns: K6,
    defaultParseWidth: "any"
  }),
  quarter: dr({
    matchPatterns: q6,
    defaultMatchWidth: "wide",
    parsePatterns: G6,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: dr({
    matchPatterns: Z6,
    defaultMatchWidth: "wide",
    parsePatterns: X6,
    defaultParseWidth: "any"
  }),
  day: dr({
    matchPatterns: J6,
    defaultMatchWidth: "wide",
    parsePatterns: Q6,
    defaultParseWidth: "any"
  }),
  dayPeriod: dr({
    matchPatterns: eM,
    defaultMatchWidth: "any",
    parsePatterns: tM,
    defaultParseWidth: "any"
  })
}, u1 = {
  code: "en-US",
  formatDistance: T6,
  formatLong: O6,
  formatRelative: M6,
  localize: V6,
  match: nM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function rM(e) {
  const t = at(e);
  return pr(t, i1(t)) + 1;
}
function l1(e) {
  const t = at(e), n = +Wa(t) - +x6(t);
  return Math.round(n / Sp) + 1;
}
function c1(e, t) {
  var p, m, v, $;
  const n = at(e), r = n.getFullYear(), a = os(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? (($ = (v = a.locale) == null ? void 0 : v.options) == null ? void 0 : $.firstWeekContainsDate) ?? 1, u = On(e, 0);
  u.setFullYear(r + 1, 0, o), u.setHours(0, 0, 0, 0);
  const l = vr(u, t), d = On(e, 0);
  d.setFullYear(r, 0, o), d.setHours(0, 0, 0, 0);
  const f = vr(d, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= f.getTime() ? r : r - 1;
}
function aM(e, t) {
  var l, d, f, p;
  const n = os(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((p = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = c1(e, t), o = On(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), vr(o, t);
}
function d1(e, t) {
  const n = at(e), r = +vr(n, t) - +aM(n, t);
  return Math.round(r / Sp) + 1;
}
function ht(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Jr = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ht(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ht(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ht(e.getDate(), t.length);
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
    return ht(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ht(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ht(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ht(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ht(a, t.length);
  }
}, gi = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Kv = {
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
    return Jr.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = c1(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const u = o % 100;
      return ht(u, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : ht(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = a1(e);
    return ht(n, t.length);
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
    return ht(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ht(r, 2);
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
        return ht(r, 2);
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
        return Jr.M(e, t);
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
        return ht(r + 1, 2);
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
    const a = d1(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : ht(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = l1(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ht(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Jr.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = rM(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ht(r, t.length);
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
        return ht(o, 2);
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
        return ht(o, t.length);
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
        return ht(a, t.length);
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
    switch (r === 12 ? a = gi.noon : r === 0 ? a = gi.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? a = gi.evening : r >= 12 ? a = gi.afternoon : r >= 4 ? a = gi.morning : a = gi.night, t) {
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
    return Jr.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Jr.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ht(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ht(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Jr.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Jr.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Jr.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Gv(r);
      case "XXXX":
      case "XX":
        return ka(r);
      case "XXXXX":
      case "XXX":
      default:
        return ka(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Gv(r);
      case "xxxx":
      case "xx":
        return ka(r);
      case "xxxxx":
      case "xxx":
      default:
        return ka(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + qv(r, ":");
      case "OOOO":
      default:
        return "GMT" + ka(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + qv(r, ":");
      case "zzzz":
      default:
        return "GMT" + ka(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return ht(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return ht(r, t.length);
  }
};
function qv(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + ht(o, 2);
}
function Gv(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ht(Math.abs(e) / 60, 2) : ka(e, t);
}
function ka(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = ht(Math.trunc(r / 60), 2), o = ht(r % 60, 2);
  return n + a + t + o;
}
const Zv = (e, t) => {
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
}, f1 = (e, t) => {
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
}, iM = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return Zv(e, t);
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
  return o.replace("{{date}}", Zv(r, t)).replace("{{time}}", f1(a, t));
}, oM = {
  p: f1,
  P: iM
}, sM = /^D+$/, uM = /^Y+$/, lM = ["D", "DD", "YY", "YYYY"];
function cM(e) {
  return sM.test(e);
}
function dM(e) {
  return uM.test(e);
}
function fM(e, t, n) {
  const r = pM(e, t, n);
  if (console.warn(r), lM.includes(e)) throw new RangeError(r);
}
function pM(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const hM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, mM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gM = /^'([^]*?)'?$/, vM = /''/g, yM = /[a-zA-Z]/;
function Za(e, t, n) {
  var p, m, v, $, _, x, w, M;
  const r = os(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? u1, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? (($ = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : $.firstWeekContainsDate) ?? 1, u = (n == null ? void 0 : n.weekStartsOn) ?? ((x = (_ = n == null ? void 0 : n.locale) == null ? void 0 : _.options) == null ? void 0 : x.weekStartsOn) ?? r.weekStartsOn ?? ((M = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : M.weekStartsOn) ?? 0, l = at(e);
  if (!E6(l))
    throw new RangeError("Invalid time value");
  let d = t.match(mM).map((D) => {
    const C = D[0];
    if (C === "p" || C === "P") {
      const P = oM[C];
      return P(D, a.formatLong);
    }
    return D;
  }).join("").match(hM).map((D) => {
    if (D === "''")
      return { isToken: !1, value: "'" };
    const C = D[0];
    if (C === "'")
      return { isToken: !1, value: bM(D) };
    if (Kv[C])
      return { isToken: !0, value: D };
    if (C.match(yM))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + C + "`"
      );
    return { isToken: !1, value: D };
  });
  a.localize.preprocessor && (d = a.localize.preprocessor(l, d));
  const f = {
    firstWeekContainsDate: o,
    weekStartsOn: u,
    locale: a
  };
  return d.map((D) => {
    if (!D.isToken) return D.value;
    const C = D.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && dM(C) || !(n != null && n.useAdditionalDayOfYearTokens) && cM(C)) && fM(C, t, String(e));
    const P = Kv[C[0]];
    return P(l, C, a.localize, f);
  }).join("");
}
function bM(e) {
  const t = e.match(gM);
  return t ? t[1].replace(vM, "'") : e;
}
function xM(e) {
  const t = at(e), n = t.getFullYear(), r = t.getMonth(), a = On(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function wM(e) {
  return Math.trunc(+at(e) / 1e3);
}
function $M(e) {
  const t = at(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function DM(e, t) {
  return _6(
    $M(e),
    $n(e),
    t
  ) + 1;
}
function Sf(e, t) {
  const n = at(e), r = at(t);
  return n.getTime() > r.getTime();
}
function p1(e, t) {
  const n = at(e), r = at(t);
  return +n < +r;
}
function Ap(e, t) {
  const n = at(e), r = at(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function EM(e, t) {
  const n = at(e), r = at(t);
  return n.getFullYear() === r.getFullYear();
}
function Td(e, t) {
  return on(e, -t);
}
function Sd(e, t) {
  const n = at(e), r = n.getFullYear(), a = n.getDate(), o = On(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const u = xM(o);
  return n.setMonth(t, Math.min(a, u)), n;
}
function Xv(e, t) {
  const n = at(e);
  return isNaN(+n) ? On(e, NaN) : (n.setFullYear(t), n);
}
const Jv = {
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
}, _M = (e, t, n) => {
  let r;
  const a = n != null && n.addSuffix ? Jv[e].withPreposition : Jv[e].standalone;
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", String(t)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : "vor " + r : r;
}, CM = {
  full: "EEEE, do MMMM y",
  // Montag, 7. Januar 2018
  long: "do MMMM y",
  // 7. Januar 2018
  medium: "do MMM y",
  // 7. Jan. 2018
  short: "dd.MM.y"
  // 07.01.2018
}, TM = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, SM = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, PM = {
  date: Oi({
    formats: CM,
    defaultWidth: "full"
  }),
  time: Oi({
    formats: TM,
    defaultWidth: "full"
  }),
  dateTime: Oi({
    formats: SM,
    defaultWidth: "full"
  })
}, kM = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: "P"
}, OM = (e, t, n, r) => kM[e], AM = {
  narrow: ["v.Chr.", "n.Chr."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["vor Christus", "nach Christus"]
}, MM = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
}, Pf = {
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
}, IM = {
  narrow: Pf.narrow,
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
  wide: Pf.wide
}, NM = {
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
}, RM = {
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
}, jM = {
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
}, FM = (e) => Number(e) + ".", BM = {
  ordinalNumber: FM,
  era: cr({
    values: AM,
    defaultWidth: "wide"
  }),
  quarter: cr({
    values: MM,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: cr({
    values: Pf,
    formattingValues: IM,
    defaultWidth: "wide"
  }),
  day: cr({
    values: NM,
    defaultWidth: "wide"
  }),
  dayPeriod: cr({
    values: RM,
    defaultWidth: "wide",
    formattingValues: jM,
    defaultFormattingWidth: "wide"
  })
}, LM = /^(\d+)(\.)?/i, VM = /\d+/i, WM = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
}, zM = {
  any: [/^v/i, /^n/i]
}, UM = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
}, HM = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, YM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
}, KM = {
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
}, qM = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
}, GM = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
}, ZM = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
}, XM = {
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
}, JM = {
  ordinalNumber: s1({
    matchPattern: LM,
    parsePattern: VM,
    valueCallback: (e) => parseInt(e)
  }),
  era: dr({
    matchPatterns: WM,
    defaultMatchWidth: "wide",
    parsePatterns: zM,
    defaultParseWidth: "any"
  }),
  quarter: dr({
    matchPatterns: UM,
    defaultMatchWidth: "wide",
    parsePatterns: HM,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: dr({
    matchPatterns: YM,
    defaultMatchWidth: "wide",
    parsePatterns: KM,
    defaultParseWidth: "any"
  }),
  day: dr({
    matchPatterns: qM,
    defaultMatchWidth: "wide",
    parsePatterns: GM,
    defaultParseWidth: "any"
  }),
  dayPeriod: dr({
    matchPatterns: ZM,
    defaultMatchWidth: "wide",
    parsePatterns: XM,
    defaultParseWidth: "any"
  })
}, QM = {
  code: "de",
  formatDistance: _M,
  formatLong: PM,
  formatRelative: OM,
  localize: BM,
  match: JM,
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
function eI(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function h1(e, t, n) {
  for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function ss(e) {
  return e.mode === "multiple";
}
function us(e) {
  return e.mode === "range";
}
function Rl(e) {
  return e.mode === "single";
}
var tI = {
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
function nI(e, t) {
  return Za(e, "LLLL y", t);
}
function rI(e, t) {
  return Za(e, "d", t);
}
function aI(e, t) {
  return Za(e, "LLLL", t);
}
function iI(e) {
  return "".concat(e);
}
function oI(e, t) {
  return Za(e, "cccccc", t);
}
function sI(e, t) {
  return Za(e, "yyyy", t);
}
var uI = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: nI,
  formatDay: rI,
  formatMonthCaption: aI,
  formatWeekNumber: iI,
  formatWeekdayName: oI,
  formatYearCaption: sI
}), lI = function(e, t, n) {
  return Za(e, "do MMMM (EEEE)", n);
}, cI = function() {
  return "Month: ";
}, dI = function() {
  return "Go to next month";
}, fI = function() {
  return "Go to previous month";
}, pI = function(e, t) {
  return Za(e, "cccc", t);
}, hI = function(e) {
  return "Week n. ".concat(e);
}, mI = function() {
  return "Year: ";
}, gI = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: lI,
  labelMonthDropdown: cI,
  labelNext: dI,
  labelPrevious: fI,
  labelWeekNumber: hI,
  labelWeekday: pI,
  labelYearDropdown: mI
});
function vI() {
  var e = "buttons", t = tI, n = u1, r = {}, a = {}, o = 1, u = {}, l = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: uI,
    labels: gI,
    locale: n,
    modifiersClassNames: r,
    modifiers: a,
    numberOfMonths: o,
    styles: u,
    today: l,
    mode: "default"
  };
}
function yI(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, a = e.toMonth, o = e.fromDate, u = e.toDate;
  return r ? o = $n(r) : t && (o = new Date(t, 0, 1)), a ? u = kp(a) : n && (u = new Date(n, 11, 31)), {
    fromDate: o ? Li(o) : void 0,
    toDate: u ? Li(u) : void 0
  };
}
var m1 = pa(void 0);
function bI(e) {
  var t, n = e.initialProps, r = vI(), a = yI(n), o = a.fromDate, u = a.toDate, l = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  l !== "buttons" && (!o || !u) && (l = "buttons");
  var d;
  (Rl(n) || ss(n) || us(n)) && (d = n.onSelect);
  var f = je(je(je({}, r), n), { captionLayout: l, classNames: je(je({}, r.classNames), n.classNames), components: je({}, n.components), formatters: je(je({}, r.formatters), n.formatters), fromDate: o, labels: je(je({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: je(je({}, r.modifiers), n.modifiers), modifiersClassNames: je(je({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: d, styles: je(je({}, r.styles), n.styles), toDate: u });
  return y.jsx(m1.Provider, { value: f, children: e.children });
}
function wt() {
  var e = At(m1);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function g1(e) {
  var t = wt(), n = t.locale, r = t.classNames, a = t.styles, o = t.formatters.formatCaption;
  return y.jsx("div", { className: r.caption_label, style: a.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: o(e.displayMonth, { locale: n }) });
}
function xI(e) {
  return y.jsx("svg", je({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: y.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function v1(e) {
  var t, n, r = e.onChange, a = e.value, o = e.children, u = e.caption, l = e.className, d = e.style, f = wt(), p = (n = (t = f.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : xI;
  return y.jsxs("div", { className: l, style: d, children: [y.jsx("span", { className: f.classNames.vhidden, children: e["aria-label"] }), y.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: f.classNames.dropdown, style: f.styles.dropdown, value: a, onChange: r, children: o }), y.jsxs("div", { className: f.classNames.caption_label, style: f.styles.caption_label, "aria-hidden": "true", children: [u, y.jsx(p, { className: f.classNames.dropdown_icon, style: f.styles.dropdown_icon })] })] });
}
function wI(e) {
  var t, n = wt(), r = n.fromDate, a = n.toDate, o = n.styles, u = n.locale, l = n.formatters.formatMonthCaption, d = n.classNames, f = n.components, p = n.labels.labelMonthDropdown;
  if (!r)
    return y.jsx(y.Fragment, {});
  if (!a)
    return y.jsx(y.Fragment, {});
  var m = [];
  if (EM(r, a))
    for (var v = $n(r), $ = r.getMonth(); $ <= a.getMonth(); $++)
      m.push(Sd(v, $));
  else
    for (var v = $n(/* @__PURE__ */ new Date()), $ = 0; $ <= 11; $++)
      m.push(Sd(v, $));
  var _ = function(w) {
    var M = Number(w.target.value), D = Sd($n(e.displayMonth), M);
    e.onChange(D);
  }, x = (t = f == null ? void 0 : f.Dropdown) !== null && t !== void 0 ? t : v1;
  return y.jsx(x, { name: "months", "aria-label": p(), className: d.dropdown_month, style: o.dropdown_month, onChange: _, value: e.displayMonth.getMonth(), caption: l(e.displayMonth, { locale: u }), children: m.map(function(w) {
    return y.jsx("option", { value: w.getMonth(), children: l(w, { locale: u }) }, w.getMonth());
  }) });
}
function $I(e) {
  var t, n = e.displayMonth, r = wt(), a = r.fromDate, o = r.toDate, u = r.locale, l = r.styles, d = r.classNames, f = r.components, p = r.formatters.formatYearCaption, m = r.labels.labelYearDropdown, v = [];
  if (!a)
    return y.jsx(y.Fragment, {});
  if (!o)
    return y.jsx(y.Fragment, {});
  for (var $ = a.getFullYear(), _ = o.getFullYear(), x = $; x <= _; x++)
    v.push(Xv(i1(/* @__PURE__ */ new Date()), x));
  var w = function(D) {
    var C = Xv($n(n), Number(D.target.value));
    e.onChange(C);
  }, M = (t = f == null ? void 0 : f.Dropdown) !== null && t !== void 0 ? t : v1;
  return y.jsx(M, { name: "years", "aria-label": m(), className: d.dropdown_year, style: l.dropdown_year, onChange: w, value: n.getFullYear(), caption: p(n, { locale: u }), children: v.map(function(D) {
    return y.jsx("option", { value: D.getFullYear(), children: p(D, { locale: u }) }, D.getFullYear());
  }) });
}
function DI(e, t) {
  var n = He(e), r = n[0], a = n[1], o = t === void 0 ? r : t;
  return [o, a];
}
function EI(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, a = t || n || r || /* @__PURE__ */ new Date(), o = e.toDate, u = e.fromDate, l = e.numberOfMonths, d = l === void 0 ? 1 : l;
  if (o && Zo(o, a) < 0) {
    var f = -1 * (d - 1);
    a = ar(o, f);
  }
  return u && Zo(a, u) < 0 && (a = u), $n(a);
}
function _I() {
  var e = wt(), t = EI(e), n = DI(t, e.month), r = n[0], a = n[1], o = function(u) {
    var l;
    if (!e.disableNavigation) {
      var d = $n(u);
      a(d), (l = e.onMonthChange) === null || l === void 0 || l.call(e, d);
    }
  };
  return [r, o];
}
function CI(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, a = $n(e), o = $n(ar(a, r)), u = Zo(o, a), l = [], d = 0; d < u; d++) {
    var f = ar(a, d);
    l.push(f);
  }
  return n && (l = l.reverse()), l;
}
function TI(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, u = r ? o : 1, l = $n(e);
    if (!n)
      return ar(l, u);
    var d = Zo(n, e);
    if (!(d < o))
      return ar(l, u);
  }
}
function SI(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, u = r ? o : 1, l = $n(e);
    if (!n)
      return ar(l, -u);
    var d = Zo(l, n);
    if (!(d <= 0))
      return ar(l, -u);
  }
}
var y1 = pa(void 0);
function PI(e) {
  var t = wt(), n = _I(), r = n[0], a = n[1], o = CI(r, t), u = TI(r, t), l = SI(r, t), d = function(m) {
    return o.some(function(v) {
      return Ap(m, v);
    });
  }, f = function(m, v) {
    d(m) || (v && p1(m, v) ? a(ar(m, 1 + t.numberOfMonths * -1)) : a(m));
  }, p = {
    currentMonth: r,
    displayMonths: o,
    goToMonth: a,
    goToDate: f,
    previousMonth: l,
    nextMonth: u,
    isDateDisplayed: d
  };
  return y.jsx(y1.Provider, { value: p, children: e.children });
}
function ls() {
  var e = At(y1);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Qv(e) {
  var t, n = wt(), r = n.classNames, a = n.styles, o = n.components, u = ls().goToMonth, l = function(p) {
    u(ar(p, e.displayIndex ? -e.displayIndex : 0));
  }, d = (t = o == null ? void 0 : o.CaptionLabel) !== null && t !== void 0 ? t : g1, f = y.jsx(d, { id: e.id, displayMonth: e.displayMonth });
  return y.jsxs("div", { className: r.caption_dropdowns, style: a.caption_dropdowns, children: [y.jsx("div", { className: r.vhidden, children: f }), y.jsx(wI, { onChange: l, displayMonth: e.displayMonth }), y.jsx($I, { onChange: l, displayMonth: e.displayMonth })] });
}
function kI(e) {
  return y.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: y.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function OI(e) {
  return y.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: y.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Ju = Sl(function(e, t) {
  var n = wt(), r = n.classNames, a = n.styles, o = [r.button_reset, r.button];
  e.className && o.push(e.className);
  var u = o.join(" "), l = je(je({}, a.button_reset), a.button);
  return e.style && Object.assign(l, e.style), y.jsx("button", je({}, e, { ref: t, type: "button", className: u, style: l }));
});
function AI(e) {
  var t, n, r = wt(), a = r.dir, o = r.locale, u = r.classNames, l = r.styles, d = r.labels, f = d.labelPrevious, p = d.labelNext, m = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return y.jsx(y.Fragment, {});
  var v = f(e.previousMonth, { locale: o }), $ = [
    u.nav_button,
    u.nav_button_previous
  ].join(" "), _ = p(e.nextMonth, { locale: o }), x = [
    u.nav_button,
    u.nav_button_next
  ].join(" "), w = (t = m == null ? void 0 : m.IconRight) !== null && t !== void 0 ? t : OI, M = (n = m == null ? void 0 : m.IconLeft) !== null && n !== void 0 ? n : kI;
  return y.jsxs("div", { className: u.nav, style: l.nav, children: [!e.hidePrevious && y.jsx(Ju, { name: "previous-month", "aria-label": v, className: $, style: l.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: a === "rtl" ? y.jsx(w, { className: u.nav_icon, style: l.nav_icon }) : y.jsx(M, { className: u.nav_icon, style: l.nav_icon }) }), !e.hideNext && y.jsx(Ju, { name: "next-month", "aria-label": _, className: x, style: l.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: a === "rtl" ? y.jsx(M, { className: u.nav_icon, style: l.nav_icon }) : y.jsx(w, { className: u.nav_icon, style: l.nav_icon }) })] });
}
function ey(e) {
  var t = wt().numberOfMonths, n = ls(), r = n.previousMonth, a = n.nextMonth, o = n.goToMonth, u = n.displayMonths, l = u.findIndex(function(_) {
    return Ap(e.displayMonth, _);
  }), d = l === 0, f = l === u.length - 1, p = t > 1 && (d || !f), m = t > 1 && (f || !d), v = function() {
    r && o(r);
  }, $ = function() {
    a && o(a);
  };
  return y.jsx(AI, { displayMonth: e.displayMonth, hideNext: p, hidePrevious: m, nextMonth: a, previousMonth: r, onPreviousClick: v, onNextClick: $ });
}
function MI(e) {
  var t, n = wt(), r = n.classNames, a = n.disableNavigation, o = n.styles, u = n.captionLayout, l = n.components, d = (t = l == null ? void 0 : l.CaptionLabel) !== null && t !== void 0 ? t : g1, f;
  return a ? f = y.jsx(d, { id: e.id, displayMonth: e.displayMonth }) : u === "dropdown" ? f = y.jsx(Qv, { displayMonth: e.displayMonth, id: e.id }) : u === "dropdown-buttons" ? f = y.jsxs(y.Fragment, { children: [y.jsx(Qv, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), y.jsx(ey, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : f = y.jsxs(y.Fragment, { children: [y.jsx(d, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), y.jsx(ey, { displayMonth: e.displayMonth, id: e.id })] }), y.jsx("div", { className: r.caption, style: o.caption, children: f });
}
function II(e) {
  var t = wt(), n = t.footer, r = t.styles, a = t.classNames.tfoot;
  return n ? y.jsx("tfoot", { className: a, style: r.tfoot, children: y.jsx("tr", { children: y.jsx("td", { colSpan: 8, children: n }) }) }) : y.jsx(y.Fragment, {});
}
function NI(e, t, n) {
  for (var r = n ? Wa(/* @__PURE__ */ new Date()) : vr(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), a = [], o = 0; o < 7; o++) {
    var u = on(r, o);
    a.push(u);
  }
  return a;
}
function RI() {
  var e = wt(), t = e.classNames, n = e.styles, r = e.showWeekNumber, a = e.locale, o = e.weekStartsOn, u = e.ISOWeek, l = e.formatters.formatWeekdayName, d = e.labels.labelWeekday, f = NI(a, o, u);
  return y.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && y.jsx("td", { style: n.head_cell, className: t.head_cell }), f.map(function(p, m) {
    return y.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": d(p, { locale: a }), children: l(p, { locale: a }) }, m);
  })] });
}
function jI() {
  var e, t = wt(), n = t.classNames, r = t.styles, a = t.components, o = (e = a == null ? void 0 : a.HeadRow) !== null && e !== void 0 ? e : RI;
  return y.jsx("thead", { style: r.head, className: n.head, children: y.jsx(o, {}) });
}
function FI(e) {
  var t = wt(), n = t.locale, r = t.formatters.formatDay;
  return y.jsx(y.Fragment, { children: r(e.date, { locale: n }) });
}
var Mp = pa(void 0);
function BI(e) {
  if (!ss(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return y.jsx(Mp.Provider, { value: t, children: e.children });
  }
  return y.jsx(LI, { initialProps: e.initialProps, children: e.children });
}
function LI(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = t.min, o = t.max, u = function(f, p, m) {
    var v, $;
    (v = t.onDayClick) === null || v === void 0 || v.call(t, f, p, m);
    var _ = !!(p.selected && a && (r == null ? void 0 : r.length) === a);
    if (!_) {
      var x = !!(!p.selected && o && (r == null ? void 0 : r.length) === o);
      if (!x) {
        var w = r ? h1([], r) : [];
        if (p.selected) {
          var M = w.findIndex(function(D) {
            return wn(f, D);
          });
          w.splice(M, 1);
        } else
          w.push(f);
        ($ = t.onSelect) === null || $ === void 0 || $.call(t, w, f, p, m);
      }
    }
  }, l = {
    disabled: []
  };
  r && l.disabled.push(function(f) {
    var p = o && r.length > o - 1, m = r.some(function(v) {
      return wn(v, f);
    });
    return !!(p && !m);
  });
  var d = {
    selected: r,
    onDayClick: u,
    modifiers: l
  };
  return y.jsx(Mp.Provider, { value: d, children: n });
}
function Ip() {
  var e = At(Mp);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function VI(e, t) {
  var n = t || {}, r = n.from, a = n.to;
  return r && a ? wn(a, e) && wn(r, e) ? void 0 : wn(a, e) ? { from: a, to: void 0 } : wn(r, e) ? void 0 : Sf(r, e) ? { from: e, to: a } : { from: r, to: e } : a ? Sf(e, a) ? { from: a, to: e } : { from: e, to: a } : r ? p1(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Np = pa(void 0);
function WI(e) {
  if (!us(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return y.jsx(Np.Provider, { value: t, children: e.children });
  }
  return y.jsx(zI, { initialProps: e.initialProps, children: e.children });
}
function zI(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = r || {}, o = a.from, u = a.to, l = t.min, d = t.max, f = function($, _, x) {
    var w, M;
    (w = t.onDayClick) === null || w === void 0 || w.call(t, $, _, x);
    var D = VI($, r);
    (M = t.onSelect) === null || M === void 0 || M.call(t, D, $, _, x);
  }, p = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (o ? (p.range_start = [o], u ? (p.range_end = [u], wn(o, u) || (p.range_middle = [
    {
      after: o,
      before: u
    }
  ])) : p.range_end = [o]) : u && (p.range_start = [u], p.range_end = [u]), l && (o && !u && p.disabled.push({
    after: Td(o, l - 1),
    before: on(o, l - 1)
  }), o && u && p.disabled.push({
    after: o,
    before: on(o, l - 1)
  }), !o && u && p.disabled.push({
    after: Td(u, l - 1),
    before: on(u, l - 1)
  })), d) {
    if (o && !u && (p.disabled.push({
      before: on(o, -d + 1)
    }), p.disabled.push({
      after: on(o, d - 1)
    })), o && u) {
      var m = pr(u, o) + 1, v = d - m;
      p.disabled.push({
        before: Td(o, v)
      }), p.disabled.push({
        after: on(u, v)
      });
    }
    !o && u && (p.disabled.push({
      before: on(u, -d + 1)
    }), p.disabled.push({
      after: on(u, d - 1)
    }));
  }
  return y.jsx(Np.Provider, { value: { selected: r, onDayClick: f, modifiers: p }, children: n });
}
function Rp() {
  var e = At(Np);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Mu(e) {
  return Array.isArray(e) ? h1([], e) : e !== void 0 ? [e] : [];
}
function UI(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], a = n[1];
    t[r] = Mu(a);
  }), t;
}
var ir;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(ir || (ir = {}));
var HI = ir.Selected, kr = ir.Disabled, YI = ir.Hidden, KI = ir.Today, Pd = ir.RangeEnd, kd = ir.RangeMiddle, Od = ir.RangeStart, qI = ir.Outside;
function GI(e, t, n) {
  var r, a = (r = {}, r[HI] = Mu(e.selected), r[kr] = Mu(e.disabled), r[YI] = Mu(e.hidden), r[KI] = [e.today], r[Pd] = [], r[kd] = [], r[Od] = [], r[qI] = [], r);
  return e.fromDate && a[kr].push({ before: e.fromDate }), e.toDate && a[kr].push({ after: e.toDate }), ss(e) ? a[kr] = a[kr].concat(t.modifiers[kr]) : us(e) && (a[kr] = a[kr].concat(n.modifiers[kr]), a[Od] = n.modifiers[Od], a[kd] = n.modifiers[kd], a[Pd] = n.modifiers[Pd]), a;
}
var b1 = pa(void 0);
function ZI(e) {
  var t = wt(), n = Ip(), r = Rp(), a = GI(t, n, r), o = UI(t.modifiers), u = je(je({}, a), o);
  return y.jsx(b1.Provider, { value: u, children: e.children });
}
function x1() {
  var e = At(b1);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function XI(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function JI(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function QI(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function eN(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function tN(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function nN(e, t) {
  var n, r = t.from, a = t.to;
  if (r && a) {
    var o = pr(a, r) < 0;
    o && (n = [a, r], r = n[0], a = n[1]);
    var u = pr(e, r) >= 0 && pr(a, e) >= 0;
    return u;
  }
  return a ? wn(a, e) : r ? wn(r, e) : !1;
}
function rN(e) {
  return Pp(e);
}
function aN(e) {
  return Array.isArray(e) && e.every(Pp);
}
function iN(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (rN(n))
      return wn(e, n);
    if (aN(n))
      return n.includes(e);
    if (JI(n))
      return nN(e, n);
    if (tN(n))
      return n.dayOfWeek.includes(e.getDay());
    if (XI(n)) {
      var r = pr(n.before, e), a = pr(n.after, e), o = r > 0, u = a < 0, l = Sf(n.before, n.after);
      return l ? u && o : o || u;
    }
    return QI(n) ? pr(e, n.after) > 0 : eN(n) ? pr(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function jp(e, t, n) {
  var r = Object.keys(t).reduce(function(o, u) {
    var l = t[u];
    return iN(e, l) && o.push(u), o;
  }, []), a = {};
  return r.forEach(function(o) {
    return a[o] = !0;
  }), n && !Ap(e, n) && (a.outside = !0), a;
}
function oN(e, t) {
  for (var n = $n(e[0]), r = kp(e[e.length - 1]), a, o, u = n; u <= r; ) {
    var l = jp(u, t), d = !l.disabled && !l.hidden;
    if (!d) {
      u = on(u, 1);
      continue;
    }
    if (l.selected)
      return u;
    l.today && !o && (o = u), a || (a = u), u = on(u, 1);
  }
  return o || a;
}
var sN = 365;
function w1(e, t) {
  var n = t.moveBy, r = t.direction, a = t.context, o = t.modifiers, u = t.retry, l = u === void 0 ? { count: 0, lastFocused: e } : u, d = a.weekStartsOn, f = a.fromDate, p = a.toDate, m = a.locale, v = {
    day: on,
    week: Tf,
    month: ar,
    year: w6,
    startOfWeek: function(w) {
      return a.ISOWeek ? Wa(w) : vr(w, { locale: m, weekStartsOn: d });
    },
    endOfWeek: function(w) {
      return a.ISOWeek ? o1(w) : Op(w, { locale: m, weekStartsOn: d });
    }
  }, $ = v[n](e, r === "after" ? 1 : -1);
  r === "before" && f ? $ = $6([f, $]) : r === "after" && p && ($ = D6([p, $]));
  var _ = !0;
  if (o) {
    var x = jp($, o);
    _ = !x.disabled && !x.hidden;
  }
  return _ ? $ : l.count > sN ? l.lastFocused : w1($, {
    moveBy: n,
    direction: r,
    context: a,
    modifiers: o,
    retry: je(je({}, l), { count: l.count + 1 })
  });
}
var $1 = pa(void 0);
function uN(e) {
  var t = ls(), n = x1(), r = He(), a = r[0], o = r[1], u = He(), l = u[0], d = u[1], f = oN(t.displayMonths, n), p = a ?? (l && t.isDateDisplayed(l)) ? l : f, m = function() {
    d(a), o(void 0);
  }, v = function(w) {
    o(w);
  }, $ = wt(), _ = function(w, M) {
    if (a) {
      var D = w1(a, {
        moveBy: w,
        direction: M,
        context: $,
        modifiers: n
      });
      wn(a, D) || (t.goToDate(D, a), v(D));
    }
  }, x = {
    focusedDay: a,
    focusTarget: p,
    blur: m,
    focus: v,
    focusDayAfter: function() {
      return _("day", "after");
    },
    focusDayBefore: function() {
      return _("day", "before");
    },
    focusWeekAfter: function() {
      return _("week", "after");
    },
    focusWeekBefore: function() {
      return _("week", "before");
    },
    focusMonthBefore: function() {
      return _("month", "before");
    },
    focusMonthAfter: function() {
      return _("month", "after");
    },
    focusYearBefore: function() {
      return _("year", "before");
    },
    focusYearAfter: function() {
      return _("year", "after");
    },
    focusStartOfWeek: function() {
      return _("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return _("endOfWeek", "after");
    }
  };
  return y.jsx($1.Provider, { value: x, children: e.children });
}
function Fp() {
  var e = At($1);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function lN(e, t) {
  var n = x1(), r = jp(e, n, t);
  return r;
}
var Bp = pa(void 0);
function cN(e) {
  if (!Rl(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return y.jsx(Bp.Provider, { value: t, children: e.children });
  }
  return y.jsx(dN, { initialProps: e.initialProps, children: e.children });
}
function dN(e) {
  var t = e.initialProps, n = e.children, r = function(o, u, l) {
    var d, f, p;
    if ((d = t.onDayClick) === null || d === void 0 || d.call(t, o, u, l), u.selected && !t.required) {
      (f = t.onSelect) === null || f === void 0 || f.call(t, void 0, o, u, l);
      return;
    }
    (p = t.onSelect) === null || p === void 0 || p.call(t, o, o, u, l);
  }, a = {
    selected: t.selected,
    onDayClick: r
  };
  return y.jsx(Bp.Provider, { value: a, children: n });
}
function D1() {
  var e = At(Bp);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function fN(e, t) {
  var n = wt(), r = D1(), a = Ip(), o = Rp(), u = Fp(), l = u.focusDayAfter, d = u.focusDayBefore, f = u.focusWeekAfter, p = u.focusWeekBefore, m = u.blur, v = u.focus, $ = u.focusMonthBefore, _ = u.focusMonthAfter, x = u.focusYearBefore, w = u.focusYearAfter, M = u.focusStartOfWeek, D = u.focusEndOfWeek, C = function(N) {
    var B, J, A, W;
    Rl(n) ? (B = r.onDayClick) === null || B === void 0 || B.call(r, e, t, N) : ss(n) ? (J = a.onDayClick) === null || J === void 0 || J.call(a, e, t, N) : us(n) ? (A = o.onDayClick) === null || A === void 0 || A.call(o, e, t, N) : (W = n.onDayClick) === null || W === void 0 || W.call(n, e, t, N);
  }, P = function(N) {
    var B;
    v(e), (B = n.onDayFocus) === null || B === void 0 || B.call(n, e, t, N);
  }, S = function(N) {
    var B;
    m(), (B = n.onDayBlur) === null || B === void 0 || B.call(n, e, t, N);
  }, G = function(N) {
    var B;
    (B = n.onDayMouseEnter) === null || B === void 0 || B.call(n, e, t, N);
  }, Z = function(N) {
    var B;
    (B = n.onDayMouseLeave) === null || B === void 0 || B.call(n, e, t, N);
  }, k = function(N) {
    var B;
    (B = n.onDayPointerEnter) === null || B === void 0 || B.call(n, e, t, N);
  }, F = function(N) {
    var B;
    (B = n.onDayPointerLeave) === null || B === void 0 || B.call(n, e, t, N);
  }, R = function(N) {
    var B;
    (B = n.onDayTouchCancel) === null || B === void 0 || B.call(n, e, t, N);
  }, I = function(N) {
    var B;
    (B = n.onDayTouchEnd) === null || B === void 0 || B.call(n, e, t, N);
  }, j = function(N) {
    var B;
    (B = n.onDayTouchMove) === null || B === void 0 || B.call(n, e, t, N);
  }, E = function(N) {
    var B;
    (B = n.onDayTouchStart) === null || B === void 0 || B.call(n, e, t, N);
  }, L = function(N) {
    var B;
    (B = n.onDayKeyUp) === null || B === void 0 || B.call(n, e, t, N);
  }, H = function(N) {
    var B;
    switch (N.key) {
      case "ArrowLeft":
        N.preventDefault(), N.stopPropagation(), n.dir === "rtl" ? l() : d();
        break;
      case "ArrowRight":
        N.preventDefault(), N.stopPropagation(), n.dir === "rtl" ? d() : l();
        break;
      case "ArrowDown":
        N.preventDefault(), N.stopPropagation(), f();
        break;
      case "ArrowUp":
        N.preventDefault(), N.stopPropagation(), p();
        break;
      case "PageUp":
        N.preventDefault(), N.stopPropagation(), N.shiftKey ? x() : $();
        break;
      case "PageDown":
        N.preventDefault(), N.stopPropagation(), N.shiftKey ? w() : _();
        break;
      case "Home":
        N.preventDefault(), N.stopPropagation(), M();
        break;
      case "End":
        N.preventDefault(), N.stopPropagation(), D();
        break;
    }
    (B = n.onDayKeyDown) === null || B === void 0 || B.call(n, e, t, N);
  }, z = {
    onClick: C,
    onFocus: P,
    onBlur: S,
    onKeyDown: H,
    onKeyUp: L,
    onMouseEnter: G,
    onMouseLeave: Z,
    onPointerEnter: k,
    onPointerLeave: F,
    onTouchCancel: R,
    onTouchEnd: I,
    onTouchMove: j,
    onTouchStart: E
  };
  return z;
}
function pN() {
  var e = wt(), t = D1(), n = Ip(), r = Rp(), a = Rl(e) ? t.selected : ss(e) ? n.selected : us(e) ? r.selected : void 0;
  return a;
}
function hN(e) {
  return Object.values(ir).includes(e);
}
function mN(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var a = e.modifiersClassNames[r];
    if (a)
      n.push(a);
    else if (hN(r)) {
      var o = e.classNames["day_".concat(r)];
      o && n.push(o);
    }
  }), n;
}
function gN(e, t) {
  var n = je({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var a;
    n = je(je({}, n), (a = e.modifiersStyles) === null || a === void 0 ? void 0 : a[r]);
  }), n;
}
function vN(e, t, n) {
  var r, a, o, u = wt(), l = Fp(), d = lN(e, t), f = fN(e, d), p = pN(), m = !!(u.onDayClick || u.mode !== "default");
  Ue(function() {
    var G;
    d.outside || l.focusedDay && m && wn(l.focusedDay, e) && ((G = n.current) === null || G === void 0 || G.focus());
  }, [
    l.focusedDay,
    e,
    n,
    m,
    d.outside
  ]);
  var v = mN(u, d).join(" "), $ = gN(u, d), _ = !!(d.outside && !u.showOutsideDays || d.hidden), x = (o = (a = u.components) === null || a === void 0 ? void 0 : a.DayContent) !== null && o !== void 0 ? o : FI, w = y.jsx(x, { date: e, displayMonth: t, activeModifiers: d }), M = {
    style: $,
    className: v,
    children: w,
    role: "gridcell"
  }, D = l.focusTarget && wn(l.focusTarget, e) && !d.outside, C = l.focusedDay && wn(l.focusedDay, e), P = je(je(je({}, M), (r = { disabled: d.disabled, role: "gridcell" }, r["aria-selected"] = d.selected, r.tabIndex = C || D ? 0 : -1, r)), f), S = {
    isButton: m,
    isHidden: _,
    activeModifiers: d,
    selectedDays: p,
    buttonProps: P,
    divProps: M
  };
  return S;
}
function yN(e) {
  var t = Se(null), n = vN(e.date, e.displayMonth, t);
  return n.isHidden ? y.jsx("div", { role: "gridcell" }) : n.isButton ? y.jsx(Ju, je({ name: "day", ref: t }, n.buttonProps)) : y.jsx("div", je({}, n.divProps));
}
function bN(e) {
  var t = e.number, n = e.dates, r = wt(), a = r.onWeekNumberClick, o = r.styles, u = r.classNames, l = r.locale, d = r.labels.labelWeekNumber, f = r.formatters.formatWeekNumber, p = f(Number(t), { locale: l });
  if (!a)
    return y.jsx("span", { className: u.weeknumber, style: o.weeknumber, children: p });
  var m = d(Number(t), { locale: l }), v = function($) {
    a(t, n, $);
  };
  return y.jsx(Ju, { name: "week-number", "aria-label": m, className: u.weeknumber, style: o.weeknumber, onClick: v, children: p });
}
function xN(e) {
  var t, n, r = wt(), a = r.styles, o = r.classNames, u = r.showWeekNumber, l = r.components, d = (t = l == null ? void 0 : l.Day) !== null && t !== void 0 ? t : yN, f = (n = l == null ? void 0 : l.WeekNumber) !== null && n !== void 0 ? n : bN, p;
  return u && (p = y.jsx("td", { className: o.cell, style: a.cell, children: y.jsx(f, { number: e.weekNumber, dates: e.dates }) })), y.jsxs("tr", { className: o.row, style: a.row, children: [p, e.dates.map(function(m) {
    return y.jsx("td", { className: o.cell, style: a.cell, role: "presentation", children: y.jsx(d, { displayMonth: e.displayMonth, date: m }) }, wM(m));
  })] });
}
function ty(e, t, n) {
  for (var r = n != null && n.ISOWeek ? o1(t) : Op(t, n), a = n != null && n.ISOWeek ? Wa(e) : vr(e, n), o = pr(r, a), u = [], l = 0; l <= o; l++)
    u.push(on(a, l));
  var d = u.reduce(function(f, p) {
    var m = n != null && n.ISOWeek ? l1(p) : d1(p, n), v = f.find(function($) {
      return $.weekNumber === m;
    });
    return v ? (v.dates.push(p), f) : (f.push({
      weekNumber: m,
      dates: [p]
    }), f);
  }, []);
  return d;
}
function wN(e, t) {
  var n = ty($n(e), kp(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = DM(e, t);
    if (r < 6) {
      var a = n[n.length - 1], o = a.dates[a.dates.length - 1], u = Tf(o, 6 - r), l = ty(Tf(o, 1), u, t);
      n.push.apply(n, l);
    }
  }
  return n;
}
function $N(e) {
  var t, n, r, a = wt(), o = a.locale, u = a.classNames, l = a.styles, d = a.hideHead, f = a.fixedWeeks, p = a.components, m = a.weekStartsOn, v = a.firstWeekContainsDate, $ = a.ISOWeek, _ = wN(e.displayMonth, {
    useFixedWeeks: !!f,
    ISOWeek: $,
    locale: o,
    weekStartsOn: m,
    firstWeekContainsDate: v
  }), x = (t = p == null ? void 0 : p.Head) !== null && t !== void 0 ? t : jI, w = (n = p == null ? void 0 : p.Row) !== null && n !== void 0 ? n : xN, M = (r = p == null ? void 0 : p.Footer) !== null && r !== void 0 ? r : II;
  return y.jsxs("table", { id: e.id, className: u.table, style: l.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!d && y.jsx(x, {}), y.jsx("tbody", { className: u.tbody, style: l.tbody, children: _.map(function(D) {
    return y.jsx(w, { displayMonth: e.displayMonth, dates: D.dates, weekNumber: D.weekNumber }, D.weekNumber);
  }) }), y.jsx(M, { displayMonth: e.displayMonth })] });
}
function DN() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var EN = DN() ? oa : Ue, Ad = !1, _N = 0;
function ny() {
  return "react-day-picker-".concat(++_N);
}
function CN(e) {
  var t, n = e ?? (Ad ? ny() : null), r = He(n), a = r[0], o = r[1];
  return EN(function() {
    a === null && o(ny());
  }, []), Ue(function() {
    Ad === !1 && (Ad = !0);
  }, []), (t = e ?? a) !== null && t !== void 0 ? t : void 0;
}
function TN(e) {
  var t, n, r = wt(), a = r.dir, o = r.classNames, u = r.styles, l = r.components, d = ls().displayMonths, f = CN(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), p = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, m = [o.month], v = u.month, $ = e.displayIndex === 0, _ = e.displayIndex === d.length - 1, x = !$ && !_;
  a === "rtl" && (t = [$, _], _ = t[0], $ = t[1]), $ && (m.push(o.caption_start), v = je(je({}, v), u.caption_start)), _ && (m.push(o.caption_end), v = je(je({}, v), u.caption_end)), x && (m.push(o.caption_between), v = je(je({}, v), u.caption_between));
  var w = (n = l == null ? void 0 : l.Caption) !== null && n !== void 0 ? n : MI;
  return y.jsxs("div", { className: m.join(" "), style: v, children: [y.jsx(w, { id: f, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), y.jsx($N, { id: p, "aria-labelledby": f, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function SN(e) {
  var t = wt(), n = t.classNames, r = t.styles;
  return y.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function PN(e) {
  var t, n, r = e.initialProps, a = wt(), o = Fp(), u = ls(), l = He(!1), d = l[0], f = l[1];
  Ue(function() {
    a.initialFocus && o.focusTarget && (d || (o.focus(o.focusTarget), f(!0)));
  }, [
    a.initialFocus,
    d,
    o.focus,
    o.focusTarget,
    o
  ]);
  var p = [a.classNames.root, a.className];
  a.numberOfMonths > 1 && p.push(a.classNames.multiple_months), a.showWeekNumber && p.push(a.classNames.with_weeknumber);
  var m = je(je({}, a.styles.root), a.style), v = Object.keys(r).filter(function(_) {
    return _.startsWith("data-");
  }).reduce(function(_, x) {
    var w;
    return je(je({}, _), (w = {}, w[x] = r[x], w));
  }, {}), $ = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : SN;
  return y.jsx("div", je({ className: p.join(" "), style: m, dir: a.dir, id: a.id, nonce: r.nonce, title: r.title, lang: r.lang }, v, { children: y.jsx($, { children: u.displayMonths.map(function(_, x) {
    return y.jsx(TN, { displayIndex: x, displayMonth: _ }, x);
  }) }) }));
}
function kN(e) {
  var t = e.children, n = eI(e, ["children"]);
  return y.jsx(bI, { initialProps: n, children: y.jsx(PI, { children: y.jsx(cN, { initialProps: n, children: y.jsx(BI, { initialProps: n, children: y.jsx(WI, { initialProps: n, children: y.jsx(ZI, { children: y.jsx(uN, { children: t }) }) }) }) }) }) });
}
function ON(e) {
  return y.jsx(kN, je({}, e, { children: y.jsx(PN, { initialProps: e }) }));
}
function Qn(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Ge() {
  return Ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ge.apply(null, arguments);
}
function kf(e, t) {
  return kf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, kf(e, t);
}
function AN(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, kf(e, t);
}
var Of = { exports: {} }, pu = { exports: {} }, lt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ry;
function MN() {
  if (ry) return lt;
  ry = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function C(S) {
    if (typeof S == "object" && S !== null) {
      var G = S.$$typeof;
      switch (G) {
        case t:
          switch (S = S.type, S) {
            case d:
            case f:
            case r:
            case o:
            case a:
            case m:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case l:
                case p:
                case _:
                case $:
                case u:
                  return S;
                default:
                  return G;
              }
          }
        case n:
          return G;
      }
    }
  }
  function P(S) {
    return C(S) === f;
  }
  return lt.AsyncMode = d, lt.ConcurrentMode = f, lt.ContextConsumer = l, lt.ContextProvider = u, lt.Element = t, lt.ForwardRef = p, lt.Fragment = r, lt.Lazy = _, lt.Memo = $, lt.Portal = n, lt.Profiler = o, lt.StrictMode = a, lt.Suspense = m, lt.isAsyncMode = function(S) {
    return P(S) || C(S) === d;
  }, lt.isConcurrentMode = P, lt.isContextConsumer = function(S) {
    return C(S) === l;
  }, lt.isContextProvider = function(S) {
    return C(S) === u;
  }, lt.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, lt.isForwardRef = function(S) {
    return C(S) === p;
  }, lt.isFragment = function(S) {
    return C(S) === r;
  }, lt.isLazy = function(S) {
    return C(S) === _;
  }, lt.isMemo = function(S) {
    return C(S) === $;
  }, lt.isPortal = function(S) {
    return C(S) === n;
  }, lt.isProfiler = function(S) {
    return C(S) === o;
  }, lt.isStrictMode = function(S) {
    return C(S) === a;
  }, lt.isSuspense = function(S) {
    return C(S) === m;
  }, lt.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === f || S === o || S === a || S === m || S === v || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === $ || S.$$typeof === u || S.$$typeof === l || S.$$typeof === p || S.$$typeof === w || S.$$typeof === M || S.$$typeof === D || S.$$typeof === x);
  }, lt.typeOf = C, lt;
}
var ct = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ay;
function IN() {
  return ay || (ay = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function C(pe) {
      return typeof pe == "string" || typeof pe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      pe === r || pe === f || pe === o || pe === a || pe === m || pe === v || typeof pe == "object" && pe !== null && (pe.$$typeof === _ || pe.$$typeof === $ || pe.$$typeof === u || pe.$$typeof === l || pe.$$typeof === p || pe.$$typeof === w || pe.$$typeof === M || pe.$$typeof === D || pe.$$typeof === x);
    }
    function P(pe) {
      if (typeof pe == "object" && pe !== null) {
        var Fe = pe.$$typeof;
        switch (Fe) {
          case t:
            var we = pe.type;
            switch (we) {
              case d:
              case f:
              case r:
              case o:
              case a:
              case m:
                return we;
              default:
                var rt = we && we.$$typeof;
                switch (rt) {
                  case l:
                  case p:
                  case _:
                  case $:
                  case u:
                    return rt;
                  default:
                    return Fe;
                }
            }
          case n:
            return Fe;
        }
      }
    }
    var S = d, G = f, Z = l, k = u, F = t, R = p, I = r, j = _, E = $, L = n, H = o, z = a, N = m, B = !1;
    function J(pe) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(pe) || P(pe) === d;
    }
    function A(pe) {
      return P(pe) === f;
    }
    function W(pe) {
      return P(pe) === l;
    }
    function re(pe) {
      return P(pe) === u;
    }
    function ue(pe) {
      return typeof pe == "object" && pe !== null && pe.$$typeof === t;
    }
    function ce(pe) {
      return P(pe) === p;
    }
    function ye(pe) {
      return P(pe) === r;
    }
    function ge(pe) {
      return P(pe) === _;
    }
    function $e(pe) {
      return P(pe) === $;
    }
    function oe(pe) {
      return P(pe) === n;
    }
    function xe(pe) {
      return P(pe) === o;
    }
    function be(pe) {
      return P(pe) === a;
    }
    function Ce(pe) {
      return P(pe) === m;
    }
    ct.AsyncMode = S, ct.ConcurrentMode = G, ct.ContextConsumer = Z, ct.ContextProvider = k, ct.Element = F, ct.ForwardRef = R, ct.Fragment = I, ct.Lazy = j, ct.Memo = E, ct.Portal = L, ct.Profiler = H, ct.StrictMode = z, ct.Suspense = N, ct.isAsyncMode = J, ct.isConcurrentMode = A, ct.isContextConsumer = W, ct.isContextProvider = re, ct.isElement = ue, ct.isForwardRef = ce, ct.isFragment = ye, ct.isLazy = ge, ct.isMemo = $e, ct.isPortal = oe, ct.isProfiler = xe, ct.isStrictMode = be, ct.isSuspense = Ce, ct.isValidElementType = C, ct.typeOf = P;
  }()), ct;
}
var iy;
function E1() {
  return iy || (iy = 1, process.env.NODE_ENV === "production" ? pu.exports = MN() : pu.exports = IN()), pu.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Md, oy;
function NN() {
  if (oy) return Md;
  oy = 1;
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
      for (var u = {}, l = 0; l < 10; l++)
        u["_" + String.fromCharCode(l)] = l;
      var d = Object.getOwnPropertyNames(u).map(function(p) {
        return u[p];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Md = a() ? Object.assign : function(o, u) {
    for (var l, d = r(o), f, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var m in l)
        t.call(l, m) && (d[m] = l[m]);
      if (e) {
        f = e(l);
        for (var v = 0; v < f.length; v++)
          n.call(l, f[v]) && (d[f[v]] = l[f[v]]);
      }
    }
    return d;
  }, Md;
}
var Id, sy;
function Lp() {
  if (sy) return Id;
  sy = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Id = e, Id;
}
var Nd, uy;
function _1() {
  return uy || (uy = 1, Nd = Function.call.bind(Object.prototype.hasOwnProperty)), Nd;
}
var Rd, ly;
function RN() {
  if (ly) return Rd;
  ly = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Lp(), n = {}, r = _1();
    e = function(o) {
      var u = "Warning: " + o;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function a(o, u, l, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in o)
        if (r(o, p)) {
          var m;
          try {
            if (typeof o[p] != "function") {
              var v = Error(
                (d || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            m = o[p](u, p, d, l, null, t);
          } catch (_) {
            m = _;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var $ = f ? f() : "";
            e(
              "Failed " + l + " type: " + m.message + ($ ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Rd = a, Rd;
}
var jd, cy;
function jN() {
  if (cy) return jd;
  cy = 1;
  var e = E1(), t = NN(), n = Lp(), r = _1(), a = RN(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var d = "Warning: " + l;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return jd = function(l, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(A) {
      var W = A && (f && A[f] || A[p]);
      if (typeof W == "function")
        return W;
    }
    var v = "<<anonymous>>", $ = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: D(),
      arrayOf: C,
      element: P(),
      elementType: S(),
      instanceOf: G,
      node: R(),
      objectOf: k,
      oneOf: Z,
      oneOfType: F,
      shape: j,
      exact: E
    };
    function _(A, W) {
      return A === W ? A !== 0 || 1 / A === 1 / W : A !== A && W !== W;
    }
    function x(A, W) {
      this.message = A, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function w(A) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, re = 0;
      function ue(ye, ge, $e, oe, xe, be, Ce) {
        if (oe = oe || v, be = be || $e, Ce !== n) {
          if (d) {
            var pe = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw pe.name = "Invariant Violation", pe;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Fe = oe + ":" + $e;
            !W[Fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + be + "` prop on `" + oe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[Fe] = !0, re++);
          }
        }
        return ge[$e] == null ? ye ? ge[$e] === null ? new x("The " + xe + " `" + be + "` is marked as required " + ("in `" + oe + "`, but its value is `null`.")) : new x("The " + xe + " `" + be + "` is marked as required in " + ("`" + oe + "`, but its value is `undefined`.")) : null : A(ge, $e, oe, xe, be);
      }
      var ce = ue.bind(null, !1);
      return ce.isRequired = ue.bind(null, !0), ce;
    }
    function M(A) {
      function W(re, ue, ce, ye, ge, $e) {
        var oe = re[ue], xe = z(oe);
        if (xe !== A) {
          var be = N(oe);
          return new x(
            "Invalid " + ye + " `" + ge + "` of type " + ("`" + be + "` supplied to `" + ce + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return w(W);
    }
    function D() {
      return w(u);
    }
    function C(A) {
      function W(re, ue, ce, ye, ge) {
        if (typeof A != "function")
          return new x("Property `" + ge + "` of component `" + ce + "` has invalid PropType notation inside arrayOf.");
        var $e = re[ue];
        if (!Array.isArray($e)) {
          var oe = z($e);
          return new x("Invalid " + ye + " `" + ge + "` of type " + ("`" + oe + "` supplied to `" + ce + "`, expected an array."));
        }
        for (var xe = 0; xe < $e.length; xe++) {
          var be = A($e, xe, ce, ye, ge + "[" + xe + "]", n);
          if (be instanceof Error)
            return be;
        }
        return null;
      }
      return w(W);
    }
    function P() {
      function A(W, re, ue, ce, ye) {
        var ge = W[re];
        if (!l(ge)) {
          var $e = z(ge);
          return new x("Invalid " + ce + " `" + ye + "` of type " + ("`" + $e + "` supplied to `" + ue + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(A);
    }
    function S() {
      function A(W, re, ue, ce, ye) {
        var ge = W[re];
        if (!e.isValidElementType(ge)) {
          var $e = z(ge);
          return new x("Invalid " + ce + " `" + ye + "` of type " + ("`" + $e + "` supplied to `" + ue + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(A);
    }
    function G(A) {
      function W(re, ue, ce, ye, ge) {
        if (!(re[ue] instanceof A)) {
          var $e = A.name || v, oe = J(re[ue]);
          return new x("Invalid " + ye + " `" + ge + "` of type " + ("`" + oe + "` supplied to `" + ce + "`, expected ") + ("instance of `" + $e + "`."));
        }
        return null;
      }
      return w(W);
    }
    function Z(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), u;
      function W(re, ue, ce, ye, ge) {
        for (var $e = re[ue], oe = 0; oe < A.length; oe++)
          if (_($e, A[oe]))
            return null;
        var xe = JSON.stringify(A, function(Ce, pe) {
          var Fe = N(pe);
          return Fe === "symbol" ? String(pe) : pe;
        });
        return new x("Invalid " + ye + " `" + ge + "` of value `" + String($e) + "` " + ("supplied to `" + ce + "`, expected one of " + xe + "."));
      }
      return w(W);
    }
    function k(A) {
      function W(re, ue, ce, ye, ge) {
        if (typeof A != "function")
          return new x("Property `" + ge + "` of component `" + ce + "` has invalid PropType notation inside objectOf.");
        var $e = re[ue], oe = z($e);
        if (oe !== "object")
          return new x("Invalid " + ye + " `" + ge + "` of type " + ("`" + oe + "` supplied to `" + ce + "`, expected an object."));
        for (var xe in $e)
          if (r($e, xe)) {
            var be = A($e, xe, ce, ye, ge + "." + xe, n);
            if (be instanceof Error)
              return be;
          }
        return null;
      }
      return w(W);
    }
    function F(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var W = 0; W < A.length; W++) {
        var re = A[W];
        if (typeof re != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(re) + " at index " + W + "."
          ), u;
      }
      function ue(ce, ye, ge, $e, oe) {
        for (var xe = [], be = 0; be < A.length; be++) {
          var Ce = A[be], pe = Ce(ce, ye, ge, $e, oe, n);
          if (pe == null)
            return null;
          pe.data && r(pe.data, "expectedType") && xe.push(pe.data.expectedType);
        }
        var Fe = xe.length > 0 ? ", expected one of type [" + xe.join(", ") + "]" : "";
        return new x("Invalid " + $e + " `" + oe + "` supplied to " + ("`" + ge + "`" + Fe + "."));
      }
      return w(ue);
    }
    function R() {
      function A(W, re, ue, ce, ye) {
        return L(W[re]) ? null : new x("Invalid " + ce + " `" + ye + "` supplied to " + ("`" + ue + "`, expected a ReactNode."));
      }
      return w(A);
    }
    function I(A, W, re, ue, ce) {
      return new x(
        (A || "React class") + ": " + W + " type `" + re + "." + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ce + "`."
      );
    }
    function j(A) {
      function W(re, ue, ce, ye, ge) {
        var $e = re[ue], oe = z($e);
        if (oe !== "object")
          return new x("Invalid " + ye + " `" + ge + "` of type `" + oe + "` " + ("supplied to `" + ce + "`, expected `object`."));
        for (var xe in A) {
          var be = A[xe];
          if (typeof be != "function")
            return I(ce, ye, ge, xe, N(be));
          var Ce = be($e, xe, ce, ye, ge + "." + xe, n);
          if (Ce)
            return Ce;
        }
        return null;
      }
      return w(W);
    }
    function E(A) {
      function W(re, ue, ce, ye, ge) {
        var $e = re[ue], oe = z($e);
        if (oe !== "object")
          return new x("Invalid " + ye + " `" + ge + "` of type `" + oe + "` " + ("supplied to `" + ce + "`, expected `object`."));
        var xe = t({}, re[ue], A);
        for (var be in xe) {
          var Ce = A[be];
          if (r(A, be) && typeof Ce != "function")
            return I(ce, ye, ge, be, N(Ce));
          if (!Ce)
            return new x(
              "Invalid " + ye + " `" + ge + "` key `" + be + "` supplied to `" + ce + "`.\nBad object: " + JSON.stringify(re[ue], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var pe = Ce($e, be, ce, ye, ge + "." + be, n);
          if (pe)
            return pe;
        }
        return null;
      }
      return w(W);
    }
    function L(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(L);
          if (A === null || l(A))
            return !0;
          var W = m(A);
          if (W) {
            var re = W.call(A), ue;
            if (W !== A.entries) {
              for (; !(ue = re.next()).done; )
                if (!L(ue.value))
                  return !1;
            } else
              for (; !(ue = re.next()).done; ) {
                var ce = ue.value;
                if (ce && !L(ce[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function H(A, W) {
      return A === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function z(A) {
      var W = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : H(W, A) ? "symbol" : W;
    }
    function N(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var W = z(A);
      if (W === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function B(A) {
      var W = N(A);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function J(A) {
      return !A.constructor || !A.constructor.name ? v : A.constructor.name;
    }
    return $.checkPropTypes = a, $.resetWarningCache = a.resetWarningCache, $.PropTypes = $, $;
  }, jd;
}
var Fd, dy;
function FN() {
  if (dy) return Fd;
  dy = 1;
  var e = Lp();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Fd = function() {
    function r(u, l, d, f, p, m) {
      if (m !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
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
  }, Fd;
}
if (process.env.NODE_ENV !== "production") {
  var BN = E1(), LN = !0;
  Of.exports = jN()(BN.isElement, LN);
} else
  Of.exports = FN()();
var VN = Of.exports;
const fe = /* @__PURE__ */ Pl(VN);
var Af = { exports: {} }, dt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fy;
function WN() {
  if (fy) return dt;
  fy = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), _;
  _ = Symbol.for("react.module.reference");
  function x(w) {
    if (typeof w == "object" && w !== null) {
      var M = w.$$typeof;
      switch (M) {
        case e:
          switch (w = w.type, w) {
            case n:
            case a:
            case r:
            case f:
            case p:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case l:
                case u:
                case d:
                case v:
                case m:
                case o:
                  return w;
                default:
                  return M;
              }
          }
        case t:
          return M;
      }
    }
  }
  return dt.ContextConsumer = u, dt.ContextProvider = o, dt.Element = e, dt.ForwardRef = d, dt.Fragment = n, dt.Lazy = v, dt.Memo = m, dt.Portal = t, dt.Profiler = a, dt.StrictMode = r, dt.Suspense = f, dt.SuspenseList = p, dt.isAsyncMode = function() {
    return !1;
  }, dt.isConcurrentMode = function() {
    return !1;
  }, dt.isContextConsumer = function(w) {
    return x(w) === u;
  }, dt.isContextProvider = function(w) {
    return x(w) === o;
  }, dt.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, dt.isForwardRef = function(w) {
    return x(w) === d;
  }, dt.isFragment = function(w) {
    return x(w) === n;
  }, dt.isLazy = function(w) {
    return x(w) === v;
  }, dt.isMemo = function(w) {
    return x(w) === m;
  }, dt.isPortal = function(w) {
    return x(w) === t;
  }, dt.isProfiler = function(w) {
    return x(w) === a;
  }, dt.isStrictMode = function(w) {
    return x(w) === r;
  }, dt.isSuspense = function(w) {
    return x(w) === f;
  }, dt.isSuspenseList = function(w) {
    return x(w) === p;
  }, dt.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === a || w === r || w === f || w === p || w === $ || typeof w == "object" && w !== null && (w.$$typeof === v || w.$$typeof === m || w.$$typeof === o || w.$$typeof === u || w.$$typeof === d || w.$$typeof === _ || w.getModuleId !== void 0);
  }, dt.typeOf = x, dt;
}
var ft = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var py;
function zN() {
  return py || (py = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), _ = !1, x = !1, w = !1, M = !1, D = !1, C;
    C = Symbol.for("react.module.reference");
    function P(we) {
      return !!(typeof we == "string" || typeof we == "function" || we === n || we === a || D || we === r || we === f || we === p || M || we === $ || _ || x || w || typeof we == "object" && we !== null && (we.$$typeof === v || we.$$typeof === m || we.$$typeof === o || we.$$typeof === u || we.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      we.$$typeof === C || we.getModuleId !== void 0));
    }
    function S(we) {
      if (typeof we == "object" && we !== null) {
        var rt = we.$$typeof;
        switch (rt) {
          case e:
            var ot = we.type;
            switch (ot) {
              case n:
              case a:
              case r:
              case f:
              case p:
                return ot;
              default:
                var Je = ot && ot.$$typeof;
                switch (Je) {
                  case l:
                  case u:
                  case d:
                  case v:
                  case m:
                  case o:
                    return Je;
                  default:
                    return rt;
                }
            }
          case t:
            return rt;
        }
      }
    }
    var G = u, Z = o, k = e, F = d, R = n, I = v, j = m, E = t, L = a, H = r, z = f, N = p, B = !1, J = !1;
    function A(we) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(we) {
      return J || (J = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(we) {
      return S(we) === u;
    }
    function ue(we) {
      return S(we) === o;
    }
    function ce(we) {
      return typeof we == "object" && we !== null && we.$$typeof === e;
    }
    function ye(we) {
      return S(we) === d;
    }
    function ge(we) {
      return S(we) === n;
    }
    function $e(we) {
      return S(we) === v;
    }
    function oe(we) {
      return S(we) === m;
    }
    function xe(we) {
      return S(we) === t;
    }
    function be(we) {
      return S(we) === a;
    }
    function Ce(we) {
      return S(we) === r;
    }
    function pe(we) {
      return S(we) === f;
    }
    function Fe(we) {
      return S(we) === p;
    }
    ft.ContextConsumer = G, ft.ContextProvider = Z, ft.Element = k, ft.ForwardRef = F, ft.Fragment = R, ft.Lazy = I, ft.Memo = j, ft.Portal = E, ft.Profiler = L, ft.StrictMode = H, ft.Suspense = z, ft.SuspenseList = N, ft.isAsyncMode = A, ft.isConcurrentMode = W, ft.isContextConsumer = re, ft.isContextProvider = ue, ft.isElement = ce, ft.isForwardRef = ye, ft.isFragment = ge, ft.isLazy = $e, ft.isMemo = oe, ft.isPortal = xe, ft.isProfiler = be, ft.isStrictMode = Ce, ft.isSuspense = pe, ft.isSuspenseList = Fe, ft.isValidElementType = P, ft.typeOf = S;
  }()), ft;
}
process.env.NODE_ENV === "production" ? Af.exports = WN() : Af.exports = zN();
var hy = Af.exports;
const my = (e) => typeof e == "object" && e != null && e.nodeType === 1, gy = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", hu = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return gy(n.overflowY, t) || gy(n.overflowX, t) || ((r) => {
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
}, mu = (e, t, n, r, a, o, u, l) => o < e && u > t || o > e && u < t ? 0 : o <= e && l <= n || u >= t && l >= n ? o - e - r : u > t && l < n || o < e && l > n ? u - t + a : 0, UN = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, HN = (e, t) => {
  var n, r, a, o;
  if (typeof document > "u") return [];
  const { scrollMode: u, block: l, inline: d, boundary: f, skipOverflowHiddenElements: p } = t, m = typeof f == "function" ? f : (z) => z !== f;
  if (!my(e)) throw new TypeError("Invalid target");
  const v = document.scrollingElement || document.documentElement, $ = [];
  let _ = e;
  for (; my(_) && m(_); ) {
    if (_ = UN(_), _ === v) {
      $.push(_);
      break;
    }
    _ != null && _ === document.body && hu(_) && !hu(document.documentElement) || _ != null && hu(_, p) && $.push(_);
  }
  const x = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (o = (a = window.visualViewport) == null ? void 0 : a.height) != null ? o : innerHeight, { scrollX: M, scrollY: D } = window, { height: C, width: P, top: S, right: G, bottom: Z, left: k } = e.getBoundingClientRect(), { top: F, right: R, bottom: I, left: j } = ((z) => {
    const N = window.getComputedStyle(z);
    return { top: parseFloat(N.scrollMarginTop) || 0, right: parseFloat(N.scrollMarginRight) || 0, bottom: parseFloat(N.scrollMarginBottom) || 0, left: parseFloat(N.scrollMarginLeft) || 0 };
  })(e);
  let E = l === "start" || l === "nearest" ? S - F : l === "end" ? Z + I : S + C / 2 - F + I, L = d === "center" ? k + P / 2 - j + R : d === "end" ? G + R : k - j;
  const H = [];
  for (let z = 0; z < $.length; z++) {
    const N = $[z], { height: B, width: J, top: A, right: W, bottom: re, left: ue } = N.getBoundingClientRect();
    if (u === "if-needed" && S >= 0 && k >= 0 && Z <= w && G <= x && (N === v && !hu(N) || S >= A && Z <= re && k >= ue && G <= W)) return H;
    const ce = getComputedStyle(N), ye = parseInt(ce.borderLeftWidth, 10), ge = parseInt(ce.borderTopWidth, 10), $e = parseInt(ce.borderRightWidth, 10), oe = parseInt(ce.borderBottomWidth, 10);
    let xe = 0, be = 0;
    const Ce = "offsetWidth" in N ? N.offsetWidth - N.clientWidth - ye - $e : 0, pe = "offsetHeight" in N ? N.offsetHeight - N.clientHeight - ge - oe : 0, Fe = "offsetWidth" in N ? N.offsetWidth === 0 ? 0 : J / N.offsetWidth : 0, we = "offsetHeight" in N ? N.offsetHeight === 0 ? 0 : B / N.offsetHeight : 0;
    if (v === N) xe = l === "start" ? E : l === "end" ? E - w : l === "nearest" ? mu(D, D + w, w, ge, oe, D + E, D + E + C, C) : E - w / 2, be = d === "start" ? L : d === "center" ? L - x / 2 : d === "end" ? L - x : mu(M, M + x, x, ye, $e, M + L, M + L + P, P), xe = Math.max(0, xe + D), be = Math.max(0, be + M);
    else {
      xe = l === "start" ? E - A - ge : l === "end" ? E - re + oe + pe : l === "nearest" ? mu(A, re, B, ge, oe + pe, E, E + C, C) : E - (A + B / 2) + pe / 2, be = d === "start" ? L - ue - ye : d === "center" ? L - (ue + J / 2) + Ce / 2 : d === "end" ? L - W + $e + Ce : mu(ue, W, J, ye, $e + Ce, L, L + P, P);
      const { scrollLeft: rt, scrollTop: ot } = N;
      xe = we === 0 ? 0 : Math.max(0, Math.min(ot + xe / we, N.scrollHeight - B / we + pe)), be = Fe === 0 ? 0 : Math.max(0, Math.min(rt + be / Fe, N.scrollWidth - J / Fe + Ce)), E += ot - xe, L += rt - be;
    }
    H.push({ el: N, top: xe, left: be });
  }
  return H;
};
var YN = 0;
function vy(e) {
  return typeof e == "function" ? e : bn;
}
function bn() {
}
function C1(e, t) {
  if (e) {
    var n = HN(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    n.forEach(function(r) {
      var a = r.el, o = r.top, u = r.left;
      a.scrollTop = o, a.scrollLeft = u;
    });
  }
}
function yy(e, t, n) {
  var r = e === t || t instanceof n.Node && e.contains && e.contains(t);
  return r;
}
function jl(e, t) {
  var n;
  function r() {
    n && clearTimeout(n);
  }
  function a() {
    for (var o = arguments.length, u = new Array(o), l = 0; l < o; l++)
      u[l] = arguments[l];
    r(), n = setTimeout(function() {
      n = null, e.apply(void 0, u);
    }, t);
  }
  return a.cancel = r, a;
}
function It() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return t.some(function(l) {
      return l && l.apply(void 0, [r].concat(o)), r.preventDownshiftDefault || r.hasOwnProperty("nativeEvent") && r.nativeEvent.preventDownshiftDefault;
    });
  };
}
function Fa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    t.forEach(function(a) {
      typeof a == "function" ? a(r) : a && (a.current = r);
    });
  };
}
function T1() {
  return String(YN++);
}
function KN(e) {
  var t = e.isOpen, n = e.resultCount, r = e.previousResultCount;
  return t ? n ? n !== r ? n + " result" + (n === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function by(e, t) {
  return e = Array.isArray(e) ? (
    /* istanbul ignore next (preact) */
    e[0]
  ) : e, !e && t ? t : e;
}
function S1(e) {
  return typeof e.type == "string";
}
function P1(e) {
  return e.props;
}
function qN(e, t) {
  console.error('The property "' + t + '" is required in "' + e + '"');
}
var GN = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function gu(e) {
  e === void 0 && (e = {});
  var t = {};
  return GN.forEach(function(n) {
    e.hasOwnProperty(n) && (t[n] = e[n]);
  }), t;
}
function Qu(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(n, r) {
    return n[r] = Mf(t, r) ? t[r] : e[r], n;
  }, {});
}
function Mf(e, t) {
  return e[t] !== void 0;
}
function Xo(e) {
  var t = e.key, n = e.keyCode;
  return n >= 37 && n <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function ZN(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Na(e, t, n, r, a) {
  a === void 0 && (a = !1);
  var o = n.length;
  if (o === 0)
    return -1;
  var u = o - 1;
  (typeof e != "number" || e < 0 || e > u) && (e = t > 0 ? -1 : u + 1);
  var l = e + t;
  l < 0 ? l = a ? u : 0 : l > u && (l = a ? 0 : u);
  var d = Vi(l, t < 0, n, r, a);
  return d === -1 ? e >= o ? -1 : e : d;
}
function Vi(e, t, n, r, a) {
  a === void 0 && (a = !1);
  var o = n.length;
  if (t) {
    for (var u = e; u >= 0; u--)
      if (!r(n[u], u))
        return u;
  } else
    for (var l = e; l < o; l++)
      if (!r(n[l], l))
        return l;
  return a ? Vi(t ? o - 1 : 0, t, n, r) : -1;
}
function el(e, t, n, r) {
  return r === void 0 && (r = !0), n && t.some(function(a) {
    return a && (yy(a, e, n) || r && yy(a, n.document.activeElement, n));
  });
}
var Vp = bn;
process.env.NODE_ENV !== "production" && (Vp = function(t, n, r) {
  var a = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
  Object.keys(t).forEach(function(o) {
    n[o] !== void 0 && r[o] === void 0 ? console.error('downshift: A component has changed the controlled prop "' + o + '" to be uncontrolled. ' + a) : n[o] === void 0 && r[o] !== void 0 && console.error('downshift: A component has changed the uncontrolled prop "' + o + '" to be controlled. ' + a);
  });
});
var XN = jl(function(e) {
  k1(e).textContent = "";
}, 500);
function k1(e) {
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
function O1(e, t) {
  if (!(!e || !t)) {
    var n = k1(t);
    n.textContent = e, XN(t);
  }
}
function JN(e) {
  var t = e == null ? void 0 : e.getElementById("a11y-status-message");
  t && t.remove();
}
var A1 = process.env.NODE_ENV !== "production" ? "__autocomplete_unknown__" : 0, M1 = process.env.NODE_ENV !== "production" ? "__autocomplete_mouseup__" : 1, I1 = process.env.NODE_ENV !== "production" ? "__autocomplete_item_mouseenter__" : 2, Iu = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_up__" : 3, Nu = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_down__" : 4, N1 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_escape__" : 5, R1 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_enter__" : 6, j1 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_home__" : 7, F1 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_end__" : 8, B1 = process.env.NODE_ENV !== "production" ? "__autocomplete_click_item__" : 9, L1 = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_input__" : 10, V1 = process.env.NODE_ENV !== "production" ? "__autocomplete_change_input__" : 11, W1 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_space_button__" : 12, If = process.env.NODE_ENV !== "production" ? "__autocomplete_click_button__" : 13, z1 = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_button__" : 14, U1 = process.env.NODE_ENV !== "production" ? "__autocomplete_controlled_prop_updated_selected_item__" : 15, H1 = process.env.NODE_ENV !== "production" ? "__autocomplete_touchend__" : 16, QN = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blurButton: z1,
  blurInput: L1,
  changeInput: V1,
  clickButton: If,
  clickItem: B1,
  controlledPropUpdatedSelectedItem: U1,
  itemMouseEnter: I1,
  keyDownArrowDown: Nu,
  keyDownArrowUp: Iu,
  keyDownEnd: F1,
  keyDownEnter: R1,
  keyDownEscape: N1,
  keyDownHome: j1,
  keyDownSpaceButton: W1,
  mouseUp: M1,
  touchEnd: H1,
  unknown: A1
}), eR = ["refKey", "ref"], tR = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], nR = ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"], rR = ["refKey", "ref"], aR = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], iR = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function n(a) {
      var o;
      o = t.call(this, a) || this, o.id = o.props.id || "downshift-" + T1(), o.menuId = o.props.menuId || o.id + "-menu", o.labelId = o.props.labelId || o.id + "-label", o.inputId = o.props.inputId || o.id + "-input", o.getItemId = o.props.getItemId || function(D) {
        return o.id + "-item-" + D;
      }, o.items = [], o.itemCount = null, o.previousResultCount = 0, o.timeoutIds = [], o.internalSetTimeout = function(D, C) {
        var P = setTimeout(function() {
          o.timeoutIds = o.timeoutIds.filter(function(S) {
            return S !== P;
          }), D();
        }, C);
        o.timeoutIds.push(P);
      }, o.setItemCount = function(D) {
        o.itemCount = D;
      }, o.unsetItemCount = function() {
        o.itemCount = null;
      }, o.isItemDisabled = function(D, C) {
        var P = o.getItemNodeFromIndex(C);
        return P && P.hasAttribute("disabled");
      }, o.setHighlightedIndex = function(D, C) {
        D === void 0 && (D = o.props.defaultHighlightedIndex), C === void 0 && (C = {}), C = gu(C), o.internalSetState(Ge({
          highlightedIndex: D
        }, C));
      }, o.clearSelection = function(D) {
        o.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: o.props.defaultHighlightedIndex,
          isOpen: o.props.defaultIsOpen
        }, D);
      }, o.selectItem = function(D, C, P) {
        C = gu(C), o.internalSetState(Ge({
          isOpen: o.props.defaultIsOpen,
          highlightedIndex: o.props.defaultHighlightedIndex,
          selectedItem: D,
          inputValue: o.props.itemToString(D)
        }, C), P);
      }, o.selectItemAtIndex = function(D, C, P) {
        var S = o.items[D];
        S != null && o.selectItem(S, C, P);
      }, o.selectHighlightedItem = function(D, C) {
        return o.selectItemAtIndex(o.getState().highlightedIndex, D, C);
      }, o.internalSetState = function(D, C) {
        var P, S, G = {}, Z = typeof D == "function";
        return !Z && D.hasOwnProperty("inputValue") && o.props.onInputValueChange(D.inputValue, Ge({}, o.getStateAndHelpers(), D)), o.setState(function(k) {
          var F;
          k = o.getState(k);
          var R = Z ? D(k) : D;
          R = o.props.stateReducer(k, R), P = R.hasOwnProperty("selectedItem");
          var I = {};
          return P && R.selectedItem !== k.selectedItem && (S = R.selectedItem), (F = R).type || (F.type = A1), Object.keys(R).forEach(function(j) {
            k[j] !== R[j] && (G[j] = R[j]), j !== "type" && (R[j], Mf(o.props, j) || (I[j] = R[j]));
          }), Z && R.hasOwnProperty("inputValue") && o.props.onInputValueChange(R.inputValue, Ge({}, o.getStateAndHelpers(), R)), I;
        }, function() {
          vy(C)();
          var k = Object.keys(G).length > 1;
          k && o.props.onStateChange(G, o.getStateAndHelpers()), P && o.props.onSelect(D.selectedItem, o.getStateAndHelpers()), S !== void 0 && o.props.onChange(S, o.getStateAndHelpers()), o.props.onUserAction(G, o.getStateAndHelpers());
        });
      }, o.rootRef = function(D) {
        return o._rootNode = D;
      }, o.getRootProps = function(D, C) {
        var P, S = D === void 0 ? {} : D, G = S.refKey, Z = G === void 0 ? "ref" : G, k = S.ref, F = Qn(S, eR), R = C === void 0 ? {} : C, I = R.suppressRefError, j = I === void 0 ? !1 : I;
        o.getRootProps.called = !0, o.getRootProps.refKey = Z, o.getRootProps.suppressRefError = j;
        var E = o.getState(), L = E.isOpen;
        return Ge((P = {}, P[Z] = Fa(k, o.rootRef), P.role = "combobox", P["aria-expanded"] = L, P["aria-haspopup"] = "listbox", P["aria-owns"] = L ? o.menuId : void 0, P["aria-labelledby"] = o.labelId, P), F);
      }, o.keyDownHandlers = {
        ArrowDown: function(C) {
          var P = this;
          if (C.preventDefault(), this.getState().isOpen) {
            var S = C.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(S, {
              type: Nu
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: Nu
            }, function() {
              var G = P.getItemCount();
              if (G > 0) {
                var Z = P.getState(), k = Z.highlightedIndex, F = Na(k, 1, {
                  length: G
                }, P.isItemDisabled, !0);
                P.setHighlightedIndex(F, {
                  type: Nu
                });
              }
            });
        },
        ArrowUp: function(C) {
          var P = this;
          if (C.preventDefault(), this.getState().isOpen) {
            var S = C.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(S, {
              type: Iu
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: Iu
            }, function() {
              var G = P.getItemCount();
              if (G > 0) {
                var Z = P.getState(), k = Z.highlightedIndex, F = Na(k, -1, {
                  length: G
                }, P.isItemDisabled, !0);
                P.setHighlightedIndex(F, {
                  type: Iu
                });
              }
            });
        },
        Enter: function(C) {
          if (C.which !== 229) {
            var P = this.getState(), S = P.isOpen, G = P.highlightedIndex;
            if (S && G != null) {
              C.preventDefault();
              var Z = this.items[G], k = this.getItemNodeFromIndex(G);
              if (Z == null || k && k.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: R1
              });
            }
          }
        },
        Escape: function(C) {
          C.preventDefault(), this.reset(Ge({
            type: N1
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }
      }, o.buttonKeyDownHandlers = Ge({}, o.keyDownHandlers, {
        " ": function(C) {
          C.preventDefault(), this.toggleMenu({
            type: W1
          });
        }
      }), o.inputKeyDownHandlers = Ge({}, o.keyDownHandlers, {
        Home: function(C) {
          var P = this.getState(), S = P.isOpen;
          if (S) {
            C.preventDefault();
            var G = this.getItemCount();
            if (!(G <= 0 || !S)) {
              var Z = Vi(0, !1, {
                length: G
              }, this.isItemDisabled);
              this.setHighlightedIndex(Z, {
                type: j1
              });
            }
          }
        },
        End: function(C) {
          var P = this.getState(), S = P.isOpen;
          if (S) {
            C.preventDefault();
            var G = this.getItemCount();
            if (!(G <= 0 || !S)) {
              var Z = Vi(G - 1, !0, {
                length: G
              }, this.isItemDisabled);
              this.setHighlightedIndex(Z, {
                type: F1
              });
            }
          }
        }
      }), o.getToggleButtonProps = function(D) {
        var C = D === void 0 ? {} : D, P = C.onClick;
        C.onPress;
        var S = C.onKeyDown, G = C.onKeyUp, Z = C.onBlur, k = Qn(C, tR), F = o.getState(), R = F.isOpen, I = {
          onClick: It(P, o.buttonHandleClick),
          onKeyDown: It(S, o.buttonHandleKeyDown),
          onKeyUp: It(G, o.buttonHandleKeyUp),
          onBlur: It(Z, o.buttonHandleBlur)
        }, j = k.disabled ? {} : I;
        return Ge({
          type: "button",
          role: "button",
          "aria-label": R ? "close menu" : "open menu",
          "aria-haspopup": !0,
          "data-toggle": !0
        }, j, k);
      }, o.buttonHandleKeyUp = function(D) {
        D.preventDefault();
      }, o.buttonHandleKeyDown = function(D) {
        var C = Xo(D);
        o.buttonKeyDownHandlers[C] && o.buttonKeyDownHandlers[C].call(o, D);
      }, o.buttonHandleClick = function(D) {
        if (D.preventDefault(), o.props.environment) {
          var C = o.props.environment.document, P = C.body, S = C.activeElement;
          P && P === S && D.target.focus();
        }
        process.env.NODE_ENV === "test" ? o.toggleMenu({
          type: If
        }) : o.internalSetTimeout(function() {
          return o.toggleMenu({
            type: If
          });
        });
      }, o.buttonHandleBlur = function(D) {
        var C = D.target;
        o.internalSetTimeout(function() {
          if (!(o.isMouseDown || !o.props.environment)) {
            var P = o.props.environment.document.activeElement;
            (P == null || P.id !== o.inputId) && P !== C && o.reset({
              type: z1
            });
          }
        });
      }, o.getLabelProps = function(D) {
        return Ge({
          htmlFor: o.inputId,
          id: o.labelId
        }, D);
      }, o.getInputProps = function(D) {
        var C = D === void 0 ? {} : D, P = C.onKeyDown, S = C.onBlur, G = C.onChange, Z = C.onInput;
        C.onChangeText;
        var k = Qn(C, nR), F, R = {};
        F = "onChange";
        var I = o.getState(), j = I.inputValue, E = I.isOpen, L = I.highlightedIndex;
        if (!k.disabled) {
          var H;
          R = (H = {}, H[F] = It(G, Z, o.inputHandleChange), H.onKeyDown = It(P, o.inputHandleKeyDown), H.onBlur = It(S, o.inputHandleBlur), H);
        }
        return Ge({
          "aria-autocomplete": "list",
          "aria-activedescendant": E && typeof L == "number" && L >= 0 ? o.getItemId(L) : void 0,
          "aria-controls": E ? o.menuId : void 0,
          "aria-labelledby": k && k["aria-label"] ? void 0 : o.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: j,
          id: o.inputId
        }, R, k);
      }, o.inputHandleKeyDown = function(D) {
        var C = Xo(D);
        C && o.inputKeyDownHandlers[C] && o.inputKeyDownHandlers[C].call(o, D);
      }, o.inputHandleChange = function(D) {
        o.internalSetState({
          type: V1,
          isOpen: !0,
          inputValue: D.target.value,
          highlightedIndex: o.props.defaultHighlightedIndex
        });
      }, o.inputHandleBlur = function() {
        o.internalSetTimeout(function() {
          var D;
          if (!(o.isMouseDown || !o.props.environment)) {
            var C = o.props.environment.document.activeElement, P = (C == null || (D = C.dataset) == null ? void 0 : D.toggle) && o._rootNode && o._rootNode.contains(C);
            P || o.reset({
              type: L1
            });
          }
        });
      }, o.menuRef = function(D) {
        o._menuNode = D;
      }, o.getMenuProps = function(D, C) {
        var P, S = D === void 0 ? {} : D, G = S.refKey, Z = G === void 0 ? "ref" : G, k = S.ref, F = Qn(S, rR), R = C === void 0 ? {} : C, I = R.suppressRefError, j = I === void 0 ? !1 : I;
        return o.getMenuProps.called = !0, o.getMenuProps.refKey = Z, o.getMenuProps.suppressRefError = j, Ge((P = {}, P[Z] = Fa(k, o.menuRef), P.role = "listbox", P["aria-labelledby"] = F && F["aria-label"] ? void 0 : o.labelId, P.id = o.menuId, P), F);
      }, o.getItemProps = function(D) {
        var C, P = D === void 0 ? {} : D, S = P.onMouseMove, G = P.onMouseDown, Z = P.onClick;
        P.onPress;
        var k = P.index, F = P.item, R = F === void 0 ? process.env.NODE_ENV === "production" ? (
          /* istanbul ignore next */
          void 0
        ) : qN("getItemProps", "item") : F, I = Qn(P, aR);
        k === void 0 ? (o.items.push(R), k = o.items.indexOf(R)) : o.items[k] = R;
        var j = "onClick", E = Z, L = (C = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: It(S, function() {
            k !== o.getState().highlightedIndex && (o.setHighlightedIndex(k, {
              type: I1
            }), o.avoidScrolling = !0, o.internalSetTimeout(function() {
              return o.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: It(G, function(z) {
            z.preventDefault();
          })
        }, C[j] = It(E, function() {
          o.selectItemAtIndex(k, {
            type: B1
          });
        }), C), H = I.disabled ? {
          onMouseDown: L.onMouseDown
        } : L;
        return Ge({
          id: o.getItemId(k),
          role: "option",
          "aria-selected": o.getState().highlightedIndex === k
        }, H, I);
      }, o.clearItems = function() {
        o.items = [];
      }, o.reset = function(D, C) {
        D === void 0 && (D = {}), D = gu(D), o.internalSetState(function(P) {
          var S = P.selectedItem;
          return Ge({
            isOpen: o.props.defaultIsOpen,
            highlightedIndex: o.props.defaultHighlightedIndex,
            inputValue: o.props.itemToString(S)
          }, D);
        }, C);
      }, o.toggleMenu = function(D, C) {
        D === void 0 && (D = {}), D = gu(D), o.internalSetState(function(P) {
          var S = P.isOpen;
          return Ge({
            isOpen: !S
          }, S && {
            highlightedIndex: o.props.defaultHighlightedIndex
          }, D);
        }, function() {
          var P = o.getState(), S = P.isOpen, G = P.highlightedIndex;
          S && o.getItemCount() > 0 && typeof G == "number" && o.setHighlightedIndex(G, D), vy(C)();
        });
      }, o.openMenu = function(D) {
        o.internalSetState({
          isOpen: !0
        }, D);
      }, o.closeMenu = function(D) {
        o.internalSetState({
          isOpen: !1
        }, D);
      }, o.updateStatus = jl(function() {
        var D;
        if ((D = o.props) != null && (D = D.environment) != null && D.document) {
          var C = o.getState(), P = o.items[C.highlightedIndex], S = o.getItemCount(), G = o.props.getA11yStatusMessage(Ge({
            itemToString: o.props.itemToString,
            previousResultCount: o.previousResultCount,
            resultCount: S,
            highlightedItem: P
          }, C));
          o.previousResultCount = S, O1(G, o.props.environment.document);
        }
      }, 200);
      var u = o.props, l = u.defaultHighlightedIndex, d = u.initialHighlightedIndex, f = d === void 0 ? l : d, p = u.defaultIsOpen, m = u.initialIsOpen, v = m === void 0 ? p : m, $ = u.initialInputValue, _ = $ === void 0 ? "" : $, x = u.initialSelectedItem, w = x === void 0 ? null : x, M = o.getState({
        highlightedIndex: f,
        isOpen: v,
        inputValue: _,
        selectedItem: w
      });
      return M.selectedItem != null && o.props.initialInputValue === void 0 && (M.inputValue = o.props.itemToString(M.selectedItem)), o.state = M, o;
    }
    AN(n, t);
    var r = n.prototype;
    return r.internalClearTimeouts = function() {
      this.timeoutIds.forEach(function(o) {
        clearTimeout(o);
      }), this.timeoutIds = [];
    }, r.getState = function(o) {
      return o === void 0 && (o = this.state), Qu(o, this.props);
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
    }, r.moveHighlightedIndex = function(o, u) {
      var l = this.getItemCount(), d = this.getState(), f = d.highlightedIndex;
      if (l > 0) {
        var p = Na(f, o, {
          length: l
        }, this.isItemDisabled, !0);
        this.setHighlightedIndex(p, u);
      }
    }, r.getStateAndHelpers = function() {
      var o = this.getState(), u = o.highlightedIndex, l = o.inputValue, d = o.selectedItem, f = o.isOpen, p = this.props.itemToString, m = this.id, v = this.getRootProps, $ = this.getToggleButtonProps, _ = this.getLabelProps, x = this.getMenuProps, w = this.getInputProps, M = this.getItemProps, D = this.openMenu, C = this.closeMenu, P = this.toggleMenu, S = this.selectItem, G = this.selectItemAtIndex, Z = this.selectHighlightedItem, k = this.setHighlightedIndex, F = this.clearSelection, R = this.clearItems, I = this.reset, j = this.setItemCount, E = this.unsetItemCount, L = this.internalSetState;
      return {
        // prop getters
        getRootProps: v,
        getToggleButtonProps: $,
        getLabelProps: _,
        getMenuProps: x,
        getInputProps: w,
        getItemProps: M,
        // actions
        reset: I,
        openMenu: D,
        closeMenu: C,
        toggleMenu: P,
        selectItem: S,
        selectItemAtIndex: G,
        selectHighlightedItem: Z,
        setHighlightedIndex: k,
        clearSelection: F,
        clearItems: R,
        setItemCount: j,
        unsetItemCount: E,
        setState: L,
        // props
        itemToString: p,
        // derived
        id: m,
        // state
        highlightedIndex: u,
        inputValue: l,
        isOpen: f,
        selectedItem: d
      };
    }, r.componentDidMount = function() {
      var o = this;
      if (process.env.NODE_ENV !== "production" && this.getMenuProps.called && !this.getMenuProps.suppressRefError && xy(this._menuNode, this.getMenuProps), !this.props.environment)
        this.cleanup = function() {
          o.internalClearTimeouts();
        };
      else {
        var u = function() {
          o.isMouseDown = !0;
        }, l = function($) {
          o.isMouseDown = !1;
          var _ = el($.target, [o._rootNode, o._menuNode], o.props.environment);
          !_ && o.getState().isOpen && o.reset({
            type: M1
          }, function() {
            return o.props.onOuterClick(o.getStateAndHelpers());
          });
        }, d = function() {
          o.isTouchMove = !1;
        }, f = function() {
          o.isTouchMove = !0;
        }, p = function($) {
          var _ = el($.target, [o._rootNode, o._menuNode], o.props.environment, !1);
          !o.isTouchMove && !_ && o.getState().isOpen && o.reset({
            type: H1
          }, function() {
            return o.props.onOuterClick(o.getStateAndHelpers());
          });
        }, m = this.props.environment;
        m.addEventListener("mousedown", u), m.addEventListener("mouseup", l), m.addEventListener("touchstart", d), m.addEventListener("touchmove", f), m.addEventListener("touchend", p), this.cleanup = function() {
          o.internalClearTimeouts(), o.updateStatus.cancel(), m.removeEventListener("mousedown", u), m.removeEventListener("mouseup", l), m.removeEventListener("touchstart", d), m.removeEventListener("touchmove", f), m.removeEventListener("touchend", p);
        };
      }
    }, r.shouldScroll = function(o, u) {
      var l = this.props.highlightedIndex === void 0 ? this.getState() : this.props, d = l.highlightedIndex, f = u.highlightedIndex === void 0 ? o : u, p = f.highlightedIndex, m = d && this.getState().isOpen && !o.isOpen, v = d !== p;
      return m || v;
    }, r.componentDidUpdate = function(o, u) {
      process.env.NODE_ENV !== "production" && (Vp(this.state, o, this.props), this.getMenuProps.called && !this.getMenuProps.suppressRefError && xy(this._menuNode, this.getMenuProps)), Mf(this.props, "selectedItem") && this.props.selectedItemChanged(o.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: U1,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(u, o) && this.scrollHighlightedItemIntoView(), this.updateStatus();
    }, r.componentWillUnmount = function() {
      this.cleanup();
    }, r.render = function() {
      var o = by(this.props.children, bn);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1, this.getInputProps.called = !1;
      var u = by(o(this.getStateAndHelpers()));
      if (!u)
        return null;
      if (this.getRootProps.called || this.props.suppressRefError)
        return process.env.NODE_ENV !== "production" && !this.getRootProps.suppressRefError && !this.props.suppressRefError && oR(u, this.getRootProps), u;
      if (S1(u))
        return /* @__PURE__ */ ak(u, this.getRootProps(P1(u)));
      if (process.env.NODE_ENV !== "production")
        throw new Error("downshift: If you return a non-DOM element, you must apply the getRootProps function");
    }, n;
  }(ik);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: KN,
    itemToString: function(n) {
      return n == null ? "" : (process.env.NODE_ENV !== "production" && ZN(n) && !n.hasOwnProperty("toString") && console.warn("downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.", "The object that was passed:", n), String(n));
    },
    onStateChange: bn,
    onInputValueChange: bn,
    onUserAction: bn,
    onChange: bn,
    onSelect: bn,
    onOuterClick: bn,
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
    scrollIntoView: C1
  }, e.stateChangeTypes = QN, e;
}();
process.env.NODE_ENV !== "production" && (iR.propTypes = {
  children: fe.func,
  defaultHighlightedIndex: fe.number,
  defaultIsOpen: fe.bool,
  initialHighlightedIndex: fe.number,
  initialSelectedItem: fe.any,
  initialInputValue: fe.string,
  initialIsOpen: fe.bool,
  getA11yStatusMessage: fe.func,
  itemToString: fe.func,
  onChange: fe.func,
  onSelect: fe.func,
  onStateChange: fe.func,
  onInputValueChange: fe.func,
  onUserAction: fe.func,
  onOuterClick: fe.func,
  selectedItemChanged: fe.func,
  stateReducer: fe.func,
  itemCount: fe.number,
  id: fe.string,
  environment: fe.shape({
    addEventListener: fe.func.isRequired,
    removeEventListener: fe.func.isRequired,
    document: fe.shape({
      createElement: fe.func.isRequired,
      getElementById: fe.func.isRequired,
      activeElement: fe.any.isRequired,
      body: fe.any.isRequired
    }).isRequired,
    Node: fe.func.isRequired
  }),
  suppressRefError: fe.bool,
  scrollIntoView: fe.func,
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components
  /* eslint-disable react/no-unused-prop-types */
  selectedItem: fe.any,
  isOpen: fe.bool,
  inputValue: fe.string,
  highlightedIndex: fe.number,
  labelId: fe.string,
  inputId: fe.string,
  menuId: fe.string,
  getItemId: fe.func
  /* eslint-enable react/no-unused-prop-types */
});
function xy(e, t) {
  var n = t.refKey;
  e || console.error('downshift: The ref prop "' + n + '" from getMenuProps was not applied correctly on your menu element.');
}
function oR(e, t) {
  var n = t.refKey, r = n !== "ref", a = !S1(e);
  a && !r && !hy.isForwardRef(e) ? console.error("downshift: You returned a non-DOM element. You must specify a refKey in getRootProps") : !a && r && console.error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' + n + '"'), !hy.isForwardRef(e) && !P1(e)[n] && console.error('downshift: You must apply the ref prop "' + n + '" from getRootProps onto your root element.');
}
var Y1 = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function sR(e, t, n) {
  var r = e.props, a = e.type, o = {};
  Object.keys(t).forEach(function(u) {
    uR(u, e, t, n), n[u] !== t[u] && (o[u] = n[u]);
  }), r.onStateChange && Object.keys(o).length && r.onStateChange(Ge({
    type: a
  }, o));
}
function uR(e, t, n, r) {
  var a = t.props, o = t.type, u = "on" + Wp(e) + "Change";
  a[u] && r[e] !== void 0 && r[e] !== n[e] && a[u](Ge({
    type: o
  }, r));
}
function lR(e, t) {
  return t.changes;
}
var wy = jl(function(e, t) {
  O1(e, t);
}, 200), cR = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? oa : Ue, dR = "useId" in Oe ? function(t) {
  var n = t.id, r = t.labelId, a = t.menuId, o = t.getItemId, u = t.toggleButtonId, l = t.inputId, d = "downshift-" + Oe.useId();
  n || (n = d);
  var f = Se({
    labelId: r || n + "-label",
    menuId: a || n + "-menu",
    getItemId: o || function(p) {
      return n + "-item-" + p;
    },
    toggleButtonId: u || n + "-toggle-button",
    inputId: l || n + "-input"
  });
  return f.current;
} : function(t) {
  var n = t.id, r = n === void 0 ? "downshift-" + T1() : n, a = t.labelId, o = t.menuId, u = t.getItemId, l = t.toggleButtonId, d = t.inputId, f = Se({
    labelId: a || r + "-label",
    menuId: o || r + "-menu",
    getItemId: u || function(p) {
      return r + "-item-" + p;
    },
    toggleButtonId: l || r + "-toggle-button",
    inputId: d || r + "-input"
  });
  return f.current;
};
function K1(e, t, n, r) {
  var a, o;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(r);
    a = n[t], o = t;
  } else
    o = t === void 0 ? n.indexOf(e) : t, a = e;
  return [a, o];
}
function fR(e) {
  return /^\S{1}$/.test(e);
}
function Wp(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function zp(e) {
  var t = Se(e);
  return t.current = e, t;
}
function pR(e, t, n, r) {
  var a = Se(), o = Se(), u = Be(function($, _) {
    o.current = _, $ = Qu($, _.props);
    var x = e($, _), w = _.props.stateReducer($, Ge({}, _, {
      changes: x
    }));
    return w;
  }, [e]), l = Fx(u, t, n), d = l[0], f = l[1], p = zp(t), m = Be(function($) {
    return f(Ge({
      props: p.current
    }, $));
  }, [p]), v = o.current;
  return Ue(function() {
    var $ = Qu(a.current, v == null ? void 0 : v.props), _ = v && a.current && !r($, d);
    _ && sR(v, $, d), a.current = d;
  }, [d, v, r]), [d, m];
}
function q1(e, t, n, r) {
  var a = pR(e, t, n, r), o = a[0], u = a[1];
  return [Qu(o, t), u];
}
var Wo = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: lR,
  scrollIntoView: C1,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function Nr(e, t, n) {
  n === void 0 && (n = Y1);
  var r = e["default" + Wp(t)];
  return r !== void 0 ? r : n[t];
}
function Ai(e, t, n) {
  n === void 0 && (n = Y1);
  var r = e[t];
  if (r !== void 0)
    return r;
  var a = e["initial" + Wp(t)];
  return a !== void 0 ? a : Nr(e, t, n);
}
function hR(e) {
  var t = Ai(e, "selectedItem"), n = Ai(e, "isOpen"), r = yR(e), a = Ai(e, "inputValue");
  return {
    highlightedIndex: r < 0 && t && n ? e.items.findIndex(function(o) {
      return e.itemToKey(o) === e.itemToKey(t);
    }) : r,
    isOpen: n,
    selectedItem: t,
    inputValue: a
  };
}
function tl(e, t, n) {
  var r = e.items, a = e.initialHighlightedIndex, o = e.defaultHighlightedIndex, u = e.isItemDisabled, l = e.itemToKey, d = t.selectedItem, f = t.highlightedIndex;
  return r.length === 0 ? -1 : a !== void 0 && f === a && !u(r[a], a) ? a : o !== void 0 && !u(r[o], o) ? o : d ? r.findIndex(function(p) {
    return l(d) === l(p);
  }) : n < 0 && !u(r[r.length - 1], r.length - 1) ? r.length - 1 : n > 0 && !u(r[0], 0) ? 0 : -1;
}
function mR(e, t, n) {
  var r = Se({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return Ue(function() {
    if (!e)
      return bn;
    var a = n.map(function(p) {
      return p.current;
    });
    function o() {
      r.current.isTouchEnd = !1, r.current.isMouseDown = !0;
    }
    function u(p) {
      r.current.isMouseDown = !1, el(p.target, a, e) || t();
    }
    function l() {
      r.current.isTouchEnd = !1, r.current.isTouchMove = !1;
    }
    function d() {
      r.current.isTouchMove = !0;
    }
    function f(p) {
      r.current.isTouchEnd = !0, !r.current.isTouchMove && !el(p.target, a, e, !1) && t();
    }
    return e.addEventListener("mousedown", o), e.addEventListener("mouseup", u), e.addEventListener("touchstart", l), e.addEventListener("touchmove", d), e.addEventListener("touchend", f), function() {
      e.removeEventListener("mousedown", o), e.removeEventListener("mouseup", u), e.removeEventListener("touchstart", l), e.removeEventListener("touchmove", d), e.removeEventListener("touchend", f);
    };
  }, [n, e, t]), r.current;
}
var Up = function() {
  return bn;
};
process.env.NODE_ENV !== "production" && (Up = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = Se(n.reduce(function(u, l) {
    return u[l] = {}, u;
  }, {}));
  Ue(function() {
    Object.keys(a.current).forEach(function(u) {
      var l = a.current[u];
      if (!Object.keys(l).length) {
        console.error("downshift: You forgot to call the " + u + " getter function on your component / element.");
        return;
      }
      var d = l.suppressRefError, f = l.refKey, p = l.elementRef;
      d || p != null && p.current || console.error('downshift: The ref prop "' + f + '" from ' + u + " was not applied correctly on your element.");
    });
  }, []);
  var o = Be(function(u, l, d, f) {
    a.current[u] = {
      suppressRefError: l,
      refKey: d,
      elementRef: f
    };
  }, []);
  return o;
});
function G1(e, t, n, r) {
  r === void 0 && (r = {});
  var a = r.document, o = Yp();
  Ue(function() {
    if (!(!e || o || !a)) {
      var u = e(t);
      wy(u, a);
    }
  }, n), Ue(function() {
    return function() {
      wy.cancel(), JN(a);
    };
  }, [a]);
}
function gR(e) {
  var t = e.highlightedIndex, n = e.isOpen, r = e.itemRefs, a = e.getItemNodeFromIndex, o = e.menuElement, u = e.scrollIntoView, l = Se(!0);
  return cR(function() {
    t < 0 || !n || !Object.keys(r.current).length || (l.current === !1 ? l.current = !0 : u(a(t), o));
  }, [t]), l;
}
var Hp = bn;
process.env.NODE_ENV !== "production" && (Hp = function(t) {
  var n = t.props, r = t.state, a = Se(n), o = Yp();
  Ue(function() {
    o || (Vp(r, a.current, n), a.current = n);
  }, [r, n, o]);
});
function $y(e, t, n) {
  var r, a = ((r = e.items) == null ? void 0 : r.length) && t >= 0;
  return Ge({
    isOpen: !1,
    highlightedIndex: -1
  }, a && Ge({
    selectedItem: e.items[t],
    isOpen: Nr(e, "isOpen"),
    highlightedIndex: Nr(e, "highlightedIndex")
  }, n));
}
function vR(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function Yp() {
  var e = Oe.useRef(!0);
  return Oe.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
function Z1(e) {
  var t = Nr(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
function yR(e) {
  var t = Ai(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
var Ru = {
  environment: fe.shape({
    addEventListener: fe.func.isRequired,
    removeEventListener: fe.func.isRequired,
    document: fe.shape({
      createElement: fe.func.isRequired,
      getElementById: fe.func.isRequired,
      activeElement: fe.any.isRequired,
      body: fe.any.isRequired
    }).isRequired,
    Node: fe.func.isRequired
  }),
  itemToString: fe.func,
  itemToKey: fe.func,
  stateReducer: fe.func
}, X1 = Ge({}, Ru, {
  getA11yStatusMessage: fe.func,
  highlightedIndex: fe.number,
  defaultHighlightedIndex: fe.number,
  initialHighlightedIndex: fe.number,
  isOpen: fe.bool,
  defaultIsOpen: fe.bool,
  initialIsOpen: fe.bool,
  selectedItem: fe.any,
  initialSelectedItem: fe.any,
  defaultSelectedItem: fe.any,
  id: fe.string,
  labelId: fe.string,
  menuId: fe.string,
  getItemId: fe.func,
  toggleButtonId: fe.string,
  onSelectedItemChange: fe.func,
  onHighlightedIndexChange: fe.func,
  onStateChange: fe.func,
  onIsOpenChange: fe.func,
  scrollIntoView: fe.func
});
function bR(e, t, n) {
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
        highlightedIndex: e.isOpen ? -1 : tl(a, e, 0)
      };
      break;
    case n.FunctionOpenMenu:
      o = {
        isOpen: !0,
        highlightedIndex: tl(a, e, 0)
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
        highlightedIndex: Z1(a),
        isOpen: Nr(a, "isOpen"),
        selectedItem: Nr(a, "selectedItem"),
        inputValue: Nr(a, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return Ge({}, e, o);
}
function xR(e) {
  for (var t = e.keysSoFar, n = e.highlightedIndex, r = e.items, a = e.itemToString, o = e.isItemDisabled, u = t.toLowerCase(), l = 0; l < r.length; l++) {
    var d = (l + n + (t.length < 2 ? 1 : 0)) % r.length, f = r[d];
    if (f !== void 0 && a(f).toLowerCase().startsWith(u) && !o(f, d))
      return d;
  }
  return n;
}
var wR = xn(xn({}, X1), { items: fe.array.isRequired, isItemDisabled: fe.func }), $R = xn(xn({}, Wo), { isItemDisabled: function() {
  return !1;
} }), J1 = bn;
process.env.NODE_ENV !== "production" && (J1 = function(e, t) {
  fe.checkPropTypes(wR, e, "prop", t.name);
});
var ju = process.env.NODE_ENV !== "production" ? "__togglebutton_click__" : 0, Kp = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_down__" : 1, qp = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_up__" : 2, nl = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_character__" : 3, Gp = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_escape__" : 4, Zp = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_home__" : 5, Xp = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_end__" : 6, Jp = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_enter__" : 7, Qp = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_space_button__" : 8, eh = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_page_up__" : 9, th = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_page_down__" : 10, rl = process.env.NODE_ENV !== "production" ? "__togglebutton_blur__" : 11, Q1 = process.env.NODE_ENV !== "production" ? "__menu_mouse_leave__" : 12, ew = process.env.NODE_ENV !== "production" ? "__item_mouse_move__" : 13, nh = process.env.NODE_ENV !== "production" ? "__item_click__" : 14, tw = process.env.NODE_ENV !== "production" ? "__function_toggle_menu__" : 15, nw = process.env.NODE_ENV !== "production" ? "__function_open_menu__" : 16, rw = process.env.NODE_ENV !== "production" ? "__function_close_menu__" : 17, aw = process.env.NODE_ENV !== "production" ? "__function_set_highlighted_index__" : 18, rh = process.env.NODE_ENV !== "production" ? "__function_select_item__" : 19, Nf = process.env.NODE_ENV !== "production" ? "__function_set_input_value__" : 20, iw = process.env.NODE_ENV !== "production" ? "__function_reset__" : 21, ow = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  FunctionCloseMenu: rw,
  FunctionOpenMenu: nw,
  FunctionReset: iw,
  FunctionSelectItem: rh,
  FunctionSetHighlightedIndex: aw,
  FunctionSetInputValue: Nf,
  FunctionToggleMenu: tw,
  ItemClick: nh,
  ItemMouseMove: ew,
  MenuMouseLeave: Q1,
  ToggleButtonBlur: rl,
  ToggleButtonClick: ju,
  ToggleButtonKeyDownArrowDown: Kp,
  ToggleButtonKeyDownArrowUp: qp,
  ToggleButtonKeyDownCharacter: nl,
  ToggleButtonKeyDownEnd: Xp,
  ToggleButtonKeyDownEnter: Jp,
  ToggleButtonKeyDownEscape: Gp,
  ToggleButtonKeyDownHome: Zp,
  ToggleButtonKeyDownPageDown: th,
  ToggleButtonKeyDownPageUp: eh,
  ToggleButtonKeyDownSpaceButton: Qp
});
function DR(e, t) {
  var n, r = t.type, a = t.props, o = t.altKey, u;
  switch (r) {
    case nh:
      u = {
        isOpen: Nr(a, "isOpen"),
        highlightedIndex: Z1(a),
        selectedItem: a.items[t.index]
      };
      break;
    case nl:
      {
        var l = t.key, d = "" + e.inputValue + l, f = !e.isOpen && e.selectedItem ? a.items.findIndex(function($) {
          return a.itemToKey($) === a.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, p = xR({
          keysSoFar: d,
          highlightedIndex: f,
          items: a.items,
          itemToString: a.itemToString,
          isItemDisabled: a.isItemDisabled
        });
        u = {
          inputValue: d,
          highlightedIndex: p,
          isOpen: !0
        };
      }
      break;
    case Kp:
      {
        var m = e.isOpen ? Na(e.highlightedIndex, 1, a.items, a.isItemDisabled) : o && e.selectedItem == null ? -1 : tl(a, e, 1);
        u = {
          highlightedIndex: m,
          isOpen: !0
        };
      }
      break;
    case qp:
      if (e.isOpen && o)
        u = $y(a, e.highlightedIndex, !1);
      else {
        var v = e.isOpen ? Na(e.highlightedIndex, -1, a.items, a.isItemDisabled) : tl(a, e, -1);
        u = {
          highlightedIndex: v,
          isOpen: !0
        };
      }
      break;
    case Jp:
    case Qp:
      u = $y(a, e.highlightedIndex, !1);
      break;
    case Zp:
      u = {
        highlightedIndex: Vi(0, !1, a.items, a.isItemDisabled),
        isOpen: !0
      };
      break;
    case Xp:
      u = {
        highlightedIndex: Vi(a.items.length - 1, !0, a.items, a.isItemDisabled),
        isOpen: !0
      };
      break;
    case eh:
      u = {
        highlightedIndex: Na(e.highlightedIndex, -10, a.items, a.isItemDisabled)
      };
      break;
    case th:
      u = {
        highlightedIndex: Na(e.highlightedIndex, 10, a.items, a.isItemDisabled)
      };
      break;
    case Gp:
      u = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case rl:
      u = Ge({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = a.items) == null ? void 0 : n.length) && {
        selectedItem: a.items[e.highlightedIndex]
      });
      break;
    case rh:
      u = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return bR(e, t, ow);
  }
  return Ge({}, e, u);
}
var ER = ["onClick"], _R = ["onMouseLeave", "refKey", "ref"], CR = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], TR = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Ln.stateChangeTypes = ow;
function Ln(e) {
  e === void 0 && (e = {}), J1(e, Ln);
  var t = Ge({}, $R, e), n = t.scrollIntoView, r = t.environment, a = t.getA11yStatusMessage, o = q1(DR, t, hR, vR), u = o[0], l = o[1], d = u.isOpen, f = u.highlightedIndex, p = u.selectedItem, m = u.inputValue, v = Se(null), $ = Se(null), _ = Se({}), x = Se(null), w = dR(t), M = zp({
    state: u,
    props: t
  }), D = Be(function(B) {
    return _.current[w.getItemId(B)];
  }, [w]);
  G1(a, u, [d, f, p, m], r);
  var C = gR({
    menuElement: $.current,
    highlightedIndex: f,
    isOpen: d,
    itemRefs: _,
    scrollIntoView: n,
    getItemNodeFromIndex: D
  });
  Ue(function() {
    return x.current = jl(function(B) {
      B({
        type: Nf,
        inputValue: ""
      });
    }, 500), function() {
      x.current.cancel();
    };
  }, []), Ue(function() {
    m && x.current(l);
  }, [l, m]), Hp({
    props: t,
    state: u
  }), Ue(function() {
    var B = Ai(t, "isOpen");
    B && v.current && v.current.focus();
  }, []);
  var P = mR(r, Be(function() {
    M.current.state.isOpen && l({
      type: rl
    });
  }, [l, M]), Xe(function() {
    return [$, v];
  }, [$.current, v.current])), S = Up("getMenuProps", "getToggleButtonProps");
  Ue(function() {
    d || (_.current = {});
  }, [d]);
  var G = Xe(function() {
    return {
      ArrowDown: function(J) {
        J.preventDefault(), l({
          type: Kp,
          altKey: J.altKey
        });
      },
      ArrowUp: function(J) {
        J.preventDefault(), l({
          type: qp,
          altKey: J.altKey
        });
      },
      Home: function(J) {
        J.preventDefault(), l({
          type: Zp
        });
      },
      End: function(J) {
        J.preventDefault(), l({
          type: Xp
        });
      },
      Escape: function() {
        M.current.state.isOpen && l({
          type: Gp
        });
      },
      Enter: function(J) {
        J.preventDefault(), l({
          type: M.current.state.isOpen ? Jp : ju
        });
      },
      PageUp: function(J) {
        M.current.state.isOpen && (J.preventDefault(), l({
          type: eh
        }));
      },
      PageDown: function(J) {
        M.current.state.isOpen && (J.preventDefault(), l({
          type: th
        }));
      },
      " ": function(J) {
        J.preventDefault();
        var A = M.current.state;
        if (!A.isOpen) {
          l({
            type: ju
          });
          return;
        }
        A.inputValue ? l({
          type: nl,
          key: " "
        }) : l({
          type: Qp
        });
      }
    };
  }, [l, M]), Z = Be(function() {
    l({
      type: tw
    });
  }, [l]), k = Be(function() {
    l({
      type: rw
    });
  }, [l]), F = Be(function() {
    l({
      type: nw
    });
  }, [l]), R = Be(function(B) {
    l({
      type: aw,
      highlightedIndex: B
    });
  }, [l]), I = Be(function(B) {
    l({
      type: rh,
      selectedItem: B
    });
  }, [l]), j = Be(function() {
    l({
      type: iw
    });
  }, [l]), E = Be(function(B) {
    l({
      type: Nf,
      inputValue: B
    });
  }, [l]), L = Be(function(B) {
    var J = B === void 0 ? {} : B, A = J.onClick, W = Qn(J, ER), re = function() {
      var ce;
      (ce = v.current) == null || ce.focus();
    };
    return Ge({
      id: w.labelId,
      htmlFor: w.toggleButtonId,
      onClick: It(A, re)
    }, W);
  }, [w]), H = Be(function(B, J) {
    var A, W = B === void 0 ? {} : B, re = W.onMouseLeave, ue = W.refKey, ce = ue === void 0 ? "ref" : ue, ye = W.ref, ge = Qn(W, _R), $e = J === void 0 ? {} : J, oe = $e.suppressRefError, xe = oe === void 0 ? !1 : oe, be = function() {
      l({
        type: Q1
      });
    };
    return S("getMenuProps", xe, ce, $), Ge((A = {}, A[ce] = Fa(ye, function(Ce) {
      $.current = Ce;
    }), A.id = w.menuId, A.role = "listbox", A["aria-labelledby"] = ge && ge["aria-label"] ? void 0 : "" + w.labelId, A.onMouseLeave = It(re, be), A), ge);
  }, [l, S, w]), z = Be(function(B, J) {
    var A, W = B === void 0 ? {} : B, re = W.onBlur, ue = W.onClick;
    W.onPress;
    var ce = W.onKeyDown, ye = W.refKey, ge = ye === void 0 ? "ref" : ye, $e = W.ref, oe = Qn(W, CR), xe = J === void 0 ? {} : J, be = xe.suppressRefError, Ce = be === void 0 ? !1 : be, pe = M.current.state, Fe = function() {
      l({
        type: ju
      });
    }, we = function() {
      pe.isOpen && !P.isMouseDown && l({
        type: rl
      });
    }, rt = function(U) {
      var ne = Xo(U);
      ne && G[ne] ? G[ne](U) : fR(ne) && l({
        type: nl,
        key: ne
      });
    }, ot = Ge((A = {}, A[ge] = Fa($e, function(Je) {
      v.current = Je;
    }), A["aria-activedescendant"] = pe.isOpen && pe.highlightedIndex > -1 ? w.getItemId(pe.highlightedIndex) : "", A["aria-controls"] = w.menuId, A["aria-expanded"] = M.current.state.isOpen, A["aria-haspopup"] = "listbox", A["aria-labelledby"] = oe && oe["aria-label"] ? void 0 : "" + w.labelId, A.id = w.toggleButtonId, A.role = "combobox", A.tabIndex = 0, A.onBlur = It(re, we), A), oe);
    return oe.disabled || (ot.onClick = It(ue, Fe), ot.onKeyDown = It(ce, rt)), S("getToggleButtonProps", Ce, ge, v), ot;
  }, [l, w, M, P, S, G]), N = Be(function(B) {
    var J, A = B === void 0 ? {} : B, W = A.item, re = A.index, ue = A.onMouseMove, ce = A.onClick, ye = A.onMouseDown;
    A.onPress;
    var ge = A.refKey, $e = ge === void 0 ? "ref" : ge, oe = A.disabled, xe = A.ref, be = Qn(A, TR);
    oe !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var Ce = M.current, pe = Ce.state, Fe = Ce.props, we = K1(W, re, Fe.items, "Pass either item or index to getItemProps!"), rt = we[0], ot = we[1], Je = Fe.isItemDisabled(rt, ot), U = function() {
      P.isTouchEnd || ot === pe.highlightedIndex || (C.current = !1, l({
        type: ew,
        index: ot,
        disabled: Je
      }));
    }, ne = function() {
      l({
        type: nh,
        index: ot
      });
    }, ae = function(Y) {
      return Y.preventDefault();
    }, g = Ge((J = {}, J[$e] = Fa(xe, function(K) {
      K && (_.current[w.getItemId(ot)] = K);
    }), J["aria-disabled"] = Je, J["aria-selected"] = rt === pe.selectedItem, J.id = w.getItemId(ot), J.role = "option", J), be);
    return Je || (g.onClick = It(ce, ne)), g.onMouseMove = It(ue, U), g.onMouseDown = It(ye, ae), g;
  }, [M, w, P, C, l]);
  return {
    // prop getters.
    getToggleButtonProps: z,
    getLabelProps: L,
    getMenuProps: H,
    getItemProps: N,
    // actions.
    toggleMenu: Z,
    openMenu: F,
    closeMenu: k,
    setHighlightedIndex: R,
    selectItem: I,
    reset: j,
    setInputValue: E,
    // state.
    highlightedIndex: f,
    isOpen: d,
    selectedItem: p,
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
Ge({}, X1, {
  items: fe.array.isRequired,
  isItemDisabled: fe.func,
  inputValue: fe.string,
  defaultInputValue: fe.string,
  initialInputValue: fe.string,
  inputId: fe.string,
  onInputValueChange: fe.func
});
process.env.NODE_ENV;
Ge({}, Wo, {
  isItemDisabled: function() {
    return !1;
  }
});
var sw = {
  activeIndex: -1,
  selectedItems: []
};
function Dy(e, t) {
  return Ai(e, t, sw);
}
function Ey(e, t) {
  return Nr(e, t, sw);
}
function SR(e) {
  var t = Dy(e, "activeIndex"), n = Dy(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: n
  };
}
function _y(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
function PR(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
var kR = {
  stateReducer: Ru.stateReducer,
  itemToKey: Ru.itemToKey,
  environment: Ru.environment,
  selectedItems: fe.array,
  initialSelectedItems: fe.array,
  defaultSelectedItems: fe.array,
  getA11yStatusMessage: fe.func,
  activeIndex: fe.number,
  initialActiveIndex: fe.number,
  defaultActiveIndex: fe.number,
  onActiveIndexChange: fe.func,
  onSelectedItemsChange: fe.func,
  keyNavigationNext: fe.string,
  keyNavigationPrevious: fe.string
}, OR = {
  itemToKey: Wo.itemToKey,
  stateReducer: Wo.stateReducer,
  environment: Wo.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, uw = bn;
process.env.NODE_ENV !== "production" && (uw = function(t, n) {
  fe.checkPropTypes(kR, t, "prop", n.name);
});
var ah = process.env.NODE_ENV !== "production" ? "__selected_item_click__" : 0, ih = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_delete__" : 1, oh = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_backspace__" : 2, sh = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_next__" : 3, uh = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_previous__" : 4, lh = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_navigation_previous__" : 5, ch = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_backspace__" : 6, dh = process.env.NODE_ENV !== "production" ? "__dropdown_click__" : 7, fh = process.env.NODE_ENV !== "production" ? "__function_add_selected_item__" : 8, ph = process.env.NODE_ENV !== "production" ? "__function_remove_selected_item__" : 9, hh = process.env.NODE_ENV !== "production" ? "__function_set_selected_items__" : 10, mh = process.env.NODE_ENV !== "production" ? "__function_set_active_index__" : 11, gh = process.env.NODE_ENV !== "production" ? "__function_reset__" : 12, AR = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DropdownClick: dh,
  DropdownKeyDownBackspace: ch,
  DropdownKeyDownNavigationPrevious: lh,
  FunctionAddSelectedItem: fh,
  FunctionRemoveSelectedItem: ph,
  FunctionReset: gh,
  FunctionSetActiveIndex: mh,
  FunctionSetSelectedItems: hh,
  SelectedItemClick: ah,
  SelectedItemKeyDownBackspace: oh,
  SelectedItemKeyDownDelete: ih,
  SelectedItemKeyDownNavigationNext: sh,
  SelectedItemKeyDownNavigationPrevious: uh
});
function MR(e, t) {
  var n = t.type, r = t.index, a = t.props, o = t.selectedItem, u = e.activeIndex, l = e.selectedItems, d;
  switch (n) {
    case ah:
      d = {
        activeIndex: r
      };
      break;
    case uh:
      d = {
        activeIndex: u - 1 < 0 ? 0 : u - 1
      };
      break;
    case sh:
      d = {
        activeIndex: u + 1 >= l.length ? -1 : u + 1
      };
      break;
    case oh:
    case ih: {
      if (u < 0)
        break;
      var f = u;
      l.length === 1 ? f = -1 : u === l.length - 1 && (f = l.length - 2), d = Ge({
        selectedItems: [].concat(l.slice(0, u), l.slice(u + 1))
      }, {
        activeIndex: f
      });
      break;
    }
    case lh:
      d = {
        activeIndex: l.length - 1
      };
      break;
    case ch:
      d = {
        selectedItems: l.slice(0, l.length - 1)
      };
      break;
    case fh:
      d = {
        selectedItems: [].concat(l, [o])
      };
      break;
    case dh:
      d = {
        activeIndex: -1
      };
      break;
    case ph: {
      var p = u, m = l.findIndex(function(_) {
        return a.itemToKey(_) === a.itemToKey(o);
      });
      if (m < 0)
        break;
      l.length === 1 ? p = -1 : m === l.length - 1 && (p = l.length - 2), d = {
        selectedItems: [].concat(l.slice(0, m), l.slice(m + 1)),
        activeIndex: p
      };
      break;
    }
    case hh: {
      var v = t.selectedItems;
      d = {
        selectedItems: v
      };
      break;
    }
    case mh: {
      var $ = t.activeIndex;
      d = {
        activeIndex: $
      };
      break;
    }
    case gh:
      d = {
        activeIndex: Ey(a, "activeIndex"),
        selectedItems: Ey(a, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return Ge({}, e, d);
}
var IR = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], NR = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
Aa.stateChangeTypes = AR;
function Aa(e) {
  e === void 0 && (e = {}), uw(e, Aa);
  var t = Ge({}, OR, e), n = t.getA11yStatusMessage, r = t.environment, a = t.keyNavigationNext, o = t.keyNavigationPrevious, u = q1(MR, t, SR, PR), l = u[0], d = u[1], f = l.activeIndex, p = l.selectedItems, m = Yp(), v = Se(null), $ = Se();
  $.current = [];
  var _ = zp({
    state: l,
    props: t
  });
  G1(n, l, [f, p], r), Ue(function() {
    m || (f === -1 && v.current ? v.current.focus() : $.current[f] && $.current[f].focus());
  }, [f]), Hp({
    props: t,
    state: l
  });
  var x = Up("getDropdownProps"), w = Xe(function() {
    var F;
    return F = {}, F[o] = function() {
      d({
        type: uh
      });
    }, F[a] = function() {
      d({
        type: sh
      });
    }, F.Delete = function() {
      d({
        type: ih
      });
    }, F.Backspace = function() {
      d({
        type: oh
      });
    }, F;
  }, [d, a, o]), M = Xe(function() {
    var F;
    return F = {}, F[o] = function(R) {
      _y(R) && d({
        type: lh
      });
    }, F.Backspace = function(I) {
      _y(I) && d({
        type: ch
      });
    }, F;
  }, [d, o]), D = Be(function(F) {
    var R, I = F === void 0 ? {} : F, j = I.refKey, E = j === void 0 ? "ref" : j, L = I.ref, H = I.onClick, z = I.onKeyDown, N = I.selectedItem, B = I.index, J = Qn(I, IR), A = _.current.state, W = K1(N, B, A.selectedItems, "Pass either item or index to getSelectedItemProps!"), re = W[1], ue = re > -1 && re === A.activeIndex, ce = function() {
      d({
        type: ah,
        index: re
      });
    }, ye = function($e) {
      var oe = Xo($e);
      oe && w[oe] && w[oe]($e);
    };
    return Ge((R = {}, R[E] = Fa(L, function(ge) {
      ge && $.current.push(ge);
    }), R.tabIndex = ue ? 0 : -1, R.onClick = It(H, ce), R.onKeyDown = It(z, ye), R), J);
  }, [d, _, w]), C = Be(function(F, R) {
    var I, j = F === void 0 ? {} : F, E = j.refKey, L = E === void 0 ? "ref" : E, H = j.ref, z = j.onKeyDown, N = j.onClick, B = j.preventKeyAction, J = B === void 0 ? !1 : B, A = Qn(j, NR), W = R === void 0 ? {} : R, re = W.suppressRefError, ue = re === void 0 ? !1 : re;
    x("getDropdownProps", ue, L, v);
    var ce = function($e) {
      var oe = Xo($e);
      oe && M[oe] && M[oe]($e);
    }, ye = function() {
      d({
        type: dh
      });
    };
    return Ge((I = {}, I[L] = Fa(H, function(ge) {
      ge && (v.current = ge);
    }), I), !J && {
      onKeyDown: It(z, ce),
      onClick: It(N, ye)
    }, A);
  }, [d, M, x]), P = Be(function(F) {
    d({
      type: fh,
      selectedItem: F
    });
  }, [d]), S = Be(function(F) {
    d({
      type: ph,
      selectedItem: F
    });
  }, [d]), G = Be(function(F) {
    d({
      type: hh,
      selectedItems: F
    });
  }, [d]), Z = Be(function(F) {
    d({
      type: mh,
      activeIndex: F
    });
  }, [d]), k = Be(function() {
    d({
      type: gh
    });
  }, [d]);
  return {
    getSelectedItemProps: D,
    getDropdownProps: C,
    addSelectedItem: P,
    removeSelectedItem: S,
    setSelectedItems: G,
    setActiveIndex: Z,
    reset: k,
    selectedItems: p,
    activeIndex: f
  };
}
function RR() {
  this.__data__ = [], this.size = 0;
}
var jR = RR;
function FR(e, t) {
  return e === t || e !== e && t !== t;
}
var lw = FR, BR = lw;
function LR(e, t) {
  for (var n = e.length; n--; )
    if (BR(e[n][0], t))
      return n;
  return -1;
}
var Fl = LR, VR = Fl, WR = Array.prototype, zR = WR.splice;
function UR(e) {
  var t = this.__data__, n = VR(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : zR.call(t, n, 1), --this.size, !0;
}
var HR = UR, YR = Fl;
function KR(e) {
  var t = this.__data__, n = YR(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var qR = KR, GR = Fl;
function ZR(e) {
  return GR(this.__data__, e) > -1;
}
var XR = ZR, JR = Fl;
function QR(e, t) {
  var n = this.__data__, r = JR(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var e7 = QR, t7 = jR, n7 = HR, r7 = qR, a7 = XR, i7 = e7;
function Zi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Zi.prototype.clear = t7;
Zi.prototype.delete = n7;
Zi.prototype.get = r7;
Zi.prototype.has = a7;
Zi.prototype.set = i7;
var Bl = Zi, o7 = Bl;
function s7() {
  this.__data__ = new o7(), this.size = 0;
}
var u7 = s7;
function l7(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var c7 = l7;
function d7(e) {
  return this.__data__.get(e);
}
var f7 = d7;
function p7(e) {
  return this.__data__.has(e);
}
var h7 = p7, m7 = typeof Di == "object" && Di && Di.Object === Object && Di, cw = m7, g7 = cw, v7 = typeof self == "object" && self && self.Object === Object && self, y7 = g7 || v7 || Function("return this")(), Br = y7, b7 = Br, x7 = b7.Symbol, vh = x7, Cy = vh, dw = Object.prototype, w7 = dw.hasOwnProperty, $7 = dw.toString, Po = Cy ? Cy.toStringTag : void 0;
function D7(e) {
  var t = w7.call(e, Po), n = e[Po];
  try {
    e[Po] = void 0;
    var r = !0;
  } catch {
  }
  var a = $7.call(e);
  return r && (t ? e[Po] = n : delete e[Po]), a;
}
var E7 = D7, _7 = Object.prototype, C7 = _7.toString;
function T7(e) {
  return C7.call(e);
}
var S7 = T7, Ty = vh, P7 = E7, k7 = S7, O7 = "[object Null]", A7 = "[object Undefined]", Sy = Ty ? Ty.toStringTag : void 0;
function M7(e) {
  return e == null ? e === void 0 ? A7 : O7 : Sy && Sy in Object(e) ? P7(e) : k7(e);
}
var Ll = M7;
function I7(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var fw = I7, N7 = Ll, R7 = fw, j7 = "[object AsyncFunction]", F7 = "[object Function]", B7 = "[object GeneratorFunction]", L7 = "[object Proxy]";
function V7(e) {
  if (!R7(e))
    return !1;
  var t = N7(e);
  return t == F7 || t == B7 || t == j7 || t == L7;
}
var pw = V7, W7 = Br, z7 = W7["__core-js_shared__"], U7 = z7, Bd = U7, Py = function() {
  var e = /[^.]+$/.exec(Bd && Bd.keys && Bd.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function H7(e) {
  return !!Py && Py in e;
}
var Y7 = H7, K7 = Function.prototype, q7 = K7.toString;
function G7(e) {
  if (e != null) {
    try {
      return q7.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var hw = G7, Z7 = pw, X7 = Y7, J7 = fw, Q7 = hw, ej = /[\\^$.*+?()[\]{}|]/g, tj = /^\[object .+?Constructor\]$/, nj = Function.prototype, rj = Object.prototype, aj = nj.toString, ij = rj.hasOwnProperty, oj = RegExp(
  "^" + aj.call(ij).replace(ej, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sj(e) {
  if (!J7(e) || X7(e))
    return !1;
  var t = Z7(e) ? oj : tj;
  return t.test(Q7(e));
}
var uj = sj;
function lj(e, t) {
  return e == null ? void 0 : e[t];
}
var cj = lj, dj = uj, fj = cj;
function pj(e, t) {
  var n = fj(e, t);
  return dj(n) ? n : void 0;
}
var Xi = pj, hj = Xi, mj = Br, gj = hj(mj, "Map"), yh = gj, vj = Xi, yj = vj(Object, "create"), Vl = yj, ky = Vl;
function bj() {
  this.__data__ = ky ? ky(null) : {}, this.size = 0;
}
var xj = bj;
function wj(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var $j = wj, Dj = Vl, Ej = "__lodash_hash_undefined__", _j = Object.prototype, Cj = _j.hasOwnProperty;
function Tj(e) {
  var t = this.__data__;
  if (Dj) {
    var n = t[e];
    return n === Ej ? void 0 : n;
  }
  return Cj.call(t, e) ? t[e] : void 0;
}
var Sj = Tj, Pj = Vl, kj = Object.prototype, Oj = kj.hasOwnProperty;
function Aj(e) {
  var t = this.__data__;
  return Pj ? t[e] !== void 0 : Oj.call(t, e);
}
var Mj = Aj, Ij = Vl, Nj = "__lodash_hash_undefined__";
function Rj(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ij && t === void 0 ? Nj : t, this;
}
var jj = Rj, Fj = xj, Bj = $j, Lj = Sj, Vj = Mj, Wj = jj;
function Ji(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ji.prototype.clear = Fj;
Ji.prototype.delete = Bj;
Ji.prototype.get = Lj;
Ji.prototype.has = Vj;
Ji.prototype.set = Wj;
var zj = Ji, Oy = zj, Uj = Bl, Hj = yh;
function Yj() {
  this.size = 0, this.__data__ = {
    hash: new Oy(),
    map: new (Hj || Uj)(),
    string: new Oy()
  };
}
var Kj = Yj;
function qj(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Gj = qj, Zj = Gj;
function Xj(e, t) {
  var n = e.__data__;
  return Zj(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Wl = Xj, Jj = Wl;
function Qj(e) {
  var t = Jj(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var eF = Qj, tF = Wl;
function nF(e) {
  return tF(this, e).get(e);
}
var rF = nF, aF = Wl;
function iF(e) {
  return aF(this, e).has(e);
}
var oF = iF, sF = Wl;
function uF(e, t) {
  var n = sF(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var lF = uF, cF = Kj, dF = eF, fF = rF, pF = oF, hF = lF;
function Qi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Qi.prototype.clear = cF;
Qi.prototype.delete = dF;
Qi.prototype.get = fF;
Qi.prototype.has = pF;
Qi.prototype.set = hF;
var mw = Qi, mF = Bl, gF = yh, vF = mw, yF = 200;
function bF(e, t) {
  var n = this.__data__;
  if (n instanceof mF) {
    var r = n.__data__;
    if (!gF || r.length < yF - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new vF(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var xF = bF, wF = Bl, $F = u7, DF = c7, EF = f7, _F = h7, CF = xF;
function eo(e) {
  var t = this.__data__ = new wF(e);
  this.size = t.size;
}
eo.prototype.clear = $F;
eo.prototype.delete = DF;
eo.prototype.get = EF;
eo.prototype.has = _F;
eo.prototype.set = CF;
var TF = eo, SF = "__lodash_hash_undefined__";
function PF(e) {
  return this.__data__.set(e, SF), this;
}
var kF = PF;
function OF(e) {
  return this.__data__.has(e);
}
var AF = OF, MF = mw, IF = kF, NF = AF;
function al(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new MF(); ++t < n; )
    this.add(e[t]);
}
al.prototype.add = al.prototype.push = IF;
al.prototype.has = NF;
var RF = al;
function jF(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var FF = jF;
function BF(e, t) {
  return e.has(t);
}
var LF = BF, VF = RF, WF = FF, zF = LF, UF = 1, HF = 2;
function YF(e, t, n, r, a, o) {
  var u = n & UF, l = e.length, d = t.length;
  if (l != d && !(u && d > l))
    return !1;
  var f = o.get(e), p = o.get(t);
  if (f && p)
    return f == t && p == e;
  var m = -1, v = !0, $ = n & HF ? new VF() : void 0;
  for (o.set(e, t), o.set(t, e); ++m < l; ) {
    var _ = e[m], x = t[m];
    if (r)
      var w = u ? r(x, _, m, t, e, o) : r(_, x, m, e, t, o);
    if (w !== void 0) {
      if (w)
        continue;
      v = !1;
      break;
    }
    if ($) {
      if (!WF(t, function(M, D) {
        if (!zF($, D) && (_ === M || a(_, M, n, r, o)))
          return $.push(D);
      })) {
        v = !1;
        break;
      }
    } else if (!(_ === x || a(_, x, n, r, o))) {
      v = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), v;
}
var gw = YF, KF = Br, qF = KF.Uint8Array, GF = qF;
function ZF(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var XF = ZF;
function JF(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var QF = JF, Ay = vh, My = GF, e8 = lw, t8 = gw, n8 = XF, r8 = QF, a8 = 1, i8 = 2, o8 = "[object Boolean]", s8 = "[object Date]", u8 = "[object Error]", l8 = "[object Map]", c8 = "[object Number]", d8 = "[object RegExp]", f8 = "[object Set]", p8 = "[object String]", h8 = "[object Symbol]", m8 = "[object ArrayBuffer]", g8 = "[object DataView]", Iy = Ay ? Ay.prototype : void 0, Ld = Iy ? Iy.valueOf : void 0;
function v8(e, t, n, r, a, o, u) {
  switch (n) {
    case g8:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case m8:
      return !(e.byteLength != t.byteLength || !o(new My(e), new My(t)));
    case o8:
    case s8:
    case c8:
      return e8(+e, +t);
    case u8:
      return e.name == t.name && e.message == t.message;
    case d8:
    case p8:
      return e == t + "";
    case l8:
      var l = n8;
    case f8:
      var d = r & a8;
      if (l || (l = r8), e.size != t.size && !d)
        return !1;
      var f = u.get(e);
      if (f)
        return f == t;
      r |= i8, u.set(e, t);
      var p = t8(l(e), l(t), r, a, o, u);
      return u.delete(e), p;
    case h8:
      if (Ld)
        return Ld.call(e) == Ld.call(t);
  }
  return !1;
}
var y8 = v8;
function b8(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var x8 = b8, w8 = Array.isArray, bh = w8, $8 = x8, D8 = bh;
function E8(e, t, n) {
  var r = t(e);
  return D8(e) ? r : $8(r, n(e));
}
var _8 = E8;
function C8(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var u = e[n];
    t(u, n, e) && (o[a++] = u);
  }
  return o;
}
var T8 = C8;
function S8() {
  return [];
}
var P8 = S8, k8 = T8, O8 = P8, A8 = Object.prototype, M8 = A8.propertyIsEnumerable, Ny = Object.getOwnPropertySymbols, I8 = Ny ? function(e) {
  return e == null ? [] : (e = Object(e), k8(Ny(e), function(t) {
    return M8.call(e, t);
  }));
} : O8, N8 = I8;
function R8(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var j8 = R8;
function F8(e) {
  return e != null && typeof e == "object";
}
var zl = F8, B8 = Ll, L8 = zl, V8 = "[object Arguments]";
function W8(e) {
  return L8(e) && B8(e) == V8;
}
var z8 = W8, Ry = z8, U8 = zl, vw = Object.prototype, H8 = vw.hasOwnProperty, Y8 = vw.propertyIsEnumerable, K8 = Ry(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ry : function(e) {
  return U8(e) && H8.call(e, "callee") && !Y8.call(e, "callee");
}, q8 = K8, il = { exports: {} };
function G8() {
  return !1;
}
var Z8 = G8;
il.exports;
(function(e, t) {
  var n = Br, r = Z8, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, u = o && o.exports === a, l = u ? n.Buffer : void 0, d = l ? l.isBuffer : void 0, f = d || r;
  e.exports = f;
})(il, il.exports);
var yw = il.exports, X8 = 9007199254740991, J8 = /^(?:0|[1-9]\d*)$/;
function Q8(e, t) {
  var n = typeof e;
  return t = t ?? X8, !!t && (n == "number" || n != "symbol" && J8.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var e9 = Q8, t9 = 9007199254740991;
function n9(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= t9;
}
var bw = n9, r9 = Ll, a9 = bw, i9 = zl, o9 = "[object Arguments]", s9 = "[object Array]", u9 = "[object Boolean]", l9 = "[object Date]", c9 = "[object Error]", d9 = "[object Function]", f9 = "[object Map]", p9 = "[object Number]", h9 = "[object Object]", m9 = "[object RegExp]", g9 = "[object Set]", v9 = "[object String]", y9 = "[object WeakMap]", b9 = "[object ArrayBuffer]", x9 = "[object DataView]", w9 = "[object Float32Array]", $9 = "[object Float64Array]", D9 = "[object Int8Array]", E9 = "[object Int16Array]", _9 = "[object Int32Array]", C9 = "[object Uint8Array]", T9 = "[object Uint8ClampedArray]", S9 = "[object Uint16Array]", P9 = "[object Uint32Array]", _t = {};
_t[w9] = _t[$9] = _t[D9] = _t[E9] = _t[_9] = _t[C9] = _t[T9] = _t[S9] = _t[P9] = !0;
_t[o9] = _t[s9] = _t[b9] = _t[u9] = _t[x9] = _t[l9] = _t[c9] = _t[d9] = _t[f9] = _t[p9] = _t[h9] = _t[m9] = _t[g9] = _t[v9] = _t[y9] = !1;
function k9(e) {
  return i9(e) && a9(e.length) && !!_t[r9(e)];
}
var O9 = k9;
function A9(e) {
  return function(t) {
    return e(t);
  };
}
var M9 = A9, ol = { exports: {} };
ol.exports;
(function(e, t) {
  var n = cw, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, u = o && n.process, l = function() {
    try {
      var d = a && a.require && a.require("util").types;
      return d || u && u.binding && u.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(ol, ol.exports);
var I9 = ol.exports, N9 = O9, R9 = M9, jy = I9, Fy = jy && jy.isTypedArray, j9 = Fy ? R9(Fy) : N9, xw = j9, F9 = j8, B9 = q8, L9 = bh, V9 = yw, W9 = e9, z9 = xw, U9 = Object.prototype, H9 = U9.hasOwnProperty;
function Y9(e, t) {
  var n = L9(e), r = !n && B9(e), a = !n && !r && V9(e), o = !n && !r && !a && z9(e), u = n || r || a || o, l = u ? F9(e.length, String) : [], d = l.length;
  for (var f in e)
    (t || H9.call(e, f)) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    W9(f, d))) && l.push(f);
  return l;
}
var K9 = Y9, q9 = Object.prototype;
function G9(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || q9;
  return e === n;
}
var Z9 = G9;
function X9(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var J9 = X9, Q9 = J9, eB = Q9(Object.keys, Object), tB = eB, nB = Z9, rB = tB, aB = Object.prototype, iB = aB.hasOwnProperty;
function oB(e) {
  if (!nB(e))
    return rB(e);
  var t = [];
  for (var n in Object(e))
    iB.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var sB = oB, uB = pw, lB = bw;
function cB(e) {
  return e != null && lB(e.length) && !uB(e);
}
var dB = cB, fB = K9, pB = sB, hB = dB;
function mB(e) {
  return hB(e) ? fB(e) : pB(e);
}
var gB = mB, vB = _8, yB = N8, bB = gB;
function xB(e) {
  return vB(e, bB, yB);
}
var wB = xB, By = wB, $B = 1, DB = Object.prototype, EB = DB.hasOwnProperty;
function _B(e, t, n, r, a, o) {
  var u = n & $B, l = By(e), d = l.length, f = By(t), p = f.length;
  if (d != p && !u)
    return !1;
  for (var m = d; m--; ) {
    var v = l[m];
    if (!(u ? v in t : EB.call(t, v)))
      return !1;
  }
  var $ = o.get(e), _ = o.get(t);
  if ($ && _)
    return $ == t && _ == e;
  var x = !0;
  o.set(e, t), o.set(t, e);
  for (var w = u; ++m < d; ) {
    v = l[m];
    var M = e[v], D = t[v];
    if (r)
      var C = u ? r(D, M, v, t, e, o) : r(M, D, v, e, t, o);
    if (!(C === void 0 ? M === D || a(M, D, n, r, o) : C)) {
      x = !1;
      break;
    }
    w || (w = v == "constructor");
  }
  if (x && !w) {
    var P = e.constructor, S = t.constructor;
    P != S && "constructor" in e && "constructor" in t && !(typeof P == "function" && P instanceof P && typeof S == "function" && S instanceof S) && (x = !1);
  }
  return o.delete(e), o.delete(t), x;
}
var CB = _B, TB = Xi, SB = Br, PB = TB(SB, "DataView"), kB = PB, OB = Xi, AB = Br, MB = OB(AB, "Promise"), IB = MB, NB = Xi, RB = Br, jB = NB(RB, "Set"), FB = jB, BB = Xi, LB = Br, VB = BB(LB, "WeakMap"), WB = VB, Rf = kB, jf = yh, Ff = IB, Bf = FB, Lf = WB, ww = Ll, to = hw, Ly = "[object Map]", zB = "[object Object]", Vy = "[object Promise]", Wy = "[object Set]", zy = "[object WeakMap]", Uy = "[object DataView]", UB = to(Rf), HB = to(jf), YB = to(Ff), KB = to(Bf), qB = to(Lf), Oa = ww;
(Rf && Oa(new Rf(new ArrayBuffer(1))) != Uy || jf && Oa(new jf()) != Ly || Ff && Oa(Ff.resolve()) != Vy || Bf && Oa(new Bf()) != Wy || Lf && Oa(new Lf()) != zy) && (Oa = function(e) {
  var t = ww(e), n = t == zB ? e.constructor : void 0, r = n ? to(n) : "";
  if (r)
    switch (r) {
      case UB:
        return Uy;
      case HB:
        return Ly;
      case YB:
        return Vy;
      case KB:
        return Wy;
      case qB:
        return zy;
    }
  return t;
});
var GB = Oa, Vd = TF, ZB = gw, XB = y8, JB = CB, Hy = GB, Yy = bh, Ky = yw, QB = xw, eL = 1, qy = "[object Arguments]", Gy = "[object Array]", vu = "[object Object]", tL = Object.prototype, Zy = tL.hasOwnProperty;
function nL(e, t, n, r, a, o) {
  var u = Yy(e), l = Yy(t), d = u ? Gy : Hy(e), f = l ? Gy : Hy(t);
  d = d == qy ? vu : d, f = f == qy ? vu : f;
  var p = d == vu, m = f == vu, v = d == f;
  if (v && Ky(e)) {
    if (!Ky(t))
      return !1;
    u = !0, p = !1;
  }
  if (v && !p)
    return o || (o = new Vd()), u || QB(e) ? ZB(e, t, n, r, a, o) : XB(e, t, d, n, r, a, o);
  if (!(n & eL)) {
    var $ = p && Zy.call(e, "__wrapped__"), _ = m && Zy.call(t, "__wrapped__");
    if ($ || _) {
      var x = $ ? e.value() : e, w = _ ? t.value() : t;
      return o || (o = new Vd()), a(x, w, n, r, o);
    }
  }
  return v ? (o || (o = new Vd()), JB(e, t, n, r, a, o)) : !1;
}
var rL = nL, aL = rL, Xy = zl;
function $w(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !Xy(e) && !Xy(t) ? e !== e && t !== t : aL(e, t, n, r, $w, a);
}
var iL = $w, oL = iL;
function sL(e, t) {
  return oL(e, t);
}
var uL = sL;
const Dw = /* @__PURE__ */ Pl(uL), ga = te.createContext(void 0), lL = ({
  children: e,
  highlightOnMouseOver: t = !1,
  ...n
}) => {
  const {
    filteredOptions: r,
    selected: a,
    selectedOptions: o,
    onSelectedChange: u,
    multiple: l,
    forceMount: d,
    open: f,
    onOpenChange: p,
    search: m,
    onSearchChange: v,
    disabled: $
  } = n, _ = Se(null), x = Se(null), w = r == null ? void 0 : r.findIndex((F) => {
    var R;
    return F.value === ((R = o[0]) == null ? void 0 : R.value);
  }), { getSelectedItemProps: M, getDropdownProps: D } = Aa({
    selectedItems: o,
    onStateChange({ selectedItems: F, type: R }) {
      var I;
      switch (R) {
        case Aa.stateChangeTypes.SelectedItemKeyDownBackspace:
        case Aa.stateChangeTypes.SelectedItemKeyDownDelete:
        case Aa.stateChangeTypes.DropdownKeyDownBackspace:
        case Aa.stateChangeTypes.FunctionRemoveSelectedItem:
          u(
            l ? (F || []).map((j) => j.value) : (I = F == null ? void 0 : F[0]) == null ? void 0 : I.value
          );
          break;
      }
    }
  }), [C, P] = He(-1);
  Ue(() => {
    P(
      f || d ? C != null && C > -1 ? C : w >= 0 ? w : 0 : -1
    );
  }, [f]);
  const { getToggleButtonProps: S, getMenuProps: G, getItemProps: Z } = Ln({
    onIsOpenChange: ({ isOpen: F, highlightedIndex: R }) => {
      $ || (p(F), F && (P(
        R != null && R > -1 ? R : w >= 0 ? w : 0
      ), setTimeout(() => {
        var I;
        (I = x.current) == null || I.focus();
      }, 10)));
    },
    isOpen: $ ? !1 : f,
    items: r,
    // filteredOptions otherwise index doesn't match
    itemToString(F) {
      return F ? F.value : "";
    },
    highlightedIndex: C,
    onHighlightedIndexChange: ({ highlightedIndex: F }) => {
      P(F);
    },
    selectedItem: null,
    isItemDisabled: (F) => F == null ? void 0 : F.disabled,
    stateReducer(F, R) {
      let { changes: I, type: j, index: E } = R;
      switch (j) {
        case Ln.stateChangeTypes.ToggleButtonBlur:
          document.activeElement === x.current && (I = {
            ...I,
            highlightedIndex: F.highlightedIndex,
            isOpen: !0
          });
          break;
        case Ln.stateChangeTypes.ToggleButtonClick:
          I = {
            ...I,
            isOpen: !0
          };
          break;
        case Ln.stateChangeTypes.ItemMouseMove:
          I = {
            ...I,
            isOpen: F.isOpen,
            highlightedIndex: t ? I.highlightedIndex : F.highlightedIndex
          };
          break;
        case Ln.stateChangeTypes.MenuMouseLeave:
          I = {
            ...I,
            isOpen: F.isOpen,
            highlightedIndex: t ? I.highlightedIndex : F.highlightedIndex
          };
          break;
        case Ln.stateChangeTypes.ToggleButtonKeyDownEnter:
        case Ln.stateChangeTypes.ItemClick:
          I = {
            ...I,
            isOpen: !!l,
            // keep the dropdown open when selecting multiple items.
            highlightedIndex: E
            // focus selected item
          };
          break;
      }
      return I;
    },
    onStateChange({ type: F, selectedItem: R }) {
      var I;
      switch (F) {
        case Ln.stateChangeTypes.ToggleButtonClick:
        case Ln.stateChangeTypes.ToggleButtonKeyDownEnter:
        case Ln.stateChangeTypes.ItemClick:
          (I = _.current) == null || I.focus(), R && (l && Array.isArray(a) ? a != null && a.includes(R.value) ? u(a == null ? void 0 : a.filter((j) => j !== R.value)) : u([...a || [], R.value]) : u(R.value), v(""));
          break;
      }
    }
  }), k = (F) => {
    const R = S();
    return rs({
      ref: x,
      onChange: (j) => {
        P(0), v(j.target.value);
      },
      onKeyDown: (j) => {
        var E;
        (j.key === "ArrowDown" || j.key === "ArrowUp" || j.key === "Enter" || j.key === "Escape") && (j.preventDefault(), (E = R.onKeyDown) == null || E.call(R, j));
      },
      value: m
    }, F);
  };
  return /* @__PURE__ */ y.jsx(
    ga.Provider,
    {
      value: {
        ...n,
        highlightedIndex: C,
        getToggleButtonProps: S,
        getMenuProps: G,
        getInputProps: k,
        getItemProps: Z,
        getSelectedItemProps: M,
        getDropdownProps: D,
        toggleButtonRef: _
      },
      children: e
    }
  );
}, cL = (e, t) => {
  var n;
  return ((n = Lx(e.label)) == null ? void 0 : n.toLowerCase().includes(t.toLowerCase())) || e.value.toLowerCase().includes(t.toLowerCase());
}, dL = ({
  ref: e,
  asChild: t,
  multiple: n,
  children: r,
  defaultSelected: a,
  selected: o,
  onSelectedChange: u,
  defaultSearch: l,
  search: d,
  onSearchChange: f = () => {
  },
  searchFilter: p = cL,
  forceMount: m,
  defaultOpen: v,
  open: $,
  onOpenChange: _,
  allowAddOption: x,
  onAddOption: w,
  disabled: M,
  required: D,
  // context control props
  highlightOnMouseOver: C,
  ...P
}) => {
  const S = Se(null), G = a ?? (n ? [] : ""), [Z, k] = Si(
    G,
    o,
    u
  );
  if (Ue(() => {
    Dw(Z, G) || k(Z);
  }, [G, n]), n && !Array.isArray(Z))
    throw new Error("SelectRoot: selected must be an array when multiple is true");
  if (!n && Array.isArray(Z))
    throw new Error("SelectRoot: selected must be a string when multiple is false");
  const [F, R] = Si(
    l ?? "",
    d,
    f
  ), [I, j] = Si(v ?? !1, $, _), [E, L] = He([]), [H, z] = He([]);
  oa(() => {
    (I || m || E.length > 0) && z(E);
  }, [I, E]), oa(() => {
    D && H.length > 0 && Z === "" && k(H[0].value);
  }, [H == null ? void 0 : H.length]);
  const N = (re, ue) => {
    L((ce) => ue !== void 0 ? [...ce.slice(0, ue), re, ...ce.slice(ue)] : [...ce, re]);
  }, B = (re) => {
    L((ue) => ue.filter((ce) => ce.value !== re.value));
  }, J = Xe(
    () => p ? H.filter((re) => p(re, F || "")) : H,
    [H, p, F]
  ), A = Xe(() => {
    const re = Array.isArray(Z) ? Z : Z !== void 0 ? [Z] : [], ue = [], ce = [];
    for (const ye of re) {
      const ge = H.find(($e) => $e.value === ye);
      ge ? ue.push(ge) : ce.push({ value: ye, label: ye });
    }
    return ue.sort((ye, ge) => H.findIndex(($e) => $e.value === ye.value) - H.findIndex(($e) => $e.value === ge.value)), ue.concat(ce);
  }, [Z, H]), W = t ? Ct : "div";
  return /* @__PURE__ */ y.jsx(
    lL,
    {
      multiple: !!n,
      search: F || "",
      onSearchChange: R,
      open: I,
      onOpenChange: j,
      allowAddOption: x,
      onAddOption: w,
      selected: Z,
      onSelectedChange: k,
      registerOption: N,
      unregisterOption: B,
      options: H,
      filteredOptions: J,
      selectedOptions: A,
      disabled: M,
      required: D,
      highlightOnMouseOver: C,
      children: /* @__PURE__ */ y.jsx(W, { ...P, ref: S, children: r })
    }
  );
}, fL = ({ asChild: e, ...t }) => {
  const { getInputProps: n } = At(ga), r = n(), a = e ? Ct : "input";
  return /* @__PURE__ */ y.jsx(a, { ...rs(r, t) });
}, pL = ({ asChild: e, ...t }) => {
  const n = Se(null), { open: r, getMenuProps: a } = At(ga), o = a(), u = rs(o, t), l = e ? Ct : "div";
  return /* @__PURE__ */ y.jsx(l, { ...u, ref: dn(u.ref, n), "data-state": r ? "open" : "closed" });
}, hL = ({ asChild: e, placeholder: t = "", ...n }) => {
  var d;
  const r = Se(null), { selectedOptions: a } = At(ga), o = a.length > 1 ? (
    // TODO: join doesnt work on formatted values
    a.map((f) => f.label).join(", ")
  ) : (d = a[0]) == null ? void 0 : d.label, u = a.length === 0 || a.length === 1 && a[0].value === "", l = e ? Ct : "span";
  return /* @__PURE__ */ y.jsx(l, { ...n, ref: dn(r, n.ref), "data-placeholder": u ? "" : void 0, children: u ? t : o });
}, mL = ({ asChild: e, ...t }) => {
  const { disabled: n, getToggleButtonProps: r, required: a, getDropdownProps: o, open: u, toggleButtonRef: l } = At(ga), d = r(o({ preventKeyAction: u }));
  delete d.tabIndex;
  const f = rs(d, t), p = n || f.disabled, m = e ? Ct : "button";
  return /* @__PURE__ */ y.jsx(
    m,
    {
      type: "button",
      "data-state": u ? "open" : "closed",
      "data-disabled": p ? "" : void 0,
      "aria-required": a,
      ...f,
      ref: dn(l, f.ref),
      disabled: p
    }
  );
}, gL = ({ asChild: e, ...t }) => {
  const n = e ? Ct : "div";
  return /* @__PURE__ */ y.jsx(n, { ...t });
}, vL = ({ asChild: e, ...t }) => {
  const n = e ? Ct : "label";
  return /* @__PURE__ */ y.jsx(n, { role: "group", ...t });
}, yL = ({ asChild: e, ...t }) => {
  const n = e ? Ct : "div";
  return /* @__PURE__ */ y.jsx(n, { "aria-hidden": "true", role: "separator", ...t });
}, xh = te.createContext(void 0), bL = ({ asChild: e, value: t, disabled: n, index: r = void 0, ...a }) => {
  const o = Se(null), { filteredOptions: u, selectedOptions: l, getItemProps: d, highlightedIndex: f, registerOption: p, unregisterOption: m } = At(ga), [v, $] = He(""), _ = { ref: o, value: t, label: v, disabled: n };
  oa(() => (p(_, r), () => m(_)), [t, v, n, r]);
  const x = u == null ? void 0 : u.findIndex((G) => G.value === t), w = x !== void 0 && x > -1 ? u == null ? void 0 : u[x] : void 0, M = l == null ? void 0 : l.some((G) => G.value === t);
  if (!w) return null;
  const D = d({ item: w, index: x }), C = rs(D, a), P = f === x, S = e ? Ct : "div";
  return /* @__PURE__ */ y.jsx(xh.Provider, { value: { isSelected: M, isHighlighted: P, value: t, onTextChange: $ }, children: /* @__PURE__ */ y.jsx(
    S,
    {
      ...C,
      ref: dn(o, C.ref),
      role: "option",
      "aria-disabled": n || void 0,
      "data-selected": M ? "" : void 0,
      "data-highlighted": P ? "" : void 0,
      "data-state": M ? "checked" : "unchecked",
      "data-disabled": n ? "" : void 0
    }
  ) });
}, xL = ({ asChild: e, children: t, ...n }) => {
  const { onTextChange: r } = At(xh);
  oa(() => {
    r(t);
  }, [t]);
  const a = e ? Ct : "span";
  return /* @__PURE__ */ y.jsx(a, { ...n, children: t });
}, wL = ({ asChild: e, ...t }) => {
  const { isSelected: n } = At(xh);
  if (!n) return null;
  const r = e ? Ct : "span";
  return /* @__PURE__ */ y.jsx(r, { ...t });
}, wh = ({ focusRef: e, onFocus: t, value: n, onChange: r }) => {
  const a = Se(null);
  return {
    onSelectedChange: (l) => {
      Dw(n, l) || r0(a == null ? void 0 : a.current, l);
    },
    selectNativeProps: {
      ref: a,
      onFocus: Hk(t, (l) => {
        var d;
        (d = e == null ? void 0 : e.current) == null || d.focus();
      }),
      onChange: r
    }
  };
}, $L = ({ ref: e, ...t }) => {
  const n = Se(null), { multiple: r, options: a, selected: o, required: u } = At(ga);
  return /* @__PURE__ */ y.jsxs("select", { ...t, tabIndex: -1, multiple: r, ref: dn(n, e), children: [
    !u && /* @__PURE__ */ y.jsx("option", { value: "", disabled: !1 }),
    o && (Array.isArray(o) ? o : [o]).map((l) => /* @__PURE__ */ y.jsx("option", { value: l, selected: !0, children: l }, l)),
    a == null ? void 0 : a.filter((l) => !o || (Array.isArray(o) ? !o.includes(l.value) : o !== l.value)).map((l) => {
      const d = typeof l.label == "string" ? l.label : Lx(l.label || "");
      return /* @__PURE__ */ y.jsx("option", { value: l.value, children: d }, l.value);
    })
  ] });
}, tt = Object.assign(dL, {
  Search: fL,
  Content: pL,
  Value: hL,
  Trigger: mL,
  Group: gL,
  GroupLabel: vL,
  Separator: yL,
  Option: bL,
  OptionText: xL,
  OptionIndicator: wL,
  Native: $L
}), DL = ({
  value: e,
  label: t,
  disabled: n = !1,
  className: r,
  index: a = void 0,
  hideCheck: o = !1
}) => /* @__PURE__ */ y.jsxs(
  tt.Option,
  {
    value: e,
    className: Ae(
      "flex items-center gap-1 ui-highlighted:bg-neutral-100 ui-disabled:opacity-50 text-sm px-2 py-1 rounded text-neutral-700 select-none",
      r
    ),
    disabled: n,
    index: a,
    children: [
      !o && /* @__PURE__ */ y.jsx("span", { className: "flex justify-center items-center w-4 h-4 flex-none", children: /* @__PURE__ */ y.jsx(tt.OptionIndicator, { children: /* @__PURE__ */ y.jsx(Ol, {}) }) }),
      /* @__PURE__ */ y.jsx(tt.OptionText, { children: t || e })
    ]
  }
), Wd = te.memo(DL), Ew = ({
  // widget props
  widgetRef: e,
  controls: t,
  // single select props
  options: n,
  defaultOpen: r,
  open: a,
  onOpenChange: o,
  allowAddOption: u,
  onAddOption: l,
  placeholder: d,
  searchPlaceholder: f,
  emptyLabel: p,
  hideSearch: m = !1,
  hideCheck: v = !1,
  hideClear: $ = !1,
  // remaining are select props we can pass down
  // the ones mentioned here are the ones we want to override
  className: _,
  value: x,
  onChange: w,
  onFocus: M,
  ...D
}) => {
  const C = te.useRef(null), P = te.useRef(null), [S, G] = He(!1);
  Ue(() => {
    setTimeout(() => {
      G(!0);
    }, 0);
  }, []);
  const [Z, k] = tn("", x, w), [F, R] = He(!1), [I, j] = He(""), E = (W) => {
    R(!!W), W || setTimeout(() => {
      var re;
      (re = C.current) == null || re.focus();
    }, 10);
  }, { onSelectedChange: L, selectNativeProps: H } = wh({
    focusRef: C,
    onFocus: M,
    value: Z,
    onChange: k
  }), z = (W) => {
    r0(H.ref.current, ""), W.preventDefault(), W.stopPropagation();
  }, N = n == null ? void 0 : n.flatMap((W) => Array.isArray(W) ? W[1].map((re) => re.value) : W.value), B = (W) => {
    N.includes(W) ? L(W) : u && (l == null || l(W));
  }, [J, A] = He(null);
  return Ue(() => {
    J && setTimeout(() => {
      var W;
      (W = J == null ? void 0 : J.querySelector("[data-selected]")) == null || W.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 0);
  }, [J]), /* @__PURE__ */ y.jsx(Kn, { open: F, children: /* @__PURE__ */ y.jsxs(
    tt,
    {
      search: I,
      onSearchChange: j,
      selected: Z,
      onSelectedChange: B,
      open: F,
      forceMount: !S,
      onOpenChange: E,
      allowAddOption: u,
      onAddOption: l,
      required: D.required,
      disabled: D.disabled,
      highlightOnMouseOver: !0,
      children: [
        /* @__PURE__ */ y.jsx(Kn.Anchor, { children: /* @__PURE__ */ y.jsx(tt.Trigger, { asChild: !0, children: /* @__PURE__ */ y.jsxs(
          ke,
          {
            variant: "button",
            disabled: D.disabled,
            ref: e,
            className: _,
            children: [
              /* @__PURE__ */ y.jsx(ke.Content, { asChild: !0, children: /* @__PURE__ */ y.jsx(
                "button",
                {
                  ref: C,
                  className: "pl-2 py-1.5 pr-0 cursor-default !outline-none text-left",
                  disabled: D.disabled,
                  type: "button",
                  children: /* @__PURE__ */ y.jsx(
                    tt.Value,
                    {
                      placeholder: d === void 0 ? p : d,
                      className: "ui-placeholder:text-neutral-400 ui-placeholder:font-normal min-h-5 text-left"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ y.jsxs(ke.Controls, { children: [
                Z && !$ && !D.required ? /* @__PURE__ */ y.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: z, children: /* @__PURE__ */ y.jsx(qa, {}) }) : /* @__PURE__ */ y.jsx(ke.ControlButton, { className: "pointer-events-none -ml-2", children: /* @__PURE__ */ y.jsx(
                  w5,
                  {
                    className: Ae(
                      "text-neutral-400 transition-colors",
                      !D.disabled && "group-hover:text-neutral-700"
                    )
                  }
                ) }),
                t
              ] })
            ]
          }
        ) }) }),
        /* @__PURE__ */ y.jsx(
          Kn.Content,
          {
            className: Ae("p-0 min-w-0 overflow-visible flex flex-col", !S && "hidden"),
            onOpenAutoFocus: (W) => {
              W.preventDefault();
            },
            forceMount: !S,
            align: "start",
            onWheel: (W) => {
              W.stopPropagation();
            },
            children: /* @__PURE__ */ y.jsxs(
              tt.Content,
              {
                ref: A,
                className: "flex flex-col flex-1 min-h-0",
                onKeyDown: (W) => {
                  W.key === "Escape" && W.stopPropagation();
                },
                children: [
                  /* @__PURE__ */ y.jsxs("div", { className: Ae("relative w-full min-w-0 p-2", m && "hidden"), children: [
                    /* @__PURE__ */ y.jsx("span", { className: "absolute top-1/2 left-4 transform -translate-y-1/2 text-neutral-400 text-xl", children: /* @__PURE__ */ y.jsx(O5, { className: "!w-3.5 !h-3.5" }) }),
                    /* @__PURE__ */ y.jsx(ke, { variant: "input", asChild: !0, disabled: D.disabled, children: /* @__PURE__ */ y.jsx(
                      tt.Search,
                      {
                        className: "rounded px-2 py-1 !pl-7 bg-transparent w-full min-w-0",
                        placeholder: f,
                        ref: P
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ y.jsxs(
                    "div",
                    {
                      className: Ae(
                        "flex flex-col overflow-auto scrollbar-thin flex-1 min-h-0 p-1.5",
                        !m && "pt-0"
                      ),
                      children: [
                        u && /* @__PURE__ */ y.jsx(
                          Wd,
                          {
                            index: 0,
                            value: I || "",
                            label: I || "",
                            disabled: !I,
                            className: I ? "" : "hidden",
                            hideCheck: v
                          }
                        ),
                        n.map((W, re) => {
                          if (Array.isArray(W)) {
                            const [ue, ce] = W;
                            return /* @__PURE__ */ y.jsxs(te.Fragment, { children: [
                              re !== 0 && /* @__PURE__ */ y.jsx(tt.Separator, { className: "border-t border-neutral-200 my-2" }),
                              /* @__PURE__ */ y.jsxs(tt.Group, { className: "flex flex-col", children: [
                                /* @__PURE__ */ y.jsx(tt.GroupLabel, { className: "font-medium text-sm px-2 py-1 !pl-7", children: ue }),
                                ce.map((ye) => /* @__PURE__ */ y.jsx(
                                  Wd,
                                  {
                                    ...ye,
                                    hideCheck: v
                                  },
                                  ye.value
                                ))
                              ] })
                            ] }, ue);
                          }
                          return /* @__PURE__ */ y.jsx(Wd, { ...W, hideCheck: v }, W.value);
                        })
                      ]
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ y.jsx(ke.Native, { children: /* @__PURE__ */ y.jsx(tt.Native, { ...D, ...H }) })
      ]
    }
  ) });
}, Jy = (e, t) => Object.keys({ ...e, ...t }).reduce((n, r) => ({
  ...n,
  [r]: Ae(e[r], t[r])
}), {}), _w = ({
  className: e,
  classNames: t = {},
  showOutsideDays: n = !0,
  modifiers: r = {},
  modifiersClassNames: a = {},
  ...o
}) => {
  const u = {
    weekend: { dayOfWeek: [0, 6] }
  }, l = {
    highlighted: "bg-theme-100"
  };
  return /* @__PURE__ */ y.jsx(
    ON,
    {
      locale: QM,
      captionLayout: "dropdown-buttons",
      showOutsideDays: n,
      weekStartsOn: 1,
      modifiersClassNames: Jy(l, a),
      modifiers: { ...u, ...r },
      className: Ae("p-3", e),
      classNames: Jy(
        {
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
        },
        t
      ),
      components: {
        IconLeft: ({ ...d }) => /* @__PURE__ */ y.jsx(b5, { className: "h-4 w-4" }),
        IconRight: ({ ...d }) => /* @__PURE__ */ y.jsx(x5, { className: "h-4 w-4" }),
        Dropdown: ({ ...d }) => {
          const { name: f, onChange: p, value: m } = d;
          return /* @__PURE__ */ y.jsx(
            Ew,
            {
              className: Ae(f === "months" && "min-w-[6.75rem]", d.className),
              onChange: p,
              value: m == null ? void 0 : m.toString(),
              name: f,
              options: te.Children.map(d.children, (v) => {
                var $, _;
                return {
                  value: ($ = v.props) == null ? void 0 : $.value.toString(),
                  label: (_ = v.props) == null ? void 0 : _.children
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
var Cw = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Di, function() {
    var n = "month", r = "quarter";
    return function(a, o) {
      var u = o.prototype;
      u.quarter = function(f) {
        return this.$utils().u(f) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (f - 1));
      };
      var l = u.add;
      u.add = function(f, p) {
        return f = Number(f), this.$utils().p(p) === r ? this.add(3 * f, n) : l.bind(this)(f, p);
      };
      var d = u.startOf;
      u.startOf = function(f, p) {
        var m = this.$utils(), v = !!m.u(p) || p;
        if (m.p(f) === r) {
          var $ = this.quarter() - 1;
          return v ? this.month(3 * $).startOf(n).startOf("day") : this.month(3 * $ + 2).endOf(n).endOf("day");
        }
        return d.bind(this)(f, p);
      };
    };
  });
})(Cw);
var EL = Cw.exports;
const _L = /* @__PURE__ */ Pl(EL);
var Tw = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Di, function() {
    var n = 1e3, r = 6e4, a = 36e5, o = "millisecond", u = "second", l = "minute", d = "hour", f = "day", p = "week", m = "month", v = "quarter", $ = "year", _ = "date", x = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, M = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, D = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
      var H = ["th", "st", "nd", "rd"], z = L % 100;
      return "[" + L + (H[(z - 20) % 10] || H[z] || H[0]) + "]";
    } }, C = function(L, H, z) {
      var N = String(L);
      return !N || N.length >= H ? L : "" + Array(H + 1 - N.length).join(z) + L;
    }, P = { s: C, z: function(L) {
      var H = -L.utcOffset(), z = Math.abs(H), N = Math.floor(z / 60), B = z % 60;
      return (H <= 0 ? "+" : "-") + C(N, 2, "0") + ":" + C(B, 2, "0");
    }, m: function L(H, z) {
      if (H.date() < z.date()) return -L(z, H);
      var N = 12 * (z.year() - H.year()) + (z.month() - H.month()), B = H.clone().add(N, m), J = z - B < 0, A = H.clone().add(N + (J ? -1 : 1), m);
      return +(-(N + (z - B) / (J ? B - A : A - B)) || 0);
    }, a: function(L) {
      return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
    }, p: function(L) {
      return { M: m, y: $, w: p, d: f, D: _, h: d, m: l, s: u, ms: o, Q: v }[L] || String(L || "").toLowerCase().replace(/s$/, "");
    }, u: function(L) {
      return L === void 0;
    } }, S = "en", G = {};
    G[S] = D;
    var Z = "$isDayjsObject", k = function(L) {
      return L instanceof j || !(!L || !L[Z]);
    }, F = function L(H, z, N) {
      var B;
      if (!H) return S;
      if (typeof H == "string") {
        var J = H.toLowerCase();
        G[J] && (B = J), z && (G[J] = z, B = J);
        var A = H.split("-");
        if (!B && A.length > 1) return L(A[0]);
      } else {
        var W = H.name;
        G[W] = H, B = W;
      }
      return !N && B && (S = B), B || !N && S;
    }, R = function(L, H) {
      if (k(L)) return L.clone();
      var z = typeof H == "object" ? H : {};
      return z.date = L, z.args = arguments, new j(z);
    }, I = P;
    I.l = F, I.i = k, I.w = function(L, H) {
      return R(L, { locale: H.$L, utc: H.$u, x: H.$x, $offset: H.$offset });
    };
    var j = function() {
      function L(z) {
        this.$L = F(z.locale, null, !0), this.parse(z), this.$x = this.$x || z.x || {}, this[Z] = !0;
      }
      var H = L.prototype;
      return H.parse = function(z) {
        this.$d = function(N) {
          var B = N.date, J = N.utc;
          if (B === null) return /* @__PURE__ */ new Date(NaN);
          if (I.u(B)) return /* @__PURE__ */ new Date();
          if (B instanceof Date) return new Date(B);
          if (typeof B == "string" && !/Z$/i.test(B)) {
            var A = B.match(w);
            if (A) {
              var W = A[2] - 1 || 0, re = (A[7] || "0").substring(0, 3);
              return J ? new Date(Date.UTC(A[1], W, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, re)) : new Date(A[1], W, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, re);
            }
          }
          return new Date(B);
        }(z), this.init();
      }, H.init = function() {
        var z = this.$d;
        this.$y = z.getFullYear(), this.$M = z.getMonth(), this.$D = z.getDate(), this.$W = z.getDay(), this.$H = z.getHours(), this.$m = z.getMinutes(), this.$s = z.getSeconds(), this.$ms = z.getMilliseconds();
      }, H.$utils = function() {
        return I;
      }, H.isValid = function() {
        return this.$d.toString() !== x;
      }, H.isSame = function(z, N) {
        var B = R(z);
        return this.startOf(N) <= B && B <= this.endOf(N);
      }, H.isAfter = function(z, N) {
        return R(z) < this.startOf(N);
      }, H.isBefore = function(z, N) {
        return this.endOf(N) < R(z);
      }, H.$g = function(z, N, B) {
        return I.u(z) ? this[N] : this.set(B, z);
      }, H.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, H.valueOf = function() {
        return this.$d.getTime();
      }, H.startOf = function(z, N) {
        var B = this, J = !!I.u(N) || N, A = I.p(z), W = function(xe, be) {
          var Ce = I.w(B.$u ? Date.UTC(B.$y, be, xe) : new Date(B.$y, be, xe), B);
          return J ? Ce : Ce.endOf(f);
        }, re = function(xe, be) {
          return I.w(B.toDate()[xe].apply(B.toDate("s"), (J ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(be)), B);
        }, ue = this.$W, ce = this.$M, ye = this.$D, ge = "set" + (this.$u ? "UTC" : "");
        switch (A) {
          case $:
            return J ? W(1, 0) : W(31, 11);
          case m:
            return J ? W(1, ce) : W(0, ce + 1);
          case p:
            var $e = this.$locale().weekStart || 0, oe = (ue < $e ? ue + 7 : ue) - $e;
            return W(J ? ye - oe : ye + (6 - oe), ce);
          case f:
          case _:
            return re(ge + "Hours", 0);
          case d:
            return re(ge + "Minutes", 1);
          case l:
            return re(ge + "Seconds", 2);
          case u:
            return re(ge + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, H.endOf = function(z) {
        return this.startOf(z, !1);
      }, H.$set = function(z, N) {
        var B, J = I.p(z), A = "set" + (this.$u ? "UTC" : ""), W = (B = {}, B[f] = A + "Date", B[_] = A + "Date", B[m] = A + "Month", B[$] = A + "FullYear", B[d] = A + "Hours", B[l] = A + "Minutes", B[u] = A + "Seconds", B[o] = A + "Milliseconds", B)[J], re = J === f ? this.$D + (N - this.$W) : N;
        if (J === m || J === $) {
          var ue = this.clone().set(_, 1);
          ue.$d[W](re), ue.init(), this.$d = ue.set(_, Math.min(this.$D, ue.daysInMonth())).$d;
        } else W && this.$d[W](re);
        return this.init(), this;
      }, H.set = function(z, N) {
        return this.clone().$set(z, N);
      }, H.get = function(z) {
        return this[I.p(z)]();
      }, H.add = function(z, N) {
        var B, J = this;
        z = Number(z);
        var A = I.p(N), W = function(ce) {
          var ye = R(J);
          return I.w(ye.date(ye.date() + Math.round(ce * z)), J);
        };
        if (A === m) return this.set(m, this.$M + z);
        if (A === $) return this.set($, this.$y + z);
        if (A === f) return W(1);
        if (A === p) return W(7);
        var re = (B = {}, B[l] = r, B[d] = a, B[u] = n, B)[A] || 1, ue = this.$d.getTime() + z * re;
        return I.w(ue, this);
      }, H.subtract = function(z, N) {
        return this.add(-1 * z, N);
      }, H.format = function(z) {
        var N = this, B = this.$locale();
        if (!this.isValid()) return B.invalidDate || x;
        var J = z || "YYYY-MM-DDTHH:mm:ssZ", A = I.z(this), W = this.$H, re = this.$m, ue = this.$M, ce = B.weekdays, ye = B.months, ge = B.meridiem, $e = function(be, Ce, pe, Fe) {
          return be && (be[Ce] || be(N, J)) || pe[Ce].slice(0, Fe);
        }, oe = function(be) {
          return I.s(W % 12 || 12, be, "0");
        }, xe = ge || function(be, Ce, pe) {
          var Fe = be < 12 ? "AM" : "PM";
          return pe ? Fe.toLowerCase() : Fe;
        };
        return J.replace(M, function(be, Ce) {
          return Ce || function(pe) {
            switch (pe) {
              case "YY":
                return String(N.$y).slice(-2);
              case "YYYY":
                return I.s(N.$y, 4, "0");
              case "M":
                return ue + 1;
              case "MM":
                return I.s(ue + 1, 2, "0");
              case "MMM":
                return $e(B.monthsShort, ue, ye, 3);
              case "MMMM":
                return $e(ye, ue);
              case "D":
                return N.$D;
              case "DD":
                return I.s(N.$D, 2, "0");
              case "d":
                return String(N.$W);
              case "dd":
                return $e(B.weekdaysMin, N.$W, ce, 2);
              case "ddd":
                return $e(B.weekdaysShort, N.$W, ce, 3);
              case "dddd":
                return ce[N.$W];
              case "H":
                return String(W);
              case "HH":
                return I.s(W, 2, "0");
              case "h":
                return oe(1);
              case "hh":
                return oe(2);
              case "a":
                return xe(W, re, !0);
              case "A":
                return xe(W, re, !1);
              case "m":
                return String(re);
              case "mm":
                return I.s(re, 2, "0");
              case "s":
                return String(N.$s);
              case "ss":
                return I.s(N.$s, 2, "0");
              case "SSS":
                return I.s(N.$ms, 3, "0");
              case "Z":
                return A;
            }
            return null;
          }(be) || A.replace(":", "");
        });
      }, H.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, H.diff = function(z, N, B) {
        var J, A = this, W = I.p(N), re = R(z), ue = (re.utcOffset() - this.utcOffset()) * r, ce = this - re, ye = function() {
          return I.m(A, re);
        };
        switch (W) {
          case $:
            J = ye() / 12;
            break;
          case m:
            J = ye();
            break;
          case v:
            J = ye() / 3;
            break;
          case p:
            J = (ce - ue) / 6048e5;
            break;
          case f:
            J = (ce - ue) / 864e5;
            break;
          case d:
            J = ce / a;
            break;
          case l:
            J = ce / r;
            break;
          case u:
            J = ce / n;
            break;
          default:
            J = ce;
        }
        return B ? J : I.a(J);
      }, H.daysInMonth = function() {
        return this.endOf(m).$D;
      }, H.$locale = function() {
        return G[this.$L];
      }, H.locale = function(z, N) {
        if (!z) return this.$L;
        var B = this.clone(), J = F(z, N, !0);
        return J && (B.$L = J), B;
      }, H.clone = function() {
        return I.w(this.$d, this);
      }, H.toDate = function() {
        return new Date(this.valueOf());
      }, H.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, H.toISOString = function() {
        return this.$d.toISOString();
      }, H.toString = function() {
        return this.$d.toUTCString();
      }, L;
    }(), E = j.prototype;
    return R.prototype = E, [["$ms", o], ["$s", u], ["$m", l], ["$H", d], ["$W", f], ["$M", m], ["$y", $], ["$D", _]].forEach(function(L) {
      E[L[1]] = function(H) {
        return this.$g(H, L[0], L[1]);
      };
    }), R.extend = function(L, H) {
      return L.$i || (L(H, j, R), L.$i = !0), R;
    }, R.locale = F, R.isDayjs = k, R.unix = function(L) {
      return R(1e3 * L);
    }, R.en = G[S], R.Ls = G, R.p = {}, R;
  });
})(Tw);
var CL = Tw.exports;
const Zt = /* @__PURE__ */ Pl(CL);
var We;
(function(e) {
  e[e.AM = 0] = "AM", e[e.PM = 1] = "PM";
})(We || (We = {}));
var Kt;
(function(e) {
  e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY";
})(Kt || (Kt = {}));
var Vn;
(function(e) {
  e[e.JANUARY = 1] = "JANUARY", e[e.FEBRUARY = 2] = "FEBRUARY", e[e.MARCH = 3] = "MARCH", e[e.APRIL = 4] = "APRIL", e[e.MAY = 5] = "MAY", e[e.JUNE = 6] = "JUNE", e[e.JULY = 7] = "JULY", e[e.AUGUST = 8] = "AUGUST", e[e.SEPTEMBER = 9] = "SEPTEMBER", e[e.OCTOBER = 10] = "OCTOBER", e[e.NOVEMBER = 11] = "NOVEMBER", e[e.DECEMBER = 12] = "DECEMBER";
})(Vn || (Vn = {}));
function Qy(e, t) {
  t = t.add(1, "day"), tr(e, t), da(e, t);
}
function TL(e, t) {
  t = t.add(1, "day"), zo(e, t), da(e, t);
}
function tr(e, t) {
  e.assign("day", t.date()), e.assign("month", t.month() + 1), e.assign("year", t.year());
}
function Sw(e, t) {
  e.assign("hour", t.hour()), e.assign("minute", t.minute()), e.assign("second", t.second()), e.assign("millisecond", t.millisecond()), e.get("hour") < 12 ? e.assign("meridiem", We.AM) : e.assign("meridiem", We.PM);
}
function zo(e, t) {
  e.imply("day", t.date()), e.imply("month", t.month() + 1), e.imply("year", t.year());
}
function da(e, t) {
  e.imply("hour", t.hour()), e.imply("minute", t.minute()), e.imply("second", t.second()), e.imply("millisecond", t.millisecond());
}
const SL = {
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
    dstStart: (e) => eb(e, Vn.MARCH, Kt.SUNDAY, 2),
    dstEnd: (e) => eb(e, Vn.OCTOBER, Kt.SUNDAY, 3)
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
    dstStart: (e) => Qr(e, Vn.MARCH, Kt.SUNDAY, 2, 2),
    dstEnd: (e) => Qr(e, Vn.NOVEMBER, Kt.SUNDAY, 1, 2)
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
    dstStart: (e) => Qr(e, Vn.MARCH, Kt.SUNDAY, 2, 2),
    dstEnd: (e) => Qr(e, Vn.NOVEMBER, Kt.SUNDAY, 1, 2)
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
    dstStart: (e) => Qr(e, Vn.MARCH, Kt.SUNDAY, 2, 2),
    dstEnd: (e) => Qr(e, Vn.NOVEMBER, Kt.SUNDAY, 1, 2)
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
    dstStart: (e) => Qr(e, Vn.MARCH, Kt.SUNDAY, 2, 2),
    dstEnd: (e) => Qr(e, Vn.NOVEMBER, Kt.SUNDAY, 1, 2)
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
function Qr(e, t, n, r, a = 0) {
  let o = 0, u = 0;
  for (; u < r; )
    o++, new Date(e, t - 1, o).getDay() === n && u++;
  return new Date(e, t - 1, o, a);
}
function eb(e, t, n, r = 0) {
  const a = n === 0 ? 7 : n, o = new Date(e, t - 1 + 1, 1, 12), u = o.getDay() === 0 ? 7 : o.getDay();
  let l;
  return u === a ? l = 7 : u < a ? l = 7 + u - a : l = u - a, o.setDate(o.getDate() - l), new Date(e, t - 1, o.getDate(), r);
}
function Pw(e, t, n = {}) {
  if (e == null)
    return null;
  if (typeof e == "number")
    return e;
  const r = n[e] ?? SL[e];
  return r == null ? null : typeof r == "number" ? r : t == null ? null : Zt(t).isAfter(r.dstStart(t.getFullYear())) && !Zt(t).isAfter(r.dstEnd(t.getFullYear())) ? r.timezoneOffsetDuringDst : r.timezoneOffsetNonDst;
}
Zt.extend(_L);
class $h {
  constructor(t) {
    t = t ?? /* @__PURE__ */ new Date(), t instanceof Date ? this.instant = t : (this.instant = t.instant ?? /* @__PURE__ */ new Date(), this.timezoneOffset = Pw(t.timezone, this.instant));
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
class bt {
  constructor(t, n) {
    if (this._tags = /* @__PURE__ */ new Set(), this.reference = t, this.knownValues = {}, this.impliedValues = {}, n)
      for (const a in n)
        this.knownValues[a] = n[a];
    const r = Zt(t.instant);
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
    const t = new bt(this.reference);
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
    return Zt(this.date());
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
    let r = Zt(t.instant);
    for (const o in n)
      r = r.add(n[o], o);
    const a = new bt(t);
    return n.hour || n.minute || n.second ? (Sw(a, r), tr(a, r), t.timezoneOffset !== null && a.assign("timezoneOffset", -t.instant.getTimezoneOffset())) : (da(a, r), t.timezoneOffset !== null && a.imply("timezoneOffset", -t.instant.getTimezoneOffset()), n.d ? (a.assign("day", r.date()), a.assign("month", r.month() + 1), a.assign("year", r.year())) : n.week ? (a.assign("day", r.date()), a.assign("month", r.month() + 1), a.assign("year", r.year()), a.imply("weekday", r.day())) : (a.imply("day", r.date()), n.month ? (a.assign("month", r.month() + 1), a.assign("year", r.year())) : (a.imply("month", r.month() + 1), n.year ? a.assign("year", r.year()) : a.imply("year", r.year())))), a;
  }
}
class no {
  constructor(t, n, r, a, o) {
    this.reference = t, this.refDate = t.instant, this.index = n, this.text = r, this.start = a || new bt(t), this.end = o;
  }
  clone() {
    const t = new no(this.reference, this.index, this.text);
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
function Dh(e, t, n = "\\s{0,5},?\\s{0,5}") {
  const r = t.replace(/\((?!\?)/g, "(?:");
  return `${e}${r}(?:${n}${r}){0,10}`;
}
function PL(e) {
  let t;
  return e instanceof Array ? t = [...e] : e instanceof Map ? t = Array.from(e.keys()) : t = Object.keys(e), t;
}
function fn(e) {
  return `(?:${PL(e).sort((n, r) => r.length - n.length).join("|").replace(/\./g, "\\.")})`;
}
function Eh(e) {
  return e < 100 && (e > 50 ? e = e + 1900 : e = e + 2e3), e;
}
function cs(e, t, n) {
  const r = Zt(e);
  let a = r;
  a = a.month(n - 1), a = a.date(t), a = a.year(r.year());
  const o = a.add(1, "y"), u = a.add(-1, "y");
  return Math.abs(o.diff(r)) < Math.abs(a.diff(r)) ? a = o : Math.abs(u.diff(r)) < Math.abs(a.diff(r)) && (a = u), a.year();
}
const kw = {
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
}, Ow = {
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
}, va = {
  ...Ow,
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
}, Vf = {
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
}, Wf = {
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
}, Aw = {
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
}, Ul = {
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
  ...Aw
}, Mw = `(?:${fn(Vf)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
function kL(e) {
  const t = e.toLowerCase();
  return Vf[t] !== void 0 ? Vf[t] : t === "a" || t === "an" || t == "the" ? 1 : t.match(/few/) ? 3 : t.match(/half/) ? 0.5 : t.match(/couple/) ? 2 : t.match(/several/) ? 7 : parseFloat(t);
}
const sl = `(?:${fn(Wf)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function ul(e) {
  let t = e.toLowerCase();
  return Wf[t] !== void 0 ? Wf[t] : (t = t.replace(/(?:st|nd|rd|th)$/i, ""), parseInt(t));
}
const Hl = "(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])";
function Yl(e) {
  if (/BE/i.test(e))
    return e = e.replace(/BE/i, ""), parseInt(e) - 543;
  if (/BCE?/i.test(e))
    return e = e.replace(/BCE?/i, ""), -parseInt(e);
  if (/(AD|CE)/i.test(e))
    return e = e.replace(/(AD|CE)/i, ""), parseInt(e);
  const t = parseInt(e);
  return Eh(t);
}
const Iw = `(${Mw})\\s{0,3}(${fn(Ul)})`, tb = new RegExp(Iw, "i"), OL = `(${Mw})\\s{0,3}(${fn(Aw)})`, Nw = "\\s{0,5},?(?:\\s*and)?\\s{0,5}", ds = Dh("(?:(?:about|around)\\s{0,3})?", Iw, Nw), Kl = Dh("(?:(?:about|around)\\s{0,3})?", OL, Nw);
function ro(e) {
  const t = {};
  let n = e, r = tb.exec(n);
  for (; r; )
    AL(t, r), n = n.substring(r[0].length).trim(), r = tb.exec(n);
  return Object.keys(t).length == 0 ? null : t;
}
function AL(e, t) {
  if (t[0].match(/^[a-zA-Z]+$/))
    return;
  const n = kL(t[1]), r = Ul[t[2].toLowerCase()];
  e[r] = n;
}
class Wt {
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
const ML = new RegExp(`(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${ds})(?=\\W|$)`, "i"), IL = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${ds})(?=\\W|$)`, "i"), NL = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${Kl})(?=\\W|$)`, "i");
class RL extends Wt {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern(t) {
    return this.strictMode ? NL : t.option.forwardDate ? ML : IL;
  }
  innerExtract(t, n) {
    if (n[0].match(/^for\s*the\s*\w+/))
      return null;
    const r = ro(n[1]);
    return r ? bt.createRelativeFromReference(t.reference, r) : null;
  }
}
const jL = new RegExp(`(?:on\\s{0,3})?(${sl})(?:\\s{0,3}(?:to|\\-|\\–|until|through|till)?\\s{0,3}(${sl}))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(${fn(va)})(?:(?:-|/|,?\\s{0,3})(${Hl}(?!\\w)))?(?=\\W|$)`, "i"), nb = 1, rb = 2, FL = 3, ab = 4;
class BL extends Wt {
  innerPattern() {
    return jL;
  }
  innerExtract(t, n) {
    const r = t.createParsingResult(n.index, n[0]), a = va[n[FL].toLowerCase()], o = ul(n[nb]);
    if (o > 31)
      return n.index = n.index + n[nb].length, null;
    if (r.start.assign("month", a), r.start.assign("day", o), n[ab]) {
      const u = Yl(n[ab]);
      r.start.assign("year", u);
    } else {
      const u = cs(t.refDate, o, a);
      r.start.imply("year", u);
    }
    if (n[rb]) {
      const u = ul(n[rb]);
      r.end = r.start.clone(), r.end.assign("day", u);
    }
    return r;
  }
}
const LL = new RegExp(`(${fn(va)})(?:-|/|\\s*,?\\s*)(${sl})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${sl})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${Hl}))?(?=\\W|$)(?!\\:\\d)`, "i"), VL = 1, ib = 2, zd = 3, Ud = 4;
class WL extends Wt {
  constructor(t) {
    super(), this.shouldSkipYearLikeDate = t;
  }
  innerPattern() {
    return LL;
  }
  innerExtract(t, n) {
    const r = va[n[VL].toLowerCase()], a = ul(n[ib]);
    if (a > 31 || this.shouldSkipYearLikeDate && !n[zd] && !n[Ud] && n[ib].match(/^2[0-5]$/))
      return null;
    const o = t.createParsingComponents({
      day: a,
      month: r
    }).addTag("parser/ENMonthNameMiddleEndianParser");
    if (n[Ud]) {
      const d = Yl(n[Ud]);
      o.assign("year", d);
    } else {
      const d = cs(t.refDate, a, r);
      o.imply("year", d);
    }
    if (!n[zd])
      return o;
    const u = ul(n[zd]), l = t.createParsingResult(n.index, n[0]);
    return l.start = o, l.end = o.clone(), l.end.assign("day", u), l;
  }
}
const zL = new RegExp(`((?:in)\\s*)?(${fn(va)})\\s*(?:[,-]?\\s*(${Hl})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"), UL = 1, HL = 2, ob = 3;
class YL extends Wt {
  innerPattern() {
    return zL;
  }
  innerExtract(t, n) {
    const r = n[HL].toLowerCase();
    if (n[0].length <= 3 && !Ow[r])
      return null;
    const a = t.createParsingResult(n.index + (n[UL] || "").length, n.index + n[0].length);
    a.start.imply("day", 1), a.start.addTag("parser/ENMonthNameParser");
    const o = va[r];
    if (a.start.assign("month", o), n[ob]) {
      const u = Yl(n[ob]);
      a.start.assign("year", u);
    } else {
      const u = cs(t.refDate, 1, o);
      a.start.imply("year", u);
    }
    return a;
  }
}
const KL = new RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${fn(va)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"), qL = 1, GL = 2, sb = 3, ZL = 4;
class XL extends Wt {
  constructor(t) {
    super(), this.strictMonthDateOrder = t;
  }
  innerPattern() {
    return KL;
  }
  innerExtract(t, n) {
    const r = parseInt(n[qL]);
    let a = parseInt(n[ZL]), o = n[sb] ? parseInt(n[sb]) : va[n[GL].toLowerCase()];
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
const JL = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i"), QL = 1, eV = 2;
class tV extends Wt {
  innerPattern() {
    return JL;
  }
  innerExtract(t, n) {
    const r = parseInt(n[eV]), a = parseInt(n[QL]);
    return t.createParsingComponents().imply("day", 1).assign("month", a).assign("year", r);
  }
}
function nV(e, t, n, r) {
  return new RegExp(`${e}${t}(\\d{1,4})(?:(?:\\.|:|：)(\\d{1,2})(?:(?::|：)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${n}`, r);
}
function rV(e, t) {
  return new RegExp(`^(${e})(\\d{1,4})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${t}`, "i");
}
const ub = 2, vi = 3, yu = 4, bu = 5, ko = 6;
class Rw {
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
    const a = n.index + n[1].length, o = n[0].substring(n[1].length), u = t.createParsingResult(a, o, r);
    n.index += n[0].length;
    const l = t.text.substring(n.index), f = this.getFollowingTimePatternThroughCache().exec(l);
    return o.match(/^\d{3,4}/) && f && (f[0].match(/^\s*([+-])\s*\d{2,4}$/) || f[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/)) ? null : !f || f[0].match(/^\s*([+-])\s*\d{3,4}$/) ? this.checkAndReturnWithoutFollowingPattern(u) : (u.end = this.extractFollowingTimeComponents(t, f, u), u.end && (u.text += f[0]), this.checkAndReturnWithFollowingPattern(u));
  }
  extractPrimaryTimeComponents(t, n, r = !1) {
    const a = t.createParsingComponents();
    let o = 0, u = null, l = parseInt(n[ub]);
    if (l > 100) {
      if (this.strictMode || n[vi] != null)
        return null;
      o = l % 100, l = Math.floor(l / 100);
    }
    if (l > 24)
      return null;
    if (n[vi] != null) {
      if (n[vi].length == 1 && !n[ko])
        return null;
      o = parseInt(n[vi]);
    }
    if (o >= 60)
      return null;
    if (l > 12 && (u = We.PM), n[ko] != null) {
      if (l > 12)
        return null;
      const d = n[ko][0].toLowerCase();
      d == "a" && (u = We.AM, l == 12 && (l = 0)), d == "p" && (u = We.PM, l != 12 && (l += 12));
    }
    if (a.assign("hour", l), a.assign("minute", o), u !== null ? a.assign("meridiem", u) : l < 12 ? a.imply("meridiem", We.AM) : a.imply("meridiem", We.PM), n[bu] != null) {
      const d = parseInt(n[bu].substring(0, 3));
      if (d >= 1e3)
        return null;
      a.assign("millisecond", d);
    }
    if (n[yu] != null) {
      const d = parseInt(n[yu]);
      if (d >= 60)
        return null;
      a.assign("second", d);
    }
    return a;
  }
  extractFollowingTimeComponents(t, n, r) {
    const a = t.createParsingComponents();
    if (n[bu] != null) {
      const d = parseInt(n[bu].substring(0, 3));
      if (d >= 1e3)
        return null;
      a.assign("millisecond", d);
    }
    if (n[yu] != null) {
      const d = parseInt(n[yu]);
      if (d >= 60)
        return null;
      a.assign("second", d);
    }
    let o = parseInt(n[ub]), u = 0, l = -1;
    if (n[vi] != null ? u = parseInt(n[vi]) : o > 100 && (u = o % 100, o = Math.floor(o / 100)), u >= 60 || o > 24)
      return null;
    if (o >= 12 && (l = We.PM), n[ko] != null) {
      if (o > 12)
        return null;
      const d = n[ko][0].toLowerCase();
      d == "a" && (l = We.AM, o == 12 && (o = 0, a.isCertain("day") || a.imply("day", a.get("day") + 1))), d == "p" && (l = We.PM, o != 12 && (o += 12)), r.start.isCertain("meridiem") || (l == We.AM ? (r.start.imply("meridiem", We.AM), r.start.get("hour") == 12 && r.start.assign("hour", 0)) : (r.start.imply("meridiem", We.PM), r.start.get("hour") != 12 && r.start.assign("hour", r.start.get("hour") + 12)));
    }
    return a.assign("hour", o), a.assign("minute", u), l >= 0 ? a.assign("meridiem", l) : r.start.isCertain("meridiem") && r.start.get("hour") > 12 ? r.start.get("hour") - 12 > o ? a.imply("meridiem", We.AM) : o <= 12 && (a.assign("hour", o + 12), a.assign("meridiem", We.PM)) : o > 12 ? a.imply("meridiem", We.PM) : o <= 12 && a.imply("meridiem", We.AM), a.date().getTime() < r.start.date().getTime() && a.imply("day", a.get("day") + 1), a;
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
      const o = parseInt(a), u = parseInt(r);
      if (o > 24 || u > 24)
        return null;
    }
    return t;
  }
  getPrimaryTimePatternThroughCache() {
    const t = this.primaryPrefix(), n = this.primarySuffix();
    return this.cachedPrimaryPrefix === t && this.cachedPrimarySuffix === n ? this.cachedPrimaryTimePattern : (this.cachedPrimaryTimePattern = nV(this.primaryPatternLeftBoundary(), t, n, this.patternFlags()), this.cachedPrimaryPrefix = t, this.cachedPrimarySuffix = n, this.cachedPrimaryTimePattern);
  }
  getFollowingTimePatternThroughCache() {
    const t = this.followingPhase(), n = this.followingSuffix();
    return this.cachedFollowingPhase === t && this.cachedFollowingSuffix === n ? this.cachedFollowingTimePatten : (this.cachedFollowingTimePatten = rV(t, n), this.cachedFollowingPhase = t, this.cachedFollowingSuffix = n, this.cachedFollowingTimePatten);
  }
}
class aV extends Rw {
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
function fs(e) {
  const t = {};
  for (const n in e)
    t[n] = -e[n];
  return t;
}
function jw(e, t) {
  const n = e.clone();
  let r = e.dayjs();
  for (const a in t)
    r = r.add(t[a], a);
  return ("day" in t || "d" in t || "week" in t || "month" in t || "year" in t) && (n.imply("day", r.date()), n.imply("month", r.month() + 1), n.imply("year", r.year())), ("second" in t || "minute" in t || "hour" in t) && (n.imply("second", r.second()), n.imply("minute", r.minute()), n.imply("hour", r.hour())), n;
}
const iV = new RegExp(`(${ds})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"), oV = new RegExp(`(${Kl})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class sV extends Wt {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern() {
    return this.strictMode ? oV : iV;
  }
  innerExtract(t, n) {
    const r = ro(n[1]);
    if (!r)
      return null;
    const a = fs(r);
    return bt.createRelativeFromReference(t.reference, a);
  }
}
const uV = new RegExp(`(${ds})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"), lV = new RegExp(`(${Kl})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i"), cV = 1;
class dV extends Wt {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern() {
    return this.strictMode ? lV : uV;
  }
  innerExtract(t, n) {
    const r = ro(n[cV]);
    return r ? bt.createRelativeFromReference(t.reference, r) : null;
  }
}
class fV {
  refine(t, n) {
    return n.filter((r) => this.isValid(t, r));
  }
}
class ps {
  refine(t, n) {
    if (n.length < 2)
      return n;
    const r = [];
    let a = n[0], o = null;
    for (let u = 1; u < n.length; u++) {
      o = n[u];
      const l = t.text.substring(a.index + a.text.length, o.index);
      if (!this.shouldMergeResults(l, a, o, t))
        r.push(a), a = o;
      else {
        const d = a, f = o, p = this.mergeResults(l, d, f, t);
        t.debug(() => {
          console.log(`${this.constructor.name} merged ${d} and ${f} into ${p}`);
        }), a = p;
      }
    }
    return a != null && r.push(a), r;
  }
}
class Fw extends ps {
  shouldMergeResults(t, n, r) {
    return !n.end && !r.end && t.match(this.patternBetween()) != null;
  }
  mergeResults(t, n, r) {
    if (!n.start.isOnlyWeekdayComponent() && !r.start.isOnlyWeekdayComponent() && (r.start.getCertainComponents().forEach((o) => {
      n.start.isCertain(o) || n.start.imply(o, r.start.get(o));
    }), n.start.getCertainComponents().forEach((o) => {
      r.start.isCertain(o) || r.start.imply(o, n.start.get(o));
    })), n.start.date().getTime() > r.start.date().getTime()) {
      let o = n.start.dayjs(), u = r.start.dayjs();
      r.start.isOnlyWeekdayComponent() && u.add(7, "days").isAfter(o) ? (u = u.add(7, "days"), r.start.imply("day", u.date()), r.start.imply("month", u.month() + 1), r.start.imply("year", u.year())) : n.start.isOnlyWeekdayComponent() && o.add(-7, "days").isBefore(u) ? (o = o.add(-7, "days"), n.start.imply("day", o.date()), n.start.imply("month", o.month() + 1), n.start.imply("year", o.year())) : r.start.isDateWithUnknownYear() && u.add(1, "years").isAfter(o) ? (u = u.add(1, "years"), r.start.imply("year", u.year())) : n.start.isDateWithUnknownYear() && o.add(-1, "years").isBefore(u) ? (o = o.add(-1, "years"), n.start.imply("year", o.year())) : [r, n] = [n, r];
    }
    const a = n.clone();
    return a.start = n.start, a.end = r.start, a.index = Math.min(n.index, r.index), n.index < r.index ? a.text = n.text + t + r.text : a.text = r.text + t + n.text, a;
  }
}
class pV extends Fw {
  patternBetween() {
    return /^\s*(to|-|–|until|through|till)\s*$/i;
  }
}
function lb(e, t) {
  const n = e.clone(), r = e.start, a = t.start;
  if (n.start = cb(r, a), e.end != null || t.end != null) {
    const o = e.end == null ? e.start : e.end, u = t.end == null ? t.start : t.end, l = cb(o, u);
    if (e.end == null && l.date().getTime() < n.start.date().getTime()) {
      const d = l.dayjs().add(1, "day");
      l.isCertain("day") ? tr(l, d) : zo(l, d);
    }
    n.end = l;
  }
  return n;
}
function cb(e, t) {
  const n = e.clone();
  return t.isCertain("hour") ? (n.assign("hour", t.get("hour")), n.assign("minute", t.get("minute")), t.isCertain("second") ? (n.assign("second", t.get("second")), t.isCertain("millisecond") ? n.assign("millisecond", t.get("millisecond")) : n.imply("millisecond", t.get("millisecond"))) : (n.imply("second", t.get("second")), n.imply("millisecond", t.get("millisecond")))) : (n.imply("hour", t.get("hour")), n.imply("minute", t.get("minute")), n.imply("second", t.get("second")), n.imply("millisecond", t.get("millisecond"))), t.isCertain("timezoneOffset") && n.assign("timezoneOffset", t.get("timezoneOffset")), t.isCertain("meridiem") ? n.assign("meridiem", t.get("meridiem")) : t.get("meridiem") != null && n.get("meridiem") == null && n.imply("meridiem", t.get("meridiem")), n.get("meridiem") == We.PM && n.get("hour") < 12 && (t.isCertain("hour") ? n.assign("hour", n.get("hour") + 12) : n.imply("hour", n.get("hour") + 12)), n.addTags(e.tags()), n.addTags(t.tags()), n;
}
class Bw extends ps {
  shouldMergeResults(t, n, r) {
    return (n.start.isOnlyDate() && r.start.isOnlyTime() || r.start.isOnlyDate() && n.start.isOnlyTime()) && t.match(this.patternBetween()) != null;
  }
  mergeResults(t, n, r) {
    const a = n.start.isOnlyDate() ? lb(n, r) : lb(r, n);
    return a.index = n.index, a.text = n.text + t + r.text, a;
  }
}
class db extends Bw {
  patternBetween() {
    return new RegExp("^\\s*(T|at|after|before|on|of|,|-|\\.|∙|:)?\\s*$");
  }
}
const hV = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class mV {
  constructor(t) {
    this.timezoneOverrides = t;
  }
  refine(t, n) {
    const r = t.option.timezones ?? {};
    return n.forEach((a) => {
      const o = t.text.substring(a.index + a.text.length), u = hV.exec(o);
      if (!u)
        return;
      const l = u[1].toUpperCase(), d = a.start.date() ?? a.refDate ?? /* @__PURE__ */ new Date(), f = { ...this.timezoneOverrides, ...r }, p = Pw(l, d, f);
      if (p == null)
        return;
      t.debug(() => {
        console.log(`Extracting timezone: '${l}' into: ${p} for: ${a.start}`);
      });
      const m = a.start.get("timezoneOffset");
      m !== null && p != m && (a.start.isCertain("timezoneOffset") || l != u[1]) || a.start.isOnlyDate() && l != u[1] || (a.text += u[0], a.start.isCertain("timezoneOffset") || a.start.assign("timezoneOffset", p), a.end != null && !a.end.isCertain("timezoneOffset") && a.end.assign("timezoneOffset", p));
    }), n;
  }
}
const gV = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i"), vV = 1, yV = 2, bV = 3;
class xV {
  refine(t, n) {
    return n.forEach(function(r) {
      if (r.start.isCertain("timezoneOffset"))
        return;
      const a = t.text.substring(r.index + r.text.length), o = gV.exec(a);
      if (!o)
        return;
      t.debug(() => {
        console.log(`Extracting timezone: '${o[0]}' into : ${r}`);
      });
      const u = parseInt(o[yV]), l = parseInt(o[bV] || "0");
      let d = u * 60 + l;
      d > 14 * 60 || (o[vV] === "-" && (d = -d), r.end != null && r.end.assign("timezoneOffset", d), r.start.assign("timezoneOffset", d), r.text += o[0]);
    }), n;
  }
}
class zf {
  refine(t, n) {
    if (n.length < 2)
      return n;
    const r = [];
    let a = n[0];
    for (let o = 1; o < n.length; o++) {
      const u = n[o];
      if (u.index >= a.index + a.text.length) {
        r.push(a), a = u;
        continue;
      }
      let l = null, d = null;
      u.text.length > a.text.length ? (l = u, d = a) : (l = a, d = u), t.debug(() => {
        console.log(`${this.constructor.name} remove ${d} by ${l}`);
      }), a = l;
    }
    return a != null && r.push(a), r;
  }
}
class wV {
  refine(t, n) {
    return t.option.forwardDate && n.forEach((r) => {
      let a = Zt(t.refDate);
      if (r.start.isOnlyTime() && a.isAfter(r.start.dayjs()) && (a = a.add(1, "day"), zo(r.start, a), r.end && r.end.isOnlyTime() && (zo(r.end, a), r.start.dayjs().isAfter(r.end.dayjs()) && (a = a.add(1, "day"), zo(r.end, a))), t.debug(() => {
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
class $V extends fV {
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
const DV = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)", "i"), EV = 1, _V = 2, CV = 3, fb = 4, TV = 5, pb = 6, hb = 7, SV = 8, mb = 9, gb = 10;
class Lw extends Wt {
  innerPattern() {
    return DV;
  }
  innerExtract(t, n) {
    const r = t.createParsingComponents({
      year: parseInt(n[EV]),
      month: parseInt(n[_V]),
      day: parseInt(n[CV])
    });
    if (n[fb] != null && (r.assign("hour", parseInt(n[fb])), r.assign("minute", parseInt(n[TV])), n[pb] != null && r.assign("second", parseInt(n[pb])), n[hb] != null && r.assign("millisecond", parseInt(n[hb])), n[SV] != null)) {
      let a = 0;
      if (n[mb]) {
        const o = parseInt(n[mb]);
        let u = 0;
        n[gb] != null && (u = parseInt(n[gb])), a = o * 60, a < 0 ? a -= u : a += u;
      }
      r.assign("timezoneOffset", a);
    }
    return r.addTag("parser/ISOFormatParser");
  }
}
class PV extends ps {
  mergeResults(t, n, r) {
    const a = r.clone();
    return a.index = n.index, a.text = n.text + t + a.text, a.start.assign("weekday", n.start.get("weekday")), a.end && a.end.assign("weekday", n.start.get("weekday")), a;
  }
  shouldMergeResults(t, n, r) {
    return n.start.isOnlyWeekdayComponent() && !n.start.isCertain("hour") && r.start.isCertain("day") && t.match(/^,?\s*$/) != null;
  }
}
function Vw(e, t = !1) {
  return e.parsers.unshift(new Lw()), e.refiners.unshift(new PV()), e.refiners.unshift(new xV()), e.refiners.unshift(new zf()), e.refiners.push(new mV()), e.refiners.push(new zf()), e.refiners.push(new wV()), e.refiners.push(new $V(t)), e;
}
function Ww(e) {
  const t = Zt(e.instant), n = new bt(e, {});
  return tr(n, t), Sw(n, t), e.timezoneOffset !== null && n.assign("timezoneOffset", t.utcOffset()), n.addTag("casualReference/now"), n;
}
function zw(e) {
  const t = Zt(e.instant), n = new bt(e, {});
  return tr(n, t), da(n, t), n.addTag("casualReference/today"), n;
}
function kV(e) {
  return OV(e).addTag("casualReference/yesterday");
}
function OV(e, t) {
  return Uw(e, -1);
}
function AV(e) {
  return Uw(e, 1).addTag("casualReference/tomorrow");
}
function Uw(e, t) {
  let n = Zt(e.instant);
  const r = new bt(e, {});
  return n = n.add(t, "day"), tr(r, n), da(r, n), r;
}
function MV(e, t = 22) {
  const n = Zt(e.instant), r = new bt(e, {});
  return tr(r, n), r.imply("hour", t), r.imply("meridiem", We.PM), r.addTag("casualReference/tonight"), r;
}
function IV(e, t = 20) {
  const n = new bt(e, {});
  return n.imply("meridiem", We.PM), n.imply("hour", t), n.addTag("casualReference/evening"), n;
}
function NV(e) {
  const t = new bt(e, {}), n = Zt(e.instant);
  return n.hour() > 2 && TL(t, n), t.assign("hour", 0), t.imply("minute", 0), t.imply("second", 0), t.imply("millisecond", 0), t.addTag("casualReference/midnight"), t;
}
function RV(e, t = 6) {
  const n = new bt(e, {});
  return n.imply("meridiem", We.AM), n.imply("hour", t), n.imply("minute", 0), n.imply("second", 0), n.imply("millisecond", 0), n.addTag("casualReference/morning"), n;
}
function jV(e, t = 15) {
  const n = new bt(e, {});
  return n.imply("meridiem", We.PM), n.imply("hour", t), n.imply("minute", 0), n.imply("second", 0), n.imply("millisecond", 0), n.addTag("casualReference/afternoon"), n;
}
function FV(e) {
  const t = new bt(e, {});
  return t.imply("meridiem", We.AM), t.imply("hour", 12), t.imply("minute", 0), t.imply("second", 0), t.imply("millisecond", 0), t.addTag("casualReference/noon"), t;
}
const BV = /(now|today|tonight|tomorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class LV extends Wt {
  innerPattern(t) {
    return BV;
  }
  innerExtract(t, n) {
    let r = Zt(t.refDate);
    const a = n[0].toLowerCase();
    let o = t.createParsingComponents();
    switch (a) {
      case "now":
        o = Ww(t.reference);
        break;
      case "today":
        o = zw(t.reference);
        break;
      case "yesterday":
        o = kV(t.reference);
        break;
      case "tomorrow":
      case "tmr":
      case "tmrw":
        o = AV(t.reference);
        break;
      case "tonight":
        o = MV(t.reference);
        break;
      default:
        a.match(/last\s*night/) && (r.hour() > 6 && (r = r.add(-1, "day")), tr(o, r), o.imply("hour", 0));
        break;
    }
    return o.addTag("parser/ENCasualDateParser"), o;
  }
}
const VV = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class WV extends Wt {
  innerPattern() {
    return VV;
  }
  innerExtract(t, n) {
    let r = null;
    switch (n[1].toLowerCase()) {
      case "afternoon":
        r = jV(t.reference);
        break;
      case "evening":
      case "night":
        r = IV(t.reference);
        break;
      case "midnight":
        r = NV(t.reference);
        break;
      case "morning":
        r = RV(t.reference);
        break;
      case "noon":
      case "midday":
        r = FV(t.reference);
        break;
    }
    return r && r.addTag("parser/ENCasualTimeParser"), r;
  }
}
function Hw(e, t, n) {
  const r = e.getDateWithAdjustedTimezone(), a = zV(r, t, n);
  let o = new bt(e);
  return o = jw(o, { day: a }), o.assign("weekday", t), o;
}
function zV(e, t, n) {
  const r = e.getDay();
  switch (n) {
    case "this":
      return Fu(e, t);
    case "last":
      return Yw(e, t);
    case "next":
      return r == Kt.SUNDAY ? t == Kt.SUNDAY ? 7 : t : r == Kt.SATURDAY ? t == Kt.SATURDAY ? 7 : t == Kt.SUNDAY ? 8 : 1 + t : t < r && t != Kt.SUNDAY ? Fu(e, t) : Fu(e, t) + 7;
  }
  return UV(e, t);
}
function UV(e, t) {
  const n = Yw(e, t), r = Fu(e, t);
  return r < -n ? r : n;
}
function Fu(e, t) {
  const n = e.getDay();
  let r = t - n;
  return r < 0 && (r += 7), r;
}
function Yw(e, t) {
  const n = e.getDay();
  let r = t - n;
  return r >= 0 && (r -= 7), r;
}
const HV = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${fn(kw)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i"), YV = 1, KV = 2, qV = 3;
class GV extends Wt {
  innerPattern() {
    return HV;
  }
  innerExtract(t, n) {
    const r = n[KV].toLowerCase(), a = kw[r], o = n[YV], u = n[qV];
    let l = o || u;
    l = l || "", l = l.toLowerCase();
    let d = null;
    return l == "last" || l == "past" ? d = "last" : l == "next" ? d = "next" : l == "this" && (d = "this"), Hw(t.reference, a, d);
  }
}
const ZV = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${fn(Ul)})(?=\\s*)(?=\\W|$)`, "i"), XV = 1, JV = 2;
class QV extends Wt {
  innerPattern() {
    return ZV;
  }
  innerExtract(t, n) {
    const r = n[XV].toLowerCase(), a = n[JV].toLowerCase(), o = Ul[a];
    if (r == "next" || r.startsWith("after")) {
      const d = {};
      return d[o] = 1, bt.createRelativeFromReference(t.reference, d);
    }
    if (r == "last" || r == "past") {
      const d = {};
      return d[o] = -1, bt.createRelativeFromReference(t.reference, d);
    }
    const u = t.createParsingComponents();
    let l = Zt(t.reference.instant);
    return a.match(/week/i) ? (l = l.add(-l.get("d"), "d"), u.imply("day", l.date()), u.imply("month", l.month() + 1), u.imply("year", l.year())) : a.match(/month/i) ? (l = l.add(-l.date() + 1, "d"), u.imply("day", l.date()), u.assign("year", l.year()), u.assign("month", l.month() + 1)) : a.match(/year/i) && (l = l.add(-l.date() + 1, "d"), l = l.add(-l.month(), "month"), u.imply("day", l.date()), u.imply("month", l.month() + 1), u.assign("year", l.year())), u;
  }
}
const eW = new RegExp("([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)", "i"), tW = 1, nW = 5, vb = 2, yb = 3, Hd = 4;
class Kw {
  constructor(t) {
    this.groupNumberMonth = t ? yb : vb, this.groupNumberDay = t ? vb : yb;
  }
  pattern() {
    return eW;
  }
  extract(t, n) {
    const r = n.index + n[tW].length, a = n.index + n[0].length - n[nW].length;
    if (r > 0 && t.text.substring(0, r).match("\\d/?$") || a < t.text.length && t.text.substring(a).match("^/?\\d"))
      return;
    const o = t.text.substring(r, a);
    if (o.match(/^\d\.\d$/) || o.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/) || !n[Hd] && o.indexOf("/") < 0)
      return;
    const u = t.createParsingResult(r, o);
    let l = parseInt(n[this.groupNumberMonth]), d = parseInt(n[this.groupNumberDay]);
    if ((l < 1 || l > 12) && l > 12)
      if (d >= 1 && d <= 12 && l <= 31)
        [d, l] = [l, d];
      else
        return null;
    if (d < 1 || d > 31)
      return null;
    if (u.start.assign("day", d), u.start.assign("month", l), n[Hd]) {
      const f = parseInt(n[Hd]), p = Eh(f);
      u.start.assign("year", p);
    } else {
      const f = cs(t.refDate, d, l);
      u.start.imply("year", f);
    }
    return u;
  }
}
const rW = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${ds})(?=\\W|$)`, "i"), aW = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${Kl})(?=\\W|$)`, "i");
class iW extends Wt {
  constructor(t = !0) {
    super(), this.allowAbbreviations = t;
  }
  innerPattern() {
    return this.allowAbbreviations ? rW : aW;
  }
  innerExtract(t, n) {
    const r = n[1].toLowerCase();
    let a = ro(n[2]);
    if (!a)
      return null;
    switch (r) {
      case "last":
      case "past":
      case "-":
        a = fs(a);
        break;
    }
    return bt.createRelativeFromReference(t.reference, a);
  }
}
function oW(e) {
  return e.text.match(/^[+-]/i) != null;
}
function bb(e) {
  return e.text.match(/^-/i) != null;
}
class sW extends ps {
  shouldMergeResults(t, n, r) {
    return t.match(/^\s*$/i) ? oW(r) || bb(r) : !1;
  }
  mergeResults(t, n, r, a) {
    let o = ro(r.text);
    bb(r) && (o = fs(o));
    const u = bt.createRelativeFromReference(new $h(n.start.date()), o);
    return new no(n.reference, n.index, `${n.text}${t}${r.text}`, u);
  }
}
function xb(e) {
  return e.text.match(/\s+(before|from)$/i) != null;
}
function uW(e) {
  return e.text.match(/\s+(after|since)$/i) != null;
}
class lW extends ps {
  patternBetween() {
    return /^\s*$/i;
  }
  shouldMergeResults(t, n, r) {
    return !t.match(this.patternBetween()) || !xb(n) && !uW(n) ? !1 : !!r.start.get("day") && !!r.start.get("month") && !!r.start.get("year");
  }
  mergeResults(t, n, r) {
    let a = ro(n.text);
    xb(n) && (a = fs(a));
    const o = bt.createRelativeFromReference(new $h(r.start.date()), a);
    return new no(r.reference, n.index, `${n.text}${t}${r.text}`, o);
  }
}
const cW = new RegExp(`^\\s*(${Hl})`, "i"), dW = 1;
class fW {
  refine(t, n) {
    return n.forEach(function(r) {
      if (!r.start.isDateWithUnknownYear())
        return;
      const a = t.text.substring(r.index + r.text.length), o = cW.exec(a);
      if (!o)
        return;
      t.debug(() => {
        console.log(`Extracting year: '${o[0]}' into : ${r}`);
      });
      const u = Yl(o[dW]);
      r.end != null && r.end.assign("year", u), r.start.assign("year", u), r.text += o[0];
    }), n;
  }
}
class pW {
  createCasualConfiguration(t = !1) {
    const n = this.createConfiguration(!1, t);
    return n.parsers.push(new LV()), n.parsers.push(new WV()), n.parsers.push(new YL()), n.parsers.push(new QV()), n.parsers.push(new iW()), n;
  }
  createConfiguration(t = !0, n = !1) {
    const r = Vw({
      parsers: [
        new Kw(n),
        new RL(t),
        new BL(),
        new WL(n),
        new GV(),
        new tV(),
        new aV(t),
        new sV(t),
        new dV(t)
      ],
      refiners: [new db()]
    }, t);
    return r.parsers.unshift(new XL(t)), r.refiners.unshift(new lW()), r.refiners.unshift(new sW()), r.refiners.unshift(new zf()), r.refiners.push(new db()), r.refiners.push(new fW()), r.refiners.push(new pV()), r;
  }
}
class Jo {
  constructor(t) {
    this.defaultConfig = new pW(), t = t || this.defaultConfig.createCasualConfiguration(), this.parsers = [...t.parsers], this.refiners = [...t.refiners];
  }
  clone() {
    return new Jo({
      parsers: [...this.parsers],
      refiners: [...this.refiners]
    });
  }
  parseDate(t, n, r) {
    const a = this.parse(t, n, r);
    return a.length > 0 ? a[0].start.date() : null;
  }
  parse(t, n, r) {
    const a = new hW(t, n, r);
    let o = [];
    return this.parsers.forEach((u) => {
      const l = Jo.executeParser(a, u);
      o = o.concat(l);
    }), o.sort((u, l) => u.index - l.index), this.refiners.forEach(function(u) {
      o = u.refine(a, o);
    }), o;
  }
  static executeParser(t, n) {
    const r = [], a = n.pattern(t), o = t.text;
    let u = t.text, l = a.exec(u);
    for (; l; ) {
      const d = l.index + o.length - u.length;
      l.index = d;
      const f = n.extract(t, l);
      if (!f) {
        u = o.substring(l.index + 1), l = a.exec(u);
        continue;
      }
      let p = null;
      f instanceof no ? p = f : f instanceof bt ? (p = t.createParsingResult(l.index, l[0]), p.start = f) : p = t.createParsingResult(l.index, l[0], f);
      const m = p.index, v = p.text;
      t.debug(() => console.log(`${n.constructor.name} extracted (at index=${m}) '${v}'`)), r.push(p), u = o.substring(m + v.length), l = a.exec(u);
    }
    return r;
  }
}
class hW {
  constructor(t, n, r) {
    this.text = t, this.reference = new $h(n), this.option = r ?? {}, this.refDate = this.reference.instant;
  }
  createParsingComponents(t) {
    return t instanceof bt ? t : new bt(this.reference, t);
  }
  createParsingResult(t, n, r, a) {
    const o = typeof n == "string" ? n : this.text.substring(t, n), u = r ? this.createParsingComponents(r) : null, l = a ? this.createParsingComponents(a) : null;
    return new no(this.reference, t, o, u, l);
  }
  debug(t) {
    this.option.debug && (this.option.debug instanceof Function ? this.option.debug(t) : this.option.debug.debug(t));
  }
}
class mW extends Rw {
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
const qw = {
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
}, Gw = {
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
}, Uf = {
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
}, ll = {
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
}, Zw = `(?:${fn(Uf)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`;
function Xw(e) {
  const t = e.toLowerCase();
  return Uf[t] !== void 0 ? Uf[t] : t === "ein" || t === "einer" || t === "einem" || t === "einen" || t === "eine" ? 1 : t.match(/wenigen/) ? 2 : t.match(/halb/) || t.match(/halben/) ? 0.5 : t.match(/einigen/) ? 3 : t.match(/mehreren/) ? 7 : parseFloat(t);
}
const gW = "(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)";
function vW(e) {
  if (/v/i.test(e))
    return -parseInt(e.replace(/[^0-9]+/gi, ""));
  if (/n/i.test(e))
    return parseInt(e.replace(/[^0-9]+/gi, ""));
  if (/z/i.test(e))
    return parseInt(e.replace(/[^0-9]+/gi, ""));
  const t = parseInt(e);
  return Eh(t);
}
const Jw = `(${Zw})\\s{0,5}(${fn(ll)})\\s{0,5}`, wb = new RegExp(Jw, "i"), yW = Dh("", Jw);
function bW(e) {
  const t = {};
  let n = e, r = wb.exec(n);
  for (; r; )
    xW(t, r), n = n.substring(r[0].length), r = wb.exec(n);
  return t;
}
function xW(e, t) {
  const n = Xw(t[1]), r = ll[t[2].toLowerCase()];
  e[r] = n;
}
const wW = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:ä|ae)chste[mn])\\s*)?(${fn(qw)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:ä|ae)chste)\\s*woche)?(?=\\W|$)`, "i"), $W = 1, DW = 3, EW = 2;
class _W extends Wt {
  innerPattern() {
    return wW;
  }
  innerExtract(t, n) {
    const r = n[EW].toLowerCase(), a = qw[r], o = n[$W], u = n[DW];
    let l = o || u;
    l = l || "", l = l.toLowerCase();
    let d = null;
    return l.match(/letzte/) ? d = "last" : l.match(/chste/) ? d = "next" : l.match(/diese/) && (d = "this"), Hw(t.reference, a, d);
  }
}
const CW = new RegExp("(^|\\s|T)(?:(?:um|von)\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i"), TW = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|bis(?:\\s+um)?|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i"), SW = 2, $b = 3, Db = 4, Eb = 5;
class cl {
  pattern(t) {
    return CW;
  }
  extract(t, n) {
    const r = t.createParsingResult(n.index + n[1].length, n[0].substring(n[1].length));
    if (r.text.match(/^\d{4}$/) || (r.start = cl.extractTimeComponent(r.start.clone(), n), !r.start))
      return n.index += n[0].length, null;
    const a = t.text.substring(n.index + n[0].length), o = TW.exec(a);
    return o && (r.end = cl.extractTimeComponent(r.start.clone(), o), r.end && (r.text += o[0])), r;
  }
  static extractTimeComponent(t, n) {
    let r = 0, a = 0, o = null;
    if (r = parseInt(n[SW]), n[$b] != null && (a = parseInt(n[$b])), a >= 60 || r > 24)
      return null;
    if (r >= 12 && (o = We.PM), n[Eb] != null) {
      if (r > 12)
        return null;
      const u = n[Eb].toLowerCase();
      u.match(/morgen|vormittag/) && (o = We.AM, r == 12 && (r = 0)), u.match(/nachmittag|abend/) && (o = We.PM, r != 12 && (r += 12)), u.match(/nacht/) && (r == 12 ? (o = We.AM, r = 0) : r < 6 ? o = We.AM : (o = We.PM, r += 12));
    }
    if (t.assign("hour", r), t.assign("minute", a), o !== null ? t.assign("meridiem", o) : r < 12 ? t.imply("meridiem", We.AM) : t.imply("meridiem", We.PM), n[Db] != null) {
      const u = parseInt(n[Db]);
      if (u >= 60)
        return null;
      t.assign("second", u);
    }
    return t;
  }
}
class PW extends Fw {
  patternBetween() {
    return /^\s*(bis(?:\s*(?:am|zum))?|-)\s*$/i;
  }
}
class kW extends Bw {
  patternBetween() {
    return new RegExp("^\\s*(T|um|am|,|-)?\\s*$");
  }
}
class ql extends Wt {
  innerPattern(t) {
    return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
  }
  innerExtract(t, n) {
    const r = Zt(t.refDate), a = n[2].toLowerCase(), o = t.createParsingComponents();
    return da(o, r), ql.extractTimeComponents(o, a);
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
        t.get("hour") > 1 && (t = jw(t, { day: 1 })), t.imply("hour", 0), t.imply("minute", 0), t.imply("second", 0), t.imply("meridiem", We.AM);
        break;
    }
    return t;
  }
}
const OW = new RegExp("(jetzt|heute|morgen|übermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)", "i"), AW = 1, MW = 2;
class IW extends Wt {
  innerPattern(t) {
    return OW;
  }
  innerExtract(t, n) {
    let r = Zt(t.refDate);
    const a = (n[AW] || "").toLowerCase(), o = (n[MW] || "").toLowerCase();
    let u = t.createParsingComponents();
    switch (a) {
      case "jetzt":
        u = Ww(t.reference);
        break;
      case "heute":
        u = zw(t.reference);
        break;
      case "morgen":
        Qy(u, r);
        break;
      case "übermorgen":
      case "uebermorgen":
        r = r.add(1, "day"), Qy(u, r);
        break;
      case "gestern":
        r = r.add(-1, "day"), tr(u, r), da(u, r);
        break;
      case "vorgestern":
        r = r.add(-2, "day"), tr(u, r), da(u, r);
        break;
      default:
        a.match(/letzte\s*nacht/) && (r.hour() > 6 && (r = r.add(-1, "day")), tr(u, r), u.imply("hour", 0));
        break;
    }
    return o && (u = ql.extractTimeComponents(u, o)), u;
  }
}
const NW = new RegExp(`(?:am\\s*?)?(?:den\\s*?)?([0-9]{1,2})\\.(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*(${fn(Gw)})(?:(?:-|/|,?\\s*)(${gW}(?![^\\s]\\d)))?(?=\\W|$)`, "i"), _b = 1, Cb = 2, RW = 3, Tb = 4;
class jW extends Wt {
  innerPattern() {
    return NW;
  }
  innerExtract(t, n) {
    const r = t.createParsingResult(n.index, n[0]), a = Gw[n[RW].toLowerCase()], o = parseInt(n[_b]);
    if (o > 31)
      return n.index = n.index + n[_b].length, null;
    if (r.start.assign("month", a), r.start.assign("day", o), n[Tb]) {
      const u = vW(n[Tb]);
      r.start.assign("year", u);
    } else {
      const u = cs(t.refDate, o, a);
      r.start.imply("year", u);
    }
    if (n[Cb]) {
      const u = parseInt(n[Cb]);
      r.end = r.start.clone(), r.end.assign("day", u);
    }
    return r;
  }
}
class FW extends Wt {
  constructor() {
    super();
  }
  innerPattern() {
    return new RegExp(`(?:\\s*((?:nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${Zw})?(?:\\s*(nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${fn(ll)})`, "i");
  }
  innerExtract(t, n) {
    const r = n[2] ? Xw(n[2]) : 1, a = ll[n[4].toLowerCase()];
    let o = {};
    o[a] = r;
    let u = n[1] || n[3] || "";
    if (u = u.toLowerCase(), !!u)
      return (/vor/.test(u) || /letzte/.test(u) || /vergangen/.test(u)) && (o = fs(o)), bt.createRelativeFromReference(t.reference, o);
  }
}
class BW extends Wt {
  innerPattern() {
    return new RegExp(`(?:in|für|während)\\s*(${yW})(?=\\W|$)`, "i");
  }
  innerExtract(t, n) {
    const r = bW(n[1]);
    return bt.createRelativeFromReference(t.reference, r);
  }
}
const LW = new Jo(VW());
new Jo(e4(!0));
function Qw(e, t, n) {
  return LW.parseDate(e, t, n);
}
function VW(e = !0) {
  const t = e4(!1, e);
  return t.parsers.unshift(new ql()), t.parsers.unshift(new IW()), t.parsers.unshift(new FW()), t;
}
function e4(e = !0, t = !0) {
  return Vw({
    parsers: [
      new Lw(),
      new Kw(t),
      new mW(),
      new cl(),
      new jW(),
      new _W(),
      new BW()
    ],
    refiners: [new PW(), new kW()]
  }, e);
}
function Mi(e, t) {
  return e - t * Math.floor(e / t);
}
const t4 = 1721426;
function Ra(e, t, n, r) {
  t = hs(e, t);
  let a = t - 1, o = -2;
  return n <= 2 ? o = 0 : aa(t) && (o = -1), t4 - 1 + 365 * a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor((367 * n - 362) / 12 + o + r);
}
function aa(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function hs(e, t) {
  return e === "BC" ? 1 - t : t;
}
function Gl(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const WW = {
  standard: [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ],
  leapyear: [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
};
class qn {
  fromJulianDay(t) {
    let n = t, r = n - t4, a = Math.floor(r / 146097), o = Mi(r, 146097), u = Math.floor(o / 36524), l = Mi(o, 36524), d = Math.floor(l / 1461), f = Mi(l, 1461), p = Math.floor(f / 365), m = a * 400 + u * 100 + d * 4 + p + (u !== 4 && p !== 4 ? 1 : 0), [v, $] = Gl(m), _ = n - Ra(v, $, 1, 1), x = 2;
    n < Ra(v, $, 3, 1) ? x = 0 : aa($) && (x = 1);
    let w = Math.floor(((_ + x) * 12 + 373) / 367), M = n - Ra(v, $, w, 1) + 1;
    return new Lt(v, $, w, M);
  }
  toJulianDay(t) {
    return Ra(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return WW[aa(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return aa(t.year) ? 366 : 365;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(t) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(t) {
    return t.era === "BC";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BC" ? "AD" : "BC", t.year = 1 - t.year);
  }
  constructor() {
    this.identifier = "gregory";
  }
}
function zW(e) {
  return Mr(Date.now(), e);
}
function n4(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function UW(e, t) {
  return Sb(e) - Sb(t);
}
function Sb(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Yd = null;
function ms() {
  return Yd == null && (Yd = new Intl.DateTimeFormat().resolvedOptions().timeZone), Yd;
}
function HW(e) {
  return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function YW(e) {
  return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function Wi(e) {
  e = ln(e, new qn());
  let t = hs(e.era, e.year);
  return r4(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function r4(e, t, n, r, a, o, u) {
  let l = /* @__PURE__ */ new Date();
  return l.setUTCHours(r, a, o, u), l.setUTCFullYear(e, t - 1, n), l.getTime();
}
function Hf(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === ms()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: n, month: r, day: a, hour: o, minute: u, second: l } = a4(e, t);
  return r4(n, r, a, o, u, l, 0) - Math.floor(e / 1e3) * 1e3;
}
const Pb = /* @__PURE__ */ new Map();
function a4(e, t) {
  let n = Pb.get(t);
  n || (n = new Intl.DateTimeFormat("en-US", {
    timeZone: t,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), Pb.set(t, n));
  let r = n.formatToParts(new Date(e)), a = {};
  for (let o of r) o.type !== "literal" && (a[o.type] = o.value);
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: a.era === "BC" || a.era === "B" ? -a.year + 1 : +a.year,
    month: +a.month,
    day: +a.day,
    hour: a.hour === "24" ? 0 : +a.hour,
    minute: +a.minute,
    second: +a.second
  };
}
const kb = 864e5;
function KW(e, t, n, r) {
  return (n === r ? [
    n
  ] : [
    n,
    r
  ]).filter((o) => qW(e, t, o));
}
function qW(e, t, n) {
  let r = a4(n, t);
  return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function Ar(e, t, n = "compatible") {
  let r = za(e);
  if (t === "UTC") return Wi(r);
  if (t === ms() && n === "compatible") {
    r = ln(r, new qn());
    let d = /* @__PURE__ */ new Date(), f = hs(r.era, r.year);
    return d.setFullYear(f, r.month - 1, r.day), d.setHours(r.hour, r.minute, r.second, r.millisecond), d.getTime();
  }
  let a = Wi(r), o = Hf(a - kb, t), u = Hf(a + kb, t), l = KW(r, t, a - o, a - u);
  if (l.length === 1) return l[0];
  if (l.length > 1) switch (n) {
    case "compatible":
    case "earlier":
      return l[0];
    case "later":
      return l[l.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (n) {
    case "earlier":
      return Math.min(a - o, a - u);
    case "compatible":
    case "later":
      return Math.max(a - o, a - u);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function i4(e, t, n = "compatible") {
  return new Date(Ar(e, t, n));
}
function Mr(e, t) {
  let n = Hf(e, t), r = new Date(e + n), a = r.getUTCFullYear(), o = r.getUTCMonth() + 1, u = r.getUTCDate(), l = r.getUTCHours(), d = r.getUTCMinutes(), f = r.getUTCSeconds(), p = r.getUTCMilliseconds();
  return new zi(a < 1 ? "BC" : "AD", a < 1 ? -a + 1 : a, o, u, t, n, l, d, f, p);
}
function GW(e) {
  return new Lt(e.calendar, e.era, e.year, e.month, e.day);
}
function za(e, t) {
  let n = 0, r = 0, a = 0, o = 0;
  if ("timeZone" in e) ({ hour: n, minute: r, second: a, millisecond: o } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: n, minute: r, second: a, millisecond: o } = t), new fl(e.calendar, e.era, e.year, e.month, e.day, n, r, a, o);
}
function ln(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
  return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, Ua(r), r;
}
function ZW(e, t, n) {
  if (e instanceof zi)
    return e.timeZone === t ? e : o4(e, t);
  let r = Ar(e, t, n);
  return Mr(r, t);
}
function XW(e) {
  let t = Wi(e) - e.offset;
  return new Date(t);
}
function o4(e, t) {
  let n = Wi(e) - e.offset;
  return ln(Mr(n, t), e.calendar);
}
const Oo = 36e5;
function Zl(e, t) {
  let n = e.copy(), r = "hour" in n ? tz(n, t) : 0;
  Yf(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, Kf(n), s4(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, JW(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
  let a = n.calendar.getYearsInEra(n);
  if (n.year > a) {
    var o, u;
    let d = (o = (u = n.calendar).isInverseEra) === null || o === void 0 ? void 0 : o.call(u, n);
    n.year = a, n.month = d ? 1 : n.calendar.getMonthsInYear(n), n.day = d ? 1 : n.calendar.getDaysInMonth(n);
  }
  n.month < 1 && (n.month = 1, n.day = 1);
  let l = n.calendar.getMonthsInYear(n);
  return n.month > l && (n.month = l, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function Yf(e, t) {
  var n, r;
  !((n = (r = e.calendar).isInverseEra) === null || n === void 0) && n.call(r, e) && (t = -t), e.year += t;
}
function Kf(e) {
  for (; e.month < 1; )
    Yf(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Yf(e, 1);
}
function JW(e) {
  for (; e.day < 1; )
    e.month--, Kf(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Kf(e);
}
function s4(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function Ua(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), s4(e);
}
function u4(e) {
  let t = {};
  for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
  return t;
}
function l4(e, t) {
  return Zl(e, u4(t));
}
function _h(e, t) {
  let n = e.copy();
  return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), Ua(n), n;
}
function dl(e, t) {
  let n = e.copy();
  return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), ez(n), n;
}
function QW(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = xu(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = xu(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = xu(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = xu(e.hour, 24), t;
}
function ez(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function xu(e, t) {
  let n = e % t;
  return n < 0 && (n += t), n;
}
function tz(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, QW(e);
}
function Ch(e, t, n, r) {
  let a = e.copy();
  switch (t) {
    case "era": {
      let l = e.calendar.getEras(), d = l.indexOf(e.era);
      if (d < 0) throw new Error("Invalid era: " + e.era);
      d = Ir(d, n, 0, l.length - 1, r == null ? void 0 : r.round), a.era = l[d], Ua(a);
      break;
    }
    case "year":
      var o, u;
      !((o = (u = a.calendar).isInverseEra) === null || o === void 0) && o.call(u, a) && (n = -n), a.year = Ir(e.year, n, -1 / 0, 9999, r == null ? void 0 : r.round), a.year === -1 / 0 && (a.year = 1), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e);
      break;
    case "month":
      a.month = Ir(e.month, n, 1, e.calendar.getMonthsInYear(e), r == null ? void 0 : r.round);
      break;
    case "day":
      a.day = Ir(e.day, n, 1, e.calendar.getDaysInMonth(e), r == null ? void 0 : r.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(a), Ua(a), a;
}
function c4(e, t, n, r) {
  let a = e.copy();
  switch (t) {
    case "hour": {
      let o = e.hour, u = 0, l = 23;
      if ((r == null ? void 0 : r.hourCycle) === 12) {
        let d = o >= 12;
        u = d ? 12 : 0, l = d ? 23 : 11;
      }
      a.hour = Ir(o, n, u, l, r == null ? void 0 : r.round);
      break;
    }
    case "minute":
      a.minute = Ir(e.minute, n, 0, 59, r == null ? void 0 : r.round);
      break;
    case "second":
      a.second = Ir(e.second, n, 0, 59, r == null ? void 0 : r.round);
      break;
    case "millisecond":
      a.millisecond = Ir(e.millisecond, n, 0, 999, r == null ? void 0 : r.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return a;
}
function Ir(e, t, n, r, a = !1) {
  if (a) {
    e += Math.sign(t), e < n && (e = r);
    let o = Math.abs(t);
    t > 0 ? e = Math.ceil(e / o) * o : e = Math.floor(e / o) * o, e > r && (e = n);
  } else
    e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
  return e;
}
function d4(e, t) {
  let n;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let a = Zl(za(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    n = Ar(a, e.timeZone);
  } else
    n = Wi(e) - e.offset;
  n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5;
  let r = Mr(n, e.timeZone);
  return ln(r, e.calendar);
}
function nz(e, t) {
  return d4(e, u4(t));
}
function rz(e, t, n, r) {
  switch (t) {
    case "hour": {
      let a = 0, o = 23;
      if ((r == null ? void 0 : r.hourCycle) === 12) {
        let _ = e.hour >= 12;
        a = _ ? 12 : 0, o = _ ? 23 : 11;
      }
      let u = za(e), l = ln(dl(u, {
        hour: a
      }), new qn()), d = [
        Ar(l, e.timeZone, "earlier"),
        Ar(l, e.timeZone, "later")
      ].filter((_) => Mr(_, e.timeZone).day === l.day)[0], f = ln(dl(u, {
        hour: o
      }), new qn()), p = [
        Ar(f, e.timeZone, "earlier"),
        Ar(f, e.timeZone, "later")
      ].filter((_) => Mr(_, e.timeZone).day === f.day).pop(), m = Wi(e) - e.offset, v = Math.floor(m / Oo), $ = m % Oo;
      return m = Ir(v, n, Math.floor(d / Oo), Math.floor(p / Oo), r == null ? void 0 : r.round) * Oo + $, ln(Mr(m, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return c4(e, t, n, r);
    case "era":
    case "year":
    case "month":
    case "day": {
      let a = Ch(za(e), t, n, r), o = Ar(a, e.timeZone);
      return ln(Mr(o, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function az(e, t, n) {
  let r = za(e), a = dl(_h(r, t), t);
  if (a.compare(r) === 0) return e;
  let o = Ar(a, e.timeZone, n);
  return ln(Mr(o, e.timeZone), e.calendar);
}
const iz = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/, oz = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
function sz(e) {
  let t = e.match(iz);
  if (!t) throw new Error("Invalid ISO 8601 date string: " + e);
  let n = new Lt(zn(t[1], 0, 9999), zn(t[2], 1, 12), 1);
  return n.day = zn(t[3], 0, n.calendar.getDaysInMonth(n)), n;
}
function uz(e, t) {
  let n = e.match(oz);
  if (!n) throw new Error("Invalid ISO 8601 date time string: " + e);
  let r = zn(n[1], -9999, 9999), a = r < 1 ? "BC" : "AD", o = new zi(a, r < 1 ? -r + 1 : r, zn(n[2], 1, 12), 1, t, 0, n[4] ? zn(n[4], 0, 23) : 0, n[5] ? zn(n[5], 0, 59) : 0, n[6] ? zn(n[6], 0, 59) : 0, n[7] ? zn(n[7], 0, 1 / 0) * 1e3 : 0);
  o.day = zn(n[3], 0, o.calendar.getDaysInMonth(o));
  var u;
  return n[8] && (o.offset = zn(n[8], -23, 23) * 36e5 + zn((u = n[9]) !== null && u !== void 0 ? u : "0", 0, 59) * 6e4), o4(o, t);
}
function zn(e, t, n) {
  let r = Number(e);
  if (r < t || r > n) throw new RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);
  return r;
}
function lz(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function f4(e) {
  let t = ln(e, new qn()), n;
  return t.era === "BC" ? n = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : n = String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function p4(e) {
  return `${f4(e)}T${lz(e)}`;
}
function cz(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let n = Math.floor(e / 36e5), r = e % 36e5 / 6e4;
  return `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function dz(e) {
  return `${p4(e)}${cz(e.offset)}[${e.timeZone}]`;
}
function fz(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Xl(e, t, n) {
  fz(e, t), t.set(e, n);
}
function Th(e) {
  let t = typeof e[0] == "object" ? e.shift() : new qn(), n;
  if (typeof e[0] == "string") n = e.shift();
  else {
    let u = t.getEras();
    n = u[u.length - 1];
  }
  let r = e.shift(), a = e.shift(), o = e.shift();
  return [
    t,
    n,
    r,
    a,
    o
  ];
}
var pz = /* @__PURE__ */ new WeakMap();
class Lt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Lt(this.calendar, this.era, this.year, this.month, this.day) : new Lt(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Zl(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return l4(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return _h(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return Ch(this, t, n, r);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return i4(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return f4(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return n4(this, t);
  }
  constructor(...t) {
    Xl(this, pz, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, o, u] = Th(t);
    this.calendar = n, this.era = r, this.year = a, this.month = o, this.day = u, Ua(this);
  }
}
var hz = /* @__PURE__ */ new WeakMap();
class fl {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new fl(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new fl(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return Zl(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return l4(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return _h(dl(this, t), t);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    switch (t) {
      case "era":
      case "year":
      case "month":
      case "day":
        return Ch(this, t, n, r);
      default:
        return c4(this, t, n, r);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, n) {
    return i4(this, t, n);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return p4(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let n = n4(this, t);
    return n === 0 ? UW(this, za(t)) : n;
  }
  constructor(...t) {
    Xl(this, hz, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, o, u] = Th(t);
    this.calendar = n, this.era = r, this.year = a, this.month = o, this.day = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Ua(this);
  }
}
var mz = /* @__PURE__ */ new WeakMap();
class zi {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new zi(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new zi(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return d4(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return nz(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, n) {
    return az(this, t, n);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return rz(this, t, n, r);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return XW(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return dz(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - ZW(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Xl(this, mz, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, o, u] = Th(t), l = t.shift(), d = t.shift();
    this.calendar = n, this.era = r, this.year = a, this.month = o, this.day = u, this.timeZone = l, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Ua(this);
  }
}
const Ii = [
  [
    1868,
    9,
    8
  ],
  [
    1912,
    7,
    30
  ],
  [
    1926,
    12,
    25
  ],
  [
    1989,
    1,
    8
  ],
  [
    2019,
    5,
    1
  ]
], gz = [
  [
    1912,
    7,
    29
  ],
  [
    1926,
    12,
    24
  ],
  [
    1989,
    1,
    7
  ],
  [
    2019,
    4,
    30
  ]
], Bu = [
  1867,
  1911,
  1925,
  1988,
  2018
], na = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Ob(e) {
  const t = Ii.findIndex(([n, r, a]) => e.year < n || e.year === n && e.month < r || e.year === n && e.month === r && e.day < a);
  return t === -1 ? Ii.length - 1 : t === 0 ? 0 : t - 1;
}
function Kd(e) {
  let t = Bu[na.indexOf(e.era)];
  if (!t) throw new Error("Unknown era: " + e.era);
  return new Lt(e.year + t, e.month, e.day);
}
class vz extends qn {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = Ob(n);
    return new Lt(this, na[r], n.year - Bu[r], n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Kd(t));
  }
  balanceDate(t) {
    let n = Kd(t), r = Ob(n);
    na[r] !== t.era && (t.era = na[r], t.year = n.year - Bu[r]), this.constrainDate(t);
  }
  constrainDate(t) {
    let n = na.indexOf(t.era), r = gz[n];
    if (r != null) {
      let [a, o, u] = r, l = a - Bu[n];
      t.year = Math.max(1, Math.min(l, t.year)), t.year === l && (t.month = Math.min(o, t.month), t.month === o && (t.day = Math.min(u, t.day)));
    }
    if (t.year === 1 && n >= 0) {
      let [, a, o] = Ii[n];
      t.month = Math.max(a, t.month), t.month === a && (t.day = Math.max(o, t.day));
    }
  }
  getEras() {
    return na;
  }
  getYearsInEra(t) {
    let n = na.indexOf(t.era), r = Ii[n], a = Ii[n + 1];
    if (a == null)
      return 9999 - r[0] + 1;
    let o = a[0] - r[0];
    return (t.month < a[1] || t.month === a[1] && t.day < a[2]) && o++, o;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Kd(t));
  }
  getMinimumMonthInYear(t) {
    let n = Ab(t);
    return n ? n[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let n = Ab(t);
    return n && t.month === n[1] ? n[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function Ab(e) {
  if (e.year === 1) {
    let t = na.indexOf(e.era);
    return Ii[t];
  }
}
const h4 = -543;
class yz extends qn {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = hs(n.era, n.year);
    return new Lt(this, r - h4, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Mb(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Mb(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Mb(e) {
  let [t, n] = Gl(e.year + h4);
  return new Lt(t, n, e.month, e.day);
}
const pl = 1911;
function m4(e) {
  return e.era === "minguo" ? e.year + pl : 1 - e.year + pl;
}
function Ib(e) {
  let t = e - pl;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class bz extends qn {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = hs(n.era, n.year), [a, o] = Ib(r);
    return new Lt(this, a, o, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Nb(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [n, r] = Ib(m4(t));
    t.era = n, t.year = r;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Nb(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - pl;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function Nb(e) {
  let [t, n] = Gl(m4(e));
  return new Lt(t, n, e.month, e.day);
}
const Rb = 1948320, jb = [
  0,
  31,
  62,
  93,
  124,
  155,
  186,
  216,
  246,
  276,
  306,
  336
  // Esfand
];
class xz {
  fromJulianDay(t) {
    let n = t - Rb, r = 1 + Math.floor((33 * n + 3) / 12053), a = 365 * (r - 1) + Math.floor((8 * r + 21) / 33), o = n - a, u = o < 216 ? Math.floor(o / 31) : Math.floor((o - 6) / 30), l = o - jb[u] + 1;
    return new Lt(this, r, u + 1, l);
  }
  toJulianDay(t) {
    let n = Rb - 1 + 365 * (t.year - 1) + Math.floor((8 * t.year + 21) / 33);
    return n += jb[t.month - 1], n += t.day, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || Mi(25 * t.year + 11, 33) < 8 ? 30 : 29;
  }
  getEras() {
    return [
      "AP"
    ];
  }
  getYearsInEra() {
    return 9377;
  }
  constructor() {
    this.identifier = "persian";
  }
}
const qd = 78, Fb = 80;
class wz extends qn {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = n.year - qd, a = t - Ra(n.era, n.year, 1, 1), o;
    a < Fb ? (r--, o = aa(n.year - 1) ? 31 : 30, a += o + 155 + 90 + 10) : (o = aa(n.year) ? 31 : 30, a -= Fb);
    let u, l;
    if (a < o)
      u = 1, l = a + 1;
    else {
      let d = a - o;
      d < 155 ? (u = Math.floor(d / 31) + 2, l = d % 31 + 1) : (d -= 155, u = Math.floor(d / 30) + 7, l = d % 30 + 1);
    }
    return new Lt(this, r, u, l);
  }
  toJulianDay(t) {
    let n = t.year + qd, [r, a] = Gl(n), o, u;
    return aa(a) ? (o = 31, u = Ra(r, a, 3, 21)) : (o = 30, u = Ra(r, a, 3, 22)), t.month === 1 ? u + t.day - 1 : (u += o + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (u += (t.month - 7) * 30), u += t.day - 1, u);
  }
  getDaysInMonth(t) {
    return t.month === 1 && aa(t.year + qd) || t.month >= 2 && t.month <= 6 ? 31 : 30;
  }
  getYearsInEra() {
    return 9919;
  }
  getEras() {
    return [
      "saka"
    ];
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "indian";
  }
}
const hl = 1948440, Bb = 1948439, Un = 1300, yi = 1600, $z = 460322;
function ml(e, t, n, r) {
  return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function g4(e, t, n) {
  let r = Math.floor((30 * (n - t) + 10646) / 10631), a = Math.min(12, Math.ceil((n - (29 + ml(t, r, 1, 1))) / 29.5) + 1), o = n - ml(t, r, a, 1) + 1;
  return new Lt(e, r, a, o);
}
function Lb(e) {
  return (14 + 11 * e) % 30 < 11;
}
class Sh {
  fromJulianDay(t) {
    return g4(this, hl, t);
  }
  toJulianDay(t) {
    return ml(hl, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = 29 + t.month % 2;
    return t.month === 12 && Lb(t.year) && n++, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return Lb(t.year) ? 355 : 354;
  }
  getYearsInEra() {
    return 9665;
  }
  getEras() {
    return [
      "AH"
    ];
  }
  constructor() {
    this.identifier = "islamic-civil";
  }
}
class Dz extends Sh {
  fromJulianDay(t) {
    return g4(this, Bb, t);
  }
  toJulianDay(t) {
    return ml(Bb, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const Ez = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let qf, Ni;
function Lu(e) {
  return $z + Ni[e - Un];
}
function jo(e, t) {
  let n = e - Un, r = 1 << 11 - (t - 1);
  return qf[n] & r ? 30 : 29;
}
function Vb(e, t) {
  let n = Lu(e);
  for (let r = 1; r < t; r++) n += jo(e, r);
  return n;
}
function Wb(e) {
  return Ni[e + 1 - Un] - Ni[e - Un];
}
class _z extends Sh {
  fromJulianDay(t) {
    let n = t - hl, r = Lu(Un), a = Lu(yi);
    if (n < r || n > a) return super.fromJulianDay(t);
    {
      let o = Un - 1, u = 1, l = 1;
      for (; l > 0; ) {
        o++, l = n - Lu(o) + 1;
        let d = Wb(o);
        if (l === d) {
          u = 12;
          break;
        } else if (l < d) {
          let f = jo(o, u);
          for (u = 1; l > f; )
            l -= f, u++, f = jo(o, u);
          break;
        }
      }
      return new Lt(this, o, u, n - Vb(o, u) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < Un || t.year > yi ? super.toJulianDay(t) : hl + Vb(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < Un || t.year > yi ? super.getDaysInMonth(t) : jo(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < Un || t.year > yi ? super.getDaysInYear(t) : Wb(t.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", qf || (qf = new Uint16Array(Uint8Array.from(atob(Ez), (t) => t.charCodeAt(0)).buffer)), !Ni) {
      Ni = new Uint32Array(yi - Un + 1);
      let t = 0;
      for (let n = Un; n <= yi; n++) {
        Ni[n - Un] = t;
        for (let r = 1; r <= 12; r++) t += jo(n, r);
      }
    }
  }
}
const zb = 347997, v4 = 1080, y4 = 24 * v4, Cz = 29, Tz = 12 * v4 + 793, Sz = Cz * y4 + Tz;
function Ma(e) {
  return Mi(e * 7 + 1, 19) < 7;
}
function Vu(e) {
  let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
  return Mi(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function Pz(e) {
  let t = Vu(e - 1), n = Vu(e);
  return Vu(e + 1) - n === 356 ? 2 : n - t === 382 ? 1 : 0;
}
function Uo(e) {
  return Vu(e) + Pz(e);
}
function b4(e) {
  return Uo(e + 1) - Uo(e);
}
function kz(e) {
  let t = b4(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function wu(e, t) {
  if (t >= 6 && !Ma(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
  let n = kz(e);
  return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? Ma(e) ? 30 : 0 : 30;
}
class Oz {
  fromJulianDay(t) {
    let n = t - zb, r = n * y4 / Sz, a = Math.floor((19 * r + 234) / 235) + 1, o = Uo(a), u = Math.floor(n - o);
    for (; u < 1; )
      a--, o = Uo(a), u = Math.floor(n - o);
    let l = 1, d = 0;
    for (; d < u; )
      d += wu(a, l), l++;
    l--, d -= wu(a, l);
    let f = u - d;
    return new Lt(this, a, l, f);
  }
  toJulianDay(t) {
    let n = Uo(t.year);
    for (let r = 1; r < t.month; r++) n += wu(t.year, r);
    return n + t.day + zb;
  }
  getDaysInMonth(t) {
    return wu(t.year, t.month);
  }
  getMonthsInYear(t) {
    return Ma(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return b4(t.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return [
      "AM"
    ];
  }
  balanceYearMonth(t, n) {
    n.year !== t.year && (Ma(n.year) && !Ma(t.year) && n.month > 6 ? t.month-- : !Ma(n.year) && Ma(t.year) && n.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const Gf = 1723856, Ub = 1824665, Zf = 5500;
function gl(e, t, n, r) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function Ph(e, t) {
  let n = Math.floor(4 * (t - e) / 1461), r = 1 + Math.floor((t - gl(e, n, 1, 1)) / 30), a = t + 1 - gl(e, n, r, 1);
  return [
    n,
    r,
    a
  ];
}
function x4(e) {
  return Math.floor(e % 4 / 3);
}
function w4(e, t) {
  return t % 13 !== 0 ? 30 : x4(e) + 5;
}
class kh {
  fromJulianDay(t) {
    let [n, r, a] = Ph(Gf, t), o = "AM";
    return n <= 0 && (o = "AA", n += Zf), new Lt(this, o, n, r, a);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "AA" && (n -= Zf), gl(Gf, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    return w4(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + x4(t.year);
  }
  getYearsInEra(t) {
    return t.era === "AA" ? 9999 : 9991;
  }
  getEras() {
    return [
      "AA",
      "AM"
    ];
  }
  constructor() {
    this.identifier = "ethiopic";
  }
}
class Az extends kh {
  fromJulianDay(t) {
    let [n, r, a] = Ph(Gf, t);
    return n += Zf, new Lt(this, "AA", n, r, a);
  }
  getEras() {
    return [
      "AA"
    ];
  }
  getYearsInEra() {
    return 9999;
  }
  constructor(...t) {
    super(...t), this.identifier = "ethioaa";
  }
}
class Mz extends kh {
  fromJulianDay(t) {
    let [n, r, a] = Ph(Ub, t), o = "CE";
    return n <= 0 && (o = "BCE", n = 1 - n), new Lt(this, o, n, r, a);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), gl(Ub, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), w4(n, t.month);
  }
  isInverseEra(t) {
    return t.era === "BCE";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BCE" ? "CE" : "BCE", t.year = 1 - t.year);
  }
  getEras() {
    return [
      "BCE",
      "CE"
    ];
  }
  getYearsInEra(t) {
    return t.era === "BCE" ? 9999 : 9715;
  }
  constructor(...t) {
    super(...t), this.identifier = "coptic";
  }
}
function $4(e) {
  switch (e) {
    case "buddhist":
      return new yz();
    case "ethiopic":
      return new kh();
    case "ethioaa":
      return new Az();
    case "coptic":
      return new Mz();
    case "hebrew":
      return new Oz();
    case "indian":
      return new wz();
    case "islamic-civil":
      return new Sh();
    case "islamic-tbla":
      return new Dz();
    case "islamic-umalqura":
      return new _z();
    case "japanese":
      return new vz();
    case "persian":
      return new xz();
    case "roc":
      return new bz();
    case "gregory":
    default:
      return new qn();
  }
}
let Gd = /* @__PURE__ */ new Map();
class Ei {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(t) {
    return this.formatter.format(t);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(t) {
    return this.formatter.formatToParts(t);
  }
  /** Formats a date range as a string. */
  formatRange(t, n) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(t)} – ${this.formatter.format(n)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(t, n) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    let r = this.formatter.formatToParts(t), a = this.formatter.formatToParts(n);
    return [
      ...r.map((o) => ({
        ...o,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...a.map((o) => ({
        ...o,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return Rz() && (this.resolvedHourCycle || (this.resolvedHourCycle = jz(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, n = {}) {
    this.formatter = D4(t, n), this.options = n;
  }
}
const Iz = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function D4(e, t = {}) {
  if (typeof t.hour12 == "boolean" && Nz()) {
    t = {
      ...t
    };
    let a = Iz[String(t.hour12)][e.split("-")[0]], o = t.hour12 ? "h12" : "h23";
    t.hourCycle = a ?? o, delete t.hour12;
  }
  let n = e + (t ? Object.entries(t).sort((a, o) => a[0] < o[0] ? -1 : 1).join() : "");
  if (Gd.has(n)) return Gd.get(n);
  let r = new Intl.DateTimeFormat(e, t);
  return Gd.set(n, r), r;
}
let Zd = null;
function Nz() {
  return Zd == null && (Zd = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Zd;
}
let Xd = null;
function Rz() {
  return Xd == null && (Xd = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Xd;
}
function jz(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let n = D4(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((o) => o.type === "hour").value, 10), a = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((o) => o.type === "hour").value, 10);
  if (r === 0 && a === 23) return "h23";
  if (r === 24 && a === 23) return "h24";
  if (r === 0 && a === 11) return "h11";
  if (r === 12 && a === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
var E4 = {};
E4 = {
  calendar: "التقويم",
  day: "يوم",
  dayPeriod: "ص/م",
  endDate: "تاريخ الانتهاء",
  era: "العصر",
  hour: "الساعات",
  minute: "الدقائق",
  month: "الشهر",
  second: "الثواني",
  selectedDateDescription: (e) => `تاريخ محدد: ${e.date}`,
  selectedRangeDescription: (e) => `المدى الزمني المحدد: ${e.startDate} إلى ${e.endDate}`,
  selectedTimeDescription: (e) => `الوقت المحدد: ${e.time}`,
  startDate: "تاريخ البدء",
  timeZoneName: "التوقيت",
  weekday: "اليوم",
  year: "السنة"
};
var _4 = {};
_4 = {
  calendar: "Календар",
  day: "ден",
  dayPeriod: "пр.об./сл.об.",
  endDate: "Крайна дата",
  era: "ера",
  hour: "час",
  minute: "минута",
  month: "месец",
  second: "секунда",
  selectedDateDescription: (e) => `Избрана дата: ${e.date}`,
  selectedRangeDescription: (e) => `Избран диапазон: ${e.startDate} до ${e.endDate}`,
  selectedTimeDescription: (e) => `Избрано време: ${e.time}`,
  startDate: "Начална дата",
  timeZoneName: "часова зона",
  weekday: "ден от седмицата",
  year: "година"
};
var C4 = {};
C4 = {
  calendar: "Kalendář",
  day: "den",
  dayPeriod: "část dne",
  endDate: "Konečné datum",
  era: "letopočet",
  hour: "hodina",
  minute: "minuta",
  month: "měsíc",
  second: "sekunda",
  selectedDateDescription: (e) => `Vybrané datum: ${e.date}`,
  selectedRangeDescription: (e) => `Vybrané období: ${e.startDate} až ${e.endDate}`,
  selectedTimeDescription: (e) => `Vybraný čas: ${e.time}`,
  startDate: "Počáteční datum",
  timeZoneName: "časové pásmo",
  weekday: "den v týdnu",
  year: "rok"
};
var T4 = {};
T4 = {
  calendar: "Kalender",
  day: "dag",
  dayPeriod: "AM/PM",
  endDate: "Slutdato",
  era: "æra",
  hour: "time",
  minute: "minut",
  month: "måned",
  second: "sekund",
  selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
  selectedRangeDescription: (e) => `Valgt interval: ${e.startDate} til ${e.endDate}`,
  selectedTimeDescription: (e) => `Valgt tidspunkt: ${e.time}`,
  startDate: "Startdato",
  timeZoneName: "tidszone",
  weekday: "ugedag",
  year: "år"
};
var S4 = {};
S4 = {
  calendar: "Kalender",
  day: "Tag",
  dayPeriod: "Tageshälfte",
  endDate: "Enddatum",
  era: "Epoche",
  hour: "Stunde",
  minute: "Minute",
  month: "Monat",
  second: "Sekunde",
  selectedDateDescription: (e) => `Ausgewähltes Datum: ${e.date}`,
  selectedRangeDescription: (e) => `Ausgewählter Bereich: ${e.startDate} bis ${e.endDate}`,
  selectedTimeDescription: (e) => `Ausgewählte Zeit: ${e.time}`,
  startDate: "Anfangsdatum",
  timeZoneName: "Zeitzone",
  weekday: "Wochentag",
  year: "Jahr"
};
var P4 = {};
P4 = {
  calendar: "Ημερολόγιο",
  day: "ημέρα",
  dayPeriod: "π.μ./μ.μ.",
  endDate: "Ημερομηνία λήξης",
  era: "περίοδος",
  hour: "ώρα",
  minute: "λεπτό",
  month: "μήνας",
  second: "δευτερόλεπτο",
  selectedDateDescription: (e) => `Επιλεγμένη ημερομηνία: ${e.date}`,
  selectedRangeDescription: (e) => `Επιλεγμένο εύρος: ${e.startDate} έως ${e.endDate}`,
  selectedTimeDescription: (e) => `Επιλεγμένη ώρα: ${e.time}`,
  startDate: "Ημερομηνία έναρξης",
  timeZoneName: "ζώνη ώρας",
  weekday: "καθημερινή",
  year: "έτος"
};
var k4 = {};
k4 = {
  era: "era",
  year: "year",
  month: "month",
  day: "day",
  hour: "hour",
  minute: "minute",
  second: "second",
  dayPeriod: "AM/PM",
  calendar: "Calendar",
  startDate: "Start Date",
  endDate: "End Date",
  weekday: "day of the week",
  timeZoneName: "time zone",
  selectedDateDescription: (e) => `Selected Date: ${e.date}`,
  selectedRangeDescription: (e) => `Selected Range: ${e.startDate} to ${e.endDate}`,
  selectedTimeDescription: (e) => `Selected Time: ${e.time}`
};
var O4 = {};
O4 = {
  calendar: "Calendario",
  day: "día",
  dayPeriod: "a. m./p. m.",
  endDate: "Fecha final",
  era: "era",
  hour: "hora",
  minute: "minuto",
  month: "mes",
  second: "segundo",
  selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
  selectedRangeDescription: (e) => `Rango seleccionado: ${e.startDate} a ${e.endDate}`,
  selectedTimeDescription: (e) => `Hora seleccionada: ${e.time}`,
  startDate: "Fecha de inicio",
  timeZoneName: "zona horaria",
  weekday: "día de la semana",
  year: "año"
};
var A4 = {};
A4 = {
  calendar: "Kalender",
  day: "päev",
  dayPeriod: "enne/pärast lõunat",
  endDate: "Lõppkuupäev",
  era: "ajastu",
  hour: "tund",
  minute: "minut",
  month: "kuu",
  second: "sekund",
  selectedDateDescription: (e) => `Valitud kuupäev: ${e.date}`,
  selectedRangeDescription: (e) => `Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,
  selectedTimeDescription: (e) => `Valitud aeg: ${e.time}`,
  startDate: "Alguskuupäev",
  timeZoneName: "ajavöönd",
  weekday: "nädalapäev",
  year: "aasta"
};
var M4 = {};
M4 = {
  calendar: "Kalenteri",
  day: "päivä",
  dayPeriod: "vuorokaudenaika",
  endDate: "Päättymispäivä",
  era: "aikakausi",
  hour: "tunti",
  minute: "minuutti",
  month: "kuukausi",
  second: "sekunti",
  selectedDateDescription: (e) => `Valittu päivämäärä: ${e.date}`,
  selectedRangeDescription: (e) => `Valittu aikaväli: ${e.startDate} – ${e.endDate}`,
  selectedTimeDescription: (e) => `Valittu aika: ${e.time}`,
  startDate: "Alkamispäivä",
  timeZoneName: "aikavyöhyke",
  weekday: "viikonpäivä",
  year: "vuosi"
};
var I4 = {};
I4 = {
  calendar: "Calendrier",
  day: "jour",
  dayPeriod: "cadran",
  endDate: "Date de fin",
  era: "ère",
  hour: "heure",
  minute: "minute",
  month: "mois",
  second: "seconde",
  selectedDateDescription: (e) => `Date sélectionnée : ${e.date}`,
  selectedRangeDescription: (e) => `Plage sélectionnée : ${e.startDate} au ${e.endDate}`,
  selectedTimeDescription: (e) => `Heure choisie : ${e.time}`,
  startDate: "Date de début",
  timeZoneName: "fuseau horaire",
  weekday: "jour de la semaine",
  year: "année"
};
var N4 = {};
N4 = {
  calendar: "לוח שנה",
  day: "יום",
  dayPeriod: "לפנה״צ/אחה״צ",
  endDate: "תאריך סיום",
  era: "תקופה",
  hour: "שעה",
  minute: "דקה",
  month: "חודש",
  second: "שנייה",
  selectedDateDescription: (e) => `תאריך נבחר: ${e.date}`,
  selectedRangeDescription: (e) => `טווח נבחר: ${e.startDate} עד ${e.endDate}`,
  selectedTimeDescription: (e) => `זמן נבחר: ${e.time}`,
  startDate: "תאריך התחלה",
  timeZoneName: "אזור זמן",
  weekday: "יום בשבוע",
  year: "שנה"
};
var R4 = {};
R4 = {
  calendar: "Kalendar",
  day: "dan",
  dayPeriod: "AM/PM",
  endDate: "Datum završetka",
  era: "era",
  hour: "sat",
  minute: "minuta",
  month: "mjesec",
  second: "sekunda",
  selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
  selectedRangeDescription: (e) => `Odabrani raspon: ${e.startDate} do ${e.endDate}`,
  selectedTimeDescription: (e) => `Odabrano vrijeme: ${e.time}`,
  startDate: "Datum početka",
  timeZoneName: "vremenska zona",
  weekday: "dan u tjednu",
  year: "godina"
};
var j4 = {};
j4 = {
  calendar: "Naptár",
  day: "nap",
  dayPeriod: "napszak",
  endDate: "Befejező dátum",
  era: "éra",
  hour: "óra",
  minute: "perc",
  month: "hónap",
  second: "másodperc",
  selectedDateDescription: (e) => `Kijelölt dátum: ${e.date}`,
  selectedRangeDescription: (e) => `Kijelölt tartomány: ${e.startDate}–${e.endDate}`,
  selectedTimeDescription: (e) => `Kijelölt idő: ${e.time}`,
  startDate: "Kezdő dátum",
  timeZoneName: "időzóna",
  weekday: "hét napja",
  year: "év"
};
var F4 = {};
F4 = {
  calendar: "Calendario",
  day: "giorno",
  dayPeriod: "AM/PM",
  endDate: "Data finale",
  era: "era",
  hour: "ora",
  minute: "minuto",
  month: "mese",
  second: "secondo",
  selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
  selectedRangeDescription: (e) => `Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,
  selectedTimeDescription: (e) => `Ora selezionata: ${e.time}`,
  startDate: "Data iniziale",
  timeZoneName: "fuso orario",
  weekday: "giorno della settimana",
  year: "anno"
};
var B4 = {};
B4 = {
  calendar: "カレンダー",
  day: "日",
  dayPeriod: "午前/午後",
  endDate: "終了日",
  era: "時代",
  hour: "時",
  minute: "分",
  month: "月",
  second: "秒",
  selectedDateDescription: (e) => `選択した日付 : ${e.date}`,
  selectedRangeDescription: (e) => `選択範囲 : ${e.startDate} から ${e.endDate}`,
  selectedTimeDescription: (e) => `選択した時間 : ${e.time}`,
  startDate: "開始日",
  timeZoneName: "タイムゾーン",
  weekday: "曜日",
  year: "年"
};
var L4 = {};
L4 = {
  calendar: "달력",
  day: "일",
  dayPeriod: "오전/오후",
  endDate: "종료일",
  era: "연호",
  hour: "시",
  minute: "분",
  month: "월",
  second: "초",
  selectedDateDescription: (e) => `선택 일자: ${e.date}`,
  selectedRangeDescription: (e) => `선택 범위: ${e.startDate} ~ ${e.endDate}`,
  selectedTimeDescription: (e) => `선택 시간: ${e.time}`,
  startDate: "시작일",
  timeZoneName: "시간대",
  weekday: "요일",
  year: "년"
};
var V4 = {};
V4 = {
  calendar: "Kalendorius",
  day: "diena",
  dayPeriod: "iki pietų / po pietų",
  endDate: "Pabaigos data",
  era: "era",
  hour: "valanda",
  minute: "minutė",
  month: "mėnuo",
  second: "sekundė",
  selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
  selectedRangeDescription: (e) => `Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,
  selectedTimeDescription: (e) => `Pasirinktas laikas: ${e.time}`,
  startDate: "Pradžios data",
  timeZoneName: "laiko juosta",
  weekday: "savaitės diena",
  year: "metai"
};
var W4 = {};
W4 = {
  calendar: "Kalendārs",
  day: "diena",
  dayPeriod: "priekšpusdienā/pēcpusdienā",
  endDate: "Beigu datums",
  era: "ēra",
  hour: "stundas",
  minute: "minūtes",
  month: "mēnesis",
  second: "sekundes",
  selectedDateDescription: (e) => `Atlasītais datums: ${e.date}`,
  selectedRangeDescription: (e) => `Atlasītais diapazons: no ${e.startDate} līdz ${e.endDate}`,
  selectedTimeDescription: (e) => `Atlasītais laiks: ${e.time}`,
  startDate: "Sākuma datums",
  timeZoneName: "laika josla",
  weekday: "nedēļas diena",
  year: "gads"
};
var z4 = {};
z4 = {
  calendar: "Kalender",
  day: "dag",
  dayPeriod: "a.m./p.m.",
  endDate: "Sluttdato",
  era: "tidsalder",
  hour: "time",
  minute: "minutt",
  month: "måned",
  second: "sekund",
  selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
  selectedRangeDescription: (e) => `Valgt område: ${e.startDate} til ${e.endDate}`,
  selectedTimeDescription: (e) => `Valgt tid: ${e.time}`,
  startDate: "Startdato",
  timeZoneName: "tidssone",
  weekday: "ukedag",
  year: "år"
};
var U4 = {};
U4 = {
  calendar: "Kalender",
  day: "dag",
  dayPeriod: "a.m./p.m.",
  endDate: "Einddatum",
  era: "tijdperk",
  hour: "uur",
  minute: "minuut",
  month: "maand",
  second: "seconde",
  selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
  selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,
  selectedTimeDescription: (e) => `Geselecteerde tijd: ${e.time}`,
  startDate: "Startdatum",
  timeZoneName: "tijdzone",
  weekday: "dag van de week",
  year: "jaar"
};
var H4 = {};
H4 = {
  calendar: "Kalendarz",
  day: "dzień",
  dayPeriod: "rano / po południu / wieczorem",
  endDate: "Data końcowa",
  era: "era",
  hour: "godzina",
  minute: "minuta",
  month: "miesiąc",
  second: "sekunda",
  selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
  selectedRangeDescription: (e) => `Wybrany zakres: ${e.startDate} do ${e.endDate}`,
  selectedTimeDescription: (e) => `Wybrany czas: ${e.time}`,
  startDate: "Data początkowa",
  timeZoneName: "strefa czasowa",
  weekday: "dzień tygodnia",
  year: "rok"
};
var Y4 = {};
Y4 = {
  calendar: "Calendário",
  day: "dia",
  dayPeriod: "AM/PM",
  endDate: "Data final",
  era: "era",
  hour: "hora",
  minute: "minuto",
  month: "mês",
  second: "segundo",
  selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
  selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
  selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
  startDate: "Data inicial",
  timeZoneName: "fuso horário",
  weekday: "dia da semana",
  year: "ano"
};
var K4 = {};
K4 = {
  calendar: "Calendário",
  day: "dia",
  dayPeriod: "am/pm",
  endDate: "Data de Término",
  era: "era",
  hour: "hora",
  minute: "minuto",
  month: "mês",
  second: "segundo",
  selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
  selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
  selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
  startDate: "Data de Início",
  timeZoneName: "fuso horário",
  weekday: "dia da semana",
  year: "ano"
};
var q4 = {};
q4 = {
  calendar: "Calendar",
  day: "zi",
  dayPeriod: "a.m/p.m.",
  endDate: "Dată final",
  era: "eră",
  hour: "oră",
  minute: "minut",
  month: "lună",
  second: "secundă",
  selectedDateDescription: (e) => `Dată selectată: ${e.date}`,
  selectedRangeDescription: (e) => `Interval selectat: de la ${e.startDate} până la ${e.endDate}`,
  selectedTimeDescription: (e) => `Ora selectată: ${e.time}`,
  startDate: "Dată început",
  timeZoneName: "fus orar",
  weekday: "ziua din săptămână",
  year: "an"
};
var G4 = {};
G4 = {
  calendar: "Календарь",
  day: "день",
  dayPeriod: "AM/PM",
  endDate: "Дата окончания",
  era: "эра",
  hour: "час",
  minute: "минута",
  month: "месяц",
  second: "секунда",
  selectedDateDescription: (e) => `Выбранная дата: ${e.date}`,
  selectedRangeDescription: (e) => `Выбранный диапазон: с ${e.startDate} по ${e.endDate}`,
  selectedTimeDescription: (e) => `Выбранное время: ${e.time}`,
  startDate: "Дата начала",
  timeZoneName: "часовой пояс",
  weekday: "день недели",
  year: "год"
};
var Z4 = {};
Z4 = {
  calendar: "Kalendár",
  day: "deň",
  dayPeriod: "AM/PM",
  endDate: "Dátum ukončenia",
  era: "letopočet",
  hour: "hodina",
  minute: "minúta",
  month: "mesiac",
  second: "sekunda",
  selectedDateDescription: (e) => `Vybratý dátum: ${e.date}`,
  selectedRangeDescription: (e) => `Vybratý rozsah: od ${e.startDate} do ${e.endDate}`,
  selectedTimeDescription: (e) => `Vybratý čas: ${e.time}`,
  startDate: "Dátum začatia",
  timeZoneName: "časové pásmo",
  weekday: "deň týždňa",
  year: "rok"
};
var X4 = {};
X4 = {
  calendar: "Koledar",
  day: "dan",
  dayPeriod: "dop/pop",
  endDate: "Datum konca",
  era: "doba",
  hour: "ura",
  minute: "minuta",
  month: "mesec",
  second: "sekunda",
  selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
  selectedRangeDescription: (e) => `Izbrano območje: ${e.startDate} do ${e.endDate}`,
  selectedTimeDescription: (e) => `Izbrani čas: ${e.time}`,
  startDate: "Datum začetka",
  timeZoneName: "časovni pas",
  weekday: "dan v tednu",
  year: "leto"
};
var J4 = {};
J4 = {
  calendar: "Kalendar",
  day: "дан",
  dayPeriod: "пре подне/по подне",
  endDate: "Datum završetka",
  era: "ера",
  hour: "сат",
  minute: "минут",
  month: "месец",
  second: "секунд",
  selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
  selectedRangeDescription: (e) => `Izabrani opseg: od ${e.startDate} do ${e.endDate}`,
  selectedTimeDescription: (e) => `Izabrano vreme: ${e.time}`,
  startDate: "Datum početka",
  timeZoneName: "временска зона",
  weekday: "дан у недељи",
  year: "година"
};
var Q4 = {};
Q4 = {
  calendar: "Kalender",
  day: "dag",
  dayPeriod: "fm/em",
  endDate: "Slutdatum",
  era: "era",
  hour: "timme",
  minute: "minut",
  month: "månad",
  second: "sekund",
  selectedDateDescription: (e) => `Valt datum: ${e.date}`,
  selectedRangeDescription: (e) => `Valt intervall: ${e.startDate} till ${e.endDate}`,
  selectedTimeDescription: (e) => `Vald tid: ${e.time}`,
  startDate: "Startdatum",
  timeZoneName: "tidszon",
  weekday: "veckodag",
  year: "år"
};
var e$ = {};
e$ = {
  calendar: "Takvim",
  day: "gün",
  dayPeriod: "ÖÖ/ÖS",
  endDate: "Bitiş Tarihi",
  era: "çağ",
  hour: "saat",
  minute: "dakika",
  month: "ay",
  second: "saniye",
  selectedDateDescription: (e) => `Seçilen Tarih: ${e.date}`,
  selectedRangeDescription: (e) => `Seçilen Aralık: ${e.startDate} - ${e.endDate}`,
  selectedTimeDescription: (e) => `Seçilen Zaman: ${e.time}`,
  startDate: "Başlangıç Tarihi",
  timeZoneName: "saat dilimi",
  weekday: "haftanın günü",
  year: "yıl"
};
var t$ = {};
t$ = {
  calendar: "Календар",
  day: "день",
  dayPeriod: "дп/пп",
  endDate: "Дата завершення",
  era: "ера",
  hour: "година",
  minute: "хвилина",
  month: "місяць",
  second: "секунда",
  selectedDateDescription: (e) => `Вибрана дата: ${e.date}`,
  selectedRangeDescription: (e) => `Вибраний діапазон: ${e.startDate} — ${e.endDate}`,
  selectedTimeDescription: (e) => `Вибраний час: ${e.time}`,
  startDate: "Дата початку",
  timeZoneName: "часовий пояс",
  weekday: "день тижня",
  year: "рік"
};
var n$ = {};
n$ = {
  calendar: "日历",
  day: "日",
  dayPeriod: "上午/下午",
  endDate: "结束日期",
  era: "纪元",
  hour: "小时",
  minute: "分钟",
  month: "月",
  second: "秒",
  selectedDateDescription: (e) => `选定的日期：${e.date}`,
  selectedRangeDescription: (e) => `选定的范围：${e.startDate} 至 ${e.endDate}`,
  selectedTimeDescription: (e) => `选定的时间：${e.time}`,
  startDate: "开始日期",
  timeZoneName: "时区",
  weekday: "工作日",
  year: "年"
};
var r$ = {};
r$ = {
  calendar: "日曆",
  day: "日",
  dayPeriod: "上午/下午",
  endDate: "結束日期",
  era: "纪元",
  hour: "小时",
  minute: "分钟",
  month: "月",
  second: "秒",
  selectedDateDescription: (e) => `選定的日期：${e.date}`,
  selectedRangeDescription: (e) => `選定的範圍：${e.startDate} 至 ${e.endDate}`,
  selectedTimeDescription: (e) => `選定的時間：${e.time}`,
  startDate: "開始日期",
  timeZoneName: "时区",
  weekday: "工作日",
  year: "年"
};
var Oh = {};
Oh = {
  "ar-AE": E4,
  "bg-BG": _4,
  "cs-CZ": C4,
  "da-DK": T4,
  "de-DE": S4,
  "el-GR": P4,
  "en-US": k4,
  "es-ES": O4,
  "et-EE": A4,
  "fi-FI": M4,
  "fr-FR": I4,
  "he-IL": N4,
  "hr-HR": R4,
  "hu-HU": j4,
  "it-IT": F4,
  "ja-JP": B4,
  "ko-KR": L4,
  "lt-LT": V4,
  "lv-LV": W4,
  "nb-NO": z4,
  "nl-NL": U4,
  "pl-PL": H4,
  "pt-BR": Y4,
  "pt-PT": K4,
  "ro-RO": q4,
  "ru-RU": G4,
  "sk-SK": Z4,
  "sl-SI": X4,
  "sr-SP": J4,
  "sv-SE": Q4,
  "tr-TR": e$,
  "uk-UA": t$,
  "zh-CN": n$,
  "zh-TW": r$
};
const Lr = typeof document < "u" ? Oe.useLayoutEffect : () => {
};
function un(e) {
  const t = Se(null);
  return Lr(() => {
    t.current = e;
  }, [
    e
  ]), Be((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
function Fz(e) {
  let [t, n] = He(e), r = Se(null), a = un(() => {
    if (!r.current) return;
    let u = r.current.next();
    if (u.done) {
      r.current = null;
      return;
    }
    t === u.value ? a() : n(u.value);
  });
  Lr(() => {
    r.current && a();
  });
  let o = un((u) => {
    r.current = u(t), a();
  });
  return [
    t,
    o
  ];
}
const vl = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, a$ = /* @__PURE__ */ Oe.createContext(vl), Bz = /* @__PURE__ */ Oe.createContext(!1);
let Lz = !!(typeof window < "u" && window.document && window.document.createElement), Jd = /* @__PURE__ */ new WeakMap();
function Vz(e = !1) {
  let t = At(a$), n = Se(null);
  if (n.current === null && !e) {
    var r, a;
    let o = (a = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (r = a.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (o) {
      let u = Jd.get(o);
      u == null ? Jd.set(o, {
        id: t.current,
        state: o.memoizedState
      }) : o.memoizedState !== u.state && (t.current = u.id, Jd.delete(o));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function Wz(e) {
  let t = At(a$);
  t === vl && !Lz && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = Vz(!!e), r = t === vl && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function zz(e) {
  let t = Oe.useId(), [n] = He(i$()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${vl.prefix}`;
  return e || `${r}-${t}`;
}
const Uz = typeof Oe.useId == "function" ? zz : Wz;
function Hz() {
  return !1;
}
function Yz() {
  return !0;
}
function Kz(e) {
  return () => {
  };
}
function i$() {
  return typeof Oe.useSyncExternalStore == "function" ? Oe.useSyncExternalStore(Kz, Hz, Yz) : At(Bz);
}
let qz = !!(typeof window < "u" && window.document && window.document.createElement), Ri = /* @__PURE__ */ new Map(), Fo;
typeof FinalizationRegistry < "u" && (Fo = new FinalizationRegistry((e) => {
  Ri.delete(e);
}));
function Qo(e) {
  let [t, n] = He(e), r = Se(null), a = Uz(t), o = Se(null);
  if (Fo && Fo.register(o, a), qz) {
    const u = Ri.get(a);
    u && !u.includes(r) ? u.push(r) : Ri.set(a, [
      r
    ]);
  }
  return Lr(() => {
    let u = a;
    return () => {
      Fo && Fo.unregister(o), Ri.delete(u);
    };
  }, [
    a
  ]), Ue(() => {
    let u = r.current;
    return u && n(u), () => {
      u && (r.current = null);
    };
  }), a;
}
function Gz(e, t) {
  if (e === t) return e;
  let n = Ri.get(e);
  if (n)
    return n.forEach((a) => a.current = t), t;
  let r = Ri.get(t);
  return r ? (r.forEach((a) => a.current = e), e) : t;
}
function Hb(e = []) {
  let t = Qo(), [n, r] = Fz(t), a = Be(() => {
    r(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    r
  ]);
  return Lr(a, [
    t,
    a,
    ...e
  ]), n;
}
function o$(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const cn = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, fa = (e) => e && "window" in e && e.window === e ? e : cn(e).defaultView || window;
function Zz(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Xz(e) {
  return Zz(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Jz = !1;
function Jl() {
  return Jz;
}
function kt(e, t) {
  if (!Jl()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Xz(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const es = (e = document) => {
  var t;
  if (!Jl()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function St(e) {
  return Jl() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
class Qz {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(t) {
    if (!kt(this.root, t)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
    const n = [];
    let r = t, a = t;
    for (this._currentNode = t; r && r !== this.root; ) if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const u = r, l = this._doc.createTreeWalker(u, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      n.push(l), l.currentNode = a, this._currentSetFor.add(l), r = a = u.host;
    } else r = r.parentNode;
    const o = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    n.push(o), o.currentNode = a, this._currentSetFor.add(o), this._walkerStack = n;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let t = this.currentNode, n = this.nextNode();
    return kt(t, n) ? (n && (this.currentNode = n), n) : (this.currentNode = t, null);
  }
  lastChild() {
    let n = this._walkerStack[0].lastChild();
    return n && (this.currentNode = n), n;
  }
  nextNode() {
    const t = this._walkerStack[0].nextNode();
    if (t) {
      if (t.shadowRoot) {
        var n;
        let a;
        if (typeof this.filter == "function" ? a = this.filter(t) : !((n = this.filter) === null || n === void 0) && n.acceptNode && (a = this.filter.acceptNode(t)), a === NodeFilter.FILTER_ACCEPT)
          return this.currentNode = t, t;
        let o = this.nextNode();
        return o && (this.currentNode = o), o;
      }
      return t && (this.currentNode = t), t;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let r = this.nextNode();
      return r && (this.currentNode = r), r;
    } else return null;
  }
  previousNode() {
    const t = this._walkerStack[0];
    if (t.currentNode === t.root) {
      if (this._currentSetFor.has(t))
        if (this._currentSetFor.delete(t), this._walkerStack.length > 1) {
          this._walkerStack.shift();
          let a = this.previousNode();
          return a && (this.currentNode = a), a;
        } else return null;
      return null;
    }
    const n = t.previousNode();
    if (n) {
      if (n.shadowRoot) {
        var r;
        let o;
        if (typeof this.filter == "function" ? o = this.filter(n) : !((r = this.filter) === null || r === void 0) && r.acceptNode && (o = this.filter.acceptNode(n)), o === NodeFilter.FILTER_ACCEPT)
          return n && (this.currentNode = n), n;
        let u = this.lastChild();
        return u && (this.currentNode = u), u;
      }
      return n && (this.currentNode = n), n;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let a = this.previousNode();
      return a && (this.currentNode = a), a;
    } else return null;
  }
  /**
   * @deprecated
   */
  nextSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  previousSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  parentNode() {
    return null;
  }
  constructor(t, n, r, a) {
    this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (u) => {
      if (u.nodeType === Node.ELEMENT_NODE) {
        const d = u.shadowRoot;
        if (d) {
          const f = this._doc.createTreeWalker(d, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(f), NodeFilter.FILTER_ACCEPT;
        } else {
          var l;
          if (typeof this.filter == "function") return this.filter(u);
          if (!((l = this.filter) === null || l === void 0) && l.acceptNode) return this.filter.acceptNode(u);
          if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    }, this._doc = t, this.root = n, this.filter = a ?? null, this.whatToShow = r ?? NodeFilter.SHOW_ALL, this._currentNode = n, this._walkerStack.unshift(t.createTreeWalker(n, r, this._acceptNode));
    const o = n.shadowRoot;
    if (o) {
      const u = this._doc.createTreeWalker(o, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(u);
    }
  }
}
function eU(e, t, n, r) {
  return Jl() ? new Qz(e, t, n, r) : e.createTreeWalker(t, n, r);
}
function s$(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = s$(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function tU() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = s$(e)) && (r && (r += " "), r += t);
  return r;
}
function Ha(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let a in r) {
      let o = t[a], u = r[a];
      typeof o == "function" && typeof u == "function" && // This is a lot faster than a regex.
      a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= /* 'A' */
      65 && a.charCodeAt(2) <= /* 'Z' */
      90 ? t[a] = o$(o, u) : (a === "className" || a === "UNSAFE_className") && typeof o == "string" && typeof u == "string" ? t[a] = tU(o, u) : a === "id" && o && u ? t.id = Gz(o, u) : t[a] = u !== void 0 ? u : o;
    }
  }
  return t;
}
const nU = /* @__PURE__ */ new Set([
  "id"
]), rU = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), aU = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), iU = /^(data-.*)$/;
function oU(e, t = {}) {
  let { labelable: n, isLink: r, propNames: a } = t, o = {};
  for (const u in e) Object.prototype.hasOwnProperty.call(e, u) && (nU.has(u) || n && rU.has(u) || r && aU.has(u) || a != null && a.has(u) || iU.test(u)) && (o[u] = e[u]);
  return o;
}
function Ui(e) {
  if (sU()) e.focus({
    preventScroll: !0
  });
  else {
    let t = uU(e);
    e.focus(), lU(t);
  }
}
let $u = null;
function sU() {
  if ($u == null) {
    $u = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return $u = !0, !0;
        }
      });
    } catch {
    }
  }
  return $u;
}
function uU(e) {
  let t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n;
}
function lU(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Ql(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Ah(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function ya(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Hi = ya(function() {
  return Ah(/^Mac/i);
}), cU = ya(function() {
  return Ah(/^iPhone/i);
}), u$ = ya(function() {
  return Ah(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Hi() && navigator.maxTouchPoints > 1;
}), Mh = ya(function() {
  return cU() || u$();
}), dU = ya(function() {
  return Ql(/AppleWebKit/i) && !fU();
}), fU = ya(function() {
  return Ql(/Chrome/i);
}), l$ = ya(function() {
  return Ql(/Android/i);
}), pU = ya(function() {
  return Ql(/Firefox/i);
});
function ts(e, t, n = !0) {
  var r, a;
  let { metaKey: o, ctrlKey: u, altKey: l, shiftKey: d } = t;
  pU() && (!((a = window.event) === null || a === void 0 || (r = a.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (Hi() ? o = !0 : u = !0);
  let f = dU() && Hi() && !u$() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: o,
    ctrlKey: u,
    altKey: l,
    shiftKey: d
  }) : new MouseEvent("click", {
    metaKey: o,
    ctrlKey: u,
    altKey: l,
    shiftKey: d,
    bubbles: !0,
    cancelable: !0
  });
  ts.isOpening = n, Ui(e), e.dispatchEvent(f), ts.isOpening = !1;
}
ts.isOpening = !1;
let $i = /* @__PURE__ */ new Map(), Xf = /* @__PURE__ */ new Set();
function Yb() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target) return;
    let a = $i.get(r.target);
    a || (a = /* @__PURE__ */ new Set(), $i.set(r.target, a), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), a.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target) return;
    let a = $i.get(r.target);
    if (a && (a.delete(r.propertyName), a.size === 0 && (r.target.removeEventListener("transitioncancel", n), $i.delete(r.target)), $i.size === 0)) {
      for (let o of Xf) o();
      Xf.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? Yb() : document.addEventListener("DOMContentLoaded", Yb));
function c$(e) {
  requestAnimationFrame(() => {
    $i.size === 0 ? e() : Xf.add(e);
  });
}
function Ih() {
  let e = Se(/* @__PURE__ */ new Map()), t = Be((a, o, u, l) => {
    let d = l != null && l.once ? (...f) => {
      e.current.delete(u), u(...f);
    } : u;
    e.current.set(u, {
      type: o,
      eventTarget: a,
      fn: d,
      options: l
    }), a.addEventListener(o, d, l);
  }, []), n = Be((a, o, u, l) => {
    var d;
    let f = ((d = e.current.get(u)) === null || d === void 0 ? void 0 : d.fn) || u;
    a.removeEventListener(o, f, l), e.current.delete(u);
  }, []), r = Be(() => {
    e.current.forEach((a, o) => {
      n(a.eventTarget, a.type, o, a.options);
    });
  }, [
    n
  ]);
  return Ue(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function d$(e, t) {
  let { id: n, "aria-label": r, "aria-labelledby": a } = e;
  return n = Qo(n), a && r ? a = [
    .../* @__PURE__ */ new Set([
      n,
      ...a.trim().split(/\s+/)
    ])
  ].join(" ") : a && (a = a.trim().split(/\s+/).join(" ")), !r && !a && t && (r = t), {
    id: n,
    "aria-label": r,
    "aria-labelledby": a
  };
}
function hU(e, t) {
  Lr(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Jf(e, t) {
  if (!e) return !1;
  let n = window.getComputedStyle(e), r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r;
}
function mU(e, t) {
  let n = e;
  for (Jf(n, t) && (n = n.parentElement); n && !Jf(n, t); ) n = n.parentElement;
  return n || document.scrollingElement || document.documentElement;
}
function gU(e, t) {
  const n = [];
  for (; e && e !== document.documentElement; )
    Jf(e, t) && n.push(e), e = e.parentElement;
  return n;
}
let vU = 0;
const Qd = /* @__PURE__ */ new Map();
function yU(e) {
  let [t, n] = He();
  return Lr(() => {
    if (!e) return;
    let r = Qd.get(e);
    if (r)
      n(r.element.id);
    else {
      let a = `react-aria-description-${vU++}`;
      n(a);
      let o = document.createElement("div");
      o.id = a, o.style.display = "none", o.textContent = e, document.body.appendChild(o), r = {
        refCount: 0,
        element: o
      }, Qd.set(e, r);
    }
    return r.refCount++, () => {
      r && --r.refCount === 0 && (r.element.remove(), Qd.delete(e));
    };
  }, [
    e
  ]), {
    "aria-describedby": e ? t : void 0
  };
}
function ef(e, t, n, r) {
  let a = un(n), o = n == null;
  Ue(() => {
    if (o || !e.current) return;
    let u = e.current;
    return u.addEventListener(t, a, r), () => {
      u.removeEventListener(t, a, r);
    };
  }, [
    e,
    t,
    r,
    o,
    a
  ]);
}
function bU(e, t) {
  let n = Kb(e, t, "left"), r = Kb(e, t, "top"), a = t.offsetWidth, o = t.offsetHeight, u = e.scrollLeft, l = e.scrollTop, { borderTopWidth: d, borderLeftWidth: f, scrollPaddingTop: p, scrollPaddingRight: m, scrollPaddingBottom: v, scrollPaddingLeft: $ } = getComputedStyle(e), _ = u + parseInt(f, 10), x = l + parseInt(d, 10), w = _ + e.clientWidth, M = x + e.clientHeight, D = parseInt(p, 10) || 0, C = parseInt(v, 10) || 0, P = parseInt(m, 10) || 0, S = parseInt($, 10) || 0;
  n <= u + S ? u = n - parseInt(f, 10) - S : n + a > w - P && (u += n + a - w + P), r <= x + D ? l = r - parseInt(d, 10) - D : r + o > M - C && (l += r + o - M + C), e.scrollLeft = u, e.scrollTop = l;
}
function Kb(e, t, n) {
  const r = n === "left" ? "offsetLeft" : "offsetTop";
  let a = 0;
  for (; t.offsetParent && (a += t[r], t.offsetParent !== e); ) {
    if (t.offsetParent.contains(e)) {
      a -= e[r];
      break;
    }
    t = t.offsetParent;
  }
  return a;
}
function xU(e, t) {
  if (e && document.contains(e)) {
    let u = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(u).overflow === "hidden") {
      let d = gU(e);
      for (let f of d) bU(f, e);
    } else {
      var n;
      let { left: d, top: f } = e.getBoundingClientRect();
      e == null || (n = e.scrollIntoView) === null || n === void 0 || n.call(e, {
        block: "nearest"
      });
      let { left: p, top: m } = e.getBoundingClientRect();
      if (Math.abs(d - p) > 1 || Math.abs(f - m) > 1) {
        var r, a, o;
        t == null || (a = t.containingElement) === null || a === void 0 || (r = a.scrollIntoView) === null || r === void 0 || r.call(a, {
          block: "center",
          inline: "center"
        }), (o = e.scrollIntoView) === null || o === void 0 || o.call(e, {
          block: "nearest"
        });
      }
    }
  }
}
function Qf(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : l$() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function wU(e) {
  return !l$() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function $U(e, t) {
  let n = Se(null);
  return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e;
}
function DU(e, t, n) {
  let r = Se(t), a = un(() => {
    n && n(r.current);
  });
  Ue(() => {
    var o;
    let u = e == null || (o = e.current) === null || o === void 0 ? void 0 : o.form;
    return u == null || u.addEventListener("reset", a), () => {
      u == null || u.removeEventListener("reset", a);
    };
  }, [
    e,
    a
  ]);
}
const Nh = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])'
], EU = Nh.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Nh.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const _U = Nh.join(':not([hidden]):not([tabindex="-1"]),');
function f$(e) {
  return e.matches(EU);
}
function CU(e) {
  return e.matches(_U);
}
function TU(e, t, n) {
  let [r, a] = He(e || t), o = Se(e !== void 0), u = e !== void 0;
  Ue(() => {
    let f = o.current;
    f !== u && console.warn(`WARN: A component changed from ${f ? "controlled" : "uncontrolled"} to ${u ? "controlled" : "uncontrolled"}.`), o.current = u;
  }, [
    u
  ]);
  let l = u ? e : r, d = Be((f, ...p) => {
    let m = (v, ...$) => {
      n && (Object.is(l, v) || n(v, ...$)), u || (l = v);
    };
    typeof f == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), a(($, ..._) => {
      let x = f(u ? l : $, ..._);
      return m(x, ...p), u ? $ : x;
    })) : (u || a(f), m(f, ...p));
  }, [
    u,
    l,
    n
  ]);
  return [
    l,
    d
  ];
}
function SU(e) {
  const t = fa(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: r } = e.style, a = n !== "none" && r !== "hidden" && r !== "collapse";
  if (a) {
    const { getComputedStyle: o } = e.ownerDocument.defaultView;
    let { display: u, visibility: l } = o(e);
    a = u !== "none" && l !== "hidden" && l !== "collapse";
  }
  return a;
}
function PU(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function p$(e, t) {
  return e.nodeName !== "#comment" && SU(e) && PU(e, t) && (!e.parentElement || p$(e.parentElement, e));
}
let _i = "default", ep = "", Wu = /* @__PURE__ */ new WeakMap();
function qb(e) {
  if (Mh()) {
    if (_i === "default") {
      const t = cn(e);
      ep = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    _i = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Wu.set(e, e.style[t]), e.style[t] = "none";
  }
}
function tf(e) {
  if (Mh()) {
    if (_i !== "disabled") return;
    _i = "restoring", setTimeout(() => {
      c$(() => {
        if (_i === "restoring") {
          const t = cn(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = ep || ""), ep = "", _i = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Wu.has(e)) {
    let t = Wu.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Wu.delete(e);
  }
}
const h$ = Oe.createContext({
  register: () => {
  }
});
h$.displayName = "PressResponderContext";
class m$ {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = t;
  }
}
function kU(e) {
  let t = Se({
    isFocused: !1,
    observer: null
  });
  Lr(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = un((r) => {
    e == null || e(r);
  });
  return Be((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = r.target, o = (u) => {
        t.current.isFocused = !1, a.disabled && n(new m$("blur", u)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      a.addEventListener("focusout", o, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && a.disabled) {
          var u;
          (u = t.current.observer) === null || u === void 0 || u.disconnect();
          let l = a === document.activeElement ? null : document.activeElement;
          a.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), a.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
          }));
        }
      }), t.current.observer.observe(a, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
let yl = !1;
function Gb(e) {
  for (; e && !f$(e); ) e = e.parentElement;
  let t = fa(e), n = t.document.activeElement;
  if (!n || n === e) return;
  yl = !0;
  let r = !1, a = (p) => {
    (p.target === n || r) && p.stopImmediatePropagation();
  }, o = (p) => {
    (p.target === n || r) && (p.stopImmediatePropagation(), !e && !r && (r = !0, Ui(n), d()));
  }, u = (p) => {
    (p.target === e || r) && p.stopImmediatePropagation();
  }, l = (p) => {
    (p.target === e || r) && (p.stopImmediatePropagation(), r || (r = !0, Ui(n), d()));
  };
  t.addEventListener("blur", a, !0), t.addEventListener("focusout", o, !0), t.addEventListener("focusin", l, !0), t.addEventListener("focus", u, !0);
  let d = () => {
    cancelAnimationFrame(f), t.removeEventListener("blur", a, !0), t.removeEventListener("focusout", o, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", u, !0), yl = !1, r = !1;
  }, f = requestAnimationFrame(d);
  return d;
}
function OU(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function g$(e, t, n) {
  if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function AU(e, t) {
  var n = g$(e, t, "get");
  return OU(e, n);
}
function MU(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function Zb(e, t, n) {
  var r = g$(e, t, "set");
  return MU(e, r, n), n;
}
function IU(e) {
  let t = At(h$);
  if (t) {
    let { register: n, ...r } = t;
    e = Ha(r, e), n();
  }
  return hU(t, e.ref), e;
}
var Du = /* @__PURE__ */ new WeakMap();
class Eu {
  continuePropagation() {
    Zb(this, Du, !1);
  }
  get shouldStopPropagation() {
    return AU(this, Du);
  }
  constructor(t, n, r, a) {
    Xl(this, Du, {
      writable: !0,
      value: void 0
    }), Zb(this, Du, !0);
    var o;
    let u = (o = a == null ? void 0 : a.target) !== null && o !== void 0 ? o : r.currentTarget;
    const l = u == null ? void 0 : u.getBoundingClientRect();
    let d, f = 0, p, m = null;
    r.clientX != null && r.clientY != null && (p = r.clientX, m = r.clientY), l && (p != null && m != null ? (d = p - l.left, f = m - l.top) : (d = l.width / 2, f = l.height / 2)), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = d, this.y = f;
  }
}
const Xb = Symbol("linkClicked");
function NU(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: r,
    onPressEnd: a,
    onPressUp: o,
    isDisabled: u,
    isPressed: l,
    preventFocusOnPress: d,
    shouldCancelOnPointerExit: f,
    allowTextSelectionOnPress: p,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: m,
    ...v
  } = IU(e), [$, _] = He(!1), x = Se({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: w, removeAllGlobalListeners: M } = Ih(), D = un((k, F) => {
    let R = x.current;
    if (u || R.didFirePressStart) return !1;
    let I = !0;
    if (R.isTriggeringEvent = !0, r) {
      let j = new Eu("pressstart", F, k);
      r(j), I = j.shouldStopPropagation;
    }
    return n && n(!0), R.isTriggeringEvent = !1, R.didFirePressStart = !0, _(!0), I;
  }), C = un((k, F, R = !0) => {
    let I = x.current;
    if (!I.didFirePressStart) return !1;
    I.didFirePressStart = !1, I.isTriggeringEvent = !0;
    let j = !0;
    if (a) {
      let E = new Eu("pressend", F, k);
      a(E), j = E.shouldStopPropagation;
    }
    if (n && n(!1), _(!1), t && R && !u) {
      let E = new Eu("press", F, k);
      t(E), j && (j = E.shouldStopPropagation);
    }
    return I.isTriggeringEvent = !1, j;
  }), P = un((k, F) => {
    let R = x.current;
    if (u) return !1;
    if (o) {
      R.isTriggeringEvent = !0;
      let I = new Eu("pressup", F, k);
      return o(I), R.isTriggeringEvent = !1, I.shouldStopPropagation;
    }
    return !0;
  }), S = un((k) => {
    let F = x.current;
    if (F.isPressed && F.target) {
      F.didFirePressStart && F.pointerType != null && C(bi(F.target, k), F.pointerType, !1), F.isPressed = !1, F.isOverTarget = !1, F.activePointerId = null, F.pointerType = null, M(), p || tf(F.target);
      for (let R of F.disposables) R();
      F.disposables = [];
    }
  }), G = un((k) => {
    f && S(k);
  }), Z = Xe(() => {
    let k = x.current, F = {
      onKeyDown(I) {
        if (nf(I.nativeEvent, I.currentTarget) && kt(I.currentTarget, St(I.nativeEvent))) {
          var j;
          ex(St(I.nativeEvent), I.key) && I.preventDefault();
          let E = !0;
          if (!k.isPressed && !I.repeat) {
            k.target = I.currentTarget, k.isPressed = !0, k.pointerType = "keyboard", E = D(I, "keyboard");
            let L = I.currentTarget, H = (z) => {
              nf(z, L) && !z.repeat && kt(L, St(z)) && k.target && P(bi(k.target, z), "keyboard");
            };
            w(cn(I.currentTarget), "keyup", o$(H, R), !0);
          }
          E && I.stopPropagation(), I.metaKey && Hi() && ((j = k.metaKeyEvents) === null || j === void 0 || j.set(I.key, I.nativeEvent));
        } else I.key === "Meta" && (k.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(I) {
        if (!(I && !kt(I.currentTarget, St(I.nativeEvent))) && I && I.button === 0 && !k.isTriggeringEvent && !ts.isOpening) {
          let j = !0;
          if (u && I.preventDefault(), !k.ignoreEmulatedMouseEvents && !k.isPressed && (k.pointerType === "virtual" || Qf(I.nativeEvent))) {
            let E = D(I, "virtual"), L = P(I, "virtual"), H = C(I, "virtual");
            j = E && L && H;
          } else if (k.isPressed && k.pointerType !== "keyboard") {
            let E = k.pointerType || I.nativeEvent.pointerType || "virtual";
            j = C(bi(I.currentTarget, I), E, !0), k.isOverTarget = !1, S(I);
          }
          k.ignoreEmulatedMouseEvents = !1, j && I.stopPropagation();
        }
      }
    }, R = (I) => {
      var j;
      if (k.isPressed && k.target && nf(I, k.target)) {
        var E;
        ex(St(I), I.key) && I.preventDefault();
        let H = St(I);
        C(bi(k.target, I), "keyboard", kt(k.target, St(I))), M(), I.key !== "Enter" && Rh(k.target) && kt(k.target, H) && !I[Xb] && (I[Xb] = !0, ts(k.target, I, !1)), k.isPressed = !1, (E = k.metaKeyEvents) === null || E === void 0 || E.delete(I.key);
      } else if (I.key === "Meta" && (!((j = k.metaKeyEvents) === null || j === void 0) && j.size)) {
        var L;
        let H = k.metaKeyEvents;
        k.metaKeyEvents = void 0;
        for (let z of H.values()) (L = k.target) === null || L === void 0 || L.dispatchEvent(new KeyboardEvent("keyup", z));
      }
    };
    if (typeof PointerEvent < "u") {
      F.onPointerDown = (E) => {
        if (E.button !== 0 || !kt(E.currentTarget, St(E.nativeEvent))) return;
        if (wU(E.nativeEvent)) {
          k.pointerType = "virtual";
          return;
        }
        k.pointerType = E.pointerType;
        let L = !0;
        if (!k.isPressed) {
          k.isPressed = !0, k.isOverTarget = !0, k.activePointerId = E.pointerId, k.target = E.currentTarget, p || qb(k.target), L = D(E, k.pointerType);
          let H = St(E.nativeEvent);
          "releasePointerCapture" in H && H.releasePointerCapture(E.pointerId), w(cn(E.currentTarget), "pointerup", I, !1), w(cn(E.currentTarget), "pointercancel", j, !1);
        }
        L && E.stopPropagation();
      }, F.onMouseDown = (E) => {
        if (kt(E.currentTarget, St(E.nativeEvent)) && E.button === 0) {
          if (d) {
            let L = Gb(E.target);
            L && k.disposables.push(L);
          }
          E.stopPropagation();
        }
      }, F.onPointerUp = (E) => {
        !kt(E.currentTarget, St(E.nativeEvent)) || k.pointerType === "virtual" || E.button === 0 && P(E, k.pointerType || E.pointerType);
      }, F.onPointerEnter = (E) => {
        E.pointerId === k.activePointerId && k.target && !k.isOverTarget && k.pointerType != null && (k.isOverTarget = !0, D(bi(k.target, E), k.pointerType));
      }, F.onPointerLeave = (E) => {
        E.pointerId === k.activePointerId && k.target && k.isOverTarget && k.pointerType != null && (k.isOverTarget = !1, C(bi(k.target, E), k.pointerType, !1), G(E));
      };
      let I = (E) => {
        if (E.pointerId === k.activePointerId && k.isPressed && E.button === 0 && k.target) {
          if (kt(k.target, St(E)) && k.pointerType != null) {
            let L = !1, H = setTimeout(() => {
              k.isPressed && k.target instanceof HTMLElement && (L ? S(E) : (Ui(k.target), k.target.click()));
            }, 80);
            w(E.currentTarget, "click", () => L = !0, !0), k.disposables.push(() => clearTimeout(H));
          } else S(E);
          k.isOverTarget = !1;
        }
      }, j = (E) => {
        S(E);
      };
      F.onDragStart = (E) => {
        kt(E.currentTarget, St(E.nativeEvent)) && S(E);
      };
    } else {
      F.onMouseDown = (E) => {
        if (E.button !== 0 || !kt(E.currentTarget, St(E.nativeEvent))) return;
        if (k.ignoreEmulatedMouseEvents) {
          E.stopPropagation();
          return;
        }
        if (k.isPressed = !0, k.isOverTarget = !0, k.target = E.currentTarget, k.pointerType = Qf(E.nativeEvent) ? "virtual" : "mouse", lk(() => D(E, k.pointerType)) && E.stopPropagation(), d) {
          let H = Gb(E.target);
          H && k.disposables.push(H);
        }
        w(cn(E.currentTarget), "mouseup", I, !1);
      }, F.onMouseEnter = (E) => {
        if (!kt(E.currentTarget, St(E.nativeEvent))) return;
        let L = !0;
        k.isPressed && !k.ignoreEmulatedMouseEvents && k.pointerType != null && (k.isOverTarget = !0, L = D(E, k.pointerType)), L && E.stopPropagation();
      }, F.onMouseLeave = (E) => {
        if (!kt(E.currentTarget, St(E.nativeEvent))) return;
        let L = !0;
        k.isPressed && !k.ignoreEmulatedMouseEvents && k.pointerType != null && (k.isOverTarget = !1, L = C(E, k.pointerType, !1), G(E)), L && E.stopPropagation();
      }, F.onMouseUp = (E) => {
        kt(E.currentTarget, St(E.nativeEvent)) && !k.ignoreEmulatedMouseEvents && E.button === 0 && P(E, k.pointerType || "mouse");
      };
      let I = (E) => {
        if (E.button === 0) {
          if (k.ignoreEmulatedMouseEvents) {
            k.ignoreEmulatedMouseEvents = !1;
            return;
          }
          k.target && k.target.contains(E.target) && k.pointerType != null || S(E), k.isOverTarget = !1;
        }
      };
      F.onTouchStart = (E) => {
        if (!kt(E.currentTarget, St(E.nativeEvent))) return;
        let L = RU(E.nativeEvent);
        if (!L) return;
        k.activePointerId = L.identifier, k.ignoreEmulatedMouseEvents = !0, k.isOverTarget = !0, k.isPressed = !0, k.target = E.currentTarget, k.pointerType = "touch", p || qb(k.target), D(ea(k.target, E), k.pointerType) && E.stopPropagation(), w(fa(E.currentTarget), "scroll", j, !0);
      }, F.onTouchMove = (E) => {
        if (!kt(E.currentTarget, St(E.nativeEvent))) return;
        if (!k.isPressed) {
          E.stopPropagation();
          return;
        }
        let L = Jb(E.nativeEvent, k.activePointerId), H = !0;
        L && Qb(L, E.currentTarget) ? !k.isOverTarget && k.pointerType != null && (k.isOverTarget = !0, H = D(ea(k.target, E), k.pointerType)) : k.isOverTarget && k.pointerType != null && (k.isOverTarget = !1, H = C(ea(k.target, E), k.pointerType, !1), G(ea(k.target, E))), H && E.stopPropagation();
      }, F.onTouchEnd = (E) => {
        if (!kt(E.currentTarget, St(E.nativeEvent))) return;
        if (!k.isPressed) {
          E.stopPropagation();
          return;
        }
        let L = Jb(E.nativeEvent, k.activePointerId), H = !0;
        L && Qb(L, E.currentTarget) && k.pointerType != null ? (P(ea(k.target, E), k.pointerType), H = C(ea(k.target, E), k.pointerType)) : k.isOverTarget && k.pointerType != null && (H = C(ea(k.target, E), k.pointerType, !1)), H && E.stopPropagation(), k.isPressed = !1, k.activePointerId = null, k.isOverTarget = !1, k.ignoreEmulatedMouseEvents = !0, k.target && !p && tf(k.target), M();
      }, F.onTouchCancel = (E) => {
        kt(E.currentTarget, St(E.nativeEvent)) && (E.stopPropagation(), k.isPressed && S(ea(k.target, E)));
      };
      let j = (E) => {
        k.isPressed && kt(St(E), k.target) && S({
          currentTarget: k.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      F.onDragStart = (E) => {
        kt(E.currentTarget, St(E.nativeEvent)) && S(E);
      };
    }
    return F;
  }, [
    w,
    u,
    d,
    M,
    p,
    S,
    G,
    C,
    D,
    P
  ]);
  return Ue(() => {
    let k = x.current;
    return () => {
      var F;
      p || tf((F = k.target) !== null && F !== void 0 ? F : void 0);
      for (let R of k.disposables) R();
      k.disposables = [];
    };
  }, [
    p
  ]), {
    isPressed: l || $,
    pressProps: Ha(v, Z)
  };
}
function Rh(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function nf(e, t) {
  const { key: n, code: r } = e, a = t, o = a.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(a instanceof fa(a).HTMLInputElement && !v$(a, n) || a instanceof fa(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((o === "link" || !o && Rh(a)) && n !== "Enter");
}
function RU(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Jb(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (a.identifier === t) return a;
  }
  return null;
}
function ea(e, t) {
  let n = 0, r = 0;
  return t.targetTouches && t.targetTouches.length === 1 && (n = t.targetTouches[0].clientX, r = t.targetTouches[0].clientY), {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: n,
    clientY: r
  };
}
function bi(e, t) {
  let n = t.clientX, r = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: n,
    clientY: r
  };
}
function jU(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function FU(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Qb(e, t) {
  let n = t.getBoundingClientRect(), r = jU(e);
  return FU(n, r);
}
function BU(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Rh(e);
}
function ex(e, t) {
  return e instanceof HTMLInputElement ? !v$(e, t) : BU(e);
}
const LU = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function v$(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : LU.has(e.type);
}
let ao = null, VU = /* @__PURE__ */ new Set(), Ho = /* @__PURE__ */ new Map(), Ya = !1, tp = !1;
function ec(e, t) {
  for (let n of VU) n(e, t);
}
function WU(e) {
  return !(e.metaKey || !Hi() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function bl(e) {
  Ya = !0, WU(e) && (ao = "keyboard", ec("keyboard", e));
}
function Yn(e) {
  ao = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ya = !0, ec("pointer", e));
}
function y$(e) {
  Qf(e) && (Ya = !0, ao = "virtual");
}
function b$(e) {
  e.target === window || e.target === document || yl || !e.isTrusted || (!Ya && !tp && (ao = "virtual", ec("virtual", e)), Ya = !1, tp = !1);
}
function x$() {
  yl || (Ya = !1, tp = !0);
}
function tx(e) {
  if (typeof window > "u" || Ho.get(fa(e))) return;
  const t = fa(e), n = cn(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ya = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", bl, !0), n.addEventListener("keyup", bl, !0), n.addEventListener("click", y$, !0), t.addEventListener("focus", b$, !0), t.addEventListener("blur", x$, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", Yn, !0), n.addEventListener("pointermove", Yn, !0), n.addEventListener("pointerup", Yn, !0)) : (n.addEventListener("mousedown", Yn, !0), n.addEventListener("mousemove", Yn, !0), n.addEventListener("mouseup", Yn, !0)), t.addEventListener("beforeunload", () => {
    w$(e);
  }, {
    once: !0
  }), Ho.set(t, {
    focus: r
  });
}
const w$ = (e, t) => {
  const n = fa(e), r = cn(e);
  t && r.removeEventListener("DOMContentLoaded", t), Ho.has(n) && (n.HTMLElement.prototype.focus = Ho.get(n).focus, r.removeEventListener("keydown", bl, !0), r.removeEventListener("keyup", bl, !0), r.removeEventListener("click", y$, !0), n.removeEventListener("focus", b$, !0), n.removeEventListener("blur", x$, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", Yn, !0), r.removeEventListener("pointermove", Yn, !0), r.removeEventListener("pointerup", Yn, !0)) : (r.removeEventListener("mousedown", Yn, !0), r.removeEventListener("mousemove", Yn, !0), r.removeEventListener("mouseup", Yn, !0)), Ho.delete(n));
};
function zU(e) {
  const t = cn(e);
  let n;
  return t.readyState !== "loading" ? tx(e) : (n = () => {
    tx(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => w$(e, n);
}
typeof document < "u" && zU();
function UU() {
  return ao;
}
function HU(e) {
  ao = e, ec(e, null);
}
function YU(e) {
  const t = cn(e), n = es(t);
  if (UU() === "virtual") {
    let r = n;
    c$(() => {
      es(t) === r && e.isConnected && Ui(e);
    });
  } else Ui(e);
}
function KU(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: a } = e, o = Se({
    isFocusWithin: !1
  }), { addGlobalListener: u, removeAllGlobalListeners: l } = Ih(), d = Be((m) => {
    m.currentTarget.contains(m.target) && o.current.isFocusWithin && !m.currentTarget.contains(m.relatedTarget) && (o.current.isFocusWithin = !1, l(), n && n(m), a && a(!1));
  }, [
    n,
    a,
    o,
    l
  ]), f = kU(d), p = Be((m) => {
    if (!m.currentTarget.contains(m.target)) return;
    const v = cn(m.target), $ = es(v);
    if (!o.current.isFocusWithin && $ === St(m.nativeEvent)) {
      r && r(m), a && a(!0), o.current.isFocusWithin = !0, f(m);
      let _ = m.currentTarget;
      u(v, "focus", (x) => {
        if (o.current.isFocusWithin && !kt(_, x.target)) {
          let w = new m$("blur", new v.defaultView.FocusEvent("blur", {
            relatedTarget: x.target
          }));
          w.target = _, w.currentTarget = _, d(w);
        }
      }, {
        capture: !0
      });
    }
  }, [
    r,
    a,
    f,
    u,
    d
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: p,
      onBlur: d
    }
  };
}
function $$(e, t) {
  return !e || !t ? !1 : t.some((n) => n.contains(e));
}
function Ao(e, t = !1) {
  if (e != null && !t) try {
    YU(e);
  } catch {
  }
  else if (e != null) try {
    e.focus();
  } catch {
  }
}
function Ci(e, t, n) {
  let r = t != null && t.tabbable ? CU : f$, a = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, o = cn(a), u = eU(o, e || o, NodeFilter.SHOW_ELEMENT, {
    acceptNode(l) {
      var d;
      return !(t == null || (d = t.from) === null || d === void 0) && d.contains(l) ? NodeFilter.FILTER_REJECT : r(l) && p$(l) && (!n || $$(l, n)) && (!(t != null && t.accept) || t.accept(l)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (u.currentNode = t.from), u;
}
function D$(e, t = {}) {
  return {
    focusNext(n = {}) {
      let r = e.current;
      if (!r) return null;
      let { from: a, tabbable: o = t.tabbable, wrap: u = t.wrap, accept: l = t.accept } = n, d = a || es(cn(r)), f = Ci(r, {
        tabbable: o,
        accept: l
      });
      r.contains(d) && (f.currentNode = d);
      let p = f.nextNode();
      return !p && u && (f.currentNode = r, p = f.nextNode()), p && Ao(p, !0), p;
    },
    focusPrevious(n = t) {
      let r = e.current;
      if (!r) return null;
      let { from: a, tabbable: o = t.tabbable, wrap: u = t.wrap, accept: l = t.accept } = n, d = a || es(cn(r)), f = Ci(r, {
        tabbable: o,
        accept: l
      });
      if (r.contains(d)) f.currentNode = d;
      else {
        let m = rf(f);
        return m && Ao(m, !0), m ?? null;
      }
      let p = f.previousNode();
      if (!p && u) {
        f.currentNode = r;
        let m = rf(f);
        if (!m)
          return null;
        p = m;
      }
      return p && Ao(p, !0), p ?? null;
    },
    focusFirst(n = t) {
      let r = e.current;
      if (!r) return null;
      let { tabbable: a = t.tabbable, accept: o = t.accept } = n, l = Ci(r, {
        tabbable: a,
        accept: o
      }).nextNode();
      return l && Ao(l, !0), l;
    },
    focusLast(n = t) {
      let r = e.current;
      if (!r) return null;
      let { tabbable: a = t.tabbable, accept: o = t.accept } = n, u = Ci(r, {
        tabbable: a,
        accept: o
      }), l = rf(u);
      return l && Ao(l, !0), l ?? null;
    }
  };
}
function rf(e) {
  let t, n;
  do
    n = e.lastChild(), n && (t = n);
  while (n);
  return t;
}
class jh {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, n, r) {
    let a = this.fastMap.get(n ?? null);
    if (!a) return;
    let o = new nx({
      scopeRef: t
    });
    a.addChild(o), o.parent = a, this.fastMap.set(t, o), r && (o.nodeToRestore = r);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null) return;
    let n = this.fastMap.get(t);
    if (!n) return;
    let r = n.parent;
    for (let o of this.traverse()) o !== n && n.nodeToRestore && o.nodeToRestore && n.scopeRef && n.scopeRef.current && $$(o.nodeToRestore, n.scopeRef.current) && (o.nodeToRestore = n.nodeToRestore);
    let a = n.children;
    r && (r.removeChild(n), a.size > 0 && a.forEach((o) => r && r.addChild(o))), this.fastMap.delete(n.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0) for (let n of t.children) yield* this.traverse(n);
  }
  clone() {
    var t;
    let n = new jh();
    var r;
    for (let a of this.traverse()) n.addTreeNode(a.scopeRef, (r = (t = a.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && r !== void 0 ? r : null, a.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new nx({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class nx {
  addChild(t) {
    this.children.add(t), t.parent = this;
  }
  removeChild(t) {
    this.children.delete(t), t.parent = void 0;
  }
  constructor(t) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = t.scopeRef;
  }
}
new jh();
const qU = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), GU = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function ZU(e) {
  if (Intl.Locale) {
    let n = new Intl.Locale(e).maximize(), r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r) return r.direction === "rtl";
    if (n.script) return qU.has(n.script);
  }
  let t = e.split("-")[0];
  return GU.has(t);
}
const XU = Symbol.for("react-aria.i18n.locale");
function E$() {
  let e = typeof window < "u" && window[XU] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: ZU(e) ? "rtl" : "ltr"
  };
}
let np = E$(), Bo = /* @__PURE__ */ new Set();
function rx() {
  np = E$();
  for (let e of Bo) e(np);
}
function JU() {
  let e = i$(), [t, n] = He(np);
  return Ue(() => (Bo.size === 0 && window.addEventListener("languagechange", rx), Bo.add(n), () => {
    Bo.delete(n), Bo.size === 0 && window.removeEventListener("languagechange", rx);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const QU = /* @__PURE__ */ Oe.createContext(null);
function io() {
  let e = JU();
  return At(QU) || e;
}
const eH = Symbol.for("react-aria.i18n.locale"), tH = Symbol.for("react-aria.i18n.strings");
let xi;
class Xa {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, n) {
    let a = this.getStringsForLocale(n)[t];
    if (!a) throw new Error(`Could not find intl message ${t} in ${n} locale`);
    return a;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let n = this.strings[t];
    return n || (n = nH(t, this.strings, this.defaultLocale), this.strings[t] = n), n;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let n = window[eH];
    if (xi === void 0) {
      let a = window[tH];
      if (!a) return null;
      xi = {};
      for (let o in a) xi[o] = new Xa({
        [n]: a[o]
      }, n);
    }
    let r = xi == null ? void 0 : xi[t];
    if (!r) throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return r;
  }
  constructor(t, n = "en-US") {
    this.strings = Object.fromEntries(Object.entries(t).filter(([, r]) => r)), this.defaultLocale = n;
  }
}
function nH(e, t, n = "en-US") {
  if (t[e]) return t[e];
  let r = rH(e);
  if (t[r]) return t[r];
  for (let a in t)
    if (a.startsWith(r + "-")) return t[a];
  return t[n];
}
function rH(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const ax = /* @__PURE__ */ new Map(), ix = /* @__PURE__ */ new Map();
class _$ {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, n) {
    let r = this.strings.getStringForLocale(t, this.locale);
    return typeof r == "function" ? r(n, this) : r;
  }
  plural(t, n, r = "cardinal") {
    let a = n["=" + t];
    if (a) return typeof a == "function" ? a() : a;
    let o = this.locale + ":" + r, u = ax.get(o);
    u || (u = new Intl.PluralRules(this.locale, {
      type: r
    }), ax.set(o, u));
    let l = u.select(t);
    return a = n[l] || n.other, typeof a == "function" ? a() : a;
  }
  number(t) {
    let n = ix.get(this.locale);
    return n || (n = new Intl.NumberFormat(this.locale), ix.set(this.locale, n)), n.format(t);
  }
  select(t, n) {
    let r = t[n] || t.other;
    return typeof r == "function" ? r() : r;
  }
  constructor(t, n) {
    this.locale = t, this.strings = n;
  }
}
const ox = /* @__PURE__ */ new WeakMap();
function aH(e) {
  let t = ox.get(e);
  return t || (t = new Xa(e), ox.set(e, t)), t;
}
function C$(e, t) {
  return t && Xa.getGlobalDictionaryForPackage(t) || aH(e);
}
function T$(e, t) {
  let { locale: n } = io(), r = C$(e, t);
  return Xe(() => new _$(n, r), [
    n,
    r
  ]);
}
function _u(e) {
  e = $U(e ?? {}, iH);
  let { locale: t } = io();
  return Xe(() => new Ei(t, e), [
    t,
    e
  ]);
}
function iH(e, t) {
  if (e === t) return !0;
  let n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let a of n)
    if (t[a] !== e[a]) return !1;
  return !0;
}
let af = /* @__PURE__ */ new Map(), rp = !1;
try {
  rp = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let xl = !1;
try {
  xl = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const S$ = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
class oH {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(t) {
    let n = "";
    if (!rp && this.options.signDisplay != null ? n = uH(this.numberFormatter, this.options.signDisplay, t) : n = this.numberFormatter.format(t), this.options.style === "unit" && !xl) {
      var r;
      let { unit: a, unitDisplay: o = "short", locale: u } = this.resolvedOptions();
      if (!a) return n;
      let l = (r = S$[a]) === null || r === void 0 ? void 0 : r[o];
      n += l[u] || l.default;
    }
    return n;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(t) {
    return this.numberFormatter.formatToParts(t);
  }
  /** Formats a number range as a string. */
  formatRange(t, n) {
    if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    return `${this.format(t)} – ${this.format(n)}`;
  }
  /** Formats a number range as an array of parts. */
  formatRangeToParts(t, n) {
    if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    let r = this.numberFormatter.formatToParts(t), a = this.numberFormatter.formatToParts(n);
    return [
      ...r.map((o) => ({
        ...o,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...a.map((o) => ({
        ...o,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.numberFormatter.resolvedOptions();
    return !rp && this.options.signDisplay != null && (t = {
      ...t,
      signDisplay: this.options.signDisplay
    }), !xl && this.options.style === "unit" && (t = {
      ...t,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    }), t;
  }
  constructor(t, n = {}) {
    this.numberFormatter = sH(t, n), this.options = n;
  }
}
function sH(e, t = {}) {
  let { numberingSystem: n } = t;
  if (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`), t.style === "unit" && !xl) {
    var r;
    let { unit: u, unitDisplay: l = "short" } = t;
    if (!u) throw new Error('unit option must be provided with style: "unit"');
    if (!(!((r = S$[u]) === null || r === void 0) && r[l])) throw new Error(`Unsupported unit ${u} with unitDisplay = ${l}`);
    t = {
      ...t,
      style: "decimal"
    };
  }
  let a = e + (t ? Object.entries(t).sort((u, l) => u[0] < l[0] ? -1 : 1).join() : "");
  if (af.has(a)) return af.get(a);
  let o = new Intl.NumberFormat(e, t);
  return af.set(a, o), o;
}
function uH(e, t, n) {
  if (t === "auto") return e.format(n);
  if (t === "never") return e.format(Math.abs(n));
  {
    let r = !1;
    if (t === "always" ? r = n > 0 || Object.is(n, 0) : t === "exceptZero" && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : r = n > 0), r) {
      let a = e.format(-n), o = e.format(n), u = a.replace(o, "").replace(/\u200e|\u061C/, "");
      return [
        ...u
      ].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), a.replace(o, "!!!").replace(u, "+").replace("!!!", o);
    } else return e.format(n);
  }
}
const lH = new RegExp("^.*\\(.*\\).*$"), cH = [
  "latn",
  "arab",
  "hanidec",
  "deva",
  "beng"
];
class P$ {
  /**
  * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
  */
  parse(t) {
    return of(this.locale, this.options, t).parse(t);
  }
  /**
  * Returns whether the given string could potentially be a valid number. This should be used to
  * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
  * of the minus/plus sign characters can be checked.
  */
  isValidPartialNumber(t, n, r) {
    return of(this.locale, this.options, t).isValidPartialNumber(t, n, r);
  }
  /**
  * Returns a numbering system for which the given string is valid in the current locale.
  * If no numbering system could be detected, the default numbering system for the current
  * locale is returned.
  */
  getNumberingSystem(t) {
    return of(this.locale, this.options, t).options.numberingSystem;
  }
  constructor(t, n = {}) {
    this.locale = t, this.options = n;
  }
}
const sx = /* @__PURE__ */ new Map();
function of(e, t, n) {
  let r = ux(e, t);
  if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
    for (let a of cH) if (a !== r.options.numberingSystem) {
      let o = ux(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + a, t);
      if (o.isValidPartialNumber(n)) return o;
    }
  }
  return r;
}
function ux(e, t) {
  let n = e + (t ? Object.entries(t).sort((a, o) => a[0] < o[0] ? -1 : 1).join() : ""), r = sx.get(n);
  return r || (r = new dH(e, t), sx.set(n, r)), r;
}
class dH {
  parse(t) {
    let n = this.sanitize(t);
    if (this.symbols.group && (n = Cu(n, this.symbols.group, "")), this.symbols.decimal && (n = n.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, "-")), n = n.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
      let u = n.indexOf("-");
      n = n.replace("-", "");
      let l = n.indexOf(".");
      l === -1 && (l = n.length), n = n.replace(".", ""), l - 2 === 0 ? n = `0.${n}` : l - 2 === -1 ? n = `0.0${n}` : l - 2 === -2 ? n = "0.00" : n = `${n.slice(0, l - 2)}.${n.slice(l - 2)}`, u > -1 && (n = `-${n}`);
    }
    let r = n ? +n : NaN;
    if (isNaN(r)) return NaN;
    if (this.options.style === "percent") {
      var a, o;
      let u = {
        ...this.options,
        style: "decimal",
        minimumFractionDigits: Math.min(((a = this.options.minimumFractionDigits) !== null && a !== void 0 ? a : 0) + 2, 20),
        maximumFractionDigits: Math.min(((o = this.options.maximumFractionDigits) !== null && o !== void 0 ? o : 0) + 2, 20)
      };
      return new P$(this.locale, u).parse(new oH(this.locale, u).format(r));
    }
    return this.options.currencySign === "accounting" && lH.test(t) && (r = -1 * r), r;
  }
  sanitize(t) {
    return t = t.replace(this.symbols.literals, ""), this.symbols.minusSign && (t = t.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (t = t.replace(",", this.symbols.decimal), t = t.replace("،", this.symbols.decimal)), this.symbols.group && (t = Cu(t, ".", this.symbols.group))), this.options.locale === "fr-FR" && (t = Cu(t, ".", " ")), t;
  }
  isValidPartialNumber(t, n = -1 / 0, r = 1 / 0) {
    return t = this.sanitize(t), this.symbols.minusSign && t.startsWith(this.symbols.minusSign) && n < 0 ? t = t.slice(this.symbols.minusSign.length) : this.symbols.plusSign && t.startsWith(this.symbols.plusSign) && r > 0 && (t = t.slice(this.symbols.plusSign.length)), this.symbols.group && t.startsWith(this.symbols.group) || this.symbols.decimal && t.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && (t = Cu(t, this.symbols.group, "")), t = t.replace(this.symbols.numeral, ""), this.symbols.decimal && (t = t.replace(this.symbols.decimal, "")), t.length === 0);
  }
  constructor(t, n = {}) {
    this.locale = t, this.formatter = new Intl.NumberFormat(t, n), this.options = this.formatter.resolvedOptions(), this.symbols = pH(t, this.formatter, this.options, n);
    var r, a;
    this.options.style === "percent" && (((r = this.options.minimumFractionDigits) !== null && r !== void 0 ? r : 0) > 18 || ((a = this.options.maximumFractionDigits) !== null && a !== void 0 ? a : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
}
const lx = /* @__PURE__ */ new Set([
  "decimal",
  "fraction",
  "integer",
  "minusSign",
  "plusSign",
  "group"
]), fH = [
  0,
  4,
  2,
  1,
  11,
  20,
  3,
  7,
  100,
  21,
  0.1,
  1.1
];
function pH(e, t, n, r) {
  var a, o, u, l;
  let d = new Intl.NumberFormat(e, {
    ...n,
    // Resets so we get the full range of symbols
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 21,
    roundingIncrement: 1,
    roundingPriority: "auto",
    roundingMode: "halfExpand"
  }), f = d.formatToParts(-10000.111), p = d.formatToParts(10000.111), m = fH.map((R) => d.formatToParts(R));
  var v;
  let $ = (v = (a = f.find((R) => R.type === "minusSign")) === null || a === void 0 ? void 0 : a.value) !== null && v !== void 0 ? v : "-", _ = (o = p.find((R) => R.type === "plusSign")) === null || o === void 0 ? void 0 : o.value;
  !_ && ((r == null ? void 0 : r.signDisplay) === "exceptZero" || (r == null ? void 0 : r.signDisplay) === "always") && (_ = "+");
  let w = (u = new Intl.NumberFormat(e, {
    ...n,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).formatToParts(1e-3).find((R) => R.type === "decimal")) === null || u === void 0 ? void 0 : u.value, M = (l = f.find((R) => R.type === "group")) === null || l === void 0 ? void 0 : l.value, D = f.filter((R) => !lx.has(R.type)).map((R) => cx(R.value)), C = m.flatMap((R) => R.filter((I) => !lx.has(I.type)).map((I) => cx(I.value))), P = [
    .../* @__PURE__ */ new Set([
      ...D,
      ...C
    ])
  ].sort((R, I) => I.length - R.length), S = P.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${P.join("|")}|[\\p{White_Space}]`, "gu"), G = [
    ...new Intl.NumberFormat(n.locale, {
      useGrouping: !1
    }).format(9876543210)
  ].reverse(), Z = new Map(G.map((R, I) => [
    R,
    I
  ])), k = new RegExp(`[${G.join("")}]`, "g");
  return {
    minusSign: $,
    plusSign: _,
    decimal: w,
    group: M,
    literals: S,
    numeral: k,
    index: (R) => String(Z.get(R))
  };
}
function Cu(e, t, n) {
  return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function cx(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
let sf = /* @__PURE__ */ new Map();
function hH(e) {
  let { locale: t } = io(), n = t + (e ? Object.entries(e).sort((a, o) => a[0] < o[0] ? -1 : 1).join() : "");
  if (sf.has(n)) return sf.get(n);
  let r = new Intl.Collator(t, e);
  return sf.set(n, r), r;
}
function mH(e) {
  let t = hH({
    usage: "search",
    ...e
  }), n = Be((o, u) => u.length === 0 ? !0 : (o = o.normalize("NFC"), u = u.normalize("NFC"), t.compare(o.slice(0, u.length), u) === 0), [
    t
  ]), r = Be((o, u) => u.length === 0 ? !0 : (o = o.normalize("NFC"), u = u.normalize("NFC"), t.compare(o.slice(-u.length), u) === 0), [
    t
  ]), a = Be((o, u) => {
    if (u.length === 0) return !0;
    o = o.normalize("NFC"), u = u.normalize("NFC");
    let l = 0, d = u.length;
    for (; l + d <= o.length; l++) {
      let f = o.slice(l, l + d);
      if (t.compare(u, f) === 0) return !0;
    }
    return !1;
  }, [
    t
  ]);
  return Xe(() => ({
    startsWith: n,
    endsWith: r,
    contains: a
  }), [
    n,
    r,
    a
  ]);
}
function gH(e, t, n) {
  let { direction: r } = io(), a = Xe(() => D$(t), [
    t
  ]), o = (d) => {
    if (d.currentTarget.contains(d.target) && (d.altKey && (d.key === "ArrowDown" || d.key === "ArrowUp") && "setOpen" in e && (d.preventDefault(), d.stopPropagation(), e.setOpen(!0)), !n))
      switch (d.key) {
        case "ArrowLeft":
          if (d.preventDefault(), d.stopPropagation(), r === "rtl") {
            if (t.current) {
              let f = d.target, p = dx(t.current, f.getBoundingClientRect().left, -1);
              p && p.focus();
            }
          } else a.focusPrevious();
          break;
        case "ArrowRight":
          if (d.preventDefault(), d.stopPropagation(), r === "rtl") {
            if (t.current) {
              let f = d.target, p = dx(t.current, f.getBoundingClientRect().left, 1);
              p && p.focus();
            }
          } else a.focusNext();
          break;
      }
  }, u = () => {
    var d;
    if (!t.current) return;
    let f = (d = window.event) === null || d === void 0 ? void 0 : d.target, p = Ci(t.current, {
      tabbable: !0
    });
    if (f && (p.currentNode = f, f = p.previousNode()), !f) {
      let m;
      do
        m = p.lastChild(), m && (f = m);
      while (m);
    }
    for (; f != null && f.hasAttribute("data-placeholder"); ) {
      let m = p.previousNode();
      if (m && m.hasAttribute("data-placeholder")) f = m;
      else break;
    }
    f && f.focus();
  }, { pressProps: l } = NU({
    preventFocusOnPress: !0,
    allowTextSelectionOnPress: !0,
    onPressStart(d) {
      d.pointerType === "mouse" && u();
    },
    onPress(d) {
      d.pointerType !== "mouse" && u();
    }
  });
  return Ha(l, {
    onKeyDown: o
  });
}
function dx(e, t, n) {
  let r = Ci(e, {
    tabbable: !0
  }), a = r.nextNode(), o = null, u = 1 / 0;
  for (; a; ) {
    let d = a.getBoundingClientRect().left - t, f = Math.abs(d);
    Math.sign(d) === n && f < u && (o = a, u = f), a = r.nextNode();
  }
  return o;
}
function vH(e) {
  let { id: t, label: n, "aria-labelledby": r, "aria-label": a, labelElementType: o = "label" } = e;
  t = Qo(t);
  let u = Qo(), l = {};
  n ? (r = r ? `${u} ${r}` : u, l = {
    id: u,
    htmlFor: o === "label" ? t : void 0
  }) : !r && !a && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let d = d$({
    id: t,
    "aria-label": a,
    "aria-labelledby": r
  });
  return {
    labelProps: l,
    fieldProps: d
  };
}
function yH(e) {
  let { description: t, errorMessage: n, isInvalid: r, validationState: a } = e, { labelProps: o, fieldProps: u } = vH(e), l = Hb([
    !!t,
    !!n,
    r,
    a
  ]), d = Hb([
    !!t,
    !!n,
    r,
    a
  ]);
  return u = Ha(u, {
    "aria-describedby": [
      l,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      d,
      e["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }), {
    labelProps: o,
    fieldProps: u,
    descriptionProps: {
      id: l
    },
    errorMessageProps: {
      id: d
    }
  };
}
function bH(e, t, n) {
  let { validationBehavior: r, focus: a } = e;
  Lr(() => {
    if (r === "native" && (n != null && n.current) && !n.current.disabled) {
      let d = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      n.current.setCustomValidity(d), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(wH(n.current));
    }
  });
  let o = un(() => {
    t.resetValidation();
  }), u = un((d) => {
    var f;
    t.displayValidation.isInvalid || t.commitValidation();
    let p = n == null || (f = n.current) === null || f === void 0 ? void 0 : f.form;
    if (!d.defaultPrevented && n && p && $H(p) === n.current) {
      var m;
      a ? a() : (m = n.current) === null || m === void 0 || m.focus(), HU("keyboard");
    }
    d.preventDefault();
  }), l = un(() => {
    t.commitValidation();
  });
  Ue(() => {
    let d = n == null ? void 0 : n.current;
    if (!d) return;
    let f = d.form;
    return d.addEventListener("invalid", u), d.addEventListener("change", l), f == null || f.addEventListener("reset", o), () => {
      d.removeEventListener("invalid", u), d.removeEventListener("change", l), f == null || f.removeEventListener("reset", o);
    };
  }, [
    n,
    u,
    l,
    o,
    r
  ]);
}
function xH(e) {
  let t = e.validity;
  return {
    badInput: t.badInput,
    customError: t.customError,
    patternMismatch: t.patternMismatch,
    rangeOverflow: t.rangeOverflow,
    rangeUnderflow: t.rangeUnderflow,
    stepMismatch: t.stepMismatch,
    tooLong: t.tooLong,
    tooShort: t.tooShort,
    typeMismatch: t.typeMismatch,
    valueMissing: t.valueMissing,
    valid: t.valid
  };
}
function wH(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: xH(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function $H(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let n = e.elements[t];
    if (!n.validity.valid) return n;
  }
  return null;
}
function DH(e) {
  return e && e.__esModule ? e.default : e;
}
const k$ = /* @__PURE__ */ new WeakMap(), uf = "__role_" + Date.now(), EH = "__focusManager_" + Date.now();
function O$(e, t, n) {
  var r;
  let { isInvalid: a, validationErrors: o, validationDetails: u } = t.displayValidation, { labelProps: l, fieldProps: d, descriptionProps: f, errorMessageProps: p } = yH({
    ...e,
    labelElementType: "span",
    isInvalid: a,
    errorMessage: e.errorMessage || o
  }), m = Se(null), { focusWithinProps: v } = KU({
    ...e,
    onFocusWithin(R) {
      var I;
      m.current = t.value, (I = e.onFocus) === null || I === void 0 || I.call(e, R);
    },
    onBlurWithin: (R) => {
      var I;
      t.confirmPlaceholder(), t.value !== m.current && t.commitValidation(), (I = e.onBlur) === null || I === void 0 || I.call(e, R);
    },
    onFocusWithinChange: e.onFocusChange
  }), $ = T$(DH(Oh), "@react-aria/datepicker"), _ = t.maxGranularity === "hour" ? "selectedTimeDescription" : "selectedDateDescription", x = t.maxGranularity === "hour" ? "time" : "date", w = t.value ? $.format(_, {
    [x]: t.formatValue({
      month: "long"
    })
  }) : "", M = yU(w), D = e[uf] === "presentation" ? d["aria-describedby"] : [
    M["aria-describedby"],
    d["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, C = e[EH], P = Xe(() => C || D$(n), [
    C,
    n
  ]), S = gH(t, n, e[uf] === "presentation");
  k$.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [
      l.id,
      e["aria-labelledby"]
    ].filter(Boolean).join(" ") || void 0,
    ariaDescribedBy: D,
    focusManager: P
  });
  let G = Se(e.autoFocus), Z;
  e[uf] === "presentation" ? Z = {
    role: "presentation"
  } : Z = Ha(d, {
    role: "group",
    "aria-disabled": e.isDisabled || void 0,
    "aria-describedby": D
  }), Ue(() => {
    G.current && P.focusFirst(), G.current = !1;
  }, [
    P
  ]), DU(e.inputRef, t.value, t.setValue), bH({
    ...e,
    focus() {
      P.focusFirst();
    }
  }, t, e.inputRef);
  let k = {
    type: "hidden",
    name: e.name,
    value: ((r = t.value) === null || r === void 0 ? void 0 : r.toString()) || "",
    disabled: e.isDisabled
  };
  e.validationBehavior === "native" && (k.type = "text", k.hidden = !0, k.required = e.isRequired, k.onChange = () => {
  });
  let F = oU(e);
  return {
    labelProps: {
      ...l,
      onClick: () => {
        P.focusFirst();
      }
    },
    fieldProps: Ha(F, Z, S, v, {
      onKeyDown(R) {
        e.onKeyDown && e.onKeyDown(R);
      },
      onKeyUp(R) {
        e.onKeyUp && e.onKeyUp(R);
      },
      style: {
        unicodeBidi: "isolate"
      }
    }),
    inputProps: k,
    descriptionProps: f,
    errorMessageProps: p,
    isInvalid: a,
    validationErrors: o,
    validationDetails: u
  };
}
const A$ = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valueMissing: !1,
  valid: !0
}, M$ = {
  ...A$,
  customError: !0,
  valid: !1
}, Mo = {
  isInvalid: !1,
  validationDetails: A$,
  validationErrors: []
}, _H = pa({}), fx = "__formValidationState" + Date.now();
function CH(e) {
  if (e[fx]) {
    let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: a, commitValidation: o } = e[fx];
    return {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: a,
      commitValidation: o
    };
  }
  return TH(e);
}
function TH(e) {
  let { isInvalid: t, validationState: n, name: r, value: a, builtinValidation: o, validate: u, validationBehavior: l = "aria" } = e;
  n && (t || (t = n === "invalid"));
  let d = t !== void 0 ? {
    isInvalid: t,
    validationErrors: [],
    validationDetails: M$
  } : null, f = Xe(() => {
    if (!u || a == null) return null;
    let R = SH(u, a);
    return px(R);
  }, [
    u,
    a
  ]);
  o != null && o.validationDetails.valid && (o = void 0);
  let p = At(_H), m = Xe(() => r ? Array.isArray(r) ? r.flatMap((R) => ap(p[R])) : ap(p[r]) : [], [
    p,
    r
  ]), [v, $] = He(p), [_, x] = He(!1);
  p !== v && ($(p), x(!1));
  let w = Xe(() => px(_ ? [] : m), [
    _,
    m
  ]), M = Se(Mo), [D, C] = He(Mo), P = Se(Mo), S = () => {
    if (!G) return;
    Z(!1);
    let R = f || o || M.current;
    lf(R, P.current) || (P.current = R, C(R));
  }, [G, Z] = He(!1);
  return Ue(S), {
    realtimeValidation: d || w || f || o || Mo,
    displayValidation: l === "native" ? d || w || D : d || w || f || o || D,
    updateValidation(R) {
      l === "aria" && !lf(D, R) ? C(R) : M.current = R;
    },
    resetValidation() {
      let R = Mo;
      lf(R, P.current) || (P.current = R, C(R)), l === "native" && Z(!1), x(!0);
    },
    commitValidation() {
      l === "native" && Z(!0), x(!0);
    }
  };
}
function ap(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function SH(e, t) {
  if (typeof e == "function") {
    let n = e(t);
    if (n && typeof n != "boolean") return ap(n);
  }
  return [];
}
function px(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: M$
  } : null;
}
function lf(e, t) {
  return e === t ? !0 : !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((n, r) => n === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([n, r]) => t.validationDetails[n] === r);
}
function PH(e) {
  return e && e.__esModule ? e.default : e;
}
function kH() {
  let { locale: e } = io(), t = C$(PH(Oh), "@react-aria/datepicker");
  return Xe(() => {
    try {
      return new Intl.DisplayNames(e, {
        type: "dateTimeField"
      });
    } catch {
      return new OH(e, t);
    }
  }, [
    e,
    t
  ]);
}
class OH {
  of(t) {
    return this.dictionary.getStringForLocale(t, this.locale);
  }
  constructor(t, n) {
    this.locale = t, this.dictionary = n;
  }
}
var I$ = {};
I$ = {
  Empty: "فارغ"
};
var N$ = {};
N$ = {
  Empty: "Изпразни"
};
var R$ = {};
R$ = {
  Empty: "Prázdné"
};
var j$ = {};
j$ = {
  Empty: "Tom"
};
var F$ = {};
F$ = {
  Empty: "Leer"
};
var B$ = {};
B$ = {
  Empty: "Άδειο"
};
var L$ = {};
L$ = {
  Empty: "Empty"
};
var V$ = {};
V$ = {
  Empty: "Vacío"
};
var W$ = {};
W$ = {
  Empty: "Tühjenda"
};
var z$ = {};
z$ = {
  Empty: "Tyhjä"
};
var U$ = {};
U$ = {
  Empty: "Vide"
};
var H$ = {};
H$ = {
  Empty: "ריק"
};
var Y$ = {};
Y$ = {
  Empty: "Prazno"
};
var K$ = {};
K$ = {
  Empty: "Üres"
};
var q$ = {};
q$ = {
  Empty: "Vuoto"
};
var G$ = {};
G$ = {
  Empty: "空"
};
var Z$ = {};
Z$ = {
  Empty: "비어 있음"
};
var X$ = {};
X$ = {
  Empty: "Tuščias"
};
var J$ = {};
J$ = {
  Empty: "Tukšs"
};
var Q$ = {};
Q$ = {
  Empty: "Tom"
};
var eD = {};
eD = {
  Empty: "Leeg"
};
var tD = {};
tD = {
  Empty: "Pusty"
};
var nD = {};
nD = {
  Empty: "Vazio"
};
var rD = {};
rD = {
  Empty: "Vazio"
};
var aD = {};
aD = {
  Empty: "Gol"
};
var iD = {};
iD = {
  Empty: "Не заполнено"
};
var oD = {};
oD = {
  Empty: "Prázdne"
};
var sD = {};
sD = {
  Empty: "Prazen"
};
var uD = {};
uD = {
  Empty: "Prazno"
};
var lD = {};
lD = {
  Empty: "Tomt"
};
var cD = {};
cD = {
  Empty: "Boş"
};
var dD = {};
dD = {
  Empty: "Пусто"
};
var fD = {};
fD = {
  Empty: "空"
};
var pD = {};
pD = {
  Empty: "空白"
};
var hD = {};
hD = {
  "ar-AE": I$,
  "bg-BG": N$,
  "cs-CZ": R$,
  "da-DK": j$,
  "de-DE": F$,
  "el-GR": B$,
  "en-US": L$,
  "es-ES": V$,
  "et-EE": W$,
  "fi-FI": z$,
  "fr-FR": U$,
  "he-IL": H$,
  "hr-HR": Y$,
  "hu-HU": K$,
  "it-IT": q$,
  "ja-JP": G$,
  "ko-KR": Z$,
  "lt-LT": X$,
  "lv-LV": J$,
  "nb-NO": Q$,
  "nl-NL": eD,
  "pl-PL": tD,
  "pt-BR": nD,
  "pt-PT": rD,
  "ro-RO": aD,
  "ru-RU": iD,
  "sk-SK": oD,
  "sl-SI": sD,
  "sr-SP": uD,
  "sv-SE": lD,
  "tr-TR": cD,
  "uk-UA": dD,
  "zh-CN": fD,
  "zh-TW": pD
};
const mD = 7e3;
let Wn = null;
function AH(e, t = "assertive", n = mD) {
  Wn ? Wn.announce(e, t, n) : (Wn = new IH(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? Wn.announce(e, t, n) : setTimeout(() => {
    Wn != null && Wn.isAttached() && (Wn == null || Wn.announce(e, t, n));
  }, 100));
}
function MH(e) {
  Wn && Wn.clear(e);
}
class IH {
  isAttached() {
    var t;
    return (t = this.node) === null || t === void 0 ? void 0 : t.isConnected;
  }
  createLog(t) {
    let n = document.createElement("div");
    return n.setAttribute("role", "log"), n.setAttribute("aria-live", t), n.setAttribute("aria-relevant", "additions"), n;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(t, n = "assertive", r = mD) {
    var a, o;
    if (!this.node) return;
    let u = document.createElement("div");
    typeof t == "object" ? (u.setAttribute("role", "img"), u.setAttribute("aria-labelledby", t["aria-labelledby"])) : u.textContent = t, n === "assertive" ? (a = this.assertiveLog) === null || a === void 0 || a.appendChild(u) : (o = this.politeLog) === null || o === void 0 || o.appendChild(u), t !== "" && setTimeout(() => {
      u.remove();
    }, r);
  }
  clear(t) {
    this.node && ((!t || t === "assertive") && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!t || t === "polite") && this.politeLog && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = null, this.assertiveLog = null, this.politeLog = null, typeof document < "u" && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
  }
}
function NH(e) {
  return e && e.__esModule ? e.default : e;
}
function RH(e) {
  const t = Se(void 0);
  let { value: n, textValue: r, minValue: a, maxValue: o, isDisabled: u, isReadOnly: l, isRequired: d, onIncrement: f, onIncrementPage: p, onDecrement: m, onDecrementPage: v, onDecrementToMin: $, onIncrementToMax: _ } = e;
  const x = T$(NH(hD), "@react-aria/spinbutton"), w = () => clearTimeout(t.current);
  Ue(() => () => w(), []);
  let M = (I) => {
    if (!(I.ctrlKey || I.metaKey || I.shiftKey || I.altKey || l))
      switch (I.key) {
        case "PageUp":
          if (p) {
            I.preventDefault(), p == null || p();
            break;
          }
        case "ArrowUp":
        case "Up":
          f && (I.preventDefault(), f == null || f());
          break;
        case "PageDown":
          if (v) {
            I.preventDefault(), v == null || v();
            break;
          }
        case "ArrowDown":
        case "Down":
          m && (I.preventDefault(), m == null || m());
          break;
        case "Home":
          $ && (I.preventDefault(), $ == null || $());
          break;
        case "End":
          _ && (I.preventDefault(), _ == null || _());
          break;
      }
  }, D = Se(!1), C = () => {
    D.current = !0;
  }, P = () => {
    D.current = !1;
  }, S = r === "" ? x.format("Empty") : (r || `${n}`).replace("-", "−");
  Ue(() => {
    D.current && (MH("assertive"), AH(S, "assertive"));
  }, [
    S
  ]);
  const G = un((I) => {
    w(), f == null || f(), t.current = window.setTimeout(() => {
      (o === void 0 || isNaN(o) || n === void 0 || isNaN(n) || n < o) && G(60);
    }, I);
  }), Z = un((I) => {
    w(), m == null || m(), t.current = window.setTimeout(() => {
      (a === void 0 || isNaN(a) || n === void 0 || isNaN(n) || n > a) && Z(60);
    }, I);
  });
  let k = (I) => {
    I.preventDefault();
  }, { addGlobalListener: F, removeAllGlobalListeners: R } = Ih();
  return {
    spinButtonProps: {
      role: "spinbutton",
      "aria-valuenow": n !== void 0 && !isNaN(n) ? n : void 0,
      "aria-valuetext": S,
      "aria-valuemin": a,
      "aria-valuemax": o,
      "aria-disabled": u || void 0,
      "aria-readonly": l || void 0,
      "aria-required": d || void 0,
      onKeyDown: M,
      onFocus: C,
      onBlur: P
    },
    incrementButtonProps: {
      onPressStart: () => {
        G(400), F(window, "contextmenu", k);
      },
      onPressEnd: () => {
        w(), R();
      },
      onFocus: C,
      onBlur: P
    },
    decrementButtonProps: {
      onPressStart: () => {
        Z(400), F(window, "contextmenu", k);
      },
      onPressEnd: () => {
        w(), R();
      },
      onFocus: C,
      onBlur: P
    }
  };
}
function jH(e, t, n) {
  let r = Se(""), { locale: a, direction: o } = io(), u = kH(), { ariaLabel: l, ariaLabelledBy: d, ariaDescribedBy: f, focusManager: p } = k$.get(t), m = e.isPlaceholder ? "" : e.text, v = Xe(() => t.dateFormatter.resolvedOptions(), [
    t.dateFormatter
  ]), $ = _u({
    month: "long",
    timeZone: v.timeZone
  }), _ = _u({
    hour: "numeric",
    hour12: v.hour12,
    timeZone: v.timeZone
  });
  if (e.type === "month" && !e.isPlaceholder) {
    let A = $.format(t.dateValue);
    m = A !== m ? `${m} – ${A}` : A;
  } else e.type === "hour" && !e.isPlaceholder && (m = _.format(t.dateValue));
  let { spinButtonProps: x } = RH({
    // The ARIA spec says aria-valuenow is optional if there's no value, but aXe seems to require it.
    // This doesn't seem to have any negative effects with real AT since we also use aria-valuetext.
    // https://github.com/dequelabs/axe-core/issues/3505
    value: e.value,
    textValue: m,
    minValue: e.minValue,
    maxValue: e.maxValue,
    isDisabled: t.isDisabled,
    isReadOnly: t.isReadOnly || !e.isEditable,
    isRequired: t.isRequired,
    onIncrement: () => {
      r.current = "", t.increment(e.type);
    },
    onDecrement: () => {
      r.current = "", t.decrement(e.type);
    },
    onIncrementPage: () => {
      r.current = "", t.incrementPage(e.type);
    },
    onDecrementPage: () => {
      r.current = "", t.decrementPage(e.type);
    },
    onIncrementToMax: () => {
      r.current = "", e.maxValue !== void 0 && t.setSegment(e.type, e.maxValue);
    },
    onDecrementToMin: () => {
      r.current = "", e.minValue !== void 0 && t.setSegment(e.type, e.minValue);
    }
  }), w = Xe(() => new P$(a, {
    maximumFractionDigits: 0
  }), [
    a
  ]), M = () => {
    if (e.text === e.placeholder && p.focusPrevious(), w.isValidPartialNumber(e.text) && !t.isReadOnly && !e.isPlaceholder) {
      let A = e.text.slice(0, -1), W = w.parse(A);
      A = W === 0 ? "" : A, A.length === 0 || W === 0 ? t.clearSegment(e.type) : t.setSegment(e.type, W), r.current = A;
    } else e.type === "dayPeriod" && t.clearSegment(e.type);
  }, D = (A) => {
    if (A.key === "a" && (Hi() ? A.metaKey : A.ctrlKey) && A.preventDefault(), !(A.ctrlKey || A.metaKey || A.shiftKey || A.altKey))
      switch (A.key) {
        case "Backspace":
        case "Delete":
          A.preventDefault(), A.stopPropagation(), M();
          break;
      }
  }, { startsWith: C } = mH({
    sensitivity: "base"
  }), P = _u({
    hour: "numeric",
    hour12: !0
  }), S = Xe(() => {
    let A = /* @__PURE__ */ new Date();
    return A.setHours(0), P.formatToParts(A).find((W) => W.type === "dayPeriod").value;
  }, [
    P
  ]), G = Xe(() => {
    let A = /* @__PURE__ */ new Date();
    return A.setHours(12), P.formatToParts(A).find((W) => W.type === "dayPeriod").value;
  }, [
    P
  ]), Z = _u({
    year: "numeric",
    era: "narrow",
    timeZone: "UTC"
  }), k = Xe(() => {
    if (e.type !== "era") return [];
    let A = ln(new Lt(1, 1, 1), t.calendar), W = t.calendar.getEras().map((ue) => {
      let ce = A.set({
        year: 1,
        month: 1,
        day: 1,
        era: ue
      }).toDate("UTC"), ge = Z.formatToParts(ce).find(($e) => $e.type === "era").value;
      return {
        era: ue,
        formatted: ge
      };
    }), re = FH(W.map((ue) => ue.formatted));
    if (re) for (let ue of W) ue.formatted = ue.formatted.slice(re);
    return W;
  }, [
    Z,
    t.calendar,
    e.type
  ]), F = (A) => {
    if (t.isDisabled || t.isReadOnly) return;
    let W = r.current + A;
    switch (e.type) {
      case "dayPeriod":
        if (C(S, A)) t.setSegment("dayPeriod", 0);
        else if (C(G, A)) t.setSegment("dayPeriod", 12);
        else break;
        p.focusNext();
        break;
      case "era": {
        let re = k.find((ue) => C(ue.formatted, A));
        re && (t.setSegment("era", re.era), p.focusNext());
        break;
      }
      case "day":
      case "hour":
      case "minute":
      case "second":
      case "month":
      case "year": {
        if (!w.isValidPartialNumber(W)) return;
        let re = w.parse(W), ue = re, ce = e.minValue === 0;
        if (e.type === "hour" && t.dateFormatter.resolvedOptions().hour12) {
          switch (t.dateFormatter.resolvedOptions().hourCycle) {
            case "h11":
              re > 11 && (ue = w.parse(A));
              break;
            case "h12":
              ce = !1, re > 12 && (ue = w.parse(A));
              break;
          }
          e.value !== void 0 && e.value >= 12 && re > 1 && (re += 12);
        } else e.maxValue !== void 0 && re > e.maxValue && (ue = w.parse(A));
        if (isNaN(re)) return;
        let ye = ue !== 0 || ce;
        ye && t.setSegment(e.type, ue), e.maxValue !== void 0 && (+(re + "0") > e.maxValue || W.length >= String(e.maxValue).length) ? (r.current = "", ye && p.focusNext()) : r.current = W;
        break;
      }
    }
  }, R = () => {
    r.current = "", n.current && xU(n.current, {
      containingElement: mU(n.current)
    });
    let A = window.getSelection();
    A == null || A.collapse(n.current);
  }, I = Se(typeof document < "u" ? document : null);
  ef(I, "selectionchange", () => {
    var A;
    let W = window.getSelection();
    W != null && W.anchorNode && (!((A = n.current) === null || A === void 0) && A.contains(W == null ? void 0 : W.anchorNode)) && W.collapse(n.current);
  });
  let j = Se("");
  ef(n, "beforeinput", (A) => {
    if (n.current)
      switch (A.preventDefault(), A.inputType) {
        case "deleteContentBackward":
        case "deleteContentForward":
          w.isValidPartialNumber(e.text) && !t.isReadOnly && M();
          break;
        case "insertCompositionText":
          j.current = n.current.textContent, n.current.textContent = n.current.textContent;
          break;
        default:
          A.data != null && F(A.data);
          break;
      }
  }), ef(n, "input", (A) => {
    let { inputType: W, data: re } = A;
    switch (W) {
      case "insertCompositionText":
        n.current && (n.current.textContent = j.current), re != null && (C(S, re) || C(G, re)) && F(re);
        break;
    }
  }), Lr(() => {
    let A = n.current;
    return () => {
      document.activeElement === A && (p.focusPrevious() || p.focusNext());
    };
  }, [
    n,
    p
  ]);
  let E = Mh() || e.type === "timeZoneName" ? {
    role: "textbox",
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuetext": null,
    "aria-valuenow": null
  } : {}, L = Xe(() => t.segments.find((A) => A.isEditable), [
    t.segments
  ]);
  e !== L && !t.isInvalid && (f = void 0);
  let H = Qo(), z = !t.isDisabled && !t.isReadOnly && e.isEditable, N = e.type === "literal" ? "" : u.of(e.type), B = d$({
    "aria-label": `${N}${l ? `, ${l}` : ""}${d ? ", " : ""}`,
    "aria-labelledby": d
  });
  if (e.type === "literal") return {
    segmentProps: {
      "aria-hidden": !0
    }
  };
  let J = {
    caretColor: "transparent"
  };
  if (o === "rtl") {
    J.unicodeBidi = "embed";
    let A = v[e.type];
    (A === "numeric" || A === "2-digit") && (J.direction = "ltr");
  }
  return {
    segmentProps: Ha(x, B, {
      id: H,
      ...E,
      "aria-invalid": t.isInvalid ? "true" : void 0,
      "aria-describedby": f,
      "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
      "data-placeholder": e.isPlaceholder || void 0,
      contentEditable: z,
      suppressContentEditableWarning: z,
      spellCheck: z ? "false" : void 0,
      autoCorrect: z ? "off" : void 0,
      // Capitalization was changed in React 17...
      [parseInt(Oe.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: z ? "next" : void 0,
      inputMode: t.isDisabled || e.type === "dayPeriod" || e.type === "era" || !z ? void 0 : "numeric",
      tabIndex: t.isDisabled ? void 0 : 0,
      onKeyDown: D,
      onFocus: R,
      style: J,
      // Prevent pointer events from reaching useDatePickerGroup, and allow native browser behavior to focus the segment.
      onPointerDown(A) {
        A.stopPropagation();
      },
      onMouseDown(A) {
        A.stopPropagation();
      }
    })
  };
}
function FH(e) {
  e.sort();
  let t = e[0], n = e[e.length - 1];
  for (let r = 0; r < t.length; r++)
    if (t[r] !== n[r]) return r;
  return 0;
}
var gD = {};
gD = {
  rangeOverflow: (e) => `يجب أن تكون القيمة ${e.maxValue} أو قبل ذلك.`,
  rangeReversed: "تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",
  rangeUnderflow: (e) => `يجب أن تكون القيمة ${e.minValue} أو بعد ذلك.`,
  unavailableDate: "البيانات المحددة غير متاحة."
};
var vD = {};
vD = {
  rangeOverflow: (e) => `Стойността трябва да е ${e.maxValue} или по-ранна.`,
  rangeReversed: "Началната дата трябва да е преди крайната.",
  rangeUnderflow: (e) => `Стойността трябва да е ${e.minValue} или по-късно.`,
  unavailableDate: "Избраната дата не е налична."
};
var yD = {};
yD = {
  rangeOverflow: (e) => `Hodnota musí být ${e.maxValue} nebo dřívější.`,
  rangeReversed: "Datum zahájení musí předcházet datu ukončení.",
  rangeUnderflow: (e) => `Hodnota musí být ${e.minValue} nebo pozdější.`,
  unavailableDate: "Vybrané datum není k dispozici."
};
var bD = {};
bD = {
  rangeOverflow: (e) => `Værdien skal være ${e.maxValue} eller tidligere.`,
  rangeReversed: "Startdatoen skal være før slutdatoen.",
  rangeUnderflow: (e) => `Værdien skal være ${e.minValue} eller nyere.`,
  unavailableDate: "Den valgte dato er ikke tilgængelig."
};
var xD = {};
xD = {
  rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder früher sein.`,
  rangeReversed: "Das Anfangsdatum muss vor dem Enddatum liegen.",
  rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder später sein.`,
  unavailableDate: "Das ausgewählte Datum ist nicht verfügbar."
};
var wD = {};
wD = {
  rangeOverflow: (e) => `Η τιμή πρέπει να είναι ${e.maxValue} ή παλαιότερη.`,
  rangeReversed: "Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",
  rangeUnderflow: (e) => `Η τιμή πρέπει να είναι ${e.minValue} ή μεταγενέστερη.`,
  unavailableDate: "Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη."
};
var $D = {};
$D = {
  rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
  rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
  rangeReversed: "Start date must be before end date.",
  unavailableDate: "Selected date unavailable."
};
var DD = {};
DD = {
  rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
  rangeReversed: "La fecha de inicio debe ser anterior a la fecha de finalización.",
  rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
  unavailableDate: "Fecha seleccionada no disponible."
};
var ED = {};
ED = {
  rangeOverflow: (e) => `Väärtus peab olema ${e.maxValue} või varasem.`,
  rangeReversed: "Alguskuupäev peab olema enne lõppkuupäeva.",
  rangeUnderflow: (e) => `Väärtus peab olema ${e.minValue} või hilisem.`,
  unavailableDate: "Valitud kuupäev pole saadaval."
};
var _D = {};
_D = {
  rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sitä aikaisempi.`,
  rangeReversed: "Aloituspäivän on oltava ennen lopetuspäivää.",
  rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sitä myöhäisempi.`,
  unavailableDate: "Valittu päivämäärä ei ole käytettävissä."
};
var CD = {};
CD = {
  rangeOverflow: (e) => `La valeur doit être ${e.maxValue} ou antérieure.`,
  rangeReversed: "La date de début doit être antérieure à la date de fin.",
  rangeUnderflow: (e) => `La valeur doit être ${e.minValue} ou ultérieure.`,
  unavailableDate: "La date sélectionnée n’est pas disponible."
};
var TD = {};
TD = {
  rangeOverflow: (e) => `הערך חייב להיות ${e.maxValue} או מוקדם יותר.`,
  rangeReversed: "תאריך ההתחלה חייב להיות לפני תאריך הסיום.",
  rangeUnderflow: (e) => `הערך חייב להיות ${e.minValue} או מאוחר יותר.`,
  unavailableDate: "התאריך הנבחר אינו זמין."
};
var SD = {};
SD = {
  rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
  rangeReversed: "Datum početka mora biti prije datuma završetka.",
  rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
  unavailableDate: "Odabrani datum nije dostupan."
};
var PD = {};
PD = {
  rangeOverflow: (e) => `Az értéknek ${e.maxValue} vagy korábbinak kell lennie.`,
  rangeReversed: "A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.",
  rangeUnderflow: (e) => `Az értéknek ${e.minValue} vagy későbbinek kell lennie.`,
  unavailableDate: "A kiválasztott dátum nem érhető el."
};
var kD = {};
kD = {
  rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
  rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
  rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
  unavailableDate: "Data selezionata non disponibile."
};
var OD = {};
OD = {
  rangeOverflow: (e) => `値は ${e.maxValue} 以下にする必要があります。`,
  rangeReversed: "開始日は終了日より前にする必要があります。",
  rangeUnderflow: (e) => `値は ${e.minValue} 以上にする必要があります。`,
  unavailableDate: "選択した日付は使用できません。"
};
var AD = {};
AD = {
  rangeOverflow: (e) => `값은 ${e.maxValue} 이전이어야 합니다.`,
  rangeReversed: "시작일은 종료일 이전이어야 합니다.",
  rangeUnderflow: (e) => `값은 ${e.minValue} 이상이어야 합니다.`,
  unavailableDate: "선택한 날짜를 사용할 수 없습니다."
};
var MD = {};
MD = {
  rangeOverflow: (e) => `Reikšmė turi būti ${e.maxValue} arba ankstesnė.`,
  rangeReversed: "Pradžios data turi būti ankstesnė nei pabaigos data.",
  rangeUnderflow: (e) => `Reikšmė turi būti ${e.minValue} arba naujesnė.`,
  unavailableDate: "Pasirinkta data nepasiekiama."
};
var ID = {};
ID = {
  rangeOverflow: (e) => `Vērtībai ir jābūt ${e.maxValue} vai agrākai.`,
  rangeReversed: "Sākuma datumam ir jābūt pirms beigu datuma.",
  rangeUnderflow: (e) => `Vērtībai ir jābūt ${e.minValue} vai vēlākai.`,
  unavailableDate: "Atlasītais datums nav pieejams."
};
var ND = {};
ND = {
  rangeOverflow: (e) => `Verdien må være ${e.maxValue} eller tidligere.`,
  rangeReversed: "Startdatoen må være før sluttdatoen.",
  rangeUnderflow: (e) => `Verdien må være ${e.minValue} eller senere.`,
  unavailableDate: "Valgt dato utilgjengelig."
};
var RD = {};
RD = {
  rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
  rangeReversed: "De startdatum moet voor de einddatum liggen.",
  rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
  unavailableDate: "Geselecteerde datum niet beschikbaar."
};
var jD = {};
jD = {
  rangeOverflow: (e) => `Wartość musi mieć wartość ${e.maxValue} lub wcześniejszą.`,
  rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
  rangeUnderflow: (e) => `Wartość musi mieć wartość ${e.minValue} lub późniejszą.`,
  unavailableDate: "Wybrana data jest niedostępna."
};
var FD = {};
FD = {
  rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
  rangeReversed: "A data inicial deve ser anterior à data final.",
  rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
  unavailableDate: "Data selecionada indisponível."
};
var BD = {};
BD = {
  rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
  rangeReversed: "A data de início deve ser anterior à data de fim.",
  rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
  unavailableDate: "Data selecionada indisponível."
};
var LD = {};
LD = {
  rangeOverflow: (e) => `Valoarea trebuie să fie ${e.maxValue} sau anterioară.`,
  rangeReversed: "Data de început trebuie să fie anterioară datei de sfârșit.",
  rangeUnderflow: (e) => `Valoarea trebuie să fie ${e.minValue} sau ulterioară.`,
  unavailableDate: "Data selectată nu este disponibilă."
};
var VD = {};
VD = {
  rangeOverflow: (e) => `Значение должно быть не позже ${e.maxValue}.`,
  rangeReversed: "Дата начала должна предшествовать дате окончания.",
  rangeUnderflow: (e) => `Значение должно быть не раньше ${e.minValue}.`,
  unavailableDate: "Выбранная дата недоступна."
};
var WD = {};
WD = {
  rangeOverflow: (e) => `Hodnota musí byť ${e.maxValue} alebo skoršia.`,
  rangeReversed: "Dátum začiatku musí byť skorší ako dátum konca.",
  rangeUnderflow: (e) => `Hodnota musí byť ${e.minValue} alebo neskoršia.`,
  unavailableDate: "Vybratý dátum je nedostupný."
};
var zD = {};
zD = {
  rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starejša.`,
  rangeReversed: "Začetni datum mora biti pred končnim datumom.",
  rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novejša.`,
  unavailableDate: "Izbrani datum ni na voljo."
};
var UD = {};
UD = {
  rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
  rangeReversed: "Datum početka mora biti pre datuma završetka.",
  rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
  unavailableDate: "Izabrani datum nije dostupan."
};
var HD = {};
HD = {
  rangeOverflow: (e) => `Värdet måste vara ${e.maxValue} eller tidigare.`,
  rangeReversed: "Startdatumet måste vara före slutdatumet.",
  rangeUnderflow: (e) => `Värdet måste vara ${e.minValue} eller senare.`,
  unavailableDate: "Det valda datumet är inte tillgängligt."
};
var YD = {};
YD = {
  rangeOverflow: (e) => `Değer, ${e.maxValue} veya öncesi olmalıdır.`,
  rangeReversed: "Başlangıç tarihi bitiş tarihinden önce olmalıdır.",
  rangeUnderflow: (e) => `Değer, ${e.minValue} veya sonrası olmalıdır.`,
  unavailableDate: "Seçilen tarih kullanılamıyor."
};
var KD = {};
KD = {
  rangeOverflow: (e) => `Значення має бути не пізніше ${e.maxValue}.`,
  rangeReversed: "Дата початку має передувати даті завершення.",
  rangeUnderflow: (e) => `Значення має бути не раніше ${e.minValue}.`,
  unavailableDate: "Вибрана дата недоступна."
};
var qD = {};
qD = {
  rangeOverflow: (e) => `值必须是 ${e.maxValue} 或更早日期。`,
  rangeReversed: "开始日期必须早于结束日期。",
  rangeUnderflow: (e) => `值必须是 ${e.minValue} 或更晚日期。`,
  unavailableDate: "所选日期不可用。"
};
var GD = {};
GD = {
  rangeOverflow: (e) => `值必須是 ${e.maxValue} 或更早。`,
  rangeReversed: "開始日期必須在結束日期之前。",
  rangeUnderflow: (e) => `值必須是 ${e.minValue} 或更晚。`,
  unavailableDate: "所選日期無法使用。"
};
var ZD = {};
ZD = {
  "ar-AE": gD,
  "bg-BG": vD,
  "cs-CZ": yD,
  "da-DK": bD,
  "de-DE": xD,
  "el-GR": wD,
  "en-US": $D,
  "es-ES": DD,
  "et-EE": ED,
  "fi-FI": _D,
  "fr-FR": CD,
  "he-IL": TD,
  "hr-HR": SD,
  "hu-HU": PD,
  "it-IT": kD,
  "ja-JP": OD,
  "ko-KR": AD,
  "lt-LT": MD,
  "lv-LV": ID,
  "nb-NO": ND,
  "nl-NL": RD,
  "pl-PL": jD,
  "pt-BR": FD,
  "pt-PT": BD,
  "ro-RO": LD,
  "ru-RU": VD,
  "sk-SK": WD,
  "sl-SI": zD,
  "sr-SP": UD,
  "sv-SE": HD,
  "tr-TR": YD,
  "uk-UA": KD,
  "zh-CN": qD,
  "zh-TW": GD
};
function BH(e) {
  return e && e.__esModule ? e.default : e;
}
const LH = new Xa(BH(ZD));
function VH() {
  return typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
}
function WH(e, t, n, r, a) {
  let o = e != null && n != null && e.compare(n) > 0, u = e != null && t != null && e.compare(t) < 0, l = e != null && (r == null ? void 0 : r(e)) || !1, d = o || u || l, f = [];
  if (d) {
    let p = VH(), m = Xa.getGlobalDictionaryForPackage("@react-stately/datepicker") || LH, v = new _$(p, m), $ = new Ei(p, zu({}, a)), _ = $.resolvedOptions().timeZone;
    u && t != null && f.push(v.format("rangeUnderflow", {
      minValue: $.format(t.toDate(_))
    })), o && n != null && f.push(v.format("rangeOverflow", {
      maxValue: $.format(n.toDate(_))
    })), l && f.push(v.format("unavailableDate"));
  }
  return {
    isInvalid: d,
    validationErrors: f,
    validationDetails: {
      badInput: l,
      customError: !1,
      patternMismatch: !1,
      rangeOverflow: o,
      rangeUnderflow: u,
      stepMismatch: !1,
      tooLong: !1,
      tooShort: !1,
      typeMismatch: !1,
      valueMissing: !1,
      valid: !d
    }
  };
}
const zH = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}, UH = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};
function zu(e, t) {
  e = {
    ...t.shouldForceLeadingZeros ? UH : zH,
    ...e
  };
  let r = t.granularity || "minute", a = Object.keys(e);
  var o;
  let u = a.indexOf((o = t.maxGranularity) !== null && o !== void 0 ? o : "year");
  u < 0 && (u = 0);
  let l = a.indexOf(r);
  if (l < 0 && (l = 2), u > l) throw new Error("maxGranularity must be greater than granularity");
  let d = a.slice(u, l + 1).reduce((p, m) => (p[m] = e[m], p), {});
  return t.hourCycle != null && (d.hour12 = t.hourCycle === 12), d.timeZone = t.timeZone || "UTC", (r === "hour" || r === "minute" || r === "second") && t.timeZone && !t.hideTimeZone && (d.timeZoneName = "short"), t.showEra && u === 0 && (d.era = "short"), d;
}
function XD(e, t) {
  if (e === null) return null;
  if (e)
    return ln(e, t);
}
function Io(e, t, n, r) {
  if (e) return XD(e, n);
  let a = ln(zW(r ?? ms()).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), n);
  return t === "year" || t === "month" || t === "day" ? GW(a) : r ? a : za(a);
}
function HH(e, t) {
  let n = e && "timeZone" in e ? e.timeZone : void 0, r = e && "minute" in e ? "minute" : "day";
  if (e && t && !(t in e)) throw new Error("Invalid granularity " + t + " for value " + e.toString());
  let [a, o] = He([
    r,
    n
  ]);
  e && (a[0] !== r || a[1] !== n) && o([
    r,
    n
  ]), t || (t = e ? r : a[0]);
  let u = e ? n : a[1];
  return [
    t,
    u
  ];
}
const YH = new Xa({
  ach: {
    year: "mwaka",
    month: "dwe",
    day: "nino"
  },
  af: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  am: {
    year: "ዓዓዓዓ",
    month: "ሚሜ",
    day: "ቀቀ"
  },
  an: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  ar: {
    year: "سنة",
    month: "شهر",
    day: "يوم"
  },
  ast: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  az: {
    year: "iiii",
    month: "aa",
    day: "gg"
  },
  be: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  bg: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  bn: {
    year: "yyyy",
    month: "মিমি",
    day: "dd"
  },
  br: {
    year: "bbbb",
    month: "mm",
    day: "dd"
  },
  bs: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  ca: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  cak: {
    year: "jjjj",
    month: "ii",
    day: "q'q'"
  },
  ckb: {
    year: "ساڵ",
    month: "مانگ",
    day: "ڕۆژ"
  },
  cs: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  cy: {
    year: "bbbb",
    month: "mm",
    day: "dd"
  },
  da: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  de: {
    year: "jjjj",
    month: "mm",
    day: "tt"
  },
  dsb: {
    year: "llll",
    month: "mm",
    day: "źź"
  },
  el: {
    year: "εεεε",
    month: "μμ",
    day: "ηη"
  },
  en: {
    year: "yyyy",
    month: "mm",
    day: "dd"
  },
  eo: {
    year: "jjjj",
    month: "mm",
    day: "tt"
  },
  es: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  et: {
    year: "aaaa",
    month: "kk",
    day: "pp"
  },
  eu: {
    year: "uuuu",
    month: "hh",
    day: "ee"
  },
  fa: {
    year: "سال",
    month: "ماه",
    day: "روز"
  },
  ff: {
    year: "hhhh",
    month: "ll",
    day: "ññ"
  },
  fi: {
    year: "vvvv",
    month: "kk",
    day: "pp"
  },
  fr: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  fy: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  ga: {
    year: "bbbb",
    month: "mm",
    day: "ll"
  },
  gd: {
    year: "bbbb",
    month: "mm",
    day: "ll"
  },
  gl: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  he: {
    year: "שנה",
    month: "חודש",
    day: "יום"
  },
  hr: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  hsb: {
    year: "llll",
    month: "mm",
    day: "dd"
  },
  hu: {
    year: "éééé",
    month: "hh",
    day: "nn"
  },
  ia: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  id: {
    year: "tttt",
    month: "bb",
    day: "hh"
  },
  it: {
    year: "aaaa",
    month: "mm",
    day: "gg"
  },
  ja: {
    year: "年",
    month: "月",
    day: "日"
  },
  ka: {
    year: "წწწწ",
    month: "თთ",
    day: "რრ"
  },
  kk: {
    year: "жжжж",
    month: "аа",
    day: "кк"
  },
  kn: {
    year: "ವವವವ",
    month: "ಮಿಮೀ",
    day: "ದಿದಿ"
  },
  ko: {
    year: "연도",
    month: "월",
    day: "일"
  },
  lb: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  lo: {
    year: "ປປປປ",
    month: "ດດ",
    day: "ວວ"
  },
  lt: {
    year: "mmmm",
    month: "mm",
    day: "dd"
  },
  lv: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  meh: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  ml: {
    year: "വർഷം",
    month: "മാസം",
    day: "തീയതി"
  },
  ms: {
    year: "tttt",
    month: "mm",
    day: "hh"
  },
  nl: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  nn: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  no: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  oc: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  pl: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  pt: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  rm: {
    year: "oooo",
    month: "mm",
    day: "dd"
  },
  ro: {
    year: "aaaa",
    month: "ll",
    day: "zz"
  },
  ru: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  sc: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  scn: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  sk: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  sl: {
    year: "llll",
    month: "mm",
    day: "dd"
  },
  sr: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  sv: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  szl: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  tg: {
    year: "сссс",
    month: "мм",
    day: "рр"
  },
  th: {
    year: "ปปปป",
    month: "ดด",
    day: "วว"
  },
  tr: {
    year: "yyyy",
    month: "aa",
    day: "gg"
  },
  uk: {
    year: "рррр",
    month: "мм",
    day: "дд"
  },
  "zh-CN": {
    year: "年",
    month: "月",
    day: "日"
  },
  "zh-TW": {
    year: "年",
    month: "月",
    day: "日"
  }
}, "en");
function KH(e, t, n) {
  return e === "era" || e === "dayPeriod" ? t : e === "year" || e === "month" || e === "day" ? YH.getStringForLocale(e, n) : "––";
}
const Uu = {
  year: !0,
  month: !0,
  day: !0,
  hour: !0,
  minute: !0,
  second: !0,
  dayPeriod: !0,
  era: !0
}, hx = {
  year: 5,
  month: 2,
  day: 7,
  hour: 2,
  minute: 15,
  second: 15
}, qH = {
  dayperiod: "dayPeriod"
};
function JD(e) {
  let { locale: t, createCalendar: n, hideTimeZone: r, isDisabled: a = !1, isReadOnly: o = !1, isRequired: u = !1, minValue: l, maxValue: d, isDateUnavailable: f } = e, p = e.value || e.defaultValue || e.placeholderValue || null, [m, v] = HH(p, e.granularity), $ = v || "UTC";
  if (p && !(m in p)) throw new Error("Invalid granularity " + m + " for value " + p.toString());
  let _ = Xe(() => new Ei(t), [
    t
  ]), x = Xe(() => n(_.resolvedOptions().calendar), [
    n,
    _
  ]);
  var w;
  let [M, D] = TU(e.value, (w = e.defaultValue) !== null && w !== void 0 ? w : null, e.onChange), C = Xe(() => {
    var oe;
    return (oe = XD(M, x)) !== null && oe !== void 0 ? oe : null;
  }, [
    M,
    x
  ]), [P, S] = He(() => Io(e.placeholderValue, m, x, v)), G = C || P, Z = x.identifier === "gregory" && G.era === "BC", k = Xe(() => {
    var oe;
    return {
      granularity: m,
      maxGranularity: (oe = e.maxGranularity) !== null && oe !== void 0 ? oe : "year",
      timeZone: v,
      hideTimeZone: r,
      hourCycle: e.hourCycle,
      showEra: Z,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros
    };
  }, [
    e.maxGranularity,
    m,
    e.hourCycle,
    e.shouldForceLeadingZeros,
    v,
    r,
    Z
  ]), F = Xe(() => zu({}, k), [
    k
  ]), R = Xe(() => new Ei(t, F), [
    t,
    F
  ]), I = Xe(() => R.resolvedOptions(), [
    R
  ]), j = Xe(() => R.formatToParts(/* @__PURE__ */ new Date()).filter((oe) => Uu[oe.type]).reduce((oe, xe) => (oe[xe.type] = !0, oe), {}), [
    R
  ]), [E, L] = He(() => e.value || e.defaultValue ? {
    ...j
  } : {}), H = Se(null), z = Se(x.identifier);
  Ue(() => {
    x.identifier !== z.current && (z.current = x.identifier, S((oe) => Object.keys(E).length > 0 ? ln(oe, x) : Io(e.placeholderValue, m, x, v)));
  }, [
    x,
    m,
    E,
    v,
    e.placeholderValue
  ]), M && Object.keys(E).length < Object.keys(j).length && (E = {
    ...j
  }, L(E)), M == null && Object.keys(E).length === Object.keys(j).length && (E = {}, L(E), S(Io(e.placeholderValue, m, x, v)));
  let N = C && Object.keys(E).length >= Object.keys(j).length ? C : P, B = (oe) => {
    if (e.isDisabled || e.isReadOnly) return;
    let xe = Object.keys(E), be = Object.keys(j);
    oe == null ? (D(null), S(Io(e.placeholderValue, m, x, v)), L({})) : xe.length >= be.length || xe.length === be.length - 1 && j.dayPeriod && !E.dayPeriod && H.current !== "dayPeriod" ? (oe = ln(oe, (p == null ? void 0 : p.calendar) || new qn()), D(oe)) : S(oe), H.current = null;
  }, J = Xe(() => N.toDate($), [
    N,
    $
  ]), A = Xe(() => GH(J, E, R, I, N, x, t, m), [
    J,
    E,
    R,
    I,
    N,
    x,
    t,
    m
  ]);
  j.era && E.year && !E.era ? (E.era = !0, L({
    ...E
  })) : !j.era && E.era && (delete E.era, L({
    ...E
  }));
  let W = (oe) => {
    E[oe] = !0, oe === "year" && j.era && (E.era = !0), L({
      ...E
    });
  }, re = (oe, xe) => {
    if (E[oe])
      B(ZH(N, oe, xe, I));
    else {
      W(oe);
      let be = Object.keys(E), Ce = Object.keys(j);
      (be.length >= Ce.length || be.length === Ce.length - 1 && j.dayPeriod && !E.dayPeriod) && B(N);
    }
  }, ue = Xe(() => WH(M, l, d, f, k), [
    M,
    l,
    d,
    f,
    k
  ]), ce = CH({
    ...e,
    value: M,
    builtinValidation: ue
  }), ye = ce.displayValidation.isInvalid, ge = e.validationState || (ye ? "invalid" : null);
  var $e;
  return {
    ...ce,
    value: C,
    dateValue: J,
    calendar: x,
    setValue: B,
    segments: A,
    dateFormatter: R,
    validationState: ge,
    isInvalid: ye,
    granularity: m,
    maxGranularity: ($e = e.maxGranularity) !== null && $e !== void 0 ? $e : "year",
    isDisabled: a,
    isReadOnly: o,
    isRequired: u,
    increment(oe) {
      re(oe, 1);
    },
    decrement(oe) {
      re(oe, -1);
    },
    incrementPage(oe) {
      re(oe, hx[oe] || 1);
    },
    decrementPage(oe) {
      re(oe, -(hx[oe] || 1));
    },
    setSegment(oe, xe) {
      W(oe), B(XH(N, oe, xe, I));
    },
    confirmPlaceholder() {
      if (e.isDisabled || e.isReadOnly) return;
      let oe = Object.keys(E), xe = Object.keys(j);
      oe.length === xe.length - 1 && j.dayPeriod && !E.dayPeriod && (E = {
        ...j
      }, L(E), B(N.copy()));
    },
    clearSegment(oe) {
      delete E[oe], H.current = oe, L({
        ...E
      });
      let xe = Io(e.placeholderValue, m, x, v), be = N;
      if (oe === "dayPeriod" && "hour" in N && "hour" in xe) {
        let Ce = N.hour >= 12, pe = xe.hour >= 12;
        Ce && !pe ? be = N.set({
          hour: N.hour - 12
        }) : !Ce && pe && (be = N.set({
          hour: N.hour + 12
        }));
      } else oe === "hour" && "hour" in N && N.hour >= 12 && E.dayPeriod ? be = N.set({
        hour: xe.hour + 12
      }) : oe in N && (be = N.set({
        [oe]: xe[oe]
      }));
      D(null), B(be);
    },
    formatValue(oe) {
      if (!C) return "";
      let xe = zu(oe, k);
      return new Ei(t, xe).format(J);
    },
    getDateFormatter(oe, xe) {
      let be = {
        ...k,
        ...xe
      }, Ce = zu({}, be);
      return new Ei(oe, Ce);
    }
  };
}
function GH(e, t, n, r, a, o, u, l) {
  let d = [
    "hour",
    "minute",
    "second"
  ], f = n.formatToParts(e), p = [];
  for (let m of f) {
    let v = Uu[m.type];
    m.type === "era" && o.getEras().length === 1 && (v = !1);
    let $ = Uu[m.type] && !t[m.type], _ = Uu[m.type] ? KH(m.type, m.value, u) : null, x = {
      type: qH[m.type] || m.type,
      text: $ ? _ : m.value,
      ...Tu(a, m.type, r),
      isPlaceholder: $,
      placeholder: _,
      isEditable: v
    };
    m.type === "hour" ? (p.push({
      type: "literal",
      text: "⁦",
      ...Tu(a, "literal", r),
      isPlaceholder: !1,
      placeholder: "",
      isEditable: !1
    }), p.push(x), m.type === l && p.push({
      type: "literal",
      text: "⁩",
      ...Tu(a, "literal", r),
      isPlaceholder: !1,
      placeholder: "",
      isEditable: !1
    })) : d.includes(m.type) && m.type === l ? (p.push(x), p.push({
      type: "literal",
      text: "⁩",
      ...Tu(a, "literal", r),
      isPlaceholder: !1,
      placeholder: "",
      isEditable: !1
    })) : p.push(x);
  }
  return p;
}
function Tu(e, t, n) {
  switch (t) {
    case "era": {
      let r = e.calendar.getEras();
      return {
        value: r.indexOf(e.era),
        minValue: 0,
        maxValue: r.length - 1
      };
    }
    case "year":
      return {
        value: e.year,
        minValue: 1,
        maxValue: e.calendar.getYearsInEra(e)
      };
    case "month":
      return {
        value: e.month,
        minValue: HW(e),
        maxValue: e.calendar.getMonthsInYear(e)
      };
    case "day":
      return {
        value: e.day,
        minValue: YW(e),
        maxValue: e.calendar.getDaysInMonth(e)
      };
  }
  if ("hour" in e) switch (t) {
    case "dayPeriod":
      return {
        value: e.hour >= 12 ? 12 : 0,
        minValue: 0,
        maxValue: 12
      };
    case "hour":
      if (n.hour12) {
        let r = e.hour >= 12;
        return {
          value: e.hour,
          minValue: r ? 12 : 0,
          maxValue: r ? 23 : 11
        };
      }
      return {
        value: e.hour,
        minValue: 0,
        maxValue: 23
      };
    case "minute":
      return {
        value: e.minute,
        minValue: 0,
        maxValue: 59
      };
    case "second":
      return {
        value: e.second,
        minValue: 0,
        maxValue: 59
      };
  }
  return {};
}
function ZH(e, t, n, r) {
  switch (t) {
    case "era":
    case "year":
    case "month":
    case "day":
      return e.cycle(t, n, {
        round: t === "year"
      });
  }
  if ("hour" in e) switch (t) {
    case "dayPeriod": {
      let a = e.hour, o = a >= 12;
      return e.set({
        hour: o ? a - 12 : a + 12
      });
    }
    case "hour":
    case "minute":
    case "second":
      return e.cycle(t, n, {
        round: t !== "hour",
        hourCycle: r.hour12 ? 12 : 24
      });
  }
  throw new Error("Unknown segment: " + t);
}
function XH(e, t, n, r) {
  switch (t) {
    case "day":
    case "month":
    case "year":
    case "era":
      return e.set({
        [t]: n
      });
  }
  if ("hour" in e && typeof n == "number") switch (t) {
    case "dayPeriod": {
      let a = e.hour, o = a >= 12;
      return n >= 12 === o ? e : e.set({
        hour: o ? a - 12 : a + 12
      });
    }
    case "hour":
      if (r.hour12) {
        let o = e.hour >= 12;
        !o && n === 12 && (n = 0), o && n < 12 && (n += 12);
      }
    case "minute":
    case "second":
      return e.set({
        [t]: n
      });
  }
  throw new Error("Unknown segment: " + t);
}
const JH = (e) => e instanceof Date ? e : Qw(e), mx = (e) => {
  var r;
  if ((e == null ? void 0 : e.toString()) === "Invalid Date" || e === "") return "";
  const t = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 6e4, n = new Date(new Date(e).getTime() - t).toISOString().slice(0, -1);
  return ((r = n == null ? void 0 : n.split("T")) == null ? void 0 : r[0]) || "";
}, QD = ({ segment: e, state: t, isPreviousEmpty: n }) => {
  let r = te.useRef(null), { segmentProps: a } = jH(e, t, r);
  const o = /* @__PURE__ */ new Date();
  let u = e.text;
  return e.type == "day" && (u = (e.isPlaceholder ? o.getDate().toString() : e.text).padStart(2, "0")), e.type == "month" && (u = (e.isPlaceholder ? (o.getMonth() + 1).toString() : e.text).padStart(2, "0")), e.type == "year" && (u = (e.isPlaceholder ? o.getFullYear().toString() : e.text).padStart(4, "0")), /* @__PURE__ */ y.jsx(
    "span",
    {
      ...a,
      style: {
        ...a.style,
        minWidth: e.maxValue != null ? String(e.maxValue).length + "ch" : void 0
      },
      ref: r,
      className: Ae(
        "select-none text-right tabular-nums outline-none focus:bg-theme-100",
        e.isPlaceholder || e.type === "literal" && n ? "text-neutral-300" : ""
      ),
      children: u
    }
  );
}, QH = ({
  ref: e,
  controls: t,
  className: n,
  calendarProps: r,
  placeholder: a,
  emptyButtonLabel: o,
  searchPlaceholder: u,
  hideClear: l,
  disabled: d,
  required: f,
  locale: p = "de",
  ...m
}) => {
  const v = Se(null), $ = Se(null), _ = Se(null), [x, w] = He(!1), M = (j) => {
    d || (w(j), j || (D || (R.setValue(null), Z(/* @__PURE__ */ new Date())), setTimeout(() => {
      var E;
      return (E = v.current) == null ? void 0 : E.focus();
    }, 0)));
  }, [D, C] = tn("", m.value, m.onChange), P = (j) => {
    var E;
    en(v.current, ""), R.setValue(null), Z(/* @__PURE__ */ new Date()), j.preventDefault(), j.stopPropagation(), (E = v == null ? void 0 : v.current) == null || E.focus();
  }, S = D && JH(D) || void 0, [G, Z] = He(S || /* @__PURE__ */ new Date());
  Ue(() => {
    S && Z(S);
  }, [D]);
  const k = (j) => {
    var E;
    v.current && (en(v.current, j ? mx(j) : ""), w(!1)), (E = v.current) == null || E.focus();
  }, F = {
    "aria-label": "date",
    isDisabled: d,
    isRequired: f,
    onFocus: () => {
      d || M(!0);
    },
    onChange: (j) => {
      d || v.current && en(v.current, j ? mx(j.toDate(ms())) : "");
    },
    value: D ? sz(D) : null
  };
  let R = JD({
    ...F,
    locale: p,
    createCalendar: $4
  }), { fieldProps: I } = O$(F, R, $);
  return /* @__PURE__ */ y.jsx("div", { className: "relative", children: /* @__PURE__ */ y.jsxs(Kn, { open: x, onOpenChange: M, modal: !1, children: [
    /* @__PURE__ */ y.jsx(Kn.Trigger, { asChild: !0, children: /* @__PURE__ */ y.jsxs(ke, { disabled: d, className: n, children: [
      /* @__PURE__ */ y.jsx(ke.Content, { asChild: !0, children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ...I,
          ref: $,
          className: "select-none px-2 py-1.5 flex-1 min-w-0 bg-transparent placeholder:text-neutral-400 tabular-nums",
          children: R.segments.map((j, E) => {
            const L = R.segments[E - 1];
            return /* @__PURE__ */ y.jsx(
              QD,
              {
                segment: j,
                state: R,
                isPreviousEmpty: !L || L.isPlaceholder
              },
              E
            );
          })
        }
      ) }),
      /* @__PURE__ */ y.jsxs(ke.Controls, { children: [
        D && !l ? /* @__PURE__ */ y.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: P, children: /* @__PURE__ */ y.jsx(qa, {}) }) : /* @__PURE__ */ y.jsx(ke.ControlButton, { className: "pointer-events-none", children: /* @__PURE__ */ y.jsx(
          n0,
          {
            className: Ae(
              "text-neutral-400 transition-colors",
              !d && "group-hover:text-neutral-700"
            )
          }
        ) }),
        t
      ] }),
      /* @__PURE__ */ y.jsx(ke.Native, { children: /* @__PURE__ */ y.jsx(
        "input",
        {
          ref: dn(e, v),
          type: "date",
          ...m,
          value: D,
          onChange: C,
          tabIndex: -1,
          onFocus: () => {
            var j;
            return (j = $.current) == null ? void 0 : j.focus();
          },
          disabled: d,
          required: f
        }
      ) })
    ] }) }),
    /* @__PURE__ */ y.jsx(
      Kn.Content,
      {
        className: "w-auto p-4 min-w-min flex flex-col gap-4",
        align: "start",
        ref: _,
        onEscapeKeyDown: (j) => {
          j.stopPropagation();
        },
        onOpenAutoFocus: (j) => {
          j.preventDefault();
        },
        onCloseAutoFocus: (j) => {
          j.preventDefault();
        },
        onFocusOutside: (j) => {
          j.preventDefault();
        },
        children: /* @__PURE__ */ y.jsx(
          _w,
          {
            className: "p-0",
            mode: "single",
            month: G,
            onMonthChange: (j) => Z(j),
            selected: S,
            onSelect: k,
            fixedWeeks: !0,
            showOutsideDays: !0,
            ...r
          }
        )
      }
    )
  ] }) });
}, zK = (e) => /* @__PURE__ */ y.jsx(yr, { widget: QH, ...e }), eY = /^-?\d*[.,]?\d*$/, tY = /^-?\d*$/, eE = ({
  className: e,
  inputClassName: t,
  hideClear: n = !1,
  controls: r,
  widgetRef: a,
  ref: o,
  decimalPlaces: u = 2,
  decimalSeparator: l = ".",
  min: d,
  max: f,
  ...p
}) => {
  const m = Se(null), v = Se(null), [$, _] = tn("", p.value, p.onChange), x = $ != null ? $ == null ? void 0 : $.toString() : "", w = (P) => {
    if (P === "" || P === void 0 || P === null)
      return "";
    let S = P.replace(",", ".").replace(".", l);
    S.slice(-1) === l && (S = S.slice(0, -1)), d != null && parseFloat(S) < parseFloat(d.toString()) && (S = d.toString()), f != null && parseFloat(S) > parseFloat(f.toString()) && (S = f.toString());
    const [G, Z = ""] = S.split("."), k = Z.padEnd(u, "0").slice(0, u);
    return u > 0 ? `${G}${l}${k}` : G;
  };
  Ue(() => {
    const P = w(x);
    m.current && P !== x && en(m.current, P);
  }, [x]);
  const M = () => {
    var P;
    en(v.current, ""), (P = v.current) == null || P.focus();
  }, D = (P) => {
    var Z;
    P.preventDefault();
    const S = P.target.value;
    if ((u > 0 ? eY : tY).test(S)) {
      const k = S.replace(",", ".").replace(".", l);
      if ((((Z = S.split(l)[1]) == null ? void 0 : Z.length) || 0) > u || u === 0 && S.slice(-1) === l)
        return;
      m.current && en(m.current, k);
    } else {
      const k = P.target.selectionStart || 0;
      setTimeout(() => {
        var F;
        (F = v.current) == null || F.setSelectionRange(k - 1, k - 1);
      }, 0);
    }
  }, C = (P) => {
    var G;
    const S = w(x);
    m.current && S !== x && en(m.current, S), (G = p.onBlur) == null || G.call(p, P);
  };
  return /* @__PURE__ */ y.jsxs(ke, { className: e, readOnly: p.readOnly, disabled: p.disabled, ref: a, children: [
    /* @__PURE__ */ y.jsx(ke.Content, { children: /* @__PURE__ */ y.jsx(
      "input",
      {
        ref: v,
        className: Ae(
          "px-2 py-1.5 flex-1 min-w-0 bg-transparent placeholder:text-neutral-400 tabular-nums",
          t
        ),
        ...p,
        onBlur: C,
        value: x,
        onChange: D
      }
    ) }),
    /* @__PURE__ */ y.jsxs(ke.Controls, { children: [
      r,
      $ && !n && /* @__PURE__ */ y.jsx(ke.ControlButton, { onClick: M, children: /* @__PURE__ */ y.jsx(qa, {}) })
    ] }),
    /* @__PURE__ */ y.jsx(ke.Native, { children: /* @__PURE__ */ y.jsx(
      "input",
      {
        ref: dn(o, m),
        value: x,
        onChange: _,
        tabIndex: -1,
        onFocus: () => {
          var P;
          return (P = v.current) == null ? void 0 : P.focus();
        }
      }
    ) })
  ] });
}, Ba = (e) => /* @__PURE__ */ y.jsx(eE, { ...e, decimalPlaces: 0 }), nY = ({
  ref: e,
  className: t,
  inputClassName: n,
  disabled: r,
  readOnly: a,
  required: o,
  name: u,
  hideSeconds: l,
  ...d
}) => {
  const f = Oe.useRef(null), p = Oe.useRef(null), m = Oe.useRef(null), v = Oe.useRef(null), [$, _] = tn("", d.value, d.onChange), [x, w] = He("00"), [M, D] = He("00"), [C, P] = He("00"), [S, G] = He(!1);
  Ue(() => {
    if ($ && !S) {
      const [E, L, H] = $.toString().split(":");
      w(E || "00"), D(L || "00"), P(H || "00");
    }
  }, [$, S]);
  const Z = (E, L) => {
    let H = "";
    const z = l ? "00" : E == "seconds" ? L : C;
    return E === "hours" && L && M && z ? H = `${L.padStart(2, "0")}:${M.padStart(2, "0")}:${z.padStart(2, "0")}` : E === "minutes" && x && L && z ? H = `${x.padStart(2, "0")}:${L.padStart(2, "0")}:${z.padStart(2, "0")}` : E === "seconds" && x && M && L && (H = `${x.padStart(2, "0")}:${M.padStart(2, "0")}:${z.padStart(2, "0")}`), H;
  }, k = (E) => {
    G(!0), E.target.select();
  }, F = (E, L, H) => (z) => {
    var W, re;
    const N = z.target.value;
    if (!/^\d*$/.test(N) || E === "hours" && N.length > 2 || E === "minutes" && N.length > 2 || E === "seconds" && N.length > 2) return;
    H(N);
    const B = E === "hours" && N.length === 2 && parseInt(N) <= 23 && parseInt(N) >= 0, J = E === "minutes" && N.length === 2 && parseInt(N) <= 59 && parseInt(N) >= 0, A = E === "seconds" && N.length === 2 && parseInt(N) <= 59 && parseInt(N) >= 0;
    if (E === "hours" && B ? (W = m.current) == null || W.focus() : E === "minutes" && J && !l && ((re = v.current) == null || re.focus()), B || J || A) {
      const ue = Z(E, N);
      en(f.current, ue || "");
    }
  }, R = (E, L, H) => (z) => {
    var N, B, J, A, W, re;
    if (z.key === "Backspace") {
      if (L !== "")
        return;
      E === "minutes" ? (z.preventDefault(), (N = p.current) == null || N.focus()) : E === "seconds" && (z.preventDefault(), (B = m.current) == null || B.focus());
    } else z.key === "ArrowLeft" ? E === "minutes" ? (z.preventDefault(), (J = p.current) == null || J.focus()) : E === "seconds" && (z.preventDefault(), (A = m.current) == null || A.focus()) : z.key === "ArrowRight" && (E === "hours" ? (z.preventDefault(), (W = m.current) == null || W.focus()) : E === "minutes" && !l && (z.preventDefault(), (re = v.current) == null || re.focus()));
  }, I = (E, L, H) => (z) => {
    var J, A;
    const N = z.target.value, B = z.relatedTarget === p.current || z.relatedTarget === m.current || z.relatedTarget === v.current;
    if (N.length > 0 && N.length < 2) {
      H(N.padStart(2, "0"));
      const W = Z(E, N.padStart(2, "0"));
      en(f.current, W || "");
    }
    B || (((J = f.current) == null ? void 0 : J.value) === "" && (w("00"), D("00"), P("00")), G(!1), (A = f.current) == null || A.blur());
  }, j = (E, L, H) => ({
    value: L,
    onChange: F(E, L, H),
    onKeyDown: R(E, L),
    onBlur: I(E, L, H),
    onFocus: k,
    readOnly: a,
    required: o
  });
  return /* @__PURE__ */ y.jsxs("div", { className: Ae("flex gap-2 items-center relative min-w-0", t), children: [
    /* @__PURE__ */ y.jsx(
      Ba,
      {
        ref: p,
        className: Ae("flex-1 min-w-0", n),
        inputClassName: "text-center",
        minLength: 1,
        maxLength: 2,
        min: 0,
        max: 23,
        name: `${u}-hours`,
        placeholder: "HH",
        hideClear: !0,
        ...j("hours", x, w)
      }
    ),
    /* @__PURE__ */ y.jsx("span", { children: ":" }),
    /* @__PURE__ */ y.jsx(
      Ba,
      {
        ref: m,
        className: Ae("flex-1 min-w-0", n),
        inputClassName: "text-center",
        minLength: 1,
        maxLength: 2,
        min: 0,
        max: 59,
        name: `${u}-minutes`,
        placeholder: "MM",
        tabIndex: -1,
        hideClear: !0,
        ...j("minutes", M, D)
      }
    ),
    !l && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx("span", { children: ":" }),
      /* @__PURE__ */ y.jsx(
        Ba,
        {
          ref: v,
          className: Ae("flex-1 min-w-0", n),
          inputClassName: "text-center",
          minLength: 1,
          maxLength: 2,
          min: 0,
          max: 59,
          name: `${u}-seconds`,
          placeholder: "SS",
          tabIndex: -1,
          hideClear: !0,
          ...j("seconds", C, P)
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx(ke.Native, { asChild: !0, children: /* @__PURE__ */ y.jsx(
      "input",
      {
        ...d,
        value: $,
        onChange: _,
        ref: dn(f, e),
        required: o,
        name: u,
        readOnly: a,
        tabIndex: -1,
        onFocus: () => {
          var E;
          return (E = p.current) == null ? void 0 : E.focus();
        }
      }
    ) })
  ] });
}, rY = ({
  ref: e,
  asChild: t,
  className: n,
  active: r,
  variant: a = "outline",
  loading: o,
  onLoadingChange: u,
  disabled: l,
  onClick: d,
  style: f,
  ...p
}) => {
  const m = te.useRef(null), [v, $] = Si(!1, o, u), [_, x] = He(null), w = (C) => {
    if (d)
      return $(!0), Promise.resolve(d == null ? void 0 : d(C)).finally(() => {
        $(!1);
      }).then((P) => P).catch((P) => {
        console.error(P);
      });
  };
  oa(() => {
    x(null), setTimeout(() => {
      if (!m.current) return;
      const C = m.current.getBoundingClientRect();
      x({
        width: C.width,
        height: C.height
      });
    }, 0);
  }, [p.children]);
  const M = l || v, D = t ? Ct : "button";
  return /* @__PURE__ */ y.jsx(
    D,
    {
      ref: dn(m, e),
      onClick: w,
      disabled: M,
      className: Ae(
        "bg-white text-neutral-800 rounded px-2 py-1.5 font-medium text-sm border border-solid inline-flex items-center justify-center !outline-theme-100 ui-state-open:outline ui-state-open:outline-3 focus:outline focus:outline-3 outline-offset-0 ",
        "hover:bg-neutral-100 transition-all",
        "ui-state-open:border-neutral-400 ui-state-open:bg-neutral-200 ui-state-open:shadow-inner-sm",
        "disabled:pointer-events-none",
        a === "outline" && "disabled:text-neutral-500 bg-white border-neutral-300 shadow-sm hover:border-neutral-400 ui-state-open:border-neutral-400 active:border-neutral-400 active:bg-neutral-200 active:shadow-inner-sm",
        a === "outline" && M && " bg-neutral-100 shadow-none",
        !M && r && a === "outline" && "border-neutral-400 shadow-inner-sm bg-neutral-200",
        a === "ghost" && "bg-transparent border-transparent",
        a === "link" && "bg-transparent border-none p-0 text-indigo-600 disabled:text-neutral-500 hover:bg-transparent hover:text-indigo-800",
        !M && r && "!bg-neutral-200 !border-neutral-400 shadow-inner-sm",
        n
      ),
      ...p,
      style: {
        width: _ != null ? `${_.width}px` : void 0,
        height: _ != null ? `${_.height}px` : void 0,
        ...f
      },
      children: v ? /* @__PURE__ */ y.jsx("span", { className: "animate-spin-slow block", children: /* @__PURE__ */ y.jsx(P5, {}) }) : p.children
    }
  );
}, aY = (e) => e instanceof Date ? e : Qw(e), Su = (e) => (e == null ? void 0 : e.toString()) === "Invalid Date" || e === "" ? "" : new Date(e).toISOString(), iY = ({
  ref: e,
  controls: t,
  className: n,
  calendarProps: r,
  placeholder: a,
  emptyButtonLabel: o,
  searchPlaceholder: u,
  hideClear: l,
  disabled: d,
  required: f,
  locale: p = "de",
  ...m
}) => {
  const v = Se(null), $ = Se(null), _ = Se(null), x = Se(null), [w, M] = He(!1), D = (z) => {
    d || (M(z), z || (C || (L.setValue(null), k(/* @__PURE__ */ new Date())), setTimeout(() => {
      var N;
      return (N = v.current) == null ? void 0 : N.focus();
    }, 0)));
  }, [C, P] = tn("", m.value, m.onChange), S = (z) => {
    var N;
    en(v.current, ""), L.setValue(null), k(/* @__PURE__ */ new Date()), z.preventDefault(), z.stopPropagation(), (N = v == null ? void 0 : v.current) == null || N.focus();
  }, G = C && aY(C) || void 0, [Z, k] = He(G || /* @__PURE__ */ new Date());
  Ue(() => {
    G && k(G);
  }, [C]);
  const F = (z) => {
    var N;
    z && G && (z.setHours(G.getHours()), z.setMinutes(G.getMinutes()), z.setSeconds(G.getSeconds())), v.current && en(v.current, z ? Su(z) : ""), z && ((N = x.current) == null || N.focus());
  }, R = (z) => {
    const N = C ? new Date(C) : /* @__PURE__ */ new Date(), [B, J, A] = z.target.value.split(":");
    N.setHours(parseInt(B)), N.setMinutes(parseInt(J)), N.setSeconds(parseInt(A)), v.current && en(v.current, N ? Su(N) : "");
  }, I = () => {
    const z = C ? new Date(C) : /* @__PURE__ */ new Date(), N = /* @__PURE__ */ new Date();
    z.setHours(N.getHours()), z.setMinutes(N.getMinutes()), z.setSeconds(N.getSeconds()), v.current && en(v.current, z ? Su(z) : "");
  }, j = C ? new Date(C).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "", E = {
    "aria-label": "date",
    isDisabled: d,
    isRequired: f,
    onFocus: () => {
      d || D(!0);
    },
    onChange: (z) => {
      d || v.current && en(v.current, z ? Su(z.toDate()) : "");
    },
    value: C ? uz(C, ms()) : null,
    granularity: "second",
    hideTimeZone: !0
  };
  let L = JD({
    ...E,
    locale: p,
    createCalendar: $4
  }), { fieldProps: H } = O$(E, L, $);
  return /* @__PURE__ */ y.jsx("div", { className: "relative", children: /* @__PURE__ */ y.jsxs(Kn, { open: w, onOpenChange: D, modal: !1, children: [
    /* @__PURE__ */ y.jsx(Kn.Trigger, { asChild: !0, children: /* @__PURE__ */ y.jsxs(ke, { disabled: d, className: n, children: [
      /* @__PURE__ */ y.jsx(ke.Content, { asChild: !0, children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ...H,
          ref: $,
          className: "select-none px-2 py-1.5 flex-1 min-w-0 bg-transparent placeholder:text-neutral-400 tabular-nums",
          children: L.segments.map((z, N) => {
            const B = L.segments[N - 1];
            return /* @__PURE__ */ y.jsx(
              QD,
              {
                segment: z,
                state: L,
                isPreviousEmpty: !B || B.isPlaceholder
              },
              N
            );
          })
        }
      ) }),
      /* @__PURE__ */ y.jsxs(ke.Controls, { children: [
        C && !l ? /* @__PURE__ */ y.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: S, children: /* @__PURE__ */ y.jsx(qa, {}) }) : /* @__PURE__ */ y.jsx(ke.ControlButton, { className: "pointer-events-none", children: /* @__PURE__ */ y.jsx(
          n0,
          {
            className: Ae(
              "text-neutral-400 transition-colors",
              !d && "group-hover:text-neutral-700"
            )
          }
        ) }),
        t
      ] }),
      /* @__PURE__ */ y.jsx(ke.Native, { children: /* @__PURE__ */ y.jsx(
        "input",
        {
          ref: dn(e, v),
          ...m,
          value: C,
          onChange: P,
          tabIndex: -1,
          onFocus: () => {
            var z;
            return (z = $.current) == null ? void 0 : z.focus();
          },
          disabled: d,
          required: f
        }
      ) })
    ] }) }),
    /* @__PURE__ */ y.jsxs(
      Kn.Content,
      {
        className: "w-auto min-w-min flex flex-col gap-4",
        align: "start",
        ref: _,
        onEscapeKeyDown: (z) => {
          z.stopPropagation();
        },
        onOpenAutoFocus: (z) => {
          z.preventDefault();
        },
        onCloseAutoFocus: (z) => {
          z.preventDefault();
        },
        onFocusOutside: (z) => {
          z.preventDefault();
        },
        children: [
          /* @__PURE__ */ y.jsx(
            _w,
            {
              className: "p-0",
              mode: "single",
              month: Z,
              onMonthChange: (z) => k(z),
              selected: G,
              onSelect: F,
              fixedWeeks: !0,
              showOutsideDays: !0,
              ...r
            }
          ),
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-stretch justify-center gap-1 bg-neutral-50 p-3 rounded", children: [
            /* @__PURE__ */ y.jsx(rY, { variant: "ghost", onClick: I, className: "px-2 !text-theme-500", children: /* @__PURE__ */ y.jsx($5, {}) }),
            /* @__PURE__ */ y.jsx(
              nY,
              {
                value: j,
                onChange: R,
                name: "time",
                ref: x,
                className: "w-48 px-1.5"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}, UK = (e) => /* @__PURE__ */ y.jsx(yr, { widget: iY, ...e }), oY = /* @__PURE__ */ new Map([
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
function Yi(e, t, n) {
  const r = sY(e), { webkitRelativePath: a } = e, o = typeof t == "string" ? t : typeof a == "string" && a.length > 0 ? a : `./${e.name}`;
  return typeof r.path != "string" && gx(r, "path", o), gx(r, "relativePath", o), r;
}
function sY(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), a = oY.get(r);
    a && Object.defineProperty(e, "type", {
      value: a,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function gx(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const uY = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function lY(e) {
  return Ga(this, void 0, void 0, function* () {
    return wl(e) && cY(e.dataTransfer) ? hY(e.dataTransfer, e.type) : dY(e) ? fY(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? pY(e) : [];
  });
}
function cY(e) {
  return wl(e);
}
function dY(e) {
  return wl(e) && wl(e.target);
}
function wl(e) {
  return typeof e == "object" && e !== null;
}
function fY(e) {
  return ip(e.target.files).map((t) => Yi(t));
}
function pY(e) {
  return Ga(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Yi(n));
  });
}
function hY(e, t) {
  return Ga(this, void 0, void 0, function* () {
    if (e.items) {
      const n = ip(e.items).filter((a) => a.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(mY));
      return vx(tE(r));
    }
    return vx(ip(e.files).map((n) => Yi(n)));
  });
}
function vx(e) {
  return e.filter((t) => uY.indexOf(t.name) === -1);
}
function ip(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function mY(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return yx(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? nE(t) : yx(e, t);
}
function tE(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? tE(n) : [n]
  ], []);
}
function yx(e, t) {
  return Ga(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const o = yield e.getAsFileSystemHandle();
      if (o === null)
        throw new Error(`${e} is not a File`);
      if (o !== void 0) {
        const u = yield o.getFile();
        return u.handle = o, Yi(u);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return Yi(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function gY(e) {
  return Ga(this, void 0, void 0, function* () {
    return e.isDirectory ? nE(e) : vY(e);
  });
}
function nE(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const a = [];
    function o() {
      t.readEntries((u) => Ga(this, void 0, void 0, function* () {
        if (u.length) {
          const l = Promise.all(u.map(gY));
          a.push(l), o();
        } else
          try {
            const l = yield Promise.all(a);
            n(l);
          } catch (l) {
            r(l);
          }
      }), (u) => {
        r(u);
      });
    }
    o();
  });
}
function vY(e) {
  return Ga(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const a = Yi(r, e.fullPath);
        t(a);
      }, (r) => {
        n(r);
      });
    });
  });
}
var cf = function(e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(",");
    if (n.length === 0)
      return !0;
    var r = e.name || "", a = (e.type || "").toLowerCase(), o = a.replace(/\/.*$/, "");
    return n.some(function(u) {
      var l = u.trim().toLowerCase();
      return l.charAt(0) === "." ? r.toLowerCase().endsWith(l) : l.endsWith("/*") ? o === l.replace(/\/.*$/, "") : a === l;
    });
  }
  return !0;
};
function bx(e) {
  return xY(e) || bY(e) || aE(e) || yY();
}
function yY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bY(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function xY(e) {
  if (Array.isArray(e)) return op(e);
}
function xx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xx(Object(n), !0).forEach(function(r) {
      rE(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xx(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function rE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ns(e, t) {
  return DY(e) || $Y(e, t) || aE(e, t) || wY();
}
function wY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aE(e, t) {
  if (e) {
    if (typeof e == "string") return op(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return op(e, t);
  }
}
function op(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function $Y(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, u, l;
    try {
      for (n = n.call(e); !(a = (u = n.next()).done) && (r.push(u.value), !(t && r.length === t)); a = !0)
        ;
    } catch (d) {
      o = !0, l = d;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o) throw l;
      }
    }
    return r;
  }
}
function DY(e) {
  if (Array.isArray(e)) return e;
}
var EY = typeof cf == "function" ? cf : cf.default, _Y = "file-invalid-type", CY = "file-too-large", TY = "file-too-small", SY = "too-many-files", PY = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: _Y,
    message: "File type must be ".concat(r)
  };
}, $x = function(t) {
  return {
    code: CY,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Dx = function(t) {
  return {
    code: TY,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, kY = {
  code: SY,
  message: "Too many files"
};
function iE(e, t) {
  var n = e.type === "application/x-moz-file" || EY(e, t);
  return [n, n ? null : PY(t)];
}
function oE(e, t, n) {
  if (Ia(e.size))
    if (Ia(t) && Ia(n)) {
      if (e.size > n) return [!1, $x(n)];
      if (e.size < t) return [!1, Dx(t)];
    } else {
      if (Ia(t) && e.size < t) return [!1, Dx(t)];
      if (Ia(n) && e.size > n) return [!1, $x(n)];
    }
  return [!0, null];
}
function Ia(e) {
  return e != null;
}
function OY(e) {
  var t = e.files, n = e.accept, r = e.minSize, a = e.maxSize, o = e.multiple, u = e.maxFiles, l = e.validator;
  return !o && t.length > 1 || o && u >= 1 && t.length > u ? !1 : t.every(function(d) {
    var f = iE(d, n), p = ns(f, 1), m = p[0], v = oE(d, r, a), $ = ns(v, 1), _ = $[0], x = l ? l(d) : null;
    return m && _ && !x;
  });
}
function $l(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function Pu(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Ex(e) {
  e.preventDefault();
}
function AY(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function MY(e) {
  return e.indexOf("Edge/") !== -1;
}
function IY() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return AY(e) || MY(e);
}
function lr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return t.some(function(l) {
      return !$l(r) && l && l.apply(void 0, [r].concat(o)), $l(r);
    });
  };
}
function NY() {
  return "showOpenFilePicker" in window;
}
function RY(e) {
  if (Ia(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = ns(n, 2), a = r[0], o = r[1], u = !0;
      return sE(a) || (console.warn('Skipped "'.concat(a, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), u = !1), (!Array.isArray(o) || !o.every(uE)) && (console.warn('Skipped "'.concat(a, '" because an invalid file extension was provided.')), u = !1), u;
    }).reduce(function(n, r) {
      var a = ns(r, 2), o = a[0], u = a[1];
      return wx(wx({}, n), {}, rE({}, o, u));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function jY(e) {
  if (Ia(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = ns(n, 2), a = r[0], o = r[1];
      return [].concat(bx(t), [a], bx(o));
    }, []).filter(function(t) {
      return sE(t) || uE(t);
    }).join(",");
}
function FY(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function BY(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function sE(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function uE(e) {
  return /^.*\.[\w]+$/.test(e);
}
var LY = ["children"], VY = ["open"], WY = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], zY = ["refKey", "onChange", "onClick"];
function UY(e) {
  return KY(e) || YY(e) || lE(e) || HY();
}
function HY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YY(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function KY(e) {
  if (Array.isArray(e)) return sp(e);
}
function df(e, t) {
  return ZY(e) || GY(e, t) || lE(e, t) || qY();
}
function qY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lE(e, t) {
  if (e) {
    if (typeof e == "string") return sp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sp(e, t);
  }
}
function sp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function GY(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, u, l;
    try {
      for (n = n.call(e); !(a = (u = n.next()).done) && (r.push(u.value), !(t && r.length === t)); a = !0)
        ;
    } catch (d) {
      o = !0, l = d;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o) throw l;
      }
    }
    return r;
  }
}
function ZY(e) {
  if (Array.isArray(e)) return e;
}
function _x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _x(Object(n), !0).forEach(function(r) {
      up(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _x(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function up(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Dl(e, t) {
  if (e == null) return {};
  var n = XY(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function XY(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Fh = /* @__PURE__ */ Sl(function(e, t) {
  var n = e.children, r = Dl(e, LY), a = dE(r), o = a.open, u = Dl(a, VY);
  return ok(t, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ Oe.createElement(sk, null, n(Ot(Ot({}, u), {}, {
    open: o
  })));
});
Fh.displayName = "Dropzone";
var cE = {
  disabled: !1,
  getFilesFromEvent: lY,
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
Fh.defaultProps = cE;
Fh.propTypes = {
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
  children: fe.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: fe.objectOf(fe.arrayOf(fe.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: fe.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: fe.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: fe.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: fe.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: fe.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: fe.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: fe.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: fe.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: fe.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: fe.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: fe.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: fe.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: fe.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: fe.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: fe.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: fe.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: fe.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: fe.func,
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
  onDrop: fe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: fe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: fe.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: fe.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: fe.func
};
var lp = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function dE() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Ot(Ot({}, cE), e), n = t.accept, r = t.disabled, a = t.getFilesFromEvent, o = t.maxSize, u = t.minSize, l = t.multiple, d = t.maxFiles, f = t.onDragEnter, p = t.onDragLeave, m = t.onDragOver, v = t.onDrop, $ = t.onDropAccepted, _ = t.onDropRejected, x = t.onFileDialogCancel, w = t.onFileDialogOpen, M = t.useFsAccessApi, D = t.autoFocus, C = t.preventDropOnDocument, P = t.noClick, S = t.noKeyboard, G = t.noDrag, Z = t.noDragEventsBubbling, k = t.onError, F = t.validator, R = Xe(function() {
    return jY(n);
  }, [n]), I = Xe(function() {
    return RY(n);
  }, [n]), j = Xe(function() {
    return typeof w == "function" ? w : Cx;
  }, [w]), E = Xe(function() {
    return typeof x == "function" ? x : Cx;
  }, [x]), L = Se(null), H = Se(null), z = Fx(JY, lp), N = df(z, 2), B = N[0], J = N[1], A = B.isFocused, W = B.isFileDialogActive, re = Se(typeof window < "u" && window.isSecureContext && M && NY()), ue = function() {
    !re.current && W && setTimeout(function() {
      if (H.current) {
        var se = H.current.files;
        se.length || (J({
          type: "closeDialog"
        }), E());
      }
    }, 300);
  };
  Ue(function() {
    return window.addEventListener("focus", ue, !1), function() {
      window.removeEventListener("focus", ue, !1);
    };
  }, [H, W, E, re]);
  var ce = Se([]), ye = function(se) {
    L.current && L.current.contains(se.target) || (se.preventDefault(), ce.current = []);
  };
  Ue(function() {
    return C && (document.addEventListener("dragover", Ex, !1), document.addEventListener("drop", ye, !1)), function() {
      C && (document.removeEventListener("dragover", Ex), document.removeEventListener("drop", ye));
    };
  }, [L, C]), Ue(function() {
    return !r && D && L.current && L.current.focus(), function() {
    };
  }, [L, D, r]);
  var ge = Be(function(X) {
    k ? k(X) : console.error(X);
  }, [k]), $e = Be(function(X) {
    X.preventDefault(), X.persist(), ae(X), ce.current = [].concat(UY(ce.current), [X.target]), Pu(X) && Promise.resolve(a(X)).then(function(se) {
      if (!($l(X) && !Z)) {
        var De = se.length, le = De > 0 && OY({
          files: se,
          accept: R,
          minSize: u,
          maxSize: o,
          multiple: l,
          maxFiles: d,
          validator: F
        }), Re = De > 0 && !le;
        J({
          isDragAccept: le,
          isDragReject: Re,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), f && f(X);
      }
    }).catch(function(se) {
      return ge(se);
    });
  }, [a, f, ge, Z, R, u, o, l, d, F]), oe = Be(function(X) {
    X.preventDefault(), X.persist(), ae(X);
    var se = Pu(X);
    if (se && X.dataTransfer)
      try {
        X.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return se && m && m(X), !1;
  }, [m, Z]), xe = Be(function(X) {
    X.preventDefault(), X.persist(), ae(X);
    var se = ce.current.filter(function(le) {
      return L.current && L.current.contains(le);
    }), De = se.indexOf(X.target);
    De !== -1 && se.splice(De, 1), ce.current = se, !(se.length > 0) && (J({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), Pu(X) && p && p(X));
  }, [L, p, Z]), be = Be(function(X, se) {
    var De = [], le = [];
    X.forEach(function(Re) {
      var $t = iE(Re, R), Le = df($t, 2), gt = Le[0], Nt = Le[1], mt = oE(Re, u, o), Vt = df(mt, 2), st = Vt[0], ba = Vt[1], xa = F ? F(Re) : null;
      if (gt && st && !xa)
        De.push(Re);
      else {
        var oo = [Nt, ba];
        xa && (oo = oo.concat(xa)), le.push({
          file: Re,
          errors: oo.filter(function(nc) {
            return nc;
          })
        });
      }
    }), (!l && De.length > 1 || l && d >= 1 && De.length > d) && (De.forEach(function(Re) {
      le.push({
        file: Re,
        errors: [kY]
      });
    }), De.splice(0)), J({
      acceptedFiles: De,
      fileRejections: le,
      isDragReject: le.length > 0,
      type: "setFiles"
    }), v && v(De, le, se), le.length > 0 && _ && _(le, se), De.length > 0 && $ && $(De, se);
  }, [J, l, R, u, o, d, v, $, _, F]), Ce = Be(function(X) {
    X.preventDefault(), X.persist(), ae(X), ce.current = [], Pu(X) && Promise.resolve(a(X)).then(function(se) {
      $l(X) && !Z || be(se, X);
    }).catch(function(se) {
      return ge(se);
    }), J({
      type: "reset"
    });
  }, [a, be, ge, Z]), pe = Be(function() {
    if (re.current) {
      J({
        type: "openDialog"
      }), j();
      var X = {
        multiple: l,
        types: I
      };
      window.showOpenFilePicker(X).then(function(se) {
        return a(se);
      }).then(function(se) {
        be(se, null), J({
          type: "closeDialog"
        });
      }).catch(function(se) {
        FY(se) ? (E(se), J({
          type: "closeDialog"
        })) : BY(se) ? (re.current = !1, H.current ? (H.current.value = null, H.current.click()) : ge(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : ge(se);
      });
      return;
    }
    H.current && (J({
      type: "openDialog"
    }), j(), H.current.value = null, H.current.click());
  }, [J, j, E, M, be, ge, I, l]), Fe = Be(function(X) {
    !L.current || !L.current.isEqualNode(X.target) || (X.key === " " || X.key === "Enter" || X.keyCode === 32 || X.keyCode === 13) && (X.preventDefault(), pe());
  }, [L, pe]), we = Be(function() {
    J({
      type: "focus"
    });
  }, []), rt = Be(function() {
    J({
      type: "blur"
    });
  }, []), ot = Be(function() {
    P || (IY() ? setTimeout(pe, 0) : pe());
  }, [P, pe]), Je = function(se) {
    return r ? null : se;
  }, U = function(se) {
    return S ? null : Je(se);
  }, ne = function(se) {
    return G ? null : Je(se);
  }, ae = function(se) {
    Z && se.stopPropagation();
  }, g = Xe(function() {
    return function() {
      var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, se = X.refKey, De = se === void 0 ? "ref" : se, le = X.role, Re = X.onKeyDown, $t = X.onFocus, Le = X.onBlur, gt = X.onClick, Nt = X.onDragEnter, mt = X.onDragOver, Vt = X.onDragLeave, st = X.onDrop, ba = Dl(X, WY);
      return Ot(Ot(up({
        onKeyDown: U(lr(Re, Fe)),
        onFocus: U(lr($t, we)),
        onBlur: U(lr(Le, rt)),
        onClick: Je(lr(gt, ot)),
        onDragEnter: ne(lr(Nt, $e)),
        onDragOver: ne(lr(mt, oe)),
        onDragLeave: ne(lr(Vt, xe)),
        onDrop: ne(lr(st, Ce)),
        role: typeof le == "string" && le !== "" ? le : "presentation"
      }, De, L), !r && !S ? {
        tabIndex: 0
      } : {}), ba);
    };
  }, [L, Fe, we, rt, ot, $e, oe, xe, Ce, S, G, r]), K = Be(function(X) {
    X.stopPropagation();
  }, []), Y = Xe(function() {
    return function() {
      var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, se = X.refKey, De = se === void 0 ? "ref" : se, le = X.onChange, Re = X.onClick, $t = Dl(X, zY), Le = up({
        accept: R,
        multiple: l,
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
        onChange: Je(lr(le, Ce)),
        onClick: Je(lr(Re, K)),
        tabIndex: -1
      }, De, H);
      return Ot(Ot({}, Le), $t);
    };
  }, [H, n, l, Ce, r]);
  return Ot(Ot({}, B), {}, {
    isFocused: A && !r,
    getRootProps: g,
    getInputProps: Y,
    rootRef: L,
    inputRef: H,
    open: Je(pe)
  });
}
function JY(e, t) {
  switch (t.type) {
    case "focus":
      return Ot(Ot({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return Ot(Ot({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return Ot(Ot({}, lp), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return Ot(Ot({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return Ot(Ot({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return Ot(Ot({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "reset":
      return Ot({}, lp);
    default:
      return e;
  }
}
function Cx() {
}
const QY = (e) => "Blob" in window && e instanceof Blob, eK = (e) => ["jpg", "jpeg", "png", "gif"].includes(e), tK = ({ ext: e }) => {
  switch (e) {
    case "pdf":
      return /* @__PURE__ */ y.jsx(vd, {});
    case "doc":
    case "docx":
      return /* @__PURE__ */ y.jsx(vd, {});
    case "xls":
    case "xlsx":
      return /* @__PURE__ */ y.jsx(C5, {});
    case "ppt":
    case "pptx":
      return /* @__PURE__ */ y.jsx(T5, {});
    case "zip":
      return /* @__PURE__ */ y.jsx(E5, {});
    case "txt":
      return /* @__PURE__ */ y.jsx(vd, {});
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return /* @__PURE__ */ y.jsx(_5, {});
    default:
      return /* @__PURE__ */ y.jsx(S5, {});
  }
}, nK = ({ className: e, onRemove: t, file: n, disabled: r, previewImage: a }) => {
  const o = n.name.split(".").pop() || "", u = n.name.split("/").pop() || "", l = n.url || (QY(n) ? URL.createObjectURL(n) : void 0), [d, f] = te.useState(null);
  return /* @__PURE__ */ y.jsxs(
    ke,
    {
      className: Ae(
        "flex gap-1 justify-between w-full group rounded hover:border-neutral-300 shadow-sm active:border-neutral-300",
        e
      ),
      disabled: r,
      children: [
        /* @__PURE__ */ y.jsxs(ke.Content, { className: "px-2 py-1.5 pr-0 flex items-center gap-1", children: [
          /* @__PURE__ */ y.jsx("span", { className: Ae("text-neutral-400 flex-none block", a && "mr-1"), children: a && eK(o) ? /* @__PURE__ */ y.jsx("a", { href: r ? void 0 : l, target: "_blank", children: /* @__PURE__ */ y.jsx(
            "img",
            {
              src: l,
              alt: u,
              className: "w-9 h-9 object-cover rounded-sm flex-none",
              onLoad: (p) => f({
                width: p.target.naturalWidth,
                height: p.target.naturalHeight
              })
            }
          ) }) : /* @__PURE__ */ y.jsx(tK, { ext: o }) }),
          /* @__PURE__ */ y.jsxs("span", { className: "flex flex-col flex-1", children: [
            /* @__PURE__ */ y.jsx("span", { className: "text-sm truncate", children: u }),
            a && d && /* @__PURE__ */ y.jsxs("span", { className: "text-xs text-neutral-400", children: [
              d.width,
              "x",
              d.height
            ] })
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs(ke.Controls, { children: [
          l && /* @__PURE__ */ y.jsx(ke.ControlButton, { asChild: !0, children: /* @__PURE__ */ y.jsx("a", { href: r ? void 0 : l, target: "_blank", children: /* @__PURE__ */ y.jsx(D5, {}) }) }),
          /* @__PURE__ */ y.jsx(ke.ControlButton, { onClick: t, children: /* @__PURE__ */ y.jsx(qa, {}) })
        ] })
      ]
    }
  );
}, rK = ({
  className: e,
  controls: t,
  onChange: n,
  widgetRef: r,
  placeholder: a,
  previewImage: o = !1,
  ref: u,
  ...l
}) => {
  const d = (C) => {
    n == null || n({
      target: {
        type: "file",
        files: C,
        multiple: l.multiple ? !0 : void 0
      }
    });
  }, f = (C) => {
    var P;
    d(l.multiple ? [...m, ...C] : C), (P = D.current) == null || P.focus();
  }, p = (C) => {
    var P;
    d(m.filter((S, G) => G !== C)), (P = D.current) == null || P.focus();
  }, m = l.value && Array.isArray(l.value) ? l.value : l.value ? [l.value] : [], { getRootProps: v, getInputProps: $, isDragActive: _, isDragAccept: x, isDragReject: w, isFileDialogActive: M, rootRef: D } = dE({
    onDropAccepted: f,
    disabled: l.disabled,
    maxFiles: l.maxFiles,
    maxSize: l.maxSize,
    minSize: l.minSize,
    accept: l.accept,
    multiple: l.multiple
  });
  return /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col gap-2", children: [
    (l.multiple || m.length === 0) && /* @__PURE__ */ y.jsx(
      ke,
      {
        disabled: l.disabled,
        ref: r,
        "data-state": M || _ ? "active" : x ? "accept" : w ? "reject" : void 0,
        "data-placeholder": "",
        "data-disabled": l.disabled ? "" : void 0,
        className: Ae(
          "group shadow-none transition-colors min-h-20",
          !l.disabled && "border-dashed bg-neutral-50 hover:bg-neutral-100",
          "focus:border-solid focus-within:border-solid",
          "ui-placeholder:text-neutral-400",
          !l.disabled && "ui-state-active:bg-theme-100 ui-state-active:border-theme-500 ui-state-active:text-neutral-800 ui-state-active:border-solid",
          l.disabled && "pointer-events-none",
          e
        ),
        children: /* @__PURE__ */ y.jsx(ke.Content, { asChild: !0, children: /* @__PURE__ */ y.jsxs(
          "div",
          {
            ...v(),
            className: Ae("px-2 py-1.5 flex flex-1 justify-center items-center"),
            children: [
              /* @__PURE__ */ y.jsx("input", { ...$() }),
              /* @__PURE__ */ y.jsx(
                "span",
                {
                  className: Ae(
                    "text-center cursor-default select-none",
                    l.disabled && "pointer-events-none"
                  ),
                  children: a
                }
              )
            ]
          }
        ) })
      }
    ),
    m.map((C, P) => /* @__PURE__ */ y.jsx(
      nK,
      {
        disabled: l.disabled,
        onRemove: () => p(P),
        file: C,
        previewImage: o
      },
      P
    ))
  ] });
}, HK = (e) => /* @__PURE__ */ y.jsx(yr, { widget: rK, ...e }), aK = (e) => {
  const [t, n] = tn("", e.value, e.onChange);
  return /* @__PURE__ */ y.jsx("input", { ...e, type: "hidden", value: t, onChange: n });
}, YK = (e) => /* @__PURE__ */ y.jsx(yr, { widget: aK, ...e }), KK = (e) => /* @__PURE__ */ y.jsx(yr, { widget: Ba, ...e }), qK = (e) => /* @__PURE__ */ y.jsx(yr, { widget: eE, ...e }), iK = ({ children: e, onRemove: t, disabled: n, ...r }) => /* @__PURE__ */ y.jsxs(
  "span",
  {
    className: Ae(
      "rounded bg-neutral-100 px-2 flex items-center gap-1 text-sm cursor-default border border-neutral-300 py-px",
      !n && "pr-1"
    ),
    ...r,
    children: [
      e,
      !n && /* @__PURE__ */ y.jsx(
        "button",
        {
          onClick: t,
          type: "button",
          className: "text-neutral-500 hover:text-neutral-700 cursor-pointer",
          tabIndex: -1,
          children: /* @__PURE__ */ y.jsx(qa, {})
        }
      )
    ]
  }
), oK = ({ asChild: e, disabled: t, ...n }) => {
  const { selectedOptions: r, selected: a, onSelectedChange: o, getSelectedItemProps: u } = At(ga);
  if (!r.length) return null;
  const l = e ? Ct : "span";
  return /* @__PURE__ */ y.jsx(l, { ...n, children: r == null ? void 0 : r.map((d, f) => /* @__PURE__ */ y.jsx(
    iK,
    {
      onRemove: (p) => {
        p.stopPropagation(), o == null || o(a == null ? void 0 : a.filter((m) => m !== d.value));
      },
      ...u({
        selectedItem: d,
        index: f
      }),
      disabled: t,
      children: d.label
    },
    d.value
  )) });
}, ff = ({ value: e, label: t, disabled: n = !1, checked: r = !1 }) => /* @__PURE__ */ y.jsxs(
  tt.Option,
  {
    value: e,
    className: Ae(
      "flex items-center gap-2 text-sm px-2 py-1 pl-1 rounded text-neutral-700 cursor-default group",
      "ui-highlighted:bg-neutral-100 ui-disabled:opacity-50 "
    ),
    disabled: n,
    children: [
      /* @__PURE__ */ y.jsx(
        ke,
        {
          variant: "checkable",
          checked: r,
          disabled: n,
          className: Ae(
            "flex justify-center items-center w-5 h-5 rounded text-white",
            "group-ui-state-checked:bg-theme-600 group-ui-state-checked:border-transparent"
          ),
          children: /* @__PURE__ */ y.jsx(tt.OptionIndicator, { children: /* @__PURE__ */ y.jsx(Ol, {}) })
        }
      ),
      /* @__PURE__ */ y.jsx(tt.OptionText, { children: t || e })
    ]
  }
), sK = ({
  // widget props
  widgetRef: e,
  controls: t,
  // multi select props
  options: n,
  defaultOpen: r = !1,
  open: a,
  onOpenChange: o,
  allowAddOption: u,
  onAddOption: l,
  placeholder: d,
  // remaining are select props we can pass down
  // the ones mentioned here are the ones we want to override
  value: f,
  onChange: p,
  onFocus: m,
  ...v
}) => {
  const $ = Se(null), _ = Se(null), [x, w] = Si(r, a, o), [M, D] = te.useState(""), [C, P] = tn([], f, p), { onSelectedChange: S, selectNativeProps: G } = wh({
    focusRef: _,
    onFocus: m,
    value: C,
    onChange: P
  });
  return /* @__PURE__ */ y.jsx(Kn, { open: x, children: /* @__PURE__ */ y.jsxs(
    tt,
    {
      ref: $,
      selected: C,
      onSelectedChange: S,
      onOpenChange: w,
      allowAddOption: u,
      onSearchChange: D,
      required: v.required,
      disabled: v.disabled,
      multiple: !0,
      highlightOnMouseOver: !0,
      className: "relative",
      children: [
        /* @__PURE__ */ y.jsx(Kn.Anchor, { children: /* @__PURE__ */ y.jsx(
          tt.Trigger,
          {
            onClick: (Z) => {
              var k;
              Z.preventDefault(), (k = _.current) == null || k.focus();
            },
            disabled: v.disabled,
            asChild: !0,
            children: /* @__PURE__ */ y.jsxs(ke, { ref: e, children: [
              /* @__PURE__ */ y.jsxs(ke.Content, { className: Ae("flex gap-1 p-1 flex-wrap"), children: [
                /* @__PURE__ */ y.jsx(oK, { className: "flex gap-1 flex-wrap", disabled: v.disabled }),
                /* @__PURE__ */ y.jsxs("div", { className: "flex-auto min-w-0 relative", children: [
                  /* @__PURE__ */ y.jsx("div", { className: "p-1 py-0.5 invisible min-w-20 text-sm whitespace-nowrap", children: M || "&nbsp;" }),
                  /* @__PURE__ */ y.jsx(
                    tt.Search,
                    {
                      ref: _,
                      className: "!outline-none absolute w-full top-0 left-0 p-1 py-0.5 text-sm placeholder:text-neutral-400 bg-transparent",
                      placeholder: d,
                      disabled: v.disabled
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ y.jsx(ke.Controls, { children: t })
            ] })
          }
        ) }),
        /* @__PURE__ */ y.jsx(
          Kn.Content,
          {
            className: Ae("min-w-0 p-0"),
            onOpenAutoFocus: (Z) => {
              Z.preventDefault();
            },
            align: "start",
            forceMount: !0,
            disableInteractions: !x,
            children: /* @__PURE__ */ y.jsxs(tt.Content, { className: "flex flex-col p-2", children: [
              u && M && /* @__PURE__ */ y.jsx(ff, { value: M, label: M, disabled: !M }),
              n.map((Z) => {
                if (Array.isArray(Z)) {
                  const [k, F] = Z;
                  return /* @__PURE__ */ y.jsxs(te.Fragment, { children: [
                    /* @__PURE__ */ y.jsx(tt.Separator, { className: "border-t border-neutral-200 my-2" }),
                    /* @__PURE__ */ y.jsxs(tt.Group, { className: "flex flex-col", children: [
                      /* @__PURE__ */ y.jsx(tt.GroupLabel, { className: "font-medium text-sm px-2 py-1 pl-8", children: k }),
                      F.map((R) => /* @__PURE__ */ y.jsx(
                        ff,
                        {
                          ...R,
                          checked: C == null ? void 0 : C.includes(R.value)
                        },
                        R.value
                      ))
                    ] })
                  ] }, k);
                }
                return /* @__PURE__ */ y.jsx(
                  ff,
                  {
                    ...Z,
                    checked: C == null ? void 0 : C.includes(Z.value)
                  },
                  Z.value
                );
              })
            ] })
          }
        ),
        /* @__PURE__ */ y.jsx(ke.Native, { children: /* @__PURE__ */ y.jsx(tt.Native, { ...v, ...G }) })
      ]
    }
  ) });
}, GK = (e) => /* @__PURE__ */ y.jsx(yr, { widget: sK, ...e }), ZK = (e) => /* @__PURE__ */ y.jsx(yr, { widget: Ew, ...e }), XK = (e) => /* @__PURE__ */ y.jsx(yr, { widget: a0, ...e }), uK = ({ inputClassName: e, className: t, controls: n, widgetRef: r, ref: a, ...o }) => {
  const [u, l] = tn("", o.value, o.onChange);
  return /* @__PURE__ */ y.jsxs(ke, { className: t, readOnly: o.readOnly, disabled: o.disabled, ref: r, children: [
    /* @__PURE__ */ y.jsx(ke.Content, { children: /* @__PURE__ */ y.jsx(
      "textarea",
      {
        ref: a,
        className: Ae(
          "px-2 py-1.5 flex-1 min-w-0 min-h-[3lh] bg-transparent",
          o.disabled && "resize-none",
          e
        ),
        ...o,
        value: u,
        onChange: l
      }
    ) }),
    /* @__PURE__ */ y.jsx(ke.Controls, { children: n })
  ] });
}, JK = (e) => /* @__PURE__ */ y.jsx(yr, { widget: uK, ...e });
var gs = (e) => e.type === "checkbox", ja = (e) => e instanceof Date, sn = (e) => e == null;
const fE = (e) => typeof e == "object";
var Bt = (e) => !sn(e) && !Array.isArray(e) && fE(e) && !ja(e), pE = (e) => Bt(e) && e.target ? gs(e.target) ? e.target.checked : e.target.value : e, lK = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, hE = (e, t) => e.has(lK(t)), cK = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Bt(t) && t.hasOwnProperty("isPrototypeOf");
}, Bh = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function vn(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Bh && (e instanceof Blob || r)) && (n || Bt(e)))
    if (t = n ? [] : {}, !n && !cK(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = vn(e[a]));
  else
    return e;
  return t;
}
var tc = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Ft = (e) => e === void 0, Ee = (e, t, n) => {
  if (!t || !Bt(e))
    return n;
  const r = tc(t.split(/[,[\].]+?/)).reduce((a, o) => sn(a) ? a : a[o], e);
  return Ft(r) || r === e ? Ft(e[t]) ? n : e[t] : r;
}, Hn = (e) => typeof e == "boolean", Lh = (e) => /^\w*$/.test(e), mE = (e) => tc(e.replace(/["|']|\]/g, "").split(/\.|\[/)), yt = (e, t, n) => {
  let r = -1;
  const a = Lh(t) ? [t] : mE(t), o = a.length, u = o - 1;
  for (; ++r < o; ) {
    const l = a[r];
    let d = n;
    if (r !== u) {
      const f = e[l];
      d = Bt(f) || Array.isArray(f) ? f : isNaN(+a[r + 1]) ? {} : [];
    }
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return;
    e[l] = d, e = e[l];
  }
  return e;
};
const El = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, er = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Or = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, gE = Oe.createContext(null), Ja = () => Oe.useContext(gE), dK = (e) => {
  const { children: t, ...n } = e;
  return Oe.createElement(gE.Provider, { value: n }, t);
};
var vE = (e, t, n, r = !0) => {
  const a = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(a, o, {
      get: () => {
        const u = o;
        return t._proxyFormState[u] !== er.all && (t._proxyFormState[u] = !r || er.all), n && (n[u] = !0), e[u];
      }
    });
  return a;
}, yn = (e) => Bt(e) && !Object.keys(e).length, yE = (e, t, n, r) => {
  n(e);
  const { name: a, ...o } = e;
  return yn(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((u) => t[u] === (!r || er.all));
}, Yo = (e) => Array.isArray(e) ? e : [e], bE = (e, t, n) => !e || !t || e === t || Yo(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Vh(e) {
  const t = Oe.useRef(e);
  t.current = e, Oe.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function fK(e) {
  const t = Ja(), { control: n = t.control, disabled: r, name: a, exact: o } = e, [u, l] = Oe.useState(n._formState), d = Oe.useRef(!0), f = Oe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), p = Oe.useRef(a);
  return p.current = a, Vh({
    disabled: r,
    next: (m) => d.current && bE(p.current, m.name, o) && yE(m, f.current, n._updateFormState) && l({
      ...n._formState,
      ...m
    }),
    subject: n._subjects.state
  }), Oe.useEffect(() => (d.current = !0, f.current.isValid && n._updateValid(!0), () => {
    d.current = !1;
  }), [n]), Oe.useMemo(() => vE(u, n, f.current, !1), [u, n]);
}
var hr = (e) => typeof e == "string", xE = (e, t, n, r, a) => hr(e) ? (r && t.watch.add(e), Ee(n, e, a)) : Array.isArray(e) ? e.map((o) => (r && t.watch.add(o), Ee(n, o))) : (r && (t.watchAll = !0), n);
function pK(e) {
  const t = Ja(), { control: n = t.control, name: r, defaultValue: a, disabled: o, exact: u } = e, l = Oe.useRef(r);
  l.current = r, Vh({
    disabled: o,
    subject: n._subjects.values,
    next: (p) => {
      bE(l.current, p.name, u) && f(vn(xE(l.current, n._names, p.values || n._formValues, !1, a)));
    }
  });
  const [d, f] = Oe.useState(n._getWatch(r, a));
  return Oe.useEffect(() => n._removeUnmounted()), d;
}
function hK(e) {
  const t = Ja(), { name: n, disabled: r, control: a = t.control, shouldUnregister: o } = e, u = hE(a._names.array, n), l = pK({
    control: a,
    name: n,
    defaultValue: Ee(a._formValues, n, Ee(a._defaultValues, n, e.defaultValue)),
    exact: !0
  }), d = fK({
    control: a,
    name: n,
    exact: !0
  }), f = Oe.useRef(a.register(n, {
    ...e.rules,
    value: l,
    ...Hn(e.disabled) ? { disabled: e.disabled } : {}
  })), p = Oe.useMemo(() => Object.defineProperties({}, {
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
  }), [d, n]), m = Oe.useMemo(() => ({
    name: n,
    value: l,
    ...Hn(r) || d.disabled ? { disabled: d.disabled || r } : {},
    onChange: (v) => f.current.onChange({
      target: {
        value: pE(v),
        name: n
      },
      type: El.CHANGE
    }),
    onBlur: () => f.current.onBlur({
      target: {
        value: Ee(a._formValues, n),
        name: n
      },
      type: El.BLUR
    }),
    ref: (v) => {
      const $ = Ee(a._fields, n);
      $ && v && ($._f.ref = {
        focus: () => v.focus(),
        select: () => v.select(),
        setCustomValidity: (_) => v.setCustomValidity(_),
        reportValidity: () => v.reportValidity()
      });
    }
  }), [
    n,
    a._formValues,
    r,
    d.disabled,
    l,
    a._fields
  ]);
  return Oe.useEffect(() => {
    const v = a._options.shouldUnregister || o, $ = (_, x) => {
      const w = Ee(a._fields, _);
      w && w._f && (w._f.mount = x);
    };
    if ($(n, !0), v) {
      const _ = vn(Ee(a._options.defaultValues, n));
      yt(a._defaultValues, n, _), Ft(Ee(a._formValues, n)) && yt(a._formValues, n, _);
    }
    return !u && a.register(n), () => {
      (u ? v && !a._state.action : v) ? a.unregister(n) : $(n, !1);
    };
  }, [n, a, u, o]), Oe.useEffect(() => {
    a._updateDisabledField({
      disabled: r,
      fields: a._fields,
      name: n
    });
  }, [r, n, a]), Oe.useMemo(() => ({
    field: m,
    formState: d,
    fieldState: p
  }), [m, d, p]);
}
const mK = (e) => e.render(hK(e));
var gK = (e, t, n, r, a) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: a || !0
  }
} : {}, Tx = (e) => ({
  isOnSubmit: !e || e === er.onSubmit,
  isOnBlur: e === er.onBlur,
  isOnChange: e === er.onChange,
  isOnAll: e === er.all,
  isOnTouch: e === er.onTouched
}), Sx = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Ko = (e, t, n, r) => {
  for (const a of n || Object.keys(e)) {
    const o = Ee(e, a);
    if (o) {
      const { _f: u, ...l } = o;
      if (u) {
        if (u.refs && u.refs[0] && t(u.refs[0], a) && !r)
          return !0;
        if (u.ref && t(u.ref, u.name) && !r)
          return !0;
        if (Ko(l, t))
          break;
      } else if (Bt(l) && Ko(l, t))
        break;
    }
  }
};
var vK = (e, t, n) => {
  const r = Yo(Ee(e, n));
  return yt(r, "root", t[n]), yt(e, n, r), e;
}, Wh = (e) => e.type === "file", fr = (e) => typeof e == "function", _l = (e) => {
  if (!Bh)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Hu = (e) => hr(e), zh = (e) => e.type === "radio", Cl = (e) => e instanceof RegExp;
const Px = {
  value: !1,
  isValid: !1
}, kx = { value: !0, isValid: !0 };
var wE = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Ft(e[0].attributes.value) ? Ft(e[0].value) || e[0].value === "" ? kx : { value: e[0].value, isValid: !0 } : kx
    ) : Px;
  }
  return Px;
};
const Ox = {
  isValid: !1,
  value: null
};
var $E = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Ox) : Ox;
function Ax(e, t, n = "validate") {
  if (Hu(e) || Array.isArray(e) && e.every(Hu) || Hn(e) && !e)
    return {
      type: n,
      message: Hu(e) ? e : "",
      ref: t
    };
}
var wi = (e) => Bt(e) && !Cl(e) ? e : {
  value: e,
  message: ""
}, Mx = async (e, t, n, r, a, o) => {
  const { ref: u, refs: l, required: d, maxLength: f, minLength: p, min: m, max: v, pattern: $, validate: _, name: x, valueAsNumber: w, mount: M } = e._f, D = Ee(n, x);
  if (!M || t.has(x))
    return {};
  const C = l ? l[0] : u, P = (j) => {
    a && C.reportValidity && (C.setCustomValidity(Hn(j) ? "" : j || ""), C.reportValidity());
  }, S = {}, G = zh(u), Z = gs(u), k = G || Z, F = (w || Wh(u)) && Ft(u.value) && Ft(D) || _l(u) && u.value === "" || D === "" || Array.isArray(D) && !D.length, R = gK.bind(null, x, r, S), I = (j, E, L, H = Or.maxLength, z = Or.minLength) => {
    const N = j ? E : L;
    S[x] = {
      type: j ? H : z,
      message: N,
      ref: u,
      ...R(j ? H : z, N)
    };
  };
  if (o ? !Array.isArray(D) || !D.length : d && (!k && (F || sn(D)) || Hn(D) && !D || Z && !wE(l).isValid || G && !$E(l).isValid)) {
    const { value: j, message: E } = Hu(d) ? { value: !!d, message: d } : wi(d);
    if (j && (S[x] = {
      type: Or.required,
      message: E,
      ref: C,
      ...R(Or.required, E)
    }, !r))
      return P(E), S;
  }
  if (!F && (!sn(m) || !sn(v))) {
    let j, E;
    const L = wi(v), H = wi(m);
    if (!sn(D) && !isNaN(D)) {
      const z = u.valueAsNumber || D && +D;
      sn(L.value) || (j = z > L.value), sn(H.value) || (E = z < H.value);
    } else {
      const z = u.valueAsDate || new Date(D), N = (A) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + A), B = u.type == "time", J = u.type == "week";
      hr(L.value) && D && (j = B ? N(D) > N(L.value) : J ? D > L.value : z > new Date(L.value)), hr(H.value) && D && (E = B ? N(D) < N(H.value) : J ? D < H.value : z < new Date(H.value));
    }
    if ((j || E) && (I(!!j, L.message, H.message, Or.max, Or.min), !r))
      return P(S[x].message), S;
  }
  if ((f || p) && !F && (hr(D) || o && Array.isArray(D))) {
    const j = wi(f), E = wi(p), L = !sn(j.value) && D.length > +j.value, H = !sn(E.value) && D.length < +E.value;
    if ((L || H) && (I(L, j.message, E.message), !r))
      return P(S[x].message), S;
  }
  if ($ && !F && hr(D)) {
    const { value: j, message: E } = wi($);
    if (Cl(j) && !D.match(j) && (S[x] = {
      type: Or.pattern,
      message: E,
      ref: u,
      ...R(Or.pattern, E)
    }, !r))
      return P(E), S;
  }
  if (_) {
    if (fr(_)) {
      const j = await _(D, n), E = Ax(j, C);
      if (E && (S[x] = {
        ...E,
        ...R(Or.validate, E.message)
      }, !r))
        return P(E.message), S;
    } else if (Bt(_)) {
      let j = {};
      for (const E in _) {
        if (!yn(j) && !r)
          break;
        const L = Ax(await _[E](D, n), C, E);
        L && (j = {
          ...L,
          ...R(E, L.message)
        }, P(L.message), r && (S[x] = j));
      }
      if (!yn(j) && (S[x] = {
        ref: C,
        ...j
      }, !r))
        return S;
    }
  }
  return P(!0), S;
};
function yK(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Ft(e) ? r++ : e[t[r++]];
  return e;
}
function bK(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Ft(e[t]))
      return !1;
  return !0;
}
function Ht(e, t) {
  const n = Array.isArray(t) ? t : Lh(t) ? [t] : mE(t), r = n.length === 1 ? e : yK(e, n), a = n.length - 1, o = n[a];
  return r && delete r[o], a !== 0 && (Bt(r) && yn(r) || Array.isArray(r) && bK(r)) && Ht(e, n.slice(0, -1)), e;
}
var pf = () => {
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
}, cp = (e) => sn(e) || !fE(e);
function ra(e, t) {
  if (cp(e) || cp(t))
    return e === t;
  if (ja(e) && ja(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const a of n) {
    const o = e[a];
    if (!r.includes(a))
      return !1;
    if (a !== "ref") {
      const u = t[a];
      if (ja(o) && ja(u) || Bt(o) && Bt(u) || Array.isArray(o) && Array.isArray(u) ? !ra(o, u) : o !== u)
        return !1;
    }
  }
  return !0;
}
var DE = (e) => e.type === "select-multiple", xK = (e) => zh(e) || gs(e), hf = (e) => _l(e) && e.isConnected, EE = (e) => {
  for (const t in e)
    if (fr(e[t]))
      return !0;
  return !1;
};
function Tl(e, t = {}) {
  const n = Array.isArray(e);
  if (Bt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Bt(e[r]) && !EE(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Tl(e[r], t[r])) : sn(e[r]) || (t[r] = !0);
  return t;
}
function _E(e, t, n) {
  const r = Array.isArray(e);
  if (Bt(e) || r)
    for (const a in e)
      Array.isArray(e[a]) || Bt(e[a]) && !EE(e[a]) ? Ft(t) || cp(n[a]) ? n[a] = Array.isArray(e[a]) ? Tl(e[a], []) : { ...Tl(e[a]) } : _E(e[a], sn(t) ? {} : t[a], n[a]) : n[a] = !ra(e[a], t[a]);
  return n;
}
var No = (e, t) => _E(e, t, Tl(t)), CE = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Ft(e) ? e : t ? e === "" ? NaN : e && +e : n && hr(e) ? new Date(e) : r ? r(e) : e;
function mf(e) {
  const t = e.ref;
  return Wh(t) ? t.files : zh(t) ? $E(e.refs).value : DE(t) ? [...t.selectedOptions].map(({ value: n }) => n) : gs(t) ? wE(e.refs).value : CE(Ft(t.value) ? e.ref.value : t.value, e);
}
var wK = (e, t, n, r) => {
  const a = {};
  for (const o of e) {
    const u = Ee(t, o);
    u && yt(a, o, u._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: a,
    shouldUseNativeValidation: r
  };
}, Ro = (e) => Ft(e) ? e : Cl(e) ? e.source : Bt(e) ? Cl(e.value) ? e.value.source : e.value : e;
const Ix = "AsyncFunction";
var $K = (e) => !!e && !!e.validate && !!(fr(e.validate) && e.validate.constructor.name === Ix || Bt(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Ix)), DK = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Nx(e, t, n) {
  const r = Ee(e, n);
  if (r || Lh(n))
    return {
      error: r,
      name: n
    };
  const a = n.split(".");
  for (; a.length; ) {
    const o = a.join("."), u = Ee(t, o), l = Ee(e, o);
    if (u && !Array.isArray(u) && n !== o)
      return { name: n };
    if (l && l.type)
      return {
        name: o,
        error: l
      };
    a.pop();
  }
  return {
    name: n
  };
}
var EK = (e, t, n, r, a) => a.isOnAll ? !1 : !n && a.isOnTouch ? !(t || e) : (n ? r.isOnBlur : a.isOnBlur) ? !e : (n ? r.isOnChange : a.isOnChange) ? e : !0, _K = (e, t) => !tc(Ee(e, t)).length && Ht(e, t);
const CK = {
  mode: er.onSubmit,
  reValidateMode: er.onChange,
  shouldFocusError: !0
};
function TK(e = {}) {
  let t = {
    ...CK,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: fr(t.defaultValues),
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
  }, r = {}, a = Bt(t.defaultValues) || Bt(t.values) ? vn(t.defaultValues || t.values) || {} : {}, o = t.shouldUnregister ? {} : vn(a), u = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, d, f = 0;
  const p = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, m = {
    values: pf(),
    array: pf(),
    state: pf()
  }, v = Tx(t.mode), $ = Tx(t.reValidateMode), _ = t.criteriaMode === er.all, x = (U) => (ne) => {
    clearTimeout(f), f = setTimeout(U, ne);
  }, w = async (U) => {
    if (!t.disabled && (p.isValid || U)) {
      const ne = t.resolver ? yn((await k()).errors) : await R(r, !0);
      ne !== n.isValid && m.state.next({
        isValid: ne
      });
    }
  }, M = (U, ne) => {
    !t.disabled && (p.isValidating || p.validatingFields) && ((U || Array.from(l.mount)).forEach((ae) => {
      ae && (ne ? yt(n.validatingFields, ae, ne) : Ht(n.validatingFields, ae));
    }), m.state.next({
      validatingFields: n.validatingFields,
      isValidating: !yn(n.validatingFields)
    }));
  }, D = (U, ne = [], ae, g, K = !0, Y = !0) => {
    if (g && ae && !t.disabled) {
      if (u.action = !0, Y && Array.isArray(Ee(r, U))) {
        const X = ae(Ee(r, U), g.argA, g.argB);
        K && yt(r, U, X);
      }
      if (Y && Array.isArray(Ee(n.errors, U))) {
        const X = ae(Ee(n.errors, U), g.argA, g.argB);
        K && yt(n.errors, U, X), _K(n.errors, U);
      }
      if (p.touchedFields && Y && Array.isArray(Ee(n.touchedFields, U))) {
        const X = ae(Ee(n.touchedFields, U), g.argA, g.argB);
        K && yt(n.touchedFields, U, X);
      }
      p.dirtyFields && (n.dirtyFields = No(a, o)), m.state.next({
        name: U,
        isDirty: j(U, ne),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      yt(o, U, ne);
  }, C = (U, ne) => {
    yt(n.errors, U, ne), m.state.next({
      errors: n.errors
    });
  }, P = (U) => {
    n.errors = U, m.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, S = (U, ne, ae, g) => {
    const K = Ee(r, U);
    if (K) {
      const Y = Ee(o, U, Ft(ae) ? Ee(a, U) : ae);
      Ft(Y) || g && g.defaultChecked || ne ? yt(o, U, ne ? Y : mf(K._f)) : H(U, Y), u.mount && w();
    }
  }, G = (U, ne, ae, g, K) => {
    let Y = !1, X = !1;
    const se = {
      name: U
    };
    if (!t.disabled) {
      const De = !!(Ee(r, U) && Ee(r, U)._f && Ee(r, U)._f.disabled);
      if (!ae || g) {
        p.isDirty && (X = n.isDirty, n.isDirty = se.isDirty = j(), Y = X !== se.isDirty);
        const le = De || ra(Ee(a, U), ne);
        X = !!(!De && Ee(n.dirtyFields, U)), le || De ? Ht(n.dirtyFields, U) : yt(n.dirtyFields, U, !0), se.dirtyFields = n.dirtyFields, Y = Y || p.dirtyFields && X !== !le;
      }
      if (ae) {
        const le = Ee(n.touchedFields, U);
        le || (yt(n.touchedFields, U, ae), se.touchedFields = n.touchedFields, Y = Y || p.touchedFields && le !== ae);
      }
      Y && K && m.state.next(se);
    }
    return Y ? se : {};
  }, Z = (U, ne, ae, g) => {
    const K = Ee(n.errors, U), Y = p.isValid && Hn(ne) && n.isValid !== ne;
    if (t.delayError && ae ? (d = x(() => C(U, ae)), d(t.delayError)) : (clearTimeout(f), d = null, ae ? yt(n.errors, U, ae) : Ht(n.errors, U)), (ae ? !ra(K, ae) : K) || !yn(g) || Y) {
      const X = {
        ...g,
        ...Y && Hn(ne) ? { isValid: ne } : {},
        errors: n.errors,
        name: U
      };
      n = {
        ...n,
        ...X
      }, m.state.next(X);
    }
  }, k = async (U) => {
    M(U, !0);
    const ne = await t.resolver(o, t.context, wK(U || l.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return M(U), ne;
  }, F = async (U) => {
    const { errors: ne } = await k(U);
    if (U)
      for (const ae of U) {
        const g = Ee(ne, ae);
        g ? yt(n.errors, ae, g) : Ht(n.errors, ae);
      }
    else
      n.errors = ne;
    return ne;
  }, R = async (U, ne, ae = {
    valid: !0
  }) => {
    for (const g in U) {
      const K = U[g];
      if (K) {
        const { _f: Y, ...X } = K;
        if (Y) {
          const se = l.array.has(Y.name), De = K._f && $K(K._f);
          De && p.validatingFields && M([g], !0);
          const le = await Mx(K, l.disabled, o, _, t.shouldUseNativeValidation && !ne, se);
          if (De && p.validatingFields && M([g]), le[Y.name] && (ae.valid = !1, ne))
            break;
          !ne && (Ee(le, Y.name) ? se ? vK(n.errors, le, Y.name) : yt(n.errors, Y.name, le[Y.name]) : Ht(n.errors, Y.name));
        }
        !yn(X) && await R(X, ne, ae);
      }
    }
    return ae.valid;
  }, I = () => {
    for (const U of l.unMount) {
      const ne = Ee(r, U);
      ne && (ne._f.refs ? ne._f.refs.every((ae) => !hf(ae)) : !hf(ne._f.ref)) && ge(U);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, j = (U, ne) => !t.disabled && (U && ne && yt(o, U, ne), !ra(W(), a)), E = (U, ne, ae) => xE(U, l, {
    ...u.mount ? o : Ft(ne) ? a : hr(U) ? { [U]: ne } : ne
  }, ae, ne), L = (U) => tc(Ee(u.mount ? o : a, U, t.shouldUnregister ? Ee(a, U, []) : [])), H = (U, ne, ae = {}) => {
    const g = Ee(r, U);
    let K = ne;
    if (g) {
      const Y = g._f;
      Y && (!Y.disabled && yt(o, U, CE(ne, Y)), K = _l(Y.ref) && sn(ne) ? "" : ne, DE(Y.ref) ? [...Y.ref.options].forEach((X) => X.selected = K.includes(X.value)) : Y.refs ? gs(Y.ref) ? Y.refs.length > 1 ? Y.refs.forEach((X) => (!X.defaultChecked || !X.disabled) && (X.checked = Array.isArray(K) ? !!K.find((se) => se === X.value) : K === X.value)) : Y.refs[0] && (Y.refs[0].checked = !!K) : Y.refs.forEach((X) => X.checked = X.value === K) : Wh(Y.ref) ? Y.ref.value = "" : (Y.ref.value = K, Y.ref.type || m.values.next({
        name: U,
        values: { ...o }
      })));
    }
    (ae.shouldDirty || ae.shouldTouch) && G(U, K, ae.shouldTouch, ae.shouldDirty, !0), ae.shouldValidate && A(U);
  }, z = (U, ne, ae) => {
    for (const g in ne) {
      const K = ne[g], Y = `${U}.${g}`, X = Ee(r, Y);
      (l.array.has(U) || Bt(K) || X && !X._f) && !ja(K) ? z(Y, K, ae) : H(Y, K, ae);
    }
  }, N = (U, ne, ae = {}) => {
    const g = Ee(r, U), K = l.array.has(U), Y = vn(ne);
    yt(o, U, Y), K ? (m.array.next({
      name: U,
      values: { ...o }
    }), (p.isDirty || p.dirtyFields) && ae.shouldDirty && m.state.next({
      name: U,
      dirtyFields: No(a, o),
      isDirty: j(U, Y)
    })) : g && !g._f && !sn(Y) ? z(U, Y, ae) : H(U, Y, ae), Sx(U, l) && m.state.next({ ...n }), m.values.next({
      name: u.mount ? U : void 0,
      values: { ...o }
    });
  }, B = async (U) => {
    u.mount = !0;
    const ne = U.target;
    let ae = ne.name, g = !0;
    const K = Ee(r, ae), Y = () => ne.type ? mf(K._f) : pE(U), X = (se) => {
      g = Number.isNaN(se) || ja(se) && isNaN(se.getTime()) || ra(se, Ee(o, ae, se));
    };
    if (K) {
      let se, De;
      const le = Y(), Re = U.type === El.BLUR || U.type === El.FOCUS_OUT, $t = !DK(K._f) && !t.resolver && !Ee(n.errors, ae) && !K._f.deps || EK(Re, Ee(n.touchedFields, ae), n.isSubmitted, $, v), Le = Sx(ae, l, Re);
      yt(o, ae, le), Re ? (K._f.onBlur && K._f.onBlur(U), d && d(0)) : K._f.onChange && K._f.onChange(U);
      const gt = G(ae, le, Re, !1), Nt = !yn(gt) || Le;
      if (!Re && m.values.next({
        name: ae,
        type: U.type,
        values: { ...o }
      }), $t)
        return p.isValid && (t.mode === "onBlur" && Re ? w() : Re || w()), Nt && m.state.next({ name: ae, ...Le ? {} : gt });
      if (!Re && Le && m.state.next({ ...n }), t.resolver) {
        const { errors: mt } = await k([ae]);
        if (X(le), g) {
          const Vt = Nx(n.errors, r, ae), st = Nx(mt, r, Vt.name || ae);
          se = st.error, ae = st.name, De = yn(mt);
        }
      } else
        M([ae], !0), se = (await Mx(K, l.disabled, o, _, t.shouldUseNativeValidation))[ae], M([ae]), X(le), g && (se ? De = !1 : p.isValid && (De = await R(r, !0)));
      g && (K._f.deps && A(K._f.deps), Z(ae, De, se, gt));
    }
  }, J = (U, ne) => {
    if (Ee(n.errors, ne) && U.focus)
      return U.focus(), 1;
  }, A = async (U, ne = {}) => {
    let ae, g;
    const K = Yo(U);
    if (t.resolver) {
      const Y = await F(Ft(U) ? U : K);
      ae = yn(Y), g = U ? !K.some((X) => Ee(Y, X)) : ae;
    } else U ? (g = (await Promise.all(K.map(async (Y) => {
      const X = Ee(r, Y);
      return await R(X && X._f ? { [Y]: X } : X);
    }))).every(Boolean), !(!g && !n.isValid) && w()) : g = ae = await R(r);
    return m.state.next({
      ...!hr(U) || p.isValid && ae !== n.isValid ? {} : { name: U },
      ...t.resolver || !U ? { isValid: ae } : {},
      errors: n.errors
    }), ne.shouldFocus && !g && Ko(r, J, U ? K : l.mount), g;
  }, W = (U) => {
    const ne = {
      ...u.mount ? o : a
    };
    return Ft(U) ? ne : hr(U) ? Ee(ne, U) : U.map((ae) => Ee(ne, ae));
  }, re = (U, ne) => ({
    invalid: !!Ee((ne || n).errors, U),
    isDirty: !!Ee((ne || n).dirtyFields, U),
    error: Ee((ne || n).errors, U),
    isValidating: !!Ee(n.validatingFields, U),
    isTouched: !!Ee((ne || n).touchedFields, U)
  }), ue = (U) => {
    U && Yo(U).forEach((ne) => Ht(n.errors, ne)), m.state.next({
      errors: U ? n.errors : {}
    });
  }, ce = (U, ne, ae) => {
    const g = (Ee(r, U, { _f: {} })._f || {}).ref, K = Ee(n.errors, U) || {}, { ref: Y, message: X, type: se, ...De } = K;
    yt(n.errors, U, {
      ...De,
      ...ne,
      ref: g
    }), m.state.next({
      name: U,
      errors: n.errors,
      isValid: !1
    }), ae && ae.shouldFocus && g && g.focus && g.focus();
  }, ye = (U, ne) => fr(U) ? m.values.subscribe({
    next: (ae) => U(E(void 0, ne), ae)
  }) : E(U, ne, !0), ge = (U, ne = {}) => {
    for (const ae of U ? Yo(U) : l.mount)
      l.mount.delete(ae), l.array.delete(ae), ne.keepValue || (Ht(r, ae), Ht(o, ae)), !ne.keepError && Ht(n.errors, ae), !ne.keepDirty && Ht(n.dirtyFields, ae), !ne.keepTouched && Ht(n.touchedFields, ae), !ne.keepIsValidating && Ht(n.validatingFields, ae), !t.shouldUnregister && !ne.keepDefaultValue && Ht(a, ae);
    m.values.next({
      values: { ...o }
    }), m.state.next({
      ...n,
      ...ne.keepDirty ? { isDirty: j() } : {}
    }), !ne.keepIsValid && w();
  }, $e = ({ disabled: U, name: ne, field: ae, fields: g }) => {
    (Hn(U) && u.mount || U || l.disabled.has(ne)) && (U ? l.disabled.add(ne) : l.disabled.delete(ne), G(ne, mf(ae ? ae._f : Ee(g, ne)._f), !1, !1, !0));
  }, oe = (U, ne = {}) => {
    let ae = Ee(r, U);
    const g = Hn(ne.disabled) || Hn(t.disabled);
    return yt(r, U, {
      ...ae || {},
      _f: {
        ...ae && ae._f ? ae._f : { ref: { name: U } },
        name: U,
        mount: !0,
        ...ne
      }
    }), l.mount.add(U), ae ? $e({
      field: ae,
      disabled: Hn(ne.disabled) ? ne.disabled : t.disabled,
      name: U
    }) : S(U, !0, ne.value), {
      ...g ? { disabled: ne.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!ne.required,
        min: Ro(ne.min),
        max: Ro(ne.max),
        minLength: Ro(ne.minLength),
        maxLength: Ro(ne.maxLength),
        pattern: Ro(ne.pattern)
      } : {},
      name: U,
      onChange: B,
      onBlur: B,
      ref: (K) => {
        if (K) {
          oe(U, ne), ae = Ee(r, U);
          const Y = Ft(K.value) && K.querySelectorAll && K.querySelectorAll("input,select,textarea")[0] || K, X = xK(Y), se = ae._f.refs || [];
          if (X ? se.find((De) => De === Y) : Y === ae._f.ref)
            return;
          yt(r, U, {
            _f: {
              ...ae._f,
              ...X ? {
                refs: [
                  ...se.filter(hf),
                  Y,
                  ...Array.isArray(Ee(a, U)) ? [{}] : []
                ],
                ref: { type: Y.type, name: U }
              } : { ref: Y }
            }
          }), S(U, !1, void 0, Y);
        } else
          ae = Ee(r, U, {}), ae._f && (ae._f.mount = !1), (t.shouldUnregister || ne.shouldUnregister) && !(hE(l.array, U) && u.action) && l.unMount.add(U);
      }
    };
  }, xe = () => t.shouldFocusError && Ko(r, J, l.mount), be = (U) => {
    Hn(U) && (m.state.next({ disabled: U }), Ko(r, (ne, ae) => {
      const g = Ee(r, ae);
      g && (ne.disabled = g._f.disabled || U, Array.isArray(g._f.refs) && g._f.refs.forEach((K) => {
        K.disabled = g._f.disabled || U;
      }));
    }, 0, !1));
  }, Ce = (U, ne) => async (ae) => {
    let g;
    ae && (ae.preventDefault && ae.preventDefault(), ae.persist && ae.persist());
    let K = vn(o);
    if (l.disabled.size)
      for (const Y of l.disabled)
        yt(K, Y, void 0);
    if (m.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: Y, values: X } = await k();
      n.errors = Y, K = X;
    } else
      await R(r);
    if (Ht(n.errors, "root"), yn(n.errors)) {
      m.state.next({
        errors: {}
      });
      try {
        await U(K, ae);
      } catch (Y) {
        g = Y;
      }
    } else
      ne && await ne({ ...n.errors }, ae), xe(), setTimeout(xe);
    if (m.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: yn(n.errors) && !g,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), g)
      throw g;
  }, pe = (U, ne = {}) => {
    Ee(r, U) && (Ft(ne.defaultValue) ? N(U, vn(Ee(a, U))) : (N(U, ne.defaultValue), yt(a, U, vn(ne.defaultValue))), ne.keepTouched || Ht(n.touchedFields, U), ne.keepDirty || (Ht(n.dirtyFields, U), n.isDirty = ne.defaultValue ? j(U, vn(Ee(a, U))) : j()), ne.keepError || (Ht(n.errors, U), p.isValid && w()), m.state.next({ ...n }));
  }, Fe = (U, ne = {}) => {
    const ae = U ? vn(U) : a, g = vn(ae), K = yn(U), Y = K ? a : g;
    if (ne.keepDefaultValues || (a = ae), !ne.keepValues) {
      if (ne.keepDirtyValues) {
        const X = /* @__PURE__ */ new Set([
          ...l.mount,
          ...Object.keys(No(a, o))
        ]);
        for (const se of Array.from(X))
          Ee(n.dirtyFields, se) ? yt(Y, se, Ee(o, se)) : N(se, Ee(Y, se));
      } else {
        if (Bh && Ft(U))
          for (const X of l.mount) {
            const se = Ee(r, X);
            if (se && se._f) {
              const De = Array.isArray(se._f.refs) ? se._f.refs[0] : se._f.ref;
              if (_l(De)) {
                const le = De.closest("form");
                if (le) {
                  le.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      o = t.shouldUnregister ? ne.keepDefaultValues ? vn(a) : {} : vn(Y), m.array.next({
        values: { ...Y }
      }), m.values.next({
        values: { ...Y }
      });
    }
    l = {
      mount: ne.keepDirtyValues ? l.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, u.mount = !p.isValid || !!ne.keepIsValid || !!ne.keepDirtyValues, u.watch = !!t.shouldUnregister, m.state.next({
      submitCount: ne.keepSubmitCount ? n.submitCount : 0,
      isDirty: K ? !1 : ne.keepDirty ? n.isDirty : !!(ne.keepDefaultValues && !ra(U, a)),
      isSubmitted: ne.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: K ? {} : ne.keepDirtyValues ? ne.keepDefaultValues && o ? No(a, o) : n.dirtyFields : ne.keepDefaultValues && U ? No(a, U) : ne.keepDirty ? n.dirtyFields : {},
      touchedFields: ne.keepTouched ? n.touchedFields : {},
      errors: ne.keepErrors ? n.errors : {},
      isSubmitSuccessful: ne.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, we = (U, ne) => Fe(fr(U) ? U(o) : U, ne);
  return {
    control: {
      register: oe,
      unregister: ge,
      getFieldState: re,
      handleSubmit: Ce,
      setError: ce,
      _executeSchema: k,
      _getWatch: E,
      _getDirty: j,
      _updateValid: w,
      _removeUnmounted: I,
      _updateFieldArray: D,
      _updateDisabledField: $e,
      _getFieldArray: L,
      _reset: Fe,
      _resetDefaultValues: () => fr(t.defaultValues) && t.defaultValues().then((U) => {
        we(U, t.resetOptions), m.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (U) => {
        n = {
          ...n,
          ...U
        };
      },
      _disableForm: be,
      _subjects: m,
      _proxyFormState: p,
      _setErrors: P,
      get _fields() {
        return r;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return u;
      },
      set _state(U) {
        u = U;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return l;
      },
      set _names(U) {
        l = U;
      },
      get _formState() {
        return n;
      },
      set _formState(U) {
        n = U;
      },
      get _options() {
        return t;
      },
      set _options(U) {
        t = {
          ...t,
          ...U
        };
      }
    },
    trigger: A,
    register: oe,
    handleSubmit: Ce,
    watch: ye,
    setValue: N,
    getValues: W,
    reset: we,
    resetField: pe,
    clearErrors: ue,
    unregister: ge,
    setError: ce,
    setFocus: (U, ne = {}) => {
      const ae = Ee(r, U), g = ae && ae._f;
      if (g) {
        const K = g.refs ? g.refs[0] : g.ref;
        K.focus && (K.focus(), ne.shouldSelect && fr(K.select) && K.select());
      }
    },
    getFieldState: re
  };
}
function SK(e = {}) {
  const t = Oe.useRef(void 0), n = Oe.useRef(void 0), [r, a] = Oe.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: fr(e.defaultValues),
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
    defaultValues: fr(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...TK(e),
    formState: r
  });
  const o = t.current.control;
  return o._options = e, Vh({
    subject: o._subjects.state,
    next: (u) => {
      yE(u, o._proxyFormState, o._updateFormState, !0) && a({ ...o._formState });
    }
  }), Oe.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), Oe.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const u = o._getDirty();
      u !== r.isDirty && o._subjects.state.next({
        isDirty: u
      });
    }
  }, [o, r.isDirty]), Oe.useEffect(() => {
    e.values && !ra(e.values, n.current) ? (o._reset(e.values, o._options.resetOptions), n.current = e.values, a((u) => ({ ...u }))) : o._resetDefaultValues();
  }, [e.values, o]), Oe.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), Oe.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), Oe.useEffect(() => {
    e.shouldUnregister && o._subjects.values.next({
      values: o._getWatch()
    });
  }, [e.shouldUnregister, o]), t.current.formState = vE(r, o), t.current;
}
const PK = ({
  children: e,
  onSubmit: t,
  formMethods: n,
  onIsSubmittingChange: r,
  ...a
}) => {
  const o = n || SK(), u = async (l) => {
    l.preventDefault(), l.stopPropagation(), r == null || r(!0);
    const d = await Promise.resolve(o.handleSubmit(t)(l));
    return r == null || r(!1), d;
  };
  return /* @__PURE__ */ y.jsx(dK, { ...o, children: /* @__PURE__ */ y.jsx("form", { onSubmit: u, ...a, children: e }) });
}, kK = ({ children: e, ...t }) => {
  const { control: n } = Ja();
  return /* @__PURE__ */ y.jsx(
    mK,
    {
      ...t,
      control: n,
      render: ({ field: { onChange: r, ...a }, fieldState: o, formState: u }) => {
        const l = (f) => {
          mp(f.target) ? r(Array.from(f.target.selectedOptions, (p) => p.value)) : f.target.type === "file" ? f.target.multiple ? r(Array.from(f.target.files)) : r(f.target.files[0] || null) : r(f);
        }, d = {
          ...a,
          error: o.error,
          // formState,
          onChange: l
        };
        return /* @__PURE__ */ y.jsx(Ct, { ...d, children: e });
      }
    }
  );
}, OK = ({
  asChild: e,
  loading: t,
  ...n
}) => {
  const { formState: r } = Ja(), a = e ? Ct : "button", o = e ? {
    loading: t !== void 0 ? t : r.isSubmitting
  } : {};
  return /* @__PURE__ */ y.jsx(a, { ...o, ...n });
}, AK = ({
  asChild: e,
  name: t = "root",
  ...n
}) => {
  const {
    formState: { errors: r }
  } = Ja(), a = r == null ? void 0 : r[t], o = e ? Ct : "div";
  return Vo(a) ? /* @__PURE__ */ y.jsx(o, { ...n, "data-error": (a == null ? void 0 : a.message) || "" }) : null;
}, MK = ({ name: e = "root" }) => {
  const {
    formState: { errors: t }
  } = Ja(), n = t == null ? void 0 : t[e];
  return Vo(n) ? (n == null ? void 0 : n.message) || "" : null;
}, QK = Object.assign(PK, {
  Field: kK,
  Button: OK,
  Error: AK,
  ErrorMessage: MK
}), Rx = ({ value: e, label: t, disabled: n = !1, checked: r }) => /* @__PURE__ */ y.jsxs(tt.Option, { value: e, className: "flex items-center gap-2 py-1 text-sm group", disabled: n, children: [
  /* @__PURE__ */ y.jsx(
    ke,
    {
      variant: "checkable",
      disabled: n,
      checked: r,
      className: "relative flex items-center justify-center w-5 h-5 rounded text-white",
      children: /* @__PURE__ */ y.jsx(ke.Content, { className: "items-center justify-center", children: /* @__PURE__ */ y.jsx(tt.OptionIndicator, { children: /* @__PURE__ */ y.jsx(Ol, {}) }) })
    }
  ),
  /* @__PURE__ */ y.jsx(tt.OptionText, { className: "cursor-default", children: t || e })
] }), eq = ({
  // multi select props
  options: e,
  defaultOpen: t = !1,
  open: n,
  onOpenChange: r,
  allowAddOption: a,
  onAddOption: o,
  placeholder: u,
  // remaining are select props we can pass down
  // the ones mentioned here are the ones we want to override
  value: l,
  onChange: d,
  onFocus: f,
  ...p
}) => {
  const m = Oe.useRef(null), [v, $] = He(!1), [_, x] = tn([], l, d), { onSelectedChange: w, selectNativeProps: M } = wh({
    focusRef: m,
    onFocus: f,
    value: _,
    onChange: x
  });
  return /* @__PURE__ */ y.jsxs(
    tt,
    {
      selected: _,
      onSelectedChange: w,
      disabled: p.disabled,
      multiple: !0,
      open: v,
      onOpenChange: $,
      className: "relative",
      children: [
        /* @__PURE__ */ y.jsx(
          tt.Trigger,
          {
            ref: m,
            className: "!outline-none absolute w-0 h-0",
            onFocus: () => $(!0),
            disabled: p.disabled
          }
        ),
        /* @__PURE__ */ y.jsx(tt.Content, { className: "flex flex-col items-start", children: e.map((D) => {
          if (Array.isArray(D)) {
            const [C, P] = D;
            return /* @__PURE__ */ y.jsxs(Oe.Fragment, { children: [
              /* @__PURE__ */ y.jsx(tt.Separator, { className: "border-t border-neutral-200 my-2 w-full" }),
              /* @__PURE__ */ y.jsxs(tt.Group, { className: "flex flex-col", children: [
                /* @__PURE__ */ y.jsx(tt.GroupLabel, { className: "font-medium text-sm px-2 py-1 !pl-7", children: C }),
                P.map((S) => /* @__PURE__ */ y.jsx(
                  Rx,
                  {
                    ...S,
                    disabled: p.disabled,
                    checked: _ == null ? void 0 : _.includes(S.value)
                  },
                  S.value
                ))
              ] })
            ] }, C);
          }
          return /* @__PURE__ */ y.jsx(
            Rx,
            {
              ...D,
              disabled: p.disabled,
              checked: _ == null ? void 0 : _.includes(D.value)
            },
            D.value
          );
        }) }),
        /* @__PURE__ */ y.jsx(ke.Native, { children: /* @__PURE__ */ y.jsx(tt.Native, { ...p, ...M }) })
      ]
    }
  );
}, IK = (e) => String(new Date(e)) !== "Invalid Date", tq = ({ ref: e, className: t, disabled: n, readOnly: r, required: a, name: o, ...u }) => {
  const l = Oe.useRef(null), d = Oe.useRef(null), f = Oe.useRef(null), p = Oe.useRef(null), [m, v] = tn("", u.value, u.onChange), [$, _] = He(""), [x, w] = He(""), [M, D] = He(""), C = (F, R) => {
    let I = "";
    return F === "day" && R && x && M ? I = `${M.padStart(4, "0")}-${x.padStart(2, "0")}-${R.padStart(2, "0")}` : F === "month" && $ && R && M ? I = `${M.padStart(4, "0")}-${R.padStart(2, "0")}-${$.padStart(2, "0")}` : F === "year" && $ && x && R && (I = `${R.padStart(4, "0")}-${x.padStart(2, "0")}-${$.padStart(2, "0")}`), I;
  }, P = (F, R = "start") => {
    var I, j;
    (I = F.current) == null || I.focus(), (j = F.current) == null || j.setSelectionRange(
      // handle start, end and all
      R === "start" || R === "all" ? 0 : F.current.value.length,
      R === "end" || R === "all" ? F.current.value.length : 0
    );
  }, S = (F, R, I) => (j) => {
    const E = j.target.value;
    if (!/^\d*$/.test(E) || F === "day" && E.length > 2 || F === "month" && E.length > 2 || F === "year" && E.length > 4) return;
    I(E);
    const L = F === "day" && E.length === 2 && parseInt(E) <= 31 && parseInt(E) >= 1, H = F === "month" && E.length === 2 && parseInt(E) <= 12 && parseInt(E) >= 1;
    F === "day" && L ? P(f, "all") : F === "month" && H && P(p, "all");
    const z = C(F, E);
    en(l.current, IK(z) ? z : "");
  }, G = (F, R, I) => (j) => {
    const E = j.currentTarget.value.length, L = j.currentTarget.selectionStart === 0, H = j.currentTarget.selectionStart === E;
    if (j.key === "Backspace") {
      if (R !== "")
        return;
      F === "month" ? (j.preventDefault(), P(d, "end")) : F === "year" && (j.preventDefault(), P(f, "end"));
    } else j.key === "ArrowLeft" && L ? F === "month" ? (j.preventDefault(), P(d, "end")) : F === "year" && (j.preventDefault(), P(f, "end")) : j.key === "ArrowRight" && H && (F === "day" ? (j.preventDefault(), P(f)) : F === "month" && (j.preventDefault(), P(p)));
  }, Z = (F, R, I) => (j) => {
    var H;
    const E = j.target.value;
    !(j.relatedTarget === d.current || j.relatedTarget === f.current || j.relatedTarget === p.current) && ((H = l.current) == null ? void 0 : H.value) === "" && (_(""), w(""), D("")), (F === "day" || F === "month") && E.length > 0 && E.length < 2 ? I(E.padStart(2, "0")) : F === "year" && E.length > 0 && E.length < 4 && I(E.padStart(4, "0"));
  }, k = (F, R, I) => ({
    value: R,
    onChange: S(F, R, I),
    onKeyDown: G(F, R),
    onBlur: Z(F, R, I),
    disabled: n,
    readOnly: r,
    required: a
  });
  return /* @__PURE__ */ y.jsxs("div", { className: "flex gap-2 relative", children: [
    /* @__PURE__ */ y.jsx(
      Ba,
      {
        ref: d,
        className: Ae("w-11", t),
        inputClassName: "text-center",
        minLength: 1,
        maxLength: 2,
        min: 1,
        max: 31,
        name: `${o}-day`,
        placeholder: "DD",
        hideClear: !0,
        ...k("day", $, _)
      }
    ),
    /* @__PURE__ */ y.jsx(
      Ba,
      {
        ref: f,
        className: Ae("w-11", t),
        inputClassName: "text-center",
        minLength: 1,
        maxLength: 2,
        min: 1,
        max: 12,
        name: `${o}-month`,
        placeholder: "MM",
        tabIndex: -1,
        hideClear: !0,
        ...k("month", x, w)
      }
    ),
    /* @__PURE__ */ y.jsx(
      Ba,
      {
        ref: p,
        className: Ae("w-16", t),
        inputClassName: "text-center",
        minLength: 4,
        maxLength: 4,
        name: `${o}-year`,
        placeholder: "YYYY",
        tabIndex: -1,
        hideClear: !0,
        ...k("year", M, D)
      }
    ),
    /* @__PURE__ */ y.jsx(ke.Native, { asChild: !0, children: /* @__PURE__ */ y.jsx(
      "input",
      {
        ...u,
        value: m,
        onChange: v,
        ref: dn(l, e),
        required: a,
        name: o,
        readOnly: r,
        tabIndex: -1,
        onFocus: () => {
          var F;
          return (F = d.current) == null ? void 0 : F.focus();
        }
      }
    ) })
  ] });
}, NK = ({ disabled: e, className: t, ...n }) => {
  const [r, a] = tn(!1, n.checked, n.onChange);
  return /* @__PURE__ */ y.jsxs(
    ke,
    {
      variant: "checkable",
      checked: r,
      disabled: e,
      className: Ae("relative flex items-center justify-center w-5 h-5 rounded-full", t),
      children: [
        /* @__PURE__ */ y.jsx(ke.Native, { asChild: !0, variant: "inset", children: /* @__PURE__ */ y.jsx(
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
        /* @__PURE__ */ y.jsx(ke.Content, { className: "hidden peer-checked:flex items-center justify-center", children: /* @__PURE__ */ y.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
      ]
    }
  );
}, gf = ({
  label: e,
  ...t
}) => /* @__PURE__ */ y.jsxs("label", { className: "flex items-center gap-2 py-1 text-sm", children: [
  /* @__PURE__ */ y.jsx(NK, { ...t }),
  /* @__PURE__ */ y.jsx("span", { children: e })
] }), nq = ({
  options: e,
  name: t,
  className: n,
  disabled: r,
  required: a,
  emptyLabel: o,
  ...u
}) => {
  const [l, d] = tn("", u.value, u.onChange);
  return /* @__PURE__ */ y.jsxs("div", { className: Ae("flex flex-col", n), children: [
    !a && /* @__PURE__ */ y.jsx(
      gf,
      {
        disabled: r,
        required: a,
        value: "",
        checked: !l,
        onChange: d,
        name: t,
        label: o
      }
    ),
    e.map((f) => {
      if (Array.isArray(f)) {
        const [p, m] = f;
        return /* @__PURE__ */ y.jsxs(Oe.Fragment, { children: [
          /* @__PURE__ */ y.jsx(tt.Separator, { className: "border-t border-neutral-200 my-2" }),
          /* @__PURE__ */ y.jsxs(tt.Group, { className: "flex flex-col", children: [
            /* @__PURE__ */ y.jsx(tt.GroupLabel, { className: "font-medium text-sm px-2 py-1 !pl-7", children: p }),
            m.map((v) => /* @__PURE__ */ y.jsx(
              gf,
              {
                disabled: r,
                required: a,
                ...v,
                checked: l === v.value,
                onChange: d,
                name: t
              },
              v.value
            ))
          ] })
        ] }, p);
      }
      return /* @__PURE__ */ y.jsx(
        gf,
        {
          disabled: r,
          required: a,
          ...f,
          checked: l === f.value,
          onChange: d,
          name: t
        },
        f.value
      );
    })
  ] });
}, rq = ({ className: e, disabled: t, defaultChecked: n = !1, ...r }) => {
  const [a, o] = tn(!1, r.checked, r.onChange);
  return /* @__PURE__ */ y.jsxs(
    ke,
    {
      variant: "checkable",
      checked: a,
      disabled: t,
      className: Ae(
        "relative flex items-center w-10 h-6 rounded-full",
        !t && !a && "bg-neutral-50",
        e
      ),
      children: [
        /* @__PURE__ */ y.jsx(ke.Native, { asChild: !0, variant: "inset", children: /* @__PURE__ */ y.jsx("input", { ...r, disabled: t, type: "checkbox", checked: a, onChange: o }) }),
        /* @__PURE__ */ y.jsx(ke.Content, { children: /* @__PURE__ */ y.jsx(
          "span",
          {
            className: Ae(
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
}, aq = ({
  options: e,
  name: t,
  className: n,
  disabled: r,
  required: a,
  ...o
}) => {
  const [u, l] = tn("", o.value, o.onChange);
  return /* @__PURE__ */ y.jsx("div", { className: Ae("flex gap-1 bg-neutral-100 p-1 rounded-md", n), children: e.map((d) => {
    const f = u === d.value;
    return /* @__PURE__ */ y.jsxs(
      ke,
      {
        variant: "checkable",
        checked: f,
        disabled: r,
        className: Ae(
          "relative flex-auto text-center text-sm py-1 px-2 font-normal rounded",
          !f && "bg-transparent border-transparent shadow-none",
          !r && "hover:border-neutral-300"
        ),
        children: [
          /* @__PURE__ */ y.jsx(ke.Native, { asChild: !0, variant: "inset", children: /* @__PURE__ */ y.jsx(
            "input",
            {
              disabled: r,
              type: "radio",
              checked: f,
              onChange: l,
              name: t,
              required: a,
              value: d.value
            }
          ) }),
          /* @__PURE__ */ y.jsx(
            ke.Content,
            {
              className: Ae(
                "pointer-events-none select-none justify-center items-center text-center",
                f && "text-white"
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
  VK as BooleanField,
  _w as Calendar,
  A5 as Checkbox,
  eq as CheckboxGroup,
  zK as DateField,
  QH as DateInput,
  UK as DateTimeField,
  iY as DateTimeInput,
  qK as DecimalField,
  ou as Field,
  HK as FileField,
  rK as FileInput,
  QK as Form,
  dK as FormProvider,
  YK as HiddenField,
  aK as HiddenInput,
  KK as IntegerField,
  Ba as IntegerInput,
  tq as MemorableDateInput,
  sK as MultiSelect,
  GK as MultiSelectField,
  NK as Radio,
  nq as RadioGroup,
  ZK as SelectField,
  Ew as SingleSelect,
  XK as StringField,
  rq as Switch,
  uK as TextArea,
  JK as TextField,
  a0 as TextInput,
  nY as TimeInput,
  aq as ToggleButton,
  ke as Widget,
  BK as getNativeSelectValue,
  en as setNativeInputValue,
  r0 as setNativeSelectValue,
  LK as setNativeTextareaValue,
  Ja as useFormContext,
  tn as useWidgetState
};
//# sourceMappingURL=index.js.map
