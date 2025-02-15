import { useContext } from "react";
import NavBar from "../NavBar";
import { myContext } from "../../utils/UseContext";
import Products from "./Products";

const Home = () => {
  const { productData, setProductData, search } = useContext(myContext);
  return (
    <section>
      <NavBar />
      <main>
        <section className="grid grid-cols-auto gap-[-1px] mt-20">
          {productData
            .filter((eachProducts) => {
              return search.toLowerCase() === ""
                ? eachProducts
                : eachProducts.name.toLowerCase().includes(search);
            })
            .map((eachProducts) => {
              return (
                <Products
                  product={eachProducts}
                  key={eachProducts.id}
                />
              );
            })}
        </section>
      </main>
    </section>
  );
};

export default Home;
