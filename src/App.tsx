import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Footer from '@/components/Footer'

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
