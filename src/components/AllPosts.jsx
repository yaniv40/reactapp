import React from 'react'
import Post from './Post'
export default function AllPosts(props) {
  return (
    <div>
        {props.posts.map((val,index)=>{
return <Post del={props.del} val={val} index={index}/>

        })}
    </div>
  )
}
