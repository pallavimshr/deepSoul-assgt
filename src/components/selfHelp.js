import { Activity, Book, Timer, Play } from "lucide-react";


function SelfHelp() {
    return (
      <div className="w-full bg-gradient-to-b from-green-50 to-white dark:from-blue-900 dark:to-black pb-16 border-b-white">
        <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-16 mx-auto">
          <div className="w-full flex flex-col rounded-lg transition-colors duration-300">
            <p className="mt-20 mx-auto text-blue-500 border text-center rounded-3xl bg-purple-200 py-2 px-3">Daily Practice</p>
            <p className="mt-8 text-5xl font-semibold text-center font-serif">Self-Help Tools For Your Wellbeing</p>
            <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 text-center px-8 sm:px-16 md:px-32 lg:px-64 mx-auto">
              Build resilience and mindfulness with our extensive library of guided exercises, meditations, and personalized activities.
            </p>
  
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 w-full">
  
              
              <div className="md:col-span-2 bg-white dark:bg-black p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-left text-2xl font-medium mt-4 ml-4">Featured Exercises</p>
  
                <div className=" p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                  <div className="bg-white dark:bg-black p-4 rounded shadow flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
  <Activity className="h-6 w-6 text-white" />
</div>
                    <div>
                      <p className="text-lg font-medium">Guided Meditation</p>
                      <p className="text-gray-500 text-sm mt-1">10 min</p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-black p-6 rounded shadow flex items-start gap-4">
                  <div className="p-3 rounded-full bg-green-500">
  <Timer className="h-6 w-6 text-white" />
</div>
                    <div>
                      <p className="text-lg font-medium">Breathing Exercise</p>
                      <p className="text-gray-500 text-sm mt-1">5 min</p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-black p-6 rounded shadow flex items-start gap-4">
                  <div className="p-3 rounded-full bg-orange-400">
  <Book className="h-6 w-6 text-white" />
</div>
                    <div>
                      <p className="text-lg font-medium">Mindful Journaling</p>
                      <p className="text-gray-500 text-sm mt-1">15 min</p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-black p-6 rounded shadow flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-500">
  <Play className="h-6 w-6 text-white" />
</div>
                    <div>
                      <p className="text-lg font-medium">Sleep Stories</p>
                      <p className="text-gray-500 text-sm mt-1">20 min</p>
                    </div>
                  </div>
                  </div>
                </div>
                <p className="text-left text-xl font-medium mt-4 ml-4">Your Daily Progress</p>
                
<div className="w-full px-4 mt-6">
  
  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
    
    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: '60%' }}></div>
  </div>

  
  <div className="flex justify-between text-sm text-gray-600 mt-2">
    <span>3 of 5 exercises completed</span>
    <span>60%</span>
  </div>
</div>

              </div>
  
             
              <div className=" flex-col flex items-center gap-8">
                <div className="bg-gradient-to-r from-purple-200 to-pink-100 dark:from-blue-900 dark:to-black px-4 py-8 rounded-lg shadow-md flex-col flex  justify-center">
                    <p className="text-left font-medium text-xl  pl-3">Personalized For You</p>
                    <p className="text-left text-base pt-4 pl-3 text-gray-500 dark:text-gray-300">Exercises tailored to your needs and goals based on your progress.</p>
                </div>
                
                 <div className="bg-white dark:bg-black  rounded-lg shadow-md flex-col flex  justify-center p-4">
                 <p className="text-left font-medium text-xl  pl-3">Track Your Mood</p>
                 <p className="text-left text-base pt-4 pl-3 text-gray-500 dark:text-gray-300">Monitor your emotional wellbeing with our daily check-ins.</p>
                 <div className="flex justify-around items-center mt-8">
    
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 bg-red-200 dark:bg-red-800 rounded-full"></div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Low</p>
    </div>

    
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 bg-orange-100 dark:bg-red-900 rounded-full"></div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Mild</p>
    </div>

    
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 bg-yellow-100 dark:bg-orange-950 border-blue-400 border-2 rounded-full"></div>
      <p className="mt-2 text-sm text-black dark:text-white">Okay</p>
    </div>

    
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 bg-green-100 dark:bg-green-800 rounded-full"></div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Good</p>
    </div>

    
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full"></div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Great</p>
    </div>
  </div>
                 </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SelfHelp;
  