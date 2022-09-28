import React from 'react'
import { Link } from 'react-router-dom'
import './Pnf.css'

export default function Pnf() {
  return (
    <div>

        <img src="../../../../Images/img3.png" alt="a car" className="Pnf__img"/>
        <p><Link to="/home-page">Click me</Link> to go to home page</p>
    </div>
  )
}
