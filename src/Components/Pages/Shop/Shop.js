import React, { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
export const shopAllProducts = createContext("products");

const Shop = () => {
  const { pathname } = useLocation();
  const [selectedSortOption, setSelectedSortOption] = useState("popularity");
  const [selectedShowOption, setSelectedShowOption] = useState({ value: 20, label: "20" });
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [reload, setReload] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(90000);
  const [page, setPage] = useState(0);
  // const [size, setSize] = useState(selectedShowOption.value);

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

  const [categories, setCategories] = useState([
    { id: 1, checked: false, label: "grocery&Frozen", value: "Grocery & Frozen" },
    { id: 4, checked: false, label: "freshVegetable", value: "Fresh Vegetable" },
    { id: 2, checked: false, label: "freshFruits", value: "Fresh Fruits" },
    { id: 3, checked: false, label: "fruitJuices", value: "Fruit Juices" },
    { id: 6, checked: false, label: "salads", value: "Salads" },
    { id: 7, checked: false, label: "freshMeat", value: "Fresh Meat" },
    { id: 8, checked: false, label: "butter&Egg", value: "Butter & Egg" },
    { id: 9, checked: false, label: "milkCream", value: "Milk Cream" },
    { id: 11, checked: false, label: "oil&Vinegars", value: "Oil & Vinegars" },
    { id: 12, checked: false, label: "bread&Bakery", value: "Bread & Bakery" },
    { id: 13, checked: false, label: "snacksItem", value: "Snacks Item" },
    { id: 14, checked: false, label: "meat", value: "Meat" },
  ]);

  // console.log(selectedShowOption.value);
  // console.log(size);
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const inputSearch = watch("search");

  const categoriesChecked = categories
    .filter((item) => item.checked)
    .map((item) => item.label.toLowerCase());

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.get("product/counter");
      setTotalProducts(data?.count);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivet.post(
          `product/all-products/?page=${page}&size=${selectedShowOption?.value}`,
          categoriesChecked
        );

        if (data) {
          setAllProducts(data);
          setProducts(data);
          setReload(true);
          console.log(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [reload, page, selectedShowOption?.value, categoriesChecked.length]);

  // filter categories

  const handleChangeChecked = (id) => {
    const categoriesStateList = categories;
    const changeCheckedList = categoriesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategories(changeCheckedList);
  };

  // filter products
  const applyFilters = () => {
    let filterAllProducts = allProducts;
    let filterProducts = products;
    let priceFilter;
    let filterProduct;

    // filter categories
    const categoriesChecked = categories
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (categoriesChecked.length) {
      filterProduct = filterAllProducts.filter((item) =>
        categoriesChecked.includes(item.category.toLowerCase())
      );

      if (filterProduct.length) {
        // setProducts(filterProduct);
        filterAllProducts = filterProduct;
      }
    }

    // Search Filter
    if (inputSearch) {
      filterAllProducts = allProducts.filter(
        (item) => item?.productName.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1
      );
    }

    // filter price
    if (minPrice !== 100 || maxPrice !== 90000) {
      priceFilter = filterAllProducts.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );

      if (filterProducts.length) {
        filterAllProducts = priceFilter;
      }
    }

    setProducts(filterAllProducts);
  };

  const onSubmit = (data) => {};

  useEffect(() => {
    applyFilters();
  }, [categories, minPrice, maxPrice, inputSearch]);

  if (!products) {
    // return <Loading />;
  }
  // console.log(pathname);

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
          <shopAllProducts.Provider
            value={[products, setProducts, setReload, page, setPage, selectedShowOption?.value]}
          >
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
                <div
                  className={` ${
                    pathname.includes("/shop/fullwidth") ? "lg:col-span-5" : "lg:col-span-4"
                  }`}
                >
                  <div className="flex lg:justify-between items-center justify-center ">
                    <div className="max-w-xs w-full lg:block hidden ">
                      <p>
                        Showing 1–{selectedShowOption.value} of {totalProducts} results
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
                          defaultValue={selectedShowOption}
                          onChange={setSelectedShowOption}
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
                  <div className="my-10 ">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </shopAllProducts.Provider>
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

export default Shop;
