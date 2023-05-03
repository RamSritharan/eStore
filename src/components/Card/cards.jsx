import React from "react";

function Card(props) {
  console.log("hello", props.products);
  return (
    <>
      {props.products.map((c) => (
        <div className="imagecard">
          <div className="upload_image">
            <h5 className="imagetitle"> {c.Product_title.S}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {" "}
              {c.Product_Id.N}{" "}
            </h6>
            <p className="card-text">{c.Product_description.S}</p>
          </div>
        </div>
      ))}
    </>
  );
}
export default Card;
