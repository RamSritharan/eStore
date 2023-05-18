// estore.com/
import { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";

function CartPage() {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState([]);

  const productCodes = [
    { product: "T-shirt", description: "", picture: "", quantity: 0, price: 0 },
    { product: "Sweater", description: "", picture: "", quantity: 0, price: 0 },
    { product: "Shorts", description: "", picture: "", quantity: 0, price: 0 },
  ];

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  useEffect(() => {
    // Perform localStorage action
    let JSONitems = localStorage.getItem("cart");
    let items = JSON.parse(JSONitems);

    if (items !== null) {
      items.forEach((c) => {
        let priceInt = parseInt(c.price);
        if (c.title == "T-Shirt") {
          productCodes[0].quantity += 1;
          productCodes[0].description = c.description;
          productCodes[0].price += priceInt; //Error right here
        } else if (c.title == "Sweater") {
          productCodes[1].quantity += 1;
          productCodes[1].description = c.description;
          productCodes[1].price += priceInt;
        } else if (c.title == "Shorts") {
          productCodes[2].quantity += 1;
          productCodes[2].description = c.description;
          productCodes[2].price += priceInt;
        }
      });
    }
    setCart(productCodes);
  }, []);

  console.log(cart);

  let checkoutTerm = async (e) => {
    e.preventDefault();
    let jwt = localStorage.getItem("token");
    setCheckout(JSON.stringify(cart));
    let fetchResponse = await fetch("http://localhost:8080/orderAdd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: productCodes }),
    });
    let checkoutResponse = await fetchResponse.json(); // <-- decode fetch response
    console.log("STATUS", checkoutResponse);
  };

  return (
    <>
      <Nav />
      <div>
        {cart.map((c) =>
          c.quantity > 0 ? (
            <div className="imagecard">
              <h5 className="imagetitle">{c.product} </h5>
              <p className="cartDescription">{c.description}</p>
              <p className="cartDescription">Quantity: {c.quantity}</p>
              <p className="cartDescription">
                Total Price: {formatter.format(c.price)}
              </p>
              <br />
              <br />
            </div>
          ) : (
            <div></div>
          )
        )}
        ;
        <button className="description" onClick={checkoutTerm}>
          {" "}
          Checkout
        </button>
      </div>
    </>
  );
}

export default CartPage;
