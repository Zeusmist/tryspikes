(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [407],
  {
    7951: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/case-studies",
        function () {
          return n(9252);
        },
      ]);
    },
    7198: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return u;
        },
      });
      var o = n(5893),
        s = n(7294),
        l = n(5418),
        r = n(5487),
        a = n(4276),
        i = n(6010);
      let c = {
        primary: (0, i.Z)(
          "grid w-full grid-cols-1 bg-blue-300 px-6 py-[3rem] text-center md:px-24 lg:h-[422px] lg:grid-cols-[1fr,800px,1fr] lg:p-0"
        ),
        secondary: (0, i.Z)(
          "grid w-full grid-cols-1 bg-blue-200 px-6 py-[3rem] text-center md:px-24 lg:h-[422px] lg:grid-cols-[1fr,800px,1fr] lg:px-0"
        ),
      };
      var g = n(1163);
      let u = (e) => {
        let { variant: t, title: n, children: i } = e,
          u = (0, g.useRouter)(),
          [p, d] = (0, s.useState)((0, l.eO)());
        return (
          (0, s.useEffect)(() => {
            d((0, l.eO)({ query: u.query }));
          }, [u.query]),
          (0, o.jsx)("section", {
            className: c[t],
            children: (0, o.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center lg:col-start-2",
              children: [
                (0, o.jsx)("h2", {
                  className:
                    "max-w-[450px] font-lato text-4xl font-black leading-[3.125rem] text-white",
                  children: n,
                }),
                (0, o.jsx)("div", {
                  className: "mt-4 max-w-[500px]",
                  children: (0, o.jsx)("p", {
                    className:
                      "font-lato text-lg font-normal leading-5 text-white lg:text-base lg:leading-[1.125rem]",
                    children: i,
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "mt-12",
                  children: (0, o.jsxs)(a.Q, {
                    id: "schedule-meeting",
                    label: "Schedule a meeting",
                    href: p,
                    variant: "tertiary",
                    children: [
                      "Schedule a meeting",
                      (0, o.jsx)(r.J, { variant: "arrow_up_right" }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    9999: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return g;
        },
      });
      var o = n(5893),
        s = n(6295),
        l = n(9008),
        r = n.n(l),
        a = n(1163);
      let i = () => ({
          __html:
            '{\n    "@context": "https://schema.org/",\n    "@type": "WebSite",\n    "name": "Tryspikes",\n    "url": '
              .concat(
                "https://tryspikes.com",
                ',\n    "image": "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",\n    "description": '
              )
              .concat(
                s.cz,
                ',\n    "organization": {\n      "@type": "Organization",\n      "name": "Tryspikes",\n      "logo": "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png"\n    },\n    "publisher": {\n      "@type": "Organization",\n      "name": "Tryspikes",\n      "logo": "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png"\n    },\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": '
              )
              .concat("https://tryspikes.com", "\n    }\n  }\n"),
        }),
        c = (e) => ({
          __html:
            '{\n    "@context": "https://schema.org/",\n    "@type": "BlogPosting",\n    "headline": '
              .concat(e.title, ',\n    "datePublished": ')
              .concat(
                e.publishedAt,
                ',\n    "image": {\n      "@type": "ImageObject",\n      "url": '
              )
              .concat(e.mainImage.url, '\n    },\n    "description": ')
              .concat(
                e.shortDescription,
                ',\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": '
              )
              .concat("https://tryspikes.com", "/blog/")
              .concat(e.slug, ',\n      "name": ')
              .concat(
                e.title,
                '\n      },\n    "organization": {\n      "@type": "Organization",\n      "name": "Tryspikes",\n      "logo": "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png"\n    },\n    "publisher": {\n      "@type": "Organization",\n      "name": "Tryspikes",\n      "logo": "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png"\n    },\n  }\n'
              ),
        }),
        g = (e) => {
          let {
              title: t = s.ye,
              keywords: n = s.Om,
              description: l = s.cz,
              type: g = "website",
              blog: u,
            } = e,
            p = (0, a.useRouter)();
          return (0, o.jsxs)(r(), {
            children: [
              (0, o.jsx)("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
              }),
              (0, o.jsx)("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
              }),
              (0, o.jsx)("meta", { charSet: "utf-8" }),
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
              }),
              (0, o.jsx)("meta", { name: "description", content: l }),
              (0, o.jsx)("meta", { name: "keywords", content: n }),
              (0, o.jsx)("meta", {
                name: "apple-mobile-web-app-title",
                content: t,
              }),
              (0, o.jsx)("meta", { name: "application-name", content: t }),
              (0, o.jsx)("meta", { property: "og:type", content: g }),
              (0, o.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
              (0, o.jsx)("meta", {
                property: "og:url",
                content: "".concat("https://tryspikes.com").concat(p.asPath),
              }),
              (0, o.jsx)("meta", { property: "og:title", content: t }),
              (0, o.jsx)("meta", { property: "og:description", content: l }),
              (0, o.jsx)("meta", {
                property: "og:image",
                content:
                  "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, o.jsx)("meta", { property: "twitter:title", content: t }),
              (0, o.jsx)("meta", {
                property: "twitter:card",
                content: "summary",
              }),
              (0, o.jsx)("meta", {
                property: "twitter:site",
                content: "@tryspikes",
              }),
              (0, o.jsx)("meta", {
                property: "twitter:description",
                content: l,
              }),
              (0, o.jsx)("meta", {
                property: "twitter:image",
                content:
                  "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, o.jsx)("meta", { name: "robots", content: "index" }),
              (0, o.jsx)("link", {
                rel: "canonical",
                href: "".concat("https://tryspikes.com").concat(p.asPath),
              }),
              (0, o.jsx)("link", {
                rel: "apple-touch-icon",
                href: "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, o.jsx)("link", {
                rel: "icon",
                type: "image/png",
                href: "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, o.jsx)("title", { children: t }),
              (0, o.jsx)(
                "script",
                {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: u ? c(u) : i(),
                },
                "schemaOrg"
              ),
            ],
          });
        };
    },
    6295: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bj: function () {
          return a;
        },
        Om: function () {
          return l;
        },
        Yb: function () {
          return g;
        },
        cz: function () {
          return s;
        },
        hR: function () {
          return r;
        },
        oz: function () {
          return i;
        },
        qo: function () {
          return c;
        },
        ye: function () {
          return o;
        },
      });
      let o = "Tryspikes \xb7 Custom software development",
        s =
          "Everybody talks about amazing products. We build them. Software Development Agency specialized in building High Performance and Resilient Software.",
        l =
          "software development agency, mvp software development, react native development, tryspikes, ai & ml development agency, nearshoring software agency, nextjs software development, mlops, devops",
        r = "Tryspikes \xb7 Services",
        a = "Tryspikes \xb7 Blog",
        i = "Tryspikes \xb7 Case Studies",
        c = "Tryspikes \xb7 Contact Us",
        g = "Tryspikes \xb7 About Us";
    },
    8903: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return s;
        },
      });
      var o = n(7294);
      let s = (e, t, n) => {
        (0, o.useEffect)(() => {
          let o = () => {
            if (!n && window && e.current) {
              let { top: n } = e.current.getBoundingClientRect();
              n <= window.innerHeight - 200 && t(!0);
            }
          };
          return (
            o(),
            window.addEventListener("scroll", o),
            () => {
              window.removeEventListener("scroll", o);
            }
          );
        }, [e, t, n]);
      };
    },
    9252: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return w;
          },
          default: function () {
            return b;
          },
        });
      var o = n(5893),
        s = n(6295),
        l = n(7198);
      let r = () =>
        (0, o.jsx)("section", {
          className: "flex h-full flex-col overflow-hidden bg-white py-32 ",
          children: (0, o.jsx)("div", {
            className:
              "m-auto grid grid-cols-1 px-6 pt-28 md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
            children: (0, o.jsxs)("div", {
              className: "flex max-w-[602px] flex-col lg:col-start-2",
              children: [
                (0, o.jsx)("div", {
                  className: "mb-2",
                  children: (0, o.jsx)("h5", {
                    className:
                      "font-lato text-lg font-bold leading-5 text-blue-200",
                    children: "CASE STUDIES",
                  }),
                }),
                (0, o.jsx)("h1", {
                  className:
                    "mt-8 font-lato text-4xl font-black leading-[3.125rem] text-blue-500",
                  children:
                    "Discover how we turn challenges into success stories.",
                }),
                (0, o.jsx)("p", {
                  className:
                    "mt-4 font-lato text-base font-normal leading-[1.125rem] text-gray-400",
                  children:
                    "Here we feature a collection of success case studies that demonstrate our ability to deliver exceptional results across a range of industries and technologies. These case studies provide valuable insights into our development process, our approach to problem-solving, and the impact of our work on our clients businesses.",
                }),
              ],
            }),
          }),
        });
      var a = n(7294),
        i = n(8903),
        c = n(5487),
        g = n(4276),
        u = n(6010),
        p = n(5675),
        d = n.n(p),
        x = n(1664),
        m = n.n(x);
      let h = (e) => {
          var t, n, s, l, r, a, i, c, g;
          let { transition: p, caseStudy: x, index: h } = e;
          return (0, o.jsxs)(
            m(),
            {
              href: "/case-studies/".concat(
                null == x ? void 0 : x.slug.current
              ),
              className: (0, u.Z)(
                "group relative flex cursor-pointer flex-col duration-[1s] ease-in-out hover:animate-change-opacity lg:h-[280px] lg:flex-row ",
                {
                  "translate-y-[0%] opacity-1": p,
                  "translate-y-[-10%] opacity-0": !p,
                  "delay-[100ms]": 1 === h,
                  "delay-[200ms]": 2 === h,
                  "delay-[300ms]": 3 === h,
                  "delay-[400ms]": 4 === h,
                }
              ),
              children: [
                (0, o.jsx)("div", {
                  className:
                    "relative left-0 top-0 z-20 block h-[160px] w-full group-hover:hidden lg:h-[280px] lg:max-w-[540px]",
                  children: (0, o.jsx)(d(), {
                    src:
                      null !==
                        (a =
                          null == x
                            ? void 0
                            : null === (t = x.mainImage) || void 0 === t
                            ? void 0
                            : t.url) && void 0 !== a
                        ? a
                        : "",
                    alt:
                      null !==
                        (i =
                          null == x
                            ? void 0
                            : null === (n = x.mainImage) || void 0 === n
                            ? void 0
                            : n.alt) && void 0 !== i
                        ? i
                        : "",
                    fill: !0,
                    sizes: "auto",
                    style: { objectFit: "cover", fontSize: 0 },
                  }),
                }),
                (0, o.jsx)("div", {
                  className:
                    "relative left-0 top-0 z-10 hidden h-[160px] w-full group-hover:block lg:h-[280px] lg:max-w-[540px]",
                  children: (0, o.jsx)(d(), {
                    src:
                      null !==
                        (c =
                          null == x
                            ? void 0
                            : null === (s = x.secondaryImage) || void 0 === s
                            ? void 0
                            : s.url) && void 0 !== c
                        ? c
                        : "",
                    alt:
                      null !==
                        (g =
                          null == x
                            ? void 0
                            : null === (l = x.secondaryImage) || void 0 === l
                            ? void 0
                            : l.alt) && void 0 !== g
                        ? g
                        : "",
                    fill: !0,
                    sizes: "auto",
                    style: { objectFit: "cover", fontSize: 0 },
                  }),
                }),
                (0, o.jsxs)("div", {
                  className:
                    "flex w-full flex-col bg-blue-300 px-4 py-8 group-hover:bg-blue-100 lg:w-[260px] lg:bg-blue-100 lg:p-8 lg:group-hover:bg-blue-300",
                  children: [
                    (0, o.jsx)("span", {
                      className:
                        "font-lato text-base font-normal leading-[1.125rem] text-blue-200 group-hover:text-blue-300 lg:text-blue-300 lg:group-hover:text-blue-200",
                      children:
                        null === (r = x.categories) || void 0 === r
                          ? void 0
                          : r.join("\xa0\xa0 \xb7\xa0\xa0"),
                    }),
                    (0, o.jsx)("h2", {
                      className:
                        "mt-6 line-clamp-3 min-h-[50px] font-lato text-xl font-black leading-6 text-white group-hover:text-gray-500 lg:text-gray-500 lg:group-hover:text-white",
                      children: null == x ? void 0 : x.shortTitle,
                    }),
                    (0, o.jsx)("p", {
                      className:
                        "mt-auto line-clamp-4 font-lato text-lg font-normal leading-5 text-white group-hover:text-gray-500 lg:text-base lg:leading-[1.125rem] lg:text-gray-500 lg:group-hover:text-white",
                      children: null == x ? void 0 : x.shortDescription,
                    }),
                  ],
                }),
              ],
            },
            null == x ? void 0 : x.slug.current
          );
        },
        v = (e) => {
          let { cases: t, hasMoreCases: n, page: s } = e,
            l = (0, a.useRef)(null),
            [r, p] = (0, a.useState)(!1);
          return (
            (0, i.a)(l, p, r),
            (0, o.jsx)("section", {
              ref: l,
              className:
                "grid grid-cols-1 px-6 pb-[3rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
              children: (0, o.jsxs)("div", {
                className: "flex flex-col gap-14 lg:col-start-2",
                children: [
                  t.map((e, t) =>
                    (0, o.jsx)(
                      h,
                      { index: t, caseStudy: e, transition: r },
                      e.slug.current
                    )
                  ),
                  (0, o.jsxs)("div", {
                    className: (0, u.Z)(
                      "flex flex-col justify-between delay-[900ms] duration-[1s] ease-in-out lg:flex-row",
                      {
                        "translate-y-[0%] opacity-1": r,
                        "translate-y-[-10%] opacity-0": !r,
                      }
                    ),
                    children: [
                      0 !== s &&
                        (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)("div", {
                              className: "m-auto my-4 flex w-full lg:hidden",
                              children: (0, o.jsxs)(g.Q, {
                                label: "Previous page button",
                                variant: "secondary",
                                size: "full",
                                href: "/case-studies".concat(
                                  1 === s ? "" : "?page=".concat(s - 1)
                                ),
                                children: [
                                  (0, o.jsx)(c.J, { variant: "arrow_left" }),
                                  " Previous Page",
                                ],
                              }),
                            }),
                            (0, o.jsx)("div", {
                              className: "mr-auto hidden lg:flex",
                              children: (0, o.jsxs)(g.Q, {
                                label: "Previous page button",
                                variant: "link_info",
                                size: "full no-padding",
                                href: "/case-studies".concat(
                                  1 === s ? "" : "?page=".concat(s - 1)
                                ),
                                children: [
                                  (0, o.jsx)(c.J, { variant: "arrow_left" }),
                                  "Previous Page",
                                ],
                              }),
                            }),
                          ],
                        }),
                      n &&
                        (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)("div", {
                              className: "m-auto my-4 flex w-full lg:hidden",
                              children: (0, o.jsxs)(g.Q, {
                                label: "Next page button",
                                variant: "secondary",
                                size: "full",
                                href: "/case-studies?page=".concat(s + 1),
                                children: [
                                  "Next Page ",
                                  (0, o.jsx)(c.J, { variant: "arrow" }),
                                ],
                              }),
                            }),
                            (0, o.jsx)("div", {
                              className: "ml-auto hidden lg:flex",
                              children: (0, o.jsxs)(g.Q, {
                                label: "Next page button",
                                variant: "link_info",
                                size: "full no-padding",
                                href: "/case-studies?page=".concat(s + 1),
                                children: [
                                  "Next Page ",
                                  (0, o.jsx)(c.J, { variant: "arrow" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
      var f = n(9999),
        w = !0,
        b = (e) => {
          let { cases: t, page: n, hasMoreCases: a } = e;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(f.H, {
                title: s.oz,
                description:
                  "Here we feature a collection of success case studies that demonstrate our ability to deliver exceptional results across a range of industries and technologies. These case studies provide valuable insights into our development process, our approach to problem-solving, and the impact of our work on our clients businesses.",
              }),
              (0, o.jsx)(r, {}),
              (0, o.jsx)(v, { cases: t, hasMoreCases: a, page: n }, n),
              (0, o.jsx)(l.s, {
                title: "Make your project a success case too",
                variant: "primary",
                children:
                  "Whether you are looking to develop a new product, enhance an existing one, or optimize your business processes, we’re the go to team.",
              }),
            ],
          });
        };
    },
    9008: function (e, t, n) {
      e.exports = n(2636);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 7951));
    }),
      (_N_E = e.O());
  },
]);
