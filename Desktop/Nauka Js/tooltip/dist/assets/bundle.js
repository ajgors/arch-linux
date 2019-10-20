!(function(n) {
  const t = {};
  function e(r) {
    if (t[r]) return t[r].exports;
    const o = (t[r] = { i: r, l: !1, exports: {} });
    return n[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = n),
    (e.c = t),
    (e.d = function(n, t, r) {
      e.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: r });
    }),
    (e.r = function(n) {
      typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 });
    }),
    (e.t = function(n, t) {
      if ((1 & t && (n = e(n)), 8 & t)) return n;
      if (4 & t && typeof n === 'object' && n && n.__esModule) return n;
      const r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: n }),
        2 & t && typeof n !== 'string')
      )
        for (const o in n)
          e.d(
            r,
            o,
            function(t) {
              return n[t];
            }.bind(null, o)
          );
      return r;
    }),
    (e.n = function(n) {
      const t =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return e.d(t, 'a', t), t;
    }),
    (e.o = function(n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (e.p = ''),
    e((e.s = 10));
})([
  function(n, t, e) {
    n.exports = function(n) {
      const t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            const e = (function(n, t) {
              const e = n[1] || '';
              const r = n[3];
              if (!r) return e;
              if (t && typeof btoa === 'function') {
                const o =
                  ((a = r),
                  (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                  (c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                    s
                  )),
                  '/*# '.concat(c, ' */'));
                const i = r.sources.map(function(n) {
                  return '/*# sourceURL='.concat(r.sourceRoot).concat(n, ' */');
                });
                return [e]
                  .concat(i)
                  .concat([o])
                  .join('\n');
              }
              let a;
              let s;
              let c;
              return [e].join('\n');
            })(t, n);
            return t[2] ? '@media '.concat(t[2], '{').concat(e, '}') : e;
          }).join('');
        }),
        (t.i = function(n, e) {
          typeof n === 'string' && (n = [[null, n, '']]);
          for (var r = {}, o = 0; o < this.length; o++) {
            const i = this[o][0];
            i != null && (r[i] = !0);
          }
          for (let a = 0; a < n.length; a++) {
            const s = n[a];
            (s[0] != null && r[s[0]]) ||
              (e && !s[2]
                ? (s[2] = e)
                : e && (s[2] = '('.concat(s[2], ') and (').concat(e, ')')),
              t.push(s));
          }
        }),
        t
      );
    };
  },
  function(n, t, e) {
    let r;
    const o = {};
    const i = function() {
      return (
        void 0 === r &&
          (r = Boolean(window && document && document.all && !window.atob)),
        r
      );
    };
    const a = (function() {
      const n = {};
      return function(t) {
        if (void 0 === n[t]) {
          let e = document.querySelector(t);
          if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
            try {
              e = e.contentDocument.head;
            } catch (n) {
              e = null;
            }
          n[t] = e;
        }
        return n[t];
      };
    })();
    function s(n, t) {
      for (var e = [], r = {}, o = 0; o < n.length; o++) {
        const i = n[o];
        const a = t.base ? i[0] + t.base : i[0];
        const s = { css: i[1], media: i[2], sourceMap: i[3] };
        r[a] ? r[a].parts.push(s) : e.push((r[a] = { id: a, parts: [s] }));
      }
      return e;
    }
    function c(n, t) {
      for (let e = 0; e < n.length; e++) {
        const r = n[e];
        const i = o[r.id];
        let a = 0;
        if (i) {
          for (i.refs++; a < i.parts.length; a++) i.parts[a](r.parts[a]);
          for (; a < r.parts.length; a++) i.parts.push(g(r.parts[a], t));
        } else {
          for (var s = []; a < r.parts.length; a++) s.push(g(r.parts[a], t));
          o[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function l(n) {
      const t = document.createElement('style');
      if (void 0 === n.attributes.nonce) {
        const r = e.nc;
        r && (n.attributes.nonce = r);
      }
      if (
        (Object.keys(n.attributes).forEach(function(e) {
          t.setAttribute(e, n.attributes[e]);
        }),
        typeof n.insert === 'function')
      )
        n.insert(t);
      else {
        const o = a(n.insert || 'head');
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(t);
      }
      return t;
    }
    let u;
    const f =
      ((u = []),
      function(n, t) {
        return (u[n] = t), u.filter(Boolean).join('\n');
      });
    function d(n, t, e, r) {
      const o = e ? '' : r.css;
      if (n.styleSheet) n.styleSheet.cssText = f(t, o);
      else {
        const i = document.createTextNode(o);
        const a = n.childNodes;
        a[t] && n.removeChild(a[t]),
          a.length ? n.insertBefore(i, a[t]) : n.appendChild(i);
      }
    }
    function p(n, t, e) {
      let r = e.css;
      const o = e.media;
      const i = e.sourceMap;
      if (
        (o && n.setAttribute('media', o),
        i &&
          btoa &&
          (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            ' */'
          )),
        n.styleSheet)
      )
        n.styleSheet.cssText = r;
      else {
        for (; n.firstChild; ) n.removeChild(n.firstChild);
        n.appendChild(document.createTextNode(r));
      }
    }
    let v = null;
    let b = 0;
    function g(n, t) {
      let e;
      let r;
      let o;
      if (t.singleton) {
        const i = b++;
        (e = v || (v = l(t))),
          (r = d.bind(null, e, i, !1)),
          (o = d.bind(null, e, i, !0));
      } else
        (e = l(t)),
          (r = p.bind(null, e, t)),
          (o = function() {
            !(function(n) {
              if (n.parentNode === null) return !1;
              n.parentNode.removeChild(n);
            })(e);
          });
      return (
        r(n),
        function(t) {
          if (t) {
            if (
              t.css === n.css &&
              t.media === n.media &&
              t.sourceMap === n.sourceMap
            )
              return;
            r((n = t));
          } else o();
        }
      );
    }
    n.exports = function(n, t) {
      ((t = t || {}).attributes =
        typeof t.attributes === 'object' ? t.attributes : {}),
        t.singleton || typeof t.singleton === 'boolean' || (t.singleton = i());
      const e = s(n, t);
      return (
        c(e, t),
        function(n) {
          for (var r = [], i = 0; i < e.length; i++) {
            const a = e[i];
            const l = o[a.id];
            l && (l.refs--, r.push(l));
          }
          n && c(s(n, t), t);
          for (let u = 0; u < r.length; u++) {
            const f = r[u];
            if (f.refs === 0) {
              for (let d = 0; d < f.parts.length; d++) f.parts[d]();
              delete o[f.id];
            }
          }
        }
      );
    };
  },
  function(n, t, e) {
    let r = e(3);
    typeof r === 'string' && (r = [[n.i, r, '']]);
    const o = { insert: 'head', singleton: !1 };
    e(1)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function(n, t, e) {
    (n.exports = e(0)(!1)).push([
      n.i,
      '.tooltip{\n    position: relative;\n    display: inline-block;\n    color: #ff6565;\n    border-bottom: 1px dotted #ff6565;\n    cursor: help;\n  }\n  .tip{\n    visibility: hidden;\n    width: 150px;\n    background-color: #ff6565;\n    color: #fff;\n    text-align: center;\n    border-radius: 10px;\n    padding: 5px 0;\n    position: absolute;\n    bottom: 120%;\n    left: 50%;\n    margin-left: -75px;\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n  .tip.active{\n    visibility: visible;\n    opacity: 1;\n  }\n  .tip::after{\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -4px;\n    border-width: 4px;\n    border-style: solid;\n    border-color: transparent;\n    border-top-color: #ff6565;\n  }',
      '',
    ]);
  },
  function(n, t, e) {
    let r = e(5);
    typeof r === 'string' && (r = [[n.i, r, '']]);
    const o = { insert: 'head', singleton: !1 };
    e(1)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function(n, t, e) {
    (n.exports = e(0)(!1)).push([
      n.i,
      '.dropdown .trigger{\n    border-bottom: 1px solid #ddd;\n    padding: 10px;\n    position: relative;\n    cursor: pointer;\n  }\n  .dropdown .trigger::after{\n    content: ">";\n    display: inline-block;\n    position: absolute;\n    right: 15px;\n    transform: rotate(90deg) scale(0.5, 1);\n    font-weight: bold;\n    transition: transform 0.3s;\n  }\n  .dropdown .trigger.active::after{\n    transform: rotate(-90deg) scale(0.5, 1);\n  }\n  .dropdown .content{\n    display: none;\n  }\n  .dropdown .content.active{\n    display: block;\n  }\n',
      '',
    ]);
  },
  function(n, t, e) {
    let r = e(7);
    typeof r === 'string' && (r = [[n.i, r, '']]);
    const o = { insert: 'head', singleton: !1 };
    e(1)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function(n, t, e) {
    (n.exports = e(0)(!1)).push([
      n.i,
      '.tabs > ul{\n    padding: 0;\n  }\n  .tabs .trigger{\n    list-style-type: none;\n    padding: 10px;\n    background: #f2f2f2;\n    margin: 4px;\n    border-radius: 6px;\n    display: inline-block;\n    padding: 10px 20px;\n    cursor: pointer;\n  }\n  .tabs .trigger.active{\n    background: #ff6565;\n    color: white;\n  }\n  .tabs .content{\n    background: #fbfbfb;\n    padding: 10px 20px;\n    border-radius: 6px;\n    display: none;\n  }\n  .tabs .content.active{\n    display: block;\n  }',
      '',
    ]);
  },
  function(n, t, e) {
    let r = e(9);
    typeof r === 'string' && (r = [[n.i, r, '']]);
    const o = { insert: 'head', singleton: !1 };
    e(1)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function(n, t, e) {
    (n.exports = e(0)(!1)).push([
      n.i,
      '.snackbar{\n    width: 200px;\n    padding: 20px;\n    position: fixed;\n    left: 50%;\n    margin-left: -120px;\n    top: 0;\n    border-radius: 0 0 5px 5px;\n    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);\n    background: #ff6565;\n    text-align: center;\n    color: #fff;\n    margin-top: -100%;\n    transition: all 0.2s;\n  }\n  .snackbar.active{\n    margin-top: 0;\n  }',
      '',
    ]);
  },
  function(n, t, e) {
    e.r(t);
    e(2);
    function r(n, t) {
      for (let e = 0; e < t.length; e++) {
        const r = t[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(n, r.key, r);
      }
    }
    const o = (function() {
      function n(t) {
        !(function(n, t) {
          if (!(n instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, n),
          (this.element = t),
          (this.message = t.getAttribute('data-message'));
      }
      let t;
      let e;
      let o;
      return (
        (t = n),
        (e = [
          {
            key: 'init',
            value() {
              const n = document.createElement('div');
              n.classList.add('tip'),
                (n.textContent = this.message),
                this.element.appendChild(n),
                this.element.addEventListener('mouseenter', function() {
                  n.classList.add('active');
                }),
                this.element.addEventListener('mouseleave', function() {
                  n.classList.remove('active');
                });
            },
          },
        ]) && r(t.prototype, e),
        o && r(t, o),
        n
      );
    })();
    e(4);
    function i(n, t) {
      for (let e = 0; e < t.length; e++) {
        const r = t[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(n, r.key, r);
      }
    }
    const a = (function() {
      function n(t) {
        !(function(n, t) {
          if (!(n instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, n),
          (this.container = t),
          (this.trigger = t.querySelector('.trigger')),
          (this.content = t.querySelector('.content'));
      }
      let t;
      let e;
      let r;
      return (
        (t = n),
        (e = [
          {
            key: 'init',
            value() {
              const n = this;
              this.trigger.addEventListener('click', function() {
                n.trigger.classList.toggle('active'),
                  n.content.classList.toggle('active');
              });
            },
          },
        ]) && i(t.prototype, e),
        r && i(t, r),
        n
      );
    })();
    e(6);
    function s(n, t) {
      for (let e = 0; e < t.length; e++) {
        const r = t[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(n, r.key, r);
      }
    }
    const c = (function() {
      function n(t) {
        !(function(n, t) {
          if (!(n instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, n),
          (this.container = t),
          (this.tabs = t.querySelectorAll('.trigger'));
      }
      let t;
      let e;
      let r;
      return (
        (t = n),
        (e = [
          {
            key: 'init',
            value() {
              const n = this;
              this.tabs.forEach(function(t) {
                t.addEventListener('click', function(t) {
                  n.toggleTabs(t), n.toggleContent(t);
                });
              });
            },
          },
          {
            key: 'toggleTabs',
            value(n) {
              this.tabs.forEach(function(n) {
                return n.classList.remove('active');
              }),
                n.target.classList.add('active');
            },
          },
          {
            key: 'toggleContent',
            value(n) {
              this.container.querySelectorAll('.content').forEach(function(n) {
                n.classList.remove('active');
              });
              const t = n.target.getAttribute('data-target');
              this.container.querySelector(t).classList.add('active');
            },
          },
        ]) && s(t.prototype, e),
        r && s(t, r),
        n
      );
    })();
    e(8);
    function l(n, t) {
      for (let e = 0; e < t.length; e++) {
        const r = t[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(n, r.key, r);
      }
    }
    const u = (function() {
      function n() {
        !(function(n, t) {
          if (!(n instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, n),
          (this.snackbar = document.createElement('div'));
      }
      let t;
      let e;
      let r;
      return (
        (t = n),
        (e = [
          {
            key: 'init',
            value() {
              this.snackbar.classList.add('snackbark'),
                document.querySelector('body').appendChild(this.snackbar);
            },
          },
          {
            key: 'show',
            value(n) {
              const t = this;
              (this.snackbar.textContent = n),
                this.snackbar.classList.add('active'),
                setTimeout(function() {
                  t.snackbar.classList.remove('active');
                }, 4e3);
            },
          },
        ]) && l(t.prototype, e),
        r && l(t, r),
        n
      );
    })();
    new o(document.querySelector('.tooltip')).init(),
      document.querySelectorAll('.dropdown').forEach(function(n) {
        new a(n).init();
      }),
      new c(document.querySelector('.tabs')).init();
    const f = new u();
    f.init(),
      document.querySelector('button').addEventListener('click', function() {
        f.show('you clicke me :)');
      });
  },
]);
