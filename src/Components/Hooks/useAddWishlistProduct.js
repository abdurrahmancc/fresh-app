import { useContext } from "react";
import { WishlistQuantity } from "../../App";
import { wishlistAddToDb } from "./useFakeDB";
import useWishlistProducts from "./useWishlistProducts";

const useAddWishlistProduct = () => {
  const [wishlistProducts, setWishlistProducts] = useWishlistProducts([]);
  const [wishlistQuantity, setWishlistQuantity] = useContext(WishlistQuantity);

  const handleAddToWishlistProduct = (selectProduct) => {
    let newWishlist = [];
    const exists = wishlistProducts.find((product) => product._id === selectProduct._id);
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
    setWishlistQuantity(newWishlist);
  };

  return [handleAddToWishlistProduct, wishlistProducts];
};

export default useAddWishlistProduct;
