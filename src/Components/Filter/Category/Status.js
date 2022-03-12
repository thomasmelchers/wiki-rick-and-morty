import React from "react";
import FilterButton from "../FilterButton";

const Status = ({setStatus, setPageNumber}) => {

  // the value of the filter which will be asign to the setStatus when you click on it
  let status = ["Dead", "Alive", "Unkwnown"];
  
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap justify-content-center gap-3">
          {status.map((items, index) => (
            <FilterButton
              key={index}
              name="status"
              index={index}
              items={items}
              // asign the value of status to an action
              action={setStatus}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
