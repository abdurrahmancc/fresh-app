import axiosPrivet from "../../../Components/Hooks/axiosPrivet";

const freshCompareList = "fresh-compare-list";

/*--------- get all compare list -----------*/
export const getCompareList = async () => {
  try {
    let compareList = {};
    const storageCompareList = localStorage.getItem(freshCompareList);
    if (storageCompareList) {
      compareList = JSON.parse(storageCompareList);
    }
    const keys = Object.keys(compareList);
    const { data } = await axiosPrivet.post("/product/compare-List/products", keys);
    return data;
  } catch (error) {
    console.log(error?.message);
  }
};

/*--------- delete compare List -----------*/
export const deleteCompare = async (id) => {
  try {
    const storedCompareList = localStorage.getItem(freshCompareList);
    if (storedCompareList) {
      const compareList = JSON.parse(storedCompareList);
      if (id in compareList) {
        delete compareList[id];
        localStorage.setItem(freshCompareList, JSON.stringify(compareList));
        return { data: "success" };
      }
    }
  } catch (error) {
    console.log(error?.message);
  }
};

/*--------- add to compare List -----------*/
export const addCompare = async (data) => {
  try {
    let compareList = {};
    const storedCompareList = localStorage.getItem(freshCompareList);
    if (storedCompareList) {
      compareList = JSON.parse(storedCompareList);
    }
    // add quantity
    let product;
    const quantity = compareList[data?._id];
    if (quantity) {
      const newQuantity = quantity + 1;
      compareList[data?._id] = newQuantity;
      product = {};
    } else {
      compareList[data?._id] = 1;
      product = data;
    }
    localStorage.setItem(freshCompareList, JSON.stringify(compareList));
    return product;
  } catch (error) {
    console.log(error?.message);
  }
};
