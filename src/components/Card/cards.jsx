import React, { useState } from "react";
let cart = [];

function Card(props) {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    picture: "",
  });

  // const [productPrice, setproductPrice] = useState();

  const addtoCart = async () => {
    // setProduct({
    //   title: e.target.Product_title,
    //   description: e.target.Product_description,
    //   picture: e.target.Product_picture,
    // });

    cart.push(product);
    let jsonCart = JSON.stringify(cart);
    localStorage.setItem("cart", jsonCart);
    console.log(product.title);
  };

  return (
    <>
      <div>
        {props.products.map((c) => (
          <div className="imagecard">
            <h5 className="imagetitle"> {c.Product_title.S}</h5>
            <p className="description">{c.Product_description.S}</p>
            <img src={c.Product_picture.S} className="image" name="image"></img>
            <br />
            <br />

            <button
              onClick={() => {
                setProduct({
                  title: c.Product_title.S,
                  description: c.Product_description.S,
                  picture: c.Product_picture.S,
                }),
                  addtoCart();
              }}
            >
              {" "}
              Add to Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Card;
