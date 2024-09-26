import Home from "./components/Home.jsx/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  return (
    <section>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Cart"
            element={<Cart />}
          />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
