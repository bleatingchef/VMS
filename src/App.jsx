import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage1 from "./components/HomePage1";
import Qrcode from "./components/Qrcode";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import VisitorPassForm from "./components/VisitorPassForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrap the entire app in Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>

            <HomePage1 />
            <Qrcode />
            <Clients />
            <Features />
            <Faqs />
            <Footer />
          </>
        } />
        <Route path="/register-company" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/visitor-form" element={<VisitorPassForm/>} />
        {/* <Route path="/hero" element={<HomePage1 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
