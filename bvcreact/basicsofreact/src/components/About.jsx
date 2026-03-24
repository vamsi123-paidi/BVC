import React from 'react'
import Home from './Home'
const About = ({obj}) => {
    const style = {color:"red",background:"black",textAlign:"center"}
  return (
    <>
        <h1 style={style}>About page</h1>
        <Home obj={obj}/>
    </>
  )
}

export default About