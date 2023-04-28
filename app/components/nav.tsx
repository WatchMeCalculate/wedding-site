import React, { useState } from "react";
import { Link } from "@remix-run/react";
import SvgMenuLine from "./icons/menu-line";
import SvgCloseFill from "./icons/close-fill";

function Nav() {
  let [open, setOpen] = useState(false);
  return (
    <nav className="flex flex-col md:flex-row bg-white hidden">
      <div className="flex flex-wrap justify-between items-center">
        <div className="sm:hidden">
          <p className="font-mono font-semibold tracking-wide leading-loose">
            R&J
          </p>
        </div>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <SvgCloseFill /> : <SvgMenuLine />}
        </div>
      </div>
      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-8 " : "top-[-490px]"
        }`}
      >
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          />
          Home
        </li>
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          />
          Home
        </li>
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          />
          Home
        </li>
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          />
          Home
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
