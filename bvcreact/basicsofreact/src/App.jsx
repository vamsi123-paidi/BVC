import React from 'react'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import "./App.css"
const App = () => {
  const obj = {
    name:"adam",
    age:100,
    city:"amalapuram"
  }
  return (
    <>
      <About obj={obj}/>
    </>
  )
}

export default App