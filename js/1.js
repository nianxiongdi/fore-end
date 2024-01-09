! function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define &&
        define.amd ? define(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).wxClient = n()
}(this, function () {
    "use strict";

    function n(e) {
        var t, r = e.transport,
            o = e.endpoint,
            n = e.size,
            i = void 0 === n ? 10 : n,
            e = e.wait,
            u = void 0 === e ? 1e3 : e,
            a = [],
            c = 0;

        function s() {
            var n;
            a.length && (n = this.getBatchData(), r.post({
                url: o,
                data: n,
                fail: function (e) {
                    t && t(e, n)
                }
            }), a = [])
        }
        return {
            getSize: function () {
                return i
            },
            getWait: function () {
                return u
            },
            setSize: function (e) {
                i = e
            },
            setWait: function (e) {
                u = e
            },
            getEndpoint: function () {
                return o
            },
            setEndpoint: function (e) {
                o = e
            },
            send: function (e) {
                a.push(e), a.length >= i && s.call(this), clearTimeout(c), c = setTimeout(s.bind(this), u)
            },
            flush: function () {
                clearTimeout(c), s.call(this)
            },
            getBatchData: function () {
                return a.length ? (e = a, JSON.stringify({
                    ev_type: "batch",
                    list: e
                })) : "";
                var e
            },
            clear: function () {
                clearTimeout(c), a = []
            },
            fail: function (e) {
                t = e
            }
        }
    }
    var r = function (e, n) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (e, n) {
                e.__proto__ = n
            } || function (e, n) {
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
            })(e, n)
    };

    function e(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) +
            " is not a constructor or null");

        function t() {
            this.constructor = e
        }
        r(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
    }
    var d = function () {
        return (d = Object.assign || function (e) {
            for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[
                    o]);
            return e
        }).apply(this, arguments)
    };

    function y(e, n) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var r, o, i = t.call(e),
            u = [];
        try {
            for (;
                (void 0 === n || 0 < n--) && !(r = i.next()).done;) u.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (t = i.return) && t.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return u
    }

    function _(e, n, t) {
        if (t || 2 === arguments.length)
            for (var r, o = 0, i = n.length; o < i; o++) !r && o in n || ((r = r || Array.prototype.slice.call(n, 0,
                o))[o] = n[o]);
        return e.concat(r || Array.prototype.slice.call(n))
    }
    var w = ["init", "start", "config", "beforeDestroy", "provide", "beforeReport", "report", "beforeBuild",
            "build", "beforeSend", "send", "beforeConfig"],
        l = function () {
            return {}
        };

    function b(e) {
        return e
    }

    function S(e) {
        return "object" == typeof e && null !== e
    }
    var t = Object.prototype;

    function i(e) {
        if (S(e)) {
            if ("function" != typeof Object.getPrototypeOf) return "[object Object]" === t.toString.call(e);
            e = Object.getPrototypeOf(e);
            return e === t || null === e
        }
    }

    function u(e) {
        return "[object Array]" === t.toString.call(e)
    }

    function h(e) {
        return "function" == typeof e
    }

    function a(e) {
        return "number" == typeof e
    }

    function c(e) {
        return "string" == typeof e
    }

    function p(e, n) {
        var t, r, o = d({}, e);
        for (t in n) r = t, Object.prototype.hasOwnProperty.call(n, r) && void 0 !== n[t] && (S(n[t]) && i(n[t]) ?
            o[t] = p(S(e[t]) ? e[t] : {}, n[t]) : u(n[t]) && u(e[t]) ? o[t] = function n(e, t) {
                e = u(e) ? e : [];
                t = u(t) ? t : [];
                return Array.prototype.concat.call(e, t).map(function (e) {
                    return e instanceof RegExp ? e : S(e) && i(e) ? p({}, e) : u(e) ? n([], e) : e
                })
            }(e[t], n[t]) : o[t] = n[t]);
        return o
    }

    function E(e, n) {
        if (!u(e)) return !1;
        if (0 === e.length) return !1;
        for (var t = 0; t < e.length;) {
            if (e[t] === n) return !0;
            t++
        }
        return !1
    }

    function x(e, n) {
        if (!u(e)) return e;
        var t = e.indexOf(n);
        if (0 <= t) {
            n = e.slice();
            return n.splice(t, 1), n
        }
        return e
    }

    function v(e) {
        return u(e) && e.length ? function (e) {
            for (var n = [], t = e.length, r = 0; r < t; r++) {
                var o = e[r];
                c(o) ? n.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")) : o && o.source && n.push(o.source)
            }
            return new RegExp(n.join("|"), "i")
        }(e) : null
    }

    function m(e) {
        try {
            return c(e) ? e : JSON.stringify(e)
        } catch (e) {
            return "[FAILED_TO_STRINGIFY]:" + String(e)
        }
    }

    function s(t) {
        return S(t) ? Object.keys(t).reduce(function (e, n) {
            return e += "&" + n + "=" + t[n]
        }, "").replace("&", "?") : ""
    }

    function k() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        console.warn.apply(console, _(["[SDK]", Date.now(), j("" + T++)], y(e), !1))
    }

    function o(e) {
        return Math.random() < Number(e)
    }

    function f(e, n) {
        return e < Number(n)
    }

    function O(r) {
        return function (e) {
            for (var n = e, t = 0; t < r.length && n; t++) try {
                n = r[t](n)
            } catch (e) {
                P(e)
            }
            return n
        }
    }
    var g = function (i, u, a, c) {
            return void 0 === c && (c = !0),
                function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    if (!i) return l;
                    var t = i[u],
                        r = a.apply(void 0, _([t], y(e), !1)),
                        o = r;
                    return h(o) && c && (o = function () {
                            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                            try {
                                return r.apply(this, n)
                            } catch (e) {
                                return h(t) && t.apply(this, n)
                            }
                        }), i[u] = o,
                        function (e) {
                            e || (o === i[u] ? i[u] = t : r = t)
                        }
                }
        },
        j = "".padStart ? function (e, n) {
            return e.padStart(n = void 0 === n ? 8 : n, " ")
        } : function (e) {
            return e
        },
        C = 0,
        P = function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            console.error.apply(console, _(["[SDK]", Date.now(), j("" + C++)], y(e), !1))
        },
        T = 0;

    function D() {
        var e = function () {
            for (var e = new Array(16), n = 0, t = 0; t < 16; t++) 0 == (3 & t) && (n = 4294967296 * Math.random()),
                e[t] = n >>> ((3 & t) << 3) & 255;
            return e
        }();
        return e[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128,
            function (e) {
                for (var n = [], t = 0; t < 256; ++t) n[t] = (t + 256).toString(16).substr(1);
                var r = 0,
                    o = n;
                return [o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[
                    r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[
                    +r]], o[e[15]]].join("")
            }(e)
    }

    function I() {
        function r(e) {
            e.length && e.forEach(function (e) {
                try {
                    e()
                } catch (e) {}
            }), e.length = 0
        }

        function n(e) {
            i[e] && i[e].forEach(function (e) {
                r(e[1])
            }), i[e] = void 0
        }
        var o = !1,
            i = {};
        return {
            set: function (e, n, t) {
                i[e] ? i[e].push([n, t]) : i[e] = [[n, t]], o && r(t)
            },
            has: function (e) {
                return !!i[e]
            },
            remove: n,
            removeByEvType: function (n) {
                Object.keys(i).forEach(function (e) {
                    i[e] && i[e].forEach(function (e) {
                        e[0] === n && r(e[1])
                    })
                })
            },
            clear: function () {
                o = !0, Object.keys(i).forEach(function (e) {
                    n(e)
                })
            }
        }
    }
    var R = function (e) {
        var t, r, o, n = (t = {}, r = {}, o = {
            set: function (e, n) {
                return t[e] = n, r[e] = m(n), o
            },
            merge: function (n) {
                return t = d(d({}, t), n), Object.keys(n).forEach(function (e) {
                    r[e] = m(n[e])
                }), o
            },
            delete: function (e) {
                return delete t[e], delete r[e], o
            },
            clear: function () {
                return t = {}, r = {}, o
            },
            get: function (e) {
                return r[e]
            },
            toString: function () {
                return d({}, r)
            }
        });
        e.provide("context", n), e.on("report", function (e) {
            return e.extra || (e.extra = {}), e.extra.context = n.toString(), e
        })
    };

    function M(r, o) {
        r.on("init", function () {
            function e(e) {
                e.forEach(function (e) {
                    var n = e.name;
                    E(t, n) || (t.push(n), e.setup(r), o && o(n, e.setup), r.destroyAgent.set(n, n,
                        [function () {
                            t = x(t, n), e.tearDown && e.tearDown()
                        }]))
                })
            }
            var t = [];
            r.provide("applyIntegrations", e);
            var n = r.config();
            n && n.integrations && e(n.integrations)
        })
    }

    function N(e, n) {
        var t = e.common || {};
        return t.sample_rate = n, e.common = t, e
    }

    function q(e, n, t, r, o) {
        return e ? (i = o(r, n), function () {
            return i
        }) : function () {
            return t(n)
        };
        var i
    }

    function A(e, n, t, r) {
        if (void 0 === (e = function (e, n, t) {
                for (var r, n = y(n.split(".")), o = n[0], i = n.slice(1); e && 0 < i.length;) e = e[o], o = (r =
                    y(i))[0], i = r.slice(1);
                if (e) return t(e, o)
            }(e, n, function (e, n) {
                return e[n]
            }))) return !1;
        var o, n = "boolean" == typeof e ? "bool" : a(e) ? "number" : "string";
        return function (e, n, t) {
            switch (t) {
                case "eq":
                    return E(n, e);
                case "neq":
                    return !E(n, e);
                case "gt":
                    return e > n[0];
                case "gte":
                    return e >= n[0];
                case "lt":
                    return e < n[0];
                case "lte":
                    return e <= n[0];
                case "regex":
                    return Boolean(e.match(new RegExp(n.join("|"))));
                case "not_regex":
                    return !e.match(new RegExp(n.join("|")));
                default:
                    return !1
            }
        }(e, (o = n, r.map(function (e) {
            switch (o) {
                case "number":
                    return Number(e);
                case "boolean":
                    return "1" === e;
                default:
                    return String(e)
            }
        })), t)
    }

    function L(n, e) {
        try {
            return "rule" === e.type ? A(n, e.field, e.op, e.values) : "and" === e.type ? e.children.every(function (
                e) {
                return L(n, e)
            }) : e.children.some(function (e) {
                return L(n, e)
            })
        } catch (e) {
            return !1
        }
    }

    function B(e, n, t, r) {
        if (!n) return b;
        var o = n.sample_rate,
            i = n.include_users,
            u = n.sample_granularity,
            a = n.rules,
            n = void 0 === (n = n.r) ? Math.random() : n;
        if (E(i, e)) return function (e) {
            return N(e, 1)
        };
        var c, s, f, l, p, d, h, v = q(u = "session" === u, o, t, n, r),
            m = (c = a, s = u, f = o, l = t, p = n, d = r, h = {}, Object.keys(c).forEach(function (e) {
                var n = c[e],
                    t = n.enable,
                    r = n.sample_rate,
                    n = n.conditional_sample_rules;
                t ? (h[e] = {
                    enable: t,
                    sample_rate: r,
                    effectiveSampleRate: r * f,
                    hit: q(s, r, l, p, d)
                }, n && (h[e].conditional_hit_rules = n.map(function (e) {
                    var n = e.sample_rate,
                        e = e.filter;
                    return {
                        sample_rate: n,
                        hit: q(s, n, l, p, d),
                        effectiveSampleRate: n * f,
                        filter: e
                    }
                }))) : h[e] = {
                    enable: t,
                    hit: function () {
                        return !1
                    },
                    sample_rate: 0,
                    effectiveSampleRate: 0
                }
            }), h);
        return function (e) {
            if (!v()) return !1;
            if (!(e.ev_type in m)) return N(e, o);
            if (!m[e.ev_type].enable) return !1;
            if (e.common && e.common.sample_rate) return e;
            var n = m[e.ev_type],
                t = n.conditional_hit_rules;
            if (t)
                for (var r = 0; r < t.length; r++)
                    if (L(e, t[r].filter)) return !!t[r].hit() && N(e, t[r].effectiveSampleRate);
            return !!n.hit() && N(e, n.effectiveSampleRate)
        }
    }
    var F, z = function (t) {
            t.on("start", function () {
                var e = t.config(),
                    n = e.userId,
                    e = e.sample,
                    e = B(n, e, o, f);
                t.on("build", e)
            })
        },
        V = "custom",
        U = function (e) {
            if (e && S(e) && e.name && c(e.name)) {
                var n = {
                    name: e.name,
                    type: "event"
                };
                if ("metrics" in e && S(e.metrics)) {
                    var t = e.metrics,
                        r = {};
                    for (o in t) a(t[o]) && (r[o] = t[o]);
                    n.metrics = r
                }
                if ("categories" in e && S(e.categories)) {
                    var o, i = e.categories,
                        u = {};
                    for (o in i) u[o] = m(i[o]);
                    n.categories = u
                }
                return n
            }
        },
        H = function (e) {
            if (e && S(e) && e.content && c(e.content)) {
                var n = {
                    content: m(e.content),
                    type: "log",
                    level: "info"
                };
                if ("level" in e && (n.level = e.level), "extra" in e && S(e.extra)) {
                    var t, r = e.extra,
                        o = {},
                        i = {};
                    for (t in r) a(r[t]) ? o[t] = r[t] : i[t] = m(r[t]);
                    n.metrics = o, n.categories = i
                }
                return n
            }
        },
        G = "Adapters imported incorrectly",
        K = ["success", "fail", "complete"],
        J = 20;
    (xe = F = F || {}).onLaunch = "onLaunch", xe.onShow = "onShow", xe.onHide = "onHide", xe.onError = "onError",
        xe.onPageNotFound = "onPageNotFound", xe.onUnhandledRejection = "onUnhandledRejection";

    function W(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    var Y = ["request", "downloadFile", "uploadFile"],
        $ = ["navigateTo", "redirectTo", "switchTab", "reLaunch"],
        Q = _(_([], y($), !1), ["navigateBack"], !1),
        X = _(_([], y([F.onLaunch, F.onShow, F.onHide]), !1), [F.onError, F.onPageNotFound, F.onUnhandledRejection],
            !1),
        Z = ["attached", "onInit"],
        ee = ["onLoad", "onShow", "onReady", "onUnload", "onHide"],
        ne = "unknown_error_name",
        te = "__HOOKED__";
    var re = function () {
        return Date.now()
    };

    function oe(e) {
        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        if (!h(e)) return 0;
        var r, o = re();
        try {
            e.apply(this, n)
        } finally {
            r = re()
        }
        return r - o
    }
    var ie, ue = function () {},
        ae = y((ie = "tt", [function () {
            return ie
        }, function (e) {
            return ie = e
        }]), 2),
        ce = ae[0];
    ae[1];

    function se(e, n, r) {
        var o = e[n];
        if (!o || !o[te]) return Object.defineProperty(e, n, {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    try {
                        var t = r.apply(this, e);
                        t && (e = t)
                    } catch (e) {
                        P(e)
                    }
                    return o.apply(this, e)
                }
            }), e[n] && (e[n][te] = !0),
            function () {
                e[n][te] = !1, r = ue
            }
    }

    function fe(t, e) {
        Object.keys(e).forEach(function (n) {
            e[n].addTearDown(function () {
                var e;
                return Oe(t, ((e = {})[n] = null, e))
            })
        })
    }

    function le(e, n) {
        n.addTearDown(function () {
            return ke(e, null)
        })
    }

    function pe(e) {
        return je("route")[e]
    }

    function de(e) {
        return !!je("route")[e]
    }

    function he(e) {
        return je("http")[e]
    }

    function ve(e) {
        return !!je("http")[e]
    }

    function me() {
        return je("setData")
    }

    function be() {
        return !!je("performance")
    }

    function ge() {
        return je("instance")
    }

    function ye(e) {
        ke("instance", e)
    }
    var _e = function (n, t) {
            function e(e) {
                return t(e), n.call(this, e)
            }
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            return e
        },
        we = function () {
            var e = {
                instance: null
            };
            return e.instance || ("undefined" != typeof tt ? e = {
                instance: tt,
                platform: ce()
            } : "undefined" != typeof my ? e = {
                instance: my,
                platform: "my"
            } : "undefined" != typeof swan ? e = {
                instance: swan,
                platform: "swan"
            } : "undefined" != typeof wx && (e = {
                instance: wx,
                platform: "wx"
            })), e
        },
        Se = "__slardar__global__0.2.5",
        Ee = {
            app: {},
            page: {},
            route: {},
            http: {},
            component: {},
            setData: null,
            performance: null,
            instance: null
        },
        xe = function (e, n) {
            void 0 === e && (e = {});
            var t = (n = void 0 === n ? we().instance : n) ? n[Se] || (n[Se] = e) : e;
            return {
                setGlobalValue: function (e, n) {
                    t[e] = n
                },
                mergeGlobalValue: function (e, n) {
                    t[e] = d(d({}, t[e]), n)
                },
                getGlobalValue: function (e) {
                    return t[e]
                },
                getGlobalEntirely: function () {
                    return t
                },
                destroy: function () {
                    t = d({}, Ee), n && (n[Se] = t)
                }
            }
        }(d({}, Ee)),
        ke = xe.setGlobalValue,
        Oe = xe.mergeGlobalValue,
        je = xe.getGlobalValue,
        Ce = function (e) {
            return je("app")[e]
        },
        Pe = function (e) {
            return je("page")[e]
        },
        Te = function (t, e) {
            (e = void 0 === e ? Q : e).forEach(function (n) {
                de(n) && pe(n).subscribe(function (e) {
                    return t(e, n)
                })
            })
        },
        De = function () {
            return je("performance")
        },
        Ie = function (e) {
            return je("component")[e]
        };

    function Re(e) {
        return "function" == typeof e
    }

    function Me(e, n) {
        !e || 0 <= (n = e.indexOf(n)) && e.splice(n, 1)
    }

    function Ne(e) {
        return e
    }

    function qe(t) {
        return function (e) {
            if ((n = e) && Re(n.lift)) return e.lift(function (e) {
                try {
                    return t(e, this)
                } catch (e) {
                    this.error(e)
                }
            });
            var n;
            throw new TypeError("Unable to lift unknown Observable type")
        }
    }

    function Ae(e) {
        Re(e) ? e() : null != e && e.unsubscribe()
    }
    var Le = function (e) {
            return e instanceof Be || e && "closed" in e && Re(e.remove) && Re(e.add) && Re(e.unsubscribe)
        },
        Be = (Fe.prototype.unsubscribe = function () {
            var e, n, t, r = this;
            this.closed || (this.closed = !0, e = this._parentage, n = this._finalizers, t = this.initialTeardown,
                e && (this._parentage = null, e.forEach(function (e) {
                    return e.remove(r)
                })), Re(t) && t(), n && (this._finalizers = null, n.forEach(Ae)))
        }, Fe.prototype.remove = function (e) {
            this._finalizers && Me(this._finalizers, e), e instanceof Fe && e._removeParent(this)
        }, Fe.prototype.add = function (e) {
            if (e && e !== this)
                if (this.closed) Ae(e);
                else {
                    if (e instanceof Fe) {
                        if (e.closed || e._hasParent(this)) return;
                        e._addParent(this)
                    }
                    var n = this._finalizers;
                    this._finalizers = n ? (n.push(e), n) : [e]
                }
        }, Fe.prototype._addParent = function (e) {
            var n = this._parentage;
            this._parentage = n ? (n.push(e), n) : [e]
        }, Fe.prototype._hasParent = function (e) {
            return this._parentage && ~this._parentage.indexOf(e)
        }, Fe.prototype._removeParent = function (e) {
            this._parentage && Me(this._parentage, e)
        }, Fe);

    function Fe(e) {
        this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
    }
    var ze, Ve = (e(Ue, ze = Be), Ue.prototype.next = function (e) {
        this.isStopped || this.destination.next(e)
    }, Ue.prototype.error = function (e) {
        if (!this.isStopped) {
            this.isStopped = !0;
            try {
                this.destination.error(e)
            } finally {
                this.unsubscribe()
            }
        }
    }, Ue.prototype.complete = function () {
        this.isStopped || (this.isStopped = !0, this._complete())
    }, Ue.prototype.unsubscribe = function () {
        this.closed || (this.isStopped = !0, ze.prototype.unsubscribe.call(this), this.destination = null)
    }, Ue.prototype._complete = function () {
        try {
            this.destination.complete()
        } finally {
            this.unsubscribe()
        }
    }, Ue);

    function Ue(e) {
        var n = ze.call(this) || this;
        return n.isStopped = !1, n.destination = Ke(e) ? e : new He(!(e = e) || Re(e) ? {
            next: null != e ? e : void 0
        } : e), n
    }
    var He = (Ge.prototype.next = function (e) {
        var n = this.partialObserver;
        if (n.next) try {
            n.next(e)
        } catch (e) {
            console.error("ConsumerObserver.next error", e)
        }
    }, Ge.prototype.error = function (e) {
        var n = this.partialObserver;
        if (n.error) try {
            n.error(e)
        } catch (e) {
            console.error("ConsumerObserver.error error", e)
        }
    }, Ge.prototype.complete = function () {
        var e = this.partialObserver;
        if (e.complete) try {
            e.complete()
        } catch (e) {
            console.error("ConsumerObserver.complete error", e)
        }
    }, Ge);

    function Ge(e) {
        this.partialObserver = e
    }

    function Ke(e) {
        return e instanceof Ve || e && ((n = e) && Re(n.next) && Re(n.error) && Re(n.complete)) && Le(e);
        var n
    }
    Je.prototype.subscribe = function (e) {
        var n = Ke(e) ? e : new Ve(e),
            t = this.operator,
            e = this.source;
        return n.add(t ? t.call(n, e) : this._trySubscribe(n)), n
    }, Je.prototype.lift = function (e) {
        var n = new Je;
        return n.source = this, n.operator = e, n
    }, Je.prototype.pipe = function () {
        for (var n, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return (0 === (n = e).length ? Ne : 1 === n.length ? n[0] : function (e) {
            return n.reduce(function (e, n) {
                return n(e)
            }, e)
        })(this)
    }, Je.prototype._subscribe = function (e) {}, Je.prototype._trySubscribe = function (n) {
        try {
            return this._subscribe(n)
        } catch (e) {
            n.error(e)
        }
    }, ae = Je;

    function Je(e) {
        e && (this._subscribe = e)
    }
    var We, xe = (e(Ye, We = ae), Ye.prototype.next = function (n) {
        this._throwIfClosed(), this.isStopped || this.observers.forEach(function (e) {
            return e.next(n)
        })
    }, Ye.prototype.commonJudgement = function (e) {
        this._throwIfClosed(), this.isStopped || (this.isStopped = !0, e())
    }, Ye.prototype.error = function (n) {
        var t = this;
        this.commonJudgement(function () {
            var e = t.observers;
            for (t.hasError = !0, t.thrownError = n; e.length;) e.shift().error(n)
        })
    }, Object.defineProperty(Ye.prototype, "observed", {
        get: function () {
            return this.observers && 0 < this.observers.length
        },
        enumerable: !1,
        configurable: !0
    }), Ye.prototype.complete = function () {
        var n = this;
        this.commonJudgement(function () {
            for (var e = n.observers; e.length;) e.shift().complete()
        })
    }, Ye.prototype.unsubscribe = function () {
        this.isStopped = this.closed = !0, this.observers = null
    }, Ye.prototype._throwIfClosed = function () {
        this.closed && console.error("current subject is closed")
    }, Ye.prototype._subscribe = function (e) {
        return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e)
    }, Ye.prototype._checkFinalizedStatuses = function (e) {
        var n = this.hasError,
            t = this.thrownError,
            r = this.isStopped;
        n ? e.error(t) : r && e.complete()
    }, Ye.prototype._innerSubscribe = function (e) {
        var n = this.isStopped,
            t = this.observers;
        return n ? Ye.EMPTY : (t.push(e), new Be(function () {
            Me(t, e)
        }))
    }, Ye.EMPTY = ((xe = new Be).closed = !0, xe), Ye);

    function Ye() {
        var e = null !== We && We.apply(this, arguments) || this;
        return e.closed = !1, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
    }
    var $e = new ae(function (e) {
        return e.complete()
    });

    function Qe(r) {
        return r <= 0 ? function () {
            return $e
        } : qe(function (e, n) {
            var t = 0;
            e.subscribe(function (e) {
                ++t <= r && (n.next(e), r <= t && n.complete())
            })
        })
    }

    function Xe(r, o) {
        return qe(function (e, n) {
            var t = 0;
            e.subscribe(function (e) {
                return r.call(o, e, t++) && n.next(e)
            })
        })
    }

    function Ze(t) {
        return Xe(function (e, n) {
            return t <= n
        })
    }
    var en, nn = (e(tn, en = xe), tn.prototype.subscribe = function (e) {
        var t = this,
            e = en.prototype.subscribe.call(this, e);
        ge() && ge()._subscriptions.push(e);
        var r = e.unsubscribe;
        return e.unsubscribe = function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            r.apply(this, e), t.observed || t.unsubscribe()
        }, e
    }, tn.prototype.unsubscribe = function () {
        en.prototype.unsubscribe.call(this), this.tearDownFns.forEach(function (e) {
            return e()
        })
    }, tn.prototype.addTearDown = function (e) {
        this.tearDownFns.push(e)
    }, tn);

    function tn() {
        var e = null !== en && en.apply(this, arguments) || this;
        return e.tearDownFns = [], e
    }

    function rn(e) {
        var n = e.reduce(function (e, n) {
            return e[n] = new nn, e
        }, {});
        return {
            getSubject: function (e) {
                return n[e]
            },
            subjectMap: n
        }
    }

    function on(e) {
        return 1 < e.length ? e : e.length && e[0] || {}
    }

    function un(e) {
        var t = e.filter(function (e) {
                return e = e, !!!je("app")[e]
            }),
            e = rn(t).subjectMap;
        Oe("app", e = e), fe("app", e), App = _e(App, function (n) {
            t.forEach(function (e) {
                var r = Ce(e),
                    e = g(n, e, function (t) {
                        return function () {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] =
                                arguments[n];
                            r.next({
                                that: this,
                                param: on(e),
                                time: re()
                            }), h(t) && t.apply(this, e)
                        }
                    })();
                e && r.addTearDown(e)
            })
        })
    }

    function an(e) {
        return e.route || e.__route__ || e.url || e.path || ""
    }

    function cn(e) {
        function n(e, i) {
            r.forEach(function (o) {
                g(e, o, function (r) {
                    return function () {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        Ie(o).next({
                            that: this,
                            param: null,
                            time: re()
                        });
                        var t = i[o];
                        if (h(t) && t.apply(this, e), h(r)) return r.apply(this, e)
                    }
                })()
            })
        }
        var t = ["attached"],
            r = e.filter(function (e) {
                return ~t.indexOf(e)
            });
        try {
            Component = _e(Component, function (e) {
                S(e.lifetimes) ? n(e.lifetimes, e) : void 0 !== e.lifetimes && null !== e.lifetimes || (e.lifetimes = {},
                    n(e.lifetimes, e))
            })
        } catch (e) {}
    }

    function sn(e) {
        function n() {
            r.navigate_name = r.navigate_name || "native", r.load_start = r.load_start || 0, r.dom_end = r.dom_end ||
                0, r.render_end = r.render_end || 0
        }

        function t() {
            r.navigate_start && (e(d({}, r)), r.navigate_name = "", r.navigate_start = 0, o = !0)
        }
        var r = {},
            o = null;
        Te(function (e, n) {
            "invoke" === e.param.name && (o = !1, r = {
                navigate_start: e.time,
                navigate_name: n
            })
        }, $), Pe("onLoad").pipe(Ze(1)).subscribe(function (e) {
            r.load_start = e.time
        }), Pe("onShow").pipe(Ze(1)).subscribe(function (e) {
            r.dom_end = e.time
        }), Pe("onReady").pipe(Ze(1)).subscribe(function (e) {
            r.render_end = e.time, n(), t()
        }), Ce(F.onHide).subscribe(function () {
            !1 === o && (n(), t())
        })
    }

    function fn(n) {
        var t = ["downloadPackage", "evaluateScript", "fcp", "fp", "fr"];
        De().subscribe(function (e) {
            ~t.indexOf(e.name) && n(e)
        })
    }

    function ln(n) {
        Ie("attached").subscribe(function (e) {
            e = e.that;
            return n.call(e)
        })
    }

    function pn(e) {
        return "android" === e.toLowerCase()
    }

    function dn() {
        var e = wx.getAccountInfoSync().miniProgram,
            n = (p = wx.getSystemInfoSync()).model,
            t = p.brand,
            r = p.pixelRatio,
            o = p.screenHeight,
            i = p.screenWidth,
            u = p.windowHeight,
            a = p.windowWidth,
            c = p.language,
            s = p.version,
            f = p.system,
            l = p.platform,
            p = p.SDKVersion;
        return {
            model: n,
            brand: t,
            pixelRatio: r,
            screenArea: Cn({
                width: i,
                height: o
            }),
            windowArea: Cn({
                width: a,
                height: u
            }),
            language: c,
            osName: jn(l),
            osVersion: f,
            SDKVersion: p,
            appId: e.appId,
            miniEnv: e.envVersion,
            miniVersion: e.version,
            hostName: "wx",
            hostVersion: s,
            platform: "wx"
        }
    }

    function hn(e) {
        var n = e.filter(function (e) {
                return e = e, !!!je("component")[e]
            }),
            e = rn(n).subjectMap;
        Oe("component", e = e), fe("component", e), Sn().componentSubject(n)
    }

    function vn(n) {
        function e(e) {
            W(e.methods) ? n(e.methods) : void 0 !== e.methods && null !== e.methods || (e.methods = {}, n(e.methods))
        }
        try {
            Component = _e(Component, e), Behavior = _e(Behavior, e)
        } catch (e) {}
    }

    function mn(e, n) {
        var t = e.filter(function (e) {
                return e = e, !!!je("page")[e]
            }),
            e = rn(t).subjectMap;
        Oe("page", e = e), fe("page", e), e = function (n) {
            t.forEach(function (e) {
                var r = Pe(e),
                    e = g(n, e, function (t) {
                        return function () {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[
                                n];
                            if (an(this) && r.next({
                                    that: this,
                                    param: on(e),
                                    time: re()
                                }), h(t)) return t.apply(this, e)
                        }
                    })();
                e && r.addTearDown(e)
            })
        }, Page = _e(Page, e), vn(e)
    }

    function bn(e) {
        var n = e.filter(function (e) {
                return !de(e)
            }),
            t = rn(n).subjectMap;
        Oe("route", e = t), fe("route", e), n.forEach(function (i) {
            var e = se(Sn().instance, i, function (o) {
                void 0 === o && (o = {}), pe(i).next({
                    that: this,
                    param: {
                        url: o.url,
                        delta: o.delta,
                        name: "invoke",
                        value: {
                            errMsg: "invoke"
                        }
                    },
                    time: re()
                }), K.forEach(function (r) {
                    g(o, r, function (t) {
                        return function () {
                            for (var e = [], n = 0; n < arguments.length; n++) e[
                                n] = arguments[n];
                            pe(i).next({
                                that: this,
                                param: {
                                    url: o.url,
                                    delta: o.delta,
                                    name: r,
                                    value: on(e) || {}
                                },
                                time: re()
                            }), h(t) && t.apply(this, e)
                        }
                    })()
                })
            });
            e && t[i].addTearDown(e)
        })
    }

    function gn(a, e) {
        var n = e.url,
            t = e.method,
            r = e.data,
            o = e.header,
            i = e.headers,
            c = {
                api: a,
                request: {
                    url: n,
                    method: (n = t, "uploadFile" === (t = a) ? "POST" : "downloadFile" !== t && n || "GET"),
                    headers: o || i || {},
                    body: m(r),
                    timestamp: re()
                },
                response: {}
            };
        g(e, "complete", function (u) {
            return function (e) {
                var n = c.response.timestamp || re();
                c.duration = n - c.request.timestamp, c.completeCallbackTime = oe(u, e);
                var t, r, o, i = e.errMsg || e.errorMessage || e.error;
                c.response = {
                    status: (t = e.status, r = e.statusCode, o = c.response.status, 0 <= t ? t : 0 <=
                        r ? r : o),
                    timestamp: n,
                    headers: e.header || e.headers || {},
                    body: m(e.data),
                    errMsg: i,
                    timing: Sn().buildRequestProfile(e.profile || {})
                }, he(a).next(c)
            }
        })(), g(e, "success", function (n) {
            return function (e) {
                c.response.timestamp = re(), c.response.status = 200, c.successCallbackTime = oe(n, e)
            }
        })(), g(e, "fail", function (n) {
            return function (e) {
                c.response.timestamp = re(), c.response.status = -1, c.failCallbackTime = oe(n, e)
            }
        })()
    }

    function yn(e, t) {
        void 0 === t && (t = Sn().instance);
        var n = e.filter(function (e) {
                return !ve(e)
            }),
            r = rn(n).subjectMap;
        Oe("http", e = r), fe("http", e), n.forEach(function (n) {
            var e = se(t, n, function (e) {
                gn(n, e)
            });
            e && r[n].addTearDown(e)
        })
    }
    var _n, ae = y((_n = {}, [function (e) {
            if (!we().platform) throw Error("Not support current Mini Program");
            if (!Array.isArray(e) || !e.length) return null;
            e = e.find(function (e) {
                return e.platform === we().platform
            });
            return e && (_n = e.adapterCtor())
        }, function () {
            return _n
        }]), 2),
        wn = ae[0],
        Sn = ae[1],
        En = function (e) {
            return "SLARDAR" + e
        },
        xn = function (e) {
            try {
                return Sn().getStorage(e)
            } catch (e) {
                return
            }
        },
        kn = ["darwin", "macs", "mac"],
        On = ["windows_nt", "windows", "window"],
        jn = function (e) {
            return pn(e) ? "Android" : "ios" === e.toLowerCase() ? "iOS" : ~kn.indexOf(e.toLowerCase()) ? "Mac" : ~
                On.indexOf(e.toLowerCase()) ? "windows" : "unknown"
        },
        Cn = function (e) {
            var n = e.systemPlatform,
                t = e.pixelRatio,
                r = e.width,
                e = e.height;
            return n && pn(n) && t ? r / t + " * " + e / t : r + " * " + e
        },
        Pn = function (e) {
            return function (e) {
                var n, t = {};
                for (n in e) Object.prototype.hasOwnProperty.call(e, n) && void 0 !== e[n] && null !== e[n] &&
                    (t[n] = e[n]);
                return t
            }({
                domainLookupStart: e.domainLookupStart,
                domainLookupEnd: e.domainLookupEnd,
                connectStart: e.connectStart,
                secureConnectionStart: e.SSLconnectionStart,
                connectEnd: e.connectEnd,
                requestStart: e.requestStart,
                requestEnd: e.requestEnd,
                responseStart: e.responseStart,
                responseEnd: e.responseEnd,
                socketReused: e.socketReused,
                redirectStart: e.redirectStart,
                redirectEnd: e.redirectEnd,
                fetchStart: e.fetchStart,
                sendBytesCount: e.sendBytesCount,
                throughputKbps: e.throughputKbps,
                receivedBytedCount: e.receivedBytedCount
            })
        },
        xe = {
            platform: "wx",
            adapterCtor: function () {
                return d(d({}, {
                    instance: t = void 0 === t ? we().instance : t,
                    request: function (e) {
                        return t.request(e)
                    },
                    getStorage: function (e) {
                        return t.getStorageSync(e)
                    },
                    setStorage: function (e, n) {
                        return t.setStorageSync(e, n)
                    },
                    getCurrentPages: function () {
                        return getCurrentPages()
                    },
                    buildHttpPayload: function (e) {
                        return e
                    },
                    monitorNetworkType: function (n) {
                        t.getNetworkType({
                            success: function (e) {
                                n && n({
                                    networkType: e.networkType
                                })
                            }
                        }), t.onNetworkStatusChange(function (e) {
                            n && n({
                                networkType: e.networkType
                            })
                        })
                    },
                    performanceSubscriber: l,
                    getSystemInfo: l,
                    buildRequestProfile: l,
                    componentSubject: l,
                    setDataSubject: l,
                    pagePerfSubscriber: l
                }), {
                    miniPlatform: "wx",
                    buildError: function (e) {
                        return c(e) ? function (e) {
                            e = e.split("\n");
                            return {
                                name: y((e[2] && e[2].split(":") || []).map(function (e) {
                                    return e.trim()
                                }), 1)[0],
                                message: e && e[1] && e[1].trim(),
                                stack: e.slice(2).join("\n")
                            }
                        }(e) : {
                            name: ne,
                            message: m(e)
                        }
                    },
                    getSystemInfo: dn,
                    observePerformance: function (n) {
                        var e = wx.getPerformance && wx.getPerformance();
                        if (e) {
                            e = e.createObserver(function (e) {
                                e = e.getEntries().map(function (e) {
                                    return d(d({}, e), {
                                        name: function (e) {
                                            switch (e) {
                                                case "appLaunch":
                                                    return "appClick";
                                                case "firstRender":
                                                    return "fr";
                                                case "firstPaint":
                                                    return "fp";
                                                case "firstContentfulPaint":
                                                    return "fcp";
                                                case "largestContentfulPaint":
                                                    return "lcp";
                                                default:
                                                    return e
                                            }
                                        }(e.name)
                                    })
                                });
                                n(e)
                            });
                            return e.observe({
                                entryTypes: e.supportedEntryTypes
                            }), e
                        }
                    },
                    performanceSubscriber: fn,
                    buildRequestProfile: function (e) {
                        return e = Pn(n = e), n.protocol && (e.protocol = n.protocol), e;
                        var n
                    },
                    componentSubject: cn,
                    pagePerfSubscriber: sn,
                    setDataSubject: ln
                });
                var t
            }
        },
        Tn = function (e, n) {
            void 0 === n && (n = Y), e.on("init", function () {
                yn(n)
            })
        };

    function Dn() {
        var u = an(this),
            a = me();
        var e = se(this, "setData", function () {
            for (var t = this, r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
            var o = r[0],
                i = re();
            return [o, function () {
                var e = r[1],
                    n = re() - i;
                a.next({
                    renderTime: n,
                    url: u,
                    data: o,
                    startTime: i
                }), e && e.call(t)
            }]
        });
        e && a.addTearDown(e)
    }

    function In() {
        var e;
        je("setData") || (e = (e = rn(["setData"]).getSubject)("setData"), ke("setData", e), le("setData", e))
    }

    function Rn(o) {
        return Object.keys(o).reduce(function (e, n) {
            var t, r;
            return r = o[t = n], t && r && (qn.test(t) || An.test(r)) || (e[n] = o[n]), e
        }, {})
    }
    var Mn = function (e) {
            e.on("init", function () {
                In(), Pe("onLoad").subscribe(function (e) {
                    e = e.that;
                    Dn.call(e)
                }), Sn().setDataSubject(Dn)
            })
        },
        Nn = function (e) {
            e.on("init", function () {
                var n, e, t, r = Sn();
                r.observePerformance && !be() && (n = (0, rn(["performance"]).getSubject)("performance"),
                    ke("performance", e = n), le("performance", e), (t = r.observePerformance(function (
                        e) {
                        e.forEach(function (e) {
                            n.next(e)
                        })
                    })) && t.disconnect && n.addTearDown(function () {
                        return t.disconnect()
                    }))
            })
        },
        qn = new RegExp("(cookie|auth|jwt|token|key|ticket|secret|credential|session|password)", "i"),
        An = new RegExp("(bearer|session)", "i"),
        Ln = function () {
            return function (e, s) {
                var n = e.hookRequest,
                    t = e.hookDownloadFile,
                    r = e.hookUploadFile,
                    f = e.ignoreUrls,
                    l = e.collectBodyOnError,
                    p = e.extraExtractor,
                    e = function (e) {
                        var n, t, r, o, i, u, a, c;
                        ! function (e, n) {
                            e = v(e || []);
                            return !!e && e.test(n)
                        }(f, e.request.url) && (c = e.response, n = e.request, t = e.api, r = e.duration, o = e
                            .failCallbackTime, a = e.successCallbackTime, i = e.completeCallbackTime, n.headers =
                            Rn(n.headers || {}), c.headers = Rn(c.headers || {}), u = c.errMsg, e = function (e,
                                n) {
                                var t = {};
                                for (o in e) Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 &&
                                    (t[o] = e[o]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) n.indexOf(
                                            o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                        (t[o[r]] = e[o[r]]);
                                return t
                            }(c, ["errMsg"]), e = d(d({}, e), {
                                is_custom_error: !1
                            }), u && (e.err_msg = u), a = {
                                api: t,
                                request: n,
                                duration: r,
                                cbTime: i + (o || 0) + (a || 0),
                                response: e
                            }, !h(p) || (e = p(c.body, a)) && (a.extra = e, a.response.is_custom_error = !0), l &&
                            (0 === (c = c.status) || 400 <= c) || (delete a.request.body, delete a.response.body),
                            s({
                                ev_type: "http",
                                payload: a
                            }))
                    };
                n && he("request").subscribe(e), t && he("downloadFile").subscribe(e), r && he("uploadFile").subscribe(
                    e)
            }
        },
        Bn = function (e, n, t, r) {
            void 0 === n && (n = {}), void 0 === r && (r = []);
            try {
                var o = e.apply(void 0, _([], y(r), !1));
                return o && o(n, t) || []
            } catch (e) {
                return P("applyMonitor", e), []
            }
        };

    function Fn(e, n, t) {
        ye(e);
        n = null === (e = e.config()) || void 0 === e ? void 0 : e.plugins[n];
        return S(n) ? d(d({}, t), n) : !!n && t
    }

    function zn(e, n) {
        return e && n && e === n
    }

    function Vn() {
        var r;
        return function (e) {
            try {
                if (t = r, !(!(n = e) || !t) && !(!zn(n.message, t.message) && !zn(n.stack, t.stack))) return void(
                    r = e)
            } catch (e) {}
            var n, t;
            return r = e
        }
    }
    var Un, Hn = "http",
        Gn = {
            hookRequest: !0,
            hookDownloadFile: !0,
            hookUploadFile: !0,
            ignoreUrls: [],
            collectBodyOnError: !1
        },
        Kn = function (f) {
            return void 0 === f && (f = Sn()),
                function (e, r) {
                    var n = e.ignoreErrors,
                        t = e.hookOnError,
                        o = e.hookOnUnhandledRejection,
                        i = e.hookRouteError,
                        u = e.dedupe,
                        a = v(n),
                        c = Vn(),
                        s = function (e, n, t) {
                            e = u ? c(e) : e;
                            e && (a && a.test(e.message) || (e = {
                                error: e
                            }, n && (e.extra = n), t && (e.react = t), r(e)))
                        };
                    t && Ce(F.onError).subscribe(function (e) {
                        e = e.param, e = f.buildError(e);
                        a && a.test(e.message) || s(e)
                    }), o && Ce(F.onUnhandledRejection).subscribe(function (e) {
                        var n = e.param || {},
                            e = n.promise,
                            t = m(n.reason);
                        a && a.test(t) || e.catch(b).then(function (e) {
                            var n = {
                                name: "UnhandledRejection",
                                message: t
                            };
                            e && e.stack && (n.stack = e.stack), s(n)
                        })
                    });
                    return i && ~["tt", "wx", "lark"].indexOf(f.miniPlatform) && Te(function (e) {
                        e = e.param;
                        "fail" === (e = e).name && s({
                            name: "RouteError",
                            message: e.value.errMsg
                        })
                    }), [s]
                }
        };
    (ae = Un = Un || {}).history = "history", ae.manual = "manual";

    function Jn(t, e, r) {
        var o = e,
            i = null,
            u = 0,
            n = "launch";

        function a(e, n) {
            o = n, u = re(), r(n, i = n + "_" + u), t(e, n)
        }
        return Ce(F.onShow).pipe(Ze(1)).subscribe(function () {
            n = "show"
        }), Te(function () {
            n = "history"
        }), [a, function (e) {
            e && (a(n, e), n = "history")
        }, function (e) {
            void 0 === e && (e = "hide"), i && (r(o, i), i = null, t(e, o, re() - u))
        }]
    }
    var Wn = function () {
            return function (e, r) {
                var n = e.extractPid,
                    t = e.routeMode,
                    o = e.setPidAndViewId,
                    i = function (e) {
                        return n ? n(e) : e
                    },
                    e = y(Jn(function (e, n, t) {
                        r({
                            ev_type: "pageview",
                            payload: {
                                pid: n,
                                source: e,
                                duration: t
                            }
                        })
                    }, "", o), 3),
                    o = e[0],
                    u = e[1],
                    e = e[2];
                return t !== Un.manual && (Pe("onShow").subscribe(function (e) {
                    return function (e) {
                        e = an(e), e = i(e);
                        u(e)
                    }(e.that)
                }), Pe("onUnload").subscribe(e.bind(null, "unload")), Pe("onHide").subscribe(e.bind(
                    null, "hide"))), [o.bind(null, "user_set"), e]
            }
        },
        Yn = function () {
            return function (e) {
                var n = y(function (n, t, r) {
                        void 0 === n && (n = 20), void 0 === t && (t = b), void 0 === r && (r = function (e,
                            n) {
                            return e.slice(-n)
                        });
                        var o = [];
                        return [function () {
                            return o
                        }, function (e) {
                            t(e) && (e = d(d({}, e), {
                                timestamp: e.timestamp || Date.now()
                            }), o = 0 <= n && o.length + 1 > n ? r(_(_([], y(o), !1), [e],
                                !1), n) : _(_([], y(o), !1), [e], !1))
                        }]
                    }(e.maxBreadcrumbs, e.onAddBreadcrumb, e.onMaxBreadcrumbs), 2),
                    e = n[0],
                    r = n[1];
                return Y.forEach(function (e) {
                    ve(e) && he(e).subscribe(function (e) {
                        r({
                            type: "http",
                            category: e.api,
                            message: "",
                            data: {
                                method: e.request.method,
                                url: e.request.url,
                                status_code: String(e.response.status)
                            },
                            timestamp: e.request.timestamp
                        })
                    })
                }), Te(function (e, n) {
                    var t = e.param,
                        e = e.time;
                    "complete" === t.name && r({
                        type: "route",
                        category: n,
                        message: t.value.errMsg || t.value.errorMessage || "",
                        timestamp: e,
                        data: {
                            url: t.url || ""
                        }
                    })
                }), [e, r]
            }
        },
        $n = function () {
            return function (e, t) {
                var r = e.isCalculateSize;
                me().subscribe(function (e) {
                    var n = {
                        duration: e.renderTime,
                        start_time: e.startTime
                    };
                    r && (n.size = (e = e.data, TextEncoder ? (new TextEncoder).encode(m(e)).length : 2 *
                        m(e).length)), t({
                        ev_type: "set_data",
                        payload: n
                    })
                })
            }
        },
        Qn = function () {
            return function (e, n) {
                function t() {
                    n({
                        ev_type: "app_launch_perf",
                        payload: r
                    }), o = !0
                }
                var r = {
                        activate_start: 0,
                        init_end: 0,
                        page_load_start: 0,
                        page_dom_end: 0,
                        page_render_end: 0
                    },
                    o = !1;
                Ce(F.onLaunch).pipe(Qe(1)).subscribe(function (e) {
                    r.activate_start = e.time
                }), Ce(F.onShow).pipe(Qe(1)).subscribe(function (e) {
                    r.init_end = e.time
                }), Pe("onLoad").pipe(Qe(1)).subscribe(function (e) {
                    r.page_load_start = e.time
                }), Pe("onShow").pipe(Qe(1)).subscribe(function (e) {
                    r.page_dom_end = e.time
                });
                var i = be();
                Pe("onReady").pipe(Qe(1)).subscribe(function (e) {
                    r.page_render_end = e.time, i && !r.trigger || t()
                }), i && De().pipe(Xe(function (e) {
                    return "appClick" === e.name
                }), Qe(1)).subscribe(function (e) {
                    r.trigger = e.startTime, r.page_render_end && t()
                }), Ce(F.onHide).subscribe(function () {
                    o || t()
                })
            }
        },
        Xn = function () {
            return function (e, n) {
                Sn().pagePerfSubscriber(function (e) {
                    return n({
                        ev_type: "page_perf",
                        payload: e
                    })
                })
            }
        },
        Zn = function (n) {
            return void 0 === n && (n = Sn()),
                function (e, t) {
                    var r, o;
                    be() && n.performanceSubscriber && (r = 0, Pe("onLoad").subscribe(function (e) {
                        o = e.time, r++
                    }), n.performanceSubscriber(function (e) {
                        var n = {
                            is_custom: !1,
                            name: e.name,
                            value: e.startTime,
                            type: "perf",
                            count: r
                        };
                        n.duration = e.duration || (o ? e.startTime - o : 0), n.is_support = 0 <= n.duration,
                            t({
                                ev_type: "performance",
                                payload: n
                            })
                    }))
                }
        },
        et = "pageview",
        nt = {
            routeMode: Un.history,
            setPidAndViewId: function (e, n) {}
        },
        rt = "jsError",
        ot = {
            ignoreErrors: [],
            hookOnError: !0,
            hookOnUnhandledRejection: !0,
            hookRouteError: !0,
            dedupe: !0
        },
        it = function (t) {
            return function (e) {
                var n = t.getBreadcrumbs && t.getBreadcrumbs() || [];
                t.report({
                    ev_type: "js_error",
                    payload: d(d({}, e), {
                        breadcrumbs: n
                    })
                })
            }
        },
        ut = {
            maxBreadcrumbs: 20,
            tap: !0
        },
        at = "breadcrumb",
        ct = function (n) {
            n.on("init", function () {
                n.provide("_subscriptions", []), ye(n), n.on("init", function () {
                    un(X), mn(ee), hn(Z)
                }), n.on("init", function () {
                    bn(Q)
                })
            }), n.on("beforeDestroy", function () {
                if (n._subscriptions)
                    for (; n._subscriptions.length;) n._subscriptions.shift().unsubscribe();
                for (var e in n) delete n[e]
            })
        },
        st = "setData",
        ft = {
            isCalculateSize: !1
        },
        lt = "appLaunchPerf",
        pt = {},
        dt = "pagePerf",
        ht = {},
        vt = "performance",
        mt = {},
        bt = function (e, n, t) {
            void 0 === t && (t = Sn());
            var r = n.url,
                o = n.data,
                i = n.success,
                u = void 0 === i ? l : i,
                a = n.fail,
                c = void 0 === a ? l : a,
                i = n.header,
                a = {
                    "Content-Type": "application/json"
                };
            W(n = i) && 0 !== Object.keys(n).length && Object.assign(a, i), t.request({
                method: e,
                url: r,
                data: o,
                header: a,
                headers: a,
                success: function (e) {
                    u(e)
                },
                fail: function (e) {
                    e = e.errMsg || "Network request failed";
                    c(new Error(e))
                }
            })
        },
        gt = function (n) {
            return (n = void 0 === n ? Sn() : n) ? {
                get: function (e) {
                    return bt("GET", e, n)
                },
                post: function (e) {
                    return bt("POST", e, n)
                }
            } : {
                get: l,
                post: l
            }
        };

    function yt(e) {
        return e = En(String(e)), (e = xn(e)) && e.userId && e.deviceId ? e : {
            userId: D(),
            deviceId: D()
        }
    }

    function _t(e) {
        return e + "_" + Date.now()
    }

    function wt(e) {
        var n = e.aid,
            t = e.userId,
            e = e.deviceId;
        ! function (e, n) {
            try {
                Sn().setStorage(e, n)
            } catch (e) {}
        }(En(String(n)), {
            userId: t,
            deviceId: e
        })
    }
    var St = {
            build: function (e) {
                return {
                    ev_type: e.ev_type,
                    payload: e.payload,
                    common: d(d({}, e.extra || {}), e.overrides || {})
                }
            }
        },
        Et = "/monitor_mini/collect",
        xt = "/settings/minipro",
        kt = "apmplus.volces.com",
        Ot = "session",
        jt = {
            sample_rate: 1,
            include_users: [],
            sample_granularity: Ot,
            rules: {}
        },
        Ct = [Et, xt],
        Pt = "0.2.5",
        Tt = "APM_PLUS_MINI_PROGRAM",
        Dt = function (e, n) {
            return void 0 === n && (n = Et), (e && 0 <= e.indexOf("//") ? "" : "https://") + e + n
        };

    function It(e) {
        e = yt(e.aid);
        return {
            aid: 0,
            token: "",
            pid: "",
            viewId: _t("_"),
            userId: e.userId,
            deviceId: e.deviceId,
            sessionId: D(),
            domain: kt,
            plugins: {
                breadcrumb: {},
                pageview: {},
                jsError: {},
                http: {
                    ignoreUrls: Ct
                },
                setData: {},
                appLaunchPerf: {},
                pagePerf: {},
                performance: {}
            },
            sample: jt,
            sdkName: Tt,
            sdkVersion: Pt
        }
    }

    function Rt(e) {
        var n, t = e.plugins || {};
        for (n in t) t[n] && !S(t[n]) && (t[n] = {});
        return d(d({}, e), {
            plugins: t
        })
    }

    function Mt(e) {
        return S(e) && "aid" in e && "token" in e
    }

    function Nt(e) {
        return d({}, e)
    }
    var qt = function (n) {
        var r, o, i = n,
            u = {},
            a = void 0,
            c = l,
            t = l;
        return {
            getConfig: function () {
                return i
            },
            setConfig: function (e) {
                var n, t;
                return u = d(d({}, u), e || {}), s(), r || (r = e, i.useLocalConfig || !i.aid ? (o = {}, c()) :
                    a ? f() : (n = i.domain, e = i.aid, t = function (e) {
                        a = e, f()
                    }, gt().get({
                        url: function (e, n) {
                            return void 0 === n && (n = xt), (e && 0 <= e.indexOf("//") ?
                                "" : "https://") + e + n
                        }(n) + "?biz_id=" + e,
                        success: function (e) {
                            t(e && e.data && e.data.data || {})
                        },
                        fail: function () {
                            t({
                                sample: {
                                    sample_rate: .001
                                }
                            })
                        }
                    }))), i
            },
            onChange: function (e) {
                t = e
            },
            onReady: function (e) {
                c = function () {
                    wt(i), e()
                }, o && c()
            }
        };

        function s() {
            var e = d(d(d({}, n), o || {}), u);
            e.plugins = function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                for (var t = {}, r = 0; r < e.length;) t = p(t, e[r++]);
                return t
            }(n.plugins, (null == o ? void 0 : o.plugins) || {}, u.plugins || {}), e.sample = At(At(n.sample,
                null == o ? void 0 : o.sample), u.sample), i = e, t()
        }

        function f() {
            o = function (e) {
                    if (!e) return {};
                    var n = e.sample,
                        t = e.user_id,
                        r = e.timestamp,
                        o = t ? {
                            userId: t
                        } : {};
                    if (!n) return o;
                    var i = n.sample_rate,
                        e = n.sample_granularity,
                        t = void 0 === e ? Ot : e,
                        e = n.include_users,
                        n = n.rules,
                        n = void 0 === n ? [] : n;
                    return d(d({}, o), {
                        sample: {
                            include_users: e,
                            sample_rate: i,
                            sample_granularity: t,
                            rules: n.reduce(function (e, n) {
                                var t = n.name,
                                    r = n.enable,
                                    o = n.sample_rate,
                                    n = n.conditional_sample_rules;
                                return e[t] = {
                                    enable: r,
                                    sample_rate: o,
                                    conditional_sample_rules: n
                                }, e
                            }, {})
                        },
                        serverTimestamp: r
                    })
                }(a),
                function (e) {
                    e = En(e);
                    return !!Sn().getStorage(e)
                }(String(i.aid)) && (o.userId = n.userId), s(), c()
        }
    };

    function At(r, o) {
        if (!r || !o) return r || o;
        var e = d(d({}, r), o);
        return e.include_users = _(_([], y(r.include_users || []), !1), y(o.include_users || []), !1), e.rules = _(
            _([], y(Object.keys(r.rules || {})), !1), y(Object.keys(o.rules || {})), !1).reduce(function (e, n) {
            var t;
            return n in e || (n in (r.rules || {}) && n in (o.rules || {}) ? (e[n] = d(d({}, r.rules[n]), o
                .rules[n]), e[n].conditional_sample_rules = _(_([], y(r.rules[n].conditional_sample_rules ||
                []), !1), y(o.rules[n].conditional_sample_rules || []), !1)) : e[n] = (null === (t =
                r.rules) || void 0 === t ? void 0 : t[n]) || (null === (t = o.rules) || void 0 ===
                t ? void 0 : t[n])), e
        }, {}), e
    }

    function Lt(e) {
        var n = {
            url: (n = Sn().getCurrentPages().pop()) ? (n ? an(n) : "") + s(n.options) : "",
            timestamp: re()
        };
        return d(d({}, e), {
            extra: d(d({}, n), null !== (e = e.extra) && void 0 !== e ? e : {})
        })
    }

    function Bt(e) {
        if (!wn(e)) throw Error(G);
        return e = function (e) {
            var t, r, n = e.builder,
                o = e.createSender,
                i = e.createDefaultConfig,
                u = e.createConfigManager,
                a = e.userConfigNormalizer,
                c = e.initConfigNormalizer,
                s = e.validateInitConfig,
                f = {};
            w.forEach(function (e) {
                return f[e] = []
            });
            var l = !1,
                p = !1,
                d = !1,
                h = [],
                v = [],
                m = I(),
                b = {
                    getBuilder: function () {
                        return n
                    },
                    getSender: function () {
                        return t
                    },
                    getPreStartQueue: function () {
                        return h
                    },
                    init: function (e) {
                        if (l) k("already inited");
                        else {
                            if (!(e && S(e) && s(e))) throw new Error("invalid InitConfig, init failed");
                            var n = i(e);
                            if (!n) throw new Error("defaultConfig missing");
                            e = c(e);
                            if ((r = u(n)).setConfig(e), r.onChange(function () {
                                    g("config")
                                }), !(t = o(r.getConfig()))) throw new Error("sender missing");
                            g("init", l = !0)
                        }
                    },
                    set: function (e) {
                        l && e && S(e) && (g("beforeConfig", !1, e), null != r && r.setConfig(e))
                    },
                    config: function (e) {
                        if (l) return e && S(e) && (g("beforeConfig", !1, e), null != r && r.setConfig(a(e))),
                            null == r ? void 0 : r.getConfig()
                    },
                    provide: function (e, n) {
                        E(v, e) ? k("cannot provide " + e + ", reserved") : (b[e] = n, g("provide", !1, e))
                    },
                    start: function () {
                        var n = this;
                        l && (p || null != r && r.onReady(function () {
                            g("start", p = !0), h.forEach(function (e) {
                                return n.build(e)
                            }), h.length = 0
                        }))
                    },
                    report: function (e) {
                        e && (!(e = O(f.beforeReport)(e)) || (e = O(f.report)(e)) && (p ? this.build(e) : h
                            .push(e)))
                    },
                    build: function (e) {
                        !p || (e = O(f.beforeBuild)(e)) && (!(e = n.build(e)) || (e = O(f.build)(e)) &&
                            this.send(e))
                    },
                    send: function (e) {
                        !p || (e = O(f.beforeSend)(e)) && (t.send(e), g("send", !1, e))
                    },
                    destroy: function () {
                        m.clear(), d = !0, g("beforeDestroy", !(h.length = 0))
                    },
                    on: function (e, n) {
                        if ("init" === e && l || "start" === e && p || "beforeDestroy" === e && d) try {
                            n()
                        } catch (e) {} else f[e] && f[e].push(n)
                    },
                    off: function (e, n) {
                        f[e] && (f[e] = x(f[e], n))
                    },
                    destroyAgent: m
                },
                v = Object.keys(b);
            return b;

            function g(e, n) {
                void 0 === n && (n = !1);
                for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
                f[e].forEach(function (e) {
                    try {
                        e.apply(void 0, _([], y(t), !1))
                    } catch (e) {}
                }), n && (f[e].length = 0)
            }
        }({
            validateInitConfig: Mt,
            initConfigNormalizer: Rt,
            userConfigNormalizer: Nt,
            createSender: function (e) {
                return n({
                    size: J,
                    endpoint: Dt(e.domain),
                    transport: gt()
                })
            },
            builder: St,
            createDefaultConfig: It,
            createConfigManager: qt
        }), R(e), Ht(e), zt(e), Vt(e), z(e), ct(e), M(e), Ut(e), Ft(e), e
    }
    var Ft = function (n) {
            function t(e) {
                return void 0 === e && (e = Sn().getSystemInfo()), n.set(d({}, e))
            }

            function r() {
                t(), e()
            }
            var o, i, u = !1,
                e = (i = "", function () {
                    var e = o.getSender();
                    i = i || e.getEndpoint();
                    var n = o.config(),
                        n = {
                            did: n.deviceId,
                            sid: n.sessionId,
                            sname: n.sdkName,
                            sver: n.sdkVersion,
                            soffset: n.offset || 0,
                            model: n.model,
                            brand: n.brand,
                            ratio: n.pixelRatio,
                            screen: n.screenArea,
                            window: n.windowArea,
                            lang: n.language,
                            osname: n.osName,
                            osver: n.osVersion,
                            libver: n.SDKVersion,
                            scene: n.scene || -1,
                            menv: n.miniEnv,
                            mver: n.miniVersion,
                            hostname: n.hostName,
                            hostver: n.hostVersion,
                            platform: n.platform,
                            biz_id: n.aid,
                            x_auth_token: n.token
                        };
                    e.setEndpoint(i + s(n))
                });
            (o = n).on("start", function () {
                r(), u = !0
            }), n.on("init", function () {
                Ce(F.onLaunch).pipe(Qe(1)).subscribe(function (e) {
                    e = e.param.scene || -1;
                    t({
                        scene: e
                    }), u && r()
                }), Sn().monitorNetworkType(function (e) {
                    e = e.networkType;
                    n.set({
                        networkType: e
                    })
                })
            })
        },
        zt = function (r) {
            r.on("beforeBuild", function (e) {
                return n = e, t = r.config(), (e = {}).aid = t.aid, e.pid = t.pid, e.view_id = t.viewId, e.user_id =
                    t.userId, e.network_type = t.networkType, d(d({}, n), {
                        extra: d(d({}, e), null !== (n = n.extra) && void 0 !== n ? n : {})
                    });
                var n, t
            })
        },
        Vt = function (e) {
            e.on("report", Lt)
        },
        Ut = function (n) {
            n.on("init", function () {
                Ce(F.onHide).subscribe(function () {
                    var e = n.getSender();
                    e && e.flush()
                })
            })
        },
        Ht = function (t) {
            var r, o = !1;
            t.on("init", function () {
                r = re(), t.on("config", function () {
                    var e, n = null === (e = t.config()) || void 0 === e ? void 0 : e.serverTimestamp;
                    isNaN(n) || Number(n) <= 0 || o || (o = !0, (e = re()) - r < 1e3 && n && (e = n -
                        (e + r) / 2, isNaN(e) || t.set({
                            offset: e
                        })))
                })
            })
        },
        ae = function (e) {
            var n, t, r, i, o, u, a, c, s, e = Bt(e);
            if (e) return (n = e).provide("sendEvent", function (e) {
                e = U(e);
                e && n.report({
                    ev_type: V,
                    payload: e,
                    extra: {
                        timestamp: Date.now()
                    }
                })
            }), n.provide("sendLog", function (e) {
                e = H(e);
                e && n.report({
                    ev_type: V,
                    payload: e,
                    extra: {
                        timestamp: Date.now()
                    }
                })
            }), (t = e).on("init", function () {
                var e, n = Fn(t, et, nt);
                n && (n = (e = y(Bn(Wn, d(d({}, n), {
                    setPidAndViewId: function (e, n) {
                        t.set({
                            pid: e,
                            viewId: n,
                            actionId: void 0
                        })
                    }
                }), t.report.bind(t)), 2))[0], e = e[1], t.provide("sendPageview", n), t.provide(
                    "sendPageviewWithHide", e))
            }), (r = e).on("init", function () {
                var e, n = Fn(r, rt, ot);
                n && (e = it(r), e = y(Bn(Kn, n, e), 1)[0], r.provide("captureException", e))
            }), (i = e).on("init", function () {
                var e, n, t, r, o = Fn(i, Hn, Gn);
                o && (e = o.hookRequest, n = o.hookDownloadFile, t = o.hookUploadFile, r = [], e && r.push(
                        "request"), n && r.push("downloadFile"), t && r.push("uploadFile"), Tn(i, r),
                    Bn(Ln, o, i.report.bind(i)))
            }), (o = e).on("init", function () {
                var e = Fn(o, st, ft);
                e && (Mn(o), Bn($n, e, o.report.bind(o)))
            }), (u = e).on("init", function () {
                var e, n = Fn(u, at, ut);
                n && (n = (e = y(Bn(Yn, n, function (e) {}), 2))[0], e = e[1], u.provide(
                    "getBreadcrumbs", n), u.provide("addBreadcrumb", e))
            }), (a = e).on("init", function () {
                var e = Fn(a, lt, pt);
                e && (Nn(a), Bn(Qn, e, a.report.bind(a)))
            }), (c = e).on("init", function () {
                var e = Fn(c, dt, ht);
                e && Bn(Xn, e, c.report.bind(c))
            }), (s = e).on("init", function () {
                var e = Fn(s, vt, mt);
                e && (Nn(s), Bn(Zn, e, s.report.bind(s)))
            }), e
        }.bind(null, [xe]),
        xe = ae();
    return xe.createClient = ae, xe
});