module.exports = {
  title: 'NIS-CWB',
  tagline: 'web version of book',
  url: 'https://nis-webbook.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'NIS-CWB', // Usually your repo name.
  themeConfig: {
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
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
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
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
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
};
