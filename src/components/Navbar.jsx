import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg font-medium">
      <Link to="/">Home</Link>
      <Link to="/favorite">Favorite</Link>
    </div>
  );
};

export default Navbar;
