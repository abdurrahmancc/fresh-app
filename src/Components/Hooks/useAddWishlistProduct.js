import { useContext } from "react";
import { WishlistQuantity } from "../../App";
import { wishlistAddToDb } from "./useFakeDB";
import useWishlistProducts from "./useWishlistProducts";
import { useDispatch } from "react-redux";
import { increment } from "../Redux/features/wishlistCounterSlice";

const useAddWishlistProduct = () => {
  const [wishlistProducts, setWishlistProducts] = useWishlistProducts([]);
  const [wishlistQuantity, setWishlistQuantity] = useContext(WishlistQuantity);
  const dispatch = useDispatch();

  const handleAddToWishlistProduct = (selectProduct) => {
    try {
      let newWishlist = [];
      let exists = wishlistProducts.find((product) => product._id === selectProduct._id);
      if (!exists) {
        console.log(selectProduct);
        selectProduct.quantity = 1;
        newWishlist = [...wishlistProducts, selectProduct];
      } else {
        const rest = wishlistProducts.filter((product) => product._id !== exists);
        exists.quantity = exists.quantity + 1;
        newWishlist = [...rest, exists];
      }
      setWishlistProducts(newWishlist);
      wishlistAddToDb(selectProduct._id);
      dispatch(increment(newWishlist));
      setWishlistQuantity(newWishlist);
    } catch (error) {
      console.log(error.message);
    }
  };

  return [handleAddToWishlistProduct, wishlistProducts];
};

export default useAddWishlistProduct;
