
import './App.css';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import HeroSection from './Components/Hero-section';
import Services from './Components/Services';
// import WhyUs from './Components/WhyUs';
import Navbar from './Components/navbar';


function App() {



  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutUs/>
    <Services/>
    {/* <WhyUs/> */}
    <Footer/>
    </>
  );
}

export default App;
