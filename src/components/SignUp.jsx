import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function SignUp(props) {
const nav =useNavigate()

const[name,setName]=useState('')
const[price,setPrice]=useState(0)

const valid =()=>{
if(name.length ==''){
    alert ('name empty')
    return false;
}
if(price<= 0){
    alert('must positive number')
    return false;
}
props.add(name,price)
nav('/allpost')
}

  return (
    <div>
        
        <input onChange={(e)=>{setName(e.target.value)}} type="text"  placeholder='enter name'/>
        <br />
        <input  onChange={(e)=>{setPrice(e.target.value)}} type="text" placeholder='enter price' />
        <br />
<button onClick={valid}>add post</button>


    </div>
  )
}
