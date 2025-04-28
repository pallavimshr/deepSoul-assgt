import { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 px-5 pt-4 pb-3 bg-blue-400 text-white dark:text-black text-xl rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-all duration-300"
        aria-label="Scroll to top"
      >
        ^
      </button>
    )
  );
}

export default ScrollToTopButton;
