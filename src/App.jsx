import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Calculator = lazy(() => import('./pages/Calculator.jsx'))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const Recommendations = lazy(() => import('./pages/Recommendations.jsx'))
const Achievements = lazy(() => import('./pages/Achievements.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
