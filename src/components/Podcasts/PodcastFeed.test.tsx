import { render } from '@testing-library/react'
import { PodcastFeed } from './PodcastFeed'
import { BrowserRouter } from 'react-router-dom'
import { PODCASTS_TO_TEST } from '../../constants/data'

describe('Podcast Feed', () => {
    
  it('renders the Podcast Feed component', () => {
    expect(render(<BrowserRouter><PodcastFeed filteredPodcasts={[]} /></BrowserRouter>))
  })

  it('display the correct number of podcast', () => {
    let podcast_test:any = PODCASTS_TO_TEST

    const { getAllByTestId } = render(<BrowserRouter><PodcastFeed filteredPodcasts={podcast_test} /></BrowserRouter>)

    const spans = getAllByTestId("podcast-feed")

    expect(spans.length).toBe(podcast_test.length);
    
  })

})

