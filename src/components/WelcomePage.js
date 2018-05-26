import React from 'react'
import { Link } from 'react-router-dom'

export const WelcomePage = () => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>League of Legends Guides </h1>
      <p>Feel free to navigate and use these free and simple champion guides</p>
      <Link to='/champions'>Champions</Link>
    </div>
  </div>
)

export default WelcomePage
