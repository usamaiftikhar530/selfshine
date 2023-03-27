import {Route, Routes} from "react-router-dom";
import "./style.css";
import Base from "./Base";

import MiniBar from "./Components/MiniBar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import OpenHour from "./Components/OpenHour";
import Testimonial from "./Components/Testimonial";
import OurTeam from "./Components/OurTeam";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
      
      <MiniBar />
      <Header />
      
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/services" element={<Services />} />
       <Route path="/openhour" element={<OpenHour />} />
       <Route path="/testimonial" element={<Testimonial />} />
       <Route path="/ourteam" element={<OurTeam />} />
       <Route path="/pricing" element={<Pricing />} />
       <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />


 

    </div>
  );
}

export default App;
