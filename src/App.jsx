import { useState } from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Syallabus from "./Syallabus_g"
import Courses from "./Courses"
import Singlecoursseview_g from './Singlecoursseview_g'
import Edit from './Edit'
import Category from "./Category"
import Caategory from './Caategory'
import Edits from './UI/Edits'


function App() {


  return (
    <>
    {/* <div className='h-fit w-full'>     */}
    {/* <div className='flex justify-center items-center text-2xl text-blue-500 font-bold my-6'>WELCOME TO HUBIT</div> */}
   
    <Router>
    <Routes>
      <Route path="/" element={<Syallabus />}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/Singlecoursseview/:id" element={<Singlecoursseview_g/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/caategory" element={<Caategory/>}/>
      <Route path="/edits/:id" element={<Edits/>}/>

    </Routes>
    </Router> 
    {/* </div> */}

    </>
  )
}

export default App
