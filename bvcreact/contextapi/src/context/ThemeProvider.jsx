import React, { useState } from 'react'
import { themeContext } from './ThemeContext'
const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("dark")
  return (
    <themeContext.Provider value={{theme,setTheme}}>
            {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider