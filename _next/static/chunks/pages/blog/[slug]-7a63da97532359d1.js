(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [492],
  {
    8165: function (e, l, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog/[slug]",
        function () {
          return t(5);
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
      var n = t(5893),
        r = t(7294),
        a = t(5418),
        i = t(5487),
        s = t(4276),
        o = t(6010);
      let c = {
        primary: (0, o.Z)(
          "grid w-full grid-cols-1 bg-blue-300 px-6 py-[3rem] text-center md:px-24 lg:h-[422px] lg:grid-cols-[1fr,800px,1fr] lg:p-0"
        ),
        secondary: (0, o.Z)(
          "grid w-full grid-cols-1 bg-blue-200 px-6 py-[3rem] text-center md:px-24 lg:h-[422px] lg:grid-cols-[1fr,800px,1fr] lg:px-0"
        ),
      };
      var d = t(1163);
      let x = (e) => {
        let { variant: l, title: t, children: o } = e,
          x = (0, d.useRouter)(),
          [g, u] = (0, r.useState)((0, a.eO)());
        return (
          (0, r.useEffect)(() => {
            u((0, a.eO)({ query: x.query }));
          }, [x.query]),
          (0, n.jsx)("section", {
            className: c[l],
            children: (0, n.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center lg:col-start-2",
              children: [
                (0, n.jsx)("h2", {
                  className:
                    "max-w-[450px] font-lato text-4xl font-black leading-[3.125rem] text-white",
                  children: t,
                }),
                (0, n.jsx)("div", {
                  className: "mt-4 max-w-[500px]",
                  children: (0, n.jsx)("p", {
                    className:
                      "font-lato text-lg font-normal leading-5 text-white lg:text-base lg:leading-[1.125rem]",
                    children: o,
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "mt-12",
                  children: (0, n.jsxs)(s.Q, {
                    id: "schedule-meeting",
                    label: "Schedule a meeting",
                    href: g,
                    variant: "tertiary",
                    children: [
                      "Schedule a meeting",
                      (0, n.jsx)(i.J, { variant: "arrow_up_right" }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    5437: function (e, l, t) {
      "use strict";
      t.d(l, {
        N: function () {
          return o;
        },
      });
      var n = t(5893),
        r = t(6318),
        a = t(4770),
        i = t(5487),
        s = t(4276);
      let o = (e) => {
        var l;
        let { posts: t, children: o } = e;
        return (0, n.jsx)("section", {
          className:
            "grid grid-cols-1 px-6 pb-[6rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
          children: (0, n.jsxs)("div", {
            className:
              "m-auto flex w-full flex-col lg:col-start-2 lg:items-center lg:justify-center",
            children: [
              (0, n.jsxs)("div", {
                className: "flex flex-row justify-between lg:w-full",
                children: [
                  (0, n.jsx)("div", {
                    className: "max-w-[200px] lg:max-w-[340px]",
                    children: (0, n.jsx)(a.N, {
                      textAlign: "text-start",
                      category: "BLOG",
                      title: o,
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "mt-auto hidden pb-1 align-bottom lg:flex",
                    children: (0, n.jsxs)(s.Q, {
                      label: "See all button",
                      href: "/blog",
                      variant: "link_primary",
                      size: "full no-padding",
                      children: [
                        "See all ",
                        (0, n.jsx)(i.J, { variant: "arrow" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "mt-12 grid w-full grid-cols-1 gap-[0.625rem] lg:grid-cols-3",
                children:
                  null === (l = null == t ? void 0 : t.slice(0, 3)) ||
                  void 0 === l
                    ? void 0
                    : l.map((e, l) =>
                        (0, n.jsx)(
                          "div",
                          {
                            className: "m-auto flex w-full lg:w-[280px]",
                            children: (0, n.jsx)(r.$, { ...e }, e.slug.current),
                          },
                          l
                        )
                      ),
              }),
              (0, n.jsx)("div", {
                className: "m-auto mt-4 w-full lg:hidden",
                children: (0, n.jsxs)(s.Q, {
                  label: "Explore our blog posts button",
                  href: "/blog",
                  variant: "secondary-darker",
                  size: "full",
                  children: [
                    "Explore our blog posts ",
                    (0, n.jsx)(i.J, { variant: "arrow" }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    1370: function (e, l, t) {
      "use strict";
      t.d(l, {
        aP: function () {
          return c;
        },
        vp: function () {
          return d;
        },
      });
      var n = t(5893);
      (0, t(7360).eI)({
        projectId: "efrpqgx9",
        dataset: "production",
        useCdn: !1,
        apiVersion: "2021-08-31",
      });
      var r = t(6010),
        a = t(5675),
        i = t.n(a),
        s = t(1664),
        o = t.n(s);
      let c = (e, l, t, a, s) => {
          let c = t.length && "strong" === t[0],
            d = t.length && "strong" !== t[0],
            x = l.includes("_image");
          switch (e) {
            case "h1":
              return (0, n.jsx)("h2", {
                className:
                  "mb-4 mt-12 font-lato text-[2.125rem] font-bold leading-[2.75rem] text-blue-500",
                children: l,
              });
            case "h2":
              return (0, n.jsx)("h3", {
                className:
                  "mb-1 mt-10 font-lato text-xl font-semibold leading-6 text-gray-500",
                children: l,
              });
            case "h3":
              return (0, n.jsx)("h4", {
                className:
                  "font-lato text-lg font-medium leading-5 text-gray-500",
                children: l,
              });
            case "normal": {
              var g, u, f, m;
              let e = (0, r.Z)(
                "inline font-lato text-lg leading-[1.125rem] text-gray-400",
                { "font-normal": !c, "font-bold": c }
              );
              if (d) {
                let e =
                  null !==
                    (u =
                      null === (g = a.find((e) => e._key === t[0])) ||
                      void 0 === g
                        ? void 0
                        : g.href) && void 0 !== u
                    ? u
                    : "";
                if (x)
                  return (0, n.jsxs)("div", {
                    className: "mt-8",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "relative hidden w-full justify-center sm:flex lg:ml-[-100px] lg:w-[1000px]",
                        children: (0, n.jsx)(i(), {
                          src: e,
                          alt: l,
                          width: 1920,
                          height: 1080,
                          style: { objectFit: "contain" },
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "relative flex h-[400px] w-full justify-center sm:hidden",
                        children: (0, n.jsx)(i(), {
                          src: e,
                          alt: l,
                          fill: !0,
                          style: { objectFit: "cover", background: "center" },
                        }),
                      }),
                    ],
                  });
                return (0, n.jsx)(o(), {
                  href: e,
                  className:
                    "inline font-lato text-lg font-normal leading-[1.125rem] text-blue-200 hover:text-blue-300",
                  children: l,
                });
              }
              if ("bullet" !== s)
                return (0, n.jsx)("p", { className: e, children: l });
              if (c)
                return (0, n.jsx)("p", {
                  className:
                    "inline font-lato text-lg font-bold leading-[1.125rem] text-blue-400",
                  children: l,
                });
              if (d) {
                let e =
                  null !==
                    (m =
                      null === (f = a.find((e) => e._key === t[0])) ||
                      void 0 === f
                        ? void 0
                        : f.href) && void 0 !== m
                    ? m
                    : "";
                return (0, n.jsx)(o(), {
                  href: e,
                  className:
                    "inline font-lato text-lg font-normal leading-[1.125rem] text-blue-200 hover:text-blue-300",
                  children: l,
                });
              }
              return (0, n.jsx)("p", {
                className:
                  "inline font-lato text-lg font-normal leading-[1.125rem] text-gray-400",
                children: l,
              });
            }
            case "blockquote":
              return (0, n.jsx)("p", {
                className:
                  "font-lato text-xs font-normal leading-3 text-gray-400",
                children: l,
              });
          }
        },
        d = (e, l, t, a, s) => {
          let c = t.length && "strong" === t[0],
            d = t.length && "strong" !== t[0],
            x = l.includes("_image");
          switch (e) {
            case "h1":
              return (0, n.jsx)("h3", {
                className:
                  "font-lato text-xl font-normal leading-[1.875rem] text-blue-500",
                children: l,
              });
            case "h2":
              return (0, n.jsx)("h4", {
                className:
                  "font-lato text-lg font-black leading-6 text-blue-500",
                children: l,
              });
            case "h3":
              return (0, n.jsx)("h5", {
                className:
                  "font-lato text-base font-black leading-5 text-gray-500",
                children: l,
              });
            case "normal": {
              var g, u, f, m;
              let e = (0, r.Z)(
                "inline font-lato text-lg leading-[1.125rem] text-gray-400",
                { "font-normal": !c, "font-bold": c }
              );
              if (d) {
                let e =
                  null !==
                    (u =
                      null === (g = a.find((e) => e._key === t[0])) ||
                      void 0 === g
                        ? void 0
                        : g.href) && void 0 !== u
                    ? u
                    : "";
                if (x)
                  return (0, n.jsxs)("div", {
                    className: "mt-8",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "relative hidden w-full justify-center sm:flex lg:ml-[-100px] lg:w-[1000px]",
                        children: (0, n.jsx)(i(), {
                          src: e,
                          alt: l,
                          width: 1920,
                          height: 1080,
                          style: { objectFit: "contain" },
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "relative flex h-[400px] w-full justify-center sm:hidden",
                        children: (0, n.jsx)(i(), {
                          src: e,
                          alt: l,
                          fill: !0,
                          style: { objectFit: "cover", background: "center" },
                        }),
                      }),
                    ],
                  });
                return (0, n.jsx)(o(), {
                  href: e,
                  className:
                    "inline font-lato text-lg font-normal leading-[1.125rem] text-blue-200 hover:text-blue-300",
                  children: l,
                });
              }
              if ("bullet" !== s)
                return (0, n.jsx)("p", { className: e, children: l });
              if (c)
                return (0, n.jsx)("p", {
                  className:
                    "inline font-lato text-lg font-bold leading-[1.125rem] text-blue-400",
                  children: l,
                });
              if (d) {
                let e =
                  null !==
                    (m =
                      null === (f = a.find((e) => e._key === t[0])) ||
                      void 0 === f
                        ? void 0
                        : f.href) && void 0 !== m
                    ? m
                    : "";
                return (0, n.jsx)(o(), {
                  href: e,
                  className:
                    "inline font-lato text-lg font-normal leading-[1.125rem] text-blue-200 hover:text-blue-300",
                  children: l,
                });
              }
              return (0, n.jsx)("p", {
                className:
                  "inline font-lato text-lg font-normal leading-[1.125rem] text-gray-400",
                children: l,
              });
            }
            case "blockquote":
              return (0, n.jsx)("p", {
                className:
                  "font-lato text-xs font-normal leading-3 text-gray-400",
                children: l,
              });
          }
        };
    },
    5: function (e, l, t) {
      "use strict";
      t.r(l),
        t.d(l, {
          __N_SSG: function () {
            return p;
          },
          default: function () {
            return j;
          },
        });
      var n = t(5893),
        r = t(3569),
        a = t(1370),
        i = t(9039),
        s = t(6010),
        o = t(5675),
        c = t.n(o);
      let d = (e) => {
        var l, t, o;
        let { body: d, publishedAt: x, author: g } = e;
        return (0, n.jsx)("section", {
          className:
            "grid grid-cols-1 px-6 py-4 pb-[3rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
          children: (0, n.jsxs)("div", {
            className: "flex flex-col lg:col-start-2",
            children: [
              (0, n.jsx)("p", {
                className:
                  "font-lato text-base font-normal leading-[1.125rem] text-blue-400",
                children: (0, r.w)(x),
              }),
              (0, n.jsx)("div", {
                className: "mt-8 space-y-4 overflow-visible",
                children: d.map((e, l) => {
                  let { children: t, style: r, markDefs: i, listItem: o } = e;
                  return (0, n.jsxs)(
                    "div",
                    {
                      className: (0, s.Z)({ "px-4 md:px-20": "bullet" === o }),
                      children: [
                        "bullet" === o &&
                          (0, n.jsx)("span", {
                            className:
                              "inline pr-1 font-lato text-lg font-bold leading-[1.125rem] text-blue-400",
                            children: "•",
                          }),
                        t.map((e, l) =>
                          (0, n.jsx)(
                            "div",
                            {
                              className: "inline",
                              children: (0, a.aP)(r, e.text, e.marks, i, o),
                            },
                            l
                          )
                        ),
                      ],
                    },
                    l
                  );
                }),
              }),
              (0, n.jsxs)("div", {
                className: "relative mt-8 flex flex-row items-center gap-2",
                children: [
                  (null === (l = g.image) || void 0 === l ? void 0 : l.url)
                    ? (0, n.jsx)(c(), {
                        alt: null !== (t = g.name) && void 0 !== t ? t : "",
                        src:
                          null !== (o = g.image.url) && void 0 !== o ? o : "",
                        width: 42,
                        height: 42,
                        style: { objectFit: "contain" },
                      })
                    : (0, n.jsx)(i.Z, { width: 42, height: 42 }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, n.jsx)("p", {
                        className:
                          "font-lato text-lg font-bold leading-5 text-blue-300",
                        children: g.name,
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "font-lato text-base font-normal leading-[1.125rem] text-gray-300",
                        children: g.bio && g.bio[0].children[0].text,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var x = t(7198),
        g = t(5437),
        u = t(9999),
        f = t(5487),
        m = t(4276);
      let h = (e) => {
        let { title: l, category: t } = e;
        return (0, n.jsx)("section", {
          className:
            "flex h-full flex-col overflow-hidden bg-white pb-[4rem] lg:h-[516px] lg:py-0",
          children: (0, n.jsx)("div", {
            className:
              "grid grid-cols-1 px-6 pt-40 md:px-24 lg:m-auto lg:grid-cols-[1fr,800px,1fr] lg:px-0 lg:pt-20",
            children: (0, n.jsx)("div", {
              className:
                "grid w-full grid-cols-1 gap-20 lg:col-start-2 lg:m-auto lg:grid-cols-2",
              children: (0, n.jsxs)("div", {
                className: "z-20 flex w-full flex-col lg:justify-center",
                children: [
                  (0, n.jsxs)(m.Q, {
                    label: "Blog back",
                    href: "/blog",
                    variant: "link_gray_dark",
                    size: "full no-padding",
                    children: [
                      (0, n.jsx)(f.J, { variant: "arrow_left" }),
                      "BLOG",
                    ],
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "mt-8 font-lato text-base font-normal leading-[1.125rem] text-blue-300",
                    children: t,
                  }),
                  (0, n.jsx)("h1", {
                    className:
                      "mt-4 font-lato text-4xl font-black leading-[3.125rem] text-blue-500 lg:w-[602px]",
                    children: l,
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var p = !0,
        j = (e) => {
          var l, t, r, a;
          let { post: i } = e;
          return i
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(u.H, {
                    title: "Tryspikes \xb7 ".concat(i.title),
                    description: i.shortDescription,
                    keywords: i.keywords,
                    type: "article",
                    blog: i,
                  }),
                  (0, n.jsx)(h, { title: i.title, category: i.category.title }),
                  (0, n.jsx)("div", {
                    className: "relative mb-12 h-[400px] w-full",
                    children: (0, n.jsx)(c(), {
                      src:
                        null !==
                          (r =
                            null == i
                              ? void 0
                              : null === (l = i.mainImage) || void 0 === l
                              ? void 0
                              : l.url) && void 0 !== r
                          ? r
                          : "",
                      alt:
                        null !==
                          (a =
                            null == i
                              ? void 0
                              : null === (t = i.mainImage) || void 0 === t
                              ? void 0
                              : t.alt) && void 0 !== a
                          ? a
                          : "",
                      fill: !0,
                      style: { objectFit: "cover", background: "center" },
                    }),
                  }),
                  (0, n.jsx)(d, { ...i }),
                  0 !== i.related.length &&
                    (0, n.jsx)(g.N, {
                      posts: i.related,
                      children: "More articles from our blog",
                    }),
                  (0, n.jsx)(x.s, {
                    title: "It seems you’re ready to take the next step",
                    variant: "secondary",
                    children:
                      "Talking with us it's free and we will probably give awesome tips.",
                  }),
                ],
              })
            : null;
        };
    },
  },
  function (e) {
    e.O(0, [970, 684, 774, 888, 179], function () {
      return e((e.s = 8165));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[slug]-7a63da97532359d1.js.map
