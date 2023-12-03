(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [395],
  {
    3075: function (e, l, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/services/[id]",
        function () {
          return t(1533);
        },
      ]);
    },
    7332: function (e, l, t) {
      "use strict";
      t.d(l, {
        J: function () {
          return x;
        },
      });
      var a = t(5893),
        s = t(7294),
        i = t(1812),
        r = t(8903),
        n = t(5487),
        o = t(2978),
        d = t(6010);
      let c = (e) => {
          let { testimonial: l, transition: t } = e,
            s = (0, d.Z)(
              {
                "translate-x-[0%] opacity-1": t,
                "translate-x-[-30%] opacity-0": !t,
                "delay-[50ms]": 0 === l.index,
                "delay-[100ms]": 1 === l.index,
                "delay-[150ms]": 2 === l.index,
                "delay-[200ms]": 3 === l.index,
                "delay-[250ms]": 4 === l.index,
              },
              "flex w-[350px] flex-row gap-5 bg-white p-5 duration-[500ms] ease-in-out lg:w-[500px] lg:gap-12 lg:p-8"
            );
          return (0, a.jsxs)(
            "div",
            {
              className: s,
              children: [
                (0, a.jsx)("div", { children: (0, a.jsx)(o.Z, {}) }),
                (0, a.jsxs)("div", {
                  className: "mt-4 flex flex-col gap-6",
                  children: [
                    (0, a.jsx)("span", {
                      className:
                        "font-lato text-lg font-bold leading-5 text-blue-500",
                      children: l.description,
                    }),
                    (0, a.jsxs)("div", {
                      className: "mt-auto flex flex-col gap-1",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "max-h-[220px] overflow-hidden text-ellipsis font-lato text-base font-normal leading-[1.125rem] text-blue-500",
                          children: l.author,
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "font-lato text-xs font-normal leading-3 text-blue-500",
                          children: l.company,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            l.index
          );
        },
        x = () => {
          let e = (0, s.useRef)(null),
            l = (0, s.useRef)(null),
            [t, o] = (0, s.useState)(!1);
          (0, r.a)(e, o, t);
          let x = (0, d.Z)("flex flex-col gap-6 bg-blue-500 py-[3rem]");
          return (0, a.jsxs)("section", {
            ref: e,
            className: x,
            children: [
              (0, a.jsx)("section", {
                className:
                  "grid grid-cols-1 overflow-hidden px-6 md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
                children: (0, a.jsx)("div", {
                  className: "max-w-[440px] lg:col-start-2",
                  children: (0, a.jsx)("h2", {
                    className:
                      "font-lato text-3xl font-bold leading-9 text-white",
                    children:
                      "Don't take our word for granted, hear it from our clients!",
                  }),
                }),
              }),
              (0, a.jsx)("section", {
                className: "flex items-center px-6 md:px-24 lg:px-0 ",
                children: (0, a.jsx)("div", {
                  ref: l,
                  className:
                    "scrollbar-hide overflow-padding grid grid-flow-col gap-4 overflow-auto",
                  children: i.aP.map((e) =>
                    (0, a.jsx)(c, { testimonial: e, transition: t }, e.index)
                  ),
                }),
              }),
              (0, a.jsx)("section", {
                className:
                  "grid grid-cols-1 px-6 md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
                children: (0, a.jsxs)("div", {
                  className: "ml-auto flex flex-row gap-5 pt-4 lg:col-start-2",
                  children: [
                    (0, a.jsx)("button", {
                      onClick: () => {
                        var e, t, a;
                        let s =
                          null !==
                            (a =
                              null === (e = l.current) || void 0 === e
                                ? void 0
                                : e.scrollLeft) && void 0 !== a
                            ? a
                            : 0;
                        null === (t = l.current) ||
                          void 0 === t ||
                          t.scroll({
                            left: window.innerWidth <= 800 ? s - 370 : s - 500,
                            behavior: "smooth",
                          });
                      },
                      id: "alt",
                      "aria-label": "arrow_left_testimonials",
                      className:
                        "rounded-full border-2 border-white p-2 text-white",
                      children: (0, a.jsx)(n.J, { variant: "arrow_left" }),
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => {
                        if (window) {
                          var e, t, a;
                          let s =
                            null !==
                              (a =
                                null === (e = l.current) || void 0 === e
                                  ? void 0
                                  : e.scrollLeft) && void 0 !== a
                              ? a
                              : 0;
                          null === (t = l.current) ||
                            void 0 === t ||
                            t.scroll({
                              left:
                                window.innerWidth <= 800 ? s + 370 : s + 500,
                              behavior: "smooth",
                            });
                        }
                      },
                      id: "art",
                      "aria-label": "arrow_right_testimonials",
                      className:
                        "rounded-full border-2 border-white p-2 text-white",
                      children: (0, a.jsx)(n.J, { variant: "arrow" }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    8903: function (e, l, t) {
      "use strict";
      t.d(l, {
        a: function () {
          return s;
        },
      });
      var a = t(7294);
      let s = (e, l, t) => {
        (0, a.useEffect)(() => {
          let a = () => {
            if (!t && window && e.current) {
              let { top: t } = e.current.getBoundingClientRect();
              t <= window.innerHeight - 200 && l(!0);
            }
          };
          return (
            a(),
            window.addEventListener("scroll", a),
            () => {
              window.removeEventListener("scroll", a);
            }
          );
        }, [e, l, t]);
      };
    },
    1533: function (e, l, t) {
      "use strict";
      t.r(l),
        t.d(l, {
          __N_SSG: function () {
            return p;
          },
          default: function () {
            return h;
          },
        });
      var a = t(5893),
        s = t(7294),
        i = t(8635),
        r = t(9999),
        n = t(8903),
        o = t(5487),
        d = t(6010);
      let c = (e) => {
        let { title: l, items: t } = e,
          i = (0, s.useRef)(null),
          [r, c] = (0, s.useState)(!1);
        return (
          (0, n.a)(i, c, r),
          (0, a.jsx)("section", {
            ref: i,
            className:
              "grid grid-cols-1 items-center justify-center overflow-hidden bg-white px-6 py-[3rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
            children: (0, a.jsxs)("div", {
              className: "flex flex-col lg:col-start-2",
              children: [
                (0, a.jsx)("h2", {
                  className:
                    "font-lato text-3xl font-bold leading-9 text-blue-500 lg:max-w-[396px]",
                  children: l,
                }),
                (0, a.jsx)("div", {
                  className:
                    "mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-10",
                  children: t.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: (0, d.Z)(
                          "flex h-auto w-auto flex-col duration-[1s] ease-in-out lg:max-w-[388px]",
                          {
                            "opacity-0": !r,
                            "opacity-1": r && 0 === e.index,
                            "opacity-1 delay-[600ms]": r && 1 === e.index,
                            "opacity-1 delay-[1200ms]": r && 2 === e.index,
                          }
                        ),
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex flex-row items-center gap-4",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white ",
                                children: (0, a.jsx)(o.J, { variant: e.icon }),
                              }),
                              (0, a.jsx)("h4", {
                                className:
                                  "line-clamp-2 max-h-[50px] text-ellipsis font-lato text-xl font-black leading-6 text-blue-500",
                                children: e.title,
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "mt-4 font-lato text-base font-normal leading-[1.125rem] text-gray-400 lg:text-lg lg:leading-5",
                            children: e.body,
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "mt-auto flex max-h-[80px] max-w-[353px] grid-rows-2 flex-row flex-wrap gap-2 overflow-hidden pt-4 lg:mt-auto ",
                            children: e.categories.map((e, l) =>
                              (0, a.jsx)(
                                "div",
                                {
                                  className: "h-max w-max bg-blue-100 p-1",
                                  children: (0, a.jsx)("p", {
                                    className:
                                      "font-lato text-base font-normal leading-[1.125rem] text-blue-500 lg:text-lg lg:leading-5",
                                    children: e,
                                  }),
                                },
                                l
                              )
                            ),
                          }),
                        ],
                      },
                      e.index
                    )
                  ),
                }),
              ],
            }),
          })
        );
      };
      var x = t(4276);
      let g = (e) => {
        let { title: l, children: t, button: s } = e;
        return (0, a.jsx)("section", {
          className:
            "flex h-full flex-col overflow-hidden bg-blue-500 pb-36 lg:h-[516px] lg:py-0",
          children: (0, a.jsx)("div", {
            className:
              "m-auto grid grid-cols-1 px-6 pt-40 md:px-24 lg:grid-cols-[1fr,1000px,1fr] lg:px-0 lg:pt-20",
            children: (0, a.jsx)("div", {
              className:
                "m-auto grid w-full animate-fade-in-from-left grid-cols-1 gap-20 lg:col-start-2 lg:ml-[100px] lg:grid-cols-2",
              children: (0, a.jsxs)("div", {
                className: "z-20 flex w-full flex-col justify-center",
                children: [
                  (0, a.jsxs)(x.Q, {
                    href: "/services",
                    variant: "link_white",
                    size: "full no-padding",
                    label: "Services back",
                    id: "back-button",
                    children: [
                      (0, a.jsx)(o.J, { variant: "arrow_left" }),
                      "Services",
                    ],
                  }),
                  (0, a.jsx)("h1", {
                    className:
                      "mt-8 font-lato text-4xl font-black leading-[3.125rem] text-white lg:w-[500px]",
                    children: l,
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "mt-4 font-lato text-lg font-normal leading-5 text-white lg:w-[450px]",
                    children: t,
                  }),
                  (0, a.jsx)("div", {
                    className: "mt-8",
                    children: (0, a.jsx)(x.Q, {
                      label: "".concat(l, " Know More"),
                      id: "know-more",
                      href: "/contact-us.html",
                      variant: "primary",
                      children: s,
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var f = t(7332);
      let m = (e) => {
        let { breadcrumb: l, title: t, children: i, offers: r } = e,
          o = (0, s.useRef)(null),
          [c, x] = (0, s.useState)(!1);
        (0, n.a)(o, x, c);
        let g = (0, d.Z)(
          "grid grid-cols-1 bg-yellow-400 p-8 duration-[1s] ease-in-out lg:col-start-2 lg:grid-cols-[1fr,260px] lg:p-[100px]",
          { "opacity-1": c, "opacity-0": !c }
        );
        return (0, a.jsx)("section", {
          ref: o,
          className:
            "grid grid-cols-1 items-center justify-center overflow-hidden bg-white px-6 py-[3rem] md:px-24 lg:grid-cols-[1fr,1000px,1fr] lg:px-[100px]",
          children: (0, a.jsxs)("div", {
            className: g,
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col lg:mr-8",
                children: [
                  (0, a.jsx)("p", {
                    className:
                      "font-lato text-lg font-normal leading-5 text-blue-300",
                    children: l,
                  }),
                  (0, a.jsx)("h1", {
                    className:
                      "mt-2 font-lato text-3xl font-bold leading-9 text-gray-500 lg:text-4xl lg:font-black lg:leading-[3.125rem]",
                    children: t,
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "mt-4 flex flex-col font-lato text-base font-normal leading-[1.25rem] text-gray-400 lg:text-lg lg:leading-5",
                    children: i.map((e, l) =>
                      (0, a.jsx)("p", { className: "mt-5", children: e }, l)
                    ),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "mt-8 flex flex-col lg:mt-auto ",
                children: [
                  (0, a.jsx)("h5", {
                    className:
                      "mb-2 font-lato text-lg font-bold leading-5 text-blue-300",
                    children: "We bring",
                  }),
                  (0, a.jsx)("ul", {
                    className: "list-disc pl-6 lg:pl-4",
                    children: r.map((e, l) =>
                      (0, a.jsx)(
                        "li",
                        {
                          className:
                            "mb-2 font-lato text-base font-normal leading-[1.125rem] text-gray-400 lg:text-lg lg:leading-5",
                          children: e,
                        },
                        l
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var u = t(1163),
        p = !0,
        h = (e) => {
          let { option: l, randomTestimonial: t } = e,
            n = (0, u.useRouter)(),
            { submit: o } = n.query,
            [d, x] = (0, s.useState)();
          if (
            ((0, s.useEffect)(() => {
              x(o);
            }, [o]),
            !l)
          )
            return null;
          let p =
            null == l
              ? void 0
              : l.cards.specs.items.flatMap((e) => e.categories);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(r.H, {
                title: "Tryspikes \xb7 ".concat(l.title),
                description: l.body,
                keywords: p.toString(),
              }),
              (0, a.jsx)(g, {
                title: l.title,
                button: l.button,
                children: l.body,
              }),
              (0, a.jsx)(m, {
                ...l.cards.description,
                children: l.cards.description.body,
              }),
              (0, a.jsx)(c, { ...l.cards.specs }),
              (0, a.jsx)(f.J, {}),
              (0, a.jsx)(i.x, {
                randomTestimonial: t,
                feedback: d,
                setFeedback: x,
                ariaLabel: "Send Request ".concat(l.title),
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [795, 774, 888, 179], function () {
      return e((e.s = 3075));
    }),
      (_N_E = e.O());
  },
]);
