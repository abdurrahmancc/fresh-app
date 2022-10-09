import axiosPrivet from "../../../Components/Hooks/axiosPrivet";

const freshWishlist = "fresh-wishlist";

/*--------- get all wishlist -----------*/
export const getWishlist = async () => {
  try {
    let wishlist = {};
    const storageWishlist = localStorage.getItem(freshWishlist);
    if (storageWishlist) {
      wishlist = JSON.parse(storageWishlist);
    }
    const keys = Object.keys(wishlist);
    const { data } = await axiosPrivet.post("/product/wishlist-products", keys);
    return data;
  } catch (error) {
    console.log(error?.message);
  }
};

/*--------- delete wishlist -----------*/
export const deleteWishlist = async (id) => {
  try {
    const storedWishlist = localStorage.getItem(freshWishlist);
    if (storedWishlist) {
      const wishlist = JSON.parse(storedWishlist);
      if (id in wishlist) {
        delete wishlist[id];
        localStorage.setItem(freshWishlist, JSON.stringify(wishlist));
        return { data: "success" };
      }
    }
  } catch (error) {
    console.log(error?.message);
  }
};

/*--------- add to wishlist -----------*/
export const addWishlist = async (data) => {
  try {
    let wishlist = {};
    const storedWishlist = localStorage.getItem(freshWishlist);
    if (storedWishlist) {
      wishlist = JSON.parse(storedWishlist);
    }
    // add quantity
    let product;
    const quantity = wishlist[data?._id];
    if (quantity) {
      const newQuantity = quantity + 1;
      wishlist[data?._id] = newQuantity;
      product = {};
    } else {
      wishlist[data?._id] = 1;
      product = data;
    }
    localStorage.setItem(freshWishlist, JSON.stringify(wishlist));
    return product;
  } catch (error) {
    console.log(error?.message);
  }
};

/*----------- delete All wishlist   --------------*/
export const deleteAllWishlist = () => {
  localStorage.removeItem(freshWishlist);
  const data = [];
  return data;
};
