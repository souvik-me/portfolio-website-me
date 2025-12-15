import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudy from './components/CaseStudy'
import BlogPost from './components/BlogPost'
import Resume from './components/Resume'
import './App.css'

function App() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/case-study/:projectId" element={<CaseStudy />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
