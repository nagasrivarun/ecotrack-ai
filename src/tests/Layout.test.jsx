import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout.jsx'

function DummyPage() {
  return <div>Page content</div>
}

describe('Layout component', () => {
  it('renders navigation links and footer correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/*" element={<Layout />}> 
            <Route index element={<DummyPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    )

    const homeLinks = screen.getAllByRole('link', { name: /Home/i })
    expect(homeLinks.length).toBeGreaterThan(0)
    expect(homeLinks[0]).toHaveAttribute('href', '/')

    const calculatorLinks = screen.getAllByRole('link', { name: /Calculator/i })
    expect(calculatorLinks.length).toBeGreaterThan(0)
    expect(calculatorLinks[0]).toHaveAttribute('href', '/calculator')

    expect(screen.getByText(/© 2026 EcoTrack AI/i)).toBeInTheDocument()
  })
})
