import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <>
      <div className="nav">
        <img src="storelogo.png" className="logo"></img>
        <div className="tab" class="hover:bold">
          {" "}
          <Link href="/"> Home </Link>
        </div>
        <Link href="/men"> Men </Link>
        <Link href="/women"> Women </Link>
        <Link href="/cart"> Cart </Link>
        <Link href="/aboutus"> About Us </Link>
      </div>
    </>
  );
}
export default Nav;
