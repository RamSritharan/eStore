// estore.com/
import Nav from "../components/Nav/Nav";
import Card from "../components/Card/cards";
import SideNav from "../components/sideNav/sideNav";

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
      <div className="main-container">
        <div className="child2">
          <SideNav />
        </div>
        <div className="child1">
          <Card products={data} />
        </div>
      </div>
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
