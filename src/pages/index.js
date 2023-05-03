// estore.com/
import Nav from "../components/Nav/Nav";
import Card from "../components/Card/cards";

function LandingPage({ data }) {
  // const [products, setProducts] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("http://localhost:8080/list");
  //     const data = res.json();
  //     console.log("yolo", data);
  //     return data;
  //   }
  //   fetchData();
  // });

  return (
    <>
      <Nav />
      <Card products={data} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/list");
  const data = await res.json();
  console.log("yollloooo", data);

  return { props: { data } };
}

export default LandingPage;
