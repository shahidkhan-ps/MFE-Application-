import React, { useState } from 'react'
import useLocalStorage from '../customHooks/useLocalStorage.jsx'

function Login() {
    const [isLoggedin,setIsLoggedin]=useLocalStorage('loggedIn',false)
    const trueValues={
        name:"shahid",
        email:"shahid1692004@gmail.com",
        password:"12345678"
    }
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })  

    const [errors,setErrors]=useState({})

    const handleChange=(e)=>{
        const {name,value}=e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const validate=()=>{
        const errors={}

        if(formData.name.trim()==="")
            errors.name="Name is Required"
        else if(formData.name!==trueValues.name)
            errors.name="Username doesn't match"


        if(formData.email.trim()==="")
            errors.email="Email is Required"
        else if(formData.email!==trueValues.email)
            errors.email="Email doesn't match"

        if(formData.password.trim()==="")
            errors.password="Password is Required"
        else if(formData.password!==trueValues.password)
            errors.password="Password doesn't match"

        return errors
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const errors=validate()
        if(Object.keys(errors).length!==0)
        {
            setErrors(errors)
            return;
        }
        setIsLoggedin(true)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name' /><br/>
        {errors.name?<p style={{color:"red"}}>{errors.name}</p>:""}
        <input name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' /><br/>
        {errors.email?<p style={{color:"red"}}>{errors.email}</p>:""}
        <input name='password' value={formData.password} onChange={handleChange} placeholder='Enter your password' /><br/>
        {errors.password?<p style={{color:"red"}}>{errors.password}</p>:""}
        <button>Login</button>
    </form>
    </>
  )
}

export default Login
