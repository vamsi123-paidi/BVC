import React, { useState } from 'react'
import { use } from 'react'

const ControlledForm = () => {
    const [form,setForm] = useState({
        email:"",
        password:""
    })
    const [newdata,setNewData] = useState({
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setNewData(form)
        console.log(form)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='enter emailid ...' name='email' value={form.email} onChange={handleChange}/>
            <input type="password" name='password' value={form.password} placeholder='enter password ..' onChange={handleChange}/>
            <button type='sumbit'>LOGIN</button>

        </form>
        <div>
            <h1>{newdata.email}</h1>
            <h1>{newdata.password}</h1>
        </div>
    </>
  )
}

export default ControlledForm