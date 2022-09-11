import toast from "react-hot-toast";

const freshCompareList = "fresh-compare-list";
const freshShoppingCart = "fresh-shopping-cart-list";
const freshWishlist = "fresh-wishlist";

/*----------- use local storage to manage cart data ----------*/
const addToDb = (id) => {
  try {
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem(freshShoppingCart);
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
    } else {
      shoppingCart[id] = 1;
    }
    localStorage.setItem(freshShoppingCart, JSON.stringify(shoppingCart));
    toast.success("Add To Cart", { id: "add-shopping-cart" });
  } catch (error) {
    toast.error(error.message, { id: "add-shopping-cart" });
  }
};

/* ---------- use local storage to manage wishlist data -------- */
const wishlistAddToDb = (id) => {
  try {
    let wishlist = {};
    //get the wishlist from local storage
    const storedWishlist = localStorage.getItem(freshWishlist);
    if (storedWishlist) {
      wishlist = JSON.parse(storedWishlist);
    }
    // add quantity
    const quantity = wishlist[id];
    if (quantity) {
      const newQuantity = quantity + 1;
      wishlist[id] = newQuantity;
    } else {
      wishlist[id] = 1;
    }
    localStorage.setItem(freshWishlist, JSON.stringify(wishlist));
    toast.success("Add To Wishlist", { id: "add-wishlist" });
  } catch (error) {
    toast.error(error.message, { id: "wishlistAddToDb" });
  }
};

/* ---------- use local storage to manage wishlist data -------- */
const compareListAddToDb = (id) => {
  try {
    let compareList = {};
    //get the wishlist from local storage
    const storedCompareList = localStorage.getItem(freshCompareList);
    if (storedCompareList) {
      compareList = JSON.parse(storedCompareList);
    }
    // add quantity
    const quantity = compareList[id];
    if (quantity) {
      const newQuantity = quantity + 1;
      compareList[id] = newQuantity;
    } else {
      compareList[id] = 1;
    }
    localStorage.setItem(freshCompareList, JSON.stringify(compareList));
    toast.success("Add To Compare List", { id: "compareListAddToDb" });
  } catch (error) {
    toast.error(error.message, { id: "compareListAddToDb" });
  }
};

//  decrease To shopping Cart
const decreaseToCart = (id) => {
  try {
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem(freshShoppingCart);
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
      const newQuantity = quantity - 1;
      shoppingCart[id] = newQuantity;
    } else {
      shoppingCart[id] = 1;
    }
    localStorage.setItem(freshShoppingCart, JSON.stringify(shoppingCart));
  } catch (error) {
    toast.error(error.message, { id: "decreaseToCart-error" });
  }
};

/*----------- decrease To Wishlist ---------*/
const decreaseToWishlist = (id) => {
  try {
    let wishlist = {};
    //get the wishlist from local storage
    const storedWishlist = localStorage.getItem(freshShoppingCart);
    if (storedWishlist) {
      wishlist = JSON.parse(storedWishlist);
    }
    // add quantity
    const quantity = wishlist[id];
    if (quantity) {
      const newQuantity = quantity - 1;
      wishlist[id] = newQuantity;
    } else {
      wishlist[id] = 1;
    }
    localStorage.setItem(freshWishlist, JSON.stringify(wishlist));
  } catch (error) {
    toast.error(error.message, { id: "decreaseToWishlist-error" });
  }
};

/*----------- decrease To compare List ---------*/
const decreaseToCompareList = (id) => {
  try {
    let compareList = {};
    //get the wishlist from local storage
    const storedCompareList = localStorage.getItem(freshShoppingCart);
    if (storedCompareList) {
      compareList = JSON.parse(storedCompareList);
    }
    // add quantity
    const quantity = compareList[id];
    if (quantity) {
      const newQuantity = quantity - 1;
      compareList[id] = newQuantity;
    } else {
      compareList[id] = 1;
    }
    localStorage.setItem(freshCompareList, JSON.stringify(compareList));
  } catch (error) {
    toast.error(error.message, { id: "decreaseToWishlist-error" });
  }
};

/*---------------- get Shopping cart Id -----------------*/
const getShoppingId = () => {
  try {
    let shoppingCart = {};
    const storageCart = localStorage.getItem(freshShoppingCart);
    if (storageCart) {
      shoppingCart = JSON.parse(storageCart);
    }
    return shoppingCart;
  } catch (error) {
    toast.error(error.message, { id: "getShoppingId-error" });
  }
};

/*---------- get Wishlist Id ------------*/
const getWishlistId = () => {
  try {
    let wishlist = {};
    const storageWishlist = localStorage.getItem(freshWishlist);
    if (storageWishlist) {
      wishlist = JSON.parse(storageWishlist);
    }
    return wishlist;
  } catch (error) {
    toast.error(error.message, { id: "getWishlistId-error" });
  }
};

/*---------- get compare list Id ------------*/
const getCompareListId = () => {
  try {
    let compareList = {};
    const storageCompareList = localStorage.getItem(freshCompareList);
    if (storageCompareList) {
      compareList = JSON.parse(storageCompareList);
    }
    return compareList;
  } catch (error) {
    // toast.error(error.message, { id: "getCompareListId-error" });
  }
};

/*-----------shopping cart remove From Db -----------*/
const removeFromDb = (id) => {
  try {
    const storedCart = localStorage.getItem(freshShoppingCart);
    if (storedCart) {
      const shoppingCart = JSON.parse(storedCart);
      if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem(freshShoppingCart, JSON.stringify(shoppingCart));
        toast.success("Delete", { id: "removeFromDb" });
      }
    }
  } catch (error) {
    toast.error(error.message, { id: "removeFromDb-error" });
  }
};

/*--------- Wishlist Remove From Db -----------*/
const WishlistRemoveFromDb = (id) => {
  try {
    const storedWishlist = localStorage.getItem(freshWishlist);
    if (storedWishlist) {
      const wishlist = JSON.parse(storedWishlist);
      if (id in wishlist) {
        delete wishlist[id];
        localStorage.setItem(freshWishlist, JSON.stringify(wishlist));
        toast.success("Delete");
      }
    }
  } catch (error) {
    toast.error(error.message, { id: "WishlistRemove-error" });
  }
};

/*--------- Remove A compare-list  From Db -----------*/
const compareListRemoveFromDb = (id) => {
  try {
    const storedCompareList = localStorage.getItem(freshCompareList);
    if (storedCompareList) {
      const compareList = JSON.parse(storedCompareList);
      if (id in compareList) {
        delete compareList[id];
        localStorage.setItem(freshCompareList, JSON.stringify(compareList));
        toast.success("Delete Compare", { id: "delete-Compare-list" });
      }
    }
  } catch (error) {
    toast.error(error.message, { id: "delete-Compare-list" });
  }
};

/*----------- delete All ShoppingCart  --------------*/
const deleteShoppingCart = () => {
  try {
    localStorage.removeItem(freshShoppingCart);
    toast.success("Delete", { id: "deleteShoppingCart" });
  } catch (error) {
    toast.error(error.message, { id: "deleteShoppingCart-error" });
  }
};

/*----------- delete all Wishlist -----------*/
const deleteAllWishlist = () => {
  try {
    localStorage.removeItem(freshWishlist);
    toast.success("Delete", { id: "deleteAllWishlist" });
  } catch (error) {
    toast.error(error.message, { id: "deleteAllWishlist-error" });
  }
};

/*----------- delete all compareList -----------*/
const deleteAllCompareList = () => {
  try {
    localStorage.removeItem(freshWishlist);
    toast.success("Delete", { id: "delete-CompareList" });
  } catch (error) {
    toast.error(error.message, { id: "delete-CompareList" });
  }
};

export {
  addToDb,
  removeFromDb,
  getShoppingId,
  getWishlistId,
  deleteShoppingCart,
  decreaseToCart,
  wishlistAddToDb,
  deleteAllWishlist,
  WishlistRemoveFromDb,
  decreaseToWishlist,
  deleteAllCompareList,
  compareListRemoveFromDb,
  getCompareListId,
  compareListAddToDb,
  decreaseToCompareList,
};
