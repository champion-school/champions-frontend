import React, { useState } from "react";
import toast from "react-hot-toast";
import "../styles/Register.css";

export default function Register() {

  const [form,setForm] = useState({
    childName:"",
    fatherName:"",
    motherName:"",
    mobile:"",
    dob:"",
    age:"",
    aadhar:"",
    address:""
  });

  const calculateAge = (dob)=>{
    const birth = new Date(dob);
    const today = new Date();
    const diff = today - birth;
    const age = diff / (1000*60*60*24*365);
    return age.toFixed(1);
  };

  const handleChange=(e)=>{

    const {name,value}=e.target;

    if(name==="dob"){
      const age = calculateAge(value);

      setForm({
        ...form,
        dob:value,
        age:age
      });

    }else{
      setForm({
        ...form,
        [name]:value
      });
    }

  };

  const handleSubmit=(e)=>{

    e.preventDefault();

    const {childName,fatherName,motherName,mobile,dob,age,aadhar,address}=form;

    if(!childName || !fatherName || !motherName || !mobile || !dob || !aadhar || !address){
      toast.error("Please fill all fields");
      return;
    }

    if(mobile.length !== 10){
      toast.error("Mobile number must be 10 digits");
      return;
    }

    if(aadhar.length !== 16){
      toast.error("Aadhar must be 16 digits");
      return;
    }

    if(age < 1.5 || age > 3.5){
      toast.error("Child not eligible for Play Group");
      return;
    }

    toast.success("Eligible for Play Group");

  };

  return (

    <div className="register-container">

      <div className="register-card">

        <h2>Play School Registration</h2>

        <form className="register-form" onSubmit={handleSubmit}>

          <input name="childName" placeholder="Child Name" onChange={handleChange} />
          <input name="fatherName" placeholder="Father Name" onChange={handleChange} />

          <input name="motherName" placeholder="Mother Name" onChange={handleChange} />
          <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />

          <input type="date" name="dob" onChange={handleChange} />
          <input name="age" value={form.age} readOnly placeholder="Age" />

          <input name="aadhar" placeholder="Aadhar Number" onChange={handleChange} />

          <textarea name="address" placeholder="Address" onChange={handleChange}></textarea>

          <button type="submit" className="submit-btn">Submit</button>

        </form>

      </div>

    </div>

  );
}