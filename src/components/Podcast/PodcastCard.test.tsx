import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {  TEST_EPISODE } from '../../constants/data'
import { PodcastCard } from './PodcastCard'
import { IEpisode } from '../../models/episodes-model'

describe('Podcast Card', () => {
    
  it('renders the Podcast Card component', () => {

    const episode:IEpisode = TEST_EPISODE
    expect(render(<BrowserRouter><PodcastCard episode={episode} callback={() => {}} /></BrowserRouter>))
  })

  it('display the correct episode on the card', () => {
    const episode:IEpisode = TEST_EPISODE

    const { getByTestId } = render(<BrowserRouter><PodcastCard episode={episode} callback={() => {}}  /></BrowserRouter>)

    const span = getByTestId("collection-card")

    expect(span.textContent).toBe(episode.collectionName);
    
  })

})

