import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { MdDelete,MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { categoryContex } from './UI/CategoryContex';

const Caategory = () => {
  const CategoryCont=useContext(categoryContex)
  console.log(CategoryCont)

  const Navigate=useNavigate();

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

  const deleteData=(id)=>{
    try {
      
        
        axios
        .delete(`http://localhost:3000/category/${id}`)
        .then((res)=>{
          toast.error("data has been deleted")
          // console.log( toast.delete("data has been deleted"))
          console.log("aryal",res)
          getData();
          // setData([...res.data.result])
        })
  .catch((err)=>{
  console.log(err)
  })
      
    } catch (error) {
      console.log(error)
    }
   
  
}


  return (
    
    <>
<table className='w-9/12 mx-auto'>
 <thead>
  {/* <tr className='border-4 '> */}
  <tr>
  
    <th className='border-4 border-green-400 px-3 py-3'>
      Sn
    </th>

    <th className='border-4 border-green-400 px-3 py-3'>
      Name
    </th>
    <th className='border-4 border-green-400 px-3 py-3'>
      Action
    </th>
 
  </tr>
 </thead>
 <tbody>

 { Data.map((val,i)=>{
    return(
      <tr>
        <td className='px-3 py-4 border-4 border-gray-500'>{i+1}</td>
<td className='px-4 text-black border-4 border-gray-500 '>
  {val.name}


</td>
<td className='px-3 py-4 border-4 border-gray-500'>
  <div className='flex gap-20'>
  <div>
    <MdDelete onClick={()=>{
      deleteData(val.id)
      console.log("haha  ")
    }}/>
  </div>
  <div>
  <MdEdit onClick={()=>{
    Navigate(`/Edits/${val.id}`,{
      state:{
        ...val
      }
    })
  }}/>
  </div>
  </div>
</td>
      </tr>
    )
  })
}
  
 </tbody>
</table>
<button className='border-2 border-gray-400 px-4 rounded-sm text-white bg-gray-500 hover:bg-purple-800' onClick={()=>{
Navigate('/')
// console.log("hsh")
}}>BACK</button>
  <ToastContainer />

    </>
    
  )
}

export default Caategory;