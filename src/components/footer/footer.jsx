import Link from "next/link";

import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function footer() {
  const links = [
    {
      id: 1,
      title: "Linkedin",
      url: "/",
    },
    {
      id: 2,
      title: "Twitter",
      url: "/",
    },
    {
      id: 3,
      title: "Github",
      url: "/",
    },
  ];

  return (
    <div className="w-full h-full bg-black mx-aut0 py-16 px-20 grid lg:grid-cols-3 gap-8 text-gray-300 mt-10">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          Thanks for visiting!!
        </h1>
        <p1 className="py-4">
          Got Questions,comments or any feedback? Feel free to reach out and
          contact me on my socials below.
          {/* Let me know your views through the contact form or drop me a message
          on my socials mentioned below. */}
        </p1>
        <h1 className="mt-4 text-[#00df9a]">Let's Connect🙌</h1>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://github.com/himanshi-sharma-123">
            <FaGithubSquare size={30} />
          </a>
          <a href="https://www.linkedin.com/in/himanshi-sharma-564548202/">
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://drive.google.com/file/d/1jNGuXMPaD3UdQxZhctiyJiV4hYSfACTx/view?usp=sharing"
            target="_blank"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
          <a href="https://twitter.com/Himansh93626788?t=58ZIeC6a4E-MQ0Y3rBpHCQ&s=09">
            <FaTwitterSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-[#00df9a] px-4">Interests</h6>
          <ul>
            <li className="py-2 text-sm">Web Development</li>
            <li className="py-2 text-sm">Web Designing</li>
            <li className="py-2 text-sm">Azure</li>
            {/* <li className="py-2 text-sm">DevOps</li> */}
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Quick Links</h6>
          <ul>
            <li className="py-2 text-sm">
              {" "}
              <Link href="/">Work</Link>
            </li>
            <li className="py-2 text-sm">
              {" "}
              <Link href="/about">About</Link>
            </li>
            {/* <li className="py-2 text-sm">
              {" "}
              <Link href="/">Skills</Link>
            </li> */}
            {/* <li className="py-2 text-sm">
              {" "}
              <Link href="/">Resume</Link>
            </li> */}
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Coding Platforms</h6>
          <ul>
            {/* <li className="py-2 text-sm">
              <a href="https://auth.geeksforgeeks.org/user/himansh1di4">GFG</a>
            </li> */}
            <li className="py-2 text-sm">
              <a href="https://leetcode.com/Himanshi_Sharma/">Leetcode</a>
            </li>
            <li className="py-2 text-sm">
              <a href="https://www.codingninjas.com/studio/profile/8ac82452-fc95-4765-aad4-1ed885e9a6a3">
                Coding Ninjas
              </a>
            </li>

            {/* <li className="py-2 text-sm ">
              <a href="/">GFG</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/">Hackerrank</a>
            </li> */}
          </ul>
        </div>
      </div>{" "}
      <p className="text-[#00df9a]">
        Copyright &copy; by Himanshi Sharma 2024 | All Rights Reserved
      </p>
      {/* <h3>Portfolio coded by Himanshi Sharma . 2024</h3> */}
      {/* <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div> */}
    </div>
  );
}

export default footer;
