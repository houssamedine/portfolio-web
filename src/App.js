import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Testimonial from "./components/testimonial/Testimonial";

export default  function  App() {
  return (
      <>
          <Navbar/>
          <Home/>
          <About/>
          <Service/>
          <Testimonial/>
      </>
  );
}

