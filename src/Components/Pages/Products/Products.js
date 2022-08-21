import React from "react";
import Breadcrumb from "../../SharedPages/Breadcrumb";

const Products = () => {
  return (
    <main>
      <section className=" bg-slate-100 py-2 mb-6">
        <div className="container mx-auto">
          <div className="text-sm breadcrumbs">
            <Breadcrumb />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
