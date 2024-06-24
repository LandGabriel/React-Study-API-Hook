import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
