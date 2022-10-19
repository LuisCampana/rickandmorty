import { Link } from "react-router-dom";
import Title from "./Components/Title";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Link to="/">
        <Title />
      </Link>
      <Home />
    </>
  );
}

export default App;
