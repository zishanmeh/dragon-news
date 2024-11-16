import { Link, NavLink } from "react-router-dom";
import userLogo from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div>{user && <h1>{user.displayName}</h1>}</div>
      <div>
        <ul className="flex gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="flex gap-2 items-center">
          <img
            src={user?.photoURL ? user.photoURL : userLogo}
            alt={`Photo of ${user.displayName}`}
            className="w-12 h-12 rounded-full"
          />
          <button className="btn btn-neutral rounded-none" onClick={logOut}>
            Log-Out
          </button>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <img src={userLogo} alt="" />
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
