function ArticleCard({ title, tag, imageUrl }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="relative bg-white dark:bg-black rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-colors duration-300">
        
        <div className="relative h-52 -mt-8 overflow-hidden">
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col flex-1 gap-3">
          <span className="text-xs text-blue-500  rounded-lg px-2 py-1 bg-green-100 mr-auto">{tag}</span> 
          <h3 className="text-lg font-medium">{title}</h3>
        </div>

      </div>
    </div>
  );
}

export default ArticleCard;
