import React from "react";
import "./Homepage.css";
import Nav from "../components/Nav/Nav";
import { useState } from "react";

export function Homepage(props) {
  const [tab, setTab] = useState(0);
  return (
    <>
      <Nav />
    </>
  );
}
