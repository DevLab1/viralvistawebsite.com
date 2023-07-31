import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { AboutUs } from "./pages/AboutUs"
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { EmailContactForm } from "./pages/EmailContactForm";
import './App.css'
import logo from './logo.png'
import { useState } from "react"


function App() {
  const [isShowing, setIsShowing] = useState(false);

  const [wideness, setWideness] = useState(0);
  const [noneState, setNoneState] = useState("none");


  const handleWidenessChange = () => {
    if(isShowing === false) {
      setWideness(200)
      setNoneState("inline");
      setIsShowing(true);
    } else {
      setWideness(0)
      setNoneState("none");
      setIsShowing(false);
    }
  }

  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <img className="logo-image" src={logo} alt="logo"/>
        </Link>

        
        <ul>
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/about-us" className="link">About Us</Link>
          </li>
          <li>
            <Link to="/email-contactform" className="link">Contact Us</Link>
          </li>
        </ul>

    <button onClick={handleWidenessChange}><i class="fa-solid fa-bars"></i></button>
        
      </nav>
      <div className="sidebar" style={{width: wideness+"px"}}>
      <ul className="sidebar-ul" style={{display: noneState}}>
          <li className="sidebar-li">
            <Link to="/" className="sidebar-link">Home</Link>
          </li>
          <li className="sidebar-li">
            <Link to="/about-us" className="sidebar-link">About Us</Link>
          </li>
          <li className="sidebar-li">
            <Link to="/email-contactform" className="sidebar-link">Contact Us</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/email-contactform" element={<EmailContactForm/>}/>
      </Routes>
    </>
    
  )
}

export default App;
