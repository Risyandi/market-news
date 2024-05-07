import { useState } from "react";

import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import MegaMenu from './MegaMenu';

const Navigation = () => {
  let Links = [
    { name: "For Advertiser", link: "/advertiser" },
    { name: "For Publisher", link: "/publisher" },
    { name: "Resources", link: "/resources" },
    { name: "Case Studies", link: "/case-studies" },
    { name: "About Us", link: "/about" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
      {/* navigation bar desktop */}
      <header className="w-screen fixed top-0 left-0 z-10 font-poppins bg-white py-4 shadow-md">
        <div className="hidden sm:flex justify-around">
          <MegaMenu />
        </div>
      </header>

      {/* navigation bar mobile */}
      <header>
        <div className="w-screen fixed top-0 left-0 z-10 font-poppins shadow-md sm:hidden">
          <div className="md:flex items-center md:justify-between bg-white py-4 px-5">
            
            <div className="flex justify-between items-center">
              <div className="font-medium text-xl lg:text-xxl cursor-pointer flex items-center">
                <NavLink className={"flex flex-row items-center gap-5"} to={"/"}>
                  <div className='flex items-center rounded-full bg-black py-2'>
                    <div className='text-2xl font-bold text-white px-3'>ALPHA</div>
                  </div>
                </NavLink>
              </div>
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl right-8 top-4 cursor-pointer sm:hidden">
                {open ? <MdClose /> : <MdMenu />}
              </div>
            </div>

            <ul
              className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-100 ease-in shadow-md ${open ? "top-16" : "top-[-490px]"
                }`}>
              {Links.map((link) => (
                <li
                  onClick={() => setOpen(!open)}
                  key={link.name}
                  className="lg:ml-8 text-md lg:my-0 my-7">
                  <NavLink
                    to={link.link}
                    className="aria-[current=page]:font-semibold aria-[current=page]:text-black">
                    <div className="hover:text-black hover:font-semibold duration-100">
                      {link.name}
                    </div>
                  </NavLink>
                </li>
              ))}
              <li className="lg:ml-8">
                <NavLink to={"/login"}>
                  <button className="text-black font-semibold px-8 py-2 rounded-full hover:bg-black hover:text-white border-2 border-black">
                    Contact Us
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>


  );
};

export default Navigation;
