import { useRouter } from "next/router";
import Nav from "../components/Nav/Nav";
import BottomBar from "../components/bottomBar/bottomBar";

function DetailPage(props) {
  const router = useRouter();

  return (
    <>
      <Nav />
      <div>
        <h1>{router.query.title}</h1>
      </div>
      <BottomBar />
    </>
  );
}

export default DetailPage;
