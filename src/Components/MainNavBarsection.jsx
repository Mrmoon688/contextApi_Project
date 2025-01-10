import React from "react";
import { BsPeople } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import { HiBookOpen, HiHeart, HiNewspaper, HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

const MainNavBarsection = () => {
  return (
    <div className="mt-5">
      <div className="container mx-auto ">
        <ul className="menu bg-base-300 lg:menu-horizontal rounded-box w-full shadow-md">
          <li>
            <a>
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
            </a>
          </li>
          <li>
            <a>
              <HiBookOpen size={23} className="text-cyan-500" />
              Teachings & Believes
              <span className="badge badge-xs badge-warning">NEW</span>
            </a>
          </li>
          <li>
            <a>
              <HiNewspaper size={23} className="text-pink-500" />
              News & Events
            </a>
          </li>
          <li>
            <a>
              <HiHeart size={23} className="text-green-500" />
              Worships & Practices
            </a>
          </li>
          <li>
            <a>
              <FiBook size={23} className="text-red-400" />
              Educational Resources
            </a>
          </li>
          <li>
            <a>
              <BsPeople size={23} className="text-[#7C00FE]" />
              Community
            </a>
          </li>
          <li>
            <a>
              <HiNewspaper size={23} className="text-[#FFAF00]" />
              Blogs & Articles
            </a>
          </li>
          <li>
            <a>
              <HiUserGroup size={23} className="text-[#F94C10]" />
              About Us
            </a>
          </li>
          <li>
            <a>
              <GrContact size={23} className="text-[#8BE8E5]" />
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNavBarsection;
