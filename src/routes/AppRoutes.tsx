import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import About from '../pages/About'
import DesktopNav from '../components/nav/DesktopNav'
import Footer from '../components/Footer'

function AppRoutes() {
  return (
    <BrowserRouter>
    <DesktopNav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes