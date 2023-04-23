import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <>
      {" "}
      <div className="nav">
        <a className="nav">
          <Link href="/"> Home </Link>
        </a>
        <a className="nav">
          {" "}
          <Link href="/men"> Men </Link>
        </a>
        <a className="nav">
          {" "}
          <Link href="/women"> Women </Link>
        </a>
        <a className="nav">
          {" "}
          <Link href="/cart"> Cart </Link>
        </a>
        <a className="nav">
          {" "}
          <Link href="/aboutus"> About Us </Link>
        </a>
      </div>
    </>
  );
}
export default Nav;
