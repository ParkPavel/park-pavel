import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Park pavel",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "/park-pavel/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F5F5DC", // Бежевый
          lightgray: "#E5E5E5",
          gray: "#B8B8B8",
          darkgray: "#4E4E4E",
          dark: "#2F4F4F", // Темный серо-зеленый
          secondary: "#556B2F", // Оливковый зеленый
          tertiary: "#8FBC8F", // Светло-зеленый
          highlight: "rgba(143, 188, 143, 0.15)", // Мягкий зеленый
          textHighlight: "#FFD70088", // Золотистый
        },
        darkMode: {
          light: "#2F4F4F", // Темный серо-зеленый
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#D4D4D4",
          dark: "#F5F5DC", // Бежевый
          secondary: "#8FBC8F", // Светло-зеленый
          tertiary: "#rgba(14, 199, 231, 0.53)", // Золотистый
          highlight: "rgba(143, 188, 143, 0.15)", // Мягкий зеленый
          textHighlight: "#FFD70088", // Золотистый
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
