import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import { useAuthState } from "react-firebase-hooks/auth";
import useProducts from "../../Hooks/useProducts";
import Footer from "../../SharedPages/Footer/Footer";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import BillingDetailsForm from "./BillingDetailsForm";
import CheckoutTable from "./CheckoutTable";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import CheckOutCreateAccount from "./CheckOutCreateAccount";
import Loading from "../../SharedPages/Loading";

const CheckOut = () => {
  const [cartProducts, setCartProducts] = useProducts();
  const [user, loading] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    (async () => {
      if (id) {
        const { data } = await axiosPrivet.get(`product-details/${id}`);
        if (id) {
          const search = window.location.search;
          const params = new URLSearchParams(search);
          const info = params.get("info");
          data.quantity = info;
        }
        setProduct([data]);
      }
    })();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  let totalPrice;
  let Shipping = 15;
  if (!id) {
    const price = cartProducts.map((product) => product.price * product.quantity);
    const initialValue = 0;
    if (price?.length >= 1) {
      const sumReduce = price.reduce((previous, current) => previous + current, initialValue);
      totalPrice = sumReduce;
      Shipping = cartProducts.length * Shipping;
    }
  } else {
    totalPrice = product[0]?.price;
    Shipping = product.length * Shipping;
  }

  const tax = totalPrice * 0.05;
  let total = parseFloat(totalPrice) + Shipping + tax;

  const onSubmit = async (data) => {
    let itemInfo;
    if (id) {
      itemInfo = product;
    } else {
      itemInfo = cartProducts;
    }
    data.userEmail = user?.email;
    data.photoURL = user?.photoURL;
    data.orderInfo = itemInfo;
    data.totalPrice = total;

    if (itemInfo) {
      try {
        const { data: result } = await axiosPrivet.post("order", data);
        if (result?.acknowledged) {
          toast.success("success", { id: "successOrder" });
          navigate("/user-dashboard/my-order");
          reset();
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

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
        <section className="container mx-auto mt-20">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10">
              <div className="">
                <h5 className="bg-primary text-lg font-semibold pl-5 py-3 text-neutral">
                  BILLING DETAILS
                </h5>
                <div className="mt-10">
                  <BillingDetailsForm register={register} errors={errors} />
                </div>
              </div>
              <div className="">
                <h5 className="bg-primary  text-lg font-semibold pl-5 py-3 text-neutral">
                  YOUR ORDER
                </h5>
                <div className="mt-10">
                  {id ? (
                    <CheckoutTable cartProducts={product} onSubmit={onSubmit} />
                  ) : (
                    <CheckoutTable cartProducts={cartProducts} onSubmit={onSubmit} />
                  )}
                </div>
              </div>
            </div>
          </form>
        </section>
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

export default CheckOut;
