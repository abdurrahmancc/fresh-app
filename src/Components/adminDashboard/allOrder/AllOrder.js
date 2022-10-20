import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import OrderTable from "./OrderTable";
import SearchOrderModal from "./SearchOrderModal";
import { toast } from "react-toastify";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Loading from "../../SharedPages/Loading";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import ScrollBtn from "../../SharedPages/ScrollBtn";

const AllOrder = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  const [pageCount, setPageCount] = useState(0);
  const [searchResult, setSearchResult] = useState({});
  const [toggleSearch, setToggleSearch] = useState(false);
  const [orderDeleteModal, setOrderDeleteModal] = useState(null);
  const [orderDetailModal, setOrderDetailModal] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.get("ordersCounter");
      const count = data.count;
      const pages = Math.ceil(count / size);
      setPageCount(pages);
    })();
  }, [size]);

  const {
    data: result,
    isLoading,
    refetch,
  } = useQuery(["userOrders", page, size], () =>
    axiosPrivet.post(`order/orders?page=${page}&size=${size}`)
  );

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    if (data?.searchOrder) {
      try {
        const { data: result } = await axiosPrivet.get(`searchOrder/${data?.searchOrder}`);
        if (result) {
          setSearchResult(result);
          setToggleSearch(true);
        }
      } catch (error) {
        toast.error(`not result found ${data?.searchOrder} please enter your order Id`, {
          autoClose: 1000,
        });
      }
    }
  };

  console.log(orderDetailModal);

  return (
    <>
      <div className="p-10 w-full">
        <div className="flex justify-between pb-4">
          <h4 className="uppercase text-[1.4vw] text-neutral font-bold">ORDERS</h4>
          <div>
            <div className="text-sm breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </div>
        <div className="bg-base-100 p-5">
          <div className="flex justify-between">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className={`relative w-[250px]  md:block max-w-xs hidden `}>
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-2 rounded pr-1  flex items-center pl-2"
                  >
                    <BiSearchAlt className="text-2xl text-gray-400" />
                  </button>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-base-200 w-full  py-2 pl-6  pr-9 shadow-sm focus:outline-none focus:border-0 rounded-full  focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="text"
                    name="search"
                    {...register("searchOrder")}
                  />
                </label>
              </form>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <span>Show: </span>
                <select
                  defaultValue={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="border-primary border py-1 text-black"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                </select>
              </div>
              <button className="btn btn-sm capitalize font-normal  text-neutral rounded-full btn-success">
                <HiOutlinePlus className="" /> add new order
              </button>
            </div>
          </div>
          <OrderTable
            orders={result?.data?.orders}
            refetch={refetch}
            reset={reset}
            setOrderDeleteModal={setOrderDeleteModal}
            orderDeleteModal={orderDeleteModal}
            setOrderDetailModal={setOrderDetailModal}
            orderDetailModal={orderDetailModal}
          />
          {searchResult && (
            <SearchOrderModal
              order={searchResult}
              toggleSearch={toggleSearch}
              setToggleSearch={setToggleSearch}
              setOrderDeleteModal={setOrderDeleteModal}
              setOrderDetailModal={setOrderDetailModal}
              orderDetailModal={orderDetailModal}
            />
          )}
          <div className="flex justify-center gap-1 -mt-10 pb-5">
            {[...Array(5).keys()].map((number, index) => (
              <button
                key={index}
                className={`btn rounded-full border-[#76A713]   border px-5 flex justify-center items-center hover:bg-[#76A713] hover:text-white ${
                  page === number
                    ? "bg-[#76A713] hover:bg-[#76A713] text-white hover:border-[#76A713] "
                    : "text-black"
                }`}
                onClick={() => setPage(number)}
              >
                <span>{number + 1}</span>
              </button>
            ))}
          </div>
          <ScrollBtn />
        </div>
      </div>
    </>
  );
};

export default AllOrder;
