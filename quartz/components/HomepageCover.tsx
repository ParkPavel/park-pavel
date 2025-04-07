import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HomepageCover: QuartzComponent = () => {
  return (
    <div className="homepage-cover">
      <img src={`${baseUrl}static/og-imagelight.png`} alt="Обложка для светлого режима" className="cover-light" />
      <img src={`${baseUrl}static/og-imagedark.png`} alt="Обложка для тёмного режима" className="cover-dark" />
    </div>
  )
}

export default (() => HomepageCover) satisfies QuartzComponentConstructor