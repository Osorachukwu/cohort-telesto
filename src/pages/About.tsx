import React, { useContext } from 'react'
import { TelestoConstext } from '../App'
import Component5 from '../components/Component5'
import Component1 from '../components/Component1'

function About() {
  const thatContext = useContext(TelestoConstext)
  return (
    <div className='text-white'>
      <p>About</p>
      <Component1 />
    </div>
  )
}

export default About