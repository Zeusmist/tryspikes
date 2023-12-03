(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    2978: function (e, t, l) {
      "use strict";
      var r,
        a = l(7294),
        i = ["title", "titleId"];
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var r in l)
                  Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      t.Z = function (e) {
        var t = e.title,
          l = e.titleId,
          n = (function (e, t) {
            if (null == e) return {};
            var l,
              r,
              a = (function (e, t) {
                if (null == e) return {};
                var l,
                  r,
                  a = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (l = i[r]), t.indexOf(l) >= 0 || (a[l] = e[l]);
                return a;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++)
                (l = i[r]),
                  !(t.indexOf(l) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, l) &&
                    (a[l] = e[l]);
            }
            return a;
          })(e, i);
        return a.createElement(
          "svg",
          s(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 40,
              height: 30,
              fill: "none",
              viewBox: "0 0 40 29",
              "aria-labelledby": l,
            },
            n
          ),
          t ? a.createElement("title", { id: l }, t) : null,
          r ||
            (r = a.createElement("path", {
              fill: "#FFB800",
              d: "M14.75.5H3.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h11.25V20a6 6 0 0 1-6 6 1.5 1.5 0 1 0 0 3 9.01 9.01 0 0 0 9-9V3.5a3 3 0 0 0-3-3Zm0 15H3.5v-12h11.25v12ZM36.5.5H25.25a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3H36.5V20a6 6 0 0 1-6 6 1.5 1.5 0 1 0 0 3 9.01 9.01 0 0 0 9-9V3.5a3 3 0 0 0-3-3Zm0 15H25.25v-12H36.5v12Z",
            }))
        );
      };
    },
    8312: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(183);
        },
      ]);
    },
    7198: function (e, t, l) {
      "use strict";
      l.d(t, {
        s: function () {
          return x;
        },
      });
      var r = l(5893),
        a = l(7294),
        i = l(5418),
        s = l(5487),
        n = l(4276),
        o = l(6010);
      let c = {
        primary: (0, o.Z)(
          "grid w-full grid-cols-1 bg-blue-300 px-6 py-[3rem] text-center md:px-24 lg:h-[422px] lg:grid-cols-[1fr,800px,1fr] lg:p-0"
        ),
        secondary: (0, o.Z)(
          "grid w-full grid-cols-1 bg-blue-200 px-6 py-[3rem] text-center md:px-24 lg:h-[422px] lg:grid-cols-[1fr,800px,1fr] lg:px-0"
        ),
      };
      var d = l(1163);
      let x = (e) => {
        let { variant: t, title: l, children: o } = e,
          x = (0, d.useRouter)(),
          [u, g] = (0, a.useState)((0, i.eO)());
        return (
          (0, a.useEffect)(() => {
            g((0, i.eO)({ query: x.query }));
          }, [x.query]),
          (0, r.jsx)("section", {
            className: c[t],
            children: (0, r.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center lg:col-start-2",
              children: [
                (0, r.jsx)("h2", {
                  className:
                    "max-w-[450px] font-lato text-4xl font-black leading-[3.125rem] text-white",
                  children: l,
                }),
                (0, r.jsx)("div", {
                  className: "mt-4 max-w-[500px]",
                  children: (0, r.jsx)("p", {
                    className:
                      "font-lato text-lg font-normal leading-5 text-white lg:text-base lg:leading-[1.125rem]",
                    children: o,
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "mt-12",
                  children: (0, r.jsxs)(n.Q, {
                    id: "schedule-meeting",
                    label: "Schedule a meeting",
                    href: u,
                    variant: "tertiary",
                    children: [
                      "Schedule a meeting",
                      (0, r.jsx)(s.J, { variant: "arrow_up_right" }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    8222: function (e, t, l) {
      "use strict";
      l.d(t, {
        J: function () {
          return g;
        },
      });
      var r = l(5893),
        a = l(7294),
        i = l(5675),
        s = l.n(i);
      let n = (e) => {
        var t, l, a, i, n, o, c, d, x;
        let { caseStudy: u } = e;
        return (0, r.jsxs)("div", {
          className:
            "group relative flex max-h-[420px] w-full flex-col bg-blue-300 hover:animate-change-opacity hover:bg-blue-100 lg:h-[420px] lg:w-[530px] lg:max-w-[530px] lg:bg-blue-100 lg:hover:bg-blue-300",
          children: [
            (0, r.jsx)("div", {
              className:
                "relative left-0 top-0 z-20 block h-[160px] w-full group-hover:hidden lg:h-[260px]",
              children: (0, r.jsx)(s(), {
                src:
                  null !==
                    (o =
                      null == u
                        ? void 0
                        : null === (t = u.mainImage) || void 0 === t
                        ? void 0
                        : t.url) && void 0 !== o
                    ? o
                    : "",
                alt:
                  null !==
                    (c =
                      null == u
                        ? void 0
                        : null === (l = u.mainImage) || void 0 === l
                        ? void 0
                        : l.alt) && void 0 !== c
                    ? c
                    : "",
                fill: !0,
                sizes: "auto",
                style: { objectFit: "cover", fontSize: 0 },
              }),
            }),
            (0, r.jsx)("div", {
              className:
                "relative left-0 top-0 z-10 hidden h-[160px] w-full group-hover:block lg:h-[260px]",
              children: (0, r.jsx)(s(), {
                src:
                  null !==
                    (d =
                      null == u
                        ? void 0
                        : null === (a = u.secondaryImage) || void 0 === a
                        ? void 0
                        : a.url) && void 0 !== d
                    ? d
                    : "",
                alt:
                  null !==
                    (x =
                      null == u
                        ? void 0
                        : null === (i = u.secondaryImage) || void 0 === i
                        ? void 0
                        : i.alt) && void 0 !== x
                    ? x
                    : "",
                fill: !0,
                sizes: "auto",
                style: { objectFit: "cover", fontSize: 0 },
              }),
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-4 p-4 py-8",
              children: [
                (0, r.jsx)("p", {
                  className:
                    "font-lato text-base font-normal leading-[1.125rem] text-blue-200 group-hover:text-blue-300 lg:text-blue-300 lg:group-hover:text-blue-200",
                  children:
                    null == u
                      ? void 0
                      : null === (n = u.categories) || void 0 === n
                      ? void 0
                      : n.join("\xa0\xa0 \xb7\xa0\xa0"),
                }),
                (0, r.jsx)("h3", {
                  className:
                    "line-clamp-2 text-ellipsis font-lato text-xl font-black leading-6 text-white group-hover:text-gray-500 lg:text-gray-500 lg:group-hover:text-white",
                  children: null == u ? void 0 : u.shortTitle,
                }),
                (0, r.jsx)("p", {
                  className:
                    "line-clamp-2 font-lato text-lg font-normal leading-5 text-white group-hover:text-gray-500 lg:text-base lg:leading-[1.125rem] lg:text-gray-500 lg:group-hover:text-white",
                  children: null == u ? void 0 : u.shortDescription,
                }),
              ],
            }),
          ],
        });
      };
      var o = l(4770),
        c = l(5487),
        d = l(4276),
        x = l(1664),
        u = l.n(x);
      let g = (e) => {
        let { cases: t } = e,
          l = (0, a.useRef)(null);
        return (0, r.jsxs)("section", {
          className: "flex flex-col bg-white py-[6rem] lg:gap-6",
          children: [
            (0, r.jsx)("section", {
              className:
                "grid grid-cols-1 px-6 md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
              children: (0, r.jsxs)("div", {
                className: "mb-8 flex flex-row justify-between lg:col-start-2",
                children: [
                  (0, r.jsx)("div", {
                    className: "lg:max-w-[500px]",
                    children: (0, r.jsx)(o.N, {
                      textAlign: "text-start",
                      category: "CASE STUDIES",
                      title:
                        "Discover how we turn challenges into success stories.",
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "mt-auto hidden pb-1 align-bottom lg:flex",
                    children: (0, r.jsxs)(d.Q, {
                      label: "Explore our case studies",
                      href: "/case-studies",
                      variant: "link_primary",
                      size: "full no-padding",
                      children: [
                        "Explore our case studies ",
                        (0, r.jsx)(c.J, { variant: "arrow" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsx)("section", {
              className: "flex items-center px-6 md:px-24 lg:px-0 ",
              children: (0, r.jsxs)("div", {
                ref: l,
                className:
                  "scrollbar-hide overflow-padding flex w-full flex-col gap-4 lg:grid lg:grid-flow-col lg:overflow-auto",
                children: [
                  (0, r.jsx)(r.Fragment, {
                    children:
                      null == t
                        ? void 0
                        : t.map((e, t) =>
                            (0, r.jsx)(
                              u(),
                              {
                                href: "/case-studies/".concat(
                                  null == e ? void 0 : e.slug.current
                                ),
                                className: "flex w-full hover:cursor-pointer",
                                children: (0, r.jsx)(n, { caseStudy: e }),
                              },
                              t
                            )
                          ),
                  }),
                  (0, r.jsx)("div", {
                    className: "m-auto mt-4 flex w-full lg:hidden",
                    children: (0, r.jsxs)(d.Q, {
                      label: "Explore our case studies",
                      href: "/case-studies",
                      variant: "secondary-darker",
                      size: "full",
                      children: [
                        "Explore our case studies ",
                        (0, r.jsx)(c.J, { variant: "arrow" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsx)("section", {
              className:
                "grid grid-cols-1 px-6 md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
              children: (0, r.jsxs)("div", {
                className:
                  "hidden flex-row gap-5 pt-4 lg:col-start-2 lg:m-0 lg:ml-auto lg:flex",
                children: [
                  (0, r.jsx)("button", {
                    onClick: () => {
                      var e, t, r;
                      let a =
                        null !==
                          (r =
                            null === (e = l.current) || void 0 === e
                              ? void 0
                              : e.scrollLeft) && void 0 !== r
                          ? r
                          : 0;
                      null === (t = l.current) ||
                        void 0 === t ||
                        t.scroll({ left: a - 600, behavior: "smooth" });
                    },
                    id: "alc",
                    "aria-label": "arrow_left_cases",
                    className:
                      "rounded-full border-2 border-blue-500 p-2 text-blue-500",
                    children: (0, r.jsx)(c.J, { variant: "arrow_left" }),
                  }),
                  (0, r.jsx)("button", {
                    onClick: () => {
                      var e, t, r;
                      let a =
                        null !==
                          (r =
                            null === (e = l.current) || void 0 === e
                              ? void 0
                              : e.scrollLeft) && void 0 !== r
                          ? r
                          : 0;
                      null === (t = l.current) ||
                        void 0 === t ||
                        t.scroll({ left: a + 600, behavior: "smooth" });
                    },
                    id: "arc",
                    "aria-label": "arrow_right_cases",
                    className:
                      "rounded-full border-2 border-blue-500 p-2 text-blue-500",
                    children: (0, r.jsx)(c.J, { variant: "arrow" }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    9463: function (e, t, l) {
      "use strict";
      var r = l(5893),
        a = l(5675),
        i = l.n(a);
      t.Z = () =>
        (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className:
              "relative flex w-full flex-col items-center justify-center lg:col-start-2",
            children: [
              (0, r.jsx)("div", {
                className: "w-full pb-2 text-center lg:pb-10",
                children: (0, r.jsx)("span", {
                  className:
                    "font-lato text-lg font-bold leading-5 text-gray-300",
                  children: "Trusted by",
                }),
              }),
              (0, r.jsxs)("div", {
                className:
                  "m-auto grid grid-cols-2 justify-center gap-12 overflow-hidden pt-4 align-middle md:grid-cols-3 lg:flex lg:flex-row lg:pt-0",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex justify-center pt-2 align-middle",
                    children: (0, r.jsx)(i(), {
                      alt: "seedrs",
                      src: "https://wv-landing-public.s3.eu-west-1.amazonaws.com/seedrs.png",
                      width: 160,
                      height: 60,
                      style: { objectFit: "contain" },
                      className: "brightness-[0] invert",
                      priority: !0,
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "flex justify-center pb-[2] align-middle",
                    children: (0, r.jsx)(i(), {
                      alt: "stake",
                      src: "https://wv-landing-public.s3.eu-west-1.amazonaws.com/stake.png",
                      width: 120,
                      height: 60,
                      style: { objectFit: "contain" },
                      className: "brightness-[0] invert",
                      priority: !0,
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "flex justify-center align-middle",
                    children: (0, r.jsx)(i(), {
                      alt: "deepbond",
                      src: "https://wv-landing-public.s3.eu-west-1.amazonaws.com/deepbond.png",
                      width: 120,
                      height: 60,
                      style: { objectFit: "contain" },
                      priority: !0,
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "flex justify-center align-middle",
                    children: (0, r.jsx)(i(), {
                      alt: "rely.io",
                      src: "https://wv-landing-public.s3.eu-west-1.amazonaws.com/rely.png",
                      width: 190,
                      height: 60,
                      style: { objectFit: "contain" },
                      priority: !0,
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "flex justify-center align-middle",
                    children: (0, r.jsx)(i(), {
                      alt: "openvia",
                      src: "https://wv-landing-public.s3.eu-west-1.amazonaws.com/openvia.png",
                      width: 120,
                      height: 60,
                      style: { objectFit: "contain" },
                      priority: !0,
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "flex justify-center align-middle",
                    children: (0, r.jsx)(i(), {
                      alt: "aauav",
                      src: "https://wv-landing-public.s3.eu-west-1.amazonaws.com/AAUAV.png",
                      width: 56,
                      height: 56,
                      style: { objectFit: "contain" },
                      className: "brightness-[0] invert",
                      priority: !0,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
    },
    7332: function (e, t, l) {
      "use strict";
      l.d(t, {
        J: function () {
          return x;
        },
      });
      var r = l(5893),
        a = l(7294),
        i = l(1812),
        s = l(8903),
        n = l(5487),
        o = l(2978),
        c = l(6010);
      let d = (e) => {
          let { testimonial: t, transition: l } = e,
            a = (0, c.Z)(
              {
                "translate-x-[0%] opacity-1": l,
                "translate-x-[-30%] opacity-0": !l,
                "delay-[50ms]": 0 === t.index,
                "delay-[100ms]": 1 === t.index,
                "delay-[150ms]": 2 === t.index,
                "delay-[200ms]": 3 === t.index,
                "delay-[250ms]": 4 === t.index,
              },
              "flex w-[350px] flex-row gap-5 bg-white p-5 duration-[500ms] ease-in-out lg:w-[500px] lg:gap-12 lg:p-8"
            );
          return (0, r.jsxs)(
            "div",
            {
              className: a,
              children: [
                (0, r.jsx)("div", { children: (0, r.jsx)(o.Z, {}) }),
                (0, r.jsxs)("div", {
                  className: "mt-4 flex flex-col gap-6",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "font-lato text-lg font-bold leading-5 text-blue-500",
                      children: t.description,
                    }),
                    (0, r.jsxs)("div", {
                      className: "mt-auto flex flex-col gap-1",
                      children: [
                        (0, r.jsx)("p", {
                          className:
                            "max-h-[220px] overflow-hidden text-ellipsis font-lato text-base font-normal leading-[1.125rem] text-blue-500",
                          children: t.author,
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "font-lato text-xs font-normal leading-3 text-blue-500",
                          children: t.company,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            t.index
          );
        },
        x = () => {
          let e = (0, a.useRef)(null),
            t = (0, a.useRef)(null),
            [l, o] = (0, a.useState)(!1);
          (0, s.a)(e, o, l);
          let x = (0, c.Z)("flex flex-col gap-6 bg-blue-500 py-[3rem]");
          return (0, r.jsxs)("section", {
            ref: e,
            className: x,
            children: [
              (0, r.jsx)("section", {
                className:
                  "grid grid-cols-1 overflow-hidden px-6 md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
                children: (0, r.jsx)("div", {
                  className: "max-w-[440px] lg:col-start-2",
                  children: (0, r.jsx)("h2", {
                    className:
                      "font-lato text-3xl font-bold leading-9 text-white",
                    children:
                      "Don't take our word for granted, hear it from our clients!",
                  }),
                }),
              }),
              (0, r.jsx)("section", {
                className: "flex items-center px-6 md:px-24 lg:px-0 ",
                children: (0, r.jsx)("div", {
                  ref: t,
                  className:
                    "scrollbar-hide overflow-padding grid grid-flow-col gap-4 overflow-auto",
                  children: i.aP.map((e) =>
                    (0, r.jsx)(d, { testimonial: e, transition: l }, e.index)
                  ),
                }),
              }),
              (0, r.jsx)("section", {
                className:
                  "grid grid-cols-1 px-6 md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
                children: (0, r.jsxs)("div", {
                  className: "ml-auto flex flex-row gap-5 pt-4 lg:col-start-2",
                  children: [
                    (0, r.jsx)("button", {
                      onClick: () => {
                        var e, l, r;
                        let a =
                          null !==
                            (r =
                              null === (e = t.current) || void 0 === e
                                ? void 0
                                : e.scrollLeft) && void 0 !== r
                            ? r
                            : 0;
                        null === (l = t.current) ||
                          void 0 === l ||
                          l.scroll({
                            left: window.innerWidth <= 800 ? a - 370 : a - 500,
                            behavior: "smooth",
                          });
                      },
                      id: "alt",
                      "aria-label": "arrow_left_testimonials",
                      className:
                        "rounded-full border-2 border-white p-2 text-white",
                      children: (0, r.jsx)(n.J, { variant: "arrow_left" }),
                    }),
                    (0, r.jsx)("button", {
                      onClick: () => {
                        if (window) {
                          var e, l, r;
                          let a =
                            null !==
                              (r =
                                null === (e = t.current) || void 0 === e
                                  ? void 0
                                  : e.scrollLeft) && void 0 !== r
                              ? r
                              : 0;
                          null === (l = t.current) ||
                            void 0 === l ||
                            l.scroll({
                              left:
                                window.innerWidth <= 800 ? a + 370 : a + 500,
                              behavior: "smooth",
                            });
                        }
                      },
                      id: "art",
                      "aria-label": "arrow_right_testimonials",
                      className:
                        "rounded-full border-2 border-white p-2 text-white",
                      children: (0, r.jsx)(n.J, { variant: "arrow" }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    1934: function (e, t, l) {
      "use strict";
      l.d(t, {
        F: function () {
          return c;
        },
      });
      var r = l(5893);
      let a = () =>
        (0, r.jsxs)("div", {
          className: "stars absolute inset-0 z-0",
          children: [
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
          ],
        });
      var i = l(4276),
        s = l(6010),
        n = l(5675),
        o = l.n(n);
      let c = (e) => {
        let {
            breadCrumb: t,
            image: l,
            children: n,
            title: c,
            button: d,
            buttonVariant: x,
            iconRight: u,
            partners: g,
            mainHero: m,
          } = e,
          p = (0, s.Z)(
            "mt-4 font-lato text-lg font-normal leading-5 text-white ",
            { "lg:w-[350px] animate-fade-in-body": m, "lg:w-[450px]": !m }
          ),
          h = (0, s.Z)(
            "relative z-10 hidden h-96 max-h-[360px] w-[680px] animate-fade-in-image justify-center lg:-ml-64 lg:mt-16 lg:flex"
          ),
          f = (0, s.Z)("z-20 flex w-full flex-col justify-center", {
            "animate-fade-in-from-left": !m,
          }),
          v = (0, s.Z)(
            "mb-8 font-lato text-lg font-bold leading-5 text-yellow-400",
            { "animate-fade-in-breadcrumb": m }
          ),
          b = (0, s.Z)(
            "break-words font-lato text-4xl font-black leading-[3.125rem] text-white lg:w-[500px]",
            { "animate-fade-in-title": m }
          ),
          j = (0, s.Z)("mt-8", { "animate-fade-in-button": m });
        return (0, r.jsx)("section", {
          className: "bg-blue-300",
          children: (0, r.jsxs)("div", {
            className:
              "flex h-full min-h-screen flex-col overflow-hidden bg-black opacity-[0.88] sm:pb-0 lg:min-h-screen lg:pt-0",
            children: [
              (0, r.jsx)(a, {}),
              (0, r.jsx)("div", {
                className:
                  "m-auto grid grid-cols-1 px-6 pt-40 md:px-24 lg:grid-cols-[1fr,1000px,1fr] lg:px-0 lg:pt-20",
                children: (0, r.jsxs)("div", {
                  className:
                    "m-auto grid w-full grid-cols-1 gap-20 lg:col-start-2 lg:ml-[100px] lg:grid-cols-2",
                  children: [
                    (0, r.jsxs)("div", {
                      className: f,
                      children: [
                        (0, r.jsx)("h5", { className: v, children: t }),
                        (0, r.jsx)("h1", { className: b, children: c }),
                        (0, r.jsx)("p", { className: p, children: n }),
                        (0, r.jsx)("div", {
                          className: j,
                          children: (0, r.jsxs)(i.Q, {
                            label: d,
                            href: "/contact-us.html",
                            variant: x,
                            children: [d, u],
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: h,
                      children: (0, r.jsx)(o(), {
                        priority: !0,
                        src: l,
                        alt: c,
                        fill: !0,
                        sizes: "auto",
                        style: { objectFit: "contain" },
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "mt-auto grid animate-ascend-bottom grid-cols-1 px-6 pb-6 pt-28 md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0 lg:pt-0",
                children: g,
              }),
            ],
          }),
        });
      };
    },
    183: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          __N_SSG: function () {
            return q;
          },
          default: function () {
            return X;
          },
        });
      var r,
        a,
        i,
        s,
        n,
        o,
        c = l(5893),
        d = l(7198),
        x = l(8222),
        u = l(7294),
        g = l(8903),
        m = l(4770),
        p = ["title", "titleId"];
      function h() {
        return (h = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var r in l)
                  Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var f = function (e) {
          var t = e.title,
            l = e.titleId,
            a = (function (e, t) {
              if (null == e) return {};
              var l,
                r,
                a = (function (e, t) {
                  if (null == e) return {};
                  var l,
                    r,
                    a = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++)
                    (l = i[r]), t.indexOf(l) >= 0 || (a[l] = e[l]);
                  return a;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                  (l = i[r]),
                    !(t.indexOf(l) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, l) &&
                      (a[l] = e[l]);
              }
              return a;
            })(e, p);
          return u.createElement(
            "svg",
            h(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 467,
                height: 128,
                fill: "none",
                viewBox: "0 0 496 108",
                "aria-labelledby": l,
              },
              a
            ),
            t ? u.createElement("title", { id: l }, t) : null,
            r ||
              (r = u.createElement("path", {
                stroke: "#001855",
                strokeWidth: 2,
                d: "M1 0v59.561h494V108",
              }))
          );
        },
        v = ["title", "titleId"];
      function b() {
        return (b = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var r in l)
                  Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var j = function (e) {
          var t = e.title,
            l = e.titleId,
            r = (function (e, t) {
              if (null == e) return {};
              var l,
                r,
                a = (function (e, t) {
                  if (null == e) return {};
                  var l,
                    r,
                    a = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++)
                    (l = i[r]), t.indexOf(l) >= 0 || (a[l] = e[l]);
                  return a;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                  (l = i[r]),
                    !(t.indexOf(l) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, l) &&
                      (a[l] = e[l]);
              }
              return a;
            })(e, v);
          return u.createElement(
            "svg",
            b(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 467,
                height: 128,
                fill: "none",
                viewBox: "0 0 494 108",
                "aria-labelledby": l,
              },
              r
            ),
            t ? u.createElement("title", { id: l }, t) : null,
            a ||
              (a = u.createElement("path", {
                stroke: "#001855",
                strokeWidth: 2,
                d: "M493 0v59.562H1V108",
              }))
          );
        },
        w = l(6010);
      let y = (e) => {
        let { transition: t, ...l } = e,
          r = (0, w.Z)(
            "flex max-w-[640px] shrink-0 flex-col bg-white p-6 lg:h-[190px] lg:items-center",
            {
              "lg:flex-row lg:mt-[-3rem]": l.index % 2 == 0,
              "lg:flex-row-reverse lg:mt-[-3rem]": l.index % 2 != 0,
            }
          ),
          a = (0, w.Z)("flex flex-col gap-2 duration-[1s] ease-in-out", {
            "lg:text-start lg:pl-8 lg:pr-16": l.index % 2 == 0,
            "lg:text-end lg:pr-8 lg:pl-16": l.index % 2 != 0,
            "delay-[0.5s]": 0 === l.index,
            "delay-[1s]": 1 === l.index,
            "delay-[1.5s]": 2 === l.index,
            "delay-[2s]": 3 === l.index,
            "translate-x-[30%] opacity-0": !t && l.index % 2 == 0,
            "translate-x-[-30%] opacity-0": !t && l.index % 2 != 0,
            "translate-x-[0%] opacity-1": t,
          }),
          i = (0, w.Z)(
            "left-8 top-5 z-20 mb-4 w-max items-center justify-center rounded-full bg-blue-200 p-4 duration-[0.6s] ease-in-out lg:mb-0 lg:p-6",
            { "opacity-0": !t, "opacity-1": t }
          );
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)(
              "div",
              {
                className: r,
                children: [
                  (0, c.jsx)("div", {
                    className: i,
                    children: (0, c.jsx)("div", {
                      className:
                        "flex h-[50px] w-[50px] items-center justify-center lg:h-[80px] lg:w-[80px]",
                      children: l.icon,
                    }),
                  }),
                  (0, c.jsxs)("div", {
                    className: a,
                    children: [
                      (0, c.jsx)("div", {
                        className: "mb-2",
                        children: (0, c.jsx)("p", {
                          className:
                            "font-lato text-lg font-normal leading-[1.125rem] text-yellow-500 lg:text-base lg:leading-[1.125rem]",
                          children: l.step,
                        }),
                      }),
                      (0, c.jsx)("h3", {
                        className:
                          "font-lato text-xl font-black leading-5 text-blue-500",
                        children: l.title,
                      }),
                      (0, c.jsx)("p", {
                        className:
                          "font-lato text-base font-normal leading-[1.125rem] text-blue-500 lg:text-lg lg:leading-5",
                        children: l.text,
                      }),
                    ],
                  }),
                ],
              },
              l.index
            ),
            3 !== l.index &&
              (0, c.jsxs)(c.Fragment, {
                children: [
                  (0, c.jsx)("div", {
                    className:
                      "z-10 hidden h-full w-full justify-center lg:mt-[-3rem]  lg:flex",
                    children:
                      l.index % 2 == 0
                        ? (0, c.jsx)(f, {
                            className: (0, w.Z)({
                              hidden: !t,
                              "traces-animation block": 0 === l.index && t,
                              "traces-animation-3 block": 2 === l.index && t,
                            }),
                          })
                        : (0, c.jsx)(j, {
                            className: (0, w.Z)({
                              hidden: !t,
                              "traces-animation-2 block": 1 === l.index && t,
                            }),
                          }),
                  }),
                  (0, c.jsx)("div", {
                    className:
                      "z-10 flex h-8 w-[2px] justify-center bg-black lg:hidden",
                  }),
                ],
              }),
          ],
        });
      };
      var N = ["title", "titleId"];
      function O() {
        return (O = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var r in l)
                  Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var k = ["title", "titleId"];
      function Z() {
        return (Z = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var r in l)
                  Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var E = ["title", "titleId"];
      function S() {
        return (S = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var r in l)
                  Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var P = ["title", "titleId"];
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var r in l)
                  Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      let I = [
          {
            icon: (0, c.jsx)(function (e) {
              var t = e.title,
                l = e.titleId,
                r = (function (e, t) {
                  if (null == e) return {};
                  var l,
                    r,
                    a = (function (e, t) {
                      if (null == e) return {};
                      var l,
                        r,
                        a = {},
                        i = Object.keys(e);
                      for (r = 0; r < i.length; r++)
                        (l = i[r]), t.indexOf(l) >= 0 || (a[l] = e[l]);
                      return a;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                      (l = i[r]),
                        !(t.indexOf(l) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, l) &&
                          (a[l] = e[l]);
                  }
                  return a;
                })(e, k);
              return u.createElement(
                "svg",
                Z(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 40 36",
                    "aria-labelledby": l,
                  },
                  r
                ),
                t ? u.createElement("title", { id: l }, t) : null,
                s ||
                  (s = u.createElement("path", {
                    fill: "#001855",
                    d: "M39.084 33.354 37.65 28.33A13.48 13.48 0 0 0 26.875 8.712 13.48 13.48 0 1 0 2.35 19.817L.915 24.84a1.774 1.774 0 0 0 2.2 2.192l5.023-1.434a13.478 13.478 0 0 0 4.989 1.45 13.481 13.481 0 0 0 18.75 7.063l5.022 1.435a1.774 1.774 0 0 0 2.192-2.192h-.007ZM8.21 24.13a.665.665 0 0 0-.195.028l-5.298 1.513a.355.355 0 0 1-.438-.438l1.513-5.298a.71.71 0 0 0-.058-.532 12.06 12.06 0 1 1 4.817 4.817.71.71 0 0 0-.34-.094v.004Zm29.42 9.96a.354.354 0 0 1-.355.091l-5.298-1.513a.71.71 0 0 0-.532.059 12.06 12.06 0 0 1-16.766-5.625 13.479 13.479 0 0 0 12.682-16.899 12.061 12.061 0 0 1 8.905 17.715.71.71 0 0 0-.058.532l1.513 5.298a.355.355 0 0 1-.091.343Z",
                  }))
              );
            }, {}),
            step: "STEP ONE",
            title: "Quick chat to get to know you",
            text: "Brief talk about your idea and software needs. We have to make sure that we are the best team to partner with you.",
            index: 0,
          },
          {
            icon: (0, c.jsx)(
              function (e) {
                var t = e.title,
                  l = e.titleId,
                  r = (function (e, t) {
                    if (null == e) return {};
                    var l,
                      r,
                      a = (function (e, t) {
                        if (null == e) return {};
                        var l,
                          r,
                          a = {},
                          i = Object.keys(e);
                        for (r = 0; r < i.length; r++)
                          (l = i[r]), t.indexOf(l) >= 0 || (a[l] = e[l]);
                        return a;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < i.length; r++)
                        (l = i[r]),
                          !(t.indexOf(l) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, l) &&
                            (a[l] = e[l]);
                    }
                    return a;
                  })(e, N);
                return u.createElement(
                  "svg",
                  O(
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 39 34",
                      "aria-labelledby": l,
                    },
                    r
                  ),
                  t ? u.createElement("title", { id: l }, t) : null,
                  i ||
                    (i = u.createElement("path", {
                      fill: "#001855",
                      d: "M36.264.4H24.912a6.385 6.385 0 0 0-5.675 3.466A6.386 6.386 0 0 0 13.56.4H2.209A2.128 2.128 0 0 0 .081 2.53v22.703A2.128 2.128 0 0 0 2.21 27.36h11.352a4.966 4.966 0 0 1 4.966 4.966.71.71 0 1 0 1.419 0 4.966 4.966 0 0 1 4.966-4.966h11.352a2.129 2.129 0 0 0 2.128-2.128V2.529A2.129 2.129 0 0 0 36.263.4ZM13.56 25.94H2.209a.71.71 0 0 1-.709-.709V2.53a.71.71 0 0 1 .71-.71h11.35a4.966 4.966 0 0 1 4.967 4.967v21.532a6.375 6.375 0 0 0-4.966-2.377Zm23.412-.709a.71.71 0 0 1-.71.71h-11.35a6.375 6.375 0 0 0-4.967 2.378V6.786a4.966 4.966 0 0 1 4.966-4.967h11.352a.71.71 0 0 1 .709.71v22.703ZM32.716 8.204a.71.71 0 0 1-.71.71h-7.094a.71.71 0 0 1 0-1.419h7.095a.71.71 0 0 1 .71.71Zm0 5.676a.71.71 0 0 1-.71.71h-7.094a.71.71 0 0 1 0-1.42h7.095a.71.71 0 0 1 .71.71Zm0 5.676a.71.71 0 0 1-.71.71h-7.094a.71.71 0 0 1 0-1.42h7.095a.71.71 0 0 1 .71.71Z",
                    }))
                );
              },
              { className: "mt-1" }
            ),
            step: "STEP TWO",
            title: "Plan & design",
            text: "We work together planning and designing the product, defining priorities and making your idea something concrete.",
            index: 1,
          },
          {
            icon: (0, c.jsx)(function (e) {
              var t = e.title,
                l = e.titleId,
                r = (function (e, t) {
                  if (null == e) return {};
                  var l,
                    r,
                    a = (function (e, t) {
                      if (null == e) return {};
                      var l,
                        r,
                        a = {},
                        i = Object.keys(e);
                      for (r = 0; r < i.length; r++)
                        (l = i[r]), t.indexOf(l) >= 0 || (a[l] = e[l]);
                      return a;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                      (l = i[r]),
                        !(t.indexOf(l) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, l) &&
                          (a[l] = e[l]);
                  }
                  return a;
                })(e, P);
              return u.createElement(
                "svg",
                _(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 46 46",
                    "aria-labelledby": l,
                  },
                  r
                ),
                t ? u.createElement("title", { id: l }, t) : null,
                o ||
                  (o = u.createElement("path", {
                    fill: "#001855",
                    d: "m12.103 16.33-7.86 6.55 7.86 6.55a.71.71 0 0 1-.908 1.09L2.68 23.425a.71.71 0 0 1 0-1.089l8.514-7.095a.709.709 0 0 1 .908 1.09Zm31.216 6.006-8.514-7.095a.71.71 0 1 0-.908 1.09l7.86 6.55-7.86 6.55a.708.708 0 0 0 .11 1.192.71.71 0 0 0 .798-.103l8.514-7.095a.71.71 0 0 0 0-1.089Zm-14.4-15.73a.709.709 0 0 0-.91.423L16.657 38.246a.71.71 0 0 0 1.334.486L29.343 7.515a.709.709 0 0 0-.424-.91Z",
                  }))
              );
            }, {}),
            step: "STEP THREE",
            title: "Development",
            text: "We start the development cycle using agile methodologies. You will get recurrent presentations, previews and constant communication to make sure you get exactly what you want!",
            index: 2,
          },
          {
            icon: (0, c.jsx)(function (e) {
              var t = e.title,
                l = e.titleId,
                r = (function (e, t) {
                  if (null == e) return {};
                  var l,
                    r,
                    a = (function (e, t) {
                      if (null == e) return {};
                      var l,
                        r,
                        a = {},
                        i = Object.keys(e);
                      for (r = 0; r < i.length; r++)
                        (l = i[r]), t.indexOf(l) >= 0 || (a[l] = e[l]);
                      return a;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                      (l = i[r]),
                        !(t.indexOf(l) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, l) &&
                          (a[l] = e[l]);
                  }
                  return a;
                })(e, E);
              return u.createElement(
                "svg",
                S(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 34",
                    "aria-labelledby": l,
                  },
                  r
                ),
                t ? u.createElement("title", { id: l }, t) : null,
                n ||
                  (n = u.createElement("path", {
                    fill: "#001855",
                    d: "M18.946 15.462V32.49a.71.71 0 1 1-1.419 0V15.462a.71.71 0 0 1 1.419 0Zm12.06 13.48a.71.71 0 0 0-.709.71v2.837a.71.71 0 1 0 1.42 0v-2.838a.71.71 0 0 0-.71-.71Zm4.258-5.676h-3.548V1.273a.71.71 0 1 0-1.419 0v21.993H26.75a.71.71 0 1 0 0 1.42h8.514a.71.71 0 1 0 0-1.42Zm-29.798 0a.71.71 0 0 0-.71.71v8.513a.71.71 0 0 0 1.42 0v-8.513a.71.71 0 0 0-.71-.71Zm4.257-5.675H6.176V1.272a.71.71 0 0 0-1.42 0V17.59H1.21a.71.71 0 0 0 0 1.42h8.514a.71.71 0 1 0 0-1.42Zm12.77-8.514h-3.547V1.273a.71.71 0 1 0-1.419 0v7.804H13.98a.71.71 0 0 0 0 1.419h8.513a.71.71 0 1 0 0-1.419Z",
                  }))
              );
            }, {}),
            step: "STEP FOUR",
            title: "Maintenance",
            text: "You deserve the best! So our work doesn't end when we deliver. We make sure your product is performant, resilient and capable of handling thousands of clients.",
            index: 3,
          },
        ],
        z = () => {
          let e = (0, u.useRef)(null),
            [t, l] = (0, u.useState)(!1);
          (0, g.a)(e, l, t);
          let r = (0, w.Z)(
              "grid grid-cols-1 overflow-hidden bg-blue-100 px-6 py-[6rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:bg-white lg:px-0",
              { "opacity-1": t, "opacity-0": !t }
            ),
            a = (0, w.Z)("duration-[0.4s] ease-in-out", {
              "translate-y-[0%] opacity-1": t,
              "translate-y-[-30%] opacity-0": !t,
            });
          return (0, c.jsx)("section", {
            ref: e,
            className: r,
            children: (0, c.jsxs)("div", {
              className:
                "flex min-h-full flex-col items-center justify-center text-center lg:col-start-2",
              children: [
                (0, c.jsx)("div", {
                  className: a,
                  children: (0, c.jsx)(m.N, {
                    textAlign: "text-center",
                    category: "OUR PROCESS",
                    title: "How we collaborate",
                  }),
                }),
                (0, c.jsx)("div", {
                  className:
                    "mt-12 flex flex-col items-center justify-center text-left lg:mt-28",
                  children: I.map((e) =>
                    (0, u.createElement)(y, {
                      ...e,
                      key: e.index,
                      transition: t,
                    })
                  ),
                }),
              ],
            }),
          });
        };
      var F = l(9463),
        H = l(9999),
        V = l(1812),
        A = l(4276),
        T = l(5487),
        J = l(1664),
        R = l.n(J);
      let W = (e) => {
          let { index: t, transition: l, service: r } = e,
            a = (0, w.Z)(
              "flex h-[200px] w-full scale-[1] flex-col gap-4 break-normal bg-yellow-400 px-4 py-6 duration-[300ms] ease-in-out md:h-[240px] md:max-w-[250px]",
              {
                "translate-y-[0%] opacity-1": l,
                "translate-y-[30%] opacity-0": !l,
                "delay-[300ms]": 0 === t,
                "delay-[600ms]": 1 === t,
                "delay-[900ms]": 2 === t,
                "delay-[1200ms]": 3 === t,
              }
            );
          return (0, c.jsx)(R(), {
            href: r.href,
            className:
              "shadow-sm ease-in-out hover:scale-[1.05] hover:duration-[100ms] lg:hover:scale-[1.1]",
            children: (0, c.jsxs)("div", {
              className: a,
              children: [
                (0, c.jsx)("div", {
                  className: "mb-1 text-blue-300",
                  children: (0, c.jsx)(T.J, {
                    variant: r.icon,
                    width: 10,
                    height: 10,
                  }),
                }),
                (0, c.jsx)("h3", {
                  className:
                    "font-lato text-lg font-bold leading-5 text-gray-400",
                  children: r.title,
                }),
                (0, c.jsx)("p", {
                  className:
                    "font-lato text-base font-normal leading-[1.125rem] text-gray-400",
                  children: r.body,
                }),
              ],
            }),
          });
        },
        M = () => {
          let e = (0, u.useRef)(null),
            [t, l] = (0, u.useState)(!1);
          (0, g.a)(e, l, t);
          let r = (0, w.Z)(
              "grid grid-cols-1 overflow-hidden px-6 pb-[3rem] pt-[6rem] md:px-24  lg:grid-cols-[1fr,800px,1fr] lg:px-0",
              { "opacity-1": t, "opacity-0": !t }
            ),
            a = (0, w.Z)("px-6 duration-[1s] ease-in-out md:px-12 lg:px-32", {
              "translate-y-[0%] opacity-1": t,
              "translate-y-[-30%] opacity-0": !t,
            }),
            i = (0, w.Z)(
              "mt-24 hidden delay-[1500ms] duration-[300ms] ease-in-out md:block",
              {
                "translate-y-[0%] opacity-1": t,
                "translate-y-[30%] opacity-0": !t,
              }
            ),
            s = (0, w.Z)(
              "mt-8 flex w-full justify-center delay-[1500ms] duration-[300ms] ease-in-out md:hidden",
              {
                "translate-y-[0%] opacity-1": t,
                "translate-y-[30%] opacity-0": !t,
              }
            );
          return (0, c.jsx)("section", {
            ref: e,
            className: r,
            children: (0, c.jsxs)("div", {
              className:
                "flex min-h-full flex-col items-center justify-center bg-white lg:col-start-2",
              children: [
                (0, c.jsx)("div", {
                  className: a,
                  children: (0, c.jsxs)(m.N, {
                    textAlign: "text-center",
                    category: "SERVICES",
                    title: "Fast and reliable",
                    children: [
                      (0, c.jsx)("p", { children: "Accelerate your business" }),
                      (0, c.jsx)("p", {
                        children:
                          "with Tryspikes capabilities to deliver innovative software products.",
                      }),
                    ],
                  }),
                }),
                (0, c.jsx)("div", {
                  className:
                    "mt-20 grid w-full grid-cols-1 gap-4 md:w-auto md:grid-cols-2 xl:grid-cols-4",
                  children: V.oZ.map((e, l) =>
                    (0, c.jsx)(
                      W,
                      {
                        index: l,
                        delay: "delay-[".concat((l + 1) * 500 + 1e3, "ms]"),
                        service: e,
                        transition: t,
                      },
                      l
                    )
                  ),
                }),
                (0, c.jsx)("div", {
                  className: i,
                  children: (0, c.jsx)(A.Q, {
                    label: "Know more about our services",
                    href: "/services",
                    variant: "secondary",
                    children: "Know more about our services",
                  }),
                }),
                (0, c.jsx)("div", {
                  className: s,
                  children: (0, c.jsx)(A.Q, {
                    label: "Know more about our services",
                    href: "/services",
                    variant: "secondary",
                    size: "full",
                    children: "Know more about our services",
                  }),
                }),
              ],
            }),
          });
        };
      var C = l(3813),
        L = l(5675),
        B = l.n(L);
      let Q = [
          { src: "/assets/technologies/react.svg", alt: "react" },
          { src: "/assets/technologies/typescript.svg", alt: "ts" },
          { src: "/assets/technologies/next.svg", alt: "next" },
          { src: "/assets/technologies/postgres.svg", alt: "postgres" },
          { src: "/assets/technologies/google_cloud.svg", alt: "google" },
          { src: "/assets/technologies/aws.svg", alt: "aws" },
          { src: "/assets/technologies/tensorflow.svg", alt: "postgres" },
          { src: "/assets/technologies/pytorch.svg", alt: "google" },
          { src: "/assets/technologies/tailwind.svg", alt: "aws" },
        ],
        D = () => {
          let e = (0, u.useRef)(null),
            [t, l] = (0, u.useState)(!1);
          (0, g.a)(e, l, t);
          let r = (0, w.Z)(
              "grid grid-cols-1 overflow-hidden bg-white px-6 pb-[6rem] pt-[3rem] transition-all duration-75 ease-in-out md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
              { "opacity-1": t, "opacity-0": !t }
            ),
            a = (0, w.Z)("px-8 duration-[1s] ease-in-out lg:px-0 lg:pr-8", {
              "translate-x-[0%] opacity-1": t,
              "translate-x-[-50%] opacity-0": !t,
            }),
            i = (0, w.Z)(
              "m-auto grid grid-cols-2 grid-rows-3 gap-4 duration-[1s] ease-in-out md:grid-cols-3 md:grid-rows-2",
              {
                "translate-x-[0%] opacity-1": t,
                "translate-x-[50%] opacity-0": !t,
              }
            );
          return (0, c.jsx)("section", {
            ref: e,
            className: r,
            children: (0, c.jsxs)("div", {
              className:
                "m-auto grid min-h-full grid-cols-1 items-center justify-center gap-12 bg-white lg:col-start-2 lg:grid-cols-2",
              children: [
                (0, c.jsx)("div", {
                  className: a,
                  children: (0, c.jsx)(m.N, {
                    textAlign: "text-center lg:text-start",
                    category: "TOOLS",
                    title: "Technologies that help us achieve the best results",
                    children:
                      "At Tryspikes, we use a variety of tools to ensure that we deliver the best possible results to our clients.",
                  }),
                }),
                (0, c.jsx)("div", {
                  className: i,
                  children: Q.map((e, t) =>
                    (0, c.jsx)(
                      "div",
                      {
                        className: (0, w.Z)(
                          "flex h-[100px] w-[100px] items-center justify-center bg-blue-100 sm:h-[120px] sm:w-[120px]",
                          { "col-span-2 md:col-span-1 m-auto": 8 === t }
                        ),
                        children: (0, c.jsx)("div", {
                          className: "relative h-[70px] w-[62px]",
                          children: (0, c.jsx)(B(), {
                            alt: e.alt,
                            src: e.src,
                            fill: !0,
                          }),
                        }),
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          });
        };
      var K = l(7332),
        U = l(1934),
        q = !0,
        X = (e) => {
          let { cases: t } = e;
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(H.H, {}),
              (0, c.jsx)(U.F, {
                title: "The development team you were looking for",
                button: "Let's work together",
                image: "./assets/hero_t.svg",
                buttonVariant: "warning",
                iconRight: (0, c.jsx)(T.J, { variant: "rocket" }),
                partners: (0, c.jsx)(F.Z, {}),
                mainHero: !0,
                children:
                  "We'll bring your vision to life with software development.",
              }),
              (0, c.jsx)(M, {}),
              (0, c.jsx)(D, {}),
              (0, c.jsx)(C.C, {}),
              (0, c.jsx)(z, {}),
              (0, c.jsx)(K.J, {}),
              0 !== t.length && (0, c.jsx)(x.J, { cases: t }),
              (0, c.jsx)(d.s, {
                title: "It seems you’re ready to take the next step",
                variant: "primary",
                children:
                  "Talking with us it's free and we will probably give awesome tips.",
              }),
            ],
          });
        };
    },
    9008: function (e, t, l) {
      e.exports = l(2636);
    },
  },
  function (e) {
    e.O(0, [819, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
