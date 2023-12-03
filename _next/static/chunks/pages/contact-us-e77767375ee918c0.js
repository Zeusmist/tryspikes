(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [455],
  {
    5370: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact-us.html",
        function () {
          return t(1856);
        },
      ]);
    },
    1856: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return o;
          },
        });
      var s = t(5893),
        u = t(7294),
        c = t(6295),
        r = t(8635),
        i = t(9999),
        a = t(1163),
        o = !0;
      n.default = (e) => {
        let { randomTestimonial: n } = e,
          t = (0, a.useRouter)(),
          { submit: o } = t.query,
          [d, l] = (0, u.useState)();
        return (
          (0, u.useEffect)(() => {
            l(o);
          }, [o]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(i.H, { title: c.qo }),
              (0, s.jsx)("div", {
                className:
                  "grid h-full min-h-screen place-items-center overflow-hidden",
                children: (0, s.jsx)("div", {
                  className: "m-auto mb-20 mt-40",
                  children: (0, s.jsx)(r.x, {
                    randomTestimonial: n,
                    feedback: d,
                    setFeedback: l,
                    ariaLabel: "Send Request Contact us",
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
  },
  function (e) {
    e.O(0, [795, 774, 888, 179], function () {
      return e((e.s = 5370));
    }),
      (_N_E = e.O());
  },
]);
