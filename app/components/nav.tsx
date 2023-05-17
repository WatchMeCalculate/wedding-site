import React, { useState } from "react";
import { Link } from "@remix-run/react";
import SvgMenuLine from "./icons/menu-line";
import SvgCloseFill from "./icons/close-fill";

function Nav() {
  let [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="bg-black text-white px-2">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <Link to="/" className="md:hidden">
              <span className="text-xl left-0 ">R & J</span>
            </Link>
          </div>
          <div className="hidden md:block flex items-center space-x-6 py-4">
            <Link to="/">Home</Link>
            <Link to="/surprise">Surprise!</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/travel">Travel</Link>
            <Link to="/registry">Registry</Link>
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
        } md:hidden absolute w-full bg-black text-white`}
      >
        <Link to="/" onClick={() => setOpen(!open)}>
          <span className="block py-2 px-4 text-md">Home</span>
        </Link>
        <Link to="/surprise" onClick={() => setOpen(!open)}>
          <span className="block py-2 px-4 text-md">Surprise!</span>
        </Link>
        <Link to="/faq" onClick={() => setOpen(!open)}>
          <span className="block py-2 px-4 text-md">FAQ</span>
        </Link>
        <Link to="/schedule" onClick={() => setOpen(!open)}>
          <span className="block py-2 px-4 text-md">Schedule</span>
        </Link>
        <Link to="/travel" onClick={() => setOpen(!open)}>
          <span className="block py-2 px-4 text-md">Travel</span>
        </Link>
        <Link to="/registry" onClick={() => setOpen(!open)}>
          <span className="block py-2 px-4 text-md">Registry</span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
