import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
      <nav>
        <ul>

          <li><Link to="/page1">page1</Link></li>
          <li><Link to="/page2">page2</Link></li>
          <li><Link to="/page3">page3</Link></li>

        </ul>
      </nav>
  )
}
