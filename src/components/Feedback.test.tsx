import { render } from '@testing-library/react'
import Feedback from './Feedback'
import '@testing-library/jest-dom'

describe('Feedback', () => {
  it('should render same children', () => {
    const rowyUrl = "https://rowy-hooks.run.app/wh/..."
    const { getByText } = render(
      <Feedback rowyUrl={rowyUrl}>
        <button>Feedback</button>
      </Feedback>
    )
    expect(getByText('Feedback')).toBeInTheDocument()
  })

  it('append data-feedbackfin-button to  child', () => {
    const rowyUrl = "https://rowy-hooks.run.app/wh/..."
    const { getByRole } = render(
      <Feedback rowyUrl={rowyUrl}>
        <button>Feedback</button>
      </Feedback>
    )
    const testBtn = getByRole('button')
    expect(testBtn).toHaveAttribute('data-feedbackfin-button', 'true')
  })
})
