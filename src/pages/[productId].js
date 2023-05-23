import { useRouter } from "next/router";
import Nav from "../components/Nav/Nav";
import BottomBar from "../components/bottomBar/bottomBar";
import { useState } from "react";

function DetailPage(props) {
  const router = useRouter();

  //   let cart = localStorage.getItem("cart");

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
      <Nav />
      <div className="detailPage">
        <h1>{router.query.title}</h1>
        <img src={router.query.picture} className="imagePage"></img>
        <h2> ${router.query.price} </h2>
        <p>{router.query.description}</p>
        <button
          onClick={() => {
            setProduct({
              title: router.query.title,
              description: router.query.description,
              price: router.query.price,
              picture: router.query.picture,
            }),
              addtoCart();
          }}
        >
          {" "}
          Add to Cart{" "}
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <BottomBar />
    </>
  );
}

export default DetailPage;
