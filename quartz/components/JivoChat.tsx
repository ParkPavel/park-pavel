import { QuartzComponent, QuartzComponentConstructor } from "./types"

const JivoChat: QuartzComponent = () => {
  return null
}

JivoChat.afterDOMLoaded = `
(function() {
  var widget_id = '5U192ufdG5';
  var d = document;
  var w = window;

  function l() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//code.jivosite.com/script/widget/' + widget_id;

    // Добавляем изолированные стили только для JivoChat
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = \`
      jdiv[class*=__jivoMobileButton] {
        left: 20px !important;
        right: auto !important;
        z-index: 90 !important;
      }
    \`;
    document.head.appendChild(css);
    
    var ss = document.getElementsByTagName('script')[0];
    ss.parentNode.insertBefore(s, ss);
  }

  if (d.readyState === 'complete') {
    l();
  } else {
    if (w.attachEvent) {
      w.attachEvent('onload', l);
    } else {
      w.addEventListener('load', l, false);
    }
  }
})();
`

// Правильный экспорт через QuartzComponentConstructor
export default (() => {
  return JivoChat
}) satisfies QuartzComponentConstructor
