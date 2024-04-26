import { Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const schema=Yup.object().shape({
  name:Yup.string().required("This section is necessary")
})
const Edits = () => {
  const Navigate=useNavigate();
  const location=useLocation()
  const patchdata=(value)=>{
    try {
      axios
      .patch(`http://localhost:3000/category/${location && location.state && location.state.id}`,value)
      .then((res)=>{
        console.log("prateek",res)
        Navigate('/caategory')
        // getData()
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
    
<div className=' w-full h-full flex justify-center items-center mt-20'>
    <div className='h-96 w-96 bg-yellow-400'>
     <p className='text-xl mx-10 mt-10'> MAKE YOUR CHANGES HERE</p>
        <Formik
          
      

            initialValues={
                {
                    name:location && location.state && location.state.name? location.state.name:""
                }
            }
            const validationSchema={schema}
            onSubmit={(values)=>{
                console.log(values)
                patchdata(values)
            }}
            >
        
        <Form>
          <div className='grid mx-10 items-center mt-10'>
            <label className='font-bold text-xl '>NAME</label>
            <Field name="name" className=" border-2 border-black rounded-xl outline-none px-5 w-64 h-10" id="name" placeholder="Enter your name"/>
            </div>
            <div className='mt-4 mx-4 flex gap-20'>
            <button className='w-28 h-8 text-white bg-pink-600 rounded-md hover:bg-purple-700'>Update</button> 
             <button className='w-28 h-8 bg-slate-400 rounded-md hover:bg-white' onClick={()=>{
              Navigate(-1)
             }}> Cancel</button>
            </div>
        </Form>
        </Formik>
</div>    
    

</div>

    </>
  )
}

export default Edits;