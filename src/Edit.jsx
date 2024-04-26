import React, { useEffect, useState } from "react";

import { LuUploadCloud } from "react-icons/lu";
import Loader from "./UI/Loader";
import { Formik,ErrorMessage, Form,Field} from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
const schema=Yup.object().shape({
    name:Yup.string().required("this section is necessary"),
    duration:Yup.string().required("This section is necessary"),
    instructor:Yup.string().required("This section is required")

});
const Data=[
    {
    title:"Course Name",
    type:"text",
    placeholder:"Enter Name",
    name:"name",
},
{
    title:"Duration",
    type:"text",
    placeholder:"Enter Duration",
    name:"duration",
},
{
    title:"Instructor",
    type:"text",
    placeholder:"Enter Name", 
    name:"instructor",
},
{
    title:"Category",
    type:"text",
    placeholder:"Enter Name",
    name:"category",
   
},

];



const Edit=()=>{
    const navigate=useNavigate();
    const params=useParams();
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
const [Load, setLoad] = useState(false)
const [loadset, setloadset] = useState(false)
useEffect(() => {
  let inter; 
  
 if(loadset){
  inter=setTimeout(() => {
      setLoad(false)
      setloadset(false)
          
      }, 3000)
 }

return () => {
  clearTimeout(inter)

}
}, [loadset])
    return(
        <>  
        {Load && <Loader />}
        {
            data &&data.length>0 && 
            <Formik
        initialValues={{
            name:data && data.length>0?data[0].name:"",
            duration:data&& data.length>0?data[0].duration:'',
            category:data&&data.length>0?data[0].category.name:'',
            instructor:data&&data.length>0?data[0].instructor:'',

        }}
        // validationSchema={schema} 
        onSubmit={(values)=>{
            console.log("values",values)        
        }}
            > 
            

        

                 <div>     
<div className="text-purple-600 flex justify-center items-center text-xl" >COURSES</div>
<div className=" w-10/12 mx-auto">
    {console.log(data.length>0&&data[0].title)}
    <p className="text-purple-600 font-bold">Edit courses</p>
    <p className="text-gray-500 text-sm">Edit the previous details of course and save chanegs.</p>
</div>

<Form className="grid grid-cols-4 gap-5 w-10/12 h-full mx-auto ">

{Data.map((val,i)=>{
    return(
<div className="grid">
                <label htmlFor="title" key={i}
                className="text-purple-800 font-bold mt-4">
                    {val.title}
                </label>
            <Field className=" border-gray-800 rounded-lg w-64 pl-3 mt-2 outline-none border-2 py-3"
            type={val.type}
            name={val.name}
            id="title"
            placeholder={val.placeholder}/>
            


            <ErrorMessage
            name={val.name}
            component={"div"}
            className="text-red-500"
            />

           
            </div>
    )
})}

<div>
    
    <div className="text-purple-800 font-bold mt-6 my-4">Course image:</div>
<div className="h-80 w-full  flex flex-col justify-center items-center border-2 border-gray-300 border-dashed ">
           
      
                            {/* <FaCloudUploadAlt className="h-64 w-64 text-gray-500" /> */}
                            <LuUploadCloud className="h-60 w-fit text-gray-500" />
                            <b className="text-2xl ">Drag to upload file</b>
                          </div>
                                                    <div className="flex  mx-4 gap-10 ">
     
     <div className="w-fit ">
          <button type="submit" className="bg-red-300 text-white border-3 rounded-md px-2 w-24 h-8 mt-4 hover:bg-purple-500 ">Submit</button>
          </div>
          
     
          <div className="w-fit mt-4">
             <button className="bg-red-300 text-white border-3 rounded-md  px-2 w-24 h-8 hover:bg-purple-800" onClick={()=>{
                 navigate(-1)
             }}>Cancel</button>
             
         
          </div>
          </div>
                          </div>
    

    
     </Form>
     
     
</div>
</Formik>
        }


</>


)};

export default Edit;
