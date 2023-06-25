(window.mor_modules = window.mor_modules || []).push([[502], {
    zpH5: function(ie, z, a) {
        "use strict";
        a.d(z, {
            Z: function() {
                return E
            }
        });
        var y = a("cVfI")
          , _ = a("lIP5")
          , F = a("bvj/")
          , j = a("3ONG")
          , K = a("byvu")
          , x = Object.defineProperty
          , d = Object.getOwnPropertySymbols
          , m = Object.prototype.hasOwnProperty
          , b = Object.prototype.propertyIsEnumerable
          , Z = function(u, c, S) {
            return c in u ? x(u, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: S
            }) : u[c] = S
        }
          , H = function(u, c) {
            for (var S in c || (c = {}))
                m.call(c, S) && Z(u, S, c[S]);
            if (d) {
                var A = (0,
                K.Z)(d(c)), $;
                try {
                    for (A.s(); !($ = A.n()).done; ) {
                        var S = $.value;
                        b.call(c, S) && Z(u, S, c[S])
                    }
                } catch (T) {
                    A.e(T)
                } finally {
                    A.f()
                }
            }
            return u
        }
          , k = function() {
            var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return getApp().mtop({
                api: "mtop.alsc.user.account.generateAccountUpdateUrl",
                v: "1.0",
                data: H({
                    actionType: "h5_mobile_modify"
                }, g),
                secType: 1
            })
        }
          , i = function(u, c, S) {
            return new Promise(function(A, $) {
                var T = function(Q) {
                    try {
                        w(S.next(Q))
                    } catch (B) {
                        $(B)
                    }
                }
                  , O = function(Q) {
                    try {
                        w(S.throw(Q))
                    } catch (B) {
                        $(B)
                    }
                }
                  , w = function(Q) {
                    return Q.done ? A(Q.value) : Promise.resolve(Q.value).then(T, O)
                };
                w((S = S.apply(u, c)).next())
            }
            )
        }
          , f = {
            BIND: "bind",
            UNKNOWN: "unknown",
            NOTBIND: "notbind"
        };
        function P() {
            return (0,
            F.Z)({
                url: "".concat(j.Z.getHost(getApp().env).H5_API_HOST, "/restapi/eus/login/logout"),
                adapter: "elemeFetch",
                method: "POST"
            })
        }
        function W() {
            return (0,
            F.Z)({
                url: "".concat(j.Z.getHost(getApp().env).H5_API_HOST, "/restapi/eus/v1/current_user?").concat(encodeURIComponent("info_raw={}")),
                adapter: "elemeFetch",
                method: "GET",
                env: getApp().env,
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                }
            }).then(function(g) {
                return (0,
                _.Z)(g) === "object" ? g.data || 0 : g
            })
        }
        function N(g) {
            return (0,
            F.Z)({
                url: "/restapi/eus/v1/users/".concat(g.userId, "/unbind_sns/alipay"),
                adapter: "elemeFetch",
                data: g,
                location: !0,
                method: "POST"
            })
        }
        function L() {
            console.log("logindebug isBindElemeTb");
            var g = Date.now();
            return my.sendMtop({
                api: "mtop.alibaba.ucc.eleme.relation.query",
                v: "1.0",
                data: {}
            }).then(function(u) {
                if (console.log("logindebug relation.query cost", u, Date.now() - g),
                u.data && u.data.returnValue === f.BIND)
                    return Promise.resolve(!0);
                var c = {
                    errorType: "Not_Bind",
                    data: u
                };
                return Promise.reject(c)
            }).catch(function(u) {
                return console.log("logindebug relation.query err", u),
                Promise.reject(u)
            })
        }
        function s(g) {
            return i(this, arguments, function(u) {
                var c = u.callBack;
                return (0,
                y.Z)().mark(function S() {
                    var A, $, T;
                    return (0,
                    y.Z)().wrap(function(w) {
                        for (; ; )
                            switch (w.prev = w.next) {
                            case 0:
                                return w.prev = 0,
                                w.next = 3,
                                k({
                                    callBack: c
                                });
                            case 3:
                                return A = w.sent,
                                $ = A.data,
                                T = $ === void 0 ? {} : $,
                                w.abrupt("return", T);
                            case 8:
                                w.prev = 8,
                                w.t0 = w.catch(0),
                                console.error(w.t0);
                            case 11:
                            case "end":
                                return w.stop()
                            }
                    }, S, null, [[0, 8]])
                })()
            })
        }
        var E = {
            unbindAlipay: N,
            requestUserId: W,
            logout: P,
            isBindElemeTb: L,
            changePhoneNum: s
        }
    },
    "74Mb": function(ie, z, a) {
        "use strict";
        var y = a("lIP5")
          , _ = a("uCkZ")
          , F = a("50Ng")
          , j = a.n(F)
          , K = a("c/JK");
        _.default.plugin([F.versionComparePlugin, F.isAppPlugin]),
        _.default.getLocation = (0,
        K.Z)(function() {
            return console.log("[H5][Location] ebridge.getLocation"),
            ebridge.getLocation({
                useQuery: !1,
                refresh: !0,
                useCache: !1,
                isHighAccuracy: !0,
                timeout: 1e4,
                cacheTimeout: 0
            }).then(function() {
                var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                console.log("[H5][Location] ebridge.getLocation|success", x);
                try {
                    getApp().$answer.logKeyEvent({
                        event: "\u5B9A\u4F4D|ebridge|\u6210\u529F",
                        desc: JSON.stringify(x)
                    })
                } catch (i) {
                    console.error(i)
                }
                var d = x || {}
                  , m = d.latitude
                  , b = m === void 0 ? 0 : m
                  , Z = d.longitude
                  , H = Z === void 0 ? 0 : Z
                  , k = d.error;
                return b == 0 && H == 0 ? (k && (0,
                y.Z)(k) === "object" && (x.errCode = k.code,
                x.errMsg = k.message),
                Promise.reject(x || "\u83B7\u53D6\u7ECF\u7EAC\u5EA6\u4E3A0")) : x
            }).catch(function() {
                var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                console.error("[H5][Location] ebridge.getLocation|fail", x),
                getApp().$ele().exlog.poierror("\u5B9A\u4F4D\u5931\u8D25ebridge", x.errMsg || x.errCode, x);
                try {
                    getApp().$answer.logKeyEvent({
                        event: "\u5B9A\u4F4D|ebridge|\u5931\u8D25",
                        desc: JSON.stringify(x)
                    })
                } catch (d) {
                    console.error(d)
                }
                return Promise.reject(x)
            })
        }, !0),
        _.default.getNetworkType = (0,
        K.Z)(_.default.getNetworkType, !0),
        z.Z = _.default
    },
    mG9a: function(ie, z, a) {
        "use strict";
        a.d(z, {
            _U: function() {
                return _
            },
            aV: function() {
                return K
            },
            g8: function() {
                return F
            },
            pU: function() {
                return y
            },
            qJ: function() {
                return j
            }
        });
        var y = {
            cacheAddress: "1",
            realAddress: "3",
            realPoi: "4",
            userAddress: "5",
            userPoi: "6"
        }
          , _ = {
            deleted: -1,
            normal: 0,
            goShop: 1,
            agentFeeChaned: 2,
            undeliverable: 3
        }
          , F = {
            settingTip: "setting",
            areaMulti: "multi"
        }
          , j = {
            appOnLaunch: "appOnLaunch",
            indexOnLoad: "indexOnLoad",
            pluginsOnLoad: "pluginsOnLoad"
        }
          , K = {
            h5_from: "from",
            h5_opensite_source: "opensite_source",
            h5_jwt: "jwt",
            h5_welfare_3pp: "welfare_3pp",
            h5_corpId: "corpId",
            h5_dingClientId: "dingClientId"
        }
    },
    "6uP8": function(ie, z, a) {
        "use strict";
        var y = !1;
        y = !0;
        var _ = null
          , F = null
          , j = function() {
            return F || (F = {},
            Object.keys(_ || {}).map(function(x) {
                var d = _[x] || {}
                  , m = d.bucketVariance
                  , b = m || {}
                  , Z = b.plugin_id
                  , H = b.plugin_version;
                F[Z] = H || "*"
            })),
            F
        };
        z.Z = _
    },
    "v+v4": function(ie, z, a) {
        "use strict";
        var y = a("lIP5")
          , _ = a("k6Di")
          , F = a("79Ja")
          , j = function() {
            function x() {
                (0,
                _.Z)(this, x),
                this.messageList = [],
                this.limit = 100,
                this.index = 0,
                this.config = {
                    _$Dlog: !1
                },
                this.timer = null
            }
            return (0,
            F.Z)(x, [{
                key: "reportEnvInfo",
                value: function() {
                    var m = this;
                    try {
                        Promise.all([this.getStoreValue("network_env"), this.getStoreValue("STORAGE_DEBUG_ENV")]).then(function(b) {
                            m.debug("\u63A5\u53E3\u73AF\u5883", b)
                        })
                    } catch (b) {
                        console.error("[E][DogEye] reportEnvInfo = ", b)
                    }
                }
            }, {
                key: "getStoreValue",
                value: function(m) {
                    return new Promise(function(b) {
                        my.getStorage({
                            key: m,
                            success: function(H) {
                                var k = H || {}
                                  , i = k.data;
                                b(i)
                            },
                            fail: function(H) {
                                b()
                            }
                        })
                    }
                    )
                }
            }, {
                key: "reportVersionInfo",
                value: function() {
                    try {
                        this.log("\u7248\u672C\u4FE1\u606F", versionInfo)
                    } catch (m) {
                        console.error("[E][DogEye] reportVersionInfo = ", m)
                    }
                }
            }, {
                key: "updateConfig",
                value: function() {
                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    try {
                        this.config._$Dlog = this.config._$Dlog || m._$Dlog === !0 || m._$Dlog === "true",
                        console.log("[E][DogEye] updateConfig = ", this.config)
                    } catch (b) {
                        console.error("[E][DogEye] updateConfig = ", b)
                    }
                }
            }, {
                key: "updateDebugConfig",
                value: function() {
                    var m = this;
                    try {
                        if (!getApp() || !getApp().$jarvis)
                            return;
                        getApp().$jarvis.getConfig({
                            useCache: !0
                        }).then(function(P) {
                            m.debug("[E][DogEye][jarvis] getConfig ", P)
                        });
                        var b = getApp().$jarvis.getConfigByExperimentCode("Mini_Debug_Configs").bucketValue || "{}";
                        console.log("[E][DogEye] jarvis|Mini_Debug_Configs = ", b);
                        var Z = JSON.parse(b)
                          , H = Z.wechatEnv
                          , k = Z.alipayEnv
                          , i = Z._$Dlog
                          , f = i === void 0 ? !1 : i;
                        this.updateConfig({
                            _$Dlog: f
                        }),
                        k && (getApp().env = k)
                    } catch (P) {
                        console.error("[E][DogEye] updateDebugConfig = ", P)
                    }
                }
            }, {
                key: "log",
                value: function() {
                    this.do.apply(this, ["log"].concat(Array.prototype.slice.call(arguments)))
                }
            }, {
                key: "info",
                value: function() {
                    this.do.apply(this, ["info"].concat(Array.prototype.slice.call(arguments)))
                }
            }, {
                key: "debug",
                value: function() {
                    this.do.apply(this, ["debug"].concat(Array.prototype.slice.call(arguments)))
                }
            }, {
                key: "warn",
                value: function() {
                    this.do.apply(this, ["warn"].concat(Array.prototype.slice.call(arguments)))
                }
            }, {
                key: "error",
                value: function() {
                    this.do.apply(this, ["error"].concat(Array.prototype.slice.call(arguments)))
                }
            }, {
                key: "do",
                value: function() {
                    var m = this
                      , b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "log";
                    try {
                        if (arguments.length <= 0)
                            return;
                        var Z = Array.prototype.slice.call(arguments, 1)
                          , H = "[".concat(this.index++, "]")
                          , k = [];
                        Z.forEach(function(i) {
                            if (i && (0,
                            y.Z)(i) === "object" && i.debug && !m.config._$Dlog)
                                return k.push(i.debug);
                            Object.prototype.toString.call(i) === "[object Error]" ? i = i.toString() : typeof i != "string" && (i = JSON.stringify(i)),
                            H += "|" + i
                        }),
                        (b !== "debug" || b === "debug" && this.config._$Dlog) && (this.messageList.push(H),
                        console[b]("[E][DogEye]", H)),
                        this.limit > 0 && this.messageList.length > this.limit && !this.config._$Dlog && this.messageList.shift(),
                        (b === "error" || b === "warn" || this.config._$Dlog) && (this.timer && clearTimeout(this.timer),
                        this.timer = setTimeout(function() {
                            m.bark()
                        }, 1e3))
                    } catch (i) {
                        console.error("[E][DogEye] ".concat(b, " = "), i)
                    }
                }
            }, {
                key: "bark",
                value: function() {
                    try {
                        console.log("[E][DogEye] bark|sendLog ", this.messageList.length),
                        this.messageList && this.messageList.length > 0 && (this.config._$Dlog ? this.messageList.forEach(function(m) {
                            getApp().$answer.logKeyEvent({
                                event: "DogEye",
                                desc: m.substring(0, 100),
                                extra: {
                                    msg: m
                                }
                            })
                        }) : getApp().$answer.logKeyEvent({
                            event: "DogEye",
                            desc: "DogEye",
                            extra: {
                                msg: this.messageList.join("^")
                            }
                        }),
                        this.messageList.length = 0,
                        getApp().$answer.sendLog())
                    } catch (m) {
                        console.error("[E][DogEye] bark = ", m)
                    }
                }
            }]),
            x
        }()
          , K = new j;
        z.Z = K
    },
    "bvj/": function(ie, z, a) {
        "use strict";
        a.d(z, {
            Z: function() {
                return k
            }
        });
        var y = a("cVfI")
          , _ = a("zThL")
          , F = a("7PMe")
          , j = a.n(F)
          , K = a("quCI")
          , x = a("R/B8")
          , d = a("Oisn")
          , m = function(f, P, W) {
            return new Promise(function(N, L) {
                var s = function(c) {
                    try {
                        g(W.next(c))
                    } catch (S) {
                        L(S)
                    }
                }
                  , E = function(c) {
                    try {
                        g(W.throw(c))
                    } catch (S) {
                        L(S)
                    }
                }
                  , g = function(c) {
                    return c.done ? N(c.value) : Promise.resolve(c.value).then(s, E)
                };
                g((W = W.apply(f, P)).next())
            }
            )
        }
          , b = new (j());
        function Z() {
            var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              , f = i.header
              , P = i.headers
              , W = i.responseHeaders;
            if (f || P || W) {
                var N = f || P || W;
                if (typeof N == "string")
                    return N;
                var L = ""
                  , s = N["eagleeye-traceid"] || N["x-eagleeye-id"] || N["x-echo-requestid"];
                return Array.isArray(s) && s.length ? L = s[0] : L = s,
                !L && P && typeof P.get == "function" && (L = P.get("x-echo-requestid") || P.get("eagleeye-traceid")),
                L
            }
        }
        function H() {
            var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              , f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , P = arguments.length > 2 ? arguments[2] : void 0
              , W = arguments.length > 3 ? arguments[3] : void 0;
            try {
                f = f.response || f;
                var N = Z(f)
                  , L = {
                    status: P,
                    time: Date.now() - W,
                    http_code: 0,
                    reqParams: i,
                    format: i.url,
                    url: i.url,
                    extra: {
                        cookie: document.cookie
                    }
                };
                N && (L.traceId = N),
                P === 0 && (L.res = f.data || f),
                getApp().$answer.logNetwork(L);
                var s = f && f.data && f.data.message || f.message;
                P === 0 ? (getApp().$answer.sendLog(),
                getApp().$exlog2.rpcerrorAjax(i.url, s, {
                    req: i,
                    res: L.res,
                    traceId: N,
                    code: f.status
                })) : f && (f.status === 200 || !f.status) && s && getApp().$exlog2.rpcerrorAjax(i.url, s, {
                    req: i,
                    res: L.res,
                    traceId: N,
                    code: f.status
                }),
                console.info("[H5][request|http]", i.url, {
                    traceId: N,
                    req: i,
                    res: f
                })
            } catch (E) {
                console.error("[H5][request|http] = ", E)
            }
        }
        function k(i) {
            return m(this, null, (0,
            y.Z)().mark(function f() {
                var P, W, N, L, s;
                return (0,
                y.Z)().wrap(function(g) {
                    for (; ; )
                        switch (g.prev = g.next) {
                        case 0:
                            if (N = getApp().store,
                            i.extra = i.extra || {},
                            g.t0 = getApp().fromLocation,
                            g.t0) {
                                g.next = 7;
                                break
                            }
                            return g.next = 6,
                            N.Location();
                        case 6:
                            g.t0 = g.sent;
                        case 7:
                            return i.extra.location = g.t0,
                            i.app_id = d.app_id,
                            i.app_version = d.version,
                            i.env = getApp().env,
                            i._extInfo = {
                                loginSite: "eleme",
                                loginDomain: ".ele.me"
                            },
                            L = Date.now(),
                            s = (W = {
                                api: i.url,
                                method: i.method || "GET",
                                param: i.data
                            },
                            (0,
                            _.Z)(W, K.uk, (P = {},
                            (0,
                            _.Z)(P, K.vc, !1),
                            (0,
                            _.Z)(P, K.q8, "H5Version/".concat(d.version, " H5Build/").concat(d.build_num)),
                            (0,
                            _.Z)(P, K.BO, i.location !== !1),
                            P)),
                            (0,
                            _.Z)(W, "timeout", 15e3),
                            W),
                            i.options2 = s,
                            g.abrupt("return", (0,
                            x.Z)(b.request(s), 2e4, "TIMEOUT").then(function(u) {
                                return H(i, u, 1, L),
                                typeof u.data != "undefined" && u.data != null ? u.data : u
                            }).catch(function(u) {
                                return H(i, u, 0, L),
                                Promise.reject(u)
                            }));
                        case 16:
                        case "end":
                            return g.stop()
                        }
                }, f)
            }))
        }
    },
    "3ONG": function(ie, z, a) {
        "use strict";
        var y = a("zThL"), _, F = {
            TBELEME_HOSTS: "https://tb.ele.me",
            REST_API_HOST: "https://restapi.ele.me",
            FUSS10_HOST: "https://fuss10.elemecdn.com",
            SHADOW_HOST: "https://shadow.elemecdn.com/crayfish",
            OPEN_API_HOST: "https://openapi.ele.me",
            H5_API_HOST: "https://h5.ele.me",
            HELP_H5_HOTS: "https://help.ele.me",
            CUBE_HOST: "https://cube.elemecdn.com",
            WOOS_H5_HOTS: "https://woos-h5.faas.ele.me",
            UBT_HOSTS: "https://web-ubt.ele.me"
        }, j = {
            ENV_ONLINE: "online",
            ENV_PPE: "ppe",
            ENV_ALPHA: "alpha",
            ENV_BETA: "beta",
            ENV_ALTA: "alta",
            ENV_ALTB: "altb"
        }, K = {
            TBELEME_HOSTS: "https://tb.ele.me",
            REST_API_HOST: "https://ppe-restapi.ele.me",
            FUSS10_HOST: "https://fuss10.elemecdn.com",
            SHADOW_HOST: "https://shadow.elemecdn.com/crayfish",
            OPEN_API_HOST: "https://openapi.ele.me",
            H5_API_HOST: "https://ppe-h5.ele.me",
            HELP_H5_HOTS: "https://ppe-help.ele.me",
            CUBE_HOST: "https://cube.elemecdn.com",
            WOOS_H5_HOTS: "https://woos-h5.faas.ele.me",
            UBT_HOSTS: "https://web-ubt.ele.me"
        }, x = {
            TBELEME_HOSTS: "https://tb.ele.me",
            REST_API_HOST: "https://restapi.alpha.elenet.me",
            FUSS10_HOST: "https://fuss10.elemecdn.com",
            SHADOW_HOST: "https://shadow.elemecdn.com/crayfish",
            OPEN_API_HOST: "http://openapi.alpha.elenet.me",
            H5_API_HOST: "https://h5.alpha.elenet.me",
            HELP_H5_HOTS: "https://help.ar.elenet.me",
            CUBE_HOST: "https://cube.ar.elenet.me",
            WOOS_H5_HOTS: "https://woos-h5.faas.ar.elenet.me",
            UBT_HOSTS: "https://web-ubt.ele.me"
        }, d = {
            TBELEME_HOSTS: "https://tb.ele.me",
            REST_API_HOST: "https://restapi.ar.elenet.me",
            FUSS10_HOST: "https://fuss10.elemecdn.com",
            SHADOW_HOST: "https://shadow.elemecdn.com/crayfish",
            OPEN_API_HOST: "https://httpizza.ar.elenet.me",
            H5_API_HOST: "https://h5.ar.elenet.me",
            HELP_H5_HOTS: "https://help.ar.elenet.me",
            CUBE_HOST: "https://cube.ar.elenet.me",
            WOOS_H5_HOTS: "https://woos-h5.faas.ar.elenet.me",
            UBT_HOSTS: "https://web-ubt.ele.me"
        }, m = {
            TBELEME_HOSTS: "https://tb.ele.me",
            REST_API_HOST: "https://restapi.alta.elenet.me",
            FUSS10_HOST: "https://fuss10.elemecdn.com",
            SHADOW_HOST: "https://shadow.elemecdn.com/crayfish",
            OPEN_API_HOST: "https://httpizza.alta.elenet.me",
            H5_API_HOST: "https://h5.alta.elenet.me",
            HELP_H5_HOTS: "https://help.alta.elenet.me",
            CUBE_HOST: "https://cube.ar.elenet.me",
            WOOS_H5_HOTS: "https://woos-h5.faas.alta.elenet.me",
            UBT_HOSTS: "https://web-ubt.ele.me"
        }, b = {
            TBELEME_HOSTS: "https://tb.ele.me",
            REST_API_HOST: "https://restapi.altb.elenet.me",
            FUSS10_HOST: "https://fuss10.elemecdn.com",
            SHADOW_HOST: "https://shadow.elemecdn.com/crayfish",
            OPEN_API_HOST: "https://httpizza.altb.elenet.me",
            H5_API_HOST: "https://h5.altb.elenet.me",
            HELP_H5_HOTS: "https://help.altb.elenet.me",
            CUBE_HOST: "https://cube.ar.elenet.me",
            WOOS_H5_HOTS: "https://woos-h5.faas.altb.elenet.me",
            UBT_HOSTS: "https://web-ubt.ele.me"
        }, Z = (_ = {},
        (0,
        y.Z)(_, j.ENV_PPE, K),
        (0,
        y.Z)(_, j.ENV_ALPHA, x),
        (0,
        y.Z)(_, j.ENV_BETA, d),
        (0,
        y.Z)(_, j.ENV_ALTA, m),
        (0,
        y.Z)(_, j.ENV_ALTB, b),
        _), H = function(i) {
            return i = i || getApp().env,
            Z[i] || F
        };
        z.Z = {
            getHost: H
        }
    },
    eFvm: function() {
        var ie = my.call;
        my.call = function() {
            for (var z = arguments.length, a = new Array(z), y = 0; y < z; y++)
                a[y] = arguments[y];
            switch (a[0]) {
            case "startApp":
            case "navigateToOutside":
                a[1] && getApp().$answer.logKeyEvent({
                    event: "\u5916\u8DF3\u5C0F\u7A0B\u5E8F",
                    desc: "startApp|navigateToOutside",
                    extra: a[1]
                });
                break;
            default:
                break
            }
            ie.apply(my, a)
        }
    },
    "00cV": function() {
        var ie = null
          , z = my.getSystemInfoSync;
        my.getSystemInfoSync = function() {
            ie || (ie = z());
            var a = ie || {}
              , y = a.windowWidth
              , _ = a.screenWidth;
            if (!y || !_) {
                var F = ie;
                ie = null;
                try {
                    throw new Error({
                        title: "SystemInfo\u83B7\u53D6\u5F02\u5E38",
                        detail: F
                    })
                } catch (j) {
                    return console.error(j),
                    F
                }
            }
            return ie
        }
    },
    "+XKQ": function() {
        var ie = ["navigateTo", "redirectTo", "reLaunch", "switchTab"]
          , z = {};
        ie.forEach(function(a) {
            z[a] = my[a],
            my[a] = function(y) {
                var _ = y.url;
                getApp().$answer.logRouter({
                    scheme: _
                }),
                z[a].call(my, y)
            }
        })
    },
    JG9U: function(ie, z, a) {
        "use strict";
        a.d(z, {
            Z: function() {
                return u
            }
        });
        var y = a("cVfI")
          , _ = a("74Mb")
          , F = a("b3YW")
          , j = a("ZoN6")
          , K = {
            Change_LOCATION_SUCCESS: "Change_LOCATION_SUCCESS",
            Change_LOCATION_FAIL: "Change_LOCATION_FAIL"
        }
          , x = a("3zPr")
          , d = function(S, A, $) {
            return new Promise(function(T, O) {
                var w = function(ne) {
                    try {
                        Q($.next(ne))
                    } catch (fe) {
                        O(fe)
                    }
                }
                  , D = function(ne) {
                    try {
                        Q($.throw(ne))
                    } catch (fe) {
                        O(fe)
                    }
                }
                  , Q = function(ne) {
                    return ne.done ? T(ne.value) : Promise.resolve(ne.value).then(w, D)
                };
                Q(($ = $.apply(S, A)).next())
            }
            )
        };
        function m() {
            return new Promise(function(c) {
                _.Z.call("getAuthStatus", {
                    bizType: "2021001110676437",
                    authType: "LBS"
                }, function(S) {
                    c(S)
                }, function() {
                    c({})
                })
            }
            )
        }
        function b() {
            return new Promise(function(c) {
                _.Z.call("getSetting", {}, function(S) {
                    var A = S || {}
                      , $ = A.authSetting;
                    $ && !$.location ? c(!0) : c(!1)
                }, function() {
                    c(!1)
                })
            }
            )
        }
        function Z() {
            return d(this, null, (0,
            y.Z)().mark(function c() {
                var S, A, $, T, O, w, D;
                return (0,
                y.Z)().wrap(function(B) {
                    for (; ; )
                        switch (B.prev = B.next) {
                        case 0:
                            return B.next = 2,
                            getApp().store.Location().catch(function() {});
                        case 2:
                            if (S = B.sent,
                            A = S || {},
                            $ = A.timestamp,
                            T = A.latitude,
                            !(!T || !$)) {
                                B.next = 6;
                                break
                            }
                            return B.abrupt("return", Promise.resolve());
                        case 6:
                            if (O = parseInt(Date.now() / 1e3, 10),
                            w = O - $,
                            D = 15,
                            !(w < D * 60)) {
                                B.next = 11;
                                break
                            }
                            return B.abrupt("return", Promise.resolve());
                        case 11:
                            return B.abrupt("return", x.Z.removeLocation(!0));
                        case 12:
                        case "end":
                            return B.stop()
                        }
                }, c)
            }))
        }
        function H(c) {
            return d(this, null, (0,
            y.Z)().mark(function S() {
                var A, $, T, O, w, D;
                return (0,
                y.Z)().wrap(function(B) {
                    for (; ; )
                        switch (B.prev = B.next) {
                        case 0:
                            if (A = getApp().fromLocation,
                            console.log("[H5][Location] getSystemLocation|getApp().fromLocation", A),
                            A) {
                                B.next = 12;
                                break
                            }
                            if (c !== "launch") {
                                B.next = 6;
                                break
                            }
                            return B.next = 6,
                            Z().catch(function() {});
                        case 6:
                            return $ = 1e4,
                            window.ebridge && window.ebridge.isDINGTALK && ($ = 15 * 1e3),
                            B.next = 10,
                            (0,
                            F.EE)(_.Z.getLocation(), $).catch(function(ne) {
                                return ne || (console.error("[H5][Location] \u5B9A\u4F4D\u8D85\u65F610\u79D2"),
                                getApp().$ele().exlog.poierror("\u5B9A\u4F4D\u8D85\u65F610\u79D2")),
                                ne
                            });
                        case 10:
                            A = B.sent,
                            console.log("[H5][Location] getSystemLocation|my.getLocation", A);
                        case 12:
                            if (T = A || {},
                            O = T.latitude,
                            w = T.longitude,
                            !(!O || !w)) {
                                B.next = 15;
                                break
                            }
                            return B.abrupt("return", Promise.reject(A));
                        case 15:
                            return D = getCurrentPages(),
                            (!D || !D.length || (0,
                            F.Cf)(D[0].route) || (0,
                            F.IY)(D[0].route)) && getApp().store.setLocation(A),
                            B.abrupt("return", A);
                        case 18:
                        case "end":
                            return B.stop()
                        }
                }, S)
            }))
        }
        function k() {
            return d(this, null, (0,
            y.Z)().mark(function c() {
                return (0,
                y.Z)().wrap(function(A) {
                    for (; ; )
                        switch (A.prev = A.next) {
                        case 0:
                            return A.abrupt("return", getApp().store.Location().then(function($) {
                                return console.log("[H5][Location] getLocation|success", $),
                                $.latitude ? $ : Promise.reject("latitude is empty")
                            }).catch(function($) {
                                return console.log("[H5][Location] getLocation|fail", $),
                                _.Z.getLocation()
                            }));
                        case 1:
                        case "end":
                            return A.stop()
                        }
                }, c)
            }))
        }
        function i(c, S) {
            return d(this, null, (0,
            y.Z)().mark(function A() {
                var $, T, O, w, D, Q;
                return (0,
                y.Z)().wrap(function(ne) {
                    for (; ; )
                        switch (ne.prev = ne.next) {
                        case 0:
                            return $ = c || {},
                            T = $.latitude,
                            O = $.locationName,
                            ne.next = 3,
                            getApp().store.Location();
                        case 3:
                            if (w = ne.sent,
                            D = T && w.latitude !== T || O && O !== w.locationName,
                            Q = Object.assign(w, c),
                            !D) {
                                ne.next = 12;
                                break
                            }
                            return ne.next = 9,
                            getApp().store.setLocation(S ? c : Q).catch(function() {});
                        case 9:
                            getApp().fromLocation = null,
                            getApp().switchAddressSuccess = !0,
                            N(Q);
                        case 12:
                            return ne.abrupt("return", Q);
                        case 13:
                        case "end":
                            return ne.stop()
                        }
                }, A)
            }))
        }
        function f(c) {
            if (!(0,
            j.kz)()) {
                if (c && (c.error === 2001 || c.error === 2002)) {
                    _.Z.call("openSetting");
                    return
                }
                my.showToast({
                    content: "\u8BF7\u5728\u7CFB\u7EDF\u8BBE\u7F6E\u9875\u6216\u5E94\u7528\u7BA1\u7406\u9875\u5185\u6253\u5F00\u5B9A\u4F4D\u6743\u9650"
                })
            }
        }
        function P() {
            W()
        }
        function W() {
            console.log("[H5] \u8DF3\u8F6C\u5730\u5740\u9875\u9762");
            var c = getApp().$ele().appInfo || {}
              , S = c.isPluginHost
              , A = S === void 0 ? !1 : S;
            if (A) {
                var $ = "https://h5.ele.me/minisite/pages-poi/address/index";
                window.location.href.startsWith("https://h5.ele.me") || ($ = "https://ppe-h5.ele.me/minisite/pages-poi/address/index"),
                getApp().navigate({
                    url: $
                })
            } else
                getApp().navigate({
                    url: "/pages-poi/address/index"
                })
        }
        function N(c) {
            getApp().$event.emit(K.Change_LOCATION_SUCCESS, c)
        }
        function L() {
            getApp().$event.emit(K.Change_LOCATION_FAIL)
        }
        function s(c) {
            getApp().$event.emit(K.Change_LOCATION_SUCCESS, c)
        }
        function E(c, S) {
            getApp().$event[S ? "once" : "on"](K.Change_LOCATION_SUCCESS, c)
        }
        function g(c) {
            getApp().$event.off(K.Change_LOCATION_SUCCESS, c)
        }
        var u = {
            goToLocationPage: P,
            openHomeAddressPage: W,
            getAuthStatus: m,
            getLocation: k,
            getSystemLocation: H,
            setLocation: i,
            locationAuthNotOpen: b,
            LocationEvent: K,
            showLbsGuide: f,
            onChangeLocationSuccess: N,
            onChangeLocationError: L,
            onChangeLocationSuccessEvent: E,
            offChangeLocationSuccessEvent: g,
            emitChangeLocationSuccessEvent: s
        }
    },
    "7Sxm": function(ie, z, a) {
        "use strict";
        var y = a("lIP5")
          , _ = a("cVfI")
          , F = a("byvu")
          , j = a("ZoN6")
          , K = a("Oisn")
          , x = a("04pj")
          , d = Object.defineProperty
          , m = Object.getOwnPropertySymbols
          , b = Object.prototype.hasOwnProperty
          , Z = Object.prototype.propertyIsEnumerable
          , H = function(O, w, D) {
            return w in O ? d(O, w, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: D
            }) : O[w] = D
        }
          , k = function(O, w) {
            for (var D in w || (w = {}))
                b.call(w, D) && H(O, D, w[D]);
            if (m) {
                var Q = (0,
                F.Z)(m(w)), B;
                try {
                    for (Q.s(); !(B = Q.n()).done; ) {
                        var D = B.value;
                        Z.call(w, D) && H(O, D, w[D])
                    }
                } catch (ne) {
                    Q.e(ne)
                } finally {
                    Q.f()
                }
            }
            return O
        }
          , i = function(O, w, D) {
            return new Promise(function(Q, B) {
                var ne = function(he) {
                    try {
                        Ee(D.next(he))
                    } catch (re) {
                        B(re)
                    }
                }
                  , fe = function(he) {
                    try {
                        Ee(D.throw(he))
                    } catch (re) {
                        B(re)
                    }
                }
                  , Ee = function(he) {
                    return he.done ? Q(he.value) : Promise.resolve(he.value).then(ne, fe)
                };
                Ee((D = D.apply(O, w)).next())
            }
            )
        }
          , f = function() {
            var O = getApp()
              , w = O.env
              , D = w === void 0 ? "" : w;
            switch (D) {
            case "ppe":
                return "ppe-waimai-guide.ele.me";
            case "daily":
                return "acs-waptest.eleme.test";
            case "online":
            default:
                return "waimai-guide.ele.me"
            }
        }
          , P = function() {
            return document.cookie
        };
        function W() {
            var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              , O = T.header
              , w = T.responseHeaders;
            if (O || w) {
                var D = O || w;
                if (typeof D == "string")
                    return D;
                var Q = D["eagleeye-traceid"] || D["x-eagleeye-id"] || D["x-echo-requestid"];
                return Array.isArray(Q) && Q.length ? Q[0] : Q
            }
        }
        function N() {
            var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              , O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , w = arguments.length > 2 ? arguments[2] : void 0
              , D = arguments.length > 3 ? arguments[3] : void 0;
            try {
                var Q = W(O)
                  , B = {
                    status: w,
                    time: Date.now() - D,
                    http_code: 0,
                    reqParams: T,
                    format: T.api,
                    url: "https://".concat(f(), "/gw/").concat(T.api, "/").concat(T.v),
                    extra: {
                        cookie: P()
                    }
                };
                Q && (B.traceId = Q),
                w === 0 && (B.res = O),
                getApp().$answer.logNetwork(B),
                w === 0 ? (getApp().$answer.sendLog(),
                getApp().$exlog2.rpcerrorMtop(T.api, O.errorMessage || O.message, {
                    req: T,
                    res: O,
                    traceId: Q
                })) : (O.status === 200 || !O.status) && (O.errorMessage || O.message) && getApp().$exlog2.rpcerrorMtop(T.api, O.errorMessage || O.message, {
                    req: T,
                    res: O,
                    traceId: Q
                }),
                console.info("[H5][request|mtop]", T.api, {
                    req: T,
                    res: O
                })
            } catch (ne) {
                console.error("[H5][request|mtop] = ", ne)
            }
        }
        var L = function() {
            return "h5@Web_".concat((0,
            j.JZ)() ? "iphone" : "android", "_").concat(K.version)
        }
          , s = function() {
            return i(void 0, null, (0,
            _.Z)().mark(function O() {
                var w, D, Q, B, ne, fe, Ee, me, he, re, Oe, Fe, Re, Ie, He, We, oe, I, M, V, de, ge, ye, Le, Ae;
                return (0,
                _.Z)().wrap(function(_e) {
                    for (; ; )
                        switch (_e.prev = _e.next) {
                        case 0:
                            return _e.next = 2,
                            (0,
                            x.Zw)();
                        case 2:
                            if (w = _e.sent,
                            D = my.getSystemInfoSync(),
                            Q = D.brand,
                            B = Q === void 0 ? "" : Q,
                            ne = D.platform,
                            fe = ne === void 0 ? "" : ne,
                            Ee = D.language,
                            me = Ee === void 0 ? "" : Ee,
                            he = D.system,
                            re = he === void 0 ? "" : he,
                            _e.t0 = getApp().fromLocation,
                            _e.t0) {
                                _e.next = 9;
                                break
                            }
                            return _e.next = 8,
                            getApp().store.Location();
                        case 8:
                            _e.t0 = _e.sent;
                        case 9:
                            return Oe = _e.t0,
                            Fe = Oe.longitude,
                            Re = Oe.latitude,
                            Ie = "Longitude/".concat(Fe),
                            He = "Latitude/".concat(Re),
                            We = "Rajax/1",
                            oe = "Mobile",
                            I = "".concat(fe, "/").concat(re),
                            M = "Language/".concat(me),
                            V = "RenderWay/H5",
                            de = "From/".concat(getApp().h5_from),
                            ge = "H5Version/".concat(K.version),
                            ye = "H5Build/".concat(K.build_num),
                            Le = w ? "DeviceId/".concat(w) : "",
                            Ae = [We, Le, B, Ie, He, I, M, V, de, ge, ye, oe],
                            _e.abrupt("return", Ae.join(" ") + " ".concat(window.navigator.userAgent));
                        case 25:
                        case "end":
                            return _e.stop()
                        }
                }, O)
            }))
        }
          , E = function() {
            for (var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], w = !1, D = 0; D < O.length; D++)
                if (/FAIL_SYS_TRAFFIC_LIMIT|ANDROID_SYS_API_FLOW_LIMIT_LOCKED|RATE_LIMITED|FAIL_LOCAL_ERROR_FANG_XUE_FENG/.test(O[D])) {
                    w = !0;
                    break
                }
            return w
        }
          , g = function(O, w, D, Q, B) {
            var ne = B.error
              , fe = B.data;
            if (B.status = 200,
            B.isTrafficLimited = !1,
            B.api = D.api,
            ne) {
                /ANDROID_SYS_LOGIN_FAIL|FAIL_SYS_SESSION_EXPIRED/.test(B.errorCode || B.error) ? (B.status = 401,
                B.isNotLogin = !0) : B.status = 400,
                w(B);
                return
            }
            if (fe) {
                var Ee = fe.errorCode
                  , me = Ee === void 0 ? "" : Ee
                  , he = fe.errorMsg
                  , re = String(me);
                if (re && re.length > 0 && re.indexOf("SUCCESS") < 0) {
                    B.status = 400,
                    w(B);
                    return
                }
            }
            if (E(B.ret)) {
                B.status = 429,
                B.isTrafficLimited = !0,
                w(B);
                return
            }
            O(B)
        }
          , u = function T() {
            var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              , w = Object.keys(O || {});
            w.forEach(function(D) {
                (0,
                y.Z)(O[D]) === "object" && !Array.isArray(O[D]) && (T(O[D]),
                O[D] = JSON.stringify(O[D]))
            })
        }
          , c = {
            api: "apiName",
            v: "apiVersion"
        }
          , S = function() {
            for (var O = arguments.length, w = new Array(O), D = 0; D < O; D++)
                w[D] = arguments[D];
            return i(void 0, [].concat(w), function() {
                var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                  , B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                return (0,
                _.Z)().mark(function ne() {
                    var fe, Ee, me;
                    return (0,
                    _.Z)().wrap(function(re) {
                        for (; ; )
                            switch (re.prev = re.next) {
                            case 0:
                                if (fe = {},
                                !B) {
                                    re.next = 11;
                                    break
                                }
                                return fe = {
                                    headers: {}
                                },
                                Object.keys(Q).forEach(function(Oe) {
                                    Oe in c ? fe[c[Oe]] = Q[Oe] : fe[Oe] = Q[Oe]
                                }),
                                re.next = 6,
                                s();
                            case 6:
                                fe.headers["x-ele-ua"] = re.sent,
                                Ee = Q["x-ua"],
                                Ee && !(0,
                                j.kz)() && (fe.headers["x-ua"] = Ee,
                                delete fe["x-ua"]),
                                re.next = 27;
                                break;
                            case 11:
                                return me = Q.headers || Q.ext_headers || {},
                                delete Q.headers,
                                delete Q.ext_headers,
                                re.t0 = k,
                                re.t1 = k,
                                re.next = 18,
                                s();
                            case 18:
                                re.t2 = re.sent,
                                re.t3 = {
                                    "x-ele-ua": re.t2
                                },
                                re.t4 = me,
                                re.t5 = (0,
                                re.t1)(re.t3, re.t4),
                                re.t6 = f(),
                                re.t7 = L(),
                                re.t8 = {
                                    ext_headers: re.t5,
                                    accountSite: "eleme",
                                    mpHost: re.t6,
                                    ttid: re.t7
                                },
                                re.t9 = Q,
                                fe = (0,
                                re.t0)(re.t8, re.t9);
                            case 27:
                                return u(fe.data || {}),
                                re.abrupt("return", fe);
                            case 29:
                            case "end":
                                return re.stop()
                            }
                    }, ne)
                })()
            })
        }
          , A = function(O) {
            return i(void 0, null, (0,
            _.Z)().mark(function w() {
                var D, Q, B, ne, fe;
                return (0,
                _.Z)().wrap(function(me) {
                    for (; ; )
                        switch (me.prev = me.next) {
                        case 0:
                            if (me.t0 = getApp().fromLocation,
                            me.t0) {
                                me.next = 5;
                                break
                            }
                            return me.next = 4,
                            getApp().store.Location();
                        case 4:
                            me.t0 = me.sent;
                        case 5:
                            if (D = me.t0,
                            Q = D.longitude,
                            B = Q === void 0 ? "" : Q,
                            ne = D.latitude,
                            fe = ne === void 0 ? "" : ne,
                            console.log("[H5] mtop\u8BF7\u6C42|\u83B7\u53D6\u7ECF\u7EAC\u5EA6", B, fe),
                            !(!O || !B || !fe)) {
                                me.next = 13;
                                break
                            }
                            return me.abrupt("return");
                        case 13:
                            O.data || (O.data = {}),
                            O.data.longitude = B,
                            O.data.latitude = fe;
                        case 16:
                        case "end":
                            return me.stop()
                        }
                }, w)
            }))
        }
          , $ = function(O, w) {
            var D = w || {}
              , Q = D.useTaobaoSession
              , B = Q === void 0 ? !1 : Q
              , ne = D.needLocation
              , fe = ne === void 0 ? !1 : ne;
            return new Promise(function(Ee, me) {
                S(O, B, fe).then(function(he) {
                    return i(void 0, null, (0,
                    _.Z)().mark(function re() {
                        var Oe;
                        return (0,
                        _.Z)().wrap(function(Re) {
                            for (; ; )
                                switch (Re.prev = Re.next) {
                                case 0:
                                    if (!fe) {
                                        Re.next = 3;
                                        break
                                    }
                                    return Re.next = 3,
                                    A(he);
                                case 3:
                                    if (Oe = Date.now(),
                                    B)
                                        try {
                                            my.call("mtop", he, function(Ie) {
                                                N(he, Ie, 1, Oe),
                                                g(Ee, me, O, he, Ie)
                                            })
                                        } catch (Ie) {
                                            N(he, Ie, 0, Oe),
                                            me(Ie)
                                        }
                                    else
                                        my.sendMtop(he).then(function(Ie) {
                                            N(he, Ie, 1, Oe),
                                            g(Ee, me, O, he, Ie)
                                        }).catch(function(Ie) {
                                            N(he, Ie, 0, Oe),
                                            g(Ee, me, O, he, Ie)
                                        });
                                case 5:
                                case "end":
                                    return Re.stop()
                                }
                        }, re)
                    }))
                })
            }
            )
        };
        z.Z = $
    },
    svpa: function(ie, z, a) {
        "use strict";
        var y = a("cVfI")
          , _ = a("dPUc")
          , F = function(K, x, d) {
            return new Promise(function(m, b) {
                var Z = function(f) {
                    try {
                        k(d.next(f))
                    } catch (P) {
                        b(P)
                    }
                }
                  , H = function(f) {
                    try {
                        k(d.throw(f))
                    } catch (P) {
                        b(P)
                    }
                }
                  , k = function(f) {
                    return f.done ? m(f.value) : Promise.resolve(f.value).then(Z, H)
                };
                k((d = d.apply(K, x)).next())
            }
            )
        };
        z.Z = function(j) {
            return F(void 0, null, (0,
            y.Z)().mark(function K() {
                return (0,
                y.Z)().wrap(function(d) {
                    for (; ; )
                        switch (d.prev = d.next) {
                        case 0:
                            (0,
                            _.default)().navigate(j);
                        case 1:
                        case "end":
                            return d.stop()
                        }
                }, K)
            }))
        }
    },
    Zaey: function(ie, z, a) {
        "use strict";
        var y = a("byvu")
          , _ = a("dPUc")
          , F = a("mbJN")
          , j = a("Oisn")
          , K = a("xqT1")
          , x = a("+/eQ")
          , d = a("3zPr")
          , m = Object.defineProperty
          , b = Object.defineProperties
          , Z = Object.getOwnPropertyDescriptors
          , H = Object.getOwnPropertySymbols
          , k = Object.prototype.hasOwnProperty
          , i = Object.prototype.propertyIsEnumerable
          , f = function(L, s, E) {
            return s in L ? m(L, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: E
            }) : L[s] = E
        }
          , P = function(L, s) {
            for (var E in s || (s = {}))
                k.call(s, E) && f(L, E, s[E]);
            if (H) {
                var g = (0,
                y.Z)(H(s)), u;
                try {
                    for (g.s(); !(u = g.n()).done; ) {
                        var E = u.value;
                        i.call(s, E) && f(L, E, s[E])
                    }
                } catch (c) {
                    g.e(c)
                } finally {
                    g.f()
                }
            }
            return L
        }
          , W = function(L, s) {
            return b(L, Z(s))
        };
        z.Z = function() {
            var N = getApp()
              , L = N.aLocation
              , s = N.env
              , E = N.navigate;
            return {
                appInfo: W(P({}, F), {
                    version: j.version,
                    env: s
                }),
                authLogin: {
                    authThenLogin: function() {
                        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        return u.forceLogin ? (0,
                        _.default)().authLogin.login(!1, u.useCache) : (0,
                        _.default)().authLogin.login(u.silent, u.useCache)
                    },
                    getUserId: d.Z.UserIdSync,
                    getUserInfo: (0,
                    _.default)().authLogin.getUserInfo,
                    isLogin: function() {
                        return !!d.Z.UserIdSync()
                    }
                },
                getLocation: function() {
                    return L.getLocation("plugin")
                },
                getSelectedAddress: function() {
                    var u = getApp().store.getCache("selectedOneProjectAddressPoi");
                    if (u === "0")
                        return 0;
                    var c = u;
                    return (!c || !c.latitude) && (c = ""),
                    c
                },
                getSelectedMapAddress: x.zr,
                navigate: function(u) {
                    !u || !u.targetUrl || E({
                        url: u.targetUrl,
                        trackParams: u.spm,
                        params: u.params,
                        redirect: !!u.redirect,
                        navType: u.navType
                    })
                },
                isMemoryWarning: function() {
                    return getApp().appMemoryWarningCount > 0
                },
                getShopPreRenderData: K.t$
            }
        }
    },
    xqT1: function(ie, z, a) {
        "use strict";
        a.d(z, {
            t$: function() {
                return m
            },
            LP: function() {
                return b
            }
        });
        var y = a("pcVp"), _ = [], F = [], j = 0, K;
        function x() {
            var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
              , f = new Set(["2021001185671035"]);
            i.forEach(function(P) {
                f.has(P) && j++
            })
        }
        function d(i, f) {
            if (getApp().appMemoryWarningCount) {
                F = [];
                return
            }
            i && _.forEach(function(P) {
                P(i)
            }),
            f && F.length && (f(F),
            j === _.length && (F.length = 0))
        }
        function m() {
            var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            j > _.length && (F = F.concat(i),
            F.length > 30 && (F = F.slice(0, 30))),
            d(i)
        }
        function b(i) {
            return K && K(i)
        }
        function Z(i) {
            if (i) {
                var f = i.getRenderData
                  , P = i.getSnapshotInfo;
                f && typeof f == "function" && (_.push(f),
                d(void 0, f)),
                P && typeof P == "function" && (K = P)
            }
        }
        function H(i) {
            var f = requirePlugin("dynamic-plugin://".concat(i));
            +i == 0x72e1701c3377b && Z(f)
        }
        function k(i) {
            initPlugin(i);
            var f = requirePlugin(i);
            i === "pluginEStore" && Z(f)
        }
    },
    "3zPr": function(ie, z, a) {
        "use strict";
        var y = a("cVfI")
          , _ = a("byvu")
          , F = a("yhVA")
          , j = Object.defineProperty
          , K = Object.defineProperties
          , x = Object.getOwnPropertyDescriptors
          , d = Object.getOwnPropertySymbols
          , m = Object.prototype.hasOwnProperty
          , b = Object.prototype.propertyIsEnumerable
          , Z = function(s, E, g) {
            return E in s ? j(s, E, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: g
            }) : s[E] = g
        }
          , H = function(s, E) {
            for (var g in E || (E = {}))
                m.call(E, g) && Z(s, g, E[g]);
            if (d) {
                var u = (0,
                _.Z)(d(E)), c;
                try {
                    for (u.s(); !(c = u.n()).done; ) {
                        var g = c.value;
                        b.call(E, g) && Z(s, g, E[g])
                    }
                } catch (S) {
                    u.e(S)
                } finally {
                    u.f()
                }
            }
            return s
        }
          , k = function(s, E) {
            return K(s, x(E))
        }
          , i = function(s, E, g) {
            return new Promise(function(u, c) {
                var S = function(O) {
                    try {
                        $(g.next(O))
                    } catch (w) {
                        c(w)
                    }
                }
                  , A = function(O) {
                    try {
                        $(g.throw(O))
                    } catch (w) {
                        c(w)
                    }
                }
                  , $ = function(O) {
                    return O.done ? u(O.value) : Promise.resolve(O.value).then(S, A)
                };
                $((g = g.apply(s, E)).next())
            }
            )
        }
          , f = "ElemeMiniApp"
          , P = {}
          , W = function(s) {
            return s || "EMPTY"
        }
          , N = {
            allStore: function() {
                return F.Z.get(f).catch(function() {
                    return {}
                })
            },
            User: function() {
                return this.get("user").then(W)
            },
            Location: function() {
                return this.get("location").then(function(s) {
                    return s || Promise.reject("EMPTY")
                }).catch(function() {
                    return {}
                })
            },
            LocationSync: function() {
                return P.location
            },
            UserIdSync: function() {
                return P.userId
            },
            UserId: function() {
                return this.get("userId").then(W)
            },
            get: function(s) {
                return i(this, null, (0,
                y.Z)().mark(function E() {
                    var g;
                    return (0,
                    y.Z)().wrap(function(c) {
                        for (; ; )
                            switch (c.prev = c.next) {
                            case 0:
                                if (!P[s]) {
                                    c.next = 2;
                                    break
                                }
                                return c.abrupt("return", P[s]);
                            case 2:
                                return c.next = 4,
                                this.allStore();
                            case 4:
                                if (c.t0 = c.sent,
                                c.t0) {
                                    c.next = 7;
                                    break
                                }
                                c.t0 = {};
                            case 7:
                                if (g = c.t0,
                                !s) {
                                    c.next = 11;
                                    break
                                }
                                return P[s] || (P[s] = g[s]),
                                c.abrupt("return", P[s]);
                            case 11:
                                return c.abrupt("return", g);
                            case 12:
                            case "end":
                                return c.stop()
                            }
                    }, E, this)
                }))
            },
            set: function(s, E, g) {
                return i(this, null, (0,
                y.Z)().mark(function u() {
                    var c;
                    return (0,
                    y.Z)().wrap(function(A) {
                        for (; ; )
                            switch (A.prev = A.next) {
                            case 0:
                                if (s) {
                                    A.next = 3;
                                    break
                                }
                                return console.warn("KEY IS NECESSARY"),
                                A.abrupt("return", Promise.reject("KEY IS NECESSARY"));
                            case 3:
                                return P[s] = E,
                                A.next = 6,
                                this.allStore();
                            case 6:
                                if (A.t0 = A.sent,
                                A.t0) {
                                    A.next = 9;
                                    break
                                }
                                A.t0 = {};
                            case 9:
                                return c = A.t0,
                                c[s] = E,
                                A.abrupt("return", F.Z.set(f, c, g).then(function($) {
                                    return P[s] = E,
                                    Promise.resolve($)
                                }).catch(function($) {
                                    return Promise.reject($)
                                }));
                            case 12:
                            case "end":
                                return A.stop()
                            }
                    }, u, this)
                }))
            },
            getCache: function(s) {
                return P[s]
            },
            setCache: function(s, E) {
                P[s] = E
            },
            removeCache: function(s) {
                delete P[s]
            },
            setUser: function(s) {
                return i(this, null, (0,
                y.Z)().mark(function E() {
                    return (0,
                    y.Z)().wrap(function(u) {
                        for (; ; )
                            switch (u.prev = u.next) {
                            case 0:
                                return u.abrupt("return", this.set("user", s));
                            case 1:
                            case "end":
                                return u.stop()
                            }
                    }, E, this)
                }))
            },
            setUserId: function(s) {
                return i(this, null, (0,
                y.Z)().mark(function E() {
                    return (0,
                    y.Z)().wrap(function(u) {
                        for (; ; )
                            switch (u.prev = u.next) {
                            case 0:
                                return u.abrupt("return", this.set("userId", s, !0));
                            case 1:
                            case "end":
                                return u.stop()
                            }
                    }, E, this)
                }))
            },
            setLocation: function(s, E) {
                return i(this, null, (0,
                y.Z)().mark(function g() {
                    var u;
                    return (0,
                    y.Z)().wrap(function(S) {
                        for (; ; )
                            switch (S.prev = S.next) {
                            case 0:
                                if (!(!s.latitude || !s.longitude)) {
                                    S.next = 2;
                                    break
                                }
                                return S.abrupt("return", Promise.reject("latitude && longitude is required"));
                            case 2:
                                s.locationName || (s.locationName = s.address),
                                u = parseInt(new Date().valueOf() / 1e3, 10);
                                try {
                                    getApp().$answer.logKeyEvent({
                                        event: "\u5B9A\u4F4D|store.setLocation",
                                        desc: JSON.stringify(k(H({}, s), {
                                            timestamp: u,
                                            miniPoiType: E
                                        }))
                                    })
                                } catch (A) {
                                    console.error(A)
                                }
                                return S.abrupt("return", this.set("location", k(H({}, s), {
                                    timestamp: u,
                                    miniPoiType: E
                                }), !0));
                            case 6:
                            case "end":
                                return S.stop()
                            }
                    }, g, this)
                }))
            },
            removeLocation: function() {
                return i(this, null, (0,
                y.Z)().mark(function s() {
                    return (0,
                    y.Z)().wrap(function(g) {
                        for (; ; )
                            switch (g.prev = g.next) {
                            case 0:
                                return g.abrupt("return", this.set("location", {}, !0));
                            case 1:
                            case "end":
                                return g.stop()
                            }
                    }, s, this)
                }))
            },
            setJavis: function(s) {
                return i(this, null, (0,
                y.Z)().mark(function E() {
                    return (0,
                    y.Z)().wrap(function(u) {
                        for (; ; )
                            switch (u.prev = u.next) {
                            case 0:
                                return u.abrupt("return", this.set("javisFactor", s, !0));
                            case 1:
                            case "end":
                                return u.stop()
                            }
                    }, E, this)
                }))
            },
            updateAddressType: function(s, E) {
                return i(this, null, (0,
                y.Z)().mark(function g() {
                    var u;
                    return (0,
                    y.Z)().wrap(function(S) {
                        for (; ; )
                            switch (S.prev = S.next) {
                            case 0:
                                return S.next = 2,
                                this.Location();
                            case 2:
                                u = S.sent,
                                u.addressType = s,
                                N.setLocation(u, E);
                            case 5:
                            case "end":
                                return S.stop()
                            }
                    }, g, this)
                }))
            }
        };
        z.Z = Object.freeze(N)
    },
    "04pj": function(ie, z, a) {
        "use strict";
        a.d(z, {
            Zw: function() {
                return E
            },
            mQ: function() {
                return S
            },
            me: function() {
                return L
            }
        });
        var y = a("dPUc")
          , _ = a("R/B8")
          , F = a("3zPr")
          , j = a("c/JK")
          , K = a("b3YW");
        function x(A) {
            return new Promise(function($, T) {
                $({
                    did: "".concat((0,
                    K.Vj)(), "-").concat(Date.now())
                })
            }
            )
        }
        var d = (0,
        j.Z)(x)
          , m = a("yhVA")
          , b = a("zpH5")
          , Z = !0
          , H = "ALIPAY_DDID"
          , k = (0,
        j.Z)(function() {
            return m.Z.get("UT_USER_INFO")
        }, !0)
          , i = (0,
        j.Z)(function() {
            return m.Z.get("USER_INFO")
        }, !0)
          , f = (0,
        j.Z)(function() {
            return m.Z.get(H)
        }, !0)
          , P = (0,
        j.Z)(b.Z.requestUserId, !0)
          , W = function($) {
            P().then(function(T) {
                m.Z.set("UT_USER_INFO", {
                    user_id: T,
                    havana_id: $
                })
            }).catch(function() {
                m.Z.set("UT_USER_INFO", {
                    havana_id: $,
                    user_id: ""
                })
            })
        }
          , N = function() {
            return k().catch(function() {
                return {
                    user_id: "0",
                    havana_id: "0"
                }
            })
        }
          , L = function() {
            return i().catch(function() {
                return {
                    user_id: "0",
                    havana_id: "0"
                }
            })
        }
          , s = function() {
            return F.Z.Location().catch(function() {
                return {
                    latitude: "0",
                    longitude: "0",
                    districtId: "",
                    cityId: ""
                }
            })
        }
          , E = function() {
            return new Promise(function($) {
                f().then(function(T) {
                    if (T)
                        return $(T);
                    d(["did"]).then(function(O) {
                        m.Z.set(H, O.did, !0),
                        $(O.did)
                    }).catch(function() {
                        $("")
                    })
                }).catch(function() {
                    $("")
                })
            }
            )
        };
        (0,
        y.default)().utils.getDeviceId = E;
        var g = function() {
            return (0,
            _.Z)(N(), 1e3).catch(function() {
                return {
                    user_id: "timeout",
                    havana_id: "timeout"
                }
            })
        }
          , u = function() {
            return (0,
            _.Z)(s(), 1e3).catch(function() {
                return {
                    latitude: "0",
                    longitude: "0",
                    districtId: "",
                    cityId: "timeout"
                }
            })
        }
          , c = function() {
            return (0,
            _.Z)(E(), 1e3).catch(function() {
                return "timeout"
            })
        }
          , S = function() {
            return new Promise(function($) {
                Promise.all([g(), u(), c()]).then(function(T) {
                    var O = T[0] || {};
                    O.havana_id && O.user_id === "" && Z && (Z = !1,
                    W(O.havana_id));
                    try {
                        var w = {
                            user_id: O.user_id || "",
                            alsc_havana_id: O.havana_id || "",
                            latitude: T[1].latitude || "",
                            longitude: T[1].longitude || "",
                            district_id: T[1].districtId || "",
                            city_id: T[1].cityId || "",
                            eleme_device_id: T[2] || ""
                        };
                        $(w)
                    } catch (D) {
                        $({})
                    }
                }).catch(function() {
                    $({})
                })
            }
            )
        }
    },
    jfEw: function(ie, z, a) {
        "use strict";
        a.d(z, {
            RO: function() {
                return x
            }
        });
        var y = a("dPUc")
          , _ = null
          , F = {
            channel: "",
            subChannel: "",
            subSubChannel: ""
        };
        function j() {
            return _ || ((0,
            y.default)().utils.getChannelInfo && (_ = (0,
            y.default)().utils.getChannelInfo()),
            _ || F)
        }
        function K() {
            return j().channel
        }
        function x() {
            return j().subChannel
        }
        function d() {
            return j().subSubChannel
        }
    },
    "c/JK": function(ie, z, a) {
        "use strict";
        a.d(z, {
            Z: function() {
                return y
            }
        });
        function y(_, F) {
            var j = this, K = [], x = [], d = !1, m;
            return function() {
                for (var b = arguments.length, Z = new Array(b), H = 0; H < b; H++)
                    Z[H] = arguments[H];
                return new Promise(function(k, i) {
                    if (m)
                        return k(m);
                    K.push(k),
                    x.push(i),
                    !d && !m && (d = !0,
                    _.call.apply(_, [j].concat(Z)).then(function(f) {
                        for (m = f; K.length > 0; )
                            K.pop()(f);
                        d = !1,
                        F && (m = null)
                    }).catch(function(f) {
                        for (; x.length > 0; )
                            x.pop()(f);
                        d = !1
                    }))
                }
                )
            }
        }
    },
    "8I0N": function(ie, z, a) {
        "use strict";
        a.d(z, {
            M: function() {
                return K
            },
            N: function() {
                return x
            }
        });
        var y = a("lIP5")
          , _ = {
            higher: 1,
            lower: -1,
            equal: 0
        }
          , F = {
            dingding: ["dd"],
            kb: ["koubei"],
            tb: ["taobao", "TB"],
            ap: ["alipay"],
            eleme: ["eleme", "elemec", "ELMC"],
            dy: ["Douyin"],
            dylt: ["douyin_lite"],
            tt: ["Douyin", "douyin_lite"]
        };
        function j(d) {
            var m = d.split(".")
              , b = parseInt(m[0] || "0", 10)
              , Z = parseInt(m[1] || "0", 10)
              , H = parseInt(m[2] || "0", 10)
              , k = "" + Z
              , i = "" + H;
            return Z < 10 && (k = "0" + Z),
            H < 10 && (i = "0" + H),
            parseFloat(b + "." + k + i)
        }
        var K = function(m, b) {
            var Z = b || my.getSystemInfoSync().version
              , H = j(Z)
              , k = j(m);
            return H < k ? _.lower : H > k ? _.higher : _.equal
        }
          , x = function(m) {
            var b = (typeof navigator == "undefined" ? "undefined" : (0,
            y.Z)(navigator)) === "object" ? navigator.userAgent : void 0;
            if (m === "douyin" && b && b.indexOf("Aweme") > -1)
                return !0;
            if (m === "wechat")
                return (typeof wx == "undefined" ? "undefined" : (0,
                y.Z)(wx)) === "object";
            var Z = my.getSystemInfoSync(!0)
              , H = F[m] || [m];
            return H.indexOf(Z.app || Z.appName) > -1
        }
    },
    lNK2: function(ie, z, a) {
        "use strict";
        var y = a("byvu")
          , _ = a("ilZX")
          , F = Object.defineProperty
          , j = Object.getOwnPropertySymbols
          , K = Object.prototype.hasOwnProperty
          , x = Object.prototype.propertyIsEnumerable
          , d = function(i, f, P) {
            return f in i ? F(i, f, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: P
            }) : i[f] = P
        }
          , m = function(i, f) {
            for (var P in f || (f = {}))
                K.call(f, P) && d(i, P, f[P]);
            if (j) {
                var W = (0,
                y.Z)(j(f)), N;
                try {
                    for (W.s(); !(N = W.n()).done; ) {
                        var P = N.value;
                        x.call(f, P) && d(i, P, f[P])
                    }
                } catch (L) {
                    W.e(L)
                } finally {
                    W.f()
                }
            }
            return i
        }
          , b = function(i, f) {
            var P = getApp().$exlog
              , W = typeof f == "number" ? f : null;
            P && P.log({
                performance: "H5_EX_CUSTM_PERFORMANCE",
                type: !W && f,
                msg: {
                    title: i,
                    costTime: W
                }
            })
        }
          , Z = function(i) {
            var f = i._ext
              , P = i.title
              , W = i.errorMsg
              , N = i.detail
              , L = i.stack
              , s = (0,
            _.im)()
              , E = s && s.route || ""
              , g = getApp().$exlog
              , u = {};
            f && (u._ext = f),
            g && g.log({
                error: f ? "H5_EX_RATEERROR" : "H5_EX_CUSTOMERROR",
                msg: m({
                    title: P,
                    errorMsg: W,
                    errorCode: E,
                    detail: N,
                    stack: L
                }, u)
            })
        }
          , H = function(i) {
            var f = i._ext
              , P = i.title
              , W = i.errorMsg
              , N = i.detail
              , L = i.stack;
            Z({
                _ext: "".concat(f),
                title: P,
                errorMsg: W,
                stack: L,
                detail: Number(f) === 1 ? "" : N
            })
        };
        z.Z = {
            performance: b,
            custom: Z,
            rate: H
        }
    },
    kWDW: function(ie, z, a) {
        "use strict";
        a.d(z, {
            Z: function() {
                return Ve
            }
        });
        var y = a("byvu")
          , _ = a("3ONG")
          , F = Object.defineProperty
          , j = Object.getOwnPropertySymbols
          , K = Object.prototype.hasOwnProperty
          , x = Object.prototype.propertyIsEnumerable
          , d = function(v, R, C) {
            return R in v ? F(v, R, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: C
            }) : v[R] = C
        }
          , m = function(v, R) {
            for (var C in R || (R = {}))
                K.call(R, C) && d(v, C, R[C]);
            if (j) {
                var X = (0,
                y.Z)(j(R)), q;
                try {
                    for (X.s(); !(q = X.n()).done; ) {
                        var C = q.value;
                        x.call(R, C) && d(v, C, R[C])
                    }
                } catch (ve) {
                    X.e(ve)
                } finally {
                    X.f()
                }
            }
            return v
        }
          , b = /(ossgw|cx)\.alicdn\.(com|net)/
          , Z = /\.(svg|gif)/
          , H = {
            sharpen: "s50",
            clean: !0,
            format: "webp",
            ossHostname: "//ossgw.alicdn.com",
            domainCList: /^(?:http:|https:)?(\/\/)?\S+\.alicdn\.com/
        };
        function k(l) {
            if (!b.test(l) || Z.test(l))
                return l;
            var v = l.split("?")[0];
            return v.split("@")[0]
        }
        function i(l, v) {
            if (l !== "" && l && !b.test(l) || Z.test(l))
                return l;
            var R = k(l)
              , C = "@";
            if (v.size && (C += v.size),
            v.wh && (C += "_" + v.wh),
            v.cut && (C += "_" + v.cut),
            v.circle && (C += "_" + v.circle),
            v.quality && (C += "_" + v.quality),
            v.sharpen) {
                var X = v.sharpen.replace(/[^\d]/g, "");
                C += "_" + (X > 50 && X < 399 ? X : "50sh")
            }
            return v.format && (C += "." + v.format),
            R + C
        }
        var f = function(v, R, C, X) {
            var q = m(m({}, H), X);
            q.size = R + "w_" + C + "h_1e_1l";
            var ve = v && v.replace(q.domainCList, q.ossHostname);
            return i(ve, q)
        }
          , P = f
          , W = Object.defineProperty
          , N = Object.defineProperties
          , L = Object.getOwnPropertyDescriptors
          , s = Object.getOwnPropertySymbols
          , E = Object.prototype.hasOwnProperty
          , g = Object.prototype.propertyIsEnumerable
          , u = function(v, R, C) {
            return R in v ? W(v, R, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: C
            }) : v[R] = C
        }
          , c = function(v, R) {
            for (var C in R || (R = {}))
                E.call(R, C) && u(v, C, R[C]);
            if (s) {
                var X = (0,
                y.Z)(s(R)), q;
                try {
                    for (X.s(); !(q = X.n()).done; ) {
                        var C = q.value;
                        g.call(R, C) && u(v, C, R[C])
                    }
                } catch (ve) {
                    X.e(ve)
                } finally {
                    X.f()
                }
            }
            return v
        }
          , S = function(v, R) {
            return N(v, L(R))
        }
          , A = /_(?:(sum|m|b|\d+x\d+)(xz|xc)?)?(c[xy]\d+i\d+)?(co0)?([qQ]\d+)?(g)?(s\d+)?\.jpg(_.webp)?$/
          , $ = /_(?:(sum|m|b|\d+x\d+))?((xz|xc)|g|co0|(c[xy]\d+i\d+))([qQ]\d{2})?(s\d+)?\.jpg/
          , T = /\.(svg|gif)/
          , O = /_\.(webp)/
          , w = /(alicdn|taobaocdn|wimg\.taobao|img\.taobao|tbimg\.lazada)\.(com|net|sg)/
          , D = {
            sharpen: "s50",
            clean: !0,
            tfsHostname: "//img.alicdn.com",
            domainCList: /^(?:http:|https:)?(\/\/)?\S+\.alicdn\.com/
        }
          , Q = {};
        Q.sizeList = [[16], [20], [24], [30], [32], [36], [40], [190, 43], [90, 45], [48], [100, 50], [50], [96, 54], [90, 60], [60], [80, 60], [120, 60], [60, 90], [64], [81, 65], [70], [140, 70], [70, 1e3], [72], [121, 75], [75, 100], [75], [80], [160, 80], [80, 1e3], [230, 87], [88], [110, 90], [90], [160, 90], [180, 90], [120, 90], [90, 135], [100, 150], [100], [100, 1e3], [140, 100], [200, 100], [115, 100], [264, 100], [110, 1e4], [110], [170, 120], [120, 160], [120], [125], [128], [130], [140], [210, 140], [142], [145], [150], [150, 200], [150, 1e4], [400, 152], [160], [160, 240], [160, 180], [165, 5e3], [170], [170, 1e4], [1e4, 170], [485, 175], [180], [180, 230], [270, 180], [190], [196], [200], [210], [210, 1e3], [220, 1e4], [220], [220, 330], [1e4, 220], [220, 5e3], [250, 225], [230], [234], [240, 5e3], [240, 1e4], [240], [250], [270], [270, 450], [420, 280], [280, 410], [284], [288, 480], [290], [290, 1e4], [292], [294, 430], [300, 1e3], [300], [310], [320, 5e3], [320, 480], [320], [490, 330], [336], [1e4, 340], [350], [350, 1e3], [360], [560, 370], [400], [790, 420], [480, 420], [430], [440], [660, 440], [450, 1e4], [500, 450], [450, 600], [450, 5e3], [460], [468], [640, 480], [480], [490], [500, 1e3], [1e4, 500], [540], [560, 840], [560], [570], [570, 1e4], [580], [580, 1e4], [600], [620, 1e4], [640], [670], [720], [728], [760], [790, 1e4], [960], [970], [1080, 1800], [1152, 1920], [1200], [2200]];
        function B(l) {
            if (!w.test(l) || T.test(l))
                return l;
            var v = l.match(A) || [];
            return v[0] !== "_.jpg" ? l.replace(A, "").replace(O, "") : l.replace(O, "")
        }
        function ne(l, v) {
            var R, C = A.exec(l);
            if (!(!v && (!w.test(l) || T.test(l))))
                return R = C ? {
                    size: C[1],
                    crop: C[2],
                    cut: C[3],
                    circle: C[4],
                    quality: C[5],
                    rotate: C[6],
                    sharpen: C[7]
                } : {},
                C = O.exec(l),
                C && (R.format = C[1]),
                R
        }
        function fe(l, v) {
            var R = Number.MAX_VALUE
              , C = l || 0
              , X = v || 0
              , q = Q.sizeList
              , ve = 0
              , Pe = 0
              , Te = ""
              , De = q.length
              , ee = 0
              , h = 0;
            if (!C && !X)
                return "";
            for (R = Math.max(C, X); R > Pe && ve < De; )
                ee = q[ve][0],
                h = q[ve][1] || ee,
                ve++,
                Pe = Math.min(ee, h),
                Te = ee + "x" + h;
            return Te
        }
        function Ee(l, v) {
            var R = "";
            if (l !== "" && l && !w.test(l) || T.test(l))
                return l;
            R = B(l);
            var C = $.test(l)
              , X = !C && v.clean ? {} : ne(l) || {};
            v = C ? S(c({}, X), {
                format: v.format
            }) : c(c({}, X), v);
            var q = ""
              , ve = "";
            return v.size && (q += v.size,
            v.crop && (q += v.crop)),
            v.cut && (q += v.cut),
            v.circle && (q += v.circle),
            v.quality && (q += v.quality),
            v.rotate && (q += v.rotate),
            v.sharpen && (q += v.sharpen),
            q && (q = "_" + q + ".jpg"),
            v.format && v.format === "webp" && (ve = "_." + v.format),
            R + q + ve
        }
        function me(l, v, R, C) {
            var X = c(c({}, D), C);
            X.size = fe(v, R),
            X.quality = "Q" + C.quality;
            var q = l && l.replace(X.domainCList, X.tfsHostname);
            return Ee(q, X)
        }
        var he = me
          , re = a("ZoN6")
          , Oe = Object.defineProperty
          , Fe = Object.defineProperties
          , Re = Object.getOwnPropertyDescriptors
          , Ie = Object.getOwnPropertySymbols
          , He = Object.prototype.hasOwnProperty
          , We = Object.prototype.propertyIsEnumerable
          , oe = function(v, R, C) {
            return R in v ? Oe(v, R, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: C
            }) : v[R] = C
        }
          , I = function(v, R) {
            for (var C in R || (R = {}))
                He.call(R, C) && oe(v, C, R[C]);
            if (Ie) {
                var X = (0,
                y.Z)(Ie(R)), q;
                try {
                    for (X.s(); !(q = X.n()).done; ) {
                        var C = q.value;
                        We.call(R, C) && oe(v, C, R[C])
                    }
                } catch (ve) {
                    X.e(ve)
                } finally {
                    X.f()
                }
            }
            return v
        }
          , M = function(v, R) {
            return Fe(v, Re(R))
        }
          , V = new RegExp(/^(https:|http:)?\/\/.+\.gif$/)
          , de = new RegExp(/^(https:|http:)?\/\/.+\.apng$/);
        function ge(l) {
            return l == null || l.trim() === ""
        }
        function ye() {
            var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0
              , v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
              , R = arguments.length > 2 ? arguments[2] : void 0
              , C = arguments.length > 3 ? arguments[3] : void 0
              , X = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "mfit";
            if (!R && (!l || !v || l === 0 && v === 0))
                return "";
            var q = "/resize".concat(R ? "" : ",m_".concat(X));
            return l > 0 && (q += ",w_".concat(l)),
            v > 0 && (q += ",h_".concat(v)),
            C && (q += ",limit_0"),
            q
        }
        function Le(l) {
            var v = l.width
              , R = v === void 0 ? 0 : v
              , C = l.height
              , X = C === void 0 ? 0 : C
              , q = l.x
              , ve = q === void 0 ? 0 : q
              , Pe = l.y
              , Te = Pe === void 0 ? 0 : Pe
              , De = "/crop";
            return De += ",x_".concat(ve, ",y_").concat(Te),
            R > 0 && (De += ",w_".concat(R)),
            X > 0 && (De += ",h_".concat(X)),
            De
        }
        function Ae(l) {
            return l > 0 && l <= 100 ? "/quality,q_".concat(l) : ""
        }
        function J(l) {
            return ge(l) ? "" : "/format,".concat(l)
        }
        function _e() {
            var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            if (l && l.length !== 0) {
                var v = "x-oss-process=image";
                return l.forEach(function(R) {
                    v += R
                }),
                v
            }
            return ""
        }
        function xe(l, v) {
            if (!l)
                return l;
            var R = _.Z.getHost().CUBE_HOST;
            if (v && v.length > 0 && (R = v),
            /^(https:|http:)?\/\//.test(l))
                return l;
            var C = l.replace(/^(.)(..)(.{29}(.*))$/, "/$1/$2/$3.$4");
            return R + C
        }
        function Xe() {
            var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              , v = l.width
              , R = l.height
              , C = l.hash
              , X = l.format
              , q = l.quality
              , ve = l.host
              , Pe = l.crop
              , Te = l.mode
              , De = l.isSingleFill
              , ee = l.limit
              , h = xe(C, ve, v, R, X);
            if (V.test(h))
                return h;
            var U = new Array;
            U.push(ye(v, R, De, ee, Te)),
            Pe && U.push(Le(Pe)),
            U.push(J(X)),
            U.push(Ae(q));
            var G = _e(U);
            return G && /x-oss-process/.test(h) || ge(G) ? h : "".concat(h, "?").concat(G)
        }
        function qe(l) {
            var v = l.hash
              , R = l.width
              , C = l.height
              , X = l.format
              , q = l.host
              , ve = l.quality
              , Pe = l.isSingleFill
              , Te = l.crop
              , De = l.limit
              , ee = l.mode
              , h = {
                hash: v,
                width: R,
                height: C,
                format: X,
                quality: ve,
                host: q,
                isSingleFill: Pe,
                limit: De,
                crop: Te ? M(I({}, Te), {
                    width: Te.width,
                    height: Te.height
                }) : void 0,
                mode: ee
            };
            return Xe(h)
        }
        function Qe(l, v, R) {
            var C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
              , X = /(alicdn|taobaocdn|wimg\.taobao|img\.taobao|tbimg\.lazada)\.(com|net|sg)/
              , q = /\/\/(ossgw|gqrcode|m|assets|g|ag|a\.dd|uaction|wwc|osdes|gjusp|gtb-fun|qianniu|gamc|glife-img|alchemy-img|alpha)\.alicdn.com/
              , ve = /(ossgw|cx)\.alicdn\.(com|net)/
              , Pe = window && window.crossimageConfig || {};
            if (C = Object.assign(Pe, C),
            !l)
                return "";
            var Te = l.split("?")
              , De = Te[1] || "";
            return C.format = "webp",
            ve.test(l) ? l = P(l, v, R, C) : (l === "" || X.test(l) && !q.test(l)) && (l = he(l, v, R, C)),
            l + (De ? "?" + De : "")
        }
        function et() {
            var l = getApp()
              , v = l.appBasicConfig
              , R = l.appMemoryWarningCount
              , C = v || {}
              , X = C.baseCdnPct;
            return !R || !X || typeof X != "number" ? 1 : Number((v.baseCdnPct * .01).toFixed(1))
        }
        var Ve = function(l) {
            var v = l.hash
              , R = l.width
              , C = l.height
              , X = l.isSingleFill
              , q = X === void 0 ? !1 : X
              , ve = l.format
              , Pe = l.host
              , Te = l.quality
              , De = Te === void 0 ? 90 : Te
              , ee = l.crop
              , h = l.limit
              , U = h === void 0 ? !1 : h
              , G = l.mode;
            if (ge(v))
                return "";
            if (V.test(v) || de.test(v))
                return v;
            !/gif$/.test(v) && (!(0,
            re.kz)(!0) || !(0,
            re.JZ)()) ? ve = "webp" : ve || (ve = "png");
            var ue = et()
              , se = R && Math.ceil(R * ue)
              , be = C && Math.ceil(C * ue);
            if (/^(https:|http:)?\/\//.test(v)) {
                if (/getAvatarForMini=true/.test(v))
                    return getApp().$exlog.log({
                        error: "H5_EX_IMAGEERROR",
                        msg: {
                            title: "\u8DF3\u8FC7\u56FE\u7247\u88C1\u5207\u903B\u8F91",
                            errorMsg: v
                        }
                    }),
                    v;
                if (!/elemecdn/.test(v))
                    return Qe(v, se, be, {
                        isSingleFill: q,
                        format: ve,
                        host: Pe,
                        quality: De,
                        crop: ee,
                        limit: U,
                        mode: G
                    })
            }
            return qe({
                hash: v,
                width: se,
                height: be,
                format: ve,
                host: Pe,
                quality: De,
                isSingleFill: q,
                crop: ee,
                limit: U,
                mode: G
            })
        }
    },
    nFNt: function(ie, z, a) {
        "use strict";
        var y = a("7rOc");
        z.Z = y.Z
    },
    b3YW: function(ie, z, a) {
        "use strict";
        a.d(z, {
            jT: function() {
                return i.jT
            },
            vU: function() {
                return L.Z
            },
            Bb: function() {
                return b
            },
            XM: function() {
                return j()
            },
            vc: function() {
                return _e
            },
            Q2: function() {
                return M
            },
            Gr: function() {
                return qe
            },
            im: function() {
                return i.im
            },
            rt: function() {
                return y.Z
            },
            wK: function() {
                return d()
            },
            lR: function() {
                return ge
            },
            qR: function() {
                return J
            },
            Cf: function() {
                return i.Cf
            },
            IY: function() {
                return i.IY
            },
            Ci: function() {
                return De
            },
            $F: function() {
                return H
            },
            P2: function() {
                return _.Z
            },
            EE: function() {
                return K.Z
            },
            jq: function() {
                return k
            },
            Vj: function() {
                return l
            },
            IC: function() {
                return et
            }
        });
        var y = a("kWDW")
          , _ = a("XOhl")
          , F = a("73Pv")
          , j = a.n(F)
          , K = a("R/B8")
          , x = a("yY9n")
          , d = a.n(x)
          , m = function(h) {
            if (h >= 1e3) {
                var U = Math.round(h / 100) / 10;
                return "".concat(U, "km")
            }
            return "".concat(h, "m")
        }
          , b = m
          , Z = a("BAlg")
          , H = {
            stringify: Z.Z.getQueryString,
            parse: Z.Z.getQuery
        }
          , k = Z.Z.parse
          , i = a("ilZX")
          , f = a("byvu")
          , P = a("EC45")
          , W = a("mbJN")
          , N = a("Oisn")
          , L = a("lNK2")
          , s = a("dPUc")
          , E = a("bvj/")
          , g = a("04pj")
          , u = a("nFNt")
          , c = a("Zaey")
          , S = Object.defineProperty
          , A = Object.defineProperties
          , $ = Object.getOwnPropertyDescriptors
          , T = Object.getOwnPropertySymbols
          , O = Object.prototype.hasOwnProperty
          , w = Object.prototype.propertyIsEnumerable
          , D = function(h, U, G) {
            return U in h ? S(h, U, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: G
            }) : h[U] = G
        }
          , Q = function(h, U) {
            for (var G in U || (U = {}))
                O.call(U, G) && D(h, G, U[G]);
            if (T) {
                var ue = (0,
                f.Z)(T(U)), se;
                try {
                    for (ue.s(); !(se = ue.n()).done; ) {
                        var G = se.value;
                        w.call(U, G) && D(h, G, U[G])
                    }
                } catch (be) {
                    ue.e(be)
                } finally {
                    ue.f()
                }
            }
            return h
        }
          , B = function(h, U) {
            return A(h, $(U))
        }
          , ne = {
            channelPlugin: function() {
                var h = getApp()
                  , U = h.geohash;
                return {
                    extend: B(Q({}, (0,
                    c.Z)()), {
                        geohash: U,
                        $ele: s.default
                    })
                }
            },
            channelDayCheapPlugin: function() {
                return {
                    extend: Q({}, (0,
                    c.Z)())
                }
            },
            framePlugin: function() {
                var h = getApp()
                  , U = h.aBridge
                  , G = h.aLocation
                  , ue = h.aplus
                  , se = h.env
                  , be = h.$event
                  , Ue = h.navigate
                  , we = h.storage
                  , Ze = h.store
                  , Se = h.geohash;
                return {
                    extend: {
                        aBridge: U,
                        aFetch: E.Z,
                        aLocation: G,
                        aplus: ue,
                        track: {
                            getOriginalData: g.mQ,
                            getDeviceId: g.Zw
                        },
                        authLogin: (0,
                        c.Z)().authLogin,
                        event: be,
                        env: se,
                        hashToUrl: y.Z,
                        hex2rgb: u.Z,
                        navigate: Ue,
                        storage: we,
                        geohash: Se,
                        store: Ze
                    }
                }
            }
        };
        function fe(ee) {
            var h = ne[ee];
            return h ? h() : {}
        }
        var Ee = fe
          , me = Object.defineProperty
          , he = Object.defineProperties
          , re = Object.getOwnPropertyDescriptors
          , Oe = Object.getOwnPropertySymbols
          , Fe = Object.prototype.hasOwnProperty
          , Re = Object.prototype.propertyIsEnumerable
          , Ie = function(h, U, G) {
            return U in h ? me(h, U, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: G
            }) : h[U] = G
        }
          , He = function(h, U) {
            for (var G in U || (U = {}))
                Fe.call(U, G) && Ie(h, G, U[G]);
            if (Oe) {
                var ue = (0,
                f.Z)(Oe(U)), se;
                try {
                    for (ue.s(); !(se = ue.n()).done; ) {
                        var G = se.value;
                        Re.call(U, G) && Ie(h, G, U[G])
                    }
                } catch (be) {
                    ue.e(be)
                } finally {
                    ue.f()
                }
            }
            return h
        }
          , We = function(h, U) {
            return he(h, re(U))
        }
          , oe = function(h, U, G) {
            return new Promise(function(ue, se) {
                var be = function(Se) {
                    try {
                        we(G.next(Se))
                    } catch ($e) {
                        se($e)
                    }
                }
                  , Ue = function(Se) {
                    try {
                        we(G.throw(Se))
                    } catch ($e) {
                        se($e)
                    }
                }
                  , we = function(Se) {
                    return Se.done ? ue(Se.value) : Promise.resolve(Se.value).then(be, Ue)
                };
                we((G = G.apply(h, U)).next())
            }
            )
        }
          , I = {
            0x72e173adc9711: {
                name: "framePlugin"
            },
            0x72e173d2fa421: {
                name: "channelPlugin"
            },
            0x72e1774336f64: {
                name: "channelDayCheapPlugin"
            }
        }
          , M = function(h) {
            if (!h)
                return null;
            var U = W.plugins;
            if (U) {
                var G;
                if (Object.keys(U).some(function(ue) {
                    if (U[ue].provider === h)
                        return G = ue,
                        !0
                }),
                G)
                    return G
            }
            return "dynamic-plugin://".concat(h)
        }
          , V = function(h) {
            var U = getApp()
              , G = U.havanaMultiInstance
              , ue = U.env;
            typeof G == "boolean" && h({
                appInfo: We(He(He({}, W), N), {
                    env: ue
                }),
                getUseSendMtopSync: function() {
                    return G
                }
            })
        }
          , de = !1
          , ge = function() {
            var h = requirePlugin("dynamic-plugin://2021001187620889");
            if (h && h.initPlugin)
                if (getApp().appHavanaLoginComplete)
                    V(h.initPlugin);
                else {
                    if (de)
                        return;
                    de = !0,
                    getApp().$event.once("appHavanaLoginComplete", function() {
                        V(h.initPlugin)
                    })
                }
        };
        function ye(ee, h, U, G) {
            L.Z.rate({
                _ext: U,
                title: "\u52A8\u6001\u63D2\u4EF6\u52A0\u8F7D\u6210\u529F\u7387_".concat(ee),
                errorMsg: U,
                detail: {
                    bizParams: h,
                    message: G && G.message
                },
                stack: G
            })
        }
        function Le(ee) {
            var h = ee.pluginId
              , U = ee.name
              , G = ee.version
              , ue = ee.extend
              , se = ee._localDev
              , be = ee._from;
            return new Promise(function(Ue, we) {
                if (be === "launch") {
                    getApp().$plugin.mountPlugin({
                        identity: "dynamic-plugin://" + h,
                        name: U,
                        extend: ue || {}
                    });
                    return
                }
                getApp().$plugin.init({
                    plugins: [{
                        name: U,
                        id: se ? "" : h,
                        version: G || "*",
                        extend: ue || {},
                        success: function(Se) {
                            Se && ye(h, null, "1", ""),
                            Ue()
                        },
                        fail: function(Se) {
                            ye(h, null, "0", Se),
                            console.log("[pluginInitByMor]\u63D2\u4EF6\u52A0\u8F7D\u5931\u8D25", h, Se),
                            we(Se)
                        }
                    }]
                })
            }
            )
        }
        var Ae = function(h) {
            var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (I[h]) {
                var G = I[h].name;
                return Le(He({
                    pluginId: h,
                    name: G,
                    _from: U._from
                }, Ee(G)))
            }
            return (0,
            P.loadPlugin)(h, He({}, U)).then(function(ue) {
                return ye(h, U, "1", ue),
                ue
            }).catch(function(ue) {
                return ye(h, U, "0", ue),
                console.log("[eleLoadPlugin]\u63D2\u4EF6\u52A0\u8F7D\u5931\u8D25", h, ue),
                Promise.reject(ue)
            })
        }
          , J = function(h) {
            return !!I[h]
        }
          , _e = function(h, U) {
            var G = U.charAt(0) === "/" ? "" : "/"
              , ue = "dynamic-plugin://".concat(h).concat(G).concat(U)
              , se = k(ue, !0);
            se.query.startTime = Date.now();
            var be = I[h]
              , Ue = be.name;
            return getApp().$plugin.instances[Ue] ? Promise.resolve(se.toString()) : Ae(h).then(function() {
                return se.toString()
            }).catch(function() {
                return U
            })
        }
          , xe = function(h) {
            return oe(void 0, null, _regeneratorRuntime().mark(function U() {
                var G, ue, se, be;
                return _regeneratorRuntime().wrap(function(we) {
                    for (; ; )
                        switch (we.prev = we.next) {
                        case 0:
                            if (G = h || {},
                            ue = G.path,
                            /^plugin/.test(ue)) {
                                we.next = 3;
                                break
                            }
                            return we.abrupt("return");
                        case 3:
                            if (se = ue.match(/plugin.*:\/\/([^/]+)/),
                            be = se && se[1],
                            !J(be)) {
                                we.next = 10;
                                break
                            }
                            return we.next = 8,
                            Ae(be, {
                                _from: "launch"
                            });
                        case 8:
                            we.next = 11;
                            break;
                        case 10:
                            pluginHandle(h);
                        case 11:
                        case "end":
                            return we.stop()
                        }
                }, U)
            }))
        }
          , Xe = function(h, U) {
            return ~~(h * U / 750)
        }
          , qe = Xe
          , Qe = function() {
            var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            return h && h.length
        }
          , et = Qe
          , Ve = a("E9k0")
          , l = Ve.Z
          , v = a("cVfI")
          , R = a("mG9a")
          , C = a("ZoN6")
          , X = function(h, U, G) {
            return new Promise(function(ue, se) {
                var be = function(Se) {
                    try {
                        we(G.next(Se))
                    } catch ($e) {
                        se($e)
                    }
                }
                  , Ue = function(Se) {
                    try {
                        we(G.throw(Se))
                    } catch ($e) {
                        se($e)
                    }
                }
                  , we = function(Se) {
                    return Se.done ? ue(Se.value) : Promise.resolve(Se.value).then(be, Ue)
                };
                we((G = G.apply(h, U)).next())
            }
            )
        };
        function q() {
            return new Promise(function(ee) {
                my.call("getMemoryInfo", {
                    success: function(U) {
                        ee(U)
                    },
                    fail: function(U) {
                        ee(U)
                    }
                })
            }
            )
        }
        var ve = {}
          , Pe = !1;
        function Te(ee) {
            return X(this, null, (0,
            v.Z)().mark(function h() {
                var U, G;
                return (0,
                v.Z)().wrap(function(se) {
                    for (; ; )
                        switch (se.prev = se.next) {
                        case 0:
                            if (!(!(0,
                            C.V5)() || !(0,
                            C.JZ)())) {
                                se.next = 2;
                                break
                            }
                            return se.abrupt("return");
                        case 2:
                            if (!Pe) {
                                se.next = 4;
                                break
                            }
                            return se.abrupt("return");
                        case 4:
                            if (!ve[ee]) {
                                se.next = 7;
                                break
                            }
                            return Pe = !0,
                            se.abrupt("return");
                        case 7:
                            return se.next = 9,
                            q();
                        case 9:
                            if (U = se.sent,
                            U.currentMemory) {
                                se.next = 13;
                                break
                            }
                            return Pe = !0,
                            se.abrupt("return");
                        case 13:
                            ve[ee] = U.currentMemory,
                            ee === R.qJ.pluginsOnLoad && (G = (ve[R.qJ.pluginsOnLoad] - ve[R.qJ.appOnLaunch]) / 1024,
                            L.Z.performance("\u5C0F\u7A0B\u5E8F\u542F\u52A8\u5185\u5B58\u6C34\u4F4D", G),
                            L.Z.custom({
                                title: "\u5C0F\u7A0B\u5E8F\u542F\u52A8\u5185\u5B58\u6C34\u4F4D-\u9996\u9875",
                                errorMsg: Math.ceil(G),
                                detail: U
                            }));
                        case 15:
                        case "end":
                            return se.stop()
                        }
                }, h)
            }))
        }
        var De = {
            getMemoryInfo: q,
            launchMemoryLog: Te
        }
    },
    ilZX: function(ie, z, a) {
        "use strict";
        a.d(z, {
            Cf: function() {
                return j
            },
            IY: function() {
                return K
            },
            im: function() {
                return y
            },
            jT: function() {
                return _
            }
        });
        var y = function(d) {
            var m = getCurrentPages()
              , b = typeof d == "number" && d >= 0 ? d : m.length - 1
              , Z = m ? m[b] : null;
            return Z
        }
          , _ = function(d) {
            var m = y();
            return !!m && m.route === d
        };
        function F(x, d) {
            var m = x.split("?")[0];
            return m.charAt(0) === "/" && (m = m.slice(1)),
            d.indexOf(m) > -1
        }
        var j = function(d) {
            var m = ["pages/index/index", "pages/my/index", "pages/order-list/index", "pages/svip/index"];
            return F(d, m)
        }
          , K = function(d) {
            var m = ["pages/webview-redirect/webview-redirect", "pages/webview-redirect-transnavbar/webview-redirect", "pages/container/index", "pages/container-transnavbar/index"];
            return F(d, m)
        }
    },
    gqDZ: function(ie, z, a) {
        "use strict";
        var y = a("cVfI")
          , _ = a("dPUc")
          , F = a("ZoN6")
          , j = function(P, W, N) {
            return new Promise(function(L, s) {
                var E = function(S) {
                    try {
                        u(N.next(S))
                    } catch (A) {
                        s(A)
                    }
                }
                  , g = function(S) {
                    try {
                        u(N.throw(S))
                    } catch (A) {
                        s(A)
                    }
                }
                  , u = function(S) {
                    return S.done ? L(S.value) : Promise.resolve(S.value).then(E, g)
                };
                u((N = N.apply(P, W)).next())
            }
            )
        };
        function K(f) {
            f.preventDefault(),
            this.webViewContext.postMessage({
                action: "readyToBlockBack"
            })
        }
        function x() {
            var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if ((0,
            _.default)().serviceModal.config) {
                var P = Object.keys(f);
                P.forEach(function(W) {
                    (0,
                    _.default)().serviceModal.config[W] = f[W]
                })
            }
        }
        function d(f) {
            var P = f || {}, W = P.data, N = W === void 0 ? {} : W, L;
            if ((0,
            F.JZ)()) {
                var s = N.op
                  , E = s === void 0 ? "" : s;
                L = JSON.parse(E)[0] || {}
            } else
                L = JSON.parse(N.syncMessage || [])[0] || {};
            var g = L
              , u = g.pl
              , c = u === void 0 ? "" : u
              , S = JSON.parse(c)
              , A = S.eventType
              , $ = A === void 0 ? "" : A;
            x({
                shouldShowRedPoint: $ === "message_send"
            }),
            getApp().$event.emit("event:service_modal_config")
        }
        function m() {
            var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            return new Promise(function(P, W) {
                my.call("unregisterSync", {
                    bizType: f
                }, function(N) {
                    console.log("\u6CE8\u9500sync", N),
                    N.success ? P() : (getApp().$exlog.log({
                        error: "H5_EX_CUSTOMERROR",
                        msg: {
                            title: "sync\u901A\u9053\u6CE8\u9500\u5931\u8D25",
                            errorMsg: JSON.stringify(N)
                        }
                    }),
                    W())
                }),
                my.off("syncMessage_".concat(f), d)
            }
            )
        }
        function b() {
            var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
              , P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
              , W = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            W ? m(f) : setTimeout(function() {
                m(f)
            }, P)
        }
        function Z() {
            var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
              , P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return j(this, null, (0,
            y.Z)().mark(function W() {
                return (0,
                y.Z)().wrap(function(L) {
                    for (; ; )
                        switch (L.prev = L.next) {
                        case 0:
                            return L.next = 2,
                            m(f).catch(function() {});
                        case 2:
                            my.on("syncMessage_".concat(f), d),
                            my.call("registerSync", {
                                bizType: f
                            }, function(s) {
                                console.log("\u6CE8\u518Csync", s),
                                s.success || getApp().$exlog.log({
                                    error: "H5_EX_CUSTOMERROR",
                                    msg: {
                                        title: "sync\u901A\u9053\u6CE8\u518C\u5931\u8D25",
                                        errorMsg: JSON.stringify(s)
                                    }
                                })
                            }),
                            b(f, P);
                        case 5:
                        case "end":
                            return L.stop()
                        }
                }, W)
            }))
        }
        function H() {
            if ((0,
            _.default)().serviceModal.config) {
                var f = (0,
                _.default)().serviceModal.config || {}
                  , P = f.expires
                  , W = P === void 0 ? 0 : P
                  , N = f.shouldShowRedPoint
                  , L = N === void 0 ? !1 : N
                  , s = f.openUrl
                  , E = s === void 0 ? "" : s
                  , g = W - Date.now();
                return {
                    display: g > 0,
                    duration: g,
                    shouldShowRedPoint: L,
                    openUrl: E
                }
            }
        }
        function k() {
            var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
              , P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
              , W = H()
              , N = W.display
              , L = N === void 0 ? !1 : N
              , s = W.duration
              , E = s === void 0 ? 0 : s;
            x({
                syncChannelBizType: P
            }),
            L && (f ? Z(P, E) : b(P, 0, !0))
        }
        function i() {
            var f = (0,
            _.default)().serviceModal.config || {}
              , P = f.syncChannelBizType
              , W = P === void 0 ? "" : P;
            b(W, 0, !0),
            (0,
            _.default)().serviceModal.config = {
                shouldShowRedPoint: !1,
                duration: 0,
                expires: 0,
                openUrl: "",
                syncChannelBizType: ""
            }
        }
        z.Z = {
            backHandle: K,
            bizType: "serviceModal",
            initSeviceModalConfig: i,
            setServiceModalConfig: x,
            shouldDisplayServiceModal: H,
            registerSyncChannel: Z,
            destorySyncChannel: b,
            toggleSyncChannel: k
        }
    },
    yhVA: function(ie, z, a) {
        "use strict";
        var y = a("74Mb")
          , _ = "ELEME_"
          , F = {}
          , j = {}
          , K = {
            getSync: function(d) {
                if (d) {
                    var m = y.Z.getStorageSync({
                        key: _ + d
                    });
                    if (m.data) {
                        try {
                            var b = JSON.parse(m.data).data;
                            return b
                        } catch (Z) {
                            console.error(Z)
                        }
                        return m
                    }
                }
            },
            get: function(d) {
                return new Promise(function(m, b) {
                    if (d || b("key is required"),
                    F[d])
                        return m(F[d]);
                    y.Z.getStorage({
                        key: _ + d,
                        success: function(H) {
                            if (!H.data)
                                return b("EMPTY");
                            try {
                                var k = JSON.parse(H.data).data;
                                F[d] || (F[d] = k),
                                m(F[d])
                            } catch (i) {
                                b(i)
                            }
                            return H
                        },
                        fail: function() {
                            b("EMPTY")
                        }
                    })
                }
                ).catch(function() {})
            },
            setSync: function(d, m) {
                d && y.Z.setStorageSync({
                    key: _ + d,
                    data: JSON.stringify({
                        data: m
                    })
                })
            },
            set: function(d, m, b) {
                return new Promise(function(Z, H) {
                    if (b) {
                        if (!d)
                            throw new Error("key is required");
                        F[d] = m,
                        y.Z.setStorage({
                            key: _ + d,
                            data: JSON.stringify({
                                data: m
                            }),
                            success: function(i) {
                                F[d] = m,
                                Z(i)
                            },
                            fail: H
                        })
                    } else
                        try {
                            if (!d)
                                throw new Error("key is required");
                            F[d] = m,
                            j[d] = m,
                            Z(m)
                        } catch (k) {
                            H(k)
                        }
                }
                )
            },
            clear: function(d) {
                return new Promise(function(m, b) {
                    if (!d)
                        throw new Error("key is required");
                    F[d] = null,
                    j[d] = null,
                    y.Z.removeStorage({
                        key: _ + d,
                        success: m,
                        fail: b
                    })
                }
                )
            },
            batchUpdate: function() {
                for (var d = Object.keys(j), m = function() {
                    var Z = d.splice(0, 1) || {}
                      , H = j[Z];
                    Z && H && y.Z.setStorage({
                        key: _ + Z,
                        data: JSON.stringify({
                            data: H
                        }),
                        success: function() {
                            j[Z] = null
                        },
                        fail: function(i) {
                            getApp().$exlog.log({
                                error: "H5_EX_JSERROR",
                                msg: {
                                    title: "batchUpdate storage error",
                                    errorMsg: i && i.message
                                }
                            })
                        }
                    })
                }; d && d.length > 0; )
                    m()
            }
        };
        z.Z = Object.freeze(K)
    },
    ZoN6: function(ie, z, a) {
        "use strict";
        a.d(z, {
            JZ: function() {
                return f
            },
            Qr: function() {
                return k
            },
            So: function() {
                return d
            },
            V5: function() {
                return i
            },
            gn: function() {
                return m
            },
            kz: function() {
                return H
            },
            q3: function() {
                return W
            },
            xO: function() {
                return P
            }
        });
        var y = a("cVfI")
          , _ = a("8I0N")
          , F = a("jfEw")
          , j = function(E, g, u) {
            return new Promise(function(c, S) {
                var A = function(w) {
                    try {
                        T(u.next(w))
                    } catch (D) {
                        S(D)
                    }
                }
                  , $ = function(w) {
                    try {
                        T(u.throw(w))
                    } catch (D) {
                        S(D)
                    }
                }
                  , T = function(w) {
                    return w.done ? c(w.value) : Promise.resolve(w.value).then(A, $)
                };
                T((u = u.apply(E, g)).next())
            }
            )
        }
          , K = null;
        function x() {
            return K = K || my.getSystemInfoSync(),
            K
        }
        function d() {
            return new Promise(function(s, E) {
                my.getSystemInfo({
                    success: function(u) {
                        s(u)
                    },
                    fail: function() {
                        E()
                    }
                })
            }
            )
        }
        function m() {
            return j(this, null, (0,
            y.Z)().mark(function s() {
                var E, g, u, c;
                return (0,
                y.Z)().wrap(function(A) {
                    for (; ; )
                        switch (A.prev = A.next) {
                        case 0:
                            return A.next = 2,
                            d().catch(function() {
                                return {}
                            });
                        case 2:
                            return E = A.sent,
                            g = E || {},
                            u = g.platform,
                            c = u === void 0 ? "" : u,
                            A.abrupt("return", Promise.resolve(/ios|iphone os/i.test(c)));
                        case 5:
                        case "end":
                            return A.stop()
                        }
                }, s)
            }))
        }
        function b(s) {
            return j(this, null, (0,
            y.Z)().mark(function E() {
                var g, u;
                return (0,
                y.Z)().wrap(function(S) {
                    for (; ; )
                        switch (S.prev = S.next) {
                        case 0:
                            return S.next = 2,
                            d().catch(function() {
                                return {}
                            });
                        case 2:
                            return g = S.sent,
                            u = "TB|taobao",
                            s && (u += "|LT"),
                            S.abrupt("return", Promise.resolve(new RegExp(u).test(g.app)));
                        case 6:
                        case "end":
                            return S.stop()
                        }
                }, E)
            }))
        }
        function Z() {
            return j(this, null, _regeneratorRuntime().mark(function s() {
                var E;
                return _regeneratorRuntime().wrap(function(u) {
                    for (; ; )
                        switch (u.prev = u.next) {
                        case 0:
                            return u.next = 2,
                            d().catch(function() {
                                return {}
                            });
                        case 2:
                            return E = u.sent,
                            u.abrupt("return", Promise.resolve(/LT/.test(E.app)));
                        case 4:
                        case "end":
                            return u.stop()
                        }
                }, s)
            }))
        }
        function H(s) {
            var E = x() || {}
              , g = E.app
              , u = g === void 0 ? "" : g
              , c = "TB|taobao";
            return s && (c += "|LT"),
            new RegExp(c).test(u)
        }
        function k() {
            var s = x() || {}
              , E = s.app
              , g = E === void 0 ? "" : E;
            return /LT/.test(g)
        }
        function i() {
            var s = x() || {}
              , E = s.app
              , g = E === void 0 ? "" : E;
            return /alipay/.test(g)
        }
        function f(s) {
            var E = /ios|iphone os/i;
            if (s && typeof s == "string")
                return E.test(s);
            var g = x() || {}
              , u = g.platform
              , c = u === void 0 ? "" : u;
            return E.test(c)
        }
        function P() {
            return /qiyema/.test((0,
            F.RO)())
        }
        function W() {
            if (!(0,
            _.N)("ap"))
                return !1;
            var s = x() || {}
              , E = s.system
              , g = !f() && parseFloat(E) >= 13 && (0,
            _.M)("10.3.0") < 0
              , u = !f() && parseFloat(E) >= 12 && (0,
            _.M)("10.2.53") < 0;
            return g || u
        }
        function N() {
            var s = (0,
            _.M)("10.1.98") < 0;
            (0,
            _.N)("ap") && (s || W()) && my.ap && my.ap.updateAlipayClient && my.ap.updateAlipayClient()
        }
        var L = {
            isIOS: m,
            isTaobao: b,
            getSystemInfo: d,
            checkApp4Master: N
        }
    },
    "R/B8": function(ie, z, a) {
        "use strict";
        var y = a("hEvw");
        z.Z = y.Z
    },
    Iu1R: function(ie, z) {
        "use strict";
        var a = {
            srLogkey: "SearchResult",
            srSpmcd: "SearchResult.index-",
            logkey: "Button-Add_Address",
            spmcd: "AddAddress.1",
            addClkLogkey: "click_adressadd",
            addSpmcd: "adressadd.1",
            manageClkLogkey: "click_management",
            manageSpmcd: "management.1",
            seeMoreLogkey: "exposure_Seemoreadress",
            seeMoreSpmcd: "Seemoreadress.1",
            deleteToastLogkey: "exposure_quantitymaximumtoast",
            deleteToastSpmcd: "quantitymaximumtoast.1"
        };
        z.Z = a
    },
    "+/eQ": function(ie, z, a) {
        "use strict";
        a.d(z, {
            sF: function() {
                return D
            },
            Uk: function() {
                return me
            },
            WX: function() {
                return fe
            },
            XX: function() {
                return T
            },
            uy: function() {
                return We
            },
            un: function() {
                return $
            },
            p0: function() {
                return Ie
            },
            zr: function() {
                return Re
            },
            wV: function() {
                return Ee
            },
            D2: function() {
                return w
            },
            Ih: function() {
                return O
            },
            XO: function() {
                return re
            },
            $e: function() {
                return he
            },
            kN: function() {
                return Fe
            }
        });
        var y = a("cVfI")
          , _ = a("byvu")
          , F = a("dPUc")
          , j = Object.defineProperty
          , K = Object.getOwnPropertySymbols
          , x = Object.prototype.hasOwnProperty
          , d = Object.prototype.propertyIsEnumerable
          , m = function(I, M, V) {
            return M in I ? j(I, M, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: V
            }) : I[M] = V
        }
          , b = function(I, M) {
            for (var V in M || (M = {}))
                x.call(M, V) && m(I, V, M[V]);
            if (K) {
                var de = (0,
                _.Z)(K(M)), ge;
                try {
                    for (de.s(); !(ge = de.n()).done; ) {
                        var V = ge.value;
                        d.call(M, V) && m(I, V, M[V])
                    }
                } catch (ye) {
                    de.e(ye)
                } finally {
                    de.f()
                }
            }
            return I
        }
          , Z = function() {
            var oe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return getApp().mtop({
                api: "mtop.alsc.personal.address.numLimit",
                v: "1.0",
                needLogin: !0,
                data: b({}, oe)
            })
        }
          , H = Z
          , k = a("Iu1R")
          , i = a("v+v4")
          , f = Object.defineProperty
          , P = Object.defineProperties
          , W = Object.getOwnPropertyDescriptors
          , N = Object.getOwnPropertySymbols
          , L = Object.prototype.hasOwnProperty
          , s = Object.prototype.propertyIsEnumerable
          , E = function(I, M, V) {
            return M in I ? f(I, M, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: V
            }) : I[M] = V
        }
          , g = function(I, M) {
            for (var V in M || (M = {}))
                L.call(M, V) && E(I, V, M[V]);
            if (N) {
                var de = (0,
                _.Z)(N(M)), ge;
                try {
                    for (de.s(); !(ge = de.n()).done; ) {
                        var V = ge.value;
                        s.call(M, V) && E(I, V, M[V])
                    }
                } catch (ye) {
                    de.e(ye)
                } finally {
                    de.f()
                }
            }
            return I
        }
          , u = function(I, M) {
            return P(I, W(M))
        }
          , c = function(I, M, V) {
            return new Promise(function(de, ge) {
                var ye = function(_e) {
                    try {
                        Ae(V.next(_e))
                    } catch (xe) {
                        ge(xe)
                    }
                }
                  , Le = function(_e) {
                    try {
                        Ae(V.throw(_e))
                    } catch (xe) {
                        ge(xe)
                    }
                }
                  , Ae = function(_e) {
                    return _e.done ? de(_e.value) : Promise.resolve(_e.value).then(ye, Le)
                };
                Ae((V = V.apply(I, M)).next())
            }
            )
        }
          , S = !1;
        function A(oe) {
            var I = getApp().aplus.spm(k.Z.addSpmcd)
              , M = oe || {}
              , V = M.bizType
              , de = M.bizExtInfo
              , ge = M.spm
              , ye = ge === void 0 ? "" : ge;
            return getApp().aplus.clk(k.Z.addClkLogkey, {}, k.Z.addSpmcd),
            getApp().navigate({
                url: "/pages-poi/edit/index?spm=".concat(I, "&spm-pre=").concat(ye),
                params: {
                    bizType: V,
                    bizExtInfo: de
                }
            }),
            0
        }
        var $ = function(I) {
            var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
              , de = g(u(g({
                city: I.city_name,
                cityId: I.city_id,
                districtId: I.district_id,
                geohash: I.st_geohash || I.geohash,
                latitude: I.latitude,
                longitude: I.longitude,
                locationName: I.address,
                address: I.full_address || "",
                addressId: I.id,
                uicAddressId: I.address_id,
                poi_id: I.poi_id,
                poi_name: I.poi_name
            }, {
                address: (I.address || "") + (I.address_detail || ""),
                name: I.address,
                city_id: I.city_id,
                district_id: I.district_id,
                district_adcode: I.district_adcode,
                handSelect: M.address_select_by === "user"
            }), {
                deliveryInfo: I.delivery_info
            }), M)
              , ge = Object.keys(V || {});
            return ge.length && ge.map(function(ye) {
                var Le = V[ye];
                Le !== "null" ? de[ye] = I[Le] : delete de[ye]
            }),
            de
        }
          , T = {
            homePage: "HOME_PAGE",
            homePageSub: "HOME_PAGE_SUB",
            userCenter: "USER_CENTER",
            retailOrder: "RETAIL_SUBMIT_ORDER",
            waimaiOrder: "WAIMAI_SUBMIT_ORDER",
            cartOrder: "CART_SUBMIT_ORDER"
        }
          , O = {
            openOrderAddress: "openOrderAddress",
            homeAddress: "homeAddress"
        }
          , w = function(I) {
            return I === T.retailOrder || I === T.waimaiOrder || I === T.cartOrder
        };
        function D(oe) {
            var I = this
              , M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
            if (S)
                return Promise.reject("hold");
            if (S = !0,
            V && !(0,
            F.default)().authLogin.isLogin()) {
                getApp().aBridge.showToast({
                    content: "\u767B\u5F55\u4E2D\uFF0C\u8BF7\u7A0D\u540E"
                });
                var de = this.selectComponent ? this.selectComponent("#dynamicLogin") : void 0;
                return getApp().account.dynamicLogin(de).then(function() {
                    S = !1,
                    I && I.pageType === O.homeAddress && I.handleUserAddress(),
                    D(oe, M, V)
                }).catch(function(ge) {
                    S = !1,
                    (!ge || ge.code !== "authDynamicLoginClose") && my.showToast({
                        content: "\u767B\u5F55\u5931\u8D25"
                    })
                }),
                Promise.reject("hold")
            }
            return H(M).then(function(ge) {
                S = !1;
                var ye = ge.data
                  , Le = ye.totalCount
                  , Ae = ye.limitNum;
                return Ae === 0 ? A(oe) : Le >= Ae ? Le - Ae + 1 : V ? A(oe) : 0
            }).catch(function() {
                return S = !1,
                V ? A(oe) : 0
            })
        }
        function Q(oe) {
            var I = oe || {}
              , M = I.isInDeliveryArea
              , V = I.overDeliverAmount
              , de = I.moreAgentFee;
            return !!(oe && M && V && !de || !oe)
        }
        function B(oe, I, M) {
            var V = !1;
            return oe === I.toString() && (V = Q(M)),
            V
        }
        function ne(oe, I) {
            if (oe)
                return oe.map(function(M) {
                    var V = M.address, de = V === void 0 ? "" : V, ge = M.address_detail, ye = ge === void 0 ? "" : ge, Le = M.address_status, Ae = M.address_full, J = M.address_id, _e = M.id, xe = M.city_name, Xe = M.city_id, qe = M.district_id, Qe = M.district_adcode, et = M.poi_id, Ve = M.delivery_info, l = M.latitude, v = M.longitude, R = M.st_geohash, C = M.geohash, X = M.address_check_detail_info, q = M.updated_at, ve = M.name, Pe = M.phone, Te = M.show_phone, De = M.tag, ee = M.tag_type, h = M.pre_tag, U = M.sex, G, ue = "", se, be, Ue, we, Ze, Se = [], $e, mt, Ct = B(I, J, Ve), Ye = X || {}, Ge = Ye.checkText, rt = Ye.actionPoint, at = Ye.collectionPoiList, ht = Ye.addressCheckToast, _t = Ye.selectedPoiCheckText, yt = Ye.checkCode;
                    if (Ge && ($e = Ge.title,
                    mt = Ge.titleColor ? "#".concat(Ge.titleColor) : "#ff4b33",
                    be = Ge.title,
                    Ue = Ge.titleColor ? "#".concat(Ge.titleColor) : "#ff4b33"),
                    rt && (we = rt.title,
                    Ze = rt.titleColor ? "#".concat(rt.titleColor) : "#666666"),
                    at && at.length) {
                        Se = at;
                        var Ke;
                        at.some(function(pe) {
                            pe.isSelected && (Q(Ve) ? Ke = _t ? _t[pe.collectionType] : void 0 : pe.isSelected = !1),
                            pe.trackItem = {
                                addressid: J,
                                name1: pe.collectionName,
                                poi_id: pe.poiId
                            }
                        }),
                        Ke && (be = Ke.title,
                        Ue = Ke.titleColor ? "#".concat(Ke.titleColor) : "#ff4b33")
                    }
                    return h && h.name && (G = h.name,
                    ue += h.bgColor ? "background-color:".concat(h.bgColor, ";") : "",
                    ue += h.textColor ? "color:".concat(h.textColor, ";") : ""),
                    se = Le && Le.status === 0 ? "color:#999;" : "",
                    {
                        idx: "".concat(J, "_").concat(q || ""),
                        address: de,
                        address_detail: ye,
                        address_id: J,
                        address_full: Ae,
                        address_status: Le,
                        city_name: xe,
                        city_id: Xe,
                        checked: Ct,
                        district_id: qe,
                        district_adcode: Qe,
                        latitude: l,
                        longitude: v,
                        st_geohash: R,
                        geohash: C,
                        delivery_info: Ve,
                        id: _e,
                        name: ve,
                        phone: Pe,
                        show_phone: Te,
                        tag: De,
                        tag_type: ee,
                        sex: U,
                        poi_id: et,
                        pre_tag_name: G,
                        pre_tag_style: ue,
                        address_unreachable_style: se,
                        show_address_check_text: be,
                        show_address_check_color: Ue,
                        address_check_code: yt,
                        action_point_text: we,
                        action_point_color: Ze,
                        collection_poi_list: Se,
                        address_check_toast: ht,
                        address_check_text_default: $e,
                        address_check_color_default: mt,
                        updated_at: q
                    }
                })
        }
        var fe = function(I, M) {
            var V = I.addressList
              , de = I.undeliverableAddressList
              , ge = I.tipsInfo
              , ye = I.addressSource;
            if (!V && !de)
                return {
                    error: {
                        errorMessage: "ERR_DATA"
                    }
                };
            var Le = Array.isArray(V) && !V.length
              , Ae = Array.isArray(de) && !de.length;
            if (Ae && Le || !de && Le)
                return {
                    addressSource: ye,
                    error: {
                        errorMessage: "NO_ADDRESS"
                    }
                };
            var J = ""
              , _e = "";
            return ge && ge.length && (J = ge[0].title,
            _e = ge[0].titleColor ? "color:#".concat(ge[0].titleColor, ";") : ""),
            {
                addressList: ne(V, M),
                undeliverableAddressList: ne(de),
                tips_info_text: J,
                tips_info_style: _e,
                addressSource: ye
            }
        }
          , Ee = function() {
            var I = "ELEME";
            try {
                window.ebridge.isDINGTALK && (I = "DINGTALK")
            } catch (M) {
                console.error("[H5] getSourceFrom = ", M)
            }
            return I
        }
          , me = {
            CLOSED_AREA_ADDRESS_COMPLEMENT: 1,
            CABINET_ADDRESS_COMPLEMENT: 2,
            TEMPORARY_ADDRESS_COMPLEMENT: 3,
            CABINET_AND_TEMPORARY_COMPLEMENT: 4,
            PHONE_FIRST_USE: 5,
            BIG_POI: 6
        }
          , he = function() {
            getApp().store.setCache("selectedOneProjectAddressPoi", "0")
        }
          , re = function() {
            getApp().store.removeCache("selectedOneProjectAddressPoi")
        }
          , Oe = "ONE_PROJECT_POI"
          , Fe = function(I) {
            i.Z.debug("[E] \u641C\u7D22\u5730\u5740|setSelectedMapAddress", I),
            getApp().store.setCache(Oe, I),
            getApp().storage.setSync(Oe, u(g({}, I), {
                timestamp: +new Date
            }))
        }
          , Re = function() {
            var I = getApp().store.getCache(Oe);
            return I && getApp().store.removeCache(Oe),
            i.Z.debug("[E] \u641C\u7D22\u5730\u5740|getSelectedMapAddress", I),
            I
        }
          , Ie = function(I) {
            var M = I;
            return I.length > 4 && (M = "".concat(I.slice(0, 3), "...")),
            M
        };
        function He() {
            return new Promise(function(oe) {
                my.call("getMapInfo", {
                    success: function(M) {
                        M && M.is3d ? oe(!1) : oe(!0)
                    },
                    fail: function() {
                        oe(!0)
                    }
                })
            }
            )
        }
        function We() {
            return c(this, null, (0,
            y.Z)().mark(function oe() {
                var I;
                return (0,
                y.Z)().wrap(function(V) {
                    for (; ; )
                        switch (V.prev = V.next) {
                        case 0:
                            return V.prev = 0,
                            V.next = 3,
                            He();
                        case 3:
                            return I = V.sent,
                            V.abrupt("return", !I);
                        case 7:
                            return V.prev = 7,
                            V.t0 = V.catch(0),
                            V.abrupt("return", !1);
                        case 10:
                        case "end":
                            return V.stop()
                        }
                }, oe, null, [[0, 7]])
            }))
        }
    },
    Rd4T: function(ie, z) {
        "use strict";
        z.Z = {
            CODE: {
                SEARCH_BAR: "frontend_top_search_bar",
                TOP_MAGNETIC: "frontend_magnetic_1t2_template",
                TOP_MAGNETIC_CDP: "frontend_magnetic_1t2_template_cdp",
                CARNIVAL_THEME: "__frontend_magnetic_1t2_template_theme",
                SALE_BANNER: "frontend_sale_promotion_template",
                MAIN_KINGKONG: "frontend_main_kingkong",
                SCENE_RESTORE: "frontend_notify_bar_message_restore",
                TABS_NEW: "frontend_tab_viewpager_agent_cdp",
                TABS: "frontend_tab_viewpager_agent",
                CHANNEL_AREA_L2R2: "frontend_assemble_channel_template_l2r2",
                FLUTTERING: "frontend_suspension_template",
                SCENE_CARD: "frontend_page_home_scene_card",
                FLEXIBLE_ASSEMBLE: "frontend_flexible_assemble_template",
                FLEXIBLE_SUBSIDY: "frontend_flexible_subsidy_template_v2",
                FLEXIBLE_PRODUCTS: "frontend_flexible_products_template",
                FLEXIBLE_SUPER_VIP: "frontend_flexible_super_vip_card_template",
                SIGN_CARD: "frontend_flexible_sign_card_template",
                SERVICE_REMINDER: "frontend_service_remind_bar",
                ALL_PEOPLE_COUPONS: "miniapp_homepage_scene_card_template",
                HEAVEN_POPUP: "global_multi_coupon_heaven_popup_h5_template",
                MIDDLE_BANNER: "frontend_middle_banner",
                ANNOUNCEMENT: "miniapp_home_page_announcement",
                BAD_WEATHER: "frontend_top_weather_info_template"
            },
            CONFIG_STORAGE_KEY: "DATA_STORAGE_CONFIG",
            VIDEO_STORAGE_KEY: "ELEME_LAUNCH_VIDEO_SHOW_TIMES",
            BRAND_STORAGE_KEY: "BRAND_STORAGE_KEY",
            RECOMMEND_FILTER: "frontend_page_filter_recommend",
            RECOMMEND_EXCLUSIVE: "frontend_page_personal_recommend_card",
            RECOMMEND_SHOP_LIST: "frontend_page_shop_list_recommend",
            NEW_RETAIL_LIST: "frontend_page_newretail_catagory_list_recommend",
            NEW_USER_PAGE: "frontend_arhat_home_v90_alipay_newuser",
            LOST_USER_PAGE: "frontend_arhat_home_page_v90_almost_lost",
            DEFAULT_USER_PAGE: "frontend_arhat_home_page_v90_default",
            ERROR_MAP: {
                LOADING_ERROR: {
                    type: "loadingErrorView",
                    firstBtnClick: "onErrorRefreshPage"
                },
                NETWORK_ERROR: {
                    type: "networkErrorView",
                    firstBtnClick: "onErrorRefreshPage"
                },
                LOCATION_FAILED: {
                    type: "locationErrorView",
                    firstBtnClick: "gotoPoiPage",
                    secondBtnClick: "onErrorRetryLocation"
                },
                LOCATION_FAILED_PERMISSION: {
                    type: "locationErrorPermissionView",
                    firstBtnClick: "gotoPoiPage",
                    secondBtnClick: "onErrorLocationGuide"
                },
                LOCATION_FAILED_UNREACHABLE: {
                    type: "locationErrorUnreachable",
                    secondBtnClick: "gotoPoiPage"
                },
                LIMIT: {
                    type: "throttleError",
                    firstBtnClick: "onErrorRefreshPage"
                },
                NO_SUPPLY: {
                    type: "locationNoStoreView",
                    firstBtnClick: "onRecommendShop"
                }
            }
        }
    },
    s4mU: function(ie, z, a) {
        "use strict";
        var y = a("q1tI")
          , _ = a("i8i4")
          , F = a("IJSt")
          , j = a("0OsG")
          , K = a("TuOl")
          , x = a("UYl2")
          , d = a("MkGs")
          , m = a.n(d)
          , b = a("cVfI")
          , Z = a("zThL")
          , H = a("byvu")
          , k = a("00cV")
          , i = a("3zPr");
        function f(n) {
            return n && typeof n == "function"
        }
        function P(n, e) {
            f(n) && n(e)
        }
        var W = function() {}
          , N = {
            ELEME_NETWORK_ENV: [!0, !1],
            _LOGINED_SESSION_: [!1, !1]
        }
          , L = my.setStorageSync;
        my.setStorageSync = function(n) {
            var e = n || {}
              , t = e.key
              , r = e.data;
            if (t in N) {
                if (N[t][0] && N[t][1])
                    return;
                N[t][1] = !0,
                i.Z.setCache(t, r),
                my.setStorage(n)
            } else
                L(n)
        }
        ;
        var s = my.getStorageSync;
        my.getStorageSync = function(n) {
            if (n in N && N[n][1]) {
                var e = i.Z.getCache(n);
                return e != null ? e : s(n)
            }
            return s(n)
        }
        ;
        var E = my.getStorage;
        my.getStorage = function(n) {
            var e = n || {}
              , t = e.key
              , r = e.success
              , o = e.complete;
            if (t in N) {
                var p = i.Z.getCache(t);
                p ? (P(r, p),
                P(o)) : E(n)
            } else
                E(n)
        }
        ;
        var g = my.removeStorage;
        my.removeStorage = function(n) {
            var e = n || {}
              , t = e.key
              , r = e.success
              , o = e.complete;
            t in N && N[t][1] && (i.Z.removeCache(t),
            P(r),
            P(o)),
            g(n)
        }
        ;
        var u = my.removeStorageSync;
        my.removeStorageSync = function(n) {
            n in N && N[n][1] && i.Z.removeCache(n),
            u(n)
        }
        ;
        var c = a("+XKQ")
          , S = a("GhP9")
          , A = S.I.clk;
        setTimeout(function() {
            getApp().aplus.clk = function(n, e, t, r) {
                getApp().$answer.logClick({
                    arg1: n,
                    extra: e,
                    spm: t
                }),
                A.call(S.I, n, e, t, r)
            }
        }, 0);
        var $ = a("eFvm")
          , T = a("BAlg")
          , O = Object.defineProperty
          , w = Object.getOwnPropertySymbols
          , D = Object.prototype.hasOwnProperty
          , Q = Object.prototype.propertyIsEnumerable
          , B = function(e, t, r) {
            return t in e ? O(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , ne = function(e, t) {
            for (var r in t || (t = {}))
                D.call(t, r) && B(e, r, t[r]);
            if (w) {
                var o = (0,
                H.Z)(w(t)), p;
                try {
                    for (o.s(); !(p = o.n()).done; ) {
                        var r = p.value;
                        Q.call(t, r) && B(e, r, t[r])
                    }
                } catch (Y) {
                    o.e(Y)
                } finally {
                    o.f()
                }
            }
            return e
        }
          , fe = my.switchTab.bind(my);
        my.switchTab = function() {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (console.log("[H5] my.switchTab|before", n),
            n.url) {
                var e = ne(ne({}, T.Z.getQuery(window.location.href)), T.Z.getQuery(n.url));
                n.url = T.Z.appendQueryDic(n.url, e),
                console.log("[H5] my.switchTab|after", n)
            }
            fe(n)
        }
        ;
        var Ee = my.reLaunch.bind(my);
        my.reLaunch = function() {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (console.log("[H5] my.reLaunch|before", n),
            n.url) {
                var e = ne(ne({}, T.Z.getQuery(window.location.href)), T.Z.getQuery(n.url));
                n.url = T.Z.appendQueryDic(n.url, e),
                console.log("[H5] my.reLaunch|after", n)
            }
            Ee(n)
        }
        ;
        var me = a("QbhY")
          , he = a("XIUF")
          , re = a("k6Di")
          , Oe = a("79Ja")
          , Fe = function() {
            function n(e) {
                (0,
                re.Z)(this, n),
                this.pluginName = "RuntimePluginH5ExlogSendPV"
            }
            return (0,
            Oe.Z)(n, [{
                key: "apply",
                value: function(t) {
                    t.appOnLaunch.tap(this.pluginName, function() {
                        getApp().$ele().exlog.sendPV("AppLaunch")
                    }),
                    t.pageOnShow.tap(this.pluginName, function() {
                        getApp().$ele().exlog.sendPV(this.pageNameZH || this.pageName)
                    })
                }
            }]),
            n
        }()
          , Re = a("OzJY")
          , Ie = a("kmpE")
          , He = Object.defineProperty
          , We = Object.defineProperties
          , oe = Object.getOwnPropertyDescriptors
          , I = Object.getOwnPropertySymbols
          , M = Object.prototype.hasOwnProperty
          , V = Object.prototype.propertyIsEnumerable
          , de = function(e, t, r) {
            return t in e ? He(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , ge = function(e, t) {
            for (var r in t || (t = {}))
                M.call(t, r) && de(e, r, t[r]);
            if (I) {
                var o = (0,
                H.Z)(I(t)), p;
                try {
                    for (o.s(); !(p = o.n()).done; ) {
                        var r = p.value;
                        V.call(t, r) && de(e, r, t[r])
                    }
                } catch (Y) {
                    o.e(Y)
                } finally {
                    o.f()
                }
            }
            return e
        }
          , ye = function(e, t) {
            return We(e, oe(t))
        }
          , Le = {
            _getCurrentPageInstance: function() {
                var e = getCurrentPages();
                return e[e.length - 1] || {}
            },
            sendPv: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                  , t = this._getCurrentPageInstance()
                  , r = t || {}
                  , o = r.pageName
                  , p = o === void 0 ? "" : o
                  , Y = r.spmInfo
                  , te = Y === void 0 ? {} : Y
                  , ae = r.route
                  , le = ae === void 0 ? "" : ae
                  , ce = {
                    pageName: p,
                    pageUrl: le
                };
                LTracker.enter(ce, e, ye(ge({}, te), {
                    bizType: "elemeapp"
                }))
            },
            getCache: function() {
                return []
            },
            setCache: function() {},
            custom: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
                  , t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                LTracker.sendGoldlog(e, "OTHER", t, "0.0")
            },
            init: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                LTracker.init(e)
            },
            spm: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                return LTracker.spm(e)
            },
            exp: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
                  , t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
                LTracker.exp(r, t, e)
            },
            clk: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
                  , t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
                LTracker.clk(r, t, e)
            },
            setBaseInfo: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                LTracker.setBaseInfo(e)
            },
            getSpmAB: function() {
                var e = this._getCurrentPageInstance();
                return "".concat(LTracker.spmAPos, ".").concat(e.spmInfo.spmBPos)
            }
        }
          , Ae = Le
          , J = a("dPUc")
          , _e = Object.defineProperty
          , xe = Object.getOwnPropertySymbols
          , Xe = Object.prototype.hasOwnProperty
          , qe = Object.prototype.propertyIsEnumerable
          , Qe = function(e, t, r) {
            return t in e ? _e(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , et = function(e, t) {
            for (var r in t || (t = {}))
                Xe.call(t, r) && Qe(e, r, t[r]);
            if (xe) {
                var o = (0,
                H.Z)(xe(t)), p;
                try {
                    for (o.s(); !(p = o.n()).done; ) {
                        var r = p.value;
                        qe.call(t, r) && Qe(e, r, t[r])
                    }
                } catch (Y) {
                    o.e(Y)
                } finally {
                    o.f()
                }
            }
            return e
        }
          , Ve = {
            bx109507: {
                title: "bx109507",
                spmb: "bx109507",
                path: "pages-payment/result/index"
            },
            Page_AdressSelect: {
                title: "Page_AdressSelect",
                spmb: 21619100,
                path: "pages-poi/address/index"
            },
            Page_CitySelect: {
                title: "Page_CitySelect",
                spmb: 21640179,
                path: "pages-poi/city/index"
            },
            Page_Adressadd: {
                title: "Page_Adressadd",
                spmb: 22529381,
                path: "pages-poi/edit/index"
            },
            Page_Addressedit: {
                title: "Page_Addressedit",
                spmb: 21636228,
                path: "pages-poi/edit/index"
            },
            Page_Confirmaddress: {
                title: "Page_Confirmaddress",
                spmb: 21641461,
                path: "pages-poi/map/index"
            },
            Page_AdressList: {
                title: "Page_AdressList",
                spmb: 21619100,
                path: "pages-poi/list/index"
            },
            Page_LocationManage: {
                title: "Page_AdressSelect",
                spmb: 21619100,
                path: "pages-poi/order/index"
            },
            Page_selfaccesspointerro: {
                title: "Page_selfaccesspointerro",
                spmb: "bx729955",
                path: "pages-poi/report/index"
            }
        }
          , l = et({
            Page_9PersonCenter: {
                title: "Page_9PersonCenter",
                spmb: 14291182,
                path: "pages/my/index"
            },
            Page_Home: {
                title: "Page_Home",
                spmb: 12507204,
                path: "pages/index/index"
            },
            Page_OrderList: {
                title: "Page_OrderList",
                spmb: 11834828,
                path: "pages/order-list/index"
            },
            Page_svip: {
                title: "Page_svip",
                spmb: "",
                path: "pages/svip/index"
            },
            Page_Web_Container: {
                title: "Page_Web_Container",
                spmb: 18152110,
                path: "pages/webview-redirect/webview-redirect"
            },
            Page_Web_Container_Transnavbar: {
                title: "Page_Web_Container_Transnavbar",
                spmb: 18155547,
                path: "pages/webview-redirect-transnavbar/webview-redirect-transnavbar"
            },
            Page_Ele_Product_Detail: {
                title: "Page_Ele_Product_Detail",
                spmb: 20573570,
                path: "pages/ele-product-detail/ele-product-detail"
            },
            Page_Ele_Shop_List: {
                title: "Page_Ele_Shop_List",
                spmb: 20573579,
                path: "pages/ele-shop-list/ele-shop-list"
            },
            Page_Ele_Takeout_Index: {
                title: "Page_Ele_Takeout_Index",
                spmb: 20573586,
                path: "pages/ele-takeout-index/ele-takeout-index"
            },
            Page_Retail_Shop_Detail: {
                title: "Page_Retail_Shop_Detail",
                spmb: 20601673,
                path: "retail-mini-app/pages/shop-detail/shop-detail"
            },
            Page_Eleme_Order_Detail: {
                title: "Page_Eleme_Order_Detail",
                spmb: 20770415,
                path: "pages/eleme-order-detail/eleme-order-detail"
            },
            bx816923: {
                title: "Page_Auth",
                spma: "a2ogi",
                spmb: "bx816923",
                path: "pages/auth/index"
            },
            Page_GreenGoHome: {
                title: "Page_GreenGoHome",
                spma: "a2ogi",
                spmb: "bx850395",
                path: "pages-greengo/index/index"
            },
            Page_GreenGoCoupon: {
                title: "Page_GreenGoCoupon",
                spma: "a2ogi",
                spmb: "bx850619",
                path: "pages-greengo/coupon/index"
            }
        }, Ve)
          , v = function(e) {
            Object.assign(l, e)
        }
          , R = l
          , C = a("mG9a")
          , X = a("04pj")
          , q = a("qgRN")
          , ve = a.n(q)
          , Pe = a("74Mb")
          , Te = a("bvj/")
          , De = Object.defineProperty
          , ee = Object.defineProperties
          , h = Object.getOwnPropertyDescriptors
          , U = Object.getOwnPropertySymbols
          , G = Object.prototype.hasOwnProperty
          , ue = Object.prototype.propertyIsEnumerable
          , se = function(e, t, r) {
            return t in e ? De(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , be = function(e, t) {
            for (var r in t || (t = {}))
                G.call(t, r) && se(e, r, t[r]);
            if (U) {
                var o = _createForOfIteratorHelper(U(t)), p;
                try {
                    for (o.s(); !(p = o.n()).done; ) {
                        var r = p.value;
                        ue.call(t, r) && se(e, r, t[r])
                    }
                } catch (Y) {
                    o.e(Y)
                } finally {
                    o.f()
                }
            }
            return e
        }
          , Ue = function(e, t) {
            return ee(e, h(t))
        }
          , we = function() {
            return new Promise(function(e) {
                my.call("getSecurityBodyWua", {
                    flag: "general"
                }, function(t) {
                    var r = t.generalWua
                      , o = r === void 0 ? "" : r;
                    o ? e({
                        generalWua: o
                    }) : t.error && t.error === 1 ? e({}) : e({})
                })
            }
            )
        }
          , Ze = function() {
            return new Promise(function(e) {
                my.call("getClientInfo", {
                    success: function(r) {
                        e(r)
                    },
                    fail: function() {
                        e({})
                    }
                })
            }
            )
        }
          , Se = function(e) {
            var t = getApp();
            return Promise.all([we(), Ze(), getDeviceId()]).then(function(r) {
                return aFetch({
                    url: "/lego/v3/miniapp/page/home",
                    location: !0,
                    adapter: "elemeFetch",
                    method: "get",
                    env: getApp().env,
                    headers: {
                        wua: r[0].generalWua || "",
                        umidtoken: r[1].umidToken || "",
                        "device-id": r[2]
                    },
                    params: Ue(be({}, e), {
                        asac: "2A20619NVKSZM6MAFNFG6B",
                        specialFrom: t.from,
                        chInfo: t.chInfo,
                        hitItemId: t.hitItemId,
                        restoreId: t.restoreId,
                        alipayId: t.alipayUserid
                    })
                })
            })
        }
          , $e = null
          , mt = "/Alipay_Miniapp_New.Page_ElemeLight_AccountAuth.Exp_PopUp"
          , Ct = "/Alipay_Miniapp_New.Page_ElemeLight_AccountAuth.Failed_Exp_Popup"
          , Ye = "/Alipay_Miniapp_New.Page_ElemeLight_AccountAuth.Clk_Yes"
          , Ge = "/Alipay_Miniapp_New.Page_ElemeLight_AccountAuth.Success_Login"
          , rt = "/Alipay_Miniapp_New.Page_ElemeLight_AccountAuth.Failed_Login"
          , at = "/Alipay_Miniapp_New.Page_ElemeLight_AccountAuth.Clk_No"
          , ht = "auth_base";
        function _t(n) {
            return function(e) {
                var t = e || {}
                  , r = t.scopes;
                if (r !== ht) {
                    var o, p, Y = getApp() || {}, te = Y.aplus;
                    n ? (o = mt,
                    p = "exp.1") : (o = Ct,
                    p = "failed.1"),
                    te && te.exp(o, {
                        mergeExp: !0
                    }, p)
                }
            }
        }
        function yt(n) {
            return function(e) {
                var t = e || {}
                  , r = t.scopes;
                if (r !== ht) {
                    var o, p, Y = getApp() || {}, te = Y.aplus;
                    n ? (o = Ye,
                    p = "clkYes.1") : (o = at,
                    p = "clkNo.1"),
                    te && te.clk(o, {}, p)
                }
            }
        }
        function Ke(n) {
            return function() {
                var e, t, r = getApp(), o = r.aplus;
                n ? (e = Ge,
                t = "loginSuccess.1") : (e = rt,
                t = "loginFailed.1"),
                o && o.exp(e, {
                    mergeExp: !0
                }, t)
            }
        }
        var pe = a("b3YW")
          , Nn = Object.defineProperty
          , Zn = Object.defineProperties
          , Hn = Object.getOwnPropertyDescriptors
          , kt = Object.getOwnPropertySymbols
          , Bn = Object.prototype.hasOwnProperty
          , Fn = Object.prototype.propertyIsEnumerable
          , Qt = function(e, t, r) {
            return t in e ? Nn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , xn = function(e, t) {
            for (var r in t || (t = {}))
                Bn.call(t, r) && Qt(e, r, t[r]);
            if (kt) {
                var o = (0,
                H.Z)(kt(t)), p;
                try {
                    for (o.s(); !(p = o.n()).done; ) {
                        var r = p.value;
                        Fn.call(t, r) && Qt(e, r, t[r])
                    }
                } catch (Y) {
                    o.e(Y)
                } finally {
                    o.f()
                }
            }
            return e
        }
          , $n = function(e, t) {
            return Zn(e, Hn(t))
        }
          , Yt = function(e, t, r) {
            return new Promise(function(o, p) {
                var Y = function(ce) {
                    try {
                        ae(r.next(ce))
                    } catch (Ce) {
                        p(Ce)
                    }
                }
                  , te = function(ce) {
                    try {
                        ae(r.throw(ce))
                    } catch (Ce) {
                        p(Ce)
                    }
                }
                  , ae = function(ce) {
                    return ce.done ? o(ce.value) : Promise.resolve(ce.value).then(Y, te)
                };
                ae((r = r.apply(e, t)).next())
            }
            )
        }
          , jn = function() {
            return Yt(void 0, null, (0,
            b.Z)().mark(function e() {
                var t, r;
                return (0,
                b.Z)().wrap(function(p) {
                    for (; ; )
                        switch (p.prev = p.next) {
                        case 0:
                            return p.next = 2,
                            Ze();
                        case 2:
                            return t = p.sent,
                            r = t.umidToken,
                            p.abrupt("return", r);
                        case 5:
                        case "end":
                            return p.stop()
                        }
                }, e)
            }))
        };
        function Pt(n, e, t, r) {
            pe.vU.rate({
                _ext: e,
                title: "\u997F\u4E86\u4E48\u4E00\u65B9\u767B\u5F55\u6210\u529F\u7387_".concat(n ? "\u591A\u5B9E\u4F8B" : "\u8001havana"),
                errorMsg: t ? t.havanaId : "",
                detail: $n(xn({}, t), {
                    bizParams: r
                })
            })
        }
        var Lt = new (ve())({
            appId: "2021001110676437",
            appName: "eleme",
            appEntrance: "alipay_alsc",
            gateway: "https://ipassport.ele.me",
            pagePath: "/pages/havana/index",
            getAuthCodeExp: _t(!0),
            getAuthCodeSuccess: yt(!0),
            loginSuccess: Ke(!0),
            getUmidToken: jn
        })
          , lt = function(e, t) {
            var r = e || {}
              , o = r.silent
              , p = "auth_user";
            o && (p = "auth_base");
            var Y = {
                needPassWebViewCookie: !1,
                scopes: p
            }
              , te = new Date().valueOf();
            return Lt.login(Y).then(function(ae) {
                var le = new Date().valueOf();
                return getApp().$answer.logKeyEvent({
                    event: "Login Successfully",
                    desc: "Havana\u767B\u5F55\u6210\u529F"
                }),
                getApp().$exlog.log({
                    performance: "H5_EX_CUSTM_PERFORMANCE",
                    msg: {
                        title: "oldHavanaLoginSuccess".concat(o ? "Silent" : ""),
                        costTime: le - te
                    }
                }),
                Pt(!1, "1", ae, r),
                t && (getApp().havanaMultiInstance = !1),
                ae
            }).catch(function(ae) {
                getApp().$answer.logKeyEvent({
                    event: "Login Fail",
                    desc: "Havana\u767B\u5F55\u5931\u8D25"
                }),
                ae && ae.error === 11 && yt(!1)(),
                Ke(!1)();
                var le = new Date().valueOf();
                return getApp().$exlog.log({
                    performance: "H5_EX_CUSTM_PERFORMANCE",
                    msg: {
                        title: "oldHavanaLoginFail".concat(o ? "Silent" : ""),
                        costTime: le - te
                    }
                }),
                Pt(!1, "0", ae, r),
                Promise.reject(ae)
            })
        };
        function Wn() {
            if (Pe.Z.versionCompare("10.1.28") < 0)
                return !1;
            var n = getApp().appBasicConfig || {}
              , e = n.autoLoginUseCache;
            return parseInt(e || "1", 10) === 1
        }
        var Vn = function(e) {
            return Yt(void 0, null, (0,
            b.Z)().mark(function t() {
                var r, o, p, Y, te, ae, le;
                return (0,
                b.Z)().wrap(function(Ce) {
                    for (; ; )
                        switch (Ce.prev = Ce.next) {
                        case 0:
                            return r = e || {},
                            o = r.silent,
                            p = r.useCache,
                            Y = r.from,
                            te = Wn(),
                            ae = !o || !te && Y === "launch" ? !1 : !!p,
                            le = {
                                loginSite: "eleme",
                                loginScene: e.loginScene || "my",
                                domain: ".ele.me",
                                appid: "2021001110676437",
                                quietOauth: o ? "true" : "false",
                                useCache: ae ? "true" : "false"
                            },
                            Ce.abrupt("return", new Promise(function(Ne, wt) {
                                var gt = "aliAutoLoginHavana_".concat(o, "_").concat(ae, "_").concat(Y || "default");
                                pe.vU.performance(gt, "start"),
                                my.call("aliAutoLoginHavana", le, function(nt) {
                                    typeof o == "boolean" && pe.vU.performance(gt, "end"),
                                    console.log("aliAutoLoginHavana", e, nt);
                                    var pt = nt || {}
                                      , It = pt.resultCode
                                      , vt = pt.resultMemo;
                                    if (It === "1000")
                                        return getApp().$answer.logKeyEvent({
                                            event: "Login Successfully",
                                            desc: "\u591A\u5B9E\u4F8B\u767B\u5F55\u6210\u529F"
                                        }),
                                        Ne(nt);
                                    if (!o) {
                                        var Je = vt;
                                        /:/.test(Je) && (Je = Je.split(":")[1]),
                                        Je && Je.length && my.showToast({
                                            content: Je
                                        })
                                    }
                                    return getApp().$answer.logKeyEvent({
                                        event: "Login Fail",
                                        desc: "\u591A\u5B9E\u4F8B\u767B\u5F55\u5931\u8D25"
                                    }),
                                    wt(nt)
                                })
                            }
                            ));
                        case 5:
                        case "end":
                            return Ce.stop()
                        }
                }, t)
            }))
        }
          , Gn = function() {
            var e = getApp().appBasicConfig || {}
              , t = e.havanaBackupGrayValue;
            return parseInt(t || "1", 10) === 1
        }
          , Kn = function(e) {
            return e = e || {},
            Vn(e).then(function(t) {
                console.log("aliAutoLoginHavanaWrapper res", t);
                var r = t || {}
                  , o = r.extParams
                  , p = r.havanaId;
                return getApp().havanaMultiInstance = !0,
                Pt(!0, "1", t, e),
                !e.silent && Gn() && (e.havanaBackUp = !0,
                e.silent = !0,
                lt(e).catch(function() {})),
                {
                    user_id: o && o.localId,
                    havanaId: p
                }
            }).catch(function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return console.log("aliAutoLoginHavanaWrapper err", t),
                Pt(!0, "0", t, e),
                Ke(!1)(),
                /^(1001|1002)$/.test(t.resultCode) ? lt(e) : Promise.reject(t)
            })
        }
          , zn = function(e) {
            return e = e || {},
            getApp().isIDE ? lt(e) : Pe.Z.versionCompare("10.1.98") < 0 ? lt(e, !0) : Kn(e)
        }
          , kn = {
            login: zn,
            havana: Lt,
            oldHavanaLogin: lt
        }
          , Be = a("yhVA")
          , Qn = a("Zaey")
          , ze = a("ZoN6")
          , it = a("JG9U")
          , Tt = a("svpa")
          , Jt = a("mbJN")
          , Me = a("Oisn")
          , Yn = a("6uP8")
          , Dt = a("gqDZ")
          , Jn = a("Rd4T")
          , Xt = a("xqT1");
        function Xn() {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
              , e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
              , t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            pe.vU.custom({
                title: "\u63D2\u4EF6\u65F6\u673A\u4E0A\u62A5",
                detail: {
                    behaviourName: n,
                    bizType: e,
                    extendParams: t
                }
            })
        }
        var qn = Xn, er = a("R/B8"), tr = a("c/JK"), nr = a("zpH5"), rr = a("jfEw"), Mt = a("7Sxm"), qt;
        function Rt(n, e, t) {
            window.parent.postMessage({
                type: "tiga_api",
                name: n,
                params: JSON.stringify(e),
                tigaWebviewId: getApp().tigaWebviewId
            }, qt),
            t && Rt("postMessage", {
                action: "closeWebView"
            })
        }
        function ar() {
            window.addEventListener("message", function(n) {
                var e = n.data
                  , t = n.currentTarget
                  , r = new URL(n.origin);
                if (/\.ele\.me$/.test(r.host) && e.tigaWebviewId) {
                    if (getApp().tigaWebviewId = e.tigaWebviewId,
                    qt = n.origin,
                    t === window)
                        return;
                    Rt("receiveWebviewId", {
                        tigaWebviewId: e.tigaWebviewId
                    })
                }
            })
        }
        var ir = Rt
          , or = function(e, t, r) {
            return new Promise(function(o, p) {
                var Y = function(ce) {
                    try {
                        ae(r.next(ce))
                    } catch (Ce) {
                        p(Ce)
                    }
                }
                  , te = function(ce) {
                    try {
                        ae(r.throw(ce))
                    } catch (Ce) {
                        p(Ce)
                    }
                }
                  , ae = function(ce) {
                    return ce.done ? o(ce.value) : Promise.resolve(ce.value).then(Y, te)
                };
                ae((r = r.apply(e, t)).next())
            }
            )
        }
          , en = "APP_CORE_QUERY";
        function sr(n) {
            var e, t = this;
            return function() {
                return e || (e = n.apply(t, arguments)),
                e
            }
        }
        var tn = sr(function() {
            return Be.Z.get(en)
        });
        function ur() {
            return or(this, null, (0,
            b.Z)().mark(function n() {
                var e, t, r, o, p;
                return (0,
                b.Z)().wrap(function(te) {
                    for (; ; )
                        switch (te.prev = te.next) {
                        case 0:
                            return te.prev = 0,
                            e = getApp().$context.appQuery || {},
                            t = e.from,
                            te.next = 4,
                            tn();
                        case 4:
                            if (te.t0 = te.sent,
                            te.t0) {
                                te.next = 7;
                                break
                            }
                            te.t0 = {};
                        case 7:
                            r = te.t0,
                            o = r.from,
                            t !== o && (p = {
                                from: t || o
                            },
                            Be.Z.set(en, p)),
                            console.log("[H5] store|setAppQueryParams = ", getApp().$context.appQuery),
                            te.next = 16;
                            break;
                        case 13:
                            te.prev = 13,
                            te.t1 = te.catch(0),
                            console.error("[H5] store|setAppQueryParams = ", te.t1);
                        case 16:
                        case "end":
                            return te.stop()
                        }
                }, n, null, [[0, 13]])
            }))
        }
        var Et = {
            setAppQueryParams: ur,
            getAppQueryParams: tn
        }, lr = Object.defineProperty, nn = Object.getOwnPropertySymbols, cr = Object.prototype.hasOwnProperty, dr = Object.prototype.propertyIsEnumerable, rn = function(e, t, r) {
            return t in e ? lr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }, an = function(e, t) {
            for (var r in t || (t = {}))
                cr.call(t, r) && rn(e, r, t[r]);
            if (nn) {
                var o = (0,
                H.Z)(nn(t)), p;
                try {
                    for (o.s(); !(p = o.n()).done; ) {
                        var r = p.value;
                        dr.call(t, r) && rn(e, r, t[r])
                    }
                } catch (Y) {
                    o.e(Y)
                } finally {
                    o.f()
                }
            }
            return e
        }, ke = {
            isDebug: function() {
                return window.location.href.startsWith("https://ppe-h5.ele.me") || window.location.href.startsWith("https://tb-h5.ele.me") || window.location.href.startsWith("https://h5.eleme.test")
            },
            getQueryDebugParams: function(e) {
                var t = T.Z.getQuery(window.location.search) || {}
                  , r = e();
                return t = an(an({}, t), r),
                console.log("[H5] d|URL query params = ", t),
                t
            },
            stringToBoolean: function(e) {
                Object.keys(e).forEach(function(t) {
                    switch (e[t]) {
                    case "true":
                        e[t] = !0;
                        break;
                    case "false":
                        e[t] = !1;
                        break;
                    default:
                        break
                    }
                })
            }
        }, fr = "DLog", Ut = !1, gr = 0, Nt, on = !1, sn = function() {}, pr = console.log, Ea = console.info, vr = console.error, mr = console.warn, hr = function() {
            Zt(arguments),
            pr.apply(console, arguments)
        }, _r = function() {
            Zt(arguments),
            vr.apply(console, arguments)
        }, yr = function() {
            Zt(arguments),
            mr.apply(console, arguments)
        };
        function Pr(n) {
            Ut = n,
            Or()
        }
        var un = ["[answer]"];
        function Er() {
            for (var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = 0; e < n.length; e++) {
                var t = n[e];
                if (t) {
                    if (t.answer || t.$answer)
                        return !0;
                    if (e === 0) {
                        for (var r = 0; r < un.length; r++)
                            if (t.indexOf(un[r]) > -1)
                                return !0
                    }
                }
            }
            return !1
        }
        function Or() {
            on || (on = !0,
            Ut ? (br(),
            console.log("[H5] d|log_report")) : ke.isDebug() || window && window.__eleDebug && window.__eleDebug.isDebugConsole ? console.log("[H5] d|log_debug") : (console.log("[H5] d|log_noop"),
            Ar(),
            console.debug = sn))
        }
        function Zt(n) {
            if (!Er(Array.from(n)))
                return Ut && (getApp && getApp() && getApp().$answer ? ln(n) : setTimeout(function() {
                    ln(n)
                }, 1e3)),
                !1
        }
        function ln(n) {
            try {
                return getApp().$answer.logKeyEvent({
                    event: "".concat(fr, "|").concat(gr++),
                    desc: Sr(n),
                    extra: Array.from(n)
                }),
                Nt && clearTimeout(Nt),
                Nt = setTimeout(function() {
                    getApp().$answer.sendLog()
                }, 1e3),
                !0
            } catch (e) {}
        }
        function Sr(n) {
            for (var e = Array.from(n), t = "", r = 0; r < e.length; r++)
                Object.prototype.toString.call(e[r]) === "[object String]" && (t += "|" + e[r]);
            return t
        }
        function Ar() {
            console.info = console.log = console.warn = console.error = sn
        }
        function br() {
            console.error = _r,
            console.warn = yr,
            console.log = console.info = hr
        }
        var wr = {
            init: Pr
        }, Ir = a("wAJI"), Ht = a.n(Ir), Bt, Ot = 0, cn = 30, Cr = 400, Ft = !1, St = [];
        function Lr() {
            Ot++,
            Bt && clearTimeout(Bt),
            Ot >= cn && (Ft = !0,
            St && St.length > 0 && St.forEach(function(n) {
                return n()
            }),
            Ot = 0,
            Ft = !1),
            Bt = setTimeout(function() {
                Ot = 0
            }, Cr)
        }
        window.document.addEventListener("click", function() {
            Ft || Lr()
        });
        function xt(n, e) {
            e = parseInt(e, 10),
            !isNaN(e) && e > 30 && (cn = e),
            n && St.push(n)
        }
        var Tr = a("lIP5")
          , Dr = function(e, t, r) {
            return new Promise(function(o, p) {
                var Y = function(ce) {
                    try {
                        ae(r.next(ce))
                    } catch (Ce) {
                        p(Ce)
                    }
                }
                  , te = function(ce) {
                    try {
                        ae(r.throw(ce))
                    } catch (Ce) {
                        p(Ce)
                    }
                }
                  , ae = function(ce) {
                    return ce.done ? o(ce.value) : Promise.resolve(ce.value).then(Y, te)
                };
                ae((r = r.apply(e, t)).next())
            }
            )
        }
          , dn = "value"
          , $t = "_$expire"
          , Oa = "__$rlocation";
        function jt(n) {
            var e, t = this;
            return function() {
                return e || (e = n.apply(t, arguments)),
                e
            }
        }
        function Wt(n, e, t) {
            return fn(n, e, t)
        }
        function Sa(n, e, t) {
            return fn(n, e, t, !0)
        }
        function fn(n, e, t) {
            var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
            console.debug("[H5] store|".concat(r ? "setSync" : "set", " "), n, e, t);
            try {
                if (t > 0) {
                    var o;
                    e = (o = {},
                    (0,
                    Z.Z)(o, dn, e),
                    (0,
                    Z.Z)(o, $t, +new Date + t * 1e3),
                    o)
                }
                if (r)
                    Be.Z.setSync(n, e);
                else
                    return Be.Z.set(n, e)
            } catch (p) {
                console.debug("[H5] store|set|failed ", n, e, p)
            }
        }
        function Mr(n, e) {
            return gn(n, e)
        }
        function At(n, e) {
            return gn(n, e, !0)
        }
        function gn(n, e) {
            var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            if (t) {
                var r;
                try {
                    r = Be.Z.getSync(n)
                } catch (o) {
                    console.debug("[H5] store|getSync|failed ", n, o)
                }
                return r = pn(n, {
                    data: r
                }, e),
                console.debug("[H5] store|getSync ", n, r, e),
                r
            }
            return Be.Z.get(n).catch(function() {}).then(function(o) {
                return o = pn(n, {
                    data: o
                }, e),
                console.debug("[H5] store|get ", n, o, e),
                o
            })
        }
        function pn(n, e, t) {
            if (e = e && e.data || t,
            e && (0,
            Tr.Z)(e) === "object" && e[$t]) {
                if (e[$t] < +new Date) {
                    console.debug("[H5] store|expired ", n),
                    vn(n);
                    return
                }
                e = e[dn]
            }
            return e
        }
        function vn(n) {
            try {
                Be.Z.clear(n),
                console.debug("[H5] store|del ", n)
            } catch (e) {
                console.debug("[H5] store|del|failed ", n, e)
            }
        }
        var ot;
        function Rr(n) {}
        function mn() {
            return ot || (ot = At("USER_INFO", {})),
            ot
        }
        function Ur() {
            return Dr(this, null, (0,
            b.Z)().mark(function n() {
                return (0,
                b.Z)().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (ot) {
                                t.next = 4;
                                break
                            }
                            return t.next = 3,
                            Mr("USER_INFO", {});
                        case 3:
                            ot = t.sent;
                        case 4:
                            return t.abrupt("return", ot);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }, n)
            }))
        }
        var hn = jt(function() {
            return At("DEBUG_CONFIG", {})
        }), _n;
        function bt(n) {
            var e = n || {}
              , t = e.debug
              , r = t || {}
              , o = r.status
              , p = o === void 0 ? !1 : o;
            if (!p)
                vn("DEBUG_CONFIG");
            else {
                if (_n == n)
                    return;
                _n = n,
                Wt("DEBUG_CONFIG", n)
            }
        }
        var yn = jt(function() {
            return At("URL_QUERY_PARAMS", {})
        });
        function Nr(n) {
            return Wt("URL_QUERY_PARAMS", n)
        }
        var Vt = jt(function() {
            return At("ALIPAY_DDID", "")
        });
        function Zr(n) {
            Wt("ALIPAY_DDID", n)
        }
        var Aa = {
            setUserInfo: Rr,
            getUserInfo: mn,
            getUserInfoAsync: Ur,
            setDebugConfig: bt,
            getDebugConfig: hn,
            getUrlQueryParams: yn,
            setUrlQueryParams: Nr,
            getDeviceId: Vt,
            setDeviceId: Zr
        }
          , Hr = Object.defineProperty
          , Br = Object.defineProperties
          , Fr = Object.getOwnPropertyDescriptors
          , Pn = Object.getOwnPropertySymbols
          , xr = Object.prototype.hasOwnProperty
          , $r = Object.prototype.propertyIsEnumerable
          , En = function(e, t, r) {
            return t in e ? Hr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , On = function(e, t) {
            for (var r in t || (t = {}))
                xr.call(t, r) && En(e, r, t[r]);
            if (Pn) {
                var o = (0,
                H.Z)(Pn(t)), p;
                try {
                    for (o.s(); !(p = o.n()).done; ) {
                        var r = p.value;
                        $r.call(t, r) && En(e, r, t[r])
                    }
                } catch (Y) {
                    o.e(Y)
                } finally {
                    o.f()
                }
            }
            return e
        }
          , jr = function(e, t) {
            return Br(e, Fr(t))
        };
        window.__eleDebug = window.__eleDebug || {},
        window.__eleDebug.setDebugConfig = bt;
        var ct = !1, Gt, dt = "__rd";
        (function() {
            my.request({
                url: "https://shadow.elemecdn.com/crayfish/ppe-h5.ele.me/h5-debug-pre-orderdetail-config",
                method: "GET",
                success: function(t) {
                    try {
                        var r = t || {}
                          , o = r.data;
                        o && o.debug ? (window.__eleDebug = window.__eleDebug || {},
                        window.__eleDebug.debugConfig = o,
                        bt(o)) : window.localStorage.removeItem("TiGa-ELEME_DEBUG_CONFIG")
                    } catch (p) {
                        console.error("[H5] loadConfigFromCDN error = ", p)
                    }
                }
            })
        }
        )();
        function tt() {
            window.__eleDebug.debugConfig && bt(window.__eleDebug.debugConfig);
            var n = hn() || {};
            return n.debug || {}
        }
        function Wr() {
            var n = tt()
              , e = n.scripts;
            try {} catch (t) {
                console.error("[H5] scripts fail", t)
            }
        }
        function Vr() {
            var n = tt(), e = n.redirect, t = n.redirectTimeout, r = t === void 0 ? 1e3 : t, o = n.searchQuery, p = o === void 0 ? {} : o, Y;
            if (e && e.from && e.to && window.location.href.indexOf(e.from) !== -1 && e.to !== window.location.href && window.location.href.indexOf(dt) === -1 && !ke.isDebug()) {
                var te = T.Z.getQuery(window.location.href)
                  , ae = T.Z.getQuery(e.to);
                Y = T.Z.appendQueryDic(e.to, jr(On(On({}, te), ae), (0,
                Z.Z)({}, dt, 1)))
            }
            p && Object.keys(p).length > 0 && window.location.href.indexOf(dt) === -1 && !ke.isDebug() && (Y = Y || window.location.href,
            p[dt] = 1,
            Y = T.Z.appendQueryDic(Y, p)),
            Y && window.location.href.indexOf(dt) === -1 && Ht().getSafeURL(Y) && !ke.isDebug() && (Gt && clearTimeout(Gt),
            Gt = setTimeout(function() {
                console.log("[H5] d|redirect = ", Y),
                window.location.replace(Ht().getSafeURL(Y))
            }, r))
        }
        function Gr() {
            var n = tt()
              , e = n.vconsole
              , t = e === void 0 ? !1 : e;
            if (t && !window.VConsole) {
                var r = document.createElement("script");
                r.setAttribute("name", "vconsole.min.js"),
                r.src = "https://unpkg.com/vconsole@latest/dist/vconsole.min.js",
                r.onload = function() {
                    window._vConsoleInstance = new window.VConsole
                }
                ,
                document.body.appendChild(r)
            }
        }
        function Kr() {
            var n = tt()
              , e = n.eruda
              , t = e === void 0 ? !1 : e;
            if (t && !window.eruda) {
                var r = document.createElement("script");
                r.setAttribute("name", "eruda.min.js"),
                r.src = "https://cdn.bootcdn.net/ajax/libs/eruda/2.4.1/eruda.min.js",
                r.onload = function() {
                    window.eruda.init()
                }
                ,
                document.body.appendChild(r)
            }
        }
        function zr() {
            var n = tt()
              , e = n.console
              , t = e === void 0 ? !1 : e;
            t && (window.__eleDebug.isDebugConsole = t)
        }
        function Sn() {
            return {
                __Dreport: !!(ct && tt().report)
            }
        }
        function kr(n) {
            return n.split(".").reduce(function(e, t, r) {
                return r === 0 && t === "$ele()" ? (0,
                J.default)() : r === 0 ? window : e && e[t]
            }, {})
        }
        function st(n) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
              , t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ""
              , r = !1;
            return e && t && (!n || n === "equal" ? r = e === t : n === "contain" && (r = typeof t == "string" && typeof e == "string" && t.indexOf(e) !== -1)),
            r
        }
        function Qr(n) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
              , t = arguments.length > 2 ? arguments[2] : void 0
              , r = !1;
            if (n === "property") {
                var o = kr(e);
                r = t === o
            }
            return r
        }
        function Yr() {
            var n = "DeviceId: ".concat(Vt());
            console.warn("[H5] ", n)
        }
        function An(n) {
            var e = n || {}
              , t = e.triggerType
              , r = t === void 0 ? "or" : t
              , o = e.trigger
              , p = o === void 0 ? [] : o
              , Y = !1;
            if (ke.isDebug())
                return !0;
            try {
                var te = r === "or" ? p.some : p.every;
                Y = te.call(p, function(ae) {
                    var le = ae.matchType
                      , ce = ae.userId
                      , Ce = ae.deviceId
                      , Ne = ae.from
                      , wt = ae.userAgent
                      , gt = ae.h5Version
                      , nt = ae.triggerType
                      , pt = nt === void 0 ? "or" : nt
                      , It = ae.trigger
                      , vt = It === void 0 ? [] : It
                      , Je = ae.key
                      , ga = ae.value;
                    if (ce) {
                        var Un = mn() || {}
                          , pa = Un.user_id
                          , va = Un.havana_id;
                        return st(le, ce, pa) || st(le, ce, va)
                    }
                    if (Ne) {
                        var ma = yn() || {}
                          , ha = ma.from;
                        return st(le, Ne, ha)
                    }
                    if (Ce) {
                        var _a = Vt() || "";
                        return st(le, Ce, _a)
                    }
                    if (wt) {
                        var ya = window.navigator.userAgent || "";
                        return st(le, wt, ya)
                    }
                    if (gt) {
                        var Pa = "".concat(Me.version, "-").concat(Me.build_num);
                        return st(le, gt, Pa)
                    }
                    return pt && vt && vt.length > 0 ? An({
                        triggerType: pt,
                        trigger: vt
                    }) : Qr(le, Je, ga)
                })
            } catch (ae) {
                console.error("[H5] d|fail ", ae)
            }
            return Y
        }
        function Jr() {
            var n = tt()
              , e = n.status
              , t = e === void 0 ? !1 : e
              , r = n.clickCount
              , o = n.triggerType
              , p = n.trigger;
            return t && (ct = An({
                triggerType: o,
                trigger: p
            })),
            console.log("[H5] d|D = ", ct),
            ct && (setTimeout(function() {
                (0,
                J.default)().exlog.jserror("needDebug")
            }, 2e3),
            Ht().addSingleURLToWhitelist("ele.me"),
            zr(),
            xt(Gr, r),
            xt(Kr),
            xt(Yr),
            Sn(),
            Vr(),
            Wr()),
            ct
        }
        try {
            Jr()
        } catch (n) {
            console.error("[H5] d|init ", n),
            (0,
            J.default)().exlog.jserror("needDebug", "fail", n)
        }
        var Xr = Object.defineProperty, bn = Object.getOwnPropertySymbols, qr = Object.prototype.hasOwnProperty, ea = Object.prototype.propertyIsEnumerable, wn = function(e, t, r) {
            return t in e ? Xr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }, Kt = function(e, t) {
            for (var r in t || (t = {}))
                qr.call(t, r) && wn(e, r, t[r]);
            if (bn) {
                var o = (0,
                H.Z)(bn(t)), p;
                try {
                    for (o.s(); !(p = o.n()).done; ) {
                        var r = p.value;
                        ea.call(t, r) && wn(e, r, t[r])
                    }
                } catch (Y) {
                    o.e(Y)
                } finally {
                    o.f()
                }
            }
            return e
        }, ta, je = ke.getQueryDebugParams(Sn);
        window.__eleDebug = window.__eleDebug || {};
        function na(n) {
            je = Kt(Kt(Kt({}, ta || {}), je || {}), n || {}),
            ke.stringToBoolean(je)
        }
        function In() {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            na(n),
            window.__eleDebug.env = je.env,
            window.__eleDebug.pizzaEnv = je.syncPizzaEnv && je.env,
            window.__eleDebug.report = je.__Dreport,
            ke.isDebug() && (window.__eleDebug.mockData = je.mockData,
            window.__eleDebug.isEruda = je.isEruda,
            window.__eleDebug.vConsole = je.vConsole,
            window.__eleDebug.apiWhiteList = [],
            window.__eleDebug.apiWhiteList.env = "online",
            window.__eleDebug.mockDataWhiteList = []),
            wr.init(window.__eleDebug.report),
            ke.isDebug() && my.showToast({
                content: "Version: ".concat(Me.version, "-").concat(Me.build_num)
            })
        }
        function ra() {
            return je || {}
        }
        function aa(n) {
            try {
                In(n)
            } catch (e) {
                console.error("[H5] d init error = ", e)
            }
        }
        function ia(n) {
            aa(n)
        }
        In();
        var ba = {
            getDebugParams: ra,
            setDebugParams: ia
        }
          , oa = Object.defineProperty
          , sa = Object.defineProperties
          , ua = Object.getOwnPropertyDescriptors
          , Cn = Object.getOwnPropertySymbols
          , la = Object.prototype.hasOwnProperty
          , ca = Object.prototype.propertyIsEnumerable
          , Ln = function(e, t, r) {
            return t in e ? oa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , zt = function(e, t) {
            for (var r in t || (t = {}))
                la.call(t, r) && Ln(e, r, t[r]);
            if (Cn) {
                var o = (0,
                H.Z)(Cn(t)), p;
                try {
                    for (o.s(); !(p = o.n()).done; ) {
                        var r = p.value;
                        ca.call(t, r) && Ln(e, r, t[r])
                    }
                } catch (Y) {
                    o.e(Y)
                } finally {
                    o.f()
                }
            }
            return e
        }
          , da = function(e, t) {
            return sa(e, ua(t))
        }
          , Tn = function(e, t, r) {
            return new Promise(function(o, p) {
                var Y = function(ce) {
                    try {
                        ae(r.next(ce))
                    } catch (Ce) {
                        p(Ce)
                    }
                }
                  , te = function(ce) {
                    try {
                        ae(r.throw(ce))
                    } catch (Ce) {
                        p(Ce)
                    }
                }
                  , ae = function(ce) {
                    return ce.done ? o(ce.value) : Promise.resolve(ce.value).then(Y, te)
                };
                ae((r = r.apply(e, t)).next())
            }
            )
        };
        console.log("aApp");
        var Dn = Jn.Z.CONFIG_STORAGE_KEY, fa = Dn === void 0 ? "" : Dn, Mn = !1, ut, ft;
        (0,
        me.aApp)({
            $ele: J.default,
            isQiyema: ze.xO,
            aplus: Ae,
            adLog: window.LTracker.adLog,
            aBridge: Pe.Z,
            store: i.Z,
            storage: Be.Z,
            env: "online",
            exTool: pe.vU,
            aFetch: Te.Z,
            aLocation: it.Z,
            navigate: Tt.Z,
            geohash: pe.XM,
            mtop: Mt.Z,
            postParentWebview: ir,
            onLaunch: function(e) {
                var t = this;
                console.log("[E] App|onLaunch ", Me),
                this.account = (0,
                J.default)().authLogin,
                this.getQuery(e),
                this.shouldDisableTabbar(),
                this.$sceneCardSloganCondition = {},
                this.getIndexCacheData(),
                ar(),
                this.$ele().authLogin.logoutCheckOnLaunch(),
                Ae.init({
                    app: "alipay",
                    bizType: "elemeapp",
                    version: Me.version || "unknow",
                    pageConfig: R,
                    spma: "a2f6g",
                    from: this.from,
                    scene: e.scene,
                    siteName: "Alipay_Miniapp_New",
                    getOriginalData: X.mQ,
                    getDeviceId: X.Zw
                }),
                (0,
                ze.So)().then(function(o) {
                    Ae.setBaseInfo(o),
                    Ae.setBaseInfo({
                        exParams: {
                            miniapp_version: Me.version,
                            miniapp_id: Me.app_id
                        }
                    })
                }),
                this.initApp(),
                setTimeout(function() {
                    Be.Z.batchUpdate()
                }, 1e4),
                (0,
                J.default)().systemInfo = my.getSystemInfoSync();
                var r = (0,
                Qn.Z)();
                (0,
                J.default)().init({
                    aLocation: it.Z,
                    aplus: Ae,
                    adLog: window.LTracker.adLog,
                    isDebug: this.env !== "online",
                    event: (0,
                    J.default)().authLogin.event,
                    answer: this.$answer,
                    jarvisProvider: this.$jarvis,
                    indexPluginEntry: {},
                    behaviour: {
                        emitBehaviourToHost: qn
                    },
                    utils: (0,
                    Z.Z)({
                        urlParse: pe.jq,
                        hashToUrl: pe.rt,
                        getSubChannel: rr.RO,
                        isQiyema: ze.xO,
                        $hostMtop: Mt.Z,
                        platform: {
                            IS_H5_ENV: !0
                        },
                        hostMtop: function(o) {
                            function p(Y, te) {
                                return o.apply(this, arguments)
                            }
                            return p.toString = function() {
                                return o.toString()
                            }
                            ,
                            p
                        }(function(o, p) {
                            return pe.vU.custom({
                                title: "\u5BBF\u4E3B\u63D2\u4EF6HostMtop\u8C03\u7528",
                                detail: {
                                    opt: o,
                                    extendParams: p
                                }
                            }),
                            hostMtop(o, p)
                        }),
                        hostMtopRequest: Mt.Z,
                        navigate: r.navigate,
                        getLocation: r.getLocation,
                        getSelectedAddress: r.getSelectedAddress,
                        validHostAddress: function() {
                            return !(t.appBasicConfig && t.appBasicConfig.addressClose)
                        },
                        getSavedOpenUicAddressId: function() {
                            return i.Z.getCache("oneProjectSavedOpenUicAddressId")
                        },
                        getCollectionPoiReportedResultOnce: function() {
                            var p = "oneProjectCollectionPoiReported"
                              , Y = !!i.Z.getCache(p);
                            return i.Z.removeCache(p),
                            Y
                        },
                        getEventEmitter: function() {
                            return t.$event
                        },
                        setLocation: function(p) {
                            return it.Z.setLocation(p)
                        },
                        goToLocationPage: function() {
                            return it.Z.goToLocationPage()
                        },
                        navigateInsideWeb: function(p) {
                            return (0,
                            Tt.Z)({
                                url: p.targetUrl,
                                trackParams: p.spm,
                                params: p.params,
                                navType: p.navType
                            })
                        },
                        redirect: function(p) {
                            return (0,
                            Tt.Z)({
                                url: p.targetUrl,
                                trackParams: p.spm,
                                params: p.params,
                                redirect: !0,
                                forceKinghome: !!p.reloadWebview,
                                navType: p.navType
                            })
                        },
                        LTracker: window.LTracker,
                        getLocationWithCache: function() {
                            return i.Z.Location()
                        },
                        getDeviceId: X.Zw,
                        getShopPreRenderData: Xt.t$,
                        getShopSnapshotInfo: Xt.LP,
                        isMemoryWarning: r.isMemoryWarning
                    }, "goToLocationPage", it.Z.openHomeAddressPage),
                    appInfo: zt(zt({
                        appId: Me.app_id
                    }, Me), r.appInfo),
                    authLogin: da(zt({}, (0,
                    J.default)().authLogin), {
                        getUserIdPromise: function() {
                            return (0,
                            J.default)().authLogin.getUserId()
                        },
                        authThenLogin: r.authLogin.authThenLogin,
                        getUserId: r.authLogin.getUserId,
                        isLogin: r.authLogin.isLogin
                    })
                }, {}),
                (0,
                J.default)().havana = Lt,
                (0,
                J.default)().jarvisTestMap = {
                    "/pages/ele-shop-list/ele-shop-list": {
                        codes: ["kinghome_plugins_echannel_new"]
                    },
                    "/pages/ele-evaluate-order/ele-evaluate-order": {
                        codes: ["kinghome_plugins_evaluate"]
                    },
                    "/pages/ele-takeout-index/ele-takeout-index": {
                        codes: ["kinghome_miniapp_plugin_2_1"]
                    },
                    "/pages/eleme-order-detail/eleme-order-detail": {
                        codes: ["kinghome_miniapp_plugin_2_1"]
                    },
                    "/pages/ele-order-detail-tb/ele-order-detail-tb": {
                        codes: ["kinghome_miniapp_plugin_2_1"]
                    },
                    "/retail-mini-app/pages/shop-detail/shop-detail": {
                        codes: ["retailPlugin", "taobao_miniapp_newretail_plugin"],
                        replaceUrl: function(p) {
                            return p.replace("/retail-mini-app/pages/shop-detail/shop-detail", "/shop-detail")
                        }
                    },
                    "/newretail-miniapp-checkout/pages/order-detail/index": {
                        codes: ["retailPlugin", "taobao_miniapp_newretail_plugin"],
                        replaceUrl: function(p) {
                            return p.replace("/newretail-miniapp-checkout/pages/order-detail/index", "/order-detail")
                        }
                    }
                },
                (0,
                J.default)().jarvisFactory = Yn.Z,
                (0,
                J.default)().serviceModal = {
                    config: {
                        shouldShowRedPoint: !1,
                        duration: 0,
                        expires: Date.now() + 0,
                        openUrl: ""
                    },
                    shouldDisplayServiceModal: Dt.Z.shouldDisplayServiceModal,
                    resetServiceModalConfig: Dt.Z.initSeviceModalConfig,
                    toggleSyncChannel: Dt.Z.toggleSyncChannel
                },
                (0,
                J.default)().exlog.init({
                    isDebug: !1,
                    tag: "m",
                    appid: "m".concat(Me.app_id),
                    biz: "a2f6g.12507204",
                    biz_version: "".concat(Me.version, "-").concat(Me.build_num),
                    getFrom: function() {
                        return Tn(t, null, (0,
                        b.Z)().mark(function p() {
                            var Y, te;
                            return (0,
                            b.Z)().wrap(function(le) {
                                for (; ; )
                                    switch (le.prev = le.next) {
                                    case 0:
                                        if (Y = this.from || "",
                                        !(!Y && Et)) {
                                            le.next = 9;
                                            break
                                        }
                                        return le.next = 4,
                                        Et.getAppQueryParams().catch(function() {});
                                    case 4:
                                        if (le.t0 = le.sent,
                                        le.t0) {
                                            le.next = 7;
                                            break
                                        }
                                        le.t0 = {};
                                    case 7:
                                        te = le.t0,
                                        Y = te.from;
                                    case 9:
                                        return le.abrupt("return", Y);
                                    case 10:
                                    case "end":
                                        return le.stop()
                                    }
                            }, p, this)
                        }))
                    },
                    getUserId: function() {
                        return Tn(t, null, (0,
                        b.Z)().mark(function p() {
                            var Y, te, ae, le, ce;
                            return (0,
                            b.Z)().wrap(function(Ne) {
                                for (; ; )
                                    switch (Ne.prev = Ne.next) {
                                    case 0:
                                        return Ne.next = 2,
                                        (0,
                                        X.me)().catch(function() {});
                                    case 2:
                                        if (Ne.t0 = Ne.sent,
                                        Ne.t0) {
                                            Ne.next = 5;
                                            break
                                        }
                                        Ne.t0 = {};
                                    case 5:
                                        return ae = Ne.t0,
                                        le = ae.user_id,
                                        ce = ae.havana_id,
                                        Ne.abrupt("return", le || ce || ((te = (Y = (0,
                                        J.default)().utils).getDefaultUID) == null ? void 0 : te.call(Y)) || "123456789");
                                    case 9:
                                    case "end":
                                        return Ne.stop()
                                    }
                            }, p)
                        }))
                    },
                    getUTDID: X.Zw
                }),
                this.greenGoConfig(),
                Be.Z.set("version", Me, !0),
                (0,
                J.default)().authLogin.refreshUserId4H5(),
                console.debug("AppOnLaunch $ele = ", (0,
                J.default)()),
                console.debug("AppOnLaunch getApp = ", this)
            },
            getIndexCacheData: function() {
                var e = this;
                Be.Z.get(fa).then(function(t) {
                    e.$indexConfigCache = t,
                    e.$event.emit("events:index_config_cache_ready")
                })
            },
            shouldDisableTabbar: function() {
                var e = this.query || {}
                  , t = e.disableTabbar
                  , r = t === void 0 ? "" : t;
                if (r === "true") {
                    var o = document.querySelector("tiga-tabbar");
                    o && o.style && (o.style.display = "none")
                }
            },
            initApp: function() {
                var e = this;
                return Promise.all([this.doLogin(), this.getNetworkType(), this.getLocation()]).then(function() {
                    console.log("[E] emit app ready"),
                    e.$isAppReady = !0,
                    e.$event.emit("events:app_reday")
                }).catch(function(t) {
                    console.log("[E] emit app ready err", t),
                    e.$isAppReady = !0,
                    e.$event.emit("events:app_reday")
                })
            },
            initJarvis: function() {
                jarvis.init({}, J.default),
                jarvis.getConfig({
                    useCache: !1
                }).then(function(e) {
                    console.log("jarvisInstance \u8FD4\u56DE\u6240\u6709\u5B9E\u9A8C\u6570\u636E", e)
                }),
                this.$jarvis = jarvis
            },
            onShow: function(e) {
                Mn && this.getQuery(e),
                Mn = !0
            },
            getAlipayUserid: function() {
                var e = this;
                my.call("getUserInfo", {
                    success: function(r) {
                        e.alipayUserid = r.userId
                    }
                })
            },
            getNetworkType: function() {
                var e = this;
                return pe.vU.performance("appLaunchGetNetworkType", "start"),
                Pe.Z.getNetworkType().then(function(t) {
                    return t.networkAvailable && (e.appNetworkSuccess = !0),
                    pe.vU.performance("appLaunchGetNetworkType", "end"),
                    t
                }).catch(function() {
                    pe.vU.performance("appLaunchGetNetworkType", "end")
                })
            },
            getLocation: function() {
                var e = this;
                return pe.vU.performance("appLaunchGetLocation", "start"),
                it.Z.getSystemLocation("launch").then(function(t) {
                    t.highAccuracyClosed && (e.appHighAccuracyClosed = !0),
                    e.appLocationSuccess = !0,
                    pe.vU.performance("appLaunchGetLocation", "end"),
                    e.appLog("lbs", {
                        lbsInfo: t
                    })
                }).catch(function(t) {
                    pe.vU.performance("appLaunchGetLocation", "end"),
                    e.appLocationError = t,
                    e.appLog("lbs")
                })
            },
            doLogin: function(e) {
                var t = this;
                if (console.log("[H5] app|doLogin"),
                !this.firstLogin)
                    return this.firstLogin = !0,
                    pe.vU.performance("appLaunchDoLogin", "start"),
                    (0,
                    J.default)().authLogin.login(!0, e).catch(function(r) {
                        t.$event.emit("appHavanaLoginFailed"),
                        console.log("[H5] havana\u767B\u5F55\u5931\u8D25", r)
                    }).then(function() {
                        pe.vU.performance("appLaunchDoLogin", "end"),
                        t.appHavanaLoginComplete = !0,
                        t.$event.emit("appHavanaLoginComplete")
                    })
            },
            appLog: function(e, t) {
                var r = t || {}
                  , o = r.userInfo
                  , p = r.lbsInfo;
                ut || (ut = p),
                ft || (ft = o);
                var Y = ft && ft.user_id
                  , te = ut && ut.latitude
                  , ae = ut && ut.longitude;
                Ae.custom("LBS_Mark", {
                    login: ft ? 1 : 0,
                    latitude: te,
                    longitude: ae,
                    uid: Y,
                    pid: this.alipayUserid,
                    action: e
                })
            },
            getQuery: function(e) {
                var t = this;
                e = e || {};
                var r = e.query || {};
                this.query = r || {},
                this.getFromLocation(r),
                this.firstPageIsWebview = /webview-redirect/.test(e.path),
                this.firstPageIsHomePage = new RegExp(Jt.pages[0]).test(e.path),
                this.from = r.ut_from || r.from,
                Object.keys(C.aV).map(function(o) {
                    var p = C.aV[o];
                    p === "corpId" ? t[o] = r.corpId || r.corpid : t[o] = r[p],
                    p === "from" && !t[o] && (t[o] = "mobile.default")
                }),
                this.sub_channel = r.sub_channel || "miniapp.alipay",
                this.scene = e.scene,
                this.homeUndertakeParams = r.homeUndertakeParams,
                this.needAddToHomeCpt = r.needAddToHomeCpt,
                this.qiyemaVersion = r.qiyemaVersion,
                r.env && (this.env = r.env),
                Et.setAppQueryParams()
            },
            getFromLocation: function(e) {
                var t = e || {}
                  , r = t.latitude
                  , o = t.longitude
                  , p = t.address
                  , Y = t.cityCode
                  , te = t.name;
                r && o && (this.fromLocation = {
                    latitude: r,
                    longitude: o,
                    address: p,
                    cityCode: Y,
                    locationName: te,
                    needReverse: !0
                },
                this.fromLocationStable = {
                    latitude: r,
                    longitude: o,
                    address: p,
                    cityCode: Y,
                    locationName: te,
                    needReverse: !0
                },
                console.log("[H5][Location] app|fromLocation", this.fromLocation),
                i.Z.setLocation(this.fromLocation))
            },
            handleMemoryWarning: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                  , t = "iOS_MEMORY_LOW";
                if (e.level)
                    switch (e.level) {
                    case 10:
                        t = "ANDROID_TRIM_MEMORY_RUNNING_LOW";
                        break;
                    case 15:
                        t = "ANDROID_TRIM_MEMORY_RUNNING_CRITICAL";
                        break;
                    default:
                        t = "UNKONW"
                    }
                this.appMemoryWarningCount++,
                e && (e.appMemoryWarningCount = this.appMemoryWarningCount),
                pe.vU.custom({
                    title: "\u5C0F\u7A0B\u5E8F\u4F4E\u5185\u5B58\u544A\u8B66",
                    errorMsg: t,
                    detail: e
                })
            },
            greenGoConfig: function() {
                var e = this;
                if (this.from === "mobile.greenbuy") {
                    console.log("[H5][\u7EFF\u8272\u8D2D] \u521D\u59CB\u5316\u914D\u7F6E\u903B\u8F91", this.query),
                    (0,
                    J.default)().h5 = (0,
                    J.default)().h5 || {},
                    Object.keys((0,
                    J.default)()).map(function(t) {
                        t !== "h5" && ((0,
                        J.default)().h5[t] = (0,
                        J.default)()[t])
                    }),
                    Object.keys(C.aV).map(function(t) {
                        (0,
                        J.default)().h5[C.aV[t]] = e[t]
                    }),
                    console.log("[H5][\u7EFF\u8272\u8D2D] \u4F01\u4E1AId|corpId", (0,
                    J.default)().h5.corpId),
                    (0,
                    J.default)().h5.from && (0,
                    J.default)().h5.corpId && ((0,
                    J.default)().h5.thirdChannel = "".concat((0,
                    J.default)().h5.from, ".").concat((0,
                    J.default)().h5.corpId),
                    console.log("[H5][\u7EFF\u8272\u8D2D] \u4E09\u7EA7\u6E20\u9053", (0,
                    J.default)().h5.thirdChannel)),
                    (0,
                    J.default)().h5.setCorpId = function(t) {
                        t && ((0,
                        J.default)().h5.corpId = t,
                        (0,
                        J.default)().h5.thirdChannel = "".concat((0,
                        J.default)().h5.from || "mobile.default", ".").concat((0,
                        J.default)().h5.corpId),
                        console.log("[H5][\u7EFF\u8272\u8D2D] \u66F4\u65B0\u4F01\u4E1Aid", (0,
                        J.default)().h5.thirdChannel))
                    }
                    ,
                    (0,
                    J.default)().h5.$event = this.$event,
                    (0,
                    J.default)().h5.store = i.Z,
                    (0,
                    J.default)().h5.utils.getSystemInfo = ze.So;
                    try {
                        window.ebridge.isELMC && setTimeout(function() {
                            my.hideTabBar()
                        }, 0)
                    } catch (t) {
                        console.error(t)
                    }
                    try {
                        this.query && Pe.Z.setStorage({
                            key: "ELEME_URL_QUERY_PARAMS",
                            data: this.query,
                            success: function(r) {},
                            fail: function() {}
                        })
                    } catch (t) {
                        console.error("[H5] app|ELEME_URL_QUERY_PARAMS", t)
                    }
                    setTimeout(function() {
                        e.doLogin()
                    }, 0)
                }
            }
        }, [(0,
        he.Z)({
            navigate: {
                hostUtils: {
                    geohash: pe.XM,
                    urlParse: pe.jq,
                    querystringify: pe.$F,
                    getcurrentPageItem: pe.im,
                    getPluginRequireName: pe.Q2,
                    exTool: pe.vU,
                    isMorPlugin: pe.qR,
                    getMorPluginScheme: pe.vc,
                    isTabPage: pe.Cf,
                    isAlipaySync: ze.V5,
                    store: i.Z,
                    versionInfo: Me,
                    getSystemInfo: ze.So
                },
                hostBizFns: {}
            },
            authLogin: {
                appId: Jt.appId,
                isTaobaoSync: ze.kz,
                user: nr.Z,
                havanaUtil: kn,
                store: i.Z,
                storage: Be.Z,
                timeoutPromise: er.Z,
                combine: tr.Z,
                exTool: pe.vU,
                initPatch4RetailMtop: pe.lR
            },
            dogEye: {
                versionInfo: Me
            },
            answer: {
                eleUtil: {
                    appInfo: {
                        appId: Me.app_id,
                        platform: (0,
                        ze.JZ)() ? "iOS" : "Android",
                        app: "web",
                        version: Me.version,
                        buildNum: Me.build_num
                    },
                    authLogin: {
                        getUserId: function() {
                            var e, t, r, o = ((e = (0,
                            J.default)().authLogin) == null ? void 0 : e.getUserIdSync()) || ((r = (t = (0,
                            J.default)().utils).getDefaultUID) == null ? void 0 : r.call(t)) || "123456789";
                            return o
                        }
                    },
                    utils: {
                        getDeviceId: X.Zw
                    },
                    storeUtil: Et
                },
                config: {
                    maxRecordLogs: 5
                }
            },
            location: {
                bridge: Pe.Z,
                timeoutWrapper: pe.EE,
                isTabPage: pe.Cf,
                isWebviewPage: pe.IY,
                isTaobaoSync: ze.kz,
                store: i.Z
            }
        }), (0,
        Ie.Z)({
            type: "host"
        }), function() {
            return {
                plugins: [new Fe, new Re.Z({
                    showHeaderControl: function(e) {
                        return function(t) {
                            return window.location.href.indexOf("hide-header=0") > -1
                        }
                    },
                    showBackControl: function(e) {
                        return function(t) {
                            return window.location.href.indexOf("hide-header=0") > -1
                        }
                    }
                })]
            }
        }
        ]),
        m()({}),
        K.Z.setRootFontSizeForRem(16);
        var Rn = {
            pages: ["/pages/index/index", "/pages/my/index", "/pages/order-list/index", "/pages-greengo/index/index", "/pages-greengo/coupon/index", "/pages-poi/address/index", "/pages-poi/edit/index", "/pages-poi/list/index", "/pages-poi/map/index", "/pages-poi/order/index"],
            window: {
                defaultTitle: "",
                transparentTitle: "none",
                translucent: !1,
                enableInPageRender: "YES",
                titleBarColor: "#fff",
                navigationBarBackgroundColor: "#fff",
                titlePenetrate: "YES"
            },
            appId: "2021001110676437",
            useDynamicPlugins: !0,
            subPackages: [{
                root: "pages-poi",
                pages: ["address/index", "edit/index", "list/index", "map/index", "order/index"]
            }],
            router: {
                mode: "browser",
                baseName: "/minisite",
                customRoutes: {}
            },
            tabBar: {
                textColor: "#666666",
                selectedColor: "#02B6FD",
                backgroundColor: "#ffffff",
                items: [{
                    pagePath: "/pages/index/index",
                    icon: "https://gw.alicdn.com/imgextra/i2/O1CN01Ha8S2d20YqXK6PTsj_!!6000000006862-2-tps-60-60.png",
                    activeIcon: "https://gw.alicdn.com/imgextra/i4/O1CN01mjuUty294SnxayJFo_!!6000000008014-2-tps-60-60.png",
                    name: "\u9996\u9875"
                }, {
                    pagePath: "/pages/order-list/index",
                    icon: "https://gw.alicdn.com/imgextra/i1/O1CN01VLnmhL1lrslLwg40n_!!6000000004873-2-tps-60-60.png",
                    activeIcon: "https://gw.alicdn.com/imgextra/i1/O1CN01iKM20L1qbv2M58c8m_!!6000000005515-2-tps-60-60.png",
                    name: "\u8BA2\u5355"
                }, {
                    pagePath: "/pages/my/index",
                    icon: "https://gw.alicdn.com/imgextra/i4/O1CN01YPwarQ1VVPTfvzwtI_!!6000000002658-2-tps-60-60.png",
                    activeIcon: "https://gw.alicdn.com/imgextra/i2/O1CN01OCKkCF24I8Y1skoy3_!!6000000007367-2-tps-60-60.png",
                    name: "\u6211\u7684"
                }]
            },
            tabBarGreenGo: {
                textColor: "#666666",
                selectedColor: "#191919",
                backgroundColor: "#ffffff",
                disableSafeAreaPaddingUARegex: "DingTalk",
                items: [{
                    pagePath: "pages-greengo/index/index",
                    icon: "https://gw.alicdn.com/imgextra/i1/O1CN01oloVre1oKr7fxUasa_!!6000000005207-2-tps-60-60.png",
                    activeIcon: "https://gw.alicdn.com/imgextra/i1/O1CN01asSvq727fu1HXcY0C_!!6000000007825-2-tps-60-60.png",
                    name: "\u9996\u9875"
                }, {
                    pagePath: "pages/order-list/index",
                    icon: "https://gw.alicdn.com/imgextra/i4/O1CN01FkVcSc1fAw05yuY3q_!!6000000003967-2-tps-60-60.png",
                    activeIcon: "https://gw.alicdn.com/imgextra/i2/O1CN01zHnRut1EfAW5kjwMx_!!6000000000378-2-tps-60-60.png",
                    name: "\u8BA2\u5355"
                }, {
                    pagePath: "pages/my/index",
                    icon: "https://gw.alicdn.com/imgextra/i3/O1CN0105XQwo25R80zrMilJ_!!6000000007522-2-tps-60-60.png",
                    activeIcon: "https://gw.alicdn.com/imgextra/i4/O1CN01b7WgGG1jpvuzXZYqp_!!6000000004598-2-tps-60-60.png",
                    name: "\u6211\u7684"
                }]
            }
        };
        Rn.routes = [{
            path: "/pages/index/index",
            loader: function() {
                return Promise.all([a.e(986), a.e(610), a.e(714)]).then(a.bind(a, "fmvq"))
            }
        }, {
            path: "/pages/my/index",
            loader: function() {
                return Promise.all([a.e(986), a.e(610), a.e(990)]).then(a.bind(a, "NvOt"))
            }
        }, {
            path: "/pages/order-list/index",
            loader: function() {
                return Promise.all([a.e(986), a.e(610), a.e(4)]).then(a.bind(a, "9aE2"))
            }
        }, {
            path: "/pages-greengo/index/index",
            loader: function() {
                return Promise.all([a.e(986), a.e(293), a.e(568)]).then(a.bind(a, "lumg"))
            }
        }, {
            path: "/pages-greengo/coupon/index",
            loader: function() {
                return Promise.all([a.e(986), a.e(293), a.e(212)]).then(a.bind(a, "u1me"))
            }
        }, {
            path: "/pages-poi/address/index",
            loader: function() {
                return Promise.all([a.e(986), a.e(367), a.e(346), a.e(382)]).then(a.bind(a, "l/y7"))
            }
        }, {
            path: "/pages-poi/edit/index",
            loader: function() {
                return Promise.all([a.e(986), a.e(22)]).then(a.bind(a, "sL77"))
            }
        }, {
            path: "/pages-poi/list/index",
            loader: function() {
                return Promise.all([a.e(986), a.e(367), a.e(391), a.e(395)]).then(a.bind(a, "A4dc"))
            }
        }, {
            path: "/pages-poi/map/index",
            loader: function() {
                return Promise.all([a.e(986), a.e(346), a.e(814)]).then(a.bind(a, "dE83"))
            }
        }, {
            path: "/pages-poi/order/index",
            loader: function() {
                return Promise.all([a.e(986), a.e(367), a.e(391), a.e(510)]).then(a.bind(a, "D4tS"))
            }
        }],
        (0,
        x.p7)(Rn)
    },
    mbJN: function(ie) {
        "use strict";
        ie.exports = JSON.parse('{"pages":["pages/index/index","pages/my/index","pages/order-list/index","pages/auth/index","pages/havana/index","pages/svip/index","pages/ele-shop-list/ele-shop-list","pages/ele-takeout-index/ele-takeout-index","pages/ele-product-detail/ele-product-detail","pages/eleme-order-detail/eleme-order-detail","pages/ele-order-detail-tb/ele-order-detail-tb","pages/landing/landing"],"window":{"defaultTitle":"","transparentTitle":"none","translucent":false,"enableInPageRender":"YES","titleBarColor":"#fff","navigationBarBackgroundColor":"#fff","titlePenetrate":"YES"},"tabBar":{"textColor":"#666666","selectedColor":"#02B6FD","backgroundColor":"#ffffff","items":[{"pagePath":"pages/index/index","icon":"assets/tabicon/index_default.png","activeIcon":"assets/tabicon/index_selected.png","name":"\u9996\u9875"},{"pagePath":"pages/svip/index","icon":"assets/tabicon/member_default.png","activeIcon":"assets/tabicon/member_selected.png","name":"\u4F1A\u5458"},{"pagePath":"pages/order-list/index","icon":"assets/tabicon/order_default.png","activeIcon":"assets/tabicon/order_selected.png","name":"\u8BA2\u5355"},{"pagePath":"pages/my/index","icon":"assets/tabicon/my_default.png","activeIcon":"assets/tabicon/my_selected.png","name":"\u6211\u7684"}]},"subPackages":[{"root":"pages-poi","pages":["address/index","edit/index","map/index","order/index","list/index","report/index"]},{"root":"pages-payment","pages":["result/index"]},{"root":"retail-mini-app","pages":["pages/shop-detail/shop-detail"]}],"appId":"2021001110676437","useDynamicPlugins":true}')
    },
    Oisn: function(ie) {
        "use strict";
        ie.exports = JSON.parse('{"isDebug":false,"version":"10.20.1","build_num":"7","app_id":"2021001110676437"}')
    }
}, function(ie) {
    var z = function(y) {
        return ie(ie.s = y)
    };
    ie.O(0, [514, 986], function() {
        return z("s4mU")
    });
    var a = ie.O()
}
]);
