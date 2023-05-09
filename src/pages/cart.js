// estore.com/
import { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Perform localStorage action
    let JSONitems = localStorage.getItem("cart");
    let items = JSON.parse(JSONitems);
    setCart(items);
  }, []);

  console.log(cart);

  return (
    <>
      <Nav />
      <div>
        {cart.map((c) => (
          <div>
            <h5 className="imagetitle">{c.title} </h5>
            <p className="description">{c.description}</p>
            <img className="image" src={c.picture}></img>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default CartPage;
