import React from 'react'
import { Link, useParams,useNavigate} from 'react-router-dom'
import { useState,useEffect} from 'react'
import axios from 'axios'

const Singlecoursseview_g = () => {
    const params=useParams()
    const navigate=useNavigate()
    const[data ,setData]=useState([])
    const Getdata=()=>{
        try{
            axios
            .get(` http://localhost:3000/courses/${params.id}`)
            .then((res)=>{
        console.log("pratik",res)
    setData([res.data.result])

        })
        .catch((err)=>{
            console.log(err)
            })  }
                
            catch(error){
                console.log(error)                 
            } 
      
}
useEffect(()=>{
    if(params && params.id){
    Getdata();

    }
},[params])
  return (
    <>
       {/* <div>Singlecoursseview_g{params.id}</div> */}
       {/* <div className='grid grid-cols-3 gap-10 '> */}
        {
            

            data.map((val,i)=>{
                let images= ` http://localhost:3000/public/${val.image}`
                return(
                    

                    <div  className=' mx-4 grid grid-cols-2 h-screen rounded-md bg-gray-100'>

          <div className='grid px-5 '>
          <div>
                        <div className='font-bold text-2xl flex justify-center mt-4'>{val.title}</div>
                    </div>
                    <div className='h-96'>
                        <img  className="h-full w-full object-contain"src={images}/>
                    </div>

                    <div>
                        <div className='border-t-2 border-black font-mono text-3xl mt-4 flex justify-center p-3 '>{val.duration}</div>
                    </div>
                    </div>
                                        <div className='flex justify-center items-center'>
                                            <div className='text-2xl  font-extralight ' dangerouslySetInnerHTML={{__html:val.description}} />
                    </div>
                    <div>
                    <button  onClick={()=>{
                        navigate(-1)
                    }} className='border-1 rounded-md text-white  mx-3 border-black w-24 bg-purple-600 outline-none h-8 hover:bg-pink-400   '>Back</button>
                    <button
                    onClick={()=>{
                        navigate(`/edit/${val.id}`)
                    }}
                    className='border-1 rounded-md text-white  mx-3 border-black w-24 bg-purple-600 outline-none h-8 hover:bg-pink-400   '>Edit</button>
                    </div>
                    </div>
                    

                )
            })
            
        }

  

  
       {/* </div> */}
       
    
 
    </>


  )
}

export default Singlecoursseview_g