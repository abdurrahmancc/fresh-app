import React, { memo, createContext, useMemo, useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import ShopFilter from "./ShopFilter";
import Select from "react-select";
import { shopProduct, sortByProduct } from "../../SharedCss/SelectComponentCss";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import Footer from "../../SharedPages/Footer/Footer";
import { filterCategories } from "./shopCategories";
import Loading from "../../SharedPages/Loading";
import Pagination from "../../SharedPages/pagination/Pagination";
import { useSelector } from "react-redux";
export const shopAllProducts = createContext("products");
const sortOptions = [
  { value: "popularity", label: "popularity" },
  { value: "averageRating", label: "average Rating" },
  { value: "latest", label: "latest" },
  { value: "lowToHight", label: "low To Hight" },
  { value: "hightToLow", label: "hight To Low" },
];
const showOption = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 30, label: "30" },
];

const Shop = () => {
  const { pathname } = useLocation();
  const [selectedSortOption, setSelectedSortOption] = useState("popularity");
  const [size, setSize] = useState({ value: 20, label: "20" });
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(150);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState(filterCategories);
  const searchProducts = useSelector((state) => state.searchProducts);

  let checkedCategories = useMemo(() => {
    let checked = [];
    categories.forEach((category) => {
      if (category.checked) {
        checked = [...checked, category.label];
      }
    });
    return checked;
  }, [categories]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosPrivet.get("product/counter");
        const count = data.count;
        const pages = Math.ceil(count / size.value);
        setPageCount(pages);
        setTotalProducts(data?.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    })();
  }, [size.value]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosPrivet.post(
          `product/all-products/?page=${page}&size=${size?.value}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
          checkedCategories
        );
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    })();
  }, [page, size?.value, checkedCategories, minPrice, maxPrice]);

  // filter categories
  const handleChangeChecked = (id) => {
    const categoriesStateList = categories;
    const changeCheckedList = categoriesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategories(changeCheckedList);
  };

  useEffect(() => {
    try {
      if (searchProducts?.isSearchProducts) {
        if (searchProducts?.products) {
          setProducts(searchProducts?.products);
        } else {
          setProducts([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchProducts]);

  return (
    <>
      <main>
        {/* Breadcrumb start */}
        <section className=" bg-slate-100">
          <div className="container mx-auto">
            <div className="py-8 breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </section>
        {/* Breadcrumb end */}
        {/* filter body start*/}
        <section className="container mx-auto mt-20">
          <shopAllProducts.Provider value={[products]}>
            <div className=" w-full">
              <div className="grid  gap-8 lg:grid-cols-5">
                <div
                  className={` w-full ${
                    pathname.includes("/shop/fullwidth") ? "hidden" : "lg:col-span-1"
                  }`}
                >
                  <div className="lg:sticky top-0 ">
                    <ShopFilter
                      handleChangeChecked={handleChangeChecked}
                      categories={categories}
                      set_minValue={setMinPrice}
                      minValue={minPrice}
                      set_maxValue={setMaxPrice}
                      maxValue={maxPrice}
                    />
                  </div>
                </div>

                {products && (
                  <div
                    className={` ${
                      pathname.includes("/shop/fullwidth") ? "lg:col-span-5" : "lg:col-span-4"
                    }`}
                  >
                    <div className="flex lg:justify-between items-center justify-center ">
                      <div className="max-w-xs w-full lg:block hidden ">
                        <p>
                          Showing 1–{size.value} of {totalProducts} results
                        </p>
                      </div>
                      <div className="flex justify-center items-center lg:gap-5 gap-3 ">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold">Sort by: </span>
                          <Select
                            styles={sortByProduct}
                            id="top-header-select-component"
                            defaultValue={selectedSortOption}
                            onChange={setSelectedSortOption}
                            placeholder={"popularity"}
                            options={sortOptions}
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold">Show: </span>
                          <Select
                            styles={shopProduct}
                            id="top-header-select-component"
                            defaultValue={size}
                            onChange={setSize}
                            placeholder={"5"}
                            options={showOption}
                          />
                        </div>
                        <NavLink to="1">
                          <MdGridView className="cursor-pointer text-lg" />
                        </NavLink>
                        <NavLink to="2">
                          <FaList className="cursor-pointer text-lg" />
                        </NavLink>
                      </div>
                    </div>
                    {products ? (
                      <div className="mt-10">
                        <Outlet />
                        <div className="flex justify-center mt-10">
                          <Pagination pageCount={pageCount} setPage={setPage} />
                        </div>
                      </div>
                    ) : (
                      <div className="min-h-[calc(100vh-820px)] h-[60vh] flex flex-col justify-center gap-y-10 items-center">
                        <h4 className="md:text-4xl text-xl font-bold">There are 0 products</h4>
                        <button
                          onClick={() => window.history.back()}
                          className="text-white duration-300 transition-all ease-in-out flex items-center gap-3 btn-animate hover:bg-[#60880f] bg-primary rounded-full font-semibold uppercase py-4 mx-auto text-center text-lg px-8"
                        >
                          Return to back page
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </shopAllProducts.Provider>
          {isLoading && <Loading />}
        </section>
        {/* filter body end*/}
        {/*------ Newsletters start ------*/}
        <section className="max-w-[100%] w-full mt-20">
          <Newsletters></Newsletters>
        </section>
        {/*------ Newsletters end -------*/}
      </main>
      {/*------ footer start ------*/}
      <footer className=" mt-20">
        <div className="lg:mx-0 mx-5">
          <Footer></Footer>
        </div>
      </footer>
      {/*------ footer end -------*/}
    </>
  );
};

export default memo(Shop);
