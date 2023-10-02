import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="background-image">
        <h2>Welcome to JobMatch</h2>
        <p>Don't have an account yet?</p>
        <br />
        <Link to="/">
          <button type="submit">Login as Worker</button>
        </Link>
        <Link to="/">
          <button type="submit">Login as Worker</button>
        </Link>
        <Link to="/userRegister">
          <button type="submit">Register as User</button>
        </Link>
        <Link to="/workerRegister">
          <button type="submit">Register as Worker</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
