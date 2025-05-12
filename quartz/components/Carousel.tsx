import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import { FullPageLayout } from "../cfg" // Remove unused import
// @ts-ignore
import script from "./scripts/carousel.inline"


function Carousel({ displayClass, fileData }: QuartzComponentProps) {
  const urls: string[] = (fileData.frontmatter?.carouselUrls as string[] | undefined) || []
  const titles: string[] = ["Авторские портреты", "Художественные портреты", "Пейзажи"]

  if (urls.length === 0 || urls.length !== titles.length) {
    console.error("Carousel: Number of URLs and titles do not match or no URLs provided.")
    return null
  }

  return (
    <div class={`carousel-container ${displayClass ?? ""}`}>
      <div class="carousel-header" data-titles={JSON.stringify(titles)}> {/* Pass titles as data attribute */}
        <button class="carousel-button prev" aria-label="Previous slide">{"<"}</button>
        <h3 class="carousel-title">{titles[0]}</h3> {/* Initial title */}
        <button class="carousel-button next" aria-label="Next slide">{">"}</button>
      </div>
      <div class="carousel-wrapper">
        <div class="carousel-content">
          {urls.map((url, index) => (
            <div class="carousel-item" key={index}>
              <iframe src={url} width="100%" height="600" frameBorder="0" allowFullScreen></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Carousel.css = `
.carousel-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 20px 0;
}

.carousel-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.carousel-title {
  margin: 0 20px;
  font-size: 1.5em;
  text-align: center;
  flex-grow: 1;
}


.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-content {
  display: flex;
  width: 100%;
}

.carousel-item {
  flex: 1 0 100%;
  box-sizing: border-box;
  padding: 0 10px;
}

.carousel-item iframe {
  width: 100%;
  height: 600px;
  display: block;
}

.carousel-button {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  z-index: 10;
  font-size: 24px;
  line-height: 1;
  opacity: 0.9;
  transition: opacity 0.2s ease-in-out;
  border-radius: 5px;
  flex-shrink: 0;
  transition: transform 0.1s ease-in-out; /* Add transition for press effect */
}

.carousel-button:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 1);
}

.carousel-button:active { /* Add active state for press effect */
  transform: scale(0.95);
}

/* Remove absolute positioning from buttons */
.carousel-button.prev {
  /* left: 10px; */
}

.carousel-button.next {
  /* right: 10px; */
}
`

Carousel.afterDOMLoaded = script

export default (() => Carousel) satisfies QuartzComponentConstructor
