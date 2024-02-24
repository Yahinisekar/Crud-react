import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Navbar from './components/Navbar'
import Edit from './components/Edit'
import AddUser from './components/AddUser'

const App = () => {

 
  //usestate to update the data
  const [id, setId] = useState(0);
    

  return (
    //Routing
    <>
      <BrowserRouter>
        
          <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users setId={setId} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/adduser" element={<AddUser />} />
          
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App