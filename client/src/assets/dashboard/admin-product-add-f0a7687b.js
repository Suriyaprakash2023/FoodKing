import { c as pt, g as yt } from "./theme-b118ffc1.js";
import { f as ct } from "./index-a4e39586.js";
var ht = { exports: {} };
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */ (function (dt, bt) {
  (function (_, p) {
    dt.exports = p();
  })(typeof self < "u" ? self : pt, function () {
    return (function (B) {
      var _ = {};
      function p(P) {
        if (_[P]) return _[P].exports;
        var N = (_[P] = { i: P, l: !1, exports: {} });
        return B[P].call(N.exports, N, N.exports, p), (N.l = !0), N.exports;
      }
      return (
        (p.m = B),
        (p.c = _),
        (p.d = function (P, N, A) {
          p.o(P, N) ||
            Object.defineProperty(P, N, {
              configurable: !1,
              enumerable: !0,
              get: A,
            });
        }),
        (p.n = function (P) {
          var N =
            P && P.__esModule
              ? function () {
                  return P.default;
                }
              : function () {
                  return P;
                };
          return p.d(N, "a", N), N;
        }),
        (p.o = function (P, N) {
          return Object.prototype.hasOwnProperty.call(P, N);
        }),
        (p.p = ""),
        p((p.s = 109))
      );
    })([
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(17),
          N = p(18),
          A = p(19),
          m = p(45),
          y = p(46),
          c = p(47),
          o = p(48),
          t = p(49),
          e = p(12),
          u = p(32),
          l = p(33),
          a = p(31),
          r = p(1),
          i = {
            Scope: r.Scope,
            create: r.create,
            find: r.find,
            query: r.query,
            register: r.register,
            Container: P.default,
            Format: N.default,
            Leaf: A.default,
            Embed: o.default,
            Scroll: m.default,
            Block: c.default,
            Inline: y.default,
            Text: t.default,
            Attributor: {
              Attribute: e.default,
              Class: u.default,
              Style: l.default,
              Store: a.default,
            },
          };
        _.default = i;
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var a =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i;
                }) ||
              function (r, i) {
                for (var f in i) i.hasOwnProperty(f) && (r[f] = i[f]);
              };
            return function (r, i) {
              a(r, i);
              function f() {
                this.constructor = r;
              }
              r.prototype =
                i === null
                  ? Object.create(i)
                  : ((f.prototype = i.prototype), new f());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = (function (a) {
          P(r, a);
          function r(i) {
            var f = this;
            return (
              (i = "[Parchment] " + i),
              (f = a.call(this, i) || this),
              (f.message = i),
              (f.name = f.constructor.name),
              f
            );
          }
          return r;
        })(Error);
        _.ParchmentError = N;
        var A = {},
          m = {},
          y = {},
          c = {};
        _.DATA_KEY = "__blot";
        var o;
        (function (a) {
          (a[(a.TYPE = 3)] = "TYPE"),
            (a[(a.LEVEL = 12)] = "LEVEL"),
            (a[(a.ATTRIBUTE = 13)] = "ATTRIBUTE"),
            (a[(a.BLOT = 14)] = "BLOT"),
            (a[(a.INLINE = 7)] = "INLINE"),
            (a[(a.BLOCK = 11)] = "BLOCK"),
            (a[(a.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
            (a[(a.INLINE_BLOT = 6)] = "INLINE_BLOT"),
            (a[(a.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
            (a[(a.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
            (a[(a.ANY = 15)] = "ANY");
        })((o = _.Scope || (_.Scope = {})));
        function t(a, r) {
          var i = u(a);
          if (i == null) throw new N("Unable to create " + a + " blot");
          var f = i,
            n =
              a instanceof Node || a.nodeType === Node.TEXT_NODE
                ? a
                : f.create(r);
          return new f(n, r);
        }
        _.create = t;
        function e(a, r) {
          return (
            r === void 0 && (r = !1),
            a == null
              ? null
              : a[_.DATA_KEY] != null
              ? a[_.DATA_KEY].blot
              : r
              ? e(a.parentNode, r)
              : null
          );
        }
        _.find = e;
        function u(a, r) {
          r === void 0 && (r = o.ANY);
          var i;
          if (typeof a == "string") i = c[a] || A[a];
          else if (a instanceof Text || a.nodeType === Node.TEXT_NODE)
            i = c.text;
          else if (typeof a == "number")
            a & o.LEVEL & o.BLOCK
              ? (i = c.block)
              : a & o.LEVEL & o.INLINE && (i = c.inline);
          else if (a instanceof HTMLElement) {
            var f = (a.getAttribute("class") || "").split(/\s+/);
            for (var n in f) if (((i = m[f[n]]), i)) break;
            i = i || y[a.tagName];
          }
          return i == null
            ? null
            : r & o.LEVEL & i.scope && r & o.TYPE & i.scope
            ? i
            : null;
        }
        _.query = u;
        function l() {
          for (var a = [], r = 0; r < arguments.length; r++)
            a[r] = arguments[r];
          if (a.length > 1)
            return a.map(function (n) {
              return l(n);
            });
          var i = a[0];
          if (typeof i.blotName != "string" && typeof i.attrName != "string")
            throw new N("Invalid definition");
          if (i.blotName === "abstract")
            throw new N("Cannot register abstract class");
          if (((c[i.blotName || i.attrName] = i), typeof i.keyName == "string"))
            A[i.keyName] = i;
          else if (
            (i.className != null && (m[i.className] = i), i.tagName != null)
          ) {
            Array.isArray(i.tagName)
              ? (i.tagName = i.tagName.map(function (n) {
                  return n.toUpperCase();
                }))
              : (i.tagName = i.tagName.toUpperCase());
            var f = Array.isArray(i.tagName) ? i.tagName : [i.tagName];
            f.forEach(function (n) {
              (y[n] == null || i.className == null) && (y[n] = i);
            });
          }
          return i;
        }
        _.register = l;
      },
      function (B, _, p) {
        var P = p(51),
          N = p(11),
          A = p(3),
          m = p(20),
          y = String.fromCharCode(0),
          c = function (o) {
            Array.isArray(o)
              ? (this.ops = o)
              : o != null && Array.isArray(o.ops)
              ? (this.ops = o.ops)
              : (this.ops = []);
          };
        (c.prototype.insert = function (o, t) {
          var e = {};
          return o.length === 0
            ? this
            : ((e.insert = o),
              t != null &&
                typeof t == "object" &&
                Object.keys(t).length > 0 &&
                (e.attributes = t),
              this.push(e));
        }),
          (c.prototype.delete = function (o) {
            return o <= 0 ? this : this.push({ delete: o });
          }),
          (c.prototype.retain = function (o, t) {
            if (o <= 0) return this;
            var e = { retain: o };
            return (
              t != null &&
                typeof t == "object" &&
                Object.keys(t).length > 0 &&
                (e.attributes = t),
              this.push(e)
            );
          }),
          (c.prototype.push = function (o) {
            var t = this.ops.length,
              e = this.ops[t - 1];
            if (((o = A(!0, {}, o)), typeof e == "object")) {
              if (typeof o.delete == "number" && typeof e.delete == "number")
                return (
                  (this.ops[t - 1] = { delete: e.delete + o.delete }), this
                );
              if (
                typeof e.delete == "number" &&
                o.insert != null &&
                ((t -= 1), (e = this.ops[t - 1]), typeof e != "object")
              )
                return this.ops.unshift(o), this;
              if (N(o.attributes, e.attributes)) {
                if (typeof o.insert == "string" && typeof e.insert == "string")
                  return (
                    (this.ops[t - 1] = { insert: e.insert + o.insert }),
                    typeof o.attributes == "object" &&
                      (this.ops[t - 1].attributes = o.attributes),
                    this
                  );
                if (typeof o.retain == "number" && typeof e.retain == "number")
                  return (
                    (this.ops[t - 1] = { retain: e.retain + o.retain }),
                    typeof o.attributes == "object" &&
                      (this.ops[t - 1].attributes = o.attributes),
                    this
                  );
              }
            }
            return (
              t === this.ops.length
                ? this.ops.push(o)
                : this.ops.splice(t, 0, o),
              this
            );
          }),
          (c.prototype.chop = function () {
            var o = this.ops[this.ops.length - 1];
            return o && o.retain && !o.attributes && this.ops.pop(), this;
          }),
          (c.prototype.filter = function (o) {
            return this.ops.filter(o);
          }),
          (c.prototype.forEach = function (o) {
            this.ops.forEach(o);
          }),
          (c.prototype.map = function (o) {
            return this.ops.map(o);
          }),
          (c.prototype.partition = function (o) {
            var t = [],
              e = [];
            return (
              this.forEach(function (u) {
                var l = o(u) ? t : e;
                l.push(u);
              }),
              [t, e]
            );
          }),
          (c.prototype.reduce = function (o, t) {
            return this.ops.reduce(o, t);
          }),
          (c.prototype.changeLength = function () {
            return this.reduce(function (o, t) {
              return t.insert ? o + m.length(t) : t.delete ? o - t.delete : o;
            }, 0);
          }),
          (c.prototype.length = function () {
            return this.reduce(function (o, t) {
              return o + m.length(t);
            }, 0);
          }),
          (c.prototype.slice = function (o, t) {
            (o = o || 0), typeof t != "number" && (t = 1 / 0);
            for (
              var e = [], u = m.iterator(this.ops), l = 0;
              l < t && u.hasNext();

            ) {
              var a;
              l < o ? (a = u.next(o - l)) : ((a = u.next(t - l)), e.push(a)),
                (l += m.length(a));
            }
            return new c(e);
          }),
          (c.prototype.compose = function (o) {
            var t = m.iterator(this.ops),
              e = m.iterator(o.ops),
              u = [],
              l = e.peek();
            if (
              l != null &&
              typeof l.retain == "number" &&
              l.attributes == null
            ) {
              for (
                var a = l.retain;
                t.peekType() === "insert" && t.peekLength() <= a;

              )
                (a -= t.peekLength()), u.push(t.next());
              l.retain - a > 0 && e.next(l.retain - a);
            }
            for (var r = new c(u); t.hasNext() || e.hasNext(); )
              if (e.peekType() === "insert") r.push(e.next());
              else if (t.peekType() === "delete") r.push(t.next());
              else {
                var i = Math.min(t.peekLength(), e.peekLength()),
                  f = t.next(i),
                  n = e.next(i);
                if (typeof n.retain == "number") {
                  var s = {};
                  typeof f.retain == "number"
                    ? (s.retain = i)
                    : (s.insert = f.insert);
                  var k = m.attributes.compose(
                    f.attributes,
                    n.attributes,
                    typeof f.retain == "number"
                  );
                  if (
                    (k && (s.attributes = k),
                    r.push(s),
                    !e.hasNext() && N(r.ops[r.ops.length - 1], s))
                  ) {
                    var g = new c(t.rest());
                    return r.concat(g).chop();
                  }
                } else
                  typeof n.delete == "number" &&
                    typeof f.retain == "number" &&
                    r.push(n);
              }
            return r.chop();
          }),
          (c.prototype.concat = function (o) {
            var t = new c(this.ops.slice());
            return (
              o.ops.length > 0 &&
                (t.push(o.ops[0]), (t.ops = t.ops.concat(o.ops.slice(1)))),
              t
            );
          }),
          (c.prototype.diff = function (o, t) {
            if (this.ops === o.ops) return new c();
            var e = [this, o].map(function (i) {
                return i
                  .map(function (f) {
                    if (f.insert != null)
                      return typeof f.insert == "string" ? f.insert : y;
                    var n = i === o ? "on" : "with";
                    throw new Error("diff() called " + n + " non-document");
                  })
                  .join("");
              }),
              u = new c(),
              l = P(e[0], e[1], t),
              a = m.iterator(this.ops),
              r = m.iterator(o.ops);
            return (
              l.forEach(function (i) {
                for (var f = i[1].length; f > 0; ) {
                  var n = 0;
                  switch (i[0]) {
                    case P.INSERT:
                      (n = Math.min(r.peekLength(), f)), u.push(r.next(n));
                      break;
                    case P.DELETE:
                      (n = Math.min(f, a.peekLength())), a.next(n), u.delete(n);
                      break;
                    case P.EQUAL:
                      n = Math.min(a.peekLength(), r.peekLength(), f);
                      var s = a.next(n),
                        k = r.next(n);
                      N(s.insert, k.insert)
                        ? u.retain(
                            n,
                            m.attributes.diff(s.attributes, k.attributes)
                          )
                        : u.push(k).delete(n);
                      break;
                  }
                  f -= n;
                }
              }),
              u.chop()
            );
          }),
          (c.prototype.eachLine = function (o, t) {
            t =
              t ||
              `
`;
            for (
              var e = m.iterator(this.ops), u = new c(), l = 0;
              e.hasNext();

            ) {
              if (e.peekType() !== "insert") return;
              var a = e.peek(),
                r = m.length(a) - e.peekLength(),
                i =
                  typeof a.insert == "string" ? a.insert.indexOf(t, r) - r : -1;
              if (i < 0) u.push(e.next());
              else if (i > 0) u.push(e.next(i));
              else {
                if (o(u, e.next(1).attributes || {}, l) === !1) return;
                (l += 1), (u = new c());
              }
            }
            u.length() > 0 && o(u, {}, l);
          }),
          (c.prototype.transform = function (o, t) {
            if (((t = !!t), typeof o == "number"))
              return this.transformPosition(o, t);
            for (
              var e = m.iterator(this.ops), u = m.iterator(o.ops), l = new c();
              e.hasNext() || u.hasNext();

            )
              if (e.peekType() === "insert" && (t || u.peekType() !== "insert"))
                l.retain(m.length(e.next()));
              else if (u.peekType() === "insert") l.push(u.next());
              else {
                var a = Math.min(e.peekLength(), u.peekLength()),
                  r = e.next(a),
                  i = u.next(a);
                if (r.delete) continue;
                i.delete
                  ? l.push(i)
                  : l.retain(
                      a,
                      m.attributes.transform(r.attributes, i.attributes, t)
                    );
              }
            return l.chop();
          }),
          (c.prototype.transformPosition = function (o, t) {
            t = !!t;
            for (var e = m.iterator(this.ops), u = 0; e.hasNext() && u <= o; ) {
              var l = e.peekLength(),
                a = e.peekType();
              if ((e.next(), a === "delete")) {
                o -= Math.min(l, o - u);
                continue;
              } else a === "insert" && (u < o || !t) && (o += l);
              u += l;
            }
            return o;
          }),
          (B.exports = c);
      },
      function (B, _) {
        var p = Object.prototype.hasOwnProperty,
          P = Object.prototype.toString,
          N = Object.defineProperty,
          A = Object.getOwnPropertyDescriptor,
          m = function (e) {
            return typeof Array.isArray == "function"
              ? Array.isArray(e)
              : P.call(e) === "[object Array]";
          },
          y = function (e) {
            if (!e || P.call(e) !== "[object Object]") return !1;
            var u = p.call(e, "constructor"),
              l =
                e.constructor &&
                e.constructor.prototype &&
                p.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !u && !l) return !1;
            var a;
            for (a in e);
            return typeof a > "u" || p.call(e, a);
          },
          c = function (e, u) {
            N && u.name === "__proto__"
              ? N(e, u.name, {
                  enumerable: !0,
                  configurable: !0,
                  value: u.newValue,
                  writable: !0,
                })
              : (e[u.name] = u.newValue);
          },
          o = function (e, u) {
            if (u === "__proto__")
              if (p.call(e, u)) {
                if (A) return A(e, u).value;
              } else return;
            return e[u];
          };
        B.exports = function t() {
          var e,
            u,
            l,
            a,
            r,
            i,
            f = arguments[0],
            n = 1,
            s = arguments.length,
            k = !1;
          for (
            typeof f == "boolean" &&
              ((k = f), (f = arguments[1] || {}), (n = 2)),
              (f == null || (typeof f != "object" && typeof f != "function")) &&
                (f = {});
            n < s;
            ++n
          )
            if (((e = arguments[n]), e != null))
              for (u in e)
                (l = o(f, u)),
                  (a = o(e, u)),
                  f !== a &&
                    (k && a && (y(a) || (r = m(a)))
                      ? (r
                          ? ((r = !1), (i = l && m(l) ? l : []))
                          : (i = l && y(l) ? l : {}),
                        c(f, { name: u, newValue: t(k, i, a) }))
                      : typeof a < "u" && c(f, { name: u, newValue: a }));
          return f;
        };
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.default = _.BlockEmbed = _.bubbleFormats = void 0);
        var P = (function () {
            function h(d, E) {
              for (var T = 0; T < E.length; T++) {
                var q = E[T];
                (q.enumerable = q.enumerable || !1),
                  (q.configurable = !0),
                  "value" in q && (q.writable = !0),
                  Object.defineProperty(d, q.key, q);
              }
            }
            return function (d, E, T) {
              return E && h(d.prototype, E), T && h(d, T), d;
            };
          })(),
          N = function h(d, E, T) {
            d === null && (d = Function.prototype);
            var q = Object.getOwnPropertyDescriptor(d, E);
            if (q === void 0) {
              var D = Object.getPrototypeOf(d);
              return D === null ? void 0 : h(D, E, T);
            } else {
              if ("value" in q) return q.value;
              var C = q.get;
              return C === void 0 ? void 0 : C.call(T);
            }
          },
          A = p(3),
          m = f(A),
          y = p(2),
          c = f(y),
          o = p(0),
          t = f(o),
          e = p(16),
          u = f(e),
          l = p(6),
          a = f(l),
          r = p(7),
          i = f(r);
        function f(h) {
          return h && h.__esModule ? h : { default: h };
        }
        function n(h, d) {
          if (!(h instanceof d))
            throw new TypeError("Cannot call a class as a function");
        }
        function s(h, d) {
          if (!h)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return d && (typeof d == "object" || typeof d == "function") ? d : h;
        }
        function k(h, d) {
          if (typeof d != "function" && d !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof d
            );
          (h.prototype = Object.create(d && d.prototype, {
            constructor: {
              value: h,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            d &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(h, d)
                : (h.__proto__ = d));
        }
        var g = 1,
          b = (function (h) {
            k(d, h);
            function d() {
              return (
                n(this, d),
                s(
                  this,
                  (d.__proto__ || Object.getPrototypeOf(d)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              P(d, [
                {
                  key: "attach",
                  value: function () {
                    N(
                      d.prototype.__proto__ ||
                        Object.getPrototypeOf(d.prototype),
                      "attach",
                      this
                    ).call(this),
                      (this.attributes = new t.default.Attributor.Store(
                        this.domNode
                      ));
                  },
                },
                {
                  key: "delta",
                  value: function () {
                    return new c.default().insert(
                      this.value(),
                      (0, m.default)(this.formats(), this.attributes.values())
                    );
                  },
                },
                {
                  key: "format",
                  value: function (T, q) {
                    var D = t.default.query(T, t.default.Scope.BLOCK_ATTRIBUTE);
                    D != null && this.attributes.attribute(D, q);
                  },
                },
                {
                  key: "formatAt",
                  value: function (T, q, D, C) {
                    this.format(D, C);
                  },
                },
                {
                  key: "insertAt",
                  value: function (T, q, D) {
                    if (
                      typeof q == "string" &&
                      q.endsWith(`
`)
                    ) {
                      var C = t.default.create(w.blotName);
                      this.parent.insertBefore(C, T === 0 ? this : this.next),
                        C.insertAt(0, q.slice(0, -1));
                    } else
                      N(
                        d.prototype.__proto__ ||
                          Object.getPrototypeOf(d.prototype),
                        "insertAt",
                        this
                      ).call(this, T, q, D);
                  },
                },
              ]),
              d
            );
          })(t.default.Embed);
        b.scope = t.default.Scope.BLOCK_BLOT;
        var w = (function (h) {
          k(d, h);
          function d(E) {
            n(this, d);
            var T = s(
              this,
              (d.__proto__ || Object.getPrototypeOf(d)).call(this, E)
            );
            return (T.cache = {}), T;
          }
          return (
            P(d, [
              {
                key: "delta",
                value: function () {
                  return (
                    this.cache.delta == null &&
                      (this.cache.delta = this.descendants(t.default.Leaf)
                        .reduce(function (T, q) {
                          return q.length() === 0
                            ? T
                            : T.insert(q.value(), v(q));
                        }, new c.default())
                        .insert(
                          `
`,
                          v(this)
                        )),
                    this.cache.delta
                  );
                },
              },
              {
                key: "deleteAt",
                value: function (T, q) {
                  N(
                    d.prototype.__proto__ || Object.getPrototypeOf(d.prototype),
                    "deleteAt",
                    this
                  ).call(this, T, q),
                    (this.cache = {});
                },
              },
              {
                key: "formatAt",
                value: function (T, q, D, C) {
                  q <= 0 ||
                    (t.default.query(D, t.default.Scope.BLOCK)
                      ? T + q === this.length() && this.format(D, C)
                      : N(
                          d.prototype.__proto__ ||
                            Object.getPrototypeOf(d.prototype),
                          "formatAt",
                          this
                        ).call(
                          this,
                          T,
                          Math.min(q, this.length() - T - 1),
                          D,
                          C
                        ),
                    (this.cache = {}));
                },
              },
              {
                key: "insertAt",
                value: function (T, q, D) {
                  if (D != null)
                    return N(
                      d.prototype.__proto__ ||
                        Object.getPrototypeOf(d.prototype),
                      "insertAt",
                      this
                    ).call(this, T, q, D);
                  if (q.length !== 0) {
                    var C = q.split(`
`),
                      Z = C.shift();
                    Z.length > 0 &&
                      (T < this.length() - 1 || this.children.tail == null
                        ? N(
                            d.prototype.__proto__ ||
                              Object.getPrototypeOf(d.prototype),
                            "insertAt",
                            this
                          ).call(this, Math.min(T, this.length() - 1), Z)
                        : this.children.tail.insertAt(
                            this.children.tail.length(),
                            Z
                          ),
                      (this.cache = {}));
                    var I = this;
                    C.reduce(function (R, O) {
                      return (I = I.split(R, !0)), I.insertAt(0, O), O.length;
                    }, T + Z.length);
                  }
                },
              },
              {
                key: "insertBefore",
                value: function (T, q) {
                  var D = this.children.head;
                  N(
                    d.prototype.__proto__ || Object.getPrototypeOf(d.prototype),
                    "insertBefore",
                    this
                  ).call(this, T, q),
                    D instanceof u.default && D.remove(),
                    (this.cache = {});
                },
              },
              {
                key: "length",
                value: function () {
                  return (
                    this.cache.length == null &&
                      (this.cache.length =
                        N(
                          d.prototype.__proto__ ||
                            Object.getPrototypeOf(d.prototype),
                          "length",
                          this
                        ).call(this) + g),
                    this.cache.length
                  );
                },
              },
              {
                key: "moveChildren",
                value: function (T, q) {
                  N(
                    d.prototype.__proto__ || Object.getPrototypeOf(d.prototype),
                    "moveChildren",
                    this
                  ).call(this, T, q),
                    (this.cache = {});
                },
              },
              {
                key: "optimize",
                value: function (T) {
                  N(
                    d.prototype.__proto__ || Object.getPrototypeOf(d.prototype),
                    "optimize",
                    this
                  ).call(this, T),
                    (this.cache = {});
                },
              },
              {
                key: "path",
                value: function (T) {
                  return N(
                    d.prototype.__proto__ || Object.getPrototypeOf(d.prototype),
                    "path",
                    this
                  ).call(this, T, !0);
                },
              },
              {
                key: "removeChild",
                value: function (T) {
                  N(
                    d.prototype.__proto__ || Object.getPrototypeOf(d.prototype),
                    "removeChild",
                    this
                  ).call(this, T),
                    (this.cache = {});
                },
              },
              {
                key: "split",
                value: function (T) {
                  var q =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !1;
                  if (q && (T === 0 || T >= this.length() - g)) {
                    var D = this.clone();
                    return T === 0
                      ? (this.parent.insertBefore(D, this), this)
                      : (this.parent.insertBefore(D, this.next), D);
                  } else {
                    var C = N(
                      d.prototype.__proto__ ||
                        Object.getPrototypeOf(d.prototype),
                      "split",
                      this
                    ).call(this, T, q);
                    return (this.cache = {}), C;
                  }
                },
              },
            ]),
            d
          );
        })(t.default.Block);
        (w.blotName = "block"),
          (w.tagName = "P"),
          (w.defaultChild = "break"),
          (w.allowedChildren = [a.default, t.default.Embed, i.default]);
        function v(h) {
          var d =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return h == null ||
            (typeof h.formats == "function" &&
              (d = (0, m.default)(d, h.formats())),
            h.parent == null ||
              h.parent.blotName == "scroll" ||
              h.parent.statics.scope !== h.statics.scope)
            ? d
            : v(h.parent, d);
        }
        (_.bubbleFormats = v), (_.BlockEmbed = b), (_.default = w);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.default = _.overload = _.expandConfig = void 0);
        var P =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (I) {
                  return typeof I;
                }
              : function (I) {
                  return I &&
                    typeof Symbol == "function" &&
                    I.constructor === Symbol &&
                    I !== Symbol.prototype
                    ? "symbol"
                    : typeof I;
                },
          N = (function () {
            function I(R, O) {
              var S = [],
                L = !0,
                F = !1,
                M = void 0;
              try {
                for (
                  var x = R[Symbol.iterator](), j;
                  !(L = (j = x.next()).done) &&
                  (S.push(j.value), !(O && S.length === O));
                  L = !0
                );
              } catch (U) {
                (F = !0), (M = U);
              } finally {
                try {
                  !L && x.return && x.return();
                } finally {
                  if (F) throw M;
                }
              }
              return S;
            }
            return function (R, O) {
              if (Array.isArray(R)) return R;
              if (Symbol.iterator in Object(R)) return I(R, O);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          A = (function () {
            function I(R, O) {
              for (var S = 0; S < O.length; S++) {
                var L = O[S];
                (L.enumerable = L.enumerable || !1),
                  (L.configurable = !0),
                  "value" in L && (L.writable = !0),
                  Object.defineProperty(R, L.key, L);
              }
            }
            return function (R, O, S) {
              return O && I(R.prototype, O), S && I(R, S), R;
            };
          })();
        p(50);
        var m = p(2),
          y = v(m),
          c = p(14),
          o = v(c),
          t = p(8),
          e = v(t),
          u = p(9),
          l = v(u),
          a = p(0),
          r = v(a),
          i = p(15),
          f = v(i),
          n = p(3),
          s = v(n),
          k = p(10),
          g = v(k),
          b = p(34),
          w = v(b);
        function v(I) {
          return I && I.__esModule ? I : { default: I };
        }
        function h(I, R, O) {
          return (
            R in I
              ? Object.defineProperty(I, R, {
                  value: O,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (I[R] = O),
            I
          );
        }
        function d(I, R) {
          if (!(I instanceof R))
            throw new TypeError("Cannot call a class as a function");
        }
        var E = (0, g.default)("quill"),
          T = (function () {
            A(I, null, [
              {
                key: "debug",
                value: function (O) {
                  O === !0 && (O = "log"), g.default.level(O);
                },
              },
              {
                key: "find",
                value: function (O) {
                  return O.__quill || r.default.find(O);
                },
              },
              {
                key: "import",
                value: function (O) {
                  return (
                    this.imports[O] == null &&
                      E.error(
                        "Cannot import " +
                          O +
                          ". Are you sure it was registered?"
                      ),
                    this.imports[O]
                  );
                },
              },
              {
                key: "register",
                value: function (O, S) {
                  var L = this,
                    F =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : !1;
                  if (typeof O != "string") {
                    var M = O.attrName || O.blotName;
                    typeof M == "string"
                      ? this.register("formats/" + M, O, S)
                      : Object.keys(O).forEach(function (x) {
                          L.register(x, O[x], S);
                        });
                  } else
                    this.imports[O] != null &&
                      !F &&
                      E.warn("Overwriting " + O + " with", S),
                      (this.imports[O] = S),
                      (O.startsWith("blots/") || O.startsWith("formats/")) &&
                      S.blotName !== "abstract"
                        ? r.default.register(S)
                        : O.startsWith("modules") &&
                          typeof S.register == "function" &&
                          S.register();
                },
              },
            ]);
            function I(R) {
              var O = this,
                S =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
              if (
                (d(this, I),
                (this.options = q(R, S)),
                (this.container = this.options.container),
                this.container == null)
              )
                return E.error("Invalid Quill container", R);
              this.options.debug && I.debug(this.options.debug);
              var L = this.container.innerHTML.trim();
              this.container.classList.add("ql-container"),
                (this.container.innerHTML = ""),
                (this.container.__quill = this),
                (this.root = this.addContainer("ql-editor")),
                this.root.classList.add("ql-blank"),
                this.root.setAttribute("data-gramm", !1),
                (this.scrollingContainer =
                  this.options.scrollingContainer || this.root),
                (this.emitter = new e.default()),
                (this.scroll = r.default.create(this.root, {
                  emitter: this.emitter,
                  whitelist: this.options.formats,
                })),
                (this.editor = new o.default(this.scroll)),
                (this.selection = new f.default(this.scroll, this.emitter)),
                (this.theme = new this.options.theme(this, this.options)),
                (this.keyboard = this.theme.addModule("keyboard")),
                (this.clipboard = this.theme.addModule("clipboard")),
                (this.history = this.theme.addModule("history")),
                this.theme.init(),
                this.emitter.on(e.default.events.EDITOR_CHANGE, function (M) {
                  M === e.default.events.TEXT_CHANGE &&
                    O.root.classList.toggle("ql-blank", O.editor.isBlank());
                }),
                this.emitter.on(e.default.events.SCROLL_UPDATE, function (
                  M,
                  x
                ) {
                  var j = O.selection.lastRange,
                    U = j && j.length === 0 ? j.index : void 0;
                  D.call(
                    O,
                    function () {
                      return O.editor.update(null, x, U);
                    },
                    M
                  );
                });
              var F = this.clipboard.convert(
                `<div class='ql-editor' style="white-space: normal;">` +
                  L +
                  "<p><br></p></div>"
              );
              this.setContents(F),
                this.history.clear(),
                this.options.placeholder &&
                  this.root.setAttribute(
                    "data-placeholder",
                    this.options.placeholder
                  ),
                this.options.readOnly && this.disable();
            }
            return (
              A(I, [
                {
                  key: "addContainer",
                  value: function (O) {
                    var S =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (typeof O == "string") {
                      var L = O;
                      (O = document.createElement("div")), O.classList.add(L);
                    }
                    return this.container.insertBefore(O, S), O;
                  },
                },
                {
                  key: "blur",
                  value: function () {
                    this.selection.setRange(null);
                  },
                },
                {
                  key: "deleteText",
                  value: function (O, S, L) {
                    var F = this,
                      M = C(O, S, L),
                      x = N(M, 4);
                    return (
                      (O = x[0]),
                      (S = x[1]),
                      (L = x[3]),
                      D.call(
                        this,
                        function () {
                          return F.editor.deleteText(O, S);
                        },
                        L,
                        O,
                        -1 * S
                      )
                    );
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    this.enable(!1);
                  },
                },
                {
                  key: "enable",
                  value: function () {
                    var O =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : !0;
                    this.scroll.enable(O),
                      this.container.classList.toggle("ql-disabled", !O);
                  },
                },
                {
                  key: "focus",
                  value: function () {
                    var O = this.scrollingContainer.scrollTop;
                    this.selection.focus(),
                      (this.scrollingContainer.scrollTop = O),
                      this.scrollIntoView();
                  },
                },
                {
                  key: "format",
                  value: function (O, S) {
                    var L = this,
                      F =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : e.default.sources.API;
                    return D.call(
                      this,
                      function () {
                        var M = L.getSelection(!0),
                          x = new y.default();
                        if (M == null) return x;
                        if (r.default.query(O, r.default.Scope.BLOCK))
                          x = L.editor.formatLine(
                            M.index,
                            M.length,
                            h({}, O, S)
                          );
                        else {
                          if (M.length === 0)
                            return L.selection.format(O, S), x;
                          x = L.editor.formatText(
                            M.index,
                            M.length,
                            h({}, O, S)
                          );
                        }
                        return L.setSelection(M, e.default.sources.SILENT), x;
                      },
                      F
                    );
                  },
                },
                {
                  key: "formatLine",
                  value: function (O, S, L, F, M) {
                    var x = this,
                      j = void 0,
                      U = C(O, S, L, F, M),
                      H = N(U, 4);
                    return (
                      (O = H[0]),
                      (S = H[1]),
                      (j = H[2]),
                      (M = H[3]),
                      D.call(
                        this,
                        function () {
                          return x.editor.formatLine(O, S, j);
                        },
                        M,
                        O,
                        0
                      )
                    );
                  },
                },
                {
                  key: "formatText",
                  value: function (O, S, L, F, M) {
                    var x = this,
                      j = void 0,
                      U = C(O, S, L, F, M),
                      H = N(U, 4);
                    return (
                      (O = H[0]),
                      (S = H[1]),
                      (j = H[2]),
                      (M = H[3]),
                      D.call(
                        this,
                        function () {
                          return x.editor.formatText(O, S, j);
                        },
                        M,
                        O,
                        0
                      )
                    );
                  },
                },
                {
                  key: "getBounds",
                  value: function (O) {
                    var S =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : 0,
                      L = void 0;
                    typeof O == "number"
                      ? (L = this.selection.getBounds(O, S))
                      : (L = this.selection.getBounds(O.index, O.length));
                    var F = this.container.getBoundingClientRect();
                    return {
                      bottom: L.bottom - F.top,
                      height: L.height,
                      left: L.left - F.left,
                      right: L.right - F.left,
                      top: L.top - F.top,
                      width: L.width,
                    };
                  },
                },
                {
                  key: "getContents",
                  value: function () {
                    var O =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : 0,
                      S =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : this.getLength() - O,
                      L = C(O, S),
                      F = N(L, 2);
                    return (
                      (O = F[0]), (S = F[1]), this.editor.getContents(O, S)
                    );
                  },
                },
                {
                  key: "getFormat",
                  value: function () {
                    var O =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : this.getSelection(!0),
                      S =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : 0;
                    return typeof O == "number"
                      ? this.editor.getFormat(O, S)
                      : this.editor.getFormat(O.index, O.length);
                  },
                },
                {
                  key: "getIndex",
                  value: function (O) {
                    return O.offset(this.scroll);
                  },
                },
                {
                  key: "getLength",
                  value: function () {
                    return this.scroll.length();
                  },
                },
                {
                  key: "getLeaf",
                  value: function (O) {
                    return this.scroll.leaf(O);
                  },
                },
                {
                  key: "getLine",
                  value: function (O) {
                    return this.scroll.line(O);
                  },
                },
                {
                  key: "getLines",
                  value: function () {
                    var O =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : 0,
                      S =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : Number.MAX_VALUE;
                    return typeof O != "number"
                      ? this.scroll.lines(O.index, O.length)
                      : this.scroll.lines(O, S);
                  },
                },
                {
                  key: "getModule",
                  value: function (O) {
                    return this.theme.modules[O];
                  },
                },
                {
                  key: "getSelection",
                  value: function () {
                    var O =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : !1;
                    return (
                      O && this.focus(),
                      this.update(),
                      this.selection.getRange()[0]
                    );
                  },
                },
                {
                  key: "getText",
                  value: function () {
                    var O =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : 0,
                      S =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : this.getLength() - O,
                      L = C(O, S),
                      F = N(L, 2);
                    return (O = F[0]), (S = F[1]), this.editor.getText(O, S);
                  },
                },
                {
                  key: "hasFocus",
                  value: function () {
                    return this.selection.hasFocus();
                  },
                },
                {
                  key: "insertEmbed",
                  value: function (O, S, L) {
                    var F = this,
                      M =
                        arguments.length > 3 && arguments[3] !== void 0
                          ? arguments[3]
                          : I.sources.API;
                    return D.call(
                      this,
                      function () {
                        return F.editor.insertEmbed(O, S, L);
                      },
                      M,
                      O
                    );
                  },
                },
                {
                  key: "insertText",
                  value: function (O, S, L, F, M) {
                    var x = this,
                      j = void 0,
                      U = C(O, 0, L, F, M),
                      H = N(U, 4);
                    return (
                      (O = H[0]),
                      (j = H[2]),
                      (M = H[3]),
                      D.call(
                        this,
                        function () {
                          return x.editor.insertText(O, S, j);
                        },
                        M,
                        O,
                        S.length
                      )
                    );
                  },
                },
                {
                  key: "isEnabled",
                  value: function () {
                    return !this.container.classList.contains("ql-disabled");
                  },
                },
                {
                  key: "off",
                  value: function () {
                    return this.emitter.off.apply(this.emitter, arguments);
                  },
                },
                {
                  key: "on",
                  value: function () {
                    return this.emitter.on.apply(this.emitter, arguments);
                  },
                },
                {
                  key: "once",
                  value: function () {
                    return this.emitter.once.apply(this.emitter, arguments);
                  },
                },
                {
                  key: "pasteHTML",
                  value: function (O, S, L) {
                    this.clipboard.dangerouslyPasteHTML(O, S, L);
                  },
                },
                {
                  key: "removeFormat",
                  value: function (O, S, L) {
                    var F = this,
                      M = C(O, S, L),
                      x = N(M, 4);
                    return (
                      (O = x[0]),
                      (S = x[1]),
                      (L = x[3]),
                      D.call(
                        this,
                        function () {
                          return F.editor.removeFormat(O, S);
                        },
                        L,
                        O
                      )
                    );
                  },
                },
                {
                  key: "scrollIntoView",
                  value: function () {
                    this.selection.scrollIntoView(this.scrollingContainer);
                  },
                },
                {
                  key: "setContents",
                  value: function (O) {
                    var S = this,
                      L =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : e.default.sources.API;
                    return D.call(
                      this,
                      function () {
                        O = new y.default(O);
                        var F = S.getLength(),
                          M = S.editor.deleteText(0, F),
                          x = S.editor.applyDelta(O),
                          j = x.ops[x.ops.length - 1];
                        j != null &&
                          typeof j.insert == "string" &&
                          j.insert[j.insert.length - 1] ===
                            `
` &&
                          (S.editor.deleteText(S.getLength() - 1, 1),
                          x.delete(1));
                        var U = M.compose(x);
                        return U;
                      },
                      L
                    );
                  },
                },
                {
                  key: "setSelection",
                  value: function (O, S, L) {
                    if (O == null)
                      this.selection.setRange(null, S || I.sources.API);
                    else {
                      var F = C(O, S, L),
                        M = N(F, 4);
                      (O = M[0]),
                        (S = M[1]),
                        (L = M[3]),
                        this.selection.setRange(new i.Range(O, S), L),
                        L !== e.default.sources.SILENT &&
                          this.selection.scrollIntoView(
                            this.scrollingContainer
                          );
                    }
                  },
                },
                {
                  key: "setText",
                  value: function (O) {
                    var S =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : e.default.sources.API,
                      L = new y.default().insert(O);
                    return this.setContents(L, S);
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var O =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : e.default.sources.USER,
                      S = this.scroll.update(O);
                    return this.selection.update(O), S;
                  },
                },
                {
                  key: "updateContents",
                  value: function (O) {
                    var S = this,
                      L =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : e.default.sources.API;
                    return D.call(
                      this,
                      function () {
                        return (
                          (O = new y.default(O)), S.editor.applyDelta(O, L)
                        );
                      },
                      L,
                      !0
                    );
                  },
                },
              ]),
              I
            );
          })();
        (T.DEFAULTS = {
          bounds: null,
          formats: null,
          modules: {},
          placeholder: "",
          readOnly: !1,
          scrollingContainer: null,
          strict: !0,
          theme: "default",
        }),
          (T.events = e.default.events),
          (T.sources = e.default.sources),
          (T.version = "1.3.7"),
          (T.imports = {
            delta: y.default,
            parchment: r.default,
            "core/module": l.default,
            "core/theme": w.default,
          });
        function q(I, R) {
          if (
            ((R = (0, s.default)(
              !0,
              {
                container: I,
                modules: { clipboard: !0, keyboard: !0, history: !0 },
              },
              R
            )),
            !R.theme || R.theme === T.DEFAULTS.theme)
          )
            R.theme = w.default;
          else if (((R.theme = T.import("themes/" + R.theme)), R.theme == null))
            throw new Error(
              "Invalid theme " + R.theme + ". Did you register it?"
            );
          var O = (0, s.default)(!0, {}, R.theme.DEFAULTS);
          [O, R].forEach(function (F) {
            (F.modules = F.modules || {}),
              Object.keys(F.modules).forEach(function (M) {
                F.modules[M] === !0 && (F.modules[M] = {});
              });
          });
          var S = Object.keys(O.modules).concat(Object.keys(R.modules)),
            L = S.reduce(function (F, M) {
              var x = T.import("modules/" + M);
              return (
                x == null
                  ? E.error(
                      "Cannot load " +
                        M +
                        " module. Are you sure you registered it?"
                    )
                  : (F[M] = x.DEFAULTS || {}),
                F
              );
            }, {});
          return (
            R.modules != null &&
              R.modules.toolbar &&
              R.modules.toolbar.constructor !== Object &&
              (R.modules.toolbar = { container: R.modules.toolbar }),
            (R = (0, s.default)(!0, {}, T.DEFAULTS, { modules: L }, O, R)),
            ["bounds", "container", "scrollingContainer"].forEach(function (F) {
              typeof R[F] == "string" && (R[F] = document.querySelector(R[F]));
            }),
            (R.modules = Object.keys(R.modules).reduce(function (F, M) {
              return R.modules[M] && (F[M] = R.modules[M]), F;
            }, {})),
            R
          );
        }
        function D(I, R, O, S) {
          if (
            this.options.strict &&
            !this.isEnabled() &&
            R === e.default.sources.USER
          )
            return new y.default();
          var L = O == null ? null : this.getSelection(),
            F = this.editor.delta,
            M = I();
          if (
            (L != null &&
              (O === !0 && (O = L.index),
              S == null ? (L = Z(L, M, R)) : S !== 0 && (L = Z(L, O, S, R)),
              this.setSelection(L, e.default.sources.SILENT)),
            M.length() > 0)
          ) {
            var x,
              j = [e.default.events.TEXT_CHANGE, M, F, R];
            if (
              ((x = this.emitter).emit.apply(
                x,
                [e.default.events.EDITOR_CHANGE].concat(j)
              ),
              R !== e.default.sources.SILENT)
            ) {
              var U;
              (U = this.emitter).emit.apply(U, j);
            }
          }
          return M;
        }
        function C(I, R, O, S, L) {
          var F = {};
          return (
            typeof I.index == "number" && typeof I.length == "number"
              ? typeof R != "number"
                ? ((L = S), (S = O), (O = R), (R = I.length), (I = I.index))
                : ((R = I.length), (I = I.index))
              : typeof R != "number" && ((L = S), (S = O), (O = R), (R = 0)),
            (typeof O > "u" ? "undefined" : P(O)) === "object"
              ? ((F = O), (L = S))
              : typeof O == "string" && (S != null ? (F[O] = S) : (L = O)),
            (L = L || e.default.sources.API),
            [I, R, F, L]
          );
        }
        function Z(I, R, O, S) {
          if (I == null) return null;
          var L = void 0,
            F = void 0;
          if (R instanceof y.default) {
            var M = [I.index, I.index + I.length].map(function (H) {
                return R.transformPosition(H, S !== e.default.sources.USER);
              }),
              x = N(M, 2);
            (L = x[0]), (F = x[1]);
          } else {
            var j = [I.index, I.index + I.length].map(function (H) {
                return H < R || (H === R && S === e.default.sources.USER)
                  ? H
                  : O >= 0
                  ? H + O
                  : Math.max(R, H + O);
              }),
              U = N(j, 2);
            (L = U[0]), (F = U[1]);
          }
          return new i.Range(L, F - L);
        }
        (_.expandConfig = q), (_.overload = C), (_.default = T);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function a(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(r, n.key, n);
              }
            }
            return function (r, i, f) {
              return i && a(r.prototype, i), f && a(r, f), r;
            };
          })(),
          N = function a(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var s = Object.getPrototypeOf(r);
              return s === null ? void 0 : a(s, i, f);
            } else {
              if ("value" in n) return n.value;
              var k = n.get;
              return k === void 0 ? void 0 : k.call(f);
            }
          },
          A = p(7),
          m = o(A),
          y = p(0),
          c = o(y);
        function o(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function t(a, r) {
          if (!(a instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(a, r) {
          if (!a)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function u(a, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof r
            );
          (a.prototype = Object.create(r && r.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            r &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(a, r)
                : (a.__proto__ = r));
        }
        var l = (function (a) {
          u(r, a);
          function r() {
            return (
              t(this, r),
              e(
                this,
                (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments)
              )
            );
          }
          return (
            P(
              r,
              [
                {
                  key: "formatAt",
                  value: function (f, n, s, k) {
                    if (
                      r.compare(this.statics.blotName, s) < 0 &&
                      c.default.query(s, c.default.Scope.BLOT)
                    ) {
                      var g = this.isolate(f, n);
                      k && g.wrap(s, k);
                    } else
                      N(
                        r.prototype.__proto__ ||
                          Object.getPrototypeOf(r.prototype),
                        "formatAt",
                        this
                      ).call(this, f, n, s, k);
                  },
                },
                {
                  key: "optimize",
                  value: function (f) {
                    if (
                      (N(
                        r.prototype.__proto__ ||
                          Object.getPrototypeOf(r.prototype),
                        "optimize",
                        this
                      ).call(this, f),
                      this.parent instanceof r &&
                        r.compare(
                          this.statics.blotName,
                          this.parent.statics.blotName
                        ) > 0)
                    ) {
                      var n = this.parent.isolate(this.offset(), this.length());
                      this.moveChildren(n), n.wrap(this);
                    }
                  },
                },
              ],
              [
                {
                  key: "compare",
                  value: function (f, n) {
                    var s = r.order.indexOf(f),
                      k = r.order.indexOf(n);
                    return s >= 0 || k >= 0
                      ? s - k
                      : f === n
                      ? 0
                      : f < n
                      ? -1
                      : 1;
                  },
                },
              ]
            ),
            r
          );
        })(c.default.Inline);
        (l.allowedChildren = [l, c.default.Embed, m.default]),
          (l.order = [
            "cursor",
            "inline",
            "underline",
            "strike",
            "italic",
            "bold",
            "script",
            "link",
            "code",
          ]),
          (_.default = l);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(0),
          N = A(P);
        function A(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function m(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function c(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        }
        var o = (function (t) {
          c(e, t);
          function e() {
            return (
              m(this, e),
              y(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return e;
        })(N.default.Text);
        _.default = o;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function i(f, n) {
              for (var s = 0; s < n.length; s++) {
                var k = n[s];
                (k.enumerable = k.enumerable || !1),
                  (k.configurable = !0),
                  "value" in k && (k.writable = !0),
                  Object.defineProperty(f, k.key, k);
              }
            }
            return function (f, n, s) {
              return n && i(f.prototype, n), s && i(f, s), f;
            };
          })(),
          N = function i(f, n, s) {
            f === null && (f = Function.prototype);
            var k = Object.getOwnPropertyDescriptor(f, n);
            if (k === void 0) {
              var g = Object.getPrototypeOf(f);
              return g === null ? void 0 : i(g, n, s);
            } else {
              if ("value" in k) return k.value;
              var b = k.get;
              return b === void 0 ? void 0 : b.call(s);
            }
          },
          A = p(54),
          m = o(A),
          y = p(10),
          c = o(y);
        function o(i) {
          return i && i.__esModule ? i : { default: i };
        }
        function t(i, f) {
          if (!(i instanceof f))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(i, f) {
          if (!i)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return f && (typeof f == "object" || typeof f == "function") ? f : i;
        }
        function u(i, f) {
          if (typeof f != "function" && f !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof f
            );
          (i.prototype = Object.create(f && f.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            f &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(i, f)
                : (i.__proto__ = f));
        }
        var l = (0, c.default)("quill:events"),
          a = ["selectionchange", "mousedown", "mouseup", "click"];
        a.forEach(function (i) {
          document.addEventListener(i, function () {
            for (var f = arguments.length, n = Array(f), s = 0; s < f; s++)
              n[s] = arguments[s];
            [].slice
              .call(document.querySelectorAll(".ql-container"))
              .forEach(function (k) {
                if (k.__quill && k.__quill.emitter) {
                  var g;
                  (g = k.__quill.emitter).handleDOM.apply(g, n);
                }
              });
          });
        });
        var r = (function (i) {
          u(f, i);
          function f() {
            t(this, f);
            var n = e(
              this,
              (f.__proto__ || Object.getPrototypeOf(f)).call(this)
            );
            return (n.listeners = {}), n.on("error", l.error), n;
          }
          return (
            P(f, [
              {
                key: "emit",
                value: function () {
                  l.log.apply(l, arguments),
                    N(
                      f.prototype.__proto__ ||
                        Object.getPrototypeOf(f.prototype),
                      "emit",
                      this
                    ).apply(this, arguments);
                },
              },
              {
                key: "handleDOM",
                value: function (s) {
                  for (
                    var k = arguments.length,
                      g = Array(k > 1 ? k - 1 : 0),
                      b = 1;
                    b < k;
                    b++
                  )
                    g[b - 1] = arguments[b];
                  (this.listeners[s.type] || []).forEach(function (w) {
                    var v = w.node,
                      h = w.handler;
                    (s.target === v || v.contains(s.target)) &&
                      h.apply(void 0, [s].concat(g));
                  });
                },
              },
              {
                key: "listenDOM",
                value: function (s, k, g) {
                  this.listeners[s] || (this.listeners[s] = []),
                    this.listeners[s].push({ node: k, handler: g });
                },
              },
            ]),
            f
          );
        })(m.default);
        (r.events = {
          EDITOR_CHANGE: "editor-change",
          SCROLL_BEFORE_UPDATE: "scroll-before-update",
          SCROLL_OPTIMIZE: "scroll-optimize",
          SCROLL_UPDATE: "scroll-update",
          SELECTION_CHANGE: "selection-change",
          TEXT_CHANGE: "text-change",
        }),
          (r.sources = { API: "api", SILENT: "silent", USER: "user" }),
          (_.default = r);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        function P(A, m) {
          if (!(A instanceof m))
            throw new TypeError("Cannot call a class as a function");
        }
        var N = function A(m) {
          var y =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          P(this, A), (this.quill = m), (this.options = y);
        };
        (N.DEFAULTS = {}), (_.default = N);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = ["error", "warn", "log", "info"],
          N = "warn";
        function A(y) {
          if (P.indexOf(y) <= P.indexOf(N)) {
            for (
              var c, o = arguments.length, t = Array(o > 1 ? o - 1 : 0), e = 1;
              e < o;
              e++
            )
              t[e - 1] = arguments[e];
            (c = console)[y].apply(c, t);
          }
        }
        function m(y) {
          return P.reduce(function (c, o) {
            return (c[o] = A.bind(console, o, y)), c;
          }, {});
        }
        (A.level = m.level = function (y) {
          N = y;
        }),
          (_.default = m);
      },
      function (B, _, p) {
        var P = Array.prototype.slice,
          N = p(52),
          A = p(53),
          m = (B.exports = function (t, e, u) {
            return (
              u || (u = {}),
              t === e
                ? !0
                : t instanceof Date && e instanceof Date
                ? t.getTime() === e.getTime()
                : !t || !e || (typeof t != "object" && typeof e != "object")
                ? u.strict
                  ? t === e
                  : t == e
                : o(t, e, u)
            );
          });
        function y(t) {
          return t == null;
        }
        function c(t) {
          return !(
            !t ||
            typeof t != "object" ||
            typeof t.length != "number" ||
            typeof t.copy != "function" ||
            typeof t.slice != "function" ||
            (t.length > 0 && typeof t[0] != "number")
          );
        }
        function o(t, e, u) {
          var l, a;
          if (y(t) || y(e) || t.prototype !== e.prototype) return !1;
          if (A(t))
            return A(e) ? ((t = P.call(t)), (e = P.call(e)), m(t, e, u)) : !1;
          if (c(t)) {
            if (!c(e) || t.length !== e.length) return !1;
            for (l = 0; l < t.length; l++) if (t[l] !== e[l]) return !1;
            return !0;
          }
          try {
            var r = N(t),
              i = N(e);
          } catch {
            return !1;
          }
          if (r.length != i.length) return !1;
          for (r.sort(), i.sort(), l = r.length - 1; l >= 0; l--)
            if (r[l] != i[l]) return !1;
          for (l = r.length - 1; l >= 0; l--)
            if (((a = r[l]), !m(t[a], e[a], u))) return !1;
          return typeof t == typeof e;
        }
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(1),
          N = (function () {
            function A(m, y, c) {
              c === void 0 && (c = {}), (this.attrName = m), (this.keyName = y);
              var o = P.Scope.TYPE & P.Scope.ATTRIBUTE;
              c.scope != null
                ? (this.scope = (c.scope & P.Scope.LEVEL) | o)
                : (this.scope = P.Scope.ATTRIBUTE),
                c.whitelist != null && (this.whitelist = c.whitelist);
            }
            return (
              (A.keys = function (m) {
                return [].map.call(m.attributes, function (y) {
                  return y.name;
                });
              }),
              (A.prototype.add = function (m, y) {
                return this.canAdd(m, y)
                  ? (m.setAttribute(this.keyName, y), !0)
                  : !1;
              }),
              (A.prototype.canAdd = function (m, y) {
                var c = P.query(m, P.Scope.BLOT & (this.scope | P.Scope.TYPE));
                return c == null
                  ? !1
                  : this.whitelist == null
                  ? !0
                  : typeof y == "string"
                  ? this.whitelist.indexOf(y.replace(/["']/g, "")) > -1
                  : this.whitelist.indexOf(y) > -1;
              }),
              (A.prototype.remove = function (m) {
                m.removeAttribute(this.keyName);
              }),
              (A.prototype.value = function (m) {
                var y = m.getAttribute(this.keyName);
                return this.canAdd(m, y) && y ? y : "";
              }),
              A
            );
          })();
        _.default = N;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.default = _.Code = void 0);
        var P = (function () {
            function b(w, v) {
              var h = [],
                d = !0,
                E = !1,
                T = void 0;
              try {
                for (
                  var q = w[Symbol.iterator](), D;
                  !(d = (D = q.next()).done) &&
                  (h.push(D.value), !(v && h.length === v));
                  d = !0
                );
              } catch (C) {
                (E = !0), (T = C);
              } finally {
                try {
                  !d && q.return && q.return();
                } finally {
                  if (E) throw T;
                }
              }
              return h;
            }
            return function (w, v) {
              if (Array.isArray(w)) return w;
              if (Symbol.iterator in Object(w)) return b(w, v);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          N = (function () {
            function b(w, v) {
              for (var h = 0; h < v.length; h++) {
                var d = v[h];
                (d.enumerable = d.enumerable || !1),
                  (d.configurable = !0),
                  "value" in d && (d.writable = !0),
                  Object.defineProperty(w, d.key, d);
              }
            }
            return function (w, v, h) {
              return v && b(w.prototype, v), h && b(w, h), w;
            };
          })(),
          A = function b(w, v, h) {
            w === null && (w = Function.prototype);
            var d = Object.getOwnPropertyDescriptor(w, v);
            if (d === void 0) {
              var E = Object.getPrototypeOf(w);
              return E === null ? void 0 : b(E, v, h);
            } else {
              if ("value" in d) return d.value;
              var T = d.get;
              return T === void 0 ? void 0 : T.call(h);
            }
          },
          m = p(2),
          y = i(m),
          c = p(0),
          o = i(c),
          t = p(4),
          e = i(t),
          u = p(6),
          l = i(u),
          a = p(7),
          r = i(a);
        function i(b) {
          return b && b.__esModule ? b : { default: b };
        }
        function f(b, w) {
          if (!(b instanceof w))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(b, w) {
          if (!b)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return w && (typeof w == "object" || typeof w == "function") ? w : b;
        }
        function s(b, w) {
          if (typeof w != "function" && w !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof w
            );
          (b.prototype = Object.create(w && w.prototype, {
            constructor: {
              value: b,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            w &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(b, w)
                : (b.__proto__ = w));
        }
        var k = (function (b) {
          s(w, b);
          function w() {
            return (
              f(this, w),
              n(
                this,
                (w.__proto__ || Object.getPrototypeOf(w)).apply(this, arguments)
              )
            );
          }
          return w;
        })(l.default);
        (k.blotName = "code"), (k.tagName = "CODE");
        var g = (function (b) {
          s(w, b);
          function w() {
            return (
              f(this, w),
              n(
                this,
                (w.__proto__ || Object.getPrototypeOf(w)).apply(this, arguments)
              )
            );
          }
          return (
            N(
              w,
              [
                {
                  key: "delta",
                  value: function () {
                    var h = this,
                      d = this.domNode.textContent;
                    return (
                      d.endsWith(`
`) && (d = d.slice(0, -1)),
                      d
                        .split(
                          `
`
                        )
                        .reduce(function (E, T) {
                          return E.insert(T).insert(
                            `
`,
                            h.formats()
                          );
                        }, new y.default())
                    );
                  },
                },
                {
                  key: "format",
                  value: function (h, d) {
                    if (!(h === this.statics.blotName && d)) {
                      var E = this.descendant(r.default, this.length() - 1),
                        T = P(E, 1),
                        q = T[0];
                      q != null && q.deleteAt(q.length() - 1, 1),
                        A(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          "format",
                          this
                        ).call(this, h, d);
                    }
                  },
                },
                {
                  key: "formatAt",
                  value: function (h, d, E, T) {
                    if (
                      d !== 0 &&
                      !(
                        o.default.query(E, o.default.Scope.BLOCK) == null ||
                        (E === this.statics.blotName &&
                          T === this.statics.formats(this.domNode))
                      )
                    ) {
                      var q = this.newlineIndex(h);
                      if (!(q < 0 || q >= h + d)) {
                        var D = this.newlineIndex(h, !0) + 1,
                          C = q - D + 1,
                          Z = this.isolate(D, C),
                          I = Z.next;
                        Z.format(E, T),
                          I instanceof w && I.formatAt(0, h - D + d - C, E, T);
                      }
                    }
                  },
                },
                {
                  key: "insertAt",
                  value: function (h, d, E) {
                    if (E == null) {
                      var T = this.descendant(r.default, h),
                        q = P(T, 2),
                        D = q[0],
                        C = q[1];
                      D.insertAt(C, d);
                    }
                  },
                },
                {
                  key: "length",
                  value: function () {
                    var h = this.domNode.textContent.length;
                    return this.domNode.textContent.endsWith(`
`)
                      ? h
                      : h + 1;
                  },
                },
                {
                  key: "newlineIndex",
                  value: function (h) {
                    var d =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1;
                    if (d)
                      return this.domNode.textContent.slice(0, h).lastIndexOf(`
`);
                    var E = this.domNode.textContent.slice(h).indexOf(`
`);
                    return E > -1 ? h + E : -1;
                  },
                },
                {
                  key: "optimize",
                  value: function (h) {
                    this.domNode.textContent.endsWith(`
`) ||
                      this.appendChild(
                        o.default.create(
                          "text",
                          `
`
                        )
                      ),
                      A(
                        w.prototype.__proto__ ||
                          Object.getPrototypeOf(w.prototype),
                        "optimize",
                        this
                      ).call(this, h);
                    var d = this.next;
                    d != null &&
                      d.prev === this &&
                      d.statics.blotName === this.statics.blotName &&
                      this.statics.formats(this.domNode) ===
                        d.statics.formats(d.domNode) &&
                      (d.optimize(h), d.moveChildren(this), d.remove());
                  },
                },
                {
                  key: "replace",
                  value: function (h) {
                    A(
                      w.prototype.__proto__ ||
                        Object.getPrototypeOf(w.prototype),
                      "replace",
                      this
                    ).call(this, h),
                      [].slice
                        .call(this.domNode.querySelectorAll("*"))
                        .forEach(function (d) {
                          var E = o.default.find(d);
                          E == null
                            ? d.parentNode.removeChild(d)
                            : E instanceof o.default.Embed
                            ? E.remove()
                            : E.unwrap();
                        });
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (h) {
                    var d = A(
                      w.__proto__ || Object.getPrototypeOf(w),
                      "create",
                      this
                    ).call(this, h);
                    return d.setAttribute("spellcheck", !1), d;
                  },
                },
                {
                  key: "formats",
                  value: function () {
                    return !0;
                  },
                },
              ]
            ),
            w
          );
        })(e.default);
        (g.blotName = "code-block"),
          (g.tagName = "PRE"),
          (g.TAB = "  "),
          (_.Code = k),
          (_.default = g);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (I) {
                  return typeof I;
                }
              : function (I) {
                  return I &&
                    typeof Symbol == "function" &&
                    I.constructor === Symbol &&
                    I !== Symbol.prototype
                    ? "symbol"
                    : typeof I;
                },
          N = (function () {
            function I(R, O) {
              var S = [],
                L = !0,
                F = !1,
                M = void 0;
              try {
                for (
                  var x = R[Symbol.iterator](), j;
                  !(L = (j = x.next()).done) &&
                  (S.push(j.value), !(O && S.length === O));
                  L = !0
                );
              } catch (U) {
                (F = !0), (M = U);
              } finally {
                try {
                  !L && x.return && x.return();
                } finally {
                  if (F) throw M;
                }
              }
              return S;
            }
            return function (R, O) {
              if (Array.isArray(R)) return R;
              if (Symbol.iterator in Object(R)) return I(R, O);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          A = (function () {
            function I(R, O) {
              for (var S = 0; S < O.length; S++) {
                var L = O[S];
                (L.enumerable = L.enumerable || !1),
                  (L.configurable = !0),
                  "value" in L && (L.writable = !0),
                  Object.defineProperty(R, L.key, L);
              }
            }
            return function (R, O, S) {
              return O && I(R.prototype, O), S && I(R, S), R;
            };
          })(),
          m = p(2),
          y = d(m),
          c = p(20),
          o = d(c),
          t = p(0),
          e = d(t),
          u = p(13),
          l = d(u),
          a = p(24),
          r = d(a),
          i = p(4),
          f = d(i),
          n = p(16),
          s = d(n),
          k = p(21),
          g = d(k),
          b = p(11),
          w = d(b),
          v = p(3),
          h = d(v);
        function d(I) {
          return I && I.__esModule ? I : { default: I };
        }
        function E(I, R, O) {
          return (
            R in I
              ? Object.defineProperty(I, R, {
                  value: O,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (I[R] = O),
            I
          );
        }
        function T(I, R) {
          if (!(I instanceof R))
            throw new TypeError("Cannot call a class as a function");
        }
        var q = /^[ -~]*$/,
          D = (function () {
            function I(R) {
              T(this, I), (this.scroll = R), (this.delta = this.getDelta());
            }
            return (
              A(I, [
                {
                  key: "applyDelta",
                  value: function (O) {
                    var S = this,
                      L = !1;
                    this.scroll.update();
                    var F = this.scroll.length();
                    return (
                      this.scroll.batchStart(),
                      (O = Z(O)),
                      O.reduce(function (M, x) {
                        var j = x.retain || x.delete || x.insert.length || 1,
                          U = x.attributes || {};
                        if (x.insert != null) {
                          if (typeof x.insert == "string") {
                            var H = x.insert;
                            H.endsWith(`
`) &&
                              L &&
                              ((L = !1), (H = H.slice(0, -1))),
                              M >= F &&
                                !H.endsWith(`
`) &&
                                (L = !0),
                              S.scroll.insertAt(M, H);
                            var V = S.scroll.line(M),
                              Y = N(V, 2),
                              X = Y[0],
                              Q = Y[1],
                              nt = (0, h.default)({}, (0, i.bubbleFormats)(X));
                            if (X instanceof f.default) {
                              var rt = X.descendant(e.default.Leaf, Q),
                                at = N(rt, 1),
                                lt = at[0];
                              nt = (0, h.default)(nt, (0, i.bubbleFormats)(lt));
                            }
                            U = o.default.attributes.diff(nt, U) || {};
                          } else if (P(x.insert) === "object") {
                            var z = Object.keys(x.insert)[0];
                            if (z == null) return M;
                            S.scroll.insertAt(M, z, x.insert[z]);
                          }
                          F += j;
                        }
                        return (
                          Object.keys(U).forEach(function (K) {
                            S.scroll.formatAt(M, j, K, U[K]);
                          }),
                          M + j
                        );
                      }, 0),
                      O.reduce(function (M, x) {
                        return typeof x.delete == "number"
                          ? (S.scroll.deleteAt(M, x.delete), M)
                          : M + (x.retain || x.insert.length || 1);
                      }, 0),
                      this.scroll.batchEnd(),
                      this.update(O)
                    );
                  },
                },
                {
                  key: "deleteText",
                  value: function (O, S) {
                    return (
                      this.scroll.deleteAt(O, S),
                      this.update(new y.default().retain(O).delete(S))
                    );
                  },
                },
                {
                  key: "formatLine",
                  value: function (O, S) {
                    var L = this,
                      F =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : {};
                    return (
                      this.scroll.update(),
                      Object.keys(F).forEach(function (M) {
                        if (
                          !(
                            L.scroll.whitelist != null && !L.scroll.whitelist[M]
                          )
                        ) {
                          var x = L.scroll.lines(O, Math.max(S, 1)),
                            j = S;
                          x.forEach(function (U) {
                            var H = U.length();
                            if (!(U instanceof l.default)) U.format(M, F[M]);
                            else {
                              var V = O - U.offset(L.scroll),
                                Y = U.newlineIndex(V + j) - V + 1;
                              U.formatAt(V, Y, M, F[M]);
                            }
                            j -= H;
                          });
                        }
                      }),
                      this.scroll.optimize(),
                      this.update(
                        new y.default().retain(O).retain(S, (0, g.default)(F))
                      )
                    );
                  },
                },
                {
                  key: "formatText",
                  value: function (O, S) {
                    var L = this,
                      F =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : {};
                    return (
                      Object.keys(F).forEach(function (M) {
                        L.scroll.formatAt(O, S, M, F[M]);
                      }),
                      this.update(
                        new y.default().retain(O).retain(S, (0, g.default)(F))
                      )
                    );
                  },
                },
                {
                  key: "getContents",
                  value: function (O, S) {
                    return this.delta.slice(O, O + S);
                  },
                },
                {
                  key: "getDelta",
                  value: function () {
                    return this.scroll.lines().reduce(function (O, S) {
                      return O.concat(S.delta());
                    }, new y.default());
                  },
                },
                {
                  key: "getFormat",
                  value: function (O) {
                    var S =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : 0,
                      L = [],
                      F = [];
                    S === 0
                      ? this.scroll.path(O).forEach(function (x) {
                          var j = N(x, 1),
                            U = j[0];
                          U instanceof f.default
                            ? L.push(U)
                            : U instanceof e.default.Leaf && F.push(U);
                        })
                      : ((L = this.scroll.lines(O, S)),
                        (F = this.scroll.descendants(e.default.Leaf, O, S)));
                    var M = [L, F].map(function (x) {
                      if (x.length === 0) return {};
                      for (
                        var j = (0, i.bubbleFormats)(x.shift());
                        Object.keys(j).length > 0;

                      ) {
                        var U = x.shift();
                        if (U == null) return j;
                        j = C((0, i.bubbleFormats)(U), j);
                      }
                      return j;
                    });
                    return h.default.apply(h.default, M);
                  },
                },
                {
                  key: "getText",
                  value: function (O, S) {
                    return this.getContents(O, S)
                      .filter(function (L) {
                        return typeof L.insert == "string";
                      })
                      .map(function (L) {
                        return L.insert;
                      })
                      .join("");
                  },
                },
                {
                  key: "insertEmbed",
                  value: function (O, S, L) {
                    return (
                      this.scroll.insertAt(O, S, L),
                      this.update(new y.default().retain(O).insert(E({}, S, L)))
                    );
                  },
                },
                {
                  key: "insertText",
                  value: function (O, S) {
                    var L = this,
                      F =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : {};
                    return (
                      (S = S.replace(
                        /\r\n/g,
                        `
`
                      ).replace(
                        /\r/g,
                        `
`
                      )),
                      this.scroll.insertAt(O, S),
                      Object.keys(F).forEach(function (M) {
                        L.scroll.formatAt(O, S.length, M, F[M]);
                      }),
                      this.update(
                        new y.default().retain(O).insert(S, (0, g.default)(F))
                      )
                    );
                  },
                },
                {
                  key: "isBlank",
                  value: function () {
                    if (this.scroll.children.length == 0) return !0;
                    if (this.scroll.children.length > 1) return !1;
                    var O = this.scroll.children.head;
                    return O.statics.blotName !== f.default.blotName ||
                      O.children.length > 1
                      ? !1
                      : O.children.head instanceof s.default;
                  },
                },
                {
                  key: "removeFormat",
                  value: function (O, S) {
                    var L = this.getText(O, S),
                      F = this.scroll.line(O + S),
                      M = N(F, 2),
                      x = M[0],
                      j = M[1],
                      U = 0,
                      H = new y.default();
                    x != null &&
                      (x instanceof l.default
                        ? (U = x.newlineIndex(j) - j + 1)
                        : (U = x.length() - j),
                      (H = x.delta().slice(j, j + U - 1).insert(`
`)));
                    var V = this.getContents(O, S + U),
                      Y = V.diff(new y.default().insert(L).concat(H)),
                      X = new y.default().retain(O).concat(Y);
                    return this.applyDelta(X);
                  },
                },
                {
                  key: "update",
                  value: function (O) {
                    var S =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : [],
                      L =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : void 0,
                      F = this.delta;
                    if (
                      S.length === 1 &&
                      S[0].type === "characterData" &&
                      S[0].target.data.match(q) &&
                      e.default.find(S[0].target)
                    ) {
                      var M = e.default.find(S[0].target),
                        x = (0, i.bubbleFormats)(M),
                        j = M.offset(this.scroll),
                        U = S[0].oldValue.replace(r.default.CONTENTS, ""),
                        H = new y.default().insert(U),
                        V = new y.default().insert(M.value()),
                        Y = new y.default().retain(j).concat(H.diff(V, L));
                      (O = Y.reduce(function (X, Q) {
                        return Q.insert ? X.insert(Q.insert, x) : X.push(Q);
                      }, new y.default())),
                        (this.delta = F.compose(O));
                    } else
                      (this.delta = this.getDelta()),
                        (!O || !(0, w.default)(F.compose(O), this.delta)) &&
                          (O = F.diff(this.delta, L));
                    return O;
                  },
                },
              ]),
              I
            );
          })();
        function C(I, R) {
          return Object.keys(R).reduce(function (O, S) {
            return (
              I[S] == null ||
                (R[S] === I[S]
                  ? (O[S] = R[S])
                  : Array.isArray(R[S])
                  ? R[S].indexOf(I[S]) < 0 && (O[S] = R[S].concat([I[S]]))
                  : (O[S] = [R[S], I[S]])),
              O
            );
          }, {});
        }
        function Z(I) {
          return I.reduce(function (R, O) {
            if (O.insert === 1) {
              var S = (0, g.default)(O.attributes);
              return delete S.image, R.insert({ image: O.attributes.image }, S);
            }
            if (
              (O.attributes != null &&
                (O.attributes.list === !0 || O.attributes.bullet === !0) &&
                ((O = (0, g.default)(O)),
                O.attributes.list
                  ? (O.attributes.list = "ordered")
                  : ((O.attributes.list = "bullet"),
                    delete O.attributes.bullet)),
              typeof O.insert == "string")
            ) {
              var L = O.insert
                .replace(
                  /\r\n/g,
                  `
`
                )
                .replace(
                  /\r/g,
                  `
`
                );
              return R.insert(L, O.attributes);
            }
            return R.push(O);
          }, new y.default());
        }
        _.default = D;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.default = _.Range = void 0);
        var P = (function () {
            function b(w, v) {
              var h = [],
                d = !0,
                E = !1,
                T = void 0;
              try {
                for (
                  var q = w[Symbol.iterator](), D;
                  !(d = (D = q.next()).done) &&
                  (h.push(D.value), !(v && h.length === v));
                  d = !0
                );
              } catch (C) {
                (E = !0), (T = C);
              } finally {
                try {
                  !d && q.return && q.return();
                } finally {
                  if (E) throw T;
                }
              }
              return h;
            }
            return function (w, v) {
              if (Array.isArray(w)) return w;
              if (Symbol.iterator in Object(w)) return b(w, v);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          N = (function () {
            function b(w, v) {
              for (var h = 0; h < v.length; h++) {
                var d = v[h];
                (d.enumerable = d.enumerable || !1),
                  (d.configurable = !0),
                  "value" in d && (d.writable = !0),
                  Object.defineProperty(w, d.key, d);
              }
            }
            return function (w, v, h) {
              return v && b(w.prototype, v), h && b(w, h), w;
            };
          })(),
          A = p(0),
          m = r(A),
          y = p(21),
          c = r(y),
          o = p(11),
          t = r(o),
          e = p(8),
          u = r(e),
          l = p(10),
          a = r(l);
        function r(b) {
          return b && b.__esModule ? b : { default: b };
        }
        function i(b) {
          if (Array.isArray(b)) {
            for (var w = 0, v = Array(b.length); w < b.length; w++) v[w] = b[w];
            return v;
          } else return Array.from(b);
        }
        function f(b, w) {
          if (!(b instanceof w))
            throw new TypeError("Cannot call a class as a function");
        }
        var n = (0, a.default)("quill:selection"),
          s = function b(w) {
            var v =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0;
            f(this, b), (this.index = w), (this.length = v);
          },
          k = (function () {
            function b(w, v) {
              var h = this;
              f(this, b),
                (this.emitter = v),
                (this.scroll = w),
                (this.composing = !1),
                (this.mouseDown = !1),
                (this.root = this.scroll.domNode),
                (this.cursor = m.default.create("cursor", this)),
                (this.lastRange = this.savedRange = new s(0, 0)),
                this.handleComposition(),
                this.handleDragging(),
                this.emitter.listenDOM(
                  "selectionchange",
                  document,
                  function () {
                    h.mouseDown ||
                      setTimeout(h.update.bind(h, u.default.sources.USER), 1);
                  }
                ),
                this.emitter.on(u.default.events.EDITOR_CHANGE, function (
                  d,
                  E
                ) {
                  d === u.default.events.TEXT_CHANGE &&
                    E.length() > 0 &&
                    h.update(u.default.sources.SILENT);
                }),
                this.emitter.on(
                  u.default.events.SCROLL_BEFORE_UPDATE,
                  function () {
                    if (h.hasFocus()) {
                      var d = h.getNativeRange();
                      d != null &&
                        d.start.node !== h.cursor.textNode &&
                        h.emitter.once(
                          u.default.events.SCROLL_UPDATE,
                          function () {
                            try {
                              h.setNativeRange(
                                d.start.node,
                                d.start.offset,
                                d.end.node,
                                d.end.offset
                              );
                            } catch {}
                          }
                        );
                    }
                  }
                ),
                this.emitter.on(u.default.events.SCROLL_OPTIMIZE, function (
                  d,
                  E
                ) {
                  if (E.range) {
                    var T = E.range,
                      q = T.startNode,
                      D = T.startOffset,
                      C = T.endNode,
                      Z = T.endOffset;
                    h.setNativeRange(q, D, C, Z);
                  }
                }),
                this.update(u.default.sources.SILENT);
            }
            return (
              N(b, [
                {
                  key: "handleComposition",
                  value: function () {
                    var v = this;
                    this.root.addEventListener("compositionstart", function () {
                      v.composing = !0;
                    }),
                      this.root.addEventListener("compositionend", function () {
                        if (((v.composing = !1), v.cursor.parent)) {
                          var h = v.cursor.restore();
                          if (!h) return;
                          setTimeout(function () {
                            v.setNativeRange(
                              h.startNode,
                              h.startOffset,
                              h.endNode,
                              h.endOffset
                            );
                          }, 1);
                        }
                      });
                  },
                },
                {
                  key: "handleDragging",
                  value: function () {
                    var v = this;
                    this.emitter.listenDOM(
                      "mousedown",
                      document.body,
                      function () {
                        v.mouseDown = !0;
                      }
                    ),
                      this.emitter.listenDOM(
                        "mouseup",
                        document.body,
                        function () {
                          (v.mouseDown = !1), v.update(u.default.sources.USER);
                        }
                      );
                  },
                },
                {
                  key: "focus",
                  value: function () {
                    this.hasFocus() ||
                      (this.root.focus(), this.setRange(this.savedRange));
                  },
                },
                {
                  key: "format",
                  value: function (v, h) {
                    if (
                      !(
                        this.scroll.whitelist != null &&
                        !this.scroll.whitelist[v]
                      )
                    ) {
                      this.scroll.update();
                      var d = this.getNativeRange();
                      if (
                        !(
                          d == null ||
                          !d.native.collapsed ||
                          m.default.query(v, m.default.Scope.BLOCK)
                        )
                      ) {
                        if (d.start.node !== this.cursor.textNode) {
                          var E = m.default.find(d.start.node, !1);
                          if (E == null) return;
                          if (E instanceof m.default.Leaf) {
                            var T = E.split(d.start.offset);
                            E.parent.insertBefore(this.cursor, T);
                          } else E.insertBefore(this.cursor, d.start.node);
                          this.cursor.attach();
                        }
                        this.cursor.format(v, h),
                          this.scroll.optimize(),
                          this.setNativeRange(
                            this.cursor.textNode,
                            this.cursor.textNode.data.length
                          ),
                          this.update();
                      }
                    }
                  },
                },
                {
                  key: "getBounds",
                  value: function (v) {
                    var h =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : 0,
                      d = this.scroll.length();
                    (v = Math.min(v, d - 1)), (h = Math.min(v + h, d - 1) - v);
                    var E = void 0,
                      T = this.scroll.leaf(v),
                      q = P(T, 2),
                      D = q[0],
                      C = q[1];
                    if (D == null) return null;
                    var Z = D.position(C, !0),
                      I = P(Z, 2);
                    (E = I[0]), (C = I[1]);
                    var R = document.createRange();
                    if (h > 0) {
                      R.setStart(E, C);
                      var O = this.scroll.leaf(v + h),
                        S = P(O, 2);
                      if (((D = S[0]), (C = S[1]), D == null)) return null;
                      var L = D.position(C, !0),
                        F = P(L, 2);
                      return (
                        (E = F[0]),
                        (C = F[1]),
                        R.setEnd(E, C),
                        R.getBoundingClientRect()
                      );
                    } else {
                      var M = "left",
                        x = void 0;
                      return (
                        E instanceof Text
                          ? (C < E.data.length
                              ? (R.setStart(E, C), R.setEnd(E, C + 1))
                              : (R.setStart(E, C - 1),
                                R.setEnd(E, C),
                                (M = "right")),
                            (x = R.getBoundingClientRect()))
                          : ((x = D.domNode.getBoundingClientRect()),
                            C > 0 && (M = "right")),
                        {
                          bottom: x.top + x.height,
                          height: x.height,
                          left: x[M],
                          right: x[M],
                          top: x.top,
                          width: 0,
                        }
                      );
                    }
                  },
                },
                {
                  key: "getNativeRange",
                  value: function () {
                    var v = document.getSelection();
                    if (v == null || v.rangeCount <= 0) return null;
                    var h = v.getRangeAt(0);
                    if (h == null) return null;
                    var d = this.normalizeNative(h);
                    return n.info("getNativeRange", d), d;
                  },
                },
                {
                  key: "getRange",
                  value: function () {
                    var v = this.getNativeRange();
                    if (v == null) return [null, null];
                    var h = this.normalizedToRange(v);
                    return [h, v];
                  },
                },
                {
                  key: "hasFocus",
                  value: function () {
                    return document.activeElement === this.root;
                  },
                },
                {
                  key: "normalizedToRange",
                  value: function (v) {
                    var h = this,
                      d = [[v.start.node, v.start.offset]];
                    v.native.collapsed || d.push([v.end.node, v.end.offset]);
                    var E = d.map(function (D) {
                        var C = P(D, 2),
                          Z = C[0],
                          I = C[1],
                          R = m.default.find(Z, !0),
                          O = R.offset(h.scroll);
                        return I === 0
                          ? O
                          : R instanceof m.default.Container
                          ? O + R.length()
                          : O + R.index(Z, I);
                      }),
                      T = Math.min(
                        Math.max.apply(Math, i(E)),
                        this.scroll.length() - 1
                      ),
                      q = Math.min.apply(Math, [T].concat(i(E)));
                    return new s(q, T - q);
                  },
                },
                {
                  key: "normalizeNative",
                  value: function (v) {
                    if (
                      !g(this.root, v.startContainer) ||
                      (!v.collapsed && !g(this.root, v.endContainer))
                    )
                      return null;
                    var h = {
                      start: { node: v.startContainer, offset: v.startOffset },
                      end: { node: v.endContainer, offset: v.endOffset },
                      native: v,
                    };
                    return (
                      [h.start, h.end].forEach(function (d) {
                        for (
                          var E = d.node, T = d.offset;
                          !(E instanceof Text) && E.childNodes.length > 0;

                        )
                          if (E.childNodes.length > T)
                            (E = E.childNodes[T]), (T = 0);
                          else if (E.childNodes.length === T)
                            (E = E.lastChild),
                              (T =
                                E instanceof Text
                                  ? E.data.length
                                  : E.childNodes.length + 1);
                          else break;
                        (d.node = E), (d.offset = T);
                      }),
                      h
                    );
                  },
                },
                {
                  key: "rangeToNative",
                  value: function (v) {
                    var h = this,
                      d = v.collapsed
                        ? [v.index]
                        : [v.index, v.index + v.length],
                      E = [],
                      T = this.scroll.length();
                    return (
                      d.forEach(function (q, D) {
                        q = Math.min(T - 1, q);
                        var C = void 0,
                          Z = h.scroll.leaf(q),
                          I = P(Z, 2),
                          R = I[0],
                          O = I[1],
                          S = R.position(O, D !== 0),
                          L = P(S, 2);
                        (C = L[0]), (O = L[1]), E.push(C, O);
                      }),
                      E.length < 2 && (E = E.concat(E)),
                      E
                    );
                  },
                },
                {
                  key: "scrollIntoView",
                  value: function (v) {
                    var h = this.lastRange;
                    if (h != null) {
                      var d = this.getBounds(h.index, h.length);
                      if (d != null) {
                        var E = this.scroll.length() - 1,
                          T = this.scroll.line(Math.min(h.index, E)),
                          q = P(T, 1),
                          D = q[0],
                          C = D;
                        if (h.length > 0) {
                          var Z = this.scroll.line(
                              Math.min(h.index + h.length, E)
                            ),
                            I = P(Z, 1);
                          C = I[0];
                        }
                        if (!(D == null || C == null)) {
                          var R = v.getBoundingClientRect();
                          d.top < R.top
                            ? (v.scrollTop -= R.top - d.top)
                            : d.bottom > R.bottom &&
                              (v.scrollTop += d.bottom - R.bottom);
                        }
                      }
                    }
                  },
                },
                {
                  key: "setNativeRange",
                  value: function (v, h) {
                    var d =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : v,
                      E =
                        arguments.length > 3 && arguments[3] !== void 0
                          ? arguments[3]
                          : h,
                      T =
                        arguments.length > 4 && arguments[4] !== void 0
                          ? arguments[4]
                          : !1;
                    if (
                      (n.info("setNativeRange", v, h, d, E),
                      !(
                        v != null &&
                        (this.root.parentNode == null ||
                          v.parentNode == null ||
                          d.parentNode == null)
                      ))
                    ) {
                      var q = document.getSelection();
                      if (q != null)
                        if (v != null) {
                          this.hasFocus() || this.root.focus();
                          var D = (this.getNativeRange() || {}).native;
                          if (
                            D == null ||
                            T ||
                            v !== D.startContainer ||
                            h !== D.startOffset ||
                            d !== D.endContainer ||
                            E !== D.endOffset
                          ) {
                            v.tagName == "BR" &&
                              ((h = [].indexOf.call(
                                v.parentNode.childNodes,
                                v
                              )),
                              (v = v.parentNode)),
                              d.tagName == "BR" &&
                                ((E = [].indexOf.call(
                                  d.parentNode.childNodes,
                                  d
                                )),
                                (d = d.parentNode));
                            var C = document.createRange();
                            C.setStart(v, h),
                              C.setEnd(d, E),
                              q.removeAllRanges(),
                              q.addRange(C);
                          }
                        } else
                          q.removeAllRanges(),
                            this.root.blur(),
                            document.body.focus();
                    }
                  },
                },
                {
                  key: "setRange",
                  value: function (v) {
                    var h =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : !1,
                      d =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : u.default.sources.API;
                    if (
                      (typeof h == "string" && ((d = h), (h = !1)),
                      n.info("setRange", v),
                      v != null)
                    ) {
                      var E = this.rangeToNative(v);
                      this.setNativeRange.apply(this, i(E).concat([h]));
                    } else this.setNativeRange(null);
                    this.update(d);
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var v =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : u.default.sources.USER,
                      h = this.lastRange,
                      d = this.getRange(),
                      E = P(d, 2),
                      T = E[0],
                      q = E[1];
                    if (
                      ((this.lastRange = T),
                      this.lastRange != null &&
                        (this.savedRange = this.lastRange),
                      !(0, t.default)(h, this.lastRange))
                    ) {
                      var D;
                      !this.composing &&
                        q != null &&
                        q.native.collapsed &&
                        q.start.node !== this.cursor.textNode &&
                        this.cursor.restore();
                      var C = [
                        u.default.events.SELECTION_CHANGE,
                        (0, c.default)(this.lastRange),
                        (0, c.default)(h),
                        v,
                      ];
                      if (
                        ((D = this.emitter).emit.apply(
                          D,
                          [u.default.events.EDITOR_CHANGE].concat(C)
                        ),
                        v !== u.default.sources.SILENT)
                      ) {
                        var Z;
                        (Z = this.emitter).emit.apply(Z, C);
                      }
                    }
                  },
                },
              ]),
              b
            );
          })();
        function g(b, w) {
          try {
            w.parentNode;
          } catch {
            return !1;
          }
          return w instanceof Text && (w = w.parentNode), b.contains(w);
        }
        (_.Range = s), (_.default = k);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function u(l, a) {
              for (var r = 0; r < a.length; r++) {
                var i = a[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(l, i.key, i);
              }
            }
            return function (l, a, r) {
              return a && u(l.prototype, a), r && u(l, r), l;
            };
          })(),
          N = function u(l, a, r) {
            l === null && (l = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(l, a);
            if (i === void 0) {
              var f = Object.getPrototypeOf(l);
              return f === null ? void 0 : u(f, a, r);
            } else {
              if ("value" in i) return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          },
          A = p(0),
          m = y(A);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof l
            );
          (u.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: u,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(u, l)
                : (u.__proto__ = l));
        }
        var e = (function (u) {
          t(l, u);
          function l() {
            return (
              c(this, l),
              o(
                this,
                (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments)
              )
            );
          }
          return (
            P(
              l,
              [
                {
                  key: "insertInto",
                  value: function (r, i) {
                    r.children.length === 0
                      ? N(
                          l.prototype.__proto__ ||
                            Object.getPrototypeOf(l.prototype),
                          "insertInto",
                          this
                        ).call(this, r, i)
                      : this.remove();
                  },
                },
                {
                  key: "length",
                  value: function () {
                    return 0;
                  },
                },
                {
                  key: "value",
                  value: function () {
                    return "";
                  },
                },
              ],
              [{ key: "value", value: function () {} }]
            ),
            l
          );
        })(m.default.Embed);
        (e.blotName = "break"), (e.tagName = "BR"), (_.default = e);
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var u in e) e.hasOwnProperty(u) && (t[u] = e[u]);
              };
            return function (t, e) {
              o(t, e);
              function u() {
                this.constructor = t;
              }
              t.prototype =
                e === null
                  ? Object.create(e)
                  : ((u.prototype = e.prototype), new u());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = p(44),
          A = p(30),
          m = p(1),
          y = (function (o) {
            P(t, o);
            function t(e) {
              var u = o.call(this, e) || this;
              return u.build(), u;
            }
            return (
              (t.prototype.appendChild = function (e) {
                this.insertBefore(e);
              }),
              (t.prototype.attach = function () {
                o.prototype.attach.call(this),
                  this.children.forEach(function (e) {
                    e.attach();
                  });
              }),
              (t.prototype.build = function () {
                var e = this;
                (this.children = new N.default()),
                  [].slice
                    .call(this.domNode.childNodes)
                    .reverse()
                    .forEach(function (u) {
                      try {
                        var l = c(u);
                        e.insertBefore(l, e.children.head || void 0);
                      } catch (a) {
                        if (a instanceof m.ParchmentError) return;
                        throw a;
                      }
                    });
              }),
              (t.prototype.deleteAt = function (e, u) {
                if (e === 0 && u === this.length()) return this.remove();
                this.children.forEachAt(e, u, function (l, a, r) {
                  l.deleteAt(a, r);
                });
              }),
              (t.prototype.descendant = function (e, u) {
                var l = this.children.find(u),
                  a = l[0],
                  r = l[1];
                return (e.blotName == null && e(a)) ||
                  (e.blotName != null && a instanceof e)
                  ? [a, r]
                  : a instanceof t
                  ? a.descendant(e, r)
                  : [null, -1];
              }),
              (t.prototype.descendants = function (e, u, l) {
                u === void 0 && (u = 0), l === void 0 && (l = Number.MAX_VALUE);
                var a = [],
                  r = l;
                return (
                  this.children.forEachAt(u, l, function (i, f, n) {
                    ((e.blotName == null && e(i)) ||
                      (e.blotName != null && i instanceof e)) &&
                      a.push(i),
                      i instanceof t && (a = a.concat(i.descendants(e, f, r))),
                      (r -= n);
                  }),
                  a
                );
              }),
              (t.prototype.detach = function () {
                this.children.forEach(function (e) {
                  e.detach();
                }),
                  o.prototype.detach.call(this);
              }),
              (t.prototype.formatAt = function (e, u, l, a) {
                this.children.forEachAt(e, u, function (r, i, f) {
                  r.formatAt(i, f, l, a);
                });
              }),
              (t.prototype.insertAt = function (e, u, l) {
                var a = this.children.find(e),
                  r = a[0],
                  i = a[1];
                if (r) r.insertAt(i, u, l);
                else {
                  var f = l == null ? m.create("text", u) : m.create(u, l);
                  this.appendChild(f);
                }
              }),
              (t.prototype.insertBefore = function (e, u) {
                if (
                  this.statics.allowedChildren != null &&
                  !this.statics.allowedChildren.some(function (l) {
                    return e instanceof l;
                  })
                )
                  throw new m.ParchmentError(
                    "Cannot insert " +
                      e.statics.blotName +
                      " into " +
                      this.statics.blotName
                  );
                e.insertInto(this, u);
              }),
              (t.prototype.length = function () {
                return this.children.reduce(function (e, u) {
                  return e + u.length();
                }, 0);
              }),
              (t.prototype.moveChildren = function (e, u) {
                this.children.forEach(function (l) {
                  e.insertBefore(l, u);
                });
              }),
              (t.prototype.optimize = function (e) {
                if (
                  (o.prototype.optimize.call(this, e),
                  this.children.length === 0)
                )
                  if (this.statics.defaultChild != null) {
                    var u = m.create(this.statics.defaultChild);
                    this.appendChild(u), u.optimize(e);
                  } else this.remove();
              }),
              (t.prototype.path = function (e, u) {
                u === void 0 && (u = !1);
                var l = this.children.find(e, u),
                  a = l[0],
                  r = l[1],
                  i = [[this, e]];
                return a instanceof t
                  ? i.concat(a.path(r, u))
                  : (a != null && i.push([a, r]), i);
              }),
              (t.prototype.removeChild = function (e) {
                this.children.remove(e);
              }),
              (t.prototype.replace = function (e) {
                e instanceof t && e.moveChildren(this),
                  o.prototype.replace.call(this, e);
              }),
              (t.prototype.split = function (e, u) {
                if ((u === void 0 && (u = !1), !u)) {
                  if (e === 0) return this;
                  if (e === this.length()) return this.next;
                }
                var l = this.clone();
                return (
                  this.parent.insertBefore(l, this.next),
                  this.children.forEachAt(e, this.length(), function (a, r, i) {
                    (a = a.split(r, u)), l.appendChild(a);
                  }),
                  l
                );
              }),
              (t.prototype.unwrap = function () {
                this.moveChildren(this.parent, this.next), this.remove();
              }),
              (t.prototype.update = function (e, u) {
                var l = this,
                  a = [],
                  r = [];
                e.forEach(function (i) {
                  i.target === l.domNode &&
                    i.type === "childList" &&
                    (a.push.apply(a, i.addedNodes),
                    r.push.apply(r, i.removedNodes));
                }),
                  r.forEach(function (i) {
                    if (
                      !(
                        i.parentNode != null &&
                        i.tagName !== "IFRAME" &&
                        document.body.compareDocumentPosition(i) &
                          Node.DOCUMENT_POSITION_CONTAINED_BY
                      )
                    ) {
                      var f = m.find(i);
                      f != null &&
                        (f.domNode.parentNode == null ||
                          f.domNode.parentNode === l.domNode) &&
                        f.detach();
                    }
                  }),
                  a
                    .filter(function (i) {
                      return i.parentNode == l.domNode;
                    })
                    .sort(function (i, f) {
                      return i === f
                        ? 0
                        : i.compareDocumentPosition(f) &
                          Node.DOCUMENT_POSITION_FOLLOWING
                        ? 1
                        : -1;
                    })
                    .forEach(function (i) {
                      var f = null;
                      i.nextSibling != null && (f = m.find(i.nextSibling));
                      var n = c(i);
                      (n.next != f || n.next == null) &&
                        (n.parent != null && n.parent.removeChild(l),
                        l.insertBefore(n, f || void 0));
                    });
              }),
              t
            );
          })(A.default);
        function c(o) {
          var t = m.find(o);
          if (t == null)
            try {
              t = m.create(o);
            } catch {
              (t = m.create(m.Scope.INLINE)),
                [].slice.call(o.childNodes).forEach(function (u) {
                  t.domNode.appendChild(u);
                }),
                o.parentNode && o.parentNode.replaceChild(t.domNode, o),
                t.attach();
            }
          return t;
        }
        _.default = y;
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var u in e) e.hasOwnProperty(u) && (t[u] = e[u]);
              };
            return function (t, e) {
              o(t, e);
              function u() {
                this.constructor = t;
              }
              t.prototype =
                e === null
                  ? Object.create(e)
                  : ((u.prototype = e.prototype), new u());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = p(12),
          A = p(31),
          m = p(17),
          y = p(1),
          c = (function (o) {
            P(t, o);
            function t(e) {
              var u = o.call(this, e) || this;
              return (u.attributes = new A.default(u.domNode)), u;
            }
            return (
              (t.formats = function (e) {
                if (typeof this.tagName == "string") return !0;
                if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
              }),
              (t.prototype.format = function (e, u) {
                var l = y.query(e);
                l instanceof N.default
                  ? this.attributes.attribute(l, u)
                  : u &&
                    l != null &&
                    (e !== this.statics.blotName || this.formats()[e] !== u) &&
                    this.replaceWith(e, u);
              }),
              (t.prototype.formats = function () {
                var e = this.attributes.values(),
                  u = this.statics.formats(this.domNode);
                return u != null && (e[this.statics.blotName] = u), e;
              }),
              (t.prototype.replaceWith = function (e, u) {
                var l = o.prototype.replaceWith.call(this, e, u);
                return this.attributes.copy(l), l;
              }),
              (t.prototype.update = function (e, u) {
                var l = this;
                o.prototype.update.call(this, e, u),
                  e.some(function (a) {
                    return a.target === l.domNode && a.type === "attributes";
                  }) && this.attributes.build();
              }),
              (t.prototype.wrap = function (e, u) {
                var l = o.prototype.wrap.call(this, e, u);
                return (
                  l instanceof t &&
                    l.statics.scope === this.statics.scope &&
                    this.attributes.move(l),
                  l
                );
              }),
              t
            );
          })(m.default);
        _.default = c;
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var y =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (c, o) {
                  c.__proto__ = o;
                }) ||
              function (c, o) {
                for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
              };
            return function (c, o) {
              y(c, o);
              function t() {
                this.constructor = c;
              }
              c.prototype =
                o === null
                  ? Object.create(o)
                  : ((t.prototype = o.prototype), new t());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = p(30),
          A = p(1),
          m = (function (y) {
            P(c, y);
            function c() {
              return (y !== null && y.apply(this, arguments)) || this;
            }
            return (
              (c.value = function (o) {
                return !0;
              }),
              (c.prototype.index = function (o, t) {
                return this.domNode === o ||
                  this.domNode.compareDocumentPosition(o) &
                    Node.DOCUMENT_POSITION_CONTAINED_BY
                  ? Math.min(t, 1)
                  : -1;
              }),
              (c.prototype.position = function (o, t) {
                var e = [].indexOf.call(
                  this.parent.domNode.childNodes,
                  this.domNode
                );
                return o > 0 && (e += 1), [this.parent.domNode, e];
              }),
              (c.prototype.value = function () {
                var o;
                return (
                  (o = {}),
                  (o[this.statics.blotName] =
                    this.statics.value(this.domNode) || !0),
                  o
                );
              }),
              (c.scope = A.Scope.INLINE_BLOT),
              c
            );
          })(N.default);
        _.default = m;
      },
      function (B, _, p) {
        var P = p(11),
          N = p(3),
          A = {
            attributes: {
              compose: function (y, c, o) {
                typeof y != "object" && (y = {}),
                  typeof c != "object" && (c = {});
                var t = N(!0, {}, c);
                o ||
                  (t = Object.keys(t).reduce(function (u, l) {
                    return t[l] != null && (u[l] = t[l]), u;
                  }, {}));
                for (var e in y)
                  y[e] !== void 0 && c[e] === void 0 && (t[e] = y[e]);
                return Object.keys(t).length > 0 ? t : void 0;
              },
              diff: function (y, c) {
                typeof y != "object" && (y = {}),
                  typeof c != "object" && (c = {});
                var o = Object.keys(y)
                  .concat(Object.keys(c))
                  .reduce(function (t, e) {
                    return (
                      P(y[e], c[e]) || (t[e] = c[e] === void 0 ? null : c[e]), t
                    );
                  }, {});
                return Object.keys(o).length > 0 ? o : void 0;
              },
              transform: function (y, c, o) {
                if (typeof y != "object") return c;
                if (typeof c == "object") {
                  if (!o) return c;
                  var t = Object.keys(c).reduce(function (e, u) {
                    return y[u] === void 0 && (e[u] = c[u]), e;
                  }, {});
                  return Object.keys(t).length > 0 ? t : void 0;
                }
              },
            },
            iterator: function (y) {
              return new m(y);
            },
            length: function (y) {
              return typeof y.delete == "number"
                ? y.delete
                : typeof y.retain == "number"
                ? y.retain
                : typeof y.insert == "string"
                ? y.insert.length
                : 1;
            },
          };
        function m(y) {
          (this.ops = y), (this.index = 0), (this.offset = 0);
        }
        (m.prototype.hasNext = function () {
          return this.peekLength() < 1 / 0;
        }),
          (m.prototype.next = function (y) {
            y || (y = 1 / 0);
            var c = this.ops[this.index];
            if (c) {
              var o = this.offset,
                t = A.length(c);
              if (
                (y >= t - o
                  ? ((y = t - o), (this.index += 1), (this.offset = 0))
                  : (this.offset += y),
                typeof c.delete == "number")
              )
                return { delete: y };
              var e = {};
              return (
                c.attributes && (e.attributes = c.attributes),
                typeof c.retain == "number"
                  ? (e.retain = y)
                  : typeof c.insert == "string"
                  ? (e.insert = c.insert.substr(o, y))
                  : (e.insert = c.insert),
                e
              );
            } else return { retain: 1 / 0 };
          }),
          (m.prototype.peek = function () {
            return this.ops[this.index];
          }),
          (m.prototype.peekLength = function () {
            return this.ops[this.index]
              ? A.length(this.ops[this.index]) - this.offset
              : 1 / 0;
          }),
          (m.prototype.peekType = function () {
            return this.ops[this.index]
              ? typeof this.ops[this.index].delete == "number"
                ? "delete"
                : typeof this.ops[this.index].retain == "number"
                ? "retain"
                : "insert"
              : "retain";
          }),
          (m.prototype.rest = function () {
            if (this.hasNext()) {
              if (this.offset === 0) return this.ops.slice(this.index);
              var y = this.offset,
                c = this.index,
                o = this.next(),
                t = this.ops.slice(this.index);
              return (this.offset = y), (this.index = c), [o].concat(t);
            } else return [];
          }),
          (B.exports = A);
      },
      function (B, _) {
        var p = (function () {
          function P(l, a) {
            return a != null && l instanceof a;
          }
          var N;
          try {
            N = Map;
          } catch {
            N = function () {};
          }
          var A;
          try {
            A = Set;
          } catch {
            A = function () {};
          }
          var m;
          try {
            m = Promise;
          } catch {
            m = function () {};
          }
          function y(l, a, r, i, f) {
            typeof a == "object" &&
              ((r = a.depth),
              (i = a.prototype),
              (f = a.includeNonEnumerable),
              (a = a.circular));
            var n = [],
              s = [],
              k = typeof Buffer < "u";
            typeof a > "u" && (a = !0), typeof r > "u" && (r = 1 / 0);
            function g(b, w) {
              if (b === null) return null;
              if (w === 0) return b;
              var v, h;
              if (typeof b != "object") return b;
              if (P(b, N)) v = new N();
              else if (P(b, A)) v = new A();
              else if (P(b, m))
                v = new m(function (R, O) {
                  b.then(
                    function (S) {
                      R(g(S, w - 1));
                    },
                    function (S) {
                      O(g(S, w - 1));
                    }
                  );
                });
              else if (y.__isArray(b)) v = [];
              else if (y.__isRegExp(b))
                (v = new RegExp(b.source, u(b))),
                  b.lastIndex && (v.lastIndex = b.lastIndex);
              else if (y.__isDate(b)) v = new Date(b.getTime());
              else {
                if (k && Buffer.isBuffer(b))
                  return (
                    Buffer.allocUnsafe
                      ? (v = Buffer.allocUnsafe(b.length))
                      : (v = new Buffer(b.length)),
                    b.copy(v),
                    v
                  );
                P(b, Error)
                  ? (v = Object.create(b))
                  : typeof i > "u"
                  ? ((h = Object.getPrototypeOf(b)), (v = Object.create(h)))
                  : ((v = Object.create(i)), (h = i));
              }
              if (a) {
                var d = n.indexOf(b);
                if (d != -1) return s[d];
                n.push(b), s.push(v);
              }
              P(b, N) &&
                b.forEach(function (R, O) {
                  var S = g(O, w - 1),
                    L = g(R, w - 1);
                  v.set(S, L);
                }),
                P(b, A) &&
                  b.forEach(function (R) {
                    var O = g(R, w - 1);
                    v.add(O);
                  });
              for (var E in b) {
                var T;
                h && (T = Object.getOwnPropertyDescriptor(h, E)),
                  !(T && T.set == null) && (v[E] = g(b[E], w - 1));
              }
              if (Object.getOwnPropertySymbols)
                for (
                  var q = Object.getOwnPropertySymbols(b), E = 0;
                  E < q.length;
                  E++
                ) {
                  var D = q[E],
                    C = Object.getOwnPropertyDescriptor(b, D);
                  (C && !C.enumerable && !f) ||
                    ((v[D] = g(b[D], w - 1)),
                    C.enumerable ||
                      Object.defineProperty(v, D, { enumerable: !1 }));
                }
              if (f)
                for (
                  var Z = Object.getOwnPropertyNames(b), E = 0;
                  E < Z.length;
                  E++
                ) {
                  var I = Z[E],
                    C = Object.getOwnPropertyDescriptor(b, I);
                  (C && C.enumerable) ||
                    ((v[I] = g(b[I], w - 1)),
                    Object.defineProperty(v, I, { enumerable: !1 }));
                }
              return v;
            }
            return g(l, r);
          }
          y.clonePrototype = function (a) {
            if (a === null) return null;
            var r = function () {};
            return (r.prototype = a), new r();
          };
          function c(l) {
            return Object.prototype.toString.call(l);
          }
          y.__objToStr = c;
          function o(l) {
            return typeof l == "object" && c(l) === "[object Date]";
          }
          y.__isDate = o;
          function t(l) {
            return typeof l == "object" && c(l) === "[object Array]";
          }
          y.__isArray = t;
          function e(l) {
            return typeof l == "object" && c(l) === "[object RegExp]";
          }
          y.__isRegExp = e;
          function u(l) {
            var a = "";
            return (
              l.global && (a += "g"),
              l.ignoreCase && (a += "i"),
              l.multiline && (a += "m"),
              a
            );
          }
          return (y.__getRegExpFlags = u), y;
        })();
        typeof B == "object" && B.exports && (B.exports = p);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function v(h, d) {
              var E = [],
                T = !0,
                q = !1,
                D = void 0;
              try {
                for (
                  var C = h[Symbol.iterator](), Z;
                  !(T = (Z = C.next()).done) &&
                  (E.push(Z.value), !(d && E.length === d));
                  T = !0
                );
              } catch (I) {
                (q = !0), (D = I);
              } finally {
                try {
                  !T && C.return && C.return();
                } finally {
                  if (q) throw D;
                }
              }
              return E;
            }
            return function (h, d) {
              if (Array.isArray(h)) return h;
              if (Symbol.iterator in Object(h)) return v(h, d);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          N = (function () {
            function v(h, d) {
              for (var E = 0; E < d.length; E++) {
                var T = d[E];
                (T.enumerable = T.enumerable || !1),
                  (T.configurable = !0),
                  "value" in T && (T.writable = !0),
                  Object.defineProperty(h, T.key, T);
              }
            }
            return function (h, d, E) {
              return d && v(h.prototype, d), E && v(h, E), h;
            };
          })(),
          A = function v(h, d, E) {
            h === null && (h = Function.prototype);
            var T = Object.getOwnPropertyDescriptor(h, d);
            if (T === void 0) {
              var q = Object.getPrototypeOf(h);
              return q === null ? void 0 : v(q, d, E);
            } else {
              if ("value" in T) return T.value;
              var D = T.get;
              return D === void 0 ? void 0 : D.call(E);
            }
          },
          m = p(0),
          y = n(m),
          c = p(8),
          o = n(c),
          t = p(4),
          e = n(t),
          u = p(16),
          l = n(u),
          a = p(13),
          r = n(a),
          i = p(25),
          f = n(i);
        function n(v) {
          return v && v.__esModule ? v : { default: v };
        }
        function s(v, h) {
          if (!(v instanceof h))
            throw new TypeError("Cannot call a class as a function");
        }
        function k(v, h) {
          if (!v)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return h && (typeof h == "object" || typeof h == "function") ? h : v;
        }
        function g(v, h) {
          if (typeof h != "function" && h !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof h
            );
          (v.prototype = Object.create(h && h.prototype, {
            constructor: {
              value: v,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            h &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(v, h)
                : (v.__proto__ = h));
        }
        function b(v) {
          return v instanceof e.default || v instanceof t.BlockEmbed;
        }
        var w = (function (v) {
          g(h, v);
          function h(d, E) {
            s(this, h);
            var T = k(
              this,
              (h.__proto__ || Object.getPrototypeOf(h)).call(this, d)
            );
            return (
              (T.emitter = E.emitter),
              Array.isArray(E.whitelist) &&
                (T.whitelist = E.whitelist.reduce(function (q, D) {
                  return (q[D] = !0), q;
                }, {})),
              T.domNode.addEventListener("DOMNodeInserted", function () {}),
              T.optimize(),
              T.enable(),
              T
            );
          }
          return (
            N(h, [
              {
                key: "batchStart",
                value: function () {
                  this.batch = !0;
                },
              },
              {
                key: "batchEnd",
                value: function () {
                  (this.batch = !1), this.optimize();
                },
              },
              {
                key: "deleteAt",
                value: function (E, T) {
                  var q = this.line(E),
                    D = P(q, 2),
                    C = D[0],
                    Z = D[1],
                    I = this.line(E + T),
                    R = P(I, 1),
                    O = R[0];
                  if (
                    (A(
                      h.prototype.__proto__ ||
                        Object.getPrototypeOf(h.prototype),
                      "deleteAt",
                      this
                    ).call(this, E, T),
                    O != null && C !== O && Z > 0)
                  ) {
                    if (
                      C instanceof t.BlockEmbed ||
                      O instanceof t.BlockEmbed
                    ) {
                      this.optimize();
                      return;
                    }
                    if (C instanceof r.default) {
                      var S = C.newlineIndex(C.length(), !0);
                      if (S > -1 && ((C = C.split(S + 1)), C === O)) {
                        this.optimize();
                        return;
                      }
                    } else if (O instanceof r.default) {
                      var L = O.newlineIndex(0);
                      L > -1 && O.split(L + 1);
                    }
                    var F =
                      O.children.head instanceof l.default
                        ? null
                        : O.children.head;
                    C.moveChildren(O, F), C.remove();
                  }
                  this.optimize();
                },
              },
              {
                key: "enable",
                value: function () {
                  var E =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : !0;
                  this.domNode.setAttribute("contenteditable", E);
                },
              },
              {
                key: "formatAt",
                value: function (E, T, q, D) {
                  (this.whitelist != null && !this.whitelist[q]) ||
                    (A(
                      h.prototype.__proto__ ||
                        Object.getPrototypeOf(h.prototype),
                      "formatAt",
                      this
                    ).call(this, E, T, q, D),
                    this.optimize());
                },
              },
              {
                key: "insertAt",
                value: function (E, T, q) {
                  if (
                    !(q != null && this.whitelist != null && !this.whitelist[T])
                  ) {
                    if (E >= this.length())
                      if (
                        q == null ||
                        y.default.query(T, y.default.Scope.BLOCK) == null
                      ) {
                        var D = y.default.create(this.statics.defaultChild);
                        this.appendChild(D),
                          q == null &&
                            T.endsWith(`
`) &&
                            (T = T.slice(0, -1)),
                          D.insertAt(0, T, q);
                      } else {
                        var C = y.default.create(T, q);
                        this.appendChild(C);
                      }
                    else
                      A(
                        h.prototype.__proto__ ||
                          Object.getPrototypeOf(h.prototype),
                        "insertAt",
                        this
                      ).call(this, E, T, q);
                    this.optimize();
                  }
                },
              },
              {
                key: "insertBefore",
                value: function (E, T) {
                  if (E.statics.scope === y.default.Scope.INLINE_BLOT) {
                    var q = y.default.create(this.statics.defaultChild);
                    q.appendChild(E), (E = q);
                  }
                  A(
                    h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                    "insertBefore",
                    this
                  ).call(this, E, T);
                },
              },
              {
                key: "leaf",
                value: function (E) {
                  return this.path(E).pop() || [null, -1];
                },
              },
              {
                key: "line",
                value: function (E) {
                  return E === this.length()
                    ? this.line(E - 1)
                    : this.descendant(b, E);
                },
              },
              {
                key: "lines",
                value: function () {
                  var E =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                    T =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : Number.MAX_VALUE,
                    q = function D(C, Z, I) {
                      var R = [],
                        O = I;
                      return (
                        C.children.forEachAt(Z, I, function (S, L, F) {
                          b(S)
                            ? R.push(S)
                            : S instanceof y.default.Container &&
                              (R = R.concat(D(S, L, O))),
                            (O -= F);
                        }),
                        R
                      );
                    };
                  return q(this, E, T);
                },
              },
              {
                key: "optimize",
                value: function () {
                  var E =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : [],
                    T =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {};
                  this.batch !== !0 &&
                    (A(
                      h.prototype.__proto__ ||
                        Object.getPrototypeOf(h.prototype),
                      "optimize",
                      this
                    ).call(this, E, T),
                    E.length > 0 &&
                      this.emitter.emit(
                        o.default.events.SCROLL_OPTIMIZE,
                        E,
                        T
                      ));
                },
              },
              {
                key: "path",
                value: function (E) {
                  return A(
                    h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                    "path",
                    this
                  )
                    .call(this, E)
                    .slice(1);
                },
              },
              {
                key: "update",
                value: function (E) {
                  if (this.batch !== !0) {
                    var T = o.default.sources.USER;
                    typeof E == "string" && (T = E),
                      Array.isArray(E) || (E = this.observer.takeRecords()),
                      E.length > 0 &&
                        this.emitter.emit(
                          o.default.events.SCROLL_BEFORE_UPDATE,
                          T,
                          E
                        ),
                      A(
                        h.prototype.__proto__ ||
                          Object.getPrototypeOf(h.prototype),
                        "update",
                        this
                      ).call(this, E.concat([])),
                      E.length > 0 &&
                        this.emitter.emit(o.default.events.SCROLL_UPDATE, T, E);
                  }
                },
              },
            ]),
            h
          );
        })(y.default.Scroll);
        (w.blotName = "scroll"),
          (w.className = "ql-editor"),
          (w.tagName = "DIV"),
          (w.defaultChild = "block"),
          (w.allowedChildren = [e.default, t.BlockEmbed, f.default]),
          (_.default = w);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.SHORTKEY = _.default = void 0);
        var P =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (x) {
                  return typeof x;
                }
              : function (x) {
                  return x &&
                    typeof Symbol == "function" &&
                    x.constructor === Symbol &&
                    x !== Symbol.prototype
                    ? "symbol"
                    : typeof x;
                },
          N = (function () {
            function x(j, U) {
              var H = [],
                V = !0,
                Y = !1,
                X = void 0;
              try {
                for (
                  var Q = j[Symbol.iterator](), nt;
                  !(V = (nt = Q.next()).done) &&
                  (H.push(nt.value), !(U && H.length === U));
                  V = !0
                );
              } catch (rt) {
                (Y = !0), (X = rt);
              } finally {
                try {
                  !V && Q.return && Q.return();
                } finally {
                  if (Y) throw X;
                }
              }
              return H;
            }
            return function (j, U) {
              if (Array.isArray(j)) return j;
              if (Symbol.iterator in Object(j)) return x(j, U);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          A = (function () {
            function x(j, U) {
              for (var H = 0; H < U.length; H++) {
                var V = U[H];
                (V.enumerable = V.enumerable || !1),
                  (V.configurable = !0),
                  "value" in V && (V.writable = !0),
                  Object.defineProperty(j, V.key, V);
              }
            }
            return function (j, U, H) {
              return U && x(j.prototype, U), H && x(j, H), j;
            };
          })(),
          m = p(21),
          y = v(m),
          c = p(11),
          o = v(c),
          t = p(3),
          e = v(t),
          u = p(2),
          l = v(u),
          a = p(20),
          r = v(a),
          i = p(0),
          f = v(i),
          n = p(5),
          s = v(n),
          k = p(10),
          g = v(k),
          b = p(9),
          w = v(b);
        function v(x) {
          return x && x.__esModule ? x : { default: x };
        }
        function h(x, j, U) {
          return (
            j in x
              ? Object.defineProperty(x, j, {
                  value: U,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (x[j] = U),
            x
          );
        }
        function d(x, j) {
          if (!(x instanceof j))
            throw new TypeError("Cannot call a class as a function");
        }
        function E(x, j) {
          if (!x)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return j && (typeof j == "object" || typeof j == "function") ? j : x;
        }
        function T(x, j) {
          if (typeof j != "function" && j !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof j
            );
          (x.prototype = Object.create(j && j.prototype, {
            constructor: {
              value: x,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            j &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(x, j)
                : (x.__proto__ = j));
        }
        var q = (0, g.default)("quill:keyboard"),
          D = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
          C = (function (x) {
            T(j, x),
              A(j, null, [
                {
                  key: "match",
                  value: function (H, V) {
                    return (
                      (V = M(V)),
                      ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(
                        function (Y) {
                          return !!V[Y] !== H[Y] && V[Y] !== null;
                        }
                      )
                        ? !1
                        : V.key === (H.which || H.keyCode)
                    );
                  },
                },
              ]);
            function j(U, H) {
              d(this, j);
              var V = E(
                this,
                (j.__proto__ || Object.getPrototypeOf(j)).call(this, U, H)
              );
              return (
                (V.bindings = {}),
                Object.keys(V.options.bindings).forEach(function (Y) {
                  (Y === "list autofill" &&
                    U.scroll.whitelist != null &&
                    !U.scroll.whitelist.list) ||
                    (V.options.bindings[Y] &&
                      V.addBinding(V.options.bindings[Y]));
                }),
                V.addBinding({ key: j.keys.ENTER, shiftKey: null }, S),
                V.addBinding(
                  {
                    key: j.keys.ENTER,
                    metaKey: null,
                    ctrlKey: null,
                    altKey: null,
                  },
                  function () {}
                ),
                /Firefox/i.test(navigator.userAgent)
                  ? (V.addBinding(
                      { key: j.keys.BACKSPACE },
                      { collapsed: !0 },
                      I
                    ),
                    V.addBinding({ key: j.keys.DELETE }, { collapsed: !0 }, R))
                  : (V.addBinding(
                      { key: j.keys.BACKSPACE },
                      { collapsed: !0, prefix: /^.?$/ },
                      I
                    ),
                    V.addBinding(
                      { key: j.keys.DELETE },
                      { collapsed: !0, suffix: /^.?$/ },
                      R
                    )),
                V.addBinding({ key: j.keys.BACKSPACE }, { collapsed: !1 }, O),
                V.addBinding({ key: j.keys.DELETE }, { collapsed: !1 }, O),
                V.addBinding(
                  {
                    key: j.keys.BACKSPACE,
                    altKey: null,
                    ctrlKey: null,
                    metaKey: null,
                    shiftKey: null,
                  },
                  { collapsed: !0, offset: 0 },
                  I
                ),
                V.listen(),
                V
              );
            }
            return (
              A(j, [
                {
                  key: "addBinding",
                  value: function (H) {
                    var V =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : {},
                      Y =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : {},
                      X = M(H);
                    if (X == null || X.key == null)
                      return q.warn(
                        "Attempted to add invalid keyboard binding",
                        X
                      );
                    typeof V == "function" && (V = { handler: V }),
                      typeof Y == "function" && (Y = { handler: Y }),
                      (X = (0, e.default)(X, V, Y)),
                      (this.bindings[X.key] = this.bindings[X.key] || []),
                      this.bindings[X.key].push(X);
                  },
                },
                {
                  key: "listen",
                  value: function () {
                    var H = this;
                    this.quill.root.addEventListener("keydown", function (V) {
                      if (!V.defaultPrevented) {
                        var Y = V.which || V.keyCode,
                          X = (H.bindings[Y] || []).filter(function (ot) {
                            return j.match(V, ot);
                          });
                        if (X.length !== 0) {
                          var Q = H.quill.getSelection();
                          if (!(Q == null || !H.quill.hasFocus())) {
                            var nt = H.quill.getLine(Q.index),
                              rt = N(nt, 2),
                              at = rt[0],
                              lt = rt[1],
                              z = H.quill.getLeaf(Q.index),
                              K = N(z, 2),
                              $ = K[0],
                              G = K[1],
                              W =
                                Q.length === 0
                                  ? [$, G]
                                  : H.quill.getLeaf(Q.index + Q.length),
                              J = N(W, 2),
                              tt = J[0],
                              et = J[1],
                              ut =
                                $ instanceof f.default.Text
                                  ? $.value().slice(0, G)
                                  : "",
                              ft =
                                tt instanceof f.default.Text
                                  ? tt.value().slice(et)
                                  : "",
                              it = {
                                collapsed: Q.length === 0,
                                empty: Q.length === 0 && at.length() <= 1,
                                format: H.quill.getFormat(Q),
                                offset: lt,
                                prefix: ut,
                                suffix: ft,
                              },
                              vt = X.some(function (ot) {
                                if (
                                  (ot.collapsed != null &&
                                    ot.collapsed !== it.collapsed) ||
                                  (ot.empty != null && ot.empty !== it.empty) ||
                                  (ot.offset != null && ot.offset !== it.offset)
                                )
                                  return !1;
                                if (Array.isArray(ot.format)) {
                                  if (
                                    ot.format.every(function (st) {
                                      return it.format[st] == null;
                                    })
                                  )
                                    return !1;
                                } else if (
                                  P(ot.format) === "object" &&
                                  !Object.keys(ot.format).every(function (st) {
                                    return ot.format[st] === !0
                                      ? it.format[st] != null
                                      : ot.format[st] === !1
                                      ? it.format[st] == null
                                      : (0, o.default)(
                                          ot.format[st],
                                          it.format[st]
                                        );
                                  })
                                )
                                  return !1;
                                return (ot.prefix != null &&
                                  !ot.prefix.test(it.prefix)) ||
                                  (ot.suffix != null &&
                                    !ot.suffix.test(it.suffix))
                                  ? !1
                                  : ot.handler.call(H, Q, it) !== !0;
                              });
                            vt && V.preventDefault();
                          }
                        }
                      }
                    });
                  },
                },
              ]),
              j
            );
          })(w.default);
        (C.keys = {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          ESCAPE: 27,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46,
        }),
          (C.DEFAULTS = {
            bindings: {
              bold: F("bold"),
              italic: F("italic"),
              underline: F("underline"),
              indent: {
                key: C.keys.TAB,
                format: ["blockquote", "indent", "list"],
                handler: function (j, U) {
                  if (U.collapsed && U.offset !== 0) return !0;
                  this.quill.format("indent", "+1", s.default.sources.USER);
                },
              },
              outdent: {
                key: C.keys.TAB,
                shiftKey: !0,
                format: ["blockquote", "indent", "list"],
                handler: function (j, U) {
                  if (U.collapsed && U.offset !== 0) return !0;
                  this.quill.format("indent", "-1", s.default.sources.USER);
                },
              },
              "outdent backspace": {
                key: C.keys.BACKSPACE,
                collapsed: !0,
                shiftKey: null,
                metaKey: null,
                ctrlKey: null,
                altKey: null,
                format: ["indent", "list"],
                offset: 0,
                handler: function (j, U) {
                  U.format.indent != null
                    ? this.quill.format("indent", "-1", s.default.sources.USER)
                    : U.format.list != null &&
                      this.quill.format("list", !1, s.default.sources.USER);
                },
              },
              "indent code-block": L(!0),
              "outdent code-block": L(!1),
              "remove tab": {
                key: C.keys.TAB,
                shiftKey: !0,
                collapsed: !0,
                prefix: /\t$/,
                handler: function (j) {
                  this.quill.deleteText(j.index - 1, 1, s.default.sources.USER);
                },
              },
              tab: {
                key: C.keys.TAB,
                handler: function (j) {
                  this.quill.history.cutoff();
                  var U = new l.default()
                    .retain(j.index)
                    .delete(j.length)
                    .insert("	");
                  this.quill.updateContents(U, s.default.sources.USER),
                    this.quill.history.cutoff(),
                    this.quill.setSelection(
                      j.index + 1,
                      s.default.sources.SILENT
                    );
                },
              },
              "list empty enter": {
                key: C.keys.ENTER,
                collapsed: !0,
                format: ["list"],
                empty: !0,
                handler: function (j, U) {
                  this.quill.format("list", !1, s.default.sources.USER),
                    U.format.indent &&
                      this.quill.format("indent", !1, s.default.sources.USER);
                },
              },
              "checklist enter": {
                key: C.keys.ENTER,
                collapsed: !0,
                format: { list: "checked" },
                handler: function (j) {
                  var U = this.quill.getLine(j.index),
                    H = N(U, 2),
                    V = H[0],
                    Y = H[1],
                    X = (0, e.default)({}, V.formats(), { list: "checked" }),
                    Q = new l.default()
                      .retain(j.index)
                      .insert(
                        `
`,
                        X
                      )
                      .retain(V.length() - Y - 1)
                      .retain(1, { list: "unchecked" });
                  this.quill.updateContents(Q, s.default.sources.USER),
                    this.quill.setSelection(
                      j.index + 1,
                      s.default.sources.SILENT
                    ),
                    this.quill.scrollIntoView();
                },
              },
              "header enter": {
                key: C.keys.ENTER,
                collapsed: !0,
                format: ["header"],
                suffix: /^$/,
                handler: function (j, U) {
                  var H = this.quill.getLine(j.index),
                    V = N(H, 2),
                    Y = V[0],
                    X = V[1],
                    Q = new l.default()
                      .retain(j.index)
                      .insert(
                        `
`,
                        U.format
                      )
                      .retain(Y.length() - X - 1)
                      .retain(1, { header: null });
                  this.quill.updateContents(Q, s.default.sources.USER),
                    this.quill.setSelection(
                      j.index + 1,
                      s.default.sources.SILENT
                    ),
                    this.quill.scrollIntoView();
                },
              },
              "list autofill": {
                key: " ",
                collapsed: !0,
                format: { list: !1 },
                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                handler: function (j, U) {
                  var H = U.prefix.length,
                    V = this.quill.getLine(j.index),
                    Y = N(V, 2),
                    X = Y[0],
                    Q = Y[1];
                  if (Q > H) return !0;
                  var nt = void 0;
                  switch (U.prefix.trim()) {
                    case "[]":
                    case "[ ]":
                      nt = "unchecked";
                      break;
                    case "[x]":
                      nt = "checked";
                      break;
                    case "-":
                    case "*":
                      nt = "bullet";
                      break;
                    default:
                      nt = "ordered";
                  }
                  this.quill.insertText(j.index, " ", s.default.sources.USER),
                    this.quill.history.cutoff();
                  var rt = new l.default()
                    .retain(j.index - Q)
                    .delete(H + 1)
                    .retain(X.length() - 2 - Q)
                    .retain(1, { list: nt });
                  this.quill.updateContents(rt, s.default.sources.USER),
                    this.quill.history.cutoff(),
                    this.quill.setSelection(
                      j.index - H,
                      s.default.sources.SILENT
                    );
                },
              },
              "code exit": {
                key: C.keys.ENTER,
                collapsed: !0,
                format: ["code-block"],
                prefix: /\n\n$/,
                suffix: /^\s+$/,
                handler: function (j) {
                  var U = this.quill.getLine(j.index),
                    H = N(U, 2),
                    V = H[0],
                    Y = H[1],
                    X = new l.default()
                      .retain(j.index + V.length() - Y - 2)
                      .retain(1, { "code-block": null })
                      .delete(1);
                  this.quill.updateContents(X, s.default.sources.USER);
                },
              },
              "embed left": Z(C.keys.LEFT, !1),
              "embed left shift": Z(C.keys.LEFT, !0),
              "embed right": Z(C.keys.RIGHT, !1),
              "embed right shift": Z(C.keys.RIGHT, !0),
            },
          });
        function Z(x, j) {
          var U,
            H = x === C.keys.LEFT ? "prefix" : "suffix";
          return (
            (U = { key: x, shiftKey: j, altKey: null }),
            h(U, H, /^$/),
            h(U, "handler", function (Y) {
              var X = Y.index;
              x === C.keys.RIGHT && (X += Y.length + 1);
              var Q = this.quill.getLeaf(X),
                nt = N(Q, 1),
                rt = nt[0];
              return rt instanceof f.default.Embed
                ? (x === C.keys.LEFT
                    ? j
                      ? this.quill.setSelection(
                          Y.index - 1,
                          Y.length + 1,
                          s.default.sources.USER
                        )
                      : this.quill.setSelection(
                          Y.index - 1,
                          s.default.sources.USER
                        )
                    : j
                    ? this.quill.setSelection(
                        Y.index,
                        Y.length + 1,
                        s.default.sources.USER
                      )
                    : this.quill.setSelection(
                        Y.index + Y.length + 1,
                        s.default.sources.USER
                      ),
                  !1)
                : !0;
            }),
            U
          );
        }
        function I(x, j) {
          if (!(x.index === 0 || this.quill.getLength() <= 1)) {
            var U = this.quill.getLine(x.index),
              H = N(U, 1),
              V = H[0],
              Y = {};
            if (j.offset === 0) {
              var X = this.quill.getLine(x.index - 1),
                Q = N(X, 1),
                nt = Q[0];
              if (nt != null && nt.length() > 1) {
                var rt = V.formats(),
                  at = this.quill.getFormat(x.index - 1, 1);
                Y = r.default.attributes.diff(rt, at) || {};
              }
            }
            var lt = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(j.prefix) ? 2 : 1;
            this.quill.deleteText(x.index - lt, lt, s.default.sources.USER),
              Object.keys(Y).length > 0 &&
                this.quill.formatLine(
                  x.index - lt,
                  lt,
                  Y,
                  s.default.sources.USER
                ),
              this.quill.focus();
          }
        }
        function R(x, j) {
          var U = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(j.suffix) ? 2 : 1;
          if (!(x.index >= this.quill.getLength() - U)) {
            var H = {},
              V = 0,
              Y = this.quill.getLine(x.index),
              X = N(Y, 1),
              Q = X[0];
            if (j.offset >= Q.length() - 1) {
              var nt = this.quill.getLine(x.index + 1),
                rt = N(nt, 1),
                at = rt[0];
              if (at) {
                var lt = Q.formats(),
                  z = this.quill.getFormat(x.index, 1);
                (H = r.default.attributes.diff(lt, z) || {}), (V = at.length());
              }
            }
            this.quill.deleteText(x.index, U, s.default.sources.USER),
              Object.keys(H).length > 0 &&
                this.quill.formatLine(
                  x.index + V - 1,
                  U,
                  H,
                  s.default.sources.USER
                );
          }
        }
        function O(x) {
          var j = this.quill.getLines(x),
            U = {};
          if (j.length > 1) {
            var H = j[0].formats(),
              V = j[j.length - 1].formats();
            U = r.default.attributes.diff(V, H) || {};
          }
          this.quill.deleteText(x, s.default.sources.USER),
            Object.keys(U).length > 0 &&
              this.quill.formatLine(x.index, 1, U, s.default.sources.USER),
            this.quill.setSelection(x.index, s.default.sources.SILENT),
            this.quill.focus();
        }
        function S(x, j) {
          var U = this;
          x.length > 0 && this.quill.scroll.deleteAt(x.index, x.length);
          var H = Object.keys(j.format).reduce(function (V, Y) {
            return (
              f.default.query(Y, f.default.Scope.BLOCK) &&
                !Array.isArray(j.format[Y]) &&
                (V[Y] = j.format[Y]),
              V
            );
          }, {});
          this.quill.insertText(
            x.index,
            `
`,
            H,
            s.default.sources.USER
          ),
            this.quill.setSelection(x.index + 1, s.default.sources.SILENT),
            this.quill.focus(),
            Object.keys(j.format).forEach(function (V) {
              H[V] == null &&
                (Array.isArray(j.format[V]) ||
                  (V !== "link" &&
                    U.quill.format(V, j.format[V], s.default.sources.USER)));
            });
        }
        function L(x) {
          return {
            key: C.keys.TAB,
            shiftKey: !x,
            format: { "code-block": !0 },
            handler: function (U) {
              var H = f.default.query("code-block"),
                V = U.index,
                Y = U.length,
                X = this.quill.scroll.descendant(H, V),
                Q = N(X, 2),
                nt = Q[0],
                rt = Q[1];
              if (nt != null) {
                var at = this.quill.getIndex(nt),
                  lt = nt.newlineIndex(rt, !0) + 1,
                  z = nt.newlineIndex(at + rt + Y),
                  K = nt.domNode.textContent.slice(lt, z).split(`
`);
                (rt = 0),
                  K.forEach(function ($, G) {
                    x
                      ? (nt.insertAt(lt + rt, H.TAB),
                        (rt += H.TAB.length),
                        G === 0 ? (V += H.TAB.length) : (Y += H.TAB.length))
                      : $.startsWith(H.TAB) &&
                        (nt.deleteAt(lt + rt, H.TAB.length),
                        (rt -= H.TAB.length),
                        G === 0 ? (V -= H.TAB.length) : (Y -= H.TAB.length)),
                      (rt += $.length + 1);
                  }),
                  this.quill.update(s.default.sources.USER),
                  this.quill.setSelection(V, Y, s.default.sources.SILENT);
              }
            },
          };
        }
        function F(x) {
          return {
            key: x[0].toUpperCase(),
            shortKey: !0,
            handler: function (U, H) {
              this.quill.format(x, !H.format[x], s.default.sources.USER);
            },
          };
        }
        function M(x) {
          if (typeof x == "string" || typeof x == "number")
            return M({ key: x });
          if (
            ((typeof x > "u" ? "undefined" : P(x)) === "object" &&
              (x = (0, y.default)(x, !1)),
            typeof x.key == "string")
          )
            if (C.keys[x.key.toUpperCase()] != null)
              x.key = C.keys[x.key.toUpperCase()];
            else if (x.key.length === 1)
              x.key = x.key.toUpperCase().charCodeAt(0);
            else return null;
          return x.shortKey && ((x[D] = x.shortKey), delete x.shortKey), x;
        }
        (_.default = C), (_.SHORTKEY = D);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function r(i, f) {
              var n = [],
                s = !0,
                k = !1,
                g = void 0;
              try {
                for (
                  var b = i[Symbol.iterator](), w;
                  !(s = (w = b.next()).done) &&
                  (n.push(w.value), !(f && n.length === f));
                  s = !0
                );
              } catch (v) {
                (k = !0), (g = v);
              } finally {
                try {
                  !s && b.return && b.return();
                } finally {
                  if (k) throw g;
                }
              }
              return n;
            }
            return function (i, f) {
              if (Array.isArray(i)) return i;
              if (Symbol.iterator in Object(i)) return r(i, f);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          N = function r(i, f, n) {
            i === null && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, f);
            if (s === void 0) {
              var k = Object.getPrototypeOf(i);
              return k === null ? void 0 : r(k, f, n);
            } else {
              if ("value" in s) return s.value;
              var g = s.get;
              return g === void 0 ? void 0 : g.call(n);
            }
          },
          A = (function () {
            function r(i, f) {
              for (var n = 0; n < f.length; n++) {
                var s = f[n];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(i, s.key, s);
              }
            }
            return function (i, f, n) {
              return f && r(i.prototype, f), n && r(i, n), i;
            };
          })(),
          m = p(0),
          y = t(m),
          c = p(7),
          o = t(c);
        function t(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function e(r, i) {
          if (!(r instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function u(r, i) {
          if (!r)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return i && (typeof i == "object" || typeof i == "function") ? i : r;
        }
        function l(r, i) {
          if (typeof i != "function" && i !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof i
            );
          (r.prototype = Object.create(i && i.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            i &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(r, i)
                : (r.__proto__ = i));
        }
        var a = (function (r) {
          l(i, r), A(i, null, [{ key: "value", value: function () {} }]);
          function i(f, n) {
            e(this, i);
            var s = u(
              this,
              (i.__proto__ || Object.getPrototypeOf(i)).call(this, f)
            );
            return (
              (s.selection = n),
              (s.textNode = document.createTextNode(i.CONTENTS)),
              s.domNode.appendChild(s.textNode),
              (s._length = 0),
              s
            );
          }
          return (
            A(i, [
              {
                key: "detach",
                value: function () {
                  this.parent != null && this.parent.removeChild(this);
                },
              },
              {
                key: "format",
                value: function (n, s) {
                  if (this._length !== 0)
                    return N(
                      i.prototype.__proto__ ||
                        Object.getPrototypeOf(i.prototype),
                      "format",
                      this
                    ).call(this, n, s);
                  for (
                    var k = this, g = 0;
                    k != null && k.statics.scope !== y.default.Scope.BLOCK_BLOT;

                  )
                    (g += k.offset(k.parent)), (k = k.parent);
                  k != null &&
                    ((this._length = i.CONTENTS.length),
                    k.optimize(),
                    k.formatAt(g, i.CONTENTS.length, n, s),
                    (this._length = 0));
                },
              },
              {
                key: "index",
                value: function (n, s) {
                  return n === this.textNode
                    ? 0
                    : N(
                        i.prototype.__proto__ ||
                          Object.getPrototypeOf(i.prototype),
                        "index",
                        this
                      ).call(this, n, s);
                },
              },
              {
                key: "length",
                value: function () {
                  return this._length;
                },
              },
              {
                key: "position",
                value: function () {
                  return [this.textNode, this.textNode.data.length];
                },
              },
              {
                key: "remove",
                value: function () {
                  N(
                    i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                    "remove",
                    this
                  ).call(this),
                    (this.parent = null);
                },
              },
              {
                key: "restore",
                value: function () {
                  if (!(this.selection.composing || this.parent == null)) {
                    var n = this.textNode,
                      s = this.selection.getNativeRange(),
                      k = void 0,
                      g = void 0,
                      b = void 0;
                    if (s != null && s.start.node === n && s.end.node === n) {
                      var w = [n, s.start.offset, s.end.offset];
                      (k = w[0]), (g = w[1]), (b = w[2]);
                    }
                    for (
                      ;
                      this.domNode.lastChild != null &&
                      this.domNode.lastChild !== this.textNode;

                    )
                      this.domNode.parentNode.insertBefore(
                        this.domNode.lastChild,
                        this.domNode
                      );
                    if (this.textNode.data !== i.CONTENTS) {
                      var v = this.textNode.data.split(i.CONTENTS).join("");
                      this.next instanceof o.default
                        ? ((k = this.next.domNode),
                          this.next.insertAt(0, v),
                          (this.textNode.data = i.CONTENTS))
                        : ((this.textNode.data = v),
                          this.parent.insertBefore(
                            y.default.create(this.textNode),
                            this
                          ),
                          (this.textNode = document.createTextNode(i.CONTENTS)),
                          this.domNode.appendChild(this.textNode));
                    }
                    if ((this.remove(), g != null)) {
                      var h = [g, b].map(function (E) {
                          return Math.max(0, Math.min(k.data.length, E - 1));
                        }),
                        d = P(h, 2);
                      return (
                        (g = d[0]),
                        (b = d[1]),
                        {
                          startNode: k,
                          startOffset: g,
                          endNode: k,
                          endOffset: b,
                        }
                      );
                    }
                  }
                },
              },
              {
                key: "update",
                value: function (n, s) {
                  var k = this;
                  if (
                    n.some(function (b) {
                      return (
                        b.type === "characterData" && b.target === k.textNode
                      );
                    })
                  ) {
                    var g = this.restore();
                    g && (s.range = g);
                  }
                },
              },
              {
                key: "value",
                value: function () {
                  return "";
                },
              },
            ]),
            i
          );
        })(y.default.Embed);
        (a.blotName = "cursor"),
          (a.className = "ql-cursor"),
          (a.tagName = "span"),
          (a.CONTENTS = "\uFEFF"),
          (_.default = a);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(0),
          N = y(P),
          A = p(4),
          m = y(A);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof l
            );
          (u.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: u,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(u, l)
                : (u.__proto__ = l));
        }
        var e = (function (u) {
          t(l, u);
          function l() {
            return (
              c(this, l),
              o(
                this,
                (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments)
              )
            );
          }
          return l;
        })(N.default.Container);
        (e.allowedChildren = [m.default, A.BlockEmbed, e]), (_.default = e);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.ColorStyle = _.ColorClass = _.ColorAttributor = void 0);
        var P = (function () {
            function a(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(r, n.key, n);
              }
            }
            return function (r, i, f) {
              return i && a(r.prototype, i), f && a(r, f), r;
            };
          })(),
          N = function a(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var s = Object.getPrototypeOf(r);
              return s === null ? void 0 : a(s, i, f);
            } else {
              if ("value" in n) return n.value;
              var k = n.get;
              return k === void 0 ? void 0 : k.call(f);
            }
          },
          A = p(0),
          m = y(A);
        function y(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function c(a, r) {
          if (!(a instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(a, r) {
          if (!a)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function t(a, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof r
            );
          (a.prototype = Object.create(r && r.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            r &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(a, r)
                : (a.__proto__ = r));
        }
        var e = (function (a) {
            t(r, a);
            function r() {
              return (
                c(this, r),
                o(
                  this,
                  (r.__proto__ || Object.getPrototypeOf(r)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              P(r, [
                {
                  key: "value",
                  value: function (f) {
                    var n = N(
                      r.prototype.__proto__ ||
                        Object.getPrototypeOf(r.prototype),
                      "value",
                      this
                    ).call(this, f);
                    return n.startsWith("rgb(")
                      ? ((n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "")),
                        "#" +
                          n
                            .split(",")
                            .map(function (s) {
                              return ("00" + parseInt(s).toString(16)).slice(
                                -2
                              );
                            })
                            .join(""))
                      : n;
                  },
                },
              ]),
              r
            );
          })(m.default.Attributor.Style),
          u = new m.default.Attributor.Class("color", "ql-color", {
            scope: m.default.Scope.INLINE,
          }),
          l = new e("color", "color", { scope: m.default.Scope.INLINE });
        (_.ColorAttributor = e), (_.ColorClass = u), (_.ColorStyle = l);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.sanitize = _.default = void 0);
        var P = (function () {
            function l(a, r) {
              for (var i = 0; i < r.length; i++) {
                var f = r[i];
                (f.enumerable = f.enumerable || !1),
                  (f.configurable = !0),
                  "value" in f && (f.writable = !0),
                  Object.defineProperty(a, f.key, f);
              }
            }
            return function (a, r, i) {
              return r && l(a.prototype, r), i && l(a, i), a;
            };
          })(),
          N = function l(a, r, i) {
            a === null && (a = Function.prototype);
            var f = Object.getOwnPropertyDescriptor(a, r);
            if (f === void 0) {
              var n = Object.getPrototypeOf(a);
              return n === null ? void 0 : l(n, r, i);
            } else {
              if ("value" in f) return f.value;
              var s = f.get;
              return s === void 0 ? void 0 : s.call(i);
            }
          },
          A = p(6),
          m = y(A);
        function y(l) {
          return l && l.__esModule ? l : { default: l };
        }
        function c(l, a) {
          if (!(l instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(l, a) {
          if (!l)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return a && (typeof a == "object" || typeof a == "function") ? a : l;
        }
        function t(l, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof a
            );
          (l.prototype = Object.create(a && a.prototype, {
            constructor: {
              value: l,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            a &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(l, a)
                : (l.__proto__ = a));
        }
        var e = (function (l) {
          t(a, l);
          function a() {
            return (
              c(this, a),
              o(
                this,
                (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments)
              )
            );
          }
          return (
            P(
              a,
              [
                {
                  key: "format",
                  value: function (i, f) {
                    if (i !== this.statics.blotName || !f)
                      return N(
                        a.prototype.__proto__ ||
                          Object.getPrototypeOf(a.prototype),
                        "format",
                        this
                      ).call(this, i, f);
                    (f = this.constructor.sanitize(f)),
                      this.domNode.setAttribute("href", f);
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (i) {
                    var f = N(
                      a.__proto__ || Object.getPrototypeOf(a),
                      "create",
                      this
                    ).call(this, i);
                    return (
                      (i = this.sanitize(i)),
                      f.setAttribute("href", i),
                      f.setAttribute("rel", "noopener noreferrer"),
                      f.setAttribute("target", "_blank"),
                      f
                    );
                  },
                },
                {
                  key: "formats",
                  value: function (i) {
                    return i.getAttribute("href");
                  },
                },
                {
                  key: "sanitize",
                  value: function (i) {
                    return u(i, this.PROTOCOL_WHITELIST)
                      ? i
                      : this.SANITIZED_URL;
                  },
                },
              ]
            ),
            a
          );
        })(m.default);
        (e.blotName = "link"),
          (e.tagName = "A"),
          (e.SANITIZED_URL = "about:blank"),
          (e.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"]);
        function u(l, a) {
          var r = document.createElement("a");
          r.href = l;
          var i = r.href.slice(0, r.href.indexOf(":"));
          return a.indexOf(i) > -1;
        }
        (_.default = e), (_.sanitize = u);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    typeof Symbol == "function" &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? "symbol"
                    : typeof a;
                },
          N = (function () {
            function a(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(r, n.key, n);
              }
            }
            return function (r, i, f) {
              return i && a(r.prototype, i), f && a(r, f), r;
            };
          })(),
          A = p(23),
          m = o(A),
          y = p(107),
          c = o(y);
        function o(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function t(a, r) {
          if (!(a instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        var e = 0;
        function u(a, r) {
          a.setAttribute(r, a.getAttribute(r) !== "true");
        }
        var l = (function () {
          function a(r) {
            var i = this;
            t(this, a),
              (this.select = r),
              (this.container = document.createElement("span")),
              this.buildPicker(),
              (this.select.style.display = "none"),
              this.select.parentNode.insertBefore(this.container, this.select),
              this.label.addEventListener("mousedown", function () {
                i.togglePicker();
              }),
              this.label.addEventListener("keydown", function (f) {
                switch (f.keyCode) {
                  case m.default.keys.ENTER:
                    i.togglePicker();
                    break;
                  case m.default.keys.ESCAPE:
                    i.escape(), f.preventDefault();
                    break;
                }
              }),
              this.select.addEventListener("change", this.update.bind(this));
          }
          return (
            N(a, [
              {
                key: "togglePicker",
                value: function () {
                  this.container.classList.toggle("ql-expanded"),
                    u(this.label, "aria-expanded"),
                    u(this.options, "aria-hidden");
                },
              },
              {
                key: "buildItem",
                value: function (i) {
                  var f = this,
                    n = document.createElement("span");
                  return (
                    (n.tabIndex = "0"),
                    n.setAttribute("role", "button"),
                    n.classList.add("ql-picker-item"),
                    i.hasAttribute("value") &&
                      n.setAttribute("data-value", i.getAttribute("value")),
                    i.textContent &&
                      n.setAttribute("data-label", i.textContent),
                    n.addEventListener("click", function () {
                      f.selectItem(n, !0);
                    }),
                    n.addEventListener("keydown", function (s) {
                      switch (s.keyCode) {
                        case m.default.keys.ENTER:
                          f.selectItem(n, !0), s.preventDefault();
                          break;
                        case m.default.keys.ESCAPE:
                          f.escape(), s.preventDefault();
                          break;
                      }
                    }),
                    n
                  );
                },
              },
              {
                key: "buildLabel",
                value: function () {
                  var i = document.createElement("span");
                  return (
                    i.classList.add("ql-picker-label"),
                    (i.innerHTML = c.default),
                    (i.tabIndex = "0"),
                    i.setAttribute("role", "button"),
                    i.setAttribute("aria-expanded", "false"),
                    this.container.appendChild(i),
                    i
                  );
                },
              },
              {
                key: "buildOptions",
                value: function () {
                  var i = this,
                    f = document.createElement("span");
                  f.classList.add("ql-picker-options"),
                    f.setAttribute("aria-hidden", "true"),
                    (f.tabIndex = "-1"),
                    (f.id = "ql-picker-options-" + e),
                    (e += 1),
                    this.label.setAttribute("aria-controls", f.id),
                    (this.options = f),
                    [].slice.call(this.select.options).forEach(function (n) {
                      var s = i.buildItem(n);
                      f.appendChild(s), n.selected === !0 && i.selectItem(s);
                    }),
                    this.container.appendChild(f);
                },
              },
              {
                key: "buildPicker",
                value: function () {
                  var i = this;
                  [].slice.call(this.select.attributes).forEach(function (f) {
                    i.container.setAttribute(f.name, f.value);
                  }),
                    this.container.classList.add("ql-picker"),
                    (this.label = this.buildLabel()),
                    this.buildOptions();
                },
              },
              {
                key: "escape",
                value: function () {
                  var i = this;
                  this.close(),
                    setTimeout(function () {
                      return i.label.focus();
                    }, 1);
                },
              },
              {
                key: "close",
                value: function () {
                  this.container.classList.remove("ql-expanded"),
                    this.label.setAttribute("aria-expanded", "false"),
                    this.options.setAttribute("aria-hidden", "true");
                },
              },
              {
                key: "selectItem",
                value: function (i) {
                  var f =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1,
                    n = this.container.querySelector(".ql-selected");
                  if (
                    i !== n &&
                    (n != null && n.classList.remove("ql-selected"),
                    i != null &&
                      (i.classList.add("ql-selected"),
                      (this.select.selectedIndex = [].indexOf.call(
                        i.parentNode.children,
                        i
                      )),
                      i.hasAttribute("data-value")
                        ? this.label.setAttribute(
                            "data-value",
                            i.getAttribute("data-value")
                          )
                        : this.label.removeAttribute("data-value"),
                      i.hasAttribute("data-label")
                        ? this.label.setAttribute(
                            "data-label",
                            i.getAttribute("data-label")
                          )
                        : this.label.removeAttribute("data-label"),
                      f))
                  ) {
                    if (typeof Event == "function")
                      this.select.dispatchEvent(new Event("change"));
                    else if (
                      (typeof Event > "u" ? "undefined" : P(Event)) === "object"
                    ) {
                      var s = document.createEvent("Event");
                      s.initEvent("change", !0, !0),
                        this.select.dispatchEvent(s);
                    }
                    this.close();
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  var i = void 0;
                  if (this.select.selectedIndex > -1) {
                    var f = this.container.querySelector(".ql-picker-options")
                      .children[this.select.selectedIndex];
                    (i = this.select.options[this.select.selectedIndex]),
                      this.selectItem(f);
                  } else this.selectItem(null);
                  var n =
                    i != null &&
                    i !== this.select.querySelector("option[selected]");
                  this.label.classList.toggle("ql-active", n);
                },
              },
            ]),
            a
          );
        })();
        _.default = l;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(0),
          N = q(P),
          A = p(5),
          m = q(A),
          y = p(4),
          c = q(y),
          o = p(16),
          t = q(o),
          e = p(25),
          u = q(e),
          l = p(24),
          a = q(l),
          r = p(35),
          i = q(r),
          f = p(6),
          n = q(f),
          s = p(22),
          k = q(s),
          g = p(7),
          b = q(g),
          w = p(55),
          v = q(w),
          h = p(42),
          d = q(h),
          E = p(23),
          T = q(E);
        function q(D) {
          return D && D.__esModule ? D : { default: D };
        }
        m.default.register({
          "blots/block": c.default,
          "blots/block/embed": y.BlockEmbed,
          "blots/break": t.default,
          "blots/container": u.default,
          "blots/cursor": a.default,
          "blots/embed": i.default,
          "blots/inline": n.default,
          "blots/scroll": k.default,
          "blots/text": b.default,
          "modules/clipboard": v.default,
          "modules/history": d.default,
          "modules/keyboard": T.default,
        }),
          N.default.register(
            c.default,
            t.default,
            a.default,
            n.default,
            k.default,
            b.default
          ),
          (_.default = m.default);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(1),
          N = (function () {
            function A(m) {
              (this.domNode = m), (this.domNode[P.DATA_KEY] = { blot: this });
            }
            return (
              Object.defineProperty(A.prototype, "statics", {
                get: function () {
                  return this.constructor;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (A.create = function (m) {
                if (this.tagName == null)
                  throw new P.ParchmentError("Blot definition missing tagName");
                var y;
                return (
                  Array.isArray(this.tagName)
                    ? (typeof m == "string" &&
                        ((m = m.toUpperCase()),
                        parseInt(m).toString() === m && (m = parseInt(m))),
                      typeof m == "number"
                        ? (y = document.createElement(this.tagName[m - 1]))
                        : this.tagName.indexOf(m) > -1
                        ? (y = document.createElement(m))
                        : (y = document.createElement(this.tagName[0])))
                    : (y = document.createElement(this.tagName)),
                  this.className && y.classList.add(this.className),
                  y
                );
              }),
              (A.prototype.attach = function () {
                this.parent != null && (this.scroll = this.parent.scroll);
              }),
              (A.prototype.clone = function () {
                var m = this.domNode.cloneNode(!1);
                return P.create(m);
              }),
              (A.prototype.detach = function () {
                this.parent != null && this.parent.removeChild(this),
                  delete this.domNode[P.DATA_KEY];
              }),
              (A.prototype.deleteAt = function (m, y) {
                var c = this.isolate(m, y);
                c.remove();
              }),
              (A.prototype.formatAt = function (m, y, c, o) {
                var t = this.isolate(m, y);
                if (P.query(c, P.Scope.BLOT) != null && o) t.wrap(c, o);
                else if (P.query(c, P.Scope.ATTRIBUTE) != null) {
                  var e = P.create(this.statics.scope);
                  t.wrap(e), e.format(c, o);
                }
              }),
              (A.prototype.insertAt = function (m, y, c) {
                var o = c == null ? P.create("text", y) : P.create(y, c),
                  t = this.split(m);
                this.parent.insertBefore(o, t);
              }),
              (A.prototype.insertInto = function (m, y) {
                y === void 0 && (y = null),
                  this.parent != null && this.parent.children.remove(this);
                var c = null;
                m.children.insertBefore(this, y),
                  y != null && (c = y.domNode),
                  (this.domNode.parentNode != m.domNode ||
                    this.domNode.nextSibling != c) &&
                    m.domNode.insertBefore(this.domNode, c),
                  (this.parent = m),
                  this.attach();
              }),
              (A.prototype.isolate = function (m, y) {
                var c = this.split(m);
                return c.split(y), c;
              }),
              (A.prototype.length = function () {
                return 1;
              }),
              (A.prototype.offset = function (m) {
                return (
                  m === void 0 && (m = this.parent),
                  this.parent == null || this == m
                    ? 0
                    : this.parent.children.offset(this) + this.parent.offset(m)
                );
              }),
              (A.prototype.optimize = function (m) {
                this.domNode[P.DATA_KEY] != null &&
                  delete this.domNode[P.DATA_KEY].mutations;
              }),
              (A.prototype.remove = function () {
                this.domNode.parentNode != null &&
                  this.domNode.parentNode.removeChild(this.domNode),
                  this.detach();
              }),
              (A.prototype.replace = function (m) {
                m.parent != null &&
                  (m.parent.insertBefore(this, m.next), m.remove());
              }),
              (A.prototype.replaceWith = function (m, y) {
                var c = typeof m == "string" ? P.create(m, y) : m;
                return c.replace(this), c;
              }),
              (A.prototype.split = function (m, y) {
                return m === 0 ? this : this.next;
              }),
              (A.prototype.update = function (m, y) {}),
              (A.prototype.wrap = function (m, y) {
                var c = typeof m == "string" ? P.create(m, y) : m;
                return (
                  this.parent != null && this.parent.insertBefore(c, this.next),
                  c.appendChild(this),
                  c
                );
              }),
              (A.blotName = "abstract"),
              A
            );
          })();
        _.default = N;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(12),
          N = p(32),
          A = p(33),
          m = p(1),
          y = (function () {
            function c(o) {
              (this.attributes = {}), (this.domNode = o), this.build();
            }
            return (
              (c.prototype.attribute = function (o, t) {
                t
                  ? o.add(this.domNode, t) &&
                    (o.value(this.domNode) != null
                      ? (this.attributes[o.attrName] = o)
                      : delete this.attributes[o.attrName])
                  : (o.remove(this.domNode),
                    delete this.attributes[o.attrName]);
              }),
              (c.prototype.build = function () {
                var o = this;
                this.attributes = {};
                var t = P.default.keys(this.domNode),
                  e = N.default.keys(this.domNode),
                  u = A.default.keys(this.domNode);
                t.concat(e)
                  .concat(u)
                  .forEach(function (l) {
                    var a = m.query(l, m.Scope.ATTRIBUTE);
                    a instanceof P.default && (o.attributes[a.attrName] = a);
                  });
              }),
              (c.prototype.copy = function (o) {
                var t = this;
                Object.keys(this.attributes).forEach(function (e) {
                  var u = t.attributes[e].value(t.domNode);
                  o.format(e, u);
                });
              }),
              (c.prototype.move = function (o) {
                var t = this;
                this.copy(o),
                  Object.keys(this.attributes).forEach(function (e) {
                    t.attributes[e].remove(t.domNode);
                  }),
                  (this.attributes = {});
              }),
              (c.prototype.values = function () {
                var o = this;
                return Object.keys(this.attributes).reduce(function (t, e) {
                  return (t[e] = o.attributes[e].value(o.domNode)), t;
                }, {});
              }),
              c
            );
          })();
        _.default = y;
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var y =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (c, o) {
                  c.__proto__ = o;
                }) ||
              function (c, o) {
                for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
              };
            return function (c, o) {
              y(c, o);
              function t() {
                this.constructor = c;
              }
              c.prototype =
                o === null
                  ? Object.create(o)
                  : ((t.prototype = o.prototype), new t());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = p(12);
        function A(y, c) {
          var o = y.getAttribute("class") || "";
          return o.split(/\s+/).filter(function (t) {
            return t.indexOf(c + "-") === 0;
          });
        }
        var m = (function (y) {
          P(c, y);
          function c() {
            return (y !== null && y.apply(this, arguments)) || this;
          }
          return (
            (c.keys = function (o) {
              return (o.getAttribute("class") || "")
                .split(/\s+/)
                .map(function (t) {
                  return t.split("-").slice(0, -1).join("-");
                });
            }),
            (c.prototype.add = function (o, t) {
              return this.canAdd(o, t)
                ? (this.remove(o), o.classList.add(this.keyName + "-" + t), !0)
                : !1;
            }),
            (c.prototype.remove = function (o) {
              var t = A(o, this.keyName);
              t.forEach(function (e) {
                o.classList.remove(e);
              }),
                o.classList.length === 0 && o.removeAttribute("class");
            }),
            (c.prototype.value = function (o) {
              var t = A(o, this.keyName)[0] || "",
                e = t.slice(this.keyName.length + 1);
              return this.canAdd(o, e) ? e : "";
            }),
            c
          );
        })(N.default);
        _.default = m;
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var y =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (c, o) {
                  c.__proto__ = o;
                }) ||
              function (c, o) {
                for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
              };
            return function (c, o) {
              y(c, o);
              function t() {
                this.constructor = c;
              }
              c.prototype =
                o === null
                  ? Object.create(o)
                  : ((t.prototype = o.prototype), new t());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = p(12);
        function A(y) {
          var c = y.split("-"),
            o = c
              .slice(1)
              .map(function (t) {
                return t[0].toUpperCase() + t.slice(1);
              })
              .join("");
          return c[0] + o;
        }
        var m = (function (y) {
          P(c, y);
          function c() {
            return (y !== null && y.apply(this, arguments)) || this;
          }
          return (
            (c.keys = function (o) {
              return (o.getAttribute("style") || "")
                .split(";")
                .map(function (t) {
                  var e = t.split(":");
                  return e[0].trim();
                });
            }),
            (c.prototype.add = function (o, t) {
              return this.canAdd(o, t)
                ? ((o.style[A(this.keyName)] = t), !0)
                : !1;
            }),
            (c.prototype.remove = function (o) {
              (o.style[A(this.keyName)] = ""),
                o.getAttribute("style") || o.removeAttribute("style");
            }),
            (c.prototype.value = function (o) {
              var t = o.style[A(this.keyName)];
              return this.canAdd(o, t) ? t : "";
            }),
            c
          );
        })(N.default);
        _.default = m;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
          function m(y, c) {
            for (var o = 0; o < c.length; o++) {
              var t = c[o];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                "value" in t && (t.writable = !0),
                Object.defineProperty(y, t.key, t);
            }
          }
          return function (y, c, o) {
            return c && m(y.prototype, c), o && m(y, o), y;
          };
        })();
        function N(m, y) {
          if (!(m instanceof y))
            throw new TypeError("Cannot call a class as a function");
        }
        var A = (function () {
          function m(y, c) {
            N(this, m),
              (this.quill = y),
              (this.options = c),
              (this.modules = {});
          }
          return (
            P(m, [
              {
                key: "init",
                value: function () {
                  var c = this;
                  Object.keys(this.options.modules).forEach(function (o) {
                    c.modules[o] == null && c.addModule(o);
                  });
                },
              },
              {
                key: "addModule",
                value: function (c) {
                  var o = this.quill.constructor.import("modules/" + c);
                  return (
                    (this.modules[c] = new o(
                      this.quill,
                      this.options.modules[c] || {}
                    )),
                    this.modules[c]
                  );
                },
              },
            ]),
            m
          );
        })();
        (A.DEFAULTS = { modules: {} }),
          (A.themes = { default: A }),
          (_.default = A);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function r(i, f) {
              for (var n = 0; n < f.length; n++) {
                var s = f[n];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(i, s.key, s);
              }
            }
            return function (i, f, n) {
              return f && r(i.prototype, f), n && r(i, n), i;
            };
          })(),
          N = function r(i, f, n) {
            i === null && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, f);
            if (s === void 0) {
              var k = Object.getPrototypeOf(i);
              return k === null ? void 0 : r(k, f, n);
            } else {
              if ("value" in s) return s.value;
              var g = s.get;
              return g === void 0 ? void 0 : g.call(n);
            }
          },
          A = p(0),
          m = o(A),
          y = p(7),
          c = o(y);
        function o(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function t(r, i) {
          if (!(r instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function e(r, i) {
          if (!r)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return i && (typeof i == "object" || typeof i == "function") ? i : r;
        }
        function u(r, i) {
          if (typeof i != "function" && i !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof i
            );
          (r.prototype = Object.create(i && i.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            i &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(r, i)
                : (r.__proto__ = i));
        }
        var l = "\uFEFF",
          a = (function (r) {
            u(i, r);
            function i(f) {
              t(this, i);
              var n = e(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).call(this, f)
              );
              return (
                (n.contentNode = document.createElement("span")),
                n.contentNode.setAttribute("contenteditable", !1),
                [].slice.call(n.domNode.childNodes).forEach(function (s) {
                  n.contentNode.appendChild(s);
                }),
                (n.leftGuard = document.createTextNode(l)),
                (n.rightGuard = document.createTextNode(l)),
                n.domNode.appendChild(n.leftGuard),
                n.domNode.appendChild(n.contentNode),
                n.domNode.appendChild(n.rightGuard),
                n
              );
            }
            return (
              P(i, [
                {
                  key: "index",
                  value: function (n, s) {
                    return n === this.leftGuard
                      ? 0
                      : n === this.rightGuard
                      ? 1
                      : N(
                          i.prototype.__proto__ ||
                            Object.getPrototypeOf(i.prototype),
                          "index",
                          this
                        ).call(this, n, s);
                  },
                },
                {
                  key: "restore",
                  value: function (n) {
                    var s = void 0,
                      k = void 0,
                      g = n.data.split(l).join("");
                    if (n === this.leftGuard)
                      if (this.prev instanceof c.default) {
                        var b = this.prev.length();
                        this.prev.insertAt(b, g),
                          (s = {
                            startNode: this.prev.domNode,
                            startOffset: b + g.length,
                          });
                      } else
                        (k = document.createTextNode(g)),
                          this.parent.insertBefore(m.default.create(k), this),
                          (s = { startNode: k, startOffset: g.length });
                    else
                      n === this.rightGuard &&
                        (this.next instanceof c.default
                          ? (this.next.insertAt(0, g),
                            (s = {
                              startNode: this.next.domNode,
                              startOffset: g.length,
                            }))
                          : ((k = document.createTextNode(g)),
                            this.parent.insertBefore(
                              m.default.create(k),
                              this.next
                            ),
                            (s = { startNode: k, startOffset: g.length })));
                    return (n.data = l), s;
                  },
                },
                {
                  key: "update",
                  value: function (n, s) {
                    var k = this;
                    n.forEach(function (g) {
                      if (
                        g.type === "characterData" &&
                        (g.target === k.leftGuard || g.target === k.rightGuard)
                      ) {
                        var b = k.restore(g.target);
                        b && (s.range = b);
                      }
                    });
                  },
                },
              ]),
              i
            );
          })(m.default.Embed);
        _.default = a;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.AlignStyle = _.AlignClass = _.AlignAttribute = void 0);
        var P = p(0),
          N = A(P);
        function A(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var m = {
            scope: N.default.Scope.BLOCK,
            whitelist: ["right", "center", "justify"],
          },
          y = new N.default.Attributor.Attribute("align", "align", m),
          c = new N.default.Attributor.Class("align", "ql-align", m),
          o = new N.default.Attributor.Style("align", "text-align", m);
        (_.AlignAttribute = y), (_.AlignClass = c), (_.AlignStyle = o);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.BackgroundStyle = _.BackgroundClass = void 0);
        var P = p(0),
          N = m(P),
          A = p(26);
        function m(o) {
          return o && o.__esModule ? o : { default: o };
        }
        var y = new N.default.Attributor.Class("background", "ql-bg", {
            scope: N.default.Scope.INLINE,
          }),
          c = new A.ColorAttributor("background", "background-color", {
            scope: N.default.Scope.INLINE,
          });
        (_.BackgroundClass = y), (_.BackgroundStyle = c);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.DirectionStyle = _.DirectionClass = _.DirectionAttribute = void 0);
        var P = p(0),
          N = A(P);
        function A(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var m = { scope: N.default.Scope.BLOCK, whitelist: ["rtl"] },
          y = new N.default.Attributor.Attribute("direction", "dir", m),
          c = new N.default.Attributor.Class("direction", "ql-direction", m),
          o = new N.default.Attributor.Style("direction", "direction", m);
        (_.DirectionAttribute = y),
          (_.DirectionClass = c),
          (_.DirectionStyle = o);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.FontClass = _.FontStyle = void 0);
        var P = (function () {
            function r(i, f) {
              for (var n = 0; n < f.length; n++) {
                var s = f[n];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(i, s.key, s);
              }
            }
            return function (i, f, n) {
              return f && r(i.prototype, f), n && r(i, n), i;
            };
          })(),
          N = function r(i, f, n) {
            i === null && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, f);
            if (s === void 0) {
              var k = Object.getPrototypeOf(i);
              return k === null ? void 0 : r(k, f, n);
            } else {
              if ("value" in s) return s.value;
              var g = s.get;
              return g === void 0 ? void 0 : g.call(n);
            }
          },
          A = p(0),
          m = y(A);
        function y(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function c(r, i) {
          if (!(r instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(r, i) {
          if (!r)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return i && (typeof i == "object" || typeof i == "function") ? i : r;
        }
        function t(r, i) {
          if (typeof i != "function" && i !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof i
            );
          (r.prototype = Object.create(i && i.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            i &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(r, i)
                : (r.__proto__ = i));
        }
        var e = {
            scope: m.default.Scope.INLINE,
            whitelist: ["serif", "monospace"],
          },
          u = new m.default.Attributor.Class("font", "ql-font", e),
          l = (function (r) {
            t(i, r);
            function i() {
              return (
                c(this, i),
                o(
                  this,
                  (i.__proto__ || Object.getPrototypeOf(i)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              P(i, [
                {
                  key: "value",
                  value: function (n) {
                    return N(
                      i.prototype.__proto__ ||
                        Object.getPrototypeOf(i.prototype),
                      "value",
                      this
                    )
                      .call(this, n)
                      .replace(/["']/g, "");
                  },
                },
              ]),
              i
            );
          })(m.default.Attributor.Style),
          a = new l("font", "font-family", e);
        (_.FontStyle = a), (_.FontClass = u);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.SizeStyle = _.SizeClass = void 0);
        var P = p(0),
          N = A(P);
        function A(c) {
          return c && c.__esModule ? c : { default: c };
        }
        var m = new N.default.Attributor.Class("size", "ql-size", {
            scope: N.default.Scope.INLINE,
            whitelist: ["small", "large", "huge"],
          }),
          y = new N.default.Attributor.Style("size", "font-size", {
            scope: N.default.Scope.INLINE,
            whitelist: ["10px", "18px", "32px"],
          });
        (_.SizeClass = m), (_.SizeStyle = y);
      },
      function (B, _, p) {
        B.exports = {
          align: { "": p(76), center: p(77), right: p(78), justify: p(79) },
          background: p(80),
          blockquote: p(81),
          bold: p(82),
          clean: p(83),
          code: p(58),
          "code-block": p(58),
          color: p(84),
          direction: { "": p(85), rtl: p(86) },
          float: { center: p(87), full: p(88), left: p(89), right: p(90) },
          formula: p(91),
          header: { 1: p(92), 2: p(93) },
          italic: p(94),
          image: p(95),
          indent: { "+1": p(96), "-1": p(97) },
          link: p(98),
          list: { ordered: p(99), bullet: p(100), check: p(101) },
          script: { sub: p(102), super: p(103) },
          strike: p(104),
          underline: p(105),
          video: p(106),
        };
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.getLastChangeIndex = _.default = void 0);
        var P = (function () {
            function f(n, s) {
              for (var k = 0; k < s.length; k++) {
                var g = s[k];
                (g.enumerable = g.enumerable || !1),
                  (g.configurable = !0),
                  "value" in g && (g.writable = !0),
                  Object.defineProperty(n, g.key, g);
              }
            }
            return function (n, s, k) {
              return s && f(n.prototype, s), k && f(n, k), n;
            };
          })(),
          N = p(0),
          A = t(N),
          m = p(5),
          y = t(m),
          c = p(9),
          o = t(c);
        function t(f) {
          return f && f.__esModule ? f : { default: f };
        }
        function e(f, n) {
          if (!(f instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function u(f, n) {
          if (!f)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return n && (typeof n == "object" || typeof n == "function") ? n : f;
        }
        function l(f, n) {
          if (typeof n != "function" && n !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof n
            );
          (f.prototype = Object.create(n && n.prototype, {
            constructor: {
              value: f,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            n &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(f, n)
                : (f.__proto__ = n));
        }
        var a = (function (f) {
          l(n, f);
          function n(s, k) {
            e(this, n);
            var g = u(
              this,
              (n.__proto__ || Object.getPrototypeOf(n)).call(this, s, k)
            );
            return (
              (g.lastRecorded = 0),
              (g.ignoreChange = !1),
              g.clear(),
              g.quill.on(y.default.events.EDITOR_CHANGE, function (b, w, v, h) {
                b !== y.default.events.TEXT_CHANGE ||
                  g.ignoreChange ||
                  (!g.options.userOnly || h === y.default.sources.USER
                    ? g.record(w, v)
                    : g.transform(w));
              }),
              g.quill.keyboard.addBinding(
                { key: "Z", shortKey: !0 },
                g.undo.bind(g)
              ),
              g.quill.keyboard.addBinding(
                { key: "Z", shortKey: !0, shiftKey: !0 },
                g.redo.bind(g)
              ),
              /Win/i.test(navigator.platform) &&
                g.quill.keyboard.addBinding(
                  { key: "Y", shortKey: !0 },
                  g.redo.bind(g)
                ),
              g
            );
          }
          return (
            P(n, [
              {
                key: "change",
                value: function (k, g) {
                  if (this.stack[k].length !== 0) {
                    var b = this.stack[k].pop();
                    this.stack[g].push(b),
                      (this.lastRecorded = 0),
                      (this.ignoreChange = !0),
                      this.quill.updateContents(b[k], y.default.sources.USER),
                      (this.ignoreChange = !1);
                    var w = i(b[k]);
                    this.quill.setSelection(w);
                  }
                },
              },
              {
                key: "clear",
                value: function () {
                  this.stack = { undo: [], redo: [] };
                },
              },
              {
                key: "cutoff",
                value: function () {
                  this.lastRecorded = 0;
                },
              },
              {
                key: "record",
                value: function (k, g) {
                  if (k.ops.length !== 0) {
                    this.stack.redo = [];
                    var b = this.quill.getContents().diff(g),
                      w = Date.now();
                    if (
                      this.lastRecorded + this.options.delay > w &&
                      this.stack.undo.length > 0
                    ) {
                      var v = this.stack.undo.pop();
                      (b = b.compose(v.undo)), (k = v.redo.compose(k));
                    } else this.lastRecorded = w;
                    this.stack.undo.push({ redo: k, undo: b }),
                      this.stack.undo.length > this.options.maxStack &&
                        this.stack.undo.shift();
                  }
                },
              },
              {
                key: "redo",
                value: function () {
                  this.change("redo", "undo");
                },
              },
              {
                key: "transform",
                value: function (k) {
                  this.stack.undo.forEach(function (g) {
                    (g.undo = k.transform(g.undo, !0)),
                      (g.redo = k.transform(g.redo, !0));
                  }),
                    this.stack.redo.forEach(function (g) {
                      (g.undo = k.transform(g.undo, !0)),
                        (g.redo = k.transform(g.redo, !0));
                    });
                },
              },
              {
                key: "undo",
                value: function () {
                  this.change("undo", "redo");
                },
              },
            ]),
            n
          );
        })(o.default);
        a.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 };
        function r(f) {
          var n = f.ops[f.ops.length - 1];
          return n == null
            ? !1
            : n.insert != null
            ? typeof n.insert == "string" &&
              n.insert.endsWith(`
`)
            : n.attributes != null
            ? Object.keys(n.attributes).some(function (s) {
                return A.default.query(s, A.default.Scope.BLOCK) != null;
              })
            : !1;
        }
        function i(f) {
          var n = f.reduce(function (k, g) {
              return (k += g.delete || 0), k;
            }, 0),
            s = f.length() - n;
          return r(f) && (s -= 1), s;
        }
        (_.default = a), (_.getLastChangeIndex = i);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.default = _.BaseTooltip = void 0);
        var P = (function () {
            function S(L, F) {
              for (var M = 0; M < F.length; M++) {
                var x = F[M];
                (x.enumerable = x.enumerable || !1),
                  (x.configurable = !0),
                  "value" in x && (x.writable = !0),
                  Object.defineProperty(L, x.key, x);
              }
            }
            return function (L, F, M) {
              return F && S(L.prototype, F), M && S(L, M), L;
            };
          })(),
          N = function S(L, F, M) {
            L === null && (L = Function.prototype);
            var x = Object.getOwnPropertyDescriptor(L, F);
            if (x === void 0) {
              var j = Object.getPrototypeOf(L);
              return j === null ? void 0 : S(j, F, M);
            } else {
              if ("value" in x) return x.value;
              var U = x.get;
              return U === void 0 ? void 0 : U.call(M);
            }
          },
          A = p(3),
          m = w(A),
          y = p(2),
          c = w(y),
          o = p(8),
          t = w(o),
          e = p(23),
          u = w(e),
          l = p(34),
          a = w(l),
          r = p(59),
          i = w(r),
          f = p(60),
          n = w(f),
          s = p(28),
          k = w(s),
          g = p(61),
          b = w(g);
        function w(S) {
          return S && S.__esModule ? S : { default: S };
        }
        function v(S, L) {
          if (!(S instanceof L))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(S, L) {
          if (!S)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return L && (typeof L == "object" || typeof L == "function") ? L : S;
        }
        function d(S, L) {
          if (typeof L != "function" && L !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof L
            );
          (S.prototype = Object.create(L && L.prototype, {
            constructor: {
              value: S,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            L &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(S, L)
                : (S.__proto__ = L));
        }
        var E = [!1, "center", "right", "justify"],
          T = [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
          ],
          q = [!1, "serif", "monospace"],
          D = ["1", "2", "3", !1],
          C = ["small", !1, "large", "huge"],
          Z = (function (S) {
            d(L, S);
            function L(F, M) {
              v(this, L);
              var x = h(
                  this,
                  (L.__proto__ || Object.getPrototypeOf(L)).call(this, F, M)
                ),
                j = function U(H) {
                  if (!document.body.contains(F.root))
                    return document.body.removeEventListener("click", U);
                  x.tooltip != null &&
                    !x.tooltip.root.contains(H.target) &&
                    document.activeElement !== x.tooltip.textbox &&
                    !x.quill.hasFocus() &&
                    x.tooltip.hide(),
                    x.pickers != null &&
                      x.pickers.forEach(function (V) {
                        V.container.contains(H.target) || V.close();
                      });
                };
              return F.emitter.listenDOM("click", document.body, j), x;
            }
            return (
              P(L, [
                {
                  key: "addModule",
                  value: function (M) {
                    var x = N(
                      L.prototype.__proto__ ||
                        Object.getPrototypeOf(L.prototype),
                      "addModule",
                      this
                    ).call(this, M);
                    return M === "toolbar" && this.extendToolbar(x), x;
                  },
                },
                {
                  key: "buildButtons",
                  value: function (M, x) {
                    M.forEach(function (j) {
                      var U = j.getAttribute("class") || "";
                      U.split(/\s+/).forEach(function (H) {
                        if (
                          H.startsWith("ql-") &&
                          ((H = H.slice(3)), x[H] != null)
                        )
                          if (H === "direction")
                            j.innerHTML = x[H][""] + x[H].rtl;
                          else if (typeof x[H] == "string") j.innerHTML = x[H];
                          else {
                            var V = j.value || "";
                            V != null && x[H][V] && (j.innerHTML = x[H][V]);
                          }
                      });
                    });
                  },
                },
                {
                  key: "buildPickers",
                  value: function (M, x) {
                    var j = this;
                    this.pickers = M.map(function (H) {
                      if (H.classList.contains("ql-align"))
                        return (
                          H.querySelector("option") == null && O(H, E),
                          new n.default(H, x.align)
                        );
                      if (
                        H.classList.contains("ql-background") ||
                        H.classList.contains("ql-color")
                      ) {
                        var V = H.classList.contains("ql-background")
                          ? "background"
                          : "color";
                        return (
                          H.querySelector("option") == null &&
                            O(H, T, V === "background" ? "#ffffff" : "#000000"),
                          new i.default(H, x[V])
                        );
                      } else return H.querySelector("option") == null && (H.classList.contains("ql-font") ? O(H, q) : H.classList.contains("ql-header") ? O(H, D) : H.classList.contains("ql-size") && O(H, C)), new k.default(H);
                    });
                    var U = function () {
                      j.pickers.forEach(function (V) {
                        V.update();
                      });
                    };
                    this.quill.on(t.default.events.EDITOR_CHANGE, U);
                  },
                },
              ]),
              L
            );
          })(a.default);
        Z.DEFAULTS = (0, m.default)(!0, {}, a.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                formula: function () {
                  this.quill.theme.tooltip.edit("formula");
                },
                image: function () {
                  var L = this,
                    F = this.container.querySelector(
                      "input.ql-image[type=file]"
                    );
                  F == null &&
                    ((F = document.createElement("input")),
                    F.setAttribute("type", "file"),
                    F.setAttribute(
                      "accept",
                      "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
                    ),
                    F.classList.add("ql-image"),
                    F.addEventListener("change", function () {
                      if (F.files != null && F.files[0] != null) {
                        var M = new FileReader();
                        (M.onload = function (x) {
                          var j = L.quill.getSelection(!0);
                          L.quill.updateContents(
                            new c.default()
                              .retain(j.index)
                              .delete(j.length)
                              .insert({ image: x.target.result }),
                            t.default.sources.USER
                          ),
                            L.quill.setSelection(
                              j.index + 1,
                              t.default.sources.SILENT
                            ),
                            (F.value = "");
                        }),
                          M.readAsDataURL(F.files[0]);
                      }
                    }),
                    this.container.appendChild(F)),
                    F.click();
                },
                video: function () {
                  this.quill.theme.tooltip.edit("video");
                },
              },
            },
          },
        });
        var I = (function (S) {
          d(L, S);
          function L(F, M) {
            v(this, L);
            var x = h(
              this,
              (L.__proto__ || Object.getPrototypeOf(L)).call(this, F, M)
            );
            return (
              (x.textbox = x.root.querySelector('input[type="text"]')),
              x.listen(),
              x
            );
          }
          return (
            P(L, [
              {
                key: "listen",
                value: function () {
                  var M = this;
                  this.textbox.addEventListener("keydown", function (x) {
                    u.default.match(x, "enter")
                      ? (M.save(), x.preventDefault())
                      : u.default.match(x, "escape") &&
                        (M.cancel(), x.preventDefault());
                  });
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.hide();
                },
              },
              {
                key: "edit",
                value: function () {
                  var M =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "link",
                    x =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                  this.root.classList.remove("ql-hidden"),
                    this.root.classList.add("ql-editing"),
                    x != null
                      ? (this.textbox.value = x)
                      : M !== this.root.getAttribute("data-mode") &&
                        (this.textbox.value = ""),
                    this.position(
                      this.quill.getBounds(this.quill.selection.savedRange)
                    ),
                    this.textbox.select(),
                    this.textbox.setAttribute(
                      "placeholder",
                      this.textbox.getAttribute("data-" + M) || ""
                    ),
                    this.root.setAttribute("data-mode", M);
                },
              },
              {
                key: "restoreFocus",
                value: function () {
                  var M = this.quill.scrollingContainer.scrollTop;
                  this.quill.focus(),
                    (this.quill.scrollingContainer.scrollTop = M);
                },
              },
              {
                key: "save",
                value: function () {
                  var M = this.textbox.value;
                  switch (this.root.getAttribute("data-mode")) {
                    case "link": {
                      var x = this.quill.root.scrollTop;
                      this.linkRange
                        ? (this.quill.formatText(
                            this.linkRange,
                            "link",
                            M,
                            t.default.sources.USER
                          ),
                          delete this.linkRange)
                        : (this.restoreFocus(),
                          this.quill.format("link", M, t.default.sources.USER)),
                        (this.quill.root.scrollTop = x);
                      break;
                    }
                    case "video":
                      M = R(M);
                    case "formula": {
                      if (!M) break;
                      var j = this.quill.getSelection(!0);
                      if (j != null) {
                        var U = j.index + j.length;
                        this.quill.insertEmbed(
                          U,
                          this.root.getAttribute("data-mode"),
                          M,
                          t.default.sources.USER
                        ),
                          this.root.getAttribute("data-mode") === "formula" &&
                            this.quill.insertText(
                              U + 1,
                              " ",
                              t.default.sources.USER
                            ),
                          this.quill.setSelection(
                            U + 2,
                            t.default.sources.USER
                          );
                      }
                      break;
                    }
                  }
                  (this.textbox.value = ""), this.hide();
                },
              },
            ]),
            L
          );
        })(b.default);
        function R(S) {
          var L =
            S.match(
              /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
            ) ||
            S.match(
              /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
            );
          return L
            ? (L[1] || "https") +
                "://www.youtube.com/embed/" +
                L[2] +
                "?showinfo=0"
            : (L = S.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))
            ? (L[1] || "https") + "://player.vimeo.com/video/" + L[2] + "/"
            : S;
        }
        function O(S, L) {
          var F =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          L.forEach(function (M) {
            var x = document.createElement("option");
            M === F
              ? x.setAttribute("selected", "selected")
              : x.setAttribute("value", M),
              S.appendChild(x);
          });
        }
        (_.BaseTooltip = I), (_.default = Z);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
          function N() {
            (this.head = this.tail = null), (this.length = 0);
          }
          return (
            (N.prototype.append = function () {
              for (var A = [], m = 0; m < arguments.length; m++)
                A[m] = arguments[m];
              this.insertBefore(A[0], null),
                A.length > 1 && this.append.apply(this, A.slice(1));
            }),
            (N.prototype.contains = function (A) {
              for (var m, y = this.iterator(); (m = y()); )
                if (m === A) return !0;
              return !1;
            }),
            (N.prototype.insertBefore = function (A, m) {
              A &&
                ((A.next = m),
                m != null
                  ? ((A.prev = m.prev),
                    m.prev != null && (m.prev.next = A),
                    (m.prev = A),
                    m === this.head && (this.head = A))
                  : this.tail != null
                  ? ((this.tail.next = A),
                    (A.prev = this.tail),
                    (this.tail = A))
                  : ((A.prev = null), (this.head = this.tail = A)),
                (this.length += 1));
            }),
            (N.prototype.offset = function (A) {
              for (var m = 0, y = this.head; y != null; ) {
                if (y === A) return m;
                (m += y.length()), (y = y.next);
              }
              return -1;
            }),
            (N.prototype.remove = function (A) {
              this.contains(A) &&
                (A.prev != null && (A.prev.next = A.next),
                A.next != null && (A.next.prev = A.prev),
                A === this.head && (this.head = A.next),
                A === this.tail && (this.tail = A.prev),
                (this.length -= 1));
            }),
            (N.prototype.iterator = function (A) {
              return (
                A === void 0 && (A = this.head),
                function () {
                  var m = A;
                  return A != null && (A = A.next), m;
                }
              );
            }),
            (N.prototype.find = function (A, m) {
              m === void 0 && (m = !1);
              for (var y, c = this.iterator(); (y = c()); ) {
                var o = y.length();
                if (
                  A < o ||
                  (m && A === o && (y.next == null || y.next.length() !== 0))
                )
                  return [y, A];
                A -= o;
              }
              return [null, 0];
            }),
            (N.prototype.forEach = function (A) {
              for (var m, y = this.iterator(); (m = y()); ) A(m);
            }),
            (N.prototype.forEachAt = function (A, m, y) {
              if (!(m <= 0))
                for (
                  var c = this.find(A),
                    o = c[0],
                    t = c[1],
                    e,
                    u = A - t,
                    l = this.iterator(o);
                  (e = l()) && u < A + m;

                ) {
                  var a = e.length();
                  A > u
                    ? y(e, A - u, Math.min(m, u + a - A))
                    : y(e, 0, Math.min(a, A + m - u)),
                    (u += a);
                }
            }),
            (N.prototype.map = function (A) {
              return this.reduce(function (m, y) {
                return m.push(A(y)), m;
              }, []);
            }),
            (N.prototype.reduce = function (A, m) {
              for (var y, c = this.iterator(); (y = c()); ) m = A(m, y);
              return m;
            }),
            N
          );
        })();
        _.default = P;
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var u in e) e.hasOwnProperty(u) && (t[u] = e[u]);
              };
            return function (t, e) {
              o(t, e);
              function u() {
                this.constructor = t;
              }
              t.prototype =
                e === null
                  ? Object.create(e)
                  : ((u.prototype = e.prototype), new u());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = p(17),
          A = p(1),
          m = {
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0,
          },
          y = 100,
          c = (function (o) {
            P(t, o);
            function t(e) {
              var u = o.call(this, e) || this;
              return (
                (u.scroll = u),
                (u.observer = new MutationObserver(function (l) {
                  u.update(l);
                })),
                u.observer.observe(u.domNode, m),
                u.attach(),
                u
              );
            }
            return (
              (t.prototype.detach = function () {
                o.prototype.detach.call(this), this.observer.disconnect();
              }),
              (t.prototype.deleteAt = function (e, u) {
                this.update(),
                  e === 0 && u === this.length()
                    ? this.children.forEach(function (l) {
                        l.remove();
                      })
                    : o.prototype.deleteAt.call(this, e, u);
              }),
              (t.prototype.formatAt = function (e, u, l, a) {
                this.update(), o.prototype.formatAt.call(this, e, u, l, a);
              }),
              (t.prototype.insertAt = function (e, u, l) {
                this.update(), o.prototype.insertAt.call(this, e, u, l);
              }),
              (t.prototype.optimize = function (e, u) {
                var l = this;
                e === void 0 && (e = []),
                  u === void 0 && (u = {}),
                  o.prototype.optimize.call(this, u);
                for (
                  var a = [].slice.call(this.observer.takeRecords());
                  a.length > 0;

                )
                  e.push(a.pop());
                for (
                  var r = function (s, k) {
                      k === void 0 && (k = !0),
                        !(s == null || s === l) &&
                          s.domNode.parentNode != null &&
                          (s.domNode[A.DATA_KEY].mutations == null &&
                            (s.domNode[A.DATA_KEY].mutations = []),
                          k && r(s.parent));
                    },
                    i = function (s) {
                      s.domNode[A.DATA_KEY] == null ||
                        s.domNode[A.DATA_KEY].mutations == null ||
                        (s instanceof N.default && s.children.forEach(i),
                        s.optimize(u));
                    },
                    f = e,
                    n = 0;
                  f.length > 0;
                  n += 1
                ) {
                  if (n >= y)
                    throw new Error(
                      "[Parchment] Maximum optimize iterations reached"
                    );
                  for (
                    f.forEach(function (s) {
                      var k = A.find(s.target, !0);
                      k != null &&
                        (k.domNode === s.target &&
                          (s.type === "childList"
                            ? (r(A.find(s.previousSibling, !1)),
                              [].forEach.call(s.addedNodes, function (g) {
                                var b = A.find(g, !1);
                                r(b, !1),
                                  b instanceof N.default &&
                                    b.children.forEach(function (w) {
                                      r(w, !1);
                                    });
                              }))
                            : s.type === "attributes" && r(k.prev)),
                        r(k));
                    }),
                      this.children.forEach(i),
                      f = [].slice.call(this.observer.takeRecords()),
                      a = f.slice();
                    a.length > 0;

                  )
                    e.push(a.pop());
                }
              }),
              (t.prototype.update = function (e, u) {
                var l = this;
                u === void 0 && (u = {}),
                  (e = e || this.observer.takeRecords()),
                  e
                    .map(function (a) {
                      var r = A.find(a.target, !0);
                      return r == null
                        ? null
                        : r.domNode[A.DATA_KEY].mutations == null
                        ? ((r.domNode[A.DATA_KEY].mutations = [a]), r)
                        : (r.domNode[A.DATA_KEY].mutations.push(a), null);
                    })
                    .forEach(function (a) {
                      a == null ||
                        a === l ||
                        a.domNode[A.DATA_KEY] == null ||
                        a.update(a.domNode[A.DATA_KEY].mutations || [], u);
                    }),
                  this.domNode[A.DATA_KEY].mutations != null &&
                    o.prototype.update.call(
                      this,
                      this.domNode[A.DATA_KEY].mutations,
                      u
                    ),
                  this.optimize(e, u);
              }),
              (t.blotName = "scroll"),
              (t.defaultChild = "block"),
              (t.scope = A.Scope.BLOCK_BLOT),
              (t.tagName = "DIV"),
              t
            );
          })(N.default);
        _.default = c;
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var c =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (o, t) {
                  o.__proto__ = t;
                }) ||
              function (o, t) {
                for (var e in t) t.hasOwnProperty(e) && (o[e] = t[e]);
              };
            return function (o, t) {
              c(o, t);
              function e() {
                this.constructor = o;
              }
              o.prototype =
                t === null
                  ? Object.create(t)
                  : ((e.prototype = t.prototype), new e());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = p(18),
          A = p(1);
        function m(c, o) {
          if (Object.keys(c).length !== Object.keys(o).length) return !1;
          for (var t in c) if (c[t] !== o[t]) return !1;
          return !0;
        }
        var y = (function (c) {
          P(o, c);
          function o() {
            return (c !== null && c.apply(this, arguments)) || this;
          }
          return (
            (o.formats = function (t) {
              if (t.tagName !== o.tagName) return c.formats.call(this, t);
            }),
            (o.prototype.format = function (t, e) {
              var u = this;
              t === this.statics.blotName && !e
                ? (this.children.forEach(function (l) {
                    l instanceof N.default || (l = l.wrap(o.blotName, !0)),
                      u.attributes.copy(l);
                  }),
                  this.unwrap())
                : c.prototype.format.call(this, t, e);
            }),
            (o.prototype.formatAt = function (t, e, u, l) {
              if (this.formats()[u] != null || A.query(u, A.Scope.ATTRIBUTE)) {
                var a = this.isolate(t, e);
                a.format(u, l);
              } else c.prototype.formatAt.call(this, t, e, u, l);
            }),
            (o.prototype.optimize = function (t) {
              c.prototype.optimize.call(this, t);
              var e = this.formats();
              if (Object.keys(e).length === 0) return this.unwrap();
              var u = this.next;
              u instanceof o &&
                u.prev === this &&
                m(e, u.formats()) &&
                (u.moveChildren(this), u.remove());
            }),
            (o.blotName = "inline"),
            (o.scope = A.Scope.INLINE_BLOT),
            (o.tagName = "SPAN"),
            o
          );
        })(N.default);
        _.default = y;
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var y =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (c, o) {
                  c.__proto__ = o;
                }) ||
              function (c, o) {
                for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
              };
            return function (c, o) {
              y(c, o);
              function t() {
                this.constructor = c;
              }
              c.prototype =
                o === null
                  ? Object.create(o)
                  : ((t.prototype = o.prototype), new t());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = p(18),
          A = p(1),
          m = (function (y) {
            P(c, y);
            function c() {
              return (y !== null && y.apply(this, arguments)) || this;
            }
            return (
              (c.formats = function (o) {
                var t = A.query(c.blotName).tagName;
                if (o.tagName !== t) return y.formats.call(this, o);
              }),
              (c.prototype.format = function (o, t) {
                A.query(o, A.Scope.BLOCK) != null &&
                  (o === this.statics.blotName && !t
                    ? this.replaceWith(c.blotName)
                    : y.prototype.format.call(this, o, t));
              }),
              (c.prototype.formatAt = function (o, t, e, u) {
                A.query(e, A.Scope.BLOCK) != null
                  ? this.format(e, u)
                  : y.prototype.formatAt.call(this, o, t, e, u);
              }),
              (c.prototype.insertAt = function (o, t, e) {
                if (e == null || A.query(t, A.Scope.INLINE) != null)
                  y.prototype.insertAt.call(this, o, t, e);
                else {
                  var u = this.split(o),
                    l = A.create(t, e);
                  u.parent.insertBefore(l, u);
                }
              }),
              (c.prototype.update = function (o, t) {
                navigator.userAgent.match(/Trident/)
                  ? this.build()
                  : y.prototype.update.call(this, o, t);
              }),
              (c.blotName = "block"),
              (c.scope = A.Scope.BLOCK_BLOT),
              (c.tagName = "P"),
              c
            );
          })(N.default);
        _.default = m;
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var m =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (y, c) {
                  y.__proto__ = c;
                }) ||
              function (y, c) {
                for (var o in c) c.hasOwnProperty(o) && (y[o] = c[o]);
              };
            return function (y, c) {
              m(y, c);
              function o() {
                this.constructor = y;
              }
              y.prototype =
                c === null
                  ? Object.create(c)
                  : ((o.prototype = c.prototype), new o());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = p(19),
          A = (function (m) {
            P(y, m);
            function y() {
              return (m !== null && m.apply(this, arguments)) || this;
            }
            return (
              (y.formats = function (c) {}),
              (y.prototype.format = function (c, o) {
                m.prototype.formatAt.call(this, 0, this.length(), c, o);
              }),
              (y.prototype.formatAt = function (c, o, t, e) {
                c === 0 && o === this.length()
                  ? this.format(t, e)
                  : m.prototype.formatAt.call(this, c, o, t, e);
              }),
              (y.prototype.formats = function () {
                return this.statics.formats(this.domNode);
              }),
              y
            );
          })(N.default);
        _.default = A;
      },
      function (B, _, p) {
        var P =
          (this && this.__extends) ||
          (function () {
            var y =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (c, o) {
                  c.__proto__ = o;
                }) ||
              function (c, o) {
                for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
              };
            return function (c, o) {
              y(c, o);
              function t() {
                this.constructor = c;
              }
              c.prototype =
                o === null
                  ? Object.create(o)
                  : ((t.prototype = o.prototype), new t());
            };
          })();
        Object.defineProperty(_, "__esModule", { value: !0 });
        var N = p(19),
          A = p(1),
          m = (function (y) {
            P(c, y);
            function c(o) {
              var t = y.call(this, o) || this;
              return (t.text = t.statics.value(t.domNode)), t;
            }
            return (
              (c.create = function (o) {
                return document.createTextNode(o);
              }),
              (c.value = function (o) {
                var t = o.data;
                return t.normalize && (t = t.normalize()), t;
              }),
              (c.prototype.deleteAt = function (o, t) {
                this.domNode.data = this.text =
                  this.text.slice(0, o) + this.text.slice(o + t);
              }),
              (c.prototype.index = function (o, t) {
                return this.domNode === o ? t : -1;
              }),
              (c.prototype.insertAt = function (o, t, e) {
                e == null
                  ? ((this.text =
                      this.text.slice(0, o) + t + this.text.slice(o)),
                    (this.domNode.data = this.text))
                  : y.prototype.insertAt.call(this, o, t, e);
              }),
              (c.prototype.length = function () {
                return this.text.length;
              }),
              (c.prototype.optimize = function (o) {
                y.prototype.optimize.call(this, o),
                  (this.text = this.statics.value(this.domNode)),
                  this.text.length === 0
                    ? this.remove()
                    : this.next instanceof c &&
                      this.next.prev === this &&
                      (this.insertAt(this.length(), this.next.value()),
                      this.next.remove());
              }),
              (c.prototype.position = function (o, t) {
                return [this.domNode, o];
              }),
              (c.prototype.split = function (o, t) {
                if ((t === void 0 && (t = !1), !t)) {
                  if (o === 0) return this;
                  if (o === this.length()) return this.next;
                }
                var e = A.create(this.domNode.splitText(o));
                return (
                  this.parent.insertBefore(e, this.next),
                  (this.text = this.statics.value(this.domNode)),
                  e
                );
              }),
              (c.prototype.update = function (o, t) {
                var e = this;
                o.some(function (u) {
                  return u.type === "characterData" && u.target === e.domNode;
                }) && (this.text = this.statics.value(this.domNode));
              }),
              (c.prototype.value = function () {
                return this.text;
              }),
              (c.blotName = "text"),
              (c.scope = A.Scope.INLINE_BLOT),
              c
            );
          })(N.default);
        _.default = m;
      },
      function (B, _, p) {
        var P = document.createElement("div");
        if (
          (P.classList.toggle("test-class", !1),
          P.classList.contains("test-class"))
        ) {
          var N = DOMTokenList.prototype.toggle;
          DOMTokenList.prototype.toggle = function (A, m) {
            return arguments.length > 1 && !this.contains(A) == !m
              ? m
              : N.call(this, A);
          };
        }
        String.prototype.startsWith ||
          (String.prototype.startsWith = function (A, m) {
            return (m = m || 0), this.substr(m, A.length) === A;
          }),
          String.prototype.endsWith ||
            (String.prototype.endsWith = function (A, m) {
              var y = this.toString();
              (typeof m != "number" ||
                !isFinite(m) ||
                Math.floor(m) !== m ||
                m > y.length) &&
                (m = y.length),
                (m -= A.length);
              var c = y.indexOf(A, m);
              return c !== -1 && c === m;
            }),
          Array.prototype.find ||
            Object.defineProperty(Array.prototype, "find", {
              value: function (m) {
                if (this === null)
                  throw new TypeError(
                    "Array.prototype.find called on null or undefined"
                  );
                if (typeof m != "function")
                  throw new TypeError("predicate must be a function");
                for (
                  var y = Object(this),
                    c = y.length >>> 0,
                    o = arguments[1],
                    t,
                    e = 0;
                  e < c;
                  e++
                )
                  if (((t = y[e]), m.call(o, t, e, y))) return t;
              },
            }),
          document.addEventListener("DOMContentLoaded", function () {
            document.execCommand("enableObjectResizing", !1, !1),
              document.execCommand("autoUrlDetect", !1, !1);
          });
      },
      function (B, _) {
        var p = -1,
          P = 1,
          N = 0;
        function A(n, s, k) {
          if (n == s) return n ? [[N, n]] : [];
          (k < 0 || n.length < k) && (k = null);
          var g = o(n, s),
            b = n.substring(0, g);
          (n = n.substring(g)), (s = s.substring(g)), (g = t(n, s));
          var w = n.substring(n.length - g);
          (n = n.substring(0, n.length - g)),
            (s = s.substring(0, s.length - g));
          var v = m(n, s);
          return (
            b && v.unshift([N, b]),
            w && v.push([N, w]),
            u(v),
            k != null && (v = r(v, k)),
            (v = i(v)),
            v
          );
        }
        function m(n, s) {
          var k;
          if (!n) return [[P, s]];
          if (!s) return [[p, n]];
          var g = n.length > s.length ? n : s,
            b = n.length > s.length ? s : n,
            w = g.indexOf(b);
          if (w != -1)
            return (
              (k = [
                [P, g.substring(0, w)],
                [N, b],
                [P, g.substring(w + b.length)],
              ]),
              n.length > s.length && (k[0][0] = k[2][0] = p),
              k
            );
          if (b.length == 1)
            return [
              [p, n],
              [P, s],
            ];
          var v = e(n, s);
          if (v) {
            var h = v[0],
              d = v[1],
              E = v[2],
              T = v[3],
              q = v[4],
              D = A(h, E),
              C = A(d, T);
            return D.concat([[N, q]], C);
          }
          return y(n, s);
        }
        function y(n, s) {
          for (
            var k = n.length,
              g = s.length,
              b = Math.ceil((k + g) / 2),
              w = b,
              v = 2 * b,
              h = new Array(v),
              d = new Array(v),
              E = 0;
            E < v;
            E++
          )
            (h[E] = -1), (d[E] = -1);
          (h[w + 1] = 0), (d[w + 1] = 0);
          for (
            var T = k - g, q = T % 2 != 0, D = 0, C = 0, Z = 0, I = 0, R = 0;
            R < b;
            R++
          ) {
            for (var O = -R + D; O <= R - C; O += 2) {
              var S = w + O,
                L;
              O == -R || (O != R && h[S - 1] < h[S + 1])
                ? (L = h[S + 1])
                : (L = h[S - 1] + 1);
              for (
                var F = L - O;
                L < k && F < g && n.charAt(L) == s.charAt(F);

              )
                L++, F++;
              if (((h[S] = L), L > k)) C += 2;
              else if (F > g) D += 2;
              else if (q) {
                var M = w + T - O;
                if (M >= 0 && M < v && d[M] != -1) {
                  var x = k - d[M];
                  if (L >= x) return c(n, s, L, F);
                }
              }
            }
            for (var j = -R + Z; j <= R - I; j += 2) {
              var M = w + j,
                x;
              j == -R || (j != R && d[M - 1] < d[M + 1])
                ? (x = d[M + 1])
                : (x = d[M - 1] + 1);
              for (
                var U = x - j;
                x < k && U < g && n.charAt(k - x - 1) == s.charAt(g - U - 1);

              )
                x++, U++;
              if (((d[M] = x), x > k)) I += 2;
              else if (U > g) Z += 2;
              else if (!q) {
                var S = w + T - j;
                if (S >= 0 && S < v && h[S] != -1) {
                  var L = h[S],
                    F = w + L - S;
                  if (((x = k - x), L >= x)) return c(n, s, L, F);
                }
              }
            }
          }
          return [
            [p, n],
            [P, s],
          ];
        }
        function c(n, s, k, g) {
          var b = n.substring(0, k),
            w = s.substring(0, g),
            v = n.substring(k),
            h = s.substring(g),
            d = A(b, w),
            E = A(v, h);
          return d.concat(E);
        }
        function o(n, s) {
          if (!n || !s || n.charAt(0) != s.charAt(0)) return 0;
          for (
            var k = 0, g = Math.min(n.length, s.length), b = g, w = 0;
            k < b;

          )
            n.substring(w, b) == s.substring(w, b)
              ? ((k = b), (w = k))
              : (g = b),
              (b = Math.floor((g - k) / 2 + k));
          return b;
        }
        function t(n, s) {
          if (!n || !s || n.charAt(n.length - 1) != s.charAt(s.length - 1))
            return 0;
          for (
            var k = 0, g = Math.min(n.length, s.length), b = g, w = 0;
            k < b;

          )
            n.substring(n.length - b, n.length - w) ==
            s.substring(s.length - b, s.length - w)
              ? ((k = b), (w = k))
              : (g = b),
              (b = Math.floor((g - k) / 2 + k));
          return b;
        }
        function e(n, s) {
          var k = n.length > s.length ? n : s,
            g = n.length > s.length ? s : n;
          if (k.length < 4 || g.length * 2 < k.length) return null;
          function b(C, Z, I) {
            for (
              var R = C.substring(I, I + Math.floor(C.length / 4)),
                O = -1,
                S = "",
                L,
                F,
                M,
                x;
              (O = Z.indexOf(R, O + 1)) != -1;

            ) {
              var j = o(C.substring(I), Z.substring(O)),
                U = t(C.substring(0, I), Z.substring(0, O));
              S.length < U + j &&
                ((S = Z.substring(O - U, O) + Z.substring(O, O + j)),
                (L = C.substring(0, I - U)),
                (F = C.substring(I + j)),
                (M = Z.substring(0, O - U)),
                (x = Z.substring(O + j)));
            }
            return S.length * 2 >= C.length ? [L, F, M, x, S] : null;
          }
          var w = b(k, g, Math.ceil(k.length / 4)),
            v = b(k, g, Math.ceil(k.length / 2)),
            h;
          if (!w && !v) return null;
          v ? (w ? (h = w[4].length > v[4].length ? w : v) : (h = v)) : (h = w);
          var d, E, T, q;
          n.length > s.length
            ? ((d = h[0]), (E = h[1]), (T = h[2]), (q = h[3]))
            : ((T = h[0]), (q = h[1]), (d = h[2]), (E = h[3]));
          var D = h[4];
          return [d, E, T, q, D];
        }
        function u(n) {
          n.push([N, ""]);
          for (var s = 0, k = 0, g = 0, b = "", w = "", v; s < n.length; )
            switch (n[s][0]) {
              case P:
                g++, (w += n[s][1]), s++;
                break;
              case p:
                k++, (b += n[s][1]), s++;
                break;
              case N:
                k + g > 1
                  ? (k !== 0 &&
                      g !== 0 &&
                      ((v = o(w, b)),
                      v !== 0 &&
                        (s - k - g > 0 && n[s - k - g - 1][0] == N
                          ? (n[s - k - g - 1][1] += w.substring(0, v))
                          : (n.splice(0, 0, [N, w.substring(0, v)]), s++),
                        (w = w.substring(v)),
                        (b = b.substring(v))),
                      (v = t(w, b)),
                      v !== 0 &&
                        ((n[s][1] = w.substring(w.length - v) + n[s][1]),
                        (w = w.substring(0, w.length - v)),
                        (b = b.substring(0, b.length - v)))),
                    k === 0
                      ? n.splice(s - g, k + g, [P, w])
                      : g === 0
                      ? n.splice(s - k, k + g, [p, b])
                      : n.splice(s - k - g, k + g, [p, b], [P, w]),
                    (s = s - k - g + (k ? 1 : 0) + (g ? 1 : 0) + 1))
                  : s !== 0 && n[s - 1][0] == N
                  ? ((n[s - 1][1] += n[s][1]), n.splice(s, 1))
                  : s++,
                  (g = 0),
                  (k = 0),
                  (b = ""),
                  (w = "");
                break;
            }
          n[n.length - 1][1] === "" && n.pop();
          var h = !1;
          for (s = 1; s < n.length - 1; )
            n[s - 1][0] == N &&
              n[s + 1][0] == N &&
              (n[s][1].substring(n[s][1].length - n[s - 1][1].length) ==
              n[s - 1][1]
                ? ((n[s][1] =
                    n[s - 1][1] +
                    n[s][1].substring(0, n[s][1].length - n[s - 1][1].length)),
                  (n[s + 1][1] = n[s - 1][1] + n[s + 1][1]),
                  n.splice(s - 1, 1),
                  (h = !0))
                : n[s][1].substring(0, n[s + 1][1].length) == n[s + 1][1] &&
                  ((n[s - 1][1] += n[s + 1][1]),
                  (n[s][1] =
                    n[s][1].substring(n[s + 1][1].length) + n[s + 1][1]),
                  n.splice(s + 1, 1),
                  (h = !0))),
              s++;
          h && u(n);
        }
        var l = A;
        (l.INSERT = P), (l.DELETE = p), (l.EQUAL = N), (B.exports = l);
        function a(n, s) {
          if (s === 0) return [N, n];
          for (var k = 0, g = 0; g < n.length; g++) {
            var b = n[g];
            if (b[0] === p || b[0] === N) {
              var w = k + b[1].length;
              if (s === w) return [g + 1, n];
              if (s < w) {
                n = n.slice();
                var v = s - k,
                  h = [b[0], b[1].slice(0, v)],
                  d = [b[0], b[1].slice(v)];
                return n.splice(g, 1, h, d), [g + 1, n];
              } else k = w;
            }
          }
          throw new Error("cursor_pos is out of bounds!");
        }
        function r(n, s) {
          var k = a(n, s),
            g = k[1],
            b = k[0],
            w = g[b],
            v = g[b + 1];
          if (w == null) return n;
          if (w[0] !== N) return n;
          if (v != null && w[1] + v[1] === v[1] + w[1])
            return g.splice(b, 2, v, w), f(g, b, 2);
          if (v != null && v[1].indexOf(w[1]) === 0) {
            g.splice(b, 2, [v[0], w[1]], [0, w[1]]);
            var h = v[1].slice(w[1].length);
            return h.length > 0 && g.splice(b + 2, 0, [v[0], h]), f(g, b, 3);
          } else return n;
        }
        function i(n) {
          for (
            var s = !1,
              k = function (v) {
                return v.charCodeAt(0) >= 56320 && v.charCodeAt(0) <= 57343;
              },
              g = function (v) {
                return (
                  v.charCodeAt(v.length - 1) >= 55296 &&
                  v.charCodeAt(v.length - 1) <= 56319
                );
              },
              b = 2;
            b < n.length;
            b += 1
          )
            n[b - 2][0] === N &&
              g(n[b - 2][1]) &&
              n[b - 1][0] === p &&
              k(n[b - 1][1]) &&
              n[b][0] === P &&
              k(n[b][1]) &&
              ((s = !0),
              (n[b - 1][1] = n[b - 2][1].slice(-1) + n[b - 1][1]),
              (n[b][1] = n[b - 2][1].slice(-1) + n[b][1]),
              (n[b - 2][1] = n[b - 2][1].slice(0, -1)));
          if (!s) return n;
          for (var w = [], b = 0; b < n.length; b += 1)
            n[b][1].length > 0 && w.push(n[b]);
          return w;
        }
        function f(n, s, k) {
          for (var g = s + k - 1; g >= 0 && g >= s - 1; g--)
            if (g + 1 < n.length) {
              var b = n[g],
                w = n[g + 1];
              b[0] === w[1] && n.splice(g, 2, [b[0], b[1] + w[1]]);
            }
          return n;
        }
      },
      function (B, _) {
        (_ = B.exports = typeof Object.keys == "function" ? Object.keys : p),
          (_.shim = p);
        function p(P) {
          var N = [];
          for (var A in P) N.push(A);
          return N;
        }
      },
      function (B, _) {
        var p =
          (function () {
            return Object.prototype.toString.call(arguments);
          })() == "[object Arguments]";
        (_ = B.exports = p ? P : N), (_.supported = P);
        function P(A) {
          return Object.prototype.toString.call(A) == "[object Arguments]";
        }
        _.unsupported = N;
        function N(A) {
          return (
            (A &&
              typeof A == "object" &&
              typeof A.length == "number" &&
              Object.prototype.hasOwnProperty.call(A, "callee") &&
              !Object.prototype.propertyIsEnumerable.call(A, "callee")) ||
            !1
          );
        }
      },
      function (B, _) {
        var p = Object.prototype.hasOwnProperty,
          P = "~";
        function N() {}
        Object.create &&
          ((N.prototype = Object.create(null)), new N().__proto__ || (P = !1));
        function A(y, c, o) {
          (this.fn = y), (this.context = c), (this.once = o || !1);
        }
        function m() {
          (this._events = new N()), (this._eventsCount = 0);
        }
        (m.prototype.eventNames = function () {
          var c = [],
            o,
            t;
          if (this._eventsCount === 0) return c;
          for (t in (o = this._events))
            p.call(o, t) && c.push(P ? t.slice(1) : t);
          return Object.getOwnPropertySymbols
            ? c.concat(Object.getOwnPropertySymbols(o))
            : c;
        }),
          (m.prototype.listeners = function (c, o) {
            var t = P ? P + c : c,
              e = this._events[t];
            if (o) return !!e;
            if (!e) return [];
            if (e.fn) return [e.fn];
            for (var u = 0, l = e.length, a = new Array(l); u < l; u++)
              a[u] = e[u].fn;
            return a;
          }),
          (m.prototype.emit = function (c, o, t, e, u, l) {
            var a = P ? P + c : c;
            if (!this._events[a]) return !1;
            var r = this._events[a],
              i = arguments.length,
              f,
              n;
            if (r.fn) {
              switch ((r.once && this.removeListener(c, r.fn, void 0, !0), i)) {
                case 1:
                  return r.fn.call(r.context), !0;
                case 2:
                  return r.fn.call(r.context, o), !0;
                case 3:
                  return r.fn.call(r.context, o, t), !0;
                case 4:
                  return r.fn.call(r.context, o, t, e), !0;
                case 5:
                  return r.fn.call(r.context, o, t, e, u), !0;
                case 6:
                  return r.fn.call(r.context, o, t, e, u, l), !0;
              }
              for (n = 1, f = new Array(i - 1); n < i; n++)
                f[n - 1] = arguments[n];
              r.fn.apply(r.context, f);
            } else {
              var s = r.length,
                k;
              for (n = 0; n < s; n++)
                switch (
                  (r[n].once && this.removeListener(c, r[n].fn, void 0, !0), i)
                ) {
                  case 1:
                    r[n].fn.call(r[n].context);
                    break;
                  case 2:
                    r[n].fn.call(r[n].context, o);
                    break;
                  case 3:
                    r[n].fn.call(r[n].context, o, t);
                    break;
                  case 4:
                    r[n].fn.call(r[n].context, o, t, e);
                    break;
                  default:
                    if (!f)
                      for (k = 1, f = new Array(i - 1); k < i; k++)
                        f[k - 1] = arguments[k];
                    r[n].fn.apply(r[n].context, f);
                }
            }
            return !0;
          }),
          (m.prototype.on = function (c, o, t) {
            var e = new A(o, t || this),
              u = P ? P + c : c;
            return (
              this._events[u]
                ? this._events[u].fn
                  ? (this._events[u] = [this._events[u], e])
                  : this._events[u].push(e)
                : ((this._events[u] = e), this._eventsCount++),
              this
            );
          }),
          (m.prototype.once = function (c, o, t) {
            var e = new A(o, t || this, !0),
              u = P ? P + c : c;
            return (
              this._events[u]
                ? this._events[u].fn
                  ? (this._events[u] = [this._events[u], e])
                  : this._events[u].push(e)
                : ((this._events[u] = e), this._eventsCount++),
              this
            );
          }),
          (m.prototype.removeListener = function (c, o, t, e) {
            var u = P ? P + c : c;
            if (!this._events[u]) return this;
            if (!o)
              return (
                --this._eventsCount === 0
                  ? (this._events = new N())
                  : delete this._events[u],
                this
              );
            var l = this._events[u];
            if (l.fn)
              l.fn === o &&
                (!e || l.once) &&
                (!t || l.context === t) &&
                (--this._eventsCount === 0
                  ? (this._events = new N())
                  : delete this._events[u]);
            else {
              for (var a = 0, r = [], i = l.length; a < i; a++)
                (l[a].fn !== o ||
                  (e && !l[a].once) ||
                  (t && l[a].context !== t)) &&
                  r.push(l[a]);
              r.length
                ? (this._events[u] = r.length === 1 ? r[0] : r)
                : --this._eventsCount === 0
                ? (this._events = new N())
                : delete this._events[u];
            }
            return this;
          }),
          (m.prototype.removeAllListeners = function (c) {
            var o;
            return (
              c
                ? ((o = P ? P + c : c),
                  this._events[o] &&
                    (--this._eventsCount === 0
                      ? (this._events = new N())
                      : delete this._events[o]))
                : ((this._events = new N()), (this._eventsCount = 0)),
              this
            );
          }),
          (m.prototype.off = m.prototype.removeListener),
          (m.prototype.addListener = m.prototype.on),
          (m.prototype.setMaxListeners = function () {
            return this;
          }),
          (m.prefixed = P),
          (m.EventEmitter = m),
          typeof B < "u" && (B.exports = m);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.matchText = _.matchSpacing = _.matchNewline = _.matchBlot = _.matchAttributor = _.default = void 0);
        var P =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (z) {
                  return typeof z;
                }
              : function (z) {
                  return z &&
                    typeof Symbol == "function" &&
                    z.constructor === Symbol &&
                    z !== Symbol.prototype
                    ? "symbol"
                    : typeof z;
                },
          N = (function () {
            function z(K, $) {
              var G = [],
                W = !0,
                J = !1,
                tt = void 0;
              try {
                for (
                  var et = K[Symbol.iterator](), ut;
                  !(W = (ut = et.next()).done) &&
                  (G.push(ut.value), !($ && G.length === $));
                  W = !0
                );
              } catch (ft) {
                (J = !0), (tt = ft);
              } finally {
                try {
                  !W && et.return && et.return();
                } finally {
                  if (J) throw tt;
                }
              }
              return G;
            }
            return function (K, $) {
              if (Array.isArray(K)) return K;
              if (Symbol.iterator in Object(K)) return z(K, $);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          A = (function () {
            function z(K, $) {
              for (var G = 0; G < $.length; G++) {
                var W = $[G];
                (W.enumerable = W.enumerable || !1),
                  (W.configurable = !0),
                  "value" in W && (W.writable = !0),
                  Object.defineProperty(K, W.key, W);
              }
            }
            return function (K, $, G) {
              return $ && z(K.prototype, $), G && z(K, G), K;
            };
          })(),
          m = p(3),
          y = d(m),
          c = p(2),
          o = d(c),
          t = p(0),
          e = d(t),
          u = p(5),
          l = d(u),
          a = p(10),
          r = d(a),
          i = p(9),
          f = d(i),
          n = p(36),
          s = p(37),
          k = p(13),
          g = d(k),
          b = p(26),
          w = p(38),
          v = p(39),
          h = p(40);
        function d(z) {
          return z && z.__esModule ? z : { default: z };
        }
        function E(z, K, $) {
          return (
            K in z
              ? Object.defineProperty(z, K, {
                  value: $,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (z[K] = $),
            z
          );
        }
        function T(z, K) {
          if (!(z instanceof K))
            throw new TypeError("Cannot call a class as a function");
        }
        function q(z, K) {
          if (!z)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return K && (typeof K == "object" || typeof K == "function") ? K : z;
        }
        function D(z, K) {
          if (typeof K != "function" && K !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof K
            );
          (z.prototype = Object.create(K && K.prototype, {
            constructor: {
              value: z,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            K &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(z, K)
                : (z.__proto__ = K));
        }
        var C = (0, r.default)("quill:clipboard"),
          Z = "__ql-matcher",
          I = [
            [Node.TEXT_NODE, lt],
            [Node.TEXT_NODE, nt],
            ["br", Y],
            [Node.ELEMENT_NODE, nt],
            [Node.ELEMENT_NODE, V],
            [Node.ELEMENT_NODE, rt],
            [Node.ELEMENT_NODE, H],
            [Node.ELEMENT_NODE, at],
            ["li", Q],
            ["b", U.bind(U, "bold")],
            ["i", U.bind(U, "italic")],
            ["style", X],
          ],
          R = [n.AlignAttribute, w.DirectionAttribute].reduce(function (z, K) {
            return (z[K.keyName] = K), z;
          }, {}),
          O = [
            n.AlignStyle,
            s.BackgroundStyle,
            b.ColorStyle,
            w.DirectionStyle,
            v.FontStyle,
            h.SizeStyle,
          ].reduce(function (z, K) {
            return (z[K.keyName] = K), z;
          }, {}),
          S = (function (z) {
            D(K, z);
            function K($, G) {
              T(this, K);
              var W = q(
                this,
                (K.__proto__ || Object.getPrototypeOf(K)).call(this, $, G)
              );
              return (
                W.quill.root.addEventListener("paste", W.onPaste.bind(W)),
                (W.container = W.quill.addContainer("ql-clipboard")),
                W.container.setAttribute("contenteditable", !0),
                W.container.setAttribute("tabindex", -1),
                (W.matchers = []),
                I.concat(W.options.matchers).forEach(function (J) {
                  var tt = N(J, 2),
                    et = tt[0],
                    ut = tt[1];
                  (!G.matchVisual && ut === rt) || W.addMatcher(et, ut);
                }),
                W
              );
            }
            return (
              A(K, [
                {
                  key: "addMatcher",
                  value: function (G, W) {
                    this.matchers.push([G, W]);
                  },
                },
                {
                  key: "convert",
                  value: function (G) {
                    if (typeof G == "string")
                      return (
                        (this.container.innerHTML = G.replace(
                          /\>\r?\n +\</g,
                          "><"
                        )),
                        this.convert()
                      );
                    var W = this.quill.getFormat(
                      this.quill.selection.savedRange.index
                    );
                    if (W[g.default.blotName]) {
                      var J = this.container.innerText;
                      return (
                        (this.container.innerHTML = ""),
                        new o.default().insert(
                          J,
                          E({}, g.default.blotName, W[g.default.blotName])
                        )
                      );
                    }
                    var tt = this.prepareMatching(),
                      et = N(tt, 2),
                      ut = et[0],
                      ft = et[1],
                      it = j(this.container, ut, ft);
                    return (
                      M(
                        it,
                        `
`
                      ) &&
                        it.ops[it.ops.length - 1].attributes == null &&
                        (it = it.compose(
                          new o.default().retain(it.length() - 1).delete(1)
                        )),
                      C.log("convert", this.container.innerHTML, it),
                      (this.container.innerHTML = ""),
                      it
                    );
                  },
                },
                {
                  key: "dangerouslyPasteHTML",
                  value: function (G, W) {
                    var J =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : l.default.sources.API;
                    if (typeof G == "string")
                      this.quill.setContents(this.convert(G), W),
                        this.quill.setSelection(0, l.default.sources.SILENT);
                    else {
                      var tt = this.convert(W);
                      this.quill.updateContents(
                        new o.default().retain(G).concat(tt),
                        J
                      ),
                        this.quill.setSelection(
                          G + tt.length(),
                          l.default.sources.SILENT
                        );
                    }
                  },
                },
                {
                  key: "onPaste",
                  value: function (G) {
                    var W = this;
                    if (!(G.defaultPrevented || !this.quill.isEnabled())) {
                      var J = this.quill.getSelection(),
                        tt = new o.default().retain(J.index),
                        et = this.quill.scrollingContainer.scrollTop;
                      this.container.focus(),
                        this.quill.selection.update(l.default.sources.SILENT),
                        setTimeout(function () {
                          (tt = tt.concat(W.convert()).delete(J.length)),
                            W.quill.updateContents(tt, l.default.sources.USER),
                            W.quill.setSelection(
                              tt.length() - J.length,
                              l.default.sources.SILENT
                            ),
                            (W.quill.scrollingContainer.scrollTop = et),
                            W.quill.focus();
                        }, 1);
                    }
                  },
                },
                {
                  key: "prepareMatching",
                  value: function () {
                    var G = this,
                      W = [],
                      J = [];
                    return (
                      this.matchers.forEach(function (tt) {
                        var et = N(tt, 2),
                          ut = et[0],
                          ft = et[1];
                        switch (ut) {
                          case Node.TEXT_NODE:
                            J.push(ft);
                            break;
                          case Node.ELEMENT_NODE:
                            W.push(ft);
                            break;
                          default:
                            [].forEach.call(
                              G.container.querySelectorAll(ut),
                              function (it) {
                                (it[Z] = it[Z] || []), it[Z].push(ft);
                              }
                            );
                            break;
                        }
                      }),
                      [W, J]
                    );
                  },
                },
              ]),
              K
            );
          })(f.default);
        S.DEFAULTS = { matchers: [], matchVisual: !0 };
        function L(z, K, $) {
          return (typeof K > "u" ? "undefined" : P(K)) === "object"
            ? Object.keys(K).reduce(function (G, W) {
                return L(G, W, K[W]);
              }, z)
            : z.reduce(function (G, W) {
                return W.attributes && W.attributes[K]
                  ? G.push(W)
                  : G.insert(
                      W.insert,
                      (0, y.default)({}, E({}, K, $), W.attributes)
                    );
              }, new o.default());
        }
        function F(z) {
          if (z.nodeType !== Node.ELEMENT_NODE) return {};
          var K = "__ql-computed-style";
          return z[K] || (z[K] = window.getComputedStyle(z));
        }
        function M(z, K) {
          for (
            var $ = "", G = z.ops.length - 1;
            G >= 0 && $.length < K.length;
            --G
          ) {
            var W = z.ops[G];
            if (typeof W.insert != "string") break;
            $ = W.insert + $;
          }
          return $.slice(-1 * K.length) === K;
        }
        function x(z) {
          if (z.childNodes.length === 0) return !1;
          var K = F(z);
          return ["block", "list-item"].indexOf(K.display) > -1;
        }
        function j(z, K, $) {
          return z.nodeType === z.TEXT_NODE
            ? $.reduce(function (G, W) {
                return W(z, G);
              }, new o.default())
            : z.nodeType === z.ELEMENT_NODE
            ? [].reduce.call(
                z.childNodes || [],
                function (G, W) {
                  var J = j(W, K, $);
                  return (
                    W.nodeType === z.ELEMENT_NODE &&
                      ((J = K.reduce(function (tt, et) {
                        return et(W, tt);
                      }, J)),
                      (J = (W[Z] || []).reduce(function (tt, et) {
                        return et(W, tt);
                      }, J))),
                    G.concat(J)
                  );
                },
                new o.default()
              )
            : new o.default();
        }
        function U(z, K, $) {
          return L($, z, !0);
        }
        function H(z, K) {
          var $ = e.default.Attributor.Attribute.keys(z),
            G = e.default.Attributor.Class.keys(z),
            W = e.default.Attributor.Style.keys(z),
            J = {};
          return (
            $.concat(G)
              .concat(W)
              .forEach(function (tt) {
                var et = e.default.query(tt, e.default.Scope.ATTRIBUTE);
                (et != null &&
                  ((J[et.attrName] = et.value(z)), J[et.attrName])) ||
                  ((et = R[tt]),
                  et != null &&
                    (et.attrName === tt || et.keyName === tt) &&
                    (J[et.attrName] = et.value(z) || void 0),
                  (et = O[tt]),
                  et != null &&
                    (et.attrName === tt || et.keyName === tt) &&
                    ((et = O[tt]), (J[et.attrName] = et.value(z) || void 0)));
              }),
            Object.keys(J).length > 0 && (K = L(K, J)),
            K
          );
        }
        function V(z, K) {
          var $ = e.default.query(z);
          if ($ == null) return K;
          if ($.prototype instanceof e.default.Embed) {
            var G = {},
              W = $.value(z);
            W != null &&
              ((G[$.blotName] = W),
              (K = new o.default().insert(G, $.formats(z))));
          } else
            typeof $.formats == "function" &&
              (K = L(K, $.blotName, $.formats(z)));
          return K;
        }
        function Y(z, K) {
          return (
            M(
              K,
              `
`
            ) ||
              K.insert(`
`),
            K
          );
        }
        function X() {
          return new o.default();
        }
        function Q(z, K) {
          var $ = e.default.query(z);
          if (
            $ == null ||
            $.blotName !== "list-item" ||
            !M(
              K,
              `
`
            )
          )
            return K;
          for (
            var G = -1, W = z.parentNode;
            !W.classList.contains("ql-clipboard");

          )
            (e.default.query(W) || {}).blotName === "list" && (G += 1),
              (W = W.parentNode);
          return G <= 0
            ? K
            : K.compose(
                new o.default().retain(K.length() - 1).retain(1, { indent: G })
              );
        }
        function nt(z, K) {
          return (
            M(
              K,
              `
`
            ) ||
              ((x(z) ||
                (K.length() > 0 && z.nextSibling && x(z.nextSibling))) &&
                K.insert(`
`)),
            K
          );
        }
        function rt(z, K) {
          if (
            x(z) &&
            z.nextElementSibling != null &&
            !M(
              K,
              `

`
            )
          ) {
            var $ =
              z.offsetHeight +
              parseFloat(F(z).marginTop) +
              parseFloat(F(z).marginBottom);
            z.nextElementSibling.offsetTop > z.offsetTop + $ * 1.5 &&
              K.insert(`
`);
          }
          return K;
        }
        function at(z, K) {
          var $ = {},
            G = z.style || {};
          return (
            G.fontStyle && F(z).fontStyle === "italic" && ($.italic = !0),
            G.fontWeight &&
              (F(z).fontWeight.startsWith("bold") ||
                parseInt(F(z).fontWeight) >= 700) &&
              ($.bold = !0),
            Object.keys($).length > 0 && (K = L(K, $)),
            parseFloat(G.textIndent || 0) > 0 &&
              (K = new o.default().insert("	").concat(K)),
            K
          );
        }
        function lt(z, K) {
          var $ = z.data;
          if (z.parentNode.tagName === "O:P") return K.insert($.trim());
          if (
            $.trim().length === 0 &&
            z.parentNode.classList.contains("ql-clipboard")
          )
            return K;
          if (!F(z.parentNode).whiteSpace.startsWith("pre")) {
            var G = function (J, tt) {
              return (
                (tt = tt.replace(/[^\u00a0]/g, "")),
                tt.length < 1 && J ? " " : tt
              );
            };
            ($ = $.replace(/\r\n/g, " ").replace(/\n/g, " ")),
              ($ = $.replace(/\s\s+/g, G.bind(G, !0))),
              ((z.previousSibling == null && x(z.parentNode)) ||
                (z.previousSibling != null && x(z.previousSibling))) &&
                ($ = $.replace(/^\s+/, G.bind(G, !1))),
              ((z.nextSibling == null && x(z.parentNode)) ||
                (z.nextSibling != null && x(z.nextSibling))) &&
                ($ = $.replace(/\s+$/, G.bind(G, !1)));
          }
          return K.insert($);
        }
        (_.default = S),
          (_.matchAttributor = H),
          (_.matchBlot = V),
          (_.matchNewline = nt),
          (_.matchSpacing = rt),
          (_.matchText = lt);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function u(l, a) {
              for (var r = 0; r < a.length; r++) {
                var i = a[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(l, i.key, i);
              }
            }
            return function (l, a, r) {
              return a && u(l.prototype, a), r && u(l, r), l;
            };
          })(),
          N = function u(l, a, r) {
            l === null && (l = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(l, a);
            if (i === void 0) {
              var f = Object.getPrototypeOf(l);
              return f === null ? void 0 : u(f, a, r);
            } else {
              if ("value" in i) return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          },
          A = p(6),
          m = y(A);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof l
            );
          (u.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: u,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(u, l)
                : (u.__proto__ = l));
        }
        var e = (function (u) {
          t(l, u);
          function l() {
            return (
              c(this, l),
              o(
                this,
                (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments)
              )
            );
          }
          return (
            P(
              l,
              [
                {
                  key: "optimize",
                  value: function (r) {
                    N(
                      l.prototype.__proto__ ||
                        Object.getPrototypeOf(l.prototype),
                      "optimize",
                      this
                    ).call(this, r),
                      this.domNode.tagName !== this.statics.tagName[0] &&
                        this.replaceWith(this.statics.blotName);
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function () {
                    return N(
                      l.__proto__ || Object.getPrototypeOf(l),
                      "create",
                      this
                    ).call(this);
                  },
                },
                {
                  key: "formats",
                  value: function () {
                    return !0;
                  },
                },
              ]
            ),
            l
          );
        })(m.default);
        (e.blotName = "bold"), (e.tagName = ["STRONG", "B"]), (_.default = e);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.addControls = _.default = void 0);
        var P = (function () {
            function h(d, E) {
              var T = [],
                q = !0,
                D = !1,
                C = void 0;
              try {
                for (
                  var Z = d[Symbol.iterator](), I;
                  !(q = (I = Z.next()).done) &&
                  (T.push(I.value), !(E && T.length === E));
                  q = !0
                );
              } catch (R) {
                (D = !0), (C = R);
              } finally {
                try {
                  !q && Z.return && Z.return();
                } finally {
                  if (D) throw C;
                }
              }
              return T;
            }
            return function (d, E) {
              if (Array.isArray(d)) return d;
              if (Symbol.iterator in Object(d)) return h(d, E);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          N = (function () {
            function h(d, E) {
              for (var T = 0; T < E.length; T++) {
                var q = E[T];
                (q.enumerable = q.enumerable || !1),
                  (q.configurable = !0),
                  "value" in q && (q.writable = !0),
                  Object.defineProperty(d, q.key, q);
              }
            }
            return function (d, E, T) {
              return E && h(d.prototype, E), T && h(d, T), d;
            };
          })(),
          A = p(2),
          m = r(A),
          y = p(0),
          c = r(y),
          o = p(5),
          t = r(o),
          e = p(10),
          u = r(e),
          l = p(9),
          a = r(l);
        function r(h) {
          return h && h.__esModule ? h : { default: h };
        }
        function i(h, d, E) {
          return (
            d in h
              ? Object.defineProperty(h, d, {
                  value: E,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (h[d] = E),
            h
          );
        }
        function f(h, d) {
          if (!(h instanceof d))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(h, d) {
          if (!h)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return d && (typeof d == "object" || typeof d == "function") ? d : h;
        }
        function s(h, d) {
          if (typeof d != "function" && d !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof d
            );
          (h.prototype = Object.create(d && d.prototype, {
            constructor: {
              value: h,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            d &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(h, d)
                : (h.__proto__ = d));
        }
        var k = (0, u.default)("quill:toolbar"),
          g = (function (h) {
            s(d, h);
            function d(E, T) {
              f(this, d);
              var q = n(
                this,
                (d.__proto__ || Object.getPrototypeOf(d)).call(this, E, T)
              );
              if (Array.isArray(q.options.container)) {
                var D = document.createElement("div");
                w(D, q.options.container),
                  E.container.parentNode.insertBefore(D, E.container),
                  (q.container = D);
              } else
                typeof q.options.container == "string"
                  ? (q.container = document.querySelector(q.options.container))
                  : (q.container = q.options.container);
              if (!(q.container instanceof HTMLElement)) {
                var C;
                return (
                  (C = k.error("Container required for toolbar", q.options)),
                  n(q, C)
                );
              }
              return (
                q.container.classList.add("ql-toolbar"),
                (q.controls = []),
                (q.handlers = {}),
                Object.keys(q.options.handlers).forEach(function (Z) {
                  q.addHandler(Z, q.options.handlers[Z]);
                }),
                [].forEach.call(
                  q.container.querySelectorAll("button, select"),
                  function (Z) {
                    q.attach(Z);
                  }
                ),
                q.quill.on(t.default.events.EDITOR_CHANGE, function (Z, I) {
                  Z === t.default.events.SELECTION_CHANGE && q.update(I);
                }),
                q.quill.on(t.default.events.SCROLL_OPTIMIZE, function () {
                  var Z = q.quill.selection.getRange(),
                    I = P(Z, 1),
                    R = I[0];
                  q.update(R);
                }),
                q
              );
            }
            return (
              N(d, [
                {
                  key: "addHandler",
                  value: function (T, q) {
                    this.handlers[T] = q;
                  },
                },
                {
                  key: "attach",
                  value: function (T) {
                    var q = this,
                      D = [].find.call(T.classList, function (Z) {
                        return Z.indexOf("ql-") === 0;
                      });
                    if (D) {
                      if (
                        ((D = D.slice(3)),
                        T.tagName === "BUTTON" &&
                          T.setAttribute("type", "button"),
                        this.handlers[D] == null)
                      ) {
                        if (
                          this.quill.scroll.whitelist != null &&
                          this.quill.scroll.whitelist[D] == null
                        ) {
                          k.warn("ignoring attaching to disabled format", D, T);
                          return;
                        }
                        if (c.default.query(D) == null) {
                          k.warn(
                            "ignoring attaching to nonexistent format",
                            D,
                            T
                          );
                          return;
                        }
                      }
                      var C = T.tagName === "SELECT" ? "change" : "click";
                      T.addEventListener(C, function (Z) {
                        var I = void 0;
                        if (T.tagName === "SELECT") {
                          if (T.selectedIndex < 0) return;
                          var R = T.options[T.selectedIndex];
                          R.hasAttribute("selected")
                            ? (I = !1)
                            : (I = R.value || !1);
                        } else T.classList.contains("ql-active") ? (I = !1) : (I = T.value || !T.hasAttribute("value")), Z.preventDefault();
                        q.quill.focus();
                        var O = q.quill.selection.getRange(),
                          S = P(O, 1),
                          L = S[0];
                        if (q.handlers[D] != null) q.handlers[D].call(q, I);
                        else if (
                          c.default.query(D).prototype instanceof
                          c.default.Embed
                        ) {
                          if (((I = prompt("Enter " + D)), !I)) return;
                          q.quill.updateContents(
                            new m.default()
                              .retain(L.index)
                              .delete(L.length)
                              .insert(i({}, D, I)),
                            t.default.sources.USER
                          );
                        } else q.quill.format(D, I, t.default.sources.USER);
                        q.update(L);
                      }),
                        this.controls.push([D, T]);
                    }
                  },
                },
                {
                  key: "update",
                  value: function (T) {
                    var q = T == null ? {} : this.quill.getFormat(T);
                    this.controls.forEach(function (D) {
                      var C = P(D, 2),
                        Z = C[0],
                        I = C[1];
                      if (I.tagName === "SELECT") {
                        var R = void 0;
                        if (T == null) R = null;
                        else if (q[Z] == null)
                          R = I.querySelector("option[selected]");
                        else if (!Array.isArray(q[Z])) {
                          var O = q[Z];
                          typeof O == "string" && (O = O.replace(/\"/g, '\\"')),
                            (R = I.querySelector('option[value="' + O + '"]'));
                        }
                        R == null
                          ? ((I.value = ""), (I.selectedIndex = -1))
                          : (R.selected = !0);
                      } else if (T == null) I.classList.remove("ql-active");
                      else if (I.hasAttribute("value")) {
                        var S =
                          q[Z] === I.getAttribute("value") ||
                          (q[Z] != null &&
                            q[Z].toString() === I.getAttribute("value")) ||
                          (q[Z] == null && !I.getAttribute("value"));
                        I.classList.toggle("ql-active", S);
                      } else I.classList.toggle("ql-active", q[Z] != null);
                    });
                  },
                },
              ]),
              d
            );
          })(a.default);
        g.DEFAULTS = {};
        function b(h, d, E) {
          var T = document.createElement("button");
          T.setAttribute("type", "button"),
            T.classList.add("ql-" + d),
            E != null && (T.value = E),
            h.appendChild(T);
        }
        function w(h, d) {
          Array.isArray(d[0]) || (d = [d]),
            d.forEach(function (E) {
              var T = document.createElement("span");
              T.classList.add("ql-formats"),
                E.forEach(function (q) {
                  if (typeof q == "string") b(T, q);
                  else {
                    var D = Object.keys(q)[0],
                      C = q[D];
                    Array.isArray(C) ? v(T, D, C) : b(T, D, C);
                  }
                }),
                h.appendChild(T);
            });
        }
        function v(h, d, E) {
          var T = document.createElement("select");
          T.classList.add("ql-" + d),
            E.forEach(function (q) {
              var D = document.createElement("option");
              q !== !1
                ? D.setAttribute("value", q)
                : D.setAttribute("selected", "selected"),
                T.appendChild(D);
            }),
            h.appendChild(T);
        }
        (g.DEFAULTS = {
          container: null,
          handlers: {
            clean: function () {
              var d = this,
                E = this.quill.getSelection();
              if (E != null)
                if (E.length == 0) {
                  var T = this.quill.getFormat();
                  Object.keys(T).forEach(function (q) {
                    c.default.query(q, c.default.Scope.INLINE) != null &&
                      d.quill.format(q, !1);
                  });
                } else this.quill.removeFormat(E, t.default.sources.USER);
            },
            direction: function (d) {
              var E = this.quill.getFormat().align;
              d === "rtl" && E == null
                ? this.quill.format("align", "right", t.default.sources.USER)
                : !d &&
                  E === "right" &&
                  this.quill.format("align", !1, t.default.sources.USER),
                this.quill.format("direction", d, t.default.sources.USER);
            },
            indent: function (d) {
              var E = this.quill.getSelection(),
                T = this.quill.getFormat(E),
                q = parseInt(T.indent || 0);
              if (d === "+1" || d === "-1") {
                var D = d === "+1" ? 1 : -1;
                T.direction === "rtl" && (D *= -1),
                  this.quill.format("indent", q + D, t.default.sources.USER);
              }
            },
            link: function (d) {
              d === !0 && (d = prompt("Enter link URL:")),
                this.quill.format("link", d, t.default.sources.USER);
            },
            list: function (d) {
              var E = this.quill.getSelection(),
                T = this.quill.getFormat(E);
              d === "check"
                ? T.list === "checked" || T.list === "unchecked"
                  ? this.quill.format("list", !1, t.default.sources.USER)
                  : this.quill.format(
                      "list",
                      "unchecked",
                      t.default.sources.USER
                    )
                : this.quill.format("list", d, t.default.sources.USER);
            },
          },
        }),
          (_.default = g),
          (_.addControls = w);
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function u(l, a) {
              for (var r = 0; r < a.length; r++) {
                var i = a[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(l, i.key, i);
              }
            }
            return function (l, a, r) {
              return a && u(l.prototype, a), r && u(l, r), l;
            };
          })(),
          N = function u(l, a, r) {
            l === null && (l = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(l, a);
            if (i === void 0) {
              var f = Object.getPrototypeOf(l);
              return f === null ? void 0 : u(f, a, r);
            } else {
              if ("value" in i) return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          },
          A = p(28),
          m = y(A);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof l
            );
          (u.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: u,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(u, l)
                : (u.__proto__ = l));
        }
        var e = (function (u) {
          t(l, u);
          function l(a, r) {
            c(this, l);
            var i = o(
              this,
              (l.__proto__ || Object.getPrototypeOf(l)).call(this, a)
            );
            return (
              (i.label.innerHTML = r),
              i.container.classList.add("ql-color-picker"),
              [].slice
                .call(i.container.querySelectorAll(".ql-picker-item"), 0, 7)
                .forEach(function (f) {
                  f.classList.add("ql-primary");
                }),
              i
            );
          }
          return (
            P(l, [
              {
                key: "buildItem",
                value: function (r) {
                  var i = N(
                    l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                    "buildItem",
                    this
                  ).call(this, r);
                  return (
                    (i.style.backgroundColor = r.getAttribute("value") || ""), i
                  );
                },
              },
              {
                key: "selectItem",
                value: function (r, i) {
                  N(
                    l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                    "selectItem",
                    this
                  ).call(this, r, i);
                  var f = this.label.querySelector(".ql-color-label"),
                    n = (r && r.getAttribute("data-value")) || "";
                  f &&
                    (f.tagName === "line"
                      ? (f.style.stroke = n)
                      : (f.style.fill = n));
                },
              },
            ]),
            l
          );
        })(m.default);
        _.default = e;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function u(l, a) {
              for (var r = 0; r < a.length; r++) {
                var i = a[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(l, i.key, i);
              }
            }
            return function (l, a, r) {
              return a && u(l.prototype, a), r && u(l, r), l;
            };
          })(),
          N = function u(l, a, r) {
            l === null && (l = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(l, a);
            if (i === void 0) {
              var f = Object.getPrototypeOf(l);
              return f === null ? void 0 : u(f, a, r);
            } else {
              if ("value" in i) return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          },
          A = p(28),
          m = y(A);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof l
            );
          (u.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: u,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(u, l)
                : (u.__proto__ = l));
        }
        var e = (function (u) {
          t(l, u);
          function l(a, r) {
            c(this, l);
            var i = o(
              this,
              (l.__proto__ || Object.getPrototypeOf(l)).call(this, a)
            );
            return (
              i.container.classList.add("ql-icon-picker"),
              [].forEach.call(
                i.container.querySelectorAll(".ql-picker-item"),
                function (f) {
                  f.innerHTML = r[f.getAttribute("data-value") || ""];
                }
              ),
              (i.defaultItem = i.container.querySelector(".ql-selected")),
              i.selectItem(i.defaultItem),
              i
            );
          }
          return (
            P(l, [
              {
                key: "selectItem",
                value: function (r, i) {
                  N(
                    l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                    "selectItem",
                    this
                  ).call(this, r, i),
                    (r = r || this.defaultItem),
                    (this.label.innerHTML = r.innerHTML);
                },
              },
            ]),
            l
          );
        })(m.default);
        _.default = e;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
          function m(y, c) {
            for (var o = 0; o < c.length; o++) {
              var t = c[o];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                "value" in t && (t.writable = !0),
                Object.defineProperty(y, t.key, t);
            }
          }
          return function (y, c, o) {
            return c && m(y.prototype, c), o && m(y, o), y;
          };
        })();
        function N(m, y) {
          if (!(m instanceof y))
            throw new TypeError("Cannot call a class as a function");
        }
        var A = (function () {
          function m(y, c) {
            var o = this;
            N(this, m),
              (this.quill = y),
              (this.boundsContainer = c || document.body),
              (this.root = y.addContainer("ql-tooltip")),
              (this.root.innerHTML = this.constructor.TEMPLATE),
              this.quill.root === this.quill.scrollingContainer &&
                this.quill.root.addEventListener("scroll", function () {
                  o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px";
                }),
              this.hide();
          }
          return (
            P(m, [
              {
                key: "hide",
                value: function () {
                  this.root.classList.add("ql-hidden");
                },
              },
              {
                key: "position",
                value: function (c) {
                  var o = c.left + c.width / 2 - this.root.offsetWidth / 2,
                    t = c.bottom + this.quill.root.scrollTop;
                  (this.root.style.left = o + "px"),
                    (this.root.style.top = t + "px"),
                    this.root.classList.remove("ql-flip");
                  var e = this.boundsContainer.getBoundingClientRect(),
                    u = this.root.getBoundingClientRect(),
                    l = 0;
                  if (
                    (u.right > e.right &&
                      ((l = e.right - u.right),
                      (this.root.style.left = o + l + "px")),
                    u.left < e.left &&
                      ((l = e.left - u.left),
                      (this.root.style.left = o + l + "px")),
                    u.bottom > e.bottom)
                  ) {
                    var a = u.bottom - u.top,
                      r = c.bottom - c.top + a;
                    (this.root.style.top = t - r + "px"),
                      this.root.classList.add("ql-flip");
                  }
                  return l;
                },
              },
              {
                key: "show",
                value: function () {
                  this.root.classList.remove("ql-editing"),
                    this.root.classList.remove("ql-hidden");
                },
              },
            ]),
            m
          );
        })();
        _.default = A;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function v(h, d) {
              var E = [],
                T = !0,
                q = !1,
                D = void 0;
              try {
                for (
                  var C = h[Symbol.iterator](), Z;
                  !(T = (Z = C.next()).done) &&
                  (E.push(Z.value), !(d && E.length === d));
                  T = !0
                );
              } catch (I) {
                (q = !0), (D = I);
              } finally {
                try {
                  !T && C.return && C.return();
                } finally {
                  if (q) throw D;
                }
              }
              return E;
            }
            return function (h, d) {
              if (Array.isArray(h)) return h;
              if (Symbol.iterator in Object(h)) return v(h, d);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          N = function v(h, d, E) {
            h === null && (h = Function.prototype);
            var T = Object.getOwnPropertyDescriptor(h, d);
            if (T === void 0) {
              var q = Object.getPrototypeOf(h);
              return q === null ? void 0 : v(q, d, E);
            } else {
              if ("value" in T) return T.value;
              var D = T.get;
              return D === void 0 ? void 0 : D.call(E);
            }
          },
          A = (function () {
            function v(h, d) {
              for (var E = 0; E < d.length; E++) {
                var T = d[E];
                (T.enumerable = T.enumerable || !1),
                  (T.configurable = !0),
                  "value" in T && (T.writable = !0),
                  Object.defineProperty(h, T.key, T);
              }
            }
            return function (h, d, E) {
              return d && v(h.prototype, d), E && v(h, E), h;
            };
          })(),
          m = p(3),
          y = f(m),
          c = p(8),
          o = f(c),
          t = p(43),
          e = f(t),
          u = p(27),
          l = f(u),
          a = p(15),
          r = p(41),
          i = f(r);
        function f(v) {
          return v && v.__esModule ? v : { default: v };
        }
        function n(v, h) {
          if (!(v instanceof h))
            throw new TypeError("Cannot call a class as a function");
        }
        function s(v, h) {
          if (!v)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return h && (typeof h == "object" || typeof h == "function") ? h : v;
        }
        function k(v, h) {
          if (typeof h != "function" && h !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof h
            );
          (v.prototype = Object.create(h && h.prototype, {
            constructor: {
              value: v,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            h &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(v, h)
                : (v.__proto__ = h));
        }
        var g = [
            [{ header: ["1", "2", "3", !1] }],
            ["bold", "italic", "underline", "link"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
          b = (function (v) {
            k(h, v);
            function h(d, E) {
              n(this, h),
                E.modules.toolbar != null &&
                  E.modules.toolbar.container == null &&
                  (E.modules.toolbar.container = g);
              var T = s(
                this,
                (h.__proto__ || Object.getPrototypeOf(h)).call(this, d, E)
              );
              return T.quill.container.classList.add("ql-snow"), T;
            }
            return (
              A(h, [
                {
                  key: "extendToolbar",
                  value: function (E) {
                    E.container.classList.add("ql-snow"),
                      this.buildButtons(
                        [].slice.call(E.container.querySelectorAll("button")),
                        i.default
                      ),
                      this.buildPickers(
                        [].slice.call(E.container.querySelectorAll("select")),
                        i.default
                      ),
                      (this.tooltip = new w(this.quill, this.options.bounds)),
                      E.container.querySelector(".ql-link") &&
                        this.quill.keyboard.addBinding(
                          { key: "K", shortKey: !0 },
                          function (T, q) {
                            E.handlers.link.call(E, !q.format.link);
                          }
                        );
                  },
                },
              ]),
              h
            );
          })(e.default);
        b.DEFAULTS = (0, y.default)(!0, {}, e.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function (h) {
                  if (h) {
                    var d = this.quill.getSelection();
                    if (d == null || d.length == 0) return;
                    var E = this.quill.getText(d);
                    /^\S+@\S+\.\S+$/.test(E) &&
                      E.indexOf("mailto:") !== 0 &&
                      (E = "mailto:" + E);
                    var T = this.quill.theme.tooltip;
                    T.edit("link", E);
                  } else this.quill.format("link", !1);
                },
              },
            },
          },
        });
        var w = (function (v) {
          k(h, v);
          function h(d, E) {
            n(this, h);
            var T = s(
              this,
              (h.__proto__ || Object.getPrototypeOf(h)).call(this, d, E)
            );
            return (T.preview = T.root.querySelector("a.ql-preview")), T;
          }
          return (
            A(h, [
              {
                key: "listen",
                value: function () {
                  var E = this;
                  N(
                    h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                    "listen",
                    this
                  ).call(this),
                    this.root
                      .querySelector("a.ql-action")
                      .addEventListener("click", function (T) {
                        E.root.classList.contains("ql-editing")
                          ? E.save()
                          : E.edit("link", E.preview.textContent),
                          T.preventDefault();
                      }),
                    this.root
                      .querySelector("a.ql-remove")
                      .addEventListener("click", function (T) {
                        if (E.linkRange != null) {
                          var q = E.linkRange;
                          E.restoreFocus(),
                            E.quill.formatText(
                              q,
                              "link",
                              !1,
                              o.default.sources.USER
                            ),
                            delete E.linkRange;
                        }
                        T.preventDefault(), E.hide();
                      }),
                    this.quill.on(o.default.events.SELECTION_CHANGE, function (
                      T,
                      q,
                      D
                    ) {
                      if (T != null) {
                        if (T.length === 0 && D === o.default.sources.USER) {
                          var C = E.quill.scroll.descendant(l.default, T.index),
                            Z = P(C, 2),
                            I = Z[0],
                            R = Z[1];
                          if (I != null) {
                            E.linkRange = new a.Range(T.index - R, I.length());
                            var O = l.default.formats(I.domNode);
                            (E.preview.textContent = O),
                              E.preview.setAttribute("href", O),
                              E.show(),
                              E.position(E.quill.getBounds(E.linkRange));
                            return;
                          }
                        } else delete E.linkRange;
                        E.hide();
                      }
                    });
                },
              },
              {
                key: "show",
                value: function () {
                  N(
                    h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                    "show",
                    this
                  ).call(this),
                    this.root.removeAttribute("data-mode");
                },
              },
            ]),
            h
          );
        })(t.BaseTooltip);
        (w.TEMPLATE = [
          '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
          '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
          '<a class="ql-action"></a>',
          '<a class="ql-remove"></a>',
        ].join("")),
          (_.default = b);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(29),
          N = W(P),
          A = p(36),
          m = p(38),
          y = p(64),
          c = p(65),
          o = W(c),
          t = p(66),
          e = W(t),
          u = p(67),
          l = W(u),
          a = p(37),
          r = p(26),
          i = p(39),
          f = p(40),
          n = p(56),
          s = W(n),
          k = p(68),
          g = W(k),
          b = p(27),
          w = W(b),
          v = p(69),
          h = W(v),
          d = p(70),
          E = W(d),
          T = p(71),
          q = W(T),
          D = p(72),
          C = W(D),
          Z = p(73),
          I = W(Z),
          R = p(13),
          O = W(R),
          S = p(74),
          L = W(S),
          F = p(75),
          M = W(F),
          x = p(57),
          j = W(x),
          U = p(41),
          H = W(U),
          V = p(28),
          Y = W(V),
          X = p(59),
          Q = W(X),
          nt = p(60),
          rt = W(nt),
          at = p(61),
          lt = W(at),
          z = p(108),
          K = W(z),
          $ = p(62),
          G = W($);
        function W(J) {
          return J && J.__esModule ? J : { default: J };
        }
        N.default.register(
          {
            "attributors/attribute/direction": m.DirectionAttribute,
            "attributors/class/align": A.AlignClass,
            "attributors/class/background": a.BackgroundClass,
            "attributors/class/color": r.ColorClass,
            "attributors/class/direction": m.DirectionClass,
            "attributors/class/font": i.FontClass,
            "attributors/class/size": f.SizeClass,
            "attributors/style/align": A.AlignStyle,
            "attributors/style/background": a.BackgroundStyle,
            "attributors/style/color": r.ColorStyle,
            "attributors/style/direction": m.DirectionStyle,
            "attributors/style/font": i.FontStyle,
            "attributors/style/size": f.SizeStyle,
          },
          !0
        ),
          N.default.register(
            {
              "formats/align": A.AlignClass,
              "formats/direction": m.DirectionClass,
              "formats/indent": y.IndentClass,
              "formats/background": a.BackgroundStyle,
              "formats/color": r.ColorStyle,
              "formats/font": i.FontClass,
              "formats/size": f.SizeClass,
              "formats/blockquote": o.default,
              "formats/code-block": O.default,
              "formats/header": e.default,
              "formats/list": l.default,
              "formats/bold": s.default,
              "formats/code": R.Code,
              "formats/italic": g.default,
              "formats/link": w.default,
              "formats/script": h.default,
              "formats/strike": E.default,
              "formats/underline": q.default,
              "formats/image": C.default,
              "formats/video": I.default,
              "formats/list/item": u.ListItem,
              "modules/formula": L.default,
              "modules/syntax": M.default,
              "modules/toolbar": j.default,
              "themes/bubble": K.default,
              "themes/snow": G.default,
              "ui/icons": H.default,
              "ui/picker": Y.default,
              "ui/icon-picker": rt.default,
              "ui/color-picker": Q.default,
              "ui/tooltip": lt.default,
            },
            !0
          ),
          (_.default = N.default);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.IndentClass = void 0);
        var P = (function () {
            function l(a, r) {
              for (var i = 0; i < r.length; i++) {
                var f = r[i];
                (f.enumerable = f.enumerable || !1),
                  (f.configurable = !0),
                  "value" in f && (f.writable = !0),
                  Object.defineProperty(a, f.key, f);
              }
            }
            return function (a, r, i) {
              return r && l(a.prototype, r), i && l(a, i), a;
            };
          })(),
          N = function l(a, r, i) {
            a === null && (a = Function.prototype);
            var f = Object.getOwnPropertyDescriptor(a, r);
            if (f === void 0) {
              var n = Object.getPrototypeOf(a);
              return n === null ? void 0 : l(n, r, i);
            } else {
              if ("value" in f) return f.value;
              var s = f.get;
              return s === void 0 ? void 0 : s.call(i);
            }
          },
          A = p(0),
          m = y(A);
        function y(l) {
          return l && l.__esModule ? l : { default: l };
        }
        function c(l, a) {
          if (!(l instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(l, a) {
          if (!l)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return a && (typeof a == "object" || typeof a == "function") ? a : l;
        }
        function t(l, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof a
            );
          (l.prototype = Object.create(a && a.prototype, {
            constructor: {
              value: l,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            a &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(l, a)
                : (l.__proto__ = a));
        }
        var e = (function (l) {
            t(a, l);
            function a() {
              return (
                c(this, a),
                o(
                  this,
                  (a.__proto__ || Object.getPrototypeOf(a)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              P(a, [
                {
                  key: "add",
                  value: function (i, f) {
                    if (f === "+1" || f === "-1") {
                      var n = this.value(i) || 0;
                      f = f === "+1" ? n + 1 : n - 1;
                    }
                    return f === 0
                      ? (this.remove(i), !0)
                      : N(
                          a.prototype.__proto__ ||
                            Object.getPrototypeOf(a.prototype),
                          "add",
                          this
                        ).call(this, i, f);
                  },
                },
                {
                  key: "canAdd",
                  value: function (i, f) {
                    return (
                      N(
                        a.prototype.__proto__ ||
                          Object.getPrototypeOf(a.prototype),
                        "canAdd",
                        this
                      ).call(this, i, f) ||
                      N(
                        a.prototype.__proto__ ||
                          Object.getPrototypeOf(a.prototype),
                        "canAdd",
                        this
                      ).call(this, i, parseInt(f))
                    );
                  },
                },
                {
                  key: "value",
                  value: function (i) {
                    return (
                      parseInt(
                        N(
                          a.prototype.__proto__ ||
                            Object.getPrototypeOf(a.prototype),
                          "value",
                          this
                        ).call(this, i)
                      ) || void 0
                    );
                  },
                },
              ]),
              a
            );
          })(m.default.Attributor.Class),
          u = new e("indent", "ql-indent", {
            scope: m.default.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
          });
        _.IndentClass = u;
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(4),
          N = A(P);
        function A(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function m(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function c(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        }
        var o = (function (t) {
          c(e, t);
          function e() {
            return (
              m(this, e),
              y(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return e;
        })(N.default);
        (o.blotName = "blockquote"),
          (o.tagName = "blockquote"),
          (_.default = o);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function e(u, l) {
              for (var a = 0; a < l.length; a++) {
                var r = l[a];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(u, r.key, r);
              }
            }
            return function (u, l, a) {
              return l && e(u.prototype, l), a && e(u, a), u;
            };
          })(),
          N = p(4),
          A = m(N);
        function m(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function y(e, u) {
          if (!(e instanceof u))
            throw new TypeError("Cannot call a class as a function");
        }
        function c(e, u) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return u && (typeof u == "object" || typeof u == "function") ? u : e;
        }
        function o(e, u) {
          if (typeof u != "function" && u !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof u
            );
          (e.prototype = Object.create(u && u.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            u &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, u)
                : (e.__proto__ = u));
        }
        var t = (function (e) {
          o(u, e);
          function u() {
            return (
              y(this, u),
              c(
                this,
                (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments)
              )
            );
          }
          return (
            P(u, null, [
              {
                key: "formats",
                value: function (a) {
                  return this.tagName.indexOf(a.tagName) + 1;
                },
              },
            ]),
            u
          );
        })(A.default);
        (t.blotName = "header"),
          (t.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"]),
          (_.default = t);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.default = _.ListItem = void 0);
        var P = (function () {
            function n(s, k) {
              for (var g = 0; g < k.length; g++) {
                var b = k[g];
                (b.enumerable = b.enumerable || !1),
                  (b.configurable = !0),
                  "value" in b && (b.writable = !0),
                  Object.defineProperty(s, b.key, b);
              }
            }
            return function (s, k, g) {
              return k && n(s.prototype, k), g && n(s, g), s;
            };
          })(),
          N = function n(s, k, g) {
            s === null && (s = Function.prototype);
            var b = Object.getOwnPropertyDescriptor(s, k);
            if (b === void 0) {
              var w = Object.getPrototypeOf(s);
              return w === null ? void 0 : n(w, k, g);
            } else {
              if ("value" in b) return b.value;
              var v = b.get;
              return v === void 0 ? void 0 : v.call(g);
            }
          },
          A = p(0),
          m = e(A),
          y = p(4),
          c = e(y),
          o = p(25),
          t = e(o);
        function e(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function u(n, s, k) {
          return (
            s in n
              ? Object.defineProperty(n, s, {
                  value: k,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[s] = k),
            n
          );
        }
        function l(n, s) {
          if (!(n instanceof s))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(n, s) {
          if (!n)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return s && (typeof s == "object" || typeof s == "function") ? s : n;
        }
        function r(n, s) {
          if (typeof s != "function" && s !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof s
            );
          (n.prototype = Object.create(s && s.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            s &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(n, s)
                : (n.__proto__ = s));
        }
        var i = (function (n) {
          r(s, n);
          function s() {
            return (
              l(this, s),
              a(
                this,
                (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments)
              )
            );
          }
          return (
            P(
              s,
              [
                {
                  key: "format",
                  value: function (g, b) {
                    g === f.blotName && !b
                      ? this.replaceWith(m.default.create(this.statics.scope))
                      : N(
                          s.prototype.__proto__ ||
                            Object.getPrototypeOf(s.prototype),
                          "format",
                          this
                        ).call(this, g, b);
                  },
                },
                {
                  key: "remove",
                  value: function () {
                    this.prev == null && this.next == null
                      ? this.parent.remove()
                      : N(
                          s.prototype.__proto__ ||
                            Object.getPrototypeOf(s.prototype),
                          "remove",
                          this
                        ).call(this);
                  },
                },
                {
                  key: "replaceWith",
                  value: function (g, b) {
                    return (
                      this.parent.isolate(
                        this.offset(this.parent),
                        this.length()
                      ),
                      g === this.parent.statics.blotName
                        ? (this.parent.replaceWith(g, b), this)
                        : (this.parent.unwrap(),
                          N(
                            s.prototype.__proto__ ||
                              Object.getPrototypeOf(s.prototype),
                            "replaceWith",
                            this
                          ).call(this, g, b))
                    );
                  },
                },
              ],
              [
                {
                  key: "formats",
                  value: function (g) {
                    return g.tagName === this.tagName
                      ? void 0
                      : N(
                          s.__proto__ || Object.getPrototypeOf(s),
                          "formats",
                          this
                        ).call(this, g);
                  },
                },
              ]
            ),
            s
          );
        })(c.default);
        (i.blotName = "list-item"), (i.tagName = "LI");
        var f = (function (n) {
          r(s, n),
            P(s, null, [
              {
                key: "create",
                value: function (g) {
                  var b = g === "ordered" ? "OL" : "UL",
                    w = N(
                      s.__proto__ || Object.getPrototypeOf(s),
                      "create",
                      this
                    ).call(this, b);
                  return (
                    (g === "checked" || g === "unchecked") &&
                      w.setAttribute("data-checked", g === "checked"),
                    w
                  );
                },
              },
              {
                key: "formats",
                value: function (g) {
                  if (g.tagName === "OL") return "ordered";
                  if (g.tagName === "UL")
                    return g.hasAttribute("data-checked")
                      ? g.getAttribute("data-checked") === "true"
                        ? "checked"
                        : "unchecked"
                      : "bullet";
                },
              },
            ]);
          function s(k) {
            l(this, s);
            var g = a(
                this,
                (s.__proto__ || Object.getPrototypeOf(s)).call(this, k)
              ),
              b = function (v) {
                if (v.target.parentNode === k) {
                  var h = g.statics.formats(k),
                    d = m.default.find(v.target);
                  h === "checked"
                    ? d.format("list", "unchecked")
                    : h === "unchecked" && d.format("list", "checked");
                }
              };
            return (
              k.addEventListener("touchstart", b),
              k.addEventListener("mousedown", b),
              g
            );
          }
          return (
            P(s, [
              {
                key: "format",
                value: function (g, b) {
                  this.children.length > 0 && this.children.tail.format(g, b);
                },
              },
              {
                key: "formats",
                value: function () {
                  return u(
                    {},
                    this.statics.blotName,
                    this.statics.formats(this.domNode)
                  );
                },
              },
              {
                key: "insertBefore",
                value: function (g, b) {
                  if (g instanceof i)
                    N(
                      s.prototype.__proto__ ||
                        Object.getPrototypeOf(s.prototype),
                      "insertBefore",
                      this
                    ).call(this, g, b);
                  else {
                    var w = b == null ? this.length() : b.offset(this),
                      v = this.split(w);
                    v.parent.insertBefore(g, v);
                  }
                },
              },
              {
                key: "optimize",
                value: function (g) {
                  N(
                    s.prototype.__proto__ || Object.getPrototypeOf(s.prototype),
                    "optimize",
                    this
                  ).call(this, g);
                  var b = this.next;
                  b != null &&
                    b.prev === this &&
                    b.statics.blotName === this.statics.blotName &&
                    b.domNode.tagName === this.domNode.tagName &&
                    b.domNode.getAttribute("data-checked") ===
                      this.domNode.getAttribute("data-checked") &&
                    (b.moveChildren(this), b.remove());
                },
              },
              {
                key: "replace",
                value: function (g) {
                  if (g.statics.blotName !== this.statics.blotName) {
                    var b = m.default.create(this.statics.defaultChild);
                    g.moveChildren(b), this.appendChild(b);
                  }
                  N(
                    s.prototype.__proto__ || Object.getPrototypeOf(s.prototype),
                    "replace",
                    this
                  ).call(this, g);
                },
              },
            ]),
            s
          );
        })(t.default);
        (f.blotName = "list"),
          (f.scope = m.default.Scope.BLOCK_BLOT),
          (f.tagName = ["OL", "UL"]),
          (f.defaultChild = "list-item"),
          (f.allowedChildren = [i]),
          (_.ListItem = i),
          (_.default = f);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(56),
          N = A(P);
        function A(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function m(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function c(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        }
        var o = (function (t) {
          c(e, t);
          function e() {
            return (
              m(this, e),
              y(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return e;
        })(N.default);
        (o.blotName = "italic"), (o.tagName = ["EM", "I"]), (_.default = o);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function u(l, a) {
              for (var r = 0; r < a.length; r++) {
                var i = a[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(l, i.key, i);
              }
            }
            return function (l, a, r) {
              return a && u(l.prototype, a), r && u(l, r), l;
            };
          })(),
          N = function u(l, a, r) {
            l === null && (l = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(l, a);
            if (i === void 0) {
              var f = Object.getPrototypeOf(l);
              return f === null ? void 0 : u(f, a, r);
            } else {
              if ("value" in i) return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          },
          A = p(6),
          m = y(A);
        function y(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof l
            );
          (u.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: u,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(u, l)
                : (u.__proto__ = l));
        }
        var e = (function (u) {
          t(l, u);
          function l() {
            return (
              c(this, l),
              o(
                this,
                (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments)
              )
            );
          }
          return (
            P(l, null, [
              {
                key: "create",
                value: function (r) {
                  return r === "super"
                    ? document.createElement("sup")
                    : r === "sub"
                    ? document.createElement("sub")
                    : N(
                        l.__proto__ || Object.getPrototypeOf(l),
                        "create",
                        this
                      ).call(this, r);
                },
              },
              {
                key: "formats",
                value: function (r) {
                  if (r.tagName === "SUB") return "sub";
                  if (r.tagName === "SUP") return "super";
                },
              },
            ]),
            l
          );
        })(m.default);
        (e.blotName = "script"), (e.tagName = ["SUB", "SUP"]), (_.default = e);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(6),
          N = A(P);
        function A(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function m(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function c(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        }
        var o = (function (t) {
          c(e, t);
          function e() {
            return (
              m(this, e),
              y(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return e;
        })(N.default);
        (o.blotName = "strike"), (o.tagName = "S"), (_.default = o);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = p(6),
          N = A(P);
        function A(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function m(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function c(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        }
        var o = (function (t) {
          c(e, t);
          function e() {
            return (
              m(this, e),
              y(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return e;
        })(N.default);
        (o.blotName = "underline"), (o.tagName = "U"), (_.default = o);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function a(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(r, n.key, n);
              }
            }
            return function (r, i, f) {
              return i && a(r.prototype, i), f && a(r, f), r;
            };
          })(),
          N = function a(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var s = Object.getPrototypeOf(r);
              return s === null ? void 0 : a(s, i, f);
            } else {
              if ("value" in n) return n.value;
              var k = n.get;
              return k === void 0 ? void 0 : k.call(f);
            }
          },
          A = p(0),
          m = c(A),
          y = p(27);
        function c(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function o(a, r) {
          if (!(a instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function t(a, r) {
          if (!a)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function e(a, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof r
            );
          (a.prototype = Object.create(r && r.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            r &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(a, r)
                : (a.__proto__ = r));
        }
        var u = ["alt", "height", "width"],
          l = (function (a) {
            e(r, a);
            function r() {
              return (
                o(this, r),
                t(
                  this,
                  (r.__proto__ || Object.getPrototypeOf(r)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              P(
                r,
                [
                  {
                    key: "format",
                    value: function (f, n) {
                      u.indexOf(f) > -1
                        ? n
                          ? this.domNode.setAttribute(f, n)
                          : this.domNode.removeAttribute(f)
                        : N(
                            r.prototype.__proto__ ||
                              Object.getPrototypeOf(r.prototype),
                            "format",
                            this
                          ).call(this, f, n);
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (f) {
                      var n = N(
                        r.__proto__ || Object.getPrototypeOf(r),
                        "create",
                        this
                      ).call(this, f);
                      return (
                        typeof f == "string" &&
                          n.setAttribute("src", this.sanitize(f)),
                        n
                      );
                    },
                  },
                  {
                    key: "formats",
                    value: function (f) {
                      return u.reduce(function (n, s) {
                        return (
                          f.hasAttribute(s) && (n[s] = f.getAttribute(s)), n
                        );
                      }, {});
                    },
                  },
                  {
                    key: "match",
                    value: function (f) {
                      return (
                        /\.(jpe?g|gif|png)$/.test(f) ||
                        /^data:image\/.+;base64/.test(f)
                      );
                    },
                  },
                  {
                    key: "sanitize",
                    value: function (f) {
                      return (0, y.sanitize)(f, ["http", "https", "data"])
                        ? f
                        : "//:0";
                    },
                  },
                  {
                    key: "value",
                    value: function (f) {
                      return f.getAttribute("src");
                    },
                  },
                ]
              ),
              r
            );
          })(m.default.Embed);
        (l.blotName = "image"), (l.tagName = "IMG"), (_.default = l);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 });
        var P = (function () {
            function a(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(r, n.key, n);
              }
            }
            return function (r, i, f) {
              return i && a(r.prototype, i), f && a(r, f), r;
            };
          })(),
          N = function a(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var s = Object.getPrototypeOf(r);
              return s === null ? void 0 : a(s, i, f);
            } else {
              if ("value" in n) return n.value;
              var k = n.get;
              return k === void 0 ? void 0 : k.call(f);
            }
          },
          A = p(4),
          m = p(27),
          y = c(m);
        function c(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function o(a, r) {
          if (!(a instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function t(a, r) {
          if (!a)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function e(a, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof r
            );
          (a.prototype = Object.create(r && r.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            r &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(a, r)
                : (a.__proto__ = r));
        }
        var u = ["height", "width"],
          l = (function (a) {
            e(r, a);
            function r() {
              return (
                o(this, r),
                t(
                  this,
                  (r.__proto__ || Object.getPrototypeOf(r)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              P(
                r,
                [
                  {
                    key: "format",
                    value: function (f, n) {
                      u.indexOf(f) > -1
                        ? n
                          ? this.domNode.setAttribute(f, n)
                          : this.domNode.removeAttribute(f)
                        : N(
                            r.prototype.__proto__ ||
                              Object.getPrototypeOf(r.prototype),
                            "format",
                            this
                          ).call(this, f, n);
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (f) {
                      var n = N(
                        r.__proto__ || Object.getPrototypeOf(r),
                        "create",
                        this
                      ).call(this, f);
                      return (
                        n.setAttribute("frameborder", "0"),
                        n.setAttribute("allowfullscreen", !0),
                        n.setAttribute("src", this.sanitize(f)),
                        n
                      );
                    },
                  },
                  {
                    key: "formats",
                    value: function (f) {
                      return u.reduce(function (n, s) {
                        return (
                          f.hasAttribute(s) && (n[s] = f.getAttribute(s)), n
                        );
                      }, {});
                    },
                  },
                  {
                    key: "sanitize",
                    value: function (f) {
                      return y.default.sanitize(f);
                    },
                  },
                  {
                    key: "value",
                    value: function (f) {
                      return f.getAttribute("src");
                    },
                  },
                ]
              ),
              r
            );
          })(A.BlockEmbed);
        (l.blotName = "video"),
          (l.className = "ql-video"),
          (l.tagName = "IFRAME"),
          (_.default = l);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.default = _.FormulaBlot = void 0);
        var P = (function () {
            function f(n, s) {
              for (var k = 0; k < s.length; k++) {
                var g = s[k];
                (g.enumerable = g.enumerable || !1),
                  (g.configurable = !0),
                  "value" in g && (g.writable = !0),
                  Object.defineProperty(n, g.key, g);
              }
            }
            return function (n, s, k) {
              return s && f(n.prototype, s), k && f(n, k), n;
            };
          })(),
          N = function f(n, s, k) {
            n === null && (n = Function.prototype);
            var g = Object.getOwnPropertyDescriptor(n, s);
            if (g === void 0) {
              var b = Object.getPrototypeOf(n);
              return b === null ? void 0 : f(b, s, k);
            } else {
              if ("value" in g) return g.value;
              var w = g.get;
              return w === void 0 ? void 0 : w.call(k);
            }
          },
          A = p(35),
          m = e(A),
          y = p(5),
          c = e(y),
          o = p(9),
          t = e(o);
        function e(f) {
          return f && f.__esModule ? f : { default: f };
        }
        function u(f, n) {
          if (!(f instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(f, n) {
          if (!f)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return n && (typeof n == "object" || typeof n == "function") ? n : f;
        }
        function a(f, n) {
          if (typeof n != "function" && n !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof n
            );
          (f.prototype = Object.create(n && n.prototype, {
            constructor: {
              value: f,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            n &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(f, n)
                : (f.__proto__ = n));
        }
        var r = (function (f) {
          a(n, f);
          function n() {
            return (
              u(this, n),
              l(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments)
              )
            );
          }
          return (
            P(n, null, [
              {
                key: "create",
                value: function (k) {
                  var g = N(
                    n.__proto__ || Object.getPrototypeOf(n),
                    "create",
                    this
                  ).call(this, k);
                  return (
                    typeof k == "string" &&
                      (window.katex.render(k, g, {
                        throwOnError: !1,
                        errorColor: "#f00",
                      }),
                      g.setAttribute("data-value", k)),
                    g
                  );
                },
              },
              {
                key: "value",
                value: function (k) {
                  return k.getAttribute("data-value");
                },
              },
            ]),
            n
          );
        })(m.default);
        (r.blotName = "formula"),
          (r.className = "ql-formula"),
          (r.tagName = "SPAN");
        var i = (function (f) {
          a(n, f),
            P(n, null, [
              {
                key: "register",
                value: function () {
                  c.default.register(r, !0);
                },
              },
            ]);
          function n() {
            u(this, n);
            var s = l(
              this,
              (n.__proto__ || Object.getPrototypeOf(n)).call(this)
            );
            if (window.katex == null)
              throw new Error("Formula module requires KaTeX.");
            return s;
          }
          return n;
        })(t.default);
        (_.FormulaBlot = r), (_.default = i);
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.default = _.CodeToken = _.CodeBlock = void 0);
        var P = (function () {
            function k(g, b) {
              for (var w = 0; w < b.length; w++) {
                var v = b[w];
                (v.enumerable = v.enumerable || !1),
                  (v.configurable = !0),
                  "value" in v && (v.writable = !0),
                  Object.defineProperty(g, v.key, v);
              }
            }
            return function (g, b, w) {
              return b && k(g.prototype, b), w && k(g, w), g;
            };
          })(),
          N = function k(g, b, w) {
            g === null && (g = Function.prototype);
            var v = Object.getOwnPropertyDescriptor(g, b);
            if (v === void 0) {
              var h = Object.getPrototypeOf(g);
              return h === null ? void 0 : k(h, b, w);
            } else {
              if ("value" in v) return v.value;
              var d = v.get;
              return d === void 0 ? void 0 : d.call(w);
            }
          },
          A = p(0),
          m = l(A),
          y = p(5),
          c = l(y),
          o = p(9),
          t = l(o),
          e = p(13),
          u = l(e);
        function l(k) {
          return k && k.__esModule ? k : { default: k };
        }
        function a(k, g) {
          if (!(k instanceof g))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(k, g) {
          if (!k)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return g && (typeof g == "object" || typeof g == "function") ? g : k;
        }
        function i(k, g) {
          if (typeof g != "function" && g !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof g
            );
          (k.prototype = Object.create(g && g.prototype, {
            constructor: {
              value: k,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            g &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(k, g)
                : (k.__proto__ = g));
        }
        var f = (function (k) {
          i(g, k);
          function g() {
            return (
              a(this, g),
              r(
                this,
                (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments)
              )
            );
          }
          return (
            P(g, [
              {
                key: "replaceWith",
                value: function (w) {
                  (this.domNode.textContent = this.domNode.textContent),
                    this.attach(),
                    N(
                      g.prototype.__proto__ ||
                        Object.getPrototypeOf(g.prototype),
                      "replaceWith",
                      this
                    ).call(this, w);
                },
              },
              {
                key: "highlight",
                value: function (w) {
                  var v = this.domNode.textContent;
                  this.cachedText !== v &&
                    ((v.trim().length > 0 || this.cachedText == null) &&
                      ((this.domNode.innerHTML = w(v)),
                      this.domNode.normalize(),
                      this.attach()),
                    (this.cachedText = v));
                },
              },
            ]),
            g
          );
        })(u.default);
        f.className = "ql-syntax";
        var n = new m.default.Attributor.Class("token", "hljs", {
            scope: m.default.Scope.INLINE,
          }),
          s = (function (k) {
            i(g, k),
              P(g, null, [
                {
                  key: "register",
                  value: function () {
                    c.default.register(n, !0), c.default.register(f, !0);
                  },
                },
              ]);
            function g(b, w) {
              a(this, g);
              var v = r(
                this,
                (g.__proto__ || Object.getPrototypeOf(g)).call(this, b, w)
              );
              if (typeof v.options.highlight != "function")
                throw new Error(
                  "Syntax module requires highlight.js. Please include the library on the page before Quill."
                );
              var h = null;
              return (
                v.quill.on(c.default.events.SCROLL_OPTIMIZE, function () {
                  clearTimeout(h),
                    (h = setTimeout(function () {
                      v.highlight(), (h = null);
                    }, v.options.interval));
                }),
                v.highlight(),
                v
              );
            }
            return (
              P(g, [
                {
                  key: "highlight",
                  value: function () {
                    var w = this;
                    if (!this.quill.selection.composing) {
                      this.quill.update(c.default.sources.USER);
                      var v = this.quill.getSelection();
                      this.quill.scroll.descendants(f).forEach(function (h) {
                        h.highlight(w.options.highlight);
                      }),
                        this.quill.update(c.default.sources.SILENT),
                        v != null &&
                          this.quill.setSelection(v, c.default.sources.SILENT);
                    }
                  },
                },
              ]),
              g
            );
          })(t.default);
        (s.DEFAULTS = {
          highlight: (function () {
            return window.hljs == null
              ? null
              : function (k) {
                  var g = window.hljs.highlightAuto(k);
                  return g.value;
                };
          })(),
          interval: 1e3,
        }),
          (_.CodeBlock = f),
          (_.CodeToken = n),
          (_.default = s);
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
      },
      function (B, _) {
        B.exports =
          '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
      },
      function (B, _, p) {
        Object.defineProperty(_, "__esModule", { value: !0 }),
          (_.default = _.BubbleTooltip = void 0);
        var P = function g(b, w, v) {
            b === null && (b = Function.prototype);
            var h = Object.getOwnPropertyDescriptor(b, w);
            if (h === void 0) {
              var d = Object.getPrototypeOf(b);
              return d === null ? void 0 : g(d, w, v);
            } else {
              if ("value" in h) return h.value;
              var E = h.get;
              return E === void 0 ? void 0 : E.call(v);
            }
          },
          N = (function () {
            function g(b, w) {
              for (var v = 0; v < w.length; v++) {
                var h = w[v];
                (h.enumerable = h.enumerable || !1),
                  (h.configurable = !0),
                  "value" in h && (h.writable = !0),
                  Object.defineProperty(b, h.key, h);
              }
            }
            return function (b, w, v) {
              return w && g(b.prototype, w), v && g(b, v), b;
            };
          })(),
          A = p(3),
          m = a(A),
          y = p(8),
          c = a(y),
          o = p(43),
          t = a(o),
          e = p(15),
          u = p(41),
          l = a(u);
        function a(g) {
          return g && g.__esModule ? g : { default: g };
        }
        function r(g, b) {
          if (!(g instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(g, b) {
          if (!g)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return b && (typeof b == "object" || typeof b == "function") ? b : g;
        }
        function f(g, b) {
          if (typeof b != "function" && b !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof b
            );
          (g.prototype = Object.create(b && b.prototype, {
            constructor: {
              value: g,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            b &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(g, b)
                : (g.__proto__ = b));
        }
        var n = [
            ["bold", "italic", "link"],
            [{ header: 1 }, { header: 2 }, "blockquote"],
          ],
          s = (function (g) {
            f(b, g);
            function b(w, v) {
              r(this, b),
                v.modules.toolbar != null &&
                  v.modules.toolbar.container == null &&
                  (v.modules.toolbar.container = n);
              var h = i(
                this,
                (b.__proto__ || Object.getPrototypeOf(b)).call(this, w, v)
              );
              return h.quill.container.classList.add("ql-bubble"), h;
            }
            return (
              N(b, [
                {
                  key: "extendToolbar",
                  value: function (v) {
                    (this.tooltip = new k(this.quill, this.options.bounds)),
                      this.tooltip.root.appendChild(v.container),
                      this.buildButtons(
                        [].slice.call(v.container.querySelectorAll("button")),
                        l.default
                      ),
                      this.buildPickers(
                        [].slice.call(v.container.querySelectorAll("select")),
                        l.default
                      );
                  },
                },
              ]),
              b
            );
          })(t.default);
        s.DEFAULTS = (0, m.default)(!0, {}, t.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function (b) {
                  b
                    ? this.quill.theme.tooltip.edit()
                    : this.quill.format("link", !1);
                },
              },
            },
          },
        });
        var k = (function (g) {
          f(b, g);
          function b(w, v) {
            r(this, b);
            var h = i(
              this,
              (b.__proto__ || Object.getPrototypeOf(b)).call(this, w, v)
            );
            return (
              h.quill.on(c.default.events.EDITOR_CHANGE, function (d, E, T, q) {
                if (d === c.default.events.SELECTION_CHANGE)
                  if (
                    E != null &&
                    E.length > 0 &&
                    q === c.default.sources.USER
                  ) {
                    h.show(),
                      (h.root.style.left = "0px"),
                      (h.root.style.width = ""),
                      (h.root.style.width = h.root.offsetWidth + "px");
                    var D = h.quill.getLines(E.index, E.length);
                    if (D.length === 1) h.position(h.quill.getBounds(E));
                    else {
                      var C = D[D.length - 1],
                        Z = h.quill.getIndex(C),
                        I = Math.min(C.length() - 1, E.index + E.length - Z),
                        R = h.quill.getBounds(new e.Range(Z, I));
                      h.position(R);
                    }
                  } else
                    document.activeElement !== h.textbox &&
                      h.quill.hasFocus() &&
                      h.hide();
              }),
              h
            );
          }
          return (
            N(b, [
              {
                key: "listen",
                value: function () {
                  var v = this;
                  P(
                    b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                    "listen",
                    this
                  ).call(this),
                    this.root
                      .querySelector(".ql-close")
                      .addEventListener("click", function () {
                        v.root.classList.remove("ql-editing");
                      }),
                    this.quill.on(
                      c.default.events.SCROLL_OPTIMIZE,
                      function () {
                        setTimeout(function () {
                          if (!v.root.classList.contains("ql-hidden")) {
                            var h = v.quill.getSelection();
                            h != null && v.position(v.quill.getBounds(h));
                          }
                        }, 1);
                      }
                    );
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.show();
                },
              },
              {
                key: "position",
                value: function (v) {
                  var h = P(
                      b.prototype.__proto__ ||
                        Object.getPrototypeOf(b.prototype),
                      "position",
                      this
                    ).call(this, v),
                    d = this.root.querySelector(".ql-tooltip-arrow");
                  if (((d.style.marginLeft = ""), h === 0)) return h;
                  d.style.marginLeft = -1 * h - d.offsetWidth / 2 + "px";
                },
              },
            ]),
            b
          );
        })(o.BaseTooltip);
        (k.TEMPLATE = [
          '<span class="ql-tooltip-arrow"></span>',
          '<div class="ql-tooltip-editor">',
          '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
          '<a class="ql-close"></a>',
          "</div>",
        ].join("")),
          (_.BubbleTooltip = k),
          (_.default = s);
      },
      function (B, _, p) {
        B.exports = p(63);
      },
    ]).default;
  });
})(ht);
var mt = ht.exports;
const gt = yt(mt);
new gt("#editor", { theme: "snow" });
ct("#datepicker-basic", { defaultDate: new Date() });
ct("#timepicker", {
  enableTime: !0,
  noCalendar: !0,
  dateFormat: "H:i",
  defaultDate: "13:45",
});
