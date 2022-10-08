import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCartList } from "../Redux/features/shoppingCartCounterSlice";
import axiosPrivet from "./axiosPrivet";
import { getShoppingId } from "./useFakeDB";

const useCartProducts = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
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
          dispatch(setCartList(data));
          setLoading(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    })();
  }, [dispatch]);

  return [cartProducts, setCartProducts, loading];
};
export default useCartProducts;
