import { render, screen } from '@testing-library/react'
import LoadingScreen from '../components/LoadingScreen.jsx'

describe('LoadingScreen component', () => {
  it('renders the loading title and message', () => {
    render(<LoadingScreen />)

    expect(screen.getByText(/Calculating a Greener Future.../i)).toBeInTheDocument()
    expect(screen.getByText(/Optimizing your experience/i)).toBeInTheDocument()
  })

  it('renders the logo animation container', () => {
    render(<LoadingScreen />)

    expect(screen.getByText(/EcoTrack AI/i)).toBeInTheDocument()
  })
})
