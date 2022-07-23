import { useEffect, cloneElement, ReactElement } from 'react'

const Feedback: React.FC<FeedbackProps>  = ({ children, rowyUrl }): JSX.Element => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const feedbackfinScript = document.createElement('script')
      feedbackfinScript.src = 'https://unpkg.com/feedbackfin'
      feedbackfinScript.defer = true
      feedbackfinScript.type = 'text/javascript'

      document.body.appendChild(feedbackfinScript)
      feedbackfinScript.addEventListener('load', () => {
        window.feedbackfin = { config: {}, ...window.feedbackfin }
        window.feedbackfin.config.url = rowyUrl
      })
    }
  }, [])
  return <>{cloneElement(children, { 'data-feedbackfin-button': true })}</>
}

interface FeedbackProps {
  children: ReactElement
  rowyUrl: string
}

export default Feedback
