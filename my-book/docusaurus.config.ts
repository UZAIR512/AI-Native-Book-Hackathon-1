import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI-Native Textbook',
  tagline: 'Physical Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // ⭐ GitHub Pages Settings ⭐
  url: 'https://UZAIR512.github.io', 
  baseUrl: '/AI-Native-Book-Hackathon-1/', 
  organizationName: 'UZAIR512', 
  projectName: 'AI-Native-Book-Hackathon-1', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  future: {
    v4: true,
  },

  onBrokenLinks: 'ignore', // Link errors ki wajah se build nahi rukay gi
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/UZAIR512/AI-Native-Book-Hackathon-1/tree/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI-Native Textbook',
      logo: {
        alt: 'Robotics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book Chapters',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/docs/extra/signin', label: 'Sign In', position: 'right' },
        { to: '/docs/extra/signup', label: 'Sign Up', position: 'right' },
        {
          href: 'https://github.com/UZAIR512/AI-Native-Book-Hackathon-1',
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
            { label: 'Introduction', to: '/docs/intro' },
          ],
        },
        {
          title: 'Stay Connected',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/syed-uzairabbas-853091341',
            },
            { label: 'GitHub', href: 'https://github.com/UZAIR512' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI-Native Textbook Project. Built by Uzair Shah.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;