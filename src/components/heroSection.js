import HeroCard from "./heroCard";
function HeroSection(){
    return(
        
        <div className="w-full bg-white dark:bg-black pb-16 border-b-white">
        <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-16 mx-auto flex flex-wrap">
          
          
          <div className="w-full md:w-1/2 ">
            <div className=" pb-20">
              
              <h2 className="text-6xl font-bold font-serif pr-10 pt-48">
  Your journey to{' '}
  <span className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
    inner peace
  </span>{' '}
  begins here
</h2>

              <p className="text-left text-xl text-gray-500 pt-5">DeepSoul connects you with professional therapists, supportive community, and powerful self-help tools for your mental wellbeing journey.</p>
            </div>
          </div>
      
          
          <div className="w-full md:w-1/2">
  <div className=" p-6 rounded-lg">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  
  <HeroCard title="Mental Health Quiz" description="Understand your emotional wellbeing" className="md:motion-safe:animate-custom-bounce"  />
  <HeroCard title="Upcoming Therapy Session" description="Today at 3:00 PM with Dr. Sarah " className="md:motion-safe:animate-custom-bounce"/>

  
  <div className="md:col-span-2 flex justify-center">
    <HeroCard title="Peace of Mind" description="Your mental wellbeing companion is here" />
  </div>

  
  <HeroCard title="Daily Journal" description="Take a moment to reflect on your feelings today" className="md:motion-safe:animate-custom-bounce" />
  <HeroCard title="Community Support" description="Connect with others who understand" className="md:motion-safe:animate-custom-bounce" />
</div>

  </div>
</div>
      
        </div>
      </div>
      
    );
}
export default HeroSection