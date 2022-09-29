import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCompareList } from "../Redux/features/compareCounterSlice";
import axiosPrivet from "./axiosPrivet";
import { getCompareListId } from "./useFakeDB";

const useCompareProducts = () => {
  const [compareProducts, setCompareProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

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
        dispatch(setCompareList(data));
        setCompareProducts(savedCompareList);
        setLoading(false);
      }
      setLoading(false);
    })();
  }, [dispatch]);

  return [compareProducts, setCompareProducts, loading];
};
export default useCompareProducts;
