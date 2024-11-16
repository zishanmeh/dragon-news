import { FaGoogle, FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="flex flex-col gap-4 text-center">
        <button className="flex items-center gap-2 justify-center btn btn-outline">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="flex items-center gap-2 justify-center btn btn-outline">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
