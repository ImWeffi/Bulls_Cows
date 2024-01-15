import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <strong>This page doesn't exist. Go</strong> <Link to="/game">game</Link>
    </div>
  );
};

export default NotFound;
