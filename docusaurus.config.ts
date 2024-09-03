import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Bryce's Blog",
  url: "https://blog.brycemcwhirter.com",
  baseUrl: "/",
  favicon: 'img/favicon.ico',


  organizationName: "brycemcwhirter", // Usually your GitHub org/user name.
  projectName: "brycemcwhirter.github.io", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    async function myPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image:
      "https://avatars.githubusercontent.com/u/45834798?s=400&u=37899831ff85ae686009d4ebb63a158726a30c33&v=4",
    navbar: {
      title: "Bryce McWhirter ",
      logo: {
        alt: "My Site Logo",
        src: "https://avatars.githubusercontent.com/u/45834798?s=400&u=37899831ff85ae686009d4ebb63a158726a30c33&v=4",
      },
      items: [
        { to: "/tags", label: "Tags", position: "left" },
        {
          href: "https://github.com/brycemcwhirter",
          className: "header-github-link",
          position: "right",
          "aria-label": "GitHub repository",
        },
        {
          href: "https://brycemcwhirter.com",
          label: "BryceMcWhirter.com",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
