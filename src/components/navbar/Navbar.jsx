"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full md:h-[80px] justify-between items-center px-4">
      <div className="font-bold text-7xl font-mono mb-4 md:mb-0">
        <Link href="/">hs</Link>
      </div>
      <div
        className={`md:flex flex-col md:flex-row ${nav ? "flex" : "hidden"}`}
      >
        <Link
          href="/"
          className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4"
        >
          Work
        </Link>
        <Link
          href="/about"
          className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4"
        >
          About
        </Link>
        <Link
          href="/"
          className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full"
        >
          Resume
        </Link>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden absolute cursor-pointer right-4 z-10 mt-6"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </div>
  );
}

export default Navbar;
