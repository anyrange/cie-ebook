module.exports = {
  title: 'NIS-CWB',
  tagline: 'web version of book',
  url: 'https://nis-webbook.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'wsehl', // Usually your GitHub org/user name.
  projectName: 'nis-webbook', // Usually your repo name.
  titleDelimiter: '-',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '⠀',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    sidebarCollapsible: false,
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'work in progress',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    image: 'img/docusaurus.png',
    gtag: {
      trackingID: 'G-LD0YSGQ590',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    googleAnalytics: {
      trackingID: 'G-LD0YSGQ590',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
    navbar: {
      title: 'NIS Chemistry WebBook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
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
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NIS Chemistry WebBook. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/wsehl/nis-webbook',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: "/",
        docsDir: "docs",
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
};
