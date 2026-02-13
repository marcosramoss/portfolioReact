import React from 'react'

const Head = (props) => {

  React.useEffect(() => {
    document.title = props.title
    
    const setMeta = (selector, content) => {
      const element = document.querySelector(selector)
      if (element && content) {
        element.setAttribute('content', content)
      }
    }

    setMeta('meta[name="description"]', props.description)
    setMeta('meta[property="og:title"]', props.title)
    setMeta('meta[property="og:description"]', props.description)
    setMeta('meta[property="og:image"]', props.image || window.location.origin + '/img_social.png')
    setMeta('meta[property="og:url"]', window.location.href)

  }, [props])

  return <></>

}

export default Head