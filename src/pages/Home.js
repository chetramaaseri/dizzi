import Clients from "../components/clients/Clients";
import HeroHorizontal from "../components/hero/horizontal/HeroHorizontal";
import Newsletter from "../components/newsletter/Newsletter";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonials/Testimonials";
import WhyUs from "../components/whyUs/WhyUs";

function Home() {
  return (
    <div className="container" style={{marginTop:"90px"}}>
        <HeroHorizontal/>
        <Services/>
        <WhyUs/>
        <Portfolio/>
        <Clients/>
        <Testimonials/>
        <Newsletter/>
    </div>
  )
}

export default Home