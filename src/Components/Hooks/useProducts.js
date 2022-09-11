import { useEffect, useState } from "react";
import axiosPrivet from "./axiosPrivet";
import { getShoppingId } from "./useFakeDB";

const useProducts = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const storedCart = getShoppingId();
      const savedCart = [];
      const keys = Object.keys(storedCart);
      const { data } = await axiosPrivet.post("/product/cart-products", keys);
      if (data) {
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCartProducts(savedCart);
      }
    })();
  }, []);

  return [cartProducts, setCartProducts];
};
export default useProducts;
