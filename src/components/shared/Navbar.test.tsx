import { fireEvent, render } from '@testing-library/react'
import {Navbar} from './Navbar'
import { BrowserRouter, MemoryRouter, Router, useLocation } from 'react-router-dom'

describe('Navbar', () => {
    
  it('renders the Navbar component', () => {
    expect(render(<BrowserRouter><Navbar /></BrowserRouter>))
  })

  it('renders the Podcaster word', () => {
    const { getByText } = render (<BrowserRouter><Navbar /></BrowserRouter>)
    expect(getByText(/Podcaster/i)).toBeInTheDocument()
  })

  it('renders the Loader when page is loading', () => {
    const { getByTestId } = render (<BrowserRouter><Navbar /></BrowserRouter>)
    expect(getByTestId("loader")).toBeInTheDocument()
  })

  it('redirects the navigation to / when Podcaster is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const span = getByText(/Podcaster/i);
    fireEvent.click(span);
    expect(window.location.pathname).toBe('/');
  });

})

