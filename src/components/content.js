import Resources from "./resources";
import SelfHelp from "./selfHelp";
import HeroSection from "./heroSection";
import TherapySection from "./therapySection";

function Content() {
    return (
      <div >
        <HeroSection/>
        <TherapySection/>
      <SelfHelp/>
        <Resources/>
        
      </div>
    );
  }
  
  export default Content;
  