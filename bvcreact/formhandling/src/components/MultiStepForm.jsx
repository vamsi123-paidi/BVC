import React, { useState } from 'react'

const MultiStepForm = () => {
    const [step,setStep] = useState(1)
    const [form,setForm] = useState({
        name:"",
        age:""
    })

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const next = ()=>setStep(step+1)
    const prev = ()=>setStep(step-1)

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`hello ${form.name}${form.age}`)
    }
  return (
    <>
        {(step===1) && 
        <>
            <input type="text" name='name' value={form.name} onChange={handleChange} />
            <button onClick={next}>Next</button>
        </>
        }
        {(step===2) && 
        <>
            <input type="number" name='age' value={form.age} onChange={handleChange} />
            <button onClick={prev}>prev</button>
            <button onClick={handleSubmit}>Submit</button>
        </>
        }
    </>
  )
}

export default MultiStepForm