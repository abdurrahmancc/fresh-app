import React, { useState } from "react";
import logo from "../../../../assets/logo/logo-1.png";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeftRight } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import Select from "react-select";
import { middleCategorySelected } from "../../../SharedCss/SelectComponentCss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import Loading from "../../Loading";
import { useEffect } from "react";
import { fetchCarts } from "../../../../redux/features/shoppingCart/shoppingCartSlice";
import { setSearchProducts } from "../../../../redux/features/searchProducts/searchProductsSlice";
import { fetchWishlist } from "../../../../redux/features/wishlist/wishlistSlice";
import { fetchCompareList } from "../../../../redux/features/compare/compareListSlice";

const options = [
  { value: "grocery&Frozen", label: "Grocery & Frozen" },
  { value: "freshVegetable", label: "Fresh Vegetable" },
  { value: "freshFruits", label: "Fresh Fruits" },
  { value: "fruitJuices", label: "Fruit Juices" },
  { value: "salads", label: "Salads" },
  { value: "freshMeat", label: "Fresh Meat" },
  { value: "butter&Egg", label: "Butter & Egg" },
  { value: "milkCream", label: "Milk Cream" },
  { value: "oil&Vinegars", label: "Oil & Vinegars" },
  { value: "bread&Bakery", label: "Bread & Bakery" },
  { value: "snacksItem", label: "Snacks Item" },
  { value: "fish", label: "Fish" },
];

const MiddleHeader = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { wishlist, cartList, compareList } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCarts());
    dispatch(fetchWishlist());
    dispatch(fetchCompareList());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.searchItems) {
      return;
    }
    let info = {};
    if (selectedOption) {
      info = {
        inputData: data?.searchItems,
        category: selectedOption?.value,
      };
    } else {
      info = {
        inputData: data.searchItems,
      };
    }

    try {
      setIsLoading(true);
      const { data } = await axiosPrivet.post("product/search", info);
      dispatch(setSearchProducts(data?.result));
      reset();
      navigate("/shop");
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className=" hidden lg:block">
        <div className="container mx-auto">
          <div className="z-20 relative ">
            <div className="navbar  py-7">
              <div className="navbar-start  lg:pr-8 pr-4 flex items-center justify-between">
                <Link to="/" className="max-h-[60px] pl-0">
                  <img className="w-[10vw] lg:w-[100px]  max-w-[150px]" src={logo} alt="logo" />
                </Link>
              </div>
              {/*----- category search from start ------*/}
              <div className="navbar-center rounded-full border border-primary z-50 bg-[white] w-[50vw] max-w-[700px] ">
                <div className="w-full h-full">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex justify-center w-full h-full relative"
                  >
                    <div className="inline-block z-10 max-w-[160px] xl:max-w-[190px]  relative w-full">
                      <Select
                        id="select-component"
                        styles={middleCategorySelected}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder={"All Categories"}
                      />
                    </div>

                    <div className="z-20 border-[#070707] "></div>
                    <label className="relative block w-full">
                      <button
                        type="submit"
                        className="absolute bg-[#76A713] duration-500 h-full capitalize text-[15px] font-bold border-none hover:bg-[#6a9d04] right-[0px] rounded-r-full btn-animate text-white transition-all flex items-center px-10"
                      >
                        Search
                      </button>
                      <input
                        className="placeholder:italic placeholder:text-slate-500 block bg-white w-full h-full lg:max-w-[300px] xl:max-w-[400px] rounded-md py-2 pl-6 pr-9 focus:outline-none focus:border-0 focus:ring-0 sm:text-sm"
                        placeholder="Search for items..."
                        type="text"
                        name="search"
                        {...register("searchItems")}
                      />
                    </label>
                  </form>
                </div>
              </div>
              {/*----- category search from end ------*/}
              <div className="navbar-end ">
                <ul className="flex items-center lg:pl-0  pl-4 xl:gap-8 md:gap-4 gap-2 justify-end ">
                  <li>
                    <div title="compare" className="indicator">
                      <Link
                        to={"/shop-compare"}
                        className="lg:p-3 p-2 rounded-full bg-primary text-white"
                        aria-label="compare"
                      >
                        <BsArrowLeftRight className="text-lg" />
                      </Link>
                      <div
                        style={{
                          background: "radial-gradient(circle at 50px 50px, #aa010a, #eb121d)",
                        }}
                        className="flex justify-center items-center p-1 lg:w-5 lg:h-5 h-4 w-4 rounded-full  text-white cursor-pointer indicator-item top-2 right-1 text-[0.6875rem]"
                      >
                        <span>{compareList?.compareList?.length || 0}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div title="wishlist" className="indicator">
                      <Link
                        to={"/wishlist"}
                        className="lg:p-3 p-2 rounded-full bg-primary text-white"
                        aria-label="wishlist"
                      >
                        <FiHeart className="text-lg" />
                      </Link>
                      <div
                        style={{
                          background: "radial-gradient(circle at 50px 50px, #aa010a, #eb121d)",
                        }}
                        className="flex justify-center items-center p-1 lg:w-5 cursor-pointer lg:h-5 h-4 w-4 rounded-full  text-white  indicator-item top-2 right-1 text-[0.6875rem]"
                      >
                        <span>{wishlist?.wishlist?.length || 0}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div title="cart" className="indicator">
                      <Link
                        to={"/shopping-cart"}
                        className="lg:p-3 p-2  rounded-full bg-primary text-white"
                        aria-label="shopping-cart"
                      >
                        <MdAddShoppingCart className="text-lg " />
                      </Link>
                      <div
                        style={{
                          background: "radial-gradient(circle at 50px 50px, #aa010a, #eb121d)",
                        }}
                        className="flex justify-center items-center p-1 lg:w-5 cursor-pointer lg:h-5 h-4 w-4 rounded-full  text-white  indicator-item top-2 right-1 text-[0.6875rem]"
                      >
                        <span>{cartList?.carts?.length || 0}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleHeader;
