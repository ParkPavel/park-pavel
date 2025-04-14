import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Пак Павел",
    pageTitleSuffix: "Цифровой сад",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: '<G-PWSGWTQ0NR>'
    },
    locale: "ru-RU",
    baseUrl: "/park-pavel/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: {
          name: "Bitter",
          weights: [400, 500, 700],
          includeItalic: true,
        },
        header: {
          name: "Open Sans",
          weights: [400, 500, 600],
          includeItalic: true,
        },
        body: {
          name: "PT Sans",
          weights: [400, 700],
          includeItalic: true,
        },
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfbf7",      // Soft cream white
          lightgray: "#e5e6e4",  // Light sage
          gray: "#b8c1bc",       // Muted sage
          darkgray: "#424a45",   // Deep forest gray
          dark: "#2d332f",       // Forest charcoal
          secondary: "#687864",  // Sage green
          tertiary: "#819b7d",   // Forest mint
          highlight: "#e9f0e6",  // Light mint highlight
          textHighlight: "#f0f7ed", // Softer mint highlight
        },
        darkMode: {
          light: "#1a1d1c",      // Deep charcoal
          lightgray: "#2a2e2d",  // Darker sage
          gray: "#9ba69f",       // Muted sage
          darkgray: "#d8e0d5",   // Light sage
          dark: "#eef2eb",       // Off white
          secondary: "#90a898",  // Sage green
          tertiary: "#708b78",   // Forest mint
          highlight: "#2d3831",  // Deep forest highlight
          textHighlight: "#3a483e", // Darker forest highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
