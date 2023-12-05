import { Outlet } from "react-router-dom";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <div>
      <h1>Atelier Fullstack</h1>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
