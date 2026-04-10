import React, { useState } from 'react'

const FormWithValidation = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState('')
    const [error,setError] = useState("")
    function validate(){
        if(!email.includes('@')){
            setError("enter valid email address or check weather it includes @")
            return false
        }

        if(password.length<5){
            setError("must contains 5 charecters")
            return false
        }
        setError("")
        return true

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(validate()){
            alert(`hello ${email}`)
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter emailid' onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" placeholder='enter password..'  onChange={(e)=>setPassword(e.target.value)} />
            {error && <p style={{color:"red"}}>{error}</p>}
            <button type='submit'>submit</button>
        </form>
    </>
  )
}

export default FormWithValidation