import * as J from "react";
import $e, { useState as ht, useContext as Yt, forwardRef as Js, createElement as yc, useId as Ev, useEffect as ct, useLayoutEffect as zr, createContext as bi, useRef as qe, useCallback as Qe, useMemo as Rn, cloneElement as UO, useReducer as Cv, Component as YO, useImperativeHandle as qO, Fragment as KO } from "react";
import * as Tv from "react-dom";
import GO from "react-dom";
import { renderToString as Ov } from "react-dom/server";
import './index.css';var Yi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xc = { exports: {} }, Ia = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kh;
function XO() {
  if (Kh) return Ia;
  Kh = 1;
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
var Gh;
function ZO() {
  return Gh || (Gh = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === I ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case Q:
          return "Fragment";
        case O:
          return "Portal";
        case ne:
          return "Profiler";
        case ee:
          return "StrictMode";
        case R:
          return "Suspense";
        case H:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case Y:
            return (m.displayName || "Context") + ".Provider";
          case V:
            return (m._context.displayName || "Context") + ".Consumer";
          case te:
            var F = m.render;
            return m = m.displayName, m || (m = F.displayName || F.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case z:
            return F = m.displayName || null, F !== null ? F : e(m.type) || "Memo";
          case U:
            F = m._payload, m = m._init;
            try {
              return e(m(F));
            } catch {
            }
        }
      return null;
    }
    function t(m) {
      return "" + m;
    }
    function n(m) {
      try {
        t(m);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var $ = F.error, B = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return $.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(m);
      }
    }
    function r() {
    }
    function a() {
      if (ce === 0) {
        ye = console.log, ge = console.info, be = console.warn, we = console.error, Ce = console.group, _e = console.groupCollapsed, Se = console.groupEnd;
        var m = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: m,
          log: m,
          warn: m,
          error: m,
          group: m,
          groupCollapsed: m,
          groupEnd: m
        });
      }
      ce++;
    }
    function o() {
      if (ce--, ce === 0) {
        var m = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: L({}, m, { value: ye }),
          info: L({}, m, { value: ge }),
          warn: L({}, m, { value: be }),
          error: L({}, m, { value: we }),
          group: L({}, m, { value: Ce }),
          groupCollapsed: L({}, m, { value: _e }),
          groupEnd: L({}, m, { value: Se })
        });
      }
      0 > ce && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function l(m) {
      if (fe === void 0)
        try {
          throw Error();
        } catch ($) {
          var F = $.stack.trim().match(/\n( *(at )?)/);
          fe = F && F[1] || "", Re = -1 < $.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < $.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + fe + m + Re;
    }
    function u(m, F) {
      if (!m || ve) return "";
      var $ = et.get(m);
      if ($ !== void 0) return $;
      ve = !0, $ = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var B = null;
      B = X.H, X.H = null, a();
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
                  Reflect.construct(m, [], pt);
                } else {
                  try {
                    pt.call();
                  } catch (it) {
                    Rt = it;
                  }
                  m.call(pt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (it) {
                  Rt = it;
                }
                (pt = m()) && typeof pt.catch == "function" && pt.catch(function() {
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
                    return m.displayName && At.includes("<anonymous>") && (At = At.replace("<anonymous>", m.displayName)), typeof m == "function" && et.set(m, At), At;
                  }
                while (1 <= xe && 0 <= oe);
              break;
            }
        }
      } finally {
        ve = !1, X.H = B, o(), Error.prepareStackTrace = $;
      }
      return Fe = (Fe = m ? m.displayName || m.name : "") ? l(Fe) : "", typeof m == "function" && et.set(m, Fe), Fe;
    }
    function d(m) {
      if (m == null) return "";
      if (typeof m == "function") {
        var F = m.prototype;
        return u(
          m,
          !(!F || !F.isReactComponent)
        );
      }
      if (typeof m == "string") return l(m);
      switch (m) {
        case R:
          return l("Suspense");
        case H:
          return l("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case te:
            return m = u(m.render, !1), m;
          case z:
            return d(m.type);
          case U:
            F = m._payload, m = m._init;
            try {
              return d(m(F));
            } catch {
            }
        }
      return "";
    }
    function p() {
      var m = X.A;
      return m === null ? null : m.getOwner();
    }
    function h(m) {
      if (M.call(m, "key")) {
        var F = Object.getOwnPropertyDescriptor(m, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function g(m, F) {
      function $() {
        Ke || (Ke = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: $,
        configurable: !0
      });
    }
    function x() {
      var m = e(this.type);
      return N[m] || (N[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function b(m, F, $, B, ae, xe) {
      return $ = xe.ref, m = {
        $$typeof: D,
        type: m,
        key: F,
        props: xe,
        _owner: ae
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function S(m, F, $, B, ae, xe) {
      if (typeof m == "string" || typeof m == "function" || m === Q || m === ne || m === ee || m === R || m === H || m === K || typeof m == "object" && m !== null && (m.$$typeof === U || m.$$typeof === z || m.$$typeof === Y || m.$$typeof === V || m.$$typeof === te || m.$$typeof === ue || m.getModuleId !== void 0)) {
        var oe = F.children;
        if (oe !== void 0)
          if (B)
            if (he(oe)) {
              for (B = 0; B < oe.length; B++)
                _(oe[B], m);
              Object.freeze && Object.freeze(oe);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else _(oe, m);
      } else
        oe = "", (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), m === null ? B = "null" : he(m) ? B = "array" : m !== void 0 && m.$$typeof === D ? (B = "<" + (e(m.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : B = typeof m, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          B,
          oe
        );
      if (M.call(F, "key")) {
        oe = e(m);
        var Ne = Object.keys(F).filter(function(Fe) {
          return Fe !== "key";
        });
        B = 0 < Ne.length ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}", Z[oe + B] || (Ne = 0 < Ne.length ? "{" + Ne.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          oe,
          Ne,
          oe
        ), Z[oe + B] = !0);
      }
      if (oe = null, $ !== void 0 && (n($), oe = "" + $), h(F) && (n(F.key), oe = "" + F.key), "key" in F) {
        $ = {};
        for (var wt in F)
          wt !== "key" && ($[wt] = F[wt]);
      } else $ = F;
      return oe && g(
        $,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), b(m, oe, xe, ae, p(), $);
    }
    function _(m, F) {
      if (typeof m == "object" && m && m.$$typeof !== rt) {
        if (he(m))
          for (var $ = 0; $ < m.length; $++) {
            var B = m[$];
            w(B) && P(B, F);
          }
        else if (w(m))
          m._store && (m._store.validated = 1);
        else if (m === null || typeof m != "object" ? $ = null : ($ = j && m[j] || m["@@iterator"], $ = typeof $ == "function" ? $ : null), typeof $ == "function" && $ !== m.entries && ($ = $.call(m), $ !== m))
          for (; !(m = $.next()).done; )
            w(m.value) && P(m.value, F);
      }
    }
    function w(m) {
      return typeof m == "object" && m !== null && m.$$typeof === D;
    }
    function P(m, F) {
      if (m._store && !m._store.validated && m.key == null && (m._store.validated = 1, F = C(F), !re[F])) {
        re[F] = !0;
        var $ = "";
        m && m._owner != null && m._owner !== p() && ($ = null, typeof m._owner.tag == "number" ? $ = e(m._owner.type) : typeof m._owner.name == "string" && ($ = m._owner.name), $ = " It was passed a child from " + $ + ".");
        var B = X.getCurrentStack;
        X.getCurrentStack = function() {
          var ae = d(m.type);
          return B && (ae += B() || ""), ae;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          $
        ), X.getCurrentStack = B;
      }
    }
    function C(m) {
      var F = "", $ = p();
      return $ && ($ = e($.type)) && (F = `

Check the render method of \`` + $ + "`."), F || (m = e(m)) && (F = `

Check the top-level render call using <` + m + ">."), F;
    }
    var k = $e, D = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), j = Symbol.iterator, I = Symbol.for("react.client.reference"), X = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, L = Object.assign, ue = Symbol.for("react.client.reference"), he = Array.isArray, ce = 0, ye, ge, be, we, Ce, _e, Se;
    r.__reactDisabledLog = !0;
    var fe, Re, ve = !1, et = new (typeof WeakMap == "function" ? WeakMap : Map)(), rt = Symbol.for("react.client.reference"), Ke, N = {}, Z = {}, re = {};
    Ma.Fragment = Q, Ma.jsx = function(m, F, $, B, ae) {
      return S(m, F, $, !1, B, ae);
    }, Ma.jsxs = function(m, F, $, B, ae) {
      return S(m, F, $, !0, B, ae);
    };
  }()), Ma;
}
process.env.NODE_ENV === "production" ? xc.exports = XO() : xc.exports = ZO();
var v = xc.exports;
const Jc = "-", JO = (e) => {
  const t = eS(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const o = a.split(Jc);
      return o[0] === "" && o.length !== 1 && o.shift(), Sv(o, t) || QO(a);
    },
    getConflictingClassGroupIds: (a, o) => {
      const l = n[a] || [];
      return o && r[a] ? [...l, ...r[a]] : l;
    }
  };
}, Sv = (e, t) => {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), o = a ? Sv(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(Jc);
  return (n = t.validators.find(({
    validator: u
  }) => u(l))) == null ? void 0 : n.classGroupId;
}, Xh = /^\[(.+)\]$/, QO = (e) => {
  if (Xh.test(e)) {
    const t = Xh.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, eS = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return nS(Object.entries(e.classGroups), n).forEach(([a, o]) => {
    bc(o, r, a, t);
  }), r;
}, bc = (e, t, n, r) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const o = a === "" ? t : Zh(t, a);
      o.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (tS(a)) {
        bc(a(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([o, l]) => {
      bc(l, Zh(t, o), n, r);
    });
  });
}, Zh = (e, t) => {
  let n = e;
  return t.split(Jc).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, tS = (e) => e.isThemeGetter, nS = (e, t) => t ? e.map(([n, r]) => {
  const a = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([l, u]) => [t + l, u])) : o);
  return [n, a];
}) : e, rS = (e) => {
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
}, Dv = "!", iS = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, a = t[0], o = t.length, l = (u) => {
    const d = [];
    let p = 0, h = 0, g;
    for (let w = 0; w < u.length; w++) {
      let P = u[w];
      if (p === 0) {
        if (P === a && (r || u.slice(w, w + o) === t)) {
          d.push(u.slice(h, w)), h = w + o;
          continue;
        }
        if (P === "/") {
          g = w;
          continue;
        }
      }
      P === "[" ? p++ : P === "]" && p--;
    }
    const x = d.length === 0 ? u : u.substring(h), b = x.startsWith(Dv), S = b ? x.substring(1) : x, _ = g && g > h ? g - h : void 0;
    return {
      modifiers: d,
      hasImportantModifier: b,
      baseClassName: S,
      maybePostfixModifierPosition: _
    };
  };
  return n ? (u) => n({
    className: u,
    parseClassName: l
  }) : l;
}, aS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, oS = (e) => ({
  cache: rS(e.cacheSize),
  parseClassName: iS(e),
  ...JO(e)
}), sS = /\s+/, lS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  } = t, o = [], l = e.trim().split(sS);
  let u = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const p = l[d], {
      modifiers: h,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: b
    } = n(p);
    let S = !!b, _ = r(S ? x.substring(0, b) : x);
    if (!_) {
      if (!S) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (_ = r(x), !_) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      S = !1;
    }
    const w = aS(h).join(":"), P = g ? w + Dv : w, C = P + _;
    if (o.includes(C))
      continue;
    o.push(C);
    const k = a(_, S);
    for (let D = 0; D < k.length; ++D) {
      const O = k[D];
      o.push(P + O);
    }
    u = p + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function uS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = kv(t)) && (r && (r += " "), r += n);
  return r;
}
const kv = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = kv(e[r])) && (n && (n += " "), n += t);
  return n;
};
function cS(e, ...t) {
  let n, r, a, o = l;
  function l(d) {
    const p = t.reduce((h, g) => g(h), e());
    return n = oS(p), r = n.cache.get, a = n.cache.set, o = u, u(d);
  }
  function u(d) {
    const p = r(d);
    if (p)
      return p;
    const h = lS(d, n);
    return a(d, h), h;
  }
  return function() {
    return o(uS.apply(null, arguments));
  };
}
const Et = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Pv = /^\[(?:([a-z-]+):)?(.+)\]$/i, dS = /^\d+\/\d+$/, fS = /* @__PURE__ */ new Set(["px", "full", "screen"]), pS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, mS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, gS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, yr = (e) => qi(e) || fS.has(e) || dS.test(e), jr = (e) => aa(e, "length", TS), qi = (e) => !!e && !Number.isNaN(Number(e)), Mu = (e) => aa(e, "number", qi), Na = (e) => !!e && Number.isInteger(Number(e)), yS = (e) => e.endsWith("%") && qi(e.slice(0, -1)), Be = (e) => Pv.test(e), Rr = (e) => pS.test(e), xS = /* @__PURE__ */ new Set(["length", "size", "percentage"]), bS = (e) => aa(e, xS, Av), wS = (e) => aa(e, "position", Av), _S = /* @__PURE__ */ new Set(["image", "url"]), ES = (e) => aa(e, _S, SS), CS = (e) => aa(e, "", OS), ja = () => !0, aa = (e, t, n) => {
  const r = Pv.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, TS = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hS.test(e) && !mS.test(e)
), Av = () => !1, OS = (e) => gS.test(e), SS = (e) => vS.test(e), DS = () => {
  const e = Et("colors"), t = Et("spacing"), n = Et("blur"), r = Et("brightness"), a = Et("borderColor"), o = Et("borderRadius"), l = Et("borderSpacing"), u = Et("borderWidth"), d = Et("contrast"), p = Et("grayscale"), h = Et("hueRotate"), g = Et("invert"), x = Et("gap"), b = Et("gradientColorStops"), S = Et("gradientColorStopPositions"), _ = Et("inset"), w = Et("margin"), P = Et("opacity"), C = Et("padding"), k = Et("saturate"), D = Et("scale"), O = Et("sepia"), Q = Et("skew"), ee = Et("space"), ne = Et("translate"), V = () => ["auto", "contain", "none"], Y = () => ["auto", "hidden", "clip", "visible", "scroll"], te = () => ["auto", Be, t], R = () => [Be, t], H = () => ["", yr, jr], z = () => ["auto", qi, Be], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], j = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", Be], M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [qi, Be];
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
      borderWidth: H(),
      contrast: L(),
      grayscale: X(),
      hueRotate: L(),
      invert: X(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [yS, jr],
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
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
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
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "space-x": [ee]
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
        "space-y": [ee]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Mu]
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
        "line-clamp": ["none", qi, Mu]
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
        bg: [...U(), wS]
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
        bg: ["auto", "cover", "contain", bS]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ES]
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
        from: [S]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [S]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [S]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
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
        ring: H()
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
        shadow: ["", "inner", "none", Rr, CS]
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
        invert: [g]
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
        sepia: [O]
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
        "backdrop-invert": [g]
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
        "backdrop-sepia": [O]
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
        "skew-x": [Q]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Q]
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
        stroke: [yr, jr, Mu]
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
}, kS = /* @__PURE__ */ cS(DS);
function Iv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Iv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function PS() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Iv(e)) && (r && (r += " "), r += t);
  return r;
}
const Pe = (...e) => kS(PS(...e)), nn = (...e) => (t) => {
  for (const n of e)
    if (n != null) {
      if (typeof n == "function") {
        n(t);
        continue;
      }
      n.current = t;
    }
}, Qa = (e, t) => {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) && (a && o ? n[r] = (...l) => {
      o(...l), a(...l);
    } : a && (n[r] = a)), r === "ref" ? n[r] = nn(a, o) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = Pe(a, o));
  }
  return { ...e, ...n };
}, AS = (...e) => (t) => {
  e.forEach((n) => {
    typeof n == "function" && n(t);
  });
}, Ki = (e, t, n) => {
  const [r, a] = ht(e), o = t !== void 0, l = o ? t : r;
  return [l, (u) => {
    o || a(u), n && n(typeof u == "function" ? u(l) : u);
  }];
};
var Ra = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wc = { exports: {} }, $a = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jh;
function IS() {
  if (Jh) return $a;
  Jh = 1;
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
var es = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qh;
function MS() {
  return Qh || (Qh = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === I ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case Q:
          return "Fragment";
        case O:
          return "Portal";
        case ne:
          return "Profiler";
        case ee:
          return "StrictMode";
        case R:
          return "Suspense";
        case H:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case Y:
            return (m.displayName || "Context") + ".Provider";
          case V:
            return (m._context.displayName || "Context") + ".Consumer";
          case te:
            var F = m.render;
            return m = m.displayName, m || (m = F.displayName || F.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case z:
            return F = m.displayName || null, F !== null ? F : e(m.type) || "Memo";
          case U:
            F = m._payload, m = m._init;
            try {
              return e(m(F));
            } catch {
            }
        }
      return null;
    }
    function t(m) {
      return "" + m;
    }
    function n(m) {
      try {
        t(m);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var $ = F.error, B = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return $.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(m);
      }
    }
    function r() {
    }
    function a() {
      if (ce === 0) {
        ye = console.log, ge = console.info, be = console.warn, we = console.error, Ce = console.group, _e = console.groupCollapsed, Se = console.groupEnd;
        var m = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: m,
          log: m,
          warn: m,
          error: m,
          group: m,
          groupCollapsed: m,
          groupEnd: m
        });
      }
      ce++;
    }
    function o() {
      if (ce--, ce === 0) {
        var m = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: L({}, m, { value: ye }),
          info: L({}, m, { value: ge }),
          warn: L({}, m, { value: be }),
          error: L({}, m, { value: we }),
          group: L({}, m, { value: Ce }),
          groupCollapsed: L({}, m, { value: _e }),
          groupEnd: L({}, m, { value: Se })
        });
      }
      0 > ce && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function l(m) {
      if (fe === void 0)
        try {
          throw Error();
        } catch ($) {
          var F = $.stack.trim().match(/\n( *(at )?)/);
          fe = F && F[1] || "", Re = -1 < $.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < $.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + fe + m + Re;
    }
    function u(m, F) {
      if (!m || ve) return "";
      var $ = et.get(m);
      if ($ !== void 0) return $;
      ve = !0, $ = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var B = null;
      B = X.H, X.H = null, a();
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
                  Reflect.construct(m, [], pt);
                } else {
                  try {
                    pt.call();
                  } catch (it) {
                    Rt = it;
                  }
                  m.call(pt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (it) {
                  Rt = it;
                }
                (pt = m()) && typeof pt.catch == "function" && pt.catch(function() {
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
                    return m.displayName && At.includes("<anonymous>") && (At = At.replace("<anonymous>", m.displayName)), typeof m == "function" && et.set(m, At), At;
                  }
                while (1 <= xe && 0 <= oe);
              break;
            }
        }
      } finally {
        ve = !1, X.H = B, o(), Error.prepareStackTrace = $;
      }
      return Fe = (Fe = m ? m.displayName || m.name : "") ? l(Fe) : "", typeof m == "function" && et.set(m, Fe), Fe;
    }
    function d(m) {
      if (m == null) return "";
      if (typeof m == "function") {
        var F = m.prototype;
        return u(
          m,
          !(!F || !F.isReactComponent)
        );
      }
      if (typeof m == "string") return l(m);
      switch (m) {
        case R:
          return l("Suspense");
        case H:
          return l("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case te:
            return m = u(m.render, !1), m;
          case z:
            return d(m.type);
          case U:
            F = m._payload, m = m._init;
            try {
              return d(m(F));
            } catch {
            }
        }
      return "";
    }
    function p() {
      var m = X.A;
      return m === null ? null : m.getOwner();
    }
    function h(m) {
      if (M.call(m, "key")) {
        var F = Object.getOwnPropertyDescriptor(m, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function g(m, F) {
      function $() {
        Ke || (Ke = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: $,
        configurable: !0
      });
    }
    function x() {
      var m = e(this.type);
      return N[m] || (N[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function b(m, F, $, B, ae, xe) {
      return $ = xe.ref, m = {
        $$typeof: D,
        type: m,
        key: F,
        props: xe,
        _owner: ae
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function S(m, F, $, B, ae, xe) {
      if (typeof m == "string" || typeof m == "function" || m === Q || m === ne || m === ee || m === R || m === H || m === K || typeof m == "object" && m !== null && (m.$$typeof === U || m.$$typeof === z || m.$$typeof === Y || m.$$typeof === V || m.$$typeof === te || m.$$typeof === ue || m.getModuleId !== void 0)) {
        var oe = F.children;
        if (oe !== void 0)
          if (B)
            if (he(oe)) {
              for (B = 0; B < oe.length; B++)
                _(oe[B], m);
              Object.freeze && Object.freeze(oe);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else _(oe, m);
      } else
        oe = "", (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), m === null ? B = "null" : he(m) ? B = "array" : m !== void 0 && m.$$typeof === D ? (B = "<" + (e(m.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : B = typeof m, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          B,
          oe
        );
      if (M.call(F, "key")) {
        oe = e(m);
        var Ne = Object.keys(F).filter(function(Fe) {
          return Fe !== "key";
        });
        B = 0 < Ne.length ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}", Z[oe + B] || (Ne = 0 < Ne.length ? "{" + Ne.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          oe,
          Ne,
          oe
        ), Z[oe + B] = !0);
      }
      if (oe = null, $ !== void 0 && (n($), oe = "" + $), h(F) && (n(F.key), oe = "" + F.key), "key" in F) {
        $ = {};
        for (var wt in F)
          wt !== "key" && ($[wt] = F[wt]);
      } else $ = F;
      return oe && g(
        $,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), b(m, oe, xe, ae, p(), $);
    }
    function _(m, F) {
      if (typeof m == "object" && m && m.$$typeof !== rt) {
        if (he(m))
          for (var $ = 0; $ < m.length; $++) {
            var B = m[$];
            w(B) && P(B, F);
          }
        else if (w(m))
          m._store && (m._store.validated = 1);
        else if (m === null || typeof m != "object" ? $ = null : ($ = j && m[j] || m["@@iterator"], $ = typeof $ == "function" ? $ : null), typeof $ == "function" && $ !== m.entries && ($ = $.call(m), $ !== m))
          for (; !(m = $.next()).done; )
            w(m.value) && P(m.value, F);
      }
    }
    function w(m) {
      return typeof m == "object" && m !== null && m.$$typeof === D;
    }
    function P(m, F) {
      if (m._store && !m._store.validated && m.key == null && (m._store.validated = 1, F = C(F), !re[F])) {
        re[F] = !0;
        var $ = "";
        m && m._owner != null && m._owner !== p() && ($ = null, typeof m._owner.tag == "number" ? $ = e(m._owner.type) : typeof m._owner.name == "string" && ($ = m._owner.name), $ = " It was passed a child from " + $ + ".");
        var B = X.getCurrentStack;
        X.getCurrentStack = function() {
          var ae = d(m.type);
          return B && (ae += B() || ""), ae;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          $
        ), X.getCurrentStack = B;
      }
    }
    function C(m) {
      var F = "", $ = p();
      return $ && ($ = e($.type)) && (F = `

Check the render method of \`` + $ + "`."), F || (m = e(m)) && (F = `

Check the top-level render call using <` + m + ">."), F;
    }
    var k = $e, D = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), j = Symbol.iterator, I = Symbol.for("react.client.reference"), X = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, L = Object.assign, ue = Symbol.for("react.client.reference"), he = Array.isArray, ce = 0, ye, ge, be, we, Ce, _e, Se;
    r.__reactDisabledLog = !0;
    var fe, Re, ve = !1, et = new (typeof WeakMap == "function" ? WeakMap : Map)(), rt = Symbol.for("react.client.reference"), Ke, N = {}, Z = {}, re = {};
    es.Fragment = Q, es.jsx = function(m, F, $, B, ae) {
      return S(m, F, $, !1, B, ae);
    }, es.jsxs = function(m, F, $, B, ae) {
      return S(m, F, $, !0, B, ae);
    };
  }()), es;
}
process.env.NODE_ENV === "production" ? wc.exports = IS() : wc.exports = MS();
var NS = wc.exports, Os = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Os.exports;
(function(e, t) {
  (function() {
    var n, r = "4.17.21", a = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", p = 500, h = "__lodash_placeholder__", g = 1, x = 2, b = 4, S = 1, _ = 2, w = 1, P = 2, C = 4, k = 8, D = 16, O = 32, Q = 64, ee = 128, ne = 256, V = 512, Y = 30, te = "...", R = 800, H = 16, z = 1, U = 2, K = 3, j = 1 / 0, I = 9007199254740991, X = 17976931348623157e292, M = NaN, L = 4294967295, ue = L - 1, he = L >>> 1, ce = [
      ["ary", ee],
      ["bind", w],
      ["bindKey", P],
      ["curry", k],
      ["curryRight", D],
      ["flip", V],
      ["partial", O],
      ["partialRight", Q],
      ["rearg", ne]
    ], ye = "[object Arguments]", ge = "[object Array]", be = "[object AsyncFunction]", we = "[object Boolean]", Ce = "[object Date]", _e = "[object DOMException]", Se = "[object Error]", fe = "[object Function]", Re = "[object GeneratorFunction]", ve = "[object Map]", et = "[object Number]", rt = "[object Null]", Ke = "[object Object]", N = "[object Promise]", Z = "[object Proxy]", re = "[object RegExp]", m = "[object Set]", F = "[object String]", $ = "[object Symbol]", B = "[object Undefined]", ae = "[object WeakMap]", xe = "[object WeakSet]", oe = "[object ArrayBuffer]", Ne = "[object DataView]", wt = "[object Float32Array]", Fe = "[object Float64Array]", mt = "[object Int8Array]", At = "[object Int16Array]", pt = "[object Int32Array]", Rt = "[object Uint8Array]", it = "[object Uint8ClampedArray]", Jr = "[object Uint16Array]", Qr = "[object Uint32Array]", ga = /\b__p \+= '';/g, bl = /\b(__p \+=) '' \+/g, hw = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xf = /&(?:amp|lt|gt|quot|#39);/g, bf = /[&<>"']/g, mw = RegExp(xf.source), gw = RegExp(bf.source), vw = /<%-([\s\S]+?)%>/g, yw = /<%([\s\S]+?)%>/g, wf = /<%=([\s\S]+?)%>/g, xw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, bw = /^\w*$/, ww = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wl = /[\\^$.*+?()[\]{}|]/g, _w = RegExp(wl.source), _l = /^\s+/, Ew = /\s/, Cw = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Tw = /\{\n\/\* \[wrapped with (.+)\] \*/, Ow = /,? & /, Sw = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Dw = /[()=,{}\[\]\/\s]/, kw = /\\(\\)?/g, Pw = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _f = /\w*$/, Aw = /^[-+]0x[0-9a-f]+$/i, Iw = /^0b[01]+$/i, Mw = /^\[object .+?Constructor\]$/, Nw = /^0o[0-7]+$/i, jw = /^(?:0|[1-9]\d*)$/, Rw = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, fo = /($^)/, $w = /['\n\r\u2028\u2029\\]/g, po = "\\ud800-\\udfff", Fw = "\\u0300-\\u036f", Lw = "\\ufe20-\\ufe2f", Ww = "\\u20d0-\\u20ff", Ef = Fw + Lw + Ww, Cf = "\\u2700-\\u27bf", Tf = "a-z\\xdf-\\xf6\\xf8-\\xff", Vw = "\\xac\\xb1\\xd7\\xf7", zw = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Bw = "\\u2000-\\u206f", Hw = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Of = "A-Z\\xc0-\\xd6\\xd8-\\xde", Sf = "\\ufe0e\\ufe0f", Df = Vw + zw + Bw + Hw, El = "['’]", Uw = "[" + po + "]", kf = "[" + Df + "]", ho = "[" + Ef + "]", Pf = "\\d+", Yw = "[" + Cf + "]", Af = "[" + Tf + "]", If = "[^" + po + Df + Pf + Cf + Tf + Of + "]", Cl = "\\ud83c[\\udffb-\\udfff]", qw = "(?:" + ho + "|" + Cl + ")", Mf = "[^" + po + "]", Tl = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ol = "[\\ud800-\\udbff][\\udc00-\\udfff]", Oi = "[" + Of + "]", Nf = "\\u200d", jf = "(?:" + Af + "|" + If + ")", Kw = "(?:" + Oi + "|" + If + ")", Rf = "(?:" + El + "(?:d|ll|m|re|s|t|ve))?", $f = "(?:" + El + "(?:D|LL|M|RE|S|T|VE))?", Ff = qw + "?", Lf = "[" + Sf + "]?", Gw = "(?:" + Nf + "(?:" + [Mf, Tl, Ol].join("|") + ")" + Lf + Ff + ")*", Xw = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Zw = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Wf = Lf + Ff + Gw, Jw = "(?:" + [Yw, Tl, Ol].join("|") + ")" + Wf, Qw = "(?:" + [Mf + ho + "?", ho, Tl, Ol, Uw].join("|") + ")", e_ = RegExp(El, "g"), t_ = RegExp(ho, "g"), Sl = RegExp(Cl + "(?=" + Cl + ")|" + Qw + Wf, "g"), n_ = RegExp([
      Oi + "?" + Af + "+" + Rf + "(?=" + [kf, Oi, "$"].join("|") + ")",
      Kw + "+" + $f + "(?=" + [kf, Oi + jf, "$"].join("|") + ")",
      Oi + "?" + jf + "+" + Rf,
      Oi + "+" + $f,
      Zw,
      Xw,
      Pf,
      Jw
    ].join("|"), "g"), r_ = RegExp("[" + Nf + po + Ef + Sf + "]"), i_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, a_ = [
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
    ], o_ = -1, _t = {};
    _t[wt] = _t[Fe] = _t[mt] = _t[At] = _t[pt] = _t[Rt] = _t[it] = _t[Jr] = _t[Qr] = !0, _t[ye] = _t[ge] = _t[oe] = _t[we] = _t[Ne] = _t[Ce] = _t[Se] = _t[fe] = _t[ve] = _t[et] = _t[Ke] = _t[re] = _t[m] = _t[F] = _t[ae] = !1;
    var xt = {};
    xt[ye] = xt[ge] = xt[oe] = xt[Ne] = xt[we] = xt[Ce] = xt[wt] = xt[Fe] = xt[mt] = xt[At] = xt[pt] = xt[ve] = xt[et] = xt[Ke] = xt[re] = xt[m] = xt[F] = xt[$] = xt[Rt] = xt[it] = xt[Jr] = xt[Qr] = !0, xt[Se] = xt[fe] = xt[ae] = !1;
    var s_ = {
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
    }, l_ = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, u_ = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, c_ = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, d_ = parseFloat, f_ = parseInt, Vf = typeof Ra == "object" && Ra && Ra.Object === Object && Ra, p_ = typeof self == "object" && self && self.Object === Object && self, Bt = Vf || p_ || Function("return this")(), Dl = t && !t.nodeType && t, ei = Dl && !0 && e && !e.nodeType && e, zf = ei && ei.exports === Dl, kl = zf && Vf.process, Tn = function() {
      try {
        var q = ei && ei.require && ei.require("util").types;
        return q || kl && kl.binding && kl.binding("util");
      } catch {
      }
    }(), Bf = Tn && Tn.isArrayBuffer, Hf = Tn && Tn.isDate, Uf = Tn && Tn.isMap, Yf = Tn && Tn.isRegExp, qf = Tn && Tn.isSet, Kf = Tn && Tn.isTypedArray;
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
    function h_(q, se, ie, Oe) {
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
    function m_(q, se) {
      for (var ie = q == null ? 0 : q.length; ie-- && se(q[ie], ie, q) !== !1; )
        ;
      return q;
    }
    function Gf(q, se) {
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
    function mo(q, se) {
      var ie = q == null ? 0 : q.length;
      return !!ie && Si(q, se, 0) > -1;
    }
    function Pl(q, se, ie) {
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
    function Al(q, se, ie, Oe) {
      var Le = -1, nt = q == null ? 0 : q.length;
      for (Oe && nt && (ie = q[++Le]); ++Le < nt; )
        ie = se(ie, q[Le], Le, q);
      return ie;
    }
    function g_(q, se, ie, Oe) {
      var Le = q == null ? 0 : q.length;
      for (Oe && Le && (ie = q[--Le]); Le--; )
        ie = se(ie, q[Le], Le, q);
      return ie;
    }
    function Il(q, se) {
      for (var ie = -1, Oe = q == null ? 0 : q.length; ++ie < Oe; )
        if (se(q[ie], ie, q))
          return !0;
      return !1;
    }
    var v_ = Ml("length");
    function y_(q) {
      return q.split("");
    }
    function x_(q) {
      return q.match(Sw) || [];
    }
    function Xf(q, se, ie) {
      var Oe;
      return ie(q, function(Le, nt, Ft) {
        if (se(Le, nt, Ft))
          return Oe = nt, !1;
      }), Oe;
    }
    function go(q, se, ie, Oe) {
      for (var Le = q.length, nt = ie + (Oe ? 1 : -1); Oe ? nt-- : ++nt < Le; )
        if (se(q[nt], nt, q))
          return nt;
      return -1;
    }
    function Si(q, se, ie) {
      return se === se ? A_(q, se, ie) : go(q, Zf, ie);
    }
    function b_(q, se, ie, Oe) {
      for (var Le = ie - 1, nt = q.length; ++Le < nt; )
        if (Oe(q[Le], se))
          return Le;
      return -1;
    }
    function Zf(q) {
      return q !== q;
    }
    function Jf(q, se) {
      var ie = q == null ? 0 : q.length;
      return ie ? jl(q, se) / ie : M;
    }
    function Ml(q) {
      return function(se) {
        return se == null ? n : se[q];
      };
    }
    function Nl(q) {
      return function(se) {
        return q == null ? n : q[se];
      };
    }
    function Qf(q, se, ie, Oe, Le) {
      return Le(q, function(nt, Ft, gt) {
        ie = Oe ? (Oe = !1, nt) : se(ie, nt, Ft, gt);
      }), ie;
    }
    function w_(q, se) {
      var ie = q.length;
      for (q.sort(se); ie--; )
        q[ie] = q[ie].value;
      return q;
    }
    function jl(q, se) {
      for (var ie, Oe = -1, Le = q.length; ++Oe < Le; ) {
        var nt = se(q[Oe]);
        nt !== n && (ie = ie === n ? nt : ie + nt);
      }
      return ie;
    }
    function Rl(q, se) {
      for (var ie = -1, Oe = Array(q); ++ie < q; )
        Oe[ie] = se(ie);
      return Oe;
    }
    function __(q, se) {
      return Ot(se, function(ie) {
        return [ie, q[ie]];
      });
    }
    function ep(q) {
      return q && q.slice(0, ip(q) + 1).replace(_l, "");
    }
    function vn(q) {
      return function(se) {
        return q(se);
      };
    }
    function $l(q, se) {
      return Ot(se, function(ie) {
        return q[ie];
      });
    }
    function va(q, se) {
      return q.has(se);
    }
    function tp(q, se) {
      for (var ie = -1, Oe = q.length; ++ie < Oe && Si(se, q[ie], 0) > -1; )
        ;
      return ie;
    }
    function np(q, se) {
      for (var ie = q.length; ie-- && Si(se, q[ie], 0) > -1; )
        ;
      return ie;
    }
    function E_(q, se) {
      for (var ie = q.length, Oe = 0; ie--; )
        q[ie] === se && ++Oe;
      return Oe;
    }
    var C_ = Nl(s_), T_ = Nl(l_);
    function O_(q) {
      return "\\" + c_[q];
    }
    function S_(q, se) {
      return q == null ? n : q[se];
    }
    function Di(q) {
      return r_.test(q);
    }
    function D_(q) {
      return i_.test(q);
    }
    function k_(q) {
      for (var se, ie = []; !(se = q.next()).done; )
        ie.push(se.value);
      return ie;
    }
    function Fl(q) {
      var se = -1, ie = Array(q.size);
      return q.forEach(function(Oe, Le) {
        ie[++se] = [Le, Oe];
      }), ie;
    }
    function rp(q, se) {
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
    function vo(q) {
      var se = -1, ie = Array(q.size);
      return q.forEach(function(Oe) {
        ie[++se] = Oe;
      }), ie;
    }
    function P_(q) {
      var se = -1, ie = Array(q.size);
      return q.forEach(function(Oe) {
        ie[++se] = [Oe, Oe];
      }), ie;
    }
    function A_(q, se, ie) {
      for (var Oe = ie - 1, Le = q.length; ++Oe < Le; )
        if (q[Oe] === se)
          return Oe;
      return -1;
    }
    function I_(q, se, ie) {
      for (var Oe = ie + 1; Oe--; )
        if (q[Oe] === se)
          return Oe;
      return Oe;
    }
    function ki(q) {
      return Di(q) ? N_(q) : v_(q);
    }
    function Fn(q) {
      return Di(q) ? j_(q) : y_(q);
    }
    function ip(q) {
      for (var se = q.length; se-- && Ew.test(q.charAt(se)); )
        ;
      return se;
    }
    var M_ = Nl(u_);
    function N_(q) {
      for (var se = Sl.lastIndex = 0; Sl.test(q); )
        ++se;
      return se;
    }
    function j_(q) {
      return q.match(Sl) || [];
    }
    function R_(q) {
      return q.match(n_) || [];
    }
    var $_ = function q(se) {
      se = se == null ? Bt : Pi.defaults(Bt.Object(), se, Pi.pick(Bt, a_));
      var ie = se.Array, Oe = se.Date, Le = se.Error, nt = se.Function, Ft = se.Math, gt = se.Object, Ll = se.RegExp, F_ = se.String, Sn = se.TypeError, yo = ie.prototype, L_ = nt.prototype, Ai = gt.prototype, xo = se["__core-js_shared__"], bo = L_.toString, dt = Ai.hasOwnProperty, W_ = 0, ap = function() {
        var i = /[^.]+$/.exec(xo && xo.keys && xo.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), wo = Ai.toString, V_ = bo.call(gt), z_ = Bt._, B_ = Ll(
        "^" + bo.call(dt).replace(wl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), _o = zf ? se.Buffer : n, kr = se.Symbol, Eo = se.Uint8Array, op = _o ? _o.allocUnsafe : n, Co = rp(gt.getPrototypeOf, gt), sp = gt.create, lp = Ai.propertyIsEnumerable, To = yo.splice, up = kr ? kr.isConcatSpreadable : n, ya = kr ? kr.iterator : n, ti = kr ? kr.toStringTag : n, Oo = function() {
        try {
          var i = oi(gt, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), H_ = se.clearTimeout !== Bt.clearTimeout && se.clearTimeout, U_ = Oe && Oe.now !== Bt.Date.now && Oe.now, Y_ = se.setTimeout !== Bt.setTimeout && se.setTimeout, So = Ft.ceil, Do = Ft.floor, Wl = gt.getOwnPropertySymbols, q_ = _o ? _o.isBuffer : n, cp = se.isFinite, K_ = yo.join, G_ = rp(gt.keys, gt), Lt = Ft.max, Kt = Ft.min, X_ = Oe.now, Z_ = se.parseInt, dp = Ft.random, J_ = yo.reverse, Vl = oi(se, "DataView"), xa = oi(se, "Map"), zl = oi(se, "Promise"), Ii = oi(se, "Set"), ba = oi(se, "WeakMap"), wa = oi(gt, "create"), ko = ba && new ba(), Mi = {}, Q_ = si(Vl), e0 = si(xa), t0 = si(zl), n0 = si(Ii), r0 = si(ba), Po = kr ? kr.prototype : n, _a = Po ? Po.valueOf : n, fp = Po ? Po.toString : n;
      function E(i) {
        if (kt(i) && !Ve(i) && !(i instanceof Xe)) {
          if (i instanceof Dn)
            return i;
          if (dt.call(i, "__wrapped__"))
            return ph(i);
        }
        return new Dn(i);
      }
      var Ni = /* @__PURE__ */ function() {
        function i() {
        }
        return function(s) {
          if (!St(s))
            return {};
          if (sp)
            return sp(s);
          i.prototype = s;
          var c = new i();
          return i.prototype = n, c;
        };
      }();
      function Ao() {
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
        escape: vw,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: yw,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: wf,
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
      }, E.prototype = Ao.prototype, E.prototype.constructor = E, Dn.prototype = Ni(Ao.prototype), Dn.prototype.constructor = Dn;
      function Xe(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = L, this.__views__ = [];
      }
      function i0() {
        var i = new Xe(this.__wrapped__);
        return i.__actions__ = an(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = an(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = an(this.__views__), i;
      }
      function a0() {
        if (this.__filtered__) {
          var i = new Xe(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function o0() {
        var i = this.__wrapped__.value(), s = this.__dir__, c = Ve(i), f = s < 0, y = c ? i.length : 0, T = y1(0, y, this.__views__), A = T.start, W = T.end, G = W - A, de = f ? W : A - 1, pe = this.__iteratees__, me = pe.length, Te = 0, De = Kt(G, this.__takeCount__);
        if (!c || !f && y == G && De == G)
          return Rp(i, this.__actions__);
        var Ie = [];
        e:
          for (; G-- && Te < De; ) {
            de += s;
            for (var He = -1, Me = i[de]; ++He < me; ) {
              var Ge = pe[He], Je = Ge.iteratee, bn = Ge.type, Qt = Je(Me);
              if (bn == U)
                Me = Qt;
              else if (!Qt) {
                if (bn == z)
                  continue e;
                break e;
              }
            }
            Ie[Te++] = Me;
          }
        return Ie;
      }
      Xe.prototype = Ni(Ao.prototype), Xe.prototype.constructor = Xe;
      function ni(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var f = i[s];
          this.set(f[0], f[1]);
        }
      }
      function s0() {
        this.__data__ = wa ? wa(null) : {}, this.size = 0;
      }
      function l0(i) {
        var s = this.has(i) && delete this.__data__[i];
        return this.size -= s ? 1 : 0, s;
      }
      function u0(i) {
        var s = this.__data__;
        if (wa) {
          var c = s[i];
          return c === d ? n : c;
        }
        return dt.call(s, i) ? s[i] : n;
      }
      function c0(i) {
        var s = this.__data__;
        return wa ? s[i] !== n : dt.call(s, i);
      }
      function d0(i, s) {
        var c = this.__data__;
        return this.size += this.has(i) ? 0 : 1, c[i] = wa && s === n ? d : s, this;
      }
      ni.prototype.clear = s0, ni.prototype.delete = l0, ni.prototype.get = u0, ni.prototype.has = c0, ni.prototype.set = d0;
      function ur(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var f = i[s];
          this.set(f[0], f[1]);
        }
      }
      function f0() {
        this.__data__ = [], this.size = 0;
      }
      function p0(i) {
        var s = this.__data__, c = Io(s, i);
        if (c < 0)
          return !1;
        var f = s.length - 1;
        return c == f ? s.pop() : To.call(s, c, 1), --this.size, !0;
      }
      function h0(i) {
        var s = this.__data__, c = Io(s, i);
        return c < 0 ? n : s[c][1];
      }
      function m0(i) {
        return Io(this.__data__, i) > -1;
      }
      function g0(i, s) {
        var c = this.__data__, f = Io(c, i);
        return f < 0 ? (++this.size, c.push([i, s])) : c[f][1] = s, this;
      }
      ur.prototype.clear = f0, ur.prototype.delete = p0, ur.prototype.get = h0, ur.prototype.has = m0, ur.prototype.set = g0;
      function cr(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var f = i[s];
          this.set(f[0], f[1]);
        }
      }
      function v0() {
        this.size = 0, this.__data__ = {
          hash: new ni(),
          map: new (xa || ur)(),
          string: new ni()
        };
      }
      function y0(i) {
        var s = Ho(this, i).delete(i);
        return this.size -= s ? 1 : 0, s;
      }
      function x0(i) {
        return Ho(this, i).get(i);
      }
      function b0(i) {
        return Ho(this, i).has(i);
      }
      function w0(i, s) {
        var c = Ho(this, i), f = c.size;
        return c.set(i, s), this.size += c.size == f ? 0 : 1, this;
      }
      cr.prototype.clear = v0, cr.prototype.delete = y0, cr.prototype.get = x0, cr.prototype.has = b0, cr.prototype.set = w0;
      function ri(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.__data__ = new cr(); ++s < c; )
          this.add(i[s]);
      }
      function _0(i) {
        return this.__data__.set(i, d), this;
      }
      function E0(i) {
        return this.__data__.has(i);
      }
      ri.prototype.add = ri.prototype.push = _0, ri.prototype.has = E0;
      function Ln(i) {
        var s = this.__data__ = new ur(i);
        this.size = s.size;
      }
      function C0() {
        this.__data__ = new ur(), this.size = 0;
      }
      function T0(i) {
        var s = this.__data__, c = s.delete(i);
        return this.size = s.size, c;
      }
      function O0(i) {
        return this.__data__.get(i);
      }
      function S0(i) {
        return this.__data__.has(i);
      }
      function D0(i, s) {
        var c = this.__data__;
        if (c instanceof ur) {
          var f = c.__data__;
          if (!xa || f.length < a - 1)
            return f.push([i, s]), this.size = ++c.size, this;
          c = this.__data__ = new cr(f);
        }
        return c.set(i, s), this.size = c.size, this;
      }
      Ln.prototype.clear = C0, Ln.prototype.delete = T0, Ln.prototype.get = O0, Ln.prototype.has = S0, Ln.prototype.set = D0;
      function pp(i, s) {
        var c = Ve(i), f = !c && li(i), y = !c && !f && Nr(i), T = !c && !f && !y && Fi(i), A = c || f || y || T, W = A ? Rl(i.length, F_) : [], G = W.length;
        for (var de in i)
          (s || dt.call(i, de)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
          (de == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (de == "offset" || de == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          T && (de == "buffer" || de == "byteLength" || de == "byteOffset") || // Skip index properties.
          hr(de, G))) && W.push(de);
        return W;
      }
      function hp(i) {
        var s = i.length;
        return s ? i[Ql(0, s - 1)] : n;
      }
      function k0(i, s) {
        return Uo(an(i), ii(s, 0, i.length));
      }
      function P0(i) {
        return Uo(an(i));
      }
      function Bl(i, s, c) {
        (c !== n && !Wn(i[s], c) || c === n && !(s in i)) && dr(i, s, c);
      }
      function Ea(i, s, c) {
        var f = i[s];
        (!(dt.call(i, s) && Wn(f, c)) || c === n && !(s in i)) && dr(i, s, c);
      }
      function Io(i, s) {
        for (var c = i.length; c--; )
          if (Wn(i[c][0], s))
            return c;
        return -1;
      }
      function A0(i, s, c, f) {
        return Pr(i, function(y, T, A) {
          s(f, y, c(y), A);
        }), f;
      }
      function mp(i, s) {
        return i && Xn(s, Vt(s), i);
      }
      function I0(i, s) {
        return i && Xn(s, sn(s), i);
      }
      function dr(i, s, c) {
        s == "__proto__" && Oo ? Oo(i, s, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : i[s] = c;
      }
      function Hl(i, s) {
        for (var c = -1, f = s.length, y = ie(f), T = i == null; ++c < f; )
          y[c] = T ? n : Cu(i, s[c]);
        return y;
      }
      function ii(i, s, c) {
        return i === i && (c !== n && (i = i <= c ? i : c), s !== n && (i = i >= s ? i : s)), i;
      }
      function kn(i, s, c, f, y, T) {
        var A, W = s & g, G = s & x, de = s & b;
        if (c && (A = y ? c(i, f, y, T) : c(i)), A !== n)
          return A;
        if (!St(i))
          return i;
        var pe = Ve(i);
        if (pe) {
          if (A = b1(i), !W)
            return an(i, A);
        } else {
          var me = Gt(i), Te = me == fe || me == Re;
          if (Nr(i))
            return Lp(i, W);
          if (me == Ke || me == ye || Te && !y) {
            if (A = G || Te ? {} : ih(i), !W)
              return G ? u1(i, I0(A, i)) : l1(i, mp(A, i));
          } else {
            if (!xt[me])
              return y ? i : {};
            A = w1(i, me, W);
          }
        }
        T || (T = new Ln());
        var De = T.get(i);
        if (De)
          return De;
        T.set(i, A), Mh(i) ? i.forEach(function(Me) {
          A.add(kn(Me, s, c, Me, i, T));
        }) : Ah(i) && i.forEach(function(Me, Ge) {
          A.set(Ge, kn(Me, s, c, Ge, i, T));
        });
        var Ie = de ? G ? cu : uu : G ? sn : Vt, He = pe ? n : Ie(i);
        return On(He || i, function(Me, Ge) {
          He && (Ge = Me, Me = i[Ge]), Ea(A, Ge, kn(Me, s, c, Ge, i, T));
        }), A;
      }
      function M0(i) {
        var s = Vt(i);
        return function(c) {
          return gp(c, i, s);
        };
      }
      function gp(i, s, c) {
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
      function vp(i, s, c) {
        if (typeof i != "function")
          throw new Sn(l);
        return Pa(function() {
          i.apply(n, c);
        }, s);
      }
      function Ca(i, s, c, f) {
        var y = -1, T = mo, A = !0, W = i.length, G = [], de = s.length;
        if (!W)
          return G;
        c && (s = Ot(s, vn(c))), f ? (T = Pl, A = !1) : s.length >= a && (T = va, A = !1, s = new ri(s));
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
      var Pr = Hp(Gn), yp = Hp(Yl, !0);
      function N0(i, s) {
        var c = !0;
        return Pr(i, function(f, y, T) {
          return c = !!s(f, y, T), c;
        }), c;
      }
      function Mo(i, s, c) {
        for (var f = -1, y = i.length; ++f < y; ) {
          var T = i[f], A = s(T);
          if (A != null && (W === n ? A === A && !xn(A) : c(A, W)))
            var W = A, G = T;
        }
        return G;
      }
      function j0(i, s, c, f) {
        var y = i.length;
        for (c = ze(c), c < 0 && (c = -c > y ? 0 : y + c), f = f === n || f > y ? y : ze(f), f < 0 && (f += y), f = c > f ? 0 : jh(f); c < f; )
          i[c++] = s;
        return i;
      }
      function xp(i, s) {
        var c = [];
        return Pr(i, function(f, y, T) {
          s(f, y, T) && c.push(f);
        }), c;
      }
      function Ht(i, s, c, f, y) {
        var T = -1, A = i.length;
        for (c || (c = E1), y || (y = []); ++T < A; ) {
          var W = i[T];
          s > 0 && c(W) ? s > 1 ? Ht(W, s - 1, c, f, y) : Sr(y, W) : f || (y[y.length] = W);
        }
        return y;
      }
      var Ul = Up(), bp = Up(!0);
      function Gn(i, s) {
        return i && Ul(i, s, Vt);
      }
      function Yl(i, s) {
        return i && bp(i, s, Vt);
      }
      function No(i, s) {
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
      function wp(i, s, c) {
        var f = s(i);
        return Ve(i) ? f : Sr(f, c(i));
      }
      function Zt(i) {
        return i == null ? i === n ? B : rt : ti && ti in gt(i) ? v1(i) : P1(i);
      }
      function ql(i, s) {
        return i > s;
      }
      function R0(i, s) {
        return i != null && dt.call(i, s);
      }
      function $0(i, s) {
        return i != null && s in gt(i);
      }
      function F0(i, s, c) {
        return i >= Kt(s, c) && i < Lt(s, c);
      }
      function Kl(i, s, c) {
        for (var f = c ? Pl : mo, y = i[0].length, T = i.length, A = T, W = ie(T), G = 1 / 0, de = []; A--; ) {
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
      function L0(i, s, c, f) {
        return Gn(i, function(y, T, A) {
          s(f, c(y), T, A);
        }), f;
      }
      function Ta(i, s, c) {
        s = Ir(s, i), i = lh(i, s);
        var f = i == null ? i : i[Zn(An(s))];
        return f == null ? n : gn(f, i, c);
      }
      function _p(i) {
        return kt(i) && Zt(i) == ye;
      }
      function W0(i) {
        return kt(i) && Zt(i) == oe;
      }
      function V0(i) {
        return kt(i) && Zt(i) == Ce;
      }
      function Oa(i, s, c, f, y) {
        return i === s ? !0 : i == null || s == null || !kt(i) && !kt(s) ? i !== i && s !== s : z0(i, s, c, f, Oa, y);
      }
      function z0(i, s, c, f, y, T) {
        var A = Ve(i), W = Ve(s), G = A ? ge : Gt(i), de = W ? ge : Gt(s);
        G = G == ye ? Ke : G, de = de == ye ? Ke : de;
        var pe = G == Ke, me = de == Ke, Te = G == de;
        if (Te && Nr(i)) {
          if (!Nr(s))
            return !1;
          A = !0, pe = !1;
        }
        if (Te && !pe)
          return T || (T = new Ln()), A || Fi(i) ? th(i, s, c, f, y, T) : m1(i, s, G, c, f, y, T);
        if (!(c & S)) {
          var De = pe && dt.call(i, "__wrapped__"), Ie = me && dt.call(s, "__wrapped__");
          if (De || Ie) {
            var He = De ? i.value() : i, Me = Ie ? s.value() : s;
            return T || (T = new Ln()), y(He, Me, c, f, T);
          }
        }
        return Te ? (T || (T = new Ln()), g1(i, s, c, f, y, T)) : !1;
      }
      function B0(i) {
        return kt(i) && Gt(i) == ve;
      }
      function Gl(i, s, c, f) {
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
            if (!(Te === n ? Oa(pe, de, S | _, f, me) : Te))
              return !1;
          }
        }
        return !0;
      }
      function Ep(i) {
        if (!St(i) || T1(i))
          return !1;
        var s = mr(i) ? B_ : Mw;
        return s.test(si(i));
      }
      function H0(i) {
        return kt(i) && Zt(i) == re;
      }
      function U0(i) {
        return kt(i) && Gt(i) == m;
      }
      function Y0(i) {
        return kt(i) && Zo(i.length) && !!_t[Zt(i)];
      }
      function Cp(i) {
        return typeof i == "function" ? i : i == null ? ln : typeof i == "object" ? Ve(i) ? Sp(i[0], i[1]) : Op(i) : Yh(i);
      }
      function Xl(i) {
        if (!ka(i))
          return G_(i);
        var s = [];
        for (var c in gt(i))
          dt.call(i, c) && c != "constructor" && s.push(c);
        return s;
      }
      function q0(i) {
        if (!St(i))
          return k1(i);
        var s = ka(i), c = [];
        for (var f in i)
          f == "constructor" && (s || !dt.call(i, f)) || c.push(f);
        return c;
      }
      function Zl(i, s) {
        return i < s;
      }
      function Tp(i, s) {
        var c = -1, f = on(i) ? ie(i.length) : [];
        return Pr(i, function(y, T, A) {
          f[++c] = s(y, T, A);
        }), f;
      }
      function Op(i) {
        var s = fu(i);
        return s.length == 1 && s[0][2] ? oh(s[0][0], s[0][1]) : function(c) {
          return c === i || Gl(c, i, s);
        };
      }
      function Sp(i, s) {
        return hu(i) && ah(s) ? oh(Zn(i), s) : function(c) {
          var f = Cu(c, i);
          return f === n && f === s ? Tu(c, i) : Oa(s, f, S | _);
        };
      }
      function jo(i, s, c, f, y) {
        i !== s && Ul(s, function(T, A) {
          if (y || (y = new Ln()), St(T))
            K0(i, s, A, c, jo, f, y);
          else {
            var W = f ? f(gu(i, A), T, A + "", i, s, y) : n;
            W === n && (W = T), Bl(i, A, W);
          }
        }, sn);
      }
      function K0(i, s, c, f, y, T, A) {
        var W = gu(i, c), G = gu(s, c), de = A.get(G);
        if (de) {
          Bl(i, c, de);
          return;
        }
        var pe = T ? T(W, G, c + "", i, s, A) : n, me = pe === n;
        if (me) {
          var Te = Ve(G), De = !Te && Nr(G), Ie = !Te && !De && Fi(G);
          pe = G, Te || De || Ie ? Ve(W) ? pe = W : It(W) ? pe = an(W) : De ? (me = !1, pe = Lp(G, !0)) : Ie ? (me = !1, pe = Wp(G, !0)) : pe = [] : Aa(G) || li(G) ? (pe = W, li(W) ? pe = Rh(W) : (!St(W) || mr(W)) && (pe = ih(G))) : me = !1;
        }
        me && (A.set(G, pe), y(pe, G, f, T, A), A.delete(G)), Bl(i, c, pe);
      }
      function Dp(i, s) {
        var c = i.length;
        if (c)
          return s += s < 0 ? c : 0, hr(s, c) ? i[s] : n;
      }
      function kp(i, s, c) {
        s.length ? s = Ot(s, function(T) {
          return Ve(T) ? function(A) {
            return ai(A, T.length === 1 ? T[0] : T);
          } : T;
        }) : s = [ln];
        var f = -1;
        s = Ot(s, vn(Ae()));
        var y = Tp(i, function(T, A, W) {
          var G = Ot(s, function(de) {
            return de(T);
          });
          return { criteria: G, index: ++f, value: T };
        });
        return w_(y, function(T, A) {
          return s1(T, A, c);
        });
      }
      function G0(i, s) {
        return Pp(i, s, function(c, f) {
          return Tu(i, f);
        });
      }
      function Pp(i, s, c) {
        for (var f = -1, y = s.length, T = {}; ++f < y; ) {
          var A = s[f], W = ai(i, A);
          c(W, A) && Sa(T, Ir(A, i), W);
        }
        return T;
      }
      function X0(i) {
        return function(s) {
          return ai(s, i);
        };
      }
      function Jl(i, s, c, f) {
        var y = f ? b_ : Si, T = -1, A = s.length, W = i;
        for (i === s && (s = an(s)), c && (W = Ot(i, vn(c))); ++T < A; )
          for (var G = 0, de = s[T], pe = c ? c(de) : de; (G = y(W, pe, G, f)) > -1; )
            W !== i && To.call(W, G, 1), To.call(i, G, 1);
        return i;
      }
      function Ap(i, s) {
        for (var c = i ? s.length : 0, f = c - 1; c--; ) {
          var y = s[c];
          if (c == f || y !== T) {
            var T = y;
            hr(y) ? To.call(i, y, 1) : nu(i, y);
          }
        }
        return i;
      }
      function Ql(i, s) {
        return i + Do(dp() * (s - i + 1));
      }
      function Z0(i, s, c, f) {
        for (var y = -1, T = Lt(So((s - i) / (c || 1)), 0), A = ie(T); T--; )
          A[f ? T : ++y] = i, i += c;
        return A;
      }
      function eu(i, s) {
        var c = "";
        if (!i || s < 1 || s > I)
          return c;
        do
          s % 2 && (c += i), s = Do(s / 2), s && (i += i);
        while (s);
        return c;
      }
      function Ye(i, s) {
        return vu(sh(i, s, ln), i + "");
      }
      function J0(i) {
        return hp(Li(i));
      }
      function Q0(i, s) {
        var c = Li(i);
        return Uo(c, ii(s, 0, c.length));
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
      var Ip = ko ? function(i, s) {
        return ko.set(i, s), i;
      } : ln, e1 = Oo ? function(i, s) {
        return Oo(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Su(s),
          writable: !0
        });
      } : ln;
      function t1(i) {
        return Uo(Li(i));
      }
      function Pn(i, s, c) {
        var f = -1, y = i.length;
        s < 0 && (s = -s > y ? 0 : y + s), c = c > y ? y : c, c < 0 && (c += y), y = s > c ? 0 : c - s >>> 0, s >>>= 0;
        for (var T = ie(y); ++f < y; )
          T[f] = i[f + s];
        return T;
      }
      function n1(i, s) {
        var c;
        return Pr(i, function(f, y, T) {
          return c = s(f, y, T), !c;
        }), !!c;
      }
      function Ro(i, s, c) {
        var f = 0, y = i == null ? f : i.length;
        if (typeof s == "number" && s === s && y <= he) {
          for (; f < y; ) {
            var T = f + y >>> 1, A = i[T];
            A !== null && !xn(A) && (c ? A <= s : A < s) ? f = T + 1 : y = T;
          }
          return y;
        }
        return tu(i, s, ln, c);
      }
      function tu(i, s, c, f) {
        var y = 0, T = i == null ? 0 : i.length;
        if (T === 0)
          return 0;
        s = c(s);
        for (var A = s !== s, W = s === null, G = xn(s), de = s === n; y < T; ) {
          var pe = Do((y + T) / 2), me = c(i[pe]), Te = me !== n, De = me === null, Ie = me === me, He = xn(me);
          if (A)
            var Me = f || Ie;
          else de ? Me = Ie && (f || Te) : W ? Me = Ie && Te && (f || !De) : G ? Me = Ie && Te && !De && (f || !He) : De || He ? Me = !1 : Me = f ? me <= s : me < s;
          Me ? y = pe + 1 : T = pe;
        }
        return Kt(T, ue);
      }
      function Mp(i, s) {
        for (var c = -1, f = i.length, y = 0, T = []; ++c < f; ) {
          var A = i[c], W = s ? s(A) : A;
          if (!c || !Wn(W, G)) {
            var G = W;
            T[y++] = A === 0 ? 0 : A;
          }
        }
        return T;
      }
      function Np(i) {
        return typeof i == "number" ? i : xn(i) ? M : +i;
      }
      function yn(i) {
        if (typeof i == "string")
          return i;
        if (Ve(i))
          return Ot(i, yn) + "";
        if (xn(i))
          return fp ? fp.call(i) : "";
        var s = i + "";
        return s == "0" && 1 / i == -1 / 0 ? "-0" : s;
      }
      function Ar(i, s, c) {
        var f = -1, y = mo, T = i.length, A = !0, W = [], G = W;
        if (c)
          A = !1, y = Pl;
        else if (T >= a) {
          var de = s ? null : p1(i);
          if (de)
            return vo(de);
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
      function nu(i, s) {
        return s = Ir(s, i), i = lh(i, s), i == null || delete i[Zn(An(s))];
      }
      function jp(i, s, c, f) {
        return Sa(i, s, c(ai(i, s)), f);
      }
      function $o(i, s, c, f) {
        for (var y = i.length, T = f ? y : -1; (f ? T-- : ++T < y) && s(i[T], T, i); )
          ;
        return c ? Pn(i, f ? 0 : T, f ? T + 1 : y) : Pn(i, f ? T + 1 : 0, f ? y : T);
      }
      function Rp(i, s) {
        var c = i;
        return c instanceof Xe && (c = c.value()), Al(s, function(f, y) {
          return y.func.apply(y.thisArg, Sr([f], y.args));
        }, c);
      }
      function ru(i, s, c) {
        var f = i.length;
        if (f < 2)
          return f ? Ar(i[0]) : [];
        for (var y = -1, T = ie(f); ++y < f; )
          for (var A = i[y], W = -1; ++W < f; )
            W != y && (T[y] = Ca(T[y] || A, i[W], s, c));
        return Ar(Ht(T, 1), s, c);
      }
      function $p(i, s, c) {
        for (var f = -1, y = i.length, T = s.length, A = {}; ++f < y; ) {
          var W = f < T ? s[f] : n;
          c(A, i[f], W);
        }
        return A;
      }
      function iu(i) {
        return It(i) ? i : [];
      }
      function au(i) {
        return typeof i == "function" ? i : ln;
      }
      function Ir(i, s) {
        return Ve(i) ? i : hu(i, s) ? [i] : fh(at(i));
      }
      var r1 = Ye;
      function Mr(i, s, c) {
        var f = i.length;
        return c = c === n ? f : c, !s && c >= f ? i : Pn(i, s, c);
      }
      var Fp = H_ || function(i) {
        return Bt.clearTimeout(i);
      };
      function Lp(i, s) {
        if (s)
          return i.slice();
        var c = i.length, f = op ? op(c) : new i.constructor(c);
        return i.copy(f), f;
      }
      function ou(i) {
        var s = new i.constructor(i.byteLength);
        return new Eo(s).set(new Eo(i)), s;
      }
      function i1(i, s) {
        var c = s ? ou(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.byteLength);
      }
      function a1(i) {
        var s = new i.constructor(i.source, _f.exec(i));
        return s.lastIndex = i.lastIndex, s;
      }
      function o1(i) {
        return _a ? gt(_a.call(i)) : {};
      }
      function Wp(i, s) {
        var c = s ? ou(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.length);
      }
      function Vp(i, s) {
        if (i !== s) {
          var c = i !== n, f = i === null, y = i === i, T = xn(i), A = s !== n, W = s === null, G = s === s, de = xn(s);
          if (!W && !de && !T && i > s || T && A && G && !W && !de || f && A && G || !c && G || !y)
            return 1;
          if (!f && !T && !de && i < s || de && c && y && !f && !T || W && c && y || !A && y || !G)
            return -1;
        }
        return 0;
      }
      function s1(i, s, c) {
        for (var f = -1, y = i.criteria, T = s.criteria, A = y.length, W = c.length; ++f < A; ) {
          var G = Vp(y[f], T[f]);
          if (G) {
            if (f >= W)
              return G;
            var de = c[f];
            return G * (de == "desc" ? -1 : 1);
          }
        }
        return i.index - s.index;
      }
      function zp(i, s, c, f) {
        for (var y = -1, T = i.length, A = c.length, W = -1, G = s.length, de = Lt(T - A, 0), pe = ie(G + de), me = !f; ++W < G; )
          pe[W] = s[W];
        for (; ++y < A; )
          (me || y < T) && (pe[c[y]] = i[y]);
        for (; de--; )
          pe[W++] = i[y++];
        return pe;
      }
      function Bp(i, s, c, f) {
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
      function l1(i, s) {
        return Xn(i, pu(i), s);
      }
      function u1(i, s) {
        return Xn(i, nh(i), s);
      }
      function Fo(i, s) {
        return function(c, f) {
          var y = Ve(c) ? h_ : A0, T = s ? s() : {};
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
      function Hp(i, s) {
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
      function Up(i) {
        return function(s, c, f) {
          for (var y = -1, T = gt(s), A = f(s), W = A.length; W--; ) {
            var G = A[i ? W : ++y];
            if (c(T[G], G, T) === !1)
              break;
          }
          return s;
        };
      }
      function c1(i, s, c) {
        var f = s & w, y = Da(i);
        function T() {
          var A = this && this !== Bt && this instanceof T ? y : i;
          return A.apply(f ? c : this, arguments);
        }
        return T;
      }
      function Yp(i) {
        return function(s) {
          s = at(s);
          var c = Di(s) ? Fn(s) : n, f = c ? c[0] : s.charAt(0), y = c ? Mr(c, 1).join("") : s.slice(1);
          return f[i]() + y;
        };
      }
      function Ri(i) {
        return function(s) {
          return Al(Hh(Bh(s).replace(e_, "")), i, "");
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
      function d1(i, s, c) {
        var f = Da(i);
        function y() {
          for (var T = arguments.length, A = ie(T), W = T, G = $i(y); W--; )
            A[W] = arguments[W];
          var de = T < 3 && A[0] !== G && A[T - 1] !== G ? [] : Dr(A, G);
          if (T -= de.length, T < c)
            return Zp(
              i,
              s,
              Lo,
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
      function qp(i) {
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
      function Kp(i) {
        return pr(function(s) {
          var c = s.length, f = c, y = Dn.prototype.thru;
          for (i && s.reverse(); f--; ) {
            var T = s[f];
            if (typeof T != "function")
              throw new Sn(l);
            if (y && !A && Bo(T) == "wrapper")
              var A = new Dn([], !0);
          }
          for (f = A ? f : c; ++f < c; ) {
            T = s[f];
            var W = Bo(T), G = W == "wrapper" ? du(T) : n;
            G && mu(G[0]) && G[1] == (ee | k | O | ne) && !G[4].length && G[9] == 1 ? A = A[Bo(G[0])].apply(A, G[3]) : A = T.length == 1 && mu(T) ? A[W]() : A.thru(T);
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
      function Lo(i, s, c, f, y, T, A, W, G, de) {
        var pe = s & ee, me = s & w, Te = s & P, De = s & (k | D), Ie = s & V, He = Te ? n : Da(i);
        function Me() {
          for (var Ge = arguments.length, Je = ie(Ge), bn = Ge; bn--; )
            Je[bn] = arguments[bn];
          if (De)
            var Qt = $i(Me), wn = E_(Je, Qt);
          if (f && (Je = zp(Je, f, y, De)), T && (Je = Bp(Je, T, A, De)), Ge -= wn, De && Ge < de) {
            var Mt = Dr(Je, Qt);
            return Zp(
              i,
              s,
              Lo,
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
          return Ge = Je.length, W ? Je = A1(Je, W) : Ie && Ge > 1 && Je.reverse(), pe && G < Ge && (Je.length = G), this && this !== Bt && this instanceof Me && (vr = He || Da(vr)), vr.apply(Vn, Je);
        }
        return Me;
      }
      function Gp(i, s) {
        return function(c, f) {
          return L0(c, i, s(f), {});
        };
      }
      function Wo(i, s) {
        return function(c, f) {
          var y;
          if (c === n && f === n)
            return s;
          if (c !== n && (y = c), f !== n) {
            if (y === n)
              return f;
            typeof c == "string" || typeof f == "string" ? (c = yn(c), f = yn(f)) : (c = Np(c), f = Np(f)), y = i(c, f);
          }
          return y;
        };
      }
      function su(i) {
        return pr(function(s) {
          return s = Ot(s, vn(Ae())), Ye(function(c) {
            var f = this;
            return i(s, function(y) {
              return gn(y, f, c);
            });
          });
        });
      }
      function Vo(i, s) {
        s = s === n ? " " : yn(s);
        var c = s.length;
        if (c < 2)
          return c ? eu(s, i) : s;
        var f = eu(s, So(i / ki(s)));
        return Di(s) ? Mr(Fn(f), 0, i).join("") : f.slice(0, i);
      }
      function f1(i, s, c, f) {
        var y = s & w, T = Da(i);
        function A() {
          for (var W = -1, G = arguments.length, de = -1, pe = f.length, me = ie(pe + G), Te = this && this !== Bt && this instanceof A ? T : i; ++de < pe; )
            me[de] = f[de];
          for (; G--; )
            me[de++] = arguments[++W];
          return gn(Te, y ? c : this, me);
        }
        return A;
      }
      function Xp(i) {
        return function(s, c, f) {
          return f && typeof f != "number" && Jt(s, c, f) && (c = f = n), s = gr(s), c === n ? (c = s, s = 0) : c = gr(c), f = f === n ? s < c ? 1 : -1 : gr(f), Z0(s, c, f, i);
        };
      }
      function zo(i) {
        return function(s, c) {
          return typeof s == "string" && typeof c == "string" || (s = In(s), c = In(c)), i(s, c);
        };
      }
      function Zp(i, s, c, f, y, T, A, W, G, de) {
        var pe = s & k, me = pe ? A : n, Te = pe ? n : A, De = pe ? T : n, Ie = pe ? n : T;
        s |= pe ? O : Q, s &= ~(pe ? Q : O), s & C || (s &= -4);
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
        return mu(i) && uh(Me, He), Me.placeholder = f, ch(Me, i, s);
      }
      function lu(i) {
        var s = Ft[i];
        return function(c, f) {
          if (c = In(c), f = f == null ? 0 : Kt(ze(f), 292), f && cp(c)) {
            var y = (at(c) + "e").split("e"), T = s(y[0] + "e" + (+y[1] + f));
            return y = (at(T) + "e").split("e"), +(y[0] + "e" + (+y[1] - f));
          }
          return s(c);
        };
      }
      var p1 = Ii && 1 / vo(new Ii([, -0]))[1] == j ? function(i) {
        return new Ii(i);
      } : Pu;
      function Jp(i) {
        return function(s) {
          var c = Gt(s);
          return c == ve ? Fl(s) : c == m ? P_(s) : __(s, i(s));
        };
      }
      function fr(i, s, c, f, y, T, A, W) {
        var G = s & P;
        if (!G && typeof i != "function")
          throw new Sn(l);
        var de = f ? f.length : 0;
        if (de || (s &= -97, f = y = n), A = A === n ? A : Lt(ze(A), 0), W = W === n ? W : ze(W), de -= y ? y.length : 0, s & Q) {
          var pe = f, me = y;
          f = y = n;
        }
        var Te = G ? n : du(i), De = [
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
        if (Te && D1(De, Te), i = De[0], s = De[1], c = De[2], f = De[3], y = De[4], W = De[9] = De[9] === n ? G ? 0 : i.length : Lt(De[9] - de, 0), !W && s & (k | D) && (s &= -25), !s || s == w)
          var Ie = c1(i, s, c);
        else s == k || s == D ? Ie = d1(i, s, W) : (s == O || s == (w | O)) && !y.length ? Ie = f1(i, s, c, f) : Ie = Lo.apply(n, De);
        var He = Te ? Ip : uh;
        return ch(He(Ie, De), i, s);
      }
      function Qp(i, s, c, f) {
        return i === n || Wn(i, Ai[c]) && !dt.call(f, c) ? s : i;
      }
      function eh(i, s, c, f, y, T) {
        return St(i) && St(s) && (T.set(s, i), jo(i, s, n, eh, T), T.delete(s)), i;
      }
      function h1(i) {
        return Aa(i) ? n : i;
      }
      function th(i, s, c, f, y, T) {
        var A = c & S, W = i.length, G = s.length;
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
            if (!Il(s, function(Ge, Je) {
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
      function m1(i, s, c, f, y, T, A) {
        switch (c) {
          case Ne:
            if (i.byteLength != s.byteLength || i.byteOffset != s.byteOffset)
              return !1;
            i = i.buffer, s = s.buffer;
          case oe:
            return !(i.byteLength != s.byteLength || !T(new Eo(i), new Eo(s)));
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
            var W = Fl;
          case m:
            var G = f & S;
            if (W || (W = vo), i.size != s.size && !G)
              return !1;
            var de = A.get(i);
            if (de)
              return de == s;
            f |= _, A.set(i, s);
            var pe = th(W(i), W(s), f, y, T, A);
            return A.delete(i), pe;
          case $:
            if (_a)
              return _a.call(i) == _a.call(s);
        }
        return !1;
      }
      function g1(i, s, c, f, y, T) {
        var A = c & S, W = uu(i), G = W.length, de = uu(s), pe = de.length;
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
        return vu(sh(i, n, gh), i + "");
      }
      function uu(i) {
        return wp(i, Vt, pu);
      }
      function cu(i) {
        return wp(i, sn, nh);
      }
      var du = ko ? function(i) {
        return ko.get(i);
      } : Pu;
      function Bo(i) {
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
        var i = E.iteratee || Du;
        return i = i === Du ? Cp : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Ho(i, s) {
        var c = i.__data__;
        return C1(s) ? c[typeof s == "string" ? "string" : "hash"] : c.map;
      }
      function fu(i) {
        for (var s = Vt(i), c = s.length; c--; ) {
          var f = s[c], y = i[f];
          s[c] = [f, y, ah(y)];
        }
        return s;
      }
      function oi(i, s) {
        var c = S_(i, s);
        return Ep(c) ? c : n;
      }
      function v1(i) {
        var s = dt.call(i, ti), c = i[ti];
        try {
          i[ti] = n;
          var f = !0;
        } catch {
        }
        var y = wo.call(i);
        return f && (s ? i[ti] = c : delete i[ti]), y;
      }
      var pu = Wl ? function(i) {
        return i == null ? [] : (i = gt(i), Or(Wl(i), function(s) {
          return lp.call(i, s);
        }));
      } : Au, nh = Wl ? function(i) {
        for (var s = []; i; )
          Sr(s, pu(i)), i = Co(i);
        return s;
      } : Au, Gt = Zt;
      (Vl && Gt(new Vl(new ArrayBuffer(1))) != Ne || xa && Gt(new xa()) != ve || zl && Gt(zl.resolve()) != N || Ii && Gt(new Ii()) != m || ba && Gt(new ba()) != ae) && (Gt = function(i) {
        var s = Zt(i), c = s == Ke ? i.constructor : n, f = c ? si(c) : "";
        if (f)
          switch (f) {
            case Q_:
              return Ne;
            case e0:
              return ve;
            case t0:
              return N;
            case n0:
              return m;
            case r0:
              return ae;
          }
        return s;
      });
      function y1(i, s, c) {
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
      function x1(i) {
        var s = i.match(Tw);
        return s ? s[1].split(Ow) : [];
      }
      function rh(i, s, c) {
        s = Ir(s, i);
        for (var f = -1, y = s.length, T = !1; ++f < y; ) {
          var A = Zn(s[f]);
          if (!(T = i != null && c(i, A)))
            break;
          i = i[A];
        }
        return T || ++f != y ? T : (y = i == null ? 0 : i.length, !!y && Zo(y) && hr(A, y) && (Ve(i) || li(i)));
      }
      function b1(i) {
        var s = i.length, c = new i.constructor(s);
        return s && typeof i[0] == "string" && dt.call(i, "index") && (c.index = i.index, c.input = i.input), c;
      }
      function ih(i) {
        return typeof i.constructor == "function" && !ka(i) ? Ni(Co(i)) : {};
      }
      function w1(i, s, c) {
        var f = i.constructor;
        switch (s) {
          case oe:
            return ou(i);
          case we:
          case Ce:
            return new f(+i);
          case Ne:
            return i1(i, c);
          case wt:
          case Fe:
          case mt:
          case At:
          case pt:
          case Rt:
          case it:
          case Jr:
          case Qr:
            return Wp(i, c);
          case ve:
            return new f();
          case et:
          case F:
            return new f(i);
          case re:
            return a1(i);
          case m:
            return new f();
          case $:
            return o1(i);
        }
      }
      function _1(i, s) {
        var c = s.length;
        if (!c)
          return i;
        var f = c - 1;
        return s[f] = (c > 1 ? "& " : "") + s[f], s = s.join(c > 2 ? ", " : " "), i.replace(Cw, `{
/* [wrapped with ` + s + `] */
`);
      }
      function E1(i) {
        return Ve(i) || li(i) || !!(up && i && i[up]);
      }
      function hr(i, s) {
        var c = typeof i;
        return s = s ?? I, !!s && (c == "number" || c != "symbol" && jw.test(i)) && i > -1 && i % 1 == 0 && i < s;
      }
      function Jt(i, s, c) {
        if (!St(c))
          return !1;
        var f = typeof s;
        return (f == "number" ? on(c) && hr(s, c.length) : f == "string" && s in c) ? Wn(c[s], i) : !1;
      }
      function hu(i, s) {
        if (Ve(i))
          return !1;
        var c = typeof i;
        return c == "number" || c == "symbol" || c == "boolean" || i == null || xn(i) ? !0 : bw.test(i) || !xw.test(i) || s != null && i in gt(s);
      }
      function C1(i) {
        var s = typeof i;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? i !== "__proto__" : i === null;
      }
      function mu(i) {
        var s = Bo(i), c = E[s];
        if (typeof c != "function" || !(s in Xe.prototype))
          return !1;
        if (i === c)
          return !0;
        var f = du(c);
        return !!f && i === f[0];
      }
      function T1(i) {
        return !!ap && ap in i;
      }
      var O1 = xo ? mr : Iu;
      function ka(i) {
        var s = i && i.constructor, c = typeof s == "function" && s.prototype || Ai;
        return i === c;
      }
      function ah(i) {
        return i === i && !St(i);
      }
      function oh(i, s) {
        return function(c) {
          return c == null ? !1 : c[i] === s && (s !== n || i in gt(c));
        };
      }
      function S1(i) {
        var s = Go(i, function(f) {
          return c.size === p && c.clear(), f;
        }), c = s.cache;
        return s;
      }
      function D1(i, s) {
        var c = i[1], f = s[1], y = c | f, T = y < (w | P | ee), A = f == ee && c == k || f == ee && c == ne && i[7].length <= s[8] || f == (ee | ne) && s[7].length <= s[8] && c == k;
        if (!(T || A))
          return i;
        f & w && (i[2] = s[2], y |= c & w ? 0 : C);
        var W = s[3];
        if (W) {
          var G = i[3];
          i[3] = G ? zp(G, W, s[4]) : W, i[4] = G ? Dr(i[3], h) : s[4];
        }
        return W = s[5], W && (G = i[5], i[5] = G ? Bp(G, W, s[6]) : W, i[6] = G ? Dr(i[5], h) : s[6]), W = s[7], W && (i[7] = W), f & ee && (i[8] = i[8] == null ? s[8] : Kt(i[8], s[8])), i[9] == null && (i[9] = s[9]), i[0] = s[0], i[1] = y, i;
      }
      function k1(i) {
        var s = [];
        if (i != null)
          for (var c in gt(i))
            s.push(c);
        return s;
      }
      function P1(i) {
        return wo.call(i);
      }
      function sh(i, s, c) {
        return s = Lt(s === n ? i.length - 1 : s, 0), function() {
          for (var f = arguments, y = -1, T = Lt(f.length - s, 0), A = ie(T); ++y < T; )
            A[y] = f[s + y];
          y = -1;
          for (var W = ie(s + 1); ++y < s; )
            W[y] = f[y];
          return W[s] = c(A), gn(i, this, W);
        };
      }
      function lh(i, s) {
        return s.length < 2 ? i : ai(i, Pn(s, 0, -1));
      }
      function A1(i, s) {
        for (var c = i.length, f = Kt(s.length, c), y = an(i); f--; ) {
          var T = s[f];
          i[f] = hr(T, c) ? y[T] : n;
        }
        return i;
      }
      function gu(i, s) {
        if (!(s === "constructor" && typeof i[s] == "function") && s != "__proto__")
          return i[s];
      }
      var uh = dh(Ip), Pa = Y_ || function(i, s) {
        return Bt.setTimeout(i, s);
      }, vu = dh(e1);
      function ch(i, s, c) {
        var f = s + "";
        return vu(i, _1(f, I1(x1(f), c)));
      }
      function dh(i) {
        var s = 0, c = 0;
        return function() {
          var f = X_(), y = H - (f - c);
          if (c = f, y > 0) {
            if (++s >= R)
              return arguments[0];
          } else
            s = 0;
          return i.apply(n, arguments);
        };
      }
      function Uo(i, s) {
        var c = -1, f = i.length, y = f - 1;
        for (s = s === n ? f : s; ++c < s; ) {
          var T = Ql(c, y), A = i[T];
          i[T] = i[c], i[c] = A;
        }
        return i.length = s, i;
      }
      var fh = S1(function(i) {
        var s = [];
        return i.charCodeAt(0) === 46 && s.push(""), i.replace(ww, function(c, f, y, T) {
          s.push(y ? T.replace(kw, "$1") : f || c);
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
            return bo.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function I1(i, s) {
        return On(ce, function(c) {
          var f = "_." + c[0];
          s & c[1] && !mo(i, f) && i.push(f);
        }), i.sort();
      }
      function ph(i) {
        if (i instanceof Xe)
          return i.clone();
        var s = new Dn(i.__wrapped__, i.__chain__);
        return s.__actions__ = an(i.__actions__), s.__index__ = i.__index__, s.__values__ = i.__values__, s;
      }
      function M1(i, s, c) {
        (c ? Jt(i, s, c) : s === n) ? s = 1 : s = Lt(ze(s), 0);
        var f = i == null ? 0 : i.length;
        if (!f || s < 1)
          return [];
        for (var y = 0, T = 0, A = ie(So(f / s)); y < f; )
          A[T++] = Pn(i, y, y += s);
        return A;
      }
      function N1(i) {
        for (var s = -1, c = i == null ? 0 : i.length, f = 0, y = []; ++s < c; ) {
          var T = i[s];
          T && (y[f++] = T);
        }
        return y;
      }
      function j1() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var s = ie(i - 1), c = arguments[0], f = i; f--; )
          s[f - 1] = arguments[f];
        return Sr(Ve(c) ? an(c) : [c], Ht(s, 1));
      }
      var R1 = Ye(function(i, s) {
        return It(i) ? Ca(i, Ht(s, 1, It, !0)) : [];
      }), $1 = Ye(function(i, s) {
        var c = An(s);
        return It(c) && (c = n), It(i) ? Ca(i, Ht(s, 1, It, !0), Ae(c, 2)) : [];
      }), F1 = Ye(function(i, s) {
        var c = An(s);
        return It(c) && (c = n), It(i) ? Ca(i, Ht(s, 1, It, !0), n, c) : [];
      });
      function L1(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (s = c || s === n ? 1 : ze(s), Pn(i, s < 0 ? 0 : s, f)) : [];
      }
      function W1(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (s = c || s === n ? 1 : ze(s), s = f - s, Pn(i, 0, s < 0 ? 0 : s)) : [];
      }
      function V1(i, s) {
        return i && i.length ? $o(i, Ae(s, 3), !0, !0) : [];
      }
      function z1(i, s) {
        return i && i.length ? $o(i, Ae(s, 3), !0) : [];
      }
      function B1(i, s, c, f) {
        var y = i == null ? 0 : i.length;
        return y ? (c && typeof c != "number" && Jt(i, s, c) && (c = 0, f = y), j0(i, s, c, f)) : [];
      }
      function hh(i, s, c) {
        var f = i == null ? 0 : i.length;
        if (!f)
          return -1;
        var y = c == null ? 0 : ze(c);
        return y < 0 && (y = Lt(f + y, 0)), go(i, Ae(s, 3), y);
      }
      function mh(i, s, c) {
        var f = i == null ? 0 : i.length;
        if (!f)
          return -1;
        var y = f - 1;
        return c !== n && (y = ze(c), y = c < 0 ? Lt(f + y, 0) : Kt(y, f - 1)), go(i, Ae(s, 3), y, !0);
      }
      function gh(i) {
        var s = i == null ? 0 : i.length;
        return s ? Ht(i, 1) : [];
      }
      function H1(i) {
        var s = i == null ? 0 : i.length;
        return s ? Ht(i, j) : [];
      }
      function U1(i, s) {
        var c = i == null ? 0 : i.length;
        return c ? (s = s === n ? 1 : ze(s), Ht(i, s)) : [];
      }
      function Y1(i) {
        for (var s = -1, c = i == null ? 0 : i.length, f = {}; ++s < c; ) {
          var y = i[s];
          f[y[0]] = y[1];
        }
        return f;
      }
      function vh(i) {
        return i && i.length ? i[0] : n;
      }
      function q1(i, s, c) {
        var f = i == null ? 0 : i.length;
        if (!f)
          return -1;
        var y = c == null ? 0 : ze(c);
        return y < 0 && (y = Lt(f + y, 0)), Si(i, s, y);
      }
      function K1(i) {
        var s = i == null ? 0 : i.length;
        return s ? Pn(i, 0, -1) : [];
      }
      var G1 = Ye(function(i) {
        var s = Ot(i, iu);
        return s.length && s[0] === i[0] ? Kl(s) : [];
      }), X1 = Ye(function(i) {
        var s = An(i), c = Ot(i, iu);
        return s === An(c) ? s = n : c.pop(), c.length && c[0] === i[0] ? Kl(c, Ae(s, 2)) : [];
      }), Z1 = Ye(function(i) {
        var s = An(i), c = Ot(i, iu);
        return s = typeof s == "function" ? s : n, s && c.pop(), c.length && c[0] === i[0] ? Kl(c, n, s) : [];
      });
      function J1(i, s) {
        return i == null ? "" : K_.call(i, s);
      }
      function An(i) {
        var s = i == null ? 0 : i.length;
        return s ? i[s - 1] : n;
      }
      function Q1(i, s, c) {
        var f = i == null ? 0 : i.length;
        if (!f)
          return -1;
        var y = f;
        return c !== n && (y = ze(c), y = y < 0 ? Lt(f + y, 0) : Kt(y, f - 1)), s === s ? I_(i, s, y) : go(i, Zf, y, !0);
      }
      function eE(i, s) {
        return i && i.length ? Dp(i, ze(s)) : n;
      }
      var tE = Ye(yh);
      function yh(i, s) {
        return i && i.length && s && s.length ? Jl(i, s) : i;
      }
      function nE(i, s, c) {
        return i && i.length && s && s.length ? Jl(i, s, Ae(c, 2)) : i;
      }
      function rE(i, s, c) {
        return i && i.length && s && s.length ? Jl(i, s, n, c) : i;
      }
      var iE = pr(function(i, s) {
        var c = i == null ? 0 : i.length, f = Hl(i, s);
        return Ap(i, Ot(s, function(y) {
          return hr(y, c) ? +y : y;
        }).sort(Vp)), f;
      });
      function aE(i, s) {
        var c = [];
        if (!(i && i.length))
          return c;
        var f = -1, y = [], T = i.length;
        for (s = Ae(s, 3); ++f < T; ) {
          var A = i[f];
          s(A, f, i) && (c.push(A), y.push(f));
        }
        return Ap(i, y), c;
      }
      function yu(i) {
        return i == null ? i : J_.call(i);
      }
      function oE(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (c && typeof c != "number" && Jt(i, s, c) ? (s = 0, c = f) : (s = s == null ? 0 : ze(s), c = c === n ? f : ze(c)), Pn(i, s, c)) : [];
      }
      function sE(i, s) {
        return Ro(i, s);
      }
      function lE(i, s, c) {
        return tu(i, s, Ae(c, 2));
      }
      function uE(i, s) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var f = Ro(i, s);
          if (f < c && Wn(i[f], s))
            return f;
        }
        return -1;
      }
      function cE(i, s) {
        return Ro(i, s, !0);
      }
      function dE(i, s, c) {
        return tu(i, s, Ae(c, 2), !0);
      }
      function fE(i, s) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var f = Ro(i, s, !0) - 1;
          if (Wn(i[f], s))
            return f;
        }
        return -1;
      }
      function pE(i) {
        return i && i.length ? Mp(i) : [];
      }
      function hE(i, s) {
        return i && i.length ? Mp(i, Ae(s, 2)) : [];
      }
      function mE(i) {
        var s = i == null ? 0 : i.length;
        return s ? Pn(i, 1, s) : [];
      }
      function gE(i, s, c) {
        return i && i.length ? (s = c || s === n ? 1 : ze(s), Pn(i, 0, s < 0 ? 0 : s)) : [];
      }
      function vE(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (s = c || s === n ? 1 : ze(s), s = f - s, Pn(i, s < 0 ? 0 : s, f)) : [];
      }
      function yE(i, s) {
        return i && i.length ? $o(i, Ae(s, 3), !1, !0) : [];
      }
      function xE(i, s) {
        return i && i.length ? $o(i, Ae(s, 3)) : [];
      }
      var bE = Ye(function(i) {
        return Ar(Ht(i, 1, It, !0));
      }), wE = Ye(function(i) {
        var s = An(i);
        return It(s) && (s = n), Ar(Ht(i, 1, It, !0), Ae(s, 2));
      }), _E = Ye(function(i) {
        var s = An(i);
        return s = typeof s == "function" ? s : n, Ar(Ht(i, 1, It, !0), n, s);
      });
      function EE(i) {
        return i && i.length ? Ar(i) : [];
      }
      function CE(i, s) {
        return i && i.length ? Ar(i, Ae(s, 2)) : [];
      }
      function TE(i, s) {
        return s = typeof s == "function" ? s : n, i && i.length ? Ar(i, n, s) : [];
      }
      function xu(i) {
        if (!(i && i.length))
          return [];
        var s = 0;
        return i = Or(i, function(c) {
          if (It(c))
            return s = Lt(c.length, s), !0;
        }), Rl(s, function(c) {
          return Ot(i, Ml(c));
        });
      }
      function xh(i, s) {
        if (!(i && i.length))
          return [];
        var c = xu(i);
        return s == null ? c : Ot(c, function(f) {
          return gn(s, n, f);
        });
      }
      var OE = Ye(function(i, s) {
        return It(i) ? Ca(i, s) : [];
      }), SE = Ye(function(i) {
        return ru(Or(i, It));
      }), DE = Ye(function(i) {
        var s = An(i);
        return It(s) && (s = n), ru(Or(i, It), Ae(s, 2));
      }), kE = Ye(function(i) {
        var s = An(i);
        return s = typeof s == "function" ? s : n, ru(Or(i, It), n, s);
      }), PE = Ye(xu);
      function AE(i, s) {
        return $p(i || [], s || [], Ea);
      }
      function IE(i, s) {
        return $p(i || [], s || [], Sa);
      }
      var ME = Ye(function(i) {
        var s = i.length, c = s > 1 ? i[s - 1] : n;
        return c = typeof c == "function" ? (i.pop(), c) : n, xh(i, c);
      });
      function bh(i) {
        var s = E(i);
        return s.__chain__ = !0, s;
      }
      function NE(i, s) {
        return s(i), i;
      }
      function Yo(i, s) {
        return s(i);
      }
      var jE = pr(function(i) {
        var s = i.length, c = s ? i[0] : 0, f = this.__wrapped__, y = function(T) {
          return Hl(T, i);
        };
        return s > 1 || this.__actions__.length || !(f instanceof Xe) || !hr(c) ? this.thru(y) : (f = f.slice(c, +c + (s ? 1 : 0)), f.__actions__.push({
          func: Yo,
          args: [y],
          thisArg: n
        }), new Dn(f, this.__chain__).thru(function(T) {
          return s && !T.length && T.push(n), T;
        }));
      });
      function RE() {
        return bh(this);
      }
      function $E() {
        return new Dn(this.value(), this.__chain__);
      }
      function FE() {
        this.__values__ === n && (this.__values__ = Nh(this.value()));
        var i = this.__index__ >= this.__values__.length, s = i ? n : this.__values__[this.__index__++];
        return { done: i, value: s };
      }
      function LE() {
        return this;
      }
      function WE(i) {
        for (var s, c = this; c instanceof Ao; ) {
          var f = ph(c);
          f.__index__ = 0, f.__values__ = n, s ? y.__wrapped__ = f : s = f;
          var y = f;
          c = c.__wrapped__;
        }
        return y.__wrapped__ = i, s;
      }
      function VE() {
        var i = this.__wrapped__;
        if (i instanceof Xe) {
          var s = i;
          return this.__actions__.length && (s = new Xe(this)), s = s.reverse(), s.__actions__.push({
            func: Yo,
            args: [yu],
            thisArg: n
          }), new Dn(s, this.__chain__);
        }
        return this.thru(yu);
      }
      function zE() {
        return Rp(this.__wrapped__, this.__actions__);
      }
      var BE = Fo(function(i, s, c) {
        dt.call(i, c) ? ++i[c] : dr(i, c, 1);
      });
      function HE(i, s, c) {
        var f = Ve(i) ? Gf : N0;
        return c && Jt(i, s, c) && (s = n), f(i, Ae(s, 3));
      }
      function UE(i, s) {
        var c = Ve(i) ? Or : xp;
        return c(i, Ae(s, 3));
      }
      var YE = qp(hh), qE = qp(mh);
      function KE(i, s) {
        return Ht(qo(i, s), 1);
      }
      function GE(i, s) {
        return Ht(qo(i, s), j);
      }
      function XE(i, s, c) {
        return c = c === n ? 1 : ze(c), Ht(qo(i, s), c);
      }
      function wh(i, s) {
        var c = Ve(i) ? On : Pr;
        return c(i, Ae(s, 3));
      }
      function _h(i, s) {
        var c = Ve(i) ? m_ : yp;
        return c(i, Ae(s, 3));
      }
      var ZE = Fo(function(i, s, c) {
        dt.call(i, c) ? i[c].push(s) : dr(i, c, [s]);
      });
      function JE(i, s, c, f) {
        i = on(i) ? i : Li(i), c = c && !f ? ze(c) : 0;
        var y = i.length;
        return c < 0 && (c = Lt(y + c, 0)), Jo(i) ? c <= y && i.indexOf(s, c) > -1 : !!y && Si(i, s, c) > -1;
      }
      var QE = Ye(function(i, s, c) {
        var f = -1, y = typeof s == "function", T = on(i) ? ie(i.length) : [];
        return Pr(i, function(A) {
          T[++f] = y ? gn(s, A, c) : Ta(A, s, c);
        }), T;
      }), eC = Fo(function(i, s, c) {
        dr(i, c, s);
      });
      function qo(i, s) {
        var c = Ve(i) ? Ot : Tp;
        return c(i, Ae(s, 3));
      }
      function tC(i, s, c, f) {
        return i == null ? [] : (Ve(s) || (s = s == null ? [] : [s]), c = f ? n : c, Ve(c) || (c = c == null ? [] : [c]), kp(i, s, c));
      }
      var nC = Fo(function(i, s, c) {
        i[c ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function rC(i, s, c) {
        var f = Ve(i) ? Al : Qf, y = arguments.length < 3;
        return f(i, Ae(s, 4), c, y, Pr);
      }
      function iC(i, s, c) {
        var f = Ve(i) ? g_ : Qf, y = arguments.length < 3;
        return f(i, Ae(s, 4), c, y, yp);
      }
      function aC(i, s) {
        var c = Ve(i) ? Or : xp;
        return c(i, Xo(Ae(s, 3)));
      }
      function oC(i) {
        var s = Ve(i) ? hp : J0;
        return s(i);
      }
      function sC(i, s, c) {
        (c ? Jt(i, s, c) : s === n) ? s = 1 : s = ze(s);
        var f = Ve(i) ? k0 : Q0;
        return f(i, s);
      }
      function lC(i) {
        var s = Ve(i) ? P0 : t1;
        return s(i);
      }
      function uC(i) {
        if (i == null)
          return 0;
        if (on(i))
          return Jo(i) ? ki(i) : i.length;
        var s = Gt(i);
        return s == ve || s == m ? i.size : Xl(i).length;
      }
      function cC(i, s, c) {
        var f = Ve(i) ? Il : n1;
        return c && Jt(i, s, c) && (s = n), f(i, Ae(s, 3));
      }
      var dC = Ye(function(i, s) {
        if (i == null)
          return [];
        var c = s.length;
        return c > 1 && Jt(i, s[0], s[1]) ? s = [] : c > 2 && Jt(s[0], s[1], s[2]) && (s = [s[0]]), kp(i, Ht(s, 1), []);
      }), Ko = U_ || function() {
        return Bt.Date.now();
      };
      function fC(i, s) {
        if (typeof s != "function")
          throw new Sn(l);
        return i = ze(i), function() {
          if (--i < 1)
            return s.apply(this, arguments);
        };
      }
      function Eh(i, s, c) {
        return s = c ? n : s, s = i && s == null ? i.length : s, fr(i, ee, n, n, n, n, s);
      }
      function Ch(i, s) {
        var c;
        if (typeof s != "function")
          throw new Sn(l);
        return i = ze(i), function() {
          return --i > 0 && (c = s.apply(this, arguments)), i <= 1 && (s = n), c;
        };
      }
      var bu = Ye(function(i, s, c) {
        var f = w;
        if (c.length) {
          var y = Dr(c, $i(bu));
          f |= O;
        }
        return fr(i, f, s, c, y);
      }), Th = Ye(function(i, s, c) {
        var f = w | P;
        if (c.length) {
          var y = Dr(c, $i(Th));
          f |= O;
        }
        return fr(s, f, i, c, y);
      });
      function Oh(i, s, c) {
        s = c ? n : s;
        var f = fr(i, k, n, n, n, n, n, s);
        return f.placeholder = Oh.placeholder, f;
      }
      function Sh(i, s, c) {
        s = c ? n : s;
        var f = fr(i, D, n, n, n, n, n, s);
        return f.placeholder = Sh.placeholder, f;
      }
      function Dh(i, s, c) {
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
          var Vn = Mt - G, vr = Mt - de, qh = s - Vn;
          return me ? Kt(qh, T - vr) : qh;
        }
        function Me(Mt) {
          var Vn = Mt - G, vr = Mt - de;
          return G === n || Vn >= s || Vn < 0 || me && vr >= T;
        }
        function Ge() {
          var Mt = Ko();
          if (Me(Mt))
            return Je(Mt);
          W = Pa(Ge, He(Mt));
        }
        function Je(Mt) {
          return W = n, Te && f ? De(Mt) : (f = y = n, A);
        }
        function bn() {
          W !== n && Fp(W), de = 0, f = G = y = W = n;
        }
        function Qt() {
          return W === n ? A : Je(Ko());
        }
        function wn() {
          var Mt = Ko(), Vn = Me(Mt);
          if (f = arguments, y = this, G = Mt, Vn) {
            if (W === n)
              return Ie(G);
            if (me)
              return Fp(W), W = Pa(Ge, s), De(G);
          }
          return W === n && (W = Pa(Ge, s)), A;
        }
        return wn.cancel = bn, wn.flush = Qt, wn;
      }
      var pC = Ye(function(i, s) {
        return vp(i, 1, s);
      }), hC = Ye(function(i, s, c) {
        return vp(i, In(s) || 0, c);
      });
      function mC(i) {
        return fr(i, V);
      }
      function Go(i, s) {
        if (typeof i != "function" || s != null && typeof s != "function")
          throw new Sn(l);
        var c = function() {
          var f = arguments, y = s ? s.apply(this, f) : f[0], T = c.cache;
          if (T.has(y))
            return T.get(y);
          var A = i.apply(this, f);
          return c.cache = T.set(y, A) || T, A;
        };
        return c.cache = new (Go.Cache || cr)(), c;
      }
      Go.Cache = cr;
      function Xo(i) {
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
      function gC(i) {
        return Ch(2, i);
      }
      var vC = r1(function(i, s) {
        s = s.length == 1 && Ve(s[0]) ? Ot(s[0], vn(Ae())) : Ot(Ht(s, 1), vn(Ae()));
        var c = s.length;
        return Ye(function(f) {
          for (var y = -1, T = Kt(f.length, c); ++y < T; )
            f[y] = s[y].call(this, f[y]);
          return gn(i, this, f);
        });
      }), wu = Ye(function(i, s) {
        var c = Dr(s, $i(wu));
        return fr(i, O, n, s, c);
      }), kh = Ye(function(i, s) {
        var c = Dr(s, $i(kh));
        return fr(i, Q, n, s, c);
      }), yC = pr(function(i, s) {
        return fr(i, ne, n, n, n, s);
      });
      function xC(i, s) {
        if (typeof i != "function")
          throw new Sn(l);
        return s = s === n ? s : ze(s), Ye(i, s);
      }
      function bC(i, s) {
        if (typeof i != "function")
          throw new Sn(l);
        return s = s == null ? 0 : Lt(ze(s), 0), Ye(function(c) {
          var f = c[s], y = Mr(c, 0, s);
          return f && Sr(y, f), gn(i, this, y);
        });
      }
      function wC(i, s, c) {
        var f = !0, y = !0;
        if (typeof i != "function")
          throw new Sn(l);
        return St(c) && (f = "leading" in c ? !!c.leading : f, y = "trailing" in c ? !!c.trailing : y), Dh(i, s, {
          leading: f,
          maxWait: s,
          trailing: y
        });
      }
      function _C(i) {
        return Eh(i, 1);
      }
      function EC(i, s) {
        return wu(au(s), i);
      }
      function CC() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Ve(i) ? i : [i];
      }
      function TC(i) {
        return kn(i, b);
      }
      function OC(i, s) {
        return s = typeof s == "function" ? s : n, kn(i, b, s);
      }
      function SC(i) {
        return kn(i, g | b);
      }
      function DC(i, s) {
        return s = typeof s == "function" ? s : n, kn(i, g | b, s);
      }
      function kC(i, s) {
        return s == null || gp(i, s, Vt(s));
      }
      function Wn(i, s) {
        return i === s || i !== i && s !== s;
      }
      var PC = zo(ql), AC = zo(function(i, s) {
        return i >= s;
      }), li = _p(/* @__PURE__ */ function() {
        return arguments;
      }()) ? _p : function(i) {
        return kt(i) && dt.call(i, "callee") && !lp.call(i, "callee");
      }, Ve = ie.isArray, IC = Bf ? vn(Bf) : W0;
      function on(i) {
        return i != null && Zo(i.length) && !mr(i);
      }
      function It(i) {
        return kt(i) && on(i);
      }
      function MC(i) {
        return i === !0 || i === !1 || kt(i) && Zt(i) == we;
      }
      var Nr = q_ || Iu, NC = Hf ? vn(Hf) : V0;
      function jC(i) {
        return kt(i) && i.nodeType === 1 && !Aa(i);
      }
      function RC(i) {
        if (i == null)
          return !0;
        if (on(i) && (Ve(i) || typeof i == "string" || typeof i.splice == "function" || Nr(i) || Fi(i) || li(i)))
          return !i.length;
        var s = Gt(i);
        if (s == ve || s == m)
          return !i.size;
        if (ka(i))
          return !Xl(i).length;
        for (var c in i)
          if (dt.call(i, c))
            return !1;
        return !0;
      }
      function $C(i, s) {
        return Oa(i, s);
      }
      function FC(i, s, c) {
        c = typeof c == "function" ? c : n;
        var f = c ? c(i, s) : n;
        return f === n ? Oa(i, s, n, c) : !!f;
      }
      function _u(i) {
        if (!kt(i))
          return !1;
        var s = Zt(i);
        return s == Se || s == _e || typeof i.message == "string" && typeof i.name == "string" && !Aa(i);
      }
      function LC(i) {
        return typeof i == "number" && cp(i);
      }
      function mr(i) {
        if (!St(i))
          return !1;
        var s = Zt(i);
        return s == fe || s == Re || s == be || s == Z;
      }
      function Ph(i) {
        return typeof i == "number" && i == ze(i);
      }
      function Zo(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= I;
      }
      function St(i) {
        var s = typeof i;
        return i != null && (s == "object" || s == "function");
      }
      function kt(i) {
        return i != null && typeof i == "object";
      }
      var Ah = Uf ? vn(Uf) : B0;
      function WC(i, s) {
        return i === s || Gl(i, s, fu(s));
      }
      function VC(i, s, c) {
        return c = typeof c == "function" ? c : n, Gl(i, s, fu(s), c);
      }
      function zC(i) {
        return Ih(i) && i != +i;
      }
      function BC(i) {
        if (O1(i))
          throw new Le(o);
        return Ep(i);
      }
      function HC(i) {
        return i === null;
      }
      function UC(i) {
        return i == null;
      }
      function Ih(i) {
        return typeof i == "number" || kt(i) && Zt(i) == et;
      }
      function Aa(i) {
        if (!kt(i) || Zt(i) != Ke)
          return !1;
        var s = Co(i);
        if (s === null)
          return !0;
        var c = dt.call(s, "constructor") && s.constructor;
        return typeof c == "function" && c instanceof c && bo.call(c) == V_;
      }
      var Eu = Yf ? vn(Yf) : H0;
      function YC(i) {
        return Ph(i) && i >= -9007199254740991 && i <= I;
      }
      var Mh = qf ? vn(qf) : U0;
      function Jo(i) {
        return typeof i == "string" || !Ve(i) && kt(i) && Zt(i) == F;
      }
      function xn(i) {
        return typeof i == "symbol" || kt(i) && Zt(i) == $;
      }
      var Fi = Kf ? vn(Kf) : Y0;
      function qC(i) {
        return i === n;
      }
      function KC(i) {
        return kt(i) && Gt(i) == ae;
      }
      function GC(i) {
        return kt(i) && Zt(i) == xe;
      }
      var XC = zo(Zl), ZC = zo(function(i, s) {
        return i <= s;
      });
      function Nh(i) {
        if (!i)
          return [];
        if (on(i))
          return Jo(i) ? Fn(i) : an(i);
        if (ya && i[ya])
          return k_(i[ya]());
        var s = Gt(i), c = s == ve ? Fl : s == m ? vo : Li;
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
      function jh(i) {
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
        i = ep(i);
        var c = Iw.test(i);
        return c || Nw.test(i) ? f_(i.slice(2), c ? 2 : 8) : Aw.test(i) ? M : +i;
      }
      function Rh(i) {
        return Xn(i, sn(i));
      }
      function JC(i) {
        return i ? ii(ze(i), -9007199254740991, I) : i === 0 ? i : 0;
      }
      function at(i) {
        return i == null ? "" : yn(i);
      }
      var QC = ji(function(i, s) {
        if (ka(s) || on(s)) {
          Xn(s, Vt(s), i);
          return;
        }
        for (var c in s)
          dt.call(s, c) && Ea(i, c, s[c]);
      }), $h = ji(function(i, s) {
        Xn(s, sn(s), i);
      }), Qo = ji(function(i, s, c, f) {
        Xn(s, sn(s), i, f);
      }), eT = ji(function(i, s, c, f) {
        Xn(s, Vt(s), i, f);
      }), tT = pr(Hl);
      function nT(i, s) {
        var c = Ni(i);
        return s == null ? c : mp(c, s);
      }
      var rT = Ye(function(i, s) {
        i = gt(i);
        var c = -1, f = s.length, y = f > 2 ? s[2] : n;
        for (y && Jt(s[0], s[1], y) && (f = 1); ++c < f; )
          for (var T = s[c], A = sn(T), W = -1, G = A.length; ++W < G; ) {
            var de = A[W], pe = i[de];
            (pe === n || Wn(pe, Ai[de]) && !dt.call(i, de)) && (i[de] = T[de]);
          }
        return i;
      }), iT = Ye(function(i) {
        return i.push(n, eh), gn(Fh, n, i);
      });
      function aT(i, s) {
        return Xf(i, Ae(s, 3), Gn);
      }
      function oT(i, s) {
        return Xf(i, Ae(s, 3), Yl);
      }
      function sT(i, s) {
        return i == null ? i : Ul(i, Ae(s, 3), sn);
      }
      function lT(i, s) {
        return i == null ? i : bp(i, Ae(s, 3), sn);
      }
      function uT(i, s) {
        return i && Gn(i, Ae(s, 3));
      }
      function cT(i, s) {
        return i && Yl(i, Ae(s, 3));
      }
      function dT(i) {
        return i == null ? [] : No(i, Vt(i));
      }
      function fT(i) {
        return i == null ? [] : No(i, sn(i));
      }
      function Cu(i, s, c) {
        var f = i == null ? n : ai(i, s);
        return f === n ? c : f;
      }
      function pT(i, s) {
        return i != null && rh(i, s, R0);
      }
      function Tu(i, s) {
        return i != null && rh(i, s, $0);
      }
      var hT = Gp(function(i, s, c) {
        s != null && typeof s.toString != "function" && (s = wo.call(s)), i[s] = c;
      }, Su(ln)), mT = Gp(function(i, s, c) {
        s != null && typeof s.toString != "function" && (s = wo.call(s)), dt.call(i, s) ? i[s].push(c) : i[s] = [c];
      }, Ae), gT = Ye(Ta);
      function Vt(i) {
        return on(i) ? pp(i) : Xl(i);
      }
      function sn(i) {
        return on(i) ? pp(i, !0) : q0(i);
      }
      function vT(i, s) {
        var c = {};
        return s = Ae(s, 3), Gn(i, function(f, y, T) {
          dr(c, s(f, y, T), f);
        }), c;
      }
      function yT(i, s) {
        var c = {};
        return s = Ae(s, 3), Gn(i, function(f, y, T) {
          dr(c, y, s(f, y, T));
        }), c;
      }
      var xT = ji(function(i, s, c) {
        jo(i, s, c);
      }), Fh = ji(function(i, s, c, f) {
        jo(i, s, c, f);
      }), bT = pr(function(i, s) {
        var c = {};
        if (i == null)
          return c;
        var f = !1;
        s = Ot(s, function(T) {
          return T = Ir(T, i), f || (f = T.length > 1), T;
        }), Xn(i, cu(i), c), f && (c = kn(c, g | x | b, h1));
        for (var y = s.length; y--; )
          nu(c, s[y]);
        return c;
      });
      function wT(i, s) {
        return Lh(i, Xo(Ae(s)));
      }
      var _T = pr(function(i, s) {
        return i == null ? {} : G0(i, s);
      });
      function Lh(i, s) {
        if (i == null)
          return {};
        var c = Ot(cu(i), function(f) {
          return [f];
        });
        return s = Ae(s), Pp(i, c, function(f, y) {
          return s(f, y[0]);
        });
      }
      function ET(i, s, c) {
        s = Ir(s, i);
        var f = -1, y = s.length;
        for (y || (y = 1, i = n); ++f < y; ) {
          var T = i == null ? n : i[Zn(s[f])];
          T === n && (f = y, T = c), i = mr(T) ? T.call(i) : T;
        }
        return i;
      }
      function CT(i, s, c) {
        return i == null ? i : Sa(i, s, c);
      }
      function TT(i, s, c, f) {
        return f = typeof f == "function" ? f : n, i == null ? i : Sa(i, s, c, f);
      }
      var Wh = Jp(Vt), Vh = Jp(sn);
      function OT(i, s, c) {
        var f = Ve(i), y = f || Nr(i) || Fi(i);
        if (s = Ae(s, 4), c == null) {
          var T = i && i.constructor;
          y ? c = f ? new T() : [] : St(i) ? c = mr(T) ? Ni(Co(i)) : {} : c = {};
        }
        return (y ? On : Gn)(i, function(A, W, G) {
          return s(c, A, W, G);
        }), c;
      }
      function ST(i, s) {
        return i == null ? !0 : nu(i, s);
      }
      function DT(i, s, c) {
        return i == null ? i : jp(i, s, au(c));
      }
      function kT(i, s, c, f) {
        return f = typeof f == "function" ? f : n, i == null ? i : jp(i, s, au(c), f);
      }
      function Li(i) {
        return i == null ? [] : $l(i, Vt(i));
      }
      function PT(i) {
        return i == null ? [] : $l(i, sn(i));
      }
      function AT(i, s, c) {
        return c === n && (c = s, s = n), c !== n && (c = In(c), c = c === c ? c : 0), s !== n && (s = In(s), s = s === s ? s : 0), ii(In(i), s, c);
      }
      function IT(i, s, c) {
        return s = gr(s), c === n ? (c = s, s = 0) : c = gr(c), i = In(i), F0(i, s, c);
      }
      function MT(i, s, c) {
        if (c && typeof c != "boolean" && Jt(i, s, c) && (s = c = n), c === n && (typeof s == "boolean" ? (c = s, s = n) : typeof i == "boolean" && (c = i, i = n)), i === n && s === n ? (i = 0, s = 1) : (i = gr(i), s === n ? (s = i, i = 0) : s = gr(s)), i > s) {
          var f = i;
          i = s, s = f;
        }
        if (c || i % 1 || s % 1) {
          var y = dp();
          return Kt(i + y * (s - i + d_("1e-" + ((y + "").length - 1))), s);
        }
        return Ql(i, s);
      }
      var NT = Ri(function(i, s, c) {
        return s = s.toLowerCase(), i + (c ? zh(s) : s);
      });
      function zh(i) {
        return Ou(at(i).toLowerCase());
      }
      function Bh(i) {
        return i = at(i), i && i.replace(Rw, C_).replace(t_, "");
      }
      function jT(i, s, c) {
        i = at(i), s = yn(s);
        var f = i.length;
        c = c === n ? f : ii(ze(c), 0, f);
        var y = c;
        return c -= s.length, c >= 0 && i.slice(c, y) == s;
      }
      function RT(i) {
        return i = at(i), i && gw.test(i) ? i.replace(bf, T_) : i;
      }
      function $T(i) {
        return i = at(i), i && _w.test(i) ? i.replace(wl, "\\$&") : i;
      }
      var FT = Ri(function(i, s, c) {
        return i + (c ? "-" : "") + s.toLowerCase();
      }), LT = Ri(function(i, s, c) {
        return i + (c ? " " : "") + s.toLowerCase();
      }), WT = Yp("toLowerCase");
      function VT(i, s, c) {
        i = at(i), s = ze(s);
        var f = s ? ki(i) : 0;
        if (!s || f >= s)
          return i;
        var y = (s - f) / 2;
        return Vo(Do(y), c) + i + Vo(So(y), c);
      }
      function zT(i, s, c) {
        i = at(i), s = ze(s);
        var f = s ? ki(i) : 0;
        return s && f < s ? i + Vo(s - f, c) : i;
      }
      function BT(i, s, c) {
        i = at(i), s = ze(s);
        var f = s ? ki(i) : 0;
        return s && f < s ? Vo(s - f, c) + i : i;
      }
      function HT(i, s, c) {
        return c || s == null ? s = 0 : s && (s = +s), Z_(at(i).replace(_l, ""), s || 0);
      }
      function UT(i, s, c) {
        return (c ? Jt(i, s, c) : s === n) ? s = 1 : s = ze(s), eu(at(i), s);
      }
      function YT() {
        var i = arguments, s = at(i[0]);
        return i.length < 3 ? s : s.replace(i[1], i[2]);
      }
      var qT = Ri(function(i, s, c) {
        return i + (c ? "_" : "") + s.toLowerCase();
      });
      function KT(i, s, c) {
        return c && typeof c != "number" && Jt(i, s, c) && (s = c = n), c = c === n ? L : c >>> 0, c ? (i = at(i), i && (typeof s == "string" || s != null && !Eu(s)) && (s = yn(s), !s && Di(i)) ? Mr(Fn(i), 0, c) : i.split(s, c)) : [];
      }
      var GT = Ri(function(i, s, c) {
        return i + (c ? " " : "") + Ou(s);
      });
      function XT(i, s, c) {
        return i = at(i), c = c == null ? 0 : ii(ze(c), 0, i.length), s = yn(s), i.slice(c, c + s.length) == s;
      }
      function ZT(i, s, c) {
        var f = E.templateSettings;
        c && Jt(i, s, c) && (s = n), i = at(i), s = Qo({}, s, f, Qp);
        var y = Qo({}, s.imports, f.imports, Qp), T = Vt(y), A = $l(y, T), W, G, de = 0, pe = s.interpolate || fo, me = "__p += '", Te = Ll(
          (s.escape || fo).source + "|" + pe.source + "|" + (pe === wf ? Pw : fo).source + "|" + (s.evaluate || fo).source + "|$",
          "g"
        ), De = "//# sourceURL=" + (dt.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++o_ + "]") + `
`;
        i.replace(Te, function(Me, Ge, Je, bn, Qt, wn) {
          return Je || (Je = bn), me += i.slice(de, wn).replace($w, O_), Ge && (W = !0, me += `' +
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
        else if (Dw.test(Ie))
          throw new Le(u);
        me = (G ? me.replace(ga, "") : me).replace(bl, "$1").replace(hw, "$1;"), me = "function(" + (Ie || "obj") + `) {
` + (Ie ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (W ? ", __e = _.escape" : "") + (G ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + me + `return __p
}`;
        var He = Uh(function() {
          return nt(T, De + "return " + me).apply(n, A);
        });
        if (He.source = me, _u(He))
          throw He;
        return He;
      }
      function JT(i) {
        return at(i).toLowerCase();
      }
      function QT(i) {
        return at(i).toUpperCase();
      }
      function eO(i, s, c) {
        if (i = at(i), i && (c || s === n))
          return ep(i);
        if (!i || !(s = yn(s)))
          return i;
        var f = Fn(i), y = Fn(s), T = tp(f, y), A = np(f, y) + 1;
        return Mr(f, T, A).join("");
      }
      function tO(i, s, c) {
        if (i = at(i), i && (c || s === n))
          return i.slice(0, ip(i) + 1);
        if (!i || !(s = yn(s)))
          return i;
        var f = Fn(i), y = np(f, Fn(s)) + 1;
        return Mr(f, 0, y).join("");
      }
      function nO(i, s, c) {
        if (i = at(i), i && (c || s === n))
          return i.replace(_l, "");
        if (!i || !(s = yn(s)))
          return i;
        var f = Fn(i), y = tp(f, Fn(s));
        return Mr(f, y).join("");
      }
      function rO(i, s) {
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
        if (A && (W += G.length - W), Eu(y)) {
          if (i.slice(W).search(y)) {
            var de, pe = G;
            for (y.global || (y = Ll(y.source, at(_f.exec(y)) + "g")), y.lastIndex = 0; de = y.exec(pe); )
              var me = de.index;
            G = G.slice(0, me === n ? W : me);
          }
        } else if (i.indexOf(yn(y), W) != W) {
          var Te = G.lastIndexOf(y);
          Te > -1 && (G = G.slice(0, Te));
        }
        return G + f;
      }
      function iO(i) {
        return i = at(i), i && mw.test(i) ? i.replace(xf, M_) : i;
      }
      var aO = Ri(function(i, s, c) {
        return i + (c ? " " : "") + s.toUpperCase();
      }), Ou = Yp("toUpperCase");
      function Hh(i, s, c) {
        return i = at(i), s = c ? n : s, s === n ? D_(i) ? R_(i) : x_(i) : i.match(s) || [];
      }
      var Uh = Ye(function(i, s) {
        try {
          return gn(i, n, s);
        } catch (c) {
          return _u(c) ? c : new Le(c);
        }
      }), oO = pr(function(i, s) {
        return On(s, function(c) {
          c = Zn(c), dr(i, c, bu(i[c], i));
        }), i;
      });
      function sO(i) {
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
      function lO(i) {
        return M0(kn(i, g));
      }
      function Su(i) {
        return function() {
          return i;
        };
      }
      function uO(i, s) {
        return i == null || i !== i ? s : i;
      }
      var cO = Kp(), dO = Kp(!0);
      function ln(i) {
        return i;
      }
      function Du(i) {
        return Cp(typeof i == "function" ? i : kn(i, g));
      }
      function fO(i) {
        return Op(kn(i, g));
      }
      function pO(i, s) {
        return Sp(i, kn(s, g));
      }
      var hO = Ye(function(i, s) {
        return function(c) {
          return Ta(c, i, s);
        };
      }), mO = Ye(function(i, s) {
        return function(c) {
          return Ta(i, c, s);
        };
      });
      function ku(i, s, c) {
        var f = Vt(s), y = No(s, f);
        c == null && !(St(s) && (y.length || !f.length)) && (c = s, s = i, i = this, y = No(s, Vt(s)));
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
      function gO() {
        return Bt._ === this && (Bt._ = z_), this;
      }
      function Pu() {
      }
      function vO(i) {
        return i = ze(i), Ye(function(s) {
          return Dp(s, i);
        });
      }
      var yO = su(Ot), xO = su(Gf), bO = su(Il);
      function Yh(i) {
        return hu(i) ? Ml(Zn(i)) : X0(i);
      }
      function wO(i) {
        return function(s) {
          return i == null ? n : ai(i, s);
        };
      }
      var _O = Xp(), EO = Xp(!0);
      function Au() {
        return [];
      }
      function Iu() {
        return !1;
      }
      function CO() {
        return {};
      }
      function TO() {
        return "";
      }
      function OO() {
        return !0;
      }
      function SO(i, s) {
        if (i = ze(i), i < 1 || i > I)
          return [];
        var c = L, f = Kt(i, L);
        s = Ae(s), i -= L;
        for (var y = Rl(f, s); ++c < i; )
          s(c);
        return y;
      }
      function DO(i) {
        return Ve(i) ? Ot(i, Zn) : xn(i) ? [i] : an(fh(at(i)));
      }
      function kO(i) {
        var s = ++W_;
        return at(i) + s;
      }
      var PO = Wo(function(i, s) {
        return i + s;
      }, 0), AO = lu("ceil"), IO = Wo(function(i, s) {
        return i / s;
      }, 1), MO = lu("floor");
      function NO(i) {
        return i && i.length ? Mo(i, ln, ql) : n;
      }
      function jO(i, s) {
        return i && i.length ? Mo(i, Ae(s, 2), ql) : n;
      }
      function RO(i) {
        return Jf(i, ln);
      }
      function $O(i, s) {
        return Jf(i, Ae(s, 2));
      }
      function FO(i) {
        return i && i.length ? Mo(i, ln, Zl) : n;
      }
      function LO(i, s) {
        return i && i.length ? Mo(i, Ae(s, 2), Zl) : n;
      }
      var WO = Wo(function(i, s) {
        return i * s;
      }, 1), VO = lu("round"), zO = Wo(function(i, s) {
        return i - s;
      }, 0);
      function BO(i) {
        return i && i.length ? jl(i, ln) : 0;
      }
      function HO(i, s) {
        return i && i.length ? jl(i, Ae(s, 2)) : 0;
      }
      return E.after = fC, E.ary = Eh, E.assign = QC, E.assignIn = $h, E.assignInWith = Qo, E.assignWith = eT, E.at = tT, E.before = Ch, E.bind = bu, E.bindAll = oO, E.bindKey = Th, E.castArray = CC, E.chain = bh, E.chunk = M1, E.compact = N1, E.concat = j1, E.cond = sO, E.conforms = lO, E.constant = Su, E.countBy = BE, E.create = nT, E.curry = Oh, E.curryRight = Sh, E.debounce = Dh, E.defaults = rT, E.defaultsDeep = iT, E.defer = pC, E.delay = hC, E.difference = R1, E.differenceBy = $1, E.differenceWith = F1, E.drop = L1, E.dropRight = W1, E.dropRightWhile = V1, E.dropWhile = z1, E.fill = B1, E.filter = UE, E.flatMap = KE, E.flatMapDeep = GE, E.flatMapDepth = XE, E.flatten = gh, E.flattenDeep = H1, E.flattenDepth = U1, E.flip = mC, E.flow = cO, E.flowRight = dO, E.fromPairs = Y1, E.functions = dT, E.functionsIn = fT, E.groupBy = ZE, E.initial = K1, E.intersection = G1, E.intersectionBy = X1, E.intersectionWith = Z1, E.invert = hT, E.invertBy = mT, E.invokeMap = QE, E.iteratee = Du, E.keyBy = eC, E.keys = Vt, E.keysIn = sn, E.map = qo, E.mapKeys = vT, E.mapValues = yT, E.matches = fO, E.matchesProperty = pO, E.memoize = Go, E.merge = xT, E.mergeWith = Fh, E.method = hO, E.methodOf = mO, E.mixin = ku, E.negate = Xo, E.nthArg = vO, E.omit = bT, E.omitBy = wT, E.once = gC, E.orderBy = tC, E.over = yO, E.overArgs = vC, E.overEvery = xO, E.overSome = bO, E.partial = wu, E.partialRight = kh, E.partition = nC, E.pick = _T, E.pickBy = Lh, E.property = Yh, E.propertyOf = wO, E.pull = tE, E.pullAll = yh, E.pullAllBy = nE, E.pullAllWith = rE, E.pullAt = iE, E.range = _O, E.rangeRight = EO, E.rearg = yC, E.reject = aC, E.remove = aE, E.rest = xC, E.reverse = yu, E.sampleSize = sC, E.set = CT, E.setWith = TT, E.shuffle = lC, E.slice = oE, E.sortBy = dC, E.sortedUniq = pE, E.sortedUniqBy = hE, E.split = KT, E.spread = bC, E.tail = mE, E.take = gE, E.takeRight = vE, E.takeRightWhile = yE, E.takeWhile = xE, E.tap = NE, E.throttle = wC, E.thru = Yo, E.toArray = Nh, E.toPairs = Wh, E.toPairsIn = Vh, E.toPath = DO, E.toPlainObject = Rh, E.transform = OT, E.unary = _C, E.union = bE, E.unionBy = wE, E.unionWith = _E, E.uniq = EE, E.uniqBy = CE, E.uniqWith = TE, E.unset = ST, E.unzip = xu, E.unzipWith = xh, E.update = DT, E.updateWith = kT, E.values = Li, E.valuesIn = PT, E.without = OE, E.words = Hh, E.wrap = EC, E.xor = SE, E.xorBy = DE, E.xorWith = kE, E.zip = PE, E.zipObject = AE, E.zipObjectDeep = IE, E.zipWith = ME, E.entries = Wh, E.entriesIn = Vh, E.extend = $h, E.extendWith = Qo, ku(E, E), E.add = PO, E.attempt = Uh, E.camelCase = NT, E.capitalize = zh, E.ceil = AO, E.clamp = AT, E.clone = TC, E.cloneDeep = SC, E.cloneDeepWith = DC, E.cloneWith = OC, E.conformsTo = kC, E.deburr = Bh, E.defaultTo = uO, E.divide = IO, E.endsWith = jT, E.eq = Wn, E.escape = RT, E.escapeRegExp = $T, E.every = HE, E.find = YE, E.findIndex = hh, E.findKey = aT, E.findLast = qE, E.findLastIndex = mh, E.findLastKey = oT, E.floor = MO, E.forEach = wh, E.forEachRight = _h, E.forIn = sT, E.forInRight = lT, E.forOwn = uT, E.forOwnRight = cT, E.get = Cu, E.gt = PC, E.gte = AC, E.has = pT, E.hasIn = Tu, E.head = vh, E.identity = ln, E.includes = JE, E.indexOf = q1, E.inRange = IT, E.invoke = gT, E.isArguments = li, E.isArray = Ve, E.isArrayBuffer = IC, E.isArrayLike = on, E.isArrayLikeObject = It, E.isBoolean = MC, E.isBuffer = Nr, E.isDate = NC, E.isElement = jC, E.isEmpty = RC, E.isEqual = $C, E.isEqualWith = FC, E.isError = _u, E.isFinite = LC, E.isFunction = mr, E.isInteger = Ph, E.isLength = Zo, E.isMap = Ah, E.isMatch = WC, E.isMatchWith = VC, E.isNaN = zC, E.isNative = BC, E.isNil = UC, E.isNull = HC, E.isNumber = Ih, E.isObject = St, E.isObjectLike = kt, E.isPlainObject = Aa, E.isRegExp = Eu, E.isSafeInteger = YC, E.isSet = Mh, E.isString = Jo, E.isSymbol = xn, E.isTypedArray = Fi, E.isUndefined = qC, E.isWeakMap = KC, E.isWeakSet = GC, E.join = J1, E.kebabCase = FT, E.last = An, E.lastIndexOf = Q1, E.lowerCase = LT, E.lowerFirst = WT, E.lt = XC, E.lte = ZC, E.max = NO, E.maxBy = jO, E.mean = RO, E.meanBy = $O, E.min = FO, E.minBy = LO, E.stubArray = Au, E.stubFalse = Iu, E.stubObject = CO, E.stubString = TO, E.stubTrue = OO, E.multiply = WO, E.nth = eE, E.noConflict = gO, E.noop = Pu, E.now = Ko, E.pad = VT, E.padEnd = zT, E.padStart = BT, E.parseInt = HT, E.random = MT, E.reduce = rC, E.reduceRight = iC, E.repeat = UT, E.replace = YT, E.result = ET, E.round = VO, E.runInContext = q, E.sample = oC, E.size = uC, E.snakeCase = qT, E.some = cC, E.sortedIndex = sE, E.sortedIndexBy = lE, E.sortedIndexOf = uE, E.sortedLastIndex = cE, E.sortedLastIndexBy = dE, E.sortedLastIndexOf = fE, E.startCase = GT, E.startsWith = XT, E.subtract = zO, E.sum = BO, E.sumBy = HO, E.template = ZT, E.times = SO, E.toFinite = gr, E.toInteger = ze, E.toLength = jh, E.toLower = JT, E.toNumber = In, E.toSafeInteger = JC, E.toString = at, E.toUpper = QT, E.trim = eO, E.trimEnd = tO, E.trimStart = nO, E.truncate = rO, E.unescape = iO, E.uniqueId = kO, E.upperCase = aO, E.upperFirst = Ou, E.each = wh, E.eachRight = _h, E.first = vh, ku(E, function() {
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
        var c = s + 1, f = c == z || c == K;
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
        return this.filter(Xo(Ae(i)));
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
            return Me.__actions__.push({ func: Yo, args: [me], thisArg: n }), new Dn(Me, Te);
          }
          return Ie && He ? i.apply(this, W) : (Me = this.thru(me), Ie ? f ? Me.value()[0] : Me.value() : Me);
        });
      }), On(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var s = yo[i], c = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(i);
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
      }), Mi[Lo(n, P).name] = [{
        name: "wrapper",
        func: n
      }], Xe.prototype.clone = i0, Xe.prototype.reverse = a0, Xe.prototype.value = o0, E.prototype.at = jE, E.prototype.chain = RE, E.prototype.commit = $E, E.prototype.next = FE, E.prototype.plant = WE, E.prototype.reverse = VE, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = zE, E.prototype.first = E.prototype.head, ya && (E.prototype[ya] = LE), E;
    }, Pi = $_();
    ei ? ((ei.exports = Pi)._ = Pi, Dl._ = Pi) : Bt._ = Pi;
  }).call(Ra);
})(Os, Os.exports);
Os.exports;
var wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.TokenData = void 0;
wi.parse = ed;
wi.compile = LS;
wi.match = zS;
wi.pathToRegexp = Rv;
const Mv = "/", Qc = (e) => e, jS = new RegExp("^\\p{XID_Continue}$", "u"), za = "https://git.new/pathToRegexpError", RS = {
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
function $S(e) {
  const t = [...e], n = [];
  let r = 0;
  for (; r < t.length; ) {
    const a = t[r], o = RS[a];
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
      for (; jS.test(t[++r]); )
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
  return n.push({ type: "END", index: r, value: "" }), new FS(n);
}
class FS {
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
class el {
  constructor(t, n) {
    this.tokens = t, this.delimiter = n;
  }
}
wi.TokenData = el;
function ed(e, t = {}) {
  const { encodePath: n = Qc, delimiter: r = n(Mv) } = t, a = [], o = $S(e);
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
      const h = o.text(), g = o.tryConsume("NAME"), x = o.tryConsume("PATTERN"), b = o.text(), S = o.tryConsume(";") && o.text();
      o.consume("}");
      const _ = o.modifier();
      a.push({
        name: g || (x ? String(l++) : ""),
        prefix: n(h),
        suffix: n(b),
        pattern: x,
        modifier: _,
        separator: S
      });
      continue;
    }
    o.consume("END");
    break;
  } while (!0);
  return new el(a, r);
}
function LS(e, t = {}) {
  const n = e instanceof el ? e : ed(e, t);
  return VS(n, t);
}
function WS(e, t) {
  if (typeof e == "string")
    return () => e;
  const n = t || Qc, r = e.modifier === "+" || e.modifier === "*", a = e.modifier === "?" || e.modifier === "*", { prefix: o = "", suffix: l = "", separator: u = l + o } = e;
  if (t && r) {
    const p = (g, x) => {
      if (typeof g != "string")
        throw new TypeError(`Expected "${e.name}/${x}" to be a string`);
      return n(g);
    }, h = (g) => {
      if (!Array.isArray(g))
        throw new TypeError(`Expected "${e.name}" to be an array`);
      return g.length === 0 ? "" : o + g.map(p).join(u) + l;
    };
    return a ? (g) => {
      const x = g[e.name];
      return x == null ? "" : x.length ? h(x) : "";
    } : (g) => {
      const x = g[e.name];
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
function VS(e, t) {
  const { encode: n = encodeURIComponent, loose: r = !0, validate: a = !0, strict: o = !1 } = t, l = Nv(t), u = td(r, e.delimiter), d = jv(e, u, [], l, o), p = e.tokens.map((h, g) => {
    const x = WS(h, n);
    if (!a || typeof h == "string")
      return x;
    const b = new RegExp(`^${d[g]}$`, l);
    return (S) => {
      const _ = x(S);
      if (!b.test(_))
        throw new TypeError(`Invalid value for "${h.name}": ${JSON.stringify(_)}`);
      return _;
    };
  });
  return function(h = {}) {
    let g = "";
    for (const x of p)
      g += x(h);
    return g;
  };
}
function zS(e, t = {}) {
  const { decode: n = decodeURIComponent, loose: r = !0, delimiter: a = Mv } = t, o = Rv(e, t), l = td(r, a), u = o.keys.map((d) => {
    if (n && (d.modifier === "+" || d.modifier === "*")) {
      const { prefix: p = "", suffix: h = "", separator: g = h + p } = d, x = new RegExp(l(g), "g");
      return (b) => b.split(x).map(n);
    }
    return n || Qc;
  });
  return function(d) {
    const p = o.exec(d);
    if (!p)
      return !1;
    const { 0: h, index: g } = p, x = /* @__PURE__ */ Object.create(null);
    for (let b = 1; b < p.length; b++) {
      if (p[b] === void 0)
        continue;
      const S = o.keys[b - 1], _ = u[b - 1];
      x[S.name] = _(p[b]);
    }
    return { path: h, index: g, params: x };
  };
}
function Qi(e) {
  return e.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
}
function BS(e, t) {
  const n = Qi(e);
  return t ? `(?:${n})+(?!${n})` : n;
}
function td(e, t) {
  if (!e)
    return Qi;
  const n = new RegExp(`(?:(?!${Qi(t)}).)+|(.)`, "g");
  return (r) => r.replace(n, BS);
}
function Nv(e) {
  return e.sensitive ? "" : "i";
}
function em(e, t, n, r) {
  const a = e instanceof el ? e : ed(e, r), { trailing: o = !0, loose: l = !0, start: u = !0, end: d = !0, strict: p = !1 } = r, h = td(l, a.delimiter), g = jv(a, h, t, n, p);
  let x = u ? "^" : "";
  return x += g.join(""), o && (x += `(?:${h(a.delimiter)}$)?`), x += d ? "$" : `(?=${Qi(a.delimiter)}|$)`, x;
}
function jv(e, t, n, r, a) {
  const o = `(?:(?!${Qi(e.delimiter)}).)+?`;
  let l = "", u = !0;
  return e.tokens.map((d) => {
    if (typeof d == "string")
      return l = d, t(d);
    const { prefix: p = "", suffix: h = "", separator: g = h + p, modifier: x = "" } = d, b = t(p), S = t(h);
    if (d.name) {
      const _ = d.pattern ? `(?:${d.pattern})` : o, w = HS(_, d.name, r);
      if (u || (u = Nu(w, p || l)), !u)
        throw new TypeError(`Ambiguous pattern for "${d.name}": ${za}`);
      if (u = !a || Nu(w, h), l = "", n.push(d), x === "+" || x === "*") {
        const P = x === "*" ? "?" : "", C = t(g);
        if (!C)
          throw new TypeError(`Missing separator for "${d.name}": ${za}`);
        if (u || (u = !a || Nu(w, g)), !u)
          throw new TypeError(`Ambiguous pattern for "${d.name}" separator: ${za}`);
        return u = !a, `(?:${b}(${_}(?:${C}${_})*)${S})${P}`;
      }
      return `(?:${b}(${_})${S})${x}`;
    }
    return `(?:${b}${S})${x}`;
  });
}
function HS(e, t, n) {
  try {
    return new RegExp(`^${e}$`, n);
  } catch (r) {
    throw new TypeError(`Invalid pattern for "${t}": ${r.message}`);
  }
}
function Nu(e, t) {
  return t ? !e.test(t) : !1;
}
function Rv(e, t = {}) {
  const n = [], r = Nv(t);
  if (Array.isArray(e)) {
    const o = e.map((l) => em(l, n, r, t));
    return Object.assign(new RegExp(o.join("|")), { keys: n });
  }
  const a = em(e, n, r, t);
  return Object.assign(new RegExp(a), { keys: n });
}
const $v = ({
  component: e,
  ...t
}) => /* @__PURE__ */ NS.jsx(e, { ...t });
function tm(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Fv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const o = tm(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          typeof o == "function" ? o() : tm(e[a], null);
        }
      };
  };
}
function Kr(...e) {
  return J.useCallback(Fv(...e), e);
}
var Tt = J.forwardRef((e, t) => {
  const { children: n, ...r } = e, a = J.Children.toArray(n), o = a.find(YS);
  if (o) {
    const l = o.props.children, u = a.map((d) => d === o ? J.Children.count(l) > 1 ? J.Children.only(null) : J.isValidElement(l) ? l.props.children : null : d);
    return /* @__PURE__ */ v.jsx(_c, { ...r, ref: t, children: J.isValidElement(l) ? J.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ v.jsx(_c, { ...r, ref: t, children: n });
});
Tt.displayName = "Slot";
var _c = J.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (J.isValidElement(n)) {
    const a = KS(n);
    return J.cloneElement(n, {
      ...qS(r, n.props),
      // @ts-ignore
      ref: t ? Fv(t, a) : a
    });
  }
  return J.Children.count(n) > 1 ? J.Children.only(null) : null;
});
_c.displayName = "SlotClone";
var US = ({ children: e }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: e });
function YS(e) {
  return J.isValidElement(e) && e.type === US;
}
function qS(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? a && o ? n[r] = (...u) => {
      o(...u), a(...u);
    } : a && (n[r] = a) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function KS(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const nd = (e) => e.type === "select-multiple", Lv = J.createContext({}), GS = ({
  asChild: e,
  className: t,
  disabled: n,
  ref: r,
  variant: a = "input",
  checked: o,
  ...l
}) => {
  const u = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(Lv.Provider, { value: { disabled: n }, children: /* @__PURE__ */ v.jsx(
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
        a === "input" && Pe("flex w-full rounded"),
        a === "checkable" && Pe(
          o && !n && "bg-theme-600 !border-transparent",
          o && n && "bg-neutral-400 border-transparent",
          !n && "group-ui-state-checked:bg-theme-600 group-ui-state-checked:border-transparent",
          n && "group-ui-state-checked:bg-neutral-400"
        ),
        a === "button" && Pe(
          "shadow-sm",
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
}, XS = ({ asChild: e, className: t, variant: n = "hidden", ...r }) => {
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
}, ZS = ({ asChild: e, className: t, ...n }) => {
  const r = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(r, { className: Pe("flex flex-1 rounded overflow-hidden", t), ...n });
}, Wv = (e) => {
  const t = [];
  return J.Children.forEach(e, (n) => {
    J.isValidElement(n) && n.type === J.Fragment ? t.push(...Wv(n.props.children)) : J.isValidElement(n) && t.push(n);
  }), t;
}, JS = ({ asChild: e, className: t, children: n, ...r }) => {
  const a = Wv(n), { disabled: o } = Yt(Lv);
  if (a.length === 0)
    return null;
  const l = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(
    l,
    {
      className: Pe("flex-none box-content top-0 right-0 flex gap-0.5 items-center p-0.5", t),
      ...r,
      children: a.map((u, d) => /* @__PURE__ */ v.jsxs(J.Fragment, { children: [
        /* @__PURE__ */ v.jsx(Tt, { disabled: o, children: u }),
        d < a.length - 1 && /* @__PURE__ */ v.jsx("span", { className: "border-r border-solid border-neutral-300 h-4" })
      ] }, d))
    }
  );
}, QS = ({
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
}, eD = (e) => e.type === "checkbox", tD = (e) => {
  if (e.target)
    return nd(e.target) ? Array.from(e.target.selectedOptions, (t) => t.value) : eD(e.target) ? e.target.checked : e.target.value;
}, Xt = (e, t, n) => {
  const [r, a] = Ki(e, t);
  return [r, (l) => {
    a(tD(l)), n == null || n(l);
  }];
}, ke = Object.assign(GS, {
  Content: ZS,
  Controls: JS,
  ControlButton: QS,
  Native: XS
});
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nD = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rD = {
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
const iD = Js(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: a = "",
    children: o,
    iconNode: l,
    ...u
  }, d) => yc(
    "svg",
    {
      ref: d,
      ...rD,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Vv("lucide", a),
      ...u
    },
    [
      ...l.map(([p, h]) => yc(p, h)),
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
  const n = Js(
    ({ className: r, ...a }, o) => yc(iD, {
      ref: o,
      iconNode: t,
      className: Vv(`lucide-${nD(e)}`, r),
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
const tl = qt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zv = qt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aD = qt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oD = qt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sD = qt("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lD = qt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uD = qt("ExternalLink", [
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
const cD = qt("FileArchive", [
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
const dD = qt("FileImage", [
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
const fD = qt("FileSpreadsheet", [
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
const ju = qt("FileText", [
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
const pD = qt("FileVideo", [
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
const hD = qt("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mD = qt("Loader", [
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
const gD = qt("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vD = qt("Search", [
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
}, Bv = (e, t) => {
  const n = Array.from(e.options);
  Array.isArray(t) ? n.forEach((r) => {
    r.selected = t.includes(r.value);
  }) : n.forEach((r) => {
    r.selected = r.value === t;
  }), e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}, yB = (e) => nd(e) ? Array.from(e.selectedOptions).map((t) => t.value) : e.value, xB = (e, t) => {
  var r;
  const n = (r = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")) == null ? void 0 : r.set;
  n == null || n.call(e, t), e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}, Hv = ({
  className: e,
  inputClassName: t,
  hideClear: n = !1,
  controls: r,
  widgetRef: a,
  ref: o,
  ...l
}) => {
  const u = J.useRef(null), [d, p] = Xt("", l.value, l.onChange), h = () => {
    var g;
    pn(u.current, ""), (g = u.current) == null || g.focus();
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
}, Uv = ({ className: e, ...t }) => /* @__PURE__ */ v.jsx("div", { className: Pe("flex flex-col gap-1", e), ...t }), Yv = ({ className: e, ...t }) => /* @__PURE__ */ v.jsxs("label", { className: Pe("text-sm font-medium", e), ...t, children: [
  t.children,
  " ",
  t.required && /* @__PURE__ */ v.jsx("span", { className: "text-red-500", children: "*" })
] }), qv = ({ className: e, ...t }) => /* @__PURE__ */ v.jsx("p", { className: Pe("text-sm text-error-500 whitespace-pre-line", e), ...t }), Kv = ({ className: e, ...t }) => /* @__PURE__ */ v.jsx("p", { className: Pe("text-sm text-neutral-500", e), ...t }), sr = ({ ref: e, label: t, error: n, helpText: r, widget: a, className: o, ...l }) => {
  const u = Ev(), d = J.useRef(null);
  return ct(() => {
    d.current && d.current.setCustomValidity(n || "");
  }, [n]), /* @__PURE__ */ v.jsxs(Uv, { className: o, "data-error": n || void 0, "data-invalid": n ? "" : void 0, children: [
    t && /* @__PURE__ */ v.jsx(Yv, { required: l.required, htmlFor: l.id || u, children: t }),
    /* @__PURE__ */ v.jsx($v, { component: a || Hv, ...l, ref: nn(d, e), id: l.id || u }),
    n ? /* @__PURE__ */ v.jsx(qv, { children: (n == null ? void 0 : n.message) || n }) : r && /* @__PURE__ */ v.jsx(Kv, { children: r })
  ] });
}, ts = Object.assign(Uv, {
  Label: Yv,
  Error: qv,
  HelpText: Kv
}), yD = ({ className: e, indeterminate: t, ...n }) => {
  const r = J.useRef(null), [a, o] = Xt(!1, n.checked, n.onChange);
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
        /* @__PURE__ */ v.jsx(ke.Content, { className: "text-white justify-center items-center", children: t ? /* @__PURE__ */ v.jsx(gD, {}) : a && /* @__PURE__ */ v.jsx(tl, {}) })
      ]
    }
  );
}, bB = ({
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
  const h = Ev(), g = (x) => {
    u == null || u({
      ...x,
      target: {
        ...x.target,
        value: !!x.target.checked
      }
    });
  };
  return /* @__PURE__ */ v.jsxs(
    ts,
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
          $v,
          {
            defaultChecked: o,
            checked: l,
            className: Pe(!d && "mt-0.5"),
            component: a || yD,
            onChange: g,
            ...p,
            id: p.id || h
          }
        ) }),
        e || t || n ? /* @__PURE__ */ v.jsxs("div", { className: "flex-1", children: [
          e && /* @__PURE__ */ v.jsx(ts.Label, { required: p.required, htmlFor: p.id || h, children: e }),
          t ? /* @__PURE__ */ v.jsx(ts.Error, { children: (t == null ? void 0 : t.message) || t }) : n && /* @__PURE__ */ v.jsx(ts.HelpText, { children: n })
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
function Gv(e, t = []) {
  let n = [];
  function r(o, l) {
    const u = J.createContext(l), d = n.length;
    n = [...n, l];
    const p = (g) => {
      var P;
      const { scope: x, children: b, ...S } = g, _ = ((P = x == null ? void 0 : x[e]) == null ? void 0 : P[d]) || u, w = J.useMemo(() => S, Object.values(S));
      return /* @__PURE__ */ v.jsx(_.Provider, { value: w, children: b });
    };
    p.displayName = o + "Provider";
    function h(g, x) {
      var _;
      const b = ((_ = x == null ? void 0 : x[e]) == null ? void 0 : _[d]) || u, S = J.useContext(b);
      if (S) return S;
      if (l !== void 0) return l;
      throw new Error(`\`${g}\` must be used within \`${o}\``);
    }
    return [p, h];
  }
  const a = () => {
    const o = n.map((l) => J.createContext(l));
    return function(u) {
      const d = (u == null ? void 0 : u[e]) || o;
      return J.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: d } }),
        [u, d]
      );
    };
  };
  return a.scopeName = e, [r, xD(a, ...t)];
}
function xD(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const l = r.reduce((u, { useScope: d, scopeName: p }) => {
        const g = d(o)[`__scope${p}`];
        return { ...u, ...g };
      }, {});
      return J.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var bD = [
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
], Cr = bD.reduce((e, t) => {
  const n = J.forwardRef((r, a) => {
    const { asChild: o, ...l } = r, u = o ? Tt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(u, { ...l, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function wD(e, t) {
  e && Tv.flushSync(() => e.dispatchEvent(t));
}
function Br(e) {
  const t = J.useRef(e);
  return J.useEffect(() => {
    t.current = e;
  }), J.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function _D(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Br(e);
  J.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var ED = "DismissableLayer", Ec = "dismissableLayer.update", CD = "dismissableLayer.pointerDownOutside", TD = "dismissableLayer.focusOutside", nm, Xv = J.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Zv = J.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: l,
      onDismiss: u,
      ...d
    } = e, p = J.useContext(Xv), [h, g] = J.useState(null), x = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, b] = J.useState({}), S = Kr(t, (ee) => g(ee)), _ = Array.from(p.layers), [w] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), P = _.indexOf(w), C = h ? _.indexOf(h) : -1, k = p.layersWithOutsidePointerEventsDisabled.size > 0, D = C >= P, O = DD((ee) => {
      const ne = ee.target, V = [...p.branches].some((Y) => Y.contains(ne));
      !D || V || (a == null || a(ee), l == null || l(ee), ee.defaultPrevented || u == null || u());
    }, x), Q = kD((ee) => {
      const ne = ee.target;
      [...p.branches].some((Y) => Y.contains(ne)) || (o == null || o(ee), l == null || l(ee), ee.defaultPrevented || u == null || u());
    }, x);
    return _D((ee) => {
      C === p.layers.size - 1 && (r == null || r(ee), !ee.defaultPrevented && u && (ee.preventDefault(), u()));
    }, x), J.useEffect(() => {
      if (h)
        return n && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (nm = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(h)), p.layers.add(h), rm(), () => {
          n && p.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = nm);
        };
    }, [h, x, n, p]), J.useEffect(() => () => {
      h && (p.layers.delete(h), p.layersWithOutsidePointerEventsDisabled.delete(h), rm());
    }, [h, p]), J.useEffect(() => {
      const ee = () => b({});
      return document.addEventListener(Ec, ee), () => document.removeEventListener(Ec, ee);
    }, []), /* @__PURE__ */ v.jsx(
      Cr.div,
      {
        ...d,
        ref: S,
        style: {
          pointerEvents: k ? D ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Vr(e.onFocusCapture, Q.onFocusCapture),
        onBlurCapture: Vr(e.onBlurCapture, Q.onBlurCapture),
        onPointerDownCapture: Vr(
          e.onPointerDownCapture,
          O.onPointerDownCapture
        )
      }
    );
  }
);
Zv.displayName = ED;
var OD = "DismissableLayerBranch", SD = J.forwardRef((e, t) => {
  const n = J.useContext(Xv), r = J.useRef(null), a = Kr(t, r);
  return J.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ v.jsx(Cr.div, { ...e, ref: a });
});
SD.displayName = OD;
function DD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Br(e), r = J.useRef(!1), a = J.useRef(() => {
  });
  return J.useEffect(() => {
    const o = (u) => {
      if (u.target && !r.current) {
        let d = function() {
          Jv(
            CD,
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
function kD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Br(e), r = J.useRef(!1);
  return J.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && Jv(TD, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function rm() {
  const e = new CustomEvent(Ec);
  document.dispatchEvent(e);
}
function Jv(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? wD(a, o) : a.dispatchEvent(o);
}
var Ru = 0;
function PD() {
  J.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? im()), document.body.insertAdjacentElement("beforeend", e[1] ?? im()), Ru++, () => {
      Ru === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ru--;
    };
  }, []);
}
function im() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var $u = "focusScope.autoFocusOnMount", Fu = "focusScope.autoFocusOnUnmount", am = { bubbles: !1, cancelable: !0 }, AD = "FocusScope", Qv = J.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...l
  } = e, [u, d] = J.useState(null), p = Br(a), h = Br(o), g = J.useRef(null), x = Kr(t, (_) => d(_)), b = J.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  J.useEffect(() => {
    if (r) {
      let _ = function(k) {
        if (b.paused || !u) return;
        const D = k.target;
        u.contains(D) ? g.current = D : Lr(g.current, { select: !0 });
      }, w = function(k) {
        if (b.paused || !u) return;
        const D = k.relatedTarget;
        D !== null && (u.contains(D) || Lr(g.current, { select: !0 }));
      }, P = function(k) {
        if (document.activeElement === document.body)
          for (const O of k)
            O.removedNodes.length > 0 && Lr(u);
      };
      document.addEventListener("focusin", _), document.addEventListener("focusout", w);
      const C = new MutationObserver(P);
      return u && C.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", _), document.removeEventListener("focusout", w), C.disconnect();
      };
    }
  }, [r, u, b.paused]), J.useEffect(() => {
    if (u) {
      sm.add(b);
      const _ = document.activeElement;
      if (!u.contains(_)) {
        const P = new CustomEvent($u, am);
        u.addEventListener($u, p), u.dispatchEvent(P), P.defaultPrevented || (ID($D(ey(u)), { select: !0 }), document.activeElement === _ && Lr(u));
      }
      return () => {
        u.removeEventListener($u, p), setTimeout(() => {
          const P = new CustomEvent(Fu, am);
          u.addEventListener(Fu, h), u.dispatchEvent(P), P.defaultPrevented || Lr(_ ?? document.body, { select: !0 }), u.removeEventListener(Fu, h), sm.remove(b);
        }, 0);
      };
    }
  }, [u, p, h, b]);
  const S = J.useCallback(
    (_) => {
      if (!n && !r || b.paused) return;
      const w = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey, P = document.activeElement;
      if (w && P) {
        const C = _.currentTarget, [k, D] = MD(C);
        k && D ? !_.shiftKey && P === D ? (_.preventDefault(), n && Lr(k, { select: !0 })) : _.shiftKey && P === k && (_.preventDefault(), n && Lr(D, { select: !0 })) : P === C && _.preventDefault();
      }
    },
    [n, r, b.paused]
  );
  return /* @__PURE__ */ v.jsx(Cr.div, { tabIndex: -1, ...l, ref: x, onKeyDown: S });
});
Qv.displayName = AD;
function ID(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Lr(r, { select: t }), document.activeElement !== n) return;
}
function MD(e) {
  const t = ey(e), n = om(t, e), r = om(t.reverse(), e);
  return [n, r];
}
function ey(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function om(e, t) {
  for (const n of e)
    if (!ND(n, { upTo: t })) return n;
}
function ND(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function jD(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Lr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && jD(e) && t && e.select();
  }
}
var sm = RD();
function RD() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = lm(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = lm(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function lm(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function $D(e) {
  return e.filter((t) => t.tagName !== "A");
}
var vi = globalThis != null && globalThis.document ? J.useLayoutEffect : () => {
}, FD = J.useId || (() => {
}), LD = 0;
function WD(e) {
  const [t, n] = J.useState(FD());
  return vi(() => {
    e || n((r) => r ?? String(LD++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const VD = ["top", "right", "bottom", "left"], Hr = Math.min, _n = Math.max, Ss = Math.round, ns = Math.floor, ir = (e) => ({
  x: e,
  y: e
}), zD = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, BD = {
  start: "end",
  end: "start"
};
function Cc(e, t, n) {
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
function rd(e) {
  return e === "x" ? "y" : "x";
}
function id(e) {
  return e === "y" ? "height" : "width";
}
function Ur(e) {
  return ["top", "bottom"].includes(Er(e)) ? "y" : "x";
}
function ad(e) {
  return rd(Ur(e));
}
function HD(e, t, n) {
  n === void 0 && (n = !1);
  const r = oa(e), a = ad(e), o = id(a);
  let l = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (l = Ds(l)), [l, Ds(l)];
}
function UD(e) {
  const t = Ds(e);
  return [Tc(e), t, Tc(t)];
}
function Tc(e) {
  return e.replace(/start|end/g, (t) => BD[t]);
}
function YD(e, t, n) {
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
function qD(e, t, n, r) {
  const a = oa(e);
  let o = YD(Er(e), n === "start", r);
  return a && (o = o.map((l) => l + "-" + a), t && (o = o.concat(o.map(Tc)))), o;
}
function Ds(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zD[t]);
}
function KD(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ty(e) {
  return typeof e != "number" ? KD(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ks(e) {
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
function um(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const o = Ur(t), l = ad(t), u = id(l), d = Er(t), p = o === "y", h = r.x + r.width / 2 - a.width / 2, g = r.y + r.height / 2 - a.height / 2, x = r[u] / 2 - a[u] / 2;
  let b;
  switch (d) {
    case "top":
      b = {
        x: h,
        y: r.y - a.height
      };
      break;
    case "bottom":
      b = {
        x: h,
        y: r.y + r.height
      };
      break;
    case "right":
      b = {
        x: r.x + r.width,
        y: g
      };
      break;
    case "left":
      b = {
        x: r.x - a.width,
        y: g
      };
      break;
    default:
      b = {
        x: r.x,
        y: r.y
      };
  }
  switch (oa(t)) {
    case "start":
      b[l] -= x * (n && p ? -1 : 1);
      break;
    case "end":
      b[l] += x * (n && p ? -1 : 1);
      break;
  }
  return b;
}
const GD = async (e, t, n) => {
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
    y: g
  } = um(p, r, d), x = r, b = {}, S = 0;
  for (let _ = 0; _ < u.length; _++) {
    const {
      name: w,
      fn: P
    } = u[_], {
      x: C,
      y: k,
      data: D,
      reset: O
    } = await P({
      x: h,
      y: g,
      initialPlacement: r,
      placement: x,
      strategy: a,
      middlewareData: b,
      rects: p,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = C ?? h, g = k ?? g, b = {
      ...b,
      [w]: {
        ...b[w],
        ...D
      }
    }, O && S <= 50 && (S++, typeof O == "object" && (O.placement && (x = O.placement), O.rects && (p = O.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : O.rects), {
      x: h,
      y: g
    } = um(p, x, d)), _ = -1);
  }
  return {
    x: h,
    y: g,
    placement: x,
    strategy: a,
    middlewareData: b
  };
};
async function qa(e, t) {
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
    elementContext: g = "floating",
    altBoundary: x = !1,
    padding: b = 0
  } = _r(t, e), S = ty(b), w = u[x ? g === "floating" ? "reference" : "floating" : g], P = ks(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null || n ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(u.floating)),
    boundary: p,
    rootBoundary: h,
    strategy: d
  })), C = g === "floating" ? {
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
  }, O = ks(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: C,
    offsetParent: k,
    strategy: d
  }) : C);
  return {
    top: (P.top - O.top + S.top) / D.y,
    bottom: (O.bottom - P.bottom + S.bottom) / D.y,
    left: (P.left - O.left + S.left) / D.x,
    right: (O.right - P.right + S.right) / D.x
  };
}
const XD = (e) => ({
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
    const g = ty(h), x = {
      x: n,
      y: r
    }, b = ad(a), S = id(b), _ = await l.getDimensions(p), w = b === "y", P = w ? "top" : "left", C = w ? "bottom" : "right", k = w ? "clientHeight" : "clientWidth", D = o.reference[S] + o.reference[b] - x[b] - o.floating[S], O = x[b] - o.reference[b], Q = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(p));
    let ee = Q ? Q[k] : 0;
    (!ee || !await (l.isElement == null ? void 0 : l.isElement(Q))) && (ee = u.floating[k] || o.floating[S]);
    const ne = D / 2 - O / 2, V = ee / 2 - _[S] / 2 - 1, Y = Hr(g[P], V), te = Hr(g[C], V), R = Y, H = ee - _[S] - te, z = ee / 2 - _[S] / 2 + ne, U = Cc(R, z, H), K = !d.arrow && oa(a) != null && z !== U && o.reference[S] / 2 - (z < R ? Y : te) - _[S] / 2 < 0, j = K ? z < R ? z - R : z - H : 0;
    return {
      [b]: x[b] + j,
      data: {
        [b]: U,
        centerOffset: z - U - j,
        ...K && {
          alignmentOffset: j
        }
      },
      reset: K
    };
  }
}), ZD = function(e) {
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
        crossAxis: g = !0,
        fallbackPlacements: x,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: S = "none",
        flipAlignment: _ = !0,
        ...w
      } = _r(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const P = Er(a), C = Ur(u), k = Er(u) === u, D = await (d.isRTL == null ? void 0 : d.isRTL(p.floating)), O = x || (k || !_ ? [Ds(u)] : UD(u)), Q = S !== "none";
      !x && Q && O.push(...qD(u, _, S, D));
      const ee = [u, ...O], ne = await qa(t, w), V = [];
      let Y = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (h && V.push(ne[P]), g) {
        const z = HD(a, l, D);
        V.push(ne[z[0]], ne[z[1]]);
      }
      if (Y = [...Y, {
        placement: a,
        overflows: V
      }], !V.every((z) => z <= 0)) {
        var te, R;
        const z = (((te = o.flip) == null ? void 0 : te.index) || 0) + 1, U = ee[z];
        if (U)
          return {
            data: {
              index: z,
              overflows: Y
            },
            reset: {
              placement: U
            }
          };
        let K = (R = Y.filter((j) => j.overflows[0] <= 0).sort((j, I) => j.overflows[1] - I.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!K)
          switch (b) {
            case "bestFit": {
              var H;
              const j = (H = Y.filter((I) => {
                if (Q) {
                  const X = Ur(I.placement);
                  return X === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((X) => X > 0).reduce((X, M) => X + M, 0)]).sort((I, X) => I[1] - X[1])[0]) == null ? void 0 : H[0];
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
function cm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function dm(e) {
  return VD.some((t) => e[t] >= 0);
}
const JD = function(e) {
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
          const o = await qa(t, {
            ...a,
            elementContext: "reference"
          }), l = cm(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: dm(l)
            }
          };
        }
        case "escaped": {
          const o = await qa(t, {
            ...a,
            altBoundary: !0
          }), l = cm(o, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: dm(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function QD(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), l = Er(n), u = oa(n), d = Ur(n) === "y", p = ["left", "top"].includes(l) ? -1 : 1, h = o && d ? -1 : 1, g = _r(t, e);
  let {
    mainAxis: x,
    crossAxis: b,
    alignmentAxis: S
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return u && typeof S == "number" && (b = u === "end" ? S * -1 : S), d ? {
    x: b * h,
    y: x * p
  } : {
    x: x * p,
    y: b * h
  };
}
const ek = function(e) {
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
      } = t, d = await QD(t, e);
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
}, tk = function(e) {
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
          fn: (w) => {
            let {
              x: P,
              y: C
            } = w;
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
      }, h = await qa(t, d), g = Ur(Er(a)), x = rd(g);
      let b = p[x], S = p[g];
      if (o) {
        const w = x === "y" ? "top" : "left", P = x === "y" ? "bottom" : "right", C = b + h[w], k = b - h[P];
        b = Cc(C, b, k);
      }
      if (l) {
        const w = g === "y" ? "top" : "left", P = g === "y" ? "bottom" : "right", C = S + h[w], k = S - h[P];
        S = Cc(C, S, k);
      }
      const _ = u.fn({
        ...t,
        [x]: b,
        [g]: S
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - r,
          enabled: {
            [x]: o,
            [g]: l
          }
        }
      };
    }
  };
}, nk = function(e) {
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
      }, g = Ur(a), x = rd(g);
      let b = h[x], S = h[g];
      const _ = _r(u, t), w = typeof _ == "number" ? {
        mainAxis: _,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ..._
      };
      if (d) {
        const k = x === "y" ? "height" : "width", D = o.reference[x] - o.floating[k] + w.mainAxis, O = o.reference[x] + o.reference[k] - w.mainAxis;
        b < D ? b = D : b > O && (b = O);
      }
      if (p) {
        var P, C;
        const k = x === "y" ? "width" : "height", D = ["top", "left"].includes(Er(a)), O = o.reference[g] - o.floating[k] + (D && ((P = l.offset) == null ? void 0 : P[g]) || 0) + (D ? 0 : w.crossAxis), Q = o.reference[g] + o.reference[k] + (D ? 0 : ((C = l.offset) == null ? void 0 : C[g]) || 0) - (D ? w.crossAxis : 0);
        S < O ? S = O : S > Q && (S = Q);
      }
      return {
        [x]: b,
        [g]: S
      };
    }
  };
}, rk = function(e) {
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
      } = _r(e, t), h = await qa(t, p), g = Er(a), x = oa(a), b = Ur(a) === "y", {
        width: S,
        height: _
      } = o.floating;
      let w, P;
      g === "top" || g === "bottom" ? (w = g, P = x === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (P = g, w = x === "end" ? "top" : "bottom");
      const C = _ - h.top - h.bottom, k = S - h.left - h.right, D = Hr(_ - h[w], C), O = Hr(S - h[P], k), Q = !t.middlewareData.shift;
      let ee = D, ne = O;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (ne = k), (r = t.middlewareData.shift) != null && r.enabled.y && (ee = C), Q && !x) {
        const Y = _n(h.left, 0), te = _n(h.right, 0), R = _n(h.top, 0), H = _n(h.bottom, 0);
        b ? ne = S - 2 * (Y !== 0 || te !== 0 ? Y + te : _n(h.left, h.right)) : ee = _ - 2 * (R !== 0 || H !== 0 ? R + H : _n(h.top, h.bottom));
      }
      await d({
        ...t,
        availableWidth: ne,
        availableHeight: ee
      });
      const V = await l.getDimensions(u.floating);
      return S !== V.width || _ !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function nl() {
  return typeof window < "u";
}
function sa(e) {
  return ny(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function En(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function lr(e) {
  var t;
  return (t = (ny(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ny(e) {
  return nl() ? e instanceof Node || e instanceof En(e).Node : !1;
}
function Un(e) {
  return nl() ? e instanceof Element || e instanceof En(e).Element : !1;
}
function ar(e) {
  return nl() ? e instanceof HTMLElement || e instanceof En(e).HTMLElement : !1;
}
function fm(e) {
  return !nl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof En(e).ShadowRoot;
}
function eo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Yn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function ik(e) {
  return ["table", "td", "th"].includes(sa(e));
}
function rl(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function od(e) {
  const t = sd(), n = Un(e) ? Yn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ak(e) {
  let t = Yr(e);
  for (; ar(t) && !ea(t); ) {
    if (od(t))
      return t;
    if (rl(t))
      return null;
    t = Yr(t);
  }
  return null;
}
function sd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ea(e) {
  return ["html", "body", "#document"].includes(sa(e));
}
function Yn(e) {
  return En(e).getComputedStyle(e);
}
function il(e) {
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
    fm(e) && e.host || // Fallback.
    lr(e)
  );
  return fm(t) ? t.host : t;
}
function ry(e) {
  const t = Yr(e);
  return ea(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ar(t) && eo(t) ? t : ry(t);
}
function Ka(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = ry(e), o = a === ((r = e.ownerDocument) == null ? void 0 : r.body), l = En(a);
  if (o) {
    const u = Oc(l);
    return t.concat(l, l.visualViewport || [], eo(a) ? a : [], u && n ? Ka(u) : []);
  }
  return t.concat(a, Ka(a, [], n));
}
function Oc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function iy(e) {
  const t = Yn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = ar(e), o = a ? e.offsetWidth : n, l = a ? e.offsetHeight : r, u = Ss(n) !== o || Ss(r) !== l;
  return u && (n = o, r = l), {
    width: n,
    height: r,
    $: u
  };
}
function ld(e) {
  return Un(e) ? e : e.contextElement;
}
function Gi(e) {
  const t = ld(e);
  if (!ar(t))
    return ir(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: o
  } = iy(t);
  let l = (o ? Ss(n.width) : n.width) / r, u = (o ? Ss(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const ok = /* @__PURE__ */ ir(0);
function ay(e) {
  const t = En(e);
  return !sd() || !t.visualViewport ? ok : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function sk(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== En(e) ? !1 : t;
}
function yi(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = ld(e);
  let l = ir(1);
  t && (r ? Un(r) && (l = Gi(r)) : l = Gi(e));
  const u = sk(o, n, r) ? ay(o) : ir(0);
  let d = (a.left + u.x) / l.x, p = (a.top + u.y) / l.y, h = a.width / l.x, g = a.height / l.y;
  if (o) {
    const x = En(o), b = r && Un(r) ? En(r) : r;
    let S = x, _ = Oc(S);
    for (; _ && r && b !== S; ) {
      const w = Gi(_), P = _.getBoundingClientRect(), C = Yn(_), k = P.left + (_.clientLeft + parseFloat(C.paddingLeft)) * w.x, D = P.top + (_.clientTop + parseFloat(C.paddingTop)) * w.y;
      d *= w.x, p *= w.y, h *= w.x, g *= w.y, d += k, p += D, S = En(_), _ = Oc(S);
    }
  }
  return ks({
    width: h,
    height: g,
    x: d,
    y: p
  });
}
function ud(e, t) {
  const n = il(e).scrollLeft;
  return t ? t.left + n : yi(lr(e)).left + n;
}
function oy(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ud(e, r)
  )), o = r.top + t.scrollTop;
  return {
    x: a,
    y: o
  };
}
function lk(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const o = a === "fixed", l = lr(r), u = t ? rl(t.floating) : !1;
  if (r === l || u && o)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = ir(1);
  const h = ir(0), g = ar(r);
  if ((g || !g && !o) && ((sa(r) !== "body" || eo(l)) && (d = il(r)), ar(r))) {
    const b = yi(r);
    p = Gi(r), h.x = b.x + r.clientLeft, h.y = b.y + r.clientTop;
  }
  const x = l && !g && !o ? oy(l, d, !0) : ir(0);
  return {
    width: n.width * p.x,
    height: n.height * p.y,
    x: n.x * p.x - d.scrollLeft * p.x + h.x + x.x,
    y: n.y * p.y - d.scrollTop * p.y + h.y + x.y
  };
}
function uk(e) {
  return Array.from(e.getClientRects());
}
function ck(e) {
  const t = lr(e), n = il(e), r = e.ownerDocument.body, a = _n(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = _n(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + ud(e);
  const u = -n.scrollTop;
  return Yn(r).direction === "rtl" && (l += _n(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: o,
    x: l,
    y: u
  };
}
function dk(e, t) {
  const n = En(e), r = lr(e), a = n.visualViewport;
  let o = r.clientWidth, l = r.clientHeight, u = 0, d = 0;
  if (a) {
    o = a.width, l = a.height;
    const p = sd();
    (!p || p && t === "fixed") && (u = a.offsetLeft, d = a.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: u,
    y: d
  };
}
function fk(e, t) {
  const n = yi(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, o = ar(e) ? Gi(e) : ir(1), l = e.clientWidth * o.x, u = e.clientHeight * o.y, d = a * o.x, p = r * o.y;
  return {
    width: l,
    height: u,
    x: d,
    y: p
  };
}
function pm(e, t, n) {
  let r;
  if (t === "viewport")
    r = dk(e, n);
  else if (t === "document")
    r = ck(lr(e));
  else if (Un(t))
    r = fk(t, n);
  else {
    const a = ay(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return ks(r);
}
function sy(e, t) {
  const n = Yr(e);
  return n === t || !Un(n) || ea(n) ? !1 : Yn(n).position === "fixed" || sy(n, t);
}
function pk(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ka(e, [], !1).filter((u) => Un(u) && sa(u) !== "body"), a = null;
  const o = Yn(e).position === "fixed";
  let l = o ? Yr(e) : e;
  for (; Un(l) && !ea(l); ) {
    const u = Yn(l), d = od(l);
    !d && u.position === "fixed" && (a = null), (o ? !d && !a : !d && u.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || eo(l) && !d && sy(e, l)) ? r = r.filter((h) => h !== l) : a = u, l = Yr(l);
  }
  return t.set(e, r), r;
}
function hk(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? rl(t) ? [] : pk(t, this._c) : [].concat(n), r], u = l[0], d = l.reduce((p, h) => {
    const g = pm(t, h, a);
    return p.top = _n(g.top, p.top), p.right = Hr(g.right, p.right), p.bottom = Hr(g.bottom, p.bottom), p.left = _n(g.left, p.left), p;
  }, pm(t, u, a));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function mk(e) {
  const {
    width: t,
    height: n
  } = iy(e);
  return {
    width: t,
    height: n
  };
}
function gk(e, t, n) {
  const r = ar(t), a = lr(t), o = n === "fixed", l = yi(e, !0, o, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = ir(0);
  if (r || !r && !o)
    if ((sa(t) !== "body" || eo(a)) && (u = il(t)), r) {
      const x = yi(t, !0, o, t);
      d.x = x.x + t.clientLeft, d.y = x.y + t.clientTop;
    } else a && (d.x = ud(a));
  const p = a && !r && !o ? oy(a, u) : ir(0), h = l.left + u.scrollLeft - d.x - p.x, g = l.top + u.scrollTop - d.y - p.y;
  return {
    x: h,
    y: g,
    width: l.width,
    height: l.height
  };
}
function Lu(e) {
  return Yn(e).position === "static";
}
function hm(e, t) {
  if (!ar(e) || Yn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return lr(e) === n && (n = n.ownerDocument.body), n;
}
function ly(e, t) {
  const n = En(e);
  if (rl(e))
    return n;
  if (!ar(e)) {
    let a = Yr(e);
    for (; a && !ea(a); ) {
      if (Un(a) && !Lu(a))
        return a;
      a = Yr(a);
    }
    return n;
  }
  let r = hm(e, t);
  for (; r && ik(r) && Lu(r); )
    r = hm(r, t);
  return r && ea(r) && Lu(r) && !od(r) ? n : r || ak(e) || n;
}
const vk = async function(e) {
  const t = this.getOffsetParent || ly, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: gk(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function yk(e) {
  return Yn(e).direction === "rtl";
}
const xk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: lk,
  getDocumentElement: lr,
  getClippingRect: hk,
  getOffsetParent: ly,
  getElementRects: vk,
  getClientRects: uk,
  getDimensions: mk,
  getScale: Gi,
  isElement: Un,
  isRTL: yk
};
function uy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function bk(e, t) {
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
      top: g,
      width: x,
      height: b
    } = p;
    if (u || t(), !x || !b)
      return;
    const S = ns(g), _ = ns(a.clientWidth - (h + x)), w = ns(a.clientHeight - (g + b)), P = ns(h), k = {
      rootMargin: -S + "px " + -_ + "px " + -w + "px " + -P + "px",
      threshold: _n(0, Hr(1, d)) || 1
    };
    let D = !0;
    function O(Q) {
      const ee = Q[0].intersectionRatio;
      if (ee !== d) {
        if (!D)
          return l();
        ee ? l(!1, ee) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      ee === 1 && !uy(p, e.getBoundingClientRect()) && l(), D = !1;
    }
    try {
      n = new IntersectionObserver(O, {
        ...k,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(O, k);
    }
    n.observe(e);
  }
  return l(!0), o;
}
function wk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = r, p = ld(e), h = a || o ? [...p ? Ka(p) : [], ...Ka(t)] : [];
  h.forEach((P) => {
    a && P.addEventListener("scroll", n, {
      passive: !0
    }), o && P.addEventListener("resize", n);
  });
  const g = p && u ? bk(p, n) : null;
  let x = -1, b = null;
  l && (b = new ResizeObserver((P) => {
    let [C] = P;
    C && C.target === p && b && (b.unobserve(t), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var k;
      (k = b) == null || k.observe(t);
    })), n();
  }), p && !d && b.observe(p), b.observe(t));
  let S, _ = d ? yi(e) : null;
  d && w();
  function w() {
    const P = yi(e);
    _ && !uy(_, P) && n(), _ = P, S = requestAnimationFrame(w);
  }
  return n(), () => {
    var P;
    h.forEach((C) => {
      a && C.removeEventListener("scroll", n), o && C.removeEventListener("resize", n);
    }), g == null || g(), (P = b) == null || P.disconnect(), b = null, d && cancelAnimationFrame(S);
  };
}
const _k = ek, Ek = tk, Ck = ZD, Tk = rk, Ok = JD, mm = XD, Sk = nk, Dk = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: xk,
    ...n
  }, o = {
    ...a.platform,
    _c: r
  };
  return GD(e, t, {
    ...a,
    platform: o
  });
};
var gs = typeof document < "u" ? zr : ct;
function Ps(e, t) {
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
        if (!Ps(e[r], t[r]))
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
      if (!(o === "_owner" && e.$$typeof) && !Ps(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function cy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gm(e, t) {
  const n = cy(e);
  return Math.round(t * n) / n;
}
function Wu(e) {
  const t = J.useRef(e);
  return gs(() => {
    t.current = e;
  }), t;
}
function kk(e) {
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
  } = e, [h, g] = J.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [x, b] = J.useState(r);
  Ps(x, r) || b(r);
  const [S, _] = J.useState(null), [w, P] = J.useState(null), C = J.useCallback((I) => {
    I !== Q.current && (Q.current = I, _(I));
  }, []), k = J.useCallback((I) => {
    I !== ee.current && (ee.current = I, P(I));
  }, []), D = o || S, O = l || w, Q = J.useRef(null), ee = J.useRef(null), ne = J.useRef(h), V = d != null, Y = Wu(d), te = Wu(a), R = Wu(p), H = J.useCallback(() => {
    if (!Q.current || !ee.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: x
    };
    te.current && (I.platform = te.current), Dk(Q.current, ee.current, I).then((X) => {
      const M = {
        ...X,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      z.current && !Ps(ne.current, M) && (ne.current = M, Tv.flushSync(() => {
        g(M);
      }));
    });
  }, [x, t, n, te, R]);
  gs(() => {
    p === !1 && ne.current.isPositioned && (ne.current.isPositioned = !1, g((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [p]);
  const z = J.useRef(!1);
  gs(() => (z.current = !0, () => {
    z.current = !1;
  }), []), gs(() => {
    if (D && (Q.current = D), O && (ee.current = O), D && O) {
      if (Y.current)
        return Y.current(D, O, H);
      H();
    }
  }, [D, O, H, Y, V]);
  const U = J.useMemo(() => ({
    reference: Q,
    floating: ee,
    setReference: C,
    setFloating: k
  }), [C, k]), K = J.useMemo(() => ({
    reference: D,
    floating: O
  }), [D, O]), j = J.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!K.floating)
      return I;
    const X = gm(K.floating, h.x), M = gm(K.floating, h.y);
    return u ? {
      ...I,
      transform: "translate(" + X + "px, " + M + "px)",
      ...cy(K.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: X,
      top: M
    };
  }, [n, u, K.floating, h.x, h.y]);
  return J.useMemo(() => ({
    ...h,
    update: H,
    refs: U,
    elements: K,
    floatingStyles: j
  }), [h, H, U, K, j]);
}
const Pk = (e) => {
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
      return r && t(r) ? r.current != null ? mm({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? mm({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, Ak = (e, t) => ({
  ..._k(e),
  options: [e, t]
}), Ik = (e, t) => ({
  ...Ek(e),
  options: [e, t]
}), Mk = (e, t) => ({
  ...Sk(e),
  options: [e, t]
}), Nk = (e, t) => ({
  ...Ck(e),
  options: [e, t]
}), jk = (e, t) => ({
  ...Tk(e),
  options: [e, t]
}), Rk = (e, t) => ({
  ...Ok(e),
  options: [e, t]
}), $k = (e, t) => ({
  ...Pk(e),
  options: [e, t]
});
var Fk = "Arrow", dy = J.forwardRef((e, t) => {
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
dy.displayName = Fk;
var Lk = dy;
function Wk(e) {
  const [t, n] = J.useState(void 0);
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
var cd = "Popper", [fy, py] = Gv(cd), [Vk, hy] = fy(cd), my = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = J.useState(null);
  return /* @__PURE__ */ v.jsx(Vk, { scope: t, anchor: r, onAnchorChange: a, children: n });
};
my.displayName = cd;
var gy = "PopperAnchor", vy = J.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...a } = e, o = hy(gy, n), l = J.useRef(null), u = Kr(t, l);
    return J.useEffect(() => {
      o.onAnchorChange((r == null ? void 0 : r.current) || l.current);
    }), r ? null : /* @__PURE__ */ v.jsx(Cr.div, { ...a, ref: u });
  }
);
vy.displayName = gy;
var dd = "PopperContent", [zk, Bk] = fy(dd), yy = J.forwardRef(
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
      sticky: g = "partial",
      hideWhenDetached: x = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: S,
      ..._
    } = e, w = hy(dd, n), [P, C] = J.useState(null), k = Kr(t, (Re) => C(Re)), [D, O] = J.useState(null), Q = Wk(D), ee = (Q == null ? void 0 : Q.width) ?? 0, ne = (Q == null ? void 0 : Q.height) ?? 0, V = r + (o !== "center" ? "-" + o : ""), Y = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, te = Array.isArray(p) ? p : [p], R = te.length > 0, H = {
      padding: Y,
      boundary: te.filter(Uk),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: R
    }, { refs: z, floatingStyles: U, placement: K, isPositioned: j, middlewareData: I } = kk({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: V,
      whileElementsMounted: (...Re) => wk(...Re, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Ak({ mainAxis: a + ne, alignmentAxis: l }),
        d && Ik({
          mainAxis: !0,
          crossAxis: !1,
          limiter: g === "partial" ? Mk() : void 0,
          ...H
        }),
        d && Nk({ ...H }),
        jk({
          ...H,
          apply: ({ elements: Re, rects: ve, availableWidth: et, availableHeight: rt }) => {
            const { width: Ke, height: N } = ve.reference, Z = Re.floating.style;
            Z.setProperty("--radix-popper-available-width", `${et}px`), Z.setProperty("--radix-popper-available-height", `${rt}px`), Z.setProperty("--radix-popper-anchor-width", `${Ke}px`), Z.setProperty("--radix-popper-anchor-height", `${N}px`);
          }
        }),
        D && $k({ element: D, padding: u }),
        Yk({ arrowWidth: ee, arrowHeight: ne }),
        x && Rk({ strategy: "referenceHidden", ...H })
      ]
    }), [X, M] = wy(K), L = Br(S);
    vi(() => {
      j && (L == null || L());
    }, [j, L]);
    const ue = (be = I.arrow) == null ? void 0 : be.x, he = (we = I.arrow) == null ? void 0 : we.y, ce = ((Ce = I.arrow) == null ? void 0 : Ce.centerOffset) !== 0, [ye, ge] = J.useState();
    return vi(() => {
      P && ge(window.getComputedStyle(P).zIndex);
    }, [P]), /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: z.setFloating,
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
          zk,
          {
            scope: n,
            placedSide: X,
            onArrowChange: O,
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
yy.displayName = dd;
var xy = "PopperArrow", Hk = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, by = J.forwardRef(function(t, n) {
  const { __scopePopper: r, ...a } = t, o = Bk(xy, r), l = Hk[o.placedSide];
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
          Lk,
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
by.displayName = xy;
function Uk(e) {
  return e !== null;
}
var Yk = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, P, C;
    const { placement: n, rects: r, middlewareData: a } = t, l = ((w = a.arrow) == null ? void 0 : w.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, d = l ? 0 : e.arrowHeight, [p, h] = wy(n), g = { start: "0%", center: "50%", end: "100%" }[h], x = (((P = a.arrow) == null ? void 0 : P.x) ?? 0) + u / 2, b = (((C = a.arrow) == null ? void 0 : C.y) ?? 0) + d / 2;
    let S = "", _ = "";
    return p === "bottom" ? (S = l ? g : `${x}px`, _ = `${-d}px`) : p === "top" ? (S = l ? g : `${x}px`, _ = `${r.floating.height + d}px`) : p === "right" ? (S = `${-d}px`, _ = l ? g : `${b}px`) : p === "left" && (S = `${r.floating.width + d}px`, _ = l ? g : `${b}px`), { data: { x: S, y: _ } };
  }
});
function wy(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var qk = my, _y = vy, Kk = yy, Gk = by, Xk = "Portal", Ey = J.forwardRef((e, t) => {
  var u;
  const { container: n, ...r } = e, [a, o] = J.useState(!1);
  vi(() => o(!0), []);
  const l = n || a && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? GO.createPortal(/* @__PURE__ */ v.jsx(Cr.div, { ...r, ref: t }), l) : null;
});
Ey.displayName = Xk;
function Zk(e, t) {
  return J.useReducer((n, r) => t[n][r] ?? n, e);
}
var fd = (e) => {
  const { present: t, children: n } = e, r = Jk(t), a = typeof n == "function" ? n({ present: r.isPresent }) : J.Children.only(n), o = Kr(r.ref, Qk(a));
  return typeof n == "function" || r.isPresent ? J.cloneElement(a, { ref: o }) : null;
};
fd.displayName = "Presence";
function Jk(e) {
  const [t, n] = J.useState(), r = J.useRef({}), a = J.useRef(e), o = J.useRef("none"), l = e ? "mounted" : "unmounted", [u, d] = Zk(l, {
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
  return J.useEffect(() => {
    const p = rs(r.current);
    o.current = u === "mounted" ? p : "none";
  }, [u]), vi(() => {
    const p = r.current, h = a.current;
    if (h !== e) {
      const x = o.current, b = rs(p);
      e ? d("MOUNT") : b === "none" || (p == null ? void 0 : p.display) === "none" ? d("UNMOUNT") : d(h && x !== b ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, d]), vi(() => {
    if (t) {
      let p;
      const h = t.ownerDocument.defaultView ?? window, g = (b) => {
        const _ = rs(r.current).includes(b.animationName);
        if (b.target === t && _ && (d("ANIMATION_END"), !a.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", p = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, x = (b) => {
        b.target === t && (o.current = rs(r.current));
      };
      return t.addEventListener("animationstart", x), t.addEventListener("animationcancel", g), t.addEventListener("animationend", g), () => {
        h.clearTimeout(p), t.removeEventListener("animationstart", x), t.removeEventListener("animationcancel", g), t.removeEventListener("animationend", g);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: J.useCallback((p) => {
      p && (r.current = getComputedStyle(p)), n(p);
    }, [])
  };
}
function rs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Qk(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function eP({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, a] = tP({ defaultProp: t, onChange: n }), o = e !== void 0, l = o ? e : r, u = Br(n), d = J.useCallback(
    (p) => {
      if (o) {
        const g = typeof p == "function" ? p(e) : p;
        g !== e && u(g);
      } else
        a(p);
    },
    [o, e, a, u]
  );
  return [l, d];
}
function tP({
  defaultProp: e,
  onChange: t
}) {
  const n = J.useState(e), [r] = n, a = J.useRef(r), o = Br(t);
  return J.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [r, a, o]), n;
}
var nP = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Wi = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), as = {}, Vu = 0, Cy = function(e) {
  return e && (e.host || Cy(e.parentNode));
}, rP = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Cy(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, iP = function(e, t, n, r) {
  var a = rP(t, Array.isArray(e) ? e : [e]);
  as[n] || (as[n] = /* @__PURE__ */ new WeakMap());
  var o = as[n], l = [], u = /* @__PURE__ */ new Set(), d = new Set(a), p = function(g) {
    !g || u.has(g) || (u.add(g), p(g.parentNode));
  };
  a.forEach(p);
  var h = function(g) {
    !g || d.has(g) || Array.prototype.forEach.call(g.children, function(x) {
      if (u.has(x))
        h(x);
      else
        try {
          var b = x.getAttribute(r), S = b !== null && b !== "false", _ = (Wi.get(x) || 0) + 1, w = (o.get(x) || 0) + 1;
          Wi.set(x, _), o.set(x, w), l.push(x), _ === 1 && S && is.set(x, !0), w === 1 && x.setAttribute(n, "true"), S || x.setAttribute(r, "true");
        } catch (P) {
          console.error("aria-hidden: cannot operate on ", x, P);
        }
    });
  };
  return h(t), u.clear(), Vu++, function() {
    l.forEach(function(g) {
      var x = Wi.get(g) - 1, b = o.get(g) - 1;
      Wi.set(g, x), o.set(g, b), x || (is.has(g) || g.removeAttribute(r), is.delete(g)), b || g.removeAttribute(n);
    }), Vu--, Vu || (Wi = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), as = {});
  };
}, aP = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = nP(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), iP(r, a, n, "aria-hidden")) : function() {
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
function Ty(e, t) {
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
      } catch (g) {
        l(g);
      }
    }
    function d(h) {
      try {
        p(r.throw(h));
      } catch (g) {
        l(g);
      }
    }
    function p(h) {
      h.done ? o(h.value) : a(h.value).then(u, d);
    }
    p((r = r.apply(e, t || [])).next());
  });
}
function oP(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var vs = "right-scroll-bar-position", ys = "width-before-scroll-bar", sP = "with-scroll-bars-hidden", lP = "--removed-body-scroll-bar-size";
function zu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function uP(e, t) {
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
var cP = typeof window < "u" ? J.useLayoutEffect : J.useEffect, vm = /* @__PURE__ */ new WeakMap();
function dP(e, t) {
  var n = uP(null, function(r) {
    return e.forEach(function(a) {
      return zu(a, r);
    });
  });
  return cP(function() {
    var r = vm.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), l = n.current;
      a.forEach(function(u) {
        o.has(u) || zu(u, null);
      }), o.forEach(function(u) {
        a.has(u) || zu(u, l);
      });
    }
    vm.set(n, e);
  }, [e]), n;
}
function fP(e) {
  return e;
}
function pP(e, t) {
  t === void 0 && (t = fP);
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
function hP(e) {
  e === void 0 && (e = {});
  var t = pP(null);
  return t.options = fn({ async: !0, ssr: !1 }, e), t;
}
var Oy = function(e) {
  var t = e.sideCar, n = Ty(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return J.createElement(r, fn({}, n));
};
Oy.isSideCarExport = !0;
function mP(e, t) {
  return e.useMedium(t), Oy;
}
var Sy = hP(), Bu = function() {
}, al = J.forwardRef(function(e, t) {
  var n = J.useRef(null), r = J.useState({
    onScrollCapture: Bu,
    onWheelCapture: Bu,
    onTouchMoveCapture: Bu
  }), a = r[0], o = r[1], l = e.forwardProps, u = e.children, d = e.className, p = e.removeScrollBar, h = e.enabled, g = e.shards, x = e.sideCar, b = e.noIsolation, S = e.inert, _ = e.allowPinchZoom, w = e.as, P = w === void 0 ? "div" : w, C = e.gapMode, k = Ty(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), D = x, O = dP([n, t]), Q = fn(fn({}, k), a);
  return J.createElement(
    J.Fragment,
    null,
    h && J.createElement(D, { sideCar: Sy, removeScrollBar: p, shards: g, noIsolation: b, inert: S, setCallbacks: o, allowPinchZoom: !!_, lockRef: n, gapMode: C }),
    l ? J.cloneElement(J.Children.only(u), fn(fn({}, Q), { ref: O })) : J.createElement(P, fn({}, Q, { className: d, ref: O }), u)
  );
});
al.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
al.classNames = {
  fullWidth: ys,
  zeroRight: vs
};
var gP = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function vP() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = gP();
  return t && e.setAttribute("nonce", t), e;
}
function yP(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function xP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var bP = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = vP()) && (yP(t, n), xP(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, wP = function() {
  var e = bP();
  return function(t, n) {
    J.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Dy = function() {
  var e = wP(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, _P = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Hu = function(e) {
  return parseInt(e || "", 10) || 0;
}, EP = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Hu(n), Hu(r), Hu(a)];
}, CP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return _P;
  var t = EP(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, TP = Dy(), Xi = "data-scroll-locked", OP = function(e, t, n, r) {
  var a = e.left, o = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(sP, ` {
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
  
  .`).concat(vs, ` {
    right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(ys, ` {
    margin-right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(vs, " .").concat(vs, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ys, " .").concat(ys, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Xi, `] {
    `).concat(lP, ": ").concat(u, `px;
  }
`);
}, ym = function() {
  var e = parseInt(document.body.getAttribute(Xi) || "0", 10);
  return isFinite(e) ? e : 0;
}, SP = function() {
  J.useEffect(function() {
    return document.body.setAttribute(Xi, (ym() + 1).toString()), function() {
      var e = ym() - 1;
      e <= 0 ? document.body.removeAttribute(Xi) : document.body.setAttribute(Xi, e.toString());
    };
  }, []);
}, DP = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  SP();
  var o = J.useMemo(function() {
    return CP(a);
  }, [a]);
  return J.createElement(TP, { styles: OP(o, !t, a, n ? "" : "!important") });
}, Sc = !1;
if (typeof window < "u")
  try {
    var os = Object.defineProperty({}, "passive", {
      get: function() {
        return Sc = !0, !0;
      }
    });
    window.addEventListener("test", os, os), window.removeEventListener("test", os, os);
  } catch {
    Sc = !1;
  }
var Vi = Sc ? { passive: !1 } : !1, kP = function(e) {
  return e.tagName === "TEXTAREA";
}, ky = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !kP(e) && n[t] === "visible")
  );
}, PP = function(e) {
  return ky(e, "overflowY");
}, AP = function(e) {
  return ky(e, "overflowX");
}, xm = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = Py(e, r);
    if (a) {
      var o = Ay(e, r), l = o[1], u = o[2];
      if (l > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, IP = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, MP = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Py = function(e, t) {
  return e === "v" ? PP(t) : AP(t);
}, Ay = function(e, t) {
  return e === "v" ? IP(t) : MP(t);
}, NP = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, jP = function(e, t, n, r, a) {
  var o = NP(e, window.getComputedStyle(t).direction), l = o * r, u = n.target, d = t.contains(u), p = !1, h = l > 0, g = 0, x = 0;
  do {
    var b = Ay(e, u), S = b[0], _ = b[1], w = b[2], P = _ - w - o * S;
    (S || P) && Py(e, u) && (g += P, x += S), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !d && u !== document.body || // self content
    d && (t.contains(u) || t === u)
  );
  return (h && Math.abs(g) < 1 || !h && Math.abs(x) < 1) && (p = !0), p;
}, ss = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, bm = function(e) {
  return [e.deltaX, e.deltaY];
}, wm = function(e) {
  return e && "current" in e ? e.current : e;
}, RP = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, $P = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, FP = 0, zi = [];
function LP(e) {
  var t = J.useRef([]), n = J.useRef([0, 0]), r = J.useRef(), a = J.useState(FP++)[0], o = J.useState(Dy)[0], l = J.useRef(e);
  J.useEffect(function() {
    l.current = e;
  }, [e]), J.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var _ = oP([e.lockRef.current], (e.shards || []).map(wm), !0).filter(Boolean);
      return _.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), _.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = J.useCallback(function(_, w) {
    if ("touches" in _ && _.touches.length === 2 || _.type === "wheel" && _.ctrlKey)
      return !l.current.allowPinchZoom;
    var P = ss(_), C = n.current, k = "deltaX" in _ ? _.deltaX : C[0] - P[0], D = "deltaY" in _ ? _.deltaY : C[1] - P[1], O, Q = _.target, ee = Math.abs(k) > Math.abs(D) ? "h" : "v";
    if ("touches" in _ && ee === "h" && Q.type === "range")
      return !1;
    var ne = xm(ee, Q);
    if (!ne)
      return !0;
    if (ne ? O = ee : (O = ee === "v" ? "h" : "v", ne = xm(ee, Q)), !ne)
      return !1;
    if (!r.current && "changedTouches" in _ && (k || D) && (r.current = O), !O)
      return !0;
    var V = r.current || O;
    return jP(V, w, _, V === "h" ? k : D);
  }, []), d = J.useCallback(function(_) {
    var w = _;
    if (!(!zi.length || zi[zi.length - 1] !== o)) {
      var P = "deltaY" in w ? bm(w) : ss(w), C = t.current.filter(function(O) {
        return O.name === w.type && (O.target === w.target || w.target === O.shadowParent) && RP(O.delta, P);
      })[0];
      if (C && C.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!C) {
        var k = (l.current.shards || []).map(wm).filter(Boolean).filter(function(O) {
          return O.contains(w.target);
        }), D = k.length > 0 ? u(w, k[0]) : !l.current.noIsolation;
        D && w.cancelable && w.preventDefault();
      }
    }
  }, []), p = J.useCallback(function(_, w, P, C) {
    var k = { name: _, delta: w, target: P, should: C, shadowParent: WP(P) };
    t.current.push(k), setTimeout(function() {
      t.current = t.current.filter(function(D) {
        return D !== k;
      });
    }, 1);
  }, []), h = J.useCallback(function(_) {
    n.current = ss(_), r.current = void 0;
  }, []), g = J.useCallback(function(_) {
    p(_.type, bm(_), _.target, u(_, e.lockRef.current));
  }, []), x = J.useCallback(function(_) {
    p(_.type, ss(_), _.target, u(_, e.lockRef.current));
  }, []);
  J.useEffect(function() {
    return zi.push(o), e.setCallbacks({
      onScrollCapture: g,
      onWheelCapture: g,
      onTouchMoveCapture: x
    }), document.addEventListener("wheel", d, Vi), document.addEventListener("touchmove", d, Vi), document.addEventListener("touchstart", h, Vi), function() {
      zi = zi.filter(function(_) {
        return _ !== o;
      }), document.removeEventListener("wheel", d, Vi), document.removeEventListener("touchmove", d, Vi), document.removeEventListener("touchstart", h, Vi);
    };
  }, []);
  var b = e.removeScrollBar, S = e.inert;
  return J.createElement(
    J.Fragment,
    null,
    S ? J.createElement(o, { styles: $P(a) }) : null,
    b ? J.createElement(DP, { gapMode: e.gapMode }) : null
  );
}
function WP(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const VP = mP(Sy, LP);
var Iy = J.forwardRef(function(e, t) {
  return J.createElement(al, fn({}, e, { ref: t, sideCar: VP }));
});
Iy.classNames = al.classNames;
var pd = "Popover", [My, wB] = Gv(pd, [
  py
]), to = py(), [zP, Gr] = My(pd), Ny = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: l = !1
  } = e, u = to(t), d = J.useRef(null), [p, h] = J.useState(!1), [g = !1, x] = eP({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ v.jsx(qk, { ...u, children: /* @__PURE__ */ v.jsx(
    zP,
    {
      scope: t,
      contentId: WD(),
      triggerRef: d,
      open: g,
      onOpenChange: x,
      onOpenToggle: J.useCallback(() => x((b) => !b), [x]),
      hasCustomAnchor: p,
      onCustomAnchorAdd: J.useCallback(() => h(!0), []),
      onCustomAnchorRemove: J.useCallback(() => h(!1), []),
      modal: l,
      children: n
    }
  ) });
};
Ny.displayName = pd;
var jy = "PopoverAnchor", Ry = J.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Gr(jy, n), o = to(n), { onCustomAnchorAdd: l, onCustomAnchorRemove: u } = a;
    return J.useEffect(() => (l(), () => u()), [l, u]), /* @__PURE__ */ v.jsx(_y, { ...o, ...r, ref: t });
  }
);
Ry.displayName = jy;
var $y = "PopoverTrigger", Fy = J.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Gr($y, n), o = to(n), l = Kr(t, a.triggerRef), u = /* @__PURE__ */ v.jsx(
      Cr.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": By(a.open),
        ...r,
        ref: l,
        onClick: Vr(e.onClick, a.onOpenToggle)
      }
    );
    return a.hasCustomAnchor ? u : /* @__PURE__ */ v.jsx(_y, { asChild: !0, ...o, children: u });
  }
);
Fy.displayName = $y;
var hd = "PopoverPortal", [BP, HP] = My(hd, {
  forceMount: void 0
}), Ly = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: a } = e, o = Gr(hd, t);
  return /* @__PURE__ */ v.jsx(BP, { scope: t, forceMount: n, children: /* @__PURE__ */ v.jsx(fd, { present: n || o.open, children: /* @__PURE__ */ v.jsx(Ey, { asChild: !0, container: a, children: r }) }) });
};
Ly.displayName = hd;
var ta = "PopoverContent", Wy = J.forwardRef(
  (e, t) => {
    const n = HP(ta, e.__scopePopover), { forceMount: r = n.forceMount, ...a } = e, o = Gr(ta, e.__scopePopover);
    return /* @__PURE__ */ v.jsx(fd, { present: r || o.open, children: o.modal ? /* @__PURE__ */ v.jsx(UP, { ...a, ref: t }) : /* @__PURE__ */ v.jsx(YP, { ...a, ref: t }) });
  }
);
Wy.displayName = ta;
var UP = J.forwardRef(
  (e, t) => {
    const n = Gr(ta, e.__scopePopover), r = J.useRef(null), a = Kr(t, r), o = J.useRef(!1);
    return J.useEffect(() => {
      const l = r.current;
      if (l) return aP(l);
    }, []), /* @__PURE__ */ v.jsx(Iy, { as: Tt, allowPinchZoom: !0, children: /* @__PURE__ */ v.jsx(
      Vy,
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
), YP = J.forwardRef(
  (e, t) => {
    const n = Gr(ta, e.__scopePopover), r = J.useRef(!1), a = J.useRef(!1);
    return /* @__PURE__ */ v.jsx(
      Vy,
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
), Vy = J.forwardRef(
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
      ...g
    } = e, x = Gr(ta, n), b = to(n);
    return PD(), /* @__PURE__ */ v.jsx(
      Qv,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: a,
        onUnmountAutoFocus: o,
        children: /* @__PURE__ */ v.jsx(
          Zv,
          {
            asChild: !0,
            disableOutsidePointerEvents: l,
            onInteractOutside: h,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: p,
            onDismiss: () => x.onOpenChange(!1),
            children: /* @__PURE__ */ v.jsx(
              Kk,
              {
                "data-state": By(x.open),
                role: "dialog",
                id: x.contentId,
                ...b,
                ...g,
                ref: t,
                style: {
                  ...g.style,
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
), zy = "PopoverClose", qP = J.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Gr(zy, n);
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
qP.displayName = zy;
var KP = "PopoverArrow", GP = J.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = to(n);
    return /* @__PURE__ */ v.jsx(Gk, { ...a, ...r, ref: t });
  }
);
GP.displayName = KP;
function By(e) {
  return e ? "open" : "closed";
}
var XP = Ny, ZP = Ry, JP = Fy, QP = Ly, eA = Wy;
const tA = XP, nA = JP, rA = ({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ref: r,
  forceMount: a,
  container: o,
  disableInteractions: l,
  onKeyDown: u,
  ...d
}) => /* @__PURE__ */ v.jsx(QP, { forceMount: a, container: o || document.querySelector("#root"), children: /* @__PURE__ */ v.jsx("div", { className: Pe(l && "pointer-events-none invisible"), children: /* @__PURE__ */ v.jsx(
  eA,
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
) }) }), $n = Object.assign(tA, {
  Trigger: nA,
  Content: rA,
  Anchor: ZP
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
const md = 6048e5, iA = 864e5;
let aA = {};
function no() {
  return aA;
}
function or(e, t) {
  var u, d, p, h;
  const n = no(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((h = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ?? 0, a = tt(e), o = a.getDay(), l = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function xi(e) {
  return or(e, { weekStartsOn: 1 });
}
function Hy(e) {
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
function As(e) {
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
  const n = na(e), r = na(t), a = +n - As(n), o = +r - As(r);
  return Math.round((a - o) / iA);
}
function oA(e) {
  const t = Hy(e), n = Cn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), xi(n);
}
function Dc(e, t) {
  const n = t * 7;
  return en(e, n);
}
function sA(e, t) {
  return qn(e, t * 12);
}
function lA(e) {
  let t;
  return e.forEach(function(n) {
    const r = tt(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function uA(e) {
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
function gd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function cA(e) {
  if (!gd(e) && typeof e != "number")
    return !1;
  const t = tt(e);
  return !isNaN(Number(t));
}
function Ga(e, t) {
  const n = tt(e), r = tt(t), a = n.getFullYear() - r.getFullYear(), o = n.getMonth() - r.getMonth();
  return a * 12 + o;
}
function dA(e, t, n) {
  const r = or(e, n), a = or(t, n), o = +r - As(r), l = +a - As(a);
  return Math.round((o - l) / md);
}
function vd(e) {
  const t = tt(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function mn(e) {
  const t = tt(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Uy(e) {
  const t = tt(e), n = Cn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function yd(e, t) {
  var u, d, p, h;
  const n = no(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((h = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ?? 0, a = tt(e), o = a.getDay(), l = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + l), a.setHours(23, 59, 59, 999), a;
}
function Yy(e) {
  return yd(e, { weekStartsOn: 1 });
}
const fA = {
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
}, pA = (e, t, n) => {
  let r;
  const a = fA[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Zi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const hA = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, mA = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, gA = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, vA = {
  date: Zi({
    formats: hA,
    defaultWidth: "full"
  }),
  time: Zi({
    formats: mA,
    defaultWidth: "full"
  }),
  dateTime: Zi({
    formats: gA,
    defaultWidth: "full"
  })
}, yA = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, xA = (e, t, n, r) => yA[e];
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
const bA = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, wA = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, _A = {
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
}, EA = {
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
}, CA = {
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
}, TA = {
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
}, OA = (e, t) => {
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
}, SA = {
  ordinalNumber: OA,
  era: Qn({
    values: bA,
    defaultWidth: "wide"
  }),
  quarter: Qn({
    values: wA,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Qn({
    values: _A,
    defaultWidth: "wide"
  }),
  day: Qn({
    values: EA,
    defaultWidth: "wide"
  }),
  dayPeriod: Qn({
    values: CA,
    defaultWidth: "wide",
    formattingValues: TA,
    defaultFormattingWidth: "wide"
  })
};
function er(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const l = o[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(u) ? kA(u, (g) => g.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      DA(u, (g) => g.test(l))
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
function DA(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function kA(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function qy(e) {
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
const PA = /^(\d+)(th|st|nd|rd)?/i, AA = /\d+/i, IA = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, MA = {
  any: [/^b/i, /^(a|c)/i]
}, NA = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, jA = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, RA = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, $A = {
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
}, FA = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, LA = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, WA = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, VA = {
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
}, zA = {
  ordinalNumber: qy({
    matchPattern: PA,
    parsePattern: AA,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: er({
    matchPatterns: IA,
    defaultMatchWidth: "wide",
    parsePatterns: MA,
    defaultParseWidth: "any"
  }),
  quarter: er({
    matchPatterns: NA,
    defaultMatchWidth: "wide",
    parsePatterns: jA,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: er({
    matchPatterns: RA,
    defaultMatchWidth: "wide",
    parsePatterns: $A,
    defaultParseWidth: "any"
  }),
  day: er({
    matchPatterns: FA,
    defaultMatchWidth: "wide",
    parsePatterns: LA,
    defaultParseWidth: "any"
  }),
  dayPeriod: er({
    matchPatterns: WA,
    defaultMatchWidth: "any",
    parsePatterns: VA,
    defaultParseWidth: "any"
  })
}, Ky = {
  code: "en-US",
  formatDistance: pA,
  formatLong: vA,
  formatRelative: xA,
  localize: SA,
  match: zA,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function BA(e) {
  const t = tt(e);
  return nr(t, Uy(t)) + 1;
}
function Gy(e) {
  const t = tt(e), n = +xi(t) - +oA(t);
  return Math.round(n / md) + 1;
}
function Xy(e, t) {
  var h, g, x, b;
  const n = tt(e), r = n.getFullYear(), a = no(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((g = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((b = (x = a.locale) == null ? void 0 : x.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, l = Cn(e, 0);
  l.setFullYear(r + 1, 0, o), l.setHours(0, 0, 0, 0);
  const u = or(l, t), d = Cn(e, 0);
  d.setFullYear(r, 0, o), d.setHours(0, 0, 0, 0);
  const p = or(d, t);
  return n.getTime() >= u.getTime() ? r + 1 : n.getTime() >= p.getTime() ? r : r - 1;
}
function HA(e, t) {
  var u, d, p, h;
  const n = no(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((h = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, a = Xy(e, t), o = Cn(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), or(o, t);
}
function Zy(e, t) {
  const n = tt(e), r = +or(n, t) - +HA(n, t);
  return Math.round(r / md) + 1;
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
}, _m = {
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
    const a = Xy(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const l = o % 100;
      return ft(l, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : ft(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Hy(e);
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
    const a = Zy(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : ft(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Gy(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ft(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : $r.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = BA(e);
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
        return Cm(r);
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
        return Cm(r);
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
        return "GMT" + Em(r, ":");
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
        return "GMT" + Em(r, ":");
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
function Em(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + ft(o, 2);
}
function Cm(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ft(Math.abs(e) / 60, 2) : ui(e, t);
}
function ui(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = ft(Math.trunc(r / 60), 2), o = ft(r % 60, 2);
  return n + a + t + o;
}
const Tm = (e, t) => {
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
}, Jy = (e, t) => {
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
}, UA = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return Tm(e, t);
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
  return o.replace("{{date}}", Tm(r, t)).replace("{{time}}", Jy(a, t));
}, YA = {
  p: Jy,
  P: UA
}, qA = /^D+$/, KA = /^Y+$/, GA = ["D", "DD", "YY", "YYYY"];
function XA(e) {
  return qA.test(e);
}
function ZA(e) {
  return KA.test(e);
}
function JA(e, t, n) {
  const r = QA(e, t, n);
  if (console.warn(r), GA.includes(e)) throw new RangeError(r);
}
function QA(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const eI = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, tI = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, nI = /^'([^]*?)'?$/, rI = /''/g, iI = /[a-zA-Z]/;
function Ci(e, t, n) {
  var h, g, x, b, S, _, w, P;
  const r = no(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Ky, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((g = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, l = (n == null ? void 0 : n.weekStartsOn) ?? ((_ = (S = n == null ? void 0 : n.locale) == null ? void 0 : S.options) == null ? void 0 : _.weekStartsOn) ?? r.weekStartsOn ?? ((P = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : P.weekStartsOn) ?? 0, u = tt(e);
  if (!cA(u))
    throw new RangeError("Invalid time value");
  let d = t.match(tI).map((C) => {
    const k = C[0];
    if (k === "p" || k === "P") {
      const D = YA[k];
      return D(C, a.formatLong);
    }
    return C;
  }).join("").match(eI).map((C) => {
    if (C === "''")
      return { isToken: !1, value: "'" };
    const k = C[0];
    if (k === "'")
      return { isToken: !1, value: aI(C) };
    if (_m[k])
      return { isToken: !0, value: C };
    if (k.match(iI))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && ZA(k) || !(n != null && n.useAdditionalDayOfYearTokens) && XA(k)) && JA(k, t, String(e));
    const D = _m[k[0]];
    return D(u, k, a.localize, p);
  }).join("");
}
function aI(e) {
  const t = e.match(nI);
  return t ? t[1].replace(rI, "'") : e;
}
function oI(e) {
  const t = tt(e), n = t.getFullYear(), r = t.getMonth(), a = Cn(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function sI(e) {
  return Math.trunc(+tt(e) / 1e3);
}
function lI(e) {
  const t = tt(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function uI(e, t) {
  return dA(
    lI(e),
    mn(e),
    t
  ) + 1;
}
function kc(e, t) {
  const n = tt(e), r = tt(t);
  return n.getTime() > r.getTime();
}
function Qy(e, t) {
  const n = tt(e), r = tt(t);
  return +n < +r;
}
function xd(e, t) {
  const n = tt(e), r = tt(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function cI(e, t) {
  const n = tt(e), r = tt(t);
  return n.getFullYear() === r.getFullYear();
}
function Uu(e, t) {
  return en(e, -t);
}
function Yu(e, t) {
  const n = tt(e), r = n.getFullYear(), a = n.getDate(), o = Cn(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const l = oI(o);
  return n.setMonth(t, Math.min(a, l)), n;
}
function Om(e, t) {
  const n = tt(e);
  return isNaN(+n) ? Cn(e, NaN) : (n.setFullYear(t), n);
}
const Sm = {
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
}, dI = (e, t, n) => {
  let r;
  const a = n != null && n.addSuffix ? Sm[e].withPreposition : Sm[e].standalone;
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", String(t)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : "vor " + r : r;
}, fI = {
  full: "EEEE, do MMMM y",
  // Montag, 7. Januar 2018
  long: "do MMMM y",
  // 7. Januar 2018
  medium: "do MMM y",
  // 7. Jan. 2018
  short: "dd.MM.y"
  // 07.01.2018
}, pI = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, hI = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, mI = {
  date: Zi({
    formats: fI,
    defaultWidth: "full"
  }),
  time: Zi({
    formats: pI,
    defaultWidth: "full"
  }),
  dateTime: Zi({
    formats: hI,
    defaultWidth: "full"
  })
}, gI = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: "P"
}, vI = (e, t, n, r) => gI[e], yI = {
  narrow: ["v.Chr.", "n.Chr."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["vor Christus", "nach Christus"]
}, xI = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
}, Pc = {
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
}, bI = {
  narrow: Pc.narrow,
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
  wide: Pc.wide
}, wI = {
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
}, _I = {
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
}, EI = {
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
}, CI = (e) => Number(e) + ".", TI = {
  ordinalNumber: CI,
  era: Qn({
    values: yI,
    defaultWidth: "wide"
  }),
  quarter: Qn({
    values: xI,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Qn({
    values: Pc,
    formattingValues: bI,
    defaultWidth: "wide"
  }),
  day: Qn({
    values: wI,
    defaultWidth: "wide"
  }),
  dayPeriod: Qn({
    values: _I,
    defaultWidth: "wide",
    formattingValues: EI,
    defaultFormattingWidth: "wide"
  })
}, OI = /^(\d+)(\.)?/i, SI = /\d+/i, DI = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
}, kI = {
  any: [/^v/i, /^n/i]
}, PI = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
}, AI = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, II = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
}, MI = {
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
}, NI = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
}, jI = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
}, RI = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
}, $I = {
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
}, FI = {
  ordinalNumber: qy({
    matchPattern: OI,
    parsePattern: SI,
    valueCallback: (e) => parseInt(e)
  }),
  era: er({
    matchPatterns: DI,
    defaultMatchWidth: "wide",
    parsePatterns: kI,
    defaultParseWidth: "any"
  }),
  quarter: er({
    matchPatterns: PI,
    defaultMatchWidth: "wide",
    parsePatterns: AI,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: er({
    matchPatterns: II,
    defaultMatchWidth: "wide",
    parsePatterns: MI,
    defaultParseWidth: "any"
  }),
  day: er({
    matchPatterns: NI,
    defaultMatchWidth: "wide",
    parsePatterns: jI,
    defaultParseWidth: "any"
  }),
  dayPeriod: er({
    matchPatterns: RI,
    defaultMatchWidth: "wide",
    parsePatterns: $I,
    defaultParseWidth: "any"
  })
}, LI = {
  code: "de",
  formatDistance: dI,
  formatLong: mI,
  formatRelative: vI,
  localize: TI,
  match: FI,
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
function WI(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function ex(e, t, n) {
  for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function ro(e) {
  return e.mode === "multiple";
}
function io(e) {
  return e.mode === "range";
}
function ol(e) {
  return e.mode === "single";
}
var VI = {
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
function zI(e, t) {
  return Ci(e, "LLLL y", t);
}
function BI(e, t) {
  return Ci(e, "d", t);
}
function HI(e, t) {
  return Ci(e, "LLLL", t);
}
function UI(e) {
  return "".concat(e);
}
function YI(e, t) {
  return Ci(e, "cccccc", t);
}
function qI(e, t) {
  return Ci(e, "yyyy", t);
}
var KI = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: zI,
  formatDay: BI,
  formatMonthCaption: HI,
  formatWeekNumber: UI,
  formatWeekdayName: YI,
  formatYearCaption: qI
}), GI = function(e, t, n) {
  return Ci(e, "do MMMM (EEEE)", n);
}, XI = function() {
  return "Month: ";
}, ZI = function() {
  return "Go to next month";
}, JI = function() {
  return "Go to previous month";
}, QI = function(e, t) {
  return Ci(e, "cccc", t);
}, eM = function(e) {
  return "Week n. ".concat(e);
}, tM = function() {
  return "Year: ";
}, nM = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: GI,
  labelMonthDropdown: XI,
  labelNext: ZI,
  labelPrevious: JI,
  labelWeekNumber: eM,
  labelWeekday: QI,
  labelYearDropdown: tM
});
function rM() {
  var e = "buttons", t = VI, n = Ky, r = {}, a = {}, o = 1, l = {}, u = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: KI,
    labels: nM,
    locale: n,
    modifiersClassNames: r,
    modifiers: a,
    numberOfMonths: o,
    styles: l,
    today: u,
    mode: "default"
  };
}
function iM(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, a = e.toMonth, o = e.fromDate, l = e.toDate;
  return r ? o = mn(r) : t && (o = new Date(t, 0, 1)), a ? l = vd(a) : n && (l = new Date(n, 11, 31)), {
    fromDate: o ? na(o) : void 0,
    toDate: l ? na(l) : void 0
  };
}
var tx = bi(void 0);
function aM(e) {
  var t, n = e.initialProps, r = rM(), a = iM(n), o = a.fromDate, l = a.toDate, u = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  u !== "buttons" && (!o || !l) && (u = "buttons");
  var d;
  (ol(n) || ro(n) || io(n)) && (d = n.onSelect);
  var p = je(je(je({}, r), n), { captionLayout: u, classNames: je(je({}, r.classNames), n.classNames), components: je({}, n.components), formatters: je(je({}, r.formatters), n.formatters), fromDate: o, labels: je(je({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: je(je({}, r.modifiers), n.modifiers), modifiersClassNames: je(je({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: d, styles: je(je({}, r.styles), n.styles), toDate: l });
  return v.jsx(tx.Provider, { value: p, children: e.children });
}
function bt() {
  var e = Yt(tx);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function nx(e) {
  var t = bt(), n = t.locale, r = t.classNames, a = t.styles, o = t.formatters.formatCaption;
  return v.jsx("div", { className: r.caption_label, style: a.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: o(e.displayMonth, { locale: n }) });
}
function oM(e) {
  return v.jsx("svg", je({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: v.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function rx(e) {
  var t, n, r = e.onChange, a = e.value, o = e.children, l = e.caption, u = e.className, d = e.style, p = bt(), h = (n = (t = p.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : oM;
  return v.jsxs("div", { className: u, style: d, children: [v.jsx("span", { className: p.classNames.vhidden, children: e["aria-label"] }), v.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: p.classNames.dropdown, style: p.styles.dropdown, value: a, onChange: r, children: o }), v.jsxs("div", { className: p.classNames.caption_label, style: p.styles.caption_label, "aria-hidden": "true", children: [l, v.jsx(h, { className: p.classNames.dropdown_icon, style: p.styles.dropdown_icon })] })] });
}
function sM(e) {
  var t, n = bt(), r = n.fromDate, a = n.toDate, o = n.styles, l = n.locale, u = n.formatters.formatMonthCaption, d = n.classNames, p = n.components, h = n.labels.labelMonthDropdown;
  if (!r)
    return v.jsx(v.Fragment, {});
  if (!a)
    return v.jsx(v.Fragment, {});
  var g = [];
  if (cI(r, a))
    for (var x = mn(r), b = r.getMonth(); b <= a.getMonth(); b++)
      g.push(Yu(x, b));
  else
    for (var x = mn(/* @__PURE__ */ new Date()), b = 0; b <= 11; b++)
      g.push(Yu(x, b));
  var S = function(w) {
    var P = Number(w.target.value), C = Yu(mn(e.displayMonth), P);
    e.onChange(C);
  }, _ = (t = p == null ? void 0 : p.Dropdown) !== null && t !== void 0 ? t : rx;
  return v.jsx(_, { name: "months", "aria-label": h(), className: d.dropdown_month, style: o.dropdown_month, onChange: S, value: e.displayMonth.getMonth(), caption: u(e.displayMonth, { locale: l }), children: g.map(function(w) {
    return v.jsx("option", { value: w.getMonth(), children: u(w, { locale: l }) }, w.getMonth());
  }) });
}
function lM(e) {
  var t, n = e.displayMonth, r = bt(), a = r.fromDate, o = r.toDate, l = r.locale, u = r.styles, d = r.classNames, p = r.components, h = r.formatters.formatYearCaption, g = r.labels.labelYearDropdown, x = [];
  if (!a)
    return v.jsx(v.Fragment, {});
  if (!o)
    return v.jsx(v.Fragment, {});
  for (var b = a.getFullYear(), S = o.getFullYear(), _ = b; _ <= S; _++)
    x.push(Om(Uy(/* @__PURE__ */ new Date()), _));
  var w = function(C) {
    var k = Om(mn(n), Number(C.target.value));
    e.onChange(k);
  }, P = (t = p == null ? void 0 : p.Dropdown) !== null && t !== void 0 ? t : rx;
  return v.jsx(P, { name: "years", "aria-label": g(), className: d.dropdown_year, style: u.dropdown_year, onChange: w, value: n.getFullYear(), caption: h(n, { locale: l }), children: x.map(function(C) {
    return v.jsx("option", { value: C.getFullYear(), children: h(C, { locale: l }) }, C.getFullYear());
  }) });
}
function uM(e, t) {
  var n = ht(e), r = n[0], a = n[1], o = t === void 0 ? r : t;
  return [o, a];
}
function cM(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, a = t || n || r || /* @__PURE__ */ new Date(), o = e.toDate, l = e.fromDate, u = e.numberOfMonths, d = u === void 0 ? 1 : u;
  if (o && Ga(o, a) < 0) {
    var p = -1 * (d - 1);
    a = qn(o, p);
  }
  return l && Ga(a, l) < 0 && (a = l), mn(a);
}
function dM() {
  var e = bt(), t = cM(e), n = uM(t, e.month), r = n[0], a = n[1], o = function(l) {
    var u;
    if (!e.disableNavigation) {
      var d = mn(l);
      a(d), (u = e.onMonthChange) === null || u === void 0 || u.call(e, d);
    }
  };
  return [r, o];
}
function fM(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, a = mn(e), o = mn(qn(a, r)), l = Ga(o, a), u = [], d = 0; d < l; d++) {
    var p = qn(a, d);
    u.push(p);
  }
  return n && (u = u.reverse()), u;
}
function pM(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, l = r ? o : 1, u = mn(e);
    if (!n)
      return qn(u, l);
    var d = Ga(n, e);
    if (!(d < o))
      return qn(u, l);
  }
}
function hM(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, l = r ? o : 1, u = mn(e);
    if (!n)
      return qn(u, -l);
    var d = Ga(u, n);
    if (!(d <= 0))
      return qn(u, -l);
  }
}
var ix = bi(void 0);
function mM(e) {
  var t = bt(), n = dM(), r = n[0], a = n[1], o = fM(r, t), l = pM(r, t), u = hM(r, t), d = function(g) {
    return o.some(function(x) {
      return xd(g, x);
    });
  }, p = function(g, x) {
    d(g) || (x && Qy(g, x) ? a(qn(g, 1 + t.numberOfMonths * -1)) : a(g));
  }, h = {
    currentMonth: r,
    displayMonths: o,
    goToMonth: a,
    goToDate: p,
    previousMonth: u,
    nextMonth: l,
    isDateDisplayed: d
  };
  return v.jsx(ix.Provider, { value: h, children: e.children });
}
function ao() {
  var e = Yt(ix);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Dm(e) {
  var t, n = bt(), r = n.classNames, a = n.styles, o = n.components, l = ao().goToMonth, u = function(h) {
    l(qn(h, e.displayIndex ? -e.displayIndex : 0));
  }, d = (t = o == null ? void 0 : o.CaptionLabel) !== null && t !== void 0 ? t : nx, p = v.jsx(d, { id: e.id, displayMonth: e.displayMonth });
  return v.jsxs("div", { className: r.caption_dropdowns, style: a.caption_dropdowns, children: [v.jsx("div", { className: r.vhidden, children: p }), v.jsx(sM, { onChange: u, displayMonth: e.displayMonth }), v.jsx(lM, { onChange: u, displayMonth: e.displayMonth })] });
}
function gM(e) {
  return v.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: v.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function vM(e) {
  return v.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: v.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Is = Js(function(e, t) {
  var n = bt(), r = n.classNames, a = n.styles, o = [r.button_reset, r.button];
  e.className && o.push(e.className);
  var l = o.join(" "), u = je(je({}, a.button_reset), a.button);
  return e.style && Object.assign(u, e.style), v.jsx("button", je({}, e, { ref: t, type: "button", className: l, style: u }));
});
function yM(e) {
  var t, n, r = bt(), a = r.dir, o = r.locale, l = r.classNames, u = r.styles, d = r.labels, p = d.labelPrevious, h = d.labelNext, g = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return v.jsx(v.Fragment, {});
  var x = p(e.previousMonth, { locale: o }), b = [
    l.nav_button,
    l.nav_button_previous
  ].join(" "), S = h(e.nextMonth, { locale: o }), _ = [
    l.nav_button,
    l.nav_button_next
  ].join(" "), w = (t = g == null ? void 0 : g.IconRight) !== null && t !== void 0 ? t : vM, P = (n = g == null ? void 0 : g.IconLeft) !== null && n !== void 0 ? n : gM;
  return v.jsxs("div", { className: l.nav, style: u.nav, children: [!e.hidePrevious && v.jsx(Is, { name: "previous-month", "aria-label": x, className: b, style: u.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: a === "rtl" ? v.jsx(w, { className: l.nav_icon, style: u.nav_icon }) : v.jsx(P, { className: l.nav_icon, style: u.nav_icon }) }), !e.hideNext && v.jsx(Is, { name: "next-month", "aria-label": S, className: _, style: u.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: a === "rtl" ? v.jsx(P, { className: l.nav_icon, style: u.nav_icon }) : v.jsx(w, { className: l.nav_icon, style: u.nav_icon }) })] });
}
function km(e) {
  var t = bt().numberOfMonths, n = ao(), r = n.previousMonth, a = n.nextMonth, o = n.goToMonth, l = n.displayMonths, u = l.findIndex(function(S) {
    return xd(e.displayMonth, S);
  }), d = u === 0, p = u === l.length - 1, h = t > 1 && (d || !p), g = t > 1 && (p || !d), x = function() {
    r && o(r);
  }, b = function() {
    a && o(a);
  };
  return v.jsx(yM, { displayMonth: e.displayMonth, hideNext: h, hidePrevious: g, nextMonth: a, previousMonth: r, onPreviousClick: x, onNextClick: b });
}
function xM(e) {
  var t, n = bt(), r = n.classNames, a = n.disableNavigation, o = n.styles, l = n.captionLayout, u = n.components, d = (t = u == null ? void 0 : u.CaptionLabel) !== null && t !== void 0 ? t : nx, p;
  return a ? p = v.jsx(d, { id: e.id, displayMonth: e.displayMonth }) : l === "dropdown" ? p = v.jsx(Dm, { displayMonth: e.displayMonth, id: e.id }) : l === "dropdown-buttons" ? p = v.jsxs(v.Fragment, { children: [v.jsx(Dm, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), v.jsx(km, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : p = v.jsxs(v.Fragment, { children: [v.jsx(d, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), v.jsx(km, { displayMonth: e.displayMonth, id: e.id })] }), v.jsx("div", { className: r.caption, style: o.caption, children: p });
}
function bM(e) {
  var t = bt(), n = t.footer, r = t.styles, a = t.classNames.tfoot;
  return n ? v.jsx("tfoot", { className: a, style: r.tfoot, children: v.jsx("tr", { children: v.jsx("td", { colSpan: 8, children: n }) }) }) : v.jsx(v.Fragment, {});
}
function wM(e, t, n) {
  for (var r = n ? xi(/* @__PURE__ */ new Date()) : or(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), a = [], o = 0; o < 7; o++) {
    var l = en(r, o);
    a.push(l);
  }
  return a;
}
function _M() {
  var e = bt(), t = e.classNames, n = e.styles, r = e.showWeekNumber, a = e.locale, o = e.weekStartsOn, l = e.ISOWeek, u = e.formatters.formatWeekdayName, d = e.labels.labelWeekday, p = wM(a, o, l);
  return v.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && v.jsx("td", { style: n.head_cell, className: t.head_cell }), p.map(function(h, g) {
    return v.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": d(h, { locale: a }), children: u(h, { locale: a }) }, g);
  })] });
}
function EM() {
  var e, t = bt(), n = t.classNames, r = t.styles, a = t.components, o = (e = a == null ? void 0 : a.HeadRow) !== null && e !== void 0 ? e : _M;
  return v.jsx("thead", { style: r.head, className: n.head, children: v.jsx(o, {}) });
}
function CM(e) {
  var t = bt(), n = t.locale, r = t.formatters.formatDay;
  return v.jsx(v.Fragment, { children: r(e.date, { locale: n }) });
}
var bd = bi(void 0);
function TM(e) {
  if (!ro(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return v.jsx(bd.Provider, { value: t, children: e.children });
  }
  return v.jsx(OM, { initialProps: e.initialProps, children: e.children });
}
function OM(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = t.min, o = t.max, l = function(p, h, g) {
    var x, b;
    (x = t.onDayClick) === null || x === void 0 || x.call(t, p, h, g);
    var S = !!(h.selected && a && (r == null ? void 0 : r.length) === a);
    if (!S) {
      var _ = !!(!h.selected && o && (r == null ? void 0 : r.length) === o);
      if (!_) {
        var w = r ? ex([], r) : [];
        if (h.selected) {
          var P = w.findIndex(function(C) {
            return hn(p, C);
          });
          w.splice(P, 1);
        } else
          w.push(p);
        (b = t.onSelect) === null || b === void 0 || b.call(t, w, p, h, g);
      }
    }
  }, u = {
    disabled: []
  };
  r && u.disabled.push(function(p) {
    var h = o && r.length > o - 1, g = r.some(function(x) {
      return hn(x, p);
    });
    return !!(h && !g);
  });
  var d = {
    selected: r,
    onDayClick: l,
    modifiers: u
  };
  return v.jsx(bd.Provider, { value: d, children: n });
}
function wd() {
  var e = Yt(bd);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function SM(e, t) {
  var n = t || {}, r = n.from, a = n.to;
  return r && a ? hn(a, e) && hn(r, e) ? void 0 : hn(a, e) ? { from: a, to: void 0 } : hn(r, e) ? void 0 : kc(r, e) ? { from: e, to: a } : { from: r, to: e } : a ? kc(e, a) ? { from: a, to: e } : { from: e, to: a } : r ? Qy(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var _d = bi(void 0);
function DM(e) {
  if (!io(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return v.jsx(_d.Provider, { value: t, children: e.children });
  }
  return v.jsx(kM, { initialProps: e.initialProps, children: e.children });
}
function kM(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = r || {}, o = a.from, l = a.to, u = t.min, d = t.max, p = function(b, S, _) {
    var w, P;
    (w = t.onDayClick) === null || w === void 0 || w.call(t, b, S, _);
    var C = SM(b, r);
    (P = t.onSelect) === null || P === void 0 || P.call(t, C, b, S, _);
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
    after: Uu(o, u - 1),
    before: en(o, u - 1)
  }), o && l && h.disabled.push({
    after: o,
    before: en(o, u - 1)
  }), !o && l && h.disabled.push({
    after: Uu(l, u - 1),
    before: en(l, u - 1)
  })), d) {
    if (o && !l && (h.disabled.push({
      before: en(o, -d + 1)
    }), h.disabled.push({
      after: en(o, d - 1)
    })), o && l) {
      var g = nr(l, o) + 1, x = d - g;
      h.disabled.push({
        before: Uu(o, x)
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
  return v.jsx(_d.Provider, { value: { selected: r, onDayClick: p, modifiers: h }, children: n });
}
function Ed() {
  var e = Yt(_d);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function xs(e) {
  return Array.isArray(e) ? ex([], e) : e !== void 0 ? [e] : [];
}
function PM(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], a = n[1];
    t[r] = xs(a);
  }), t;
}
var Kn;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Kn || (Kn = {}));
var AM = Kn.Selected, xr = Kn.Disabled, IM = Kn.Hidden, MM = Kn.Today, qu = Kn.RangeEnd, Ku = Kn.RangeMiddle, Gu = Kn.RangeStart, NM = Kn.Outside;
function jM(e, t, n) {
  var r, a = (r = {}, r[AM] = xs(e.selected), r[xr] = xs(e.disabled), r[IM] = xs(e.hidden), r[MM] = [e.today], r[qu] = [], r[Ku] = [], r[Gu] = [], r[NM] = [], r);
  return e.fromDate && a[xr].push({ before: e.fromDate }), e.toDate && a[xr].push({ after: e.toDate }), ro(e) ? a[xr] = a[xr].concat(t.modifiers[xr]) : io(e) && (a[xr] = a[xr].concat(n.modifiers[xr]), a[Gu] = n.modifiers[Gu], a[Ku] = n.modifiers[Ku], a[qu] = n.modifiers[qu]), a;
}
var ax = bi(void 0);
function RM(e) {
  var t = bt(), n = wd(), r = Ed(), a = jM(t, n, r), o = PM(t.modifiers), l = je(je({}, a), o);
  return v.jsx(ax.Provider, { value: l, children: e.children });
}
function ox() {
  var e = Yt(ax);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function $M(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function FM(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function LM(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function WM(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function VM(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function zM(e, t) {
  var n, r = t.from, a = t.to;
  if (r && a) {
    var o = nr(a, r) < 0;
    o && (n = [a, r], r = n[0], a = n[1]);
    var l = nr(e, r) >= 0 && nr(a, e) >= 0;
    return l;
  }
  return a ? hn(a, e) : r ? hn(r, e) : !1;
}
function BM(e) {
  return gd(e);
}
function HM(e) {
  return Array.isArray(e) && e.every(gd);
}
function UM(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (BM(n))
      return hn(e, n);
    if (HM(n))
      return n.includes(e);
    if (FM(n))
      return zM(e, n);
    if (VM(n))
      return n.dayOfWeek.includes(e.getDay());
    if ($M(n)) {
      var r = nr(n.before, e), a = nr(n.after, e), o = r > 0, l = a < 0, u = kc(n.before, n.after);
      return u ? l && o : o || l;
    }
    return LM(n) ? nr(e, n.after) > 0 : WM(n) ? nr(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Cd(e, t, n) {
  var r = Object.keys(t).reduce(function(o, l) {
    var u = t[l];
    return UM(e, u) && o.push(l), o;
  }, []), a = {};
  return r.forEach(function(o) {
    return a[o] = !0;
  }), n && !xd(e, n) && (a.outside = !0), a;
}
function YM(e, t) {
  for (var n = mn(e[0]), r = vd(e[e.length - 1]), a, o, l = n; l <= r; ) {
    var u = Cd(l, t), d = !u.disabled && !u.hidden;
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
var qM = 365;
function sx(e, t) {
  var n = t.moveBy, r = t.direction, a = t.context, o = t.modifiers, l = t.retry, u = l === void 0 ? { count: 0, lastFocused: e } : l, d = a.weekStartsOn, p = a.fromDate, h = a.toDate, g = a.locale, x = {
    day: en,
    week: Dc,
    month: qn,
    year: sA,
    startOfWeek: function(w) {
      return a.ISOWeek ? xi(w) : or(w, { locale: g, weekStartsOn: d });
    },
    endOfWeek: function(w) {
      return a.ISOWeek ? Yy(w) : yd(w, { locale: g, weekStartsOn: d });
    }
  }, b = x[n](e, r === "after" ? 1 : -1);
  r === "before" && p ? b = lA([p, b]) : r === "after" && h && (b = uA([h, b]));
  var S = !0;
  if (o) {
    var _ = Cd(b, o);
    S = !_.disabled && !_.hidden;
  }
  return S ? b : u.count > qM ? u.lastFocused : sx(b, {
    moveBy: n,
    direction: r,
    context: a,
    modifiers: o,
    retry: je(je({}, u), { count: u.count + 1 })
  });
}
var lx = bi(void 0);
function KM(e) {
  var t = ao(), n = ox(), r = ht(), a = r[0], o = r[1], l = ht(), u = l[0], d = l[1], p = YM(t.displayMonths, n), h = a ?? (u && t.isDateDisplayed(u)) ? u : p, g = function() {
    d(a), o(void 0);
  }, x = function(w) {
    o(w);
  }, b = bt(), S = function(w, P) {
    if (a) {
      var C = sx(a, {
        moveBy: w,
        direction: P,
        context: b,
        modifiers: n
      });
      hn(a, C) || (t.goToDate(C, a), x(C));
    }
  }, _ = {
    focusedDay: a,
    focusTarget: h,
    blur: g,
    focus: x,
    focusDayAfter: function() {
      return S("day", "after");
    },
    focusDayBefore: function() {
      return S("day", "before");
    },
    focusWeekAfter: function() {
      return S("week", "after");
    },
    focusWeekBefore: function() {
      return S("week", "before");
    },
    focusMonthBefore: function() {
      return S("month", "before");
    },
    focusMonthAfter: function() {
      return S("month", "after");
    },
    focusYearBefore: function() {
      return S("year", "before");
    },
    focusYearAfter: function() {
      return S("year", "after");
    },
    focusStartOfWeek: function() {
      return S("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return S("endOfWeek", "after");
    }
  };
  return v.jsx(lx.Provider, { value: _, children: e.children });
}
function Td() {
  var e = Yt(lx);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function GM(e, t) {
  var n = ox(), r = Cd(e, n, t);
  return r;
}
var Od = bi(void 0);
function XM(e) {
  if (!ol(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return v.jsx(Od.Provider, { value: t, children: e.children });
  }
  return v.jsx(ZM, { initialProps: e.initialProps, children: e.children });
}
function ZM(e) {
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
  return v.jsx(Od.Provider, { value: a, children: n });
}
function ux() {
  var e = Yt(Od);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function JM(e, t) {
  var n = bt(), r = ux(), a = wd(), o = Ed(), l = Td(), u = l.focusDayAfter, d = l.focusDayBefore, p = l.focusWeekAfter, h = l.focusWeekBefore, g = l.blur, x = l.focus, b = l.focusMonthBefore, S = l.focusMonthAfter, _ = l.focusYearBefore, w = l.focusYearAfter, P = l.focusStartOfWeek, C = l.focusEndOfWeek, k = function(j) {
    var I, X, M, L;
    ol(n) ? (I = r.onDayClick) === null || I === void 0 || I.call(r, e, t, j) : ro(n) ? (X = a.onDayClick) === null || X === void 0 || X.call(a, e, t, j) : io(n) ? (M = o.onDayClick) === null || M === void 0 || M.call(o, e, t, j) : (L = n.onDayClick) === null || L === void 0 || L.call(n, e, t, j);
  }, D = function(j) {
    var I;
    x(e), (I = n.onDayFocus) === null || I === void 0 || I.call(n, e, t, j);
  }, O = function(j) {
    var I;
    g(), (I = n.onDayBlur) === null || I === void 0 || I.call(n, e, t, j);
  }, Q = function(j) {
    var I;
    (I = n.onDayMouseEnter) === null || I === void 0 || I.call(n, e, t, j);
  }, ee = function(j) {
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
  }, H = function(j) {
    var I;
    (I = n.onDayTouchStart) === null || I === void 0 || I.call(n, e, t, j);
  }, z = function(j) {
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
        j.preventDefault(), j.stopPropagation(), j.shiftKey ? _() : b();
        break;
      case "PageDown":
        j.preventDefault(), j.stopPropagation(), j.shiftKey ? w() : S();
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
    onBlur: O,
    onKeyDown: U,
    onKeyUp: z,
    onMouseEnter: Q,
    onMouseLeave: ee,
    onPointerEnter: ne,
    onPointerLeave: V,
    onTouchCancel: Y,
    onTouchEnd: te,
    onTouchMove: R,
    onTouchStart: H
  };
  return K;
}
function QM() {
  var e = bt(), t = ux(), n = wd(), r = Ed(), a = ol(e) ? t.selected : ro(e) ? n.selected : io(e) ? r.selected : void 0;
  return a;
}
function eN(e) {
  return Object.values(Kn).includes(e);
}
function tN(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var a = e.modifiersClassNames[r];
    if (a)
      n.push(a);
    else if (eN(r)) {
      var o = e.classNames["day_".concat(r)];
      o && n.push(o);
    }
  }), n;
}
function nN(e, t) {
  var n = je({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var a;
    n = je(je({}, n), (a = e.modifiersStyles) === null || a === void 0 ? void 0 : a[r]);
  }), n;
}
function rN(e, t, n) {
  var r, a, o, l = bt(), u = Td(), d = GM(e, t), p = JM(e, d), h = QM(), g = !!(l.onDayClick || l.mode !== "default");
  ct(function() {
    var Q;
    d.outside || u.focusedDay && g && hn(u.focusedDay, e) && ((Q = n.current) === null || Q === void 0 || Q.focus());
  }, [
    u.focusedDay,
    e,
    n,
    g,
    d.outside
  ]);
  var x = tN(l, d).join(" "), b = nN(l, d), S = !!(d.outside && !l.showOutsideDays || d.hidden), _ = (o = (a = l.components) === null || a === void 0 ? void 0 : a.DayContent) !== null && o !== void 0 ? o : CM, w = v.jsx(_, { date: e, displayMonth: t, activeModifiers: d }), P = {
    style: b,
    className: x,
    children: w,
    role: "gridcell"
  }, C = u.focusTarget && hn(u.focusTarget, e) && !d.outside, k = u.focusedDay && hn(u.focusedDay, e), D = je(je(je({}, P), (r = { disabled: d.disabled, role: "gridcell" }, r["aria-selected"] = d.selected, r.tabIndex = k || C ? 0 : -1, r)), p), O = {
    isButton: g,
    isHidden: S,
    activeModifiers: d,
    selectedDays: h,
    buttonProps: D,
    divProps: P
  };
  return O;
}
function iN(e) {
  var t = qe(null), n = rN(e.date, e.displayMonth, t);
  return n.isHidden ? v.jsx("div", { role: "gridcell" }) : n.isButton ? v.jsx(Is, je({ name: "day", ref: t }, n.buttonProps)) : v.jsx("div", je({}, n.divProps));
}
function aN(e) {
  var t = e.number, n = e.dates, r = bt(), a = r.onWeekNumberClick, o = r.styles, l = r.classNames, u = r.locale, d = r.labels.labelWeekNumber, p = r.formatters.formatWeekNumber, h = p(Number(t), { locale: u });
  if (!a)
    return v.jsx("span", { className: l.weeknumber, style: o.weeknumber, children: h });
  var g = d(Number(t), { locale: u }), x = function(b) {
    a(t, n, b);
  };
  return v.jsx(Is, { name: "week-number", "aria-label": g, className: l.weeknumber, style: o.weeknumber, onClick: x, children: h });
}
function oN(e) {
  var t, n, r = bt(), a = r.styles, o = r.classNames, l = r.showWeekNumber, u = r.components, d = (t = u == null ? void 0 : u.Day) !== null && t !== void 0 ? t : iN, p = (n = u == null ? void 0 : u.WeekNumber) !== null && n !== void 0 ? n : aN, h;
  return l && (h = v.jsx("td", { className: o.cell, style: a.cell, children: v.jsx(p, { number: e.weekNumber, dates: e.dates }) })), v.jsxs("tr", { className: o.row, style: a.row, children: [h, e.dates.map(function(g) {
    return v.jsx("td", { className: o.cell, style: a.cell, role: "presentation", children: v.jsx(d, { displayMonth: e.displayMonth, date: g }) }, sI(g));
  })] });
}
function Pm(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Yy(t) : yd(t, n), a = n != null && n.ISOWeek ? xi(e) : or(e, n), o = nr(r, a), l = [], u = 0; u <= o; u++)
    l.push(en(a, u));
  var d = l.reduce(function(p, h) {
    var g = n != null && n.ISOWeek ? Gy(h) : Zy(h, n), x = p.find(function(b) {
      return b.weekNumber === g;
    });
    return x ? (x.dates.push(h), p) : (p.push({
      weekNumber: g,
      dates: [h]
    }), p);
  }, []);
  return d;
}
function sN(e, t) {
  var n = Pm(mn(e), vd(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = uI(e, t);
    if (r < 6) {
      var a = n[n.length - 1], o = a.dates[a.dates.length - 1], l = Dc(o, 6 - r), u = Pm(Dc(o, 1), l, t);
      n.push.apply(n, u);
    }
  }
  return n;
}
function lN(e) {
  var t, n, r, a = bt(), o = a.locale, l = a.classNames, u = a.styles, d = a.hideHead, p = a.fixedWeeks, h = a.components, g = a.weekStartsOn, x = a.firstWeekContainsDate, b = a.ISOWeek, S = sN(e.displayMonth, {
    useFixedWeeks: !!p,
    ISOWeek: b,
    locale: o,
    weekStartsOn: g,
    firstWeekContainsDate: x
  }), _ = (t = h == null ? void 0 : h.Head) !== null && t !== void 0 ? t : EM, w = (n = h == null ? void 0 : h.Row) !== null && n !== void 0 ? n : oN, P = (r = h == null ? void 0 : h.Footer) !== null && r !== void 0 ? r : bM;
  return v.jsxs("table", { id: e.id, className: l.table, style: u.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!d && v.jsx(_, {}), v.jsx("tbody", { className: l.tbody, style: u.tbody, children: S.map(function(C) {
    return v.jsx(w, { displayMonth: e.displayMonth, dates: C.dates, weekNumber: C.weekNumber }, C.weekNumber);
  }) }), v.jsx(P, { displayMonth: e.displayMonth })] });
}
function uN() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var cN = uN() ? zr : ct, Xu = !1, dN = 0;
function Am() {
  return "react-day-picker-".concat(++dN);
}
function fN(e) {
  var t, n = e ?? (Xu ? Am() : null), r = ht(n), a = r[0], o = r[1];
  return cN(function() {
    a === null && o(Am());
  }, []), ct(function() {
    Xu === !1 && (Xu = !0);
  }, []), (t = e ?? a) !== null && t !== void 0 ? t : void 0;
}
function pN(e) {
  var t, n, r = bt(), a = r.dir, o = r.classNames, l = r.styles, u = r.components, d = ao().displayMonths, p = fN(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), h = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, g = [o.month], x = l.month, b = e.displayIndex === 0, S = e.displayIndex === d.length - 1, _ = !b && !S;
  a === "rtl" && (t = [b, S], S = t[0], b = t[1]), b && (g.push(o.caption_start), x = je(je({}, x), l.caption_start)), S && (g.push(o.caption_end), x = je(je({}, x), l.caption_end)), _ && (g.push(o.caption_between), x = je(je({}, x), l.caption_between));
  var w = (n = u == null ? void 0 : u.Caption) !== null && n !== void 0 ? n : xM;
  return v.jsxs("div", { className: g.join(" "), style: x, children: [v.jsx(w, { id: p, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), v.jsx(lN, { id: h, "aria-labelledby": p, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function hN(e) {
  var t = bt(), n = t.classNames, r = t.styles;
  return v.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function mN(e) {
  var t, n, r = e.initialProps, a = bt(), o = Td(), l = ao(), u = ht(!1), d = u[0], p = u[1];
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
  var g = je(je({}, a.styles.root), a.style), x = Object.keys(r).filter(function(S) {
    return S.startsWith("data-");
  }).reduce(function(S, _) {
    var w;
    return je(je({}, S), (w = {}, w[_] = r[_], w));
  }, {}), b = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : hN;
  return v.jsx("div", je({ className: h.join(" "), style: g, dir: a.dir, id: a.id, nonce: r.nonce, title: r.title, lang: r.lang }, x, { children: v.jsx(b, { children: l.displayMonths.map(function(S, _) {
    return v.jsx(pN, { displayIndex: _, displayMonth: S }, _);
  }) }) }));
}
function gN(e) {
  var t = e.children, n = WI(e, ["children"]);
  return v.jsx(aM, { initialProps: n, children: v.jsx(mM, { children: v.jsx(XM, { initialProps: n, children: v.jsx(TM, { initialProps: n, children: v.jsx(DM, { initialProps: n, children: v.jsx(RM, { children: v.jsx(KM, { children: t }) }) }) }) }) }) });
}
function vN(e) {
  return v.jsx(gN, je({}, e, { children: v.jsx(mN, { initialProps: e }) }));
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
function Ac(e, t) {
  return Ac = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ac(e, t);
}
function yN(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ac(e, t);
}
var Ic = { exports: {} }, ls = { exports: {} }, ot = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Im;
function xN() {
  if (Im) return ot;
  Im = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function k(O) {
    if (typeof O == "object" && O !== null) {
      var Q = O.$$typeof;
      switch (Q) {
        case t:
          switch (O = O.type, O) {
            case d:
            case p:
            case r:
            case o:
            case a:
            case g:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case u:
                case h:
                case S:
                case b:
                case l:
                  return O;
                default:
                  return Q;
              }
          }
        case n:
          return Q;
      }
    }
  }
  function D(O) {
    return k(O) === p;
  }
  return ot.AsyncMode = d, ot.ConcurrentMode = p, ot.ContextConsumer = u, ot.ContextProvider = l, ot.Element = t, ot.ForwardRef = h, ot.Fragment = r, ot.Lazy = S, ot.Memo = b, ot.Portal = n, ot.Profiler = o, ot.StrictMode = a, ot.Suspense = g, ot.isAsyncMode = function(O) {
    return D(O) || k(O) === d;
  }, ot.isConcurrentMode = D, ot.isContextConsumer = function(O) {
    return k(O) === u;
  }, ot.isContextProvider = function(O) {
    return k(O) === l;
  }, ot.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }, ot.isForwardRef = function(O) {
    return k(O) === h;
  }, ot.isFragment = function(O) {
    return k(O) === r;
  }, ot.isLazy = function(O) {
    return k(O) === S;
  }, ot.isMemo = function(O) {
    return k(O) === b;
  }, ot.isPortal = function(O) {
    return k(O) === n;
  }, ot.isProfiler = function(O) {
    return k(O) === o;
  }, ot.isStrictMode = function(O) {
    return k(O) === a;
  }, ot.isSuspense = function(O) {
    return k(O) === g;
  }, ot.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === r || O === p || O === o || O === a || O === g || O === x || typeof O == "object" && O !== null && (O.$$typeof === S || O.$$typeof === b || O.$$typeof === l || O.$$typeof === u || O.$$typeof === h || O.$$typeof === w || O.$$typeof === P || O.$$typeof === C || O.$$typeof === _);
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
var Mm;
function bN() {
  return Mm || (Mm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function k(fe) {
      return typeof fe == "string" || typeof fe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      fe === r || fe === p || fe === o || fe === a || fe === g || fe === x || typeof fe == "object" && fe !== null && (fe.$$typeof === S || fe.$$typeof === b || fe.$$typeof === l || fe.$$typeof === u || fe.$$typeof === h || fe.$$typeof === w || fe.$$typeof === P || fe.$$typeof === C || fe.$$typeof === _);
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
              case g:
                return ve;
              default:
                var et = ve && ve.$$typeof;
                switch (et) {
                  case u:
                  case h:
                  case S:
                  case b:
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
    var O = d, Q = p, ee = u, ne = l, V = t, Y = h, te = r, R = S, H = b, z = n, U = o, K = a, j = g, I = !1;
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
      return D(fe) === S;
    }
    function be(fe) {
      return D(fe) === b;
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
      return D(fe) === g;
    }
    st.AsyncMode = O, st.ConcurrentMode = Q, st.ContextConsumer = ee, st.ContextProvider = ne, st.Element = V, st.ForwardRef = Y, st.Fragment = te, st.Lazy = R, st.Memo = H, st.Portal = z, st.Profiler = U, st.StrictMode = K, st.Suspense = j, st.isAsyncMode = X, st.isConcurrentMode = M, st.isContextConsumer = L, st.isContextProvider = ue, st.isElement = he, st.isForwardRef = ce, st.isFragment = ye, st.isLazy = ge, st.isMemo = be, st.isPortal = we, st.isProfiler = Ce, st.isStrictMode = _e, st.isSuspense = Se, st.isValidElementType = k, st.typeOf = D;
  }()), st;
}
var Nm;
function cx() {
  return Nm || (Nm = 1, process.env.NODE_ENV === "production" ? ls.exports = xN() : ls.exports = bN()), ls.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zu, jm;
function wN() {
  if (jm) return Zu;
  jm = 1;
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
  return Zu = a() ? Object.assign : function(o, l) {
    for (var u, d = r(o), p, h = 1; h < arguments.length; h++) {
      u = Object(arguments[h]);
      for (var g in u)
        t.call(u, g) && (d[g] = u[g]);
      if (e) {
        p = e(u);
        for (var x = 0; x < p.length; x++)
          n.call(u, p[x]) && (d[p[x]] = u[p[x]]);
      }
    }
    return d;
  }, Zu;
}
var Ju, Rm;
function Sd() {
  if (Rm) return Ju;
  Rm = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ju = e, Ju;
}
var Qu, $m;
function dx() {
  return $m || ($m = 1, Qu = Function.call.bind(Object.prototype.hasOwnProperty)), Qu;
}
var ec, Fm;
function _N() {
  if (Fm) return ec;
  Fm = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Sd(), n = {}, r = dx();
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
          var g;
          try {
            if (typeof o[h] != "function") {
              var x = Error(
                (d || "React class") + ": " + u + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            g = o[h](l, h, d, u, null, t);
          } catch (S) {
            g = S;
          }
          if (g && !(g instanceof Error) && e(
            (d || "React class") + ": type specification of " + u + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in n)) {
            n[g.message] = !0;
            var b = p ? p() : "";
            e(
              "Failed " + u + " type: " + g.message + (b ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ec = a, ec;
}
var tc, Lm;
function EN() {
  if (Lm) return tc;
  Lm = 1;
  var e = cx(), t = wN(), n = Sd(), r = dx(), a = _N(), o = function() {
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
  return tc = function(u, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function g(M) {
      var L = M && (p && M[p] || M[h]);
      if (typeof L == "function")
        return L;
    }
    var x = "<<anonymous>>", b = {
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
      elementType: O(),
      instanceOf: Q,
      node: Y(),
      objectOf: ne,
      oneOf: ee,
      oneOfType: V,
      shape: R,
      exact: H
    };
    function S(M, L) {
      return M === L ? M !== 0 || 1 / M === 1 / L : M !== M && L !== L;
    }
    function _(M, L) {
      this.message = M, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function w(M) {
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
      return w(L);
    }
    function C() {
      return w(l);
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
      return w(L);
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
      return w(M);
    }
    function O() {
      function M(L, ue, he, ce, ye) {
        var ge = L[ue];
        if (!e.isValidElementType(ge)) {
          var be = K(ge);
          return new _("Invalid " + ce + " `" + ye + "` of type " + ("`" + be + "` supplied to `" + he + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(M);
    }
    function Q(M) {
      function L(ue, he, ce, ye, ge) {
        if (!(ue[he] instanceof M)) {
          var be = M.name || x, we = X(ue[he]);
          return new _("Invalid " + ye + " `" + ge + "` of type " + ("`" + we + "` supplied to `" + ce + "`, expected ") + ("instance of `" + be + "`."));
        }
        return null;
      }
      return w(L);
    }
    function ee(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function L(ue, he, ce, ye, ge) {
        for (var be = ue[he], we = 0; we < M.length; we++)
          if (S(be, M[we]))
            return null;
        var Ce = JSON.stringify(M, function(Se, fe) {
          var Re = j(fe);
          return Re === "symbol" ? String(fe) : fe;
        });
        return new _("Invalid " + ye + " `" + ge + "` of value `" + String(be) + "` " + ("supplied to `" + ce + "`, expected one of " + Ce + "."));
      }
      return w(L);
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
      return w(L);
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
      return w(he);
    }
    function Y() {
      function M(L, ue, he, ce, ye) {
        return z(L[ue]) ? null : new _("Invalid " + ce + " `" + ye + "` supplied to " + ("`" + he + "`, expected a ReactNode."));
      }
      return w(M);
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
      return w(L);
    }
    function H(M) {
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
      return w(L);
    }
    function z(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(z);
          if (M === null || u(M))
            return !0;
          var L = g(M);
          if (L) {
            var ue = L.call(M), he;
            if (L !== M.entries) {
              for (; !(he = ue.next()).done; )
                if (!z(he.value))
                  return !1;
            } else
              for (; !(he = ue.next()).done; ) {
                var ce = he.value;
                if (ce && !z(ce[1]))
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
    return b.checkPropTypes = a, b.resetWarningCache = a.resetWarningCache, b.PropTypes = b, b;
  }, tc;
}
var nc, Wm;
function CN() {
  if (Wm) return nc;
  Wm = 1;
  var e = Sd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, nc = function() {
    function r(l, u, d, p, h, g) {
      if (g !== e) {
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
  }, nc;
}
if (process.env.NODE_ENV !== "production") {
  var TN = cx(), ON = !0;
  Ic.exports = EN()(TN.isElement, ON);
} else
  Ic.exports = CN()();
var SN = Ic.exports;
const le = /* @__PURE__ */ Qs(SN);
var Mc = { exports: {} }, lt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vm;
function DN() {
  if (Vm) return lt;
  Vm = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case e:
          switch (w = w.type, w) {
            case n:
            case a:
            case r:
            case p:
            case h:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case u:
                case l:
                case d:
                case x:
                case g:
                case o:
                  return w;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return lt.ContextConsumer = l, lt.ContextProvider = o, lt.Element = e, lt.ForwardRef = d, lt.Fragment = n, lt.Lazy = x, lt.Memo = g, lt.Portal = t, lt.Profiler = a, lt.StrictMode = r, lt.Suspense = p, lt.SuspenseList = h, lt.isAsyncMode = function() {
    return !1;
  }, lt.isConcurrentMode = function() {
    return !1;
  }, lt.isContextConsumer = function(w) {
    return _(w) === l;
  }, lt.isContextProvider = function(w) {
    return _(w) === o;
  }, lt.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, lt.isForwardRef = function(w) {
    return _(w) === d;
  }, lt.isFragment = function(w) {
    return _(w) === n;
  }, lt.isLazy = function(w) {
    return _(w) === x;
  }, lt.isMemo = function(w) {
    return _(w) === g;
  }, lt.isPortal = function(w) {
    return _(w) === t;
  }, lt.isProfiler = function(w) {
    return _(w) === a;
  }, lt.isStrictMode = function(w) {
    return _(w) === r;
  }, lt.isSuspense = function(w) {
    return _(w) === p;
  }, lt.isSuspenseList = function(w) {
    return _(w) === h;
  }, lt.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === a || w === r || w === p || w === h || w === b || typeof w == "object" && w !== null && (w.$$typeof === x || w.$$typeof === g || w.$$typeof === o || w.$$typeof === l || w.$$typeof === d || w.$$typeof === S || w.getModuleId !== void 0);
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
var zm;
function kN() {
  return zm || (zm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), S = !1, _ = !1, w = !1, P = !1, C = !1, k;
    k = Symbol.for("react.module.reference");
    function D(ve) {
      return !!(typeof ve == "string" || typeof ve == "function" || ve === n || ve === a || C || ve === r || ve === p || ve === h || P || ve === b || S || _ || w || typeof ve == "object" && ve !== null && (ve.$$typeof === x || ve.$$typeof === g || ve.$$typeof === o || ve.$$typeof === l || ve.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ve.$$typeof === k || ve.getModuleId !== void 0));
    }
    function O(ve) {
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
                  case g:
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
    var Q = l, ee = o, ne = e, V = d, Y = n, te = x, R = g, H = t, z = a, U = r, K = p, j = h, I = !1, X = !1;
    function M(ve) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(ve) {
      return X || (X = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(ve) {
      return O(ve) === l;
    }
    function he(ve) {
      return O(ve) === o;
    }
    function ce(ve) {
      return typeof ve == "object" && ve !== null && ve.$$typeof === e;
    }
    function ye(ve) {
      return O(ve) === d;
    }
    function ge(ve) {
      return O(ve) === n;
    }
    function be(ve) {
      return O(ve) === x;
    }
    function we(ve) {
      return O(ve) === g;
    }
    function Ce(ve) {
      return O(ve) === t;
    }
    function _e(ve) {
      return O(ve) === a;
    }
    function Se(ve) {
      return O(ve) === r;
    }
    function fe(ve) {
      return O(ve) === p;
    }
    function Re(ve) {
      return O(ve) === h;
    }
    ut.ContextConsumer = Q, ut.ContextProvider = ee, ut.Element = ne, ut.ForwardRef = V, ut.Fragment = Y, ut.Lazy = te, ut.Memo = R, ut.Portal = H, ut.Profiler = z, ut.StrictMode = U, ut.Suspense = K, ut.SuspenseList = j, ut.isAsyncMode = M, ut.isConcurrentMode = L, ut.isContextConsumer = ue, ut.isContextProvider = he, ut.isElement = ce, ut.isForwardRef = ye, ut.isFragment = ge, ut.isLazy = be, ut.isMemo = we, ut.isPortal = Ce, ut.isProfiler = _e, ut.isStrictMode = Se, ut.isSuspense = fe, ut.isSuspenseList = Re, ut.isValidElementType = D, ut.typeOf = O;
  }()), ut;
}
process.env.NODE_ENV === "production" ? Mc.exports = DN() : Mc.exports = kN();
var Bm = Mc.exports;
const Hm = (e) => typeof e == "object" && e != null && e.nodeType === 1, Um = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", us = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return Um(n.overflowY, t) || Um(n.overflowX, t) || ((r) => {
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
}, cs = (e, t, n, r, a, o, l, u) => o < e && l > t || o > e && l < t ? 0 : o <= e && u <= n || l >= t && u >= n ? o - e - r : l > t && u < n || o < e && u > n ? l - t + a : 0, PN = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, AN = (e, t) => {
  var n, r, a, o;
  if (typeof document > "u") return [];
  const { scrollMode: l, block: u, inline: d, boundary: p, skipOverflowHiddenElements: h } = t, g = typeof p == "function" ? p : (K) => K !== p;
  if (!Hm(e)) throw new TypeError("Invalid target");
  const x = document.scrollingElement || document.documentElement, b = [];
  let S = e;
  for (; Hm(S) && g(S); ) {
    if (S = PN(S), S === x) {
      b.push(S);
      break;
    }
    S != null && S === document.body && us(S) && !us(document.documentElement) || S != null && us(S, h) && b.push(S);
  }
  const _ = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (o = (a = window.visualViewport) == null ? void 0 : a.height) != null ? o : innerHeight, { scrollX: P, scrollY: C } = window, { height: k, width: D, top: O, right: Q, bottom: ee, left: ne } = e.getBoundingClientRect(), { top: V, right: Y, bottom: te, left: R } = ((K) => {
    const j = window.getComputedStyle(K);
    return { top: parseFloat(j.scrollMarginTop) || 0, right: parseFloat(j.scrollMarginRight) || 0, bottom: parseFloat(j.scrollMarginBottom) || 0, left: parseFloat(j.scrollMarginLeft) || 0 };
  })(e);
  let H = u === "start" || u === "nearest" ? O - V : u === "end" ? ee + te : O + k / 2 - V + te, z = d === "center" ? ne + D / 2 - R + Y : d === "end" ? Q + Y : ne - R;
  const U = [];
  for (let K = 0; K < b.length; K++) {
    const j = b[K], { height: I, width: X, top: M, right: L, bottom: ue, left: he } = j.getBoundingClientRect();
    if (l === "if-needed" && O >= 0 && ne >= 0 && ee <= w && Q <= _ && (j === x && !us(j) || O >= M && ee <= ue && ne >= he && Q <= L)) return U;
    const ce = getComputedStyle(j), ye = parseInt(ce.borderLeftWidth, 10), ge = parseInt(ce.borderTopWidth, 10), be = parseInt(ce.borderRightWidth, 10), we = parseInt(ce.borderBottomWidth, 10);
    let Ce = 0, _e = 0;
    const Se = "offsetWidth" in j ? j.offsetWidth - j.clientWidth - ye - be : 0, fe = "offsetHeight" in j ? j.offsetHeight - j.clientHeight - ge - we : 0, Re = "offsetWidth" in j ? j.offsetWidth === 0 ? 0 : X / j.offsetWidth : 0, ve = "offsetHeight" in j ? j.offsetHeight === 0 ? 0 : I / j.offsetHeight : 0;
    if (x === j) Ce = u === "start" ? H : u === "end" ? H - w : u === "nearest" ? cs(C, C + w, w, ge, we, C + H, C + H + k, k) : H - w / 2, _e = d === "start" ? z : d === "center" ? z - _ / 2 : d === "end" ? z - _ : cs(P, P + _, _, ye, be, P + z, P + z + D, D), Ce = Math.max(0, Ce + C), _e = Math.max(0, _e + P);
    else {
      Ce = u === "start" ? H - M - ge : u === "end" ? H - ue + we + fe : u === "nearest" ? cs(M, ue, I, ge, we + fe, H, H + k, k) : H - (M + I / 2) + fe / 2, _e = d === "start" ? z - he - ye : d === "center" ? z - (he + X / 2) + Se / 2 : d === "end" ? z - L + be + Se : cs(he, L, X, ye, be + Se, z, z + D, D);
      const { scrollLeft: et, scrollTop: rt } = j;
      Ce = ve === 0 ? 0 : Math.max(0, Math.min(rt + Ce / ve, j.scrollHeight - I / ve + fe)), _e = Re === 0 ? 0 : Math.max(0, Math.min(et + _e / Re, j.scrollWidth - X / Re + Se)), H += rt - Ce, z += et - _e;
    }
    U.push({ el: j, top: Ce, left: _e });
  }
  return U;
};
var IN = 0;
function Ym(e) {
  return typeof e == "function" ? e : dn;
}
function dn() {
}
function fx(e, t) {
  if (e) {
    var n = AN(e, {
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
function qm(e, t, n) {
  var r = e === t || t instanceof n.Node && e.contains && e.contains(t);
  return r;
}
function sl(e, t) {
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
function px() {
  return String(IN++);
}
function MN(e) {
  var t = e.isOpen, n = e.resultCount, r = e.previousResultCount;
  return t ? n ? n !== r ? n + " result" + (n === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function Km(e, t) {
  return e = Array.isArray(e) ? (
    /* istanbul ignore next (preact) */
    e[0]
  ) : e, !e && t ? t : e;
}
function hx(e) {
  return typeof e.type == "string";
}
function mx(e) {
  return e.props;
}
function NN(e, t) {
  console.error('The property "' + t + '" is required in "' + e + '"');
}
var jN = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function ds(e) {
  e === void 0 && (e = {});
  var t = {};
  return jN.forEach(function(n) {
    e.hasOwnProperty(n) && (t[n] = e[n]);
  }), t;
}
function Ms(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(n, r) {
    return n[r] = Nc(t, r) ? t[r] : e[r], n;
  }, {});
}
function Nc(e, t) {
  return e[t] !== void 0;
}
function Xa(e) {
  var t = e.key, n = e.keyCode;
  return n >= 37 && n <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function RN(e) {
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
function Ns(e, t, n, r) {
  return r === void 0 && (r = !0), n && t.some(function(a) {
    return a && (qm(a, e, n) || r && qm(a, n.document.activeElement, n));
  });
}
var Dd = dn;
process.env.NODE_ENV !== "production" && (Dd = function(t, n, r) {
  var a = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
  Object.keys(t).forEach(function(o) {
    n[o] !== void 0 && r[o] === void 0 ? console.error('downshift: A component has changed the controlled prop "' + o + '" to be uncontrolled. ' + a) : n[o] === void 0 && r[o] !== void 0 && console.error('downshift: A component has changed the uncontrolled prop "' + o + '" to be controlled. ' + a);
  });
});
var $N = sl(function(e) {
  gx(e).textContent = "";
}, 500);
function gx(e) {
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
function vx(e, t) {
  if (!(!e || !t)) {
    var n = gx(t);
    n.textContent = e, $N(t);
  }
}
function FN(e) {
  var t = e == null ? void 0 : e.getElementById("a11y-status-message");
  t && t.remove();
}
var yx = process.env.NODE_ENV !== "production" ? "__autocomplete_unknown__" : 0, xx = process.env.NODE_ENV !== "production" ? "__autocomplete_mouseup__" : 1, bx = process.env.NODE_ENV !== "production" ? "__autocomplete_item_mouseenter__" : 2, bs = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_up__" : 3, ws = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_down__" : 4, wx = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_escape__" : 5, _x = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_enter__" : 6, Ex = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_home__" : 7, Cx = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_end__" : 8, Tx = process.env.NODE_ENV !== "production" ? "__autocomplete_click_item__" : 9, Ox = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_input__" : 10, Sx = process.env.NODE_ENV !== "production" ? "__autocomplete_change_input__" : 11, Dx = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_space_button__" : 12, jc = process.env.NODE_ENV !== "production" ? "__autocomplete_click_button__" : 13, kx = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_button__" : 14, Px = process.env.NODE_ENV !== "production" ? "__autocomplete_controlled_prop_updated_selected_item__" : 15, Ax = process.env.NODE_ENV !== "production" ? "__autocomplete_touchend__" : 16, LN = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blurButton: kx,
  blurInput: Ox,
  changeInput: Sx,
  clickButton: jc,
  clickItem: Tx,
  controlledPropUpdatedSelectedItem: Px,
  itemMouseEnter: bx,
  keyDownArrowDown: ws,
  keyDownArrowUp: bs,
  keyDownEnd: Cx,
  keyDownEnter: _x,
  keyDownEscape: wx,
  keyDownHome: Ex,
  keyDownSpaceButton: Dx,
  mouseUp: xx,
  touchEnd: Ax,
  unknown: yx
}), WN = ["refKey", "ref"], VN = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], zN = ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"], BN = ["refKey", "ref"], HN = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], UN = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function n(a) {
      var o;
      o = t.call(this, a) || this, o.id = o.props.id || "downshift-" + px(), o.menuId = o.props.menuId || o.id + "-menu", o.labelId = o.props.labelId || o.id + "-label", o.inputId = o.props.inputId || o.id + "-input", o.getItemId = o.props.getItemId || function(C) {
        return o.id + "-item-" + C;
      }, o.items = [], o.itemCount = null, o.previousResultCount = 0, o.timeoutIds = [], o.internalSetTimeout = function(C, k) {
        var D = setTimeout(function() {
          o.timeoutIds = o.timeoutIds.filter(function(O) {
            return O !== D;
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
        C === void 0 && (C = o.props.defaultHighlightedIndex), k === void 0 && (k = {}), k = ds(k), o.internalSetState(Ue({
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
        k = ds(k), o.internalSetState(Ue({
          isOpen: o.props.defaultIsOpen,
          highlightedIndex: o.props.defaultHighlightedIndex,
          selectedItem: C,
          inputValue: o.props.itemToString(C)
        }, k), D);
      }, o.selectItemAtIndex = function(C, k, D) {
        var O = o.items[C];
        O != null && o.selectItem(O, k, D);
      }, o.selectHighlightedItem = function(C, k) {
        return o.selectItemAtIndex(o.getState().highlightedIndex, C, k);
      }, o.internalSetState = function(C, k) {
        var D, O, Q = {}, ee = typeof C == "function";
        return !ee && C.hasOwnProperty("inputValue") && o.props.onInputValueChange(C.inputValue, Ue({}, o.getStateAndHelpers(), C)), o.setState(function(ne) {
          var V;
          ne = o.getState(ne);
          var Y = ee ? C(ne) : C;
          Y = o.props.stateReducer(ne, Y), D = Y.hasOwnProperty("selectedItem");
          var te = {};
          return D && Y.selectedItem !== ne.selectedItem && (O = Y.selectedItem), (V = Y).type || (V.type = yx), Object.keys(Y).forEach(function(R) {
            ne[R] !== Y[R] && (Q[R] = Y[R]), R !== "type" && (Y[R], Nc(o.props, R) || (te[R] = Y[R]));
          }), ee && Y.hasOwnProperty("inputValue") && o.props.onInputValueChange(Y.inputValue, Ue({}, o.getStateAndHelpers(), Y)), te;
        }, function() {
          Ym(k)();
          var ne = Object.keys(Q).length > 1;
          ne && o.props.onStateChange(Q, o.getStateAndHelpers()), D && o.props.onSelect(C.selectedItem, o.getStateAndHelpers()), O !== void 0 && o.props.onChange(O, o.getStateAndHelpers()), o.props.onUserAction(Q, o.getStateAndHelpers());
        });
      }, o.rootRef = function(C) {
        return o._rootNode = C;
      }, o.getRootProps = function(C, k) {
        var D, O = C === void 0 ? {} : C, Q = O.refKey, ee = Q === void 0 ? "ref" : Q, ne = O.ref, V = zn(O, WN), Y = k === void 0 ? {} : k, te = Y.suppressRefError, R = te === void 0 ? !1 : te;
        o.getRootProps.called = !0, o.getRootProps.refKey = ee, o.getRootProps.suppressRefError = R;
        var H = o.getState(), z = H.isOpen;
        return Ue((D = {}, D[ee] = mi(ne, o.rootRef), D.role = "combobox", D["aria-expanded"] = z, D["aria-haspopup"] = "listbox", D["aria-owns"] = z ? o.menuId : void 0, D["aria-labelledby"] = o.labelId, D), V);
      }, o.keyDownHandlers = {
        ArrowDown: function(k) {
          var D = this;
          if (k.preventDefault(), this.getState().isOpen) {
            var O = k.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(O, {
              type: ws
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: ws
            }, function() {
              var Q = D.getItemCount();
              if (Q > 0) {
                var ee = D.getState(), ne = ee.highlightedIndex, V = pi(ne, 1, {
                  length: Q
                }, D.isItemDisabled, !0);
                D.setHighlightedIndex(V, {
                  type: ws
                });
              }
            });
        },
        ArrowUp: function(k) {
          var D = this;
          if (k.preventDefault(), this.getState().isOpen) {
            var O = k.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(O, {
              type: bs
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: bs
            }, function() {
              var Q = D.getItemCount();
              if (Q > 0) {
                var ee = D.getState(), ne = ee.highlightedIndex, V = pi(ne, -1, {
                  length: Q
                }, D.isItemDisabled, !0);
                D.setHighlightedIndex(V, {
                  type: bs
                });
              }
            });
        },
        Enter: function(k) {
          if (k.which !== 229) {
            var D = this.getState(), O = D.isOpen, Q = D.highlightedIndex;
            if (O && Q != null) {
              k.preventDefault();
              var ee = this.items[Q], ne = this.getItemNodeFromIndex(Q);
              if (ee == null || ne && ne.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: _x
              });
            }
          }
        },
        Escape: function(k) {
          k.preventDefault(), this.reset(Ue({
            type: wx
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }
      }, o.buttonKeyDownHandlers = Ue({}, o.keyDownHandlers, {
        " ": function(k) {
          k.preventDefault(), this.toggleMenu({
            type: Dx
          });
        }
      }), o.inputKeyDownHandlers = Ue({}, o.keyDownHandlers, {
        Home: function(k) {
          var D = this.getState(), O = D.isOpen;
          if (O) {
            k.preventDefault();
            var Q = this.getItemCount();
            if (!(Q <= 0 || !O)) {
              var ee = ra(0, !1, {
                length: Q
              }, this.isItemDisabled);
              this.setHighlightedIndex(ee, {
                type: Ex
              });
            }
          }
        },
        End: function(k) {
          var D = this.getState(), O = D.isOpen;
          if (O) {
            k.preventDefault();
            var Q = this.getItemCount();
            if (!(Q <= 0 || !O)) {
              var ee = ra(Q - 1, !0, {
                length: Q
              }, this.isItemDisabled);
              this.setHighlightedIndex(ee, {
                type: Cx
              });
            }
          }
        }
      }), o.getToggleButtonProps = function(C) {
        var k = C === void 0 ? {} : C, D = k.onClick;
        k.onPress;
        var O = k.onKeyDown, Q = k.onKeyUp, ee = k.onBlur, ne = zn(k, VN), V = o.getState(), Y = V.isOpen, te = {
          onClick: Pt(D, o.buttonHandleClick),
          onKeyDown: Pt(O, o.buttonHandleKeyDown),
          onKeyUp: Pt(Q, o.buttonHandleKeyUp),
          onBlur: Pt(ee, o.buttonHandleBlur)
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
        var k = Xa(C);
        o.buttonKeyDownHandlers[k] && o.buttonKeyDownHandlers[k].call(o, C);
      }, o.buttonHandleClick = function(C) {
        if (C.preventDefault(), o.props.environment) {
          var k = o.props.environment.document, D = k.body, O = k.activeElement;
          D && D === O && C.target.focus();
        }
        process.env.NODE_ENV === "test" ? o.toggleMenu({
          type: jc
        }) : o.internalSetTimeout(function() {
          return o.toggleMenu({
            type: jc
          });
        });
      }, o.buttonHandleBlur = function(C) {
        var k = C.target;
        o.internalSetTimeout(function() {
          if (!(o.isMouseDown || !o.props.environment)) {
            var D = o.props.environment.document.activeElement;
            (D == null || D.id !== o.inputId) && D !== k && o.reset({
              type: kx
            });
          }
        });
      }, o.getLabelProps = function(C) {
        return Ue({
          htmlFor: o.inputId,
          id: o.labelId
        }, C);
      }, o.getInputProps = function(C) {
        var k = C === void 0 ? {} : C, D = k.onKeyDown, O = k.onBlur, Q = k.onChange, ee = k.onInput;
        k.onChangeText;
        var ne = zn(k, zN), V, Y = {};
        V = "onChange";
        var te = o.getState(), R = te.inputValue, H = te.isOpen, z = te.highlightedIndex;
        if (!ne.disabled) {
          var U;
          Y = (U = {}, U[V] = Pt(Q, ee, o.inputHandleChange), U.onKeyDown = Pt(D, o.inputHandleKeyDown), U.onBlur = Pt(O, o.inputHandleBlur), U);
        }
        return Ue({
          "aria-autocomplete": "list",
          "aria-activedescendant": H && typeof z == "number" && z >= 0 ? o.getItemId(z) : void 0,
          "aria-controls": H ? o.menuId : void 0,
          "aria-labelledby": ne && ne["aria-label"] ? void 0 : o.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: R,
          id: o.inputId
        }, Y, ne);
      }, o.inputHandleKeyDown = function(C) {
        var k = Xa(C);
        k && o.inputKeyDownHandlers[k] && o.inputKeyDownHandlers[k].call(o, C);
      }, o.inputHandleChange = function(C) {
        o.internalSetState({
          type: Sx,
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
              type: Ox
            });
          }
        });
      }, o.menuRef = function(C) {
        o._menuNode = C;
      }, o.getMenuProps = function(C, k) {
        var D, O = C === void 0 ? {} : C, Q = O.refKey, ee = Q === void 0 ? "ref" : Q, ne = O.ref, V = zn(O, BN), Y = k === void 0 ? {} : k, te = Y.suppressRefError, R = te === void 0 ? !1 : te;
        return o.getMenuProps.called = !0, o.getMenuProps.refKey = ee, o.getMenuProps.suppressRefError = R, Ue((D = {}, D[ee] = mi(ne, o.menuRef), D.role = "listbox", D["aria-labelledby"] = V && V["aria-label"] ? void 0 : o.labelId, D.id = o.menuId, D), V);
      }, o.getItemProps = function(C) {
        var k, D = C === void 0 ? {} : C, O = D.onMouseMove, Q = D.onMouseDown, ee = D.onClick;
        D.onPress;
        var ne = D.index, V = D.item, Y = V === void 0 ? process.env.NODE_ENV === "production" ? (
          /* istanbul ignore next */
          void 0
        ) : NN("getItemProps", "item") : V, te = zn(D, HN);
        ne === void 0 ? (o.items.push(Y), ne = o.items.indexOf(Y)) : o.items[ne] = Y;
        var R = "onClick", H = ee, z = (k = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: Pt(O, function() {
            ne !== o.getState().highlightedIndex && (o.setHighlightedIndex(ne, {
              type: bx
            }), o.avoidScrolling = !0, o.internalSetTimeout(function() {
              return o.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: Pt(Q, function(K) {
            K.preventDefault();
          })
        }, k[R] = Pt(H, function() {
          o.selectItemAtIndex(ne, {
            type: Tx
          });
        }), k), U = te.disabled ? {
          onMouseDown: z.onMouseDown
        } : z;
        return Ue({
          id: o.getItemId(ne),
          role: "option",
          "aria-selected": o.getState().highlightedIndex === ne
        }, U, te);
      }, o.clearItems = function() {
        o.items = [];
      }, o.reset = function(C, k) {
        C === void 0 && (C = {}), C = ds(C), o.internalSetState(function(D) {
          var O = D.selectedItem;
          return Ue({
            isOpen: o.props.defaultIsOpen,
            highlightedIndex: o.props.defaultHighlightedIndex,
            inputValue: o.props.itemToString(O)
          }, C);
        }, k);
      }, o.toggleMenu = function(C, k) {
        C === void 0 && (C = {}), C = ds(C), o.internalSetState(function(D) {
          var O = D.isOpen;
          return Ue({
            isOpen: !O
          }, O && {
            highlightedIndex: o.props.defaultHighlightedIndex
          }, C);
        }, function() {
          var D = o.getState(), O = D.isOpen, Q = D.highlightedIndex;
          O && o.getItemCount() > 0 && typeof Q == "number" && o.setHighlightedIndex(Q, C), Ym(k)();
        });
      }, o.openMenu = function(C) {
        o.internalSetState({
          isOpen: !0
        }, C);
      }, o.closeMenu = function(C) {
        o.internalSetState({
          isOpen: !1
        }, C);
      }, o.updateStatus = sl(function() {
        var C;
        if ((C = o.props) != null && (C = C.environment) != null && C.document) {
          var k = o.getState(), D = o.items[k.highlightedIndex], O = o.getItemCount(), Q = o.props.getA11yStatusMessage(Ue({
            itemToString: o.props.itemToString,
            previousResultCount: o.previousResultCount,
            resultCount: O,
            highlightedItem: D
          }, k));
          o.previousResultCount = O, vx(Q, o.props.environment.document);
        }
      }, 200);
      var l = o.props, u = l.defaultHighlightedIndex, d = l.initialHighlightedIndex, p = d === void 0 ? u : d, h = l.defaultIsOpen, g = l.initialIsOpen, x = g === void 0 ? h : g, b = l.initialInputValue, S = b === void 0 ? "" : b, _ = l.initialSelectedItem, w = _ === void 0 ? null : _, P = o.getState({
        highlightedIndex: p,
        isOpen: x,
        inputValue: S,
        selectedItem: w
      });
      return P.selectedItem != null && o.props.initialInputValue === void 0 && (P.inputValue = o.props.itemToString(P.selectedItem)), o.state = P, o;
    }
    yN(n, t);
    var r = n.prototype;
    return r.internalClearTimeouts = function() {
      this.timeoutIds.forEach(function(o) {
        clearTimeout(o);
      }), this.timeoutIds = [];
    }, r.getState = function(o) {
      return o === void 0 && (o = this.state), Ms(o, this.props);
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
      var o = this.getState(), l = o.highlightedIndex, u = o.inputValue, d = o.selectedItem, p = o.isOpen, h = this.props.itemToString, g = this.id, x = this.getRootProps, b = this.getToggleButtonProps, S = this.getLabelProps, _ = this.getMenuProps, w = this.getInputProps, P = this.getItemProps, C = this.openMenu, k = this.closeMenu, D = this.toggleMenu, O = this.selectItem, Q = this.selectItemAtIndex, ee = this.selectHighlightedItem, ne = this.setHighlightedIndex, V = this.clearSelection, Y = this.clearItems, te = this.reset, R = this.setItemCount, H = this.unsetItemCount, z = this.internalSetState;
      return {
        // prop getters
        getRootProps: x,
        getToggleButtonProps: b,
        getLabelProps: S,
        getMenuProps: _,
        getInputProps: w,
        getItemProps: P,
        // actions
        reset: te,
        openMenu: C,
        closeMenu: k,
        toggleMenu: D,
        selectItem: O,
        selectItemAtIndex: Q,
        selectHighlightedItem: ee,
        setHighlightedIndex: ne,
        clearSelection: V,
        clearItems: Y,
        setItemCount: R,
        unsetItemCount: H,
        setState: z,
        // props
        itemToString: h,
        // derived
        id: g,
        // state
        highlightedIndex: l,
        inputValue: u,
        isOpen: p,
        selectedItem: d
      };
    }, r.componentDidMount = function() {
      var o = this;
      if (process.env.NODE_ENV !== "production" && this.getMenuProps.called && !this.getMenuProps.suppressRefError && Gm(this._menuNode, this.getMenuProps), !this.props.environment)
        this.cleanup = function() {
          o.internalClearTimeouts();
        };
      else {
        var l = function() {
          o.isMouseDown = !0;
        }, u = function(b) {
          o.isMouseDown = !1;
          var S = Ns(b.target, [o._rootNode, o._menuNode], o.props.environment);
          !S && o.getState().isOpen && o.reset({
            type: xx
          }, function() {
            return o.props.onOuterClick(o.getStateAndHelpers());
          });
        }, d = function() {
          o.isTouchMove = !1;
        }, p = function() {
          o.isTouchMove = !0;
        }, h = function(b) {
          var S = Ns(b.target, [o._rootNode, o._menuNode], o.props.environment, !1);
          !o.isTouchMove && !S && o.getState().isOpen && o.reset({
            type: Ax
          }, function() {
            return o.props.onOuterClick(o.getStateAndHelpers());
          });
        }, g = this.props.environment;
        g.addEventListener("mousedown", l), g.addEventListener("mouseup", u), g.addEventListener("touchstart", d), g.addEventListener("touchmove", p), g.addEventListener("touchend", h), this.cleanup = function() {
          o.internalClearTimeouts(), o.updateStatus.cancel(), g.removeEventListener("mousedown", l), g.removeEventListener("mouseup", u), g.removeEventListener("touchstart", d), g.removeEventListener("touchmove", p), g.removeEventListener("touchend", h);
        };
      }
    }, r.shouldScroll = function(o, l) {
      var u = this.props.highlightedIndex === void 0 ? this.getState() : this.props, d = u.highlightedIndex, p = l.highlightedIndex === void 0 ? o : l, h = p.highlightedIndex, g = d && this.getState().isOpen && !o.isOpen, x = d !== h;
      return g || x;
    }, r.componentDidUpdate = function(o, l) {
      process.env.NODE_ENV !== "production" && (Dd(this.state, o, this.props), this.getMenuProps.called && !this.getMenuProps.suppressRefError && Gm(this._menuNode, this.getMenuProps)), Nc(this.props, "selectedItem") && this.props.selectedItemChanged(o.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: Px,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(l, o) && this.scrollHighlightedItemIntoView(), this.updateStatus();
    }, r.componentWillUnmount = function() {
      this.cleanup();
    }, r.render = function() {
      var o = Km(this.props.children, dn);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1, this.getInputProps.called = !1;
      var l = Km(o(this.getStateAndHelpers()));
      if (!l)
        return null;
      if (this.getRootProps.called || this.props.suppressRefError)
        return process.env.NODE_ENV !== "production" && !this.getRootProps.suppressRefError && !this.props.suppressRefError && YN(l, this.getRootProps), l;
      if (hx(l))
        return /* @__PURE__ */ UO(l, this.getRootProps(mx(l)));
      if (process.env.NODE_ENV !== "production")
        throw new Error("downshift: If you return a non-DOM element, you must apply the getRootProps function");
    }, n;
  }(YO);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: MN,
    itemToString: function(n) {
      return n == null ? "" : (process.env.NODE_ENV !== "production" && RN(n) && !n.hasOwnProperty("toString") && console.warn("downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.", "The object that was passed:", n), String(n));
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
    scrollIntoView: fx
  }, e.stateChangeTypes = LN, e;
}();
process.env.NODE_ENV !== "production" && (UN.propTypes = {
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
function Gm(e, t) {
  var n = t.refKey;
  e || console.error('downshift: The ref prop "' + n + '" from getMenuProps was not applied correctly on your menu element.');
}
function YN(e, t) {
  var n = t.refKey, r = n !== "ref", a = !hx(e);
  a && !r && !Bm.isForwardRef(e) ? console.error("downshift: You returned a non-DOM element. You must specify a refKey in getRootProps") : !a && r && console.error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' + n + '"'), !Bm.isForwardRef(e) && !mx(e)[n] && console.error('downshift: You must apply the ref prop "' + n + '" from getRootProps onto your root element.');
}
var Ix = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function qN(e, t, n) {
  var r = e.props, a = e.type, o = {};
  Object.keys(t).forEach(function(l) {
    KN(l, e, t, n), n[l] !== t[l] && (o[l] = n[l]);
  }), r.onStateChange && Object.keys(o).length && r.onStateChange(Ue({
    type: a
  }, o));
}
function KN(e, t, n, r) {
  var a = t.props, o = t.type, l = "on" + kd(e) + "Change";
  a[l] && r[e] !== void 0 && r[e] !== n[e] && a[l](Ue({
    type: o
  }, r));
}
function GN(e, t) {
  return t.changes;
}
var Xm = sl(function(e, t) {
  vx(e, t);
}, 200), XN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? zr : ct, ZN = "useId" in $e ? function(t) {
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
  var n = t.id, r = n === void 0 ? "downshift-" + px() : n, a = t.labelId, o = t.menuId, l = t.getItemId, u = t.toggleButtonId, d = t.inputId, p = qe({
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
function Mx(e, t, n, r) {
  var a, o;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(r);
    a = n[t], o = t;
  } else
    o = t === void 0 ? n.indexOf(e) : t, a = e;
  return [a, o];
}
function JN(e) {
  return /^\S{1}$/.test(e);
}
function kd(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function Pd(e) {
  var t = qe(e);
  return t.current = e, t;
}
function QN(e, t, n, r) {
  var a = qe(), o = qe(), l = Qe(function(b, S) {
    o.current = S, b = Ms(b, S.props);
    var _ = e(b, S), w = S.props.stateReducer(b, Ue({}, S, {
      changes: _
    }));
    return w;
  }, [e]), u = Cv(l, t, n), d = u[0], p = u[1], h = Pd(t), g = Qe(function(b) {
    return p(Ue({
      props: h.current
    }, b));
  }, [h]), x = o.current;
  return ct(function() {
    var b = Ms(a.current, x == null ? void 0 : x.props), S = x && a.current && !r(b, d);
    S && qN(x, b, d), a.current = d;
  }, [d, x, r]), [d, g];
}
function Nx(e, t, n, r) {
  var a = QN(e, t, n, r), o = a[0], l = a[1];
  return [Ms(o, t), l];
}
var Ba = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: GN,
  scrollIntoView: fx,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function wr(e, t, n) {
  n === void 0 && (n = Ix);
  var r = e["default" + kd(t)];
  return r !== void 0 ? r : n[t];
}
function Ji(e, t, n) {
  n === void 0 && (n = Ix);
  var r = e[t];
  if (r !== void 0)
    return r;
  var a = e["initial" + kd(t)];
  return a !== void 0 ? a : wr(e, t, n);
}
function ej(e) {
  var t = Ji(e, "selectedItem"), n = Ji(e, "isOpen"), r = ij(e), a = Ji(e, "inputValue");
  return {
    highlightedIndex: r < 0 && t && n ? e.items.findIndex(function(o) {
      return e.itemToKey(o) === e.itemToKey(t);
    }) : r,
    isOpen: n,
    selectedItem: t,
    inputValue: a
  };
}
function js(e, t, n) {
  var r = e.items, a = e.initialHighlightedIndex, o = e.defaultHighlightedIndex, l = e.isItemDisabled, u = e.itemToKey, d = t.selectedItem, p = t.highlightedIndex;
  return r.length === 0 ? -1 : a !== void 0 && p === a && !l(r[a], a) ? a : o !== void 0 && !l(r[o], o) ? o : d ? r.findIndex(function(h) {
    return u(d) === u(h);
  }) : n < 0 && !l(r[r.length - 1], r.length - 1) ? r.length - 1 : n > 0 && !l(r[0], 0) ? 0 : -1;
}
function tj(e, t, n) {
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
      r.current.isMouseDown = !1, Ns(h.target, a, e) || t();
    }
    function u() {
      r.current.isTouchEnd = !1, r.current.isTouchMove = !1;
    }
    function d() {
      r.current.isTouchMove = !0;
    }
    function p(h) {
      r.current.isTouchEnd = !0, !r.current.isTouchMove && !Ns(h.target, a, e, !1) && t();
    }
    return e.addEventListener("mousedown", o), e.addEventListener("mouseup", l), e.addEventListener("touchstart", u), e.addEventListener("touchmove", d), e.addEventListener("touchend", p), function() {
      e.removeEventListener("mousedown", o), e.removeEventListener("mouseup", l), e.removeEventListener("touchstart", u), e.removeEventListener("touchmove", d), e.removeEventListener("touchend", p);
    };
  }, [n, e, t]), r.current;
}
var Ad = function() {
  return dn;
};
process.env.NODE_ENV !== "production" && (Ad = function() {
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
function jx(e, t, n, r) {
  r === void 0 && (r = {});
  var a = r.document, o = Md();
  ct(function() {
    if (!(!e || o || !a)) {
      var l = e(t);
      Xm(l, a);
    }
  }, n), ct(function() {
    return function() {
      Xm.cancel(), FN(a);
    };
  }, [a]);
}
function nj(e) {
  var t = e.highlightedIndex, n = e.isOpen, r = e.itemRefs, a = e.getItemNodeFromIndex, o = e.menuElement, l = e.scrollIntoView, u = qe(!0);
  return XN(function() {
    t < 0 || !n || !Object.keys(r.current).length || (u.current === !1 ? u.current = !0 : l(a(t), o));
  }, [t]), u;
}
var Id = dn;
process.env.NODE_ENV !== "production" && (Id = function(t) {
  var n = t.props, r = t.state, a = qe(n), o = Md();
  ct(function() {
    o || (Dd(r, a.current, n), a.current = n);
  }, [r, n, o]);
});
function Zm(e, t, n) {
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
function rj(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function Md() {
  var e = $e.useRef(!0);
  return $e.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
function Rx(e) {
  var t = wr(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
function ij(e) {
  var t = Ji(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
var _s = {
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
}, $x = Ue({}, _s, {
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
function aj(e, t, n) {
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
        highlightedIndex: e.isOpen ? -1 : js(a, e, 0)
      };
      break;
    case n.FunctionOpenMenu:
      o = {
        isOpen: !0,
        highlightedIndex: js(a, e, 0)
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
        highlightedIndex: Rx(a),
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
function oj(e) {
  for (var t = e.keysSoFar, n = e.highlightedIndex, r = e.items, a = e.itemToString, o = e.isItemDisabled, l = t.toLowerCase(), u = 0; u < r.length; u++) {
    var d = (u + n + (t.length < 2 ? 1 : 0)) % r.length, p = r[d];
    if (p !== void 0 && a(p).toLowerCase().startsWith(l) && !o(p, d))
      return d;
  }
  return n;
}
var sj = fn(fn({}, $x), { items: le.array.isRequired, isItemDisabled: le.func }), lj = fn(fn({}, Ba), { isItemDisabled: function() {
  return !1;
} }), Fx = dn;
process.env.NODE_ENV !== "production" && (Fx = function(e, t) {
  le.checkPropTypes(sj, e, "prop", t.name);
});
var Es = process.env.NODE_ENV !== "production" ? "__togglebutton_click__" : 0, Nd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_down__" : 1, jd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_up__" : 2, Rs = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_character__" : 3, Rd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_escape__" : 4, $d = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_home__" : 5, Fd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_end__" : 6, Ld = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_enter__" : 7, Wd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_space_button__" : 8, Vd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_page_up__" : 9, zd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_page_down__" : 10, $s = process.env.NODE_ENV !== "production" ? "__togglebutton_blur__" : 11, Lx = process.env.NODE_ENV !== "production" ? "__menu_mouse_leave__" : 12, Wx = process.env.NODE_ENV !== "production" ? "__item_mouse_move__" : 13, Bd = process.env.NODE_ENV !== "production" ? "__item_click__" : 14, Vx = process.env.NODE_ENV !== "production" ? "__function_toggle_menu__" : 15, zx = process.env.NODE_ENV !== "production" ? "__function_open_menu__" : 16, Bx = process.env.NODE_ENV !== "production" ? "__function_close_menu__" : 17, Hx = process.env.NODE_ENV !== "production" ? "__function_set_highlighted_index__" : 18, Hd = process.env.NODE_ENV !== "production" ? "__function_select_item__" : 19, Rc = process.env.NODE_ENV !== "production" ? "__function_set_input_value__" : 20, Ux = process.env.NODE_ENV !== "production" ? "__function_reset__" : 21, Yx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  FunctionCloseMenu: Bx,
  FunctionOpenMenu: zx,
  FunctionReset: Ux,
  FunctionSelectItem: Hd,
  FunctionSetHighlightedIndex: Hx,
  FunctionSetInputValue: Rc,
  FunctionToggleMenu: Vx,
  ItemClick: Bd,
  ItemMouseMove: Wx,
  MenuMouseLeave: Lx,
  ToggleButtonBlur: $s,
  ToggleButtonClick: Es,
  ToggleButtonKeyDownArrowDown: Nd,
  ToggleButtonKeyDownArrowUp: jd,
  ToggleButtonKeyDownCharacter: Rs,
  ToggleButtonKeyDownEnd: Fd,
  ToggleButtonKeyDownEnter: Ld,
  ToggleButtonKeyDownEscape: Rd,
  ToggleButtonKeyDownHome: $d,
  ToggleButtonKeyDownPageDown: zd,
  ToggleButtonKeyDownPageUp: Vd,
  ToggleButtonKeyDownSpaceButton: Wd
});
function uj(e, t) {
  var n, r = t.type, a = t.props, o = t.altKey, l;
  switch (r) {
    case Bd:
      l = {
        isOpen: wr(a, "isOpen"),
        highlightedIndex: Rx(a),
        selectedItem: a.items[t.index]
      };
      break;
    case Rs:
      {
        var u = t.key, d = "" + e.inputValue + u, p = !e.isOpen && e.selectedItem ? a.items.findIndex(function(b) {
          return a.itemToKey(b) === a.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, h = oj({
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
    case Nd:
      {
        var g = e.isOpen ? pi(e.highlightedIndex, 1, a.items, a.isItemDisabled) : o && e.selectedItem == null ? -1 : js(a, e, 1);
        l = {
          highlightedIndex: g,
          isOpen: !0
        };
      }
      break;
    case jd:
      if (e.isOpen && o)
        l = Zm(a, e.highlightedIndex, !1);
      else {
        var x = e.isOpen ? pi(e.highlightedIndex, -1, a.items, a.isItemDisabled) : js(a, e, -1);
        l = {
          highlightedIndex: x,
          isOpen: !0
        };
      }
      break;
    case Ld:
    case Wd:
      l = Zm(a, e.highlightedIndex, !1);
      break;
    case $d:
      l = {
        highlightedIndex: ra(0, !1, a.items, a.isItemDisabled),
        isOpen: !0
      };
      break;
    case Fd:
      l = {
        highlightedIndex: ra(a.items.length - 1, !0, a.items, a.isItemDisabled),
        isOpen: !0
      };
      break;
    case Vd:
      l = {
        highlightedIndex: pi(e.highlightedIndex, -10, a.items, a.isItemDisabled)
      };
      break;
    case zd:
      l = {
        highlightedIndex: pi(e.highlightedIndex, 10, a.items, a.isItemDisabled)
      };
      break;
    case Rd:
      l = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case $s:
      l = Ue({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = a.items) == null ? void 0 : n.length) && {
        selectedItem: a.items[e.highlightedIndex]
      });
      break;
    case Hd:
      l = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return aj(e, t, Yx);
  }
  return Ue({}, e, l);
}
var cj = ["onClick"], dj = ["onMouseLeave", "refKey", "ref"], fj = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], pj = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Mn.stateChangeTypes = Yx;
function Mn(e) {
  e === void 0 && (e = {}), Fx(e, Mn);
  var t = Ue({}, lj, e), n = t.scrollIntoView, r = t.environment, a = t.getA11yStatusMessage, o = Nx(uj, t, ej, rj), l = o[0], u = o[1], d = l.isOpen, p = l.highlightedIndex, h = l.selectedItem, g = l.inputValue, x = qe(null), b = qe(null), S = qe({}), _ = qe(null), w = ZN(t), P = Pd({
    state: l,
    props: t
  }), C = Qe(function(I) {
    return S.current[w.getItemId(I)];
  }, [w]);
  jx(a, l, [d, p, h, g], r);
  var k = nj({
    menuElement: b.current,
    highlightedIndex: p,
    isOpen: d,
    itemRefs: S,
    scrollIntoView: n,
    getItemNodeFromIndex: C
  });
  ct(function() {
    return _.current = sl(function(I) {
      I({
        type: Rc,
        inputValue: ""
      });
    }, 500), function() {
      _.current.cancel();
    };
  }, []), ct(function() {
    g && _.current(u);
  }, [u, g]), Id({
    props: t,
    state: l
  }), ct(function() {
    var I = Ji(t, "isOpen");
    I && x.current && x.current.focus();
  }, []);
  var D = tj(r, Qe(function() {
    P.current.state.isOpen && u({
      type: $s
    });
  }, [u, P]), Rn(function() {
    return [b, x];
  }, [b.current, x.current])), O = Ad("getMenuProps", "getToggleButtonProps");
  ct(function() {
    d || (S.current = {});
  }, [d]);
  var Q = Rn(function() {
    return {
      ArrowDown: function(X) {
        X.preventDefault(), u({
          type: Nd,
          altKey: X.altKey
        });
      },
      ArrowUp: function(X) {
        X.preventDefault(), u({
          type: jd,
          altKey: X.altKey
        });
      },
      Home: function(X) {
        X.preventDefault(), u({
          type: $d
        });
      },
      End: function(X) {
        X.preventDefault(), u({
          type: Fd
        });
      },
      Escape: function() {
        P.current.state.isOpen && u({
          type: Rd
        });
      },
      Enter: function(X) {
        X.preventDefault(), u({
          type: P.current.state.isOpen ? Ld : Es
        });
      },
      PageUp: function(X) {
        P.current.state.isOpen && (X.preventDefault(), u({
          type: Vd
        }));
      },
      PageDown: function(X) {
        P.current.state.isOpen && (X.preventDefault(), u({
          type: zd
        }));
      },
      " ": function(X) {
        X.preventDefault();
        var M = P.current.state;
        if (!M.isOpen) {
          u({
            type: Es
          });
          return;
        }
        M.inputValue ? u({
          type: Rs,
          key: " "
        }) : u({
          type: Wd
        });
      }
    };
  }, [u, P]), ee = Qe(function() {
    u({
      type: Vx
    });
  }, [u]), ne = Qe(function() {
    u({
      type: Bx
    });
  }, [u]), V = Qe(function() {
    u({
      type: zx
    });
  }, [u]), Y = Qe(function(I) {
    u({
      type: Hx,
      highlightedIndex: I
    });
  }, [u]), te = Qe(function(I) {
    u({
      type: Hd,
      selectedItem: I
    });
  }, [u]), R = Qe(function() {
    u({
      type: Ux
    });
  }, [u]), H = Qe(function(I) {
    u({
      type: Rc,
      inputValue: I
    });
  }, [u]), z = Qe(function(I) {
    var X = I === void 0 ? {} : I, M = X.onClick, L = zn(X, cj), ue = function() {
      var ce;
      (ce = x.current) == null || ce.focus();
    };
    return Ue({
      id: w.labelId,
      htmlFor: w.toggleButtonId,
      onClick: Pt(M, ue)
    }, L);
  }, [w]), U = Qe(function(I, X) {
    var M, L = I === void 0 ? {} : I, ue = L.onMouseLeave, he = L.refKey, ce = he === void 0 ? "ref" : he, ye = L.ref, ge = zn(L, dj), be = X === void 0 ? {} : X, we = be.suppressRefError, Ce = we === void 0 ? !1 : we, _e = function() {
      u({
        type: Lx
      });
    };
    return O("getMenuProps", Ce, ce, b), Ue((M = {}, M[ce] = mi(ye, function(Se) {
      b.current = Se;
    }), M.id = w.menuId, M.role = "listbox", M["aria-labelledby"] = ge && ge["aria-label"] ? void 0 : "" + w.labelId, M.onMouseLeave = Pt(ue, _e), M), ge);
  }, [u, O, w]), K = Qe(function(I, X) {
    var M, L = I === void 0 ? {} : I, ue = L.onBlur, he = L.onClick;
    L.onPress;
    var ce = L.onKeyDown, ye = L.refKey, ge = ye === void 0 ? "ref" : ye, be = L.ref, we = zn(L, fj), Ce = X === void 0 ? {} : X, _e = Ce.suppressRefError, Se = _e === void 0 ? !1 : _e, fe = P.current.state, Re = function() {
      u({
        type: Es
      });
    }, ve = function() {
      fe.isOpen && !D.isMouseDown && u({
        type: $s
      });
    }, et = function(N) {
      var Z = Xa(N);
      Z && Q[Z] ? Q[Z](N) : JN(Z) && u({
        type: Rs,
        key: Z
      });
    }, rt = Ue((M = {}, M[ge] = mi(be, function(Ke) {
      x.current = Ke;
    }), M["aria-activedescendant"] = fe.isOpen && fe.highlightedIndex > -1 ? w.getItemId(fe.highlightedIndex) : "", M["aria-controls"] = w.menuId, M["aria-expanded"] = P.current.state.isOpen, M["aria-haspopup"] = "listbox", M["aria-labelledby"] = we && we["aria-label"] ? void 0 : "" + w.labelId, M.id = w.toggleButtonId, M.role = "combobox", M.tabIndex = 0, M.onBlur = Pt(ue, ve), M), we);
    return we.disabled || (rt.onClick = Pt(he, Re), rt.onKeyDown = Pt(ce, et)), O("getToggleButtonProps", Se, ge, x), rt;
  }, [u, w, P, D, O, Q]), j = Qe(function(I) {
    var X, M = I === void 0 ? {} : I, L = M.item, ue = M.index, he = M.onMouseMove, ce = M.onClick, ye = M.onMouseDown;
    M.onPress;
    var ge = M.refKey, be = ge === void 0 ? "ref" : ge, we = M.disabled, Ce = M.ref, _e = zn(M, pj);
    we !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var Se = P.current, fe = Se.state, Re = Se.props, ve = Mx(L, ue, Re.items, "Pass either item or index to getItemProps!"), et = ve[0], rt = ve[1], Ke = Re.isItemDisabled(et, rt), N = function() {
      D.isTouchEnd || rt === fe.highlightedIndex || (k.current = !1, u({
        type: Wx,
        index: rt,
        disabled: Ke
      }));
    }, Z = function() {
      u({
        type: Bd,
        index: rt
      });
    }, re = function($) {
      return $.preventDefault();
    }, m = Ue((X = {}, X[be] = mi(Ce, function(F) {
      F && (S.current[w.getItemId(rt)] = F);
    }), X["aria-disabled"] = Ke, X["aria-selected"] = et === fe.selectedItem, X.id = w.getItemId(rt), X.role = "option", X), _e);
    return Ke || (m.onClick = Pt(ce, Z)), m.onMouseMove = Pt(he, N), m.onMouseDown = Pt(ye, re), m;
  }, [P, w, D, k, u]);
  return {
    // prop getters.
    getToggleButtonProps: K,
    getLabelProps: z,
    getMenuProps: U,
    getItemProps: j,
    // actions.
    toggleMenu: ee,
    openMenu: V,
    closeMenu: ne,
    setHighlightedIndex: Y,
    selectItem: te,
    reset: R,
    setInputValue: H,
    // state.
    highlightedIndex: p,
    isOpen: d,
    selectedItem: h,
    inputValue: g
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
Ue({}, $x, {
  items: le.array.isRequired,
  isItemDisabled: le.func,
  inputValue: le.string,
  defaultInputValue: le.string,
  initialInputValue: le.string,
  inputId: le.string,
  onInputValueChange: le.func
});
process.env.NODE_ENV;
Ue({}, Ba, {
  isItemDisabled: function() {
    return !1;
  }
});
var qx = {
  activeIndex: -1,
  selectedItems: []
};
function Jm(e, t) {
  return Ji(e, t, qx);
}
function Qm(e, t) {
  return wr(e, t, qx);
}
function hj(e) {
  var t = Jm(e, "activeIndex"), n = Jm(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: n
  };
}
function eg(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
function mj(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
var gj = {
  stateReducer: _s.stateReducer,
  itemToKey: _s.itemToKey,
  environment: _s.environment,
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
}, vj = {
  itemToKey: Ba.itemToKey,
  stateReducer: Ba.stateReducer,
  environment: Ba.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, Kx = dn;
process.env.NODE_ENV !== "production" && (Kx = function(t, n) {
  le.checkPropTypes(gj, t, "prop", n.name);
});
var Ud = process.env.NODE_ENV !== "production" ? "__selected_item_click__" : 0, Yd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_delete__" : 1, qd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_backspace__" : 2, Kd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_next__" : 3, Gd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_previous__" : 4, Xd = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_navigation_previous__" : 5, Zd = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_backspace__" : 6, Jd = process.env.NODE_ENV !== "production" ? "__dropdown_click__" : 7, Qd = process.env.NODE_ENV !== "production" ? "__function_add_selected_item__" : 8, ef = process.env.NODE_ENV !== "production" ? "__function_remove_selected_item__" : 9, tf = process.env.NODE_ENV !== "production" ? "__function_set_selected_items__" : 10, nf = process.env.NODE_ENV !== "production" ? "__function_set_active_index__" : 11, rf = process.env.NODE_ENV !== "production" ? "__function_reset__" : 12, yj = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DropdownClick: Jd,
  DropdownKeyDownBackspace: Zd,
  DropdownKeyDownNavigationPrevious: Xd,
  FunctionAddSelectedItem: Qd,
  FunctionRemoveSelectedItem: ef,
  FunctionReset: rf,
  FunctionSetActiveIndex: nf,
  FunctionSetSelectedItems: tf,
  SelectedItemClick: Ud,
  SelectedItemKeyDownBackspace: qd,
  SelectedItemKeyDownDelete: Yd,
  SelectedItemKeyDownNavigationNext: Kd,
  SelectedItemKeyDownNavigationPrevious: Gd
});
function xj(e, t) {
  var n = t.type, r = t.index, a = t.props, o = t.selectedItem, l = e.activeIndex, u = e.selectedItems, d;
  switch (n) {
    case Ud:
      d = {
        activeIndex: r
      };
      break;
    case Gd:
      d = {
        activeIndex: l - 1 < 0 ? 0 : l - 1
      };
      break;
    case Kd:
      d = {
        activeIndex: l + 1 >= u.length ? -1 : l + 1
      };
      break;
    case qd:
    case Yd: {
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
    case Xd:
      d = {
        activeIndex: u.length - 1
      };
      break;
    case Zd:
      d = {
        selectedItems: u.slice(0, u.length - 1)
      };
      break;
    case Qd:
      d = {
        selectedItems: [].concat(u, [o])
      };
      break;
    case Jd:
      d = {
        activeIndex: -1
      };
      break;
    case ef: {
      var h = l, g = u.findIndex(function(S) {
        return a.itemToKey(S) === a.itemToKey(o);
      });
      if (g < 0)
        break;
      u.length === 1 ? h = -1 : g === u.length - 1 && (h = u.length - 2), d = {
        selectedItems: [].concat(u.slice(0, g), u.slice(g + 1)),
        activeIndex: h
      };
      break;
    }
    case tf: {
      var x = t.selectedItems;
      d = {
        selectedItems: x
      };
      break;
    }
    case nf: {
      var b = t.activeIndex;
      d = {
        activeIndex: b
      };
      break;
    }
    case rf:
      d = {
        activeIndex: Qm(a, "activeIndex"),
        selectedItems: Qm(a, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return Ue({}, e, d);
}
var bj = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], wj = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
di.stateChangeTypes = yj;
function di(e) {
  e === void 0 && (e = {}), Kx(e, di);
  var t = Ue({}, vj, e), n = t.getA11yStatusMessage, r = t.environment, a = t.keyNavigationNext, o = t.keyNavigationPrevious, l = Nx(xj, t, hj, mj), u = l[0], d = l[1], p = u.activeIndex, h = u.selectedItems, g = Md(), x = qe(null), b = qe();
  b.current = [];
  var S = Pd({
    state: u,
    props: t
  });
  jx(n, u, [p, h], r), ct(function() {
    g || (p === -1 && x.current ? x.current.focus() : b.current[p] && b.current[p].focus());
  }, [p]), Id({
    props: t,
    state: u
  });
  var _ = Ad("getDropdownProps"), w = Rn(function() {
    var V;
    return V = {}, V[o] = function() {
      d({
        type: Gd
      });
    }, V[a] = function() {
      d({
        type: Kd
      });
    }, V.Delete = function() {
      d({
        type: Yd
      });
    }, V.Backspace = function() {
      d({
        type: qd
      });
    }, V;
  }, [d, a, o]), P = Rn(function() {
    var V;
    return V = {}, V[o] = function(Y) {
      eg(Y) && d({
        type: Xd
      });
    }, V.Backspace = function(te) {
      eg(te) && d({
        type: Zd
      });
    }, V;
  }, [d, o]), C = Qe(function(V) {
    var Y, te = V === void 0 ? {} : V, R = te.refKey, H = R === void 0 ? "ref" : R, z = te.ref, U = te.onClick, K = te.onKeyDown, j = te.selectedItem, I = te.index, X = zn(te, bj), M = S.current.state, L = Mx(j, I, M.selectedItems, "Pass either item or index to getSelectedItemProps!"), ue = L[1], he = ue > -1 && ue === M.activeIndex, ce = function() {
      d({
        type: Ud,
        index: ue
      });
    }, ye = function(be) {
      var we = Xa(be);
      we && w[we] && w[we](be);
    };
    return Ue((Y = {}, Y[H] = mi(z, function(ge) {
      ge && b.current.push(ge);
    }), Y.tabIndex = he ? 0 : -1, Y.onClick = Pt(U, ce), Y.onKeyDown = Pt(K, ye), Y), X);
  }, [d, S, w]), k = Qe(function(V, Y) {
    var te, R = V === void 0 ? {} : V, H = R.refKey, z = H === void 0 ? "ref" : H, U = R.ref, K = R.onKeyDown, j = R.onClick, I = R.preventKeyAction, X = I === void 0 ? !1 : I, M = zn(R, wj), L = Y === void 0 ? {} : Y, ue = L.suppressRefError, he = ue === void 0 ? !1 : ue;
    _("getDropdownProps", he, z, x);
    var ce = function(be) {
      var we = Xa(be);
      we && P[we] && P[we](be);
    }, ye = function() {
      d({
        type: Jd
      });
    };
    return Ue((te = {}, te[z] = mi(U, function(ge) {
      ge && (x.current = ge);
    }), te), !X && {
      onKeyDown: Pt(K, ce),
      onClick: Pt(j, ye)
    }, M);
  }, [d, P, _]), D = Qe(function(V) {
    d({
      type: Qd,
      selectedItem: V
    });
  }, [d]), O = Qe(function(V) {
    d({
      type: ef,
      selectedItem: V
    });
  }, [d]), Q = Qe(function(V) {
    d({
      type: tf,
      selectedItems: V
    });
  }, [d]), ee = Qe(function(V) {
    d({
      type: nf,
      activeIndex: V
    });
  }, [d]), ne = Qe(function() {
    d({
      type: rf
    });
  }, [d]);
  return {
    getSelectedItemProps: C,
    getDropdownProps: k,
    addSelectedItem: D,
    removeSelectedItem: O,
    setSelectedItems: Q,
    setActiveIndex: ee,
    reset: ne,
    selectedItems: h,
    activeIndex: p
  };
}
function _j() {
  this.__data__ = [], this.size = 0;
}
var Ej = _j;
function Cj(e, t) {
  return e === t || e !== e && t !== t;
}
var Gx = Cj, Tj = Gx;
function Oj(e, t) {
  for (var n = e.length; n--; )
    if (Tj(e[n][0], t))
      return n;
  return -1;
}
var ll = Oj, Sj = ll, Dj = Array.prototype, kj = Dj.splice;
function Pj(e) {
  var t = this.__data__, n = Sj(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : kj.call(t, n, 1), --this.size, !0;
}
var Aj = Pj, Ij = ll;
function Mj(e) {
  var t = this.__data__, n = Ij(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var Nj = Mj, jj = ll;
function Rj(e) {
  return jj(this.__data__, e) > -1;
}
var $j = Rj, Fj = ll;
function Lj(e, t) {
  var n = this.__data__, r = Fj(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var Wj = Lj, Vj = Ej, zj = Aj, Bj = Nj, Hj = $j, Uj = Wj;
function la(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
la.prototype.clear = Vj;
la.prototype.delete = zj;
la.prototype.get = Bj;
la.prototype.has = Hj;
la.prototype.set = Uj;
var ul = la, Yj = ul;
function qj() {
  this.__data__ = new Yj(), this.size = 0;
}
var Kj = qj;
function Gj(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var Xj = Gj;
function Zj(e) {
  return this.__data__.get(e);
}
var Jj = Zj;
function Qj(e) {
  return this.__data__.has(e);
}
var eR = Qj, tR = typeof Yi == "object" && Yi && Yi.Object === Object && Yi, Xx = tR, nR = Xx, rR = typeof self == "object" && self && self.Object === Object && self, iR = nR || rR || Function("return this")(), Tr = iR, aR = Tr, oR = aR.Symbol, af = oR, tg = af, Zx = Object.prototype, sR = Zx.hasOwnProperty, lR = Zx.toString, Fa = tg ? tg.toStringTag : void 0;
function uR(e) {
  var t = sR.call(e, Fa), n = e[Fa];
  try {
    e[Fa] = void 0;
    var r = !0;
  } catch {
  }
  var a = lR.call(e);
  return r && (t ? e[Fa] = n : delete e[Fa]), a;
}
var cR = uR, dR = Object.prototype, fR = dR.toString;
function pR(e) {
  return fR.call(e);
}
var hR = pR, ng = af, mR = cR, gR = hR, vR = "[object Null]", yR = "[object Undefined]", rg = ng ? ng.toStringTag : void 0;
function xR(e) {
  return e == null ? e === void 0 ? yR : vR : rg && rg in Object(e) ? mR(e) : gR(e);
}
var cl = xR;
function bR(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Jx = bR, wR = cl, _R = Jx, ER = "[object AsyncFunction]", CR = "[object Function]", TR = "[object GeneratorFunction]", OR = "[object Proxy]";
function SR(e) {
  if (!_R(e))
    return !1;
  var t = wR(e);
  return t == CR || t == TR || t == ER || t == OR;
}
var Qx = SR, DR = Tr, kR = DR["__core-js_shared__"], PR = kR, rc = PR, ig = function() {
  var e = /[^.]+$/.exec(rc && rc.keys && rc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function AR(e) {
  return !!ig && ig in e;
}
var IR = AR, MR = Function.prototype, NR = MR.toString;
function jR(e) {
  if (e != null) {
    try {
      return NR.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var eb = jR, RR = Qx, $R = IR, FR = Jx, LR = eb, WR = /[\\^$.*+?()[\]{}|]/g, VR = /^\[object .+?Constructor\]$/, zR = Function.prototype, BR = Object.prototype, HR = zR.toString, UR = BR.hasOwnProperty, YR = RegExp(
  "^" + HR.call(UR).replace(WR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qR(e) {
  if (!FR(e) || $R(e))
    return !1;
  var t = RR(e) ? YR : VR;
  return t.test(LR(e));
}
var KR = qR;
function GR(e, t) {
  return e == null ? void 0 : e[t];
}
var XR = GR, ZR = KR, JR = XR;
function QR(e, t) {
  var n = JR(e, t);
  return ZR(n) ? n : void 0;
}
var ua = QR, e2 = ua, t2 = Tr, n2 = e2(t2, "Map"), of = n2, r2 = ua, i2 = r2(Object, "create"), dl = i2, ag = dl;
function a2() {
  this.__data__ = ag ? ag(null) : {}, this.size = 0;
}
var o2 = a2;
function s2(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var l2 = s2, u2 = dl, c2 = "__lodash_hash_undefined__", d2 = Object.prototype, f2 = d2.hasOwnProperty;
function p2(e) {
  var t = this.__data__;
  if (u2) {
    var n = t[e];
    return n === c2 ? void 0 : n;
  }
  return f2.call(t, e) ? t[e] : void 0;
}
var h2 = p2, m2 = dl, g2 = Object.prototype, v2 = g2.hasOwnProperty;
function y2(e) {
  var t = this.__data__;
  return m2 ? t[e] !== void 0 : v2.call(t, e);
}
var x2 = y2, b2 = dl, w2 = "__lodash_hash_undefined__";
function _2(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = b2 && t === void 0 ? w2 : t, this;
}
var E2 = _2, C2 = o2, T2 = l2, O2 = h2, S2 = x2, D2 = E2;
function ca(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ca.prototype.clear = C2;
ca.prototype.delete = T2;
ca.prototype.get = O2;
ca.prototype.has = S2;
ca.prototype.set = D2;
var k2 = ca, og = k2, P2 = ul, A2 = of;
function I2() {
  this.size = 0, this.__data__ = {
    hash: new og(),
    map: new (A2 || P2)(),
    string: new og()
  };
}
var M2 = I2;
function N2(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var j2 = N2, R2 = j2;
function $2(e, t) {
  var n = e.__data__;
  return R2(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var fl = $2, F2 = fl;
function L2(e) {
  var t = F2(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var W2 = L2, V2 = fl;
function z2(e) {
  return V2(this, e).get(e);
}
var B2 = z2, H2 = fl;
function U2(e) {
  return H2(this, e).has(e);
}
var Y2 = U2, q2 = fl;
function K2(e, t) {
  var n = q2(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var G2 = K2, X2 = M2, Z2 = W2, J2 = B2, Q2 = Y2, e$ = G2;
function da(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
da.prototype.clear = X2;
da.prototype.delete = Z2;
da.prototype.get = J2;
da.prototype.has = Q2;
da.prototype.set = e$;
var tb = da, t$ = ul, n$ = of, r$ = tb, i$ = 200;
function a$(e, t) {
  var n = this.__data__;
  if (n instanceof t$) {
    var r = n.__data__;
    if (!n$ || r.length < i$ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new r$(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var o$ = a$, s$ = ul, l$ = Kj, u$ = Xj, c$ = Jj, d$ = eR, f$ = o$;
function fa(e) {
  var t = this.__data__ = new s$(e);
  this.size = t.size;
}
fa.prototype.clear = l$;
fa.prototype.delete = u$;
fa.prototype.get = c$;
fa.prototype.has = d$;
fa.prototype.set = f$;
var p$ = fa, h$ = "__lodash_hash_undefined__";
function m$(e) {
  return this.__data__.set(e, h$), this;
}
var g$ = m$;
function v$(e) {
  return this.__data__.has(e);
}
var y$ = v$, x$ = tb, b$ = g$, w$ = y$;
function Fs(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new x$(); ++t < n; )
    this.add(e[t]);
}
Fs.prototype.add = Fs.prototype.push = b$;
Fs.prototype.has = w$;
var _$ = Fs;
function E$(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var C$ = E$;
function T$(e, t) {
  return e.has(t);
}
var O$ = T$, S$ = _$, D$ = C$, k$ = O$, P$ = 1, A$ = 2;
function I$(e, t, n, r, a, o) {
  var l = n & P$, u = e.length, d = t.length;
  if (u != d && !(l && d > u))
    return !1;
  var p = o.get(e), h = o.get(t);
  if (p && h)
    return p == t && h == e;
  var g = -1, x = !0, b = n & A$ ? new S$() : void 0;
  for (o.set(e, t), o.set(t, e); ++g < u; ) {
    var S = e[g], _ = t[g];
    if (r)
      var w = l ? r(_, S, g, t, e, o) : r(S, _, g, e, t, o);
    if (w !== void 0) {
      if (w)
        continue;
      x = !1;
      break;
    }
    if (b) {
      if (!D$(t, function(P, C) {
        if (!k$(b, C) && (S === P || a(S, P, n, r, o)))
          return b.push(C);
      })) {
        x = !1;
        break;
      }
    } else if (!(S === _ || a(S, _, n, r, o))) {
      x = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), x;
}
var nb = I$, M$ = Tr, N$ = M$.Uint8Array, j$ = N$;
function R$(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var $$ = R$;
function F$(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var L$ = F$, sg = af, lg = j$, W$ = Gx, V$ = nb, z$ = $$, B$ = L$, H$ = 1, U$ = 2, Y$ = "[object Boolean]", q$ = "[object Date]", K$ = "[object Error]", G$ = "[object Map]", X$ = "[object Number]", Z$ = "[object RegExp]", J$ = "[object Set]", Q$ = "[object String]", eF = "[object Symbol]", tF = "[object ArrayBuffer]", nF = "[object DataView]", ug = sg ? sg.prototype : void 0, ic = ug ? ug.valueOf : void 0;
function rF(e, t, n, r, a, o, l) {
  switch (n) {
    case nF:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case tF:
      return !(e.byteLength != t.byteLength || !o(new lg(e), new lg(t)));
    case Y$:
    case q$:
    case X$:
      return W$(+e, +t);
    case K$:
      return e.name == t.name && e.message == t.message;
    case Z$:
    case Q$:
      return e == t + "";
    case G$:
      var u = z$;
    case J$:
      var d = r & H$;
      if (u || (u = B$), e.size != t.size && !d)
        return !1;
      var p = l.get(e);
      if (p)
        return p == t;
      r |= U$, l.set(e, t);
      var h = V$(u(e), u(t), r, a, o, l);
      return l.delete(e), h;
    case eF:
      if (ic)
        return ic.call(e) == ic.call(t);
  }
  return !1;
}
var iF = rF;
function aF(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var oF = aF, sF = Array.isArray, sf = sF, lF = oF, uF = sf;
function cF(e, t, n) {
  var r = t(e);
  return uF(e) ? r : lF(r, n(e));
}
var dF = cF;
function fF(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (o[a++] = l);
  }
  return o;
}
var pF = fF;
function hF() {
  return [];
}
var mF = hF, gF = pF, vF = mF, yF = Object.prototype, xF = yF.propertyIsEnumerable, cg = Object.getOwnPropertySymbols, bF = cg ? function(e) {
  return e == null ? [] : (e = Object(e), gF(cg(e), function(t) {
    return xF.call(e, t);
  }));
} : vF, wF = bF;
function _F(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var EF = _F;
function CF(e) {
  return e != null && typeof e == "object";
}
var pl = CF, TF = cl, OF = pl, SF = "[object Arguments]";
function DF(e) {
  return OF(e) && TF(e) == SF;
}
var kF = DF, dg = kF, PF = pl, rb = Object.prototype, AF = rb.hasOwnProperty, IF = rb.propertyIsEnumerable, MF = dg(/* @__PURE__ */ function() {
  return arguments;
}()) ? dg : function(e) {
  return PF(e) && AF.call(e, "callee") && !IF.call(e, "callee");
}, NF = MF, Ls = { exports: {} };
function jF() {
  return !1;
}
var RF = jF;
Ls.exports;
(function(e, t) {
  var n = Tr, r = RF, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, l = o && o.exports === a, u = l ? n.Buffer : void 0, d = u ? u.isBuffer : void 0, p = d || r;
  e.exports = p;
})(Ls, Ls.exports);
var ib = Ls.exports, $F = 9007199254740991, FF = /^(?:0|[1-9]\d*)$/;
function LF(e, t) {
  var n = typeof e;
  return t = t ?? $F, !!t && (n == "number" || n != "symbol" && FF.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var WF = LF, VF = 9007199254740991;
function zF(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VF;
}
var ab = zF, BF = cl, HF = ab, UF = pl, YF = "[object Arguments]", qF = "[object Array]", KF = "[object Boolean]", GF = "[object Date]", XF = "[object Error]", ZF = "[object Function]", JF = "[object Map]", QF = "[object Number]", eL = "[object Object]", tL = "[object RegExp]", nL = "[object Set]", rL = "[object String]", iL = "[object WeakMap]", aL = "[object ArrayBuffer]", oL = "[object DataView]", sL = "[object Float32Array]", lL = "[object Float64Array]", uL = "[object Int8Array]", cL = "[object Int16Array]", dL = "[object Int32Array]", fL = "[object Uint8Array]", pL = "[object Uint8ClampedArray]", hL = "[object Uint16Array]", mL = "[object Uint32Array]", Ct = {};
Ct[sL] = Ct[lL] = Ct[uL] = Ct[cL] = Ct[dL] = Ct[fL] = Ct[pL] = Ct[hL] = Ct[mL] = !0;
Ct[YF] = Ct[qF] = Ct[aL] = Ct[KF] = Ct[oL] = Ct[GF] = Ct[XF] = Ct[ZF] = Ct[JF] = Ct[QF] = Ct[eL] = Ct[tL] = Ct[nL] = Ct[rL] = Ct[iL] = !1;
function gL(e) {
  return UF(e) && HF(e.length) && !!Ct[BF(e)];
}
var vL = gL;
function yL(e) {
  return function(t) {
    return e(t);
  };
}
var xL = yL, Ws = { exports: {} };
Ws.exports;
(function(e, t) {
  var n = Xx, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, l = o && n.process, u = function() {
    try {
      var d = a && a.require && a.require("util").types;
      return d || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(Ws, Ws.exports);
var bL = Ws.exports, wL = vL, _L = xL, fg = bL, pg = fg && fg.isTypedArray, EL = pg ? _L(pg) : wL, ob = EL, CL = EF, TL = NF, OL = sf, SL = ib, DL = WF, kL = ob, PL = Object.prototype, AL = PL.hasOwnProperty;
function IL(e, t) {
  var n = OL(e), r = !n && TL(e), a = !n && !r && SL(e), o = !n && !r && !a && kL(e), l = n || r || a || o, u = l ? CL(e.length, String) : [], d = u.length;
  for (var p in e)
    (t || AL.call(e, p)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    DL(p, d))) && u.push(p);
  return u;
}
var ML = IL, NL = Object.prototype;
function jL(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || NL;
  return e === n;
}
var RL = jL;
function $L(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var FL = $L, LL = FL, WL = LL(Object.keys, Object), VL = WL, zL = RL, BL = VL, HL = Object.prototype, UL = HL.hasOwnProperty;
function YL(e) {
  if (!zL(e))
    return BL(e);
  var t = [];
  for (var n in Object(e))
    UL.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var qL = YL, KL = Qx, GL = ab;
function XL(e) {
  return e != null && GL(e.length) && !KL(e);
}
var ZL = XL, JL = ML, QL = qL, e4 = ZL;
function t4(e) {
  return e4(e) ? JL(e) : QL(e);
}
var n4 = t4, r4 = dF, i4 = wF, a4 = n4;
function o4(e) {
  return r4(e, a4, i4);
}
var s4 = o4, hg = s4, l4 = 1, u4 = Object.prototype, c4 = u4.hasOwnProperty;
function d4(e, t, n, r, a, o) {
  var l = n & l4, u = hg(e), d = u.length, p = hg(t), h = p.length;
  if (d != h && !l)
    return !1;
  for (var g = d; g--; ) {
    var x = u[g];
    if (!(l ? x in t : c4.call(t, x)))
      return !1;
  }
  var b = o.get(e), S = o.get(t);
  if (b && S)
    return b == t && S == e;
  var _ = !0;
  o.set(e, t), o.set(t, e);
  for (var w = l; ++g < d; ) {
    x = u[g];
    var P = e[x], C = t[x];
    if (r)
      var k = l ? r(C, P, x, t, e, o) : r(P, C, x, e, t, o);
    if (!(k === void 0 ? P === C || a(P, C, n, r, o) : k)) {
      _ = !1;
      break;
    }
    w || (w = x == "constructor");
  }
  if (_ && !w) {
    var D = e.constructor, O = t.constructor;
    D != O && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof O == "function" && O instanceof O) && (_ = !1);
  }
  return o.delete(e), o.delete(t), _;
}
var f4 = d4, p4 = ua, h4 = Tr, m4 = p4(h4, "DataView"), g4 = m4, v4 = ua, y4 = Tr, x4 = v4(y4, "Promise"), b4 = x4, w4 = ua, _4 = Tr, E4 = w4(_4, "Set"), C4 = E4, T4 = ua, O4 = Tr, S4 = T4(O4, "WeakMap"), D4 = S4, $c = g4, Fc = of, Lc = b4, Wc = C4, Vc = D4, sb = cl, pa = eb, mg = "[object Map]", k4 = "[object Object]", gg = "[object Promise]", vg = "[object Set]", yg = "[object WeakMap]", xg = "[object DataView]", P4 = pa($c), A4 = pa(Fc), I4 = pa(Lc), M4 = pa(Wc), N4 = pa(Vc), ci = sb;
($c && ci(new $c(new ArrayBuffer(1))) != xg || Fc && ci(new Fc()) != mg || Lc && ci(Lc.resolve()) != gg || Wc && ci(new Wc()) != vg || Vc && ci(new Vc()) != yg) && (ci = function(e) {
  var t = sb(e), n = t == k4 ? e.constructor : void 0, r = n ? pa(n) : "";
  if (r)
    switch (r) {
      case P4:
        return xg;
      case A4:
        return mg;
      case I4:
        return gg;
      case M4:
        return vg;
      case N4:
        return yg;
    }
  return t;
});
var j4 = ci, ac = p$, R4 = nb, $4 = iF, F4 = f4, bg = j4, wg = sf, _g = ib, L4 = ob, W4 = 1, Eg = "[object Arguments]", Cg = "[object Array]", fs = "[object Object]", V4 = Object.prototype, Tg = V4.hasOwnProperty;
function z4(e, t, n, r, a, o) {
  var l = wg(e), u = wg(t), d = l ? Cg : bg(e), p = u ? Cg : bg(t);
  d = d == Eg ? fs : d, p = p == Eg ? fs : p;
  var h = d == fs, g = p == fs, x = d == p;
  if (x && _g(e)) {
    if (!_g(t))
      return !1;
    l = !0, h = !1;
  }
  if (x && !h)
    return o || (o = new ac()), l || L4(e) ? R4(e, t, n, r, a, o) : $4(e, t, d, n, r, a, o);
  if (!(n & W4)) {
    var b = h && Tg.call(e, "__wrapped__"), S = g && Tg.call(t, "__wrapped__");
    if (b || S) {
      var _ = b ? e.value() : e, w = S ? t.value() : t;
      return o || (o = new ac()), a(_, w, n, r, o);
    }
  }
  return x ? (o || (o = new ac()), F4(e, t, n, r, a, o)) : !1;
}
var B4 = z4, H4 = B4, Og = pl;
function lb(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !Og(e) && !Og(t) ? e !== e && t !== t : H4(e, t, n, r, lb, a);
}
var U4 = lb, Y4 = U4;
function q4(e, t) {
  return Y4(e, t);
}
var K4 = q4;
const ub = /* @__PURE__ */ Qs(K4), Xr = J.createContext(void 0), G4 = ({
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
    search: g,
    onSearchChange: x,
    disabled: b
  } = n, S = qe(null), _ = qe(null), w = r == null ? void 0 : r.findIndex((V) => {
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
      p || d ? k != null && k > -1 ? k : w >= 0 ? w : 0 : -1
    );
  }, [p]);
  const { getToggleButtonProps: O, getMenuProps: Q, getItemProps: ee } = Mn({
    onIsOpenChange: ({ isOpen: V, highlightedIndex: Y }) => {
      b || (h(V), V && (D(
        Y != null && Y > -1 ? Y : w >= 0 ? w : 0
      ), setTimeout(() => {
        var te;
        (te = _.current) == null || te.focus();
      }, 10)));
    },
    isOpen: b ? !1 : p,
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
      let { changes: te, type: R, index: H } = Y;
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
            highlightedIndex: H
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
          (te = S.current) == null || te.focus(), Y && (u && Array.isArray(a) ? a != null && a.includes(Y.value) ? l(a == null ? void 0 : a.filter((R) => R !== Y.value)) : l([...a || [], Y.value]) : l(Y.value), x(""));
          break;
      }
    }
  }), ne = (V) => {
    const Y = O();
    return Qa({
      ref: _,
      onChange: (R) => {
        D(0), x(R.target.value);
      },
      onKeyDown: (R) => {
        var H;
        (R.key === "ArrowDown" || R.key === "ArrowUp" || R.key === "Enter" || R.key === "Escape") && (R.preventDefault(), (H = Y.onKeyDown) == null || H.call(Y, R));
      },
      value: g
    }, V);
  };
  return /* @__PURE__ */ v.jsx(
    Xr.Provider,
    {
      value: {
        ...n,
        highlightedIndex: k,
        getToggleButtonProps: O,
        getMenuProps: Q,
        getInputProps: ne,
        getItemProps: ee,
        getSelectedItemProps: P,
        getDropdownProps: C,
        toggleButtonRef: S
      },
      children: e
    }
  );
}, X4 = (e, t) => {
  var n;
  return ((n = Ov(e.label)) == null ? void 0 : n.toLowerCase().includes(t.toLowerCase())) || e.value.toLowerCase().includes(t.toLowerCase());
}, Z4 = ({
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
  searchFilter: h = X4,
  forceMount: g,
  defaultOpen: x,
  open: b,
  onOpenChange: S,
  allowAddOption: _,
  onAddOption: w,
  disabled: P,
  required: C,
  // context control props
  highlightOnMouseOver: k,
  ...D
}) => {
  const O = qe(null), Q = a ?? (n ? [] : ""), [ee, ne] = Ki(
    Q,
    o,
    l
  );
  if (ct(() => {
    ub(ee, Q) || ne(ee);
  }, [Q, n]), n && !Array.isArray(ee))
    throw new Error("SelectRoot: selected must be an array when multiple is true");
  if (!n && Array.isArray(ee))
    throw new Error("SelectRoot: selected must be a string when multiple is false");
  const [V, Y] = Ki(
    u ?? "",
    d,
    p
  ), [te, R] = Ki(x ?? !1, b, S), [H, z] = ht([]), [U, K] = ht([]);
  zr(() => {
    (te || g) && K(H);
  }, [te, H]), zr(() => {
    C && U.length > 0 && ee === "" && ne(U[0].value);
  }, [U == null ? void 0 : U.length]);
  const j = (ue, he) => {
    z((ce) => he !== void 0 ? [...ce.slice(0, he), ue, ...ce.slice(he)] : [...ce, ue]);
  }, I = (ue) => {
    z((he) => he.filter((ce) => ce.value !== ue.value));
  }, X = Rn(
    () => h ? U.filter((ue) => h(ue, V || "")) : U,
    [U, h, V]
  ), M = Rn(() => {
    const ue = Array.isArray(ee) ? ee : ee !== void 0 ? [ee] : [], he = [], ce = [];
    for (const ye of ue) {
      const ge = U.find((be) => be.value === ye);
      ge ? he.push(ge) : ce.push({ value: ye, label: ye });
    }
    return he.sort((ye, ge) => U.findIndex((be) => be.value === ye.value) - U.findIndex((be) => be.value === ge.value)), he.concat(ce);
  }, [ee, U]), L = t ? Tt : "div";
  return /* @__PURE__ */ v.jsx(
    G4,
    {
      multiple: !!n,
      search: V || "",
      onSearchChange: Y,
      open: te,
      onOpenChange: R,
      allowAddOption: _,
      onAddOption: w,
      selected: ee,
      onSelectedChange: ne,
      registerOption: j,
      unregisterOption: I,
      options: U,
      filteredOptions: X,
      selectedOptions: M,
      disabled: P,
      required: C,
      highlightOnMouseOver: k,
      children: /* @__PURE__ */ v.jsx(L, { ...D, ref: O, children: r })
    }
  );
}, J4 = ({ asChild: e, ...t }) => {
  const { getInputProps: n } = Yt(Xr), r = n(), a = e ? Tt : "input";
  return /* @__PURE__ */ v.jsx(a, { ...Qa(r, t) });
}, Q4 = ({ asChild: e, ...t }) => {
  const n = qe(null), { open: r, getMenuProps: a } = Yt(Xr), o = a(), l = Qa(o, t), u = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(u, { ...l, ref: nn(l.ref, n), "data-state": r ? "open" : "closed" });
}, eW = ({ asChild: e, placeholder: t = "", ...n }) => {
  var d;
  const r = qe(null), { selectedOptions: a } = Yt(Xr), o = a.length > 1 ? (
    // TODO: join doesnt work on formatted values
    a.map((p) => p.label).join(", ")
  ) : (d = a[0]) == null ? void 0 : d.label, l = a.length === 0 || a.length === 1 && a[0].value === "", u = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(u, { ...n, ref: nn(r, n.ref), "data-placeholder": l ? "" : void 0, children: l ? t : o });
}, tW = ({ asChild: e, ...t }) => {
  const { disabled: n, getToggleButtonProps: r, required: a, getDropdownProps: o, open: l, toggleButtonRef: u } = Yt(Xr), d = r(o({ preventKeyAction: l }));
  delete d.tabIndex;
  const p = Qa(d, t), h = n || p.disabled, g = e ? Tt : "button";
  return /* @__PURE__ */ v.jsx(
    g,
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
}, nW = ({ asChild: e, ...t }) => {
  const n = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(n, { ...t });
}, rW = ({ asChild: e, ...t }) => {
  const n = e ? Tt : "label";
  return /* @__PURE__ */ v.jsx(n, { role: "group", ...t });
}, iW = ({ asChild: e, ...t }) => {
  const n = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(n, { "aria-hidden": "true", role: "separator", ...t });
}, lf = J.createContext(void 0), aW = ({ asChild: e, value: t, disabled: n, index: r = void 0, ...a }) => {
  const o = qe(null), { filteredOptions: l, selectedOptions: u, getItemProps: d, highlightedIndex: p, registerOption: h, unregisterOption: g } = Yt(Xr), [x, b] = ht(""), S = { ref: o, value: t, label: x, disabled: n };
  zr(() => (h(S, r), () => g(S)), [t, x, n, r]);
  const _ = l == null ? void 0 : l.findIndex((Q) => Q.value === t), w = _ !== void 0 && _ > -1 ? l == null ? void 0 : l[_] : void 0, P = u == null ? void 0 : u.some((Q) => Q.value === t);
  if (!w) return null;
  const C = d({ item: w, index: _ }), k = Qa(C, a), D = p === _, O = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(lf.Provider, { value: { isSelected: P, isHighlighted: D, value: t, onTextChange: b }, children: /* @__PURE__ */ v.jsx(
    O,
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
}, oW = ({ asChild: e, children: t, ...n }) => {
  const { onTextChange: r } = Yt(lf);
  zr(() => {
    r(t);
  }, [t]);
  const a = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(a, { ...n, children: t });
}, sW = ({ asChild: e, ...t }) => {
  const { isSelected: n } = Yt(lf);
  if (!n) return null;
  const r = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(r, { ...t });
}, uf = ({ focusRef: e, onFocus: t, value: n, onChange: r }) => {
  const a = qe(null);
  return {
    onSelectedChange: (u) => {
      ub(n, u) || Bv(a == null ? void 0 : a.current, u);
    },
    selectNativeProps: {
      ref: a,
      onFocus: AS(t, (u) => {
        var d;
        (d = e == null ? void 0 : e.current) == null || d.focus();
      }),
      onChange: r
    }
  };
}, lW = ({ ref: e, ...t }) => {
  const n = qe(null), { multiple: r, options: a, required: o } = Yt(Xr);
  return /* @__PURE__ */ v.jsxs("select", { ...t, tabIndex: -1, multiple: r, ref: nn(n, e), children: [
    !o && /* @__PURE__ */ v.jsx("option", { value: "", disabled: !1 }),
    a == null ? void 0 : a.map((l) => {
      const u = typeof l.label == "string" ? l.label : Ov(l.label || "");
      return /* @__PURE__ */ v.jsx("option", { value: l.value, children: u }, l.value);
    })
  ] });
}, Ze = Object.assign(Z4, {
  Search: J4,
  Content: Q4,
  Value: eW,
  Trigger: tW,
  Group: nW,
  GroupLabel: rW,
  Separator: iW,
  Option: aW,
  OptionText: oW,
  OptionIndicator: sW,
  Native: lW
}), uW = ({
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
      !o && /* @__PURE__ */ v.jsx("span", { className: "flex justify-center items-center w-4 h-4 flex-none", children: /* @__PURE__ */ v.jsx(Ze.OptionIndicator, { children: /* @__PURE__ */ v.jsx(tl, {}) }) }),
      /* @__PURE__ */ v.jsx(Ze.OptionText, { children: t || e })
    ]
  }
), oc = J.memo(uW), cb = ({
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
  hideSearch: g = !1,
  hideCheck: x = !1,
  hideClear: b = !1,
  // remaining are select props we can pass down
  // the ones mentioned here are the ones we want to override
  className: S,
  value: _,
  onChange: w,
  onFocus: P,
  ...C
}) => {
  const k = J.useRef(null), D = J.useRef(null), [O, Q] = ht(!1);
  ct(() => {
    setTimeout(() => {
      Q(!0);
    }, 0);
  }, []);
  const [ee, ne] = Xt("", _, w), [V, Y] = ht(!1), [te, R] = ht(""), H = (L) => {
    Y(!!L), L || setTimeout(() => {
      var ue;
      (ue = k.current) == null || ue.focus();
    }, 10);
  }, { onSelectedChange: z, selectNativeProps: U } = uf({
    focusRef: k,
    onFocus: P,
    value: ee,
    onChange: ne
  }), K = (L) => {
    Bv(U.ref.current, ""), L.preventDefault(), L.stopPropagation();
  }, j = n == null ? void 0 : n.flatMap((L) => Array.isArray(L) ? L[1].map((ue) => ue.value) : L.value), I = (L) => {
    j.includes(L) ? z(L) : l && (u == null || u(L));
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
      selected: ee,
      onSelectedChange: I,
      open: V,
      forceMount: !O,
      onOpenChange: H,
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
            className: Pe("flex gap-1 justify-between w-full group rounded", S),
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
                ee && !b && !C.required ? /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: K, children: /* @__PURE__ */ v.jsx(_i, {}) }) : /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "pointer-events-none -ml-2", children: /* @__PURE__ */ v.jsx(
                  sD,
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
            className: Pe("p-0 min-w-0 overflow-visible flex flex-col", !O && "hidden"),
            onOpenAutoFocus: (L) => {
              L.preventDefault();
            },
            forceMount: !O,
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
                  /* @__PURE__ */ v.jsxs("div", { className: Pe("relative w-full min-w-0 p-2", g && "hidden"), children: [
                    /* @__PURE__ */ v.jsx("span", { className: "absolute top-1/2 left-4 transform -translate-y-1/2 text-neutral-400 text-xl", children: /* @__PURE__ */ v.jsx(vD, { className: "!w-3.5 !h-3.5" }) }),
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
                        !g && "pt-0"
                      ),
                      children: [
                        l && /* @__PURE__ */ v.jsx(
                          oc,
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
                            return /* @__PURE__ */ v.jsxs(J.Fragment, { children: [
                              ue !== 0 && /* @__PURE__ */ v.jsx(Ze.Separator, { className: "border-t border-neutral-200 my-2" }),
                              /* @__PURE__ */ v.jsxs(Ze.Group, { className: "flex flex-col", children: [
                                /* @__PURE__ */ v.jsx(Ze.GroupLabel, { className: "font-medium text-sm px-2 py-1 !pl-7", children: he }),
                                ce.map((ye) => /* @__PURE__ */ v.jsx(
                                  oc,
                                  {
                                    ...ye,
                                    hideCheck: x
                                  },
                                  ye.value
                                ))
                              ] })
                            ] }, he);
                          }
                          return /* @__PURE__ */ v.jsx(oc, { ...L, hideCheck: x }, L.value);
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
}, db = ({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  modifiers: r = {},
  modifiersClassNames: a = {},
  ...o
}) => {
  const l = {
    weekend: { dayOfWeek: [0, 6] }
  };
  return /* @__PURE__ */ v.jsx(
    vN,
    {
      locale: LI,
      captionLayout: "dropdown-buttons",
      showOutsideDays: n,
      weekStartsOn: 1,
      modifiersClassNames: { ...a },
      modifiers: { ...l, ...r },
      className: Pe("p-3", e),
      classNames: {
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
        day: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-neutral-100 hover:text-neutral-800 h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        day_selected: "bg-theme-600 !text-white hover:bg-theme-600 hover:text-white focus:bg-theme-600 focus:text-white rounded-md",
        day_today: "text-theme-600 rounded-md underline decoration-2 underline-offset-4",
        day_outside: "text-neutral-500 opacity-50",
        day_disabled: "text-neutral-500 opacity-50",
        day_range_start: "aria-selected:bg-theme-600 aria-selected:text-white rounded-l-md",
        day_range_middle: "aria-selected:bg-theme-600 aria-selected:text-white rounded-none",
        day_range_end: "aria-selected:bg-theme-600 aria-selected:text-white rounded-r-md",
        day_hidden: "invisible",
        vhidden: "hidden",
        ...t
      },
      components: {
        IconLeft: ({ ...u }) => /* @__PURE__ */ v.jsx(aD, { className: "h-4 w-4" }),
        IconRight: ({ ...u }) => /* @__PURE__ */ v.jsx(oD, { className: "h-4 w-4" }),
        Dropdown: ({ ...u }) => {
          const { name: d, onChange: p, value: h } = u;
          return /* @__PURE__ */ v.jsx(
            cb,
            {
              className: Pe(d === "months" && "min-w-[6.75rem]", u.className),
              onChange: p,
              value: h == null ? void 0 : h.toString(),
              name: d,
              options: J.Children.map(u.children, (g) => {
                var x, b;
                return {
                  value: (x = g.props) == null ? void 0 : x.value.toString(),
                  label: (b = g.props) == null ? void 0 : b.children
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
var fb = { exports: {} };
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
        var g = this.$utils(), x = !!g.u(h) || h;
        if (g.p(p) === r) {
          var b = this.quarter() - 1;
          return x ? this.month(3 * b).startOf(n).startOf("day") : this.month(3 * b + 2).endOf(n).endOf("day");
        }
        return d.bind(this)(p, h);
      };
    };
  });
})(fb);
var cW = fb.exports;
const dW = /* @__PURE__ */ Qs(cW);
var pb = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Yi, function() {
    var n = 1e3, r = 6e4, a = 36e5, o = "millisecond", l = "second", u = "minute", d = "hour", p = "day", h = "week", g = "month", x = "quarter", b = "year", S = "date", _ = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(z) {
      var U = ["th", "st", "nd", "rd"], K = z % 100;
      return "[" + z + (U[(K - 20) % 10] || U[K] || U[0]) + "]";
    } }, k = function(z, U, K) {
      var j = String(z);
      return !j || j.length >= U ? z : "" + Array(U + 1 - j.length).join(K) + z;
    }, D = { s: k, z: function(z) {
      var U = -z.utcOffset(), K = Math.abs(U), j = Math.floor(K / 60), I = K % 60;
      return (U <= 0 ? "+" : "-") + k(j, 2, "0") + ":" + k(I, 2, "0");
    }, m: function z(U, K) {
      if (U.date() < K.date()) return -z(K, U);
      var j = 12 * (K.year() - U.year()) + (K.month() - U.month()), I = U.clone().add(j, g), X = K - I < 0, M = U.clone().add(j + (X ? -1 : 1), g);
      return +(-(j + (K - I) / (X ? I - M : M - I)) || 0);
    }, a: function(z) {
      return z < 0 ? Math.ceil(z) || 0 : Math.floor(z);
    }, p: function(z) {
      return { M: g, y: b, w: h, d: p, D: S, h: d, m: u, s: l, ms: o, Q: x }[z] || String(z || "").toLowerCase().replace(/s$/, "");
    }, u: function(z) {
      return z === void 0;
    } }, O = "en", Q = {};
    Q[O] = C;
    var ee = "$isDayjsObject", ne = function(z) {
      return z instanceof R || !(!z || !z[ee]);
    }, V = function z(U, K, j) {
      var I;
      if (!U) return O;
      if (typeof U == "string") {
        var X = U.toLowerCase();
        Q[X] && (I = X), K && (Q[X] = K, I = X);
        var M = U.split("-");
        if (!I && M.length > 1) return z(M[0]);
      } else {
        var L = U.name;
        Q[L] = U, I = L;
      }
      return !j && I && (O = I), I || !j && O;
    }, Y = function(z, U) {
      if (ne(z)) return z.clone();
      var K = typeof U == "object" ? U : {};
      return K.date = z, K.args = arguments, new R(K);
    }, te = D;
    te.l = V, te.i = ne, te.w = function(z, U) {
      return Y(z, { locale: U.$L, utc: U.$u, x: U.$x, $offset: U.$offset });
    };
    var R = function() {
      function z(K) {
        this.$L = V(K.locale, null, !0), this.parse(K), this.$x = this.$x || K.x || {}, this[ee] = !0;
      }
      var U = z.prototype;
      return U.parse = function(K) {
        this.$d = function(j) {
          var I = j.date, X = j.utc;
          if (I === null) return /* @__PURE__ */ new Date(NaN);
          if (te.u(I)) return /* @__PURE__ */ new Date();
          if (I instanceof Date) return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var M = I.match(w);
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
          case b:
            return X ? L(1, 0) : L(31, 11);
          case g:
            return X ? L(1, ce) : L(0, ce + 1);
          case h:
            var be = this.$locale().weekStart || 0, we = (he < be ? he + 7 : he) - be;
            return L(X ? ye - we : ye + (6 - we), ce);
          case p:
          case S:
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
        var I, X = te.p(K), M = "set" + (this.$u ? "UTC" : ""), L = (I = {}, I[p] = M + "Date", I[S] = M + "Date", I[g] = M + "Month", I[b] = M + "FullYear", I[d] = M + "Hours", I[u] = M + "Minutes", I[l] = M + "Seconds", I[o] = M + "Milliseconds", I)[X], ue = X === p ? this.$D + (j - this.$W) : j;
        if (X === g || X === b) {
          var he = this.clone().set(S, 1);
          he.$d[L](ue), he.init(), this.$d = he.set(S, Math.min(this.$D, he.daysInMonth())).$d;
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
        if (M === g) return this.set(g, this.$M + K);
        if (M === b) return this.set(b, this.$y + K);
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
          case b:
            X = ye() / 12;
            break;
          case g:
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
        return this.endOf(g).$D;
      }, U.$locale = function() {
        return Q[this.$L];
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
      }, z;
    }(), H = R.prototype;
    return Y.prototype = H, [["$ms", o], ["$s", l], ["$m", u], ["$H", d], ["$W", p], ["$M", g], ["$y", b], ["$D", S]].forEach(function(z) {
      H[z[1]] = function(U) {
        return this.$g(U, z[0], z[1]);
      };
    }), Y.extend = function(z, U) {
      return z.$i || (z(U, R, Y), z.$i = !0), Y;
    }, Y.locale = V, Y.isDayjs = ne, Y.unix = function(z) {
      return Y(1e3 * z);
    }, Y.en = Q[O], Y.Ls = Q, Y.p = {}, Y;
  });
})(pb);
var fW = pb.exports;
const Ut = /* @__PURE__ */ Qs(fW);
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
function Sg(e, t) {
  t = t.add(1, "day"), Hn(e, t), qr(e, t);
}
function pW(e, t) {
  t = t.add(1, "day"), Ha(e, t), qr(e, t);
}
function Hn(e, t) {
  e.assign("day", t.date()), e.assign("month", t.month() + 1), e.assign("year", t.year());
}
function hb(e, t) {
  e.assign("hour", t.hour()), e.assign("minute", t.minute()), e.assign("second", t.second()), e.assign("millisecond", t.millisecond()), e.get("hour") < 12 ? e.assign("meridiem", We.AM) : e.assign("meridiem", We.PM);
}
function Ha(e, t) {
  e.imply("day", t.date()), e.imply("month", t.month() + 1), e.imply("year", t.year());
}
function qr(e, t) {
  e.imply("hour", t.hour()), e.imply("minute", t.minute()), e.imply("second", t.second()), e.imply("millisecond", t.millisecond());
}
const hW = {
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
    dstStart: (e) => Dg(e, Nn.MARCH, zt.SUNDAY, 2),
    dstEnd: (e) => Dg(e, Nn.OCTOBER, zt.SUNDAY, 3)
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
function Dg(e, t, n, r = 0) {
  const a = n === 0 ? 7 : n, o = new Date(e, t - 1 + 1, 1, 12), l = o.getDay() === 0 ? 7 : o.getDay();
  let u;
  return l === a ? u = 7 : l < a ? u = 7 + l - a : u = l - a, o.setDate(o.getDate() - u), new Date(e, t - 1, o.getDate(), r);
}
function mb(e, t, n = {}) {
  if (e == null)
    return null;
  if (typeof e == "number")
    return e;
  const r = n[e] ?? hW[e];
  return r == null ? null : typeof r == "number" ? r : t == null ? null : Ut(t).isAfter(r.dstStart(t.getFullYear())) && !Ut(t).isAfter(r.dstEnd(t.getFullYear())) ? r.timezoneOffsetDuringDst : r.timezoneOffsetNonDst;
}
Ut.extend(dW);
class cf {
  constructor(t) {
    t = t ?? /* @__PURE__ */ new Date(), t instanceof Date ? this.instant = t : (this.instant = t.instant ?? /* @__PURE__ */ new Date(), this.timezoneOffset = mb(t.timezone, this.instant));
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
    return n.hour || n.minute || n.second ? (hb(a, r), Hn(a, r), t.timezoneOffset !== null && a.assign("timezoneOffset", -t.instant.getTimezoneOffset())) : (qr(a, r), t.timezoneOffset !== null && a.imply("timezoneOffset", -t.instant.getTimezoneOffset()), n.d ? (a.assign("day", r.date()), a.assign("month", r.month() + 1), a.assign("year", r.year())) : n.week ? (a.assign("day", r.date()), a.assign("month", r.month() + 1), a.assign("year", r.year()), a.imply("weekday", r.day())) : (a.imply("day", r.date()), n.month ? (a.assign("month", r.month() + 1), a.assign("year", r.year())) : (a.imply("month", r.month() + 1), n.year ? a.assign("year", r.year()) : a.imply("year", r.year())))), a;
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
function df(e, t, n = "\\s{0,5},?\\s{0,5}") {
  const r = t.replace(/\((?!\?)/g, "(?:");
  return `${e}${r}(?:${n}${r}){0,10}`;
}
function mW(e) {
  let t;
  return e instanceof Array ? t = [...e] : e instanceof Map ? t = Array.from(e.keys()) : t = Object.keys(e), t;
}
function rn(e) {
  return `(?:${mW(e).sort((n, r) => r.length - n.length).join("|").replace(/\./g, "\\.")})`;
}
function ff(e) {
  return e < 100 && (e > 50 ? e = e + 1900 : e = e + 2e3), e;
}
function oo(e, t, n) {
  const r = Ut(e);
  let a = r;
  a = a.month(n - 1), a = a.date(t), a = a.year(r.year());
  const o = a.add(1, "y"), l = a.add(-1, "y");
  return Math.abs(o.diff(r)) < Math.abs(a.diff(r)) ? a = o : Math.abs(l.diff(r)) < Math.abs(a.diff(r)) && (a = l), a.year();
}
const gb = {
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
}, vb = {
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
  ...vb,
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
}, zc = {
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
}, Bc = {
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
}, yb = {
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
}, hl = {
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
  ...yb
}, xb = `(?:${rn(zc)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
function gW(e) {
  const t = e.toLowerCase();
  return zc[t] !== void 0 ? zc[t] : t === "a" || t === "an" || t == "the" ? 1 : t.match(/few/) ? 3 : t.match(/half/) ? 0.5 : t.match(/couple/) ? 2 : t.match(/several/) ? 7 : parseFloat(t);
}
const Vs = `(?:${rn(Bc)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function zs(e) {
  let t = e.toLowerCase();
  return Bc[t] !== void 0 ? Bc[t] : (t = t.replace(/(?:st|nd|rd|th)$/i, ""), parseInt(t));
}
const ml = "(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])";
function gl(e) {
  if (/BE/i.test(e))
    return e = e.replace(/BE/i, ""), parseInt(e) - 543;
  if (/BCE?/i.test(e))
    return e = e.replace(/BCE?/i, ""), -parseInt(e);
  if (/(AD|CE)/i.test(e))
    return e = e.replace(/(AD|CE)/i, ""), parseInt(e);
  const t = parseInt(e);
  return ff(t);
}
const bb = `(${xb})\\s{0,3}(${rn(hl)})`, kg = new RegExp(bb, "i"), vW = `(${xb})\\s{0,3}(${rn(yb)})`, wb = "\\s{0,5},?(?:\\s*and)?\\s{0,5}", so = df("(?:(?:about|around)\\s{0,3})?", bb, wb), vl = df("(?:(?:about|around)\\s{0,3})?", vW, wb);
function ma(e) {
  const t = {};
  let n = e, r = kg.exec(n);
  for (; r; )
    yW(t, r), n = n.substring(r[0].length).trim(), r = kg.exec(n);
  return Object.keys(t).length == 0 ? null : t;
}
function yW(e, t) {
  if (t[0].match(/^[a-zA-Z]+$/))
    return;
  const n = gW(t[1]), r = hl[t[2].toLowerCase()];
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
const xW = new RegExp(`(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${so})(?=\\W|$)`, "i"), bW = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${so})(?=\\W|$)`, "i"), wW = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${vl})(?=\\W|$)`, "i");
class _W extends $t {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern(t) {
    return this.strictMode ? wW : t.option.forwardDate ? xW : bW;
  }
  innerExtract(t, n) {
    if (n[0].match(/^for\s*the\s*\w+/))
      return null;
    const r = ma(n[1]);
    return r ? yt.createRelativeFromReference(t.reference, r) : null;
  }
}
const EW = new RegExp(`(?:on\\s{0,3})?(${Vs})(?:\\s{0,3}(?:to|\\-|\\–|until|through|till)?\\s{0,3}(${Vs}))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(${rn(Zr)})(?:(?:-|/|,?\\s{0,3})(${ml}(?!\\w)))?(?=\\W|$)`, "i"), Pg = 1, Ag = 2, CW = 3, Ig = 4;
class TW extends $t {
  innerPattern() {
    return EW;
  }
  innerExtract(t, n) {
    const r = t.createParsingResult(n.index, n[0]), a = Zr[n[CW].toLowerCase()], o = zs(n[Pg]);
    if (o > 31)
      return n.index = n.index + n[Pg].length, null;
    if (r.start.assign("month", a), r.start.assign("day", o), n[Ig]) {
      const l = gl(n[Ig]);
      r.start.assign("year", l);
    } else {
      const l = oo(t.refDate, o, a);
      r.start.imply("year", l);
    }
    if (n[Ag]) {
      const l = zs(n[Ag]);
      r.end = r.start.clone(), r.end.assign("day", l);
    }
    return r;
  }
}
const OW = new RegExp(`(${rn(Zr)})(?:-|/|\\s*,?\\s*)(${Vs})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${Vs})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${ml}))?(?=\\W|$)(?!\\:\\d)`, "i"), SW = 1, Mg = 2, sc = 3, lc = 4;
class DW extends $t {
  constructor(t) {
    super(), this.shouldSkipYearLikeDate = t;
  }
  innerPattern() {
    return OW;
  }
  innerExtract(t, n) {
    const r = Zr[n[SW].toLowerCase()], a = zs(n[Mg]);
    if (a > 31 || this.shouldSkipYearLikeDate && !n[sc] && !n[lc] && n[Mg].match(/^2[0-5]$/))
      return null;
    const o = t.createParsingComponents({
      day: a,
      month: r
    }).addTag("parser/ENMonthNameMiddleEndianParser");
    if (n[lc]) {
      const d = gl(n[lc]);
      o.assign("year", d);
    } else {
      const d = oo(t.refDate, a, r);
      o.imply("year", d);
    }
    if (!n[sc])
      return o;
    const l = zs(n[sc]), u = t.createParsingResult(n.index, n[0]);
    return u.start = o, u.end = o.clone(), u.end.assign("day", l), u;
  }
}
const kW = new RegExp(`((?:in)\\s*)?(${rn(Zr)})\\s*(?:[,-]?\\s*(${ml})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"), PW = 1, AW = 2, Ng = 3;
class IW extends $t {
  innerPattern() {
    return kW;
  }
  innerExtract(t, n) {
    const r = n[AW].toLowerCase();
    if (n[0].length <= 3 && !vb[r])
      return null;
    const a = t.createParsingResult(n.index + (n[PW] || "").length, n.index + n[0].length);
    a.start.imply("day", 1), a.start.addTag("parser/ENMonthNameParser");
    const o = Zr[r];
    if (a.start.assign("month", o), n[Ng]) {
      const l = gl(n[Ng]);
      a.start.assign("year", l);
    } else {
      const l = oo(t.refDate, 1, o);
      a.start.imply("year", l);
    }
    return a;
  }
}
const MW = new RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${rn(Zr)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"), NW = 1, jW = 2, jg = 3, RW = 4;
class $W extends $t {
  constructor(t) {
    super(), this.strictMonthDateOrder = t;
  }
  innerPattern() {
    return MW;
  }
  innerExtract(t, n) {
    const r = parseInt(n[NW]);
    let a = parseInt(n[RW]), o = n[jg] ? parseInt(n[jg]) : Zr[n[jW].toLowerCase()];
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
const FW = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i"), LW = 1, WW = 2;
class VW extends $t {
  innerPattern() {
    return FW;
  }
  innerExtract(t, n) {
    const r = parseInt(n[WW]), a = parseInt(n[LW]);
    return t.createParsingComponents().imply("day", 1).assign("month", a).assign("year", r);
  }
}
function zW(e, t, n, r) {
  return new RegExp(`${e}${t}(\\d{1,4})(?:(?:\\.|:|：)(\\d{1,2})(?:(?::|：)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${n}`, r);
}
function BW(e, t) {
  return new RegExp(`^(${e})(\\d{1,4})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${t}`, "i");
}
const Rg = 2, Hi = 3, ps = 4, hs = 5, La = 6;
class _b {
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
    let o = 0, l = null, u = parseInt(n[Rg]);
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
    if (a.assign("hour", u), a.assign("minute", o), l !== null ? a.assign("meridiem", l) : u < 12 ? a.imply("meridiem", We.AM) : a.imply("meridiem", We.PM), n[hs] != null) {
      const d = parseInt(n[hs].substring(0, 3));
      if (d >= 1e3)
        return null;
      a.assign("millisecond", d);
    }
    if (n[ps] != null) {
      const d = parseInt(n[ps]);
      if (d >= 60)
        return null;
      a.assign("second", d);
    }
    return a;
  }
  extractFollowingTimeComponents(t, n, r) {
    const a = t.createParsingComponents();
    if (n[hs] != null) {
      const d = parseInt(n[hs].substring(0, 3));
      if (d >= 1e3)
        return null;
      a.assign("millisecond", d);
    }
    if (n[ps] != null) {
      const d = parseInt(n[ps]);
      if (d >= 60)
        return null;
      a.assign("second", d);
    }
    let o = parseInt(n[Rg]), l = 0, u = -1;
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
    return this.cachedPrimaryPrefix === t && this.cachedPrimarySuffix === n ? this.cachedPrimaryTimePattern : (this.cachedPrimaryTimePattern = zW(this.primaryPatternLeftBoundary(), t, n, this.patternFlags()), this.cachedPrimaryPrefix = t, this.cachedPrimarySuffix = n, this.cachedPrimaryTimePattern);
  }
  getFollowingTimePatternThroughCache() {
    const t = this.followingPhase(), n = this.followingSuffix();
    return this.cachedFollowingPhase === t && this.cachedFollowingSuffix === n ? this.cachedFollowingTimePatten : (this.cachedFollowingTimePatten = BW(t, n), this.cachedFollowingPhase = t, this.cachedFollowingSuffix = n, this.cachedFollowingTimePatten);
  }
}
class HW extends _b {
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
function lo(e) {
  const t = {};
  for (const n in e)
    t[n] = -e[n];
  return t;
}
function Eb(e, t) {
  const n = e.clone();
  let r = e.dayjs();
  for (const a in t)
    r = r.add(t[a], a);
  return ("day" in t || "d" in t || "week" in t || "month" in t || "year" in t) && (n.imply("day", r.date()), n.imply("month", r.month() + 1), n.imply("year", r.year())), ("second" in t || "minute" in t || "hour" in t) && (n.imply("second", r.second()), n.imply("minute", r.minute()), n.imply("hour", r.hour())), n;
}
const UW = new RegExp(`(${so})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"), YW = new RegExp(`(${vl})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class qW extends $t {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern() {
    return this.strictMode ? YW : UW;
  }
  innerExtract(t, n) {
    const r = ma(n[1]);
    if (!r)
      return null;
    const a = lo(r);
    return yt.createRelativeFromReference(t.reference, a);
  }
}
const KW = new RegExp(`(${so})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"), GW = new RegExp(`(${vl})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i"), XW = 1;
class ZW extends $t {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern() {
    return this.strictMode ? GW : KW;
  }
  innerExtract(t, n) {
    const r = ma(n[XW]);
    return r ? yt.createRelativeFromReference(t.reference, r) : null;
  }
}
class JW {
  refine(t, n) {
    return n.filter((r) => this.isValid(t, r));
  }
}
class uo {
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
class Cb extends uo {
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
class QW extends Cb {
  patternBetween() {
    return /^\s*(to|-|–|until|through|till)\s*$/i;
  }
}
function $g(e, t) {
  const n = e.clone(), r = e.start, a = t.start;
  if (n.start = Fg(r, a), e.end != null || t.end != null) {
    const o = e.end == null ? e.start : e.end, l = t.end == null ? t.start : t.end, u = Fg(o, l);
    if (e.end == null && u.date().getTime() < n.start.date().getTime()) {
      const d = u.dayjs().add(1, "day");
      u.isCertain("day") ? Hn(u, d) : Ha(u, d);
    }
    n.end = u;
  }
  return n;
}
function Fg(e, t) {
  const n = e.clone();
  return t.isCertain("hour") ? (n.assign("hour", t.get("hour")), n.assign("minute", t.get("minute")), t.isCertain("second") ? (n.assign("second", t.get("second")), t.isCertain("millisecond") ? n.assign("millisecond", t.get("millisecond")) : n.imply("millisecond", t.get("millisecond"))) : (n.imply("second", t.get("second")), n.imply("millisecond", t.get("millisecond")))) : (n.imply("hour", t.get("hour")), n.imply("minute", t.get("minute")), n.imply("second", t.get("second")), n.imply("millisecond", t.get("millisecond"))), t.isCertain("timezoneOffset") && n.assign("timezoneOffset", t.get("timezoneOffset")), t.isCertain("meridiem") ? n.assign("meridiem", t.get("meridiem")) : t.get("meridiem") != null && n.get("meridiem") == null && n.imply("meridiem", t.get("meridiem")), n.get("meridiem") == We.PM && n.get("hour") < 12 && (t.isCertain("hour") ? n.assign("hour", n.get("hour") + 12) : n.imply("hour", n.get("hour") + 12)), n.addTags(e.tags()), n.addTags(t.tags()), n;
}
class Tb extends uo {
  shouldMergeResults(t, n, r) {
    return (n.start.isOnlyDate() && r.start.isOnlyTime() || r.start.isOnlyDate() && n.start.isOnlyTime()) && t.match(this.patternBetween()) != null;
  }
  mergeResults(t, n, r) {
    const a = n.start.isOnlyDate() ? $g(n, r) : $g(r, n);
    return a.index = n.index, a.text = n.text + t + r.text, a;
  }
}
class Lg extends Tb {
  patternBetween() {
    return new RegExp("^\\s*(T|at|after|before|on|of|,|-|\\.|∙|:)?\\s*$");
  }
}
const eV = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class tV {
  constructor(t) {
    this.timezoneOverrides = t;
  }
  refine(t, n) {
    const r = t.option.timezones ?? {};
    return n.forEach((a) => {
      const o = t.text.substring(a.index + a.text.length), l = eV.exec(o);
      if (!l)
        return;
      const u = l[1].toUpperCase(), d = a.start.date() ?? a.refDate ?? /* @__PURE__ */ new Date(), p = { ...this.timezoneOverrides, ...r }, h = mb(u, d, p);
      if (h == null)
        return;
      t.debug(() => {
        console.log(`Extracting timezone: '${u}' into: ${h} for: ${a.start}`);
      });
      const g = a.start.get("timezoneOffset");
      g !== null && h != g && (a.start.isCertain("timezoneOffset") || u != l[1]) || a.start.isOnlyDate() && u != l[1] || (a.text += l[0], a.start.isCertain("timezoneOffset") || a.start.assign("timezoneOffset", h), a.end != null && !a.end.isCertain("timezoneOffset") && a.end.assign("timezoneOffset", h));
    }), n;
  }
}
const nV = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i"), rV = 1, iV = 2, aV = 3;
class oV {
  refine(t, n) {
    return n.forEach(function(r) {
      if (r.start.isCertain("timezoneOffset"))
        return;
      const a = t.text.substring(r.index + r.text.length), o = nV.exec(a);
      if (!o)
        return;
      t.debug(() => {
        console.log(`Extracting timezone: '${o[0]}' into : ${r}`);
      });
      const l = parseInt(o[iV]), u = parseInt(o[aV] || "0");
      let d = l * 60 + u;
      d > 14 * 60 || (o[rV] === "-" && (d = -d), r.end != null && r.end.assign("timezoneOffset", d), r.start.assign("timezoneOffset", d), r.text += o[0]);
    }), n;
  }
}
class Hc {
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
class sV {
  refine(t, n) {
    return t.option.forwardDate && n.forEach((r) => {
      let a = Ut(t.refDate);
      if (r.start.isOnlyTime() && a.isAfter(r.start.dayjs()) && (a = a.add(1, "day"), Ha(r.start, a), r.end && r.end.isOnlyTime() && (Ha(r.end, a), r.start.dayjs().isAfter(r.end.dayjs()) && (a = a.add(1, "day"), Ha(r.end, a))), t.debug(() => {
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
class lV extends JW {
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
const uV = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)", "i"), cV = 1, dV = 2, fV = 3, Wg = 4, pV = 5, Vg = 6, zg = 7, hV = 8, Bg = 9, Hg = 10;
class Ob extends $t {
  innerPattern() {
    return uV;
  }
  innerExtract(t, n) {
    const r = t.createParsingComponents({
      year: parseInt(n[cV]),
      month: parseInt(n[dV]),
      day: parseInt(n[fV])
    });
    if (n[Wg] != null && (r.assign("hour", parseInt(n[Wg])), r.assign("minute", parseInt(n[pV])), n[Vg] != null && r.assign("second", parseInt(n[Vg])), n[zg] != null && r.assign("millisecond", parseInt(n[zg])), n[hV] != null)) {
      let a = 0;
      if (n[Bg]) {
        const o = parseInt(n[Bg]);
        let l = 0;
        n[Hg] != null && (l = parseInt(n[Hg])), a = o * 60, a < 0 ? a -= l : a += l;
      }
      r.assign("timezoneOffset", a);
    }
    return r.addTag("parser/ISOFormatParser");
  }
}
class mV extends uo {
  mergeResults(t, n, r) {
    const a = r.clone();
    return a.index = n.index, a.text = n.text + t + a.text, a.start.assign("weekday", n.start.get("weekday")), a.end && a.end.assign("weekday", n.start.get("weekday")), a;
  }
  shouldMergeResults(t, n, r) {
    return n.start.isOnlyWeekdayComponent() && !n.start.isCertain("hour") && r.start.isCertain("day") && t.match(/^,?\s*$/) != null;
  }
}
function Sb(e, t = !1) {
  return e.parsers.unshift(new Ob()), e.refiners.unshift(new mV()), e.refiners.unshift(new oV()), e.refiners.unshift(new Hc()), e.refiners.push(new tV()), e.refiners.push(new Hc()), e.refiners.push(new sV()), e.refiners.push(new lV(t)), e;
}
function Db(e) {
  const t = Ut(e.instant), n = new yt(e, {});
  return Hn(n, t), hb(n, t), e.timezoneOffset !== null && n.assign("timezoneOffset", t.utcOffset()), n.addTag("casualReference/now"), n;
}
function kb(e) {
  const t = Ut(e.instant), n = new yt(e, {});
  return Hn(n, t), qr(n, t), n.addTag("casualReference/today"), n;
}
function gV(e) {
  return vV(e).addTag("casualReference/yesterday");
}
function vV(e, t) {
  return Pb(e, -1);
}
function yV(e) {
  return Pb(e, 1).addTag("casualReference/tomorrow");
}
function Pb(e, t) {
  let n = Ut(e.instant);
  const r = new yt(e, {});
  return n = n.add(t, "day"), Hn(r, n), qr(r, n), r;
}
function xV(e, t = 22) {
  const n = Ut(e.instant), r = new yt(e, {});
  return Hn(r, n), r.imply("hour", t), r.imply("meridiem", We.PM), r.addTag("casualReference/tonight"), r;
}
function bV(e, t = 20) {
  const n = new yt(e, {});
  return n.imply("meridiem", We.PM), n.imply("hour", t), n.addTag("casualReference/evening"), n;
}
function wV(e) {
  const t = new yt(e, {}), n = Ut(e.instant);
  return n.hour() > 2 && pW(t, n), t.assign("hour", 0), t.imply("minute", 0), t.imply("second", 0), t.imply("millisecond", 0), t.addTag("casualReference/midnight"), t;
}
function _V(e, t = 6) {
  const n = new yt(e, {});
  return n.imply("meridiem", We.AM), n.imply("hour", t), n.imply("minute", 0), n.imply("second", 0), n.imply("millisecond", 0), n.addTag("casualReference/morning"), n;
}
function EV(e, t = 15) {
  const n = new yt(e, {});
  return n.imply("meridiem", We.PM), n.imply("hour", t), n.imply("minute", 0), n.imply("second", 0), n.imply("millisecond", 0), n.addTag("casualReference/afternoon"), n;
}
function CV(e) {
  const t = new yt(e, {});
  return t.imply("meridiem", We.AM), t.imply("hour", 12), t.imply("minute", 0), t.imply("second", 0), t.imply("millisecond", 0), t.addTag("casualReference/noon"), t;
}
const TV = /(now|today|tonight|tomorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class OV extends $t {
  innerPattern(t) {
    return TV;
  }
  innerExtract(t, n) {
    let r = Ut(t.refDate);
    const a = n[0].toLowerCase();
    let o = t.createParsingComponents();
    switch (a) {
      case "now":
        o = Db(t.reference);
        break;
      case "today":
        o = kb(t.reference);
        break;
      case "yesterday":
        o = gV(t.reference);
        break;
      case "tomorrow":
      case "tmr":
      case "tmrw":
        o = yV(t.reference);
        break;
      case "tonight":
        o = xV(t.reference);
        break;
      default:
        a.match(/last\s*night/) && (r.hour() > 6 && (r = r.add(-1, "day")), Hn(o, r), o.imply("hour", 0));
        break;
    }
    return o.addTag("parser/ENCasualDateParser"), o;
  }
}
const SV = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class DV extends $t {
  innerPattern() {
    return SV;
  }
  innerExtract(t, n) {
    let r = null;
    switch (n[1].toLowerCase()) {
      case "afternoon":
        r = EV(t.reference);
        break;
      case "evening":
      case "night":
        r = bV(t.reference);
        break;
      case "midnight":
        r = wV(t.reference);
        break;
      case "morning":
        r = _V(t.reference);
        break;
      case "noon":
      case "midday":
        r = CV(t.reference);
        break;
    }
    return r && r.addTag("parser/ENCasualTimeParser"), r;
  }
}
function Ab(e, t, n) {
  const r = e.getDateWithAdjustedTimezone(), a = kV(r, t, n);
  let o = new yt(e);
  return o = Eb(o, { day: a }), o.assign("weekday", t), o;
}
function kV(e, t, n) {
  const r = e.getDay();
  switch (n) {
    case "this":
      return Cs(e, t);
    case "last":
      return Ib(e, t);
    case "next":
      return r == zt.SUNDAY ? t == zt.SUNDAY ? 7 : t : r == zt.SATURDAY ? t == zt.SATURDAY ? 7 : t == zt.SUNDAY ? 8 : 1 + t : t < r && t != zt.SUNDAY ? Cs(e, t) : Cs(e, t) + 7;
  }
  return PV(e, t);
}
function PV(e, t) {
  const n = Ib(e, t), r = Cs(e, t);
  return r < -n ? r : n;
}
function Cs(e, t) {
  const n = e.getDay();
  let r = t - n;
  return r < 0 && (r += 7), r;
}
function Ib(e, t) {
  const n = e.getDay();
  let r = t - n;
  return r >= 0 && (r -= 7), r;
}
const AV = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${rn(gb)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i"), IV = 1, MV = 2, NV = 3;
class jV extends $t {
  innerPattern() {
    return AV;
  }
  innerExtract(t, n) {
    const r = n[MV].toLowerCase(), a = gb[r], o = n[IV], l = n[NV];
    let u = o || l;
    u = u || "", u = u.toLowerCase();
    let d = null;
    return u == "last" || u == "past" ? d = "last" : u == "next" ? d = "next" : u == "this" && (d = "this"), Ab(t.reference, a, d);
  }
}
const RV = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${rn(hl)})(?=\\s*)(?=\\W|$)`, "i"), $V = 1, FV = 2;
class LV extends $t {
  innerPattern() {
    return RV;
  }
  innerExtract(t, n) {
    const r = n[$V].toLowerCase(), a = n[FV].toLowerCase(), o = hl[a];
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
const WV = new RegExp("([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)", "i"), VV = 1, zV = 5, Ug = 2, Yg = 3, uc = 4;
class Mb {
  constructor(t) {
    this.groupNumberMonth = t ? Yg : Ug, this.groupNumberDay = t ? Ug : Yg;
  }
  pattern() {
    return WV;
  }
  extract(t, n) {
    const r = n.index + n[VV].length, a = n.index + n[0].length - n[zV].length;
    if (r > 0 && t.text.substring(0, r).match("\\d/?$") || a < t.text.length && t.text.substring(a).match("^/?\\d"))
      return;
    const o = t.text.substring(r, a);
    if (o.match(/^\d\.\d$/) || o.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/) || !n[uc] && o.indexOf("/") < 0)
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
    if (l.start.assign("day", d), l.start.assign("month", u), n[uc]) {
      const p = parseInt(n[uc]), h = ff(p);
      l.start.assign("year", h);
    } else {
      const p = oo(t.refDate, d, u);
      l.start.imply("year", p);
    }
    return l;
  }
}
const BV = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${so})(?=\\W|$)`, "i"), HV = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${vl})(?=\\W|$)`, "i");
class UV extends $t {
  constructor(t = !0) {
    super(), this.allowAbbreviations = t;
  }
  innerPattern() {
    return this.allowAbbreviations ? BV : HV;
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
        a = lo(a);
        break;
    }
    return yt.createRelativeFromReference(t.reference, a);
  }
}
function YV(e) {
  return e.text.match(/^[+-]/i) != null;
}
function qg(e) {
  return e.text.match(/^-/i) != null;
}
class qV extends uo {
  shouldMergeResults(t, n, r) {
    return t.match(/^\s*$/i) ? YV(r) || qg(r) : !1;
  }
  mergeResults(t, n, r, a) {
    let o = ma(r.text);
    qg(r) && (o = lo(o));
    const l = yt.createRelativeFromReference(new cf(n.start.date()), o);
    return new ha(n.reference, n.index, `${n.text}${t}${r.text}`, l);
  }
}
function Kg(e) {
  return e.text.match(/\s+(before|from)$/i) != null;
}
function KV(e) {
  return e.text.match(/\s+(after|since)$/i) != null;
}
class GV extends uo {
  patternBetween() {
    return /^\s*$/i;
  }
  shouldMergeResults(t, n, r) {
    return !t.match(this.patternBetween()) || !Kg(n) && !KV(n) ? !1 : !!r.start.get("day") && !!r.start.get("month") && !!r.start.get("year");
  }
  mergeResults(t, n, r) {
    let a = ma(n.text);
    Kg(n) && (a = lo(a));
    const o = yt.createRelativeFromReference(new cf(r.start.date()), a);
    return new ha(r.reference, n.index, `${n.text}${t}${r.text}`, o);
  }
}
const XV = new RegExp(`^\\s*(${ml})`, "i"), ZV = 1;
class JV {
  refine(t, n) {
    return n.forEach(function(r) {
      if (!r.start.isDateWithUnknownYear())
        return;
      const a = t.text.substring(r.index + r.text.length), o = XV.exec(a);
      if (!o)
        return;
      t.debug(() => {
        console.log(`Extracting year: '${o[0]}' into : ${r}`);
      });
      const l = gl(o[ZV]);
      r.end != null && r.end.assign("year", l), r.start.assign("year", l), r.text += o[0];
    }), n;
  }
}
class QV {
  createCasualConfiguration(t = !1) {
    const n = this.createConfiguration(!1, t);
    return n.parsers.push(new OV()), n.parsers.push(new DV()), n.parsers.push(new IW()), n.parsers.push(new LV()), n.parsers.push(new UV()), n;
  }
  createConfiguration(t = !0, n = !1) {
    const r = Sb({
      parsers: [
        new Mb(n),
        new _W(t),
        new TW(),
        new DW(n),
        new jV(),
        new VW(),
        new HW(t),
        new qW(t),
        new ZW(t)
      ],
      refiners: [new Lg()]
    }, t);
    return r.parsers.unshift(new $W(t)), r.refiners.unshift(new GV()), r.refiners.unshift(new qV()), r.refiners.unshift(new Hc()), r.refiners.push(new Lg()), r.refiners.push(new JV()), r.refiners.push(new QW()), r;
  }
}
class Za {
  constructor(t) {
    this.defaultConfig = new QV(), t = t || this.defaultConfig.createCasualConfiguration(), this.parsers = [...t.parsers], this.refiners = [...t.refiners];
  }
  clone() {
    return new Za({
      parsers: [...this.parsers],
      refiners: [...this.refiners]
    });
  }
  parseDate(t, n, r) {
    const a = this.parse(t, n, r);
    return a.length > 0 ? a[0].start.date() : null;
  }
  parse(t, n, r) {
    const a = new e3(t, n, r);
    let o = [];
    return this.parsers.forEach((l) => {
      const u = Za.executeParser(a, l);
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
      const g = h.index, x = h.text;
      t.debug(() => console.log(`${n.constructor.name} extracted (at index=${g}) '${x}'`)), r.push(h), l = o.substring(g + x.length), u = a.exec(l);
    }
    return r;
  }
}
class e3 {
  constructor(t, n, r) {
    this.text = t, this.reference = new cf(n), this.option = r ?? {}, this.refDate = this.reference.instant;
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
class t3 extends _b {
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
const Nb = {
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
}, jb = {
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
}, Uc = {
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
}, Bs = {
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
}, Rb = `(?:${rn(Uc)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`;
function $b(e) {
  const t = e.toLowerCase();
  return Uc[t] !== void 0 ? Uc[t] : t === "ein" || t === "einer" || t === "einem" || t === "einen" || t === "eine" ? 1 : t.match(/wenigen/) ? 2 : t.match(/halb/) || t.match(/halben/) ? 0.5 : t.match(/einigen/) ? 3 : t.match(/mehreren/) ? 7 : parseFloat(t);
}
const n3 = "(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)";
function r3(e) {
  if (/v/i.test(e))
    return -parseInt(e.replace(/[^0-9]+/gi, ""));
  if (/n/i.test(e))
    return parseInt(e.replace(/[^0-9]+/gi, ""));
  if (/z/i.test(e))
    return parseInt(e.replace(/[^0-9]+/gi, ""));
  const t = parseInt(e);
  return ff(t);
}
const Fb = `(${Rb})\\s{0,5}(${rn(Bs)})\\s{0,5}`, Gg = new RegExp(Fb, "i"), i3 = df("", Fb);
function a3(e) {
  const t = {};
  let n = e, r = Gg.exec(n);
  for (; r; )
    o3(t, r), n = n.substring(r[0].length), r = Gg.exec(n);
  return t;
}
function o3(e, t) {
  const n = $b(t[1]), r = Bs[t[2].toLowerCase()];
  e[r] = n;
}
const s3 = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:ä|ae)chste[mn])\\s*)?(${rn(Nb)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:ä|ae)chste)\\s*woche)?(?=\\W|$)`, "i"), l3 = 1, u3 = 3, c3 = 2;
class d3 extends $t {
  innerPattern() {
    return s3;
  }
  innerExtract(t, n) {
    const r = n[c3].toLowerCase(), a = Nb[r], o = n[l3], l = n[u3];
    let u = o || l;
    u = u || "", u = u.toLowerCase();
    let d = null;
    return u.match(/letzte/) ? d = "last" : u.match(/chste/) ? d = "next" : u.match(/diese/) && (d = "this"), Ab(t.reference, a, d);
  }
}
const f3 = new RegExp("(^|\\s|T)(?:(?:um|von)\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i"), p3 = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|bis(?:\\s+um)?|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i"), h3 = 2, Xg = 3, Zg = 4, Jg = 5;
class Hs {
  pattern(t) {
    return f3;
  }
  extract(t, n) {
    const r = t.createParsingResult(n.index + n[1].length, n[0].substring(n[1].length));
    if (r.text.match(/^\d{4}$/) || (r.start = Hs.extractTimeComponent(r.start.clone(), n), !r.start))
      return n.index += n[0].length, null;
    const a = t.text.substring(n.index + n[0].length), o = p3.exec(a);
    return o && (r.end = Hs.extractTimeComponent(r.start.clone(), o), r.end && (r.text += o[0])), r;
  }
  static extractTimeComponent(t, n) {
    let r = 0, a = 0, o = null;
    if (r = parseInt(n[h3]), n[Xg] != null && (a = parseInt(n[Xg])), a >= 60 || r > 24)
      return null;
    if (r >= 12 && (o = We.PM), n[Jg] != null) {
      if (r > 12)
        return null;
      const l = n[Jg].toLowerCase();
      l.match(/morgen|vormittag/) && (o = We.AM, r == 12 && (r = 0)), l.match(/nachmittag|abend/) && (o = We.PM, r != 12 && (r += 12)), l.match(/nacht/) && (r == 12 ? (o = We.AM, r = 0) : r < 6 ? o = We.AM : (o = We.PM, r += 12));
    }
    if (t.assign("hour", r), t.assign("minute", a), o !== null ? t.assign("meridiem", o) : r < 12 ? t.imply("meridiem", We.AM) : t.imply("meridiem", We.PM), n[Zg] != null) {
      const l = parseInt(n[Zg]);
      if (l >= 60)
        return null;
      t.assign("second", l);
    }
    return t;
  }
}
class m3 extends Cb {
  patternBetween() {
    return /^\s*(bis(?:\s*(?:am|zum))?|-)\s*$/i;
  }
}
class g3 extends Tb {
  patternBetween() {
    return new RegExp("^\\s*(T|um|am|,|-)?\\s*$");
  }
}
class yl extends $t {
  innerPattern(t) {
    return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
  }
  innerExtract(t, n) {
    const r = Ut(t.refDate), a = n[2].toLowerCase(), o = t.createParsingComponents();
    return qr(o, r), yl.extractTimeComponents(o, a);
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
        t.get("hour") > 1 && (t = Eb(t, { day: 1 })), t.imply("hour", 0), t.imply("minute", 0), t.imply("second", 0), t.imply("meridiem", We.AM);
        break;
    }
    return t;
  }
}
const v3 = new RegExp("(jetzt|heute|morgen|übermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)", "i"), y3 = 1, x3 = 2;
class b3 extends $t {
  innerPattern(t) {
    return v3;
  }
  innerExtract(t, n) {
    let r = Ut(t.refDate);
    const a = (n[y3] || "").toLowerCase(), o = (n[x3] || "").toLowerCase();
    let l = t.createParsingComponents();
    switch (a) {
      case "jetzt":
        l = Db(t.reference);
        break;
      case "heute":
        l = kb(t.reference);
        break;
      case "morgen":
        Sg(l, r);
        break;
      case "übermorgen":
      case "uebermorgen":
        r = r.add(1, "day"), Sg(l, r);
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
    return o && (l = yl.extractTimeComponents(l, o)), l;
  }
}
const w3 = new RegExp(`(?:am\\s*?)?(?:den\\s*?)?([0-9]{1,2})\\.(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*(${rn(jb)})(?:(?:-|/|,?\\s*)(${n3}(?![^\\s]\\d)))?(?=\\W|$)`, "i"), Qg = 1, ev = 2, _3 = 3, tv = 4;
class E3 extends $t {
  innerPattern() {
    return w3;
  }
  innerExtract(t, n) {
    const r = t.createParsingResult(n.index, n[0]), a = jb[n[_3].toLowerCase()], o = parseInt(n[Qg]);
    if (o > 31)
      return n.index = n.index + n[Qg].length, null;
    if (r.start.assign("month", a), r.start.assign("day", o), n[tv]) {
      const l = r3(n[tv]);
      r.start.assign("year", l);
    } else {
      const l = oo(t.refDate, o, a);
      r.start.imply("year", l);
    }
    if (n[ev]) {
      const l = parseInt(n[ev]);
      r.end = r.start.clone(), r.end.assign("day", l);
    }
    return r;
  }
}
class C3 extends $t {
  constructor() {
    super();
  }
  innerPattern() {
    return new RegExp(`(?:\\s*((?:nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${Rb})?(?:\\s*(nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${rn(Bs)})`, "i");
  }
  innerExtract(t, n) {
    const r = n[2] ? $b(n[2]) : 1, a = Bs[n[4].toLowerCase()];
    let o = {};
    o[a] = r;
    let l = n[1] || n[3] || "";
    if (l = l.toLowerCase(), !!l)
      return (/vor/.test(l) || /letzte/.test(l) || /vergangen/.test(l)) && (o = lo(o)), yt.createRelativeFromReference(t.reference, o);
  }
}
class T3 extends $t {
  innerPattern() {
    return new RegExp(`(?:in|für|während)\\s*(${i3})(?=\\W|$)`, "i");
  }
  innerExtract(t, n) {
    const r = a3(n[1]);
    return yt.createRelativeFromReference(t.reference, r);
  }
}
const O3 = new Za(S3());
new Za(Wb(!0));
function Lb(e, t, n) {
  return O3.parseDate(e, t, n);
}
function S3(e = !0) {
  const t = Wb(!1, e);
  return t.parsers.unshift(new yl()), t.parsers.unshift(new b3()), t.parsers.unshift(new C3()), t;
}
function Wb(e = !0, t = !0) {
  return Sb({
    parsers: [
      new Ob(),
      new Mb(t),
      new t3(),
      new Hs(),
      new E3(),
      new d3(),
      new T3()
    ],
    refiners: [new m3(), new g3()]
  }, e);
}
const D3 = (e) => e instanceof Date ? e : Lb(e), k3 = (e) => {
  var r;
  if ((e == null ? void 0 : e.toString()) === "Invalid Date" || e === "") return "";
  const t = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 6e4, n = new Date(new Date(e).getTime() - t).toISOString().slice(0, -1);
  return ((r = n == null ? void 0 : n.split("T")) == null ? void 0 : r[0]) || "";
}, P3 = (e) => (e == null ? void 0 : e.toString()) === "Invalid Date" || e === "" ? "" : new Date(e).toLocaleDateString("de-DE", {
  // zero padded
  month: "2-digit",
  day: "2-digit",
  year: "numeric"
}), A3 = ({
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
  const g = qe(null), x = qe(null), b = qe(null), [S, _] = ht(!1), w = (ne) => {
    var V;
    d || (_(ne), ne || (V = x.current) == null || V.focus());
  }, [P, C] = Xt("", h.value, h.onChange), k = (ne) => {
    pn(g.current, ""), ne.preventDefault(), ne.stopPropagation();
  }, D = P && D3(P) || void 0, [O, Q] = ht(D || /* @__PURE__ */ new Date());
  ct(() => {
    D && Q(D);
  }, [P]);
  const ee = (ne) => {
    var V;
    g.current && (pn(g.current, ne ? k3(ne) : ""), _(!1)), (V = x.current) == null || V.focus();
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ v.jsxs($n, { open: S, onOpenChange: w, children: [
      /* @__PURE__ */ v.jsx($n.Trigger, { asChild: !0, children: /* @__PURE__ */ v.jsxs(
        ke,
        {
          variant: "button",
          disabled: d,
          className: Pe("flex gap-1 justify-between w-full group rounded", n),
          children: [
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
                    children: /* @__PURE__ */ v.jsx("span", { className: "min-h-5 block min-w-16", children: P ? P3(P) : a })
                  }
                )
              }
            ),
            /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
              P && !u ? /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: k, children: /* @__PURE__ */ v.jsx(_i, {}) }) : /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "pointer-events-none", children: /* @__PURE__ */ v.jsx(
                zv,
                {
                  className: Pe(
                    "text-neutral-400 transition-colors",
                    !d && "group-hover:text-neutral-700"
                  )
                }
              ) }),
              t
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ v.jsx(
        $n.Content,
        {
          className: "w-auto p-4 min-w-min flex flex-col gap-4",
          align: "start",
          ref: b,
          onEscapeKeyDown: (ne) => {
            ne.stopPropagation();
          },
          children: /* @__PURE__ */ v.jsx(
            db,
            {
              className: "p-0",
              mode: "single",
              month: O,
              onMonthChange: (ne) => Q(ne),
              selected: D,
              onSelect: ee,
              fixedWeeks: !0,
              showOutsideDays: !0,
              ...r
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(
      "input",
      {
        ref: nn(e, g),
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
  ] });
}, _B = (e) => /* @__PURE__ */ v.jsx(sr, { widget: A3, ...e }), I3 = /^-?\d*[.,]?\d*$/, M3 = /^-?\d*$/, Vb = ({
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
  const g = qe(null), x = qe(null), [b, S] = Xt("", h.value, h.onChange), _ = b == null ? void 0 : b.toString(), w = (D) => {
    if (D === "" || D === void 0 || D === null)
      return "";
    let O = D.replace(",", ".").replace(".", u);
    return O.slice(-1) === u && (O = O.slice(0, -1)), d !== void 0 && parseFloat(O) < parseFloat(d.toString()) && (O = d.toString()), p !== void 0 && parseFloat(O) > parseFloat(p.toString()) && (O = p.toString()), O = parseFloat(O).toFixed(l), O;
  };
  ct(() => {
    const D = w(_);
    g.current && D !== _ && pn(g.current, D);
  }, [h.value]);
  const P = () => {
    var D;
    pn(x.current, ""), (D = x.current) == null || D.focus();
  }, C = (D) => {
    var ee;
    const O = D.target.value;
    if ((l > 0 ? I3 : M3).test(O)) {
      const ne = O.replace(",", ".").replace(".", u);
      if ((((ee = O.split(u)[1]) == null ? void 0 : ee.length) || 0) > l || l === 0 && O.slice(-1) === u)
        return;
      g.current && pn(g.current, ne);
    } else {
      const ne = D.target.selectionStart || 0;
      setTimeout(() => {
        var V;
        (V = x.current) == null || V.setSelectionRange(ne - 1, ne - 1);
      }, 0);
    }
  }, k = (D) => {
    var Q;
    const O = w(_);
    g.current && O !== _ && pn(g.current, O), (Q = h.onBlur) == null || Q.call(h, D);
  };
  return /* @__PURE__ */ v.jsxs(ke, { className: e, readOnly: h.readOnly, disabled: h.disabled, ref: a, children: [
    /* @__PURE__ */ v.jsx(ke.Content, { children: /* @__PURE__ */ v.jsx(
      "input",
      {
        ref: x,
        className: Pe(
          "px-2 py-1.5 flex-1 min-w-0 bg-transparent placeholder:text-neutral-400",
          t
        ),
        ...h,
        onBlur: k,
        value: b == null ? void 0 : b.toString(),
        onChange: C
      }
    ) }),
    /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
      r,
      b && !n && /* @__PURE__ */ v.jsx(ke.ControlButton, { onClick: P, children: /* @__PURE__ */ v.jsx(_i, {}) })
    ] }),
    /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(
      "input",
      {
        ref: nn(o, g),
        value: b == null ? void 0 : b.toString(),
        onChange: S,
        tabIndex: -1,
        onFocus: () => {
          var D;
          return (D = x.current) == null ? void 0 : D.focus();
        }
      }
    ) })
  ] });
}, gi = (e) => /* @__PURE__ */ v.jsx(Vb, { ...e, decimalPlaces: 0 }), N3 = ({
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
  const p = $e.useRef(null), h = $e.useRef(null), g = $e.useRef(null), x = $e.useRef(null), [b, S] = Xt("", d.value, d.onChange), [_, w] = ht("00"), [P, C] = ht("00"), [k, D] = ht("00"), [O, Q] = ht(!1);
  ct(() => {
    if (b && !O) {
      const [H, z, U] = b.toString().split(":");
      w(H || "00"), C(z || "00"), D(U || "00");
    }
  }, [b, O]);
  const ee = (H, z) => {
    let U = "";
    const K = u ? "00" : H == "seconds" ? z : k;
    return H === "hours" && z && P && K ? U = `${z.padStart(2, "0")}:${P.padStart(2, "0")}:${K.padStart(2, "0")}` : H === "minutes" && _ && z && K ? U = `${_.padStart(2, "0")}:${z.padStart(2, "0")}:${K.padStart(2, "0")}` : H === "seconds" && _ && P && z && (U = `${_.padStart(2, "0")}:${P.padStart(2, "0")}:${K.padStart(2, "0")}`), U;
  }, ne = (H) => {
    Q(!0), H.target.select();
  }, V = (H, z, U) => (K) => {
    var L, ue;
    const j = K.target.value;
    if (!/^\d*$/.test(j) || H === "hours" && j.length > 2 || H === "minutes" && j.length > 2 || H === "seconds" && j.length > 2) return;
    U(j);
    const I = H === "hours" && j.length === 2 && parseInt(j) <= 23 && parseInt(j) >= 0, X = H === "minutes" && j.length === 2 && parseInt(j) <= 59 && parseInt(j) >= 0, M = H === "seconds" && j.length === 2 && parseInt(j) <= 59 && parseInt(j) >= 0;
    if (H === "hours" && I ? (L = g.current) == null || L.focus() : H === "minutes" && X && !u && ((ue = x.current) == null || ue.focus()), I || X || M) {
      const he = ee(H, j);
      pn(p.current, he || "");
    }
  }, Y = (H, z, U) => (K) => {
    var j, I, X, M, L, ue;
    if (K.key === "Backspace") {
      if (z !== "")
        return;
      H === "minutes" ? (K.preventDefault(), (j = h.current) == null || j.focus()) : H === "seconds" && (K.preventDefault(), (I = g.current) == null || I.focus());
    } else K.key === "ArrowLeft" ? H === "minutes" ? (K.preventDefault(), (X = h.current) == null || X.focus()) : H === "seconds" && (K.preventDefault(), (M = g.current) == null || M.focus()) : K.key === "ArrowRight" && (H === "hours" ? (K.preventDefault(), (L = g.current) == null || L.focus()) : H === "minutes" && !u && (K.preventDefault(), (ue = x.current) == null || ue.focus()));
  }, te = (H, z, U) => (K) => {
    var X, M;
    const j = K.target.value, I = K.relatedTarget === h.current || K.relatedTarget === g.current || K.relatedTarget === x.current;
    if (j.length > 0 && j.length < 2) {
      U(j.padStart(2, "0"));
      const L = ee(H, j.padStart(2, "0"));
      pn(p.current, L || "");
    }
    I || (((X = p.current) == null ? void 0 : X.value) === "" && (w("00"), C("00"), D("00")), Q(!1), (M = p.current) == null || M.blur());
  }, R = (H, z, U) => ({
    value: z,
    onChange: V(H, z, U),
    onKeyDown: Y(H, z),
    onBlur: te(H, z, U),
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
        ...R("hours", _, w)
      }
    ),
    /* @__PURE__ */ v.jsx("span", { children: ":" }),
    /* @__PURE__ */ v.jsx(
      gi,
      {
        ref: g,
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
        value: b,
        onChange: S,
        ref: nn(p, e),
        required: o,
        name: l,
        readOnly: a,
        tabIndex: -1,
        onFocus: () => {
          var H;
          return (H = h.current) == null ? void 0 : H.focus();
        }
      }
    ) })
  ] });
}, j3 = ({
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
  const g = J.useRef(null), [x, b] = Ki(!1, o, l), [S, _] = ht(null), w = (k) => {
    if (d)
      return b(!0), Promise.resolve(d == null ? void 0 : d(k)).finally(() => {
        b(!1);
      }).then((D) => D).catch((D) => {
        console.error(D);
      });
  };
  zr(() => {
    _(null), setTimeout(() => {
      if (!g.current) return;
      const k = g.current.getBoundingClientRect();
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
      ref: nn(g, e),
      onClick: w,
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
        width: S != null ? `${S.width}px` : void 0,
        height: S != null ? `${S.height}px` : void 0,
        ...p
      },
      children: x ? /* @__PURE__ */ v.jsx("span", { className: "animate-spin-slow block", children: /* @__PURE__ */ v.jsx(mD, {}) }) : h.children
    }
  );
}, R3 = (e) => e instanceof Date ? e : Lb(e), cc = (e) => (e == null ? void 0 : e.toString()) === "Invalid Date" || e === "" ? "" : new Date(e).toISOString(), $3 = (e) => (e == null ? void 0 : e.toString()) === "Invalid Date" || e === "" ? "" : new Date(e).toLocaleDateString("de-DE", {
  // zero padded
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}), F3 = ({
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
  const g = qe(null), x = qe(null), b = qe(null), S = qe(null), [_, w] = ht(!1), P = (R) => {
    d || w(R);
  }, [C, k] = Xt("", h.value, h.onChange), D = (R) => {
    pn(g.current, ""), R.preventDefault(), R.stopPropagation();
  }, O = C && R3(C) || void 0, [Q, ee] = ht(O || /* @__PURE__ */ new Date());
  ct(() => {
    O && ee(O);
  }, [C]);
  const ne = (R) => {
    var H;
    R && O && (R.setHours(O.getHours()), R.setMinutes(O.getMinutes()), R.setSeconds(O.getSeconds())), g.current && pn(g.current, R ? cc(R) : ""), R && ((H = S.current) == null || H.focus());
  }, V = (R) => {
    const H = C ? new Date(C) : /* @__PURE__ */ new Date(), [z, U, K] = R.target.value.split(":");
    H.setHours(parseInt(z)), H.setMinutes(parseInt(U)), H.setSeconds(parseInt(K)), g.current && pn(g.current, H ? cc(H) : "");
  }, Y = () => {
    const R = C ? new Date(C) : /* @__PURE__ */ new Date(), H = /* @__PURE__ */ new Date();
    R.setHours(H.getHours()), R.setMinutes(H.getMinutes()), R.setSeconds(H.getSeconds()), g.current && pn(g.current, R ? cc(R) : "");
  }, te = C ? new Date(C).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "";
  return /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ v.jsxs($n, { open: _, onOpenChange: P, modal: _, children: [
      /* @__PURE__ */ v.jsx($n.Trigger, { asChild: !0, children: /* @__PURE__ */ v.jsxs(
        ke,
        {
          variant: "button",
          disabled: d,
          className: Pe("flex gap-1 justify-between w-full group rounded", n),
          children: [
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
                    children: /* @__PURE__ */ v.jsx("span", { className: "min-h-5 block min-w-16", children: C ? $3(C) : a })
                  }
                )
              }
            ),
            /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
              C && !u ? /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: D, children: /* @__PURE__ */ v.jsx(_i, {}) }) : /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "pointer-events-none", children: /* @__PURE__ */ v.jsx(
                zv,
                {
                  className: Pe(
                    "text-neutral-400 transition-colors",
                    !d && "group-hover:text-neutral-700"
                  )
                }
              ) }),
              t
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ v.jsxs(
        $n.Content,
        {
          className: "w-auto min-w-min flex flex-col gap-4",
          onOpenAutoFocus: (R) => {
            R.preventDefault();
          },
          align: "start",
          ref: b,
          children: [
            /* @__PURE__ */ v.jsx(
              db,
              {
                className: "p-0",
                mode: "single",
                month: Q,
                onMonthChange: (R) => ee(R),
                selected: O,
                onSelect: ne,
                fixedWeeks: !0,
                showOutsideDays: !0,
                ...r
              }
            ),
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-stretch justify-center gap-1 bg-neutral-50 p-3 rounded", children: [
              /* @__PURE__ */ v.jsx(j3, { variant: "ghost", onClick: Y, className: "px-2 !text-theme-500", children: /* @__PURE__ */ v.jsx(lD, {}) }),
              /* @__PURE__ */ v.jsx(
                N3,
                {
                  value: te,
                  onChange: V,
                  name: "time",
                  ref: S,
                  className: "w-48 px-1.5"
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(
      "input",
      {
        ref: nn(e, g),
        ...h,
        value: C,
        onChange: k,
        tabIndex: -1,
        disabled: d,
        required: p
      }
    ) })
  ] });
}, EB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: F3, ...e }), L3 = /* @__PURE__ */ new Map([
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
  const r = W3(e), { webkitRelativePath: a } = e, o = typeof t == "string" ? t : typeof a == "string" && a.length > 0 ? a : `./${e.name}`;
  return typeof r.path != "string" && nv(r, "path", o), nv(r, "relativePath", o), r;
}
function W3(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), a = L3.get(r);
    a && Object.defineProperty(e, "type", {
      value: a,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function nv(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const V3 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function z3(e) {
  return Ei(this, void 0, void 0, function* () {
    return Us(e) && B3(e.dataTransfer) ? q3(e.dataTransfer, e.type) : H3(e) ? U3(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? Y3(e) : [];
  });
}
function B3(e) {
  return Us(e);
}
function H3(e) {
  return Us(e) && Us(e.target);
}
function Us(e) {
  return typeof e == "object" && e !== null;
}
function U3(e) {
  return Yc(e.target.files).map((t) => ia(t));
}
function Y3(e) {
  return Ei(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => ia(n));
  });
}
function q3(e, t) {
  return Ei(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Yc(e.items).filter((a) => a.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(K3));
      return rv(zb(r));
    }
    return rv(Yc(e.files).map((n) => ia(n)));
  });
}
function rv(e) {
  return e.filter((t) => V3.indexOf(t.name) === -1);
}
function Yc(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function K3(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return iv(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Bb(t) : iv(e, t);
}
function zb(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? zb(n) : [n]
  ], []);
}
function iv(e, t) {
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
function G3(e) {
  return Ei(this, void 0, void 0, function* () {
    return e.isDirectory ? Bb(e) : X3(e);
  });
}
function Bb(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const a = [];
    function o() {
      t.readEntries((l) => Ei(this, void 0, void 0, function* () {
        if (l.length) {
          const u = Promise.all(l.map(G3));
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
function X3(e) {
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
var dc = function(e, t) {
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
function av(e) {
  return Q3(e) || J3(e) || Ub(e) || Z3();
}
function Z3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Q3(e) {
  if (Array.isArray(e)) return qc(e);
}
function ov(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function sv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ov(Object(n), !0).forEach(function(r) {
      Hb(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ov(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Hb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ja(e, t) {
  return nz(e) || tz(e, t) || Ub(e, t) || ez();
}
function ez() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ub(e, t) {
  if (e) {
    if (typeof e == "string") return qc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qc(e, t);
  }
}
function qc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function tz(e, t) {
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
function nz(e) {
  if (Array.isArray(e)) return e;
}
var rz = typeof dc == "function" ? dc : dc.default, iz = "file-invalid-type", az = "file-too-large", oz = "file-too-small", sz = "too-many-files", lz = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: iz,
    message: "File type must be ".concat(r)
  };
}, lv = function(t) {
  return {
    code: az,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, uv = function(t) {
  return {
    code: oz,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, uz = {
  code: sz,
  message: "Too many files"
};
function Yb(e, t) {
  var n = e.type === "application/x-moz-file" || rz(e, t);
  return [n, n ? null : lz(t)];
}
function qb(e, t, n) {
  if (fi(e.size))
    if (fi(t) && fi(n)) {
      if (e.size > n) return [!1, lv(n)];
      if (e.size < t) return [!1, uv(t)];
    } else {
      if (fi(t) && e.size < t) return [!1, uv(t)];
      if (fi(n) && e.size > n) return [!1, lv(n)];
    }
  return [!0, null];
}
function fi(e) {
  return e != null;
}
function cz(e) {
  var t = e.files, n = e.accept, r = e.minSize, a = e.maxSize, o = e.multiple, l = e.maxFiles, u = e.validator;
  return !o && t.length > 1 || o && l >= 1 && t.length > l ? !1 : t.every(function(d) {
    var p = Yb(d, n), h = Ja(p, 1), g = h[0], x = qb(d, r, a), b = Ja(x, 1), S = b[0], _ = u ? u(d) : null;
    return g && S && !_;
  });
}
function Ys(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function ms(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function cv(e) {
  e.preventDefault();
}
function dz(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function fz(e) {
  return e.indexOf("Edge/") !== -1;
}
function pz() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return dz(e) || fz(e);
}
function Jn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
      o[l - 1] = arguments[l];
    return t.some(function(u) {
      return !Ys(r) && u && u.apply(void 0, [r].concat(o)), Ys(r);
    });
  };
}
function hz() {
  return "showOpenFilePicker" in window;
}
function mz(e) {
  if (fi(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Ja(n, 2), a = r[0], o = r[1], l = !0;
      return Kb(a) || (console.warn('Skipped "'.concat(a, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), l = !1), (!Array.isArray(o) || !o.every(Gb)) && (console.warn('Skipped "'.concat(a, '" because an invalid file extension was provided.')), l = !1), l;
    }).reduce(function(n, r) {
      var a = Ja(r, 2), o = a[0], l = a[1];
      return sv(sv({}, n), {}, Hb({}, o, l));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function gz(e) {
  if (fi(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Ja(n, 2), a = r[0], o = r[1];
      return [].concat(av(t), [a], av(o));
    }, []).filter(function(t) {
      return Kb(t) || Gb(t);
    }).join(",");
}
function vz(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function yz(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Kb(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Gb(e) {
  return /^.*\.[\w]+$/.test(e);
}
var xz = ["children"], bz = ["open"], wz = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], _z = ["refKey", "onChange", "onClick"];
function Ez(e) {
  return Oz(e) || Tz(e) || Xb(e) || Cz();
}
function Cz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Oz(e) {
  if (Array.isArray(e)) return Kc(e);
}
function fc(e, t) {
  return kz(e) || Dz(e, t) || Xb(e, t) || Sz();
}
function Sz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xb(e, t) {
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
function Dz(e, t) {
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
function kz(e) {
  if (Array.isArray(e)) return e;
}
function dv(e, t) {
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
    t % 2 ? dv(Object(n), !0).forEach(function(r) {
      Gc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Gc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function qs(e, t) {
  if (e == null) return {};
  var n = Pz(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Pz(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var pf = /* @__PURE__ */ Js(function(e, t) {
  var n = e.children, r = qs(e, xz), a = Jb(r), o = a.open, l = qs(a, bz);
  return qO(t, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ $e.createElement(KO, null, n(Dt(Dt({}, l), {}, {
    open: o
  })));
});
pf.displayName = "Dropzone";
var Zb = {
  disabled: !1,
  getFilesFromEvent: z3,
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
pf.defaultProps = Zb;
pf.propTypes = {
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
var Xc = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Jb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Dt(Dt({}, Zb), e), n = t.accept, r = t.disabled, a = t.getFilesFromEvent, o = t.maxSize, l = t.minSize, u = t.multiple, d = t.maxFiles, p = t.onDragEnter, h = t.onDragLeave, g = t.onDragOver, x = t.onDrop, b = t.onDropAccepted, S = t.onDropRejected, _ = t.onFileDialogCancel, w = t.onFileDialogOpen, P = t.useFsAccessApi, C = t.autoFocus, k = t.preventDropOnDocument, D = t.noClick, O = t.noKeyboard, Q = t.noDrag, ee = t.noDragEventsBubbling, ne = t.onError, V = t.validator, Y = Rn(function() {
    return gz(n);
  }, [n]), te = Rn(function() {
    return mz(n);
  }, [n]), R = Rn(function() {
    return typeof w == "function" ? w : fv;
  }, [w]), H = Rn(function() {
    return typeof _ == "function" ? _ : fv;
  }, [_]), z = qe(null), U = qe(null), K = Cv(Az, Xc), j = fc(K, 2), I = j[0], X = j[1], M = I.isFocused, L = I.isFileDialogActive, ue = qe(typeof window < "u" && window.isSecureContext && P && hz()), he = function() {
    !ue.current && L && setTimeout(function() {
      if (U.current) {
        var ae = U.current.files;
        ae.length || (X({
          type: "closeDialog"
        }), H());
      }
    }, 300);
  };
  ct(function() {
    return window.addEventListener("focus", he, !1), function() {
      window.removeEventListener("focus", he, !1);
    };
  }, [U, L, H, ue]);
  var ce = qe([]), ye = function(ae) {
    z.current && z.current.contains(ae.target) || (ae.preventDefault(), ce.current = []);
  };
  ct(function() {
    return k && (document.addEventListener("dragover", cv, !1), document.addEventListener("drop", ye, !1)), function() {
      k && (document.removeEventListener("dragover", cv), document.removeEventListener("drop", ye));
    };
  }, [z, k]), ct(function() {
    return !r && C && z.current && z.current.focus(), function() {
    };
  }, [z, C, r]);
  var ge = Qe(function(B) {
    ne ? ne(B) : console.error(B);
  }, [ne]), be = Qe(function(B) {
    B.preventDefault(), B.persist(), re(B), ce.current = [].concat(Ez(ce.current), [B.target]), ms(B) && Promise.resolve(a(B)).then(function(ae) {
      if (!(Ys(B) && !ee)) {
        var xe = ae.length, oe = xe > 0 && cz({
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
        }), p && p(B);
      }
    }).catch(function(ae) {
      return ge(ae);
    });
  }, [a, p, ge, ee, Y, l, o, u, d, V]), we = Qe(function(B) {
    B.preventDefault(), B.persist(), re(B);
    var ae = ms(B);
    if (ae && B.dataTransfer)
      try {
        B.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return ae && g && g(B), !1;
  }, [g, ee]), Ce = Qe(function(B) {
    B.preventDefault(), B.persist(), re(B);
    var ae = ce.current.filter(function(oe) {
      return z.current && z.current.contains(oe);
    }), xe = ae.indexOf(B.target);
    xe !== -1 && ae.splice(xe, 1), ce.current = ae, !(ae.length > 0) && (X({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), ms(B) && h && h(B));
  }, [z, h, ee]), _e = Qe(function(B, ae) {
    var xe = [], oe = [];
    B.forEach(function(Ne) {
      var wt = Yb(Ne, Y), Fe = fc(wt, 2), mt = Fe[0], At = Fe[1], pt = qb(Ne, l, o), Rt = fc(pt, 2), it = Rt[0], Jr = Rt[1], Qr = V ? V(Ne) : null;
      if (mt && it && !Qr)
        xe.push(Ne);
      else {
        var ga = [At, Jr];
        Qr && (ga = ga.concat(Qr)), oe.push({
          file: Ne,
          errors: ga.filter(function(bl) {
            return bl;
          })
        });
      }
    }), (!u && xe.length > 1 || u && d >= 1 && xe.length > d) && (xe.forEach(function(Ne) {
      oe.push({
        file: Ne,
        errors: [uz]
      });
    }), xe.splice(0)), X({
      acceptedFiles: xe,
      fileRejections: oe,
      isDragReject: oe.length > 0,
      type: "setFiles"
    }), x && x(xe, oe, ae), oe.length > 0 && S && S(oe, ae), xe.length > 0 && b && b(xe, ae);
  }, [X, u, Y, l, o, d, x, b, S, V]), Se = Qe(function(B) {
    B.preventDefault(), B.persist(), re(B), ce.current = [], ms(B) && Promise.resolve(a(B)).then(function(ae) {
      Ys(B) && !ee || _e(ae, B);
    }).catch(function(ae) {
      return ge(ae);
    }), X({
      type: "reset"
    });
  }, [a, _e, ge, ee]), fe = Qe(function() {
    if (ue.current) {
      X({
        type: "openDialog"
      }), R();
      var B = {
        multiple: u,
        types: te
      };
      window.showOpenFilePicker(B).then(function(ae) {
        return a(ae);
      }).then(function(ae) {
        _e(ae, null), X({
          type: "closeDialog"
        });
      }).catch(function(ae) {
        vz(ae) ? (H(ae), X({
          type: "closeDialog"
        })) : yz(ae) ? (ue.current = !1, U.current ? (U.current.value = null, U.current.click()) : ge(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : ge(ae);
      });
      return;
    }
    U.current && (X({
      type: "openDialog"
    }), R(), U.current.value = null, U.current.click());
  }, [X, R, H, P, _e, ge, te, u]), Re = Qe(function(B) {
    !z.current || !z.current.isEqualNode(B.target) || (B.key === " " || B.key === "Enter" || B.keyCode === 32 || B.keyCode === 13) && (B.preventDefault(), fe());
  }, [z, fe]), ve = Qe(function() {
    X({
      type: "focus"
    });
  }, []), et = Qe(function() {
    X({
      type: "blur"
    });
  }, []), rt = Qe(function() {
    D || (pz() ? setTimeout(fe, 0) : fe());
  }, [D, fe]), Ke = function(ae) {
    return r ? null : ae;
  }, N = function(ae) {
    return O ? null : Ke(ae);
  }, Z = function(ae) {
    return Q ? null : Ke(ae);
  }, re = function(ae) {
    ee && ae.stopPropagation();
  }, m = Rn(function() {
    return function() {
      var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ae = B.refKey, xe = ae === void 0 ? "ref" : ae, oe = B.role, Ne = B.onKeyDown, wt = B.onFocus, Fe = B.onBlur, mt = B.onClick, At = B.onDragEnter, pt = B.onDragOver, Rt = B.onDragLeave, it = B.onDrop, Jr = qs(B, wz);
      return Dt(Dt(Gc({
        onKeyDown: N(Jn(Ne, Re)),
        onFocus: N(Jn(wt, ve)),
        onBlur: N(Jn(Fe, et)),
        onClick: Ke(Jn(mt, rt)),
        onDragEnter: Z(Jn(At, be)),
        onDragOver: Z(Jn(pt, we)),
        onDragLeave: Z(Jn(Rt, Ce)),
        onDrop: Z(Jn(it, Se)),
        role: typeof oe == "string" && oe !== "" ? oe : "presentation"
      }, xe, z), !r && !O ? {
        tabIndex: 0
      } : {}), Jr);
    };
  }, [z, Re, ve, et, rt, be, we, Ce, Se, O, Q, r]), F = Qe(function(B) {
    B.stopPropagation();
  }, []), $ = Rn(function() {
    return function() {
      var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ae = B.refKey, xe = ae === void 0 ? "ref" : ae, oe = B.onChange, Ne = B.onClick, wt = qs(B, _z), Fe = Gc({
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
    getRootProps: m,
    getInputProps: $,
    rootRef: z,
    inputRef: U,
    open: Ke(fe)
  });
}
function Az(e, t) {
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
      return Dt(Dt({}, Xc), {}, {
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
      return Dt({}, Xc);
    default:
      return e;
  }
}
function fv() {
}
const Iz = (e) => "Blob" in window && e instanceof Blob, Mz = (e) => ["jpg", "jpeg", "png", "gif"].includes(e), Nz = ({ ext: e }) => {
  switch (e) {
    case "pdf":
      return /* @__PURE__ */ v.jsx(ju, {});
    case "doc":
    case "docx":
      return /* @__PURE__ */ v.jsx(ju, {});
    case "xls":
    case "xlsx":
      return /* @__PURE__ */ v.jsx(fD, {});
    case "ppt":
    case "pptx":
      return /* @__PURE__ */ v.jsx(pD, {});
    case "zip":
      return /* @__PURE__ */ v.jsx(cD, {});
    case "txt":
      return /* @__PURE__ */ v.jsx(ju, {});
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return /* @__PURE__ */ v.jsx(dD, {});
    default:
      return /* @__PURE__ */ v.jsx(hD, {});
  }
}, jz = ({ className: e, onRemove: t, file: n, disabled: r, previewImage: a }) => {
  const o = n.name.split(".").pop() || "", l = n.name.split("/").pop() || "", u = n.url || (Iz(n) ? URL.createObjectURL(n) : void 0), [d, p] = J.useState(null);
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
          /* @__PURE__ */ v.jsx("span", { className: Pe("text-neutral-400 flex-none block", a && "mr-1"), children: a && Mz(o) ? /* @__PURE__ */ v.jsx("a", { href: r ? void 0 : u, target: "_blank", children: /* @__PURE__ */ v.jsx(
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
          ) }) : /* @__PURE__ */ v.jsx(Nz, { ext: o }) }),
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
          u && /* @__PURE__ */ v.jsx(ke.ControlButton, { asChild: !0, children: /* @__PURE__ */ v.jsx("a", { href: r ? void 0 : u, target: "_blank", children: /* @__PURE__ */ v.jsx(uD, {}) }) }),
          /* @__PURE__ */ v.jsx(ke.ControlButton, { onClick: t, children: /* @__PURE__ */ v.jsx(_i, {}) })
        ] })
      ]
    }
  );
}, Rz = ({
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
    d(u.multiple ? [...g, ...k] : k), (D = C.current) == null || D.focus();
  }, h = (k) => {
    var D;
    d(g.filter((O, Q) => Q !== k)), (D = C.current) == null || D.focus();
  }, g = u.value && Array.isArray(u.value) ? u.value : u.value ? [u.value] : [], { getRootProps: x, getInputProps: b, isDragActive: S, isDragAccept: _, isDragReject: w, isFileDialogActive: P, rootRef: C } = Jb({
    onDropAccepted: p,
    disabled: u.disabled,
    maxFiles: u.maxFiles,
    maxSize: u.maxSize,
    minSize: u.minSize,
    accept: u.accept,
    multiple: u.multiple
  });
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col gap-2", children: [
    (u.multiple || g.length === 0) && /* @__PURE__ */ v.jsx(
      ke,
      {
        disabled: u.disabled,
        ref: r,
        "data-state": P || S ? "active" : _ ? "accept" : w ? "reject" : void 0,
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
              /* @__PURE__ */ v.jsx("input", { ...b() }),
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
    g.map((k, D) => /* @__PURE__ */ v.jsx(
      jz,
      {
        disabled: u.disabled,
        onRemove: () => h(D),
        file: k,
        previewImage: o
      },
      D
    ))
  ] });
}, CB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Rz, ...e }), $z = (e) => {
  const [t, n] = Xt("", e.value, e.onChange);
  return /* @__PURE__ */ v.jsx("input", { ...e, type: "hidden", value: t, onChange: n });
}, TB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: $z, ...e }), OB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: gi, ...e }), SB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Vb, ...e }), Fz = ({ children: e, onRemove: t, disabled: n, ...r }) => /* @__PURE__ */ v.jsxs(
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
), Lz = ({ asChild: e, disabled: t, ...n }) => {
  const { selectedOptions: r, selected: a, onSelectedChange: o, getSelectedItemProps: l } = Yt(Xr);
  if (!r.length) return null;
  const u = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(u, { ...n, children: r == null ? void 0 : r.map((d, p) => /* @__PURE__ */ v.jsx(
    Fz,
    {
      onRemove: (h) => {
        h.stopPropagation(), o == null || o(a == null ? void 0 : a.filter((g) => g !== d.value));
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
}, pc = ({ value: e, label: t, disabled: n = !1, checked: r = !1 }) => /* @__PURE__ */ v.jsxs(
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
          children: /* @__PURE__ */ v.jsx(Ze.OptionIndicator, { children: /* @__PURE__ */ v.jsx(tl, {}) })
        }
      ),
      /* @__PURE__ */ v.jsx(Ze.OptionText, { children: t || e })
    ]
  }
), Wz = ({
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
  onFocus: g,
  ...x
}) => {
  const b = qe(null), S = qe(null), [_, w] = Ki(r, a, o), [P, C] = J.useState(""), [k, D] = Xt([], p, h), { onSelectedChange: O, selectNativeProps: Q } = uf({
    focusRef: S,
    onFocus: g,
    value: k,
    onChange: D
  });
  return /* @__PURE__ */ v.jsx($n, { open: _, children: /* @__PURE__ */ v.jsxs(
    Ze,
    {
      ref: b,
      selected: k,
      onSelectedChange: O,
      onOpenChange: w,
      allowAddOption: l,
      onSearchChange: C,
      required: x.required,
      disabled: x.disabled,
      multiple: !0,
      highlightOnMouseOver: !0,
      children: [
        /* @__PURE__ */ v.jsx($n.Anchor, { children: /* @__PURE__ */ v.jsx(
          Ze.Trigger,
          {
            onClick: (ee) => {
              var ne;
              ee.preventDefault(), (ne = S.current) == null || ne.focus();
            },
            disabled: x.disabled,
            asChild: !0,
            children: /* @__PURE__ */ v.jsxs(ke, { ref: e, children: [
              /* @__PURE__ */ v.jsxs(ke.Content, { className: Pe("flex gap-1 p-1 flex-wrap"), children: [
                /* @__PURE__ */ v.jsx(Lz, { className: "flex gap-1 flex-wrap", disabled: x.disabled }),
                /* @__PURE__ */ v.jsxs("div", { className: "flex-auto min-w-0 relative", children: [
                  /* @__PURE__ */ v.jsx("div", { className: "p-1 py-0.5 invisible min-w-20 text-sm whitespace-nowrap", children: P || "&nbsp;" }),
                  /* @__PURE__ */ v.jsx(
                    Ze.Search,
                    {
                      ref: S,
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
            onOpenAutoFocus: (ee) => {
              ee.preventDefault();
            },
            align: "start",
            forceMount: !0,
            disableInteractions: !_,
            children: /* @__PURE__ */ v.jsxs(Ze.Content, { className: "flex flex-col p-2", children: [
              l && P && /* @__PURE__ */ v.jsx(pc, { value: P, label: P, disabled: !P }),
              n.map((ee) => {
                if (Array.isArray(ee)) {
                  const [ne, V] = ee;
                  return /* @__PURE__ */ v.jsxs(J.Fragment, { children: [
                    /* @__PURE__ */ v.jsx(Ze.Separator, { className: "border-t border-neutral-200 my-2" }),
                    /* @__PURE__ */ v.jsxs(Ze.Group, { className: "flex flex-col", children: [
                      /* @__PURE__ */ v.jsx(Ze.GroupLabel, { className: "font-medium text-sm px-2 py-1 pl-8", children: ne }),
                      V.map((Y) => /* @__PURE__ */ v.jsx(
                        pc,
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
                  pc,
                  {
                    ...ee,
                    checked: k == null ? void 0 : k.includes(ee.value)
                  },
                  ee.value
                );
              })
            ] })
          }
        ),
        /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(Ze.Native, { ...x, ...Q }) })
      ]
    }
  ) });
}, DB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Wz, ...e }), kB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: cb, ...e }), PB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Hv, ...e }), Vz = ({ inputClassName: e, className: t, controls: n, widgetRef: r, ref: a, ...o }) => {
  const [l, u] = Xt("", o.value, o.onChange);
  return /* @__PURE__ */ v.jsxs(ke, { className: t, readOnly: o.readOnly, disabled: o.disabled, ref: r, children: [
    /* @__PURE__ */ v.jsx(ke.Content, { children: /* @__PURE__ */ v.jsx(
      "textarea",
      {
        ref: a,
        className: Pe(
          "px-2 py-1.5 flex-1 min-w-0 min-h-[4rem] bg-transparent",
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
}, AB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Vz, ...e });
var co = (e) => e.type === "checkbox", hi = (e) => e instanceof Date, tn = (e) => e == null;
const Qb = (e) => typeof e == "object";
var jt = (e) => !tn(e) && !Array.isArray(e) && Qb(e) && !hi(e), ew = (e) => jt(e) && e.target ? co(e.target) ? e.target.checked : e.target.value : e, zz = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, tw = (e, t) => e.has(zz(t)), Bz = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return jt(t) && t.hasOwnProperty("isPrototypeOf");
}, hf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function un(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(hf && (e instanceof Blob || r)) && (n || jt(e)))
    if (t = n ? [] : {}, !n && !Bz(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = un(e[a]));
  else
    return e;
  return t;
}
var xl = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Nt = (e) => e === void 0, Ee = (e, t, n) => {
  if (!t || !jt(e))
    return n;
  const r = xl(t.split(/[,[\].]+?/)).reduce((a, o) => tn(a) ? a : a[o], e);
  return Nt(r) || r === e ? Nt(e[t]) ? n : e[t] : r;
}, jn = (e) => typeof e == "boolean", mf = (e) => /^\w*$/.test(e), nw = (e) => xl(e.replace(/["|']|\]/g, "").split(/\.|\[/)), vt = (e, t, n) => {
  let r = -1;
  const a = mf(t) ? [t] : nw(t), o = a.length, l = o - 1;
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
const Ks = {
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
}, rw = $e.createContext(null), Ti = () => $e.useContext(rw), Hz = (e) => {
  const { children: t, ...n } = e;
  return $e.createElement(rw.Provider, { value: n }, t);
};
var iw = (e, t, n, r = !0) => {
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
}, cn = (e) => jt(e) && !Object.keys(e).length, aw = (e, t, n, r) => {
  n(e);
  const { name: a, ...o } = e;
  return cn(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((l) => t[l] === (!r || Bn.all));
}, Ua = (e) => Array.isArray(e) ? e : [e], ow = (e, t, n) => !e || !t || e === t || Ua(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function gf(e) {
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
function Uz(e) {
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
  return h.current = a, gf({
    disabled: r,
    next: (g) => d.current && ow(h.current, g.name, o) && aw(g, p.current, n._updateFormState) && u({
      ...n._formState,
      ...g
    }),
    subject: n._subjects.state
  }), $e.useEffect(() => (d.current = !0, p.current.isValid && n._updateValid(!0), () => {
    d.current = !1;
  }), [n]), $e.useMemo(() => iw(l, n, p.current, !1), [l, n]);
}
var rr = (e) => typeof e == "string", sw = (e, t, n, r, a) => rr(e) ? (r && t.watch.add(e), Ee(n, e, a)) : Array.isArray(e) ? e.map((o) => (r && t.watch.add(o), Ee(n, o))) : (r && (t.watchAll = !0), n);
function Yz(e) {
  const t = Ti(), { control: n = t.control, name: r, defaultValue: a, disabled: o, exact: l } = e, u = $e.useRef(r);
  u.current = r, gf({
    disabled: o,
    subject: n._subjects.values,
    next: (h) => {
      ow(u.current, h.name, l) && p(un(sw(u.current, n._names, h.values || n._formValues, !1, a)));
    }
  });
  const [d, p] = $e.useState(n._getWatch(r, a));
  return $e.useEffect(() => n._removeUnmounted()), d;
}
function qz(e) {
  const t = Ti(), { name: n, disabled: r, control: a = t.control, shouldUnregister: o } = e, l = tw(a._names.array, n), u = Yz({
    control: a,
    name: n,
    defaultValue: Ee(a._formValues, n, Ee(a._defaultValues, n, e.defaultValue)),
    exact: !0
  }), d = Uz({
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
  }), [d, n]), g = $e.useMemo(() => ({
    name: n,
    value: u,
    ...jn(r) || d.disabled ? { disabled: d.disabled || r } : {},
    onChange: (x) => p.current.onChange({
      target: {
        value: ew(x),
        name: n
      },
      type: Ks.CHANGE
    }),
    onBlur: () => p.current.onBlur({
      target: {
        value: Ee(a._formValues, n),
        name: n
      },
      type: Ks.BLUR
    }),
    ref: (x) => {
      const b = Ee(a._fields, n);
      b && x && (b._f.ref = {
        focus: () => x.focus(),
        select: () => x.select(),
        setCustomValidity: (S) => x.setCustomValidity(S),
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
    const x = a._options.shouldUnregister || o, b = (S, _) => {
      const w = Ee(a._fields, S);
      w && w._f && (w._f.mount = _);
    };
    if (b(n, !0), x) {
      const S = un(Ee(a._options.defaultValues, n));
      vt(a._defaultValues, n, S), Nt(Ee(a._formValues, n)) && vt(a._formValues, n, S);
    }
    return !l && a.register(n), () => {
      (l ? x && !a._state.action : x) ? a.unregister(n) : b(n, !1);
    };
  }, [n, a, l, o]), $e.useEffect(() => {
    a._updateDisabledField({
      disabled: r,
      fields: a._fields,
      name: n
    });
  }, [r, n, a]), $e.useMemo(() => ({
    field: g,
    formState: d,
    fieldState: h
  }), [g, d, h]);
}
const Kz = (e) => e.render(qz(e));
var Gz = (e, t, n, r, a) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: a || !0
  }
} : {}, pv = (e) => ({
  isOnSubmit: !e || e === Bn.onSubmit,
  isOnBlur: e === Bn.onBlur,
  isOnChange: e === Bn.onChange,
  isOnAll: e === Bn.all,
  isOnTouch: e === Bn.onTouched
}), hv = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Ya = (e, t, n, r) => {
  for (const a of n || Object.keys(e)) {
    const o = Ee(e, a);
    if (o) {
      const { _f: l, ...u } = o;
      if (l) {
        if (l.refs && l.refs[0] && t(l.refs[0], a) && !r)
          return !0;
        if (l.ref && t(l.ref, l.name) && !r)
          return !0;
        if (Ya(u, t))
          break;
      } else if (jt(u) && Ya(u, t))
        break;
    }
  }
};
var Xz = (e, t, n) => {
  const r = Ua(Ee(e, n));
  return vt(r, "root", t[n]), vt(e, n, r), e;
}, vf = (e) => e.type === "file", tr = (e) => typeof e == "function", Gs = (e) => {
  if (!hf)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Ts = (e) => rr(e), yf = (e) => e.type === "radio", Xs = (e) => e instanceof RegExp;
const mv = {
  value: !1,
  isValid: !1
}, gv = { value: !0, isValid: !0 };
var lw = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Nt(e[0].attributes.value) ? Nt(e[0].value) || e[0].value === "" ? gv : { value: e[0].value, isValid: !0 } : gv
    ) : mv;
  }
  return mv;
};
const vv = {
  isValid: !1,
  value: null
};
var uw = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, vv) : vv;
function yv(e, t, n = "validate") {
  if (Ts(e) || Array.isArray(e) && e.every(Ts) || jn(e) && !e)
    return {
      type: n,
      message: Ts(e) ? e : "",
      ref: t
    };
}
var Ui = (e) => jt(e) && !Xs(e) ? e : {
  value: e,
  message: ""
}, xv = async (e, t, n, r, a, o) => {
  const { ref: l, refs: u, required: d, maxLength: p, minLength: h, min: g, max: x, pattern: b, validate: S, name: _, valueAsNumber: w, mount: P } = e._f, C = Ee(n, _);
  if (!P || t.has(_))
    return {};
  const k = u ? u[0] : l, D = (R) => {
    a && k.reportValidity && (k.setCustomValidity(jn(R) ? "" : R || ""), k.reportValidity());
  }, O = {}, Q = yf(l), ee = co(l), ne = Q || ee, V = (w || vf(l)) && Nt(l.value) && Nt(C) || Gs(l) && l.value === "" || C === "" || Array.isArray(C) && !C.length, Y = Gz.bind(null, _, r, O), te = (R, H, z, U = br.maxLength, K = br.minLength) => {
    const j = R ? H : z;
    O[_] = {
      type: R ? U : K,
      message: j,
      ref: l,
      ...Y(R ? U : K, j)
    };
  };
  if (o ? !Array.isArray(C) || !C.length : d && (!ne && (V || tn(C)) || jn(C) && !C || ee && !lw(u).isValid || Q && !uw(u).isValid)) {
    const { value: R, message: H } = Ts(d) ? { value: !!d, message: d } : Ui(d);
    if (R && (O[_] = {
      type: br.required,
      message: H,
      ref: k,
      ...Y(br.required, H)
    }, !r))
      return D(H), O;
  }
  if (!V && (!tn(g) || !tn(x))) {
    let R, H;
    const z = Ui(x), U = Ui(g);
    if (!tn(C) && !isNaN(C)) {
      const K = l.valueAsNumber || C && +C;
      tn(z.value) || (R = K > z.value), tn(U.value) || (H = K < U.value);
    } else {
      const K = l.valueAsDate || new Date(C), j = (M) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + M), I = l.type == "time", X = l.type == "week";
      rr(z.value) && C && (R = I ? j(C) > j(z.value) : X ? C > z.value : K > new Date(z.value)), rr(U.value) && C && (H = I ? j(C) < j(U.value) : X ? C < U.value : K < new Date(U.value));
    }
    if ((R || H) && (te(!!R, z.message, U.message, br.max, br.min), !r))
      return D(O[_].message), O;
  }
  if ((p || h) && !V && (rr(C) || o && Array.isArray(C))) {
    const R = Ui(p), H = Ui(h), z = !tn(R.value) && C.length > +R.value, U = !tn(H.value) && C.length < +H.value;
    if ((z || U) && (te(z, R.message, H.message), !r))
      return D(O[_].message), O;
  }
  if (b && !V && rr(C)) {
    const { value: R, message: H } = Ui(b);
    if (Xs(R) && !C.match(R) && (O[_] = {
      type: br.pattern,
      message: H,
      ref: l,
      ...Y(br.pattern, H)
    }, !r))
      return D(H), O;
  }
  if (S) {
    if (tr(S)) {
      const R = await S(C, n), H = yv(R, k);
      if (H && (O[_] = {
        ...H,
        ...Y(br.validate, H.message)
      }, !r))
        return D(H.message), O;
    } else if (jt(S)) {
      let R = {};
      for (const H in S) {
        if (!cn(R) && !r)
          break;
        const z = yv(await S[H](C, n), k, H);
        z && (R = {
          ...z,
          ...Y(H, z.message)
        }, D(z.message), r && (O[_] = R));
      }
      if (!cn(R) && (O[_] = {
        ref: k,
        ...R
      }, !r))
        return O;
    }
  }
  return D(!0), O;
};
function Zz(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Nt(e) ? r++ : e[t[r++]];
  return e;
}
function Jz(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Nt(e[t]))
      return !1;
  return !0;
}
function Wt(e, t) {
  const n = Array.isArray(t) ? t : mf(t) ? [t] : nw(t), r = n.length === 1 ? e : Zz(e, n), a = n.length - 1, o = n[a];
  return r && delete r[o], a !== 0 && (jt(r) && cn(r) || Array.isArray(r) && Jz(r)) && Wt(e, n.slice(0, -1)), e;
}
var hc = () => {
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
}, Zc = (e) => tn(e) || !Qb(e);
function Wr(e, t) {
  if (Zc(e) || Zc(t))
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
var cw = (e) => e.type === "select-multiple", Qz = (e) => yf(e) || co(e), mc = (e) => Gs(e) && e.isConnected, dw = (e) => {
  for (const t in e)
    if (tr(e[t]))
      return !0;
  return !1;
};
function Zs(e, t = {}) {
  const n = Array.isArray(e);
  if (jt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || jt(e[r]) && !dw(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Zs(e[r], t[r])) : tn(e[r]) || (t[r] = !0);
  return t;
}
function fw(e, t, n) {
  const r = Array.isArray(e);
  if (jt(e) || r)
    for (const a in e)
      Array.isArray(e[a]) || jt(e[a]) && !dw(e[a]) ? Nt(t) || Zc(n[a]) ? n[a] = Array.isArray(e[a]) ? Zs(e[a], []) : { ...Zs(e[a]) } : fw(e[a], tn(t) ? {} : t[a], n[a]) : n[a] = !Wr(e[a], t[a]);
  return n;
}
var Wa = (e, t) => fw(e, t, Zs(t)), pw = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Nt(e) ? e : t ? e === "" ? NaN : e && +e : n && rr(e) ? new Date(e) : r ? r(e) : e;
function gc(e) {
  const t = e.ref;
  return vf(t) ? t.files : yf(t) ? uw(e.refs).value : cw(t) ? [...t.selectedOptions].map(({ value: n }) => n) : co(t) ? lw(e.refs).value : pw(Nt(t.value) ? e.ref.value : t.value, e);
}
var eB = (e, t, n, r) => {
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
}, Va = (e) => Nt(e) ? e : Xs(e) ? e.source : jt(e) ? Xs(e.value) ? e.value.source : e.value : e;
const bv = "AsyncFunction";
var tB = (e) => !!e && !!e.validate && !!(tr(e.validate) && e.validate.constructor.name === bv || jt(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === bv)), nB = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function wv(e, t, n) {
  const r = Ee(e, n);
  if (r || mf(n))
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
var rB = (e, t, n, r, a) => a.isOnAll ? !1 : !n && a.isOnTouch ? !(t || e) : (n ? r.isOnBlur : a.isOnBlur) ? !e : (n ? r.isOnChange : a.isOnChange) ? e : !0, iB = (e, t) => !xl(Ee(e, t)).length && Wt(e, t);
const aB = {
  mode: Bn.onSubmit,
  reValidateMode: Bn.onChange,
  shouldFocusError: !0
};
function oB(e = {}) {
  let t = {
    ...aB,
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
  }, g = {
    values: hc(),
    array: hc(),
    state: hc()
  }, x = pv(t.mode), b = pv(t.reValidateMode), S = t.criteriaMode === Bn.all, _ = (N) => (Z) => {
    clearTimeout(p), p = setTimeout(N, Z);
  }, w = async (N) => {
    if (!t.disabled && (h.isValid || N)) {
      const Z = t.resolver ? cn((await ne()).errors) : await Y(r, !0);
      Z !== n.isValid && g.state.next({
        isValid: Z
      });
    }
  }, P = (N, Z) => {
    !t.disabled && (h.isValidating || h.validatingFields) && ((N || Array.from(u.mount)).forEach((re) => {
      re && (Z ? vt(n.validatingFields, re, Z) : Wt(n.validatingFields, re));
    }), g.state.next({
      validatingFields: n.validatingFields,
      isValidating: !cn(n.validatingFields)
    }));
  }, C = (N, Z = [], re, m, F = !0, $ = !0) => {
    if (m && re && !t.disabled) {
      if (l.action = !0, $ && Array.isArray(Ee(r, N))) {
        const B = re(Ee(r, N), m.argA, m.argB);
        F && vt(r, N, B);
      }
      if ($ && Array.isArray(Ee(n.errors, N))) {
        const B = re(Ee(n.errors, N), m.argA, m.argB);
        F && vt(n.errors, N, B), iB(n.errors, N);
      }
      if (h.touchedFields && $ && Array.isArray(Ee(n.touchedFields, N))) {
        const B = re(Ee(n.touchedFields, N), m.argA, m.argB);
        F && vt(n.touchedFields, N, B);
      }
      h.dirtyFields && (n.dirtyFields = Wa(a, o)), g.state.next({
        name: N,
        isDirty: R(N, Z),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      vt(o, N, Z);
  }, k = (N, Z) => {
    vt(n.errors, N, Z), g.state.next({
      errors: n.errors
    });
  }, D = (N) => {
    n.errors = N, g.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, O = (N, Z, re, m) => {
    const F = Ee(r, N);
    if (F) {
      const $ = Ee(o, N, Nt(re) ? Ee(a, N) : re);
      Nt($) || m && m.defaultChecked || Z ? vt(o, N, Z ? $ : gc(F._f)) : U(N, $), l.mount && w();
    }
  }, Q = (N, Z, re, m, F) => {
    let $ = !1, B = !1;
    const ae = {
      name: N
    };
    if (!t.disabled) {
      const xe = !!(Ee(r, N) && Ee(r, N)._f && Ee(r, N)._f.disabled);
      if (!re || m) {
        h.isDirty && (B = n.isDirty, n.isDirty = ae.isDirty = R(), $ = B !== ae.isDirty);
        const oe = xe || Wr(Ee(a, N), Z);
        B = !!(!xe && Ee(n.dirtyFields, N)), oe || xe ? Wt(n.dirtyFields, N) : vt(n.dirtyFields, N, !0), ae.dirtyFields = n.dirtyFields, $ = $ || h.dirtyFields && B !== !oe;
      }
      if (re) {
        const oe = Ee(n.touchedFields, N);
        oe || (vt(n.touchedFields, N, re), ae.touchedFields = n.touchedFields, $ = $ || h.touchedFields && oe !== re);
      }
      $ && F && g.state.next(ae);
    }
    return $ ? ae : {};
  }, ee = (N, Z, re, m) => {
    const F = Ee(n.errors, N), $ = h.isValid && jn(Z) && n.isValid !== Z;
    if (t.delayError && re ? (d = _(() => k(N, re)), d(t.delayError)) : (clearTimeout(p), d = null, re ? vt(n.errors, N, re) : Wt(n.errors, N)), (re ? !Wr(F, re) : F) || !cn(m) || $) {
      const B = {
        ...m,
        ...$ && jn(Z) ? { isValid: Z } : {},
        errors: n.errors,
        name: N
      };
      n = {
        ...n,
        ...B
      }, g.state.next(B);
    }
  }, ne = async (N) => {
    P(N, !0);
    const Z = await t.resolver(o, t.context, eB(N || u.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return P(N), Z;
  }, V = async (N) => {
    const { errors: Z } = await ne(N);
    if (N)
      for (const re of N) {
        const m = Ee(Z, re);
        m ? vt(n.errors, re, m) : Wt(n.errors, re);
      }
    else
      n.errors = Z;
    return Z;
  }, Y = async (N, Z, re = {
    valid: !0
  }) => {
    for (const m in N) {
      const F = N[m];
      if (F) {
        const { _f: $, ...B } = F;
        if ($) {
          const ae = u.array.has($.name), xe = F._f && tB(F._f);
          xe && h.validatingFields && P([m], !0);
          const oe = await xv(F, u.disabled, o, S, t.shouldUseNativeValidation && !Z, ae);
          if (xe && h.validatingFields && P([m]), oe[$.name] && (re.valid = !1, Z))
            break;
          !Z && (Ee(oe, $.name) ? ae ? Xz(n.errors, oe, $.name) : vt(n.errors, $.name, oe[$.name]) : Wt(n.errors, $.name));
        }
        !cn(B) && await Y(B, Z, re);
      }
    }
    return re.valid;
  }, te = () => {
    for (const N of u.unMount) {
      const Z = Ee(r, N);
      Z && (Z._f.refs ? Z._f.refs.every((re) => !mc(re)) : !mc(Z._f.ref)) && ge(N);
    }
    u.unMount = /* @__PURE__ */ new Set();
  }, R = (N, Z) => !t.disabled && (N && Z && vt(o, N, Z), !Wr(L(), a)), H = (N, Z, re) => sw(N, u, {
    ...l.mount ? o : Nt(Z) ? a : rr(N) ? { [N]: Z } : Z
  }, re, Z), z = (N) => xl(Ee(l.mount ? o : a, N, t.shouldUnregister ? Ee(a, N, []) : [])), U = (N, Z, re = {}) => {
    const m = Ee(r, N);
    let F = Z;
    if (m) {
      const $ = m._f;
      $ && (!$.disabled && vt(o, N, pw(Z, $)), F = Gs($.ref) && tn(Z) ? "" : Z, cw($.ref) ? [...$.ref.options].forEach((B) => B.selected = F.includes(B.value)) : $.refs ? co($.ref) ? $.refs.length > 1 ? $.refs.forEach((B) => (!B.defaultChecked || !B.disabled) && (B.checked = Array.isArray(F) ? !!F.find((ae) => ae === B.value) : F === B.value)) : $.refs[0] && ($.refs[0].checked = !!F) : $.refs.forEach((B) => B.checked = B.value === F) : vf($.ref) ? $.ref.value = "" : ($.ref.value = F, $.ref.type || g.values.next({
        name: N,
        values: { ...o }
      })));
    }
    (re.shouldDirty || re.shouldTouch) && Q(N, F, re.shouldTouch, re.shouldDirty, !0), re.shouldValidate && M(N);
  }, K = (N, Z, re) => {
    for (const m in Z) {
      const F = Z[m], $ = `${N}.${m}`, B = Ee(r, $);
      (u.array.has(N) || jt(F) || B && !B._f) && !hi(F) ? K($, F, re) : U($, F, re);
    }
  }, j = (N, Z, re = {}) => {
    const m = Ee(r, N), F = u.array.has(N), $ = un(Z);
    vt(o, N, $), F ? (g.array.next({
      name: N,
      values: { ...o }
    }), (h.isDirty || h.dirtyFields) && re.shouldDirty && g.state.next({
      name: N,
      dirtyFields: Wa(a, o),
      isDirty: R(N, $)
    })) : m && !m._f && !tn($) ? K(N, $, re) : U(N, $, re), hv(N, u) && g.state.next({ ...n }), g.values.next({
      name: l.mount ? N : void 0,
      values: { ...o }
    });
  }, I = async (N) => {
    l.mount = !0;
    const Z = N.target;
    let re = Z.name, m = !0;
    const F = Ee(r, re), $ = () => Z.type ? gc(F._f) : ew(N), B = (ae) => {
      m = Number.isNaN(ae) || hi(ae) && isNaN(ae.getTime()) || Wr(ae, Ee(o, re, ae));
    };
    if (F) {
      let ae, xe;
      const oe = $(), Ne = N.type === Ks.BLUR || N.type === Ks.FOCUS_OUT, wt = !nB(F._f) && !t.resolver && !Ee(n.errors, re) && !F._f.deps || rB(Ne, Ee(n.touchedFields, re), n.isSubmitted, b, x), Fe = hv(re, u, Ne);
      vt(o, re, oe), Ne ? (F._f.onBlur && F._f.onBlur(N), d && d(0)) : F._f.onChange && F._f.onChange(N);
      const mt = Q(re, oe, Ne, !1), At = !cn(mt) || Fe;
      if (!Ne && g.values.next({
        name: re,
        type: N.type,
        values: { ...o }
      }), wt)
        return h.isValid && (t.mode === "onBlur" && Ne ? w() : Ne || w()), At && g.state.next({ name: re, ...Fe ? {} : mt });
      if (!Ne && Fe && g.state.next({ ...n }), t.resolver) {
        const { errors: pt } = await ne([re]);
        if (B(oe), m) {
          const Rt = wv(n.errors, r, re), it = wv(pt, r, Rt.name || re);
          ae = it.error, re = it.name, xe = cn(pt);
        }
      } else
        P([re], !0), ae = (await xv(F, u.disabled, o, S, t.shouldUseNativeValidation))[re], P([re]), B(oe), m && (ae ? xe = !1 : h.isValid && (xe = await Y(r, !0)));
      m && (F._f.deps && M(F._f.deps), ee(re, xe, ae, mt));
    }
  }, X = (N, Z) => {
    if (Ee(n.errors, Z) && N.focus)
      return N.focus(), 1;
  }, M = async (N, Z = {}) => {
    let re, m;
    const F = Ua(N);
    if (t.resolver) {
      const $ = await V(Nt(N) ? N : F);
      re = cn($), m = N ? !F.some((B) => Ee($, B)) : re;
    } else N ? (m = (await Promise.all(F.map(async ($) => {
      const B = Ee(r, $);
      return await Y(B && B._f ? { [$]: B } : B);
    }))).every(Boolean), !(!m && !n.isValid) && w()) : m = re = await Y(r);
    return g.state.next({
      ...!rr(N) || h.isValid && re !== n.isValid ? {} : { name: N },
      ...t.resolver || !N ? { isValid: re } : {},
      errors: n.errors
    }), Z.shouldFocus && !m && Ya(r, X, N ? F : u.mount), m;
  }, L = (N) => {
    const Z = {
      ...l.mount ? o : a
    };
    return Nt(N) ? Z : rr(N) ? Ee(Z, N) : N.map((re) => Ee(Z, re));
  }, ue = (N, Z) => ({
    invalid: !!Ee((Z || n).errors, N),
    isDirty: !!Ee((Z || n).dirtyFields, N),
    error: Ee((Z || n).errors, N),
    isValidating: !!Ee(n.validatingFields, N),
    isTouched: !!Ee((Z || n).touchedFields, N)
  }), he = (N) => {
    N && Ua(N).forEach((Z) => Wt(n.errors, Z)), g.state.next({
      errors: N ? n.errors : {}
    });
  }, ce = (N, Z, re) => {
    const m = (Ee(r, N, { _f: {} })._f || {}).ref, F = Ee(n.errors, N) || {}, { ref: $, message: B, type: ae, ...xe } = F;
    vt(n.errors, N, {
      ...xe,
      ...Z,
      ref: m
    }), g.state.next({
      name: N,
      errors: n.errors,
      isValid: !1
    }), re && re.shouldFocus && m && m.focus && m.focus();
  }, ye = (N, Z) => tr(N) ? g.values.subscribe({
    next: (re) => N(H(void 0, Z), re)
  }) : H(N, Z, !0), ge = (N, Z = {}) => {
    for (const re of N ? Ua(N) : u.mount)
      u.mount.delete(re), u.array.delete(re), Z.keepValue || (Wt(r, re), Wt(o, re)), !Z.keepError && Wt(n.errors, re), !Z.keepDirty && Wt(n.dirtyFields, re), !Z.keepTouched && Wt(n.touchedFields, re), !Z.keepIsValidating && Wt(n.validatingFields, re), !t.shouldUnregister && !Z.keepDefaultValue && Wt(a, re);
    g.values.next({
      values: { ...o }
    }), g.state.next({
      ...n,
      ...Z.keepDirty ? { isDirty: R() } : {}
    }), !Z.keepIsValid && w();
  }, be = ({ disabled: N, name: Z, field: re, fields: m }) => {
    (jn(N) && l.mount || N || u.disabled.has(Z)) && (N ? u.disabled.add(Z) : u.disabled.delete(Z), Q(Z, gc(re ? re._f : Ee(m, Z)._f), !1, !1, !0));
  }, we = (N, Z = {}) => {
    let re = Ee(r, N);
    const m = jn(Z.disabled) || jn(t.disabled);
    return vt(r, N, {
      ...re || {},
      _f: {
        ...re && re._f ? re._f : { ref: { name: N } },
        name: N,
        mount: !0,
        ...Z
      }
    }), u.mount.add(N), re ? be({
      field: re,
      disabled: jn(Z.disabled) ? Z.disabled : t.disabled,
      name: N
    }) : O(N, !0, Z.value), {
      ...m ? { disabled: Z.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!Z.required,
        min: Va(Z.min),
        max: Va(Z.max),
        minLength: Va(Z.minLength),
        maxLength: Va(Z.maxLength),
        pattern: Va(Z.pattern)
      } : {},
      name: N,
      onChange: I,
      onBlur: I,
      ref: (F) => {
        if (F) {
          we(N, Z), re = Ee(r, N);
          const $ = Nt(F.value) && F.querySelectorAll && F.querySelectorAll("input,select,textarea")[0] || F, B = Qz($), ae = re._f.refs || [];
          if (B ? ae.find((xe) => xe === $) : $ === re._f.ref)
            return;
          vt(r, N, {
            _f: {
              ...re._f,
              ...B ? {
                refs: [
                  ...ae.filter(mc),
                  $,
                  ...Array.isArray(Ee(a, N)) ? [{}] : []
                ],
                ref: { type: $.type, name: N }
              } : { ref: $ }
            }
          }), O(N, !1, void 0, $);
        } else
          re = Ee(r, N, {}), re._f && (re._f.mount = !1), (t.shouldUnregister || Z.shouldUnregister) && !(tw(u.array, N) && l.action) && u.unMount.add(N);
      }
    };
  }, Ce = () => t.shouldFocusError && Ya(r, X, u.mount), _e = (N) => {
    jn(N) && (g.state.next({ disabled: N }), Ya(r, (Z, re) => {
      const m = Ee(r, re);
      m && (Z.disabled = m._f.disabled || N, Array.isArray(m._f.refs) && m._f.refs.forEach((F) => {
        F.disabled = m._f.disabled || N;
      }));
    }, 0, !1));
  }, Se = (N, Z) => async (re) => {
    let m;
    re && (re.preventDefault && re.preventDefault(), re.persist && re.persist());
    let F = un(o);
    if (u.disabled.size)
      for (const $ of u.disabled)
        vt(F, $, void 0);
    if (g.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: $, values: B } = await ne();
      n.errors = $, F = B;
    } else
      await Y(r);
    if (Wt(n.errors, "root"), cn(n.errors)) {
      g.state.next({
        errors: {}
      });
      try {
        await N(F, re);
      } catch ($) {
        m = $;
      }
    } else
      Z && await Z({ ...n.errors }, re), Ce(), setTimeout(Ce);
    if (g.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: cn(n.errors) && !m,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), m)
      throw m;
  }, fe = (N, Z = {}) => {
    Ee(r, N) && (Nt(Z.defaultValue) ? j(N, un(Ee(a, N))) : (j(N, Z.defaultValue), vt(a, N, un(Z.defaultValue))), Z.keepTouched || Wt(n.touchedFields, N), Z.keepDirty || (Wt(n.dirtyFields, N), n.isDirty = Z.defaultValue ? R(N, un(Ee(a, N))) : R()), Z.keepError || (Wt(n.errors, N), h.isValid && w()), g.state.next({ ...n }));
  }, Re = (N, Z = {}) => {
    const re = N ? un(N) : a, m = un(re), F = cn(N), $ = F ? a : m;
    if (Z.keepDefaultValues || (a = re), !Z.keepValues) {
      if (Z.keepDirtyValues) {
        const B = /* @__PURE__ */ new Set([
          ...u.mount,
          ...Object.keys(Wa(a, o))
        ]);
        for (const ae of Array.from(B))
          Ee(n.dirtyFields, ae) ? vt($, ae, Ee(o, ae)) : j(ae, Ee($, ae));
      } else {
        if (hf && Nt(N))
          for (const B of u.mount) {
            const ae = Ee(r, B);
            if (ae && ae._f) {
              const xe = Array.isArray(ae._f.refs) ? ae._f.refs[0] : ae._f.ref;
              if (Gs(xe)) {
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
      o = t.shouldUnregister ? Z.keepDefaultValues ? un(a) : {} : un($), g.array.next({
        values: { ...$ }
      }), g.values.next({
        values: { ...$ }
      });
    }
    u = {
      mount: Z.keepDirtyValues ? u.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, l.mount = !h.isValid || !!Z.keepIsValid || !!Z.keepDirtyValues, l.watch = !!t.shouldUnregister, g.state.next({
      submitCount: Z.keepSubmitCount ? n.submitCount : 0,
      isDirty: F ? !1 : Z.keepDirty ? n.isDirty : !!(Z.keepDefaultValues && !Wr(N, a)),
      isSubmitted: Z.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: F ? {} : Z.keepDirtyValues ? Z.keepDefaultValues && o ? Wa(a, o) : n.dirtyFields : Z.keepDefaultValues && N ? Wa(a, N) : Z.keepDirty ? n.dirtyFields : {},
      touchedFields: Z.keepTouched ? n.touchedFields : {},
      errors: Z.keepErrors ? n.errors : {},
      isSubmitSuccessful: Z.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ve = (N, Z) => Re(tr(N) ? N(o) : N, Z);
  return {
    control: {
      register: we,
      unregister: ge,
      getFieldState: ue,
      handleSubmit: Se,
      setError: ce,
      _executeSchema: ne,
      _getWatch: H,
      _getDirty: R,
      _updateValid: w,
      _removeUnmounted: te,
      _updateFieldArray: C,
      _updateDisabledField: be,
      _getFieldArray: z,
      _reset: Re,
      _resetDefaultValues: () => tr(t.defaultValues) && t.defaultValues().then((N) => {
        ve(N, t.resetOptions), g.state.next({
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
      _subjects: g,
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
    setFocus: (N, Z = {}) => {
      const re = Ee(r, N), m = re && re._f;
      if (m) {
        const F = m.refs ? m.refs[0] : m.ref;
        F.focus && (F.focus(), Z.shouldSelect && tr(F.select) && F.select());
      }
    },
    getFieldState: ue
  };
}
function sB(e = {}) {
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
    ...oB(e),
    formState: r
  });
  const o = t.current.control;
  return o._options = e, gf({
    subject: o._subjects.state,
    next: (l) => {
      aw(l, o._proxyFormState, o._updateFormState, !0) && a({ ...o._formState });
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
  }, [e.shouldUnregister, o]), t.current.formState = iw(r, o), t.current;
}
const lB = ({
  children: e,
  onSubmit: t,
  formMethods: n,
  onIsSubmittingChange: r,
  ...a
}) => {
  const o = n || sB(), l = async (u) => {
    r == null || r(!0);
    const d = await Promise.resolve(o.handleSubmit(t)(u));
    return r == null || r(!1), d;
  };
  return /* @__PURE__ */ v.jsx(Hz, { ...o, children: /* @__PURE__ */ v.jsx("form", { onSubmit: l, ...a, children: e }) });
}, uB = ({ children: e, ...t }) => {
  const { control: n } = Ti();
  return /* @__PURE__ */ v.jsx(
    Kz,
    {
      ...t,
      control: n,
      render: ({ field: { onChange: r, ...a }, fieldState: o, formState: l }) => {
        const u = (p) => {
          nd(p.target) ? r(Array.from(p.target.selectedOptions, (h) => h.value)) : p.target.type === "file" ? p.target.multiple ? r(Array.from(p.target.files)) : r(p.target.files[0] || null) : r(p);
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
}, cB = ({
  asChild: e,
  loading: t,
  ...n
}) => {
  const { formState: r } = Ti(), a = e ? Tt : "button", o = e ? {
    loading: t !== void 0 ? t : r.isSubmitting
  } : {};
  return /* @__PURE__ */ v.jsx(a, { ...o, ...n });
}, dB = ({
  asChild: e,
  name: t = "root",
  ...n
}) => {
  const {
    formState: { errors: r }
  } = Ti(), a = r == null ? void 0 : r[t], o = e ? Tt : "div";
  return a ? /* @__PURE__ */ v.jsx(o, { ...n, "data-error": a.message }) : null;
}, fB = ({
  name: e = "root",
  ...t
}) => {
  const {
    formState: { errors: n }
  } = Ti(), r = n == null ? void 0 : n[e];
  return r ? r.message : null;
}, IB = Object.assign(lB, {
  Field: uB,
  Button: cB,
  Error: dB,
  ErrorMessage: fB
}), _v = ({ value: e, label: t, disabled: n = !1, checked: r }) => /* @__PURE__ */ v.jsxs(Ze.Option, { value: e, className: "flex items-center gap-2 py-1 text-sm group", disabled: n, children: [
  /* @__PURE__ */ v.jsx(
    ke,
    {
      variant: "checkable",
      disabled: n,
      checked: r,
      className: "relative flex items-center justify-center w-5 h-5 rounded text-white",
      children: /* @__PURE__ */ v.jsx(ke.Content, { className: "items-center justify-center", children: /* @__PURE__ */ v.jsx(Ze.OptionIndicator, { children: /* @__PURE__ */ v.jsx(tl, {}) }) })
    }
  ),
  /* @__PURE__ */ v.jsx(Ze.OptionText, { className: "cursor-default", children: t || e })
] }), MB = ({
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
  const g = $e.useRef(null), [x, b] = ht(!1), [S, _] = Xt([], u, d), { onSelectedChange: w, selectNativeProps: P } = uf({
    focusRef: g,
    onFocus: p,
    value: S,
    onChange: _
  });
  return /* @__PURE__ */ v.jsxs(
    Ze,
    {
      selected: S,
      onSelectedChange: w,
      disabled: h.disabled,
      multiple: !0,
      open: x,
      onOpenChange: b,
      className: "relative",
      children: [
        /* @__PURE__ */ v.jsx(
          Ze.Trigger,
          {
            ref: g,
            className: "!outline-none absolute w-0 h-0",
            onFocus: () => b(!0),
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
                D.map((O) => /* @__PURE__ */ v.jsx(
                  _v,
                  {
                    ...O,
                    disabled: h.disabled,
                    checked: S == null ? void 0 : S.includes(O.value)
                  },
                  O.value
                ))
              ] })
            ] }, k);
          }
          return /* @__PURE__ */ v.jsx(
            _v,
            {
              ...C,
              disabled: h.disabled,
              checked: S == null ? void 0 : S.includes(C.value)
            },
            C.value
          );
        }) }),
        /* @__PURE__ */ v.jsx(ke.Native, { children: /* @__PURE__ */ v.jsx(Ze.Native, { ...h, ...P }) })
      ]
    }
  );
}, pB = (e) => String(new Date(e)) !== "Invalid Date", NB = ({ ref: e, className: t, disabled: n, readOnly: r, required: a, name: o, ...l }) => {
  const u = $e.useRef(null), d = $e.useRef(null), p = $e.useRef(null), h = $e.useRef(null), [g, x] = Xt("", l.value, l.onChange), [b, S] = ht(""), [_, w] = ht(""), [P, C] = ht(""), k = (V, Y) => {
    let te = "";
    return V === "day" && Y && _ && P ? te = `${P.padStart(4, "0")}-${_.padStart(2, "0")}-${Y.padStart(2, "0")}` : V === "month" && b && Y && P ? te = `${P.padStart(4, "0")}-${Y.padStart(2, "0")}-${b.padStart(2, "0")}` : V === "year" && b && _ && Y && (te = `${Y.padStart(4, "0")}-${_.padStart(2, "0")}-${b.padStart(2, "0")}`), te;
  }, D = (V, Y = "start") => {
    var te, R;
    (te = V.current) == null || te.focus(), (R = V.current) == null || R.setSelectionRange(
      // handle start, end and all
      Y === "start" || Y === "all" ? 0 : V.current.value.length,
      Y === "end" || Y === "all" ? V.current.value.length : 0
    );
  }, O = (V, Y, te) => (R) => {
    const H = R.target.value;
    if (!/^\d*$/.test(H) || V === "day" && H.length > 2 || V === "month" && H.length > 2 || V === "year" && H.length > 4) return;
    te(H);
    const z = V === "day" && H.length === 2 && parseInt(H) <= 31 && parseInt(H) >= 1, U = V === "month" && H.length === 2 && parseInt(H) <= 12 && parseInt(H) >= 1;
    V === "day" && z ? D(p, "all") : V === "month" && U && D(h, "all");
    const K = k(V, H);
    pn(u.current, pB(K) ? K : "");
  }, Q = (V, Y, te) => (R) => {
    const H = R.currentTarget.value.length, z = R.currentTarget.selectionStart === 0, U = R.currentTarget.selectionStart === H;
    if (R.key === "Backspace") {
      if (Y !== "")
        return;
      V === "month" ? (R.preventDefault(), D(d, "end")) : V === "year" && (R.preventDefault(), D(p, "end"));
    } else R.key === "ArrowLeft" && z ? V === "month" ? (R.preventDefault(), D(d, "end")) : V === "year" && (R.preventDefault(), D(p, "end")) : R.key === "ArrowRight" && U && (V === "day" ? (R.preventDefault(), D(p)) : V === "month" && (R.preventDefault(), D(h)));
  }, ee = (V, Y, te) => (R) => {
    var U;
    const H = R.target.value;
    !(R.relatedTarget === d.current || R.relatedTarget === p.current || R.relatedTarget === h.current) && ((U = u.current) == null ? void 0 : U.value) === "" && (S(""), w(""), C("")), (V === "day" || V === "month") && H.length > 0 && H.length < 2 ? te(H.padStart(2, "0")) : V === "year" && H.length > 0 && H.length < 4 && te(H.padStart(4, "0"));
  }, ne = (V, Y, te) => ({
    value: Y,
    onChange: O(V, Y, te),
    onKeyDown: Q(V, Y),
    onBlur: ee(V, Y, te),
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
        ...ne("day", b, S)
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
        ...ne("month", _, w)
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
        value: g,
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
}, hB = ({ disabled: e, className: t, ...n }) => {
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
}, vc = ({
  label: e,
  ...t
}) => /* @__PURE__ */ v.jsxs("label", { className: "flex items-center gap-2 py-1 text-sm", children: [
  /* @__PURE__ */ v.jsx(hB, { ...t }),
  /* @__PURE__ */ v.jsx("span", { children: e })
] }), jB = ({
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
      vc,
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
        const [h, g] = p;
        return /* @__PURE__ */ v.jsxs($e.Fragment, { children: [
          /* @__PURE__ */ v.jsx(Ze.Separator, { className: "border-t border-neutral-200 my-2" }),
          /* @__PURE__ */ v.jsxs(Ze.Group, { className: "flex flex-col", children: [
            /* @__PURE__ */ v.jsx(Ze.GroupLabel, { className: "font-medium text-sm px-2 py-1 !pl-7", children: h }),
            g.map((x) => /* @__PURE__ */ v.jsx(
              vc,
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
        vc,
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
}, RB = ({ className: e, disabled: t, defaultChecked: n = !1, ...r }) => {
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
}, $B = ({
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
  bB as BooleanField,
  db as Calendar,
  yD as Checkbox,
  MB as CheckboxGroup,
  _B as DateField,
  A3 as DateInput,
  EB as DateTimeField,
  F3 as DateTimeInput,
  SB as DecimalField,
  ts as Field,
  CB as FileField,
  Rz as FileInput,
  IB as Form,
  TB as HiddenField,
  $z as HiddenInput,
  OB as IntegerField,
  gi as IntegerInput,
  NB as MemorableDateInput,
  Wz as MultiSelect,
  DB as MultiSelectField,
  hB as Radio,
  jB as RadioGroup,
  kB as SelectField,
  cb as SingleSelect,
  PB as StringField,
  RB as Switch,
  Vz as TextArea,
  AB as TextField,
  Hv as TextInput,
  N3 as TimeInput,
  $B as ToggleButton,
  ke as Widget,
  yB as getNativeSelectValue,
  pn as setNativeInputValue,
  Bv as setNativeSelectValue,
  xB as setNativeTextareaValue,
  Ti as useFormContext,
  Xt as useWidgetState
};
