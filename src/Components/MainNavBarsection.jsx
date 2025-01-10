import React from "react";
import { BsPeople } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import { HiBookOpen, HiHeart, HiNewspaper, HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

const MainNavBarsection = (props) => {
  return (
    <div className="mt-5">
      <div className="container ">
        <ul className="menu bg-base-300 lg:menu-horizontal rounded-box w-full shadow-md">
          <li>
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/teaching"}>
              <HiBookOpen size={23} className="text-cyan-500" />
              Teachings & Believes
              <span className="badge badge-xs badge-warning">NEW</span>
            </Link>
          </li>
          <li>
            <Link to={"/news"}>
              <HiNewspaper size={23} className="text-pink-500" />
              News & Events
            </Link>
          </li>
          <li>
            <Link to={"/worship"}>
              <HiHeart size={23} className="text-green-500" />
              Worships & Practices
            </Link>
          </li>
          <li>
            <Link to={"/education"}>
              <FiBook size={23} className="text-red-400" />
              Educational Resources
            </Link>
          </li>
          <li>
            <Link to={"/community"}>
              <BsPeople size={23} className="text-[#7C00FE]" />
              Community
            </Link>
          </li>
          <li>
            <Link to={"/blogs"}>
              <HiNewspaper size={23} className="text-[#FFAF00]" />
              Blogs & Articles
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <HiUserGroup size={23} className="text-[#F94C10]" />
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <GrContact size={23} className="text-[#8BE8E5]" />
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {props.children}
    </div>
  );
};

export default MainNavBarsection;
