import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { EpisodesCount } from './EpisodesCount'


describe('Episodes Count', () => {
    
  it('renders the Episodes Count component', () => {
    expect(render(<BrowserRouter><EpisodesCount count={2} /></BrowserRouter>))
  })

  it('display the correct number of episodes on the episodes indicator', () => {
    let contador:number = 2

    const { getByTestId } = render(
        <BrowserRouter>
            <EpisodesCount count={contador} />
        </BrowserRouter>
    );

    const episodesCountSpan = getByTestId("episodes-count");


    expect(episodesCountSpan.textContent).toBe(`Episodes: ${contador}`);
    
  })

})

