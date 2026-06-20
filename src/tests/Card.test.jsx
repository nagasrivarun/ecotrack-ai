import { render, screen } from '@testing-library/react'
import Card from '../components/Card.jsx'

describe('Card component', () => {
  it('renders title, subtitle, and children', () => {
    render(<Card title="Test title" subtitle="Test subtitle"><p>Child content</p></Card>)

    expect(screen.getByRole('heading', { name: /test title/i })).toBeInTheDocument()
    expect(screen.getByText(/test subtitle/i)).toBeInTheDocument()
    expect(screen.getByText(/child content/i)).toBeInTheDocument()
  })

  it('supports custom class names', () => {
    const { container } = render(
      <Card title="Styled" subtitle="Custom" className="custom-class">
        <p>Styled child</p>
      </Card>,
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })
})
