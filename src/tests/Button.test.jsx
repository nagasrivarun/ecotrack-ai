import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Button from '../components/Button.jsx'

describe('Button component', () => {
  it('renders a normal button and responds to click', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders an internal link with the correct href', () => {
    render(
      <MemoryRouter>
        <Button to="/calculator">Calculator</Button>
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /calculator/i })).toHaveAttribute('href', '/calculator')
  })

  it('renders an external link with target and rel attributes', () => {
    render(<Button to="https://example.com">External</Button>)

    const link = screen.getByRole('link', { name: /external/i })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })
})
