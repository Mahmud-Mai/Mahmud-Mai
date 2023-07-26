import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-20 w-full h-[80px] flex justify-between items-center px-4 bg-cyan-950 text-gray-200">
      <div className="capitalize font-signature text-4xl hover:scale-110 duration-300">
        <Link
          className="hover:cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
        >
          Mahmud Mai
        </Link>
      </div>
      <div>
        {/* Menu */}
        <ul className="hidden md:flex">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger */}
        <div
          onClick={handleClick}
          className="md:hidden z-10"
        >
          {!nav ? <FaBars /> : <FaTimes className="absolute z-10 right-5" />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full  h-screen bg-gray-900 flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
