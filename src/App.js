import Clients from "./components/clients/Clients";
import HeroHorizontal from "./components/hero/horizontal/HeroHorizontal";
import Navbar from "./components/layout/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import WhyUs from "./components/whyUs/WhyUs";
import Footer from "./components/layout/footer/Footer";
function App() {
  return (
    <>
      <Navbar/>
      <div className="container" style={{marginTop:"90px"}}>
        <HeroHorizontal/>
        <Services/>
        <WhyUs/>
        <Portfolio/>
        <Clients/>
        <Testimonials/>
        <Newsletter/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
