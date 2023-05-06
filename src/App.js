import { useState } from 'react'
import Home from './ContextExample/Home'
import ContactUs from './ContextExample/ContactUs'
import Profile from './ContextExample/Profile'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './ContextExample/Navbar';
function App() {
    const [name, setName] = useState('Abhishek Pundir')

  return <div>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/Home' element={<Home name={name} />}/>
            <Route path='/ContactUs' element={<ContactUs name={name}/>}/>
            <Route path='/Profile' element={<Profile name={name} setName={setName}/>}/>
         
        </Routes>
    </Router>
  </div>
}

export default App;
