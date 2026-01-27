import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import Header from '@/components/Header'
import Home from '@/pages/Home'
import About from '@/pages/About'
import ServicesPage from '@/pages/Services'
import ServiceDetail from '@/pages/ServiceDetail'
import Contact from '@/pages/Contact'
import Footer from '@/components/Footer'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
