import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContext'

const NavComp = () => {
    const {theme,setTheme} = useContext(themeContext)
    const handleChange = ()=>{
        setTheme(theme==="dark"?"light":"dark")
    }
  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#fff' : '#000'}}>
        <h1>hello</h1>
        <button onClick={handleChange}>
            toggle theme
        </button>
    </div>
  )
}

export default NavComp