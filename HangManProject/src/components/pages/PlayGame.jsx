import { Link, useLocation } from "react-router-dom";

function PlayGame() {
  // Data Fetched through Query Params using useSearchParams() Hook
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("text"));

  // Data Fetched through Path Params using useParams() Hook
  // const { text } = useParams();

  const { state } = useLocation();

  // let arr = ["Hello", "World"];
  // let arr = ["<b>Hello</b>", "<h1>World</h1>"];
  let arr = ["Hello", "World"];

  return (
    <>
      <h1>Play Game: {state.wordSelected}</h1>
      {/* {arr} */}
      {arr.map((elem, idx) => (
        <b key={idx}>{elem}</b>
      ))}
      {/* <a href="/start" className="text-blue-400">
        Start Game Link
      </a> */}
      <Link to="/start" className="text-blue-400">
        Start Game Link
      </Link>
    </>
  );
}

export default PlayGame;
