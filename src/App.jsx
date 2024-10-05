import Home from "./components/Home.jsx/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx";
import Order from "./components/Orders/Order.jsx";
import TrackingPage from './components/Orders/TrackPage.jsx'
import FeedBack from "./components/FeedBack/FeedBack.jsx";

function App() {
  return (
    <section>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/orders"
            element={<Order />}
          />
          <Route
            path="/orders/:ordersId/:productId"
            element={<TrackingPage />}
          />
          <Route
            path="/feedback"
            element={<FeedBack />}
          />
        </Routes>
    </section>
  );
}

export default App;
