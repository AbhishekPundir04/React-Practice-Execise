import { useState, createContext } from "react";
import Home from "./ContextExample/Home";
import ContactUs from "./ContextExample/ContactUs";
import Profile from "./ContextExample/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./ContextExample/Navbar";


export const AppContext = createContext();
function App() {
  const [name, setName] = useState("Abhishek Pundir");

  return (
    <div>
      <AppContext.Provider value={{ name, setName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
