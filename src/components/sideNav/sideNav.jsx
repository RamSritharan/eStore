import React from "react";
import { useState } from "react";

function SideNav(props) {
  const [checked, setChecked] = useState([]);
  const checkList = ["Shirts", "Pants", "Shorts"];

  //   const handleSubmit = (e) => {};

  return (
    <>
      <div className="checklist">
        <div className="filterTitle">Filter Bar</div>
        <div className="listContainer">
          {checkList.map((item) => (
            <div>
              <input value={item} type="checkbox" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideNav;
