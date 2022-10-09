import axiosPrivet from "../../../Components/Hooks/axiosPrivet";

const freshShoppingCart = "fresh-shopping-cart-list";

/*--------- get all Carts -----------*/
export const getCarts = async () => {
  try {
    let shoppingCart = {};
    const storageCart = localStorage.getItem(freshShoppingCart);
    if (storageCart) {
      shoppingCart = JSON.parse(storageCart);
    }
    const keys = Object.keys(shoppingCart);
    const { data } = await axiosPrivet.post("/product/cart-products", keys);
    return data;
  } catch (error) {
    console.log(error?.message);
  }
};

/*--------- delete Cart -----------*/
export const deleteCart = async (id) => {
  try {
    const storedCart = localStorage.getItem(freshShoppingCart);
    if (storedCart) {
      const shoppingCart = JSON.parse(storedCart);
      if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem(freshShoppingCart, JSON.stringify(shoppingCart));
        return { message: "success" };
      }
    }
  } catch (error) {
    console.log(error?.message);
  }
};

/*----------- delete All Shopping Cart  --------------*/
export const deleteCarts = () => {
  localStorage.removeItem(freshShoppingCart);
  const data = [];
  return data;
};

/*--------- add to Cart -----------*/
export const addCart = async (data) => {
  try {
    let shoppingCart = {};
    const storedCart = localStorage.getItem(freshShoppingCart);
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    // add quantity
    let product;
    const quantity = shoppingCart[data?._id];
    if (quantity) {
      const newQuantity = quantity + 1;
      shoppingCart[data?._id] = newQuantity;
      product = {};
    } else {
      shoppingCart[data?._id] = 1;
      product = data;
    }
    localStorage.setItem(freshShoppingCart, JSON.stringify(shoppingCart));
    return product;
  } catch (error) {
    console.log(error?.message);
  }
};
