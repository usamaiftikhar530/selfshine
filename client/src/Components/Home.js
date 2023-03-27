import Header from "./Header";
import SlideShow from "./SlideShow";
import About from "./About";
import Services from "./Services";
import OpenHour from "./OpenHour";
import Testimonial from "./Testimonial";
import OurTeam from "./OurTeam";
import Pricing from "./Pricing";

function Home(){
    return(
        <>
            <SlideShow />
            <About />
            <Services />
            <OpenHour />
            <Testimonial />
            <OurTeam />
            <Pricing />
        </>
    );
}

export default Home;