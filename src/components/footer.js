function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-center py-8 shadow-inner transition-colors duration-300 border-t-gray-400 dark:border-t-gray-400">
      
     
      <div className="flex flex-wrap w-full justify-center px-4 sm:px-8 md:px-16 lg:px-64 mb-6 ">
  <div className="w-full md:w-1/4 h-auto mb-4 md:mb-0  rounded-lg flex flex-col p-4 ">
  <h1 className=" font-semibold flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-2xl mb-4">
      <img src="/images/deepsoul.png" alt="DeepSoul Logo" className="w-8 h-8 rounded-full" />
      DeepSoul</h1>

  <p className="text-left text-lg pb-4">
    Your journey to inner peace and mental wellbeing starts here.
  </p>
  <div className="flex space-x-4">
    <p  aria-label="Facebook" className="text-gray-600 dark:text-white hover:text-blue-600">
      <i className="fab fa-facebook-f"></i>
    </p>
    <p  aria-label="Twitter" className="text-gray-600 dark:text-white hover:text-blue-400">
      <i className="fab fa-twitter"></i>
    </p>
    <p  aria-label="Instagram" className="text-gray-600 dark:text-white hover:text-pink-500">
      <i className="fab fa-instagram"></i>
    </p>
  </div>
  </div>
  <div className="w-full md:w-1/4 h-auto mb-4 md:mb-0  rounded-lg flex flex-col p-4 ">
    <h3 className="font-bold text-lg mb-2 text-left ">Features</h3>
    <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
      <li className="hover:text-blue-300 cursor-pointer">Therapy Booking</li>
      <li className="hover:text-blue-300 cursor-pointer">Self-Help Exercises</li>
      <li className="hover:text-blue-300 cursor-pointer">Therapist Buddy</li>
      <li className="hover:text-blue-300 cursor-pointer">Community Support</li>
      <li className="hover:text-blue-300 cursor-pointer">Wellness Resources</li>
    </ul>
  </div>

 
  <div className="w-full md:w-1/4 h-auto mb-4 md:mb-0  rounded-lg flex flex-col p-4 ">
    <h3 className="font-bold text-lg mb-2 text-left">Resources</h3>
    <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
      <li className="hover:text-blue-300 cursor-pointer">Articles</li>
      <li className="hover:text-blue-300 cursor-pointer">Blogs</li>
      <li className="hover:text-blue-300 cursor-pointer">Podcasts</li>
      <li className="hover:text-blue-300 cursor-pointer">Audiobooks</li>
      <li className="hover:text-blue-300 cursor-pointer"> Research</li>
    </ul>
  </div>

  
  <div className="w-full md:w-1/4 h-auto  rounded-lg flex flex-col p-4 ">
    <h3 className="font-bold text-lg mb-2 text-left ">Company</h3>
    <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
      <li className="hover:text-blue-300 cursor-pointer">About Us</li>
      <li className="hover:text-blue-300 cursor-pointer">Our Team</li>
      <li className="hover:text-blue-300 cursor-pointer">Careers</li>
      <li className="hover:text-blue-300 cursor-pointer">Contact</li>
      <li className="hover:text-blue-300 cursor-pointer">Privacy Policy</li>
    </ul>
  </div>
</div>


<div className="mx-4 sm:mx-8 md:mx-16 lg:mx-64 border-t flex flex-col md:flex-row justify-between items-center pt-8">
  
  <p className="text-base text-gray-600 dark:text-gray-400 mb-2 md:mb-0">
    &copy; {new Date().getFullYear()} DeepSoul. All rights reserved.
  </p>

  
  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-base text-gray-600 dark:text-gray-400">
    <p className="hover:underline">Terms of Service</p>
    <span className="hidden md:block">|</span>
    <p className="hover:underline">Privacy Policy</p>
    <span className="hidden md:block">|</span>
    <p className="hover:underline">Cookie Policy</p>
  </div>
</div>

    </footer>
  );
}

export default Footer;

  