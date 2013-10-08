(function (k, l) {
    function n(a) {
        var b = ja[a] = {}, c, e, a = a.split(/\s+/);
        c = 0;
        for (e = a.length; c < e; c++) b[a[c]] = !0;
        return b
    }

    function s(a, b, d) {
        if (d === l && 1 === a.nodeType)
            if (d = "data-" + b.replace(Va, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : c.isNumeric(d) ? parseFloat(d) : Wa.test(d) ? c.parseJSON(d) : d
                } catch (e) {}
                c.data(a, b, d)
            } else d = l;
        return d
    }

    function B(a) {
        for (var b in a)
            if (!("data" === b && c.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function G(a,
        b, d) {
        var e = b + "defer",
            f = b + "queue",
            g = b + "mark",
            h = c._data(a, e);
        h && ("queue" === d || !c._data(a, f)) && ("mark" === d || !c._data(a, g)) && setTimeout(function () {
            !c._data(a, f) && !c._data(a, g) && (c.removeData(a, e, !0), h.fire())
        }, 0)
    }

    function x() {
        return !1
    }

    function y() {
        return !0
    }

    function A(a, b, d) {
        b = b || 0;
        if (c.isFunction(b)) return c.grep(a, function (a, c) {
            return !!b.call(a, c, a) === d
        });
        if (b.nodeType) return c.grep(a, function (a) {
            return a === b === d
        });
        if ("string" === typeof b) {
            var e = c.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (Xa.test(b)) return c.filter(b,
                e, !d);
            b = c.filter(b, e)
        }
        return c.grep(a, function (a) {
            return 0 <= c.inArray(a, b) === d
        })
    }

    function w(a) {
        var b = ka.split("|"),
            a = a.createDocumentFragment();
        if (a.createElement)
            for (; b.length;) a.createElement(b.pop());
        return a
    }

    function r(a, b) {
        if (1 === b.nodeType && c.hasData(a)) {
            var d, e, f;
            e = c._data(a);
            var g = c._data(b, e),
                h = e.events;
            if (h)
                for (d in delete g.handle, g.events = {}, h) {
                    e = 0;
                    for (f = h[d].length; e < f; e++) c.event.add(b, d + (h[d][e].namespace ? "." : "") + h[d][e].namespace, h[d][e], h[d][e].data)
                }
            g.data && (g.data = c.extend({}, g.data))
        }
    }

    function v(a, b) {
        var d;
        if (1 === b.nodeType) {
            b.clearAttributes && b.clearAttributes();
            b.mergeAttributes && b.mergeAttributes(a);
            d = b.nodeName.toLowerCase();
            if ("object" === d) b.outerHTML = a.outerHTML;
            else if ("input" === d && ("checkbox" === a.type || "radio" === a.type)) {
                if (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value) b.value = a.value
            } else if ("option" === d) b.selected = a.defaultSelected;
            else if ("input" === d || "textarea" === d) b.defaultValue = a.defaultValue;
            b.removeAttribute(c.expando)
        }
    }

    function D(a) {
        return "undefined" !==
            typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function I(a) {
        if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
    }

    function la(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? I(a) : "script" !== b && "undefined" !== typeof a.getElementsByTagName && c.grep(a.getElementsByTagName("input"), I)
    }

    function Ya(a, b) {
        b.src ? c.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : c.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Za,
            "/*$0*/"));
        b.parentNode && b.parentNode.removeChild(b)
    }

    function ma(a, b, d) {
        var e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = "width" === b ? $a : ab,
            g = 0,
            h = f.length;
        if (0 < e) {
            if ("border" !== d)
                for (; g < h; g++) d || (e -= parseFloat(c.css(a, "padding" + f[g])) || 0), e = "margin" === d ? e + (parseFloat(c.css(a, d + f[g])) || 0) : e - (parseFloat(c.css(a, "border" + f[g] + "Width")) || 0);
            return e + "px"
        }
        e = J(a, b, b);
        if (0 > e || null == e) e = a.style[b] || 0;
        e = parseFloat(e) || 0;
        if (d)
            for (; g < h; g++) e += parseFloat(c.css(a, "padding" + f[g])) || 0, "padding" !== d && (e += parseFloat(c.css(a,
                "border" + f[g] + "Width")) || 0), "margin" === d && (e += parseFloat(c.css(a, d + f[g])) || 0);
        return e + "px"
    }

    function na(a) {
        return function (b, d) {
            "string" !== typeof b && (d = b, b = "*");
            if (c.isFunction(d))
                for (var e = b.toLowerCase().split(oa), f = 0, g = e.length, h, i; f < g; f++) h = e[f], (i = /^\+/.test(h)) && (h = h.substr(1) || "*"), h = a[h] = a[h] || [], h[i ? "unshift" : "push"](d)
        }
    }

    function U(a, b, c, e, f, g) {
        f = f || b.dataTypes[0];
        g = g || {};
        g[f] = !0;
        for (var f = a[f], h = 0, i = f ? f.length : 0, j = a === Z, o; h < i && (j || !o); h++) o = f[h](b, c, e), "string" === typeof o && (!j || g[o] ? o = l :
            (b.dataTypes.unshift(o), o = U(a, b, c, e, o, g)));
        if ((j || !o) && !g["*"]) o = U(a, b, c, e, "*", g);
        return o
    }

    function pa(a, b) {
        var d, e, f = c.ajaxSettings.flatOptions || {};
        for (d in b) b[d] !== l && ((f[d] ? a : e || (e = {}))[d] = b[d]);
        e && c.extend(!0, a, e)
    }

    function $(a, b, d, e) {
        if (c.isArray(b)) c.each(b, function (b, f) {
            d || bb.test(a) ? e(a, f) : $(a + "[" + ("object" === typeof f || c.isArray(f) ? b : "") + "]", f, d, e)
        });
        else if (!d && null != b && "object" === typeof b)
            for (var f in b) $(a + "[" + f + "]", b[f], d, e);
        else e(a, b)
    }

    function qa() {
        try {
            return new k.XMLHttpRequest
        } catch (a) {}
    }

    function ra() {
        setTimeout(cb, 0);
        return V = c.now()
    }

    function cb() {
        V = l
    }

    function M(a, b) {
        var d = {};
        c.each(sa.concat.apply([], sa.slice(0, b)), function () {
            d[this] = a
        });
        return d
    }

    function ta(a) {
        if (!aa[a]) {
            var b = m.body,
                d = c("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if ("none" === e || "" === e) {
                F || (F = m.createElement("iframe"), F.frameBorder = F.width = F.height = 0);
                b.appendChild(F);
                if (!K || !F.createElement) K = (F.contentWindow || F.contentDocument).document, K.write(("CSS1Compat" === m.compatMode ? "<!doctype html>" : "") + "<html><body>"),
                K.close();
                d = K.createElement(a);
                K.body.appendChild(d);
                e = c.css(d, "display");
                b.removeChild(F)
            }
            aa[a] = e
        }
        return aa[a]
    }

    function ba(a) {
        return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var m = k.document,
        db = k.navigator,
        eb = k.location,
        c = function () {
            function a() {
                if (!b.isReady) {
                    try {
                        m.documentElement.doScroll("left")
                    } catch (c) {
                        setTimeout(a, 1);
                        return
                    }
                    b.ready()
                }
            }
            var b = function (a, c) {
                return new b.fn.init(a, c, f)
            }, c = k.jQuery,
                e = k.$,
                f, g = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                h = /\S/,
                i = /^\s+/,
                j = /\s+$/,
                o = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                u = /^[\],:{}\s]*$/,
                q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                fb = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                p = /(?:^|:|,)(?:\s*\[)+/g,
                gb = /(webkit)[ \/]([\w.]+)/,
                n = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                s = /(msie) ([\w.]+)/,
                hb = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/ig,
                r = /^-ms-/,
                t = function (a, b) {
                    return (b + "").toUpperCase()
                }, v = db.userAgent,
                z, N, ib = Object.prototype.toString,
                ca = Object.prototype.hasOwnProperty,
                da = Array.prototype.push,
                T = Array.prototype.slice,
                ua = String.prototype.trim,
                va = Array.prototype.indexOf,
                wa = {};
            b.fn = b.prototype = {
                constructor: b,
                init: function (a, c, d) {
                    var e;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !c && m.body) return this.context = m, this[0] = m.body, this.selector = a, this.length = 1, this;
                    if ("string" === typeof a) {
                        if ((e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : g.exec(a)) && (e[1] || !c)) {
                            if (e[1]) return d = (c = c instanceof b ? c[0] : c) ? c.ownerDocument || c : m, (a = o.exec(a)) ?
                                b.isPlainObject(c) ? (a = [m.createElement(a[1])], b.fn.attr.call(a, c, !0)) : a = [d.createElement(a[1])] : (a = b.buildFragment([e[1]], [d]), a = (a.cacheable ? b.clone(a.fragment) : a.fragment).childNodes), b.merge(this, a);
                            if ((c = m.getElementById(e[2])) && c.parentNode) {
                                if (c.id !== e[2]) return d.find(a);
                                this.length = 1;
                                this[0] = c
                            }
                            this.context = m;
                            this.selector = a;
                            return this
                        }
                        return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
                    }
                    if (b.isFunction(a)) return d.ready(a);
                    a.selector !== l && (this.selector = a.selector, this.context = a.context);
                    return b.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return T.call(this, 0)
                },
                get: function (a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function (a, c, d) {
                    var e = this.constructor();
                    b.isArray(a) ? da.apply(e, a) : b.merge(e, a);
                    e.prevObject = this;
                    e.context = this.context;
                    "find" === c ? e.selector = this.selector + (this.selector ? " " : "") + d : c && (e.selector = this.selector + "." + c + "(" + d + ")");
                    return e
                },
                each: function (a, c) {
                    return b.each(this,
                        a, c)
                },
                ready: function (a) {
                    b.bindReady();
                    z.add(a);
                    return this
                },
                eq: function (a) {
                    a = +a;
                    return -1 === a ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(T.apply(this, arguments), "slice", T.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(b.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: da,
                sort: [].sort,
                splice: [].splice
            };
            b.fn.init.prototype =
                b.fn;
            b.extend = b.fn.extend = function () {
                var a, c, d, e, f, g = arguments[0] || {}, z = 1,
                    h = arguments.length,
                    N = !1;
                "boolean" === typeof g && (N = g, g = arguments[1] || {}, z = 2);
                "object" !== typeof g && !b.isFunction(g) && (g = {});
                h === z && (g = this, --z);
                for (; z < h; z++)
                    if (null != (a = arguments[z]))
                        for (c in a) d = g[c], e = a[c], g !== e && (N && e && (b.isPlainObject(e) || (f = b.isArray(e))) ? (f ? (f = !1, d = d && b.isArray(d) ? d : []) : d = d && b.isPlainObject(d) ? d : {}, g[c] = b.extend(N, d, e)) : e !== l && (g[c] = e));
                return g
            };
            b.extend({
                noConflict: function (a) {
                    k.$ === b && (k.$ = e);
                    a && k.jQuery ===
                        b && (k.jQuery = c);
                    return b
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? b.readyWait++ : b.ready(!0)
                },
                ready: function (a) {
                    if (!0 === a && !--b.readyWait || !0 !== a && !b.isReady) {
                        if (!m.body) return setTimeout(b.ready, 1);
                        b.isReady = !0;
                        !0 !== a && 0 < --b.readyWait || (z.fireWith(m, [b]), b.fn.trigger && b(m).trigger("ready").off("ready"))
                    }
                },
                bindReady: function () {
                    if (!z) {
                        z = b.Callbacks("once memory");
                        if ("complete" === m.readyState) return setTimeout(b.ready, 1);
                        if (m.addEventListener) m.addEventListener("DOMContentLoaded", N, !1), k.addEventListener("load",
                            b.ready, !1);
                        else if (m.attachEvent) {
                            m.attachEvent("onreadystatechange", N);
                            k.attachEvent("onload", b.ready);
                            var c = !1;
                            try {
                                c = null == k.frameElement
                            } catch (d) {}
                            m.documentElement.doScroll && c && a()
                        }
                    }
                },
                isFunction: function (a) {
                    return "function" === b.type(a)
                },
                isArray: Array.isArray || function (a) {
                    return "array" === b.type(a)
                },
                isWindow: function (a) {
                    return a && "object" === typeof a && "setInterval" in a
                },
                isNumeric: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function (a) {
                    return null == a ? "" + a : wa[ib.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || "object" !== b.type(a) || a.nodeType || b.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !ca.call(a, "constructor") && !ca.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    for (var d in a);
                    return d === l || ca.call(a, d)
                },
                isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw Error(a);
                },
                parseJSON: function (a) {
                    if ("string" !== typeof a || !a) return null;
                    a = b.trim(a);
                    if (k.JSON && k.JSON.parse) return k.JSON.parse(a);
                    if (u.test(a.replace(q, "@").replace(fb,
                        "]").replace(p, ""))) return (new Function("return " + a))();
                    b.error("Invalid JSON: " + a)
                },
                parseXML: function (a) {
                    var c, d;
                    try {
                        k.DOMParser ? (d = new DOMParser, c = d.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a))
                    } catch (e) {
                        c = l
                    }(!c || !c.documentElement || c.getElementsByTagName("parsererror").length) && b.error("Invalid XML: " + a);
                    return c
                },
                noop: function () {},
                globalEval: function (a) {
                    a && h.test(a) && (k.execScript || function (a) {
                        k.eval.call(k, a)
                    })(a)
                },
                camelCase: function (a) {
                    return a.replace(r,
                        "ms-").replace(w, t)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var e, f = 0,
                        g = a.length,
                        z = g === l || b.isFunction(a);
                    if (d)
                        if (z)
                            for (e in a) {
                                if (!1 === c.apply(a[e], d)) break
                            } else
                                for (; f < g && !1 !== c.apply(a[f++], d););
                        else if (z)
                        for (e in a) {
                            if (!1 === c.call(a[e], e, a[e])) break
                        } else
                            for (; f < g && !1 !== c.call(a[f], f, a[f++]););
                    return a
                },
                trim: ua ? function (a) {
                    return null == a ? "" : ua.call(a)
                } : function (a) {
                    return null == a ? "" : a.toString().replace(i, "").replace(j, "")
                },
                makeArray: function (a,
                    c) {
                    var d = c || [];
                    if (null != a) {
                        var e = b.type(a);
                        null == a.length || "string" === e || "function" === e || "regexp" === e || b.isWindow(a) ? da.call(d, a) : b.merge(d, a)
                    }
                    return d
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (va) return va.call(b, a, c);
                        d = b.length;
                        for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function (a, b) {
                    var c = a.length,
                        d = 0;
                    if ("number" === typeof b.length)
                        for (var e = b.length; d < e; d++) a[c++] = b[d];
                    else
                        for (; b[d] !== l;) a[c++] = b[d++];
                    a.length = c;
                    return a
                },
                grep: function (a, b, c) {
                    for (var d = [], e, c = !! c, f = 0, g = a.length; f < g; f++) e = !! b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function (a, c, d) {
                    var e, f, g = [],
                        z = 0,
                        h = a.length;
                    if (a instanceof b || h !== l && "number" === typeof h && (0 < h && a[0] && a[h - 1] || 0 === h || b.isArray(a)))
                        for (; z < h; z++) e = c(a[z], z, d), null != e && (g[g.length] = e);
                    else
                        for (f in a) e = c(a[f], f, d), null != e && (g[g.length] = e);
                    return g.concat.apply([], g)
                },
                guid: 1,
                proxy: function (a, c) {
                    if ("string" === typeof c) var d = a[c],
                    c = a, a = d;
                    if (!b.isFunction(a)) return l;
                    var e = T.call(arguments, 2),
                        d = function () {
                            return a.apply(c,
                                e.concat(T.call(arguments)))
                        };
                    d.guid = a.guid = a.guid || d.guid || b.guid++;
                    return d
                },
                access: function (a, c, d, e, f, g) {
                    var z = a.length;
                    if ("object" === typeof c) {
                        for (var h in c) b.access(a, h, c[h], e, f, d);
                        return a
                    }
                    if (d !== l) {
                        e = !g && e && b.isFunction(d);
                        for (h = 0; h < z; h++) f(a[h], c, e ? d.call(a[h], h, f(a[h], c)) : d, g);
                        return a
                    }
                    return z ? f(a[0], c) : l
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    a = gb.exec(a) || n.exec(a) || s.exec(a) || 0 > a.indexOf("compatible") && hb.exec(a) || [];
                    return {
                        browser: a[1] || "",
                        version: a[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    b.extend(!0, a, this);
                    a.superclass = this;
                    a.fn = a.prototype = this();
                    a.fn.constructor = a;
                    a.sub = this.sub;
                    a.fn.init = function (d, e) {
                        e && e instanceof b && !(e instanceof a) && (e = a(e));
                        return b.fn.init.call(this, d, e, c)
                    };
                    a.fn.init.prototype = a.fn;
                    var c = a(m);
                    return a
                },
                browser: {}
            });
            b.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","), function (a, b) {
                wa["[object " + b + "]"] = b.toLowerCase()
            });
            v = b.uaMatch(v);
            v.browser && (b.browser[v.browser] = !0, b.browser.version = v.version);
            b.browser.webkit && (b.browser.safari = !0);
            h.test("\u00a0") && (i = /^[\s\xA0]+/, j = /[\s\xA0]+$/);
            f = b(m);
            m.addEventListener ? N = function () {
                m.removeEventListener("DOMContentLoaded", N, false);
                b.ready()
            } : m.attachEvent && (N = function () {
                if (m.readyState === "complete") {
                    m.detachEvent("onreadystatechange", N);
                    b.ready()
                }
            });
            return b
        }(),
        ja = {};
    c.Callbacks = function (a) {
        var a = a ? ja[a] || n(a) : {}, b = [],
            d = [],
            e, f, g, h, i, j = function (d) {
                var e, f, g, h;
                e = 0;
                for (f = d.length; e < f; e++) g = d[e], h = c.type(g), "array" === h ?
                    j(g) : "function" === h && (!a.unique || !k.has(g)) && b.push(g)
            }, o = function (c, j) {
                j = j || [];
                e = !a.memory || [c, j];
                f = !0;
                i = g || 0;
                g = 0;
                for (h = b.length; b && i < h; i++)
                    if (!1 === b[i].apply(c, j) && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                f = !1;
                b && (a.once ? !0 === e ? k.disable() : b = [] : d && d.length && (e = d.shift(), k.fireWith(e[0], e[1])))
            }, k = {
                add: function () {
                    if (b) {
                        var a = b.length;
                        j(arguments);
                        f ? h = b.length : e && !0 !== e && (g = a, o(e[0], e[1]))
                    }
                    return this
                },
                remove: function () {
                    if (b)
                        for (var c = arguments, d = 0, e = c.length; d < e; d++)
                            for (var g = 0; g < b.length && !(c[d] === b[g] && (f && g <=
                                h && (h--, g <= i && i--), b.splice(g--, 1), a.unique)); g++);
                    return this
                },
                has: function (a) {
                    if (b)
                        for (var c = 0, d = b.length; c < d; c++)
                            if (a === b[c]) return !0;
                    return !1
                },
                empty: function () {
                    b = [];
                    return this
                },
                disable: function () {
                    b = d = e = l;
                    return this
                },
                disabled: function () {
                    return !b
                },
                lock: function () {
                    d = l;
                    (!e || !0 === e) && k.disable();
                    return this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (b, c) {
                    d && (f ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                    return this
                },
                fire: function () {
                    k.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!e
                }
            };
        return k
    };
    var ea = [].slice;
    c.extend({
        Deferred: function (a) {
            var b = c.Callbacks("once memory"),
                d = c.Callbacks("once memory"),
                e = c.Callbacks("memory"),
                f = "pending",
                g = {
                    resolve: b,
                    reject: d,
                    notify: e
                }, h = {
                    done: b.add,
                    fail: d.add,
                    progress: e.add,
                    state: function () {
                        return f
                    },
                    isResolved: b.fired,
                    isRejected: d.fired,
                    then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function () {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function (a, b, d) {
                        return c.Deferred(function (e) {
                            c.each({
                                done: [a,
                                    "resolve"
                                ],
                                fail: [b, "reject"],
                                progress: [d, "notify"]
                            }, function (a, b) {
                                var d = b[0],
                                    f = b[1],
                                    g;
                                if (c.isFunction(d)) i[a](function () {
                                    if ((g = d.apply(this, arguments)) && c.isFunction(g.promise)) g.promise().then(e.resolve, e.reject, e.notify);
                                    else e[f + "With"](this === i ? e : this, [g])
                                });
                                else i[a](e[f])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (null == a) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                }, i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function () {
                f = "resolved"
            }, d.disable, e.lock).fail(function () {
                f =
                    "rejected"
            }, b.disable, e.lock);
            a && a.call(i, i);
            return i
        },
        when: function (a) {
            function b(a) {
                return function (b) {
                    e[a] = 1 < arguments.length ? ea.call(arguments, 0) : b;
                    --i || j.resolveWith(j, e)
                }
            }

            function d(a) {
                return function (b) {
                    h[a] = 1 < arguments.length ? ea.call(arguments, 0) : b;
                    j.notifyWith(o, h)
                }
            }
            var e = ea.call(arguments, 0),
                f = 0,
                g = e.length,
                h = Array(g),
                i = g,
                j = 1 >= g && a && c.isFunction(a.promise) ? a : c.Deferred(),
                o = j.promise();
            if (1 < g) {
                for (; f < g; f++) e[f] && e[f].promise && c.isFunction(e[f].promise) ? e[f].promise().then(b(f), j.reject, d(f)) :
                --i;
                i || j.resolveWith(j, e)
            } else j !== a && j.resolveWith(j, g ? [a] : []);
            return o
        }
    });
    c.support = function () {
        var a, b, d, e, f, g, h, i, j = m.createElement("div");
        j.setAttribute("className", "t");
        j.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        b = j.getElementsByTagName("*");
        d = j.getElementsByTagName("a")[0];
        if (!b || !b.length || !d) return {};
        e = m.createElement("select");
        f = e.appendChild(m.createElement("option"));
        b = j.getElementsByTagName("input")[0];
        a = {
            leadingWhitespace: 3 === j.firstChild.nodeType,
            tbody: !j.getElementsByTagName("tbody").length,
            htmlSerialize: !! j.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.55/.test(d.style.opacity),
            cssFloat: !! d.style.cssFloat,
            checkOn: "on" === b.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== j.className,
            enctype: !! m.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== m.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        };
        b.checked = !0;
        a.noCloneChecked = b.cloneNode(!0).checked;
        e.disabled = !0;
        a.optDisabled = !f.disabled;
        try {
            delete j.test
        } catch (o) {
            a.deleteExpando = !1
        }!j.addEventListener && j.attachEvent && j.fireEvent && (j.attachEvent("onclick", function () {
            a.noCloneEvent = !1
        }), j.cloneNode(!0).fireEvent("onclick"));
        b = m.createElement("input");
        b.value = "t";
        b.setAttribute("type", "radio");
        a.radioValue = "t" === b.value;
        b.setAttribute("checked", "checked");
        j.appendChild(b);
        d = m.createDocumentFragment();
        d.appendChild(j.lastChild);
        a.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.appendChecked = b.checked;
        d.removeChild(b);
        d.appendChild(j);
        j.innerHTML = "";
        k.getComputedStyle && (b = m.createElement("div"), b.style.width = "0", b.style.marginRight = "0", j.style.width = "2px", j.appendChild(b), a.reliableMarginRight = 0 === (parseInt((k.getComputedStyle(b, null) || {
            marginRight: 0
        }).marginRight, 10) || 0));
        if (j.attachEvent)
            for (h in {
                submit: 1,
                change: 1,
                focusin: 1
            }) b = "on" + h, i = b in j, i || (j.setAttribute(b, "return;"), i = "function" === typeof j[b]), a[h + "Bubbles"] = i;
        d.removeChild(j);
        d = e = f = b = j = b = null;
        c(function () {
            var b, d, e, f, h = m.getElementsByTagName("body")[0];
            if (h) {
                b = m.createElement("div");
                b.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
                h.insertBefore(b, h.firstChild);
                j = m.createElement("div");
                b.appendChild(j);
                j.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
                g = j.getElementsByTagName("td");
                i = g[0].offsetHeight === 0;
                g[0].style.display = "";
                g[1].style.display = "none";
                a.reliableHiddenOffsets = i && g[0].offsetHeight === 0;
                j.innerHTML = "";
                j.style.width = j.style.paddingLeft = "1px";
                c.boxModel = a.boxModel = j.offsetWidth === 2;
                if (typeof j.style.zoom !== "undefined") {
                    j.style.display = "inline";
                    j.style.zoom = 1;
                    a.inlineBlockNeedsLayout = j.offsetWidth === 2;
                    j.style.display = "";
                    j.innerHTML = "<div style='width:4px;'></div>";
                    a.shrinkWrapBlocks = j.offsetWidth !== 2
                }
                j.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;";
                j.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
                d = j.firstChild;
                e = d.firstChild;
                f = {
                    doesNotAddBorder: e.offsetTop !== 5,
                    doesAddBorderForTableAndCells: d.nextSibling.firstChild.firstChild.offsetTop === 5
                };
                e.style.position = "fixed";
                e.style.top = "20px";
                f.fixedPosition =
                    e.offsetTop === 20 || e.offsetTop === 15;
                e.style.position = e.style.top = "";
                d.style.overflow = "hidden";
                d.style.position = "relative";
                f.subtractsBorderForOverflowNotVisible = e.offsetTop === -5;
                f.doesNotIncludeMarginInBodyOffset = h.offsetTop !== 1;
                h.removeChild(b);
                j = null;
                c.extend(a, f)
            }
        });
        return a
    }();
    var Wa = /^(?:\{.*\}|\[.*\])$/,
        Va = /([A-Z])/g;
    c.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a =
                a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
            return !!a && !B(a)
        },
        data: function (a, b, d, e) {
            if (c.acceptData(a)) {
                var f;
                f = c.expando;
                var g = "string" === typeof b,
                    h = a.nodeType,
                    i = h ? c.cache : a,
                    j = h ? a[f] : a[f] && f,
                    o = "events" === b;
                if (j && i[j] && (o || e || i[j].data) || !(g && d === l)) {
                    j || (h ? a[f] = j = ++c.uuid : j = f);
                    i[j] || (i[j] = {}, h || (i[j].toJSON = c.noop));
                    if ("object" === typeof b || "function" === typeof b) e ? i[j] = c.extend(i[j], b) : i[j].data = c.extend(i[j].data, b);
                    f = a = i[j];
                    e || (a.data || (a.data = {}), a = a.data);
                    d !== l && (a[c.camelCase(b)] = d);
                    if (o && !a[b]) return f.events;
                    g ? (d = a[b], null == d && (d = a[c.camelCase(b)])) : d = a;
                    return d
                }
            }
        },
        removeData: function (a, b, d) {
            if (c.acceptData(a)) {
                var e, f, g, h = c.expando,
                    i = a.nodeType,
                    j = i ? c.cache : a,
                    o = i ? a[h] : h;
                if (j[o]) {
                    if (b && (e = d ? j[o] : j[o].data)) {
                        c.isArray(b) || (b in e ? b = [b] : (b = c.camelCase(b), b = b in e ? [b] : b.split(" ")));
                        f = 0;
                        for (g = b.length; f < g; f++) delete e[b[f]];
                        if (!(d ? B : c.isEmptyObject)(e)) return
                    }
                    if (!d && (delete j[o].data, !B(j[o]))) return;
                    c.support.deleteExpando || !j.setInterval ? delete j[o] : j[o] = null;
                    i && (c.support.deleteExpando ?
                        delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
                }
            }
        },
        _data: function (a, b, d) {
            return c.data(a, b, d, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = c.noData[a.nodeName.toLowerCase()];
                if (b) return !(!0 === b || a.getAttribute("classid") !== b)
            }
            return !0
        }
    });
    c.fn.extend({
        data: function (a, b) {
            var d, e, f, g = null;
            if ("undefined" === typeof a) {
                if (this.length && (g = c.data(this[0]), 1 === this[0].nodeType && !c._data(this[0], "parsedAttrs"))) {
                    e = this[0].attributes;
                    for (var h = 0, i = e.length; h < i; h++) f = e[h].name, 0 === f.indexOf("data-") &&
                        (f = c.camelCase(f.substring(5)), s(this[0], f, g[f]));
                    c._data(this[0], "parsedAttrs", !0)
                }
                return g
            }
            if ("object" === typeof a) return this.each(function () {
                c.data(this, a)
            });
            d = a.split(".");
            d[1] = d[1] ? "." + d[1] : "";
            return b === l ? (g = this.triggerHandler("getData" + d[1] + "!", [d[0]]), g === l && this.length && (g = c.data(this[0], a), g = s(this[0], a, g)), g === l && d[1] ? this.data(d[0]) : g) : this.each(function () {
                var e = c(this),
                    f = [d[0], b];
                e.triggerHandler("setData" + d[1] + "!", f);
                c.data(this, a, b);
                e.triggerHandler("changeData" + d[1] + "!", f)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                c.removeData(this,
                    a)
            })
        }
    });
    c.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", c._data(a, b, (c._data(a, b) || 0) + 1))
        },
        _unmark: function (a, b, d) {
            !0 !== a && (d = b, b = a, a = !1);
            if (b) {
                var d = d || "fx",
                    e = d + "mark";
                (a = a ? 0 : (c._data(b, e) || 1) - 1) ? c._data(b, e, a) : (c.removeData(b, e, !0), G(b, d, "mark"))
            }
        },
        queue: function (a, b, d) {
            var e;
            if (a) return b = (b || "fx") + "queue", e = c._data(a, b), d && (!e || c.isArray(d) ? e = c._data(a, b, c.makeArray(d)) : e.push(d)), e || []
        },
        dequeue: function (a, b) {
            var b = b || "fx",
                d = c.queue(a, b),
                e = d.shift(),
                f = {};
            "inprogress" === e && (e = d.shift());
            e &&
                ("fx" === b && d.unshift("inprogress"), c._data(a, b + ".run", f), e.call(a, function () {
                c.dequeue(a, b)
            }, f));
            d.length || (c.removeData(a, b + "queue " + b + ".run", !0), G(a, b, "queue"))
        }
    });
    c.fn.extend({
        queue: function (a, b) {
            "string" !== typeof a && (b = a, a = "fx");
            return b === l ? c.queue(this[0], a) : this.each(function () {
                var d = c.queue(this, a, b);
                a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                c.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = c.fx ? c.fx.speeds[a] || a : a;
            return this.queue(b || "fx",
                function (b, c) {
                    var f = setTimeout(b, a);
                    c.stop = function () {
                        clearTimeout(f)
                    }
                })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a) {
            function b() {
                --g || d.resolveWith(e, [e])
            }
            "string" !== typeof a && (a = l);
            for (var a = a || "fx", d = c.Deferred(), e = this, f = e.length, g = 1, h = a + "defer", i = a + "queue", a = a + "mark", j; f--;)
                if (j = c.data(e[f], h, l, !0) || (c.data(e[f], i, l, !0) || c.data(e[f], a, l, !0)) && c.data(e[f], h, c.Callbacks("once memory"), !0)) g++, j.add(b);
            b();
            return d.promise()
        }
    });
    var xa = /[\n\t\r]/g,
        W = /\s+/,
        jb = /\r/g,
        kb = /^(?:button|input)$/i,
        lb = /^(?:button|input|object|select|textarea)$/i,
        mb = /^a(?:rea)?$/i,
        ya = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        za = c.support.getSetAttribute,
        H, Aa, Ba;
    c.fn.extend({
        attr: function (a, b) {
            return c.access(this, a, b, !0, c.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                c.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return c.access(this, a, b, !0, c.prop)
        },
        removeProp: function (a) {
            a = c.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] =
                        l, delete this[a]
                } catch (b) {}
            })
        },
        addClass: function (a) {
            var b, d, e, f, g, h, i;
            if (c.isFunction(a)) return this.each(function (b) {
                c(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" === typeof a) {
                b = a.split(W);
                d = 0;
                for (e = this.length; d < e; d++)
                    if (f = this[d], 1 === f.nodeType)
                        if (!f.className && 1 === b.length) f.className = a;
                        else {
                            g = " " + f.className + " ";
                            h = 0;
                            for (i = b.length; h < i; h++)~ g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            f.className = c.trim(g)
                        }
            }
            return this
        },
        removeClass: function (a) {
            var b, d, e, f, g, h, i;
            if (c.isFunction(a)) return this.each(function (b) {
                c(this).removeClass(a.call(this,
                    b, this.className))
            });
            if (a && "string" === typeof a || a === l) {
                b = (a || "").split(W);
                d = 0;
                for (e = this.length; d < e; d++)
                    if (f = this[d], 1 === f.nodeType && f.className)
                        if (a) {
                            g = (" " + f.className + " ").replace(xa, " ");
                            h = 0;
                            for (i = b.length; h < i; h++) g = g.replace(" " + b[h] + " ", " ");
                            f.className = c.trim(g)
                        } else f.className = ""
            }
            return this
        },
        toggleClass: function (a, b) {
            var d = typeof a,
                e = "boolean" === typeof b;
            return c.isFunction(a) ? this.each(function (d) {
                c(this).toggleClass(a.call(this, d, this.className, b), b)
            }) : this.each(function () {
                if ("string" ===
                    d)
                    for (var f, g = 0, h = c(this), i = b, j = a.split(W); f = j[g++];) i = e ? i : !h.hasClass(f), h[i ? "addClass" : "removeClass"](f);
                else if ("undefined" === d || "boolean" === d) this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            for (var a = " " + a + " ", b = 0, c = this.length; b < c; b++)
                if (1 === this[b].nodeType && -1 < (" " + this[b].className + " ").replace(xa, " ").indexOf(a)) return !0;
            return !1
        },
        val: function (a) {
            var b, d, e, f = this[0];
            if (arguments.length) return e =
                c.isFunction(a), this.each(function (d) {
                    var f = c(this);
                    if (1 === this.nodeType && (d = e ? a.call(this, d, f.val()) : a, null == d ? d = "" : "number" === typeof d ? d += "" : c.isArray(d) && (d = c.map(d, function (a) {
                        return a == null ? "" : a + ""
                    })), b = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type], !b || !("set" in b) || b.set(this, d, "value") === l)) this.value = d
                });
            if (f) {
                if ((b = c.valHooks[f.nodeName.toLowerCase()] || c.valHooks[f.type]) && "get" in b && (d = b.get(f, "value")) !== l) return d;
                d = f.value;
                return "string" === typeof d ? d.replace(jb, "") : null ==
                    d ? "" : d
            }
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, d, e = a.selectedIndex,
                        f = [],
                        g = a.options,
                        h = "select-one" === a.type;
                    if (0 > e) return null;
                    a = h ? e : 0;
                    for (d = h ? e + 1 : g.length; a < d; a++)
                        if (b = g[a], b.selected && (c.support.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !c.nodeName(b.parentNode, "optgroup"))) {
                            b = c(b).val();
                            if (h) return b;
                            f.push(b)
                        }
                    return h && !f.length && g.length ? c(g[e]).val() :
                        f
                },
                set: function (a, b) {
                    var d = c.makeArray(b);
                    c(a).find("option").each(function () {
                        this.selected = 0 <= c.inArray(c(this).val(), d)
                    });
                    d.length || (a.selectedIndex = -1);
                    return d
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, b, d, e) {
            var f, g, h = a.nodeType;
            if (a && !(3 === h || 8 === h || 2 === h)) {
                if (e && b in c.attrFn) return c(a)[b](d);
                if ("undefined" === typeof a.getAttribute) return c.prop(a, b, d);
                if (e = 1 !== h || !c.isXMLDoc(a)) b = b.toLowerCase(), g = c.attrHooks[b] || (ya.test(b) ? Aa : H);
                if (d !==
                    l)
                    if (null === d) c.removeAttr(a, b);
                    else {
                        if (g && "set" in g && e && (f = g.set(a, d, b)) !== l) return f;
                        a.setAttribute(b, "" + d);
                        return d
                    } else {
                        if (g && "get" in g && e && null !== (f = g.get(a, b))) return f;
                        f = a.getAttribute(b);
                        return null === f ? l : f
                    }
            }
        },
        removeAttr: function (a, b) {
            var d, e, f, g, h = 0;
            if (b && 1 === a.nodeType) {
                e = b.toLowerCase().split(W);
                for (g = e.length; h < g; h++)
                    if (f = e[h]) d = c.propFix[f] || f, c.attr(a, f, ""), a.removeAttribute(za ? f : d), ya.test(f) && d in a && (a[d] = !1)
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (kb.test(a.nodeName) && a.parentNode) c.error("type property can't be changed");
                    else if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) {
                        var d = a.value;
                        a.setAttribute("type", b);
                        d && (a.value = d);
                        return b
                    }
                }
            },
            value: {
                get: function (a, b) {
                    return H && c.nodeName(a, "button") ? H.get(a, b) : b in a ? a.value : null
                },
                set: function (a, b, d) {
                    if (H && c.nodeName(a, "button")) return H.set(a, b, d);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, b, d) {
            var e, f, g = a.nodeType;
            if (a && !(3 === g || 8 === g || 2 === g)) {
                if (1 !== g || !c.isXMLDoc(a)) b = c.propFix[b] || b, f = c.propHooks[b];
                return d !== l ? f && "set" in f && (e = f.set(a, d, b)) !== l ? e : a[b] = d : f && "get" in f && null !== (e = f.get(a, b)) ? e : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = a.getAttributeNode("tabindex");
                    return b && b.specified ? parseInt(b.value, 10) : lb.test(a.nodeName) || mb.test(a.nodeName) && a.href ? 0 : l
                }
            }
        }
    });
    c.attrHooks.tabindex = c.propHooks.tabIndex;
    Aa = {
        get: function (a, b) {
            var d, e = c.prop(a, b);
            return !0 === e || "boolean" !== typeof e && (d = a.getAttributeNode(b)) && !1 !== d.nodeValue ? b.toLowerCase() : l
        },
        set: function (a, b, d) {
            !1 === b ? c.removeAttr(a, d) : (b = c.propFix[d] || d, b in a && (a[b] = !0), a.setAttribute(d, d.toLowerCase()));
            return d
        }
    };
    za || (Ba = {
        name: !0,
        id: !0
    }, H = c.valHooks.button = {
        get: function (a, b) {
            var c;
            return (c = a.getAttributeNode(b)) && (Ba[b] ? "" !== c.nodeValue : c.specified) ? c.nodeValue : l
        },
        set: function (a, b, c) {
            var e = a.getAttributeNode(c);
            e || (e = m.createAttribute(c), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, c.attrHooks.tabindex.set = H.set, c.each(["width", "height"], function (a, b) {
        c.attrHooks[b] = c.extend(c.attrHooks[b], {
            set: function (a, c) {
                if ("" === c) return a.setAttribute(b, "auto"), c
            }
        })
    }), c.attrHooks.contenteditable = {
        get: H.get,
        set: function (a, b, c) {
            "" === b && (b = "false");
            H.set(a, b, c)
        }
    });
    c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function (a, b) {
        c.attrHooks[b] = c.extend(c.attrHooks[b], {
            get: function (a) {
                a = a.getAttribute(b, 2);
                return a === null ? l : a
            }
        })
    });
    c.support.style || (c.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || l
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    });
    c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected, {
        get: function (a) {
            if (a = a.parentNode) {
                a.selectedIndex;
                a.parentNode && a.parentNode.selectedIndex
            }
            return null
        }
    }));
    c.support.enctype || (c.propFix.enctype = "encoding");
    c.support.checkOn || c.each(["radio", "checkbox"], function () {
        c.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    });
    c.each(["radio",
        "checkbox"
    ], function () {
        c.valHooks[this] = c.extend(c.valHooks[this], {
            set: function (a, b) {
                if (c.isArray(b)) return a.checked = c.inArray(c(a).val(), b) >= 0
            }
        })
    });
    var fa = /^(?:textarea|input|select)$/i,
        Ca = /^([^\.]*)?(?:\.(.+))?$/,
        nb = /\bhover(\.\S+)?\b/,
        ob = /^key/,
        pb = /^(?:mouse|contextmenu)|click/,
        Da = /^(?:focusinfocus|focusoutblur)$/,
        qb = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        rb = function (a) {
            if (a = qb.exec(a)) {
                a[1] = (a[1] || "").toLowerCase();
                a[3] = a[3] && RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)")
            }
            return a
        }, Ea = function (a) {
            return c.event.special.hover ?
                a : a.replace(nb, "mouseenter$1 mouseleave$1")
        };
    c.event = {
        add: function (a, b, d, e, f) {
            var g, h, i, j, o, k, q, m, p;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !b || !d || !(g = c._data(a)))) {
                if (d.handler) {
                    q = d;
                    d = q.handler
                }
                if (!d.guid) d.guid = c.guid++;
                i = g.events;
                if (!i) g.events = i = {};
                h = g.handle;
                if (!h) {
                    g.handle = h = function (a) {
                        return typeof c !== "undefined" && (!a || c.event.triggered !== a.type) ? c.event.dispatch.apply(h.elem, arguments) : l
                    };
                    h.elem = a
                }
                b = c.trim(Ea(b)).split(" ");
                for (g = 0; g < b.length; g++) {
                    j = Ca.exec(b[g]) || [];
                    o = j[1];
                    k = (j[2] || "").split(".").sort();
                    p = c.event.special[o] || {};
                    o = (f ? p.delegateType : p.bindType) || o;
                    p = c.event.special[o] || {};
                    j = c.extend({
                        type: o,
                        origType: j[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        quick: rb(f),
                        namespace: k.join(".")
                    }, q);
                    m = i[o];
                    if (!m) {
                        m = i[o] = [];
                        m.delegateCount = 0;
                        if (!p.setup || p.setup.call(a, e, k, h) === false) a.addEventListener ? a.addEventListener(o, h, false) : a.attachEvent && a.attachEvent("on" + o, h)
                    }
                    if (p.add) {
                        p.add.call(a, j);
                        if (!j.handler.guid) j.handler.guid = d.guid
                    }
                    f ? m.splice(m.delegateCount++, 0, j) : m.push(j);
                    c.event.global[o] = true
                }
                a =
                    null
            }
        },
        global: {},
        remove: function (a, b, d, e, f) {
            var g = c.hasData(a) && c._data(a),
                h, i, j, o, l, k, m, p, n, s;
            if (g && (m = g.events)) {
                b = c.trim(Ea(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = Ca.exec(b[h]) || [];
                    j = o = i[1];
                    i = i[2];
                    if (j) {
                        p = c.event.special[j] || {};
                        j = (e ? p.delegateType : p.bindType) || j;
                        n = m[j] || [];
                        l = n.length;
                        i = i ? RegExp("(^|\\.)" + i.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (k = 0; k < n.length; k++) {
                            s = n[k];
                            if ((f || o === s.origType) && (!d || d.guid === s.guid) && (!i || i.test(s.namespace)) && (!e || e === s.selector || e ===
                                "**" && s.selector)) {
                                n.splice(k--, 1);
                                s.selector && n.delegateCount--;
                                p.remove && p.remove.call(a, s)
                            }
                        }
                        if (n.length === 0 && l !== n.length) {
                            (!p.teardown || p.teardown.call(a, i) === false) && c.removeEvent(a, j, g.handle);
                            delete m[j]
                        }
                    } else
                        for (j in m) c.event.remove(a, j + b[h], d, e, true)
                }
                if (c.isEmptyObject(m)) {
                    if (b = g.handle) b.elem = null;
                    c.removeData(a, ["events", "handle"], true)
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (a, b, d, e) {
            if (!d || !(d.nodeType === 3 || d.nodeType === 8)) {
                var f = a.type || a,
                    g = [],
                    h, i, j, o,
                    m;
                if (!Da.test(f + c.event.triggered)) {
                    if (f.indexOf("!") >= 0) {
                        f = f.slice(0, -1);
                        h = true
                    }
                    if (f.indexOf(".") >= 0) {
                        g = f.split(".");
                        f = g.shift();
                        g.sort()
                    }
                    if (d && !c.event.customEvent[f] || c.event.global[f]) {
                        a = typeof a === "object" ? a[c.expando] ? a : new c.Event(f, a) : new c.Event(f);
                        a.type = f;
                        a.isTrigger = true;
                        a.exclusive = h;
                        a.namespace = g.join(".");
                        a.namespace_re = a.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        h = f.indexOf(":") < 0 ? "on" + f : "";
                        if (d) {
                            a.result = l;
                            if (!a.target) a.target = d;
                            b = b != null ? c.makeArray(b) : [];
                            b.unshift(a);
                            j = c.event.special[f] || {};
                            if (!(j.trigger && j.trigger.apply(d, b) === false)) {
                                m = [
                                    [d, j.bindType || f]
                                ];
                                if (!e && !j.noBubble && !c.isWindow(d)) {
                                    o = j.delegateType || f;
                                    g = Da.test(o + f) ? d : d.parentNode;
                                    for (i = null; g; g = g.parentNode) {
                                        m.push([g, o]);
                                        i = g
                                    }
                                    i && i === d.ownerDocument && m.push([i.defaultView || i.parentWindow || k, o])
                                }
                                for (i = 0; i < m.length && !a.isPropagationStopped(); i++) {
                                    g = m[i][0];
                                    a.type = m[i][1];
                                    (o = (c._data(g, "events") || {})[a.type] && c._data(g, "handle")) && o.apply(g, b);
                                    (o = h && g[h]) && c.acceptData(g) && o.apply(g,
                                        b) === false && a.preventDefault()
                                }
                                a.type = f;
                                if (!e && !a.isDefaultPrevented() && (!j._default || j._default.apply(d.ownerDocument, b) === false) && !(f === "click" && c.nodeName(d, "a")) && c.acceptData(d))
                                    if (h && d[f] && (f !== "focus" && f !== "blur" || a.target.offsetWidth !== 0) && !c.isWindow(d)) {
                                        (i = d[h]) && (d[h] = null);
                                        c.event.triggered = f;
                                        d[f]();
                                        c.event.triggered = l;
                                        i && (d[h] = i)
                                    }
                                return a.result
                            }
                        } else {
                            d = c.cache;
                            for (i in d) d[i].events && d[i].events[f] && c.event.trigger(a, b, d[i].handle.elem, true)
                        }
                    }
                }
            }
        },
        dispatch: function (a) {
            var a = c.event.fix(a ||
                k.event),
                b = (c._data(this, "events") || {})[a.type] || [],
                d = b.delegateCount,
                e = [].slice.call(arguments, 0),
                f = !a.exclusive && !a.namespace,
                g = [],
                h, i, j, o, m, q, n;
            e[0] = a;
            a.delegateTarget = this;
            if (d && !a.target.disabled && !(a.button && a.type === "click")) {
                j = c(this);
                j.context = this.ownerDocument || this;
                for (i = a.target; i != this; i = i.parentNode || this) {
                    m = {};
                    q = [];
                    j[0] = i;
                    for (h = 0; h < d; h++) {
                        o = b[h];
                        n = o.selector;
                        if (m[n] === l) {
                            var p = m,
                                s = n,
                                v;
                            if (o.quick) {
                                v = o.quick;
                                var w = i.attributes || {};
                                v = (!v[1] || i.nodeName.toLowerCase() === v[1]) && (!v[2] ||
                                    (w.id || {}).value === v[2]) && (!v[3] || v[3].test((w["class"] || {}).value))
                            } else v = j.is(n);
                            p[s] = v
                        }
                        m[n] && q.push(o)
                    }
                    q.length && g.push({
                        elem: i,
                        matches: q
                    })
                }
            }
            b.length > d && g.push({
                elem: this,
                matches: b.slice(d)
            });
            for (h = 0; h < g.length && !a.isPropagationStopped(); h++) {
                d = g[h];
                a.currentTarget = d.elem;
                for (b = 0; b < d.matches.length && !a.isImmediatePropagationStopped(); b++) {
                    o = d.matches[b];
                    if (f || !a.namespace && !o.namespace || a.namespace_re && a.namespace_re.test(o.namespace)) {
                        a.data = o.data;
                        a.handleObj = o;
                        o = ((c.event.special[o.origType] || {}).handle || o.handler).apply(d.elem, e);
                        if (o !== l) {
                            a.result = o;
                            if (o === false) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                    }
                }
            }
            return a.result
        },
        props: "attrChange,attrName,relatedNode,srcElement,altKey,bubbles,cancelable,ctrlKey,currentTarget,eventPhase,metaKey,relatedTarget,shiftKey,target,timeStamp,view,which".split(","),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function (a, b) {
                if (a.which == null) a.which = b.charCode != null ? b.charCode : b.keyCode;
                return a
            }
        },
        mouseHooks: {
            props: "button,buttons,clientX,clientY,fromElement,offsetX,offsetY,pageX,pageY,screenX,screenY,toElement".split(","),
            filter: function (a, b) {
                var c, e, f = b.button,
                    g = b.fromElement;
                if (a.pageX == null && b.clientX != null) {
                    c = a.target.ownerDocument || m;
                    e = c.documentElement;
                    c = c.body;
                    a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0);
                    a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)
                }
                if (!a.relatedTarget && g) a.relatedTarget = g === a.target ? b.toElement : g;
                if (!a.which && f !== l) a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0;
                return a
            }
        },
        fix: function (a) {
            if (a[c.expando]) return a;
            var b,
                d, e = a,
                f = c.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props,
                a = c.Event(e);
            for (b = g.length; b;) {
                d = g[--b];
                a[d] = e[d]
            }
            if (!a.target) a.target = e.srcElement || m;
            if (a.target.nodeType === 3) a.target = a.target.parentNode;
            if (a.metaKey === l) a.metaKey = a.ctrlKey;
            return f.filter ? f.filter(a, e) : a
        },
        special: {
            ready: {
                setup: c.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (a, b, d) {
                    if (c.isWindow(this)) this.onbeforeunload = d
                },
                teardown: function (a,
                    b) {
                    if (this.onbeforeunload === b) this.onbeforeunload = null
                }
            }
        },
        simulate: function (a, b, d, e) {
            a = c.extend(new c.Event, d, {
                type: a,
                isSimulated: true,
                originalEvent: {}
            });
            e ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
            a.isDefaultPrevented() && d.preventDefault()
        }
    };
    c.event.handle = c.event.dispatch;
    c.removeEvent = m.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, false)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    };
    c.Event = function (a, b) {
        if (!(this instanceof c.Event)) return new c.Event(a,
            b);
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type;
            this.isDefaultPrevented = a.defaultPrevented || a.returnValue === false || a.getPreventDefault && a.getPreventDefault() ? y : x
        } else this.type = a;
        b && c.extend(this, b);
        this.timeStamp = a && a.timeStamp || c.now();
        this[c.expando] = true
    };
    c.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = y;
            var a = this.originalEvent;
            if (a) a.preventDefault ? a.preventDefault() : a.returnValue = false
        },
        stopPropagation: function () {
            this.isPropagationStopped = y;
            var a = this.originalEvent;
            if (a) {
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = true
            }
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = y;
            this.stopPropagation()
        },
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        c.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var e = a.relatedTarget,
                    f = a.handleObj,
                    g;
                if (!e || e !== this && !c.contains(this, e)) {
                    a.type = f.origType;
                    g = f.handler.apply(this, arguments);
                    a.type = b
                }
                return g
            }
        }
    });
    c.support.submitBubbles || (c.event.special.submit = {
        setup: function () {
            if (c.nodeName(this, "form")) return false;
            c.event.add(this, "click._submit keypress._submit", function (a) {
                a = a.target;
                if ((a = c.nodeName(a, "input") || c.nodeName(a, "button") ? a.form : l) && !a._submit_attached) {
                    c.event.add(a, "submit._submit", function (a) {
                        this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, true)
                    });
                    a._submit_attached = true
                }
            })
        },
        teardown: function () {
            if (c.nodeName(this, "form")) return false;
            c.event.remove(this,
                "._submit")
        }
    });
    c.support.changeBubbles || (c.event.special.change = {
        setup: function () {
            if (fa.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                    c.event.add(this, "propertychange._change", function (a) {
                        if (a.originalEvent.propertyName === "checked") this._just_changed = true
                    });
                    c.event.add(this, "click._change", function (a) {
                        if (this._just_changed && !a.isTrigger) {
                            this._just_changed = false;
                            c.event.simulate("change", this, a, true)
                        }
                    })
                }
                return false
            }
            c.event.add(this, "beforeactivate._change", function (a) {
                a = a.target;
                if (fa.test(a.nodeName) && !a._change_attached) {
                    c.event.add(a, "change._change", function (a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && c.event.simulate("change", this.parentNode, a, true)
                    });
                    a._change_attached = true
                }
            })
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            c.event.remove(this, "._change");
            return fa.test(this.nodeName)
        }
    });
    c.support.focusinBubbles || c.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var d = 0,
            e = function (a) {
                c.event.simulate(b, a.target, c.event.fix(a), true)
            };
        c.event.special[b] = {
            setup: function () {
                d++ === 0 && m.addEventListener(a, e, true)
            },
            teardown: function () {
                --d === 0 && m.removeEventListener(a, e, true)
            }
        }
    });
    c.fn.extend({
        on: function (a, b, d, e, f) {
            var g, h;
            if (typeof a === "object") {
                if (typeof b !== "string") {
                    d = b;
                    b = l
                }
                for (h in a) this.on(h, b, d, a[h], f);
                return this
            }
            if (d == null && e == null) {
                e = b;
                d = b = l
            } else if (e == null)
                if (typeof b === "string") {
                    e = d;
                    d = l
                } else {
                    e = d;
                    d = b;
                    b = l
                }
            if (e === false) e = x;
            else if (!e) return this;
            if (f === 1) {
                g = e;
                e = function (a) {
                    c().off(a);
                    return g.apply(this, arguments)
                };
                e.guid = g.guid || (g.guid = c.guid++)
            }
            return this.each(function () {
                c.event.add(this, a, e, d, b)
            })
        },
        one: function (a, b, c, e) {
            return this.on.call(this, a, b, c, e, 1)
        },
        off: function (a, b, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                c(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                return this
            }
            if (typeof a === "object") {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            if (b === false || typeof b ===
                "function") {
                d = b;
                b = l
            }
            d === false && (d = x);
            return this.each(function () {
                c.event.remove(this, a, d, b)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        live: function (a, b, d) {
            c(this.context).on(a, this.selector, b, d);
            return this
        },
        die: function (a, b) {
            c(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function (a, b, c, e) {
            return this.on(b, a, c, e)
        },
        undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function (a,
            b) {
            return this.each(function () {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) return c.event.trigger(a, b, this[0], true)
        },
        toggle: function (a) {
            var b = arguments,
                d = a.guid || c.guid++,
                e = 0,
                f = function (d) {
                    var f = (c._data(this, "lastToggle" + a.guid) || 0) % e;
                    c._data(this, "lastToggle" + a.guid, f + 1);
                    d.preventDefault();
                    return b[f].apply(this, arguments) || false
                };
            for (f.guid = d; e < b.length;) b[e++].guid = d;
            return this.click(f)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    c.each("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(","),
        function (a, b) {
            c.fn[b] = function (a, c) {
                if (c == null) {
                    c = a;
                    a = null
                }
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            };
            c.attrFn && (c.attrFn[b] = true);
            if (ob.test(b)) c.event.fixHooks[b] = c.event.keyHooks;
            if (pb.test(b)) c.event.fixHooks[b] = c.event.mouseHooks
        });
    (function () {
        function a(a, b, c, d, f, g) {
            for (var f = 0, h = d.length; f < h; f++) {
                var i = d[f];
                if (i) {
                    for (var j = false, i = i[a]; i;) {
                        if (i[e] === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (i.nodeType === 1 && !g) {
                            i[e] = c;
                            i.sizset = f
                        }
                        if (i.nodeName.toLowerCase() === b) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[f] = j
                }
            }
        }

        function b(a, b, c, d, f, g) {
            for (var f = 0, h = d.length; f < h; f++) {
                var i = d[f];
                if (i) {
                    for (var j = false, i = i[a]; i;) {
                        if (i[e] === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (i.nodeType === 1) {
                            if (!g) {
                                i[e] = c;
                                i.sizset = f
                            }
                            if (typeof b !== "string") {
                                if (i === b) {
                                    j = true;
                                    break
                                }
                            } else if (q.filter(b, [i]).length > 0) {
                                j = i;
                                break
                            }
                        }
                        i = i[a]
                    }
                    d[f] = j
                }
            }
        }
        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            e = "sizcache" + (Math.random() + "").replace(".", ""),
            f = 0,
            g = Object.prototype.toString,
            h = false,
            i = true,
            j = /\\/g,
            o = /\r\n/g,
            k = /\W/;
        [0, 0].sort(function () {
                i = false;
                return 0
            });
        var q = function (a, b, c, e) {
            var c = c || [],
                f = b = b || m;
            if (b.nodeType !== 1 && b.nodeType !== 9) return [];
            if (!a || typeof a !== "string") return c;
            var h, i, j, o, k, l = true,
                n = q.isXML(b),
                u = [],
                v = a;
            do {
                d.exec("");
                if (h = d.exec(v)) {
                    v = h[3];
                    u.push(h[1]);
                    if (h[2]) {
                        o = h[3];
                        break
                    }
                }
            } while (h);
            if (u.length > 1 && s.exec(a))
                if (u.length === 2 && p.relative[u[0]]) i = x(u[0] + u[1], b, e);
                else
                    for (i = p.relative[u[0]] ? [b] : q(u.shift(), b); u.length;) {
                        a = u.shift();
                        p.relative[a] && (a = a + u.shift());
                        i = x(a, i, e)
                    } else {
                        if (!e && u.length > 1 && b.nodeType === 9 && !n && p.match.ID.test(u[0]) && !p.match.ID.test(u[u.length - 1])) {
                            h = q.find(u.shift(), b, n);
                            b = h.expr ? q.filter(h.expr, h.set)[0] : h.set[0]
                        }
                        if (b) {
                            h = e ? {
                                expr: u.pop(),
                                set: r(e)
                            } : q.find(u.pop(), u.length === 1 && (u[0] === "~" || u[0] === "+") && b.parentNode ? b.parentNode : b, n);
                            i = h.expr ? q.filter(h.expr, h.set) : h.set;
                            for (u.length > 0 ? j = r(i) : l = false; u.length;) {
                                h = k = u.pop();
                                p.relative[k] ? h = u.pop() : k = "";
                                h == null && (h = b);
                                p.relative[k](j, h, n)
                            }
                        } else j = []
                    }
                j || (j = i);
            j || q.error(k || a);
            if (g.call(j) ===
                "[object Array]")
                if (l)
                    if (b && b.nodeType === 1)
                        for (a = 0; j[a] != null; a++) j[a] && (j[a] === true || j[a].nodeType === 1 && q.contains(b, j[a])) && c.push(i[a]);
                    else
                        for (a = 0; j[a] != null; a++) j[a] && j[a].nodeType === 1 && c.push(i[a]);
                    else c.push.apply(c, j);
                    else r(j, c);
            if (o) {
                q(o, f, c, e);
                q.uniqueSort(c)
            }
            return c
        };
        q.uniqueSort = function (a) {
            if (I) {
                h = i;
                a.sort(I);
                if (h)
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        };
        q.matches = function (a, b) {
            return q(a, null, null, b)
        };
        q.matchesSelector = function (a, b) {
            return q(b, null, null, [a]).length > 0
        };
        q.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            e = 0;
            for (f = p.order.length; e < f; e++) {
                h = p.order[e];
                if (g = p.leftMatch[h].exec(a)) {
                    i = g[1];
                    g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, "");
                        d = p.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(p.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        };
        q.filter = function (a, b, c, d) {
            for (var e, f, g, h, i, j, o, k, m = a, n = [], u = b, s = b && b[0] && q.isXML(b[0]); a && b.length;) {
                for (g in p.filter)
                    if ((e =
                        p.leftMatch[g].exec(a)) != null && e[2]) {
                        j = p.filter[g];
                        i = e[1];
                        f = false;
                        e.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            u === n && (n = []);
                            if (p.preFilter[g])
                                if (e = p.preFilter[g](e, u, c, n, d, s)) {
                                    if (e === true) continue
                                } else f = h = true;
                            if (e)
                                for (o = 0;
                                    (i = u[o]) != null; o++)
                                    if (i) {
                                        h = j(i, e, o, u);
                                        k = d ^ h;
                                        if (c && h != null) k ? f = true : u[o] = false;
                                        else if (k) {
                                            n.push(i);
                                            f = true
                                        }
                                    }
                            if (h !== l) {
                                c || (u = n);
                                a = a.replace(p.match[g], "");
                                if (!f) return [];
                                break
                            }
                        }
                    }
                if (a === m)
                    if (f == null) q.error(a);
                    else break;
                m = a
            }
            return u
        };
        q.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " +
                a);
        };
        var n = q.getText = function (a) {
            var b, c;
            b = a.nodeType;
            var d = "";
            if (b)
                if (b === 1 || b === 9) {
                    if (typeof a.textContent === "string") return a.textContent;
                    if (typeof a.innerText === "string") return a.innerText.replace(o, "");
                    for (a = a.firstChild; a; a = a.nextSibling) d = d + n(a)
                } else {
                    if (b === 3 || b === 4) return a.nodeValue
                } else
                    for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (d = d + n(c));
            return d
        }, p = q.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (a) {
                        return a.getAttribute("href")
                    },
                    type: function (a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (a, b) {
                        var c = typeof b === "string",
                            d = c && !k.test(b),
                            c = c && !d;
                        d && (b = b.toLowerCase());
                        for (var d = 0, e = a.length, f; d < e; d++)
                            if (f = a[d]) {
                                for (;
                                    (f = f.previousSibling) && f.nodeType !== 1;);
                                a[d] = c || f && f.nodeName.toLowerCase() === b ? f || false : f === b
                            }
                        c && q.filter(b, a, true)
                    },
                    ">": function (a, b) {
                        var c, d = typeof b === "string",
                            e = 0,
                            f = a.length;
                        if (d && !k.test(b))
                            for (b = b.toLowerCase(); e < f; e++) {
                                if (c = a[e]) {
                                    c = c.parentNode;
                                    a[e] = c.nodeName.toLowerCase() === b ? c : false
                                }
                            } else {
                                for (; e <
                                    f; e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && q.filter(b, a, true)
                            }
                    },
                    "": function (c, d, e) {
                        var g, h = f++,
                            i = b;
                        if (typeof d === "string" && !k.test(d)) {
                            g = d = d.toLowerCase();
                            i = a
                        }
                        i("parentNode", d, h, c, g, e)
                    },
                    "~": function (c, d, e) {
                        var g, h = f++,
                            i = b;
                        if (typeof d === "string" && !k.test(d)) {
                            g = d = d.toLowerCase();
                            i = a
                        }
                        i("previousSibling", d, h, c, g, e)
                    }
                },
                find: {
                    ID: function (a, b, c) {
                        if (typeof b.getElementById !== "undefined" && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                    },
                    NAME: function (a, b) {
                        if (typeof b.getElementsByName !==
                            "undefined") {
                            for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function (a, b) {
                        if (typeof b.getElementsByTagName !== "undefined") return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function (a, b, c, d, e, f) {
                        a = " " + a[1].replace(j, "") + " ";
                        if (f) return a;
                        for (var f = 0, g;
                            (g = b[f]) != null; f++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[f] = false));
                        return false
                    },
                    ID: function (a) {
                        return a[1].replace(j,
                            "")
                    },
                    TAG: function (a) {
                        return a[1].replace(j, "").toLowerCase()
                    },
                    CHILD: function (a) {
                        if (a[1] === "nth") {
                            a[2] || q.error(a[0]);
                            a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0;
                            a[3] = b[3] - 0
                        } else a[2] && q.error(a[0]);
                        a[0] = f++;
                        return a
                    },
                    ATTR: function (a, b, c, d, e, f) {
                        b = a[1] = a[1].replace(j, "");
                        !f && p.attrMap[b] && (a[1] = p.attrMap[b]);
                        a[4] = (a[4] || a[5] || "").replace(j, "");
                        a[2] === "~=" && (a[4] = " " + a[4] +
                            " ");
                        return a
                    },
                    PSEUDO: function (a, b, c, e, f) {
                        if (a[1] === "not")
                            if ((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) a[3] = q(a[3], null, null, b);
                            else {
                                a = q.filter(a[3], b, c, 1 ^ f);
                                c || e.push.apply(e, a);
                                return false
                            } else if (p.match.POS.test(a[0]) || p.match.CHILD.test(a[0])) return true;
                        return a
                    },
                    POS: function (a) {
                        a.unshift(true);
                        return a
                    }
                },
                filters: {
                    enabled: function (a) {
                        return a.disabled === false && a.type !== "hidden"
                    },
                    disabled: function (a) {
                        return a.disabled === true
                    },
                    checked: function (a) {
                        return a.checked === true
                    },
                    selected: function (a) {
                        a.parentNode &&
                            a.parentNode.selectedIndex;
                        return a.selected === true
                    },
                    parent: function (a) {
                        return !!a.firstChild
                    },
                    empty: function (a) {
                        return !a.firstChild
                    },
                    has: function (a, b, c) {
                        return !!q(c[3], a).length
                    },
                    header: function (a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function (a) {
                        var b = a.getAttribute("type"),
                            c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    },
                    radio: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    },
                    checkbox: function (a) {
                        return a.nodeName.toLowerCase() === "input" &&
                            "checkbox" === a.type
                    },
                    file: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    },
                    password: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    },
                    submit: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    },
                    image: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    },
                    reset: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    },
                    input: function (a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function (a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (a, b) {
                        return b === 0
                    },
                    last: function (a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function (a, b) {
                        return b % 2 === 0
                    },
                    odd: function (a, b) {
                        return b % 2 === 1
                    },
                    lt: function (a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function (a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function (a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function (a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function (a,
                        b, c, d) {
                        var e = b[1],
                            f = p.filters[e];
                        if (f) return f(a, c, b, d);
                        if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            b = b[3];
                            c = 0;
                            for (d = b.length; c < d; c++)
                                if (b[c] === a) return false;
                            return true
                        }
                        q.error(e)
                    },
                    CHILD: function (a, b) {
                        var c, d, f, g, h, i;
                        c = b[1];
                        i = a;
                        switch (c) {
                        case "only":
                        case "first":
                            for (; i = i.previousSibling;)
                                if (i.nodeType === 1) return false;
                            if (c === "first") return true;
                            i = a;
                        case "last":
                            for (; i = i.nextSibling;)
                                if (i.nodeType === 1) return false;
                            return true;
                        case "nth":
                            c = b[2];
                            d =
                                b[3];
                            if (c === 1 && d === 0) return true;
                            f = b[0];
                            if ((g = a.parentNode) && (g[e] !== f || !a.nodeIndex)) {
                                h = 0;
                                for (i = g.firstChild; i; i = i.nextSibling)
                                    if (i.nodeType === 1) i.nodeIndex = ++h;
                                g[e] = f
                            }
                            i = a.nodeIndex - d;
                            return c === 0 ? i === 0 : i % c === 0 && i / c >= 0
                        }
                    },
                    ID: function (a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function (a, b) {
                        return b === "*" && a.nodeType === 1 || !! a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function (a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function (a, b) {
                        var c = b[1],
                            c = q.attr ? q.attr(a, c) : p.attrHandle[c] ? p.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            d = c + "",
                            e = b[2],
                            f = b[4];
                        return c == null ? e === "!=" : !e && q.attr ? c != null : e === "=" ? d === f : e === "*=" ? d.indexOf(f) >= 0 : e === "~=" ? (" " + d + " ").indexOf(f) >= 0 : !f ? d && c !== false : e === "!=" ? d !== f : e === "^=" ? d.indexOf(f) === 0 : e === "$=" ? d.substr(d.length - f.length) === f : e === "|=" ? d === f || d.substr(0, f.length + 1) === f + "-" : false
                    },
                    POS: function (a, b, c, d) {
                        var e = p.setFilters[b[2]];
                        if (e) return e(a, c, b, d)
                    }
                }
            }, s = p.match.POS,
            v = function (a, b) {
                return "\\" + (b - 0 + 1)
            },
            w;
        for (w in p.match) {
            p.match[w] = RegExp(p.match[w].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            p.leftMatch[w] = RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[w].source.replace(/\\(\d+)/g, v))
        }
        var r = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(m.documentElement.childNodes, 0)[0].nodeType
        } catch (D) {
            r = function (a, b) {
                var c = 0,
                    d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length === "number")
                    for (var e =
                        a.length; c < e; c++) d.push(a[c]);
                else
                    for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var I, t;
        if (m.documentElement.compareDocumentPosition) I = function (a, b) {
            if (a === b) {
                h = true;
                return 0
            }
            return !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
        };
        else {
            I = function (a, b) {
                if (a === b) {
                    h = true;
                    return 0
                }
                if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                var c, d, e = [],
                    f = [];
                c = a.parentNode;
                d = b.parentNode;
                var g = c;
                if (c === d) return t(a, b);
                if (c) {
                    if (!d) return 1
                } else return -1;
                for (; g;) {
                    e.unshift(g);
                    g = g.parentNode
                }
                for (g = d; g;) {
                    f.unshift(g);
                    g = g.parentNode
                }
                c = e.length;
                d = f.length;
                for (g = 0; g < c && g < d; g++)
                    if (e[g] !== f[g]) return t(e[g], f[g]);
                return g === c ? t(a, f[g], -1) : t(e[g], b, 1)
            };
            t = function (a, b, c) {
                if (a === b) return c;
                for (a = a.nextSibling; a;) {
                    if (a === b) return -1;
                    a = a.nextSibling
                }
                return 1
            }
        }(function () {
            var a = m.createElement("div"),
                b = "script" + (new Date).getTime(),
                c = m.documentElement;
            a.innerHTML = "<a name='" + b + "'/>";
            c.insertBefore(a, c.firstChild);
            if (m.getElementById(b)) {
                p.find.ID = function (a, b,
                    c) {
                    if (typeof b.getElementById !== "undefined" && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id").nodeValue === a[1] ? [b] : l : []
                };
                p.filter.ID = function (a, b) {
                    var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
                    return a.nodeType === 1 && c && c.nodeValue === b
                }
            }
            c.removeChild(a);
            c = a = null
        })();
        (function () {
            var a = m.createElement("div");
            a.appendChild(m.createComment(""));
            if (a.getElementsByTagName("*").length > 0) p.find.TAG = function (a, b) {
                var c =
                    b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    for (var d = [], e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            };
            a.innerHTML = "<a href='#'></a>";
            if (a.firstChild && typeof a.firstChild.getAttribute !== "undefined" && a.firstChild.getAttribute("href") !== "#") p.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            };
            a = null
        })();
        m.querySelectorAll && function () {
            var a = q,
                b = m.createElement("div");
            b.innerHTML = "<p class='TEST'></p>";
            if (!(b.querySelectorAll && b.querySelectorAll(".TEST").length === 0)) {
                q = function (b,
                    c, d, e) {
                    c = c || m;
                    if (!e && !q.isXML(c)) {
                        var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (f && (c.nodeType === 1 || c.nodeType === 9)) {
                            if (f[1]) return r(c.getElementsByTagName(b), d);
                            if (f[2] && p.find.CLASS && c.getElementsByClassName) return r(c.getElementsByClassName(f[2]), d)
                        }
                        if (c.nodeType === 9) {
                            if (b === "body" && c.body) return r([c.body], d);
                            if (f && f[3]) {
                                var g = c.getElementById(f[3]);
                                if (g && g.parentNode) {
                                    if (g.id === f[3]) return r([g], d)
                                } else return r([], d)
                            }
                            try {
                                return r(c.querySelectorAll(b), d)
                            } catch (h) {}
                        } else if (c.nodeType ===
                            1 && c.nodeName.toLowerCase() !== "object") {
                            var f = c,
                                i = (g = c.getAttribute("id")) || "__sizzle__",
                                j = c.parentNode,
                                o = /^\s*[+~]/.test(b);
                            g ? i = i.replace(/'/g, "\\$&") : c.setAttribute("id", i);
                            if (o && j) c = c.parentNode;
                            try {
                                if (!o || j) return r(c.querySelectorAll("[id='" + i + "'] " + b), d)
                            } catch (k) {} finally {
                                g || f.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, c, d, e)
                };
                for (var c in a) q[c] = a[c];
                b = null
            }
        }();
        (function () {
            var a = m.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var c = !b.call(m.createElement("div"),
                    "div"),
                    d = false;
                try {
                    b.call(m.documentElement, "[test!='']:sizzle")
                } catch (e) {
                    d = true
                }
                q.matchesSelector = function (a, e) {
                    e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!q.isXML(a)) try {
                        if (d || !p.match.PSEUDO.test(e) && !/!=/.test(e)) {
                            var f = b.call(a, e);
                            if (f || !c || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {}
                    return q(e, null, null, [a]).length > 0
                }
            }
        })();
        (function () {
            var a = m.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (a.getElementsByClassName && a.getElementsByClassName("e").length !==
                0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length !== 1) {
                    p.order.splice(1, 0, "CLASS");
                    p.find.CLASS = function (a, b, c) {
                        if (typeof b.getElementsByClassName !== "undefined" && !c) return b.getElementsByClassName(a[1])
                    };
                    a = null
                }
            }
        })();
        q.contains = m.documentElement.contains ? function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : true)
        } : m.documentElement.compareDocumentPosition ? function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : function () {
            return false
        };
        q.isXML = function (a) {
            return (a = (a ? a.ownerDocument ||
                a : 0).documentElement) ? a.nodeName !== "HTML" : false
        };
        var x = function (a, b, c) {
            for (var d, e = [], f = "", b = b.nodeType ? [b] : b; d = p.match.PSEUDO.exec(a);) {
                f = f + d[0];
                a = a.replace(p.match.PSEUDO, "")
            }
            a = p.relative[a] ? a + "*" : a;
            d = 0;
            for (var g = b.length; d < g; d++) q(a, b[d], e, c);
            return q.filter(f, e)
        };
        q.attr = c.attr;
        q.selectors.attrMap = {};
        c.find = q;
        c.expr = q.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = q.uniqueSort;
        c.text = q.getText;
        c.isXMLDoc = q.isXML;
        c.contains = q.contains
    })();
    var sb = /Until$/,
        tb = /^(?:parents|prevUntil|prevAll)/,
        ub = /,/,
        Xa = /^.[^:#\[\.,]*$/,
        vb = Array.prototype.slice,
        Fa = c.expr.match.POS,
        wb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    c.fn.extend({
        find: function (a) {
            var b = this,
                d, e;
            if (typeof a !== "string") return c(a).filter(function () {
                d = 0;
                for (e = b.length; d < e; d++)
                    if (c.contains(b[d], this)) return true
            });
            var f = this.pushStack("", "find", a),
                g, h, i;
            d = 0;
            for (e = this.length; d < e; d++) {
                g = f.length;
                c.find(a, this[d], f);
                if (d > 0)
                    for (h = g; h < f.length; h++)
                        for (i = 0; i < g; i++)
                            if (f[i] === f[h]) {
                                f.splice(h--, 1);
                                break
                            }
            }
            return f
        },
        has: function (a) {
            var b = c(a);
            return this.filter(function () {
                for (var a =
                    0, e = b.length; a < e; a++)
                    if (c.contains(this, b[a])) return true
            })
        },
        not: function (a) {
            return this.pushStack(A(this, a, false), "not", a)
        },
        filter: function (a) {
            return this.pushStack(A(this, a, true), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a === "string" ? Fa.test(a) ? c(a, this.context).index(this[0]) >= 0 : c.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var d = [],
                e, f, g = this[0];
            if (c.isArray(a)) {
                for (f = 1; g && g.ownerDocument && g !== b;) {
                    for (e = 0; e < a.length; e++) c(g).is(a[e]) && d.push({
                        selector: a[e],
                        elem: g,
                        level: f
                    });
                    g = g.parentNode;
                    f++
                }
                return d
            }
            var h = Fa.test(a) || typeof a !== "string" ? c(a, b || this.context) : 0;
            e = 0;
            for (f = this.length; e < f; e++)
                for (g = this[e]; g;)
                    if (h ? h.index(g) > -1 : c.find.matchesSelector(g, a)) {
                        d.push(g);
                        break
                    } else {
                        g = g.parentNode;
                        if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                    }
            d = d.length > 1 ? c.unique(d) : d;
            return this.pushStack(d, "closest", a)
        },
        index: function (a) {
            return !a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : typeof a === "string" ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var d = typeof a === "string" ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a),
                e = c.merge(this.get(), d);
            return this.pushStack(!d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 || !e[0] || !e[0].parentNode || e[0].parentNode.nodeType === 11 ? e : c.unique(e))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent: function (a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        },
        parents: function (a) {
            return c.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, d) {
            return c.dir(a, "parentNode", d)
        },
        next: function (a) {
            return c.nth(a,
                2, "nextSibling")
        },
        prev: function (a) {
            return c.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return c.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return c.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, d) {
            return c.dir(a, "nextSibling", d)
        },
        prevUntil: function (a, b, d) {
            return c.dir(a, "previousSibling", d)
        },
        siblings: function (a) {
            return c.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return c.sibling(a.firstChild)
        },
        contents: function (a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document :
                c.makeArray(a.childNodes)
        }
    }, function (a, b) {
        c.fn[a] = function (d, e) {
            var f = c.map(this, b, d);
            sb.test(a) || (e = d);
            e && typeof e === "string" && (f = c.filter(e, f));
            f = this.length > 1 && !wb[a] ? c.unique(f) : f;
            if ((this.length > 1 || ub.test(e)) && tb.test(a)) f = f.reverse();
            return this.pushStack(f, a, vb.call(arguments).join(","))
        }
    });
    c.extend({
        filter: function (a, b, d) {
            d && (a = ":not(" + a + ")");
            return b.length === 1 ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
        },
        dir: function (a, b, d) {
            for (var e = [], a = a[b]; a && a.nodeType !== 9 && (d === l ||
                a.nodeType !== 1 || !c(a).is(d));) {
                a.nodeType === 1 && e.push(a);
                a = a[b]
            }
            return e
        },
        nth: function (a, b, c) {
            for (var b = b || 1, e = 0; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var ka = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        xb = / jQuery\d+="(?:\d+|null)"/g,
        ga = /^\s+/,
        Ga = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Ha = /<([\w:]+)/,
        yb = /<tbody/i,
        zb = /<|&#?\w+;/,
        Ab = /<(?:script|style)/i,
        Bb = /<(?:script|object|embed|option|style)/i,
        Ia = RegExp("<(?:" + ka + ")", "i"),
        Ja = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Cb = /\/(java|ecma)script/i,
        Za = /^\s*<!(?:\[CDATA\[|\-\-)/,
        E = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, Ka = w(m);
    E.optgroup = E.option;
    E.tbody = E.tfoot = E.colgroup = E.caption = E.thead;
    E.th = E.td;
    c.support.htmlSerialize || (E._default = [1, "div<div>", "</div>"]);
    c.fn.extend({
        text: function (a) {
            return c.isFunction(a) ? this.each(function (b) {
                var d = c(this);
                d.text(a.call(this, b, d.text()))
            }) : typeof a !== "object" && a !== l ? this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(a)) : c.text(this)
        },
        wrapAll: function (a) {
            if (c.isFunction(a)) return this.each(function (b) {
                c(this).wrapAll(a.call(this,
                    b))
            });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var a = this; a.firstChild && a.firstChild.nodeType === 1;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return c.isFunction(a) ? this.each(function (b) {
                c(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = c(this),
                    d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = c.isFunction(a);
            return this.each(function (d) {
                c(this).wrapAll(b ?
                    a.call(this, d) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, true, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (a) {
                this.parentNode.insertBefore(a,
                    this)
            });
            if (arguments.length) {
                var a = c.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, c.clean(arguments));
                return a
            }
        },
        remove: function (a, b) {
            for (var d = 0, e;
                (e = this[d]) != null; d++)
                if (!a || c.filter(a, [e]).length) {
                    if (!b && e.nodeType === 1) {
                        c.cleanData(e.getElementsByTagName("*"));
                        c.cleanData([e])
                    }
                    e.parentNode && e.parentNode.removeChild(e)
                }
            return this
        },
        empty: function () {
            for (var a = 0, b;
                (b = this[a]) != null; a++)
                for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function (a, b) {
            a = a == null ? false : a;
            b = b == null ? a : b;
            return this.map(function () {
                return c.clone(this, a, b)
            })
        },
        html: function (a) {
            if (a === l) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(xb, "") : null;
            if (typeof a === "string" && !Ab.test(a) && (c.support.leadingWhitespace || !ga.test(a)) && !E[(Ha.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Ga, "<$1></$2>");
                try {
                    for (var b = 0, d = this.length; b < d; b++)
                        if (this[b].nodeType === 1) {
                            c.cleanData(this[b].getElementsByTagName("*"));
                            this[b].innerHTML = a
                        }
                } catch (e) {
                    this.empty().append(a)
                }
            } else c.isFunction(a) ? this.each(function (b) {
                var d = c(this);
                d.html(a.call(this, b, d.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(a)) return this.each(function (b) {
                    var d = c(this),
                        e = d.html();
                    d.replaceWith(a.call(this, b, e))
                });
                typeof a !== "string" && (a = c(a).detach());
                return this.each(function () {
                    var b = this.nextSibling,
                        d = this.parentNode;
                    c(this).remove();
                    b ? c(b).before(a) : c(d).append(a)
                })
            }
            return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, true)
        },
        domManip: function (a, b, d) {
            var e, f, g, h = a[0],
                i = [];
            if (!c.support.checkClone && arguments.length === 3 && typeof h === "string" && Ja.test(h)) return this.each(function () {
                c(this).domManip(a, b, d, true)
            });
            if (c.isFunction(h)) return this.each(function (e) {
                var f = c(this);
                a[0] = h.call(this, e, b ? f.html() : l);
                f.domManip(a, b, d)
            });
            if (this[0]) {
                e = h && h.parentNode;
                e = c.support.parentNode && e && e.nodeType === 11 && e.childNodes.length === this.length ? {
                    fragment: e
                } : c.buildFragment(a, this, i);
                g = e.fragment;
                if (f = g.childNodes.length === 1 ? g = g.firstChild : g.firstChild) {
                    b = b && c.nodeName(f, "tr");
                    f = 0;
                    for (var j = this.length, o = j - 1; f < j; f++) d.call(b ? c.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) :
                        this[f] : this[f], e.cacheable || j > 1 && f < o ? c.clone(g, true, true) : g)
                }
                i.length && c.each(i, Ya)
            }
            return this
        }
    });
    c.buildFragment = function (a, b, d) {
        var e, f, g, h, i = a[0];
        b && b[0] && (h = b[0].ownerDocument || b[0]);
        h.createDocumentFragment || (h = m);
        if (a.length === 1 && typeof i === "string" && i.length < 512 && h === m && i.charAt(0) === "<" && !Bb.test(i) && (c.support.checkClone || !Ja.test(i)) && (c.support.html5Clone || !Ia.test(i))) {
            f = true;
            (g = c.fragments[i]) && g !== 1 && (e = g)
        }
        if (!e) {
            e = h.createDocumentFragment();
            c.clean(a, h, e, d)
        }
        f && (c.fragments[i] = g ? e :
            1);
        return {
            fragment: e,
            cacheable: f
        }
    };
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        c.fn[a] = function (d) {
            var e = [],
                d = c(d),
                f = this.length === 1 && this[0].parentNode;
            if (f && f.nodeType === 11 && f.childNodes.length === 1 && d.length === 1) {
                d[b](this[0]);
                return this
            }
            for (var f = 0, g = d.length; f < g; f++) {
                var h = (f > 0 ? this.clone(true) : this).get();
                c(d[f])[b](h);
                e = e.concat(h)
            }
            return this.pushStack(e, a, d.selector)
        }
    });
    c.extend({
        clone: function (a,
            b, d) {
            var e, f, g;
            if (c.support.html5Clone || !Ia.test("<" + a.nodeName)) e = a.cloneNode(true);
            else {
                e = m.createElement("div");
                Ka.appendChild(e);
                e.innerHTML = a.outerHTML;
                e = e.firstChild
            }
            var h = e;
            if ((!c.support.noCloneEvent || !c.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !c.isXMLDoc(a)) {
                v(a, h);
                e = D(a);
                f = D(h);
                for (g = 0; e[g]; ++g) f[g] && v(e[g], f[g])
            }
            if (b) {
                r(a, h);
                if (d) {
                    e = D(a);
                    f = D(h);
                    for (g = 0; e[g]; ++g) r(e[g], f[g])
                }
            }
            return h
        },
        clean: function (a, b, d, e) {
            b = b || m;
            typeof b.createElement === "undefined" && (b = b.ownerDocument ||
                b[0] && b[0].ownerDocument || m);
            for (var f = [], g, h = 0, i;
                (i = a[h]) != null; h++) {
                typeof i === "number" && (i = i + "");
                if (i) {
                    if (typeof i === "string")
                        if (zb.test(i)) {
                            i = i.replace(Ga, "<$1></$2>");
                            g = (Ha.exec(i) || ["", ""])[1].toLowerCase();
                            var j = E[g] || E._default,
                                o = j[0],
                                k = b.createElement("div");
                            b === m ? Ka.appendChild(k) : w(b).appendChild(k);
                            for (k.innerHTML = j[1] + i + j[2]; o--;) k = k.lastChild;
                            if (!c.support.tbody) {
                                o = yb.test(i);
                                j = g === "table" && !o ? k.firstChild && k.firstChild.childNodes : j[1] === "<table>" && !o ? k.childNodes : [];
                                for (g = j.length -
                                    1; g >= 0; --g) c.nodeName(j[g], "tbody") && !j[g].childNodes.length && j[g].parentNode.removeChild(j[g])
                            }!c.support.leadingWhitespace && ga.test(i) && k.insertBefore(b.createTextNode(ga.exec(i)[0]), k.firstChild);
                            i = k.childNodes
                        } else i = b.createTextNode(i);
                    var l;
                    if (!c.support.appendChecked)
                        if (i[0] && typeof (l = i.length) === "number")
                            for (g = 0; g < l; g++) la(i[g]);
                        else la(i);
                    i.nodeType ? f.push(i) : f = c.merge(f, i)
                }
            }
            if (d) {
                a = function (a) {
                    return !a.type || Cb.test(a.type)
                };
                for (h = 0; f[h]; h++)
                    if (e && c.nodeName(f[h], "script") && (!f[h].type ||
                        f[h].type.toLowerCase() === "text/javascript")) e.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]);
                    else {
                        if (f[h].nodeType === 1) {
                            b = c.grep(f[h].getElementsByTagName("script"), a);
                            f.splice.apply(f, [h + 1, 0].concat(b))
                        }
                        d.appendChild(f[h])
                    }
            }
            return f
        },
        cleanData: function (a) {
            for (var b, d, e = c.cache, f = c.event.special, g = c.support.deleteExpando, h = 0, i;
                (i = a[h]) != null; h++)
                if (!i.nodeName || !c.noData[i.nodeName.toLowerCase()])
                    if (d = i[c.expando]) {
                        if ((b = e[d]) && b.events) {
                            for (var j in b.events) f[j] ? c.event.remove(i,
                                j) : c.removeEvent(i, j, b.handle);
                            if (b.handle) b.handle.elem = null
                        }
                        g ? delete i[c.expando] : i.removeAttribute && i.removeAttribute(c.expando);
                        delete e[d]
                    }
        }
    });
    var ha = /alpha\([^)]*\)/i,
        Db = /opacity=([^)]*)/,
        Eb = /([A-Z]|^ms)/g,
        La = /^-?\d+(?:px)?$/i,
        Fb = /^-?\d/,
        Gb = /^([\-+])=([\-+.\de]+)/,
        Hb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, $a = ["Left", "Right"],
        ab = ["Top", "Bottom"],
        J, Ma, Na;
    c.fn.css = function (a, b) {
        return arguments.length === 2 && b === l ? this : c.access(this, a, b, true, function (a, b, f) {
            return f !== l ? c.style(a,
                b, f) : c.css(a, b)
        })
    };
    c.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = J(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, d, e) {
            if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
                var f, g = c.camelCase(b),
                    h = a.style,
                    i = c.cssHooks[g],
                    b = c.cssProps[g] || g;
                if (d !== l) {
                    e = typeof d;
                    if (e === "string" && (f = Gb.exec(d))) {
                        d = +(f[1] + 1) * +f[2] + parseFloat(c.css(a, b));
                        e = "number"
                    }
                    if (!(d == null || e === "number" && isNaN(d))) {
                        e === "number" && !c.cssNumber[g] && (d = d + "px");
                        if (!i || !("set" in i) || (d = i.set(a, d)) !== l) try {
                            h[b] = d
                        } catch (j) {}
                    }
                } else return i && "get" in i && (f = i.get(a, false, e)) !== l ? f : h[b]
            }
        },
        css: function (a, b, d) {
            var e, f, b = c.camelCase(b);
            f = c.cssHooks[b];
            b = c.cssProps[b] || b;
            b === "cssFloat" && (b = "float");
            if (f && "get" in f && (e = f.get(a, true, d)) !== l) return e;
            if (J) return J(a, b)
        },
        swap: function (a, b, c) {
            var e = {}, f;
            for (f in b) {
                e[f] = a.style[f];
                a.style[f] =
                    b[f]
            }
            c.call(a);
            for (f in b) a.style[f] = e[f]
        }
    });
    c.curCSS = c.css;
    c.each(["height", "width"], function (a, b) {
        c.cssHooks[b] = {
            get: function (a, e, f) {
                var g;
                if (e) {
                    if (a.offsetWidth !== 0) return ma(a, b, f);
                    c.swap(a, Hb, function () {
                        g = ma(a, b, f)
                    });
                    return g
                }
            },
            set: function (a, b) {
                if (La.test(b)) {
                    b = parseFloat(b);
                    if (b >= 0) return b + "px"
                } else return b
            }
        }
    });
    c.support.opacity || (c.cssHooks.opacity = {
        get: function (a, b) {
            return Db.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a,
            b) {
            var d = a.style,
                e = a.currentStyle,
                f = c.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = e && e.filter || d.filter || "";
            d.zoom = 1;
            if (b >= 1 && c.trim(g.replace(ha, "")) === "") {
                d.removeAttribute("filter");
                if (e && !e.filter) return
            }
            d.filter = ha.test(g) ? g.replace(ha, f) : g + " " + f
        }
    });
    c(function () {
        if (!c.support.reliableMarginRight) c.cssHooks.marginRight = {
            get: function (a, b) {
                var d;
                c.swap(a, {
                    display: "inline-block"
                }, function () {
                    d = b ? J(a, "margin-right", "marginRight") : a.style.marginRight
                });
                return d
            }
        }
    });
    m.defaultView && m.defaultView.getComputedStyle &&
        (Ma = function (a, b) {
        var d, e, f, b = b.replace(Eb, "-$1").toLowerCase();
        if ((e = a.ownerDocument.defaultView) && (f = e.getComputedStyle(a, null))) {
            d = f.getPropertyValue(b);
            d === "" && !c.contains(a.ownerDocument.documentElement, a) && (d = c.style(a, b))
        }
        return d
    });
    m.documentElement.currentStyle && (Na = function (a, b) {
        var c, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        if (f === null && g && (c = g[b])) f = c;
        if (!La.test(f) && Fb.test(f)) {
            c = g.left;
            if (e = a.runtimeStyle && a.runtimeStyle.left) a.runtimeStyle.left = a.currentStyle.left;
            g.left = b ===
                "fontSize" ? "1em" : f || 0;
            f = g.pixelLeft + "px";
            g.left = c;
            if (e) a.runtimeStyle.left = e
        }
        return f === "" ? "auto" : f
    });
    J = Ma || Na;
    c.expr && c.expr.filters && (c.expr.filters.hidden = function (a) {
        var b = a.offsetHeight;
        return a.offsetWidth === 0 && b === 0 || !c.support.reliableHiddenOffsets && (a.style && a.style.display || c.css(a, "display")) === "none"
    }, c.expr.filters.visible = function (a) {
        return !c.expr.filters.hidden(a)
    });
    var Ib = /%20/g,
        bb = /\[\]$/,
        Oa = /\r?\n/g,
        Jb = /#.*$/,
        Kb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Lb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Mb = /^(?:GET|HEAD)$/,
        Nb = /^\/\//,
        Pa = /\?/,
        Ob = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Pb = /^(?:select|textarea)/i,
        oa = /\s+/,
        Qb = /([?&])_=[^&]*/,
        Qa = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        Ra = c.fn.load,
        Z = {}, Sa = {}, O, L, Ta = ["*/"] + ["*"];
    try {
        O = eb.href
    } catch (Wb) {
        O = m.createElement("a"), O.href = "", O = O.href
    }
    L = Qa.exec(O.toLowerCase()) || [];
    c.fn.extend({
        load: function (a, b, d) {
            if (typeof a !== "string" && Ra) return Ra.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) var f = a.slice(e,
                a.length),
            a = a.slice(0, e);
            e = "GET";
            if (b)
                if (c.isFunction(b)) {
                    d = b;
                    b = l
                } else if (typeof b === "object") {
                b = c.param(b, c.ajaxSettings.traditional);
                e = "POST"
            }
            var g = this;
            c.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b,
                complete: function (a, b, e) {
                    e = a.responseText;
                    if (a.isResolved()) {
                        a.done(function (a) {
                            e = a
                        });
                        g.html(f ? c("<div>").append(e.replace(Ob, "")).find(f) : e)
                    }
                    d && g.each(d, [e, b, a])
                }
            });
            return this
        },
        serialize: function () {
            return c.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ?
                    c.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Pb.test(this.nodeName) || Lb.test(this.type))
            }).map(function (a, b) {
                var d = c(this).val();
                return d == null ? null : c.isArray(d) ? c.map(d, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Oa, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: d.replace(Oa, "\r\n")
                }
            }).get()
        }
    });
    c.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function (a, b) {
        c.fn[b] = function (a) {
            return this.on(b, a)
        }
    });
    c.each(["get", "post"],
        function (a, b) {
            c[b] = function (a, e, f, g) {
                if (c.isFunction(e)) {
                    g = g || f;
                    f = e;
                    e = l
                }
                return c.ajax({
                    type: b,
                    url: a,
                    data: e,
                    success: f,
                    dataType: g
                })
            }
        });
    c.extend({
        getScript: function (a, b) {
            return c.get(a, l, b, "script")
        },
        getJSON: function (a, b, d) {
            return c.get(a, b, d, "json")
        },
        ajaxSetup: function (a, b) {
            if (b) pa(a, c.ajaxSettings);
            else {
                b = a;
                a = c.ajaxSettings
            }
            pa(a, b);
            return a
        },
        ajaxSettings: {
            url: O,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(L[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Ta
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": k.String,
                "text html": !0,
                "text json": c.parseJSON,
                "text xml": c.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: na(Z),
        ajaxTransport: na(Sa),
        ajax: function (a, b) {
            function d(a, b, d, m) {
                if (w !== 2) {
                    w = 2;
                    v && clearTimeout(v);
                    s = l;
                    n = m || "";
                    t.readyState =
                        a > 0 ? 4 : 0;
                    var q, p, u, m = b;
                    if (d) {
                        var r = e,
                            x = t,
                            z = r.contents,
                            D = r.dataTypes,
                            B = r.responseFields,
                            y, C, A, E;
                        for (C in B) C in d && (x[B[C]] = d[C]);
                        for (; D[0] === "*";) {
                            D.shift();
                            y === l && (y = r.mimeType || x.getResponseHeader("content-type"))
                        }
                        if (y)
                            for (C in z)
                                if (z[C] && z[C].test(y)) {
                                    D.unshift(C);
                                    break
                                }
                        if (D[0] in d) A = D[0];
                        else {
                            for (C in d) {
                                if (!D[0] || r.converters[C + " " + D[0]]) {
                                    A = C;
                                    break
                                }
                                E || (E = C)
                            }
                            A = A || E
                        } if (A) {
                            A !== D[0] && D.unshift(A);
                            d = d[A]
                        } else d = void 0
                    } else d = l; if (a >= 200 && a < 300 || a === 304) {
                        if (e.ifModified) {
                            if (y = t.getResponseHeader("Last-Modified")) c.lastModified[k] =
                                y;
                            if (y = t.getResponseHeader("Etag")) c.etag[k] = y
                        }
                        if (a === 304) {
                            m = "notmodified";
                            q = true
                        } else try {
                            y = e;
                            y.dataFilter && (d = y.dataFilter(d, y.dataType));
                            var G = y.dataTypes;
                            C = {};
                            var F, H, O = G.length,
                                L, P = G[0],
                                J, M, Q, S, K;
                            for (F = 1; F < O; F++) {
                                if (F === 1)
                                    for (H in y.converters) typeof H === "string" && (C[H.toLowerCase()] = y.converters[H]);
                                J = P;
                                P = G[F];
                                if (P === "*") P = J;
                                else if (J !== "*" && J !== P) {
                                    M = J + " " + P;
                                    Q = C[M] || C["* " + P];
                                    if (!Q) {
                                        K = l;
                                        for (S in C) {
                                            L = S.split(" ");
                                            if (L[0] === J || L[0] === "*")
                                                if (K = C[L[1] + " " + P]) {
                                                    S = C[S];
                                                    S === true ? Q = K : K === true && (Q = S);
                                                    break
                                                }
                                        }
                                    }!Q && !K && c.error("No conversion from " + M.replace(" ", " to "));
                                    Q !== true && (d = Q ? Q(d) : K(S(d)))
                                }
                            }
                            p = d;
                            m = "success";
                            q = true
                        } catch (R) {
                            m = "parsererror";
                            u = R
                        }
                    } else {
                        u = m;
                        if (!m || a) {
                            m = "error";
                            a < 0 && (a = 0)
                        }
                    }
                    t.status = a;
                    t.statusText = "" + (b || m);
                    q ? h.resolveWith(f, [p, m, t]) : h.rejectWith(f, [t, m, u]);
                    t.statusCode(j);
                    j = l;
                    I && g.trigger("ajax" + (q ? "Success" : "Error"), [t, e, q ? p : u]);
                    i.fireWith(f, [t, m]);
                    if (I) {
                        g.trigger("ajaxComplete", [t, e]);
                        --c.active || c.event.trigger("ajaxStop")
                    }
                }
            }
            if (typeof a === "object") {
                b = a;
                a = l
            }
            var b = b || {}, e = c.ajaxSetup({},
                    b),
                f = e.context || e,
                g = f !== e && (f.nodeType || f instanceof c) ? c(f) : c.event,
                h = c.Deferred(),
                i = c.Callbacks("once memory"),
                j = e.statusCode || {}, k, m = {}, q = {}, n, p, s, v, r, w = 0,
                I, x, t = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!w) {
                            var c = a.toLowerCase(),
                                a = q[c] = q[c] || a;
                            m[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return w === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var b;
                        if (w === 2) {
                            if (!p)
                                for (p = {}; b = Kb.exec(n);) p[b[1].toLowerCase()] = b[2];
                            b = p[a.toLowerCase()]
                        }
                        return b === l ? null : b
                    },
                    overrideMimeType: function (a) {
                        if (!w) e.mimeType =
                            a;
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort";
                        s && s.abort(a);
                        d(0, a);
                        return this
                    }
                };
            h.promise(t);
            t.success = t.done;
            t.error = t.fail;
            t.complete = i.add;
            t.statusCode = function (a) {
                if (a) {
                    var b;
                    if (w < 2)
                        for (b in a) j[b] = [j[b], a[b]];
                    else {
                        b = a[t.status];
                        t.then(b, b)
                    }
                }
                return this
            };
            e.url = ((a || e.url) + "").replace(Jb, "").replace(Nb, L[1] + "//");
            e.dataTypes = c.trim(e.dataType || "*").toLowerCase().split(oa);
            if (e.crossDomain == null) {
                r = Qa.exec(e.url.toLowerCase());
                e.crossDomain = !(!r || !(r[1] != L[1] || r[2] != L[2] || (r[3] || (r[1] === "http:" ?
                    80 : 443)) != (L[3] || (L[1] === "http:" ? 80 : 443))))
            }
            if (e.data && e.processData && typeof e.data !== "string") e.data = c.param(e.data, e.traditional);
            U(Z, e, b, t);
            if (w === 2) return false;
            I = e.global;
            e.type = e.type.toUpperCase();
            e.hasContent = !Mb.test(e.type);
            I && c.active++ === 0 && c.event.trigger("ajaxStart");
            if (!e.hasContent) {
                if (e.data) {
                    e.url = e.url + ((Pa.test(e.url) ? "&" : "?") + e.data);
                    delete e.data
                }
                k = e.url;
                if (e.cache === false) {
                    r = c.now();
                    var D = e.url.replace(Qb, "$1_=" + r);
                    e.url = D + (D === e.url ? (Pa.test(e.url) ? "&" : "?") + "_=" + r : "")
                }
            }(e.data &&
                e.hasContent && e.contentType !== false || b.contentType) && t.setRequestHeader("Content-Type", e.contentType);
            if (e.ifModified) {
                k = k || e.url;
                c.lastModified[k] && t.setRequestHeader("If-Modified-Since", c.lastModified[k]);
                c.etag[k] && t.setRequestHeader("If-None-Match", c.etag[k])
            }
            t.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + (e.dataTypes[0] !== "*" ? ", " + Ta + "; q=0.01" : "") : e.accepts["*"]);
            for (x in e.headers) t.setRequestHeader(x, e.headers[x]);
            if (e.beforeSend && (e.beforeSend.call(f,
                t, e) === false || w === 2)) {
                t.abort();
                return false
            }
            for (x in {
                success: 1,
                error: 1,
                complete: 1
            }) t[x](e[x]);
            if (s = U(Sa, e, b, t)) {
                t.readyState = 1;
                I && g.trigger("ajaxSend", [t, e]);
                e.async && e.timeout > 0 && (v = setTimeout(function () {
                    t.abort("timeout")
                }, e.timeout));
                try {
                    w = 1;
                    s.send(m, d)
                } catch (z) {
                    if (w < 2) d(-1, z);
                    else throw z;
                }
            } else d(-1, "No Transport");
            return t
        },
        param: function (a, b) {
            var d = [],
                e = function (a, b) {
                    b = c.isFunction(b) ? b() : b;
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (b === l) b = c.ajaxSettings.traditional;
            if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (var f in a) $(f, a[f], b, e);
            return d.join("&").replace(Ib, "+")
        }
    });
    c.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Rb = c.now(),
        X = /(\=)\?(&|$)|\?\?/i;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return c.expando + "_" + Rb++
        }
    });
    c.ajaxPrefilter("json jsonp", function (a, b, d) {
        b = a.contentType === "application/x-www-form-urlencoded" && typeof a.data === "string";
        if (a.dataTypes[0] === "jsonp" || a.jsonp !== false &&
            (X.test(a.url) || b && X.test(a.data))) {
            var e, f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
                g = k[f],
                h = a.url,
                i = a.data,
                j = "$1" + f + "$2";
            if (a.jsonp !== false) {
                h = h.replace(X, j);
                if (a.url === h) {
                    b && (i = i.replace(X, j));
                    a.data === i && (h = h + ((/\?/.test(h) ? "&" : "?") + a.jsonp + "=" + f))
                }
            }
            a.url = h;
            a.data = i;
            k[f] = function (a) {
                e = [a]
            };
            d.always(function () {
                k[f] = g;
                if (e && c.isFunction(g)) k[f](e[0])
            });
            a.converters["script json"] = function () {
                e || c.error(f + " was not called");
                return e[0]
            };
            a.dataTypes[0] = "json";
            return "script"
        }
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                c.globalEval(a);
                return a
            }
        }
    });
    c.ajaxPrefilter("script", function (a) {
        if (a.cache === l) a.cache = false;
        if (a.crossDomain) {
            a.type = "GET";
            a.global = false
        }
    });
    c.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = m.head || m.getElementsByTagName("head")[0] || m.documentElement;
            return {
                send: function (e,
                    f) {
                    b = m.createElement("script");
                    b.async = "async";
                    if (a.scriptCharset) b.charset = a.scriptCharset;
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function (a, e) {
                        if (e || !b.readyState || /loaded|complete/.test(b.readyState)) {
                            b.onload = b.onreadystatechange = null;
                            c && b.parentNode && c.removeChild(b);
                            b = l;
                            e || f(200, "success")
                        }
                    };
                    c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    if (b) b.onload(0, 1)
                }
            }
        }
    });
    var ia = k.ActiveXObject ? function () {
            for (var a in R) R[a](0, 1)
        } : !1,
        Sb = 0,
        R;
    c.ajaxSettings.xhr = k.ActiveXObject ? function () {
        var a;
        if (!(a = !this.isLocal && qa())) a: {
            try {
                a = new k.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (b) {}
            a = void 0
        }
        return a
    } : qa;
    (function (a) {
        c.extend(c.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    })(c.ajaxSettings.xhr());
    c.support.ajax && c.ajaxTransport(function (a) {
        if (!a.crossDomain || c.support.cors) {
            var b;
            return {
                send: function (d, e) {
                    var f = a.xhr(),
                        g, h;
                    a.username ? f.open(a.type, a.url, a.async, a.username, a.password) : f.open(a.type, a.url, a.async);
                    if (a.xhrFields)
                        for (h in a.xhrFields) f[h] = a.xhrFields[h];
                    a.mimeType && f.overrideMimeType &&
                        f.overrideMimeType(a.mimeType);
                    !a.crossDomain && !d["X-Requested-With"] && (d["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in d) f.setRequestHeader(h, d[h])
                    } catch (i) {}
                    f.send(a.hasContent && a.data || null);
                    b = function (d, h) {
                        var i, k, m, p, n;
                        try {
                            if (b && (h || f.readyState === 4)) {
                                b = l;
                                if (g) {
                                    f.onreadystatechange = c.noop;
                                    ia && delete R[g]
                                }
                                if (h) f.readyState !== 4 && f.abort();
                                else {
                                    i = f.status;
                                    m = f.getAllResponseHeaders();
                                    p = {};
                                    if ((n = f.responseXML) && n.documentElement) p.xml = n;
                                    p.text = f.responseText;
                                    try {
                                        k = f.statusText
                                    } catch (s) {
                                        k = ""
                                    }!i &&
                                        a.isLocal && !a.crossDomain ? i = p.text ? 200 : 404 : i === 1223 && (i = 204)
                                }
                            }
                        } catch (r) {
                            h || e(-1, r)
                        }
                        p && e(i, k, p, m)
                    };
                    if (!a.async || f.readyState === 4) b();
                    else {
                        g = ++Sb;
                        if (ia) {
                            if (!R) {
                                R = {};
                                c(k).unload(ia)
                            }
                            R[g] = b
                        }
                        f.onreadystatechange = b
                    }
                },
                abort: function () {
                    b && b(0, 1)
                }
            }
        }
    });
    var aa = {}, F, K, Tb = /^(?:toggle|show|hide)$/,
        Ub = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        Y, sa = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        V;
    c.fn.extend({
        show: function (a,
            b, d) {
            if (a || a === 0) return this.animate(M("show", 3), a, b, d);
            for (var d = 0, e = this.length; d < e; d++) {
                a = this[d];
                if (a.style) {
                    b = a.style.display;
                    if (!c._data(a, "olddisplay") && b === "none") b = a.style.display = "";
                    b === "" && c.css(a, "display") === "none" && c._data(a, "olddisplay", ta(a.nodeName))
                }
            }
            for (d = 0; d < e; d++) {
                a = this[d];
                if (a.style) {
                    b = a.style.display;
                    if (b === "" || b === "none") a.style.display = c._data(a, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, d) {
            if (a || a === 0) return this.animate(M("hide", 3), a, b, d);
            for (var d = 0, e = this.length; d <
                e; d++) {
                a = this[d];
                if (a.style) {
                    b = c.css(a, "display");
                    b !== "none" && !c._data(a, "olddisplay") && c._data(a, "olddisplay", b)
                }
            }
            for (d = 0; d < e; d++)
                if (this[d].style) this[d].style.display = "none";
            return this
        },
        _toggle: c.fn.toggle,
        toggle: function (a, b, d) {
            var e = typeof a === "boolean";
            c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || e ? this.each(function () {
                var b = e ? a : c(this).is(":hidden");
                c(this)[b ? "show" : "hide"]()
            }) : this.animate(M("toggle", 3), a, b, d);
            return this
        },
        fadeTo: function (a, b, c, e) {
            return this.filter(":hidden").css("opacity",
                0).show().end().animate({
                opacity: b
            }, a, c, e)
        },
        animate: function (a, b, d, e) {
            function f() {
                g.queue === false && c._mark(this);
                var b = c.extend({}, g),
                    d = this.nodeType === 1,
                    e = d && c(this).is(":hidden"),
                    f, k, m, l, n;
                b.animatedProperties = {};
                for (m in a) {
                    f = c.camelCase(m);
                    if (m !== f) {
                        a[f] = a[m];
                        delete a[m]
                    }
                    k = a[f];
                    if (c.isArray(k)) {
                        b.animatedProperties[f] = k[1];
                        k = a[f] = k[0]
                    } else b.animatedProperties[f] = b.specialEasing && b.specialEasing[f] || b.easing || "swing"; if (k === "hide" && e || k === "show" && !e) return b.complete.call(this);
                    if (d && (f === "height" ||
                        f === "width")) {
                        b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (c.css(this, "display") === "inline" && c.css(this, "float") === "none")!c.support.inlineBlockNeedsLayout || ta(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1
                    }
                }
                if (b.overflow != null) this.style.overflow = "hidden";
                for (m in a) {
                    d = new c.fx(this, b, m);
                    k = a[m];
                    if (Tb.test(k))
                        if (f = c._data(this, "toggle" + m) || (k === "toggle" ? e ? "show" : "hide" : 0)) {
                            c._data(this, "toggle" + m, f === "show" ? "hide" : "show");
                            d[f]()
                        } else d[k]();
                        else {
                            f = Ub.exec(k);
                            l = d.cur();
                            if (f) {
                                k = parseFloat(f[2]);
                                n = f[3] || (c.cssNumber[m] ? "" : "px");
                                if (n !== "px") {
                                    c.style(this, m, (k || 1) + n);
                                    l = (k || 1) / d.cur() * l;
                                    c.style(this, m, l + n)
                                }
                                f[1] && (k = (f[1] === "-=" ? -1 : 1) * k + l);
                                d.custom(l, k, n)
                            } else d.custom(l, k, "")
                        }
                }
                return true
            }
            var g = c.speed(b, d, e);
            if (c.isEmptyObject(a)) return this.each(g.complete, [false]);
            a = c.extend({}, a);
            return g.queue === false ? this.each(f) : this.queue(g.queue, f)
        },
        stop: function (a, b, d) {
            if (typeof a !== "string") {
                d = b;
                b = a;
                a = l
            }
            b && a !== false && this.queue(a || "fx", []);
            return this.each(function () {
                var b,
                    f = false,
                    g = c.timers,
                    h = c._data(this);
                d || c._unmark(true, this);
                if (a == null)
                    for (b in h) {
                        if (h[b] && h[b].stop && b.indexOf(".run") === b.length - 4) {
                            var i = h[b];
                            c.removeData(this, b, true);
                            i.stop(d)
                        }
                    } else if (h[b = a + ".run"] && h[b].stop) {
                        h = h[b];
                        c.removeData(this, b, true);
                        h.stop(d)
                    }
                for (b = g.length; b--;)
                    if (g[b].elem === this && (a == null || g[b].queue === a)) {
                        if (d) g[b](true);
                        else g[b].saveState();
                        f = true;
                        g.splice(b, 1)
                    }(!d || !f) && c.dequeue(this, a)
            })
        }
    });
    c.each({
        slideDown: M("show", 1),
        slideUp: M("hide", 1),
        slideToggle: M("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        c.fn[a] = function (a, c, f) {
            return this.animate(b, a, c, f)
        }
    });
    c.extend({
        speed: function (a, b, d) {
            var e = a && typeof a === "object" ? c.extend({}, a) : {
                complete: d || !d && b || c.isFunction(a) && a,
                duration: a,
                easing: d && b || b && !c.isFunction(b) && b
            };
            e.duration = c.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
            if (e.queue == null || e.queue === true) e.queue = "fx";
            e.old = e.complete;
            e.complete = function (a) {
                c.isFunction(e.old) &&
                    e.old.call(this);
                e.queue ? c.dequeue(this, e.queue) : a !== false && c._unmark(this)
            };
            return e
        },
        easing: {
            linear: function (a, b, c, e) {
                return c + e * a
            },
            swing: function (a, b, c, e) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * e + c
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b;
            this.elem = a;
            this.prop = c;
            b.orig = b.orig || {}
        }
    });
    c.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (c.fx.step[this.prop] || c.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style ||
                this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = c.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function (a, b, d) {
            function e(a) {
                return f.step(a)
            }
            var f = this,
                g = c.fx;
            this.startTime = V || ra();
            this.end = b;
            this.now = this.start = a;
            this.pos = this.state = 0;
            this.unit = d || this.unit || (c.cssNumber[this.prop] ? "" : "px");
            e.queue = this.options.queue;
            e.elem = this.elem;
            e.saveState = function () {
                f.options.hide && c._data(f.elem, "fxshow" + f.prop) === l && c._data(f.elem, "fxshow" + f.prop,
                    f.start)
            };
            e() && c.timers.push(e) && !Y && (Y = setInterval(g.tick, g.interval))
        },
        show: function () {
            var a = c._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || c.style(this.elem, this.prop);
            this.options.show = true;
            a !== l ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            c(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = c._data(this.elem, "fxshow" + this.prop) || c.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b, d = V || ra(),
                e = true,
                f = this.elem,
                g = this.options;
            if (a || d >= g.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                g.animatedProperties[this.prop] = true;
                for (b in g.animatedProperties) g.animatedProperties[b] !== true && (e = false);
                if (e) {
                    g.overflow != null && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"], function (a, b) {
                        f.style["overflow" + b] = g.overflow[a]
                    });
                    g.hide && c(f).hide();
                    if (g.hide || g.show)
                        for (b in g.animatedProperties) {
                            c.style(f, b, g.orig[b]);
                            c.removeData(f, "fxshow" +
                                b, true);
                            c.removeData(f, "toggle" + b, true)
                        }
                    if (a = g.complete) {
                        g.complete = false;
                        a.call(f)
                    }
                }
                return false
            }
            if (g.duration == Infinity) this.now = d;
            else {
                a = d - this.startTime;
                this.state = a / g.duration;
                this.pos = c.easing[g.animatedProperties[this.prop]](this.state, a, 0, 1, g.duration);
                this.now = this.start + (this.end - this.start) * this.pos
            }
            this.update();
            return true
        }
    };
    c.extend(c.fx, {
        tick: function () {
            for (var a, b = c.timers, d = 0; d < b.length; d++) {
                a = b[d];
                !a() && b[d] === a && b.splice(d--, 1)
            }
            b.length || c.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(Y);
            Y = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                c.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    });
    c.each(["width", "height"], function (a, b) {
        c.fx.step[b] = function (a) {
            c.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    });
    c.expr && c.expr.filters && (c.expr.filters.animated = function (a) {
        return c.grep(c.timers, function (b) {
            return a === b.elem
        }).length
    });
    var Vb = /^t(?:able|d|h)$/i,
        Ua = /^(?:body|html)$/i;
    c.fn.offset = "getBoundingClientRect" in m.documentElement ? function (a) {
        var b = this[0],
            d;
        if (a) return this.each(function (b) {
            c.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        try {
            d = b.getBoundingClientRect()
        } catch (e) {}
        var f = b.ownerDocument,
            g = f.documentElement;
        if (!d || !c.contains(g, b)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        b = f.body;
        f = ba(f);
        return {
            top: d.top + (f.pageYOffset || c.support.boxModel && g.scrollTop || b.scrollTop) - (g.clientTop ||
                b.clientTop || 0),
            left: d.left + (f.pageXOffset || c.support.boxModel && g.scrollLeft || b.scrollLeft) - (g.clientLeft || b.clientLeft || 0)
        }
    } : function (a) {
        var b = this[0];
        if (a) return this.each(function (b) {
            c.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        var d, e = b.offsetParent,
            f = b.ownerDocument,
            g = f.documentElement,
            h = f.body;
        d = (f = f.defaultView) ? f.getComputedStyle(b, null) : b.currentStyle;
        for (var i = b.offsetTop, j = b.offsetLeft;
            (b = b.parentNode) && b !==
            h && b !== g;) {
            if (c.support.fixedPosition && d.position === "fixed") break;
            d = f ? f.getComputedStyle(b, null) : b.currentStyle;
            i = i - b.scrollTop;
            j = j - b.scrollLeft;
            if (b === e) {
                i = i + b.offsetTop;
                j = j + b.offsetLeft;
                if (c.support.doesNotAddBorder && (!c.support.doesAddBorderForTableAndCells || !Vb.test(b.nodeName))) {
                    i = i + (parseFloat(d.borderTopWidth) || 0);
                    j = j + (parseFloat(d.borderLeftWidth) || 0)
                }
                e = b.offsetParent
            }
            if (c.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible") {
                i = i + (parseFloat(d.borderTopWidth) || 0);
                j = j + (parseFloat(d.borderLeftWidth) ||
                    0)
            }
        }
        if (d.position === "relative" || d.position === "static") {
            i = i + h.offsetTop;
            j = j + h.offsetLeft
        }
        if (c.support.fixedPosition && d.position === "fixed") {
            i = i + Math.max(g.scrollTop, h.scrollTop);
            j = j + Math.max(g.scrollLeft, h.scrollLeft)
        }
        return {
            top: i,
            left: j
        }
    };
    c.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                d = a.offsetLeft;
            if (c.support.doesNotIncludeMarginInBodyOffset) {
                b = b + (parseFloat(c.css(a, "marginTop")) || 0);
                d = d + (parseFloat(c.css(a, "marginLeft")) || 0)
            }
            return {
                top: b,
                left: d
            }
        },
        setOffset: function (a, b, d) {
            var e = c.css(a, "position");
            if (e === "static") a.style.position = "relative";
            var f = c(a),
                g = f.offset(),
                h = c.css(a, "top"),
                i = c.css(a, "left"),
                j = {}, k = {};
            if ((e === "absolute" || e === "fixed") && c.inArray("auto", [h, i]) > -1) {
                k = f.position();
                e = k.top;
                i = k.left
            } else {
                e = parseFloat(h) || 0;
                i = parseFloat(i) || 0
            }
            c.isFunction(b) && (b = b.call(a, d, g));
            if (b.top != null) j.top = b.top - g.top + e;
            if (b.left != null) j.left = b.left - g.left + i;
            "using" in b ? b.using.call(a, j) : f.css(j)
        }
    };
    c.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                d = this.offset(),
                e = Ua.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            d.top = d.top - (parseFloat(c.css(a, "marginTop")) || 0);
            d.left = d.left - (parseFloat(c.css(a, "marginLeft")) || 0);
            e.top = e.top + (parseFloat(c.css(b[0], "borderTopWidth")) || 0);
            e.left = e.left + (parseFloat(c.css(b[0], "borderLeftWidth")) || 0);
            return {
                top: d.top - e.top,
                left: d.left - e.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || m.body; a && !Ua.test(a.nodeName) && c.css(a, "position") === "static";) a = a.offsetParent;
                return a
            })
        }
    });
    c.each(["Left",
        "Top"
    ], function (a, b) {
        var d = "scroll" + b;
        c.fn[d] = function (b) {
            var f, g;
            if (b === l) {
                f = this[0];
                if (!f) return null;
                return (g = ba(f)) ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && g.document.documentElement[d] || g.document.body[d] : f[d]
            }
            return this.each(function () {
                (g = ba(this)) ? g.scrollTo(!a ? b : c(g).scrollLeft(), a ? b : c(g).scrollTop()) : this[d] = b
            })
        }
    });
    c.each(["Height", "Width"], function (a, b) {
        var d = b.toLowerCase();
        c.fn["inner" + b] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(c.css(a, d, "padding")) :
                this[d]() : null
        };
        c.fn["outer" + b] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(c.css(b, d, a ? "margin" : "border")) : this[d]() : null
        };
        c.fn[d] = function (a) {
            var f = this[0];
            if (!f) return a == null ? null : this;
            if (c.isFunction(a)) return this.each(function (b) {
                var f = c(this);
                f[d](a.call(this, b, f[d]()))
            });
            if (c.isWindow(f)) {
                var g = f.document.documentElement["client" + b],
                    h = f.document.body;
                return f.document.compatMode === "CSS1Compat" && g || h && h["client" + b] || g
            }
            if (f.nodeType === 9) return Math.max(f.documentElement["client" +
                b], f.body["scroll" + b], f.documentElement["scroll" + b], f.body["offset" + b], f.documentElement["offset" + b]);
            if (a === l) {
                f = c.css(f, d);
                g = parseFloat(f);
                return c.isNumeric(g) ? g : f
            }
            return this.css(d, typeof a === "string" ? a : a + "px")
        }
    });
    k.jQuery = k.$ = c;
    "function" === typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return c
    })
})(window);
(function (k) {
    k.fn.superfish = function (l) {
        var s = k.fn.superfish,
            B = s.c,
            G = k(['<span class="', B.arrowClass, '"> &#187;</span>'].join("")),
            x = function () {
                var l = k(this),
                    n = A(l);
                clearTimeout(n.sfTimer);
                l.showSuperfishUl().siblings().hideSuperfishUl()
            }, y = function () {
                var l = k(this),
                    n = A(l),
                    v = s.op;
                clearTimeout(n.sfTimer);
                n.sfTimer = setTimeout(function () {
                    v.retainPath = -1 < k.inArray(l[0], v.$path);
                    l.hideSuperfishUl();
                    v.$path.length && 1 > l.parents(["li.", v.hoverClass].join("")).length && x.call(v.$path)
                }, v.delay)
            }, A = function (k) {
                k =
                    k.parents(["ul.", B.menuClass, ":first"].join(""))[0];
                s.op = s.o[k.serial];
                return k
            };
        return this.each(function () {
            var w = this.serial = s.o.length,
                r = k.extend({}, s.defaults, l);
            r.$path = k("li." + r.pathClass, this).slice(0, r.pathLevels).each(function () {
                k(this).addClass([r.hoverClass, B.bcClass].join(" ")).filter("li:has(ul)").removeClass(r.pathClass)
            });
            s.o[w] = s.op = r;
            k("li:has(ul)", this)[k.fn.hoverIntent && !r.disableHI ? "hoverIntent" : "hover"](x, y).each(function () {
                r.autoArrows && k(">a:first-child", this).addClass(B.anchorClass).append(G.clone())
            }).not("." +
                B.bcClass).hideSuperfishUl();
            var v = k("a", this);
            v.each(function (k) {
                var l = v.eq(k).parents("li");
                v.eq(k).focus(function () {
                    x.call(l)
                }).blur(function () {
                    y.call(l)
                })
            });
            r.onInit.call(this)
        }).each(function () {
            var l = [B.menuClass];
            s.op.dropShadows && !(k.browser.msie && 7 > k.browser.version) && l.push(B.shadowClass);
            k(this).addClass(l.join(" "))
        })
    };
    var l = k.fn.superfish;
    l.o = [];
    l.op = {};
    l.IE7fix = function () {
        var n = l.op;
        k.browser.msie && 6 < k.browser.version && n.dropShadows && void 0 != n.animation.opacity && this.toggleClass(l.c.shadowClass +
            "-off")
    };
    l.c = {
        bcClass: "sf-breadcrumb",
        menuClass: "sf-js-enabled",
        anchorClass: "sf-with-ul",
        arrowClass: "sf-sub-indicator",
        shadowClass: "sf-shadow"
    };
    l.defaults = {
        hoverClass: "sfHover",
        pathClass: "overideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        speed: "normal",
        autoArrows: !0,
        dropShadows: !0,
        disableHI: !1,
        onInit: function () {},
        onBeforeShow: function () {},
        onShow: function () {},
        onHide: function () {}
    };
    k.fn.extend({
        hideSuperfishUl: function () {
            var n = l.op,
                s = !0 === n.retainPath ? n.$path : "";
            n.retainPath = !1;
            s = k(["li.",
                n.hoverClass
            ].join(""), this).add(this).not(s).removeClass(n.hoverClass).find(">ul").hide().css("visibility", "hidden");
            n.onHide.call(s);
            return this
        },
        showSuperfishUl: function () {
            var k = l.op,
                s = this.addClass(k.hoverClass).find(">ul:hidden").css("visibility", "visible");
            l.IE7fix.call(s);
            k.onBeforeShow.call(s);
            s.animate(k.animation, k.speed, function () {
                l.IE7fix.call(s);
                k.onShow.call(s)
            });
            return this
        }
    })
})(jQuery);
(function (k) {
    k.fn.hoverIntent = function (l, n) {
        var s = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        }, s = k.extend(s, n ? {
                over: l,
                out: n
            } : l),
            B, G, x, y, A = function (k) {
                B = k.pageX;
                G = k.pageY
            }, w = function (l, n) {
                n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
                if (Math.abs(x - B) + Math.abs(y - G) < s.sensitivity) return k(n).unbind("mousemove", A), n.hoverIntent_s = 1, s.over.apply(n, [l]);
                x = B;
                y = G;
                n.hoverIntent_t = setTimeout(function () {
                    w(l, n)
                }, s.interval)
            }, r = function (l) {
                var n = jQuery.extend({}, l),
                    r = this;
                r.hoverIntent_t && (r.hoverIntent_t = clearTimeout(r.hoverIntent_t));
                "mouseenter" == l.type ? (x = n.pageX, y = n.pageY, k(r).bind("mousemove", A), 1 != r.hoverIntent_s && (r.hoverIntent_t = setTimeout(function () {
                    w(n, r)
                }, s.interval))) : (k(r).unbind("mousemove", A), 1 == r.hoverIntent_s && (r.hoverIntent_t = setTimeout(function () {
                    r.hoverIntent_t = clearTimeout(r.hoverIntent_t);
                    r.hoverIntent_s = 0;
                    s.out.apply(r, [n])
                }, s.timeout)))
            };
        return this.bind("mouseenter", r).bind("mouseleave", r)
    }
})(jQuery);
(function (k) {
    function l(k) {
        return k && k.constructor === Number ? k + "px" : k
    }
    k.fn.bgiframe = k.browser.msie && /msie 6\.0/i.test(navigator.userAgent) ? function (n) {
        var n = k.extend({
            top: "auto",
            left: "auto",
            width: "auto",
            height: "auto",
            opacity: !0,
            src: "javascript:false;"
        }, n),
            s = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + n.src + '"style="display:block;position:absolute;z-index:-1;' + (!1 !== n.opacity ? "filter:Alpha(Opacity='0');" : "") + "top:" + ("auto" == n.top ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')" :
                l(n.top)) + ";left:" + ("auto" == n.left ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')" : l(n.left)) + ";width:" + ("auto" == n.width ? "expression(this.parentNode.offsetWidth+'px')" : l(n.width)) + ";height:" + ("auto" == n.height ? "expression(this.parentNode.offsetHeight+'px')" : l(n.height)) + ';"/>';
        return this.each(function () {
            0 === k(this).children("iframe.bgiframe").length && this.insertBefore(document.createElement(s), this.firstChild)
        })
    } : function () {
        return this
    };
    k.fn.bgIframe = k.fn.bgiframe
})(jQuery);
(function (k) {
    function l() {
        s.setAttribute("content", G);
        x = !0
    }
    if (/iPhone|iPad|iPod/.test(navigator.platform) && -1 < navigator.userAgent.indexOf("AppleWebKit")) {
        var n = k.document;
        if (n.querySelector) {
            var s = n.querySelector("meta[name=viewport]"),
                n = s && s.getAttribute("content"),
                B = n + ",maximum-scale=1",
                G = n + ",maximum-scale=10",
                x = !0,
                y, A, w, r;
            s && (k.addEventListener("orientationchange", l, !1), k.addEventListener("devicemotion", function (n) {
                r = n.accelerationIncludingGravity;
                y = Math.abs(r.x);
                A = Math.abs(r.y);
                w = Math.abs(r.z);
                !k.orientation && (7 < y || (6 < w && 8 > A || 8 > w && 6 < A) && 5 < y) ? x && (s.setAttribute("content", B), x = !1) : x || l()
            }, !1))
        }
    }
})(this);
(function (k) {
    k(document).ready(function () {
        k("#tdr_env_link").click(function () {
            k("#tdr_env_detail").toggle("hide")
        })
    })
})(jQuery);
(function (k) {
    k(document).ready(function () {
        var l = !1;
        0 < k("#tdr_nav_list > li").length && (l = !0);
        l ? k("#tdr_nav_list").superfish({
            autoArrows: !1
        }) : (k("#tdr_title_menu_link").attr("style", "display: none"), k("#tdr_title_content").addClass("noMenu"))
    })
})(jQuery);
(function (k) {
    k(document).ready(function () {
        k("#tdr_title_menu_link").click(function (l) {
            l.preventDefault();
            k("#tdr_nav_list").toggleClass("show");
            k("#tdr_nav_list").hasClass("show") && k("#tdr_search").hasClass("show") && k("#tdr_search").removeClass("show")
        });
        k("#tdr_title_search_link").click(function (l) {
            l.preventDefault();
            k("#tdr_search").toggleClass("show");
            k("#tdr_search").hasClass("show") && k("#tdr_nav_list").hasClass("show") && k("#tdr_nav_list").removeClass("show")
        })
    })
})(jQuery);
