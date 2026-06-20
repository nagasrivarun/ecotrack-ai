import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../pages/Calculator.jsx'

describe('Calculator page', () => {
  it('renders calculator fields and updates values', () => {
    render(<Calculator />)

    expect(screen.getByLabelText(/Daily car travel/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Monthly electricity/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /save inputs/i })).toBeInTheDocument()
  })

  it('handles zero emissions values', () => {
    render(<Calculator />)

    fireEvent.change(screen.getByLabelText(/Daily car travel/i), { target: { value: '0' } })
    fireEvent.change(screen.getByLabelText(/Daily bus travel/i), { target: { value: '0' } })
    fireEvent.change(screen.getByLabelText(/Daily train travel/i), { target: { value: '0' } })
    fireEvent.change(screen.getByLabelText(/Monthly electricity/i), { target: { value: '0' } })
    fireEvent.change(screen.getByLabelText(/Flights per year/i), { target: { value: '0' } })
    fireEvent.change(screen.getByLabelText(/Food type/i), { target: { value: 'vegetarian' } })

    expect(screen.getByText(/Carbon Score/i)).toBeInTheDocument()
    expect(screen.getByText('92')).toBeInTheDocument()
  })
})
