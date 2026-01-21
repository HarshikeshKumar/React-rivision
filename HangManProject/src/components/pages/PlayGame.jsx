import { Link } from "react-router-dom";

function PlayGame() {
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
