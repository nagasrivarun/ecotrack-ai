import { render, screen } from '@testing-library/react'
import Dashboard from '../pages/Dashboard.jsx'

describe('Dashboard page', () => {
  it('renders dashboard metrics and charts', async () => {
    render(<Dashboard />)

    expect(await screen.findByRole('heading', { name: /Total footprint/i })).toBeInTheDocument()
    expect(await screen.findByRole('heading', { name: /Goal progress/i })).toBeInTheDocument()
    expect(await screen.findByRole('heading', { name: /Carbon score/i })).toBeInTheDocument()
  })

  it('renders a valid score gauge and recommendation section', async () => {
    render(<Dashboard />)

    expect(await screen.findByText(/Rating:/i)).toBeInTheDocument()
    expect(await screen.findByRole('heading', { name: /Insights/i })).toBeInTheDocument()
  })
})
