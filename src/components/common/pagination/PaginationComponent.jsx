import React from "react";
import { Pagination } from "react-bootstrap";
import { homePageData } from "../../../context/HomeProvider";

const PaginationComponent = () => {
  const { searchValue } = homePageData();
  return (
    <>
      {searchValue.length> 0 ? (
        <Pagination className="justify-content-center mt-4 align-items-center">
          <Pagination.Prev className="pagination-arrow me-3" />
          <div className="pages-link d-flex">
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item active>{20}</Pagination.Item>
          </div>
          <Pagination.Next className="pagination-arrow next-arrow ms-3" />
        </Pagination>
      ) : (
        ""
      )}
    </>
  );
};

export default PaginationComponent;
