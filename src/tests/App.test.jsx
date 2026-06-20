import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layouts/Layout.jsx'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'

describe('App routing', () => {
  it('renders the home page on root route', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    )

    expect(await screen.findByText(/EcoTrack AI helps you calculate/i, { timeout: 5000 })).toBeInTheDocument()
    expect(await screen.findByRole('link', { name: /Start Calculating/i, timeout: 5000 })).toBeInTheDocument()
  })

  it('shows 404 page for unknown paths', async () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    )

    expect(await screen.findByText(/Oops! This page doesn['’]t exist\./i, { timeout: 5000 })).toBeInTheDocument()
    expect(await screen.findByRole('button', { name: /return home/i, timeout: 5000 })).toBeInTheDocument()
  })
})
