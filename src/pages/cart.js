// estore.com/
import { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";

function CartPage() {
  const [cart, setCart] = useState([]);
  const productCodes = [
    { product: "T-shirt", description: "", picture: "", quantity: 0 },
    { product: "Sweater", description: "", picture: "", quantity: 0 },
    { product: "Shorts", description: "", picture: "", quantity: 0 },
  ];

  useEffect(() => {
    // Perform localStorage action
    let JSONitems = localStorage.getItem("cart");
    let items = JSON.parse(JSONitems);
    console.log(items);

    items.forEach((c) => {
      if (c.title == "T-Shirt") {
        productCodes[0].quantity += 1;
        productCodes[0].description = c.description;
        productCodes[0].picture = c.picture;
      } else if (c.title == "Sweater") {
        productCodes[1].quantity += 1;
        productCodes[1].description = c.description;
        productCodes[1].picture = c.picture;
      } else if (c.title == "Shorts") {
        productCodes[2].quantity += 1;
        productCodes[2].description = c.description;
        productCodes[2].picture = c.picture;
      }
    });
    setCart(productCodes);
  }, []);

  console.log(cart);

  return (
    <>
      <Nav />
      <div>
        {cart.map((c) =>
          c.quantity > 0 ? (
            <div className="imagecard">
              <h5 className="imagetitle">{c.product} </h5>
              <p className="description">{c.description}</p>
              <p className="description">Quantity: {c.quantity}</p>

              <img className="image" src={c.picture}></img>
              <br />
              <br />
            </div>
          ) : (
            <div></div>
          )
        )}
        ;<button className="imagecard"> Checkout</button>
      </div>
    </>
  );
}

export default CartPage;
