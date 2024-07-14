import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { EpisodesTable } from './EpisodesTable'

describe('Episodes table', () => {
    
  it('renders the Episodes Table component', () => {
    expect(render(<BrowserRouter><EpisodesTable episodes={[]} /></BrowserRouter>))
  })

})

