(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [552],
  {
    6565: function (e, l, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about-us.html",
        function () {
          return t(6557);
        },
      ]);
    },
    7198: function (e, l, t) {
      "use strict";
      t.d(l, {
        s: function () {
          return x;
        },
      });
      var r = t(5893),
        s = t(7294),
        a = t(5418),
        i = t(5487),
        o = t(4276),
        n = t(6010);
      let d = {
        primary: (0, n.Z)(
          "grid w-full grid-cols-1 bg-blue-300 px-6 py-[3rem] text-center md:px-24 lg:h-[422px] lg:grid-cols-[1fr,800px,1fr] lg:p-0"
        ),
        secondary: (0, n.Z)(
          "grid w-full grid-cols-1 bg-blue-200 px-6 py-[3rem] text-center md:px-24 lg:h-[422px] lg:grid-cols-[1fr,800px,1fr] lg:px-0"
        ),
      };
      var c = t(1163);
      let x = (e) => {
        let { variant: l, title: t, children: n } = e,
          x = (0, c.useRouter)(),
          [g, u] = (0, s.useState)((0, a.eO)());
        return (
          (0, s.useEffect)(() => {
            u((0, a.eO)({ query: x.query }));
          }, [x.query]),
          (0, r.jsx)("section", {
            className: d[l],
            children: (0, r.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center lg:col-start-2",
              children: [
                (0, r.jsx)("h2", {
                  className:
                    "max-w-[450px] font-lato text-4xl font-black leading-[3.125rem] text-white",
                  children: t,
                }),
                (0, r.jsx)("div", {
                  className: "mt-4 max-w-[500px]",
                  children: (0, r.jsx)("p", {
                    className:
                      "font-lato text-lg font-normal leading-5 text-white lg:text-base lg:leading-[1.125rem]",
                    children: n,
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "mt-12",
                  children: (0, r.jsxs)(o.Q, {
                    id: "schedule-meeting",
                    label: "Schedule a meeting",
                    href: g,
                    variant: "tertiary",
                    children: [
                      "Schedule a meeting",
                      (0, r.jsx)(i.J, { variant: "arrow_up_right" }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    8222: function (e, l, t) {
      "use strict";
      t.d(l, {
        J: function () {
          return u;
        },
      });
      var r = t(5893),
        s = t(7294),
        a = t(5675),
        i = t.n(a);
      let o = (e) => {
        var l, t, s, a, o, n, d, c, x;
        let { caseStudy: g } = e;
        return (0, r.jsxs)("div", {
          className:
            "group relative flex max-h-[420px] w-full flex-col bg-blue-300 hover:animate-change-opacity hover:bg-blue-100 lg:h-[420px] lg:w-[530px] lg:max-w-[530px] lg:bg-blue-100 lg:hover:bg-blue-300",
          children: [
            (0, r.jsx)("div", {
              className:
                "relative left-0 top-0 z-20 block h-[160px] w-full group-hover:hidden lg:h-[260px]",
              children: (0, r.jsx)(i(), {
                src:
                  null !==
                    (n =
                      null == g
                        ? void 0
                        : null === (l = g.mainImage) || void 0 === l
                        ? void 0
                        : l.url) && void 0 !== n
                    ? n
                    : "",
                alt:
                  null !==
                    (d =
                      null == g
                        ? void 0
                        : null === (t = g.mainImage) || void 0 === t
                        ? void 0
                        : t.alt) && void 0 !== d
                    ? d
                    : "",
                fill: !0,
                sizes: "auto",
                style: { objectFit: "cover", fontSize: 0 },
              }),
            }),
            (0, r.jsx)("div", {
              className:
                "relative left-0 top-0 z-10 hidden h-[160px] w-full group-hover:block lg:h-[260px]",
              children: (0, r.jsx)(i(), {
                src:
                  null !==
                    (c =
                      null == g
                        ? void 0
                        : null === (s = g.secondaryImage) || void 0 === s
                        ? void 0
                        : s.url) && void 0 !== c
                    ? c
                    : "",
                alt:
                  null !==
                    (x =
                      null == g
                        ? void 0
                        : null === (a = g.secondaryImage) || void 0 === a
                        ? void 0
                        : a.alt) && void 0 !== x
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
                    null == g
                      ? void 0
                      : null === (o = g.categories) || void 0 === o
                      ? void 0
                      : o.join("\xa0\xa0 \xb7\xa0\xa0"),
                }),
                (0, r.jsx)("h3", {
                  className:
                    "line-clamp-2 text-ellipsis font-lato text-xl font-black leading-6 text-white group-hover:text-gray-500 lg:text-gray-500 lg:group-hover:text-white",
                  children: null == g ? void 0 : g.shortTitle,
                }),
                (0, r.jsx)("p", {
                  className:
                    "line-clamp-2 font-lato text-lg font-normal leading-5 text-white group-hover:text-gray-500 lg:text-base lg:leading-[1.125rem] lg:text-gray-500 lg:group-hover:text-white",
                  children: null == g ? void 0 : g.shortDescription,
                }),
              ],
            }),
          ],
        });
      };
      var n = t(4770),
        d = t(5487),
        c = t(4276),
        x = t(1664),
        g = t.n(x);
      let u = (e) => {
        let { cases: l } = e,
          t = (0, s.useRef)(null);
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
                    children: (0, r.jsx)(n.N, {
                      textAlign: "text-start",
                      category: "CASE STUDIES",
                      title:
                        "Discover how we turn challenges into success stories.",
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "mt-auto hidden pb-1 align-bottom lg:flex",
                    children: (0, r.jsxs)(c.Q, {
                      label: "Explore our case studies",
                      href: "/case-studies",
                      variant: "link_primary",
                      size: "full no-padding",
                      children: [
                        "Explore our case studies ",
                        (0, r.jsx)(d.J, { variant: "arrow" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsx)("section", {
              className: "flex items-center px-6 md:px-24 lg:px-0 ",
              children: (0, r.jsxs)("div", {
                ref: t,
                className:
                  "scrollbar-hide overflow-padding flex w-full flex-col gap-4 lg:grid lg:grid-flow-col lg:overflow-auto",
                children: [
                  (0, r.jsx)(r.Fragment, {
                    children:
                      null == l
                        ? void 0
                        : l.map((e, l) =>
                            (0, r.jsx)(
                              g(),
                              {
                                href: "/case-studies/".concat(
                                  null == e ? void 0 : e.slug.current
                                ),
                                className: "flex w-full hover:cursor-pointer",
                                children: (0, r.jsx)(o, { caseStudy: e }),
                              },
                              l
                            )
                          ),
                  }),
                  (0, r.jsx)("div", {
                    className: "m-auto mt-4 flex w-full lg:hidden",
                    children: (0, r.jsxs)(c.Q, {
                      label: "Explore our case studies",
                      href: "/case-studies",
                      variant: "secondary-darker",
                      size: "full",
                      children: [
                        "Explore our case studies ",
                        (0, r.jsx)(d.J, { variant: "arrow" }),
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
                      var e, l, r;
                      let s =
                        null !==
                          (r =
                            null === (e = t.current) || void 0 === e
                              ? void 0
                              : e.scrollLeft) && void 0 !== r
                          ? r
                          : 0;
                      null === (l = t.current) ||
                        void 0 === l ||
                        l.scroll({ left: s - 600, behavior: "smooth" });
                    },
                    id: "alc",
                    "aria-label": "arrow_left_cases",
                    className:
                      "rounded-full border-2 border-blue-500 p-2 text-blue-500",
                    children: (0, r.jsx)(d.J, { variant: "arrow_left" }),
                  }),
                  (0, r.jsx)("button", {
                    onClick: () => {
                      var e, l, r;
                      let s =
                        null !==
                          (r =
                            null === (e = t.current) || void 0 === e
                              ? void 0
                              : e.scrollLeft) && void 0 !== r
                          ? r
                          : 0;
                      null === (l = t.current) ||
                        void 0 === l ||
                        l.scroll({ left: s + 600, behavior: "smooth" });
                    },
                    id: "arc",
                    "aria-label": "arrow_right_cases",
                    className:
                      "rounded-full border-2 border-blue-500 p-2 text-blue-500",
                    children: (0, r.jsx)(d.J, { variant: "arrow" }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    5437: function (e, l, t) {
      "use strict";
      t.d(l, {
        N: function () {
          return n;
        },
      });
      var r = t(5893),
        s = t(6318),
        a = t(4770),
        i = t(5487),
        o = t(4276);
      let n = (e) => {
        var l;
        let { posts: t, children: n } = e;
        return (0, r.jsx)("section", {
          className:
            "grid grid-cols-1 px-6 pb-[6rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
          children: (0, r.jsxs)("div", {
            className:
              "m-auto flex w-full flex-col lg:col-start-2 lg:items-center lg:justify-center",
            children: [
              (0, r.jsxs)("div", {
                className: "flex flex-row justify-between lg:w-full",
                children: [
                  (0, r.jsx)("div", {
                    className: "max-w-[200px] lg:max-w-[340px]",
                    children: (0, r.jsx)(a.N, {
                      textAlign: "text-start",
                      category: "BLOG",
                      title: n,
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "mt-auto hidden pb-1 align-bottom lg:flex",
                    children: (0, r.jsxs)(o.Q, {
                      label: "See all button",
                      href: "/blog",
                      variant: "link_primary",
                      size: "full no-padding",
                      children: [
                        "See all ",
                        (0, r.jsx)(i.J, { variant: "arrow" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "mt-12 grid w-full grid-cols-1 gap-[0.625rem] lg:grid-cols-3",
                children:
                  null === (l = null == t ? void 0 : t.slice(0, 3)) ||
                  void 0 === l
                    ? void 0
                    : l.map((e, l) =>
                        (0, r.jsx)(
                          "div",
                          {
                            className: "m-auto flex w-full lg:w-[280px]",
                            children: (0, r.jsx)(s.$, { ...e }, e.slug.current),
                          },
                          l
                        )
                      ),
              }),
              (0, r.jsx)("div", {
                className: "m-auto mt-4 w-full lg:hidden",
                children: (0, r.jsxs)(o.Q, {
                  label: "Explore our blog posts button",
                  href: "/blog",
                  variant: "secondary-darker",
                  size: "full",
                  children: [
                    "Explore our blog posts ",
                    (0, r.jsx)(i.J, { variant: "arrow" }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    1934: function (e, l, t) {
      "use strict";
      t.d(l, {
        F: function () {
          return d;
        },
      });
      var r = t(5893);
      let s = () =>
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
      var a = t(4276),
        i = t(6010),
        o = t(5675),
        n = t.n(o);
      let d = (e) => {
        let {
            breadCrumb: l,
            image: t,
            children: o,
            title: d,
            button: c,
            buttonVariant: x,
            iconRight: g,
            partners: u,
            mainHero: m,
          } = e,
          h = (0, i.Z)(
            "mt-4 font-lato text-lg font-normal leading-5 text-white ",
            { "lg:w-[350px] animate-fade-in-body": m, "lg:w-[450px]": !m }
          ),
          p = (0, i.Z)(
            "relative z-10 hidden h-96 max-h-[360px] w-[680px] animate-fade-in-image justify-center lg:-ml-64 lg:mt-16 lg:flex"
          ),
          f = (0, i.Z)("z-20 flex w-full flex-col justify-center", {
            "animate-fade-in-from-left": !m,
          }),
          v = (0, i.Z)(
            "mb-8 font-lato text-lg font-bold leading-5 text-yellow-400",
            { "animate-fade-in-breadcrumb": m }
          ),
          j = (0, i.Z)(
            "break-words font-lato text-4xl font-black leading-[3.125rem] text-white lg:w-[500px]",
            { "animate-fade-in-title": m }
          ),
          w = (0, i.Z)("mt-8", { "animate-fade-in-button": m });
        return (0, r.jsx)("section", {
          className: "bg-blue-300",
          children: (0, r.jsxs)("div", {
            className:
              "flex h-full min-h-screen flex-col overflow-hidden bg-black opacity-[0.88] sm:pb-0 lg:min-h-screen lg:pt-0",
            children: [
              (0, r.jsx)(s, {}),
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
                        (0, r.jsx)("h5", { className: v, children: l }),
                        (0, r.jsx)("h1", { className: j, children: d }),
                        (0, r.jsx)("p", { className: h, children: o }),
                        (0, r.jsx)("div", {
                          className: w,
                          children: (0, r.jsxs)(a.Q, {
                            label: c,
                            href: "/contact-us.html",
                            variant: x,
                            children: [c, g],
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: p,
                      children: (0, r.jsx)(n(), {
                        priority: !0,
                        src: t,
                        alt: d,
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
                children: u,
              }),
            ],
          }),
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
      var r = t(7294);
      let s = (e, l, t) => {
        (0, r.useEffect)(() => {
          let r = () => {
            if (!t && window && e.current) {
              let { top: t } = e.current.getBoundingClientRect();
              t <= window.innerHeight - 200 && l(!0);
            }
          };
          return (
            r(),
            window.addEventListener("scroll", r),
            () => {
              window.removeEventListener("scroll", r);
            }
          );
        }, [e, l, t]);
      };
    },
    6557: function (e, l, t) {
      "use strict";
      t.r(l),
        t.d(l, {
          __N_SSG: function () {
            return w;
          },
          default: function () {
            return b;
          },
        });
      var r = t(5893),
        s = t(6295),
        a = t(7198),
        i = t(8222),
        o = t(7294),
        n = t(1812),
        d = t(8903),
        c = t(6010);
      let x = (e) => {
          let { index: l, title: t, body: s, transition: a } = e,
            i = (0, c.Z)(
              "flex flex-col bg-blue-100 p-6 duration-[1s] ease-in-out lg:h-[218px] lg:w-[396px]",
              {
                "opacity-1": a,
                "opacity-0": !a,
                "delay-[400ms]": 1 === l,
                "delay-[800ms]": 2 === l,
                "delay-[1200ms]": 3 === l,
                "delay-[1600ms]": 4 === l,
              }
            );
          return (0, r.jsxs)("div", {
            className: i,
            children: [
              (0, r.jsx)("div", {
                className:
                  "flex h-[38px] w-[38px] items-center justify-center rounded-full bg-yellow-500 text-center font-lato text-xl text-gray-500",
                children: l,
              }),
              (0, r.jsx)("h3", {
                className:
                  "mt-6 font-lato text-lg font-bold leading-5 text-gray-500",
                children: t,
              }),
              (0, r.jsx)("p", {
                className:
                  "mt-4 font-lato text-base font-normal leading-[1.125rem] text-gray-400",
                children: s,
              }),
            ],
          });
        },
        g = () => {
          let e = (0, o.useRef)(null),
            [l, t] = (0, o.useState)(!1);
          (0, d.a)(e, t, l);
          let s = (0, c.Z)("flex flex-col duration-[1s] ease-in-out", {
            "translate-x-[0%] opacity-1": l,
            "translate-x-[-10%] opacity-0": !l,
          });
          return (0, r.jsx)("section", {
            ref: e,
            className:
              "my-12 grid grid-cols-1 overflow-hidden px-6 py-[3rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
            children: (0, r.jsxs)("div", {
              className: "flex flex-col lg:col-start-2",
              children: [
                (0, r.jsxs)("div", {
                  className: s,
                  children: [
                    (0, r.jsx)("h2", {
                      className:
                        "font-lato text-4xl font-black leading-[3.125rem] text-gray-500",
                      children: "How we do it",
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "mt-4 max-w-[34rem] font-lato text-base font-normal leading-[1.125rem] text-gray-500 lg:text-lg lg:leading-5",
                      children:
                        "Tryspikes embraces each new project as an opportunity to elevate our approach, crafting personalized and innovative solutions for every challenge.",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "m-auto mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2",
                  children: n.gH.map((e, t) =>
                    (0, r.jsx)(x, { ...e, transition: l }, t)
                  ),
                }),
              ],
            }),
          });
        };
      var u = t(5437),
        m = t(9999);
      let h = {
          primary: (0, c.Z)(
            "grid grid-cols-1 overflow-hidden bg-yellow-100 px-6 py-[3rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0"
          ),
          secondary: (0, c.Z)(
            "grid grid-cols-1 overflow-hidden bg-blue-500 px-6 py-[3rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0"
          ),
        },
        p = {
          primary: (0, c.Z)(
            "font-lato text-3xl font-black leading-9 text-blue-500 lg:text-4xl lg:leading-[3rem]"
          ),
          secondary: (0, c.Z)(
            "font-lato text-3xl font-black leading-9 text-white lg:text-4xl lg:leading-[3rem]"
          ),
        },
        f = {
          primary: (0, c.Z)(
            "space-y-4 font-lato text-lg font-normal leading-[1.5rem] text-gray-400"
          ),
          secondary: (0, c.Z)(
            "space-y-4 font-lato text-lg font-normal leading-[1.5rem] text-gray-100"
          ),
        },
        v = (e) => {
          let { variant: l = "primary", children: t, title: s } = e,
            a = (0, o.useRef)(null),
            [i, n] = (0, o.useState)(!1);
          (0, d.a)(a, n, i);
          let x = (0, c.Z)("duration-[1s] ease-in-out", p[l], {
              "opacity-1 translate-x-[0%]": i,
              "opacity-0 translate-x-[-10%]": !i,
            }),
            g = (0, c.Z)("duration-[1s] ease-in-out", f[l], {
              "opacity-1 translate-x-[0%]": i,
              "opacity-0 translate-x-[10%]": !i,
            });
          return (0, r.jsx)("section", {
            ref: a,
            className: h[l],
            children: (0, r.jsxs)("div", {
              className:
                "flex flex-col gap-8 lg:col-start-2 lg:grid lg:grid-cols-2 lg:gap-20",
              children: [
                (0, r.jsx)("div", {
                  className: "w-full lg:max-w-[18.75rem]",
                  children: (0, r.jsx)("h1", { className: x, children: s }),
                }),
                (0, r.jsx)("div", { className: g, children: t }),
              ],
            }),
          });
        };
      var j = t(1934),
        w = !0,
        b = (e) => {
          let { posts: l, cases: t } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(m.H, {
                title: s.Yb,
                description:
                  "At Tryspikes, we take our mission very seriously, we approach each day with a commitment to be better, continuous improvement is in our blood and soul. We take ownership of our work and strive to deliver the best results to every project.",
              }),
              (0, r.jsx)(j.F, {
                breadCrumb: "ABOUT US",
                title: "Who we are",
                button: "Talk to our team",
                image: "/assets/hero_bars.svg",
                buttonVariant: "primary",
                children:
                  "At Tryspikes, we take our mission very seriously, we approach each day with a commitment to be better, continuous improvement is in our blood and soul. We take ownership of our work and strive to deliver the best results to every project.",
              }),
              (0, r.jsxs)(v, {
                title: (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("p", { children: "Our" }),
                    (0, r.jsx)("p", { children: "Humble Path" }),
                  ],
                }),
                children: [
                  (0, r.jsx)("p", {
                    children:
                      "We started as a product company, we made and launched a new product to the market, we failed but that’s ok, we learn, a lot!",
                  }),
                  (0, r.jsx)("p", {
                    children:
                      "We use that knowledge to start helping other startups and companies developing their software products. From Idea to MVP, from MVP to big project with millions in revenue. That’s our process to work side by side with the teams and be their engineer right hand.",
                  }),
                  (0, r.jsx)("p", {
                    children:
                      "Right now, we are growing at a huge pace. Helping companies from different geographies UAE, US, UK and other countries from UE.",
                  }),
                ],
              }),
              (0, r.jsx)(g, {}),
              (0, r.jsxs)(v, {
                title: "The best today to exceed tomorrow",
                variant: "secondary",
                children: [
                  (0, r.jsx)("p", {
                    children:
                      "The engineering team has deep expertise and we deliver the best possible solution to bring your vision to light and our track record speaks for itself, helped raised millions and helped companies get acquired by 9 figures.",
                  }),
                  (0, r.jsx)("p", {
                    children:
                      "From a history filled with sea adventures to discovering new worlds, as we come from Portugal, we strive to help our clients reach new worlds. We recognize that we no longer need boats, after all distances seem almost a concept of the past, we need technology and that’s why we use technology to solve our clients’ problems.",
                  }),
                ],
              }),
              0 !== t.length && (0, r.jsx)(i.J, { cases: t }),
              0 !== l.length &&
                (0, r.jsx)("div", {
                  className: "hidden lg:block",
                  children: (0, r.jsx)(u.N, {
                    posts: l,
                    children: "Read it from our verge of view",
                  }),
                }),
              (0, r.jsx)(a.s, {
                title: "Your success is just a call away.",
                variant: "primary",
                children:
                  "Talking with us it's free and we will probably give awesome tips.",
              }),
            ],
          });
        };
    },
    9008: function (e, l, t) {
      e.exports = t(2636);
    },
  },
  function (e) {
    e.O(0, [684, 774, 888, 179], function () {
      return e((e.s = 6565));
    }),
      (_N_E = e.O());
  },
]);
