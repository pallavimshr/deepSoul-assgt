
function HeroCard({ title, description,className }) {
    return (
      <div className={`w-full md:w-56 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center ${className}`}>
        <h3 className="text-lg font-medium text-left">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-left mt-2">{description}</p>
        <div className="w-full h-1 bg-gradient-to-r from-blue-300 to-blue-700 rounded-full mt-4"></div>
      </div>
    );
  }
  
  export default HeroCard;
  