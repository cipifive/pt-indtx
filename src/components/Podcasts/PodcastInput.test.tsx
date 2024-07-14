import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PODCASTS_TO_TEST } from '../../constants/data'
import { PodcastInput } from './PodcastInput'

describe('Podcast Input', () => {
    
  it('renders the Podcast Input component', () => {
    expect(render(<BrowserRouter><PodcastInput filteredPodcasts={[]} handleFilterPodcasts={ (): void => {}} /></BrowserRouter>))
  })

  it('display the correct number of podcast on the podcast indicator', () => {
    let podcast_test:any = PODCASTS_TO_TEST

    const { getByTestId } = render(
        <BrowserRouter>
            <PodcastInput filteredPodcasts={podcast_test} handleFilterPodcasts={(): void => {}} />
        </BrowserRouter>
    );

    const podcastCountSpan = getByTestId("podcast-count");

    const displayedPodcastCount = parseInt(podcastCountSpan.textContent || '0', 10);

    expect(displayedPodcastCount).toBe(podcast_test.length);
    
  })

})

