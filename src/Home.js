import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/activity">Activity</Link>
          </li>
          <li>
            <Link to="/feeding">Feeding</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Home;