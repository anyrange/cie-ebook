module.exports = {
  title: "⠀",
  tagline: "web version of book",
  url: "https://chemistry-in-english-ebook.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "wsehl",
  projectName: "cie-ebook",
  titleDelimiter: "⠀",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
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
    sidebarCollapsible: false,
    hideableSidebar: true,
    /*
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'announcement',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    */
    image: "img/docusaurus.png",
    gtag: {
      trackingID: "G-LD0YSGQ590",
      anonymizeIP: true,
    },
    googleAnalytics: {
      trackingID: "G-LD0YSGQ590",
      anonymizeIP: false,
    },
    googleAdsense: {
      dataAdClient: "ca-pub-1858712158191719",
    },
    navbar: {
      title: "Chemistry in English e-book",
      logo: {
        alt: "Website Logo",
        src: "img/logo.svg",
      },
      items: [
        /*
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        */
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/wsehl/nis-cwb/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-google-adsense",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: "/",
        docsDir: "docs",
        language: ["en", "ru"],
      },
    ],
  ],
};
