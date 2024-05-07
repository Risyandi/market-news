import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Solutions", link: "/solutions" },
    { name: "Services", link: "/services" },
    { name: "Showcase", link: "/showcase" },
    { name: "Case Studies", link: "/case-studies" },
    { name: "Resources", link: "/resources" },
    { name: "About Us", link: "/about" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <header>
      <div className="w-screen fixed top-0 left-0 z-10 font-poppins">
        <div className="md:flex items-center md:justify-between bg-white py-4 px-8">
          <div className="font-medium text-xl lg:text-xxl cursor-pointer flex items-center text-black">
            <NavLink className={"flex flex-row items-center gap-5"} to={"/"}>
              <h1 className="text-2xl font-semibold text-primary-blue">KDN</h1>
            </NavLink>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-4 cursor-pointer lg:hidden"
          >
            {open ? <MdClose /> : <MdMenu />}
          </div>

          <ul
            className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-100 ease-in ${
              open ? "top-16" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                onClick={() => setOpen(!open)}
                key={link.name}
                className="lg:ml-8 text-md lg:my-0 my-7"
              >
                <NavLink
                  to={link.link}
                  className="aria-[current=page]:font-semibold aria-[current=page]:text-primary-green"
                >
                  <div className="hover:text-primary-green duration-100">
                    {link.name}
                  </div>
                </NavLink>
              </li>
            ))}
            <li className="lg:ml-8">
              <NavLink to={"/login"}>
                <button className="text-black px-8 py-2 rounded-full hover:text-primary-green border border-gray-500 hover:border-primary-green">
                  Contact Us
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
