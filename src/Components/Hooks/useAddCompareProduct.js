import { useContext } from "react";
import { CompareQuantity } from "../../App";
import useCompareProducts from "./useCompareProducts";
import { compareListAddToDb } from "./useFakeDB";

const useAddCompareProduct = () => {
  const [compareProducts, setCompareProducts] = useCompareProducts([]);
  const [compareQuantity, setCompareQuantity] = useContext(CompareQuantity);

  const handleAddToCompareProduct = (selectProduct) => {
    let newCompareList = [];
    const exists = compareProducts.find((product) => product._id === selectProduct._id);
    if (!exists) {
      selectProduct.quantity = 1;
      newCompareList = [...compareProducts, selectProduct];
    } else {
      const rest = compareProducts.filter((product) => product._id !== exists);
      exists.quantity = exists.quantity + 1;
      newCompareList = [...rest, exists];
    }
    setCompareProducts(newCompareList);
    compareListAddToDb(selectProduct._id);
    setCompareQuantity(newCompareList);
  };

  return [handleAddToCompareProduct, compareProducts];
};

export default useAddCompareProduct;