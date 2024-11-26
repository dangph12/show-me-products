import React from 'react'
import { Pagination } from 'react-bootstrap';

function Paginations({itemPerPage, totalItems, paginate}) {
    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(totalItems/ itemPerPage); i++ ){
      pageNumbers.push(
        <Pagination.Item key={i}  onClick={(i) => paginate(i)}>
          {i}
        </Pagination.Item>
      );
    }

  return (
    <>
      <Pagination className="d-flex justify-content-center mt-5 itemPagination">{pageNumbers}</Pagination>
    </>
  )
}

export default Paginations