import { FileText, Newspaper, PlayCircle, Book } from "lucide-react";

function ResourceCard({ type, title, info, description }) {
  const getIcon = () => {
    switch (type) {
      case 'article':
        return <FileText size={30} className="text-blue-400 mb-4" />;
      case 'book':
        return <Book size={30} className="text-blue-400 mb-4" />;
      case 'podcast':
        return <PlayCircle size={30} className="text-blue-400 mb-4" />;
      case 'blog':
        return <Newspaper size={30} className="text-blue-400 mb-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full  lg:w-1/4 p-4">
      <div className="h-full bg-white dark:bg-black rounded-xl shadow-md p-6 flex flex-col items-start text-left transition hover:shadow-lg">
        <div className="px-3 pt-3  rounded-2xl bg-green-50">{getIcon()}</div>
        <h3 className="text-xl font-bold mt-3 mb-1">{title}</h3>
        <p className="text-sm text-blue-400 font-medium mb-2">{info}</p>
        <p className="text-gray-600 dark:text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ResourceCard;
