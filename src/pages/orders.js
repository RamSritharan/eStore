// estore.com/
import Nav from "../components/Nav/Nav";

function Orders({ data }) {
  console.log(data);
  return (
    <>
      <div>
        <Nav />
        {data.map((c) => (
          <div>
            <h5> {c.OrderId.N} </h5>
            <p> {c.Products.S} </p>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/getOrders");
  const data = await res.json();
  console.log(data, "Sanu");

  return { props: { data } };
}
export default Orders;
