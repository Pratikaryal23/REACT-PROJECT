import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Loader from "./UI/Loader";
// import Loader from './UI/Loader'
const schema = Yup.object().shape({
  name: Yup.string().required("This section is necessary"),
});
const Category = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [Load, setLoad] = useState(false);
  const [loadset, setloadset] = useState(false);
  useEffect(() => {
    let inter;
    if (loadset) {
      inter = setTimeout(() => {
        setLoad(false);
        setloadset(false);
        navigate("/caategory");

      }, 3000);
    }
    return () => {
      clearTimeout(inter);
    };
  }, [loadset]);

  const postDATA = (values) => {
    // const Navigate=useNavigation()

    try {
      setLoad(true);
     
      axios
        .post("http://localhost:3000/category", values)
        .then((res) => {
          console.log("aryal", res);
          setloadset(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      setLoad(false);
      setloadset(false);
      console.log(error);
    }
  };

  return (
    <>
      {Load && <Loader />}
      <Formik
        initialValues={{
          name: "",
        }}
        const
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          postDATA(values);
        }}
      >
        {() => {
          return (
            <Form>
              <div className="grid mx-5">
                <label>Name</label>
                <Field
                  className="border-2 border-red-300 w-48 h-6 outline-none p-3 rounded-md"
                  id="name"
                  name="name"
                  placeholder="ENTER YOUR NAME"
                />
              </div>
              <div className="mx-5 my-3">
                <button className="border-2 border-black px-1 w-24 rounded-sm">
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Category;
