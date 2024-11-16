import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-4 mt-5">
      <div>
        <img src={logo} alt="" className="w-[300px]" />
      </div>
      <p className="text-gray-400">Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
