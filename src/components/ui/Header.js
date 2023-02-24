import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link" href="#">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link" href="#">Register</Link>
            </li>
        </ul>

    </header>
  )
}
