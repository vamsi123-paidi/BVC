import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavScrollExample from './components/NavComp';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import UserData from './pages/UserData';
import Settings from './pages/Settings';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './pages/Admin';
import PageNotFound from './pages/PageNotFound';


const App = () => {
  return (
    <>

      <Router>
        <NavScrollExample />
        <Routes>
          {/* static routing */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />

          {/* dynamic routing */}
          <Route path='/users/:userID' element={<UserProfile />} />

          {/* nestedRouting */}

          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='userdata' element={<UserData />} />
            <Route path='settings' element={<Settings />} />
          </Route>


          {/* protected route */}
          <Route path='/admin' element={<ProtectedRoute>
              <Admin/>
          </ProtectedRoute>} />


          {/* page not found */}
          <Route path='*' element={<PageNotFound/>}  />
        </Routes>
      </Router>
    </>
  )
}

export default App