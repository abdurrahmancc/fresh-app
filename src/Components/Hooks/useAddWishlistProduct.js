import { wishlistAddToDb } from "./useFakeDB";
import useWishlistProducts from "./useWishlistProducts";
import { useDispatch } from "react-redux";
import { setWishList } from "../Redux/features/wishlistCounterSlice";

const useAddWishlistProduct = () => {
  const [wishlistProducts, setWishlistProducts] = useWishlistProducts([]);
  const dispatch = useDispatch();

  const handleAddToWishlistProduct = (selectProduct) => {
    try {
      let newWishlist = [];
      let exists = wishlistProducts.find((product) => product._id === selectProduct._id);
      if (!exists) {
        selectProduct.quantity = 1;
        newWishlist = [...wishlistProducts, selectProduct];
      } else {
        const rest = wishlistProducts.filter((product) => product._id !== exists);
        exists.quantity = exists.quantity + 1;
        newWishlist = [...rest, exists];
      }
      setWishlistProducts(newWishlist);
      wishlistAddToDb(selectProduct._id);
      dispatch(setWishList(newWishlist));
    } catch (error) {
      console.log(error.message);
    }
  };

  return [handleAddToWishlistProduct, wishlistProducts];
};

export default useAddWishlistProduct;
