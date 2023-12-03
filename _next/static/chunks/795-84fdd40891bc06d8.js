(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [795],
  {
    2978: function (e, t, n) {
      "use strict";
      var l,
        r = n(7294),
        a = ["title", "titleId"];
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var l in n)
                  Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
              }
              return e;
            }).apply(this, arguments);
      }
      t.Z = function (e) {
        var t = e.title,
          n = e.titleId,
          s = (function (e, t) {
            if (null == e) return {};
            var n,
              l,
              r = (function (e, t) {
                if (null == e) return {};
                var n,
                  l,
                  r = {},
                  a = Object.keys(e);
                for (l = 0; l < a.length; l++)
                  (n = a[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (l = 0; l < a.length; l++)
                (n = a[l]),
                  !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
            }
            return r;
          })(e, a);
        return r.createElement(
          "svg",
          o(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 40,
              height: 30,
              fill: "none",
              viewBox: "0 0 40 29",
              "aria-labelledby": n,
            },
            s
          ),
          t ? r.createElement("title", { id: n }, t) : null,
          l ||
            (l = r.createElement("path", {
              fill: "#FFB800",
              d: "M14.75.5H3.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h11.25V20a6 6 0 0 1-6 6 1.5 1.5 0 1 0 0 3 9.01 9.01 0 0 0 9-9V3.5a3 3 0 0 0-3-3Zm0 15H3.5v-12h11.25v12ZM36.5.5H25.25a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3H36.5V20a6 6 0 0 1-6 6 1.5 1.5 0 1 0 0 3 9.01 9.01 0 0 0 9-9V3.5a3 3 0 0 0-3-3Zm0 15H25.25v-12H36.5v12Z",
            }))
        );
      };
    },
    4770: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return a;
        },
      });
      var l = n(5893),
        r = n(6010);
      let a = (e) => {
        let {
            category: t,
            textAlign: n,
            title: a,
            children: o,
            titleBlue: s = !1,
          } = e,
          i = (0, r.Z)("flex flex-col", { [null != n ? n : ""]: !!n }),
          c = (0, r.Z)("mt-8", {
            "lg:pr-14":
              !n || "text-start" === n || "text-start lg:text-center" === n,
          }),
          g = (0, r.Z)(
            "font-lato text-3xl font-bold leading-9 lg:text-4xl lg:leading-[3.125rem]",
            { "text-gray-500": !s, "text-blue-500": s }
          );
        return (0, l.jsxs)("div", {
          className: i,
          children: [
            (0, l.jsx)("div", {
              className: "mb-2",
              children: (0, l.jsx)("span", {
                className:
                  "font-lato text-lg font-bold leading-5 text-blue-200",
                children: t,
              }),
            }),
            (0, l.jsx)("h2", { className: g, children: a }),
            o &&
              (0, l.jsx)("div", {
                className: c,
                children: (0, l.jsx)("div", {
                  className:
                    "font-lato text-base font-normal leading-5 text-gray-500 lg:text-lg lg:leading-[1.5rem]",
                  children: o,
                }),
              }),
          ],
        });
      };
    },
    8635: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return f;
        },
      });
      var l = n(5893),
        r = n(7294),
        a = n(1812),
        o = n(5418),
        s = n(4770),
        i = n(2978),
        c = n(6010);
      let g = (e) => {
        let { testimonial: t } = e,
          n = (0, c.Z)("mt-4 flex flex-row gap-4 bg-blue-100 p-6 lg:mt-10");
        return (0, l.jsx)(
          "div",
          {
            className: n,
            children: (0, l.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                (0, l.jsxs)("p", {
                  className:
                    "inline font-lato text-lg font-normal leading-5 text-gray-500",
                  children: [
                    (0, l.jsx)(i.Z, { className: "inline h-5 w-5" }),
                    (0, l.jsx)("span", {
                      className: "pl-2",
                      children: t.description,
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "mt-auto flex flex-col gap-1",
                  children: [
                    (0, l.jsx)("p", {
                      className:
                        "max-h-[220px] overflow-hidden text-ellipsis font-lato text-base font-normal leading-[1.125rem] text-gray-700",
                      children: t.author,
                    }),
                    (0, l.jsx)("p", {
                      className:
                        "font-lato text-xs font-normal leading-3 text-gray-700",
                      children: t.company,
                    }),
                  ],
                }),
              ],
            }),
          },
          t.index
        );
      };
      var p = n(5401),
        m = n(5487),
        d = n(1664),
        x = n.n(d),
        u = n(1163),
        h = n(259);
      let f = (e) => {
        let {
            feedback: t,
            setFeedback: n,
            randomTestimonial: i,
            ariaLabel: c,
          } = e,
          d = (0, u.useRouter)(),
          [f, b] = (0, r.useState)((0, o.eO)({ url: "/api/emails" }));
        (0, r.useEffect)(() => {
          b((0, o.eO)({ url: "/api/emails", query: d.query }));
        }, [d.query]);
        let v = (0, r.useRef)(null),
          { executeRecaptcha: y } = (0, h.xX)(),
          j = (0, r.useCallback)(async () => {
            if (!y) return;
            let e = await y("yourAction");
            v.current && (v.current.value = e);
          }, [y]);
        return (
          (0, r.useEffect)(() => {
            j();
          }, [j]),
          (0, l.jsxs)("section", {
            id: "contactForm",
            className:
              "grid grid-cols-1 items-center justify-center bg-white px-6 py-[3rem] md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0",
            children: [
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-8 lg:col-start-2",
                children: [
                  (0, l.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex flex-col lg:pr-28",
                        children: [
                          (0, l.jsx)(s.N, {
                            category: "CONTACT US",
                            titleBlue: !0,
                            title: "Let us help you grow your business",
                          }),
                          (0, l.jsx)(g, { testimonial: a.aP[i] }),
                        ],
                      }),
                      (0, l.jsxs)("form", {
                        className: "mt-8 flex flex-col lg:mt-0",
                        method: "POST",
                        action: f,
                        name: "contactForm",
                        children: [
                          (0, l.jsxs)("div", {
                            className:
                              "flex h-[60px] flex-col gap-1 border-2 border-solid border-transparent bg-gray-200 hover:border-2 hover:border-solid hover:border-yellow-300",
                            children: [
                              (0, l.jsx)("label", {
                                htmlFor: "name",
                                className:
                                  "px-2 pt-1 font-lato text-base font-normal leading-[1.125rem] text-gray-300",
                                children: "Name",
                              }),
                              (0, l.jsx)("input", {
                                className:
                                  "h-full bg-transparent px-2 pb-1 font-lato text-base font-normal leading-[1.125rem] text-blue-500 focus:outline-none",
                                placeholder: "John Doe",
                                type: "text",
                                name: "subject",
                                id: "name",
                                maxLength: 100,
                                minLength: 3,
                                required: !0,
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "mt-6 flex h-[54px] flex-col gap-1 border-2 border-solid border-transparent bg-gray-200 hover:border-2 hover:border-solid hover:border-yellow-300",
                            children: [
                              (0, l.jsx)("label", {
                                htmlFor: "email",
                                className:
                                  "px-2 pt-1 font-lato text-base font-normal leading-[1.125rem] text-gray-300",
                                children: "Email address",
                              }),
                              (0, l.jsx)("input", {
                                className:
                                  "h-full bg-transparent px-2 pb-1 font-lato text-base font-normal leading-[1.125rem] text-blue-500 focus:outline-none",
                                placeholder: "john.doe@email.com",
                                type: "email",
                                name: "from",
                                id: "email",
                                maxLength: 100,
                                required: !0,
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "mt-6 flex h-[130px] flex-col gap-1 border-2 border-solid border-transparent bg-gray-200  hover:border-2 hover:border-solid hover:border-yellow-300",
                            children: [
                              (0, l.jsx)("label", {
                                htmlFor: "text",
                                className:
                                  " px-2 pt-1 font-lato text-base font-normal leading-[1.125rem] text-gray-300",
                                children: "Your idea/project",
                              }),
                              (0, l.jsx)("textarea", {
                                className:
                                  "h-full resize-none bg-transparent px-2 pb-1 font-lato text-base font-normal leading-[1.125rem] text-blue-500 focus:outline-none",
                                placeholder: "Brief summary of your vision",
                                maxLength: 500,
                                minLength: 10,
                                id: "text",
                                name: "text",
                                required: !0,
                              }),
                            ],
                          }),
                          (0, l.jsxs)("p", {
                            className:
                              "mb-9 mt-2 font-raleway text-sm text-gray-300",
                            children: [
                              "This site is protected by reCAPTCHA and the Google",
                              " ",
                              (0, l.jsxs)("span", {
                                children: [
                                  (0, l.jsx)(x(), {
                                    className: "font-semibold text-blue-300",
                                    href: "https://policies.google.com/privacy",
                                    children: "Privacy Policy",
                                  }),
                                  " ",
                                  "and",
                                  " ",
                                ],
                              }),
                              (0, l.jsxs)("span", {
                                children: [
                                  (0, l.jsx)(x(), {
                                    className: "font-semibold text-blue-300",
                                    href: "https://policies.google.com/terms",
                                    children: "Terms of Service",
                                  }),
                                  " ",
                                ],
                              }),
                              "apply.",
                            ],
                          }),
                          (0, l.jsx)("input", {
                            ref: v,
                            className: "hidden",
                            type: "text",
                            onBeforeInput: j,
                            name: "token",
                            id: "token",
                          }),
                          (0, l.jsx)("div", {
                            className: "ml-auto mt-auto",
                            children: (0, l.jsx)(p.z, {
                              id: "send-request",
                              label: c,
                              variant: "info",
                              type: "submit",
                              children: "Send Request",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  "success" === t &&
                    (0, l.jsxs)("div", {
                      className:
                        "m-auto flex w-full flex-row items-center justify-between gap-4 bg-yellow-200 px-4 py-2",
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            "font-lato text-lg leading-5 text-blue-500",
                          children: "Message has been sent successfully.",
                        }),
                        (0, l.jsx)(p.z, {
                          label: "close",
                          variant: "link_blue",
                          onClick: () => n(void 0),
                          children: (0, l.jsx)(m.J, {
                            variant: "close",
                            width: 8,
                            height: 8,
                          }),
                        }),
                      ],
                    }),
                  "failed" === t &&
                    (0, l.jsxs)("div", {
                      className:
                        "m-auto flex w-full flex-row items-center justify-between gap-4 bg-red-500 px-4 py-2",
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            "font-lato text-lg leading-5 text-gray-100",
                          children: "Message failed to send.",
                        }),
                        (0, l.jsx)(p.z, {
                          label: "close",
                          variant: "link_white",
                          onClick: () => n(void 0),
                          children: (0, l.jsx)(m.J, {
                            variant: "close",
                            width: 8,
                            height: 8,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              (0, l.jsx)("div", { id: "recaptcha" }),
            ],
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
      var l = n(5893),
        r = n(6295),
        a = n(9008),
        o = n.n(a),
        s = n(1163);
      let i = () => ({
          __html:
            '{\n    "@context": "https://schema.org/",\n    "@type": "WebSite",\n    "name": "Tryspikes",\n    "url": '
              .concat(
                "https://tryspikes.com",
                ',\n    "image": "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",\n    "description": '
              )
              .concat(
                r.cz,
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
              title: t = r.ye,
              keywords: n = r.Om,
              description: a = r.cz,
              type: g = "website",
              blog: p,
            } = e,
            m = (0, s.useRouter)();
          return (0, l.jsxs)(o(), {
            children: [
              (0, l.jsx)("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
              }),
              (0, l.jsx)("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
              }),
              (0, l.jsx)("meta", { charSet: "utf-8" }),
              (0, l.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
              }),
              (0, l.jsx)("meta", { name: "description", content: a }),
              (0, l.jsx)("meta", { name: "keywords", content: n }),
              (0, l.jsx)("meta", {
                name: "apple-mobile-web-app-title",
                content: t,
              }),
              (0, l.jsx)("meta", { name: "application-name", content: t }),
              (0, l.jsx)("meta", { property: "og:type", content: g }),
              (0, l.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
              (0, l.jsx)("meta", {
                property: "og:url",
                content: "".concat("https://tryspikes.com").concat(m.asPath),
              }),
              (0, l.jsx)("meta", { property: "og:title", content: t }),
              (0, l.jsx)("meta", { property: "og:description", content: a }),
              (0, l.jsx)("meta", {
                property: "og:image",
                content:
                  "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, l.jsx)("meta", { property: "twitter:title", content: t }),
              (0, l.jsx)("meta", {
                property: "twitter:card",
                content: "summary",
              }),
              (0, l.jsx)("meta", {
                property: "twitter:site",
                content: "@tryspikes",
              }),
              (0, l.jsx)("meta", {
                property: "twitter:description",
                content: a,
              }),
              (0, l.jsx)("meta", {
                property: "twitter:image",
                content:
                  "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, l.jsx)("meta", { name: "robots", content: "index" }),
              (0, l.jsx)("link", {
                rel: "canonical",
                href: "".concat("https://tryspikes.com").concat(m.asPath),
              }),
              (0, l.jsx)("link", {
                rel: "apple-touch-icon",
                href: "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, l.jsx)("link", {
                rel: "icon",
                type: "image/png",
                href: "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, l.jsx)("title", { children: t }),
              (0, l.jsx)(
                "script",
                {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: p ? c(p) : i(),
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
          return s;
        },
        Om: function () {
          return a;
        },
        Yb: function () {
          return g;
        },
        cz: function () {
          return r;
        },
        hR: function () {
          return o;
        },
        oz: function () {
          return i;
        },
        qo: function () {
          return c;
        },
        ye: function () {
          return l;
        },
      });
      let l = "Tryspikes \xb7 Custom software development",
        r =
          "Everybody talks about amazing products. We build them. Software Development Agency specialized in building High Performance and Resilient Software.",
        a =
          "software development agency, mvp software development, react native development, tryspikes, ai & ml development agency, nearshoring software agency, nextjs software development, mlops, devops",
        o = "Tryspikes \xb7 Services",
        s = "Tryspikes \xb7 Blog",
        i = "Tryspikes \xb7 Case Studies",
        c = "Tryspikes \xb7 Contact Us",
        g = "Tryspikes \xb7 About Us";
    },
    9008: function (e, t, n) {
      e.exports = n(2636);
    },
  },
]);
