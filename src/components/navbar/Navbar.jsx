import Link from "next/link";
import React from "react";

function Navbar() {
  const links = [
    {
      id: 1,
      title: "Work",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Resume",
      url: "/",
    },
  ];
  return (
    <div>
      <Link href="/">hs</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
