import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.JivoChat(), // Add Jivo chat component
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ParkPavel/park-pavel",
      Telegram: "https://t.me/parkpavel",
      "Согласие на обработку персональных данных": "https://parkpavel.github.io/park-pavel/PS-Приложения-к-сайту/Согласие-на-обработку-персональных-данных",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Условно рендерим обложку только на главной странице
    Component.ConditionalRender({
      component: Component.HomepageCover(),
      condition: (page) => page.fileData.slug === "index", // Только для главной страницы
    }),
    Component.ArticleTitle(), // Заголовок рендерится после обложки
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
