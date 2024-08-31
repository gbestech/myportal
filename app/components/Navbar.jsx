"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
const Links = [
  {
    text: "Parent",
    href: "/parent",
  },
  {
    text: "Student",
    href: "/student",
  },
  {
    text: "Staff",
    href: "/staff",
  },
  {
    text: "Subject",
    href: "/subject",
  },

  {
    text: "section",
    href: "/section",
  },
  {
    text: "Class",
    href: "/classe",
  },
  {
    text: "Parent List",
    href: "/parentList",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-green-300">
      <div className="navbar max-w-6xl mx-auto flex-col  sm:flex-row">
        <div className="flex justify-between w-full sm:w-auto">
          <Link href="/" className="btn btn-primary">
            Home
          </Link>
          <button onClick={toggleMenu} className="sm:hidden btn btn-secondary">
            Menu
          </button>
        </div>
        <ul
          className={`menu md:ml-8 flex-col sm:flex-row sm:ml-auto ${
            isOpen ? "block" : "hidden"
          } sm:flex`}
        >
          {Links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="capitalize">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
