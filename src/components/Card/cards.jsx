import React, { useState } from "react";

function Card(props) {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    picture: "",
  });

  // const [productPrice, setproductPrice] = useState();

  const addtoCart = async (e) => {
    setProduct({
      title: e.imagetitle.innerHTML,
      description: e.image.src,
      picture: e.description.innterHTML,
    });

    let cart = [];
    cart.push(product);
    jsonCart = JSON.stringify(cart);
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
            <img src={c.Product_picture.S} className="image"></img>
            <br />
            <br />

            <button onClick={addtoCart()}> Add to Cart </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Card;
