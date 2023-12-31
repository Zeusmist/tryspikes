"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [819],
  {
    4770: function (e, t, l) {
      l.d(t, {
        N: function () {
          return a;
        },
      });
      var c = l(5893),
        n = l(6010);
      let a = (e) => {
        let {
            category: t,
            textAlign: l,
            title: a,
            children: r,
            titleBlue: i = !1,
          } = e,
          o = (0, n.Z)("flex flex-col", { [null != l ? l : ""]: !!l }),
          s = (0, n.Z)("mt-8", {
            "lg:pr-14":
              !l || "text-start" === l || "text-start lg:text-center" === l,
          }),
          g = (0, n.Z)(
            "font-lato text-3xl font-bold leading-9 lg:text-4xl lg:leading-[3.125rem]",
            { "text-gray-500": !i, "text-blue-500": i }
          );
        return (0, c.jsxs)("div", {
          className: o,
          children: [
            (0, c.jsx)("div", {
              className: "mb-2",
              children: (0, c.jsx)("span", {
                className:
                  "font-lato text-lg font-bold leading-5 text-blue-200",
                children: t,
              }),
            }),
            (0, c.jsx)("h2", { className: g, children: a }),
            r &&
              (0, c.jsx)("div", {
                className: s,
                children: (0, c.jsx)("div", {
                  className:
                    "font-lato text-base font-normal leading-5 text-gray-500 lg:text-lg lg:leading-[1.5rem]",
                  children: r,
                }),
              }),
          ],
        });
      };
    },
    9999: function (e, t, l) {
      l.d(t, {
        H: function () {
          return g;
        },
      });
      var c = l(5893),
        n = l(6295),
        a = l(9008),
        r = l.n(a),
        i = l(1163);
      let o = () => ({
          __html:
            '{\n    "@context": "https://schema.org/",\n    "@type": "WebSite",\n    "name": "Tryspikes",\n    "url": '
              .concat(
                "https://tryspikes.com",
                ',\n    "image": "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",\n    "description": '
              )
              .concat(
                n.cz,
                ',\n    "organization": {\n      "@type": "Organization",\n      "name": "Tryspikes",\n      "logo": "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png"\n    },\n    "publisher": {\n      "@type": "Organization",\n      "name": "Tryspikes",\n      "logo": "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png"\n    },\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": '
              )
              .concat("https://tryspikes.com", "\n    }\n  }\n"),
        }),
        s = (e) => ({
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
              title: t = n.ye,
              keywords: l = n.Om,
              description: a = n.cz,
              type: g = "website",
              blog: p,
            } = e,
            f = (0, i.useRouter)();
          return (0, c.jsxs)(r(), {
            children: [
              (0, c.jsx)("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
              }),
              (0, c.jsx)("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
              }),
              (0, c.jsx)("meta", { charSet: "utf-8" }),
              (0, c.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
              }),
              (0, c.jsx)("meta", { name: "description", content: a }),
              (0, c.jsx)("meta", { name: "keywords", content: l }),
              (0, c.jsx)("meta", {
                name: "apple-mobile-web-app-title",
                content: t,
              }),
              (0, c.jsx)("meta", { name: "application-name", content: t }),
              (0, c.jsx)("meta", { property: "og:type", content: g }),
              (0, c.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
              (0, c.jsx)("meta", {
                property: "og:url",
                content: "".concat("https://tryspikes.com").concat(f.asPath),
              }),
              (0, c.jsx)("meta", { property: "og:title", content: t }),
              (0, c.jsx)("meta", { property: "og:description", content: a }),
              (0, c.jsx)("meta", {
                property: "og:image",
                content:
                  "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, c.jsx)("meta", { property: "twitter:title", content: t }),
              (0, c.jsx)("meta", {
                property: "twitter:card",
                content: "summary",
              }),
              (0, c.jsx)("meta", {
                property: "twitter:site",
                content: "@tryspikes",
              }),
              (0, c.jsx)("meta", {
                property: "twitter:description",
                content: a,
              }),
              (0, c.jsx)("meta", {
                property: "twitter:image",
                content:
                  "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, c.jsx)("meta", { name: "robots", content: "index" }),
              (0, c.jsx)("link", {
                rel: "canonical",
                href: "".concat("https://tryspikes.com").concat(f.asPath),
              }),
              (0, c.jsx)("link", {
                rel: "apple-touch-icon",
                href: "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, c.jsx)("link", {
                rel: "icon",
                type: "image/png",
                href: "https://storage.googleapis.com/public-tryspikes/tryspikes-logo-w-blue.png",
              }),
              (0, c.jsx)("title", { children: t }),
              (0, c.jsx)(
                "script",
                {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: p ? s(p) : o(),
                },
                "schemaOrg"
              ),
            ],
          });
        };
    },
    3813: function (e, t, l) {
      l.d(t, {
        C: function () {
          return m;
        },
      });
      var c,
        n,
        a = l(5893),
        r = l(7294),
        i = l(8903),
        o = l(4276),
        s = ["title", "titleId"];
      function g() {
        return (g = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var c in l)
                  Object.prototype.hasOwnProperty.call(l, c) && (e[c] = l[c]);
              }
              return e;
            }).apply(this, arguments);
      }
      var p = function (e) {
          var t = e.title,
            l = e.titleId,
            a = (function (e, t) {
              if (null == e) return {};
              var l,
                c,
                n = (function (e, t) {
                  if (null == e) return {};
                  var l,
                    c,
                    n = {},
                    a = Object.keys(e);
                  for (c = 0; c < a.length; c++)
                    (l = a[c]), t.indexOf(l) >= 0 || (n[l] = e[l]);
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (c = 0; c < a.length; c++)
                  (l = a[c]),
                    !(t.indexOf(l) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, l) &&
                      (n[l] = e[l]);
              }
              return n;
            })(e, s);
          return r.createElement(
            "svg",
            g(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 301,
                height: 128,
                fill: "none",
                viewBox: "0 0 301 128",
                "aria-labelledby": l,
              },
              a
            ),
            t ? r.createElement("title", { id: l }, t) : null,
            c ||
              (c = r.createElement(
                "g",
                { clipPath: "url(#a)" },
                r.createElement("path", {
                  fill: "#fff",
                  d: "M260.524 93.963 300.5 114.33l-41.88-12.927 1.904-7.44Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "m248.933 94.514 39.983 20.367-41.88-12.927 1.897-7.44ZM164.351 118.073l44.773 9.808-45.289-4.633.516-5.175ZM175.521 25.927l57.737 33.046-60.012-25.78 2.275-7.266Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "m175.826 31.862 40.855 22.743-42.955-15.385 2.1-7.358Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "m100.284 50.523 11.628.981 5.683.615c31.197.688 14.236-6.349 15.631-8.257l-4.026-.44c-3.524-.33-6.94-.615-10.174-.78-3.234-.165-6.308-.275-9.134-.294-2.827-.018-5.422 0-7.718.12-2.297.119-4.295.266-5.945.367l-3.83.266-1.358.1s.45-.174 1.322-.403c.872-.23 2.18-.505 3.808-.78.821-.128 1.737-.23 2.733-.348l3.234-.248c2.303-.147 4.912-.266 7.754-.303 2.841-.037 5.922 0 9.171.101 1.402.046 2.841.11 4.302.193h.232c3.009.165 6.119.486 9.273.78 3.154.293 6.352.724 9.556 1.229 3.205.504 6.381.917 9.52 1.495 3.14.578 6.214 1.165 9.186 1.835 2.972.67 5.813 1.386 8.546 2.046 2.732.66 5.261 1.385 7.609 2.092 2.347.706 4.498 1.385 6.402 1.972s3.553 1.175 4.912 1.642l4.266 1.523-1.09-.486c-.727-.33-1.759-.789-3.096-1.349a217.21 217.21 0 0 0-4.854-1.954 124.708 124.708 0 0 0-6.359-2.266 291.907 291.907 0 0 0-7.587-2.385c-2.703-.807-5.573-1.514-8.553-2.211a195.393 195.393 0 0 0-9.207-1.936c-1.57-.303-3.162-.578-4.76-.826l-4.804-.67c-2.18-.33-4.418-.577-6.613-.807 14.403-4.165 9.055-16.816 10.465-20.45l1.082.12.727.092.778.138 3.117.578c2.079.32 4.114.917 6.134 1.44l1.519.394c.501.147.988.34 1.453.496l2.95 1 .727.247.727.312 1.453.606c.938.431 1.89.78 2.798 1.257 1.795.981 3.634 1.835 5.269 2.972.843.55 1.693 1.037 2.492 1.624l2.348 1.77a65.103 65.103 0 0 1 8.117 7.698c2.376 2.624 4.426 5.239 6.228 7.56l4.643 6.091 1.737 2.23 1.33 1.596 1.105 1.321-1.039-1.45-1.236-1.706-1.635-2.34-4.36-6.375a299.781 299.781 0 0 0-2.769-3.863c-.981-1.348-2.064-2.752-3.248-4.092a62.642 62.642 0 0 0-8.089-8.174l-2.369-1.89c-.806-.633-1.671-1.156-2.521-1.752-1.679-1.23-3.532-2.12-5.363-3.174-.923-.505-1.897-.918-2.849-1.34l-1.454-.651-.726-.33-.727-.266-3.001-1.083c-.502-.174-1.003-.367-1.519-.523l-1.541-.413c-2.056-.55-4.127-1.165-6.242-1.505l-3.161-.605-.792-.156-.822-.092-1.584-.192c-2.115-.211-4.2-.578-6.358-.57-2.159.01-4.281-.229-6.388 0l-3.147.175c-1.046.074-2.078.303-3.103.44l-1.541.248a12.36 12.36 0 0 0-1.518.285l-2.987.77c-.487.138-.989.23-1.454.404l-1.453.514c-.952.348-1.897.679-2.82 1.055l-2.688 1.275c-.444.22-.887.413-1.316.651-.429.239-.85.487-1.264.734-.836.496-1.672.918-2.471 1.459l-2.326 1.578c-.763.505-1.489 1.073-2.18 1.624l-2.085 1.614c-2.682 2.193-5.087 4.322-7.18 6.202-1.054.918-2.05 1.835-2.972 2.597-.923.761-1.774 1.523-2.566 2.128l-2.093 1.66-1.584 1.147-1.323.918c-2.95 1.835-6.925 3.064-11.503 3.954 2.18 0 4.36.092 6.598.165 6.926.248 14.294.68 21.91 1.239ZM269.688 99.597c-1.73-.918-4.288-2.212-7.58-3.771-6.591-3.128-16.126-7.34-27.753-11.605-11.627-4.267-25.333-8.762-40.158-12.845a513.215 513.215 0 0 0-22.949-5.688 553.629 553.629 0 0 0-23.858-4.761l-6.017-1.028-6.018-.917-6.002-.917c-1.999-.312-3.99-.633-5.974-.918l-11.772-1.56-11.526-1.266c-7.572-.734-14.898-1.348-21.86-1.733-6.961-.386-13.53-.615-19.62-.67-6.09-.055-11.628.064-16.577.257h-.196c-15.16 1.312-28.342 3.56-29.214 12.43V65.854c.156 1.176.557 2.278 1.163 3.193a17.867 17.867 0 0 0 3.205 3.734 36.501 36.501 0 0 0 4.818 3.67 72.939 72.939 0 0 0 6.039 3.569 119.149 119.149 0 0 0 6.925 3.394 174.977 174.977 0 0 0 7.522 3.202 291.47 291.47 0 0 0 7.848 2.963c2.638.954 5.29 1.835 7.907 2.698 2.616.862 5.196 1.65 7.696 2.412 5 1.505 9.694 2.753 13.72 3.826 4.026 1.074 7.405 1.835 9.76 2.367 2.354.532 3.713.817 3.713.817l-13.313-4.065a1016.85 1016.85 0 0 1-13.619-4.284l-7.652-2.459c-2.609-.917-5.247-1.835-7.87-2.752-.538-.184-1.069-.385-1.606-.578-10.174-4.587-19.272-9.734-23.444-14.679-5.029-5.945 3.714-10.394 14.454-12.44h-2.906l-3.336.119c-2.18.055-4.099.174-5.88.23-1.78.054-3.35.183-4.73.229l-1.911.119c-.589 0-1.12.055-1.592.1-1.904.13-2.907.248-2.907.248s.248-.1.727-.266c.48-.165 1.192-.394 2.13-.66.937-.266 2.1-.523 3.473-.817.683-.137 1.453-.256 2.18-.394a31.152 31.152 0 0 1 2.515-.376l2.812-.34c.988-.11 2.013-.165 3.089-.247l3.357-.23 3.633-.137c1.243 0 2.53-.11 3.852-.12l4.07-.055c2.79-.055 5.719 0 8.778 0 3.06 0 6.243.138 9.542.257l5.021.193 5.182.294 5.32.311c1.794.11 3.633.276 5.442.413l5.567.431 2.82.22 2.848.276 11.628 1.138 11.881 1.385c4.005.431 7.994 1.009 12.042 1.541s8.059 1.037 12.143 1.68a480.886 480.886 0 0 1 24.134 4.228c7.943 1.606 15.734 3.349 23.255 5.239 7.521 1.89 14.752 3.899 21.583 5.972 6.831 2.074 13.248 4.257 19.156 6.376 11.802 4.239 21.511 8.377 28.255 11.505a236.834 236.834 0 0 1 7.805 3.798l.668.358a9.104 9.104 0 0 0-.77-3.413l-1.068-.45ZM119.055 113.468c5.254 1.284 11.773 2.614 19.81 3.853 8.154 1.266 14.811 1.954 20.188 2.312a288.307 288.307 0 0 0-39.998-6.165ZM100.771 107.312a44.914 44.914 0 0 0 5.182 2.247c22.377.806 44.647 4.233 66.523 10.239a40.325 40.325 0 0 0 5.399-.615c-25.376-6.798-51.177-10.771-77.104-11.871Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "m209.24 86.128 4.178 1.129 4.041 1.155c2.66.744 5.21 1.542 7.659 2.285 4.906 1.514 9.39 2.945 13.35 4.284l5.53 1.936 4.68 1.743c2.813 1.092 5.036 1.927 6.541 2.56l2.303.917-2.267-1.055c-1.453-.706-3.633-1.679-6.453-2.871l-4.644-1.909-5.494-2.146c-3.938-1.468-8.386-3.129-13.277-4.725-2.449-.799-4.992-1.652-7.645-2.459l-4.033-1.247-4.178-1.23c-2.813-.844-5.727-1.633-8.721-2.45a563.065 563.065 0 0 0-9.113-2.385c-3.096-.789-6.264-1.495-9.447-2.266l-9.716-2.138-9.905-1.963-9.992-1.835c-3.343-.55-6.686-1.119-10.022-1.623l-9.941-1.46c-6.599-.917-13.081-1.834-19.381-2.504-3.147-.385-6.243-.697-9.266-1.036-3.023-.34-6.003-.579-8.888-.826-5.813-.505-11.25-.918-16.292-1.202l-7.268-.395a304.297 304.297 0 0 0-6.54-.21 362.56 362.56 0 0 0-10.632-.147c-2.943 0-5.268.045-6.845.091l-2.42.074 2.42.064c1.577 0 3.895.138 6.838.248 2.943.11 6.54.302 10.61.587 4.07.284 8.72.633 13.75 1.055A567.21 567.21 0 0 1 95 65.788c5.756.652 11.831 1.377 18.11 2.184 3.132.413 6.322.835 9.549 1.294l9.781 1.385 9.934 1.495 9.993 1.615 9.977 1.761 9.876 1.909 9.709 2.027c3.19.725 6.352 1.404 9.447 2.147 6.221 1.541 12.18 2.982 17.863 4.523ZM267.943 110.807l-.566.294c-.415.202-.872.477-1.454.688a31.6 31.6 0 0 1-3.946 1.403l-1.192.34-1.279.303c-.864.229-1.787.412-2.754.614a95.66 95.66 0 0 1-6.242 1.009c-2.224.294-4.579.542-7.006.762-4.869.459-10.072.725-15.261.872-5.188.146-10.413.275-15.261.275-4.847 0-9.447 0-13.357-.074l-13.037-.22 3.583.294c2.275.156 5.53.413 9.447.587 3.917.174 8.474.385 13.364.431 4.891.046 10.116 0 15.334-.119 2.609-.092 5.218-.239 7.783-.404 2.565-.165 5.087-.367 7.529-.624 2.441-.257 4.796-.569 7.027-.917a82.777 82.777 0 0 0 6.25-1.211c.966-.239 1.889-.441 2.761-.707l1.272-.376 1.192-.403a30.425 30.425 0 0 0 3.924-1.615c.476-.225.942-.482 1.395-.771l.56-.33.443-.33.807-.597-.829.542-.487.284Z",
                }),
                r.createElement("path", {
                  fill: "#0B47DD",
                  d: "M262.973 87.835c-6.541-3.954-15.407-7.459-23.982-10.853-12.136-4.771-24.708-9.716-30.318-15.698a115.457 115.457 0 0 1-9.382-11.926c-9.752-13.56-20.813-28.927-50.564-33.523-29.752-4.597-43.421 6.954-55.477 17.137a97.216 97.216 0 0 1-11.38 8.707c-6.62 4.092-19.738 5.064-32.419 6.009-8.997.67-18.298 1.358-25.37 3.22-3.357.917-13.574 3.55-14.534 13.248-.341 3.578 1.141 7.055 4.419 10.34 2.398 2.412 5.814 4.816 10.377 7.339 7.34 4.046 17.645 8.34 30.638 12.743 17.398 5.908 35.108 10.477 41.851 12.156a4.738 4.738 0 0 0 .435 2.088c.297.631.728 1.144 1.244 1.481.385.247 9.847 6.229 39.969 10.89 30.122 4.66 40.463 1.733 40.892 1.605.564-.17 1.078-.536 1.485-1.057.407-.52.691-1.174.819-1.888 6.867.422 24.933 1.376 42.941.918 13.451-.322 24.272-1.349 32.164-3.046 4.934-1.065 8.721-2.358 11.482-3.964 3.801-2.192 5.908-5.119 6.257-8.697.981-9.651-8.466-15.358-11.547-17.23ZM83.214 45.202l1.323-.918 1.584-1.147 2.093-1.66c.792-.606 1.642-1.33 2.565-2.128.923-.799 1.919-1.652 2.972-2.597 2.108-1.835 4.499-4.01 7.18-6.202l2.086-1.614c.727-.55 1.453-1.12 2.18-1.624l2.325-1.578c.8-.505 1.635-.964 2.471-1.459.414-.248.836-.495 1.265-.734.428-.238.872-.431 1.315-.651l2.689-1.276c.923-.376 1.867-.706 2.819-1.055l1.454-.513c.48-.175.981-.266 1.453-.404l2.987-.77a12.36 12.36 0 0 1 1.519-.285l1.54-.248c1.025-.137 2.057-.367 3.104-.44l3.146-.174c2.108-.202 4.244 0 6.388 0s4.244.357 6.359.569l1.584.192.821.092.792.156 3.161.605c2.115.34 4.186.918 6.243 1.505l1.541.413c.515.156 1.017.348 1.518.523l3.002 1.082.726.266.727.33 1.453.652c.952.459 1.926.835 2.849 1.34 1.831 1.054 3.684 1.944 5.363 3.174.85.596 1.715 1.119 2.522 1.752l2.369 1.89a62.692 62.692 0 0 1 8.088 8.174c1.185 1.358 2.224 2.753 3.249 4.092 1.024 1.34 1.911 2.642 2.768 3.862l4.361 6.376 1.635 2.34 1.235 1.706 1.039 1.413-1.104-1.321-1.33-1.596-1.737-2.23-4.644-6.091c-1.802-2.321-3.851-4.936-6.228-7.56a64.98 64.98 0 0 0-8.117-7.697l-2.347-1.77c-.8-.588-1.65-1.074-2.493-1.625-1.657-1.137-3.473-1.99-5.268-2.972-.909-.477-1.861-.826-2.798-1.257l-1.454-.606-.726-.312-.727-.247-2.95-1c-.495-.156-.982-.349-1.454-.496l-1.519-.394c-2.02-.523-4.055-1.12-6.133-1.44l-3.118-.578-.777-.138-.727-.092-1.083-.12c-1.41 3.67 3.939 16.285-10.464 20.45 2.18.23 4.411.477 6.613.808l4.803.67c1.599.247 3.19.523 4.76.825 3.147.578 6.228 1.248 9.208 1.936 2.979.688 5.849 1.413 8.553 2.211 2.703.798 5.247 1.587 7.587 2.385 2.34.798 4.476 1.542 6.358 2.267a190.13 190.13 0 0 1 4.855 1.954 89 89 0 0 1 3.096 1.348l1.09.486-4.266-1.523a264.134 264.134 0 0 0-4.913-1.642 208.832 208.832 0 0 0-6.402-1.972 276.044 276.044 0 0 0-7.609-2.092 220.957 220.957 0 0 0-8.546-2.046 257.155 257.155 0 0 0-9.185-1.835c-3.14-.56-6.315-1.036-9.52-1.495-3.205-.459-6.402-.835-9.556-1.23-3.154-.394-6.265-.614-9.273-.78h-.233a196.823 196.823 0 0 0-13.473-.294c-2.841.038-5.45.157-7.754.304l-3.234.248c-.995.119-1.911.22-2.732.348-1.643.275-2.907.532-3.808.78-.901.248-1.323.404-1.323.404l1.36-.101 3.829-.266c1.65-.101 3.633-.257 5.944-.367 2.311-.11 4.891-.147 7.718-.12 2.827.028 5.894.11 9.135.294 3.241.183 6.656.45 10.174.78l4.026.44c-1.396 1.908 15.566 8.945-15.632 8.257l-5.683-.614-11.627-.982c-7.616-.55-14.985-.982-21.976-1.193-2.238-.073-4.44-.12-6.598-.165 4.643-.9 8.619-2.138 11.569-3.963Zm55.651 72.119c-8.037-1.239-14.534-2.569-19.81-3.853a288.374 288.374 0 0 1 39.969 6.165c-5.348-.358-12.005-1.046-20.144-2.312h-.015Zm33.611 2.477c-21.876-6.006-44.146-9.433-66.523-10.238a45.095 45.095 0 0 1-5.182-2.248c25.927 1.1 51.728 5.073 77.104 11.871-1.79.327-3.592.532-5.399.615Zm9.447-40.275-9.709-2.028-9.876-1.908-9.978-1.762-9.992-1.614-9.934-1.496-9.781-1.385c-3.227-.459-6.417-.917-9.549-1.293a1336.797 1336.797 0 0 0-18.11-2.184c-5.756-.66-11.206-1.174-16.242-1.615-5.036-.44-9.65-.78-13.75-1.055a451.47 451.47 0 0 0-10.61-.587 359.992 359.992 0 0 0-6.838-.248l-2.42-.064 2.42-.073c1.577 0 3.895-.101 6.846-.092 2.95.01 6.54 0 10.632.147 2.049 0 4.236.12 6.54.21l7.267.395a644.02 644.02 0 0 1 16.293 1.202c2.907.248 5.814.532 8.888.826 3.074.293 6.119.651 9.265 1.037a675.44 675.44 0 0 1 19.381 2.504l9.942 1.459c3.335.505 6.678 1.073 10.021 1.624l9.993 1.835 9.905 1.963 9.716 2.138c3.19.77 6.358 1.477 9.447 2.266 3.088.789 6.148 1.54 9.113 2.385 2.965.844 5.886 1.606 8.72 2.45l4.179 1.229 4.033 1.248c2.653.807 5.196 1.66 7.645 2.458 4.891 1.597 9.338 3.257 13.277 4.725l5.494 2.147 4.644 1.908c2.79 1.193 4.97 2.165 6.453 2.872l2.267 1.055-2.304-.918c-1.453-.633-3.713-1.468-6.54-2.56l-4.68-1.743-5.53-1.935c-3.961-1.34-8.445-2.753-13.35-4.285-2.449-.743-5-1.54-7.659-2.284l-4.041-1.156-4.178-1.129c-5.654-1.54-11.628-2.981-17.834-4.458-3.103-.807-6.257-1.486-9.447-2.211h-.029Zm86.478 31.046-.443.33-.56.33c-.453.289-.919.546-1.395.771a30.425 30.425 0 0 1-3.924 1.615l-1.192.403-1.272.376c-.872.266-1.795.468-2.761.707-1.926.449-4.026.844-6.25 1.211a96.212 96.212 0 0 1-7.027.917c-2.442.22-4.964.45-7.529.624-2.565.174-5.174.312-7.783.404-5.218.156-10.443.165-15.333.119-4.891-.046-9.448-.257-13.365-.431-3.917-.175-7.165-.431-9.447-.587l-3.583-.294 13.038.22c3.909.083 8.473.074 13.357.074 4.883 0 10.094-.065 15.26-.276 5.167-.211 10.414-.412 15.261-.871a190.93 190.93 0 0 0 7.006-.762 90.429 90.429 0 0 0 6.242-1.009c.967-.202 1.89-.385 2.754-.614l1.279-.303 1.192-.34a31.6 31.6 0 0 0 3.946-1.403c.545-.211 1.003-.487 1.454-.688l.567-.294.457-.294.829-.541-.778.606Zm2.391-7.34a236.667 236.667 0 0 0-7.805-3.798c-6.744-3.128-16.452-7.266-28.254-11.504a452.814 452.814 0 0 0-19.156-6.377c-6.802-2.1-14.069-4.082-21.584-5.972a463.015 463.015 0 0 0-23.254-5.239c-7.95-1.568-16.031-3.018-24.134-4.23-4.084-.641-8.103-1.128-12.143-1.678-4.041-.55-8.038-1.11-12.042-1.541l-11.882-1.386-11.627-1.137-2.849-.275-2.82-.22-5.566-.432c-1.839-.137-3.634-.302-5.443-.413l-5.32-.312-5.181-.293-5.022-.193c-3.299-.12-6.482-.247-9.541-.257-3.06-.009-5.988-.091-8.779 0l-4.07.055c-1.322 0-2.608.083-3.851.12l-3.634.137-3.357.23c-1.075.082-2.1.137-3.088.247l-2.813.34c-.886.092-1.73.238-2.514.376-.785.138-1.534.257-2.18.394-1.374.294-2.537.55-3.474.817-.938.266-1.657.477-2.13.66-.472.184-.726.267-.726.267s1.025-.12 2.907-.248a32.966 32.966 0 0 1 1.591-.101l1.912-.12c1.38-.045 2.957-.174 4.73-.229 1.774-.055 3.736-.174 5.88-.229l3.335-.12h2.907c-10.74 2.047-19.483 6.496-14.454 12.441 4.171 4.936 13.24 10.046 23.443 14.679.538.193 1.069.394 1.606.578 2.624.917 5.262 1.835 7.87 2.752l7.653 2.532a1018.4 1018.4 0 0 0 13.618 4.285l13.314 4.064s-1.352-.275-3.714-.817a335.86 335.86 0 0 1-9.76-2.366 373.961 373.961 0 0 1-13.72-3.826c-2.5-.762-5.087-1.542-7.696-2.413-2.608-.872-5.261-1.752-7.906-2.697a255.818 255.818 0 0 1-7.849-2.964c-2.58-1.018-5.087-2.11-7.521-3.201a116.924 116.924 0 0 1-6.926-3.395 72.91 72.91 0 0 1-6.039-3.569 36.492 36.492 0 0 1-4.818-3.67 17.875 17.875 0 0 1-3.205-3.733c-.605-.915-1.006-2.017-1.162-3.193v-1.247c.857-8.872 14.054-11.12 29.214-12.432h.196a332.705 332.705 0 0 1 16.576-.257 415.61 415.61 0 0 1 19.621.67c6.97.404 14.287 1 21.86 1.734l11.525 1.266 11.773 1.56c1.984.247 3.975.568 5.973.917l6.003.917 6.017.918 6.017 1.027a581.77 581.77 0 0 1 23.858 4.762 494.227 494.227 0 0 1 22.95 5.688c14.824 4.055 28.53 8.504 40.158 12.844 11.627 4.34 21.161 8.477 27.753 11.605 3.292 1.56 5.813 2.863 7.579 3.771l1.032.551a9.08 9.08 0 0 1 .77 3.412l-.632-.532Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "M20.855 65.468c-.4 3.404-2.42 5.844-4.52 5.45-2.1-.395-3.474-3.459-3.081-6.863.392-3.403 2.42-5.834 4.52-5.44 2.1.395 3.474 3.459 3.081 6.853Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "M14.57 64.926 21.472.633 17.86 65.358l-3.292-.432ZM17.81 66.074l-4.76 37.945 1.461-38.376 3.3.43Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "M16.153 66.972 2.782 63.936l13.553-1.138-.182 4.174Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "m15.855 65.037-8.27-7.78 9.15 6.009-.88 1.77Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "M16.226 63.294 4.308 43.165 16.749 62.78l-.523.514ZM16.8 64.991l-8.604 6.945 7.601-8.615 1.003 1.67Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "M16.786 63.22 2.767 97.688 16.19 62.844l.596.376ZM13.835 47.495a12.1 12.1 0 0 0-2.18 1.083c-.305.201-.64.422-.981.679-.342.257-.727.541-1.046.853-.366.318-.718.66-1.054 1.027a17.242 17.242 0 0 0-1.89 2.486c-.145.22-.269.46-.407.68-.138.22-.247.458-.37.678-.226.468-.45.918-.64 1.358-.101.22-.181.44-.269.652-.087.21-.174.412-.24.614-.138.404-.283.77-.385 1.101-.101.33-.21.624-.269.872l-.232.77s0-.302.102-.816c0-.257.094-.569.16-.917.065-.35.167-.753.268-1.184.051-.211.124-.431.19-.66.068-.238.145-.47.232-.698.176-.502.372-.992.589-1.468.217-.508.46-.998.726-1.467a13.639 13.639 0 0 1 1.991-2.615c.362-.368.74-.708 1.134-1.019a10.07 10.07 0 0 1 1.141-.789c.348-.212.705-.402 1.068-.569a8.138 8.138 0 0 1 1.672-.55c.228-.05.459-.085.69-.1Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "M.98 65.89c-.065.483-.109.97-.131 1.458a34.499 34.499 0 0 0 0 3.863c.036.789.116 1.651.21 2.55.095.9.255 1.835.437 2.817.087.486.196.972.305 1.458.109.487.232.991.378 1.478l.203.743c.08.238.153.486.233.733.145.496.327.973.494 1.45.167.477.37.918.552 1.431l.596 1.377.64 1.33.668 1.257.683 1.183c.233.385.465.743.69 1.1.226.359.458.69.684 1.02.225.33.429.65.654.917.436.578.828 1.119 1.199 1.569.37.45.683.862.966 1.174l.85 1-.93-.917c-.298-.285-.64-.652-1.031-1.083a36.299 36.299 0 0 1-1.294-1.486c-.233-.266-.458-.578-.727-.918-.269-.34-.494-.642-.726-1-.233-.358-.487-.706-.727-1.082l-.727-1.175a22.505 22.505 0 0 0-.727-1.266c-.261-.422-.45-.917-.668-1.34-.218-.421-.422-.917-.625-1.403a26.863 26.863 0 0 1-.567-1.459c-.174-.495-.356-.981-.501-1.495-.08-.248-.153-.505-.233-.752-.08-.248-.138-.505-.203-.762a33.293 33.293 0 0 1-.654-3.018 36.333 36.333 0 0 1-.364-2.88 30.93 30.93 0 0 1-.116-2.615c-.008-.736.017-1.47.073-2.202.036-.66.101-1.23.16-1.688.058-.46.13-.826.174-1.074.043-.247.102-.293.102-.293ZM16.124 65.21l13.692-34.972-12.187 35.853-1.505-.88Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "m17.142 64.614 7.74 17.367-9.673-15.752 1.933-1.615ZM121.337 27.064c2.725-.853 4.513-3.67 3.99-6.422-.523-2.752-3.161-4.165-5.887-3.32-2.725.843-4.512 3.669-3.989 6.421.523 2.753 3.161 4.165 5.886 3.321Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "M120.276 18.963 68.644 34.247l52.301-11.046-.669-4.238ZM121.519 23.055l30.405-9.899-31.074 5.66.669 4.24Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "m122.1 20.826-3.786-17.037.4 17.688 3.386-.651Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "m120.494 20.624-7.151-9.954 5.792 11.275 1.359-1.32Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "M119.106 21.276 101.563 7.808l17.18 14.201.363-.733ZM120.545 21.853l4.804-11.834-6.257 10.697 1.453 1.137Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "M119.106 22.009 145.769.449l-27.026 20.826.363.734ZM106.025 19.725c.154-.999.378-1.978.669-2.927.131-.421.276-.871.451-1.339.174-.468.37-.917.588-1.45.218-.532.473-.972.727-1.458.269-.489.56-.957.872-1.404.301-.455.624-.887.967-1.294l.508-.587c.175-.192.349-.367.523-.55.349-.349.727-.679 1.04-.918.169-.146.336-.284.501-.412.16-.129.32-.266.472-.376.32-.211.604-.44.865-.606.262-.165.487-.33.676-.44l.603-.367s-.232.064-.647.21c-.21.065-.457.175-.726.294-.269.12-.596.294-.93.468-.175.092-.342.211-.524.312-.181.1-.363.23-.545.367-.394.273-.773.58-1.133.918-.393.347-.767.727-1.12 1.137a15.44 15.44 0 0 0-1.039 1.34c-.319.477-.617.976-.894 1.495a16.55 16.55 0 0 0-1.257 3.128c-.14.47-.256.952-.349 1.44a15.952 15.952 0 0 0-.29 2.221 7.867 7.867 0 0 0-.008.798Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "M119.717 1.257c.387-.132.78-.24 1.177-.321a18.425 18.425 0 0 1 3.139-.404h2.1c.742 0 1.527.147 2.333.285.4.073.807.165 1.221.257.414.091.821.21 1.235.339l.625.202.618.22c.414.147.821.33 1.235.505.415.174.807.376 1.214.568l1.177.643 1.141.697 1.09.743 1.032.77c.335.257.654.533.967.78.312.248.603.532.894.79.29.256.567.495.821.752.516.513.995.917 1.395 1.403.4.487.77.808 1.054 1.138l.894 1.01-.814-1.12c-.255-.358-.596-.77-.981-1.239a35.252 35.252 0 0 0-1.337-1.523c-.24-.284-.516-.54-.793-.825a12.636 12.636 0 0 0-.879-.835c-.312-.266-.625-.57-.959-.853l-1.032-.817-1.097-.789c-.371-.248-.763-.486-1.149-.734l-1.206-.67c-.414-.192-.821-.412-1.243-.596a16.672 16.672 0 0 0-1.264-.505l-.632-.22-.64-.192a18.023 18.023 0 0 0-4.905-.734 15.767 15.767 0 0 0-2.137.11c-.599.063-1.196.164-1.787.303-.531.119-.981.256-1.352.376-.371.119-.661.247-.857.33l-.298.156ZM120.661 20.954 93.555 42.156l27.964-19.34-.858-1.862Z",
                }),
                r.createElement("path", {
                  fill: "#fff",
                  d: "m120.269 22.33 14.897 8.33-13.763-10.99-1.134 2.66Z",
                })
              )),
            n ||
              (n = r.createElement(
                "defs",
                null,
                r.createElement(
                  "clipPath",
                  { id: "a" },
                  r.createElement("path", {
                    fill: "#fff",
                    d: "M.5 0h300v127.881H.5z",
                  })
                )
              ))
          );
        },
        f = l(6010);
      let m = () => {
        let e = (0, r.useRef)(null),
          [t, l] = (0, r.useState)(!1);
        (0, i.a)(e, l, t);
        let c = (0, f.Z)(
            "grid grid-cols-1 overflow-hidden bg-blue-300 px-6 py-40 transition-all duration-[1s] ease-in-out md:px-24 lg:grid-cols-[1fr,800px,1fr] lg:px-0 lg:py-14",
            { "opacity-1": t, "opacity-0": !t }
          ),
          n = (0, f.Z)(
            "col-span-2 max-w-[400px] font-lato text-3xl font-bold leading-9 text-white duration-[1s] ease-in-out",
            {
              "translate-x-[0%] opacity-1": t,
              "translate-x-[-30%] opacity-0": !t,
            }
          ),
          s = (0, f.Z)("duration-[1s] ease-in-out lg:ml-auto", {
            "translate-x-[0%] opacity-1": t,
            "translate-x-[30%] opacity-0": !t,
          }),
          g = (0, f.Z)(
            "flex h-[130px] w-[250px] duration-[1s] ease-in-out sm:w-[300px] lg:hidden",
            {
              "translate-x-[0%] opacity-1": t,
              "translate-x-[30%] opacity-0": !t,
            }
          );
        return (0, a.jsx)("section", {
          ref: e,
          className: c,
          children: (0, a.jsxs)("div", {
            className:
              "m-auto flex w-full flex-col items-center justify-center gap-14 text-center lg:col-start-2 lg:grid lg:grid-cols-3 lg:gap-12 lg:text-start",
            children: [
              (0, a.jsx)("div", { className: g, children: (0, a.jsx)(p, {}) }),
              (0, a.jsx)("h2", {
                className: n,
                children:
                  "Talking with us is free and we will give you awesome tips",
              }),
              (0, a.jsx)("div", {
                className: s,
                children: (0, a.jsx)(o.Q, {
                  id: "work-with-us",
                  label: "Work with us",
                  href: "/contact-us.html",
                  variant: "warning",
                  size: "large",
                  children: "Work with us",
                }),
              }),
            ],
          }),
        });
      };
    },
    6295: function (e, t, l) {
      l.d(t, {
        Bj: function () {
          return i;
        },
        Om: function () {
          return a;
        },
        Yb: function () {
          return g;
        },
        cz: function () {
          return n;
        },
        hR: function () {
          return r;
        },
        oz: function () {
          return o;
        },
        qo: function () {
          return s;
        },
        ye: function () {
          return c;
        },
      });
      let c = "Tryspikes \xb7 Custom software development",
        n =
          "Everybody talks about amazing products. We build them. Software Development Agency specialized in building High Performance and Resilient Software.",
        a =
          "software development agency, mvp software development, react native development, tryspikes, ai & ml development agency, nearshoring software agency, nextjs software development, mlops, devops",
        r = "Tryspikes \xb7 Services",
        i = "Tryspikes \xb7 Blog",
        o = "Tryspikes \xb7 Case Studies",
        s = "Tryspikes \xb7 Contact Us",
        g = "Tryspikes \xb7 About Us";
    },
    8903: function (e, t, l) {
      l.d(t, {
        a: function () {
          return n;
        },
      });
      var c = l(7294);
      let n = (e, t, l) => {
        (0, c.useEffect)(() => {
          let c = () => {
            if (!l && window && e.current) {
              let { top: l } = e.current.getBoundingClientRect();
              l <= window.innerHeight - 200 && t(!0);
            }
          };
          return (
            c(),
            window.addEventListener("scroll", c),
            () => {
              window.removeEventListener("scroll", c);
            }
          );
        }, [e, t, l]);
      };
    },
  },
]);
