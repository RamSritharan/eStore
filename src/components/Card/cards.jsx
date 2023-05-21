import React, { useState } from "react";
import Link from "next/link";
let cart = [];

function Card(props) {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    picture: "",
  });

  const addtoCart = async () => {
    cart.push(product);
    let jsonCart = JSON.stringify(cart);
    localStorage.setItem("cart", jsonCart);
  };

  return (
    <>
      <div>
        {props.products.map((c) => (
          <div className="imagecard">
            <Link
              href={{
                pathname: `/${encodeURIComponent(c.Product_title.S)}`,
                query: {
                  title: c.Product_title.S,
                  description: c.Product_description.S,
                  price: c.Product_price.N,
                  picture: c.Product_picture.S,
                },
              }}
              as={`/${encodeURIComponent(c.Product_title.S)}`}
              className="imagetitle"
            >
              {" "}
              {c.Product_title.S}
            </Link>
            <p className="description">{c.Product_description.S}</p>
            <p className="description">${c.Product_price.N}</p>
            <img src={c.Product_picture.S} className="image" name="image"></img>
            <br />
            <br />

            <button
              onClick={() => {
                setProduct({
                  title: c.Product_title.S,
                  description: c.Product_description.S,
                  price: c.Product_price.N,
                  picture: c.Product_picture.S,
                }),
                  addtoCart();
              }}
            >
              {" "}
              Add to Cart{" "}
            </button>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
export default Card;
