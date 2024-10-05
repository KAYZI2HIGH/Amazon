import { useContext } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../../utils/UseContext";
import NavBar from "../NavBar";
import TrackDetails from "./TrackDetails";

const TrackPage = () => {
  const {orders} = useContext(myContext)
  const { ordersId, productId } = useParams();
  const detail = orders.find((order) => order.orderId === ordersId);
  const productDetails = detail.products.find((data) => data.id === productId);

  return (
    <section>
      <NavBar />
      <section className="px-[15%] mt-32">
        <TrackDetails data={productDetails} />
      </section>
    </section>
  );
};

export default TrackPage;
