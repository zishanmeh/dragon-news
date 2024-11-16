import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div>
      <h1 className="font-semibold mb-3">Dragon News Home</h1>
      <p className="text-gray-400 text-sm">{news.length} News found...</p>
      <div className="flex flex-col gap-4 justify-center">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
