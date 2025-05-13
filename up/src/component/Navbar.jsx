import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex font-sans mt-6 rounded-2xl shadow-2xl justify-between items-center h-16 w-full px-6 bg-red-400">
      <div className="text-black font-bold text-xl">MyApp</div>
      <div className="space-x-6 hidden sm:flex"> {/* Show links on small screens and up */}
        <Link to="/add-image" className="text-black hover:text-black">Add Image</Link>
        <Link to="/get-image" className="text-black hover:text-black">All Images</Link>
      </div>
    </nav>
  );
};

export default Navbar;
