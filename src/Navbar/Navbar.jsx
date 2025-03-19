import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-teal-800 h-20 w-full flex items-center justify-between px-6 sticky top-0">
      <ul className="flex gap-10">
        <li>
          <Link to="/" className="text-white hover:text-teal-300 transition duration-300">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-teal-300 transition duration-300">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-teal-300 transition duration-300">
            CONTACT
          </Link>
        </li>
        <li>
          <Link to="/designs" className="text-white hover:text-teal-300 transition duration-300">
            DESIGNS
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
