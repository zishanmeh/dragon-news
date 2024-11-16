import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3">Find Us On</h1>
      <div className="join join-vertical flex *:bg-base-100 *:justify-start">
        <button className="btn join-item ">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item">
          <FaInstagram></FaInstagram> Instagram
        </button>
        <button className="btn join-item">
          <FaTwitter></FaTwitter> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
