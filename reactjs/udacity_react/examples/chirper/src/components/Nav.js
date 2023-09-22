import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink exact='true' to='/' activeclassname='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/new' activeclassname='active'>
            New Tweet
          </NavLink>
        </li>
      </ul>
    </nav>

  )
}