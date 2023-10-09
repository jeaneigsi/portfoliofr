import React from 'react'
import "./App.css"
import A_propos from './components/container/A_propos/A_propos'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Accueil from './components/container/Accueil/Accueil'
import Portfolio from './components/container/Portfolio/Portfolio'
import Competences from './components/container/Competences/Competences'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Accueil />
      <A_propos />
      <Competences />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
