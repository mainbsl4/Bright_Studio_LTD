import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
