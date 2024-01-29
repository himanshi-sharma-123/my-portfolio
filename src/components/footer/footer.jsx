import Link from "next/link";
import React from "react";

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
    <div>
      <h3>Portfolio coded by Himanshi Sharma . 2024</h3>
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

export default footer;
