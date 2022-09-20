import { useEffect, useState } from "react";
import axiosPrivet from "./axiosPrivet";
import { getCompareListId } from "./useFakeDB";

const useCompareProducts = () => {
  const [compareProducts, setCompareProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const storedCompareList = getCompareListId();
      const savedCompareList = [];
      const keys = Object.keys(storedCompareList);
      const { data } = await axiosPrivet.post("/product/compare-List/products", keys);
      if (data) {
        for (const id in storedCompareList) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCompareList[id];
            addedProduct.quantity = quantity;
            savedCompareList.push(addedProduct);
          }
        }
        setCompareProducts(savedCompareList);
      }
    })();
  }, []);

  return [compareProducts, setCompareProducts];
};
export default useCompareProducts;
