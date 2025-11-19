import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../components/Products'
import Hero from '../components/home/Hero'

function Home() {
  return (
    <div className='bg-white'>
      <Hero />
      <Products />
    </div>
  )
}

export default Home