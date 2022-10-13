import scrollToElement from "../functions/scrollToElement";
import { FunctionComponent } from "react";
import Link from "next/link";

const Navbar: FunctionComponent = () => {
  return (
    <div className="navbar sticky top-0 z-50 backdrop-blur-xl outline-slate-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button
                id="about_me_mobile_menu"
                onClick={() => scrollToElement("hero__element")}
              >
                About Me
              </button>
            </li>
            <li>
              <button
                id="skills_mobile_menu"
                onClick={() => scrollToElement("skills__element")}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                id="projects_mobile_menu"
                onClick={() => scrollToElement("projects__element")}
              >
                Projects
              </button>
            </li>
          </ul>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Christian Llupo">
          <a className="btn btn-ghost normal-case text-xl">jebediah47</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <button
              id="about_me_desktop"
              onClick={() => scrollToElement("hero__element")}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              id="skills_desktop"
              onClick={() => scrollToElement("skills__element")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              id="projects_desktop"
              onClick={() => scrollToElement("projects__element")}
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="https://buymeacoffee.com/jebediah47">
          <button className="btn btn-outline btn-success">Support Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
