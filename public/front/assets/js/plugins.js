/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (ie, e) {
    "use strict";
    var oe = [],
        r = Object.getPrototypeOf,
        ae = oe.slice,
        g = oe.flat
            ? function (e) {
                  return oe.flat.call(e);
              }
            : function (e) {
                  return oe.concat.apply([], e);
              },
        s = oe.push,
        se = oe.indexOf,
        n = {},
        i = n.toString,
        ue = n.hasOwnProperty,
        o = ue.toString,
        a = o.call(Object),
        le = {},
        v = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
        },
        y = function (e) {
            return null != e && e === e.window;
        },
        C = ie.document,
        u = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function m(e, t, n) {
        var r,
            i,
            o = (n = n || C).createElement("script");
        if (((o.text = e), t)) for (r in u) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e;
    }
    var t = "3.7.1",
        l = /HTML$/i,
        ce = function (e, t) {
            return new ce.fn.init(e, t);
        };
    function c(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    function fe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    (ce.fn = ce.prototype = {
        jquery: t,
        constructor: ce,
        length: 0,
        toArray: function () {
            return ae.call(this);
        },
        get: function (e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = ce.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return ce.each(this, e);
        },
        map: function (n) {
            return this.pushStack(
                ce.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(ae.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                ce.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                ce.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: oe.sort,
        splice: oe.splice,
    }),
        (ce.extend = ce.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || v(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (r = e[t]),
                            "__proto__" !== t &&
                                a !== r &&
                                (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}), (i = !1), (a[t] = ce.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        ce.extend({
            expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || ("function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                m(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (c(e)) {
                    for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            text: function (e) {
                var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                if (!i) while ((t = e[r++])) n += ce.text(t);
                return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : se.call(t, e, n);
            },
            isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !l.test(t || (n && n.nodeName) || "HTML");
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (c(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a);
            },
            guid: 1,
            support: le,
        }),
        "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
        ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase();
        });
    var pe = oe.pop,
        de = oe.sort,
        he = oe.splice,
        ge = "[\\x20\\t\\r\\n\\f]",
        ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
    ce.contains = function (e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
    };
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function p(e, t) {
        return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
    }
    ce.escapeSelector = function (e) {
        return (e + "").replace(f, p);
    };
    var ye = C,
        me = s;
    !(function () {
        var e,
            b,
            w,
            o,
            a,
            T,
            r,
            C,
            d,
            i,
            k = me,
            S = ce.expando,
            E = 0,
            n = 0,
            s = W(),
            c = W(),
            u = W(),
            h = W(),
            l = function (e, t) {
                return e === t && (a = !0), 0;
            },
            f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
            g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
            v = new RegExp(ge + "+", "g"),
            y = new RegExp("^" + ge + "*," + ge + "*"),
            m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
            x = new RegExp(ge + "|>"),
            j = new RegExp(g),
            A = new RegExp("^" + t + "$"),
            D = {
                ID: new RegExp("^#(" + t + ")"),
                CLASS: new RegExp("^\\.(" + t + ")"),
                TAG: new RegExp("^(" + t + "|[*])"),
                ATTR: new RegExp("^" + p),
                PSEUDO: new RegExp("^" + g),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + f + ")$", "i"),
                needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i"),
            },
            N = /^(?:input|select|textarea|button)$/i,
            q = /^h\d$/i,
            L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            H = /[+~]/,
            O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
            P = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            M = function () {
                V();
            },
            R = J(
                function (e) {
                    return !0 === e.disabled && fe(e, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            k.apply((oe = ae.call(ye.childNodes)), ye.childNodes), oe[ye.childNodes.length].nodeType;
        } catch (e) {
            k = {
                apply: function (e, t) {
                    me.apply(e, ae.call(t));
                },
                call: function (e) {
                    me.apply(e, ae.call(arguments, 1));
                },
            };
        }
        function I(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (((n = n || []), "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))) return n;
            if (!r && (V(e), (e = e || T), C)) {
                if (11 !== p && (u = L.exec(t)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return k.call(n, a), n;
                        } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n;
                    } else {
                        if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (!(h[t + " "] || (d && d.test(t)))) {
                    if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
                        ((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) || ((s = e.getAttribute("id")) ? (s = ce.escapeSelector(s)) : e.setAttribute("id", (s = S))), (o = (l = Y(t)).length);
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
                        c = l.join(",");
                    }
                    try {
                        return k.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        h(t, !0);
                    } finally {
                        s === S && e.removeAttribute("id");
                    }
                }
            }
            return re(t.replace(ve, "$1"), e, n, r);
        }
        function W() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], (e[t + " "] = n);
            };
        }
        function F(e) {
            return (e[S] = !0), e;
        }
        function $(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function B(t) {
            return function (e) {
                return fe(e, "input") && e.type === t;
            };
        }
        function _(t) {
            return function (e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t;
            };
        }
        function z(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function X(a) {
            return F(function (o) {
                return (
                    (o = +o),
                    F(function (e, t) {
                        var n,
                            r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function U(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        function V(e) {
            var t,
                n = e ? e.ownerDocument || e : ye;
            return (
                n != T &&
                    9 === n.nodeType &&
                    n.documentElement &&
                    ((r = (T = n).documentElement),
                    (C = !ce.isXMLDoc(T)),
                    (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
                    r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M),
                    (le.getById = $(function (e) {
                        return (r.appendChild(e).id = ce.expando), !T.getElementsByName || !T.getElementsByName(ce.expando).length;
                    })),
                    (le.disconnectedMatch = $(function (e) {
                        return i.call(e, "*");
                    })),
                    (le.scope = $(function () {
                        return T.querySelectorAll(":scope");
                    })),
                    (le.cssHas = $(function () {
                        try {
                            return T.querySelector(":has(*,:jqfake)"), !1;
                        } catch (e) {
                            return !0;
                        }
                    })),
                    le.getById
                        ? ((b.filter.ID = function (e) {
                              var t = e.replace(O, P);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (b.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && C) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((b.filter.ID = function (e) {
                              var n = e.replace(O, P);
                              return function (e) {
                                  var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                  return t && t.value === n;
                              };
                          }),
                          (b.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && C) {
                                  var n,
                                      r,
                                      i,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      (i = t.getElementsByName(e)), (r = 0);
                                      while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  }
                                  return [];
                              }
                          })),
                    (b.find.TAG = function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
                    }),
                    (b.find.CLASS = function (e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e);
                    }),
                    (d = []),
                    $(function (e) {
                        var t;
                        (r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                            e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"),
                            e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
                            e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
                            e.querySelectorAll(":checked").length || d.push(":checked"),
                            (t = T.createElement("input")).setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            (r.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"),
                            (t = T.createElement("input")).setAttribute("name", ""),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
                    }),
                    le.cssHas || d.push(":has"),
                    (d = d.length && new RegExp(d.join("|"))),
                    (l = function (e, t) {
                        if (e === t) return (a = !0), 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return (
                            n ||
                            (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!le.sortDetached && t.compareDocumentPosition(e) === n)
                                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                                    ? -1
                                    : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                                    ? 1
                                    : o
                                    ? se.call(o, e) - se.call(o, t)
                                    : 0
                                : 4 & n
                                ? -1
                                : 1)
                        );
                    })),
                T
            );
        }
        for (e in ((I.matches = function (e, t) {
            return I(e, null, null, t);
        }),
        (I.matchesSelector = function (e, t) {
            if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
                try {
                    var n = i.call(e, t);
                    if (n || le.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {
                    h(t, !0);
                }
            return 0 < I(t, T, null, [e]).length;
        }),
        (I.contains = function (e, t) {
            return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
        }),
        (I.attr = function (e, t) {
            (e.ownerDocument || e) != T && V(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
            return void 0 !== r ? r : e.getAttribute(t);
        }),
        (I.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (ce.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (((a = !le.sortStable), (o = !le.sortStable && ae.call(e, 0)), de.call(e, l), a)) {
                while ((t = e[i++])) t === e[i] && (r = n.push(i));
                while (r--) he.call(e, n[r], 1);
            }
            return (o = null), e;
        }),
        (ce.fn.uniqueSort = function () {
            return this.pushStack(ce.uniqueSort(ae.apply(this)));
        }),
        ((b = ce.expr = {
            cacheLength: 50,
            createPseudo: F,
            match: D,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(O, P)), (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && I.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return D.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(O, P).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return fe(e, t);
                          };
                },
                CLASS: function (e) {
                    var t = s[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                            s(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, r, i) {
                    return function (e) {
                        var t = I.attr(e, n);
                        return null == t
                            ? "!=" === r
                            : !r ||
                                  ((t += ""),
                                  "=" === r
                                      ? t === i
                                      : "!=" === r
                                      ? t !== i
                                      : "^=" === r
                                      ? i && 0 === t.indexOf(i)
                                      : "*=" === r
                                      ? i && -1 < t.indexOf(i)
                                      : "$=" === r
                                      ? i && t.slice(-i.length) === i
                                      : "~=" === r
                                      ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i)
                                      : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function (d, e, t, h, g) {
                    var v = "nth" !== d.slice(0, 3),
                        y = "last" !== d.slice(-4),
                        m = "of-type" === e;
                    return 1 === h && 0 === g
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var r,
                                  i,
                                  o,
                                  a,
                                  s,
                                  u = v !== y ? "nextSibling" : "previousSibling",
                                  l = e.parentNode,
                                  c = m && e.nodeName.toLowerCase(),
                                  f = !n && !m,
                                  p = !1;
                              if (l) {
                                  if (v) {
                                      while (u) {
                                          o = e;
                                          while ((o = o[u])) if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                                          s = u = "only" === d && !s && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                                      (p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2]), (o = a && l.childNodes[a]);
                                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                                          if (1 === o.nodeType && ++p && o === e) {
                                              i[d] = [E, a, p];
                                              break;
                                          }
                                  } else if ((f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p))
                                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop())) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
                                  return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                              }
                          };
                },
                PSEUDO: function (e, o) {
                    var t,
                        a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                    return a[S]
                        ? a(o)
                        : 1 < a.length
                        ? ((t = [e, e, "", o]),
                          b.setFilters.hasOwnProperty(e.toLowerCase())
                              ? F(function (e, t) {
                                    var n,
                                        r = a(e, o),
                                        i = r.length;
                                    while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                                })
                              : function (e) {
                                    return a(e, 0, t);
                                })
                        : a;
                },
            },
            pseudos: {
                not: F(function (e) {
                    var r = [],
                        i = [],
                        s = ne(e.replace(ve, "$1"));
                    return s[S]
                        ? F(function (e, t, n, r) {
                              var i,
                                  o = s(e, null, r, []),
                                  a = e.length;
                              while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                          })
                        : function (e, t, n) {
                              return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                          };
                }),
                has: F(function (t) {
                    return function (e) {
                        return 0 < I(t, e).length;
                    };
                }),
                contains: F(function (t) {
                    return (
                        (t = t.replace(O, P)),
                        function (e) {
                            return -1 < (e.textContent || ce.text(e)).indexOf(t);
                        }
                    );
                }),
                lang: F(function (n) {
                    return (
                        A.test(n || "") || I.error("unsupported lang: " + n),
                        (n = n.replace(O, P).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = ie.location && ie.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === r;
                },
                focus: function (e) {
                    return (
                        e ===
                            (function () {
                                try {
                                    return T.activeElement;
                                } catch (e) {}
                            })() &&
                        T.hasFocus() &&
                        !!(e.type || e.href || ~e.tabIndex)
                    );
                },
                enabled: z(!1),
                disabled: z(!0),
                checked: function (e) {
                    return (fe(e, "input") && !!e.checked) || (fe(e, "option") && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !b.pseudos.empty(e);
                },
                header: function (e) {
                    return q.test(e.nodeName);
                },
                input: function (e) {
                    return N.test(e.nodeName);
                },
                button: function (e) {
                    return (fe(e, "input") && "button" === e.type) || fe(e, "button");
                },
                text: function (e) {
                    var t;
                    return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: X(function () {
                    return [0];
                }),
                last: X(function (e, t) {
                    return [t - 1];
                }),
                eq: X(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: X(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: X(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: X(function (e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: X(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = b.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = B(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e);
        function G() {}
        function Y(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s,
                u,
                l = c[e + " "];
            if (l) return t ? 0 : l.slice(0);
            (a = e), (s = []), (u = b.preFilter);
            while (a) {
                for (o in ((n && !(r = y.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                (n = !1),
                (r = m.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace(ve, " ") }), (a = a.slice(n.length))),
                b.filter))
                    !(r = D[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
                if (!n) break;
            }
            return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
        }
        function Q(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function J(a, e, t) {
            var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = n++;
            return e.first
                ? function (e, t, n) {
                      while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var r,
                          i,
                          o = [E, f];
                      if (n) {
                          while ((e = e[s])) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
                      } else
                          while ((e = e[s]))
                              if (1 === e.nodeType || c)
                                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                                  else {
                                      if ((r = i[l]) && r[0] === E && r[1] === f) return (o[2] = r[2]);
                                      if (((i[l] = o)[2] = a(e, t, n))) return !0;
                                  }
                      return !1;
                  };
        }
        function K(i) {
            return 1 < i.length
                ? function (e, t, n) {
                      var r = i.length;
                      while (r--) if (!i[r](e, t, n)) return !1;
                      return !0;
                  }
                : i[0];
        }
        function Z(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function ee(d, h, g, v, y, e) {
            return (
                v && !v[S] && (v = ee(v)),
                y && !y[S] && (y = ee(y, e)),
                F(function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u = [],
                        l = [],
                        c = t.length,
                        f =
                            e ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                                return n;
                            })(h || "*", n.nodeType ? [n] : n, []),
                        p = !d || (!e && h) ? f : Z(f, u, d, n, r);
                    if ((g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)) {
                        (i = Z(s, l)), v(i, [], n, r), (o = i.length);
                        while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                (i = []), (o = s.length);
                                while (o--) (a = s[o]) && i.push((p[o] = a));
                                y(null, (s = []), i, r);
                            }
                            o = s.length;
                            while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a));
                        }
                    } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s);
                })
            );
        }
        function te(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[" "],
                    s = o ? 1 : 0,
                    u = J(
                        function (e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    l = J(
                        function (e) {
                            return -1 < se.call(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            var r = (!o && (n || t != w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ];
                s < r;
                s++
            )
                if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                        return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te((e = e.slice(n))), n < r && Q(e));
                    }
                    c.push(t);
                }
            return K(c);
        }
        function ne(e, t) {
            var n,
                v,
                y,
                m,
                x,
                r,
                i = [],
                o = [],
                a = u[e + " "];
            if (!a) {
                t || (t = Y(e)), (n = t.length);
                while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
                (a = u(
                    e,
                    ((v = o),
                    (m = 0 < (y = i).length),
                    (x = 0 < v.length),
                    (r = function (e, t, n, r, i) {
                        var o,
                            a,
                            s,
                            u = 0,
                            l = "0",
                            c = e && [],
                            f = [],
                            p = w,
                            d = e || (x && b.find.TAG("*", i)),
                            h = (E += null == p ? 1 : Math.random() || 0.1),
                            g = d.length;
                        for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
                            if (x && o) {
                                (a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
                                while ((s = v[a++]))
                                    if (s(o, t || T, n)) {
                                        k.call(r, o);
                                        break;
                                    }
                                i && (E = h);
                            }
                            m && ((o = !s && o) && u--, e && c.push(o));
                        }
                        if (((u += l), m && l !== u)) {
                            a = 0;
                            while ((s = y[a++])) s(c, f, t, n);
                            if (e) {
                                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                                f = Z(f);
                            }
                            k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
                        }
                        return i && ((E = h), (w = p)), c;
                    }),
                    m ? F(r) : r)
                )).selector = e;
            }
            return a;
        }
        function re(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l = "function" == typeof e && e,
                c = !r && Y((e = l.selector || e));
            if (((n = n || []), 1 === c.length)) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
                    l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                }
                i = D.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (((a = o[i]), b.relative[(s = a.type)])) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), (H.test(o[0].type) && U(t.parentNode)) || t))) {
                        if ((o.splice(i, 1), !(e = r.length && Q(o)))) return k.apply(n, r), n;
                        break;
                    }
                }
            }
            return (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t), n;
        }
        (G.prototype = b.filters = b.pseudos),
            (b.setFilters = new G()),
            (le.sortStable = S.split("").sort(l).join("") === S),
            V(),
            (le.sortDetached = $(function (e) {
                return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
            })),
            (ce.find = I),
            (ce.expr[":"] = ce.expr.pseudos),
            (ce.unique = ce.uniqueSort),
            (I.compile = ne),
            (I.select = re),
            (I.setDocument = V),
            (I.tokenize = Y),
            (I.escape = ce.escapeSelector),
            (I.getText = ce.text),
            (I.isXML = ce.isXMLDoc),
            (I.selectors = ce.expr),
            (I.support = ce.support),
            (I.uniqueSort = ce.uniqueSort);
    })();
    var d = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && ce(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        h = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        b = ce.expr.match.needsContext,
        w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function T(e, n, r) {
        return v(n)
            ? ce.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? ce.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : "string" != typeof n
            ? ce.grep(e, function (e) {
                  return -1 < se.call(n, e) !== r;
              })
            : ce.filter(n, e, r);
    }
    (ce.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? ce.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : ce.find.matches(
                      e,
                      ce.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        ce.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        ce(e).filter(function () {
                            for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
                return 1 < r ? ce.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(T(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(T(this, e || [], !0));
            },
            is: function (e) {
                return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length;
            },
        });
    var k,
        S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((ce.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || k), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (((t = t instanceof ce ? t[0] : t), ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t))) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(ce)) : ce.makeArray(e, this);
    }).prototype = ce.fn),
        (k = ce(C));
    var E = /^(?:parents|prev(?:Until|All))/,
        j = { children: !0, contents: !0, next: !0, prev: !0 };
    function A(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    ce.fn.extend({
        has: function (e) {
            var t = ce(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && ce(e);
            if (!b.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        ce.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return d(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return d(e, "parentNode", n);
                },
                next: function (e) {
                    return A(e, "nextSibling");
                },
                prev: function (e) {
                    return A(e, "previousSibling");
                },
                nextAll: function (e) {
                    return d(e, "nextSibling");
                },
                prevAll: function (e) {
                    return d(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return d(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return d(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return h((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return h(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes));
                },
            },
            function (r, i) {
                ce.fn[r] = function (e, t) {
                    var n = ce.map(this, i, e);
                    return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n);
                };
            }
        );
    var D = /[^\x20\t\r\n\f]+/g;
    function N(e) {
        return e;
    }
    function q(e) {
        throw e;
    }
    function L(e, t, n, r) {
        var i;
        try {
            e && v((i = e.promise)) ? i.call(e).done(t).fail(n) : e && v((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (ce.Callbacks = function (r) {
        var e, n;
        r =
            "string" == typeof r
                ? ((e = r),
                  (n = {}),
                  ce.each(e.match(D) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : ce.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                            (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                ce.each(e, function (e, t) {
                                    v(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && "string" !== x(t) && n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        ce.each(arguments, function (e, t) {
                            var n;
                            while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < ce.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = t = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), t || i || (s = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        ce.extend({
            Deferred: function (e) {
                var o = [
                        ["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
                        ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return ce
                                .Deferred(function (r) {
                                    ce.each(o, function (e, t) {
                                        var n = v(i[t[4]]) && i[t[4]];
                                        s[t[1]](function () {
                                            var e = n && n.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                                        });
                                    }),
                                        (i = null);
                                })
                                .promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    var n = this,
                                        r = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(i < u)) {
                                                if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    v(t)
                                                        ? s
                                                            ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                                                            : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith)))
                                                        : (a !== N && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                                            }
                                        },
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                                                  }
                                              };
                                    i ? t() : (ce.Deferred.getErrorHook ? (t.error = ce.Deferred.getErrorHook()) : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t));
                                };
                            }
                            return ce
                                .Deferred(function (e) {
                                    o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? ce.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    ce.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = ae.call(arguments),
                    o = ce.Deferred(),
                    a = function (t) {
                        return function (e) {
                            (r[t] = this), (i[t] = 1 < arguments.length ? ae.call(arguments) : e), --n || o.resolveWith(r, i);
                        };
                    };
                if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
                while (t--) L(i[t], a(t), o.reject);
                return o.promise();
            },
        });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (ce.Deferred.exceptionHook = function (e, t) {
        ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
        (ce.readyException = function (e) {
            ie.setTimeout(function () {
                throw e;
            });
        });
    var O = ce.Deferred();
    function P() {
        C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
    }
    (ce.fn.ready = function (e) {
        return (
            O.then(e)["catch"](function (e) {
                ce.readyException(e);
            }),
            this
        );
    }),
        ce.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --ce.readyWait : ce.isReady) || ((ce.isReady = !0) !== e && 0 < --ce.readyWait) || O.resolveWith(C, [ce]);
            },
        }),
        (ce.ready.then = O.then),
        "complete" === C.readyState || ("loading" !== C.readyState && !C.documentElement.doScroll) ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
    var M = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                v(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(ce(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        R = /^-ms-/,
        I = /-([a-z])/g;
    function W(e, t) {
        return t.toUpperCase();
    }
    function F(e) {
        return e.replace(R, "ms-").replace(I, W);
    }
    var $ = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function B() {
        this.expando = ce.expando + B.uid++;
    }
    (B.uid = 1),
        (B.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), $(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[F(t)] = n;
                else for (r in t) i[F(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !ce.isEmptyObject(t);
            },
        });
    var _ = new B(),
        z = new B(),
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        U = /[A-Z]/g;
    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(U, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i));
                } catch (e) {}
                z.set(e, t, n);
            } else n = void 0;
        return n;
    }
    ce.extend({
        hasData: function (e) {
            return z.hasData(e) || _.hasData(e);
        },
        data: function (e, t, n) {
            return z.access(e, t, n);
        },
        removeData: function (e, t) {
            z.remove(e, t);
        },
        _data: function (e, t, n) {
            return _.access(e, t, n);
        },
        _removeData: function (e, t) {
            _.remove(e, t);
        },
    }),
        ce.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && ((i = z.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                        t = a.length;
                        while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = F(r.slice(5))), V(o, r, i[r]));
                        _.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n
                    ? this.each(function () {
                          z.set(this, n);
                      })
                    : M(
                          this,
                          function (e) {
                              var t;
                              if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                              this.each(function () {
                                  z.set(this, n, e);
                              });
                          },
                          null,
                          e,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    z.remove(this, e);
                });
            },
        }),
        ce.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = _.get(e, t)), n && (!r || Array.isArray(n) ? (r = _.access(e, t, ce.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = ce.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = ce._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                ce.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    _.get(e, n) ||
                    _.access(e, n, {
                        empty: ce.Callbacks("once memory").add(function () {
                            _.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        ce.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? ce.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = ce.queue(this, t, n);
                              ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    ce.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = ce.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
        Q = ["Top", "Right", "Bottom", "Left"],
        J = C.documentElement,
        K = function (e) {
            return ce.contains(e.ownerDocument, e);
        },
        Z = { composed: !0 };
    J.getRootNode &&
        (K = function (e) {
            return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument;
        });
    var ee = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && K(e) && "none" === ce.css(e, "display"));
    };
    function te(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return ce.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (ce.cssNumber[t] || ("px" !== l && +u)) && Y.exec(ce.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), ce.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var ne = {};
    function re(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
                ((n = r.style.display),
                t
                    ? ("none" === n && ((l[c] = _.get(r, "display") || null), l[c] || (r.style.display = "")),
                      "" === r.style.display &&
                          ee(r) &&
                          (l[c] =
                              ((u = a = o = void 0),
                              (a = (i = r).ownerDocument),
                              (s = i.nodeName),
                              (u = ne[s]) || ((o = a.body.appendChild(a.createElement(s))), (u = ce.css(o, "display")), o.parentNode.removeChild(o), "none" === u && (u = "block"), (ne[s] = u)))))
                    : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    ce.fn.extend({
        show: function () {
            return re(this, !0);
        },
        hide: function () {
            return re(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ee(this) ? ce(this).show() : ce(this).hide();
                  });
        },
    });
    var xe,
        be,
        we = /^(?:checkbox|radio)$/i,
        Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i;
    (xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
        (be = C.createElement("input")).setAttribute("type", "radio"),
        be.setAttribute("checked", "checked"),
        be.setAttribute("name", "t"),
        xe.appendChild(be),
        (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (xe.innerHTML = "<textarea>x</textarea>"),
        (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
        (xe.innerHTML = "<option></option>"),
        (le.option = !!xe.lastChild);
    var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function Se(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n;
    }
    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
    }
    (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead), (ke.th = ke.td), le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
    var je = /<|&#?\w+;/;
    function Ae(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
                else if (je.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))), (s = (Te.exec(o) || ["", ""])[1].toLowerCase()), (u = ke[s] || ke._default), (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]), (c = u[0]);
                    while (c--) a = a.lastChild;
                    ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && -1 < ce.inArray(o, r)) i && i.push(o);
            else if (((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)) {
                c = 0;
                while ((o = a[c++])) Ce.test(o.type || "") && n.push(o);
            }
        return f;
    }
    var De = /^([^.]*)(?:\.(.+)|)/;
    function Ne() {
        return !0;
    }
    function qe() {
        return !1;
    }
    function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Le(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = qe;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return ce().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = ce.guid++))),
            e.each(function () {
                ce.event.add(this, t, i, r, n);
            })
        );
    }
    function He(e, r, t) {
        t
            ? (_.set(e, r, !1),
              ce.event.add(e, r, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n = _.get(this, r);
                      if (1 & e.isTrigger && this[r]) {
                          if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation();
                          else if (((n = ae.call(arguments)), _.set(this, r, n), this[r](), (t = _.get(this, r)), _.set(this, r, !1), n !== t)) return e.stopImmediatePropagation(), e.preventDefault(), t;
                      } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), (e.isImmediatePropagationStopped = Ne));
                  },
              }))
            : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
    }
    (ce.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = _.get(t);
            if ($(t)) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && ce.find.matchesSelector(J, i),
                    n.guid || (n.guid = ce.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                        (a = v.handle = function (e) {
                            return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0;
                        }),
                    (l = (e = (e || "").match(D) || [""]).length);
                while (l--)
                    (d = g = (s = De.exec(e[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = ce.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = ce.event.special[d] || {}),
                            (c = ce.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ce.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(d, a))),
                            f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (ce.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = _.hasData(e) && _.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(D) || [""]).length;
                while (l--)
                    if (((d = g = (s = De.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        (f = ce.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || ce.removeEvent(e, d, v.handle), delete u[d]);
                    } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
                ce.isEmptyObject(u) && _.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = ce.event.fix(e),
                l = (_.get(this, "events") || Object.create(null))[u.type] || [],
                c = ce.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
                (a = ce.event.handlers.call(this, u, l)), (t = 0);
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    (u.currentTarget = i.elem), (n = 0);
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                            ((u.handleObj = o), (u.data = o.data), void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (e) {
            return e[ce.expando] ? e : new ce.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click")) || fe(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (ce.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (ce.Event = function (e, t) {
            if (!(this instanceof ce.Event)) return new ce.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ne : qe),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && ce.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[ce.expando] = !0);
        }),
        (ce.Event.prototype = {
            constructor: ce.Event,
            isDefaultPrevented: qe,
            isPropagationStopped: qe,
            isImmediatePropagationStopped: qe,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ne), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ne), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ne), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        ce.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            ce.event.addProp
        ),
        ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) {
            function o(e) {
                if (C.documentMode) {
                    var t = _.get(this, "handle"),
                        n = ce.event.fix(e);
                    (n.type = "focusin" === e.type ? "focus" : "blur"), (n.isSimulated = !0), t(e), n.target === n.currentTarget && t(n);
                } else ce.event.simulate(i, e.target, ce.event.fix(e));
            }
            (ce.event.special[r] = {
                setup: function () {
                    var e;
                    if ((He(this, r, !0), !C.documentMode)) return !1;
                    (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1);
                },
                trigger: function () {
                    return He(this, r), !0;
                },
                teardown: function () {
                    var e;
                    if (!C.documentMode) return !1;
                    (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i));
                },
                _default: function (e) {
                    return _.get(e.target, r);
                },
                delegateType: i,
            }),
                (ce.event.special[i] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = C.documentMode ? this : e,
                            n = _.get(t, i);
                        n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = C.documentMode ? this : e,
                            n = _.get(t, i) - 1;
                        n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i));
                    },
                });
        }),
        ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
            ce.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        r = e.handleObj;
                    return (n && (n === this || ce.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
                },
            };
        }),
        ce.fn.extend({
            on: function (e, t, n, r) {
                return Le(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return Le(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = qe),
                    this.each(function () {
                        ce.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Oe = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Re(e, t) {
        return (fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0]) || e;
    }
    function Ie(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function We(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Fe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (s = _.get(e).events)) for (i in (_.remove(t, "handle events"), s)) for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
            z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
        }
    }
    function $e(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = v(d);
        if (h || (1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
            });
        if (f && ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) (u = e), c !== p && ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++)
                    (u = a[c]),
                        Ce.test(u.type || "") &&
                            !_.access(u, "globalEval") &&
                            ce.contains(l, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : m(u.textContent.replace(Me, ""), u, l));
        }
        return n;
    }
    function Be(e, t, n) {
        for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    ce.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = K(e);
            if (!(le.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || ce.isXMLDoc(e)))
                for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
                    (s = o[r]), (u = a[r]), void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
            if (t)
                if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);
                else Fe(e, c);
            return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c;
        },
        cleanData: function (e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if ((t = n[_.expando])) {
                        if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                        n[_.expando] = void 0;
                    }
                    n[z.expando] && (n[z.expando] = void 0);
                }
        },
    }),
        ce.fn.extend({
            detach: function (e) {
                return Be(this, e, !0);
            },
            remove: function (e) {
                return Be(this, e);
            },
            text: function (e) {
                return M(
                    this,
                    function (e) {
                        return void 0 === e
                            ? ce.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return $e(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Re(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return $e(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Re(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return $e(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return $e(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return ce.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return M(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = ce.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return $e(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
            ce.fn[e] = function (e) {
                for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), ce(r[o])[a](t), s.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
        ze = /^--/,
        Xe = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = ie), t.getComputedStyle(e);
        },
        Ue = function (e, t, n) {
            var r,
                i,
                o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
        },
        Ve = new RegExp(Q.join("|"), "i");
    function Ge(e, t, n) {
        var r,
            i,
            o,
            a,
            s = ze.test(t),
            u = e.style;
        return (
            (n = n || Xe(e)) &&
                ((a = n.getPropertyValue(t) || n[t]),
                s && a && (a = a.replace(ve, "$1") || void 0),
                "" !== a || K(e) || (a = ce.style(e, t)),
                !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && ((r = u.width), (i = u.minWidth), (o = u.maxWidth), (u.minWidth = u.maxWidth = u.width = a), (a = n.width), (u.width = r), (u.minWidth = i), (u.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function Ye(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (l) {
                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    J.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                (n = "1%" !== e.top), (s = 12 === t(e.marginLeft)), (l.style.right = "60%"), (o = 36 === t(e.right)), (r = 36 === t(e.width)), (l.style.position = "absolute"), (i = 12 === t(l.offsetWidth / 3)), J.removeChild(u), (l = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = C.createElement("div"),
            l = C.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
            ce.extend(le, {
                boxSizingReliable: function () {
                    return e(), r;
                },
                pixelBoxStyles: function () {
                    return e(), o;
                },
                pixelPosition: function () {
                    return e(), n;
                },
                reliableMarginLeft: function () {
                    return e(), s;
                },
                scrollboxSize: function () {
                    return e(), i;
                },
                reliableTrDimensions: function () {
                    var e, t, n, r;
                    return (
                        null == a &&
                            ((e = C.createElement("table")),
                            (t = C.createElement("tr")),
                            (n = C.createElement("div")),
                            (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "box-sizing:content-box;border:1px solid"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            J.appendChild(e).appendChild(t).appendChild(n),
                            (r = ie.getComputedStyle(t)),
                            (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
                            J.removeChild(e)),
                        a
                    );
                },
            }));
    })();
    var Qe = ["Webkit", "Moz", "ms"],
        Je = C.createElement("div").style,
        Ke = {};
    function Ze(e) {
        var t = ce.cssProps[e] || Ke[e];
        return (
            t ||
            (e in Je
                ? e
                : (Ke[e] =
                      (function (e) {
                          var t = e[0].toUpperCase() + e.slice(1),
                              n = Qe.length;
                          while (n--) if ((e = Qe[n] + t) in Je) return e;
                      })(e) || e))
        );
    }
    var et = /^(none|table(?!-c[ea]).+)/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        nt = { letterSpacing: "0", fontWeight: "400" };
    function rt(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
                r
                    ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
                    : ((u += ce.css(e, "padding" + Q[a], !0, i)), "padding" !== n ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i)) : (s += ce.css(e, "border" + Q[a] + "Width", !0, i)));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u + l;
    }
    function ot(e, t, n) {
        var r = Xe(e),
            i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
            o = i,
            a = Ge(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!le.boxSizingReliable() && i) || (!le.reliableTrDimensions() && fe(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === ce.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        );
    }
    function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i);
    }
    ce.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ge(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = F(t),
                    u = ze.test(t),
                    l = e.style;
                if ((u || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && ((n = te(e, t, i)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o || u || (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
                        le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = F(t);
            return (
                ze.test(t) || (t = Ze(s)),
                (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Ge(e, t, r)),
                "normal" === i && t in nt && (i = nt[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        ce.each(["height", "width"], function (e, u) {
            ce.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !et.test(ce.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? ot(e, u, n)
                            : Ue(e, tt, function () {
                                  return ot(e, u, n);
                              });
                },
                set: function (e, t, n) {
                    var r,
                        i = Xe(e),
                        o = !le.scrollboxSize() && "absolute" === i.position,
                        a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
                        s = n ? it(e, u, n, a, i) : 0;
                    return (
                        a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - 0.5)),
                        s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && ((e.style[u] = t), (t = ce.css(e, u))),
                        rt(0, t, s)
                    );
                },
            };
        }),
        (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Ge(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Ue(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
            (ce.cssHooks[i + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
                "margin" !== i && (ce.cssHooks[i + o].set = rt);
        }),
        ce.fn.extend({
            css: function (e, t) {
                return M(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((ce.Tween = at).prototype = {
            constructor: at,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || ce.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (ce.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = at.propHooks[this.prop];
                return e && e.get ? e.get(this) : at.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = at.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : at.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = at.prototype),
        ((at.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)]) ? (e.elem[e.prop] = e.now) : ce.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = at.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (ce.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (ce.fx = at.prototype.init),
        (ce.fx.step = {});
    var st,
        ut,
        lt,
        ct,
        ft = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;
    function dt() {
        ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
    }
    function ht() {
        return (
            ie.setTimeout(function () {
                st = void 0;
            }),
            (st = Date.now())
        );
    }
    function gt(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function yt(o, e, t) {
        var n,
            a,
            r = 0,
            i = yt.prefilters.length,
            s = ce.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (a) return !1;
                for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
            },
            l = s.promise({
                elem: o,
                props: ce.extend({}, e),
                opts: ce.extend(!0, { specialEasing: {}, easing: ce.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: st || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
                },
            }),
            c = l.props;
        for (
            !(function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (((i = t[(r = F(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = ce.cssHooks[r]) && ("expand" in a)))
                        for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing);
            r < i;
            r++
        )
            if ((n = yt.prefilters[r].call(l, o, c, l.opts))) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return (
            ce.map(c, vt, l),
            v(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return te(n.elem, e, Y.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (yt.tweeners[n] = yt.tweeners[n] || []), yt.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ee(e),
                    v = _.get(e, "fxshow");
                for (r in (n.queue ||
                    (null == (a = ce._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), ft.test(i))) {
                        if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        d[r] = (v && v[r]) || ce.style(e, r);
                    }
                if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
                    for (r in (f &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (l = v && v.display) && (l = _.get(e, "display")),
                        "none" === (c = ce.css(e, "display")) && (l ? (c = l) : (re([e], !0), (l = e.style.display || l), (c = ce.css(e, "display")), re([e]))),
                        ("inline" === c || ("inline-block" === c && null != l)) &&
                            "none" === ce.css(e, "float") &&
                            (u ||
                                (p.done(function () {
                                    h.display = l;
                                }),
                                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                            (h.display = "inline-block"))),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        p.always(function () {
                            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    d))
                        u ||
                            (v ? "hidden" in v && (g = v.hidden) : (v = _.access(e, "fxshow", { display: l })),
                            o && (v.hidden = !g),
                            g && re([e], !0),
                            p.done(function () {
                                for (r in (g || re([e]), _.remove(e, "fxshow"), d)) ce.style(e, r, d[r]);
                            })),
                            (u = vt(g ? v[r] : 0, r, p)),
                            r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
        },
    })),
        (ce.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? ce.extend({}, e) : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
            return (
                ce.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? (r.duration = ce.fx.speeds[r.duration]) : (r.duration = ce.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
                }),
                r
            );
        }),
        ce.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (t, e, n, r) {
                var i = ce.isEmptyObject(t),
                    o = ce.speed(e, n, r),
                    a = function () {
                        var e = yt(this, ce.extend({}, t), o);
                        (i || _.get(this, "finish")) && e.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (i, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = ce.timers,
                            r = _.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || ce.dequeue(this, i);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e,
                            t = _.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = ce.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        ce.each(["toggle", "show", "hide"], function (e, r) {
            var i = ce.fn[r];
            ce.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n);
            };
        }),
        ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
            ce.fn[e] = function (e, t, n) {
                return this.animate(r, e, t, n);
            };
        }),
        (ce.timers = []),
        (ce.fx.tick = function () {
            var e,
                t = 0,
                n = ce.timers;
            for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || ce.fx.stop(), (st = void 0);
        }),
        (ce.fx.timer = function (e) {
            ce.timers.push(e), ce.fx.start();
        }),
        (ce.fx.interval = 13),
        (ce.fx.start = function () {
            ut || ((ut = !0), dt());
        }),
        (ce.fx.stop = function () {
            ut = null;
        }),
        (ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (ce.fn.delay = function (r, e) {
            return (
                (r = (ce.fx && ce.fx.speeds[r]) || r),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = ie.setTimeout(e, r);
                    t.stop = function () {
                        ie.clearTimeout(n);
                    };
                })
            );
        }),
        (lt = C.createElement("input")),
        (ct = C.createElement("select").appendChild(C.createElement("option"))),
        (lt.type = "checkbox"),
        (le.checkOn = "" !== lt.value),
        (le.optSelected = ct.selected),
        ((lt = C.createElement("input")).value = "t"),
        (lt.type = "radio"),
        (le.radioValue = "t" === lt.value);
    var mt,
        xt = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function (e, t) {
            return M(this, ce.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                ce.removeAttr(this, e);
            });
        },
    }),
        ce.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? ce.prop(e, t, n)
                        : ((1 === o && ce.isXMLDoc(e)) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void ce.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = ce.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!le.radioValue && "radio" === t && fe(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(D);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (mt = {
            set: function (e, t, n) {
                return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = xt[t] || ce.find.attr;
            xt[t] = function (e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return n || ((i = xt[o]), (xt[o] = r), (r = null != a(e, t, n) ? o : null), (xt[o] = i)), r;
            };
        });
    var bt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;
    function Tt(e) {
        return (e.match(D) || []).join(" ");
    }
    function Ct(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function kt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || [];
    }
    ce.fn.extend({
        prop: function (e, t) {
            return M(this, ce.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[ce.propFix[e] || e];
            });
        },
    }),
        ce.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && ce.isXMLDoc(e)) || ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ce.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        le.optSelected ||
            (ce.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ce.propFix[this.toLowerCase()] = this;
        }),
        ce.fn.extend({
            addClass: function (t) {
                var e, n, r, i, o, a;
                return v(t)
                    ? this.each(function (e) {
                          ce(this).addClass(t.call(this, e, Ct(this)));
                      })
                    : (e = kt(t)).length
                    ? this.each(function () {
                          if (((r = Ct(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))) {
                              for (o = 0; o < e.length; o++) (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                              (a = Tt(n)), r !== a && this.setAttribute("class", a);
                          }
                      })
                    : this;
            },
            removeClass: function (t) {
                var e, n, r, i, o, a;
                return v(t)
                    ? this.each(function (e) {
                          ce(this).removeClass(t.call(this, e, Ct(this)));
                      })
                    : arguments.length
                    ? (e = kt(t)).length
                        ? this.each(function () {
                              if (((r = Ct(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))) {
                                  for (o = 0; o < e.length; o++) {
                                      i = e[o];
                                      while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
                                  }
                                  (a = Tt(n)), r !== a && this.setAttribute("class", a);
                              }
                          })
                        : this
                    : this.attr("class", "");
            },
            toggleClass: function (t, n) {
                var e,
                    r,
                    i,
                    o,
                    a = typeof t,
                    s = "string" === a || Array.isArray(t);
                return v(t)
                    ? this.each(function (e) {
                          ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
                      })
                    : "boolean" == typeof n && s
                    ? n
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : ((e = kt(t)),
                      this.each(function () {
                          if (s) for (o = ce(this), i = 0; i < e.length; i++) (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                          else (void 0 !== t && "boolean" !== a) || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""));
                      }));
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                t = " " + e + " ";
                while ((n = this[r++])) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var St = /\r/g;
    ce.fn.extend({
        val: function (n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length
                ? ((i = v(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : Array.isArray(t) &&
                                (t = ce.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value")) || (this.value = t));
                  }))
                : t
                ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(St, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        ce.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ce.find.attr(e, "value");
                        return null != t ? t : Tt(ce.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                                if (((t = ce(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = ce.makeArray(t),
                            a = i.length;
                        while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        ce.each(["radio", "checkbox"], function () {
            (ce.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < ce.inArray(ce(e).val(), t));
                },
            }),
                le.checkOn ||
                    (ce.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        });
    var Et = ie.location,
        jt = { guid: Date.now() },
        At = /\?/;
    ce.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = new ie.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
                ce.error(
                    "Invalid XML: " +
                        (n
                            ? ce
                                  .map(n.childNodes, function (e) {
                                      return e.textContent;
                                  })
                                  .join("\n")
                            : e)
                ),
            t
        );
    };
    var Dt = /^(?:focusinfocus|focusoutblur)$/,
        Nt = function (e) {
            e.stopPropagation();
        };
    ce.extend(ce.event, {
        trigger: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || C],
                d = ue.call(e, "type") ? e.type : e,
                h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((o = f = a = n = n || C),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !Dt.test(d + ce.event.triggered) &&
                    (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
                    (u = d.indexOf(":") < 0 && "on" + d),
                    ((e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : ce.makeArray(t, [e])),
                    (c = ce.event.special[d] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!r && !c.noBubble && !y(n)) {
                    for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
                    a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie);
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                        (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) && l.apply && $(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = d),
                    r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !$(n) ||
                        (u &&
                            v(n[d]) &&
                            !y(n) &&
                            ((a = n[u]) && (n[u] = null),
                            (ce.event.triggered = d),
                            e.isPropagationStopped() && f.addEventListener(d, Nt),
                            n[d](),
                            e.isPropagationStopped() && f.removeEventListener(d, Nt),
                            (ce.event.triggered = void 0),
                            a && (n[u] = a))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
            ce.event.trigger(r, null, t);
        },
    }),
        ce.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    ce.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return ce.event.trigger(e, t, n, !0);
            },
        });
    var qt = /\[\]$/,
        Lt = /\r?\n/g,
        Ht = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    function Pt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            ce.each(e, function (e, t) {
                r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
            });
        else if (r || "object" !== x(e)) i(n, e);
        else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
    }
    (ce.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
            ce.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) Pt(n, e[n], t, i);
        return r.join("&");
    }),
        ce.fn.extend({
            serialize: function () {
                return ce.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = ce.prop(this, "elements");
                    return e ? ce.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e));
                    })
                    .map(function (e, t) {
                        var n = ce(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? ce.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Lt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Lt, "\r\n") };
                    })
                    .get();
            },
        });
    var Mt = /%20/g,
        Rt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        Bt = {},
        _t = {},
        zt = "*/".concat("*"),
        Xt = C.createElement("a");
    function Ut(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(D) || [];
            if (v(t)) while ((n = i[r++])) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Vt(t, i, o, a) {
        var s = {},
            u = t === _t;
        function l(e) {
            var r;
            return (
                (s[e] = !0),
                ce.each(t[e] || [], function (e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? (u ? !(r = n) : void 0) : (i.dataTypes.unshift(n), l(n), !1);
                }),
                r
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Gt(e, t) {
        var n,
            r,
            i = ce.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ce.extend(!0, e, r), e;
    }
    (Xt.href = Et.href),
        ce.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ce.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
            },
            ajaxPrefilter: Ut(Bt),
            ajaxTransport: Ut(_t),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    n,
                    d,
                    r,
                    h,
                    g,
                    i,
                    o,
                    v = ce.ajaxSetup({}, t),
                    y = v.context || v,
                    m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
                    x = ce.Deferred(),
                    b = ce.Callbacks("once memory"),
                    w = v.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while ((t = Wt.exec(p))) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return h ? p : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == h && (v.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        },
                    };
                if (
                    (x.promise(T),
                    (v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//")),
                    (v.type = t.method || t.type || v.method || v.type),
                    (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
                    null == v.crossDomain)
                ) {
                    r = C.createElement("a");
                    try {
                        (r.href = v.url), (r.href = r.href), (v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host);
                    } catch (e) {
                        v.crossDomain = !0;
                    }
                }
                if ((v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h)) return T;
                for (i in ((g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"),
                (v.type = v.type.toUpperCase()),
                (v.hasContent = !Ft.test(v.type)),
                (f = v.url.replace(Rt, "")),
                v.hasContent
                    ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+"))
                    : ((o = v.url.slice(f.length)),
                      v.data && (v.processData || "string" == typeof v.data) && ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
                      !1 === v.cache && ((f = f.replace(It, "$1")), (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
                      (v.url = f + o)),
                v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
                ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
                T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]),
                v.headers))
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
                if (((u = "abort"), b.add(v.complete), T.done(v.success), T.fail(v.error), (c = Vt(_t, v, t, T)))) {
                    if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h)) return T;
                    v.async &&
                        0 < v.timeout &&
                        (d = ie.setTimeout(function () {
                            T.abort("timeout");
                        }, v.timeout));
                    try {
                        (h = !1), c.send(a, l);
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                        ((h = !0),
                        d && ie.clearTimeout(d),
                        (c = void 0),
                        (p = r || ""),
                        (T.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s = e.contents,
                                    u = e.dataTypes;
                                while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break;
                                        }
                                        a || (a = i);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(v, T, n)),
                        !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}),
                        (s = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e["throws"]) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(v, s, T, i)),
                        i
                            ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                              204 === e || "HEAD" === v.type ? (l = "nocontent") : 304 === e ? (l = "notmodified") : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                            : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (t || l) + ""),
                        i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                        T.statusCode(w),
                        (w = void 0),
                        g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                        b.fireWith(y, [T, l]),
                        g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function (e, t, n) {
                return ce.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return ce.get(e, void 0, t, "script");
            },
        }),
        ce.each(["get", "post"], function (e, i) {
            ce[i] = function (e, t, n, r) {
                return v(t) && ((r = r || n), (n = t), (t = void 0)), ce.ajax(ce.extend({ url: e, type: i, dataType: r, data: t, success: n }, ce.isPlainObject(e) && e));
            };
        }),
        ce.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (ce._evalUrl = function (e, t, n) {
            return ce.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    ce.globalEval(e, t, n);
                },
            });
        }),
        ce.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (v(e) && (e = e.call(this[0])),
                        (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return v(n)
                    ? this.each(function (e) {
                          ce(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = ce(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = v(t);
                return this.each(function (e) {
                    ce(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            ce(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (ce.expr.pseudos.hidden = function (e) {
            return !ce.expr.pseudos.visible(e);
        }),
        (ce.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (ce.ajaxSettings.xhr = function () {
            try {
                return new ie.XMLHttpRequest();
            } catch (e) {}
        });
    var Yt = { 0: 200, 1223: 204 },
        Qt = ce.ajaxSettings.xhr();
    (le.cors = !!Qt && "withCredentials" in Qt),
        (le.ajax = Qt = !!Qt),
        ce.ajaxTransport(function (i) {
            var o, a;
            if (le.cors || (Qt && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                                    "abort" === e
                                        ? r.abort()
                                        : "error" === e
                                        ? "number" != typeof r.status
                                            ? t(0, "error")
                                            : t(r.status, r.statusText)
                                        : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o("error")),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                      4 === r.readyState &&
                                          ie.setTimeout(function () {
                                              o && a();
                                          });
                                  }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        ce.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        ce.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return ce.globalEval(e), e;
                },
            },
        }),
        ce.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        ce.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = ce("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (i = function (e) {
                                    r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            C.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var Jt,
        Kt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Kt.pop() || ce.expando + "_" + jt.guid++;
            return (this[e] = !0), e;
        },
    }),
        ce.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
                i,
                o,
                a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a ? (e[a] = e[a].replace(Zt, "$1" + r)) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    (e.converters["script json"] = function () {
                        return o || ce.error(r + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = ie[r]),
                    (ie[r] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)), o && v(i) && i(o[0]), (o = i = void 0);
                    }),
                    "script"
                );
        }),
        (le.createHTMLDocument = (((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Jt.childNodes.length)),
        (ce.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (le.createHTMLDocument ? (((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href), t.head.appendChild(r)) : (t = C)),
                  (o = !n && []),
                  (i = w.exec(e)) ? [t.createElement(i[1])] : ((i = Ae([e], t, o)), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
            var r, i, o;
        }),
        (ce.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
                v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                    ce
                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        (ce.expr.pseudos.animated = function (t) {
            return ce.grep(ce.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (ce.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = ce.css(e, "position"),
                    c = ce(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = ce.css(e, "top")),
                    (u = ce.css(e, "left")),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    v(t) && (t = t.call(e, n, ce.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f);
            },
        }),
        ce.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              ce.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    r = this[0];
                return r ? (r.getClientRects().length ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                        while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)), (i.left += ce.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - ce.css(r, "marginTop", !0), left: t.left - i.left - ce.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
                    return e || J;
                });
            },
        }),
        ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
            var o = "pageYOffset" === i;
            ce.fn[t] = function (e) {
                return M(
                    this,
                    function (e, t, n) {
                        var r;
                        if ((y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        ce.each(["top", "left"], function (e, n) {
            ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
                if (t) return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t;
            });
        }),
        ce.each({ Height: "height", Width: "width" }, function (a, s) {
            ce.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
                ce.fn[o] = function (e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return M(
                        this,
                        function (e, t, n) {
                            var r;
                            return y(e)
                                ? 0 === o.indexOf("outer")
                                    ? e["inner" + a]
                                    : e.document.documentElement["client" + a]
                                : 9 === e.nodeType
                                ? ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a]))
                                : void 0 === n
                                ? ce.css(e, t, i)
                                : ce.style(e, t, n, i);
                        },
                        s,
                        n ? e : void 0,
                        n
                    );
                };
            });
        }),
        ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ce.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        ce.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e);
            },
        }),
        ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            ce.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        });
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (ce.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
            return (
                (r = ae.call(arguments, 2)),
                ((i = function () {
                    return e.apply(t || this, r.concat(ae.call(arguments)));
                }).guid = e.guid = e.guid || ce.guid++),
                i
            );
    }),
        (ce.holdReady = function (e) {
            e ? ce.readyWait++ : ce.ready(!0);
        }),
        (ce.isArray = Array.isArray),
        (ce.parseJSON = JSON.parse),
        (ce.nodeName = fe),
        (ce.isFunction = v),
        (ce.isWindow = y),
        (ce.camelCase = F),
        (ce.type = x),
        (ce.now = Date.now),
        (ce.isNumeric = function (e) {
            var t = ce.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (ce.trim = function (e) {
            return null == e ? "" : (e + "").replace(en, "$1");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return ce;
            });
    var tn = ie.jQuery,
        nn = ie.$;
    return (
        (ce.noConflict = function (e) {
            return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce;
        }),
        "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
        ce
    );
});

// swiper js
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t());
})(this, function () {
    "use strict";
    function e() {
        return (e =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
                }
                return e;
            }).apply(this, arguments);
    }
    function t(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }
    function a(e, i) {
        void 0 === e && (e = {}),
            void 0 === i && (i = {}),
            Object.keys(i).forEach(function (s) {
                void 0 === e[s] ? (e[s] = i[s]) : t(i[s]) && t(e[s]) && Object.keys(i[s]).length > 0 && a(e[s], i[s]);
            });
    }
    var i = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
            return null;
        },
        querySelectorAll: function () {
            return [];
        },
        getElementById: function () {
            return null;
        },
        createEvent: function () {
            return { initEvent: function () {} };
        },
        createElement: function () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                    return [];
                },
            };
        },
        createElementNS: function () {
            return {};
        },
        importNode: function () {
            return null;
        },
        location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
    };
    function s() {
        var e = "undefined" != typeof document ? document : {};
        return a(e, i), e;
    }
    var r = {
        document: i,
        navigator: { userAgent: "" },
        location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
        history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
        CustomEvent: function () {
            return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return "";
                },
            };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
            return {};
        },
        requestAnimationFrame: function (e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        },
    };
    function n() {
        var e = "undefined" != typeof window ? window : {};
        return a(e, r), e;
    }
    function l(e) {
        return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
    }
    function o(e, t) {
        return (o =
            Object.setPrototypeOf ||
            function (e, t) {
                return (e.__proto__ = t), e;
            })(e, t);
    }
    function d(e, t, a) {
        return (d = !(function e() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (t) {
                return !1;
            }
        })()
            ? function (e, t, a) {
                  var i = [null];
                  i.push.apply(i, t);
                  var s = new (Function.bind.apply(e, i))();
                  return a && o(s, a.prototype), s;
              }
            : Reflect.construct).apply(null, arguments);
    }
    function p(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (p = function (e) {
            var a;
            if (null === e || ((a = e), -1 === Function.toString.call(a).indexOf("[native code]"))) return e;
            if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, i);
            }
            function i() {
                return d(e, arguments, l(this).constructor);
            }
            return (i.prototype = Object.create(e.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } })), o(i, e);
        })(e);
    }
    var u = (function (e) {
        var t, a;
        function i(t) {
            var a, i, s;
            return (
                (s = (i = (function (e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                })((a = e.call.apply(e, [this].concat(t)) || this))).__proto__),
                Object.defineProperty(i, "__proto__", {
                    get: function () {
                        return s;
                    },
                    set: function (e) {
                        s.__proto__ = e;
                    },
                }),
                a
            );
        }
        return (a = e), ((t = i).prototype = Object.create(a.prototype)), (t.prototype.constructor = t), (t.__proto__ = a), i;
    })(p(Array));
    function c(e) {
        void 0 === e && (e = []);
        var t = [];
        return (
            e.forEach(function (e) {
                Array.isArray(e) ? t.push.apply(t, c(e)) : t.push(e);
            }),
            t
        );
    }
    function h(e, t) {
        return Array.prototype.filter.call(e, t);
    }
    function v(e, t) {
        var a = n(),
            i = s(),
            r = [];
        if (!t && e instanceof u) return e;
        if (!e) return new u(r);
        if ("string" == typeof e) {
            var l = e.trim();
            if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
                var o = "div";
                0 === l.indexOf("<li") && (o = "ul"),
                    0 === l.indexOf("<tr") && (o = "tbody"),
                    (0 !== l.indexOf("<td") && 0 !== l.indexOf("<th")) || (o = "tr"),
                    0 === l.indexOf("<tbody") && (o = "table"),
                    0 === l.indexOf("<option") && (o = "select");
                var d = i.createElement(o);
                d.innerHTML = l;
                for (var p = 0; p < d.childNodes.length; p += 1) r.push(d.childNodes[p]);
            } else
                r = (function (e, t) {
                    if ("string" != typeof e) return [e];
                    for (var a = [], i = t.querySelectorAll(e), s = 0; s < i.length; s += 1) a.push(i[s]);
                    return a;
                })(e.trim(), t || i);
        } else if (e.nodeType || e === a || e === i) r.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof u) return e;
            r = e;
        }
        return new u(
            (function (e) {
                for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
                return t;
            })(r)
        );
    }
    v.fn = u.prototype;
    var f,
        m,
        g,
        $ = {
            addClass: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                var i = c(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    this.forEach(function (e) {
                        var t;
                        (t = e.classList).add.apply(t, i);
                    }),
                    this
                );
            },
            removeClass: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                var i = c(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    this.forEach(function (e) {
                        var t;
                        (t = e.classList).remove.apply(t, i);
                    }),
                    this
                );
            },
            hasClass: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                var i = c(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    h(this, function (e) {
                        return (
                            i.filter(function (t) {
                                return e.classList.contains(t);
                            }).length > 0
                        );
                    }).length > 0
                );
            },
            toggleClass: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                var i = c(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                this.forEach(function (e) {
                    i.forEach(function (t) {
                        e.classList.toggle(t);
                    });
                });
            },
            attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var a = 0; a < this.length; a += 1)
                    if (2 === arguments.length) this[a].setAttribute(e, t);
                    else for (var i in e) (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
                return this;
            },
            removeAttr: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this;
            },
            transform: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this;
            },
            transition: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
                return this;
            },
            on: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                var i = t[0],
                    s = t[1],
                    r = t[2],
                    n = t[3];
                function l(e) {
                    var t = e.target;
                    if (t) {
                        var a = e.target.dom7EventData || [];
                        if ((0 > a.indexOf(e) && a.unshift(e), v(t).is(s))) r.apply(t, a);
                        else for (var i = v(t).parents(), n = 0; n < i.length; n += 1) v(i[n]).is(s) && r.apply(i[n], a);
                    }
                }
                function o(e) {
                    var t = (e && e.target && e.target.dom7EventData) || [];
                    0 > t.indexOf(e) && t.unshift(e), r.apply(this, t);
                }
                "function" == typeof t[1] && ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)), n || (n = !1);
                for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
                    var c = this[u];
                    if (s)
                        for (d = 0; d < p.length; d += 1) {
                            var h = p[d];
                            c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({ listener: r, proxyListener: l }), c.addEventListener(h, l, n);
                        }
                    else
                        for (d = 0; d < p.length; d += 1) {
                            var f = p[d];
                            c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[f] || (c.dom7Listeners[f] = []), c.dom7Listeners[f].push({ listener: r, proxyListener: o }), c.addEventListener(f, o, n);
                        }
                }
                return this;
            },
            off: function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                var i = t[0],
                    s = t[1],
                    r = t[2],
                    n = t[3];
                "function" == typeof t[1] && ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)), n || (n = !1);
                for (var l = i.split(" "), o = 0; o < l.length; o += 1)
                    for (var d = l[o], p = 0; p < this.length; p += 1) {
                        var u = this[p],
                            c = void 0;
                        if ((!s && u.dom7Listeners ? (c = u.dom7Listeners[d]) : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]), c && c.length))
                            for (var h = c.length - 1; h >= 0; h -= 1) {
                                var v = c[h];
                                (r && v.listener === r) || (r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r)
                                    ? (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1))
                                    : r || (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1));
                            }
                    }
                return this;
            },
            trigger: function () {
                for (var e = n(), t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                for (var s = a[0].split(" "), r = a[1], l = 0; l < s.length; l += 1)
                    for (var o = s[l], d = 0; d < this.length; d += 1) {
                        var p = this[d];
                        if (e.CustomEvent) {
                            var u = new e.CustomEvent(o, { detail: r, bubbles: !0, cancelable: !0 });
                            (p.dom7EventData = a.filter(function (e, t) {
                                return t > 0;
                            })),
                                p.dispatchEvent(u),
                                (p.dom7EventData = []),
                                delete p.dom7EventData;
                        }
                    }
                return this;
            },
            transitionEnd: function (e) {
                var t = this;
                return (
                    e &&
                        t.on("transitionend", function a(i) {
                            i.target === this && (e.call(this, i), t.off("transitionend", a));
                        }),
                    this
                );
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            styles: function () {
                var e = n();
                return this[0] ? e.getComputedStyle(this[0], null) : {};
            },
            offset: function () {
                if (this.length > 0) {
                    var e = n(),
                        t = s(),
                        a = this[0],
                        i = a.getBoundingClientRect(),
                        r = t.body,
                        l = a.clientTop || r.clientTop || 0,
                        o = a.clientLeft || r.clientLeft || 0,
                        d = a === e ? e.scrollY : a.scrollTop,
                        p = a === e ? e.scrollX : a.scrollLeft;
                    return { top: i.top + d - l, left: i.left + p - o };
                }
                return null;
            },
            css: function (e, t) {
                var a,
                    i = n();
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (a = 0; a < this.length; a += 1) for (var s in e) this[a].style[s] = e[s];
                        return this;
                    }
                    if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this;
            },
            each: function (e) {
                return (
                    e &&
                        this.forEach(function (t, a) {
                            e.apply(t, [t, a]);
                        }),
                    this
                );
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this;
            },
            is: function (e) {
                var t,
                    a,
                    i = n(),
                    r = s(),
                    l = this[0];
                if (!l || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (l.matches) return l.matches(e);
                    if (l.webkitMatchesSelector) return l.webkitMatchesSelector(e);
                    if (l.msMatchesSelector) return l.msMatchesSelector(e);
                    for (t = v(e), a = 0; a < t.length; a += 1) if (t[a] === l) return !0;
                    return !1;
                }
                if (e === r) return l === r;
                if (e === i) return l === i;
                if (e.nodeType || e instanceof u) {
                    for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) if (t[a] === l) return !0;
                }
                return !1;
            },
            index: function () {
                var e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                var t = this.length;
                if (e > t - 1) return v([]);
                if (e < 0) {
                    var a = t + e;
                    return v(a < 0 ? [] : [this[a]]);
                }
                return v([this[e]]);
            },
            append: function () {
                for (var e, t = s(), a = 0; a < arguments.length; a += 1) {
                    e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
                    for (var i = 0; i < this.length; i += 1)
                        if ("string" == typeof e) {
                            var r = t.createElement("div");
                            for (r.innerHTML = e; r.firstChild; ) this[i].appendChild(r.firstChild);
                        } else if (e instanceof u) for (var n = 0; n < e.length; n += 1) this[i].appendChild(e[n]);
                        else this[i].appendChild(e);
                }
                return this;
            },
            prepend: function (e) {
                var t,
                    a,
                    i = s();
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        var r = i.createElement("div");
                        for (r.innerHTML = e, a = r.childNodes.length - 1; a >= 0; a -= 1) this[t].insertBefore(r.childNodes[a], this[t].childNodes[0]);
                    } else if (e instanceof u) for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                return this;
            },
            next: function (e) {
                return this.length > 0 ? (e ? (this[0].nextElementSibling && v(this[0].nextElementSibling).is(e) ? v([this[0].nextElementSibling]) : v([])) : this[0].nextElementSibling ? v([this[0].nextElementSibling]) : v([])) : v([]);
            },
            nextAll: function (e) {
                var t = [],
                    a = this[0];
                if (!a) return v([]);
                for (; a.nextElementSibling; ) {
                    var i = a.nextElementSibling;
                    e ? v(i).is(e) && t.push(i) : t.push(i), (a = i);
                }
                return v(t);
            },
            prev: function (e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e ? (t.previousElementSibling && v(t.previousElementSibling).is(e) ? v([t.previousElementSibling]) : v([])) : t.previousElementSibling ? v([t.previousElementSibling]) : v([]);
                }
                return v([]);
            },
            prevAll: function (e) {
                var t = [],
                    a = this[0];
                if (!a) return v([]);
                for (; a.previousElementSibling; ) {
                    var i = a.previousElementSibling;
                    e ? v(i).is(e) && t.push(i) : t.push(i), (a = i);
                }
                return v(t);
            },
            parent: function (e) {
                for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? v(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
                return v(t);
            },
            parents: function (e) {
                for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].parentNode; i; ) e ? v(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
                return v(t);
            },
            closest: function (e) {
                var t = this;
                return void 0 === e ? v([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
            },
            find: function (e) {
                for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
                return v(t);
            },
            children: function (e) {
                for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].children, s = 0; s < i.length; s += 1) (e && !v(i[s]).is(e)) || t.push(i[s]);
                return v(t);
            },
            filter: function (e) {
                return v(h(this, e));
            },
            remove: function () {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            },
        };
    function b(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function w() {
        return Date.now();
    }
    function y(e, t) {
        void 0 === t && (t = "x");
        var a,
            i,
            s,
            r,
            l,
            o,
            d = n(),
            p = ((a = e), (s = n()).getComputedStyle && (i = s.getComputedStyle(a, null)), !i && a.currentStyle && (i = a.currentStyle), i || (i = a.style), i);
        return (
            d.WebKitCSSMatrix
                ? ((l = p.transform || p.webkitTransform).split(",").length > 6 &&
                      (l = l
                          .split(", ")
                          .map(function (e) {
                              return e.replace(",", ".");
                          })
                          .join(", ")),
                  (o = new d.WebKitCSSMatrix("none" === l ? "" : l)))
                : (r = (o = p.MozTransform || p.OTransform || p.MsTransform || p.msTransform || p.transform || p.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
            "x" === t && (l = d.WebKitCSSMatrix ? o.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])),
            "y" === t && (l = d.WebKitCSSMatrix ? o.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])),
            l || 0
        );
    }
    function _(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }
    function E(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function x() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], a = 1; a < arguments.length; a += 1) {
            var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            if (null != i && !E(i))
                for (
                    var s = Object.keys(Object(i)).filter(function (e) {
                            return 0 > t.indexOf(e);
                        }),
                        r = 0,
                        n = s.length;
                    r < n;
                    r += 1
                ) {
                    var l = s[r],
                        o = Object.getOwnPropertyDescriptor(i, l);
                    void 0 !== o && o.enumerable && (_(e[l]) && _(i[l]) ? (i[l].__swiper__ ? (e[l] = i[l]) : x(e[l], i[l])) : !_(e[l]) && _(i[l]) ? ((e[l] = {}), i[l].__swiper__ ? (e[l] = i[l]) : x(e[l], i[l])) : (e[l] = i[l]));
                }
        }
        return e;
    }
    function C(e, t) {
        Object.keys(t).forEach(function (a) {
            _(t[a]) &&
                Object.keys(t[a]).forEach(function (i) {
                    "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
                }),
                (e[a] = t[a]);
        });
    }
    function T(e) {
        return (
            void 0 === e && (e = ""),
            "." +
                e
                    .trim()
                    .replace(/([\.:!\/])/g, "\\$1")
                    .replace(/ /g, ".")
        );
    }
    function S(e, t, a, i) {
        var r = s();
        return (
            a &&
                Object.keys(i).forEach(function (a) {
                    if (!t[a] && !0 === t.auto) {
                        var s = r.createElement("div");
                        (s.className = i[a]), e.append(s), (t[a] = s);
                    }
                }),
            t
        );
    }
    function z() {
        var e, t;
        return (
            f ||
                (f =
                    ((e = n()),
                    (t = s()),
                    {
                        touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                        passiveListener: (function () {
                            var t = !1;
                            try {
                                var a = Object.defineProperty({}, "passive", {
                                    get: function () {
                                        t = !0;
                                    },
                                });
                                e.addEventListener("testPassiveListener", null, a);
                            } catch (i) {}
                            return t;
                        })(),
                        gestures: "ongesturestart" in e,
                    })),
            f
        );
    }
    Object.keys($).forEach(function (e) {
        Object.defineProperty(v.fn, e, { value: $[e], writable: !0 });
    });
    var P = {
        attach: function (e, t) {
            void 0 === t && (t = {});
            var a = n(),
                i = this,
                s = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
                    if (1 !== e.length) {
                        var t = function () {
                            i.emit("observerUpdate", e[0]);
                        };
                        a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
                    } else i.emit("observerUpdate", e[0]);
                });
            s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(s);
        },
        init: function () {
            if (this.support.observer && this.params.observer) {
                if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
            }
        },
        destroy: function () {
            this.observer.observers.forEach(function (e) {
                e.disconnect();
            }),
                (this.observer.observers = []);
        },
    };
    function k(e) {
        var t = this,
            a = s(),
            i = n(),
            r = t.touchEventsData,
            l = t.params,
            o = t.touches;
        if (t.enabled && (!t.animating || !l.preventInteractionOnTransition)) {
            var d = e;
            d.originalEvent && (d = d.originalEvent);
            var p = v(d.target);
            if (
                ("wrapper" !== l.touchEventsTarget || p.closest(t.wrapperEl).length) &&
                ((r.isTouchEvent = "touchstart" === d.type), (r.isTouchEvent || !("which" in d) || 3 !== d.which) && !((!r.isTouchEvent && "button" in d && d.button > 0) || (r.isTouched && r.isMoved)))
            ) {
                l.noSwipingClass && "" !== l.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (p = v(e.path[0]));
                var u = l.noSwipingSelector ? l.noSwipingSelector : "." + l.noSwipingClass,
                    c = !(!d.target || !d.target.shadowRoot);
                if (
                    l.noSwiping &&
                    (c
                        ? (function (e, t) {
                              return (
                                  void 0 === t && (t = this),
                                  (function t(a) {
                                      return a && a !== s() && a !== n() ? (a.assignedSlot && (a = a.assignedSlot), a.closest(e) || t(a.getRootNode().host)) : null;
                                  })(t)
                              );
                          })(u, d.target)
                        : p.closest(u)[0])
                )
                    t.allowClick = !0;
                else if (!l.swipeHandler || p.closest(l.swipeHandler)[0]) {
                    (o.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX), (o.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
                    var h = o.currentX,
                        f = o.currentY,
                        m = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
                        g = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
                    if (m && (h <= g || h >= i.innerWidth - g)) {
                        if ("prevent" !== m) return;
                        e.preventDefault();
                    }
                    if (
                        (x(r, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                        (o.startX = h),
                        (o.startY = f),
                        (r.touchStartTime = w()),
                        (t.allowClick = !0),
                        t.updateSize(),
                        (t.swipeDirection = void 0),
                        l.threshold > 0 && (r.allowThresholdMove = !1),
                        "touchstart" !== d.type)
                    ) {
                        var $ = !0;
                        p.is(r.focusableElements) && ($ = !1), a.activeElement && v(a.activeElement).is(r.focusableElements) && a.activeElement !== p[0] && a.activeElement.blur();
                        var b = $ && t.allowTouchMove && l.touchStartPreventDefault;
                        (l.touchStartForcePreventDefault || b) && !p[0].isContentEditable && d.preventDefault();
                    }
                    t.emit("touchStart", d);
                }
            }
        }
    }
    function M(e) {
        var t = s(),
            a = this,
            i = a.touchEventsData,
            r = a.params,
            n = a.touches,
            l = a.rtlTranslate;
        if (a.enabled) {
            var o = e;
            if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
                if (!i.isTouchEvent || "touchmove" === o.type) {
                    var d = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                        p = "touchmove" === o.type ? d.pageX : o.pageX,
                        u = "touchmove" === o.type ? d.pageY : o.pageY;
                    if (o.preventedByNestedSwiper) return (n.startX = p), void (n.startY = u);
                    if (!a.allowTouchMove) return (a.allowClick = !1), void (i.isTouched && (x(n, { startX: p, startY: u, currentX: p, currentY: u }), (i.touchStartTime = w())));
                    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
                        if (a.isVertical()) {
                            if ((u < n.startY && a.translate <= a.maxTranslate()) || (u > n.startY && a.translate >= a.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                        } else if ((p < n.startX && a.translate <= a.maxTranslate()) || (p > n.startX && a.translate >= a.minTranslate())) return;
                    }
                    if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && v(o.target).is(i.focusableElements)) return (i.isMoved = !0), void (a.allowClick = !1);
                    if ((i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1))) {
                        (n.currentX = p), (n.currentY = u);
                        var c,
                            h = n.currentX - n.startX,
                            f = n.currentY - n.startY;
                        if (!(a.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(f, 2)) < a.params.threshold)) {
                            if (
                                (void 0 === i.isScrolling &&
                                    ((a.isHorizontal() && n.currentY === n.startY) || (a.isVertical() && n.currentX === n.startX)
                                        ? (i.isScrolling = !1)
                                        : h * h + f * f >= 25 && ((c = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI), (i.isScrolling = a.isHorizontal() ? c > r.touchAngle : 90 - c > r.touchAngle))),
                                i.isScrolling && a.emit("touchMoveOpposite", o),
                                void 0 === i.startMoving && ((n.currentX === n.startX && n.currentY === n.startY) || (i.startMoving = !0)),
                                i.isScrolling)
                            )
                                i.isTouched = !1;
                            else if (i.startMoving) {
                                (a.allowClick = !1),
                                    !r.cssMode && o.cancelable && o.preventDefault(),
                                    r.touchMoveStopPropagation && !r.nested && o.stopPropagation(),
                                    i.isMoved ||
                                        (r.loop && a.loopFix(),
                                        (i.startTranslate = a.getTranslate()),
                                        a.setTransition(0),
                                        a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                        (i.allowMomentumBounce = !1),
                                        r.grabCursor && (!0 === a.allowSlideNext || !0 === a.allowSlidePrev) && a.setGrabCursor(!0),
                                        a.emit("sliderFirstMove", o)),
                                    a.emit("sliderMove", o),
                                    (i.isMoved = !0);
                                var m = a.isHorizontal() ? h : f;
                                (n.diff = m), (m *= r.touchRatio), l && (m = -m), (a.swipeDirection = m > 0 ? "prev" : "next"), (i.currentTranslate = m + i.startTranslate);
                                var g = !0,
                                    $ = r.resistanceRatio;
                                if (
                                    (r.touchReleaseOnEdges && ($ = 0),
                                    m > 0 && i.currentTranslate > a.minTranslate()
                                        ? ((g = !1), r.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + m, $)))
                                        : m < 0 && i.currentTranslate < a.maxTranslate() && ((g = !1), r.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - m, $))),
                                    g && (o.preventedByNestedSwiper = !0),
                                    !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                    !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                    a.allowSlidePrev || a.allowSlideNext || (i.currentTranslate = i.startTranslate),
                                    r.threshold > 0)
                                ) {
                                    if (!(Math.abs(m) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove)
                                        return (
                                            (i.allowThresholdMove = !0),
                                            (n.startX = n.currentX),
                                            (n.startY = n.currentY),
                                            (i.currentTranslate = i.startTranslate),
                                            void (n.diff = a.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                                        );
                                }
                                r.followFinger &&
                                    !r.cssMode &&
                                    ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()),
                                    r.freeMode &&
                                        (0 === i.velocities.length && i.velocities.push({ position: n[a.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                                        i.velocities.push({ position: n[a.isHorizontal() ? "currentX" : "currentY"], time: w() })),
                                    a.updateProgress(i.currentTranslate),
                                    a.setTranslate(i.currentTranslate));
                            }
                        }
                    }
                }
            } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
        }
    }
    function L(e) {
        var t = this,
            a = t.touchEventsData,
            i = t.params,
            s = t.touches,
            r = t.rtlTranslate,
            n = t.$wrapperEl,
            l = t.slidesGrid,
            o = t.snapGrid;
        if (t.enabled) {
            var d = e;
            if ((d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), (a.allowTouchCallbacks = !1), !a.isTouched))
                return a.isMoved && i.grabCursor && t.setGrabCursor(!1), (a.isMoved = !1), void (a.startMoving = !1);
            i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var p,
                u = w(),
                c = u - a.touchStartTime;
            if (
                (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), c < 300 && u - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)),
                (a.lastClickTime = w()),
                b(function () {
                    t.destroyed || (t.allowClick = !0);
                }),
                !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
            )
                return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
            if (((a.isTouched = !1), (a.isMoved = !1), (a.startMoving = !1), (p = i.followFinger ? (r ? t.translate : -t.translate) : -a.currentTranslate), !i.cssMode)) {
                if (i.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (a.velocities.length > 1) {
                            var h = a.velocities.pop(),
                                v = a.velocities.pop(),
                                f = h.position - v.position,
                                m = h.time - v.time;
                            (t.velocity = f / m), (t.velocity /= 2), Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || w() - h.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        (t.velocity *= i.freeModeMomentumVelocityRatio), (a.velocities.length = 0);
                        var g = 1e3 * i.freeModeMomentumRatio,
                            $ = t.velocity * g,
                            y = t.translate + $;
                        r && (y = -y);
                        var _,
                            E,
                            x = !1,
                            C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate())
                            i.freeModeMomentumBounce ? (y + t.maxTranslate() < -C && (y = t.maxTranslate() - C), (_ = t.maxTranslate()), (x = !0), (a.allowMomentumBounce = !0)) : (y = t.maxTranslate()),
                                i.loop && i.centeredSlides && (E = !0);
                        else if (y > t.minTranslate())
                            i.freeModeMomentumBounce ? (y - t.minTranslate() > C && (y = t.minTranslate() + C), (_ = t.minTranslate()), (x = !0), (a.allowMomentumBounce = !0)) : (y = t.minTranslate()),
                                i.loop && i.centeredSlides && (E = !0);
                        else if (i.freeModeSticky) {
                            for (var T, S = 0; S < o.length; S += 1)
                                if (o[S] > -y) {
                                    T = S;
                                    break;
                                }
                            y = -(y = Math.abs(o[T] - y) < Math.abs(o[T - 1] - y) || "next" === t.swipeDirection ? o[T] : o[T - 1]);
                        }
                        if (
                            (E &&
                                t.once("transitionEnd", function () {
                                    t.loopFix();
                                }),
                            0 !== t.velocity)
                        ) {
                            if (((g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity)), i.freeModeSticky)) {
                                var z = Math.abs((r ? -y : y) - t.translate),
                                    P = t.slidesSizesGrid[t.activeIndex];
                                g = z < P ? i.speed : z < 2 * P ? 1.5 * i.speed : 2.5 * i.speed;
                            }
                        } else if (i.freeModeSticky) return void t.slideToClosest();
                        i.freeModeMomentumBounce && x
                            ? (t.updateProgress(_),
                              t.setTransition(g),
                              t.setTranslate(y),
                              t.transitionStart(!0, t.swipeDirection),
                              (t.animating = !0),
                              n.transitionEnd(function () {
                                  t &&
                                      !t.destroyed &&
                                      a.allowMomentumBounce &&
                                      (t.emit("momentumBounce"),
                                      t.setTransition(i.speed),
                                      setTimeout(function () {
                                          t.setTranslate(_),
                                              n.transitionEnd(function () {
                                                  t && !t.destroyed && t.transitionEnd();
                                              });
                                      }, 0));
                              }))
                            : t.velocity
                            ? (t.updateProgress(y),
                              t.setTransition(g),
                              t.setTranslate(y),
                              t.transitionStart(!0, t.swipeDirection),
                              t.animating ||
                                  ((t.animating = !0),
                                  n.transitionEnd(function () {
                                      t && !t.destroyed && t.transitionEnd();
                                  })))
                            : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(y)),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses();
                    } else {
                        if (i.freeModeSticky) return void t.slideToClosest();
                        i.freeMode && t.emit("_freeModeNoMomentumRelease");
                    }
                    (!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                } else {
                    for (var k = 0, M = t.slidesSizesGrid[0], L = 0; L < l.length; L += L < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                        var I = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                        void 0 !== l[L + I] ? p >= l[L] && p < l[L + I] && ((k = L), (M = l[L + I] - l[L])) : p >= l[L] && ((k = L), (M = l[l.length - 1] - l[l.length - 2]));
                    }
                    var O = (p - l[k]) / M,
                        D = k < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    if (c > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (O >= i.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k)), "prev" === t.swipeDirection && (O > 1 - i.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k));
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
                            ? d.target === t.navigation.nextEl
                                ? t.slideTo(k + D)
                                : t.slideTo(k)
                            : ("next" === t.swipeDirection && t.slideTo(k + D), "prev" === t.swipeDirection && t.slideTo(k));
                    }
                }
            }
        }
    }
    function I() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            (e.allowSlideNext = !0),
                (e.allowSlidePrev = !0),
                e.updateSize(),
                e.updateSlides(),
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
                (e.allowSlidePrev = s),
                (e.allowSlideNext = i),
                e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
    }
    function O(e) {
        this.enabled && (this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function D() {
        var e = this,
            t = e.wrapperEl,
            a = e.rtlTranslate;
        if (e.enabled) {
            (e.previousTranslate = e.translate),
                e.isHorizontal() ? (e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft) : (e.translate = -t.scrollTop),
                -0 === e.translate && (e.translate = 0),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            var i = e.maxTranslate() - e.minTranslate();
            (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
        }
    }
    var A = !1;
    function N() {}
    var G = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !1,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1,
        },
        B = {
            modular: {
                useParams: function (e) {
                    var t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(function (a) {
                            var i = t.modules[a];
                            i.params && x(e, i.params);
                        });
                },
                useModules: function (e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(function (a) {
                            var i = t.modules[a],
                                s = e[a] || {};
                            i.on &&
                                t.on &&
                                Object.keys(i.on).forEach(function (e) {
                                    t.on(e, i.on[e]);
                                }),
                                i.create && i.create.bind(t)(s);
                        });
                },
            },
            eventsEmitter: {
                on: function (e, t, a) {
                    var i = this;
                    if ("function" != typeof t) return i;
                    var s = a ? "unshift" : "push";
                    return (
                        e.split(" ").forEach(function (e) {
                            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
                        }),
                        i
                    );
                },
                once: function (e, t, a) {
                    var i = this;
                    if ("function" != typeof t) return i;
                    function s() {
                        i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                        for (var a = arguments.length, r = Array(a), n = 0; n < a; n++) r[n] = arguments[n];
                        t.apply(i, r);
                    }
                    return (s.__emitterProxy = t), i.on(e, s, a);
                },
                onAny: function (e, t) {
                    return "function" != typeof e || (0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e)), this;
                },
                offAny: function (e) {
                    if (!this.eventsAnyListeners) return this;
                    var t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
                },
                off: function (e, t) {
                    var a = this;
                    return (
                        a.eventsListeners &&
                            e.split(" ").forEach(function (e) {
                                void 0 === t
                                    ? (a.eventsListeners[e] = [])
                                    : a.eventsListeners[e] &&
                                      a.eventsListeners[e].forEach(function (i, s) {
                                          (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && a.eventsListeners[e].splice(s, 1);
                                      });
                            }),
                        a
                    );
                },
                emit: function () {
                    var e,
                        t,
                        a,
                        i = this;
                    if (!i.eventsListeners) return i;
                    for (var s = arguments.length, r = Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                    return (
                        "string" == typeof r[0] || Array.isArray(r[0]) ? ((e = r[0]), (t = r.slice(1, r.length)), (a = i)) : ((e = r[0].events), (t = r[0].data), (a = r[0].context || i)),
                        t.unshift(a),
                        (Array.isArray(e) ? e : e.split(" ")).forEach(function (e) {
                            i.eventsAnyListeners &&
                                i.eventsAnyListeners.length &&
                                i.eventsAnyListeners.forEach(function (i) {
                                    i.apply(a, [e].concat(t));
                                }),
                                i.eventsListeners &&
                                    i.eventsListeners[e] &&
                                    i.eventsListeners[e].forEach(function (e) {
                                        e.apply(a, t);
                                    });
                        }),
                        i
                    );
                },
            },
            update: {
                updateSize: function () {
                    var e,
                        t,
                        a = this.$el;
                    (e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : a[0].clientWidth),
                        (t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : a[0].clientHeight),
                        (0 === e && this.isHorizontal()) ||
                            (0 === t && this.isVertical()) ||
                            ((e = e - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10)),
                            (t = t - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10)),
                            Number.isNaN(e) && (e = 0),
                            Number.isNaN(t) && (t = 0),
                            x(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
                },
                updateSlides: function () {
                    var e = this;
                    function t(t) {
                        return e.isHorizontal()
                            ? t
                            : {
                                  width: "height",
                                  "margin-top": "margin-left",
                                  "margin-bottom ": "margin-right",
                                  "margin-left": "margin-top",
                                  "margin-right": "margin-bottom",
                                  "padding-left": "padding-top",
                                  "padding-right": "padding-bottom",
                                  marginRight: "marginBottom",
                              }[t];
                    }
                    function a(e, a) {
                        return parseFloat(e.getPropertyValue(t(a)) || 0);
                    }
                    var i = e.params,
                        s = e.$wrapperEl,
                        r = e.size,
                        n = e.rtlTranslate,
                        l = e.wrongRTL,
                        o = e.virtual && i.virtual.enabled,
                        d = o ? e.virtual.slides.length : e.slides.length,
                        p = s.children("." + e.params.slideClass),
                        u = o ? e.virtual.slides.length : p.length,
                        c = [],
                        h = [],
                        v = [],
                        f = i.slidesOffsetBefore;
                    "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
                    var m = i.slidesOffsetAfter;
                    "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
                    var g = e.snapGrid.length,
                        $ = e.slidesGrid.length,
                        b = i.spaceBetween,
                        w = -f,
                        y = 0,
                        _ = 0;
                    if (void 0 !== r) {
                        "string" == typeof b && b.indexOf("%") >= 0 && (b = (parseFloat(b.replace("%", "")) / 100) * r),
                            (e.virtualSize = -b),
                            n ? p.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : p.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                            i.slidesPerColumn > 1 &&
                                ((E = Math.floor(u / i.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn),
                                "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (E = Math.max(E, i.slidesPerView * i.slidesPerColumn)));
                        for (var E, C, T, S, z, P = i.slidesPerColumn, k = E / P, M = Math.floor(u / i.slidesPerColumn), L = 0; L < u; L += 1) {
                            C = 0;
                            var I = p.eq(L);
                            if (i.slidesPerColumn > 1) {
                                var O = void 0,
                                    D = void 0,
                                    A = void 0;
                                if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                                    var N = Math.floor(L / (i.slidesPerGroup * i.slidesPerColumn)),
                                        G = L - i.slidesPerColumn * i.slidesPerGroup * N,
                                        B = 0 === N ? i.slidesPerGroup : Math.min(Math.ceil((u - N * P * i.slidesPerGroup) / P), i.slidesPerGroup);
                                    (O = (D = G - (A = Math.floor(G / B)) * B + N * i.slidesPerGroup) + (A * E) / P), I.css({ "-webkit-box-ordinal-group": O, "-moz-box-ordinal-group": O, "-ms-flex-order": O, "-webkit-order": O, order: O });
                                } else "column" === i.slidesPerColumnFill ? ((A = L - (D = Math.floor(L / P)) * P), (D > M || (D === M && A === P - 1)) && (A += 1) >= P && ((A = 0), (D += 1))) : (D = L - (A = Math.floor(L / k)) * k);
                                I.css(t("margin-top"), 0 !== A ? i.spaceBetween && i.spaceBetween + "px" : "");
                            }
                            if ("none" !== I.css("display")) {
                                if ("auto" === i.slidesPerView) {
                                    var H = getComputedStyle(I[0]),
                                        X = I[0].style.transform,
                                        Y = I[0].style.webkitTransform;
                                    if ((X && (I[0].style.transform = "none"), Y && (I[0].style.webkitTransform = "none"), i.roundLengths)) C = e.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
                                    else {
                                        var R = a(H, "width"),
                                            V = a(H, "padding-left"),
                                            W = a(H, "padding-right"),
                                            q = a(H, "margin-left"),
                                            F = a(H, "margin-right"),
                                            j = H.getPropertyValue("box-sizing");
                                        if (j && "border-box" === j) C = R + q + F;
                                        else {
                                            var U = I[0],
                                                K = U.clientWidth;
                                            C = R + V + W + q + F + (U.offsetWidth - K);
                                        }
                                    }
                                    X && (I[0].style.transform = X), Y && (I[0].style.webkitTransform = Y), i.roundLengths && (C = Math.floor(C));
                                } else (C = (r - (i.slidesPerView - 1) * b) / i.slidesPerView), i.roundLengths && (C = Math.floor(C)), p[L] && (p[L].style[t("width")] = C + "px");
                                p[L] && (p[L].swiperSlideSize = C),
                                    v.push(C),
                                    i.centeredSlides
                                        ? ((w = w + C / 2 + y / 2 + b),
                                          0 === y && 0 !== L && (w = w - r / 2 - b),
                                          0 === L && (w = w - r / 2 - b),
                                          0.001 > Math.abs(w) && (w = 0),
                                          i.roundLengths && (w = Math.floor(w)),
                                          _ % i.slidesPerGroup == 0 && c.push(w),
                                          h.push(w))
                                        : (i.roundLengths && (w = Math.floor(w)), (_ - Math.min(e.params.slidesPerGroupSkip, _)) % e.params.slidesPerGroup == 0 && c.push(w), h.push(w), (w = w + C + b)),
                                    (e.virtualSize += C + b),
                                    (y = C),
                                    (_ += 1);
                            }
                        }
                        if (
                            ((e.virtualSize = Math.max(e.virtualSize, r) + m),
                            n && l && ("slide" === i.effect || "coverflow" === i.effect) && s.css({ width: e.virtualSize + i.spaceBetween + "px" }),
                            i.setWrapperSize && s.css((((S = {})[t("width")] = e.virtualSize + i.spaceBetween + "px"), S)),
                            i.slidesPerColumn > 1 &&
                                ((e.virtualSize = (C + i.spaceBetween) * E),
                                (e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween),
                                s.css((((z = {})[t("width")] = e.virtualSize + i.spaceBetween + "px"), z)),
                                i.centeredSlides))
                        ) {
                            T = [];
                            for (var Z = 0; Z < c.length; Z += 1) {
                                var J = c[Z];
                                i.roundLengths && (J = Math.floor(J)), c[Z] < e.virtualSize + c[0] && T.push(J);
                            }
                            c = T;
                        }
                        if (!i.centeredSlides) {
                            T = [];
                            for (var Q = 0; Q < c.length; Q += 1) {
                                var ee = c[Q];
                                i.roundLengths && (ee = Math.floor(ee)), c[Q] <= e.virtualSize - r && T.push(ee);
                            }
                            (c = T), Math.floor(e.virtualSize - r) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - r);
                        }
                        if ((0 === c.length && (c = [0]), 0 !== i.spaceBetween)) {
                            var et,
                                ea = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                            p.filter(function (e, t) {
                                return !i.cssMode || t !== p.length - 1;
                            }).css((((et = {})[ea] = b + "px"), et));
                        }
                        if (i.centeredSlides && i.centeredSlidesBounds) {
                            var ei = 0;
                            v.forEach(function (e) {
                                ei += e + (i.spaceBetween ? i.spaceBetween : 0);
                            });
                            var es = (ei -= i.spaceBetween) - r;
                            c = c.map(function (e) {
                                return e < 0 ? -f : e > es ? es + m : e;
                            });
                        }
                        if (i.centerInsufficientSlides) {
                            var er = 0;
                            if (
                                (v.forEach(function (e) {
                                    er += e + (i.spaceBetween ? i.spaceBetween : 0);
                                }),
                                (er -= i.spaceBetween) < r)
                            ) {
                                var en = (r - er) / 2;
                                c.forEach(function (e, t) {
                                    c[t] = e - en;
                                }),
                                    h.forEach(function (e, t) {
                                        h[t] = e + en;
                                    });
                            }
                        }
                        x(e, { slides: p, snapGrid: c, slidesGrid: h, slidesSizesGrid: v }),
                            u !== d && e.emit("slidesLengthChange"),
                            c.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                            h.length !== $ && e.emit("slidesGridLengthChange"),
                            (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset();
                    }
                },
                updateAutoHeight: function (e) {
                    var t,
                        a = this,
                        i = [],
                        s = a.virtual && a.params.virtual.enabled,
                        r = 0;
                    "number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);
                    var n = function (e) {
                        return s
                            ? a.slides.filter(function (t) {
                                  return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
                              })[0]
                            : a.slides.eq(e)[0];
                    };
                    if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) {
                        if (a.params.centeredSlides)
                            a.visibleSlides.each(function (e) {
                                i.push(e);
                            });
                        else
                            for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                                var l = a.activeIndex + t;
                                if (l > a.slides.length && !s) break;
                                i.push(n(l));
                            }
                    } else i.push(n(a.activeIndex));
                    for (t = 0; t < i.length; t += 1)
                        if (void 0 !== i[t]) {
                            var o = i[t].offsetHeight;
                            r = o > r ? o : r;
                        }
                    r && a.$wrapperEl.css("height", r + "px");
                },
                updateSlidesOffset: function () {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = (this && this.translate) || 0);
                    var t = this,
                        a = t.params,
                        i = t.slides,
                        s = t.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                        var r = -e;
                        s && (r = e), i.removeClass(a.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
                        for (var n = 0; n < i.length; n += 1) {
                            var l = i[n],
                                o = (r + (a.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);
                            if (a.watchSlidesVisibility || (a.centeredSlides && a.autoHeight)) {
                                var d = -(r - l.swiperSlideOffset),
                                    p = d + t.slidesSizesGrid[n];
                                ((d >= 0 && d < t.size - 1) || (p > 1 && p <= t.size) || (d <= 0 && p >= t.size)) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
                            }
                            l.progress = s ? -o : o;
                        }
                        t.visibleSlides = v(t.visibleSlides);
                    }
                },
                updateProgress: function (e) {
                    if (void 0 === e) {
                        var t = this.rtlTranslate ? -1 : 1;
                        e = (this && this.translate && this.translate * t) || 0;
                    }
                    var a = this.params,
                        i = this.maxTranslate() - this.minTranslate(),
                        s = this.progress,
                        r = this.isBeginning,
                        n = this.isEnd,
                        l = r,
                        o = n;
                    0 === i ? ((s = 0), (r = !0), (n = !0)) : ((r = (s = (e - this.minTranslate()) / i) <= 0), (n = s >= 1)),
                        x(this, { progress: s, isBeginning: r, isEnd: n }),
                        (a.watchSlidesProgress || a.watchSlidesVisibility || (a.centeredSlides && a.autoHeight)) && this.updateSlidesProgress(e),
                        r && !l && this.emit("reachBeginning toEdge"),
                        n && !o && this.emit("reachEnd toEdge"),
                        ((l && !r) || (o && !n)) && this.emit("fromEdge"),
                        this.emit("progress", s);
                },
                updateSlidesClasses: function () {
                    var e,
                        t = this.slides,
                        a = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex,
                        r = this.realIndex,
                        n = this.virtual && a.virtual.enabled;
                    t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass),
                        (e = n ? this.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(a.slideActiveClass),
                        a.loop &&
                            (e.hasClass(a.slideDuplicateClass)
                                ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass)
                                : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));
                    var l = e
                        .nextAll("." + a.slideClass)
                        .eq(0)
                        .addClass(a.slideNextClass);
                    a.loop && 0 === l.length && (l = t.eq(0)).addClass(a.slideNextClass);
                    var o = e
                        .prevAll("." + a.slideClass)
                        .eq(0)
                        .addClass(a.slidePrevClass);
                    a.loop && 0 === o.length && (o = t.eq(-1)).addClass(a.slidePrevClass),
                        a.loop &&
                            (l.hasClass(a.slideDuplicateClass)
                                ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass)
                                : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass),
                            o.hasClass(a.slideDuplicateClass)
                                ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass)
                                : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass)),
                        this.emitSlidesClasses();
                },
                updateActiveIndex: function (e) {
                    var t,
                        a = this,
                        i = a.rtlTranslate ? a.translate : -a.translate,
                        s = a.slidesGrid,
                        r = a.snapGrid,
                        n = a.params,
                        l = a.activeIndex,
                        o = a.realIndex,
                        d = a.snapIndex,
                        p = e;
                    if (void 0 === p) {
                        for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? (i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? (p = u) : i >= s[u] && i < s[u + 1] && (p = u + 1)) : i >= s[u] && (p = u);
                        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
                    }
                    if (r.indexOf(i) >= 0) t = r.indexOf(i);
                    else {
                        var c = Math.min(n.slidesPerGroupSkip, p);
                        t = c + Math.floor((p - c) / n.slidesPerGroup);
                    }
                    if ((t >= r.length && (t = r.length - 1), p !== l)) {
                        var h = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                        x(a, { snapIndex: t, realIndex: h, previousIndex: l, activeIndex: p }),
                            a.emit("activeIndexChange"),
                            a.emit("snapIndexChange"),
                            o !== h && a.emit("realIndexChange"),
                            (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange");
                    } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
                },
                updateClickedSlide: function (e) {
                    var t,
                        a = this,
                        i = a.params,
                        s = v(e.target).closest("." + i.slideClass)[0],
                        r = !1;
                    if (s) {
                        for (var n = 0; n < a.slides.length; n += 1)
                            if (a.slides[n] === s) {
                                (r = !0), (t = n);
                                break;
                            }
                    }
                    if (!s || !r) return (a.clickedSlide = void 0), void (a.clickedIndex = void 0);
                    (a.clickedSlide = s),
                        a.virtual && a.params.virtual.enabled ? (a.clickedIndex = parseInt(v(s).attr("data-swiper-slide-index"), 10)) : (a.clickedIndex = t),
                        i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide();
                },
            },
            translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        a = this.rtlTranslate,
                        i = this.translate,
                        s = this.$wrapperEl;
                    if (t.virtualTranslate) return a ? -i : i;
                    if (t.cssMode) return i;
                    var r = y(s[0], e);
                    return a && (r = -r), r || 0;
                },
                setTranslate: function (e, t) {
                    var a = this,
                        i = a.rtlTranslate,
                        s = a.params,
                        r = a.$wrapperEl,
                        n = a.wrapperEl,
                        l = a.progress,
                        o = 0,
                        d = 0;
                    a.isHorizontal() ? (o = i ? -e : e) : (d = e),
                        s.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
                        s.cssMode ? (n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d) : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + d + "px, 0px)"),
                        (a.previousTranslate = a.translate),
                        (a.translate = a.isHorizontal() ? o : d);
                    var p = a.maxTranslate() - a.minTranslate();
                    (0 === p ? 0 : (e - a.minTranslate()) / p) !== l && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
                },
                minTranslate: function () {
                    return -this.snapGrid[0];
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1];
                },
                translateTo: function (e, t, a, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
                    var r = this,
                        n = r.params,
                        l = r.wrapperEl;
                    if (r.animating && n.preventInteractionOnTransition) return !1;
                    var o,
                        d = r.minTranslate(),
                        p = r.maxTranslate();
                    if (((o = i && e > d ? d : i && e < p ? p : e), r.updateProgress(o), n.cssMode)) {
                        var u,
                            c = r.isHorizontal();
                        return 0 === t ? (l[c ? "scrollLeft" : "scrollTop"] = -o) : l.scrollTo ? l.scrollTo((((u = {})[c ? "left" : "top"] = -o), (u.behavior = "smooth"), u)) : (l[c ? "scrollLeft" : "scrollTop"] = -o), !0;
                    }
                    return (
                        0 === t
                            ? (r.setTransition(0), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd")))
                            : (r.setTransition(t),
                              r.setTranslate(o),
                              a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")),
                              r.animating ||
                                  ((r.animating = !0),
                                  r.onTranslateToWrapperTransitionEnd ||
                                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                                          r &&
                                              !r.destroyed &&
                                              e.target === this &&
                                              (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                              r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                                              (r.onTranslateToWrapperTransitionEnd = null),
                                              delete r.onTranslateToWrapperTransitionEnd,
                                              a && r.emit("transitionEnd"));
                                      }),
                                  r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                  r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                        !0
                    );
                },
            },
            transition: {
                setTransition: function (e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    var a = this.activeIndex,
                        i = this.params,
                        s = this.previousIndex;
                    if (!i.cssMode) {
                        i.autoHeight && this.updateAutoHeight();
                        var r = t;
                        if ((r || (r = a > s ? "next" : a < s ? "prev" : "reset"), this.emit("transitionStart"), e && a !== s)) {
                            if ("reset" === r) return void this.emit("slideResetTransitionStart");
                            this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
                        }
                    }
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    var a = this,
                        i = a.activeIndex,
                        s = a.previousIndex,
                        r = a.params;
                    if (((a.animating = !1), !r.cssMode)) {
                        a.setTransition(0);
                        var n = t;
                        if ((n || (n = i > s ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s)) {
                            if ("reset" === n) return void a.emit("slideResetTransitionEnd");
                            a.emit("slideChangeTransitionEnd"), "next" === n ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
                        }
                    }
                },
            },
            slide: {
                slideTo: function (e, t, a, i, s) {
                    if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" != typeof e && "string" != typeof e))
                        throw Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                    if ("string" == typeof e) {
                        var r = parseInt(e, 10);
                        if (!isFinite(r)) throw Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                        e = r;
                    }
                    var n = this,
                        l = e;
                    l < 0 && (l = 0);
                    var o = n.params,
                        d = n.snapGrid,
                        p = n.slidesGrid,
                        u = n.previousIndex,
                        c = n.activeIndex,
                        h = n.rtlTranslate,
                        v = n.wrapperEl,
                        f = n.enabled;
                    if ((n.animating && o.preventInteractionOnTransition) || (!f && !i && !s)) return !1;
                    var m = Math.min(n.params.slidesPerGroupSkip, l),
                        g = m + Math.floor((l - m) / n.params.slidesPerGroup);
                    g >= d.length && (g = d.length - 1), (c || o.initialSlide || 0) === (u || 0) && a && n.emit("beforeSlideChangeStart");
                    var $,
                        b = -d[g];
                    if ((n.updateProgress(b), o.normalizeSlideIndex))
                        for (var w = 0; w < p.length; w += 1) {
                            var y = -Math.floor(100 * b),
                                _ = Math.floor(100 * p[w]),
                                E = Math.floor(100 * p[w + 1]);
                            void 0 !== p[w + 1] ? (y >= _ && y < E - (E - _) / 2 ? (l = w) : y >= _ && y < E && (l = w + 1)) : y >= _ && (l = w);
                        }
                    if (n.initialized && l !== c && ((!n.allowSlideNext && b < n.translate && b < n.minTranslate()) || (!n.allowSlidePrev && b > n.translate && b > n.maxTranslate() && (c || 0) !== l))) return !1;
                    if ((($ = l > c ? "next" : l < c ? "prev" : "reset"), (h && -b === n.translate) || (!h && b === n.translate)))
                        return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(b), "reset" !== $ && (n.transitionStart(a, $), n.transitionEnd(a, $)), !1;
                    if (o.cssMode) {
                        var x,
                            C = n.isHorizontal(),
                            T = -b;
                        return (
                            (h && (T = v.scrollWidth - v.offsetWidth - T), 0 === t)
                                ? (v[C ? "scrollLeft" : "scrollTop"] = T)
                                : v.scrollTo
                                ? v.scrollTo((((x = {})[C ? "left" : "top"] = T), (x.behavior = "smooth"), x))
                                : (v[C ? "scrollLeft" : "scrollTop"] = T),
                            !0
                        );
                    }
                    return (
                        0 === t
                            ? (n.setTransition(0), n.setTranslate(b), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, $), n.transitionEnd(a, $))
                            : (n.setTransition(t),
                              n.setTranslate(b),
                              n.updateActiveIndex(l),
                              n.updateSlidesClasses(),
                              n.emit("beforeTransitionStart", t, i),
                              n.transitionStart(a, $),
                              n.animating ||
                                  ((n.animating = !0),
                                  n.onSlideToWrapperTransitionEnd ||
                                      (n.onSlideToWrapperTransitionEnd = function (e) {
                                          n &&
                                              !n.destroyed &&
                                              e.target === this &&
                                              (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
                                              n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd),
                                              (n.onSlideToWrapperTransitionEnd = null),
                                              delete n.onSlideToWrapperTransitionEnd,
                                              n.transitionEnd(a, $));
                                      }),
                                  n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
                                  n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))),
                        !0
                    );
                },
                slideToLoop: function (e, t, a, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
                    var s = e;
                    return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i);
                },
                slideNext: function (e, t, a) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        r = i.animating;
                    if (!i.enabled) return i;
                    var n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                    if (s.loop) {
                        if (r && s.loopPreventsSlide) return !1;
                        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
                    }
                    return i.slideTo(i.activeIndex + n, e, t, a);
                },
                slidePrev: function (e, t, a) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        r = i.animating,
                        n = i.snapGrid,
                        l = i.slidesGrid,
                        o = i.rtlTranslate;
                    if (!i.enabled) return i;
                    if (s.loop) {
                        if (r && s.loopPreventsSlide) return !1;
                        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
                    }
                    function d(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                    }
                    var p,
                        u = d(o ? i.translate : -i.translate),
                        c =
                            n[
                                n
                                    .map(function (e) {
                                        return d(e);
                                    })
                                    .indexOf(u) - 1
                            ];
                    return (
                        void 0 === c &&
                            s.cssMode &&
                            n.forEach(function (e) {
                                !c && u >= e && (c = e);
                            }),
                        void 0 !== c && (p = l.indexOf(c)) < 0 && (p = i.activeIndex - 1),
                        i.slideTo(p, e, t, a)
                    );
                },
                slideReset: function (e, t, a) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
                },
                slideToClosest: function (e, t, a, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = 0.5);
                    var s = this.activeIndex,
                        r = Math.min(this.params.slidesPerGroupSkip, s),
                        n = r + Math.floor((s - r) / this.params.slidesPerGroup),
                        l = this.rtlTranslate ? this.translate : -this.translate;
                    if (l >= this.snapGrid[n]) {
                        var o = this.snapGrid[n];
                        l - o > (this.snapGrid[n + 1] - o) * i && (s += this.params.slidesPerGroup);
                    } else {
                        var d = this.snapGrid[n - 1];
                        l - d <= (this.snapGrid[n] - d) * i && (s -= this.params.slidesPerGroup);
                    }
                    return (s = Math.min((s = Math.max(s, 0)), this.slidesGrid.length - 1)), this.slideTo(s, e, t, a);
                },
                slideToClickedSlide: function () {
                    var e,
                        t = this,
                        a = t.params,
                        i = t.$wrapperEl,
                        s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
                        r = t.clickedIndex;
                    if (a.loop) {
                        if (t.animating) return;
                        (e = parseInt(v(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                            a.centeredSlides
                                ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2
                                    ? (t.loopFix(),
                                      (r = i
                                          .children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")")
                                          .eq(0)
                                          .index()),
                                      b(function () {
                                          t.slideTo(r);
                                      }))
                                    : t.slideTo(r)
                                : r > t.slides.length - s
                                ? (t.loopFix(),
                                  (r = i
                                      .children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")")
                                      .eq(0)
                                      .index()),
                                  b(function () {
                                      t.slideTo(r);
                                  }))
                                : t.slideTo(r);
                    } else t.slideTo(r);
                },
            },
            loop: {
                loopCreate: function () {
                    var e = this,
                        t = s(),
                        a = e.params,
                        i = e.$wrapperEl;
                    i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
                    var r = i.children("." + a.slideClass);
                    if (a.loopFillGroupWithBlank) {
                        var n = a.slidesPerGroup - (r.length % a.slidesPerGroup);
                        if (n !== a.slidesPerGroup) {
                            for (var l = 0; l < n; l += 1) {
                                var o = v(t.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                                i.append(o);
                            }
                            r = i.children("." + a.slideClass);
                        }
                    }
                    "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = r.length),
                        (e.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10))),
                        (e.loopedSlides += a.loopAdditionalSlides),
                        e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    var d = [],
                        p = [];
                    r.each(function (t, a) {
                        var i = v(t);
                        a < e.loopedSlides && p.push(t), a < r.length && a >= r.length - e.loopedSlides && d.push(t), i.attr("data-swiper-slide-index", a);
                    });
                    for (var u = 0; u < p.length; u += 1) i.append(v(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
                    for (var c = d.length - 1; c >= 0; c -= 1) i.prepend(v(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
                },
                loopFix: function () {
                    var e = this;
                    e.emit("beforeLoopFix");
                    var t,
                        a = e.activeIndex,
                        i = e.slides,
                        s = e.loopedSlides,
                        r = e.allowSlidePrev,
                        n = e.allowSlideNext,
                        l = e.snapGrid,
                        o = e.rtlTranslate;
                    (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                    var d = -l[a] - e.getTranslate();
                    a < s
                        ? ((t = i.length - 3 * s + a), (t += s), e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d))
                        : a >= i.length - s && ((t = -i.length + a + s), (t += s), e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)),
                        (e.allowSlidePrev = r),
                        (e.allowSlideNext = n),
                        e.emit("loopFix");
                },
                loopDestroy: function () {
                    var e = this.$wrapperEl,
                        t = this.params,
                        a = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index");
                },
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    if (!(this.support.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode)) {
                        var t = this.el;
                        (t.style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab");
                    }
                },
                unsetGrabCursor: function () {
                    var e = this;
                    e.support.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e.el.style.cursor = "");
                },
            },
            manipulation: {
                appendSlide: function (e) {
                    var t = this.$wrapperEl,
                        a = this.params;
                    if ((a.loop && this.loopDestroy(), "object" == typeof e && "length" in e)) for (var i = 0; i < e.length; i += 1) e[i] && t.append(e[i]);
                    else t.append(e);
                    a.loop && this.loopCreate(), (a.observer && this.support.observer) || this.update();
                },
                prependSlide: function (e) {
                    var t = this.params,
                        a = this.$wrapperEl,
                        i = this.activeIndex;
                    t.loop && this.loopDestroy();
                    var s = i + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var r = 0; r < e.length; r += 1) e[r] && a.prepend(e[r]);
                        s = i + e.length;
                    } else a.prepend(e);
                    t.loop && this.loopCreate(), (t.observer && this.support.observer) || this.update(), this.slideTo(s, 0, !1);
                },
                addSlide: function (e, t) {
                    var a = this,
                        i = a.$wrapperEl,
                        s = a.params,
                        r = a.activeIndex;
                    s.loop && ((r -= a.loopedSlides), a.loopDestroy(), (a.slides = i.children("." + s.slideClass)));
                    var n = a.slides.length;
                    if (e <= 0) a.prependSlide(t);
                    else if (e >= n) a.appendSlide(t);
                    else {
                        for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
                            var p = a.slides.eq(d);
                            p.remove(), o.unshift(p);
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
                            l = r > e ? r + t.length : r;
                        } else i.append(t);
                        for (var c = 0; c < o.length; c += 1) i.append(o[c]);
                        s.loop && a.loopCreate(), (s.observer && a.support.observer) || a.update(), s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1);
                    }
                },
                removeSlide: function (e) {
                    var t = this,
                        a = t.params,
                        i = t.$wrapperEl,
                        s = t.activeIndex;
                    a.loop && ((s -= t.loopedSlides), t.loopDestroy(), (t.slides = i.children("." + a.slideClass)));
                    var r,
                        n = s;
                    if ("object" == typeof e && "length" in e) {
                        for (var l = 0; l < e.length; l += 1) (r = e[l]), t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                        n = Math.max(n, 0);
                    } else (r = e), t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), (n = Math.max(n, 0));
                    a.loop && t.loopCreate(), (a.observer && t.support.observer) || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
                },
                removeAllSlides: function () {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e);
                },
            },
            events: {
                attachEvents: function () {
                    var e = this,
                        t = s(),
                        a = e.params,
                        i = e.touchEvents,
                        r = e.el,
                        n = e.wrapperEl,
                        l = e.device,
                        o = e.support;
                    (e.onTouchStart = k.bind(e)), (e.onTouchMove = M.bind(e)), (e.onTouchEnd = L.bind(e)), a.cssMode && (e.onScroll = D.bind(e)), (e.onClick = O.bind(e));
                    var d = !!a.nested;
                    if (!o.touch && o.pointerEvents) r.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, d), t.addEventListener(i.end, e.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var p = !("touchstart" !== i.start || !o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };
                            r.addEventListener(i.start, e.onTouchStart, p),
                                r.addEventListener(i.move, e.onTouchMove, o.passiveListener ? { passive: !1, capture: d } : d),
                                r.addEventListener(i.end, e.onTouchEnd, p),
                                i.cancel && r.addEventListener(i.cancel, e.onTouchEnd, p),
                                A || (t.addEventListener("touchstart", N), (A = !0));
                        }
                        ((a.simulateTouch && !l.ios && !l.android) || (a.simulateTouch && !o.touch && l.ios)) &&
                            (r.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1));
                    }
                    (a.preventClicks || a.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0),
                        a.cssMode && n.addEventListener("scroll", e.onScroll),
                        a.updateOnWindowResize ? e.on(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I, !0) : e.on("observerUpdate", I, !0);
                },
                detachEvents: function () {
                    var e = s(),
                        t = this.params,
                        a = this.touchEvents,
                        i = this.el,
                        r = this.wrapperEl,
                        n = this.device,
                        l = this.support,
                        o = !!t.nested;
                    if (!l.touch && l.pointerEvents) i.removeEventListener(a.start, this.onTouchStart, !1), e.removeEventListener(a.move, this.onTouchMove, o), e.removeEventListener(a.end, this.onTouchEnd, !1);
                    else {
                        if (l.touch) {
                            var d = !("onTouchStart" !== a.start || !l.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                            i.removeEventListener(a.start, this.onTouchStart, d),
                                i.removeEventListener(a.move, this.onTouchMove, o),
                                i.removeEventListener(a.end, this.onTouchEnd, d),
                                a.cancel && i.removeEventListener(a.cancel, this.onTouchEnd, d);
                        }
                        ((t.simulateTouch && !n.ios && !n.android) || (t.simulateTouch && !l.touch && n.ios)) &&
                            (i.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1));
                    }
                    (t.preventClicks || t.preventClicksPropagation) && i.removeEventListener("click", this.onClick, !0),
                        t.cssMode && r.removeEventListener("scroll", this.onScroll),
                        this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I);
                },
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this,
                        t = e.activeIndex,
                        a = e.initialized,
                        i = e.loopedSlides,
                        s = e.params,
                        r = e.$el,
                        n = s.breakpoints;
                    if (n && (!n || 0 !== Object.keys(n).length)) {
                        var l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                        if (l && e.currentBreakpoint !== l) {
                            var o = l in n ? n[l] : void 0;
                            o &&
                                ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                                    var t = o[e];
                                    void 0 !== t && (o[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                                });
                            var d = o || e.originalParams,
                                p = s.slidesPerColumn > 1,
                                u = d.slidesPerColumn > 1,
                                c = s.enabled;
                            p && !u
                                ? (r.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column"), e.emitContainerClasses())
                                : !p &&
                                  u &&
                                  (r.addClass(s.containerModifierClass + "multirow"),
                                  ((d.slidesPerColumnFill && "column" === d.slidesPerColumnFill) || (!d.slidesPerColumnFill && "column" === s.slidesPerColumnFill)) && r.addClass(s.containerModifierClass + "multirow-column"),
                                  e.emitContainerClasses());
                            var h = d.direction && d.direction !== s.direction,
                                v = s.loop && (d.slidesPerView !== s.slidesPerView || h);
                            h && a && e.changeDirection(), x(e.params, d);
                            var f = e.params.enabled;
                            x(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                                c && !f ? e.disable() : !c && f && e.enable(),
                                (e.currentBreakpoint = l),
                                e.emit("_beforeBreakpoint", d),
                                v && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - (void 0 === i ? 0 : i) + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", d);
                        }
                    }
                },
                getBreakpoint: function (e, t, a) {
                    if ((void 0 === t && (t = "window"), e && ("container" !== t || a))) {
                        var i = !1,
                            s = n(),
                            r = "window" === t ? s.innerHeight : a.clientHeight,
                            l = Object.keys(e).map(function (e) {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    var t = parseFloat(e.substr(1));
                                    return { value: r * t, point: e };
                                }
                                return { value: e, point: e };
                            });
                        l.sort(function (e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10);
                        });
                        for (var o = 0; o < l.length; o += 1) {
                            var d = l[o],
                                p = d.point,
                                u = d.value;
                            "window" === t ? s.matchMedia("(min-width: " + u + "px)").matches && (i = p) : u <= a.clientWidth && (i = p);
                        }
                        return i || "max";
                    }
                },
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this,
                        t = e.params,
                        a = e.isLocked,
                        i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && i ? (e.isLocked = i <= e.size) : (e.isLocked = 1 === e.snapGrid.length),
                        (e.allowSlideNext = !e.isLocked),
                        (e.allowSlidePrev = !e.isLocked),
                        a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                        a && a !== e.isLocked && ((e.isEnd = !1), e.navigation && e.navigation.update());
                },
            },
            classes: {
                addClasses: function () {
                    var e,
                        t,
                        a,
                        i = this.classNames,
                        s = this.params,
                        r = this.rtl,
                        n = this.$el,
                        l = this.device,
                        o = this.support,
                        d =
                            ((e = [
                                "initialized",
                                s.direction,
                                { "pointer-events": o.pointerEvents && !o.touch },
                                { "free-mode": s.freeMode },
                                { autoheight: s.autoHeight },
                                { rtl: r },
                                { multirow: s.slidesPerColumn > 1 },
                                { "multirow-column": s.slidesPerColumn > 1 && "column" === s.slidesPerColumnFill },
                                { android: l.android },
                                { ios: l.ios },
                                { "css-mode": s.cssMode },
                            ]),
                            (t = s.containerModifierClass),
                            (a = []),
                            e.forEach(function (e) {
                                "object" == typeof e
                                    ? Object.keys(e).forEach(function (i) {
                                          e[i] && a.push(t + i);
                                      })
                                    : "string" == typeof e && a.push(t + e);
                            }),
                            a);
                    i.push.apply(i, d), n.addClass([].concat(i).join(" ")), this.emitContainerClasses();
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" ")), this.emitContainerClasses();
                },
            },
            images: {
                loadImage: function (e, t, a, i, s, r) {
                    var l,
                        o = n();
                    function d() {
                        r && r();
                    }
                    v(e).parent("picture")[0] || (e.complete && s) ? d() : t ? (((l = new o.Image()).onload = d), (l.onerror = d), i && (l.sizes = i), a && (l.srcset = a), t && (l.src = t)) : d();
                },
                preloadImages: function () {
                    var e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
                    }
                },
            },
        },
        H = {},
        X = (function () {
            function e() {
                for (var t, a, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                if (
                    (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? (a = s[0]) : ((t = s[0]), (a = s[1])),
                    a || (a = {}),
                    (a = x({}, a)),
                    t && !a.el && (a.el = t),
                    a.el && v(a.el).length > 1)
                ) {
                    var l = [];
                    return (
                        v(a.el).each(function (t) {
                            var i = x({}, a, { el: t });
                            l.push(new e(i));
                        }),
                        l
                    );
                }
                var o,
                    d,
                    p,
                    u,
                    c,
                    h,
                    f,
                    $,
                    b,
                    y,
                    _,
                    E,
                    C,
                    T,
                    S,
                    P,
                    k,
                    M = this;
                (M.__swiper__ = !0),
                    (M.support = z()),
                    (M.device =
                        ((o = { userAgent: a.userAgent }),
                        m ||
                            (m =
                                ((p = (void 0 === (d = o) ? {} : d).userAgent),
                                (u = z()),
                                (h = (c = n()).navigator.platform),
                                (f = p || c.navigator.userAgent),
                                ($ = { ios: !1, android: !1 }),
                                (b = c.screen.width),
                                (y = c.screen.height),
                                (_ = f.match(/(Android);?[\s\/]+([\d.]+)?/)),
                                (E = f.match(/(iPad).*OS\s([\d_]+)/)),
                                (C = f.match(/(iPod)(.*OS\s([\d_]+))?/)),
                                (T = !E && f.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
                                (S = "MacIntel" === h),
                                !E &&
                                    S &&
                                    u.touch &&
                                    ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(b + "x" + y) >= 0 &&
                                    ((E = f.match(/(Version)\/([\d.]+)/)) || (E = [0, 1, "13_0_0"]), (S = !1)),
                                _ && "Win32" !== h && (($.os = "android"), ($.android = !0)),
                                (E || T || C) && (($.os = "ios"), ($.ios = !0)),
                                $)),
                        m)),
                    (M.browser =
                        (g ||
                            (g = {
                                isEdge: !!(k = n()).navigator.userAgent.match(/Edge/g),
                                isSafari: (P = k.navigator.userAgent.toLowerCase()).indexOf("safari") >= 0 && 0 > P.indexOf("chrome") && 0 > P.indexOf("android"),
                                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(k.navigator.userAgent),
                            }),
                        g)),
                    (M.eventsListeners = {}),
                    (M.eventsAnyListeners = []),
                    void 0 === M.modules && (M.modules = {}),
                    Object.keys(M.modules).forEach(function (e) {
                        var t = M.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0],
                                s = t.params[i];
                            if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === a[i] && (a[i] = { auto: !0 }), !(i in a) || !("enabled" in s))) return;
                            !0 === a[i] && (a[i] = { enabled: !0 }), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = { enabled: !1 });
                        }
                    });
                var L,
                    I,
                    O = x({}, G);
                return (
                    M.useParams(O),
                    (M.params = x({}, O, H, a)),
                    (M.originalParams = x({}, M.params)),
                    (M.passedParams = x({}, a)),
                    M.params &&
                        M.params.on &&
                        Object.keys(M.params.on).forEach(function (e) {
                            M.on(e, M.params.on[e]);
                        }),
                    M.params && M.params.onAny && M.onAny(M.params.onAny),
                    (M.$ = v),
                    x(M, {
                        enabled: M.params.enabled,
                        el: t,
                        classNames: [],
                        slides: v(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === M.params.direction;
                        },
                        isVertical: function () {
                            return "vertical" === M.params.direction;
                        },
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: M.params.allowSlideNext,
                        allowSlidePrev: M.params.allowSlidePrev,
                        touchEvents:
                            ((L = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                            (I = ["mousedown", "mousemove", "mouseup"]),
                            M.support.pointerEvents && (I = ["pointerdown", "pointermove", "pointerup"]),
                            (M.touchEventsTouch = { start: L[0], move: L[1], end: L[2], cancel: L[3] }),
                            (M.touchEventsDesktop = { start: I[0], move: I[1], end: I[2] }),
                            M.support.touch || !M.params.simulateTouch ? M.touchEventsTouch : M.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: M.params.focusableElements,
                            lastClickTime: w(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0,
                        },
                        allowClick: !0,
                        allowTouchMove: M.params.allowTouchMove,
                        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                        imagesToLoad: [],
                        imagesLoaded: 0,
                    }),
                    M.useModules(),
                    M.emit("_swiper"),
                    M.params.init && M.init(),
                    M
                );
            }
            var t,
                a,
                i,
                r = e.prototype;
            return (
                (r.enable = function () {
                    var e = this;
                    e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
                }),
                (r.disable = function () {
                    var e = this;
                    e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
                }),
                (r.setProgress = function (e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    var a = this.minTranslate(),
                        i = (this.maxTranslate() - a) * e + a;
                    this.translateTo(i, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses();
                }),
                (r.emitContainerClasses = function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                        var t = e.el.className.split(" ").filter(function (t) {
                            return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
                        });
                        e.emit("_containerClasses", t.join(" "));
                    }
                }),
                (r.getSlideClasses = function (e) {
                    var t = this;
                    return e.className
                        .split(" ")
                        .filter(function (e) {
                            return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
                        })
                        .join(" ");
                }),
                (r.emitSlidesClasses = function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                        var t = [];
                        e.slides.each(function (a) {
                            var i = e.getSlideClasses(a);
                            t.push({ slideEl: a, classNames: i }), e.emit("_slideClass", a, i);
                        }),
                            e.emit("_slideClasses", t);
                    }
                }),
                (r.slidesPerViewDynamic = function () {
                    var e = this.params,
                        t = this.slides,
                        a = this.slidesGrid,
                        i = this.size,
                        s = this.activeIndex,
                        r = 1;
                    if (e.centeredSlides) {
                        for (var n, l = t[s].swiperSlideSize, o = s + 1; o < t.length; o += 1) t[o] && !n && ((r += 1), (l += t[o].swiperSlideSize) > i && (n = !0));
                        for (var d = s - 1; d >= 0; d -= 1) t[d] && !n && ((r += 1), (l += t[d].swiperSlideSize) > i && (n = !0));
                    } else for (var p = s + 1; p < t.length; p += 1) a[p] - a[s] < i && (r += 1);
                    return r;
                }),
                (r.update = function () {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            a = e.params;
                        a.breakpoints && e.setBreakpoint(),
                            e.updateSize(),
                            e.updateSlides(),
                            e.updateProgress(),
                            e.updateSlidesClasses(),
                            e.params.freeMode
                                ? (i(), e.params.autoHeight && e.updateAutoHeight())
                                : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
                            a.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                            e.emit("update");
                    }
                    function i() {
                        var t = Math.min(Math.max(e.rtlTranslate ? -1 * e.translate : e.translate, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(t), e.updateActiveIndex(), e.updateSlidesClasses();
                    }
                }),
                (r.changeDirection = function (e, t) {
                    void 0 === t && (t = !0);
                    var a = this,
                        i = a.params.direction;
                    return (
                        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                        e === i ||
                            ("horizontal" !== e && "vertical" !== e) ||
                            (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + e),
                            a.emitContainerClasses(),
                            (a.params.direction = e),
                            a.slides.each(function (t) {
                                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                            }),
                            a.emit("changeDirection"),
                            t && a.update()),
                        a
                    );
                }),
                (r.mount = function (e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var a = v(e || t.params.el);
                    if (!(e = a[0])) return !1;
                    e.swiper = t;
                    var i = function () {
                            return "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
                        },
                        r = (function () {
                            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                var t = v(e.shadowRoot.querySelector(i()));
                                return (
                                    (t.children = function (e) {
                                        return a.children(e);
                                    }),
                                    t
                                );
                            }
                            return a.children(i());
                        })();
                    if (0 === r.length && t.params.createElements) {
                        var n = s().createElement("div");
                        (r = v(n)),
                            (n.className = t.params.wrapperClass),
                            a.append(n),
                            a.children("." + t.params.slideClass).each(function (e) {
                                r.append(e);
                            });
                    }
                    return (
                        x(t, {
                            $el: a,
                            el: e,
                            $wrapperEl: r,
                            wrapperEl: r[0],
                            mounted: !0,
                            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
                            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
                            wrongRTL: "-webkit-box" === r.css("display"),
                        }),
                        !0
                    );
                }),
                (r.init = function (e) {
                    var t = this;
                    return (
                        t.initialized ||
                            !1 === t.mount(e) ||
                            (t.emit("beforeInit"),
                            t.params.breakpoints && t.setBreakpoint(),
                            t.addClasses(),
                            t.params.loop && t.loopCreate(),
                            t.updateSize(),
                            t.updateSlides(),
                            t.params.watchOverflow && t.checkOverflow(),
                            t.params.grabCursor && t.enabled && t.setGrabCursor(),
                            t.params.preloadImages && t.preloadImages(),
                            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                            t.attachEvents(),
                            (t.initialized = !0),
                            t.emit("init"),
                            t.emit("afterInit")),
                        t
                    );
                }),
                (r.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var a,
                        i = this,
                        s = i.params,
                        r = i.$el,
                        n = i.$wrapperEl,
                        l = i.slides;
                    return (
                        void 0 === i.params ||
                            i.destroyed ||
                            (i.emit("beforeDestroy"),
                            (i.initialized = !1),
                            i.detachEvents(),
                            s.loop && i.loopDestroy(),
                            t &&
                                (i.removeClasses(),
                                r.removeAttr("style"),
                                n.removeAttr("style"),
                                l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                            i.emit("destroy"),
                            Object.keys(i.eventsListeners).forEach(function (e) {
                                i.off(e);
                            }),
                            !1 !== e &&
                                ((i.$el[0].swiper = null),
                                Object.keys((a = i)).forEach(function (e) {
                                    try {
                                        a[e] = null;
                                    } catch (t) {}
                                    try {
                                        delete a[e];
                                    } catch (i) {}
                                })),
                            (i.destroyed = !0)),
                        null
                    );
                }),
                (e.extendDefaults = function (e) {
                    x(H, e);
                }),
                (e.installModule = function (t) {
                    e.prototype.modules || (e.prototype.modules = {});
                    var a = t.name || Object.keys(e.prototype.modules).length + "_" + w();
                    e.prototype.modules[a] = t;
                }),
                (e.use = function (t) {
                    return Array.isArray(t)
                        ? (t.forEach(function (t) {
                              return e.installModule(t);
                          }),
                          e)
                        : (e.installModule(t), e);
                }),
                (t = e),
                (i = [
                    {
                        key: "extendedDefaults",
                        get: function () {
                            return H;
                        },
                    },
                    {
                        key: "defaults",
                        get: function () {
                            return G;
                        },
                    },
                ]),
                (a = null),
                i &&
                    (function e(t, a) {
                        for (var i = 0; i < a.length; i++) {
                            var s = a[i];
                            (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
                        }
                    })(t, i),
                e
            );
        })();
    Object.keys(B).forEach(function (e) {
        Object.keys(B[e]).forEach(function (t) {
            X.prototype[t] = B[e][t];
        });
    }),
        X.use([
            {
                name: "resize",
                create: function () {
                    var e = this;
                    x(e, {
                        resize: {
                            observer: null,
                            createObserver: function () {
                                e &&
                                    !e.destroyed &&
                                    e.initialized &&
                                    ((e.resize.observer = new ResizeObserver(function (t) {
                                        var a = e.width,
                                            i = e.height,
                                            s = a,
                                            r = i;
                                        t.forEach(function (t) {
                                            var a = t.contentBoxSize,
                                                i = t.contentRect,
                                                n = t.target;
                                            (n && n !== e.el) || ((s = i ? i.width : (a[0] || a).inlineSize), (r = i ? i.height : (a[0] || a).blockSize));
                                        }),
                                            (s === a && r === i) || e.resize.resizeHandler();
                                    })),
                                    e.resize.observer.observe(e.el));
                            },
                            removeObserver: function () {
                                e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
                            },
                            resizeHandler: function () {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                            },
                            orientationChangeHandler: function () {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange");
                            },
                        },
                    });
                },
                on: {
                    init: function (e) {
                        var t = n();
                        e.params.resizeObserver && void 0 !== n().ResizeObserver
                            ? e.resize.createObserver()
                            : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
                    },
                    destroy: function (e) {
                        var t = n();
                        e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
                    },
                },
            },
            {
                name: "observer",
                params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
                create: function () {
                    C(this, { observer: e({}, P, { observers: [] }) });
                },
                on: {
                    init: function (e) {
                        e.observer.init();
                    },
                    destroy: function (e) {
                        e.observer.destroy();
                    },
                },
            },
        ]);
    var Y = {
            update: function (e) {
                var t = this,
                    a = t.params,
                    i = a.slidesPerView,
                    s = a.slidesPerGroup,
                    r = a.centeredSlides,
                    n = t.params.virtual,
                    l = n.addSlidesBefore,
                    o = n.addSlidesAfter,
                    d = t.virtual,
                    p = d.from,
                    u = d.to,
                    c = d.slides,
                    h = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m,
                    g,
                    $,
                    b = t.activeIndex || 0;
                (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"), r ? ((g = Math.floor(i / 2) + s + o), ($ = Math.floor(i / 2) + s + l)) : ((g = i + (s - 1) + o), ($ = s + l));
                var w = Math.max((b || 0) - $, 0),
                    y = Math.min((b || 0) + g, c.length - 1),
                    _ = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
                function E() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
                }
                if ((x(t.virtual, { from: w, to: y, offset: _, slidesGrid: t.slidesGrid }), p === w && u === y && !e)) return t.slidesGrid !== h && _ !== f && t.slides.css(m, _ + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal)
                    return (
                        t.params.virtual.renderExternal.call(t, {
                            offset: _,
                            from: w,
                            to: y,
                            slides: (function () {
                                for (var e = [], t = w; t <= y; t += 1) e.push(c[t]);
                                return e;
                            })(),
                        }),
                        void (t.params.virtual.renderExternalUpdate && E())
                    );
                var C = [],
                    T = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else for (var S = p; S <= u; S += 1) (S < w || S > y) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var z = 0; z < c.length; z += 1) z >= w && z <= y && (void 0 === u || e ? T.push(z) : (z > u && T.push(z), z < p && C.push(z)));
                T.forEach(function (e) {
                    t.$wrapperEl.append(v(c[e], e));
                }),
                    C.sort(function (e, t) {
                        return t - e;
                    }).forEach(function (e) {
                        t.$wrapperEl.prepend(v(c[e], e));
                    }),
                    t.$wrapperEl.children(".swiper-slide").css(m, _ + "px"),
                    E();
            },
            renderSlide: function (e, t) {
                var a = this,
                    i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? v(i.renderSlide.call(a, e, t)) : v('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
            },
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0);
            },
            prependSlide: function (e) {
                var t = this,
                    a = t.activeIndex,
                    i = a + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
                    (i = a + e.length), (s = e.length);
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    var n = t.virtual.cache,
                        l = {};
                    Object.keys(n).forEach(function (e) {
                        var t = n[e],
                            a = t.attr("data-swiper-slide-index");
                        a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1), (l[parseInt(e, 10) + s] = t);
                    }),
                        (t.virtual.cache = l);
                }
                t.virtual.update(!0), t.slideTo(i, 0);
            },
            removeSlide: function (e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e)) for (var a = e.length - 1; a >= 0; a -= 1) this.virtual.slides.splice(e[a], 1), this.params.virtual.cache && delete this.virtual.cache[e[a]], e[a] < t && (t -= 1), (t = Math.max(t, 0));
                    else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), (t = Math.max(t, 0));
                    this.virtual.update(!0), this.slideTo(t, 0);
                }
            },
            removeAllSlides: function () {
                var e = this;
                (e.virtual.slides = []), e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
            },
        },
        R = {
            handle: function (e) {
                if (this.enabled) {
                    var t = n(),
                        a = s(),
                        i = this.rtlTranslate,
                        r = e;
                    r.originalEvent && (r = r.originalEvent);
                    var l = r.keyCode || r.charCode,
                        o = this.params.keyboard.pageUpDown,
                        d = o && 33 === l,
                        p = o && 34 === l,
                        u = 37 === l,
                        c = 39 === l,
                        h = 38 === l,
                        v = 40 === l;
                    if ((!this.allowSlideNext && ((this.isHorizontal() && c) || (this.isVertical() && v) || p)) || (!this.allowSlidePrev && ((this.isHorizontal() && u) || (this.isVertical() && h) || d))) return !1;
                    if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || (a.activeElement && a.activeElement.nodeName && ("input" === a.activeElement.nodeName.toLowerCase() || "textarea" === a.activeElement.nodeName.toLowerCase())))) {
                        if (this.params.keyboard.onlyInViewport && (d || p || u || c || h || v)) {
                            var f = !1;
                            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var m = this.$el,
                                g = m[0].clientWidth,
                                $ = m[0].clientHeight,
                                b = t.innerWidth,
                                w = t.innerHeight,
                                y = this.$el.offset();
                            i && (y.left -= this.$el[0].scrollLeft);
                            for (
                                var _ = [
                                        [y.left, y.top],
                                        [y.left + g, y.top],
                                        [y.left, y.top + $],
                                        [y.left + g, y.top + $],
                                    ],
                                    E = 0;
                                E < _.length;
                                E += 1
                            ) {
                                var x = _[E];
                                if (x[0] >= 0 && x[0] <= b && x[1] >= 0 && x[1] <= w) {
                                    if (0 === x[0] && 0 === x[1]) continue;
                                    f = !0;
                                }
                            }
                            if (!f) return;
                        }
                        this.isHorizontal()
                            ? ((d || p || u || c) && (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)), (((p || c) && !i) || ((d || u) && i)) && this.slideNext(), (((d || u) && !i) || ((p || c) && i)) && this.slidePrev())
                            : ((d || p || h || v) && (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)), (p || v) && this.slideNext(), (d || h) && this.slidePrev()),
                            this.emit("keyPress", l);
                    }
                }
            },
            enable: function () {
                var e = this,
                    t = s();
                e.keyboard.enabled || (v(t).on("keydown", e.keyboard.handle), (e.keyboard.enabled = !0));
            },
            disable: function () {
                var e = this,
                    t = s();
                e.keyboard.enabled && (v(t).off("keydown", e.keyboard.handle), (e.keyboard.enabled = !1));
            },
        },
        V = {
            lastScrollTime: w(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function () {
                return n().navigator.userAgent.indexOf("firefox") > -1
                    ? "DOMMouseScroll"
                    : !(function () {
                          var e = s(),
                              t = "onwheel",
                              a = t in e;
                          if (!a) {
                              var i = e.createElement("div");
                              i.setAttribute(t, "return;"), (a = "function" == typeof i.onwheel);
                          }
                          return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a;
                      })()
                    ? "mousewheel"
                    : "wheel";
            },
            normalize: function (e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return (
                    "detail" in e && (a = e.detail),
                    "wheelDelta" in e && (a = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
                    (i = 10 * t),
                    (s = 10 * a),
                    "deltaY" in e && (s = e.deltaY),
                    "deltaX" in e && (i = e.deltaX),
                    e.shiftKey && !i && ((i = s), (s = 0)),
                    (i || s) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (s *= 40)) : ((i *= 800), (s *= 800))),
                    i && !t && (t = i < 1 ? -1 : 1),
                    s && !a && (a = s < 1 ? -1 : 1),
                    { spinX: t, spinY: a, pixelX: i, pixelY: s }
                );
            },
            handleMouseEnter: function () {
                this.enabled && (this.mouseEntered = !0);
            },
            handleMouseLeave: function () {
                this.enabled && (this.mouseEntered = !1);
            },
            handle: function (e) {
                var t = e,
                    a = this;
                if (a.enabled) {
                    var i = a.params.mousewheel;
                    a.params.cssMode && t.preventDefault();
                    var s = a.$el;
                    if (("container" !== a.params.mousewheel.eventsTarget && (s = v(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges)) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    var r = 0,
                        n = a.rtlTranslate ? -1 : 1,
                        l = V.normalize(t);
                    if (i.forceToAxis) {
                        if (a.isHorizontal()) {
                            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                            r = -l.pixelX * n;
                        } else {
                            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                            r = -l.pixelY;
                        }
                    } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
                    if (0 === r) return !0;
                    i.invert && (r = -r);
                    var o = a.getTranslate() + r * i.sensitivity;
                    if (
                        (o >= a.minTranslate() && (o = a.minTranslate()),
                        o <= a.maxTranslate() && (o = a.maxTranslate()),
                        (a.params.loop || !(o === a.minTranslate() || o === a.maxTranslate())) && a.params.nested && t.stopPropagation(),
                        a.params.freeMode)
                    ) {
                        var d = { time: w(), delta: Math.abs(r), direction: Math.sign(r) },
                            p = a.mousewheel.lastEventBeforeSnap,
                            u = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;
                        if (!u) {
                            (a.mousewheel.lastEventBeforeSnap = void 0), a.params.loop && a.loopFix();
                            var c = a.getTranslate() + r * i.sensitivity,
                                h = a.isBeginning,
                                f = a.isEnd;
                            if (
                                (c >= a.minTranslate() && (c = a.minTranslate()),
                                c <= a.maxTranslate() && (c = a.maxTranslate()),
                                a.setTransition(0),
                                a.setTranslate(c),
                                a.updateProgress(),
                                a.updateActiveIndex(),
                                a.updateSlidesClasses(),
                                ((!h && a.isBeginning) || (!f && a.isEnd)) && a.updateSlidesClasses(),
                                a.params.freeModeSticky)
                            ) {
                                clearTimeout(a.mousewheel.timeout), (a.mousewheel.timeout = void 0);
                                var m = a.mousewheel.recentWheelEvents;
                                m.length >= 15 && m.shift();
                                var g = m.length ? m[m.length - 1] : void 0,
                                    $ = m[0];
                                if ((m.push(d), g && (d.delta > g.delta || d.direction !== g.direction))) m.splice(0);
                                else if (m.length >= 15 && d.time - $.time < 500 && $.delta - d.delta >= 1 && d.delta <= 6) {
                                    var y = r > 0 ? 0.8 : 0.2;
                                    (a.mousewheel.lastEventBeforeSnap = d),
                                        m.splice(0),
                                        (a.mousewheel.timeout = b(function () {
                                            a.slideToClosest(a.params.speed, !0, void 0, y);
                                        }, 0));
                                }
                                a.mousewheel.timeout ||
                                    (a.mousewheel.timeout = b(function () {
                                        (a.mousewheel.lastEventBeforeSnap = d), m.splice(0), a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                                    }, 500));
                            }
                            if ((u || a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), c === a.minTranslate() || c === a.maxTranslate())) return !0;
                        }
                    } else {
                        var _ = { time: w(), delta: Math.abs(r), direction: Math.sign(r), raw: e },
                            E = a.mousewheel.recentWheelEvents;
                        E.length >= 2 && E.shift();
                        var x = E.length ? E[E.length - 1] : void 0;
                        if ((E.push(_), x ? (_.direction !== x.direction || _.delta > x.delta || _.time > x.time + 150) && a.mousewheel.animateSlider(_) : a.mousewheel.animateSlider(_), a.mousewheel.releaseScroll(_))) return !0;
                    }
                    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
                }
            },
            animateSlider: function (e) {
                var t = this,
                    a = n();
                return (
                    !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) &&
                    !(this.params.mousewheel.thresholdTime && w() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) &&
                    ((e.delta >= 6 && w() - t.mousewheel.lastScrollTime < 60) ||
                        (e.direction < 0 ? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)),
                        (t.mousewheel.lastScrollTime = new a.Date().getTime()),
                        !1))
                );
            },
            releaseScroll: function (e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                return !1;
            },
            enable: function () {
                var e = this,
                    t = V.event();
                if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
                if (!t || e.mousewheel.enabled) return !1;
                var a = e.$el;
                return (
                    "container" !== e.params.mousewheel.eventsTarget && (a = v(e.params.mousewheel.eventsTarget)),
                    a.on("mouseenter", e.mousewheel.handleMouseEnter),
                    a.on("mouseleave", e.mousewheel.handleMouseLeave),
                    a.on(t, e.mousewheel.handle),
                    (e.mousewheel.enabled = !0),
                    !0
                );
            },
            disable: function () {
                var e = this,
                    t = V.event();
                if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
                if (!t || !e.mousewheel.enabled) return !1;
                var a = e.$el;
                return "container" !== e.params.mousewheel.eventsTarget && (a = v(e.params.mousewheel.eventsTarget)), a.off(t, e.mousewheel.handle), (e.mousewheel.enabled = !1), !0;
            },
        },
        W = {
            toggleEl: function (e, t) {
                e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
            },
            update: function () {
                var e = this.params.navigation,
                    t = this.navigation.toggleEl;
                if (!this.params.loop) {
                    var a = this.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && s.length > 0 && (t(s, !!this.isBeginning), this.params.watchOverflow && this.enabled && s[this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                        i && i.length > 0 && (t(i, !!this.isEnd), this.params.watchOverflow && this.enabled && i[this.isLocked ? "addClass" : "removeClass"](e.lockClass));
                }
            },
            onPrevClick: function (e) {
                e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
            },
            onNextClick: function (e) {
                e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
            },
            init: function () {
                var e,
                    t,
                    a = this,
                    i = a.params.navigation;
                (a.params.navigation = S(a.$el, a.params.navigation, a.params.createElements, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })),
                    (i.nextEl || i.prevEl) &&
                        (i.nextEl && ((e = v(i.nextEl)), a.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))),
                        i.prevEl && ((t = v(i.prevEl)), a.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))),
                        e && e.length > 0 && e.on("click", a.navigation.onNextClick),
                        t && t.length > 0 && t.on("click", a.navigation.onPrevClick),
                        x(a.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }),
                        a.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
            },
            destroy: function () {
                var e = this.navigation,
                    t = e.$nextEl,
                    a = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)),
                    a && a.length && (a.off("click", this.navigation.onPrevClick), a.removeClass(this.params.navigation.disabledClass));
            },
        },
        q = {
            update: function () {
                var e = this,
                    t = e.rtl,
                    a = e.params.pagination;
                if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i,
                        s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el,
                        n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (
                        (e.params.loop
                            ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides),
                              i > n - 1 && (i -= n),
                              i < 0 && "bullets" !== e.params.paginationType && (i = n + i))
                            : (i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
                        "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0)
                    ) {
                        var l,
                            o,
                            d,
                            p = e.pagination.bullets;
                        if (
                            (a.dynamicBullets &&
                                ((e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"),
                                a.dynamicMainBullets > 1 &&
                                    void 0 !== e.previousIndex &&
                                    ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                                    e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? (e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1) : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                                (d = ((o = (l = i - e.pagination.dynamicBulletIndex) + (Math.min(p.length, a.dynamicMainBullets) - 1)) + l) / 2)),
                            p.removeClass(
                                a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"
                            ),
                            r.length > 1)
                        )
                            p.each(function (e) {
                                var t = v(e),
                                    s = t.index();
                                s === i && t.addClass(a.bulletActiveClass),
                                    a.dynamicBullets &&
                                        (s >= l && s <= o && t.addClass(a.bulletActiveClass + "-main"),
                                        s === l &&
                                            t
                                                .prev()
                                                .addClass(a.bulletActiveClass + "-prev")
                                                .prev()
                                                .addClass(a.bulletActiveClass + "-prev-prev"),
                                        s === o &&
                                            t
                                                .next()
                                                .addClass(a.bulletActiveClass + "-next")
                                                .next()
                                                .addClass(a.bulletActiveClass + "-next-next"));
                            });
                        else {
                            var u = p.eq(i),
                                c = u.index();
                            if ((u.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                                for (var h = p.eq(l), f = p.eq(o), m = l; m <= o; m += 1) p.eq(m).addClass(a.bulletActiveClass + "-main");
                                if (e.params.loop) {
                                    if (c >= p.length - a.dynamicMainBullets) {
                                        for (var g = a.dynamicMainBullets; g >= 0; g -= 1) p.eq(p.length - g).addClass(a.bulletActiveClass + "-main");
                                        p.eq(p.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev");
                                    } else
                                        h
                                            .prev()
                                            .addClass(a.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(a.bulletActiveClass + "-prev-prev"),
                                            f
                                                .next()
                                                .addClass(a.bulletActiveClass + "-next")
                                                .next()
                                                .addClass(a.bulletActiveClass + "-next-next");
                                } else
                                    h
                                        .prev()
                                        .addClass(a.bulletActiveClass + "-prev")
                                        .prev()
                                        .addClass(a.bulletActiveClass + "-prev-prev"),
                                        f
                                            .next()
                                            .addClass(a.bulletActiveClass + "-next")
                                            .next()
                                            .addClass(a.bulletActiveClass + "-next-next");
                            }
                        }
                        if (a.dynamicBullets) {
                            var $ = Math.min(p.length, a.dynamicMainBullets + 4),
                                b = (e.pagination.bulletSize * $ - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize;
                            p.css(e.isHorizontal() ? (t ? "right" : "left") : "top", b + "px");
                        }
                    }
                    if (("fraction" === a.type && (r.find(T(a.currentClass)).text(a.formatFractionCurrent(i + 1)), r.find(T(a.totalClass)).text(a.formatFractionTotal(n))), "progressbar" === a.type)) {
                        w = a.progressbarOpposite ? (e.isHorizontal() ? "vertical" : "horizontal") : e.isHorizontal() ? "horizontal" : "vertical";
                        var w,
                            y = (i + 1) / n,
                            _ = 1,
                            E = 1;
                        "horizontal" === w ? (_ = y) : (E = y),
                            r
                                .find(T(a.progressbarFillClass))
                                .transform("translate3d(0,0,0) scaleX(" + _ + ") scaleY(" + E + ")")
                                .transition(e.params.speed);
                    }
                    "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, i + 1, n)), e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]),
                        e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](a.lockClass);
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && !e.params.loop && r > a && (r = a);
                        for (var n = 0; n < r; n += 1) t.renderBullet ? (s += t.renderBullet.call(e, n, t.bulletClass)) : (s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
                        i.html(s), (e.pagination.bullets = i.find(T(t.bulletClass)));
                    }
                    "fraction" === t.type && ((s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), i.html(s)),
                        "progressbar" === t.type && ((s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), i.html(s)),
                        "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
                }
            },
            init: function () {
                var e = this;
                e.params.pagination = S(e.$el, e.params.pagination, e.params.createElements, { el: "swiper-pagination" });
                var t = e.params.pagination;
                if (t.el) {
                    var a = v(t.el);
                    0 !== a.length &&
                        (e.params.uniqueNavElements && "string" == typeof t.el && a.length > 1 && (a = e.$el.find(t.el)),
                        "bullets" === t.type && t.clickable && a.addClass(t.clickableClass),
                        a.addClass(t.modifierClass + t.type),
                        "bullets" === t.type && t.dynamicBullets && (a.addClass("" + t.modifierClass + t.type + "-dynamic"), (e.pagination.dynamicBulletIndex = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                        "progressbar" === t.type && t.progressbarOpposite && a.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                            a.on("click", T(t.bulletClass), function (t) {
                                t.preventDefault();
                                var a = v(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (a += e.loopedSlides), e.slideTo(a);
                            }),
                        x(e.pagination, { $el: a, el: a[0] }),
                        e.enabled || a.addClass(t.lockClass));
                }
            },
            destroy: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", T(e.bulletClass));
                }
            },
        },
        F = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtlTranslate,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        l = t.$el,
                        o = e.params.scrollbar,
                        d = s,
                        p = (r - s) * i;
                    a ? ((p = -p) > 0 ? ((d = s - p), (p = 0)) : -p + s > r && (d = r + p)) : p < 0 ? ((d = s + p), (p = 0)) : p + s > r && (d = r - p),
                        e.isHorizontal() ? (n.transform("translate3d(" + p + "px, 0, 0)"), (n[0].style.width = d + "px")) : (n.transform("translate3d(0px, " + p + "px, 0)"), (n[0].style.height = d + "px")),
                        o.hide &&
                            (clearTimeout(e.scrollbar.timeout),
                            (l[0].style.opacity = 1),
                            (e.scrollbar.timeout = setTimeout(function () {
                                (l[0].style.opacity = 0), l.transition(400);
                            }, 1e3)));
                }
            },
            setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
            },
            updateSize: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        a = e.$el;
                    (t[0].style.width = ""), (t[0].style.height = "");
                    var i,
                        s = this.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        n = r * (s / this.size);
                    (i = "auto" === this.params.scrollbar.dragSize ? s * r : parseInt(this.params.scrollbar.dragSize, 10)),
                        this.isHorizontal() ? (t[0].style.width = i + "px") : (t[0].style.height = i + "px"),
                        (a[0].style.display = r >= 1 ? "none" : ""),
                        this.params.scrollbar.hide && (a[0].style.opacity = 0),
                        x(e, { trackSize: s, divider: r, moveDivider: n, dragSize: i }),
                        this.params.watchOverflow && this.enabled && e.$el[this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
                }
            },
            getPointerPosition: function (e) {
                return this.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX) : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
            },
            setDragPosition: function (e) {
                var t,
                    a = this.scrollbar,
                    i = this.rtlTranslate,
                    s = a.$el,
                    r = a.dragSize,
                    n = a.trackSize,
                    l = a.dragStartPos;
                (t = Math.max(Math.min((t = (a.getPointerPosition(e) - s.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r)), 1), 0)), i && (t = 1 - t);
                var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
            },
            onDragStart: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                (t.scrollbar.isTouched = !0),
                    (t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null),
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    n.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(t.scrollbar.dragTimeout),
                    r.transition(0),
                    a.hide && r.css("opacity", 1),
                    t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
                    t.emit("scrollbarDragStart", e);
            },
            onDragMove: function (e) {
                var t = this.scrollbar,
                    a = this.$wrapperEl,
                    i = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e));
            },
            onDragEnd: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el;
                t.scrollbar.isTouched &&
                    ((t.scrollbar.isTouched = !1),
                    t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
                    a.hide &&
                        (clearTimeout(t.scrollbar.dragTimeout),
                        (t.scrollbar.dragTimeout = b(function () {
                            r.css("opacity", 0), r.transition(400);
                        }, 1e3))),
                    t.emit("scrollbarDragEnd", e),
                    a.snapOnRelease && t.slideToClosest());
            },
            enableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var e = s(),
                        t = this.scrollbar,
                        a = this.touchEventsTouch,
                        i = this.touchEventsDesktop,
                        r = this.params,
                        n = this.support,
                        l = t.$el[0],
                        o = !(!n.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                        d = !(!n.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                    l &&
                        (n.touch
                            ? (l.addEventListener(a.start, this.scrollbar.onDragStart, o), l.addEventListener(a.move, this.scrollbar.onDragMove, o), l.addEventListener(a.end, this.scrollbar.onDragEnd, d))
                            : (l.addEventListener(i.start, this.scrollbar.onDragStart, o), e.addEventListener(i.move, this.scrollbar.onDragMove, o), e.addEventListener(i.end, this.scrollbar.onDragEnd, d)));
                }
            },
            disableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var e = s(),
                        t = this.scrollbar,
                        a = this.touchEventsTouch,
                        i = this.touchEventsDesktop,
                        r = this.params,
                        n = this.support,
                        l = t.$el[0],
                        o = !(!n.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                        d = !(!n.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                    l &&
                        (n.touch
                            ? (l.removeEventListener(a.start, this.scrollbar.onDragStart, o), l.removeEventListener(a.move, this.scrollbar.onDragMove, o), l.removeEventListener(a.end, this.scrollbar.onDragEnd, d))
                            : (l.removeEventListener(i.start, this.scrollbar.onDragStart, o), e.removeEventListener(i.move, this.scrollbar.onDragMove, o), e.removeEventListener(i.end, this.scrollbar.onDragEnd, d)));
                }
            },
            init: function () {
                var e = this,
                    t = e.scrollbar,
                    a = e.$el;
                e.params.scrollbar = S(a, e.params.scrollbar, e.params.createElements, { el: "swiper-scrollbar" });
                var i = e.params.scrollbar;
                if (i.el) {
                    var s = v(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === a.find(i.el).length && (s = a.find(i.el));
                    var r = s.find("." + e.params.scrollbar.dragClass);
                    0 === r.length && ((r = v('<div class="' + e.params.scrollbar.dragClass + '"></div>')), s.append(r)),
                        x(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
                        i.draggable && t.enableDraggable(),
                        s && s[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable();
            },
        },
        j = {
            setTransform: function (e, t) {
                var a = this.rtl,
                    i = v(e),
                    s = a ? -1 : 1,
                    r = i.attr("data-swiper-parallax") || "0",
                    n = i.attr("data-swiper-parallax-x"),
                    l = i.attr("data-swiper-parallax-y"),
                    o = i.attr("data-swiper-parallax-scale"),
                    d = i.attr("data-swiper-parallax-opacity");
                n || l ? ((n = n || "0"), (l = l || "0")) : this.isHorizontal() ? ((n = r), (l = "0")) : ((l = r), (n = "0")),
                    (n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * s + "%" : n * t * s + "px"),
                    (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
                    null != d && (i[0].style.opacity = d - (d - 1) * (1 - Math.abs(t))),
                    null == o ? i.transform("translate3d(" + n + ", " + l + ", 0px)") : i.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + (o - (o - 1) * (1 - Math.abs(t))) + ")");
            },
            setTranslate: function () {
                var e = this,
                    t = e.$el,
                    a = e.slides,
                    i = e.progress,
                    s = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
                    e.parallax.setTransform(t, i);
                }),
                    a.each(function (t, a) {
                        var r = t.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(a / 2) - i * (s.length - 1)),
                            (r = Math.min(Math.max(r, -1), 1)),
                            v(t)
                                .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                .each(function (t) {
                                    e.parallax.setTransform(t, r);
                                });
                    });
            },
            setTransition: function (e) {
                void 0 === e && (e = this.params.speed),
                    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
                        var a = v(t),
                            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (i = 0), a.transition(i);
                    });
            },
        },
        U = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t,
                    a = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY;
                return Math.sqrt(Math.pow(e.targetTouches[1].pageX - a, 2) + Math.pow(e.targetTouches[1].pageY - i, 2));
            },
            onGestureStart: function (e) {
                var t = this,
                    a = t.support,
                    i = t.params.zoom,
                    s = t.zoom,
                    r = s.gesture;
                if (((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !a.gestures)) {
                    if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                    (s.fakeGestureTouched = !0), (r.scaleStart = U.getDistanceBetweenTouches(e));
                }
                (r.$slideEl && r.$slideEl.length) ||
                ((r.$slideEl = v(e.target).closest("." + t.params.slideClass)),
                0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
                (r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
                (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                0 !== r.$imageWrapEl.length)
                    ? (r.$imageEl && r.$imageEl.transition(0), (t.zoom.isScaling = !0))
                    : (r.$imageEl = void 0);
            },
            onGestureChange: function (e) {
                var t = this.support,
                    a = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!t.gestures) {
                    if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                    (i.fakeGestureMoved = !0), (s.scaleMove = U.getDistanceBetweenTouches(e));
                }
                s.$imageEl && 0 !== s.$imageEl.length
                    ? (t.gestures ? (i.scale = e.scale * i.currentScale) : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
                      i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
                      i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, 0.5)),
                      s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                    : "gesturechange" === e.type && i.onGestureStart(e);
            },
            onGestureEnd: function (e) {
                var t = this.device,
                    a = this.support,
                    i = this.params.zoom,
                    s = this.zoom,
                    r = s.gesture;
                if (!a.gestures) {
                    if (!s.fakeGestureTouched || !s.fakeGestureMoved || "touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !t.android)) return;
                    (s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1);
                }
                r.$imageEl &&
                    0 !== r.$imageEl.length &&
                    ((s.scale = Math.max(Math.min(s.scale, r.maxRatio), i.minRatio)),
                    r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + s.scale + ")"),
                    (s.currentScale = s.scale),
                    (s.isScaling = !1),
                    1 === s.scale && (r.$slideEl = void 0));
            },
            onTouchStart: function (e) {
                var t = this.device,
                    a = this.zoom,
                    i = a.gesture,
                    s = a.image;
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    (s.isTouched ||
                        (t.android && e.cancelable && e.preventDefault(),
                        (s.isTouched = !0),
                        (s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
            },
            onTouchMove: function (e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && ((t.allowClick = !1), s.isTouched && i.$slideEl)) {
                    s.isMoved ||
                        ((s.width = i.$imageEl[0].offsetWidth),
                        (s.height = i.$imageEl[0].offsetHeight),
                        (s.startX = y(i.$imageWrapEl[0], "x") || 0),
                        (s.startY = y(i.$imageWrapEl[0], "y") || 0),
                        (i.slideWidth = i.$slideEl[0].offsetWidth),
                        (i.slideHeight = i.$slideEl[0].offsetHeight),
                        i.$imageWrapEl.transition(0));
                    var n = s.width * a.scale,
                        l = s.height * a.scale;
                    if (!(n < i.slideWidth && l < i.slideHeight)) {
                        if (
                            ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                            (s.maxX = -s.minX),
                            (s.minY = Math.min(i.slideHeight / 2 - l / 2, 0)),
                            (s.maxY = -s.minY),
                            (s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                            !s.isMoved &&
                                !a.isScaling &&
                                ((t.isHorizontal() && ((Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x) || (Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))) ||
                                    (!t.isHorizontal() && ((Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y) || (Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)))))
                        )
                            return void (s.isTouched = !1);
                        e.cancelable && e.preventDefault(),
                            e.stopPropagation(),
                            (s.isMoved = !0),
                            (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                            (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                            s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                            s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                            s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                            s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                            r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                            r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                            r.prevTime || (r.prevTime = Date.now()),
                            (r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2),
                            (r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2),
                            2 > Math.abs(s.touchesCurrent.x - r.prevPositionX) && (r.x = 0),
                            2 > Math.abs(s.touchesCurrent.y - r.prevPositionY) && (r.y = 0),
                            (r.prevPositionX = s.touchesCurrent.x),
                            (r.prevPositionY = s.touchesCurrent.y),
                            (r.prevTime = Date.now()),
                            i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return (a.isTouched = !1), void (a.isMoved = !1);
                    (a.isTouched = !1), (a.isMoved = !1);
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        l = a.currentX + n,
                        o = i.y * r,
                        d = a.currentY + o;
                    0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    (a.currentX = l), (a.currentY = d);
                    var u = a.width * e.scale,
                        c = a.height * e.scale;
                    (a.minX = Math.min(t.slideWidth / 2 - u / 2, 0)),
                        (a.maxX = -a.minX),
                        (a.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
                        (a.maxY = -a.minY),
                        (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
                        (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
                        t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
                }
            },
            onTransitionEnd: function () {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl &&
                    this.previousIndex !== this.activeIndex &&
                    (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                    t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
                    (e.scale = 1),
                    (e.currentScale = 1),
                    (t.$slideEl = void 0),
                    (t.$imageEl = void 0),
                    (t.$imageWrapEl = void 0));
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function (e) {
                var t,
                    a,
                    i,
                    s,
                    r,
                    l,
                    o,
                    d,
                    p,
                    u,
                    c,
                    h,
                    f,
                    m,
                    g,
                    $,
                    b = n(),
                    w = this.zoom,
                    y = this.params.zoom,
                    _ = w.gesture,
                    E = w.image;
                _.$slideEl ||
                    (e && e.target && (_.$slideEl = v(e.target).closest("." + this.params.slideClass)),
                    _.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? (_.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass)) : (_.$slideEl = this.slides.eq(this.activeIndex))),
                    (_.$imageEl = _.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                    (_.$imageWrapEl = _.$imageEl.parent("." + y.containerClass))),
                    _.$imageEl &&
                        0 !== _.$imageEl.length &&
                        _.$imageWrapEl &&
                        0 !== _.$imageWrapEl.length &&
                        (_.$slideEl.addClass("" + y.zoomedSlideClass),
                        void 0 === E.touchesStart.x && e
                            ? ((t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                            : ((t = E.touchesStart.x), (a = E.touchesStart.y)),
                        (w.scale = _.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio),
                        (w.currentScale = _.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio),
                        e
                            ? ((g = _.$slideEl[0].offsetWidth),
                              ($ = _.$slideEl[0].offsetHeight),
                              (i = _.$slideEl.offset().left + b.scrollX + g / 2 - t),
                              (s = _.$slideEl.offset().top + b.scrollY + $ / 2 - a),
                              (o = _.$imageEl[0].offsetWidth),
                              (d = _.$imageEl[0].offsetHeight),
                              (p = o * w.scale),
                              (u = d * w.scale),
                              (f = -(c = Math.min(g / 2 - p / 2, 0))),
                              (m = -(h = Math.min($ / 2 - u / 2, 0))),
                              (r = i * w.scale) < c && (r = c),
                              r > f && (r = f),
                              (l = s * w.scale) < h && (l = h),
                              l > m && (l = m))
                            : ((r = 0), (l = 0)),
                        _.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + l + "px,0)"),
                        _.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + w.scale + ")"));
            },
            out: function () {
                var e = this.zoom,
                    t = this.params.zoom,
                    a = e.gesture;
                a.$slideEl ||
                    (this.params.virtual && this.params.virtual.enabled && this.virtual ? (a.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass)) : (a.$slideEl = this.slides.eq(this.activeIndex)),
                    (a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                    (a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass))),
                    a.$imageEl &&
                        0 !== a.$imageEl.length &&
                        a.$imageWrapEl &&
                        0 !== a.$imageWrapEl.length &&
                        ((e.scale = 1),
                        (e.currentScale = 1),
                        a.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        a.$slideEl.removeClass("" + t.zoomedSlideClass),
                        (a.$slideEl = void 0));
            },
            toggleGestures: function (e) {
                var t = this.zoom,
                    a = t.slideSelector,
                    i = t.passiveListener;
                this.$wrapperEl[e]("gesturestart", a, t.onGestureStart, i), this.$wrapperEl[e]("gesturechange", a, t.onGestureChange, i), this.$wrapperEl[e]("gestureend", a, t.onGestureEnd, i);
            },
            enableGestures: function () {
                this.zoom.gesturesEnabled || ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
            },
            disableGestures: function () {
                this.zoom.gesturesEnabled && ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
            },
            enable: function () {
                var e = this,
                    t = e.support,
                    a = e.zoom;
                if (!a.enabled) {
                    a.enabled = !0;
                    var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 },
                        s = !t.passiveListener || { passive: !1, capture: !0 },
                        r = "." + e.params.slideClass;
                    (e.zoom.passiveListener = i),
                        (e.zoom.slideSelector = r),
                        t.gestures
                            ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i))
                            : "touchstart" === e.touchEvents.start &&
                              (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i),
                              e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s),
                              e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i),
                              e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)),
                        e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, a.onTouchMove, s);
                }
            },
            disable: function () {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    var a = e.support;
                    e.zoom.enabled = !1;
                    var i = !("touchstart" !== e.touchEvents.start || !a.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 },
                        s = !a.passiveListener || { passive: !1, capture: !0 },
                        r = "." + e.params.slideClass;
                    a.gestures
                        ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i))
                        : "touchstart" === e.touchEvents.start &&
                          (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i),
                          e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s),
                          e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i),
                          e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)),
                        e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, s);
                }
            },
        },
        K = {
            loadInSlide: function (e, t) {
                void 0 === t && (t = !0);
                var a = this,
                    i = a.params.lazy;
                if (void 0 !== e && 0 !== a.slides.length) {
                    var s = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : a.slides.eq(e),
                        r = s.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
                    !s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || r.push(s[0]),
                        0 !== r.length &&
                            r.each(function (e) {
                                var r = v(e);
                                r.addClass(i.loadingClass);
                                var n = r.attr("data-background"),
                                    l = r.attr("data-src"),
                                    o = r.attr("data-srcset"),
                                    d = r.attr("data-sizes"),
                                    p = r.parent("picture");
                                a.loadImage(r[0], l || n, o, d, !1, function () {
                                    if (null != a && a && (!a || a.params) && !a.destroyed) {
                                        if (
                                            (n
                                                ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background"))
                                                : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")),
                                                  d && (r.attr("sizes", d), r.removeAttr("data-sizes")),
                                                  p.length &&
                                                      p.children("source").each(function (e) {
                                                          var t = v(e);
                                                          t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                                                      }),
                                                  l && (r.attr("src", l), r.removeAttr("data-src"))),
                                            r.addClass(i.loadedClass).removeClass(i.loadingClass),
                                            s.find("." + i.preloaderClass).remove(),
                                            a.params.loop && t)
                                        ) {
                                            var e = s.attr("data-swiper-slide-index");
                                            if (s.hasClass(a.params.slideDuplicateClass)) {
                                                var u = a.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + a.params.slideDuplicateClass + ")");
                                                a.lazy.loadInSlide(u.index(), !1);
                                            } else {
                                                var c = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                a.lazy.loadInSlide(c.index(), !1);
                                            }
                                        }
                                        a.emit("lazyImageReady", s[0], r[0]), a.params.autoHeight && a.updateAutoHeight();
                                    }
                                }),
                                    a.emit("lazyImageLoad", s[0], r[0]);
                            });
                }
            },
            load: function () {
                var e = this,
                    t = e.$wrapperEl,
                    a = e.params,
                    i = e.slides,
                    s = e.activeIndex,
                    r = e.virtual && a.virtual.enabled,
                    n = a.lazy,
                    l = a.slidesPerView;
                function o(e) {
                    if (r) {
                        if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                    } else if (i[e]) return !0;
                    return !1;
                }
                function d(e) {
                    return r ? v(e).attr("data-swiper-slide-index") : v(e).index();
                }
                if (("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility))
                    t.children("." + a.slideVisibleClass).each(function (t) {
                        var a = r ? v(t).attr("data-swiper-slide-index") : v(t).index();
                        e.lazy.loadInSlide(a);
                    });
                else if (l > 1) for (var p = s; p < s + l; p += 1) o(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(s);
                if (n.loadPrevNext) {
                    if (l > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
                        for (var u = n.loadPrevNextAmount, c = l, h = Math.min(s + c + Math.max(u, c), i.length), f = Math.max(s - Math.max(c, u), 0), m = s + l; m < h; m += 1) o(m) && e.lazy.loadInSlide(m);
                        for (var g = f; g < s; g += 1) o(g) && e.lazy.loadInSlide(g);
                    } else {
                        var $ = t.children("." + a.slideNextClass);
                        $.length > 0 && e.lazy.loadInSlide(d($));
                        var b = t.children("." + a.slidePrevClass);
                        b.length > 0 && e.lazy.loadInSlide(d(b));
                    }
                }
            },
            checkInViewOnLoad: function () {
                var e = n(),
                    t = this;
                if (t && !t.destroyed) {
                    var a = t.params.lazy.scrollingElement ? v(t.params.lazy.scrollingElement) : v(e),
                        i = a[0] === e,
                        s = i ? e.innerWidth : a[0].offsetWidth,
                        r = i ? e.innerHeight : a[0].offsetHeight,
                        l = t.$el.offset(),
                        o = !1;
                    t.rtlTranslate && (l.left -= t.$el[0].scrollLeft);
                    for (
                        var d = [
                                [l.left, l.top],
                                [l.left + t.width, l.top],
                                [l.left, l.top + t.height],
                                [l.left + t.width, l.top + t.height],
                            ],
                            p = 0;
                        p < d.length;
                        p += 1
                    ) {
                        var u = d[p];
                        if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
                            if (0 === u[0] && 0 === u[1]) continue;
                            o = !0;
                        }
                    }
                    var c = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
                    o ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad, c)) : t.lazy.scrollHandlerAttached || ((t.lazy.scrollHandlerAttached = !0), a.on("scroll", t.lazy.checkInViewOnLoad, c));
                }
            },
        },
        Z = {
            LinearSpline: function (e, t) {
                var a,
                    i,
                    s,
                    r,
                    n,
                    l = function (e, t) {
                        for (i = -1, a = e.length; a - i > 1; ) e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
                        return a;
                    };
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function (e) {
                        return e ? ((r = (n = l(this.x, e)) - 1), ((e - this.x[r]) * (this.y[n] - this.y[r])) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new Z.LinearSpline(t.slidesGrid, e.slidesGrid) : new Z.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate: function (e, t) {
                var a,
                    i,
                    s = this,
                    r = s.controller.control,
                    n = s.constructor;
                function l(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), (i = -s.controller.spline.interpolate(-t))),
                        (i && "container" !== s.params.controller.by) || ((a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate())), (i = (t - s.minTranslate()) * a + e.minTranslate())),
                        s.params.controller.inverse && (i = e.maxTranslate() - i),
                        e.updateProgress(i),
                        e.setTranslate(i, s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof n && l(r[o]);
                else r instanceof n && t !== r && l(r);
            },
            setTransition: function (e, t) {
                var a,
                    i = this,
                    s = i.constructor,
                    r = i.controller.control;
                function n(t) {
                    t.setTransition(e, i),
                        0 !== e &&
                            (t.transitionStart(),
                            t.params.autoHeight &&
                                b(function () {
                                    t.updateAutoHeight();
                                }),
                            t.$wrapperEl.transitionEnd(function () {
                                r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
                            }));
                }
                if (Array.isArray(r)) for (a = 0; a < r.length; a += 1) r[a] !== t && r[a] instanceof s && n(r[a]);
                else r instanceof s && t !== r && n(r);
            },
        },
        J = {
            getRandomNumber: function (e) {
                return (
                    void 0 === e && (e = 16),
                    "x".repeat(e).replace(/x/g, function () {
                        return Math.round(16 * Math.random()).toString(16);
                    })
                );
            },
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e;
            },
            makeElNotFocusable: function (e) {
                return e.attr("tabIndex", "-1"), e;
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e;
            },
            addElRoleDescription: function (e, t) {
                return e.attr("aria-roledescription", t), e;
            },
            addElControls: function (e, t) {
                return e.attr("aria-controls", t), e;
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e;
            },
            addElId: function (e, t) {
                return e.attr("id", t), e;
            },
            addElLive: function (e, t) {
                return e.attr("aria-live", t), e;
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e;
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e;
            },
            onEnterOrSpaceKey: function (e) {
                if (13 === e.keyCode || 32 === e.keyCode) {
                    var t = this.params.a11y,
                        a = v(e.target);
                    this.navigation &&
                        this.navigation.$nextEl &&
                        a.is(this.navigation.$nextEl) &&
                        ((this.isEnd && !this.params.loop) || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                        this.navigation &&
                            this.navigation.$prevEl &&
                            a.is(this.navigation.$prevEl) &&
                            ((this.isBeginning && !this.params.loop) || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                        this.pagination && a.is(T(this.params.pagination.bulletClass)) && a[0].click();
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation: function () {
                if (!this.params.loop && this.navigation) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        a = e.$prevEl;
                    a && a.length > 0 && (this.isBeginning ? (this.a11y.disableEl(a), this.a11y.makeElNotFocusable(a)) : (this.a11y.enableEl(a), this.a11y.makeElFocusable(a))),
                        t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
                }
            },
            updatePagination: function () {
                var e = this,
                    t = e.params.a11y;
                e.pagination &&
                    e.params.pagination.clickable &&
                    e.pagination.bullets &&
                    e.pagination.bullets.length &&
                    e.pagination.bullets.each(function (a) {
                        var i = v(a);
                        e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)));
                    });
            },
            init: function () {
                var e = this,
                    t = e.params.a11y;
                e.$el.append(e.a11y.liveRegion);
                var a = e.$el;
                t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
                var i = e.$wrapperEl,
                    s = i.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
                    r = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                e.a11y.addElId(i, s), e.a11y.addElLive(i, r), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(v(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(v(e.slides), t.slideRole);
                var n,
                    l,
                    o = e.params.loop
                        ? e.slides.filter(function (t) {
                              return !t.classList.contains(e.params.slideDuplicateClass);
                          }).length
                        : e.slides.length;
                e.slides.each(function (a, i) {
                    var s = v(a),
                        r = e.params.loop ? parseInt(s.attr("data-swiper-slide-index"), 10) : i,
                        n = t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, o);
                    e.a11y.addElLabel(s, n);
                }),
                    e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (l = e.navigation.$prevEl),
                    n && n.length && (e.a11y.makeElFocusable(n), "BUTTON" !== n[0].tagName && (e.a11y.addElRole(n, "button"), n.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(n, t.nextSlideMessage), e.a11y.addElControls(n, s)),
                    l && l.length && (e.a11y.makeElFocusable(l), "BUTTON" !== l[0].tagName && (e.a11y.addElRole(l, "button"), l.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(l, t.prevSlideMessage), e.a11y.addElControls(l, s)),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", T(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey);
            },
            destroy: function () {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                    this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                    e && e.off("keydown", this.a11y.onEnterOrSpaceKey),
                    t && t.off("keydown", this.a11y.onEnterOrSpaceKey),
                    this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", T(this.params.pagination.bulletClass), this.a11y.onEnterOrSpaceKey);
            },
        },
        Q = {
            init: function () {
                var e = this,
                    t = n();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
                    var a = e.history;
                    (a.initialized = !0),
                        (a.paths = Q.getPathValues(e.params.url)),
                        (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
                }
            },
            destroy: function () {
                var e = n();
                this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
            },
            setHistoryPopState: function () {
                var e = this;
                (e.history.paths = Q.getPathValues(e.params.url)), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
            },
            getPathValues: function (e) {
                var t = n(),
                    a = (e ? new URL(e.html) : t.location).pathname
                        .slice(1)
                        .split("https://html.themewant.com/")
                        .filter(function (e) {
                            return "" !== e;
                        }),
                    i = a.length;
                return { key: a[i - 2], value: a[i - 1] };
            },
            setHistory: function (e, t) {
                var a = n();
                if (this.history.initialized && this.params.history.enabled) {
                    i = this.params.url ? new URL(this.params.html) : a.location;
                    var i,
                        s = this.slides.eq(t),
                        r = Q.slugify(s.attr("data-history"));
                    if (this.params.history.root.length > 0) {
                        var l = this.params.history.root;
                        "/" === l[l.length - 1] && (l = l.slice(0, l.length - 1)), (r = l + "/" + e + "/" + r);
                    } else i.pathname.includes(e) || (r = e + "/" + r);
                    var o = a.history.state;
                    (o && o.value === r) || (this.params.history.replaceState ? a.history.replaceState({ value: r }, null, r) : a.history.pushState({ value: r }, null, r));
                }
            },
            slugify: function (e) {
                return e
                    .toString()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, "");
            },
            scrollToSlide: function (e, t, a) {
                if (t)
                    for (var i = 0, s = this.slides.length; i < s; i += 1) {
                        var r = this.slides.eq(i);
                        if (Q.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var n = r.index();
                            this.slideTo(n, e, a);
                        }
                    }
                else this.slideTo(0, e, a);
            },
        },
        ee = {
            onHashChange: function () {
                var e = s();
                this.emit("hashChange");
                var t = e.location.hash.replace("#", "");
                if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                    var a = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === a) return;
                    this.slideTo(a);
                }
            },
            setHash: function () {
                var e = n(),
                    t = s();
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) {
                    if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash")), this.emit("hashSet");
                    else {
                        var a = this.slides.eq(this.activeIndex),
                            i = a.attr("data-hash") || a.attr("data-history");
                        (t.location.hash = i || ""), this.emit("hashSet");
                    }
                }
            },
            init: function () {
                var e = this,
                    t = s(),
                    a = n();
                if (!(!e.params.hashNavigation.enabled || (e.params.history && e.params.history.enabled))) {
                    e.hashNavigation.initialized = !0;
                    var i = t.location.hash.replace("#", "");
                    if (i)
                        for (var r = 0, l = e.slides.length; r < l; r += 1) {
                            var o = e.slides.eq(r);
                            if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(e.params.slideDuplicateClass)) {
                                var d = o.index();
                                e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
                            }
                        }
                    e.params.hashNavigation.watchState && v(a).on("hashchange", e.hashNavigation.onHashChange);
                }
            },
            destroy: function () {
                var e = n();
                this.params.hashNavigation.watchState && v(e).off("hashchange", this.hashNavigation.onHashChange);
            },
        },
        et = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    clearTimeout(e.autoplay.timeout),
                    (e.autoplay.timeout = b(function () {
                        var t;
                        e.params.autoplay.reverseDirection
                            ? e.params.loop
                                ? (e.loopFix(), (t = e.slidePrev(e.params.speed, !0, !0)), e.emit("autoplay"))
                                : e.isBeginning
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : ((t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)), e.emit("autoplay"))
                                : ((t = e.slidePrev(e.params.speed, !0, !0)), e.emit("autoplay"))
                            : e.params.loop
                            ? (e.loopFix(), (t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay"))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : ((t = e.slideTo(0, e.params.speed, !0, !0)), e.emit("autoplay"))
                            : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
                            ((e.params.cssMode && e.autoplay.running) || !1 === t) && e.autoplay.run();
                    }, a));
            },
            start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && ((e.autoplay.running = !0), e.emit("autoplayStart"), e.autoplay.run(), !0);
            },
            stop: function () {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit("autoplayStop"), !0);
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running &&
                    (t.autoplay.paused ||
                        (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                        (t.autoplay.paused = !0),
                        0 !== e && t.params.autoplay.waitForTransition
                            ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
                                  t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd);
                              })
                            : ((t.autoplay.paused = !1), t.autoplay.run())));
            },
            onVisibilityChange: function () {
                var e = this,
                    t = s();
                "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), (e.autoplay.paused = !1));
            },
            onTransitionEnd: function (e) {
                var t = this;
                t &&
                    !t.destroyed &&
                    t.$wrapperEl &&
                    e.target === t.$wrapperEl[0] &&
                    (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
                        t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
                    }),
                    (t.autoplay.paused = !1),
                    t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
            },
            onMouseEnter: function () {
                var e = this;
                e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause(),
                    ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
                        e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
                    });
            },
            onMouseLeave: function () {
                var e = this;
                e.params.autoplay.disableOnInteraction || ((e.autoplay.paused = !1), e.autoplay.run());
            },
            attachMouseEvents: function () {
                this.params.autoplay.pauseOnMouseEnter && (this.$el.on("mouseenter", this.autoplay.onMouseEnter), this.$el.on("mouseleave", this.autoplay.onMouseLeave));
            },
            detachMouseEvents: function () {
                this.$el.off("mouseenter", this.autoplay.onMouseEnter), this.$el.off("mouseleave", this.autoplay.onMouseLeave);
            },
        },
        ea = {
            setTranslate: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var a = this.slides.eq(t),
                        i = -a[0].swiperSlideOffset;
                    this.params.virtualTranslate || (i -= this.translate);
                    var s = 0;
                    this.isHorizontal() || ((s = i), (i = 0));
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                    a.css({ opacity: r }).transform("translate3d(" + i + "px, " + s + "px, 0px)");
                }
            },
            setTransition: function (e) {
                var t = this,
                    a = t.slides,
                    i = t.$wrapperEl;
                if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var s = !1;
                    a.transitionEnd(function () {
                        if (!s && t && !t.destroyed) {
                            (s = !0), (t.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a]);
                        }
                    });
                }
            },
        },
        ei = {
            setTranslate: function () {
                var e,
                    t = this.$el,
                    a = this.$wrapperEl,
                    i = this.slides,
                    s = this.width,
                    r = this.height,
                    n = this.rtlTranslate,
                    l = this.size,
                    o = this.browser,
                    d = this.params.cubeEffect,
                    p = this.isHorizontal(),
                    u = this.virtual && this.params.virtual.enabled,
                    c = 0;
                d.shadow &&
                    (p
                        ? (0 === (e = a.find(".swiper-cube-shadow")).length && ((e = v('<div class="swiper-cube-shadow"></div>')), a.append(e)), e.css({ height: s + "px" }))
                        : 0 === (e = t.find(".swiper-cube-shadow")).length && ((e = v('<div class="swiper-cube-shadow"></div>')), t.append(e)));
                for (var h = 0; h < i.length; h += 1) {
                    var f = i.eq(h),
                        m = h;
                    u && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var g = 90 * m,
                        $ = Math.floor(g / 360);
                    n && ($ = Math.floor(-(g = -g) / 360));
                    var b = Math.max(Math.min(f[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        _ = 0;
                    m % 4 == 0 ? ((w = -(4 * $) * l), (_ = 0)) : (m - 1) % 4 == 0 ? ((w = 0), (_ = -(4 * $) * l)) : (m - 2) % 4 == 0 ? ((w = l + 4 * $ * l), (_ = l)) : (m - 3) % 4 == 0 && ((w = -l), (_ = 3 * l + 4 * l * $)),
                        n && (w = -w),
                        p || ((y = w), (w = 0));
                    var E = "rotateX(" + (p ? 0 : -g) + "deg) rotateY(" + (p ? g : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + _ + "px)";
                    if ((b <= 1 && b > -1 && ((c = 90 * m + 90 * b), n && (c = -(90 * m) - 90 * b)), f.transform(E), d.slideShadows)) {
                        var x = p ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            C = p ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === x.length && ((x = v('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>')), f.append(x)),
                            0 === C.length && ((C = v('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>')), f.append(C)),
                            x.length && (x[0].style.opacity = Math.max(-b, 0)),
                            C.length && (C[0].style.opacity = Math.max(b, 0));
                    }
                }
                if (
                    (a.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }),
                    d.shadow)
                ) {
                    if (p) e.transform("translate3d(0px, " + (s / 2 + d.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var T = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            S = d.shadowScale,
                            z = d.shadowScale / (1.5 - (Math.sin((2 * T * Math.PI) / 360) / 2 + Math.cos((2 * T * Math.PI) / 360) / 2)),
                            P = d.shadowOffset;
                        e.transform("scale3d(" + S + ", 1, " + z + ") translate3d(0px, " + (r / 2 + P) + "px, " + -r / 2 / z + "px) rotateX(-90deg)");
                    }
                }
                var k = o.isSafari || o.isWebView ? -l / 2 : 0;
                a.transform("translate3d(0px,0," + k + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
            },
            setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
            },
        },
        es = {
            setTranslate: function () {
                for (var e = this.slides, t = this.rtlTranslate, a = 0; a < e.length; a += 1) {
                    var i = e.eq(a),
                        s = i[0].progress;
                    this.params.flipEffect.limitRotation && (s = Math.max(Math.min(i[0].progress, 1), -1));
                    var r = -180 * s,
                        n = 0,
                        l = -i[0].swiperSlideOffset,
                        o = 0;
                    if ((this.isHorizontal() ? t && (r = -r) : ((o = l), (l = 0), (n = -r), (r = 0)), (i[0].style.zIndex = -Math.abs(Math.round(s)) + e.length), this.params.flipEffect.slideShadows)) {
                        var d = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                            p = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                        0 === d.length && ((d = v('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>')), i.append(d)),
                            0 === p.length && ((p = v('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>')), i.append(p)),
                            d.length && (d[0].style.opacity = Math.max(-s, 0)),
                            p.length && (p[0].style.opacity = Math.max(s, 0));
                    }
                    i.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)");
                }
            },
            setTransition: function (e) {
                var t = this,
                    a = t.slides,
                    i = t.activeIndex,
                    s = t.$wrapperEl;
                if ((a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var r = !1;
                    a.eq(i).transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            (r = !0), (t.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a]);
                        }
                    });
                }
            },
        },
        er = {
            setTranslate: function () {
                for (
                    var e = this.width,
                        t = this.height,
                        a = this.slides,
                        i = this.slidesSizesGrid,
                        s = this.params.coverflowEffect,
                        r = this.isHorizontal(),
                        n = this.translate,
                        l = r ? e / 2 - n : t / 2 - n,
                        o = r ? s.rotate : -s.rotate,
                        d = s.depth,
                        p = 0,
                        u = a.length;
                    p < u;
                    p += 1
                ) {
                    var c = a.eq(p),
                        h = i[p],
                        f = ((l - c[0].swiperSlideOffset - h / 2) / h) * s.modifier,
                        m = r ? o * f : 0,
                        g = r ? 0 : o * f,
                        $ = -d * Math.abs(f),
                        b = s.stretch;
                    "string" == typeof b && -1 !== b.indexOf("%") && (b = (parseFloat(s.stretch) / 100) * h);
                    var w = r ? 0 : b * f,
                        y = r ? b * f : 0,
                        _ = 1 - (1 - s.scale) * Math.abs(f);
                    0.001 > Math.abs(y) && (y = 0), 0.001 > Math.abs(w) && (w = 0), 0.001 > Math.abs($) && ($ = 0), 0.001 > Math.abs(m) && (m = 0), 0.001 > Math.abs(g) && (g = 0), 0.001 > Math.abs(_) && (_ = 0);
                    var E = "translate3d(" + y + "px," + w + "px," + $ + "px)  rotateX(" + g + "deg) rotateY(" + m + "deg) scale(" + _ + ")";
                    if ((c.transform(E), (c[0].style.zIndex = 1 - Math.abs(Math.round(f))), s.slideShadows)) {
                        var x = r ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top"),
                            C = r ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
                        0 === x.length && ((x = v('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>')), c.append(x)),
                            0 === C.length && ((C = v('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>')), c.append(C)),
                            x.length && (x[0].style.opacity = f > 0 ? f : 0),
                            C.length && (C[0].style.opacity = -f > 0 ? -f : 0);
                    }
                }
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            },
        },
        en = {
            init: function () {
                var e = this,
                    t = e.params.thumbs;
                if (e.thumbs.initialized) return !1;
                e.thumbs.initialized = !0;
                var a = e.constructor;
                return (
                    t.swiper instanceof a
                        ? ((e.thumbs.swiper = t.swiper), x(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), x(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                        : _(t.swiper) && ((e.thumbs.swiper = new a(x({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (e.thumbs.swiperCreated = !0)),
                    e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                    e.thumbs.swiper.on("tap", e.thumbs.onThumbClick),
                    !0
                );
            },
            onThumbClick: function () {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var a,
                        i = t.clickedIndex,
                        s = t.clickedSlide;
                    if (!((s && v(s).hasClass(e.params.thumbs.slideThumbActiveClass)) || null == i)) {
                        if (((a = t.params.loop ? parseInt(v(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i), e.params.loop)) {
                            var r = e.activeIndex;
                            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), (e._clientLeft = e.$wrapperEl[0].clientLeft), (r = e.activeIndex));
                            var n = e.slides
                                    .eq(r)
                                    .prevAll('[data-swiper-slide-index="' + a + '"]')
                                    .eq(0)
                                    .index(),
                                l = e.slides
                                    .eq(r)
                                    .nextAll('[data-swiper-slide-index="' + a + '"]')
                                    .eq(0)
                                    .index();
                            a = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
                        }
                        e.slideTo(a);
                    }
                }
            },
            update: function (e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var a = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
                        i = this.params.thumbs.autoScrollOffset,
                        s = i && !t.params.loop;
                    if (this.realIndex !== t.realIndex || s) {
                        var r,
                            n,
                            l = t.activeIndex;
                        if (t.params.loop) {
                            t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), (t._clientLeft = t.$wrapperEl[0].clientLeft), (l = t.activeIndex));
                            var o = t.slides
                                    .eq(l)
                                    .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                                    .eq(0)
                                    .index(),
                                d = t.slides
                                    .eq(l)
                                    .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                                    .eq(0)
                                    .index();
                            (r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? (t.params.slidesPerGroup > 1 ? d : l) : d - l < l - o ? d : o), (n = this.activeIndex > this.previousIndex ? "next" : "prev");
                        } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
                        s && (r += "next" === n ? i : -1 * i),
                            t.visibleSlidesIndexes &&
                                0 > t.visibleSlidesIndexes.indexOf(r) &&
                                (t.params.centeredSlides ? (r = r > l ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1) : r > l && t.params.slidesPerGroup, t.slideTo(r, e ? 0 : void 0));
                    }
                    var p = 1,
                        u = this.params.thumbs.slideThumbActiveClass;
                    if (
                        (this.params.slidesPerView > 1 && !this.params.centeredSlides && (p = this.params.slidesPerView),
                        this.params.thumbs.multipleActiveThumbs || (p = 1),
                        (p = Math.floor(p)),
                        t.slides.removeClass(u),
                        t.params.loop || (t.params.virtual && t.params.virtual.enabled))
                    )
                        for (var c = 0; c < p; c += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(u);
                    else for (var h = 0; h < p; h += 1) t.slides.eq(this.realIndex + h).addClass(u);
                }
            },
        },
        el = [
            {
                name: "virtual",
                params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } },
                create: function () {
                    C(this, { virtual: e({}, Y, { slides: this.params.virtual.slides, cache: {} }) });
                },
                on: {
                    beforeInit: function (e) {
                        if (e.params.virtual.enabled) {
                            e.classNames.push(e.params.containerModifierClass + "virtual");
                            var t = { watchSlidesProgress: !0 };
                            x(e.params, t), x(e.originalParams, t), e.params.initialSlide || e.virtual.update();
                        }
                    },
                    setTranslate: function (e) {
                        e.params.virtual.enabled && e.virtual.update();
                    },
                },
            },
            {
                name: "keyboard",
                params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
                create: function () {
                    C(this, { keyboard: e({ enabled: !1 }, R) });
                },
                on: {
                    init: function (e) {
                        e.params.keyboard.enabled && e.keyboard.enable();
                    },
                    destroy: function (e) {
                        e.keyboard.enabled && e.keyboard.disable();
                    },
                },
            },
            {
                name: "mousewheel",
                params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } },
                create: function () {
                    C(this, {
                        mousewheel: {
                            enabled: !1,
                            lastScrollTime: w(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: [],
                            enable: V.enable,
                            disable: V.disable,
                            handle: V.handle,
                            handleMouseEnter: V.handleMouseEnter,
                            handleMouseLeave: V.handleMouseLeave,
                            animateSlider: V.animateSlider,
                            releaseScroll: V.releaseScroll,
                        },
                    });
                },
                on: {
                    init: function (e) {
                        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
                    },
                    destroy: function (e) {
                        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
                    },
                },
            },
            {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create: function () {
                    C(this, { navigation: e({}, W) });
                },
                on: {
                    init: function (e) {
                        e.navigation.init(), e.navigation.update();
                    },
                    toEdge: function (e) {
                        e.navigation.update();
                    },
                    fromEdge: function (e) {
                        e.navigation.update();
                    },
                    destroy: function (e) {
                        e.navigation.destroy();
                    },
                    "enable disable": function (e) {
                        var t = e.navigation,
                            a = t.$nextEl,
                            i = t.$prevEl;
                        a && a[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
                    },
                    click: function (e, t) {
                        var a,
                            i = e.navigation,
                            s = i.$nextEl,
                            r = i.$prevEl,
                            n = t.target;
                        if (e.params.navigation.hideOnClick && !v(n).is(r) && !v(n).is(s)) {
                            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                            s ? (a = s.hasClass(e.params.navigation.hiddenClass)) : r && (a = r.hasClass(e.params.navigation.hiddenClass)),
                                !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"),
                                s && s.toggleClass(e.params.navigation.hiddenClass),
                                r && r.toggleClass(e.params.navigation.hiddenClass);
                        }
                    },
                },
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function (e) {
                            return e;
                        },
                        formatFractionTotal: function (e) {
                            return e;
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock",
                    },
                },
                create: function () {
                    C(this, { pagination: e({ dynamicBulletIndex: 0 }, q) });
                },
                on: {
                    init: function (e) {
                        e.pagination.init(), e.pagination.render(), e.pagination.update();
                    },
                    activeIndexChange: function (e) {
                        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
                    },
                    snapIndexChange: function (e) {
                        e.params.loop || e.pagination.update();
                    },
                    slidesLengthChange: function (e) {
                        e.params.loop && (e.pagination.render(), e.pagination.update());
                    },
                    snapGridLengthChange: function (e) {
                        e.params.loop || (e.pagination.render(), e.pagination.update());
                    },
                    destroy: function (e) {
                        e.pagination.destroy();
                    },
                    "enable disable": function (e) {
                        var t = e.pagination.$el;
                        t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
                    },
                    click: function (e, t) {
                        var a = t.target;
                        if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !v(a).hasClass(e.params.pagination.bulletClass)) {
                            if (e.navigation && ((e.navigation.nextEl && a === e.navigation.nextEl) || (e.navigation.prevEl && a === e.navigation.prevEl))) return;
                            !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
                        }
                    },
                },
            },
            {
                name: "scrollbar",
                params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                create: function () {
                    C(this, { scrollbar: e({ isTouched: !1, timeout: null, dragTimeout: null }, F) });
                },
                on: {
                    init: function (e) {
                        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
                    },
                    update: function (e) {
                        e.scrollbar.updateSize();
                    },
                    resize: function (e) {
                        e.scrollbar.updateSize();
                    },
                    observerUpdate: function (e) {
                        e.scrollbar.updateSize();
                    },
                    setTranslate: function (e) {
                        e.scrollbar.setTranslate();
                    },
                    setTransition: function (e, t) {
                        e.scrollbar.setTransition(t);
                    },
                    "enable disable": function (e) {
                        var t = e.scrollbar.$el;
                        t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
                    },
                    destroy: function (e) {
                        e.scrollbar.destroy();
                    },
                },
            },
            {
                name: "parallax",
                params: { parallax: { enabled: !1 } },
                create: function () {
                    C(this, { parallax: e({}, j) });
                },
                on: {
                    beforeInit: function (e) {
                        e.params.parallax.enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                    },
                    init: function (e) {
                        e.params.parallax.enabled && e.parallax.setTranslate();
                    },
                    setTranslate: function (e) {
                        e.params.parallax.enabled && e.parallax.setTranslate();
                    },
                    setTransition: function (e, t) {
                        e.params.parallax.enabled && e.parallax.setTransition(t);
                    },
                },
            },
            {
                name: "zoom",
                params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                create: function () {
                    var t = this;
                    C(t, {
                        zoom: e(
                            {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {},
                                },
                                velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                            },
                            U
                        ),
                    });
                    var a = 1;
                    Object.defineProperty(t.zoom, "scale", {
                        get: function () {
                            return a;
                        },
                        set: function (e) {
                            if (a !== e) {
                                var i = t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
                                    s = t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0;
                                t.emit("zoomChange", e, i, s);
                            }
                            a = e;
                        },
                    });
                },
                on: {
                    init: function (e) {
                        e.params.zoom.enabled && e.zoom.enable();
                    },
                    destroy: function (e) {
                        e.zoom.disable();
                    },
                    touchStart: function (e, t) {
                        e.zoom.enabled && e.zoom.onTouchStart(t);
                    },
                    touchEnd: function (e, t) {
                        e.zoom.enabled && e.zoom.onTouchEnd(t);
                    },
                    doubleTap: function (e, t) {
                        !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
                    },
                    transitionEnd: function (e) {
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
                    },
                    slideChange: function (e) {
                        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
                    },
                },
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                },
                create: function () {
                    C(this, { lazy: e({ initialImageLoaded: !1 }, K) });
                },
                on: {
                    beforeInit: function (e) {
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
                    },
                    init: function (e) {
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
                    },
                    scroll: function (e) {
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
                    },
                    "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
                        e.params.lazy.enabled && e.lazy.load();
                    },
                    transitionStart: function (e) {
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
                    },
                    transitionEnd: function (e) {
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
                    },
                    slideChange: function (e) {
                        var t = e.params,
                            a = t.lazy,
                            i = t.cssMode,
                            s = t.watchSlidesVisibility,
                            r = t.watchSlidesProgress,
                            n = t.touchReleaseOnEdges,
                            l = t.resistanceRatio;
                        a.enabled && (i || ((s || r) && (n || 0 === l))) && e.lazy.load();
                    },
                },
            },
            {
                name: "controller",
                params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                create: function () {
                    C(this, { controller: e({ control: this.params.controller.control }, Z) });
                },
                on: {
                    update: function (e) {
                        e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                    },
                    resize: function (e) {
                        e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                    },
                    observerUpdate: function (e) {
                        e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                    },
                    setTranslate: function (e, t, a) {
                        e.controller.control && e.controller.setTranslate(t, a);
                    },
                    setTransition: function (e, t, a) {
                        e.controller.control && e.controller.setTransition(t, a);
                    },
                },
            },
            {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                    },
                },
                create: function () {
                    C(this, { a11y: e({}, J, { liveRegion: v('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') }) });
                },
                on: {
                    afterInit: function (e) {
                        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
                    },
                    toEdge: function (e) {
                        e.params.a11y.enabled && e.a11y.updateNavigation();
                    },
                    fromEdge: function (e) {
                        e.params.a11y.enabled && e.a11y.updateNavigation();
                    },
                    paginationUpdate: function (e) {
                        e.params.a11y.enabled && e.a11y.updatePagination();
                    },
                    destroy: function (e) {
                        e.params.a11y.enabled && e.a11y.destroy();
                    },
                },
            },
            {
                name: "history",
                params: { history: { enabled: !1, root: "", replaceState: !1, key: "slides" } },
                create: function () {
                    C(this, { history: e({}, Q) });
                },
                on: {
                    init: function (e) {
                        e.params.history.enabled && e.history.init();
                    },
                    destroy: function (e) {
                        e.params.history.enabled && e.history.destroy();
                    },
                    "transitionEnd _freeModeNoMomentumRelease": function (e) {
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
                    },
                    slideChange: function (e) {
                        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
                    },
                },
            },
            {
                name: "hash-navigation",
                params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                create: function () {
                    C(this, { hashNavigation: e({ initialized: !1 }, ee) });
                },
                on: {
                    init: function (e) {
                        e.params.hashNavigation.enabled && e.hashNavigation.init();
                    },
                    destroy: function (e) {
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
                    },
                    "transitionEnd _freeModeNoMomentumRelease": function (e) {
                        e.hashNavigation.initialized && e.hashNavigation.setHash();
                    },
                    slideChange: function (e) {
                        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
                    },
                },
            },
            {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } },
                create: function () {
                    C(this, { autoplay: e({}, et, { running: !1, paused: !1 }) });
                },
                on: {
                    init: function (e) {
                        e.params.autoplay.enabled && (e.autoplay.start(), s().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents());
                    },
                    beforeTransitionStart: function (e, t, a) {
                        e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
                    },
                    sliderFirstMove: function (e) {
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
                    },
                    touchEnd: function (e) {
                        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
                    },
                    destroy: function (e) {
                        e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), s().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
                    },
                },
            },
            {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function () {
                    C(this, { fadeEffect: e({}, ea) });
                },
                on: {
                    beforeInit: function (e) {
                        if ("fade" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "fade");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            x(e.params, t), x(e.originalParams, t);
                        }
                    },
                    setTranslate: function (e) {
                        "fade" === e.params.effect && e.fadeEffect.setTranslate();
                    },
                    setTransition: function (e, t) {
                        "fade" === e.params.effect && e.fadeEffect.setTransition(t);
                    },
                },
            },
            {
                name: "effect-cube",
                params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                create: function () {
                    C(this, { cubeEffect: e({}, ei) });
                },
                on: {
                    beforeInit: function (e) {
                        if ("cube" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                            x(e.params, t), x(e.originalParams, t);
                        }
                    },
                    setTranslate: function (e) {
                        "cube" === e.params.effect && e.cubeEffect.setTranslate();
                    },
                    setTransition: function (e, t) {
                        "cube" === e.params.effect && e.cubeEffect.setTransition(t);
                    },
                },
            },
            {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create: function () {
                    C(this, { flipEffect: e({}, es) });
                },
                on: {
                    beforeInit: function (e) {
                        if ("flip" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            x(e.params, t), x(e.originalParams, t);
                        }
                    },
                    setTranslate: function (e) {
                        "flip" === e.params.effect && e.flipEffect.setTranslate();
                    },
                    setTransition: function (e, t) {
                        "flip" === e.params.effect && e.flipEffect.setTransition(t);
                    },
                },
            },
            {
                name: "effect-coverflow",
                params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } },
                create: function () {
                    C(this, { coverflowEffect: e({}, er) });
                },
                on: {
                    beforeInit: function (e) {
                        "coverflow" === e.params.effect &&
                            (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate: function (e) {
                        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
                    },
                    setTransition: function (e, t) {
                        "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
                    },
                },
            },
            {
                name: "thumbs",
                params: { thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                create: function () {
                    C(this, { thumbs: e({ swiper: null, initialized: !1 }, en) });
                },
                on: {
                    beforeInit: function (e) {
                        var t = e.params.thumbs;
                        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
                    },
                    slideChange: function (e) {
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    update: function (e) {
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    resize: function (e) {
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    observerUpdate: function (e) {
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    setTransition: function (e, t) {
                        var a = e.thumbs.swiper;
                        a && a.setTransition(t);
                    },
                    beforeDestroy: function (e) {
                        var t = e.thumbs.swiper;
                        t && e.thumbs.swiperCreated && t && t.destroy();
                    },
                },
            },
        ];
    return X.use(el), X;
});

/*!
Waypoints - 4.0.1
Copyright ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
    "use strict";
    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        (this.key = "waypoint-" + e),
            (this.options = t.Adapter.extend({}, t.defaults, o)),
            (this.element = this.options.element),
            (this.adapter = new t.Adapter(this.element)),
            (this.callback = o.handler),
            (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
            (this.enabled = this.options.enabled),
            (this.triggerPoint = null),
            (this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
            (this.context = t.Context.findOrCreateByElement(this.options.context)),
            t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            (i[this.key] = this),
            (e += 1);
    }
    var e = 0,
        i = {};
    (t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t);
    }),
        (t.prototype.trigger = function (t) {
            this.enabled && this.callback && this.callback.apply(this, t);
        }),
        (t.prototype.destroy = function () {
            this.context.remove(this), this.group.remove(this), delete i[this.key];
        }),
        (t.prototype.disable = function () {
            return (this.enabled = !1), this;
        }),
        (t.prototype.enable = function () {
            return this.context.refresh(), (this.enabled = !0), this;
        }),
        (t.prototype.next = function () {
            return this.group.next(this);
        }),
        (t.prototype.previous = function () {
            return this.group.previous(this);
        }),
        (t.invokeAll = function (t) {
            var e = [];
            for (var o in i) e.push(i[o]);
            for (var n = 0, r = e.length; r > n; n++) e[n][t]();
        }),
        (t.destroyAll = function () {
            t.invokeAll("destroy");
        }),
        (t.disableAll = function () {
            t.invokeAll("disable");
        }),
        (t.enableAll = function () {
            t.Context.refreshAll();
            for (var e in i) i[e].enabled = !0;
            return this;
        }),
        (t.refreshAll = function () {
            t.Context.refreshAll();
        }),
        (t.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight;
        }),
        (t.viewportWidth = function () {
            return document.documentElement.clientWidth;
        }),
        (t.adapters = []),
        (t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }),
        (t.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight();
            },
            "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth();
            },
        }),
        (window.Waypoint = t);
})(),
    (function () {
        "use strict";
        function t(t) {
            window.setTimeout(t, 1e3 / 60);
        }
        function e(t) {
            (this.element = t),
                (this.Adapter = n.Adapter),
                (this.adapter = new this.Adapter(t)),
                (this.key = "waypoint-context-" + i),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (t.waypointContextKey = this.key),
                (o[t.waypointContextKey] = this),
                (i += 1),
                n.windowContext || ((n.windowContext = !0), (n.windowContext = new e(window))),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        var i = 0,
            o = {},
            n = window.Waypoint,
            r = window.onload;
        (e.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[e][t.key] = t), this.refresh();
        }),
            (e.prototype.checkEmpty = function () {
                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                    i = this.element == this.element.window;
                t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
            }),
            (e.prototype.createThrottledResizeHandler = function () {
                function t() {
                    e.handleResize(), (e.didResize = !1);
                }
                var e = this;
                this.adapter.on("resize.waypoints", function () {
                    e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
                });
            }),
            (e.prototype.createThrottledScrollHandler = function () {
                function t() {
                    e.handleScroll(), (e.didScroll = !1);
                }
                var e = this;
                this.adapter.on("scroll.waypoints", function () {
                    (!e.didScroll || n.isTouch) && ((e.didScroll = !0), n.requestAnimationFrame(t));
                });
            }),
            (e.prototype.handleResize = function () {
                n.Context.refreshAll();
            }),
            (e.prototype.handleScroll = function () {
                var t = {},
                    e = {
                        horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" },
                        vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" },
                    };
                for (var i in e) {
                    var o = e[i],
                        n = o.newScroll > o.oldScroll,
                        r = n ? o.forward : o.backward;
                    for (var s in this.waypoints[i]) {
                        var a = this.waypoints[i][s];
                        if (null !== a.triggerPoint) {
                            var l = o.oldScroll < a.triggerPoint,
                                h = o.newScroll >= a.triggerPoint,
                                p = l && h,
                                u = !l && !h;
                            (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
                        }
                    }
                }
                for (var c in t) t[c].flushTriggers();
                this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
            }),
            (e.prototype.innerHeight = function () {
                return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
            }),
            (e.prototype.remove = function (t) {
                delete this.waypoints[t.axis][t.key], this.checkEmpty();
            }),
            (e.prototype.innerWidth = function () {
                return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
            }),
            (e.prototype.destroy = function () {
                var t = [];
                for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
                for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
            }),
            (e.prototype.refresh = function () {
                var t,
                    e = this.element == this.element.window,
                    i = e ? void 0 : this.adapter.offset(),
                    o = {};
                this.handleScroll(),
                    (t = {
                        horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" },
                        vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" },
                    });
                for (var r in t) {
                    var s = t[r];
                    for (var a in this.waypoints[r]) {
                        var l,
                            h,
                            p,
                            u,
                            c,
                            d = this.waypoints[r][a],
                            f = d.options.offset,
                            w = d.triggerPoint,
                            y = 0,
                            g = null == w;
                        d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]),
                            "function" == typeof f ? (f = f.apply(d)) : "string" == typeof f && ((f = parseFloat(f)), d.options.offset.indexOf("%") > -1 && (f = Math.ceil((s.contextDimension * f) / 100))),
                            (l = s.contextScroll - s.contextOffset),
                            (d.triggerPoint = Math.floor(y + l - f)),
                            (h = w < s.oldScroll),
                            (p = d.triggerPoint >= s.oldScroll),
                            (u = h && p),
                            (c = !h && !p),
                            !g && u
                                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                                : !g && c
                                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                                : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
                    }
                }
                return (
                    n.requestAnimationFrame(function () {
                        for (var t in o) o[t].flushTriggers();
                    }),
                    this
                );
            }),
            (e.findOrCreateByElement = function (t) {
                return e.findByElement(t) || new e(t);
            }),
            (e.refreshAll = function () {
                for (var t in o) o[t].refresh();
            }),
            (e.findByElement = function (t) {
                return o[t.waypointContextKey];
            }),
            (window.onload = function () {
                r && r(), e.refreshAll();
            }),
            (n.requestAnimationFrame = function (e) {
                var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
                i.call(window, e);
            }),
            (n.Context = e);
    })(),
    (function () {
        "use strict";
        function t(t, e) {
            return t.triggerPoint - e.triggerPoint;
        }
        function e(t, e) {
            return e.triggerPoint - t.triggerPoint;
        }
        function i(t) {
            (this.name = t.name), (this.axis = t.axis), (this.id = this.name + "-" + this.axis), (this.waypoints = []), this.clearTriggerQueues(), (o[this.axis][this.name] = this);
        }
        var o = { vertical: {}, horizontal: {} },
            n = window.Waypoint;
        (i.prototype.add = function (t) {
            this.waypoints.push(t);
        }),
            (i.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (i.prototype.flushTriggers = function () {
                for (var i in this.triggerQueues) {
                    var o = this.triggerQueues[i],
                        n = "up" === i || "left" === i;
                    o.sort(n ? e : t);
                    for (var r = 0, s = o.length; s > r; r += 1) {
                        var a = o[r];
                        (a.options.continuous || r === o.length - 1) && a.trigger([i]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (i.prototype.next = function (e) {
                this.waypoints.sort(t);
                var i = n.Adapter.inArray(e, this.waypoints),
                    o = i === this.waypoints.length - 1;
                return o ? null : this.waypoints[i + 1];
            }),
            (i.prototype.previous = function (e) {
                this.waypoints.sort(t);
                var i = n.Adapter.inArray(e, this.waypoints);
                return i ? this.waypoints[i - 1] : null;
            }),
            (i.prototype.queueTrigger = function (t, e) {
                this.triggerQueues[e].push(t);
            }),
            (i.prototype.remove = function (t) {
                var e = n.Adapter.inArray(t, this.waypoints);
                e > -1 && this.waypoints.splice(e, 1);
            }),
            (i.prototype.first = function () {
                return this.waypoints[0];
            }),
            (i.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (i.findOrCreate = function (t) {
                return o[t.axis][t.name] || new i(t);
            }),
            (n.Group = i);
    })(),
    (function () {
        "use strict";
        function t(t) {
            this.$element = e(t);
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
            t.prototype[i] = function () {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, t);
            };
        }),
            e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
                t[o] = e[o];
            }),
            i.adapters.push({ name: "jquery", Adapter: t }),
            (i.Adapter = t);
    })(),
    (function () {
        "use strict";
        function t(t) {
            return function () {
                var i = [],
                    o = arguments[0];
                return (
                    t.isFunction(arguments[0]) && ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
                    this.each(function () {
                        var n = t.extend({}, o, { element: this });
                        "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
                    }),
                    i
                );
            };
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
    })();

// counter up js

(function ($) {
    "use strict";
    $.fn.counterUp = function (options) {
        var settings = $.extend({ time: 400, delay: 10, offset: 100, beginAt: 0, formatter: false, context: "window", callback: function () {} }, options),
            s;
        return this.each(function () {
            var $this = $(this),
                counter = {
                    time: $(this).data("counterup-time") || settings.time,
                    delay: $(this).data("counterup-delay") || settings.delay,
                    offset: $(this).data("counterup-offset") || settings.offset,
                    beginAt: $(this).data("counterup-beginat") || settings.beginAt,
                    context: $(this).data("counterup-context") || settings.context,
                };
            var counterUpper = function () {
                var nums = [];
                var divisions = counter.time / counter.delay;
                var num = $(this).attr("data-num") ? $(this).attr("data-num") : $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, "");
                var decimalPlaces = (num.split(".")[1] || []).length;
                if (counter.beginAt > num) counter.beginAt = num;
                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);
                if (isTime) {
                    var times = num.split(":"),
                        m = 1;
                    s = 0;
                    while (times.length > 0) {
                        s += m * parseInt(times.pop(), 10);
                        m *= 60;
                    }
                }
                for (var i = divisions; i >= (counter.beginAt / num) * divisions; i--) {
                    var newNum = parseFloat((num / divisions) * i).toFixed(decimalPlaces);
                    if (isTime) {
                        newNum = parseInt((s / divisions) * i);
                        var hours = parseInt(newNum / 3600) % 24;
                        var minutes = parseInt(newNum / 60) % 60;
                        var seconds = parseInt(newNum % 60, 10);
                        newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
                    }
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
                        }
                    }
                    if (settings.formatter) {
                        newNum = settings.formatter.call(this, newNum);
                    }
                    nums.unshift(newNum);
                }
                $this.data("counterup-nums", nums);
                $this.text(counter.beginAt);
                var f = function () {
                    if (!$this.data("counterup-nums")) {
                        settings.callback.call(this);
                        return;
                    }
                    $this.html($this.data("counterup-nums").shift());
                    if ($this.data("counterup-nums").length) {
                        setTimeout($this.data("counterup-func"), counter.delay);
                    } else {
                        $this.data("counterup-nums", null);
                        $this.data("counterup-func", null);
                        settings.callback.call(this);
                    }
                };
                $this.data("counterup-func", f);
                setTimeout($this.data("counterup-func"), counter.delay);
            };
            $this.waypoint(
                function (direction) {
                    counterUpper();
                    this.destroy();
                },
                { offset: counter.offset + "%", context: counter.context }
            );
        });
    };
})(jQuery);

// metismenu js

/*!
 * metismenu https://github.com/onokumus/metismenu#readme
 * A jQuery menu plugin
 * @version 3.0.6
 * @author Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
 * @license: MIT
 */ !(function (n, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e(require("jquery"))) : "function" == typeof define && define.amd ? define(["jquery"], e) : ((n = n || self).metisMenu = e(n.jQuery));
})(this, function (n) {
    "use strict";
    function e() {
        return (e =
            Object.assign ||
            function (n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
                }
                return n;
            }).apply(this, arguments);
    }
    n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
    var t,
        i,
        r,
        a =
            ((i = "transitionend"),
            (r = {
                TRANSITION_END: "mmTransitionEnd",
                triggerTransitionEnd: function (n) {
                    t(n).trigger(i);
                },
                supportsTransitionEnd: function () {
                    return Boolean(i);
                },
            }),
            ((t = n).fn.mmEmulateTransitionEnd = function n(e) {
                var i = this,
                    a = !1;
                return (
                    t(this).one(r.TRANSITION_END, function () {
                        a = !0;
                    }),
                    setTimeout(function () {
                        a || r.triggerTransitionEnd(i);
                    }, e),
                    this
                );
            }),
            (t.event.special[r.TRANSITION_END] = {
                bindType: i,
                delegateType: i,
                handle: function (n) {
                    if (t(n.target).is(this)) return n.handleObj.handler.apply(this, arguments);
                },
            }),
            r),
        s = "metisMenu",
        o = "metisMenu",
        g = "." + o,
        h = n.fn[s],
        l = { toggle: !0, preventDefault: !0, triggerElement: "a", parentTrigger: "li", subMenu: "ul" },
        f = { SHOW: "show" + g, SHOWN: "shown" + g, HIDE: "hide" + g, HIDDEN: "hidden" + g, CLICK_DATA_API: "click" + g + ".data-api" },
        d = "mm-active",
        u = "mm-show",
        c = "mm-collapse",
        p = "mm-collapsing",
        m = (function () {
            function t(n, t) {
                (this.element = n), (this.config = e({}, l, {}, t)), (this.transitioning = null), this.init();
            }
            var i = t.prototype;
            return (
                (i.init = function () {
                    var e = this,
                        t = this.config,
                        i = n(this.element);
                    i.addClass("metismenu"),
                        i
                            .find(t.parentTrigger + "." + d)
                            .children(t.triggerElement)
                            .attr("aria-expanded", "true"),
                        i
                            .find(t.parentTrigger + "." + d)
                            .parents(t.parentTrigger)
                            .addClass(d),
                        i
                            .find(t.parentTrigger + "." + d)
                            .parents(t.parentTrigger)
                            .children(t.triggerElement)
                            .attr("aria-expanded", "true"),
                        i
                            .find(t.parentTrigger + "." + d)
                            .has(t.subMenu)
                            .children(t.subMenu)
                            .addClass(c + " " + u),
                        i
                            .find(t.parentTrigger)
                            .not("." + d)
                            .has(t.subMenu)
                            .children(t.subMenu)
                            .addClass(c),
                        i
                            .find(t.parentTrigger)
                            .children(t.triggerElement)
                            .on(f.CLICK_DATA_API, function (i) {
                                var r = n(this);
                                if ("true" !== r.attr("aria-disabled")) {
                                    t.preventDefault && "#" === r.attr("href") && i.preventDefault();
                                    var a = r.parent(t.parentTrigger),
                                        s = a.siblings(t.parentTrigger),
                                        o = s.children(t.triggerElement);
                                    a.hasClass(d) ? (r.attr("aria-expanded", "false"), e.removeActive(a)) : (r.attr("aria-expanded", "true"), e.setActive(a), t.toggle && (e.removeActive(s), o.attr("aria-expanded", "false"))),
                                        t.onTransitionStart && t.onTransitionStart(i);
                                }
                            });
                }),
                (i.setActive = function (e) {
                    n(e).addClass(d);
                    var t = n(e).children(this.config.subMenu);
                    0 < t.length && !t.hasClass(u) && this.show(t);
                }),
                (i.removeActive = function (e) {
                    n(e).removeClass(d);
                    var t = n(e).children(this.config.subMenu + "." + u);
                    0 < t.length && this.hide(t);
                }),
                (i.show = function (e) {
                    var t = this;
                    if (!this.transitioning && !n(e).hasClass(p)) {
                        var i = n(e),
                            r = n.Event(f.SHOW);
                        if ((i.trigger(r), !r.isDefaultPrevented())) {
                            if ((i.parent(this.config.parentTrigger).addClass(d), this.config.toggle)) {
                                var s = i
                                    .parent(this.config.parentTrigger)
                                    .siblings()
                                    .children(this.config.subMenu + "." + u);
                                this.hide(s);
                            }
                            i.removeClass(c).addClass(p).height(0),
                                this.setTransitioning(!0),
                                i
                                    .height(e[0].scrollHeight)
                                    .one(a.TRANSITION_END, function () {
                                        t.config &&
                                            t.element &&
                                            (i
                                                .removeClass(p)
                                                .addClass(c + " " + u)
                                                .height(""),
                                            t.setTransitioning(!1),
                                            i.trigger(f.SHOWN));
                                    })
                                    .mmEmulateTransitionEnd(350);
                        }
                    }
                }),
                (i.hide = function (e) {
                    var t = this;
                    if (!this.transitioning && n(e).hasClass(u)) {
                        var i = n(e),
                            r = n.Event(f.HIDE);
                        if ((i.trigger(r), !r.isDefaultPrevented())) {
                            i.parent(this.config.parentTrigger).removeClass(d), i.height(i.height())[0].offsetHeight, i.addClass(p).removeClass(c).removeClass(u), this.setTransitioning(!0);
                            var s = function () {
                                t.config && t.element && (t.transitioning && t.config.onTransitionEnd && t.config.onTransitionEnd(), t.setTransitioning(!1), i.trigger(f.HIDDEN), i.removeClass(p).addClass(c));
                            };
                            0 === i.height() || "none" === i.css("display") ? s() : i.height(0).one(a.TRANSITION_END, s).mmEmulateTransitionEnd(350);
                        }
                    }
                }),
                (i.setTransitioning = function (n) {
                    this.transitioning = n;
                }),
                (i.dispose = function () {
                    n.removeData(this.element, o), n(this.element).find(this.config.parentTrigger).children(this.config.triggerElement).off(f.CLICK_DATA_API), (this.transitioning = null), (this.config = null), (this.element = null);
                }),
                (t.jQueryInterface = function (i) {
                    return this.each(function () {
                        var r = n(this),
                            a = r.data(o),
                            s = e({}, l, {}, r.data(), {}, "object" == typeof i && i ? i : {});
                        if ((a || ((a = new t(this, s)), r.data(o, a)), "string" == typeof i)) {
                            if (void 0 === a[i]) throw Error('No method named "' + i + '"');
                            a[i]();
                        }
                    });
                }),
                t
            );
        })();
    return (
        (n.fn[s] = m.jQueryInterface),
        (n.fn[s].Constructor = m),
        (n.fn[s].noConflict = function () {
            return (n.fn[s] = h), m.jQueryInterface;
        }),
        m
    );
});

// theasticky js

!(function (i) {
    i.fn.theiaStickySidebar = function (t) {
        function e(t, e) {
            var a = o(t, e);
            a ||
                (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),
                i(document).on(
                    "scroll." + t.namespace,
                    (function (t, e) {
                        return function (a) {
                            var n = o(t, e);
                            n && i(this).unbind(a);
                        };
                    })(t, e)
                ),
                i(window).on(
                    "resize." + t.namespace,
                    (function (t, e) {
                        return function (a) {
                            var n = o(t, e);
                            n && i(this).unbind(a);
                        };
                    })(t, e)
                ));
        }
        function o(t, e) {
            return t.initialized === !0 || (!(i("body").width() < t.minWidth) && (a(t, e), !0));
        }
        function a(t, e) {
            t.initialized = !0;
            var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
            0 === o.length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),
                e.each(function () {
                    function e() {
                        (a.fixedScrollTop = 0), a.sidebar.css({ "min-height": "1px" }), a.stickySidebar.css({ position: "static", width: "", transform: "none" });
                    }
                    function o(t) {
                        var e = t.height();
                        return (
                            t.children().each(function () {
                                e = Math.max(e, i(this).height());
                            }),
                            e
                        );
                    }
                    var a = {};
                    if (
                        ((a.sidebar = i(this)),
                        (a.options = t || {}),
                        (a.container = i(a.options.containerSelector)),
                        0 == a.container.length && (a.container = a.sidebar.parent()),
                        a.sidebar.parents().css("-webkit-transform", "none"),
                        a.sidebar.css({ position: a.options.defaultPosition, overflow: "visible", "-webkit-box-sizing": "border-box", "-moz-box-sizing": "border-box", "box-sizing": "border-box" }),
                        (a.stickySidebar = a.sidebar.find(".theiaStickySidebar")),
                        0 == a.stickySidebar.length)
                    ) {
                        var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                        a.sidebar
                            .find("script")
                            .filter(function (i, t) {
                                return 0 === t.type.length || t.type.match(s);
                            })
                            .remove(),
                            (a.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children())),
                            a.sidebar.append(a.stickySidebar);
                    }
                    (a.marginBottom = parseInt(a.sidebar.css("margin-bottom"))), (a.paddingTop = parseInt(a.sidebar.css("padding-top"))), (a.paddingBottom = parseInt(a.sidebar.css("padding-bottom")));
                    var r = a.stickySidebar.offset().top,
                        d = a.stickySidebar.outerHeight();
                    a.stickySidebar.css("padding-top", 1),
                        a.stickySidebar.css("padding-bottom", 1),
                        (r -= a.stickySidebar.offset().top),
                        (d = a.stickySidebar.outerHeight() - d - r),
                        0 == r ? (a.stickySidebar.css("padding-top", 0), (a.stickySidebarPaddingTop = 0)) : (a.stickySidebarPaddingTop = 1),
                        0 == d ? (a.stickySidebar.css("padding-bottom", 0), (a.stickySidebarPaddingBottom = 0)) : (a.stickySidebarPaddingBottom = 1),
                        (a.previousScrollTop = null),
                        (a.fixedScrollTop = 0),
                        e(),
                        (a.onScroll = function (a) {
                            if (a.stickySidebar.is(":visible")) {
                                if (i("body").width() < a.options.minWidth) return void e();
                                if (a.options.disableOnResponsiveLayouts) {
                                    var s = a.sidebar.outerWidth("none" == a.sidebar.css("float"));
                                    if (s + 50 > a.container.width()) return void e();
                                }
                                var r = i(document).scrollTop(),
                                    d = "static";
                                if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
                                    var c,
                                        p = a.paddingTop + t.additionalMarginTop,
                                        b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
                                        l = a.sidebar.offset().top,
                                        f = a.sidebar.offset().top + o(a.container),
                                        h = 0 + t.additionalMarginTop,
                                        g = a.stickySidebar.outerHeight() + p + b < i(window).height();
                                    c = g ? h + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
                                    var u = l - r + a.paddingTop,
                                        S = f - r - a.paddingBottom - a.marginBottom,
                                        y = a.stickySidebar.offset().top - r,
                                        m = a.previousScrollTop - r;
                                    "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (y += m),
                                        "stick-to-top" == a.options.sidebarBehavior && (y = t.additionalMarginTop),
                                        "stick-to-bottom" == a.options.sidebarBehavior && (y = c - a.stickySidebar.outerHeight()),
                                        (y = m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight())),
                                        (y = Math.max(y, u)),
                                        (y = Math.min(y, S - a.stickySidebar.outerHeight()));
                                    var k = a.container.height() == a.stickySidebar.outerHeight();
                                    d = (k || y != h) && (k || y != c - a.stickySidebar.outerHeight()) ? (r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute") : "fixed";
                                }
                                if ("fixed" == d) {
                                    var v = i(document).scrollLeft();
                                    a.stickySidebar.css({
                                        position: "fixed",
                                        width: n(a.stickySidebar) + "px",
                                        transform: "translateY(" + y + "px)",
                                        left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left")) - v + "px",
                                        top: "0px",
                                    });
                                } else if ("absolute" == d) {
                                    var x = {};
                                    "absolute" != a.stickySidebar.css("position") &&
                                        ((x.position = "absolute"), (x.transform = "translateY(" + (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + "px)"), (x.top = "0px")),
                                        (x.width = n(a.stickySidebar) + "px"),
                                        (x.left = ""),
                                        a.stickySidebar.css(x);
                                } else "static" == d && e();
                                "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({ "min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom }),
                                    (a.previousScrollTop = r);
                            }
                        }),
                        a.onScroll(a),
                        i(document).on(
                            "scroll." + a.options.namespace,
                            (function (i) {
                                return function () {
                                    i.onScroll(i);
                                };
                            })(a)
                        ),
                        i(window).on(
                            "resize." + a.options.namespace,
                            (function (i) {
                                return function () {
                                    i.stickySidebar.css({ position: "static" }), i.onScroll(i);
                                };
                            })(a)
                        ),
                        "undefined" != typeof ResizeSensor &&
                            new ResizeSensor(
                                a.stickySidebar[0],
                                (function (i) {
                                    return function () {
                                        i.onScroll(i);
                                    };
                                })(a)
                            );
                });
        }
        function n(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width;
            } catch (i) {}
            return "undefined" == typeof t && (t = i.width()), t;
        }
        var s = { containerSelector: "", additionalMarginTop: 0, additionalMarginBottom: 0, updateSidebarHeight: !0, minWidth: 0, disableOnResponsiveLayouts: !0, sidebarBehavior: "modern", defaultPosition: "relative", namespace: "TSS" };
        return (t = i.extend(s, t)), (t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0), (t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0), e(t, this), this;
    };
})(jQuery);

/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e());
})(this, function () {
    "use strict";
    const t = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; ) n.matches(e) && i.push(n), (n = n.parentNode);
                return i;
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling;
                }
                return [];
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling;
                }
                return [];
            },
        },
        e = (t) => {
            do {
                t += Math.floor(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
        },
        i = (t) => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), (e = i && "#" !== i ? i.trim() : null);
            }
            return e;
        },
        n = (t) => {
            const e = i(t);
            return e && document.querySelector(e) ? e : null;
        },
        s = (t) => {
            const e = i(t);
            return e ? document.querySelector(e) : null;
        },
        o = (t) => {
            t.dispatchEvent(new Event("transitionend"));
        },
        r = (t) => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        a = (e) => (r(e) ? (e.jquery ? e[0] : e) : "string" == typeof e && e.length > 0 ? t.findOne(e) : null),
        l = (t, e, i) => {
            Object.keys(i).forEach((n) => {
                const s = i[n],
                    o = e[n],
                    a =
                        o && r(o)
                            ? "element"
                            : null == (l = o)
                            ? "" + l
                            : {}.toString
                                  .call(l)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                var l;
                if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`);
            });
        },
        c = (t) => !(!r(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        h = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        d = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? d(t.parentNode) : null;
        },
        u = () => {},
        f = (t) => t.offsetHeight,
        p = () => {
            const { jQuery: t } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
        },
        m = [],
        g = () => "rtl" === document.documentElement.dir,
        _ = (t) => {
            var e;
            (e = () => {
                const e = p();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    (e.fn[i] = t.jQueryInterface), (e.fn[i].Constructor = t), (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
                }
            }),
                "loading" === document.readyState
                    ? (m.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              m.forEach((t) => t());
                          }),
                      m.push(e))
                    : e();
        },
        b = (t) => {
            "function" == typeof t && t();
        },
        v = (t, e, i = !0) => {
            if (!i) return void b(t);
            const n =
                ((t) => {
                    if (!t) return 0;
                    let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
                    const n = Number.parseFloat(e),
                        s = Number.parseFloat(i);
                    return n || s ? ((e = e.split(",")[0]), (i = i.split(",")[0]), 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
                })(e) + 5;
            let s = !1;
            const r = ({ target: i }) => {
                i === e && ((s = !0), e.removeEventListener("transitionend", r), b(t));
            };
            e.addEventListener("transitionend", r),
                setTimeout(() => {
                    s || o(e);
                }, n);
        },
        y = (t, e, i, n) => {
            let s = t.indexOf(e);
            if (-1 === s) return t[!i && n ? t.length - 1 : 0];
            const o = t.length;
            return (s += i ? 1 : -1), n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
        },
        w = /[^.]*(?=\..*)\.|.*/,
        E = /\..*/,
        A = /::\d+$/,
        T = {};
    let O = 1;
    const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
        k = /^(mouseenter|mouseleave)/i,
        L = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function x(t, e) {
        return (e && `${e}::${O++}`) || t.uidEvent || O++;
    }
    function D(t) {
        const e = x(t);
        return (t.uidEvent = e), (T[e] = T[e] || {}), T[e];
    }
    function S(t, e, i = null) {
        const n = Object.keys(t);
        for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o;
        }
        return null;
    }
    function I(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e;
        let o = M(t);
        return L.has(o) || (o = t), [n, s, o];
    }
    function N(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        if ((i || ((i = n), (n = null)), k.test(e))) {
            const t = (t) =>
                function (e) {
                    if (!e.relatedTarget || (e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))) return t.call(this, e);
                };
            n ? (n = t(n)) : (i = t(i));
        }
        const [o, r, a] = I(e, i, n),
            l = D(t),
            c = l[a] || (l[a] = {}),
            h = S(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = x(r, e.replace(w, "")),
            u = o
                ? (function (t, e, i) {
                      return function n(s) {
                          const o = t.querySelectorAll(e);
                          for (let { target: r } = s; r && r !== this; r = r.parentNode) for (let a = o.length; a--; ) if (o[a] === r) return (s.delegateTarget = r), n.oneOff && P.off(t, s.type, e, i), i.apply(r, [s]);
                          return null;
                      };
                  })(t, i, n)
                : (function (t, e) {
                      return function i(n) {
                          return (n.delegateTarget = t), i.oneOff && P.off(t, n.type, e), e.apply(t, [n]);
                      };
                  })(t, i);
        (u.delegationSelector = o ? i : null), (u.originalHandler = r), (u.oneOff = s), (u.uidEvent = d), (c[d] = u), t.addEventListener(a, u, o);
    }
    function j(t, e, i, n, s) {
        const o = S(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function M(t) {
        return (t = t.replace(E, "")), C[t] || t;
    }
    const P = {
            on(t, e, i, n) {
                N(t, e, i, n, !1);
            },
            one(t, e, i, n) {
                N(t, e, i, n, !0);
            },
            off(t, e, i, n) {
                if ("string" != typeof e || !t) return;
                const [s, o, r] = I(e, i, n),
                    a = r !== e,
                    l = D(t),
                    c = e.startsWith(".");
                if (void 0 !== o) {
                    if (!l || !l[r]) return;
                    return void j(t, l, r, o, s ? i : null);
                }
                c &&
                    Object.keys(l).forEach((i) => {
                        !(function (t, e, i, n) {
                            const s = e[i] || {};
                            Object.keys(s).forEach((o) => {
                                if (o.includes(n)) {
                                    const n = s[o];
                                    j(t, e, i, n.originalHandler, n.delegationSelector);
                                }
                            });
                        })(t, l, i, e.slice(1));
                    });
                const h = l[r] || {};
                Object.keys(h).forEach((i) => {
                    const n = i.replace(A, "");
                    if (!a || e.includes(n)) {
                        const e = h[i];
                        j(t, l, r, e.originalHandler, e.delegationSelector);
                    }
                });
            },
            trigger(t, e, i) {
                if ("string" != typeof e || !t) return null;
                const n = p(),
                    s = M(e),
                    o = e !== s,
                    r = L.has(s);
                let a,
                    l = !0,
                    c = !0,
                    h = !1,
                    d = null;
                return (
                    o && n && ((a = n.Event(e, i)), n(t).trigger(a), (l = !a.isPropagationStopped()), (c = !a.isImmediatePropagationStopped()), (h = a.isDefaultPrevented())),
                    r ? ((d = document.createEvent("HTMLEvents")), d.initEvent(s, l, !0)) : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
                    void 0 !== i &&
                        Object.keys(i).forEach((t) => {
                            Object.defineProperty(d, t, { get: () => i[t] });
                        }),
                    h && d.preventDefault(),
                    c && t.dispatchEvent(d),
                    d.defaultPrevented && void 0 !== a && a.preventDefault(),
                    d
                );
            },
        },
        H = new Map();
    var R = {
        set(t, e, i) {
            H.has(t) || H.set(t, new Map());
            const n = H.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
        },
        get: (t, e) => (H.has(t) && H.get(t).get(e)) || null,
        remove(t, e) {
            if (!H.has(t)) return;
            const i = H.get(t);
            i.delete(e), 0 === i.size && H.delete(t);
        },
    };
    class B {
        constructor(t) {
            (t = a(t)) && ((this._element = t), R.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            R.remove(this._element, this.constructor.DATA_KEY),
                P.off(this._element, this.constructor.EVENT_KEY),
                Object.getOwnPropertyNames(this).forEach((t) => {
                    this[t] = null;
                });
        }
        _queueCallback(t, e, i = !0) {
            v(t, e, i);
        }
        static getInstance(t) {
            return R.get(t, this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.0.2";
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        static get DATA_KEY() {
            return "bs." + this.NAME;
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY;
        }
    }
    class W extends B {
        static get NAME() {
            return "alert";
        }
        close(t) {
            const e = t ? this._getRootElement(t) : this._element,
                i = this._triggerCloseEvent(e);
            null === i || i.defaultPrevented || this._removeElement(e);
        }
        _getRootElement(t) {
            return s(t) || t.closest(".alert");
        }
        _triggerCloseEvent(t) {
            return P.trigger(t, "close.bs.alert");
        }
        _removeElement(t) {
            t.classList.remove("show");
            const e = t.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(t), t, e);
        }
        _destroyElement(t) {
            t.remove(), P.trigger(t, "closed.bs.alert");
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = W.getOrCreateInstance(this);
                "close" === t && e[t](this);
            });
        }
        static handleDismiss(t) {
            return function (e) {
                e && e.preventDefault(), t.close(this);
            };
        }
    }
    P.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', W.handleDismiss(new W())), _(W);
    class q extends B {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = q.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    function z(t) {
        return "true" === t || ("false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t));
    }
    function $(t) {
        return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
    }
    P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (t) => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        q.getOrCreateInstance(e).toggle();
    }),
        _(q);
    const U = {
            setDataAttribute(t, e, i) {
                t.setAttribute("data-bs-" + $(e), i);
            },
            removeDataAttribute(t, e) {
                t.removeAttribute("data-bs-" + $(e));
            },
            getDataAttributes(t) {
                if (!t) return {};
                const e = {};
                return (
                    Object.keys(t.dataset)
                        .filter((t) => t.startsWith("bs"))
                        .forEach((i) => {
                            let n = i.replace(/^bs/, "");
                            (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)), (e[n] = z(t.dataset[i]));
                        }),
                    e
                );
            },
            getDataAttribute: (t, e) => z(t.getAttribute("data-bs-" + $(e))),
            offset(t) {
                const e = t.getBoundingClientRect();
                return { top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft };
            },
            position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
        },
        F = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        V = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        K = "next",
        X = "prev",
        Y = "left",
        Q = "right",
        G = { ArrowLeft: Q, ArrowRight: Y };
    class Z extends B {
        constructor(e, i) {
            super(e),
                (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(i)),
                (this._indicatorsElement = t.findOne(".carousel-indicators", this._element)),
                (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                (this._pointerEvent = Boolean(window.PointerEvent)),
                this._addEventListeners();
        }
        static get Default() {
            return F;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(K);
        }
        nextWhenVisible() {
            !document.hidden && c(this._element) && this.next();
        }
        prev() {
            this._slide(X);
        }
        pause(e) {
            e || (this._isPaused = !0), t.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
        }
        cycle(t) {
            t || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval), (this._interval = null)),
                this._config && this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
        }
        to(e) {
            this._activeElement = t.findOne(".active.carousel-item", this._element);
            const i = this._getItemIndex(this._activeElement);
            if (e > this._items.length - 1 || e < 0) return;
            if (this._isSliding) return void P.one(this._element, "slid.bs.carousel", () => this.to(e));
            if (i === e) return this.pause(), void this.cycle();
            const n = e > i ? K : X;
            this._slide(n, this._items[e]);
        }
        _getConfig(t) {
            return (t = { ...F, ...U.getDataAttributes(this._element), ...("object" == typeof t ? t : {}) }), l("carousel", t, V), t;
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e && this._slide(e > 0 ? Q : Y);
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
                "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)), P.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
                this._config.touch && this._touchSupported && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const e = (t) => {
                    !this._pointerEvent || ("pen" !== t.pointerType && "touch" !== t.pointerType) ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : (this.touchStartX = t.clientX);
                },
                i = (t) => {
                    this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX;
                },
                n = (t) => {
                    !this._pointerEvent || ("pen" !== t.pointerType && "touch" !== t.pointerType) || (this.touchDeltaX = t.clientX - this.touchStartX),
                        this._handleSwipe(),
                        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout((t) => this.cycle(t), 500 + this._config.interval)));
                };
            t.find(".carousel-item img", this._element).forEach((t) => {
                P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
            }),
                this._pointerEvent
                    ? (P.on(this._element, "pointerdown.bs.carousel", (t) => e(t)), P.on(this._element, "pointerup.bs.carousel", (t) => n(t)), this._element.classList.add("pointer-event"))
                    : (P.on(this._element, "touchstart.bs.carousel", (t) => e(t)), P.on(this._element, "touchmove.bs.carousel", (t) => i(t)), P.on(this._element, "touchend.bs.carousel", (t) => n(t)));
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = G[t.key];
            e && (t.preventDefault(), this._slide(e));
        }
        _getItemIndex(e) {
            return (this._items = e && e.parentNode ? t.find(".carousel-item", e.parentNode) : []), this._items.indexOf(e);
        }
        _getItemByOrder(t, e) {
            const i = t === K;
            return y(this._items, e, i, this._config.wrap);
        }
        _triggerSlideEvent(e, i) {
            const n = this._getItemIndex(e),
                s = this._getItemIndex(t.findOne(".active.carousel-item", this._element));
            return P.trigger(this._element, "slide.bs.carousel", { relatedTarget: e, direction: i, from: s, to: n });
        }
        _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
                const i = t.findOne(".active", this._indicatorsElement);
                i.classList.remove("active"), i.removeAttribute("aria-current");
                const n = t.find("[data-bs-target]", this._indicatorsElement);
                for (let t = 0; t < n.length; t++)
                    if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                        n[t].classList.add("active"), n[t].setAttribute("aria-current", "true");
                        break;
                    }
            }
        }
        _updateInterval() {
            const e = this._activeElement || t.findOne(".active.carousel-item", this._element);
            if (!e) return;
            const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            i ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = i)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
        }
        _slide(e, i) {
            const n = this._directionToOrder(e),
                s = t.findOne(".active.carousel-item", this._element),
                o = this._getItemIndex(s),
                r = i || this._getItemByOrder(n, s),
                a = this._getItemIndex(r),
                l = Boolean(this._interval),
                c = n === K,
                h = c ? "carousel-item-start" : "carousel-item-end",
                d = c ? "carousel-item-next" : "carousel-item-prev",
                u = this._orderToDirection(n);
            if (r && r.classList.contains("active")) return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(r, u).defaultPrevented) return;
            if (!s || !r) return;
            (this._isSliding = !0), l && this.pause(), this._setActiveIndicatorElement(r), (this._activeElement = r);
            const p = () => {
                P.trigger(this._element, "slid.bs.carousel", { relatedTarget: r, direction: u, from: o, to: a });
            };
            if (this._element.classList.contains("slide")) {
                r.classList.add(d), f(r), s.classList.add(h), r.classList.add(h);
                const t = () => {
                    r.classList.remove(h, d), r.classList.add("active"), s.classList.remove("active", d, h), (this._isSliding = !1), setTimeout(p, 0);
                };
                this._queueCallback(t, s, !0);
            } else s.classList.remove("active"), r.classList.add("active"), (this._isSliding = !1), p();
            l && this.cycle();
        }
        _directionToOrder(t) {
            return [Q, Y].includes(t) ? (g() ? (t === Y ? X : K) : t === Y ? K : X) : t;
        }
        _orderToDirection(t) {
            return [K, X].includes(t) ? (g() ? (t === X ? Y : Q) : t === X ? Q : Y) : t;
        }
        static carouselInterface(t, e) {
            const i = Z.getOrCreateInstance(t, e);
            let { _config: n } = i;
            "object" == typeof e && (n = { ...n, ...e });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                i[s]();
            } else n.interval && n.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(t) {
            return this.each(function () {
                Z.carouselInterface(this, t);
            });
        }
        static dataApiClickHandler(t) {
            const e = s(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = { ...U.getDataAttributes(e), ...U.getDataAttributes(this) },
                n = this.getAttribute("data-bs-slide-to");
            n && (i.interval = !1), Z.carouselInterface(e, i), n && Z.getInstance(e).to(n), t.preventDefault();
        }
    }
    P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler),
        P.on(window, "load.bs.carousel.data-api", () => {
            const e = t.find('[data-bs-ride="carousel"]');
            for (let t = 0, i = e.length; t < i; t++) Z.carouselInterface(e[t], Z.getInstance(e[t]));
        }),
        _(Z);
    const J = { toggle: !0, parent: "" },
        tt = { toggle: "boolean", parent: "(string|element)" };
    class et extends B {
        constructor(e, i) {
            super(e),
                (this._isTransitioning = !1),
                (this._config = this._getConfig(i)),
                (this._triggerArray = t.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`));
            const s = t.find('[data-bs-toggle="collapse"]');
            for (let e = 0, i = s.length; e < i; e++) {
                const i = s[e],
                    o = n(i),
                    r = t.find(o).filter((t) => t === this._element);
                null !== o && r.length && ((this._selector = o), this._triggerArray.push(i));
            }
            (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
        }
        static get Default() {
            return J;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._element.classList.contains("show") ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains("show")) return;
            let e, i;
            this._parent &&
                ((e = t.find(".show, .collapsing", this._parent).filter((t) => ("string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")))),
                0 === e.length && (e = null));
            const n = t.findOne(this._selector);
            if (e) {
                const t = e.find((t) => n !== t);
                if (((i = t ? et.getInstance(t) : null), i && i._isTransitioning)) return;
            }
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e &&
                e.forEach((t) => {
                    n !== t && et.collapseInterface(t, "hide"), i || R.set(t, "bs.collapse", null);
                });
            const s = this._getDimension();
            this._element.classList.remove("collapse"),
                this._element.classList.add("collapsing"),
                (this._element.style[s] = 0),
                this._triggerArray.length &&
                    this._triggerArray.forEach((t) => {
                        t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
                    }),
                this.setTransitioning(!0);
            const o = "scroll" + (s[0].toUpperCase() + s.slice(1));
            this._queueCallback(
                () => {
                    this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), (this._element.style[s] = ""), this.setTransitioning(!1), P.trigger(this._element, "shown.bs.collapse");
                },
                this._element,
                !0
            ),
                (this._element.style[s] = this._element[o] + "px");
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains("show")) return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            (this._element.style[t] = this._element.getBoundingClientRect()[t] + "px"), f(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            const e = this._triggerArray.length;
            if (e > 0)
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t],
                        i = s(e);
                    i && !i.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
                }
            this.setTransitioning(!0),
                (this._element.style[t] = ""),
                this._queueCallback(
                    () => {
                        this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), P.trigger(this._element, "hidden.bs.collapse");
                    },
                    this._element,
                    !0
                );
        }
        setTransitioning(t) {
            this._isTransitioning = t;
        }
        _getConfig(t) {
            return ((t = { ...J, ...t }).toggle = Boolean(t.toggle)), l("collapse", t, tt), t;
        }
        _getDimension() {
            return this._element.classList.contains("width") ? "width" : "height";
        }
        _getParent() {
            let { parent: e } = this._config;
            e = a(e);
            const i = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
            return (
                t.find(i, e).forEach((t) => {
                    const e = s(t);
                    this._addAriaAndCollapsedClass(e, [t]);
                }),
                e
            );
        }
        _addAriaAndCollapsedClass(t, e) {
            if (!t || !e.length) return;
            const i = t.classList.contains("show");
            e.forEach((t) => {
                i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i);
            });
        }
        static collapseInterface(t, e) {
            let i = et.getInstance(t);
            const n = { ...J, ...U.getDataAttributes(t), ...("object" == typeof e && e ? e : {}) };
            if ((!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new et(t, n)), "string" == typeof e)) {
                if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        }
        static jQueryInterface(t) {
            return this.each(function () {
                et.collapseInterface(this, t);
            });
        }
    }
    P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (e) {
        ("A" === e.target.tagName || (e.delegateTarget && "A" === e.delegateTarget.tagName)) && e.preventDefault();
        const i = U.getDataAttributes(this),
            s = n(this);
        t.find(s).forEach((t) => {
            const e = et.getInstance(t);
            let n;
            e ? (null === e._parent && "string" == typeof i.parent && ((e._config.parent = i.parent), (e._parent = e._getParent())), (n = "toggle")) : (n = i), et.collapseInterface(t, n);
        });
    }),
        _(et);
    var it = "top",
        nt = "bottom",
        st = "right",
        ot = "left",
        rt = [it, nt, st, ot],
        at = rt.reduce(function (t, e) {
            return t.concat([e + "-start", e + "-end"]);
        }, []),
        lt = [].concat(rt, ["auto"]).reduce(function (t, e) {
            return t.concat([e, e + "-start", e + "-end"]);
        }, []),
        ct = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    function ht(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function dt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
        }
        return t;
    }
    function ut(t) {
        return t instanceof dt(t).Element || t instanceof Element;
    }
    function ft(t) {
        return t instanceof dt(t).HTMLElement || t instanceof HTMLElement;
    }
    function pt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof dt(t).ShadowRoot || t instanceof ShadowRoot);
    }
    var mt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                ft(s) &&
                    ht(s) &&
                    (Object.assign(s.style, i),
                    Object.keys(n).forEach(function (t) {
                        var e = n[t];
                        !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                    }));
            });
        },
        effect: function (t) {
            var e = t.state,
                i = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
            return (
                Object.assign(e.elements.popper.style, i.popper),
                (e.styles = i),
                e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function () {
                    Object.keys(e.elements).forEach(function (t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
                                return (t[e] = ""), t;
                            }, {});
                        ft(n) &&
                            ht(n) &&
                            (Object.assign(n.style, o),
                            Object.keys(s).forEach(function (t) {
                                n.removeAttribute(t);
                            }));
                    });
                }
            );
        },
        requires: ["computeStyles"],
    };
    function gt(t) {
        return t.split("-")[0];
    }
    function _t(t) {
        var e = t.getBoundingClientRect();
        return { width: e.width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top };
    }
    function bt(t) {
        var e = _t(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), { x: t.offsetLeft, y: t.offsetTop, width: i, height: n };
    }
    function vt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && pt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            } while (n);
        }
        return !1;
    }
    function yt(t) {
        return dt(t).getComputedStyle(t);
    }
    function wt(t) {
        return ["table", "td", "th"].indexOf(ht(t)) >= 0;
    }
    function Et(t) {
        return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function At(t) {
        return "html" === ht(t) ? t : t.assignedSlot || t.parentNode || (pt(t) ? t.host : null) || Et(t);
    }
    function Tt(t) {
        return ft(t) && "fixed" !== yt(t).position ? t.offsetParent : null;
    }
    function Ot(t) {
        for (var e = dt(t), i = Tt(t); i && wt(i) && "static" === yt(i).position; ) i = Tt(i);
        return i && ("html" === ht(i) || ("body" === ht(i) && "static" === yt(i).position))
            ? e
            : i ||
                  (function (t) {
                      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                      if (-1 !== navigator.userAgent.indexOf("Trident") && ft(t) && "fixed" === yt(t).position) return null;
                      for (var i = At(t); ft(i) && ["html", "body"].indexOf(ht(i)) < 0; ) {
                          var n = yt(i);
                          if (
                              "none" !== n.transform ||
                              "none" !== n.perspective ||
                              "paint" === n.contain ||
                              -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                              (e && "filter" === n.willChange) ||
                              (e && n.filter && "none" !== n.filter)
                          )
                              return i;
                          i = i.parentNode;
                      }
                      return null;
                  })(t) ||
                  e;
    }
    function Ct(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }
    var kt = Math.max,
        Lt = Math.min,
        xt = Math.round;
    function Dt(t, e, i) {
        return kt(t, Lt(e, i));
    }
    function St(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
    }
    function It(t, e) {
        return e.reduce(function (e, i) {
            return (e[i] = t), e;
        }, {});
    }
    var Nt = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e,
                    i = t.state,
                    n = t.name,
                    s = t.options,
                    o = i.elements.arrow,
                    r = i.modifiersData.popperOffsets,
                    a = gt(i.placement),
                    l = Ct(a),
                    c = [ot, st].indexOf(a) >= 0 ? "height" : "width";
                if (o && r) {
                    var h = (function (t, e) {
                            return St("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t) ? t : It(t, rt));
                        })(s.padding, i),
                        d = bt(o),
                        u = "y" === l ? it : ot,
                        f = "y" === l ? nt : st,
                        p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                        m = r[l] - i.rects.reference[l],
                        g = Ot(o),
                        _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
                        b = p / 2 - m / 2,
                        v = h[u],
                        y = _ - d[c] - h[f],
                        w = _ / 2 - d[c] / 2 + b,
                        E = Dt(v, w, y),
                        A = l;
                    i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
                }
            },
            effect: function (t) {
                var e = t.state,
                    i = t.options.element,
                    n = void 0 === i ? "[data-popper-arrow]" : i;
                null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && vt(e.elements.popper, n) && (e.elements.arrow = n);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
        },
        jt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Mt(t) {
        var e,
            i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.offsets,
            r = t.position,
            a = t.gpuAcceleration,
            l = t.adaptive,
            c = t.roundOffsets,
            h =
                !0 === c
                    ? (function (t) {
                          var e = t.x,
                              i = t.y,
                              n = window.devicePixelRatio || 1;
                          return { x: xt(xt(e * n) / n) || 0, y: xt(xt(i * n) / n) || 0 };
                      })(o)
                    : "function" == typeof c
                    ? c(o)
                    : o,
            d = h.x,
            u = void 0 === d ? 0 : d,
            f = h.y,
            p = void 0 === f ? 0 : f,
            m = o.hasOwnProperty("x"),
            g = o.hasOwnProperty("y"),
            _ = ot,
            b = it,
            v = window;
        if (l) {
            var y = Ot(i),
                w = "clientHeight",
                E = "clientWidth";
            y === dt(i) && "static" !== yt((y = Et(i))).position && ((w = "scrollHeight"), (E = "scrollWidth")),
                (y = y),
                s === it && ((b = nt), (p -= y[w] - n.height), (p *= a ? 1 : -1)),
                s === ot && ((_ = st), (u -= y[E] - n.width), (u *= a ? 1 : -1));
        }
        var A,
            T = Object.assign({ position: r }, l && jt);
        return a
            ? Object.assign({}, T, (((A = {})[b] = g ? "0" : ""), (A[_] = m ? "0" : ""), (A.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)"), A))
            : Object.assign({}, T, (((e = {})[b] = g ? p + "px" : ""), (e[_] = m ? u + "px" : ""), (e.transform = ""), e));
    }
    var Pt = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = i.gpuAcceleration,
                    s = void 0 === n || n,
                    o = i.adaptive,
                    r = void 0 === o || o,
                    a = i.roundOffsets,
                    l = void 0 === a || a,
                    c = { placement: gt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s };
                null != e.modifiersData.popperOffsets &&
                    (e.styles.popper = Object.assign({}, e.styles.popper, Mt(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: l })))),
                    null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Mt(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))),
                    (e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement }));
            },
            data: {},
        },
        Ht = { passive: !0 },
        Rt = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (t) {
                var e = t.state,
                    i = t.instance,
                    n = t.options,
                    s = n.scroll,
                    o = void 0 === s || s,
                    r = n.resize,
                    a = void 0 === r || r,
                    l = dt(e.elements.popper),
                    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                return (
                    o &&
                        c.forEach(function (t) {
                            t.addEventListener("scroll", i.update, Ht);
                        }),
                    a && l.addEventListener("resize", i.update, Ht),
                    function () {
                        o &&
                            c.forEach(function (t) {
                                t.removeEventListener("scroll", i.update, Ht);
                            }),
                            a && l.removeEventListener("resize", i.update, Ht);
                    }
                );
            },
            data: {},
        },
        Bt = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function Wt(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return Bt[t];
        });
    }
    var qt = { start: "end", end: "start" };
    function zt(t) {
        return t.replace(/start|end/g, function (t) {
            return qt[t];
        });
    }
    function $t(t) {
        var e = dt(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function Ut(t) {
        return _t(Et(t)).left + $t(t).scrollLeft;
    }
    function Ft(t) {
        var e = yt(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Vt(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = (function t(e) {
                return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : ft(e) && Ft(e) ? e : t(At(e));
            })(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = dt(n),
            r = s ? [o].concat(o.visualViewport || [], Ft(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Vt(At(r)));
    }
    function Kt(t) {
        return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
    }
    function Xt(t, e) {
        return "viewport" === e
            ? Kt(
                  (function (t) {
                      var e = dt(t),
                          i = Et(t),
                          n = e.visualViewport,
                          s = i.clientWidth,
                          o = i.clientHeight,
                          r = 0,
                          a = 0;
                      return n && ((s = n.width), (o = n.height), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((r = n.offsetLeft), (a = n.offsetTop))), { width: s, height: o, x: r + Ut(t), y: a };
                  })(t)
              )
            : ft(e)
            ? (function (t) {
                  var e = _t(t);
                  return (
                      (e.top = e.top + t.clientTop),
                      (e.left = e.left + t.clientLeft),
                      (e.bottom = e.top + t.clientHeight),
                      (e.right = e.left + t.clientWidth),
                      (e.width = t.clientWidth),
                      (e.height = t.clientHeight),
                      (e.x = e.left),
                      (e.y = e.top),
                      e
                  );
              })(e)
            : Kt(
                  (function (t) {
                      var e,
                          i = Et(t),
                          n = $t(t),
                          s = null == (e = t.ownerDocument) ? void 0 : e.body,
                          o = kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                          r = kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                          a = -n.scrollLeft + Ut(t),
                          l = -n.scrollTop;
                      return "rtl" === yt(s || i).direction && (a += kt(i.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: r, x: a, y: l };
                  })(Et(t))
              );
    }
    function Yt(t) {
        return t.split("-")[1];
    }
    function Qt(t) {
        var e,
            i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? gt(s) : null,
            r = s ? Yt(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case it:
                e = { x: a, y: i.y - n.height };
                break;
            case nt:
                e = { x: a, y: i.y + i.height };
                break;
            case st:
                e = { x: i.x + i.width, y: l };
                break;
            case ot:
                e = { x: i.x - n.width, y: l };
                break;
            default:
                e = { x: i.x, y: i.y };
        }
        var c = o ? Ct(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case "start":
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case "end":
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function Gt(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.boundary,
            r = void 0 === o ? "clippingParents" : o,
            a = i.rootBoundary,
            l = void 0 === a ? "viewport" : a,
            c = i.elementContext,
            h = void 0 === c ? "popper" : c,
            d = i.altBoundary,
            u = void 0 !== d && d,
            f = i.padding,
            p = void 0 === f ? 0 : f,
            m = St("number" != typeof p ? p : It(p, rt)),
            g = "popper" === h ? "reference" : "popper",
            _ = t.elements.reference,
            b = t.rects.popper,
            v = t.elements[u ? g : h],
            y = (function (t, e, i) {
                var n =
                        "clippingParents" === e
                            ? (function (t) {
                                  var e = Vt(At(t)),
                                      i = ["absolute", "fixed"].indexOf(yt(t).position) >= 0 && ft(t) ? Ot(t) : t;
                                  return ut(i)
                                      ? e.filter(function (t) {
                                            return ut(t) && vt(t, i) && "body" !== ht(t);
                                        })
                                      : [];
                              })(t)
                            : [].concat(e),
                    s = [].concat(n, [i]),
                    o = s[0],
                    r = s.reduce(function (e, i) {
                        var n = Xt(t, i);
                        return (e.top = kt(n.top, e.top)), (e.right = Lt(n.right, e.right)), (e.bottom = Lt(n.bottom, e.bottom)), (e.left = kt(n.left, e.left)), e;
                    }, Xt(t, o));
                return (r.width = r.right - r.left), (r.height = r.bottom - r.top), (r.x = r.left), (r.y = r.top), r;
            })(ut(v) ? v : v.contextElement || Et(t.elements.popper), r, l),
            w = _t(_),
            E = Qt({ reference: w, element: b, strategy: "absolute", placement: s }),
            A = Kt(Object.assign({}, b, E)),
            T = "popper" === h ? A : w,
            O = { top: y.top - T.top + m.top, bottom: T.bottom - y.bottom + m.bottom, left: y.left - T.left + m.left, right: T.right - y.right + m.right },
            C = t.modifiersData.offset;
        if ("popper" === h && C) {
            var k = C[s];
            Object.keys(O).forEach(function (t) {
                var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
                    i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e;
            });
        }
        return O;
    }
    function Zt(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? lt : l,
            h = Yt(n),
            d = h
                ? a
                    ? at
                    : at.filter(function (t) {
                          return Yt(t) === h;
                      })
                : rt,
            u = d.filter(function (t) {
                return c.indexOf(t) >= 0;
            });
        0 === u.length && (u = d);
        var f = u.reduce(function (e, i) {
            return (e[i] = Gt(t, { placement: i, boundary: s, rootBoundary: o, padding: r })[gt(i)]), e;
        }, {});
        return Object.keys(f).sort(function (t, e) {
            return f[t] - f[e];
        });
    }
    var Jt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (
                    var s = i.mainAxis,
                        o = void 0 === s || s,
                        r = i.altAxis,
                        a = void 0 === r || r,
                        l = i.fallbackPlacements,
                        c = i.padding,
                        h = i.boundary,
                        d = i.rootBoundary,
                        u = i.altBoundary,
                        f = i.flipVariations,
                        p = void 0 === f || f,
                        m = i.allowedAutoPlacements,
                        g = e.options.placement,
                        _ = gt(g),
                        b =
                            l ||
                            (_ !== g && p
                                ? (function (t) {
                                      if ("auto" === gt(t)) return [];
                                      var e = Wt(t);
                                      return [zt(t), e, zt(e)];
                                  })(g)
                                : [Wt(g)]),
                        v = [g].concat(b).reduce(function (t, i) {
                            return t.concat("auto" === gt(i) ? Zt(e, { placement: i, boundary: h, rootBoundary: d, padding: c, flipVariations: p, allowedAutoPlacements: m }) : i);
                        }, []),
                        y = e.rects.reference,
                        w = e.rects.popper,
                        E = new Map(),
                        A = !0,
                        T = v[0],
                        O = 0;
                    O < v.length;
                    O++
                ) {
                    var C = v[O],
                        k = gt(C),
                        L = "start" === Yt(C),
                        x = [it, nt].indexOf(k) >= 0,
                        D = x ? "width" : "height",
                        S = Gt(e, { placement: C, boundary: h, rootBoundary: d, altBoundary: u, padding: c }),
                        I = x ? (L ? st : ot) : L ? nt : it;
                    y[D] > w[D] && (I = Wt(I));
                    var N = Wt(I),
                        j = [];
                    if (
                        (o && j.push(S[k] <= 0),
                        a && j.push(S[I] <= 0, S[N] <= 0),
                        j.every(function (t) {
                            return t;
                        }))
                    ) {
                        (T = C), (A = !1);
                        break;
                    }
                    E.set(C, j);
                }
                if (A)
                    for (
                        var M = function (t) {
                                var e = v.find(function (e) {
                                    var i = E.get(e);
                                    if (i)
                                        return i.slice(0, t).every(function (t) {
                                            return t;
                                        });
                                });
                                if (e) return (T = e), "break";
                            },
                            P = p ? 3 : 1;
                        P > 0 && "break" !== M(P);
                        P--
                    );
                e.placement !== T && ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
    };
    function te(t, e, i) {
        return void 0 === i && (i = { x: 0, y: 0 }), { top: t.top - e.height - i.y, right: t.right - e.width + i.x, bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x };
    }
    function ee(t) {
        return [it, st, nt, ot].some(function (e) {
            return t[e] >= 0;
        });
    }
    var ie = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = Gt(e, { elementContext: "reference" }),
                    a = Gt(e, { altBoundary: !0 }),
                    l = te(r, n),
                    c = te(a, s, o),
                    h = ee(l),
                    d = ee(c);
                (e.modifiersData[i] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: h, hasPopperEscaped: d }),
                    (e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": h, "data-popper-escaped": d }));
            },
        },
        ne = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = lt.reduce(function (t, i) {
                        return (
                            (t[i] = (function (t, e, i) {
                                var n = gt(t),
                                    s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
                                    o = "function" == typeof i ? i(Object.assign({}, e, { placement: t })) : i,
                                    r = o[0],
                                    a = o[1];
                                return (r = r || 0), (a = (a || 0) * s), [ot, st].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a };
                            })(i, e.rects, o)),
                            t
                        );
                    }, {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets && ((e.modifiersData.popperOffsets.x += l), (e.modifiersData.popperOffsets.y += c)), (e.modifiersData[n] = r);
            },
        },
        se = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = Qt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
            },
            data: {},
        },
        oe = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    g = Gt(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: h }),
                    _ = gt(e.placement),
                    b = Yt(e.placement),
                    v = !b,
                    y = Ct(_),
                    w = "x" === y ? "y" : "x",
                    E = e.modifiersData.popperOffsets,
                    A = e.rects.reference,
                    T = e.rects.popper,
                    O = "function" == typeof m ? m(Object.assign({}, e.rects, { placement: e.placement })) : m,
                    C = { x: 0, y: 0 };
                if (E) {
                    if (o || a) {
                        var k = "y" === y ? it : ot,
                            L = "y" === y ? nt : st,
                            x = "y" === y ? "height" : "width",
                            D = E[y],
                            S = E[y] + g[k],
                            I = E[y] - g[L],
                            N = f ? -T[x] / 2 : 0,
                            j = "start" === b ? A[x] : T[x],
                            M = "start" === b ? -T[x] : -A[x],
                            P = e.elements.arrow,
                            H = f && P ? bt(P) : { width: 0, height: 0 },
                            R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                            B = R[k],
                            W = R[L],
                            q = Dt(0, A[x], H[x]),
                            z = v ? A[x] / 2 - N - q - B - O : j - q - B - O,
                            $ = v ? -A[x] / 2 + N + q + W + O : M + q + W + O,
                            U = e.elements.arrow && Ot(e.elements.arrow),
                            F = U ? ("y" === y ? U.clientTop || 0 : U.clientLeft || 0) : 0,
                            V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                            K = E[y] + z - V - F,
                            X = E[y] + $ - V;
                        if (o) {
                            var Y = Dt(f ? Lt(S, K) : S, D, f ? kt(I, X) : I);
                            (E[y] = Y), (C[y] = Y - D);
                        }
                        if (a) {
                            var Q = "x" === y ? it : ot,
                                G = "x" === y ? nt : st,
                                Z = E[w],
                                J = Z + g[Q],
                                tt = Z - g[G],
                                et = Dt(f ? Lt(J, K) : J, Z, f ? kt(tt, X) : tt);
                            (E[w] = et), (C[w] = et - Z);
                        }
                    }
                    e.modifiersData[n] = C;
                }
            },
            requiresIfExists: ["offset"],
        };
    function re(t, e, i) {
        void 0 === i && (i = !1);
        var n,
            s,
            o = Et(e),
            r = _t(t),
            a = ft(e),
            l = { scrollLeft: 0, scrollTop: 0 },
            c = { x: 0, y: 0 };
        return (
            (a || (!a && !i)) &&
                (("body" !== ht(e) || Ft(o)) && (l = (n = e) !== dt(n) && ft(n) ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop } : $t(n)), ft(e) ? (((c = _t(e)).x += e.clientLeft), (c.y += e.clientTop)) : o && (c.x = Ut(o))),
            { x: r.left + l.scrollLeft - c.x, y: r.top + l.scrollTop - c.y, width: r.width, height: r.height }
        );
    }
    var ae = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function le() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function ce(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? ae : s;
        return function (t, e, i) {
            void 0 === i && (i = o);
            var s,
                r,
                a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ae, o), modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {} },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function (i) {
                        d(), (a.options = Object.assign({}, o, a.options, i)), (a.scrollParents = { reference: ut(t) ? Vt(t) : t.contextElement ? Vt(t.contextElement) : [], popper: Vt(e) });
                        var s,
                            r,
                            c = (function (t) {
                                var e = (function (t) {
                                    var e = new Map(),
                                        i = new Set(),
                                        n = [];
                                    return (
                                        t.forEach(function (t) {
                                            e.set(t.name, t);
                                        }),
                                        t.forEach(function (t) {
                                            i.has(t.name) ||
                                                (function t(s) {
                                                    i.add(s.name),
                                                        [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (n) {
                                                            if (!i.has(n)) {
                                                                var s = e.get(n);
                                                                s && t(s);
                                                            }
                                                        }),
                                                        n.push(s);
                                                })(t);
                                        }),
                                        n
                                    );
                                })(t);
                                return ct.reduce(function (t, i) {
                                    return t.concat(
                                        e.filter(function (t) {
                                            return t.phase === i;
                                        })
                                    );
                                }, []);
                            })(
                                ((s = [].concat(n, a.options.modifiers)),
                                (r = s.reduce(function (t, e) {
                                    var i = t[e.name];
                                    return (t[e.name] = i ? Object.assign({}, i, e, { options: Object.assign({}, i.options, e.options), data: Object.assign({}, i.data, e.data) }) : e), t;
                                }, {})),
                                Object.keys(r).map(function (t) {
                                    return r[t];
                                }))
                            );
                        return (
                            (a.orderedModifiers = c.filter(function (t) {
                                return t.enabled;
                            })),
                            a.orderedModifiers.forEach(function (t) {
                                var e = t.name,
                                    i = t.options,
                                    n = void 0 === i ? {} : i,
                                    s = t.effect;
                                if ("function" == typeof s) {
                                    var o = s({ state: a, name: e, instance: h, options: n });
                                    l.push(o || function () {});
                                }
                            }),
                            h.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (le(e, i)) {
                                (a.rects = { reference: re(e, Ot(i), "fixed" === a.options.strategy), popper: bt(i) }),
                                    (a.reset = !1),
                                    (a.placement = a.options.placement),
                                    a.orderedModifiers.forEach(function (t) {
                                        return (a.modifiersData[t.name] = Object.assign({}, t.data));
                                    });
                                for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o && (a = o({ state: a, options: l, name: d, instance: h }) || a);
                                    } else (a.reset = !1), (n = -1);
                            }
                        }
                    },
                    update:
                        ((s = function () {
                            return new Promise(function (t) {
                                h.forceUpdate(), t(a);
                            });
                        }),
                        function () {
                            return (
                                r ||
                                    (r = new Promise(function (t) {
                                        Promise.resolve().then(function () {
                                            (r = void 0), t(s());
                                        });
                                    })),
                                r
                            );
                        }),
                    destroy: function () {
                        d(), (c = !0);
                    },
                };
            if (!le(t, e)) return h;
            function d() {
                l.forEach(function (t) {
                    return t();
                }),
                    (l = []);
            }
            return (
                h.setOptions(i).then(function (t) {
                    !c && i.onFirstUpdate && i.onFirstUpdate(t);
                }),
                h
            );
        };
    }
    var he = ce(),
        de = ce({ defaultModifiers: [Rt, se, Pt, mt] }),
        ue = ce({ defaultModifiers: [Rt, se, Pt, mt, ne, Jt, oe, Nt, ie] }),
        fe = Object.freeze({
            __proto__: null,
            popperGenerator: ce,
            detectOverflow: Gt,
            createPopperBase: he,
            createPopper: ue,
            createPopperLite: de,
            top: it,
            bottom: nt,
            right: st,
            left: ot,
            auto: "auto",
            basePlacements: rt,
            start: "start",
            end: "end",
            clippingParents: "clippingParents",
            viewport: "viewport",
            popper: "popper",
            reference: "reference",
            variationPlacements: at,
            placements: lt,
            beforeRead: "beforeRead",
            read: "read",
            afterRead: "afterRead",
            beforeMain: "beforeMain",
            main: "main",
            afterMain: "afterMain",
            beforeWrite: "beforeWrite",
            write: "write",
            afterWrite: "afterWrite",
            modifierPhases: ct,
            applyStyles: mt,
            arrow: Nt,
            computeStyles: Pt,
            eventListeners: Rt,
            flip: Jt,
            hide: ie,
            offset: ne,
            popperOffsets: se,
            preventOverflow: oe,
        });
    const pe = new RegExp("ArrowUp|ArrowDown|Escape"),
        me = g() ? "top-end" : "top-start",
        ge = g() ? "top-start" : "top-end",
        _e = g() ? "bottom-end" : "bottom-start",
        be = g() ? "bottom-start" : "bottom-end",
        ve = g() ? "left-start" : "right-start",
        ye = g() ? "right-start" : "left-start",
        we = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 },
        Ee = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
    class Ae extends B {
        constructor(t, e) {
            super(t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
        }
        static get Default() {
            return we;
        }
        static get DefaultType() {
            return Ee;
        }
        static get NAME() {
            return "dropdown";
        }
        toggle() {
            h(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
        }
        show() {
            if (h(this._element) || this._menu.classList.contains("show")) return;
            const t = Ae.getParentFromElement(this._element),
                e = { relatedTarget: this._element };
            if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? (e = t) : r(this._config.reference) ? (e = a(this._config.reference)) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const i = this._getPopperConfig(),
                        n = i.modifiers.find((t) => "applyStyles" === t.name && !1 === t.enabled);
                    (this._popper = ue(e, this._menu, i)), n && U.setDataAttribute(this._menu, "popper", "static");
                }
                "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t) => P.on(t, "mouseover", u)),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.toggle("show"),
                    this._element.classList.toggle("show"),
                    P.trigger(this._element, "shown.bs.dropdown", e);
            }
        }
        hide() {
            if (h(this._element) || !this._menu.classList.contains("show")) return;
            const t = { relatedTarget: this._element };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
        }
        _addEventListeners() {
            P.on(this._element, "click.bs.dropdown", (t) => {
                t.preventDefault(), this.toggle();
            });
        }
        _completeHide(t) {
            P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
                ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t) => P.off(t, "mouseover", u)),
                this._popper && this._popper.destroy(),
                this._menu.classList.remove("show"),
                this._element.classList.remove("show"),
                this._element.setAttribute("aria-expanded", "false"),
                U.removeDataAttribute(this._menu, "popper"),
                P.trigger(this._element, "hidden.bs.dropdown", t));
        }
        _getConfig(t) {
            if (
                ((t = { ...this.constructor.Default, ...U.getDataAttributes(this._element), ...t }),
                l("dropdown", t, this.constructor.DefaultType),
                "object" == typeof t.reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
            )
                throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return t;
        }
        _getMenuElement() {
            return t.next(this._element, ".dropdown-menu")[0];
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ve;
            if (t.classList.contains("dropstart")) return ye;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? (e ? ge : me) : e ? be : _e;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t) => Number.parseInt(t, 10)) : "function" == typeof t ? (e) => t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    { name: "preventOverflow", options: { boundary: this._config.boundary } },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return "static" === this._config.display && (t.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...t, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig) };
        }
        _selectMenuItem({ key: e, target: i }) {
            const n = t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
            n.length && y(n, i, "ArrowDown" === e, !n.includes(i)).focus();
        }
        static dropdownInterface(t, e) {
            const i = Ae.getOrCreateInstance(t, e);
            if ("string" == typeof e) {
                if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        }
        static jQueryInterface(t) {
            return this.each(function () {
                Ae.dropdownInterface(this, t);
            });
        }
        static clearMenus(e) {
            if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))) return;
            const i = t.find('[data-bs-toggle="dropdown"]');
            for (let t = 0, n = i.length; t < n; t++) {
                const n = Ae.getInstance(i[t]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._element.classList.contains("show")) continue;
                const s = { relatedTarget: n._element };
                if (e) {
                    const t = e.composedPath(),
                        i = t.includes(n._menu);
                    if (t.includes(n._element) || ("inside" === n._config.autoClose && !i) || ("outside" === n._config.autoClose && i)) continue;
                    if (n._menu.contains(e.target) && (("keyup" === e.type && "Tab" === e.key) || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                    "click" === e.type && (s.clickEvent = e);
                }
                n._completeHide(s);
            }
        }
        static getParentFromElement(t) {
            return s(t) || t.parentNode;
        }
        static dataApiKeydownHandler(e) {
            if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || ("Escape" !== e.key && (("ArrowDown" !== e.key && "ArrowUp" !== e.key) || e.target.closest(".dropdown-menu"))) : !pe.test(e.key)) return;
            const i = this.classList.contains("show");
            if (!i && "Escape" === e.key) return;
            if ((e.preventDefault(), e.stopPropagation(), h(this))) return;
            const n = () => (this.matches('[data-bs-toggle="dropdown"]') ? this : t.prev(this, '[data-bs-toggle="dropdown"]')[0]);
            return "Escape" === e.key
                ? (n().focus(), void Ae.clearMenus())
                : "ArrowUp" === e.key || "ArrowDown" === e.key
                ? (i || n().click(), void Ae.getInstance(n())._selectMenuItem(e))
                : void ((i && "Space" !== e.key) || Ae.clearMenus());
        }
    }
    P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Ae.dataApiKeydownHandler),
        P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Ae.dataApiKeydownHandler),
        P.on(document, "click.bs.dropdown.data-api", Ae.clearMenus),
        P.on(document, "keyup.bs.dropdown.data-api", Ae.clearMenus),
        P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
            t.preventDefault(), Ae.dropdownInterface(this);
        }),
        _(Ae);
    class Te {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
                this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (e) => e + t),
                this._setElementAttributes(".sticky-top", "marginRight", (e) => e - t);
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t)[e];
                t.style[e] = i(Number.parseFloat(s)) + "px";
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, "paddingRight"),
                this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"),
                this._resetElementAttributes(".sticky-top", "marginRight");
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && U.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
                const i = U.getDataAttribute(t, e);
                void 0 === i ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), (t.style[e] = i));
            });
        }
        _applyManipulationCallback(e, i) {
            r(e) ? i(e) : t.find(e, this._element).forEach(i);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const Oe = { isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null },
        Ce = { isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" };
    class ke {
        constructor(t) {
            (this._config = this._getConfig(t)), (this._isAppended = !1), (this._element = null);
        }
        show(t) {
            this._config.isVisible
                ? (this._append(),
                  this._config.isAnimated && f(this._getElement()),
                  this._getElement().classList.add("show"),
                  this._emulateAnimation(() => {
                      b(t);
                  }))
                : b(t);
        }
        hide(t) {
            this._config.isVisible
                ? (this._getElement().classList.remove("show"),
                  this._emulateAnimation(() => {
                      this.dispose(), b(t);
                  }))
                : b(t);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = "modal-backdrop"), this._config.isAnimated && t.classList.add("fade"), (this._element = t);
            }
            return this._element;
        }
        _getConfig(t) {
            return ((t = { ...Oe, ...("object" == typeof t ? t : {}) }).rootElement = a(t.rootElement)), l("backdrop", t, Ce), t;
        }
        _append() {
            this._isAppended ||
                (this._config.rootElement.appendChild(this._getElement()),
                P.on(this._getElement(), "mousedown.bs.backdrop", () => {
                    b(this._config.clickCallback);
                }),
                (this._isAppended = !0));
        }
        dispose() {
            this._isAppended && (P.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), (this._isAppended = !1));
        }
        _emulateAnimation(t) {
            v(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Le = { backdrop: !0, keyboard: !0, focus: !0 },
        xe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" };
    class De extends B {
        constructor(e, i) {
            super(e),
                (this._config = this._getConfig(i)),
                (this._dialog = t.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._isShown = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new Te());
        }
        static get Default() {
            return Le;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                this._isTransitioning ||
                P.trigger(this._element, "show.bs.modal", { relatedTarget: t }).defaultPrevented ||
                ((this._isShown = !0),
                this._isAnimated() && (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add("modal-open"),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                P.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (t) => this.hide(t)),
                P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                    P.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
                        t.target === this._element && (this._ignoreBackdropClick = !0);
                    });
                }),
                this._showBackdrop(() => this._showElement(t)));
        }
        hide(t) {
            if ((t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(), !this._isShown || this._isTransitioning)) return;
            if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const e = this._isAnimated();
            e && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                P.off(document, "focusin.bs.modal"),
                this._element.classList.remove("show"),
                P.off(this._element, "click.dismiss.bs.modal"),
                P.off(this._dialog, "mousedown.dismiss.bs.modal"),
                this._queueCallback(() => this._hideModal(), this._element, e);
        }
        dispose() {
            [window, this._dialog].forEach((t) => P.off(t, ".bs.modal")), this._backdrop.dispose(), super.dispose(), P.off(document, "focusin.bs.modal");
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new ke({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
        }
        _getConfig(t) {
            return (t = { ...Le, ...U.getDataAttributes(this._element), ...("object" == typeof t ? t : {}) }), l("modal", t, xe), t;
        }
        _showElement(e) {
            const i = this._isAnimated(),
                n = t.findOne(".modal-body", this._dialog);
            (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0),
                n && (n.scrollTop = 0),
                i && f(this._element),
                this._element.classList.add("show"),
                this._config.focus && this._enforceFocus(),
                this._queueCallback(
                    () => {
                        this._config.focus && this._element.focus(), (this._isTransitioning = !1), P.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
                    },
                    this._dialog,
                    i
                );
        }
        _enforceFocus() {
            P.off(document, "focusin.bs.modal"),
                P.on(document, "focusin.bs.modal", (t) => {
                    document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus();
                });
        }
        _setEscapeEvent() {
            this._isShown
                ? P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
                      this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition();
                  })
                : P.off(this._element, "keydown.dismiss.bs.modal");
        }
        _setResizeEvent() {
            this._isShown ? P.on(window, "resize.bs.modal", () => this._adjustDialog()) : P.off(window, "resize.bs.modal");
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, "hidden.bs.modal");
                });
        }
        _showBackdrop(t) {
            P.on(this._element, "click.dismiss.bs.modal", (t) => {
                this._ignoreBackdropClick ? (this._ignoreBackdropClick = !1) : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
            }),
                this._backdrop.show(t);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const { classList: t, scrollHeight: e, style: i } = this._element,
                n = e > document.documentElement.clientHeight;
            (!n && "hidden" === i.overflowY) ||
                t.contains("modal-static") ||
                (n || (i.overflowY = "hidden"),
                t.add("modal-static"),
                this._queueCallback(() => {
                    t.remove("modal-static"),
                        n ||
                            this._queueCallback(() => {
                                i.overflowY = "";
                            }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            ((!i && t && !g()) || (i && !t && g())) && (this._element.style.paddingLeft = e + "px"), ((i && !t && !g()) || (!i && t && g())) && (this._element.style.paddingRight = e + "px");
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const i = De.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
        const e = s(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            P.one(e, "show.bs.modal", (t) => {
                t.defaultPrevented ||
                    P.one(e, "hidden.bs.modal", () => {
                        c(this) && this.focus();
                    });
            }),
            De.getOrCreateInstance(e).toggle(this);
    }),
        _(De);
    const Se = { backdrop: !0, keyboard: !0, scroll: !1 },
        Ie = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
    class Ne extends B {
        constructor(t, e) {
            super(t), (this._config = this._getConfig(e)), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), this._addEventListeners();
        }
        static get NAME() {
            return "offcanvas";
        }
        static get Default() {
            return Se;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented ||
                ((this._isShown = !0),
                (this._element.style.visibility = "visible"),
                this._backdrop.show(),
                this._config.scroll || (new Te().hide(), this._enforceFocusOnElement(this._element)),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add("show"),
                this._queueCallback(
                    () => {
                        P.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t });
                    },
                    this._element,
                    !0
                ));
        }
        hide() {
            this._isShown &&
                (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
                    (P.off(document, "focusin.bs.offcanvas"),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.remove("show"),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.setAttribute("aria-hidden", !0),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                                (this._element.style.visibility = "hidden"),
                                this._config.scroll || new Te().reset(),
                                P.trigger(this._element, "hidden.bs.offcanvas");
                        },
                        this._element,
                        !0
                    )));
        }
        dispose() {
            this._backdrop.dispose(), super.dispose(), P.off(document, "focusin.bs.offcanvas");
        }
        _getConfig(t) {
            return (t = { ...Se, ...U.getDataAttributes(this._element), ...("object" == typeof t ? t : {}) }), l("offcanvas", t, Ie), t;
        }
        _initializeBackDrop() {
            return new ke({ isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
        }
        _enforceFocusOnElement(t) {
            P.off(document, "focusin.bs.offcanvas"),
                P.on(document, "focusin.bs.offcanvas", (e) => {
                    document === e.target || t === e.target || t.contains(e.target) || t.focus();
                }),
                t.focus();
        }
        _addEventListeners() {
            P.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()),
                P.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
                    this._config.keyboard && "Escape" === t.key && this.hide();
                });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Ne.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
        const i = s(this);
        if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this))) return;
        P.one(i, "hidden.bs.offcanvas", () => {
            c(this) && this.focus();
        });
        const n = t.findOne(".offcanvas.show");
        n && n !== i && Ne.getInstance(n).hide(), Ne.getOrCreateInstance(i).toggle(this);
    }),
        P.on(window, "load.bs.offcanvas.data-api", () => t.find(".offcanvas.show").forEach((t) => Ne.getOrCreateInstance(t).show())),
        _(Ne);
    const je = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Me = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        Pe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        He = (t, e) => {
            const i = t.nodeName.toLowerCase();
            if (e.includes(i)) return !je.has(i) || Boolean(Me.test(t.nodeValue) || Pe.test(t.nodeValue));
            const n = e.filter((t) => t instanceof RegExp);
            for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
            return !1;
        };
    function Re(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const n = new window.DOMParser().parseFromString(t, "text/html"),
            s = Object.keys(e),
            o = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, i = o.length; t < i; t++) {
            const i = o[t],
                n = i.nodeName.toLowerCase();
            if (!s.includes(n)) {
                i.remove();
                continue;
            }
            const r = [].concat(...i.attributes),
                a = [].concat(e["*"] || [], e[n] || []);
            r.forEach((t) => {
                He(t, a) || i.removeAttribute(t.nodeName);
            });
        }
        return n.body.innerHTML;
    }
    const Be = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        We = new Set(["sanitize", "allowList", "sanitizeFn"]),
        qe = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)",
        },
        ze = { AUTO: "auto", TOP: "top", RIGHT: g() ? "left" : "right", BOTTOM: "bottom", LEFT: g() ? "right" : "left" },
        $e = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            popperConfig: null,
        },
        Ue = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        };
    class Fe extends B {
        constructor(t, e) {
            if (void 0 === fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this._config = this._getConfig(e)), (this.tip = null), this._setListeners();
        }
        static get Default() {
            return $e;
        }
        static get NAME() {
            return "tooltip";
        }
        static get Event() {
            return Ue;
        }
        static get DefaultType() {
            return qe;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    (e._activeTrigger.click = !e._activeTrigger.click), e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
                } else {
                    if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                    this._enter(null, this);
                }
        }
        dispose() {
            clearTimeout(this._timeout), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = P.trigger(this._element, this.constructor.Event.SHOW),
                i = d(this._element),
                n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
            if (t.defaultPrevented || !n) return;
            const s = this.getTipElement(),
                o = e(this.constructor.NAME);
            s.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && s.classList.add("fade");
            const r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
                a = this._getAttachment(r);
            this._addAttachmentClass(a);
            const { container: l } = this._config;
            R.set(s, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(s), P.trigger(this._element, this.constructor.Event.INSERTED)),
                this._popper ? this._popper.update() : (this._popper = ue(this._element, s, this._getPopperConfig(a))),
                s.classList.add("show");
            const c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
            c && s.classList.add(...c.split(" ")),
                "ontouchstart" in document.documentElement &&
                    [].concat(...document.body.children).forEach((t) => {
                        P.on(t, "mouseover", u);
                    });
            const h = this.tip.classList.contains("fade");
            this._queueCallback(
                () => {
                    const t = this._hoverState;
                    (this._hoverState = null), P.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this);
                },
                this.tip,
                h
            );
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if (P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t.classList.remove("show"),
                "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t) => P.off(t, "mouseover", u)),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1);
            const e = this.tip.classList.contains("fade");
            this._queueCallback(
                () => {
                    this._isWithActiveTrigger() ||
                        ("show" !== this._hoverState && t.remove(),
                        this._cleanTipClass(),
                        this._element.removeAttribute("aria-describedby"),
                        P.trigger(this._element, this.constructor.Event.HIDDEN),
                        this._popper && (this._popper.destroy(), (this._popper = null)));
                },
                this.tip,
                e
            ),
                (this._hoverState = "");
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            return (t.innerHTML = this._config.template), (this.tip = t.children[0]), this.tip;
        }
        setContent() {
            const e = this.getTipElement();
            this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show");
        }
        setElementContent(t, e) {
            if (null !== t)
                return r(e)
                    ? ((e = a(e)), void (this._config.html ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e)) : (t.textContent = e.textContent)))
                    : void (this._config.html ? (this._config.sanitize && (e = Re(e, this._config.allowList, this._config.sanitizeFn)), (t.innerHTML = e)) : (t.textContent = e));
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t;
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
        }
        _initializeOnDelegatedTarget(t, e) {
            const i = this.constructor.DATA_KEY;
            return (e = e || R.get(t.delegateTarget, i)) || ((e = new this.constructor(t.delegateTarget, this._getDelegateConfig())), R.set(t.delegateTarget, i, e)), e;
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t) => Number.parseInt(t, 10)) : "function" == typeof t ? (e) => t(e, this._element) : t;
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                    { name: "offset", options: { offset: this._getOffset() } },
                    { name: "preventOverflow", options: { boundary: this._config.boundary } },
                    { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                    { name: "onChange", enabled: !0, phase: "afterWrite", fn: (t) => this._handlePopperPlacementChange(t) },
                ],
                onFirstUpdate: (t) => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t);
                },
            };
            return { ...e, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig) };
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
        }
        _getAttachment(t) {
            return ze[t.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t) => {
                if ("click" === t) P.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t) => this.toggle(t));
                else if ("manual" !== t) {
                    const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        i = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    P.on(this._element, e, this._config.selector, (t) => this._enter(t)), P.on(this._element, i, this._config.selector, (t) => this._leave(t));
                }
            }),
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
                this._config.selector ? (this._config = { ...this._config, trigger: "manual", selector: "" }) : this._fixTitle();
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) &&
                (this._element.setAttribute("data-bs-original-title", t || ""),
                !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
                this._element.setAttribute("title", ""));
        }
        _enter(t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
                t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
                e.getTipElement().classList.contains("show") || "show" === e._hoverState
                    ? (e._hoverState = "show")
                    : (clearTimeout(e._timeout),
                      (e._hoverState = "show"),
                      e._config.delay && e._config.delay.show
                          ? (e._timeout = setTimeout(() => {
                                "show" === e._hoverState && e.show();
                            }, e._config.delay.show))
                          : e.show());
        }
        _leave(t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
                t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)),
                e._isWithActiveTrigger() ||
                    (clearTimeout(e._timeout),
                    (e._hoverState = "out"),
                    e._config.delay && e._config.delay.hide
                        ? (e._timeout = setTimeout(() => {
                              "out" === e._hoverState && e.hide();
                          }, e._config.delay.hide))
                        : e.hide());
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
            return !1;
        }
        _getConfig(t) {
            const e = U.getDataAttributes(this._element);
            return (
                Object.keys(e).forEach((t) => {
                    We.has(t) && delete e[t];
                }),
                ((t = { ...this.constructor.Default, ...e, ...("object" == typeof t && t ? t : {}) }).container = !1 === t.container ? document.body : a(t.container)),
                "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                l("tooltip", t, this.constructor.DefaultType),
                t.sanitize && (t.template = Re(t.template, t.allowList, t.sanitizeFn)),
                t
            );
        }
        _getDelegateConfig() {
            const t = {};
            if (this._config) for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t;
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = t.getAttribute("class").match(Be);
            null !== e && e.length > 0 && e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
        }
        _handlePopperPlacementChange(t) {
            const { state: e } = t;
            e && ((this.tip = e.elements.popper), this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Fe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    _(Fe);
    const Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Ke = {
            ...Fe.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        },
        Xe = { ...Fe.DefaultType, content: "(string|element|function)" },
        Ye = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        };
    class Qe extends Fe {
        static get Default() {
            return Ke;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return Ye;
        }
        static get DefaultType() {
            return Xe;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        getTipElement() {
            return this.tip || ((this.tip = super.getTipElement()), this.getTitle() || t.findOne(".popover-header", this.tip).remove(), this._getContent() || t.findOne(".popover-body", this.tip).remove()), this.tip;
        }
        setContent() {
            const e = this.getTipElement();
            this.setElementContent(t.findOne(".popover-header", e), this.getTitle());
            let i = this._getContent();
            "function" == typeof i && (i = i.call(this._element)), this.setElementContent(t.findOne(".popover-body", e), i), e.classList.remove("fade", "show");
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this._config.content;
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = t.getAttribute("class").match(Ve);
            null !== e && e.length > 0 && e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Qe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    _(Qe);
    const Ge = { offset: 10, method: "auto", target: "" },
        Ze = { offset: "number", method: "string", target: "(string|element)" };
    class Je extends B {
        constructor(t, e) {
            super(t),
                (this._scrollElement = "BODY" === this._element.tagName ? window : this._element),
                (this._config = this._getConfig(e)),
                (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
                this.refresh(),
                this._process();
        }
        static get Default() {
            return Ge;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            const e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                i = "auto" === this._config.method ? e : this._config.method,
                s = "position" === i ? this._getScrollTop() : 0;
            (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                t
                    .find(this._selector)
                    .map((e) => {
                        const o = n(e),
                            r = o ? t.findOne(o) : null;
                        if (r) {
                            const t = r.getBoundingClientRect();
                            if (t.width || t.height) return [U[i](r).top + s, o];
                        }
                        return null;
                    })
                    .filter((t) => t)
                    .sort((t, e) => t[0] - e[0])
                    .forEach((t) => {
                        this._offsets.push(t[0]), this._targets.push(t[1]);
                    });
        }
        dispose() {
            P.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
        }
        _getConfig(t) {
            if ("string" != typeof (t = { ...Ge, ...U.getDataAttributes(this._element), ...("object" == typeof t && t ? t : {}) }).target && r(t.target)) {
                let { id: i } = t.target;
                i || ((i = e("scrollspy")), (t.target.id = i)), (t.target = "#" + i);
            }
            return l("scrollspy", t, Ze), t;
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                i = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t);
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                for (let e = this._offsets.length; e--; ) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]);
            }
        }
        _activate(e) {
            (this._activeTarget = e), this._clear();
            const i = this._selector.split(",").map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
                n = t.findOne(i.join(","));
            n.classList.contains("dropdown-item")
                ? (t.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active"))
                : (n.classList.add("active"),
                  t.parents(n, ".nav, .list-group").forEach((e) => {
                      t.prev(e, ".nav-link, .list-group-item").forEach((t) => t.classList.add("active")),
                          t.prev(e, ".nav-item").forEach((e) => {
                              t.children(e, ".nav-link").forEach((t) => t.classList.add("active"));
                          });
                  })),
                P.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: e });
        }
        _clear() {
            t.find(this._selector)
                .filter((t) => t.classList.contains("active"))
                .forEach((t) => t.classList.remove("active"));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Je.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(window, "load.bs.scrollspy.data-api", () => {
        t.find('[data-bs-spy="scroll"]').forEach((t) => new Je(t));
    }),
        _(Je);
    class ti extends B {
        static get NAME() {
            return "tab";
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
            let e;
            const i = s(this._element),
                n = this._element.closest(".nav, .list-group");
            if (n) {
                const i = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";
                (e = t.find(i, n)), (e = e[e.length - 1]);
            }
            const o = e ? P.trigger(e, "hide.bs.tab", { relatedTarget: this._element }) : null;
            if (P.trigger(this._element, "show.bs.tab", { relatedTarget: e }).defaultPrevented || (null !== o && o.defaultPrevented)) return;
            this._activate(this._element, n);
            const r = () => {
                P.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }), P.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
            };
            i ? this._activate(i, i.parentNode, r) : r();
        }
        _activate(e, i, n) {
            const s = (!i || ("UL" !== i.nodeName && "OL" !== i.nodeName) ? t.children(i, ".active") : t.find(":scope > li > .active", i))[0],
                o = n && s && s.classList.contains("fade"),
                r = () => this._transitionComplete(e, s, n);
            s && o ? (s.classList.remove("show"), this._queueCallback(r, e, !0)) : r();
        }
        _transitionComplete(e, i, n) {
            if (i) {
                i.classList.remove("active");
                const e = t.findOne(":scope > .dropdown-menu .active", i.parentNode);
                e && e.classList.remove("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1);
            }
            e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f(e), e.classList.contains("fade") && e.classList.add("show");
            let s = e.parentNode;
            if ((s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu"))) {
                const i = e.closest(".dropdown");
                i && t.find(".dropdown-toggle", i).forEach((t) => t.classList.add("active")), e.setAttribute("aria-expanded", !0);
            }
            n && n();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ti.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), h(this) || ti.getOrCreateInstance(this).show();
    }),
        _(ti);
    const ei = { animation: "boolean", autohide: "boolean", delay: "number" },
        ii = { animation: !0, autohide: !0, delay: 5e3 };
    class ni extends B {
        constructor(t, e) {
            super(t), (this._config = this._getConfig(e)), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
        }
        static get DefaultType() {
            return ei;
        }
        static get Default() {
            return ii;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            P.trigger(this._element, "show.bs.toast").defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove("hide"),
                f(this._element),
                this._element.classList.add("showing"),
                this._queueCallback(
                    () => {
                        this._element.classList.remove("showing"), this._element.classList.add("show"), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
                    },
                    this._element,
                    this._config.animation
                ));
        }
        hide() {
            this._element.classList.contains("show") &&
                (P.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                    (this._element.classList.remove("show"),
                    this._queueCallback(
                        () => {
                            this._element.classList.add("hide"), P.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    )));
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose();
        }
        _getConfig(t) {
            return (t = { ...ii, ...U.getDataAttributes(this._element), ...("object" == typeof t && t ? t : {}) }), l("toast", t, this.constructor.DefaultType), t;
        }
        _maybeScheduleHide() {
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            P.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()),
                P.on(this._element, "mouseover.bs.toast", (t) => this._onInteraction(t, !0)),
                P.on(this._element, "mouseout.bs.toast", (t) => this._onInteraction(t, !1)),
                P.on(this._element, "focusin.bs.toast", (t) => this._onInteraction(t, !0)),
                P.on(this._element, "focusout.bs.toast", (t) => this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ni.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return _(ni), { Alert: W, Button: q, Carousel: Z, Collapse: et, Dropdown: Ae, Modal: De, Offcanvas: Ne, Popover: Qe, ScrollSpy: Je, Tab: ti, Toast: ni, Tooltip: Fe };
});
