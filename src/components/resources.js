import ResourceCard from "./resourceCard";
import ArticleCard from "./articleCard";

function Resources() {
    return (
        <div className="w-full bg-gradient-to-b from-green-50 to-white dark:from-blue-900 dark:to-black pb-16 border-b-white">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-16 mx-auto ">
        <div className="w-full flex flex-col rounded-lg  transition-colors duration-300">
          <p className="mt-20 mx-auto text-blue-500 border text-center rounded-3xl bg-purple-200 py-2 px-3">Knowledge Library</p>
          <p className="mt-8 text-5xl  font-semibold text-center font-serif">Expand Your Understanding</p>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 text-center px-8 sm:px-16 md:px-32 lg:px-64 mx-auto">
  Explore our extensive collection of articles, blogs, audiobooks, and podcasts covering various mental health and wellness topics.
</p>
<div className="flex flex-wrap justify-center mt-12 w-full">
<ResourceCard
  type="article"
  title="Articles & Blogs"
  info="200+ resources"
  description="Expert-written pieces on various mental health topics"
/>
<ResourceCard
  type="book"
  title="Audiobooks"
  info="50+ titles"
  description="Listen to books on personal growth and mental wellness"
/>
<ResourceCard
  type="podcast"
  title="Podcasts"
  info="100+ episodes"
  description="Engaging discussions with mental health professionals"
/>
<ResourceCard
  type="blog"
  title="Research & News"
  info="Updated weekly"
  description="Latest findings and news in mental health science"
/>
          </div>
          <p className="mt-8 text-left text-2xl font-medium ml-6">Featured Articles</p>
          <div className="flex flex-wrap my-8 w-full">
          <ArticleCard
  title="Understanding Anxiety: Causes and Management Techniques"
  tag="Mental Health"
  imageUrl="/images/image1.jpeg"  
/>
<ArticleCard
  title="The Power of Meditation in Daily Life"
  tag="Mindfulness"
  imageUrl="/images/image2.jpeg"  
/>
<ArticleCard
  title="Building Resilience in Challenging Times"
  tag="Personal Growth"
  imageUrl="/images/image3.jpeg"  
/>
          </div>
          <div className="w-full p-4">
  <div className="w-full h-80 flex flex-wrap bg-gradient-to-r from-purple-200 to-pink-100 dark:from-blue-900 dark:to-black rounded-lg relative overflow-hidden">
    
    
    <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl text-left font-semibold mb-4">Weekly Wellness Digest</h2>
        <p className="text-left text-gray-500 dark:text-gray-300">
        Stay updated with the latest articles, research, and wellness tips delivered straight to your inbox.
        </p>
      </div>
    </div>

    
    <div className="hidden lg:flex w-1/2 lg:w-1/4 p-8 relative">
      <div className="absolute top-5 left-0 transform -translate-x-1/2 -translate-y-1/2 w-48 h-24 flex flex-col p-3 bg-white dark:bg-black rounded-lg shadow-lg motion-safe:animate-custom-bounce ">
      <p className="font-medium mt-2">New Research Study</p>
      <p className="text-xs mt-1 text-gray-500 dark:text-gray-300">The effects of meditation on stress reduction</p>
      </div>
    </div>

    
    <div className="hidden lg:flex w-1/2 lg:w-1/4 p-8 relative">
  <div className="absolute top-32 right-0 transform -translate-y-1/2 w-48 h-24 flex flex-col p-3 bg-white dark:bg-black rounded-lg shadow-lg motion-safe:animate-custom-bounce ">
  <p className="font-medium mt-2">Latest Podcast</p>
  <p className="text-xs mt-1 text-gray-500 dark:text-gray-300">Breaking the stigma around mental health</p>
    
  </div>
</div>


  </div>
</div>



          
        </div>
      </div></div>
    );
  }
  
  export default Resources;
  