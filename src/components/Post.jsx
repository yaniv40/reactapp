import React from 'react'
import { Link } from 'react-router-dom'
export default function Post(props) {
  return (
    <div style={{border:'1px solid blue'}}>
        <h1>{props.val.name}</h1>
        <h3>{props.val.price}</h3>
        <button onClick={()=>{props.del(props.index) }}>x</button>
<Link to={'/signup'}><button>go to sign up page</button></Link>

    </div>
  )
}
