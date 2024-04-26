import { createContext } from "react";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdDelete,MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const categoryContex=createContext()
const CategoryContexApi=({children})=>{
    const [Data ,setData]=useState([]);
    const getData=()=>{
    try {
        axios
        .get("http://localhost:3000/category")
        .then((res)=>{
          console.log("aryal",res)
          setData([...res.data.result])
        })
  .catch((err)=>{
  console.log(err)
  })
      
    } catch (error) {
      console.log(error)
    }
  }
    useEffect(()=>{
      getData()
    },[]);
  
return(
    <>
    <categoryContex.Provider value={{message:"pratik"}} >

{children}
    </categoryContex.Provider>

    </>
);
};
export default CategoryContexApi;