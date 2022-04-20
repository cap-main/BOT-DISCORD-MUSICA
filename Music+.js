const { lutimes } = require("fs");

(window.webpackJsonp = window.webpackJsonp || []).push([
            [4], {
                1: function(e, t, n) {
                    "use strict";
                    n.d(t, "k", (function() {
                            return y
                        })),
                        n.d(t, "m", (function() {
                            return x
                        })),
                        n.d(t, "l", (function() {
                            return w
                        })),
                        n.d(t, "e", (function() {
                            return k
                        })),
                        n.d(t, "b", (function() {
                            return O
                        })),
                        n.d(t, "s", (function() {
                            return j
                        })),
                        n.d(t, "g", (function() {
                            return C
                        })),
                        n.d(t, "h", (function() {
                            return $
                        })),
                        n.d(t, "d", (function() {
                            return S
                        })),
                        n.d(t, "r", (function() {
                            return P
                        })),
                        n.d(t, "j", (function() {
                            return R
                        })),
                        n.d(t, "t", (function() {
                            return L
                        })),
                        n.d(t, "o", (function() {
                            return D
                        })),
                        n.d(t, "q", (function() {
                            return T
                        })),
                        n.d(t, "f", (function() {
                            return I
                        })),
                        n.d(t, "c", (function() {
                            return N
                        })),
                        n.d(t, "i", (function() {
                            return M
                        })),
                        n.d(t, "p", (function() {
                            return B
                        })),
                        n.d(t, "a", (function() {
                            return G
                        })),
                        n.d(t, "v", (function() {
                            return W
                        })),
                        n.d(t, "n", (function() {
                            return V
                        })),
                        n.d(t, "u", (function() {
                            return Y
                        }));
                    n(19),
                        n(37),
                        n(45),
                        n(46);
                    var r = n(29),
                        o = n(7),
                        c = n(15),
                        l = n(10),
                        f = (n(30),
                            n(35),
                            n(129),
                            n(16),
                            n(27),
                            n(55),
                            n(36),
                            n(39),
                            n(40),
                            n(28),
                            n(70),
                            n(105),
                            n(127),
                            n(149),
                            n(116),
                            n(117),
                            n(266),
                            n(56),
                            n(38),
                            n(2)),
                        d = n(23);

                    function h(object, e) {
                        var t = Object.keys(object);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(object);
                            e && (n = n.filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                                }))),
                                t.push.apply(t, n)
                        }
                        return t
                    }

                    function m(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? h(Object(source), !0).forEach((function(t) {
                                Object(c.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }

                    function v(e, t) {
                        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!n) {
                            if (Array.isArray(e) || (n = function(e, t) {
                                    if (!e)
                                        return;
                                    if ("string" == typeof e)
                                        return _(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n)
                                        return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                        return _(e, t)
                                }(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, c = !0,
                            l = !1;
                        return {
                            s: function() {
                                n = n.call(e)
                            },
                            n: function() {
                                var e = n.next();
                                return c = e.done,
                                    e
                            },
                            e: function(e) {
                                l = !0,
                                    o = e
                            },
                            f: function() {
                                try {
                                    c || null == n.return || n.return()
                                } finally {
                                    if (l)
                                        throw o
                                }
                            }
                        }
                    }

                    function _(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var i = 0, n = new Array(t); i < t; i++)
                            n[i] = e[i];
                        return n
                    }

                    function y(e) {
                        f.a.config.errorHandler && f.a.config.errorHandler(e)
                    }

                    function x(e) {
                        return e.then((function(e) {
                            return e.default || e
                        }))
                    }

                    function w(e) {
                        return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
                    }

                    function k(e) {
                        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = e.$children || [],
                            o = v(r);
                        try {
                            for (o.s(); !(t = o.n()).done;) {
                                var c = t.value;
                                c.$fetch ? n.push(c) : c.$children && k(c, n)
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return n
                    }

                    function O(e, t) {
                        if (t || !e.options.__hasNuxtData) {
                            var n = e.options._originDataFn || e.options.data || function() {
                                return {}
                            };
                            e.options._originDataFn = n,
                                e.options.data = function() {
                                    var data = n.call(this, this);
                                    return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]),
                                        m(m({}, data), t)
                                },
                                e.options.__hasNuxtData = !0,
                                e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
                        }
                    }

                    function j(e) {
                        return e.options && e._Ctor === e || (e.options ? (e._Ctor = e,
                                e.extendOptions = e.options) : (e = f.a.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file)),
                            e
                    }

                    function C(e) {
                        var t = arguments.length > 1 && void 1 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 2 !== arguments[2] ? arguments[2] : "components";
                        return Array.prototype.concat.apply([], e.matched.map((function(e, r) {
                            return Object.keys(e[n]).map((function(o) {
                                return t && t.push(r),
                                    e[n][o]
                            }))
                        })))
                    }

                    function $(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return C(e, t, "instances")
                    }

                    function S(e, t) {
                        return Array.prototype.concat.apply([], e.matched.map((function(e, n) {
                            return Object.keys(e.components).reduce((function(r, o) {
                                return e.components[o] ? r.push(t(e.components[o], e.instances[o], e, o, n)) : delete e.components[o],
                                    r
                            }), [])
                        })))
                    }

                    function P(e, t) {
                        return Promise.all(S(e, function() {
                            var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r, o, c) {
                                var l, f;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if ("function" != typeof n || n.options) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.prev = 1,
                                                    e.next = 4,
                                                    n();
                                            case 4:
                                                n = e.sent,
                                                    e.next = 11;
                                                break;
                                            case 7:
                                                throw e.prev = 7,
                                                    e.t0 = e.catch(1),
                                                    e.t0 && "ChunkLoadError" === e.t0.name && "undefined" != typeof window && window.sessionStorage && (l = Date.now(),
                                                        (!(f = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || f + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l),
                                                            window.location.reload(!0))),
                                                    e.t0;
                                            case 11:
                                                return o.components[c] = n = j(n),
                                                    e.abrupt("return", "function" == typeof t ? t(n, r, o, c) : n);
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                }), e, null, [
                                    [1, 7]
                                ])
                            })));
                            return function(t, n, r, o) {
                                return e.apply(this, arguments)
                            }
                        }()))
                    }

                    function R(e) {
                        return E.apply(this, arguments)
                    }

                    function E() {
                        return (E = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if (t) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4,
                                                P(t);
                                        case 4:
                                            return e.abrupt("return", m(m({}, t), {}, {
                                                meta: C(t).map((function(e, n) {
                                                    return m(m({}, e.options.meta), (t.matched[n] || {}).meta)
                                                }))
                                            }));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function L(e, t) {
                        return A.apply(this, arguments)
                    }

                    function A() {
                        return (A = Object(o.a)(regeneratorRuntime.mark((function e(t, n) {
                            var o, c, f, h;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return t.context || (t.context = {
                                                        isStatic: !1,
                                                        isDev: !1,
                                                        isHMR: !1,
                                                        app: t,
                                                        store: t.store,
                                                        payload: n.payload,
                                                        error: n.error,
                                                        base: t.router.options.base,
                                                        env: {
                                                            clientID: "518070897295228959"
                                                        }
                                                    },
                                                    n.req && (t.context.req = n.req),
                                                    n.res && (t.context.res = n.res),
                                                    n.ssrContext && (t.context.ssrContext = n.ssrContext),
                                                    t.context.redirect = function(e, path, n) {
                                                        if (e) {
                                                            t.context._redirected = !0;
                                                            var o = Object(r.a)(path);
                                                            if ("number" == typeof e || "undefined" !== o && "object" !== o || (n = path || {},
                                                                    path = e,
                                                                    o = Object(r.a)(path),
                                                                    e = 302),
                                                                "object" === o && (path = t.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                                                                throw path = Object(d.e)(path, n),
                                                                    window.location.replace(path),
                                                                    new Error("ERR_REDIRECT");
                                                            t.context.next({
                                                                path: path,
                                                                query: n,
                                                                status: e
                                                            })
                                                        }
                                                    },
                                                    t.context.nuxtState = window.__NUXT__),
                                                e.next = 3,
                                                Promise.all([R(n.route), R(n.from)]);
                                        case 3:
                                            o = e.sent,
                                                c = Object(l.a)(o, 2),
                                                f = c[0],
                                                h = c[1],
                                                n.route && (t.context.route = f),
                                                n.from && (t.context.from = h),
                                                t.context.next = n.next,
                                                t.context._redirected = !1,
                                                t.context._errored = !1,
                                                t.context.isHMR = !1,
                                                t.context.params = t.context.route.params || {},
                                                t.context.query = t.context.route.query || {};
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function D(e, t) {
                        return !e.length || t._redirected || t._errored ? Promise.resolve() : T(e[0], t).then((function() {
                            return D(e.slice(1), t)
                        }))
                    }

                    function T(e, t) {
                        var n;
                        return (n = 2 === e.length ? new Promise((function(n) {
                            e(t, (function(e, data) {
                                e && t.error(e),
                                    n(data = data || {})
                            }))
                        })) : e(t)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
                    }

                    function I(base, e) {
                        if ("hash" === e)
                            return window.location.hash.replace(/^#\//, "");
                        base = decodeURI(base).slice(0, -1);
                        var path = decodeURI(window.location.pathname);
                        base && path.startsWith(base) && (path = path.slice(base.length));
                        var t = (path || "/") + window.location.search + window.location.hash;
                        return Object(d.d)(t)
                    }

                    function N(e, t) {
                        return function(e, t) {
                            for (var n = new Array(e.length), i = 0; i < e.length; i++)
                                "object" === Object(r.a)(e[i]) && (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", K(t)));
                            return function(t, r) {
                                for (var path = "", data = t || {}, o = (r || {}).pretty ? z : encodeURIComponent, c = 0; c < e.length; c++) {
                                    var l = e[c];
                                    if ("string" != typeof l) {
                                        var f = data[l.name || "pathMatch"],
                                            d = void 0;
                                        if (null == f) {
                                            if (l.optional) {
                                                l.partial && (path += l.prefix);
                                                continue
                                            }
                                            throw new TypeError('Expected "' + l.name + '" to be defined')
                                        }
                                        if (Array.isArray(f)) {
                                            if (!l.repeat)
                                                throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                                            if (0 === f.length) {
                                                if (l.optional)
                                                    continue;
                                                throw new TypeError('Expected "' + l.name + '" to not be empty')
                                            }
                                            for (var h = 0; h < f.length; h++) {
                                                if (d = o(f[h]), !n[c].test(d))
                                                    throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(d) + "`");
                                                path += (0 === h ? l.prefix : l.delimiter) + d
                                            }
                                        } else {
                                            if (d = l.asterisk ? F(f) : o(f), !n[c].test(d))
                                                throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + d + '"');
                                            path += l.prefix + d
                                        }
                                    } else
                                        path += l
                                }
                                return path
                            }
                        }(function(e, t) {
                            var n, r = [],
                                o = 0,
                                c = 0,
                                path = "",
                                l = t && t.delimiter || "/";
                            for (; null != (n = U.exec(e));) {
                                var f = n[0],
                                    d = n[1],
                                    h = n.index;
                                if (path += e.slice(c, h),
                                    c = h + f.length,
                                    d)
                                    path += d[1];
                                else {
                                    var m = e[c],
                                        v = n[2],
                                        _ = n[3],
                                        y = n[4],
                                        x = n[5],
                                        w = n[6],
                                        k = n[7];
                                    path && (r.push(path),
                                        path = "");
                                    var O = null != v && null != m && m !== v,
                                        j = "+" === w || "*" === w,
                                        C = "?" === w || "*" === w,
                                        $ = n[2] || l,
                                        pattern = y || x;
                                    r.push({
                                        name: _ || o++,
                                        prefix: v || "",
                                        delimiter: $,
                                        optional: C,
                                        repeat: j,
                                        partial: O,
                                        asterisk: Boolean(k),
                                        pattern: pattern ? X(pattern) : k ? ".*" : "[^" + H($) + "]+?"
                                    })
                                }
                            }
                            c < e.length && (path += e.substr(c));
                            path && r.push(path);
                            return r
                        }(e, t), t)
                    }

                    function M(e, t) {
                        var n = {},
                            r = m(m({}, e), t);
                        for (var o in r)
                            String(e[o]) !== String(t[o]) && (n[o] = !0);
                        return n
                    }

                    function B(e) {
                        var t;
                        if (e.message || "string" == typeof e)
                            t = e.message || e;
                        else
                            try {
                                t = JSON.stringify(e, null, 2)
                            } catch (n) {
                                t = "[".concat(e.constructor.name, "]")
                            }
                        return m(m({}, e), {}, {
                            message: t,
                            statusCode: e.statusCode || e.status || e.response && e.response.status || 500
                        })
                    }
                    window.onNuxtReadyCbs = [],
                        window.onNuxtReady = function(e) {
                            window.onNuxtReadyCbs.push(e)
                        };
                    var U = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

                    function z(e, t) {
                        var n = t ? /[?#]/g : /[/?#]/g;
                        return encodeURI(e).replace(n, (function(e) {
                            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                        }))
                    }

                    function F(e) {
                        return z(e, !0)
                    }

                    function H(e) {
                        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
                    }

                    function X(e) {
                        return e.replace(/([=!:$/()])/g, "\\$1")
                    }

                    function K(e) {
                        return e && e.sensitive ? "" : "i"
                    }

                    function G(e, t, n) {
                        e.$options[t] || (e.$options[t] = []),
                            e.$options[t].includes(n) || e.$options[t].push(n)
                    }
                    var W = d.c,
                        V = (d.g,
                            d.b);

                    function Y(e) {
                        try {
                            window.history.scrollRestoration = e
                        } catch (e) {}
                    }
                },
                124: function(e, t, n) {
                    "use strict";
                    n(56),
                        n(38),
                        n(55),
                        n(35),
                        n(16),
                        n(28),
                        n(27),
                        n(19),
                        n(37),
                        n(39),
                        n(40);
                    var r = n(2);

                    function o(e, t) {
                        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!n) {
                            if (Array.isArray(e) || (n = function(e, t) {
                                    if (!e)
                                        return;
                                    if ("string" == typeof e)
                                        return c(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n)
                                        return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                        return c(e, t)
                                }(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, l = !0,
                            f = !1;
                        return {
                            s: function() {
                                n = n.call(e)
                            },
                            n: function() {
                                var e = n.next();
                                return l = e.done,
                                    e
                            },
                            e: function(e) {
                                f = !0,
                                    o = e
                            },
                            f: function() {
                                try {
                                    l || null == n.return || n.return()
                                } finally {
                                    if (f)
                                        throw o
                                }
                            }
                        }
                    }

                    function c(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var i = 0, n = new Array(t); i < t; i++)
                            n[i] = e[i];
                        return n
                    }
                    var l = window.requestIdleCallback || function(e) {
                            var t = Date.now();
                            return setTimeout((function() {
                                e({
                                    didTimeout: !1,
                                    timeRemaining: function() {
                                        return Math.max(0, 50 - (Date.now() - t))
                                    }
                                })
                            }), 1)
                        },
                        f = window.cancelIdleCallback || function(e) {
                            clearTimeout(e)
                        },
                        d = window.IntersectionObserver && new window.IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                var t = e.intersectionRatio,
                                    link = e.target;
                                t <= 0 || !link.__prefetch || link.__prefetch()
                            }))
                        }));
                    t.a = {
                        name: "NuxtLink",
                        extends: r.a.component("RouterLink"),
                        props: {
                            prefetch: {
                                type: Boolean,
                                default: !0
                            },
                            noPrefetch: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        mounted: function() {
                            this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                                timeout: 2e3
                            }))
                        },
                        beforeDestroy: function() {
                            f(this.handleId),
                                this.__observed && (d.unobserve(this.$el),
                                    delete this.$el.__prefetch)
                        },
                        methods: {
                            observe: function() {
                                d && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this),
                                    d.observe(this.$el),
                                    this.__observed = !0)
                            },
                            shouldPrefetch: function() {
                                return this.getPrefetchComponents().length > 0
                            },
                            canPrefetch: function() {
                                var e = navigator.connection;
                                return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                            },
                            getPrefetchComponents: function() {
                                return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(e) {
                                    return e.components.default
                                })).filter((function(e) {
                                    return "function" == typeof e && !e.options && !e.__prefetched
                                }))
                            },
                            prefetchLink: function() {
                                if (this.canPrefetch()) {
                                    d.unobserve(this.$el);
                                    var e, t = o(this.getPrefetchComponents());
                                    try {
                                        for (t.s(); !(e = t.n()).done;) {
                                            var n = e.value,
                                                r = n();
                                            r instanceof Promise && r.catch((function() {})),
                                                n.__prefetched = !0
                                        }
                                    } catch (e) {
                                        t.e(e)
                                    } finally {
                                        t.f()
                                    }
                                }
                            }
                        }
                    }
                },
                167: function(e, t, n) {
                    "use strict";
                    n(38);
                    var r = {
                            props: {
                                text: {
                                    type: String,
                                    required: !0
                                },
                                direction: {
                                    type: String,
                                    default: "bottom",
                                    validator: function(e) {
                                        return ["top", "bottom", "left", "right"].includes(e)
                                    }
                                },
                                disabled: {
                                    type: Boolean
                                }
                            },
                            data: function() {
                                return {
                                    active: !1,
                                    directionClass: "is-".concat(this.direction)
                                }
                            }
                        },
                        o = (n(286),
                            n(9)),
                        component = Object(o.a)(r, (function() {
                            var e = this,
                                t = e.$createElement;
                            return (e._self._c || t)("span", {
                                class: ["tooltip", e.directionClass, {
                                    "is-disabled": e.disabled
                                }],
                                attrs: {
                                    "aria-label": e.text,
                                    "data-text": e.text
                                }
                            }, [e._t("default")], 2)
                        }), [], !1, null, null, null);
                    t.a = component.exports
                },
                168: function(e, t, n) {
                    "use strict";
                    n.d(t, "a", (function() {
                        return o
                    }));
                    var r = n(10);
                    n(105),
                        n(97);

                    function o(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "png";
                        if (e.startsWith("https://discordapp.com/assets/") || e.startsWith("https://cdn.discordapp.com/embed/avatars"))
                            return e;
                        var o = e.match(/cdn.discordapp.com\/avatars\/([0-9]+)\/([^.]+)/),
                            c = Object(r.a)(o, 3),
                            l = c[1],
                            f = c[2];
                        if (!l || !f)
                            throw new Error("Unable to extract userID or hash from avatar ".concat(e));
                        return "https://cdn.discordapp.com/avatars/".concat(l, "/").concat(f, ".").concat(n, "?size=").concat(t)
                    }
                },
                187: function(e, t, n) {
                    var content = n(272);
                    content.__esModule && (content = content.default),
                        "string" == typeof content && (content = [
                            [e.i, content, ""]
                        ]),
                        content.locals && (e.exports = content.locals);
                    (0,
                        n(43).default)("625c4802", content, !0, {
                        sourceMap: !1
                    })
                },
                188: function(e, t, n) {
                    var content = n(274);
                    content.__esModule && (content = content.default),
                        "string" == typeof content && (content = [
                            [e.i, content, ""]
                        ]),
                        content.locals && (e.exports = content.locals);
                    (0,
                        n(43).default)("3191d5ad", content, !0, {
                        sourceMap: !1
                    })
                },
                189: function(e, t, n) {
                    var content = n(278);
                    content.__esModule && (content = content.default),
                        "string" == typeof content && (content = [
                            [e.i, content, ""]
                        ]),
                        content.locals && (e.exports = content.locals);
                    (0,
                        n(43).default)("89c2473c", content, !0, {
                        sourceMap: !1
                    })
                },
                191: function(e, t, n) {
                    var content = n(283);
                    content.__esModule && (content = content.default),
                        "string" == typeof content && (content = [
                            [e.i, content, ""]
                        ]),
                        content.locals && (e.exports = content.locals);
                    (0,
                        n(43).default)("83c1077c", content, !0, {
                        sourceMap: !1
                    })
                },
                192: function(e, t, n) {
                    var content = n(285);
                    content.__esModule && (content = content.default),
                        "string" == typeof content && (content = [
                            [e.i, content, ""]
                        ]),
                        content.locals && (e.exports = content.locals);
                    (0,
                        n(43).default)("1c78f610", content, !0, {
                        sourceMap: !1
                    })
                },
                193: function(e, t, n) {
                    var content = n(287);
                    content.__esModule && (content = content.default),
                        "string" == typeof content && (content = [
                            [e.i, content, ""]
                        ]),
                        content.locals && (e.exports = content.locals);
                    (0,
                        n(43).default)("05f785fc", content, !0, {
                        sourceMap: !1
                    })
                },
                194: function(e, t, n) {
                    var content = n(289);
                    content.__esModule && (content = content.default),
                        "string" == typeof content && (content = [
                            [e.i, content, ""]
                        ]),
                        content.locals && (e.exports = content.locals);
                    (0,
                        n(43).default)("5b161e22", content, !0, {
                        sourceMap: !1
                    })
                },
                195: function(e, t, n) {
                    var content = n(291);
                    content.__esModule && (content = content.default),
                        "string" == typeof content && (content = [
                            [e.i, content, ""]
                        ]),
                        content.locals && (e.exports = content.locals);
                    (0,
                        n(43).default)("932a8f60", content, !0, {
                        sourceMap: !1
                    })
                },
                196: function(e, t, n) {
                    var content = n(293);
                    content.__esModule && (content = content.default),
                        "string" == typeof content && (content = [
                            [e.i, content, ""]
                        ]),
                        content.locals && (e.exports = content.locals);
                    (0,
                        n(43).default)("34f7daee", content, !0, {
                        sourceMap: !1
                    })
                },
                214: function(e, t) {},
                218: function(e) {
                    e.exports = JSON.parse('{"meta":{"name":"English","code":"en","flag":"🇺🇸","dir":"ltr"},"common":{"search":"Search","no":"No","yes":"Yes","prefix":"Prefix:","website":"Website","about":"About","add":"Add","addBot":"Add a Bot","logout":"Logout","login":"Login","profile":"Profile","terms":"Terms","description":"Description","supportServer":"Support Server","sourceCode":"Source Code","servers":"Servers"},"home":{"header":"Welcome to Discord Bots!","searchBots":"Search bots…","imNotSure":"I\'m not sure…","consideration":"More for your consideration…","viewMore":"View more…"},"about":{"header":"About Discord Bots","contributors":"Contributors","wouldntBePossible":"Discord Bots wouldn\'t be possible without these awesome people!","noMoney":"Unlike some others, this list is intended to be completely free from monetary influences — we do not take any money to promote certain bots on the site. However, if a bot is reliably online and if its specified information is complete and of high quality, it will be given a boost compared to other bots.","aboutDbots":"This site is a list of publicly available Discord bots, intended to accompany the <a href=\\"https://discord.gg/0cDvIgU2voWn4BaD\\"><em>Discord Bots</em> Discord server</a>. The bots presented here are created and maintained by community members and serve all kinds of purposes. Use the search feature to find a bot you need, or if you can\'t find anything, try the <strong>#find-a-bot</strong> channel on the aforementioned Discord server!"},"login":{"header":"Logging You In","hangTight":"Just hang tight for a second.<br>If you aren\'t automatically redirected for whatever reason,","clickHere":"Click Here","loginErrorHeader":"Error trying to log in","tryAgain":"Click here to try again","unableToFetch":"Unable to fetch token from API. Response: {response}"},"logout":{"header":"Logging You Out","text":"This shouldn\'t take too long…"},"search":{"placeholder":"Search for some bots","noResults":"No results.","showingPage":"Showing page <b>{thisPage}</b> of <b>{lastPage}</b>","ascending":"Ascending","onlyOpenSource":"Show only open source bots","autoSearch":"Search as you type","botsShown":"{pageLower} – {pageUpper} out of {count}","searchTitle":"Search input","amount":{"title":"Amount to display per page","placeholder":"Amount"},"sort":{"placeholder":"Sort","title":"Value to sort results by","username":"Username","id":"ID","guildCount":"Guild Count","library":"Library","author":"Author"},"botLibrary":{"placeholder":"Bot Library","title":"Specific"}},"docs":{"endpoints":{"title":"Endpoints","description":"The API consists of several endpoints which you can interact with to obtain information about bots or post stats.","requestInformation":"Requests that take body data accept <code>application/json</code> and <code>application/x-www-form-urlencoded</code> formats. Otherwise, use query strings to narrow down your results.","prefixedWith":"All endpoints are prefixed with <code>{endpointPrefix}</code>."},"structures":"Structures","authentication":"Authentication","ratelimiting":"Ratelimiting","header":"API Documentation","text":"This page will document API endpoints, as well as provide your API token.","selectTopic":"Please select a topic."},"profile":{"noBots":"Nothing here… This ain\'t it boss.","viewProfile":"View {username}\'s profile on Discord Bots","unverifiedBots":"Unapproved Bots","bots":"Bots"},"bots":{"add":{"pageTitle":"Add A Bot","beforeYouSubmit":"Before you submit…","rightToRemove":"If we find that your bot fails to meet any of our guidelines, then we have a right to remove it from our website.","rules":{"addNotes":"If there\'s information you\'d like the bot approval helpers to see, add it using the command <code>dbots!setnote &lt;id&gt; &lt;information&gt;</code>.","checkPosition":"To check your bot\'s position in the approval \'queue\', use the command <code>dbots!pos &lt;id&gt;</code>.","dontPesterUs":"After submitting, don\'t pester mods or bot approval helpers about your bot. Doing so may make the process take even longer.","dontSubmitClones":"Make sure that you\'re submitting a bot that <em>you</em> made, not a clone.","followListingPolicy":"Please also make sure that your bot meets our <a href=\\"https://discord.bots.gg/terms#listing-policy\\" target=\\"_blank\\">listing policy</a>.","readInformation":"Please read everything in the #information channel.","remainInServer":"As written in our Listing Policy, you are required to be and remain in our server, otherwise your listing will be denied or removed."}},"view":{"status":"Status","owner":"Owner:","owners":"Owners:","library":"Library:","invite":"Invite this Bot"},"delete":{"header":"Delete Bot","areYouSure":"Are you sure you want to delete <b>{bot}</b>?","configSaved":"Your configuration will be saved in case you want to add it back in the future.","pageTitle":"Delete {bot}"},"notOwned":"You do not own that bot.","edit":{"pageTitle":"Editing {bot}"}},"botCard":{"unverified":"Unapproved","servers":"{servers} servers","invite":"Invite","delete":"Delete","edit":"Edit","noServers":"No servers","library":"Library","botIcon":"Bot icon"},"botForm":{"editBot":"Edit Bot","information":"Information","requiredFieldDenotion":"* required field","botId":{"placeholder":"Bot ID","description":"The user ID for your bot."},"clientId":{"description":"The client ID for your bot. Defaults to your user ID.","placeholder":"Client ID","note":"Note: in most cases, your bot and client ID will be the same. If you don\'t know what the difference is, don\'t fill out this field."},"prefix":{"description":"The prefix used to trigger your bot.","placeholder":"Prefix"},"helpCommand":{"description":"The command people should run in order to get help for your bot.","placeholder":"Help Command"},"overview":{"description":"A short overview of what your bot does.","placeholder":"Overview"},"botLibrary":{"placeholder":"Bot Library","description":"The code library your bot uses to connect to Discord."},"coOwners":"Co-owners:","coOwnerAddition":{"description":"ID of another person you want to have as an owner.","placeholder":"Enter an ID"},"botInvite":{"placeholder":"Invite URL","description":"Invite link to add your bot to servers."},"website":{"description":"Optional link for your bot\'s website"},"supportServer":{"description":"Optional link for your support server.","placeholder":"Support Server Invite"},"openSource":{"description":"Optional link for the source code of your bot if it\'s available.","placeholder":"Open Source Repository"},"submit":"Submit","description":{"extra":"uses <a href=\\"https://guides.github.com/features/mastering-markdown/\\" target=\\"_blank\\">Markdown</a> formatting, and some HTML<br /><small>Tip: <strong>two</strong> newlines are needed to make a line break!</small>"},"longDescription":{"description":"Long description for your bot. Go into a lot of detail here about the cool stuff your bot can do!","placeholder":"A very cool bot!"},"inlinePreview":"Inline Preview","ownerIsntCoOwner":"The owner cannot be a co-owner.","existingConfiguration":"An existing configuration for this bot has been found. Would you like to load it?","turkish":"This bot is only Turkish"},"cookies":{"banner":"We use cookies to keep you logged in. If you<br>don\'t like this, change your browser settings.<br>By using this site you agree to our <a href=\\"https://discord.bots.gg/terms\\">Terms</a>.","okay":"Okay"},"navbar":{"home":"Home","api":"API","noNotifications":"All good, no notifications!","notification":{"invite":{"body":"You\'ve been invited to be a co-owner of <b>{invite}</b>","accept":"Accept","decline":"Decline"}},"notifications":"Notifications","verification":"Approval","server":"Server","language":"Language"},"footer":{"blog":"Blog","builtWith":"Built with","and":"and","appeals":"Appeals","twitter":"Twitter"},"pagination":{"previous":"Previous page","next":"Next page"},"token":{"helper":"Helper Token","api":"API Token","reveal":"Reveal","invalidate":"Invalidate","error":"something went wrong :("},"endpoint":{"requiredAuthentication":"Required Authentication:","ratelimit":"Ratelimit:","queryParameters":"Query Parameters","requestBody":"Request Body","response":"Response","default":"Default","name":"Name","type":"Type"},"error":{"badRequest":"Bad request. Try again.","permissionDenied":"Permission denied.","apiDown":"API is down. Try again later.","serviceUnavailable":"Service is temporarily unavailable. Try again later.","internalServerError":"Something went wrong on our end. Try again later.","ratelimited":"Ratelimited. Wait a few seconds, then try again."},"markdown":{"untranslated":"There is currently no translation available for this page. Sorry!"}}')
                },
                223: function(e, t, n) {
                    "use strict";
                    var r = n(7),
                        o = (n(30),
                            n(16),
                            n(2)),
                        c = n(1),
                        l = window.__NUXT__;

                    function f() {
                        if (!this._hydrated)
                            return this.$fetch()
                    }

                    function d() {
                        if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
                            var e;
                            this._hydrated = !0,
                                this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                            var data = l.fetch[this._fetchKey];
                            if (data && data._error)
                                this.$fetchState.error = data._error;
                            else
                                for (var t in data)
                                    o.a.set(this.$data, t, data[t])
                        }
                    }

                    function h() {
                        var e = this;
                        return this._fetchPromise || (this._fetchPromise = m.call(this).then((function() {
                                delete e._fetchPromise
                            }))),
                            this._fetchPromise
                    }

                    function m() {
                        return v.apply(this, arguments)
                    }

                    function v() {
                        return (v = Object(r.a)(regeneratorRuntime.mark((function e() {
                            var t, n, r, o = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return this.$nuxt.nbFetching++,
                                                this.$fetchState.pending = !0,
                                                this.$fetchState.error = null,
                                                this._hydrated = !1,
                                                t = null,
                                                n = Date.now(),
                                                e.prev = 6,
                                                e.next = 9,
                                                this.$options.fetch.call(this);
                                        case 9:
                                            e.next = 15;
                                            break;
                                        case 11:
                                            e.prev = 11,
                                                e.t0 = e.catch(6),
                                                t = Object(c.p)(e.t0);
                                        case 15:
                                            if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 19,
                                                new Promise((function(e) {
                                                    return setTimeout(e, r)
                                                }));
                                        case 19:
                                            this.$fetchState.error = t,
                                                this.$fetchState.pending = !1,
                                                this.$fetchState.timestamp = Date.now(),
                                                this.$nextTick((function() {
                                                    return o.$nuxt.nbFetching--
                                                }));
                                        case 23:
                                        case "end":
                                            return e.stop()
                                    }
                            }), e, this, [
                                [6, 11]
                            ])
                        })))).apply(this, arguments)
                    }
                    t.a = {
                        beforeCreate: function() {
                            Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200,
                                o.a.util.defineReactive(this, "$fetchState", {
                                    pending: !1,
                                    error: null,
                                    timestamp: Date.now()
                                }),
                                this.$fetch = h.bind(this),
                                Object(c.a)(this, "created", d),
                                Object(c.a)(this, "beforeMount", f))
                        }
                    }
                },
                236: function(e, t, n) {
                    e.exports = n(237)
                },
                237: function(e, t, n) {
                    "use strict";
                    n.r(t),
                        function(e) {
                            n(28),
                                n(19),
                                n(37);
                            var t = n(29),
                                r = n(7),
                                o = (n(179),
                                    n(245),
                                    n(250),
                                    n(252),
                                    n(30),
                                    n(27),
                                    n(35),
                                    n(36),
                                    n(56),
                                    n(38),
                                    n(55),
                                    n(39),
                                    n(16),
                                    n(40),
                                    n(2)),
                                c = n(212),
                                l = n(98),
                                f = n(1),
                                d = n(61),
                                h = n(223),
                                m = n(124);

                            function v(e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = function(e, t) {
                                            if (!e)
                                                return;
                                            if ("string" == typeof e)
                                                return _(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            "Object" === n && e.constructor && (n = e.constructor.name);
                                            if ("Map" === n || "Set" === n)
                                                return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                                return _(e, t)
                                        }(e)) || t && e && "number" == typeof e.length) {
                                        n && (e = n);
                                        var i = 0,
                                            r = function() {};
                                        return {
                                            s: r,
                                            n: function() {
                                                return i >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[i++]
                                                }
                                            },
                                            e: function(e) {
                                                throw e
                                            },
                                            f: r
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var o, c = !0,
                                    l = !1;
                                return {
                                    s: function() {
                                        n = n.call(e)
                                    },
                                    n: function() {
                                        var e = n.next();
                                        return c = e.done,
                                            e
                                    },
                                    e: function(e) {
                                        l = !0,
                                            o = e
                                    },
                                    f: function() {
                                        try {
                                            c || null == n.return || n.return()
                                        } finally {
                                            if (l)
                                                throw o
                                        }
                                    }
                                }
                            }

                            function _(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++)
                                    n[i] = e[i];
                                return n
                            }
                            o.a.__nuxt__fetch__mixin__ || (o.a.mixin(h.a),
                                    o.a.__nuxt__fetch__mixin__ = !0),
                                o.a.component(m.a.name, m.a),
                                o.a.component("NLink", m.a),
                                e.fetch || (e.fetch = c.a);
                            var y, x, w = [],
                                k = window.__NUXT__ || {},
                                O = k.config || {};
                            O._app && (n.p = Object(f.v)(O._app.cdnURL, O._app.assetsPath)),
                                Object.assign(o.a.config, {
                                    silent: !0,
                                    performance: !1
                                });
                            var j = o.a.config.errorHandler || console.error;

                            function C(e, t, n) {
                                for (var r = function(component) {
                                        var e = function(component, e) {
                                            if (!component || !component.options || !component.options[e])
                                                return {};
                                            var option = component.options[e];
                                            if ("function" == typeof option) {
                                                for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), r = 2; r < t; r++)
                                                    n[r - 2] = arguments[r];
                                                return option.apply(void 0, n)
                                            }
                                            return option
                                        }(component, "transition", t, n) || {};
                                        return "string" == typeof e ? {
                                            name: e
                                        } : e
                                    }, o = n ? Object(f.g)(n) : [], c = Math.max(e.length, o.length), l = [], d = function(i) {
                                        var t = Object.assign({}, r(e[i])),
                                            n = Object.assign({}, r(o[i]));
                                        Object.keys(t).filter((function(e) {
                                                return void 0 !== t[e] && !e.toLowerCase().includes("leave")
                                            })).forEach((function(e) {
                                                n[e] = t[e]
                                            })),
                                            l.push(n)
                                    }, i = 0; i < c; i++)
                                    d(i);
                                return l
                            }

                            function $(e, t, n) {
                                return S.apply(this, arguments)
                            }

                            function S() {
                                return (S = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r) {
                                    var o, c, l, d, h = this;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (this._routeChanged = Boolean(y.nuxt.err) || n.name !== t.name,
                                                        this._paramChanged = !this._routeChanged && n.path !== t.path,
                                                        this._queryChanged = !this._paramChanged && n.fullPath !== t.fullPath,
                                                        this._diffQuery = this._queryChanged ? Object(f.i)(t.query, n.query) : [],
                                                        (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(),
                                                        e.prev = 5, !this._queryChanged) {
                                                        e.next = 12;
                                                        break
                                                    }
                                                    return e.next = 9,
                                                        Object(f.r)(t, (function(e, t) {
                                                            return {
                                                                Component: e,
                                                                instance: t
                                                            }
                                                        }));
                                                case 9:
                                                    o = e.sent,
                                                        o.some((function(e) {
                                                            var r = e.Component,
                                                                o = e.instance,
                                                                c = r.options.watchQuery;
                                                            return !0 === c || (Array.isArray(c) ? c.some((function(e) {
                                                                return h._diffQuery[e]
                                                            })) : "function" == typeof c && c.apply(o, [t.query, n.query]))
                                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                                case 12:
                                                    r(),
                                                        e.next = 26;
                                                    break;
                                                case 15:
                                                    if (e.prev = 15,
                                                        e.t0 = e.catch(5),
                                                        c = e.t0 || {},
                                                        l = c.statusCode || c.status || c.response && c.response.status || 500,
                                                        d = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(d)) {
                                                        e.next = 23;
                                                        break
                                                    }
                                                    return window.location.reload(!0),
                                                        e.abrupt("return");
                                                case 23:
                                                    this.error({
                                                            statusCode: l,
                                                            message: d
                                                        }),
                                                        this.$nuxt.$emit("routeChanged", t, n, c),
                                                        r();
                                                case 26:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }), e, this, [
                                        [5, 15]
                                    ])
                                })))).apply(this, arguments)
                            }

                            function P(e, t) {
                                return k.serverRendered && t && Object(f.b)(e, t),
                                    e._Ctor = e,
                                    e
                            }

                            function R(e) {
                                return Object(f.d)(e, function() {
                                    var e = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r, o, c) {
                                        var l;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        if ("function" != typeof t || t.options) {
                                                            e.next = 4;
                                                            break
                                                        }
                                                        return e.next = 3,
                                                            t();
                                                    case 3:
                                                        t = e.sent;
                                                    case 4:
                                                        return l = P(Object(f.s)(t), k.data ? k.data[c] : null),
                                                            r.components[o] = l,
                                                            e.abrupt("return", l);
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }), e)
                                    })));
                                    return function(t, n, r, o, c) {
                                        return e.apply(this, arguments)
                                    }
                                }())
                            }

                            function E(e, t, n) {
                                var r = this,
                                    o = ["nuxti18n"],
                                    c = !1;
                                if (void 0 !== n && (o = [],
                                        (n = Object(f.s)(n)).options.middleware && (o = o.concat(n.options.middleware)),
                                        e.forEach((function(e) {
                                            e.options.middleware && (o = o.concat(e.options.middleware))
                                        }))),
                                    o = o.map((function(e) {
                                        return "function" == typeof e ? e : ("function" != typeof l.a[e] && (c = !0,
                                                r.error({
                                                    statusCode: 500,
                                                    message: "Unknown middleware " + e
                                                })),
                                            l.a[e])
                                    })), !c)
                                    return Object(f.o)(o, t)
                            }

                            function L(e, t, n) {
                                return A.apply(this, arguments)
                            }

                            function A() {
                                return (A = Object(r.a)(regeneratorRuntime.mark((function e(t, n, o) {
                                    var c, l, h, m, _, x, k, O, j, $, S, P, R, L, A, D = this;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return", o());
                                                case 2:
                                                    return !1,
                                                        t === n ? (w = [], !0) : (c = [],
                                                            w = Object(f.g)(n, c).map((function(e, i) {
                                                                return Object(f.c)(n.matched[c[i]].path)(n.params)
                                                            }))),
                                                        l = !1,
                                                        h = function(path) {
                                                            n.path === path.path && D.$loading.finish && D.$loading.finish(),
                                                                n.path !== path.path && D.$loading.pause && D.$loading.pause(),
                                                                l || (l = !0,
                                                                    o(path))
                                                        },
                                                        e.next = 8,
                                                        Object(f.t)(y, {
                                                            route: t,
                                                            from: n,
                                                            next: h.bind(this)
                                                        });
                                                case 8:
                                                    if (this._dateLastError = y.nuxt.dateErr,
                                                        this._hadError = Boolean(y.nuxt.err),
                                                        m = [],
                                                        (_ = Object(f.g)(t, m)).length) {
                                                        e.next = 27;
                                                        break
                                                    }
                                                    return e.next = 15,
                                                        E.call(this, _, y.context);
                                                case 15:
                                                    if (!l) {
                                                        e.next = 17;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 17:
                                                    return x = (d.a.options || d.a).layout,
                                                        e.next = 20,
                                                        this.loadLayout("function" == typeof x ? x.call(d.a, y.context) : x);
                                                case 20:
                                                    return k = e.sent,
                                                        e.next = 23,
                                                        E.call(this, _, y.context, k);
                                                case 23:
                                                    if (!l) {
                                                        e.next = 25;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 25:
                                                    return y.context.error({
                                                            statusCode: 404,
                                                            message: "Page not found."
                                                        }),
                                                        e.abrupt("return", o());
                                                case 27:
                                                    return _.forEach((function(e) {
                                                            e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData,
                                                                e.options.fetch = e._Ctor.options.fetch)
                                                        })),
                                                        this.setTransitions(C(_, t, n)),
                                                        e.prev = 29,
                                                        e.next = 32,
                                                        E.call(this, _, y.context);
                                                case 32:
                                                    if (!l) {
                                                        e.next = 34;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 34:
                                                    if (!y.context._errored) {
                                                        e.next = 36;
                                                        break
                                                    }
                                                    return e.abrupt("return", o());
                                                case 36:
                                                    return "function" == typeof(O = _[0].options.layout) && (O = O(y.context)),
                                                        e.next = 40,
                                                        this.loadLayout(O);
                                                case 40:
                                                    return O = e.sent,
                                                        e.next = 43,
                                                        E.call(this, _, y.context, O);
                                                case 43:
                                                    if (!l) {
                                                        e.next = 45;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 45:
                                                    if (!y.context._errored) {
                                                        e.next = 47;
                                                        break
                                                    }
                                                    return e.abrupt("return", o());
                                                case 47:
                                                    j = !0,
                                                        e.prev = 48,
                                                        $ = v(_),
                                                        e.prev = 50,
                                                        $.s();
                                                case 52:
                                                    if ((S = $.n()).done) {
                                                        e.next = 63;
                                                        break
                                                    }
                                                    if ("function" == typeof(P = S.value).options.validate) {
                                                        e.next = 56;
                                                        break
                                                    }
                                                    return e.abrupt("continue", 61);
                                                case 56:
                                                    return e.next = 58,
                                                        P.options.validate(y.context);
                                                case 58:
                                                    if (j = e.sent) {
                                                        e.next = 61;
                                                        break
                                                    }
                                                    return e.abrupt("break", 63);
                                                case 61:
                                                    e.next = 52;
                                                    break;
                                                case 63:
                                                    e.next = 68;
                                                    break;
                                                case 65:
                                                    e.prev = 65,
                                                        e.t0 = e.catch(50),
                                                        $.e(e.t0);
                                                case 68:
                                                    return e.prev = 68,
                                                        $.f(),
                                                        e.finish(68);
                                                case 71:
                                                    e.next = 77;
                                                    break;
                                                case 73:
                                                    return e.prev = 73,
                                                        e.t1 = e.catch(48),
                                                        this.error({
                                                            statusCode: e.t1.statusCode || "500",
                                                            message: e.t1.message
                                                        }),
                                                        e.abrupt("return", o());
                                                case 77:
                                                    if (j) {
                                                        e.next = 80;
                                                        break
                                                    }
                                                    return this.error({
                                                            statusCode: 404,
                                                            message: "Page not found."
                                                        }),
                                                        e.abrupt("return", o());
                                                case 80:
                                                    return e.next = 82,
                                                        Promise.all(_.map(function() {
                                                            var e = Object(r.a)(regeneratorRuntime.mark((function e(r, i) {
                                                                var o, c, l, d, h, v, _, x, p;
                                                                return regeneratorRuntime.wrap((function(e) {
                                                                    for (;;)
                                                                        switch (e.prev = e.next) {
                                                                            case 0:
                                                                                if (r._path = Object(f.c)(t.matched[m[i]].path)(t.params),
                                                                                    r._dataRefresh = !1,
                                                                                    o = r._path !== w[i],
                                                                                    D._routeChanged && o ? r._dataRefresh = !0 : D._paramChanged && o ? (c = r.options.watchParam,
                                                                                        r._dataRefresh = !1 !== c) : D._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function(e) {
                                                                                        return D._diffQuery[e]
                                                                                    })) : "function" == typeof l && (R || (R = Object(f.h)(t)),
                                                                                        r._dataRefresh = l.apply(R[i], [t.query, n.query]))),
                                                                                    D._hadError || !D._isMounted || r._dataRefresh) {
                                                                                    e.next = 6;
                                                                                    break
                                                                                }
                                                                                return e.abrupt("return");
                                                                            case 6:
                                                                                return d = [],
                                                                                    h = r.options.asyncData && "function" == typeof r.options.asyncData,
                                                                                    v = Boolean(r.options.fetch) && r.options.fetch.length,
                                                                                    _ = h && v ? 30 : 45,
                                                                                    h && ((x = Object(f.q)(r.options.asyncData, y.context)).then((function(e) {
                                                                                            Object(f.b)(r, e),
                                                                                                D.$loading.increase && D.$loading.increase(_)
                                                                                        })),
                                                                                        d.push(x)),
                                                                                    D.$loading.manual = !1 === r.options.loading,
                                                                                    v && ((p = r.options.fetch(y.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)),
                                                                                        p.then((function(e) {
                                                                                            D.$loading.increase && D.$loading.increase(_)
                                                                                        })),
                                                                                        d.push(p)),
                                                                                    e.abrupt("return", Promise.all(d));
                                                                            case 14:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                }), e)
                                                            })));
                                                            return function(t, n) {
                                                                return e.apply(this, arguments)
                                                            }
                                                        }()));
                                                case 82:
                                                    l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(),
                                                            o()),
                                                        e.next = 99;
                                                    break;
                                                case 85:
                                                    if (e.prev = 85,
                                                        e.t2 = e.catch(29),
                                                        "ERR_REDIRECT" !== (L = e.t2 || {}).message) {
                                                        e.next = 90;
                                                        break
                                                    }
                                                    return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, n, L));
                                                case 90:
                                                    return w = [],
                                                        Object(f.k)(L),
                                                        "function" == typeof(A = (d.a.options || d.a).layout) && (A = A(y.context)),
                                                        e.next = 96,
                                                        this.loadLayout(A);
                                                case 96:
                                                    this.error(L),
                                                        this.$nuxt.$emit("routeChanged", t, n, L),
                                                        o();
                                                case 99:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }), e, this, [
                                        [29, 85],
                                        [48, 73],
                                        [50, 65, 68, 71]
                                    ])
                                })))).apply(this, arguments)
                            }

                            function D(e, n) {
                                Object(f.d)(e, (function(e, n, r, c) {
                                    return "object" !== Object(t.a)(e) || e.options || ((e = o.a.extend(e))._Ctor = e,
                                            r.components[c] = e),
                                        e
                                }))
                            }

                            function T(e) {
                                var t = Boolean(this.$options.nuxt.err);
                                this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (t = !1);
                                var n = t ? (d.a.options || d.a).layout : e.matched[0].components.default.options.layout;
                                "function" == typeof n && (n = n(y.context)),
                                    this.setLayout(n)
                            }

                            function I(e) {
                                e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error()
                            }

                            function N(e, t) {
                                var n = this;
                                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                    var r = Object(f.h)(e),
                                        c = Object(f.g)(e),
                                        l = !1;
                                    o.a.nextTick((function() {
                                        r.forEach((function(e, i) {
                                                if (e && !e._isDestroyed && e.constructor._dataRefresh && c[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                                    var t = e.constructor.options.data.call(e);
                                                    for (var n in t)
                                                        o.a.set(e.$data, n, t[n]);
                                                    l = !0
                                                }
                                            })),
                                            l && window.$nuxt.$nextTick((function() {
                                                window.$nuxt.$emit("triggerScroll")
                                            })),
                                            I(n)
                                    }))
                                }
                            }

                            function M(e) {
                                window.onNuxtReadyCbs.forEach((function(t) {
                                        "function" == typeof t && t(e)
                                    })),
                                    "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e),
                                    x.afterEach((function(t, n) {
                                        o.a.nextTick((function() {
                                            return e.$nuxt.$emit("routeChanged", t, n)
                                        }))
                                    }))
                            }

                            function B() {
                                return (B = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                                    var n, r, c, l, d;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return y = t.app,
                                                        x = t.router,
                                                        t.store,
                                                        n = new o.a(y),
                                                        r = k.layout || "default",
                                                        e.next = 7,
                                                        n.loadLayout(r);
                                                case 7:
                                                    return n.setLayout(r),
                                                        c = function() {
                                                            n.$mount("#__nuxt"),
                                                                x.afterEach(D),
                                                                x.afterEach(T.bind(n)),
                                                                x.afterEach(N.bind(n)),
                                                                o.a.nextTick((function() {
                                                                    M(n)
                                                                }))
                                                        },
                                                        e.next = 11,
                                                        Promise.all(R(y.context.route));
                                                case 11:
                                                    if (l = e.sent,
                                                        n.setTransitions = n.$options.nuxt.setTransitions.bind(n),
                                                        l.length && (n.setTransitions(C(l, x.currentRoute)),
                                                            w = x.currentRoute.matched.map((function(e) {
                                                                return Object(f.c)(e.path)(x.currentRoute.params)
                                                            }))),
                                                        n.$loading = {},
                                                        k.error && n.error(k.error),
                                                        x.beforeEach($.bind(n)),
                                                        x.beforeEach(L.bind(n)), !k.serverRendered || !Object(f.n)(k.routePath, n.context.route.path)) {
                                                        e.next = 20;
                                                        break
                                                    }
                                                    return e.abrupt("return", c());
                                                case 20:
                                                    return d = function() {
                                                            D(x.currentRoute, x.currentRoute),
                                                                T.call(n, x.currentRoute),
                                                                I(n),
                                                                c()
                                                        },
                                                        e.next = 23,
                                                        new Promise((function(e) {
                                                            return setTimeout(e, 0)
                                                        }));
                                                case 23:
                                                    L.call(n, x.currentRoute, x.currentRoute, (function(path) {
                                                        if (path) {
                                                            var e = x.afterEach((function(t, n) {
                                                                e(),
                                                                    d()
                                                            }));
                                                            x.push(path, void 0, (function(e) {
                                                                e && j(e)
                                                            }))
                                                        } else
                                                            d()
                                                    }));
                                                case 24:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }), e)
                                })))).apply(this, arguments)
                            }
                            Object(d.b)(null, k.config).then((function(e) {
                                return B.apply(this, arguments)
                            })).catch(j)
                        }
                        .call(this, n(57))
                },
                255: function(e, t, n) {
                    "use strict";
                    n.r(t),
                        t.default = function(e) {
                            var t = e.store,
                                n = e.redirect;
                            t.state.auth.user || n("/login")
                        }
                },
                256: function(e, t, n) {
                    "use strict";
                    n.r(t),
                        t.default = function(e) {
                            var t = e.store,
                                n = e.redirect;
                            t.state.auth.user && n("/")
                        }
                },
                257: function(e, t, n) {
                    "use strict";
                    n.r(t),
                        t.default = function(e, t, n) {
                            t.setHeader("Link", "<https://discord.bots.gg".concat(e.url, '>; rel="canonical"')),
                                n()
                        }
                },
                258: function(e, t, n) {
                    "use strict";
                    n.r(t);
                    n(74);
                    var r = n(79);
                    t.default = function(e, t, n) {
                        var time = Object(r.c)((new Date).toISOString()),
                            o = Object(r.d)((e.headers["x-forwarded-for"] || "").split(",").pop() || e.connection.remoteAddress || e.socket.remoteAddress || e.connection.socket.remoteAddress),
                            c = "".concat(Object(r.e)(e.method), " ").concat(Object(r.e)(e.url)),
                            l = Object(r.b)(e.headers["user-agent"]);
                        t.once("finish", (function() {
                                var e = Object(r.a)(t.statusCode);
                                console.log(time, "|", o, "|", c, e, "\n", l)
                            })),
                            n()
                    }
                },
                260: function(e, t, n) {
                    "use strict";
                    n.r(t),
                        t.default = function(e, t, n) {
                            "/server" === e.url ? (t.writeHead(301, {
                                    Location: "https://discord.gg/0cDvIgU2voWn4BaD"
                                }),
                                t.end()) : n()
                        }
                },
                271: function(e, t, n) {
                    "use strict";
                    n(187)
                },
                272: function(e, t, n) {
                    var r = n(42)(!1);
                    r.push([e.i, "@media only screen and (max-width:1000px){.hidden-small{display:none!important}}@media only screen and (min-width:1000px){.only-small{display:none!important}}@media only screen and (max-width:500px){.hidden-mobile{display:none!important}}.error__title{font-size:4rem;margin:0}@media only screen and (max-width:500px){.error__title{font-size:3rem}}.error__message{font-size:2rem;margin:0}@media only screen and (max-width:500px){.error__message{font-size:1.75rem}}.error{text-align:center}@media only screen and (max-width:500px){.error{padding:0 1rem}}.error .button{margin-top:1rem}", ""]),
                        e.exports = r
                },
                273: function(e, t, n) {
                    "use strict";
                    n(188)
                },
                274: function(e, t, n) {
                    var r = n(42)(!1);
                    r.push([e.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#606b8e;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]),
                        e.exports = r
                },
                275: function(e, t, n) {
                    var content = n(276);
                    content.__esModule && (content = content.default),
                        "string" == typeof content && (content = [
                            [e.i, content, ""]
                        ]),
                        content.locals && (e.exports = content.locals);
                    (0,
                        n(43).default)("62c3f582", content, !0, {
                        sourceMap: !1
                    })
                },
                276: function(e, t, n) {
                    var r = n(42)(!1);
                    r.push([e.i, '.row{display:flex;width:100%;flex-wrap:wrap}.row [class*=col-]{padding:1rem;display:flex;flex-direction:column}.col-1{width:25%}.col-2{width:50%}.col-3{width:75%}.col-4{width:100%}.col-third{width:33%}.col-two-thirds{width:66%}@media only screen and (max-width:1000px){[class*=col-]{width:100%}}@media only screen and (max-width:1000px){.hidden-small{display:none!important}}@media only screen and (min-width:1000px){.only-small{display:none!important}}@media only screen and (max-width:500px){.hidden-mobile{display:none!important}}:root{font-family:"Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;color:#fff}*{box-sizing:border-box}h1{font-family:"Montserrat","Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}h1[id]{pointer-events:none}h1[id]:before{content:"";display:block;height:80px;margin:-80px 0 0}h1[id]:hover:after{opacity:1}h1[id]:after{transition:opacity .1s ease-out;content:" 🔗";cursor:pointer;opacity:0;font-weight:100;pointer-events:auto}h2{font-family:"Montserrat","Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}h2[id]{pointer-events:none}h2[id]:before{content:"";display:block;height:80px;margin:-80px 0 0}h2[id]:hover:after{opacity:1}h2[id]:after{transition:opacity .1s ease-out;content:" 🔗";cursor:pointer;opacity:0;font-weight:100;pointer-events:auto}h3{font-family:"Montserrat","Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}h3[id]{pointer-events:none}h3[id]:before{content:"";display:block;height:80px;margin:-80px 0 0}h3[id]:hover:after{opacity:1}h3[id]:after{transition:opacity .1s ease-out;content:" 🔗";cursor:pointer;opacity:0;font-weight:100;pointer-events:auto}h4{font-family:"Montserrat","Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}h4[id]{pointer-events:none}h4[id]:before{content:"";display:block;height:80px;margin:-80px 0 0}h4[id]:hover:after{opacity:1}h4[id]:after{transition:opacity .1s ease-out;content:" 🔗";cursor:pointer;opacity:0;font-weight:100;pointer-events:auto}h5{font-family:"Montserrat","Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}h5[id]{pointer-events:none}h5[id]:before{content:"";display:block;height:80px;margin:-80px 0 0}h5[id]:hover:after{opacity:1}h5[id]:after{transition:opacity .1s ease-out;content:" 🔗";cursor:pointer;opacity:0;font-weight:100;pointer-events:auto}h6{font-family:"Montserrat","Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}h6[id]{pointer-events:none}h6[id]:before{content:"";display:block;height:80px;margin:-80px 0 0}h6[id]:hover:after{opacity:1}h6[id]:after{transition:opacity .1s ease-out;content:" 🔗";cursor:pointer;opacity:0;font-weight:100;pointer-events:auto}h1{font-size:2em}#__layout,#__nuxt,body,html{height:100%}body{margin:0;background:#292e3d}.padded-container{padding-top:64px}.centered-container{display:flex;align-items:center;justify-content:center;flex-direction:column;flex:1 0 100%}.centered,.centered-container.center-text{text-align:center}.content-container{max-width:75%;margin:0 auto 1rem}@media only screen and (max-width:1000px){.content-container{max-width:100%;margin:2rem}}@media only screen and (max-width:500px){.content-container{margin:1rem}}.tag{display:inline-block;background:#000;padding:.5rem 1rem;border-radius:50px}.tag.is-square{border-radius:4px}.tag.is-translucent{background:rgba(0,0,0,.75)}.tag.is-flex{display:inline-flex;align-items:center}.tag .tag__content{display:inline;padding-left:.5rem}.discriminator{opacity:.5}.discriminator.is-shrunk{vertical-align:super;font-size:.5em}.button{display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;font-family:inherit;font-size:18px;color:#fff;min-width:36px;padding:.5rem 1rem;border-radius:50px;cursor:pointer;text-decoration:none;background:#4b4d57;transition:background-color .2s ease-out}.button:hover{background:rgba(75,77,87,.75)}.button:active{background:rgba(75,77,87,.5)}.button:disabled{pointer-events:none;cursor:default;opacity:.5}.button-row>.button+.button{margin-left:1rem}.button.is-danger,.button.is-form.is-danger{background:#ff4949;transition:background-color .2s ease-out}.button.is-danger:hover,.button.is-form.is-danger:hover{background:rgba(255,73,73,.75)}.button.is-danger:active,.button.is-form.is-danger:active{background:rgba(255,73,73,.5)}.button.is-warn{background:#dbb820;transition:background-color .2s ease-out}.button.is-warn:hover{background:rgba(219,184,32,.75)}.button.is-warn:active{background:rgba(219,184,32,.5)}.button.is-form{color:#fff;border-radius:4px;background:#606b8e;transition:background-color .2s ease-out}.button.is-form:hover{background:rgba(96,107,142,.75)}.button.is-form:active{background:rgba(96,107,142,.5)}@media only screen and (max-width:1000px){.button{padding:.75rem 1rem}}.button.full,.input{width:100%}.input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:2px solid rgba(96,107,142,.25);border-radius:4px;outline:none;background:transparent;color:#fff;font-family:inherit;font-size:inherit;padding:1rem;margin:0;transition:border-color .2s ease-out}.input:focus{border-color:#606b8e}.input:focus::-moz-placeholder{opacity:.75}.input:focus:-ms-input-placeholder{opacity:.75}.input:focus::placeholder{opacity:.75}.input:disabled{color:hsla(0,0%,100%,.5);background:rgba(96,107,142,.25)}.input>optgroup{background:#292e3d}.input option{background:#606b8e}.input::-moz-placeholder{color:#606b8e;font-weight:700;opacity:1;-moz-transition:opacity .2s ease-out;transition:opacity .2s ease-out}.input:-ms-input-placeholder{color:#606b8e;font-weight:700;opacity:1;-ms-transition:opacity .2s ease-out;transition:opacity .2s ease-out}.input::placeholder{color:#606b8e;font-weight:700;opacity:1;transition:opacity .2s ease-out}.input[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.input[type=number]::-webkit-inner-spin-button,.input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}.input.is-textarea{font-family:"Ubuntu Sans",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;resize:vertical;min-height:5rem;max-height:500px}.input.is-textarea+.at-input__counter{right:16px}.input:invalid{border:2px solid rgba(255,73,73,.25)}code,pre{font-family:"Ubuntu Mono","Courier New",Courier,monospace}a{color:inherit}a.silent{text-decoration:none}a.silent:hover{text-decoration:underline}img.emoji{height:1.25em;width:1.25em;margin:0 .05em 0 .1em;vertical-align:-.2em}.bot-grid{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1.5rem}@media only screen and (max-width:1350px){.bot-grid{grid-template-columns:1fr}}@media only screen and (max-width:1000px){.bot-grid{margin:0;padding:2rem 1rem}}nav.sidebar{position:fixed;top:0;padding:64px 0 0;left:0;width:300px;background:rgba(0,0,0,.2);height:100vh;box-sizing:border-box;display:flex;flex-direction:column}nav.sidebar .sidebar__item{display:block;padding:1em;background:rgba(0,0,0,.1);text-decoration:none}.badge{display:inline-flex;width:1.25em;height:1.25em;font-size:.85em;background:#ff4949;border-radius:50%;align-items:center;justify-content:center}@media only screen and (max-width:600px){nav.sidebar{position:static;height:auto;padding:0;width:100%;margin:64px 0 0}}.navbar__button .mdi{display:flex;align-items:center;justify-content:center}', ""]),
                        e.exports = r
                },
                277: function(e, t, n) {
                    "use strict";
                    n(189)
                },
                278: function(e, t, n) {
                    var r = n(42)(!1);
                    r.push([e.i, ".cookie-slide-enter-active,.cookie-slide-leave-active{transition:transform .2s cubic-bezier(0,0,.2,1)}.cookie-slide-enter,.cookie-slide-leave-to{transform:translateY(calc(100% + 1rem))}.cookie-banner{background:#1f232e;position:fixed;display:flex;bottom:1rem;left:25%;width:50%;padding:1rem;border-radius:4px;align-items:center;justify-content:space-between;box-shadow:0 0 10px 0 rgba(0,0,0,.5);z-index:9001}@media screen and (max-width:1000px){.cookie-banner{width:100%;left:0;bottom:0;border-radius:8px 8px 0 0}}.cookie-banner .cookie-banner__text{word-wrap:break-word}.cookie-banner>button{flex:0 0 auto;margin-left:1rem}", ""]),
                        e.exports = r
                },
                282: function(e, t, n) {
                    "use strict";
                    n(191)
                },
                283: function(e, t, n) {
                    var r = n(42)(!1);
                    r.push([e.i, ".egg{position:fixed;display:flex;justify-content:center;align-items:center;height:100vh;width:100vw;top:0;left:0;background:#000;z-index:10000;transition-duration:1s}.egg.egg__bye{opacity:0}.egg__text{display:block;height:200px;width:400px;font-size:50px;text-align:center;white-space:pre-wrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""]),
                        e.exports = r
                },
                284: function(e, t, n) {
                    "use strict";
                    n(192)
                },
                285: function(e, t, n) {
                    var r = n(42)(!1);
                    r.push([e.i, ".footer{background:#000;width:100%;text-align:center;padding:2rem 0;flex-direction:column}.footer .material-design-icon,.footer .material-design-icon>.material-design-icon__svg{width:1.5em;height:1.5em;bottom:0}.footer__row{display:flex;justify-content:center}.footer__links{margin-top:.5rem}.footer__link{color:#a9afc5;text-decoration:none;padding:.2rem;transition:color .2s ease-out}.footer__link:hover{color:#606b8e}.footer__link+.footer__link{margin-left:1ch}", ""]),
                        e.exports = r
                },
                286: function(e, t, n) {
                    "use strict";
                    n(193)
                },
                287: function(e, t, n) {
                    var r = n(42)(!1);
                    r.push([e.i, '.tooltip{position:relative}.tooltip.is-disabled:after,.tooltip.is-disabled:before{opacity:0!important}.tooltip:after,.tooltip:before{content:"";position:absolute;opacity:0;pointer-events:none;z-index:999;transition:opacity .2s ease-out}.tooltip:before{border:.5rem solid transparent}.tooltip:after{content:attr(data-text);width:auto;padding:.25rem .75rem;border-radius:4px;background:#000;color:#fff;white-space:nowrap}.tooltip:hover:after,.tooltip:hover:before{opacity:1}.tooltip.is-top:after,.tooltip.is-top:before{top:auto;right:auto;bottom:calc(100% + 1rem);left:50%;transform:translateX(-50%)}.tooltip.is-top:before{border-top:.5rem solid #000;bottom:100%}.tooltip.is-bottom:after,.tooltip.is-bottom:before{top:calc(100% + 1rem);right:auto;bottom:auto;left:50%;transform:translateX(-50%)}.tooltip.is-bottom:before{border-bottom:.5rem solid #000;top:100%}.tooltip.is-left:after,.tooltip.is-left:before{top:50%;right:calc(100% + 1rem);bottom:auto;left:auto;transform:translateY(-50%)}.tooltip.is-left:before{border-right:.5rem solid #000;right:100%}.tooltip.is-right:after,.tooltip.is-right:before{top:50%;right:auto;bottom:auto;left:calc(100% + 1rem);transform:translateY(-50%)}.tooltip.is-right:before{border-left:.5rem solid #000;left:100%}', ""]),
                        e.exports = r
                },
                288: function(e, t, n) {
                    "use strict";
                    n(194)
                },
                289: function(e, t, n) {
                    var r = n(42)(!1);
                    r.push([e.i, '.fade-enter-active,.fade-leave-active{transition:opacity .2s ease-out}.fade-enter,.fade-leave-to{opacity:0}@media only screen and (max-width:1000px){.hidden-small{display:none!important}}@media only screen and (min-width:1000px){.only-small{display:none!important}}@media only screen and (max-width:500px){.hidden-mobile{display:none!important}}.navbar__menu{position:relative;width:64px;height:64px}.navbar__menu,.navber__menu__burger-wrapper{display:flex;align-items:center;justify-content:center}.navber__menu__burger-wrapper{width:36px;height:36px;transform:scale(.84)}.navbar__menu__burger{display:block;position:relative;cursor:pointer}.navbar__menu__burger,.navbar__menu__burger:after,.navbar__menu__burger:before{background:#fff;width:100%;height:4px;transition:transform .2s cubic-bezier(.4,0,.2,1)}.navbar__menu__burger:after,.navbar__menu__burger:before{content:"";position:absolute;left:0}.navbar__menu__burger:before{top:-12px}.navbar__menu__burger:after{bottom:-12px}.navbar__menu__burger.is-open{transform:rotate(135deg)}.navbar__menu__burger.is-open:before{transform:translateY(12px)}.navbar__menu__burger.is-open:after{transform:translateY(-12px) rotate(90deg)}.burger__filler{position:absolute;width:100%;height:36px;top:-16px;z-index:-1}.navbar__menu__popout,.user__menu__popout{position:fixed;display:flex;top:calc(64px + .5rem);left:.5rem;right:.5rem;background:#1f232e;color:#fff;border-radius:8px;padding:.5rem 0;z-index:9000;box-shadow:0 2px 5px 0 rgba(0,0,0,.5)}.navbar__menu__items,.user__menu__items{display:flex;list-style:none;width:100%;margin:0;padding:0;flex-direction:column}.navbar__menu__item,.user__menu__item{font-size:1.25rem;transition:background-color .2s ease-out;white-space:nowrap;text-align:center}.navbar__menu__item>a,.user__menu__item>a{display:block;width:100%;text-decoration:none;padding:.5rem 1.5rem}.navbar__menu__item:hover,.user__menu__item:hover{background:hsla(0,0%,100%,.12)}.user__menu__item>a{padding:.5rem 2.5rem}.navbar{position:fixed;display:grid;grid-auto-flow:column;top:0;height:64px;width:100%;background:rgba(0,0,0,.5);z-index:9001;transition:background-color .2s ease-out}.navbar.is-opaque{background:#14171e}.navbar.is-mobile{display:none;justify-content:space-between;align-items:center;grid-auto-flow:row}@media only screen and (max-width:1000px){.navbar{display:none}.navbar.is-mobile{display:flex}}.navbar__side{flex-grow:1;display:flex}.navbar__user{padding-right:32px}.navbar__user[dir=rtl]{padding-left:32px;padding-right:0}.navbar__icon{display:block;width:96px;height:64px;text-align:center}.navbar__icon>img{margin:8px 0}.navbar.is-mobile>.navbar__icon{margin:0;visibility:hidden}.navbar__links{display:grid;grid-auto-flow:column;align-items:center;list-style:none;grid-gap:2rem;gap:2rem;margin:0;padding:0}.navbar__link{display:flex;align-items:center;font-size:18px;height:100%;opacity:.5;transition:opacity .2s ease-out}.navbar__link:hover{opacity:.75}.navbar__link.needs-exact.nuxt-link-exact-active,.navbar__link.nuxt-link-active:not(.needs-exact){opacity:1}.navbar__link__activator{color:#fff;text-decoration:none}.navbar__search__wrapper{flex:0 1 auto;display:flex;height:48px;align-self:center}.navbar__search{flex:1 0 auto;background:#4b4d57;border:none;outline:none;font-size:1rem;color:#fff;padding:0 1rem;font-family:inherit;border-radius:8px}.navbar__search::-moz-placeholder{color:hsla(0,0%,100%,.75)}.navbar__search:-ms-input-placeholder{color:hsla(0,0%,100%,.75)}.navbar__search::placeholder{color:hsla(0,0%,100%,.75)}.navbar__user{display:grid;grid-auto-flow:column;justify-content:flex-end;align-items:center;padding-left:2rem;flex-grow:1;grid-gap:1rem;gap:1rem}.navbar__user-icon{position:relative;border-radius:50%;height:32px;width:32px}.navbar__user-icon>img{border-radius:50%}.navbar__user-icon>.navbar.is-mobile>img{border-radius:50%;transform:scale(.8)}.navbar.is-mobile>.navbar__user-icon{width:48px;height:48px;margin-right:12px;order:3}.navbar__user-icon__obscurer{position:absolute;display:block;background:#000;top:0;width:100%;height:100%;border-radius:50%;opacity:0;transition:opacity .2s ease-out}.navbar__user-icon__obscurer:hover{opacity:.25}.navbar__button{display:block;background:#fff;color:#000;text-decoration:none;height:32px;line-height:32px;padding:0 1rem;border-radius:50px}.navbar__button.is-circle{padding:0;display:flex;align-content:center;justify-content:center;align-items:center;width:32px}.navbar__button.is-circle>.material-design-icon,.navbar__button.is-circle>.material-design-icon>.material-design-icon__svg{width:32px;height:32px;bottom:0}.navbar__button.is-circle.has-regular-icon>.material-design-icon,.navbar__button.is-circle.has-regular-icon>.material-design-icon>.material-design-icon__svg{width:24px;height:24px;bottom:0}button.navbar__button{border:0;cursor:pointer}.navbar__notifications{position:relative}.navbar__notifications.is-active{background:#ff4949;color:#fff}.language__menu,.notifications__menu{position:absolute;display:flex;top:calc(32px + 1rem);right:0;background:#1f232e;color:#fff;border-radius:8px;padding:.5rem 0;z-index:9000;box-shadow:0 2px 5px 0 rgba(0,0,0,.5)}.languages__list,.notifications__list{list-style:none;margin:0;padding:0}.user__menu__popout>.languages__list,.user__menu__popout>.languages__list>.notification,.user__menu__popout>.notifications__list,.user__menu__popout>.notifications__list>.notification{width:100%}.language__menu{padding:0}.language__menu .language{white-space:nowrap;padding:.5rem 1rem}.language__menu .language .language__content a{text-decoration:none;display:flex}.language__menu .language .language__content a .language__content__name{text-align:left;flex:1;margin-left:1rem}.navbar__language__mobile{margin-right:10px}.notifications__empty{white-space:nowrap;margin:.5rem 1rem}.user__menu__popout>.notifications__empty{display:block;width:100%;text-align:center}.language,.notification{padding:1rem;align-items:center}.language:hover,.notification:hover{background:rgba(0,0,0,.12)}.notification__clicker{flex:0 0 auto;border-radius:50%;display:block;width:64px;height:64px;margin:0 auto 1rem}.notification__image{border-radius:50%}.notification__content{display:flex;flex-direction:column;flex:1 0 auto}.notification__body{word-wrap:break-word;max-width:100%;margin-bottom:1rem}.user__menu__popout .notification__body{text-align:center}.notification__actions{display:flex;justify-content:center}.flex__expander{flex:1 1 auto;flex-basis:2;height:10px}', ""]),
                        e.exports = r
                },
                290: function(e, t, n) {
                    "use strict";
                    n(195)
                },
                291: function(e, t, n) {
                    var r = n(42)(!1);
                    r.push([e.i, "#__layout,#__layout>div{display:flex;flex-direction:column}main{flex:1 0 auto;display:flex;flex-direction:column}", ""]),
                        e.exports = r
                },
                292: function(e, t, n) {
                    "use strict";
                    n(196)
                },
                293: function(e, t, n) {
                    var r = n(42)(!1);
                    r.push([e.i, "#__layout,#__layout>div{display:flex;flex-direction:column}main{flex:1 0 auto;display:flex;flex-direction:column}", ""]),
                        e.exports = r
                },
                294: function(e, t, n) {
                    "use strict";
                    n.r(t),
                        n.d(t, "state", (function() {
                            return o
                        })),
                        n.d(t, "mutations", (function() {
                            return c
                        })),
                        n.d(t, "actions", (function() {
                            return l
                        }));
                    var r = n(7),
                        o = (n(30),
                            n(28),
                            function() {
                                return {
                                    country: "XX",
                                    nodeVersion: "unknown"
                                }
                            }
                        ),
                        c = {
                            setCountry: function(e, t) {
                                e.country = t
                            },
                            setNodeVersion: function(e, t) {
                                e.nodeVersion = t
                            }
                        },
                        l = {
                            nuxtServerInit: function(e, t) {
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o, c;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;)
                                            switch (n.prev = n.next) {
                                                case 0:
                                                    return r = e.commit,
                                                        o = e.dispatch,
                                                        n.next = 3,
                                                        o("auth/processAuth", t);
                                                case 3:
                                                    (c = t.req.headers["cf-ipcountry"]) && r("setCountry", c),
                                                        "unknown",
                                                        r("setNodeVersion", "unknown");
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                    }), n)
                                })))()
                            }
                        }
                },
                295: function(e, t, n) {
                    "use strict";
                    n.r(t),
                        n.d(t, "state", (function() {
                            return o
                        })),
                        n.d(t, "mutations", (function() {
                            return c
                        })),
                        n.d(t, "actions", (function() {
                            return l
                        }));
                    var r = n(7);
                    n(30);

                    function o() {
                        return {
                            token: null,
                            user: null
                        }
                    }
                    var c = {
                            setToken: function(e, t) {
                                e.token = t
                            },
                            setUser: function(e, t) {
                                e.user = t
                            }
                        },
                        l = {
                            processAuth: function(e, t) {
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o, c, l, f, d;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;)
                                            switch (n.prev = n.next) {
                                                case 0:
                                                    if (r = e.commit,
                                                        o = t.app,
                                                        c = o.$axios,
                                                        l = o.$cookies, !t.req.headers.cookie) {
                                                        n.next = 18;
                                                        break
                                                    }
                                                    if (!(f = l.get("token"))) {
                                                        n.next = 18;
                                                        break
                                                    }
                                                    return n.prev = 5,
                                                        r("setToken", f),
                                                        c.setToken(f),
                                                        n.next = 10,
                                                        c.$get("/users/@me");
                                                case 10:
                                                    d = n.sent,
                                                        r("setUser", d),
                                                        n.next = 18;
                                                    break;
                                                case 14:
                                                    n.prev = 14,
                                                        n.t0 = n.catch(5),
                                                        c.setToken(!1),
                                                        l.remove("token");
                                                case 18:
                                                case "end":
                                                    return n.stop()
                                            }
                                    }), n, null, [
                                        [5, 14]
                                    ])
                                })))()
                            }
                        }
                },
                296: function(e, t, n) {
                    "use strict";

                    function r() {
                        return {
                            libraries: [],
                            librariesTimestamp: 0
                        }
                    }
                    n.r(t),
                        n.d(t, "state", (function() {
                            return r
                        })),
                        n.d(t, "mutations", (function() {
                            return o
                        })),
                        n.d(t, "actions", (function() {
                            return c
                        }));
                    var o = {
                            cacheLibraries: function(e, t) {
                                e.libraries = t,
                                    e.librariesTimestamp = Date.now()
                            }
                        },
                        c = {}
                },
                61: function(e, t, n) {
                        "use strict";
                        n.d(t, "b", (function() {
                                return bn
                            })),
                            n.d(t, "a", (function() {
                                return L
                            }));
                        n(36),
                            n(19),
                            n(35),
                            n(45),
                            n(46);
                        var r = n(7),
                            o = n(15),
                            c = (n(30),
                                n(27),
                                n(55),
                                n(16),
                                n(70),
                                n(2)),
                            l = n(101),
                            f = n(100),
                            d = n(161),
                            h = n.n(d),
                            m = n(84),
                            v = n.n(m),
                            _ = n(162),
                            y = n(23),
                            x = n(1);
                        "scrollRestoration" in window.history && (Object(x.u)("manual"),
                            window.addEventListener("beforeunload", (function() {
                                Object(x.u)("auto")
                            })),
                            window.addEventListener("load", (function() {
                                Object(x.u)("manual")
                            })));

                        function w(object, e) {
                            var t = Object.keys(object);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(object);
                                e && (n = n.filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                                    }))),
                                    t.push.apply(t, n)
                            }
                            return t
                        }

                        function k(e) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {};
                                i % 2 ? w(Object(source), !0).forEach((function(t) {
                                    Object(o.a)(e, t, source[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                }))
                            }
                            return e
                        }
                        var O = function() {};
                        c.a.use(_.a);
                        var j = {
                            mode: "history",
                            base: "/",
                            linkActiveClass: "nuxt-link-active",
                            linkExactActiveClass: "nuxt-link-exact-active",
                            scrollBehavior: function(e, t, n) {
                                var r = !1,
                                    o = e !== t;
                                n ? r = n : o && function(e) {
                                    var t = Object(x.g)(e);
                                    if (1 === t.length) {
                                        var n = t[0].options;
                                        return !1 !== (void 0 === n ? {} : n).scrollToTop
                                    }
                                    return t.some((function(e) {
                                        var t = e.options;
                                        return t && t.scrollToTop
                                    }))
                                }(e) && (r = {
                                    x: 0,
                                    y: 0
                                });
                                var c = window.$nuxt;
                                return (!o || e.path === t.path && e.hash !== t.hash) && c.$nextTick((function() {
                                        return c.$emit("triggerScroll")
                                    })),
                                    new Promise((function(t) {
                                        c.$once("triggerScroll", (function() {
                                            if (e.hash) {
                                                var n = e.hash;
                                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                                try {
                                                    document.querySelector(n) && (r = {
                                                        selector: n
                                                    })
                                                } catch (e) {
                                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                                }
                                            }
                                            t(r)
                                        }))
                                    }))
                            },
                            routes: [{
                                path: "/about",
                                component: function() {
                                    return Object(x.m)(n.e(14).then(n.bind(null, 640)))
                                },
                                name: "about"
                            }, {
                                path: "/docs",
                                component: function() {
                                    return Object(x.m)(n.e(19).then(n.bind(null, 641)))
                                },
                                children: [{
                                    path: "",
                                    component: function() {
                                        return Object(x.m)(n.e(22).then(n.bind(null, 643)))
                                    },
                                    name: "docs"
                                }, {
                                    path: "authentication",
                                    component: function() {
                                        return Object(x.m)(Promise.all([n.e(0), n.e(20)]).then(n.bind(null, 644)))
                                    },
                                    name: "docs-authentication"
                                }, {
                                    path: "endpoints",
                                    component: function() {
                                        return Object(x.m)(n.e(21).then(n.bind(null, 642)))
                                    },
                                    name: "docs-endpoints"
                                }, {
                                    path: "ratelimiting",
                                    component: function() {
                                        return Object(x.m)(Promise.all([n.e(0), n.e(23)]).then(n.bind(null, 645)))
                                    },
                                    name: "docs-ratelimiting"
                                }, {
                                    path: "structures",
                                    component: function() {
                                        return Object(x.m)(Promise.all([n.e(0), n.e(24)]).then(n.bind(null, 646)))
                                    },
                                    name: "docs-structures"
                                }]
                            }, {
                                path: "/login",
                                component: function() {
                                    return Object(x.m)(n.e(26).then(n.bind(null, 647)))
                                },
                                name: "login"
                            }, {
                                path: "/logout",
                                component: function() {
                                    return Object(x.m)(n.e(27).then(n.bind(null, 648)))
                                },
                                name: "logout"
                            }, {
                                path: "/profile",
                                component: function() {
                                    return Object(x.m)(Promise.all([n.e(2), n.e(29)]).then(n.bind(null, 649)))
                                },
                                name: "profile"
                            }, {
                                path: "/search",
                                component: function() {
                                    return Object(x.m)(n.e(30).then(n.bind(null, 639)))
                                },
                                name: "search"
                            }, {
                                path: "/terms",
                                component: function() {
                                    return Object(x.m)(Promise.all([n.e(0), n.e(31)]).then(n.bind(null, 650)))
                                },
                                name: "terms"
                            }, {
                                path: "/bots/add",
                                component: function() {
                                    return Object(x.m)(Promise.all([n.e(0), n.e(3), n.e(1), n.e(18)]).then(n.bind(null, 651)))
                                },
                                name: "bots-add"
                            }, {
                                path: "/bots/:id",
                                component: function() {
                                    return Object(x.m)(n.e(17).then(n.bind(null, 652)))
                                },
                                name: "bots-id"
                            }, {
                                path: "/profile/:id",
                                component: function() {
                                    return Object(x.m)(Promise.all([n.e(2), n.e(28)]).then(n.bind(null, 653)))
                                },
                                name: "profile-id"
                            }, {
                                path: "/bots/:id?/delete",
                                component: function() {
                                    return Object(x.m)(n.e(15).then(n.bind(null, 654)))
                                },
                                name: "bots-id-delete"
                            }, {
                                path: "/bots/:id?/edit",
                                component: function() {
                                    return Object(x.m)(Promise.all([n.e(0), n.e(3), n.e(1), n.e(16)]).then(n.bind(null, 655)))
                                },
                                name: "bots-id-edit"
                            }, {
                                path: "/",
                                component: function() {
                                    return Object(x.m)(n.e(25).then(n.bind(null, 656)))
                                },
                                name: "index"
                            }],
                            fallback: !1
                        };

                        function C(e, t) {
                            var base = t._app && t._app.basePath || j.base,
                                n = new _.a(k(k({}, j), {}, {
                                    base: base
                                })),
                                r = n.push;
                            n.push = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O,
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                return r.call(this, e, t, n)
                            };
                            var o = n.resolve.bind(n);
                            return n.resolve = function(e, t, n) {
                                    return "string" == typeof e && (e = Object(y.d)(e)),
                                        o(e, t, n)
                                },
                                n
                        }
                        var $ = {
                                name: "NuxtChild",
                                functional: !0,
                                props: {
                                    nuxtChildKey: {
                                        type: String,
                                        default: ""
                                    },
                                    keepAlive: Boolean,
                                    keepAliveProps: {
                                        type: Object,
                                        default: void 0
                                    }
                                },
                                render: function(e, t) {
                                    var n = t.parent,
                                        data = t.data,
                                        r = t.props,
                                        o = n.$createElement;
                                    data.nuxtChild = !0;
                                    for (var c = n, l = n.$nuxt.nuxt.transitions, f = n.$nuxt.nuxt.defaultTransition, d = 0; n;)
                                        n.$vnode && n.$vnode.data.nuxtChild && d++,
                                        n = n.$parent;
                                    data.nuxtChildDepth = d;
                                    var h = l[d] || f,
                                        m = {};
                                    S.forEach((function(e) {
                                        void 0 !== h[e] && (m[e] = h[e])
                                    }));
                                    var v = {};
                                    P.forEach((function(e) {
                                        "function" == typeof h[e] && (v[e] = h[e].bind(c))
                                    }));
                                    var _ = v.beforeEnter;
                                    if (v.beforeEnter = function(e) {
                                            if (window.$nuxt.$nextTick((function() {
                                                    window.$nuxt.$emit("triggerScroll")
                                                })),
                                                _)
                                                return _.call(c, e)
                                        }, !1 === h.css) {
                                        var y = v.leave;
                                        (!y || y.length < 2) && (v.leave = function(e, t) {
                                            y && y.call(c, e),
                                                c.$nextTick(t)
                                        })
                                    }
                                    var x = o("routerView", data);
                                    return r.keepAlive && (x = o("keep-alive", {
                                            props: r.keepAliveProps
                                        }, [x])),
                                        o("transition", {
                                            props: m,
                                            on: v
                                        }, [x])
                                }
                            },
                            S = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                            P = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                            R = {
                                props: ["error"],
                                mounted: function() {
                                    404 !== this.error.statusCode && console.error("".concat(this.error.statusCode, ": ").concat(this.error.message)),
                                        null === this.error.message && (400 === this.error.statusCode ? this.error.message = this.$t("error.badRequest") : 403 === this.error.statusCode ? this.error.message = this.$t("error.permissionDenied") : 429 === this.error.statusCode ? this.error.message = this.$t("error.ratelimited") : 500 === this.error.statusCode || 502 === this.error.statusCode ? this.error.message = this.$t("error.internalServerError") : 503 === this.error.statusCode ? this.error.message = this.$t("error.serviceUnavailable") : 504 === this.error.statusCode && (this.error.message = this.$t("error.apiDown")))
                                }
                            },
                            E = (n(271),
                                n(9)),
                            L = Object(E.a)(R, (function() {
                                var e = this,
                                    t = e.$createElement,
                                    n = e._self._c || t;
                                return n("div", {
                                    staticClass: "centered-container padded-container error"
                                }, [n("h1", {
                                    staticClass: "error__title"
                                }, [e._v("\n    " + e._s(e.error.statusCode) + "\n  ")]), e._v(" "), n("h2", {
                                    staticClass: "error__message"
                                }, [e._v("\n    " + e._s(e.error.message) + "\n  ")]), e._v(" "), n("nuxt-link", {
                                    staticClass: "button",
                                    attrs: {
                                        to: "/"
                                    }
                                }, [e._v("Go home")])], 1)
                            }), [], !1, null, null, null).exports,
                            A = n(10),
                            D = (n(116),
                                n(117), {
                                    name: "Nuxt",
                                    components: {
                                        NuxtChild: $,
                                        NuxtError: L
                                    },
                                    props: {
                                        nuxtChildKey: {
                                            type: String,
                                            default: void 0
                                        },
                                        keepAlive: Boolean,
                                        keepAliveProps: {
                                            type: Object,
                                            default: void 0
                                        },
                                        name: {
                                            type: String,
                                            default: "default"
                                        }
                                    },
                                    errorCaptured: function(e) {
                                        this.displayingNuxtError && (this.errorFromNuxtError = e,
                                            this.$forceUpdate())
                                    },
                                    computed: {
                                        routerViewKey: function() {
                                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                                                return this.nuxtChildKey || Object(x.c)(this.$route.matched[0].path)(this.$route.params);
                                            var e = Object(A.a)(this.$route.matched, 1)[0];
                                            if (!e)
                                                return this.$route.path;
                                            var t = e.components.default;
                                            if (t && t.options) {
                                                var n = t.options;
                                                if (n.key)
                                                    return "function" == typeof n.key ? n.key(this.$route) : n.key
                                            }
                                            return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                                        }
                                    },
                                    beforeCreate: function() {
                                        c.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                                    },
                                    render: function(e) {
                                        var t = this;
                                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                                                return t.errorFromNuxtError = !1
                                            })),
                                            e("div", {}, [e("h2", "An error occurred while showing the error page"), e("p", "Unfortunately an error occurred and while showing the error page another error occurred"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                                                props: {
                                                    to: "/"
                                                }
                                            }, "Go back to home")])) : (this.displayingNuxtError = !0,
                                            this.$nextTick((function() {
                                                return t.displayingNuxtError = !1
                                            })),
                                            e(L, {
                                                props: {
                                                    error: this.nuxt.err
                                                }
                                            })) : e("NuxtChild", {
                                            key: this.routerViewKey,
                                            props: this.$props
                                        })
                                    }
                                }),
                            T = (n(28),
                                n(37),
                                n(39),
                                n(40), {
                                    name: "NuxtLoading",
                                    data: function() {
                                        return {
                                            percent: 0,
                                            show: !1,
                                            canSucceed: !0,
                                            reversed: !1,
                                            skipTimerCount: 0,
                                            rtl: !1,
                                            throttle: 200,
                                            duration: 5e3,
                                            continuous: !1
                                        }
                                    },
                                    computed: {
                                        left: function() {
                                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                                        }
                                    },
                                    beforeDestroy: function() {
                                        this.clear()
                                    },
                                    methods: {
                                        clear: function() {
                                            clearInterval(this._timer),
                                                clearTimeout(this._throttle),
                                                this._timer = null
                                        },
                                        start: function() {
                                            var e = this;
                                            return this.clear(),
                                                this.percent = 0,
                                                this.reversed = !1,
                                                this.skipTimerCount = 0,
                                                this.canSucceed = !0,
                                                this.throttle ? this._throttle = setTimeout((function() {
                                                    return e.startTimer()
                                                }), this.throttle) : this.startTimer(),
                                                this
                                        },
                                        set: function(e) {
                                            return this.show = !0,
                                                this.canSucceed = !0,
                                                this.percent = Math.min(100, Math.max(0, Math.floor(e))),
                                                this
                                        },
                                        get: function() {
                                            return this.percent
                                        },
                                        increase: function(e) {
                                            return this.percent = Math.min(100, Math.floor(this.percent + e)),
                                                this
                                        },
                                        decrease: function(e) {
                                            return this.percent = Math.max(0, Math.floor(this.percent - e)),
                                                this
                                        },
                                        pause: function() {
                                            return clearInterval(this._timer),
                                                this
                                        },
                                        resume: function() {
                                            return this.startTimer(),
                                                this
                                        },
                                        finish: function() {
                                            return this.percent = this.reversed ? 0 : 100,
                                                this.hide(),
                                                this
                                        },
                                        hide: function() {
                                            var e = this;
                                            return this.clear(),
                                                setTimeout((function() {
                                                    e.show = !1,
                                                        e.$nextTick((function() {
                                                            e.percent = 0,
                                                                e.reversed = !1
                                                        }))
                                                }), 500),
                                                this
                                        },
                                        fail: function(e) {
                                            return this.canSucceed = !1,
                                                this
                                        },
                                        startTimer: function() {
                                            var e = this;
                                            this.show || (this.show = !0),
                                                void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)),
                                                this._timer = setInterval((function() {
                                                    e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut),
                                                        e.continuous && (e.percent >= 100 || e.percent <= 0) && (e.skipTimerCount = 1,
                                                            e.reversed = !e.reversed))
                                                }), 100)
                                        }
                                    },
                                    render: function(e) {
                                        var t = e(!1);
                                        return this.show && (t = e("div", {
                                                staticClass: "nuxt-progress",
                                                class: {
                                                    "nuxt-progress-notransition": this.skipTimerCount > 0,
                                                        "nuxt-progress-failed": !this.canSucceed
                                                },
                                                style: {
                                                    width: this.percent + "%",
                                                    left: this.left
                                                }
                                            })),
                                            t
                                    }
                                }),
                            I = (n(273),
                                Object(E.a)(T, undefined, undefined, !1, null, null, null).exports),
                            N = (n(275), {
                                data: function() {
                                    return {
                                        hasChecked: !0
                                    }
                                },
                                mounted: function() {
                                    window.localStorage && (this.hasChecked = !!localStorage.getItem("readBanner"))
                                },
                                methods: {
                                    killThis: function() {
                                        var e;
                                        null === (e = localStorage) || void 0 === e || e.setItem("readBanner", !0),
                                            this.hasChecked = !0
                                    }
                                }
                            }),
                            M = (n(277),
                                Object(E.a)(N, (function() {
                                    var e = this,
                                        t = e.$createElement,
                                        n = e._self._c || t;
                                    return n("transition", {
                                        attrs: {
                                            name: "cookie-slide"
                                        }
                                    }, [e.hasChecked ? e._e() : n("div", {
                                        staticClass: "cookie-banner"
                                    }, [n("div", {
                                        staticClass: "cookie-banner__text",
                                        domProps: {
                                            innerHTML: e._s(e.$t("cookies.banner"))
                                        }
                                    }), e._v(" "), n("button", {
                                        staticClass: "button is-form",
                                        on: {
                                            click: e.killThis
                                        }
                                    }, [e._v("\n      " + e._s(e.$t("cookies.okay")) + "\n    ")])])])
                                }), [], !1, null, null, null).exports),
                            B = n(225),
                            U = n(226),
                            z = n(227);

                        function F(e, t) {
                            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!n) {
                                if (Array.isArray(e) || (n = function(e, t) {
                                        if (!e)
                                            return;
                                        if ("string" == typeof e)
                                            return H(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === n && e.constructor && (n = e.constructor.name);
                                        if ("Map" === n || "Set" === n)
                                            return Array.from(e);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                            return H(e, t)
                                    }(e)) || t && e && "number" == typeof e.length) {
                                    n && (e = n);
                                    var i = 0,
                                        r = function() {};
                                    return {
                                        s: r,
                                        n: function() {
                                            return i >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[i++]
                                            }
                                        },
                                        e: function(e) {
                                            throw e
                                        },
                                        f: r
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var o, c = !0,
                                l = !1;
                            return {
                                s: function() {
                                    n = n.call(e)
                                },
                                n: function() {
                                    var e = n.next();
                                    return c = e.done,
                                        e
                                },
                                e: function(e) {
                                    l = !0,
                                        o = e
                                },
                                f: function() {
                                    try {
                                        c || null == n.return || n.return()
                                    } finally {
                                        if (l)
                                            throw o
                                    }
                                }
                            }
                        }

                        function H(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var i = 0, n = new Array(t); i < t; i++)
                                n[i] = e[i];
                            return n
                        }
                        var X = {
                                data: function() {
                                    return {
                                        visible: !1,
                                        progress: "",
                                        steps: [],
                                        reference: "38-38-40-40-37-39-37-39-66-65-13",
                                        finished: !1
                                    }
                                },
                                mounted: function() {
                                    window.addEventListener("keydown", this.keydown.bind(this))
                                },
                                methods: {
                                    keydown: function(e) {
                                        this.finished || (this.steps.push(e.keyCode),
                                            this.steps.length > 11 && this.steps.shift(),
                                            this.steps.join("-") === this.reference && (this.visible = !0,
                                                this.finished = !0,
                                                console.log("Ka-ching!"),
                                                this.execute()))
                                    },
                                    sleep: function() {
                                        var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
                                        return new Promise((function(e) {
                                            setTimeout(e, time)
                                        }))
                                    },
                                    output: function(text) {
                                        var e = arguments,
                                            t = this;
                                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                                            var r, o, c, l;
                                            return regeneratorRuntime.wrap((function(n) {
                                                for (;;)
                                                    switch (n.prev = n.next) {
                                                        case 0:
                                                            r = e.length > 1 && void 0 !== e[1] ? e[1] : 100,
                                                                o = F(text),
                                                                n.prev = 2,
                                                                o.s();
                                                        case 4:
                                                            if ((c = o.n()).done) {
                                                                n.next = 11;
                                                                break
                                                            }
                                                            return l = c.value,
                                                                t.progress += l,
                                                                n.next = 9,
                                                                t.sleep(r);
                                                        case 9:
                                                            n.next = 4;
                                                            break;
                                                        case 11:
                                                            n.next = 16;
                                                            break;
                                                        case 13:
                                                            n.prev = 13,
                                                                n.t0 = n.catch(2),
                                                                o.e(n.t0);
                                                        case 16:
                                                            return n.prev = 16,
                                                                o.f(),
                                                                n.finish(16);
                                                        case 19:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                            }), n, null, [
                                                [2, 13, 16, 19]
                                            ])
                                        })))()
                                    },
                                    clear: function() {
                                        var e = this;
                                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                                            var i;
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (;;)
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2,
                                                                e.sleep(2e3);
                                                        case 2:
                                                            i = e.progress.length;
                                                        case 3:
                                                            if (!(i >= 0)) {
                                                                t.next = 10;
                                                                break
                                                            }
                                                            return e.progress = e.progress.substring(0, i),
                                                                t.next = 7,
                                                                e.sleep(50);
                                                        case 7:
                                                            i--,
                                                            t.next = 3;
                                                            break;
                                                        case 10:
                                                            return t.next = 12,
                                                                e.sleep(3e3);
                                                        case 12:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                            }), t)
                                        })))()
                                    },
                                    execute: function() {
                                        var e = this;
                                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (;;)
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2,
                                                                e.sleep(1e3);
                                                        case 2:
                                                            return t.next = 4,
                                                                e.output("Do you think\nyou're funny?", 150);
                                                        case 4:
                                                            return t.next = 6,
                                                                e.clear();
                                                        case 6:
                                                            return t.next = 8,
                                                                e.output("Are you\nsatisfied?", 150);
                                                        case 8:
                                                            return t.next = 10,
                                                                e.clear();
                                                        case 10:
                                                            return t.next = 12,
                                                                e.output("\nProud?", 500);
                                                        case 12:
                                                            return t.next = 14,
                                                                e.clear();
                                                        case 14:
                                                            return t.next = 16,
                                                                e.output("I'm so happy\nfor you.", 150);
                                                        case 16:
                                                            return t.next = 18,
                                                                e.clear();
                                                        case 18:
                                                            return t.next = 20,
                                                                e.output("So happy,\n", 80);
                                                        case 20:
                                                            return t.next = 22,
                                                                e.sleep(500);
                                                        case 22:
                                                            return t.next = 24,
                                                                e.output("I'm ", 150);
                                                        case 24:
                                                            return t.next = 26,
                                                                e.output("screaming.", 350);
                                                        case 26:
                                                            return t.next = 28,
                                                                e.clear();
                                                        case 28:
                                                            return e.$refs.egg.classList.add("egg__bye"),
                                                                t.next = 31,
                                                                e.sleep(1e3);
                                                        case 31:
                                                            e.visible = !1;
                                                        case 32:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                            }), t)
                                        })))()
                                    }
                                }
                            },
                            K = (n(282),
                                Object(E.a)(X, (function() {
                                    var e = this,
                                        t = e.$createElement,
                                        n = e._self._c || t;
                                    return n("div", [e.visible ? n("div", {
                                        ref: "egg",
                                        staticClass: "egg"
                                    }, [n("span", {
                                        staticClass: "egg__text"
                                    }, [e._v(e._s(e.progress))])]) : e._e()])
                                }), [], !1, null, null, null).exports),
                            G = {
                                components: {
                                    Heart: B.a,
                                    NodeJs: U.a,
                                    VueJs: z.a,
                                    Egg: K
                                }
                            },
                            W = (n(284),
                                Object(E.a)(G, (function() {
                                    var e = this,
                                        t = e.$createElement,
                                        n = e._self._c || t;
                                    return n("footer", {
                                        staticClass: "footer"
                                    }, [n("div", {
                                        staticClass: "footer__row"
                                    }, [e._v("© 2022 — Discord Bots")]), e._v(" "), n("div", {
                                        staticClass: "footer__row"
                                    }, [e._v("\n    " + e._s(e.$t("footer.builtWith")) + "\n    "), n("VueJs", {
                                        attrs: {
                                            title: "Vue"
                                        }
                                    }), e._v("\n    , \n    "), n("NodeJs", {
                                        attrs: {
                                            title: "NodeJS"
                                        }
                                    }), e._v("\n     and \n    "), n("Heart", {
                                        attrs: {
                                            title: "love"
                                        }
                                    }), e._v("\n    .\n  ")], 1), e._v(" "), n("div", {
                                        staticClass: "footer__row footer__links"
                                    }, [n("nuxt-link", {
                                        staticClass: "footer__link",
                                        attrs: {
                                            to: "/terms"
                                        }
                                    }, [e._v("\n      " + e._s(e.$t("common.terms")) + "\n    ")]), e._v(" "), n("a", {
                                        staticClass: "footer__link",
                                        attrs: {
                                            href: "https://medium.com/dbots"
                                        }
                                    }, [e._v("\n      " + e._s(e.$t("footer.blog")) + "\n    ")]), e._v(" "), n("a", {
                                        staticClass: "footer__link",
                                        attrs: {
                                            href: "https://twitter.com/discordbots"
                                        }
                                    }, [e._v("\n      " + e._s(e.$t("footer.twitter")) + "\n    ")]), e._v(" "), n("a", {
                                        staticClass: "footer__link",
                                        attrs: {
                                            href: "https://discord.gg/tdBjAc3Hh7"
                                        }
                                    }, [e._v("\n      " + e._s(e.$t("footer.appeals")) + "\n    ")])], 1), e._v(" "), n("Egg")], 1)
                                }), [], !1, null, null, null).exports),
                            V = (n(56),
                                n(38),
                                n(127),
                                n(228)),
                            Y = n(229),
                            J = n(230),
                            Q = n(231),
                            Z = n(232),
                            ee = n(233),
                            te = n(167),
                            ne = {
                                data: function() {
                                    return {
                                        scrollTop: 0
                                    }
                                },
                                mounted: function() {
                                    var e = this,
                                        t = function() {
                                            return e.scrollTop = window.pageYOffset || document.documentElement.scrollTop
                                        },
                                        n = {
                                            passive: !0
                                        };
                                    window.addEventListener("scroll", t, n),
                                        this.$scroll = {
                                            cb: t,
                                            opt: n
                                        }
                                },
                                beforeDestroy: function() {
                                    var e = this.$scroll,
                                        t = e.cb,
                                        n = e.opt;
                                    window.removeEventListener("scroll", t, n),
                                        delete this.$scroll
                                }
                            },
                            re = n(168);
                        var oe = {
                                components: {
                                    AccountCircle: V.a,
                                    Bell: Y.a,
                                    CheckDecagram: J.a,
                                    Plus: Z.a,
                                    Tooltip: te.a,
                                    Logout: Q.a,
                                    Translate: ee.a
                                },
                                mixins: [ne],
                                props: {
                                    hasSearch: {
                                        type: Boolean
                                    }
                                },
                                data: function() {
                                    return {
                                        notificationsMenuOpen: !1,
                                        languageMenuOpen: !1,
                                        mobileMenuOpen: !1,
                                        mobileUserMenuOpen: !1,
                                        mobileNotificationsActive: !1,
                                        search: "",
                                        englishFlags: {
                                            GB: "🇬🇧",
                                            US: "🇺🇸",
                                            AU: "🇦🇺"
                                        }
                                    }
                                },
                                computed: {
                                    avatarURL: function() {
                                        return Object(re.a)(this.$store.state.auth.user.avatarURL, 64, "jpg")
                                    },
                                    user: function() {
                                        return this.$store.state.auth.user
                                    },
                                    invitesString: function() {
                                        return this.user.invites.length > 9 ? "9+" : this.user.invites.length
                                    },
                                    availableLocales: function() {
                                        return this.$i18n.locales
                                    }
                                },
                                mounted: function() {
                                    var e = this,
                                        t = function(t) {
                                            var n = function(e) {
                                                for (var t = e, n = []; t.parentElement;)
                                                    n.push(t = t.parentElement);
                                                return n
                                            }(t.target);
                                            e.notificationsMenuOpen && !n.includes(e.$refs.notificationsMenu.$el) && (e.notificationsMenuOpen = !1),
                                                e.mobileMenuOpen && !n.includes(e.$refs.mobileMenu) && (e.mobileMenuOpen = !1),
                                                e.mobileUserMenuOpen && !n.includes(e.$refs.mobileUserMenu) && (e.mobileUserMenuOpen = !1,
                                                    e.mobileNotificationsActive = !1)
                                        };
                                    document.addEventListener("click", t),
                                        this.$mobileClicks = t
                                },
                                beforeDestroy: function() {
                                    var e = this.$mobileClicks;
                                    document.removeEventListener("click", e),
                                        delete this.$mobileClicks
                                },
                                methods: {
                                    submit: function() {
                                        this.$router.push("/search?q=".concat(this.search))
                                    },
                                    acceptInvite: function(e) {
                                        var t = this;
                                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                                            var r;
                                            return regeneratorRuntime.wrap((function(n) {
                                                for (;;)
                                                    switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 2,
                                                                t.$axios.$post("/bots/".concat(e.botId, "/invite"));
                                                        case 2:
                                                            return n.next = 4,
                                                                t.$axios.$get("/users/@me");
                                                        case 4:
                                                            r = n.sent,
                                                                t.$store.commit("auth/setUser", r);
                                                        case 6:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                            }), n)
                                        })))()
                                    },
                                    rejectInvite: function(e) {
                                        var t = this;
                                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                                            var r;
                                            return regeneratorRuntime.wrap((function(n) {
                                                for (;;)
                                                    switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 2,
                                                                t.$axios.$delete("/bots/".concat(e.botId, "/invite"));
                                                        case 2:
                                                            return n.next = 4,
                                                                t.$axios.$get("/users/@me");
                                                        case 4:
                                                            r = n.sent,
                                                                t.$store.commit("auth/setUser", r);
                                                        case 6:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                            }), n)
                                        })))()
                                    },
                                    escape: function(e) {
                                        return e.replace(/</, "&lt;").replace(/>/, "&gt;").replace(/&/, "&amp;").replace(/"/, "&quot;")
                                    }
                                }
                            },
                            ae = (n(288),
                                Object(E.a)(oe, (function() {
                                            var e = this,
                                                t = e.$createElement,
                                                n = e._self._c || t;
                                            return n("div", [n("nav", {
                                                                class: ["navbar", {
                                                                    "is-opaque": e.scrollTop >= 10
                                                                }]
                                                            }, [n("div", {
                                                                    staticClass: "navbar__side"
                                                                }, [n("nuxt-link", {
                                                                    staticClass: "navbar__icon",
                                                                    attrs: {
                                                                        to: "/"
                                                                    }
                                                                }, [n("img", {
                                                                    attrs: {
                                                                        src: "/img/logo_transparent.png",
                                                                        alt: "Discord Bots logo",
                                                                        width: "48"
                                                                    }
                                                                })]), e._v(" "), n("ul", {
                                                                    staticClass: "navbar__links"
                                                                }, [n("nuxt-link", {
                                                                    staticClass: "navbar__link needs-exact",
                                                                    attrs: {
                                                                        tag: "li",
                                                                        to: "/"
                                                                    }
                                                                }, [n("a", {
                                                                    staticClass: "navbar__link__activator"
                                                                }, [e._v(e._s(e.$t("navbar.home")))])]), e._v(" "), n("li", [n("a", {
                                                                    staticClass: "navbar__link navbar__link__activator",
                                                                    attrs: {
                                                                        href: "https://discord.gg/0cDvIgU2voWn4BaD"
                                                                    }
                                                                }, [e._v("\n            " + e._s(e.$t("navbar.server")) + "\n          ")])]), e._v(" "), n("nuxt-link", {
                                                                    staticClass: "navbar__link",
                                                                    attrs: {
                                                                        tag: "li",
                                                                        to: "/about"
                                                                    }
                                                                }, [n("a", {
                                                                    staticClass: "navbar__link__activator"
                                                                }, [e._v(e._s(e.$t("common.about")))])]), e._v(" "), e.user ? n("nuxt-link", {
                                                                    staticClass: "navbar__link",
                                                                    attrs: {
                                                                        tag: "li",
                                                                        to: "/docs"
                                                                    }
                                                                }, [n("a", {
                                                                    staticClass: "navbar__link__activator"
                                                                }, [e._v(e._s(e.$t("navbar.api")))])]) : e._e()], 1)], 1), e._v(" "), e.hasSearch ? n("div", {
                                                                    staticClass: "navbar__search__wrapper hidden-small"
                                                                }, [n("input", {
                                                                    directives: [{
                                                                        name: "model",
                                                                        rawName: "v-model",
                                                                        value: e.search,
                                                                        expression: "search"
                                                                    }],
                                                                    staticClass: "navbar__search",
                                                                    attrs: {
                                                                        type: "text",
                                                                        placeholder: e.$t("common.search")
                                                                    },
                                                                    domProps: {
                                                                        value: e.search
                                                                    },
                                                                    on: {
                                                                        keyup: function(t) {
                                                                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.submit.apply(null, arguments)
                                                                        },
                                                                        input: function(t) {
                                                                            t.target.composing || (e.search = t.target.value)
                                                                        }
                                                                    }
                                                                })]) : e._e(), e._v(" "), n("div", {
                                                                        staticClass: "navbar__side navbar__user"
                                                                    }, [n("Tooltip", {
                                                                            ref: "languageMenu",
                                                                            attrs: {
                                                                                disabled: e.languageMenuOpen,
                                                                                text: e.$t("navbar.language")
                                                                            }
                                                                        }, [n("button", {
                                                                            staticClass: "navbar__button is-circle has-regular-icon",
                                                                            on: {
                                                                                click: function(t) {
                                                                                    e.languageMenuOpen = !e.languageMenuOpen
                                                                                }
                                                                            }
                                                                        }, [n("Translate", {
                                                                            attrs: {
                                                                                title: e.$t("navbar.language"),
                                                                                decorative: ""
                                                                            }
                                                                        })], 1), e._v(" "), n("transition", {
                                                                            attrs: {
                                                                                name: "fade"
                                                                            }
                                                                        }, [e.languageMenuOpen ? n("div", {
                                                                            staticClass: "language__menu"
                                                                        }, [n("ul", {
                                                                            directives: [{
                                                                                name: "twemoji",
                                                                                rawName: "v-twemoji"
                                                                            }],
                                                                            staticClass: "languages__list"
                                                                        }, e._l(e.availableLocales, (function(t) {
                                                                            return n("li", {
                                                                                key: t.code,
                                                                                staticClass: "language"
                                                                            }, [n("div", {
                                                                                staticClass: "language__content"
                                                                            }, [n("a", {
                                                                                attrs: {
                                                                                    href: "#"
                                                                                },
                                                                                on: {
                                                                                    click: function(n) {
                                                                                        return n.preventDefault(),
                                                                                            n.stopPropagation(),
                                                                                            e.$i18n.setLocale(t.code)
                                                                                    }
                                                                                }
                                                                            }, [n("span", {
                                                                                staticClass: "language__content__flag"
                                                                            }, [e._v("\n                      " + e._s("en" === t.code && e.englishFlags[e.$store.state.country] || t.flag) + "\n                    ")]), e._v(" "), n("span", {
                                                                                staticClass: "language__content__name"
                                                                            }, [e._v("\n                      " + e._s(t.name) + "\n                    ")])])])])
                                                                        })), 0)]) : e._e()])], 1), e._v(" "), e.user ? [e.user.helper ? n("Tooltip", {
                                                                                attrs: {
                                                                                    text: e.$t("navbar.verification")
                                                                                }
                                                                            }, [n("a", {
                                                                                staticClass: "navbar__button is-circle has-regular-icon",
                                                                                attrs: {
                                                                                    href: "https://verify.bots.gg/"
                                                                                }
                                                                            }, [n("CheckDecagram", {
                                                                                attrs: {
                                                                                    title: e.$t("navbar.verification"),
                                                                                    decorative: ""
                                                                                }
                                                                            })], 1)]) : e._e(), e._v(" "), n("Tooltip", {
                                                                                    ref: "notificationsMenu",
                                                                                    attrs: {
                                                                                        disabled: e.notificationsMenuOpen,
                                                                                        text: e.$t("navbar.notifications")
                                                                                    }
                                                                                }, [n("button", {
                                                                                        class: ["navbar__button", "navbar__notifications", "is-circle", "has-regular-icon", {
                                                                                            "is-active": e.user.invites.length
                                                                                        }],
                                                                                        on: {
                                                                                            click: function(t) {
                                                                                                e.notificationsMenuOpen = !e.notificationsMenuOpen
                                                                                            }
                                                                                        }
                                                                                    }, [e.user.invites.length ? [e._v("\n              " + e._s(e.invitesString) + "\n            ")] : n("Bell", {
                                                                                        attrs: {
                                                                                            title: e.$t("navbar.notifications"),
                                                                                            decorative: ""
                                                                                        }
                                                                                    })], 2), e._v(" "), n("transition", {
                                                                                            attrs: {
                                                                                                name: "fade"
                                                                                            }
                                                                                        }, [e.notificationsMenuOpen ? n("div", {
                                                                                            staticClass: "notifications__menu"
                                                                                        }, [e.user.invites.length ? n("ul", {
                                                                                                staticClass: "notifications__list"
                                                                                            }, e._l(e.user.invites, (function(t) {
                                                                                                return n("li", {
                                                                                                    key: t.botId,
                                                                                                    staticClass: "notification"
                                                                                                }, [n("nuxt-link", {
                                                                                                    staticClass: "notification__clicker",
                                                                                                    attrs: {
                                                                                                        to: "/bots/" + t.botId
                                                                                                    }
                                                                                                }, [n("img", {
                                                                                                    staticClass: "notification__image",
                                                                                                    attrs: {
                                                                                                        src: t.avatarURL,
                                                                                                        height: "64",
                                                                                                        width: "64"
                                                                                                    }
                                                                                                })]), e._v(" "), n("div", {
                                                                                                    staticClass: "notification__content"
                                                                                                }, [n("div", {
                                                                                                    staticClass: "notification__body",
                                                                                                    domProps: {
                                                                                                        innerHTML: e._s(e.$t("navbar.notification.invite.body", {
                                                                                                            invite: e.escape(t.username + "#" + t.discriminator)
                                                                                                        }))
                                                                                                    }
                                                                                                }), e._v(" "), n("div", {
                                                                                                    staticClass: "notification__actions button-row"
                                                                                                }, [n("button", {
                                                                                                        staticClass: "button is-form",
                                                                                                        on: {
                                                                                                            click: function(n) {
                                                                                                                return e.acceptInvite(t)
                                                                                                            }
                                                                                                        }
                                                                                                    }, [e._v("\n                        " + e._s(e.$t("navbar.notification.invite.accept")) + "\n                      ")]), e._v(" "), n("button", {
                                                                                                            staticClass: "button is-form is-danger",
                                                                                                            on: {
                                                                                                                click: function(n) {
                                                                                                                    return e.rejectInvite(t)
                                                                                                                }
                                                                                                                lutimes
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }, [n("nuxt-link", {
                                                                                                    staticClass: "navbar__button is-circle",
                                                                                                    attrs: {
                                                                                                        to: "/bots/add"
                                                                                                    }
                                                                                                }, [n("Plus", {
                                                                                                    attrs: {
                                                                                                        title: e.$t("common.addBot"),
                                                                                                        decorative: ""
                                                                                                    }
                                                                                                })], 1)], 1), e._v(" "), n("Tooltip", {
                                                                                                    attrs: {
                                                                                                        text: e.user.username + "#" + e.user.discriminator
                                                                                                    }
                                                                                                }, [n("div", {
                                                                                                    staticClass: "navbar__user-icon"
                                                                                                }, [n("img", {
                                                                                                    attrs: {
                                                                                                        src: e.avatarURL,
                                                                                                        alt: "User icon",
                                                                                                        width: "32",
                                                                                                        height: "32"
                                                                                                    }
                                                                                                }), e._v(" "), n("nuxt-link", {
                                                                                                    staticClass: "navbar__user-icon__obscurer",
                                                                                                    attrs: {
                                                                                                        to: "/profile"
                                                                                                    }
                                                                                                })], 1)]), e._v(" "), n("nuxt-link", {
                                                                                                    staticClass: "navbar__button",
                                                                                                    attrs: {
                                                                                                        to: "/logout"
                                                                                                    }
                                                                                                }, [e._v("\n          " + e._s(e.$t("common.logout")) + "\n        ")])]: [n("nuxt-link", {
                                                                                                    staticClass: "navbar__button",
                                                                                                    attrs: {
                                                                                                        to: "/login"
                                                                                                    }
                                                                                                }, [e._v("\n          " + e._s(e.$t("common.login")) + "\n        ")])]], 2)]), e._v(" "), n("nav", {
                                                                                                class: ["navbar", "is-mobile", {
                                                                                                    "is-opaque": e.scrollTop >= 10
                                                                                                }]
                                                                                            }, [n("div", {
                                                                                                ref: "mobileMenu",
                                                                                                staticClass: "navbar__menu"
                                                                                            }, [n("div", {
                                                                                                staticClass: "navber__menu__burger-wrapper"
                                                                                            }, [n("div", {
                                                                                                class: ["navbar__menu__burger", {
                                                                                                    "is-open": e.mobileMenuOpen
                                                                                                }],
                                                                                                on: {
                                                                                                    click: function(t) {
                                                                                                        t.preventDefault(),
                                                                                                            e.mobileMenuOpen = !e.mobileMenuOpen
                                                                                                    }
                                                                                                }
                                                                                            }, [n("div", {
                                                                                                staticClass: "burger__filler"
                                                                                            })])]), e._v(" "), n("transition", {
                                                                                                attrs: {
                                                                                                    name: "fade"
                                                                                                }
                                                                                            }, [e.mobileMenuOpen ? n("div", {
                                                                                                staticClass: "navbar__menu__popout"
                                                                                            }, [n("ul", {
                                                                                                staticClass: "navbar__menu__items"
                                                                                            }, [n("nuxt-link", {
                                                                                                staticClass: "navbar__menu__item",
                                                                                                attrs: {
                                                                                                    tag: "li",
                                                                                                    to: "/"
                                                                                                }
                                                                                            }, [n("a", [e._v(e._s(e.$t("navbar.home")))])]), e._v(" "), n("nuxt-link", {
                                                                                                staticClass: "navbar__menu__item",
                                                                                                attrs: {
                                                                                                    tag: "li",
                                                                                                    to: "/search"
                                                                                                }
                                                                                            }, [n("a", [e._v(e._s(e.$t("common.search")))])]), e._v(" "), n("li", {
                                                                                                staticClass: "navbar__menu__item"
                                                                                            }, [n("a", {
                                                                                                attrs: {
                                                                                                    href: "https://discord.gg/0cDvIgU2voWn4BaD"
                                                                                                }
                                                                                            }, [e._v("\n                " + e._s(e.$t("navbar.server")) + "\n              ")])]), e._v(" "), n("nuxt-link", {
                                                                                                staticClass: "navbar__menu__item",
                                                                                                attrs: {
                                                                                                    tag: "li",
                                                                                                    to: "/about"
                                                                                                }
                                                                                            }, [n("a", [e._v(e._s(e.$t("common.about")))])]), e._v(" "), n("nuxt-link", {
                                                                                                staticClass: "navbar__menu__item",
                                                                                                attrs: {
                                                                                                    tag: "li",
                                                                                                    to: "/terms"
                                                                                                }
                                                                                            }, [n("a", [e._v(e._s(e.$t("common.terms")))])]), e._v(" "), e.user ? n("nuxt-link", {
                                                                                                staticClass: "navbar__menu__item",
                                                                                                attrs: {
                                                                                                    tag: "li",
                                                                                                    to: "/docs"
                                                                                                }
                                                                                            }, [n("a", [e._v(e._s(e.$t("navbar.api")))])]) : e._e(), e._v(" "), e.user ? e._e() : n("nuxt-link", {
                                                                                                staticClass: "navbar__menu__item",
                                                                                                attrs: {
                                                                                                    tag: "li",
                                                                                                    to: "/login"
                                                                                                }
                                                                                            }, [n("a", [e._v(e._s(e.$t("common.login")))])])], 1)]) : e._e()])], 1), e._v(" "), n("div", {
                                                                                                staticClass: "flex__expander"
                                                                                            }), e._v(" "), n("Tooltip", {
                                                                                                ref: "mobileLanguageMenu",
                                                                                                staticClass: "navbar__language__mobile",
                                                                                                attrs: {
                                                                                                    disabled: e.languageMenuOpen,
                                                                                                    text: e.$t("navbar.language"),
                                                                                                    direction: "left"
                                                                                                }
                                                                                            }, [n("button", {
                                                                                                staticClass: "navbar__button is-circle has-regular-icon",
                                                                                                on: {
                                                                                                    click: function(t) {
                                                                                                        e.languageMenuOpen = !e.languageMenuOpen
                                                                                                    }
                                                                                                }
                                                                                            }, [n("Translate", {
                                                                                                attrs: {
                                                                                                    title: e.$t("navbar.language"),
                                                                                                    decorative: ""
                                                                                                }
                                                                                            })], 1), e._v(" "), n("transition", {
                                                                                                attrs: {
                                                                                                    name: "fade"
                                                                                                }
                                                                                            }, [e.languageMenuOpen ? n("div", {
                                                                                                staticClass: "language__menu"
                                                                                            }, [n("ul", {
                                                                                                staticClass: "languages__list"
                                                                                            }, e._l(e.availableLocales, (function(t) {
                                                                                                return n("li", {
                                                                                                    key: t.code,
                                                                                                    staticClass: "language"
                                                                                                }, [n("div", {
                                                                                                    staticClass: "language__content"
                                                                                                }, [n("a", {
                                                                                                    attrs: {
                                                                                                        href: "#"
                                                                                                    },
                                                                                                    on: {
                                                                                                        click: function(n) {
                                                                                                            return n.preventDefault(),
                                                                                                                n.stopPropagation(),
                                                                                                                e.$i18n.setLocale(t.code)
                                                                                                        }
                                                                                                    }
                                                                                                }, [e._v("\n                  " + e._s(t.name) + "\n                ")])])])
                                                                                            })), 0)]) : e._e()])], 1), e._v(" "), e.user ? n("div", {
                                                                                                ref: "mobileUserMenu",
                                                                                                staticClass: "navbar__user-icon"
                                                                                            }, [n("img", {
                                                                                                attrs: {
                                                                                                    src: e.avatarURL,
                                                                                                    alt: "User icon",
                                                                                                    width: "48",
                                                                                                    height: "48"
                                                                                                }
                                                                                            }), e._v(" "), n("a", {
                                                                                                staticClass: "navbar__user-icon__obscurer",
                                                                                                attrs: {
                                                                                                    href: "#"
                                                                                                },
                                                                                                on: {
                                                                                                    click: function(t) {
                                                                                                        t.preventDefault(),
                                                                                                            e.mobileUserMenuOpen = !e.mobileUserMenuOpen
                                                                                                    }
                                                                                                }
                                                                                            }), e._v(" "), n("transition", {
                                                                                                attrs: {
                                                                                                    name: "fade"
                                                                                                }
                                                                                            }, [e.mobileUserMenuOpen ? n("div", {
                                                                                                staticClass: "user__menu__popout"
                                                                                            }, [e.mobileNotificationsActive ? e.user.invites.length ? n("ul", {
                                                                                                staticClass: "notifications__list"
                                                                                            }, e._l(e.user.invites, (function(t) {
                                                                                                return n("li", {
                                                                                                    key: t.botId,
                                                                                                    staticClass: "notification"
                                                                                                }, [n("nuxt-link", {
                                                                                                    staticClass: "notification__clicker",
                                                                                                    attrs: {
                                                                                                        to: "/!play music/" + t.botId
                                                                                                    }
                                                                                                }, [n("img", {
                                                                                                    staticClass: "notification__image",
                                                                                                    attrs: {
                                                                                                        src: t.avatarURL,
                                                                                                        height: "64",
                                                                                                        width: "64"
                                                                                                    }
                                                                                                })]), e._v(" "), n("div", {
                                                                                                    staticClass: "notification__content"
                                                                                                }, [n("div", {
                                                                                                    staticClass: "notification__body",
                                                                                                    domProps: {
                                                                                                        innerHTML: e._s(e.$t("navbar.notification.invite.body", {
                                                                                                            invite: e.escape(t.username + "#" + t.discriminator)
                                                                                                        }))
                                                                                                    }
                                                                                                }), e._v(" "), n("div", {
                                                                                                    staticClass: "notification__actions button-row"
                                                                                                }, [n("button", {
                                                                                                    staticClass: "button is-form",
                                                                                                    on: {
                                                                                                        click: function(n) {
                                                                                                            return e.acceptInvite(t)
                                                                                                        }
                                                                                                    }
                                                                                                }, [e._v("\n                    " + e._s(e.$t("navbar.notification.invite.accept")) + "\n                  ")]), e._v(" "), n("button", {
                                                                                                    staticClass: "button is-form is-danger",
                                                                                                    on: {
                                                                                                        click: function(n) {
                                                                                                            return e.rejectInvite(t)
                                                                                                        }
                                                                                                    }
                                                                                                }, [e._v("\n                    " + e._s(e.$t("navbar.notification.invite.decline")) + "\n                  ")])])])], 1)
                                                                                            })), 0) : n("span", {
                                                                                                staticClass: "notifications__empty"
                                                                                            }, [e._v("\n            " + e._s(e.$t("navbar.noNotifications")) + "\n          ")]) : n("ul", {
                                                                                                staticClass: "user__menu__items"
                                                                                            }, [n("nuxt-link", {
                                                                                                staticClass: "user__menu__item",
                                                                                                attrs: {
                                                                                                    tag: "li",
                                                                                                    to: "/profile"
                                                                                                }
                                                                                            }, [n("a", [n("AccountCircle", {
                                                                                                attrs: {
                                                                                                    title: e.$t("common.profile"),
                                                                                                    decorative: ""
                                                                                                }
                                                                                            }), e._v("\n                " + e._s(e.$t("common.profile")) + "\n              ")], 1)]), e._v(" "), n("nuxt-link", {
                                                                                                staticClass: "user__menu__item",
                                                                                                attrs: {
                                                                                                    tag: "li",
                                                                                                    to: "/bots/add"
                                                                                                }
                                                                                            }, [n("a", [n("Plus", {
                                                                                                attrs: {
                                                                                                    title: e.$t("common.addBot"),
                                                                                                    decorative: ""
                                                                                                }
                                                                                            }), e._v("\n                " + e._s(e.$t("common.addBot")) + "\n              ")], 1)]), e._v(" "), n("li", {
                                                                                                staticClass: "user__menu__item"
                                                                                            }, [n("a", {
                                                                                                attrs: {
                                                                                                    href: "#"
                                                                                                },
                                                                                                on: {
                                                                                                    click: function(t) {
                                                                                                        t.preventDefault(),
                                                                                                            e.mobileNotificationsActive = !0
                                                                                                    }
                                                                                                }
                                                                                            }, [n("Bell", {
                                                                                                attrs: {
                                                                                                    title: "Notifications",
                                                                                                    decorative: ""
                                                                                                }
                                                                                            }), e._v("\n                " + e._s(e.$t("navbar.notifications")) + "\n                "), e.user.invites.length ? n("div", {
                                                                                                staticClass: "badge"
                                                                                            }, [e._v("\n                  " + e._s(e.invitesString) + "\n                ")]) : e._e()], 1)]), e._v(" "), e.user.helper ? n("li", {
                                                                                                staticClass: "user__menu__item"
                                                                                            }, [n("a", {
                                                                                                attrs: {
                                                                                                    href: "https://verify.bots.gg/"
                                                                                                }
                                                                                            }, [n("CheckDecagram", {
                                                                                                attrs: {
                                                                                                    title: e.$t("navbar.verification"),
                                                                                                    decorative: ""
                                                                                                }
                                                                                            }), e._v("\n                " + e._s(e.$t("navbar.verification")) + "\n              ")], 1)]) : e._e(), e._v(" "), n("nuxt-link", {
                                                                                                staticClass: "user__menu__item",
                                                                                                attrs: {
                                                                                                    tag: "li",
                                                                                                    to: "/logout"
                                                                                                }
                                                                                            }, [n("a", [n("Logout", {
                                                                                                attrs: {
                                                                                                    title: e.$t("common.logout"),
                                                                                                    decorative: ""
                                                                                                }
                                                                                            }), e._v("\n                " + e._s(e.$t("common.logout")) + "\n              ")], 1)])], 1)]) : e._e()])], 1) : e._e()], 1)])
                                                                                        }), [], !1, null, null, null).exports),
                                                                                        ie = {
                                                                                            components: {
                                                                                                CookieBanner: M,
                                                                                                AtFooter: W,
                                                                                                Navbar: ae
                                                                                            },
                                                                                            head: function() {
                                                                                                return this.$nuxtI18nHead({
                                                                                                    addDirAttribute: !0,
                                                                                                    addSeoAttributes: !0
                                                                                                })
                                                                                            }
                                                                                        },
                                                                                        se = (n(290),
                                                                                            Object(E.a)(ie, (function() {
                                                                                                    var e = this,
                                                                                                        t = e.$createElement,
                                                                                                        n = e._self._c || t;
                                                                                                    return n("div", {
                                                                                                        staticStyle: {
                                                                                                            height: "100%"
                                                                                                        }
                                                                                                    }, [n("Navbar", {
                                                                                                        attrs: {
                                                                                                            "has-search": ""
                                                                                                        }


                                                                                                    }), e._v(" "), n("main", [n("nuxt")], 1), e._v(" "), n("CookieBanner"), e._v(" "), n("AtFooter")], 1)
                                                                                                }), [], !1, null,
                                                                                                null, null).exports),
                                                                                        members(CookieBanner) ce = {
                                                                                            components: {
                                                                                                CookieBanner: M,
                                                                                                AtFooter: W,
                                                                                                Navbar: ae,
                                                                                                Egg: K
                                                                                            },
                                                                                            head: function() {
                                                                                                return this.$nuxtI18nHead({
                                                                                                    addDirAttribute: !0,
                                                                                                    addSeoAttributes: !0
                                                                                                })
                                                                                            }
                                                                                        },
                                                                                        print colo =
