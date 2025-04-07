import { QuartzComponent, QuartzComponentConstructor } from "./types"
import * as Component from "./index" // Импортируем объект Component

const HomepageCover: QuartzComponent = ({ cfg }) => {
  const baseUrl = cfg.baseUrl?.endsWith("/") ? cfg.baseUrl : `${cfg.baseUrl}/`

  return (
    <div className="homepage-cover">
      <img src={`${baseUrl}static/og-imagelight.png`} alt="Обложка для светлого режима" className="cover-light" />
      <img src={`${baseUrl}static/og-imagedark.png`} alt="Обложка для тёмного режима" className="cover-dark" />
    </div>
  )
}

export default Component.ConditionalRender({
  component: HomepageCover,
  condition: (page) => page.fileData.slug === "index", // Только для главной страницы
}) satisfies QuartzComponentConstructor