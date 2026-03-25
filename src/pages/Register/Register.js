import { useState } from "react";
import api from "../../api/api";
import toast from "react-hot-toast";
import "../../styles/Register.css";

export default function Register(){

const [formData,setFormData] = useState({
childName:"",
fatherName:"",
motherName:"",
mobileNo:"",
dob:"",
age:"",
aadharNo:"",
address:""
});


// ⭐ DOB → Age Calculate
const calculateAge = (dob)=>{

const today = new Date();
const birthDate = new Date(dob);

let age = today.getFullYear() - birthDate.getFullYear();

const month = today.getMonth() - birthDate.getMonth();

if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
age--;
}

return age;

};


// ⭐ Input Change
const handleChange = (e)=>{

const {name,value} = e.target;

let updatedForm = {...formData,[name]:value};

if(name === "dob"){
updatedForm.age = calculateAge(value);
}

setFormData(updatedForm);

};


// ⭐ Form Submit
const handleSubmit = async(e)=>{

e.preventDefault();

try{

console.log("Sending Data:",formData);

await api.post("/register/save", formData);

toast.success("Register Success");

// reset form
setFormData({
childName:"",
fatherName:"",
motherName:"",
mobileNo:"",
dob:"",
age:"",
aadharNo:"",
address:""
});

}catch(error){

console.log(error);

let message = "Register Failed";
const responseData = error.response?.data;

if (responseData) {
  if (typeof responseData === "string") {
    message = responseData;
  } else if (responseData.message) {
    message = responseData.message;
  } else {
    // object with keys (timestamp, status, error, path)
    message = JSON.stringify(responseData);
  }
} else if (error.message) {
  message = error.message;
}

toast.error(message);

}

};


return(

<div className="register-container">

<div className="register-card">

<h2>Student Register</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="childName"
placeholder="Child Name"
value={formData.childName}
onChange={handleChange}
required
/>

<input
type="text"
name="fatherName"
placeholder="Father Name"
value={formData.fatherName}
onChange={handleChange}
required
/>

<input
type="text"
name="motherName"
placeholder="Mother Name"
value={formData.motherName}
onChange={handleChange}
required
/>

<input
type="text"
name="mobileNo"
placeholder="Mobile Number"
value={formData.mobileNo}
onChange={handleChange}
required
/>

<input
type="date"
name="dob"
value={formData.dob}
onChange={handleChange}
required
/>

<input
type="text"
name="age"
placeholder="Age"
value={formData.age}
readOnly
/>

<input
type="text"
name="aadharNo"
placeholder="Aadhar Number"
value={formData.aadharNo}
onChange={handleChange}
required
/>

<textarea
name="address"
placeholder="Address"
value={formData.address}
onChange={handleChange}
/>

<button type="submit">
Submit
</button>

</form>

</div>

</div>

);

}