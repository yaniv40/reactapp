import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <Link to={'/signup'}><button>go to sign up page</button></Link>
    </div>
  )
}
