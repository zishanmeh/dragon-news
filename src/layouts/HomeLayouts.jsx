import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layoutComponents/LeftNavbar";
import RightNavbar from "../components/layoutComponents/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>

        <section className="w-11/12 mx-auto my-4">
          <LatestNews></LatestNews>
        </section>
        <section className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
