import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tjanster from './pages/Tjanster'
import Kundcase from './pages/Kundcase'
import Material from './pages/Material'
import OmAI from './pages/OmAI'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/ai-slutprojekt">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tjanster" element={<Tjanster />} />
          <Route path="/kundcase" element={<Kundcase />} />
          <Route path="/material" element={<Material />} />
          <Route path="/om-ai" element={<OmAI />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
