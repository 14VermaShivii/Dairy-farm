import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Home } from './Componets/Home'
import { Header } from './Shared/Header'
import { Footer } from './Shared/Footer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
