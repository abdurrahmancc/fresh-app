import React from "react";
import { Table, Tbody, Th, Thead, Tr } from "react-super-responsive-table";
import useWishlistProducts from "../../Hooks/useWishlistProducts";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Footer from "../../SharedPages/Footer/Footer";
import Loading from "../../SharedPages/Loading";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import FreeOnlineMoney from "../Home/FreeOnlineMoney";
import WishlistDeleteModal from "./WishlistDeleteModal";
import WishlistTableRow from "./WishlistTableRow";

const Wishlist = () => {
  const [wishProducts, setWishProducts, loading] = useWishlistProducts();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <main>
        {/*---------- Breadcrumb start ---------*/}
        <section className=" bg-slate-100">
          <div className="container mx-auto">
            <div className="py-8 breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </section>
        {/*----------- Breadcrumb end ------------*/}
        <section className="container mx-auto mt-20 min-h-[calc(100vh-820px)] ">
          {wishProducts?.length >= 1 ? (
            <div className="border rounded-sm max-w-full">
              <Table className="w-full">
                {/* <!-- head --> */}
                <Thead className="border border-b-2 border-b-primary bg-[#F3F3F3]">
                  <Tr className="text-black">
                    <Th className="font-semibold px-4 text-start py-5 text-[17px]">#</Th>
                    <Th className="font-semibold text-start py-5 text-[17px]">Image</Th>
                    <Th className="font-semibold text-start py-5 text-[17px]">Name</Th>
                    <Th className="font-semibold text-start py-5 text-[17px]">Price</Th>
                    <Th className="font-semibold text-center py-5 text-[17px] ">Stock Status</Th>
                    <Th className="font-semibold text-center py-5 text-[17px]">Action</Th>
                    <Th className="font-semibold text-center py-5 text-[17px]">
                      <label htmlFor="wishlistDeleteModal">Remove All </label>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/* <!-- row 1 --> */}

                  {wishProducts.map((item, index) => (
                    <WishlistTableRow
                      key={item?._id}
                      item={item}
                      setWishProducts={setWishProducts}
                      index={index}
                      wishProducts={wishProducts}
                    />
                  ))}
                </Tbody>
              </Table>
            </div>
          ) : (
            <div className="min-h-[calc(100vh-820px)] h-[60vh] flex flex-col justify-center gap-y-10 items-center">
              <h4 className="md:text-4xl text-xl font-bold">
                There are 0 products in your wishlist
              </h4>
              <button
                onClick={() => window.history.back()}
                className="text-white duration-300 transition-all ease-in-out flex items-center gap-3 btn-animate hover:bg-[#60880f] bg-primary rounded-full font-semibold uppercase py-4 mx-auto text-center text-lg px-8"
              >
                Return to back page
              </button>
            </div>
          )}
          <WishlistDeleteModal setWishProducts={setWishProducts} />
        </section>
        {/*------- icons  free online money start----- */}
        <section className="container mx-auto mt-20">
          <div className="lg:mx-0 mx-5">
            <FreeOnlineMoney></FreeOnlineMoney>
          </div>
        </section>
        {/*------- icons  free online money end ------*/}
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

export default Wishlist;
