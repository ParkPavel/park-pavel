import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HomepageCover: QuartzComponent = ({ cfg }) => {
  // Убедимся, что baseUrl корректно формируется
 const baseUrl = cfg.baseUrl?.endsWith("/") ? cfg.baseUrl : `${cfg.baseUrl ?? ""}/`

  return (
    <div className="homepage-cover">
      <img src={`https://${baseUrl}static/og-imagelight.png`} alt="Обложка для светлого режима" className="cover-light" />
      <img src={`https://${baseUrl}static/og-imagedark.png`} alt="Обложка для тёмного режима" className="cover-dark" />
    </div>
  )
}

export default (() => HomepageCover) satisfies QuartzComponentConstructor
