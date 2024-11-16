import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layoutComponents/RightNavbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-4">Dragon News</h2>
          <div className="border border-base-300 p-3 rounded-md">
            <div>
              <img
                src={news.thumbnail_url}
                alt={news.title}
                className="w-full h-72 object-cover rounded-md"
              />
            </div>
            <h1 className="text-2xl font-semibold my-4">{news.title}</h1>
            <p className="text-gray-500">{news.details}</p>
            <Link to="/" className="btn btn-error text-white rounded-none mt-4">
              All news in this category
            </Link>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
