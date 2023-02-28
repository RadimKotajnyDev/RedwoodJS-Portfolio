import { render } from '@redwoodjs/testing/web'

import HobbyPage from './HobbyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HobbyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HobbyPage />)
    }).not.toThrow()
  })
})
