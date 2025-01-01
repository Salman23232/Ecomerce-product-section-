import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 border-b-2 border-black">
      <h1 className="text-3xl font-bold">Logo</h1>
      <ul className="flex items-center gap-5 text-xl font-bold">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
    </nav>
  );
};

export default Navbar;
