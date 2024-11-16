import {
  FaRegEye,
  FaShareAlt,
  FaRegCopy,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NewsCard(props = {}) {
  const { singleNews } = props || {};
  // Helper function to display dynamic star ratings
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index + fullStars + 1} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Header with Author Info, Date, and Icons */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-500 text-sm">
          <img
            className="w-8 h-8 rounded-full"
            src={singleNews.author.img}
            alt="Author"
          />
          <div>
            <p className="text-gray-700 font-semibold">
              {singleNews.author.name}
            </p>
            <p className="text-gray-500 text-xs">{singleNews.published_date}</p>{" "}
            {/* Post Date Below Author Name */}
          </div>
        </div>

        {/* Icons for Share and Copy */}
        <div className="flex space-x-3 text-gray-500">
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
          <FaRegCopy className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-lg font-bold text-gray-800">
        {singleNews.title}
      </h2>

      {/* Thumbnail Image */}
      <img
        className="w-full h-72 object-top object-cover mt-2"
        src={singleNews.thumbnail_url}
        alt="News Thumbnail"
      />

      {/* Description */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-500">
          {singleNews.details.slice(0, 120)}...
          <Link
            to={`/news/${singleNews._id}`}
            className="text-blue-500 font-semibold cursor-pointer"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Footer (Rating & Views) */}
      <div className="p-4 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center space-x-1">
          {renderRatingStars(singleNews.rating.number)}{" "}
          {/* Dynamic Star Rating */}
          <span className="text-gray-800 text-sm font-medium ml-2">
            {singleNews.rating.number}
          </span>
        </div>

        <div className="flex items-center text-gray-500 space-x-1">
          <FaRegEye />
          <span className="text-gray-800 text-sm font-medium">
            {singleNews.total_view}
          </span>
        </div>
      </div>
    </div>
  );
}
