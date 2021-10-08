module.exports = {
  title: "⠀",
  tagline: "chemistry, ebook, chemistry ebook, cie-ebook",
  url: "https://cie-ebook.ml/",
  baseUrl: "/",
  onBrokenMarkdownLinks: "warn",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  titleDelimiter: "⠀",
  organizationName: "https://github.com/anyrange",
  projectName: "cie-ebook",
  trailingSlash: false,
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
        {
          to: "https://www.cambridgeenglish.org/test-your-english/",
          label: "Test Your English",
          position: "left",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} cie-ebook, Built with Docusaurus.`,
    },
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
    gtag: {
      trackingID: "G-SZQK03TWJ3",
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
        debug: false,
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/icon.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(33, 150, 243)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#2196f3",
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
            color: "#2196f3",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/icon.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#2196f3",
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
          sidebarPath: require.resolve("./src/sidebar.js"),
          editUrl: "https://github.com/anyrange/cie-ebook/tree/master",
          routeBasePath: "/",
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
