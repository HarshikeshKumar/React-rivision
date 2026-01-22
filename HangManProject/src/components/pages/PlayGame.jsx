import { Link, useSearchParams } from "react-router-dom";

function PlayGame() {
  // const params = useSearchParams();
  // console.log(params);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("text"));

  return (
    <>
      <h1>Play Game</h1>
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
