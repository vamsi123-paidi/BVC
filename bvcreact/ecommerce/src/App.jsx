import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NabarComp from './components/NabarComp'
import Home from './pages/Home'
import Cart from './pages/Cart'
const App = () => {
  return (
    <>
      <Router>
        <NabarComp/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App