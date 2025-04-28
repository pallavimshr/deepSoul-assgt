import { Calendar, Clock, Phone, Video } from "lucide-react";

function TherapySection(){
    return(
        <div className="w-full bg-white dark:bg-black pb-16 border-b-white">
        <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-16 mx-auto flex flex-wrap">
          
          
          <div className=" flex flex-col w-full md:w-1/2  ">
          <p className="mt-20  text-blue-500 border text-left rounded-3xl bg-purple-200 py-2 px-3 mr-auto">Professional Support</p>
          <p className="mt-8 text-4xl font-semibold text-left font-serif">Connect with Licensed Therapists
          </p>
          <p className="text-left text-lg text-gray-500 dark:text-gray-300 pt-5">Find the right therapist who understands your unique needs. Our platform makes it easy to schedule sessions, whether in-person or virtual, so you can get the support you need, when you need it.</p>
          <div className="mt-8 flex flex-col gap-6">
            
            <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full">
      <Calendar className="w-5 h-5 text-blue-400" />
    </div>
              <div>
                <h3 className="text-base font-medium">Flexible Scheduling</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                Book appointments that fit your busy life
                </p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full">
      <Clock className="w-5 h-5 text-blue-400" />
    </div>
              <div>
                <h3 className="text-base font-medium">Personalized Matching</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                Find therapists who specialize in your specific needs
                </p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full">
      <Video className="w-5 h-5 text-blue-400" />
    </div>
              <div>
                <h3 className="text-base font-medium">Virtual Sessions</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                Attend therapy from the comfort of your home
                </p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full">
      <Phone className="w-5 h-5 text-blue-400" />
    </div>
              <div>
                <h3 className="text-base font-medium">Direct Communication</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                Message your therapist between sessions
                </p>
              </div>
            </div>
          </div>
           
           </div>
          <div className="w-full md:w-1/2   flex flex-col gap-6 "> 
          <div className="flex flex-wrap">

  
  <div className="w-full mt-24 mb-8">
    <div className="bg-gradient-to-r from-green-100 to-purple-100 dark:from-blue-900 dark:to-black rounded-lg shadow-md p-6">
      <p className="text-center font-semibold text-3xl font-serif">Our Therapists</p>
      <p className="text-left text-base text-gray-500 dark:text-gray-300 pt-3 pb-4">Our network includes hundreds of licensed professionals ready to support you.</p>
    </div>
  </div>

  
  <div className="w-1/2  ">
    <div className="bg-white dark:bg-black rounded-lg shadow-md p-6 mr-2">
    <div className="flex items-center">
    
    <img
      src="/images/therapist2.jpeg" 
      alt="Doctor"
      className="w-16 h-16 rounded-full object-cover"
    />
    
    
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Dr. Sarah Johnson</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">Anxiety and Depression</p>
    </div>
  </div>
    </div>
  </div>
  <div className="w-1/2 ">
    <div className="bg-white dark:bg-black rounded-lg shadow-md p-6 ml-2 mb-6">
    <div className="flex items-center">
    
    <img
      src="/images/therapist3.jpeg" 
      alt="Doctor"
      className="w-16 h-16 rounded-full object-cover"
    />
    
    
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Dr. Michael Chen</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">Trauma & PTSD</p>
    </div>
  </div>
    </div>
  </div>

  
  <div className="w-1/2 ">
    <div className="bg-white dark:bg-black rounded-lg shadow-md p-6 mr-2">
    <div className="flex items-center">
    
    <img
      src="/images/therapist1.jpeg" 
      alt="Doctor"
      className="w-16 h-16 rounded-full object-cover"
    />
    
    
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Dr. Amara Patel</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">Relationship Issues</p>
    </div>
  </div>
    </div>
  </div>
  <div className="w-1/2">
  <div className="bg-gradient-to-tr from-pink-100 to-purple-200 dark:from-blue-900 dark:to-black rounded-lg shadow-md p-5 ml-2 flex flex-col">
      <p className="text-center font-serif font-semibold text-4xl">+200</p>
      <p className="text-center mt-2  text-base text-gray-500 dark:text-gray-400">Licensed therapists ready to help</p>
    </div>
  </div>

</div>

          </div>
          </div></div>
    );
}
export default TherapySection;