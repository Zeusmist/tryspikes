(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [408],
  {
    5139: function (e, l, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/case-studies/[id]",
        function () {
          return t(7230);
        },
      ]);
    },
    2304: function (e, l, t) {
      "use strict";
      t.d(l, {
        x: function () {
          return u;
        },
      });
      var n = t(5893),
        i = t(5675),
        s = t.n(i);
      let r = (e) => {
        var l, t, i, r, a, o, d, c, x;
        let { ...u } = e;
        return (0, n.jsxs)("div", {
          className:
            "group relative flex max-h-[420px] w-full flex-col bg-blue-300 hover:animate-change-opacity hover:bg-blue-100 lg:w-[259px] lg:bg-blue-100 lg:hover:bg-blue-300",
          children: [
            (0, n.jsx)("div", {
              className:
                "relative left-0 top-0 z-20 block h-[160px] w-full group-hover:hidden",
              children: (0, n.jsx)(s(), {
                src:
                  null !==
                    (o =
                      null == u
                        ? void 0
                        : null === (l = u.mainImage) || void 0 === l
                        ? void 0
                        : l.url) && void 0 !== o
                    ? o
                    : "",
                alt:
                  null !==
                    (d =
                      null == u
                        ? void 0
                        : null === (t = u.mainImage) || void 0 === t
                        ? void 0
                        : t.alt) && void 0 !== d
                    ? d
                    : "",
                fill: !0,
                sizes: "auto",
                style: { objectFit: "cover", fontSize: 0 },
              }),
            }),
            (0, n.jsx)("div", {
              className:
                "relative left-0 top-0 z-10 hidden h-[160px] w-full group-hover:block",
              children: (0, n.jsx)(s(), {
                src:
                  null !==
                    (c =
                      null == u
                        ? void 0
                        : null === (i = u.secondaryImage) || void 0 === i
                        ? void 0
                        : i.url) && void 0 !== c
                    ? c
                    : "",
                alt:
                  null !==
                    (x =
                      null == u
                        ? void 0
                        : null === (r = u.secondaryImage) || void 0 === r
                        ? void 0
                        : r.alt) && void 0 !== x
                    ? x
                    : "",
                fill: !0,
                sizes: "auto",
                style: { objectFit: "cover", fontSize: 0 },
              }),
            }),
            (0, n.jsxs)("div", {
              className: "flex flex-col gap-4 px-4 py-8",
              children: [
                (0, n.jsx)("p", {
                  className:
                    "font-lato text-base font-normal leading-[1.125rem] text-blue-200 group-hover:text-blue-300 lg:text-blue-300 lg:group-hover:text-blue-200",
                  children:
                    null == u
                      ? void 0
                      : null === (a = u.categories) || void 0 === a
                      ? void 0
                      : a.join("\xa0\xa0 \xb7\xa0\xa0"),
                }),
                (0, n.jsx)("h3", {
                  className:
                    "line-clamp-2 h-[50px] font-lato text-xl font-black leading-6 text-white group-hover:text-gray-500 lg:text-gray-500 lg:group-hover:text-white",
                  children: null == u ? void 0 : u.shortTitle,
                }),
                (0, n.jsx)("p", {
                  className:
                    "line-clamp-3 font-lato text-lg font-normal leading-5 text-white group-hover:text-gray-500 lg:text-base lg:leading-[1.125rem] lg:text-gray-500 lg:group-hover:text-white",
                  children: null == u ? void 0 : u.shortDescription,
                }),
              ],
            }),
          ],
        });
      };
      var a = t(4770),
        o = t(5487),
        d = t(4276),
        c = t(1664),
        x = t.n(c);
      let u = (e) => {
        var l;
        let { cases: t } = e;
        return (0, n.jsx)("section", {
          className:
            "grid grid-cols-1 px-6 py-[3rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0 lg:pb-[6rem]",
          children: (0, n.jsxs)("div", {
            className:
              "m-auto flex w-full flex-col lg:col-start-2 lg:items-center lg:justify-center",
            children: [
              (0, n.jsxs)("div", {
                className: "flex flex-row justify-between lg:w-full",
                children: [
                  (0, n.jsx)(a.N, {
                    textAlign: "text-start",
                    category: "CASE STUDIES",
                    title: (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("p", { children: "Still intrigued?" }),
                        (0, n.jsx)("p", { children: "Check more of our" }),
                        (0, n.jsx)("p", { children: "case studies" }),
                      ],
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "hidden lg:mt-[8.5rem] lg:block",
                    children: (0, n.jsxs)(d.Q, {
                      label: "See all button",
                      href: "/case-studies",
                      variant: "link_primary",
                      size: "link",
                      children: [
                        "See all ",
                        (0, n.jsx)(o.J, { variant: "arrow" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "mt-12 grid w-full grid-cols-1 items-center justify-center gap-[0.625rem] lg:grid-cols-3",
                children:
                  null === (l = null == t ? void 0 : t.slice(0, 3)) ||
                  void 0 === l
                    ? void 0
                    : l.map((e) =>
                        (0, n.jsx)(
                          x(),
                          {
                            href: "/case-studies/".concat(
                              null == e ? void 0 : e.slug.current
                            ),
                            className: "m-auto flex w-full lg:w-[259px]",
                            children: (0, n.jsx)(r, { ...e }, e.slug.current),
                          },
                          null == e ? void 0 : e.slug.current
                        )
                      ),
              }),
              (0, n.jsx)("div", {
                className: "m-auto mt-4 w-full lg:hidden",
                children: (0, n.jsxs)(d.Q, {
                  label: "Explore our case studies button",
                  href: "/case-studies",
                  variant: "secondary-darker",
                  size: "full",
                  children: [
                    "Explore our case studies ",
                    (0, n.jsx)(o.J, { variant: "arrow" }),
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
          return d;
        },
        vp: function () {
          return c;
        },
      });
      var n = t(5893);
      (0, t(7360).eI)({
        projectId: "efrpqgx9",
        dataset: "production",
        useCdn: !1,
        apiVersion: "2021-08-31",
      });
      var i = t(6010),
        s = t(5675),
        r = t.n(s),
        a = t(1664),
        o = t.n(a);
      let d = (e, l, t, s, a) => {
          let d = t.length && "strong" === t[0],
            c = t.length && "strong" !== t[0],
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
              var u, g, m, f;
              let e = (0, i.Z)(
                "inline font-lato text-lg leading-[1.125rem] text-gray-400",
                { "font-normal": !d, "font-bold": d }
              );
              if (c) {
                let e =
                  null !==
                    (g =
                      null === (u = s.find((e) => e._key === t[0])) ||
                      void 0 === u
                        ? void 0
                        : u.href) && void 0 !== g
                    ? g
                    : "";
                if (x)
                  return (0, n.jsxs)("div", {
                    className: "mt-8",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "relative hidden w-full justify-center sm:flex lg:ml-[-100px] lg:w-[1000px]",
                        children: (0, n.jsx)(r(), {
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
                        children: (0, n.jsx)(r(), {
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
              if ("bullet" !== a)
                return (0, n.jsx)("p", { className: e, children: l });
              if (d)
                return (0, n.jsx)("p", {
                  className:
                    "inline font-lato text-lg font-bold leading-[1.125rem] text-blue-400",
                  children: l,
                });
              if (c) {
                let e =
                  null !==
                    (f =
                      null === (m = s.find((e) => e._key === t[0])) ||
                      void 0 === m
                        ? void 0
                        : m.href) && void 0 !== f
                    ? f
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
        c = (e, l, t, s, a) => {
          let d = t.length && "strong" === t[0],
            c = t.length && "strong" !== t[0],
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
              var u, g, m, f;
              let e = (0, i.Z)(
                "inline font-lato text-lg leading-[1.125rem] text-gray-400",
                { "font-normal": !d, "font-bold": d }
              );
              if (c) {
                let e =
                  null !==
                    (g =
                      null === (u = s.find((e) => e._key === t[0])) ||
                      void 0 === u
                        ? void 0
                        : u.href) && void 0 !== g
                    ? g
                    : "";
                if (x)
                  return (0, n.jsxs)("div", {
                    className: "mt-8",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "relative hidden w-full justify-center sm:flex lg:ml-[-100px] lg:w-[1000px]",
                        children: (0, n.jsx)(r(), {
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
                        children: (0, n.jsx)(r(), {
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
              if ("bullet" !== a)
                return (0, n.jsx)("p", { className: e, children: l });
              if (d)
                return (0, n.jsx)("p", {
                  className:
                    "inline font-lato text-lg font-bold leading-[1.125rem] text-blue-400",
                  children: l,
                });
              if (c) {
                let e =
                  null !==
                    (f =
                      null === (m = s.find((e) => e._key === t[0])) ||
                      void 0 === m
                        ? void 0
                        : m.href) && void 0 !== f
                    ? f
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
    7230: function (e, l, t) {
      "use strict";
      t.r(l),
        t.d(l, {
          __N_SSG: function () {
            return v;
          },
          default: function () {
            return j;
          },
        });
      var n = t(5893),
        i = t(1370),
        s = t(6010);
      let r = (e, l, t, i) => {
          let s = t.length && "strong" === t[0];
          if ("normal" === e && "bullet" === i)
            return s
              ? (0, n.jsx)("p", {
                  className:
                    "mb-4 font-lato text-xl font-black leading-6 text-blue-500",
                  children: l,
                })
              : (0, n.jsx)("p", {
                  className:
                    "inline font-lato text-lg font-normal leading-[1.125rem] text-gray-400",
                  children: l,
                });
        },
        a = (e) => {
          let { content: l } = e;
          return (0, n.jsx)("section", {
            className:
              "grid grid-cols-1 px-6 py-4 md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
            children: (0, n.jsxs)("div", {
              className: "flex flex-col lg:col-start-2",
              children: [
                (0, n.jsx)("h2", {
                  className:
                    "font-lato text-3xl font-bold leading-9 text-blue-500",
                  children: l.title,
                }),
                (0, n.jsx)("div", {
                  className: "mt-8 space-y-4 overflow-visible",
                  children: l.body.map((e, l) => {
                    let { children: t, style: r, markDefs: a, listItem: o } = e;
                    return (0, n.jsxs)(
                      "div",
                      {
                        className: (0, s.Z)({
                          "px-4 md:px-20": "bullet" === o,
                        }),
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
                                children: (0, i.vp)(r, e.text, e.marks, a, o),
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
                (null == l ? void 0 : l.topics) &&
                  (0, n.jsx)("div", {
                    className: "mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2",
                    children: l.topics.map((e, t) => {
                      var i, a;
                      let { children: o, style: d, listItem: c } = e;
                      return (0, n.jsx)(
                        "div",
                        {
                          className: (0, s.Z)("flex flex-col", {
                            "lg:col-span-1":
                              (null === (i = l.topics) || void 0 === i
                                ? void 0
                                : i.length) !== 3 && 2 !== t,
                            "lg:col-span-2":
                              2 === t &&
                              (null === (a = l.topics) || void 0 === a
                                ? void 0
                                : a.length) === 3,
                          }),
                          children: o.map((e, l) =>
                            (0, n.jsx)(
                              "div",
                              { children: r(d, e.text, e.marks, c) },
                              l
                            )
                          ),
                        },
                        t
                      );
                    }),
                  }),
                l.secondBody &&
                  (0, n.jsx)("div", {
                    className: "mt-8 overflow-visible",
                    children: l.secondBody.map((e, l) => {
                      let {
                        children: t,
                        style: r,
                        markDefs: a,
                        listItem: o,
                      } = e;
                      return (0, n.jsxs)(
                        "div",
                        {
                          className: (0, s.Z)({
                            "px-4 md:px-20": "bullet" === o,
                          }),
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
                                  children: (0, i.vp)(r, e.text, e.marks, a, o),
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
              ],
            }),
          });
        };
      var o = t(2304),
        d = t(9999),
        c = t(3813),
        x = t(5487),
        u = t(4276);
      let g = (e) => {
        let { title: l, categories: t, description: i } = e;
        return (0, n.jsx)("section", {
          className:
            "mb-20 mt-14 flex h-full flex-col overflow-hidden bg-white ",
          children: (0, n.jsx)("div", {
            className:
              "m-auto grid grid-cols-1 px-6 pt-40 md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0 lg:pt-20",
            children: (0, n.jsx)("div", {
              className:
                "m-auto  grid w-full grid-cols-1 gap-20 lg:col-start-2 lg:grid-cols-2",
              children: (0, n.jsxs)("div", {
                className: "z-20 flex w-full flex-col justify-center",
                children: [
                  (0, n.jsxs)(u.Q, {
                    label: "Case Studies",
                    href: "/case-studies",
                    variant: "link_gray_dark",
                    size: "full no-padding",
                    children: [
                      (0, n.jsx)(x.J, { variant: "arrow_left" }),
                      "CASE STUDIES",
                    ],
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "mt-8 font-lato text-base font-normal leading-[1.125rem] text-blue-300",
                    children:
                      null == t ? void 0 : t.join("\xa0\xa0 \xb7\xa0\xa0"),
                  }),
                  (0, n.jsx)("h1", {
                    className:
                      "mt-4 font-lato text-4xl font-black leading-[3.125rem] text-blue-500 lg:w-[602px]",
                    children: l,
                  }),
                  (0, n.jsx)("div", {
                    className: "mt-4",
                    children:
                      null == i
                        ? void 0
                        : i.map((e, l) => {
                            let { children: t } = e;
                            return (0, n.jsx)(
                              "div",
                              {
                                children: t.map((e, l) =>
                                  (0, n.jsx)(
                                    "p",
                                    {
                                      className:
                                        "mt-2 font-lato text-base font-normal leading-[1.125rem] text-gray-400 lg:w-[602px]",
                                      children: e.text,
                                    },
                                    l
                                  )
                                ),
                              },
                              l
                            );
                          }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var m = t(5675),
        f = t.n(m);
      let h = (e) => {
        let { technologies: l } = e;
        return (0, n.jsx)("section", {
          className:
            "grid grid-cols-1 px-6 py-[3rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
          children: (0, n.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center gap-8 text-center lg:col-start-2",
            children: [
              (0, n.jsx)("span", {
                className:
                  "font-lato text-lg font-bold leading-5 text-gray-300",
                children: "Technologies used",
              }),
              (0, n.jsx)("div", {
                className: "mt-8 flex w-full flex-wrap justify-center gap-4",
                children: l.map((e, l) =>
                  (0, n.jsx)(
                    "div",
                    {
                      className:
                        "relative m-auto flex h-[62px] w-[72px] justify-center",
                      children: (0, n.jsx)(f(), {
                        alt: e,
                        src: "/assets/technologies/".concat(e, ".svg"),
                        fill: !0,
                      }),
                    },
                    l
                  )
                ),
              }),
            ],
          }),
        });
      };
      var v = !0,
        j = (e) => {
          var l, t, i, r, x, u, m, v, j, p;
          let { option: b } = e;
          if (!b) return null;
          let N = (0, s.Z)({
            "pb-[3rem]": (null == b ? void 0 : b.related.length) !== 0,
          });
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(d.H, {
                title: "Tryspikes \xb7 ".concat(b.title),
                description: b.shortDescription,
                keywords: b.keywords,
                type: "article",
              }),
              (0, n.jsx)(g, { ...b }),
              (0, n.jsx)("div", {
                className: "relative mb-12 hidden justify-center lg:flex",
                children: (0, n.jsx)(f(), {
                  src:
                    null !==
                      (u =
                        null == b
                          ? void 0
                          : null === (l = b.mainImage) || void 0 === l
                          ? void 0
                          : l.url) && void 0 !== u
                      ? u
                      : "",
                  alt:
                    null !==
                      (m =
                        null == b
                          ? void 0
                          : null === (t = b.mainImage) || void 0 === t
                          ? void 0
                          : t.alt) && void 0 !== m
                      ? m
                      : "",
                  width: 2880,
                  height: 1100,
                  style: { objectFit: "contain", background: "center" },
                }),
              }),
              (0, n.jsx)("div", {
                className:
                  "relative mb-12 flex h-[400px] justify-center lg:hidden",
                children: (0, n.jsx)(f(), {
                  src:
                    null !==
                      (v =
                        null == b
                          ? void 0
                          : null === (i = b.mainImage) || void 0 === i
                          ? void 0
                          : i.url) && void 0 !== v
                      ? v
                      : "",
                  alt:
                    null !==
                      (j =
                        null == b
                          ? void 0
                          : null === (r = b.mainImage) || void 0 === r
                          ? void 0
                          : r.alt) && void 0 !== j
                      ? j
                      : "",
                  fill: !0,
                  style: { objectFit: "cover", background: "center" },
                }),
              }),
              (0, n.jsx)("div", {
                className: N,
                children:
                  null == b
                    ? void 0
                    : null === (x = b.content) || void 0 === x
                    ? void 0
                    : x.map((e, l) =>
                        (0, n.jsx)(
                          "div",
                          {
                            children:
                              2 === l
                                ? (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsx)(h, {
                                        technologies:
                                          null !==
                                            (p =
                                              null == b
                                                ? void 0
                                                : b.technologies) &&
                                          void 0 !== p
                                            ? p
                                            : [],
                                      }),
                                      (0, n.jsx)(a, { content: e }),
                                    ],
                                  })
                                : (0, n.jsx)(a, { content: e }),
                          },
                          l
                        )
                      ),
              }),
              (null == b ? void 0 : b.related.length) !== 0 &&
                (0, n.jsx)(o.x, { cases: null == b ? void 0 : b.related }),
              (0, n.jsx)(c.C, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [970, 819, 774, 888, 179], function () {
      return e((e.s = 5139));
    }),
      (_N_E = e.O());
  },
]);
