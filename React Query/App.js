import Home from "./ContextExample/Home";
import ContactUs from "./ContextExample/ContactUs";
import Profile from "./ContextExample/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./ContextExample/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        
      }
    }
  })
  return (
    <div>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
