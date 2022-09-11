import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Table, Tbody, Th, Thead, Tr } from "react-super-responsive-table";
import useProducts from "../../Hooks/useProducts";
import useWishlistProducts from "../../Hooks/useWishlistProducts";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Footer from "../../SharedPages/Footer/Footer";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import WishlistDeleteModal from "./WishlistDeleteModal";
import WishlistTableRow from "./WishlistTableRow";

const Wishlist = () => {
  const [wishProducts, setWishProducts] = useWishlistProducts();

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
          {wishProducts?.length >= 1 ? (
            <div className="border rounded-sm max-w-full">
              <Table className="w-full">
                {/* <!-- head --> */}
                <Thead className="border bg-primary ">
                  <Tr className="sm:text-white">
                    <Th className="font-bold px-4 text-start py-5 text-lg">#</Th>
                    <Th className="font-bold text-start py-5 text-lg">Image</Th>
                    <Th className="font-bold text-start py-5 text-lg">Name</Th>
                    <Th className="font-bold text-start py-5 text-lg">Price</Th>
                    <Th className="font-bold text-center py-5 text-lg ">Stock Status</Th>
                    <Th className="font-bold text-center py-5 text-lg">Action</Th>
                    <Th className="font-bold text-center py-5 text-lg">
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
              <h4>
                <button
                  onClick={() => window.history.back()}
                  className="btn btn-primary text-neutral"
                >
                  Return to Back Page
                </button>
              </h4>
            </div>
          )}
          <WishlistDeleteModal setWishProducts={setWishProducts} />
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

export default Wishlist;
