import axiosPrivet from "../../Hooks/axiosPrivet";

const freshShoppingCart = "fresh-shopping-cart-list";

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

export const deleteCart = async (id) => {
  try {
    const storedCart = localStorage.getItem(freshShoppingCart);
    if (storedCart) {
      const shoppingCart = JSON.parse(storedCart);
      if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem(freshShoppingCart, JSON.stringify(shoppingCart));
        return { data: "success" };
      }
    }
  } catch (error) {
    console.log(error?.message);
  }
};

export const addCart = async (data) => {
  try {
    let shoppingCart = {};
    //get the shopping cart from local storage

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
    /* get all products */

    // const keys = Object.keys(shoppingCart);
    // const { data: products } = await axiosPrivet.post("/product/cart-products", keys);
    return product;
  } catch (error) {
    console.log(error?.message);
  }
};
