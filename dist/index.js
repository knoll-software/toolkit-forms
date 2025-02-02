import * as J from "react";
import $e, { useState as ht, useContext as Yt, forwardRef as Js, createElement as yc, useId as Cv, useEffect as ct, useLayoutEffect as zr, createContext as bi, useRef as qe, useCallback as Qe, useMemo as Rn, cloneElement as YO, useReducer as Tv, Component as qO, useImperativeHandle as KO, Fragment as GO } from "react";
import * as Ov from "react-dom";
import XO from "react-dom";
import { renderToString as Sv } from "react-dom/server";
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
function ZO() {
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
function JO() {
  return Gh || (Gh = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === I ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case Q:
          return "Fragment";
        case S:
          return "Portal";
        case ne:
          return "Profiler";
        case ee:
          return "StrictMode";
        case R:
          return "Suspense";
        case B:
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
        var $ = F.error, H = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return $.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
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
        ve = !1, X.H = H, o(), Error.prepareStackTrace = $;
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
        case B:
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
    function b(m, F, $, H, ae, xe) {
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
    function O(m, F, $, H, ae, xe) {
      if (typeof m == "string" || typeof m == "function" || m === Q || m === ne || m === ee || m === R || m === B || m === K || typeof m == "object" && m !== null && (m.$$typeof === U || m.$$typeof === z || m.$$typeof === Y || m.$$typeof === V || m.$$typeof === te || m.$$typeof === ue || m.getModuleId !== void 0)) {
        var oe = F.children;
        if (oe !== void 0)
          if (H)
            if (he(oe)) {
              for (H = 0; H < oe.length; H++)
                _(oe[H], m);
              Object.freeze && Object.freeze(oe);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else _(oe, m);
      } else
        oe = "", (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), m === null ? H = "null" : he(m) ? H = "array" : m !== void 0 && m.$$typeof === D ? (H = "<" + (e(m.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : H = typeof m, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          H,
          oe
        );
      if (M.call(F, "key")) {
        oe = e(m);
        var Ne = Object.keys(F).filter(function(Fe) {
          return Fe !== "key";
        });
        H = 0 < Ne.length ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}", Z[oe + H] || (Ne = 0 < Ne.length ? "{" + Ne.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), Z[oe + H] = !0);
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
            var H = m[$];
            w(H) && P(H, F);
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
        var H = X.getCurrentStack;
        X.getCurrentStack = function() {
          var ae = d(m.type);
          return H && (ae += H() || ""), ae;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          $
        ), X.getCurrentStack = H;
      }
    }
    function C(m) {
      var F = "", $ = p();
      return $ && ($ = e($.type)) && (F = `

Check the render method of \`` + $ + "`."), F || (m = e(m)) && (F = `

Check the top-level render call using <` + m + ">."), F;
    }
    var k = $e, D = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), j = Symbol.iterator, I = Symbol.for("react.client.reference"), X = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, L = Object.assign, ue = Symbol.for("react.client.reference"), he = Array.isArray, ce = 0, ye, ge, be, we, Ce, _e, Se;
    r.__reactDisabledLog = !0;
    var fe, Re, ve = !1, et = new (typeof WeakMap == "function" ? WeakMap : Map)(), rt = Symbol.for("react.client.reference"), Ke, N = {}, Z = {}, re = {};
    Ma.Fragment = Q, Ma.jsx = function(m, F, $, H, ae) {
      return O(m, F, $, !1, H, ae);
    }, Ma.jsxs = function(m, F, $, H, ae) {
      return O(m, F, $, !0, H, ae);
    };
  }()), Ma;
}
process.env.NODE_ENV === "production" ? xc.exports = ZO() : xc.exports = JO();
var v = xc.exports;
const Jc = "-", QO = (e) => {
  const t = tS(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const o = a.split(Jc);
      return o[0] === "" && o.length !== 1 && o.shift(), Dv(o, t) || eS(a);
    },
    getConflictingClassGroupIds: (a, o) => {
      const l = n[a] || [];
      return o && r[a] ? [...l, ...r[a]] : l;
    }
  };
}, Dv = (e, t) => {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), o = a ? Dv(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(Jc);
  return (n = t.validators.find(({
    validator: u
  }) => u(l))) == null ? void 0 : n.classGroupId;
}, Xh = /^\[(.+)\]$/, eS = (e) => {
  if (Xh.test(e)) {
    const t = Xh.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, tS = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return rS(Object.entries(e.classGroups), n).forEach(([a, o]) => {
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
      if (nS(a)) {
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
}, nS = (e) => e.isThemeGetter, rS = (e, t) => t ? e.map(([n, r]) => {
  const a = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([l, u]) => [t + l, u])) : o);
  return [n, a];
}) : e, iS = (e) => {
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
}, kv = "!", aS = (e) => {
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
    const x = d.length === 0 ? u : u.substring(h), b = x.startsWith(kv), O = b ? x.substring(1) : x, _ = g && g > h ? g - h : void 0;
    return {
      modifiers: d,
      hasImportantModifier: b,
      baseClassName: O,
      maybePostfixModifierPosition: _
    };
  };
  return n ? (u) => n({
    className: u,
    parseClassName: l
  }) : l;
}, oS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, sS = (e) => ({
  cache: iS(e.cacheSize),
  parseClassName: aS(e),
  ...QO(e)
}), lS = /\s+/, uS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  } = t, o = [], l = e.trim().split(lS);
  let u = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const p = l[d], {
      modifiers: h,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: b
    } = n(p);
    let O = !!b, _ = r(O ? x.substring(0, b) : x);
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
    const w = oS(h).join(":"), P = g ? w + kv : w, C = P + _;
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
function cS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Pv(t)) && (r && (r += " "), r += n);
  return r;
}
const Pv = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Pv(e[r])) && (n && (n += " "), n += t);
  return n;
};
function dS(e, ...t) {
  let n, r, a, o = l;
  function l(d) {
    const p = t.reduce((h, g) => g(h), e());
    return n = sS(p), r = n.cache.get, a = n.cache.set, o = u, u(d);
  }
  function u(d) {
    const p = r(d);
    if (p)
      return p;
    const h = uS(d, n);
    return a(d, h), h;
  }
  return function() {
    return o(cS.apply(null, arguments));
  };
}
const Et = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Av = /^\[(?:([a-z-]+):)?(.+)\]$/i, fS = /^\d+\/\d+$/, pS = /* @__PURE__ */ new Set(["px", "full", "screen"]), hS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, mS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, vS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, yr = (e) => qi(e) || pS.has(e) || fS.test(e), jr = (e) => aa(e, "length", OS), qi = (e) => !!e && !Number.isNaN(Number(e)), Mu = (e) => aa(e, "number", qi), Na = (e) => !!e && Number.isInteger(Number(e)), xS = (e) => e.endsWith("%") && qi(e.slice(0, -1)), Be = (e) => Av.test(e), Rr = (e) => hS.test(e), bS = /* @__PURE__ */ new Set(["length", "size", "percentage"]), wS = (e) => aa(e, bS, Iv), _S = (e) => aa(e, "position", Iv), ES = /* @__PURE__ */ new Set(["image", "url"]), CS = (e) => aa(e, ES, DS), TS = (e) => aa(e, "", SS), ja = () => !0, aa = (e, t, n) => {
  const r = Av.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, OS = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  mS.test(e) && !gS.test(e)
), Iv = () => !1, SS = (e) => vS.test(e), DS = (e) => yS.test(e), kS = () => {
  const e = Et("colors"), t = Et("spacing"), n = Et("blur"), r = Et("brightness"), a = Et("borderColor"), o = Et("borderRadius"), l = Et("borderSpacing"), u = Et("borderWidth"), d = Et("contrast"), p = Et("grayscale"), h = Et("hueRotate"), g = Et("invert"), x = Et("gap"), b = Et("gradientColorStops"), O = Et("gradientColorStopPositions"), _ = Et("inset"), w = Et("margin"), P = Et("opacity"), C = Et("padding"), k = Et("saturate"), D = Et("scale"), S = Et("sepia"), Q = Et("skew"), ee = Et("space"), ne = Et("translate"), V = () => ["auto", "contain", "none"], Y = () => ["auto", "hidden", "clip", "visible", "scroll"], te = () => ["auto", Be, t], R = () => [Be, t], B = () => ["", yr, jr], z = () => ["auto", qi, Be], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], j = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", Be], M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [qi, Be];
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
      borderWidth: B(),
      contrast: L(),
      grayscale: X(),
      hueRotate: L(),
      invert: X(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [xS, jr],
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
        bg: [...U(), _S]
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
        bg: ["auto", "cover", "contain", wS]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, CS]
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
        ring: B()
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
        shadow: ["", "inner", "none", Rr, TS]
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
}, PS = /* @__PURE__ */ dS(kS);
function Mv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Mv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function AS() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Mv(e)) && (r && (r += " "), r += t);
  return r;
}
const Pe = (...e) => PS(AS(...e)), nn = (...e) => (t) => {
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
}, IS = (...e) => (t) => {
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
function MS() {
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
function NS() {
  return Qh || (Qh = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === I ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case Q:
          return "Fragment";
        case S:
          return "Portal";
        case ne:
          return "Profiler";
        case ee:
          return "StrictMode";
        case R:
          return "Suspense";
        case B:
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
        var $ = F.error, H = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return $.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
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
        ve = !1, X.H = H, o(), Error.prepareStackTrace = $;
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
        case B:
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
    function b(m, F, $, H, ae, xe) {
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
    function O(m, F, $, H, ae, xe) {
      if (typeof m == "string" || typeof m == "function" || m === Q || m === ne || m === ee || m === R || m === B || m === K || typeof m == "object" && m !== null && (m.$$typeof === U || m.$$typeof === z || m.$$typeof === Y || m.$$typeof === V || m.$$typeof === te || m.$$typeof === ue || m.getModuleId !== void 0)) {
        var oe = F.children;
        if (oe !== void 0)
          if (H)
            if (he(oe)) {
              for (H = 0; H < oe.length; H++)
                _(oe[H], m);
              Object.freeze && Object.freeze(oe);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else _(oe, m);
      } else
        oe = "", (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), m === null ? H = "null" : he(m) ? H = "array" : m !== void 0 && m.$$typeof === D ? (H = "<" + (e(m.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : H = typeof m, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          H,
          oe
        );
      if (M.call(F, "key")) {
        oe = e(m);
        var Ne = Object.keys(F).filter(function(Fe) {
          return Fe !== "key";
        });
        H = 0 < Ne.length ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}", Z[oe + H] || (Ne = 0 < Ne.length ? "{" + Ne.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), Z[oe + H] = !0);
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
            var H = m[$];
            w(H) && P(H, F);
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
        var H = X.getCurrentStack;
        X.getCurrentStack = function() {
          var ae = d(m.type);
          return H && (ae += H() || ""), ae;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          $
        ), X.getCurrentStack = H;
      }
    }
    function C(m) {
      var F = "", $ = p();
      return $ && ($ = e($.type)) && (F = `

Check the render method of \`` + $ + "`."), F || (m = e(m)) && (F = `

Check the top-level render call using <` + m + ">."), F;
    }
    var k = $e, D = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), j = Symbol.iterator, I = Symbol.for("react.client.reference"), X = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, L = Object.assign, ue = Symbol.for("react.client.reference"), he = Array.isArray, ce = 0, ye, ge, be, we, Ce, _e, Se;
    r.__reactDisabledLog = !0;
    var fe, Re, ve = !1, et = new (typeof WeakMap == "function" ? WeakMap : Map)(), rt = Symbol.for("react.client.reference"), Ke, N = {}, Z = {}, re = {};
    es.Fragment = Q, es.jsx = function(m, F, $, H, ae) {
      return O(m, F, $, !1, H, ae);
    }, es.jsxs = function(m, F, $, H, ae) {
      return O(m, F, $, !0, H, ae);
    };
  }()), es;
}
process.env.NODE_ENV === "production" ? wc.exports = MS() : wc.exports = NS();
var jS = wc.exports, Os = { exports: {} };
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
    var n, r = "4.17.21", a = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", p = 500, h = "__lodash_placeholder__", g = 1, x = 2, b = 4, O = 1, _ = 2, w = 1, P = 2, C = 4, k = 8, D = 16, S = 32, Q = 64, ee = 128, ne = 256, V = 512, Y = 30, te = "...", R = 800, B = 16, z = 1, U = 2, K = 3, j = 1 / 0, I = 9007199254740991, X = 17976931348623157e292, M = NaN, L = 4294967295, ue = L - 1, he = L >>> 1, ce = [
      ["ary", ee],
      ["bind", w],
      ["bindKey", P],
      ["curry", k],
      ["curryRight", D],
      ["flip", V],
      ["partial", S],
      ["partialRight", Q],
      ["rearg", ne]
    ], ye = "[object Arguments]", ge = "[object Array]", be = "[object AsyncFunction]", we = "[object Boolean]", Ce = "[object Date]", _e = "[object DOMException]", Se = "[object Error]", fe = "[object Function]", Re = "[object GeneratorFunction]", ve = "[object Map]", et = "[object Number]", rt = "[object Null]", Ke = "[object Object]", N = "[object Promise]", Z = "[object Proxy]", re = "[object RegExp]", m = "[object Set]", F = "[object String]", $ = "[object Symbol]", H = "[object Undefined]", ae = "[object WeakMap]", xe = "[object WeakSet]", oe = "[object ArrayBuffer]", Ne = "[object DataView]", wt = "[object Float32Array]", Fe = "[object Float64Array]", mt = "[object Int8Array]", At = "[object Int16Array]", pt = "[object Int32Array]", Rt = "[object Uint8Array]", it = "[object Uint8ClampedArray]", Jr = "[object Uint16Array]", Qr = "[object Uint32Array]", ga = /\b__p \+= '';/g, bl = /\b(__p \+=) '' \+/g, mw = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xf = /&(?:amp|lt|gt|quot|#39);/g, bf = /[&<>"']/g, gw = RegExp(xf.source), vw = RegExp(bf.source), yw = /<%-([\s\S]+?)%>/g, xw = /<%([\s\S]+?)%>/g, wf = /<%=([\s\S]+?)%>/g, bw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ww = /^\w*$/, _w = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wl = /[\\^$.*+?()[\]{}|]/g, Ew = RegExp(wl.source), _l = /^\s+/, Cw = /\s/, Tw = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ow = /\{\n\/\* \[wrapped with (.+)\] \*/, Sw = /,? & /, Dw = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, kw = /[()=,{}\[\]\/\s]/, Pw = /\\(\\)?/g, Aw = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _f = /\w*$/, Iw = /^[-+]0x[0-9a-f]+$/i, Mw = /^0b[01]+$/i, Nw = /^\[object .+?Constructor\]$/, jw = /^0o[0-7]+$/i, Rw = /^(?:0|[1-9]\d*)$/, $w = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, fo = /($^)/, Fw = /['\n\r\u2028\u2029\\]/g, po = "\\ud800-\\udfff", Lw = "\\u0300-\\u036f", Ww = "\\ufe20-\\ufe2f", Vw = "\\u20d0-\\u20ff", Ef = Lw + Ww + Vw, Cf = "\\u2700-\\u27bf", Tf = "a-z\\xdf-\\xf6\\xf8-\\xff", zw = "\\xac\\xb1\\xd7\\xf7", Bw = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Hw = "\\u2000-\\u206f", Uw = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Of = "A-Z\\xc0-\\xd6\\xd8-\\xde", Sf = "\\ufe0e\\ufe0f", Df = zw + Bw + Hw + Uw, El = "['’]", Yw = "[" + po + "]", kf = "[" + Df + "]", ho = "[" + Ef + "]", Pf = "\\d+", qw = "[" + Cf + "]", Af = "[" + Tf + "]", If = "[^" + po + Df + Pf + Cf + Tf + Of + "]", Cl = "\\ud83c[\\udffb-\\udfff]", Kw = "(?:" + ho + "|" + Cl + ")", Mf = "[^" + po + "]", Tl = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ol = "[\\ud800-\\udbff][\\udc00-\\udfff]", Oi = "[" + Of + "]", Nf = "\\u200d", jf = "(?:" + Af + "|" + If + ")", Gw = "(?:" + Oi + "|" + If + ")", Rf = "(?:" + El + "(?:d|ll|m|re|s|t|ve))?", $f = "(?:" + El + "(?:D|LL|M|RE|S|T|VE))?", Ff = Kw + "?", Lf = "[" + Sf + "]?", Xw = "(?:" + Nf + "(?:" + [Mf, Tl, Ol].join("|") + ")" + Lf + Ff + ")*", Zw = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Jw = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Wf = Lf + Ff + Xw, Qw = "(?:" + [qw, Tl, Ol].join("|") + ")" + Wf, e_ = "(?:" + [Mf + ho + "?", ho, Tl, Ol, Yw].join("|") + ")", t_ = RegExp(El, "g"), n_ = RegExp(ho, "g"), Sl = RegExp(Cl + "(?=" + Cl + ")|" + e_ + Wf, "g"), r_ = RegExp([
      Oi + "?" + Af + "+" + Rf + "(?=" + [kf, Oi, "$"].join("|") + ")",
      Gw + "+" + $f + "(?=" + [kf, Oi + jf, "$"].join("|") + ")",
      Oi + "?" + jf + "+" + Rf,
      Oi + "+" + $f,
      Jw,
      Zw,
      Pf,
      Qw
    ].join("|"), "g"), i_ = RegExp("[" + Nf + po + Ef + Sf + "]"), a_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, o_ = [
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
    ], s_ = -1, _t = {};
    _t[wt] = _t[Fe] = _t[mt] = _t[At] = _t[pt] = _t[Rt] = _t[it] = _t[Jr] = _t[Qr] = !0, _t[ye] = _t[ge] = _t[oe] = _t[we] = _t[Ne] = _t[Ce] = _t[Se] = _t[fe] = _t[ve] = _t[et] = _t[Ke] = _t[re] = _t[m] = _t[F] = _t[ae] = !1;
    var xt = {};
    xt[ye] = xt[ge] = xt[oe] = xt[Ne] = xt[we] = xt[Ce] = xt[wt] = xt[Fe] = xt[mt] = xt[At] = xt[pt] = xt[ve] = xt[et] = xt[Ke] = xt[re] = xt[m] = xt[F] = xt[$] = xt[Rt] = xt[it] = xt[Jr] = xt[Qr] = !0, xt[Se] = xt[fe] = xt[ae] = !1;
    var l_ = {
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
    }, u_ = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, c_ = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, d_ = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, f_ = parseFloat, p_ = parseInt, Vf = typeof Ra == "object" && Ra && Ra.Object === Object && Ra, h_ = typeof self == "object" && self && self.Object === Object && self, Bt = Vf || h_ || Function("return this")(), Dl = t && !t.nodeType && t, ei = Dl && !0 && e && !e.nodeType && e, zf = ei && ei.exports === Dl, kl = zf && Vf.process, Tn = function() {
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
    function m_(q, se, ie, Oe) {
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
    function g_(q, se) {
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
    function v_(q, se, ie, Oe) {
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
    var y_ = Ml("length");
    function x_(q) {
      return q.split("");
    }
    function b_(q) {
      return q.match(Dw) || [];
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
      return se === se ? I_(q, se, ie) : go(q, Zf, ie);
    }
    function w_(q, se, ie, Oe) {
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
    function __(q, se) {
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
    function E_(q, se) {
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
    function C_(q, se) {
      for (var ie = q.length, Oe = 0; ie--; )
        q[ie] === se && ++Oe;
      return Oe;
    }
    var T_ = Nl(l_), O_ = Nl(u_);
    function S_(q) {
      return "\\" + d_[q];
    }
    function D_(q, se) {
      return q == null ? n : q[se];
    }
    function Di(q) {
      return i_.test(q);
    }
    function k_(q) {
      return a_.test(q);
    }
    function P_(q) {
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
    function A_(q) {
      var se = -1, ie = Array(q.size);
      return q.forEach(function(Oe) {
        ie[++se] = [Oe, Oe];
      }), ie;
    }
    function I_(q, se, ie) {
      for (var Oe = ie - 1, Le = q.length; ++Oe < Le; )
        if (q[Oe] === se)
          return Oe;
      return -1;
    }
    function M_(q, se, ie) {
      for (var Oe = ie + 1; Oe--; )
        if (q[Oe] === se)
          return Oe;
      return Oe;
    }
    function ki(q) {
      return Di(q) ? j_(q) : y_(q);
    }
    function Fn(q) {
      return Di(q) ? R_(q) : x_(q);
    }
    function ip(q) {
      for (var se = q.length; se-- && Cw.test(q.charAt(se)); )
        ;
      return se;
    }
    var N_ = Nl(c_);
    function j_(q) {
      for (var se = Sl.lastIndex = 0; Sl.test(q); )
        ++se;
      return se;
    }
    function R_(q) {
      return q.match(Sl) || [];
    }
    function $_(q) {
      return q.match(r_) || [];
    }
    var F_ = function q(se) {
      se = se == null ? Bt : Pi.defaults(Bt.Object(), se, Pi.pick(Bt, o_));
      var ie = se.Array, Oe = se.Date, Le = se.Error, nt = se.Function, Ft = se.Math, gt = se.Object, Ll = se.RegExp, L_ = se.String, Sn = se.TypeError, yo = ie.prototype, W_ = nt.prototype, Ai = gt.prototype, xo = se["__core-js_shared__"], bo = W_.toString, dt = Ai.hasOwnProperty, V_ = 0, ap = function() {
        var i = /[^.]+$/.exec(xo && xo.keys && xo.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), wo = Ai.toString, z_ = bo.call(gt), B_ = Bt._, H_ = Ll(
        "^" + bo.call(dt).replace(wl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), _o = zf ? se.Buffer : n, kr = se.Symbol, Eo = se.Uint8Array, op = _o ? _o.allocUnsafe : n, Co = rp(gt.getPrototypeOf, gt), sp = gt.create, lp = Ai.propertyIsEnumerable, To = yo.splice, up = kr ? kr.isConcatSpreadable : n, ya = kr ? kr.iterator : n, ti = kr ? kr.toStringTag : n, Oo = function() {
        try {
          var i = oi(gt, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), U_ = se.clearTimeout !== Bt.clearTimeout && se.clearTimeout, Y_ = Oe && Oe.now !== Bt.Date.now && Oe.now, q_ = se.setTimeout !== Bt.setTimeout && se.setTimeout, So = Ft.ceil, Do = Ft.floor, Wl = gt.getOwnPropertySymbols, K_ = _o ? _o.isBuffer : n, cp = se.isFinite, G_ = yo.join, X_ = rp(gt.keys, gt), Lt = Ft.max, Kt = Ft.min, Z_ = Oe.now, J_ = se.parseInt, dp = Ft.random, Q_ = yo.reverse, Vl = oi(se, "DataView"), xa = oi(se, "Map"), zl = oi(se, "Promise"), Ii = oi(se, "Set"), ba = oi(se, "WeakMap"), wa = oi(gt, "create"), ko = ba && new ba(), Mi = {}, e0 = si(Vl), t0 = si(xa), n0 = si(zl), r0 = si(Ii), i0 = si(ba), Po = kr ? kr.prototype : n, _a = Po ? Po.valueOf : n, fp = Po ? Po.toString : n;
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
        escape: yw,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: xw,
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
      function a0() {
        var i = new Xe(this.__wrapped__);
        return i.__actions__ = an(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = an(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = an(this.__views__), i;
      }
      function o0() {
        if (this.__filtered__) {
          var i = new Xe(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function s0() {
        var i = this.__wrapped__.value(), s = this.__dir__, c = Ve(i), f = s < 0, y = c ? i.length : 0, T = x1(0, y, this.__views__), A = T.start, W = T.end, G = W - A, de = f ? W : A - 1, pe = this.__iteratees__, me = pe.length, Te = 0, De = Kt(G, this.__takeCount__);
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
      function l0() {
        this.__data__ = wa ? wa(null) : {}, this.size = 0;
      }
      function u0(i) {
        var s = this.has(i) && delete this.__data__[i];
        return this.size -= s ? 1 : 0, s;
      }
      function c0(i) {
        var s = this.__data__;
        if (wa) {
          var c = s[i];
          return c === d ? n : c;
        }
        return dt.call(s, i) ? s[i] : n;
      }
      function d0(i) {
        var s = this.__data__;
        return wa ? s[i] !== n : dt.call(s, i);
      }
      function f0(i, s) {
        var c = this.__data__;
        return this.size += this.has(i) ? 0 : 1, c[i] = wa && s === n ? d : s, this;
      }
      ni.prototype.clear = l0, ni.prototype.delete = u0, ni.prototype.get = c0, ni.prototype.has = d0, ni.prototype.set = f0;
      function ur(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var f = i[s];
          this.set(f[0], f[1]);
        }
      }
      function p0() {
        this.__data__ = [], this.size = 0;
      }
      function h0(i) {
        var s = this.__data__, c = Io(s, i);
        if (c < 0)
          return !1;
        var f = s.length - 1;
        return c == f ? s.pop() : To.call(s, c, 1), --this.size, !0;
      }
      function m0(i) {
        var s = this.__data__, c = Io(s, i);
        return c < 0 ? n : s[c][1];
      }
      function g0(i) {
        return Io(this.__data__, i) > -1;
      }
      function v0(i, s) {
        var c = this.__data__, f = Io(c, i);
        return f < 0 ? (++this.size, c.push([i, s])) : c[f][1] = s, this;
      }
      ur.prototype.clear = p0, ur.prototype.delete = h0, ur.prototype.get = m0, ur.prototype.has = g0, ur.prototype.set = v0;
      function cr(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++s < c; ) {
          var f = i[s];
          this.set(f[0], f[1]);
        }
      }
      function y0() {
        this.size = 0, this.__data__ = {
          hash: new ni(),
          map: new (xa || ur)(),
          string: new ni()
        };
      }
      function x0(i) {
        var s = Ho(this, i).delete(i);
        return this.size -= s ? 1 : 0, s;
      }
      function b0(i) {
        return Ho(this, i).get(i);
      }
      function w0(i) {
        return Ho(this, i).has(i);
      }
      function _0(i, s) {
        var c = Ho(this, i), f = c.size;
        return c.set(i, s), this.size += c.size == f ? 0 : 1, this;
      }
      cr.prototype.clear = y0, cr.prototype.delete = x0, cr.prototype.get = b0, cr.prototype.has = w0, cr.prototype.set = _0;
      function ri(i) {
        var s = -1, c = i == null ? 0 : i.length;
        for (this.__data__ = new cr(); ++s < c; )
          this.add(i[s]);
      }
      function E0(i) {
        return this.__data__.set(i, d), this;
      }
      function C0(i) {
        return this.__data__.has(i);
      }
      ri.prototype.add = ri.prototype.push = E0, ri.prototype.has = C0;
      function Ln(i) {
        var s = this.__data__ = new ur(i);
        this.size = s.size;
      }
      function T0() {
        this.__data__ = new ur(), this.size = 0;
      }
      function O0(i) {
        var s = this.__data__, c = s.delete(i);
        return this.size = s.size, c;
      }
      function S0(i) {
        return this.__data__.get(i);
      }
      function D0(i) {
        return this.__data__.has(i);
      }
      function k0(i, s) {
        var c = this.__data__;
        if (c instanceof ur) {
          var f = c.__data__;
          if (!xa || f.length < a - 1)
            return f.push([i, s]), this.size = ++c.size, this;
          c = this.__data__ = new cr(f);
        }
        return c.set(i, s), this.size = c.size, this;
      }
      Ln.prototype.clear = T0, Ln.prototype.delete = O0, Ln.prototype.get = S0, Ln.prototype.has = D0, Ln.prototype.set = k0;
      function pp(i, s) {
        var c = Ve(i), f = !c && li(i), y = !c && !f && Nr(i), T = !c && !f && !y && Fi(i), A = c || f || y || T, W = A ? Rl(i.length, L_) : [], G = W.length;
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
      function P0(i, s) {
        return Uo(an(i), ii(s, 0, i.length));
      }
      function A0(i) {
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
      function I0(i, s, c, f) {
        return Pr(i, function(y, T, A) {
          s(f, y, c(y), A);
        }), f;
      }
      function mp(i, s) {
        return i && Xn(s, Vt(s), i);
      }
      function M0(i, s) {
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
          if (A = w1(i), !W)
            return an(i, A);
        } else {
          var me = Gt(i), Te = me == fe || me == Re;
          if (Nr(i))
            return Lp(i, W);
          if (me == Ke || me == ye || Te && !y) {
            if (A = G || Te ? {} : ih(i), !W)
              return G ? c1(i, M0(A, i)) : u1(i, mp(A, i));
          } else {
            if (!xt[me])
              return y ? i : {};
            A = _1(i, me, W);
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
      function N0(i) {
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
      function j0(i, s) {
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
      function R0(i, s, c, f) {
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
        for (c || (c = C1), y || (y = []); ++T < A; ) {
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
        return i == null ? i === n ? H : rt : ti && ti in gt(i) ? y1(i) : A1(i);
      }
      function ql(i, s) {
        return i > s;
      }
      function $0(i, s) {
        return i != null && dt.call(i, s);
      }
      function F0(i, s) {
        return i != null && s in gt(i);
      }
      function L0(i, s, c) {
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
      function W0(i, s, c, f) {
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
      function V0(i) {
        return kt(i) && Zt(i) == oe;
      }
      function z0(i) {
        return kt(i) && Zt(i) == Ce;
      }
      function Oa(i, s, c, f, y) {
        return i === s ? !0 : i == null || s == null || !kt(i) && !kt(s) ? i !== i && s !== s : B0(i, s, c, f, Oa, y);
      }
      function B0(i, s, c, f, y, T) {
        var A = Ve(i), W = Ve(s), G = A ? ge : Gt(i), de = W ? ge : Gt(s);
        G = G == ye ? Ke : G, de = de == ye ? Ke : de;
        var pe = G == Ke, me = de == Ke, Te = G == de;
        if (Te && Nr(i)) {
          if (!Nr(s))
            return !1;
          A = !0, pe = !1;
        }
        if (Te && !pe)
          return T || (T = new Ln()), A || Fi(i) ? th(i, s, c, f, y, T) : g1(i, s, G, c, f, y, T);
        if (!(c & O)) {
          var De = pe && dt.call(i, "__wrapped__"), Ie = me && dt.call(s, "__wrapped__");
          if (De || Ie) {
            var He = De ? i.value() : i, Me = Ie ? s.value() : s;
            return T || (T = new Ln()), y(He, Me, c, f, T);
          }
        }
        return Te ? (T || (T = new Ln()), v1(i, s, c, f, y, T)) : !1;
      }
      function H0(i) {
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
            if (!(Te === n ? Oa(pe, de, O | _, f, me) : Te))
              return !1;
          }
        }
        return !0;
      }
      function Ep(i) {
        if (!St(i) || O1(i))
          return !1;
        var s = mr(i) ? H_ : Nw;
        return s.test(si(i));
      }
      function U0(i) {
        return kt(i) && Zt(i) == re;
      }
      function Y0(i) {
        return kt(i) && Gt(i) == m;
      }
      function q0(i) {
        return kt(i) && Zo(i.length) && !!_t[Zt(i)];
      }
      function Cp(i) {
        return typeof i == "function" ? i : i == null ? ln : typeof i == "object" ? Ve(i) ? Sp(i[0], i[1]) : Op(i) : Yh(i);
      }
      function Xl(i) {
        if (!ka(i))
          return X_(i);
        var s = [];
        for (var c in gt(i))
          dt.call(i, c) && c != "constructor" && s.push(c);
        return s;
      }
      function K0(i) {
        if (!St(i))
          return P1(i);
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
          return f === n && f === s ? Tu(c, i) : Oa(s, f, O | _);
        };
      }
      function jo(i, s, c, f, y) {
        i !== s && Ul(s, function(T, A) {
          if (y || (y = new Ln()), St(T))
            G0(i, s, A, c, jo, f, y);
          else {
            var W = f ? f(gu(i, A), T, A + "", i, s, y) : n;
            W === n && (W = T), Bl(i, A, W);
          }
        }, sn);
      }
      function G0(i, s, c, f, y, T, A) {
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
        return __(y, function(T, A) {
          return l1(T, A, c);
        });
      }
      function X0(i, s) {
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
      function Z0(i) {
        return function(s) {
          return ai(s, i);
        };
      }
      function Jl(i, s, c, f) {
        var y = f ? w_ : Si, T = -1, A = s.length, W = i;
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
      function J0(i, s, c, f) {
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
      function Q0(i) {
        return hp(Li(i));
      }
      function e1(i, s) {
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
      } : ln, t1 = Oo ? function(i, s) {
        return Oo(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Su(s),
          writable: !0
        });
      } : ln;
      function n1(i) {
        return Uo(Li(i));
      }
      function Pn(i, s, c) {
        var f = -1, y = i.length;
        s < 0 && (s = -s > y ? 0 : y + s), c = c > y ? y : c, c < 0 && (c += y), y = s > c ? 0 : c - s >>> 0, s >>>= 0;
        for (var T = ie(y); ++f < y; )
          T[f] = i[f + s];
        return T;
      }
      function r1(i, s) {
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
          var de = s ? null : h1(i);
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
      var i1 = Ye;
      function Mr(i, s, c) {
        var f = i.length;
        return c = c === n ? f : c, !s && c >= f ? i : Pn(i, s, c);
      }
      var Fp = U_ || function(i) {
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
      function a1(i, s) {
        var c = s ? ou(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.byteLength);
      }
      function o1(i) {
        var s = new i.constructor(i.source, _f.exec(i));
        return s.lastIndex = i.lastIndex, s;
      }
      function s1(i) {
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
      function l1(i, s, c) {
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
      function u1(i, s) {
        return Xn(i, pu(i), s);
      }
      function c1(i, s) {
        return Xn(i, nh(i), s);
      }
      function Fo(i, s) {
        return function(c, f) {
          var y = Ve(c) ? m_ : I0, T = s ? s() : {};
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
      function d1(i, s, c) {
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
          return Al(Hh(Bh(s).replace(t_, "")), i, "");
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
      function f1(i, s, c) {
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
            G && mu(G[0]) && G[1] == (ee | k | S | ne) && !G[4].length && G[9] == 1 ? A = A[Bo(G[0])].apply(A, G[3]) : A = T.length == 1 && mu(T) ? A[W]() : A.thru(T);
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
            var Qt = $i(Me), wn = C_(Je, Qt);
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
          return Ge = Je.length, W ? Je = I1(Je, W) : Ie && Ge > 1 && Je.reverse(), pe && G < Ge && (Je.length = G), this && this !== Bt && this instanceof Me && (vr = He || Da(vr)), vr.apply(Vn, Je);
        }
        return Me;
      }
      function Gp(i, s) {
        return function(c, f) {
          return W0(c, i, s(f), {});
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
      function p1(i, s, c, f) {
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
          return f && typeof f != "number" && Jt(s, c, f) && (c = f = n), s = gr(s), c === n ? (c = s, s = 0) : c = gr(c), f = f === n ? s < c ? 1 : -1 : gr(f), J0(s, c, f, i);
        };
      }
      function zo(i) {
        return function(s, c) {
          return typeof s == "string" && typeof c == "string" || (s = In(s), c = In(c)), i(s, c);
        };
      }
      function Zp(i, s, c, f, y, T, A, W, G, de) {
        var pe = s & k, me = pe ? A : n, Te = pe ? n : A, De = pe ? T : n, Ie = pe ? n : T;
        s |= pe ? S : Q, s &= ~(pe ? Q : S), s & C || (s &= -4);
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
      var h1 = Ii && 1 / vo(new Ii([, -0]))[1] == j ? function(i) {
        return new Ii(i);
      } : Pu;
      function Jp(i) {
        return function(s) {
          var c = Gt(s);
          return c == ve ? Fl(s) : c == m ? A_(s) : E_(s, i(s));
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
        if (Te && k1(De, Te), i = De[0], s = De[1], c = De[2], f = De[3], y = De[4], W = De[9] = De[9] === n ? G ? 0 : i.length : Lt(De[9] - de, 0), !W && s & (k | D) && (s &= -25), !s || s == w)
          var Ie = d1(i, s, c);
        else s == k || s == D ? Ie = f1(i, s, W) : (s == S || s == (w | S)) && !y.length ? Ie = p1(i, s, c, f) : Ie = Lo.apply(n, De);
        var He = Te ? Ip : uh;
        return ch(He(Ie, De), i, s);
      }
      function Qp(i, s, c, f) {
        return i === n || Wn(i, Ai[c]) && !dt.call(f, c) ? s : i;
      }
      function eh(i, s, c, f, y, T) {
        return St(i) && St(s) && (T.set(s, i), jo(i, s, n, eh, T), T.delete(s)), i;
      }
      function m1(i) {
        return Aa(i) ? n : i;
      }
      function th(i, s, c, f, y, T) {
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
      function g1(i, s, c, f, y, T, A) {
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
            var G = f & O;
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
      function v1(i, s, c, f, y, T) {
        var A = c & O, W = uu(i), G = W.length, de = uu(s), pe = de.length;
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
        return T1(s) ? c[typeof s == "string" ? "string" : "hash"] : c.map;
      }
      function fu(i) {
        for (var s = Vt(i), c = s.length; c--; ) {
          var f = s[c], y = i[f];
          s[c] = [f, y, ah(y)];
        }
        return s;
      }
      function oi(i, s) {
        var c = D_(i, s);
        return Ep(c) ? c : n;
      }
      function y1(i) {
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
            case e0:
              return Ne;
            case t0:
              return ve;
            case n0:
              return N;
            case r0:
              return m;
            case i0:
              return ae;
          }
        return s;
      });
      function x1(i, s, c) {
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
      function b1(i) {
        var s = i.match(Ow);
        return s ? s[1].split(Sw) : [];
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
      function w1(i) {
        var s = i.length, c = new i.constructor(s);
        return s && typeof i[0] == "string" && dt.call(i, "index") && (c.index = i.index, c.input = i.input), c;
      }
      function ih(i) {
        return typeof i.constructor == "function" && !ka(i) ? Ni(Co(i)) : {};
      }
      function _1(i, s, c) {
        var f = i.constructor;
        switch (s) {
          case oe:
            return ou(i);
          case we:
          case Ce:
            return new f(+i);
          case Ne:
            return a1(i, c);
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
            return o1(i);
          case m:
            return new f();
          case $:
            return s1(i);
        }
      }
      function E1(i, s) {
        var c = s.length;
        if (!c)
          return i;
        var f = c - 1;
        return s[f] = (c > 1 ? "& " : "") + s[f], s = s.join(c > 2 ? ", " : " "), i.replace(Tw, `{
/* [wrapped with ` + s + `] */
`);
      }
      function C1(i) {
        return Ve(i) || li(i) || !!(up && i && i[up]);
      }
      function hr(i, s) {
        var c = typeof i;
        return s = s ?? I, !!s && (c == "number" || c != "symbol" && Rw.test(i)) && i > -1 && i % 1 == 0 && i < s;
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
        return c == "number" || c == "symbol" || c == "boolean" || i == null || xn(i) ? !0 : ww.test(i) || !bw.test(i) || s != null && i in gt(s);
      }
      function T1(i) {
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
      function O1(i) {
        return !!ap && ap in i;
      }
      var S1 = xo ? mr : Iu;
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
      function D1(i) {
        var s = Go(i, function(f) {
          return c.size === p && c.clear(), f;
        }), c = s.cache;
        return s;
      }
      function k1(i, s) {
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
      function P1(i) {
        var s = [];
        if (i != null)
          for (var c in gt(i))
            s.push(c);
        return s;
      }
      function A1(i) {
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
      function I1(i, s) {
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
      var uh = dh(Ip), Pa = q_ || function(i, s) {
        return Bt.setTimeout(i, s);
      }, vu = dh(t1);
      function ch(i, s, c) {
        var f = s + "";
        return vu(i, E1(f, M1(b1(f), c)));
      }
      function dh(i) {
        var s = 0, c = 0;
        return function() {
          var f = Z_(), y = B - (f - c);
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
      var fh = D1(function(i) {
        var s = [];
        return i.charCodeAt(0) === 46 && s.push(""), i.replace(_w, function(c, f, y, T) {
          s.push(y ? T.replace(Pw, "$1") : f || c);
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
      function M1(i, s) {
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
      function N1(i, s, c) {
        (c ? Jt(i, s, c) : s === n) ? s = 1 : s = Lt(ze(s), 0);
        var f = i == null ? 0 : i.length;
        if (!f || s < 1)
          return [];
        for (var y = 0, T = 0, A = ie(So(f / s)); y < f; )
          A[T++] = Pn(i, y, y += s);
        return A;
      }
      function j1(i) {
        for (var s = -1, c = i == null ? 0 : i.length, f = 0, y = []; ++s < c; ) {
          var T = i[s];
          T && (y[f++] = T);
        }
        return y;
      }
      function R1() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var s = ie(i - 1), c = arguments[0], f = i; f--; )
          s[f - 1] = arguments[f];
        return Sr(Ve(c) ? an(c) : [c], Ht(s, 1));
      }
      var $1 = Ye(function(i, s) {
        return It(i) ? Ca(i, Ht(s, 1, It, !0)) : [];
      }), F1 = Ye(function(i, s) {
        var c = An(s);
        return It(c) && (c = n), It(i) ? Ca(i, Ht(s, 1, It, !0), Ae(c, 2)) : [];
      }), L1 = Ye(function(i, s) {
        var c = An(s);
        return It(c) && (c = n), It(i) ? Ca(i, Ht(s, 1, It, !0), n, c) : [];
      });
      function W1(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (s = c || s === n ? 1 : ze(s), Pn(i, s < 0 ? 0 : s, f)) : [];
      }
      function V1(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (s = c || s === n ? 1 : ze(s), s = f - s, Pn(i, 0, s < 0 ? 0 : s)) : [];
      }
      function z1(i, s) {
        return i && i.length ? $o(i, Ae(s, 3), !0, !0) : [];
      }
      function B1(i, s) {
        return i && i.length ? $o(i, Ae(s, 3), !0) : [];
      }
      function H1(i, s, c, f) {
        var y = i == null ? 0 : i.length;
        return y ? (c && typeof c != "number" && Jt(i, s, c) && (c = 0, f = y), R0(i, s, c, f)) : [];
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
      function U1(i) {
        var s = i == null ? 0 : i.length;
        return s ? Ht(i, j) : [];
      }
      function Y1(i, s) {
        var c = i == null ? 0 : i.length;
        return c ? (s = s === n ? 1 : ze(s), Ht(i, s)) : [];
      }
      function q1(i) {
        for (var s = -1, c = i == null ? 0 : i.length, f = {}; ++s < c; ) {
          var y = i[s];
          f[y[0]] = y[1];
        }
        return f;
      }
      function vh(i) {
        return i && i.length ? i[0] : n;
      }
      function K1(i, s, c) {
        var f = i == null ? 0 : i.length;
        if (!f)
          return -1;
        var y = c == null ? 0 : ze(c);
        return y < 0 && (y = Lt(f + y, 0)), Si(i, s, y);
      }
      function G1(i) {
        var s = i == null ? 0 : i.length;
        return s ? Pn(i, 0, -1) : [];
      }
      var X1 = Ye(function(i) {
        var s = Ot(i, iu);
        return s.length && s[0] === i[0] ? Kl(s) : [];
      }), Z1 = Ye(function(i) {
        var s = An(i), c = Ot(i, iu);
        return s === An(c) ? s = n : c.pop(), c.length && c[0] === i[0] ? Kl(c, Ae(s, 2)) : [];
      }), J1 = Ye(function(i) {
        var s = An(i), c = Ot(i, iu);
        return s = typeof s == "function" ? s : n, s && c.pop(), c.length && c[0] === i[0] ? Kl(c, n, s) : [];
      });
      function Q1(i, s) {
        return i == null ? "" : G_.call(i, s);
      }
      function An(i) {
        var s = i == null ? 0 : i.length;
        return s ? i[s - 1] : n;
      }
      function eE(i, s, c) {
        var f = i == null ? 0 : i.length;
        if (!f)
          return -1;
        var y = f;
        return c !== n && (y = ze(c), y = y < 0 ? Lt(f + y, 0) : Kt(y, f - 1)), s === s ? M_(i, s, y) : go(i, Zf, y, !0);
      }
      function tE(i, s) {
        return i && i.length ? Dp(i, ze(s)) : n;
      }
      var nE = Ye(yh);
      function yh(i, s) {
        return i && i.length && s && s.length ? Jl(i, s) : i;
      }
      function rE(i, s, c) {
        return i && i.length && s && s.length ? Jl(i, s, Ae(c, 2)) : i;
      }
      function iE(i, s, c) {
        return i && i.length && s && s.length ? Jl(i, s, n, c) : i;
      }
      var aE = pr(function(i, s) {
        var c = i == null ? 0 : i.length, f = Hl(i, s);
        return Ap(i, Ot(s, function(y) {
          return hr(y, c) ? +y : y;
        }).sort(Vp)), f;
      });
      function oE(i, s) {
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
        return i == null ? i : Q_.call(i);
      }
      function sE(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (c && typeof c != "number" && Jt(i, s, c) ? (s = 0, c = f) : (s = s == null ? 0 : ze(s), c = c === n ? f : ze(c)), Pn(i, s, c)) : [];
      }
      function lE(i, s) {
        return Ro(i, s);
      }
      function uE(i, s, c) {
        return tu(i, s, Ae(c, 2));
      }
      function cE(i, s) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var f = Ro(i, s);
          if (f < c && Wn(i[f], s))
            return f;
        }
        return -1;
      }
      function dE(i, s) {
        return Ro(i, s, !0);
      }
      function fE(i, s, c) {
        return tu(i, s, Ae(c, 2), !0);
      }
      function pE(i, s) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var f = Ro(i, s, !0) - 1;
          if (Wn(i[f], s))
            return f;
        }
        return -1;
      }
      function hE(i) {
        return i && i.length ? Mp(i) : [];
      }
      function mE(i, s) {
        return i && i.length ? Mp(i, Ae(s, 2)) : [];
      }
      function gE(i) {
        var s = i == null ? 0 : i.length;
        return s ? Pn(i, 1, s) : [];
      }
      function vE(i, s, c) {
        return i && i.length ? (s = c || s === n ? 1 : ze(s), Pn(i, 0, s < 0 ? 0 : s)) : [];
      }
      function yE(i, s, c) {
        var f = i == null ? 0 : i.length;
        return f ? (s = c || s === n ? 1 : ze(s), s = f - s, Pn(i, s < 0 ? 0 : s, f)) : [];
      }
      function xE(i, s) {
        return i && i.length ? $o(i, Ae(s, 3), !1, !0) : [];
      }
      function bE(i, s) {
        return i && i.length ? $o(i, Ae(s, 3)) : [];
      }
      var wE = Ye(function(i) {
        return Ar(Ht(i, 1, It, !0));
      }), _E = Ye(function(i) {
        var s = An(i);
        return It(s) && (s = n), Ar(Ht(i, 1, It, !0), Ae(s, 2));
      }), EE = Ye(function(i) {
        var s = An(i);
        return s = typeof s == "function" ? s : n, Ar(Ht(i, 1, It, !0), n, s);
      });
      function CE(i) {
        return i && i.length ? Ar(i) : [];
      }
      function TE(i, s) {
        return i && i.length ? Ar(i, Ae(s, 2)) : [];
      }
      function OE(i, s) {
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
      var SE = Ye(function(i, s) {
        return It(i) ? Ca(i, s) : [];
      }), DE = Ye(function(i) {
        return ru(Or(i, It));
      }), kE = Ye(function(i) {
        var s = An(i);
        return It(s) && (s = n), ru(Or(i, It), Ae(s, 2));
      }), PE = Ye(function(i) {
        var s = An(i);
        return s = typeof s == "function" ? s : n, ru(Or(i, It), n, s);
      }), AE = Ye(xu);
      function IE(i, s) {
        return $p(i || [], s || [], Ea);
      }
      function ME(i, s) {
        return $p(i || [], s || [], Sa);
      }
      var NE = Ye(function(i) {
        var s = i.length, c = s > 1 ? i[s - 1] : n;
        return c = typeof c == "function" ? (i.pop(), c) : n, xh(i, c);
      });
      function bh(i) {
        var s = E(i);
        return s.__chain__ = !0, s;
      }
      function jE(i, s) {
        return s(i), i;
      }
      function Yo(i, s) {
        return s(i);
      }
      var RE = pr(function(i) {
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
      function $E() {
        return bh(this);
      }
      function FE() {
        return new Dn(this.value(), this.__chain__);
      }
      function LE() {
        this.__values__ === n && (this.__values__ = Nh(this.value()));
        var i = this.__index__ >= this.__values__.length, s = i ? n : this.__values__[this.__index__++];
        return { done: i, value: s };
      }
      function WE() {
        return this;
      }
      function VE(i) {
        for (var s, c = this; c instanceof Ao; ) {
          var f = ph(c);
          f.__index__ = 0, f.__values__ = n, s ? y.__wrapped__ = f : s = f;
          var y = f;
          c = c.__wrapped__;
        }
        return y.__wrapped__ = i, s;
      }
      function zE() {
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
      function BE() {
        return Rp(this.__wrapped__, this.__actions__);
      }
      var HE = Fo(function(i, s, c) {
        dt.call(i, c) ? ++i[c] : dr(i, c, 1);
      });
      function UE(i, s, c) {
        var f = Ve(i) ? Gf : j0;
        return c && Jt(i, s, c) && (s = n), f(i, Ae(s, 3));
      }
      function YE(i, s) {
        var c = Ve(i) ? Or : xp;
        return c(i, Ae(s, 3));
      }
      var qE = qp(hh), KE = qp(mh);
      function GE(i, s) {
        return Ht(qo(i, s), 1);
      }
      function XE(i, s) {
        return Ht(qo(i, s), j);
      }
      function ZE(i, s, c) {
        return c = c === n ? 1 : ze(c), Ht(qo(i, s), c);
      }
      function wh(i, s) {
        var c = Ve(i) ? On : Pr;
        return c(i, Ae(s, 3));
      }
      function _h(i, s) {
        var c = Ve(i) ? g_ : yp;
        return c(i, Ae(s, 3));
      }
      var JE = Fo(function(i, s, c) {
        dt.call(i, c) ? i[c].push(s) : dr(i, c, [s]);
      });
      function QE(i, s, c, f) {
        i = on(i) ? i : Li(i), c = c && !f ? ze(c) : 0;
        var y = i.length;
        return c < 0 && (c = Lt(y + c, 0)), Jo(i) ? c <= y && i.indexOf(s, c) > -1 : !!y && Si(i, s, c) > -1;
      }
      var eC = Ye(function(i, s, c) {
        var f = -1, y = typeof s == "function", T = on(i) ? ie(i.length) : [];
        return Pr(i, function(A) {
          T[++f] = y ? gn(s, A, c) : Ta(A, s, c);
        }), T;
      }), tC = Fo(function(i, s, c) {
        dr(i, c, s);
      });
      function qo(i, s) {
        var c = Ve(i) ? Ot : Tp;
        return c(i, Ae(s, 3));
      }
      function nC(i, s, c, f) {
        return i == null ? [] : (Ve(s) || (s = s == null ? [] : [s]), c = f ? n : c, Ve(c) || (c = c == null ? [] : [c]), kp(i, s, c));
      }
      var rC = Fo(function(i, s, c) {
        i[c ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function iC(i, s, c) {
        var f = Ve(i) ? Al : Qf, y = arguments.length < 3;
        return f(i, Ae(s, 4), c, y, Pr);
      }
      function aC(i, s, c) {
        var f = Ve(i) ? v_ : Qf, y = arguments.length < 3;
        return f(i, Ae(s, 4), c, y, yp);
      }
      function oC(i, s) {
        var c = Ve(i) ? Or : xp;
        return c(i, Xo(Ae(s, 3)));
      }
      function sC(i) {
        var s = Ve(i) ? hp : Q0;
        return s(i);
      }
      function lC(i, s, c) {
        (c ? Jt(i, s, c) : s === n) ? s = 1 : s = ze(s);
        var f = Ve(i) ? P0 : e1;
        return f(i, s);
      }
      function uC(i) {
        var s = Ve(i) ? A0 : n1;
        return s(i);
      }
      function cC(i) {
        if (i == null)
          return 0;
        if (on(i))
          return Jo(i) ? ki(i) : i.length;
        var s = Gt(i);
        return s == ve || s == m ? i.size : Xl(i).length;
      }
      function dC(i, s, c) {
        var f = Ve(i) ? Il : r1;
        return c && Jt(i, s, c) && (s = n), f(i, Ae(s, 3));
      }
      var fC = Ye(function(i, s) {
        if (i == null)
          return [];
        var c = s.length;
        return c > 1 && Jt(i, s[0], s[1]) ? s = [] : c > 2 && Jt(s[0], s[1], s[2]) && (s = [s[0]]), kp(i, Ht(s, 1), []);
      }), Ko = Y_ || function() {
        return Bt.Date.now();
      };
      function pC(i, s) {
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
          f |= S;
        }
        return fr(i, f, s, c, y);
      }), Th = Ye(function(i, s, c) {
        var f = w | P;
        if (c.length) {
          var y = Dr(c, $i(Th));
          f |= S;
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
      var hC = Ye(function(i, s) {
        return vp(i, 1, s);
      }), mC = Ye(function(i, s, c) {
        return vp(i, In(s) || 0, c);
      });
      function gC(i) {
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
      function vC(i) {
        return Ch(2, i);
      }
      var yC = i1(function(i, s) {
        s = s.length == 1 && Ve(s[0]) ? Ot(s[0], vn(Ae())) : Ot(Ht(s, 1), vn(Ae()));
        var c = s.length;
        return Ye(function(f) {
          for (var y = -1, T = Kt(f.length, c); ++y < T; )
            f[y] = s[y].call(this, f[y]);
          return gn(i, this, f);
        });
      }), wu = Ye(function(i, s) {
        var c = Dr(s, $i(wu));
        return fr(i, S, n, s, c);
      }), kh = Ye(function(i, s) {
        var c = Dr(s, $i(kh));
        return fr(i, Q, n, s, c);
      }), xC = pr(function(i, s) {
        return fr(i, ne, n, n, n, s);
      });
      function bC(i, s) {
        if (typeof i != "function")
          throw new Sn(l);
        return s = s === n ? s : ze(s), Ye(i, s);
      }
      function wC(i, s) {
        if (typeof i != "function")
          throw new Sn(l);
        return s = s == null ? 0 : Lt(ze(s), 0), Ye(function(c) {
          var f = c[s], y = Mr(c, 0, s);
          return f && Sr(y, f), gn(i, this, y);
        });
      }
      function _C(i, s, c) {
        var f = !0, y = !0;
        if (typeof i != "function")
          throw new Sn(l);
        return St(c) && (f = "leading" in c ? !!c.leading : f, y = "trailing" in c ? !!c.trailing : y), Dh(i, s, {
          leading: f,
          maxWait: s,
          trailing: y
        });
      }
      function EC(i) {
        return Eh(i, 1);
      }
      function CC(i, s) {
        return wu(au(s), i);
      }
      function TC() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Ve(i) ? i : [i];
      }
      function OC(i) {
        return kn(i, b);
      }
      function SC(i, s) {
        return s = typeof s == "function" ? s : n, kn(i, b, s);
      }
      function DC(i) {
        return kn(i, g | b);
      }
      function kC(i, s) {
        return s = typeof s == "function" ? s : n, kn(i, g | b, s);
      }
      function PC(i, s) {
        return s == null || gp(i, s, Vt(s));
      }
      function Wn(i, s) {
        return i === s || i !== i && s !== s;
      }
      var AC = zo(ql), IC = zo(function(i, s) {
        return i >= s;
      }), li = _p(/* @__PURE__ */ function() {
        return arguments;
      }()) ? _p : function(i) {
        return kt(i) && dt.call(i, "callee") && !lp.call(i, "callee");
      }, Ve = ie.isArray, MC = Bf ? vn(Bf) : V0;
      function on(i) {
        return i != null && Zo(i.length) && !mr(i);
      }
      function It(i) {
        return kt(i) && on(i);
      }
      function NC(i) {
        return i === !0 || i === !1 || kt(i) && Zt(i) == we;
      }
      var Nr = K_ || Iu, jC = Hf ? vn(Hf) : z0;
      function RC(i) {
        return kt(i) && i.nodeType === 1 && !Aa(i);
      }
      function $C(i) {
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
      function FC(i, s) {
        return Oa(i, s);
      }
      function LC(i, s, c) {
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
      function WC(i) {
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
      var Ah = Uf ? vn(Uf) : H0;
      function VC(i, s) {
        return i === s || Gl(i, s, fu(s));
      }
      function zC(i, s, c) {
        return c = typeof c == "function" ? c : n, Gl(i, s, fu(s), c);
      }
      function BC(i) {
        return Ih(i) && i != +i;
      }
      function HC(i) {
        if (S1(i))
          throw new Le(o);
        return Ep(i);
      }
      function UC(i) {
        return i === null;
      }
      function YC(i) {
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
        return typeof c == "function" && c instanceof c && bo.call(c) == z_;
      }
      var Eu = Yf ? vn(Yf) : U0;
      function qC(i) {
        return Ph(i) && i >= -9007199254740991 && i <= I;
      }
      var Mh = qf ? vn(qf) : Y0;
      function Jo(i) {
        return typeof i == "string" || !Ve(i) && kt(i) && Zt(i) == F;
      }
      function xn(i) {
        return typeof i == "symbol" || kt(i) && Zt(i) == $;
      }
      var Fi = Kf ? vn(Kf) : q0;
      function KC(i) {
        return i === n;
      }
      function GC(i) {
        return kt(i) && Gt(i) == ae;
      }
      function XC(i) {
        return kt(i) && Zt(i) == xe;
      }
      var ZC = zo(Zl), JC = zo(function(i, s) {
        return i <= s;
      });
      function Nh(i) {
        if (!i)
          return [];
        if (on(i))
          return Jo(i) ? Fn(i) : an(i);
        if (ya && i[ya])
          return P_(i[ya]());
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
        var c = Mw.test(i);
        return c || jw.test(i) ? p_(i.slice(2), c ? 2 : 8) : Iw.test(i) ? M : +i;
      }
      function Rh(i) {
        return Xn(i, sn(i));
      }
      function QC(i) {
        return i ? ii(ze(i), -9007199254740991, I) : i === 0 ? i : 0;
      }
      function at(i) {
        return i == null ? "" : yn(i);
      }
      var eT = ji(function(i, s) {
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
      }), tT = ji(function(i, s, c, f) {
        Xn(s, Vt(s), i, f);
      }), nT = pr(Hl);
      function rT(i, s) {
        var c = Ni(i);
        return s == null ? c : mp(c, s);
      }
      var iT = Ye(function(i, s) {
        i = gt(i);
        var c = -1, f = s.length, y = f > 2 ? s[2] : n;
        for (y && Jt(s[0], s[1], y) && (f = 1); ++c < f; )
          for (var T = s[c], A = sn(T), W = -1, G = A.length; ++W < G; ) {
            var de = A[W], pe = i[de];
            (pe === n || Wn(pe, Ai[de]) && !dt.call(i, de)) && (i[de] = T[de]);
          }
        return i;
      }), aT = Ye(function(i) {
        return i.push(n, eh), gn(Fh, n, i);
      });
      function oT(i, s) {
        return Xf(i, Ae(s, 3), Gn);
      }
      function sT(i, s) {
        return Xf(i, Ae(s, 3), Yl);
      }
      function lT(i, s) {
        return i == null ? i : Ul(i, Ae(s, 3), sn);
      }
      function uT(i, s) {
        return i == null ? i : bp(i, Ae(s, 3), sn);
      }
      function cT(i, s) {
        return i && Gn(i, Ae(s, 3));
      }
      function dT(i, s) {
        return i && Yl(i, Ae(s, 3));
      }
      function fT(i) {
        return i == null ? [] : No(i, Vt(i));
      }
      function pT(i) {
        return i == null ? [] : No(i, sn(i));
      }
      function Cu(i, s, c) {
        var f = i == null ? n : ai(i, s);
        return f === n ? c : f;
      }
      function hT(i, s) {
        return i != null && rh(i, s, $0);
      }
      function Tu(i, s) {
        return i != null && rh(i, s, F0);
      }
      var mT = Gp(function(i, s, c) {
        s != null && typeof s.toString != "function" && (s = wo.call(s)), i[s] = c;
      }, Su(ln)), gT = Gp(function(i, s, c) {
        s != null && typeof s.toString != "function" && (s = wo.call(s)), dt.call(i, s) ? i[s].push(c) : i[s] = [c];
      }, Ae), vT = Ye(Ta);
      function Vt(i) {
        return on(i) ? pp(i) : Xl(i);
      }
      function sn(i) {
        return on(i) ? pp(i, !0) : K0(i);
      }
      function yT(i, s) {
        var c = {};
        return s = Ae(s, 3), Gn(i, function(f, y, T) {
          dr(c, s(f, y, T), f);
        }), c;
      }
      function xT(i, s) {
        var c = {};
        return s = Ae(s, 3), Gn(i, function(f, y, T) {
          dr(c, y, s(f, y, T));
        }), c;
      }
      var bT = ji(function(i, s, c) {
        jo(i, s, c);
      }), Fh = ji(function(i, s, c, f) {
        jo(i, s, c, f);
      }), wT = pr(function(i, s) {
        var c = {};
        if (i == null)
          return c;
        var f = !1;
        s = Ot(s, function(T) {
          return T = Ir(T, i), f || (f = T.length > 1), T;
        }), Xn(i, cu(i), c), f && (c = kn(c, g | x | b, m1));
        for (var y = s.length; y--; )
          nu(c, s[y]);
        return c;
      });
      function _T(i, s) {
        return Lh(i, Xo(Ae(s)));
      }
      var ET = pr(function(i, s) {
        return i == null ? {} : X0(i, s);
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
      function CT(i, s, c) {
        s = Ir(s, i);
        var f = -1, y = s.length;
        for (y || (y = 1, i = n); ++f < y; ) {
          var T = i == null ? n : i[Zn(s[f])];
          T === n && (f = y, T = c), i = mr(T) ? T.call(i) : T;
        }
        return i;
      }
      function TT(i, s, c) {
        return i == null ? i : Sa(i, s, c);
      }
      function OT(i, s, c, f) {
        return f = typeof f == "function" ? f : n, i == null ? i : Sa(i, s, c, f);
      }
      var Wh = Jp(Vt), Vh = Jp(sn);
      function ST(i, s, c) {
        var f = Ve(i), y = f || Nr(i) || Fi(i);
        if (s = Ae(s, 4), c == null) {
          var T = i && i.constructor;
          y ? c = f ? new T() : [] : St(i) ? c = mr(T) ? Ni(Co(i)) : {} : c = {};
        }
        return (y ? On : Gn)(i, function(A, W, G) {
          return s(c, A, W, G);
        }), c;
      }
      function DT(i, s) {
        return i == null ? !0 : nu(i, s);
      }
      function kT(i, s, c) {
        return i == null ? i : jp(i, s, au(c));
      }
      function PT(i, s, c, f) {
        return f = typeof f == "function" ? f : n, i == null ? i : jp(i, s, au(c), f);
      }
      function Li(i) {
        return i == null ? [] : $l(i, Vt(i));
      }
      function AT(i) {
        return i == null ? [] : $l(i, sn(i));
      }
      function IT(i, s, c) {
        return c === n && (c = s, s = n), c !== n && (c = In(c), c = c === c ? c : 0), s !== n && (s = In(s), s = s === s ? s : 0), ii(In(i), s, c);
      }
      function MT(i, s, c) {
        return s = gr(s), c === n ? (c = s, s = 0) : c = gr(c), i = In(i), L0(i, s, c);
      }
      function NT(i, s, c) {
        if (c && typeof c != "boolean" && Jt(i, s, c) && (s = c = n), c === n && (typeof s == "boolean" ? (c = s, s = n) : typeof i == "boolean" && (c = i, i = n)), i === n && s === n ? (i = 0, s = 1) : (i = gr(i), s === n ? (s = i, i = 0) : s = gr(s)), i > s) {
          var f = i;
          i = s, s = f;
        }
        if (c || i % 1 || s % 1) {
          var y = dp();
          return Kt(i + y * (s - i + f_("1e-" + ((y + "").length - 1))), s);
        }
        return Ql(i, s);
      }
      var jT = Ri(function(i, s, c) {
        return s = s.toLowerCase(), i + (c ? zh(s) : s);
      });
      function zh(i) {
        return Ou(at(i).toLowerCase());
      }
      function Bh(i) {
        return i = at(i), i && i.replace($w, T_).replace(n_, "");
      }
      function RT(i, s, c) {
        i = at(i), s = yn(s);
        var f = i.length;
        c = c === n ? f : ii(ze(c), 0, f);
        var y = c;
        return c -= s.length, c >= 0 && i.slice(c, y) == s;
      }
      function $T(i) {
        return i = at(i), i && vw.test(i) ? i.replace(bf, O_) : i;
      }
      function FT(i) {
        return i = at(i), i && Ew.test(i) ? i.replace(wl, "\\$&") : i;
      }
      var LT = Ri(function(i, s, c) {
        return i + (c ? "-" : "") + s.toLowerCase();
      }), WT = Ri(function(i, s, c) {
        return i + (c ? " " : "") + s.toLowerCase();
      }), VT = Yp("toLowerCase");
      function zT(i, s, c) {
        i = at(i), s = ze(s);
        var f = s ? ki(i) : 0;
        if (!s || f >= s)
          return i;
        var y = (s - f) / 2;
        return Vo(Do(y), c) + i + Vo(So(y), c);
      }
      function BT(i, s, c) {
        i = at(i), s = ze(s);
        var f = s ? ki(i) : 0;
        return s && f < s ? i + Vo(s - f, c) : i;
      }
      function HT(i, s, c) {
        i = at(i), s = ze(s);
        var f = s ? ki(i) : 0;
        return s && f < s ? Vo(s - f, c) + i : i;
      }
      function UT(i, s, c) {
        return c || s == null ? s = 0 : s && (s = +s), J_(at(i).replace(_l, ""), s || 0);
      }
      function YT(i, s, c) {
        return (c ? Jt(i, s, c) : s === n) ? s = 1 : s = ze(s), eu(at(i), s);
      }
      function qT() {
        var i = arguments, s = at(i[0]);
        return i.length < 3 ? s : s.replace(i[1], i[2]);
      }
      var KT = Ri(function(i, s, c) {
        return i + (c ? "_" : "") + s.toLowerCase();
      });
      function GT(i, s, c) {
        return c && typeof c != "number" && Jt(i, s, c) && (s = c = n), c = c === n ? L : c >>> 0, c ? (i = at(i), i && (typeof s == "string" || s != null && !Eu(s)) && (s = yn(s), !s && Di(i)) ? Mr(Fn(i), 0, c) : i.split(s, c)) : [];
      }
      var XT = Ri(function(i, s, c) {
        return i + (c ? " " : "") + Ou(s);
      });
      function ZT(i, s, c) {
        return i = at(i), c = c == null ? 0 : ii(ze(c), 0, i.length), s = yn(s), i.slice(c, c + s.length) == s;
      }
      function JT(i, s, c) {
        var f = E.templateSettings;
        c && Jt(i, s, c) && (s = n), i = at(i), s = Qo({}, s, f, Qp);
        var y = Qo({}, s.imports, f.imports, Qp), T = Vt(y), A = $l(y, T), W, G, de = 0, pe = s.interpolate || fo, me = "__p += '", Te = Ll(
          (s.escape || fo).source + "|" + pe.source + "|" + (pe === wf ? Aw : fo).source + "|" + (s.evaluate || fo).source + "|$",
          "g"
        ), De = "//# sourceURL=" + (dt.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++s_ + "]") + `
`;
        i.replace(Te, function(Me, Ge, Je, bn, Qt, wn) {
          return Je || (Je = bn), me += i.slice(de, wn).replace(Fw, S_), Ge && (W = !0, me += `' +
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
        else if (kw.test(Ie))
          throw new Le(u);
        me = (G ? me.replace(ga, "") : me).replace(bl, "$1").replace(mw, "$1;"), me = "function(" + (Ie || "obj") + `) {
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
      function QT(i) {
        return at(i).toLowerCase();
      }
      function eO(i) {
        return at(i).toUpperCase();
      }
      function tO(i, s, c) {
        if (i = at(i), i && (c || s === n))
          return ep(i);
        if (!i || !(s = yn(s)))
          return i;
        var f = Fn(i), y = Fn(s), T = tp(f, y), A = np(f, y) + 1;
        return Mr(f, T, A).join("");
      }
      function nO(i, s, c) {
        if (i = at(i), i && (c || s === n))
          return i.slice(0, ip(i) + 1);
        if (!i || !(s = yn(s)))
          return i;
        var f = Fn(i), y = np(f, Fn(s)) + 1;
        return Mr(f, 0, y).join("");
      }
      function rO(i, s, c) {
        if (i = at(i), i && (c || s === n))
          return i.replace(_l, "");
        if (!i || !(s = yn(s)))
          return i;
        var f = Fn(i), y = tp(f, Fn(s));
        return Mr(f, y).join("");
      }
      function iO(i, s) {
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
      function aO(i) {
        return i = at(i), i && gw.test(i) ? i.replace(xf, N_) : i;
      }
      var oO = Ri(function(i, s, c) {
        return i + (c ? " " : "") + s.toUpperCase();
      }), Ou = Yp("toUpperCase");
      function Hh(i, s, c) {
        return i = at(i), s = c ? n : s, s === n ? k_(i) ? $_(i) : b_(i) : i.match(s) || [];
      }
      var Uh = Ye(function(i, s) {
        try {
          return gn(i, n, s);
        } catch (c) {
          return _u(c) ? c : new Le(c);
        }
      }), sO = pr(function(i, s) {
        return On(s, function(c) {
          c = Zn(c), dr(i, c, bu(i[c], i));
        }), i;
      });
      function lO(i) {
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
      function uO(i) {
        return N0(kn(i, g));
      }
      function Su(i) {
        return function() {
          return i;
        };
      }
      function cO(i, s) {
        return i == null || i !== i ? s : i;
      }
      var dO = Kp(), fO = Kp(!0);
      function ln(i) {
        return i;
      }
      function Du(i) {
        return Cp(typeof i == "function" ? i : kn(i, g));
      }
      function pO(i) {
        return Op(kn(i, g));
      }
      function hO(i, s) {
        return Sp(i, kn(s, g));
      }
      var mO = Ye(function(i, s) {
        return function(c) {
          return Ta(c, i, s);
        };
      }), gO = Ye(function(i, s) {
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
      function vO() {
        return Bt._ === this && (Bt._ = B_), this;
      }
      function Pu() {
      }
      function yO(i) {
        return i = ze(i), Ye(function(s) {
          return Dp(s, i);
        });
      }
      var xO = su(Ot), bO = su(Gf), wO = su(Il);
      function Yh(i) {
        return hu(i) ? Ml(Zn(i)) : Z0(i);
      }
      function _O(i) {
        return function(s) {
          return i == null ? n : ai(i, s);
        };
      }
      var EO = Xp(), CO = Xp(!0);
      function Au() {
        return [];
      }
      function Iu() {
        return !1;
      }
      function TO() {
        return {};
      }
      function OO() {
        return "";
      }
      function SO() {
        return !0;
      }
      function DO(i, s) {
        if (i = ze(i), i < 1 || i > I)
          return [];
        var c = L, f = Kt(i, L);
        s = Ae(s), i -= L;
        for (var y = Rl(f, s); ++c < i; )
          s(c);
        return y;
      }
      function kO(i) {
        return Ve(i) ? Ot(i, Zn) : xn(i) ? [i] : an(fh(at(i)));
      }
      function PO(i) {
        var s = ++V_;
        return at(i) + s;
      }
      var AO = Wo(function(i, s) {
        return i + s;
      }, 0), IO = lu("ceil"), MO = Wo(function(i, s) {
        return i / s;
      }, 1), NO = lu("floor");
      function jO(i) {
        return i && i.length ? Mo(i, ln, ql) : n;
      }
      function RO(i, s) {
        return i && i.length ? Mo(i, Ae(s, 2), ql) : n;
      }
      function $O(i) {
        return Jf(i, ln);
      }
      function FO(i, s) {
        return Jf(i, Ae(s, 2));
      }
      function LO(i) {
        return i && i.length ? Mo(i, ln, Zl) : n;
      }
      function WO(i, s) {
        return i && i.length ? Mo(i, Ae(s, 2), Zl) : n;
      }
      var VO = Wo(function(i, s) {
        return i * s;
      }, 1), zO = lu("round"), BO = Wo(function(i, s) {
        return i - s;
      }, 0);
      function HO(i) {
        return i && i.length ? jl(i, ln) : 0;
      }
      function UO(i, s) {
        return i && i.length ? jl(i, Ae(s, 2)) : 0;
      }
      return E.after = pC, E.ary = Eh, E.assign = eT, E.assignIn = $h, E.assignInWith = Qo, E.assignWith = tT, E.at = nT, E.before = Ch, E.bind = bu, E.bindAll = sO, E.bindKey = Th, E.castArray = TC, E.chain = bh, E.chunk = N1, E.compact = j1, E.concat = R1, E.cond = lO, E.conforms = uO, E.constant = Su, E.countBy = HE, E.create = rT, E.curry = Oh, E.curryRight = Sh, E.debounce = Dh, E.defaults = iT, E.defaultsDeep = aT, E.defer = hC, E.delay = mC, E.difference = $1, E.differenceBy = F1, E.differenceWith = L1, E.drop = W1, E.dropRight = V1, E.dropRightWhile = z1, E.dropWhile = B1, E.fill = H1, E.filter = YE, E.flatMap = GE, E.flatMapDeep = XE, E.flatMapDepth = ZE, E.flatten = gh, E.flattenDeep = U1, E.flattenDepth = Y1, E.flip = gC, E.flow = dO, E.flowRight = fO, E.fromPairs = q1, E.functions = fT, E.functionsIn = pT, E.groupBy = JE, E.initial = G1, E.intersection = X1, E.intersectionBy = Z1, E.intersectionWith = J1, E.invert = mT, E.invertBy = gT, E.invokeMap = eC, E.iteratee = Du, E.keyBy = tC, E.keys = Vt, E.keysIn = sn, E.map = qo, E.mapKeys = yT, E.mapValues = xT, E.matches = pO, E.matchesProperty = hO, E.memoize = Go, E.merge = bT, E.mergeWith = Fh, E.method = mO, E.methodOf = gO, E.mixin = ku, E.negate = Xo, E.nthArg = yO, E.omit = wT, E.omitBy = _T, E.once = vC, E.orderBy = nC, E.over = xO, E.overArgs = yC, E.overEvery = bO, E.overSome = wO, E.partial = wu, E.partialRight = kh, E.partition = rC, E.pick = ET, E.pickBy = Lh, E.property = Yh, E.propertyOf = _O, E.pull = nE, E.pullAll = yh, E.pullAllBy = rE, E.pullAllWith = iE, E.pullAt = aE, E.range = EO, E.rangeRight = CO, E.rearg = xC, E.reject = oC, E.remove = oE, E.rest = bC, E.reverse = yu, E.sampleSize = lC, E.set = TT, E.setWith = OT, E.shuffle = uC, E.slice = sE, E.sortBy = fC, E.sortedUniq = hE, E.sortedUniqBy = mE, E.split = GT, E.spread = wC, E.tail = gE, E.take = vE, E.takeRight = yE, E.takeRightWhile = xE, E.takeWhile = bE, E.tap = jE, E.throttle = _C, E.thru = Yo, E.toArray = Nh, E.toPairs = Wh, E.toPairsIn = Vh, E.toPath = kO, E.toPlainObject = Rh, E.transform = ST, E.unary = EC, E.union = wE, E.unionBy = _E, E.unionWith = EE, E.uniq = CE, E.uniqBy = TE, E.uniqWith = OE, E.unset = DT, E.unzip = xu, E.unzipWith = xh, E.update = kT, E.updateWith = PT, E.values = Li, E.valuesIn = AT, E.without = SE, E.words = Hh, E.wrap = CC, E.xor = DE, E.xorBy = kE, E.xorWith = PE, E.zip = AE, E.zipObject = IE, E.zipObjectDeep = ME, E.zipWith = NE, E.entries = Wh, E.entriesIn = Vh, E.extend = $h, E.extendWith = Qo, ku(E, E), E.add = AO, E.attempt = Uh, E.camelCase = jT, E.capitalize = zh, E.ceil = IO, E.clamp = IT, E.clone = OC, E.cloneDeep = DC, E.cloneDeepWith = kC, E.cloneWith = SC, E.conformsTo = PC, E.deburr = Bh, E.defaultTo = cO, E.divide = MO, E.endsWith = RT, E.eq = Wn, E.escape = $T, E.escapeRegExp = FT, E.every = UE, E.find = qE, E.findIndex = hh, E.findKey = oT, E.findLast = KE, E.findLastIndex = mh, E.findLastKey = sT, E.floor = NO, E.forEach = wh, E.forEachRight = _h, E.forIn = lT, E.forInRight = uT, E.forOwn = cT, E.forOwnRight = dT, E.get = Cu, E.gt = AC, E.gte = IC, E.has = hT, E.hasIn = Tu, E.head = vh, E.identity = ln, E.includes = QE, E.indexOf = K1, E.inRange = MT, E.invoke = vT, E.isArguments = li, E.isArray = Ve, E.isArrayBuffer = MC, E.isArrayLike = on, E.isArrayLikeObject = It, E.isBoolean = NC, E.isBuffer = Nr, E.isDate = jC, E.isElement = RC, E.isEmpty = $C, E.isEqual = FC, E.isEqualWith = LC, E.isError = _u, E.isFinite = WC, E.isFunction = mr, E.isInteger = Ph, E.isLength = Zo, E.isMap = Ah, E.isMatch = VC, E.isMatchWith = zC, E.isNaN = BC, E.isNative = HC, E.isNil = YC, E.isNull = UC, E.isNumber = Ih, E.isObject = St, E.isObjectLike = kt, E.isPlainObject = Aa, E.isRegExp = Eu, E.isSafeInteger = qC, E.isSet = Mh, E.isString = Jo, E.isSymbol = xn, E.isTypedArray = Fi, E.isUndefined = KC, E.isWeakMap = GC, E.isWeakSet = XC, E.join = Q1, E.kebabCase = LT, E.last = An, E.lastIndexOf = eE, E.lowerCase = WT, E.lowerFirst = VT, E.lt = ZC, E.lte = JC, E.max = jO, E.maxBy = RO, E.mean = $O, E.meanBy = FO, E.min = LO, E.minBy = WO, E.stubArray = Au, E.stubFalse = Iu, E.stubObject = TO, E.stubString = OO, E.stubTrue = SO, E.multiply = VO, E.nth = tE, E.noConflict = vO, E.noop = Pu, E.now = Ko, E.pad = zT, E.padEnd = BT, E.padStart = HT, E.parseInt = UT, E.random = NT, E.reduce = iC, E.reduceRight = aC, E.repeat = YT, E.replace = qT, E.result = CT, E.round = zO, E.runInContext = q, E.sample = sC, E.size = cC, E.snakeCase = KT, E.some = dC, E.sortedIndex = lE, E.sortedIndexBy = uE, E.sortedIndexOf = cE, E.sortedLastIndex = dE, E.sortedLastIndexBy = fE, E.sortedLastIndexOf = pE, E.startCase = XT, E.startsWith = ZT, E.subtract = BO, E.sum = HO, E.sumBy = UO, E.template = JT, E.times = DO, E.toFinite = gr, E.toInteger = ze, E.toLength = jh, E.toLower = QT, E.toNumber = In, E.toSafeInteger = QC, E.toString = at, E.toUpper = eO, E.trim = tO, E.trimEnd = nO, E.trimStart = rO, E.truncate = iO, E.unescape = aO, E.uniqueId = PO, E.upperCase = oO, E.upperFirst = Ou, E.each = wh, E.eachRight = _h, E.first = vh, ku(E, function() {
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
      }], Xe.prototype.clone = a0, Xe.prototype.reverse = o0, Xe.prototype.value = s0, E.prototype.at = RE, E.prototype.chain = $E, E.prototype.commit = FE, E.prototype.next = LE, E.prototype.plant = VE, E.prototype.reverse = zE, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = BE, E.prototype.first = E.prototype.head, ya && (E.prototype[ya] = WE), E;
    }, Pi = F_();
    ei ? ((ei.exports = Pi)._ = Pi, Dl._ = Pi) : Bt._ = Pi;
  }).call(Ra);
})(Os, Os.exports);
Os.exports;
var wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.TokenData = void 0;
wi.parse = ed;
wi.compile = WS;
wi.match = BS;
wi.pathToRegexp = $v;
const Nv = "/", Qc = (e) => e, RS = new RegExp("^\\p{XID_Continue}$", "u"), za = "https://git.new/pathToRegexpError", $S = {
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
function FS(e) {
  const t = [...e], n = [];
  let r = 0;
  for (; r < t.length; ) {
    const a = t[r], o = $S[a];
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
      for (; RS.test(t[++r]); )
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
  return n.push({ type: "END", index: r, value: "" }), new LS(n);
}
class LS {
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
  const { encodePath: n = Qc, delimiter: r = n(Nv) } = t, a = [], o = FS(e);
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
      const h = o.text(), g = o.tryConsume("NAME"), x = o.tryConsume("PATTERN"), b = o.text(), O = o.tryConsume(";") && o.text();
      o.consume("}");
      const _ = o.modifier();
      a.push({
        name: g || (x ? String(l++) : ""),
        prefix: n(h),
        suffix: n(b),
        pattern: x,
        modifier: _,
        separator: O
      });
      continue;
    }
    o.consume("END");
    break;
  } while (!0);
  return new el(a, r);
}
function WS(e, t = {}) {
  const n = e instanceof el ? e : ed(e, t);
  return zS(n, t);
}
function VS(e, t) {
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
function zS(e, t) {
  const { encode: n = encodeURIComponent, loose: r = !0, validate: a = !0, strict: o = !1 } = t, l = jv(t), u = td(r, e.delimiter), d = Rv(e, u, [], l, o), p = e.tokens.map((h, g) => {
    const x = VS(h, n);
    if (!a || typeof h == "string")
      return x;
    const b = new RegExp(`^${d[g]}$`, l);
    return (O) => {
      const _ = x(O);
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
function BS(e, t = {}) {
  const { decode: n = decodeURIComponent, loose: r = !0, delimiter: a = Nv } = t, o = $v(e, t), l = td(r, a), u = o.keys.map((d) => {
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
      const O = o.keys[b - 1], _ = u[b - 1];
      x[O.name] = _(p[b]);
    }
    return { path: h, index: g, params: x };
  };
}
function Qi(e) {
  return e.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
}
function HS(e, t) {
  const n = Qi(e);
  return t ? `(?:${n})+(?!${n})` : n;
}
function td(e, t) {
  if (!e)
    return Qi;
  const n = new RegExp(`(?:(?!${Qi(t)}).)+|(.)`, "g");
  return (r) => r.replace(n, HS);
}
function jv(e) {
  return e.sensitive ? "" : "i";
}
function em(e, t, n, r) {
  const a = e instanceof el ? e : ed(e, r), { trailing: o = !0, loose: l = !0, start: u = !0, end: d = !0, strict: p = !1 } = r, h = td(l, a.delimiter), g = Rv(a, h, t, n, p);
  let x = u ? "^" : "";
  return x += g.join(""), o && (x += `(?:${h(a.delimiter)}$)?`), x += d ? "$" : `(?=${Qi(a.delimiter)}|$)`, x;
}
function Rv(e, t, n, r, a) {
  const o = `(?:(?!${Qi(e.delimiter)}).)+?`;
  let l = "", u = !0;
  return e.tokens.map((d) => {
    if (typeof d == "string")
      return l = d, t(d);
    const { prefix: p = "", suffix: h = "", separator: g = h + p, modifier: x = "" } = d, b = t(p), O = t(h);
    if (d.name) {
      const _ = d.pattern ? `(?:${d.pattern})` : o, w = US(_, d.name, r);
      if (u || (u = Nu(w, p || l)), !u)
        throw new TypeError(`Ambiguous pattern for "${d.name}": ${za}`);
      if (u = !a || Nu(w, h), l = "", n.push(d), x === "+" || x === "*") {
        const P = x === "*" ? "?" : "", C = t(g);
        if (!C)
          throw new TypeError(`Missing separator for "${d.name}": ${za}`);
        if (u || (u = !a || Nu(w, g)), !u)
          throw new TypeError(`Ambiguous pattern for "${d.name}" separator: ${za}`);
        return u = !a, `(?:${b}(${_}(?:${C}${_})*)${O})${P}`;
      }
      return `(?:${b}(${_})${O})${x}`;
    }
    return `(?:${b}${O})${x}`;
  });
}
function US(e, t, n) {
  try {
    return new RegExp(`^${e}$`, n);
  } catch (r) {
    throw new TypeError(`Invalid pattern for "${t}": ${r.message}`);
  }
}
function Nu(e, t) {
  return t ? !e.test(t) : !1;
}
function $v(e, t = {}) {
  const n = [], r = jv(t);
  if (Array.isArray(e)) {
    const o = e.map((l) => em(l, n, r, t));
    return Object.assign(new RegExp(o.join("|")), { keys: n });
  }
  const a = em(e, n, r, t);
  return Object.assign(new RegExp(a), { keys: n });
}
const Fv = ({
  component: e,
  ...t
}) => /* @__PURE__ */ jS.jsx(e, { ...t });
function tm(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Lv(...e) {
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
  return J.useCallback(Lv(...e), e);
}
var Tt = J.forwardRef((e, t) => {
  const { children: n, ...r } = e, a = J.Children.toArray(n), o = a.find(qS);
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
    const a = GS(n);
    return J.cloneElement(n, {
      ...KS(r, n.props),
      // @ts-ignore
      ref: t ? Lv(t, a) : a
    });
  }
  return J.Children.count(n) > 1 ? J.Children.only(null) : null;
});
_c.displayName = "SlotClone";
var YS = ({ children: e }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: e });
function qS(e) {
  return J.isValidElement(e) && e.type === YS;
}
function KS(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? a && o ? n[r] = (...u) => {
      o(...u), a(...u);
    } : a && (n[r] = a) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function GS(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const nd = (e) => e.type === "select-multiple", Wv = J.createContext({}), XS = ({
  asChild: e,
  className: t,
  disabled: n,
  ref: r,
  variant: a = "input",
  checked: o,
  ...l
}) => {
  const u = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(Wv.Provider, { value: { disabled: n }, children: /* @__PURE__ */ v.jsx(
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
}, ZS = ({ asChild: e, className: t, variant: n = "hidden", ...r }) => {
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
}, JS = ({ asChild: e, className: t, ...n }) => {
  const r = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(r, { className: Pe("flex flex-1 rounded overflow-hidden", t), ...n });
}, Vv = (e) => {
  const t = [];
  return J.Children.forEach(e, (n) => {
    J.isValidElement(n) && n.type === J.Fragment ? t.push(...Vv(n.props.children)) : J.isValidElement(n) && t.push(n);
  }), t;
}, QS = ({ asChild: e, className: t, children: n, ...r }) => {
  const a = Vv(n), { disabled: o } = Yt(Wv);
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
}, eD = ({
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
}, tD = (e) => e.type === "checkbox", nD = (e) => {
  if (e.target)
    return nd(e.target) ? Array.from(e.target.selectedOptions, (t) => t.value) : tD(e.target) ? e.target.checked : e.target.value;
}, Xt = (e, t, n) => {
  const [r, a] = Ki(e, t);
  return [r, (l) => {
    a(nD(l)), n == null || n(l);
  }];
}, ke = Object.assign(XS, {
  Content: JS,
  Controls: QS,
  ControlButton: eD,
  Native: ZS
});
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rD = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var iD = {
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
const aD = Js(
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
      ...iD,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: zv("lucide", a),
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
    ({ className: r, ...a }, o) => yc(aD, {
      ref: o,
      iconNode: t,
      className: zv(`lucide-${rD(e)}`, r),
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
const Bv = qt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oD = qt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sD = qt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lD = qt("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uD = qt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cD = qt("ExternalLink", [
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
const dD = qt("FileArchive", [
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
const fD = qt("FileImage", [
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
const pD = qt("FileSpreadsheet", [
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
const hD = qt("FileVideo", [
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
const mD = qt("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gD = qt("Loader", [
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
const vD = qt("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yD = qt("Search", [
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
}, Hv = (e, t) => {
  const n = Array.from(e.options);
  Array.isArray(t) ? n.forEach((r) => {
    r.selected = t.includes(r.value);
  }) : n.forEach((r) => {
    r.selected = r.value === t;
  }), e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}, xB = (e) => nd(e) ? Array.from(e.selectedOptions).map((t) => t.value) : e.value, bB = (e, t) => {
  var r;
  const n = (r = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")) == null ? void 0 : r.set;
  n == null || n.call(e, t), e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}, Uv = ({
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
}, Yv = ({ className: e, ...t }) => /* @__PURE__ */ v.jsx("div", { className: Pe("flex flex-col gap-1", e), ...t }), qv = ({ className: e, ...t }) => /* @__PURE__ */ v.jsxs("label", { className: Pe("text-sm font-medium", e), ...t, children: [
  t.children,
  " ",
  t.required && /* @__PURE__ */ v.jsx("span", { className: "text-red-500", children: "*" })
] }), Kv = ({ className: e, ...t }) => /* @__PURE__ */ v.jsx("p", { className: Pe("text-sm text-error-500 whitespace-pre-line", e), ...t }), Gv = ({ className: e, ...t }) => /* @__PURE__ */ v.jsx("p", { className: Pe("text-sm text-neutral-500", e), ...t }), sr = ({ ref: e, label: t, error: n, helpText: r, widget: a, className: o, ...l }) => {
  const u = Cv(), d = J.useRef(null);
  return ct(() => {
    d.current && d.current.setCustomValidity(n || "");
  }, [n]), /* @__PURE__ */ v.jsxs(Yv, { className: o, "data-error": n || void 0, "data-invalid": n ? "" : void 0, children: [
    t && /* @__PURE__ */ v.jsx(qv, { required: l.required, htmlFor: l.id || u, children: t }),
    /* @__PURE__ */ v.jsx(Fv, { component: a || Uv, ...l, ref: nn(d, e), id: l.id || u }),
    n ? /* @__PURE__ */ v.jsx(Kv, { children: (n == null ? void 0 : n.message) || n }) : r && /* @__PURE__ */ v.jsx(Gv, { children: r })
  ] });
}, ts = Object.assign(Yv, {
  Label: qv,
  Error: Kv,
  HelpText: Gv
}), xD = ({ className: e, indeterminate: t, ...n }) => {
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
        /* @__PURE__ */ v.jsx(ke.Content, { className: "text-white justify-center items-center", children: t ? /* @__PURE__ */ v.jsx(vD, {}) : a && /* @__PURE__ */ v.jsx(tl, {}) })
      ]
    }
  );
}, wB = ({
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
  const h = Cv(), g = (x) => {
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
          Fv,
          {
            defaultChecked: o,
            checked: l,
            className: Pe(!d && "mt-0.5"),
            component: a || xD,
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
function Xv(e, t = []) {
  let n = [];
  function r(o, l) {
    const u = J.createContext(l), d = n.length;
    n = [...n, l];
    const p = (g) => {
      var P;
      const { scope: x, children: b, ...O } = g, _ = ((P = x == null ? void 0 : x[e]) == null ? void 0 : P[d]) || u, w = J.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ v.jsx(_.Provider, { value: w, children: b });
    };
    p.displayName = o + "Provider";
    function h(g, x) {
      var _;
      const b = ((_ = x == null ? void 0 : x[e]) == null ? void 0 : _[d]) || u, O = J.useContext(b);
      if (O) return O;
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
  return a.scopeName = e, [r, bD(a, ...t)];
}
function bD(...e) {
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
var wD = [
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
], Cr = wD.reduce((e, t) => {
  const n = J.forwardRef((r, a) => {
    const { asChild: o, ...l } = r, u = o ? Tt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(u, { ...l, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function _D(e, t) {
  e && Ov.flushSync(() => e.dispatchEvent(t));
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
function ED(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Br(e);
  J.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var CD = "DismissableLayer", Ec = "dismissableLayer.update", TD = "dismissableLayer.pointerDownOutside", OD = "dismissableLayer.focusOutside", nm, Zv = J.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Jv = J.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: l,
      onDismiss: u,
      ...d
    } = e, p = J.useContext(Zv), [h, g] = J.useState(null), x = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, b] = J.useState({}), O = Kr(t, (ee) => g(ee)), _ = Array.from(p.layers), [w] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), P = _.indexOf(w), C = h ? _.indexOf(h) : -1, k = p.layersWithOutsidePointerEventsDisabled.size > 0, D = C >= P, S = kD((ee) => {
      const ne = ee.target, V = [...p.branches].some((Y) => Y.contains(ne));
      !D || V || (a == null || a(ee), l == null || l(ee), ee.defaultPrevented || u == null || u());
    }, x), Q = PD((ee) => {
      const ne = ee.target;
      [...p.branches].some((Y) => Y.contains(ne)) || (o == null || o(ee), l == null || l(ee), ee.defaultPrevented || u == null || u());
    }, x);
    return ED((ee) => {
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
        ref: O,
        style: {
          pointerEvents: k ? D ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Vr(e.onFocusCapture, Q.onFocusCapture),
        onBlurCapture: Vr(e.onBlurCapture, Q.onBlurCapture),
        onPointerDownCapture: Vr(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
Jv.displayName = CD;
var SD = "DismissableLayerBranch", DD = J.forwardRef((e, t) => {
  const n = J.useContext(Zv), r = J.useRef(null), a = Kr(t, r);
  return J.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ v.jsx(Cr.div, { ...e, ref: a });
});
DD.displayName = SD;
function kD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Br(e), r = J.useRef(!1), a = J.useRef(() => {
  });
  return J.useEffect(() => {
    const o = (u) => {
      if (u.target && !r.current) {
        let d = function() {
          Qv(
            TD,
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
function PD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Br(e), r = J.useRef(!1);
  return J.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && Qv(OD, n, { originalEvent: o }, {
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
function Qv(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? _D(a, o) : a.dispatchEvent(o);
}
var Ru = 0;
function AD() {
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
var $u = "focusScope.autoFocusOnMount", Fu = "focusScope.autoFocusOnUnmount", am = { bubbles: !1, cancelable: !0 }, ID = "FocusScope", ey = J.forwardRef((e, t) => {
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
          for (const S of k)
            S.removedNodes.length > 0 && Lr(u);
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
        u.addEventListener($u, p), u.dispatchEvent(P), P.defaultPrevented || (MD(FD(ty(u)), { select: !0 }), document.activeElement === _ && Lr(u));
      }
      return () => {
        u.removeEventListener($u, p), setTimeout(() => {
          const P = new CustomEvent(Fu, am);
          u.addEventListener(Fu, h), u.dispatchEvent(P), P.defaultPrevented || Lr(_ ?? document.body, { select: !0 }), u.removeEventListener(Fu, h), sm.remove(b);
        }, 0);
      };
    }
  }, [u, p, h, b]);
  const O = J.useCallback(
    (_) => {
      if (!n && !r || b.paused) return;
      const w = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey, P = document.activeElement;
      if (w && P) {
        const C = _.currentTarget, [k, D] = ND(C);
        k && D ? !_.shiftKey && P === D ? (_.preventDefault(), n && Lr(k, { select: !0 })) : _.shiftKey && P === k && (_.preventDefault(), n && Lr(D, { select: !0 })) : P === C && _.preventDefault();
      }
    },
    [n, r, b.paused]
  );
  return /* @__PURE__ */ v.jsx(Cr.div, { tabIndex: -1, ...l, ref: x, onKeyDown: O });
});
ey.displayName = ID;
function MD(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Lr(r, { select: t }), document.activeElement !== n) return;
}
function ND(e) {
  const t = ty(e), n = om(t, e), r = om(t.reverse(), e);
  return [n, r];
}
function ty(e) {
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
    if (!jD(n, { upTo: t })) return n;
}
function jD(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function RD(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Lr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && RD(e) && t && e.select();
  }
}
var sm = $D();
function $D() {
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
function FD(e) {
  return e.filter((t) => t.tagName !== "A");
}
var vi = globalThis != null && globalThis.document ? J.useLayoutEffect : () => {
}, LD = J.useId || (() => {
}), WD = 0;
function VD(e) {
  const [t, n] = J.useState(LD());
  return vi(() => {
    e || n((r) => r ?? String(WD++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const zD = ["top", "right", "bottom", "left"], Hr = Math.min, _n = Math.max, Ss = Math.round, ns = Math.floor, ir = (e) => ({
  x: e,
  y: e
}), BD = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, HD = {
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
function UD(e, t, n) {
  n === void 0 && (n = !1);
  const r = oa(e), a = ad(e), o = id(a);
  let l = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (l = Ds(l)), [l, Ds(l)];
}
function YD(e) {
  const t = Ds(e);
  return [Tc(e), t, Tc(t)];
}
function Tc(e) {
  return e.replace(/start|end/g, (t) => HD[t]);
}
function qD(e, t, n) {
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
function KD(e, t, n, r) {
  const a = oa(e);
  let o = qD(Er(e), n === "start", r);
  return a && (o = o.map((l) => l + "-" + a), t && (o = o.concat(o.map(Tc)))), o;
}
function Ds(e) {
  return e.replace(/left|right|bottom|top/g, (t) => BD[t]);
}
function GD(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ny(e) {
  return typeof e != "number" ? GD(e) : {
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
const XD = async (e, t, n) => {
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
  } = um(p, r, d), x = r, b = {}, O = 0;
  for (let _ = 0; _ < u.length; _++) {
    const {
      name: w,
      fn: P
    } = u[_], {
      x: C,
      y: k,
      data: D,
      reset: S
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
    }, S && O <= 50 && (O++, typeof S == "object" && (S.placement && (x = S.placement), S.rects && (p = S.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : S.rects), {
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
  } = _r(t, e), O = ny(b), w = u[x ? g === "floating" ? "reference" : "floating" : g], P = ks(await o.getClippingRect({
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
  }, S = ks(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const ZD = (e) => ({
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
    const g = ny(h), x = {
      x: n,
      y: r
    }, b = ad(a), O = id(b), _ = await l.getDimensions(p), w = b === "y", P = w ? "top" : "left", C = w ? "bottom" : "right", k = w ? "clientHeight" : "clientWidth", D = o.reference[O] + o.reference[b] - x[b] - o.floating[O], S = x[b] - o.reference[b], Q = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(p));
    let ee = Q ? Q[k] : 0;
    (!ee || !await (l.isElement == null ? void 0 : l.isElement(Q))) && (ee = u.floating[k] || o.floating[O]);
    const ne = D / 2 - S / 2, V = ee / 2 - _[O] / 2 - 1, Y = Hr(g[P], V), te = Hr(g[C], V), R = Y, B = ee - _[O] - te, z = ee / 2 - _[O] / 2 + ne, U = Cc(R, z, B), K = !d.arrow && oa(a) != null && z !== U && o.reference[O] / 2 - (z < R ? Y : te) - _[O] / 2 < 0, j = K ? z < R ? z - R : z - B : 0;
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
}), JD = function(e) {
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
        fallbackAxisSideDirection: O = "none",
        flipAlignment: _ = !0,
        ...w
      } = _r(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const P = Er(a), C = Ur(u), k = Er(u) === u, D = await (d.isRTL == null ? void 0 : d.isRTL(p.floating)), S = x || (k || !_ ? [Ds(u)] : YD(u)), Q = O !== "none";
      !x && Q && S.push(...KD(u, _, O, D));
      const ee = [u, ...S], ne = await qa(t, w), V = [];
      let Y = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (h && V.push(ne[P]), g) {
        const z = UD(a, l, D);
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
              var B;
              const j = (B = Y.filter((I) => {
                if (Q) {
                  const X = Ur(I.placement);
                  return X === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((X) => X > 0).reduce((X, M) => X + M, 0)]).sort((I, X) => I[1] - X[1])[0]) == null ? void 0 : B[0];
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
  return zD.some((t) => e[t] >= 0);
}
const QD = function(e) {
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
async function ek(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), l = Er(n), u = oa(n), d = Ur(n) === "y", p = ["left", "top"].includes(l) ? -1 : 1, h = o && d ? -1 : 1, g = _r(t, e);
  let {
    mainAxis: x,
    crossAxis: b,
    alignmentAxis: O
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return u && typeof O == "number" && (b = u === "end" ? O * -1 : O), d ? {
    x: b * h,
    y: x * p
  } : {
    x: x * p,
    y: b * h
  };
}
const tk = function(e) {
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
      } = t, d = await ek(t, e);
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
}, nk = function(e) {
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
      let b = p[x], O = p[g];
      if (o) {
        const w = x === "y" ? "top" : "left", P = x === "y" ? "bottom" : "right", C = b + h[w], k = b - h[P];
        b = Cc(C, b, k);
      }
      if (l) {
        const w = g === "y" ? "top" : "left", P = g === "y" ? "bottom" : "right", C = O + h[w], k = O - h[P];
        O = Cc(C, O, k);
      }
      const _ = u.fn({
        ...t,
        [x]: b,
        [g]: O
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
}, rk = function(e) {
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
      let b = h[x], O = h[g];
      const _ = _r(u, t), w = typeof _ == "number" ? {
        mainAxis: _,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ..._
      };
      if (d) {
        const k = x === "y" ? "height" : "width", D = o.reference[x] - o.floating[k] + w.mainAxis, S = o.reference[x] + o.reference[k] - w.mainAxis;
        b < D ? b = D : b > S && (b = S);
      }
      if (p) {
        var P, C;
        const k = x === "y" ? "width" : "height", D = ["top", "left"].includes(Er(a)), S = o.reference[g] - o.floating[k] + (D && ((P = l.offset) == null ? void 0 : P[g]) || 0) + (D ? 0 : w.crossAxis), Q = o.reference[g] + o.reference[k] + (D ? 0 : ((C = l.offset) == null ? void 0 : C[g]) || 0) - (D ? w.crossAxis : 0);
        O < S ? O = S : O > Q && (O = Q);
      }
      return {
        [x]: b,
        [g]: O
      };
    }
  };
}, ik = function(e) {
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
        width: O,
        height: _
      } = o.floating;
      let w, P;
      g === "top" || g === "bottom" ? (w = g, P = x === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (P = g, w = x === "end" ? "top" : "bottom");
      const C = _ - h.top - h.bottom, k = O - h.left - h.right, D = Hr(_ - h[w], C), S = Hr(O - h[P], k), Q = !t.middlewareData.shift;
      let ee = D, ne = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (ne = k), (r = t.middlewareData.shift) != null && r.enabled.y && (ee = C), Q && !x) {
        const Y = _n(h.left, 0), te = _n(h.right, 0), R = _n(h.top, 0), B = _n(h.bottom, 0);
        b ? ne = O - 2 * (Y !== 0 || te !== 0 ? Y + te : _n(h.left, h.right)) : ee = _ - 2 * (R !== 0 || B !== 0 ? R + B : _n(h.top, h.bottom));
      }
      await d({
        ...t,
        availableWidth: ne,
        availableHeight: ee
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
function nl() {
  return typeof window < "u";
}
function sa(e) {
  return ry(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function En(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function lr(e) {
  var t;
  return (t = (ry(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ry(e) {
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
function ak(e) {
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
function ok(e) {
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
function iy(e) {
  const t = Yr(e);
  return ea(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ar(t) && eo(t) ? t : iy(t);
}
function Ka(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = iy(e), o = a === ((r = e.ownerDocument) == null ? void 0 : r.body), l = En(a);
  if (o) {
    const u = Oc(l);
    return t.concat(l, l.visualViewport || [], eo(a) ? a : [], u && n ? Ka(u) : []);
  }
  return t.concat(a, Ka(a, [], n));
}
function Oc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ay(e) {
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
  } = ay(t);
  let l = (o ? Ss(n.width) : n.width) / r, u = (o ? Ss(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const sk = /* @__PURE__ */ ir(0);
function oy(e) {
  const t = En(e);
  return !sd() || !t.visualViewport ? sk : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function lk(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== En(e) ? !1 : t;
}
function yi(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = ld(e);
  let l = ir(1);
  t && (r ? Un(r) && (l = Gi(r)) : l = Gi(e));
  const u = lk(o, n, r) ? oy(o) : ir(0);
  let d = (a.left + u.x) / l.x, p = (a.top + u.y) / l.y, h = a.width / l.x, g = a.height / l.y;
  if (o) {
    const x = En(o), b = r && Un(r) ? En(r) : r;
    let O = x, _ = Oc(O);
    for (; _ && r && b !== O; ) {
      const w = Gi(_), P = _.getBoundingClientRect(), C = Yn(_), k = P.left + (_.clientLeft + parseFloat(C.paddingLeft)) * w.x, D = P.top + (_.clientTop + parseFloat(C.paddingTop)) * w.y;
      d *= w.x, p *= w.y, h *= w.x, g *= w.y, d += k, p += D, O = En(_), _ = Oc(O);
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
function sy(e, t, n) {
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
function uk(e) {
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
  const x = l && !g && !o ? sy(l, d, !0) : ir(0);
  return {
    width: n.width * p.x,
    height: n.height * p.y,
    x: n.x * p.x - d.scrollLeft * p.x + h.x + x.x,
    y: n.y * p.y - d.scrollTop * p.y + h.y + x.y
  };
}
function ck(e) {
  return Array.from(e.getClientRects());
}
function dk(e) {
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
function fk(e, t) {
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
function pk(e, t) {
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
    r = fk(e, n);
  else if (t === "document")
    r = dk(lr(e));
  else if (Un(t))
    r = pk(t, n);
  else {
    const a = oy(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return ks(r);
}
function ly(e, t) {
  const n = Yr(e);
  return n === t || !Un(n) || ea(n) ? !1 : Yn(n).position === "fixed" || ly(n, t);
}
function hk(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ka(e, [], !1).filter((u) => Un(u) && sa(u) !== "body"), a = null;
  const o = Yn(e).position === "fixed";
  let l = o ? Yr(e) : e;
  for (; Un(l) && !ea(l); ) {
    const u = Yn(l), d = od(l);
    !d && u.position === "fixed" && (a = null), (o ? !d && !a : !d && u.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || eo(l) && !d && ly(e, l)) ? r = r.filter((h) => h !== l) : a = u, l = Yr(l);
  }
  return t.set(e, r), r;
}
function mk(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? rl(t) ? [] : hk(t, this._c) : [].concat(n), r], u = l[0], d = l.reduce((p, h) => {
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
function gk(e) {
  const {
    width: t,
    height: n
  } = ay(e);
  return {
    width: t,
    height: n
  };
}
function vk(e, t, n) {
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
  const p = a && !r && !o ? sy(a, u) : ir(0), h = l.left + u.scrollLeft - d.x - p.x, g = l.top + u.scrollTop - d.y - p.y;
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
function uy(e, t) {
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
  for (; r && ak(r) && Lu(r); )
    r = hm(r, t);
  return r && ea(r) && Lu(r) && !od(r) ? n : r || ok(e) || n;
}
const yk = async function(e) {
  const t = this.getOffsetParent || uy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: vk(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function xk(e) {
  return Yn(e).direction === "rtl";
}
const bk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: uk,
  getDocumentElement: lr,
  getClippingRect: mk,
  getOffsetParent: uy,
  getElementRects: yk,
  getClientRects: ck,
  getDimensions: gk,
  getScale: Gi,
  isElement: Un,
  isRTL: xk
};
function cy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function wk(e, t) {
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
    const O = ns(g), _ = ns(a.clientWidth - (h + x)), w = ns(a.clientHeight - (g + b)), P = ns(h), k = {
      rootMargin: -O + "px " + -_ + "px " + -w + "px " + -P + "px",
      threshold: _n(0, Hr(1, d)) || 1
    };
    let D = !0;
    function S(Q) {
      const ee = Q[0].intersectionRatio;
      if (ee !== d) {
        if (!D)
          return l();
        ee ? l(!1, ee) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      ee === 1 && !cy(p, e.getBoundingClientRect()) && l(), D = !1;
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
function _k(e, t, n, r) {
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
  const g = p && u ? wk(p, n) : null;
  let x = -1, b = null;
  l && (b = new ResizeObserver((P) => {
    let [C] = P;
    C && C.target === p && b && (b.unobserve(t), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var k;
      (k = b) == null || k.observe(t);
    })), n();
  }), p && !d && b.observe(p), b.observe(t));
  let O, _ = d ? yi(e) : null;
  d && w();
  function w() {
    const P = yi(e);
    _ && !cy(_, P) && n(), _ = P, O = requestAnimationFrame(w);
  }
  return n(), () => {
    var P;
    h.forEach((C) => {
      a && C.removeEventListener("scroll", n), o && C.removeEventListener("resize", n);
    }), g == null || g(), (P = b) == null || P.disconnect(), b = null, d && cancelAnimationFrame(O);
  };
}
const Ek = tk, Ck = nk, Tk = JD, Ok = ik, Sk = QD, mm = ZD, Dk = rk, kk = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: bk,
    ...n
  }, o = {
    ...a.platform,
    _c: r
  };
  return XD(e, t, {
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
function dy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gm(e, t) {
  const n = dy(e);
  return Math.round(t * n) / n;
}
function Wu(e) {
  const t = J.useRef(e);
  return gs(() => {
    t.current = e;
  }), t;
}
function Pk(e) {
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
  const [O, _] = J.useState(null), [w, P] = J.useState(null), C = J.useCallback((I) => {
    I !== Q.current && (Q.current = I, _(I));
  }, []), k = J.useCallback((I) => {
    I !== ee.current && (ee.current = I, P(I));
  }, []), D = o || O, S = l || w, Q = J.useRef(null), ee = J.useRef(null), ne = J.useRef(h), V = d != null, Y = Wu(d), te = Wu(a), R = Wu(p), B = J.useCallback(() => {
    if (!Q.current || !ee.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: x
    };
    te.current && (I.platform = te.current), kk(Q.current, ee.current, I).then((X) => {
      const M = {
        ...X,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      z.current && !Ps(ne.current, M) && (ne.current = M, Ov.flushSync(() => {
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
    if (D && (Q.current = D), S && (ee.current = S), D && S) {
      if (Y.current)
        return Y.current(D, S, B);
      B();
    }
  }, [D, S, B, Y, V]);
  const U = J.useMemo(() => ({
    reference: Q,
    floating: ee,
    setReference: C,
    setFloating: k
  }), [C, k]), K = J.useMemo(() => ({
    reference: D,
    floating: S
  }), [D, S]), j = J.useMemo(() => {
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
      ...dy(K.floating) >= 1.5 && {
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
    update: B,
    refs: U,
    elements: K,
    floatingStyles: j
  }), [h, B, U, K, j]);
}
const Ak = (e) => {
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
}, Ik = (e, t) => ({
  ...Ek(e),
  options: [e, t]
}), Mk = (e, t) => ({
  ...Ck(e),
  options: [e, t]
}), Nk = (e, t) => ({
  ...Dk(e),
  options: [e, t]
}), jk = (e, t) => ({
  ...Tk(e),
  options: [e, t]
}), Rk = (e, t) => ({
  ...Ok(e),
  options: [e, t]
}), $k = (e, t) => ({
  ...Sk(e),
  options: [e, t]
}), Fk = (e, t) => ({
  ...Ak(e),
  options: [e, t]
});
var Lk = "Arrow", fy = J.forwardRef((e, t) => {
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
fy.displayName = Lk;
var Wk = fy;
function Vk(e) {
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
var cd = "Popper", [py, hy] = Xv(cd), [zk, my] = py(cd), gy = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = J.useState(null);
  return /* @__PURE__ */ v.jsx(zk, { scope: t, anchor: r, onAnchorChange: a, children: n });
};
gy.displayName = cd;
var vy = "PopperAnchor", yy = J.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...a } = e, o = my(vy, n), l = J.useRef(null), u = Kr(t, l);
    return J.useEffect(() => {
      o.onAnchorChange((r == null ? void 0 : r.current) || l.current);
    }), r ? null : /* @__PURE__ */ v.jsx(Cr.div, { ...a, ref: u });
  }
);
yy.displayName = vy;
var dd = "PopperContent", [Bk, Hk] = py(dd), xy = J.forwardRef(
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
      onPlaced: O,
      ..._
    } = e, w = my(dd, n), [P, C] = J.useState(null), k = Kr(t, (Re) => C(Re)), [D, S] = J.useState(null), Q = Vk(D), ee = (Q == null ? void 0 : Q.width) ?? 0, ne = (Q == null ? void 0 : Q.height) ?? 0, V = r + (o !== "center" ? "-" + o : ""), Y = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, te = Array.isArray(p) ? p : [p], R = te.length > 0, B = {
      padding: Y,
      boundary: te.filter(Yk),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: R
    }, { refs: z, floatingStyles: U, placement: K, isPositioned: j, middlewareData: I } = Pk({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: V,
      whileElementsMounted: (...Re) => _k(...Re, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Ik({ mainAxis: a + ne, alignmentAxis: l }),
        d && Mk({
          mainAxis: !0,
          crossAxis: !1,
          limiter: g === "partial" ? Nk() : void 0,
          ...B
        }),
        d && jk({ ...B }),
        Rk({
          ...B,
          apply: ({ elements: Re, rects: ve, availableWidth: et, availableHeight: rt }) => {
            const { width: Ke, height: N } = ve.reference, Z = Re.floating.style;
            Z.setProperty("--radix-popper-available-width", `${et}px`), Z.setProperty("--radix-popper-available-height", `${rt}px`), Z.setProperty("--radix-popper-anchor-width", `${Ke}px`), Z.setProperty("--radix-popper-anchor-height", `${N}px`);
          }
        }),
        D && Fk({ element: D, padding: u }),
        qk({ arrowWidth: ee, arrowHeight: ne }),
        x && $k({ strategy: "referenceHidden", ...B })
      ]
    }), [X, M] = _y(K), L = Br(O);
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
          Bk,
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
xy.displayName = dd;
var by = "PopperArrow", Uk = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, wy = J.forwardRef(function(t, n) {
  const { __scopePopper: r, ...a } = t, o = Hk(by, r), l = Uk[o.placedSide];
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
          Wk,
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
wy.displayName = by;
function Yk(e) {
  return e !== null;
}
var qk = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, P, C;
    const { placement: n, rects: r, middlewareData: a } = t, l = ((w = a.arrow) == null ? void 0 : w.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, d = l ? 0 : e.arrowHeight, [p, h] = _y(n), g = { start: "0%", center: "50%", end: "100%" }[h], x = (((P = a.arrow) == null ? void 0 : P.x) ?? 0) + u / 2, b = (((C = a.arrow) == null ? void 0 : C.y) ?? 0) + d / 2;
    let O = "", _ = "";
    return p === "bottom" ? (O = l ? g : `${x}px`, _ = `${-d}px`) : p === "top" ? (O = l ? g : `${x}px`, _ = `${r.floating.height + d}px`) : p === "right" ? (O = `${-d}px`, _ = l ? g : `${b}px`) : p === "left" && (O = `${r.floating.width + d}px`, _ = l ? g : `${b}px`), { data: { x: O, y: _ } };
  }
});
function _y(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Kk = gy, Ey = yy, Gk = xy, Xk = wy, Zk = "Portal", Cy = J.forwardRef((e, t) => {
  var u;
  const { container: n, ...r } = e, [a, o] = J.useState(!1);
  vi(() => o(!0), []);
  const l = n || a && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? XO.createPortal(/* @__PURE__ */ v.jsx(Cr.div, { ...r, ref: t }), l) : null;
});
Cy.displayName = Zk;
function Jk(e, t) {
  return J.useReducer((n, r) => t[n][r] ?? n, e);
}
var fd = (e) => {
  const { present: t, children: n } = e, r = Qk(t), a = typeof n == "function" ? n({ present: r.isPresent }) : J.Children.only(n), o = Kr(r.ref, eP(a));
  return typeof n == "function" || r.isPresent ? J.cloneElement(a, { ref: o }) : null;
};
fd.displayName = "Presence";
function Qk(e) {
  const [t, n] = J.useState(), r = J.useRef({}), a = J.useRef(e), o = J.useRef("none"), l = e ? "mounted" : "unmounted", [u, d] = Jk(l, {
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
function eP(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function tP({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, a] = nP({ defaultProp: t, onChange: n }), o = e !== void 0, l = o ? e : r, u = Br(n), d = J.useCallback(
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
function nP({
  defaultProp: e,
  onChange: t
}) {
  const n = J.useState(e), [r] = n, a = J.useRef(r), o = Br(t);
  return J.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [r, a, o]), n;
}
var rP = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Wi = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), as = {}, Vu = 0, Ty = function(e) {
  return e && (e.host || Ty(e.parentNode));
}, iP = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ty(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, aP = function(e, t, n, r) {
  var a = iP(t, Array.isArray(e) ? e : [e]);
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
          var b = x.getAttribute(r), O = b !== null && b !== "false", _ = (Wi.get(x) || 0) + 1, w = (o.get(x) || 0) + 1;
          Wi.set(x, _), o.set(x, w), l.push(x), _ === 1 && O && is.set(x, !0), w === 1 && x.setAttribute(n, "true"), O || x.setAttribute(r, "true");
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
}, oP = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = rP(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), aP(r, a, n, "aria-hidden")) : function() {
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
function Oy(e, t) {
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
function sP(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var vs = "right-scroll-bar-position", ys = "width-before-scroll-bar", lP = "with-scroll-bars-hidden", uP = "--removed-body-scroll-bar-size";
function zu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function cP(e, t) {
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
var dP = typeof window < "u" ? J.useLayoutEffect : J.useEffect, vm = /* @__PURE__ */ new WeakMap();
function fP(e, t) {
  var n = cP(null, function(r) {
    return e.forEach(function(a) {
      return zu(a, r);
    });
  });
  return dP(function() {
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
function pP(e) {
  return e;
}
function hP(e, t) {
  t === void 0 && (t = pP);
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
function mP(e) {
  e === void 0 && (e = {});
  var t = hP(null);
  return t.options = fn({ async: !0, ssr: !1 }, e), t;
}
var Sy = function(e) {
  var t = e.sideCar, n = Oy(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return J.createElement(r, fn({}, n));
};
Sy.isSideCarExport = !0;
function gP(e, t) {
  return e.useMedium(t), Sy;
}
var Dy = mP(), Bu = function() {
}, al = J.forwardRef(function(e, t) {
  var n = J.useRef(null), r = J.useState({
    onScrollCapture: Bu,
    onWheelCapture: Bu,
    onTouchMoveCapture: Bu
  }), a = r[0], o = r[1], l = e.forwardProps, u = e.children, d = e.className, p = e.removeScrollBar, h = e.enabled, g = e.shards, x = e.sideCar, b = e.noIsolation, O = e.inert, _ = e.allowPinchZoom, w = e.as, P = w === void 0 ? "div" : w, C = e.gapMode, k = Oy(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), D = x, S = fP([n, t]), Q = fn(fn({}, k), a);
  return J.createElement(
    J.Fragment,
    null,
    h && J.createElement(D, { sideCar: Dy, removeScrollBar: p, shards: g, noIsolation: b, inert: O, setCallbacks: o, allowPinchZoom: !!_, lockRef: n, gapMode: C }),
    l ? J.cloneElement(J.Children.only(u), fn(fn({}, Q), { ref: S })) : J.createElement(P, fn({}, Q, { className: d, ref: S }), u)
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
var vP = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function yP() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = vP();
  return t && e.setAttribute("nonce", t), e;
}
function xP(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function bP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var wP = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = yP()) && (xP(t, n), bP(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, _P = function() {
  var e = wP();
  return function(t, n) {
    J.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ky = function() {
  var e = _P(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, EP = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Hu = function(e) {
  return parseInt(e || "", 10) || 0;
}, CP = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Hu(n), Hu(r), Hu(a)];
}, TP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return EP;
  var t = CP(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, OP = ky(), Xi = "data-scroll-locked", SP = function(e, t, n, r) {
  var a = e.left, o = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(lP, ` {
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
    `).concat(uP, ": ").concat(u, `px;
  }
`);
}, ym = function() {
  var e = parseInt(document.body.getAttribute(Xi) || "0", 10);
  return isFinite(e) ? e : 0;
}, DP = function() {
  J.useEffect(function() {
    return document.body.setAttribute(Xi, (ym() + 1).toString()), function() {
      var e = ym() - 1;
      e <= 0 ? document.body.removeAttribute(Xi) : document.body.setAttribute(Xi, e.toString());
    };
  }, []);
}, kP = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  DP();
  var o = J.useMemo(function() {
    return TP(a);
  }, [a]);
  return J.createElement(OP, { styles: SP(o, !t, a, n ? "" : "!important") });
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
var Vi = Sc ? { passive: !1 } : !1, PP = function(e) {
  return e.tagName === "TEXTAREA";
}, Py = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !PP(e) && n[t] === "visible")
  );
}, AP = function(e) {
  return Py(e, "overflowY");
}, IP = function(e) {
  return Py(e, "overflowX");
}, xm = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = Ay(e, r);
    if (a) {
      var o = Iy(e, r), l = o[1], u = o[2];
      if (l > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, MP = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, NP = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ay = function(e, t) {
  return e === "v" ? AP(t) : IP(t);
}, Iy = function(e, t) {
  return e === "v" ? MP(t) : NP(t);
}, jP = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, RP = function(e, t, n, r, a) {
  var o = jP(e, window.getComputedStyle(t).direction), l = o * r, u = n.target, d = t.contains(u), p = !1, h = l > 0, g = 0, x = 0;
  do {
    var b = Iy(e, u), O = b[0], _ = b[1], w = b[2], P = _ - w - o * O;
    (O || P) && Ay(e, u) && (g += P, x += O), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
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
}, $P = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, FP = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, LP = 0, zi = [];
function WP(e) {
  var t = J.useRef([]), n = J.useRef([0, 0]), r = J.useRef(), a = J.useState(LP++)[0], o = J.useState(ky)[0], l = J.useRef(e);
  J.useEffect(function() {
    l.current = e;
  }, [e]), J.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var _ = sP([e.lockRef.current], (e.shards || []).map(wm), !0).filter(Boolean);
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
    var P = ss(_), C = n.current, k = "deltaX" in _ ? _.deltaX : C[0] - P[0], D = "deltaY" in _ ? _.deltaY : C[1] - P[1], S, Q = _.target, ee = Math.abs(k) > Math.abs(D) ? "h" : "v";
    if ("touches" in _ && ee === "h" && Q.type === "range")
      return !1;
    var ne = xm(ee, Q);
    if (!ne)
      return !0;
    if (ne ? S = ee : (S = ee === "v" ? "h" : "v", ne = xm(ee, Q)), !ne)
      return !1;
    if (!r.current && "changedTouches" in _ && (k || D) && (r.current = S), !S)
      return !0;
    var V = r.current || S;
    return RP(V, w, _, V === "h" ? k : D);
  }, []), d = J.useCallback(function(_) {
    var w = _;
    if (!(!zi.length || zi[zi.length - 1] !== o)) {
      var P = "deltaY" in w ? bm(w) : ss(w), C = t.current.filter(function(S) {
        return S.name === w.type && (S.target === w.target || w.target === S.shadowParent) && $P(S.delta, P);
      })[0];
      if (C && C.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!C) {
        var k = (l.current.shards || []).map(wm).filter(Boolean).filter(function(S) {
          return S.contains(w.target);
        }), D = k.length > 0 ? u(w, k[0]) : !l.current.noIsolation;
        D && w.cancelable && w.preventDefault();
      }
    }
  }, []), p = J.useCallback(function(_, w, P, C) {
    var k = { name: _, delta: w, target: P, should: C, shadowParent: VP(P) };
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
  var b = e.removeScrollBar, O = e.inert;
  return J.createElement(
    J.Fragment,
    null,
    O ? J.createElement(o, { styles: FP(a) }) : null,
    b ? J.createElement(kP, { gapMode: e.gapMode }) : null
  );
}
function VP(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const zP = gP(Dy, WP);
var My = J.forwardRef(function(e, t) {
  return J.createElement(al, fn({}, e, { ref: t, sideCar: zP }));
});
My.classNames = al.classNames;
var pd = "Popover", [Ny, _B] = Xv(pd, [
  hy
]), to = hy(), [BP, Gr] = Ny(pd), jy = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: l = !1
  } = e, u = to(t), d = J.useRef(null), [p, h] = J.useState(!1), [g = !1, x] = tP({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ v.jsx(Kk, { ...u, children: /* @__PURE__ */ v.jsx(
    BP,
    {
      scope: t,
      contentId: VD(),
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
jy.displayName = pd;
var Ry = "PopoverAnchor", $y = J.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Gr(Ry, n), o = to(n), { onCustomAnchorAdd: l, onCustomAnchorRemove: u } = a;
    return J.useEffect(() => (l(), () => u()), [l, u]), /* @__PURE__ */ v.jsx(Ey, { ...o, ...r, ref: t });
  }
);
$y.displayName = Ry;
var Fy = "PopoverTrigger", Ly = J.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Gr(Fy, n), o = to(n), l = Kr(t, a.triggerRef), u = /* @__PURE__ */ v.jsx(
      Cr.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": Hy(a.open),
        ...r,
        ref: l,
        onClick: Vr(e.onClick, a.onOpenToggle)
      }
    );
    return a.hasCustomAnchor ? u : /* @__PURE__ */ v.jsx(Ey, { asChild: !0, ...o, children: u });
  }
);
Ly.displayName = Fy;
var hd = "PopoverPortal", [HP, UP] = Ny(hd, {
  forceMount: void 0
}), Wy = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: a } = e, o = Gr(hd, t);
  return /* @__PURE__ */ v.jsx(HP, { scope: t, forceMount: n, children: /* @__PURE__ */ v.jsx(fd, { present: n || o.open, children: /* @__PURE__ */ v.jsx(Cy, { asChild: !0, container: a, children: r }) }) });
};
Wy.displayName = hd;
var ta = "PopoverContent", Vy = J.forwardRef(
  (e, t) => {
    const n = UP(ta, e.__scopePopover), { forceMount: r = n.forceMount, ...a } = e, o = Gr(ta, e.__scopePopover);
    return /* @__PURE__ */ v.jsx(fd, { present: r || o.open, children: o.modal ? /* @__PURE__ */ v.jsx(YP, { ...a, ref: t }) : /* @__PURE__ */ v.jsx(qP, { ...a, ref: t }) });
  }
);
Vy.displayName = ta;
var YP = J.forwardRef(
  (e, t) => {
    const n = Gr(ta, e.__scopePopover), r = J.useRef(null), a = Kr(t, r), o = J.useRef(!1);
    return J.useEffect(() => {
      const l = r.current;
      if (l) return oP(l);
    }, []), /* @__PURE__ */ v.jsx(My, { as: Tt, allowPinchZoom: !0, children: /* @__PURE__ */ v.jsx(
      zy,
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
), qP = J.forwardRef(
  (e, t) => {
    const n = Gr(ta, e.__scopePopover), r = J.useRef(!1), a = J.useRef(!1);
    return /* @__PURE__ */ v.jsx(
      zy,
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
), zy = J.forwardRef(
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
    return AD(), /* @__PURE__ */ v.jsx(
      ey,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: a,
        onUnmountAutoFocus: o,
        children: /* @__PURE__ */ v.jsx(
          Jv,
          {
            asChild: !0,
            disableOutsidePointerEvents: l,
            onInteractOutside: h,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: p,
            onDismiss: () => x.onOpenChange(!1),
            children: /* @__PURE__ */ v.jsx(
              Gk,
              {
                "data-state": Hy(x.open),
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
), By = "PopoverClose", KP = J.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Gr(By, n);
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
KP.displayName = By;
var GP = "PopoverArrow", XP = J.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = to(n);
    return /* @__PURE__ */ v.jsx(Xk, { ...a, ...r, ref: t });
  }
);
XP.displayName = GP;
function Hy(e) {
  return e ? "open" : "closed";
}
var ZP = jy, JP = $y, QP = Ly, eA = Wy, tA = Vy;
const nA = ZP, rA = QP, iA = ({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ref: r,
  forceMount: a,
  container: o,
  disableInteractions: l,
  onKeyDown: u,
  ...d
}) => /* @__PURE__ */ v.jsx(eA, { forceMount: a, container: o || document.querySelector("#root"), children: /* @__PURE__ */ v.jsx("div", { className: Pe(l && "pointer-events-none invisible"), children: /* @__PURE__ */ v.jsx(
  tA,
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
) }) }), $n = Object.assign(nA, {
  Trigger: rA,
  Content: iA,
  Anchor: JP
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
const md = 6048e5, aA = 864e5;
let oA = {};
function no() {
  return oA;
}
function or(e, t) {
  var u, d, p, h;
  const n = no(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((h = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ?? 0, a = tt(e), o = a.getDay(), l = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function xi(e) {
  return or(e, { weekStartsOn: 1 });
}
function Uy(e) {
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
  return Math.round((a - o) / aA);
}
function sA(e) {
  const t = Uy(e), n = Cn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), xi(n);
}
function Dc(e, t) {
  const n = t * 7;
  return en(e, n);
}
function lA(e, t) {
  return qn(e, t * 12);
}
function uA(e) {
  let t;
  return e.forEach(function(n) {
    const r = tt(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function cA(e) {
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
function dA(e) {
  if (!gd(e) && typeof e != "number")
    return !1;
  const t = tt(e);
  return !isNaN(Number(t));
}
function Ga(e, t) {
  const n = tt(e), r = tt(t), a = n.getFullYear() - r.getFullYear(), o = n.getMonth() - r.getMonth();
  return a * 12 + o;
}
function fA(e, t, n) {
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
function Yy(e) {
  const t = tt(e), n = Cn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function yd(e, t) {
  var u, d, p, h;
  const n = no(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((h = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ?? 0, a = tt(e), o = a.getDay(), l = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + l), a.setHours(23, 59, 59, 999), a;
}
function qy(e) {
  return yd(e, { weekStartsOn: 1 });
}
const pA = {
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
}, hA = (e, t, n) => {
  let r;
  const a = pA[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Zi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const mA = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, gA = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, vA = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, yA = {
  date: Zi({
    formats: mA,
    defaultWidth: "full"
  }),
  time: Zi({
    formats: gA,
    defaultWidth: "full"
  }),
  dateTime: Zi({
    formats: vA,
    defaultWidth: "full"
  })
}, xA = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, bA = (e, t, n, r) => xA[e];
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
const wA = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, _A = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, EA = {
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
}, CA = {
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
}, TA = {
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
}, OA = {
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
}, SA = (e, t) => {
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
}, DA = {
  ordinalNumber: SA,
  era: Qn({
    values: wA,
    defaultWidth: "wide"
  }),
  quarter: Qn({
    values: _A,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Qn({
    values: EA,
    defaultWidth: "wide"
  }),
  day: Qn({
    values: CA,
    defaultWidth: "wide"
  }),
  dayPeriod: Qn({
    values: TA,
    defaultWidth: "wide",
    formattingValues: OA,
    defaultFormattingWidth: "wide"
  })
};
function er(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const l = o[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(u) ? PA(u, (g) => g.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      kA(u, (g) => g.test(l))
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
function kA(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function PA(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ky(e) {
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
const AA = /^(\d+)(th|st|nd|rd)?/i, IA = /\d+/i, MA = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, NA = {
  any: [/^b/i, /^(a|c)/i]
}, jA = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, RA = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $A = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, FA = {
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
}, LA = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, WA = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, VA = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, zA = {
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
}, BA = {
  ordinalNumber: Ky({
    matchPattern: AA,
    parsePattern: IA,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: er({
    matchPatterns: MA,
    defaultMatchWidth: "wide",
    parsePatterns: NA,
    defaultParseWidth: "any"
  }),
  quarter: er({
    matchPatterns: jA,
    defaultMatchWidth: "wide",
    parsePatterns: RA,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: er({
    matchPatterns: $A,
    defaultMatchWidth: "wide",
    parsePatterns: FA,
    defaultParseWidth: "any"
  }),
  day: er({
    matchPatterns: LA,
    defaultMatchWidth: "wide",
    parsePatterns: WA,
    defaultParseWidth: "any"
  }),
  dayPeriod: er({
    matchPatterns: VA,
    defaultMatchWidth: "any",
    parsePatterns: zA,
    defaultParseWidth: "any"
  })
}, Gy = {
  code: "en-US",
  formatDistance: hA,
  formatLong: yA,
  formatRelative: bA,
  localize: DA,
  match: BA,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function HA(e) {
  const t = tt(e);
  return nr(t, Yy(t)) + 1;
}
function Xy(e) {
  const t = tt(e), n = +xi(t) - +sA(t);
  return Math.round(n / md) + 1;
}
function Zy(e, t) {
  var h, g, x, b;
  const n = tt(e), r = n.getFullYear(), a = no(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((g = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((b = (x = a.locale) == null ? void 0 : x.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, l = Cn(e, 0);
  l.setFullYear(r + 1, 0, o), l.setHours(0, 0, 0, 0);
  const u = or(l, t), d = Cn(e, 0);
  d.setFullYear(r, 0, o), d.setHours(0, 0, 0, 0);
  const p = or(d, t);
  return n.getTime() >= u.getTime() ? r + 1 : n.getTime() >= p.getTime() ? r : r - 1;
}
function UA(e, t) {
  var u, d, p, h;
  const n = no(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((h = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, a = Zy(e, t), o = Cn(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), or(o, t);
}
function Jy(e, t) {
  const n = tt(e), r = +or(n, t) - +UA(n, t);
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
    const a = Zy(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const l = o % 100;
      return ft(l, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : ft(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Uy(e);
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
    const a = Jy(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : ft(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Xy(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ft(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : $r.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = HA(e);
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
}, Qy = (e, t) => {
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
}, YA = (e, t) => {
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
  return o.replace("{{date}}", Tm(r, t)).replace("{{time}}", Qy(a, t));
}, qA = {
  p: Qy,
  P: YA
}, KA = /^D+$/, GA = /^Y+$/, XA = ["D", "DD", "YY", "YYYY"];
function ZA(e) {
  return KA.test(e);
}
function JA(e) {
  return GA.test(e);
}
function QA(e, t, n) {
  const r = eI(e, t, n);
  if (console.warn(r), XA.includes(e)) throw new RangeError(r);
}
function eI(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const tI = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, nI = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, rI = /^'([^]*?)'?$/, iI = /''/g, aI = /[a-zA-Z]/;
function Ci(e, t, n) {
  var h, g, x, b, O, _, w, P;
  const r = no(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Gy, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((g = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, l = (n == null ? void 0 : n.weekStartsOn) ?? ((_ = (O = n == null ? void 0 : n.locale) == null ? void 0 : O.options) == null ? void 0 : _.weekStartsOn) ?? r.weekStartsOn ?? ((P = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : P.weekStartsOn) ?? 0, u = tt(e);
  if (!dA(u))
    throw new RangeError("Invalid time value");
  let d = t.match(nI).map((C) => {
    const k = C[0];
    if (k === "p" || k === "P") {
      const D = qA[k];
      return D(C, a.formatLong);
    }
    return C;
  }).join("").match(tI).map((C) => {
    if (C === "''")
      return { isToken: !1, value: "'" };
    const k = C[0];
    if (k === "'")
      return { isToken: !1, value: oI(C) };
    if (_m[k])
      return { isToken: !0, value: C };
    if (k.match(aI))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && JA(k) || !(n != null && n.useAdditionalDayOfYearTokens) && ZA(k)) && QA(k, t, String(e));
    const D = _m[k[0]];
    return D(u, k, a.localize, p);
  }).join("");
}
function oI(e) {
  const t = e.match(rI);
  return t ? t[1].replace(iI, "'") : e;
}
function sI(e) {
  const t = tt(e), n = t.getFullYear(), r = t.getMonth(), a = Cn(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function lI(e) {
  return Math.trunc(+tt(e) / 1e3);
}
function uI(e) {
  const t = tt(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function cI(e, t) {
  return fA(
    uI(e),
    mn(e),
    t
  ) + 1;
}
function kc(e, t) {
  const n = tt(e), r = tt(t);
  return n.getTime() > r.getTime();
}
function ex(e, t) {
  const n = tt(e), r = tt(t);
  return +n < +r;
}
function xd(e, t) {
  const n = tt(e), r = tt(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function dI(e, t) {
  const n = tt(e), r = tt(t);
  return n.getFullYear() === r.getFullYear();
}
function Uu(e, t) {
  return en(e, -t);
}
function Yu(e, t) {
  const n = tt(e), r = n.getFullYear(), a = n.getDate(), o = Cn(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const l = sI(o);
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
}, fI = (e, t, n) => {
  let r;
  const a = n != null && n.addSuffix ? Sm[e].withPreposition : Sm[e].standalone;
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", String(t)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : "vor " + r : r;
}, pI = {
  full: "EEEE, do MMMM y",
  // Montag, 7. Januar 2018
  long: "do MMMM y",
  // 7. Januar 2018
  medium: "do MMM y",
  // 7. Jan. 2018
  short: "dd.MM.y"
  // 07.01.2018
}, hI = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, mI = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, gI = {
  date: Zi({
    formats: pI,
    defaultWidth: "full"
  }),
  time: Zi({
    formats: hI,
    defaultWidth: "full"
  }),
  dateTime: Zi({
    formats: mI,
    defaultWidth: "full"
  })
}, vI = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: "P"
}, yI = (e, t, n, r) => vI[e], xI = {
  narrow: ["v.Chr.", "n.Chr."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["vor Christus", "nach Christus"]
}, bI = {
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
}, wI = {
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
}, _I = {
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
}, EI = {
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
}, CI = {
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
}, TI = (e) => Number(e) + ".", OI = {
  ordinalNumber: TI,
  era: Qn({
    values: xI,
    defaultWidth: "wide"
  }),
  quarter: Qn({
    values: bI,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Qn({
    values: Pc,
    formattingValues: wI,
    defaultWidth: "wide"
  }),
  day: Qn({
    values: _I,
    defaultWidth: "wide"
  }),
  dayPeriod: Qn({
    values: EI,
    defaultWidth: "wide",
    formattingValues: CI,
    defaultFormattingWidth: "wide"
  })
}, SI = /^(\d+)(\.)?/i, DI = /\d+/i, kI = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
}, PI = {
  any: [/^v/i, /^n/i]
}, AI = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
}, II = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, MI = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
}, NI = {
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
}, jI = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
}, RI = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
}, $I = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
}, FI = {
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
}, LI = {
  ordinalNumber: Ky({
    matchPattern: SI,
    parsePattern: DI,
    valueCallback: (e) => parseInt(e)
  }),
  era: er({
    matchPatterns: kI,
    defaultMatchWidth: "wide",
    parsePatterns: PI,
    defaultParseWidth: "any"
  }),
  quarter: er({
    matchPatterns: AI,
    defaultMatchWidth: "wide",
    parsePatterns: II,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: er({
    matchPatterns: MI,
    defaultMatchWidth: "wide",
    parsePatterns: NI,
    defaultParseWidth: "any"
  }),
  day: er({
    matchPatterns: jI,
    defaultMatchWidth: "wide",
    parsePatterns: RI,
    defaultParseWidth: "any"
  }),
  dayPeriod: er({
    matchPatterns: $I,
    defaultMatchWidth: "wide",
    parsePatterns: FI,
    defaultParseWidth: "any"
  })
}, WI = {
  code: "de",
  formatDistance: fI,
  formatLong: gI,
  formatRelative: yI,
  localize: OI,
  match: LI,
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
function VI(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function tx(e, t, n) {
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
var zI = {
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
function BI(e, t) {
  return Ci(e, "LLLL y", t);
}
function HI(e, t) {
  return Ci(e, "d", t);
}
function UI(e, t) {
  return Ci(e, "LLLL", t);
}
function YI(e) {
  return "".concat(e);
}
function qI(e, t) {
  return Ci(e, "cccccc", t);
}
function KI(e, t) {
  return Ci(e, "yyyy", t);
}
var GI = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: BI,
  formatDay: HI,
  formatMonthCaption: UI,
  formatWeekNumber: YI,
  formatWeekdayName: qI,
  formatYearCaption: KI
}), XI = function(e, t, n) {
  return Ci(e, "do MMMM (EEEE)", n);
}, ZI = function() {
  return "Month: ";
}, JI = function() {
  return "Go to next month";
}, QI = function() {
  return "Go to previous month";
}, eM = function(e, t) {
  return Ci(e, "cccc", t);
}, tM = function(e) {
  return "Week n. ".concat(e);
}, nM = function() {
  return "Year: ";
}, rM = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: XI,
  labelMonthDropdown: ZI,
  labelNext: JI,
  labelPrevious: QI,
  labelWeekNumber: tM,
  labelWeekday: eM,
  labelYearDropdown: nM
});
function iM() {
  var e = "buttons", t = zI, n = Gy, r = {}, a = {}, o = 1, l = {}, u = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: GI,
    labels: rM,
    locale: n,
    modifiersClassNames: r,
    modifiers: a,
    numberOfMonths: o,
    styles: l,
    today: u,
    mode: "default"
  };
}
function aM(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, a = e.toMonth, o = e.fromDate, l = e.toDate;
  return r ? o = mn(r) : t && (o = new Date(t, 0, 1)), a ? l = vd(a) : n && (l = new Date(n, 11, 31)), {
    fromDate: o ? na(o) : void 0,
    toDate: l ? na(l) : void 0
  };
}
var nx = bi(void 0);
function oM(e) {
  var t, n = e.initialProps, r = iM(), a = aM(n), o = a.fromDate, l = a.toDate, u = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  u !== "buttons" && (!o || !l) && (u = "buttons");
  var d;
  (ol(n) || ro(n) || io(n)) && (d = n.onSelect);
  var p = je(je(je({}, r), n), { captionLayout: u, classNames: je(je({}, r.classNames), n.classNames), components: je({}, n.components), formatters: je(je({}, r.formatters), n.formatters), fromDate: o, labels: je(je({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: je(je({}, r.modifiers), n.modifiers), modifiersClassNames: je(je({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: d, styles: je(je({}, r.styles), n.styles), toDate: l });
  return v.jsx(nx.Provider, { value: p, children: e.children });
}
function bt() {
  var e = Yt(nx);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function rx(e) {
  var t = bt(), n = t.locale, r = t.classNames, a = t.styles, o = t.formatters.formatCaption;
  return v.jsx("div", { className: r.caption_label, style: a.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: o(e.displayMonth, { locale: n }) });
}
function sM(e) {
  return v.jsx("svg", je({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: v.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function ix(e) {
  var t, n, r = e.onChange, a = e.value, o = e.children, l = e.caption, u = e.className, d = e.style, p = bt(), h = (n = (t = p.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : sM;
  return v.jsxs("div", { className: u, style: d, children: [v.jsx("span", { className: p.classNames.vhidden, children: e["aria-label"] }), v.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: p.classNames.dropdown, style: p.styles.dropdown, value: a, onChange: r, children: o }), v.jsxs("div", { className: p.classNames.caption_label, style: p.styles.caption_label, "aria-hidden": "true", children: [l, v.jsx(h, { className: p.classNames.dropdown_icon, style: p.styles.dropdown_icon })] })] });
}
function lM(e) {
  var t, n = bt(), r = n.fromDate, a = n.toDate, o = n.styles, l = n.locale, u = n.formatters.formatMonthCaption, d = n.classNames, p = n.components, h = n.labels.labelMonthDropdown;
  if (!r)
    return v.jsx(v.Fragment, {});
  if (!a)
    return v.jsx(v.Fragment, {});
  var g = [];
  if (dI(r, a))
    for (var x = mn(r), b = r.getMonth(); b <= a.getMonth(); b++)
      g.push(Yu(x, b));
  else
    for (var x = mn(/* @__PURE__ */ new Date()), b = 0; b <= 11; b++)
      g.push(Yu(x, b));
  var O = function(w) {
    var P = Number(w.target.value), C = Yu(mn(e.displayMonth), P);
    e.onChange(C);
  }, _ = (t = p == null ? void 0 : p.Dropdown) !== null && t !== void 0 ? t : ix;
  return v.jsx(_, { name: "months", "aria-label": h(), className: d.dropdown_month, style: o.dropdown_month, onChange: O, value: e.displayMonth.getMonth(), caption: u(e.displayMonth, { locale: l }), children: g.map(function(w) {
    return v.jsx("option", { value: w.getMonth(), children: u(w, { locale: l }) }, w.getMonth());
  }) });
}
function uM(e) {
  var t, n = e.displayMonth, r = bt(), a = r.fromDate, o = r.toDate, l = r.locale, u = r.styles, d = r.classNames, p = r.components, h = r.formatters.formatYearCaption, g = r.labels.labelYearDropdown, x = [];
  if (!a)
    return v.jsx(v.Fragment, {});
  if (!o)
    return v.jsx(v.Fragment, {});
  for (var b = a.getFullYear(), O = o.getFullYear(), _ = b; _ <= O; _++)
    x.push(Om(Yy(/* @__PURE__ */ new Date()), _));
  var w = function(C) {
    var k = Om(mn(n), Number(C.target.value));
    e.onChange(k);
  }, P = (t = p == null ? void 0 : p.Dropdown) !== null && t !== void 0 ? t : ix;
  return v.jsx(P, { name: "years", "aria-label": g(), className: d.dropdown_year, style: u.dropdown_year, onChange: w, value: n.getFullYear(), caption: h(n, { locale: l }), children: x.map(function(C) {
    return v.jsx("option", { value: C.getFullYear(), children: h(C, { locale: l }) }, C.getFullYear());
  }) });
}
function cM(e, t) {
  var n = ht(e), r = n[0], a = n[1], o = t === void 0 ? r : t;
  return [o, a];
}
function dM(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, a = t || n || r || /* @__PURE__ */ new Date(), o = e.toDate, l = e.fromDate, u = e.numberOfMonths, d = u === void 0 ? 1 : u;
  if (o && Ga(o, a) < 0) {
    var p = -1 * (d - 1);
    a = qn(o, p);
  }
  return l && Ga(a, l) < 0 && (a = l), mn(a);
}
function fM() {
  var e = bt(), t = dM(e), n = cM(t, e.month), r = n[0], a = n[1], o = function(l) {
    var u;
    if (!e.disableNavigation) {
      var d = mn(l);
      a(d), (u = e.onMonthChange) === null || u === void 0 || u.call(e, d);
    }
  };
  return [r, o];
}
function pM(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, a = mn(e), o = mn(qn(a, r)), l = Ga(o, a), u = [], d = 0; d < l; d++) {
    var p = qn(a, d);
    u.push(p);
  }
  return n && (u = u.reverse()), u;
}
function hM(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, l = r ? o : 1, u = mn(e);
    if (!n)
      return qn(u, l);
    var d = Ga(n, e);
    if (!(d < o))
      return qn(u, l);
  }
}
function mM(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, l = r ? o : 1, u = mn(e);
    if (!n)
      return qn(u, -l);
    var d = Ga(u, n);
    if (!(d <= 0))
      return qn(u, -l);
  }
}
var ax = bi(void 0);
function gM(e) {
  var t = bt(), n = fM(), r = n[0], a = n[1], o = pM(r, t), l = hM(r, t), u = mM(r, t), d = function(g) {
    return o.some(function(x) {
      return xd(g, x);
    });
  }, p = function(g, x) {
    d(g) || (x && ex(g, x) ? a(qn(g, 1 + t.numberOfMonths * -1)) : a(g));
  }, h = {
    currentMonth: r,
    displayMonths: o,
    goToMonth: a,
    goToDate: p,
    previousMonth: u,
    nextMonth: l,
    isDateDisplayed: d
  };
  return v.jsx(ax.Provider, { value: h, children: e.children });
}
function ao() {
  var e = Yt(ax);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Dm(e) {
  var t, n = bt(), r = n.classNames, a = n.styles, o = n.components, l = ao().goToMonth, u = function(h) {
    l(qn(h, e.displayIndex ? -e.displayIndex : 0));
  }, d = (t = o == null ? void 0 : o.CaptionLabel) !== null && t !== void 0 ? t : rx, p = v.jsx(d, { id: e.id, displayMonth: e.displayMonth });
  return v.jsxs("div", { className: r.caption_dropdowns, style: a.caption_dropdowns, children: [v.jsx("div", { className: r.vhidden, children: p }), v.jsx(lM, { onChange: u, displayMonth: e.displayMonth }), v.jsx(uM, { onChange: u, displayMonth: e.displayMonth })] });
}
function vM(e) {
  return v.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: v.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function yM(e) {
  return v.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: v.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Is = Js(function(e, t) {
  var n = bt(), r = n.classNames, a = n.styles, o = [r.button_reset, r.button];
  e.className && o.push(e.className);
  var l = o.join(" "), u = je(je({}, a.button_reset), a.button);
  return e.style && Object.assign(u, e.style), v.jsx("button", je({}, e, { ref: t, type: "button", className: l, style: u }));
});
function xM(e) {
  var t, n, r = bt(), a = r.dir, o = r.locale, l = r.classNames, u = r.styles, d = r.labels, p = d.labelPrevious, h = d.labelNext, g = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return v.jsx(v.Fragment, {});
  var x = p(e.previousMonth, { locale: o }), b = [
    l.nav_button,
    l.nav_button_previous
  ].join(" "), O = h(e.nextMonth, { locale: o }), _ = [
    l.nav_button,
    l.nav_button_next
  ].join(" "), w = (t = g == null ? void 0 : g.IconRight) !== null && t !== void 0 ? t : yM, P = (n = g == null ? void 0 : g.IconLeft) !== null && n !== void 0 ? n : vM;
  return v.jsxs("div", { className: l.nav, style: u.nav, children: [!e.hidePrevious && v.jsx(Is, { name: "previous-month", "aria-label": x, className: b, style: u.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: a === "rtl" ? v.jsx(w, { className: l.nav_icon, style: u.nav_icon }) : v.jsx(P, { className: l.nav_icon, style: u.nav_icon }) }), !e.hideNext && v.jsx(Is, { name: "next-month", "aria-label": O, className: _, style: u.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: a === "rtl" ? v.jsx(P, { className: l.nav_icon, style: u.nav_icon }) : v.jsx(w, { className: l.nav_icon, style: u.nav_icon }) })] });
}
function km(e) {
  var t = bt().numberOfMonths, n = ao(), r = n.previousMonth, a = n.nextMonth, o = n.goToMonth, l = n.displayMonths, u = l.findIndex(function(O) {
    return xd(e.displayMonth, O);
  }), d = u === 0, p = u === l.length - 1, h = t > 1 && (d || !p), g = t > 1 && (p || !d), x = function() {
    r && o(r);
  }, b = function() {
    a && o(a);
  };
  return v.jsx(xM, { displayMonth: e.displayMonth, hideNext: h, hidePrevious: g, nextMonth: a, previousMonth: r, onPreviousClick: x, onNextClick: b });
}
function bM(e) {
  var t, n = bt(), r = n.classNames, a = n.disableNavigation, o = n.styles, l = n.captionLayout, u = n.components, d = (t = u == null ? void 0 : u.CaptionLabel) !== null && t !== void 0 ? t : rx, p;
  return a ? p = v.jsx(d, { id: e.id, displayMonth: e.displayMonth }) : l === "dropdown" ? p = v.jsx(Dm, { displayMonth: e.displayMonth, id: e.id }) : l === "dropdown-buttons" ? p = v.jsxs(v.Fragment, { children: [v.jsx(Dm, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), v.jsx(km, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : p = v.jsxs(v.Fragment, { children: [v.jsx(d, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), v.jsx(km, { displayMonth: e.displayMonth, id: e.id })] }), v.jsx("div", { className: r.caption, style: o.caption, children: p });
}
function wM(e) {
  var t = bt(), n = t.footer, r = t.styles, a = t.classNames.tfoot;
  return n ? v.jsx("tfoot", { className: a, style: r.tfoot, children: v.jsx("tr", { children: v.jsx("td", { colSpan: 8, children: n }) }) }) : v.jsx(v.Fragment, {});
}
function _M(e, t, n) {
  for (var r = n ? xi(/* @__PURE__ */ new Date()) : or(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), a = [], o = 0; o < 7; o++) {
    var l = en(r, o);
    a.push(l);
  }
  return a;
}
function EM() {
  var e = bt(), t = e.classNames, n = e.styles, r = e.showWeekNumber, a = e.locale, o = e.weekStartsOn, l = e.ISOWeek, u = e.formatters.formatWeekdayName, d = e.labels.labelWeekday, p = _M(a, o, l);
  return v.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && v.jsx("td", { style: n.head_cell, className: t.head_cell }), p.map(function(h, g) {
    return v.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": d(h, { locale: a }), children: u(h, { locale: a }) }, g);
  })] });
}
function CM() {
  var e, t = bt(), n = t.classNames, r = t.styles, a = t.components, o = (e = a == null ? void 0 : a.HeadRow) !== null && e !== void 0 ? e : EM;
  return v.jsx("thead", { style: r.head, className: n.head, children: v.jsx(o, {}) });
}
function TM(e) {
  var t = bt(), n = t.locale, r = t.formatters.formatDay;
  return v.jsx(v.Fragment, { children: r(e.date, { locale: n }) });
}
var bd = bi(void 0);
function OM(e) {
  if (!ro(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return v.jsx(bd.Provider, { value: t, children: e.children });
  }
  return v.jsx(SM, { initialProps: e.initialProps, children: e.children });
}
function SM(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = t.min, o = t.max, l = function(p, h, g) {
    var x, b;
    (x = t.onDayClick) === null || x === void 0 || x.call(t, p, h, g);
    var O = !!(h.selected && a && (r == null ? void 0 : r.length) === a);
    if (!O) {
      var _ = !!(!h.selected && o && (r == null ? void 0 : r.length) === o);
      if (!_) {
        var w = r ? tx([], r) : [];
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
function DM(e, t) {
  var n = t || {}, r = n.from, a = n.to;
  return r && a ? hn(a, e) && hn(r, e) ? void 0 : hn(a, e) ? { from: a, to: void 0 } : hn(r, e) ? void 0 : kc(r, e) ? { from: e, to: a } : { from: r, to: e } : a ? kc(e, a) ? { from: a, to: e } : { from: e, to: a } : r ? ex(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var _d = bi(void 0);
function kM(e) {
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
  return v.jsx(PM, { initialProps: e.initialProps, children: e.children });
}
function PM(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = r || {}, o = a.from, l = a.to, u = t.min, d = t.max, p = function(b, O, _) {
    var w, P;
    (w = t.onDayClick) === null || w === void 0 || w.call(t, b, O, _);
    var C = DM(b, r);
    (P = t.onSelect) === null || P === void 0 || P.call(t, C, b, O, _);
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
  return Array.isArray(e) ? tx([], e) : e !== void 0 ? [e] : [];
}
function AM(e) {
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
var IM = Kn.Selected, xr = Kn.Disabled, MM = Kn.Hidden, NM = Kn.Today, qu = Kn.RangeEnd, Ku = Kn.RangeMiddle, Gu = Kn.RangeStart, jM = Kn.Outside;
function RM(e, t, n) {
  var r, a = (r = {}, r[IM] = xs(e.selected), r[xr] = xs(e.disabled), r[MM] = xs(e.hidden), r[NM] = [e.today], r[qu] = [], r[Ku] = [], r[Gu] = [], r[jM] = [], r);
  return e.fromDate && a[xr].push({ before: e.fromDate }), e.toDate && a[xr].push({ after: e.toDate }), ro(e) ? a[xr] = a[xr].concat(t.modifiers[xr]) : io(e) && (a[xr] = a[xr].concat(n.modifiers[xr]), a[Gu] = n.modifiers[Gu], a[Ku] = n.modifiers[Ku], a[qu] = n.modifiers[qu]), a;
}
var ox = bi(void 0);
function $M(e) {
  var t = bt(), n = wd(), r = Ed(), a = RM(t, n, r), o = AM(t.modifiers), l = je(je({}, a), o);
  return v.jsx(ox.Provider, { value: l, children: e.children });
}
function sx() {
  var e = Yt(ox);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function FM(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function LM(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function WM(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function VM(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function zM(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function BM(e, t) {
  var n, r = t.from, a = t.to;
  if (r && a) {
    var o = nr(a, r) < 0;
    o && (n = [a, r], r = n[0], a = n[1]);
    var l = nr(e, r) >= 0 && nr(a, e) >= 0;
    return l;
  }
  return a ? hn(a, e) : r ? hn(r, e) : !1;
}
function HM(e) {
  return gd(e);
}
function UM(e) {
  return Array.isArray(e) && e.every(gd);
}
function YM(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (HM(n))
      return hn(e, n);
    if (UM(n))
      return n.includes(e);
    if (LM(n))
      return BM(e, n);
    if (zM(n))
      return n.dayOfWeek.includes(e.getDay());
    if (FM(n)) {
      var r = nr(n.before, e), a = nr(n.after, e), o = r > 0, l = a < 0, u = kc(n.before, n.after);
      return u ? l && o : o || l;
    }
    return WM(n) ? nr(e, n.after) > 0 : VM(n) ? nr(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Cd(e, t, n) {
  var r = Object.keys(t).reduce(function(o, l) {
    var u = t[l];
    return YM(e, u) && o.push(l), o;
  }, []), a = {};
  return r.forEach(function(o) {
    return a[o] = !0;
  }), n && !xd(e, n) && (a.outside = !0), a;
}
function qM(e, t) {
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
var KM = 365;
function lx(e, t) {
  var n = t.moveBy, r = t.direction, a = t.context, o = t.modifiers, l = t.retry, u = l === void 0 ? { count: 0, lastFocused: e } : l, d = a.weekStartsOn, p = a.fromDate, h = a.toDate, g = a.locale, x = {
    day: en,
    week: Dc,
    month: qn,
    year: lA,
    startOfWeek: function(w) {
      return a.ISOWeek ? xi(w) : or(w, { locale: g, weekStartsOn: d });
    },
    endOfWeek: function(w) {
      return a.ISOWeek ? qy(w) : yd(w, { locale: g, weekStartsOn: d });
    }
  }, b = x[n](e, r === "after" ? 1 : -1);
  r === "before" && p ? b = uA([p, b]) : r === "after" && h && (b = cA([h, b]));
  var O = !0;
  if (o) {
    var _ = Cd(b, o);
    O = !_.disabled && !_.hidden;
  }
  return O ? b : u.count > KM ? u.lastFocused : lx(b, {
    moveBy: n,
    direction: r,
    context: a,
    modifiers: o,
    retry: je(je({}, u), { count: u.count + 1 })
  });
}
var ux = bi(void 0);
function GM(e) {
  var t = ao(), n = sx(), r = ht(), a = r[0], o = r[1], l = ht(), u = l[0], d = l[1], p = qM(t.displayMonths, n), h = a ?? (u && t.isDateDisplayed(u)) ? u : p, g = function() {
    d(a), o(void 0);
  }, x = function(w) {
    o(w);
  }, b = bt(), O = function(w, P) {
    if (a) {
      var C = lx(a, {
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
  return v.jsx(ux.Provider, { value: _, children: e.children });
}
function Td() {
  var e = Yt(ux);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function XM(e, t) {
  var n = sx(), r = Cd(e, n, t);
  return r;
}
var Od = bi(void 0);
function ZM(e) {
  if (!ol(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return v.jsx(Od.Provider, { value: t, children: e.children });
  }
  return v.jsx(JM, { initialProps: e.initialProps, children: e.children });
}
function JM(e) {
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
function cx() {
  var e = Yt(Od);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function QM(e, t) {
  var n = bt(), r = cx(), a = wd(), o = Ed(), l = Td(), u = l.focusDayAfter, d = l.focusDayBefore, p = l.focusWeekAfter, h = l.focusWeekBefore, g = l.blur, x = l.focus, b = l.focusMonthBefore, O = l.focusMonthAfter, _ = l.focusYearBefore, w = l.focusYearAfter, P = l.focusStartOfWeek, C = l.focusEndOfWeek, k = function(j) {
    var I, X, M, L;
    ol(n) ? (I = r.onDayClick) === null || I === void 0 || I.call(r, e, t, j) : ro(n) ? (X = a.onDayClick) === null || X === void 0 || X.call(a, e, t, j) : io(n) ? (M = o.onDayClick) === null || M === void 0 || M.call(o, e, t, j) : (L = n.onDayClick) === null || L === void 0 || L.call(n, e, t, j);
  }, D = function(j) {
    var I;
    x(e), (I = n.onDayFocus) === null || I === void 0 || I.call(n, e, t, j);
  }, S = function(j) {
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
  }, B = function(j) {
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
        j.preventDefault(), j.stopPropagation(), j.shiftKey ? w() : O();
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
    onKeyUp: z,
    onMouseEnter: Q,
    onMouseLeave: ee,
    onPointerEnter: ne,
    onPointerLeave: V,
    onTouchCancel: Y,
    onTouchEnd: te,
    onTouchMove: R,
    onTouchStart: B
  };
  return K;
}
function eN() {
  var e = bt(), t = cx(), n = wd(), r = Ed(), a = ol(e) ? t.selected : ro(e) ? n.selected : io(e) ? r.selected : void 0;
  return a;
}
function tN(e) {
  return Object.values(Kn).includes(e);
}
function nN(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var a = e.modifiersClassNames[r];
    if (a)
      n.push(a);
    else if (tN(r)) {
      var o = e.classNames["day_".concat(r)];
      o && n.push(o);
    }
  }), n;
}
function rN(e, t) {
  var n = je({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var a;
    n = je(je({}, n), (a = e.modifiersStyles) === null || a === void 0 ? void 0 : a[r]);
  }), n;
}
function iN(e, t, n) {
  var r, a, o, l = bt(), u = Td(), d = XM(e, t), p = QM(e, d), h = eN(), g = !!(l.onDayClick || l.mode !== "default");
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
  var x = nN(l, d).join(" "), b = rN(l, d), O = !!(d.outside && !l.showOutsideDays || d.hidden), _ = (o = (a = l.components) === null || a === void 0 ? void 0 : a.DayContent) !== null && o !== void 0 ? o : TM, w = v.jsx(_, { date: e, displayMonth: t, activeModifiers: d }), P = {
    style: b,
    className: x,
    children: w,
    role: "gridcell"
  }, C = u.focusTarget && hn(u.focusTarget, e) && !d.outside, k = u.focusedDay && hn(u.focusedDay, e), D = je(je(je({}, P), (r = { disabled: d.disabled, role: "gridcell" }, r["aria-selected"] = d.selected, r.tabIndex = k || C ? 0 : -1, r)), p), S = {
    isButton: g,
    isHidden: O,
    activeModifiers: d,
    selectedDays: h,
    buttonProps: D,
    divProps: P
  };
  return S;
}
function aN(e) {
  var t = qe(null), n = iN(e.date, e.displayMonth, t);
  return n.isHidden ? v.jsx("div", { role: "gridcell" }) : n.isButton ? v.jsx(Is, je({ name: "day", ref: t }, n.buttonProps)) : v.jsx("div", je({}, n.divProps));
}
function oN(e) {
  var t = e.number, n = e.dates, r = bt(), a = r.onWeekNumberClick, o = r.styles, l = r.classNames, u = r.locale, d = r.labels.labelWeekNumber, p = r.formatters.formatWeekNumber, h = p(Number(t), { locale: u });
  if (!a)
    return v.jsx("span", { className: l.weeknumber, style: o.weeknumber, children: h });
  var g = d(Number(t), { locale: u }), x = function(b) {
    a(t, n, b);
  };
  return v.jsx(Is, { name: "week-number", "aria-label": g, className: l.weeknumber, style: o.weeknumber, onClick: x, children: h });
}
function sN(e) {
  var t, n, r = bt(), a = r.styles, o = r.classNames, l = r.showWeekNumber, u = r.components, d = (t = u == null ? void 0 : u.Day) !== null && t !== void 0 ? t : aN, p = (n = u == null ? void 0 : u.WeekNumber) !== null && n !== void 0 ? n : oN, h;
  return l && (h = v.jsx("td", { className: o.cell, style: a.cell, children: v.jsx(p, { number: e.weekNumber, dates: e.dates }) })), v.jsxs("tr", { className: o.row, style: a.row, children: [h, e.dates.map(function(g) {
    return v.jsx("td", { className: o.cell, style: a.cell, role: "presentation", children: v.jsx(d, { displayMonth: e.displayMonth, date: g }) }, lI(g));
  })] });
}
function Pm(e, t, n) {
  for (var r = n != null && n.ISOWeek ? qy(t) : yd(t, n), a = n != null && n.ISOWeek ? xi(e) : or(e, n), o = nr(r, a), l = [], u = 0; u <= o; u++)
    l.push(en(a, u));
  var d = l.reduce(function(p, h) {
    var g = n != null && n.ISOWeek ? Xy(h) : Jy(h, n), x = p.find(function(b) {
      return b.weekNumber === g;
    });
    return x ? (x.dates.push(h), p) : (p.push({
      weekNumber: g,
      dates: [h]
    }), p);
  }, []);
  return d;
}
function lN(e, t) {
  var n = Pm(mn(e), vd(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = cI(e, t);
    if (r < 6) {
      var a = n[n.length - 1], o = a.dates[a.dates.length - 1], l = Dc(o, 6 - r), u = Pm(Dc(o, 1), l, t);
      n.push.apply(n, u);
    }
  }
  return n;
}
function uN(e) {
  var t, n, r, a = bt(), o = a.locale, l = a.classNames, u = a.styles, d = a.hideHead, p = a.fixedWeeks, h = a.components, g = a.weekStartsOn, x = a.firstWeekContainsDate, b = a.ISOWeek, O = lN(e.displayMonth, {
    useFixedWeeks: !!p,
    ISOWeek: b,
    locale: o,
    weekStartsOn: g,
    firstWeekContainsDate: x
  }), _ = (t = h == null ? void 0 : h.Head) !== null && t !== void 0 ? t : CM, w = (n = h == null ? void 0 : h.Row) !== null && n !== void 0 ? n : sN, P = (r = h == null ? void 0 : h.Footer) !== null && r !== void 0 ? r : wM;
  return v.jsxs("table", { id: e.id, className: l.table, style: u.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!d && v.jsx(_, {}), v.jsx("tbody", { className: l.tbody, style: u.tbody, children: O.map(function(C) {
    return v.jsx(w, { displayMonth: e.displayMonth, dates: C.dates, weekNumber: C.weekNumber }, C.weekNumber);
  }) }), v.jsx(P, { displayMonth: e.displayMonth })] });
}
function cN() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var dN = cN() ? zr : ct, Xu = !1, fN = 0;
function Am() {
  return "react-day-picker-".concat(++fN);
}
function pN(e) {
  var t, n = e ?? (Xu ? Am() : null), r = ht(n), a = r[0], o = r[1];
  return dN(function() {
    a === null && o(Am());
  }, []), ct(function() {
    Xu === !1 && (Xu = !0);
  }, []), (t = e ?? a) !== null && t !== void 0 ? t : void 0;
}
function hN(e) {
  var t, n, r = bt(), a = r.dir, o = r.classNames, l = r.styles, u = r.components, d = ao().displayMonths, p = pN(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), h = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, g = [o.month], x = l.month, b = e.displayIndex === 0, O = e.displayIndex === d.length - 1, _ = !b && !O;
  a === "rtl" && (t = [b, O], O = t[0], b = t[1]), b && (g.push(o.caption_start), x = je(je({}, x), l.caption_start)), O && (g.push(o.caption_end), x = je(je({}, x), l.caption_end)), _ && (g.push(o.caption_between), x = je(je({}, x), l.caption_between));
  var w = (n = u == null ? void 0 : u.Caption) !== null && n !== void 0 ? n : bM;
  return v.jsxs("div", { className: g.join(" "), style: x, children: [v.jsx(w, { id: p, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), v.jsx(uN, { id: h, "aria-labelledby": p, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function mN(e) {
  var t = bt(), n = t.classNames, r = t.styles;
  return v.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function gN(e) {
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
  var g = je(je({}, a.styles.root), a.style), x = Object.keys(r).filter(function(O) {
    return O.startsWith("data-");
  }).reduce(function(O, _) {
    var w;
    return je(je({}, O), (w = {}, w[_] = r[_], w));
  }, {}), b = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : mN;
  return v.jsx("div", je({ className: h.join(" "), style: g, dir: a.dir, id: a.id, nonce: r.nonce, title: r.title, lang: r.lang }, x, { children: v.jsx(b, { children: l.displayMonths.map(function(O, _) {
    return v.jsx(hN, { displayIndex: _, displayMonth: O }, _);
  }) }) }));
}
function vN(e) {
  var t = e.children, n = VI(e, ["children"]);
  return v.jsx(oM, { initialProps: n, children: v.jsx(gM, { children: v.jsx(ZM, { initialProps: n, children: v.jsx(OM, { initialProps: n, children: v.jsx(kM, { initialProps: n, children: v.jsx($M, { children: v.jsx(GM, { children: t }) }) }) }) }) }) });
}
function yN(e) {
  return v.jsx(vN, je({}, e, { children: v.jsx(gN, { initialProps: e }) }));
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
function xN(e, t) {
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
function bN() {
  if (Im) return ot;
  Im = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function k(S) {
    if (typeof S == "object" && S !== null) {
      var Q = S.$$typeof;
      switch (Q) {
        case t:
          switch (S = S.type, S) {
            case d:
            case p:
            case r:
            case o:
            case a:
            case g:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case u:
                case h:
                case O:
                case b:
                case l:
                  return S;
                default:
                  return Q;
              }
          }
        case n:
          return Q;
      }
    }
  }
  function D(S) {
    return k(S) === p;
  }
  return ot.AsyncMode = d, ot.ConcurrentMode = p, ot.ContextConsumer = u, ot.ContextProvider = l, ot.Element = t, ot.ForwardRef = h, ot.Fragment = r, ot.Lazy = O, ot.Memo = b, ot.Portal = n, ot.Profiler = o, ot.StrictMode = a, ot.Suspense = g, ot.isAsyncMode = function(S) {
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
    return k(S) === b;
  }, ot.isPortal = function(S) {
    return k(S) === n;
  }, ot.isProfiler = function(S) {
    return k(S) === o;
  }, ot.isStrictMode = function(S) {
    return k(S) === a;
  }, ot.isSuspense = function(S) {
    return k(S) === g;
  }, ot.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === p || S === o || S === a || S === g || S === x || typeof S == "object" && S !== null && (S.$$typeof === O || S.$$typeof === b || S.$$typeof === l || S.$$typeof === u || S.$$typeof === h || S.$$typeof === w || S.$$typeof === P || S.$$typeof === C || S.$$typeof === _);
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
function wN() {
  return Mm || (Mm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function k(fe) {
      return typeof fe == "string" || typeof fe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      fe === r || fe === p || fe === o || fe === a || fe === g || fe === x || typeof fe == "object" && fe !== null && (fe.$$typeof === O || fe.$$typeof === b || fe.$$typeof === l || fe.$$typeof === u || fe.$$typeof === h || fe.$$typeof === w || fe.$$typeof === P || fe.$$typeof === C || fe.$$typeof === _);
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
                  case O:
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
    var S = d, Q = p, ee = u, ne = l, V = t, Y = h, te = r, R = O, B = b, z = n, U = o, K = a, j = g, I = !1;
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
    st.AsyncMode = S, st.ConcurrentMode = Q, st.ContextConsumer = ee, st.ContextProvider = ne, st.Element = V, st.ForwardRef = Y, st.Fragment = te, st.Lazy = R, st.Memo = B, st.Portal = z, st.Profiler = U, st.StrictMode = K, st.Suspense = j, st.isAsyncMode = X, st.isConcurrentMode = M, st.isContextConsumer = L, st.isContextProvider = ue, st.isElement = he, st.isForwardRef = ce, st.isFragment = ye, st.isLazy = ge, st.isMemo = be, st.isPortal = we, st.isProfiler = Ce, st.isStrictMode = _e, st.isSuspense = Se, st.isValidElementType = k, st.typeOf = D;
  }()), st;
}
var Nm;
function dx() {
  return Nm || (Nm = 1, process.env.NODE_ENV === "production" ? ls.exports = bN() : ls.exports = wN()), ls.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zu, jm;
function _N() {
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
function fx() {
  return $m || ($m = 1, Qu = Function.call.bind(Object.prototype.hasOwnProperty)), Qu;
}
var ec, Fm;
function EN() {
  if (Fm) return ec;
  Fm = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Sd(), n = {}, r = fx();
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
          } catch (O) {
            g = O;
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
function CN() {
  if (Lm) return tc;
  Lm = 1;
  var e = dx(), t = _N(), n = Sd(), r = fx(), a = EN(), o = function() {
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
      elementType: S(),
      instanceOf: Q,
      node: Y(),
      objectOf: ne,
      oneOf: ee,
      oneOfType: V,
      shape: R,
      exact: B
    };
    function O(M, L) {
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
    function S() {
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
          if (O(be, M[we]))
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
    function B(M) {
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
function TN() {
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
  var ON = dx(), SN = !0;
  Ic.exports = CN()(ON.isElement, SN);
} else
  Ic.exports = TN()();
var DN = Ic.exports;
const le = /* @__PURE__ */ Qs(DN);
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
function kN() {
  if (Vm) return lt;
  Vm = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
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
    return typeof w == "string" || typeof w == "function" || w === n || w === a || w === r || w === p || w === h || w === b || typeof w == "object" && w !== null && (w.$$typeof === x || w.$$typeof === g || w.$$typeof === o || w.$$typeof === l || w.$$typeof === d || w.$$typeof === O || w.getModuleId !== void 0);
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
function PN() {
  return zm || (zm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), O = !1, _ = !1, w = !1, P = !1, C = !1, k;
    k = Symbol.for("react.module.reference");
    function D(ve) {
      return !!(typeof ve == "string" || typeof ve == "function" || ve === n || ve === a || C || ve === r || ve === p || ve === h || P || ve === b || O || _ || w || typeof ve == "object" && ve !== null && (ve.$$typeof === x || ve.$$typeof === g || ve.$$typeof === o || ve.$$typeof === l || ve.$$typeof === d || // This needs to include all possible module reference object
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
    var Q = l, ee = o, ne = e, V = d, Y = n, te = x, R = g, B = t, z = a, U = r, K = p, j = h, I = !1, X = !1;
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
      return S(ve) === g;
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
    ut.ContextConsumer = Q, ut.ContextProvider = ee, ut.Element = ne, ut.ForwardRef = V, ut.Fragment = Y, ut.Lazy = te, ut.Memo = R, ut.Portal = B, ut.Profiler = z, ut.StrictMode = U, ut.Suspense = K, ut.SuspenseList = j, ut.isAsyncMode = M, ut.isConcurrentMode = L, ut.isContextConsumer = ue, ut.isContextProvider = he, ut.isElement = ce, ut.isForwardRef = ye, ut.isFragment = ge, ut.isLazy = be, ut.isMemo = we, ut.isPortal = Ce, ut.isProfiler = _e, ut.isStrictMode = Se, ut.isSuspense = fe, ut.isSuspenseList = Re, ut.isValidElementType = D, ut.typeOf = S;
  }()), ut;
}
process.env.NODE_ENV === "production" ? Mc.exports = kN() : Mc.exports = PN();
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
}, cs = (e, t, n, r, a, o, l, u) => o < e && l > t || o > e && l < t ? 0 : o <= e && u <= n || l >= t && u >= n ? o - e - r : l > t && u < n || o < e && u > n ? l - t + a : 0, AN = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, IN = (e, t) => {
  var n, r, a, o;
  if (typeof document > "u") return [];
  const { scrollMode: l, block: u, inline: d, boundary: p, skipOverflowHiddenElements: h } = t, g = typeof p == "function" ? p : (K) => K !== p;
  if (!Hm(e)) throw new TypeError("Invalid target");
  const x = document.scrollingElement || document.documentElement, b = [];
  let O = e;
  for (; Hm(O) && g(O); ) {
    if (O = AN(O), O === x) {
      b.push(O);
      break;
    }
    O != null && O === document.body && us(O) && !us(document.documentElement) || O != null && us(O, h) && b.push(O);
  }
  const _ = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (o = (a = window.visualViewport) == null ? void 0 : a.height) != null ? o : innerHeight, { scrollX: P, scrollY: C } = window, { height: k, width: D, top: S, right: Q, bottom: ee, left: ne } = e.getBoundingClientRect(), { top: V, right: Y, bottom: te, left: R } = ((K) => {
    const j = window.getComputedStyle(K);
    return { top: parseFloat(j.scrollMarginTop) || 0, right: parseFloat(j.scrollMarginRight) || 0, bottom: parseFloat(j.scrollMarginBottom) || 0, left: parseFloat(j.scrollMarginLeft) || 0 };
  })(e);
  let B = u === "start" || u === "nearest" ? S - V : u === "end" ? ee + te : S + k / 2 - V + te, z = d === "center" ? ne + D / 2 - R + Y : d === "end" ? Q + Y : ne - R;
  const U = [];
  for (let K = 0; K < b.length; K++) {
    const j = b[K], { height: I, width: X, top: M, right: L, bottom: ue, left: he } = j.getBoundingClientRect();
    if (l === "if-needed" && S >= 0 && ne >= 0 && ee <= w && Q <= _ && (j === x && !us(j) || S >= M && ee <= ue && ne >= he && Q <= L)) return U;
    const ce = getComputedStyle(j), ye = parseInt(ce.borderLeftWidth, 10), ge = parseInt(ce.borderTopWidth, 10), be = parseInt(ce.borderRightWidth, 10), we = parseInt(ce.borderBottomWidth, 10);
    let Ce = 0, _e = 0;
    const Se = "offsetWidth" in j ? j.offsetWidth - j.clientWidth - ye - be : 0, fe = "offsetHeight" in j ? j.offsetHeight - j.clientHeight - ge - we : 0, Re = "offsetWidth" in j ? j.offsetWidth === 0 ? 0 : X / j.offsetWidth : 0, ve = "offsetHeight" in j ? j.offsetHeight === 0 ? 0 : I / j.offsetHeight : 0;
    if (x === j) Ce = u === "start" ? B : u === "end" ? B - w : u === "nearest" ? cs(C, C + w, w, ge, we, C + B, C + B + k, k) : B - w / 2, _e = d === "start" ? z : d === "center" ? z - _ / 2 : d === "end" ? z - _ : cs(P, P + _, _, ye, be, P + z, P + z + D, D), Ce = Math.max(0, Ce + C), _e = Math.max(0, _e + P);
    else {
      Ce = u === "start" ? B - M - ge : u === "end" ? B - ue + we + fe : u === "nearest" ? cs(M, ue, I, ge, we + fe, B, B + k, k) : B - (M + I / 2) + fe / 2, _e = d === "start" ? z - he - ye : d === "center" ? z - (he + X / 2) + Se / 2 : d === "end" ? z - L + be + Se : cs(he, L, X, ye, be + Se, z, z + D, D);
      const { scrollLeft: et, scrollTop: rt } = j;
      Ce = ve === 0 ? 0 : Math.max(0, Math.min(rt + Ce / ve, j.scrollHeight - I / ve + fe)), _e = Re === 0 ? 0 : Math.max(0, Math.min(et + _e / Re, j.scrollWidth - X / Re + Se)), B += rt - Ce, z += et - _e;
    }
    U.push({ el: j, top: Ce, left: _e });
  }
  return U;
};
var MN = 0;
function Ym(e) {
  return typeof e == "function" ? e : dn;
}
function dn() {
}
function px(e, t) {
  if (e) {
    var n = IN(e, {
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
function hx() {
  return String(MN++);
}
function NN(e) {
  var t = e.isOpen, n = e.resultCount, r = e.previousResultCount;
  return t ? n ? n !== r ? n + " result" + (n === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function Km(e, t) {
  return e = Array.isArray(e) ? (
    /* istanbul ignore next (preact) */
    e[0]
  ) : e, !e && t ? t : e;
}
function mx(e) {
  return typeof e.type == "string";
}
function gx(e) {
  return e.props;
}
function jN(e, t) {
  console.error('The property "' + t + '" is required in "' + e + '"');
}
var RN = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function ds(e) {
  e === void 0 && (e = {});
  var t = {};
  return RN.forEach(function(n) {
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
function $N(e) {
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
var FN = sl(function(e) {
  vx(e).textContent = "";
}, 500);
function vx(e) {
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
function yx(e, t) {
  if (!(!e || !t)) {
    var n = vx(t);
    n.textContent = e, FN(t);
  }
}
function LN(e) {
  var t = e == null ? void 0 : e.getElementById("a11y-status-message");
  t && t.remove();
}
var xx = process.env.NODE_ENV !== "production" ? "__autocomplete_unknown__" : 0, bx = process.env.NODE_ENV !== "production" ? "__autocomplete_mouseup__" : 1, wx = process.env.NODE_ENV !== "production" ? "__autocomplete_item_mouseenter__" : 2, bs = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_up__" : 3, ws = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_down__" : 4, _x = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_escape__" : 5, Ex = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_enter__" : 6, Cx = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_home__" : 7, Tx = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_end__" : 8, Ox = process.env.NODE_ENV !== "production" ? "__autocomplete_click_item__" : 9, Sx = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_input__" : 10, Dx = process.env.NODE_ENV !== "production" ? "__autocomplete_change_input__" : 11, kx = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_space_button__" : 12, jc = process.env.NODE_ENV !== "production" ? "__autocomplete_click_button__" : 13, Px = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_button__" : 14, Ax = process.env.NODE_ENV !== "production" ? "__autocomplete_controlled_prop_updated_selected_item__" : 15, Ix = process.env.NODE_ENV !== "production" ? "__autocomplete_touchend__" : 16, WN = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blurButton: Px,
  blurInput: Sx,
  changeInput: Dx,
  clickButton: jc,
  clickItem: Ox,
  controlledPropUpdatedSelectedItem: Ax,
  itemMouseEnter: wx,
  keyDownArrowDown: ws,
  keyDownArrowUp: bs,
  keyDownEnd: Tx,
  keyDownEnter: Ex,
  keyDownEscape: _x,
  keyDownHome: Cx,
  keyDownSpaceButton: kx,
  mouseUp: bx,
  touchEnd: Ix,
  unknown: xx
}), VN = ["refKey", "ref"], zN = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], BN = ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"], HN = ["refKey", "ref"], UN = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], YN = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function n(a) {
      var o;
      o = t.call(this, a) || this, o.id = o.props.id || "downshift-" + hx(), o.menuId = o.props.menuId || o.id + "-menu", o.labelId = o.props.labelId || o.id + "-label", o.inputId = o.props.inputId || o.id + "-input", o.getItemId = o.props.getItemId || function(C) {
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
        var S = o.items[C];
        S != null && o.selectItem(S, k, D);
      }, o.selectHighlightedItem = function(C, k) {
        return o.selectItemAtIndex(o.getState().highlightedIndex, C, k);
      }, o.internalSetState = function(C, k) {
        var D, S, Q = {}, ee = typeof C == "function";
        return !ee && C.hasOwnProperty("inputValue") && o.props.onInputValueChange(C.inputValue, Ue({}, o.getStateAndHelpers(), C)), o.setState(function(ne) {
          var V;
          ne = o.getState(ne);
          var Y = ee ? C(ne) : C;
          Y = o.props.stateReducer(ne, Y), D = Y.hasOwnProperty("selectedItem");
          var te = {};
          return D && Y.selectedItem !== ne.selectedItem && (S = Y.selectedItem), (V = Y).type || (V.type = xx), Object.keys(Y).forEach(function(R) {
            ne[R] !== Y[R] && (Q[R] = Y[R]), R !== "type" && (Y[R], Nc(o.props, R) || (te[R] = Y[R]));
          }), ee && Y.hasOwnProperty("inputValue") && o.props.onInputValueChange(Y.inputValue, Ue({}, o.getStateAndHelpers(), Y)), te;
        }, function() {
          Ym(k)();
          var ne = Object.keys(Q).length > 1;
          ne && o.props.onStateChange(Q, o.getStateAndHelpers()), D && o.props.onSelect(C.selectedItem, o.getStateAndHelpers()), S !== void 0 && o.props.onChange(S, o.getStateAndHelpers()), o.props.onUserAction(Q, o.getStateAndHelpers());
        });
      }, o.rootRef = function(C) {
        return o._rootNode = C;
      }, o.getRootProps = function(C, k) {
        var D, S = C === void 0 ? {} : C, Q = S.refKey, ee = Q === void 0 ? "ref" : Q, ne = S.ref, V = zn(S, VN), Y = k === void 0 ? {} : k, te = Y.suppressRefError, R = te === void 0 ? !1 : te;
        o.getRootProps.called = !0, o.getRootProps.refKey = ee, o.getRootProps.suppressRefError = R;
        var B = o.getState(), z = B.isOpen;
        return Ue((D = {}, D[ee] = mi(ne, o.rootRef), D.role = "combobox", D["aria-expanded"] = z, D["aria-haspopup"] = "listbox", D["aria-owns"] = z ? o.menuId : void 0, D["aria-labelledby"] = o.labelId, D), V);
      }, o.keyDownHandlers = {
        ArrowDown: function(k) {
          var D = this;
          if (k.preventDefault(), this.getState().isOpen) {
            var S = k.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(S, {
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
            var S = k.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(S, {
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
            var D = this.getState(), S = D.isOpen, Q = D.highlightedIndex;
            if (S && Q != null) {
              k.preventDefault();
              var ee = this.items[Q], ne = this.getItemNodeFromIndex(Q);
              if (ee == null || ne && ne.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: Ex
              });
            }
          }
        },
        Escape: function(k) {
          k.preventDefault(), this.reset(Ue({
            type: _x
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }
      }, o.buttonKeyDownHandlers = Ue({}, o.keyDownHandlers, {
        " ": function(k) {
          k.preventDefault(), this.toggleMenu({
            type: kx
          });
        }
      }), o.inputKeyDownHandlers = Ue({}, o.keyDownHandlers, {
        Home: function(k) {
          var D = this.getState(), S = D.isOpen;
          if (S) {
            k.preventDefault();
            var Q = this.getItemCount();
            if (!(Q <= 0 || !S)) {
              var ee = ra(0, !1, {
                length: Q
              }, this.isItemDisabled);
              this.setHighlightedIndex(ee, {
                type: Cx
              });
            }
          }
        },
        End: function(k) {
          var D = this.getState(), S = D.isOpen;
          if (S) {
            k.preventDefault();
            var Q = this.getItemCount();
            if (!(Q <= 0 || !S)) {
              var ee = ra(Q - 1, !0, {
                length: Q
              }, this.isItemDisabled);
              this.setHighlightedIndex(ee, {
                type: Tx
              });
            }
          }
        }
      }), o.getToggleButtonProps = function(C) {
        var k = C === void 0 ? {} : C, D = k.onClick;
        k.onPress;
        var S = k.onKeyDown, Q = k.onKeyUp, ee = k.onBlur, ne = zn(k, zN), V = o.getState(), Y = V.isOpen, te = {
          onClick: Pt(D, o.buttonHandleClick),
          onKeyDown: Pt(S, o.buttonHandleKeyDown),
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
          var k = o.props.environment.document, D = k.body, S = k.activeElement;
          D && D === S && C.target.focus();
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
              type: Px
            });
          }
        });
      }, o.getLabelProps = function(C) {
        return Ue({
          htmlFor: o.inputId,
          id: o.labelId
        }, C);
      }, o.getInputProps = function(C) {
        var k = C === void 0 ? {} : C, D = k.onKeyDown, S = k.onBlur, Q = k.onChange, ee = k.onInput;
        k.onChangeText;
        var ne = zn(k, BN), V, Y = {};
        V = "onChange";
        var te = o.getState(), R = te.inputValue, B = te.isOpen, z = te.highlightedIndex;
        if (!ne.disabled) {
          var U;
          Y = (U = {}, U[V] = Pt(Q, ee, o.inputHandleChange), U.onKeyDown = Pt(D, o.inputHandleKeyDown), U.onBlur = Pt(S, o.inputHandleBlur), U);
        }
        return Ue({
          "aria-autocomplete": "list",
          "aria-activedescendant": B && typeof z == "number" && z >= 0 ? o.getItemId(z) : void 0,
          "aria-controls": B ? o.menuId : void 0,
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
          type: Dx,
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
              type: Sx
            });
          }
        });
      }, o.menuRef = function(C) {
        o._menuNode = C;
      }, o.getMenuProps = function(C, k) {
        var D, S = C === void 0 ? {} : C, Q = S.refKey, ee = Q === void 0 ? "ref" : Q, ne = S.ref, V = zn(S, HN), Y = k === void 0 ? {} : k, te = Y.suppressRefError, R = te === void 0 ? !1 : te;
        return o.getMenuProps.called = !0, o.getMenuProps.refKey = ee, o.getMenuProps.suppressRefError = R, Ue((D = {}, D[ee] = mi(ne, o.menuRef), D.role = "listbox", D["aria-labelledby"] = V && V["aria-label"] ? void 0 : o.labelId, D.id = o.menuId, D), V);
      }, o.getItemProps = function(C) {
        var k, D = C === void 0 ? {} : C, S = D.onMouseMove, Q = D.onMouseDown, ee = D.onClick;
        D.onPress;
        var ne = D.index, V = D.item, Y = V === void 0 ? process.env.NODE_ENV === "production" ? (
          /* istanbul ignore next */
          void 0
        ) : jN("getItemProps", "item") : V, te = zn(D, UN);
        ne === void 0 ? (o.items.push(Y), ne = o.items.indexOf(Y)) : o.items[ne] = Y;
        var R = "onClick", B = ee, z = (k = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: Pt(S, function() {
            ne !== o.getState().highlightedIndex && (o.setHighlightedIndex(ne, {
              type: wx
            }), o.avoidScrolling = !0, o.internalSetTimeout(function() {
              return o.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: Pt(Q, function(K) {
            K.preventDefault();
          })
        }, k[R] = Pt(B, function() {
          o.selectItemAtIndex(ne, {
            type: Ox
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
          var S = D.selectedItem;
          return Ue({
            isOpen: o.props.defaultIsOpen,
            highlightedIndex: o.props.defaultHighlightedIndex,
            inputValue: o.props.itemToString(S)
          }, C);
        }, k);
      }, o.toggleMenu = function(C, k) {
        C === void 0 && (C = {}), C = ds(C), o.internalSetState(function(D) {
          var S = D.isOpen;
          return Ue({
            isOpen: !S
          }, S && {
            highlightedIndex: o.props.defaultHighlightedIndex
          }, C);
        }, function() {
          var D = o.getState(), S = D.isOpen, Q = D.highlightedIndex;
          S && o.getItemCount() > 0 && typeof Q == "number" && o.setHighlightedIndex(Q, C), Ym(k)();
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
          var k = o.getState(), D = o.items[k.highlightedIndex], S = o.getItemCount(), Q = o.props.getA11yStatusMessage(Ue({
            itemToString: o.props.itemToString,
            previousResultCount: o.previousResultCount,
            resultCount: S,
            highlightedItem: D
          }, k));
          o.previousResultCount = S, yx(Q, o.props.environment.document);
        }
      }, 200);
      var l = o.props, u = l.defaultHighlightedIndex, d = l.initialHighlightedIndex, p = d === void 0 ? u : d, h = l.defaultIsOpen, g = l.initialIsOpen, x = g === void 0 ? h : g, b = l.initialInputValue, O = b === void 0 ? "" : b, _ = l.initialSelectedItem, w = _ === void 0 ? null : _, P = o.getState({
        highlightedIndex: p,
        isOpen: x,
        inputValue: O,
        selectedItem: w
      });
      return P.selectedItem != null && o.props.initialInputValue === void 0 && (P.inputValue = o.props.itemToString(P.selectedItem)), o.state = P, o;
    }
    xN(n, t);
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
      var o = this.getState(), l = o.highlightedIndex, u = o.inputValue, d = o.selectedItem, p = o.isOpen, h = this.props.itemToString, g = this.id, x = this.getRootProps, b = this.getToggleButtonProps, O = this.getLabelProps, _ = this.getMenuProps, w = this.getInputProps, P = this.getItemProps, C = this.openMenu, k = this.closeMenu, D = this.toggleMenu, S = this.selectItem, Q = this.selectItemAtIndex, ee = this.selectHighlightedItem, ne = this.setHighlightedIndex, V = this.clearSelection, Y = this.clearItems, te = this.reset, R = this.setItemCount, B = this.unsetItemCount, z = this.internalSetState;
      return {
        // prop getters
        getRootProps: x,
        getToggleButtonProps: b,
        getLabelProps: O,
        getMenuProps: _,
        getInputProps: w,
        getItemProps: P,
        // actions
        reset: te,
        openMenu: C,
        closeMenu: k,
        toggleMenu: D,
        selectItem: S,
        selectItemAtIndex: Q,
        selectHighlightedItem: ee,
        setHighlightedIndex: ne,
        clearSelection: V,
        clearItems: Y,
        setItemCount: R,
        unsetItemCount: B,
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
          var O = Ns(b.target, [o._rootNode, o._menuNode], o.props.environment);
          !O && o.getState().isOpen && o.reset({
            type: bx
          }, function() {
            return o.props.onOuterClick(o.getStateAndHelpers());
          });
        }, d = function() {
          o.isTouchMove = !1;
        }, p = function() {
          o.isTouchMove = !0;
        }, h = function(b) {
          var O = Ns(b.target, [o._rootNode, o._menuNode], o.props.environment, !1);
          !o.isTouchMove && !O && o.getState().isOpen && o.reset({
            type: Ix
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
        type: Ax,
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
        return process.env.NODE_ENV !== "production" && !this.getRootProps.suppressRefError && !this.props.suppressRefError && qN(l, this.getRootProps), l;
      if (mx(l))
        return /* @__PURE__ */ YO(l, this.getRootProps(gx(l)));
      if (process.env.NODE_ENV !== "production")
        throw new Error("downshift: If you return a non-DOM element, you must apply the getRootProps function");
    }, n;
  }(qO);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: NN,
    itemToString: function(n) {
      return n == null ? "" : (process.env.NODE_ENV !== "production" && $N(n) && !n.hasOwnProperty("toString") && console.warn("downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.", "The object that was passed:", n), String(n));
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
    scrollIntoView: px
  }, e.stateChangeTypes = WN, e;
}();
process.env.NODE_ENV !== "production" && (YN.propTypes = {
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
function qN(e, t) {
  var n = t.refKey, r = n !== "ref", a = !mx(e);
  a && !r && !Bm.isForwardRef(e) ? console.error("downshift: You returned a non-DOM element. You must specify a refKey in getRootProps") : !a && r && console.error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' + n + '"'), !Bm.isForwardRef(e) && !gx(e)[n] && console.error('downshift: You must apply the ref prop "' + n + '" from getRootProps onto your root element.');
}
var Mx = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function KN(e, t, n) {
  var r = e.props, a = e.type, o = {};
  Object.keys(t).forEach(function(l) {
    GN(l, e, t, n), n[l] !== t[l] && (o[l] = n[l]);
  }), r.onStateChange && Object.keys(o).length && r.onStateChange(Ue({
    type: a
  }, o));
}
function GN(e, t, n, r) {
  var a = t.props, o = t.type, l = "on" + kd(e) + "Change";
  a[l] && r[e] !== void 0 && r[e] !== n[e] && a[l](Ue({
    type: o
  }, r));
}
function XN(e, t) {
  return t.changes;
}
var Xm = sl(function(e, t) {
  yx(e, t);
}, 200), ZN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? zr : ct, JN = "useId" in $e ? function(t) {
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
  var n = t.id, r = n === void 0 ? "downshift-" + hx() : n, a = t.labelId, o = t.menuId, l = t.getItemId, u = t.toggleButtonId, d = t.inputId, p = qe({
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
function Nx(e, t, n, r) {
  var a, o;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(r);
    a = n[t], o = t;
  } else
    o = t === void 0 ? n.indexOf(e) : t, a = e;
  return [a, o];
}
function QN(e) {
  return /^\S{1}$/.test(e);
}
function kd(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function Pd(e) {
  var t = qe(e);
  return t.current = e, t;
}
function ej(e, t, n, r) {
  var a = qe(), o = qe(), l = Qe(function(b, O) {
    o.current = O, b = Ms(b, O.props);
    var _ = e(b, O), w = O.props.stateReducer(b, Ue({}, O, {
      changes: _
    }));
    return w;
  }, [e]), u = Tv(l, t, n), d = u[0], p = u[1], h = Pd(t), g = Qe(function(b) {
    return p(Ue({
      props: h.current
    }, b));
  }, [h]), x = o.current;
  return ct(function() {
    var b = Ms(a.current, x == null ? void 0 : x.props), O = x && a.current && !r(b, d);
    O && KN(x, b, d), a.current = d;
  }, [d, x, r]), [d, g];
}
function jx(e, t, n, r) {
  var a = ej(e, t, n, r), o = a[0], l = a[1];
  return [Ms(o, t), l];
}
var Ba = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: XN,
  scrollIntoView: px,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function wr(e, t, n) {
  n === void 0 && (n = Mx);
  var r = e["default" + kd(t)];
  return r !== void 0 ? r : n[t];
}
function Ji(e, t, n) {
  n === void 0 && (n = Mx);
  var r = e[t];
  if (r !== void 0)
    return r;
  var a = e["initial" + kd(t)];
  return a !== void 0 ? a : wr(e, t, n);
}
function tj(e) {
  var t = Ji(e, "selectedItem"), n = Ji(e, "isOpen"), r = aj(e), a = Ji(e, "inputValue");
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
function nj(e, t, n) {
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
function Rx(e, t, n, r) {
  r === void 0 && (r = {});
  var a = r.document, o = Md();
  ct(function() {
    if (!(!e || o || !a)) {
      var l = e(t);
      Xm(l, a);
    }
  }, n), ct(function() {
    return function() {
      Xm.cancel(), LN(a);
    };
  }, [a]);
}
function rj(e) {
  var t = e.highlightedIndex, n = e.isOpen, r = e.itemRefs, a = e.getItemNodeFromIndex, o = e.menuElement, l = e.scrollIntoView, u = qe(!0);
  return ZN(function() {
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
function ij(e, t) {
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
function $x(e) {
  var t = wr(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
function aj(e) {
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
}, Fx = Ue({}, _s, {
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
function oj(e, t, n) {
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
        highlightedIndex: $x(a),
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
function sj(e) {
  for (var t = e.keysSoFar, n = e.highlightedIndex, r = e.items, a = e.itemToString, o = e.isItemDisabled, l = t.toLowerCase(), u = 0; u < r.length; u++) {
    var d = (u + n + (t.length < 2 ? 1 : 0)) % r.length, p = r[d];
    if (p !== void 0 && a(p).toLowerCase().startsWith(l) && !o(p, d))
      return d;
  }
  return n;
}
var lj = fn(fn({}, Fx), { items: le.array.isRequired, isItemDisabled: le.func }), uj = fn(fn({}, Ba), { isItemDisabled: function() {
  return !1;
} }), Lx = dn;
process.env.NODE_ENV !== "production" && (Lx = function(e, t) {
  le.checkPropTypes(lj, e, "prop", t.name);
});
var Es = process.env.NODE_ENV !== "production" ? "__togglebutton_click__" : 0, Nd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_down__" : 1, jd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_up__" : 2, Rs = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_character__" : 3, Rd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_escape__" : 4, $d = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_home__" : 5, Fd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_end__" : 6, Ld = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_enter__" : 7, Wd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_space_button__" : 8, Vd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_page_up__" : 9, zd = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_page_down__" : 10, $s = process.env.NODE_ENV !== "production" ? "__togglebutton_blur__" : 11, Wx = process.env.NODE_ENV !== "production" ? "__menu_mouse_leave__" : 12, Vx = process.env.NODE_ENV !== "production" ? "__item_mouse_move__" : 13, Bd = process.env.NODE_ENV !== "production" ? "__item_click__" : 14, zx = process.env.NODE_ENV !== "production" ? "__function_toggle_menu__" : 15, Bx = process.env.NODE_ENV !== "production" ? "__function_open_menu__" : 16, Hx = process.env.NODE_ENV !== "production" ? "__function_close_menu__" : 17, Ux = process.env.NODE_ENV !== "production" ? "__function_set_highlighted_index__" : 18, Hd = process.env.NODE_ENV !== "production" ? "__function_select_item__" : 19, Rc = process.env.NODE_ENV !== "production" ? "__function_set_input_value__" : 20, Yx = process.env.NODE_ENV !== "production" ? "__function_reset__" : 21, qx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  FunctionCloseMenu: Hx,
  FunctionOpenMenu: Bx,
  FunctionReset: Yx,
  FunctionSelectItem: Hd,
  FunctionSetHighlightedIndex: Ux,
  FunctionSetInputValue: Rc,
  FunctionToggleMenu: zx,
  ItemClick: Bd,
  ItemMouseMove: Vx,
  MenuMouseLeave: Wx,
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
function cj(e, t) {
  var n, r = t.type, a = t.props, o = t.altKey, l;
  switch (r) {
    case Bd:
      l = {
        isOpen: wr(a, "isOpen"),
        highlightedIndex: $x(a),
        selectedItem: a.items[t.index]
      };
      break;
    case Rs:
      {
        var u = t.key, d = "" + e.inputValue + u, p = !e.isOpen && e.selectedItem ? a.items.findIndex(function(b) {
          return a.itemToKey(b) === a.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, h = sj({
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
      return oj(e, t, qx);
  }
  return Ue({}, e, l);
}
var dj = ["onClick"], fj = ["onMouseLeave", "refKey", "ref"], pj = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], hj = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Mn.stateChangeTypes = qx;
function Mn(e) {
  e === void 0 && (e = {}), Lx(e, Mn);
  var t = Ue({}, uj, e), n = t.scrollIntoView, r = t.environment, a = t.getA11yStatusMessage, o = jx(cj, t, tj, ij), l = o[0], u = o[1], d = l.isOpen, p = l.highlightedIndex, h = l.selectedItem, g = l.inputValue, x = qe(null), b = qe(null), O = qe({}), _ = qe(null), w = JN(t), P = Pd({
    state: l,
    props: t
  }), C = Qe(function(I) {
    return O.current[w.getItemId(I)];
  }, [w]);
  Rx(a, l, [d, p, h, g], r);
  var k = rj({
    menuElement: b.current,
    highlightedIndex: p,
    isOpen: d,
    itemRefs: O,
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
  var D = nj(r, Qe(function() {
    P.current.state.isOpen && u({
      type: $s
    });
  }, [u, P]), Rn(function() {
    return [b, x];
  }, [b.current, x.current])), S = Ad("getMenuProps", "getToggleButtonProps");
  ct(function() {
    d || (O.current = {});
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
      type: zx
    });
  }, [u]), ne = Qe(function() {
    u({
      type: Hx
    });
  }, [u]), V = Qe(function() {
    u({
      type: Bx
    });
  }, [u]), Y = Qe(function(I) {
    u({
      type: Ux,
      highlightedIndex: I
    });
  }, [u]), te = Qe(function(I) {
    u({
      type: Hd,
      selectedItem: I
    });
  }, [u]), R = Qe(function() {
    u({
      type: Yx
    });
  }, [u]), B = Qe(function(I) {
    u({
      type: Rc,
      inputValue: I
    });
  }, [u]), z = Qe(function(I) {
    var X = I === void 0 ? {} : I, M = X.onClick, L = zn(X, dj), ue = function() {
      var ce;
      (ce = x.current) == null || ce.focus();
    };
    return Ue({
      id: w.labelId,
      htmlFor: w.toggleButtonId,
      onClick: Pt(M, ue)
    }, L);
  }, [w]), U = Qe(function(I, X) {
    var M, L = I === void 0 ? {} : I, ue = L.onMouseLeave, he = L.refKey, ce = he === void 0 ? "ref" : he, ye = L.ref, ge = zn(L, fj), be = X === void 0 ? {} : X, we = be.suppressRefError, Ce = we === void 0 ? !1 : we, _e = function() {
      u({
        type: Wx
      });
    };
    return S("getMenuProps", Ce, ce, b), Ue((M = {}, M[ce] = mi(ye, function(Se) {
      b.current = Se;
    }), M.id = w.menuId, M.role = "listbox", M["aria-labelledby"] = ge && ge["aria-label"] ? void 0 : "" + w.labelId, M.onMouseLeave = Pt(ue, _e), M), ge);
  }, [u, S, w]), K = Qe(function(I, X) {
    var M, L = I === void 0 ? {} : I, ue = L.onBlur, he = L.onClick;
    L.onPress;
    var ce = L.onKeyDown, ye = L.refKey, ge = ye === void 0 ? "ref" : ye, be = L.ref, we = zn(L, pj), Ce = X === void 0 ? {} : X, _e = Ce.suppressRefError, Se = _e === void 0 ? !1 : _e, fe = P.current.state, Re = function() {
      u({
        type: Es
      });
    }, ve = function() {
      fe.isOpen && !D.isMouseDown && u({
        type: $s
      });
    }, et = function(N) {
      var Z = Xa(N);
      Z && Q[Z] ? Q[Z](N) : QN(Z) && u({
        type: Rs,
        key: Z
      });
    }, rt = Ue((M = {}, M[ge] = mi(be, function(Ke) {
      x.current = Ke;
    }), M["aria-activedescendant"] = fe.isOpen && fe.highlightedIndex > -1 ? w.getItemId(fe.highlightedIndex) : "", M["aria-controls"] = w.menuId, M["aria-expanded"] = P.current.state.isOpen, M["aria-haspopup"] = "listbox", M["aria-labelledby"] = we && we["aria-label"] ? void 0 : "" + w.labelId, M.id = w.toggleButtonId, M.role = "combobox", M.tabIndex = 0, M.onBlur = Pt(ue, ve), M), we);
    return we.disabled || (rt.onClick = Pt(he, Re), rt.onKeyDown = Pt(ce, et)), S("getToggleButtonProps", Se, ge, x), rt;
  }, [u, w, P, D, S, Q]), j = Qe(function(I) {
    var X, M = I === void 0 ? {} : I, L = M.item, ue = M.index, he = M.onMouseMove, ce = M.onClick, ye = M.onMouseDown;
    M.onPress;
    var ge = M.refKey, be = ge === void 0 ? "ref" : ge, we = M.disabled, Ce = M.ref, _e = zn(M, hj);
    we !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var Se = P.current, fe = Se.state, Re = Se.props, ve = Nx(L, ue, Re.items, "Pass either item or index to getItemProps!"), et = ve[0], rt = ve[1], Ke = Re.isItemDisabled(et, rt), N = function() {
      D.isTouchEnd || rt === fe.highlightedIndex || (k.current = !1, u({
        type: Vx,
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
      F && (O.current[w.getItemId(rt)] = F);
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
    setInputValue: B,
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
Ue({}, Fx, {
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
var Kx = {
  activeIndex: -1,
  selectedItems: []
};
function Jm(e, t) {
  return Ji(e, t, Kx);
}
function Qm(e, t) {
  return wr(e, t, Kx);
}
function mj(e) {
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
function gj(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
var vj = {
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
}, yj = {
  itemToKey: Ba.itemToKey,
  stateReducer: Ba.stateReducer,
  environment: Ba.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, Gx = dn;
process.env.NODE_ENV !== "production" && (Gx = function(t, n) {
  le.checkPropTypes(vj, t, "prop", n.name);
});
var Ud = process.env.NODE_ENV !== "production" ? "__selected_item_click__" : 0, Yd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_delete__" : 1, qd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_backspace__" : 2, Kd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_next__" : 3, Gd = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_previous__" : 4, Xd = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_navigation_previous__" : 5, Zd = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_backspace__" : 6, Jd = process.env.NODE_ENV !== "production" ? "__dropdown_click__" : 7, Qd = process.env.NODE_ENV !== "production" ? "__function_add_selected_item__" : 8, ef = process.env.NODE_ENV !== "production" ? "__function_remove_selected_item__" : 9, tf = process.env.NODE_ENV !== "production" ? "__function_set_selected_items__" : 10, nf = process.env.NODE_ENV !== "production" ? "__function_set_active_index__" : 11, rf = process.env.NODE_ENV !== "production" ? "__function_reset__" : 12, xj = /* @__PURE__ */ Object.freeze({
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
function bj(e, t) {
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
      var h = l, g = u.findIndex(function(O) {
        return a.itemToKey(O) === a.itemToKey(o);
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
var wj = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], _j = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
di.stateChangeTypes = xj;
function di(e) {
  e === void 0 && (e = {}), Gx(e, di);
  var t = Ue({}, yj, e), n = t.getA11yStatusMessage, r = t.environment, a = t.keyNavigationNext, o = t.keyNavigationPrevious, l = jx(bj, t, mj, gj), u = l[0], d = l[1], p = u.activeIndex, h = u.selectedItems, g = Md(), x = qe(null), b = qe();
  b.current = [];
  var O = Pd({
    state: u,
    props: t
  });
  Rx(n, u, [p, h], r), ct(function() {
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
    var Y, te = V === void 0 ? {} : V, R = te.refKey, B = R === void 0 ? "ref" : R, z = te.ref, U = te.onClick, K = te.onKeyDown, j = te.selectedItem, I = te.index, X = zn(te, wj), M = O.current.state, L = Nx(j, I, M.selectedItems, "Pass either item or index to getSelectedItemProps!"), ue = L[1], he = ue > -1 && ue === M.activeIndex, ce = function() {
      d({
        type: Ud,
        index: ue
      });
    }, ye = function(be) {
      var we = Xa(be);
      we && w[we] && w[we](be);
    };
    return Ue((Y = {}, Y[B] = mi(z, function(ge) {
      ge && b.current.push(ge);
    }), Y.tabIndex = he ? 0 : -1, Y.onClick = Pt(U, ce), Y.onKeyDown = Pt(K, ye), Y), X);
  }, [d, O, w]), k = Qe(function(V, Y) {
    var te, R = V === void 0 ? {} : V, B = R.refKey, z = B === void 0 ? "ref" : B, U = R.ref, K = R.onKeyDown, j = R.onClick, I = R.preventKeyAction, X = I === void 0 ? !1 : I, M = zn(R, _j), L = Y === void 0 ? {} : Y, ue = L.suppressRefError, he = ue === void 0 ? !1 : ue;
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
  }, [d]), S = Qe(function(V) {
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
    removeSelectedItem: S,
    setSelectedItems: Q,
    setActiveIndex: ee,
    reset: ne,
    selectedItems: h,
    activeIndex: p
  };
}
function Ej() {
  this.__data__ = [], this.size = 0;
}
var Cj = Ej;
function Tj(e, t) {
  return e === t || e !== e && t !== t;
}
var Xx = Tj, Oj = Xx;
function Sj(e, t) {
  for (var n = e.length; n--; )
    if (Oj(e[n][0], t))
      return n;
  return -1;
}
var ll = Sj, Dj = ll, kj = Array.prototype, Pj = kj.splice;
function Aj(e) {
  var t = this.__data__, n = Dj(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Pj.call(t, n, 1), --this.size, !0;
}
var Ij = Aj, Mj = ll;
function Nj(e) {
  var t = this.__data__, n = Mj(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var jj = Nj, Rj = ll;
function $j(e) {
  return Rj(this.__data__, e) > -1;
}
var Fj = $j, Lj = ll;
function Wj(e, t) {
  var n = this.__data__, r = Lj(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var Vj = Wj, zj = Cj, Bj = Ij, Hj = jj, Uj = Fj, Yj = Vj;
function la(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
la.prototype.clear = zj;
la.prototype.delete = Bj;
la.prototype.get = Hj;
la.prototype.has = Uj;
la.prototype.set = Yj;
var ul = la, qj = ul;
function Kj() {
  this.__data__ = new qj(), this.size = 0;
}
var Gj = Kj;
function Xj(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var Zj = Xj;
function Jj(e) {
  return this.__data__.get(e);
}
var Qj = Jj;
function eR(e) {
  return this.__data__.has(e);
}
var tR = eR, nR = typeof Yi == "object" && Yi && Yi.Object === Object && Yi, Zx = nR, rR = Zx, iR = typeof self == "object" && self && self.Object === Object && self, aR = rR || iR || Function("return this")(), Tr = aR, oR = Tr, sR = oR.Symbol, af = sR, tg = af, Jx = Object.prototype, lR = Jx.hasOwnProperty, uR = Jx.toString, Fa = tg ? tg.toStringTag : void 0;
function cR(e) {
  var t = lR.call(e, Fa), n = e[Fa];
  try {
    e[Fa] = void 0;
    var r = !0;
  } catch {
  }
  var a = uR.call(e);
  return r && (t ? e[Fa] = n : delete e[Fa]), a;
}
var dR = cR, fR = Object.prototype, pR = fR.toString;
function hR(e) {
  return pR.call(e);
}
var mR = hR, ng = af, gR = dR, vR = mR, yR = "[object Null]", xR = "[object Undefined]", rg = ng ? ng.toStringTag : void 0;
function bR(e) {
  return e == null ? e === void 0 ? xR : yR : rg && rg in Object(e) ? gR(e) : vR(e);
}
var cl = bR;
function wR(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Qx = wR, _R = cl, ER = Qx, CR = "[object AsyncFunction]", TR = "[object Function]", OR = "[object GeneratorFunction]", SR = "[object Proxy]";
function DR(e) {
  if (!ER(e))
    return !1;
  var t = _R(e);
  return t == TR || t == OR || t == CR || t == SR;
}
var eb = DR, kR = Tr, PR = kR["__core-js_shared__"], AR = PR, rc = AR, ig = function() {
  var e = /[^.]+$/.exec(rc && rc.keys && rc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function IR(e) {
  return !!ig && ig in e;
}
var MR = IR, NR = Function.prototype, jR = NR.toString;
function RR(e) {
  if (e != null) {
    try {
      return jR.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var tb = RR, $R = eb, FR = MR, LR = Qx, WR = tb, VR = /[\\^$.*+?()[\]{}|]/g, zR = /^\[object .+?Constructor\]$/, BR = Function.prototype, HR = Object.prototype, UR = BR.toString, YR = HR.hasOwnProperty, qR = RegExp(
  "^" + UR.call(YR).replace(VR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function KR(e) {
  if (!LR(e) || FR(e))
    return !1;
  var t = $R(e) ? qR : zR;
  return t.test(WR(e));
}
var GR = KR;
function XR(e, t) {
  return e == null ? void 0 : e[t];
}
var ZR = XR, JR = GR, QR = ZR;
function e2(e, t) {
  var n = QR(e, t);
  return JR(n) ? n : void 0;
}
var ua = e2, t2 = ua, n2 = Tr, r2 = t2(n2, "Map"), of = r2, i2 = ua, a2 = i2(Object, "create"), dl = a2, ag = dl;
function o2() {
  this.__data__ = ag ? ag(null) : {}, this.size = 0;
}
var s2 = o2;
function l2(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var u2 = l2, c2 = dl, d2 = "__lodash_hash_undefined__", f2 = Object.prototype, p2 = f2.hasOwnProperty;
function h2(e) {
  var t = this.__data__;
  if (c2) {
    var n = t[e];
    return n === d2 ? void 0 : n;
  }
  return p2.call(t, e) ? t[e] : void 0;
}
var m2 = h2, g2 = dl, v2 = Object.prototype, y2 = v2.hasOwnProperty;
function x2(e) {
  var t = this.__data__;
  return g2 ? t[e] !== void 0 : y2.call(t, e);
}
var b2 = x2, w2 = dl, _2 = "__lodash_hash_undefined__";
function E2(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = w2 && t === void 0 ? _2 : t, this;
}
var C2 = E2, T2 = s2, O2 = u2, S2 = m2, D2 = b2, k2 = C2;
function ca(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ca.prototype.clear = T2;
ca.prototype.delete = O2;
ca.prototype.get = S2;
ca.prototype.has = D2;
ca.prototype.set = k2;
var P2 = ca, og = P2, A2 = ul, I2 = of;
function M2() {
  this.size = 0, this.__data__ = {
    hash: new og(),
    map: new (I2 || A2)(),
    string: new og()
  };
}
var N2 = M2;
function j2(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var R2 = j2, $2 = R2;
function F2(e, t) {
  var n = e.__data__;
  return $2(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var fl = F2, L2 = fl;
function W2(e) {
  var t = L2(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var V2 = W2, z2 = fl;
function B2(e) {
  return z2(this, e).get(e);
}
var H2 = B2, U2 = fl;
function Y2(e) {
  return U2(this, e).has(e);
}
var q2 = Y2, K2 = fl;
function G2(e, t) {
  var n = K2(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var X2 = G2, Z2 = N2, J2 = V2, Q2 = H2, e$ = q2, t$ = X2;
function da(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
da.prototype.clear = Z2;
da.prototype.delete = J2;
da.prototype.get = Q2;
da.prototype.has = e$;
da.prototype.set = t$;
var nb = da, n$ = ul, r$ = of, i$ = nb, a$ = 200;
function o$(e, t) {
  var n = this.__data__;
  if (n instanceof n$) {
    var r = n.__data__;
    if (!r$ || r.length < a$ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new i$(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var s$ = o$, l$ = ul, u$ = Gj, c$ = Zj, d$ = Qj, f$ = tR, p$ = s$;
function fa(e) {
  var t = this.__data__ = new l$(e);
  this.size = t.size;
}
fa.prototype.clear = u$;
fa.prototype.delete = c$;
fa.prototype.get = d$;
fa.prototype.has = f$;
fa.prototype.set = p$;
var h$ = fa, m$ = "__lodash_hash_undefined__";
function g$(e) {
  return this.__data__.set(e, m$), this;
}
var v$ = g$;
function y$(e) {
  return this.__data__.has(e);
}
var x$ = y$, b$ = nb, w$ = v$, _$ = x$;
function Fs(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new b$(); ++t < n; )
    this.add(e[t]);
}
Fs.prototype.add = Fs.prototype.push = w$;
Fs.prototype.has = _$;
var E$ = Fs;
function C$(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var T$ = C$;
function O$(e, t) {
  return e.has(t);
}
var S$ = O$, D$ = E$, k$ = T$, P$ = S$, A$ = 1, I$ = 2;
function M$(e, t, n, r, a, o) {
  var l = n & A$, u = e.length, d = t.length;
  if (u != d && !(l && d > u))
    return !1;
  var p = o.get(e), h = o.get(t);
  if (p && h)
    return p == t && h == e;
  var g = -1, x = !0, b = n & I$ ? new D$() : void 0;
  for (o.set(e, t), o.set(t, e); ++g < u; ) {
    var O = e[g], _ = t[g];
    if (r)
      var w = l ? r(_, O, g, t, e, o) : r(O, _, g, e, t, o);
    if (w !== void 0) {
      if (w)
        continue;
      x = !1;
      break;
    }
    if (b) {
      if (!k$(t, function(P, C) {
        if (!P$(b, C) && (O === P || a(O, P, n, r, o)))
          return b.push(C);
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
var rb = M$, N$ = Tr, j$ = N$.Uint8Array, R$ = j$;
function $$(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var F$ = $$;
function L$(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var W$ = L$, sg = af, lg = R$, V$ = Xx, z$ = rb, B$ = F$, H$ = W$, U$ = 1, Y$ = 2, q$ = "[object Boolean]", K$ = "[object Date]", G$ = "[object Error]", X$ = "[object Map]", Z$ = "[object Number]", J$ = "[object RegExp]", Q$ = "[object Set]", eF = "[object String]", tF = "[object Symbol]", nF = "[object ArrayBuffer]", rF = "[object DataView]", ug = sg ? sg.prototype : void 0, ic = ug ? ug.valueOf : void 0;
function iF(e, t, n, r, a, o, l) {
  switch (n) {
    case rF:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case nF:
      return !(e.byteLength != t.byteLength || !o(new lg(e), new lg(t)));
    case q$:
    case K$:
    case Z$:
      return V$(+e, +t);
    case G$:
      return e.name == t.name && e.message == t.message;
    case J$:
    case eF:
      return e == t + "";
    case X$:
      var u = B$;
    case Q$:
      var d = r & U$;
      if (u || (u = H$), e.size != t.size && !d)
        return !1;
      var p = l.get(e);
      if (p)
        return p == t;
      r |= Y$, l.set(e, t);
      var h = z$(u(e), u(t), r, a, o, l);
      return l.delete(e), h;
    case tF:
      if (ic)
        return ic.call(e) == ic.call(t);
  }
  return !1;
}
var aF = iF;
function oF(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var sF = oF, lF = Array.isArray, sf = lF, uF = sF, cF = sf;
function dF(e, t, n) {
  var r = t(e);
  return cF(e) ? r : uF(r, n(e));
}
var fF = dF;
function pF(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (o[a++] = l);
  }
  return o;
}
var hF = pF;
function mF() {
  return [];
}
var gF = mF, vF = hF, yF = gF, xF = Object.prototype, bF = xF.propertyIsEnumerable, cg = Object.getOwnPropertySymbols, wF = cg ? function(e) {
  return e == null ? [] : (e = Object(e), vF(cg(e), function(t) {
    return bF.call(e, t);
  }));
} : yF, _F = wF;
function EF(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var CF = EF;
function TF(e) {
  return e != null && typeof e == "object";
}
var pl = TF, OF = cl, SF = pl, DF = "[object Arguments]";
function kF(e) {
  return SF(e) && OF(e) == DF;
}
var PF = kF, dg = PF, AF = pl, ib = Object.prototype, IF = ib.hasOwnProperty, MF = ib.propertyIsEnumerable, NF = dg(/* @__PURE__ */ function() {
  return arguments;
}()) ? dg : function(e) {
  return AF(e) && IF.call(e, "callee") && !MF.call(e, "callee");
}, jF = NF, Ls = { exports: {} };
function RF() {
  return !1;
}
var $F = RF;
Ls.exports;
(function(e, t) {
  var n = Tr, r = $F, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, l = o && o.exports === a, u = l ? n.Buffer : void 0, d = u ? u.isBuffer : void 0, p = d || r;
  e.exports = p;
})(Ls, Ls.exports);
var ab = Ls.exports, FF = 9007199254740991, LF = /^(?:0|[1-9]\d*)$/;
function WF(e, t) {
  var n = typeof e;
  return t = t ?? FF, !!t && (n == "number" || n != "symbol" && LF.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var VF = WF, zF = 9007199254740991;
function BF(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= zF;
}
var ob = BF, HF = cl, UF = ob, YF = pl, qF = "[object Arguments]", KF = "[object Array]", GF = "[object Boolean]", XF = "[object Date]", ZF = "[object Error]", JF = "[object Function]", QF = "[object Map]", eL = "[object Number]", tL = "[object Object]", nL = "[object RegExp]", rL = "[object Set]", iL = "[object String]", aL = "[object WeakMap]", oL = "[object ArrayBuffer]", sL = "[object DataView]", lL = "[object Float32Array]", uL = "[object Float64Array]", cL = "[object Int8Array]", dL = "[object Int16Array]", fL = "[object Int32Array]", pL = "[object Uint8Array]", hL = "[object Uint8ClampedArray]", mL = "[object Uint16Array]", gL = "[object Uint32Array]", Ct = {};
Ct[lL] = Ct[uL] = Ct[cL] = Ct[dL] = Ct[fL] = Ct[pL] = Ct[hL] = Ct[mL] = Ct[gL] = !0;
Ct[qF] = Ct[KF] = Ct[oL] = Ct[GF] = Ct[sL] = Ct[XF] = Ct[ZF] = Ct[JF] = Ct[QF] = Ct[eL] = Ct[tL] = Ct[nL] = Ct[rL] = Ct[iL] = Ct[aL] = !1;
function vL(e) {
  return YF(e) && UF(e.length) && !!Ct[HF(e)];
}
var yL = vL;
function xL(e) {
  return function(t) {
    return e(t);
  };
}
var bL = xL, Ws = { exports: {} };
Ws.exports;
(function(e, t) {
  var n = Zx, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, l = o && n.process, u = function() {
    try {
      var d = a && a.require && a.require("util").types;
      return d || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(Ws, Ws.exports);
var wL = Ws.exports, _L = yL, EL = bL, fg = wL, pg = fg && fg.isTypedArray, CL = pg ? EL(pg) : _L, sb = CL, TL = CF, OL = jF, SL = sf, DL = ab, kL = VF, PL = sb, AL = Object.prototype, IL = AL.hasOwnProperty;
function ML(e, t) {
  var n = SL(e), r = !n && OL(e), a = !n && !r && DL(e), o = !n && !r && !a && PL(e), l = n || r || a || o, u = l ? TL(e.length, String) : [], d = u.length;
  for (var p in e)
    (t || IL.call(e, p)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    kL(p, d))) && u.push(p);
  return u;
}
var NL = ML, jL = Object.prototype;
function RL(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || jL;
  return e === n;
}
var $L = RL;
function FL(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var LL = FL, WL = LL, VL = WL(Object.keys, Object), zL = VL, BL = $L, HL = zL, UL = Object.prototype, YL = UL.hasOwnProperty;
function qL(e) {
  if (!BL(e))
    return HL(e);
  var t = [];
  for (var n in Object(e))
    YL.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var KL = qL, GL = eb, XL = ob;
function ZL(e) {
  return e != null && XL(e.length) && !GL(e);
}
var JL = ZL, QL = NL, e4 = KL, t4 = JL;
function n4(e) {
  return t4(e) ? QL(e) : e4(e);
}
var r4 = n4, i4 = fF, a4 = _F, o4 = r4;
function s4(e) {
  return i4(e, o4, a4);
}
var l4 = s4, hg = l4, u4 = 1, c4 = Object.prototype, d4 = c4.hasOwnProperty;
function f4(e, t, n, r, a, o) {
  var l = n & u4, u = hg(e), d = u.length, p = hg(t), h = p.length;
  if (d != h && !l)
    return !1;
  for (var g = d; g--; ) {
    var x = u[g];
    if (!(l ? x in t : d4.call(t, x)))
      return !1;
  }
  var b = o.get(e), O = o.get(t);
  if (b && O)
    return b == t && O == e;
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
    var D = e.constructor, S = t.constructor;
    D != S && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof S == "function" && S instanceof S) && (_ = !1);
  }
  return o.delete(e), o.delete(t), _;
}
var p4 = f4, h4 = ua, m4 = Tr, g4 = h4(m4, "DataView"), v4 = g4, y4 = ua, x4 = Tr, b4 = y4(x4, "Promise"), w4 = b4, _4 = ua, E4 = Tr, C4 = _4(E4, "Set"), T4 = C4, O4 = ua, S4 = Tr, D4 = O4(S4, "WeakMap"), k4 = D4, $c = v4, Fc = of, Lc = w4, Wc = T4, Vc = k4, lb = cl, pa = tb, mg = "[object Map]", P4 = "[object Object]", gg = "[object Promise]", vg = "[object Set]", yg = "[object WeakMap]", xg = "[object DataView]", A4 = pa($c), I4 = pa(Fc), M4 = pa(Lc), N4 = pa(Wc), j4 = pa(Vc), ci = lb;
($c && ci(new $c(new ArrayBuffer(1))) != xg || Fc && ci(new Fc()) != mg || Lc && ci(Lc.resolve()) != gg || Wc && ci(new Wc()) != vg || Vc && ci(new Vc()) != yg) && (ci = function(e) {
  var t = lb(e), n = t == P4 ? e.constructor : void 0, r = n ? pa(n) : "";
  if (r)
    switch (r) {
      case A4:
        return xg;
      case I4:
        return mg;
      case M4:
        return gg;
      case N4:
        return vg;
      case j4:
        return yg;
    }
  return t;
});
var R4 = ci, ac = h$, $4 = rb, F4 = aF, L4 = p4, bg = R4, wg = sf, _g = ab, W4 = sb, V4 = 1, Eg = "[object Arguments]", Cg = "[object Array]", fs = "[object Object]", z4 = Object.prototype, Tg = z4.hasOwnProperty;
function B4(e, t, n, r, a, o) {
  var l = wg(e), u = wg(t), d = l ? Cg : bg(e), p = u ? Cg : bg(t);
  d = d == Eg ? fs : d, p = p == Eg ? fs : p;
  var h = d == fs, g = p == fs, x = d == p;
  if (x && _g(e)) {
    if (!_g(t))
      return !1;
    l = !0, h = !1;
  }
  if (x && !h)
    return o || (o = new ac()), l || W4(e) ? $4(e, t, n, r, a, o) : F4(e, t, d, n, r, a, o);
  if (!(n & V4)) {
    var b = h && Tg.call(e, "__wrapped__"), O = g && Tg.call(t, "__wrapped__");
    if (b || O) {
      var _ = b ? e.value() : e, w = O ? t.value() : t;
      return o || (o = new ac()), a(_, w, n, r, o);
    }
  }
  return x ? (o || (o = new ac()), L4(e, t, n, r, a, o)) : !1;
}
var H4 = B4, U4 = H4, Og = pl;
function ub(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !Og(e) && !Og(t) ? e !== e && t !== t : U4(e, t, n, r, ub, a);
}
var Y4 = ub, q4 = Y4;
function K4(e, t) {
  return q4(e, t);
}
var G4 = K4;
const cb = /* @__PURE__ */ Qs(G4), Xr = J.createContext(void 0), X4 = ({
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
  } = n, O = qe(null), _ = qe(null), w = r == null ? void 0 : r.findIndex((V) => {
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
  const { getToggleButtonProps: S, getMenuProps: Q, getItemProps: ee } = Mn({
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
      let { changes: te, type: R, index: B } = Y;
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
            highlightedIndex: B
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
    return Qa({
      ref: _,
      onChange: (R) => {
        D(0), x(R.target.value);
      },
      onKeyDown: (R) => {
        var B;
        (R.key === "ArrowDown" || R.key === "ArrowUp" || R.key === "Enter" || R.key === "Escape") && (R.preventDefault(), (B = Y.onKeyDown) == null || B.call(Y, R));
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
        getToggleButtonProps: S,
        getMenuProps: Q,
        getInputProps: ne,
        getItemProps: ee,
        getSelectedItemProps: P,
        getDropdownProps: C,
        toggleButtonRef: O
      },
      children: e
    }
  );
}, Z4 = (e, t) => {
  var n;
  return ((n = Sv(e.label)) == null ? void 0 : n.toLowerCase().includes(t.toLowerCase())) || e.value.toLowerCase().includes(t.toLowerCase());
}, J4 = ({
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
  searchFilter: h = Z4,
  forceMount: g,
  defaultOpen: x,
  open: b,
  onOpenChange: O,
  allowAddOption: _,
  onAddOption: w,
  disabled: P,
  required: C,
  // context control props
  highlightOnMouseOver: k,
  ...D
}) => {
  const S = qe(null), Q = a ?? (n ? [] : ""), [ee, ne] = Ki(
    Q,
    o,
    l
  );
  if (ct(() => {
    cb(ee, Q) || ne(ee);
  }, [Q, n]), n && !Array.isArray(ee))
    throw new Error("SelectRoot: selected must be an array when multiple is true");
  if (!n && Array.isArray(ee))
    throw new Error("SelectRoot: selected must be a string when multiple is false");
  const [V, Y] = Ki(
    u ?? "",
    d,
    p
  ), [te, R] = Ki(x ?? !1, b, O), [B, z] = ht([]), [U, K] = ht([]);
  zr(() => {
    (te || g || B) && K(B);
  }, [te, B]), zr(() => {
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
    X4,
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
      children: /* @__PURE__ */ v.jsx(L, { ...D, ref: S, children: r })
    }
  );
}, Q4 = ({ asChild: e, ...t }) => {
  const { getInputProps: n } = Yt(Xr), r = n(), a = e ? Tt : "input";
  return /* @__PURE__ */ v.jsx(a, { ...Qa(r, t) });
}, eW = ({ asChild: e, ...t }) => {
  const n = qe(null), { open: r, getMenuProps: a } = Yt(Xr), o = a(), l = Qa(o, t), u = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(u, { ...l, ref: nn(l.ref, n), "data-state": r ? "open" : "closed" });
}, tW = ({ asChild: e, placeholder: t = "", ...n }) => {
  var d;
  const r = qe(null), { selectedOptions: a } = Yt(Xr), o = a.length > 1 ? (
    // TODO: join doesnt work on formatted values
    a.map((p) => p.label).join(", ")
  ) : (d = a[0]) == null ? void 0 : d.label, l = a.length === 0 || a.length === 1 && a[0].value === "", u = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(u, { ...n, ref: nn(r, n.ref), "data-placeholder": l ? "" : void 0, children: l ? t : o });
}, nW = ({ asChild: e, ...t }) => {
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
}, rW = ({ asChild: e, ...t }) => {
  const n = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(n, { ...t });
}, iW = ({ asChild: e, ...t }) => {
  const n = e ? Tt : "label";
  return /* @__PURE__ */ v.jsx(n, { role: "group", ...t });
}, aW = ({ asChild: e, ...t }) => {
  const n = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(n, { "aria-hidden": "true", role: "separator", ...t });
}, lf = J.createContext(void 0), oW = ({ asChild: e, value: t, disabled: n, index: r = void 0, ...a }) => {
  const o = qe(null), { filteredOptions: l, selectedOptions: u, getItemProps: d, highlightedIndex: p, registerOption: h, unregisterOption: g } = Yt(Xr), [x, b] = ht(""), O = { ref: o, value: t, label: x, disabled: n };
  zr(() => (h(O, r), () => g(O)), [t, x, n, r]);
  const _ = l == null ? void 0 : l.findIndex((Q) => Q.value === t), w = _ !== void 0 && _ > -1 ? l == null ? void 0 : l[_] : void 0, P = u == null ? void 0 : u.some((Q) => Q.value === t);
  if (!w) return null;
  const C = d({ item: w, index: _ }), k = Qa(C, a), D = p === _, S = e ? Tt : "div";
  return /* @__PURE__ */ v.jsx(lf.Provider, { value: { isSelected: P, isHighlighted: D, value: t, onTextChange: b }, children: /* @__PURE__ */ v.jsx(
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
}, sW = ({ asChild: e, children: t, ...n }) => {
  const { onTextChange: r } = Yt(lf);
  zr(() => {
    r(t);
  }, [t]);
  const a = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(a, { ...n, children: t });
}, lW = ({ asChild: e, ...t }) => {
  const { isSelected: n } = Yt(lf);
  if (!n) return null;
  const r = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(r, { ...t });
}, uf = ({ focusRef: e, onFocus: t, value: n, onChange: r }) => {
  const a = qe(null);
  return {
    onSelectedChange: (u) => {
      cb(n, u) || Hv(a == null ? void 0 : a.current, u);
    },
    selectNativeProps: {
      ref: a,
      onFocus: IS(t, (u) => {
        var d;
        (d = e == null ? void 0 : e.current) == null || d.focus();
      }),
      onChange: r
    }
  };
}, uW = ({ ref: e, ...t }) => {
  const n = qe(null), { multiple: r, options: a, required: o } = Yt(Xr);
  return /* @__PURE__ */ v.jsxs("select", { ...t, tabIndex: -1, multiple: r, ref: nn(n, e), children: [
    !o && /* @__PURE__ */ v.jsx("option", { value: "", disabled: !1 }),
    a == null ? void 0 : a.map((l) => {
      const u = typeof l.label == "string" ? l.label : Sv(l.label || "");
      return /* @__PURE__ */ v.jsx("option", { value: l.value, children: u }, l.value);
    })
  ] });
}, Ze = Object.assign(J4, {
  Search: Q4,
  Content: eW,
  Value: tW,
  Trigger: nW,
  Group: rW,
  GroupLabel: iW,
  Separator: aW,
  Option: oW,
  OptionText: sW,
  OptionIndicator: lW,
  Native: uW
}), cW = ({
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
), oc = J.memo(cW), db = ({
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
  className: O,
  value: _,
  onChange: w,
  onFocus: P,
  ...C
}) => {
  const k = J.useRef(null), D = J.useRef(null), [S, Q] = ht(!1);
  ct(() => {
    setTimeout(() => {
      Q(!0);
    }, 0);
  }, []);
  const [ee, ne] = Xt("", _, w), [V, Y] = ht(!1), [te, R] = ht(""), B = (L) => {
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
    Hv(U.ref.current, ""), L.preventDefault(), L.stopPropagation();
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
      forceMount: !S,
      onOpenChange: B,
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
                ee && !b && !C.required ? /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: K, children: /* @__PURE__ */ v.jsx(_i, {}) }) : /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "pointer-events-none -ml-2", children: /* @__PURE__ */ v.jsx(
                  lD,
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
                  /* @__PURE__ */ v.jsxs("div", { className: Pe("relative w-full min-w-0 p-2", g && "hidden"), children: [
                    /* @__PURE__ */ v.jsx("span", { className: "absolute top-1/2 left-4 transform -translate-y-1/2 text-neutral-400 text-xl", children: /* @__PURE__ */ v.jsx(yD, { className: "!w-3.5 !h-3.5" }) }),
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
}, Sg = (e, t) => Object.keys({ ...e, ...t }).reduce((n, r) => ({
  ...n,
  [r]: Pe(e[r], t[r])
}), {}), fb = ({
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
    yN,
    {
      locale: WI,
      captionLayout: "dropdown-buttons",
      showOutsideDays: n,
      weekStartsOn: 1,
      modifiersClassNames: Sg(u, a),
      modifiers: { ...l, ...r },
      className: Pe("p-3", e),
      classNames: Sg({
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
        IconLeft: ({ ...d }) => /* @__PURE__ */ v.jsx(oD, { className: "h-4 w-4" }),
        IconRight: ({ ...d }) => /* @__PURE__ */ v.jsx(sD, { className: "h-4 w-4" }),
        Dropdown: ({ ...d }) => {
          const { name: p, onChange: h, value: g } = d;
          return /* @__PURE__ */ v.jsx(
            db,
            {
              className: Pe(p === "months" && "min-w-[6.75rem]", d.className),
              onChange: h,
              value: g == null ? void 0 : g.toString(),
              name: p,
              options: J.Children.map(d.children, (x) => {
                var b, O;
                return {
                  value: (b = x.props) == null ? void 0 : b.value.toString(),
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
var pb = { exports: {} };
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
})(pb);
var dW = pb.exports;
const fW = /* @__PURE__ */ Qs(dW);
var hb = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Yi, function() {
    var n = 1e3, r = 6e4, a = 36e5, o = "millisecond", l = "second", u = "minute", d = "hour", p = "day", h = "week", g = "month", x = "quarter", b = "year", O = "date", _ = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(z) {
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
      return { M: g, y: b, w: h, d: p, D: O, h: d, m: u, s: l, ms: o, Q: x }[z] || String(z || "").toLowerCase().replace(/s$/, "");
    }, u: function(z) {
      return z === void 0;
    } }, S = "en", Q = {};
    Q[S] = C;
    var ee = "$isDayjsObject", ne = function(z) {
      return z instanceof R || !(!z || !z[ee]);
    }, V = function z(U, K, j) {
      var I;
      if (!U) return S;
      if (typeof U == "string") {
        var X = U.toLowerCase();
        Q[X] && (I = X), K && (Q[X] = K, I = X);
        var M = U.split("-");
        if (!I && M.length > 1) return z(M[0]);
      } else {
        var L = U.name;
        Q[L] = U, I = L;
      }
      return !j && I && (S = I), I || !j && S;
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
        var I, X = te.p(K), M = "set" + (this.$u ? "UTC" : ""), L = (I = {}, I[p] = M + "Date", I[O] = M + "Date", I[g] = M + "Month", I[b] = M + "FullYear", I[d] = M + "Hours", I[u] = M + "Minutes", I[l] = M + "Seconds", I[o] = M + "Milliseconds", I)[X], ue = X === p ? this.$D + (j - this.$W) : j;
        if (X === g || X === b) {
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
    }(), B = R.prototype;
    return Y.prototype = B, [["$ms", o], ["$s", l], ["$m", u], ["$H", d], ["$W", p], ["$M", g], ["$y", b], ["$D", O]].forEach(function(z) {
      B[z[1]] = function(U) {
        return this.$g(U, z[0], z[1]);
      };
    }), Y.extend = function(z, U) {
      return z.$i || (z(U, R, Y), z.$i = !0), Y;
    }, Y.locale = V, Y.isDayjs = ne, Y.unix = function(z) {
      return Y(1e3 * z);
    }, Y.en = Q[S], Y.Ls = Q, Y.p = {}, Y;
  });
})(hb);
var pW = hb.exports;
const Ut = /* @__PURE__ */ Qs(pW);
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
function Dg(e, t) {
  t = t.add(1, "day"), Hn(e, t), qr(e, t);
}
function hW(e, t) {
  t = t.add(1, "day"), Ha(e, t), qr(e, t);
}
function Hn(e, t) {
  e.assign("day", t.date()), e.assign("month", t.month() + 1), e.assign("year", t.year());
}
function mb(e, t) {
  e.assign("hour", t.hour()), e.assign("minute", t.minute()), e.assign("second", t.second()), e.assign("millisecond", t.millisecond()), e.get("hour") < 12 ? e.assign("meridiem", We.AM) : e.assign("meridiem", We.PM);
}
function Ha(e, t) {
  e.imply("day", t.date()), e.imply("month", t.month() + 1), e.imply("year", t.year());
}
function qr(e, t) {
  e.imply("hour", t.hour()), e.imply("minute", t.minute()), e.imply("second", t.second()), e.imply("millisecond", t.millisecond());
}
const mW = {
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
    dstStart: (e) => kg(e, Nn.MARCH, zt.SUNDAY, 2),
    dstEnd: (e) => kg(e, Nn.OCTOBER, zt.SUNDAY, 3)
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
function kg(e, t, n, r = 0) {
  const a = n === 0 ? 7 : n, o = new Date(e, t - 1 + 1, 1, 12), l = o.getDay() === 0 ? 7 : o.getDay();
  let u;
  return l === a ? u = 7 : l < a ? u = 7 + l - a : u = l - a, o.setDate(o.getDate() - u), new Date(e, t - 1, o.getDate(), r);
}
function gb(e, t, n = {}) {
  if (e == null)
    return null;
  if (typeof e == "number")
    return e;
  const r = n[e] ?? mW[e];
  return r == null ? null : typeof r == "number" ? r : t == null ? null : Ut(t).isAfter(r.dstStart(t.getFullYear())) && !Ut(t).isAfter(r.dstEnd(t.getFullYear())) ? r.timezoneOffsetDuringDst : r.timezoneOffsetNonDst;
}
Ut.extend(fW);
class cf {
  constructor(t) {
    t = t ?? /* @__PURE__ */ new Date(), t instanceof Date ? this.instant = t : (this.instant = t.instant ?? /* @__PURE__ */ new Date(), this.timezoneOffset = gb(t.timezone, this.instant));
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
    return n.hour || n.minute || n.second ? (mb(a, r), Hn(a, r), t.timezoneOffset !== null && a.assign("timezoneOffset", -t.instant.getTimezoneOffset())) : (qr(a, r), t.timezoneOffset !== null && a.imply("timezoneOffset", -t.instant.getTimezoneOffset()), n.d ? (a.assign("day", r.date()), a.assign("month", r.month() + 1), a.assign("year", r.year())) : n.week ? (a.assign("day", r.date()), a.assign("month", r.month() + 1), a.assign("year", r.year()), a.imply("weekday", r.day())) : (a.imply("day", r.date()), n.month ? (a.assign("month", r.month() + 1), a.assign("year", r.year())) : (a.imply("month", r.month() + 1), n.year ? a.assign("year", r.year()) : a.imply("year", r.year())))), a;
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
function gW(e) {
  let t;
  return e instanceof Array ? t = [...e] : e instanceof Map ? t = Array.from(e.keys()) : t = Object.keys(e), t;
}
function rn(e) {
  return `(?:${gW(e).sort((n, r) => r.length - n.length).join("|").replace(/\./g, "\\.")})`;
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
const vb = {
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
}, yb = {
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
  ...yb,
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
}, xb = {
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
  ...xb
}, bb = `(?:${rn(zc)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
function vW(e) {
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
const wb = `(${bb})\\s{0,3}(${rn(hl)})`, Pg = new RegExp(wb, "i"), yW = `(${bb})\\s{0,3}(${rn(xb)})`, _b = "\\s{0,5},?(?:\\s*and)?\\s{0,5}", so = df("(?:(?:about|around)\\s{0,3})?", wb, _b), vl = df("(?:(?:about|around)\\s{0,3})?", yW, _b);
function ma(e) {
  const t = {};
  let n = e, r = Pg.exec(n);
  for (; r; )
    xW(t, r), n = n.substring(r[0].length).trim(), r = Pg.exec(n);
  return Object.keys(t).length == 0 ? null : t;
}
function xW(e, t) {
  if (t[0].match(/^[a-zA-Z]+$/))
    return;
  const n = vW(t[1]), r = hl[t[2].toLowerCase()];
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
const bW = new RegExp(`(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${so})(?=\\W|$)`, "i"), wW = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${so})(?=\\W|$)`, "i"), _W = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${vl})(?=\\W|$)`, "i");
class EW extends $t {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern(t) {
    return this.strictMode ? _W : t.option.forwardDate ? bW : wW;
  }
  innerExtract(t, n) {
    if (n[0].match(/^for\s*the\s*\w+/))
      return null;
    const r = ma(n[1]);
    return r ? yt.createRelativeFromReference(t.reference, r) : null;
  }
}
const CW = new RegExp(`(?:on\\s{0,3})?(${Vs})(?:\\s{0,3}(?:to|\\-|\\–|until|through|till)?\\s{0,3}(${Vs}))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(${rn(Zr)})(?:(?:-|/|,?\\s{0,3})(${ml}(?!\\w)))?(?=\\W|$)`, "i"), Ag = 1, Ig = 2, TW = 3, Mg = 4;
class OW extends $t {
  innerPattern() {
    return CW;
  }
  innerExtract(t, n) {
    const r = t.createParsingResult(n.index, n[0]), a = Zr[n[TW].toLowerCase()], o = zs(n[Ag]);
    if (o > 31)
      return n.index = n.index + n[Ag].length, null;
    if (r.start.assign("month", a), r.start.assign("day", o), n[Mg]) {
      const l = gl(n[Mg]);
      r.start.assign("year", l);
    } else {
      const l = oo(t.refDate, o, a);
      r.start.imply("year", l);
    }
    if (n[Ig]) {
      const l = zs(n[Ig]);
      r.end = r.start.clone(), r.end.assign("day", l);
    }
    return r;
  }
}
const SW = new RegExp(`(${rn(Zr)})(?:-|/|\\s*,?\\s*)(${Vs})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${Vs})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${ml}))?(?=\\W|$)(?!\\:\\d)`, "i"), DW = 1, Ng = 2, sc = 3, lc = 4;
class kW extends $t {
  constructor(t) {
    super(), this.shouldSkipYearLikeDate = t;
  }
  innerPattern() {
    return SW;
  }
  innerExtract(t, n) {
    const r = Zr[n[DW].toLowerCase()], a = zs(n[Ng]);
    if (a > 31 || this.shouldSkipYearLikeDate && !n[sc] && !n[lc] && n[Ng].match(/^2[0-5]$/))
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
const PW = new RegExp(`((?:in)\\s*)?(${rn(Zr)})\\s*(?:[,-]?\\s*(${ml})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"), AW = 1, IW = 2, jg = 3;
class MW extends $t {
  innerPattern() {
    return PW;
  }
  innerExtract(t, n) {
    const r = n[IW].toLowerCase();
    if (n[0].length <= 3 && !yb[r])
      return null;
    const a = t.createParsingResult(n.index + (n[AW] || "").length, n.index + n[0].length);
    a.start.imply("day", 1), a.start.addTag("parser/ENMonthNameParser");
    const o = Zr[r];
    if (a.start.assign("month", o), n[jg]) {
      const l = gl(n[jg]);
      a.start.assign("year", l);
    } else {
      const l = oo(t.refDate, 1, o);
      a.start.imply("year", l);
    }
    return a;
  }
}
const NW = new RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${rn(Zr)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"), jW = 1, RW = 2, Rg = 3, $W = 4;
class FW extends $t {
  constructor(t) {
    super(), this.strictMonthDateOrder = t;
  }
  innerPattern() {
    return NW;
  }
  innerExtract(t, n) {
    const r = parseInt(n[jW]);
    let a = parseInt(n[$W]), o = n[Rg] ? parseInt(n[Rg]) : Zr[n[RW].toLowerCase()];
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
const LW = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i"), WW = 1, VW = 2;
class zW extends $t {
  innerPattern() {
    return LW;
  }
  innerExtract(t, n) {
    const r = parseInt(n[VW]), a = parseInt(n[WW]);
    return t.createParsingComponents().imply("day", 1).assign("month", a).assign("year", r);
  }
}
function BW(e, t, n, r) {
  return new RegExp(`${e}${t}(\\d{1,4})(?:(?:\\.|:|：)(\\d{1,2})(?:(?::|：)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${n}`, r);
}
function HW(e, t) {
  return new RegExp(`^(${e})(\\d{1,4})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${t}`, "i");
}
const $g = 2, Hi = 3, ps = 4, hs = 5, La = 6;
class Eb {
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
    let o = 0, l = null, u = parseInt(n[$g]);
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
    let o = parseInt(n[$g]), l = 0, u = -1;
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
    return this.cachedPrimaryPrefix === t && this.cachedPrimarySuffix === n ? this.cachedPrimaryTimePattern : (this.cachedPrimaryTimePattern = BW(this.primaryPatternLeftBoundary(), t, n, this.patternFlags()), this.cachedPrimaryPrefix = t, this.cachedPrimarySuffix = n, this.cachedPrimaryTimePattern);
  }
  getFollowingTimePatternThroughCache() {
    const t = this.followingPhase(), n = this.followingSuffix();
    return this.cachedFollowingPhase === t && this.cachedFollowingSuffix === n ? this.cachedFollowingTimePatten : (this.cachedFollowingTimePatten = HW(t, n), this.cachedFollowingPhase = t, this.cachedFollowingSuffix = n, this.cachedFollowingTimePatten);
  }
}
class UW extends Eb {
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
function Cb(e, t) {
  const n = e.clone();
  let r = e.dayjs();
  for (const a in t)
    r = r.add(t[a], a);
  return ("day" in t || "d" in t || "week" in t || "month" in t || "year" in t) && (n.imply("day", r.date()), n.imply("month", r.month() + 1), n.imply("year", r.year())), ("second" in t || "minute" in t || "hour" in t) && (n.imply("second", r.second()), n.imply("minute", r.minute()), n.imply("hour", r.hour())), n;
}
const YW = new RegExp(`(${so})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"), qW = new RegExp(`(${vl})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class KW extends $t {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern() {
    return this.strictMode ? qW : YW;
  }
  innerExtract(t, n) {
    const r = ma(n[1]);
    if (!r)
      return null;
    const a = lo(r);
    return yt.createRelativeFromReference(t.reference, a);
  }
}
const GW = new RegExp(`(${so})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"), XW = new RegExp(`(${vl})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i"), ZW = 1;
class JW extends $t {
  constructor(t) {
    super(), this.strictMode = t;
  }
  innerPattern() {
    return this.strictMode ? XW : GW;
  }
  innerExtract(t, n) {
    const r = ma(n[ZW]);
    return r ? yt.createRelativeFromReference(t.reference, r) : null;
  }
}
class QW {
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
class Tb extends uo {
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
class e3 extends Tb {
  patternBetween() {
    return /^\s*(to|-|–|until|through|till)\s*$/i;
  }
}
function Fg(e, t) {
  const n = e.clone(), r = e.start, a = t.start;
  if (n.start = Lg(r, a), e.end != null || t.end != null) {
    const o = e.end == null ? e.start : e.end, l = t.end == null ? t.start : t.end, u = Lg(o, l);
    if (e.end == null && u.date().getTime() < n.start.date().getTime()) {
      const d = u.dayjs().add(1, "day");
      u.isCertain("day") ? Hn(u, d) : Ha(u, d);
    }
    n.end = u;
  }
  return n;
}
function Lg(e, t) {
  const n = e.clone();
  return t.isCertain("hour") ? (n.assign("hour", t.get("hour")), n.assign("minute", t.get("minute")), t.isCertain("second") ? (n.assign("second", t.get("second")), t.isCertain("millisecond") ? n.assign("millisecond", t.get("millisecond")) : n.imply("millisecond", t.get("millisecond"))) : (n.imply("second", t.get("second")), n.imply("millisecond", t.get("millisecond")))) : (n.imply("hour", t.get("hour")), n.imply("minute", t.get("minute")), n.imply("second", t.get("second")), n.imply("millisecond", t.get("millisecond"))), t.isCertain("timezoneOffset") && n.assign("timezoneOffset", t.get("timezoneOffset")), t.isCertain("meridiem") ? n.assign("meridiem", t.get("meridiem")) : t.get("meridiem") != null && n.get("meridiem") == null && n.imply("meridiem", t.get("meridiem")), n.get("meridiem") == We.PM && n.get("hour") < 12 && (t.isCertain("hour") ? n.assign("hour", n.get("hour") + 12) : n.imply("hour", n.get("hour") + 12)), n.addTags(e.tags()), n.addTags(t.tags()), n;
}
class Ob extends uo {
  shouldMergeResults(t, n, r) {
    return (n.start.isOnlyDate() && r.start.isOnlyTime() || r.start.isOnlyDate() && n.start.isOnlyTime()) && t.match(this.patternBetween()) != null;
  }
  mergeResults(t, n, r) {
    const a = n.start.isOnlyDate() ? Fg(n, r) : Fg(r, n);
    return a.index = n.index, a.text = n.text + t + r.text, a;
  }
}
class Wg extends Ob {
  patternBetween() {
    return new RegExp("^\\s*(T|at|after|before|on|of|,|-|\\.|∙|:)?\\s*$");
  }
}
const t3 = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class n3 {
  constructor(t) {
    this.timezoneOverrides = t;
  }
  refine(t, n) {
    const r = t.option.timezones ?? {};
    return n.forEach((a) => {
      const o = t.text.substring(a.index + a.text.length), l = t3.exec(o);
      if (!l)
        return;
      const u = l[1].toUpperCase(), d = a.start.date() ?? a.refDate ?? /* @__PURE__ */ new Date(), p = { ...this.timezoneOverrides, ...r }, h = gb(u, d, p);
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
const r3 = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i"), i3 = 1, a3 = 2, o3 = 3;
class s3 {
  refine(t, n) {
    return n.forEach(function(r) {
      if (r.start.isCertain("timezoneOffset"))
        return;
      const a = t.text.substring(r.index + r.text.length), o = r3.exec(a);
      if (!o)
        return;
      t.debug(() => {
        console.log(`Extracting timezone: '${o[0]}' into : ${r}`);
      });
      const l = parseInt(o[a3]), u = parseInt(o[o3] || "0");
      let d = l * 60 + u;
      d > 14 * 60 || (o[i3] === "-" && (d = -d), r.end != null && r.end.assign("timezoneOffset", d), r.start.assign("timezoneOffset", d), r.text += o[0]);
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
class l3 {
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
class u3 extends QW {
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
const c3 = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)", "i"), d3 = 1, f3 = 2, p3 = 3, Vg = 4, h3 = 5, zg = 6, Bg = 7, m3 = 8, Hg = 9, Ug = 10;
class Sb extends $t {
  innerPattern() {
    return c3;
  }
  innerExtract(t, n) {
    const r = t.createParsingComponents({
      year: parseInt(n[d3]),
      month: parseInt(n[f3]),
      day: parseInt(n[p3])
    });
    if (n[Vg] != null && (r.assign("hour", parseInt(n[Vg])), r.assign("minute", parseInt(n[h3])), n[zg] != null && r.assign("second", parseInt(n[zg])), n[Bg] != null && r.assign("millisecond", parseInt(n[Bg])), n[m3] != null)) {
      let a = 0;
      if (n[Hg]) {
        const o = parseInt(n[Hg]);
        let l = 0;
        n[Ug] != null && (l = parseInt(n[Ug])), a = o * 60, a < 0 ? a -= l : a += l;
      }
      r.assign("timezoneOffset", a);
    }
    return r.addTag("parser/ISOFormatParser");
  }
}
class g3 extends uo {
  mergeResults(t, n, r) {
    const a = r.clone();
    return a.index = n.index, a.text = n.text + t + a.text, a.start.assign("weekday", n.start.get("weekday")), a.end && a.end.assign("weekday", n.start.get("weekday")), a;
  }
  shouldMergeResults(t, n, r) {
    return n.start.isOnlyWeekdayComponent() && !n.start.isCertain("hour") && r.start.isCertain("day") && t.match(/^,?\s*$/) != null;
  }
}
function Db(e, t = !1) {
  return e.parsers.unshift(new Sb()), e.refiners.unshift(new g3()), e.refiners.unshift(new s3()), e.refiners.unshift(new Hc()), e.refiners.push(new n3()), e.refiners.push(new Hc()), e.refiners.push(new l3()), e.refiners.push(new u3(t)), e;
}
function kb(e) {
  const t = Ut(e.instant), n = new yt(e, {});
  return Hn(n, t), mb(n, t), e.timezoneOffset !== null && n.assign("timezoneOffset", t.utcOffset()), n.addTag("casualReference/now"), n;
}
function Pb(e) {
  const t = Ut(e.instant), n = new yt(e, {});
  return Hn(n, t), qr(n, t), n.addTag("casualReference/today"), n;
}
function v3(e) {
  return y3(e).addTag("casualReference/yesterday");
}
function y3(e, t) {
  return Ab(e, -1);
}
function x3(e) {
  return Ab(e, 1).addTag("casualReference/tomorrow");
}
function Ab(e, t) {
  let n = Ut(e.instant);
  const r = new yt(e, {});
  return n = n.add(t, "day"), Hn(r, n), qr(r, n), r;
}
function b3(e, t = 22) {
  const n = Ut(e.instant), r = new yt(e, {});
  return Hn(r, n), r.imply("hour", t), r.imply("meridiem", We.PM), r.addTag("casualReference/tonight"), r;
}
function w3(e, t = 20) {
  const n = new yt(e, {});
  return n.imply("meridiem", We.PM), n.imply("hour", t), n.addTag("casualReference/evening"), n;
}
function _3(e) {
  const t = new yt(e, {}), n = Ut(e.instant);
  return n.hour() > 2 && hW(t, n), t.assign("hour", 0), t.imply("minute", 0), t.imply("second", 0), t.imply("millisecond", 0), t.addTag("casualReference/midnight"), t;
}
function E3(e, t = 6) {
  const n = new yt(e, {});
  return n.imply("meridiem", We.AM), n.imply("hour", t), n.imply("minute", 0), n.imply("second", 0), n.imply("millisecond", 0), n.addTag("casualReference/morning"), n;
}
function C3(e, t = 15) {
  const n = new yt(e, {});
  return n.imply("meridiem", We.PM), n.imply("hour", t), n.imply("minute", 0), n.imply("second", 0), n.imply("millisecond", 0), n.addTag("casualReference/afternoon"), n;
}
function T3(e) {
  const t = new yt(e, {});
  return t.imply("meridiem", We.AM), t.imply("hour", 12), t.imply("minute", 0), t.imply("second", 0), t.imply("millisecond", 0), t.addTag("casualReference/noon"), t;
}
const O3 = /(now|today|tonight|tomorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class S3 extends $t {
  innerPattern(t) {
    return O3;
  }
  innerExtract(t, n) {
    let r = Ut(t.refDate);
    const a = n[0].toLowerCase();
    let o = t.createParsingComponents();
    switch (a) {
      case "now":
        o = kb(t.reference);
        break;
      case "today":
        o = Pb(t.reference);
        break;
      case "yesterday":
        o = v3(t.reference);
        break;
      case "tomorrow":
      case "tmr":
      case "tmrw":
        o = x3(t.reference);
        break;
      case "tonight":
        o = b3(t.reference);
        break;
      default:
        a.match(/last\s*night/) && (r.hour() > 6 && (r = r.add(-1, "day")), Hn(o, r), o.imply("hour", 0));
        break;
    }
    return o.addTag("parser/ENCasualDateParser"), o;
  }
}
const D3 = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class k3 extends $t {
  innerPattern() {
    return D3;
  }
  innerExtract(t, n) {
    let r = null;
    switch (n[1].toLowerCase()) {
      case "afternoon":
        r = C3(t.reference);
        break;
      case "evening":
      case "night":
        r = w3(t.reference);
        break;
      case "midnight":
        r = _3(t.reference);
        break;
      case "morning":
        r = E3(t.reference);
        break;
      case "noon":
      case "midday":
        r = T3(t.reference);
        break;
    }
    return r && r.addTag("parser/ENCasualTimeParser"), r;
  }
}
function Ib(e, t, n) {
  const r = e.getDateWithAdjustedTimezone(), a = P3(r, t, n);
  let o = new yt(e);
  return o = Cb(o, { day: a }), o.assign("weekday", t), o;
}
function P3(e, t, n) {
  const r = e.getDay();
  switch (n) {
    case "this":
      return Cs(e, t);
    case "last":
      return Mb(e, t);
    case "next":
      return r == zt.SUNDAY ? t == zt.SUNDAY ? 7 : t : r == zt.SATURDAY ? t == zt.SATURDAY ? 7 : t == zt.SUNDAY ? 8 : 1 + t : t < r && t != zt.SUNDAY ? Cs(e, t) : Cs(e, t) + 7;
  }
  return A3(e, t);
}
function A3(e, t) {
  const n = Mb(e, t), r = Cs(e, t);
  return r < -n ? r : n;
}
function Cs(e, t) {
  const n = e.getDay();
  let r = t - n;
  return r < 0 && (r += 7), r;
}
function Mb(e, t) {
  const n = e.getDay();
  let r = t - n;
  return r >= 0 && (r -= 7), r;
}
const I3 = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${rn(vb)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i"), M3 = 1, N3 = 2, j3 = 3;
class R3 extends $t {
  innerPattern() {
    return I3;
  }
  innerExtract(t, n) {
    const r = n[N3].toLowerCase(), a = vb[r], o = n[M3], l = n[j3];
    let u = o || l;
    u = u || "", u = u.toLowerCase();
    let d = null;
    return u == "last" || u == "past" ? d = "last" : u == "next" ? d = "next" : u == "this" && (d = "this"), Ib(t.reference, a, d);
  }
}
const $3 = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${rn(hl)})(?=\\s*)(?=\\W|$)`, "i"), F3 = 1, L3 = 2;
class W3 extends $t {
  innerPattern() {
    return $3;
  }
  innerExtract(t, n) {
    const r = n[F3].toLowerCase(), a = n[L3].toLowerCase(), o = hl[a];
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
const V3 = new RegExp("([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)", "i"), z3 = 1, B3 = 5, Yg = 2, qg = 3, uc = 4;
class Nb {
  constructor(t) {
    this.groupNumberMonth = t ? qg : Yg, this.groupNumberDay = t ? Yg : qg;
  }
  pattern() {
    return V3;
  }
  extract(t, n) {
    const r = n.index + n[z3].length, a = n.index + n[0].length - n[B3].length;
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
const H3 = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${so})(?=\\W|$)`, "i"), U3 = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${vl})(?=\\W|$)`, "i");
class Y3 extends $t {
  constructor(t = !0) {
    super(), this.allowAbbreviations = t;
  }
  innerPattern() {
    return this.allowAbbreviations ? H3 : U3;
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
function q3(e) {
  return e.text.match(/^[+-]/i) != null;
}
function Kg(e) {
  return e.text.match(/^-/i) != null;
}
class K3 extends uo {
  shouldMergeResults(t, n, r) {
    return t.match(/^\s*$/i) ? q3(r) || Kg(r) : !1;
  }
  mergeResults(t, n, r, a) {
    let o = ma(r.text);
    Kg(r) && (o = lo(o));
    const l = yt.createRelativeFromReference(new cf(n.start.date()), o);
    return new ha(n.reference, n.index, `${n.text}${t}${r.text}`, l);
  }
}
function Gg(e) {
  return e.text.match(/\s+(before|from)$/i) != null;
}
function G3(e) {
  return e.text.match(/\s+(after|since)$/i) != null;
}
class X3 extends uo {
  patternBetween() {
    return /^\s*$/i;
  }
  shouldMergeResults(t, n, r) {
    return !t.match(this.patternBetween()) || !Gg(n) && !G3(n) ? !1 : !!r.start.get("day") && !!r.start.get("month") && !!r.start.get("year");
  }
  mergeResults(t, n, r) {
    let a = ma(n.text);
    Gg(n) && (a = lo(a));
    const o = yt.createRelativeFromReference(new cf(r.start.date()), a);
    return new ha(r.reference, n.index, `${n.text}${t}${r.text}`, o);
  }
}
const Z3 = new RegExp(`^\\s*(${ml})`, "i"), J3 = 1;
class Q3 {
  refine(t, n) {
    return n.forEach(function(r) {
      if (!r.start.isDateWithUnknownYear())
        return;
      const a = t.text.substring(r.index + r.text.length), o = Z3.exec(a);
      if (!o)
        return;
      t.debug(() => {
        console.log(`Extracting year: '${o[0]}' into : ${r}`);
      });
      const l = gl(o[J3]);
      r.end != null && r.end.assign("year", l), r.start.assign("year", l), r.text += o[0];
    }), n;
  }
}
class eV {
  createCasualConfiguration(t = !1) {
    const n = this.createConfiguration(!1, t);
    return n.parsers.push(new S3()), n.parsers.push(new k3()), n.parsers.push(new MW()), n.parsers.push(new W3()), n.parsers.push(new Y3()), n;
  }
  createConfiguration(t = !0, n = !1) {
    const r = Db({
      parsers: [
        new Nb(n),
        new EW(t),
        new OW(),
        new kW(n),
        new R3(),
        new zW(),
        new UW(t),
        new KW(t),
        new JW(t)
      ],
      refiners: [new Wg()]
    }, t);
    return r.parsers.unshift(new FW(t)), r.refiners.unshift(new X3()), r.refiners.unshift(new K3()), r.refiners.unshift(new Hc()), r.refiners.push(new Wg()), r.refiners.push(new Q3()), r.refiners.push(new e3()), r;
  }
}
class Za {
  constructor(t) {
    this.defaultConfig = new eV(), t = t || this.defaultConfig.createCasualConfiguration(), this.parsers = [...t.parsers], this.refiners = [...t.refiners];
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
    const a = new tV(t, n, r);
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
class tV {
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
class nV extends Eb {
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
const jb = {
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
}, Rb = {
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
}, $b = `(?:${rn(Uc)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`;
function Fb(e) {
  const t = e.toLowerCase();
  return Uc[t] !== void 0 ? Uc[t] : t === "ein" || t === "einer" || t === "einem" || t === "einen" || t === "eine" ? 1 : t.match(/wenigen/) ? 2 : t.match(/halb/) || t.match(/halben/) ? 0.5 : t.match(/einigen/) ? 3 : t.match(/mehreren/) ? 7 : parseFloat(t);
}
const rV = "(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)";
function iV(e) {
  if (/v/i.test(e))
    return -parseInt(e.replace(/[^0-9]+/gi, ""));
  if (/n/i.test(e))
    return parseInt(e.replace(/[^0-9]+/gi, ""));
  if (/z/i.test(e))
    return parseInt(e.replace(/[^0-9]+/gi, ""));
  const t = parseInt(e);
  return ff(t);
}
const Lb = `(${$b})\\s{0,5}(${rn(Bs)})\\s{0,5}`, Xg = new RegExp(Lb, "i"), aV = df("", Lb);
function oV(e) {
  const t = {};
  let n = e, r = Xg.exec(n);
  for (; r; )
    sV(t, r), n = n.substring(r[0].length), r = Xg.exec(n);
  return t;
}
function sV(e, t) {
  const n = Fb(t[1]), r = Bs[t[2].toLowerCase()];
  e[r] = n;
}
const lV = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:ä|ae)chste[mn])\\s*)?(${rn(jb)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:ä|ae)chste)\\s*woche)?(?=\\W|$)`, "i"), uV = 1, cV = 3, dV = 2;
class fV extends $t {
  innerPattern() {
    return lV;
  }
  innerExtract(t, n) {
    const r = n[dV].toLowerCase(), a = jb[r], o = n[uV], l = n[cV];
    let u = o || l;
    u = u || "", u = u.toLowerCase();
    let d = null;
    return u.match(/letzte/) ? d = "last" : u.match(/chste/) ? d = "next" : u.match(/diese/) && (d = "this"), Ib(t.reference, a, d);
  }
}
const pV = new RegExp("(^|\\s|T)(?:(?:um|von)\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i"), hV = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|bis(?:\\s+um)?|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i"), mV = 2, Zg = 3, Jg = 4, Qg = 5;
class Hs {
  pattern(t) {
    return pV;
  }
  extract(t, n) {
    const r = t.createParsingResult(n.index + n[1].length, n[0].substring(n[1].length));
    if (r.text.match(/^\d{4}$/) || (r.start = Hs.extractTimeComponent(r.start.clone(), n), !r.start))
      return n.index += n[0].length, null;
    const a = t.text.substring(n.index + n[0].length), o = hV.exec(a);
    return o && (r.end = Hs.extractTimeComponent(r.start.clone(), o), r.end && (r.text += o[0])), r;
  }
  static extractTimeComponent(t, n) {
    let r = 0, a = 0, o = null;
    if (r = parseInt(n[mV]), n[Zg] != null && (a = parseInt(n[Zg])), a >= 60 || r > 24)
      return null;
    if (r >= 12 && (o = We.PM), n[Qg] != null) {
      if (r > 12)
        return null;
      const l = n[Qg].toLowerCase();
      l.match(/morgen|vormittag/) && (o = We.AM, r == 12 && (r = 0)), l.match(/nachmittag|abend/) && (o = We.PM, r != 12 && (r += 12)), l.match(/nacht/) && (r == 12 ? (o = We.AM, r = 0) : r < 6 ? o = We.AM : (o = We.PM, r += 12));
    }
    if (t.assign("hour", r), t.assign("minute", a), o !== null ? t.assign("meridiem", o) : r < 12 ? t.imply("meridiem", We.AM) : t.imply("meridiem", We.PM), n[Jg] != null) {
      const l = parseInt(n[Jg]);
      if (l >= 60)
        return null;
      t.assign("second", l);
    }
    return t;
  }
}
class gV extends Tb {
  patternBetween() {
    return /^\s*(bis(?:\s*(?:am|zum))?|-)\s*$/i;
  }
}
class vV extends Ob {
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
        t.get("hour") > 1 && (t = Cb(t, { day: 1 })), t.imply("hour", 0), t.imply("minute", 0), t.imply("second", 0), t.imply("meridiem", We.AM);
        break;
    }
    return t;
  }
}
const yV = new RegExp("(jetzt|heute|morgen|übermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)", "i"), xV = 1, bV = 2;
class wV extends $t {
  innerPattern(t) {
    return yV;
  }
  innerExtract(t, n) {
    let r = Ut(t.refDate);
    const a = (n[xV] || "").toLowerCase(), o = (n[bV] || "").toLowerCase();
    let l = t.createParsingComponents();
    switch (a) {
      case "jetzt":
        l = kb(t.reference);
        break;
      case "heute":
        l = Pb(t.reference);
        break;
      case "morgen":
        Dg(l, r);
        break;
      case "übermorgen":
      case "uebermorgen":
        r = r.add(1, "day"), Dg(l, r);
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
const _V = new RegExp(`(?:am\\s*?)?(?:den\\s*?)?([0-9]{1,2})\\.(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*(${rn(Rb)})(?:(?:-|/|,?\\s*)(${rV}(?![^\\s]\\d)))?(?=\\W|$)`, "i"), ev = 1, tv = 2, EV = 3, nv = 4;
class CV extends $t {
  innerPattern() {
    return _V;
  }
  innerExtract(t, n) {
    const r = t.createParsingResult(n.index, n[0]), a = Rb[n[EV].toLowerCase()], o = parseInt(n[ev]);
    if (o > 31)
      return n.index = n.index + n[ev].length, null;
    if (r.start.assign("month", a), r.start.assign("day", o), n[nv]) {
      const l = iV(n[nv]);
      r.start.assign("year", l);
    } else {
      const l = oo(t.refDate, o, a);
      r.start.imply("year", l);
    }
    if (n[tv]) {
      const l = parseInt(n[tv]);
      r.end = r.start.clone(), r.end.assign("day", l);
    }
    return r;
  }
}
class TV extends $t {
  constructor() {
    super();
  }
  innerPattern() {
    return new RegExp(`(?:\\s*((?:nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${$b})?(?:\\s*(nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${rn(Bs)})`, "i");
  }
  innerExtract(t, n) {
    const r = n[2] ? Fb(n[2]) : 1, a = Bs[n[4].toLowerCase()];
    let o = {};
    o[a] = r;
    let l = n[1] || n[3] || "";
    if (l = l.toLowerCase(), !!l)
      return (/vor/.test(l) || /letzte/.test(l) || /vergangen/.test(l)) && (o = lo(o)), yt.createRelativeFromReference(t.reference, o);
  }
}
class OV extends $t {
  innerPattern() {
    return new RegExp(`(?:in|für|während)\\s*(${aV})(?=\\W|$)`, "i");
  }
  innerExtract(t, n) {
    const r = oV(n[1]);
    return yt.createRelativeFromReference(t.reference, r);
  }
}
const SV = new Za(DV());
new Za(Vb(!0));
function Wb(e, t, n) {
  return SV.parseDate(e, t, n);
}
function DV(e = !0) {
  const t = Vb(!1, e);
  return t.parsers.unshift(new yl()), t.parsers.unshift(new wV()), t.parsers.unshift(new TV()), t;
}
function Vb(e = !0, t = !0) {
  return Db({
    parsers: [
      new Sb(),
      new Nb(t),
      new nV(),
      new Hs(),
      new CV(),
      new fV(),
      new OV()
    ],
    refiners: [new gV(), new vV()]
  }, e);
}
const kV = (e) => e instanceof Date ? e : Wb(e), PV = (e) => {
  var r;
  if ((e == null ? void 0 : e.toString()) === "Invalid Date" || e === "") return "";
  const t = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 6e4, n = new Date(new Date(e).getTime() - t).toISOString().slice(0, -1);
  return ((r = n == null ? void 0 : n.split("T")) == null ? void 0 : r[0]) || "";
}, AV = (e) => (e == null ? void 0 : e.toString()) === "Invalid Date" || e === "" ? "" : new Date(e).toLocaleDateString("de-DE", {
  // zero padded
  month: "2-digit",
  day: "2-digit",
  year: "numeric"
}), IV = ({
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
  const g = qe(null), x = qe(null), b = qe(null), [O, _] = ht(!1), w = (ne) => {
    var V;
    d || (_(ne), ne || (V = x.current) == null || V.focus());
  }, [P, C] = Xt("", h.value, h.onChange), k = (ne) => {
    pn(g.current, ""), ne.preventDefault(), ne.stopPropagation();
  }, D = P && kV(P) || void 0, [S, Q] = ht(D || /* @__PURE__ */ new Date());
  ct(() => {
    D && Q(D);
  }, [P]);
  const ee = (ne) => {
    var V;
    g.current && (pn(g.current, ne ? PV(ne) : ""), _(!1)), (V = x.current) == null || V.focus();
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ v.jsxs($n, { open: O, onOpenChange: w, children: [
      /* @__PURE__ */ v.jsx($n.Trigger, { asChild: !0, children: /* @__PURE__ */ v.jsxs(
        ke,
        {
          variant: "button",
          disabled: d,
          className: n,
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
                    children: /* @__PURE__ */ v.jsx("span", { className: "min-h-5 block min-w-16", children: P ? AV(P) : a })
                  }
                )
              }
            ),
            /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
              P && !u ? /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: k, children: /* @__PURE__ */ v.jsx(_i, {}) }) : /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "pointer-events-none", children: /* @__PURE__ */ v.jsx(
                Bv,
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
            fb,
            {
              className: "p-0",
              mode: "single",
              month: S,
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
}, EB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: IV, ...e }), MV = /^-?\d*[.,]?\d*$/, NV = /^-?\d*$/, zb = ({
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
  const g = qe(null), x = qe(null), [b, O] = Xt("", h.value, h.onChange), _ = b == null ? void 0 : b.toString(), w = (D) => {
    if (D === "" || D === void 0 || D === null)
      return "";
    let S = D.replace(",", ".").replace(".", u);
    return S.slice(-1) === u && (S = S.slice(0, -1)), d !== void 0 && parseFloat(S) < parseFloat(d.toString()) && (S = d.toString()), p !== void 0 && parseFloat(S) > parseFloat(p.toString()) && (S = p.toString()), S = parseFloat(S).toFixed(l), S;
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
    const S = D.target.value;
    if ((l > 0 ? MV : NV).test(S)) {
      const ne = S.replace(",", ".").replace(".", u);
      if ((((ee = S.split(u)[1]) == null ? void 0 : ee.length) || 0) > l || l === 0 && S.slice(-1) === u)
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
    const S = w(_);
    g.current && S !== _ && pn(g.current, S), (Q = h.onBlur) == null || Q.call(h, D);
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
        onChange: O,
        tabIndex: -1,
        onFocus: () => {
          var D;
          return (D = x.current) == null ? void 0 : D.focus();
        }
      }
    ) })
  ] });
}, gi = (e) => /* @__PURE__ */ v.jsx(zb, { ...e, decimalPlaces: 0 }), jV = ({
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
  const p = $e.useRef(null), h = $e.useRef(null), g = $e.useRef(null), x = $e.useRef(null), [b, O] = Xt("", d.value, d.onChange), [_, w] = ht("00"), [P, C] = ht("00"), [k, D] = ht("00"), [S, Q] = ht(!1);
  ct(() => {
    if (b && !S) {
      const [B, z, U] = b.toString().split(":");
      w(B || "00"), C(z || "00"), D(U || "00");
    }
  }, [b, S]);
  const ee = (B, z) => {
    let U = "";
    const K = u ? "00" : B == "seconds" ? z : k;
    return B === "hours" && z && P && K ? U = `${z.padStart(2, "0")}:${P.padStart(2, "0")}:${K.padStart(2, "0")}` : B === "minutes" && _ && z && K ? U = `${_.padStart(2, "0")}:${z.padStart(2, "0")}:${K.padStart(2, "0")}` : B === "seconds" && _ && P && z && (U = `${_.padStart(2, "0")}:${P.padStart(2, "0")}:${K.padStart(2, "0")}`), U;
  }, ne = (B) => {
    Q(!0), B.target.select();
  }, V = (B, z, U) => (K) => {
    var L, ue;
    const j = K.target.value;
    if (!/^\d*$/.test(j) || B === "hours" && j.length > 2 || B === "minutes" && j.length > 2 || B === "seconds" && j.length > 2) return;
    U(j);
    const I = B === "hours" && j.length === 2 && parseInt(j) <= 23 && parseInt(j) >= 0, X = B === "minutes" && j.length === 2 && parseInt(j) <= 59 && parseInt(j) >= 0, M = B === "seconds" && j.length === 2 && parseInt(j) <= 59 && parseInt(j) >= 0;
    if (B === "hours" && I ? (L = g.current) == null || L.focus() : B === "minutes" && X && !u && ((ue = x.current) == null || ue.focus()), I || X || M) {
      const he = ee(B, j);
      pn(p.current, he || "");
    }
  }, Y = (B, z, U) => (K) => {
    var j, I, X, M, L, ue;
    if (K.key === "Backspace") {
      if (z !== "")
        return;
      B === "minutes" ? (K.preventDefault(), (j = h.current) == null || j.focus()) : B === "seconds" && (K.preventDefault(), (I = g.current) == null || I.focus());
    } else K.key === "ArrowLeft" ? B === "minutes" ? (K.preventDefault(), (X = h.current) == null || X.focus()) : B === "seconds" && (K.preventDefault(), (M = g.current) == null || M.focus()) : K.key === "ArrowRight" && (B === "hours" ? (K.preventDefault(), (L = g.current) == null || L.focus()) : B === "minutes" && !u && (K.preventDefault(), (ue = x.current) == null || ue.focus()));
  }, te = (B, z, U) => (K) => {
    var X, M;
    const j = K.target.value, I = K.relatedTarget === h.current || K.relatedTarget === g.current || K.relatedTarget === x.current;
    if (j.length > 0 && j.length < 2) {
      U(j.padStart(2, "0"));
      const L = ee(B, j.padStart(2, "0"));
      pn(p.current, L || "");
    }
    I || (((X = p.current) == null ? void 0 : X.value) === "" && (w("00"), C("00"), D("00")), Q(!1), (M = p.current) == null || M.blur());
  }, R = (B, z, U) => ({
    value: z,
    onChange: V(B, z, U),
    onKeyDown: Y(B, z),
    onBlur: te(B, z, U),
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
        onChange: O,
        ref: nn(p, e),
        required: o,
        name: l,
        readOnly: a,
        tabIndex: -1,
        onFocus: () => {
          var B;
          return (B = h.current) == null ? void 0 : B.focus();
        }
      }
    ) })
  ] });
}, RV = ({
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
  const g = J.useRef(null), [x, b] = Ki(!1, o, l), [O, _] = ht(null), w = (k) => {
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
        width: O != null ? `${O.width}px` : void 0,
        height: O != null ? `${O.height}px` : void 0,
        ...p
      },
      children: x ? /* @__PURE__ */ v.jsx("span", { className: "animate-spin-slow block", children: /* @__PURE__ */ v.jsx(gD, {}) }) : h.children
    }
  );
}, $V = (e) => e instanceof Date ? e : Wb(e), cc = (e) => (e == null ? void 0 : e.toString()) === "Invalid Date" || e === "" ? "" : new Date(e).toISOString(), FV = (e) => (e == null ? void 0 : e.toString()) === "Invalid Date" || e === "" ? "" : new Date(e).toLocaleDateString("de-DE", {
  // zero padded
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}), LV = ({
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
  const g = qe(null), x = qe(null), b = qe(null), O = qe(null), [_, w] = ht(!1), P = (R) => {
    d || w(R);
  }, [C, k] = Xt("", h.value, h.onChange), D = (R) => {
    pn(g.current, ""), R.preventDefault(), R.stopPropagation();
  }, S = C && $V(C) || void 0, [Q, ee] = ht(S || /* @__PURE__ */ new Date());
  ct(() => {
    S && ee(S);
  }, [C]);
  const ne = (R) => {
    var B;
    R && S && (R.setHours(S.getHours()), R.setMinutes(S.getMinutes()), R.setSeconds(S.getSeconds())), g.current && pn(g.current, R ? cc(R) : ""), R && ((B = O.current) == null || B.focus());
  }, V = (R) => {
    const B = C ? new Date(C) : /* @__PURE__ */ new Date(), [z, U, K] = R.target.value.split(":");
    B.setHours(parseInt(z)), B.setMinutes(parseInt(U)), B.setSeconds(parseInt(K)), g.current && pn(g.current, B ? cc(B) : "");
  }, Y = () => {
    const R = C ? new Date(C) : /* @__PURE__ */ new Date(), B = /* @__PURE__ */ new Date();
    R.setHours(B.getHours()), R.setMinutes(B.getMinutes()), R.setSeconds(B.getSeconds()), g.current && pn(g.current, R ? cc(R) : "");
  }, te = C ? new Date(C).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "";
  return /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ v.jsxs($n, { open: _, onOpenChange: P, modal: _, children: [
      /* @__PURE__ */ v.jsx($n.Trigger, { asChild: !0, children: /* @__PURE__ */ v.jsxs(
        ke,
        {
          variant: "button",
          disabled: d,
          className: n,
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
                    children: /* @__PURE__ */ v.jsx("span", { className: "min-h-5 block min-w-16", children: C ? FV(C) : a })
                  }
                )
              }
            ),
            /* @__PURE__ */ v.jsxs(ke.Controls, { children: [
              C && !u ? /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "!bg-transparent", onClick: D, children: /* @__PURE__ */ v.jsx(_i, {}) }) : /* @__PURE__ */ v.jsx(ke.ControlButton, { className: "pointer-events-none", children: /* @__PURE__ */ v.jsx(
                Bv,
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
              fb,
              {
                className: "p-0",
                mode: "single",
                month: Q,
                onMonthChange: (R) => ee(R),
                selected: S,
                onSelect: ne,
                fixedWeeks: !0,
                showOutsideDays: !0,
                ...r
              }
            ),
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-stretch justify-center gap-1 bg-neutral-50 p-3 rounded", children: [
              /* @__PURE__ */ v.jsx(RV, { variant: "ghost", onClick: Y, className: "px-2 !text-theme-500", children: /* @__PURE__ */ v.jsx(uD, {}) }),
              /* @__PURE__ */ v.jsx(
                jV,
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
}, CB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: LV, ...e }), WV = /* @__PURE__ */ new Map([
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
  const r = VV(e), { webkitRelativePath: a } = e, o = typeof t == "string" ? t : typeof a == "string" && a.length > 0 ? a : `./${e.name}`;
  return typeof r.path != "string" && rv(r, "path", o), rv(r, "relativePath", o), r;
}
function VV(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), a = WV.get(r);
    a && Object.defineProperty(e, "type", {
      value: a,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function rv(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const zV = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function BV(e) {
  return Ei(this, void 0, void 0, function* () {
    return Us(e) && HV(e.dataTransfer) ? KV(e.dataTransfer, e.type) : UV(e) ? YV(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? qV(e) : [];
  });
}
function HV(e) {
  return Us(e);
}
function UV(e) {
  return Us(e) && Us(e.target);
}
function Us(e) {
  return typeof e == "object" && e !== null;
}
function YV(e) {
  return Yc(e.target.files).map((t) => ia(t));
}
function qV(e) {
  return Ei(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => ia(n));
  });
}
function KV(e, t) {
  return Ei(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Yc(e.items).filter((a) => a.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(GV));
      return iv(Bb(r));
    }
    return iv(Yc(e.files).map((n) => ia(n)));
  });
}
function iv(e) {
  return e.filter((t) => zV.indexOf(t.name) === -1);
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
function GV(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return av(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Hb(t) : av(e, t);
}
function Bb(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? Bb(n) : [n]
  ], []);
}
function av(e, t) {
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
function XV(e) {
  return Ei(this, void 0, void 0, function* () {
    return e.isDirectory ? Hb(e) : ZV(e);
  });
}
function Hb(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const a = [];
    function o() {
      t.readEntries((l) => Ei(this, void 0, void 0, function* () {
        if (l.length) {
          const u = Promise.all(l.map(XV));
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
function ZV(e) {
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
function ov(e) {
  return ez(e) || QV(e) || Yb(e) || JV();
}
function JV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ez(e) {
  if (Array.isArray(e)) return qc(e);
}
function sv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sv(Object(n), !0).forEach(function(r) {
      Ub(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ub(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ja(e, t) {
  return rz(e) || nz(e, t) || Yb(e, t) || tz();
}
function tz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yb(e, t) {
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
function nz(e, t) {
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
function rz(e) {
  if (Array.isArray(e)) return e;
}
var iz = typeof dc == "function" ? dc : dc.default, az = "file-invalid-type", oz = "file-too-large", sz = "file-too-small", lz = "too-many-files", uz = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: az,
    message: "File type must be ".concat(r)
  };
}, uv = function(t) {
  return {
    code: oz,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, cv = function(t) {
  return {
    code: sz,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, cz = {
  code: lz,
  message: "Too many files"
};
function qb(e, t) {
  var n = e.type === "application/x-moz-file" || iz(e, t);
  return [n, n ? null : uz(t)];
}
function Kb(e, t, n) {
  if (fi(e.size))
    if (fi(t) && fi(n)) {
      if (e.size > n) return [!1, uv(n)];
      if (e.size < t) return [!1, cv(t)];
    } else {
      if (fi(t) && e.size < t) return [!1, cv(t)];
      if (fi(n) && e.size > n) return [!1, uv(n)];
    }
  return [!0, null];
}
function fi(e) {
  return e != null;
}
function dz(e) {
  var t = e.files, n = e.accept, r = e.minSize, a = e.maxSize, o = e.multiple, l = e.maxFiles, u = e.validator;
  return !o && t.length > 1 || o && l >= 1 && t.length > l ? !1 : t.every(function(d) {
    var p = qb(d, n), h = Ja(p, 1), g = h[0], x = Kb(d, r, a), b = Ja(x, 1), O = b[0], _ = u ? u(d) : null;
    return g && O && !_;
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
function dv(e) {
  e.preventDefault();
}
function fz(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function pz(e) {
  return e.indexOf("Edge/") !== -1;
}
function hz() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return fz(e) || pz(e);
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
function mz() {
  return "showOpenFilePicker" in window;
}
function gz(e) {
  if (fi(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Ja(n, 2), a = r[0], o = r[1], l = !0;
      return Gb(a) || (console.warn('Skipped "'.concat(a, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), l = !1), (!Array.isArray(o) || !o.every(Xb)) && (console.warn('Skipped "'.concat(a, '" because an invalid file extension was provided.')), l = !1), l;
    }).reduce(function(n, r) {
      var a = Ja(r, 2), o = a[0], l = a[1];
      return lv(lv({}, n), {}, Ub({}, o, l));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function vz(e) {
  if (fi(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Ja(n, 2), a = r[0], o = r[1];
      return [].concat(ov(t), [a], ov(o));
    }, []).filter(function(t) {
      return Gb(t) || Xb(t);
    }).join(",");
}
function yz(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function xz(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Gb(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Xb(e) {
  return /^.*\.[\w]+$/.test(e);
}
var bz = ["children"], wz = ["open"], _z = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Ez = ["refKey", "onChange", "onClick"];
function Cz(e) {
  return Sz(e) || Oz(e) || Zb(e) || Tz();
}
function Tz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Sz(e) {
  if (Array.isArray(e)) return Kc(e);
}
function fc(e, t) {
  return Pz(e) || kz(e, t) || Zb(e, t) || Dz();
}
function Dz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zb(e, t) {
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
function kz(e, t) {
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
function Pz(e) {
  if (Array.isArray(e)) return e;
}
function fv(e, t) {
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
    t % 2 ? fv(Object(n), !0).forEach(function(r) {
      Gc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fv(Object(n)).forEach(function(r) {
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
  var n = Az(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Az(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var pf = /* @__PURE__ */ Js(function(e, t) {
  var n = e.children, r = qs(e, bz), a = Qb(r), o = a.open, l = qs(a, wz);
  return KO(t, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ $e.createElement(GO, null, n(Dt(Dt({}, l), {}, {
    open: o
  })));
});
pf.displayName = "Dropzone";
var Jb = {
  disabled: !1,
  getFilesFromEvent: BV,
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
pf.defaultProps = Jb;
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
function Qb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Dt(Dt({}, Jb), e), n = t.accept, r = t.disabled, a = t.getFilesFromEvent, o = t.maxSize, l = t.minSize, u = t.multiple, d = t.maxFiles, p = t.onDragEnter, h = t.onDragLeave, g = t.onDragOver, x = t.onDrop, b = t.onDropAccepted, O = t.onDropRejected, _ = t.onFileDialogCancel, w = t.onFileDialogOpen, P = t.useFsAccessApi, C = t.autoFocus, k = t.preventDropOnDocument, D = t.noClick, S = t.noKeyboard, Q = t.noDrag, ee = t.noDragEventsBubbling, ne = t.onError, V = t.validator, Y = Rn(function() {
    return vz(n);
  }, [n]), te = Rn(function() {
    return gz(n);
  }, [n]), R = Rn(function() {
    return typeof w == "function" ? w : pv;
  }, [w]), B = Rn(function() {
    return typeof _ == "function" ? _ : pv;
  }, [_]), z = qe(null), U = qe(null), K = Tv(Iz, Xc), j = fc(K, 2), I = j[0], X = j[1], M = I.isFocused, L = I.isFileDialogActive, ue = qe(typeof window < "u" && window.isSecureContext && P && mz()), he = function() {
    !ue.current && L && setTimeout(function() {
      if (U.current) {
        var ae = U.current.files;
        ae.length || (X({
          type: "closeDialog"
        }), B());
      }
    }, 300);
  };
  ct(function() {
    return window.addEventListener("focus", he, !1), function() {
      window.removeEventListener("focus", he, !1);
    };
  }, [U, L, B, ue]);
  var ce = qe([]), ye = function(ae) {
    z.current && z.current.contains(ae.target) || (ae.preventDefault(), ce.current = []);
  };
  ct(function() {
    return k && (document.addEventListener("dragover", dv, !1), document.addEventListener("drop", ye, !1)), function() {
      k && (document.removeEventListener("dragover", dv), document.removeEventListener("drop", ye));
    };
  }, [z, k]), ct(function() {
    return !r && C && z.current && z.current.focus(), function() {
    };
  }, [z, C, r]);
  var ge = Qe(function(H) {
    ne ? ne(H) : console.error(H);
  }, [ne]), be = Qe(function(H) {
    H.preventDefault(), H.persist(), re(H), ce.current = [].concat(Cz(ce.current), [H.target]), ms(H) && Promise.resolve(a(H)).then(function(ae) {
      if (!(Ys(H) && !ee)) {
        var xe = ae.length, oe = xe > 0 && dz({
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
  }, [a, p, ge, ee, Y, l, o, u, d, V]), we = Qe(function(H) {
    H.preventDefault(), H.persist(), re(H);
    var ae = ms(H);
    if (ae && H.dataTransfer)
      try {
        H.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return ae && g && g(H), !1;
  }, [g, ee]), Ce = Qe(function(H) {
    H.preventDefault(), H.persist(), re(H);
    var ae = ce.current.filter(function(oe) {
      return z.current && z.current.contains(oe);
    }), xe = ae.indexOf(H.target);
    xe !== -1 && ae.splice(xe, 1), ce.current = ae, !(ae.length > 0) && (X({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), ms(H) && h && h(H));
  }, [z, h, ee]), _e = Qe(function(H, ae) {
    var xe = [], oe = [];
    H.forEach(function(Ne) {
      var wt = qb(Ne, Y), Fe = fc(wt, 2), mt = Fe[0], At = Fe[1], pt = Kb(Ne, l, o), Rt = fc(pt, 2), it = Rt[0], Jr = Rt[1], Qr = V ? V(Ne) : null;
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
        errors: [cz]
      });
    }), xe.splice(0)), X({
      acceptedFiles: xe,
      fileRejections: oe,
      isDragReject: oe.length > 0,
      type: "setFiles"
    }), x && x(xe, oe, ae), oe.length > 0 && O && O(oe, ae), xe.length > 0 && b && b(xe, ae);
  }, [X, u, Y, l, o, d, x, b, O, V]), Se = Qe(function(H) {
    H.preventDefault(), H.persist(), re(H), ce.current = [], ms(H) && Promise.resolve(a(H)).then(function(ae) {
      Ys(H) && !ee || _e(ae, H);
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
        yz(ae) ? (B(ae), X({
          type: "closeDialog"
        })) : xz(ae) ? (ue.current = !1, U.current ? (U.current.value = null, U.current.click()) : ge(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : ge(ae);
      });
      return;
    }
    U.current && (X({
      type: "openDialog"
    }), R(), U.current.value = null, U.current.click());
  }, [X, R, B, P, _e, ge, te, u]), Re = Qe(function(H) {
    !z.current || !z.current.isEqualNode(H.target) || (H.key === " " || H.key === "Enter" || H.keyCode === 32 || H.keyCode === 13) && (H.preventDefault(), fe());
  }, [z, fe]), ve = Qe(function() {
    X({
      type: "focus"
    });
  }, []), et = Qe(function() {
    X({
      type: "blur"
    });
  }, []), rt = Qe(function() {
    D || (hz() ? setTimeout(fe, 0) : fe());
  }, [D, fe]), Ke = function(ae) {
    return r ? null : ae;
  }, N = function(ae) {
    return S ? null : Ke(ae);
  }, Z = function(ae) {
    return Q ? null : Ke(ae);
  }, re = function(ae) {
    ee && ae.stopPropagation();
  }, m = Rn(function() {
    return function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ae = H.refKey, xe = ae === void 0 ? "ref" : ae, oe = H.role, Ne = H.onKeyDown, wt = H.onFocus, Fe = H.onBlur, mt = H.onClick, At = H.onDragEnter, pt = H.onDragOver, Rt = H.onDragLeave, it = H.onDrop, Jr = qs(H, _z);
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
      }, xe, z), !r && !S ? {
        tabIndex: 0
      } : {}), Jr);
    };
  }, [z, Re, ve, et, rt, be, we, Ce, Se, S, Q, r]), F = Qe(function(H) {
    H.stopPropagation();
  }, []), $ = Rn(function() {
    return function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ae = H.refKey, xe = ae === void 0 ? "ref" : ae, oe = H.onChange, Ne = H.onClick, wt = qs(H, Ez), Fe = Gc({
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
function Iz(e, t) {
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
function pv() {
}
const Mz = (e) => "Blob" in window && e instanceof Blob, Nz = (e) => ["jpg", "jpeg", "png", "gif"].includes(e), jz = ({ ext: e }) => {
  switch (e) {
    case "pdf":
      return /* @__PURE__ */ v.jsx(ju, {});
    case "doc":
    case "docx":
      return /* @__PURE__ */ v.jsx(ju, {});
    case "xls":
    case "xlsx":
      return /* @__PURE__ */ v.jsx(pD, {});
    case "ppt":
    case "pptx":
      return /* @__PURE__ */ v.jsx(hD, {});
    case "zip":
      return /* @__PURE__ */ v.jsx(dD, {});
    case "txt":
      return /* @__PURE__ */ v.jsx(ju, {});
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return /* @__PURE__ */ v.jsx(fD, {});
    default:
      return /* @__PURE__ */ v.jsx(mD, {});
  }
}, Rz = ({ className: e, onRemove: t, file: n, disabled: r, previewImage: a }) => {
  const o = n.name.split(".").pop() || "", l = n.name.split("/").pop() || "", u = n.url || (Mz(n) ? URL.createObjectURL(n) : void 0), [d, p] = J.useState(null);
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
          /* @__PURE__ */ v.jsx("span", { className: Pe("text-neutral-400 flex-none block", a && "mr-1"), children: a && Nz(o) ? /* @__PURE__ */ v.jsx("a", { href: r ? void 0 : u, target: "_blank", children: /* @__PURE__ */ v.jsx(
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
          ) }) : /* @__PURE__ */ v.jsx(jz, { ext: o }) }),
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
          u && /* @__PURE__ */ v.jsx(ke.ControlButton, { asChild: !0, children: /* @__PURE__ */ v.jsx("a", { href: r ? void 0 : u, target: "_blank", children: /* @__PURE__ */ v.jsx(cD, {}) }) }),
          /* @__PURE__ */ v.jsx(ke.ControlButton, { onClick: t, children: /* @__PURE__ */ v.jsx(_i, {}) })
        ] })
      ]
    }
  );
}, $z = ({
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
    d(g.filter((S, Q) => Q !== k)), (D = C.current) == null || D.focus();
  }, g = u.value && Array.isArray(u.value) ? u.value : u.value ? [u.value] : [], { getRootProps: x, getInputProps: b, isDragActive: O, isDragAccept: _, isDragReject: w, isFileDialogActive: P, rootRef: C } = Qb({
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
        "data-state": P || O ? "active" : _ ? "accept" : w ? "reject" : void 0,
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
      Rz,
      {
        disabled: u.disabled,
        onRemove: () => h(D),
        file: k,
        previewImage: o
      },
      D
    ))
  ] });
}, TB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: $z, ...e }), Fz = (e) => {
  const [t, n] = Xt("", e.value, e.onChange);
  return /* @__PURE__ */ v.jsx("input", { ...e, type: "hidden", value: t, onChange: n });
}, OB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Fz, ...e }), SB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: gi, ...e }), DB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: zb, ...e }), Lz = ({ children: e, onRemove: t, disabled: n, ...r }) => /* @__PURE__ */ v.jsxs(
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
), Wz = ({ asChild: e, disabled: t, ...n }) => {
  const { selectedOptions: r, selected: a, onSelectedChange: o, getSelectedItemProps: l } = Yt(Xr);
  if (!r.length) return null;
  const u = e ? Tt : "span";
  return /* @__PURE__ */ v.jsx(u, { ...n, children: r == null ? void 0 : r.map((d, p) => /* @__PURE__ */ v.jsx(
    Lz,
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
), Vz = ({
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
  const b = qe(null), O = qe(null), [_, w] = Ki(r, a, o), [P, C] = J.useState(""), [k, D] = Xt([], p, h), { onSelectedChange: S, selectNativeProps: Q } = uf({
    focusRef: O,
    onFocus: g,
    value: k,
    onChange: D
  });
  return /* @__PURE__ */ v.jsx($n, { open: _, children: /* @__PURE__ */ v.jsxs(
    Ze,
    {
      ref: b,
      selected: k,
      onSelectedChange: S,
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
              ee.preventDefault(), (ne = O.current) == null || ne.focus();
            },
            disabled: x.disabled,
            asChild: !0,
            children: /* @__PURE__ */ v.jsxs(ke, { ref: e, children: [
              /* @__PURE__ */ v.jsxs(ke.Content, { className: Pe("flex gap-1 p-1 flex-wrap"), children: [
                /* @__PURE__ */ v.jsx(Wz, { className: "flex gap-1 flex-wrap", disabled: x.disabled }),
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
}, kB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Vz, ...e }), PB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: db, ...e }), AB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: Uv, ...e }), zz = ({ inputClassName: e, className: t, controls: n, widgetRef: r, ref: a, ...o }) => {
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
}, IB = (e) => /* @__PURE__ */ v.jsx(sr, { widget: zz, ...e });
var co = (e) => e.type === "checkbox", hi = (e) => e instanceof Date, tn = (e) => e == null;
const ew = (e) => typeof e == "object";
var jt = (e) => !tn(e) && !Array.isArray(e) && ew(e) && !hi(e), tw = (e) => jt(e) && e.target ? co(e.target) ? e.target.checked : e.target.value : e, Bz = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, nw = (e, t) => e.has(Bz(t)), Hz = (e) => {
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
    if (t = n ? [] : {}, !n && !Hz(e))
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
}, jn = (e) => typeof e == "boolean", mf = (e) => /^\w*$/.test(e), rw = (e) => xl(e.replace(/["|']|\]/g, "").split(/\.|\[/)), vt = (e, t, n) => {
  let r = -1;
  const a = mf(t) ? [t] : rw(t), o = a.length, l = o - 1;
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
}, iw = $e.createContext(null), Ti = () => $e.useContext(iw), Uz = (e) => {
  const { children: t, ...n } = e;
  return $e.createElement(iw.Provider, { value: n }, t);
};
var aw = (e, t, n, r = !0) => {
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
}, cn = (e) => jt(e) && !Object.keys(e).length, ow = (e, t, n, r) => {
  n(e);
  const { name: a, ...o } = e;
  return cn(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((l) => t[l] === (!r || Bn.all));
}, Ua = (e) => Array.isArray(e) ? e : [e], sw = (e, t, n) => !e || !t || e === t || Ua(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
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
function Yz(e) {
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
    next: (g) => d.current && sw(h.current, g.name, o) && ow(g, p.current, n._updateFormState) && u({
      ...n._formState,
      ...g
    }),
    subject: n._subjects.state
  }), $e.useEffect(() => (d.current = !0, p.current.isValid && n._updateValid(!0), () => {
    d.current = !1;
  }), [n]), $e.useMemo(() => aw(l, n, p.current, !1), [l, n]);
}
var rr = (e) => typeof e == "string", lw = (e, t, n, r, a) => rr(e) ? (r && t.watch.add(e), Ee(n, e, a)) : Array.isArray(e) ? e.map((o) => (r && t.watch.add(o), Ee(n, o))) : (r && (t.watchAll = !0), n);
function qz(e) {
  const t = Ti(), { control: n = t.control, name: r, defaultValue: a, disabled: o, exact: l } = e, u = $e.useRef(r);
  u.current = r, gf({
    disabled: o,
    subject: n._subjects.values,
    next: (h) => {
      sw(u.current, h.name, l) && p(un(lw(u.current, n._names, h.values || n._formValues, !1, a)));
    }
  });
  const [d, p] = $e.useState(n._getWatch(r, a));
  return $e.useEffect(() => n._removeUnmounted()), d;
}
function Kz(e) {
  const t = Ti(), { name: n, disabled: r, control: a = t.control, shouldUnregister: o } = e, l = nw(a._names.array, n), u = qz({
    control: a,
    name: n,
    defaultValue: Ee(a._formValues, n, Ee(a._defaultValues, n, e.defaultValue)),
    exact: !0
  }), d = Yz({
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
        value: tw(x),
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
    const x = a._options.shouldUnregister || o, b = (O, _) => {
      const w = Ee(a._fields, O);
      w && w._f && (w._f.mount = _);
    };
    if (b(n, !0), x) {
      const O = un(Ee(a._options.defaultValues, n));
      vt(a._defaultValues, n, O), Nt(Ee(a._formValues, n)) && vt(a._formValues, n, O);
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
const Gz = (e) => e.render(Kz(e));
var Xz = (e, t, n, r, a) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: a || !0
  }
} : {}, hv = (e) => ({
  isOnSubmit: !e || e === Bn.onSubmit,
  isOnBlur: e === Bn.onBlur,
  isOnChange: e === Bn.onChange,
  isOnAll: e === Bn.all,
  isOnTouch: e === Bn.onTouched
}), mv = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
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
var Zz = (e, t, n) => {
  const r = Ua(Ee(e, n));
  return vt(r, "root", t[n]), vt(e, n, r), e;
}, vf = (e) => e.type === "file", tr = (e) => typeof e == "function", Gs = (e) => {
  if (!hf)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Ts = (e) => rr(e), yf = (e) => e.type === "radio", Xs = (e) => e instanceof RegExp;
const gv = {
  value: !1,
  isValid: !1
}, vv = { value: !0, isValid: !0 };
var uw = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Nt(e[0].attributes.value) ? Nt(e[0].value) || e[0].value === "" ? vv : { value: e[0].value, isValid: !0 } : vv
    ) : gv;
  }
  return gv;
};
const yv = {
  isValid: !1,
  value: null
};
var cw = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, yv) : yv;
function xv(e, t, n = "validate") {
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
}, bv = async (e, t, n, r, a, o) => {
  const { ref: l, refs: u, required: d, maxLength: p, minLength: h, min: g, max: x, pattern: b, validate: O, name: _, valueAsNumber: w, mount: P } = e._f, C = Ee(n, _);
  if (!P || t.has(_))
    return {};
  const k = u ? u[0] : l, D = (R) => {
    a && k.reportValidity && (k.setCustomValidity(jn(R) ? "" : R || ""), k.reportValidity());
  }, S = {}, Q = yf(l), ee = co(l), ne = Q || ee, V = (w || vf(l)) && Nt(l.value) && Nt(C) || Gs(l) && l.value === "" || C === "" || Array.isArray(C) && !C.length, Y = Xz.bind(null, _, r, S), te = (R, B, z, U = br.maxLength, K = br.minLength) => {
    const j = R ? B : z;
    S[_] = {
      type: R ? U : K,
      message: j,
      ref: l,
      ...Y(R ? U : K, j)
    };
  };
  if (o ? !Array.isArray(C) || !C.length : d && (!ne && (V || tn(C)) || jn(C) && !C || ee && !uw(u).isValid || Q && !cw(u).isValid)) {
    const { value: R, message: B } = Ts(d) ? { value: !!d, message: d } : Ui(d);
    if (R && (S[_] = {
      type: br.required,
      message: B,
      ref: k,
      ...Y(br.required, B)
    }, !r))
      return D(B), S;
  }
  if (!V && (!tn(g) || !tn(x))) {
    let R, B;
    const z = Ui(x), U = Ui(g);
    if (!tn(C) && !isNaN(C)) {
      const K = l.valueAsNumber || C && +C;
      tn(z.value) || (R = K > z.value), tn(U.value) || (B = K < U.value);
    } else {
      const K = l.valueAsDate || new Date(C), j = (M) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + M), I = l.type == "time", X = l.type == "week";
      rr(z.value) && C && (R = I ? j(C) > j(z.value) : X ? C > z.value : K > new Date(z.value)), rr(U.value) && C && (B = I ? j(C) < j(U.value) : X ? C < U.value : K < new Date(U.value));
    }
    if ((R || B) && (te(!!R, z.message, U.message, br.max, br.min), !r))
      return D(S[_].message), S;
  }
  if ((p || h) && !V && (rr(C) || o && Array.isArray(C))) {
    const R = Ui(p), B = Ui(h), z = !tn(R.value) && C.length > +R.value, U = !tn(B.value) && C.length < +B.value;
    if ((z || U) && (te(z, R.message, B.message), !r))
      return D(S[_].message), S;
  }
  if (b && !V && rr(C)) {
    const { value: R, message: B } = Ui(b);
    if (Xs(R) && !C.match(R) && (S[_] = {
      type: br.pattern,
      message: B,
      ref: l,
      ...Y(br.pattern, B)
    }, !r))
      return D(B), S;
  }
  if (O) {
    if (tr(O)) {
      const R = await O(C, n), B = xv(R, k);
      if (B && (S[_] = {
        ...B,
        ...Y(br.validate, B.message)
      }, !r))
        return D(B.message), S;
    } else if (jt(O)) {
      let R = {};
      for (const B in O) {
        if (!cn(R) && !r)
          break;
        const z = xv(await O[B](C, n), k, B);
        z && (R = {
          ...z,
          ...Y(B, z.message)
        }, D(z.message), r && (S[_] = R));
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
function Jz(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Nt(e) ? r++ : e[t[r++]];
  return e;
}
function Qz(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Nt(e[t]))
      return !1;
  return !0;
}
function Wt(e, t) {
  const n = Array.isArray(t) ? t : mf(t) ? [t] : rw(t), r = n.length === 1 ? e : Jz(e, n), a = n.length - 1, o = n[a];
  return r && delete r[o], a !== 0 && (jt(r) && cn(r) || Array.isArray(r) && Qz(r)) && Wt(e, n.slice(0, -1)), e;
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
}, Zc = (e) => tn(e) || !ew(e);
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
var dw = (e) => e.type === "select-multiple", eB = (e) => yf(e) || co(e), mc = (e) => Gs(e) && e.isConnected, fw = (e) => {
  for (const t in e)
    if (tr(e[t]))
      return !0;
  return !1;
};
function Zs(e, t = {}) {
  const n = Array.isArray(e);
  if (jt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || jt(e[r]) && !fw(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Zs(e[r], t[r])) : tn(e[r]) || (t[r] = !0);
  return t;
}
function pw(e, t, n) {
  const r = Array.isArray(e);
  if (jt(e) || r)
    for (const a in e)
      Array.isArray(e[a]) || jt(e[a]) && !fw(e[a]) ? Nt(t) || Zc(n[a]) ? n[a] = Array.isArray(e[a]) ? Zs(e[a], []) : { ...Zs(e[a]) } : pw(e[a], tn(t) ? {} : t[a], n[a]) : n[a] = !Wr(e[a], t[a]);
  return n;
}
var Wa = (e, t) => pw(e, t, Zs(t)), hw = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Nt(e) ? e : t ? e === "" ? NaN : e && +e : n && rr(e) ? new Date(e) : r ? r(e) : e;
function gc(e) {
  const t = e.ref;
  return vf(t) ? t.files : yf(t) ? cw(e.refs).value : dw(t) ? [...t.selectedOptions].map(({ value: n }) => n) : co(t) ? uw(e.refs).value : hw(Nt(t.value) ? e.ref.value : t.value, e);
}
var tB = (e, t, n, r) => {
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
const wv = "AsyncFunction";
var nB = (e) => !!e && !!e.validate && !!(tr(e.validate) && e.validate.constructor.name === wv || jt(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === wv)), rB = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function _v(e, t, n) {
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
var iB = (e, t, n, r, a) => a.isOnAll ? !1 : !n && a.isOnTouch ? !(t || e) : (n ? r.isOnBlur : a.isOnBlur) ? !e : (n ? r.isOnChange : a.isOnChange) ? e : !0, aB = (e, t) => !xl(Ee(e, t)).length && Wt(e, t);
const oB = {
  mode: Bn.onSubmit,
  reValidateMode: Bn.onChange,
  shouldFocusError: !0
};
function sB(e = {}) {
  let t = {
    ...oB,
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
  }, x = hv(t.mode), b = hv(t.reValidateMode), O = t.criteriaMode === Bn.all, _ = (N) => (Z) => {
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
        const H = re(Ee(r, N), m.argA, m.argB);
        F && vt(r, N, H);
      }
      if ($ && Array.isArray(Ee(n.errors, N))) {
        const H = re(Ee(n.errors, N), m.argA, m.argB);
        F && vt(n.errors, N, H), aB(n.errors, N);
      }
      if (h.touchedFields && $ && Array.isArray(Ee(n.touchedFields, N))) {
        const H = re(Ee(n.touchedFields, N), m.argA, m.argB);
        F && vt(n.touchedFields, N, H);
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
  }, S = (N, Z, re, m) => {
    const F = Ee(r, N);
    if (F) {
      const $ = Ee(o, N, Nt(re) ? Ee(a, N) : re);
      Nt($) || m && m.defaultChecked || Z ? vt(o, N, Z ? $ : gc(F._f)) : U(N, $), l.mount && w();
    }
  }, Q = (N, Z, re, m, F) => {
    let $ = !1, H = !1;
    const ae = {
      name: N
    };
    if (!t.disabled) {
      const xe = !!(Ee(r, N) && Ee(r, N)._f && Ee(r, N)._f.disabled);
      if (!re || m) {
        h.isDirty && (H = n.isDirty, n.isDirty = ae.isDirty = R(), $ = H !== ae.isDirty);
        const oe = xe || Wr(Ee(a, N), Z);
        H = !!(!xe && Ee(n.dirtyFields, N)), oe || xe ? Wt(n.dirtyFields, N) : vt(n.dirtyFields, N, !0), ae.dirtyFields = n.dirtyFields, $ = $ || h.dirtyFields && H !== !oe;
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
      const H = {
        ...m,
        ...$ && jn(Z) ? { isValid: Z } : {},
        errors: n.errors,
        name: N
      };
      n = {
        ...n,
        ...H
      }, g.state.next(H);
    }
  }, ne = async (N) => {
    P(N, !0);
    const Z = await t.resolver(o, t.context, tB(N || u.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
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
        const { _f: $, ...H } = F;
        if ($) {
          const ae = u.array.has($.name), xe = F._f && nB(F._f);
          xe && h.validatingFields && P([m], !0);
          const oe = await bv(F, u.disabled, o, O, t.shouldUseNativeValidation && !Z, ae);
          if (xe && h.validatingFields && P([m]), oe[$.name] && (re.valid = !1, Z))
            break;
          !Z && (Ee(oe, $.name) ? ae ? Zz(n.errors, oe, $.name) : vt(n.errors, $.name, oe[$.name]) : Wt(n.errors, $.name));
        }
        !cn(H) && await Y(H, Z, re);
      }
    }
    return re.valid;
  }, te = () => {
    for (const N of u.unMount) {
      const Z = Ee(r, N);
      Z && (Z._f.refs ? Z._f.refs.every((re) => !mc(re)) : !mc(Z._f.ref)) && ge(N);
    }
    u.unMount = /* @__PURE__ */ new Set();
  }, R = (N, Z) => !t.disabled && (N && Z && vt(o, N, Z), !Wr(L(), a)), B = (N, Z, re) => lw(N, u, {
    ...l.mount ? o : Nt(Z) ? a : rr(N) ? { [N]: Z } : Z
  }, re, Z), z = (N) => xl(Ee(l.mount ? o : a, N, t.shouldUnregister ? Ee(a, N, []) : [])), U = (N, Z, re = {}) => {
    const m = Ee(r, N);
    let F = Z;
    if (m) {
      const $ = m._f;
      $ && (!$.disabled && vt(o, N, hw(Z, $)), F = Gs($.ref) && tn(Z) ? "" : Z, dw($.ref) ? [...$.ref.options].forEach((H) => H.selected = F.includes(H.value)) : $.refs ? co($.ref) ? $.refs.length > 1 ? $.refs.forEach((H) => (!H.defaultChecked || !H.disabled) && (H.checked = Array.isArray(F) ? !!F.find((ae) => ae === H.value) : F === H.value)) : $.refs[0] && ($.refs[0].checked = !!F) : $.refs.forEach((H) => H.checked = H.value === F) : vf($.ref) ? $.ref.value = "" : ($.ref.value = F, $.ref.type || g.values.next({
        name: N,
        values: { ...o }
      })));
    }
    (re.shouldDirty || re.shouldTouch) && Q(N, F, re.shouldTouch, re.shouldDirty, !0), re.shouldValidate && M(N);
  }, K = (N, Z, re) => {
    for (const m in Z) {
      const F = Z[m], $ = `${N}.${m}`, H = Ee(r, $);
      (u.array.has(N) || jt(F) || H && !H._f) && !hi(F) ? K($, F, re) : U($, F, re);
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
    })) : m && !m._f && !tn($) ? K(N, $, re) : U(N, $, re), mv(N, u) && g.state.next({ ...n }), g.values.next({
      name: l.mount ? N : void 0,
      values: { ...o }
    });
  }, I = async (N) => {
    l.mount = !0;
    const Z = N.target;
    let re = Z.name, m = !0;
    const F = Ee(r, re), $ = () => Z.type ? gc(F._f) : tw(N), H = (ae) => {
      m = Number.isNaN(ae) || hi(ae) && isNaN(ae.getTime()) || Wr(ae, Ee(o, re, ae));
    };
    if (F) {
      let ae, xe;
      const oe = $(), Ne = N.type === Ks.BLUR || N.type === Ks.FOCUS_OUT, wt = !rB(F._f) && !t.resolver && !Ee(n.errors, re) && !F._f.deps || iB(Ne, Ee(n.touchedFields, re), n.isSubmitted, b, x), Fe = mv(re, u, Ne);
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
        if (H(oe), m) {
          const Rt = _v(n.errors, r, re), it = _v(pt, r, Rt.name || re);
          ae = it.error, re = it.name, xe = cn(pt);
        }
      } else
        P([re], !0), ae = (await bv(F, u.disabled, o, O, t.shouldUseNativeValidation))[re], P([re]), H(oe), m && (ae ? xe = !1 : h.isValid && (xe = await Y(r, !0)));
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
      re = cn($), m = N ? !F.some((H) => Ee($, H)) : re;
    } else N ? (m = (await Promise.all(F.map(async ($) => {
      const H = Ee(r, $);
      return await Y(H && H._f ? { [$]: H } : H);
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
    const m = (Ee(r, N, { _f: {} })._f || {}).ref, F = Ee(n.errors, N) || {}, { ref: $, message: H, type: ae, ...xe } = F;
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
    next: (re) => N(B(void 0, Z), re)
  }) : B(N, Z, !0), ge = (N, Z = {}) => {
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
    }) : S(N, !0, Z.value), {
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
          const $ = Nt(F.value) && F.querySelectorAll && F.querySelectorAll("input,select,textarea")[0] || F, H = eB($), ae = re._f.refs || [];
          if (H ? ae.find((xe) => xe === $) : $ === re._f.ref)
            return;
          vt(r, N, {
            _f: {
              ...re._f,
              ...H ? {
                refs: [
                  ...ae.filter(mc),
                  $,
                  ...Array.isArray(Ee(a, N)) ? [{}] : []
                ],
                ref: { type: $.type, name: N }
              } : { ref: $ }
            }
          }), S(N, !1, void 0, $);
        } else
          re = Ee(r, N, {}), re._f && (re._f.mount = !1), (t.shouldUnregister || Z.shouldUnregister) && !(nw(u.array, N) && l.action) && u.unMount.add(N);
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
      const { errors: $, values: H } = await ne();
      n.errors = $, F = H;
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
        const H = /* @__PURE__ */ new Set([
          ...u.mount,
          ...Object.keys(Wa(a, o))
        ]);
        for (const ae of Array.from(H))
          Ee(n.dirtyFields, ae) ? vt($, ae, Ee(o, ae)) : j(ae, Ee($, ae));
      } else {
        if (hf && Nt(N))
          for (const H of u.mount) {
            const ae = Ee(r, H);
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
      _getWatch: B,
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
function lB(e = {}) {
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
    ...sB(e),
    formState: r
  });
  const o = t.current.control;
  return o._options = e, gf({
    subject: o._subjects.state,
    next: (l) => {
      ow(l, o._proxyFormState, o._updateFormState, !0) && a({ ...o._formState });
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
  }, [e.shouldUnregister, o]), t.current.formState = aw(r, o), t.current;
}
const uB = ({
  children: e,
  onSubmit: t,
  formMethods: n,
  onIsSubmittingChange: r,
  ...a
}) => {
  const o = n || lB(), l = async (u) => {
    u.preventDefault(), u.stopPropagation(), r == null || r(!0);
    const d = await Promise.resolve(o.handleSubmit(t)(u));
    return r == null || r(!1), d;
  };
  return /* @__PURE__ */ v.jsx(Uz, { ...o, children: /* @__PURE__ */ v.jsx("form", { onSubmit: l, ...a, children: e }) });
}, cB = ({ children: e, ...t }) => {
  const { control: n } = Ti();
  return /* @__PURE__ */ v.jsx(
    Gz,
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
}, dB = ({
  asChild: e,
  loading: t,
  ...n
}) => {
  const { formState: r } = Ti(), a = e ? Tt : "button", o = e ? {
    loading: t !== void 0 ? t : r.isSubmitting
  } : {};
  return /* @__PURE__ */ v.jsx(a, { ...o, ...n });
}, fB = ({
  asChild: e,
  name: t = "root",
  ...n
}) => {
  const {
    formState: { errors: r }
  } = Ti(), a = r == null ? void 0 : r[t], o = e ? Tt : "div";
  return a ? /* @__PURE__ */ v.jsx(o, { ...n, "data-error": a.message }) : null;
}, pB = ({
  name: e = "root",
  ...t
}) => {
  const {
    formState: { errors: n }
  } = Ti(), r = n == null ? void 0 : n[e];
  return r ? r.message : null;
}, MB = Object.assign(uB, {
  Field: cB,
  Button: dB,
  Error: fB,
  ErrorMessage: pB
}), Ev = ({ value: e, label: t, disabled: n = !1, checked: r }) => /* @__PURE__ */ v.jsxs(Ze.Option, { value: e, className: "flex items-center gap-2 py-1 text-sm group", disabled: n, children: [
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
] }), NB = ({
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
  const g = $e.useRef(null), [x, b] = ht(!1), [O, _] = Xt([], u, d), { onSelectedChange: w, selectNativeProps: P } = uf({
    focusRef: g,
    onFocus: p,
    value: O,
    onChange: _
  });
  return /* @__PURE__ */ v.jsxs(
    Ze,
    {
      selected: O,
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
                D.map((S) => /* @__PURE__ */ v.jsx(
                  Ev,
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
            Ev,
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
}, hB = (e) => String(new Date(e)) !== "Invalid Date", jB = ({ ref: e, className: t, disabled: n, readOnly: r, required: a, name: o, ...l }) => {
  const u = $e.useRef(null), d = $e.useRef(null), p = $e.useRef(null), h = $e.useRef(null), [g, x] = Xt("", l.value, l.onChange), [b, O] = ht(""), [_, w] = ht(""), [P, C] = ht(""), k = (V, Y) => {
    let te = "";
    return V === "day" && Y && _ && P ? te = `${P.padStart(4, "0")}-${_.padStart(2, "0")}-${Y.padStart(2, "0")}` : V === "month" && b && Y && P ? te = `${P.padStart(4, "0")}-${Y.padStart(2, "0")}-${b.padStart(2, "0")}` : V === "year" && b && _ && Y && (te = `${Y.padStart(4, "0")}-${_.padStart(2, "0")}-${b.padStart(2, "0")}`), te;
  }, D = (V, Y = "start") => {
    var te, R;
    (te = V.current) == null || te.focus(), (R = V.current) == null || R.setSelectionRange(
      // handle start, end and all
      Y === "start" || Y === "all" ? 0 : V.current.value.length,
      Y === "end" || Y === "all" ? V.current.value.length : 0
    );
  }, S = (V, Y, te) => (R) => {
    const B = R.target.value;
    if (!/^\d*$/.test(B) || V === "day" && B.length > 2 || V === "month" && B.length > 2 || V === "year" && B.length > 4) return;
    te(B);
    const z = V === "day" && B.length === 2 && parseInt(B) <= 31 && parseInt(B) >= 1, U = V === "month" && B.length === 2 && parseInt(B) <= 12 && parseInt(B) >= 1;
    V === "day" && z ? D(p, "all") : V === "month" && U && D(h, "all");
    const K = k(V, B);
    pn(u.current, hB(K) ? K : "");
  }, Q = (V, Y, te) => (R) => {
    const B = R.currentTarget.value.length, z = R.currentTarget.selectionStart === 0, U = R.currentTarget.selectionStart === B;
    if (R.key === "Backspace") {
      if (Y !== "")
        return;
      V === "month" ? (R.preventDefault(), D(d, "end")) : V === "year" && (R.preventDefault(), D(p, "end"));
    } else R.key === "ArrowLeft" && z ? V === "month" ? (R.preventDefault(), D(d, "end")) : V === "year" && (R.preventDefault(), D(p, "end")) : R.key === "ArrowRight" && U && (V === "day" ? (R.preventDefault(), D(p)) : V === "month" && (R.preventDefault(), D(h)));
  }, ee = (V, Y, te) => (R) => {
    var U;
    const B = R.target.value;
    !(R.relatedTarget === d.current || R.relatedTarget === p.current || R.relatedTarget === h.current) && ((U = u.current) == null ? void 0 : U.value) === "" && (O(""), w(""), C("")), (V === "day" || V === "month") && B.length > 0 && B.length < 2 ? te(B.padStart(2, "0")) : V === "year" && B.length > 0 && B.length < 4 && te(B.padStart(4, "0"));
  }, ne = (V, Y, te) => ({
    value: Y,
    onChange: S(V, Y, te),
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
        ...ne("day", b, O)
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
}, mB = ({ disabled: e, className: t, ...n }) => {
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
  /* @__PURE__ */ v.jsx(mB, { ...t }),
  /* @__PURE__ */ v.jsx("span", { children: e })
] }), RB = ({
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
}, $B = ({ className: e, disabled: t, defaultChecked: n = !1, ...r }) => {
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
}, FB = ({
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
  wB as BooleanField,
  fb as Calendar,
  xD as Checkbox,
  NB as CheckboxGroup,
  EB as DateField,
  IV as DateInput,
  CB as DateTimeField,
  LV as DateTimeInput,
  DB as DecimalField,
  ts as Field,
  TB as FileField,
  $z as FileInput,
  MB as Form,
  Uz as FormProvider,
  OB as HiddenField,
  Fz as HiddenInput,
  SB as IntegerField,
  gi as IntegerInput,
  jB as MemorableDateInput,
  Vz as MultiSelect,
  kB as MultiSelectField,
  mB as Radio,
  RB as RadioGroup,
  PB as SelectField,
  db as SingleSelect,
  AB as StringField,
  $B as Switch,
  zz as TextArea,
  IB as TextField,
  Uv as TextInput,
  jV as TimeInput,
  FB as ToggleButton,
  ke as Widget,
  xB as getNativeSelectValue,
  pn as setNativeInputValue,
  Hv as setNativeSelectValue,
  bB as setNativeTextareaValue,
  Ti as useFormContext,
  Xt as useWidgetState
};
