import {HashRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import AllPosts from './components/AllPosts';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  const [post,setPost]=useState([])
const add = (name,price)=>{
let temp ={
  name,
  price
}
setPost([...post,temp])
}


const del =(i)=>{
let temp =post;
 let  temp1 = temp.filter((val,index)=>(index!=i))

setPost([...temp1])
}

  return (
    <div className="App">
   <HashRouter>
   <Home/>
   <hr />
    <Routes>

      <Route path='/allpost' element={<AllPosts del={del} posts={post}/>}/>
      <Route path='/signup' element={<SignUp add={add}/>}/>
    </Routes>
   </HashRouter>
    </div>
  );
}

export default App;
