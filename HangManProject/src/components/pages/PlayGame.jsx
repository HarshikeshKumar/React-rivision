import { Link, useParams } from "react-router-dom";

function PlayGame() {
  // Data Fetched through Query Params using useSearchParams() Hook
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("text"));

  // Data Fetched through Path Params using useParams() Hook
  const { text } = useParams();

  return (
    <>
      <h1>Play Game: {text}</h1>
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
