import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Syallabus=()=>{
    
    const navigate=useNavigate();
    const[data ,setData]=useState([])
    const[Search,setSearch]=useState('')
    const getData= ()=>{
        try{
            axios
            .get(' http://localhost:3000/courses')
            .then((res)=>{
        console.log("pratik",res)
    setData([...res.data.data])
            })
        
.catch((err)=>{
console.log(err)
})  }
    
catch(error){
    console.log(error)                 
}   
    } 
useEffect(()=>{
    getData();
},[])
const filter=(options)=>{
    return options.filter(x=>x['name'].toLowerCase().indexOf(Search.toLowerCase())>-1)
}
   
    
return(
<>
<div className='flex justify-center items-center text-2xl text-pink-500 font-bold my-6'>Syallabus</div>
<div  className="flex justify-between">
<div className="mx-4">
        <button  onClick={()=>{
navigate("/courses")
        }}className="bg-red-300 text-white border-3 rounded-md px-2 w-24 h-8 hover:bg-purple-800">ADD</button>
     </div>
     <div className="mx-4">
        <input type="search"
        onChange={(e)=>{
            setSearch(e.target.value)
        }}
        
        placeholder="Search here" className=" text-black border-2 border-black rounded-md outline-none px-2 w-40 h-8 "/>
     </div>
     </div>
<div className="grid grid-cols-4 gap-8 ">
    {
        
     filter(data).map((val,i)=>{
            let images= ` http://localhost:3000/public/${val.image}`
            
return(

<div className="my-8 mx-2 rounded-md bg-gray-100" onClick={()=>{
    navigate(`/Singlecoursseview/${val.id}`)
}}>
    <div className=" text-black text-2xl font-bold px-4">
        {val.title}
    </div>

    <div  className="w-76 h-56">
        <img className="h-full w-full object-cover " src={images}/>
    </div>
    <div className="line-clamp-3 "dangerouslySetInnerHTML={{__html:val.description}}/>
    {/* dangerousHTML={{__html:val.description}} */}
        
    
    <div className="border-t-4 my-4 px-4 border-black">
        {val.duration}
    </div>
    </div>
        
)
        })
    }
</div>

</>)

}
export default Syallabus;