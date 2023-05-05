import React from "react";
import { useState } from "react";

function Card(props) {
  const [productId, setProductId] = useState();
  const [productPicture, setproductPicture] = useState();
  // const [productPrice, setproductPrice] = useState();

  // addtoCart = async (e) => {};

  return (
    <>
      <div>
        {props.products.map((c) => (
          <div className="imagecard">
            <h5 className="imagetitle"> {c.Product_title.S}</h5>
            <p className="card-text">{c.Product_description.S}</p>
            <img src={c.Product_picture.S} className="image"></img>
            <br />
            <br />

            <button> Add to Cart </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Card;
