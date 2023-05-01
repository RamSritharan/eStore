// estore.com/
import Nav from "../components/Nav/Nav";
import Card from "../components/Card/cards";
import { useEffect, useState } from "react";

function LandingPage(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("http://localhost:3001/list")
        .then((response) => response.json())
        .then(() => {
          setProducts(response);
        });
    }
    fetchData();
  }, []);

  console.log("hello", products);

  return (
    <>
      <Nav />
      <Card />
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3001/list");
//   const data = await res.json();
//   console.log("hello", data);
// }

export default LandingPage;
