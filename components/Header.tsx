"use client";

import Link from "next/link";
import LoginLogout from "./LoginLogout";
import Image from "next/image";
import { useState } from "react";

// darkMOde

const Header = () => {
  const [show, setShow] = useState(false);
  const darkMode = () => {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  };
  return (
    <>
      <div className="px-5 py-2">
        <div className="flex justify-between max-md:hidden">
          <h2 className="text-xl font-semibold">
            <Link href="/">TodoApp</Link>
          </h2>
          <div className="">
            <ul className="flex gap-5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <LoginLogout />
              </li>
              <li onClick={darkMode}>Dark mode</li>
            </ul>
          </div>
        </div>

        {/*  mobile nav  */}

        <div className="hidden max-md:block">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">
              <Link href="/">Todo</Link>
            </h2>
            <div onClick={() => setShow(!show)}>
              {show ? (
                <Image
                  src="/nav_cross.svg"
                  alt="hamburger icon"
                  height={25}
                  width={25}
                />
              ) : (
                <Image
                  src="/hamburger.svg"
                  alt="hamburger icon"
                  height={25}
                  width={25}
                />
              )}
            </div>
            {show && (
              <div className="bg-slate-200 px-3 pr-8 py-2 rounded-xl absolute right-0 mt-8 mr-8 dark:text-zinc-600   ">
                <ul className="gap-5 text-lg pr-2 ">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li className="text-red-500">
                    <LoginLogout />
                  </li>
                  <li onClick={darkMode}>Dark mode</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
