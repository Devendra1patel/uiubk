
import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login'
import Singup from './singup'
import Home from './Home'


function App() {

  return (
    <>
      {/* <Login/> */}
      {/* <Singup/> */}
      <Router>
        <Routes>
        <Route  path='/'  element={<Home/>}  />
          <Route  path='/singup' element={<Singup/>}  />
          <Route  path='/login' element={<Login/>}  />
          <Route  path='/login' element={<Login/>}  />

        </Routes>
      </Router>
    </>
  )
}

export default App
