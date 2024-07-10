"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navber = () => {
  const pathName = usePathname();
  console.log(pathName);
  const routes = [
    { path: "/", title: "Home" },
    { path: "/posts", title: "Posts" },
  ];
  const list = (
    <>
      {routes.map((route, i) => (
        <li
          key={i}
          className={`${
            pathName === route.path && "bg-cyan-400/50 rounded-lg"
          } text-white font-bold active:normal-case`}
        >
          <Link href={route.path}>{route.title}</Link>
        </li>
      ))}
    </>
  );
  return (
    <div>
      <div className="navbar bg-black/50 fixed z-10 px-10   ">
        <div className="navbar-start container m-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu gap-3 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <a className="font-bold  text-2xl ">
            Next<span className="text-cyan-400">Js</span>P2
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-3">{list}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-cyan-400  border-none font-bold text-black hover:bg-cyan-300">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
