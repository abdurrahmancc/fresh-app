import { useDispatch } from "react-redux";
import { setCartList } from "../Redux/features/shoppingCartCounterSlice";
import { addToDb } from "./useFakeDB";
import useCartProducts from "./useCartProducts";

const useAddProduct = () => {
  const [cartProducts, setCartProducts] = useCartProducts([]);
  const dispatch = useDispatch();

  const handleAddToCartProduct = (selectProduct) => {
    console.log(selectProduct);
    let newCart = [];
    let exists = cartProducts.find((product) => product._id === selectProduct._id);
    console.log(exists);
    if (exists === "undefined") {
      return;
    }
    if (!exists) {
      selectProduct.quantity = 1;
      newCart = [...cartProducts, selectProduct];
    } else {
      const rest = cartProducts.filter((product) => product._id !== exists);
      console.log(rest);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCartProducts(newCart);
    addToDb(selectProduct._id);
    dispatch(setCartList(newCart));
  };

  return [handleAddToCartProduct, cartProducts];
};

export default useAddProduct;
