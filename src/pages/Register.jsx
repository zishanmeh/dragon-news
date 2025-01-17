import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(name, email, photo, password);

    // Password Regex
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Function to validate password
    // const validatePassword = (password) => passwordRegex.test(password);
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least 8 characters, one Upper case, one lower case and one special character"
      );
      return;
    }

    console.log(passwordRegex.test(password));

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setErrorMessage(null);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then((result) => console.log(result))
          .catch((err) => setErrorMessage(err.message));
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="font-bold text-center text-2xl">
          Register Your Account
        </h2>
        {errorMessage && (
          <p className="text-red-500 text-center mt-3">{errorMessage}</p>
        )}
        <form className="card-body" onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          {/* Email input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* Password input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p>
          Already have an Account?{" "}
          <Link to="/auth/login" className="hover:underline text-red-500">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
