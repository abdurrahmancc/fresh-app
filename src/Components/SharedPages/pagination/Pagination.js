import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

const Pagination = ({ setPage, pageCount }) => {
  const handlePageClick = (event) => {
    setPage(event.selected);
  };

  return (
    <>
      <div id="pagination">
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          breakClassName={"break-me"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          renderOnZeroPageCount={null}
          activeClassName={"active"}
          marginPagesDisplayed={2}
        />
      </div>
    </>
  );
};

export default Pagination;
