import "./App.css";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Hero from "./components/Hero";
import Login from "./components/Login";

import Footer from "./components/Footer";
import Youtube from "./components/Youtube";
import Video from "./components/Video";
import Gradient from "./components/Gradient";
import Register from "./components/Resgister";
import LoginRegister from "./components/LoginRegister";
import {BrowserRouter, Route,Routes} from 'react-router-dom'

//function()

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      {/* <div className="absolute bg-fixed inset-0 -z-10 h-max w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_60%,#63e_100%)]"> */}
      <div class="fixed left-0 top-0 -z-10 h-full w-full ">
        <div class="relative h-full w-full">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:26px_26px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_30%,transparent_110%)]"></div>
        </div>
        <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_60%,#63e_100%)]"></div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Hero/>} />
        <Route path='/login' element={<LoginRegister/>}/>
      </Routes>
      {/* <ImageSlider /> */}
      {/* <Hero /> */}
      {/* <Login /> */}
      
     
      {/* <Footer /> */}
      {/* <Youtube /> */}
      {/* <Register /> */}
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
