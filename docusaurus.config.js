const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "⠀",
  tagline: "web version of book",
  url: "https://chemistry-in-english-ebook.netlify.app",
  baseUrl: "/",
  onBrokenMarkdownLinks: "warn",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  titleDelimiter: "⠀",
  organizationName: "wsehl & thaseyour",
  projectName: "cie-ebook",
  themeConfig: {
    navbar: {
      title: "CIE-Ebook",
      logo: {
        alt: "Website Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "glossary",
          label: "Chemical Glossary App",
          position: "left",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} cie-ebook, Built with Docusaurus.`,
    },
    sidebarCollapsible: true,
    hideableSidebar: true,
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: "⠀",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIcon: "⠀",

        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    /*
    announcementBar: {
      id: "announcement",
      content: "#BlackLivesMatter",
      backgroundColor: "#000",
      textColor: "#fff",
      isCloseable: true,
    },
    */
    googleAnalytics: {
      trackingID: "UA-141789564-1",
      anonymizeIP: true,
    },
  },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: "/",
        docsDir: "docs",
        language: ["en", "ru"],
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        //swCustom: path.resolve(__dirname, 'src/sw.js'),
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/icon.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#3a57ab",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/icon.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/logo.svg",
            color: "#3a57ab",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/icon.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#3a57ab",
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/wsehl/nis-cwb/tree/master",
          routeBasePath: "/",
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
};
