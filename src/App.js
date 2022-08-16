import { Link } from "react-router-dom";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <>
      <Link to="/">
        <h1 className="title  flex justify-center text-white">
          Rick and Morty
        </h1>
      </Link>
      <Home />
    </>
  );
}

export default App;
