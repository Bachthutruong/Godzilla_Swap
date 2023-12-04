import * as re from "react";
import _r, { useContext as cn, useMemo as fa, useRef as pr, useDebugValue as No, createElement as sl, createContext as kc, useState as We, useEffect as gt, useCallback as sn, useLayoutEffect as ol, PureComponent as cl, memo as fl, StrictMode as dl } from "react";
import * as ll from "react-dom";
import { createPortal as hl } from "react-dom";
var Gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ht(t) {
  var e = t.default;
  if (typeof e == "function") {
    var r = function() {
      return e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Va = { exports: {} }, Je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function ul() {
  if (Lo)
    return Je;
  Lo = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, m = t ? Symbol.for("react.async_mode") : 60111, b = t ? Symbol.for("react.concurrent_mode") : 60111, v = t ? Symbol.for("react.forward_ref") : 60112, A = t ? Symbol.for("react.suspense") : 60113, S = t ? Symbol.for("react.suspense_list") : 60120, D = t ? Symbol.for("react.memo") : 60115, B = t ? Symbol.for("react.lazy") : 60116, F = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, T = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
  function H(R) {
    if (typeof R == "object" && R !== null) {
      var W = R.$$typeof;
      switch (W) {
        case e:
          switch (R = R.type, R) {
            case m:
            case b:
            case n:
            case i:
            case a:
            case A:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case d:
                case v:
                case B:
                case D:
                case c:
                  return R;
                default:
                  return W;
              }
          }
        case r:
          return W;
      }
    }
  }
  function P(R) {
    return H(R) === b;
  }
  return Je.AsyncMode = m, Je.ConcurrentMode = b, Je.ContextConsumer = d, Je.ContextProvider = c, Je.Element = e, Je.ForwardRef = v, Je.Fragment = n, Je.Lazy = B, Je.Memo = D, Je.Portal = r, Je.Profiler = i, Je.StrictMode = a, Je.Suspense = A, Je.isAsyncMode = function(R) {
    return P(R) || H(R) === m;
  }, Je.isConcurrentMode = P, Je.isContextConsumer = function(R) {
    return H(R) === d;
  }, Je.isContextProvider = function(R) {
    return H(R) === c;
  }, Je.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === e;
  }, Je.isForwardRef = function(R) {
    return H(R) === v;
  }, Je.isFragment = function(R) {
    return H(R) === n;
  }, Je.isLazy = function(R) {
    return H(R) === B;
  }, Je.isMemo = function(R) {
    return H(R) === D;
  }, Je.isPortal = function(R) {
    return H(R) === r;
  }, Je.isProfiler = function(R) {
    return H(R) === i;
  }, Je.isStrictMode = function(R) {
    return H(R) === a;
  }, Je.isSuspense = function(R) {
    return H(R) === A;
  }, Je.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === n || R === b || R === i || R === a || R === A || R === S || typeof R == "object" && R !== null && (R.$$typeof === B || R.$$typeof === D || R.$$typeof === c || R.$$typeof === d || R.$$typeof === v || R.$$typeof === k || R.$$typeof === T || R.$$typeof === U || R.$$typeof === F);
  }, Je.typeOf = H, Je;
}
var Qe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function ml() {
  return jo || (jo = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, m = t ? Symbol.for("react.async_mode") : 60111, b = t ? Symbol.for("react.concurrent_mode") : 60111, v = t ? Symbol.for("react.forward_ref") : 60112, A = t ? Symbol.for("react.suspense") : 60113, S = t ? Symbol.for("react.suspense_list") : 60120, D = t ? Symbol.for("react.memo") : 60115, B = t ? Symbol.for("react.lazy") : 60116, F = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, T = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
    function H(O) {
      return typeof O == "string" || typeof O == "function" || O === n || O === b || O === i || O === a || O === A || O === S || typeof O == "object" && O !== null && (O.$$typeof === B || O.$$typeof === D || O.$$typeof === c || O.$$typeof === d || O.$$typeof === v || O.$$typeof === k || O.$$typeof === T || O.$$typeof === U || O.$$typeof === F);
    }
    function P(O) {
      if (typeof O == "object" && O !== null) {
        var we = O.$$typeof;
        switch (we) {
          case e:
            var G = O.type;
            switch (G) {
              case m:
              case b:
              case n:
              case i:
              case a:
              case A:
                return G;
              default:
                var V = G && G.$$typeof;
                switch (V) {
                  case d:
                  case v:
                  case B:
                  case D:
                  case c:
                    return V;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var R = m, W = b, Z = d, Y = c, ne = e, ce = v, $ = n, ie = B, y = D, s = r, f = i, u = a, g = A, x = !1;
    function w(O) {
      return x || (x = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(O) || P(O) === m;
    }
    function E(O) {
      return P(O) === b;
    }
    function l(O) {
      return P(O) === d;
    }
    function o(O) {
      return P(O) === c;
    }
    function h(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function I(O) {
      return P(O) === v;
    }
    function p(O) {
      return P(O) === n;
    }
    function C(O) {
      return P(O) === B;
    }
    function N(O) {
      return P(O) === D;
    }
    function _(O) {
      return P(O) === r;
    }
    function j(O) {
      return P(O) === i;
    }
    function X(O) {
      return P(O) === a;
    }
    function z(O) {
      return P(O) === A;
    }
    Qe.AsyncMode = R, Qe.ConcurrentMode = W, Qe.ContextConsumer = Z, Qe.ContextProvider = Y, Qe.Element = ne, Qe.ForwardRef = ce, Qe.Fragment = $, Qe.Lazy = ie, Qe.Memo = y, Qe.Portal = s, Qe.Profiler = f, Qe.StrictMode = u, Qe.Suspense = g, Qe.isAsyncMode = w, Qe.isConcurrentMode = E, Qe.isContextConsumer = l, Qe.isContextProvider = o, Qe.isElement = h, Qe.isForwardRef = I, Qe.isFragment = p, Qe.isLazy = C, Qe.isMemo = N, Qe.isPortal = _, Qe.isProfiler = j, Qe.isStrictMode = X, Qe.isSuspense = z, Qe.isValidElementType = H, Qe.typeOf = P;
  }()), Qe;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = ul() : t.exports = ml();
})(Va);
function pl(t) {
  function e(o, h, I, p, C) {
    for (var N = 0, _ = 0, j = 0, X = 0, z, O, we = 0, G = 0, V, $e = V = z = 0, fe = 0, be = 0, st = 0, le = 0, ye = I.length, it = ye - 1, ge, te = "", Ve = "", ve = "", xe = "", nt; fe < ye; ) {
      if (O = I.charCodeAt(fe), fe === it && _ + X + j + N !== 0 && (_ !== 0 && (O = _ === 47 ? 10 : 47), X = j = N = 0, ye++, it++), _ + X + j + N === 0) {
        if (fe === it && (0 < be && (te = te.replace(S, "")), 0 < te.trim().length)) {
          switch (O) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              te += I.charAt(fe);
          }
          O = 59;
        }
        switch (O) {
          case 123:
            for (te = te.trim(), z = te.charCodeAt(0), V = 1, le = ++fe; fe < ye; ) {
              switch (O = I.charCodeAt(fe)) {
                case 123:
                  V++;
                  break;
                case 125:
                  V--;
                  break;
                case 47:
                  switch (O = I.charCodeAt(fe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for ($e = fe + 1; $e < it; ++$e)
                          switch (I.charCodeAt($e)) {
                            case 47:
                              if (O === 42 && I.charCodeAt($e - 1) === 42 && fe + 2 !== $e) {
                                fe = $e + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (O === 47) {
                                fe = $e + 1;
                                break e;
                              }
                          }
                        fe = $e;
                      }
                  }
                  break;
                case 91:
                  O++;
                case 40:
                  O++;
                case 34:
                case 39:
                  for (; fe++ < it && I.charCodeAt(fe) !== O; )
                    ;
              }
              if (V === 0)
                break;
              fe++;
            }
            switch (V = I.substring(le, fe), z === 0 && (z = (te = te.replace(A, "").trim()).charCodeAt(0)), z) {
              case 64:
                switch (0 < be && (te = te.replace(S, "")), O = te.charCodeAt(1), O) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    be = h;
                    break;
                  default:
                    be = u;
                }
                if (V = e(h, be, V, O, C + 1), le = V.length, 0 < x && (be = r(u, te, st), nt = d(3, V, be, h, y, ie, le, O, C, p), te = be.join(""), nt !== void 0 && (le = (V = nt.trim()).length) === 0 && (O = 0, V = "")), 0 < le)
                  switch (O) {
                    case 115:
                      te = te.replace(W, c);
                    case 100:
                    case 109:
                    case 45:
                      V = te + "{" + V + "}";
                      break;
                    case 107:
                      te = te.replace(U, "$1 $2"), V = te + "{" + V + "}", V = f === 1 || f === 2 && i("@" + V, 3) ? "@-webkit-" + V + "@" + V : "@" + V;
                      break;
                    default:
                      V = te + V, p === 112 && (V = (Ve += V, ""));
                  }
                else
                  V = "";
                break;
              default:
                V = e(h, r(h, te, st), V, p, C + 1);
            }
            ve += V, V = st = be = $e = z = 0, te = "", O = I.charCodeAt(++fe);
            break;
          case 125:
          case 59:
            if (te = (0 < be ? te.replace(S, "") : te).trim(), 1 < (le = te.length))
              switch ($e === 0 && (z = te.charCodeAt(0), z === 45 || 96 < z && 123 > z) && (le = (te = te.replace(" ", ":")).length), 0 < x && (nt = d(1, te, h, o, y, ie, Ve.length, p, C, p)) !== void 0 && (le = (te = nt.trim()).length) === 0 && (te = "\0\0"), z = te.charCodeAt(0), O = te.charCodeAt(1), z) {
                case 0:
                  break;
                case 64:
                  if (O === 105 || O === 99) {
                    xe += te + I.charAt(fe);
                    break;
                  }
                default:
                  te.charCodeAt(le - 1) !== 58 && (Ve += a(te, z, O, te.charCodeAt(2)));
              }
            st = be = $e = z = 0, te = "", O = I.charCodeAt(++fe);
        }
      }
      switch (O) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + z === 0 && p !== 107 && 0 < te.length && (be = 1, te += "\0"), 0 < x * E && d(0, te, h, o, y, ie, Ve.length, p, C, p), ie = 1, y++;
          break;
        case 59:
        case 125:
          if (_ + X + j + N === 0) {
            ie++;
            break;
          }
        default:
          switch (ie++, ge = I.charAt(fe), O) {
            case 9:
            case 32:
              if (X + N + _ === 0)
                switch (we) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ge = "";
                    break;
                  default:
                    O !== 32 && (ge = " ");
                }
              break;
            case 0:
              ge = "\\0";
              break;
            case 12:
              ge = "\\f";
              break;
            case 11:
              ge = "\\v";
              break;
            case 38:
              X + _ + N === 0 && (be = st = 1, ge = "\f" + ge);
              break;
            case 108:
              if (X + _ + N + s === 0 && 0 < $e)
                switch (fe - $e) {
                  case 2:
                    we === 112 && I.charCodeAt(fe - 3) === 58 && (s = we);
                  case 8:
                    G === 111 && (s = G);
                }
              break;
            case 58:
              X + _ + N === 0 && ($e = fe);
              break;
            case 44:
              _ + j + X + N === 0 && (be = 1, ge += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (X = X === O ? 0 : X === 0 ? O : X);
              break;
            case 91:
              X + _ + j === 0 && N++;
              break;
            case 93:
              X + _ + j === 0 && N--;
              break;
            case 41:
              X + _ + N === 0 && j--;
              break;
            case 40:
              if (X + _ + N === 0) {
                if (z === 0)
                  switch (2 * we + 3 * G) {
                    case 533:
                      break;
                    default:
                      z = 1;
                  }
                j++;
              }
              break;
            case 64:
              _ + j + X + N + $e + V === 0 && (V = 1);
              break;
            case 42:
            case 47:
              if (!(0 < X + N + j))
                switch (_) {
                  case 0:
                    switch (2 * O + 3 * I.charCodeAt(fe + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        le = fe, _ = 42;
                    }
                    break;
                  case 42:
                    O === 47 && we === 42 && le + 2 !== fe && (I.charCodeAt(le + 2) === 33 && (Ve += I.substring(le, fe + 1)), ge = "", _ = 0);
                }
          }
          _ === 0 && (te += ge);
      }
      G = we, we = O, fe++;
    }
    if (le = Ve.length, 0 < le) {
      if (be = h, 0 < x && (nt = d(2, Ve, be, o, y, ie, le, p, C, p), nt !== void 0 && (Ve = nt).length === 0))
        return xe + Ve + ve;
      if (Ve = be.join(",") + "{" + Ve + "}", f * s !== 0) {
        switch (f !== 2 || i(Ve, 2) || (s = 0), s) {
          case 111:
            Ve = Ve.replace(P, ":-moz-$1") + Ve;
            break;
          case 112:
            Ve = Ve.replace(H, "::-webkit-input-$1") + Ve.replace(H, "::-moz-$1") + Ve.replace(H, ":-ms-input-$1") + Ve;
        }
        s = 0;
      }
    }
    return xe + Ve + ve;
  }
  function r(o, h, I) {
    var p = h.trim().split(k);
    h = p;
    var C = p.length, N = o.length;
    switch (N) {
      case 0:
      case 1:
        var _ = 0;
        for (o = N === 0 ? "" : o[0] + " "; _ < C; ++_)
          h[_] = n(o, h[_], I).trim();
        break;
      default:
        var j = _ = 0;
        for (h = []; _ < C; ++_)
          for (var X = 0; X < N; ++X)
            h[j++] = n(o[X] + " ", p[_], I).trim();
    }
    return h;
  }
  function n(o, h, I) {
    var p = h.charCodeAt(0);
    switch (33 > p && (p = (h = h.trim()).charCodeAt(0)), p) {
      case 38:
        return h.replace(T, "$1" + o.trim());
      case 58:
        return o.trim() + h.replace(T, "$1" + o.trim());
      default:
        if (0 < 1 * I && 0 < h.indexOf("\f"))
          return h.replace(T, (o.charCodeAt(0) === 58 ? "" : "$1") + o.trim());
    }
    return o + h;
  }
  function a(o, h, I, p) {
    var C = o + ";", N = 2 * h + 3 * I + 4 * p;
    if (N === 944) {
      o = C.indexOf(":", 9) + 1;
      var _ = C.substring(o, C.length - 1).trim();
      return _ = C.substring(0, o).trim() + _ + ";", f === 1 || f === 2 && i(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (f === 0 || f === 2 && !i(C, 1))
      return C;
    switch (N) {
      case 1015:
        return C.charCodeAt(10) === 97 ? "-webkit-" + C + C : C;
      case 951:
        return C.charCodeAt(3) === 116 ? "-webkit-" + C + C : C;
      case 963:
        return C.charCodeAt(5) === 110 ? "-webkit-" + C + C : C;
      case 1009:
        if (C.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + C + C;
      case 978:
        return "-webkit-" + C + "-moz-" + C + C;
      case 1019:
      case 983:
        return "-webkit-" + C + "-moz-" + C + "-ms-" + C + C;
      case 883:
        if (C.charCodeAt(8) === 45)
          return "-webkit-" + C + C;
        if (0 < C.indexOf("image-set(", 11))
          return C.replace($, "$1-webkit-$2") + C;
        break;
      case 932:
        if (C.charCodeAt(4) === 45)
          switch (C.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + C.replace("-grow", "") + "-webkit-" + C + "-ms-" + C.replace("grow", "positive") + C;
            case 115:
              return "-webkit-" + C + "-ms-" + C.replace("shrink", "negative") + C;
            case 98:
              return "-webkit-" + C + "-ms-" + C.replace("basis", "preferred-size") + C;
          }
        return "-webkit-" + C + "-ms-" + C + C;
      case 964:
        return "-webkit-" + C + "-ms-flex-" + C + C;
      case 1023:
        if (C.charCodeAt(8) !== 99)
          break;
        return _ = C.substring(C.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + C + "-ms-flex-pack" + _ + C;
      case 1005:
        return B.test(C) ? C.replace(D, ":-webkit-") + C.replace(D, ":-moz-") + C : C;
      case 1e3:
        switch (_ = C.substring(13).trim(), h = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(h)) {
          case 226:
            _ = C.replace(R, "tb");
            break;
          case 232:
            _ = C.replace(R, "tb-rl");
            break;
          case 220:
            _ = C.replace(R, "lr");
            break;
          default:
            return C;
        }
        return "-webkit-" + C + "-ms-" + _ + C;
      case 1017:
        if (C.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (h = (C = o).length - 10, _ = (C.charCodeAt(h) === 33 ? C.substring(0, h) : C).substring(o.indexOf(":", 7) + 1).trim(), N = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8))
              break;
          case 115:
            C = C.replace(_, "-webkit-" + _) + ";" + C;
            break;
          case 207:
          case 102:
            C = C.replace(_, "-webkit-" + (102 < N ? "inline-" : "") + "box") + ";" + C.replace(_, "-webkit-" + _) + ";" + C.replace(_, "-ms-" + _ + "box") + ";" + C;
        }
        return C + ";";
      case 938:
        if (C.charCodeAt(5) === 45)
          switch (C.charCodeAt(6)) {
            case 105:
              return _ = C.replace("-items", ""), "-webkit-" + C + "-webkit-box-" + _ + "-ms-flex-" + _ + C;
            case 115:
              return "-webkit-" + C + "-ms-flex-item-" + C.replace(Y, "") + C;
            default:
              return "-webkit-" + C + "-ms-flex-line-pack" + C.replace("align-content", "").replace(Y, "") + C;
          }
        break;
      case 973:
      case 989:
        if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (ce.test(o) === !0)
          return (_ = o.substring(o.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(o.replace("stretch", "fill-available"), h, I, p).replace(":fill-available", ":stretch") : C.replace(_, "-webkit-" + _) + C.replace(_, "-moz-" + _.replace("fill-", "")) + C;
        break;
      case 962:
        if (C = "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C, I + p === 211 && C.charCodeAt(13) === 105 && 0 < C.indexOf("transform", 10))
          return C.substring(0, C.indexOf(";", 27) + 1).replace(F, "$1-webkit-$2") + C;
    }
    return C;
  }
  function i(o, h) {
    var I = o.indexOf(h === 1 ? ":" : "{"), p = o.substring(0, h !== 3 ? I : 10);
    return I = o.substring(I + 1, o.length - 1), w(h !== 2 ? p : p.replace(ne, "$1"), I, h);
  }
  function c(o, h) {
    var I = a(h, h.charCodeAt(0), h.charCodeAt(1), h.charCodeAt(2));
    return I !== h + ";" ? I.replace(Z, " or ($1)").substring(4) : "(" + h + ")";
  }
  function d(o, h, I, p, C, N, _, j, X, z) {
    for (var O = 0, we = h, G; O < x; ++O)
      switch (G = g[O].call(v, o, we, I, p, C, N, _, j, X, z)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          we = G;
      }
    if (we !== h)
      return we;
  }
  function m(o) {
    switch (o) {
      case void 0:
      case null:
        x = g.length = 0;
        break;
      default:
        if (typeof o == "function")
          g[x++] = o;
        else if (typeof o == "object")
          for (var h = 0, I = o.length; h < I; ++h)
            m(o[h]);
        else
          E = !!o | 0;
    }
    return m;
  }
  function b(o) {
    return o = o.prefix, o !== void 0 && (w = null, o ? typeof o != "function" ? f = 1 : (f = 2, w = o) : f = 0), b;
  }
  function v(o, h) {
    var I = o;
    if (33 > I.charCodeAt(0) && (I = I.trim()), l = I, I = [l], 0 < x) {
      var p = d(-1, h, I, I, y, ie, 0, 0, 0, 0);
      p !== void 0 && typeof p == "string" && (h = p);
    }
    var C = e(u, I, h, 0, 0);
    return 0 < x && (p = d(-2, C, I, I, y, ie, C.length, 0, 0, 0), p !== void 0 && (C = p)), l = "", s = 0, ie = y = 1, C;
  }
  var A = /^\0+/g, S = /[\0\r\f]/g, D = /: */g, B = /zoo|gra/, F = /([,: ])(transform)/g, k = /,\r+?/g, T = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, H = /::(place)/g, P = /:(read-only)/g, R = /[svh]\w+-[tblr]{2}/, W = /\(\s*(.*)\s*\)/g, Z = /([\s\S]*?);/g, Y = /-self|flex-/g, ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ce = /stretch|:\s*\w+\-(?:conte|avail)/, $ = /([^-])(image-set\()/, ie = 1, y = 1, s = 0, f = 1, u = [], g = [], x = 0, w = null, E = 0, l = "";
  return v.use = m, v.set = b, t !== void 0 && b(t), v;
}
var bl = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function gl(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] === void 0 && (e[r] = t(r)), e[r];
  };
}
var xl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Wo = /* @__PURE__ */ gl(
  function(t) {
    return xl.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
), Js = Va.exports, yl = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, vl = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, wl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Sc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qs = {};
Qs[Js.ForwardRef] = wl;
Qs[Js.Memo] = Sc;
function Ho(t) {
  return Js.isMemo(t) ? Sc : Qs[t.$$typeof] || yl;
}
var Al = Object.defineProperty, Cl = Object.getOwnPropertyNames, zo = Object.getOwnPropertySymbols, El = Object.getOwnPropertyDescriptor, Il = Object.getPrototypeOf, $o = Object.prototype;
function Dc(t, e, r) {
  if (typeof e != "string") {
    if ($o) {
      var n = Il(e);
      n && n !== $o && Dc(t, n, r);
    }
    var a = Cl(e);
    zo && (a = a.concat(zo(e)));
    for (var i = Ho(t), c = Ho(e), d = 0; d < a.length; ++d) {
      var m = a[d];
      if (!vl[m] && !(r && r[m]) && !(c && c[m]) && !(i && i[m])) {
        var b = El(e, m);
        try {
          Al(t, m, b);
        } catch {
        }
      }
    }
  }
  return t;
}
var kl = Dc;
function Er() {
  return (Er = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
var Vo = function(t, e) {
  for (var r = [t[0]], n = 0, a = e.length; n < a; n += 1)
    r.push(e[n], t[n + 1]);
  return r;
}, Cs = function(t) {
  return t !== null && typeof t == "object" && (t.toString ? t.toString() : Object.prototype.toString.call(t)) === "[object Object]" && !Va.exports.typeOf(t);
}, Ci = Object.freeze([]), rn = Object.freeze({});
function Xn(t) {
  return typeof t == "function";
}
function Es(t) {
  return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function eo(t) {
  return t && typeof t.styledComponentId == "string";
}
var Jn = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", to = typeof window < "u" && "HTMLElement" in window, Sl = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Dl = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Bl() {
  for (var t = arguments.length <= 0 ? void 0 : arguments[0], e = [], r = 1, n = arguments.length; r < n; r += 1)
    e.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return e.forEach(function(a) {
    t = t.replace(/%[a-z]/, a);
  }), t;
}
function Hr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + t + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Bl.apply(void 0, [Dl[t]].concat(r)).trim());
}
var Fl = function() {
  function t(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var e = t.prototype;
  return e.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++)
      n += this.groupSizes[a];
    return n;
  }, e.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, c = i; r >= c; )
        (c <<= 1) < 0 && Hr(16, "" + r);
      this.groupSizes = new Uint32Array(c), this.groupSizes.set(a), this.length = c;
      for (var d = i; d < c; d++)
        this.groupSizes[d] = 0;
    }
    for (var m = this.indexOfGroup(r + 1), b = 0, v = n.length; b < v; b++)
      this.tag.insertRule(m, n[b]) && (this.groupSizes[r]++, m++);
  }, e.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var c = a; c < i; c++)
        this.tag.deleteRule(a);
    }
  }, e.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), c = i + a, d = i; d < c; d++)
      n += this.tag.getRule(d) + `/*!sc*/
`;
    return n;
  }, t;
}(), ui = /* @__PURE__ */ new Map(), Ei = /* @__PURE__ */ new Map(), Ia = 1, ri = function(t) {
  if (ui.has(t))
    return ui.get(t);
  for (; Ei.has(Ia); )
    Ia++;
  var e = Ia++;
  return process.env.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1 << 30) && Hr(16, "" + e), ui.set(t, e), Ei.set(e, t), e;
}, Ml = function(t) {
  return Ei.get(t);
}, _l = function(t, e) {
  e >= Ia && (Ia = e + 1), ui.set(t, e), Ei.set(e, t);
}, Rl = "style[" + Jn + '][data-styled-version="5.3.6"]', Tl = new RegExp("^" + Jn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ul = function(t, e, r) {
  for (var n, a = r.split(","), i = 0, c = a.length; i < c; i++)
    (n = a[i]) && t.registerName(e, n);
}, Pl = function(t, e) {
  for (var r = (e.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var c = r[a].trim();
    if (c) {
      var d = c.match(Tl);
      if (d) {
        var m = 0 | parseInt(d[1], 10), b = d[2];
        m !== 0 && (_l(b, m), Ul(t, b, d[3]), t.getTag().insertRules(m, n)), n.length = 0;
      } else
        n.push(c);
    }
  }
}, Ol = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Bc = function(t) {
  var e = document.head, r = t || e, n = document.createElement("style"), a = function(d) {
    for (var m = d.childNodes, b = m.length; b >= 0; b--) {
      var v = m[b];
      if (v && v.nodeType === 1 && v.hasAttribute(Jn))
        return v;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Jn, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var c = Ol();
  return c && n.setAttribute("nonce", c), r.insertBefore(n, i), n;
}, Nl = function() {
  function t(r) {
    var n = this.element = Bc(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet)
        return a.sheet;
      for (var i = document.styleSheets, c = 0, d = i.length; c < d; c++) {
        var m = i[c];
        if (m.ownerNode === a)
          return m;
      }
      Hr(17);
    }(n), this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, t;
}(), Ll = function() {
  function t(r) {
    var n = this.element = Bc(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(a, i || null), this.length++, !0;
    }
    return !1;
  }, e.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, t;
}(), jl = function() {
  function t(r) {
    this.rules = [], this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, e.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, t;
}(), Go = to, Wl = { isServer: !to, useCSSOMInjection: !Sl }, Fc = function() {
  function t(r, n, a) {
    r === void 0 && (r = rn), n === void 0 && (n = {}), this.options = Er({}, Wl, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && to && Go && (Go = !1, function(i) {
      for (var c = document.querySelectorAll(Rl), d = 0, m = c.length; d < m; d++) {
        var b = c[d];
        b && b.getAttribute(Jn) !== "active" && (Pl(i, b), b.parentNode && b.parentNode.removeChild(b));
      }
    }(this));
  }
  t.registerId = function(r) {
    return ri(r);
  };
  var e = t.prototype;
  return e.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new t(Er({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, e.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, c = n.target, r = a ? new jl(c) : i ? new Nl(c) : new Ll(c), new Fl(r)));
    var r, n, a, i, c;
  }, e.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, e.registerName = function(r, n) {
    if (ri(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, e.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(ri(r), a);
  }, e.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.clearRules = function(r) {
    this.getTag().clearGroup(ri(r)), this.clearNames(r);
  }, e.clearTag = function() {
    this.tag = void 0;
  }, e.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", c = 0; c < a; c++) {
        var d = Ml(c);
        if (d !== void 0) {
          var m = r.names.get(d), b = n.getGroup(c);
          if (m && b && m.size) {
            var v = Jn + ".g" + c + '[id="' + d + '"]', A = "";
            m !== void 0 && m.forEach(function(S) {
              S.length > 0 && (A += S + ",");
            }), i += "" + b + v + '{content:"' + A + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, t;
}(), Hl = /(a)(d)/gi, Ko = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Is(t) {
  var e, r = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0)
    r = Ko(e % 52) + r;
  return (Ko(e % 52) + r).replace(Hl, "$1-$2");
}
var Cn = function(t, e) {
  for (var r = e.length; r; )
    t = 33 * t ^ e.charCodeAt(--r);
  return t;
}, Mc = function(t) {
  return Cn(5381, t);
};
function zl(t) {
  for (var e = 0; e < t.length; e += 1) {
    var r = t[e];
    if (Xn(r) && !eo(r))
      return !1;
  }
  return !0;
}
var $l = Mc("5.3.6"), Vl = function() {
  function t(e, r, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && zl(e), this.componentId = r, this.baseHash = Cn($l, r), this.baseStyle = n, Fc.registerId(r);
  }
  return t.prototype.generateAndInjectStyles = function(e, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(e, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var c = Qn(this.rules, e, r, n).join(""), d = Is(Cn(this.baseHash, c) >>> 0);
        if (!r.hasNameForId(a, d)) {
          var m = n(c, "." + d, void 0, a);
          r.insertRules(a, d, m);
        }
        i.push(d), this.staticRulesId = d;
      }
    else {
      for (var b = this.rules.length, v = Cn(this.baseHash, n.hash), A = "", S = 0; S < b; S++) {
        var D = this.rules[S];
        if (typeof D == "string")
          A += D, process.env.NODE_ENV !== "production" && (v = Cn(v, D + S));
        else if (D) {
          var B = Qn(D, e, r, n), F = Array.isArray(B) ? B.join("") : B;
          v = Cn(v, F + S), A += F;
        }
      }
      if (A) {
        var k = Is(v >>> 0);
        if (!r.hasNameForId(a, k)) {
          var T = n(A, "." + k, void 0, a);
          r.insertRules(a, k, T);
        }
        i.push(k);
      }
    }
    return i.join(" ");
  }, t;
}(), Gl = /^\s*\/\/.*$/gm, Kl = [":", "[", ".", "#"];
function ql(t) {
  var e, r, n, a, i = t === void 0 ? rn : t, c = i.options, d = c === void 0 ? rn : c, m = i.plugins, b = m === void 0 ? Ci : m, v = new pl(d), A = [], S = function(F) {
    function k(T) {
      if (T)
        try {
          F(T + "}");
        } catch {
        }
    }
    return function(T, U, H, P, R, W, Z, Y, ne, ce) {
      switch (T) {
        case 1:
          if (ne === 0 && U.charCodeAt(0) === 64)
            return F(U + ";"), "";
          break;
        case 2:
          if (Y === 0)
            return U + "/*|*/";
          break;
        case 3:
          switch (Y) {
            case 102:
            case 112:
              return F(H[0] + U), "";
            default:
              return U + (ce === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(k);
      }
    };
  }(function(F) {
    A.push(F);
  }), D = function(F, k, T) {
    return k === 0 && Kl.indexOf(T[r.length]) !== -1 || T.match(a) ? F : "." + e;
  };
  function B(F, k, T, U) {
    U === void 0 && (U = "&");
    var H = F.replace(Gl, ""), P = k && T ? T + " " + k + " { " + H + " }" : H;
    return e = U, r = k, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), v(T || !k ? "" : k, P);
  }
  return v.use([].concat(b, [function(F, k, T) {
    F === 2 && T.length && T[0].lastIndexOf(r) > 0 && (T[0] = T[0].replace(n, D));
  }, S, function(F) {
    if (F === -2) {
      var k = A;
      return A = [], k;
    }
  }])), B.hash = b.length ? b.reduce(function(F, k) {
    return k.name || Hr(15), Cn(F, k.name);
  }, 5381).toString() : "", B;
}
var _c = _r.createContext();
_c.Consumer;
var Rc = _r.createContext(), Zl = (Rc.Consumer, new Fc()), ks = ql();
function Yl() {
  return cn(_c) || Zl;
}
function Xl() {
  return cn(Rc) || ks;
}
var Tc = function() {
  function t(e, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = ks);
      var c = n.name + i.hash;
      a.hasNameForId(n.id, c) || a.insertRules(n.id, c, i(n.rules, c, "@keyframes"));
    }, this.toString = function() {
      return Hr(12, String(n.name));
    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = r;
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = ks), this.name + e.hash;
  }, t;
}(), Jl = /([A-Z])/, Ql = /([A-Z])/g, e1 = /^ms-/, t1 = function(t) {
  return "-" + t.toLowerCase();
};
function qo(t) {
  return Jl.test(t) ? t.replace(Ql, t1).replace(e1, "-ms-") : t;
}
var Zo = function(t) {
  return t == null || t === !1 || t === "";
};
function Qn(t, e, r, n) {
  if (Array.isArray(t)) {
    for (var a, i = [], c = 0, d = t.length; c < d; c += 1)
      (a = Qn(t[c], e, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (Zo(t))
    return "";
  if (eo(t))
    return "." + t.styledComponentId;
  if (Xn(t)) {
    if (typeof (b = t) != "function" || b.prototype && b.prototype.isReactComponent || !e)
      return t;
    var m = t(e);
    return process.env.NODE_ENV !== "production" && Va.exports.isElement(m) && console.warn(Es(t) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Qn(m, e, r, n);
  }
  var b;
  return t instanceof Tc ? r ? (t.inject(r, n), t.getName(n)) : t : Cs(t) ? function v(A, S) {
    var D, B, F = [];
    for (var k in A)
      A.hasOwnProperty(k) && !Zo(A[k]) && (Array.isArray(A[k]) && A[k].isCss || Xn(A[k]) ? F.push(qo(k) + ":", A[k], ";") : Cs(A[k]) ? F.push.apply(F, v(A[k], k)) : F.push(qo(k) + ": " + (D = k, (B = A[k]) == null || typeof B == "boolean" || B === "" ? "" : typeof B != "number" || B === 0 || D in bl ? String(B).trim() : B + "px") + ";"));
    return S ? [S + " {"].concat(F, ["}"]) : F;
  }(t) : t.toString();
}
var Yo = function(t) {
  return Array.isArray(t) && (t.isCss = !0), t;
};
function Pi(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  return Xn(t) || Cs(t) ? Yo(Qn(Vo(Ci, [t].concat(r)))) : r.length === 0 && t.length === 1 && typeof t[0] == "string" ? t : Yo(Qn(Vo(t, r)));
}
var Xo = /invalid hook call/i, ni = /* @__PURE__ */ new Set(), r1 = function(t, e) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + t + (e ? ' with the id of "' + e + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        if (Xo.test(i))
          a = !1, ni.delete(r);
        else {
          for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), m = 1; m < c; m++)
            d[m - 1] = arguments[m];
          n.apply(void 0, [i].concat(d));
        }
      }, pr(), a && !ni.has(r) && (console.warn(r), ni.add(r));
    } catch (i) {
      Xo.test(i.message) && ni.delete(r);
    } finally {
      console.error = n;
    }
  }
}, n1 = function(t, e, r) {
  return r === void 0 && (r = rn), t.theme !== r.theme && t.theme || e || r.theme;
}, a1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, i1 = /(^-|-$)/g;
function es(t) {
  return t.replace(a1, "-").replace(i1, "");
}
var Uc = function(t) {
  return Is(Mc(t) >>> 0);
};
function ai(t) {
  return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var Ss = function(t) {
  return typeof t == "function" || typeof t == "object" && t !== null && !Array.isArray(t);
}, s1 = function(t) {
  return t !== "__proto__" && t !== "constructor" && t !== "prototype";
};
function o1(t, e, r) {
  var n = t[r];
  Ss(e) && Ss(n) ? Pc(n, e) : t[r] = e;
}
function Pc(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var c = i[a];
    if (Ss(c))
      for (var d in c)
        s1(d) && o1(t, c[d], d);
  }
  return t;
}
var _a = _r.createContext();
_a.Consumer;
function c1(t) {
  var e = cn(_a), r = fa(function() {
    return function(n, a) {
      if (!n)
        return Hr(14);
      if (Xn(n)) {
        var i = n(a);
        return process.env.NODE_ENV === "production" || i !== null && !Array.isArray(i) && typeof i == "object" ? i : Hr(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Hr(8) : a ? Er({}, a, {}, n) : n;
    }(t.theme, e);
  }, [t.theme, e]);
  return t.children ? _r.createElement(_a.Provider, { value: r }, t.children) : null;
}
var ts = {};
function Oc(t, e, r) {
  var n = eo(t), a = !ai(t), i = e.attrs, c = i === void 0 ? Ci : i, d = e.componentId, m = d === void 0 ? function(U, H) {
    var P = typeof U != "string" ? "sc" : es(U);
    ts[P] = (ts[P] || 0) + 1;
    var R = P + "-" + Uc("5.3.6" + P + ts[P]);
    return H ? H + "-" + R : R;
  }(e.displayName, e.parentComponentId) : d, b = e.displayName, v = b === void 0 ? function(U) {
    return ai(U) ? "styled." + U : "Styled(" + Es(U) + ")";
  }(t) : b, A = e.displayName && e.componentId ? es(e.displayName) + "-" + e.componentId : e.componentId || m, S = n && t.attrs ? Array.prototype.concat(t.attrs, c).filter(Boolean) : c, D = e.shouldForwardProp;
  n && t.shouldForwardProp && (D = e.shouldForwardProp ? function(U, H, P) {
    return t.shouldForwardProp(U, H, P) && e.shouldForwardProp(U, H, P);
  } : t.shouldForwardProp);
  var B, F = new Vl(r, A, n ? t.componentStyle : void 0), k = F.isStatic && c.length === 0, T = function(U, H) {
    return function(P, R, W, Z) {
      var Y = P.attrs, ne = P.componentStyle, ce = P.defaultProps, $ = P.foldedComponentIds, ie = P.shouldForwardProp, y = P.styledComponentId, s = P.target;
      process.env.NODE_ENV !== "production" && No(y);
      var f = function(p, C, N) {
        p === void 0 && (p = rn);
        var _ = Er({}, C, { theme: p }), j = {};
        return N.forEach(function(X) {
          var z, O, we, G = X;
          for (z in Xn(G) && (G = G(_)), G)
            _[z] = j[z] = z === "className" ? (O = j[z], we = G[z], O && we ? O + " " + we : O || we) : G[z];
        }), [_, j];
      }(n1(R, cn(_a), ce) || rn, R, Y), u = f[0], g = f[1], x = function(p, C, N, _) {
        var j = Yl(), X = Xl(), z = C ? p.generateAndInjectStyles(rn, j, X) : p.generateAndInjectStyles(N, j, X);
        return process.env.NODE_ENV !== "production" && No(z), process.env.NODE_ENV !== "production" && !C && _ && _(z), z;
      }(ne, Z, u, process.env.NODE_ENV !== "production" ? P.warnTooManyClasses : void 0), w = W, E = g.$as || R.$as || g.as || R.as || s, l = ai(E), o = g !== R ? Er({}, R, {}, g) : R, h = {};
      for (var I in o)
        I[0] !== "$" && I !== "as" && (I === "forwardedAs" ? h.as = o[I] : (ie ? ie(I, Wo, E) : !l || Wo(I)) && (h[I] = o[I]));
      return R.style && g.style !== R.style && (h.style = Er({}, R.style, {}, g.style)), h.className = Array.prototype.concat($, y, x !== y ? x : null, R.className, g.className).filter(Boolean).join(" "), h.ref = w, sl(E, h);
    }(B, U, H, k);
  };
  return T.displayName = v, (B = _r.forwardRef(T)).attrs = S, B.componentStyle = F, B.displayName = v, B.shouldForwardProp = D, B.foldedComponentIds = n ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : Ci, B.styledComponentId = A, B.target = n ? t.target : t, B.withComponent = function(U) {
    var H = e.componentId, P = function(W, Z) {
      if (W == null)
        return {};
      var Y, ne, ce = {}, $ = Object.keys(W);
      for (ne = 0; ne < $.length; ne++)
        Y = $[ne], Z.indexOf(Y) >= 0 || (ce[Y] = W[Y]);
      return ce;
    }(e, ["componentId"]), R = H && H + "-" + (ai(U) ? U : es(Es(U)));
    return Oc(U, Er({}, P, { attrs: S, componentId: R }), r);
  }, Object.defineProperty(B, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? Pc({}, t.defaultProps, U) : U;
  } }), process.env.NODE_ENV !== "production" && (r1(v, A), B.warnTooManyClasses = function(U, H) {
    var P = {}, R = !1;
    return function(W) {
      if (!R && (P[W] = !0, Object.keys(P).length >= 200)) {
        var Z = H ? ' with the id of "' + H + '"' : "";
        console.warn("Over 200 classes were generated for component " + U + Z + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), R = !0, P = {};
      }
    };
  }(v, A)), B.toString = function() {
    return "." + B.styledComponentId;
  }, a && kl(B, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), B;
}
var Ds = function(t) {
  return function e(r, n, a) {
    if (a === void 0 && (a = rn), !Va.exports.isValidElementType(n))
      return Hr(1, String(n));
    var i = function() {
      return r(n, a, Pi.apply(void 0, arguments));
    };
    return i.withConfig = function(c) {
      return e(r, n, Er({}, a, {}, c));
    }, i.attrs = function(c) {
      return e(r, n, Er({}, a, { attrs: Array.prototype.concat(a.attrs, c).filter(Boolean) }));
    }, i;
  }(Oc, t);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(t) {
  Ds[t] = Ds(t);
});
function ro(t) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var a = Pi.apply(void 0, [t].concat(r)).join(""), i = Uc(a);
  return new Tc(i, a);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Q = Ds, f1 = {
  text: "#212121",
  subText: "#979797",
  primary: "#F1FFEE",
  dialog: "#EAFCE6",
  secondary: "#FFE3CA",
  interactive: "#FFFFFF",
  stroke: "#FF9F4A",
  accent: "#FF9F4A",
  success: "#189470",
  warning: "#FF9901",
  error: "#F84242",
  fontFamily: "Work Sans",
  borderRadius: "10px",
  buttonRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)"
}, d1 = (t) => /* @__PURE__ */ re.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("path", { d: "M2.5 15C2.5 15.4583 2.875 15.8333 3.33333 15.8333H7.5V14.1667H3.33333C2.875 14.1667 2.5 14.5417 2.5 15ZM2.5 5C2.5 5.45833 2.875 5.83333 3.33333 5.83333H10.8333V4.16667H3.33333C2.875 4.16667 2.5 4.54167 2.5 5ZM10.8333 16.6667V15.8333H16.6667C17.125 15.8333 17.5 15.4583 17.5 15C17.5 14.5417 17.125 14.1667 16.6667 14.1667H10.8333V13.3333C10.8333 12.875 10.4583 12.5 10 12.5C9.54167 12.5 9.16667 12.875 9.16667 13.3333V16.6667C9.16667 17.125 9.54167 17.5 10 17.5C10.4583 17.5 10.8333 17.125 10.8333 16.6667ZM5.83333 8.33333V9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333H5.83333V11.6667C5.83333 12.125 6.20833 12.5 6.66667 12.5C7.125 12.5 7.5 12.125 7.5 11.6667V8.33333C7.5 7.875 7.125 7.5 6.66667 7.5C6.20833 7.5 5.83333 7.875 5.83333 8.33333ZM17.5 10C17.5 9.54167 17.125 9.16667 16.6667 9.16667H9.16667V10.8333H16.6667C17.125 10.8333 17.5 10.4583 17.5 10ZM13.3333 7.5C13.7917 7.5 14.1667 7.125 14.1667 6.66667V5.83333H16.6667C17.125 5.83333 17.5 5.45833 17.5 5C17.5 4.54167 17.125 4.16667 16.6667 4.16667H14.1667V3.33333C14.1667 2.875 13.7917 2.5 13.3333 2.5C12.875 2.5 12.5 2.875 12.5 3.33333V6.66667C12.5 7.125 12.875 7.5 13.3333 7.5Z", fill: "currentColor" })), Jo = (t) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("path", { d: "M6.66667 10.6667V5.33333C6.66667 4.6 7.26 4 8 4H14V3.33333C14 2.6 13.4 2 12.6667 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V12H8C7.26 12 6.66667 11.4 6.66667 10.6667ZM8.66667 5.33333C8.3 5.33333 8 5.63333 8 6V10C8 10.3667 8.3 10.6667 8.66667 10.6667H14.6667V5.33333H8.66667ZM10.6667 9C10.1133 9 9.66667 8.55333 9.66667 8C9.66667 7.44667 10.1133 7 10.6667 7C11.22 7 11.6667 7.44667 11.6667 8C11.6667 8.55333 11.22 9 10.6667 9Z", fill: "currentColor" })), Bs = (t) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z", fill: "currentColor" })), l1 = (t) => /* @__PURE__ */ re.createElement("svg", { width: 24, height: 24, transform: "none", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("path", { d: "M12.14 6.13978L9.34997 3.35978C9.14997 3.16978 8.83997 3.16978 8.63997 3.35978L5.84997 6.13978C5.52997 6.44978 5.75997 6.98978 6.19997 6.98978L7.99997 6.98978L7.99997 12.9998C7.99997 13.5498 8.44997 13.9998 8.99997 13.9998C9.54997 13.9998 9.99997 13.5498 9.99997 12.9998L9.99997 6.98978L11.79 6.98978C12.24 6.98978 12.46 6.44978 12.14 6.13978ZM15.35 20.6498L18.14 17.8698C18.46 17.5598 18.23 17.0198 17.79 17.0198L16 17.0198L16 10.9998C16 10.4498 15.55 9.99979 15 9.99979C14.45 9.99979 14 10.4498 14 10.9998L14 17.0098L12.21 17.0098C11.76 17.0098 11.54 17.5498 11.86 17.8598L14.65 20.6398C14.84 20.8398 15.16 20.8398 15.35 20.6498Z", fill: "currentColor" })), h1 = (t) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("g", { clipPath: "url(#clip0_1036_5139)" }, /* @__PURE__ */ re.createElement("path", { d: "M10.0833 3.41667L11.7499 5.08334L10.0833 6.75001", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M4.25 7.58333V6.74999C4.25 6.30797 4.42559 5.88404 4.73816 5.57148C5.05072 5.25892 5.47464 5.08333 5.91667 5.08333H11.75", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M5.91667 12.5833L4.25 10.9167L5.91667 9.25", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M11.75 8.41667V9.25001C11.75 9.69203 11.5744 10.116 11.2618 10.4285C10.9493 10.7411 10.5254 10.9167 10.0833 10.9167H4.25", stroke: "#979797", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("clipPath", { id: "clip0_1036_5139" }, /* @__PURE__ */ re.createElement("rect", { width: 10, height: 10, fill: "white", transform: "translate(3 3)" })))), Nc = (t) => /* @__PURE__ */ re.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("g", { clipPath: "url(#clip0_268_44772)" }, /* @__PURE__ */ re.createElement("path", { d: "M13.85 2.49155C13.4417 2.08322 12.7833 2.08322 12.375 2.49155L5.44999 9.41655C5.12499 9.74155 5.12499 10.2666 5.44999 10.5916L12.375 17.5166C12.7833 17.9249 13.4417 17.9249 13.85 17.5166C14.2583 17.1082 14.2583 16.4499 13.85 16.0416L7.81665 9.99989L13.8583 3.95822C14.2583 3.55822 14.2583 2.89155 13.85 2.49155Z", fill: "currentColor" })), /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("clipPath", { id: "clip0_268_44772" }, /* @__PURE__ */ re.createElement("rect", { width: 20, height: 20, fill: "currentColor" })))), Qo = (t) => /* @__PURE__ */ re.createElement("svg", { width: 61, height: 20, viewBox: "0 0 61 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ re.createElement("path", { d: "M6.01758 9.99596L13.5114 14.2792C13.5713 14.313 13.639 14.3306 13.7079 14.3304C13.7768 14.3302 13.8444 14.3122 13.9041 14.2781C13.9639 14.244 14.0137 14.195 14.0487 14.1359C14.0837 14.0768 14.1027 14.0097 14.1039 13.9411L14.1051 6.05348C14.1044 5.98473 14.0856 5.91738 14.0507 5.85809C14.0158 5.79879 13.9659 5.74962 13.9061 5.71544C13.8462 5.68126 13.7784 5.66325 13.7095 5.66321C13.6405 5.66316 13.5727 5.68108 13.5128 5.71518L6.01758 9.99596Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M13.0758 3.86933L8.10117 0.0794926C8.04809 0.0397578 7.98589 0.0138881 7.92022 0.00423986C7.85455 -0.00540841 7.7875 0.00147132 7.72517 0.0242526C7.66285 0.0470339 7.60724 0.0849927 7.56341 0.134671C7.51957 0.18435 7.4889 0.24417 7.47419 0.308682L5.65527 8.7463L13.0354 4.52282C13.0925 4.49102 13.1407 4.44544 13.1755 4.39027C13.2103 4.3351 13.2306 4.2721 13.2346 4.20706C13.2386 4.14201 13.2262 4.077 13.1985 4.01799C13.1707 3.95898 13.1285 3.90787 13.0758 3.86933Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M8.09737 19.9187L13.0847 16.1247C13.1363 16.0854 13.1774 16.0341 13.2043 15.9753C13.2313 15.9164 13.2433 15.8519 13.2394 15.7873C13.2354 15.7228 13.2155 15.6602 13.1816 15.605C13.1476 15.5499 13.1006 15.504 13.0446 15.4712L5.6543 11.2511L7.47622 19.6893C7.48956 19.754 7.51921 19.8142 7.56237 19.8644C7.60553 19.9145 7.66079 19.9528 7.72293 19.9758C7.78507 19.9987 7.85205 20.0055 7.91756 19.9955C7.98307 19.9855 8.04495 19.9591 8.09737 19.9187Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M4.09602 9.9957L6.05884 0.904641C6.07589 0.825899 6.06815 0.743831 6.03666 0.66964C6.00517 0.595448 5.95148 0.532749 5.88291 0.4901C5.81434 0.447452 5.73423 0.426932 5.65353 0.431343C5.57282 0.435754 5.49544 0.46488 5.43196 0.514745L0.410088 4.33735C0.282855 4.43432 0.179798 4.55925 0.108943 4.70241C0.0380878 4.84557 0.00134694 5.0031 0.00158152 5.16273L1.66608e-06 14.8445C-0.000284921 15.0042 0.0364046 15.1617 0.107213 15.3049C0.178021 15.4481 0.281037 15.573 0.408239 15.6701L5.42887 19.4886C5.49281 19.5364 5.56975 19.5638 5.6496 19.5672C5.72945 19.5706 5.80848 19.5499 5.8763 19.5077C5.94411 19.4656 5.99756 19.404 6.0296 19.331C6.06165 19.258 6.07081 19.1771 6.05587 19.0989L4.09602 9.9957Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M43.1801 7.34494C43.5389 7.33762 43.8933 7.4251 44.2072 7.59846C44.521 7.77183 44.7833 8.02492 44.9672 8.332L44.3463 8.80862C44.2137 8.60905 44.039 8.44065 43.8344 8.31515C43.6367 8.19754 43.4102 8.13671 43.1799 8.13939C42.9723 8.13484 42.768 8.19155 42.5926 8.30239C42.5095 8.35695 42.4423 8.43253 42.3981 8.52141C42.3539 8.6103 42.3341 8.70929 42.3409 8.80827C42.3382 8.90224 42.3583 8.99546 42.3996 9.07999C42.4394 9.15634 42.4934 9.22444 42.5588 9.28068C42.6327 9.34389 42.7145 9.39734 42.8021 9.43971C42.8972 9.48722 43.0007 9.53879 43.1125 9.59441L43.7334 9.87889C43.9273 9.96675 44.1151 10.0674 44.2956 10.1801C44.451 10.2757 44.5923 10.3925 44.7153 10.5271C44.8248 10.6494 44.9127 10.7895 44.9752 10.9412C45.0388 11.1037 45.0702 11.2769 45.0675 11.4513C45.071 11.6808 45.0221 11.9081 44.9245 12.1161C44.8321 12.3104 44.6974 12.4818 44.5302 12.6177C44.3542 12.7588 44.1537 12.8665 43.9386 12.9353C43.7016 13.0123 43.4536 13.0504 43.2043 13.0481C42.7713 13.0564 42.3444 12.9449 41.971 12.7261C41.6147 12.5133 41.3199 12.2121 41.1152 11.852L41.7446 11.3755C41.8238 11.4937 41.9122 11.6056 42.009 11.71C42.1058 11.8152 42.2141 11.9091 42.3319 11.9902C42.4521 12.0725 42.5834 12.1373 42.722 12.1827C42.8751 12.2317 43.0352 12.2557 43.1961 12.2537C43.4434 12.2654 43.6874 12.1932 43.8882 12.0489C43.9746 11.983 44.0437 11.8973 44.0898 11.7991C44.1359 11.7008 44.1575 11.593 44.1528 11.4846C44.1547 11.388 44.1347 11.2923 44.0941 11.2045C44.0539 11.1223 43.9966 11.0496 43.9262 10.9911C43.8469 10.9255 43.7611 10.868 43.6702 10.8196C43.5723 10.7667 43.4619 10.7124 43.3389 10.6566L42.7267 10.3721C42.5541 10.292 42.386 10.2027 42.2232 10.1044C42.0722 10.0143 41.9339 9.90458 41.812 9.77815C41.6959 9.65758 41.6021 9.51745 41.5351 9.36426C41.4656 9.19888 41.4314 9.02091 41.4346 8.84164C41.4314 8.62736 41.4789 8.41534 41.5731 8.22272C41.6641 8.04046 41.7928 7.87949 41.9508 7.75043C42.1152 7.61681 42.303 7.51472 42.5047 7.44934C42.7228 7.37848 42.9508 7.34323 43.1801 7.34494Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M50.0013 11.5106L51.0674 8.85145L51.9988 8.85169L50.1771 13.0493H49.8752L48.5749 10.3062L47.2908 13.0488H46.9886L45.1602 8.85052L46.1 8.85063L47.1818 11.5352L48.4326 8.75912H48.7346L50.0013 11.5106Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M54.0459 8.76021C54.2798 8.75747 54.5124 8.79427 54.734 8.86904C54.9328 8.93674 55.1145 9.04661 55.2666 9.19108C55.4205 9.34206 55.5393 9.52479 55.6148 9.72645C55.703 9.96598 55.7457 10.2198 55.7407 10.4749L55.7402 12.9585L54.9178 12.9584V12.4985C54.7675 12.6748 54.5778 12.8137 54.3641 12.9039C54.1224 13.0048 53.8624 13.0547 53.6004 13.0502C53.4001 13.0526 53.2006 13.0243 53.0088 12.9664C52.8431 12.9164 52.6891 12.8339 52.5558 12.7238C52.4325 12.6213 52.3336 12.4928 52.2663 12.3475C52.1975 12.1951 52.1632 12.0295 52.1658 11.8624C52.1595 11.697 52.1936 11.5326 52.2653 11.3833C52.3369 11.234 52.4439 11.1043 52.577 11.0054C52.9011 10.7813 53.2908 10.6711 53.6847 10.692L54.8509 10.6921L54.8511 10.4245C54.8653 10.3057 54.8523 10.1854 54.813 10.0724C54.7738 9.95938 54.7093 9.85674 54.6245 9.77219C54.5397 9.68764 54.4367 9.62337 54.3233 9.58423C54.21 9.54509 54.0892 9.5321 53.97 9.54624C53.7497 9.54115 53.5322 9.59606 53.3409 9.70504C53.144 9.82637 52.9682 9.9789 52.8205 10.1566L52.317 9.6381C52.5096 9.35434 52.7729 9.12527 53.081 8.9733C53.3822 8.83011 53.7122 8.75723 54.0459 8.76021ZM53.785 12.3729C53.9252 12.3738 54.0645 12.3497 54.1962 12.3018C54.3211 12.2568 54.4363 12.1887 54.536 12.1011C54.6338 12.0151 54.7125 11.9098 54.7671 11.7917C54.8234 11.6699 54.852 11.5371 54.8509 11.4029V11.3276L53.7937 11.3275C53.6049 11.316 53.4168 11.3596 53.2524 11.4528C53.1906 11.4936 53.1407 11.5498 53.1075 11.6159C53.0744 11.6819 53.0593 11.7555 53.0636 11.8292C53.0596 11.9092 53.0769 11.9889 53.1137 12.0601C53.1505 12.1313 53.2056 12.1916 53.2733 12.2348C53.4263 12.3305 53.6044 12.3786 53.785 12.3729H53.785Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M58.8868 8.76073C59.1652 8.75824 59.441 8.81385 59.6966 8.92397C59.9395 9.02866 60.158 9.18243 60.3384 9.37555C60.5202 9.57271 60.6626 9.80269 60.7578 10.0531C60.8607 10.3242 60.9118 10.612 60.9085 10.9018C60.9114 11.193 60.8602 11.4822 60.7575 11.7548C60.6626 12.0075 60.5185 12.2391 60.3337 12.4363C60.1483 12.6331 59.9239 12.7893 59.6747 12.8951C59.4255 13.0008 59.157 13.0538 58.8861 13.0507C58.6171 13.0538 58.3502 13.0025 58.1016 12.9001C57.8717 12.8054 57.6686 12.6561 57.51 12.4651L57.5098 14.4637L56.6289 14.4636L56.6298 8.85236L57.4435 8.85247L57.4433 9.44624C57.5964 9.22732 57.805 9.05276 58.0478 8.94036C58.3103 8.81827 58.5971 8.75686 58.8868 8.76073ZM58.7441 9.56349C58.5909 9.56385 58.439 9.5907 58.2951 9.64283C58.147 9.69579 58.0114 9.77834 57.8965 9.88541C57.7735 10.002 57.6763 10.1429 57.6112 10.2992C57.5339 10.4903 57.4967 10.6952 57.502 10.9013C57.4968 11.1069 57.5324 11.3116 57.6068 11.5035C57.6701 11.6609 57.7659 11.8034 57.8879 11.9217C58.0017 12.031 58.1374 12.1151 58.2861 12.1684C58.4328 12.2211 58.5876 12.248 58.7436 12.2479C58.912 12.2489 59.0789 12.2162 59.2344 12.1519C59.3859 12.0895 59.523 11.997 59.6374 11.88C59.7546 11.7588 59.846 11.6152 59.906 11.4578C60.0343 11.1038 60.0344 10.7163 59.9063 10.3623C59.8466 10.2056 59.7568 10.0622 59.6418 9.93994C59.5289 9.82224 59.3934 9.7284 59.2433 9.664C59.0857 9.59624 58.9157 9.56201 58.7441 9.5635V9.56349Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M20.6715 12.9526L19.7822 12.9525L19.7832 7.43326L20.6725 7.43338L20.6715 12.9526ZM21.8049 10.0175L24.3636 12.9532L23.2644 12.953L20.6971 10.0174L23.022 7.43373L24.1128 7.43397L21.8049 10.0175Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M26.3188 13.4222C26.1891 13.7586 25.9735 14.0554 25.6934 14.2833C25.4326 14.4671 25.1188 14.561 24.7996 14.5508C24.6846 14.5505 24.5698 14.5435 24.4556 14.5299C24.3424 14.5166 24.2303 14.4957 24.12 14.4672V13.7229C24.2208 13.7339 24.3103 13.7423 24.3887 13.748C24.4669 13.7535 24.5423 13.7562 24.615 13.7563C24.7914 13.7596 24.9658 13.7195 25.1228 13.6394C25.3022 13.5242 25.4393 13.354 25.5133 13.1544L25.681 12.7698L24.0371 8.84738L24.9851 8.84762L26.1595 11.8416L27.3851 8.84797L28.3247 8.84809L26.3188 13.4222Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M29.6675 9.3499C29.8292 9.16227 30.0316 9.01363 30.2593 8.91516C30.5065 8.80734 30.774 8.75321 31.0438 8.75637C31.3146 8.75335 31.5831 8.80644 31.8323 8.91228C32.0814 9.01811 32.3058 9.17439 32.4911 9.37119C32.6759 9.56851 32.8198 9.80017 32.9148 10.053C33.0173 10.3256 33.0684 10.6148 33.0655 10.9059C33.0686 11.1957 33.0174 11.4836 32.9145 11.7547C32.8193 12.005 32.6768 12.2349 32.4949 12.432C32.3156 12.6244 32.0985 12.7781 31.8571 12.8834C31.6031 12.9937 31.3286 13.0493 31.0516 13.0463C30.761 13.0499 30.4731 12.9899 30.2083 12.8706C29.9635 12.7615 29.7531 12.588 29.5998 12.3688V12.9541L28.7861 12.954L28.7871 6.68207L29.6679 6.68218L29.6675 9.3499ZM30.9011 9.55912C30.7451 9.55905 30.5903 9.58589 30.4436 9.63846C30.2948 9.69187 30.1591 9.77593 30.0451 9.88514C29.9231 10.0034 29.8274 10.1459 29.764 10.3033C29.6895 10.4951 29.6539 10.6997 29.659 10.9053C29.654 11.1127 29.691 11.3189 29.768 11.5116C29.8323 11.6696 29.9295 11.8121 30.0533 11.9298C30.1675 12.0367 30.3033 12.118 30.4516 12.1682C30.5961 12.2178 30.7478 12.2433 30.9006 12.2436C31.0722 12.245 31.2422 12.2109 31.3998 12.1433C31.55 12.0789 31.6856 11.985 31.7986 11.8673C31.9136 11.7452 32.0034 11.6017 32.063 11.4451C32.1913 11.0912 32.1914 10.7037 32.0633 10.3497C32.0032 10.1923 31.9118 10.0486 31.7946 9.92727C31.6803 9.81036 31.5432 9.71787 31.3919 9.65544C31.2364 9.59095 31.0695 9.5582 30.9011 9.55913V9.55912Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M35.7842 8.7573C36.0456 8.75491 36.3049 8.80324 36.5477 8.8996C36.7735 8.98759 36.9786 9.121 37.1504 9.29151C37.3221 9.46202 37.4568 9.66597 37.546 9.89064C37.6424 10.1284 37.6908 10.3827 37.6885 10.6391C37.6888 10.7454 37.6817 10.8516 37.6674 10.9569C37.6576 11.0359 37.6423 11.1141 37.6214 11.191L34.5502 11.1905C34.5956 11.5027 34.7574 11.7865 35.0034 11.9851C35.2579 12.1794 35.5721 12.2799 35.8925 12.2695C36.1174 12.2728 36.3404 12.2286 36.547 12.14C36.7467 12.0512 36.9309 11.9313 37.0927 11.7847L37.5204 12.3869C37.3053 12.5912 37.0552 12.7554 36.782 12.8718C36.4952 12.9913 36.1868 13.0511 35.8758 13.0473C35.5716 13.0499 35.2696 12.9946 34.9863 12.8842C34.7249 12.784 34.4867 12.6319 34.2862 12.437C34.0858 12.2422 33.9272 12.0086 33.8203 11.7507C33.7073 11.4835 33.6502 11.1961 33.6524 10.9062C33.6502 10.6166 33.7059 10.3294 33.8163 10.0615C33.9205 9.8067 34.0745 9.57507 34.2693 9.38011C34.4636 9.18702 34.6929 9.0324 34.9449 8.92443C35.2101 8.81139 35.4959 8.75448 35.7842 8.7573ZM35.7586 9.50155C35.4766 9.49442 35.2017 9.59116 34.9867 9.77327C34.7688 9.96353 34.6211 10.2211 34.5673 10.5049L36.8076 10.5052C36.8108 10.3653 36.7836 10.2263 36.7279 10.0978C36.6721 9.9693 36.5891 9.85436 36.4845 9.76086C36.2825 9.58881 36.0243 9.49655 35.7586 9.50155Z", fill: "currentColor" }), /* @__PURE__ */ re.createElement("path", { d: "M40.5502 8.8081C40.6134 8.8075 40.6765 8.81173 40.739 8.82074C40.7921 8.82905 40.841 8.8388 40.8858 8.84999L40.8855 9.62771L40.6171 9.62759C40.4591 9.62692 40.302 9.65093 40.1515 9.69874C40.0094 9.74254 39.878 9.81508 39.7654 9.91183C39.6537 10.01 39.5649 10.1313 39.5052 10.2672C39.4379 10.4244 39.4049 10.594 39.4084 10.7648L39.4082 12.9558L38.5273 12.9556L38.5281 8.84965L39.3418 8.84977L39.3415 9.40176C39.48 9.21261 39.6631 9.06037 39.8746 8.95848C40.0855 8.85803 40.3165 8.80661 40.5502 8.8081Z", fill: "currentColor" }))), Lc = (t) => /* @__PURE__ */ re.createElement("svg", { width: 25, height: 24, viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.607 4.73317L21.0374 13.9333C22.3729 16.1998 20.6576 19 17.9289 19H7.07003C4.34316 19 2.62604 16.2015 3.96337 13.935L9.39373 4.73488C10.7545 2.42199 14.2427 2.42199 15.607 4.73317Z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12.5 11V8", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M12.499 14.82C12.399 14.82 12.319 14.902 12.321 15C12.321 15.1 12.403 15.18 12.501 15.18C12.599 15.18 12.679 15.098 12.679 15C12.679 14.902 12.599 14.82 12.499 14.82", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), u1 = (t) => /* @__PURE__ */ re.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("path", { id: "Vector", d: "M12 5.33333V0H6.66667L8.86 2.19333L2.19333 8.86L0 6.66667V12H5.33333L3.14 9.80667L9.80667 3.14L12 5.33333Z", fill: "currentColor" }));
function Ga() {
  return cn(_a);
}
const m1 = Q.div`
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  padding: 1rem;
  width: 375px;
  background: ${({
  theme: t
}) => t.primary};
  color: ${({
  theme: t
}) => t.text};
  font-family: ${({
  theme: t
}) => t.fontFamily || '"Work Sans", "Inter var", sans-serif'};
  position: relative;
  overflow: hidden;
  box-shadow: ${({
  theme: t
}) => t.boxShadow};
`, p1 = Q.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 500;
  align-items: center;
`, e0 = Q.div`
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  padding: 0.75rem;
  background: ${({
  theme: t
}) => t.secondary};
  margin-top: 1rem;
  box-shadow: ${({
  theme: t
}) => t.boxShadow};
`, b1 = Q.button`
  outline: none;
  border: none;
  background: ${({
  theme: t
}) => t.interactive};
  border-radius: ${({
  theme: t
}) => t.buttonRadius};
  color: ${({
  theme: t
}) => t.subText};
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.25rem;

  :hover {
    opacity: 0.8;
  }
`, t0 = Q.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, Fs = Q.button`
  outline: none;
  border: none;
  border-radius: ${({
  theme: t
}) => t.buttonRadius};
  width: 2.25rem;
  height: 2.25rem;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({
  theme: t
}) => t.subText};

  :hover {
    background: ${({
  theme: t
}) => t.secondary};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`, g1 = Q(Fs)`
  width: 40px;
  height: 40px;
  background: ${({
  theme: t
}) => t.secondary};

  :hover {
    opacity: 0.8;
  }
`, r0 = Q.div`
  gap: 4px;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${({
  theme: t
}) => t.subText};
`, n0 = Q.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
`, a0 = Q.input`
  width: 100%;
  font-size: 1.5rem;
  background: ${({
  theme: t
}) => t.secondary};
  outline: none;
  border: none;
  color: ${({
  theme: t
}) => t.text};

  :disabled {
    cursor: not-allowed;
  }
`, i0 = Q.button`
  outline: none;
  border: none;
  background: ${({
  theme: t
}) => t.interactive};
  border-radius: ${({
  theme: t
}) => t.buttonRadius};
  padding: 0.375rem 0 0.375rem 0.5rem;
  font-size: 1.125rem;
  color: ${({
  theme: t
}) => t.subText};
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`, x1 = Q.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
`, y1 = Q.div`
  display: flex;
  align-items: center;
`, qn = Q.button`
  outline: none;
  border: none;
  border-radius: ${({
  theme: t
}) => t.buttonRadius};
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem;
  background: ${({
  theme: t
}) => t.accent};
  color: ${({
  theme: t
}) => t.dialog};
  cursor: pointer;
  box-shadow: ${({
  theme: t
}) => t.boxShadow};

  :disabled {
    color: ${({
  theme: t
}) => t.subText};
    background: ${({
  theme: t
}) => t.interactive};
    cursor: not-allowed;

    :active {
      transform: none;
    }
  }

  :active {
    transform: scale(0.99);
  }
`, rs = Q.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`, v1 = Q.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({
  theme: t
}) => t.subText};
  margin-left: 4px;
`, jc = Q.div`
  background: ${({
  theme: t
}) => t.secondary};
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  border: 1px solid ${({
  theme: t
}) => t.stroke};
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 12px;
`, Jr = Q.div`
  display: flex;
  justify-content: space-between;
`, Qr = Q.div`
  display: flex;
  align-items: center;
  color: ${({
  theme: t
}) => t.subText};
`, jr = Q.div`
  font-weight: 500;
`, w1 = Q.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  text-align: left;
`, A1 = Q.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: right;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`, C1 = Q.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.stroke};
`, Wc = Q.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, Hc = Q.div`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  :hover {
    opacity: 0.8;
  }

  > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
var zc = { exports: {} };
const E1 = {}, I1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: E1
}, Symbol.toStringTag, { value: "Module" })), $c = /* @__PURE__ */ ht(I1);
(function(t) {
  (function(e, r) {
    function n(y, s) {
      if (!y)
        throw new Error(s || "Assertion failed");
    }
    function a(y, s) {
      y.super_ = s;
      var f = function() {
      };
      f.prototype = s.prototype, y.prototype = new f(), y.prototype.constructor = y;
    }
    function i(y, s, f) {
      if (i.isBN(y))
        return y;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, y !== null && ((s === "le" || s === "be") && (f = s, s = 10), this._init(y || 0, s || 10, f || "be"));
    }
    typeof e == "object" ? e.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var c;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? c = window.Buffer : c = $c.Buffer;
    } catch {
    }
    i.isBN = function(s) {
      return s instanceof i ? !0 : s !== null && typeof s == "object" && s.constructor.wordSize === i.wordSize && Array.isArray(s.words);
    }, i.max = function(s, f) {
      return s.cmp(f) > 0 ? s : f;
    }, i.min = function(s, f) {
      return s.cmp(f) < 0 ? s : f;
    }, i.prototype._init = function(s, f, u) {
      if (typeof s == "number")
        return this._initNumber(s, f, u);
      if (typeof s == "object")
        return this._initArray(s, f, u);
      f === "hex" && (f = 16), n(f === (f | 0) && f >= 2 && f <= 36), s = s.toString().replace(/\s+/g, "");
      var g = 0;
      s[0] === "-" && (g++, this.negative = 1), g < s.length && (f === 16 ? this._parseHex(s, g, u) : (this._parseBase(s, f, g), u === "le" && this._initArray(this.toArray(), f, u)));
    }, i.prototype._initNumber = function(s, f, u) {
      s < 0 && (this.negative = 1, s = -s), s < 67108864 ? (this.words = [s & 67108863], this.length = 1) : s < 4503599627370496 ? (this.words = [
        s & 67108863,
        s / 67108864 & 67108863
      ], this.length = 2) : (n(s < 9007199254740992), this.words = [
        s & 67108863,
        s / 67108864 & 67108863,
        1
      ], this.length = 3), u === "le" && this._initArray(this.toArray(), f, u);
    }, i.prototype._initArray = function(s, f, u) {
      if (n(typeof s.length == "number"), s.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(s.length / 3), this.words = new Array(this.length);
      for (var g = 0; g < this.length; g++)
        this.words[g] = 0;
      var x, w, E = 0;
      if (u === "be")
        for (g = s.length - 1, x = 0; g >= 0; g -= 3)
          w = s[g] | s[g - 1] << 8 | s[g - 2] << 16, this.words[x] |= w << E & 67108863, this.words[x + 1] = w >>> 26 - E & 67108863, E += 24, E >= 26 && (E -= 26, x++);
      else if (u === "le")
        for (g = 0, x = 0; g < s.length; g += 3)
          w = s[g] | s[g + 1] << 8 | s[g + 2] << 16, this.words[x] |= w << E & 67108863, this.words[x + 1] = w >>> 26 - E & 67108863, E += 24, E >= 26 && (E -= 26, x++);
      return this._strip();
    };
    function d(y, s) {
      var f = y.charCodeAt(s);
      if (f >= 48 && f <= 57)
        return f - 48;
      if (f >= 65 && f <= 70)
        return f - 55;
      if (f >= 97 && f <= 102)
        return f - 87;
      n(!1, "Invalid character in " + y);
    }
    function m(y, s, f) {
      var u = d(y, f);
      return f - 1 >= s && (u |= d(y, f - 1) << 4), u;
    }
    i.prototype._parseHex = function(s, f, u) {
      this.length = Math.ceil((s.length - f) / 6), this.words = new Array(this.length);
      for (var g = 0; g < this.length; g++)
        this.words[g] = 0;
      var x = 0, w = 0, E;
      if (u === "be")
        for (g = s.length - 1; g >= f; g -= 2)
          E = m(s, f, g) << x, this.words[w] |= E & 67108863, x >= 18 ? (x -= 18, w += 1, this.words[w] |= E >>> 26) : x += 8;
      else {
        var l = s.length - f;
        for (g = l % 2 === 0 ? f + 1 : f; g < s.length; g += 2)
          E = m(s, f, g) << x, this.words[w] |= E & 67108863, x >= 18 ? (x -= 18, w += 1, this.words[w] |= E >>> 26) : x += 8;
      }
      this._strip();
    };
    function b(y, s, f, u) {
      for (var g = 0, x = 0, w = Math.min(y.length, f), E = s; E < w; E++) {
        var l = y.charCodeAt(E) - 48;
        g *= u, l >= 49 ? x = l - 49 + 10 : l >= 17 ? x = l - 17 + 10 : x = l, n(l >= 0 && x < u, "Invalid character"), g += x;
      }
      return g;
    }
    i.prototype._parseBase = function(s, f, u) {
      this.words = [0], this.length = 1;
      for (var g = 0, x = 1; x <= 67108863; x *= f)
        g++;
      g--, x = x / f | 0;
      for (var w = s.length - u, E = w % g, l = Math.min(w, w - E) + u, o = 0, h = u; h < l; h += g)
        o = b(s, h, h + g, f), this.imuln(x), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);
      if (E !== 0) {
        var I = 1;
        for (o = b(s, h, s.length, f), h = 0; h < E; h++)
          I *= f;
        this.imuln(I), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);
      }
      this._strip();
    }, i.prototype.copy = function(s) {
      s.words = new Array(this.length);
      for (var f = 0; f < this.length; f++)
        s.words[f] = this.words[f];
      s.length = this.length, s.negative = this.negative, s.red = this.red;
    };
    function v(y, s) {
      y.words = s.words, y.length = s.length, y.negative = s.negative, y.red = s.red;
    }
    if (i.prototype._move = function(s) {
      v(s, this);
    }, i.prototype.clone = function() {
      var s = new i(null);
      return this.copy(s), s;
    }, i.prototype._expand = function(s) {
      for (; this.length < s; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = A;
      } catch {
        i.prototype.inspect = A;
      }
    else
      i.prototype.inspect = A;
    function A() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], D = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], B = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    i.prototype.toString = function(s, f) {
      s = s || 10, f = f | 0 || 1;
      var u;
      if (s === 16 || s === "hex") {
        u = "";
        for (var g = 0, x = 0, w = 0; w < this.length; w++) {
          var E = this.words[w], l = ((E << g | x) & 16777215).toString(16);
          x = E >>> 24 - g & 16777215, g += 2, g >= 26 && (g -= 26, w--), x !== 0 || w !== this.length - 1 ? u = S[6 - l.length] + l + u : u = l + u;
        }
        for (x !== 0 && (u = x.toString(16) + u); u.length % f !== 0; )
          u = "0" + u;
        return this.negative !== 0 && (u = "-" + u), u;
      }
      if (s === (s | 0) && s >= 2 && s <= 36) {
        var o = D[s], h = B[s];
        u = "";
        var I = this.clone();
        for (I.negative = 0; !I.isZero(); ) {
          var p = I.modrn(h).toString(s);
          I = I.idivn(h), I.isZero() ? u = p + u : u = S[o - p.length] + p + u;
        }
        for (this.isZero() && (u = "0" + u); u.length % f !== 0; )
          u = "0" + u;
        return this.negative !== 0 && (u = "-" + u), u;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var s = this.words[0];
      return this.length === 2 ? s += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? s += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -s : s;
    }, i.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, c && (i.prototype.toBuffer = function(s, f) {
      return this.toArrayLike(c, s, f);
    }), i.prototype.toArray = function(s, f) {
      return this.toArrayLike(Array, s, f);
    };
    var F = function(s, f) {
      return s.allocUnsafe ? s.allocUnsafe(f) : new s(f);
    };
    i.prototype.toArrayLike = function(s, f, u) {
      this._strip();
      var g = this.byteLength(), x = u || Math.max(1, g);
      n(g <= x, "byte array longer than desired length"), n(x > 0, "Requested array length <= 0");
      var w = F(s, x), E = f === "le" ? "LE" : "BE";
      return this["_toArrayLike" + E](w, g), w;
    }, i.prototype._toArrayLikeLE = function(s, f) {
      for (var u = 0, g = 0, x = 0, w = 0; x < this.length; x++) {
        var E = this.words[x] << w | g;
        s[u++] = E & 255, u < s.length && (s[u++] = E >> 8 & 255), u < s.length && (s[u++] = E >> 16 & 255), w === 6 ? (u < s.length && (s[u++] = E >> 24 & 255), g = 0, w = 0) : (g = E >>> 24, w += 2);
      }
      if (u < s.length)
        for (s[u++] = g; u < s.length; )
          s[u++] = 0;
    }, i.prototype._toArrayLikeBE = function(s, f) {
      for (var u = s.length - 1, g = 0, x = 0, w = 0; x < this.length; x++) {
        var E = this.words[x] << w | g;
        s[u--] = E & 255, u >= 0 && (s[u--] = E >> 8 & 255), u >= 0 && (s[u--] = E >> 16 & 255), w === 6 ? (u >= 0 && (s[u--] = E >> 24 & 255), g = 0, w = 0) : (g = E >>> 24, w += 2);
      }
      if (u >= 0)
        for (s[u--] = g; u >= 0; )
          s[u--] = 0;
    }, Math.clz32 ? i.prototype._countBits = function(s) {
      return 32 - Math.clz32(s);
    } : i.prototype._countBits = function(s) {
      var f = s, u = 0;
      return f >= 4096 && (u += 13, f >>>= 13), f >= 64 && (u += 7, f >>>= 7), f >= 8 && (u += 4, f >>>= 4), f >= 2 && (u += 2, f >>>= 2), u + f;
    }, i.prototype._zeroBits = function(s) {
      if (s === 0)
        return 26;
      var f = s, u = 0;
      return (f & 8191) === 0 && (u += 13, f >>>= 13), (f & 127) === 0 && (u += 7, f >>>= 7), (f & 15) === 0 && (u += 4, f >>>= 4), (f & 3) === 0 && (u += 2, f >>>= 2), (f & 1) === 0 && u++, u;
    }, i.prototype.bitLength = function() {
      var s = this.words[this.length - 1], f = this._countBits(s);
      return (this.length - 1) * 26 + f;
    };
    function k(y) {
      for (var s = new Array(y.bitLength()), f = 0; f < s.length; f++) {
        var u = f / 26 | 0, g = f % 26;
        s[f] = y.words[u] >>> g & 1;
      }
      return s;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var s = 0, f = 0; f < this.length; f++) {
        var u = this._zeroBits(this.words[f]);
        if (s += u, u !== 26)
          break;
      }
      return s;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(s) {
      return this.negative !== 0 ? this.abs().inotn(s).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(s) {
      return this.testn(s - 1) ? this.notn(s).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(s) {
      for (; this.length < s.length; )
        this.words[this.length++] = 0;
      for (var f = 0; f < s.length; f++)
        this.words[f] = this.words[f] | s.words[f];
      return this._strip();
    }, i.prototype.ior = function(s) {
      return n((this.negative | s.negative) === 0), this.iuor(s);
    }, i.prototype.or = function(s) {
      return this.length > s.length ? this.clone().ior(s) : s.clone().ior(this);
    }, i.prototype.uor = function(s) {
      return this.length > s.length ? this.clone().iuor(s) : s.clone().iuor(this);
    }, i.prototype.iuand = function(s) {
      var f;
      this.length > s.length ? f = s : f = this;
      for (var u = 0; u < f.length; u++)
        this.words[u] = this.words[u] & s.words[u];
      return this.length = f.length, this._strip();
    }, i.prototype.iand = function(s) {
      return n((this.negative | s.negative) === 0), this.iuand(s);
    }, i.prototype.and = function(s) {
      return this.length > s.length ? this.clone().iand(s) : s.clone().iand(this);
    }, i.prototype.uand = function(s) {
      return this.length > s.length ? this.clone().iuand(s) : s.clone().iuand(this);
    }, i.prototype.iuxor = function(s) {
      var f, u;
      this.length > s.length ? (f = this, u = s) : (f = s, u = this);
      for (var g = 0; g < u.length; g++)
        this.words[g] = f.words[g] ^ u.words[g];
      if (this !== f)
        for (; g < f.length; g++)
          this.words[g] = f.words[g];
      return this.length = f.length, this._strip();
    }, i.prototype.ixor = function(s) {
      return n((this.negative | s.negative) === 0), this.iuxor(s);
    }, i.prototype.xor = function(s) {
      return this.length > s.length ? this.clone().ixor(s) : s.clone().ixor(this);
    }, i.prototype.uxor = function(s) {
      return this.length > s.length ? this.clone().iuxor(s) : s.clone().iuxor(this);
    }, i.prototype.inotn = function(s) {
      n(typeof s == "number" && s >= 0);
      var f = Math.ceil(s / 26) | 0, u = s % 26;
      this._expand(f), u > 0 && f--;
      for (var g = 0; g < f; g++)
        this.words[g] = ~this.words[g] & 67108863;
      return u > 0 && (this.words[g] = ~this.words[g] & 67108863 >> 26 - u), this._strip();
    }, i.prototype.notn = function(s) {
      return this.clone().inotn(s);
    }, i.prototype.setn = function(s, f) {
      n(typeof s == "number" && s >= 0);
      var u = s / 26 | 0, g = s % 26;
      return this._expand(u + 1), f ? this.words[u] = this.words[u] | 1 << g : this.words[u] = this.words[u] & ~(1 << g), this._strip();
    }, i.prototype.iadd = function(s) {
      var f;
      if (this.negative !== 0 && s.negative === 0)
        return this.negative = 0, f = this.isub(s), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && s.negative !== 0)
        return s.negative = 0, f = this.isub(s), s.negative = 1, f._normSign();
      var u, g;
      this.length > s.length ? (u = this, g = s) : (u = s, g = this);
      for (var x = 0, w = 0; w < g.length; w++)
        f = (u.words[w] | 0) + (g.words[w] | 0) + x, this.words[w] = f & 67108863, x = f >>> 26;
      for (; x !== 0 && w < u.length; w++)
        f = (u.words[w] | 0) + x, this.words[w] = f & 67108863, x = f >>> 26;
      if (this.length = u.length, x !== 0)
        this.words[this.length] = x, this.length++;
      else if (u !== this)
        for (; w < u.length; w++)
          this.words[w] = u.words[w];
      return this;
    }, i.prototype.add = function(s) {
      var f;
      return s.negative !== 0 && this.negative === 0 ? (s.negative = 0, f = this.sub(s), s.negative ^= 1, f) : s.negative === 0 && this.negative !== 0 ? (this.negative = 0, f = s.sub(this), this.negative = 1, f) : this.length > s.length ? this.clone().iadd(s) : s.clone().iadd(this);
    }, i.prototype.isub = function(s) {
      if (s.negative !== 0) {
        s.negative = 0;
        var f = this.iadd(s);
        return s.negative = 1, f._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(s), this.negative = 1, this._normSign();
      var u = this.cmp(s);
      if (u === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var g, x;
      u > 0 ? (g = this, x = s) : (g = s, x = this);
      for (var w = 0, E = 0; E < x.length; E++)
        f = (g.words[E] | 0) - (x.words[E] | 0) + w, w = f >> 26, this.words[E] = f & 67108863;
      for (; w !== 0 && E < g.length; E++)
        f = (g.words[E] | 0) + w, w = f >> 26, this.words[E] = f & 67108863;
      if (w === 0 && E < g.length && g !== this)
        for (; E < g.length; E++)
          this.words[E] = g.words[E];
      return this.length = Math.max(this.length, E), g !== this && (this.negative = 1), this._strip();
    }, i.prototype.sub = function(s) {
      return this.clone().isub(s);
    };
    function T(y, s, f) {
      f.negative = s.negative ^ y.negative;
      var u = y.length + s.length | 0;
      f.length = u, u = u - 1 | 0;
      var g = y.words[0] | 0, x = s.words[0] | 0, w = g * x, E = w & 67108863, l = w / 67108864 | 0;
      f.words[0] = E;
      for (var o = 1; o < u; o++) {
        for (var h = l >>> 26, I = l & 67108863, p = Math.min(o, s.length - 1), C = Math.max(0, o - y.length + 1); C <= p; C++) {
          var N = o - C | 0;
          g = y.words[N] | 0, x = s.words[C] | 0, w = g * x + I, h += w / 67108864 | 0, I = w & 67108863;
        }
        f.words[o] = I | 0, l = h | 0;
      }
      return l !== 0 ? f.words[o] = l | 0 : f.length--, f._strip();
    }
    var U = function(s, f, u) {
      var g = s.words, x = f.words, w = u.words, E = 0, l, o, h, I = g[0] | 0, p = I & 8191, C = I >>> 13, N = g[1] | 0, _ = N & 8191, j = N >>> 13, X = g[2] | 0, z = X & 8191, O = X >>> 13, we = g[3] | 0, G = we & 8191, V = we >>> 13, $e = g[4] | 0, fe = $e & 8191, be = $e >>> 13, st = g[5] | 0, le = st & 8191, ye = st >>> 13, it = g[6] | 0, ge = it & 8191, te = it >>> 13, Ve = g[7] | 0, ve = Ve & 8191, xe = Ve >>> 13, nt = g[8] | 0, Ce = nt & 8191, Ee = nt >>> 13, wt = g[9] | 0, me = wt & 8191, Ie = wt >>> 13, _t = x[0] | 0, Me = _t & 8191, _e = _t >>> 13, Yt = x[1] | 0, Re = Yt & 8191, ke = Yt >>> 13, jt = x[2] | 0, Ae = jt & 8191, Se = jt >>> 13, Rt = x[3] | 0, De = Rt & 8191, Te = Rt >>> 13, Wt = x[4] | 0, Ue = Wt & 8191, Be = Wt >>> 13, Ht = x[5] | 0, Pe = Ht & 8191, Oe = Ht >>> 13, zt = x[6] | 0, Ne = zt & 8191, Le = zt >>> 13, Xt = x[7] | 0, je = Xt & 8191, M = Xt >>> 13, ee = x[8] | 0, K = ee & 8191, se = ee >>> 13, He = x[9] | 0, pe = He & 8191, de = He >>> 13;
      u.negative = s.negative ^ f.negative, u.length = 19, l = Math.imul(p, Me), o = Math.imul(p, _e), o = o + Math.imul(C, Me) | 0, h = Math.imul(C, _e);
      var Fe = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (Fe >>> 26) | 0, Fe &= 67108863, l = Math.imul(_, Me), o = Math.imul(_, _e), o = o + Math.imul(j, Me) | 0, h = Math.imul(j, _e), l = l + Math.imul(p, Re) | 0, o = o + Math.imul(p, ke) | 0, o = o + Math.imul(C, Re) | 0, h = h + Math.imul(C, ke) | 0;
      var et = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, l = Math.imul(z, Me), o = Math.imul(z, _e), o = o + Math.imul(O, Me) | 0, h = Math.imul(O, _e), l = l + Math.imul(_, Re) | 0, o = o + Math.imul(_, ke) | 0, o = o + Math.imul(j, Re) | 0, h = h + Math.imul(j, ke) | 0, l = l + Math.imul(p, Ae) | 0, o = o + Math.imul(p, Se) | 0, o = o + Math.imul(C, Ae) | 0, h = h + Math.imul(C, Se) | 0;
      var Ze = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, l = Math.imul(G, Me), o = Math.imul(G, _e), o = o + Math.imul(V, Me) | 0, h = Math.imul(V, _e), l = l + Math.imul(z, Re) | 0, o = o + Math.imul(z, ke) | 0, o = o + Math.imul(O, Re) | 0, h = h + Math.imul(O, ke) | 0, l = l + Math.imul(_, Ae) | 0, o = o + Math.imul(_, Se) | 0, o = o + Math.imul(j, Ae) | 0, h = h + Math.imul(j, Se) | 0, l = l + Math.imul(p, De) | 0, o = o + Math.imul(p, Te) | 0, o = o + Math.imul(C, De) | 0, h = h + Math.imul(C, Te) | 0;
      var Ye = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, l = Math.imul(fe, Me), o = Math.imul(fe, _e), o = o + Math.imul(be, Me) | 0, h = Math.imul(be, _e), l = l + Math.imul(G, Re) | 0, o = o + Math.imul(G, ke) | 0, o = o + Math.imul(V, Re) | 0, h = h + Math.imul(V, ke) | 0, l = l + Math.imul(z, Ae) | 0, o = o + Math.imul(z, Se) | 0, o = o + Math.imul(O, Ae) | 0, h = h + Math.imul(O, Se) | 0, l = l + Math.imul(_, De) | 0, o = o + Math.imul(_, Te) | 0, o = o + Math.imul(j, De) | 0, h = h + Math.imul(j, Te) | 0, l = l + Math.imul(p, Ue) | 0, o = o + Math.imul(p, Be) | 0, o = o + Math.imul(C, Ue) | 0, h = h + Math.imul(C, Be) | 0;
      var ot = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (ot >>> 26) | 0, ot &= 67108863, l = Math.imul(le, Me), o = Math.imul(le, _e), o = o + Math.imul(ye, Me) | 0, h = Math.imul(ye, _e), l = l + Math.imul(fe, Re) | 0, o = o + Math.imul(fe, ke) | 0, o = o + Math.imul(be, Re) | 0, h = h + Math.imul(be, ke) | 0, l = l + Math.imul(G, Ae) | 0, o = o + Math.imul(G, Se) | 0, o = o + Math.imul(V, Ae) | 0, h = h + Math.imul(V, Se) | 0, l = l + Math.imul(z, De) | 0, o = o + Math.imul(z, Te) | 0, o = o + Math.imul(O, De) | 0, h = h + Math.imul(O, Te) | 0, l = l + Math.imul(_, Ue) | 0, o = o + Math.imul(_, Be) | 0, o = o + Math.imul(j, Ue) | 0, h = h + Math.imul(j, Be) | 0, l = l + Math.imul(p, Pe) | 0, o = o + Math.imul(p, Oe) | 0, o = o + Math.imul(C, Pe) | 0, h = h + Math.imul(C, Oe) | 0;
      var Tt = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, l = Math.imul(ge, Me), o = Math.imul(ge, _e), o = o + Math.imul(te, Me) | 0, h = Math.imul(te, _e), l = l + Math.imul(le, Re) | 0, o = o + Math.imul(le, ke) | 0, o = o + Math.imul(ye, Re) | 0, h = h + Math.imul(ye, ke) | 0, l = l + Math.imul(fe, Ae) | 0, o = o + Math.imul(fe, Se) | 0, o = o + Math.imul(be, Ae) | 0, h = h + Math.imul(be, Se) | 0, l = l + Math.imul(G, De) | 0, o = o + Math.imul(G, Te) | 0, o = o + Math.imul(V, De) | 0, h = h + Math.imul(V, Te) | 0, l = l + Math.imul(z, Ue) | 0, o = o + Math.imul(z, Be) | 0, o = o + Math.imul(O, Ue) | 0, h = h + Math.imul(O, Be) | 0, l = l + Math.imul(_, Pe) | 0, o = o + Math.imul(_, Oe) | 0, o = o + Math.imul(j, Pe) | 0, h = h + Math.imul(j, Oe) | 0, l = l + Math.imul(p, Ne) | 0, o = o + Math.imul(p, Le) | 0, o = o + Math.imul(C, Ne) | 0, h = h + Math.imul(C, Le) | 0;
      var vr = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (vr >>> 26) | 0, vr &= 67108863, l = Math.imul(ve, Me), o = Math.imul(ve, _e), o = o + Math.imul(xe, Me) | 0, h = Math.imul(xe, _e), l = l + Math.imul(ge, Re) | 0, o = o + Math.imul(ge, ke) | 0, o = o + Math.imul(te, Re) | 0, h = h + Math.imul(te, ke) | 0, l = l + Math.imul(le, Ae) | 0, o = o + Math.imul(le, Se) | 0, o = o + Math.imul(ye, Ae) | 0, h = h + Math.imul(ye, Se) | 0, l = l + Math.imul(fe, De) | 0, o = o + Math.imul(fe, Te) | 0, o = o + Math.imul(be, De) | 0, h = h + Math.imul(be, Te) | 0, l = l + Math.imul(G, Ue) | 0, o = o + Math.imul(G, Be) | 0, o = o + Math.imul(V, Ue) | 0, h = h + Math.imul(V, Be) | 0, l = l + Math.imul(z, Pe) | 0, o = o + Math.imul(z, Oe) | 0, o = o + Math.imul(O, Pe) | 0, h = h + Math.imul(O, Oe) | 0, l = l + Math.imul(_, Ne) | 0, o = o + Math.imul(_, Le) | 0, o = o + Math.imul(j, Ne) | 0, h = h + Math.imul(j, Le) | 0, l = l + Math.imul(p, je) | 0, o = o + Math.imul(p, M) | 0, o = o + Math.imul(C, je) | 0, h = h + Math.imul(C, M) | 0;
      var At = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, l = Math.imul(Ce, Me), o = Math.imul(Ce, _e), o = o + Math.imul(Ee, Me) | 0, h = Math.imul(Ee, _e), l = l + Math.imul(ve, Re) | 0, o = o + Math.imul(ve, ke) | 0, o = o + Math.imul(xe, Re) | 0, h = h + Math.imul(xe, ke) | 0, l = l + Math.imul(ge, Ae) | 0, o = o + Math.imul(ge, Se) | 0, o = o + Math.imul(te, Ae) | 0, h = h + Math.imul(te, Se) | 0, l = l + Math.imul(le, De) | 0, o = o + Math.imul(le, Te) | 0, o = o + Math.imul(ye, De) | 0, h = h + Math.imul(ye, Te) | 0, l = l + Math.imul(fe, Ue) | 0, o = o + Math.imul(fe, Be) | 0, o = o + Math.imul(be, Ue) | 0, h = h + Math.imul(be, Be) | 0, l = l + Math.imul(G, Pe) | 0, o = o + Math.imul(G, Oe) | 0, o = o + Math.imul(V, Pe) | 0, h = h + Math.imul(V, Oe) | 0, l = l + Math.imul(z, Ne) | 0, o = o + Math.imul(z, Le) | 0, o = o + Math.imul(O, Ne) | 0, h = h + Math.imul(O, Le) | 0, l = l + Math.imul(_, je) | 0, o = o + Math.imul(_, M) | 0, o = o + Math.imul(j, je) | 0, h = h + Math.imul(j, M) | 0, l = l + Math.imul(p, K) | 0, o = o + Math.imul(p, se) | 0, o = o + Math.imul(C, K) | 0, h = h + Math.imul(C, se) | 0;
      var ln = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (ln >>> 26) | 0, ln &= 67108863, l = Math.imul(me, Me), o = Math.imul(me, _e), o = o + Math.imul(Ie, Me) | 0, h = Math.imul(Ie, _e), l = l + Math.imul(Ce, Re) | 0, o = o + Math.imul(Ce, ke) | 0, o = o + Math.imul(Ee, Re) | 0, h = h + Math.imul(Ee, ke) | 0, l = l + Math.imul(ve, Ae) | 0, o = o + Math.imul(ve, Se) | 0, o = o + Math.imul(xe, Ae) | 0, h = h + Math.imul(xe, Se) | 0, l = l + Math.imul(ge, De) | 0, o = o + Math.imul(ge, Te) | 0, o = o + Math.imul(te, De) | 0, h = h + Math.imul(te, Te) | 0, l = l + Math.imul(le, Ue) | 0, o = o + Math.imul(le, Be) | 0, o = o + Math.imul(ye, Ue) | 0, h = h + Math.imul(ye, Be) | 0, l = l + Math.imul(fe, Pe) | 0, o = o + Math.imul(fe, Oe) | 0, o = o + Math.imul(be, Pe) | 0, h = h + Math.imul(be, Oe) | 0, l = l + Math.imul(G, Ne) | 0, o = o + Math.imul(G, Le) | 0, o = o + Math.imul(V, Ne) | 0, h = h + Math.imul(V, Le) | 0, l = l + Math.imul(z, je) | 0, o = o + Math.imul(z, M) | 0, o = o + Math.imul(O, je) | 0, h = h + Math.imul(O, M) | 0, l = l + Math.imul(_, K) | 0, o = o + Math.imul(_, se) | 0, o = o + Math.imul(j, K) | 0, h = h + Math.imul(j, se) | 0, l = l + Math.imul(p, pe) | 0, o = o + Math.imul(p, de) | 0, o = o + Math.imul(C, pe) | 0, h = h + Math.imul(C, de) | 0;
      var hn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (hn >>> 26) | 0, hn &= 67108863, l = Math.imul(me, Re), o = Math.imul(me, ke), o = o + Math.imul(Ie, Re) | 0, h = Math.imul(Ie, ke), l = l + Math.imul(Ce, Ae) | 0, o = o + Math.imul(Ce, Se) | 0, o = o + Math.imul(Ee, Ae) | 0, h = h + Math.imul(Ee, Se) | 0, l = l + Math.imul(ve, De) | 0, o = o + Math.imul(ve, Te) | 0, o = o + Math.imul(xe, De) | 0, h = h + Math.imul(xe, Te) | 0, l = l + Math.imul(ge, Ue) | 0, o = o + Math.imul(ge, Be) | 0, o = o + Math.imul(te, Ue) | 0, h = h + Math.imul(te, Be) | 0, l = l + Math.imul(le, Pe) | 0, o = o + Math.imul(le, Oe) | 0, o = o + Math.imul(ye, Pe) | 0, h = h + Math.imul(ye, Oe) | 0, l = l + Math.imul(fe, Ne) | 0, o = o + Math.imul(fe, Le) | 0, o = o + Math.imul(be, Ne) | 0, h = h + Math.imul(be, Le) | 0, l = l + Math.imul(G, je) | 0, o = o + Math.imul(G, M) | 0, o = o + Math.imul(V, je) | 0, h = h + Math.imul(V, M) | 0, l = l + Math.imul(z, K) | 0, o = o + Math.imul(z, se) | 0, o = o + Math.imul(O, K) | 0, h = h + Math.imul(O, se) | 0, l = l + Math.imul(_, pe) | 0, o = o + Math.imul(_, de) | 0, o = o + Math.imul(j, pe) | 0, h = h + Math.imul(j, de) | 0;
      var un = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (un >>> 26) | 0, un &= 67108863, l = Math.imul(me, Ae), o = Math.imul(me, Se), o = o + Math.imul(Ie, Ae) | 0, h = Math.imul(Ie, Se), l = l + Math.imul(Ce, De) | 0, o = o + Math.imul(Ce, Te) | 0, o = o + Math.imul(Ee, De) | 0, h = h + Math.imul(Ee, Te) | 0, l = l + Math.imul(ve, Ue) | 0, o = o + Math.imul(ve, Be) | 0, o = o + Math.imul(xe, Ue) | 0, h = h + Math.imul(xe, Be) | 0, l = l + Math.imul(ge, Pe) | 0, o = o + Math.imul(ge, Oe) | 0, o = o + Math.imul(te, Pe) | 0, h = h + Math.imul(te, Oe) | 0, l = l + Math.imul(le, Ne) | 0, o = o + Math.imul(le, Le) | 0, o = o + Math.imul(ye, Ne) | 0, h = h + Math.imul(ye, Le) | 0, l = l + Math.imul(fe, je) | 0, o = o + Math.imul(fe, M) | 0, o = o + Math.imul(be, je) | 0, h = h + Math.imul(be, M) | 0, l = l + Math.imul(G, K) | 0, o = o + Math.imul(G, se) | 0, o = o + Math.imul(V, K) | 0, h = h + Math.imul(V, se) | 0, l = l + Math.imul(z, pe) | 0, o = o + Math.imul(z, de) | 0, o = o + Math.imul(O, pe) | 0, h = h + Math.imul(O, de) | 0;
      var mn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (mn >>> 26) | 0, mn &= 67108863, l = Math.imul(me, De), o = Math.imul(me, Te), o = o + Math.imul(Ie, De) | 0, h = Math.imul(Ie, Te), l = l + Math.imul(Ce, Ue) | 0, o = o + Math.imul(Ce, Be) | 0, o = o + Math.imul(Ee, Ue) | 0, h = h + Math.imul(Ee, Be) | 0, l = l + Math.imul(ve, Pe) | 0, o = o + Math.imul(ve, Oe) | 0, o = o + Math.imul(xe, Pe) | 0, h = h + Math.imul(xe, Oe) | 0, l = l + Math.imul(ge, Ne) | 0, o = o + Math.imul(ge, Le) | 0, o = o + Math.imul(te, Ne) | 0, h = h + Math.imul(te, Le) | 0, l = l + Math.imul(le, je) | 0, o = o + Math.imul(le, M) | 0, o = o + Math.imul(ye, je) | 0, h = h + Math.imul(ye, M) | 0, l = l + Math.imul(fe, K) | 0, o = o + Math.imul(fe, se) | 0, o = o + Math.imul(be, K) | 0, h = h + Math.imul(be, se) | 0, l = l + Math.imul(G, pe) | 0, o = o + Math.imul(G, de) | 0, o = o + Math.imul(V, pe) | 0, h = h + Math.imul(V, de) | 0;
      var pn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (pn >>> 26) | 0, pn &= 67108863, l = Math.imul(me, Ue), o = Math.imul(me, Be), o = o + Math.imul(Ie, Ue) | 0, h = Math.imul(Ie, Be), l = l + Math.imul(Ce, Pe) | 0, o = o + Math.imul(Ce, Oe) | 0, o = o + Math.imul(Ee, Pe) | 0, h = h + Math.imul(Ee, Oe) | 0, l = l + Math.imul(ve, Ne) | 0, o = o + Math.imul(ve, Le) | 0, o = o + Math.imul(xe, Ne) | 0, h = h + Math.imul(xe, Le) | 0, l = l + Math.imul(ge, je) | 0, o = o + Math.imul(ge, M) | 0, o = o + Math.imul(te, je) | 0, h = h + Math.imul(te, M) | 0, l = l + Math.imul(le, K) | 0, o = o + Math.imul(le, se) | 0, o = o + Math.imul(ye, K) | 0, h = h + Math.imul(ye, se) | 0, l = l + Math.imul(fe, pe) | 0, o = o + Math.imul(fe, de) | 0, o = o + Math.imul(be, pe) | 0, h = h + Math.imul(be, de) | 0;
      var bn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (bn >>> 26) | 0, bn &= 67108863, l = Math.imul(me, Pe), o = Math.imul(me, Oe), o = o + Math.imul(Ie, Pe) | 0, h = Math.imul(Ie, Oe), l = l + Math.imul(Ce, Ne) | 0, o = o + Math.imul(Ce, Le) | 0, o = o + Math.imul(Ee, Ne) | 0, h = h + Math.imul(Ee, Le) | 0, l = l + Math.imul(ve, je) | 0, o = o + Math.imul(ve, M) | 0, o = o + Math.imul(xe, je) | 0, h = h + Math.imul(xe, M) | 0, l = l + Math.imul(ge, K) | 0, o = o + Math.imul(ge, se) | 0, o = o + Math.imul(te, K) | 0, h = h + Math.imul(te, se) | 0, l = l + Math.imul(le, pe) | 0, o = o + Math.imul(le, de) | 0, o = o + Math.imul(ye, pe) | 0, h = h + Math.imul(ye, de) | 0;
      var gn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (gn >>> 26) | 0, gn &= 67108863, l = Math.imul(me, Ne), o = Math.imul(me, Le), o = o + Math.imul(Ie, Ne) | 0, h = Math.imul(Ie, Le), l = l + Math.imul(Ce, je) | 0, o = o + Math.imul(Ce, M) | 0, o = o + Math.imul(Ee, je) | 0, h = h + Math.imul(Ee, M) | 0, l = l + Math.imul(ve, K) | 0, o = o + Math.imul(ve, se) | 0, o = o + Math.imul(xe, K) | 0, h = h + Math.imul(xe, se) | 0, l = l + Math.imul(ge, pe) | 0, o = o + Math.imul(ge, de) | 0, o = o + Math.imul(te, pe) | 0, h = h + Math.imul(te, de) | 0;
      var xn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (xn >>> 26) | 0, xn &= 67108863, l = Math.imul(me, je), o = Math.imul(me, M), o = o + Math.imul(Ie, je) | 0, h = Math.imul(Ie, M), l = l + Math.imul(Ce, K) | 0, o = o + Math.imul(Ce, se) | 0, o = o + Math.imul(Ee, K) | 0, h = h + Math.imul(Ee, se) | 0, l = l + Math.imul(ve, pe) | 0, o = o + Math.imul(ve, de) | 0, o = o + Math.imul(xe, pe) | 0, h = h + Math.imul(xe, de) | 0;
      var yn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (yn >>> 26) | 0, yn &= 67108863, l = Math.imul(me, K), o = Math.imul(me, se), o = o + Math.imul(Ie, K) | 0, h = Math.imul(Ie, se), l = l + Math.imul(Ce, pe) | 0, o = o + Math.imul(Ce, de) | 0, o = o + Math.imul(Ee, pe) | 0, h = h + Math.imul(Ee, de) | 0;
      var vn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (vn >>> 26) | 0, vn &= 67108863, l = Math.imul(me, pe), o = Math.imul(me, de), o = o + Math.imul(Ie, pe) | 0, h = Math.imul(Ie, de);
      var wn = (E + l | 0) + ((o & 8191) << 13) | 0;
      return E = (h + (o >>> 13) | 0) + (wn >>> 26) | 0, wn &= 67108863, w[0] = Fe, w[1] = et, w[2] = Ze, w[3] = Ye, w[4] = ot, w[5] = Tt, w[6] = vr, w[7] = At, w[8] = ln, w[9] = hn, w[10] = un, w[11] = mn, w[12] = pn, w[13] = bn, w[14] = gn, w[15] = xn, w[16] = yn, w[17] = vn, w[18] = wn, E !== 0 && (w[19] = E, u.length++), u;
    };
    Math.imul || (U = T);
    function H(y, s, f) {
      f.negative = s.negative ^ y.negative, f.length = y.length + s.length;
      for (var u = 0, g = 0, x = 0; x < f.length - 1; x++) {
        var w = g;
        g = 0;
        for (var E = u & 67108863, l = Math.min(x, s.length - 1), o = Math.max(0, x - y.length + 1); o <= l; o++) {
          var h = x - o, I = y.words[h] | 0, p = s.words[o] | 0, C = I * p, N = C & 67108863;
          w = w + (C / 67108864 | 0) | 0, N = N + E | 0, E = N & 67108863, w = w + (N >>> 26) | 0, g += w >>> 26, w &= 67108863;
        }
        f.words[x] = E, u = w, w = g;
      }
      return u !== 0 ? f.words[x] = u : f.length--, f._strip();
    }
    function P(y, s, f) {
      return H(y, s, f);
    }
    i.prototype.mulTo = function(s, f) {
      var u, g = this.length + s.length;
      return this.length === 10 && s.length === 10 ? u = U(this, s, f) : g < 63 ? u = T(this, s, f) : g < 1024 ? u = H(this, s, f) : u = P(this, s, f), u;
    }, i.prototype.mul = function(s) {
      var f = new i(null);
      return f.words = new Array(this.length + s.length), this.mulTo(s, f);
    }, i.prototype.mulf = function(s) {
      var f = new i(null);
      return f.words = new Array(this.length + s.length), P(this, s, f);
    }, i.prototype.imul = function(s) {
      return this.clone().mulTo(s, this);
    }, i.prototype.imuln = function(s) {
      var f = s < 0;
      f && (s = -s), n(typeof s == "number"), n(s < 67108864);
      for (var u = 0, g = 0; g < this.length; g++) {
        var x = (this.words[g] | 0) * s, w = (x & 67108863) + (u & 67108863);
        u >>= 26, u += x / 67108864 | 0, u += w >>> 26, this.words[g] = w & 67108863;
      }
      return u !== 0 && (this.words[g] = u, this.length++), f ? this.ineg() : this;
    }, i.prototype.muln = function(s) {
      return this.clone().imuln(s);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(s) {
      var f = k(s);
      if (f.length === 0)
        return new i(1);
      for (var u = this, g = 0; g < f.length && f[g] === 0; g++, u = u.sqr())
        ;
      if (++g < f.length)
        for (var x = u.sqr(); g < f.length; g++, x = x.sqr())
          f[g] !== 0 && (u = u.mul(x));
      return u;
    }, i.prototype.iushln = function(s) {
      n(typeof s == "number" && s >= 0);
      var f = s % 26, u = (s - f) / 26, g = 67108863 >>> 26 - f << 26 - f, x;
      if (f !== 0) {
        var w = 0;
        for (x = 0; x < this.length; x++) {
          var E = this.words[x] & g, l = (this.words[x] | 0) - E << f;
          this.words[x] = l | w, w = E >>> 26 - f;
        }
        w && (this.words[x] = w, this.length++);
      }
      if (u !== 0) {
        for (x = this.length - 1; x >= 0; x--)
          this.words[x + u] = this.words[x];
        for (x = 0; x < u; x++)
          this.words[x] = 0;
        this.length += u;
      }
      return this._strip();
    }, i.prototype.ishln = function(s) {
      return n(this.negative === 0), this.iushln(s);
    }, i.prototype.iushrn = function(s, f, u) {
      n(typeof s == "number" && s >= 0);
      var g;
      f ? g = (f - f % 26) / 26 : g = 0;
      var x = s % 26, w = Math.min((s - x) / 26, this.length), E = 67108863 ^ 67108863 >>> x << x, l = u;
      if (g -= w, g = Math.max(0, g), l) {
        for (var o = 0; o < w; o++)
          l.words[o] = this.words[o];
        l.length = w;
      }
      if (w !== 0)
        if (this.length > w)
          for (this.length -= w, o = 0; o < this.length; o++)
            this.words[o] = this.words[o + w];
        else
          this.words[0] = 0, this.length = 1;
      var h = 0;
      for (o = this.length - 1; o >= 0 && (h !== 0 || o >= g); o--) {
        var I = this.words[o] | 0;
        this.words[o] = h << 26 - x | I >>> x, h = I & E;
      }
      return l && h !== 0 && (l.words[l.length++] = h), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, i.prototype.ishrn = function(s, f, u) {
      return n(this.negative === 0), this.iushrn(s, f, u);
    }, i.prototype.shln = function(s) {
      return this.clone().ishln(s);
    }, i.prototype.ushln = function(s) {
      return this.clone().iushln(s);
    }, i.prototype.shrn = function(s) {
      return this.clone().ishrn(s);
    }, i.prototype.ushrn = function(s) {
      return this.clone().iushrn(s);
    }, i.prototype.testn = function(s) {
      n(typeof s == "number" && s >= 0);
      var f = s % 26, u = (s - f) / 26, g = 1 << f;
      if (this.length <= u)
        return !1;
      var x = this.words[u];
      return !!(x & g);
    }, i.prototype.imaskn = function(s) {
      n(typeof s == "number" && s >= 0);
      var f = s % 26, u = (s - f) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= u)
        return this;
      if (f !== 0 && u++, this.length = Math.min(u, this.length), f !== 0) {
        var g = 67108863 ^ 67108863 >>> f << f;
        this.words[this.length - 1] &= g;
      }
      return this._strip();
    }, i.prototype.maskn = function(s) {
      return this.clone().imaskn(s);
    }, i.prototype.iaddn = function(s) {
      return n(typeof s == "number"), n(s < 67108864), s < 0 ? this.isubn(-s) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= s ? (this.words[0] = s - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(s), this.negative = 1, this) : this._iaddn(s);
    }, i.prototype._iaddn = function(s) {
      this.words[0] += s;
      for (var f = 0; f < this.length && this.words[f] >= 67108864; f++)
        this.words[f] -= 67108864, f === this.length - 1 ? this.words[f + 1] = 1 : this.words[f + 1]++;
      return this.length = Math.max(this.length, f + 1), this;
    }, i.prototype.isubn = function(s) {
      if (n(typeof s == "number"), n(s < 67108864), s < 0)
        return this.iaddn(-s);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(s), this.negative = 1, this;
      if (this.words[0] -= s, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var f = 0; f < this.length && this.words[f] < 0; f++)
          this.words[f] += 67108864, this.words[f + 1] -= 1;
      return this._strip();
    }, i.prototype.addn = function(s) {
      return this.clone().iaddn(s);
    }, i.prototype.subn = function(s) {
      return this.clone().isubn(s);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(s, f, u) {
      var g = s.length + u, x;
      this._expand(g);
      var w, E = 0;
      for (x = 0; x < s.length; x++) {
        w = (this.words[x + u] | 0) + E;
        var l = (s.words[x] | 0) * f;
        w -= l & 67108863, E = (w >> 26) - (l / 67108864 | 0), this.words[x + u] = w & 67108863;
      }
      for (; x < this.length - u; x++)
        w = (this.words[x + u] | 0) + E, E = w >> 26, this.words[x + u] = w & 67108863;
      if (E === 0)
        return this._strip();
      for (n(E === -1), E = 0, x = 0; x < this.length; x++)
        w = -(this.words[x] | 0) + E, E = w >> 26, this.words[x] = w & 67108863;
      return this.negative = 1, this._strip();
    }, i.prototype._wordDiv = function(s, f) {
      var u = this.length - s.length, g = this.clone(), x = s, w = x.words[x.length - 1] | 0, E = this._countBits(w);
      u = 26 - E, u !== 0 && (x = x.ushln(u), g.iushln(u), w = x.words[x.length - 1] | 0);
      var l = g.length - x.length, o;
      if (f !== "mod") {
        o = new i(null), o.length = l + 1, o.words = new Array(o.length);
        for (var h = 0; h < o.length; h++)
          o.words[h] = 0;
      }
      var I = g.clone()._ishlnsubmul(x, 1, l);
      I.negative === 0 && (g = I, o && (o.words[l] = 1));
      for (var p = l - 1; p >= 0; p--) {
        var C = (g.words[x.length + p] | 0) * 67108864 + (g.words[x.length + p - 1] | 0);
        for (C = Math.min(C / w | 0, 67108863), g._ishlnsubmul(x, C, p); g.negative !== 0; )
          C--, g.negative = 0, g._ishlnsubmul(x, 1, p), g.isZero() || (g.negative ^= 1);
        o && (o.words[p] = C);
      }
      return o && o._strip(), g._strip(), f !== "div" && u !== 0 && g.iushrn(u), {
        div: o || null,
        mod: g
      };
    }, i.prototype.divmod = function(s, f, u) {
      if (n(!s.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var g, x, w;
      return this.negative !== 0 && s.negative === 0 ? (w = this.neg().divmod(s, f), f !== "mod" && (g = w.div.neg()), f !== "div" && (x = w.mod.neg(), u && x.negative !== 0 && x.iadd(s)), {
        div: g,
        mod: x
      }) : this.negative === 0 && s.negative !== 0 ? (w = this.divmod(s.neg(), f), f !== "mod" && (g = w.div.neg()), {
        div: g,
        mod: w.mod
      }) : (this.negative & s.negative) !== 0 ? (w = this.neg().divmod(s.neg(), f), f !== "div" && (x = w.mod.neg(), u && x.negative !== 0 && x.isub(s)), {
        div: w.div,
        mod: x
      }) : s.length > this.length || this.cmp(s) < 0 ? {
        div: new i(0),
        mod: this
      } : s.length === 1 ? f === "div" ? {
        div: this.divn(s.words[0]),
        mod: null
      } : f === "mod" ? {
        div: null,
        mod: new i(this.modrn(s.words[0]))
      } : {
        div: this.divn(s.words[0]),
        mod: new i(this.modrn(s.words[0]))
      } : this._wordDiv(s, f);
    }, i.prototype.div = function(s) {
      return this.divmod(s, "div", !1).div;
    }, i.prototype.mod = function(s) {
      return this.divmod(s, "mod", !1).mod;
    }, i.prototype.umod = function(s) {
      return this.divmod(s, "mod", !0).mod;
    }, i.prototype.divRound = function(s) {
      var f = this.divmod(s);
      if (f.mod.isZero())
        return f.div;
      var u = f.div.negative !== 0 ? f.mod.isub(s) : f.mod, g = s.ushrn(1), x = s.andln(1), w = u.cmp(g);
      return w < 0 || x === 1 && w === 0 ? f.div : f.div.negative !== 0 ? f.div.isubn(1) : f.div.iaddn(1);
    }, i.prototype.modrn = function(s) {
      var f = s < 0;
      f && (s = -s), n(s <= 67108863);
      for (var u = (1 << 26) % s, g = 0, x = this.length - 1; x >= 0; x--)
        g = (u * g + (this.words[x] | 0)) % s;
      return f ? -g : g;
    }, i.prototype.modn = function(s) {
      return this.modrn(s);
    }, i.prototype.idivn = function(s) {
      var f = s < 0;
      f && (s = -s), n(s <= 67108863);
      for (var u = 0, g = this.length - 1; g >= 0; g--) {
        var x = (this.words[g] | 0) + u * 67108864;
        this.words[g] = x / s | 0, u = x % s;
      }
      return this._strip(), f ? this.ineg() : this;
    }, i.prototype.divn = function(s) {
      return this.clone().idivn(s);
    }, i.prototype.egcd = function(s) {
      n(s.negative === 0), n(!s.isZero());
      var f = this, u = s.clone();
      f.negative !== 0 ? f = f.umod(s) : f = f.clone();
      for (var g = new i(1), x = new i(0), w = new i(0), E = new i(1), l = 0; f.isEven() && u.isEven(); )
        f.iushrn(1), u.iushrn(1), ++l;
      for (var o = u.clone(), h = f.clone(); !f.isZero(); ) {
        for (var I = 0, p = 1; (f.words[0] & p) === 0 && I < 26; ++I, p <<= 1)
          ;
        if (I > 0)
          for (f.iushrn(I); I-- > 0; )
            (g.isOdd() || x.isOdd()) && (g.iadd(o), x.isub(h)), g.iushrn(1), x.iushrn(1);
        for (var C = 0, N = 1; (u.words[0] & N) === 0 && C < 26; ++C, N <<= 1)
          ;
        if (C > 0)
          for (u.iushrn(C); C-- > 0; )
            (w.isOdd() || E.isOdd()) && (w.iadd(o), E.isub(h)), w.iushrn(1), E.iushrn(1);
        f.cmp(u) >= 0 ? (f.isub(u), g.isub(w), x.isub(E)) : (u.isub(f), w.isub(g), E.isub(x));
      }
      return {
        a: w,
        b: E,
        gcd: u.iushln(l)
      };
    }, i.prototype._invmp = function(s) {
      n(s.negative === 0), n(!s.isZero());
      var f = this, u = s.clone();
      f.negative !== 0 ? f = f.umod(s) : f = f.clone();
      for (var g = new i(1), x = new i(0), w = u.clone(); f.cmpn(1) > 0 && u.cmpn(1) > 0; ) {
        for (var E = 0, l = 1; (f.words[0] & l) === 0 && E < 26; ++E, l <<= 1)
          ;
        if (E > 0)
          for (f.iushrn(E); E-- > 0; )
            g.isOdd() && g.iadd(w), g.iushrn(1);
        for (var o = 0, h = 1; (u.words[0] & h) === 0 && o < 26; ++o, h <<= 1)
          ;
        if (o > 0)
          for (u.iushrn(o); o-- > 0; )
            x.isOdd() && x.iadd(w), x.iushrn(1);
        f.cmp(u) >= 0 ? (f.isub(u), g.isub(x)) : (u.isub(f), x.isub(g));
      }
      var I;
      return f.cmpn(1) === 0 ? I = g : I = x, I.cmpn(0) < 0 && I.iadd(s), I;
    }, i.prototype.gcd = function(s) {
      if (this.isZero())
        return s.abs();
      if (s.isZero())
        return this.abs();
      var f = this.clone(), u = s.clone();
      f.negative = 0, u.negative = 0;
      for (var g = 0; f.isEven() && u.isEven(); g++)
        f.iushrn(1), u.iushrn(1);
      do {
        for (; f.isEven(); )
          f.iushrn(1);
        for (; u.isEven(); )
          u.iushrn(1);
        var x = f.cmp(u);
        if (x < 0) {
          var w = f;
          f = u, u = w;
        } else if (x === 0 || u.cmpn(1) === 0)
          break;
        f.isub(u);
      } while (!0);
      return u.iushln(g);
    }, i.prototype.invm = function(s) {
      return this.egcd(s).a.umod(s);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(s) {
      return this.words[0] & s;
    }, i.prototype.bincn = function(s) {
      n(typeof s == "number");
      var f = s % 26, u = (s - f) / 26, g = 1 << f;
      if (this.length <= u)
        return this._expand(u + 1), this.words[u] |= g, this;
      for (var x = g, w = u; x !== 0 && w < this.length; w++) {
        var E = this.words[w] | 0;
        E += x, x = E >>> 26, E &= 67108863, this.words[w] = E;
      }
      return x !== 0 && (this.words[w] = x, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(s) {
      var f = s < 0;
      if (this.negative !== 0 && !f)
        return -1;
      if (this.negative === 0 && f)
        return 1;
      this._strip();
      var u;
      if (this.length > 1)
        u = 1;
      else {
        f && (s = -s), n(s <= 67108863, "Number is too big");
        var g = this.words[0] | 0;
        u = g === s ? 0 : g < s ? -1 : 1;
      }
      return this.negative !== 0 ? -u | 0 : u;
    }, i.prototype.cmp = function(s) {
      if (this.negative !== 0 && s.negative === 0)
        return -1;
      if (this.negative === 0 && s.negative !== 0)
        return 1;
      var f = this.ucmp(s);
      return this.negative !== 0 ? -f | 0 : f;
    }, i.prototype.ucmp = function(s) {
      if (this.length > s.length)
        return 1;
      if (this.length < s.length)
        return -1;
      for (var f = 0, u = this.length - 1; u >= 0; u--) {
        var g = this.words[u] | 0, x = s.words[u] | 0;
        if (g !== x) {
          g < x ? f = -1 : g > x && (f = 1);
          break;
        }
      }
      return f;
    }, i.prototype.gtn = function(s) {
      return this.cmpn(s) === 1;
    }, i.prototype.gt = function(s) {
      return this.cmp(s) === 1;
    }, i.prototype.gten = function(s) {
      return this.cmpn(s) >= 0;
    }, i.prototype.gte = function(s) {
      return this.cmp(s) >= 0;
    }, i.prototype.ltn = function(s) {
      return this.cmpn(s) === -1;
    }, i.prototype.lt = function(s) {
      return this.cmp(s) === -1;
    }, i.prototype.lten = function(s) {
      return this.cmpn(s) <= 0;
    }, i.prototype.lte = function(s) {
      return this.cmp(s) <= 0;
    }, i.prototype.eqn = function(s) {
      return this.cmpn(s) === 0;
    }, i.prototype.eq = function(s) {
      return this.cmp(s) === 0;
    }, i.red = function(s) {
      return new $(s);
    }, i.prototype.toRed = function(s) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), s.convertTo(this)._forceRed(s);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(s) {
      return this.red = s, this;
    }, i.prototype.forceRed = function(s) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(s);
    }, i.prototype.redAdd = function(s) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, s);
    }, i.prototype.redIAdd = function(s) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, s);
    }, i.prototype.redSub = function(s) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, s);
    }, i.prototype.redISub = function(s) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, s);
    }, i.prototype.redShl = function(s) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, s);
    }, i.prototype.redMul = function(s) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, s), this.red.mul(this, s);
    }, i.prototype.redIMul = function(s) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, s), this.red.imul(this, s);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(s) {
      return n(this.red && !s.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, s);
    };
    var R = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function W(y, s) {
      this.name = y, this.p = new i(s, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    W.prototype._tmp = function() {
      var s = new i(null);
      return s.words = new Array(Math.ceil(this.n / 13)), s;
    }, W.prototype.ireduce = function(s) {
      var f = s, u;
      do
        this.split(f, this.tmp), f = this.imulK(f), f = f.iadd(this.tmp), u = f.bitLength();
      while (u > this.n);
      var g = u < this.n ? -1 : f.ucmp(this.p);
      return g === 0 ? (f.words[0] = 0, f.length = 1) : g > 0 ? f.isub(this.p) : f.strip !== void 0 ? f.strip() : f._strip(), f;
    }, W.prototype.split = function(s, f) {
      s.iushrn(this.n, 0, f);
    }, W.prototype.imulK = function(s) {
      return s.imul(this.k);
    };
    function Z() {
      W.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    a(Z, W), Z.prototype.split = function(s, f) {
      for (var u = 4194303, g = Math.min(s.length, 9), x = 0; x < g; x++)
        f.words[x] = s.words[x];
      if (f.length = g, s.length <= 9) {
        s.words[0] = 0, s.length = 1;
        return;
      }
      var w = s.words[9];
      for (f.words[f.length++] = w & u, x = 10; x < s.length; x++) {
        var E = s.words[x] | 0;
        s.words[x - 10] = (E & u) << 4 | w >>> 22, w = E;
      }
      w >>>= 22, s.words[x - 10] = w, w === 0 && s.length > 10 ? s.length -= 10 : s.length -= 9;
    }, Z.prototype.imulK = function(s) {
      s.words[s.length] = 0, s.words[s.length + 1] = 0, s.length += 2;
      for (var f = 0, u = 0; u < s.length; u++) {
        var g = s.words[u] | 0;
        f += g * 977, s.words[u] = f & 67108863, f = g * 64 + (f / 67108864 | 0);
      }
      return s.words[s.length - 1] === 0 && (s.length--, s.words[s.length - 1] === 0 && s.length--), s;
    };
    function Y() {
      W.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    a(Y, W);
    function ne() {
      W.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    a(ne, W);
    function ce() {
      W.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    a(ce, W), ce.prototype.imulK = function(s) {
      for (var f = 0, u = 0; u < s.length; u++) {
        var g = (s.words[u] | 0) * 19 + f, x = g & 67108863;
        g >>>= 26, s.words[u] = x, f = g;
      }
      return f !== 0 && (s.words[s.length++] = f), s;
    }, i._prime = function(s) {
      if (R[s])
        return R[s];
      var f;
      if (s === "k256")
        f = new Z();
      else if (s === "p224")
        f = new Y();
      else if (s === "p192")
        f = new ne();
      else if (s === "p25519")
        f = new ce();
      else
        throw new Error("Unknown prime " + s);
      return R[s] = f, f;
    };
    function $(y) {
      if (typeof y == "string") {
        var s = i._prime(y);
        this.m = s.p, this.prime = s;
      } else
        n(y.gtn(1), "modulus must be greater than 1"), this.m = y, this.prime = null;
    }
    $.prototype._verify1 = function(s) {
      n(s.negative === 0, "red works only with positives"), n(s.red, "red works only with red numbers");
    }, $.prototype._verify2 = function(s, f) {
      n((s.negative | f.negative) === 0, "red works only with positives"), n(
        s.red && s.red === f.red,
        "red works only with red numbers"
      );
    }, $.prototype.imod = function(s) {
      return this.prime ? this.prime.ireduce(s)._forceRed(this) : (v(s, s.umod(this.m)._forceRed(this)), s);
    }, $.prototype.neg = function(s) {
      return s.isZero() ? s.clone() : this.m.sub(s)._forceRed(this);
    }, $.prototype.add = function(s, f) {
      this._verify2(s, f);
      var u = s.add(f);
      return u.cmp(this.m) >= 0 && u.isub(this.m), u._forceRed(this);
    }, $.prototype.iadd = function(s, f) {
      this._verify2(s, f);
      var u = s.iadd(f);
      return u.cmp(this.m) >= 0 && u.isub(this.m), u;
    }, $.prototype.sub = function(s, f) {
      this._verify2(s, f);
      var u = s.sub(f);
      return u.cmpn(0) < 0 && u.iadd(this.m), u._forceRed(this);
    }, $.prototype.isub = function(s, f) {
      this._verify2(s, f);
      var u = s.isub(f);
      return u.cmpn(0) < 0 && u.iadd(this.m), u;
    }, $.prototype.shl = function(s, f) {
      return this._verify1(s), this.imod(s.ushln(f));
    }, $.prototype.imul = function(s, f) {
      return this._verify2(s, f), this.imod(s.imul(f));
    }, $.prototype.mul = function(s, f) {
      return this._verify2(s, f), this.imod(s.mul(f));
    }, $.prototype.isqr = function(s) {
      return this.imul(s, s.clone());
    }, $.prototype.sqr = function(s) {
      return this.mul(s, s);
    }, $.prototype.sqrt = function(s) {
      if (s.isZero())
        return s.clone();
      var f = this.m.andln(3);
      if (n(f % 2 === 1), f === 3) {
        var u = this.m.add(new i(1)).iushrn(2);
        return this.pow(s, u);
      }
      for (var g = this.m.subn(1), x = 0; !g.isZero() && g.andln(1) === 0; )
        x++, g.iushrn(1);
      n(!g.isZero());
      var w = new i(1).toRed(this), E = w.redNeg(), l = this.m.subn(1).iushrn(1), o = this.m.bitLength();
      for (o = new i(2 * o * o).toRed(this); this.pow(o, l).cmp(E) !== 0; )
        o.redIAdd(E);
      for (var h = this.pow(o, g), I = this.pow(s, g.addn(1).iushrn(1)), p = this.pow(s, g), C = x; p.cmp(w) !== 0; ) {
        for (var N = p, _ = 0; N.cmp(w) !== 0; _++)
          N = N.redSqr();
        n(_ < C);
        var j = this.pow(h, new i(1).iushln(C - _ - 1));
        I = I.redMul(j), h = j.redSqr(), p = p.redMul(h), C = _;
      }
      return I;
    }, $.prototype.invm = function(s) {
      var f = s._invmp(this.m);
      return f.negative !== 0 ? (f.negative = 0, this.imod(f).redNeg()) : this.imod(f);
    }, $.prototype.pow = function(s, f) {
      if (f.isZero())
        return new i(1).toRed(this);
      if (f.cmpn(1) === 0)
        return s.clone();
      var u = 4, g = new Array(1 << u);
      g[0] = new i(1).toRed(this), g[1] = s;
      for (var x = 2; x < g.length; x++)
        g[x] = this.mul(g[x - 1], s);
      var w = g[0], E = 0, l = 0, o = f.bitLength() % 26;
      for (o === 0 && (o = 26), x = f.length - 1; x >= 0; x--) {
        for (var h = f.words[x], I = o - 1; I >= 0; I--) {
          var p = h >> I & 1;
          if (w !== g[0] && (w = this.sqr(w)), p === 0 && E === 0) {
            l = 0;
            continue;
          }
          E <<= 1, E |= p, l++, !(l !== u && (x !== 0 || I !== 0)) && (w = this.mul(w, g[E]), l = 0, E = 0);
        }
        o = 26;
      }
      return w;
    }, $.prototype.convertTo = function(s) {
      var f = s.umod(this.m);
      return f === s ? f.clone() : f;
    }, $.prototype.convertFrom = function(s) {
      var f = s.clone();
      return f.red = null, f;
    }, i.mont = function(s) {
      return new ie(s);
    };
    function ie(y) {
      $.call(this, y), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    a(ie, $), ie.prototype.convertTo = function(s) {
      return this.imod(s.ushln(this.shift));
    }, ie.prototype.convertFrom = function(s) {
      var f = this.imod(s.mul(this.rinv));
      return f.red = null, f;
    }, ie.prototype.imul = function(s, f) {
      if (s.isZero() || f.isZero())
        return s.words[0] = 0, s.length = 1, s;
      var u = s.imul(f), g = u.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = u.isub(g).iushrn(this.shift), w = x;
      return x.cmp(this.m) >= 0 ? w = x.isub(this.m) : x.cmpn(0) < 0 && (w = x.iadd(this.m)), w._forceRed(this);
    }, ie.prototype.mul = function(s, f) {
      if (s.isZero() || f.isZero())
        return new i(0)._forceRed(this);
      var u = s.mul(f), g = u.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = u.isub(g).iushrn(this.shift), w = x;
      return x.cmp(this.m) >= 0 ? w = x.isub(this.m) : x.cmpn(0) < 0 && (w = x.iadd(this.m)), w._forceRed(this);
    }, ie.prototype.invm = function(s) {
      var f = this.imod(s._invmp(this.m).mul(this.r2));
      return f._forceRed(this);
    };
  })(t, Gt);
})(zc);
const k1 = zc.exports, S1 = "logger/5.7.0";
let s0 = !1, o0 = !1;
const mi = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let c0 = mi.default, ns = null;
function D1() {
  try {
    const t = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
      try {
        if ("test".normalize(e) !== "test")
          throw new Error("bad normalize");
      } catch {
        t.push(e);
      }
    }), t.length)
      throw new Error("missing " + t.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
      throw new Error("broken implementation");
  } catch (t) {
    return t.message;
  }
  return null;
}
const f0 = D1();
var Ii;
(function(t) {
  t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF";
})(Ii || (Ii = {}));
var er;
(function(t) {
  t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED";
})(er || (er = {}));
const d0 = "0123456789abcdef";
class q {
  constructor(e) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: e,
      writable: !1
    });
  }
  _log(e, r) {
    const n = e.toLowerCase();
    mi[n] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(c0 > mi[n]) && console.log.apply(console, r);
  }
  debug(...e) {
    this._log(q.levels.DEBUG, e);
  }
  info(...e) {
    this._log(q.levels.INFO, e);
  }
  warn(...e) {
    this._log(q.levels.WARNING, e);
  }
  makeError(e, r, n) {
    if (o0)
      return this.makeError("censored error", r, {});
    r || (r = q.errors.UNKNOWN_ERROR), n || (n = {});
    const a = [];
    Object.keys(n).forEach((m) => {
      const b = n[m];
      try {
        if (b instanceof Uint8Array) {
          let v = "";
          for (let A = 0; A < b.length; A++)
            v += d0[b[A] >> 4], v += d0[b[A] & 15];
          a.push(m + "=Uint8Array(0x" + v + ")");
        } else
          a.push(m + "=" + JSON.stringify(b));
      } catch {
        a.push(m + "=" + JSON.stringify(n[m].toString()));
      }
    }), a.push(`code=${r}`), a.push(`version=${this.version}`);
    const i = e;
    let c = "";
    switch (r) {
      case er.NUMERIC_FAULT: {
        c = "NUMERIC_FAULT";
        const m = e;
        switch (m) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            c += "-" + m;
            break;
          case "negative-power":
          case "negative-width":
            c += "-unsupported";
            break;
          case "unbound-bitwise-result":
            c += "-unbound-result";
            break;
        }
        break;
      }
      case er.CALL_EXCEPTION:
      case er.INSUFFICIENT_FUNDS:
      case er.MISSING_NEW:
      case er.NONCE_EXPIRED:
      case er.REPLACEMENT_UNDERPRICED:
      case er.TRANSACTION_REPLACED:
      case er.UNPREDICTABLE_GAS_LIMIT:
        c = r;
        break;
    }
    c && (e += " [ See: https://links.ethers.org/v5-errors-" + c + " ]"), a.length && (e += " (" + a.join(", ") + ")");
    const d = new Error(e);
    return d.reason = i, d.code = r, Object.keys(n).forEach(function(m) {
      d[m] = n[m];
    }), d;
  }
  throwError(e, r, n) {
    throw this.makeError(e, r, n);
  }
  throwArgumentError(e, r, n) {
    return this.throwError(e, q.errors.INVALID_ARGUMENT, {
      argument: r,
      value: n
    });
  }
  assert(e, r, n, a) {
    e || this.throwError(r, n, a);
  }
  assertArgument(e, r, n, a) {
    e || this.throwArgumentError(r, n, a);
  }
  checkNormalize(e) {
    f0 && this.throwError("platform missing String.prototype.normalize", q.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: f0
    });
  }
  checkSafeUint53(e, r) {
    typeof e == "number" && (r == null && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, q.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "out-of-safe-range",
      value: e
    }), e % 1 && this.throwError(r, q.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "non-integer",
      value: e
    }));
  }
  checkArgumentCount(e, r, n) {
    n ? n = ": " + n : n = "", e < r && this.throwError("missing argument" + n, q.errors.MISSING_ARGUMENT, {
      count: e,
      expectedCount: r
    }), e > r && this.throwError("too many arguments" + n, q.errors.UNEXPECTED_ARGUMENT, {
      count: e,
      expectedCount: r
    });
  }
  checkNew(e, r) {
    (e === Object || e == null) && this.throwError("missing new", q.errors.MISSING_NEW, { name: r.name });
  }
  checkAbstract(e, r) {
    e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", q.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : (e === Object || e == null) && this.throwError("missing new", q.errors.MISSING_NEW, { name: r.name });
  }
  static globalLogger() {
    return ns || (ns = new q(S1)), ns;
  }
  static setCensorship(e, r) {
    if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", q.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), s0) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", q.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    o0 = !!e, s0 = !!r;
  }
  static setLogLevel(e) {
    const r = mi[e.toLowerCase()];
    if (r == null) {
      q.globalLogger().warn("invalid log level - " + e);
      return;
    }
    c0 = r;
  }
  static from(e) {
    return new q(e);
  }
}
q.errors = er;
q.levels = Ii;
const B1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get LogLevel() {
    return Ii;
  },
  get ErrorCode() {
    return er;
  },
  Logger: q
}, Symbol.toStringTag, { value: "Module" })), F1 = "bytes/5.7.0", lt = new q(F1);
function Vc(t) {
  return !!t.toHexString;
}
function Zn(t) {
  return t.slice || (t.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return Zn(new Uint8Array(Array.prototype.slice.apply(t, e)));
  }), t;
}
function Ka(t) {
  return dt(t) && !(t.length % 2) || Pn(t);
}
function l0(t) {
  return typeof t == "number" && t == t && t % 1 === 0;
}
function Pn(t) {
  if (t == null)
    return !1;
  if (t.constructor === Uint8Array)
    return !0;
  if (typeof t == "string" || !l0(t.length) || t.length < 0)
    return !1;
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    if (!l0(r) || r < 0 || r >= 256)
      return !1;
  }
  return !0;
}
function oe(t, e) {
  if (e || (e = {}), typeof t == "number") {
    lt.checkSafeUint53(t, "invalid arrayify value");
    const r = [];
    for (; t; )
      r.unshift(t & 255), t = parseInt(String(t / 256));
    return r.length === 0 && r.push(0), Zn(new Uint8Array(r));
  }
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), Vc(t) && (t = t.toHexString()), dt(t)) {
    let r = t.substring(2);
    r.length % 2 && (e.hexPad === "left" ? r = "0" + r : e.hexPad === "right" ? r += "0" : lt.throwArgumentError("hex data is odd-length", "value", t));
    const n = [];
    for (let a = 0; a < r.length; a += 2)
      n.push(parseInt(r.substring(a, a + 2), 16));
    return Zn(new Uint8Array(n));
  }
  return Pn(t) ? Zn(new Uint8Array(t)) : lt.throwArgumentError("invalid arrayify value", "value", t);
}
function pt(t) {
  const e = t.map((a) => oe(a)), r = e.reduce((a, i) => a + i.length, 0), n = new Uint8Array(r);
  return e.reduce((a, i) => (n.set(i, a), a + i.length), 0), Zn(n);
}
function Dr(t) {
  let e = oe(t);
  if (e.length === 0)
    return e;
  let r = 0;
  for (; r < e.length && e[r] === 0; )
    r++;
  return r && (e = e.slice(r)), e;
}
function ka(t, e) {
  t = oe(t), t.length > e && lt.throwArgumentError("value out of range", "value", arguments[0]);
  const r = new Uint8Array(e);
  return r.set(t, e - t.length), Zn(r);
}
function dt(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
}
const as = "0123456789abcdef";
function he(t, e) {
  if (e || (e = {}), typeof t == "number") {
    lt.checkSafeUint53(t, "invalid hexlify value");
    let r = "";
    for (; t; )
      r = as[t & 15] + r, t = Math.floor(t / 16);
    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
  }
  if (typeof t == "bigint")
    return t = t.toString(16), t.length % 2 ? "0x0" + t : "0x" + t;
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), Vc(t))
    return t.toHexString();
  if (dt(t))
    return t.length % 2 && (e.hexPad === "left" ? t = "0x0" + t.substring(2) : e.hexPad === "right" ? t += "0" : lt.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
  if (Pn(t)) {
    let r = "0x";
    for (let n = 0; n < t.length; n++) {
      let a = t[n];
      r += as[(a & 240) >> 4] + as[a & 15];
    }
    return r;
  }
  return lt.throwArgumentError("invalid hexlify value", "value", t);
}
function Ra(t) {
  if (typeof t != "string")
    t = he(t);
  else if (!dt(t) || t.length % 2)
    return null;
  return (t.length - 2) / 2;
}
function $r(t, e, r) {
  return typeof t != "string" ? t = he(t) : (!dt(t) || t.length % 2) && lt.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, r != null ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e);
}
function nn(t) {
  let e = "0x";
  return t.forEach((r) => {
    e += he(r).substring(2);
  }), e;
}
function M1(t) {
  const e = Gc(he(t, { hexPad: "left" }));
  return e === "0x" ? "0x0" : e;
}
function Gc(t) {
  typeof t != "string" && (t = he(t)), dt(t) || lt.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
  let e = 0;
  for (; e < t.length && t[e] === "0"; )
    e++;
  return "0x" + t.substring(e);
}
function bt(t, e) {
  for (typeof t != "string" ? t = he(t) : dt(t) || lt.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && lt.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2; )
    t = "0x0" + t.substring(2);
  return t;
}
function On(t) {
  const e = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x"
  };
  if (Ka(t)) {
    let r = oe(t);
    r.length === 64 ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = he(r.slice(0, 32)), e.s = he(r.slice(32, 64))) : r.length === 65 ? (e.r = he(r.slice(0, 32)), e.s = he(r.slice(32, 64)), e.v = r[64]) : lt.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (e.v === 0 || e.v === 1 ? e.v += 27 : lt.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = he(r.slice(32, 64));
  } else {
    if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, e._vs != null) {
      const a = ka(oe(e._vs), 32);
      e._vs = he(a);
      const i = a[0] >= 128 ? 1 : 0;
      e.recoveryParam == null ? e.recoveryParam = i : e.recoveryParam !== i && lt.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), a[0] &= 127;
      const c = he(a);
      e.s == null ? e.s = c : e.s !== c && lt.throwArgumentError("signature v mismatch _vs", "signature", t);
    }
    if (e.recoveryParam == null)
      e.v == null ? lt.throwArgumentError("signature missing v and recoveryParam", "signature", t) : e.v === 0 || e.v === 1 ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
    else if (e.v == null)
      e.v = 27 + e.recoveryParam;
    else {
      const a = e.v === 0 || e.v === 1 ? e.v : 1 - e.v % 2;
      e.recoveryParam !== a && lt.throwArgumentError("signature recoveryParam mismatch v", "signature", t);
    }
    e.r == null || !dt(e.r) ? lt.throwArgumentError("signature missing or invalid r", "signature", t) : e.r = bt(e.r, 32), e.s == null || !dt(e.s) ? lt.throwArgumentError("signature missing or invalid s", "signature", t) : e.s = bt(e.s, 32);
    const r = oe(e.s);
    r[0] >= 128 && lt.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
    const n = he(r);
    e._vs && (dt(e._vs) || lt.throwArgumentError("signature invalid _vs", "signature", t), e._vs = bt(e._vs, 32)), e._vs == null ? e._vs = n : e._vs !== n && lt.throwArgumentError("signature _vs mismatch v and s", "signature", t);
  }
  return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e;
}
function Ms(t) {
  return t = On(t), he(pt([
    t.r,
    t.s,
    t.recoveryParam ? "0x1c" : "0x1b"
  ]));
}
const _1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBytesLike: Ka,
  isBytes: Pn,
  arrayify: oe,
  concat: pt,
  stripZeros: Dr,
  zeroPad: ka,
  isHexString: dt,
  hexlify: he,
  hexDataLength: Ra,
  hexDataSlice: $r,
  hexConcat: nn,
  hexValue: M1,
  hexStripZeros: Gc,
  hexZeroPad: bt,
  splitSignature: On,
  joinSignature: Ms
}, Symbol.toStringTag, { value: "Module" })), Kc = "bignumber/5.7.0";
var Ta = k1.BN;
const Lr = new q(Kc), is = {}, h0 = 9007199254740991;
function R1(t) {
  return t != null && (ue.isBigNumber(t) || typeof t == "number" && t % 1 === 0 || typeof t == "string" && !!t.match(/^-?[0-9]+$/) || dt(t) || typeof t == "bigint" || Pn(t));
}
let u0 = !1;
class ue {
  constructor(e, r) {
    e !== is && Lr.throwError("cannot call constructor directly; use BigNumber.from", q.errors.UNSUPPORTED_OPERATION, {
      operation: "new (BigNumber)"
    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this);
  }
  fromTwos(e) {
    return Ut(Ge(this).fromTwos(e));
  }
  toTwos(e) {
    return Ut(Ge(this).toTwos(e));
  }
  abs() {
    return this._hex[0] === "-" ? ue.from(this._hex.substring(1)) : this;
  }
  add(e) {
    return Ut(Ge(this).add(Ge(e)));
  }
  sub(e) {
    return Ut(Ge(this).sub(Ge(e)));
  }
  div(e) {
    return ue.from(e).isZero() && Jt("division-by-zero", "div"), Ut(Ge(this).div(Ge(e)));
  }
  mul(e) {
    return Ut(Ge(this).mul(Ge(e)));
  }
  mod(e) {
    const r = Ge(e);
    return r.isNeg() && Jt("division-by-zero", "mod"), Ut(Ge(this).umod(r));
  }
  pow(e) {
    const r = Ge(e);
    return r.isNeg() && Jt("negative-power", "pow"), Ut(Ge(this).pow(r));
  }
  and(e) {
    const r = Ge(e);
    return (this.isNegative() || r.isNeg()) && Jt("unbound-bitwise-result", "and"), Ut(Ge(this).and(r));
  }
  or(e) {
    const r = Ge(e);
    return (this.isNegative() || r.isNeg()) && Jt("unbound-bitwise-result", "or"), Ut(Ge(this).or(r));
  }
  xor(e) {
    const r = Ge(e);
    return (this.isNegative() || r.isNeg()) && Jt("unbound-bitwise-result", "xor"), Ut(Ge(this).xor(r));
  }
  mask(e) {
    return (this.isNegative() || e < 0) && Jt("negative-width", "mask"), Ut(Ge(this).maskn(e));
  }
  shl(e) {
    return (this.isNegative() || e < 0) && Jt("negative-width", "shl"), Ut(Ge(this).shln(e));
  }
  shr(e) {
    return (this.isNegative() || e < 0) && Jt("negative-width", "shr"), Ut(Ge(this).shrn(e));
  }
  eq(e) {
    return Ge(this).eq(Ge(e));
  }
  lt(e) {
    return Ge(this).lt(Ge(e));
  }
  lte(e) {
    return Ge(this).lte(Ge(e));
  }
  gt(e) {
    return Ge(this).gt(Ge(e));
  }
  gte(e) {
    return Ge(this).gte(Ge(e));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return Ge(this).isZero();
  }
  toNumber() {
    try {
      return Ge(this).toNumber();
    } catch {
      Jt("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Lr.throwError("this platform does not support BigInt", q.errors.UNSUPPORTED_OPERATION, {
      value: this.toString()
    });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? u0 || (u0 = !0, Lr.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Lr.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", q.errors.UNEXPECTED_ARGUMENT, {}) : Lr.throwError("BigNumber.toString does not accept parameters", q.errors.UNEXPECTED_ARGUMENT, {})), Ge(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(e) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(e) {
    if (e instanceof ue)
      return e;
    if (typeof e == "string")
      return e.match(/^-?0x[0-9a-f]+$/i) ? new ue(is, Ua(e)) : e.match(/^-?[0-9]+$/) ? new ue(is, Ua(new Ta(e))) : Lr.throwArgumentError("invalid BigNumber string", "value", e);
    if (typeof e == "number")
      return e % 1 && Jt("underflow", "BigNumber.from", e), (e >= h0 || e <= -h0) && Jt("overflow", "BigNumber.from", e), ue.from(String(e));
    const r = e;
    if (typeof r == "bigint")
      return ue.from(r.toString());
    if (Pn(r))
      return ue.from(he(r));
    if (r)
      if (r.toHexString) {
        const n = r.toHexString();
        if (typeof n == "string")
          return ue.from(n);
      } else {
        let n = r._hex;
        if (n == null && r.type === "BigNumber" && (n = r.hex), typeof n == "string" && (dt(n) || n[0] === "-" && dt(n.substring(1))))
          return ue.from(n);
      }
    return Lr.throwArgumentError("invalid BigNumber value", "value", e);
  }
  static isBigNumber(e) {
    return !!(e && e._isBigNumber);
  }
}
function Ua(t) {
  if (typeof t != "string")
    return Ua(t.toString(16));
  if (t[0] === "-")
    return t = t.substring(1), t[0] === "-" && Lr.throwArgumentError("invalid hex", "value", t), t = Ua(t), t === "0x00" ? t : "-" + t;
  if (t.substring(0, 2) !== "0x" && (t = "0x" + t), t === "0x")
    return "0x00";
  for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && t.substring(0, 4) === "0x00"; )
    t = "0x" + t.substring(4);
  return t;
}
function Ut(t) {
  return ue.from(Ua(t));
}
function Ge(t) {
  const e = ue.from(t).toHexString();
  return e[0] === "-" ? new Ta("-" + e.substring(3), 16) : new Ta(e.substring(2), 16);
}
function Jt(t, e, r) {
  const n = { fault: t, operation: e };
  return r != null && (n.value = r), Lr.throwError(t, q.errors.NUMERIC_FAULT, n);
}
function T1(t) {
  return new Ta(t, 36).toString(16);
}
function U1(t) {
  return new Ta(t, 16).toString(36);
}
const Ft = new q(Kc), Sa = {}, qc = ue.from(0), Zc = ue.from(-1);
function Yc(t, e, r, n) {
  const a = { fault: e, operation: r };
  return n !== void 0 && (a.value = n), Ft.throwError(t, q.errors.NUMERIC_FAULT, a);
}
let Da = "0";
for (; Da.length < 256; )
  Da += Da;
function no(t) {
  if (typeof t != "number")
    try {
      t = ue.from(t).toNumber();
    } catch {
    }
  return typeof t == "number" && t >= 0 && t <= 256 && !(t % 1) ? "1" + Da.substring(0, t) : Ft.throwArgumentError("invalid decimal size", "decimals", t);
}
function pi(t, e) {
  e == null && (e = 0);
  const r = no(e);
  t = ue.from(t);
  const n = t.lt(qc);
  n && (t = t.mul(Zc));
  let a = t.mod(r).toString();
  for (; a.length < r.length - 1; )
    a = "0" + a;
  a = a.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const i = t.div(r).toString();
  return r.length === 1 ? t = i : t = i + "." + a, n && (t = "-" + t), t;
}
function dr(t, e) {
  e == null && (e = 0);
  const r = no(e);
  (typeof t != "string" || !t.match(/^-?[0-9.]+$/)) && Ft.throwArgumentError("invalid decimal value", "value", t);
  const n = t.substring(0, 1) === "-";
  n && (t = t.substring(1)), t === "." && Ft.throwArgumentError("missing value", "value", t);
  const a = t.split(".");
  a.length > 2 && Ft.throwArgumentError("too many decimal points", "value", t);
  let i = a[0], c = a[1];
  for (i || (i = "0"), c || (c = "0"); c[c.length - 1] === "0"; )
    c = c.substring(0, c.length - 1);
  for (c.length > r.length - 1 && Yc("fractional component exceeds decimals", "underflow", "parseFixed"), c === "" && (c = "0"); c.length < r.length - 1; )
    c += "0";
  const d = ue.from(i), m = ue.from(c);
  let b = d.mul(r).add(m);
  return n && (b = b.mul(Zc)), b;
}
class Yn {
  constructor(e, r, n, a) {
    e !== Sa && Ft.throwError("cannot use FixedFormat constructor; use FixedFormat.from", q.errors.UNSUPPORTED_OPERATION, {
      operation: "new FixedFormat"
    }), this.signed = r, this.width = n, this.decimals = a, this.name = (r ? "" : "u") + "fixed" + String(n) + "x" + String(a), this._multiplier = no(a), Object.freeze(this);
  }
  static from(e) {
    if (e instanceof Yn)
      return e;
    typeof e == "number" && (e = `fixed128x${e}`);
    let r = !0, n = 128, a = 18;
    if (typeof e == "string") {
      if (e !== "fixed")
        if (e === "ufixed")
          r = !1;
        else {
          const i = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
          i || Ft.throwArgumentError("invalid fixed format", "format", e), r = i[1] !== "u", n = parseInt(i[2]), a = parseInt(i[3]);
        }
    } else if (e) {
      const i = (c, d, m) => e[c] == null ? m : (typeof e[c] !== d && Ft.throwArgumentError("invalid fixed format (" + c + " not " + d + ")", "format." + c, e[c]), e[c]);
      r = i("signed", "boolean", r), n = i("width", "number", n), a = i("decimals", "number", a);
    }
    return n % 8 && Ft.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", n), a > 80 && Ft.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", a), new Yn(Sa, r, n, a);
  }
}
class Ct {
  constructor(e, r, n, a) {
    e !== Sa && Ft.throwError("cannot use FixedNumber constructor; use FixedNumber.from", q.errors.UNSUPPORTED_OPERATION, {
      operation: "new FixedFormat"
    }), this.format = a, this._hex = r, this._value = n, this._isFixedNumber = !0, Object.freeze(this);
  }
  _checkFormat(e) {
    this.format.name !== e.format.name && Ft.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e);
  }
  addUnsafe(e) {
    this._checkFormat(e);
    const r = dr(this._value, this.format.decimals), n = dr(e._value, e.format.decimals);
    return Ct.fromValue(r.add(n), this.format.decimals, this.format);
  }
  subUnsafe(e) {
    this._checkFormat(e);
    const r = dr(this._value, this.format.decimals), n = dr(e._value, e.format.decimals);
    return Ct.fromValue(r.sub(n), this.format.decimals, this.format);
  }
  mulUnsafe(e) {
    this._checkFormat(e);
    const r = dr(this._value, this.format.decimals), n = dr(e._value, e.format.decimals);
    return Ct.fromValue(r.mul(n).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(e) {
    this._checkFormat(e);
    const r = dr(this._value, this.format.decimals), n = dr(e._value, e.format.decimals);
    return Ct.fromValue(r.mul(this.format._multiplier).div(n), this.format.decimals, this.format);
  }
  floor() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let r = Ct.from(e[0], this.format);
    const n = !e[1].match(/^(0*)$/);
    return this.isNegative() && n && (r = r.subUnsafe(m0.toFormat(r.format))), r;
  }
  ceiling() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let r = Ct.from(e[0], this.format);
    const n = !e[1].match(/^(0*)$/);
    return !this.isNegative() && n && (r = r.addUnsafe(m0.toFormat(r.format))), r;
  }
  round(e) {
    e == null && (e = 0);
    const r = this.toString().split(".");
    if (r.length === 1 && r.push("0"), (e < 0 || e > 80 || e % 1) && Ft.throwArgumentError("invalid decimal count", "decimals", e), r[1].length <= e)
      return this;
    const n = Ct.from("1" + Da.substring(0, e), this.format), a = P1.toFormat(this.format);
    return this.mulUnsafe(n).addUnsafe(a).floor().divUnsafe(n);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(e) {
    if (e == null)
      return this._hex;
    e % 8 && Ft.throwArgumentError("invalid byte width", "width", e);
    const r = ue.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
    return bt(r, e / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(e) {
    return Ct.fromString(this._value, e);
  }
  static fromValue(e, r, n) {
    return n == null && r != null && !R1(r) && (n = r, r = null), r == null && (r = 0), n == null && (n = "fixed"), Ct.fromString(pi(e, r), Yn.from(n));
  }
  static fromString(e, r) {
    r == null && (r = "fixed");
    const n = Yn.from(r), a = dr(e, n.decimals);
    !n.signed && a.lt(qc) && Yc("unsigned value cannot be negative", "overflow", "value", e);
    let i = null;
    n.signed ? i = a.toTwos(n.width).toHexString() : (i = a.toHexString(), i = bt(i, n.width / 8));
    const c = pi(a, n.decimals);
    return new Ct(Sa, i, c, n);
  }
  static fromBytes(e, r) {
    r == null && (r = "fixed");
    const n = Yn.from(r);
    if (oe(e).length > n.width / 8)
      throw new Error("overflow");
    let a = ue.from(e);
    n.signed && (a = a.fromTwos(n.width));
    const i = a.toTwos((n.signed ? 0 : 1) + n.width).toHexString(), c = pi(a, n.decimals);
    return new Ct(Sa, i, c, n);
  }
  static from(e, r) {
    if (typeof e == "string")
      return Ct.fromString(e, r);
    if (Pn(e))
      return Ct.fromBytes(e, r);
    try {
      return Ct.fromValue(e, 0, r);
    } catch (n) {
      if (n.code !== q.errors.INVALID_ARGUMENT)
        throw n;
    }
    return Ft.throwArgumentError("invalid FixedNumber value", "value", e);
  }
  static isFixedNumber(e) {
    return !!(e && e._isFixedNumber);
  }
}
const m0 = Ct.from(1), P1 = Ct.from("0.5"), O1 = "properties/5.7.0";
var N1 = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(c) {
      c(i);
    });
  }
  return new (r || (r = Promise))(function(i, c) {
    function d(v) {
      try {
        b(n.next(v));
      } catch (A) {
        c(A);
      }
    }
    function m(v) {
      try {
        b(n.throw(v));
      } catch (A) {
        c(A);
      }
    }
    function b(v) {
      v.done ? i(v.value) : a(v.value).then(d, m);
    }
    b((n = n.apply(t, e || [])).next());
  });
};
const ki = new q(O1);
function ae(t, e, r) {
  Object.defineProperty(t, e, {
    enumerable: !0,
    value: r,
    writable: !1
  });
}
function Vn(t, e) {
  for (let r = 0; r < 32; r++) {
    if (t[e])
      return t[e];
    if (!t.prototype || typeof t.prototype != "object")
      break;
    t = Object.getPrototypeOf(t.prototype).constructor;
  }
  return null;
}
function Ir(t) {
  return N1(this, void 0, void 0, function* () {
    const e = Object.keys(t).map((n) => {
      const a = t[n];
      return Promise.resolve(a).then((i) => ({ key: n, value: i }));
    });
    return (yield Promise.all(e)).reduce((n, a) => (n[a.key] = a.value, n), {});
  });
}
function Xc(t, e) {
  (!t || typeof t != "object") && ki.throwArgumentError("invalid object", "object", t), Object.keys(t).forEach((r) => {
    e[r] || ki.throwArgumentError("invalid object key - " + r, "transaction:" + r, t);
  });
}
function qt(t) {
  const e = {};
  for (const r in t)
    e[r] = t[r];
  return e;
}
const L1 = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
function Jc(t) {
  if (t == null || L1[typeof t])
    return !0;
  if (Array.isArray(t) || typeof t == "object") {
    if (!Object.isFrozen(t))
      return !1;
    const e = Object.keys(t);
    for (let r = 0; r < e.length; r++) {
      let n = null;
      try {
        n = t[e[r]];
      } catch {
        continue;
      }
      if (!Jc(n))
        return !1;
    }
    return !0;
  }
  return ki.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t);
}
function j1(t) {
  if (Jc(t))
    return t;
  if (Array.isArray(t))
    return Object.freeze(t.map((e) => Bn(e)));
  if (typeof t == "object") {
    const e = {};
    for (const r in t) {
      const n = t[r];
      n !== void 0 && ae(e, r, Bn(n));
    }
    return e;
  }
  return ki.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t);
}
function Bn(t) {
  return j1(t);
}
class Nn {
  constructor(e) {
    for (const r in e)
      this[r] = Bn(e[r]);
  }
}
const W1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defineReadOnly: ae,
  getStatic: Vn,
  resolveProperties: Ir,
  checkProperties: Xc,
  shallowCopy: qt,
  deepCopy: Bn,
  Description: Nn
}, Symbol.toStringTag, { value: "Module" })), qa = "abi/5.7.0", qe = new q(qa), Fn = {};
let p0 = { calldata: !0, memory: !0, storage: !0 }, H1 = { calldata: !0, memory: !0 };
function ii(t, e) {
  if (t === "bytes" || t === "string") {
    if (p0[e])
      return !0;
  } else if (t === "address") {
    if (e === "payable")
      return !0;
  } else if ((t.indexOf("[") >= 0 || t === "tuple") && H1[e])
    return !0;
  return (p0[e] || e === "payable") && qe.throwArgumentError("invalid modifier", "name", e), !1;
}
function z1(t, e) {
  let r = t;
  function n(d) {
    qe.throwArgumentError(`unexpected character at position ${d}`, "param", t);
  }
  t = t.replace(/\s/g, " ");
  function a(d) {
    let m = { type: "", name: "", parent: d, state: { allowType: !0 } };
    return e && (m.indexed = !1), m;
  }
  let i = { type: "", name: "", state: { allowType: !0 } }, c = i;
  for (let d = 0; d < t.length; d++) {
    let m = t[d];
    switch (m) {
      case "(":
        c.state.allowType && c.type === "" ? c.type = "tuple" : c.state.allowParams || n(d), c.state.allowType = !1, c.type = Hn(c.type), c.components = [a(c)], c = c.components[0];
        break;
      case ")":
        delete c.state, c.name === "indexed" && (e || n(d), c.indexed = !0, c.name = ""), ii(c.type, c.name) && (c.name = ""), c.type = Hn(c.type);
        let b = c;
        c = c.parent, c || n(d), delete b.parent, c.state.allowParams = !1, c.state.allowName = !0, c.state.allowArray = !0;
        break;
      case ",":
        delete c.state, c.name === "indexed" && (e || n(d), c.indexed = !0, c.name = ""), ii(c.type, c.name) && (c.name = ""), c.type = Hn(c.type);
        let v = a(c.parent);
        c.parent.components.push(v), delete c.parent, c = v;
        break;
      case " ":
        c.state.allowType && c.type !== "" && (c.type = Hn(c.type), delete c.state.allowType, c.state.allowName = !0, c.state.allowParams = !0), c.state.allowName && c.name !== "" && (c.name === "indexed" ? (e || n(d), c.indexed && n(d), c.indexed = !0, c.name = "") : ii(c.type, c.name) ? c.name = "" : c.state.allowName = !1);
        break;
      case "[":
        c.state.allowArray || n(d), c.type += m, c.state.allowArray = !1, c.state.allowName = !1, c.state.readArray = !0;
        break;
      case "]":
        c.state.readArray || n(d), c.type += m, c.state.readArray = !1, c.state.allowArray = !0, c.state.allowName = !0;
        break;
      default:
        c.state.allowType ? (c.type += m, c.state.allowParams = !0, c.state.allowArray = !0) : c.state.allowName ? (c.name += m, delete c.state.allowArray) : c.state.readArray ? c.type += m : n(d);
    }
  }
  return c.parent && qe.throwArgumentError("unexpected eof", "param", t), delete i.state, c.name === "indexed" ? (e || n(r.length - 7), c.indexed && n(r.length - 7), c.indexed = !0, c.name = "") : ii(c.type, c.name) && (c.name = ""), i.type = Hn(i.type), i;
}
function bi(t, e) {
  for (let r in e)
    ae(t, r, e[r]);
}
const Xe = Object.freeze({
  sighash: "sighash",
  minimal: "minimal",
  full: "full",
  json: "json"
}), $1 = new RegExp(/^(.*)\[([0-9]*)\]$/);
class xt {
  constructor(e, r) {
    e !== Fn && qe.throwError("use fromString", q.errors.UNSUPPORTED_OPERATION, {
      operation: "new ParamType()"
    }), bi(this, r);
    let n = this.type.match($1);
    n ? bi(this, {
      arrayLength: parseInt(n[2] || "-1"),
      arrayChildren: xt.fromObject({
        type: n[1],
        components: this.components
      }),
      baseType: "array"
    }) : bi(this, {
      arrayLength: null,
      arrayChildren: null,
      baseType: this.components != null ? "tuple" : this.type
    }), this._isParamType = !0, Object.freeze(this);
  }
  format(e) {
    if (e || (e = Xe.sighash), Xe[e] || qe.throwArgumentError("invalid format type", "format", e), e === Xe.json) {
      let n = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: this.name || void 0
      };
      return typeof this.indexed == "boolean" && (n.indexed = this.indexed), this.components && (n.components = this.components.map((a) => JSON.parse(a.format(e)))), JSON.stringify(n);
    }
    let r = "";
    return this.baseType === "array" ? (r += this.arrayChildren.format(e), r += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : this.baseType === "tuple" ? (e !== Xe.sighash && (r += this.type), r += "(" + this.components.map((n) => n.format(e)).join(e === Xe.full ? ", " : ",") + ")") : r += this.type, e !== Xe.sighash && (this.indexed === !0 && (r += " indexed"), e === Xe.full && this.name && (r += " " + this.name)), r;
  }
  static from(e, r) {
    return typeof e == "string" ? xt.fromString(e, r) : xt.fromObject(e);
  }
  static fromObject(e) {
    return xt.isParamType(e) ? e : new xt(Fn, {
      name: e.name || null,
      type: Hn(e.type),
      indexed: e.indexed == null ? null : !!e.indexed,
      components: e.components ? e.components.map(xt.fromObject) : null
    });
  }
  static fromString(e, r) {
    function n(a) {
      return xt.fromObject({
        name: a.name,
        type: a.type,
        indexed: a.indexed,
        components: a.components
      });
    }
    return n(z1(e, !!r));
  }
  static isParamType(e) {
    return !!(e != null && e._isParamType);
  }
}
function Pa(t, e) {
  return G1(t).map((r) => xt.fromString(r, e));
}
class kr {
  constructor(e, r) {
    e !== Fn && qe.throwError("use a static from method", q.errors.UNSUPPORTED_OPERATION, {
      operation: "new Fragment()"
    }), bi(this, r), this._isFragment = !0, Object.freeze(this);
  }
  static from(e) {
    return kr.isFragment(e) ? e : typeof e == "string" ? kr.fromString(e) : kr.fromObject(e);
  }
  static fromObject(e) {
    if (kr.isFragment(e))
      return e;
    switch (e.type) {
      case "function":
        return hr.fromObject(e);
      case "event":
        return Cr.fromObject(e);
      case "constructor":
        return lr.fromObject(e);
      case "error":
        return Wr.fromObject(e);
      case "fallback":
      case "receive":
        return null;
    }
    return qe.throwArgumentError("invalid fragment object", "value", e);
  }
  static fromString(e) {
    return e = e.replace(/\s/g, " "), e = e.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " "), e = e.trim(), e.split(" ")[0] === "event" ? Cr.fromString(e.substring(5).trim()) : e.split(" ")[0] === "function" ? hr.fromString(e.substring(8).trim()) : e.split("(")[0].trim() === "constructor" ? lr.fromString(e.trim()) : e.split(" ")[0] === "error" ? Wr.fromString(e.substring(5).trim()) : qe.throwArgumentError("unsupported fragment", "value", e);
  }
  static isFragment(e) {
    return !!(e && e._isFragment);
  }
}
class Cr extends kr {
  format(e) {
    if (e || (e = Xe.sighash), Xe[e] || qe.throwArgumentError("invalid format type", "format", e), e === Xe.json)
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    let r = "";
    return e !== Xe.sighash && (r += "event "), r += this.name + "(" + this.inputs.map((n) => n.format(e)).join(e === Xe.full ? ", " : ",") + ") ", e !== Xe.sighash && this.anonymous && (r += "anonymous "), r.trim();
  }
  static from(e) {
    return typeof e == "string" ? Cr.fromString(e) : Cr.fromObject(e);
  }
  static fromObject(e) {
    if (Cr.isEventFragment(e))
      return e;
    e.type !== "event" && qe.throwArgumentError("invalid event object", "value", e);
    const r = {
      name: Oa(e.name),
      anonymous: e.anonymous,
      inputs: e.inputs ? e.inputs.map(xt.fromObject) : [],
      type: "event"
    };
    return new Cr(Fn, r);
  }
  static fromString(e) {
    let r = e.match(Na);
    r || qe.throwArgumentError("invalid event string", "value", e);
    let n = !1;
    return r[3].split(" ").forEach((a) => {
      switch (a.trim()) {
        case "anonymous":
          n = !0;
          break;
        case "":
          break;
        default:
          qe.warn("unknown modifier: " + a);
      }
    }), Cr.fromObject({
      name: r[1].trim(),
      anonymous: n,
      inputs: Pa(r[2], !0),
      type: "event"
    });
  }
  static isEventFragment(e) {
    return e && e._isFragment && e.type === "event";
  }
}
function Qc(t, e) {
  e.gas = null;
  let r = t.split("@");
  return r.length !== 1 ? (r.length > 2 && qe.throwArgumentError("invalid human-readable ABI signature", "value", t), r[1].match(/^[0-9]+$/) || qe.throwArgumentError("invalid human-readable ABI signature gas", "value", t), e.gas = ue.from(r[1]), r[0]) : t;
}
function ef(t, e) {
  e.constant = !1, e.payable = !1, e.stateMutability = "nonpayable", t.split(" ").forEach((r) => {
    switch (r.trim()) {
      case "constant":
        e.constant = !0;
        break;
      case "payable":
        e.payable = !0, e.stateMutability = "payable";
        break;
      case "nonpayable":
        e.payable = !1, e.stateMutability = "nonpayable";
        break;
      case "pure":
        e.constant = !0, e.stateMutability = "pure";
        break;
      case "view":
        e.constant = !0, e.stateMutability = "view";
        break;
      case "external":
      case "public":
      case "":
        break;
      default:
        console.log("unknown modifier: " + r);
    }
  });
}
function tf(t) {
  let e = {
    constant: !1,
    payable: !0,
    stateMutability: "payable"
  };
  return t.stateMutability != null ? (e.stateMutability = t.stateMutability, e.constant = e.stateMutability === "view" || e.stateMutability === "pure", t.constant != null && !!t.constant !== e.constant && qe.throwArgumentError("cannot have constant function with mutability " + e.stateMutability, "value", t), e.payable = e.stateMutability === "payable", t.payable != null && !!t.payable !== e.payable && qe.throwArgumentError("cannot have payable function with mutability " + e.stateMutability, "value", t)) : t.payable != null ? (e.payable = !!t.payable, t.constant == null && !e.payable && t.type !== "constructor" && qe.throwArgumentError("unable to determine stateMutability", "value", t), e.constant = !!t.constant, e.constant ? e.stateMutability = "view" : e.stateMutability = e.payable ? "payable" : "nonpayable", e.payable && e.constant && qe.throwArgumentError("cannot have constant payable function", "value", t)) : t.constant != null ? (e.constant = !!t.constant, e.payable = !e.constant, e.stateMutability = e.constant ? "view" : "payable") : t.type !== "constructor" && qe.throwArgumentError("unable to determine stateMutability", "value", t), e;
}
class lr extends kr {
  format(e) {
    if (e || (e = Xe.sighash), Xe[e] || qe.throwArgumentError("invalid format type", "format", e), e === Xe.json)
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : void 0,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    e === Xe.sighash && qe.throwError("cannot format a constructor for sighash", q.errors.UNSUPPORTED_OPERATION, {
      operation: "format(sighash)"
    });
    let r = "constructor(" + this.inputs.map((n) => n.format(e)).join(e === Xe.full ? ", " : ",") + ") ";
    return this.stateMutability && this.stateMutability !== "nonpayable" && (r += this.stateMutability + " "), r.trim();
  }
  static from(e) {
    return typeof e == "string" ? lr.fromString(e) : lr.fromObject(e);
  }
  static fromObject(e) {
    if (lr.isConstructorFragment(e))
      return e;
    e.type !== "constructor" && qe.throwArgumentError("invalid constructor object", "value", e);
    let r = tf(e);
    r.constant && qe.throwArgumentError("constructor cannot be constant", "value", e);
    const n = {
      name: null,
      type: e.type,
      inputs: e.inputs ? e.inputs.map(xt.fromObject) : [],
      payable: r.payable,
      stateMutability: r.stateMutability,
      gas: e.gas ? ue.from(e.gas) : null
    };
    return new lr(Fn, n);
  }
  static fromString(e) {
    let r = { type: "constructor" };
    e = Qc(e, r);
    let n = e.match(Na);
    return (!n || n[1].trim() !== "constructor") && qe.throwArgumentError("invalid constructor string", "value", e), r.inputs = Pa(n[2].trim(), !1), ef(n[3].trim(), r), lr.fromObject(r);
  }
  static isConstructorFragment(e) {
    return e && e._isFragment && e.type === "constructor";
  }
}
class hr extends lr {
  format(e) {
    if (e || (e = Xe.sighash), Xe[e] || qe.throwArgumentError("invalid format type", "format", e), e === Xe.json)
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : void 0,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e))),
        outputs: this.outputs.map((n) => JSON.parse(n.format(e)))
      });
    let r = "";
    return e !== Xe.sighash && (r += "function "), r += this.name + "(" + this.inputs.map((n) => n.format(e)).join(e === Xe.full ? ", " : ",") + ") ", e !== Xe.sighash && (this.stateMutability ? this.stateMutability !== "nonpayable" && (r += this.stateMutability + " ") : this.constant && (r += "view "), this.outputs && this.outputs.length && (r += "returns (" + this.outputs.map((n) => n.format(e)).join(", ") + ") "), this.gas != null && (r += "@" + this.gas.toString() + " ")), r.trim();
  }
  static from(e) {
    return typeof e == "string" ? hr.fromString(e) : hr.fromObject(e);
  }
  static fromObject(e) {
    if (hr.isFunctionFragment(e))
      return e;
    e.type !== "function" && qe.throwArgumentError("invalid function object", "value", e);
    let r = tf(e);
    const n = {
      type: e.type,
      name: Oa(e.name),
      constant: r.constant,
      inputs: e.inputs ? e.inputs.map(xt.fromObject) : [],
      outputs: e.outputs ? e.outputs.map(xt.fromObject) : [],
      payable: r.payable,
      stateMutability: r.stateMutability,
      gas: e.gas ? ue.from(e.gas) : null
    };
    return new hr(Fn, n);
  }
  static fromString(e) {
    let r = { type: "function" };
    e = Qc(e, r);
    let n = e.split(" returns ");
    n.length > 2 && qe.throwArgumentError("invalid function string", "value", e);
    let a = n[0].match(Na);
    if (a || qe.throwArgumentError("invalid function signature", "value", e), r.name = a[1].trim(), r.name && Oa(r.name), r.inputs = Pa(a[2], !1), ef(a[3].trim(), r), n.length > 1) {
      let i = n[1].match(Na);
      (i[1].trim() != "" || i[3].trim() != "") && qe.throwArgumentError("unexpected tokens", "value", e), r.outputs = Pa(i[2], !1);
    } else
      r.outputs = [];
    return hr.fromObject(r);
  }
  static isFunctionFragment(e) {
    return e && e._isFragment && e.type === "function";
  }
}
function b0(t) {
  const e = t.format();
  return (e === "Error(string)" || e === "Panic(uint256)") && qe.throwArgumentError(`cannot specify user defined ${e} error`, "fragment", t), t;
}
class Wr extends kr {
  format(e) {
    if (e || (e = Xe.sighash), Xe[e] || qe.throwArgumentError("invalid format type", "format", e), e === Xe.json)
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    let r = "";
    return e !== Xe.sighash && (r += "error "), r += this.name + "(" + this.inputs.map((n) => n.format(e)).join(e === Xe.full ? ", " : ",") + ") ", r.trim();
  }
  static from(e) {
    return typeof e == "string" ? Wr.fromString(e) : Wr.fromObject(e);
  }
  static fromObject(e) {
    if (Wr.isErrorFragment(e))
      return e;
    e.type !== "error" && qe.throwArgumentError("invalid error object", "value", e);
    const r = {
      type: e.type,
      name: Oa(e.name),
      inputs: e.inputs ? e.inputs.map(xt.fromObject) : []
    };
    return b0(new Wr(Fn, r));
  }
  static fromString(e) {
    let r = { type: "error" }, n = e.match(Na);
    return n || qe.throwArgumentError("invalid error signature", "value", e), r.name = n[1].trim(), r.name && Oa(r.name), r.inputs = Pa(n[2], !1), b0(Wr.fromObject(r));
  }
  static isErrorFragment(e) {
    return e && e._isFragment && e.type === "error";
  }
}
function Hn(t) {
  return t.match(/^uint($|[^1-9])/) ? t = "uint256" + t.substring(4) : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)), t;
}
const V1 = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
function Oa(t) {
  return (!t || !t.match(V1)) && qe.throwArgumentError(`invalid identifier "${t}"`, "value", t), t;
}
const Na = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
function G1(t) {
  t = t.trim();
  let e = [], r = "", n = 0;
  for (let a = 0; a < t.length; a++) {
    let i = t[a];
    i === "," && n === 0 ? (e.push(r), r = "") : (r += i, i === "(" ? n++ : i === ")" && (n--, n === -1 && qe.throwArgumentError("unbalanced parenthesis", "value", t)));
  }
  return r && e.push(r), e;
}
const ao = new q(qa);
function rf(t) {
  const e = [], r = function(n, a) {
    if (!!Array.isArray(a))
      for (let i in a) {
        const c = n.slice();
        c.push(i);
        try {
          r(c, a[i]);
        } catch (d) {
          e.push({ path: c, error: d });
        }
      }
  };
  return r([], t), e;
}
class Kr {
  constructor(e, r, n, a) {
    this.name = e, this.type = r, this.localName = n, this.dynamic = a;
  }
  _throwError(e, r) {
    ao.throwArgumentError(e, this.localName, r);
  }
}
class _s {
  constructor(e) {
    ae(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e);
  }
  get data() {
    return nn(this._data);
  }
  get length() {
    return this._dataLength;
  }
  _writeData(e) {
    return this._data.push(e), this._dataLength += e.length, e.length;
  }
  appendWriter(e) {
    return this._writeData(pt(e._data));
  }
  writeBytes(e) {
    let r = oe(e);
    const n = r.length % this.wordSize;
    return n && (r = pt([r, this._padding.slice(n)])), this._writeData(r);
  }
  _getValue(e) {
    let r = oe(ue.from(e));
    return r.length > this.wordSize && ao.throwError("value out-of-bounds", q.errors.BUFFER_OVERRUN, {
      length: this.wordSize,
      offset: r.length
    }), r.length % this.wordSize && (r = pt([this._padding.slice(r.length % this.wordSize), r])), r;
  }
  writeValue(e) {
    return this._writeData(this._getValue(e));
  }
  writeUpdatableValue() {
    const e = this._data.length;
    return this._data.push(this._padding), this._dataLength += this.wordSize, (r) => {
      this._data[e] = this._getValue(r);
    };
  }
}
class Si {
  constructor(e, r, n, a) {
    ae(this, "_data", oe(e)), ae(this, "wordSize", r || 32), ae(this, "_coerceFunc", n), ae(this, "allowLoose", a), this._offset = 0;
  }
  get data() {
    return he(this._data);
  }
  get consumed() {
    return this._offset;
  }
  static coerce(e, r) {
    let n = e.match("^u?int([0-9]+)$");
    return n && parseInt(n[1]) <= 48 && (r = r.toNumber()), r;
  }
  coerce(e, r) {
    return this._coerceFunc ? this._coerceFunc(e, r) : Si.coerce(e, r);
  }
  _peekBytes(e, r, n) {
    let a = Math.ceil(r / this.wordSize) * this.wordSize;
    return this._offset + a > this._data.length && (this.allowLoose && n && this._offset + r <= this._data.length ? a = r : ao.throwError("data out-of-bounds", q.errors.BUFFER_OVERRUN, {
      length: this._data.length,
      offset: this._offset + a
    })), this._data.slice(this._offset, this._offset + a);
  }
  subReader(e) {
    return new Si(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose);
  }
  readBytes(e, r) {
    let n = this._peekBytes(0, e, !!r);
    return this._offset += n.length, n.slice(0, e);
  }
  readValue() {
    return ue.from(this.readBytes(this.wordSize));
  }
}
var nf = { exports: {} };
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
(function(t) {
  (function() {
    var e = "input is invalid type", r = "finalize already called", n = typeof window == "object", a = n ? window : {};
    a.JS_SHA3_NO_WINDOW && (n = !1);
    var i = !n && typeof self == "object", c = !a.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    c ? a = Gt : i && (a = self);
    var d = !a.JS_SHA3_NO_COMMON_JS && !0 && t.exports, m = !a.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", b = "0123456789abcdef".split(""), v = [31, 7936, 2031616, 520093696], A = [4, 1024, 262144, 67108864], S = [1, 256, 65536, 16777216], D = [6, 1536, 393216, 100663296], B = [0, 8, 16, 24], F = [
      1,
      0,
      32898,
      0,
      32906,
      2147483648,
      2147516416,
      2147483648,
      32907,
      0,
      2147483649,
      0,
      2147516545,
      2147483648,
      32777,
      2147483648,
      138,
      0,
      136,
      0,
      2147516425,
      0,
      2147483658,
      0,
      2147516555,
      0,
      139,
      2147483648,
      32905,
      2147483648,
      32771,
      2147483648,
      32770,
      2147483648,
      128,
      2147483648,
      32778,
      0,
      2147483658,
      2147483648,
      2147516545,
      2147483648,
      32896,
      2147483648,
      2147483649,
      0,
      2147516424,
      2147483648
    ], k = [224, 256, 384, 512], T = [128, 256], U = ["hex", "buffer", "arrayBuffer", "array", "digest"], H = {
      128: 168,
      256: 136
    };
    (a.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(p) {
      return Object.prototype.toString.call(p) === "[object Array]";
    }), m && (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(p) {
      return typeof p == "object" && p.buffer && p.buffer.constructor === ArrayBuffer;
    });
    for (var P = function(p, C, N) {
      return function(_) {
        return new o(p, C, p).update(_)[N]();
      };
    }, R = function(p, C, N) {
      return function(_, j) {
        return new o(p, C, j).update(_)[N]();
      };
    }, W = function(p, C, N) {
      return function(_, j, X, z) {
        return s["cshake" + p].update(_, j, X, z)[N]();
      };
    }, Z = function(p, C, N) {
      return function(_, j, X, z) {
        return s["kmac" + p].update(_, j, X, z)[N]();
      };
    }, Y = function(p, C, N, _) {
      for (var j = 0; j < U.length; ++j) {
        var X = U[j];
        p[X] = C(N, _, X);
      }
      return p;
    }, ne = function(p, C) {
      var N = P(p, C, "hex");
      return N.create = function() {
        return new o(p, C, p);
      }, N.update = function(_) {
        return N.create().update(_);
      }, Y(N, P, p, C);
    }, ce = function(p, C) {
      var N = R(p, C, "hex");
      return N.create = function(_) {
        return new o(p, C, _);
      }, N.update = function(_, j) {
        return N.create(j).update(_);
      }, Y(N, R, p, C);
    }, $ = function(p, C) {
      var N = H[p], _ = W(p, C, "hex");
      return _.create = function(j, X, z) {
        return !X && !z ? s["shake" + p].create(j) : new o(p, C, j).bytepad([X, z], N);
      }, _.update = function(j, X, z, O) {
        return _.create(X, z, O).update(j);
      }, Y(_, W, p, C);
    }, ie = function(p, C) {
      var N = H[p], _ = Z(p, C, "hex");
      return _.create = function(j, X, z) {
        return new h(p, C, X).bytepad(["KMAC", z], N).bytepad([j], N);
      }, _.update = function(j, X, z, O) {
        return _.create(j, z, O).update(X);
      }, Y(_, Z, p, C);
    }, y = [
      { name: "keccak", padding: S, bits: k, createMethod: ne },
      { name: "sha3", padding: D, bits: k, createMethod: ne },
      { name: "shake", padding: v, bits: T, createMethod: ce },
      { name: "cshake", padding: A, bits: T, createMethod: $ },
      { name: "kmac", padding: A, bits: T, createMethod: ie }
    ], s = {}, f = [], u = 0; u < y.length; ++u)
      for (var g = y[u], x = g.bits, w = 0; w < x.length; ++w) {
        var E = g.name + "_" + x[w];
        if (f.push(E), s[E] = g.createMethod(x[w], g.padding), g.name !== "sha3") {
          var l = g.name + x[w];
          f.push(l), s[l] = s[E];
        }
      }
    function o(p, C, N) {
      this.blocks = [], this.s = [], this.padding = C, this.outputBits = N, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (p << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = N >> 5, this.extraBytes = (N & 31) >> 3;
      for (var _ = 0; _ < 50; ++_)
        this.s[_] = 0;
    }
    o.prototype.update = function(p) {
      if (this.finalized)
        throw new Error(r);
      var C, N = typeof p;
      if (N !== "string") {
        if (N === "object") {
          if (p === null)
            throw new Error(e);
          if (m && p.constructor === ArrayBuffer)
            p = new Uint8Array(p);
          else if (!Array.isArray(p) && (!m || !ArrayBuffer.isView(p)))
            throw new Error(e);
        } else
          throw new Error(e);
        C = !0;
      }
      for (var _ = this.blocks, j = this.byteCount, X = p.length, z = this.blockCount, O = 0, we = this.s, G, V; O < X; ) {
        if (this.reset)
          for (this.reset = !1, _[0] = this.block, G = 1; G < z + 1; ++G)
            _[G] = 0;
        if (C)
          for (G = this.start; O < X && G < j; ++O)
            _[G >> 2] |= p[O] << B[G++ & 3];
        else
          for (G = this.start; O < X && G < j; ++O)
            V = p.charCodeAt(O), V < 128 ? _[G >> 2] |= V << B[G++ & 3] : V < 2048 ? (_[G >> 2] |= (192 | V >> 6) << B[G++ & 3], _[G >> 2] |= (128 | V & 63) << B[G++ & 3]) : V < 55296 || V >= 57344 ? (_[G >> 2] |= (224 | V >> 12) << B[G++ & 3], _[G >> 2] |= (128 | V >> 6 & 63) << B[G++ & 3], _[G >> 2] |= (128 | V & 63) << B[G++ & 3]) : (V = 65536 + ((V & 1023) << 10 | p.charCodeAt(++O) & 1023), _[G >> 2] |= (240 | V >> 18) << B[G++ & 3], _[G >> 2] |= (128 | V >> 12 & 63) << B[G++ & 3], _[G >> 2] |= (128 | V >> 6 & 63) << B[G++ & 3], _[G >> 2] |= (128 | V & 63) << B[G++ & 3]);
        if (this.lastByteIndex = G, G >= j) {
          for (this.start = G - j, this.block = _[z], G = 0; G < z; ++G)
            we[G] ^= _[G];
          I(we), this.reset = !0;
        } else
          this.start = G;
      }
      return this;
    }, o.prototype.encode = function(p, C) {
      var N = p & 255, _ = 1, j = [N];
      for (p = p >> 8, N = p & 255; N > 0; )
        j.unshift(N), p = p >> 8, N = p & 255, ++_;
      return C ? j.push(_) : j.unshift(_), this.update(j), j.length;
    }, o.prototype.encodeString = function(p) {
      var C, N = typeof p;
      if (N !== "string") {
        if (N === "object") {
          if (p === null)
            throw new Error(e);
          if (m && p.constructor === ArrayBuffer)
            p = new Uint8Array(p);
          else if (!Array.isArray(p) && (!m || !ArrayBuffer.isView(p)))
            throw new Error(e);
        } else
          throw new Error(e);
        C = !0;
      }
      var _ = 0, j = p.length;
      if (C)
        _ = j;
      else
        for (var X = 0; X < p.length; ++X) {
          var z = p.charCodeAt(X);
          z < 128 ? _ += 1 : z < 2048 ? _ += 2 : z < 55296 || z >= 57344 ? _ += 3 : (z = 65536 + ((z & 1023) << 10 | p.charCodeAt(++X) & 1023), _ += 4);
        }
      return _ += this.encode(_ * 8), this.update(p), _;
    }, o.prototype.bytepad = function(p, C) {
      for (var N = this.encode(C), _ = 0; _ < p.length; ++_)
        N += this.encodeString(p[_]);
      var j = C - N % C, X = [];
      return X.length = j, this.update(X), this;
    }, o.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var p = this.blocks, C = this.lastByteIndex, N = this.blockCount, _ = this.s;
        if (p[C >> 2] |= this.padding[C & 3], this.lastByteIndex === this.byteCount)
          for (p[0] = p[N], C = 1; C < N + 1; ++C)
            p[C] = 0;
        for (p[N - 1] |= 2147483648, C = 0; C < N; ++C)
          _[C] ^= p[C];
        I(_);
      }
    }, o.prototype.toString = o.prototype.hex = function() {
      this.finalize();
      for (var p = this.blockCount, C = this.s, N = this.outputBlocks, _ = this.extraBytes, j = 0, X = 0, z = "", O; X < N; ) {
        for (j = 0; j < p && X < N; ++j, ++X)
          O = C[j], z += b[O >> 4 & 15] + b[O & 15] + b[O >> 12 & 15] + b[O >> 8 & 15] + b[O >> 20 & 15] + b[O >> 16 & 15] + b[O >> 28 & 15] + b[O >> 24 & 15];
        X % p === 0 && (I(C), j = 0);
      }
      return _ && (O = C[j], z += b[O >> 4 & 15] + b[O & 15], _ > 1 && (z += b[O >> 12 & 15] + b[O >> 8 & 15]), _ > 2 && (z += b[O >> 20 & 15] + b[O >> 16 & 15])), z;
    }, o.prototype.arrayBuffer = function() {
      this.finalize();
      var p = this.blockCount, C = this.s, N = this.outputBlocks, _ = this.extraBytes, j = 0, X = 0, z = this.outputBits >> 3, O;
      _ ? O = new ArrayBuffer(N + 1 << 2) : O = new ArrayBuffer(z);
      for (var we = new Uint32Array(O); X < N; ) {
        for (j = 0; j < p && X < N; ++j, ++X)
          we[X] = C[j];
        X % p === 0 && I(C);
      }
      return _ && (we[j] = C[j], O = O.slice(0, z)), O;
    }, o.prototype.buffer = o.prototype.arrayBuffer, o.prototype.digest = o.prototype.array = function() {
      this.finalize();
      for (var p = this.blockCount, C = this.s, N = this.outputBlocks, _ = this.extraBytes, j = 0, X = 0, z = [], O, we; X < N; ) {
        for (j = 0; j < p && X < N; ++j, ++X)
          O = X << 2, we = C[j], z[O] = we & 255, z[O + 1] = we >> 8 & 255, z[O + 2] = we >> 16 & 255, z[O + 3] = we >> 24 & 255;
        X % p === 0 && I(C);
      }
      return _ && (O = X << 2, we = C[j], z[O] = we & 255, _ > 1 && (z[O + 1] = we >> 8 & 255), _ > 2 && (z[O + 2] = we >> 16 & 255)), z;
    };
    function h(p, C, N) {
      o.call(this, p, C, N);
    }
    h.prototype = new o(), h.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), o.prototype.finalize.call(this);
    };
    var I = function(p) {
      var C, N, _, j, X, z, O, we, G, V, $e, fe, be, st, le, ye, it, ge, te, Ve, ve, xe, nt, Ce, Ee, wt, me, Ie, _t, Me, _e, Yt, Re, ke, jt, Ae, Se, Rt, De, Te, Wt, Ue, Be, Ht, Pe, Oe, zt, Ne, Le, Xt, je, M, ee, K, se, He, pe, de, Fe, et, Ze, Ye, ot;
      for (_ = 0; _ < 48; _ += 2)
        j = p[0] ^ p[10] ^ p[20] ^ p[30] ^ p[40], X = p[1] ^ p[11] ^ p[21] ^ p[31] ^ p[41], z = p[2] ^ p[12] ^ p[22] ^ p[32] ^ p[42], O = p[3] ^ p[13] ^ p[23] ^ p[33] ^ p[43], we = p[4] ^ p[14] ^ p[24] ^ p[34] ^ p[44], G = p[5] ^ p[15] ^ p[25] ^ p[35] ^ p[45], V = p[6] ^ p[16] ^ p[26] ^ p[36] ^ p[46], $e = p[7] ^ p[17] ^ p[27] ^ p[37] ^ p[47], fe = p[8] ^ p[18] ^ p[28] ^ p[38] ^ p[48], be = p[9] ^ p[19] ^ p[29] ^ p[39] ^ p[49], C = fe ^ (z << 1 | O >>> 31), N = be ^ (O << 1 | z >>> 31), p[0] ^= C, p[1] ^= N, p[10] ^= C, p[11] ^= N, p[20] ^= C, p[21] ^= N, p[30] ^= C, p[31] ^= N, p[40] ^= C, p[41] ^= N, C = j ^ (we << 1 | G >>> 31), N = X ^ (G << 1 | we >>> 31), p[2] ^= C, p[3] ^= N, p[12] ^= C, p[13] ^= N, p[22] ^= C, p[23] ^= N, p[32] ^= C, p[33] ^= N, p[42] ^= C, p[43] ^= N, C = z ^ (V << 1 | $e >>> 31), N = O ^ ($e << 1 | V >>> 31), p[4] ^= C, p[5] ^= N, p[14] ^= C, p[15] ^= N, p[24] ^= C, p[25] ^= N, p[34] ^= C, p[35] ^= N, p[44] ^= C, p[45] ^= N, C = we ^ (fe << 1 | be >>> 31), N = G ^ (be << 1 | fe >>> 31), p[6] ^= C, p[7] ^= N, p[16] ^= C, p[17] ^= N, p[26] ^= C, p[27] ^= N, p[36] ^= C, p[37] ^= N, p[46] ^= C, p[47] ^= N, C = V ^ (j << 1 | X >>> 31), N = $e ^ (X << 1 | j >>> 31), p[8] ^= C, p[9] ^= N, p[18] ^= C, p[19] ^= N, p[28] ^= C, p[29] ^= N, p[38] ^= C, p[39] ^= N, p[48] ^= C, p[49] ^= N, st = p[0], le = p[1], Oe = p[11] << 4 | p[10] >>> 28, zt = p[10] << 4 | p[11] >>> 28, Ie = p[20] << 3 | p[21] >>> 29, _t = p[21] << 3 | p[20] >>> 29, et = p[31] << 9 | p[30] >>> 23, Ze = p[30] << 9 | p[31] >>> 23, Ue = p[40] << 18 | p[41] >>> 14, Be = p[41] << 18 | p[40] >>> 14, ke = p[2] << 1 | p[3] >>> 31, jt = p[3] << 1 | p[2] >>> 31, ye = p[13] << 12 | p[12] >>> 20, it = p[12] << 12 | p[13] >>> 20, Ne = p[22] << 10 | p[23] >>> 22, Le = p[23] << 10 | p[22] >>> 22, Me = p[33] << 13 | p[32] >>> 19, _e = p[32] << 13 | p[33] >>> 19, Ye = p[42] << 2 | p[43] >>> 30, ot = p[43] << 2 | p[42] >>> 30, K = p[5] << 30 | p[4] >>> 2, se = p[4] << 30 | p[5] >>> 2, Ae = p[14] << 6 | p[15] >>> 26, Se = p[15] << 6 | p[14] >>> 26, ge = p[25] << 11 | p[24] >>> 21, te = p[24] << 11 | p[25] >>> 21, Xt = p[34] << 15 | p[35] >>> 17, je = p[35] << 15 | p[34] >>> 17, Yt = p[45] << 29 | p[44] >>> 3, Re = p[44] << 29 | p[45] >>> 3, Ce = p[6] << 28 | p[7] >>> 4, Ee = p[7] << 28 | p[6] >>> 4, He = p[17] << 23 | p[16] >>> 9, pe = p[16] << 23 | p[17] >>> 9, Rt = p[26] << 25 | p[27] >>> 7, De = p[27] << 25 | p[26] >>> 7, Ve = p[36] << 21 | p[37] >>> 11, ve = p[37] << 21 | p[36] >>> 11, M = p[47] << 24 | p[46] >>> 8, ee = p[46] << 24 | p[47] >>> 8, Ht = p[8] << 27 | p[9] >>> 5, Pe = p[9] << 27 | p[8] >>> 5, wt = p[18] << 20 | p[19] >>> 12, me = p[19] << 20 | p[18] >>> 12, de = p[29] << 7 | p[28] >>> 25, Fe = p[28] << 7 | p[29] >>> 25, Te = p[38] << 8 | p[39] >>> 24, Wt = p[39] << 8 | p[38] >>> 24, xe = p[48] << 14 | p[49] >>> 18, nt = p[49] << 14 | p[48] >>> 18, p[0] = st ^ ~ye & ge, p[1] = le ^ ~it & te, p[10] = Ce ^ ~wt & Ie, p[11] = Ee ^ ~me & _t, p[20] = ke ^ ~Ae & Rt, p[21] = jt ^ ~Se & De, p[30] = Ht ^ ~Oe & Ne, p[31] = Pe ^ ~zt & Le, p[40] = K ^ ~He & de, p[41] = se ^ ~pe & Fe, p[2] = ye ^ ~ge & Ve, p[3] = it ^ ~te & ve, p[12] = wt ^ ~Ie & Me, p[13] = me ^ ~_t & _e, p[22] = Ae ^ ~Rt & Te, p[23] = Se ^ ~De & Wt, p[32] = Oe ^ ~Ne & Xt, p[33] = zt ^ ~Le & je, p[42] = He ^ ~de & et, p[43] = pe ^ ~Fe & Ze, p[4] = ge ^ ~Ve & xe, p[5] = te ^ ~ve & nt, p[14] = Ie ^ ~Me & Yt, p[15] = _t ^ ~_e & Re, p[24] = Rt ^ ~Te & Ue, p[25] = De ^ ~Wt & Be, p[34] = Ne ^ ~Xt & M, p[35] = Le ^ ~je & ee, p[44] = de ^ ~et & Ye, p[45] = Fe ^ ~Ze & ot, p[6] = Ve ^ ~xe & st, p[7] = ve ^ ~nt & le, p[16] = Me ^ ~Yt & Ce, p[17] = _e ^ ~Re & Ee, p[26] = Te ^ ~Ue & ke, p[27] = Wt ^ ~Be & jt, p[36] = Xt ^ ~M & Ht, p[37] = je ^ ~ee & Pe, p[46] = et ^ ~Ye & K, p[47] = Ze ^ ~ot & se, p[8] = xe ^ ~st & ye, p[9] = nt ^ ~le & it, p[18] = Yt ^ ~Ce & wt, p[19] = Re ^ ~Ee & me, p[28] = Ue ^ ~ke & Ae, p[29] = Be ^ ~jt & Se, p[38] = M ^ ~Ht & Oe, p[39] = ee ^ ~Pe & zt, p[48] = Ye ^ ~K & He, p[49] = ot ^ ~se & pe, p[0] ^= F[_], p[1] ^= F[_ + 1];
    };
    if (d)
      t.exports = s;
    else
      for (u = 0; u < f.length; ++u)
        a[f[u]] = s[f[u]];
  })();
})(nf);
const K1 = nf.exports;
function rt(t) {
  return "0x" + K1.keccak_256(oe(t));
}
const q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  keccak256: rt
}, Symbol.toStringTag, { value: "Module" })), Z1 = "rlp/5.7.0", wr = new q(Z1);
function g0(t) {
  const e = [];
  for (; t; )
    e.unshift(t & 255), t >>= 8;
  return e;
}
function x0(t, e, r) {
  let n = 0;
  for (let a = 0; a < r; a++)
    n = n * 256 + t[e + a];
  return n;
}
function af(t) {
  if (Array.isArray(t)) {
    let n = [];
    if (t.forEach(function(i) {
      n = n.concat(af(i));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const a = g0(n.length);
    return a.unshift(247 + a.length), a.concat(n);
  }
  Ka(t) || wr.throwArgumentError("RLP object must be BytesLike", "object", t);
  const e = Array.prototype.slice.call(oe(t));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const r = g0(e.length);
  return r.unshift(183 + r.length), r.concat(e);
}
function Mn(t) {
  return he(af(t));
}
function y0(t, e, r, n) {
  const a = [];
  for (; r < e + 1 + n; ) {
    const i = sf(t, r);
    a.push(i.result), r += i.consumed, r > e + 1 + n && wr.throwError("child data too short", q.errors.BUFFER_OVERRUN, {});
  }
  return { consumed: 1 + n, result: a };
}
function sf(t, e) {
  if (t.length === 0 && wr.throwError("data too short", q.errors.BUFFER_OVERRUN, {}), t[e] >= 248) {
    const r = t[e] - 247;
    e + 1 + r > t.length && wr.throwError("data short segment too short", q.errors.BUFFER_OVERRUN, {});
    const n = x0(t, e + 1, r);
    return e + 1 + r + n > t.length && wr.throwError("data long segment too short", q.errors.BUFFER_OVERRUN, {}), y0(t, e, e + 1 + r, r + n);
  } else if (t[e] >= 192) {
    const r = t[e] - 192;
    return e + 1 + r > t.length && wr.throwError("data array too short", q.errors.BUFFER_OVERRUN, {}), y0(t, e, e + 1, r);
  } else if (t[e] >= 184) {
    const r = t[e] - 183;
    e + 1 + r > t.length && wr.throwError("data array too short", q.errors.BUFFER_OVERRUN, {});
    const n = x0(t, e + 1, r);
    e + 1 + r + n > t.length && wr.throwError("data array too short", q.errors.BUFFER_OVERRUN, {});
    const a = he(t.slice(e + 1 + r, e + 1 + r + n));
    return { consumed: 1 + r + n, result: a };
  } else if (t[e] >= 128) {
    const r = t[e] - 128;
    e + 1 + r > t.length && wr.throwError("data too short", q.errors.BUFFER_OVERRUN, {});
    const n = he(t.slice(e + 1, e + 1 + r));
    return { consumed: 1 + r, result: n };
  }
  return { consumed: 1, result: he(t[e]) };
}
function Oi(t) {
  const e = oe(t), r = sf(e, 0);
  return r.consumed !== e.length && wr.throwArgumentError("invalid rlp data", "data", t), r.result;
}
const Y1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  encode: Mn,
  decode: Oi
}, Symbol.toStringTag, { value: "Module" })), X1 = "address/5.7.0", en = new q(X1);
function v0(t) {
  dt(t, 20) || en.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
  const e = t.substring(2).split(""), r = new Uint8Array(40);
  for (let a = 0; a < 40; a++)
    r[a] = e[a].charCodeAt(0);
  const n = oe(rt(r));
  for (let a = 0; a < 40; a += 2)
    n[a >> 1] >> 4 >= 8 && (e[a] = e[a].toUpperCase()), (n[a >> 1] & 15) >= 8 && (e[a + 1] = e[a + 1].toUpperCase());
  return "0x" + e.join("");
}
const J1 = 9007199254740991;
function Q1(t) {
  return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
}
const io = {};
for (let t = 0; t < 10; t++)
  io[String(t)] = String(t);
for (let t = 0; t < 26; t++)
  io[String.fromCharCode(65 + t)] = String(10 + t);
const w0 = Math.floor(Q1(J1));
function of(t) {
  t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
  let e = t.split("").map((n) => io[n]).join("");
  for (; e.length >= w0; ) {
    let n = e.substring(0, w0);
    e = parseInt(n, 10) % 97 + e.substring(n.length);
  }
  let r = String(98 - parseInt(e, 10) % 97);
  for (; r.length < 2; )
    r = "0" + r;
  return r;
}
function at(t) {
  let e = null;
  if (typeof t != "string" && en.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/))
    t.substring(0, 2) !== "0x" && (t = "0x" + t), e = v0(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && en.throwArgumentError("bad address checksum", "address", t);
  else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (t.substring(2, 4) !== of(t) && en.throwArgumentError("bad icap checksum", "address", t), e = T1(t.substring(4)); e.length < 40; )
      e = "0" + e;
    e = v0("0x" + e);
  } else
    en.throwArgumentError("invalid address", "address", t);
  return e;
}
function eh(t) {
  try {
    return at(t), !0;
  } catch {
  }
  return !1;
}
function th(t) {
  let e = U1(at(t).substring(2)).toUpperCase();
  for (; e.length < 30; )
    e = "0" + e;
  return "XE" + of("XE00" + e) + e;
}
function cf(t) {
  let e = null;
  try {
    e = at(t.from);
  } catch {
    en.throwArgumentError("missing from address", "transaction", t);
  }
  const r = Dr(oe(ue.from(t.nonce).toHexString()));
  return at($r(rt(Mn([e, r])), 12));
}
function rh(t, e, r) {
  return Ra(e) !== 32 && en.throwArgumentError("salt must be 32 bytes", "salt", e), Ra(r) !== 32 && en.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), at($r(rt(pt(["0xff", at(t), e, r])), 12));
}
const nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAddress: at,
  isAddress: eh,
  getIcapAddress: th,
  getContractAddress: cf,
  getCreate2Address: rh
}, Symbol.toStringTag, { value: "Module" }));
class ah extends Kr {
  constructor(e) {
    super("address", "address", e, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(e, r) {
    try {
      r = at(r);
    } catch (n) {
      this._throwError(n.message, r);
    }
    return e.writeValue(r);
  }
  decode(e) {
    return at(bt(e.readValue().toHexString(), 20));
  }
}
class ih extends Kr {
  constructor(e) {
    super(e.name, e.type, void 0, e.dynamic), this.coder = e;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(e, r) {
    return this.coder.encode(e, r);
  }
  decode(e) {
    return this.coder.decode(e);
  }
}
const Gn = new q(qa);
function ff(t, e, r) {
  let n = null;
  if (Array.isArray(r))
    n = r;
  else if (r && typeof r == "object") {
    let m = {};
    n = e.map((b) => {
      const v = b.localName;
      return v || Gn.throwError("cannot encode object for signature with missing names", q.errors.INVALID_ARGUMENT, {
        argument: "values",
        coder: b,
        value: r
      }), m[v] && Gn.throwError("cannot encode object for signature with duplicate names", q.errors.INVALID_ARGUMENT, {
        argument: "values",
        coder: b,
        value: r
      }), m[v] = !0, r[v];
    });
  } else
    Gn.throwArgumentError("invalid tuple value", "tuple", r);
  e.length !== n.length && Gn.throwArgumentError("types/value length mismatch", "tuple", r);
  let a = new _s(t.wordSize), i = new _s(t.wordSize), c = [];
  e.forEach((m, b) => {
    let v = n[b];
    if (m.dynamic) {
      let A = i.length;
      m.encode(i, v);
      let S = a.writeUpdatableValue();
      c.push((D) => {
        S(D + A);
      });
    } else
      m.encode(a, v);
  }), c.forEach((m) => {
    m(a.length);
  });
  let d = t.appendWriter(a);
  return d += t.appendWriter(i), d;
}
function df(t, e) {
  let r = [], n = t.subReader(0);
  e.forEach((i) => {
    let c = null;
    if (i.dynamic) {
      let d = t.readValue(), m = n.subReader(d.toNumber());
      try {
        c = i.decode(m);
      } catch (b) {
        if (b.code === q.errors.BUFFER_OVERRUN)
          throw b;
        c = b, c.baseType = i.name, c.name = i.localName, c.type = i.type;
      }
    } else
      try {
        c = i.decode(t);
      } catch (d) {
        if (d.code === q.errors.BUFFER_OVERRUN)
          throw d;
        c = d, c.baseType = i.name, c.name = i.localName, c.type = i.type;
      }
    c != null && r.push(c);
  });
  const a = e.reduce((i, c) => {
    const d = c.localName;
    return d && (i[d] || (i[d] = 0), i[d]++), i;
  }, {});
  e.forEach((i, c) => {
    let d = i.localName;
    if (!d || a[d] !== 1 || (d === "length" && (d = "_length"), r[d] != null))
      return;
    const m = r[c];
    m instanceof Error ? Object.defineProperty(r, d, {
      enumerable: !0,
      get: () => {
        throw m;
      }
    }) : r[d] = m;
  });
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    c instanceof Error && Object.defineProperty(r, i, {
      enumerable: !0,
      get: () => {
        throw c;
      }
    });
  }
  return Object.freeze(r);
}
class sh extends Kr {
  constructor(e, r, n) {
    const a = e.type + "[" + (r >= 0 ? r : "") + "]", i = r === -1 || e.dynamic;
    super("array", a, n, i), this.coder = e, this.length = r;
  }
  defaultValue() {
    const e = this.coder.defaultValue(), r = [];
    for (let n = 0; n < this.length; n++)
      r.push(e);
    return r;
  }
  encode(e, r) {
    Array.isArray(r) || this._throwError("expected array value", r);
    let n = this.length;
    n === -1 && (n = r.length, e.writeValue(r.length)), Gn.checkArgumentCount(r.length, n, "coder array" + (this.localName ? " " + this.localName : ""));
    let a = [];
    for (let i = 0; i < r.length; i++)
      a.push(this.coder);
    return ff(e, a, r);
  }
  decode(e) {
    let r = this.length;
    r === -1 && (r = e.readValue().toNumber(), r * 32 > e._data.length && Gn.throwError("insufficient data length", q.errors.BUFFER_OVERRUN, {
      length: e._data.length,
      count: r
    }));
    let n = [];
    for (let a = 0; a < r; a++)
      n.push(new ih(this.coder));
    return e.coerce(this.name, df(e, n));
  }
}
class oh extends Kr {
  constructor(e) {
    super("bool", "bool", e, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(e, r) {
    return e.writeValue(r ? 1 : 0);
  }
  decode(e) {
    return e.coerce(this.type, !e.readValue().isZero());
  }
}
class lf extends Kr {
  constructor(e, r) {
    super(e, e, r, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(e, r) {
    r = oe(r);
    let n = e.writeValue(r.length);
    return n += e.writeBytes(r), n;
  }
  decode(e) {
    return e.readBytes(e.readValue().toNumber(), !0);
  }
}
class ch extends lf {
  constructor(e) {
    super("bytes", e);
  }
  decode(e) {
    return e.coerce(this.name, he(super.decode(e)));
  }
}
class fh extends Kr {
  constructor(e, r) {
    let n = "bytes" + String(e);
    super(n, n, r, !1), this.size = e;
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(e, r) {
    let n = oe(r);
    return n.length !== this.size && this._throwError("incorrect data length", r), e.writeBytes(n);
  }
  decode(e) {
    return e.coerce(this.name, he(e.readBytes(this.size)));
  }
}
class dh extends Kr {
  constructor(e) {
    super("null", "", e, !1);
  }
  defaultValue() {
    return null;
  }
  encode(e, r) {
    return r != null && this._throwError("not null", r), e.writeBytes([]);
  }
  decode(e) {
    return e.readBytes(0), e.coerce(this.name, null);
  }
}
const lh = /* @__PURE__ */ ue.from(-1), hf = /* @__PURE__ */ ue.from(0), hh = /* @__PURE__ */ ue.from(1), uh = /* @__PURE__ */ ue.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), mh = "0x0000000000000000000000000000000000000000000000000000000000000000";
class ph extends Kr {
  constructor(e, r, n) {
    const a = (r ? "int" : "uint") + e * 8;
    super(a, a, n, !1), this.size = e, this.signed = r;
  }
  defaultValue() {
    return 0;
  }
  encode(e, r) {
    let n = ue.from(r), a = uh.mask(e.wordSize * 8);
    if (this.signed) {
      let i = a.mask(this.size * 8 - 1);
      (n.gt(i) || n.lt(i.add(hh).mul(lh))) && this._throwError("value out-of-bounds", r);
    } else
      (n.lt(hf) || n.gt(a.mask(this.size * 8))) && this._throwError("value out-of-bounds", r);
    return n = n.toTwos(this.size * 8).mask(this.size * 8), this.signed && (n = n.fromTwos(this.size * 8).toTwos(8 * e.wordSize)), e.writeValue(n);
  }
  decode(e) {
    let r = e.readValue().mask(this.size * 8);
    return this.signed && (r = r.fromTwos(this.size * 8)), e.coerce(this.name, r);
  }
}
const bh = "strings/5.7.0", uf = new q(bh);
var Rr;
(function(t) {
  t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD";
})(Rr || (Rr = {}));
var Pt;
(function(t) {
  t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation";
})(Pt || (Pt = {}));
function gh(t, e, r, n, a) {
  return uf.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r);
}
function mf(t, e, r, n, a) {
  if (t === Pt.BAD_PREFIX || t === Pt.UNEXPECTED_CONTINUE) {
    let i = 0;
    for (let c = e + 1; c < r.length && r[c] >> 6 === 2; c++)
      i++;
    return i;
  }
  return t === Pt.OVERRUN ? r.length - e - 1 : 0;
}
function xh(t, e, r, n, a) {
  return t === Pt.OVERLONG ? (n.push(a), 0) : (n.push(65533), mf(t, e, r));
}
const pf = Object.freeze({
  error: gh,
  ignore: mf,
  replace: xh
});
function so(t, e) {
  e == null && (e = pf.error), t = oe(t);
  const r = [];
  let n = 0;
  for (; n < t.length; ) {
    const a = t[n++];
    if (a >> 7 === 0) {
      r.push(a);
      continue;
    }
    let i = null, c = null;
    if ((a & 224) === 192)
      i = 1, c = 127;
    else if ((a & 240) === 224)
      i = 2, c = 2047;
    else if ((a & 248) === 240)
      i = 3, c = 65535;
    else {
      (a & 192) === 128 ? n += e(Pt.UNEXPECTED_CONTINUE, n - 1, t, r) : n += e(Pt.BAD_PREFIX, n - 1, t, r);
      continue;
    }
    if (n - 1 + i >= t.length) {
      n += e(Pt.OVERRUN, n - 1, t, r);
      continue;
    }
    let d = a & (1 << 8 - i - 1) - 1;
    for (let m = 0; m < i; m++) {
      let b = t[n];
      if ((b & 192) != 128) {
        n += e(Pt.MISSING_CONTINUE, n, t, r), d = null;
        break;
      }
      d = d << 6 | b & 63, n++;
    }
    if (d !== null) {
      if (d > 1114111) {
        n += e(Pt.OUT_OF_RANGE, n - 1 - i, t, r, d);
        continue;
      }
      if (d >= 55296 && d <= 57343) {
        n += e(Pt.UTF16_SURROGATE, n - 1 - i, t, r, d);
        continue;
      }
      if (d <= c) {
        n += e(Pt.OVERLONG, n - 1 - i, t, r, d);
        continue;
      }
      r.push(d);
    }
  }
  return r;
}
function yt(t, e = Rr.current) {
  e != Rr.current && (uf.checkNormalize(), t = t.normalize(e));
  let r = [];
  for (let n = 0; n < t.length; n++) {
    const a = t.charCodeAt(n);
    if (a < 128)
      r.push(a);
    else if (a < 2048)
      r.push(a >> 6 | 192), r.push(a & 63 | 128);
    else if ((a & 64512) == 55296) {
      n++;
      const i = t.charCodeAt(n);
      if (n >= t.length || (i & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const c = 65536 + ((a & 1023) << 10) + (i & 1023);
      r.push(c >> 18 | 240), r.push(c >> 12 & 63 | 128), r.push(c >> 6 & 63 | 128), r.push(c & 63 | 128);
    } else
      r.push(a >> 12 | 224), r.push(a >> 6 & 63 | 128), r.push(a & 63 | 128);
  }
  return oe(r);
}
function ss(t) {
  const e = "0000" + t.toString(16);
  return "\\u" + e.substring(e.length - 4);
}
function yh(t, e) {
  return '"' + so(t, e).map((r) => {
    if (r < 256) {
      switch (r) {
        case 8:
          return "\\b";
        case 9:
          return "\\t";
        case 10:
          return "\\n";
        case 13:
          return "\\r";
        case 34:
          return '\\"';
        case 92:
          return "\\\\";
      }
      if (r >= 32 && r < 127)
        return String.fromCharCode(r);
    }
    return r <= 65535 ? ss(r) : (r -= 65536, ss((r >> 10 & 1023) + 55296) + ss((r & 1023) + 56320));
  }).join("") + '"';
}
function Rs(t) {
  return t.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
}
function da(t, e) {
  return Rs(so(t, e));
}
function Di(t, e = Rr.current) {
  return so(yt(t, e));
}
function vh(t) {
  const e = yt(t);
  if (e.length > 31)
    throw new Error("bytes32 string must be less than 32 bytes");
  return he(pt([e, mh]).slice(0, 32));
}
function wh(t) {
  const e = oe(t);
  if (e.length !== 32)
    throw new Error("invalid bytes32 - not 32 bytes long");
  if (e[31] !== 0)
    throw new Error("invalid bytes32 string - no null terminator");
  let r = 31;
  for (; e[r - 1] === 0; )
    r--;
  return da(e.slice(0, r));
}
function Ah(t) {
  if (t.length % 4 !== 0)
    throw new Error("bad data");
  let e = [];
  for (let r = 0; r < t.length; r += 4)
    e.push(parseInt(t.substring(r, r + 4), 16));
  return e;
}
function oo(t, e) {
  e || (e = function(a) {
    return [parseInt(a, 16)];
  });
  let r = 0, n = {};
  return t.split(",").forEach((a) => {
    let i = a.split(":");
    r += parseInt(i[0], 16), n[r] = e(i[1]);
  }), n;
}
function bf(t) {
  let e = 0;
  return t.split(",").map((r) => {
    let n = r.split("-");
    n.length === 1 ? n[1] = "0" : n[1] === "" && (n[1] = "1");
    let a = e + parseInt(n[0], 16);
    return e = parseInt(n[1], 16), { l: a, h: e };
  });
}
function co(t, e) {
  let r = 0;
  for (let n = 0; n < e.length; n++) {
    let a = e[n];
    if (r += a.l, t >= r && t <= r + a.h && (t - r) % (a.d || 1) === 0) {
      if (a.e && a.e.indexOf(t - r) !== -1)
        continue;
      return a;
    }
  }
  return null;
}
const Ch = bf("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), Eh = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((t) => parseInt(t, 16)), Ih = [
  { h: 25, s: 32, l: 65 },
  { h: 30, s: 32, e: [23], l: 127 },
  { h: 54, s: 1, e: [48], l: 64, d: 2 },
  { h: 14, s: 1, l: 57, d: 2 },
  { h: 44, s: 1, l: 17, d: 2 },
  { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
  { h: 16, s: 1, l: 68, d: 2 },
  { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
  { h: 26, s: 32, e: [17], l: 435 },
  { h: 22, s: 1, l: 71, d: 2 },
  { h: 15, s: 80, l: 40 },
  { h: 31, s: 32, l: 16 },
  { h: 32, s: 1, l: 80, d: 2 },
  { h: 52, s: 1, l: 42, d: 2 },
  { h: 12, s: 1, l: 55, d: 2 },
  { h: 40, s: 1, e: [38], l: 15, d: 2 },
  { h: 14, s: 1, l: 48, d: 2 },
  { h: 37, s: 48, l: 49 },
  { h: 148, s: 1, l: 6351, d: 2 },
  { h: 88, s: 1, l: 160, d: 2 },
  { h: 15, s: 16, l: 704 },
  { h: 25, s: 26, l: 854 },
  { h: 25, s: 32, l: 55915 },
  { h: 37, s: 40, l: 1247 },
  { h: 25, s: -119711, l: 53248 },
  { h: 25, s: -119763, l: 52 },
  { h: 25, s: -119815, l: 52 },
  { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
  { h: 25, s: -119919, l: 52 },
  { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
  { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
  { h: 25, s: -120075, l: 52 },
  { h: 25, s: -120127, l: 52 },
  { h: 25, s: -120179, l: 52 },
  { h: 25, s: -120231, l: 52 },
  { h: 25, s: -120283, l: 52 },
  { h: 25, s: -120335, l: 52 },
  { h: 24, s: -119543, e: [17], l: 56 },
  { h: 24, s: -119601, e: [17], l: 58 },
  { h: 24, s: -119659, e: [17], l: 58 },
  { h: 24, s: -119717, e: [17], l: 58 },
  { h: 24, s: -119775, e: [17], l: 58 }
], kh = oo("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Sh = oo("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Dh = oo("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", Ah), Bh = bf("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function Fh(t) {
  return t.reduce((e, r) => (r.forEach((n) => {
    e.push(n);
  }), e), []);
}
function Mh(t) {
  return !!co(t, Ch);
}
function _h(t) {
  let e = co(t, Ih);
  if (e)
    return [t + e.s];
  let r = kh[t];
  if (r)
    return r;
  let n = Sh[t];
  if (n)
    return [t + n[0]];
  let a = Dh[t];
  return a || null;
}
function Rh(t) {
  return !!co(t, Bh);
}
function Th(t) {
  if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59)
    return t.toLowerCase();
  let e = Di(t);
  e = Fh(e.map((n) => {
    if (Eh.indexOf(n) >= 0)
      return [];
    if (n >= 65024 && n <= 65039)
      return [];
    let a = _h(n);
    return a || [n];
  })), e = Di(Rs(e), Rr.NFKC), e.forEach((n) => {
    if (Rh(n))
      throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
  }), e.forEach((n) => {
    if (Mh(n))
      throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
  });
  let r = Rs(e);
  if (r.substring(0, 1) === "-" || r.substring(2, 4) === "--" || r.substring(r.length - 1) === "-")
    throw new Error("invalid hyphen");
  return r;
}
const Uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _toEscapedUtf8String: yh,
  toUtf8Bytes: yt,
  toUtf8CodePoints: Di,
  toUtf8String: da,
  Utf8ErrorFuncs: pf,
  get Utf8ErrorReason() {
    return Pt;
  },
  get UnicodeNormalizationForm() {
    return Rr;
  },
  formatBytes32String: vh,
  parseBytes32String: wh,
  nameprep: Th
}, Symbol.toStringTag, { value: "Module" }));
class Ph extends lf {
  constructor(e) {
    super("string", e);
  }
  defaultValue() {
    return "";
  }
  encode(e, r) {
    return super.encode(e, yt(r));
  }
  decode(e) {
    return da(super.decode(e));
  }
}
class si extends Kr {
  constructor(e, r) {
    let n = !1;
    const a = [];
    e.forEach((c) => {
      c.dynamic && (n = !0), a.push(c.type);
    });
    const i = "tuple(" + a.join(",") + ")";
    super("tuple", i, r, n), this.coders = e;
  }
  defaultValue() {
    const e = [];
    this.coders.forEach((n) => {
      e.push(n.defaultValue());
    });
    const r = this.coders.reduce((n, a) => {
      const i = a.localName;
      return i && (n[i] || (n[i] = 0), n[i]++), n;
    }, {});
    return this.coders.forEach((n, a) => {
      let i = n.localName;
      !i || r[i] !== 1 || (i === "length" && (i = "_length"), e[i] == null && (e[i] = e[a]));
    }), Object.freeze(e);
  }
  encode(e, r) {
    return ff(e, this.coders, r);
  }
  decode(e) {
    return e.coerce(this.name, df(e, this.coders));
  }
}
const oi = new q(qa), Oh = new RegExp(/^bytes([0-9]*)$/), Nh = new RegExp(/^(u?int)([0-9]*)$/);
class gf {
  constructor(e) {
    ae(this, "coerceFunc", e || null);
  }
  _getCoder(e) {
    switch (e.baseType) {
      case "address":
        return new ah(e.name);
      case "bool":
        return new oh(e.name);
      case "string":
        return new Ph(e.name);
      case "bytes":
        return new ch(e.name);
      case "array":
        return new sh(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
      case "tuple":
        return new si((e.components || []).map((n) => this._getCoder(n)), e.name);
      case "":
        return new dh(e.name);
    }
    let r = e.type.match(Nh);
    if (r) {
      let n = parseInt(r[2] || "256");
      return (n === 0 || n > 256 || n % 8 !== 0) && oi.throwArgumentError("invalid " + r[1] + " bit length", "param", e), new ph(n / 8, r[1] === "int", e.name);
    }
    if (r = e.type.match(Oh), r) {
      let n = parseInt(r[1]);
      return (n === 0 || n > 32) && oi.throwArgumentError("invalid bytes length", "param", e), new fh(n, e.name);
    }
    return oi.throwArgumentError("invalid type", "type", e.type);
  }
  _getWordSize() {
    return 32;
  }
  _getReader(e, r) {
    return new Si(e, this._getWordSize(), this.coerceFunc, r);
  }
  _getWriter() {
    return new _s(this._getWordSize());
  }
  getDefaultValue(e) {
    const r = e.map((a) => this._getCoder(xt.from(a)));
    return new si(r, "_").defaultValue();
  }
  encode(e, r) {
    e.length !== r.length && oi.throwError("types/values length mismatch", q.errors.INVALID_ARGUMENT, {
      count: { types: e.length, values: r.length },
      value: { types: e, values: r }
    });
    const n = e.map((c) => this._getCoder(xt.from(c))), a = new si(n, "_"), i = this._getWriter();
    return a.encode(i, r), i.data;
  }
  decode(e, r, n) {
    const a = e.map((c) => this._getCoder(xt.from(c)));
    return new si(a, "_").decode(this._getReader(oe(r), n));
  }
}
const xf = new gf();
function tn(t) {
  return rt(yt(t));
}
const yf = "hash/5.7.0";
function fo(t) {
  t = atob(t);
  const e = [];
  for (let r = 0; r < t.length; r++)
    e.push(t.charCodeAt(r));
  return oe(e);
}
function vf(t) {
  t = oe(t);
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return btoa(e);
}
const Lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: fo,
  encode: vf
}, Symbol.toStringTag, { value: "Module" }));
function wf(t, e) {
  e == null && (e = 1);
  const r = [], n = r.forEach, a = function(i, c) {
    n.call(i, function(d) {
      c > 0 && Array.isArray(d) ? a(d, c - 1) : r.push(d);
    });
  };
  return a(t, e), r;
}
function jh(t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    e[n[0]] = n[1];
  }
  return e;
}
function Wh(t) {
  let e = 0;
  function r() {
    return t[e++] << 8 | t[e++];
  }
  let n = r(), a = 1, i = [0, 1];
  for (let R = 1; R < n; R++)
    i.push(a += r());
  let c = r(), d = e;
  e += c;
  let m = 0, b = 0;
  function v() {
    return m == 0 && (b = b << 8 | t[e++], m = 8), b >> --m & 1;
  }
  const A = 31, S = Math.pow(2, A), D = S >>> 1, B = D >> 1, F = S - 1;
  let k = 0;
  for (let R = 0; R < A; R++)
    k = k << 1 | v();
  let T = [], U = 0, H = S;
  for (; ; ) {
    let R = Math.floor(((k - U + 1) * a - 1) / H), W = 0, Z = n;
    for (; Z - W > 1; ) {
      let ce = W + Z >>> 1;
      R < i[ce] ? Z = ce : W = ce;
    }
    if (W == 0)
      break;
    T.push(W);
    let Y = U + Math.floor(H * i[W] / a), ne = U + Math.floor(H * i[W + 1] / a) - 1;
    for (; ((Y ^ ne) & D) == 0; )
      k = k << 1 & F | v(), Y = Y << 1 & F, ne = ne << 1 & F | 1;
    for (; Y & ~ne & B; )
      k = k & D | k << 1 & F >>> 1 | v(), Y = Y << 1 ^ D, ne = (ne ^ D) << 1 | D | 1;
    U = Y, H = 1 + ne - Y;
  }
  let P = n - 4;
  return T.map((R) => {
    switch (R - P) {
      case 3:
        return P + 65792 + (t[d++] << 16 | t[d++] << 8 | t[d++]);
      case 2:
        return P + 256 + (t[d++] << 8 | t[d++]);
      case 1:
        return P + t[d++];
      default:
        return R - 1;
    }
  });
}
function Hh(t) {
  let e = 0;
  return () => t[e++];
}
function zh(t) {
  return Hh(Wh(t));
}
function $h(t) {
  return t & 1 ? ~t >> 1 : t >> 1;
}
function Vh(t, e) {
  let r = Array(t);
  for (let n = 0; n < t; n++)
    r[n] = 1 + e();
  return r;
}
function A0(t, e) {
  let r = Array(t);
  for (let n = 0, a = -1; n < t; n++)
    r[n] = a += 1 + e();
  return r;
}
function Gh(t, e) {
  let r = Array(t);
  for (let n = 0, a = 0; n < t; n++)
    r[n] = a += $h(e());
  return r;
}
function Bi(t, e) {
  let r = A0(t(), t), n = t(), a = A0(n, t), i = Vh(n, t);
  for (let c = 0; c < n; c++)
    for (let d = 0; d < i[c]; d++)
      r.push(a[c] + d);
  return e ? r.map((c) => e[c]) : r;
}
function Kh(t) {
  let e = [];
  for (; ; ) {
    let r = t();
    if (r == 0)
      break;
    e.push(Zh(r, t));
  }
  for (; ; ) {
    let r = t() - 1;
    if (r < 0)
      break;
    e.push(Yh(r, t));
  }
  return jh(wf(e));
}
function qh(t) {
  let e = [];
  for (; ; ) {
    let r = t();
    if (r == 0)
      break;
    e.push(r);
  }
  return e;
}
function Af(t, e, r) {
  let n = Array(t).fill(void 0).map(() => []);
  for (let a = 0; a < e; a++)
    Gh(t, r).forEach((i, c) => n[c].push(i));
  return n;
}
function Zh(t, e) {
  let r = 1 + e(), n = e(), a = qh(e), i = Af(a.length, 1 + t, e);
  return wf(i.map((c, d) => {
    const m = c[0], b = c.slice(1);
    return Array(a[d]).fill(void 0).map((v, A) => {
      let S = A * n;
      return [m + A * r, b.map((D) => D + S)];
    });
  }));
}
function Yh(t, e) {
  let r = 1 + e();
  return Af(r, 1 + t, e).map((a) => [a[0], a.slice(1)]);
}
function Xh(t) {
  let e = Bi(t).sort((n, a) => n - a);
  return r();
  function r() {
    let n = [];
    for (; ; ) {
      let b = Bi(t, e);
      if (b.length == 0)
        break;
      n.push({ set: new Set(b), node: r() });
    }
    n.sort((b, v) => v.set.size - b.set.size);
    let a = t(), i = a % 3;
    a = a / 3 | 0;
    let c = !!(a & 1);
    a >>= 1;
    let d = a == 1, m = a == 2;
    return { branches: n, valid: i, fe0f: c, save: d, check: m };
  }
}
function Jh() {
  return zh(fo("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
const Ni = Jh(), Qh = new Set(Bi(Ni)), eu = new Set(Bi(Ni)), tu = Kh(Ni), ru = Xh(Ni), C0 = 45, E0 = 95;
function Cf(t) {
  return Di(t);
}
function nu(t) {
  return t.filter((e) => e != 65039);
}
function Ef(t) {
  for (let e of t.split(".")) {
    let r = Cf(e);
    try {
      for (let n = r.lastIndexOf(E0) - 1; n >= 0; n--)
        if (r[n] !== E0)
          throw new Error("underscore only allowed at start");
      if (r.length >= 4 && r.every((n) => n < 128) && r[2] === C0 && r[3] === C0)
        throw new Error("invalid label extension");
    } catch (n) {
      throw new Error(`Invalid label "${e}": ${n.message}`);
    }
  }
  return t;
}
function au(t) {
  return Ef(iu(t, nu));
}
function iu(t, e) {
  let r = Cf(t).reverse(), n = [];
  for (; r.length; ) {
    let a = ou(r);
    if (a) {
      n.push(...e(a));
      continue;
    }
    let i = r.pop();
    if (Qh.has(i)) {
      n.push(i);
      continue;
    }
    if (eu.has(i))
      continue;
    let c = tu[i];
    if (c) {
      n.push(...c);
      continue;
    }
    throw new Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`);
  }
  return Ef(su(String.fromCodePoint(...n)));
}
function su(t) {
  return t.normalize("NFC");
}
function ou(t, e) {
  var r;
  let n = ru, a, i, c = [], d = t.length;
  for (e && (e.length = 0); d; ) {
    let m = t[--d];
    if (n = (r = n.branches.find((b) => b.set.has(m))) === null || r === void 0 ? void 0 : r.node, !n)
      break;
    if (n.save)
      i = m;
    else if (n.check && m === i)
      break;
    c.push(m), n.fe0f && (c.push(65039), d > 0 && t[d - 1] == 65039 && d--), n.valid && (a = c.slice(), n.valid == 2 && a.splice(1, 1), e && e.push(...t.slice(d).reverse()), t.length = d);
  }
  return a;
}
const cu = new q(yf), If = new Uint8Array(32);
If.fill(0);
function I0(t) {
  if (t.length === 0)
    throw new Error("invalid ENS name; empty component");
  return t;
}
function Li(t) {
  const e = yt(au(t)), r = [];
  if (t.length === 0)
    return r;
  let n = 0;
  for (let a = 0; a < e.length; a++)
    e[a] === 46 && (r.push(I0(e.slice(n, a))), n = a + 1);
  if (n >= e.length)
    throw new Error("invalid ENS name; empty component");
  return r.push(I0(e.slice(n))), r;
}
function fu(t) {
  return Li(t).map((e) => da(e)).join(".");
}
function du(t) {
  try {
    return Li(t).length !== 0;
  } catch {
  }
  return !1;
}
function lu(t) {
  typeof t != "string" && cu.throwArgumentError("invalid ENS name; not a string", "name", t);
  let e = If;
  const r = Li(t);
  for (; r.length; )
    e = rt(pt([e, rt(r.pop())]));
  return he(e);
}
function hu(t) {
  return he(pt(Li(t).map((e) => {
    if (e.length > 63)
      throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
    const r = new Uint8Array(e.length + 1);
    return r.set(e, 1), r[0] = r.length - 1, r;
  }))) + "00";
}
const kf = `Ethereum Signed Message:
`;
function lo(t) {
  return typeof t == "string" && (t = yt(t)), rt(pt([
    yt(kf),
    yt(String(t.length)),
    t
  ]));
}
var uu = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(c) {
      c(i);
    });
  }
  return new (r || (r = Promise))(function(i, c) {
    function d(v) {
      try {
        b(n.next(v));
      } catch (A) {
        c(A);
      }
    }
    function m(v) {
      try {
        b(n.throw(v));
      } catch (A) {
        c(A);
      }
    }
    function b(v) {
      v.done ? i(v.value) : a(v.value).then(d, m);
    }
    b((n = n.apply(t, e || [])).next());
  });
};
const ft = new q(yf), Sf = new Uint8Array(32);
Sf.fill(0);
const mu = ue.from(-1), Df = ue.from(0), Bf = ue.from(1), pu = ue.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function bu(t) {
  const e = oe(t), r = e.length % 32;
  return r ? nn([e, Sf.slice(r)]) : he(e);
}
const gu = bt(Bf.toHexString(), 32), xu = bt(Df.toHexString(), 32), k0 = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, os = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function S0(t) {
  return function(e) {
    return typeof e != "string" && ft.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e;
  };
}
const yu = {
  name: S0("name"),
  version: S0("version"),
  chainId: function(t) {
    try {
      return ue.from(t).toString();
    } catch {
    }
    return ft.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t);
  },
  verifyingContract: function(t) {
    try {
      return at(t).toLowerCase();
    } catch {
    }
    return ft.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t);
  },
  salt: function(t) {
    try {
      const e = oe(t);
      if (e.length !== 32)
        throw new Error("bad length");
      return he(e);
    } catch {
    }
    return ft.throwArgumentError('invalid domain value "salt"', "domain.salt", t);
  }
};
function cs(t) {
  {
    const e = t.match(/^(u?)int(\d*)$/);
    if (e) {
      const r = e[1] === "", n = parseInt(e[2] || "256");
      (n % 8 !== 0 || n > 256 || e[2] && e[2] !== String(n)) && ft.throwArgumentError("invalid numeric width", "type", t);
      const a = pu.mask(r ? n - 1 : n), i = r ? a.add(Bf).mul(mu) : Df;
      return function(c) {
        const d = ue.from(c);
        return (d.lt(i) || d.gt(a)) && ft.throwArgumentError(`value out-of-bounds for ${t}`, "value", c), bt(d.toTwos(256).toHexString(), 32);
      };
    }
  }
  {
    const e = t.match(/^bytes(\d+)$/);
    if (e) {
      const r = parseInt(e[1]);
      return (r === 0 || r > 32 || e[1] !== String(r)) && ft.throwArgumentError("invalid bytes width", "type", t), function(n) {
        return oe(n).length !== r && ft.throwArgumentError(`invalid length for ${t}`, "value", n), bu(n);
      };
    }
  }
  switch (t) {
    case "address":
      return function(e) {
        return bt(at(e), 32);
      };
    case "bool":
      return function(e) {
        return e ? gu : xu;
      };
    case "bytes":
      return function(e) {
        return rt(e);
      };
    case "string":
      return function(e) {
        return tn(e);
      };
  }
  return null;
}
function D0(t, e) {
  return `${t}(${e.map(({ name: r, type: n }) => n + " " + r).join(",")})`;
}
class Dt {
  constructor(e) {
    ae(this, "types", Object.freeze(Bn(e))), ae(this, "_encoderCache", {}), ae(this, "_types", {});
    const r = {}, n = {}, a = {};
    Object.keys(e).forEach((d) => {
      r[d] = {}, n[d] = [], a[d] = {};
    });
    for (const d in e) {
      const m = {};
      e[d].forEach((b) => {
        m[b.name] && ft.throwArgumentError(`duplicate variable name ${JSON.stringify(b.name)} in ${JSON.stringify(d)}`, "types", e), m[b.name] = !0;
        const v = b.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
        v === d && ft.throwArgumentError(`circular type reference to ${JSON.stringify(v)}`, "types", e), !cs(v) && (n[v] || ft.throwArgumentError(`unknown type ${JSON.stringify(v)}`, "types", e), n[v].push(d), r[d][v] = !0);
      });
    }
    const i = Object.keys(n).filter((d) => n[d].length === 0);
    i.length === 0 ? ft.throwArgumentError("missing primary type", "types", e) : i.length > 1 && ft.throwArgumentError(`ambiguous primary types or unused types: ${i.map((d) => JSON.stringify(d)).join(", ")}`, "types", e), ae(this, "primaryType", i[0]);
    function c(d, m) {
      m[d] && ft.throwArgumentError(`circular type reference to ${JSON.stringify(d)}`, "types", e), m[d] = !0, Object.keys(r[d]).forEach((b) => {
        !n[b] || (c(b, m), Object.keys(m).forEach((v) => {
          a[v][b] = !0;
        }));
      }), delete m[d];
    }
    c(this.primaryType, {});
    for (const d in a) {
      const m = Object.keys(a[d]);
      m.sort(), this._types[d] = D0(d, e[d]) + m.map((b) => D0(b, e[b])).join("");
    }
  }
  getEncoder(e) {
    let r = this._encoderCache[e];
    return r || (r = this._encoderCache[e] = this._getEncoder(e)), r;
  }
  _getEncoder(e) {
    {
      const a = cs(e);
      if (a)
        return a;
    }
    const r = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (r) {
      const a = r[1], i = this.getEncoder(a), c = parseInt(r[3]);
      return (d) => {
        c >= 0 && d.length !== c && ft.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", d);
        let m = d.map(i);
        return this._types[a] && (m = m.map(rt)), rt(nn(m));
      };
    }
    const n = this.types[e];
    if (n) {
      const a = tn(this._types[e]);
      return (i) => {
        const c = n.map(({ name: d, type: m }) => {
          const b = this.getEncoder(m)(i[d]);
          return this._types[m] ? rt(b) : b;
        });
        return c.unshift(a), nn(c);
      };
    }
    return ft.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  encodeType(e) {
    const r = this._types[e];
    return r || ft.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), r;
  }
  encodeData(e, r) {
    return this.getEncoder(e)(r);
  }
  hashStruct(e, r) {
    return rt(this.encodeData(e, r));
  }
  encode(e) {
    return this.encodeData(this.primaryType, e);
  }
  hash(e) {
    return this.hashStruct(this.primaryType, e);
  }
  _visit(e, r, n) {
    if (cs(e))
      return n(e, r);
    const a = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (a) {
      const c = a[1], d = parseInt(a[3]);
      return d >= 0 && r.length !== d && ft.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r), r.map((m) => this._visit(c, m, n));
    }
    const i = this.types[e];
    return i ? i.reduce((c, { name: d, type: m }) => (c[d] = this._visit(m, r[d], n), c), {}) : ft.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  visit(e, r) {
    return this._visit(this.primaryType, e, r);
  }
  static from(e) {
    return new Dt(e);
  }
  static getPrimaryType(e) {
    return Dt.from(e).primaryType;
  }
  static hashStruct(e, r, n) {
    return Dt.from(r).hashStruct(e, n);
  }
  static hashDomain(e) {
    const r = [];
    for (const n in e) {
      const a = k0[n];
      a || ft.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", e), r.push({ name: n, type: a });
    }
    return r.sort((n, a) => os.indexOf(n.name) - os.indexOf(a.name)), Dt.hashStruct("EIP712Domain", { EIP712Domain: r }, e);
  }
  static encode(e, r, n) {
    return nn([
      "0x1901",
      Dt.hashDomain(e),
      Dt.from(r).hash(n)
    ]);
  }
  static hash(e, r, n) {
    return rt(Dt.encode(e, r, n));
  }
  static resolveNames(e, r, n, a) {
    return uu(this, void 0, void 0, function* () {
      e = qt(e);
      const i = {};
      e.verifyingContract && !dt(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
      const c = Dt.from(r);
      c.visit(n, (d, m) => (d === "address" && !dt(m, 20) && (i[m] = "0x"), m));
      for (const d in i)
        i[d] = yield a(d);
      return e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]), n = c.visit(n, (d, m) => d === "address" && i[m] ? i[m] : m), { domain: e, value: n };
    });
  }
  static getPayload(e, r, n) {
    Dt.hashDomain(e);
    const a = {}, i = [];
    os.forEach((m) => {
      const b = e[m];
      b != null && (a[m] = yu[m](b), i.push({ name: m, type: k0[m] }));
    });
    const c = Dt.from(r), d = qt(r);
    return d.EIP712Domain ? ft.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", r) : d.EIP712Domain = i, c.encode(n), {
      types: d,
      domain: a,
      primaryType: c.primaryType,
      message: c.visit(n, (m, b) => {
        if (m.match(/^bytes(\d*)/))
          return he(oe(b));
        if (m.match(/^u?int/))
          return ue.from(b).toString();
        switch (m) {
          case "address":
            return b.toLowerCase();
          case "bool":
            return !!b;
          case "string":
            return typeof b != "string" && ft.throwArgumentError("invalid string", "value", b), b;
        }
        return ft.throwArgumentError("unsupported type", "type", m);
      })
    };
  }
}
const vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: tn,
  dnsEncode: hu,
  namehash: lu,
  isValidName: du,
  ensNormalize: fu,
  messagePrefix: kf,
  hashMessage: lo,
  _TypedDataEncoder: Dt
}, Symbol.toStringTag, { value: "Module" })), ct = new q(qa);
class Ff extends Nn {
}
class Mf extends Nn {
}
class wu extends Nn {
}
class Fi extends Nn {
  static isIndexed(e) {
    return !!(e && e._isIndexed);
  }
}
const Au = {
  "0x08c379a0": { signature: "Error(string)", name: "Error", inputs: ["string"], reason: !0 },
  "0x4e487b71": { signature: "Panic(uint256)", name: "Panic", inputs: ["uint256"] }
};
function B0(t, e) {
  const r = new Error(`deferred error during ABI decoding triggered accessing ${t}`);
  return r.error = e, r;
}
class Ts {
  constructor(e) {
    let r = [];
    typeof e == "string" ? r = JSON.parse(e) : r = e, ae(this, "fragments", r.map((n) => kr.from(n)).filter((n) => n != null)), ae(this, "_abiCoder", Vn(new.target, "getAbiCoder")()), ae(this, "functions", {}), ae(this, "errors", {}), ae(this, "events", {}), ae(this, "structs", {}), this.fragments.forEach((n) => {
      let a = null;
      switch (n.type) {
        case "constructor":
          if (this.deploy) {
            ct.warn("duplicate definition - constructor");
            return;
          }
          ae(this, "deploy", n);
          return;
        case "function":
          a = this.functions;
          break;
        case "event":
          a = this.events;
          break;
        case "error":
          a = this.errors;
          break;
        default:
          return;
      }
      let i = n.format();
      if (a[i]) {
        ct.warn("duplicate definition - " + i);
        return;
      }
      a[i] = n;
    }), this.deploy || ae(this, "deploy", lr.from({
      payable: !1,
      type: "constructor"
    })), ae(this, "_isInterface", !0);
  }
  format(e) {
    e || (e = Xe.full), e === Xe.sighash && ct.throwArgumentError("interface does not support formatting sighash", "format", e);
    const r = this.fragments.map((n) => n.format(e));
    return e === Xe.json ? JSON.stringify(r.map((n) => JSON.parse(n))) : r;
  }
  static getAbiCoder() {
    return xf;
  }
  static getAddress(e) {
    return at(e);
  }
  static getSighash(e) {
    return $r(tn(e.format()), 0, 4);
  }
  static getEventTopic(e) {
    return tn(e.format());
  }
  getFunction(e) {
    if (dt(e)) {
      for (const n in this.functions)
        if (e === this.getSighash(n))
          return this.functions[n];
      ct.throwArgumentError("no matching function", "sighash", e);
    }
    if (e.indexOf("(") === -1) {
      const n = e.trim(), a = Object.keys(this.functions).filter((i) => i.split("(")[0] === n);
      return a.length === 0 ? ct.throwArgumentError("no matching function", "name", n) : a.length > 1 && ct.throwArgumentError("multiple matching functions", "name", n), this.functions[a[0]];
    }
    const r = this.functions[hr.fromString(e).format()];
    return r || ct.throwArgumentError("no matching function", "signature", e), r;
  }
  getEvent(e) {
    if (dt(e)) {
      const n = e.toLowerCase();
      for (const a in this.events)
        if (n === this.getEventTopic(a))
          return this.events[a];
      ct.throwArgumentError("no matching event", "topichash", n);
    }
    if (e.indexOf("(") === -1) {
      const n = e.trim(), a = Object.keys(this.events).filter((i) => i.split("(")[0] === n);
      return a.length === 0 ? ct.throwArgumentError("no matching event", "name", n) : a.length > 1 && ct.throwArgumentError("multiple matching events", "name", n), this.events[a[0]];
    }
    const r = this.events[Cr.fromString(e).format()];
    return r || ct.throwArgumentError("no matching event", "signature", e), r;
  }
  getError(e) {
    if (dt(e)) {
      const n = Vn(this.constructor, "getSighash");
      for (const a in this.errors) {
        const i = this.errors[a];
        if (e === n(i))
          return this.errors[a];
      }
      ct.throwArgumentError("no matching error", "sighash", e);
    }
    if (e.indexOf("(") === -1) {
      const n = e.trim(), a = Object.keys(this.errors).filter((i) => i.split("(")[0] === n);
      return a.length === 0 ? ct.throwArgumentError("no matching error", "name", n) : a.length > 1 && ct.throwArgumentError("multiple matching errors", "name", n), this.errors[a[0]];
    }
    const r = this.errors[hr.fromString(e).format()];
    return r || ct.throwArgumentError("no matching error", "signature", e), r;
  }
  getSighash(e) {
    if (typeof e == "string")
      try {
        e = this.getFunction(e);
      } catch (r) {
        try {
          e = this.getError(e);
        } catch {
          throw r;
        }
      }
    return Vn(this.constructor, "getSighash")(e);
  }
  getEventTopic(e) {
    return typeof e == "string" && (e = this.getEvent(e)), Vn(this.constructor, "getEventTopic")(e);
  }
  _decodeParams(e, r) {
    return this._abiCoder.decode(e, r);
  }
  _encodeParams(e, r) {
    return this._abiCoder.encode(e, r);
  }
  encodeDeploy(e) {
    return this._encodeParams(this.deploy.inputs, e || []);
  }
  decodeErrorResult(e, r) {
    typeof e == "string" && (e = this.getError(e));
    const n = oe(r);
    return he(n.slice(0, 4)) !== this.getSighash(e) && ct.throwArgumentError(`data signature does not match error ${e.name}.`, "data", he(n)), this._decodeParams(e.inputs, n.slice(4));
  }
  encodeErrorResult(e, r) {
    return typeof e == "string" && (e = this.getError(e)), he(pt([
      this.getSighash(e),
      this._encodeParams(e.inputs, r || [])
    ]));
  }
  decodeFunctionData(e, r) {
    typeof e == "string" && (e = this.getFunction(e));
    const n = oe(r);
    return he(n.slice(0, 4)) !== this.getSighash(e) && ct.throwArgumentError(`data signature does not match function ${e.name}.`, "data", he(n)), this._decodeParams(e.inputs, n.slice(4));
  }
  encodeFunctionData(e, r) {
    return typeof e == "string" && (e = this.getFunction(e)), he(pt([
      this.getSighash(e),
      this._encodeParams(e.inputs, r || [])
    ]));
  }
  decodeFunctionResult(e, r) {
    typeof e == "string" && (e = this.getFunction(e));
    let n = oe(r), a = null, i = "", c = null, d = null, m = null;
    switch (n.length % this._abiCoder._getWordSize()) {
      case 0:
        try {
          return this._abiCoder.decode(e.outputs, n);
        } catch {
        }
        break;
      case 4: {
        const b = he(n.slice(0, 4)), v = Au[b];
        if (v)
          c = this._abiCoder.decode(v.inputs, n.slice(4)), d = v.name, m = v.signature, v.reason && (a = c[0]), d === "Error" ? i = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(c[0])}` : d === "Panic" && (i = `; VM Exception while processing transaction: reverted with panic code ${c[0]}`);
        else
          try {
            const A = this.getError(b);
            c = this._abiCoder.decode(A.inputs, n.slice(4)), d = A.name, m = A.format();
          } catch {
          }
        break;
      }
    }
    return ct.throwError("call revert exception" + i, q.errors.CALL_EXCEPTION, {
      method: e.format(),
      data: he(r),
      errorArgs: c,
      errorName: d,
      errorSignature: m,
      reason: a
    });
  }
  encodeFunctionResult(e, r) {
    return typeof e == "string" && (e = this.getFunction(e)), he(this._abiCoder.encode(e.outputs, r || []));
  }
  encodeFilterTopics(e, r) {
    typeof e == "string" && (e = this.getEvent(e)), r.length > e.inputs.length && ct.throwError("too many arguments for " + e.format(), q.errors.UNEXPECTED_ARGUMENT, {
      argument: "values",
      value: r
    });
    let n = [];
    e.anonymous || n.push(this.getEventTopic(e));
    const a = (i, c) => i.type === "string" ? tn(c) : i.type === "bytes" ? rt(he(c)) : (i.type === "bool" && typeof c == "boolean" && (c = c ? "0x01" : "0x00"), i.type.match(/^u?int/) && (c = ue.from(c).toHexString()), i.type === "address" && this._abiCoder.encode(["address"], [c]), bt(he(c), 32));
    for (r.forEach((i, c) => {
      let d = e.inputs[c];
      if (!d.indexed) {
        i != null && ct.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + d.name, i);
        return;
      }
      i == null ? n.push(null) : d.baseType === "array" || d.baseType === "tuple" ? ct.throwArgumentError("filtering with tuples or arrays not supported", "contract." + d.name, i) : Array.isArray(i) ? n.push(i.map((m) => a(d, m))) : n.push(a(d, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(e, r) {
    typeof e == "string" && (e = this.getEvent(e));
    const n = [], a = [], i = [];
    return e.anonymous || n.push(this.getEventTopic(e)), r.length !== e.inputs.length && ct.throwArgumentError("event arguments/values mismatch", "values", r), e.inputs.forEach((c, d) => {
      const m = r[d];
      if (c.indexed)
        if (c.type === "string")
          n.push(tn(m));
        else if (c.type === "bytes")
          n.push(rt(m));
        else {
          if (c.baseType === "tuple" || c.baseType === "array")
            throw new Error("not implemented");
          n.push(this._abiCoder.encode([c.type], [m]));
        }
      else
        a.push(c), i.push(m);
    }), {
      data: this._abiCoder.encode(a, i),
      topics: n
    };
  }
  decodeEventLog(e, r, n) {
    if (typeof e == "string" && (e = this.getEvent(e)), n != null && !e.anonymous) {
      let S = this.getEventTopic(e);
      (!dt(n[0], 32) || n[0].toLowerCase() !== S) && ct.throwError("fragment/topic mismatch", q.errors.INVALID_ARGUMENT, { argument: "topics[0]", expected: S, value: n[0] }), n = n.slice(1);
    }
    let a = [], i = [], c = [];
    e.inputs.forEach((S, D) => {
      S.indexed ? S.type === "string" || S.type === "bytes" || S.baseType === "tuple" || S.baseType === "array" ? (a.push(xt.fromObject({ type: "bytes32", name: S.name })), c.push(!0)) : (a.push(S), c.push(!1)) : (i.push(S), c.push(!1));
    });
    let d = n != null ? this._abiCoder.decode(a, pt(n)) : null, m = this._abiCoder.decode(i, r, !0), b = [], v = 0, A = 0;
    e.inputs.forEach((S, D) => {
      if (S.indexed)
        if (d == null)
          b[D] = new Fi({ _isIndexed: !0, hash: null });
        else if (c[D])
          b[D] = new Fi({ _isIndexed: !0, hash: d[A++] });
        else
          try {
            b[D] = d[A++];
          } catch (B) {
            b[D] = B;
          }
      else
        try {
          b[D] = m[v++];
        } catch (B) {
          b[D] = B;
        }
      if (S.name && b[S.name] == null) {
        const B = b[D];
        B instanceof Error ? Object.defineProperty(b, S.name, {
          enumerable: !0,
          get: () => {
            throw B0(`property ${JSON.stringify(S.name)}`, B);
          }
        }) : b[S.name] = B;
      }
    });
    for (let S = 0; S < b.length; S++) {
      const D = b[S];
      D instanceof Error && Object.defineProperty(b, S, {
        enumerable: !0,
        get: () => {
          throw B0(`index ${S}`, D);
        }
      });
    }
    return Object.freeze(b);
  }
  parseTransaction(e) {
    let r = this.getFunction(e.data.substring(0, 10).toLowerCase());
    return r ? new Mf({
      args: this._abiCoder.decode(r.inputs, "0x" + e.data.substring(10)),
      functionFragment: r,
      name: r.name,
      signature: r.format(),
      sighash: this.getSighash(r),
      value: ue.from(e.value || "0")
    }) : null;
  }
  parseLog(e) {
    let r = this.getEvent(e.topics[0]);
    return !r || r.anonymous ? null : new Ff({
      eventFragment: r,
      name: r.name,
      signature: r.format(),
      topic: this.getEventTopic(r),
      args: this.decodeEventLog(r, e.data, e.topics)
    });
  }
  parseError(e) {
    const r = he(e);
    let n = this.getError(r.substring(0, 10).toLowerCase());
    return n ? new wu({
      args: this._abiCoder.decode(n.inputs, "0x" + r.substring(10)),
      errorFragment: n,
      name: n.name,
      signature: n.format(),
      sighash: this.getSighash(n)
    }) : null;
  }
  static isInterface(e) {
    return !!(e && e._isInterface);
  }
}
const Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConstructorFragment: lr,
  ErrorFragment: Wr,
  EventFragment: Cr,
  Fragment: kr,
  FunctionFragment: hr,
  ParamType: xt,
  FormatTypes: Xe,
  AbiCoder: gf,
  defaultAbiCoder: xf,
  Interface: Ts,
  Indexed: Fi,
  checkResultErrors: rf,
  LogDescription: Ff,
  TransactionDescription: Mf
}, Symbol.toStringTag, { value: "Module" })), Eu = "abstract-provider/5.7.0";
var Iu = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(c) {
      c(i);
    });
  }
  return new (r || (r = Promise))(function(i, c) {
    function d(v) {
      try {
        b(n.next(v));
      } catch (A) {
        c(A);
      }
    }
    function m(v) {
      try {
        b(n.throw(v));
      } catch (A) {
        c(A);
      }
    }
    function b(v) {
      v.done ? i(v.value) : a(v.value).then(d, m);
    }
    b((n = n.apply(t, e || [])).next());
  });
};
const ku = new q(Eu);
class ji {
  constructor() {
    ku.checkAbstract(new.target, ji), ae(this, "_isProvider", !0);
  }
  getFeeData() {
    return Iu(this, void 0, void 0, function* () {
      const { block: e, gasPrice: r } = yield Ir({
        block: this.getBlock("latest"),
        gasPrice: this.getGasPrice().catch((c) => null)
      });
      let n = null, a = null, i = null;
      return e && e.baseFeePerGas && (n = e.baseFeePerGas, i = ue.from("1500000000"), a = e.baseFeePerGas.mul(2).add(i)), { lastBaseFeePerGas: n, maxFeePerGas: a, maxPriorityFeePerGas: i, gasPrice: r };
    });
  }
  addListener(e, r) {
    return this.on(e, r);
  }
  removeListener(e, r) {
    return this.off(e, r);
  }
  static isProvider(e) {
    return !!(e && e._isProvider);
  }
}
const Su = "abstract-signer/5.7.0";
var or = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(c) {
      c(i);
    });
  }
  return new (r || (r = Promise))(function(i, c) {
    function d(v) {
      try {
        b(n.next(v));
      } catch (A) {
        c(A);
      }
    }
    function m(v) {
      try {
        b(n.throw(v));
      } catch (A) {
        c(A);
      }
    }
    function b(v) {
      v.done ? i(v.value) : a(v.value).then(d, m);
    }
    b((n = n.apply(t, e || [])).next());
  });
};
const Qt = new q(Su), Du = [
  "accessList",
  "ccipReadEnabled",
  "chainId",
  "customData",
  "data",
  "from",
  "gasLimit",
  "gasPrice",
  "maxFeePerGas",
  "maxPriorityFeePerGas",
  "nonce",
  "to",
  "type",
  "value"
], Bu = [
  q.errors.INSUFFICIENT_FUNDS,
  q.errors.NONCE_EXPIRED,
  q.errors.REPLACEMENT_UNDERPRICED
];
class Za {
  constructor() {
    Qt.checkAbstract(new.target, Za), ae(this, "_isSigner", !0);
  }
  getBalance(e) {
    return or(this, void 0, void 0, function* () {
      return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e);
    });
  }
  getTransactionCount(e) {
    return or(this, void 0, void 0, function* () {
      return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e);
    });
  }
  estimateGas(e) {
    return or(this, void 0, void 0, function* () {
      this._checkProvider("estimateGas");
      const r = yield Ir(this.checkTransaction(e));
      return yield this.provider.estimateGas(r);
    });
  }
  call(e, r) {
    return or(this, void 0, void 0, function* () {
      this._checkProvider("call");
      const n = yield Ir(this.checkTransaction(e));
      return yield this.provider.call(n, r);
    });
  }
  sendTransaction(e) {
    return or(this, void 0, void 0, function* () {
      this._checkProvider("sendTransaction");
      const r = yield this.populateTransaction(e), n = yield this.signTransaction(r);
      return yield this.provider.sendTransaction(n);
    });
  }
  getChainId() {
    return or(this, void 0, void 0, function* () {
      return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId;
    });
  }
  getGasPrice() {
    return or(this, void 0, void 0, function* () {
      return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice();
    });
  }
  getFeeData() {
    return or(this, void 0, void 0, function* () {
      return this._checkProvider("getFeeData"), yield this.provider.getFeeData();
    });
  }
  resolveName(e) {
    return or(this, void 0, void 0, function* () {
      return this._checkProvider("resolveName"), yield this.provider.resolveName(e);
    });
  }
  checkTransaction(e) {
    for (const n in e)
      Du.indexOf(n) === -1 && Qt.throwArgumentError("invalid transaction key: " + n, "transaction", e);
    const r = qt(e);
    return r.from == null ? r.from = this.getAddress() : r.from = Promise.all([
      Promise.resolve(r.from),
      this.getAddress()
    ]).then((n) => (n[0].toLowerCase() !== n[1].toLowerCase() && Qt.throwArgumentError("from address mismatch", "transaction", e), n[0])), r;
  }
  populateTransaction(e) {
    return or(this, void 0, void 0, function* () {
      const r = yield Ir(this.checkTransaction(e));
      r.to != null && (r.to = Promise.resolve(r.to).then((a) => or(this, void 0, void 0, function* () {
        if (a == null)
          return null;
        const i = yield this.resolveName(a);
        return i == null && Qt.throwArgumentError("provided ENS name resolves to null", "tx.to", a), i;
      })), r.to.catch((a) => {
      }));
      const n = r.maxFeePerGas != null || r.maxPriorityFeePerGas != null;
      if (r.gasPrice != null && (r.type === 2 || n) ? Qt.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e) : (r.type === 0 || r.type === 1) && n && Qt.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e), (r.type === 2 || r.type == null) && r.maxFeePerGas != null && r.maxPriorityFeePerGas != null)
        r.type = 2;
      else if (r.type === 0 || r.type === 1)
        r.gasPrice == null && (r.gasPrice = this.getGasPrice());
      else {
        const a = yield this.getFeeData();
        if (r.type == null)
          if (a.maxFeePerGas != null && a.maxPriorityFeePerGas != null)
            if (r.type = 2, r.gasPrice != null) {
              const i = r.gasPrice;
              delete r.gasPrice, r.maxFeePerGas = i, r.maxPriorityFeePerGas = i;
            } else
              r.maxFeePerGas == null && (r.maxFeePerGas = a.maxFeePerGas), r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = a.maxPriorityFeePerGas);
          else
            a.gasPrice != null ? (n && Qt.throwError("network does not support EIP-1559", q.errors.UNSUPPORTED_OPERATION, {
              operation: "populateTransaction"
            }), r.gasPrice == null && (r.gasPrice = a.gasPrice), r.type = 0) : Qt.throwError("failed to get consistent fee data", q.errors.UNSUPPORTED_OPERATION, {
              operation: "signer.getFeeData"
            });
        else
          r.type === 2 && (r.maxFeePerGas == null && (r.maxFeePerGas = a.maxFeePerGas), r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = a.maxPriorityFeePerGas));
      }
      return r.nonce == null && (r.nonce = this.getTransactionCount("pending")), r.gasLimit == null && (r.gasLimit = this.estimateGas(r).catch((a) => {
        if (Bu.indexOf(a.code) >= 0)
          throw a;
        return Qt.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", q.errors.UNPREDICTABLE_GAS_LIMIT, {
          error: a,
          tx: r
        });
      })), r.chainId == null ? r.chainId = this.getChainId() : r.chainId = Promise.all([
        Promise.resolve(r.chainId),
        this.getChainId()
      ]).then((a) => (a[1] !== 0 && a[0] !== a[1] && Qt.throwArgumentError("chainId address mismatch", "transaction", e), a[0])), yield Ir(r);
    });
  }
  _checkProvider(e) {
    this.provider || Qt.throwError("missing provider", q.errors.UNSUPPORTED_OPERATION, {
      operation: e || "_checkProvider"
    });
  }
  static isSigner(e) {
    return !!(e && e._isSigner);
  }
}
class ho extends Za {
  constructor(e, r) {
    super(), ae(this, "address", e), ae(this, "provider", r || null);
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  _fail(e, r) {
    return Promise.resolve().then(() => {
      Qt.throwError(e, q.errors.UNSUPPORTED_OPERATION, { operation: r });
    });
  }
  signMessage(e) {
    return this._fail("VoidSigner cannot sign messages", "signMessage");
  }
  signTransaction(e) {
    return this._fail("VoidSigner cannot sign transactions", "signTransaction");
  }
  _signTypedData(e, r, n) {
    return this._fail("VoidSigner cannot sign typed data", "signTypedData");
  }
  connect(e) {
    return new ho(this.address, e);
  }
}
var _f = { exports: {} };
(function(t) {
  (function(e, r) {
    function n(y, s) {
      if (!y)
        throw new Error(s || "Assertion failed");
    }
    function a(y, s) {
      y.super_ = s;
      var f = function() {
      };
      f.prototype = s.prototype, y.prototype = new f(), y.prototype.constructor = y;
    }
    function i(y, s, f) {
      if (i.isBN(y))
        return y;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, y !== null && ((s === "le" || s === "be") && (f = s, s = 10), this._init(y || 0, s || 10, f || "be"));
    }
    typeof e == "object" ? e.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var c;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? c = window.Buffer : c = $c.Buffer;
    } catch {
    }
    i.isBN = function(s) {
      return s instanceof i ? !0 : s !== null && typeof s == "object" && s.constructor.wordSize === i.wordSize && Array.isArray(s.words);
    }, i.max = function(s, f) {
      return s.cmp(f) > 0 ? s : f;
    }, i.min = function(s, f) {
      return s.cmp(f) < 0 ? s : f;
    }, i.prototype._init = function(s, f, u) {
      if (typeof s == "number")
        return this._initNumber(s, f, u);
      if (typeof s == "object")
        return this._initArray(s, f, u);
      f === "hex" && (f = 16), n(f === (f | 0) && f >= 2 && f <= 36), s = s.toString().replace(/\s+/g, "");
      var g = 0;
      s[0] === "-" && (g++, this.negative = 1), g < s.length && (f === 16 ? this._parseHex(s, g, u) : (this._parseBase(s, f, g), u === "le" && this._initArray(this.toArray(), f, u)));
    }, i.prototype._initNumber = function(s, f, u) {
      s < 0 && (this.negative = 1, s = -s), s < 67108864 ? (this.words = [s & 67108863], this.length = 1) : s < 4503599627370496 ? (this.words = [
        s & 67108863,
        s / 67108864 & 67108863
      ], this.length = 2) : (n(s < 9007199254740992), this.words = [
        s & 67108863,
        s / 67108864 & 67108863,
        1
      ], this.length = 3), u === "le" && this._initArray(this.toArray(), f, u);
    }, i.prototype._initArray = function(s, f, u) {
      if (n(typeof s.length == "number"), s.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(s.length / 3), this.words = new Array(this.length);
      for (var g = 0; g < this.length; g++)
        this.words[g] = 0;
      var x, w, E = 0;
      if (u === "be")
        for (g = s.length - 1, x = 0; g >= 0; g -= 3)
          w = s[g] | s[g - 1] << 8 | s[g - 2] << 16, this.words[x] |= w << E & 67108863, this.words[x + 1] = w >>> 26 - E & 67108863, E += 24, E >= 26 && (E -= 26, x++);
      else if (u === "le")
        for (g = 0, x = 0; g < s.length; g += 3)
          w = s[g] | s[g + 1] << 8 | s[g + 2] << 16, this.words[x] |= w << E & 67108863, this.words[x + 1] = w >>> 26 - E & 67108863, E += 24, E >= 26 && (E -= 26, x++);
      return this._strip();
    };
    function d(y, s) {
      var f = y.charCodeAt(s);
      if (f >= 48 && f <= 57)
        return f - 48;
      if (f >= 65 && f <= 70)
        return f - 55;
      if (f >= 97 && f <= 102)
        return f - 87;
      n(!1, "Invalid character in " + y);
    }
    function m(y, s, f) {
      var u = d(y, f);
      return f - 1 >= s && (u |= d(y, f - 1) << 4), u;
    }
    i.prototype._parseHex = function(s, f, u) {
      this.length = Math.ceil((s.length - f) / 6), this.words = new Array(this.length);
      for (var g = 0; g < this.length; g++)
        this.words[g] = 0;
      var x = 0, w = 0, E;
      if (u === "be")
        for (g = s.length - 1; g >= f; g -= 2)
          E = m(s, f, g) << x, this.words[w] |= E & 67108863, x >= 18 ? (x -= 18, w += 1, this.words[w] |= E >>> 26) : x += 8;
      else {
        var l = s.length - f;
        for (g = l % 2 === 0 ? f + 1 : f; g < s.length; g += 2)
          E = m(s, f, g) << x, this.words[w] |= E & 67108863, x >= 18 ? (x -= 18, w += 1, this.words[w] |= E >>> 26) : x += 8;
      }
      this._strip();
    };
    function b(y, s, f, u) {
      for (var g = 0, x = 0, w = Math.min(y.length, f), E = s; E < w; E++) {
        var l = y.charCodeAt(E) - 48;
        g *= u, l >= 49 ? x = l - 49 + 10 : l >= 17 ? x = l - 17 + 10 : x = l, n(l >= 0 && x < u, "Invalid character"), g += x;
      }
      return g;
    }
    i.prototype._parseBase = function(s, f, u) {
      this.words = [0], this.length = 1;
      for (var g = 0, x = 1; x <= 67108863; x *= f)
        g++;
      g--, x = x / f | 0;
      for (var w = s.length - u, E = w % g, l = Math.min(w, w - E) + u, o = 0, h = u; h < l; h += g)
        o = b(s, h, h + g, f), this.imuln(x), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);
      if (E !== 0) {
        var I = 1;
        for (o = b(s, h, s.length, f), h = 0; h < E; h++)
          I *= f;
        this.imuln(I), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);
      }
      this._strip();
    }, i.prototype.copy = function(s) {
      s.words = new Array(this.length);
      for (var f = 0; f < this.length; f++)
        s.words[f] = this.words[f];
      s.length = this.length, s.negative = this.negative, s.red = this.red;
    };
    function v(y, s) {
      y.words = s.words, y.length = s.length, y.negative = s.negative, y.red = s.red;
    }
    if (i.prototype._move = function(s) {
      v(s, this);
    }, i.prototype.clone = function() {
      var s = new i(null);
      return this.copy(s), s;
    }, i.prototype._expand = function(s) {
      for (; this.length < s; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = A;
      } catch {
        i.prototype.inspect = A;
      }
    else
      i.prototype.inspect = A;
    function A() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], D = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], B = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    i.prototype.toString = function(s, f) {
      s = s || 10, f = f | 0 || 1;
      var u;
      if (s === 16 || s === "hex") {
        u = "";
        for (var g = 0, x = 0, w = 0; w < this.length; w++) {
          var E = this.words[w], l = ((E << g | x) & 16777215).toString(16);
          x = E >>> 24 - g & 16777215, g += 2, g >= 26 && (g -= 26, w--), x !== 0 || w !== this.length - 1 ? u = S[6 - l.length] + l + u : u = l + u;
        }
        for (x !== 0 && (u = x.toString(16) + u); u.length % f !== 0; )
          u = "0" + u;
        return this.negative !== 0 && (u = "-" + u), u;
      }
      if (s === (s | 0) && s >= 2 && s <= 36) {
        var o = D[s], h = B[s];
        u = "";
        var I = this.clone();
        for (I.negative = 0; !I.isZero(); ) {
          var p = I.modrn(h).toString(s);
          I = I.idivn(h), I.isZero() ? u = p + u : u = S[o - p.length] + p + u;
        }
        for (this.isZero() && (u = "0" + u); u.length % f !== 0; )
          u = "0" + u;
        return this.negative !== 0 && (u = "-" + u), u;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var s = this.words[0];
      return this.length === 2 ? s += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? s += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -s : s;
    }, i.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, c && (i.prototype.toBuffer = function(s, f) {
      return this.toArrayLike(c, s, f);
    }), i.prototype.toArray = function(s, f) {
      return this.toArrayLike(Array, s, f);
    };
    var F = function(s, f) {
      return s.allocUnsafe ? s.allocUnsafe(f) : new s(f);
    };
    i.prototype.toArrayLike = function(s, f, u) {
      this._strip();
      var g = this.byteLength(), x = u || Math.max(1, g);
      n(g <= x, "byte array longer than desired length"), n(x > 0, "Requested array length <= 0");
      var w = F(s, x), E = f === "le" ? "LE" : "BE";
      return this["_toArrayLike" + E](w, g), w;
    }, i.prototype._toArrayLikeLE = function(s, f) {
      for (var u = 0, g = 0, x = 0, w = 0; x < this.length; x++) {
        var E = this.words[x] << w | g;
        s[u++] = E & 255, u < s.length && (s[u++] = E >> 8 & 255), u < s.length && (s[u++] = E >> 16 & 255), w === 6 ? (u < s.length && (s[u++] = E >> 24 & 255), g = 0, w = 0) : (g = E >>> 24, w += 2);
      }
      if (u < s.length)
        for (s[u++] = g; u < s.length; )
          s[u++] = 0;
    }, i.prototype._toArrayLikeBE = function(s, f) {
      for (var u = s.length - 1, g = 0, x = 0, w = 0; x < this.length; x++) {
        var E = this.words[x] << w | g;
        s[u--] = E & 255, u >= 0 && (s[u--] = E >> 8 & 255), u >= 0 && (s[u--] = E >> 16 & 255), w === 6 ? (u >= 0 && (s[u--] = E >> 24 & 255), g = 0, w = 0) : (g = E >>> 24, w += 2);
      }
      if (u >= 0)
        for (s[u--] = g; u >= 0; )
          s[u--] = 0;
    }, Math.clz32 ? i.prototype._countBits = function(s) {
      return 32 - Math.clz32(s);
    } : i.prototype._countBits = function(s) {
      var f = s, u = 0;
      return f >= 4096 && (u += 13, f >>>= 13), f >= 64 && (u += 7, f >>>= 7), f >= 8 && (u += 4, f >>>= 4), f >= 2 && (u += 2, f >>>= 2), u + f;
    }, i.prototype._zeroBits = function(s) {
      if (s === 0)
        return 26;
      var f = s, u = 0;
      return (f & 8191) === 0 && (u += 13, f >>>= 13), (f & 127) === 0 && (u += 7, f >>>= 7), (f & 15) === 0 && (u += 4, f >>>= 4), (f & 3) === 0 && (u += 2, f >>>= 2), (f & 1) === 0 && u++, u;
    }, i.prototype.bitLength = function() {
      var s = this.words[this.length - 1], f = this._countBits(s);
      return (this.length - 1) * 26 + f;
    };
    function k(y) {
      for (var s = new Array(y.bitLength()), f = 0; f < s.length; f++) {
        var u = f / 26 | 0, g = f % 26;
        s[f] = y.words[u] >>> g & 1;
      }
      return s;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var s = 0, f = 0; f < this.length; f++) {
        var u = this._zeroBits(this.words[f]);
        if (s += u, u !== 26)
          break;
      }
      return s;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(s) {
      return this.negative !== 0 ? this.abs().inotn(s).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(s) {
      return this.testn(s - 1) ? this.notn(s).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(s) {
      for (; this.length < s.length; )
        this.words[this.length++] = 0;
      for (var f = 0; f < s.length; f++)
        this.words[f] = this.words[f] | s.words[f];
      return this._strip();
    }, i.prototype.ior = function(s) {
      return n((this.negative | s.negative) === 0), this.iuor(s);
    }, i.prototype.or = function(s) {
      return this.length > s.length ? this.clone().ior(s) : s.clone().ior(this);
    }, i.prototype.uor = function(s) {
      return this.length > s.length ? this.clone().iuor(s) : s.clone().iuor(this);
    }, i.prototype.iuand = function(s) {
      var f;
      this.length > s.length ? f = s : f = this;
      for (var u = 0; u < f.length; u++)
        this.words[u] = this.words[u] & s.words[u];
      return this.length = f.length, this._strip();
    }, i.prototype.iand = function(s) {
      return n((this.negative | s.negative) === 0), this.iuand(s);
    }, i.prototype.and = function(s) {
      return this.length > s.length ? this.clone().iand(s) : s.clone().iand(this);
    }, i.prototype.uand = function(s) {
      return this.length > s.length ? this.clone().iuand(s) : s.clone().iuand(this);
    }, i.prototype.iuxor = function(s) {
      var f, u;
      this.length > s.length ? (f = this, u = s) : (f = s, u = this);
      for (var g = 0; g < u.length; g++)
        this.words[g] = f.words[g] ^ u.words[g];
      if (this !== f)
        for (; g < f.length; g++)
          this.words[g] = f.words[g];
      return this.length = f.length, this._strip();
    }, i.prototype.ixor = function(s) {
      return n((this.negative | s.negative) === 0), this.iuxor(s);
    }, i.prototype.xor = function(s) {
      return this.length > s.length ? this.clone().ixor(s) : s.clone().ixor(this);
    }, i.prototype.uxor = function(s) {
      return this.length > s.length ? this.clone().iuxor(s) : s.clone().iuxor(this);
    }, i.prototype.inotn = function(s) {
      n(typeof s == "number" && s >= 0);
      var f = Math.ceil(s / 26) | 0, u = s % 26;
      this._expand(f), u > 0 && f--;
      for (var g = 0; g < f; g++)
        this.words[g] = ~this.words[g] & 67108863;
      return u > 0 && (this.words[g] = ~this.words[g] & 67108863 >> 26 - u), this._strip();
    }, i.prototype.notn = function(s) {
      return this.clone().inotn(s);
    }, i.prototype.setn = function(s, f) {
      n(typeof s == "number" && s >= 0);
      var u = s / 26 | 0, g = s % 26;
      return this._expand(u + 1), f ? this.words[u] = this.words[u] | 1 << g : this.words[u] = this.words[u] & ~(1 << g), this._strip();
    }, i.prototype.iadd = function(s) {
      var f;
      if (this.negative !== 0 && s.negative === 0)
        return this.negative = 0, f = this.isub(s), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && s.negative !== 0)
        return s.negative = 0, f = this.isub(s), s.negative = 1, f._normSign();
      var u, g;
      this.length > s.length ? (u = this, g = s) : (u = s, g = this);
      for (var x = 0, w = 0; w < g.length; w++)
        f = (u.words[w] | 0) + (g.words[w] | 0) + x, this.words[w] = f & 67108863, x = f >>> 26;
      for (; x !== 0 && w < u.length; w++)
        f = (u.words[w] | 0) + x, this.words[w] = f & 67108863, x = f >>> 26;
      if (this.length = u.length, x !== 0)
        this.words[this.length] = x, this.length++;
      else if (u !== this)
        for (; w < u.length; w++)
          this.words[w] = u.words[w];
      return this;
    }, i.prototype.add = function(s) {
      var f;
      return s.negative !== 0 && this.negative === 0 ? (s.negative = 0, f = this.sub(s), s.negative ^= 1, f) : s.negative === 0 && this.negative !== 0 ? (this.negative = 0, f = s.sub(this), this.negative = 1, f) : this.length > s.length ? this.clone().iadd(s) : s.clone().iadd(this);
    }, i.prototype.isub = function(s) {
      if (s.negative !== 0) {
        s.negative = 0;
        var f = this.iadd(s);
        return s.negative = 1, f._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(s), this.negative = 1, this._normSign();
      var u = this.cmp(s);
      if (u === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var g, x;
      u > 0 ? (g = this, x = s) : (g = s, x = this);
      for (var w = 0, E = 0; E < x.length; E++)
        f = (g.words[E] | 0) - (x.words[E] | 0) + w, w = f >> 26, this.words[E] = f & 67108863;
      for (; w !== 0 && E < g.length; E++)
        f = (g.words[E] | 0) + w, w = f >> 26, this.words[E] = f & 67108863;
      if (w === 0 && E < g.length && g !== this)
        for (; E < g.length; E++)
          this.words[E] = g.words[E];
      return this.length = Math.max(this.length, E), g !== this && (this.negative = 1), this._strip();
    }, i.prototype.sub = function(s) {
      return this.clone().isub(s);
    };
    function T(y, s, f) {
      f.negative = s.negative ^ y.negative;
      var u = y.length + s.length | 0;
      f.length = u, u = u - 1 | 0;
      var g = y.words[0] | 0, x = s.words[0] | 0, w = g * x, E = w & 67108863, l = w / 67108864 | 0;
      f.words[0] = E;
      for (var o = 1; o < u; o++) {
        for (var h = l >>> 26, I = l & 67108863, p = Math.min(o, s.length - 1), C = Math.max(0, o - y.length + 1); C <= p; C++) {
          var N = o - C | 0;
          g = y.words[N] | 0, x = s.words[C] | 0, w = g * x + I, h += w / 67108864 | 0, I = w & 67108863;
        }
        f.words[o] = I | 0, l = h | 0;
      }
      return l !== 0 ? f.words[o] = l | 0 : f.length--, f._strip();
    }
    var U = function(s, f, u) {
      var g = s.words, x = f.words, w = u.words, E = 0, l, o, h, I = g[0] | 0, p = I & 8191, C = I >>> 13, N = g[1] | 0, _ = N & 8191, j = N >>> 13, X = g[2] | 0, z = X & 8191, O = X >>> 13, we = g[3] | 0, G = we & 8191, V = we >>> 13, $e = g[4] | 0, fe = $e & 8191, be = $e >>> 13, st = g[5] | 0, le = st & 8191, ye = st >>> 13, it = g[6] | 0, ge = it & 8191, te = it >>> 13, Ve = g[7] | 0, ve = Ve & 8191, xe = Ve >>> 13, nt = g[8] | 0, Ce = nt & 8191, Ee = nt >>> 13, wt = g[9] | 0, me = wt & 8191, Ie = wt >>> 13, _t = x[0] | 0, Me = _t & 8191, _e = _t >>> 13, Yt = x[1] | 0, Re = Yt & 8191, ke = Yt >>> 13, jt = x[2] | 0, Ae = jt & 8191, Se = jt >>> 13, Rt = x[3] | 0, De = Rt & 8191, Te = Rt >>> 13, Wt = x[4] | 0, Ue = Wt & 8191, Be = Wt >>> 13, Ht = x[5] | 0, Pe = Ht & 8191, Oe = Ht >>> 13, zt = x[6] | 0, Ne = zt & 8191, Le = zt >>> 13, Xt = x[7] | 0, je = Xt & 8191, M = Xt >>> 13, ee = x[8] | 0, K = ee & 8191, se = ee >>> 13, He = x[9] | 0, pe = He & 8191, de = He >>> 13;
      u.negative = s.negative ^ f.negative, u.length = 19, l = Math.imul(p, Me), o = Math.imul(p, _e), o = o + Math.imul(C, Me) | 0, h = Math.imul(C, _e);
      var Fe = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (Fe >>> 26) | 0, Fe &= 67108863, l = Math.imul(_, Me), o = Math.imul(_, _e), o = o + Math.imul(j, Me) | 0, h = Math.imul(j, _e), l = l + Math.imul(p, Re) | 0, o = o + Math.imul(p, ke) | 0, o = o + Math.imul(C, Re) | 0, h = h + Math.imul(C, ke) | 0;
      var et = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, l = Math.imul(z, Me), o = Math.imul(z, _e), o = o + Math.imul(O, Me) | 0, h = Math.imul(O, _e), l = l + Math.imul(_, Re) | 0, o = o + Math.imul(_, ke) | 0, o = o + Math.imul(j, Re) | 0, h = h + Math.imul(j, ke) | 0, l = l + Math.imul(p, Ae) | 0, o = o + Math.imul(p, Se) | 0, o = o + Math.imul(C, Ae) | 0, h = h + Math.imul(C, Se) | 0;
      var Ze = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, l = Math.imul(G, Me), o = Math.imul(G, _e), o = o + Math.imul(V, Me) | 0, h = Math.imul(V, _e), l = l + Math.imul(z, Re) | 0, o = o + Math.imul(z, ke) | 0, o = o + Math.imul(O, Re) | 0, h = h + Math.imul(O, ke) | 0, l = l + Math.imul(_, Ae) | 0, o = o + Math.imul(_, Se) | 0, o = o + Math.imul(j, Ae) | 0, h = h + Math.imul(j, Se) | 0, l = l + Math.imul(p, De) | 0, o = o + Math.imul(p, Te) | 0, o = o + Math.imul(C, De) | 0, h = h + Math.imul(C, Te) | 0;
      var Ye = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, l = Math.imul(fe, Me), o = Math.imul(fe, _e), o = o + Math.imul(be, Me) | 0, h = Math.imul(be, _e), l = l + Math.imul(G, Re) | 0, o = o + Math.imul(G, ke) | 0, o = o + Math.imul(V, Re) | 0, h = h + Math.imul(V, ke) | 0, l = l + Math.imul(z, Ae) | 0, o = o + Math.imul(z, Se) | 0, o = o + Math.imul(O, Ae) | 0, h = h + Math.imul(O, Se) | 0, l = l + Math.imul(_, De) | 0, o = o + Math.imul(_, Te) | 0, o = o + Math.imul(j, De) | 0, h = h + Math.imul(j, Te) | 0, l = l + Math.imul(p, Ue) | 0, o = o + Math.imul(p, Be) | 0, o = o + Math.imul(C, Ue) | 0, h = h + Math.imul(C, Be) | 0;
      var ot = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (ot >>> 26) | 0, ot &= 67108863, l = Math.imul(le, Me), o = Math.imul(le, _e), o = o + Math.imul(ye, Me) | 0, h = Math.imul(ye, _e), l = l + Math.imul(fe, Re) | 0, o = o + Math.imul(fe, ke) | 0, o = o + Math.imul(be, Re) | 0, h = h + Math.imul(be, ke) | 0, l = l + Math.imul(G, Ae) | 0, o = o + Math.imul(G, Se) | 0, o = o + Math.imul(V, Ae) | 0, h = h + Math.imul(V, Se) | 0, l = l + Math.imul(z, De) | 0, o = o + Math.imul(z, Te) | 0, o = o + Math.imul(O, De) | 0, h = h + Math.imul(O, Te) | 0, l = l + Math.imul(_, Ue) | 0, o = o + Math.imul(_, Be) | 0, o = o + Math.imul(j, Ue) | 0, h = h + Math.imul(j, Be) | 0, l = l + Math.imul(p, Pe) | 0, o = o + Math.imul(p, Oe) | 0, o = o + Math.imul(C, Pe) | 0, h = h + Math.imul(C, Oe) | 0;
      var Tt = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, l = Math.imul(ge, Me), o = Math.imul(ge, _e), o = o + Math.imul(te, Me) | 0, h = Math.imul(te, _e), l = l + Math.imul(le, Re) | 0, o = o + Math.imul(le, ke) | 0, o = o + Math.imul(ye, Re) | 0, h = h + Math.imul(ye, ke) | 0, l = l + Math.imul(fe, Ae) | 0, o = o + Math.imul(fe, Se) | 0, o = o + Math.imul(be, Ae) | 0, h = h + Math.imul(be, Se) | 0, l = l + Math.imul(G, De) | 0, o = o + Math.imul(G, Te) | 0, o = o + Math.imul(V, De) | 0, h = h + Math.imul(V, Te) | 0, l = l + Math.imul(z, Ue) | 0, o = o + Math.imul(z, Be) | 0, o = o + Math.imul(O, Ue) | 0, h = h + Math.imul(O, Be) | 0, l = l + Math.imul(_, Pe) | 0, o = o + Math.imul(_, Oe) | 0, o = o + Math.imul(j, Pe) | 0, h = h + Math.imul(j, Oe) | 0, l = l + Math.imul(p, Ne) | 0, o = o + Math.imul(p, Le) | 0, o = o + Math.imul(C, Ne) | 0, h = h + Math.imul(C, Le) | 0;
      var vr = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (vr >>> 26) | 0, vr &= 67108863, l = Math.imul(ve, Me), o = Math.imul(ve, _e), o = o + Math.imul(xe, Me) | 0, h = Math.imul(xe, _e), l = l + Math.imul(ge, Re) | 0, o = o + Math.imul(ge, ke) | 0, o = o + Math.imul(te, Re) | 0, h = h + Math.imul(te, ke) | 0, l = l + Math.imul(le, Ae) | 0, o = o + Math.imul(le, Se) | 0, o = o + Math.imul(ye, Ae) | 0, h = h + Math.imul(ye, Se) | 0, l = l + Math.imul(fe, De) | 0, o = o + Math.imul(fe, Te) | 0, o = o + Math.imul(be, De) | 0, h = h + Math.imul(be, Te) | 0, l = l + Math.imul(G, Ue) | 0, o = o + Math.imul(G, Be) | 0, o = o + Math.imul(V, Ue) | 0, h = h + Math.imul(V, Be) | 0, l = l + Math.imul(z, Pe) | 0, o = o + Math.imul(z, Oe) | 0, o = o + Math.imul(O, Pe) | 0, h = h + Math.imul(O, Oe) | 0, l = l + Math.imul(_, Ne) | 0, o = o + Math.imul(_, Le) | 0, o = o + Math.imul(j, Ne) | 0, h = h + Math.imul(j, Le) | 0, l = l + Math.imul(p, je) | 0, o = o + Math.imul(p, M) | 0, o = o + Math.imul(C, je) | 0, h = h + Math.imul(C, M) | 0;
      var At = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, l = Math.imul(Ce, Me), o = Math.imul(Ce, _e), o = o + Math.imul(Ee, Me) | 0, h = Math.imul(Ee, _e), l = l + Math.imul(ve, Re) | 0, o = o + Math.imul(ve, ke) | 0, o = o + Math.imul(xe, Re) | 0, h = h + Math.imul(xe, ke) | 0, l = l + Math.imul(ge, Ae) | 0, o = o + Math.imul(ge, Se) | 0, o = o + Math.imul(te, Ae) | 0, h = h + Math.imul(te, Se) | 0, l = l + Math.imul(le, De) | 0, o = o + Math.imul(le, Te) | 0, o = o + Math.imul(ye, De) | 0, h = h + Math.imul(ye, Te) | 0, l = l + Math.imul(fe, Ue) | 0, o = o + Math.imul(fe, Be) | 0, o = o + Math.imul(be, Ue) | 0, h = h + Math.imul(be, Be) | 0, l = l + Math.imul(G, Pe) | 0, o = o + Math.imul(G, Oe) | 0, o = o + Math.imul(V, Pe) | 0, h = h + Math.imul(V, Oe) | 0, l = l + Math.imul(z, Ne) | 0, o = o + Math.imul(z, Le) | 0, o = o + Math.imul(O, Ne) | 0, h = h + Math.imul(O, Le) | 0, l = l + Math.imul(_, je) | 0, o = o + Math.imul(_, M) | 0, o = o + Math.imul(j, je) | 0, h = h + Math.imul(j, M) | 0, l = l + Math.imul(p, K) | 0, o = o + Math.imul(p, se) | 0, o = o + Math.imul(C, K) | 0, h = h + Math.imul(C, se) | 0;
      var ln = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (ln >>> 26) | 0, ln &= 67108863, l = Math.imul(me, Me), o = Math.imul(me, _e), o = o + Math.imul(Ie, Me) | 0, h = Math.imul(Ie, _e), l = l + Math.imul(Ce, Re) | 0, o = o + Math.imul(Ce, ke) | 0, o = o + Math.imul(Ee, Re) | 0, h = h + Math.imul(Ee, ke) | 0, l = l + Math.imul(ve, Ae) | 0, o = o + Math.imul(ve, Se) | 0, o = o + Math.imul(xe, Ae) | 0, h = h + Math.imul(xe, Se) | 0, l = l + Math.imul(ge, De) | 0, o = o + Math.imul(ge, Te) | 0, o = o + Math.imul(te, De) | 0, h = h + Math.imul(te, Te) | 0, l = l + Math.imul(le, Ue) | 0, o = o + Math.imul(le, Be) | 0, o = o + Math.imul(ye, Ue) | 0, h = h + Math.imul(ye, Be) | 0, l = l + Math.imul(fe, Pe) | 0, o = o + Math.imul(fe, Oe) | 0, o = o + Math.imul(be, Pe) | 0, h = h + Math.imul(be, Oe) | 0, l = l + Math.imul(G, Ne) | 0, o = o + Math.imul(G, Le) | 0, o = o + Math.imul(V, Ne) | 0, h = h + Math.imul(V, Le) | 0, l = l + Math.imul(z, je) | 0, o = o + Math.imul(z, M) | 0, o = o + Math.imul(O, je) | 0, h = h + Math.imul(O, M) | 0, l = l + Math.imul(_, K) | 0, o = o + Math.imul(_, se) | 0, o = o + Math.imul(j, K) | 0, h = h + Math.imul(j, se) | 0, l = l + Math.imul(p, pe) | 0, o = o + Math.imul(p, de) | 0, o = o + Math.imul(C, pe) | 0, h = h + Math.imul(C, de) | 0;
      var hn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (hn >>> 26) | 0, hn &= 67108863, l = Math.imul(me, Re), o = Math.imul(me, ke), o = o + Math.imul(Ie, Re) | 0, h = Math.imul(Ie, ke), l = l + Math.imul(Ce, Ae) | 0, o = o + Math.imul(Ce, Se) | 0, o = o + Math.imul(Ee, Ae) | 0, h = h + Math.imul(Ee, Se) | 0, l = l + Math.imul(ve, De) | 0, o = o + Math.imul(ve, Te) | 0, o = o + Math.imul(xe, De) | 0, h = h + Math.imul(xe, Te) | 0, l = l + Math.imul(ge, Ue) | 0, o = o + Math.imul(ge, Be) | 0, o = o + Math.imul(te, Ue) | 0, h = h + Math.imul(te, Be) | 0, l = l + Math.imul(le, Pe) | 0, o = o + Math.imul(le, Oe) | 0, o = o + Math.imul(ye, Pe) | 0, h = h + Math.imul(ye, Oe) | 0, l = l + Math.imul(fe, Ne) | 0, o = o + Math.imul(fe, Le) | 0, o = o + Math.imul(be, Ne) | 0, h = h + Math.imul(be, Le) | 0, l = l + Math.imul(G, je) | 0, o = o + Math.imul(G, M) | 0, o = o + Math.imul(V, je) | 0, h = h + Math.imul(V, M) | 0, l = l + Math.imul(z, K) | 0, o = o + Math.imul(z, se) | 0, o = o + Math.imul(O, K) | 0, h = h + Math.imul(O, se) | 0, l = l + Math.imul(_, pe) | 0, o = o + Math.imul(_, de) | 0, o = o + Math.imul(j, pe) | 0, h = h + Math.imul(j, de) | 0;
      var un = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (un >>> 26) | 0, un &= 67108863, l = Math.imul(me, Ae), o = Math.imul(me, Se), o = o + Math.imul(Ie, Ae) | 0, h = Math.imul(Ie, Se), l = l + Math.imul(Ce, De) | 0, o = o + Math.imul(Ce, Te) | 0, o = o + Math.imul(Ee, De) | 0, h = h + Math.imul(Ee, Te) | 0, l = l + Math.imul(ve, Ue) | 0, o = o + Math.imul(ve, Be) | 0, o = o + Math.imul(xe, Ue) | 0, h = h + Math.imul(xe, Be) | 0, l = l + Math.imul(ge, Pe) | 0, o = o + Math.imul(ge, Oe) | 0, o = o + Math.imul(te, Pe) | 0, h = h + Math.imul(te, Oe) | 0, l = l + Math.imul(le, Ne) | 0, o = o + Math.imul(le, Le) | 0, o = o + Math.imul(ye, Ne) | 0, h = h + Math.imul(ye, Le) | 0, l = l + Math.imul(fe, je) | 0, o = o + Math.imul(fe, M) | 0, o = o + Math.imul(be, je) | 0, h = h + Math.imul(be, M) | 0, l = l + Math.imul(G, K) | 0, o = o + Math.imul(G, se) | 0, o = o + Math.imul(V, K) | 0, h = h + Math.imul(V, se) | 0, l = l + Math.imul(z, pe) | 0, o = o + Math.imul(z, de) | 0, o = o + Math.imul(O, pe) | 0, h = h + Math.imul(O, de) | 0;
      var mn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (mn >>> 26) | 0, mn &= 67108863, l = Math.imul(me, De), o = Math.imul(me, Te), o = o + Math.imul(Ie, De) | 0, h = Math.imul(Ie, Te), l = l + Math.imul(Ce, Ue) | 0, o = o + Math.imul(Ce, Be) | 0, o = o + Math.imul(Ee, Ue) | 0, h = h + Math.imul(Ee, Be) | 0, l = l + Math.imul(ve, Pe) | 0, o = o + Math.imul(ve, Oe) | 0, o = o + Math.imul(xe, Pe) | 0, h = h + Math.imul(xe, Oe) | 0, l = l + Math.imul(ge, Ne) | 0, o = o + Math.imul(ge, Le) | 0, o = o + Math.imul(te, Ne) | 0, h = h + Math.imul(te, Le) | 0, l = l + Math.imul(le, je) | 0, o = o + Math.imul(le, M) | 0, o = o + Math.imul(ye, je) | 0, h = h + Math.imul(ye, M) | 0, l = l + Math.imul(fe, K) | 0, o = o + Math.imul(fe, se) | 0, o = o + Math.imul(be, K) | 0, h = h + Math.imul(be, se) | 0, l = l + Math.imul(G, pe) | 0, o = o + Math.imul(G, de) | 0, o = o + Math.imul(V, pe) | 0, h = h + Math.imul(V, de) | 0;
      var pn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (pn >>> 26) | 0, pn &= 67108863, l = Math.imul(me, Ue), o = Math.imul(me, Be), o = o + Math.imul(Ie, Ue) | 0, h = Math.imul(Ie, Be), l = l + Math.imul(Ce, Pe) | 0, o = o + Math.imul(Ce, Oe) | 0, o = o + Math.imul(Ee, Pe) | 0, h = h + Math.imul(Ee, Oe) | 0, l = l + Math.imul(ve, Ne) | 0, o = o + Math.imul(ve, Le) | 0, o = o + Math.imul(xe, Ne) | 0, h = h + Math.imul(xe, Le) | 0, l = l + Math.imul(ge, je) | 0, o = o + Math.imul(ge, M) | 0, o = o + Math.imul(te, je) | 0, h = h + Math.imul(te, M) | 0, l = l + Math.imul(le, K) | 0, o = o + Math.imul(le, se) | 0, o = o + Math.imul(ye, K) | 0, h = h + Math.imul(ye, se) | 0, l = l + Math.imul(fe, pe) | 0, o = o + Math.imul(fe, de) | 0, o = o + Math.imul(be, pe) | 0, h = h + Math.imul(be, de) | 0;
      var bn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (bn >>> 26) | 0, bn &= 67108863, l = Math.imul(me, Pe), o = Math.imul(me, Oe), o = o + Math.imul(Ie, Pe) | 0, h = Math.imul(Ie, Oe), l = l + Math.imul(Ce, Ne) | 0, o = o + Math.imul(Ce, Le) | 0, o = o + Math.imul(Ee, Ne) | 0, h = h + Math.imul(Ee, Le) | 0, l = l + Math.imul(ve, je) | 0, o = o + Math.imul(ve, M) | 0, o = o + Math.imul(xe, je) | 0, h = h + Math.imul(xe, M) | 0, l = l + Math.imul(ge, K) | 0, o = o + Math.imul(ge, se) | 0, o = o + Math.imul(te, K) | 0, h = h + Math.imul(te, se) | 0, l = l + Math.imul(le, pe) | 0, o = o + Math.imul(le, de) | 0, o = o + Math.imul(ye, pe) | 0, h = h + Math.imul(ye, de) | 0;
      var gn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (gn >>> 26) | 0, gn &= 67108863, l = Math.imul(me, Ne), o = Math.imul(me, Le), o = o + Math.imul(Ie, Ne) | 0, h = Math.imul(Ie, Le), l = l + Math.imul(Ce, je) | 0, o = o + Math.imul(Ce, M) | 0, o = o + Math.imul(Ee, je) | 0, h = h + Math.imul(Ee, M) | 0, l = l + Math.imul(ve, K) | 0, o = o + Math.imul(ve, se) | 0, o = o + Math.imul(xe, K) | 0, h = h + Math.imul(xe, se) | 0, l = l + Math.imul(ge, pe) | 0, o = o + Math.imul(ge, de) | 0, o = o + Math.imul(te, pe) | 0, h = h + Math.imul(te, de) | 0;
      var xn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (xn >>> 26) | 0, xn &= 67108863, l = Math.imul(me, je), o = Math.imul(me, M), o = o + Math.imul(Ie, je) | 0, h = Math.imul(Ie, M), l = l + Math.imul(Ce, K) | 0, o = o + Math.imul(Ce, se) | 0, o = o + Math.imul(Ee, K) | 0, h = h + Math.imul(Ee, se) | 0, l = l + Math.imul(ve, pe) | 0, o = o + Math.imul(ve, de) | 0, o = o + Math.imul(xe, pe) | 0, h = h + Math.imul(xe, de) | 0;
      var yn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (yn >>> 26) | 0, yn &= 67108863, l = Math.imul(me, K), o = Math.imul(me, se), o = o + Math.imul(Ie, K) | 0, h = Math.imul(Ie, se), l = l + Math.imul(Ce, pe) | 0, o = o + Math.imul(Ce, de) | 0, o = o + Math.imul(Ee, pe) | 0, h = h + Math.imul(Ee, de) | 0;
      var vn = (E + l | 0) + ((o & 8191) << 13) | 0;
      E = (h + (o >>> 13) | 0) + (vn >>> 26) | 0, vn &= 67108863, l = Math.imul(me, pe), o = Math.imul(me, de), o = o + Math.imul(Ie, pe) | 0, h = Math.imul(Ie, de);
      var wn = (E + l | 0) + ((o & 8191) << 13) | 0;
      return E = (h + (o >>> 13) | 0) + (wn >>> 26) | 0, wn &= 67108863, w[0] = Fe, w[1] = et, w[2] = Ze, w[3] = Ye, w[4] = ot, w[5] = Tt, w[6] = vr, w[7] = At, w[8] = ln, w[9] = hn, w[10] = un, w[11] = mn, w[12] = pn, w[13] = bn, w[14] = gn, w[15] = xn, w[16] = yn, w[17] = vn, w[18] = wn, E !== 0 && (w[19] = E, u.length++), u;
    };
    Math.imul || (U = T);
    function H(y, s, f) {
      f.negative = s.negative ^ y.negative, f.length = y.length + s.length;
      for (var u = 0, g = 0, x = 0; x < f.length - 1; x++) {
        var w = g;
        g = 0;
        for (var E = u & 67108863, l = Math.min(x, s.length - 1), o = Math.max(0, x - y.length + 1); o <= l; o++) {
          var h = x - o, I = y.words[h] | 0, p = s.words[o] | 0, C = I * p, N = C & 67108863;
          w = w + (C / 67108864 | 0) | 0, N = N + E | 0, E = N & 67108863, w = w + (N >>> 26) | 0, g += w >>> 26, w &= 67108863;
        }
        f.words[x] = E, u = w, w = g;
      }
      return u !== 0 ? f.words[x] = u : f.length--, f._strip();
    }
    function P(y, s, f) {
      return H(y, s, f);
    }
    i.prototype.mulTo = function(s, f) {
      var u, g = this.length + s.length;
      return this.length === 10 && s.length === 10 ? u = U(this, s, f) : g < 63 ? u = T(this, s, f) : g < 1024 ? u = H(this, s, f) : u = P(this, s, f), u;
    }, i.prototype.mul = function(s) {
      var f = new i(null);
      return f.words = new Array(this.length + s.length), this.mulTo(s, f);
    }, i.prototype.mulf = function(s) {
      var f = new i(null);
      return f.words = new Array(this.length + s.length), P(this, s, f);
    }, i.prototype.imul = function(s) {
      return this.clone().mulTo(s, this);
    }, i.prototype.imuln = function(s) {
      var f = s < 0;
      f && (s = -s), n(typeof s == "number"), n(s < 67108864);
      for (var u = 0, g = 0; g < this.length; g++) {
        var x = (this.words[g] | 0) * s, w = (x & 67108863) + (u & 67108863);
        u >>= 26, u += x / 67108864 | 0, u += w >>> 26, this.words[g] = w & 67108863;
      }
      return u !== 0 && (this.words[g] = u, this.length++), f ? this.ineg() : this;
    }, i.prototype.muln = function(s) {
      return this.clone().imuln(s);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(s) {
      var f = k(s);
      if (f.length === 0)
        return new i(1);
      for (var u = this, g = 0; g < f.length && f[g] === 0; g++, u = u.sqr())
        ;
      if (++g < f.length)
        for (var x = u.sqr(); g < f.length; g++, x = x.sqr())
          f[g] !== 0 && (u = u.mul(x));
      return u;
    }, i.prototype.iushln = function(s) {
      n(typeof s == "number" && s >= 0);
      var f = s % 26, u = (s - f) / 26, g = 67108863 >>> 26 - f << 26 - f, x;
      if (f !== 0) {
        var w = 0;
        for (x = 0; x < this.length; x++) {
          var E = this.words[x] & g, l = (this.words[x] | 0) - E << f;
          this.words[x] = l | w, w = E >>> 26 - f;
        }
        w && (this.words[x] = w, this.length++);
      }
      if (u !== 0) {
        for (x = this.length - 1; x >= 0; x--)
          this.words[x + u] = this.words[x];
        for (x = 0; x < u; x++)
          this.words[x] = 0;
        this.length += u;
      }
      return this._strip();
    }, i.prototype.ishln = function(s) {
      return n(this.negative === 0), this.iushln(s);
    }, i.prototype.iushrn = function(s, f, u) {
      n(typeof s == "number" && s >= 0);
      var g;
      f ? g = (f - f % 26) / 26 : g = 0;
      var x = s % 26, w = Math.min((s - x) / 26, this.length), E = 67108863 ^ 67108863 >>> x << x, l = u;
      if (g -= w, g = Math.max(0, g), l) {
        for (var o = 0; o < w; o++)
          l.words[o] = this.words[o];
        l.length = w;
      }
      if (w !== 0)
        if (this.length > w)
          for (this.length -= w, o = 0; o < this.length; o++)
            this.words[o] = this.words[o + w];
        else
          this.words[0] = 0, this.length = 1;
      var h = 0;
      for (o = this.length - 1; o >= 0 && (h !== 0 || o >= g); o--) {
        var I = this.words[o] | 0;
        this.words[o] = h << 26 - x | I >>> x, h = I & E;
      }
      return l && h !== 0 && (l.words[l.length++] = h), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, i.prototype.ishrn = function(s, f, u) {
      return n(this.negative === 0), this.iushrn(s, f, u);
    }, i.prototype.shln = function(s) {
      return this.clone().ishln(s);
    }, i.prototype.ushln = function(s) {
      return this.clone().iushln(s);
    }, i.prototype.shrn = function(s) {
      return this.clone().ishrn(s);
    }, i.prototype.ushrn = function(s) {
      return this.clone().iushrn(s);
    }, i.prototype.testn = function(s) {
      n(typeof s == "number" && s >= 0);
      var f = s % 26, u = (s - f) / 26, g = 1 << f;
      if (this.length <= u)
        return !1;
      var x = this.words[u];
      return !!(x & g);
    }, i.prototype.imaskn = function(s) {
      n(typeof s == "number" && s >= 0);
      var f = s % 26, u = (s - f) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= u)
        return this;
      if (f !== 0 && u++, this.length = Math.min(u, this.length), f !== 0) {
        var g = 67108863 ^ 67108863 >>> f << f;
        this.words[this.length - 1] &= g;
      }
      return this._strip();
    }, i.prototype.maskn = function(s) {
      return this.clone().imaskn(s);
    }, i.prototype.iaddn = function(s) {
      return n(typeof s == "number"), n(s < 67108864), s < 0 ? this.isubn(-s) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= s ? (this.words[0] = s - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(s), this.negative = 1, this) : this._iaddn(s);
    }, i.prototype._iaddn = function(s) {
      this.words[0] += s;
      for (var f = 0; f < this.length && this.words[f] >= 67108864; f++)
        this.words[f] -= 67108864, f === this.length - 1 ? this.words[f + 1] = 1 : this.words[f + 1]++;
      return this.length = Math.max(this.length, f + 1), this;
    }, i.prototype.isubn = function(s) {
      if (n(typeof s == "number"), n(s < 67108864), s < 0)
        return this.iaddn(-s);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(s), this.negative = 1, this;
      if (this.words[0] -= s, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var f = 0; f < this.length && this.words[f] < 0; f++)
          this.words[f] += 67108864, this.words[f + 1] -= 1;
      return this._strip();
    }, i.prototype.addn = function(s) {
      return this.clone().iaddn(s);
    }, i.prototype.subn = function(s) {
      return this.clone().isubn(s);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(s, f, u) {
      var g = s.length + u, x;
      this._expand(g);
      var w, E = 0;
      for (x = 0; x < s.length; x++) {
        w = (this.words[x + u] | 0) + E;
        var l = (s.words[x] | 0) * f;
        w -= l & 67108863, E = (w >> 26) - (l / 67108864 | 0), this.words[x + u] = w & 67108863;
      }
      for (; x < this.length - u; x++)
        w = (this.words[x + u] | 0) + E, E = w >> 26, this.words[x + u] = w & 67108863;
      if (E === 0)
        return this._strip();
      for (n(E === -1), E = 0, x = 0; x < this.length; x++)
        w = -(this.words[x] | 0) + E, E = w >> 26, this.words[x] = w & 67108863;
      return this.negative = 1, this._strip();
    }, i.prototype._wordDiv = function(s, f) {
      var u = this.length - s.length, g = this.clone(), x = s, w = x.words[x.length - 1] | 0, E = this._countBits(w);
      u = 26 - E, u !== 0 && (x = x.ushln(u), g.iushln(u), w = x.words[x.length - 1] | 0);
      var l = g.length - x.length, o;
      if (f !== "mod") {
        o = new i(null), o.length = l + 1, o.words = new Array(o.length);
        for (var h = 0; h < o.length; h++)
          o.words[h] = 0;
      }
      var I = g.clone()._ishlnsubmul(x, 1, l);
      I.negative === 0 && (g = I, o && (o.words[l] = 1));
      for (var p = l - 1; p >= 0; p--) {
        var C = (g.words[x.length + p] | 0) * 67108864 + (g.words[x.length + p - 1] | 0);
        for (C = Math.min(C / w | 0, 67108863), g._ishlnsubmul(x, C, p); g.negative !== 0; )
          C--, g.negative = 0, g._ishlnsubmul(x, 1, p), g.isZero() || (g.negative ^= 1);
        o && (o.words[p] = C);
      }
      return o && o._strip(), g._strip(), f !== "div" && u !== 0 && g.iushrn(u), {
        div: o || null,
        mod: g
      };
    }, i.prototype.divmod = function(s, f, u) {
      if (n(!s.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var g, x, w;
      return this.negative !== 0 && s.negative === 0 ? (w = this.neg().divmod(s, f), f !== "mod" && (g = w.div.neg()), f !== "div" && (x = w.mod.neg(), u && x.negative !== 0 && x.iadd(s)), {
        div: g,
        mod: x
      }) : this.negative === 0 && s.negative !== 0 ? (w = this.divmod(s.neg(), f), f !== "mod" && (g = w.div.neg()), {
        div: g,
        mod: w.mod
      }) : (this.negative & s.negative) !== 0 ? (w = this.neg().divmod(s.neg(), f), f !== "div" && (x = w.mod.neg(), u && x.negative !== 0 && x.isub(s)), {
        div: w.div,
        mod: x
      }) : s.length > this.length || this.cmp(s) < 0 ? {
        div: new i(0),
        mod: this
      } : s.length === 1 ? f === "div" ? {
        div: this.divn(s.words[0]),
        mod: null
      } : f === "mod" ? {
        div: null,
        mod: new i(this.modrn(s.words[0]))
      } : {
        div: this.divn(s.words[0]),
        mod: new i(this.modrn(s.words[0]))
      } : this._wordDiv(s, f);
    }, i.prototype.div = function(s) {
      return this.divmod(s, "div", !1).div;
    }, i.prototype.mod = function(s) {
      return this.divmod(s, "mod", !1).mod;
    }, i.prototype.umod = function(s) {
      return this.divmod(s, "mod", !0).mod;
    }, i.prototype.divRound = function(s) {
      var f = this.divmod(s);
      if (f.mod.isZero())
        return f.div;
      var u = f.div.negative !== 0 ? f.mod.isub(s) : f.mod, g = s.ushrn(1), x = s.andln(1), w = u.cmp(g);
      return w < 0 || x === 1 && w === 0 ? f.div : f.div.negative !== 0 ? f.div.isubn(1) : f.div.iaddn(1);
    }, i.prototype.modrn = function(s) {
      var f = s < 0;
      f && (s = -s), n(s <= 67108863);
      for (var u = (1 << 26) % s, g = 0, x = this.length - 1; x >= 0; x--)
        g = (u * g + (this.words[x] | 0)) % s;
      return f ? -g : g;
    }, i.prototype.modn = function(s) {
      return this.modrn(s);
    }, i.prototype.idivn = function(s) {
      var f = s < 0;
      f && (s = -s), n(s <= 67108863);
      for (var u = 0, g = this.length - 1; g >= 0; g--) {
        var x = (this.words[g] | 0) + u * 67108864;
        this.words[g] = x / s | 0, u = x % s;
      }
      return this._strip(), f ? this.ineg() : this;
    }, i.prototype.divn = function(s) {
      return this.clone().idivn(s);
    }, i.prototype.egcd = function(s) {
      n(s.negative === 0), n(!s.isZero());
      var f = this, u = s.clone();
      f.negative !== 0 ? f = f.umod(s) : f = f.clone();
      for (var g = new i(1), x = new i(0), w = new i(0), E = new i(1), l = 0; f.isEven() && u.isEven(); )
        f.iushrn(1), u.iushrn(1), ++l;
      for (var o = u.clone(), h = f.clone(); !f.isZero(); ) {
        for (var I = 0, p = 1; (f.words[0] & p) === 0 && I < 26; ++I, p <<= 1)
          ;
        if (I > 0)
          for (f.iushrn(I); I-- > 0; )
            (g.isOdd() || x.isOdd()) && (g.iadd(o), x.isub(h)), g.iushrn(1), x.iushrn(1);
        for (var C = 0, N = 1; (u.words[0] & N) === 0 && C < 26; ++C, N <<= 1)
          ;
        if (C > 0)
          for (u.iushrn(C); C-- > 0; )
            (w.isOdd() || E.isOdd()) && (w.iadd(o), E.isub(h)), w.iushrn(1), E.iushrn(1);
        f.cmp(u) >= 0 ? (f.isub(u), g.isub(w), x.isub(E)) : (u.isub(f), w.isub(g), E.isub(x));
      }
      return {
        a: w,
        b: E,
        gcd: u.iushln(l)
      };
    }, i.prototype._invmp = function(s) {
      n(s.negative === 0), n(!s.isZero());
      var f = this, u = s.clone();
      f.negative !== 0 ? f = f.umod(s) : f = f.clone();
      for (var g = new i(1), x = new i(0), w = u.clone(); f.cmpn(1) > 0 && u.cmpn(1) > 0; ) {
        for (var E = 0, l = 1; (f.words[0] & l) === 0 && E < 26; ++E, l <<= 1)
          ;
        if (E > 0)
          for (f.iushrn(E); E-- > 0; )
            g.isOdd() && g.iadd(w), g.iushrn(1);
        for (var o = 0, h = 1; (u.words[0] & h) === 0 && o < 26; ++o, h <<= 1)
          ;
        if (o > 0)
          for (u.iushrn(o); o-- > 0; )
            x.isOdd() && x.iadd(w), x.iushrn(1);
        f.cmp(u) >= 0 ? (f.isub(u), g.isub(x)) : (u.isub(f), x.isub(g));
      }
      var I;
      return f.cmpn(1) === 0 ? I = g : I = x, I.cmpn(0) < 0 && I.iadd(s), I;
    }, i.prototype.gcd = function(s) {
      if (this.isZero())
        return s.abs();
      if (s.isZero())
        return this.abs();
      var f = this.clone(), u = s.clone();
      f.negative = 0, u.negative = 0;
      for (var g = 0; f.isEven() && u.isEven(); g++)
        f.iushrn(1), u.iushrn(1);
      do {
        for (; f.isEven(); )
          f.iushrn(1);
        for (; u.isEven(); )
          u.iushrn(1);
        var x = f.cmp(u);
        if (x < 0) {
          var w = f;
          f = u, u = w;
        } else if (x === 0 || u.cmpn(1) === 0)
          break;
        f.isub(u);
      } while (!0);
      return u.iushln(g);
    }, i.prototype.invm = function(s) {
      return this.egcd(s).a.umod(s);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(s) {
      return this.words[0] & s;
    }, i.prototype.bincn = function(s) {
      n(typeof s == "number");
      var f = s % 26, u = (s - f) / 26, g = 1 << f;
      if (this.length <= u)
        return this._expand(u + 1), this.words[u] |= g, this;
      for (var x = g, w = u; x !== 0 && w < this.length; w++) {
        var E = this.words[w] | 0;
        E += x, x = E >>> 26, E &= 67108863, this.words[w] = E;
      }
      return x !== 0 && (this.words[w] = x, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(s) {
      var f = s < 0;
      if (this.negative !== 0 && !f)
        return -1;
      if (this.negative === 0 && f)
        return 1;
      this._strip();
      var u;
      if (this.length > 1)
        u = 1;
      else {
        f && (s = -s), n(s <= 67108863, "Number is too big");
        var g = this.words[0] | 0;
        u = g === s ? 0 : g < s ? -1 : 1;
      }
      return this.negative !== 0 ? -u | 0 : u;
    }, i.prototype.cmp = function(s) {
      if (this.negative !== 0 && s.negative === 0)
        return -1;
      if (this.negative === 0 && s.negative !== 0)
        return 1;
      var f = this.ucmp(s);
      return this.negative !== 0 ? -f | 0 : f;
    }, i.prototype.ucmp = function(s) {
      if (this.length > s.length)
        return 1;
      if (this.length < s.length)
        return -1;
      for (var f = 0, u = this.length - 1; u >= 0; u--) {
        var g = this.words[u] | 0, x = s.words[u] | 0;
        if (g !== x) {
          g < x ? f = -1 : g > x && (f = 1);
          break;
        }
      }
      return f;
    }, i.prototype.gtn = function(s) {
      return this.cmpn(s) === 1;
    }, i.prototype.gt = function(s) {
      return this.cmp(s) === 1;
    }, i.prototype.gten = function(s) {
      return this.cmpn(s) >= 0;
    }, i.prototype.gte = function(s) {
      return this.cmp(s) >= 0;
    }, i.prototype.ltn = function(s) {
      return this.cmpn(s) === -1;
    }, i.prototype.lt = function(s) {
      return this.cmp(s) === -1;
    }, i.prototype.lten = function(s) {
      return this.cmpn(s) <= 0;
    }, i.prototype.lte = function(s) {
      return this.cmp(s) <= 0;
    }, i.prototype.eqn = function(s) {
      return this.cmpn(s) === 0;
    }, i.prototype.eq = function(s) {
      return this.cmp(s) === 0;
    }, i.red = function(s) {
      return new $(s);
    }, i.prototype.toRed = function(s) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), s.convertTo(this)._forceRed(s);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(s) {
      return this.red = s, this;
    }, i.prototype.forceRed = function(s) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(s);
    }, i.prototype.redAdd = function(s) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, s);
    }, i.prototype.redIAdd = function(s) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, s);
    }, i.prototype.redSub = function(s) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, s);
    }, i.prototype.redISub = function(s) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, s);
    }, i.prototype.redShl = function(s) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, s);
    }, i.prototype.redMul = function(s) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, s), this.red.mul(this, s);
    }, i.prototype.redIMul = function(s) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, s), this.red.imul(this, s);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(s) {
      return n(this.red && !s.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, s);
    };
    var R = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function W(y, s) {
      this.name = y, this.p = new i(s, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    W.prototype._tmp = function() {
      var s = new i(null);
      return s.words = new Array(Math.ceil(this.n / 13)), s;
    }, W.prototype.ireduce = function(s) {
      var f = s, u;
      do
        this.split(f, this.tmp), f = this.imulK(f), f = f.iadd(this.tmp), u = f.bitLength();
      while (u > this.n);
      var g = u < this.n ? -1 : f.ucmp(this.p);
      return g === 0 ? (f.words[0] = 0, f.length = 1) : g > 0 ? f.isub(this.p) : f.strip !== void 0 ? f.strip() : f._strip(), f;
    }, W.prototype.split = function(s, f) {
      s.iushrn(this.n, 0, f);
    }, W.prototype.imulK = function(s) {
      return s.imul(this.k);
    };
    function Z() {
      W.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    a(Z, W), Z.prototype.split = function(s, f) {
      for (var u = 4194303, g = Math.min(s.length, 9), x = 0; x < g; x++)
        f.words[x] = s.words[x];
      if (f.length = g, s.length <= 9) {
        s.words[0] = 0, s.length = 1;
        return;
      }
      var w = s.words[9];
      for (f.words[f.length++] = w & u, x = 10; x < s.length; x++) {
        var E = s.words[x] | 0;
        s.words[x - 10] = (E & u) << 4 | w >>> 22, w = E;
      }
      w >>>= 22, s.words[x - 10] = w, w === 0 && s.length > 10 ? s.length -= 10 : s.length -= 9;
    }, Z.prototype.imulK = function(s) {
      s.words[s.length] = 0, s.words[s.length + 1] = 0, s.length += 2;
      for (var f = 0, u = 0; u < s.length; u++) {
        var g = s.words[u] | 0;
        f += g * 977, s.words[u] = f & 67108863, f = g * 64 + (f / 67108864 | 0);
      }
      return s.words[s.length - 1] === 0 && (s.length--, s.words[s.length - 1] === 0 && s.length--), s;
    };
    function Y() {
      W.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    a(Y, W);
    function ne() {
      W.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    a(ne, W);
    function ce() {
      W.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    a(ce, W), ce.prototype.imulK = function(s) {
      for (var f = 0, u = 0; u < s.length; u++) {
        var g = (s.words[u] | 0) * 19 + f, x = g & 67108863;
        g >>>= 26, s.words[u] = x, f = g;
      }
      return f !== 0 && (s.words[s.length++] = f), s;
    }, i._prime = function(s) {
      if (R[s])
        return R[s];
      var f;
      if (s === "k256")
        f = new Z();
      else if (s === "p224")
        f = new Y();
      else if (s === "p192")
        f = new ne();
      else if (s === "p25519")
        f = new ce();
      else
        throw new Error("Unknown prime " + s);
      return R[s] = f, f;
    };
    function $(y) {
      if (typeof y == "string") {
        var s = i._prime(y);
        this.m = s.p, this.prime = s;
      } else
        n(y.gtn(1), "modulus must be greater than 1"), this.m = y, this.prime = null;
    }
    $.prototype._verify1 = function(s) {
      n(s.negative === 0, "red works only with positives"), n(s.red, "red works only with red numbers");
    }, $.prototype._verify2 = function(s, f) {
      n((s.negative | f.negative) === 0, "red works only with positives"), n(
        s.red && s.red === f.red,
        "red works only with red numbers"
      );
    }, $.prototype.imod = function(s) {
      return this.prime ? this.prime.ireduce(s)._forceRed(this) : (v(s, s.umod(this.m)._forceRed(this)), s);
    }, $.prototype.neg = function(s) {
      return s.isZero() ? s.clone() : this.m.sub(s)._forceRed(this);
    }, $.prototype.add = function(s, f) {
      this._verify2(s, f);
      var u = s.add(f);
      return u.cmp(this.m) >= 0 && u.isub(this.m), u._forceRed(this);
    }, $.prototype.iadd = function(s, f) {
      this._verify2(s, f);
      var u = s.iadd(f);
      return u.cmp(this.m) >= 0 && u.isub(this.m), u;
    }, $.prototype.sub = function(s, f) {
      this._verify2(s, f);
      var u = s.sub(f);
      return u.cmpn(0) < 0 && u.iadd(this.m), u._forceRed(this);
    }, $.prototype.isub = function(s, f) {
      this._verify2(s, f);
      var u = s.isub(f);
      return u.cmpn(0) < 0 && u.iadd(this.m), u;
    }, $.prototype.shl = function(s, f) {
      return this._verify1(s), this.imod(s.ushln(f));
    }, $.prototype.imul = function(s, f) {
      return this._verify2(s, f), this.imod(s.imul(f));
    }, $.prototype.mul = function(s, f) {
      return this._verify2(s, f), this.imod(s.mul(f));
    }, $.prototype.isqr = function(s) {
      return this.imul(s, s.clone());
    }, $.prototype.sqr = function(s) {
      return this.mul(s, s);
    }, $.prototype.sqrt = function(s) {
      if (s.isZero())
        return s.clone();
      var f = this.m.andln(3);
      if (n(f % 2 === 1), f === 3) {
        var u = this.m.add(new i(1)).iushrn(2);
        return this.pow(s, u);
      }
      for (var g = this.m.subn(1), x = 0; !g.isZero() && g.andln(1) === 0; )
        x++, g.iushrn(1);
      n(!g.isZero());
      var w = new i(1).toRed(this), E = w.redNeg(), l = this.m.subn(1).iushrn(1), o = this.m.bitLength();
      for (o = new i(2 * o * o).toRed(this); this.pow(o, l).cmp(E) !== 0; )
        o.redIAdd(E);
      for (var h = this.pow(o, g), I = this.pow(s, g.addn(1).iushrn(1)), p = this.pow(s, g), C = x; p.cmp(w) !== 0; ) {
        for (var N = p, _ = 0; N.cmp(w) !== 0; _++)
          N = N.redSqr();
        n(_ < C);
        var j = this.pow(h, new i(1).iushln(C - _ - 1));
        I = I.redMul(j), h = j.redSqr(), p = p.redMul(h), C = _;
      }
      return I;
    }, $.prototype.invm = function(s) {
      var f = s._invmp(this.m);
      return f.negative !== 0 ? (f.negative = 0, this.imod(f).redNeg()) : this.imod(f);
    }, $.prototype.pow = function(s, f) {
      if (f.isZero())
        return new i(1).toRed(this);
      if (f.cmpn(1) === 0)
        return s.clone();
      var u = 4, g = new Array(1 << u);
      g[0] = new i(1).toRed(this), g[1] = s;
      for (var x = 2; x < g.length; x++)
        g[x] = this.mul(g[x - 1], s);
      var w = g[0], E = 0, l = 0, o = f.bitLength() % 26;
      for (o === 0 && (o = 26), x = f.length - 1; x >= 0; x--) {
        for (var h = f.words[x], I = o - 1; I >= 0; I--) {
          var p = h >> I & 1;
          if (w !== g[0] && (w = this.sqr(w)), p === 0 && E === 0) {
            l = 0;
            continue;
          }
          E <<= 1, E |= p, l++, !(l !== u && (x !== 0 || I !== 0)) && (w = this.mul(w, g[E]), l = 0, E = 0);
        }
        o = 26;
      }
      return w;
    }, $.prototype.convertTo = function(s) {
      var f = s.umod(this.m);
      return f === s ? f.clone() : f;
    }, $.prototype.convertFrom = function(s) {
      var f = s.clone();
      return f.red = null, f;
    }, i.mont = function(s) {
      return new ie(s);
    };
    function ie(y) {
      $.call(this, y), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    a(ie, $), ie.prototype.convertTo = function(s) {
      return this.imod(s.ushln(this.shift));
    }, ie.prototype.convertFrom = function(s) {
      var f = this.imod(s.mul(this.rinv));
      return f.red = null, f;
    }, ie.prototype.imul = function(s, f) {
      if (s.isZero() || f.isZero())
        return s.words[0] = 0, s.length = 1, s;
      var u = s.imul(f), g = u.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = u.isub(g).iushrn(this.shift), w = x;
      return x.cmp(this.m) >= 0 ? w = x.isub(this.m) : x.cmpn(0) < 0 && (w = x.iadd(this.m)), w._forceRed(this);
    }, ie.prototype.mul = function(s, f) {
      if (s.isZero() || f.isZero())
        return new i(0)._forceRed(this);
      var u = s.mul(f), g = u.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = u.isub(g).iushrn(this.shift), w = x;
      return x.cmp(this.m) >= 0 ? w = x.isub(this.m) : x.cmpn(0) < 0 && (w = x.iadd(this.m)), w._forceRed(this);
    }, ie.prototype.invm = function(s) {
      var f = this.imod(s._invmp(this.m).mul(this.r2));
      return f._forceRed(this);
    };
  })(t, Gt);
})(_f);
const ze = _f.exports;
var Bt = {}, Ke = {}, Ya = Rf;
function Rf(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
Rf.equal = function(e, r, n) {
  if (e != r)
    throw new Error(n || "Assertion failed: " + e + " != " + r);
};
var Us = { exports: {} };
typeof Object.create == "function" ? Us.exports = function(e, r) {
  r && (e.super_ = r, e.prototype = Object.create(r.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : Us.exports = function(e, r) {
  if (r) {
    e.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
  }
};
var Fu = Ya, Mu = Us.exports;
Ke.inherits = Mu;
function _u(t, e) {
  return (t.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= t.length ? !1 : (t.charCodeAt(e + 1) & 64512) === 56320;
}
function Ru(t, e) {
  if (Array.isArray(t))
    return t.slice();
  if (!t)
    return [];
  var r = [];
  if (typeof t == "string")
    if (e) {
      if (e === "hex")
        for (t = t.replace(/[^a-z0-9]+/ig, ""), t.length % 2 !== 0 && (t = "0" + t), a = 0; a < t.length; a += 2)
          r.push(parseInt(t[a] + t[a + 1], 16));
    } else
      for (var n = 0, a = 0; a < t.length; a++) {
        var i = t.charCodeAt(a);
        i < 128 ? r[n++] = i : i < 2048 ? (r[n++] = i >> 6 | 192, r[n++] = i & 63 | 128) : _u(t, a) ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++a) & 1023), r[n++] = i >> 18 | 240, r[n++] = i >> 12 & 63 | 128, r[n++] = i >> 6 & 63 | 128, r[n++] = i & 63 | 128) : (r[n++] = i >> 12 | 224, r[n++] = i >> 6 & 63 | 128, r[n++] = i & 63 | 128);
      }
  else
    for (a = 0; a < t.length; a++)
      r[a] = t[a] | 0;
  return r;
}
Ke.toArray = Ru;
function Tu(t) {
  for (var e = "", r = 0; r < t.length; r++)
    e += Uf(t[r].toString(16));
  return e;
}
Ke.toHex = Tu;
function Tf(t) {
  var e = t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (t & 255) << 24;
  return e >>> 0;
}
Ke.htonl = Tf;
function Uu(t, e) {
  for (var r = "", n = 0; n < t.length; n++) {
    var a = t[n];
    e === "little" && (a = Tf(a)), r += Pf(a.toString(16));
  }
  return r;
}
Ke.toHex32 = Uu;
function Uf(t) {
  return t.length === 1 ? "0" + t : t;
}
Ke.zero2 = Uf;
function Pf(t) {
  return t.length === 7 ? "0" + t : t.length === 6 ? "00" + t : t.length === 5 ? "000" + t : t.length === 4 ? "0000" + t : t.length === 3 ? "00000" + t : t.length === 2 ? "000000" + t : t.length === 1 ? "0000000" + t : t;
}
Ke.zero8 = Pf;
function Pu(t, e, r, n) {
  var a = r - e;
  Fu(a % 4 === 0);
  for (var i = new Array(a / 4), c = 0, d = e; c < i.length; c++, d += 4) {
    var m;
    n === "big" ? m = t[d] << 24 | t[d + 1] << 16 | t[d + 2] << 8 | t[d + 3] : m = t[d + 3] << 24 | t[d + 2] << 16 | t[d + 1] << 8 | t[d], i[c] = m >>> 0;
  }
  return i;
}
Ke.join32 = Pu;
function Ou(t, e) {
  for (var r = new Array(t.length * 4), n = 0, a = 0; n < t.length; n++, a += 4) {
    var i = t[n];
    e === "big" ? (r[a] = i >>> 24, r[a + 1] = i >>> 16 & 255, r[a + 2] = i >>> 8 & 255, r[a + 3] = i & 255) : (r[a + 3] = i >>> 24, r[a + 2] = i >>> 16 & 255, r[a + 1] = i >>> 8 & 255, r[a] = i & 255);
  }
  return r;
}
Ke.split32 = Ou;
function Nu(t, e) {
  return t >>> e | t << 32 - e;
}
Ke.rotr32 = Nu;
function Lu(t, e) {
  return t << e | t >>> 32 - e;
}
Ke.rotl32 = Lu;
function ju(t, e) {
  return t + e >>> 0;
}
Ke.sum32 = ju;
function Wu(t, e, r) {
  return t + e + r >>> 0;
}
Ke.sum32_3 = Wu;
function Hu(t, e, r, n) {
  return t + e + r + n >>> 0;
}
Ke.sum32_4 = Hu;
function zu(t, e, r, n, a) {
  return t + e + r + n + a >>> 0;
}
Ke.sum32_5 = zu;
function $u(t, e, r, n) {
  var a = t[e], i = t[e + 1], c = n + i >>> 0, d = (c < n ? 1 : 0) + r + a;
  t[e] = d >>> 0, t[e + 1] = c;
}
Ke.sum64 = $u;
function Vu(t, e, r, n) {
  var a = e + n >>> 0, i = (a < e ? 1 : 0) + t + r;
  return i >>> 0;
}
Ke.sum64_hi = Vu;
function Gu(t, e, r, n) {
  var a = e + n;
  return a >>> 0;
}
Ke.sum64_lo = Gu;
function Ku(t, e, r, n, a, i, c, d) {
  var m = 0, b = e;
  b = b + n >>> 0, m += b < e ? 1 : 0, b = b + i >>> 0, m += b < i ? 1 : 0, b = b + d >>> 0, m += b < d ? 1 : 0;
  var v = t + r + a + c + m;
  return v >>> 0;
}
Ke.sum64_4_hi = Ku;
function qu(t, e, r, n, a, i, c, d) {
  var m = e + n + i + d;
  return m >>> 0;
}
Ke.sum64_4_lo = qu;
function Zu(t, e, r, n, a, i, c, d, m, b) {
  var v = 0, A = e;
  A = A + n >>> 0, v += A < e ? 1 : 0, A = A + i >>> 0, v += A < i ? 1 : 0, A = A + d >>> 0, v += A < d ? 1 : 0, A = A + b >>> 0, v += A < b ? 1 : 0;
  var S = t + r + a + c + m + v;
  return S >>> 0;
}
Ke.sum64_5_hi = Zu;
function Yu(t, e, r, n, a, i, c, d, m, b) {
  var v = e + n + i + d + b;
  return v >>> 0;
}
Ke.sum64_5_lo = Yu;
function Xu(t, e, r) {
  var n = e << 32 - r | t >>> r;
  return n >>> 0;
}
Ke.rotr64_hi = Xu;
function Ju(t, e, r) {
  var n = t << 32 - r | e >>> r;
  return n >>> 0;
}
Ke.rotr64_lo = Ju;
function Qu(t, e, r) {
  return t >>> r;
}
Ke.shr64_hi = Qu;
function e2(t, e, r) {
  var n = t << 32 - r | e >>> r;
  return n >>> 0;
}
Ke.shr64_lo = e2;
var la = {}, F0 = Ke, t2 = Ya;
function Wi() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
la.BlockHash = Wi;
Wi.prototype.update = function(e, r) {
  if (e = F0.toArray(e, r), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
    e = this.pending;
    var n = e.length % this._delta8;
    this.pending = e.slice(e.length - n, e.length), this.pending.length === 0 && (this.pending = null), e = F0.join32(e, 0, e.length - n, this.endian);
    for (var a = 0; a < e.length; a += this._delta32)
      this._update(e, a, a + this._delta32);
  }
  return this;
};
Wi.prototype.digest = function(e) {
  return this.update(this._pad()), t2(this.pending === null), this._digest(e);
};
Wi.prototype._pad = function() {
  var e = this.pendingTotal, r = this._delta8, n = r - (e + this.padLength) % r, a = new Array(n + this.padLength);
  a[0] = 128;
  for (var i = 1; i < n; i++)
    a[i] = 0;
  if (e <<= 3, this.endian === "big") {
    for (var c = 8; c < this.padLength; c++)
      a[i++] = 0;
    a[i++] = 0, a[i++] = 0, a[i++] = 0, a[i++] = 0, a[i++] = e >>> 24 & 255, a[i++] = e >>> 16 & 255, a[i++] = e >>> 8 & 255, a[i++] = e & 255;
  } else
    for (a[i++] = e & 255, a[i++] = e >>> 8 & 255, a[i++] = e >>> 16 & 255, a[i++] = e >>> 24 & 255, a[i++] = 0, a[i++] = 0, a[i++] = 0, a[i++] = 0, c = 8; c < this.padLength; c++)
      a[i++] = 0;
  return a;
};
var ha = {}, Nr = {}, r2 = Ke, Br = r2.rotr32;
function n2(t, e, r, n) {
  if (t === 0)
    return Of(e, r, n);
  if (t === 1 || t === 3)
    return Lf(e, r, n);
  if (t === 2)
    return Nf(e, r, n);
}
Nr.ft_1 = n2;
function Of(t, e, r) {
  return t & e ^ ~t & r;
}
Nr.ch32 = Of;
function Nf(t, e, r) {
  return t & e ^ t & r ^ e & r;
}
Nr.maj32 = Nf;
function Lf(t, e, r) {
  return t ^ e ^ r;
}
Nr.p32 = Lf;
function a2(t) {
  return Br(t, 2) ^ Br(t, 13) ^ Br(t, 22);
}
Nr.s0_256 = a2;
function i2(t) {
  return Br(t, 6) ^ Br(t, 11) ^ Br(t, 25);
}
Nr.s1_256 = i2;
function s2(t) {
  return Br(t, 7) ^ Br(t, 18) ^ t >>> 3;
}
Nr.g0_256 = s2;
function o2(t) {
  return Br(t, 17) ^ Br(t, 19) ^ t >>> 10;
}
Nr.g1_256 = o2;
var ea = Ke, c2 = la, f2 = Nr, fs = ea.rotl32, pa = ea.sum32, d2 = ea.sum32_5, l2 = f2.ft_1, jf = c2.BlockHash, h2 = [
  1518500249,
  1859775393,
  2400959708,
  3395469782
];
function Tr() {
  if (!(this instanceof Tr))
    return new Tr();
  jf.call(this), this.h = [
    1732584193,
    4023233417,
    2562383102,
    271733878,
    3285377520
  ], this.W = new Array(80);
}
ea.inherits(Tr, jf);
var u2 = Tr;
Tr.blockSize = 512;
Tr.outSize = 160;
Tr.hmacStrength = 80;
Tr.padLength = 64;
Tr.prototype._update = function(e, r) {
  for (var n = this.W, a = 0; a < 16; a++)
    n[a] = e[r + a];
  for (; a < n.length; a++)
    n[a] = fs(n[a - 3] ^ n[a - 8] ^ n[a - 14] ^ n[a - 16], 1);
  var i = this.h[0], c = this.h[1], d = this.h[2], m = this.h[3], b = this.h[4];
  for (a = 0; a < n.length; a++) {
    var v = ~~(a / 20), A = d2(fs(i, 5), l2(v, c, d, m), b, n[a], h2[v]);
    b = m, m = d, d = fs(c, 30), c = i, i = A;
  }
  this.h[0] = pa(this.h[0], i), this.h[1] = pa(this.h[1], c), this.h[2] = pa(this.h[2], d), this.h[3] = pa(this.h[3], m), this.h[4] = pa(this.h[4], b);
};
Tr.prototype._digest = function(e) {
  return e === "hex" ? ea.toHex32(this.h, "big") : ea.split32(this.h, "big");
};
var ta = Ke, m2 = la, ua = Nr, p2 = Ya, cr = ta.sum32, b2 = ta.sum32_4, g2 = ta.sum32_5, x2 = ua.ch32, y2 = ua.maj32, v2 = ua.s0_256, w2 = ua.s1_256, A2 = ua.g0_256, C2 = ua.g1_256, Wf = m2.BlockHash, E2 = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
function Ur() {
  if (!(this instanceof Ur))
    return new Ur();
  Wf.call(this), this.h = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ], this.k = E2, this.W = new Array(64);
}
ta.inherits(Ur, Wf);
var Hf = Ur;
Ur.blockSize = 512;
Ur.outSize = 256;
Ur.hmacStrength = 192;
Ur.padLength = 64;
Ur.prototype._update = function(e, r) {
  for (var n = this.W, a = 0; a < 16; a++)
    n[a] = e[r + a];
  for (; a < n.length; a++)
    n[a] = b2(C2(n[a - 2]), n[a - 7], A2(n[a - 15]), n[a - 16]);
  var i = this.h[0], c = this.h[1], d = this.h[2], m = this.h[3], b = this.h[4], v = this.h[5], A = this.h[6], S = this.h[7];
  for (p2(this.k.length === n.length), a = 0; a < n.length; a++) {
    var D = g2(S, w2(b), x2(b, v, A), this.k[a], n[a]), B = cr(v2(i), y2(i, c, d));
    S = A, A = v, v = b, b = cr(m, D), m = d, d = c, c = i, i = cr(D, B);
  }
  this.h[0] = cr(this.h[0], i), this.h[1] = cr(this.h[1], c), this.h[2] = cr(this.h[2], d), this.h[3] = cr(this.h[3], m), this.h[4] = cr(this.h[4], b), this.h[5] = cr(this.h[5], v), this.h[6] = cr(this.h[6], A), this.h[7] = cr(this.h[7], S);
};
Ur.prototype._digest = function(e) {
  return e === "hex" ? ta.toHex32(this.h, "big") : ta.split32(this.h, "big");
};
var Ps = Ke, zf = Hf;
function Vr() {
  if (!(this instanceof Vr))
    return new Vr();
  zf.call(this), this.h = [
    3238371032,
    914150663,
    812702999,
    4144912697,
    4290775857,
    1750603025,
    1694076839,
    3204075428
  ];
}
Ps.inherits(Vr, zf);
var I2 = Vr;
Vr.blockSize = 512;
Vr.outSize = 224;
Vr.hmacStrength = 192;
Vr.padLength = 64;
Vr.prototype._digest = function(e) {
  return e === "hex" ? Ps.toHex32(this.h.slice(0, 7), "big") : Ps.split32(this.h.slice(0, 7), "big");
};
var Lt = Ke, k2 = la, S2 = Ya, Fr = Lt.rotr64_hi, Mr = Lt.rotr64_lo, $f = Lt.shr64_hi, Vf = Lt.shr64_lo, qr = Lt.sum64, ds = Lt.sum64_hi, ls = Lt.sum64_lo, D2 = Lt.sum64_4_hi, B2 = Lt.sum64_4_lo, F2 = Lt.sum64_5_hi, M2 = Lt.sum64_5_lo, Gf = k2.BlockHash, _2 = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
];
function xr() {
  if (!(this instanceof xr))
    return new xr();
  Gf.call(this), this.h = [
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ], this.k = _2, this.W = new Array(160);
}
Lt.inherits(xr, Gf);
var Kf = xr;
xr.blockSize = 1024;
xr.outSize = 512;
xr.hmacStrength = 192;
xr.padLength = 128;
xr.prototype._prepareBlock = function(e, r) {
  for (var n = this.W, a = 0; a < 32; a++)
    n[a] = e[r + a];
  for (; a < n.length; a += 2) {
    var i = z2(n[a - 4], n[a - 3]), c = $2(n[a - 4], n[a - 3]), d = n[a - 14], m = n[a - 13], b = W2(n[a - 30], n[a - 29]), v = H2(n[a - 30], n[a - 29]), A = n[a - 32], S = n[a - 31];
    n[a] = D2(
      i,
      c,
      d,
      m,
      b,
      v,
      A,
      S
    ), n[a + 1] = B2(
      i,
      c,
      d,
      m,
      b,
      v,
      A,
      S
    );
  }
};
xr.prototype._update = function(e, r) {
  this._prepareBlock(e, r);
  var n = this.W, a = this.h[0], i = this.h[1], c = this.h[2], d = this.h[3], m = this.h[4], b = this.h[5], v = this.h[6], A = this.h[7], S = this.h[8], D = this.h[9], B = this.h[10], F = this.h[11], k = this.h[12], T = this.h[13], U = this.h[14], H = this.h[15];
  S2(this.k.length === n.length);
  for (var P = 0; P < n.length; P += 2) {
    var R = U, W = H, Z = L2(S, D), Y = j2(S, D), ne = R2(S, D, B, F, k), ce = T2(S, D, B, F, k, T), $ = this.k[P], ie = this.k[P + 1], y = n[P], s = n[P + 1], f = F2(
      R,
      W,
      Z,
      Y,
      ne,
      ce,
      $,
      ie,
      y,
      s
    ), u = M2(
      R,
      W,
      Z,
      Y,
      ne,
      ce,
      $,
      ie,
      y,
      s
    );
    R = O2(a, i), W = N2(a, i), Z = U2(a, i, c, d, m), Y = P2(a, i, c, d, m, b);
    var g = ds(R, W, Z, Y), x = ls(R, W, Z, Y);
    U = k, H = T, k = B, T = F, B = S, F = D, S = ds(v, A, f, u), D = ls(A, A, f, u), v = m, A = b, m = c, b = d, c = a, d = i, a = ds(f, u, g, x), i = ls(f, u, g, x);
  }
  qr(this.h, 0, a, i), qr(this.h, 2, c, d), qr(this.h, 4, m, b), qr(this.h, 6, v, A), qr(this.h, 8, S, D), qr(this.h, 10, B, F), qr(this.h, 12, k, T), qr(this.h, 14, U, H);
};
xr.prototype._digest = function(e) {
  return e === "hex" ? Lt.toHex32(this.h, "big") : Lt.split32(this.h, "big");
};
function R2(t, e, r, n, a) {
  var i = t & r ^ ~t & a;
  return i < 0 && (i += 4294967296), i;
}
function T2(t, e, r, n, a, i) {
  var c = e & n ^ ~e & i;
  return c < 0 && (c += 4294967296), c;
}
function U2(t, e, r, n, a) {
  var i = t & r ^ t & a ^ r & a;
  return i < 0 && (i += 4294967296), i;
}
function P2(t, e, r, n, a, i) {
  var c = e & n ^ e & i ^ n & i;
  return c < 0 && (c += 4294967296), c;
}
function O2(t, e) {
  var r = Fr(t, e, 28), n = Fr(e, t, 2), a = Fr(e, t, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function N2(t, e) {
  var r = Mr(t, e, 28), n = Mr(e, t, 2), a = Mr(e, t, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function L2(t, e) {
  var r = Fr(t, e, 14), n = Fr(t, e, 18), a = Fr(e, t, 9), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function j2(t, e) {
  var r = Mr(t, e, 14), n = Mr(t, e, 18), a = Mr(e, t, 9), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function W2(t, e) {
  var r = Fr(t, e, 1), n = Fr(t, e, 8), a = $f(t, e, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function H2(t, e) {
  var r = Mr(t, e, 1), n = Mr(t, e, 8), a = Vf(t, e, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function z2(t, e) {
  var r = Fr(t, e, 19), n = Fr(e, t, 29), a = $f(t, e, 6), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function $2(t, e) {
  var r = Mr(t, e, 19), n = Mr(e, t, 29), a = Vf(t, e, 6), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
var Os = Ke, qf = Kf;
function Gr() {
  if (!(this instanceof Gr))
    return new Gr();
  qf.call(this), this.h = [
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ];
}
Os.inherits(Gr, qf);
var V2 = Gr;
Gr.blockSize = 1024;
Gr.outSize = 384;
Gr.hmacStrength = 192;
Gr.padLength = 128;
Gr.prototype._digest = function(e) {
  return e === "hex" ? Os.toHex32(this.h.slice(0, 12), "big") : Os.split32(this.h.slice(0, 12), "big");
};
ha.sha1 = u2;
ha.sha224 = I2;
ha.sha256 = Hf;
ha.sha384 = V2;
ha.sha512 = Kf;
var Zf = {}, _n = Ke, G2 = la, ci = _n.rotl32, M0 = _n.sum32, ba = _n.sum32_3, _0 = _n.sum32_4, Yf = G2.BlockHash;
function Pr() {
  if (!(this instanceof Pr))
    return new Pr();
  Yf.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
_n.inherits(Pr, Yf);
Zf.ripemd160 = Pr;
Pr.blockSize = 512;
Pr.outSize = 160;
Pr.hmacStrength = 192;
Pr.padLength = 64;
Pr.prototype._update = function(e, r) {
  for (var n = this.h[0], a = this.h[1], i = this.h[2], c = this.h[3], d = this.h[4], m = n, b = a, v = i, A = c, S = d, D = 0; D < 80; D++) {
    var B = M0(
      ci(
        _0(n, R0(D, a, i, c), e[Z2[D] + r], K2(D)),
        X2[D]
      ),
      d
    );
    n = d, d = c, c = ci(i, 10), i = a, a = B, B = M0(
      ci(
        _0(m, R0(79 - D, b, v, A), e[Y2[D] + r], q2(D)),
        J2[D]
      ),
      S
    ), m = S, S = A, A = ci(v, 10), v = b, b = B;
  }
  B = ba(this.h[1], i, A), this.h[1] = ba(this.h[2], c, S), this.h[2] = ba(this.h[3], d, m), this.h[3] = ba(this.h[4], n, b), this.h[4] = ba(this.h[0], a, v), this.h[0] = B;
};
Pr.prototype._digest = function(e) {
  return e === "hex" ? _n.toHex32(this.h, "little") : _n.split32(this.h, "little");
};
function R0(t, e, r, n) {
  return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n);
}
function K2(t) {
  return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
}
function q2(t) {
  return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
}
var Z2 = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  7,
  4,
  13,
  1,
  10,
  6,
  15,
  3,
  12,
  0,
  9,
  5,
  2,
  14,
  11,
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
], Y2 = [
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
], X2 = [
  11,
  14,
  15,
  12,
  5,
  8,
  7,
  9,
  11,
  13,
  14,
  15,
  6,
  7,
  9,
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
], J2 = [
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
], Q2 = Ke, em = Ya;
function ra(t, e, r) {
  if (!(this instanceof ra))
    return new ra(t, e, r);
  this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(Q2.toArray(e, r));
}
var tm = ra;
ra.prototype._init = function(e) {
  e.length > this.blockSize && (e = new this.Hash().update(e).digest()), em(e.length <= this.blockSize);
  for (var r = e.length; r < this.blockSize; r++)
    e.push(0);
  for (r = 0; r < e.length; r++)
    e[r] ^= 54;
  for (this.inner = new this.Hash().update(e), r = 0; r < e.length; r++)
    e[r] ^= 106;
  this.outer = new this.Hash().update(e);
};
ra.prototype.update = function(e, r) {
  return this.inner.update(e, r), this;
};
ra.prototype.digest = function(e) {
  return this.outer.update(this.inner.digest()), this.outer.digest(e);
};
(function(t) {
  var e = t;
  e.utils = Ke, e.common = la, e.sha = ha, e.ripemd = Zf, e.hmac = tm, e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160;
})(Bt);
function ma(t, e, r) {
  return r = {
    path: e,
    exports: {},
    require: function(n, a) {
      return rm(n, a == null ? r.path : a);
    }
  }, t(r, r.exports), r.exports;
}
function rm() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var uo = Xf;
function Xf(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
Xf.equal = function(e, r, n) {
  if (e != r)
    throw new Error(n || "Assertion failed: " + e + " != " + r);
};
var ur = ma(function(t, e) {
  var r = e;
  function n(c, d) {
    if (Array.isArray(c))
      return c.slice();
    if (!c)
      return [];
    var m = [];
    if (typeof c != "string") {
      for (var b = 0; b < c.length; b++)
        m[b] = c[b] | 0;
      return m;
    }
    if (d === "hex") {
      c = c.replace(/[^a-z0-9]+/ig, ""), c.length % 2 !== 0 && (c = "0" + c);
      for (var b = 0; b < c.length; b += 2)
        m.push(parseInt(c[b] + c[b + 1], 16));
    } else
      for (var b = 0; b < c.length; b++) {
        var v = c.charCodeAt(b), A = v >> 8, S = v & 255;
        A ? m.push(A, S) : m.push(S);
      }
    return m;
  }
  r.toArray = n;
  function a(c) {
    return c.length === 1 ? "0" + c : c;
  }
  r.zero2 = a;
  function i(c) {
    for (var d = "", m = 0; m < c.length; m++)
      d += a(c[m].toString(16));
    return d;
  }
  r.toHex = i, r.encode = function(d, m) {
    return m === "hex" ? i(d) : d;
  };
}), Zt = ma(function(t, e) {
  var r = e;
  r.assert = uo, r.toArray = ur.toArray, r.zero2 = ur.zero2, r.toHex = ur.toHex, r.encode = ur.encode;
  function n(m, b, v) {
    var A = new Array(Math.max(m.bitLength(), v) + 1);
    A.fill(0);
    for (var S = 1 << b + 1, D = m.clone(), B = 0; B < A.length; B++) {
      var F, k = D.andln(S - 1);
      D.isOdd() ? (k > (S >> 1) - 1 ? F = (S >> 1) - k : F = k, D.isubn(F)) : F = 0, A[B] = F, D.iushrn(1);
    }
    return A;
  }
  r.getNAF = n;
  function a(m, b) {
    var v = [
      [],
      []
    ];
    m = m.clone(), b = b.clone();
    for (var A = 0, S = 0, D; m.cmpn(-A) > 0 || b.cmpn(-S) > 0; ) {
      var B = m.andln(3) + A & 3, F = b.andln(3) + S & 3;
      B === 3 && (B = -1), F === 3 && (F = -1);
      var k;
      (B & 1) === 0 ? k = 0 : (D = m.andln(7) + A & 7, (D === 3 || D === 5) && F === 2 ? k = -B : k = B), v[0].push(k);
      var T;
      (F & 1) === 0 ? T = 0 : (D = b.andln(7) + S & 7, (D === 3 || D === 5) && B === 2 ? T = -F : T = F), v[1].push(T), 2 * A === k + 1 && (A = 1 - A), 2 * S === T + 1 && (S = 1 - S), m.iushrn(1), b.iushrn(1);
    }
    return v;
  }
  r.getJSF = a;
  function i(m, b, v) {
    var A = "_" + b;
    m.prototype[b] = function() {
      return this[A] !== void 0 ? this[A] : this[A] = v.call(this);
    };
  }
  r.cachedProperty = i;
  function c(m) {
    return typeof m == "string" ? r.toArray(m, "hex") : m;
  }
  r.parseBytes = c;
  function d(m) {
    return new ze(m, "hex", "le");
  }
  r.intFromLE = d;
}), Mi = Zt.getNAF, nm = Zt.getJSF, _i = Zt.assert;
function fn(t, e) {
  this.type = t, this.p = new ze(e.p, 16), this.red = e.prime ? ze.red(e.prime) : ze.mont(this.p), this.zero = new ze(0).toRed(this.red), this.one = new ze(1).toRed(this.red), this.two = new ze(2).toRed(this.red), this.n = e.n && new ze(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r = this.n && this.p.div(this.n);
  !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var Ln = fn;
fn.prototype.point = function() {
  throw new Error("Not implemented");
};
fn.prototype.validate = function() {
  throw new Error("Not implemented");
};
fn.prototype._fixedNafMul = function(e, r) {
  _i(e.precomputed);
  var n = e._getDoubles(), a = Mi(r, 1, this._bitLength), i = (1 << n.step + 1) - (n.step % 2 === 0 ? 2 : 1);
  i /= 3;
  var c = [], d, m;
  for (d = 0; d < a.length; d += n.step) {
    m = 0;
    for (var b = d + n.step - 1; b >= d; b--)
      m = (m << 1) + a[b];
    c.push(m);
  }
  for (var v = this.jpoint(null, null, null), A = this.jpoint(null, null, null), S = i; S > 0; S--) {
    for (d = 0; d < c.length; d++)
      m = c[d], m === S ? A = A.mixedAdd(n.points[d]) : m === -S && (A = A.mixedAdd(n.points[d].neg()));
    v = v.add(A);
  }
  return v.toP();
};
fn.prototype._wnafMul = function(e, r) {
  var n = 4, a = e._getNAFPoints(n);
  n = a.wnd;
  for (var i = a.points, c = Mi(r, n, this._bitLength), d = this.jpoint(null, null, null), m = c.length - 1; m >= 0; m--) {
    for (var b = 0; m >= 0 && c[m] === 0; m--)
      b++;
    if (m >= 0 && b++, d = d.dblp(b), m < 0)
      break;
    var v = c[m];
    _i(v !== 0), e.type === "affine" ? v > 0 ? d = d.mixedAdd(i[v - 1 >> 1]) : d = d.mixedAdd(i[-v - 1 >> 1].neg()) : v > 0 ? d = d.add(i[v - 1 >> 1]) : d = d.add(i[-v - 1 >> 1].neg());
  }
  return e.type === "affine" ? d.toP() : d;
};
fn.prototype._wnafMulAdd = function(e, r, n, a, i) {
  var c = this._wnafT1, d = this._wnafT2, m = this._wnafT3, b = 0, v, A, S;
  for (v = 0; v < a; v++) {
    S = r[v];
    var D = S._getNAFPoints(e);
    c[v] = D.wnd, d[v] = D.points;
  }
  for (v = a - 1; v >= 1; v -= 2) {
    var B = v - 1, F = v;
    if (c[B] !== 1 || c[F] !== 1) {
      m[B] = Mi(n[B], c[B], this._bitLength), m[F] = Mi(n[F], c[F], this._bitLength), b = Math.max(m[B].length, b), b = Math.max(m[F].length, b);
      continue;
    }
    var k = [
      r[B],
      null,
      null,
      r[F]
    ];
    r[B].y.cmp(r[F].y) === 0 ? (k[1] = r[B].add(r[F]), k[2] = r[B].toJ().mixedAdd(r[F].neg())) : r[B].y.cmp(r[F].y.redNeg()) === 0 ? (k[1] = r[B].toJ().mixedAdd(r[F]), k[2] = r[B].add(r[F].neg())) : (k[1] = r[B].toJ().mixedAdd(r[F]), k[2] = r[B].toJ().mixedAdd(r[F].neg()));
    var T = [
      -3,
      -1,
      -5,
      -7,
      0,
      7,
      5,
      1,
      3
    ], U = nm(n[B], n[F]);
    for (b = Math.max(U[0].length, b), m[B] = new Array(b), m[F] = new Array(b), A = 0; A < b; A++) {
      var H = U[0][A] | 0, P = U[1][A] | 0;
      m[B][A] = T[(H + 1) * 3 + (P + 1)], m[F][A] = 0, d[B] = k;
    }
  }
  var R = this.jpoint(null, null, null), W = this._wnafT4;
  for (v = b; v >= 0; v--) {
    for (var Z = 0; v >= 0; ) {
      var Y = !0;
      for (A = 0; A < a; A++)
        W[A] = m[A][v] | 0, W[A] !== 0 && (Y = !1);
      if (!Y)
        break;
      Z++, v--;
    }
    if (v >= 0 && Z++, R = R.dblp(Z), v < 0)
      break;
    for (A = 0; A < a; A++) {
      var ne = W[A];
      ne !== 0 && (ne > 0 ? S = d[A][ne - 1 >> 1] : ne < 0 && (S = d[A][-ne - 1 >> 1].neg()), S.type === "affine" ? R = R.mixedAdd(S) : R = R.add(S));
    }
  }
  for (v = 0; v < a; v++)
    d[v] = null;
  return i ? R : R.toP();
};
function ar(t, e) {
  this.curve = t, this.type = e, this.precomputed = null;
}
fn.BasePoint = ar;
ar.prototype.eq = function() {
  throw new Error("Not implemented");
};
ar.prototype.validate = function() {
  return this.curve.validate(this);
};
fn.prototype.decodePoint = function(e, r) {
  e = Zt.toArray(e, r);
  var n = this.p.byteLength();
  if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * n) {
    e[0] === 6 ? _i(e[e.length - 1] % 2 === 0) : e[0] === 7 && _i(e[e.length - 1] % 2 === 1);
    var a = this.point(
      e.slice(1, 1 + n),
      e.slice(1 + n, 1 + 2 * n)
    );
    return a;
  } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === n)
    return this.pointFromX(e.slice(1, 1 + n), e[0] === 3);
  throw new Error("Unknown point format");
};
ar.prototype.encodeCompressed = function(e) {
  return this.encode(e, !0);
};
ar.prototype._encode = function(e) {
  var r = this.curve.p.byteLength(), n = this.getX().toArray("be", r);
  return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", r));
};
ar.prototype.encode = function(e, r) {
  return Zt.encode(this._encode(r), e);
};
ar.prototype.precompute = function(e) {
  if (this.precomputed)
    return this;
  var r = {
    doubles: null,
    naf: null,
    beta: null
  };
  return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, e), r.beta = this._getBeta(), this.precomputed = r, this;
};
ar.prototype._hasDoubles = function(e) {
  if (!this.precomputed)
    return !1;
  var r = this.precomputed.doubles;
  return r ? r.points.length >= Math.ceil((e.bitLength() + 1) / r.step) : !1;
};
ar.prototype._getDoubles = function(e, r) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var n = [this], a = this, i = 0; i < r; i += e) {
    for (var c = 0; c < e; c++)
      a = a.dbl();
    n.push(a);
  }
  return {
    step: e,
    points: n
  };
};
ar.prototype._getNAFPoints = function(e) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var r = [this], n = (1 << e) - 1, a = n === 1 ? null : this.dbl(), i = 1; i < n; i++)
    r[i] = r[i - 1].add(a);
  return {
    wnd: e,
    points: r
  };
};
ar.prototype._getBeta = function() {
  return null;
};
ar.prototype.dblp = function(e) {
  for (var r = this, n = 0; n < e; n++)
    r = r.dbl();
  return r;
};
var mo = ma(function(t) {
  typeof Object.create == "function" ? t.exports = function(r, n) {
    n && (r.super_ = n, r.prototype = Object.create(n.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : t.exports = function(r, n) {
    if (n) {
      r.super_ = n;
      var a = function() {
      };
      a.prototype = n.prototype, r.prototype = new a(), r.prototype.constructor = r;
    }
  };
}), am = Zt.assert;
function ir(t) {
  Ln.call(this, "short", t), this.a = new ze(t.a, 16).toRed(this.red), this.b = new ze(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
mo(ir, Ln);
var im = ir;
ir.prototype._getEndomorphism = function(e) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r, n;
    if (e.beta)
      r = new ze(e.beta, 16).toRed(this.red);
    else {
      var a = this._getEndoRoots(this.p);
      r = a[0].cmp(a[1]) < 0 ? a[0] : a[1], r = r.toRed(this.red);
    }
    if (e.lambda)
      n = new ze(e.lambda, 16);
    else {
      var i = this._getEndoRoots(this.n);
      this.g.mul(i[0]).x.cmp(this.g.x.redMul(r)) === 0 ? n = i[0] : (n = i[1], am(this.g.mul(n).x.cmp(this.g.x.redMul(r)) === 0));
    }
    var c;
    return e.basis ? c = e.basis.map(function(d) {
      return {
        a: new ze(d.a, 16),
        b: new ze(d.b, 16)
      };
    }) : c = this._getEndoBasis(n), {
      beta: r,
      lambda: n,
      basis: c
    };
  }
};
ir.prototype._getEndoRoots = function(e) {
  var r = e === this.p ? this.red : ze.mont(e), n = new ze(2).toRed(r).redInvm(), a = n.redNeg(), i = new ze(3).toRed(r).redNeg().redSqrt().redMul(n), c = a.redAdd(i).fromRed(), d = a.redSub(i).fromRed();
  return [c, d];
};
ir.prototype._getEndoBasis = function(e) {
  for (var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), n = e, a = this.n.clone(), i = new ze(1), c = new ze(0), d = new ze(0), m = new ze(1), b, v, A, S, D, B, F, k = 0, T, U; n.cmpn(0) !== 0; ) {
    var H = a.div(n);
    T = a.sub(H.mul(n)), U = d.sub(H.mul(i));
    var P = m.sub(H.mul(c));
    if (!A && T.cmp(r) < 0)
      b = F.neg(), v = i, A = T.neg(), S = U;
    else if (A && ++k === 2)
      break;
    F = T, a = n, n = T, d = i, i = U, m = c, c = P;
  }
  D = T.neg(), B = U;
  var R = A.sqr().add(S.sqr()), W = D.sqr().add(B.sqr());
  return W.cmp(R) >= 0 && (D = b, B = v), A.negative && (A = A.neg(), S = S.neg()), D.negative && (D = D.neg(), B = B.neg()), [
    { a: A, b: S },
    { a: D, b: B }
  ];
};
ir.prototype._endoSplit = function(e) {
  var r = this.endo.basis, n = r[0], a = r[1], i = a.b.mul(e).divRound(this.n), c = n.b.neg().mul(e).divRound(this.n), d = i.mul(n.a), m = c.mul(a.a), b = i.mul(n.b), v = c.mul(a.b), A = e.sub(d).sub(m), S = b.add(v).neg();
  return { k1: A, k2: S };
};
ir.prototype.pointFromX = function(e, r) {
  e = new ze(e, 16), e.red || (e = e.toRed(this.red));
  var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), a = n.redSqrt();
  if (a.redSqr().redSub(n).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var i = a.fromRed().isOdd();
  return (r && !i || !r && i) && (a = a.redNeg()), this.point(e, a);
};
ir.prototype.validate = function(e) {
  if (e.inf)
    return !0;
  var r = e.x, n = e.y, a = this.a.redMul(r), i = r.redSqr().redMul(r).redIAdd(a).redIAdd(this.b);
  return n.redSqr().redISub(i).cmpn(0) === 0;
};
ir.prototype._endoWnafMulAdd = function(e, r, n) {
  for (var a = this._endoWnafT1, i = this._endoWnafT2, c = 0; c < e.length; c++) {
    var d = this._endoSplit(r[c]), m = e[c], b = m._getBeta();
    d.k1.negative && (d.k1.ineg(), m = m.neg(!0)), d.k2.negative && (d.k2.ineg(), b = b.neg(!0)), a[c * 2] = m, a[c * 2 + 1] = b, i[c * 2] = d.k1, i[c * 2 + 1] = d.k2;
  }
  for (var v = this._wnafMulAdd(1, a, i, c * 2, n), A = 0; A < c * 2; A++)
    a[A] = null, i[A] = null;
  return v;
};
function vt(t, e, r, n) {
  Ln.BasePoint.call(this, t, "affine"), e === null && r === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new ze(e, 16), this.y = new ze(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
mo(vt, Ln.BasePoint);
ir.prototype.point = function(e, r, n) {
  return new vt(this, e, r, n);
};
ir.prototype.pointFromJSON = function(e, r) {
  return vt.fromJSON(this, e, r);
};
vt.prototype._getBeta = function() {
  if (!!this.curve.endo) {
    var e = this.precomputed;
    if (e && e.beta)
      return e.beta;
    var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (e) {
      var n = this.curve, a = function(i) {
        return n.point(i.x.redMul(n.endo.beta), i.y);
      };
      e.beta = r, r.precomputed = {
        beta: null,
        naf: e.naf && {
          wnd: e.naf.wnd,
          points: e.naf.points.map(a)
        },
        doubles: e.doubles && {
          step: e.doubles.step,
          points: e.doubles.points.map(a)
        }
      };
    }
    return r;
  }
};
vt.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }] : [this.x, this.y];
};
vt.fromJSON = function(e, r, n) {
  typeof r == "string" && (r = JSON.parse(r));
  var a = e.point(r[0], r[1], n);
  if (!r[2])
    return a;
  function i(d) {
    return e.point(d[0], d[1], n);
  }
  var c = r[2];
  return a.precomputed = {
    beta: null,
    doubles: c.doubles && {
      step: c.doubles.step,
      points: [a].concat(c.doubles.points.map(i))
    },
    naf: c.naf && {
      wnd: c.naf.wnd,
      points: [a].concat(c.naf.points.map(i))
    }
  }, a;
};
vt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
};
vt.prototype.isInfinity = function() {
  return this.inf;
};
vt.prototype.add = function(e) {
  if (this.inf)
    return e;
  if (e.inf)
    return this;
  if (this.eq(e))
    return this.dbl();
  if (this.neg().eq(e))
    return this.curve.point(null, null);
  if (this.x.cmp(e.x) === 0)
    return this.curve.point(null, null);
  var r = this.y.redSub(e.y);
  r.cmpn(0) !== 0 && (r = r.redMul(this.x.redSub(e.x).redInvm()));
  var n = r.redSqr().redISub(this.x).redISub(e.x), a = r.redMul(this.x.redSub(n)).redISub(this.y);
  return this.curve.point(n, a);
};
vt.prototype.dbl = function() {
  if (this.inf)
    return this;
  var e = this.y.redAdd(this.y);
  if (e.cmpn(0) === 0)
    return this.curve.point(null, null);
  var r = this.curve.a, n = this.x.redSqr(), a = e.redInvm(), i = n.redAdd(n).redIAdd(n).redIAdd(r).redMul(a), c = i.redSqr().redISub(this.x.redAdd(this.x)), d = i.redMul(this.x.redSub(c)).redISub(this.y);
  return this.curve.point(c, d);
};
vt.prototype.getX = function() {
  return this.x.fromRed();
};
vt.prototype.getY = function() {
  return this.y.fromRed();
};
vt.prototype.mul = function(e) {
  return e = new ze(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
};
vt.prototype.mulAdd = function(e, r, n) {
  var a = [this, r], i = [e, n];
  return this.curve.endo ? this.curve._endoWnafMulAdd(a, i) : this.curve._wnafMulAdd(1, a, i, 2);
};
vt.prototype.jmulAdd = function(e, r, n) {
  var a = [this, r], i = [e, n];
  return this.curve.endo ? this.curve._endoWnafMulAdd(a, i, !0) : this.curve._wnafMulAdd(1, a, i, 2, !0);
};
vt.prototype.eq = function(e) {
  return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0);
};
vt.prototype.neg = function(e) {
  if (this.inf)
    return this;
  var r = this.curve.point(this.x, this.y.redNeg());
  if (e && this.precomputed) {
    var n = this.precomputed, a = function(i) {
      return i.neg();
    };
    r.precomputed = {
      naf: n.naf && {
        wnd: n.naf.wnd,
        points: n.naf.points.map(a)
      },
      doubles: n.doubles && {
        step: n.doubles.step,
        points: n.doubles.points.map(a)
      }
    };
  }
  return r;
};
vt.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var e = this.curve.jpoint(this.x, this.y, this.curve.one);
  return e;
};
function Et(t, e, r, n) {
  Ln.BasePoint.call(this, t, "jacobian"), e === null && r === null && n === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new ze(0)) : (this.x = new ze(e, 16), this.y = new ze(r, 16), this.z = new ze(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
mo(Et, Ln.BasePoint);
ir.prototype.jpoint = function(e, r, n) {
  return new Et(this, e, r, n);
};
Et.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var e = this.z.redInvm(), r = e.redSqr(), n = this.x.redMul(r), a = this.y.redMul(r).redMul(e);
  return this.curve.point(n, a);
};
Et.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
Et.prototype.add = function(e) {
  if (this.isInfinity())
    return e;
  if (e.isInfinity())
    return this;
  var r = e.z.redSqr(), n = this.z.redSqr(), a = this.x.redMul(r), i = e.x.redMul(n), c = this.y.redMul(r.redMul(e.z)), d = e.y.redMul(n.redMul(this.z)), m = a.redSub(i), b = c.redSub(d);
  if (m.cmpn(0) === 0)
    return b.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var v = m.redSqr(), A = v.redMul(m), S = a.redMul(v), D = b.redSqr().redIAdd(A).redISub(S).redISub(S), B = b.redMul(S.redISub(D)).redISub(c.redMul(A)), F = this.z.redMul(e.z).redMul(m);
  return this.curve.jpoint(D, B, F);
};
Et.prototype.mixedAdd = function(e) {
  if (this.isInfinity())
    return e.toJ();
  if (e.isInfinity())
    return this;
  var r = this.z.redSqr(), n = this.x, a = e.x.redMul(r), i = this.y, c = e.y.redMul(r).redMul(this.z), d = n.redSub(a), m = i.redSub(c);
  if (d.cmpn(0) === 0)
    return m.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var b = d.redSqr(), v = b.redMul(d), A = n.redMul(b), S = m.redSqr().redIAdd(v).redISub(A).redISub(A), D = m.redMul(A.redISub(S)).redISub(i.redMul(v)), B = this.z.redMul(d);
  return this.curve.jpoint(S, D, B);
};
Et.prototype.dblp = function(e) {
  if (e === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!e)
    return this.dbl();
  var r;
  if (this.curve.zeroA || this.curve.threeA) {
    var n = this;
    for (r = 0; r < e; r++)
      n = n.dbl();
    return n;
  }
  var a = this.curve.a, i = this.curve.tinv, c = this.x, d = this.y, m = this.z, b = m.redSqr().redSqr(), v = d.redAdd(d);
  for (r = 0; r < e; r++) {
    var A = c.redSqr(), S = v.redSqr(), D = S.redSqr(), B = A.redAdd(A).redIAdd(A).redIAdd(a.redMul(b)), F = c.redMul(S), k = B.redSqr().redISub(F.redAdd(F)), T = F.redISub(k), U = B.redMul(T);
    U = U.redIAdd(U).redISub(D);
    var H = v.redMul(m);
    r + 1 < e && (b = b.redMul(D)), c = k, m = H, v = U;
  }
  return this.curve.jpoint(c, v.redMul(i), m);
};
Et.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
};
Et.prototype._zeroDbl = function() {
  var e, r, n;
  if (this.zOne) {
    var a = this.x.redSqr(), i = this.y.redSqr(), c = i.redSqr(), d = this.x.redAdd(i).redSqr().redISub(a).redISub(c);
    d = d.redIAdd(d);
    var m = a.redAdd(a).redIAdd(a), b = m.redSqr().redISub(d).redISub(d), v = c.redIAdd(c);
    v = v.redIAdd(v), v = v.redIAdd(v), e = b, r = m.redMul(d.redISub(b)).redISub(v), n = this.y.redAdd(this.y);
  } else {
    var A = this.x.redSqr(), S = this.y.redSqr(), D = S.redSqr(), B = this.x.redAdd(S).redSqr().redISub(A).redISub(D);
    B = B.redIAdd(B);
    var F = A.redAdd(A).redIAdd(A), k = F.redSqr(), T = D.redIAdd(D);
    T = T.redIAdd(T), T = T.redIAdd(T), e = k.redISub(B).redISub(B), r = F.redMul(B.redISub(e)).redISub(T), n = this.y.redMul(this.z), n = n.redIAdd(n);
  }
  return this.curve.jpoint(e, r, n);
};
Et.prototype._threeDbl = function() {
  var e, r, n;
  if (this.zOne) {
    var a = this.x.redSqr(), i = this.y.redSqr(), c = i.redSqr(), d = this.x.redAdd(i).redSqr().redISub(a).redISub(c);
    d = d.redIAdd(d);
    var m = a.redAdd(a).redIAdd(a).redIAdd(this.curve.a), b = m.redSqr().redISub(d).redISub(d);
    e = b;
    var v = c.redIAdd(c);
    v = v.redIAdd(v), v = v.redIAdd(v), r = m.redMul(d.redISub(b)).redISub(v), n = this.y.redAdd(this.y);
  } else {
    var A = this.z.redSqr(), S = this.y.redSqr(), D = this.x.redMul(S), B = this.x.redSub(A).redMul(this.x.redAdd(A));
    B = B.redAdd(B).redIAdd(B);
    var F = D.redIAdd(D);
    F = F.redIAdd(F);
    var k = F.redAdd(F);
    e = B.redSqr().redISub(k), n = this.y.redAdd(this.z).redSqr().redISub(S).redISub(A);
    var T = S.redSqr();
    T = T.redIAdd(T), T = T.redIAdd(T), T = T.redIAdd(T), r = B.redMul(F.redISub(e)).redISub(T);
  }
  return this.curve.jpoint(e, r, n);
};
Et.prototype._dbl = function() {
  var e = this.curve.a, r = this.x, n = this.y, a = this.z, i = a.redSqr().redSqr(), c = r.redSqr(), d = n.redSqr(), m = c.redAdd(c).redIAdd(c).redIAdd(e.redMul(i)), b = r.redAdd(r);
  b = b.redIAdd(b);
  var v = b.redMul(d), A = m.redSqr().redISub(v.redAdd(v)), S = v.redISub(A), D = d.redSqr();
  D = D.redIAdd(D), D = D.redIAdd(D), D = D.redIAdd(D);
  var B = m.redMul(S).redISub(D), F = n.redAdd(n).redMul(a);
  return this.curve.jpoint(A, B, F);
};
Et.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var e = this.x.redSqr(), r = this.y.redSqr(), n = this.z.redSqr(), a = r.redSqr(), i = e.redAdd(e).redIAdd(e), c = i.redSqr(), d = this.x.redAdd(r).redSqr().redISub(e).redISub(a);
  d = d.redIAdd(d), d = d.redAdd(d).redIAdd(d), d = d.redISub(c);
  var m = d.redSqr(), b = a.redIAdd(a);
  b = b.redIAdd(b), b = b.redIAdd(b), b = b.redIAdd(b);
  var v = i.redIAdd(d).redSqr().redISub(c).redISub(m).redISub(b), A = r.redMul(v);
  A = A.redIAdd(A), A = A.redIAdd(A);
  var S = this.x.redMul(m).redISub(A);
  S = S.redIAdd(S), S = S.redIAdd(S);
  var D = this.y.redMul(v.redMul(b.redISub(v)).redISub(d.redMul(m)));
  D = D.redIAdd(D), D = D.redIAdd(D), D = D.redIAdd(D);
  var B = this.z.redAdd(d).redSqr().redISub(n).redISub(m);
  return this.curve.jpoint(S, D, B);
};
Et.prototype.mul = function(e, r) {
  return e = new ze(e, r), this.curve._wnafMul(this, e);
};
Et.prototype.eq = function(e) {
  if (e.type === "affine")
    return this.eq(e.toJ());
  if (this === e)
    return !0;
  var r = this.z.redSqr(), n = e.z.redSqr();
  if (this.x.redMul(n).redISub(e.x.redMul(r)).cmpn(0) !== 0)
    return !1;
  var a = r.redMul(this.z), i = n.redMul(e.z);
  return this.y.redMul(i).redISub(e.y.redMul(a)).cmpn(0) === 0;
};
Et.prototype.eqXToP = function(e) {
  var r = this.z.redSqr(), n = e.toRed(this.curve.red).redMul(r);
  if (this.x.cmp(n) === 0)
    return !0;
  for (var a = e.clone(), i = this.curve.redN.redMul(r); ; ) {
    if (a.iadd(this.curve.n), a.cmp(this.curve.p) >= 0)
      return !1;
    if (n.redIAdd(i), this.x.cmp(n) === 0)
      return !0;
  }
};
Et.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
};
Et.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var gi = ma(function(t, e) {
  var r = e;
  r.base = Ln, r.short = im, r.mont = null, r.edwards = null;
}), xi = ma(function(t, e) {
  var r = e, n = Zt.assert;
  function a(d) {
    d.type === "short" ? this.curve = new gi.short(d) : d.type === "edwards" ? this.curve = new gi.edwards(d) : this.curve = new gi.mont(d), this.g = this.curve.g, this.n = this.curve.n, this.hash = d.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r.PresetCurve = a;
  function i(d, m) {
    Object.defineProperty(r, d, {
      configurable: !0,
      enumerable: !0,
      get: function() {
        var b = new a(m);
        return Object.defineProperty(r, d, {
          configurable: !0,
          enumerable: !0,
          value: b
        }), b;
      }
    });
  }
  i("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: Bt.sha256,
    gRed: !1,
    g: [
      "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
      "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
    ]
  }), i("p224", {
    type: "short",
    prime: "p224",
    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    hash: Bt.sha256,
    gRed: !1,
    g: [
      "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
      "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
    ]
  }), i("p256", {
    type: "short",
    prime: null,
    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    hash: Bt.sha256,
    gRed: !1,
    g: [
      "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
      "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
    ]
  }), i("p384", {
    type: "short",
    prime: null,
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    hash: Bt.sha384,
    gRed: !1,
    g: [
      "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
      "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
    ]
  }), i("p521", {
    type: "short",
    prime: null,
    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    hash: Bt.sha512,
    gRed: !1,
    g: [
      "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
      "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
    ]
  }), i("curve25519", {
    type: "mont",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "76d06",
    b: "1",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: Bt.sha256,
    gRed: !1,
    g: [
      "9"
    ]
  }), i("ed25519", {
    type: "edwards",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "-1",
    c: "1",
    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: Bt.sha256,
    gRed: !1,
    g: [
      "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
      "6666666666666666666666666666666666666666666666666666666666666658"
    ]
  });
  var c;
  try {
    c = null.crash();
  } catch {
    c = void 0;
  }
  i("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: Bt.sha256,
    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    basis: [
      {
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3"
      },
      {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15"
      }
    ],
    gRed: !1,
    g: [
      "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
      c
    ]
  });
});
function on(t) {
  if (!(this instanceof on))
    return new on(t);
  this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var e = ur.toArray(t.entropy, t.entropyEnc || "hex"), r = ur.toArray(t.nonce, t.nonceEnc || "hex"), n = ur.toArray(t.pers, t.persEnc || "hex");
  uo(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._init(e, r, n);
}
var Jf = on;
on.prototype._init = function(e, r, n) {
  var a = e.concat(r).concat(n);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var i = 0; i < this.V.length; i++)
    this.K[i] = 0, this.V[i] = 1;
  this._update(a), this._reseed = 1, this.reseedInterval = 281474976710656;
};
on.prototype._hmac = function() {
  return new Bt.hmac(this.hash, this.K);
};
on.prototype._update = function(e) {
  var r = this._hmac().update(this.V).update([0]);
  e && (r = r.update(e)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
};
on.prototype.reseed = function(e, r, n, a) {
  typeof r != "string" && (a = n, n = r, r = null), e = ur.toArray(e, r), n = ur.toArray(n, a), uo(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._update(e.concat(n || [])), this._reseed = 1;
};
on.prototype.generate = function(e, r, n, a) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof r != "string" && (a = n, n = r, r = null), n && (n = ur.toArray(n, a || "hex"), this._update(n));
  for (var i = []; i.length < e; )
    this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
  var c = i.slice(0, e);
  return this._update(n), this._reseed++, ur.encode(c, r);
};
var Ns = Zt.assert;
function St(t, e) {
  this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
}
var po = St;
St.fromPublic = function(e, r, n) {
  return r instanceof St ? r : new St(e, {
    pub: r,
    pubEnc: n
  });
};
St.fromPrivate = function(e, r, n) {
  return r instanceof St ? r : new St(e, {
    priv: r,
    privEnc: n
  });
};
St.prototype.validate = function() {
  var e = this.getPublic();
  return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
};
St.prototype.getPublic = function(e, r) {
  return typeof e == "string" && (r = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, e) : this.pub;
};
St.prototype.getPrivate = function(e) {
  return e === "hex" ? this.priv.toString(16, 2) : this.priv;
};
St.prototype._importPrivate = function(e, r) {
  this.priv = new ze(e, r || 16), this.priv = this.priv.umod(this.ec.curve.n);
};
St.prototype._importPublic = function(e, r) {
  if (e.x || e.y) {
    this.ec.curve.type === "mont" ? Ns(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Ns(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(e, r);
};
St.prototype.derive = function(e) {
  return e.validate() || Ns(e.validate(), "public point not validated"), e.mul(this.priv).getX();
};
St.prototype.sign = function(e, r, n) {
  return this.ec.sign(e, this, r, n);
};
St.prototype.verify = function(e, r) {
  return this.ec.verify(e, r, this);
};
St.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var sm = Zt.assert;
function Hi(t, e) {
  if (t instanceof Hi)
    return t;
  this._importDER(t, e) || (sm(t.r && t.s, "Signature without r or s"), this.r = new ze(t.r, 16), this.s = new ze(t.s, 16), t.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam);
}
var zi = Hi;
function om() {
  this.place = 0;
}
function hs(t, e) {
  var r = t[e.place++];
  if (!(r & 128))
    return r;
  var n = r & 15;
  if (n === 0 || n > 4)
    return !1;
  for (var a = 0, i = 0, c = e.place; i < n; i++, c++)
    a <<= 8, a |= t[c], a >>>= 0;
  return a <= 127 ? !1 : (e.place = c, a);
}
function T0(t) {
  for (var e = 0, r = t.length - 1; !t[e] && !(t[e + 1] & 128) && e < r; )
    e++;
  return e === 0 ? t : t.slice(e);
}
Hi.prototype._importDER = function(e, r) {
  e = Zt.toArray(e, r);
  var n = new om();
  if (e[n.place++] !== 48)
    return !1;
  var a = hs(e, n);
  if (a === !1 || a + n.place !== e.length || e[n.place++] !== 2)
    return !1;
  var i = hs(e, n);
  if (i === !1)
    return !1;
  var c = e.slice(n.place, i + n.place);
  if (n.place += i, e[n.place++] !== 2)
    return !1;
  var d = hs(e, n);
  if (d === !1 || e.length !== d + n.place)
    return !1;
  var m = e.slice(n.place, d + n.place);
  if (c[0] === 0)
    if (c[1] & 128)
      c = c.slice(1);
    else
      return !1;
  if (m[0] === 0)
    if (m[1] & 128)
      m = m.slice(1);
    else
      return !1;
  return this.r = new ze(c), this.s = new ze(m), this.recoveryParam = null, !0;
};
function us(t, e) {
  if (e < 128) {
    t.push(e);
    return;
  }
  var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
  for (t.push(r | 128); --r; )
    t.push(e >>> (r << 3) & 255);
  t.push(e);
}
Hi.prototype.toDER = function(e) {
  var r = this.r.toArray(), n = this.s.toArray();
  for (r[0] & 128 && (r = [0].concat(r)), n[0] & 128 && (n = [0].concat(n)), r = T0(r), n = T0(n); !n[0] && !(n[1] & 128); )
    n = n.slice(1);
  var a = [2];
  us(a, r.length), a = a.concat(r), a.push(2), us(a, n.length);
  var i = a.concat(n), c = [48];
  return us(c, i.length), c = c.concat(i), Zt.encode(c, e);
};
var cm = function() {
  throw new Error("unsupported");
}, Qf = Zt.assert;
function tr(t) {
  if (!(this instanceof tr))
    return new tr(t);
  typeof t == "string" && (Qf(
    Object.prototype.hasOwnProperty.call(xi, t),
    "Unknown curve " + t
  ), t = xi[t]), t instanceof xi.PresetCurve && (t = { curve: t }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash;
}
var fm = tr;
tr.prototype.keyPair = function(e) {
  return new po(this, e);
};
tr.prototype.keyFromPrivate = function(e, r) {
  return po.fromPrivate(this, e, r);
};
tr.prototype.keyFromPublic = function(e, r) {
  return po.fromPublic(this, e, r);
};
tr.prototype.genKeyPair = function(e) {
  e || (e = {});
  for (var r = new Jf({
    hash: this.hash,
    pers: e.pers,
    persEnc: e.persEnc || "utf8",
    entropy: e.entropy || cm(this.hash.hmacStrength),
    entropyEnc: e.entropy && e.entropyEnc || "utf8",
    nonce: this.n.toArray()
  }), n = this.n.byteLength(), a = this.n.sub(new ze(2)); ; ) {
    var i = new ze(r.generate(n));
    if (!(i.cmp(a) > 0))
      return i.iaddn(1), this.keyFromPrivate(i);
  }
};
tr.prototype._truncateToN = function(e, r) {
  var n = e.byteLength() * 8 - this.n.bitLength();
  return n > 0 && (e = e.ushrn(n)), !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
};
tr.prototype.sign = function(e, r, n, a) {
  typeof n == "object" && (a = n, n = null), a || (a = {}), r = this.keyFromPrivate(r, n), e = this._truncateToN(new ze(e, 16));
  for (var i = this.n.byteLength(), c = r.getPrivate().toArray("be", i), d = e.toArray("be", i), m = new Jf({
    hash: this.hash,
    entropy: c,
    nonce: d,
    pers: a.pers,
    persEnc: a.persEnc || "utf8"
  }), b = this.n.sub(new ze(1)), v = 0; ; v++) {
    var A = a.k ? a.k(v) : new ze(m.generate(this.n.byteLength()));
    if (A = this._truncateToN(A, !0), !(A.cmpn(1) <= 0 || A.cmp(b) >= 0)) {
      var S = this.g.mul(A);
      if (!S.isInfinity()) {
        var D = S.getX(), B = D.umod(this.n);
        if (B.cmpn(0) !== 0) {
          var F = A.invm(this.n).mul(B.mul(r.getPrivate()).iadd(e));
          if (F = F.umod(this.n), F.cmpn(0) !== 0) {
            var k = (S.getY().isOdd() ? 1 : 0) | (D.cmp(B) !== 0 ? 2 : 0);
            return a.canonical && F.cmp(this.nh) > 0 && (F = this.n.sub(F), k ^= 1), new zi({ r: B, s: F, recoveryParam: k });
          }
        }
      }
    }
  }
};
tr.prototype.verify = function(e, r, n, a) {
  e = this._truncateToN(new ze(e, 16)), n = this.keyFromPublic(n, a), r = new zi(r, "hex");
  var i = r.r, c = r.s;
  if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0 || c.cmpn(1) < 0 || c.cmp(this.n) >= 0)
    return !1;
  var d = c.invm(this.n), m = d.mul(e).umod(this.n), b = d.mul(i).umod(this.n), v;
  return this.curve._maxwellTrick ? (v = this.g.jmulAdd(m, n.getPublic(), b), v.isInfinity() ? !1 : v.eqXToP(i)) : (v = this.g.mulAdd(m, n.getPublic(), b), v.isInfinity() ? !1 : v.getX().umod(this.n).cmp(i) === 0);
};
tr.prototype.recoverPubKey = function(t, e, r, n) {
  Qf((3 & r) === r, "The recovery param is more than two bits"), e = new zi(e, n);
  var a = this.n, i = new ze(t), c = e.r, d = e.s, m = r & 1, b = r >> 1;
  if (c.cmp(this.curve.p.umod(this.curve.n)) >= 0 && b)
    throw new Error("Unable to find sencond key candinate");
  b ? c = this.curve.pointFromX(c.add(this.curve.n), m) : c = this.curve.pointFromX(c, m);
  var v = e.r.invm(a), A = a.sub(i).mul(v).umod(a), S = d.mul(v).umod(a);
  return this.g.mulAdd(A, c, S);
};
tr.prototype.getKeyRecoveryParam = function(t, e, r, n) {
  if (e = new zi(e, n), e.recoveryParam !== null)
    return e.recoveryParam;
  for (var a = 0; a < 4; a++) {
    var i;
    try {
      i = this.recoverPubKey(t, e, a);
    } catch {
      continue;
    }
    if (i.eq(r))
      return a;
  }
  throw new Error("Unable to find valid recovery factor");
};
var dm = ma(function(t, e) {
  var r = e;
  r.version = "6.5.4", r.utils = Zt, r.rand = function() {
    throw new Error("unsupported");
  }, r.curve = gi, r.curves = xi, r.ec = fm, r.eddsa = null;
}), lm = dm.ec;
const hm = "signing-key/5.7.0", Ls = new q(hm);
let ms = null;
function Ar() {
  return ms || (ms = new lm("secp256k1")), ms;
}
class In {
  constructor(e) {
    ae(this, "curve", "secp256k1"), ae(this, "privateKey", he(e)), Ra(this.privateKey) !== 32 && Ls.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const r = Ar().keyFromPrivate(oe(this.privateKey));
    ae(this, "publicKey", "0x" + r.getPublic(!1, "hex")), ae(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), ae(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    const r = Ar().keyFromPublic(oe(this.publicKey)), n = Ar().keyFromPublic(oe(e));
    return "0x" + r.pub.add(n.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    const r = Ar().keyFromPrivate(oe(this.privateKey)), n = oe(e);
    n.length !== 32 && Ls.throwArgumentError("bad digest length", "digest", e);
    const a = r.sign(n, { canonical: !0 });
    return On({
      recoveryParam: a.recoveryParam,
      r: bt("0x" + a.r.toString(16), 32),
      s: bt("0x" + a.s.toString(16), 32)
    });
  }
  computeSharedSecret(e) {
    const r = Ar().keyFromPrivate(oe(this.privateKey)), n = Ar().keyFromPublic(oe(bo(e)));
    return bt("0x" + r.derive(n.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
}
function ed(t, e) {
  const r = On(e), n = { r: oe(r.r), s: oe(r.s) };
  return "0x" + Ar().recoverPubKey(oe(t), n, r.recoveryParam).encode("hex", !1);
}
function bo(t, e) {
  const r = oe(t);
  if (r.length === 32) {
    const n = new In(r);
    return e ? "0x" + Ar().keyFromPrivate(r).getPublic(!0, "hex") : n.publicKey;
  } else {
    if (r.length === 33)
      return e ? he(r) : "0x" + Ar().keyFromPublic(r).getPublic(!1, "hex");
    if (r.length === 65)
      return e ? "0x" + Ar().keyFromPublic(r).getPublic(!0, "hex") : he(r);
  }
  return Ls.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
const um = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SigningKey: In,
  recoverPublicKey: ed,
  computePublicKey: bo
}, Symbol.toStringTag, { value: "Module" })), mm = "transactions/5.7.0", kt = new q(mm);
var js;
(function(t) {
  t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559";
})(js || (js = {}));
function go(t) {
  return t === "0x" ? null : at(t);
}
function It(t) {
  return t === "0x" ? hf : ue.from(t);
}
const pm = [
  { name: "nonce", maxLength: 32, numeric: !0 },
  { name: "gasPrice", maxLength: 32, numeric: !0 },
  { name: "gasLimit", maxLength: 32, numeric: !0 },
  { name: "to", length: 20 },
  { name: "value", maxLength: 32, numeric: !0 },
  { name: "data" }
], bm = {
  chainId: !0,
  data: !0,
  gasLimit: !0,
  gasPrice: !0,
  nonce: !0,
  to: !0,
  type: !0,
  value: !0
};
function an(t) {
  const e = bo(t);
  return at($r(rt($r(e, 1)), 12));
}
function Xa(t, e) {
  return an(ed(oe(t), e));
}
function $t(t, e) {
  const r = Dr(ue.from(t).toHexString());
  return r.length > 32 && kt.throwArgumentError("invalid length for " + e, "transaction:" + e, t), r;
}
function ps(t, e) {
  return {
    address: at(t),
    storageKeys: (e || []).map((r, n) => (Ra(r) !== 32 && kt.throwArgumentError("invalid access list storageKey", `accessList[${t}:${n}]`, r), r.toLowerCase()))
  };
}
function Ja(t) {
  if (Array.isArray(t))
    return t.map((r, n) => Array.isArray(r) ? (r.length > 2 && kt.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${n}]`, r), ps(r[0], r[1])) : ps(r.address, r.storageKeys));
  const e = Object.keys(t).map((r) => {
    const n = t[r].reduce((a, i) => (a[i] = !0, a), {});
    return ps(r, Object.keys(n).sort());
  });
  return e.sort((r, n) => r.address.localeCompare(n.address)), e;
}
function td(t) {
  return Ja(t).map((e) => [e.address, e.storageKeys]);
}
function rd(t, e) {
  if (t.gasPrice != null) {
    const n = ue.from(t.gasPrice), a = ue.from(t.maxFeePerGas || 0);
    n.eq(a) || kt.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
      gasPrice: n,
      maxFeePerGas: a
    });
  }
  const r = [
    $t(t.chainId || 0, "chainId"),
    $t(t.nonce || 0, "nonce"),
    $t(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    $t(t.maxFeePerGas || 0, "maxFeePerGas"),
    $t(t.gasLimit || 0, "gasLimit"),
    t.to != null ? at(t.to) : "0x",
    $t(t.value || 0, "value"),
    t.data || "0x",
    td(t.accessList || [])
  ];
  if (e) {
    const n = On(e);
    r.push($t(n.recoveryParam, "recoveryParam")), r.push(Dr(n.r)), r.push(Dr(n.s));
  }
  return nn(["0x02", Mn(r)]);
}
function nd(t, e) {
  const r = [
    $t(t.chainId || 0, "chainId"),
    $t(t.nonce || 0, "nonce"),
    $t(t.gasPrice || 0, "gasPrice"),
    $t(t.gasLimit || 0, "gasLimit"),
    t.to != null ? at(t.to) : "0x",
    $t(t.value || 0, "value"),
    t.data || "0x",
    td(t.accessList || [])
  ];
  if (e) {
    const n = On(e);
    r.push($t(n.recoveryParam, "recoveryParam")), r.push(Dr(n.r)), r.push(Dr(n.s));
  }
  return nn(["0x01", Mn(r)]);
}
function gm(t, e) {
  Xc(t, bm);
  const r = [];
  pm.forEach(function(c) {
    let d = t[c.name] || [];
    const m = {};
    c.numeric && (m.hexPad = "left"), d = oe(he(d, m)), c.length && d.length !== c.length && d.length > 0 && kt.throwArgumentError("invalid length for " + c.name, "transaction:" + c.name, d), c.maxLength && (d = Dr(d), d.length > c.maxLength && kt.throwArgumentError("invalid length for " + c.name, "transaction:" + c.name, d)), r.push(he(d));
  });
  let n = 0;
  if (t.chainId != null ? (n = t.chainId, typeof n != "number" && kt.throwArgumentError("invalid transaction.chainId", "transaction", t)) : e && !Ka(e) && e.v > 28 && (n = Math.floor((e.v - 35) / 2)), n !== 0 && (r.push(he(n)), r.push("0x"), r.push("0x")), !e)
    return Mn(r);
  const a = On(e);
  let i = 27 + a.recoveryParam;
  return n !== 0 ? (r.pop(), r.pop(), r.pop(), i += n * 2 + 8, a.v > 28 && a.v !== i && kt.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e)) : a.v !== i && kt.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e), r.push(he(i)), r.push(Dr(oe(a.r))), r.push(Dr(oe(a.s))), Mn(r);
}
function Ws(t, e) {
  if (t.type == null || t.type === 0)
    return t.accessList != null && kt.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", t), gm(t, e);
  switch (t.type) {
    case 1:
      return nd(t, e);
    case 2:
      return rd(t, e);
  }
  return kt.throwError(`unsupported transaction type: ${t.type}`, q.errors.UNSUPPORTED_OPERATION, {
    operation: "serializeTransaction",
    transactionType: t.type
  });
}
function ad(t, e, r) {
  try {
    const n = It(e[0]).toNumber();
    if (n !== 0 && n !== 1)
      throw new Error("bad recid");
    t.v = n;
  } catch {
    kt.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
  }
  t.r = bt(e[1], 32), t.s = bt(e[2], 32);
  try {
    const n = rt(r(t));
    t.from = Xa(n, { r: t.r, s: t.s, recoveryParam: t.v });
  } catch {
  }
}
function xm(t) {
  const e = Oi(t.slice(1));
  e.length !== 9 && e.length !== 12 && kt.throwArgumentError("invalid component count for transaction type: 2", "payload", he(t));
  const r = It(e[2]), n = It(e[3]), a = {
    type: 2,
    chainId: It(e[0]).toNumber(),
    nonce: It(e[1]).toNumber(),
    maxPriorityFeePerGas: r,
    maxFeePerGas: n,
    gasPrice: null,
    gasLimit: It(e[4]),
    to: go(e[5]),
    value: It(e[6]),
    data: e[7],
    accessList: Ja(e[8])
  };
  return e.length === 9 || (a.hash = rt(t), ad(a, e.slice(9), rd)), a;
}
function ym(t) {
  const e = Oi(t.slice(1));
  e.length !== 8 && e.length !== 11 && kt.throwArgumentError("invalid component count for transaction type: 1", "payload", he(t));
  const r = {
    type: 1,
    chainId: It(e[0]).toNumber(),
    nonce: It(e[1]).toNumber(),
    gasPrice: It(e[2]),
    gasLimit: It(e[3]),
    to: go(e[4]),
    value: It(e[5]),
    data: e[6],
    accessList: Ja(e[7])
  };
  return e.length === 8 || (r.hash = rt(t), ad(r, e.slice(8), nd)), r;
}
function vm(t) {
  const e = Oi(t);
  e.length !== 9 && e.length !== 6 && kt.throwArgumentError("invalid raw transaction", "rawTransaction", t);
  const r = {
    nonce: It(e[0]).toNumber(),
    gasPrice: It(e[1]),
    gasLimit: It(e[2]),
    to: go(e[3]),
    value: It(e[4]),
    data: e[5],
    chainId: 0
  };
  if (e.length === 6)
    return r;
  try {
    r.v = ue.from(e[6]).toNumber();
  } catch {
    return r;
  }
  if (r.r = bt(e[7], 32), r.s = bt(e[8], 32), ue.from(r.r).isZero() && ue.from(r.s).isZero())
    r.chainId = r.v, r.v = 0;
  else {
    r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
    let n = r.v - 27;
    const a = e.slice(0, 6);
    r.chainId !== 0 && (a.push(he(r.chainId)), a.push("0x"), a.push("0x"), n -= r.chainId * 2 + 8);
    const i = rt(Mn(a));
    try {
      r.from = Xa(i, { r: he(r.r), s: he(r.s), recoveryParam: n });
    } catch {
    }
    r.hash = rt(t);
  }
  return r.type = null, r;
}
function wm(t) {
  const e = oe(t);
  if (e[0] > 127)
    return vm(e);
  switch (e[0]) {
    case 1:
      return ym(e);
    case 2:
      return xm(e);
  }
  return kt.throwError(`unsupported transaction type: ${e[0]}`, q.errors.UNSUPPORTED_OPERATION, {
    operation: "parseTransaction",
    transactionType: e[0]
  });
}
const Am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get TransactionTypes() {
    return js;
  },
  computeAddress: an,
  recoverAddress: Xa,
  accessListify: Ja,
  serialize: Ws,
  parse: wm
}, Symbol.toStringTag, { value: "Module" })), Cm = "contracts/5.7.0";
var Rn = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(c) {
      c(i);
    });
  }
  return new (r || (r = Promise))(function(i, c) {
    function d(v) {
      try {
        b(n.next(v));
      } catch (A) {
        c(A);
      }
    }
    function m(v) {
      try {
        b(n.throw(v));
      } catch (A) {
        c(A);
      }
    }
    function b(v) {
      v.done ? i(v.value) : a(v.value).then(d, m);
    }
    b((n = n.apply(t, e || [])).next());
  });
};
const ut = new q(Cm);
function Ri(t, e) {
  return Rn(this, void 0, void 0, function* () {
    const r = yield e;
    typeof r != "string" && ut.throwArgumentError("invalid address or ENS name", "name", r);
    try {
      return at(r);
    } catch {
    }
    t || ut.throwError("a provider or signer is needed to resolve ENS names", q.errors.UNSUPPORTED_OPERATION, {
      operation: "resolveName"
    });
    const n = yield t.resolveName(r);
    return n == null && ut.throwArgumentError("resolver or addr is not configured for ENS name", "name", r), n;
  });
}
function yi(t, e, r) {
  return Rn(this, void 0, void 0, function* () {
    return Array.isArray(r) ? yield Promise.all(r.map((n, a) => yi(t, Array.isArray(e) ? e[a] : e[n.name], n))) : r.type === "address" ? yield Ri(t, e) : r.type === "tuple" ? yield yi(t, e, r.components) : r.baseType === "array" ? Array.isArray(e) ? yield Promise.all(e.map((n) => yi(t, n, r.arrayChildren))) : Promise.reject(ut.makeError("invalid value for array", q.errors.INVALID_ARGUMENT, {
      argument: "value",
      value: e
    })) : e;
  });
}
function $i(t, e, r) {
  return Rn(this, void 0, void 0, function* () {
    let n = {};
    r.length === e.inputs.length + 1 && typeof r[r.length - 1] == "object" && (n = qt(r.pop())), ut.checkArgumentCount(r.length, e.inputs.length, "passed to contract"), t.signer ? n.from ? n.from = Ir({
      override: Ri(t.signer, n.from),
      signer: t.signer.getAddress()
    }).then((b) => Rn(this, void 0, void 0, function* () {
      return at(b.signer) !== b.override && ut.throwError("Contract with a Signer cannot override from", q.errors.UNSUPPORTED_OPERATION, {
        operation: "overrides.from"
      }), b.override;
    })) : n.from = t.signer.getAddress() : n.from && (n.from = Ri(t.provider, n.from));
    const a = yield Ir({
      args: yi(t.signer || t.provider, r, e.inputs),
      address: t.resolvedAddress,
      overrides: Ir(n) || {}
    }), i = t.interface.encodeFunctionData(e, a.args), c = {
      data: i,
      to: a.address
    }, d = a.overrides;
    if (d.nonce != null && (c.nonce = ue.from(d.nonce).toNumber()), d.gasLimit != null && (c.gasLimit = ue.from(d.gasLimit)), d.gasPrice != null && (c.gasPrice = ue.from(d.gasPrice)), d.maxFeePerGas != null && (c.maxFeePerGas = ue.from(d.maxFeePerGas)), d.maxPriorityFeePerGas != null && (c.maxPriorityFeePerGas = ue.from(d.maxPriorityFeePerGas)), d.from != null && (c.from = d.from), d.type != null && (c.type = d.type), d.accessList != null && (c.accessList = Ja(d.accessList)), c.gasLimit == null && e.gas != null) {
      let b = 21e3;
      const v = oe(i);
      for (let A = 0; A < v.length; A++)
        b += 4, v[A] && (b += 64);
      c.gasLimit = ue.from(e.gas).add(b);
    }
    if (d.value) {
      const b = ue.from(d.value);
      !b.isZero() && !e.payable && ut.throwError("non-payable method cannot override value", q.errors.UNSUPPORTED_OPERATION, {
        operation: "overrides.value",
        value: n.value
      }), c.value = b;
    }
    d.customData && (c.customData = qt(d.customData)), d.ccipReadEnabled && (c.ccipReadEnabled = !!d.ccipReadEnabled), delete n.nonce, delete n.gasLimit, delete n.gasPrice, delete n.from, delete n.value, delete n.type, delete n.accessList, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, delete n.customData, delete n.ccipReadEnabled;
    const m = Object.keys(n).filter((b) => n[b] != null);
    return m.length && ut.throwError(`cannot override ${m.map((b) => JSON.stringify(b)).join(",")}`, q.errors.UNSUPPORTED_OPERATION, {
      operation: "overrides",
      overrides: m
    }), c;
  });
}
function Em(t, e) {
  return function(...r) {
    return $i(t, e, r);
  };
}
function Im(t, e) {
  const r = t.signer || t.provider;
  return function(...n) {
    return Rn(this, void 0, void 0, function* () {
      r || ut.throwError("estimate require a provider or signer", q.errors.UNSUPPORTED_OPERATION, {
        operation: "estimateGas"
      });
      const a = yield $i(t, e, n);
      return yield r.estimateGas(a);
    });
  };
}
function km(t, e) {
  const r = e.wait.bind(e);
  e.wait = (n) => r(n).then((a) => (a.events = a.logs.map((i) => {
    let c = Bn(i), d = null;
    try {
      d = t.interface.parseLog(i);
    } catch {
    }
    return d && (c.args = d.args, c.decode = (m, b) => t.interface.decodeEventLog(d.eventFragment, m, b), c.event = d.name, c.eventSignature = d.signature), c.removeListener = () => t.provider, c.getBlock = () => t.provider.getBlock(a.blockHash), c.getTransaction = () => t.provider.getTransaction(a.transactionHash), c.getTransactionReceipt = () => Promise.resolve(a), c;
  }), a));
}
function id(t, e, r) {
  const n = t.signer || t.provider;
  return function(...a) {
    return Rn(this, void 0, void 0, function* () {
      let i;
      if (a.length === e.inputs.length + 1 && typeof a[a.length - 1] == "object") {
        const m = qt(a.pop());
        m.blockTag != null && (i = yield m.blockTag), delete m.blockTag, a.push(m);
      }
      t.deployTransaction != null && (yield t._deployed(i));
      const c = yield $i(t, e, a), d = yield n.call(c, i);
      try {
        let m = t.interface.decodeFunctionResult(e, d);
        return r && e.outputs.length === 1 && (m = m[0]), m;
      } catch (m) {
        throw m.code === q.errors.CALL_EXCEPTION && (m.address = t.address, m.args = a, m.transaction = c), m;
      }
    });
  };
}
function Sm(t, e) {
  return function(...r) {
    return Rn(this, void 0, void 0, function* () {
      t.signer || ut.throwError("sending a transaction requires a signer", q.errors.UNSUPPORTED_OPERATION, {
        operation: "sendTransaction"
      }), t.deployTransaction != null && (yield t._deployed());
      const n = yield $i(t, e, r), a = yield t.signer.sendTransaction(n);
      return km(t, a), a;
    });
  };
}
function U0(t, e, r) {
  return e.constant ? id(t, e, r) : Sm(t, e);
}
function sd(t) {
  return t.address && (t.topics == null || t.topics.length === 0) ? "*" : (t.address || "*") + "@" + (t.topics ? t.topics.map((e) => Array.isArray(e) ? e.join("|") : e).join(":") : "");
}
class La {
  constructor(e, r) {
    ae(this, "tag", e), ae(this, "filter", r), this._listeners = [];
  }
  addListener(e, r) {
    this._listeners.push({ listener: e, once: r });
  }
  removeListener(e) {
    let r = !1;
    this._listeners = this._listeners.filter((n) => r || n.listener !== e ? !0 : (r = !0, !1));
  }
  removeAllListeners() {
    this._listeners = [];
  }
  listeners() {
    return this._listeners.map((e) => e.listener);
  }
  listenerCount() {
    return this._listeners.length;
  }
  run(e) {
    const r = this.listenerCount();
    return this._listeners = this._listeners.filter((n) => {
      const a = e.slice();
      return setTimeout(() => {
        n.listener.apply(this, a);
      }, 0), !n.once;
    }), r;
  }
  prepareEvent(e) {
  }
  getEmit(e) {
    return [e];
  }
}
class Dm extends La {
  constructor() {
    super("error", null);
  }
}
class P0 extends La {
  constructor(e, r, n, a) {
    const i = {
      address: e
    };
    let c = r.getEventTopic(n);
    a ? (c !== a[0] && ut.throwArgumentError("topic mismatch", "topics", a), i.topics = a.slice()) : i.topics = [c], super(sd(i), i), ae(this, "address", e), ae(this, "interface", r), ae(this, "fragment", n);
  }
  prepareEvent(e) {
    super.prepareEvent(e), e.event = this.fragment.name, e.eventSignature = this.fragment.format(), e.decode = (r, n) => this.interface.decodeEventLog(this.fragment, r, n);
    try {
      e.args = this.interface.decodeEventLog(this.fragment, e.data, e.topics);
    } catch (r) {
      e.args = null, e.decodeError = r;
    }
  }
  getEmit(e) {
    const r = rf(e.args);
    if (r.length)
      throw r[0].error;
    const n = (e.args || []).slice();
    return n.push(e), n;
  }
}
class O0 extends La {
  constructor(e, r) {
    super("*", { address: e }), ae(this, "address", e), ae(this, "interface", r);
  }
  prepareEvent(e) {
    super.prepareEvent(e);
    try {
      const r = this.interface.parseLog(e);
      e.event = r.name, e.eventSignature = r.signature, e.decode = (n, a) => this.interface.decodeEventLog(r.eventFragment, n, a), e.args = r.args;
    } catch {
    }
  }
}
class Bm {
  constructor(e, r, n) {
    ae(this, "interface", Vn(new.target, "getInterface")(r)), n == null ? (ae(this, "provider", null), ae(this, "signer", null)) : Za.isSigner(n) ? (ae(this, "provider", n.provider || null), ae(this, "signer", n)) : ji.isProvider(n) ? (ae(this, "provider", n), ae(this, "signer", null)) : ut.throwArgumentError("invalid signer or provider", "signerOrProvider", n), ae(this, "callStatic", {}), ae(this, "estimateGas", {}), ae(this, "functions", {}), ae(this, "populateTransaction", {}), ae(this, "filters", {});
    {
      const c = {};
      Object.keys(this.interface.events).forEach((d) => {
        const m = this.interface.events[d];
        ae(this.filters, d, (...b) => ({
          address: this.address,
          topics: this.interface.encodeFilterTopics(m, b)
        })), c[m.name] || (c[m.name] = []), c[m.name].push(d);
      }), Object.keys(c).forEach((d) => {
        const m = c[d];
        m.length === 1 ? ae(this.filters, d, this.filters[m[0]]) : ut.warn(`Duplicate definition of ${d} (${m.join(", ")})`);
      });
    }
    if (ae(this, "_runningEvents", {}), ae(this, "_wrappedEmits", {}), e == null && ut.throwArgumentError("invalid contract address or ENS name", "addressOrName", e), ae(this, "address", e), this.provider)
      ae(this, "resolvedAddress", Ri(this.provider, e));
    else
      try {
        ae(this, "resolvedAddress", Promise.resolve(at(e)));
      } catch {
        ut.throwError("provider is required to use ENS name as contract address", q.errors.UNSUPPORTED_OPERATION, {
          operation: "new Contract"
        });
      }
    this.resolvedAddress.catch((c) => {
    });
    const a = {}, i = {};
    Object.keys(this.interface.functions).forEach((c) => {
      const d = this.interface.functions[c];
      if (i[c]) {
        ut.warn(`Duplicate ABI entry for ${JSON.stringify(c)}`);
        return;
      }
      i[c] = !0;
      {
        const m = d.name;
        a[`%${m}`] || (a[`%${m}`] = []), a[`%${m}`].push(c);
      }
      this[c] == null && ae(this, c, U0(this, d, !0)), this.functions[c] == null && ae(this.functions, c, U0(this, d, !1)), this.callStatic[c] == null && ae(this.callStatic, c, id(this, d, !0)), this.populateTransaction[c] == null && ae(this.populateTransaction, c, Em(this, d)), this.estimateGas[c] == null && ae(this.estimateGas, c, Im(this, d));
    }), Object.keys(a).forEach((c) => {
      const d = a[c];
      if (d.length > 1)
        return;
      c = c.substring(1);
      const m = d[0];
      try {
        this[c] == null && ae(this, c, this[m]);
      } catch {
      }
      this.functions[c] == null && ae(this.functions, c, this.functions[m]), this.callStatic[c] == null && ae(this.callStatic, c, this.callStatic[m]), this.populateTransaction[c] == null && ae(this.populateTransaction, c, this.populateTransaction[m]), this.estimateGas[c] == null && ae(this.estimateGas, c, this.estimateGas[m]);
    });
  }
  static getContractAddress(e) {
    return cf(e);
  }
  static getInterface(e) {
    return Ts.isInterface(e) ? e : new Ts(e);
  }
  deployed() {
    return this._deployed();
  }
  _deployed(e) {
    return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(() => this) : this._deployedPromise = this.provider.getCode(this.address, e).then((r) => (r === "0x" && ut.throwError("contract not deployed", q.errors.UNSUPPORTED_OPERATION, {
      contractAddress: this.address,
      operation: "getDeployed"
    }), this))), this._deployedPromise;
  }
  fallback(e) {
    this.signer || ut.throwError("sending a transactions require a signer", q.errors.UNSUPPORTED_OPERATION, { operation: "sendTransaction(fallback)" });
    const r = qt(e || {});
    return ["from", "to"].forEach(function(n) {
      r[n] != null && ut.throwError("cannot override " + n, q.errors.UNSUPPORTED_OPERATION, { operation: n });
    }), r.to = this.resolvedAddress, this.deployed().then(() => this.signer.sendTransaction(r));
  }
  connect(e) {
    typeof e == "string" && (e = new ho(e, this.provider));
    const r = new this.constructor(this.address, this.interface, e);
    return this.deployTransaction && ae(r, "deployTransaction", this.deployTransaction), r;
  }
  attach(e) {
    return new this.constructor(e, this.interface, this.signer || this.provider);
  }
  static isIndexed(e) {
    return Fi.isIndexed(e);
  }
  _normalizeRunningEvent(e) {
    return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e;
  }
  _getRunningEvent(e) {
    if (typeof e == "string") {
      if (e === "error")
        return this._normalizeRunningEvent(new Dm());
      if (e === "event")
        return this._normalizeRunningEvent(new La("event", null));
      if (e === "*")
        return this._normalizeRunningEvent(new O0(this.address, this.interface));
      const r = this.interface.getEvent(e);
      return this._normalizeRunningEvent(new P0(this.address, this.interface, r));
    }
    if (e.topics && e.topics.length > 0) {
      try {
        const n = e.topics[0];
        if (typeof n != "string")
          throw new Error("invalid topic");
        const a = this.interface.getEvent(n);
        return this._normalizeRunningEvent(new P0(this.address, this.interface, a, e.topics));
      } catch {
      }
      const r = {
        address: this.address,
        topics: e.topics
      };
      return this._normalizeRunningEvent(new La(sd(r), r));
    }
    return this._normalizeRunningEvent(new O0(this.address, this.interface));
  }
  _checkRunningEvents(e) {
    if (e.listenerCount() === 0) {
      delete this._runningEvents[e.tag];
      const r = this._wrappedEmits[e.tag];
      r && e.filter && (this.provider.off(e.filter, r), delete this._wrappedEmits[e.tag]);
    }
  }
  _wrapEvent(e, r, n) {
    const a = Bn(r);
    return a.removeListener = () => {
      !n || (e.removeListener(n), this._checkRunningEvents(e));
    }, a.getBlock = () => this.provider.getBlock(r.blockHash), a.getTransaction = () => this.provider.getTransaction(r.transactionHash), a.getTransactionReceipt = () => this.provider.getTransactionReceipt(r.transactionHash), e.prepareEvent(a), a;
  }
  _addEventListener(e, r, n) {
    if (this.provider || ut.throwError("events require a provider or a signer with a provider", q.errors.UNSUPPORTED_OPERATION, { operation: "once" }), e.addListener(r, n), this._runningEvents[e.tag] = e, !this._wrappedEmits[e.tag]) {
      const a = (i) => {
        let c = this._wrapEvent(e, i, r);
        if (c.decodeError == null)
          try {
            const d = e.getEmit(c);
            this.emit(e.filter, ...d);
          } catch (d) {
            c.decodeError = d.error;
          }
        e.filter != null && this.emit("event", c), c.decodeError != null && this.emit("error", c.decodeError, c);
      };
      this._wrappedEmits[e.tag] = a, e.filter != null && this.provider.on(e.filter, a);
    }
  }
  queryFilter(e, r, n) {
    const a = this._getRunningEvent(e), i = qt(a.filter);
    return typeof r == "string" && dt(r, 32) ? (n != null && ut.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", n), i.blockHash = r) : (i.fromBlock = r != null ? r : 0, i.toBlock = n != null ? n : "latest"), this.provider.getLogs(i).then((c) => c.map((d) => this._wrapEvent(a, d, null)));
  }
  on(e, r) {
    return this._addEventListener(this._getRunningEvent(e), r, !1), this;
  }
  once(e, r) {
    return this._addEventListener(this._getRunningEvent(e), r, !0), this;
  }
  emit(e, ...r) {
    if (!this.provider)
      return !1;
    const n = this._getRunningEvent(e), a = n.run(r) > 0;
    return this._checkRunningEvents(n), a;
  }
  listenerCount(e) {
    return this.provider ? e == null ? Object.keys(this._runningEvents).reduce((r, n) => r + this._runningEvents[n].listenerCount(), 0) : this._getRunningEvent(e).listenerCount() : 0;
  }
  listeners(e) {
    if (!this.provider)
      return [];
    if (e == null) {
      const r = [];
      for (let n in this._runningEvents)
        this._runningEvents[n].listeners().forEach((a) => {
          r.push(a);
        });
      return r;
    }
    return this._getRunningEvent(e).listeners();
  }
  removeAllListeners(e) {
    if (!this.provider)
      return this;
    if (e == null) {
      for (const n in this._runningEvents) {
        const a = this._runningEvents[n];
        a.removeAllListeners(), this._checkRunningEvents(a);
      }
      return this;
    }
    const r = this._getRunningEvent(e);
    return r.removeAllListeners(), this._checkRunningEvents(r), this;
  }
  off(e, r) {
    if (!this.provider)
      return this;
    const n = this._getRunningEvent(e);
    return n.removeListener(r), this._checkRunningEvents(n), this;
  }
  removeListener(e, r) {
    return this.off(e, r);
  }
}
class Fm extends Bm {
}
class xo {
  constructor(e) {
    ae(this, "alphabet", e), ae(this, "base", e.length), ae(this, "_alphabetMap", {}), ae(this, "_leader", e.charAt(0));
    for (let r = 0; r < e.length; r++)
      this._alphabetMap[e.charAt(r)] = r;
  }
  encode(e) {
    let r = oe(e);
    if (r.length === 0)
      return "";
    let n = [0];
    for (let i = 0; i < r.length; ++i) {
      let c = r[i];
      for (let d = 0; d < n.length; ++d)
        c += n[d] << 8, n[d] = c % this.base, c = c / this.base | 0;
      for (; c > 0; )
        n.push(c % this.base), c = c / this.base | 0;
    }
    let a = "";
    for (let i = 0; r[i] === 0 && i < r.length - 1; ++i)
      a += this._leader;
    for (let i = n.length - 1; i >= 0; --i)
      a += this.alphabet[n[i]];
    return a;
  }
  decode(e) {
    if (typeof e != "string")
      throw new TypeError("Expected String");
    let r = [];
    if (e.length === 0)
      return new Uint8Array(r);
    r.push(0);
    for (let n = 0; n < e.length; n++) {
      let a = this._alphabetMap[e[n]];
      if (a === void 0)
        throw new Error("Non-base" + this.base + " character");
      let i = a;
      for (let c = 0; c < r.length; ++c)
        i += r[c] * this.base, r[c] = i & 255, i >>= 8;
      for (; i > 0; )
        r.push(i & 255), i >>= 8;
    }
    for (let n = 0; e[n] === this._leader && n < e.length - 1; ++n)
      r.push(0);
    return oe(new Uint8Array(r.reverse()));
  }
}
const Mm = new xo("abcdefghijklmnopqrstuvwxyz234567"), yo = new xo("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), _m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseX: xo,
  Base32: Mm,
  Base58: yo
}, Symbol.toStringTag, { value: "Module" }));
var na;
(function(t) {
  t.sha256 = "sha256", t.sha512 = "sha512";
})(na || (na = {}));
const Rm = "sha2/5.7.0", Tm = new q(Rm);
function od(t) {
  return "0x" + Bt.ripemd160().update(oe(t)).digest("hex");
}
function Tn(t) {
  return "0x" + Bt.sha256().update(oe(t)).digest("hex");
}
function Um(t) {
  return "0x" + Bt.sha512().update(oe(t)).digest("hex");
}
function ja(t, e, r) {
  return na[t] || Tm.throwError("unsupported algorithm " + t, q.errors.UNSUPPORTED_OPERATION, {
    operation: "hmac",
    algorithm: t
  }), "0x" + Bt.hmac(Bt[t], oe(e)).update(oe(r)).digest("hex");
}
const Pm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  computeHmac: ja,
  ripemd160: od,
  sha256: Tn,
  sha512: Um,
  get SupportedAlgorithm() {
    return na;
  }
}, Symbol.toStringTag, { value: "Module" }));
function vo(t, e, r, n, a) {
  t = oe(t), e = oe(e);
  let i, c = 1;
  const d = new Uint8Array(n), m = new Uint8Array(e.length + 4);
  m.set(e);
  let b, v;
  for (let A = 1; A <= c; A++) {
    m[e.length] = A >> 24 & 255, m[e.length + 1] = A >> 16 & 255, m[e.length + 2] = A >> 8 & 255, m[e.length + 3] = A & 255;
    let S = oe(ja(a, t, m));
    i || (i = S.length, v = new Uint8Array(i), c = Math.ceil(n / i), b = n - (c - 1) * i), v.set(S);
    for (let F = 1; F < r; F++) {
      S = oe(ja(a, t, S));
      for (let k = 0; k < i; k++)
        v[k] ^= S[k];
    }
    const D = (A - 1) * i, B = A === c ? b : i;
    d.set(oe(v).slice(0, B), D);
  }
  return he(d);
}
const Om = "wordlists/5.7.0", Nm = new q(Om);
class Qa {
  constructor(e) {
    Nm.checkAbstract(new.target, Qa), ae(this, "locale", e);
  }
  split(e) {
    return e.toLowerCase().split(/ +/g);
  }
  join(e) {
    return e.join(" ");
  }
  static check(e) {
    const r = [];
    for (let n = 0; n < 2048; n++) {
      const a = e.getWord(n);
      if (n !== e.getWordIndex(a))
        return "0x";
      r.push(a);
    }
    return tn(r.join(`
`) + `
`);
  }
  static register(e, r) {
    r || (r = e.locale);
  }
}
const Lm = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo";
let Ba = null;
function N0(t) {
  if (Ba == null && (Ba = Lm.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), Qa.check(t) !== "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60"))
    throw Ba = null, new Error("BIP39 Wordlist for en (English) FAILED");
}
class jm extends Qa {
  constructor() {
    super("en");
  }
  getWord(e) {
    return N0(this), Ba[e];
  }
  getWordIndex(e) {
    return N0(this), Ba.indexOf(e);
  }
}
const cd = new jm();
Qa.register(cd);
const L0 = {
  en: cd
}, Wm = "hdnode/5.7.0", Wa = new q(Wm), Hm = ue.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), zm = yt("Bitcoin seed"), zn = 2147483648;
function fd(t) {
  return (1 << t) - 1 << 8 - t;
}
function $m(t) {
  return (1 << t) - 1;
}
function fi(t) {
  return bt(he(t), 32);
}
function j0(t) {
  return yo.encode(pt([t, $r(Tn(Tn(t)), 0, 4)]));
}
function wo(t) {
  if (t == null)
    return L0.en;
  if (typeof t == "string") {
    const e = L0[t];
    return e == null && Wa.throwArgumentError("unknown locale", "wordlist", t), e;
  }
  return t;
}
const jn = {}, aa = "m/44'/60'/0'/0/0";
class Vt {
  constructor(e, r, n, a, i, c, d, m) {
    if (e !== jn)
      throw new Error("HDNode constructor cannot be called directly");
    if (r) {
      const b = new In(r);
      ae(this, "privateKey", b.privateKey), ae(this, "publicKey", b.compressedPublicKey);
    } else
      ae(this, "privateKey", null), ae(this, "publicKey", he(n));
    ae(this, "parentFingerprint", a), ae(this, "fingerprint", $r(od(Tn(this.publicKey)), 0, 4)), ae(this, "address", an(this.publicKey)), ae(this, "chainCode", i), ae(this, "index", c), ae(this, "depth", d), m == null ? (ae(this, "mnemonic", null), ae(this, "path", null)) : typeof m == "string" ? (ae(this, "mnemonic", null), ae(this, "path", m)) : (ae(this, "mnemonic", m), ae(this, "path", m.path));
  }
  get extendedKey() {
    if (this.depth >= 256)
      throw new Error("Depth too large!");
    return j0(pt([
      this.privateKey != null ? "0x0488ADE4" : "0x0488B21E",
      he(this.depth),
      this.parentFingerprint,
      bt(he(this.index), 4),
      this.chainCode,
      this.privateKey != null ? pt(["0x00", this.privateKey]) : this.publicKey
    ]));
  }
  neuter() {
    return new Vt(jn, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path);
  }
  _derive(e) {
    if (e > 4294967295)
      throw new Error("invalid index - " + String(e));
    let r = this.path;
    r && (r += "/" + (e & ~zn));
    const n = new Uint8Array(37);
    if (e & zn) {
      if (!this.privateKey)
        throw new Error("cannot derive child of neutered node");
      n.set(oe(this.privateKey), 1), r && (r += "'");
    } else
      n.set(oe(this.publicKey));
    for (let A = 24; A >= 0; A -= 8)
      n[33 + (A >> 3)] = e >> 24 - A & 255;
    const a = oe(ja(na.sha512, this.chainCode, n)), i = a.slice(0, 32), c = a.slice(32);
    let d = null, m = null;
    this.privateKey ? d = fi(ue.from(i).add(this.privateKey).mod(Hm)) : m = new In(he(i))._addPoint(this.publicKey);
    let b = r;
    const v = this.mnemonic;
    return v && (b = Object.freeze({
      phrase: v.phrase,
      path: r,
      locale: v.locale || "en"
    })), new Vt(jn, d, m, this.fingerprint, fi(c), e, this.depth + 1, b);
  }
  derivePath(e) {
    const r = e.split("/");
    if (r.length === 0 || r[0] === "m" && this.depth !== 0)
      throw new Error("invalid path - " + e);
    r[0] === "m" && r.shift();
    let n = this;
    for (let a = 0; a < r.length; a++) {
      const i = r[a];
      if (i.match(/^[0-9]+'$/)) {
        const c = parseInt(i.substring(0, i.length - 1));
        if (c >= zn)
          throw new Error("invalid path index - " + i);
        n = n._derive(zn + c);
      } else if (i.match(/^[0-9]+$/)) {
        const c = parseInt(i);
        if (c >= zn)
          throw new Error("invalid path index - " + i);
        n = n._derive(c);
      } else
        throw new Error("invalid path component - " + i);
    }
    return n;
  }
  static _fromSeed(e, r) {
    const n = oe(e);
    if (n.length < 16 || n.length > 64)
      throw new Error("invalid seed");
    const a = oe(ja(na.sha512, zm, n));
    return new Vt(jn, fi(a.slice(0, 32)), null, "0x00000000", fi(a.slice(32)), 0, 0, r);
  }
  static fromMnemonic(e, r, n) {
    return n = wo(n), e = Gi(Vi(e, n), n), Vt._fromSeed(dd(e, r), {
      phrase: e,
      path: "m",
      locale: n.locale
    });
  }
  static fromSeed(e) {
    return Vt._fromSeed(e, null);
  }
  static fromExtendedKey(e) {
    const r = yo.decode(e);
    (r.length !== 82 || j0(r.slice(0, 78)) !== e) && Wa.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
    const n = r[4], a = he(r.slice(5, 9)), i = parseInt(he(r.slice(9, 13)).substring(2), 16), c = he(r.slice(13, 45)), d = r.slice(45, 78);
    switch (he(r.slice(0, 4))) {
      case "0x0488b21e":
      case "0x043587cf":
        return new Vt(jn, null, he(d), a, c, i, n, null);
      case "0x0488ade4":
      case "0x04358394 ":
        if (d[0] !== 0)
          break;
        return new Vt(jn, he(d.slice(1)), null, a, c, i, n, null);
    }
    return Wa.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
  }
}
function dd(t, e) {
  e || (e = "");
  const r = yt("mnemonic" + e, Rr.NFKD);
  return vo(yt(t, Rr.NFKD), r, 2048, 64, "sha512");
}
function Vi(t, e) {
  e = wo(e), Wa.checkNormalize();
  const r = e.split(t);
  if (r.length % 3 !== 0)
    throw new Error("invalid mnemonic");
  const n = oe(new Uint8Array(Math.ceil(11 * r.length / 8)));
  let a = 0;
  for (let b = 0; b < r.length; b++) {
    let v = e.getWordIndex(r[b].normalize("NFKD"));
    if (v === -1)
      throw new Error("invalid mnemonic");
    for (let A = 0; A < 11; A++)
      v & 1 << 10 - A && (n[a >> 3] |= 1 << 7 - a % 8), a++;
  }
  const i = 32 * r.length / 3, c = r.length / 3, d = fd(c);
  if ((oe(Tn(n.slice(0, i / 8)))[0] & d) !== (n[n.length - 1] & d))
    throw new Error("invalid checksum");
  return he(n.slice(0, i / 8));
}
function Gi(t, e) {
  if (e = wo(e), t = oe(t), t.length % 4 !== 0 || t.length < 16 || t.length > 32)
    throw new Error("invalid entropy");
  const r = [0];
  let n = 11;
  for (let c = 0; c < t.length; c++)
    n > 8 ? (r[r.length - 1] <<= 8, r[r.length - 1] |= t[c], n -= 8) : (r[r.length - 1] <<= n, r[r.length - 1] |= t[c] >> 8 - n, r.push(t[c] & $m(8 - n)), n += 3);
  const a = t.length / 4, i = oe(Tn(t))[0] & fd(a);
  return r[r.length - 1] <<= a, r[r.length - 1] |= i >> 8 - a, e.join(r.map((c) => e.getWord(c)));
}
function Vm(t, e) {
  try {
    return Vi(t, e), !0;
  } catch {
  }
  return !1;
}
function Gm(t) {
  return (typeof t != "number" || t < 0 || t >= zn || t % 1) && Wa.throwArgumentError("invalid account index", "index", t), `m/44'/60'/${t}'/0/0`;
}
const Km = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defaultPath: aa,
  HDNode: Vt,
  mnemonicToSeed: dd,
  mnemonicToEntropy: Vi,
  entropyToMnemonic: Gi,
  isValidMnemonic: Vm,
  getAccountPath: Gm
}, Symbol.toStringTag, { value: "Module" })), qm = "random/5.7.0", Hs = new q(qm);
function Zm() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
const W0 = Zm();
let vi = W0.crypto || W0.msCrypto;
(!vi || !vi.getRandomValues) && (Hs.warn("WARNING: Missing strong random number source"), vi = {
  getRandomValues: function(t) {
    return Hs.throwError("no secure random source avaialble", q.errors.UNSUPPORTED_OPERATION, {
      operation: "crypto.getRandomValues"
    });
  }
});
function Kn(t) {
  (t <= 0 || t > 1024 || t % 1 || t != t) && Hs.throwArgumentError("invalid length", "length", t);
  const e = new Uint8Array(t);
  return vi.getRandomValues(e), oe(e);
}
function Ym(t) {
  t = t.slice();
  for (let e = t.length - 1; e > 0; e--) {
    const r = Math.floor(Math.random() * (e + 1)), n = t[e];
    t[e] = t[r], t[r] = n;
  }
  return t;
}
const Xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  randomBytes: Kn,
  shuffled: Ym
}, Symbol.toStringTag, { value: "Module" }));
var ld = { exports: {} };
(function(t, e) {
  (function(r) {
    function n(l) {
      return parseInt(l) === l;
    }
    function a(l) {
      if (!n(l.length))
        return !1;
      for (var o = 0; o < l.length; o++)
        if (!n(l[o]) || l[o] < 0 || l[o] > 255)
          return !1;
      return !0;
    }
    function i(l, o) {
      if (l.buffer && ArrayBuffer.isView(l) && l.name === "Uint8Array")
        return o && (l.slice ? l = l.slice() : l = Array.prototype.slice.call(l)), l;
      if (Array.isArray(l)) {
        if (!a(l))
          throw new Error("Array contains invalid value: " + l);
        return new Uint8Array(l);
      }
      if (n(l.length) && a(l))
        return new Uint8Array(l);
      throw new Error("unsupported array-like object");
    }
    function c(l) {
      return new Uint8Array(l);
    }
    function d(l, o, h, I, p) {
      (I != null || p != null) && (l.slice ? l = l.slice(I, p) : l = Array.prototype.slice.call(l, I, p)), o.set(l, h);
    }
    var m = function() {
      function l(h) {
        var I = [], p = 0;
        for (h = encodeURI(h); p < h.length; ) {
          var C = h.charCodeAt(p++);
          C === 37 ? (I.push(parseInt(h.substr(p, 2), 16)), p += 2) : I.push(C);
        }
        return i(I);
      }
      function o(h) {
        for (var I = [], p = 0; p < h.length; ) {
          var C = h[p];
          C < 128 ? (I.push(String.fromCharCode(C)), p++) : C > 191 && C < 224 ? (I.push(String.fromCharCode((C & 31) << 6 | h[p + 1] & 63)), p += 2) : (I.push(String.fromCharCode((C & 15) << 12 | (h[p + 1] & 63) << 6 | h[p + 2] & 63)), p += 3);
        }
        return I.join("");
      }
      return {
        toBytes: l,
        fromBytes: o
      };
    }(), b = function() {
      function l(I) {
        for (var p = [], C = 0; C < I.length; C += 2)
          p.push(parseInt(I.substr(C, 2), 16));
        return p;
      }
      var o = "0123456789abcdef";
      function h(I) {
        for (var p = [], C = 0; C < I.length; C++) {
          var N = I[C];
          p.push(o[(N & 240) >> 4] + o[N & 15]);
        }
        return p.join("");
      }
      return {
        toBytes: l,
        fromBytes: h
      };
    }(), v = { 16: 10, 24: 12, 32: 14 }, A = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], S = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], D = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], B = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986], F = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766], k = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126], T = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436], U = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890], H = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935], P = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600], R = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480], W = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795], Z = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855], Y = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150], ne = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
    function ce(l) {
      for (var o = [], h = 0; h < l.length; h += 4)
        o.push(
          l[h] << 24 | l[h + 1] << 16 | l[h + 2] << 8 | l[h + 3]
        );
      return o;
    }
    var $ = function(l) {
      if (!(this instanceof $))
        throw Error("AES must be instanitated with `new`");
      Object.defineProperty(this, "key", {
        value: i(l, !0)
      }), this._prepare();
    };
    $.prototype._prepare = function() {
      var l = v[this.key.length];
      if (l == null)
        throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var o = 0; o <= l; o++)
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      for (var h = (l + 1) * 4, I = this.key.length / 4, p = ce(this.key), C, o = 0; o < I; o++)
        C = o >> 2, this._Ke[C][o % 4] = p[o], this._Kd[l - C][o % 4] = p[o];
      for (var N = 0, _ = I, j; _ < h; ) {
        if (j = p[I - 1], p[0] ^= S[j >> 16 & 255] << 24 ^ S[j >> 8 & 255] << 16 ^ S[j & 255] << 8 ^ S[j >> 24 & 255] ^ A[N] << 24, N += 1, I != 8)
          for (var o = 1; o < I; o++)
            p[o] ^= p[o - 1];
        else {
          for (var o = 1; o < I / 2; o++)
            p[o] ^= p[o - 1];
          j = p[I / 2 - 1], p[I / 2] ^= S[j & 255] ^ S[j >> 8 & 255] << 8 ^ S[j >> 16 & 255] << 16 ^ S[j >> 24 & 255] << 24;
          for (var o = I / 2 + 1; o < I; o++)
            p[o] ^= p[o - 1];
        }
        for (var o = 0, X, z; o < I && _ < h; )
          X = _ >> 2, z = _ % 4, this._Ke[X][z] = p[o], this._Kd[l - X][z] = p[o++], _++;
      }
      for (var X = 1; X < l; X++)
        for (var z = 0; z < 4; z++)
          j = this._Kd[X][z], this._Kd[X][z] = W[j >> 24 & 255] ^ Z[j >> 16 & 255] ^ Y[j >> 8 & 255] ^ ne[j & 255];
    }, $.prototype.encrypt = function(l) {
      if (l.length != 16)
        throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var o = this._Ke.length - 1, h = [0, 0, 0, 0], I = ce(l), p = 0; p < 4; p++)
        I[p] ^= this._Ke[0][p];
      for (var C = 1; C < o; C++) {
        for (var p = 0; p < 4; p++)
          h[p] = B[I[p] >> 24 & 255] ^ F[I[(p + 1) % 4] >> 16 & 255] ^ k[I[(p + 2) % 4] >> 8 & 255] ^ T[I[(p + 3) % 4] & 255] ^ this._Ke[C][p];
        I = h.slice();
      }
      for (var N = c(16), _, p = 0; p < 4; p++)
        _ = this._Ke[o][p], N[4 * p] = (S[I[p] >> 24 & 255] ^ _ >> 24) & 255, N[4 * p + 1] = (S[I[(p + 1) % 4] >> 16 & 255] ^ _ >> 16) & 255, N[4 * p + 2] = (S[I[(p + 2) % 4] >> 8 & 255] ^ _ >> 8) & 255, N[4 * p + 3] = (S[I[(p + 3) % 4] & 255] ^ _) & 255;
      return N;
    }, $.prototype.decrypt = function(l) {
      if (l.length != 16)
        throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var o = this._Kd.length - 1, h = [0, 0, 0, 0], I = ce(l), p = 0; p < 4; p++)
        I[p] ^= this._Kd[0][p];
      for (var C = 1; C < o; C++) {
        for (var p = 0; p < 4; p++)
          h[p] = U[I[p] >> 24 & 255] ^ H[I[(p + 3) % 4] >> 16 & 255] ^ P[I[(p + 2) % 4] >> 8 & 255] ^ R[I[(p + 1) % 4] & 255] ^ this._Kd[C][p];
        I = h.slice();
      }
      for (var N = c(16), _, p = 0; p < 4; p++)
        _ = this._Kd[o][p], N[4 * p] = (D[I[p] >> 24 & 255] ^ _ >> 24) & 255, N[4 * p + 1] = (D[I[(p + 3) % 4] >> 16 & 255] ^ _ >> 16) & 255, N[4 * p + 2] = (D[I[(p + 2) % 4] >> 8 & 255] ^ _ >> 8) & 255, N[4 * p + 3] = (D[I[(p + 1) % 4] & 255] ^ _) & 255;
      return N;
    };
    var ie = function(l) {
      if (!(this instanceof ie))
        throw Error("AES must be instanitated with `new`");
      this.description = "Electronic Code Block", this.name = "ecb", this._aes = new $(l);
    };
    ie.prototype.encrypt = function(l) {
      if (l = i(l), l.length % 16 !== 0)
        throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var o = c(l.length), h = c(16), I = 0; I < l.length; I += 16)
        d(l, h, 0, I, I + 16), h = this._aes.encrypt(h), d(h, o, I);
      return o;
    }, ie.prototype.decrypt = function(l) {
      if (l = i(l), l.length % 16 !== 0)
        throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var o = c(l.length), h = c(16), I = 0; I < l.length; I += 16)
        d(l, h, 0, I, I + 16), h = this._aes.decrypt(h), d(h, o, I);
      return o;
    };
    var y = function(l, o) {
      if (!(this instanceof y))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Cipher Block Chaining", this.name = "cbc", !o)
        o = c(16);
      else if (o.length != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      this._lastCipherblock = i(o, !0), this._aes = new $(l);
    };
    y.prototype.encrypt = function(l) {
      if (l = i(l), l.length % 16 !== 0)
        throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var o = c(l.length), h = c(16), I = 0; I < l.length; I += 16) {
        d(l, h, 0, I, I + 16);
        for (var p = 0; p < 16; p++)
          h[p] ^= this._lastCipherblock[p];
        this._lastCipherblock = this._aes.encrypt(h), d(this._lastCipherblock, o, I);
      }
      return o;
    }, y.prototype.decrypt = function(l) {
      if (l = i(l), l.length % 16 !== 0)
        throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var o = c(l.length), h = c(16), I = 0; I < l.length; I += 16) {
        d(l, h, 0, I, I + 16), h = this._aes.decrypt(h);
        for (var p = 0; p < 16; p++)
          o[I + p] = h[p] ^ this._lastCipherblock[p];
        d(l, this._lastCipherblock, 0, I, I + 16);
      }
      return o;
    };
    var s = function(l, o, h) {
      if (!(this instanceof s))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Cipher Feedback", this.name = "cfb", !o)
        o = c(16);
      else if (o.length != 16)
        throw new Error("invalid initialation vector size (must be 16 size)");
      h || (h = 1), this.segmentSize = h, this._shiftRegister = i(o, !0), this._aes = new $(l);
    };
    s.prototype.encrypt = function(l) {
      if (l.length % this.segmentSize != 0)
        throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var o = i(l, !0), h, I = 0; I < o.length; I += this.segmentSize) {
        h = this._aes.encrypt(this._shiftRegister);
        for (var p = 0; p < this.segmentSize; p++)
          o[I + p] ^= h[p];
        d(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), d(o, this._shiftRegister, 16 - this.segmentSize, I, I + this.segmentSize);
      }
      return o;
    }, s.prototype.decrypt = function(l) {
      if (l.length % this.segmentSize != 0)
        throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var o = i(l, !0), h, I = 0; I < o.length; I += this.segmentSize) {
        h = this._aes.encrypt(this._shiftRegister);
        for (var p = 0; p < this.segmentSize; p++)
          o[I + p] ^= h[p];
        d(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), d(l, this._shiftRegister, 16 - this.segmentSize, I, I + this.segmentSize);
      }
      return o;
    };
    var f = function(l, o) {
      if (!(this instanceof f))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Output Feedback", this.name = "ofb", !o)
        o = c(16);
      else if (o.length != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      this._lastPrecipher = i(o, !0), this._lastPrecipherIndex = 16, this._aes = new $(l);
    };
    f.prototype.encrypt = function(l) {
      for (var o = i(l, !0), h = 0; h < o.length; h++)
        this._lastPrecipherIndex === 16 && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), o[h] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      return o;
    }, f.prototype.decrypt = f.prototype.encrypt;
    var u = function(l) {
      if (!(this instanceof u))
        throw Error("Counter must be instanitated with `new`");
      l !== 0 && !l && (l = 1), typeof l == "number" ? (this._counter = c(16), this.setValue(l)) : this.setBytes(l);
    };
    u.prototype.setValue = function(l) {
      if (typeof l != "number" || parseInt(l) != l)
        throw new Error("invalid counter value (must be an integer)");
      for (var o = 15; o >= 0; --o)
        this._counter[o] = l % 256, l = l >> 8;
    }, u.prototype.setBytes = function(l) {
      if (l = i(l, !0), l.length != 16)
        throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = l;
    }, u.prototype.increment = function() {
      for (var l = 15; l >= 0; l--)
        if (this._counter[l] === 255)
          this._counter[l] = 0;
        else {
          this._counter[l]++;
          break;
        }
    };
    var g = function(l, o) {
      if (!(this instanceof g))
        throw Error("AES must be instanitated with `new`");
      this.description = "Counter", this.name = "ctr", o instanceof u || (o = new u(o)), this._counter = o, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new $(l);
    };
    g.prototype.encrypt = function(l) {
      for (var o = i(l, !0), h = 0; h < o.length; h++)
        this._remainingCounterIndex === 16 && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), o[h] ^= this._remainingCounter[this._remainingCounterIndex++];
      return o;
    }, g.prototype.decrypt = g.prototype.encrypt;
    function x(l) {
      l = i(l, !0);
      var o = 16 - l.length % 16, h = c(l.length + o);
      d(l, h);
      for (var I = l.length; I < h.length; I++)
        h[I] = o;
      return h;
    }
    function w(l) {
      if (l = i(l, !0), l.length < 16)
        throw new Error("PKCS#7 invalid length");
      var o = l[l.length - 1];
      if (o > 16)
        throw new Error("PKCS#7 padding byte out of range");
      for (var h = l.length - o, I = 0; I < o; I++)
        if (l[h + I] !== o)
          throw new Error("PKCS#7 invalid padding byte");
      var p = c(h);
      return d(l, p, 0, 0, h), p;
    }
    var E = {
      AES: $,
      Counter: u,
      ModeOfOperation: {
        ecb: ie,
        cbc: y,
        cfb: s,
        ofb: f,
        ctr: g
      },
      utils: {
        hex: b,
        utf8: m
      },
      padding: {
        pkcs7: {
          pad: x,
          strip: w
        }
      },
      _arrayTest: {
        coerceArray: i,
        createArray: c,
        copyArray: d
      }
    };
    t.exports = E;
  })();
})(ld);
const Sr = ld.exports, hd = "json-wallets/5.7.0";
function kn(t) {
  return typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), oe(t);
}
function ga(t, e) {
  for (t = String(t); t.length < e; )
    t = "0" + t;
  return t;
}
function Ao(t) {
  return typeof t == "string" ? yt(t, Rr.NFKC) : oe(t);
}
function mt(t, e) {
  let r = t;
  const n = e.toLowerCase().split("/");
  for (let a = 0; a < n.length; a++) {
    let i = null;
    for (const c in r)
      if (c.toLowerCase() === n[a]) {
        i = r[c];
        break;
      }
    if (i === null)
      return null;
    r = i;
  }
  return r;
}
function Jm(t) {
  const e = oe(t);
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  const r = he(e);
  return [
    r.substring(2, 10),
    r.substring(10, 14),
    r.substring(14, 18),
    r.substring(18, 22),
    r.substring(22, 34)
  ].join("-");
}
const Qm = new q(hd);
class ep extends Nn {
  isCrowdsaleAccount(e) {
    return !!(e && e._isCrowdsaleAccount);
  }
}
function Co(t, e) {
  const r = JSON.parse(t);
  e = Ao(e);
  const n = at(mt(r, "ethaddr")), a = kn(mt(r, "encseed"));
  (!a || a.length % 16 !== 0) && Qm.throwArgumentError("invalid encseed", "json", t);
  const i = oe(vo(e, e, 2e3, 32, "sha256")).slice(0, 16), c = a.slice(0, 16), d = a.slice(16), m = new Sr.ModeOfOperation.cbc(i, c), b = Sr.padding.pkcs7.strip(oe(m.decrypt(d)));
  let v = "";
  for (let D = 0; D < b.length; D++)
    v += String.fromCharCode(b[D]);
  const A = yt(v), S = rt(A);
  return new ep({
    _isCrowdsaleAccount: !0,
    address: n,
    privateKey: S
  });
}
function Ki(t) {
  let e = null;
  try {
    e = JSON.parse(t);
  } catch {
    return !1;
  }
  return e.encseed && e.ethaddr;
}
function qi(t) {
  let e = null;
  try {
    e = JSON.parse(t);
  } catch {
    return !1;
  }
  return !(!e.version || parseInt(e.version) !== e.version || parseInt(e.version) !== 3);
}
function tp(t) {
  if (Ki(t))
    try {
      return at(JSON.parse(t).ethaddr);
    } catch {
      return null;
    }
  if (qi(t))
    try {
      return at(JSON.parse(t).address);
    } catch {
      return null;
    }
  return null;
}
var ud = { exports: {} };
(function(t, e) {
  (function(r) {
    function a(F) {
      const k = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      let T = 1779033703, U = 3144134277, H = 1013904242, P = 2773480762, R = 1359893119, W = 2600822924, Z = 528734635, Y = 1541459225;
      const ne = new Uint32Array(64);
      function ce(g) {
        let x = 0, w = g.length;
        for (; w >= 64; ) {
          let E = T, l = U, o = H, h = P, I = R, p = W, C = Z, N = Y, _, j, X, z, O;
          for (j = 0; j < 16; j++)
            X = x + j * 4, ne[j] = (g[X] & 255) << 24 | (g[X + 1] & 255) << 16 | (g[X + 2] & 255) << 8 | g[X + 3] & 255;
          for (j = 16; j < 64; j++)
            _ = ne[j - 2], z = (_ >>> 17 | _ << 32 - 17) ^ (_ >>> 19 | _ << 32 - 19) ^ _ >>> 10, _ = ne[j - 15], O = (_ >>> 7 | _ << 32 - 7) ^ (_ >>> 18 | _ << 32 - 18) ^ _ >>> 3, ne[j] = (z + ne[j - 7] | 0) + (O + ne[j - 16] | 0) | 0;
          for (j = 0; j < 64; j++)
            z = (((I >>> 6 | I << 32 - 6) ^ (I >>> 11 | I << 32 - 11) ^ (I >>> 25 | I << 32 - 25)) + (I & p ^ ~I & C) | 0) + (N + (k[j] + ne[j] | 0) | 0) | 0, O = ((E >>> 2 | E << 32 - 2) ^ (E >>> 13 | E << 32 - 13) ^ (E >>> 22 | E << 32 - 22)) + (E & l ^ E & o ^ l & o) | 0, N = C, C = p, p = I, I = h + z | 0, h = o, o = l, l = E, E = z + O | 0;
          T = T + E | 0, U = U + l | 0, H = H + o | 0, P = P + h | 0, R = R + I | 0, W = W + p | 0, Z = Z + C | 0, Y = Y + N | 0, x += 64, w -= 64;
        }
      }
      ce(F);
      let $, ie = F.length % 64, y = F.length / 536870912 | 0, s = F.length << 3, f = ie < 56 ? 56 : 120, u = F.slice(F.length - ie, F.length);
      for (u.push(128), $ = ie + 1; $ < f; $++)
        u.push(0);
      return u.push(y >>> 24 & 255), u.push(y >>> 16 & 255), u.push(y >>> 8 & 255), u.push(y >>> 0 & 255), u.push(s >>> 24 & 255), u.push(s >>> 16 & 255), u.push(s >>> 8 & 255), u.push(s >>> 0 & 255), ce(u), [
        T >>> 24 & 255,
        T >>> 16 & 255,
        T >>> 8 & 255,
        T >>> 0 & 255,
        U >>> 24 & 255,
        U >>> 16 & 255,
        U >>> 8 & 255,
        U >>> 0 & 255,
        H >>> 24 & 255,
        H >>> 16 & 255,
        H >>> 8 & 255,
        H >>> 0 & 255,
        P >>> 24 & 255,
        P >>> 16 & 255,
        P >>> 8 & 255,
        P >>> 0 & 255,
        R >>> 24 & 255,
        R >>> 16 & 255,
        R >>> 8 & 255,
        R >>> 0 & 255,
        W >>> 24 & 255,
        W >>> 16 & 255,
        W >>> 8 & 255,
        W >>> 0 & 255,
        Z >>> 24 & 255,
        Z >>> 16 & 255,
        Z >>> 8 & 255,
        Z >>> 0 & 255,
        Y >>> 24 & 255,
        Y >>> 16 & 255,
        Y >>> 8 & 255,
        Y >>> 0 & 255
      ];
    }
    function i(F, k, T) {
      F = F.length <= 64 ? F : a(F);
      const U = 64 + k.length + 4, H = new Array(U), P = new Array(64);
      let R, W = [];
      for (R = 0; R < 64; R++)
        H[R] = 54;
      for (R = 0; R < F.length; R++)
        H[R] ^= F[R];
      for (R = 0; R < k.length; R++)
        H[64 + R] = k[R];
      for (R = U - 4; R < U; R++)
        H[R] = 0;
      for (R = 0; R < 64; R++)
        P[R] = 92;
      for (R = 0; R < F.length; R++)
        P[R] ^= F[R];
      function Z() {
        for (let Y = U - 1; Y >= U - 4; Y--) {
          if (H[Y]++, H[Y] <= 255)
            return;
          H[Y] = 0;
        }
      }
      for (; T >= 32; )
        Z(), W = W.concat(a(P.concat(a(H)))), T -= 32;
      return T > 0 && (Z(), W = W.concat(a(P.concat(a(H))).slice(0, T))), W;
    }
    function c(F, k, T, U, H) {
      let P;
      for (v(F, (2 * T - 1) * 16, H, 0, 16), P = 0; P < 2 * T; P++)
        b(F, P * 16, H, 16), m(H, U), v(H, 0, F, k + P * 16, 16);
      for (P = 0; P < T; P++)
        v(F, k + P * 2 * 16, F, P * 16, 16);
      for (P = 0; P < T; P++)
        v(F, k + (P * 2 + 1) * 16, F, (P + T) * 16, 16);
    }
    function d(F, k) {
      return F << k | F >>> 32 - k;
    }
    function m(F, k) {
      v(F, 0, k, 0, 16);
      for (let T = 8; T > 0; T -= 2)
        k[4] ^= d(k[0] + k[12], 7), k[8] ^= d(k[4] + k[0], 9), k[12] ^= d(k[8] + k[4], 13), k[0] ^= d(k[12] + k[8], 18), k[9] ^= d(k[5] + k[1], 7), k[13] ^= d(k[9] + k[5], 9), k[1] ^= d(k[13] + k[9], 13), k[5] ^= d(k[1] + k[13], 18), k[14] ^= d(k[10] + k[6], 7), k[2] ^= d(k[14] + k[10], 9), k[6] ^= d(k[2] + k[14], 13), k[10] ^= d(k[6] + k[2], 18), k[3] ^= d(k[15] + k[11], 7), k[7] ^= d(k[3] + k[15], 9), k[11] ^= d(k[7] + k[3], 13), k[15] ^= d(k[11] + k[7], 18), k[1] ^= d(k[0] + k[3], 7), k[2] ^= d(k[1] + k[0], 9), k[3] ^= d(k[2] + k[1], 13), k[0] ^= d(k[3] + k[2], 18), k[6] ^= d(k[5] + k[4], 7), k[7] ^= d(k[6] + k[5], 9), k[4] ^= d(k[7] + k[6], 13), k[5] ^= d(k[4] + k[7], 18), k[11] ^= d(k[10] + k[9], 7), k[8] ^= d(k[11] + k[10], 9), k[9] ^= d(k[8] + k[11], 13), k[10] ^= d(k[9] + k[8], 18), k[12] ^= d(k[15] + k[14], 7), k[13] ^= d(k[12] + k[15], 9), k[14] ^= d(k[13] + k[12], 13), k[15] ^= d(k[14] + k[13], 18);
      for (let T = 0; T < 16; ++T)
        F[T] += k[T];
    }
    function b(F, k, T, U) {
      for (let H = 0; H < U; H++)
        T[H] ^= F[k + H];
    }
    function v(F, k, T, U, H) {
      for (; H--; )
        T[U++] = F[k++];
    }
    function A(F) {
      if (!F || typeof F.length != "number")
        return !1;
      for (let k = 0; k < F.length; k++) {
        const T = F[k];
        if (typeof T != "number" || T % 1 || T < 0 || T >= 256)
          return !1;
      }
      return !0;
    }
    function S(F, k) {
      if (typeof F != "number" || F % 1)
        throw new Error("invalid " + k);
      return F;
    }
    function D(F, k, T, U, H, P, R) {
      if (T = S(T, "N"), U = S(U, "r"), H = S(H, "p"), P = S(P, "dkLen"), T === 0 || (T & T - 1) !== 0)
        throw new Error("N must be power of 2");
      if (T > 2147483647 / 128 / U)
        throw new Error("N too large");
      if (U > 2147483647 / 128 / H)
        throw new Error("r too large");
      if (!A(F))
        throw new Error("password must be an array or buffer");
      if (F = Array.prototype.slice.call(F), !A(k))
        throw new Error("salt must be an array or buffer");
      k = Array.prototype.slice.call(k);
      let W = i(F, k, H * 128 * U);
      const Z = new Uint32Array(H * 32 * U);
      for (let I = 0; I < Z.length; I++) {
        const p = I * 4;
        Z[I] = (W[p + 3] & 255) << 24 | (W[p + 2] & 255) << 16 | (W[p + 1] & 255) << 8 | (W[p + 0] & 255) << 0;
      }
      const Y = new Uint32Array(64 * U), ne = new Uint32Array(32 * U * T), ce = 32 * U, $ = new Uint32Array(16), ie = new Uint32Array(16), y = H * T * 2;
      let s = 0, f = null, u = !1, g = 0, x = 0, w, E;
      const l = R ? parseInt(1e3 / U) : 4294967295, o = typeof setImmediate < "u" ? setImmediate : setTimeout, h = function() {
        if (u)
          return R(new Error("cancelled"), s / y);
        let I;
        switch (g) {
          case 0:
            E = x * 32 * U, v(Z, E, Y, 0, ce), g = 1, w = 0;
          case 1:
            I = T - w, I > l && (I = l);
            for (let C = 0; C < I; C++)
              v(Y, 0, ne, (w + C) * ce, ce), c(Y, ce, U, $, ie);
            if (w += I, s += I, R) {
              const C = parseInt(1e3 * s / y);
              if (C !== f) {
                if (u = R(null, s / y), u)
                  break;
                f = C;
              }
            }
            if (w < T)
              break;
            w = 0, g = 2;
          case 2:
            I = T - w, I > l && (I = l);
            for (let C = 0; C < I; C++) {
              const N = (2 * U - 1) * 16, _ = Y[N] & T - 1;
              b(ne, _ * ce, Y, ce), c(Y, ce, U, $, ie);
            }
            if (w += I, s += I, R) {
              const C = parseInt(1e3 * s / y);
              if (C !== f) {
                if (u = R(null, s / y), u)
                  break;
                f = C;
              }
            }
            if (w < T)
              break;
            if (v(Y, 0, Z, E, ce), x++, x < H) {
              g = 0;
              break;
            }
            W = [];
            for (let C = 0; C < Z.length; C++)
              W.push(Z[C] >> 0 & 255), W.push(Z[C] >> 8 & 255), W.push(Z[C] >> 16 & 255), W.push(Z[C] >> 24 & 255);
            const p = i(F, W, P);
            return R && R(null, 1, p), p;
        }
        R && o(h);
      };
      if (!R)
        for (; ; ) {
          const I = h();
          if (I != null)
            return I;
        }
      h();
    }
    const B = {
      scrypt: function(F, k, T, U, H, P, R) {
        return new Promise(function(W, Z) {
          let Y = 0;
          R && R(0), D(F, k, T, U, H, P, function(ne, ce, $) {
            if (ne)
              Z(ne);
            else if ($)
              R && Y !== 1 && R(1), W(new Uint8Array($));
            else if (R && ce !== Y)
              return Y = ce, R(ce);
          });
        });
      },
      syncScrypt: function(F, k, T, U, H, P) {
        return new Uint8Array(D(F, k, T, U, H, P));
      }
    };
    t.exports = B;
  })();
})(ud);
const Eo = ud.exports;
var rp = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(c) {
      c(i);
    });
  }
  return new (r || (r = Promise))(function(i, c) {
    function d(v) {
      try {
        b(n.next(v));
      } catch (A) {
        c(A);
      }
    }
    function m(v) {
      try {
        b(n.throw(v));
      } catch (A) {
        c(A);
      }
    }
    function b(v) {
      v.done ? i(v.value) : a(v.value).then(d, m);
    }
    b((n = n.apply(t, e || [])).next());
  });
};
const zs = new q(hd);
function H0(t) {
  return t != null && t.mnemonic && t.mnemonic.phrase;
}
class np extends Nn {
  isKeystoreAccount(e) {
    return !!(e && e._isKeystoreAccount);
  }
}
function ap(t, e, r) {
  if (mt(t, "crypto/cipher") === "aes-128-ctr") {
    const a = kn(mt(t, "crypto/cipherparams/iv")), i = new Sr.Counter(a), c = new Sr.ModeOfOperation.ctr(e, i);
    return oe(c.decrypt(r));
  }
  return null;
}
function md(t, e) {
  const r = kn(mt(t, "crypto/ciphertext"));
  if (he(rt(pt([e.slice(16, 32), r]))).substring(2) !== mt(t, "crypto/mac").toLowerCase())
    throw new Error("invalid password");
  const a = ap(t, e.slice(0, 16), r);
  a || zs.throwError("unsupported cipher", q.errors.UNSUPPORTED_OPERATION, {
    operation: "decrypt"
  });
  const i = e.slice(32, 64), c = an(a);
  if (t.address) {
    let m = t.address.toLowerCase();
    if (m.substring(0, 2) !== "0x" && (m = "0x" + m), at(m) !== c)
      throw new Error("address mismatch");
  }
  const d = {
    _isKeystoreAccount: !0,
    address: c,
    privateKey: he(a)
  };
  if (mt(t, "x-ethers/version") === "0.1") {
    const m = kn(mt(t, "x-ethers/mnemonicCiphertext")), b = kn(mt(t, "x-ethers/mnemonicCounter")), v = new Sr.Counter(b), A = new Sr.ModeOfOperation.ctr(i, v), S = mt(t, "x-ethers/path") || aa, D = mt(t, "x-ethers/locale") || "en", B = oe(A.decrypt(m));
    try {
      const F = Gi(B, D), k = Vt.fromMnemonic(F, null, D).derivePath(S);
      if (k.privateKey != d.privateKey)
        throw new Error("mnemonic mismatch");
      d.mnemonic = k.mnemonic;
    } catch (F) {
      if (F.code !== q.errors.INVALID_ARGUMENT || F.argument !== "wordlist")
        throw F;
    }
  }
  return new np(d);
}
function pd(t, e, r, n, a) {
  return oe(vo(t, e, r, n, a));
}
function ip(t, e, r, n, a) {
  return Promise.resolve(pd(t, e, r, n, a));
}
function bd(t, e, r, n, a) {
  const i = Ao(e), c = mt(t, "crypto/kdf");
  if (c && typeof c == "string") {
    const d = function(m, b) {
      return zs.throwArgumentError("invalid key-derivation function parameters", m, b);
    };
    if (c.toLowerCase() === "scrypt") {
      const m = kn(mt(t, "crypto/kdfparams/salt")), b = parseInt(mt(t, "crypto/kdfparams/n")), v = parseInt(mt(t, "crypto/kdfparams/r")), A = parseInt(mt(t, "crypto/kdfparams/p"));
      (!b || !v || !A) && d("kdf", c), (b & b - 1) !== 0 && d("N", b);
      const S = parseInt(mt(t, "crypto/kdfparams/dklen"));
      return S !== 32 && d("dklen", S), n(i, m, b, v, A, 64, a);
    } else if (c.toLowerCase() === "pbkdf2") {
      const m = kn(mt(t, "crypto/kdfparams/salt"));
      let b = null;
      const v = mt(t, "crypto/kdfparams/prf");
      v === "hmac-sha256" ? b = "sha256" : v === "hmac-sha512" ? b = "sha512" : d("prf", v);
      const A = parseInt(mt(t, "crypto/kdfparams/c")), S = parseInt(mt(t, "crypto/kdfparams/dklen"));
      return S !== 32 && d("dklen", S), r(i, m, A, S, b);
    }
  }
  return zs.throwArgumentError("unsupported key-derivation function", "kdf", c);
}
function gd(t, e) {
  const r = JSON.parse(t), n = bd(r, e, pd, Eo.syncScrypt);
  return md(r, n);
}
function xd(t, e, r) {
  return rp(this, void 0, void 0, function* () {
    const n = JSON.parse(t), a = yield bd(n, e, ip, Eo.scrypt, r);
    return md(n, a);
  });
}
function yd(t, e, r, n) {
  try {
    if (at(t.address) !== an(t.privateKey))
      throw new Error("address/privateKey mismatch");
    if (H0(t)) {
      const k = t.mnemonic;
      if (Vt.fromMnemonic(k.phrase, null, k.locale).derivePath(k.path || aa).privateKey != t.privateKey)
        throw new Error("mnemonic mismatch");
    }
  } catch (k) {
    return Promise.reject(k);
  }
  typeof r == "function" && !n && (n = r, r = {}), r || (r = {});
  const a = oe(t.privateKey), i = Ao(e);
  let c = null, d = null, m = null;
  if (H0(t)) {
    const k = t.mnemonic;
    c = oe(Vi(k.phrase, k.locale || "en")), d = k.path || aa, m = k.locale || "en";
  }
  let b = r.client;
  b || (b = "ethers.js");
  let v = null;
  r.salt ? v = oe(r.salt) : v = Kn(32);
  let A = null;
  if (r.iv) {
    if (A = oe(r.iv), A.length !== 16)
      throw new Error("invalid iv");
  } else
    A = Kn(16);
  let S = null;
  if (r.uuid) {
    if (S = oe(r.uuid), S.length !== 16)
      throw new Error("invalid uuid");
  } else
    S = Kn(16);
  let D = 1 << 17, B = 8, F = 1;
  return r.scrypt && (r.scrypt.N && (D = r.scrypt.N), r.scrypt.r && (B = r.scrypt.r), r.scrypt.p && (F = r.scrypt.p)), Eo.scrypt(i, v, D, B, F, 64, n).then((k) => {
    k = oe(k);
    const T = k.slice(0, 16), U = k.slice(16, 32), H = k.slice(32, 64), P = new Sr.Counter(A), R = new Sr.ModeOfOperation.ctr(T, P), W = oe(R.encrypt(a)), Z = rt(pt([U, W])), Y = {
      address: t.address.substring(2).toLowerCase(),
      id: Jm(S),
      version: 3,
      crypto: {
        cipher: "aes-128-ctr",
        cipherparams: {
          iv: he(A).substring(2)
        },
        ciphertext: he(W).substring(2),
        kdf: "scrypt",
        kdfparams: {
          salt: he(v).substring(2),
          n: D,
          dklen: 32,
          p: F,
          r: B
        },
        mac: Z.substring(2)
      }
    };
    if (c) {
      const ne = Kn(16), ce = new Sr.Counter(ne), $ = new Sr.ModeOfOperation.ctr(H, ce), ie = oe($.encrypt(c)), y = new Date(), s = y.getUTCFullYear() + "-" + ga(y.getUTCMonth() + 1, 2) + "-" + ga(y.getUTCDate(), 2) + "T" + ga(y.getUTCHours(), 2) + "-" + ga(y.getUTCMinutes(), 2) + "-" + ga(y.getUTCSeconds(), 2) + ".0Z";
      Y["x-ethers"] = {
        client: b,
        gethFilename: "UTC--" + s + "--" + Y.address,
        mnemonicCounter: he(ne).substring(2),
        mnemonicCiphertext: he(ie).substring(2),
        path: d,
        locale: m,
        version: "0.1"
      };
    }
    return JSON.stringify(Y);
  });
}
function vd(t, e, r) {
  if (Ki(t)) {
    r && r(0);
    const n = Co(t, e);
    return r && r(1), Promise.resolve(n);
  }
  return qi(t) ? xd(t, e, r) : Promise.reject(new Error("invalid JSON wallet"));
}
function wd(t, e) {
  if (Ki(t))
    return Co(t, e);
  if (qi(t))
    return gd(t, e);
  throw new Error("invalid JSON wallet");
}
const sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decryptCrowdsale: Co,
  decryptKeystore: xd,
  decryptKeystoreSync: gd,
  encryptKeystore: yd,
  isCrowdsaleWallet: Ki,
  isKeystoreWallet: qi,
  getJsonWalletAddress: tp,
  decryptJsonWallet: vd,
  decryptJsonWalletSync: wd
}, Symbol.toStringTag, { value: "Module" })), op = "wallet/5.7.0";
var z0 = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(c) {
      c(i);
    });
  }
  return new (r || (r = Promise))(function(i, c) {
    function d(v) {
      try {
        b(n.next(v));
      } catch (A) {
        c(A);
      }
    }
    function m(v) {
      try {
        b(n.throw(v));
      } catch (A) {
        c(A);
      }
    }
    function b(v) {
      v.done ? i(v.value) : a(v.value).then(d, m);
    }
    b((n = n.apply(t, e || [])).next());
  });
};
const Wn = new q(op);
function cp(t) {
  return t != null && dt(t.privateKey, 32) && t.address != null;
}
function fp(t) {
  const e = t.mnemonic;
  return e && e.phrase;
}
class En extends Za {
  constructor(e, r) {
    if (super(), cp(e)) {
      const n = new In(e.privateKey);
      if (ae(this, "_signingKey", () => n), ae(this, "address", an(this.publicKey)), this.address !== at(e.address) && Wn.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"), fp(e)) {
        const a = e.mnemonic;
        ae(this, "_mnemonic", () => ({
          phrase: a.phrase,
          path: a.path || aa,
          locale: a.locale || "en"
        }));
        const i = this.mnemonic, c = Vt.fromMnemonic(i.phrase, null, i.locale).derivePath(i.path);
        an(c.privateKey) !== this.address && Wn.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]");
      } else
        ae(this, "_mnemonic", () => null);
    } else {
      if (In.isSigningKey(e))
        e.curve !== "secp256k1" && Wn.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"), ae(this, "_signingKey", () => e);
      else {
        typeof e == "string" && e.match(/^[0-9a-f]*$/i) && e.length === 64 && (e = "0x" + e);
        const n = new In(e);
        ae(this, "_signingKey", () => n);
      }
      ae(this, "_mnemonic", () => null), ae(this, "address", an(this.publicKey));
    }
    r && !ji.isProvider(r) && Wn.throwArgumentError("invalid provider", "provider", r), ae(this, "provider", r || null);
  }
  get mnemonic() {
    return this._mnemonic();
  }
  get privateKey() {
    return this._signingKey().privateKey;
  }
  get publicKey() {
    return this._signingKey().publicKey;
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  connect(e) {
    return new En(this, e);
  }
  signTransaction(e) {
    return Ir(e).then((r) => {
      r.from != null && (at(r.from) !== this.address && Wn.throwArgumentError("transaction from address mismatch", "transaction.from", e.from), delete r.from);
      const n = this._signingKey().signDigest(rt(Ws(r)));
      return Ws(r, n);
    });
  }
  signMessage(e) {
    return z0(this, void 0, void 0, function* () {
      return Ms(this._signingKey().signDigest(lo(e)));
    });
  }
  _signTypedData(e, r, n) {
    return z0(this, void 0, void 0, function* () {
      const a = yield Dt.resolveNames(e, r, n, (i) => (this.provider == null && Wn.throwError("cannot resolve ENS names without a provider", q.errors.UNSUPPORTED_OPERATION, {
        operation: "resolveName",
        value: i
      }), this.provider.resolveName(i)));
      return Ms(this._signingKey().signDigest(Dt.hash(a.domain, r, a.value)));
    });
  }
  encrypt(e, r, n) {
    if (typeof r == "function" && !n && (n = r, r = {}), n && typeof n != "function")
      throw new Error("invalid callback");
    return r || (r = {}), yd(this, e, r, n);
  }
  static createRandom(e) {
    let r = Kn(16);
    e || (e = {}), e.extraEntropy && (r = oe($r(rt(pt([r, e.extraEntropy])), 0, 16)));
    const n = Gi(r, e.locale);
    return En.fromMnemonic(n, e.path, e.locale);
  }
  static fromEncryptedJson(e, r, n) {
    return vd(e, r, n).then((a) => new En(a));
  }
  static fromEncryptedJsonSync(e, r) {
    return new En(wd(e, r));
  }
  static fromMnemonic(e, r, n) {
    return r || (r = aa), new En(Vt.fromMnemonic(e, null, n).derivePath(r));
  }
}
function dp(t, e) {
  return Xa(lo(t), e);
}
function lp(t, e, r, n) {
  return Xa(Dt.hash(t, e, r), n);
}
const hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Wallet: En,
  verifyMessage: dp,
  verifyTypedData: lp
}, Symbol.toStringTag, { value: "Module" })), up = "web/5.7.1";
var mp = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(c) {
      c(i);
    });
  }
  return new (r || (r = Promise))(function(i, c) {
    function d(v) {
      try {
        b(n.next(v));
      } catch (A) {
        c(A);
      }
    }
    function m(v) {
      try {
        b(n.throw(v));
      } catch (A) {
        c(A);
      }
    }
    function b(v) {
      v.done ? i(v.value) : a(v.value).then(d, m);
    }
    b((n = n.apply(t, e || [])).next());
  });
};
function pp(t, e) {
  return mp(this, void 0, void 0, function* () {
    e == null && (e = {});
    const r = {
      method: e.method || "GET",
      headers: e.headers || {},
      body: e.body || void 0
    };
    if (e.skipFetchSetup !== !0 && (r.mode = "cors", r.cache = "no-cache", r.credentials = "same-origin", r.redirect = "follow", r.referrer = "client"), e.fetchOptions != null) {
      const c = e.fetchOptions;
      c.mode && (r.mode = c.mode), c.cache && (r.cache = c.cache), c.credentials && (r.credentials = c.credentials), c.redirect && (r.redirect = c.redirect), c.referrer && (r.referrer = c.referrer);
    }
    const n = yield fetch(t, r), a = yield n.arrayBuffer(), i = {};
    return n.headers.forEach ? n.headers.forEach((c, d) => {
      i[d.toLowerCase()] = c;
    }) : n.headers.keys().forEach((c) => {
      i[c.toLowerCase()] = n.headers.get(c);
    }), {
      headers: i,
      statusCode: n.status,
      statusMessage: n.statusText,
      body: oe(new Uint8Array(a))
    };
  });
}
var bp = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(c) {
      c(i);
    });
  }
  return new (r || (r = Promise))(function(i, c) {
    function d(v) {
      try {
        b(n.next(v));
      } catch (A) {
        c(A);
      }
    }
    function m(v) {
      try {
        b(n.throw(v));
      } catch (A) {
        c(A);
      }
    }
    function b(v) {
      v.done ? i(v.value) : a(v.value).then(d, m);
    }
    b((n = n.apply(t, e || [])).next());
  });
};
const fr = new q(up);
function $0(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Zr(t, e) {
  if (t == null)
    return null;
  if (typeof t == "string")
    return t;
  if (Ka(t)) {
    if (e && (e.split("/")[0] === "text" || e.split(";")[0].trim() === "application/json"))
      try {
        return da(t);
      } catch {
      }
    return he(t);
  }
  return t;
}
function gp(t) {
  return yt(t.replace(/%([0-9a-f][0-9a-f])/gi, (e, r) => String.fromCharCode(parseInt(r, 16))));
}
function Ad(t, e, r) {
  const n = typeof t == "object" && t.throttleLimit != null ? t.throttleLimit : 12;
  fr.assertArgument(n > 0 && n % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", n);
  const a = typeof t == "object" ? t.throttleCallback : null, i = typeof t == "object" && typeof t.throttleSlotInterval == "number" ? t.throttleSlotInterval : 100;
  fr.assertArgument(i > 0 && i % 1 === 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", i);
  const c = typeof t == "object" ? !!t.errorPassThrough : !1, d = {};
  let m = null;
  const b = {
    method: "GET"
  };
  let v = !1, A = 2 * 60 * 1e3;
  if (typeof t == "string")
    m = t;
  else if (typeof t == "object") {
    if ((t == null || t.url == null) && fr.throwArgumentError("missing URL", "connection.url", t), m = t.url, typeof t.timeout == "number" && t.timeout > 0 && (A = t.timeout), t.headers)
      for (const T in t.headers)
        d[T.toLowerCase()] = { key: T, value: String(t.headers[T]) }, ["if-none-match", "if-modified-since"].indexOf(T.toLowerCase()) >= 0 && (v = !0);
    if (b.allowGzip = !!t.allowGzip, t.user != null && t.password != null) {
      m.substring(0, 6) !== "https:" && t.allowInsecureAuthentication !== !0 && fr.throwError("basic authentication requires a secure https url", q.errors.INVALID_ARGUMENT, { argument: "url", url: m, user: t.user, password: "[REDACTED]" });
      const T = t.user + ":" + t.password;
      d.authorization = {
        key: "Authorization",
        value: "Basic " + vf(yt(T))
      };
    }
    t.skipFetchSetup != null && (b.skipFetchSetup = !!t.skipFetchSetup), t.fetchOptions != null && (b.fetchOptions = qt(t.fetchOptions));
  }
  const S = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), D = m ? m.match(S) : null;
  if (D)
    try {
      const T = {
        statusCode: 200,
        statusMessage: "OK",
        headers: { "content-type": D[1] || "text/plain" },
        body: D[2] ? fo(D[3]) : gp(D[3])
      };
      let U = T.body;
      return r && (U = r(T.body, T)), Promise.resolve(U);
    } catch (T) {
      fr.throwError("processing response error", q.errors.SERVER_ERROR, {
        body: Zr(D[1], D[2]),
        error: T,
        requestBody: null,
        requestMethod: "GET",
        url: m
      });
    }
  e && (b.method = "POST", b.body = e, d["content-type"] == null && (d["content-type"] = { key: "Content-Type", value: "application/octet-stream" }), d["content-length"] == null && (d["content-length"] = { key: "Content-Length", value: String(e.length) }));
  const B = {};
  Object.keys(d).forEach((T) => {
    const U = d[T];
    B[U.key] = U.value;
  }), b.headers = B;
  const F = function() {
    let T = null;
    return { promise: new Promise(function(P, R) {
      A && (T = setTimeout(() => {
        T != null && (T = null, R(fr.makeError("timeout", q.errors.TIMEOUT, {
          requestBody: Zr(b.body, B["content-type"]),
          requestMethod: b.method,
          timeout: A,
          url: m
        })));
      }, A));
    }), cancel: function() {
      T != null && (clearTimeout(T), T = null);
    } };
  }(), k = function() {
    return bp(this, void 0, void 0, function* () {
      for (let T = 0; T < n; T++) {
        let U = null;
        try {
          if (U = yield pp(m, b), T < n) {
            if (U.statusCode === 301 || U.statusCode === 302) {
              const P = U.headers.location || "";
              if (b.method === "GET" && P.match(/^https:/)) {
                m = U.headers.location;
                continue;
              }
            } else if (U.statusCode === 429) {
              let P = !0;
              if (a && (P = yield a(T, m)), P) {
                let R = 0;
                const W = U.headers["retry-after"];
                typeof W == "string" && W.match(/^[1-9][0-9]*$/) ? R = parseInt(W) * 1e3 : R = i * parseInt(String(Math.random() * Math.pow(2, T))), yield $0(R);
                continue;
              }
            }
          }
        } catch (P) {
          U = P.response, U == null && (F.cancel(), fr.throwError("missing response", q.errors.SERVER_ERROR, {
            requestBody: Zr(b.body, B["content-type"]),
            requestMethod: b.method,
            serverError: P,
            url: m
          }));
        }
        let H = U.body;
        if (v && U.statusCode === 304 ? H = null : !c && (U.statusCode < 200 || U.statusCode >= 300) && (F.cancel(), fr.throwError("bad response", q.errors.SERVER_ERROR, {
          status: U.statusCode,
          headers: U.headers,
          body: Zr(H, U.headers ? U.headers["content-type"] : null),
          requestBody: Zr(b.body, B["content-type"]),
          requestMethod: b.method,
          url: m
        })), r)
          try {
            const P = yield r(H, U);
            return F.cancel(), P;
          } catch (P) {
            if (P.throttleRetry && T < n) {
              let R = !0;
              if (a && (R = yield a(T, m)), R) {
                const W = i * parseInt(String(Math.random() * Math.pow(2, T)));
                yield $0(W);
                continue;
              }
            }
            F.cancel(), fr.throwError("processing response error", q.errors.SERVER_ERROR, {
              body: Zr(H, U.headers ? U.headers["content-type"] : null),
              error: P,
              requestBody: Zr(b.body, B["content-type"]),
              requestMethod: b.method,
              url: m
            });
          }
        return F.cancel(), H;
      }
      return fr.throwError("failed response", q.errors.SERVER_ERROR, {
        requestBody: Zr(b.body, B["content-type"]),
        requestMethod: b.method,
        url: m
      });
    });
  }();
  return Promise.race([F.promise, k]);
}
function xp(t, e, r) {
  let n = (i, c) => {
    let d = null;
    if (i != null)
      try {
        d = JSON.parse(da(i));
      } catch (m) {
        fr.throwError("invalid JSON", q.errors.SERVER_ERROR, {
          body: i,
          error: m
        });
      }
    return r && (d = r(d, c)), d;
  }, a = null;
  if (e != null) {
    a = yt(e);
    const i = typeof t == "string" ? { url: t } : qt(t);
    i.headers ? Object.keys(i.headers).filter((d) => d.toLowerCase() === "content-type").length !== 0 || (i.headers = qt(i.headers), i.headers["content-type"] = "application/json") : i.headers = { "content-type": "application/json" }, t = i;
  }
  return Ad(t, a, n);
}
function yp(t, e) {
  return e || (e = {}), e = qt(e), e.floor == null && (e.floor = 0), e.ceiling == null && (e.ceiling = 1e4), e.interval == null && (e.interval = 250), new Promise(function(r, n) {
    let a = null, i = !1;
    const c = () => i ? !1 : (i = !0, a && clearTimeout(a), !0);
    e.timeout && (a = setTimeout(() => {
      c() && n(new Error("timeout"));
    }, e.timeout));
    const d = e.retryLimit;
    let m = 0;
    function b() {
      return t().then(function(v) {
        if (v !== void 0)
          c() && r(v);
        else if (e.oncePoll)
          e.oncePoll.once("poll", b);
        else if (e.onceBlock)
          e.onceBlock.once("block", b);
        else if (!i) {
          if (m++, m > d) {
            c() && n(new Error("retry limit reached"));
            return;
          }
          let A = e.interval * parseInt(String(Math.random() * Math.pow(2, m)));
          A < e.floor && (A = e.floor), A > e.ceiling && (A = e.ceiling), setTimeout(b, A);
        }
        return null;
      }, function(v) {
        c() && n(v);
      });
    }
    b();
  });
}
const vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _fetchData: Ad,
  fetchJson: xp,
  poll: yp
}, Symbol.toStringTag, { value: "Module" })), wp = "solidity/5.7.0", Ap = new RegExp("^bytes([0-9]+)$"), Cp = new RegExp("^(u?int)([0-9]*)$"), Ep = new RegExp("^(.*)\\[([0-9]*)\\]$"), Ip = "0000000000000000000000000000000000000000000000000000000000000000", $n = new q(wp);
function Cd(t, e, r) {
  switch (t) {
    case "address":
      return r ? ka(e, 32) : oe(e);
    case "string":
      return yt(e);
    case "bytes":
      return oe(e);
    case "bool":
      return e = e ? "0x01" : "0x00", r ? ka(e, 32) : oe(e);
  }
  let n = t.match(Cp);
  if (n) {
    let a = parseInt(n[2] || "256");
    return (n[2] && String(a) !== n[2] || a % 8 !== 0 || a === 0 || a > 256) && $n.throwArgumentError("invalid number type", "type", t), r && (a = 256), e = ue.from(e).toTwos(a), ka(e, a / 8);
  }
  if (n = t.match(Ap), n) {
    const a = parseInt(n[1]);
    return (String(a) !== n[1] || a === 0 || a > 32) && $n.throwArgumentError("invalid bytes type", "type", t), oe(e).byteLength !== a && $n.throwArgumentError(`invalid value for ${t}`, "value", e), r ? oe((e + Ip).substring(0, 66)) : e;
  }
  if (n = t.match(Ep), n && Array.isArray(e)) {
    const a = n[1];
    parseInt(n[2] || String(e.length)) != e.length && $n.throwArgumentError(`invalid array length for ${t}`, "value", e);
    const c = [];
    return e.forEach(function(d) {
      c.push(Cd(a, d, !0));
    }), pt(c);
  }
  return $n.throwArgumentError("invalid type", "type", t);
}
function Io(t, e) {
  t.length != e.length && $n.throwArgumentError("wrong number of values; expected ${ types.length }", "values", e);
  const r = [];
  return t.forEach(function(n, a) {
    r.push(Cd(n, e[a]));
  }), he(pt(r));
}
function kp(t, e) {
  return rt(Io(t, e));
}
function Sp(t, e) {
  return Tn(Io(t, e));
}
const Dp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pack: Io,
  keccak256: kp,
  sha256: Sp
}, Symbol.toStringTag, { value: "Module" })), Bp = "units/5.7.0", Ed = new q(Bp), Id = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function Fp(t) {
  const e = String(t).split(".");
  (e.length > 2 || !e[0].match(/^-?[0-9]*$/) || e[1] && !e[1].match(/^[0-9]*$/) || t === "." || t === "-.") && Ed.throwArgumentError("invalid value", "value", t);
  let r = e[0], n = "";
  for (r.substring(0, 1) === "-" && (n = "-", r = r.substring(1)); r.substring(0, 1) === "0"; )
    r = r.substring(1);
  r === "" && (r = "0");
  let a = "";
  for (e.length === 2 && (a = "." + (e[1] || "0")); a.length > 2 && a[a.length - 1] === "0"; )
    a = a.substring(0, a.length - 1);
  const i = [];
  for (; r.length; )
    if (r.length <= 3) {
      i.unshift(r);
      break;
    } else {
      const c = r.length - 3;
      i.unshift(r.substring(c)), r = r.substring(0, c);
    }
  return n + i.join(",") + a;
}
function kd(t, e) {
  if (typeof e == "string") {
    const r = Id.indexOf(e);
    r !== -1 && (e = 3 * r);
  }
  return pi(t, e != null ? e : 18);
}
function Sd(t, e) {
  if (typeof t != "string" && Ed.throwArgumentError("value must be a string", "value", t), typeof e == "string") {
    const r = Id.indexOf(e);
    r !== -1 && (e = 3 * r);
  }
  return dr(t, e != null ? e : 18);
}
function Mp(t) {
  return kd(t, 18);
}
function _p(t) {
  return Sd(t, 18);
}
const Rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commify: Fp,
  formatUnits: kd,
  parseUnits: Sd,
  formatEther: Mp,
  parseEther: _p
}, Symbol.toStringTag, { value: "Module" })), Tp = "ethers/5.7.2";
new q(Tp);
const Up = [
  {
    chainId: 137,
    address: "0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C",
    _scan: "https://polygonscan.com/token/0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C",
    symbol: "KNC",
    name: "Kyber Network Crystal",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 137,
    address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    _scan: "https://polygonscan.com/token/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    symbol: "ETH",
    name: "Ether",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
  },
  {
    chainId: 137,
    address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    _scan: "https://polygonscan.com/token/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    symbol: "USDC",
    name: "USDC",
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
  },
  {
    chainId: 137,
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    _scan: "https://polygonscan.com/token/0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    symbol: "USDT",
    name: "USDT",
    decimals: 6,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 137,
    address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    _scan: "https://polygonscan.com/token/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    symbol: "DAI",
    name: "DAI",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png"
  },
  {
    chainId: 137,
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    _scan: "https://polygonscan.com/token/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    symbol: "WMATIC",
    name: "Wrapped Matic",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/14073/small/matic.png"
  },
  {
    chainId: 137,
    address: "0x3A3e7650f8B9f667dA98F236010fBf44Ee4B2975",
    _scan: "https://polygonscan.com/token/0x3A3e7650f8B9f667dA98F236010fBf44Ee4B2975",
    symbol: "XUSD",
    name: "xDollar Stablecoin",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/16291/small/xUSD-web-transparent.png?1623661715"
  },
  {
    chainId: 137,
    address: "0x3Dc7B06dD0B1f08ef9AcBbD2564f8605b4868EEA",
    _scan: "https://polygonscan.com/token/0x3Dc7B06dD0B1f08ef9AcBbD2564f8605b4868EEA",
    symbol: "XDO",
    name: "xDollar",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/16289/small/logo-web-transparent_2.png"
  },
  {
    chainId: 137,
    address: "0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c",
    _scan: "https://polygonscan.com/token/0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c",
    symbol: "jEUR",
    name: "Jarvis Synthetic Euro",
    decimals: 18,
    logoURI: "https://i.imgur.com/92uhfao.png"
  },
  {
    chainId: 137,
    address: "0x767058F11800FBA6A682E73A6e79ec5eB74Fac8c",
    _scan: "https://polygonscan.com/token/0x767058F11800FBA6A682E73A6e79ec5eB74Fac8c",
    symbol: "jGBP",
    name: "Jarvis Synthetic British Pound",
    decimals: 18,
    logoURI: "https://i.imgur.com/HS7BMfs.png"
  },
  {
    chainId: 137,
    address: "0xbD1463F02f61676d53fd183C2B19282BFF93D099",
    _scan: "https://polygonscan.com/token/0xbD1463F02f61676d53fd183C2B19282BFF93D099",
    symbol: "jCHF",
    name: "Jarvis Synthetic Swiss Franc",
    decimals: 18,
    logoURI: "https://i.imgur.com/Fp31dDB.png"
  },
  {
    chainId: 137,
    address: "0x00e5646f60AC6Fb446f621d146B6E1886f002905",
    _scan: "https://polygonscan.com/token/0x00e5646f60AC6Fb446f621d146B6E1886f002905",
    symbol: "RAI",
    name: "Rai Reflex Index",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/14004/small/RAI-logo-coin.png?1613592334"
  },
  {
    chainId: 137,
    address: "0xfAdE2934b8E7685070149034384fB7863860D86e",
    _scan: "https://polygonscan.com/token/0xfAdE2934b8E7685070149034384fB7863860D86e",
    symbol: "AUR-0112",
    name: "Aureus",
    decimals: 18,
    logoURI: "https://i.imgur.com/PyipL43.png"
  },
  {
    chainId: 137,
    address: "0xc1c93D475dc82Fe72DBC7074d55f5a734F8cEEAE",
    _scan: "https://polygonscan.com/token/0xc1c93D475dc82Fe72DBC7074d55f5a734F8cEEAE",
    symbol: "PGX",
    name: "Pegaxy Stone",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/stevepegaxy/assets/master/blockchains/polygon/assets/0xc1c93D475dc82Fe72DBC7074d55f5a734F8cEEAE/logo.png"
  },
  {
    chainId: 137,
    address: "0xcC1B9517460D8aE86fe576f614d091fCa65a28Fc",
    _scan: "https://polygonscan.com/token/0xcC1B9517460D8aE86fe576f614d091fCa65a28Fc",
    symbol: "VIS",
    name: "Vigorus",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/stevepegaxy/assets/master/blockchains/polygon/assets/0xcC1B9517460D8aE86fe576f614d091fCa65a28Fc/logo.png"
  },
  {
    chainId: 137,
    address: "0x6Fb2415463e949aF08ce50F83E94b7e008BABf07",
    _scan: "https://polygonscan.com/token/0x6Fb2415463e949aF08ce50F83E94b7e008BABf07",
    symbol: "AUR-FEB22",
    name: "Aureus",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 137,
    address: "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
    _scan: "https://polygonscan.com/token/0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
    symbol: "AVAX",
    name: "Avalanche Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png"
  },
  {
    chainId: 137,
    address: "0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F",
    _scan: "https://polygonscan.com/token/0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F",
    symbol: "BNB",
    name: "Binance Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  },
  {
    chainId: 137,
    address: "0xB85517b87BF64942adf3A0B9E4c71E4Bc5Caa4e5",
    _scan: "https://polygonscan.com/token/0xB85517b87BF64942adf3A0B9E4c71E4Bc5Caa4e5",
    symbol: "FTM",
    name: "Fantom Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png"
  },
  {
    chainId: 137,
    address: "0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4",
    _scan: "https://polygonscan.com/token/0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4",
    symbol: "SOL",
    name: "SOL",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
  },
  {
    chainId: 137,
    address: "0xf2D8124b8F9267DaD61351c7aD252362880C6638",
    _scan: "https://polygonscan.com/token/0xf2D8124b8F9267DaD61351c7aD252362880C6638",
    symbol: "WCRO",
    name: "Wrapped CRO",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14532.png"
  },
  {
    chainId: 137,
    address: "0x80c0CBDB8d0B190238795d376f0bD57fd40525F2",
    _scan: "https://polygonscan.com/token/0x80c0CBDB8d0B190238795d376f0bD57fd40525F2",
    symbol: "WONE",
    name: "Wrapped ONE",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11696.png"
  },
  {
    chainId: 137,
    address: "0xC25351811983818c9Fe6D8c580531819c8ADe90f",
    _scan: "https://polygonscan.com/token/0xC25351811983818c9Fe6D8c580531819c8ADe90f",
    symbol: "IDLE",
    name: "Idle (PoS)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7841.png"
  },
  {
    chainId: 137,
    address: "0xFbBd93fC3BE8B048c007666AF4846e4A36BACC95",
    _scan: "https://polygonscan.com/token/0xFbBd93fC3BE8B048c007666AF4846e4A36BACC95",
    symbol: "RIKEN",
    name: "RIKEN",
    decimals: 18,
    logoURI: "https://i.imgur.com/cTLXfWJ.png"
  },
  {
    chainId: 137,
    address: "0x9F994e2783b44C83204377589854A17c6b0c226d",
    _scan: "https://polygonscan.com/token/0x9F994e2783b44C83204377589854A17c6b0c226d",
    symbol: "RIGY",
    name: "RIGY",
    decimals: 18,
    logoURI: "https://i.imgur.com/0uZyC7M.png"
  },
  {
    chainId: 137,
    address: "0xD81F558b71A5323e433729009D55159955F8A7f9",
    _scan: "https://polygonscan.com/token/0xD81F558b71A5323e433729009D55159955F8A7f9",
    symbol: "UNB",
    name: "Unbound",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7846.png"
  },
  {
    chainId: 137,
    address: "0x1eBA4B44C4F8cc2695347C6a78F0B7a002d26413",
    _scan: "https://polygonscan.com/token/0x1eBA4B44C4F8cc2695347C6a78F0B7a002d26413",
    symbol: "UND",
    name: "Unbound Dollar",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7848.png"
  },
  {
    chainId: 137,
    address: "0x9111D6446Ac5b88A84cf06425c6286658368542F",
    _scan: "https://polygonscan.com/token/0x9111D6446Ac5b88A84cf06425c6286658368542F",
    symbol: "FLAG-PoS",
    name: "ForLootAndGlory",
    decimals: 18,
    logoURI: "https://app.forlootandglory.io/token_logo.png"
  },
  {
    chainId: 137,
    address: "0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4",
    _scan: "https://polygonscan.com/token/0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4",
    symbol: "stMATIC",
    name: "Staked MATIC (PoS)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/18688.png"
  },
  {
    chainId: 137,
    address: "0x60138EFCeB1F7D8e10C8Cb89bb61BbDbEeBB4Ffc",
    _scan: "https://polygonscan.com/token/0x60138EFCeB1F7D8e10C8Cb89bb61BbDbEeBB4Ffc",
    symbol: "RICE",
    name: "Rice Wallet",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/RICE.png"
  },
  {
    chainId: 137,
    address: "0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64",
    _scan: "https://polygonscan.com/token/0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64",
    symbol: "CRYSTL",
    name: "Crystal Token",
    decimals: 18,
    logoURI: "https://www.crystl.finance/images/landing/shareholder.svg"
  },
  {
    chainId: 137,
    address: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
    _scan: "https://polygonscan.com/token/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  },
  {
    chainId: 137,
    address: "0xc3c7d422809852031b44ab29eec9f1eff2a58756",
    _scan: "https://polygonscan.com/token/0xc3c7d422809852031b44ab29eec9f1eff2a58756",
    decimals: 18,
    name: "Lido DAO Token (PoS)",
    symbol: "LDO",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/LDO.png"
  },
  {
    chainId: 137,
    address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    name: "Aave",
    symbol: "AAVE",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png"
  },
  {
    name: "Balancer",
    address: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
    symbol: "BAL",
    decimals: 18,
    chainId: 137,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5728.png"
  },
  {
    name: "ChainLink Token",
    address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    symbol: "LINK",
    decimals: 18,
    chainId: 137,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png"
  },
  {
    name: "Synthetix Network Token",
    address: "0x50B728D8D964fd00C2d0AAD81718b71311feF68a",
    symbol: "SNX",
    decimals: 18,
    chainId: 137,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SNX.svg"
  },
  {
    name: "Uniswap",
    address: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
    symbol: "UNI",
    decimals: 18,
    chainId: 137,
    logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
  },
  {
    name: "Wrapped BTC",
    address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    symbol: "WBTC",
    decimals: 8,
    chainId: 137,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png"
  },
  {
    chainId: 137,
    address: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    _scan: "https://polygonscan.com/token/0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    name: "Qi Dao",
    symbol: "QI",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/QI.svg"
  },
  {
    chainId: 137,
    address: "0xbbba073c31bf03b8acf7c28ef0738decf3695683",
    _scan: "https://polygonscan.com/token/0xbbba073c31bf03b8acf7c28ef0738decf3695683",
    decimals: 18,
    name: "The SandBox",
    symbol: "Sand",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/6210.png"
  },
  {
    chainId: 137,
    address: "0x013f9c3fac3e2759d7e90aca4f9540f75194a0d7",
    _scan: "https://polygonscan.com/token/0x013f9c3fac3e2759d7e90aca4f9540f75194a0d7",
    decimals: 18,
    name: "Neutrino USD",
    symbol: "USDN",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/5068.png"
  },
  {
    chainId: 137,
    address: "0x2e1ad108ff1d8c782fcbbb89aad783ac49586756",
    _scan: "https://polygonscan.com/token/0x2e1ad108ff1d8c782fcbbb89aad783ac49586756",
    decimals: 18,
    name: "TrueUSD",
    symbol: "TUSD",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2563.png"
  },
  {
    chainId: 137,
    address: "0x5fe2b58c013d7601147dcdd68c143a77499f5531",
    _scan: "https://polygonscan.com/token/0x5fe2b58c013d7601147dcdd68c143a77499f5531",
    decimals: 18,
    name: "The Graph",
    symbol: "GRT",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GRT.png"
  },
  {
    chainId: 137,
    address: "0x3cef98bb43d732e2f285ee605a8158cde967d219",
    _scan: "https://polygonscan.com/token/0x3cef98bb43d732e2f285ee605a8158cde967d219",
    decimals: 18,
    name: "Basic Attention",
    symbol: "BAT",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/BAT.svg"
  },
  {
    chainId: 137,
    address: "0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f",
    _scan: "https://polygonscan.com/token/0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f",
    decimals: 18,
    name: "1inch",
    symbol: "1INCH",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/1INCH.png"
  },
  {
    chainId: 137,
    address: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    _scan: "https://polygonscan.com/token/0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    decimals: 18,
    name: "Sushi",
    symbol: "SUSHI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SUSHI.svg"
  },
  {
    chainId: 137,
    address: "0xB46E0ae620EFd98516f49bb00263317096C114b2",
    _scan: "https://polygonscan.com/token/0xB46E0ae620EFd98516f49bb00263317096C114b2",
    decimals: 18,
    name: "Theta Token",
    symbol: "THETA",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2416.png"
  },
  {
    chainId: 137,
    address: "0x6f7C932e7684666C9fd1d44527765433e01fF61d",
    _scan: "https://polygonscan.com/token/0x6f7C932e7684666C9fd1d44527765433e01fF61d",
    decimals: 18,
    name: "Maker",
    symbol: "MKR",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg"
  },
  {
    chainId: 137,
    address: "0x6F3B3286fd86d8b47EC737CEB3D0D354cc657B3e",
    _scan: "https://polygonscan.com/token/0x6F3B3286fd86d8b47EC737CEB3D0D354cc657B3e",
    decimals: 18,
    name: "Paxos Standard",
    symbol: "PAX",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/3330.png"
  },
  {
    chainId: 137,
    address: "0xFAD65Eb62a97fF5Ed91B23aFD039956aaCa6e93b",
    _scan: "https://polygonscan.com/token/0xFAD65Eb62a97fF5Ed91B23aFD039956aaCa6e93b",
    decimals: 18,
    name: "HuobiToken",
    symbol: "HT",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2502.png"
  },
  {
    chainId: 137,
    address: "0xFFA4D863C96e743A2e1513824EA006B8D0353C57",
    _scan: "https://polygonscan.com/token/0xFFA4D863C96e743A2e1513824EA006B8D0353C57",
    decimals: 18,
    name: "Decentralized USD",
    symbol: "USDD",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/USDD.svg"
  },
  {
    chainId: 137,
    address: "0x0621d647cecbFb64b79E44302c1933cB4f27054d",
    _scan: "https://polygonscan.com/token/0x0621d647cecbFb64b79E44302c1933cB4f27054d",
    decimals: 18,
    name: "Amp",
    symbol: "AMP",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6945.png"
  },
  {
    chainId: 137,
    address: "0xf1938Ce12400f9a761084E7A80d37e732a4dA056",
    _scan: "https://polygonscan.com/token/0xf1938Ce12400f9a761084E7A80d37e732a4dA056",
    decimals: 18,
    name: "chiliZ",
    symbol: "CHZ",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/4066.png"
  },
  {
    chainId: 137,
    address: "0x553d3D295e0f695B9228246232eDF400ed3560B5",
    _scan: "https://polygonscan.com/token/0x553d3D295e0f695B9228246232eDF400ed3560B5",
    decimals: 18,
    name: "Paxos Gold",
    symbol: "PAXG",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/4705.png"
  },
  {
    chainId: 137,
    address: "0x84e1670F61347CDaeD56dcc736FB990fBB47ddC1",
    _scan: "https://polygonscan.com/token/0x84e1670F61347CDaeD56dcc736FB990fBB47ddC1",
    decimals: 18,
    name: "LoopringCoin V2",
    symbol: "LRC",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/1934.png"
  },
  {
    chainId: 137,
    address: "0x7eC26842F195c852Fa843bB9f6D8B583a274a157",
    _scan: "https://polygonscan.com/token/0x7eC26842F195c852Fa843bB9f6D8B583a274a157",
    decimals: 18,
    name: "EnjinCoin",
    symbol: "ENJ",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2130.png"
  },
  {
    chainId: 137,
    address: "0x6Bf2eb299E51Fc5DF30Dec81D9445dDe70e3F185",
    _scan: "https://polygonscan.com/token/0x6Bf2eb299E51Fc5DF30Dec81D9445dDe70e3F185",
    decimals: 6,
    name: "Serum",
    symbol: "SRM",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SRM.png"
  },
  {
    chainId: 137,
    address: "0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603",
    _scan: "https://polygonscan.com/token/0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603",
    decimals: 18,
    name: "Wootrade Network",
    symbol: "WOO",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7501.png"
  },
  {
    chainId: 137,
    address: "0x0C51f415cF478f8D08c246a6C6Ee180C5dC3A012",
    _scan: "https://polygonscan.com/token/0x0C51f415cF478f8D08c246a6C6Ee180C5dC3A012",
    decimals: 18,
    name: "HoloToken",
    symbol: "HOT",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2682.png"
  },
  {
    chainId: 137,
    address: "0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8",
    _scan: "https://polygonscan.com/token/0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8",
    decimals: 18,
    name: "Gnosis",
    symbol: "GNO",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/1659.png"
  },
  {
    chainId: 137,
    address: "0x41b3966B4FF7b427969ddf5da3627d6AEAE9a48E",
    _scan: "https://polygonscan.com/token/0x41b3966B4FF7b427969ddf5da3627d6AEAE9a48E",
    decimals: 18,
    name: "Nexo",
    symbol: "NEXO",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2694.png"
  },
  {
    chainId: 137,
    address: "0x7205705771547cF79201111B4bd8aaF29467b9eC",
    _scan: "https://polygonscan.com/token/0x7205705771547cF79201111B4bd8aaF29467b9eC",
    decimals: 18,
    name: "Rocket Pool",
    symbol: "RPL",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/RPL.png"
  },
  {
    chainId: 137,
    address: "0x62414D03084EeB269E18C970a21f45D2967F0170",
    _scan: "https://polygonscan.com/token/0x62414D03084EeB269E18C970a21f45D2967F0170",
    decimals: 18,
    name: "OMG Network",
    symbol: "OMG",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/1808.png"
  },
  {
    chainId: 137,
    address: "0xcB059C5573646047D6d88dDdb87B745C18161d3b",
    _scan: "https://polygonscan.com/token/0xcB059C5573646047D6d88dDdb87B745C18161d3b",
    decimals: 18,
    name: "Polymath",
    symbol: "POLY",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2496.png"
  },
  {
    chainId: 137,
    address: "0x5559Edb74751A0edE9DeA4DC23aeE72cCA6bE3D5",
    _scan: "https://polygonscan.com/token/0x5559Edb74751A0edE9DeA4DC23aeE72cCA6bE3D5",
    decimals: 18,
    name: "ZRX",
    symbol: "ZRX",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ZRX.png"
  },
  {
    chainId: 137,
    address: "0x3962F4A0A0051DccE0be73A7e09cEf5756736712",
    _scan: "https://polygonscan.com/token/0x3962F4A0A0051DccE0be73A7e09cEf5756736712",
    decimals: 18,
    name: "Livepeer Token",
    symbol: "LPT",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/3640.png"
  },
  {
    chainId: 137,
    address: "0x6aBB753C1893194DE4a83c6e8B4EadFc105Fd5f5",
    _scan: "https://polygonscan.com/token/0x6aBB753C1893194DE4a83c6e8B4EadFc105Fd5f5",
    decimals: 18,
    name: "Swipe",
    symbol: "SXP",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/4279.png"
  },
  {
    chainId: 137,
    address: "0x0B220b82F3eA3B7F6d9A1D8ab58930C064A2b5Bf",
    _scan: "https://polygonscan.com/token/0x0B220b82F3eA3B7F6d9A1D8ab58930C064A2b5Bf",
    decimals: 18,
    name: "Golem Network Token",
    symbol: "GLM",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/1455.png"
  },
  {
    chainId: 137,
    address: "0xf8F9efC0db77d8881500bb06FF5D6ABc3070E695",
    _scan: "https://polygonscan.com/token/0xf8F9efC0db77d8881500bb06FF5D6ABc3070E695",
    decimals: 18,
    name: "Synapse",
    symbol: "SYN",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SYN.svg"
  },
  {
    chainId: 137,
    address: "0x67Ce67ec4fCd4aCa0Fcb738dD080b2a21ff69D75",
    _scan: "https://polygonscan.com/token/0x67Ce67ec4fCd4aCa0Fcb738dD080b2a21ff69D75",
    decimals: 8,
    name: "SwissBorg",
    symbol: "CHSB",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/2499.png"
  },
  {
    chainId: 137,
    address: "0xE0339c80fFDE91F3e20494Df88d4206D86024cdF",
    _scan: "https://polygonscan.com/token/0xE0339c80fFDE91F3e20494Df88d4206D86024cdF",
    decimals: 18,
    name: "Dogelon",
    symbol: "ELON",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ELON.png"
  },
  {
    chainId: 137,
    address: "0x3066818837c5e6eD6601bd5a91B0762877A6B731",
    _scan: "https://polygonscan.com/token/0x3066818837c5e6eD6601bd5a91B0762877A6B731",
    decimals: 18,
    name: "UMA Voting Token v1",
    symbol: "UMA",
    logoURI: "https://ethereum-optimism.github.io/logos/UMA.png"
  },
  {
    chainId: 137,
    address: "0xC8A94a3d3D2dabC3C1CaffFFDcA6A7543c3e3e65",
    _scan: "https://polygonscan.com/token/0xC8A94a3d3D2dabC3C1CaffFFDcA6A7543c3e3e65",
    decimals: 2,
    name: "Gemini dollar",
    symbol: "GUSD",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/3306.png"
  },
  {
    chainId: 137,
    address: "0xE3322702BEdaaEd36CdDAb233360B939775ae5f1",
    _scan: "https://polygonscan.com/token/0xE3322702BEdaaEd36CdDAb233360B939775ae5f1",
    decimals: 18,
    name: "Tellor Tributes",
    symbol: "TRB",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/4944.png"
  },
  {
    chainId: 137,
    address: "0xD07A7FAc2857901E4bEC0D89bBDAe764723AAB86",
    _scan: "https://polygonscan.com/token/0xD07A7FAc2857901E4bEC0D89bBDAe764723AAB86",
    decimals: 18,
    name: "USDK",
    symbol: "USDK",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/4064.png"
  },
  {
    chainId: 137,
    address: "0xc26D47d5c33aC71AC5CF9F776D63Ba292a4F7842",
    _scan: "https://polygonscan.com/token/0xc26D47d5c33aC71AC5CF9F776D63Ba292a4F7842",
    decimals: 18,
    name: "Bancor",
    symbol: "BNT",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C/logo.png"
  }
], Pp = [
  {
    chainId: 1,
    address: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
    symbol: "KNC",
    name: "Kyber Network Crystal",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 1,
    address: "0x1068a889fd7151fb2ca9d98d268b0d0cd623fc2f",
    symbol: "GODZ",
    name: "Godzilla Token",
    decimals: 18,
    logoURI: "https://kenhcine.cgv.vn/media/catalog/product/c/g/cgv_godzilla.jpg"
  },
  {
    chainId: 1,
    address: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
    symbol: "KNCL",
    name: "Kyber Network Crystal Legacy",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/KNCL.png"
  },
  {
    chainId: 1,
    address: "0x1F3F677Ecc58F6A1F9e2CF410dF4776a8546b5DE",
    symbol: "VNDC",
    name: "VNDC",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0x27702a26126e0B3702af63Ee09aC4d1A084EF628",
    symbol: "ALEPH",
    name: "Aleph.im",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0x196f4727526eA7FB1e17b2071B3d8eAA38486988",
    symbol: "RSV",
    name: "Reserve",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0x0ccD5DD52Dee42B171a623478e5261C1eaaE092A",
    symbol: "DFM",
    name: "DFM",
    decimals: 18,
    logoURI: "https://mycoldwalletnow.wpcomstaging.com/htdocs/wp-content/mcwhp/img/logo.svg"
  },
  {
    chainId: 1,
    address: "0x6e36556B3ee5Aa28Def2a8EC3DAe30eC2B208739",
    symbol: "BUILD",
    name: "BUILD Finance",
    decimals: 18,
    logoURI: "https://build.finance/images/logo.png"
  },
  {
    chainId: 1,
    address: "0xdB25f211AB05b1c97D595516F45794528a807ad8",
    symbol: "EURS",
    name: "STASIS EURS Token",
    decimals: 2,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0xff56Cc6b1E6dEd347aA0B7676C85AB0B3D08B0FA",
    symbol: "ORBS",
    name: "ORBS",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0xbE9375C6a420D2eEB258962efB95551A5b722803",
    symbol: "STMX",
    name: "StormX",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
    symbol: "ID",
    name: "Everest ID",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0xC57d533c50bC22247d49a368880fb49a1caA39F7",
    symbol: "PTF",
    name: "PowerTrade Fuel Token",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0x0bfEc35a1A3550Deed3F6fC76Dde7FC412729a91",
    symbol: "XKNCA",
    name: "xKNCa",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/13995/thumb/Token-4.png?1613545763"
  },
  {
    chainId: 1,
    address: "0x6710c63432A2De02954fc0f851db07146a6c0312",
    symbol: "MFG",
    name: "Smart MFG",
    decimals: 18,
    logoURI: "https://i.imgur.com/oReNLqf.png"
  },
  {
    chainId: 1,
    address: "0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96",
    symbol: "XSGD",
    name: "XSGD",
    decimals: 6,
    logoURI: "https://assets.website-files.com/600e34cbaf525c42912af8b6/600e34cbaf525c7ad82af99b_xgd-img%20(1).svg"
  },
  {
    chainId: 1,
    address: "0xBCD515D6C5de70D3A31D999A7FA6a299657De294",
    symbol: "RICE",
    name: "RICE",
    decimals: 18,
    logoURI: "https://drive.google.com/uc?export=download&id=16PVXI1Da5P27cywWiyqrcV-Q17u1aXsi"
  },
  {
    chainId: 1,
    address: "0x0f17BC9a994b87b5225cFb6a2Cd4D667ADb4F20B",
    symbol: "jEUR",
    name: "Jarvis Synthetic Euro",
    decimals: 18,
    logoURI: "https://i.imgur.com/92uhfao.png"
  },
  {
    chainId: 1,
    address: "0x7409856CAE628f5d578B285B45669b36E7005283",
    symbol: "jGBP",
    name: "Jarvis Synthetic British Pound",
    decimals: 18,
    logoURI: "https://i.imgur.com/HS7BMfs.png"
  },
  {
    chainId: 1,
    address: "0x53dfEa0A8CC2A2A2e425E1C174Bc162999723ea0",
    symbol: "jCHF",
    name: "Jarvis Synthetic Swiss Franc",
    decimals: 18,
    logoURI: "https://i.imgur.com/Fp31dDB.png"
  },
  {
    chainId: 1,
    address: "0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
    symbol: "XTK",
    name: "xToken",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0xd7DCd9B99787C619b4D57979521258D1A7267ad7",
    symbol: "EVRY",
    name: "Evrynet Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11458.png"
  },
  {
    chainId: 1,
    address: "0x656C00e1BcD96f256F224AD9112FF426Ef053733",
    symbol: "EFI",
    name: "Efinity Token",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 1,
    address: "0x8dB253a1943DdDf1AF9bcF8706ac9A0Ce939d922",
    symbol: "UNB",
    name: "Unbound",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7846.png"
  },
  {
    chainId: 1,
    address: "0x0C0F2b41F758d66bB8e694693B0f9e6FaE726499",
    symbol: "UND",
    name: "Unbound Dollar",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7848.png"
  },
  {
    chainId: 1,
    address: "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
    symbol: "DF",
    name: "dForce",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/DF.svg"
  },
  {
    chainId: 1,
    address: "0x0a5E677a6A24b2F1A2Bf4F3bFfC443231d2fDEc8",
    symbol: "USX",
    name: "dForce USD",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/USX.svg"
  },
  {
    chainId: 1,
    address: "0xb986F3a2d91d3704Dc974A24FB735dCc5E3C1E70",
    symbol: "EUX",
    name: "dForce EUR",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/EUX.svg"
  },
  {
    chainId: 1,
    address: "0x60EF10EDfF6D600cD91caeCA04caED2a2e605Fe5",
    symbol: "MOCHI",
    name: "Mochi Inu",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14315.png"
  },
  {
    chainId: 1,
    address: "0x9F52c8ecbEe10e00D9faaAc5Ee9Ba0fF6550F511",
    symbol: "SIPHER",
    name: "SIPHER",
    decimals: 18,
    logoURI: "https://i.imgur.com/zhZo9Bx.jpg"
  },
  {
    chainId: 1,
    address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
    symbol: "APE",
    name: "ApeCoin",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png"
  },
  {
    chainId: 1,
    address: "0xb620be8a1949aa9532e6a3510132864ef9bc3f82",
    symbol: "LFT",
    name: "Lend Flare Dao Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/19189.png"
  },
  {
    chainId: 1,
    address: "0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098",
    symbol: "SAN",
    name: "Santiment Network Token",
    decimals: 18,
    logoURI: "https://i.imgur.com/OH663J3.jpg"
  },
  {
    chainId: 1,
    address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
    symbol: "wstETH",
    name: "Wrapped stETH (Lido)",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/18834/large/wstETH.png"
  },
  {
    chainId: 1,
    address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    symbol: "stETH",
    name: "stETH (Lido)",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png"
  },
  {
    chainId: 1,
    address: "0xA64c3a85ddc4cD351Eeb7aeceBc6a44A64A76392",
    symbol: "RICE",
    name: "Rice Wallet",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/RICE.png"
  },
  {
    chainId: 1,
    address: "0xCC8Fa225D80b9c7D42F96e9570156c65D6cAAa25",
    symbol: "SLP",
    name: "Smooth Love Potion",
    decimals: 0,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/slp.svg"
  },
  {
    chainId: 1,
    address: "0x9c354503C38481a7A7a51629142963F98eCC12D0",
    symbol: "OGV",
    name: "Origin Dollar Governance",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/26353/large/ogv-200x200.png"
  },
  {
    chainId: 1,
    address: "0xD2af830E8CBdFed6CC11Bab697bB25496ed6FA62",
    symbol: "wOUSD",
    name: "Wrapped OUSD",
    decimals: 18,
    logoURI: "https://www.ousd.com/images/ousd-coin.svg"
  },
  {
    chainId: 1,
    address: "0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86",
    symbol: "OUSD",
    name: "Origin Dollar",
    decimals: 18,
    logoURI: "https://www.ousd.com/images/ousd-coin.svg"
  },
  {
    chainId: 1,
    address: "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
    symbol: "OGN",
    name: "Origin Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5117.png"
  },
  {
    chainId: 1,
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    symbol: "AAVE",
    name: "Aave",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png"
  },
  {
    chainId: 1,
    address: "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
    symbol: "AMP",
    name: "Amp",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6945.png"
  },
  {
    chainId: 1,
    address: "0xba100000625a3754423978a60c9317c58a424e3D",
    symbol: "BAL",
    name: "Balancer",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png"
  },
  {
    chainId: 1,
    address: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
    symbol: "BAND",
    name: "Band Protocol",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4679.png"
  },
  {
    chainId: 1,
    address: "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
    symbol: "BNT",
    name: "Bancor Network Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C/logo.png"
  },
  {
    chainId: 1,
    address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    symbol: "COMP",
    name: "Compound",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png"
  },
  {
    chainId: 1,
    address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    symbol: "CRV",
    name: "Curve DAO Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png"
  },
  {
    chainId: 1,
    address: "0x41e5560054824eA6B0732E656E3Ad64E20e94E45",
    symbol: "CVC",
    name: "Civic",
    decimals: 8,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1816.png"
  },
  {
    chainId: 1,
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
  },
  {
    chainId: 1,
    address: "0x0AbdAce70D3790235af448C88547603b945604ea",
    symbol: "DNT",
    name: "district0x",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1856.png"
  },
  {
    chainId: 1,
    address: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
    symbol: "ENS",
    name: "Ethereum Name Service",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13855.png"
  },
  {
    chainId: 1,
    address: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
    symbol: "GNO",
    name: "Gnosis Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png"
  },
  {
    chainId: 1,
    address: "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
    symbol: "GRT",
    name: "The Graph",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GRT.png"
  },
  {
    chainId: 1,
    address: "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
    symbol: "KEEP",
    name: "Keep Network",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5566.png"
  },
  {
    chainId: 1,
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    symbol: "LINK",
    name: "ChainLink Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png"
  },
  {
    chainId: 1,
    address: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
    symbol: "LRC",
    name: "LoopringCoin V2",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png"
  },
  {
    chainId: 1,
    address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    symbol: "MANA",
    name: "Decentraland",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png"
  },
  {
    chainId: 1,
    address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    symbol: "MATIC",
    name: "Polygon",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
  },
  {
    chainId: 1,
    address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    symbol: "MKR",
    name: "Maker",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg"
  },
  {
    chainId: 1,
    address: "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
    symbol: "MLN",
    name: "Melon",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/605/thumb/melon.png?1547034295"
  },
  {
    chainId: 1,
    address: "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
    symbol: "NMR",
    name: "Numeraire",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671/logo.png"
  },
  {
    chainId: 1,
    address: "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
    symbol: "NU",
    name: "NuCypher",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4761.png"
  },
  {
    chainId: 1,
    address: "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
    symbol: "OXT",
    name: "Orchid",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4575f41308EC1483f3d399aa9a2826d74Da13Deb/logo.png"
  },
  {
    chainId: 1,
    address: "0x408e41876cCCDC0F92210600ef50372656052a38",
    symbol: "REN",
    name: "Republic Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png"
  },
  {
    chainId: 1,
    address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
    symbol: "REP",
    name: "Reputation Augur v1",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1985365e9f78359a9B6AD760e32412f4a445E862/logo.png"
  },
  {
    chainId: 1,
    address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    symbol: "SNX",
    name: "Synthetix Network Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SNX.svg"
  },
  {
    chainId: 1,
    address: "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
    symbol: "STORJ",
    name: "Storj Token",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC/logo.png"
  },
  {
    chainId: 1,
    address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    symbol: "sUSD",
    name: "Synth sUSD",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2927.png"
  },
  {
    chainId: 1,
    address: "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
    symbol: "TBTC",
    name: "tBTC",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5776.png"
  },
  {
    chainId: 1,
    address: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
    symbol: "UMA",
    name: "UMA Voting Token v1",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png"
  },
  {
    chainId: 1,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    symbol: "UNI",
    name: "Uniswap",
    decimals: 18,
    logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
  },
  {
    chainId: 1,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    symbol: "USDC",
    name: "USDCoin",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
  },
  {
    chainId: 1,
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
  },
  {
    chainId: 1,
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png"
  },
  {
    chainId: 1,
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/e82896b2-ebf3-4a5c-bcca-cff1036fd885.png"
  },
  {
    chainId: 1,
    address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    symbol: "YFI",
    name: "yearn finance",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5864.png"
  },
  {
    chainId: 1,
    address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
    symbol: "ZRX",
    name: "0x Protocol Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ZRX.png"
  },
  {
    chainId: 1,
    address: "0xC285B7E09A4584D027E5BC36571785B515898246",
    symbol: "CUSD",
    name: "Coin98 Dollar",
    decimals: 18,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/9c83c438-c1a8-41a6-be94-823dda2f65dc.png"
  },
  {
    chainId: 1,
    address: "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
    symbol: "LEO",
    name: "Bitfinex LEO Token",
    decimals: 18,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/1dc17949-c011-4822-b3f8-6e202cb69cd0.png"
  }
], Op = [
  {
    chainId: 56,
    address: "0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b",
    _scan: "https://bscscan.com/token/0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b",
    symbol: "KNC",
    name: "Kyber Network Crystal",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 56,
    address: "0xda4714fee90ad7de50bc185ccd06b175d23906c1",
    _scan: "https://bscscan.com/address/0xda4714fee90ad7de50bc185ccd06b175d23906c1",
    symbol: "GODZ",
    name: "Godzilla Token",
    decimals: 18,
    logoURI: "https://kenhcine.cgv.vn/media/catalog/product/c/g/cgv_godzilla.jpg"
  },
  {
    chainId: 56,
    address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    _scan: "https://bscscan.com/token/0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    symbol: "ETH",
    name: "Ether",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
  },
  {
    chainId: 56,
    address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    _scan: "https://bscscan.com/token/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    symbol: "USDC",
    name: "USDC",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
  },
  {
    chainId: 56,
    address: "0x55d398326f99059fF775485246999027B3197955",
    _scan: "https://bscscan.com/token/0x55d398326f99059fF775485246999027B3197955",
    symbol: "USDT",
    name: "USDT",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 56,
    address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    _scan: "https://bscscan.com/token/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    symbol: "DAI",
    name: "DAI",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png"
  },
  {
    chainId: 56,
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    _scan: "https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    symbol: "WBNB",
    name: "Wrapped BNB",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/12591/small/binance-coin-logo.png"
  },
  {
    chainId: 56,
    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    _scan: "https://bscscan.com/token/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    symbol: "BUSD",
    name: "BUSD",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9576/small/BUSD.png"
  },
  {
    chainId: 56,
    address: "0x633237C6FA30FAe46Cc5bB22014DA30e50a718cC",
    _scan: "https://bscscan.com/token/0x633237C6FA30FAe46Cc5bB22014DA30e50a718cC",
    symbol: "FIWA",
    name: "FIWA",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/18208/small/defi_warrior.PNG?1630986310"
  },
  {
    chainId: 56,
    address: "0xE8176d414560cFE1Bf82Fd73B986823B89E4F545",
    _scan: "https://bscscan.com/token/0xE8176d414560cFE1Bf82Fd73B986823B89E4F545",
    symbol: "HERO",
    name: "HERO",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/17700/small/stephero.PNG"
  },
  {
    chainId: 56,
    address: "0xD6Cce248263ea1e2b8cB765178C944Fc16Ed0727",
    _scan: "https://bscscan.com/token/0xD6Cce248263ea1e2b8cB765178C944Fc16Ed0727",
    symbol: "CTR",
    name: "Creator Chain",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/10391.png"
  },
  {
    chainId: 56,
    address: "0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623",
    _scan: "https://bscscan.com/token/0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623",
    symbol: "DF",
    name: "dForce",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/DF.svg"
  },
  {
    chainId: 56,
    address: "0xB5102CeE1528Ce2C760893034A4603663495fD72",
    _scan: "https://bscscan.com/token/0xB5102CeE1528Ce2C760893034A4603663495fD72",
    symbol: "USX",
    name: "dForce USD",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/USX.svg"
  },
  {
    chainId: 56,
    address: "0x367c17D19fCd0f7746764455497D63c8e8b2BbA3",
    _scan: "https://bscscan.com/token/0x367c17D19fCd0f7746764455497D63c8e8b2BbA3",
    symbol: "EUX",
    name: "dForce EUR",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/dforce-network/documents/2eea27372fda6a207f60fba4274ad68008d63694/logos/Lending/EUX.svg"
  },
  {
    chainId: 56,
    address: "0x3944aC66b9b9B40a6474022D6962b6cAA001b5E3",
    _scan: "https://bscscan.com/token/0x3944aC66b9b9B40a6474022D6962b6cAA001b5E3",
    symbol: "EBA",
    name: "Elpis Battle",
    decimals: 18,
    logoURI: "https://i.imgur.com/Tzs373u.png"
  },
  {
    chainId: 56,
    address: "0xE81257d932280AE440B17AFc5f07C8A110D21432",
    _scan: "https://bscscan.com/token/0xE81257d932280AE440B17AFc5f07C8A110D21432",
    symbol: "ZUKI",
    name: "ZUKI MOBA",
    decimals: 18,
    logoURI: "https://zukimoba.com/images/logos/logo.png"
  },
  {
    chainId: 56,
    address: "0xe91a8D2c584Ca93C7405F15c22CdFE53C29896E3",
    _scan: "https://bscscan.com/token/0xe91a8D2c584Ca93C7405F15c22CdFE53C29896E3",
    symbol: "DEXT",
    name: "DEXTools",
    decimals: 18,
    logoURI: "https://bscscan.com/token/images/dextools_32.png"
  },
  {
    chainId: 56,
    address: "0xd07e82440A395f3F3551b42dA9210CD1Ef4f8B24",
    _scan: "https://bscscan.com/token/0xd07e82440A395f3F3551b42dA9210CD1Ef4f8B24",
    symbol: "PRL",
    name: "Parallel",
    decimals: 18,
    logoURI: "https://i.imgur.com/99UaEcO.png"
  },
  {
    chainId: 56,
    address: "0xc04a23149efdF9A63697f3Eb60705147e9f07FfD",
    _scan: "https://bscscan.com/token/0xc04a23149efdF9A63697f3Eb60705147e9f07FfD",
    symbol: "GENI",
    name: "GemUni",
    decimals: 18,
    logoURI: "https://i.imgur.com/f5JZgpy.png"
  },
  {
    chainId: 56,
    address: "0x5fdAb5BDbad5277B383B3482D085f4bFef68828C",
    _scan: "https://bscscan.com/token/0x5fdAb5BDbad5277B383B3482D085f4bFef68828C",
    symbol: "DFH",
    name: "DeFiHorse",
    decimals: 18,
    logoURI: "https://i.imgur.com/nQryhVr.jpg"
  },
  {
    chainId: 56,
    address: "0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1",
    _scan: "https://bscscan.com/token/0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1",
    symbol: "GMT",
    name: "STEPN",
    decimals: 8,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png"
  },
  {
    chainId: 56,
    address: "0x301AF3Eff0c904Dc5DdD06FAa808f653474F7FcC",
    _scan: "https://bscscan.com/token/0x301AF3Eff0c904Dc5DdD06FAa808f653474F7FcC",
    symbol: "UNB",
    name: "Unbound",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7846.png"
  },
  {
    chainId: 56,
    address: "0xE7C04392A3a426D532f83cA968Bcc0341E99583D",
    _scan: "https://bscscan.com/token/0xE7C04392A3a426D532f83cA968Bcc0341E99583D",
    symbol: "UND",
    name: "Unbound Dollar",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/128x128/7848.png"
  },
  {
    chainId: 56,
    address: "0x393C44A497706DDE15996BB0C7Bdf691A79De38a",
    _scan: "https://bscscan.com/token/0x393C44A497706DDE15996BB0C7Bdf691A79De38a",
    symbol: "FBL",
    name: "FootballBattle",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/fbl.png"
  },
  {
    chainId: 56,
    address: "0x261C94f2d3CcCAE76f86F6C8F2C93785DD6cE022",
    _scan: "https://bscscan.com/token/0x261C94f2d3CcCAE76f86F6C8F2C93785DD6cE022",
    symbol: "ATH",
    name: "AETHR",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ath.png"
  },
  {
    chainId: 56,
    address: "0xCf909EF9A61dC5b05D46B5490A9f00D51c40Bb28",
    _scan: "https://bscscan.com/token/0xCf909EF9A61dC5b05D46B5490A9f00D51c40Bb28",
    symbol: "RICE",
    name: "Rice Wallet",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/RICE.png"
  },
  {
    chainId: 56,
    address: "0x8717e80EfF08F53A45b4A925009957E14860A8a8",
    _scan: "https://bscscan.com/token/0x8717e80EfF08F53A45b4A925009957E14860A8a8",
    symbol: "BHO",
    name: "BHO Network",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12280.png"
  },
  {
    chainId: 56,
    address: "0x92dA433dA84d58DFe2aade1943349e491Cbd6820",
    _scan: "https://bscscan.com/token/0x92dA433dA84d58DFe2aade1943349e491Cbd6820",
    symbol: "RDR",
    name: "Rise of Defenders",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16051.png"
  },
  {
    chainId: 56,
    address: "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B",
    _scan: "https://bscscan.com/token/0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B",
    symbol: "TRX",
    name: "TRON",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/trx.png"
  },
  {
    chainId: 56,
    address: "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0",
    _scan: "https://bscscan.com/token/0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0",
    symbol: "AXS",
    name: "Axie Infinity Shard",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/axs.png"
  },
  {
    chainId: 56,
    address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
    _scan: "https://bscscan.com/token/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
    symbol: "DOT",
    name: "Polkadot Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/dot.png"
  },
  {
    chainId: 56,
    address: "0x2222227E22102Fe3322098e4CBfE18cFebD57c95",
    _scan: "https://bscscan.com/token/0x2222227E22102Fe3322098e4CBfE18cFebD57c95",
    symbol: "TLM",
    name: "Alien Worlds Trilium",
    decimals: 4,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/tlm.png"
  },
  {
    chainId: 56,
    address: "0xeE89Bd9aF5e72B19B48cac3E51acDe3A09A3AdE3",
    _scan: "https://bscscan.com/token/0xeE89Bd9aF5e72B19B48cac3E51acDe3A09A3AdE3",
    symbol: "TRUSTK",
    name: "Trustkey Wallet",
    decimals: 18,
    logoURI: "https://blog.trustkeys.network/wp-content/uploads/2019/08/cropped-AppIcon_OK_500.png"
  },
  {
    chainId: 56,
    address: "0xDbCcd9131405DD1fE7320090Af337952B9845DFA",
    _scan: "https://bscscan.com/token/0xDbCcd9131405DD1fE7320090Af337952B9845DFA",
    symbol: "BOT",
    name: "Starbots Token (Wormhole)",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/BOT.png"
  },
  {
    chainId: 56,
    address: "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    _scan: "https://bscscan.com/token/0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  }
], Np = [
  {
    chainId: 43114,
    address: "0x39fC9e94Caeacb435842FADeDeCB783589F50f5f",
    _scan: "https://snowtrace.io/token/0x39fC9e94Caeacb435842FADeDeCB783589F50f5f",
    symbol: "KNC",
    name: "Kyber Network Crystal",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 43114,
    address: "0x938fe3788222a74924e062120e7bfac829c719fb",
    _scan: "https://snowtrace.io/token/0x938fe3788222a74924e062120e7bfac829c719fb",
    symbol: "APEIN",
    name: "Ape In",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/18262/small/apein.PNG"
  },
  {
    chainId: 43114,
    address: "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
    _scan: "https://snowtrace.io/token/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
    symbol: "DYP",
    name: "DeFiYieldProtocol",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17/logo.png"
  },
  {
    chainId: 43114,
    address: "0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4",
    _scan: "https://snowtrace.io/token/0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4",
    symbol: "XAVA",
    name: "Avalaunch",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4/logo.png"
  },
  {
    chainId: 43114,
    address: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    _scan: "https://snowtrace.io/token/0x130966628846BFd36ff31a822705796e8cb8C18D",
    symbol: "MIM",
    name: "Magic Internet Money",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/16786/small/mimlogopng.png?1624979612"
  },
  {
    chainId: 43114,
    address: "0x60781C2586D68229fde47564546784ab3fACA982",
    _scan: "https://snowtrace.io/token/0x60781C2586D68229fde47564546784ab3fACA982",
    decimals: 18,
    name: "Pangolin",
    symbol: "PNG",
    logoURI: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x60781C2586D68229fde47564546784ab3fACA982/logo.png"
  },
  {
    chainId: 43114,
    address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    _scan: "https://snowtrace.io/token/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    decimals: 18,
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    logoURI: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png"
  },
  {
    chainId: 43114,
    address: "0xd501281565bf7789224523144Fe5D98e8B28f267",
    _scan: "https://snowtrace.io/token/0xd501281565bf7789224523144Fe5D98e8B28f267",
    decimals: 18,
    name: "1INCH Token",
    symbol: "1INCH.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/1INCH/logo.png"
  },
  {
    chainId: 43114,
    address: "0x63a72806098Bd3D9520cC43356dD78afe5D386D9",
    _scan: "https://snowtrace.io/token/0x63a72806098Bd3D9520cC43356dD78afe5D386D9",
    decimals: 18,
    name: "Aave Token",
    symbol: "AAVE.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/AAVE/logo.png"
  },
  {
    chainId: 43114,
    address: "0x98443B96EA4b0858FDF3219Cd13e98C7A4690588",
    _scan: "https://snowtrace.io/token/0x98443B96EA4b0858FDF3219Cd13e98C7A4690588",
    decimals: 18,
    name: "Basic Attention Token",
    symbol: "BAT.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/BAT/logo.png"
  },
  {
    chainId: 43114,
    address: "0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98",
    _scan: "https://snowtrace.io/token/0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98",
    decimals: 18,
    name: "Binance USD",
    symbol: "BUSD.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/BUSD/logo.png"
  },
  {
    chainId: 43114,
    address: "0xc3048E19E76CB9a3Aa9d77D8C03c29Fc906e2437",
    _scan: "https://snowtrace.io/token/0xc3048E19E76CB9a3Aa9d77D8C03c29Fc906e2437",
    decimals: 18,
    name: "Compound",
    symbol: "COMP.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/COMP/logo.png"
  },
  {
    chainId: 43114,
    address: "0x249848BeCA43aC405b8102Ec90Dd5F22CA513c06",
    _scan: "https://snowtrace.io/token/0x249848BeCA43aC405b8102Ec90Dd5F22CA513c06",
    decimals: 18,
    name: "Curve DAO Token",
    symbol: "CRV.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/CRV/logo.png"
  },
  {
    chainId: 43114,
    address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    _scan: "https://snowtrace.io/token/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    decimals: 18,
    name: "Dai Stablecoin",
    symbol: "DAI.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/DAI/logo.png"
  },
  {
    chainId: 43114,
    address: "0x8a0cAc13c7da965a312f08ea4229c37869e85cB9",
    _scan: "https://snowtrace.io/token/0x8a0cAc13c7da965a312f08ea4229c37869e85cB9",
    decimals: 18,
    name: "Graph Token",
    symbol: "GRT.e",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GRT.png"
  },
  {
    chainId: 43114,
    address: "0x5947BB275c521040051D82396192181b413227A3",
    _scan: "https://snowtrace.io/token/0x5947BB275c521040051D82396192181b413227A3",
    decimals: 18,
    name: "ChainLink Token",
    symbol: "LINK.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/LINK/logo.png"
  },
  {
    chainId: 43114,
    address: "0x88128fd4b259552A9A1D457f435a6527AAb72d42",
    _scan: "https://snowtrace.io/token/0x88128fd4b259552A9A1D457f435a6527AAb72d42",
    decimals: 18,
    name: "Maker",
    symbol: "MKR.e",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg"
  },
  {
    chainId: 43114,
    address: "0xBeC243C995409E6520D7C41E404da5dEba4b209B",
    _scan: "https://snowtrace.io/token/0xBeC243C995409E6520D7C41E404da5dEba4b209B",
    decimals: 18,
    name: "Synthetix Network Token",
    symbol: "SNX.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/SNX/logo.png"
  },
  {
    chainId: 43114,
    address: "0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76",
    _scan: "https://snowtrace.io/token/0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76",
    decimals: 18,
    name: "SushiToken",
    symbol: "SUSHI.e",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SUSHI.svg"
  },
  {
    chainId: 43114,
    address: "0xc7B5D72C836e718cDA8888eaf03707fAef675079",
    _scan: "https://snowtrace.io/token/0xc7B5D72C836e718cDA8888eaf03707fAef675079",
    decimals: 18,
    name: "TrustSwap Token",
    symbol: "SWAP.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/SWAP/logo.png"
  },
  {
    chainId: 43114,
    address: "0x3Bd2B1c7ED8D396dbb98DED3aEbb41350a5b2339",
    _scan: "https://snowtrace.io/token/0x3Bd2B1c7ED8D396dbb98DED3aEbb41350a5b2339",
    decimals: 18,
    name: "UMA Voting Token v1",
    symbol: "UMA.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/UMA/logo.png"
  },
  {
    chainId: 43114,
    address: "0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580",
    _scan: "https://snowtrace.io/token/0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580",
    decimals: 18,
    name: "Uniswap",
    symbol: "UNI.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/UNI/logo.png"
  },
  {
    chainId: 43114,
    address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    _scan: "https://snowtrace.io/token/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    decimals: 6,
    name: "USD Coin",
    symbol: "USDC.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDC/logo.png"
  },
  {
    chainId: 43114,
    address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    _scan: "https://snowtrace.io/token/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    decimals: 6,
    name: "USD Coin",
    symbol: "USDC",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDC/logo.png"
  },
  {
    chainId: 43114,
    address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    _scan: "https://snowtrace.io/token/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    decimals: 6,
    name: "TetherToken",
    symbol: "USDt",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDT/logo.png"
  },
  {
    chainId: 43114,
    address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    _scan: "https://snowtrace.io/token/0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    decimals: 6,
    name: "Tether USD",
    symbol: "USDT.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDT/logo.png"
  },
  {
    chainId: 43114,
    address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
    _scan: "https://snowtrace.io/token/0x50b7545627a5162F82A992c33b87aDc75187B218",
    decimals: 8,
    name: "Wrapped BTC",
    symbol: "WBTC.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/WBTC/logo.png"
  },
  {
    chainId: 43114,
    address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
    _scan: "https://snowtrace.io/token/0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
    decimals: 18,
    name: "Wrapped ETH",
    symbol: "WETH.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/WETH/logo.png"
  },
  {
    chainId: 43114,
    address: "0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc",
    _scan: "https://snowtrace.io/token/0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc",
    decimals: 18,
    name: "yearn.finance",
    symbol: "YFI.e",
    logoURI: "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/YFI/logo.png"
  },
  {
    chainId: 43114,
    address: "0x596fA47043f99A4e0F122243B841E55375cdE0d2",
    _scan: "https://snowtrace.io/token/0x596fA47043f99A4e0F122243B841E55375cdE0d2",
    decimals: 18,
    name: "0x Protocol Token",
    symbol: "ZRX.e",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ZRX.png"
  },
  {
    chainId: 43114,
    address: "0xe19A1684873faB5Fb694CfD06607100A632fF21c",
    _scan: "https://snowtrace.io/token/0xe19A1684873faB5Fb694CfD06607100A632fF21c",
    decimals: 18,
    name: "BavaToken",
    symbol: "BAVA",
    logoURI: "https://i.imgur.com/mAeAIip.jpeg"
  },
  {
    chainId: 43114,
    address: "0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE",
    _scan: "https://snowtrace.io/token/0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE",
    decimals: 18,
    name: "Staked AVAX",
    symbol: "sAVAX",
    logoURI: "https://i.imgur.com/lqxXmU7.png"
  },
  {
    chainId: 43114,
    address: "0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5",
    _scan: "https://snowtrace.io/token/0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5",
    decimals: 18,
    name: "BENQI",
    symbol: "QI",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9288.png"
  },
  {
    chainId: 43114,
    address: "0xb599c3590F42f8F995ECfa0f85D2980B76862fc1",
    _scan: "https://snowtrace.io/token/0xb599c3590F42f8F995ECfa0f85D2980B76862fc1",
    decimals: 6,
    name: "UST (Wormhole)",
    symbol: "UST",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png"
  },
  {
    chainId: 43114,
    address: "0x260Bbf5698121EB85e7a74f2E45E16Ce762EbE11",
    _scan: "https://snowtrace.io/token/0x260Bbf5698121EB85e7a74f2E45E16Ce762EbE11",
    decimals: 6,
    name: "Axelar Wrapped UST",
    symbol: "UST",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png"
  },
  {
    chainId: 43114,
    address: "0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
    _scan: "https://snowtrace.io/token/0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
    decimals: 18,
    name: "Wrapped MEMO",
    symbol: "wMEMO",
    logoURI: "https://snowtrace.io/token/images/wondelandmemo_32.png"
  },
  {
    chainId: 43114,
    address: "0x237917E8a998b37759c8EE2fAa529D60c66c2927",
    _scan: "https://snowtrace.io/token/0x237917E8a998b37759c8EE2fAa529D60c66c2927",
    decimals: 18,
    name: "Sifu",
    symbol: "sifu",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/19205.png"
  },
  {
    chainId: 43114,
    address: "0x63682bDC5f875e9bF69E201550658492C9763F89",
    _scan: "https://snowtrace.io/token/0x63682bDC5f875e9bF69E201550658492C9763F89",
    decimals: 18,
    name: "Betswap.gg",
    symbol: "BSGG",
    logoURI: "https://snowtrace.io/token/images/betswapgg_32.png"
  },
  {
    chainId: 43114,
    address: "0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e",
    _scan: "https://snowtrace.io/token/0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  },
  {
    chainId: 43114,
    address: "0xE7dDa817b449A05bCB55DaeF2B2E8c095aD80993",
    _scan: "https://snowtrace.io/token/0xE7dDa817b449A05bCB55DaeF2B2E8c095aD80993",
    decimals: 18,
    name: "Teragon Managed Vault - Bastion Trading",
    symbol: "TMV-BT",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/TMV-BT.svg"
  },
  {
    chainId: 43114,
    address: "0x62edc0692bd897d2295872a9ffcac5425011c661",
    _scan: "https://snowtrace.io/token/0x62edc0692bd897d2295872a9ffcac5425011c661",
    decimals: 18,
    name: "GMX",
    symbol: "GMX",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GMX.svg"
  },
  {
    chainId: 43114,
    address: "0x111111111111ed1d73f860f57b2798b683f2d325",
    _scan: "https://snowtrace.io/token/0x111111111111ed1d73f860f57b2798b683f2d325",
    decimals: 18,
    name: "YUSD Stablecoin",
    symbol: "YUSD",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/YUSD.png"
  },
  {
    chainId: 43114,
    address: "0x77777777777d4554c39223c354a05825b2e8faa3",
    _scan: "https://snowtrace.io/token/0x77777777777d4554c39223c354a05825b2e8faa3",
    decimals: 18,
    name: "Yeti Finance",
    symbol: "YETI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/YETI.png"
  }
], Lp = [
  {
    name: "Aave",
    symbol: "AAVE",
    address: "0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B",
    _scan: "https://ftmscan.com/token/0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/12645/large/AAVE.png"
  },
  {
    name: "Badger",
    symbol: "BADGER",
    address: "0x753fbc5800a8C8e3Fb6DC6415810d627A387Dfc9",
    _scan: "https://ftmscan.com/token/0x753fbc5800a8C8e3Fb6DC6415810d627A387Dfc9",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/13287/large/badger_dao_logo.jpg"
  },
  {
    name: "Band Protocol",
    symbol: "BAND",
    address: "0x46E7628E8b4350b2716ab470eE0bA1fa9e76c6C5",
    _scan: "https://ftmscan.com/token/0x46E7628E8b4350b2716ab470eE0bA1fa9e76c6C5",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9545/large/band-protocol.png"
  },
  {
    name: "SpookySwap",
    symbol: "BOO",
    address: "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE",
    _scan: "https://ftmscan.com/token/0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9608.png"
  },
  {
    name: "Cover Protocol",
    symbol: "COVER",
    address: "0xB01E8419d842beebf1b70A7b5f7142abbaf7159D",
    _scan: "https://ftmscan.com/token/0xB01E8419d842beebf1b70A7b5f7142abbaf7159D",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/13563/large/1_eWBbDaqpxXqt7WYPSP4qSw.jpeg"
  },
  {
    name: "Cream",
    symbol: "CREAM",
    address: "0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6",
    _scan: "https://ftmscan.com/token/0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/11976/large/Cream.png"
  },
  {
    name: "Curve DAO",
    symbol: "CRV",
    address: "0x1E4F97b9f9F913c46F1632781732927B9019C68b",
    _scan: "https://ftmscan.com/token/0x1E4F97b9f9F913c46F1632781732927B9019C68b",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/12124/large/Curve.png"
  },
  {
    name: "Dai Stablecoin",
    symbol: "DAI",
    address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
    _scan: "https://ftmscan.com/token/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png"
  },
  {
    name: "Frapped USDT",
    symbol: "fUSDT",
    address: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
    _scan: "https://ftmscan.com/token/0x049d68029688eAbF473097a2fC38ef61633A3C7A",
    chainId: 250,
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png"
  },
  {
    name: "Graviton",
    symbol: "GTON",
    address: "0xC1Be9a4D5D45BeeACAE296a7BD5fADBfc14602C4",
    _scan: "https://ftmscan.com/token/0xC1Be9a4D5D45BeeACAE296a7BD5fADBfc14602C4",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/10006.png"
  },
  {
    name: "IceToken",
    symbol: "ICE",
    address: "0xf16e81dce15B08F326220742020379B855B87DF9",
    _scan: "https://ftmscan.com/token/0xf16e81dce15B08F326220742020379B855B87DF9",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9073.png"
  },
  {
    name: "ChainLink",
    symbol: "LINK",
    address: "0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8",
    _scan: "https://ftmscan.com/token/0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png"
  },
  {
    name: "Synthetix Network",
    symbol: "SNX",
    address: "0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc",
    _scan: "https://ftmscan.com/token/0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc",
    chainId: 250,
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SNX.svg"
  },
  {
    name: "Sushi",
    symbol: "SUSHI",
    address: "0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC",
    _scan: "https://ftmscan.com/token/0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC",
    chainId: 250,
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SUSHI.svg"
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    _scan: "https://ftmscan.com/token/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    chainId: 250,
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
  },
  {
    name: "Wrapped Bitcoin",
    symbol: "wBTC",
    address: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
    _scan: "https://ftmscan.com/token/0x321162Cd933E2Be498Cd2267a90534A804051b11",
    chainId: 250,
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
  },
  {
    name: "Wrapped Ether",
    symbol: "wETH",
    address: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
    _scan: "https://ftmscan.com/token/0x74b23882a30290451A17c44f4F05243b6b58C76d",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/279/large/ethereum.png"
  },
  {
    name: "Wrapped FTM",
    symbol: "wFTM",
    address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    _scan: "https://ftmscan.com/token/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/10240.png"
  },
  {
    name: "yearn.finance",
    symbol: "YFI",
    address: "0x29b0Da86e484E1C0029B56e817912d778aC0EC69",
    _scan: "https://ftmscan.com/token/0x29b0Da86e484E1C0029B56e817912d778aC0EC69",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/11849/large/yfi-192x192.png"
  },
  {
    name: "ZooCoin",
    symbol: "ZOO",
    address: "0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56",
    _scan: "https://ftmscan.com/token/0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56",
    chainId: 250,
    decimals: 0,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9007.png"
  },
  {
    name: "Frax Share",
    symbol: "FXS",
    address: "0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62",
    _scan: "https://ftmscan.com/token/0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62",
    chainId: 250,
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FXS.svg"
  },
  {
    name: "MMToken",
    symbol: "MM",
    address: "0xbFaf328Fe059c53D936876141f38089df0D1503D",
    _scan: "https://ftmscan.com/token/0xbFaf328Fe059c53D936876141f38089df0D1503D",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7875.png"
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    address: "0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
    _scan: "https://ftmscan.com/token/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png"
  },
  {
    name: "Woofy",
    symbol: "WOOFY",
    address: "0xD0660cD418a64a1d44E9214ad8e459324D8157f1",
    _scan: "https://ftmscan.com/token/0xD0660cD418a64a1d44E9214ad8e459324D8157f1",
    chainId: 250,
    decimals: 12,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9719.png"
  },
  {
    name: "Anyswap",
    symbol: "ANY",
    address: "0xdDcb3fFD12750B45d32E084887fdf1aABAb34239",
    _scan: "https://ftmscan.com/token/0xdDcb3fFD12750B45d32E084887fdf1aABAb34239",
    chainId: 250,
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/anyswap/Brand-assets/master/logo/c-128-color-2.png"
  },
  {
    name: "Beefy.Finance",
    symbol: "BIFI",
    address: "0xd6070ae98b8069de6B494332d1A1a81B6179D960",
    _scan: "https://ftmscan.com/token/0xd6070ae98b8069de6B494332d1A1a81B6179D960",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/12704/large/token.png"
  },
  {
    name: "TOMB",
    symbol: "TOMB",
    address: "0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7",
    _scan: "https://ftmscan.com/token/0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11495.png"
  },
  {
    name: "TSHARE",
    symbol: "TSHARE",
    address: "0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37",
    _scan: "https://ftmscan.com/token/0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16943.png"
  },
  {
    name: "BOMB",
    symbol: "BOMB",
    address: "0x8503eb4A136bDBeB323E37Aa6e0FA0C772228378",
    _scan: "https://ftmscan.com/token/0x8503eb4A136bDBeB323E37Aa6e0FA0C772228378",
    chainId: 250,
    decimals: 0,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9085.png"
  },
  {
    name: "Boo MirrorWorld",
    symbol: "xBOO",
    address: "0xa48d959AE2E88f1dAA7D5F611E01908106dE7598",
    _scan: "https://ftmscan.com/token/0xa48d959AE2E88f1dAA7D5F611E01908106dE7598",
    chainId: 250,
    decimals: 18,
    logoURI: "https://ftmscan.com/token/images/xBOO_32.png"
  },
  {
    name: "Smart Token",
    symbol: "SMART",
    address: "0x34D33dc8Ac6f1650D94A7E9A972B47044217600b",
    _scan: "https://ftmscan.com/token/0x34D33dc8Ac6f1650D94A7E9A972B47044217600b",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/15540.png"
  },
  {
    name: "aUSD",
    symbol: "aUSD",
    address: "0x41e3dF7f716aB5AF28c1497B354D79342923196a",
    _scan: "https://ftmscan.com/token/0x41e3dF7f716aB5AF28c1497B354D79342923196a",
    chainId: 250,
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/fantom/0x41e3dF7f716aB5AF28c1497B354D79342923196a.png"
  },
  {
    name: "Fantom USD",
    symbol: "fUSD",
    address: "0xAd84341756Bf337f5a0164515b1f6F993D194E1f",
    _scan: "https://ftmscan.com/token/0xAd84341756Bf337f5a0164515b1f6F993D194E1f",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16831.png"
  },
  {
    name: "Magic Internet Money",
    symbol: "MIM",
    address: "0x82f0B8B456c1A451378467398982d4834b6829c1",
    _scan: "https://ftmscan.com/token/0x82f0B8B456c1A451378467398982d4834b6829c1",
    chainId: 250,
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/16786/large/mimlogopng.png"
  },
  {
    name: "ShadeToken",
    symbol: "SHADE",
    address: "0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262",
    _scan: "https://ftmscan.com/token/0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11504.png"
  },
  {
    name: "AtariToken",
    symbol: "ATRI",
    address: "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b",
    _scan: "https://ftmscan.com/token/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b",
    chainId: 250,
    decimals: 0,
    logoURI: "https://assets.coingecko.com/coins/images/12992/large/atari.png"
  },
  {
    name: "Cryptokek.com",
    symbol: "KEK",
    address: "0x627524d78B4fC840C887ffeC90563c7A42b671fD",
    _scan: "https://ftmscan.com/token/0x627524d78B4fC840C887ffeC90563c7A42b671fD",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/8135.png"
  },
  {
    name: "YEL Token",
    symbol: "YEL",
    address: "0xD3b71117E6C1558c1553305b44988cd944e97300",
    _scan: "https://ftmscan.com/token/0xD3b71117E6C1558c1553305b44988cd944e97300",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11301.png"
  },
  {
    name: "Scream",
    symbol: "SCREAM",
    address: "0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475",
    _scan: "https://ftmscan.com/token/0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11497.png"
  },
  {
    name: "Tarot",
    symbol: "TAROT",
    address: "0xC5e2B037D30a390e62180970B3aa4E91868764cD",
    _scan: "https://ftmscan.com/token/0xC5e2B037D30a390e62180970B3aa4E91868764cD",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11409.png"
  },
  {
    name: "BABYBOO",
    symbol: "BABYBOO",
    address: "0x471762A7017A5B1A3e931F1A97aa03Ef1E7F4A73",
    _scan: "https://ftmscan.com/token/0x471762A7017A5B1A3e931F1A97aa03Ef1E7F4A73",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11764.png"
  },
  {
    name: "Death",
    symbol: "Death",
    address: "0xeaF45B62d9d0Bdc1D763baF306af5eDD7C0d7e55",
    _scan: "https://ftmscan.com/token/0xeaF45B62d9d0Bdc1D763baF306af5eDD7C0d7e55",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11994.png"
  },
  {
    name: "SteakToken",
    symbol: "STEAK",
    address: "0x05848B832E872d9eDd84AC5718D58f21fD9c9649",
    _scan: "https://ftmscan.com/token/0x05848B832E872d9eDd84AC5718D58f21fD9c9649",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11774.png"
  },
  {
    name: "Totem Finance",
    symbol: "TOTEM",
    address: "0x31a37aedC0C18AA139e120e1CDC673BbB2063e6f",
    _scan: "https://ftmscan.com/token/0x31a37aedC0C18AA139e120e1CDC673BbB2063e6f",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11684.png"
  },
  {
    name: "OliveCash Token",
    symbol: "fOLIVE",
    address: "0xA9937092c4E2B0277C16802Cc8778D252854688A",
    _scan: "https://ftmscan.com/token/0xA9937092c4E2B0277C16802Cc8778D252854688A",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/10685.png"
  },
  {
    name: "Syfin",
    symbol: "SYF",
    address: "0x1BCF4DC879979C68fA255f731FE8Dcf71970c9bC",
    _scan: "https://ftmscan.com/token/0x1BCF4DC879979C68fA255f731FE8Dcf71970c9bC",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11692.png"
  },
  {
    name: "FTM1337",
    symbol: "ELITE",
    address: "0xf43Cc235E686d7BC513F53Fbffb61F760c3a1882",
    _scan: "https://ftmscan.com/token/0xf43Cc235E686d7BC513F53Fbffb61F760c3a1882",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13436.png"
  },
  {
    name: "Fantom Oasis Token",
    symbol: "FTMO",
    address: "0x9bD0611610A0f5133e4dd1bFdd71C5479Ee77f37",
    _scan: "https://ftmscan.com/token/0x9bD0611610A0f5133e4dd1bFdd71C5479Ee77f37",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11907.png"
  },
  {
    name: "Wootrade Network",
    symbol: "WOO",
    address: "0x6626c47c00F1D87902fc13EECfaC3ed06D5E8D8a",
    _scan: "https://ftmscan.com/token/0x6626c47c00F1D87902fc13EECfaC3ed06D5E8D8a",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7501.png"
  },
  {
    name: "fSWAMP Token",
    symbol: "fSWAMP",
    address: "0x23cBC7C95a13071562af2C4Fb1Efa7a284d0543a",
    _scan: "https://ftmscan.com/token/0x23cBC7C95a13071562af2C4Fb1Efa7a284d0543a",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9082.png"
  },
  {
    name: "Treeb",
    symbol: "TREEB",
    address: "0xc60D7067dfBc6f2caf30523a064f416A5Af52963",
    _scan: "https://ftmscan.com/token/0xc60D7067dfBc6f2caf30523a064f416A5Af52963",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12301.png"
  },
  {
    name: "Morpheus Token",
    symbol: "MORPH",
    address: "0x0789fF5bA37f72ABC4D561D00648acaDC897b32d",
    _scan: "https://ftmscan.com/token/0x0789fF5bA37f72ABC4D561D00648acaDC897b32d",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11896.png"
  },
  {
    name: "Timechain Swap Token",
    symbol: "TCS",
    address: "0xFbfAE0DD49882e503982f8eb4b8B1e464ecA0b91",
    _scan: "https://ftmscan.com/token/0xFbfAE0DD49882e503982f8eb4b8B1e464ecA0b91",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12463.png"
  },
  {
    name: "FANG Token",
    symbol: "FANG",
    address: "0x49894fCC07233957c35462cfC3418Ef0CC26129f",
    _scan: "https://ftmscan.com/token/0x49894fCC07233957c35462cfC3418Ef0CC26129f",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12671.png"
  },
  {
    name: "Liquid Driver",
    symbol: "LQDR",
    address: "0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9",
    _scan: "https://ftmscan.com/token/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13246.png"
  },
  {
    name: "Geist.Finance Protocol Token",
    symbol: "GEIST",
    address: "0xd8321AA83Fb0a4ECd6348D4577431310A6E0814d",
    _scan: "https://ftmscan.com/token/0xd8321AA83Fb0a4ECd6348D4577431310A6E0814d",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12576.png"
  },
  {
    name: "Cougar Token",
    symbol: "CGS",
    address: "0x5a2e451Fb1b46FDE7718315661013ae1aE68e28C",
    _scan: "https://ftmscan.com/token/0x5a2e451Fb1b46FDE7718315661013ae1aE68e28C",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13106.png"
  },
  {
    name: "Spell Token",
    symbol: "SPELL",
    address: "0x468003B688943977e6130F4F68F23aad939a1040",
    _scan: "https://ftmscan.com/token/0x468003B688943977e6130F4F68F23aad939a1040",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11289.png"
  },
  {
    name: "CoffinDollar",
    symbol: "CoUSD",
    address: "0x0DeF844ED26409C5C46dda124ec28fb064D90D27",
    _scan: "https://ftmscan.com/token/0x0DeF844ED26409C5C46dda124ec28fb064D90D27",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12766.png"
  },
  {
    name: "CoffinToken",
    symbol: "COFFIN",
    address: "0x593Ab53baFfaF1E821845cf7080428366F030a9c",
    _scan: "https://ftmscan.com/token/0x593Ab53baFfaF1E821845cf7080428366F030a9c",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12765.png"
  },
  {
    name: "Font",
    symbol: "FONT",
    address: "0xbbc4A8d076F4B1888fec42581B6fc58d242CF2D5",
    _scan: "https://ftmscan.com/token/0xbbc4A8d076F4B1888fec42581B6fc58d242CF2D5",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/8601.png"
  },
  {
    name: "CyberFi Token",
    symbol: "CFi",
    address: "0x6a545f9c64d8f7B957D8D2e6410B52095A9E6c29",
    _scan: "https://ftmscan.com/token/0x6a545f9c64d8f7B957D8D2e6410B52095A9E6c29",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7699.png",
    bridgeId: "cfiv3",
    nativeChain: 1
  },
  {
    name: "DarkMatter",
    symbol: "DMD",
    address: "0x90E892FED501ae00596448aECF998C88816e5C0F",
    _scan: "https://ftmscan.com/token/0x90E892FED501ae00596448aECF998C88816e5C0F",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12675.png",
    bridgeId: ""
  },
  {
    name: "FTM-Meso",
    symbol: "MESO",
    address: "0x4D9361A86D038C8adA3db2457608e2275B3E08d4",
    _scan: "https://ftmscan.com/token/0x4D9361A86D038C8adA3db2457608e2275B3E08d4",
    chainId: 250,
    decimals: 18,
    logoURI: "https://ftmscan.com/token/images/mesofinance_32.png",
    bridgeId: ""
  },
  {
    name: "Dola USD Stablecoin",
    symbol: "DOLA",
    address: "0x3129662808bEC728a27Ab6a6b9AFd3cBacA8A43c",
    _scan: "https://ftmscan.com/token/0x3129662808bEC728a27Ab6a6b9AFd3cBacA8A43c",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/19191.png",
    bridgeId: "dolav5",
    nativeChain: 1
  },
  {
    name: "TravaFinance Token",
    symbol: "TRAVA",
    address: "0x477a9D5dF9bedA06F6b021136a2efe7BE242fCC9",
    _scan: "https://ftmscan.com/token/0x477a9D5dF9bedA06F6b021136a2efe7BE242fCC9",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11209.png",
    bridgeId: ""
  },
  {
    name: "summitdefi.com",
    symbol: "SUMMIT",
    address: "0x8F9bCCB6Dd999148Da1808aC290F2274b13D7994",
    _scan: "https://ftmscan.com/token/0x8F9bCCB6Dd999148Da1808aC290F2274b13D7994",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13123.png"
  },
  {
    name: "Yoshi.exchange",
    symbol: "YOSHI",
    address: "0x3dc57B391262e3aAe37a08D91241f9bA9d58b570",
    _scan: "https://ftmscan.com/token/0x3dc57B391262e3aAe37a08D91241f9bA9d58b570",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13118.png"
  },
  {
    name: "Fantom Doge",
    symbol: "RIP",
    address: "0x1D43697D67cB5D0436cc38d583Ca473a1bFEbC7a",
    _scan: "https://ftmscan.com/token/0x1D43697D67cB5D0436cc38d583Ca473a1bFEbC7a",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11787.png"
  },
  {
    name: "Metti Inu",
    symbol: "Metti",
    address: "0x42aE8468A1FDDB965d420BD71368a87Ec3a2B4b8",
    _scan: "https://ftmscan.com/token/0x42aE8468A1FDDB965d420BD71368a87Ec3a2B4b8",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13430.png"
  },
  {
    name: "ScareCrow",
    symbol: "SCARE",
    address: "0x46e1Ee17f51c52661D04238F1700C547dE3B84A1",
    _scan: "https://ftmscan.com/token/0x46e1Ee17f51c52661D04238F1700C547dE3B84A1",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12827.png"
  },
  {
    name: "Exodia",
    symbol: "EXOD",
    address: "0x3b57f3FeAaF1e8254ec680275Ee6E7727C7413c7",
    _scan: "https://ftmscan.com/token/0x3b57f3FeAaF1e8254ec680275Ee6E7727C7413c7",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13642.png"
  },
  {
    name: "FantomStarter",
    symbol: "FS",
    address: "0xC758295Cd1A564cdb020a78a681a838CF8e0627D",
    _scan: "https://ftmscan.com/token/0xC758295Cd1A564cdb020a78a681a838CF8e0627D",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13237.png",
    bridgeId: ""
  },
  {
    name: "ArtWallet",
    symbol: "1ART",
    address: "0xD3c325848D7c6E29b574Cb0789998b2ff901f17E",
    _scan: "https://ftmscan.com/token/0xD3c325848D7c6E29b574Cb0789998b2ff901f17E",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12929.png",
    bridgeId: ""
  },
  {
    name: "Bouje Token",
    symbol: "BOUJE",
    address: "0x37F70aa9fEfc8971117BD53A1Ddc2372aa7Eec41",
    _scan: "https://ftmscan.com/token/0x37F70aa9fEfc8971117BD53A1Ddc2372aa7Eec41",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13522.png",
    bridgeId: ""
  },
  {
    name: "Feeder.finance",
    symbol: "FEED",
    address: "0x5d5530eb3147152FE78d5C4bFEeDe054c8d1442A",
    _scan: "https://ftmscan.com/token/0x5d5530eb3147152FE78d5C4bFEeDe054c8d1442A",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14257.png",
    bridgeId: ""
  },
  {
    name: "JulSwap",
    symbol: "JulD",
    address: "0xEFF6FcfBc2383857Dd66ddf57effFC00d58b7d9D",
    _scan: "https://ftmscan.com/token/0xEFF6FcfBc2383857Dd66ddf57effFC00d58b7d9D",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/8164.png",
    bridgeId: ""
  },
  {
    name: "Hector",
    symbol: "HEC",
    address: "0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
    _scan: "https://ftmscan.com/token/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13881.png",
    bridgeId: ""
  },
  {
    name: "Spartacus",
    symbol: "SPA",
    address: "0x5602df4A94eB6C680190ACCFA2A475621E0ddBdc",
    _scan: "https://ftmscan.com/token/0x5602df4A94eB6C680190ACCFA2A475621E0ddBdc",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13748.png",
    bridgeId: ""
  },
  {
    name: "Fantohm",
    symbol: "FHM",
    address: "0xfa1FBb8Ef55A4855E5688C0eE13aC3f202486286",
    _scan: "https://ftmscan.com/token/0xfa1FBb8Ef55A4855E5688C0eE13aC3f202486286",
    chainId: 250,
    decimals: 9,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14063.png",
    bridgeId: ""
  },
  {
    name: "SoulPower",
    symbol: "SOUL",
    address: "0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07",
    _scan: "https://ftmscan.com/token/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13342.png",
    bridgeId: ""
  },
  {
    name: "TrueUSD",
    symbol: "TUSD",
    address: "0x9879aBDea01a879644185341F7aF7d8343556B7a",
    _scan: "https://ftmscan.com/token/0x9879aBDea01a879644185341F7aF7d8343556B7a",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2563.png",
    bridgeId: ""
  },
  {
    name: "moda",
    symbol: "MODA",
    address: "0x6496994241804D7fE2b032901931e03bCD82301F",
    _scan: "https://ftmscan.com/token/0x6496994241804D7fE2b032901931e03bCD82301F",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/15747.png",
    bridgeId: ""
  },
  {
    name: "Raven",
    symbol: "RAVEN",
    address: "0x175cbf2809acFD7521fDd387d65aac523Fe4076F",
    _scan: "https://ftmscan.com/token/0x175cbf2809acFD7521fDd387d65aac523Fe4076F",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14919.png",
    bridgeId: ""
  },
  {
    name: "PaintSwap",
    symbol: "BRUSH",
    address: "0x85dec8c4B2680793661bCA91a8F129607571863d",
    _scan: "https://ftmscan.com/token/0x85dec8c4B2680793661bCA91a8F129607571863d",
    chainId: 250,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13229.png"
  },
  {
    name: "PILLS Token",
    symbol: "PILLS",
    address: "0xB66b5D38E183De42F21e92aBcAF3c712dd5d6286",
    _scan: "https://ftmscan.com/token/0xB66b5D38E183De42F21e92aBcAF3c712dd5d6286",
    chainId: 250,
    decimals: 18,
    logoURI: "https://ftmscan.com/token/images/morpheusfinftm_32.png"
  },
  {
    chainId: 250,
    address: "0xfB98B335551a418cD0737375a2ea0ded62Ea213b",
    _scan: "https://ftmscan.com/token/0xfB98B335551a418cD0737375a2ea0ded62Ea213b",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  }
], jp = [
  {
    chainId: 25,
    address: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
    _scan: "https://cronoscan.com/token/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
    symbol: "USDC",
    name: "USDC",
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
  },
  {
    chainId: 25,
    address: "0x66e428c3f67a68878562e79A0234c1F83c208770",
    _scan: "https://cronoscan.com/token/0x66e428c3f67a68878562e79A0234c1F83c208770",
    symbol: "USDT",
    name: "USDT",
    decimals: 6,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 25,
    address: "0xF2001B145b43032AAF5Ee2884e456CCd805F677D",
    _scan: "https://cronoscan.com/token/0xF2001B145b43032AAF5Ee2884e456CCd805F677D",
    symbol: "DAI",
    name: "DAI",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png"
  },
  {
    chainId: 25,
    address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
    _scan: "https://cronoscan.com/token/0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
    symbol: "WCRO",
    name: "Wrapped CRO",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14532.png"
  },
  {
    chainId: 25,
    address: "0xe6801928061CDbE32AC5AD0634427E140EFd05F9",
    _scan: "https://cronoscan.com/token/0xe6801928061CDbE32AC5AD0634427E140EFd05F9",
    symbol: "BIFI",
    name: "Beefy.finance",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/12704/small/token.png"
  },
  {
    chainId: 25,
    address: "0xe44Fd7fCb2b1581822D0c862B68222998a0c299a",
    _scan: "https://cronoscan.com/token/0xe44Fd7fCb2b1581822D0c862B68222998a0c299a",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
  },
  {
    chainId: 25,
    address: "0xbED48612BC69fA1CaB67052b42a95FB30C1bcFee",
    _scan: "https://cronoscan.com/token/0xbED48612BC69fA1CaB67052b42a95FB30C1bcFee",
    symbol: "SHIB",
    name: "Shiba Inu",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/11939/small/shiba.png"
  },
  {
    chainId: 25,
    address: "0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03",
    _scan: "https://cronoscan.com/token/0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03",
    symbol: "VVS",
    name: "VVS Token",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/20210/small/8glAYOTM_400x400.jpg"
  },
  {
    chainId: 25,
    address: "0x062E66477Faf219F25D27dCED647BF57C3107d52",
    _scan: "https://cronoscan.com/token/0x062E66477Faf219F25D27dCED647BF57C3107d52",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
  },
  {
    chainId: 25,
    address: "0xadbd1231fb360047525BEdF962581F3eee7b49fe",
    _scan: "https://cronoscan.com/token/0xadbd1231fb360047525BEdF962581F3eee7b49fe",
    symbol: "CRONA",
    name: "CronaSwap Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/14625.png"
  },
  {
    chainId: 25,
    address: "0x97749c9B61F878a880DfE312d2594AE07AEd7656",
    _scan: "https://cronoscan.com/token/0x97749c9B61F878a880DfE312d2594AE07AEd7656",
    symbol: "MMF",
    name: "Mad Meerkat Finance",
    decimals: 18,
    logoURI: "https://mm.finance//images/tokens/0x97749c9B61F878a880DfE312d2594AE07AEd7656.svg"
  },
  {
    chainId: 25,
    address: "0xB888d8Dd1733d72681b30c00ee76BDE93ae7aa93",
    _scan: "https://cronoscan.com/token/0xB888d8Dd1733d72681b30c00ee76BDE93ae7aa93",
    symbol: "ATOM",
    name: "ATOM",
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png"
  },
  {
    chainId: 25,
    address: "0xCbDE0E17d14F49e10a10302a32d17AE88a7Ecb8B",
    _scan: "https://cronoscan.com/token/0xCbDE0E17d14F49e10a10302a32d17AE88a7Ecb8B",
    symbol: "CRYSTL",
    name: "Crystal Token",
    decimals: 18,
    logoURI: "https://www.crystl.finance/images/landing/shareholder.svg"
  },
  {
    chainId: 25,
    address: "0x83b2AC8642aE46FC2823Bc959fFEB3c1742c48B5",
    _scan: "https://cronoscan.com/token/0x83b2AC8642aE46FC2823Bc959fFEB3c1742c48B5",
    symbol: "DARK",
    name: "DarkCrypto",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/DARK.svg"
  },
  {
    chainId: 25,
    address: "0x10C9284E6094b71D3CE4E38B8bFfc668199da677",
    _scan: "https://cronoscan.com/token/0x10C9284E6094b71D3CE4E38B8bFfc668199da677",
    symbol: "MIMAS",
    name: "Mimas Finance",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MIMAS.png"
  },
  {
    chainId: 25,
    address: "0x2Ae35c8E3D4bD57e8898FF7cd2bBff87166EF8cb",
    _scan: "https://cronoscan.com/token/0x2Ae35c8E3D4bD57e8898FF7cd2bBff87166EF8cb",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  }
], Wp = [
  {
    chainId: 42161,
    address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    _scan: "https://arbiscan.io/token/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    symbol: "USDC",
    name: "USDC",
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
  },
  {
    chainId: 42161,
    address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    _scan: "https://arbiscan.io/token/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    symbol: "USDT",
    name: "USDT",
    decimals: 6,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 42161,
    address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    _scan: "https://arbiscan.io/token/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    symbol: "DAI",
    name: "DAI",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png"
  },
  {
    chainId: 42161,
    address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    _scan: "https://arbiscan.io/token/0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
  },
  {
    chainId: 42161,
    address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
    _scan: "https://arbiscan.io/token/0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
    symbol: "WBTC",
    name: "WBTC",
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
  },
  {
    chainId: 42161,
    address: "0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A",
    _scan: "https://arbiscan.io/token/0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A",
    symbol: "MIM",
    name: "Magic Internet Money",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/162.png"
  },
  {
    chainId: 42161,
    address: "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    _scan: "https://arbiscan.io/token/0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  },
  {
    chainId: 42161,
    address: "0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7",
    _scan: "https://arbiscan.io/token/0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7",
    decimals: 18,
    name: "Frax Share",
    symbol: "FXS",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FXS.svg"
  },
  {
    chainId: 42161,
    address: "0x080f6aed32fc474dd5717105dba5ea57268f46eb",
    _scan: "https://arbiscan.io/token/0x080f6aed32fc474dd5717105dba5ea57268f46eb",
    decimals: 18,
    name: "Synapse",
    symbol: "SYN",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SYN.svg"
  },
  {
    chainId: 42161,
    address: "0x319f865b287fcc10b30d8ce6144e8b6d1b476999",
    _scan: "https://arbiscan.io/token/0x319f865b287fcc10b30d8ce6144e8b6d1b476999",
    decimals: 18,
    name: "Cartesi",
    symbol: "CTSI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/CTSI.png"
  },
  {
    chainId: 42161,
    address: "0x9fb9a33956351cf4fa040f65a13b835a3c8764e3",
    _scan: "https://arbiscan.io/token/0x9fb9a33956351cf4fa040f65a13b835a3c8764e3",
    decimals: 18,
    name: "Multchain",
    symbol: "MULTI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MULTI.png"
  },
  {
    chainId: 42161,
    address: "0x6694340fc020c5e6b96567843da2df01b2ce1eb6",
    _scan: "https://arbiscan.io/token/0x6694340fc020c5e6b96567843da2df01b2ce1eb6",
    decimals: 18,
    name: "Stargate Finance",
    symbol: "STG",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/STG.svg"
  },
  {
    chainId: 42161,
    address: "0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae",
    _scan: "https://arbiscan.io/token/0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae",
    decimals: 18,
    name: "Beefy.Finance",
    symbol: "BIFI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/BIFI.png"
  },
  {
    chainId: 42161,
    address: "0x68ead55c258d6fa5e46d67fc90f53211eab885be",
    _scan: "https://arbiscan.io/token/0x68ead55c258d6fa5e46d67fc90f53211eab885be",
    decimals: 18,
    name: "Popcorn",
    symbol: "POP",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/POP.png"
  },
  {
    chainId: 42161,
    address: "0xd74f5255d557944cf7dd0e45ff521520002d5748",
    _scan: "https://arbiscan.io/token/0xd74f5255d557944cf7dd0e45ff521520002d5748",
    decimals: 18,
    name: "Sperax USD",
    symbol: "USDS",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/USDS.svg"
  },
  {
    chainId: 42161,
    address: "0xee9801669c6138e84bd50deb500827b776777d28",
    _scan: "https://arbiscan.io/token/0xee9801669c6138e84bd50deb500827b776777d28",
    decimals: 18,
    name: "O3 Swap",
    symbol: "O3",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/O3.png"
  },
  {
    chainId: 42161,
    address: "0x21e60ee73f17ac0a411ae5d690f908c3ed66fe12",
    _scan: "https://arbiscan.io/token/0x21e60ee73f17ac0a411ae5d690f908c3ed66fe12",
    decimals: 18,
    name: "Deri Protocol",
    symbol: "DERI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/DERI.svg"
  },
  {
    chainId: 42161,
    address: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    _scan: "https://arbiscan.io/token/0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    decimals: 18,
    name: "GMX",
    symbol: "GMX",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GMX.svg"
  },
  {
    chainId: 42161,
    address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    decimals: 18,
    name: "ARB",
    symbol: "ARB",
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/8ba76036-74a3-4471-b3b3-69ea317b0bae.png"
  }
], Hp = [
  {
    chainId: 199,
    address: "0xCa424b845497f7204D9301bd13Ff87C0E2e86FCF",
    _scan: "https://bttcscan.com/token/0xCa424b845497f7204D9301bd13Ff87C0E2e86FCF",
    symbol: "USDC_b",
    name: "USD Coin_BSC",
    decimals: 18,
    logoURI: "https://coin.top/production/upload/logo/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz81.png"
  },
  {
    chainId: 199,
    address: "0x9B5F27f6ea9bBD753ce3793a07CbA3C74644330d",
    _scan: "https://bttcscan.com/token/0x9B5F27f6ea9bBD753ce3793a07CbA3C74644330d",
    symbol: "USDT_b",
    name: "Tether USD_BSC",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 199,
    address: "0xE887512ab8BC60BcC9224e1c3b5Be68E26048B8B",
    _scan: "https://bttcscan.com/token/0xE887512ab8BC60BcC9224e1c3b5Be68E26048B8B",
    symbol: "USDT_e",
    name: "Tether USD_Ethereum",
    decimals: 6,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 199,
    address: "0xe7dC549AE8DB61BDE71F22097BEcc8dB542cA100",
    _scan: "https://bttcscan.com/token/0xe7dC549AE8DB61BDE71F22097BEcc8dB542cA100",
    symbol: "DAI_e",
    name: "Dai Stablecoin_Ethereum",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3/logo.png"
  },
  {
    chainId: 199,
    address: "0x8D193c6efa90BCFf940A98785d1Ce9D093d3DC8A",
    _scan: "https://bttcscan.com/token/0x8D193c6efa90BCFf940A98785d1Ce9D093d3DC8A",
    symbol: "WBTT",
    name: "Wrapped BTT",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/1002000.png"
  },
  {
    chainId: 199,
    address: "0xA20dfb01DCa223c0E52B0D4991D4aFA7E08e3a50",
    _scan: "https://bttcscan.com/token/0xA20dfb01DCa223c0E52B0D4991D4aFA7E08e3a50",
    symbol: "ETH_b",
    name: "Ethereum Token_BSC",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png"
  },
  {
    chainId: 199,
    address: "0x185a4091027E2dB459a2433F85f894dC3013aeB5",
    _scan: "https://bttcscan.com/token/0x185a4091027E2dB459a2433F85f894dC3013aeB5",
    symbol: "BNB",
    decimals: 18,
    name: "Binance Coin",
    logoURI: "https://coin.top/production/upload/logo/TDgkC3ZZBgaDqkteSgx9F14rPfqRgktyzh.jpeg"
  },
  {
    chainId: 199,
    address: "0xEdf53026aeA60f8F75FcA25f8830b7e2d6200662",
    _scan: "https://bttcscan.com/token/0xEdf53026aeA60f8F75FcA25f8830b7e2d6200662",
    symbol: "TRX",
    decimals: 6,
    name: "TRON",
    logoURI: "https://coin.top/production/upload/logo/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR.png"
  },
  {
    chainId: 199,
    address: "0x5d9a3948a688aa40b5F2e1Ab58B80872FfF038A7",
    _scan: "https://bttcscan.com/token/0x5d9a3948a688aa40b5F2e1Ab58B80872FfF038A7",
    symbol: "XMN",
    name: "Metronotes",
    decimals: 9,
    logoURI: "http://images.bt.io/0x5d9a3948a688aa40b5f2e1ab58b80872fff038a7.png"
  },
  {
    chainId: 199,
    address: "0xA66Bb5755391C0202353dC1b708d13A97444e5B8",
    _scan: "https://bttcscan.com/token/0xA66Bb5755391C0202353dC1b708d13A97444e5B8",
    symbol: "TET",
    decimals: 18,
    name: "Tetcoin",
    logoURI: "http://images.bt.io/0xa66bb5755391c0202353dc1b708d13a97444e5b8.png"
  },
  {
    chainId: 199,
    address: "0xdB28719F7f938507dBfe4f0eAe55668903D34a15",
    _scan: "https://bttcscan.com/token/0xdB28719F7f938507dBfe4f0eAe55668903D34a15",
    symbol: "USDT_t",
    decimals: 6,
    name: "Tether USD_TRON",
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 199,
    address: "0xcBb9EDF6775e39748Ea6483A7fa6a385Cd7E9a4E",
    _scan: "https://bttcscan.com/token/0xcBb9EDF6775e39748Ea6483A7fa6a385Cd7E9a4E",
    symbol: "BTT_b",
    name: "BitTorrent_BSC",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/1002000.png"
  },
  {
    chainId: 199,
    address: "0x65676055E58b02E61272Cedec6E5C6D56BADfb86",
    _scan: "https://bttcscan.com/token/0x65676055E58b02E61272Cedec6E5C6D56BADfb86",
    symbol: "BTT_e",
    name: "BitTorrent_Ethereum",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/1002000.png"
  },
  {
    chainId: 199,
    address: "0xb09349DDd39454d539EDC17Fc68eCC50E8e13377",
    _scan: "https://bttcscan.com/token/0xb09349DDd39454d539EDC17Fc68eCC50E8e13377",
    symbol: "HYBERBTT",
    name: "HYBERBTT",
    decimals: 18,
    logoURI: "https://coin.top/production/logo/1002000.png"
  },
  {
    chainId: 199,
    address: "0x935faA2FCec6Ab81265B301a30467Bbc804b43d3",
    _scan: "https://bttcscan.com/token/0x935faA2FCec6Ab81265B301a30467Bbc804b43d3",
    symbol: "USDC_t",
    name: "USD Coin_TRON",
    decimals: 6,
    logoURI: "https://bttcscan.com/token/images/usdcbttc_32.png"
  },
  {
    chainId: 199,
    address: "0x9888221fE6B5A2ad4cE7266c7826D2AD74D40CcF",
    _scan: "https://bttcscan.com/token/0x9888221fE6B5A2ad4cE7266c7826D2AD74D40CcF",
    symbol: "WBTC_e",
    name: "Wrapped BTC_Ethereum",
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
  },
  {
    chainId: 199,
    address: "0xE467F79E9869757DD818DfB8535068120F6BcB97",
    _scan: "https://bttcscan.com/token/0xE467F79E9869757DD818DfB8535068120F6BcB97",
    symbol: "KNC_e",
    name: "Kyber Network Crystal v2 - Ethereum",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 199,
    address: "0x18fA72e0EE4C580a129b0CE5bD0694d716C7443E",
    _scan: "https://bttcscan.com/token/0x18fA72e0EE4C580a129b0CE5bD0694d716C7443E",
    symbol: "KNC_b",
    name: "Kyber Network Crystal v2 - BSC",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg"
  },
  {
    chainId: 199,
    address: "0x1249C65AfB11D179FFB3CE7D4eEDd1D9b98AD006",
    _scan: "https://bttcscan.com/token/0x1249C65AfB11D179FFB3CE7D4eEDd1D9b98AD006",
    symbol: "ETH",
    name: "ETH",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png"
  },
  {
    chainId: 199,
    address: "0xAE17940943BA9440540940DB0F1877f101D39e8b",
    _scan: "https://bttcscan.com/token/0xAE17940943BA9440540940DB0F1877f101D39e8b",
    symbol: "USDC_e",
    name: "USD Coin_Ethereum",
    decimals: 6,
    logoURI: "https://coin.top/production/upload/logo/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz81.png"
  },
  {
    chainId: 199,
    address: "0x17F235FD5974318E4E2a5e37919a209f7c37A6d1",
    _scan: "https://bttcscan.com/token/0x17F235FD5974318E4E2a5e37919a209f7c37A6d1",
    symbol: "USDD_t",
    name: "Decentralized USD_TRON",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/USDD.svg"
  }
], zp = [
  {
    chainId: 106,
    address: "0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126",
    _scan: "https://evmexplorer.velas.com/token/0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126",
    symbol: "WVLX",
    name: "Wrapped VLX",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/dmm-interface/9c1efef2dc1c650adeac5ed7a370cad8e064f6be/src/assets/networks/velas-network.png"
  },
  {
    chainId: 106,
    address: "0xc111c29A988AE0C0087D97b33C6E6766808A3BD3",
    _scan: "https://evmexplorer.velas.com/token/0xc111c29A988AE0C0087D97b33C6E6766808A3BD3",
    symbol: "BUSD",
    name: "Multichain BUSD",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png"
  },
  {
    chainId: 106,
    address: "0xaBf26902Fd7B624e0db40D31171eA9ddDf078351",
    _scan: "https://evmexplorer.velas.com/token/0xaBf26902Fd7B624e0db40D31171eA9ddDf078351",
    symbol: "WAG",
    name: "Wagyu",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11354.png"
  },
  {
    chainId: 106,
    address: "0x01445C31581c354b7338AC35693AB2001B50b9aE",
    _scan: "https://evmexplorer.velas.com/token/0x01445C31581c354b7338AC35693AB2001B50b9aE",
    symbol: "USDT",
    name: "Multichain USDT",
    decimals: 6,
    logoURI: "https://coin.top/production/logo/usdtlogo.png"
  },
  {
    chainId: 106,
    address: "0x8d9fB713587174Ee97e91866050c383b5cEE6209",
    _scan: "https://evmexplorer.velas.com/token/0x8d9fB713587174Ee97e91866050c383b5cEE6209",
    symbol: "SCAR",
    name: "Velhalla",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13250.png"
  },
  {
    chainId: 106,
    address: "0x72eB7CA07399Ec402c5b7aa6A65752B6A1Dc0C27",
    _scan: "https://evmexplorer.velas.com/token/0x72eB7CA07399Ec402c5b7aa6A65752B6A1Dc0C27",
    symbol: "ASTRO",
    name: "AstroSwap",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12120.png"
  },
  {
    chainId: 106,
    address: "0x3611Fbfb06ffBcEf9Afb210f6Ace86742e6c14a4",
    _scan: "https://evmexplorer.velas.com/token/0x3611Fbfb06ffBcEf9Afb210f6Ace86742e6c14a4",
    symbol: "ADA",
    name: "Ada Asset",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"
  },
  {
    chainId: 106,
    address: "0x8a74BC8c372bC7f0E9cA3f6Ac0df51BE15aEC47A",
    _scan: "https://evmexplorer.velas.com/token/0x8a74BC8c372bC7f0E9cA3f6Ac0df51BE15aEC47A",
    symbol: "PLSPAD",
    name: "PULSEPAD.io",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12416.png"
  },
  {
    chainId: 106,
    address: "0x6EF5D1aB0642ceF5227465e209f92675008558cA",
    _scan: "https://evmexplorer.velas.com/token/0x6EF5D1aB0642ceF5227465e209f92675008558cA",
    symbol: "VSH",
    name: "VELASSHIBA",
    decimals: 9,
    logoURI: ""
  },
  {
    chainId: 106,
    address: "0xa065e0858417Dfc7abC6f2BD4D0185332475C180",
    _scan: "https://evmexplorer.velas.com/token/0xa065e0858417Dfc7abC6f2BD4D0185332475C180",
    symbol: "VLXPAD",
    name: "Velas Pad",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/11654.png"
  },
  {
    chainId: 106,
    address: "0x4cBA3447E51239065310E24c02C190945ad761d9",
    _scan: "https://evmexplorer.velas.com/token/0x4cBA3447E51239065310E24c02C190945ad761d9",
    symbol: "MNFT",
    name: "MarvelousNFT",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16218.png"
  },
  {
    chainId: 106,
    address: "0x62858686119135cc00C4A3102b436a0eB314D402",
    _scan: "https://evmexplorer.velas.com/token/0x62858686119135cc00C4A3102b436a0eB314D402",
    symbol: "METAV",
    name: "METAVPAD.com",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/13978.png"
  },
  {
    chainId: 106,
    address: "0xd12f7A98C0d740E7Ec82E8caF94EB79C56D1B623",
    _scan: "https://evmexplorer.velas.com/token/0xd12f7A98C0d740E7Ec82E8caF94EB79C56D1B623",
    symbol: "VDGT",
    name: "VeleroDAO",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18282.png"
  },
  {
    chainId: 106,
    address: "0x09bcE7716D46459DF7473982Fd27A96EabD6eE4d",
    _scan: "https://evmexplorer.velas.com/token/0x09bcE7716D46459DF7473982Fd27A96EabD6eE4d",
    symbol: "BITORB",
    name: "Bitorbit",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12255.png"
  },
  {
    chainId: 106,
    address: "0x9Ab70e92319f0b9127df78868Fd3655fB9f1E322",
    _scan: "https://evmexplorer.velas.com/token/0x9Ab70e92319f0b9127df78868Fd3655fB9f1E322",
    symbol: "WWY",
    name: "WeWay Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/17047.png"
  },
  {
    chainId: 106,
    address: "0xF800F6977a7F98eAca9163e549be17bbdA84394a",
    _scan: "https://evmexplorer.velas.com/token/0xF800F6977a7F98eAca9163e549be17bbdA84394a",
    symbol: "VHT",
    name: "Velhalla Token",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 106,
    address: "0x32561fA6D2D3E2191bF50f813DF2C34fb3C89B62",
    _scan: "https://evmexplorer.velas.com/token/0x32561fA6D2D3E2191bF50f813DF2C34fb3C89B62",
    symbol: "VERVE",
    name: "VERVETV.app",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16902.png"
  },
  {
    chainId: 106,
    address: "0x2217e5921B7edfB4BB193a6228459974010D2198",
    _scan: "https://evmexplorer.velas.com/token/0x2217e5921B7edfB4BB193a6228459974010D2198",
    symbol: "QMALL",
    name: "Qmall Token",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18059.png"
  },
  {
    chainId: 106,
    address: "0x9b6fbF0ea23faF0d77B94d5699B44062e5E747Ac",
    _scan: "https://evmexplorer.velas.com/token/0x9b6fbF0ea23faF0d77B94d5699B44062e5E747Ac",
    symbol: "SWAPZ",
    name: "Swapz",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/10557.png"
  },
  {
    chainId: 106,
    address: "0x948E8c6E0c9035f7372a10e10f9f71cC81341053",
    _scan: "https://evmexplorer.velas.com/token/0x948E8c6E0c9035f7372a10e10f9f71cC81341053",
    symbol: "VPUNKS",
    name: "VelasPunks",
    decimals: 18,
    logoURI: ""
  },
  {
    chainId: 106,
    address: "0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993",
    _scan: "https://evmexplorer.velas.com/token/0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993",
    symbol: "USDC",
    name: "Multichain USDC",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
  },
  {
    chainId: 106,
    address: "0x85219708c49aa701871Ad330A94EA0f41dFf24Ca",
    _scan: "https://evmexplorer.velas.com/token/0x85219708c49aa701871Ad330A94EA0f41dFf24Ca",
    symbol: "ETH",
    name: "Multichain ETH",
    decimals: 18,
    logoURI: "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0x85219708c49aa701871ad330a94ea0f41dff24ca/logo.png?raw=true"
  },
  {
    chainId: 106,
    address: "0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf",
    _scan: "https://evmexplorer.velas.com/token/0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf",
    symbol: "USDV",
    name: "USD Velero Stablecoin",
    decimals: 18,
    logoURI: "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf/logo.png?raw=true"
  }
], $p = [
  {
    chainId: 1313161554,
    address: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
    _scan: "https://aurorascan.dev/token/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
  },
  {
    chainId: 1313161554,
    address: "0x4e834cdcc911605227eedddb89fad336ab9dc00a",
    _scan: "https://aurorascan.dev/token/0x4e834cdcc911605227eedddb89fad336ab9dc00a",
    symbol: "AAVE",
    name: "Aave Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/aave.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x8bec47865ade3b172a928df8f990bc7f2a3b9f79",
    _scan: "https://aurorascan.dev/token/0x8bec47865ade3b172a928df8f990bc7f2a3b9f79",
    symbol: "AURORA",
    name: "Aurora",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/aurora.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x8973c9ec7b79fe880697cdbca744892682764c37",
    _scan: "https://aurorascan.dev/token/0x8973c9ec7b79fe880697cdbca744892682764c37",
    symbol: "BAKED",
    name: "BakedToken",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/baked.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xb59d0fdaf498182ff19c4e80c00ecfc4470926e2",
    _scan: "https://aurorascan.dev/token/0xb59d0fdaf498182ff19c4e80c00ecfc4470926e2",
    symbol: "BAL",
    name: "Balancer",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/bal.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x2b9025aecc5ce7a8e6880d3e9c6e458927ecba04",
    _scan: "https://aurorascan.dev/token/0x2b9025aecc5ce7a8e6880d3e9c6e458927ecba04",
    symbol: "BAT",
    name: "Basic Attention Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/BAT.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xdeacf0faa2b80af41470003b5f6cd113d47b4dcd",
    _scan: "https://aurorascan.dev/token/0xdeacf0faa2b80af41470003b5f6cd113d47b4dcd",
    symbol: "COMP",
    name: "Compound",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/comp.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xabe9818c5fb5e751c4310be6f0f18c8d85f9bd7f",
    _scan: "https://aurorascan.dev/token/0xabe9818c5fb5e751c4310be6f0f18c8d85f9bd7f",
    symbol: "CREAM",
    name: "Cream Finance",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/cream.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xe3520349f477a5f6eb06107066048508498a291b",
    _scan: "https://aurorascan.dev/token/0xe3520349f477a5f6eb06107066048508498a291b",
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/dai.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xe301ed8c7630c9678c39e4e45193d1e7dfb914f7",
    _scan: "https://aurorascan.dev/token/0xe301ed8c7630c9678c39e4e45193d1e7dfb914f7",
    symbol: "DODO",
    name: "DODO bird",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/dodo.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xea62791aa682d455614eaa2a12ba3d9a2fd197af",
    _scan: "https://aurorascan.dev/token/0xea62791aa682d455614eaa2a12ba3d9a2fd197af",
    symbol: "FLX",
    name: "Flux Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/flx.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xda2585430fef327ad8ee44af8f1f989a2a91a3d2",
    _scan: "https://aurorascan.dev/token/0xda2585430fef327ad8ee44af8f1f989a2a91a3d2",
    symbol: "FRAX",
    name: "Frax",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FRAX.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xc8fdd32e0bf33f0396a18209188bb8c6fb8747d2",
    _scan: "https://aurorascan.dev/token/0xc8fdd32e0bf33f0396a18209188bb8c6fb8747d2",
    symbol: "FXS",
    name: "Frax Share",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FXS.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x94190d8ef039c670c6d6b9990142e0ce2a1e3178",
    _scan: "https://aurorascan.dev/token/0x94190d8ef039c670c6d6b9990142e0ce2a1e3178",
    symbol: "LINK",
    name: "ChainLink Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/link.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xfca152a9916895bf564e3f26a611f9e1e6aa6e73",
    _scan: "https://aurorascan.dev/token/0xfca152a9916895bf564e3f26a611f9e1e6aa6e73",
    symbol: "LUNA",
    name: "Wrapped LUNA Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/luna.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x1d1f82d8b8fc72f29a8c268285347563cb6cd8b3",
    _scan: "https://aurorascan.dev/token/0x1d1f82d8b8fc72f29a8c268285347563cb6cd8b3",
    symbol: "MKR",
    name: "Maker",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xd126b48c072f4668e944a8895bc74044d5f2e85b",
    _scan: "https://aurorascan.dev/token/0xd126b48c072f4668e944a8895bc74044d5f2e85b",
    symbol: "MNFT",
    name: "MANUFACTORY",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/mnft.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x74974575d2f1668c63036d51ff48dbaa68e52408",
    _scan: "https://aurorascan.dev/token/0x74974575d2f1668c63036d51ff48dbaa68e52408",
    symbol: "MODA",
    name: "moda",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/moda.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
    _scan: "https://aurorascan.dev/token/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
    symbol: "wNEAR",
    name: "Wrapped NEAR fungible token",
    decimals: 24,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/near.svg",
    tags: []
  },
  {
    chainId: 1313161554,
    address: "0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781",
    _scan: "https://aurorascan.dev/token/0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781",
    symbol: "PAD",
    name: "NearPad Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/pad.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x8828a5047d093f6354e3fe29ffcb2761300dc994",
    _scan: "https://aurorascan.dev/token/0x8828a5047d093f6354e3fe29ffcb2761300dc994",
    symbol: "PULSE",
    name: "Pulse",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/pulse.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x18921f1e257038e538ba24d49fa6495c8b1617bc",
    _scan: "https://aurorascan.dev/token/0x18921f1e257038e538ba24d49fa6495c8b1617bc",
    symbol: "REN",
    name: "Republic",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/ren.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xdc9be1ff012d3c6da818d136a3b2e5fdd4442f74",
    _scan: "https://aurorascan.dev/token/0xdc9be1ff012d3c6da818d136a3b2e5fdd4442f74",
    symbol: "SNX",
    name: "Synthetix Network Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SNX.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x7821c773a12485b12a2b5b7bc451c3eb200986b1",
    _scan: "https://aurorascan.dev/token/0x7821c773a12485b12a2b5b7bc451c3eb200986b1",
    symbol: "SUSHI",
    name: "SushiToken",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SUSHI.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xFa94348467f64D5A457F75F8bc40495D33c65aBB",
    _scan: "https://aurorascan.dev/token/0xFa94348467f64D5A457F75F8bc40495D33c65aBB",
    symbol: "TRI",
    name: "Trisolaris",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/tri.svg",
    tags: []
  },
  {
    chainId: 1313161554,
    address: "0x984c2505a14da732d7271416356f535953610340",
    _scan: "https://aurorascan.dev/token/0x984c2505a14da732d7271416356f535953610340",
    symbol: "UMINT",
    name: "YouMinter",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/umint.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x1bc741235ec0ee86ad488fa49b69bb6c823ee7b7",
    _scan: "https://aurorascan.dev/token/0x1bc741235ec0ee86ad488fa49b69bb6c823ee7b7",
    symbol: "UNI",
    name: "Uniswap",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/uni.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xb12bfca5a55806aaf64e99521918a4bf0fc40802",
    _scan: "https://aurorascan.dev/token/0xb12bfca5a55806aaf64e99521918a4bf0fc40802",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/usdc.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x4988a896b1227218e4a686fde5eabdcabd91571f",
    _scan: "https://aurorascan.dev/token/0x4988a896b1227218e4a686fde5eabdcabd91571f",
    symbol: "USDT",
    name: "TetherUS",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/usdt.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0x098d5b6a26bca1d71f2335805d71b244f94e8a5f",
    _scan: "https://aurorascan.dev/token/0x098d5b6a26bca1d71f2335805d71b244f94e8a5f",
    symbol: "UST",
    name: "Wrapped UST Token",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/ust.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xf4eb217ba2454613b15dbdea6e5f22276410e89e",
    _scan: "https://aurorascan.dev/token/0xf4eb217ba2454613b15dbdea6e5f22276410e89e",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/wbtc.svg",
    tags: ["ethereum"]
  },
  {
    chainId: 1313161554,
    address: "0xa64514a8af3ff7366ad3d5daa5a548eefcef85e0",
    _scan: "https://aurorascan.dev/token/0xa64514a8af3ff7366ad3d5daa5a548eefcef85e0",
    symbol: "YFI",
    name: "yearn.finance",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/aurora-is-near/bridge-assets/master/tokens/yfi.svg",
    tags: ["ethereum"]
  }
], Vp = [
  {
    chainId: 42262,
    address: "0xd1dF9CE4b6159441D18BD6887dbd7320a8D52a05",
    _scan: "https://explorer.emerald.oasis.dev/token/0xd1dF9CE4b6159441D18BD6887dbd7320a8D52a05",
    symbol: "FTP",
    name: "Fountain Protocol",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/24041/small/logo-black.png?1646138615"
  },
  {
    chainId: 42262,
    address: "0xf02b3e437304892105992512539F769423a515Cb",
    _scan: "https://explorer.emerald.oasis.dev/token/0xf02b3e437304892105992512539F769423a515Cb",
    symbol: "YUZU",
    name: "YUZUToken",
    decimals: 18,
    logoURI: "https://yuzu-swap.com/yuzu.0f21407f.svg"
  },
  {
    chainId: 42262,
    address: "0x21C718C22D52d0F3a789b752D4c2fD5908a8A733",
    _scan: "https://explorer.emerald.oasis.dev/token/0x21C718C22D52d0F3a789b752D4c2fD5908a8A733",
    symbol: "WROSE",
    name: "Wrapped ROSE",
    decimals: 18,
    logoURI: "https://docs.oasis.dev/img/logo.png"
  },
  {
    chainId: 42262,
    address: "0x89aF3985261b664a24DE48355D589275b0FE2112",
    _scan: "https://explorer.emerald.oasis.dev/token/0x89aF3985261b664a24DE48355D589275b0FE2112",
    symbol: "USBL",
    name: "softbalanced.com",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/softbalanced/softbalanced.github.io/418f59f5cbc0a79866fce615c697812934902607/index_files/logo__.png"
  },
  {
    chainId: 42262,
    address: "0xBC033203796CC2C8C543a5aAe93a9a643320433D",
    _scan: "https://explorer.emerald.oasis.dev/token/0xBC033203796CC2C8C543a5aAe93a9a643320433D",
    symbol: "VS",
    name: "ValleySwap Token",
    decimals: 18,
    logoURI: "https://valleyswap.com/images/logo_valley-swap_mob.svg"
  },
  {
    chainId: 42262,
    address: "0x0bfF36Be5cf671Fa973f8206483b6641A90CE7d0",
    _scan: "https://explorer.emerald.oasis.dev/token/0x0bfF36Be5cf671Fa973f8206483b6641A90CE7d0",
    symbol: "\u{1F339}SWAP",
    name: "\u{1F339}RoseSwap.io",
    decimals: 18,
    logoURI: "https://app.rose.fi/static/media/rose.54bf1c833f8f489c2e36399cbf1033ed.svg"
  },
  {
    chainId: 42262,
    address: "0x6Cb9750a92643382e020eA9a170AbB83Df05F30B",
    _scan: "https://explorer.emerald.oasis.dev/token/0x6Cb9750a92643382e020eA9a170AbB83Df05F30B",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
  },
  {
    chainId: 42262,
    address: "0x94fbfFe5698DB6f54d6Ca524DbE673a7729014Be",
    _scan: "https://explorer.emerald.oasis.dev/token/0x94fbfFe5698DB6f54d6Ca524DbE673a7729014Be",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
  },
  {
    chainId: 42262,
    address: "0x010CDf0Db2737f9407F8CFcb4dCaECA4dE54c815",
    _scan: "https://explorer.emerald.oasis.dev/token/0x010CDf0Db2737f9407F8CFcb4dCaECA4dE54c815",
    symbol: "BTC",
    name: "Bitcoin",
    decimals: 8,
    logoURI: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
  },
  {
    chainId: 42262,
    address: "0x32847e63E99D3a044908763056e25694490082F8",
    _scan: "https://explorer.emerald.oasis.dev/token/0x32847e63E99D3a044908763056e25694490082F8",
    symbol: "AVAX",
    name: "AVAX (Wormhole)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/AVAX_wh.png"
  },
  {
    chainId: 42262,
    address: "0x05CbE6319Dcc937BdbDf0931466F4fFd0d392B47",
    _scan: "https://explorer.emerald.oasis.dev/token/0x05CbE6319Dcc937BdbDf0931466F4fFd0d392B47",
    symbol: "USDCav",
    name: "USD Coin (Wormhole from Avalanche)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCav_wh.png"
  },
  {
    chainId: 42262,
    address: "0x05832a0905E516f29344ADBa1c2052a788B10129",
    _scan: "https://explorer.emerald.oasis.dev/token/0x05832a0905E516f29344ADBa1c2052a788B10129",
    symbol: "USDTav",
    name: "Tether USD (Wormhole from Avalanche)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTav_wh.png"
  },
  {
    chainId: 42262,
    address: "0xd79Ef9A91b56c690C7b80570a3c060678667f469",
    _scan: "https://explorer.emerald.oasis.dev/token/0xd79Ef9A91b56c690C7b80570a3c060678667f469",
    symbol: "BNB",
    name: "Binance Coin (Wormhole)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/BNB_wh.png"
  },
  {
    chainId: 42262,
    address: "0xf6568FD76f9fcD1f60f73b730F142853c5eF627E",
    _scan: "https://explorer.emerald.oasis.dev/token/0xf6568FD76f9fcD1f60f73b730F142853c5eF627E",
    symbol: "BUSDbs",
    name: "Binance USD (Wormhole from BSC)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/BUSDbs_wh.png"
  },
  {
    chainId: 42262,
    address: "0x4cA2A3De42eabC8fd8b0AC46127E64DB08b9150e",
    _scan: "https://explorer.emerald.oasis.dev/token/0x4cA2A3De42eabC8fd8b0AC46127E64DB08b9150e",
    symbol: "USDCbs",
    name: "USD Coin (Wormhole from BSC)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCbs_wh.png"
  },
  {
    chainId: 42262,
    address: "0x366EF31C8dc715cbeff5fA54Ad106dC9c25C6153",
    _scan: "https://explorer.emerald.oasis.dev/token/0x366EF31C8dc715cbeff5fA54Ad106dC9c25C6153",
    symbol: "USDTbs",
    name: "Tether USD (Wormhole from BSC)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTbs_wh.png"
  },
  {
    chainId: 42262,
    address: "0x3223f17957Ba502cbe71401D55A0DB26E5F7c68F",
    _scan: "https://explorer.emerald.oasis.dev/token/0x3223f17957Ba502cbe71401D55A0DB26E5F7c68F",
    symbol: "ETH",
    name: "Ether (Wormhole)",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/ETH_wh.png"
  },
  {
    chainId: 42262,
    address: "0xE8A638b3B7565Ee7c5eb9755E58552aFc87b94DD",
    _scan: "https://explorer.emerald.oasis.dev/token/0xE8A638b3B7565Ee7c5eb9755E58552aFc87b94DD",
    symbol: "USDCet",
    name: "USD Coin (Wormhole from Ethereum)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCet_wh.png"
  },
  {
    chainId: 42262,
    address: "0xdC19A122e268128B5eE20366299fc7b5b199C8e3",
    _scan: "https://explorer.emerald.oasis.dev/token/0xdC19A122e268128B5eE20366299fc7b5b199C8e3",
    symbol: "USDTet",
    name: "Tether USD (Wormhole from Ethereum)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTet_wh.png"
  },
  {
    chainId: 42262,
    address: "0xd43ce0aa2a29DCb75bDb83085703dc589DE6C7eb",
    _scan: "https://explorer.emerald.oasis.dev/token/0xd43ce0aa2a29DCb75bDb83085703dc589DE6C7eb",
    symbol: "WBTC",
    name: "Wrapped BTC (Wormhole)",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/WBTC_wh.png"
  },
  {
    chainId: 42262,
    address: "0x3E62a9c3aF8b810dE79645C4579acC8f0d06a241",
    _scan: "https://explorer.emerald.oasis.dev/token/0x3E62a9c3aF8b810dE79645C4579acC8f0d06a241",
    symbol: "USDCpo",
    name: "USD Coin (PoS) (Wormhole from Polygon)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCpo_wh.png"
  },
  {
    chainId: 42262,
    address: "0xFffD69E757d8220CEA60dc80B9Fe1a30b58c94F3",
    _scan: "https://explorer.emerald.oasis.dev/token/0xFffD69E757d8220CEA60dc80B9Fe1a30b58c94F3",
    symbol: "USDTpo",
    name: "Tether USD (PoS) (Wormhole from Polygon)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTpo_wh.png"
  },
  {
    chainId: 42262,
    address: "0xd17dDAC91670274F7ba1590a06EcA0f2FD2b12bc",
    _scan: "https://explorer.emerald.oasis.dev/token/0xd17dDAC91670274F7ba1590a06EcA0f2FD2b12bc",
    symbol: "SOL",
    name: "SOL (Wormhole)",
    decimals: 9,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/SOL_wh.png"
  },
  {
    chainId: 42262,
    address: "0x1d1149a53deB36F2836Ae7877c9176413aDfA4A8",
    _scan: "https://explorer.emerald.oasis.dev/token/0x1d1149a53deB36F2836Ae7877c9176413aDfA4A8",
    symbol: "USDCso",
    name: "USD Coin (Wormhole from Solana)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCso_wh.png"
  },
  {
    chainId: 42262,
    address: "0x24285C5232ce3858F00bacb950Cae1f59d1b2704",
    _scan: "https://explorer.emerald.oasis.dev/token/0x24285C5232ce3858F00bacb950Cae1f59d1b2704",
    symbol: "USDTso",
    name: "Tether USD (Wormhole from Solana)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTso_wh.png"
  },
  {
    chainId: 42262,
    address: "0xa1E73c01E0cF7930F5e91CB291031739FE5Ad6C2",
    _scan: "https://explorer.emerald.oasis.dev/token/0xa1E73c01E0cF7930F5e91CB291031739FE5Ad6C2",
    symbol: "UST",
    name: "UST (Wormhole)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/UST_wh.png"
  },
  {
    chainId: 42262,
    address: "0x4F43717B20ae319Aa50BC5B2349B93af5f7Ac823",
    _scan: "https://explorer.emerald.oasis.dev/token/0x4F43717B20ae319Aa50BC5B2349B93af5f7Ac823",
    symbol: "LUNA",
    name: "LUNA (Wormhole)",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/LUNA_wh.png"
  },
  {
    chainId: 42262,
    symbol: "ceUSDT",
    address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
    _scan: "https://explorer.emerald.oasis.dev/token/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
    name: "Tether USD (Celer)",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
  },
  {
    chainId: 42262,
    symbol: "ceUSDC",
    address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
    _scan: "https://explorer.emerald.oasis.dev/token/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
    name: "USD Coin (Celer)",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
  },
  {
    chainId: 42262,
    symbol: "ceETH",
    address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
    _scan: "https://explorer.emerald.oasis.dev/token/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
    name: "Wrapped Ether (Celer)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  {
    chainId: 42262,
    symbol: "ceDAI",
    address: "0x5a4Ba16C2AeB295822A95280A7c7149E87769E6A",
    _scan: "https://explorer.emerald.oasis.dev/token/0x5a4Ba16C2AeB295822A95280A7c7149E87769E6A",
    name: "Dai Stablecoin (Celer)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png"
  },
  {
    chainId: 42262,
    symbol: "cbBNB",
    address: "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
    _scan: "https://explorer.emerald.oasis.dev/token/0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
    name: "Binance Coin (Celer)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  },
  {
    chainId: 42262,
    symbol: "caAVAX",
    address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
    _scan: "https://explorer.emerald.oasis.dev/token/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
    name: "Avalanche (Celer)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
  },
  {
    chainId: 42262,
    symbol: "cfFTM",
    address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
    _scan: "https://explorer.emerald.oasis.dev/token/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
    name: "Fantom (Celer)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png"
  },
  {
    chainId: 42262,
    symbol: "CELR",
    address: "0xf6a939e773fa4A63fd53f86bbbB279CaAD955035",
    _scan: "https://explorer.emerald.oasis.dev/token/0xf6a939e773fa4A63fd53f86bbbB279CaAD955035",
    name: "Celer Network",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3814.png"
  },
  {
    chainId: 42262,
    symbol: "ETH",
    address: "0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
    _scan: "https://explorer.emerald.oasis.dev/token/0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
    name: "Ethereum (Multichain)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  {
    chainId: 42262,
    address: "0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844",
    _scan: "https://explorer.emerald.oasis.dev/token/0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844",
    symbol: "USDC",
    name: "USD Coin (Multichain)",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
  },
  {
    chainId: 42262,
    symbol: "USDT",
    address: "0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8",
    _scan: "https://explorer.emerald.oasis.dev/token/0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8",
    name: "Tether USD (Multichain)",
    decimals: 6,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
  },
  {
    chainId: 42262,
    symbol: "BUSD",
    address: "0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C",
    _scan: "https://explorer.emerald.oasis.dev/token/0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C",
    name: "Binance-Peg BUSD Token (Multichain)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png"
  },
  {
    chainId: 42262,
    symbol: "BNB",
    address: "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
    _scan: "https://explorer.emerald.oasis.dev/token/0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
    name: "Binance (Multichain)",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  }
], Gp = [
  {
    chainId: 10,
    address: "0x61BAADcF22d2565B0F471b291C475db5555e0b76",
    _scan: "https://optimistic.etherscan.io/token/0x61BAADcF22d2565B0F471b291C475db5555e0b76",
    name: "Aelin Protocol",
    symbol: "AELIN",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/AELIN/logo.png"
  },
  {
    chainId: 10,
    address: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    _scan: "https://optimistic.etherscan.io/token/0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/ETH/logo.svg"
  },
  {
    chainId: 10,
    address: "0x395ae52bb17aef68c2888d941736a71dc6d4e125",
    _scan: "https://optimistic.etherscan.io/token/0x395ae52bb17aef68c2888d941736a71dc6d4e125",
    name: "PoolTogether",
    symbol: "POOL",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/POOL/logo.svg"
  },
  {
    chainId: 10,
    address: "0x374Ad0f47F4ca39c78E5Cc54f1C9e426FF8f231A",
    _scan: "https://optimistic.etherscan.io/token/0x374Ad0f47F4ca39c78E5Cc54f1C9e426FF8f231A",
    name: "Premia",
    symbol: "PREMIA",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/PREMIA/logo.svg"
  },
  {
    chainId: 10,
    address: "0xef6301da234fc7b0545c6e877d3359fe0b9e50a4",
    _scan: "https://optimistic.etherscan.io/token/0xef6301da234fc7b0545c6e877d3359fe0b9e50a4",
    name: "SUKU",
    symbol: "SUKU",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/SUKU/logo.png"
  },
  {
    chainId: 10,
    address: "0xd8f365c2c85648f9b89d9f1bf72c0ae4b1c36cfd",
    _scan: "https://optimistic.etherscan.io/token/0xd8f365c2c85648f9b89d9f1bf72c0ae4b1c36cfd",
    name: "TheDAO",
    symbol: "TheDAO",
    decimals: 16,
    logoURI: "https://ethereum-optimism.github.io/data/TheDAO/logo.svg"
  },
  {
    chainId: 10,
    address: "0xcB59a0A753fDB7491d5F3D794316F1adE197B21E",
    _scan: "https://optimistic.etherscan.io/token/0xcB59a0A753fDB7491d5F3D794316F1adE197B21E",
    name: "TrueUSD",
    symbol: "TUSD",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/TUSD/logo.png"
  },
  {
    chainId: 10,
    address: "0xD1917629B3E6A72E6772Aab5dBe58Eb7FA3C2F33",
    _scan: "https://optimistic.etherscan.io/token/0xD1917629B3E6A72E6772Aab5dBe58Eb7FA3C2F33",
    name: "0x Protocol Token",
    symbol: "ZRX",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/ZRX/logo.png"
  },
  {
    chainId: 10,
    address: "0x7113370218f31764C1B6353BDF6004d86fF6B9cc",
    _scan: "https://optimistic.etherscan.io/token/0x7113370218f31764C1B6353BDF6004d86fF6B9cc",
    name: "Decentralized USD",
    symbol: "USDD",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/USDD/logo.png"
  },
  {
    chainId: 10,
    address: "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
    _scan: "https://optimistic.etherscan.io/token/0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
    name: "Synthetix",
    symbol: "SNX",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SNX.svg"
  },
  {
    chainId: 10,
    address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    _scan: "https://optimistic.etherscan.io/token/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    name: "Dai stable coin",
    symbol: "DAI",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/DAI/logo.svg"
  },
  {
    chainId: 10,
    address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    _scan: "https://optimistic.etherscan.io/token/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    logoURI: "https://ethereum-optimism.github.io/data/USDT/logo.png"
  },
  {
    chainId: 10,
    address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
    _scan: "https://optimistic.etherscan.io/token/0x68f180fcCe6836688e9084f035309E29Bf0A2095",
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    decimals: 8,
    logoURI: "https://ethereum-optimism.github.io/data/WBTC/logo.svg"
  },
  {
    chainId: 10,
    address: "0xe0BB0D3DE8c10976511e5030cA403dBf4c25165B",
    _scan: "https://optimistic.etherscan.io/token/0xe0BB0D3DE8c10976511e5030cA403dBf4c25165B",
    name: "0xBitcoin",
    symbol: "0xBTC",
    decimals: 8,
    logoURI: "https://ethereum-optimism.github.io/data/0xBTC/logo.png"
  },
  {
    chainId: 10,
    address: "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
    _scan: "https://optimistic.etherscan.io/token/0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
    name: "Chainlink",
    symbol: "LINK",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/LINK/logo.png"
  },
  {
    chainId: 10,
    address: "0x65559aA14915a70190438eF90104769e5E890A00",
    _scan: "https://optimistic.etherscan.io/token/0x65559aA14915a70190438eF90104769e5E890A00",
    name: "Ethereum Name Service",
    symbol: "ENS",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/ENS/logo.png"
  },
  {
    chainId: 10,
    address: "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
    _scan: "https://optimistic.etherscan.io/token/0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
    name: "Synthetix USD",
    symbol: "sUSD",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/sUSD/logo.svg"
  },
  {
    chainId: 10,
    address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    _scan: "https://optimistic.etherscan.io/token/0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    logoURI: "https://ethereum-optimism.github.io/data/USDC/logo.png"
  },
  {
    chainId: 10,
    address: "0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49",
    _scan: "https://optimistic.etherscan.io/token/0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49",
    name: "Synthetic Ether",
    symbol: "sETH",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/sETH/logo.svg"
  },
  {
    chainId: 10,
    address: "0x298B9B95708152ff6968aafd889c6586e9169f1D",
    _scan: "https://optimistic.etherscan.io/token/0x298B9B95708152ff6968aafd889c6586e9169f1D",
    name: "Synthetic Bitcoin",
    symbol: "sBTC",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/sBTC/logo.svg"
  },
  {
    chainId: 10,
    address: "0xc5Db22719A06418028A40A9B5E9A7c02959D0d08",
    _scan: "https://optimistic.etherscan.io/token/0xc5Db22719A06418028A40A9B5E9A7c02959D0d08",
    name: "Synthetic Chainlink",
    symbol: "sLINK",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/sLINK/logo.svg"
  },
  {
    chainId: 10,
    address: "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
    _scan: "https://optimistic.etherscan.io/token/0x6fd9d7ad17242c41f7131d257212c54a0e816691",
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/UNI/logo.png"
  },
  {
    chainId: 10,
    address: "0xc40f949f8a4e094d1b49a23ea9241d289b7b2819",
    _scan: "https://optimistic.etherscan.io/token/0xc40f949f8a4e094d1b49a23ea9241d289b7b2819",
    name: "LUSD Stablecoin",
    symbol: "LUSD",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/LUSD/logo.svg"
  },
  {
    chainId: 10,
    address: "0xb548f63d4405466b36c0c0ac3318a22fdcec711a",
    _scan: "https://optimistic.etherscan.io/token/0xb548f63d4405466b36c0c0ac3318a22fdcec711a",
    name: "Rari Governance Token",
    symbol: "RGT",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/RGT/logo.png"
  },
  {
    chainId: 10,
    address: "0x7FB688CCf682d58f86D7e38e03f9D22e7705448B",
    _scan: "https://optimistic.etherscan.io/token/0x7FB688CCf682d58f86D7e38e03f9D22e7705448B",
    name: "Rai Reflex Index",
    symbol: "RAI",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/RAI/logo.svg"
  },
  {
    chainId: 10,
    address: "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
    _scan: "https://optimistic.etherscan.io/token/0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
    name: "Rocket Pool ETH",
    symbol: "rETH",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/rETH/logo.png"
  },
  {
    chainId: 10,
    address: "0x00F932F0FE257456b32dedA4758922E56A4F4b42",
    _scan: "https://optimistic.etherscan.io/token/0x00F932F0FE257456b32dedA4758922E56A4F4b42",
    name: "Paper",
    symbol: "PAPER",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/PAPER/logo.svg"
  },
  {
    chainId: 10,
    address: "0x7c6b91d9be155a6db01f749217d76ff02a7227f2",
    _scan: "https://optimistic.etherscan.io/token/0x7c6b91d9be155a6db01f749217d76ff02a7227f2",
    name: "Sarcophagus",
    symbol: "SARCO",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/SARCO/logo.png"
  },
  {
    chainId: 10,
    address: "0x5029C236320b8f15eF0a657054B84d90bfBEDED3",
    _scan: "https://optimistic.etherscan.io/token/0x5029C236320b8f15eF0a657054B84d90bfBEDED3",
    name: "BitANT",
    symbol: "BitANT",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/BitANT/logo.png"
  },
  {
    chainId: 10,
    address: "0xc98B98d17435AA00830c87eA02474C5007E1f272",
    _scan: "https://optimistic.etherscan.io/token/0xc98B98d17435AA00830c87eA02474C5007E1f272",
    name: "BitBTC",
    symbol: "BitBTC",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/BitBTC/logo.png"
  },
  {
    chainId: 10,
    address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    _scan: "https://optimistic.etherscan.io/token/0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    name: "Lyra",
    symbol: "LYRA",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/LYRA/logo.png"
  },
  {
    chainId: 10,
    address: "0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea",
    _scan: "https://optimistic.etherscan.io/token/0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea",
    name: "UMA Voting Token v1",
    symbol: "UMA",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/UMA/logo.png"
  },
  {
    chainId: 10,
    address: "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
    _scan: "https://optimistic.etherscan.io/token/0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
    name: "Perpetual",
    symbol: "PERP",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/PERP/logo.png"
  },
  {
    chainId: 10,
    address: "0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3",
    _scan: "https://optimistic.etherscan.io/token/0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3",
    name: "dForce",
    symbol: "DF",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/DF/logo.svg"
  },
  {
    chainId: 10,
    address: "0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9",
    _scan: "https://optimistic.etherscan.io/token/0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9",
    name: "dForce USD",
    symbol: "USX",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/USX/logo.svg"
  },
  {
    chainId: 10,
    address: "0x3e7eF8f50246f725885102E8238CBba33F276747",
    _scan: "https://optimistic.etherscan.io/token/0x3e7eF8f50246f725885102E8238CBba33F276747",
    name: "BarnBridge Governance Token",
    symbol: "BOND",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/BOND/logo.svg"
  },
  {
    chainId: 10,
    address: "0x4200000000000000000000000000000000000006",
    _scan: "https://optimistic.etherscan.io/token/0x4200000000000000000000000000000000000006",
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/WETH/logo.png"
  },
  {
    chainId: 10,
    address: "0x7b0bcC23851bBF7601efC9E9FE532Bf5284F65d3",
    _scan: "https://optimistic.etherscan.io/token/0x7b0bcC23851bBF7601efC9E9FE532Bf5284F65d3",
    name: "Erica Social Token",
    symbol: "EST",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/EST/logo.png"
  },
  {
    chainId: 10,
    address: "0x1da650c3b2daa8aa9ff6f661d4156ce24d08a062",
    _scan: "https://optimistic.etherscan.io/token/0x1da650c3b2daa8aa9ff6f661d4156ce24d08a062",
    name: "Dentacoin",
    symbol: "DCN",
    decimals: 0,
    logoURI: "https://ethereum-optimism.github.io/data/DCN/logo.svg"
  },
  {
    chainId: 10,
    address: "0xf98dcd95217e15e05d8638da4c91125e59590b07",
    _scan: "https://optimistic.etherscan.io/token/0xf98dcd95217e15e05d8638da4c91125e59590b07",
    name: "Kromatika",
    symbol: "KROM",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/KROM/logo.png"
  },
  {
    chainId: 10,
    address: "0xAF9fE3B5cCDAe78188B1F8b9a49Da7ae9510F151",
    _scan: "https://optimistic.etherscan.io/token/0xAF9fE3B5cCDAe78188B1F8b9a49Da7ae9510F151",
    name: "dHEDGE DAO Token",
    symbol: "DHT",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/DHT/logo.svg"
  },
  {
    chainId: 10,
    address: "0xab7badef82e9fe11f6f33f87bc9bc2aa27f2fcb5",
    _scan: "https://optimistic.etherscan.io/token/0xab7badef82e9fe11f6f33f87bc9bc2aa27f2fcb5",
    name: "Maker",
    symbol: "MKR",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg"
  },
  {
    chainId: 10,
    address: "0x3bB4445D30AC020a84c1b5A8A2C6248ebC9779D0",
    _scan: "https://optimistic.etherscan.io/token/0x3bB4445D30AC020a84c1b5A8A2C6248ebC9779D0",
    name: "Theranos Coin",
    symbol: "LIZ",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/LIZ/logo.png"
  },
  {
    chainId: 10,
    address: "0x3390108E913824B8eaD638444cc52B9aBdF63798",
    _scan: "https://optimistic.etherscan.io/token/0x3390108E913824B8eaD638444cc52B9aBdF63798",
    name: "Mask Network",
    symbol: "MASK",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/MASK/logo.svg"
  },
  {
    chainId: 10,
    address: "0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
    _scan: "https://optimistic.etherscan.io/token/0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
    name: "Curve DAO Token",
    symbol: "CRV",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/CRV/logo.png"
  },
  {
    chainId: 10,
    address: "0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9",
    _scan: "https://optimistic.etherscan.io/token/0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9",
    name: "SPANK",
    symbol: "SPANK",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/SPANK/logo.png"
  },
  {
    chainId: 10,
    address: "0xFEaA9194F9F8c1B65429E31341a103071464907E",
    _scan: "https://optimistic.etherscan.io/token/0xFEaA9194F9F8c1B65429E31341a103071464907E",
    name: "LoopringCoin V2",
    symbol: "LRC",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/LRC/logo.png"
  },
  {
    chainId: 10,
    address: "0x217D47011b23BB961eB6D93cA9945B7501a5BB11",
    _scan: "https://optimistic.etherscan.io/token/0x217D47011b23BB961eB6D93cA9945B7501a5BB11",
    name: "Optimistic Thales Token",
    symbol: "THALES",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/THALES/logo.png"
  },
  {
    chainId: 10,
    address: "0xBA28feb4b6A6b81e3F26F08b83a19E715C4294fd",
    _scan: "https://optimistic.etherscan.io/token/0xBA28feb4b6A6b81e3F26F08b83a19E715C4294fd",
    name: "UST (Wormhole)",
    symbol: "UST",
    decimals: 6,
    logoURI: "https://ethereum-optimism.github.io/data/UST/logo.png"
  },
  {
    chainId: 10,
    address: "0xE4F27b04cC7729901876B44f4EAA5102EC150265",
    _scan: "https://optimistic.etherscan.io/token/0xE4F27b04cC7729901876B44f4EAA5102EC150265",
    name: "CryptoFranc",
    symbol: "XCHF",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/XCHF/logo.png"
  },
  {
    chainId: 10,
    address: "0x76FB31fb4af56892A25e32cFC43De717950c9278",
    _scan: "https://optimistic.etherscan.io/token/0x76FB31fb4af56892A25e32cFC43De717950c9278",
    name: "Aave Token",
    symbol: "AAVE",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/AAVE/logo.svg"
  },
  {
    chainId: 10,
    address: "0x81ab7e0d570b01411fcc4afd3d50ec8c241cb74b",
    _scan: "https://optimistic.etherscan.io/token/0x81ab7e0d570b01411fcc4afd3d50ec8c241cb74b",
    name: "Equalizer",
    symbol: "EQZ",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/EQZ/logo.png"
  },
  {
    chainId: 10,
    address: "0x117cFd9060525452db4A34d51c0b3b7599087f05",
    _scan: "https://optimistic.etherscan.io/token/0x117cFd9060525452db4A34d51c0b3b7599087f05",
    name: "Geyser",
    symbol: "GYSR",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/GYSR/logo.png"
  },
  {
    chainId: 10,
    address: "0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921",
    _scan: "https://optimistic.etherscan.io/token/0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921",
    name: "Balancer",
    symbol: "BAL",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/BAL/logo.png"
  },
  {
    chainId: 10,
    address: "0x1eba7a6a72c894026cd654ac5cdcf83a46445b08",
    _scan: "https://optimistic.etherscan.io/token/0x1eba7a6a72c894026cd654ac5cdcf83a46445b08",
    name: "Gitcoin",
    symbol: "GTC",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/GTC/logo.svg"
  },
  {
    chainId: 10,
    address: "0x4200000000000000000000000000000000000042",
    _scan: "https://optimistic.etherscan.io/token/0x4200000000000000000000000000000000000042",
    name: "Optimism",
    symbol: "OP",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/OP/logo.png"
  },
  {
    chainId: 10,
    address: "0x8aE125E8653821E851F12A49F7765db9a9ce7384",
    _scan: "https://optimistic.etherscan.io/token/0x8aE125E8653821E851F12A49F7765db9a9ce7384",
    name: "Dola USD Stablecoin",
    symbol: "DOLA",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/DOLA/logo.png"
  },
  {
    chainId: 10,
    address: "0x3c8B650257cFb5f272f799F5e2b4e65093a11a05",
    _scan: "https://optimistic.etherscan.io/token/0x3c8B650257cFb5f272f799F5e2b4e65093a11a05",
    name: "Velodrome",
    symbol: "VELO",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/VELO.svg"
  },
  {
    chainId: 10,
    address: "0xdFA46478F9e5EA86d57387849598dbFB2e964b02",
    _scan: "https://optimistic.etherscan.io/token/0xdFA46478F9e5EA86d57387849598dbFB2e964b02",
    decimals: 18,
    name: "MAI",
    symbol: "MAI",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg"
  },
  {
    chainId: 10,
    address: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
    _scan: "https://optimistic.etherscan.io/token/0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
    decimals: 18,
    name: "Frax",
    symbol: "FRAX",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FRAX.svg"
  },
  {
    chainId: 10,
    address: "0xC22885e06cd8507c5c74a948C59af853AEd1Ea5C",
    _scan: "https://optimistic.etherscan.io/token/0xC22885e06cd8507c5c74a948C59af853AEd1Ea5C",
    decimals: 18,
    name: "Decentralized USD",
    symbol: "USDD",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/USDD.svg"
  },
  {
    chainId: 10,
    address: "0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be",
    _scan: "https://optimistic.etherscan.io/token/0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be",
    decimals: 18,
    name: "Frax Share",
    symbol: "FXS",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FXS.svg"
  },
  {
    chainId: 10,
    address: "0xEe9801669C6138E84bD50dEB500827b776777d28",
    _scan: "https://optimistic.etherscan.io/token/0xEe9801669C6138E84bD50dEB500827b776777d28",
    decimals: 18,
    name: "O3 Swap Token",
    symbol: "O3",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/O3.png"
  },
  {
    chainId: 10,
    address: "0xb12c13e66AdE1F72f71834f2FC5082Db8C091358",
    _scan: "https://optimistic.etherscan.io/token/0xb12c13e66AdE1F72f71834f2FC5082Db8C091358",
    decimals: 18,
    name: "ROOBEE",
    symbol: "ROOBEE",
    logoURI: "https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ROOBEE.png"
  }
], Kp = [
  {
    chainId: 324,
    address: "0x42c1c56be243c250ab24d2ecdcc77f9ccaa59601",
    symbol: "PERP",
    name: "Perpetual",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/499378cf-23de-4820-b245-6e1a03bb6c99.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x81cbc2898010be52cf7de53dda5fa8f15543fa0eaa9e93132fad87635bc4240d"
  },
  {
    chainId: 324,
    address: "0xd0ea21ba66b67be636de1ec4bd9696eb8c61e9aa",
    symbol: "OT",
    name: "Onchain Trade",
    decimals: 18,
    marketCap: 18572300,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/7b4f7e9f-8c50-49ec-bcdc-818a7a04f059.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0x493257fd37edb34451f62edf8d2a0c418852ba4c",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    marketCap: 8509229,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/fc7ce9b5-505f-4f29-8883-e86510170110.png",
    isWhitelisted: !0,
    isStable: !0,
    domainSeparator: "0x830cbbcc61d018041f1c7a8c546f97040273927bb154e60e2e29a2335855c88f"
  },
  {
    chainId: 324,
    address: "0x2039bb4116b4efc145ec4f0e2ea75012d6c0f181",
    symbol: "cBUSD",
    name: "Celer Network BUSD",
    decimals: 18,
    marketCap: 41498438e-1,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/4cff4553-3d67-4ed2-b2b5-22395ccddc58.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 324,
    address: "0x28a487240e4d45cff4a2980d334cc933b7483842",
    symbol: "cMATIC",
    name: "Celer Network MATIC",
    decimals: 18,
    marketCap: 94423.61325783927,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/46319446-0b42-4a83-a3f8-a32bd1e71b14.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0xd599da85f8fc4877e61f547dfacffe1238a7149e",
    symbol: "Cheems",
    name: "Cheems Token",
    decimals: 18,
    marketCap: 4205158886248695e-9,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/b047ce83-e47b-4008-af2d-3e39a4c8ff5a.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0x47260090ce5e83454d5f05a0abbb2c953835f777",
    symbol: "SPACE",
    name: "SPACE",
    decimals: 18,
    marketCap: 1411707218944e-6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/e862d3a4-c23d-44ba-895f-00d112649ff1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0x503234f203fc7eb888eec8513210612a43cf6115",
    symbol: "LUSD",
    name: "LUSD Stablecoin",
    decimals: 18,
    marketCap: 1.1744690840702192e6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/0590b6f0-ea78-4d6c-97be-2c60bbe8723d.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x05b1a995acbd0855b351774294476a86a40dca4c0afb4af29404840d9d76f546"
  },
  {
    chainId: 324,
    address: "0xbbeb516fb02a01611cbbe0453fe3c580d7281011",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    marketCap: 2964628941842585e-9,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/60ab839d-2e84-4a96-8fa6-3fad3f0e19ca.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x51b2483b94e2de6038509671367d5cbcf361a43e060bdd4e6e4c16c3cefd8a56"
  },
  {
    chainId: 324,
    address: "0xbe9f8c0d6f0fd7e46cdacca340747ea2f247991d",
    symbol: "IBEX",
    name: "Impermax",
    decimals: 18,
    marketCap: 108434.943831644,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/2f498c90-2362-4d41-ba7e-c4ea94be69ee.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0xec02d80e980bdfe27587b993222c98fc030d9e17d7307ca163441a14a9f61df8"
  },
  {
    chainId: 324,
    address: "0xbbd1ba24d589c319c86519646817f2f153c9b716",
    symbol: "DVF",
    name: "DeversiFi Token",
    decimals: 18,
    marketCap: 364295.45885600493,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/4eb3ff0e-b6f1-43b8-aab3-aea9573cc936.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0xeb2350171a78711269039b50311d08ba2eb2f9eaa1c5fe70750d6b81d7cfa654"
  },
  {
    chainId: 324,
    address: "0x7400793aad94c8ca801aa036357d10f5fd0ce08f",
    symbol: "cBNB",
    name: "Celer Network BNB",
    decimals: 18,
    marketCap: 42908.931409284945,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/ea1e6c58-948c-4925-a71f-4f11047236a5.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    marketCap: 336873556608e-4,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/16b24a3e-dbd3-45cf-9ff4-d0c7c4f4fa21.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0xa8f5be359d5418a641b1f93d80f0193fcb169b66be484b4500d0be81dcffe636"
  },
  {
    chainId: 324,
    address: "0x6a5279e99ca7786fb13f827fc1fb4f61684933d6",
    symbol: "cAVAX",
    name: "Celer Network AVAX",
    decimals: 18,
    marketCap: 81723.14146514701,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/ef6b1750-55f5-4d6d-9b0b-99be85f72833.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    marketCap: 12748117867579e-5,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/67c97b93-3dde-4fe2-a5ed-17eb169d4eb9.png",
    isWhitelisted: !0,
    isStable: !0,
    domainSeparator: "0xebeac0e130ad64ced1e6145e3c5218c9d9831fc603230994f7d8f5f9e8605e97"
  },
  {
    chainId: 324,
    address: "0x7bcd44c0b91be28827426f607424e1a8a02d4e69",
    symbol: "anyETH",
    name: "Multichain ETH",
    decimals: 18,
    marketCap: 18181.29649529304,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/8a859fdd-a6a4-43d6-a47c-7f9d86f1202f.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0xfc7e56298657b002b3e656400e746b7212912757",
    symbol: "zkUSD",
    name: "zkUSD Dollar",
    decimals: 6,
    marketCap: 2.6435699127841783e6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/665e69e3-03bf-468c-8969-be664503d4d3.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0xc2b13bb90e33f1e191b8aa8f44ce11534d5698e3",
    symbol: "COMBO",
    name: "Furucombo",
    decimals: 18,
    marketCap: 2036.5403544653616,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/e9ed8197-943a-4fd4-b16f-e07637e76573.webp",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x058f13819e1410e3777159ed31094c4778496680f911cff5c343f3cc633b3831"
  },
  {
    chainId: 324,
    address: "0x8e86e46278518efc1c5ced245cba2c7e3ef11557",
    symbol: "USD+",
    name: "USD+",
    decimals: 6,
    marketCap: 686803.0158171001,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/dffb121f-5f4a-408a-a694-859f5730dd37.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 324,
    address: "0x0e97c7a0f8b2c9885c8ac9fc6136e829cbc21d42",
    symbol: "MUTE",
    name: "Mute.io",
    decimals: 18,
    marketCap: 5334053761972001e-9,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/9b6357d5-3235-4e80-a686-048b7778ebc0.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x691b85dbd87a6a44499a02fc5a9d5c992b482a84345fb75d70f5e32bb842470b"
  },
  {
    chainId: 324,
    address: "0x85d84c774cf8e9ff85342684b0e795df72a24908",
    symbol: "VC",
    name: "Velocore",
    decimals: 18,
    marketCap: 2.0765816038870001e6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/66a39c5e-7894-4300-81d1-d24e7d50de03.svg",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 324,
    address: "0xd63ef5e9c628c8a0e8984cdfb7444aee44b09044",
    symbol: "GOVI",
    name: "GOVI",
    decimals: 18,
    marketCap: 553080.3652648781,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/a92c9002-6b77-48aa-a22e-cde99532da11.webp",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x150d2c436b3859701a5685235d1cbff9d1ff4456d306abdab0b9747ffcadf945"
  },
  {
    chainId: 324,
    address: "0x32fd44bb869620c0ef993754c8a00be67c464806",
    symbol: "rETH",
    name: "Rocket Pool ETH",
    decimals: 18,
    marketCap: 653933.9128312399,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/199a1b98-39c1-4fb3-8347-72c716d8df9e.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x0691012c48834d1f564244c86bdf5e23add1847af0f17e8bad8640b008ad44a2"
  },
  {
    chainId: 324,
    address: "0x43cd37cc4b9ec54833c8ac362dd55e58bfd62b86",
    symbol: "crvUSD",
    name: "Curve USD Stablecoin",
    decimals: 18,
    marketCap: 15400.423188063583,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/ed42c844-6129-4bef-a765-ed2e96d08c7a.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0xac3674592fa0e2f1235f8eaf996fda4d717abf103c6c073ef08d9a28baaea16f"
  },
  {
    chainId: 324,
    address: "0xcab3f741fa54e79e34753b95717b23018332b8ac",
    symbol: "TES",
    name: "Tiny Era Shard Token",
    decimals: 18,
    marketCap: 91737800,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/02218675-10ee-473e-84d5-315c645f1c20.png",
    isWhitelisted: !0,
    isStable: !1
  }
], qp = [
  {
    chainId: 1101,
    address: "0xb23c20efce6e24acca0cef9b7b7aa196b84ec942",
    symbol: "rETH",
    name: "Rocket Pool ETH",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/98ac93d4-1b0e-44a9-977e-2dcb9aa78212.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/428c44cb-9078-4820-b864-faf20a62c56e.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 1101,
    address: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/b36e57ad-e80b-4ca9-8bf9-4719c6903d7d.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 1101,
    address: "0xff8544fed5379d9ffa8d47a74ce6b91e632ac44d",
    symbol: "FRAX",
    name: "Frax",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/1d37c3e5-22f8-421b-b0b0-6f2be8c0427d.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x83b874c1e09d316059d929da402dcb1a98e92082",
    symbol: "stMATIC",
    name: "Staked MATIC",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/583e3838-b198-4e94-8515-9d3a8302ad48.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4",
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/3005a16a-4666-45ec-bd26-7cfae555e587.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/00264d44-415a-4227-b6e1-ae273e9691bb.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0xf329bc8e21da7f278ce806e04c2266974edb1386",
    symbol: "KOKOS",
    name: "Kokonut Swap Token",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/2f4a09d6-3aeb-4881-9653-a59c8b6dd6bf.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x696c0ba235444607a1c4b93e6b34ba14928c1b60",
    symbol: "DOV",
    name: "DoveSwap",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/57b66d15-fe07-4622-bd5b-936ace8fbe61.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x3d5320821bfca19fb0b5428f2c79d63bd5246f89",
    symbol: "CRV",
    name: "Curve DAO Token",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/5fc225a6-bfda-403f-a401-2e53fd481ed7.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x120ef59b80774f02211563834d8e3b72cb1649d6",
    symbol: "BAL",
    name: "Balancer",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/f84d886f-f5d6-47b2-be70-7c004bf7d40f.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0xcf7ecee185f19e2e970a301ee37f93536ed66179",
    symbol: "frxETH",
    name: "Frax Ether",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/eafa4af9-1f2a-4314-b475-6ddbd676e6b1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x5d8cff95d7a57c0bf50b30b43c7cc0d52825d4a9",
    symbol: "wstETH",
    name: "Wrapped liquid staked Ether 2.0",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/8a389d44-fb08-4c50-9271-a5a6f8d2294c.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x0d1e753a25ebda689453309112904807625befbe",
    symbol: "Cake",
    name: "PancakeSwap Token",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/6ce32914-90a2-4941-bd0f-1e05e071c23b.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0xa2036f0538221a77a3937f1379699f44945018d0",
    symbol: "MATIC",
    name: "Matic ",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/6e5645d9-4388-4916-b87d-8e5d3952df5f.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x68286607a1d43602d880d349187c3c48c0fd05e6",
    symbol: "QUICK",
    name: "QuickSwap",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/29cf1faf-a0b2-4d80-999d-c8eb00d1a7c1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/562e7395-32fc-48c6-84b0-3c0d616245e1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 1101,
    address: "0x6a80a465409ce8d36c513129c0feea61bed579ba",
    symbol: "KNC",
    name: "Kyber Network Crystal v2",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/994c3e7e-e8ef-44f4-ac87-2c51caf4c8ca.png",
    isWhitelisted: !0,
    isStable: !1
  }
], Zp = [
  {
    chainId: 59144,
    address: "0x3b2f62d42db19b30588648bf1c184865d4c3b1d6",
    symbol: "KNC",
    name: "Kyber Network Crystal v2",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/85a7985a-5597-4146-a1cf-07b9866044d9.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/acf6daf5-5e4f-4b0d-8038-41ea99b4b593.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 59144,
    address: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/e82833f8-6b21-44f1-869b-e7c1a1af2f93.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0xb448ec505c924944ca8b2c55ef05c299ee0781df",
    symbol: "axlKNC",
    name: "Axelar Wrapped KNC",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/62350353-4882-4887-90de-6b459fab5cf6.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x23ee2343b892b1bb63503a4fabc840e0e2c6810f",
    symbol: "AXL",
    name: "Axelar",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/94da0e0e-0c6a-4b61-af40-dbb19d6674c4.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0xf3b001d64c656e30a62fbaaca003b1336b4ce12a",
    symbol: "MAI",
    name: "Mai Stablecoin",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/33784adb-5f93-49ed-b834-768a73ec3d88.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x88dfaaabaf06f3a41d2606ea98bc8eda109abebb",
    symbol: "axlWMAI",
    name: "Axelar Wrapped WMAI",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/56b4ab0e-f561-416a-ac76-e29d91ce0ed1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x7f5373ae26c3e8ffc4c77b7255df7ec1a9af52a6",
    symbol: "axlUSDT",
    name: "Axelar Wrapped USDT",
    decimals: 6,
    marketCap: 15824.774,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/a38192ff-8deb-4957-b407-da6ba650d756.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0xc826431c46d9ffdf92967202b38c3b0a0b665169b64c4381d21f8e4de32f2c71"
  },
  {
    chainId: 59144,
    address: "0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5",
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/be4ccf88-81ca-4c5d-a87c-ba722b19a17b.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 59144,
    address: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/c18aaad3-016f-49e1-aff5-93968e4c001d.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 59144,
    address: "0xeb466342c4d449bc9f53a865d5cb90586f405215",
    symbol: "axlUSDC",
    name: "Axelar Wrapped USDC",
    decimals: 6,
    marketCap: 125189.84477999998,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/490c5441-6af5-4951-a1db-54d39d4ff01f.png",
    isWhitelisted: !0,
    isStable: !0,
    domainSeparator: "0x2cf46165b05bdd11ae7e0e842c4ce0d6db93ea5c0eb93a1fdfb831a370681a0b"
  },
  {
    chainId: 59144,
    address: "0x0e5f2ee8c29e7ebc14e45da7ff90566d8c407db7",
    symbol: "HAPI",
    name: "HAPI",
    decimals: 18,
    marketCap: 20690.82009977257,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/2a5ae219-3a0f-4be6-951d-2d7b3043c2b4.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x5c3b327e5be62247ba0c64a29458a7e438804f01f6c70ab444d1652b485eb7cd"
  },
  {
    chainId: 59144,
    address: "0xf5c6825015280cdfd0b56903f9f8b5a2233476f5",
    symbol: "BNB",
    name: "Binance Coin",
    decimals: 18,
    marketCap: 157869.04636699997,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/723ef9bc-107b-4755-b7c2-87c0fa0b2b24.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    marketCap: 3053320811552e-6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/e7f03c04-eeea-443e-a4d8-c7855db5277d.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x66627f389ae46d881773b7131139b2411980e09e",
    symbol: "deUSDC",
    name: "DeBridge USD Coin",
    decimals: 6,
    marketCap: 53255.85113925467,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/44d6b1c5-c974-4476-8b0e-fbfde81c2a00.png",
    isWhitelisted: !0,
    isStable: !0,
    domainSeparator: "0x760bc757995bbaaa3abc07b104947e47a78c617803d8c4b49a04cabb2e84ad2a"
  },
  {
    chainId: 59144,
    address: "0x7d43aabc515c356145049227cee54b608342c0ad",
    symbol: "BUSD",
    name: "Binance USD",
    decimals: 18,
    marketCap: 2.2381548631100003e6,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/3597fcd8-a26a-4813-99e5-7ea1b6d685fe.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 59144,
    address: "0x265b25e22bcd7f10a5bd6e6410f10537cc7567e8",
    symbol: "MATIC",
    name: "Matic Token",
    decimals: 18,
    marketCap: 193295.4884923,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/4a116471-cc31-4764-97f7-cdd957da4b9f.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x5471ea8f739dd37e9b81be9c5c77754d8aa953e4",
    symbol: "AVAX",
    name: "Avalanche",
    decimals: 18,
    marketCap: 64390.449010000004,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/52459c77-6a4c-4655-9c9f-aafa3a48b9f1.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 59144,
    address: "0x6c6470898882b65e0275723d883a0d877aade43f",
    symbol: "deUSDT",
    name: "DeBridge Tether USD",
    decimals: 6,
    marketCap: 17536.347239503928,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/c22978cd-6d27-4440-bd53-883ab50c31c3.png",
    isWhitelisted: !0,
    isStable: !0,
    domainSeparator: "0x152f6e976e71fc881e3ae0630a312012aa17885edabf01a5dd6b4fbcb1f38091"
  }
], Yp = [
  {
    chainId: 8453,
    address: "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca",
    symbol: "USDbC",
    name: "USD Base Coin",
    decimals: 6,
    marketCap: 60331456,
    logoURI: "https://basescan.org/token/images/usdbc_ofc_32.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 8453,
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    marketCap: 538134464483502e-7,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/2c73c292-344c-4daf-9a82-0e081b0f916b1692777707948.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22",
    symbol: "cbETH",
    name: "Coinbase Wrapped Staked ETH",
    decimals: 18,
    marketCap: 1647133849490205e-8,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/55f87238-fa59-42b3-8d27-edc4159e53281693005558215.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    marketCap: 16061205,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/b1fbd5ca-2a9a-48cf-b35c-7d2069ce6fc31693005268649.png",
    isWhitelisted: !0,
    isStable: !0
  },
  {
    chainId: 8453,
    address: "0xeb466342c4d449bc9f53a865d5cb90586f405215",
    symbol: "axlUSDC",
    name: "Axelar Wrapped USDC",
    decimals: 6,
    marketCap: 78116695e-1,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/398ee553-1929-4e2d-b5e4-f5534bbd2ed71693005326820.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x0004c43ad6dfda1dbc91908af2e9fce1d16f5982a04b2068519c74ce6cfaeae2"
  },
  {
    chainId: 8453,
    address: "0x6c47669ce25f01e64cef604e43d8fa8c42938fb1",
    symbol: "SHIA",
    name: "SHIA",
    decimals: 18,
    marketCap: 6970207716171388e-9,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/c6573721-c364-4f91-9c5f-79b5ff5e792e1692800003476.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x1dd2d631c92b1acdfcdd51a0f7145a50130050c4",
    symbol: "ALB",
    name: "AlienBase Token",
    decimals: 18,
    marketCap: 1877087052392568e-9,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/8226867d-cb9b-4631-b96a-db26c39701de1693005396291.png",
    isWhitelisted: !0,
    isStable: !1,
    domainSeparator: "0x17308a01bfc3d0e2f1ea4af8811e9d8f65209c5f7b480a0a6f793b29bffd1ae1"
  },
  {
    chainId: 8453,
    address: "0x940181a94a35a4569e4529a3cdfb74e38fd98631",
    symbol: "AERO",
    name: "Aerodrome",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/fb512643-cd38-47e7-b1a4-3d9d0bc42e1b1693380383389.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x6653dd4b92a0e5bf8ae570a98906d9d6fd2eec09",
    symbol: "RCKT",
    name: "RocketSwap",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/ad6634e2-db69-4c0f-a40d-0f4b03a966c51693636017157.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xbd2dbb8ecea9743ca5b16423b4eaa26bdcfe5ed2",
    symbol: "SYNTH",
    name: "Synth Token",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/6d030d67-99f3-4960-8676-81ccb1fbeb9c1693636119373.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8",
    symbol: "BALD",
    name: "Bald",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/bba83106-836c-4878-a85b-20a7e6b8fe2d1693635264537.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x78a087d713be963bf307b18f2ff8122ef9a63ae9",
    symbol: "BSWAP",
    name: "Baseswap Token",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/f8fccf89-0cf3-42df-996e-a3a2cd5f35ed1693634347023.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x9e1028f5f1d5ede59748ffcee5532509976840e0",
    symbol: "COMP",
    name: "Compound",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/83272afa-ee77-4975-a395-09dd3846ec721693636665263.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xb79dd08ea68a908a97220c76d19a6aa9cbde4376",
    symbol: "USD+",
    name: "USD+",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/6159e1ea-4263-4b31-9f01-201fec295efb1693635728057.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x34ccb1fec9e6af1b3aa6ffd737392dfa2f29843a",
    symbol: "Fren Pet",
    name: "Fren Pet",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/922d1a89-5d0f-48f3-8a55-41ad080dc17e1693634737491.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xbf1aea8670d2528e08334083616dd9c5f3b087ae",
    symbol: "MAI",
    name: "Mai Stablecoin",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/4ac247da-c433-41ec-9a71-d0531562a50f1693722343904.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/90bc5afa-3ea2-4cb3-8e76-9d4dff085b761693939652735.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x65a2508c429a6078a7bc2f7df81ab575bd9d9275",
    symbol: "DAI+",
    name: "DAI+",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/b25bcc5c-3efe-4e77-a09b-4249d44c22b21693985070822.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44",
    symbol: "DEUS",
    name: "DEUS",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/d7a96415-ef02-400f-bfe4-68053c7af91f1693985235671.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0x4621b7a9c75199271f773ebd9a499dbd165c3191",
    symbol: "DOLA",
    name: "Dola USD Stablecoin",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/32b8ea20-0803-48ac-aa9b-b391c281d2681693985276493.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xa334884bf6b0a066d553d19e507315e839409e62",
    symbol: "ERN",
    name: "Ethos Reserve Note",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/d4f6bdef-b616-4a28-9244-fbb29012e9131693985648123.png",
    isWhitelisted: !0,
    isStable: !1
  },
  {
    chainId: 8453,
    address: "0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc",
    symbol: "HOP",
    name: "Hop",
    decimals: 18,
    marketCap: 0,
    logoURI: "https://storage.googleapis.com/ks-setting-1d682dca/2c2dad40-c4e9-41b4-95de-c3f1e82e263e1693985693950.png",
    isWhitelisted: !0,
    isStable: !1
  }
];
var Dd = /* @__PURE__ */ ((t) => (t[t.UNDERLAYER = -1] = "UNDERLAYER", t[t.OVERLAY = 100] = "OVERLAY", t[t.DIALOG = 1e3] = "DIALOG", t[t.TOOLTIP = 2e3] = "TOOLTIP", t))(Dd || {});
const tt = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", Yr = (t) => ({
  name: "Ether",
  decimals: 18,
  symbol: "ETH",
  address: tt,
  chainId: t,
  logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
}), Xp = (t) => ({
  name: "Godz",
  decimals: 18,
  symbol: "GODZ",
  address: tt,
  chainId: t,
  logoURI: "https://kenhcine.cgv.vn/media/catalog/product/c/g/cgv_godzilla.jpg"
}), Ti = {
  1: Yr(1),
  109: Xp(109),
  137: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    address: tt,
    chainId: 137,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
  },
  56: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
    address: tt,
    chainId: 56,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  },
  43114: {
    name: "AVAX",
    symbol: "AVAX",
    decimals: 18,
    address: tt,
    chainId: 43114,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
  },
  250: {
    name: "Fantom",
    symbol: "FTM",
    decimals: 18,
    address: tt,
    chainId: 250,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png"
  },
  25: {
    name: "Cronos",
    symbol: "CRO",
    decimals: 18,
    address: tt,
    chainId: 25,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png"
  },
  42161: Yr(42161),
  199: {
    name: "BTT",
    symbol: "BTT",
    decimals: 18,
    address: tt,
    chainId: 199,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16086.png"
  },
  106: {
    name: "VLX",
    symbol: "VLX",
    decimals: 18,
    address: tt,
    chainId: 106,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4747.png"
  },
  1313161554: Yr(1313161554),
  42262: {
    name: "ROSE",
    symbol: "ROSE",
    decimals: 18,
    address: tt,
    chainId: 42262,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7653.png"
  },
  10: Yr(10),
  59144: Yr(59144),
  1101: Yr(1101),
  324: Yr(324),
  8453: Yr(8453)
}, Sn = {
  1: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    chainId: 1,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  137: {
    name: "Wrapped Matic",
    decimals: 18,
    symbol: "WMATIC",
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    chainId: 137,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
  },
  56: {
    name: "Wrapped BNB",
    decimals: 18,
    symbol: "WBNB",
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    chainId: 56,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  },
  43114: {
    name: "Wrapped AVAX",
    decimals: 18,
    symbol: "WAVAX",
    address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    chainId: 43114,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
  },
  250: {
    name: "Wrapped Fantom",
    decimals: 18,
    symbol: "WFTM",
    address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    chainId: 250,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png"
  },
  25: {
    name: "Wrapped CRO",
    decimals: 18,
    symbol: "WCRO",
    address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
    chainId: 25,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png"
  },
  42161: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    chainId: 42161,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  199: {
    name: "Wrapped BitTorrent",
    decimals: 18,
    symbol: "WBTT",
    address: "0x8D193c6efa90BCFf940A98785d1Ce9D093d3DC8A",
    chainId: 199,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/16086.png"
  },
  106: {
    name: "Wrapped VLX",
    decimals: 18,
    symbol: "WVLX",
    address: "0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126",
    chainId: 106,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/4747.png"
  },
  1313161554: {
    name: "Wrapped ETH",
    decimals: 18,
    symbol: "WETH",
    address: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
    chainId: 1313161554,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  42262: {
    name: "Wrapped ROSE",
    decimals: 18,
    symbol: "WROSE",
    address: "0x21C718C22D52d0F3a789b752D4c2fD5908a8A733",
    chainId: 42262,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7653.png"
  },
  10: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    chainId: 10,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  59144: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    chainId: 59144,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  1101: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
    chainId: 1101,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  324: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
    chainId: 324,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  8453: {
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    chainId: 8453,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  }
}, Jp = {
  1: Pp,
  137: Up,
  56: Op,
  43114: Np,
  250: Lp,
  25: jp,
  42161: Wp,
  199: Hp,
  106: zp,
  1313161554: $p,
  42262: Vp,
  10: Gp,
  59144: Zp,
  1101: qp,
  324: Kp,
  8453: Yp
}, Qp = {
  1: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
  137: "0xed386Fe855C1EFf2f843B910923Dd8846E45C5A4",
  56: "0xed386Fe855C1EFf2f843B910923Dd8846E45C5A4",
  43114: "0xF2FD8219609E28C61A998cc534681f95D2740f61",
  250: "0x878dFE971d44e9122048308301F540910Bbd934c",
  25: "0x63Abb9973506189dC3741f61d25d4ed508151E6d",
  42161: "0x80C7DD17B01855a6D2347444a0FCC36136a314de",
  199: "0xBF69a56D35B8d6f5A8e0e96B245a72F735751e54",
  106: "0x1877Ec0770901cc6886FDA7E7525a78c2Ed4e975",
  1313161554: "0xBF69a56D35B8d6f5A8e0e96B245a72F735751e54",
  42262: "0xBF69a56D35B8d6f5A8e0e96B245a72F735751e54",
  10: "0xD9bfE9979e9CA4b2fe84bA5d4Cf963bBcB376974",
  59144: "0xcA11bde05977b3631167028862bE2a173976CA11",
  1101: "0xcA11bde05977b3631167028862bE2a173976CA11",
  324: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
  8453: "0xcA11bde05977b3631167028862bE2a173976CA11",
  109: "0xda4714fee90ad7de50bc185ccd06b175d23906c1"
}, ko = {
  1: "ethereum",
  137: "polygon",
  56: "bsc",
  43114: "avalanche",
  250: "fantom",
  25: "cronos",
  42161: "arbitrum",
  199: "bttc",
  106: "velas",
  1313161554: "aurora",
  42262: "oasis",
  10: "optimism",
  59144: "linea",
  1101: "polygon-zkevm",
  324: "zksync",
  8453: "base"
}, Ha = {
  1: "https://etherscan.io",
  137: "https://polygonscan.com",
  56: "https://bscscan.com",
  43114: "https://snowtrace.io",
  250: "https://ftmscan.com",
  25: "https://cronoscan.com",
  42161: "https://arbiscan.io",
  199: "https://bttcscan.com",
  106: "https://evmexplorer.velas.com",
  1313161554: "https://aurorascan.dev",
  42262: "https://www.oasisscan.com",
  10: "https://optimistic.etherscan.io",
  59144: "https://lineascan.build",
  1101: "https://zkevm.polygonscan.com",
  324: "https://explorer.zksync.io",
  8453: "https://basescan.org"
}, So = Object.keys(Ha);
var mr = {};
const e3 = /* @__PURE__ */ ht(Cu), t3 = /* @__PURE__ */ ht(nh), r3 = /* @__PURE__ */ ht(Lh), n3 = /* @__PURE__ */ ht(_m), a3 = /* @__PURE__ */ ht(_1), i3 = /* @__PURE__ */ ht(vu), s3 = /* @__PURE__ */ ht(Km), o3 = /* @__PURE__ */ ht(sp), c3 = /* @__PURE__ */ ht(q1), f3 = /* @__PURE__ */ ht(B1), V0 = /* @__PURE__ */ ht(Pm), d3 = /* @__PURE__ */ ht(Dp), l3 = /* @__PURE__ */ ht(Xm), h3 = /* @__PURE__ */ ht(W1), u3 = /* @__PURE__ */ ht(Y1), m3 = /* @__PURE__ */ ht(um), G0 = /* @__PURE__ */ ht(Uh), p3 = /* @__PURE__ */ ht(Am), b3 = /* @__PURE__ */ ht(Rp), g3 = /* @__PURE__ */ ht(hp), x3 = /* @__PURE__ */ ht(vp);
(function(t) {
  var e = Gt && Gt.__createBinding || (Object.create ? function($, ie, y, s) {
    s === void 0 && (s = y), Object.defineProperty($, s, { enumerable: !0, get: function() {
      return ie[y];
    } });
  } : function($, ie, y, s) {
    s === void 0 && (s = y), $[s] = ie[y];
  }), r = Gt && Gt.__setModuleDefault || (Object.create ? function($, ie) {
    Object.defineProperty($, "default", { enumerable: !0, value: ie });
  } : function($, ie) {
    $.default = ie;
  }), n = Gt && Gt.__importStar || function($) {
    if ($ && $.__esModule)
      return $;
    var ie = {};
    if ($ != null)
      for (var y in $)
        y !== "default" && Object.prototype.hasOwnProperty.call($, y) && e(ie, $, y);
    return r(ie, $), ie;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formatBytes32String = t.Utf8ErrorFuncs = t.toUtf8String = t.toUtf8CodePoints = t.toUtf8Bytes = t._toEscapedUtf8String = t.nameprep = t.hexDataSlice = t.hexDataLength = t.hexZeroPad = t.hexValue = t.hexStripZeros = t.hexConcat = t.isHexString = t.hexlify = t.base64 = t.base58 = t.TransactionDescription = t.LogDescription = t.Interface = t.SigningKey = t.HDNode = t.defaultPath = t.isBytesLike = t.isBytes = t.zeroPad = t.stripZeros = t.concat = t.arrayify = t.shallowCopy = t.resolveProperties = t.getStatic = t.defineReadOnly = t.deepCopy = t.checkProperties = t.poll = t.fetchJson = t._fetchData = t.RLP = t.Logger = t.checkResultErrors = t.FormatTypes = t.ParamType = t.FunctionFragment = t.EventFragment = t.ErrorFragment = t.ConstructorFragment = t.Fragment = t.defaultAbiCoder = t.AbiCoder = void 0, t.Indexed = t.Utf8ErrorReason = t.UnicodeNormalizationForm = t.SupportedAlgorithm = t.mnemonicToSeed = t.isValidMnemonic = t.entropyToMnemonic = t.mnemonicToEntropy = t.getAccountPath = t.verifyTypedData = t.verifyMessage = t.recoverPublicKey = t.computePublicKey = t.recoverAddress = t.computeAddress = t.getJsonWalletAddress = t.TransactionTypes = t.serializeTransaction = t.parseTransaction = t.accessListify = t.joinSignature = t.splitSignature = t.soliditySha256 = t.solidityKeccak256 = t.solidityPack = t.shuffled = t.randomBytes = t.sha512 = t.sha256 = t.ripemd160 = t.keccak256 = t.computeHmac = t.commify = t.parseUnits = t.formatUnits = t.parseEther = t.formatEther = t.isAddress = t.getCreate2Address = t.getContractAddress = t.getIcapAddress = t.getAddress = t._TypedDataEncoder = t.id = t.isValidName = t.namehash = t.hashMessage = t.dnsEncode = t.parseBytes32String = void 0;
  var a = e3;
  Object.defineProperty(t, "AbiCoder", { enumerable: !0, get: function() {
    return a.AbiCoder;
  } }), Object.defineProperty(t, "checkResultErrors", { enumerable: !0, get: function() {
    return a.checkResultErrors;
  } }), Object.defineProperty(t, "ConstructorFragment", { enumerable: !0, get: function() {
    return a.ConstructorFragment;
  } }), Object.defineProperty(t, "defaultAbiCoder", { enumerable: !0, get: function() {
    return a.defaultAbiCoder;
  } }), Object.defineProperty(t, "ErrorFragment", { enumerable: !0, get: function() {
    return a.ErrorFragment;
  } }), Object.defineProperty(t, "EventFragment", { enumerable: !0, get: function() {
    return a.EventFragment;
  } }), Object.defineProperty(t, "FormatTypes", { enumerable: !0, get: function() {
    return a.FormatTypes;
  } }), Object.defineProperty(t, "Fragment", { enumerable: !0, get: function() {
    return a.Fragment;
  } }), Object.defineProperty(t, "FunctionFragment", { enumerable: !0, get: function() {
    return a.FunctionFragment;
  } }), Object.defineProperty(t, "Indexed", { enumerable: !0, get: function() {
    return a.Indexed;
  } }), Object.defineProperty(t, "Interface", { enumerable: !0, get: function() {
    return a.Interface;
  } }), Object.defineProperty(t, "LogDescription", { enumerable: !0, get: function() {
    return a.LogDescription;
  } }), Object.defineProperty(t, "ParamType", { enumerable: !0, get: function() {
    return a.ParamType;
  } }), Object.defineProperty(t, "TransactionDescription", { enumerable: !0, get: function() {
    return a.TransactionDescription;
  } });
  var i = t3;
  Object.defineProperty(t, "getAddress", { enumerable: !0, get: function() {
    return i.getAddress;
  } }), Object.defineProperty(t, "getCreate2Address", { enumerable: !0, get: function() {
    return i.getCreate2Address;
  } }), Object.defineProperty(t, "getContractAddress", { enumerable: !0, get: function() {
    return i.getContractAddress;
  } }), Object.defineProperty(t, "getIcapAddress", { enumerable: !0, get: function() {
    return i.getIcapAddress;
  } }), Object.defineProperty(t, "isAddress", { enumerable: !0, get: function() {
    return i.isAddress;
  } });
  var c = n(r3);
  t.base64 = c;
  var d = n3;
  Object.defineProperty(t, "base58", { enumerable: !0, get: function() {
    return d.Base58;
  } });
  var m = a3;
  Object.defineProperty(t, "arrayify", { enumerable: !0, get: function() {
    return m.arrayify;
  } }), Object.defineProperty(t, "concat", { enumerable: !0, get: function() {
    return m.concat;
  } }), Object.defineProperty(t, "hexConcat", { enumerable: !0, get: function() {
    return m.hexConcat;
  } }), Object.defineProperty(t, "hexDataSlice", { enumerable: !0, get: function() {
    return m.hexDataSlice;
  } }), Object.defineProperty(t, "hexDataLength", { enumerable: !0, get: function() {
    return m.hexDataLength;
  } }), Object.defineProperty(t, "hexlify", { enumerable: !0, get: function() {
    return m.hexlify;
  } }), Object.defineProperty(t, "hexStripZeros", { enumerable: !0, get: function() {
    return m.hexStripZeros;
  } }), Object.defineProperty(t, "hexValue", { enumerable: !0, get: function() {
    return m.hexValue;
  } }), Object.defineProperty(t, "hexZeroPad", { enumerable: !0, get: function() {
    return m.hexZeroPad;
  } }), Object.defineProperty(t, "isBytes", { enumerable: !0, get: function() {
    return m.isBytes;
  } }), Object.defineProperty(t, "isBytesLike", { enumerable: !0, get: function() {
    return m.isBytesLike;
  } }), Object.defineProperty(t, "isHexString", { enumerable: !0, get: function() {
    return m.isHexString;
  } }), Object.defineProperty(t, "joinSignature", { enumerable: !0, get: function() {
    return m.joinSignature;
  } }), Object.defineProperty(t, "zeroPad", { enumerable: !0, get: function() {
    return m.zeroPad;
  } }), Object.defineProperty(t, "splitSignature", { enumerable: !0, get: function() {
    return m.splitSignature;
  } }), Object.defineProperty(t, "stripZeros", { enumerable: !0, get: function() {
    return m.stripZeros;
  } });
  var b = i3;
  Object.defineProperty(t, "_TypedDataEncoder", { enumerable: !0, get: function() {
    return b._TypedDataEncoder;
  } }), Object.defineProperty(t, "dnsEncode", { enumerable: !0, get: function() {
    return b.dnsEncode;
  } }), Object.defineProperty(t, "hashMessage", { enumerable: !0, get: function() {
    return b.hashMessage;
  } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() {
    return b.id;
  } }), Object.defineProperty(t, "isValidName", { enumerable: !0, get: function() {
    return b.isValidName;
  } }), Object.defineProperty(t, "namehash", { enumerable: !0, get: function() {
    return b.namehash;
  } });
  var v = s3;
  Object.defineProperty(t, "defaultPath", { enumerable: !0, get: function() {
    return v.defaultPath;
  } }), Object.defineProperty(t, "entropyToMnemonic", { enumerable: !0, get: function() {
    return v.entropyToMnemonic;
  } }), Object.defineProperty(t, "getAccountPath", { enumerable: !0, get: function() {
    return v.getAccountPath;
  } }), Object.defineProperty(t, "HDNode", { enumerable: !0, get: function() {
    return v.HDNode;
  } }), Object.defineProperty(t, "isValidMnemonic", { enumerable: !0, get: function() {
    return v.isValidMnemonic;
  } }), Object.defineProperty(t, "mnemonicToEntropy", { enumerable: !0, get: function() {
    return v.mnemonicToEntropy;
  } }), Object.defineProperty(t, "mnemonicToSeed", { enumerable: !0, get: function() {
    return v.mnemonicToSeed;
  } });
  var A = o3;
  Object.defineProperty(t, "getJsonWalletAddress", { enumerable: !0, get: function() {
    return A.getJsonWalletAddress;
  } });
  var S = c3;
  Object.defineProperty(t, "keccak256", { enumerable: !0, get: function() {
    return S.keccak256;
  } });
  var D = f3;
  Object.defineProperty(t, "Logger", { enumerable: !0, get: function() {
    return D.Logger;
  } });
  var B = V0;
  Object.defineProperty(t, "computeHmac", { enumerable: !0, get: function() {
    return B.computeHmac;
  } }), Object.defineProperty(t, "ripemd160", { enumerable: !0, get: function() {
    return B.ripemd160;
  } }), Object.defineProperty(t, "sha256", { enumerable: !0, get: function() {
    return B.sha256;
  } }), Object.defineProperty(t, "sha512", { enumerable: !0, get: function() {
    return B.sha512;
  } });
  var F = d3;
  Object.defineProperty(t, "solidityKeccak256", { enumerable: !0, get: function() {
    return F.keccak256;
  } }), Object.defineProperty(t, "solidityPack", { enumerable: !0, get: function() {
    return F.pack;
  } }), Object.defineProperty(t, "soliditySha256", { enumerable: !0, get: function() {
    return F.sha256;
  } });
  var k = l3;
  Object.defineProperty(t, "randomBytes", { enumerable: !0, get: function() {
    return k.randomBytes;
  } }), Object.defineProperty(t, "shuffled", { enumerable: !0, get: function() {
    return k.shuffled;
  } });
  var T = h3;
  Object.defineProperty(t, "checkProperties", { enumerable: !0, get: function() {
    return T.checkProperties;
  } }), Object.defineProperty(t, "deepCopy", { enumerable: !0, get: function() {
    return T.deepCopy;
  } }), Object.defineProperty(t, "defineReadOnly", { enumerable: !0, get: function() {
    return T.defineReadOnly;
  } }), Object.defineProperty(t, "getStatic", { enumerable: !0, get: function() {
    return T.getStatic;
  } }), Object.defineProperty(t, "resolveProperties", { enumerable: !0, get: function() {
    return T.resolveProperties;
  } }), Object.defineProperty(t, "shallowCopy", { enumerable: !0, get: function() {
    return T.shallowCopy;
  } });
  var U = n(u3);
  t.RLP = U;
  var H = m3;
  Object.defineProperty(t, "computePublicKey", { enumerable: !0, get: function() {
    return H.computePublicKey;
  } }), Object.defineProperty(t, "recoverPublicKey", { enumerable: !0, get: function() {
    return H.recoverPublicKey;
  } }), Object.defineProperty(t, "SigningKey", { enumerable: !0, get: function() {
    return H.SigningKey;
  } });
  var P = G0;
  Object.defineProperty(t, "formatBytes32String", { enumerable: !0, get: function() {
    return P.formatBytes32String;
  } }), Object.defineProperty(t, "nameprep", { enumerable: !0, get: function() {
    return P.nameprep;
  } }), Object.defineProperty(t, "parseBytes32String", { enumerable: !0, get: function() {
    return P.parseBytes32String;
  } }), Object.defineProperty(t, "_toEscapedUtf8String", { enumerable: !0, get: function() {
    return P._toEscapedUtf8String;
  } }), Object.defineProperty(t, "toUtf8Bytes", { enumerable: !0, get: function() {
    return P.toUtf8Bytes;
  } }), Object.defineProperty(t, "toUtf8CodePoints", { enumerable: !0, get: function() {
    return P.toUtf8CodePoints;
  } }), Object.defineProperty(t, "toUtf8String", { enumerable: !0, get: function() {
    return P.toUtf8String;
  } }), Object.defineProperty(t, "Utf8ErrorFuncs", { enumerable: !0, get: function() {
    return P.Utf8ErrorFuncs;
  } });
  var R = p3;
  Object.defineProperty(t, "accessListify", { enumerable: !0, get: function() {
    return R.accessListify;
  } }), Object.defineProperty(t, "computeAddress", { enumerable: !0, get: function() {
    return R.computeAddress;
  } }), Object.defineProperty(t, "parseTransaction", { enumerable: !0, get: function() {
    return R.parse;
  } }), Object.defineProperty(t, "recoverAddress", { enumerable: !0, get: function() {
    return R.recoverAddress;
  } }), Object.defineProperty(t, "serializeTransaction", { enumerable: !0, get: function() {
    return R.serialize;
  } }), Object.defineProperty(t, "TransactionTypes", { enumerable: !0, get: function() {
    return R.TransactionTypes;
  } });
  var W = b3;
  Object.defineProperty(t, "commify", { enumerable: !0, get: function() {
    return W.commify;
  } }), Object.defineProperty(t, "formatEther", { enumerable: !0, get: function() {
    return W.formatEther;
  } }), Object.defineProperty(t, "parseEther", { enumerable: !0, get: function() {
    return W.parseEther;
  } }), Object.defineProperty(t, "formatUnits", { enumerable: !0, get: function() {
    return W.formatUnits;
  } }), Object.defineProperty(t, "parseUnits", { enumerable: !0, get: function() {
    return W.parseUnits;
  } });
  var Z = g3;
  Object.defineProperty(t, "verifyMessage", { enumerable: !0, get: function() {
    return Z.verifyMessage;
  } }), Object.defineProperty(t, "verifyTypedData", { enumerable: !0, get: function() {
    return Z.verifyTypedData;
  } });
  var Y = x3;
  Object.defineProperty(t, "_fetchData", { enumerable: !0, get: function() {
    return Y._fetchData;
  } }), Object.defineProperty(t, "fetchJson", { enumerable: !0, get: function() {
    return Y.fetchJson;
  } }), Object.defineProperty(t, "poll", { enumerable: !0, get: function() {
    return Y.poll;
  } });
  var ne = V0;
  Object.defineProperty(t, "SupportedAlgorithm", { enumerable: !0, get: function() {
    return ne.SupportedAlgorithm;
  } });
  var ce = G0;
  Object.defineProperty(t, "UnicodeNormalizationForm", { enumerable: !0, get: function() {
    return ce.UnicodeNormalizationForm;
  } }), Object.defineProperty(t, "Utf8ErrorReason", { enumerable: !0, get: function() {
    return ce.Utf8ErrorReason;
  } });
})(mr);
const y3 = [
  {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "guy",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "src",
        type: "address"
      },
      {
        name: "dst",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "dst",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !1,
    inputs: [],
    name: "deposit",
    outputs: [],
    payable: !0,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: !0,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "src",
        type: "address"
      },
      {
        indexed: !0,
        name: "guy",
        type: "address"
      },
      {
        indexed: !1,
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "src",
        type: "address"
      },
      {
        indexed: !0,
        name: "dst",
        type: "address"
      },
      {
        indexed: !1,
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "dst",
        type: "address"
      },
      {
        indexed: !1,
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "src",
        type: "address"
      },
      {
        indexed: !1,
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Withdrawal",
    type: "event"
  }
], Bd = [
  {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_spender",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "_spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: !0,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
], v3 = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "blockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool"
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryAggregate",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool"
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
], bs = new mr.Interface(Bd);
function Do(t) {
  try {
    return mr.getAddress(t);
  } catch {
    return !1;
  }
}
function w3(t) {
  if (navigator.clipboard && window.isSecureContext)
    return navigator.clipboard.writeText(t);
  {
    const e = document.createElement("textarea");
    return e.value = t, e.style.position = "fixed", e.style.left = "-999999px", e.style.top = "-999999px", document.body.appendChild(e), e.focus(), e.select(), new Promise((r, n) => {
      document.execCommand("copy") ? r(t) : n(), e.remove();
    });
  }
}
const K0 = (t, e) => {
  var r;
  return e.toLowerCase() === tt.toLowerCase() || e.toLowerCase() === ((r = Sn[t].address) == null ? void 0 : r.toLowerCase());
};
function A3(t, e, r) {
  return !e || !r ? !1 : K0(t, e) && K0(t, r) ? !0 : e.toLowerCase() === r.toLowerCase();
}
var Zi = { exports: {} }, xa = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q0;
function C3() {
  if (q0)
    return xa;
  q0 = 1;
  var t = _r, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, m, b) {
    var v, A = {}, S = null, D = null;
    b !== void 0 && (S = "" + b), m.key !== void 0 && (S = "" + m.key), m.ref !== void 0 && (D = m.ref);
    for (v in m)
      n.call(m, v) && !i.hasOwnProperty(v) && (A[v] = m[v]);
    if (d && d.defaultProps)
      for (v in m = d.defaultProps, m)
        A[v] === void 0 && (A[v] = m[v]);
    return { $$typeof: e, type: d, key: S, ref: D, props: A, _owner: a.current };
  }
  return xa.Fragment = r, xa.jsx = c, xa.jsxs = c, xa;
}
var ya = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z0;
function E3() {
  return Z0 || (Z0 = 1, process.env.NODE_ENV !== "production" && function() {
    var t = _r, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), B = Symbol.iterator, F = "@@iterator";
    function k(M) {
      if (M === null || typeof M != "object")
        return null;
      var ee = B && M[B] || M[F];
      return typeof ee == "function" ? ee : null;
    }
    var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function U(M) {
      {
        for (var ee = arguments.length, K = new Array(ee > 1 ? ee - 1 : 0), se = 1; se < ee; se++)
          K[se - 1] = arguments[se];
        H("error", M, K);
      }
    }
    function H(M, ee, K) {
      {
        var se = T.ReactDebugCurrentFrame, He = se.getStackAddendum();
        He !== "" && (ee += "%s", K = K.concat([He]));
        var pe = K.map(function(de) {
          return String(de);
        });
        pe.unshift("Warning: " + ee), Function.prototype.apply.call(console[M], console, pe);
      }
    }
    var P = !1, R = !1, W = !1, Z = !1, Y = !1, ne;
    ne = Symbol.for("react.module.reference");
    function ce(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === n || M === i || Y || M === a || M === b || M === v || Z || M === D || P || R || W || typeof M == "object" && M !== null && (M.$$typeof === S || M.$$typeof === A || M.$$typeof === c || M.$$typeof === d || M.$$typeof === m || M.$$typeof === ne || M.getModuleId !== void 0));
    }
    function $(M, ee, K) {
      var se = M.displayName;
      if (se)
        return se;
      var He = ee.displayName || ee.name || "";
      return He !== "" ? K + "(" + He + ")" : K;
    }
    function ie(M) {
      return M.displayName || "Context";
    }
    function y(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && U("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case b:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case d:
            var ee = M;
            return ie(ee) + ".Consumer";
          case c:
            var K = M;
            return ie(K._context) + ".Provider";
          case m:
            return $(M, M.render, "ForwardRef");
          case A:
            var se = M.displayName || null;
            return se !== null ? se : y(M.type) || "Memo";
          case S: {
            var He = M, pe = He._payload, de = He._init;
            try {
              return y(de(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var s = Object.assign, f = 0, u, g, x, w, E, l, o;
    function h() {
    }
    h.__reactDisabledLog = !0;
    function I() {
      {
        if (f === 0) {
          u = console.log, g = console.info, x = console.warn, w = console.error, E = console.group, l = console.groupCollapsed, o = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        f++;
      }
    }
    function p() {
      {
        if (f--, f === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: s({}, M, {
              value: u
            }),
            info: s({}, M, {
              value: g
            }),
            warn: s({}, M, {
              value: x
            }),
            error: s({}, M, {
              value: w
            }),
            group: s({}, M, {
              value: E
            }),
            groupCollapsed: s({}, M, {
              value: l
            }),
            groupEnd: s({}, M, {
              value: o
            })
          });
        }
        f < 0 && U("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = T.ReactCurrentDispatcher, N;
    function _(M, ee, K) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (He) {
            var se = He.stack.trim().match(/\n( *(at )?)/);
            N = se && se[1] || "";
          }
        return `
` + N + M;
      }
    }
    var j = !1, X;
    {
      var z = typeof WeakMap == "function" ? WeakMap : Map;
      X = new z();
    }
    function O(M, ee) {
      if (!M || j)
        return "";
      {
        var K = X.get(M);
        if (K !== void 0)
          return K;
      }
      var se;
      j = !0;
      var He = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = C.current, C.current = null, I();
      try {
        if (ee) {
          var de = function() {
            throw Error();
          };
          if (Object.defineProperty(de.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(de, []);
            } catch (At) {
              se = At;
            }
            Reflect.construct(M, [], de);
          } else {
            try {
              de.call();
            } catch (At) {
              se = At;
            }
            M.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (At) {
            se = At;
          }
          M();
        }
      } catch (At) {
        if (At && se && typeof At.stack == "string") {
          for (var Fe = At.stack.split(`
`), et = se.stack.split(`
`), Ze = Fe.length - 1, Ye = et.length - 1; Ze >= 1 && Ye >= 0 && Fe[Ze] !== et[Ye]; )
            Ye--;
          for (; Ze >= 1 && Ye >= 0; Ze--, Ye--)
            if (Fe[Ze] !== et[Ye]) {
              if (Ze !== 1 || Ye !== 1)
                do
                  if (Ze--, Ye--, Ye < 0 || Fe[Ze] !== et[Ye]) {
                    var ot = `
` + Fe[Ze].replace(" at new ", " at ");
                    return M.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", M.displayName)), typeof M == "function" && X.set(M, ot), ot;
                  }
                while (Ze >= 1 && Ye >= 0);
              break;
            }
        }
      } finally {
        j = !1, C.current = pe, p(), Error.prepareStackTrace = He;
      }
      var Tt = M ? M.displayName || M.name : "", vr = Tt ? _(Tt) : "";
      return typeof M == "function" && X.set(M, vr), vr;
    }
    function we(M, ee, K) {
      return O(M, !1);
    }
    function G(M) {
      var ee = M.prototype;
      return !!(ee && ee.isReactComponent);
    }
    function V(M, ee, K) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return O(M, G(M));
      if (typeof M == "string")
        return _(M);
      switch (M) {
        case b:
          return _("Suspense");
        case v:
          return _("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case m:
            return we(M.render);
          case A:
            return V(M.type, ee, K);
          case S: {
            var se = M, He = se._payload, pe = se._init;
            try {
              return V(pe(He), ee, K);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, fe = {}, be = T.ReactDebugCurrentFrame;
    function st(M) {
      if (M) {
        var ee = M._owner, K = V(M.type, M._source, ee ? ee.type : null);
        be.setExtraStackFrame(K);
      } else
        be.setExtraStackFrame(null);
    }
    function le(M, ee, K, se, He) {
      {
        var pe = Function.call.bind($e);
        for (var de in M)
          if (pe(M, de)) {
            var Fe = void 0;
            try {
              if (typeof M[de] != "function") {
                var et = Error((se || "React class") + ": " + K + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw et.name = "Invariant Violation", et;
              }
              Fe = M[de](ee, de, se, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ze) {
              Fe = Ze;
            }
            Fe && !(Fe instanceof Error) && (st(He), U("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", K, de, typeof Fe), st(null)), Fe instanceof Error && !(Fe.message in fe) && (fe[Fe.message] = !0, st(He), U("Failed %s type: %s", K, Fe.message), st(null));
          }
      }
    }
    var ye = Array.isArray;
    function it(M) {
      return ye(M);
    }
    function ge(M) {
      {
        var ee = typeof Symbol == "function" && Symbol.toStringTag, K = ee && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return K;
      }
    }
    function te(M) {
      try {
        return Ve(M), !1;
      } catch {
        return !0;
      }
    }
    function Ve(M) {
      return "" + M;
    }
    function ve(M) {
      if (te(M))
        return U("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ge(M)), Ve(M);
    }
    var xe = T.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Ee, wt;
    wt = {};
    function me(M) {
      if ($e.call(M, "ref")) {
        var ee = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function Ie(M) {
      if ($e.call(M, "key")) {
        var ee = Object.getOwnPropertyDescriptor(M, "key").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function _t(M, ee) {
      if (typeof M.ref == "string" && xe.current && ee && xe.current.stateNode !== ee) {
        var K = y(xe.current.type);
        wt[K] || (U('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(xe.current.type), M.ref), wt[K] = !0);
      }
    }
    function Me(M, ee) {
      {
        var K = function() {
          Ce || (Ce = !0, U("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        K.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: K,
          configurable: !0
        });
      }
    }
    function _e(M, ee) {
      {
        var K = function() {
          Ee || (Ee = !0, U("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        K.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var Yt = function(M, ee, K, se, He, pe, de) {
      var Fe = {
        $$typeof: e,
        type: M,
        key: ee,
        ref: K,
        props: de,
        _owner: pe
      };
      return Fe._store = {}, Object.defineProperty(Fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.defineProperty(Fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: He
      }), Object.freeze && (Object.freeze(Fe.props), Object.freeze(Fe)), Fe;
    };
    function Re(M, ee, K, se, He) {
      {
        var pe, de = {}, Fe = null, et = null;
        K !== void 0 && (ve(K), Fe = "" + K), Ie(ee) && (ve(ee.key), Fe = "" + ee.key), me(ee) && (et = ee.ref, _t(ee, He));
        for (pe in ee)
          $e.call(ee, pe) && !nt.hasOwnProperty(pe) && (de[pe] = ee[pe]);
        if (M && M.defaultProps) {
          var Ze = M.defaultProps;
          for (pe in Ze)
            de[pe] === void 0 && (de[pe] = Ze[pe]);
        }
        if (Fe || et) {
          var Ye = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Fe && Me(de, Ye), et && _e(de, Ye);
        }
        return Yt(M, Fe, et, He, se, xe.current, de);
      }
    }
    var ke = T.ReactCurrentOwner, jt = T.ReactDebugCurrentFrame;
    function Ae(M) {
      if (M) {
        var ee = M._owner, K = V(M.type, M._source, ee ? ee.type : null);
        jt.setExtraStackFrame(K);
      } else
        jt.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Rt(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function De() {
      {
        if (ke.current) {
          var M = y(ke.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Te(M) {
      {
        if (M !== void 0) {
          var ee = M.fileName.replace(/^.*[\\\/]/, ""), K = M.lineNumber;
          return `

Check your code at ` + ee + ":" + K + ".";
        }
        return "";
      }
    }
    var Wt = {};
    function Ue(M) {
      {
        var ee = De();
        if (!ee) {
          var K = typeof M == "string" ? M : M.displayName || M.name;
          K && (ee = `

Check the top-level render call using <` + K + ">.");
        }
        return ee;
      }
    }
    function Be(M, ee) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var K = Ue(ee);
        if (Wt[K])
          return;
        Wt[K] = !0;
        var se = "";
        M && M._owner && M._owner !== ke.current && (se = " It was passed a child from " + y(M._owner.type) + "."), Ae(M), U('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, se), Ae(null);
      }
    }
    function Ht(M, ee) {
      {
        if (typeof M != "object")
          return;
        if (it(M))
          for (var K = 0; K < M.length; K++) {
            var se = M[K];
            Rt(se) && Be(se, ee);
          }
        else if (Rt(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var He = k(M);
          if (typeof He == "function" && He !== M.entries)
            for (var pe = He.call(M), de; !(de = pe.next()).done; )
              Rt(de.value) && Be(de.value, ee);
        }
      }
    }
    function Pe(M) {
      {
        var ee = M.type;
        if (ee == null || typeof ee == "string")
          return;
        var K;
        if (typeof ee == "function")
          K = ee.propTypes;
        else if (typeof ee == "object" && (ee.$$typeof === m || ee.$$typeof === A))
          K = ee.propTypes;
        else
          return;
        if (K) {
          var se = y(ee);
          le(K, M.props, "prop", se, M);
        } else if (ee.PropTypes !== void 0 && !Se) {
          Se = !0;
          var He = y(ee);
          U("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", He || "Unknown");
        }
        typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && U("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Oe(M) {
      {
        for (var ee = Object.keys(M.props), K = 0; K < ee.length; K++) {
          var se = ee[K];
          if (se !== "children" && se !== "key") {
            Ae(M), U("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), Ae(null);
            break;
          }
        }
        M.ref !== null && (Ae(M), U("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null));
      }
    }
    function zt(M, ee, K, se, He, pe) {
      {
        var de = ce(M);
        if (!de) {
          var Fe = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = Te(He);
          et ? Fe += et : Fe += De();
          var Ze;
          M === null ? Ze = "null" : it(M) ? Ze = "array" : M !== void 0 && M.$$typeof === e ? (Ze = "<" + (y(M.type) || "Unknown") + " />", Fe = " Did you accidentally export a JSX literal instead of a component?") : Ze = typeof M, U("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ze, Fe);
        }
        var Ye = Re(M, ee, K, He, pe);
        if (Ye == null)
          return Ye;
        if (de) {
          var ot = ee.children;
          if (ot !== void 0)
            if (se)
              if (it(ot)) {
                for (var Tt = 0; Tt < ot.length; Tt++)
                  Ht(ot[Tt], M);
                Object.freeze && Object.freeze(ot);
              } else
                U("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ht(ot, M);
        }
        return M === n ? Oe(Ye) : Pe(Ye), Ye;
      }
    }
    function Ne(M, ee, K) {
      return zt(M, ee, K, !0);
    }
    function Le(M, ee, K) {
      return zt(M, ee, K, !1);
    }
    var Xt = Le, je = Ne;
    ya.Fragment = n, ya.jsx = Xt, ya.jsxs = je;
  }()), ya;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = C3() : t.exports = E3();
})(Zi);
const br = Zi.exports.Fragment, L = Zi.exports.jsx, J = Zi.exports.jsxs, Fd = kc(null), I3 = ({
  provider: t,
  children: e
}) => {
  const [r, n] = We(1), [a, i] = We("");
  return gt(() => {
    t ? (t == null || t.getNetwork().then((c) => n(c.chainId)), t == null || t.listAccounts().then((c) => i(c[0]))) : n(1);
  }, [t]), /* @__PURE__ */ L(Fd.Provider, {
    value: {
      provider: t,
      chainId: r,
      account: a
    },
    children: e
  });
}, Mt = () => cn(Fd) || {
  provider: null,
  chainId: 1,
  account: ""
};
function Yi(t, e) {
  const { provider: r, account: n } = Mt();
  return fa(() => {
    const a = Do(t);
    if (!a || !r)
      return null;
    try {
      return new Fm(a, e, n ? r.getSigner(n) : r);
    } catch (i) {
      return console.error("Failed to get contract", i), null;
    }
  }, [t, e, r, n]);
}
const k3 = () => {
  const { chainId: t } = Mt();
  return Yi(Qp[t], v3);
};
function S3() {
  const { chainId: t } = Mt();
  return Yi(Sn[t].address, y3);
}
const Bo = (t) => {
  const {
    provider: e,
    chainId: r
  } = Mt(), n = k3(), [a, i] = We({}), [c, d] = We(!1), m = sn(async () => {
    if (!e) {
      i({});
      return;
    }
    try {
      d(!0);
      const v = (await e.listAccounts())[0], A = await e.getBalance(v), S = bs.getFunction("balanceOf"), D = bs.encodeFunctionData(S, [v]), B = t.map((T) => ({
        target: T,
        callData: D
      })), k = (await (n == null ? void 0 : n.callStatic.tryBlockAndAggregate(!1, B))).returnData.map((T) => bs.decodeFunctionResult(S, T.returnData));
      d(!1), i({
        [tt]: A,
        ...k.reduce((T, U, H) => ({
          ...T,
          [t[H]]: U.balance
        }), {})
      });
    } catch {
      d(!1);
    }
  }, [e, r, JSON.stringify(t)]);
  return gt(() => {
    m();
    const b = setInterval(() => {
      m();
    }, 1e4);
    return () => {
      clearInterval(b);
    };
  }, [e, m]), {
    loading: c,
    balances: a,
    refetch: m
  };
}, Fo = kc({
  tokenList: [],
  importedTokens: [],
  addToken: () => {
  },
  removeToken: () => {
  }
}), D3 = ({
  tokenList: t,
  children: e
}) => {
  const {
    chainId: r
  } = Mt(), [n, a] = We(() => {
    if (typeof window < "u")
      try {
        return JSON.parse(localStorage.getItem("importedTokens") || "[]");
      } catch {
        return [];
      }
    return [];
  }), i = (d) => {
    const m = [...n.filter((b) => b.address !== d.address), d];
    a(m), typeof window < "u" && localStorage.setItem("importedTokens", JSON.stringify(m));
  }, c = (d) => {
    const m = n.filter((b) => b.address.toLowerCase() !== d.address.toLowerCase() && b.chainId === d.chainId);
    a(m), typeof window < "u" && localStorage.setItem("importedTokens", JSON.stringify(m));
  };
  return /* @__PURE__ */ L(Fo.Provider, {
    value: {
      tokenList: t != null && t.length ? t : Jp[r],
      importedTokens: n,
      addToken: i,
      removeToken: c
    },
    children: e
  });
}, Xi = () => {
  const {
    tokenList: t,
    importedTokens: e
  } = cn(Fo), {
    chainId: r
  } = Mt();
  return fa(() => [...e.filter((n) => n.chainId === r).map((n) => ({
    ...n,
    isImport: !0
  })), ...t || []], [t, e, r]);
}, Md = () => {
  const {
    addToken: t,
    removeToken: e,
    importedTokens: r
  } = cn(Fo);
  return {
    addToken: t,
    removeToken: e,
    importedTokens: r
  };
}, _d = (t) => /* @__PURE__ */ re.createElement("svg", { width: 94, height: 94, viewBox: "0 0 94 94", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("path", { d: "M92 47C92 22.1472 71.8528 2 47 2C22.1472 2 2 22.1472 2 47C2 71.8528 22.1472 92 47 92", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" })), Rd = (t) => /* @__PURE__ */ re.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "CurrencyLogo__StyledLogo-sc-1q82rua-1 gpxlKa", ...t }, /* @__PURE__ */ re.createElement("circle", { cx: 12, cy: 12, r: 10 }), /* @__PURE__ */ re.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), /* @__PURE__ */ re.createElement("line", { x1: 12, y1: 17, x2: 12.01, y2: 17 })), B3 = (t) => /* @__PURE__ */ re.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-trash-2", ...t }, /* @__PURE__ */ re.createElement("polyline", { points: "3 6 5 6 21 6" }), /* @__PURE__ */ re.createElement("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }), /* @__PURE__ */ re.createElement("line", { x1: 10, y1: 11, x2: 10, y2: 17 }), /* @__PURE__ */ re.createElement("line", { x1: 14, y1: 11, x2: 14, y2: 17 })), F3 = [
  {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_spender",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "_spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: !0,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
], M3 = (t) => {
  const e = Yi(t, F3), { chainId: r } = Mt(), [n, a] = We(null);
  return gt(() => {
    (async () => {
      const [c, d, m] = await Promise.all([
        e == null ? void 0 : e.name(),
        e == null ? void 0 : e.symbol(),
        e == null ? void 0 : e.decimals()
      ]);
      a({
        address: t,
        name: c,
        symbol: d,
        decimals: m,
        chainId: r,
        logoURI: ""
      });
    })();
  }, [e, t, r]), n;
}, _3 = Q(B3)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: ${({
  theme: t
}) => t.text};

  :hover {
    color: ${({
  theme: t
}) => t.error};
  }
`, R3 = ro`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, T3 = Q(_d)`
  animation: 2s ${R3} linear infinite;
  width: 20px;
  height: 20px;
  color: ${({
  theme: t
}) => t.accent};

  path {
    stroke-width: 8;
  }
`, Td = Q.input`
  font-size: 0.75rem;
  padding: 0.75rem;
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  background: ${({
  theme: t
}) => t.secondary};
  outline: none;
  border: none;
  color: ${({
  theme: t
}) => t.text};
`, U3 = Q.div`
  flex: 1;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    display: unset;
    width: 6px;
    border-radius: 999px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 999px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({
  theme: t
}) => t.subText + "66"};
    border-radius: 999px;
  }
`, Ud = Q.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  background: ${({
  theme: t,
  selected: e
}) => e ? t.secondary : "transparent"};

  :hover {
    background: ${({
  theme: t
}) => t.secondary};
  }
`, Pd = Q.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
`, Od = Q.div`
  color: ${({
  theme: t
}) => t.subText};
  font-size: 0.75rem;
`, P3 = Q.div`
  font-size: 1rem;
  overflow: hidden;
  max-width: 6rem;
  text-overflow: ellipsis;
`, O3 = Q.div`
  padding-bottom: 16px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.stroke};
  display: flex;
  gap: 24px;
  cursor: pointer;
`, Y0 = Q.div`
  color: ${({
  theme: t,
  active: e
}) => e ? t.accent : t.text};
  hover: ${({
  theme: t
}) => t.accent};
  font-size: 14px;
  font-weight: 500;
`, N3 = Q.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({
  theme: t
}) => t.subText};
`, L3 = ({
  address: t,
  onImport: e
}) => {
  const r = M3(t);
  return r ? /* @__PURE__ */ J(Ud, {
    selected: !1,
    children: [/* @__PURE__ */ J(Pd, {
      children: [/* @__PURE__ */ L(Rd, {}), /* @__PURE__ */ J("div", {
        style: {
          textAlign: "left"
        },
        children: [/* @__PURE__ */ L("span", {
          children: r.symbol
        }), /* @__PURE__ */ L(Od, {
          children: r.name
        })]
      })]
    }), /* @__PURE__ */ L(qn, {
      style: {
        width: "fit-content",
        padding: "8px 16px",
        marginTop: 0
      },
      onClick: () => e(r),
      children: "Import"
    })]
  }) : null;
};
function X0({
  selectedToken: t,
  onChange: e,
  onImport: r
}) {
  const n = Xi(), [a, i] = We(""), c = n.map((B) => B.address), {
    balances: d,
    loading: m
  } = Bo(c), {
    removeToken: b
  } = Md(), {
    chainId: v
  } = Mt(), A = [{
    ...Ti[v],
    balance: d[tt],
    formattedBalance: mr.formatUnits(d[tt] || ue.from(0), 18)
  }, ...n.map((B) => {
    const F = d[B.address], k = mr.formatUnits(F || ue.from(0), B.decimals);
    return {
      ...B,
      balance: F,
      formattedBalance: k
    };
  }).sort((B, F) => parseFloat(F.formattedBalance) - parseFloat(B.formattedBalance))].filter((B) => B.address.toLowerCase() === a.trim().toLowerCase() || B.name.toLowerCase().includes(a.toLowerCase()) || B.symbol.toLowerCase().includes(a.toLowerCase())), [S, D] = We("all");
  return /* @__PURE__ */ J(br, {
    children: [/* @__PURE__ */ L(Td, {
      placeholder: "Search by token name, token symbol or address",
      value: a,
      onChange: (B) => i(B.target.value)
    }), /* @__PURE__ */ J(O3, {
      children: [/* @__PURE__ */ L(Y0, {
        active: S === "all",
        onClick: () => D("all"),
        role: "button",
        children: "All"
      }), /* @__PURE__ */ L(Y0, {
        active: S === "imported",
        onClick: () => D("imported"),
        role: "button",
        children: "Imported"
      })]
    }), /* @__PURE__ */ J(U3, {
      children: [!A.length && mr.isAddress(a.trim()) && /* @__PURE__ */ L(L3, {
        address: a.trim(),
        onImport: r
      }), !A.filter((B) => S === "imported" ? B.isImport : !0).length && !mr.isAddress(a.trim()) && /* @__PURE__ */ L(N3, {
        children: "No results found"
      }), A.filter((B) => S === "imported" ? B.isImport : !0).map((B) => /* @__PURE__ */ J(Ud, {
        selected: B.address === t,
        onClick: () => {
          e(B.address);
        },
        children: [/* @__PURE__ */ J(Pd, {
          children: [/* @__PURE__ */ L("img", {
            src: B.logoURI,
            width: "24",
            height: "24",
            alt: "logo",
            style: {
              borderRadius: "999px"
            },
            onError: ({
              currentTarget: F
            }) => {
              F.onerror = null, F.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
            }
          }), /* @__PURE__ */ J("div", {
            style: {
              textAlign: "left"
            },
            children: [/* @__PURE__ */ L("span", {
              children: B.symbol
            }), /* @__PURE__ */ L(Od, {
              children: B.name
            })]
          })]
        }), S === "imported" ? /* @__PURE__ */ L(_3, {
          onClick: (F) => {
            F.stopPropagation(), b(B);
          }
        }) : m ? /* @__PURE__ */ L(T3, {}) : /* @__PURE__ */ L(P3, {
          children: B.balance && parseFloat(B.formattedBalance) < 1e-6 ? B.formattedBalance : parseFloat(parseFloat(B.formattedBalance).toPrecision(10))
        })]
      }, B.address))]
    })]
  });
}
const j3 = "units/5.5.0", W3 = new q(j3), H3 = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function z3(t, e) {
  if (typeof t != "string" && W3.throwArgumentError("value must be a string", "value", t), typeof e == "string") {
    const r = H3.indexOf(e);
    r !== -1 && (e = 3 * r);
  }
  return dr(t, e != null ? e : 18);
}
function $3(t, e) {
  const [r, n] = We(t);
  return gt(() => {
    const a = setTimeout(() => n(t), e || 500);
    return () => {
      clearTimeout(a);
    };
  }, [t, e]), r;
}
const Nd = (t) => {
  const e = fa(() => t ? t.split(",") : void 0, [t]), {
    chainId: r
  } = Mt(), n = !So.includes(r.toString()), [a, i] = We([]), [c, d] = We([]), m = a.filter((A) => e ? e.includes(A.dexId) : !0), b = c.map((A) => A.dexId), v = c.length === 0 && !t ? void 0 : m.filter((A) => !b.includes(A.dexId)).map((A) => A.dexId).join(",").replace("kyberswapv1", "kyberswap,kyberswap-static");
  return gt(() => {
    (async () => {
      var H;
      if (n)
        return;
      const S = await fetch(`https://ks-setting.kyberswap.com/api/v1/dexes?chain=${ko[r]}&isEnabled=true&pageSize=100`).then((P) => P.json());
      let D = ((H = S == null ? void 0 : S.data) == null ? void 0 : H.dexes) || [];
      const B = D.find((P) => P.dexId === "kyberswap-elastic"), F = D.find((P) => P.dexId === "kyberswap"), k = D.find((P) => P.dexId === "kyberswap-static"), T = D.find((P) => P.dexId === "kyberswap-limit-order");
      let U = [];
      B && (U = [{
        dexId: "kyberswap-elastic",
        name: "KyberSwap Elastic",
        logoURL: "https://kyberswap.com/favicon.ico"
      }]), (k || F) && U.push({
        dexId: "kyberswapv1",
        name: "KyberSwap Classic",
        logoURL: "https://kyberswap.com/favicon.ico"
      }), T && U.push({
        dexId: "kyberswap-limit-order",
        name: "KyberSwap Limit Order",
        logoURL: "https://kyberswap.com/favicon.ico"
      }), D = U.concat(D.filter((P) => !["kyberswap", "kyberswap-elastic", "kyberswap-static", "kyberswap-limit-order"].includes(P.dexId))), i(D);
    })();
  }, [n, r, e]), [m, v, c, d];
}, V3 = ({
  defaultTokenIn: t,
  defaultTokenOut: e,
  defaultSlippage: r,
  feeSetting: n,
  enableDexes: a
}) => {
  const {
    provider: i,
    chainId: c
  } = Mt(), [d, m] = We(t || tt), [b, v] = We(e || ""), A = Xi(), S = !So.includes(c.toString()), D = d === tt && b.toLowerCase() === Sn[c].address.toLowerCase(), B = b === tt && d.toLowerCase() === Sn[c].address.toLowerCase();
  gt(() => {
    S ? (m(""), v(""), ce(null)) : (ce(null), m(t || tt), v(e || ""));
  }, [S, c, t, e]);
  const {
    balances: F
  } = Bo(A.map((h) => h.address)), [k, T, U, H] = Nd(a), [P, R] = We("1"), W = $3(P), [Z, Y] = We(!1), [ne, ce] = We(null), [$, ie] = We(""), [y, s] = We(r || 50), [f, u] = We(20), g = pr(), {
    chargeFeeBy: x,
    feeAmount: w,
    isInBps: E,
    feeReceiver: l
  } = n || {}, o = sn(async () => {
    var z, O, we, G;
    if (S)
      return;
    const h = d === tt ? 18 : (z = A.find((V) => V.address.toLowerCase() === d.toLowerCase())) == null ? void 0 : z.decimals;
    if (!h || !d || !b || !W) {
      ie("Invalid input"), ce(null);
      return;
    }
    let I = ue.from("0");
    try {
      I = z3(W, h);
    } catch {
      ie("Invalid input amount"), ce(null);
      return;
    }
    if (!I) {
      ie("Invalid input amount"), ce(null);
      return;
    }
    const p = F[d] || ue.from(0);
    let C = "";
    if (p.lt(I) && (C = "Insufficient balance"), i || (C = "Please connect your wallet"), ie(C), D || B) {
      ce({
        routerAddress: Sn[c].address,
        routeSummary: {
          tokenIn: d,
          amountIn: I.toString(),
          amountInUsd: "",
          tokenOut: b,
          amountOut: I.toString(),
          amountOutUsd: "",
          gas: "",
          gasPrice: "",
          gasUsd: "",
          extraFee: {
            feeAmount: "",
            chargeFeeBy: "",
            isInBps: "",
            feeReceiver: ""
          },
          route: []
        }
      });
      return;
    }
    const N = {
      tokenIn: d,
      tokenOut: b,
      saveGas: !1,
      gasInclude: !0,
      amountIn: I.toString(),
      includedSources: T,
      chargeFeeBy: x,
      feeAmount: w,
      isInBps: E,
      feeReceiver: l
    }, _ = Object.keys(N).reduce((V, $e) => N[$e] !== void 0 ? `${V}&${$e}=${N[$e]}` : V, "");
    Y(!0), g.current && g.current.abort();
    const j = new AbortController();
    g.current = j;
    const X = await fetch(`https://aggregator-api.kyberswap.com/${ko[c]}/api/v1/routes?${_.slice(1)}`, {
      signal: (O = g.current) == null ? void 0 : O.signal
    }).then((V) => V.json());
    Number((G = (we = X.data) == null ? void 0 : we.routeSummary) == null ? void 0 : G.amountOut) ? (ce(X.data), i && !p.lt(I) && ie("")) : (ce(null), ie("Insufficient liquidity")), g.current = null, Y(!1);
  }, [
    A,
    d,
    b,
    D,
    B,
    i,
    W,
    T,
    S,
    c,
    x,
    w,
    E,
    l,
    JSON.stringify(F)
  ]);
  return gt(() => {
    o();
  }, [o]), {
    tokenIn: d,
    tokenOut: b,
    setTokenOut: v,
    setTokenIn: m,
    inputAmout: P,
    trade: ne,
    setInputAmount: R,
    loading: Z,
    error: $,
    slippage: y,
    setSlippage: s,
    getRate: o,
    deadline: f,
    setDeadline: u,
    allDexes: k,
    excludedDexes: U,
    setExcludedDexes: H,
    setTrade: ce,
    isWrap: D,
    isUnwrap: B
  };
};
var Ea = /* @__PURE__ */ ((t) => (t.UNKNOWN = "unknown", t.PENDING = "pending", t.APPROVED = "approved", t.NOT_APPROVED = "not_approved", t))(Ea || {});
function G3(t, e, r) {
  const {
    account: n,
    provider: a
  } = Mt(), [i, c] = We(!1), [d, m] = We(() => e === tt ? "approved" : "unknown"), b = Yi(e, Bd), [v, A] = We(""), S = sn(() => {
    if (b) {
      const D = ue.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
      b.approve(r, D).then((B) => {
        m("pending"), A(B.hash);
      });
    }
  }, [b, r]);
  return gt(() => {
    if (v) {
      const D = setInterval(() => {
        a == null || a.getTransactionReceipt(v).then((B) => {
          B && (A(""), m("approved"));
        });
      }, 8e3);
      return () => {
        clearInterval(D);
      };
    }
  }, [v, a]), gt(() => {
    e === tt && m("approved"), b && e !== tt && n && r && (c(!0), b.allowance(n, r).then((D) => {
      ue.from(t).lte(D) ? m("approved") : m("not_approved"), c(!1);
    }));
  }, [b, e, n, r, t]), {
    loading: i,
    approvalState: d,
    approve: S
  };
}
const Ld = (t) => /* @__PURE__ */ re.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("g", { clipPath: "url(#clip0_277_44496)" }, /* @__PURE__ */ re.createElement("path", { d: "M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332Z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M10 13.3333V10", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M10 6.6665H10.0083", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("clipPath", { id: "clip0_277_44496" }, /* @__PURE__ */ re.createElement("rect", { width: 20, height: 20, fill: "currentColor" }))));
/**
  * @reach/utils v0.18.0
  *
  * Copyright (c) 2018-2022, React Training LLC
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */
function K3() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function q3() {
  let [, t] = We(/* @__PURE__ */ Object.create(null));
  return sn(() => {
    t(/* @__PURE__ */ Object.create(null));
  }, []);
}
var Z3 = K3() ? ol : gt, Y3 = ({
  children: t,
  type: e = "reach-portal",
  containerRef: r
}) => {
  let n = re.useRef(null), a = re.useRef(null), i = q3();
  return re.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), Z3(() => {
    if (!n.current)
      return;
    let c = n.current.ownerDocument, d = (r == null ? void 0 : r.current) || c.body;
    return a.current = c == null ? void 0 : c.createElement(e), d.appendChild(a.current), i(), () => {
      a.current && d && d.removeChild(a.current);
    };
  }, [e, i, r]), a.current ? hl(t, a.current) : /* @__PURE__ */ L("span", {
    ref: n
  });
}, jd = ({
  unstable_skipInitialRender: t,
  ...e
}) => {
  let [r, n] = re.useState(!1);
  return re.useEffect(() => {
    t && n(!0);
  }, [t]), t && !r ? null : /* @__PURE__ */ L(Y3, {
    ...e
  });
};
jd.displayName = "Portal";
var J0 = function(e) {
  return e.reduce(function(r, n) {
    var a = n[0], i = n[1];
    return r[a] = i, r;
  }, {});
}, Q0 = typeof window < "u" && window.document && window.document.createElement ? re.useLayoutEffect : re.useEffect, Ot = "top", rr = "bottom", nr = "right", Nt = "left", Ji = "auto", ei = [Ot, rr, nr, Nt], ia = "start", za = "end", X3 = "clippingParents", Wd = "viewport", va = "popper", J3 = "reference", ec = /* @__PURE__ */ ei.reduce(function(t, e) {
  return t.concat([e + "-" + ia, e + "-" + za]);
}, []), Hd = /* @__PURE__ */ [].concat(ei, [Ji]).reduce(function(t, e) {
  return t.concat([e, e + "-" + ia, e + "-" + za]);
}, []), Q3 = "beforeRead", e6 = "read", t6 = "afterRead", r6 = "beforeMain", n6 = "main", a6 = "afterMain", i6 = "beforeWrite", s6 = "write", o6 = "afterWrite", $s = [Q3, e6, t6, r6, n6, a6, i6, s6, o6];
function Or(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function sr(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Un(t) {
  var e = sr(t).Element;
  return t instanceof e || t instanceof Element;
}
function Kt(t) {
  var e = sr(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Mo(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = sr(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function c6(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, a = e.attributes[r] || {}, i = e.elements[r];
    !Kt(i) || !Or(i) || (Object.assign(i.style, n), Object.keys(a).forEach(function(c) {
      var d = a[c];
      d === !1 ? i.removeAttribute(c) : i.setAttribute(c, d === !0 ? "" : d);
    }));
  });
}
function f6(t) {
  var e = t.state, r = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow), function() {
    Object.keys(e.elements).forEach(function(n) {
      var a = e.elements[n], i = e.attributes[n] || {}, c = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), d = c.reduce(function(m, b) {
        return m[b] = "", m;
      }, {});
      !Kt(a) || !Or(a) || (Object.assign(a.style, d), Object.keys(i).forEach(function(m) {
        a.removeAttribute(m);
      }));
    });
  };
}
const d6 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: c6,
  effect: f6,
  requires: ["computeStyles"]
};
function gr(t) {
  return t.split("-")[0];
}
var Dn = Math.max, Ui = Math.min, sa = Math.round;
function Vs() {
  var t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function zd() {
  return !/^((?!chrome|android).)*safari/i.test(Vs());
}
function oa(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), a = 1, i = 1;
  e && Kt(t) && (a = t.offsetWidth > 0 && sa(n.width) / t.offsetWidth || 1, i = t.offsetHeight > 0 && sa(n.height) / t.offsetHeight || 1);
  var c = Un(t) ? sr(t) : window, d = c.visualViewport, m = !zd() && r, b = (n.left + (m && d ? d.offsetLeft : 0)) / a, v = (n.top + (m && d ? d.offsetTop : 0)) / i, A = n.width / a, S = n.height / i;
  return {
    width: A,
    height: S,
    top: v,
    right: b + A,
    bottom: v + S,
    left: b,
    x: b,
    y: v
  };
}
function _o(t) {
  var e = oa(t), r = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: n
  };
}
function $d(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && Mo(r)) {
    var n = e;
    do {
      if (n && t.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function yr(t) {
  return sr(t).getComputedStyle(t);
}
function l6(t) {
  return ["table", "td", "th"].indexOf(Or(t)) >= 0;
}
function dn(t) {
  return ((Un(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Qi(t) {
  return Or(t) === "html" ? t : t.assignedSlot || t.parentNode || (Mo(t) ? t.host : null) || dn(t);
}
function tc(t) {
  return !Kt(t) || yr(t).position === "fixed" ? null : t.offsetParent;
}
function h6(t) {
  var e = /firefox/i.test(Vs()), r = /Trident/i.test(Vs());
  if (r && Kt(t)) {
    var n = yr(t);
    if (n.position === "fixed")
      return null;
  }
  var a = Qi(t);
  for (Mo(a) && (a = a.host); Kt(a) && ["html", "body"].indexOf(Or(a)) < 0; ) {
    var i = yr(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function ti(t) {
  for (var e = sr(t), r = tc(t); r && l6(r) && yr(r).position === "static"; )
    r = tc(r);
  return r && (Or(r) === "html" || Or(r) === "body" && yr(r).position === "static") ? e : r || h6(t) || e;
}
function Ro(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Fa(t, e, r) {
  return Dn(t, Ui(e, r));
}
function u6(t, e, r) {
  var n = Fa(t, e, r);
  return n > r ? r : n;
}
function Vd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Gd(t) {
  return Object.assign({}, Vd(), t);
}
function Kd(t, e) {
  return e.reduce(function(r, n) {
    return r[n] = t, r;
  }, {});
}
var m6 = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
    placement: r.placement
  })) : e, Gd(typeof e != "number" ? e : Kd(e, ei));
};
function p6(t) {
  var e, r = t.state, n = t.name, a = t.options, i = r.elements.arrow, c = r.modifiersData.popperOffsets, d = gr(r.placement), m = Ro(d), b = [Nt, nr].indexOf(d) >= 0, v = b ? "height" : "width";
  if (!(!i || !c)) {
    var A = m6(a.padding, r), S = _o(i), D = m === "y" ? Ot : Nt, B = m === "y" ? rr : nr, F = r.rects.reference[v] + r.rects.reference[m] - c[m] - r.rects.popper[v], k = c[m] - r.rects.reference[m], T = ti(i), U = T ? m === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, H = F / 2 - k / 2, P = A[D], R = U - S[v] - A[B], W = U / 2 - S[v] / 2 + H, Z = Fa(P, W, R), Y = m;
    r.modifiersData[n] = (e = {}, e[Y] = Z, e.centerOffset = Z - W, e);
  }
}
function b6(t) {
  var e = t.state, r = t.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  if (a != null && !(typeof a == "string" && (a = e.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (Kt(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !$d(e.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    e.elements.arrow = a;
  }
}
const g6 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: p6,
  effect: b6,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ca(t) {
  return t.split("-")[1];
}
var x6 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function y6(t) {
  var e = t.x, r = t.y, n = window, a = n.devicePixelRatio || 1;
  return {
    x: sa(e * a) / a || 0,
    y: sa(r * a) / a || 0
  };
}
function rc(t) {
  var e, r = t.popper, n = t.popperRect, a = t.placement, i = t.variation, c = t.offsets, d = t.position, m = t.gpuAcceleration, b = t.adaptive, v = t.roundOffsets, A = t.isFixed, S = c.x, D = S === void 0 ? 0 : S, B = c.y, F = B === void 0 ? 0 : B, k = typeof v == "function" ? v({
    x: D,
    y: F
  }) : {
    x: D,
    y: F
  };
  D = k.x, F = k.y;
  var T = c.hasOwnProperty("x"), U = c.hasOwnProperty("y"), H = Nt, P = Ot, R = window;
  if (b) {
    var W = ti(r), Z = "clientHeight", Y = "clientWidth";
    if (W === sr(r) && (W = dn(r), yr(W).position !== "static" && d === "absolute" && (Z = "scrollHeight", Y = "scrollWidth")), W = W, a === Ot || (a === Nt || a === nr) && i === za) {
      P = rr;
      var ne = A && W === R && R.visualViewport ? R.visualViewport.height : W[Z];
      F -= ne - n.height, F *= m ? 1 : -1;
    }
    if (a === Nt || (a === Ot || a === rr) && i === za) {
      H = nr;
      var ce = A && W === R && R.visualViewport ? R.visualViewport.width : W[Y];
      D -= ce - n.width, D *= m ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: d
  }, b && x6), ie = v === !0 ? y6({
    x: D,
    y: F
  }) : {
    x: D,
    y: F
  };
  if (D = ie.x, F = ie.y, m) {
    var y;
    return Object.assign({}, $, (y = {}, y[P] = U ? "0" : "", y[H] = T ? "0" : "", y.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + D + "px, " + F + "px)" : "translate3d(" + D + "px, " + F + "px, 0)", y));
  }
  return Object.assign({}, $, (e = {}, e[P] = U ? F + "px" : "", e[H] = T ? D + "px" : "", e.transform = "", e));
}
function v6(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, a = n === void 0 ? !0 : n, i = r.adaptive, c = i === void 0 ? !0 : i, d = r.roundOffsets, m = d === void 0 ? !0 : d;
  if (process.env.NODE_ENV !== "production") {
    var b = yr(e.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(A) {
      return b.indexOf(A) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var v = {
    placement: gr(e.placement),
    variation: ca(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: a,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, rc(Object.assign({}, v, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: c,
    roundOffsets: m
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, rc(Object.assign({}, v, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: m
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const w6 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: v6,
  data: {}
};
var di = {
  passive: !0
};
function A6(t) {
  var e = t.state, r = t.instance, n = t.options, a = n.scroll, i = a === void 0 ? !0 : a, c = n.resize, d = c === void 0 ? !0 : c, m = sr(e.elements.popper), b = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && b.forEach(function(v) {
    v.addEventListener("scroll", r.update, di);
  }), d && m.addEventListener("resize", r.update, di), function() {
    i && b.forEach(function(v) {
      v.removeEventListener("scroll", r.update, di);
    }), d && m.removeEventListener("resize", r.update, di);
  };
}
const C6 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: A6,
  data: {}
};
var E6 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function wi(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return E6[e];
  });
}
var I6 = {
  start: "end",
  end: "start"
};
function nc(t) {
  return t.replace(/start|end/g, function(e) {
    return I6[e];
  });
}
function To(t) {
  var e = sr(t), r = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Uo(t) {
  return oa(dn(t)).left + To(t).scrollLeft;
}
function k6(t, e) {
  var r = sr(t), n = dn(t), a = r.visualViewport, i = n.clientWidth, c = n.clientHeight, d = 0, m = 0;
  if (a) {
    i = a.width, c = a.height;
    var b = zd();
    (b || !b && e === "fixed") && (d = a.offsetLeft, m = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: d + Uo(t),
    y: m
  };
}
function S6(t) {
  var e, r = dn(t), n = To(t), a = (e = t.ownerDocument) == null ? void 0 : e.body, i = Dn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Dn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), d = -n.scrollLeft + Uo(t), m = -n.scrollTop;
  return yr(a || r).direction === "rtl" && (d += Dn(r.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: d,
    y: m
  };
}
function Po(t) {
  var e = yr(t), r = e.overflow, n = e.overflowX, a = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function qd(t) {
  return ["html", "body", "#document"].indexOf(Or(t)) >= 0 ? t.ownerDocument.body : Kt(t) && Po(t) ? t : qd(Qi(t));
}
function Ma(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = qd(t), a = n === ((r = t.ownerDocument) == null ? void 0 : r.body), i = sr(n), c = a ? [i].concat(i.visualViewport || [], Po(n) ? n : []) : n, d = e.concat(c);
  return a ? d : d.concat(Ma(Qi(c)));
}
function Gs(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function D6(t, e) {
  var r = oa(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ac(t, e, r) {
  return e === Wd ? Gs(k6(t, r)) : Un(e) ? D6(e, r) : Gs(S6(dn(t)));
}
function B6(t) {
  var e = Ma(Qi(t)), r = ["absolute", "fixed"].indexOf(yr(t).position) >= 0, n = r && Kt(t) ? ti(t) : t;
  return Un(n) ? e.filter(function(a) {
    return Un(a) && $d(a, n) && Or(a) !== "body";
  }) : [];
}
function F6(t, e, r, n) {
  var a = e === "clippingParents" ? B6(t) : [].concat(e), i = [].concat(a, [r]), c = i[0], d = i.reduce(function(m, b) {
    var v = ac(t, b, n);
    return m.top = Dn(v.top, m.top), m.right = Ui(v.right, m.right), m.bottom = Ui(v.bottom, m.bottom), m.left = Dn(v.left, m.left), m;
  }, ac(t, c, n));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
function Zd(t) {
  var e = t.reference, r = t.element, n = t.placement, a = n ? gr(n) : null, i = n ? ca(n) : null, c = e.x + e.width / 2 - r.width / 2, d = e.y + e.height / 2 - r.height / 2, m;
  switch (a) {
    case Ot:
      m = {
        x: c,
        y: e.y - r.height
      };
      break;
    case rr:
      m = {
        x: c,
        y: e.y + e.height
      };
      break;
    case nr:
      m = {
        x: e.x + e.width,
        y: d
      };
      break;
    case Nt:
      m = {
        x: e.x - r.width,
        y: d
      };
      break;
    default:
      m = {
        x: e.x,
        y: e.y
      };
  }
  var b = a ? Ro(a) : null;
  if (b != null) {
    var v = b === "y" ? "height" : "width";
    switch (i) {
      case ia:
        m[b] = m[b] - (e[v] / 2 - r[v] / 2);
        break;
      case za:
        m[b] = m[b] + (e[v] / 2 - r[v] / 2);
        break;
    }
  }
  return m;
}
function $a(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, a = n === void 0 ? t.placement : n, i = r.strategy, c = i === void 0 ? t.strategy : i, d = r.boundary, m = d === void 0 ? X3 : d, b = r.rootBoundary, v = b === void 0 ? Wd : b, A = r.elementContext, S = A === void 0 ? va : A, D = r.altBoundary, B = D === void 0 ? !1 : D, F = r.padding, k = F === void 0 ? 0 : F, T = Gd(typeof k != "number" ? k : Kd(k, ei)), U = S === va ? J3 : va, H = t.rects.popper, P = t.elements[B ? U : S], R = F6(Un(P) ? P : P.contextElement || dn(t.elements.popper), m, v, c), W = oa(t.elements.reference), Z = Zd({
    reference: W,
    element: H,
    strategy: "absolute",
    placement: a
  }), Y = Gs(Object.assign({}, H, Z)), ne = S === va ? Y : W, ce = {
    top: R.top - ne.top + T.top,
    bottom: ne.bottom - R.bottom + T.bottom,
    left: R.left - ne.left + T.left,
    right: ne.right - R.right + T.right
  }, $ = t.modifiersData.offset;
  if (S === va && $) {
    var ie = $[a];
    Object.keys(ce).forEach(function(y) {
      var s = [nr, rr].indexOf(y) >= 0 ? 1 : -1, f = [Ot, rr].indexOf(y) >= 0 ? "y" : "x";
      ce[y] += ie[f] * s;
    });
  }
  return ce;
}
function M6(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, a = r.boundary, i = r.rootBoundary, c = r.padding, d = r.flipVariations, m = r.allowedAutoPlacements, b = m === void 0 ? Hd : m, v = ca(n), A = v ? d ? ec : ec.filter(function(B) {
    return ca(B) === v;
  }) : ei, S = A.filter(function(B) {
    return b.indexOf(B) >= 0;
  });
  S.length === 0 && (S = A, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var D = S.reduce(function(B, F) {
    return B[F] = $a(t, {
      placement: F,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[gr(F)], B;
  }, {});
  return Object.keys(D).sort(function(B, F) {
    return D[B] - D[F];
  });
}
function _6(t) {
  if (gr(t) === Ji)
    return [];
  var e = wi(t);
  return [nc(t), e, nc(e)];
}
function R6(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var a = r.mainAxis, i = a === void 0 ? !0 : a, c = r.altAxis, d = c === void 0 ? !0 : c, m = r.fallbackPlacements, b = r.padding, v = r.boundary, A = r.rootBoundary, S = r.altBoundary, D = r.flipVariations, B = D === void 0 ? !0 : D, F = r.allowedAutoPlacements, k = e.options.placement, T = gr(k), U = T === k, H = m || (U || !B ? [wi(k)] : _6(k)), P = [k].concat(H).reduce(function(I, p) {
      return I.concat(gr(p) === Ji ? M6(e, {
        placement: p,
        boundary: v,
        rootBoundary: A,
        padding: b,
        flipVariations: B,
        allowedAutoPlacements: F
      }) : p);
    }, []), R = e.rects.reference, W = e.rects.popper, Z = /* @__PURE__ */ new Map(), Y = !0, ne = P[0], ce = 0; ce < P.length; ce++) {
      var $ = P[ce], ie = gr($), y = ca($) === ia, s = [Ot, rr].indexOf(ie) >= 0, f = s ? "width" : "height", u = $a(e, {
        placement: $,
        boundary: v,
        rootBoundary: A,
        altBoundary: S,
        padding: b
      }), g = s ? y ? nr : Nt : y ? rr : Ot;
      R[f] > W[f] && (g = wi(g));
      var x = wi(g), w = [];
      if (i && w.push(u[ie] <= 0), d && w.push(u[g] <= 0, u[x] <= 0), w.every(function(I) {
        return I;
      })) {
        ne = $, Y = !1;
        break;
      }
      Z.set($, w);
    }
    if (Y)
      for (var E = B ? 3 : 1, l = function(p) {
        var C = P.find(function(N) {
          var _ = Z.get(N);
          if (_)
            return _.slice(0, p).every(function(j) {
              return j;
            });
        });
        if (C)
          return ne = C, "break";
      }, o = E; o > 0; o--) {
        var h = l(o);
        if (h === "break")
          break;
      }
    e.placement !== ne && (e.modifiersData[n]._skip = !0, e.placement = ne, e.reset = !0);
  }
}
const T6 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: R6,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ic(t, e, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - r.y,
    right: t.right - e.width + r.x,
    bottom: t.bottom - e.height + r.y,
    left: t.left - e.width - r.x
  };
}
function sc(t) {
  return [Ot, nr, rr, Nt].some(function(e) {
    return t[e] >= 0;
  });
}
function U6(t) {
  var e = t.state, r = t.name, n = e.rects.reference, a = e.rects.popper, i = e.modifiersData.preventOverflow, c = $a(e, {
    elementContext: "reference"
  }), d = $a(e, {
    altBoundary: !0
  }), m = ic(c, n), b = ic(d, a, i), v = sc(m), A = sc(b);
  e.modifiersData[r] = {
    referenceClippingOffsets: m,
    popperEscapeOffsets: b,
    isReferenceHidden: v,
    hasPopperEscaped: A
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": v,
    "data-popper-escaped": A
  });
}
const P6 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: U6
};
function O6(t, e, r) {
  var n = gr(t), a = [Nt, Ot].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, c = i[0], d = i[1];
  return c = c || 0, d = (d || 0) * a, [Nt, nr].indexOf(n) >= 0 ? {
    x: d,
    y: c
  } : {
    x: c,
    y: d
  };
}
function N6(t) {
  var e = t.state, r = t.options, n = t.name, a = r.offset, i = a === void 0 ? [0, 0] : a, c = Hd.reduce(function(v, A) {
    return v[A] = O6(A, e.rects, i), v;
  }, {}), d = c[e.placement], m = d.x, b = d.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += m, e.modifiersData.popperOffsets.y += b), e.modifiersData[n] = c;
}
const L6 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: N6
};
function j6(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = Zd({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const W6 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: j6,
  data: {}
};
function H6(t) {
  return t === "x" ? "y" : "x";
}
function z6(t) {
  var e = t.state, r = t.options, n = t.name, a = r.mainAxis, i = a === void 0 ? !0 : a, c = r.altAxis, d = c === void 0 ? !1 : c, m = r.boundary, b = r.rootBoundary, v = r.altBoundary, A = r.padding, S = r.tether, D = S === void 0 ? !0 : S, B = r.tetherOffset, F = B === void 0 ? 0 : B, k = $a(e, {
    boundary: m,
    rootBoundary: b,
    padding: A,
    altBoundary: v
  }), T = gr(e.placement), U = ca(e.placement), H = !U, P = Ro(T), R = H6(P), W = e.modifiersData.popperOffsets, Z = e.rects.reference, Y = e.rects.popper, ne = typeof F == "function" ? F(Object.assign({}, e.rects, {
    placement: e.placement
  })) : F, ce = typeof ne == "number" ? {
    mainAxis: ne,
    altAxis: ne
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, ne), $ = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, ie = {
    x: 0,
    y: 0
  };
  if (!!W) {
    if (i) {
      var y, s = P === "y" ? Ot : Nt, f = P === "y" ? rr : nr, u = P === "y" ? "height" : "width", g = W[P], x = g + k[s], w = g - k[f], E = D ? -Y[u] / 2 : 0, l = U === ia ? Z[u] : Y[u], o = U === ia ? -Y[u] : -Z[u], h = e.elements.arrow, I = D && h ? _o(h) : {
        width: 0,
        height: 0
      }, p = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Vd(), C = p[s], N = p[f], _ = Fa(0, Z[u], I[u]), j = H ? Z[u] / 2 - E - _ - C - ce.mainAxis : l - _ - C - ce.mainAxis, X = H ? -Z[u] / 2 + E + _ + N + ce.mainAxis : o + _ + N + ce.mainAxis, z = e.elements.arrow && ti(e.elements.arrow), O = z ? P === "y" ? z.clientTop || 0 : z.clientLeft || 0 : 0, we = (y = $ == null ? void 0 : $[P]) != null ? y : 0, G = g + j - we - O, V = g + X - we, $e = Fa(D ? Ui(x, G) : x, g, D ? Dn(w, V) : w);
      W[P] = $e, ie[P] = $e - g;
    }
    if (d) {
      var fe, be = P === "x" ? Ot : Nt, st = P === "x" ? rr : nr, le = W[R], ye = R === "y" ? "height" : "width", it = le + k[be], ge = le - k[st], te = [Ot, Nt].indexOf(T) !== -1, Ve = (fe = $ == null ? void 0 : $[R]) != null ? fe : 0, ve = te ? it : le - Z[ye] - Y[ye] - Ve + ce.altAxis, xe = te ? le + Z[ye] + Y[ye] - Ve - ce.altAxis : ge, nt = D && te ? u6(ve, le, xe) : Fa(D ? ve : it, le, D ? xe : ge);
      W[R] = nt, ie[R] = nt - le;
    }
    e.modifiersData[n] = ie;
  }
}
const $6 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: z6,
  requiresIfExists: ["offset"]
};
function V6(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function G6(t) {
  return t === sr(t) || !Kt(t) ? To(t) : V6(t);
}
function K6(t) {
  var e = t.getBoundingClientRect(), r = sa(e.width) / t.offsetWidth || 1, n = sa(e.height) / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function q6(t, e, r) {
  r === void 0 && (r = !1);
  var n = Kt(e), a = Kt(e) && K6(e), i = dn(e), c = oa(t, a, r), d = {
    scrollLeft: 0,
    scrollTop: 0
  }, m = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Or(e) !== "body" || Po(i)) && (d = G6(e)), Kt(e) ? (m = oa(e, !0), m.x += e.clientLeft, m.y += e.clientTop) : i && (m.x = Uo(i))), {
    x: c.left + d.scrollLeft - m.x,
    y: c.top + d.scrollTop - m.y,
    width: c.width,
    height: c.height
  };
}
function Z6(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var c = [].concat(i.requires || [], i.requiresIfExists || []);
    c.forEach(function(d) {
      if (!r.has(d)) {
        var m = e.get(d);
        m && a(m);
      }
    }), n.push(i);
  }
  return t.forEach(function(i) {
    r.has(i.name) || a(i);
  }), n;
}
function Y6(t) {
  var e = Z6(t);
  return $s.reduce(function(r, n) {
    return r.concat(e.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function X6(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function Xr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(a, i) {
    return a.replace(/%s/, i);
  }, t);
}
var An = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', J6 = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', oc = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Q6(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), oc).filter(function(r, n, a) {
      return a.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof e.name != "string" && console.error(Xr(An, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(Xr(An, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          $s.indexOf(e.phase) < 0 && console.error(Xr(An, e.name, '"phase"', "either " + $s.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(Xr(An, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(Xr(An, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(Xr(An, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(Xr(An, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + oc.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      e.requires && e.requires.forEach(function(n) {
        t.find(function(a) {
          return a.name === n;
        }) == null && console.error(Xr(J6, String(e.name), n, n));
      });
    });
  });
}
function e4(t, e) {
  var r = /* @__PURE__ */ new Set();
  return t.filter(function(n) {
    var a = e(n);
    if (!r.has(a))
      return r.add(a), !0;
  });
}
function t4(t) {
  var e = t.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}
var cc = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", r4 = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", fc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function dc() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function n4(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, n = r === void 0 ? [] : r, a = e.defaultOptions, i = a === void 0 ? fc : a;
  return function(d, m, b) {
    b === void 0 && (b = i);
    var v = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fc, i),
      modifiersData: {},
      elements: {
        reference: d,
        popper: m
      },
      attributes: {},
      styles: {}
    }, A = [], S = !1, D = {
      state: v,
      setOptions: function(T) {
        var U = typeof T == "function" ? T(v.options) : T;
        F(), v.options = Object.assign({}, i, v.options, U), v.scrollParents = {
          reference: Un(d) ? Ma(d) : d.contextElement ? Ma(d.contextElement) : [],
          popper: Ma(m)
        };
        var H = Y6(t4([].concat(n, v.options.modifiers)));
        if (v.orderedModifiers = H.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var P = e4([].concat(H, v.options.modifiers), function($) {
            var ie = $.name;
            return ie;
          });
          if (Q6(P), gr(v.options.placement) === Ji) {
            var R = v.orderedModifiers.find(function($) {
              var ie = $.name;
              return ie === "flip";
            });
            R || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var W = yr(m), Z = W.marginTop, Y = W.marginRight, ne = W.marginBottom, ce = W.marginLeft;
          [Z, Y, ne, ce].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return B(), D.update();
      },
      forceUpdate: function() {
        if (!S) {
          var T = v.elements, U = T.reference, H = T.popper;
          if (!dc(U, H)) {
            process.env.NODE_ENV !== "production" && console.error(cc);
            return;
          }
          v.rects = {
            reference: q6(U, ti(H), v.options.strategy === "fixed"),
            popper: _o(H)
          }, v.reset = !1, v.placement = v.options.placement, v.orderedModifiers.forEach(function($) {
            return v.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var P = 0, R = 0; R < v.orderedModifiers.length; R++) {
            if (process.env.NODE_ENV !== "production" && (P += 1, P > 100)) {
              console.error(r4);
              break;
            }
            if (v.reset === !0) {
              v.reset = !1, R = -1;
              continue;
            }
            var W = v.orderedModifiers[R], Z = W.fn, Y = W.options, ne = Y === void 0 ? {} : Y, ce = W.name;
            typeof Z == "function" && (v = Z({
              state: v,
              options: ne,
              name: ce,
              instance: D
            }) || v);
          }
        }
      },
      update: X6(function() {
        return new Promise(function(k) {
          D.forceUpdate(), k(v);
        });
      }),
      destroy: function() {
        F(), S = !0;
      }
    };
    if (!dc(d, m))
      return process.env.NODE_ENV !== "production" && console.error(cc), D;
    D.setOptions(b).then(function(k) {
      !S && b.onFirstUpdate && b.onFirstUpdate(k);
    });
    function B() {
      v.orderedModifiers.forEach(function(k) {
        var T = k.name, U = k.options, H = U === void 0 ? {} : U, P = k.effect;
        if (typeof P == "function") {
          var R = P({
            state: v,
            name: T,
            instance: D,
            options: H
          }), W = function() {
          };
          A.push(R || W);
        }
      });
    }
    function F() {
      A.forEach(function(k) {
        return k();
      }), A = [];
    }
    return D;
  };
}
var a4 = [C6, W6, w6, d6, L6, T6, $6, g6, P6], i4 = /* @__PURE__ */ n4({
  defaultModifiers: a4
}), s4 = typeof Element < "u", o4 = typeof Map == "function", c4 = typeof Set == "function", f4 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ai(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor)
      return !1;
    var r, n, a;
    if (Array.isArray(t)) {
      if (r = t.length, r != e.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!Ai(t[n], e[n]))
          return !1;
      return !0;
    }
    var i;
    if (o4 && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!e.has(n.value[0]))
          return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!Ai(n.value[1], e.get(n.value[0])))
          return !1;
      return !0;
    }
    if (c4 && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(n = i.next()).done; )
        if (!e.has(n.value[0]))
          return !1;
      return !0;
    }
    if (f4 && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (r = t.length, r != e.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (t[n] !== e[n])
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    if (a = Object.keys(t), r = a.length, r !== Object.keys(e).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, a[n]))
        return !1;
    if (s4 && t instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((a[n] === "_owner" || a[n] === "__v" || a[n] === "__o") && t.$$typeof) && !Ai(t[a[n]], e[a[n]]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var d4 = function(e, r) {
  try {
    return Ai(e, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, l4 = [], h4 = function(e, r, n) {
  n === void 0 && (n = {});
  var a = re.useRef(null), i = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || l4
  }, c = re.useState({
    styles: {
      popper: {
        position: i.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), d = c[0], m = c[1], b = re.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(D) {
        var B = D.state, F = Object.keys(B.elements);
        ll.flushSync(function() {
          m({
            styles: J0(F.map(function(k) {
              return [k, B.styles[k] || {}];
            })),
            attributes: J0(F.map(function(k) {
              return [k, B.attributes[k]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), v = re.useMemo(function() {
    var S = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [b, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return d4(a.current, S) ? a.current || S : (a.current = S, S);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, b]), A = re.useRef();
  return Q0(function() {
    A.current && A.current.setOptions(v);
  }, [v]), Q0(function() {
    if (!(e == null || r == null)) {
      var S = n.createPopper || i4, D = S(e, r, v);
      return A.current = D, function() {
        D.destroy(), A.current = null;
      };
    }
  }, [e, r, n.createPopper]), {
    state: A.current ? A.current.state : null,
    styles: d.styles,
    attributes: d.attributes,
    update: A.current ? A.current.update : null,
    forceUpdate: A.current ? A.current.forceUpdate : null
  };
};
function u4(t, e, r = !0) {
  const n = pr();
  gt(() => {
    n.current = t;
  }, [t]), gt(() => {
    function a() {
      const i = n.current;
      i && i();
    }
    if (e !== null) {
      r && a();
      const i = setInterval(a, e);
      return () => clearInterval(i);
    }
  }, [e, r]);
}
const m4 = Q.div`
  z-index: 9999;

  visibility: ${(t) => t.show ? "visible" : "hidden"};
  opacity: ${(t) => t.show ? 0.95 : 0};
  transition: visibility 150ms linear, opacity 150ms linear;

  background: ${({
  theme: t
}) => t.dialog};
  border: 1px solid transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.32);
  color: ${({
  theme: t
}) => t.subText};
  border-radius: 16px;
  font-family: ${({
  theme: t
}) => t.fontFamily || '"Work Sans", "Inter var", sans-serif'};
`, p4 = Q.div`
  display: inline-block;
`, b4 = Q.div`
  width: 12px;
  height: 12px;
  z-index: 9998;

  ::before {
    position: absolute;
    width: 12px;
    height: 12px;
    z-index: 9998;

    content: '';
    border: 1px solid transparent;
    transform: rotate(45deg);
    background: ${({
  theme: t
}) => t.dialog};
  }

  &.arrow-top {
    bottom: -7px;
    ::before {
      border-top: none;
      border-left: none;
    }
  }

  &.arrow-bottom {
    top: -7px;
    ::before {
      border-bottom: none;
      border-right: none;
    }
  }

  &.arrow-left {
    right: -7px;

    ::before {
      border-bottom: none;
      border-left: none;
    }
  }

  &.arrow-right {
    left: -7px;
    ::before {
      border-right: none;
      border-top: none;
    }
  }
`;
function g4({
  content: t,
  show: e,
  children: r,
  placement: n = "auto",
  noArrow: a = !1
}) {
  var F, k;
  const [i, c] = We(null), [d, m] = We(null), [b, v] = We(null), {
    styles: A,
    update: S,
    attributes: D
  } = h4(i, d, {
    placement: n,
    strategy: "fixed",
    modifiers: [{
      name: "offset",
      options: {
        offset: [8, 8]
      }
    }, {
      name: "arrow",
      options: {
        element: b
      }
    }]
  }), B = sn(() => {
    S && S();
  }, [S]);
  return u4(B, e ? 100 : null), /* @__PURE__ */ J(br, {
    children: [/* @__PURE__ */ L(p4, {
      ref: c,
      children: r
    }), /* @__PURE__ */ L(jd, {
      children: /* @__PURE__ */ J(m4, {
        show: e,
        ref: m,
        style: A.popper,
        ...D.popper,
        children: [t, a || /* @__PURE__ */ L(b4, {
          className: `arrow-${(k = (F = D.popper) == null ? void 0 : F["data-popper-placement"]) != null ? k : ""}`,
          ref: v,
          style: A.arrow,
          ...D.arrow
        })]
      })
    })]
  });
}
const x4 = Q.div`
  width: ${({
  width: t
}) => t || "228px"};
  padding: 0.6rem 1rem;
  line-height: 150%;
  font-weight: 400;
  font-size: ${({
  size: t
}) => t || 14}px;
`;
function y4({
  text: t,
  width: e,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ L(g4, {
    content: t ? /* @__PURE__ */ L(x4, {
      width: e,
      size: r,
      children: t
    }) : null,
    ...n
  });
}
const v4 = Q.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  outline: none;
  cursor: default;
  border-radius: 36px;
  color: ${({
  theme: t
}) => t.subText};

  :hover,
  :focus {
    opacity: 0.7;
  }
`, w4 = Q.span`
  display: inline-flex;
  justify-content: center;
  margin-left: 0.25rem;
  align-items: center;
  line-height: 100%;
  vertical-align: middle;
`;
function zr({
  text: t,
  size: e = 14,
  placement: r,
  style: n,
  color: a
}) {
  const [i, c] = We(!1), d = sn(() => c(!0), [c]), m = sn(() => c(!1), [c]);
  return /* @__PURE__ */ L(w4, {
    style: n,
    children: /* @__PURE__ */ L(y4, {
      text: t,
      show: i,
      placement: r,
      size: e,
      children: /* @__PURE__ */ L(v4, {
        onClick: d,
        onMouseEnter: d,
        onMouseLeave: m,
        children: /* @__PURE__ */ L(Ld, {
          style: {
            color: a,
            width: e,
            height: e
          }
        })
      })
    })
  });
}
const gs = Q.div`
  font-size: 0.75rem;
  text-align: left;
`, A4 = Q.input`
  background: ${({
  theme: t,
  isActive: e
}) => e ? t.dialog : t.secondary};
  border: none;
  outline: none;
  color: ${({
  theme: t
}) => t.text};
  text-align: right;
  width: 100%;
  font-size: 12px;
  padding: 0;

  :focus {
    background: ${({
  theme: t
}) => t.dialog};
  }
`, C4 = Q.div`
  border-radius: 999px;
  margin-top: 8px;
  background: ${({
  theme: t
}) => t.secondary};
  padding: 2px;
  display: flex;
`, wa = Q.div`
  position: relative;
  border-radius: 999px;
  color: ${({
  theme: t,
  isActive: e
}) => e ? t.text : t.subText};
  font-size: 12px;
  padding: 4px;
  font-weight: 500;
  flex: 2;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  background: ${({
  theme: t,
  isActive: e
}) => e ? t.dialog : t.secondary};
  cursor: pointer;
  :hover {
    background: ${({
  theme: t
}) => t.dialog};
    input {
      background: ${({
  theme: t
}) => t.dialog};
    }
  }
`, lc = Q.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, E4 = Q.div`
  display: flex;
  padding: 6px 8px;
  gap: 4px;
  border-radius: 999px;
  background: ${({
  theme: t
}) => t.secondary};
  color: ${({
  theme: t
}) => t.text};
  font-size: 12px;
  font-weight: 500;
  text-align: right;

  input {
    border: none;
    outline: none;
    padding: 0;
    background: transparent;
    text-align: right;
    color: ${({
  theme: t
}) => t.text};
  }
`, I4 = 1e4, k4 = 2e3, Yd = (t) => Math.round(Number.parseFloat(t) * 100), S4 = (t) => {
  if (t === "")
    return {
      isValid: !0
    };
  const e = /^\s*([0-9]+)(\.\d+)?\s*$/;
  if (!t.match(e))
    return {
      isValid: !1,
      message: "Enter a valid slippage percentage"
    };
  const r = Yd(t);
  return Number.isNaN(r) ? {
    isValid: !1,
    message: "Enter a valid slippage percentage"
  } : r < 0 ? {
    isValid: !1,
    message: "Enter a valid slippage percentage"
  } : r < 50 ? {
    isValid: !0,
    message: "Your transaction may fail"
  } : r > k4 ? {
    isValid: !1,
    message: "Enter a smaller slippage percentage"
  } : r > 500 ? {
    isValid: !0,
    message: "Your transaction may be frontrun"
  } : {
    isValid: !0
  };
};
function D4({
  slippage: t,
  setSlippage: e,
  deadline: r,
  setDeadline: n,
  allDexes: a,
  excludedDexes: i,
  onShowSource: c
}) {
  const [d, m] = We(() => [5, 10, 50, 100].includes(t) ? "" : (t * 100 / I4).toString()), b = Ga(), [v, A] = We(!1), {
    isValid: S,
    message: D
  } = S4(d);
  return /* @__PURE__ */ J(br, {
    children: [/* @__PURE__ */ J("div", {
      children: [/* @__PURE__ */ J(gs, {
        children: ["Max Slippage", /* @__PURE__ */ L(zr, {
          color: b.text,
          text: "Transaction will revert if there is an adverse rate change that is higher than this %"
        })]
      }), /* @__PURE__ */ J(C4, {
        children: [/* @__PURE__ */ L(wa, {
          isActive: t === 5,
          onClick: () => e(5),
          children: "0.05%"
        }), /* @__PURE__ */ L(wa, {
          isActive: t === 10,
          onClick: () => e(10),
          children: "0.1%"
        }), /* @__PURE__ */ L(wa, {
          isActive: t === 50,
          onClick: () => e(50),
          children: "0.5%"
        }), /* @__PURE__ */ L(wa, {
          isActive: t === 100,
          onClick: () => e(100),
          children: "1%"
        }), /* @__PURE__ */ J(wa, {
          isActive: ![5, 10, 50, 100].includes(t),
          style: {
            flex: 3,
            background: v ? b.dialog : void 0,
            border: D ? S ? `1px solid ${b.warning}` : `1px solid ${b.error}` : void 0
          },
          children: [D && /* @__PURE__ */ L(Lc, {
            style: {
              position: "absolute",
              top: 2,
              left: 4,
              width: 20,
              height: 20,
              color: S ? b.warning : b.error
            }
          }), /* @__PURE__ */ L(A4, {
            isActive: ![5, 10, 50, 100].includes(t),
            placeholder: "Custom",
            onFocus: () => A(!0),
            onBlur: () => {
              A(!1), S && e(Yd(d));
            },
            value: d,
            onChange: (B) => m(B.target.value)
          }), /* @__PURE__ */ L("span", {
            children: "%"
          })]
        })]
      }), D && /* @__PURE__ */ L("div", {
        style: {
          fontSize: "12px",
          color: S ? b.warning : b.error,
          textAlign: "left",
          marginTop: "4px"
        },
        children: D
      })]
    }), /* @__PURE__ */ J(lc, {
      children: [/* @__PURE__ */ J(gs, {
        children: ["Transaction Time Limit", /* @__PURE__ */ L(zr, {
          color: b.text,
          text: "Transaction will revert if it is pending for longer than the indicated time"
        })]
      }), /* @__PURE__ */ J(E4, {
        children: [/* @__PURE__ */ L("input", {
          maxLength: 5,
          placeholder: "20",
          value: r ? r.toString() : "",
          style: {
            fontSize: "12px"
          },
          onChange: (B) => {
            const F = +B.target.value.trim().replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1").replace(/^0[^.]/, "0");
            n(F);
          }
        }), /* @__PURE__ */ L("span", {
          style: {
            color: b.subText
          },
          children: "mins"
        })]
      })]
    }), /* @__PURE__ */ J(lc, {
      children: [/* @__PURE__ */ J(gs, {
        children: ["Liquidity Sources", /* @__PURE__ */ L(zr, {
          color: b.text,
          text: "Your trade is routed through one or more of these liquidity sources"
        })]
      }), /* @__PURE__ */ J("div", {
        role: "button",
        onClick: c,
        style: {
          alignItems: "center",
          display: "flex",
          fontSize: 12,
          fontWeight: 500,
          gap: 4,
          cursor: "pointer"
        },
        children: [a.length - i.length || a.length, " out of ", a.length, " selected", /* @__PURE__ */ L(Nc, {
          style: {
            transform: "rotate(-180deg)",
            width: "16px",
            color: b.subText
          }
        })]
      })]
    })]
  });
}
const B4 = ro`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`, F4 = Q.svg`
  ${({
  spinning: t
}) => t ? Pi`
          animation-name: ${B4};
          animation-duration: 696ms;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        ` : ""}
`, M4 = ({
  spinning: t,
  countdown: e
}) => {
  const r = Ga();
  return /* @__PURE__ */ J(F4, {
    spinning: t,
    id: "arrow_loading",
    xmlns: "http://www.w3.org/2000/svg",
    color: r.accent,
    viewBox: "2 2 20 20",
    width: "32",
    height: "32",
    children: [/* @__PURE__ */ L("path", {
      stroke: "none",
      fill: r.accent + "66",
      d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
    }), /* @__PURE__ */ J("defs", {
      children: [/* @__PURE__ */ L("path", {
        id: "arrow",
        stroke: "none",
        fill: "none",
        d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
      }), /* @__PURE__ */ L("clipPath", {
        id: "arrow-clip",
        children: /* @__PURE__ */ L("use", {
          xlinkHref: "#arrow"
        })
      })]
    }), /* @__PURE__ */ L("g", {
      clipPath: "url(#arrow-clip)",
      children: /* @__PURE__ */ L("circle", {
        cx: "12",
        cy: "12",
        r: "5",
        transform: "rotate(365,12,12)",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "16",
        strokeDasharray: "30",
        strokeDashoffset: t || !e ? 0 : -30 + e / 1e4 * 30
      })
    })]
  });
}, _4 = Q.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`, R4 = Q.div`
  font-size: 0.75rem;
  font-weight: 500;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  color: ${({
  theme: t
}) => t.accent};
`;
function T4({
  trade: t,
  onRefresh: e,
  loading: r
}) {
  const [n, a] = We(0);
  return gt(() => {
    a(!r && !!t ? 1e4 : 0);
  }, [r, t]), gt(() => {
    if (n > 0) {
      const i = setInterval(() => {
        const c = n - 10;
        a(c), c === 10 && e();
      }, 10);
      return () => {
        clearInterval(i);
      };
    }
  }, [n, e]), /* @__PURE__ */ J(_4, {
    role: "button",
    onClick: e,
    children: [/* @__PURE__ */ L(M4, {
      spinning: r,
      countdown: n
    }), !!n && !r && /* @__PURE__ */ L(R4, {
      children: (n / 1e3).toFixed()
    })]
  });
}
const xs = (t) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.0714 3.15544L13.6916 9.28884C14.582 10.7999 13.4384 12.6667 11.6193 12.6667H4.38002C2.5621 12.6667 1.41736 10.801 2.30892 9.28998L5.92915 3.15659C6.83631 1.61466 9.1618 1.61466 10.0714 3.15544Z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M7.99992 7.33333V5.33333", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M7.99926 9.88C7.9326 9.88 7.87926 9.93467 7.8806 10C7.8806 10.0667 7.93526 10.12 8.0006 10.12C8.06593 10.12 8.11926 10.0653 8.11926 10C8.11926 9.93467 8.06593 9.88 7.99926 9.88", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), Ks = (t) => /* @__PURE__ */ re.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "SwapSettingsPanel__BackIconWrapper-sc-riij1g-0 LgspM", ...t }, /* @__PURE__ */ re.createElement("line", { x1: 19, y1: 12, x2: 5, y2: 12 }), /* @__PURE__ */ re.createElement("polyline", { points: "12 19 5 12 12 5" })), qs = (t) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("g", { clipPath: "url(#clip0_1393_3583)" }, /* @__PURE__ */ re.createElement("path", { d: "M12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H7.33333C7.7 3.33333 8 3.03333 8 2.66667C8 2.3 7.7 2 7.33333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8.66667C14 8.3 13.7 8 13.3333 8C12.9667 8 12.6667 8.3 12.6667 8.66667V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.33333 2.66667C9.33333 3.03333 9.63333 3.33333 10 3.33333H11.7267L5.64 9.42C5.38 9.68 5.38 10.1 5.64 10.36C5.9 10.62 6.32 10.62 6.58 10.36L12.6667 4.27333V6C12.6667 6.36667 12.9667 6.66667 13.3333 6.66667C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2H10C9.63333 2 9.33333 2.3 9.33333 2.66667Z", fill: "currentColor" })), /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("clipPath", { id: "clip0_1393_3583" }, /* @__PURE__ */ re.createElement("rect", { width: 16, height: 16, fill: "currentColor" })))), Xd = (t) => /* @__PURE__ */ re.createElement("svg", { width: 92, height: 92, viewBox: "0 0 92 92", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("circle", { cx: 46.5111, cy: 46.5111, r: 37.3333, stroke: "currentColor", strokeWidth: 2 }), /* @__PURE__ */ re.createElement("path", { d: "M25.0483 46.1748L39.5042 60.8219L67.5898 32.7832", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })), Jd = (t) => /* @__PURE__ */ re.createElement("svg", { width: 92, height: 92, viewBox: "0 0 92 92", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("path", { d: "M40.4664 14.797L7.99811 69.0003C7.32869 70.1596 6.97448 71.4739 6.97073 72.8126C6.96698 74.1513 7.31382 75.4676 7.97674 76.6306C8.63966 77.7937 9.59556 78.7628 10.7493 79.4417C11.9031 80.1206 13.2145 80.4856 14.5531 80.5003H79.4898C80.8284 80.4856 82.1398 80.1206 83.2936 79.4417C84.4473 78.7628 85.4032 77.7937 86.0661 76.6306C86.7291 75.4676 87.0759 74.1513 87.0722 72.8126C87.0684 71.4739 86.7142 70.1596 86.0448 69.0003L53.5764 14.797C52.8931 13.6704 51.9309 12.7389 50.7827 12.0925C49.6345 11.446 48.3391 11.1064 47.0214 11.1064C45.7038 11.1064 44.4084 11.446 43.2602 12.0925C42.112 12.7389 41.1498 13.6704 40.4664 14.797V14.797Z", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M47.0225 34.5V49.8333", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ re.createElement("path", { d: "M47.0225 65.1665H47.06", stroke: "currentColor", strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round" })), U4 = [
  "user rejected transaction",
  "User declined to send the transaction",
  "user denied transaction",
  "you must accept"
].map((t) => t.toLowerCase());
function P4(t) {
  var r, n;
  const e = String(
    typeof t == "string" ? t : (t == null ? void 0 : t.message) || (t == null ? void 0 : t.code) || (t == null ? void 0 : t.errorMessage) || ""
  ).toLowerCase();
  return [4001, "ACTION_REJECTED", -32050].map(String).includes((n = (r = t == null ? void 0 : t.code) == null ? void 0 : r.toString) == null ? void 0 : n.call(r)) || [
    4001,
    "Request rejected",
    "Error: User closed modal",
    "The transaction was cancelled",
    "Error: User closed modal"
  ].map(String).includes(e) || U4.some((a) => {
    var i;
    return (i = e == null ? void 0 : e.includes) == null ? void 0 : i.call(e, a);
  });
}
function O4(t) {
  const e = t || "";
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function N4(t) {
  var r;
  const e = ((r = t == null ? void 0 : t.toLowerCase) == null ? void 0 : r.call(t)) || "";
  if (!e || e.includes("router: expired"))
    return "An error occurred. Refresh the page and try again ";
  if (e.includes("mintotalamountout") || e.includes("err_limit_out") || e.includes("return amount is not enough") || e.includes("code=call_exception") || e.includes("none of the calls threw an error"))
    return "An error occurred. Try refreshing the price rate or increase max slippage";
  if (e.includes("header not found") || e.includes("swap failed"))
    return "An error occurred. Refresh the page and try again. If the issue still persists, it might be an issue with your RPC node settings in Metamask.";
  if (P4(e))
    return "User rejected the transaction.";
  if (e.includes("insufficient"))
    return "An error occurred. Please try increasing max slippage";
  if (e.includes("permit"))
    return "An error occurred. Invalid Permit Signature";
  if (e.includes("burn amount exceeds balance"))
    return "Insufficient fee rewards amount, try to remove your liquidity without claiming fees for now and you can try to claim it later";
  if (e === "[object Object]")
    return "Something went wrong. Please try again";
}
const L4 = [
  {
    pattern: /{"originalError":.+"message":"execution reverted: ([^"]+)"/,
    getMessage: (t) => t[1]
  },
  { pattern: /^([\w ]*\w+) \(.+?\)$/, getMessage: (t) => t[1] },
  { pattern: /"message": ?"[^"]+?"/, getMessage: (t) => t[1] }
];
function j4(t) {
  const e = L4.find((r) => r.pattern.exec(t));
  if (e)
    return O4(e.getMessage(e.pattern.exec(t)));
}
function W4(t) {
  const e = typeof t == "string" ? t : t.message, r = N4(e);
  if (r)
    return r;
  if (e.length < 100)
    return e;
  const n = j4(e);
  return n || "An error occurred";
}
const H4 = Q(Xd)`
  color: ${({
  theme: t
}) => t.success};
`, hc = Q(Jd)`
  color: ${({
  theme: t
}) => t.error};
`, z4 = Q(Ks)`
  color: ${({
  theme: t
}) => t.subText};
  transform: rotate(-90deg);
`, uc = Q.div`
  display: flex;
  font-size: 1.5rem;
  gap: 0.5rem;
  align-items: center;
  font-weight: 500;

  img {
    border-radius: 50%;
  }
`, $4 = Q.div`
  color: ${({
  theme: t
}) => t.subText};
  font-size: 0.75rem;
  text-align: left;
`, Zs = Q.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: ${({
  theme: t
}) => t.buttonRadius};
  background: ${({
  theme: t
}) => t.warning + "40"};
  color: ${({
  theme: t
}) => t.warning};
  font-size: 12px;
  font-weight: 500px;
  padding: 12px;
`, V4 = Q(Zs)`
  background: ${({
  theme: t
}) => t.error + "40"};
  color: ${({
  theme: t
}) => t.error};
`, mc = Q.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`, G4 = ro`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, K4 = Q(_d)`
  animation: 2s ${G4} linear infinite;
  width: 94px;
  height: 94px;
  color: ${({
  theme: t
}) => t.accent};
`, pc = Q.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({
  theme: t
}) => t.accent};
  font-size: 14px;
  gap: 4px;
`, li = Q.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.stroke};
`, Aa = Q.div`
  font-size: 1rem;
  font-weight: 500;
`, q4 = Q.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 6px;
  img {
    border-radius: 50%;
  }
`, bc = Q.div`
  font-size: 12px;
  color: ${({
  theme: t
}) => t.subText};
  margin-top: 12px;
`, Z4 = Q.div`
  margin-top: ${({
  show: t
}) => t ? "12px" : "0"};
  max-height: ${({
  show: t
}) => t ? "200px" : "0"};
  transition: 0.2s ease-out;

  font-size: 12px;
  color: ${({
  theme: t
}) => t.subText};
  overflow-wrap: break-word;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    display: unset;
    width: 6px;
    border-radius: 999px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 999px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({
  theme: t
}) => t.subText + "66"};
    border-radius: 999px;
  }
`, Y4 = Q.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
`, X4 = Q(Bs)`
  transform: rotate(${({
  open: t
}) => t ? "-180deg" : "0"});
  transition: all 0.2s ease;
`;
function ys(t) {
  const e = ue.from(2e4), r = t.mul(ue.from(2e3)).div(ue.from(1e4));
  return r.gte(e) ? t.add(r) : t.add(e);
}
function J4({
  trade: t,
  tokenInInfo: e,
  amountIn: r,
  tokenOutInfo: n,
  amountOut: a,
  rate: i,
  slippage: c,
  priceImpact: d,
  onClose: m,
  deadline: b,
  client: v,
  onTxSubmit: A
}) {
  var g;
  const S = Ga(), {
    provider: D,
    account: B,
    chainId: F
  } = Mt();
  let k = "--";
  const T = t.routeSummary.tokenIn.toLowerCase() === tt.toLowerCase() && t.routeSummary.tokenOut.toLowerCase() === Sn[F].address.toLowerCase(), U = t.routeSummary.tokenOut.toLowerCase() === tt.toLowerCase() && t.routeSummary.tokenIn.toLowerCase() === Sn[F].address.toLowerCase();
  a && !T && !U && (k = (Number(a) * (1 - c / 1e4)).toPrecision(8).toString());
  const [H, P] = We(!1), [R, W] = We(""), [Z, Y] = We(""), [ne, ce] = We(""), [$, ie] = We(!1);
  gt(() => {
    if (R) {
      const x = setInterval(() => {
        D == null || D.getTransactionReceipt(R).then((w) => {
          !w || (w.status ? Y("success") : Y("failed"));
        });
      }, 1e4);
      return () => {
        clearInterval(x);
      };
    }
  }, [R, D]);
  const [y, s] = We(null), f = S3(), u = async () => {
    s({
      amountIn: r,
      amountOut: a
    });
    try {
      if (P(!0), W(""), ce(""), T) {
        if (!f)
          return;
        const h = await f.estimateGas.deposit({
          value: ue.from(t.routeSummary.amountIn).toHexString()
        }), I = await f.deposit({
          value: ue.from(t.routeSummary.amountIn).toHexString(),
          gasLimit: ys(h)
        });
        W((I == null ? void 0 : I.hash) || ""), A == null || A((I == null ? void 0 : I.hash) || "", I), P(!1);
        return;
      }
      if (U) {
        if (!f)
          return;
        const h = await f.estimateGas.withdraw(ue.from(t.routeSummary.amountIn).toHexString()), I = await f.withdraw(ue.from(t.routeSummary.amountIn).toHexString(), {
          gasLimit: ys(h)
        });
        W((I == null ? void 0 : I.hash) || ""), A == null || A((I == null ? void 0 : I.hash) || "", I), P(!1);
        return;
      }
      const x = new Date();
      x.setMinutes(x.getMinutes() + (b || 20));
      const w = await fetch(`https://aggregator-api.kyberswap.com/${ko[F]}/api/v1/route/build`, {
        method: "POST",
        body: JSON.stringify({
          routeSummary: t.routeSummary,
          deadline: Math.floor(x.getTime() / 1e3),
          slippageTolerance: c,
          sender: B,
          recipient: B,
          source: v
        })
      }).then((h) => h.json());
      if (!w.data)
        throw new Error("Build route failed: " + JSON.stringify(w.details));
      const E = {
        from: B,
        to: t == null ? void 0 : t.routerAddress,
        data: w.data.data,
        value: ue.from(e.address === tt ? t == null ? void 0 : t.routeSummary.amountIn : 0)
      }, l = await (D == null ? void 0 : D.estimateGas(E)), o = await (D == null ? void 0 : D.getSigner().sendTransaction({
        ...E,
        gasLimit: ys(l || ue.from(0))
      }));
      W((o == null ? void 0 : o.hash) || ""), A == null || A((o == null ? void 0 : o.hash) || "", o), P(!1);
    } catch (x) {
      P(!1), ce(x);
    }
  };
  return H || R ? /* @__PURE__ */ J(br, {
    children: [/* @__PURE__ */ J(mc, {
      children: [Z === "success" ? /* @__PURE__ */ L(H4, {}) : Z === "failed" ? /* @__PURE__ */ L(hc, {}) : /* @__PURE__ */ L(K4, {}), R ? Z === "success" ? /* @__PURE__ */ L(Aa, {
        children: "Transaction successful"
      }) : Z === "failed" ? /* @__PURE__ */ L(Aa, {
        children: "Transaction failed"
      }) : /* @__PURE__ */ L(Aa, {
        children: "Processing transaction"
      }) : /* @__PURE__ */ L(Aa, {
        children: "Waiting For Confirmation"
      }), /* @__PURE__ */ J(q4, {
        children: [/* @__PURE__ */ L("img", {
          src: e.logoURI,
          width: "16",
          height: "16",
          alt: ""
        }), +Number(y == null ? void 0 : y.amountIn).toPrecision(6), /* @__PURE__ */ L(Ks, {
          style: {
            width: 16,
            transform: "rotate(180deg)"
          }
        }), /* @__PURE__ */ L("img", {
          src: n.logoURI,
          width: "16",
          height: "16",
          alt: ""
        }), +Number(y == null ? void 0 : y.amountOut).toPrecision(6)]
      }), !R && /* @__PURE__ */ L(bc, {
        children: "Confirm this transaction in your wallet"
      }), R && Z === "" && /* @__PURE__ */ L(bc, {
        children: "Waiting for the transaction to be mined"
      })]
    }), /* @__PURE__ */ L(li, {}), R && /* @__PURE__ */ J(pc, {
      href: `${Ha[F]}/tx/${R}`,
      target: "_blank",
      rel: "noopener norefferer",
      children: ["View transaction ", /* @__PURE__ */ L(qs, {})]
    }), /* @__PURE__ */ L(qn, {
      style: {
        marginTop: 0
      },
      onClick: m,
      children: "Close"
    })]
  }) : ne ? /* @__PURE__ */ J(br, {
    children: [/* @__PURE__ */ J(mc, {
      children: [/* @__PURE__ */ L(hc, {}), /* @__PURE__ */ L(Aa, {
        children: W4(ne)
      })]
    }), /* @__PURE__ */ J("div", {
      children: [/* @__PURE__ */ L(li, {}), /* @__PURE__ */ J(Y4, {
        role: "button",
        onClick: () => ie((x) => !x),
        children: [/* @__PURE__ */ J("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "14px"
          },
          children: [/* @__PURE__ */ L(Ld, {}), "Error details"]
        }), /* @__PURE__ */ L(X4, {
          open: $
        })]
      }), /* @__PURE__ */ L(li, {}), /* @__PURE__ */ L(Z4, {
        show: $,
        children: ((g = ne == null ? void 0 : ne.data) == null ? void 0 : g.message) || (ne == null ? void 0 : ne.message)
      })]
    }), $ && /* @__PURE__ */ L(li, {}), R && /* @__PURE__ */ J(pc, {
      children: ["View transaction ", /* @__PURE__ */ L(qs, {})]
    }), /* @__PURE__ */ L(qn, {
      style: {
        marginTop: 0
      },
      onClick: m,
      children: ne ? "Dismiss" : "Close"
    })]
  }) : /* @__PURE__ */ J(br, {
    children: [/* @__PURE__ */ L(Wc, {
      children: /* @__PURE__ */ J(Hc, {
        onClick: m,
        role: "button",
        children: [/* @__PURE__ */ L(Ks, {}), "Confirm swap"]
      })
    }), /* @__PURE__ */ J(uc, {
      children: [/* @__PURE__ */ L("img", {
        src: e.logoURI,
        width: "28",
        alt: "",
        height: "28",
        onError: ({
          currentTarget: x
        }) => {
          x.onerror = null, x.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
        }
      }), +Number(r).toPrecision(10), /* @__PURE__ */ L("div", {
        children: e.symbol
      })]
    }), /* @__PURE__ */ L(z4, {}), /* @__PURE__ */ J(uc, {
      children: [/* @__PURE__ */ L("img", {
        alt: "",
        src: n.logoURI,
        width: "28",
        height: "28",
        onError: ({
          currentTarget: x
        }) => {
          x.onerror = null, x.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
        }
      }), +Number(a).toPrecision(10), /* @__PURE__ */ L("div", {
        children: n.symbol
      })]
    }), T || U ? null : /* @__PURE__ */ J($4, {
      children: ["Output is estimated. You will receive at least ", k, " ", n.symbol, " or the transaction will revert."]
    }), /* @__PURE__ */ J(jc, {
      children: [/* @__PURE__ */ J(Jr, {
        children: [/* @__PURE__ */ L(Qr, {
          children: "Current Price"
        }), /* @__PURE__ */ J(jr, {
          children: ["1 ", e.symbol, " = ", parseFloat(i.toPrecision(6)), " ", n.symbol]
        })]
      }), /* @__PURE__ */ J(Jr, {
        children: [/* @__PURE__ */ J(Qr, {
          children: ["Minimum Received", /* @__PURE__ */ L(zr, {
            text: "Minimum amount you will receive or your transaction will revert"
          })]
        }), /* @__PURE__ */ J(jr, {
          children: [k, " ", k === "--" ? "" : n.symbol]
        })]
      }), /* @__PURE__ */ J(Jr, {
        children: [/* @__PURE__ */ J(Qr, {
          children: ["Gas Fee", /* @__PURE__ */ L(zr, {
            text: "Estimated network fee for your transaction"
          })]
        }), T || U ? /* @__PURE__ */ L(jr, {
          children: "--"
        }) : /* @__PURE__ */ J(jr, {
          children: ["$", (+t.routeSummary.gasUsd).toPrecision(4)]
        })]
      }), /* @__PURE__ */ J(Jr, {
        children: [/* @__PURE__ */ J(Qr, {
          children: ["Price Impact", /* @__PURE__ */ L(zr, {
            text: "Estimated change in price due to the size of your transaction"
          })]
        }), /* @__PURE__ */ L(jr, {
          style: {
            color: d > 15 ? S.error : d > 5 ? S.warning : S.text
          },
          children: d === -1 ? "--" : d > 0.01 ? d.toFixed(3) + "%" : "< 0.01%"
        })]
      }), /* @__PURE__ */ J(Jr, {
        children: [/* @__PURE__ */ L(Qr, {
          children: "Slippage"
        }), /* @__PURE__ */ J(jr, {
          children: [c * 100 / 1e4, "%"]
        })]
      })]
    }), /* @__PURE__ */ J("div", {
      style: {
        marginTop: "auto"
      },
      children: [T || U ? null : d > 15 ? /* @__PURE__ */ J(V4, {
        children: [/* @__PURE__ */ L(xs, {}), " Price Impact is Very High"]
      }) : d > 5 ? /* @__PURE__ */ J(Zs, {
        children: [/* @__PURE__ */ L(xs, {}), " Price Impact is High"]
      }) : d === -1 ? /* @__PURE__ */ J(Zs, {
        children: [/* @__PURE__ */ L(xs, {}), "Unable to calculate Price Impact"]
      }) : null, /* @__PURE__ */ J(qn, {
        onClick: u,
        children: ["Confirm ", T ? "wrap" : U ? "unwrap" : "swap"]
      })]
    })]
  });
}
const Q4 = Q.div`
  width: 100%;
  height: 364px;
  max-height: 364px;
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  /* width */
  ::-webkit-scrollbar {
    display: unset;
    width: 6px;
    border-radius: 999px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 999px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({
  theme: t
}) => t.subText + "66"};
    border-radius: 999px;
  }
`, Ys = Q.input`
  position: relative;
  transform: scale(1.35);
  accent-color: ${({
  theme: t
}) => t.accent};

  :indeterminate::before {
    content: '';
    display: block;
    color: ${({
  theme: t
}) => t.text};
    width: 13px;
    height: 13px;
    background-color: ${({
  theme: t
}) => t.accent};
    border-radius: 2px;
  }
  :indeterminate::after {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    border: solid ${({
  theme: t
}) => t.text};
    border-width: 2px 0 0 0;
    position: absolute;
    top: 5.5px;
    left: 3px;
  }
`, eb = Q.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background: ${({
  theme: t
}) => t.secondary};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  padding: 12px;
  color: ${({
  theme: t
}) => t.subText};
  display: flex;
  gap: 1rem;
  align-items: center;
`, tb = Q.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 12px;
`, rb = Q.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`, nb = Q.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({
  theme: t
}) => t.text};
`;
function ab({
  allDexes: t,
  excludedDexes: e,
  setExcludedDexes: r
}) {
  const [n, a] = We(""), i = e.map((d) => d.dexId), c = pr(null);
  return gt(() => {
    !c.current || (e.length === 0 ? (c.current.indeterminate = !1, c.current.checked = !0) : e.length === t.length ? (c.current.indeterminate = !1, c.current.checked = !1) : (c.current.indeterminate = !0, c.current.checked = !1));
  }, [t.length, e.length]), /* @__PURE__ */ J(br, {
    children: [/* @__PURE__ */ L(Td, {
      placeholder: "Search for a liquidity source",
      value: n,
      onChange: (d) => a(d.target.value)
    }), /* @__PURE__ */ J("div", {
      style: {
        flex: 1
      },
      children: [/* @__PURE__ */ J(eb, {
        children: [/* @__PURE__ */ L(Ys, {
          type: "checkbox",
          ref: c,
          onChange: (d) => {
            d.currentTarget.checked ? r([]) : r(t);
          }
        }), "Liquidity Sources"]
      }), /* @__PURE__ */ L(Q4, {
        children: t.filter((d) => d.name.toLowerCase().includes(n.trim().toLowerCase())).map((d) => /* @__PURE__ */ J(tb, {
          children: [/* @__PURE__ */ L(Ys, {
            type: "checkbox",
            checked: !i.includes(d.dexId),
            onChange: (m) => {
              m.target.checked ? r(e.filter((b) => b.dexId !== d.dexId)) : r([...e, d]);
            }
          }), /* @__PURE__ */ L(rb, {
            children: /* @__PURE__ */ L("img", {
              src: d.logoURL,
              alt: "logo"
            })
          }), /* @__PURE__ */ L(nb, {
            children: d.name
          })]
        }, d.dexId))
      })]
    })]
  });
}
const ib = (t) => /* @__PURE__ */ re.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ re.createElement("g", { clipPath: "url(#clip0_1597_66764)" }, /* @__PURE__ */ re.createElement("path", { d: "M10 13.3335H3.33333V4.66683C3.33333 4.30016 3.03333 4.00016 2.66667 4.00016C2.3 4.00016 2 4.30016 2 4.66683V13.3335C2 14.0668 2.6 14.6668 3.33333 14.6668H10C10.3667 14.6668 10.6667 14.3668 10.6667 14.0002C10.6667 13.6335 10.3667 13.3335 10 13.3335ZM13.3333 10.6668V2.66683C13.3333 1.9335 12.7333 1.3335 12 1.3335H6C5.26667 1.3335 4.66667 1.9335 4.66667 2.66683V10.6668C4.66667 11.4002 5.26667 12.0002 6 12.0002H12C12.7333 12.0002 13.3333 11.4002 13.3333 10.6668ZM12 10.6668H6V2.66683H12V10.6668Z", fill: "currentColor" })), /* @__PURE__ */ re.createElement("defs", null, /* @__PURE__ */ re.createElement("clipPath", { id: "clip0_1597_66764" }, /* @__PURE__ */ re.createElement("rect", { width: 16, height: 16, fill: "currentColor" })))), sb = Q(Xd)`
  width: 14px;
  height: 14px;
  circle {
    stroke-width: 6;
  }

  path {
    stroke-width: 6;
  }
`, ob = Q(Jd)`
  width: 24px;
  height: 24px;

  circle {
    stroke-width: 6;
  }

  path {
    stroke-width: 6;
  }
`, cb = Q.div`
  padding: 1.25rem;
  gap: 12px;
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  background: ${({
  theme: t
}) => t.secondary};
  display: flex;
  align-items: flex-start;
`, fb = Q.div`
  color: ${({
  theme: t
}) => t.subText};
  font-size: 14px;
  text-align: left;
`, db = Q.div`
  font-weight: 500;
  text-align: left;
  font-size: 20px;
`, lb = Q.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 8px;
  gap: 4px;
  a {
    line-height: 0;
  }
`, hb = Q.div`
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  background: ${({
  theme: t
}) => t.error + "44"};
  padding: 20px;
`, ub = Q.div`
  display: flex;
  font-size: 20px;
  color: ${({
  theme: t
}) => t.error};
  gap: 8px;
`, mb = Q.div`
  font-size: 14px;
  margin-top: 16px;
  line-height: 20px;
  text-align: left;
`, pb = Q.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
`;
function bb({
  token: t,
  onImport: e
}) {
  const {
    chainId: r
  } = Mt(), [n, a] = We(!1), [i, c] = We(!1), {
    addToken: d
  } = Md(), m = Ga();
  return gt(() => {
    if (i) {
      const b = setTimeout(() => {
        c(!1);
      }, 2e3);
      return () => {
        clearTimeout(b);
      };
    }
  }, [i]), /* @__PURE__ */ J(br, {
    children: [/* @__PURE__ */ J(cb, {
      children: [/* @__PURE__ */ L(Rd, {
        style: {
          width: "44px",
          height: "44px"
        }
      }), /* @__PURE__ */ J("div", {
        children: [/* @__PURE__ */ L(db, {
          children: t.symbol
        }), /* @__PURE__ */ L(fb, {
          children: t.symbol
        }), /* @__PURE__ */ J(lb, {
          children: ["Address: ", t.address.substring(0, 6), "...", t.address.substring(36), i ? /* @__PURE__ */ L(sb, {}) : /* @__PURE__ */ L(ib, {
            style: {
              cursor: "pointer",
              width: "14px",
              height: "14px",
              color: m.text
            },
            role: "button",
            onClick: () => {
              w3(t.address), c(!0);
            }
          }), /* @__PURE__ */ L("a", {
            href: Ha[r] + "/address/" + t.address,
            target: "_blank",
            rel: "noopener norefferer noreferrer",
            children: /* @__PURE__ */ L(qs, {
              style: {
                width: "12px",
                height: "12px"
              }
            })
          })]
        })]
      })]
    }), /* @__PURE__ */ J(hb, {
      children: [/* @__PURE__ */ J(ub, {
        children: [/* @__PURE__ */ L(ob, {}), /* @__PURE__ */ L("div", {
          children: "Trade at your own risk!"
        })]
      }), /* @__PURE__ */ J(mb, {
        children: ["Anyone can create a token, including creating fake versions of existing tokens that claim to represent projects", /* @__PURE__ */ L("br", {}), /* @__PURE__ */ L("br", {}), "If you purchase this token, you may not be able to sell it back"]
      }), /* @__PURE__ */ J(pb, {
        children: [/* @__PURE__ */ L(Ys, {
          type: "checkbox",
          checked: n,
          onChange: (b) => a(b.currentTarget.checked)
        }), " I understand"]
      })]
    }), /* @__PURE__ */ L(qn, {
      style: {
        marginTop: "auto"
      },
      disabled: !n,
      onClick: () => {
        d(t), e();
      },
      children: "Import"
    })]
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Qd = function(t, e) {
  return (Qd = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n)
      n.hasOwnProperty(a) && (r[a] = n[a]);
  })(t, e);
}, gb, hi, xb = (function(t) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var n = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var c = typeof i;
          if (c === "string" || c === "number")
            n.push(i);
          else if (Array.isArray(i) && i.length) {
            var d = r.apply(null, i);
            d && n.push(d);
          } else if (c === "object")
            for (var m in i)
              e.call(i, m) && i[m] && n.push(m);
        }
      }
      return n.join(" ");
    }
    t.exports ? (r.default = r, t.exports = r) : window.classNames = r;
  })();
}(hi = {
  path: gb,
  exports: {},
  require: function(t, e) {
    return function() {
      throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }(e == null && hi.path);
  }
}, hi.exports), hi.exports);
function Xs(t, e, r) {
  var n, a, i, c, d;
  function m() {
    var v = Date.now() - c;
    v < e && v >= 0 ? n = setTimeout(m, e - v) : (n = null, r || (d = t.apply(i, a), i = a = null));
  }
  e == null && (e = 100);
  var b = function() {
    i = this, a = arguments, c = Date.now();
    var v = r && !n;
    return n || (n = setTimeout(m, e)), v && (d = t.apply(i, a), i = a = null), d;
  };
  return b.clear = function() {
    n && (clearTimeout(n), n = null);
  }, b.flush = function() {
    n && (d = t.apply(i, a), i = a = null, clearTimeout(n), n = null);
  }, b;
}
Xs.debounce = Xs;
var yb = Xs;
(function(t, e) {
  e === void 0 && (e = {});
  var r = e.insertAt;
  if (t && typeof document < "u") {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t));
  }
})(`.indiana-scroll-container {
  overflow: auto; }
  .indiana-scroll-container--dragging {
    scroll-behavior: auto !important; }
    .indiana-scroll-container--dragging > * {
      pointer-events: none;
      cursor: -webkit-grab;
      cursor: grab; }
  .indiana-scroll-container--hide-scrollbars {
    overflow: hidden;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none; }
    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {
      display: none !important;
      height: 0 !important;
      width: 0 !important;
      background: transparent !important;
      -webkit-appearance: none !important; }
  .indiana-scroll-container--native-scroll {
    overflow: auto; }

.indiana-dragging {
  cursor: -webkit-grab;
  cursor: grab; }
`);
var vs, vb = (vs = "indiana-scroll-container", function(t, e) {
  if (!t)
    return vs;
  var r;
  typeof t == "string" ? r = t : e = t;
  var n = vs;
  return r && (n += "__" + r), n + (e ? Object.keys(e).reduce(function(a, i) {
    var c = e[i];
    return c && (a += " " + (typeof c == "boolean" ? n + "--" + i : n + "--" + i + "_" + c)), a;
  }, "") : "");
}), wb = function(t) {
  function e(r) {
    var n = t.call(this, r) || this;
    return n.onEndScroll = function() {
      n.scrolling = !1, !n.pressed && n.started && n.processEnd();
    }, n.onScroll = function(a) {
      var i = n.container.current;
      i.scrollLeft === n.scrollLeft && i.scrollTop === n.scrollTop || (n.scrolling = !0, n.processScroll(a), n.onEndScroll());
    }, n.onTouchStart = function(a) {
      var i = n.props.nativeMobileScroll;
      if (n.isDraggable(a.target))
        if (n.internal = !0, i && n.scrolling)
          n.pressed = !0;
        else {
          var c = a.touches[0];
          n.processClick(a, c.clientX, c.clientY), !i && n.props.stopPropagation && a.stopPropagation();
        }
    }, n.onTouchEnd = function(a) {
      var i = n.props.nativeMobileScroll;
      n.pressed && (!n.started || n.scrolling && i ? n.pressed = !1 : n.processEnd(), n.forceUpdate());
    }, n.onTouchMove = function(a) {
      var i = n.props.nativeMobileScroll;
      if (n.pressed && (!i || !n.isMobile)) {
        var c = a.touches[0];
        c && n.processMove(a, c.clientX, c.clientY), a.preventDefault(), n.props.stopPropagation && a.stopPropagation();
      }
    }, n.onMouseDown = function(a) {
      n.isDraggable(a.target) && n.isScrollable() && (n.internal = !0, n.props.buttons.indexOf(a.button) !== -1 && (n.processClick(a, a.clientX, a.clientY), a.preventDefault(), n.props.stopPropagation && a.stopPropagation()));
    }, n.onMouseMove = function(a) {
      n.pressed && (n.processMove(a, a.clientX, a.clientY), a.preventDefault(), n.props.stopPropagation && a.stopPropagation());
    }, n.onMouseUp = function(a) {
      n.pressed && (n.started ? n.processEnd() : (n.internal = !1, n.pressed = !1, n.forceUpdate(), n.props.onClick && n.props.onClick(a)), a.preventDefault(), n.props.stopPropagation && a.stopPropagation());
    }, n.container = _r.createRef(), n.onEndScroll = yb(n.onEndScroll, 300), n.scrolling = !1, n.started = !1, n.pressed = !1, n.internal = !1, n.getRef = n.getRef.bind(n), n;
  }
  return function(r, n) {
    function a() {
      this.constructor = r;
    }
    Qd(r, n), r.prototype = n === null ? Object.create(n) : (a.prototype = n.prototype, new a());
  }(e, t), e.prototype.componentDidMount = function() {
    var r = this.props.nativeMobileScroll, n = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, {
      passive: !1
    }), window.addEventListener("touchend", this.onTouchEnd), n.addEventListener("touchstart", this.onTouchStart, {
      passive: !1
    }), n.addEventListener("mousedown", this.onMouseDown, {
      passive: !1
    }), r && (this.isMobile = this.isMobileDevice(), this.isMobile && this.forceUpdate());
  }, e.prototype.componentWillUnmount = function() {
    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
  }, e.prototype.getElement = function() {
    return this.container.current;
  }, e.prototype.isMobileDevice = function() {
    return window.orientation !== void 0 || navigator.userAgent.indexOf("IEMobile") !== -1;
  }, e.prototype.isDraggable = function(r) {
    var n = this.props.ignoreElements;
    if (n) {
      var a = r.closest(n);
      return a === null || a.contains(this.getElement());
    }
    return !0;
  }, e.prototype.isScrollable = function() {
    var r = this.container.current;
    return r && (r.scrollWidth > r.clientWidth || r.scrollHeight > r.clientHeight);
  }, e.prototype.processClick = function(r, n, a) {
    var i = this.container.current;
    this.scrollLeft = i.scrollLeft, this.scrollTop = i.scrollTop, this.clientX = n, this.clientY = a, this.pressed = !0;
  }, e.prototype.processStart = function(r) {
    r === void 0 && (r = !0);
    var n = this.props.onStartScroll;
    this.started = !0, r && document.body.classList.add("indiana-dragging"), n && n({
      external: !this.internal
    }), this.forceUpdate();
  }, e.prototype.processScroll = function(r) {
    if (this.started) {
      var n = this.props.onScroll;
      n && n({
        external: !this.internal
      });
    } else
      this.processStart(!1);
  }, e.prototype.processMove = function(r, n, a) {
    var i = this.props, c = i.horizontal, d = i.vertical, m = i.activationDistance, b = i.onScroll, v = this.container.current;
    this.started ? (c && (v.scrollLeft -= n - this.clientX), d && (v.scrollTop -= a - this.clientY), b && b({
      external: !this.internal
    }), this.clientX = n, this.clientY = a, this.scrollLeft = v.scrollLeft, this.scrollTop = v.scrollTop) : (c && Math.abs(n - this.clientX) > m || d && Math.abs(a - this.clientY) > m) && (this.clientX = n, this.clientY = a, this.processStart());
  }, e.prototype.processEnd = function() {
    var r = this.props.onEndScroll;
    this.container.current && r && r({
      external: !this.internal
    }), this.pressed = !1, this.started = !1, this.scrolling = !1, this.internal = !1, document.body.classList.remove("indiana-dragging"), this.forceUpdate();
  }, e.prototype.getRef = function(r) {
    [this.container, this.props.innerRef].forEach(function(n) {
      n && (typeof n == "function" ? n(r) : n.current = r);
    });
  }, e.prototype.render = function() {
    var r = this.props, n = r.children, a = r.draggingClassName, i = r.className, c = r.style, d = r.hideScrollbars, m = r.component;
    return _r.createElement(m, {
      className: xb(i, this.pressed && a, vb({
        dragging: this.pressed,
        "hide-scrollbars": d,
        "native-scroll": this.isMobile
      })),
      style: c,
      ref: this.getRef,
      onScroll: this.onScroll
    }, n);
  }, e.defaultProps = {
    nativeMobileScroll: !0,
    hideScrollbars: !0,
    activationDistance: 10,
    vertical: !0,
    horizontal: !0,
    stopPropagation: !1,
    style: {},
    component: "div",
    buttons: [0]
  }, e;
}(cl);
function Ab(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Oo = Ab, Cb = typeof Gt == "object" && Gt && Gt.Object === Object && Gt, Eb = Cb, Ib = Eb, kb = typeof self == "object" && self && self.Object === Object && self, Sb = Ib || kb || Function("return this")(), el = Sb, Db = el, Bb = function() {
  return Db.Date.now();
}, Fb = Bb, Mb = /\s/;
function _b(t) {
  for (var e = t.length; e-- && Mb.test(t.charAt(e)); )
    ;
  return e;
}
var Rb = _b, Tb = Rb, Ub = /^\s+/;
function Pb(t) {
  return t && t.slice(0, Tb(t) + 1).replace(Ub, "");
}
var Ob = Pb, Nb = el, Lb = Nb.Symbol, tl = Lb, gc = tl, rl = Object.prototype, jb = rl.hasOwnProperty, Wb = rl.toString, Ca = gc ? gc.toStringTag : void 0;
function Hb(t) {
  var e = jb.call(t, Ca), r = t[Ca];
  try {
    t[Ca] = void 0;
    var n = !0;
  } catch {
  }
  var a = Wb.call(t);
  return n && (e ? t[Ca] = r : delete t[Ca]), a;
}
var zb = Hb, $b = Object.prototype, Vb = $b.toString;
function Gb(t) {
  return Vb.call(t);
}
var Kb = Gb, xc = tl, qb = zb, Zb = Kb, Yb = "[object Null]", Xb = "[object Undefined]", yc = xc ? xc.toStringTag : void 0;
function Jb(t) {
  return t == null ? t === void 0 ? Xb : Yb : yc && yc in Object(t) ? qb(t) : Zb(t);
}
var Qb = Jb;
function e8(t) {
  return t != null && typeof t == "object";
}
var t8 = e8, r8 = Qb, n8 = t8, a8 = "[object Symbol]";
function i8(t) {
  return typeof t == "symbol" || n8(t) && r8(t) == a8;
}
var s8 = i8, o8 = Ob, vc = Oo, c8 = s8, wc = 0 / 0, f8 = /^[-+]0x[0-9a-f]+$/i, d8 = /^0b[01]+$/i, l8 = /^0o[0-7]+$/i, h8 = parseInt;
function u8(t) {
  if (typeof t == "number")
    return t;
  if (c8(t))
    return wc;
  if (vc(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = vc(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = o8(t);
  var r = d8.test(t);
  return r || l8.test(t) ? h8(t.slice(2), r ? 2 : 8) : f8.test(t) ? wc : +t;
}
var m8 = u8, p8 = Oo, ws = Fb, Ac = m8, b8 = "Expected a function", g8 = Math.max, x8 = Math.min;
function y8(t, e, r) {
  var n, a, i, c, d, m, b = 0, v = !1, A = !1, S = !0;
  if (typeof t != "function")
    throw new TypeError(b8);
  e = Ac(e) || 0, p8(r) && (v = !!r.leading, A = "maxWait" in r, i = A ? g8(Ac(r.maxWait) || 0, e) : i, S = "trailing" in r ? !!r.trailing : S);
  function D(W) {
    var Z = n, Y = a;
    return n = a = void 0, b = W, c = t.apply(Y, Z), c;
  }
  function B(W) {
    return b = W, d = setTimeout(T, e), v ? D(W) : c;
  }
  function F(W) {
    var Z = W - m, Y = W - b, ne = e - Z;
    return A ? x8(ne, i - Y) : ne;
  }
  function k(W) {
    var Z = W - m, Y = W - b;
    return m === void 0 || Z >= e || Z < 0 || A && Y >= i;
  }
  function T() {
    var W = ws();
    if (k(W))
      return U(W);
    d = setTimeout(T, F(W));
  }
  function U(W) {
    return d = void 0, S && n ? D(W) : (n = a = void 0, c);
  }
  function H() {
    d !== void 0 && clearTimeout(d), b = 0, n = m = a = d = void 0;
  }
  function P() {
    return d === void 0 ? c : U(ws());
  }
  function R() {
    var W = ws(), Z = k(W);
    if (n = arguments, a = this, m = W, Z) {
      if (d === void 0)
        return B(m);
      if (A)
        return clearTimeout(d), d = setTimeout(T, e), D(m);
    }
    return d === void 0 && (d = setTimeout(T, e)), c;
  }
  return R.cancel = H, R.flush = P, R;
}
var v8 = y8, w8 = v8, A8 = Oo, C8 = "Expected a function";
function E8(t, e, r) {
  var n = !0, a = !0;
  if (typeof t != "function")
    throw new TypeError(C8);
  return A8(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), w8(t, e, {
    leading: n,
    maxWait: e,
    trailing: a
  });
}
var I8 = E8;
function k8(t, e) {
  const r = pr(t);
  return r.current = t, fa(() => I8(r.current, e), [e]);
}
const S8 = (t, e) => e == null ? void 0 : e.find(
  (r) => r.dexId === t.exchange || (t.exchange === "kyberswap" || t.exchange === "kyberswap-static") && r.dexId === "kyberswapv1"
), D8 = (t, e = 0) => e === 1 ? "100%" : !t && t !== 0 ? null : `${(e > 1 ? Math.min(99.99, Math.max(0.01, t)) : t).toFixed(0)}%`, B8 = (t) => {
  var e, r, n, a;
  ((e = t == null ? void 0 : t.scrollTop) != null ? e : 0) > 0 ? t == null || t.classList.add("top") : t == null || t.classList.remove("top"), ((r = t == null ? void 0 : t.scrollHeight) != null ? r : 0) - ((n = t == null ? void 0 : t.scrollTop) != null ? n : 0) > ((a = t == null ? void 0 : t.clientHeight) != null ? a : 0) ? t == null || t.classList.add("bottom") : t == null || t.classList.remove("bottom");
}, F8 = (t, e, r) => k8(() => {
  var i, c, d, m, b;
  const a = t.current;
  (a == null ? void 0 : a.scrollLeft) > 0 ? (i = e.current) == null || i.classList.add("left-visible") : (c = e.current) == null || c.classList.remove("left-visible"), Math.floor((((d = r.current) == null ? void 0 : d.scrollWidth) || 0) - (a == null ? void 0 : a.scrollLeft)) > Math.floor(a == null ? void 0 : a.clientWidth) ? (m = e.current) == null || m.classList.add("right-visible") : (b = e.current) == null || b.classList.remove("right-visible");
}, 300), M8 = Q.div`
  flex: 1;
  max-height: 100%;
  max-width: 100%;
  margin-left: 0;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 999px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: ${({
  theme: t
}) => t.border};
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track-piece {
    background: transparent;
  }
`, _8 = Q.div`
  width: 100%;
`, R8 = Q.div`
  position: relative;
  min-height: 0;
  overflow: hidden;
  background-color: ${({
  theme: t
}) => t.dialog};
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  &:before,
  &:after {
    content: '';
    display: block;
    z-index: 3;
    pointer-events: none;
    position: absolute;
    height: 50px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s ease;
    opacity: 0;
  }

  &:before {
    background: linear-gradient(to bottom, ${({
  backgroundColor: t
}) => t}, transparent);
    top: 0;
  }

  &:after {
    background: linear-gradient(to top, ${({
  backgroundColor: t
}) => t}, transparent);
    bottom: 0;
  }

  &.top:before,
  &.bottom:after {
    opacity: 1;
  }
`, T8 = Q.div`
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  position: absolute;
  top: calc(50% - 15px);
  left: 8px;
  transform: translateY(50%);
  z-index: 2;
  color: ${({
  theme: t
}) => t.accent};
  background: ${({
  backgroundColor: t
}) => t};
`, Cc = Q.i`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: ${({
  out: t
}) => t ? "unset" : "6.5px"};
  right: ${({
  out: t
}) => t ? "6.5px" : "unset"};
  z-index: 1;
  background-color: ${({
  theme: t
}) => t.accent};
`, U8 = Q.div`
  position: relative;
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`, P8 = Q.div`
  flex: auto;
  min-width: 50px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.border};
  height: 1px;
`, Ec = Q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  width: max-content;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  min-height: 38px;
  border-radius: 0.5rem;
`, nl = Q.a`
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  color: ${({
  theme: t
}) => t.subText};
  ${({
  reverse: t
}) => t && Pi`
      flex-direction: row-reverse;
      justify-content: flex-start;
    `}
  padding-bottom: 7px;
  border-bottom: 1px solid ${({
  theme: t
}) => t.border};

  & > span {
    margin-left: 4px;
    margin-right: 4px;
  }
`, O8 = Q.div`
  margin: auto;
  width: 100%;
  position: relative;
  padding: 20px 10px 0;
  box-sizing: border-box;

  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    right: 0;
  }
`, N8 = Q.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;

  &:before,
  &:after {
    content: '';
    display: block;
    border-left: 1px solid ${({
  theme: t
}) => t.border};
    width: 100%;
    height: calc(50% + 20px);
    position: absolute;
    border-right: 1px solid ${({
  theme: t
}) => t.border};
    box-sizing: border-box;
    pointer-events: none;
  }

  &:before {
    top: -20px;
  }

  &:after {
    bottom: -10px;
  }

  &:last-child:after {
    display: none;
  }
`, L8 = Q.div`
  position: absolute;
  border-bottom: 1px solid ${({
  theme: t
}) => t.border};
  width: calc(100% - 68px);
  left: 43px;
`, j8 = Q.div`
  z-index: 1;
  display: flex;
  align-items: center;
`, W8 = Q.div`
  padding: 8px;
  border-radius: 8px;
  background-color: ${({
  theme: t
}) => t.primary};
  border: 1px solid ${({
  theme: t
}) => t.subText};
  height: fit-content;
  position: relative;
  flex: 0 0 146px;
  margin: auto;
  transition: filter 0.15s ease;
  cursor: pointer;

  :hover {
    filter: ${({
  theme: t
}) => t.darkMode ? "brightness(130%)" : "brightness(97%)"};
  }
`, H8 = Q.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0;
  margin-top: 4px;
  font-size: 10px;
  border-radius: 8px;
  color: ${({
  theme: t
}) => t.subText};
  line-height: 20px;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: ${({
  theme: t
}) => t.darkMode ? t.white : t.black};
  }

  & > .img--sm {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }

  &:first-child {
    margin-top: 8px;
  }
`, z8 = Q.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0;
  margin-top: 4px;
  font-size: 10px;
  border-radius: 8px;
  color: ${({
  theme: t
}) => t.subText};
  line-height: 20px;
  white-space: nowrap;
  text-decoration: none;

  & > .img--sm {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }

  &:first-child {
    margin-top: 8px;
  }
`, $8 = Q.div`
  width: calc(100% - 68px);
  margin: 10px 0 10px 6px;

  &:after,
  &:before {
    transition: all 0.1s ease;
    content: '';
    display: block;
    z-index: 2;
    pointer-events: none;
    position: absolute;
    inset: 0 0 auto auto;
    width: 40px;
    height: calc(100% - 20px);
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }

  &:after {
    background: linear-gradient(to right, ${({
  backgroundColor: t
}) => t}, transparent);
    left: 42px;
  }

  &:before {
    background: linear-gradient(to left, ${({
  backgroundColor: t
}) => t}, transparent);
    right: 24px;
  }

  &.left-visible:after,
  &.right-visible:before {
    opacity: 1;
  }
`, al = Q.div`
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid ${({
  theme: t
}) => t.accent};
`, il = Q.div`
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
function V8(t) {
  if (!t.length)
    return [];
  try {
    let e = -1;
    const r = t.reduce((i, c) => {
      var v, A;
      let d, m = [], b = ((A = (v = c.pools) == null ? void 0 : v[0]) == null ? void 0 : A.swapPercentage) || 0;
      if (i[c.slug]) {
        const S = i[c.slug] || {};
        d = S.index;
        const D = S.subRoutes || [];
        b += S.swapPercentage || 0, D.forEach((B, F) => {
          const k = c.pools && c.pools[F] || {}, T = B.reduce((P, R) => P + R.swapAmount || 0, 0) + k.swapAmount || 0;
          let U = !1;
          const H = B.map((P) => {
            const R = { ...P }, W = R.id === k.id;
            let Z = R.swapAmount || 0;
            return W && (U = !0, Z = Z + k.swapAmount || 0), R.swapPercentage = Math.round(parseFloat(Z) * 100 / parseFloat(T)), R.total = T.toString(), R;
          });
          if (!U) {
            const P = Math.round(parseFloat(k.swapAmount) * 100 / parseFloat(T));
            H.push({ ...k, swapPercentage: P });
          }
          m[F] = H;
        });
      } else
        e += 1, d = e, m = c.pools.map((S) => [{ ...S, swapPercentage: 100 }]);
      return Object.assign({}, i, {
        [c.slug]: { index: d, swapPercentage: b, path: c.path, subRoutes: m }
      });
    }, {}), n = Object.keys(r).length, a = new Array(n).map(() => ({}));
    return Object.values(r).forEach((i) => {
      i.index > n || a.splice(i.index, 1, {
        swapPercentage: i.swapPercentage,
        path: i.path,
        subRoutes: i.subRoutes,
        id: i.subRoutes.flat().map((c) => c.id).join("-")
      });
    }), a;
  } catch (e) {
    return console.error("[error_routesV2]", e), [];
  }
}
function G8(t, e, r, n, a) {
  if (!r || !n)
    return;
  const i = a.reduce((b, v) => (b[v.address] = v, b), {}), c = [], d = function(b, v) {
    if (!b || !v)
      return;
    if (A3(t, b, e == null ? void 0 : e.address) && Number(r) > 0) {
      const S = parseFloat(v) * 100 / parseFloat(r);
      return Math.round(S);
    }
  }, m = (b) => b.toLowerCase() === tt.toLowerCase() ? Ti[t] : (i == null ? void 0 : i[Do(b) || ""]) || (i == null ? void 0 : i[b]) || {
    name: "--",
    decimals: 0,
    symbol: "--",
    address: b,
    chainId: t,
    logoURI: ""
  };
  return n.forEach((b) => {
    var S;
    if (!b.length || b.length < 1)
      return;
    if (b.length === 1) {
      const D = b[0], B = [m(D.tokenIn), m(D.tokenOut)];
      c.push({
        slug: (S = D.tokenOut) == null ? void 0 : S.toLowerCase(),
        pools: [
          {
            id: D.pool,
            exchange: D.exchange,
            swapAmount: parseFloat(D.swapAmount),
            swapPercentage: d(D.tokenIn, D.swapAmount)
          }
        ],
        path: B,
        id: D.pool
      });
      return;
    }
    const v = [], A = [];
    b.forEach((D, B) => {
      A.push({
        id: D.pool + "-" + D.tokenIn + "-" + D.tokenOut,
        exchange: D.exchange,
        swapAmount: parseFloat(D.swapAmount),
        swapPercentage: B === 0 ? d(D.tokenIn, D.swapAmount) : 100
      }), B === 0 && v.push(m(D.tokenIn));
      const F = m(D.tokenOut);
      v.push(F);
    }), c.push({
      slug: v.slice(1).map((D) => D.address).join("-").toLowerCase(),
      path: v,
      pools: A,
      id: A.map((D) => D.id).join("-")
    });
  }), V8(c);
}
const K8 = ({
  route: t,
  chainId: e,
  backgroundColor: r
}) => {
  var m;
  const n = pr(null), a = pr(null), i = pr(null), [c] = Nd(), d = F8(n, i, a);
  return gt(() => (window.addEventListener("resize", d), () => window.removeEventListener("resize", d)), []), gt(() => {
    d();
  }, [t]), /* @__PURE__ */ L($8, {
    ref: i,
    backgroundColor: r,
    children: /* @__PURE__ */ L(wb, {
      innerRef: n,
      vertical: !1,
      onScroll: d,
      children: /* @__PURE__ */ L(j8, {
        length: (m = t == null ? void 0 : t.subRoutes) == null ? void 0 : m.length,
        ref: a,
        children: t.subRoutes.map((b, v, A) => {
          const S = t.path[v + 1], D = b.flat().map((B) => B.id).join("-");
          return /* @__PURE__ */ J(_r.Fragment, {
            children: [/* @__PURE__ */ J(W8, {
              children: [/* @__PURE__ */ J(nl, {
                style: {
                  marginRight: 0
                },
                href: `${Ha[e]}/token/${S == null ? void 0 : S.address}`,
                target: "_blank",
                children: [/* @__PURE__ */ L("img", {
                  width: "20",
                  height: "20",
                  alt: "tokenIn",
                  src: S == null ? void 0 : S.logoURI,
                  style: {
                    borderRadius: "50%"
                  },
                  onError: ({
                    currentTarget: B
                  }) => {
                    B.onerror = null, B.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
                  }
                }), /* @__PURE__ */ L("span", {
                  children: S == null ? void 0 : S.symbol
                })]
              }), Array.isArray(b) ? b.map((B) => {
                var U;
                const F = S8(B, c), k = (U = B.id.split("-")) == null ? void 0 : U[0];
                return ((H) => Do(k) && !["1inch", "paraswap", "0x"].includes(B.exchange) ? /* @__PURE__ */ L(H8, {
                  href: `${Ha[e]}/address/${k}`,
                  target: "_blank",
                  children: H
                }, `${H}-${B.id}`) : /* @__PURE__ */ L(z8, {
                  children: H
                }, `${H}-${B.id}`))(/* @__PURE__ */ J(br, {
                  children: [F != null && F.logoURL ? /* @__PURE__ */ L("img", {
                    src: F == null ? void 0 : F.logoURL,
                    alt: "",
                    className: "img--sm"
                  }) : /* @__PURE__ */ L("i", {
                    className: "img--sm"
                  }), `${(F == null ? void 0 : F.name) || "--"}: ${B.swapPercentage}%`]
                }));
              }) : null]
            }), v !== A.length - 1 && /* @__PURE__ */ L(il, {
              children: /* @__PURE__ */ L(al, {})
            })]
          }, D);
        })
      })
    })
  });
}, q8 = ({
  trade: t,
  currencyIn: e,
  currencyOut: r
}) => {
  const {
    chainId: n
  } = Mt(), a = pr(null), i = pr(null), c = pr(null), d = Xi(), m = t == null ? void 0 : t.routeSummary.amountIn, b = t == null ? void 0 : t.routeSummary.amountOut, v = fa(() => {
    var B;
    if (!!t)
      return G8(n, e, m, (B = t.routeSummary) == null ? void 0 : B.route, d);
  }, [n, e, m, d, t]), A = (B, F, k) => {
    if (n && B) {
      const T = F ? Number(F) / 10 ** ((B == null ? void 0 : B.decimals) || 18) : 0, U = Number(T.toFixed(4));
      return /* @__PURE__ */ J(nl, {
        as: "div",
        reverse: k,
        style: {
          border: "none"
        },
        children: [/* @__PURE__ */ L("img", {
          width: "20",
          height: "20",
          alt: k ? "token out" : "token in",
          src: B == null ? void 0 : B.logoURI,
          style: {
            borderRadius: "50%"
          },
          onError: ({
            currentTarget: H
          }) => {
            H.onerror = null, H.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
          }
        }), /* @__PURE__ */ J("span", {
          children: [U, " ", B.symbol]
        })]
      });
    }
    return null;
  }, S = n && v && v.length > 0, D = sn(() => B8(a.current), []);
  return gt(() => (window.addEventListener("resize", D), () => window.removeEventListener("resize", D)), [D]), gt(() => {
    D();
  }, [v, D]), /* @__PURE__ */ L(_8, {
    children: /* @__PURE__ */ L(R8, {
      ref: a,
      children: /* @__PURE__ */ L(M8, {
        ref: i,
        onScroll: D,
        style: {
          maxHeight: "100%"
        },
        children: /* @__PURE__ */ J("div", {
          ref: c,
          children: [/* @__PURE__ */ J(U8, {
            children: [/* @__PURE__ */ L(Ec, {
              children: A(e, m)
            }), !S && /* @__PURE__ */ L(P8, {}), /* @__PURE__ */ L(Ec, {
              children: A(r, b, !0)
            })]
          }), S ? /* @__PURE__ */ L("div", {
            children: /* @__PURE__ */ J(O8, {
              children: [/* @__PURE__ */ L(Cc, {}), /* @__PURE__ */ L(Cc, {
                out: !0
              }), v.map((B) => /* @__PURE__ */ J(N8, {
                children: [/* @__PURE__ */ L(T8, {
                  children: D8(B.swapPercentage, v.length)
                }), /* @__PURE__ */ L(L8, {}), /* @__PURE__ */ L(K8, {
                  route: B,
                  chainId: n
                }), /* @__PURE__ */ L(il, {
                  style: {
                    marginRight: "2px"
                  },
                  children: /* @__PURE__ */ L(al, {})
                })]
              }, B.id))]
            })
          }) : null]
        })
      })
    })
  });
}, Z8 = fl(q8), Y8 = Q.div`
  background-color: ${({
  theme: t
}) => t.dialog};
  border-radius: ${({
  theme: t
}) => t.borderRadius};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 1rem;
  overflow: hidden;
  z-index: ${Dd.DIALOG};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @supports (overflow: clip) {
    overflow: clip;
  }

  transition: 0.25s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(100%);
  }
`, X8 = Q.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, J8 = Q.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`, Ic = Q.span`
  font-size: 16px;
  width: max-content;
`, As = Q.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({
  theme: t
}) => t.subText};
  font-size: 12px;
  margin-top: 1rem;
`, Q8 = ({
  defaultTokenIn: t,
  defaultTokenOut: e,
  defaultSlippage: r,
  feeSetting: n,
  client: a,
  onTxSubmit: i,
  enableRoute: c,
  enableDexes: d,
  title: m
}) => {
  var Ve, ve, xe, nt, Ce, Ee, wt;
  const [b, v] = We(null), {
    chainId: A
  } = Mt(), S = !So.includes(A.toString()), D = Xi(), {
    loading: B,
    error: F,
    tokenIn: k,
    tokenOut: T,
    setTokenIn: U,
    setTokenOut: H,
    inputAmout: P,
    setInputAmount: R,
    trade: W,
    slippage: Z,
    setSlippage: Y,
    getRate: ne,
    deadline: ce,
    setDeadline: $,
    allDexes: ie,
    excludedDexes: y,
    setExcludedDexes: s,
    setTrade: f,
    isWrap: u,
    isUnwrap: g
  } = V3({
    defaultTokenIn: t,
    defaultTokenOut: e,
    defaultSlippage: r,
    feeSetting: n,
    enableDexes: d
  }), x = S ? null : W, [w, E] = We(!1), {
    balances: l,
    refetch: o
  } = Bo(D.map((me) => me.address)), h = k === tt ? Ti[A] : D.find((me) => me.address.toLowerCase() === k.toLowerCase()), I = T === tt ? Ti[A] : D.find((me) => me.address.toLowerCase() === T.toLowerCase()), p = u || g ? P : (Ve = x == null ? void 0 : x.routeSummary) != null && Ve.amountOut ? mr.formatUnits(x.routeSummary.amountOut, I == null ? void 0 : I.decimals).toString() : "";
  let C = "";
  p && (C = u || g ? parseFloat((+p).toPrecision(8)).toString() : (Number(p) * (1 - Z / 1e4)).toPrecision(8).toString());
  const N = l[k] || ue.from(0), _ = l[T] || ue.from(0), j = mr.formatUnits(N, (h == null ? void 0 : h.decimals) || 18), X = mr.formatUnits(_, (I == null ? void 0 : I.decimals) || 18), z = u || g ? 1 : ((ve = x == null ? void 0 : x.routeSummary) == null ? void 0 : ve.amountIn) && ((xe = x == null ? void 0 : x.routeSummary) == null ? void 0 : xe.amountOut) && parseFloat(mr.formatUnits(x.routeSummary.amountOut, (I == null ? void 0 : I.decimals) || 18)) / parseFloat(P), O = parseFloat(parseFloat(j).toPrecision(10)), we = parseFloat(parseFloat(X).toPrecision(10)), G = Ga(), V = x != null && x.routeSummary.amountOutUsd ? (+x.routeSummary.amountInUsd - +x.routeSummary.amountOutUsd) * 100 / +x.routeSummary.amountInUsd : -1, $e = (() => {
    switch (b) {
      case "setting":
        return "Settings";
      case "currency_in":
        return "Select a token";
      case "currency_out":
        return "Select a token";
      case "dexes_setting":
        return "Liquidity Sources";
      case "import_token":
        return "Import Token";
      case "trade_route":
        return "Your Trade Route";
      default:
        return null;
    }
  })(), [fe, be] = We(null), [st, le] = We("in"), ye = (() => {
    switch (b) {
      case "setting":
        return /* @__PURE__ */ L(D4, {
          slippage: Z,
          setSlippage: Y,
          deadline: ce,
          setDeadline: $,
          allDexes: ie,
          excludedDexes: y,
          onShowSource: () => v("dexes_setting")
        });
      case "trade_route":
        return c ? /* @__PURE__ */ L(Z8, {
          trade: x,
          currencyIn: h,
          currencyOut: I
        }) : null;
      case "currency_in":
        return /* @__PURE__ */ L(X0, {
          selectedToken: k,
          onChange: (me) => {
            me === T && H(k), U(me), v(null);
          },
          onImport: (me) => {
            be(me), v("import_token"), le("in");
          }
        });
      case "currency_out":
        return /* @__PURE__ */ L(X0, {
          selectedToken: T,
          onChange: (me) => {
            me === k && U(T), H(me), v(null);
          },
          onImport: (me) => {
            be(me), v("import_token"), le("out");
          }
        });
      case "review":
        return z && h && x && I ? /* @__PURE__ */ L(J4, {
          trade: x,
          tokenInInfo: h,
          amountIn: P,
          tokenOutInfo: I,
          amountOut: p,
          rate: z,
          priceImpact: V,
          slippage: Z,
          deadline: ce,
          client: a,
          onClose: () => {
            v(null), o();
          },
          onTxSubmit: i
        }) : null;
      case "dexes_setting":
        return /* @__PURE__ */ L(ab, {
          allDexes: ie,
          excludedDexes: y,
          setExcludedDexes: s
        });
      case "import_token":
        return fe ? /* @__PURE__ */ L(bb, {
          token: fe,
          onImport: () => {
            st === "in" ? (U(fe.address), v(null)) : (H(fe.address), v(null));
          }
        }) : null;
      default:
        return null;
    }
  })(), {
    loading: it,
    approve: ge,
    approvalState: te
  } = G3(((nt = x == null ? void 0 : x.routeSummary) == null ? void 0 : nt.amountIn) || "0", k, (x == null ? void 0 : x.routerAddress) || "");
  return /* @__PURE__ */ J(m1, {
    children: [/* @__PURE__ */ J(Y8, {
      className: b ? "open" : "close",
      children: [b !== "review" && /* @__PURE__ */ L(Wc, {
        children: /* @__PURE__ */ J(Hc, {
          onClick: () => v(b === "dexes_setting" ? "setting" : null),
          role: "button",
          children: [/* @__PURE__ */ L(Nc, {
            style: {
              color: G.subText
            }
          }), $e]
        })
      }), /* @__PURE__ */ L(J8, {
        children: ye
      }), /* @__PURE__ */ J(As, {
        style: {
          marginTop: "0"
        },
        children: ["Powered By", /* @__PURE__ */ L(Qo, {})]
      })]
    }), /* @__PURE__ */ J(p1, {
      children: [m || "Swap", /* @__PURE__ */ L(Fs, {
        onClick: () => v("setting"),
        children: /* @__PURE__ */ L(d1, {})
      })]
    }), /* @__PURE__ */ J(e0, {
      children: [/* @__PURE__ */ J(t0, {
        children: [/* @__PURE__ */ L("div", {
          children: /* @__PURE__ */ L(b1, {
            onClick: () => R(j),
            children: "Max"
          })
        }), /* @__PURE__ */ J(r0, {
          children: [/* @__PURE__ */ L(Jo, {}), O]
        })]
      }), /* @__PURE__ */ J(n0, {
        children: [/* @__PURE__ */ L(a0, {
          value: P,
          onChange: (me) => {
            const Ie = me.target.value.replace(/,/g, "."), _t = RegExp("^\\d*(?:\\\\[.])?\\d*$");
            (Ie === "" || _t.test(Ie.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && R(Ie);
          },
          inputMode: "decimal",
          autoComplete: "off",
          autoCorrect: "off",
          type: "text",
          pattern: "^[0-9]*[.,]?[0-9]*$",
          placeholder: "0.0",
          minLength: 1,
          maxLength: 79,
          spellCheck: "false"
        }), !!((Ce = x == null ? void 0 : x.routeSummary) != null && Ce.amountInUsd) && /* @__PURE__ */ J("span", {
          style: {
            fontSize: "12px",
            marginRight: "4px",
            color: G.subText
          },
          children: ["~", (+x.routeSummary.amountInUsd).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })]
        }), /* @__PURE__ */ J(i0, {
          onClick: () => !S && v("currency_in"),
          children: [h ? /* @__PURE__ */ J(br, {
            children: [/* @__PURE__ */ L("img", {
              width: "20",
              height: "20",
              alt: "tokenIn",
              src: h == null ? void 0 : h.logoURI,
              style: {
                borderRadius: "50%"
              },
              onError: ({
                currentTarget: me
              }) => {
                me.onerror = null, me.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
              }
            }), /* @__PURE__ */ L("div", {
              style: {
                marginLeft: "0.375rem"
              },
              children: h == null ? void 0 : h.symbol
            })]
          }) : /* @__PURE__ */ L(Ic, {
            children: "Select a token"
          }), /* @__PURE__ */ L(Bs, {})]
        })]
      })]
    }), /* @__PURE__ */ J(x1, {
      children: [/* @__PURE__ */ J(y1, {
        children: [/* @__PURE__ */ L(T4, {
          loading: B,
          onRefresh: () => {
            ne();
          },
          trade: x
        }), /* @__PURE__ */ L(v1, {
          children: (() => z ? w ? `1 ${I == null ? void 0 : I.symbol} = ${+(1 / z).toPrecision(10)} ${h == null ? void 0 : h.symbol}` : `1 ${h == null ? void 0 : h.symbol} = ${+z.toPrecision(10)} ${I == null ? void 0 : I.symbol}` : "--")()
        }), !!z && /* @__PURE__ */ L(Fs, {
          onClick: () => E((me) => !me),
          children: /* @__PURE__ */ L(h1, {})
        })]
      }), /* @__PURE__ */ L(g1, {
        onClick: () => {
          f(null), U(T), H(k);
        },
        children: /* @__PURE__ */ L(l1, {})
      })]
    }), /* @__PURE__ */ J(e0, {
      children: [/* @__PURE__ */ J(t0, {
        children: [/* @__PURE__ */ L("div", {}), /* @__PURE__ */ J(r0, {
          children: [/* @__PURE__ */ L(Jo, {}), we]
        })]
      }), /* @__PURE__ */ J(n0, {
        children: [/* @__PURE__ */ L(a0, {
          disabled: !0,
          value: u || g ? +p : (+p).toPrecision(8)
        }), !!((Ee = x == null ? void 0 : x.routeSummary) != null && Ee.amountOutUsd) && /* @__PURE__ */ J("span", {
          style: {
            fontSize: "12px",
            marginRight: "4px",
            color: G.subText
          },
          children: ["~", (+x.routeSummary.amountOutUsd).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })]
        }), /* @__PURE__ */ J(i0, {
          onClick: () => !S && v("currency_out"),
          children: [I ? /* @__PURE__ */ J(br, {
            children: [/* @__PURE__ */ L("img", {
              width: "20",
              height: "20",
              alt: "tokenOut",
              src: I == null ? void 0 : I.logoURI,
              style: {
                borderRadius: "50%"
              },
              onError: ({
                currentTarget: me
              }) => {
                me.onerror = null, me.src = new URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iQ3VycmVuY3lMb2dvX19TdHlsZWRMb2dvLXNjLTFxODJydWEtMSBncHhsS2EiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiPjwvcGF0aD48bGluZSB4MT0iMTIiIHkxPSIxNyIgeDI9IjEyLjAxIiB5Mj0iMTciPjwvbGluZT48L3N2Zz4K", self.location).href;
              }
            }), /* @__PURE__ */ L("div", {
              style: {
                marginLeft: "0.375rem"
              },
              children: I == null ? void 0 : I.symbol
            })]
          }) : /* @__PURE__ */ L(Ic, {
            children: "Select a token"
          }), /* @__PURE__ */ L(Bs, {})]
        })]
      })]
    }), /* @__PURE__ */ J(jc, {
      style: {
        marginTop: "1rem"
      },
      children: [/* @__PURE__ */ J(X8, {
        children: [/* @__PURE__ */ L(w1, {
          children: "More information"
        }), c && !(u || g) && /* @__PURE__ */ J(A1, {
          onClick: () => v("trade_route"),
          children: ["View Routes ", /* @__PURE__ */ L(u1, {
            style: {
              width: 12,
              height: 12
            }
          })]
        })]
      }), /* @__PURE__ */ L(C1, {}), /* @__PURE__ */ J(Jr, {
        children: [/* @__PURE__ */ J(Qr, {
          children: ["Minimum Received", /* @__PURE__ */ L(zr, {
            text: "Minimum amount you will receive or your transaction will revert"
          })]
        }), /* @__PURE__ */ L(jr, {
          children: C ? `${C} ${I == null ? void 0 : I.symbol}` : "--"
        })]
      }), /* @__PURE__ */ J(Jr, {
        children: [/* @__PURE__ */ J(Qr, {
          children: ["Gas Fee ", /* @__PURE__ */ L(zr, {
            text: "Estimated network fee for your transaction"
          })]
        }), /* @__PURE__ */ L(jr, {
          children: (wt = x == null ? void 0 : x.routeSummary) != null && wt.gasUsd ? "$" + (+x.routeSummary.gasUsd).toPrecision(4) : "--"
        })]
      }), /* @__PURE__ */ J(Jr, {
        children: [/* @__PURE__ */ J(Qr, {
          children: ["Price Impact", /* @__PURE__ */ L(zr, {
            text: "Estimated change in price due to the size of your transaction"
          })]
        }), /* @__PURE__ */ L(jr, {
          style: {
            color: V > 15 ? G.error : V > 5 ? G.warning : G.text
          },
          children: V === -1 ? "--" : V > 0.01 ? V.toFixed(3) + "%" : "< 0.01%"
        })]
      })]
    }), /* @__PURE__ */ L(qn, {
      disabled: !!F || B || it || te === Ea.PENDING || S,
      onClick: async () => {
        te === Ea.NOT_APPROVED && !u && !g ? ge() : v("review");
      },
      children: S ? /* @__PURE__ */ J(As, {
        style: {
          fontSize: "16px",
          marginTop: "0"
        },
        children: [/* @__PURE__ */ L(Lc, {
          style: {
            width: "24px",
            height: "24px"
          }
        }), "Unsupported network"]
      }) : B ? /* @__PURE__ */ L(rs, {
        children: "Calculate best route"
      }) : F || (u ? "Wrap" : g ? "Unwrap" : it ? /* @__PURE__ */ L(rs, {
        children: "Checking Allowance"
      }) : te === Ea.NOT_APPROVED ? "Approve" : te === Ea.PENDING ? /* @__PURE__ */ L(rs, {
        children: "Approving"
      }) : "Swap")
    }), /* @__PURE__ */ J(As, {
      children: ["Powered By", /* @__PURE__ */ L(Qo, {})]
    })]
  });
};
function r5({
  provider: t,
  tokenList: e,
  theme: r,
  defaultTokenIn: n,
  defaultTokenOut: a,
  defaultSlippage: i,
  feeSetting: c,
  client: d,
  onTxSubmit: m,
  enableRoute: b = !0,
  enableDexes: v,
  title: A
}) {
  return /* @__PURE__ */ L(dl, {
    children: /* @__PURE__ */ L(c1, {
      theme: r || f1,
      children: /* @__PURE__ */ L(I3, {
        provider: t,
        children: /* @__PURE__ */ L(D3, {
          tokenList: e,
          children: /* @__PURE__ */ L(Q8, {
            defaultTokenIn: n,
            defaultTokenOut: a,
            defaultSlippage: i,
            feeSetting: c,
            client: d,
            onTxSubmit: m,
            enableRoute: b,
            enableDexes: v,
            title: A
          })
        })
      })
    })
  });
}
export {
  Y8 as DialogWrapper,
  r5 as Widget
};
