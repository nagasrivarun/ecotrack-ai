import { render, screen } from '@testing-library/react'
import Achievements from '../pages/Achievements.jsx'

const badgeNames = ['Eco Starter', 'Carbon Saver', 'Green Warrior', 'Earth Protector']

describe('Achievements page', () => {
  it('renders achievement wall and current badge', () => {
    render(<Achievements />)

    expect(screen.getByText(/Achievement wall/i)).toBeInTheDocument()
    expect(screen.getByText(/Your current badge/i)).toBeInTheDocument()
  })

  it('renders all achievement badge headings with correct labels', () => {
    render(<Achievements />)

    badgeNames.forEach((name) => {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    })
  })
})
