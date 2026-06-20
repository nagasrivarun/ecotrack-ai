import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import Calculator from './pages/Calculator.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Recommendations from './pages/Recommendations.jsx'
import Achievements from './pages/Achievements.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="achievements" element={<Achievements />} />
      </Route>
    </Routes>
  )
}

export default App
