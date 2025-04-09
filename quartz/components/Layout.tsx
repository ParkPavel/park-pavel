import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Layout: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-root">{children}</div>
}

export default (() => Layout) satisfies QuartzComponentConstructor