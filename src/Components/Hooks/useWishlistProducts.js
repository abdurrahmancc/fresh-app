import { useEffect, useState } from "react";
import axiosPrivet from "./axiosPrivet";
import { getWishlistId } from "./useFakeDB";

const useWishlistProducts = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const storedWishlist = getWishlistId();
      const savedWishlist = [];
      const keys = Object.keys(storedWishlist);
      const { data } = await axiosPrivet.post("/product/wishlist-products", keys);
      if (data) {
        for (const id in storedWishlist) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedWishlist[id];
            addedProduct.quantity = quantity;
            savedWishlist.push(addedProduct);
          }
        }
        setWishlistProducts(savedWishlist);
      }
    })();
  }, []);

  return [wishlistProducts, setWishlistProducts];
};
export default useWishlistProducts;