import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Home from "./ReactRouters/Home"
import Profile from "./ReactRouters/Profile"
import Contact from "./ReactRouters/ContactUs"
import Navbar from "./ReactRouters/Navbar"
import { useState } from "react"

const App = (props) =>{
  const [userName, setUserName] = useState("Abhi") 
  
  return (
    
    <div className="App-header">

      <Router>
        <div>
         <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home userName = {userName}/>}/>
          <Route path="/menu" element={<Profile  userName = {userName} setUserName = {setUserName}  />}/>
          <Route path="/contactus" element={<Contact/>}/>
          <Route path="*" element={<h1>Page is not found</h1>}/>
        </Routes>
      </Router>


    </div>
  )
}

export default App



