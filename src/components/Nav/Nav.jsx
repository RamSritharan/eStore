import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <>
      <div className="nav">
        <a href="/">
          <img src="storelogo.png" className="logo" />
        </a>{" "}
        <Link href="/" className="linkBar">
          {" "}
          Home{" "}
        </Link>
        <Link href="/men" className="linkBar">
          {" "}
          Men{" "}
        </Link>
        <Link href="/women" className="linkBar">
          {" "}
          Women{" "}
        </Link>
        <Link href="/cart" className="linkBar">
          {" "}
          🛒 Cart{" "}
        </Link>
        <Link href="/orders" className="linkBar">
          {" "}
          Orders{" "}
        </Link>
      </div>
    </>
  );
}
export default Nav;
