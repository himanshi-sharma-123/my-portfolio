"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full md:h-[80px] justify-between items-center px-4">
      <div className="font-bold text-7xl font-mono mb-4 md:mb-0">
        <Image src="/logo.png" width={150} height={150} />
      </div>
      <div
        className={`md:flex flex-col md:flex-row ml-auto ${
          nav ? "flex" : "hidden"
        }`}
      >
        <Link
          href="/"
          className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4 cursor-custom"
        >
          Work
        </Link>
        <Link
          href="/about"
          className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4 cursor-custom"
        >
          About
        </Link>
        <Link
          href="https://drive.google.com/file/d/1jNGuXMPaD3UdQxZhctiyJiV4hYSfACTx/view?usp=sharing"
          target="_blank"
          className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full cursor-custom"
        >
          Resume
        </Link>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden absolute cursor-pointer right-4 z-10 mt-6 "
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </div>
  );
}

export default Navbar;

// import Link from "next/link";
// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// function Navbar() {
//   const [nav, setNav] = useState(false);

//   return (
//     <div className="fixed top-0 left-0 w-full flex flex-col md:flex-row md:h-[80px] justify-between items-center px-4 bg-white shadow-md">
//       <div className="font-bold text-7xl font-mono mb-4 md:mb-0">
//         <Link href="/">hs</Link>
//       </div>
//       <div
//         className={`md:flex flex-col md:flex-row ${nav ? "flex" : "hidden"}`}
//       >
//         <Link
//           href="/"
//           className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4"
//         >
//           Work
//         </Link>
//         <Link
//           href="/about"
//           className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4"
//         >
//           About
//         </Link>
//         <Link
//           href="/"
//           className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full"
//         >
//           Resume
//         </Link>
//       </div>
//       <div
//         onClick={() => setNav(!nav)}
//         className="md:hidden absolute cursor-pointer right-4 z-10 mt-6"
//       >
//         {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
//       </div>
//     </div>
//   );
// }

// export default Navbar;
