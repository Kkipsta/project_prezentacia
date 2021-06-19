import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Login from "../login/Login";
import Home from "../home/Home";
import Registration from "../registration/Registration";
import Posts from "../posts/Posts";

// import protected1 from "../../hoc/protected";
import "./navigation.css";

const Navigation = () => {
  let history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
    history.go(0);
  };

  return (
    <>
      <Router>
        <div className="navigation">
          <div className="navigation__container">
            <div className="nav_links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Regiter</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                <li onClick={() => logout()} style={{ cursor: "pointer" }}>
                  <p>Log out</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/login" component={Login} />

          <Route path="/register" component={Registration} />

          <Route path="/posts" component={Posts} />
        </Switch>
      </Router>
    </>
  );
};

export default Navigation;
