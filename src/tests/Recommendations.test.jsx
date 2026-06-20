import { render, screen } from '@testing-library/react'
import Recommendations from '../pages/Recommendations.jsx'

describe('Recommendations page', () => {
  it('renders recommendations page copy and cards', () => {
    render(<Recommendations />)

    expect(screen.getByText(/Personalized recommendations/i)).toBeInTheDocument()
    expect(screen.getByText(/Your monthly emissions are estimated/i)).toBeInTheDocument()
  })

  it('shows recommendation step cards and actionable insights', () => {
    render(<Recommendations />)

    expect(screen.getByText(/Step 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Travel smarter/i)).toBeInTheDocument()
    expect(screen.getByText(/Energy efficiency/i)).toBeInTheDocument()
  })
})
