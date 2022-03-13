import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate"

const Pagination = ({info, pageNumber, setPageNumber}) => {

  // resizing the window
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  /* HOW TO CREATE PREV AND NEXT BUTTON  */

    // x is the current value of the page
    /* let prev = () => {
        // stop go prev page when the page 1
        if (pageNumber === 1 ) return
        setPageNumber((x) => x - 1)
    }
    let next = () => {
        setPageNumber((x) => x + 1)
    }

  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
        <button onClick={prev} className="btn btn-primary">Prev</button>
        <button onClick={next} className="btn btn-primary">Next</button>
    </div>
  ) */

  /* PAGINATION CREATION */
   
  return (
    <>
    <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
    <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-light fs-5 prev"
        nextLabel="Next "
        nextClassName="btn btn-light fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}

        // To get the total nb of pages of the API
        pageCount={info?.pages}

        // OnPageChange starts at 0 
        onPageChange={(data) => {setPageNumber(data.selected + 1)}}

        pageClassName="page-item"
        pageLinkClassName="page-link"
        
      />
      </>
  )
}

export default Pagination