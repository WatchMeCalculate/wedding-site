import React, { useState } from "react";
import { Link } from "@remix-run/react";
import SvgMenuLine from "./icons/menu-line";
import SvgCloseFill from "./icons/close-fill";

/*
<div onClick={() => setOpen(!open)} className="md:hidden">
  {open ? <SvgCloseFill /> : <SvgMenuLine />}
</div>;
*/
function Nav() {
  let [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="bg-black opacity-90 text-white px-2">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <Link to="/" className="md:hidden">
              <span className="text-xl left-0">R & J</span>
            </Link>
          </div>
          <div className="hidden md:block flex items-center space-x-6 py-4">
            <Link to="/">
              <span className="">Surprise!</span>
            </Link>
            <Link to="/">
              <span className="">FAQ</span>
            </Link>
            <Link to="/">
              <span className="">Schedule</span>
            </Link>
            <Link to="/">
              <span className="">Travel</span>
            </Link>
            <Link to="/">
              <span className="">Registry</span>
            </Link>
          </div>
          <div>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex py-4"
            >
              {open ? (
                <SvgCloseFill className="w-6 h-6 fill-white" />
              ) : (
                <SvgMenuLine className="h-6 w-6 fill-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          open ? "" : "hidden"
        } md:hidden bg-black opacity-90 text-white`}
      >
        <Link to="/">
          <span className="block py-2 px-4 text-sm hover:bg-gray-100">
            Surprise!
          </span>
        </Link>
        <Link to="/">
          <span className="block py-2 px-4 text-sm hover:bg-gray-100">FAQ</span>
        </Link>
        <Link to="/">
          <span className="block py-2 px-4 text-sm hover:bg-gray-100">
            Schedule
          </span>
        </Link>
        <Link to="/">
          <span className="block py-2 px-4 text-sm hover:bg-gray-100">
            Travel
          </span>
        </Link>
        <Link to="/">
          <span className="block py-2 px-4 text-sm hover:bg-gray-100">
            Registry
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
