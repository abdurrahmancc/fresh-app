import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../../SharedPages/Footer/Footer";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import BillingDetailsForm from "./BillingDetailsForm";
import CheckoutTable from "./CheckoutTable";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Loading from "../../SharedPages/Loading";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const CheckOut = () => {
  const { carts, isLoading } = useSelector((state) => state?.cartList);
  const [user, loading] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const [cLoading, cSetLoading] = useState(false);
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
      try {
        if (id) {
          cSetLoading(true);
          const { data } = await axiosPrivet.get(`product/product-details/${id}`);

          if (id) {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const info = params.get("info");
            data.quantity = info;
          }
          setProduct([data]);
          cSetLoading(false);
        }
      } catch (error) {
        cSetLoading(false);
        console.log(error.message);
      }
    })();
  }, [id]);

  if (loading || isLoading || cLoading) {
    return <Loading />;
  }

  let totalPrice;
  let Shipping = 15;
  if (!id) {
    const price = carts.map((product) => product.price * product.quantity);
    const initialValue = 0;
    if (price?.length >= 1) {
      const sumReduce = price.reduce((previous, current) => previous + current, initialValue);
      totalPrice = sumReduce;
      Shipping = carts.length * Shipping;
    }
  } else {
    totalPrice = product[0]?.price;
    Shipping = product.length * Shipping;
  }

  const tax = totalPrice * 0.05;
  let total = parseFloat(totalPrice) + Shipping + tax;

  const onSubmit = async (data) => {
    if (!user) {
      toast.error("Please Login or Register Your Fresh Account", { autoClose: 1000 });
      return;
    }

    let itemInfo;
    if (id) {
      itemInfo = product;
    } else {
      itemInfo = carts;
    }
    data.userEmail = user?.email;
    data.photoURL = user?.photoURL;
    data.orderInfo = itemInfo;
    data.totalPrice = total;

    if (itemInfo) {
      try {
        const { data: result } = await axiosPrivet.post("order", data);
        if (result?.acknowledged) {
          toast.success("success", { autoClose: 1000 });
          navigate("/user-dashboard/my-order");
          reset();
        }
      } catch (error) {
        toast.error(error.message, { autoClose: 1000 });
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
                    <CheckoutTable cartProducts={carts} onSubmit={onSubmit} />
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
